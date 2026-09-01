import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Seekho", timestamp: new Date().toISOString() });
  });

  // AI Teacher endpoint
  app.post("/api/ai-teacher", async (req, res) => {
    try {
      const { message, userProfile, language = "ur", currentCourse, currentLesson, chatHistory = [] } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      const isUrdu = language === "ur" || language === "dual";
      const courseName = currentCourse ? (currentCourse.titleUrdu ? `${currentCourse.titleUrdu} (${currentCourse.titleEn})` : currentCourse.title) : "Practical Skills";
      const lessonName = currentLesson ? (currentLesson.titleUrdu ? `${currentLesson.titleUrdu} (${currentLesson.titleEn})` : currentLesson.title) : "";
      const ageGroup = userProfile?.ageGroup || "All ages";

      // Check if Gemini API key exists
      if (process.env.GEMINI_API_KEY) {
        const ai = new GoogleGenAI({
          apiKey: process.env.GEMINI_API_KEY,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        const systemInstruction = `You are "استاد سیکھو" (Teacher Seekho), an empathetic, deeply knowledgeable, authentic life-and-learning mentor on the educational platform "Seekho" (سیکھو).
The platform's philosophy:
سیکھیں → مشق کریں → خود کو سنواریں → خاندان اور برادری کی خدمت کریں
(Learn → Practice → Improve Yourself → Uplift Family & Community)

Active Learner Profile:
- Name: ${userProfile?.name || "Learner"}
- Age Group: ${ageGroup}
- Education: ${userProfile?.education || "General"}
- Occupation/Role: ${userProfile?.currentOccupation || "Learner"}
- Selected Skill / Course: ${courseName}
- Current Lesson: ${lessonName || "None selected"}
- Language Mode: ${language === "dual" ? "Dual (Urdu Primary + English Summary below)" : language === "ur" ? "Urdu (اردو only)" : "English only"}

STRICT PEDAGOGICAL & CONVERSATIONAL RULES:
1. NEVER output generic or repetitive cookie-cutter replies. Read every user message with deep attention to its specific intent.
2. Directly answer the user's specific question first in conversational, warm, respectful, and natural Urdu (or English/Dual according to mode).
3. If the user asks about Freelancing, give concrete, actionable steps (Skill -> Portfolio -> Local Clients -> Halal income).
4. If the user asks about Starting a Small / Home Business, give low-cost, village/neighbourhood-relevant, real-life actionable guidance.
5. If the user asks about AI in everyday life, give practical everyday examples (drafting letters, solving study problems, brainstorm ideas, translation).
6. If the user asks "What should I do in 15 minutes?", give a structured 15-minute micro-learning recipe (5m Learn + 7m Practice + 3m Check).
7. If the user asks "What is my next step?" ("میرا اگلا قدم کیا ہے؟"), give a personalized 4-6 step milestone plan based on their active course and life stage.
8. Maintain conversational continuity with previous turns in history. If the user asks a follow-up ("اس کی مثال دیں", "مزید بتائیں"), build directly upon what was previously discussed.
9. Structure responses cleanly with:
   - واضح اور ہمدردانہ جواب (Direct clear answer)
   - 📌 اہم عملی نکات (3-4 clear bullet points)
   - 🎯 آج کا فوری عملی قدم (Today's immediate 5-15 minute action)
   - 🔍 فہم کی جانچ / فالو اپ سوال (1 thoughtful follow-up or check question)
10. Authentic Quran & Hadith: When quoting Islamic guidance, ALWAYS include authentic references (Surah/Ayah for Quran, Sahih collection for Hadith). Never invent references.
11. In Dual Mode, provide the complete authentic Urdu text first, followed by "---" and a concise English Summary + Today's Action.`;

        // Format history cleanly for multi-turn generateContent
        const formattedContents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

        if (Array.isArray(chatHistory)) {
          for (const msg of chatHistory.slice(-8)) {
            if (msg && typeof msg.text === "string" && msg.text.trim()) {
              formattedContents.push({
                role: msg.role === "user" ? "user" : "model",
                parts: [{ text: msg.text.trim() }],
              });
            }
          }
        }

        // Add current user turn
        formattedContents.push({
          role: "user",
          parts: [{ text: message.trim() }],
        });

        const response = await ai.models.generateContent({
          model: "gemini-3.7-flash",
          contents: formattedContents,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });

        const replyText = response.text || "";
        const dynamicSuggestions = generateDynamicSuggestions(message, language);

        return res.json({
          reply: replyText,
          suggestions: dynamicSuggestions,
          source: "gemini",
        });
      } else {
        // Fallback intelligent responder based on query classification
        const { reply, suggestions } = generateSmartFallbackReply(message, language, userProfile, currentCourse, currentLesson, chatHistory);
        return res.json({
          reply,
          suggestions,
          source: "local-engine",
        });
      }
    } catch (error: any) {
      console.warn("AI Teacher Gemini API exception, engaging dynamic fallback engine:", error?.message || error);
      const { reply, suggestions } = generateSmartFallbackReply(
        req.body.message || "", 
        req.body.language || "ur", 
        req.body.userProfile, 
        req.body.currentCourse, 
        req.body.currentLesson, 
        req.body.chatHistory || []
      );
      return res.json({
        reply,
        suggestions,
        source: "fallback",
      });
    }
  });

  // Dynamic server setup for Vite (dev) and static files (prod)
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Seekho server is active on http://0.0.0.0:${PORT}`);
  });
}

function generateDynamicSuggestions(message: string, language: string): string[] {
  const q = (message || "").toLowerCase();
  const isUrdu = language === "ur" || language === "dual";

  if (q.includes("اگلا قدم") || q.includes("آگے کیا") || q.includes("next step") || q.includes("اب کیا")) {
    return isUrdu ? [
      "آج کا 15 منٹ کا ہنر مشن شروع کریں",
      "فری لانسنگ شروع کرنے کا پہلا قدم کیا ہے؟",
      "دکان یا گھریلو کاروبار میں موبائل کا فائدہ",
      "مجھے سمجھ نہیں آئی، آسان مثال دیں"
    ] : [
      "Start today's 15-minute mission",
      "What is the first step for freelancing?",
      "How mobile helps local shop/business",
      "Explain with simpler everyday example"
    ];
  }

  if (q.includes("فری لانسنگ") || q.includes("freelanc") || q.includes("کلائنٹ") || q.includes("fiverr") || q.includes("کمائی")) {
    return isUrdu ? [
      "کینوا سے پہلا پورٹ فولیو کیسے بنائیں؟",
      "مقامی دکانوں کو سوشل میڈیا ڈیزائن کیسے پیش کریں؟",
      "آن لائن کمائی میں حلال روزگار کے اصول",
      "میرا اگلا قدم کیا ہے؟"
    ] : [
      "How to build first Canva portfolio?",
      "Offering social media design to local stores",
      "Principles of Halal online income",
      "What is my next step?"
    ];
  }

  if (q.includes("کاروبار") || q.includes("دکان") || q.includes("بزنس") || q.includes("business") || q.includes("گھریلو")) {
    return isUrdu ? [
      "واٹس ایپ اسٹیٹس سے مفت تشہیر کیسے کریں؟",
      "روزانہ آمدن اور خرچ کا حساب کیسے رکھیں؟",
      "چھوٹے کاروبار کے لیے کینوا پر پوسٹر بنانا",
      "گاہک کا اعتماد جیتنے کا اسلامی طریقہ"
    ] : [
      "Free marketing via WhatsApp status",
      "Simple daily accounting for small store",
      "Designing banners on Canva for business",
      "Building customer trust ethically"
    ];
  }

  if (q.includes("ai") || q.includes("مصنوعی ذہانت") || q.includes("chatgpt") || q.includes("پرامپٹ")) {
    return isUrdu ? [
      "AI سے اردو درخواست یا خط کیسے لکھوائیں؟",
      "بچوں کی پڑھائی میں AI سے مدد کیسے لیں؟",
      "چھوٹے کاروبار کے لیے AI سے نئے آئیڈیاز",
      "کیا AI سیکھنے کے لیے کمپیوٹر لازمی ہے؟"
    ] : [
      "Drafting letters in plain Urdu/English with AI",
      "Using AI for children study notes",
      "AI business brainstorming",
      "Do I need coding to use AI?"
    ];
  }

  if (q.includes("15 منٹ") || q.includes("مختصر وقت") || q.includes("15 min") || q.includes("تھوڑا وقت")) {
    return isUrdu ? [
      "آج کا 5 منٹ کا کوئز حل کریں",
      "موبائل پر 7 منٹ کی عملی مشق",
      "میرا اگلا ہدف کیا ہونا چاہیے؟",
      "روزانہ تسلسل برقرار رکھنے کا راز"
    ] : [
      "Take today's 5-minute quiz",
      "7-minute mobile hands-on practice",
      "What should be my next goal?",
      "Secret to daily consistency"
    ];
  }

  return isUrdu ? [
    "میرا اگلا قدم کیا ہے؟",
    "فری لانسنگ شروع کرنے کے لیے کیا سیکھوں؟",
    "گھر بیٹھ کر چھوٹا کاروبار کیسے شروع کروں؟",
    "AI مجھے روزمرہ زندگی میں کیسے فائدہ دے سکتی ہے؟"
  ] : [
    "What is my next step?",
    "What to learn to start freelancing?",
    "How to start a small home business?",
    "How does AI help in daily life?"
  ];
}

function generateSmartFallbackReply(
  message: string,
  language: string,
  userProfile: any,
  currentCourse?: any,
  currentLesson?: any,
  chatHistory: any[] = []
): { reply: string; suggestions: string[] } {
  const query = (message || "").toLowerCase().trim();
  const isUrduOnly = language === "ur";
  const isDual = language === "dual";
  const isUrdu = isUrduOnly || isDual;
  const name = userProfile?.name || (isUrdu ? "پیارے ساتھی" : "Learner");
  const ageGroup = userProfile?.ageGroup || "All ages";
  const activeCourseName = currentCourse
    ? (isUrdu ? (currentCourse.titleUrdu || currentCourse.title) : (currentCourse.titleEn || currentCourse.title))
    : (isUrdu ? "عملی ڈیجیٹل ہنر" : "Practical Digital Skills");

  let urduPart = "";
  let enPart = "";

  // 1. INTENT: "I DIDN'T UNDERSTAND" ("مجھے سمجھ نہیں آئی")
  if (
    query.includes("سمجھ نہیں آئی") ||
    query.includes("سمجھ نہیں آیا") ||
    query.includes("نہیں سمجھی") ||
    query.includes("نہیں سمجھا") ||
    query.includes("دوبارہ بتائیں") ||
    query.includes("آسان الفاظ میں") ||
    query.includes("مشکل ہے") ||
    query.includes("not understand") ||
    query.includes("did not understand") ||
    query.includes("explain again") ||
    query.includes("simpler")
  ) {
    urduPart = `کوئی بات نہیں ${name}! بالکل پریشان نہ ہوں۔

سیکھنے کے دوران کسی بات کا پہلی بار سمجھ نہ آنا **بالکل قدرتی، عام اور مثبت بات ہے**۔ آپ نے سوال پوچھا، یہ آپ کی لگن اور فہم کا ثبوت ہے! 🌱

📌 **آسان روزمرہ مثال:**
جیسے ایک استاد یا کاریگر آپ کے سامنے بیٹھ کر آپ کے ہاتھ سے کام کروا کر دکھاتا ہے، ویسے ہی یہ ہنر بھی بالکل سادہ ہے۔

🎯 **آج کا چھوٹا عملی قدم (3 منٹ):**
ایک سادہ کاغذ اور قلم لیں، اور صرف ایک جملہ لکھیں کہ آپ اس ہنر سے اپنے گھر یا کام کا کون سا مسئلہ حل کرنا چاہتے ہیں۔

🔍 **آپ کی فہم کی جانچ:**
کیا بلا جھجھک سوال پوچھنا بہترین طالب علم کی نشانی ہے؟
(الف: جی ہاں، بالکل! / ب: نہیں)`;

    enPart = `No worries at all, ${name}! Please do not worry.

It is **completely natural and great** to ask for clarification when learning something new. 🌟

📌 **Everyday Analogy:**
Think of sitting next to a patient mentor who guides your hands step-by-step through a simple task.

🎯 **Today's Practical Task (3 mins):**
Write down 1 single sentence describing what problem you want this skill to solve for you.

🔍 **Quick Reflection:**
Is asking questions the hallmark of a great learner?
(A: Yes, absolutely! / B: No)`;
  }
  // 2. INTENT: "WHAT IS MY NEXT STEP?" ("میرا اگلا قدم کیا ہے؟")
  else if (
    query.includes("اگلا قدم") ||
    query.includes("اگلا مرحلہ") ||
    query.includes("آگے کیا") ||
    query.includes("اب کیا کروں") ||
    query.includes("next step") ||
    query.includes("what should i do next") ||
    query.includes("where to start") ||
    query.includes("رہنمائی کریں")
  ) {
    urduPart = `ماشاءاللہ ${name}! آپ کا فعال کورس **"${activeCourseName}"** ہے اور آپ کی عمر (${ageGroup}) کے مطابق آپ کا اگلا قدم بالکل واضح ہے۔

📌 **آپ کا مرحلہ وار ۴ نکاتی لائحہ عمل:**
1. **پہلا مرحلہ (موجودہ ہنر):** اپنے فعال کورس "${activeCourseName}" کا آج کا چھوٹا سبق مکمل کریں۔
2. **دوسرا مرحلہ (عملی مشق):** سبق میں سیکھی گئی بات کو موبائل پر کم از کم ۷ منٹ خود کر کے دیکھیں۔
3. **تیسرا مرحلہ (ذاتی جائزہ):** ۵ منٹ کا کوئز حل کر کے اپنے پوائنٹس اور علم میں اضافہ کریں۔
4. **چوتھا مرحلہ (خاندان و برادری کی مدد):** جو بات آپ نے سیکھی، وہ اپنے گھر کے کسی فرد یا دوست کو بھی سکھائیں۔

🎯 **آج کا فوری عملی قدم (15 منٹ):**
ابھی ہوم اسکرین پر جائیں، اپنے کورس کا اگلا سبق کھولیں اور اس کا پہلا حصہ مکمل کریں۔

🔍 **آپ سے فالو اپ سوال:**
کیا آپ آج ۱۵ منٹ نکال کر یہ عملی مشق مکمل کرنے کے لیے تیار ہیں؟`;

    enPart = `Wonderful, ${name}! Based on your active topic **"${activeCourseName}"** and age group (${ageGroup}), your next milestone is clear.

📌 **Your 4-Step Action Plan:**
1. **Step 1 (Active Concept):** Complete today's micro-lesson in "${activeCourseName}".
2. **Step 2 (Hands-on Practice):** Practice the core tool on your phone for 7 minutes.
3. **Step 3 (Quick Self-Check):** Attempt the 5-minute quiz to reinforce your learning.
4. **Step 4 (Share Value):** Teach this one useful trick to a friend or family member.

🎯 **Today's Immediate Action (15 mins):**
Go to your active course now and complete the next practical exercise.

🔍 **Follow-up Question:**
Are you ready to spend 15 minutes today to complete this hands-on exercise?`;
  }
  // 3. INTENT: FREELANCING & CAREER ("فری لانسنگ شروع کرنے کے لیے مجھے کیا سیکھنا چاہیے؟")
  else if (
    query.includes("فری لانسنگ") ||
    query.includes("freelanc") ||
    query.includes("آن لائن کام") ||
    query.includes("کلائنٹ") ||
    query.includes("upwork") ||
    query.includes("fiverr") ||
    query.includes("پیسے کمانا") ||
    query.includes("کمائی") ||
    query.includes("earning") ||
    query.includes("جاب") ||
    query.includes("ملازمت") ||
    query.includes("order")
  ) {
    urduPart = `بہت شاندار سوال، ${name}! فری لانسنگ کا مطلب ہے اپنے ہنر کو باوقار اور حلال طریقے سے دوسروں کی خدمت کے لیے پیش کرنا۔

📌 **فری لانسنگ کے لیے مرحلہ وار ۴ لازمی قدم:**
1. **ایک ٹھوس ہنر منتخب کریں:** ابتدائی سطح پر سب سے تیز ہنر **کینوا (Canva) پر سوشل میڈیا ڈیزائننگ**، **موبائل پر شارٹ ویڈیوز/ریلز ایڈیٹنگ**، یا **اردو/انگریزی ٹرانسلیشن و ڈیٹا انٹری** ہے۔
2. **اپنا پورٹ فولیو (نمونہ کام) بنائیں:** کلائنٹ ڈھونڈنے سے پہلے خود ۳ سے ۵ بہترین ڈیزائن یا نمونے بنا کر اپنے پاس محفوظ کریں۔
3. **مقامی مارکیٹ سے آغاز کریں:** انٹرنیشنل ویب سائٹس پر جانے سے پہلے اپنے محلے کی دکانوں، اسکولوں، فیس بک گروپس اور دوستوں کو بتائیں کہ آپ ان کے لیے پوسٹر یا سوشل میڈیا کام کر سکتے ہیں۔
4. **ایمانداری اور حلال روزگار:** وقت کی پابندی، ایمانداری اور معیاری کام ہی فری لانسنگ میں برکت اور مستقل کلائنٹس کا راز ہے۔

🎯 **آج کا فوری عملی کام (15 منٹ):**
کینوا ایپ کھولیں اور کسی فرضی دکان (مثلاً "المدینہ کریانہ اسٹور" یا "نیو بیکرز") کے لیے ایک خوبصورت پروموشنل پوسٹر تیار کریں۔

🔍 **آپ سے فالو اپ سوال:**
آپ کو ڈیزائننگ (پوسٹرز) میں زیادہ دلچسپی ہے یا ویڈیو ایڈیٹنگ / ڈیٹا انٹری میں؟`;

    enPart = `Excellent question, ${name}! Freelancing means offering your valuable skills directly to clients with honesty and dignity.

📌 **4 Crucial Steps to Start Freelancing:**
1. **Master 1 High-Demand Skill:** Start with **Canva Social Media Design**, **Mobile Video/Reel Editing**, or **Translation & Data Entry**.
2. **Build a 3-5 Piece Portfolio:** Before approaching clients, create realistic sample banners or edited videos to show your capability.
3. **Start with Local Clients:** Approach local shops, schools, neighborhood businesses, and community groups first.
4. **Honesty & Halal Principles:** Timely delivery, transparent pricing, and quality work build long-term repeat clients.

🎯 **Today's Immediate Action (15 mins):**
Open Canva and design a flyer/poster for a local grocery store or bakery.

🔍 **Follow-up Question:**
Are you more inclined toward graphic design or video editing/data entry?`;
  }
  // 4. INTENT: SMALL BUSINESS / HOME BUSINESS ("گھر بیٹھ کر چھوٹا کاروبار کیسے شروع کروں؟")
  else if (
    query.includes("چھوٹا کاروبار") ||
    query.includes("گھر بیٹھ کر") ||
    query.includes("کاروبار") ||
    query.includes("دکان") ||
    query.includes("بزنس") ||
    query.includes("business") ||
    query.includes("دکانداری") ||
    query.includes("گھریلو") ||
    query.includes("سیلز") ||
    query.includes("مارکیٹنگ") ||
    query.includes("سرمایہ")
  ) {
    urduPart = `خوش آمدید ${name}! ایک کامیاب چھوٹے کاروبار کا اصل راز کم سرمائے سے آغاز کرنا اور اپنے علاقے کے لوگوں کی حقیقی ضرورت پوری کرنا ہے۔

📌 **گھریلو / چھوٹے کاروبار کے ۴ سنہری اصول:**
1. **مقامی ضرورت تلاش کریں:** دیکھیں آپ کے محلے میں لوگوں کو کس چیز کی تنگی ہے (مثلاً پرنٹنگ/فوٹو کاپی، کپڑوں کی سلائی/ڈیزائننگ، گھر کا خالص مصالحہ، ہوم بیکری، یا موبائل اسیسریز)۔
2. **موجودہ وسائل سے آغاز:** بڑا کرایہ یا دکان لینے کے بجائے گھر کی ایک میز اور اپنے سمارٹ فون سے شروعات کریں۔
3. **واٹس ایپ اور مقامی تشہیر:** واٹس ایپ بزنس کیٹلاگ بنائیں، روزانہ اچھے اسٹیٹس لگائیں اور مطمئن گاہکوں سے دوسروں کو ریفر کرنے کی درخواست کریں۔
4. **حساب کتاب کی شفافیت:** روزانہ کی کل آمدن اور کل خرچ کو ایک رجسٹر میں باقاعدگی سے لکھیں۔

📜 **حدیث نبوی ﷺ:** "سچا اور امانت دار تاجر (قیامت کے دن) انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔" (سنن ترمذی: ۱۲۰۹)

🎯 **آج کا فوری عملی کام (15 منٹ):**
ایک کاغذ پر ۳ ایسی سروسز یا اشیاء لکھیں جو آپ اپنے محلے یا آن لائن آسانی سے فراہم کر سکتے ہیں، اور ان کی متوقع لاگت کا اندازہ لگائیں۔

🔍 **آپ سے فالو اپ سوال:**
آپ کے ذہن میں کس قسم کے کاروبار یا سروس کا خیال سب سے زیادہ گردش کر رہا ہے؟`;

    enPart = `Welcome ${name}! The secret to a prosperous home business is low initial overhead and solving a real everyday local need.

📌 **4 Golden Rules for Small / Home Businesses:**
1. **Identify a Local Need:** Spot services neighbors travel far for (e.g. digital printing, home baking, tailoring/embroidery, homemade spices, mobile accessories).
2. **Start with Existing Resources:** Begin with your smartphone and a quiet table at home without expensive rental overheads.
3. **WhatsApp Business Marketing:** Set up WhatsApp Business, showcase real products on your status, and request word-of-mouth recommendations.
4. **Strict Record Keeping:** Keep a daily notebook recording all revenues and expenditures accurately.

📜 **Hadith:** "The truthful, trustworthy merchant will be with the prophets, truthful, and martyrs." (Sunan Tirmidhi: 1209)

🎯 **Today's Immediate Action (15 mins):**
Write down 3 viable product or service ideas you can offer in your area with estimated starting costs.

🔍 **Follow-up Question:**
Which type of business or service are you currently most passionate about starting?`;
  }
  // 5. INTENT: EVERYDAY AI ("AI مجھے روزمرہ زندگی میں کیسے فائدہ دے سکتی ہے؟")
  else if (
    query.includes("ai") ||
    query.includes("مصنوعی ذہانت") ||
    query.includes("artificial intelligence") ||
    query.includes("chatgpt") ||
    query.includes("gemini") ||
    query.includes("روزمرہ زندگی") ||
    query.includes("ٹیکنالوجی") ||
    query.includes("پرامپٹ")
  ) {
    urduPart = `ماشاءاللہ ${name}! مصنوعی ذہانت (AI) ایک بے حد طاقتور ڈیجیٹل معاون ہے جو عام اردو میں آپ کی بات سمجھ کر روزمرہ کاموں کو ۱۰ گنا تیز اور آسان بنا دیتی ہے۔

📌 **روزمرہ زندگی میں AI کے ۴ عملی فائدے:**
1. **خط، درخواست اور دفتری پیغامات:** اسکول کی چھٹی، بجلی کے بل کی شکایت، یا نوکری کی سی وی کے لیے اردو یا انگریزی میں شاندار درخواست چند سیکنڈ میں لکھوائیں۔
2. **پڑھائی اور ہوم ورک میں رہنمائی:** ریاضی کا مشکل سوال ہو یا سائنس کا تصور، AI اسے آسان گھریلو مثالوں سے سمجھا سکتی ہے۔
3. **کاروباری آئیڈیاز اور مارکیٹنگ:** اپنی دکان یا پروڈکٹ کی تشہیر کے لیے دلکش جملے اور اشتہاری نعرے لکھوائیں۔
4. **پرامپٹ کا سنہری فارمولا:** AI سے بات کرتے وقت ۳ چیزیں واضح کریں: (آپ کون ہیں + آپ کو کیا چاہیے + کس انداز میں چاہیے)۔

🎯 **آج کا فوری عملی کام (5 منٹ):**
کسی بھی AI ٹول (یا یہیں مجھ سے) پوچھیں: *"مجھے اردو میں روزانہ کے خاندانی اخراجات کنٹرول کرنے کے ۳ آسان طریقے بتائیں۔"*

🔍 **آپ سے فالو اپ سوال:**
کیا آپ نے کبھی AI سے کوئی اردو درخواست، مضمون یا کاروباری آئیڈیا لکھوایا ہے؟`;

    enPart = `Wonderful, ${name}! Artificial Intelligence (AI) is a powerful digital companion that understands plain language to make daily tasks 10x faster and easier.

📌 **4 Everyday Life Benefits of AI:**
1. **Drafting Letters & Applications:** Instantly compose formal letters, complaint drafts, or resumes in clean Urdu or English.
2. **Study & Tutoring Assistant:** Clarify complex textbook topics with clear analogies.
3. **Business & Marketing Slogans:** Generate advertising catchphrases, product descriptions, and promotional announcements.
4. **Prompting Formula:** Always specify: (Role + Exact Need + Output Format/Tone).

🎯 **Today's Immediate Action (5 mins):**
Ask an AI assistant: *"Give me 3 practical methods to manage a household monthly budget."*

🔍 **Follow-up Question:**
Have you tried drafting a letter or brainstorm ideas with AI before?`;
  }
  // 6. INTENT: 15-MINUTE MICRO-LEARNING ("میں آج صرف 15 منٹ میں کیا سیکھ سکتا ہوں؟")
  else if (
    query.includes("15 منٹ") ||
    query.includes("مختصر وقت") ||
    query.includes("تھوڑا وقت") ||
    query.includes("15 min") ||
    query.includes("15 minutes") ||
    query.includes("کم وقت") ||
    query.includes("quick learning")
  ) {
    urduPart = `بہت خوب ${name}! روزانہ کے صرف ۱۵ منٹ تسلسل کے ساتھ دینا مہینے کے ساڑھے سات گھنٹے بنتے ہیں جو انسان کو کسی بھی ہنر میں ماہر بنا دیتے ہیں۔

📌 **۱۵ منٹ کا سنہری مائیکرو لرننگ فارمولا:**
1. **پہلے ۵ منٹ (سیکھیں):** اپنے کورس **"${activeCourseName}"** کا صرف ایک بنیادی نکتہ یا سبق دھیان سے پڑھیں۔
2. **درمیانی ۷ منٹ (ہاتھ سے مشق):** موبائل ایپ کھولیں اور اس فیچر کو خود آزما کر دیکھیں۔
3. **آخری ۳ منٹ (جائزہ و سوال):** جو سیکھا، اسے کاپی پر ایک جملے میں لکھیں اور فوری کوئز حل کریں۔

📌 **آسان مثال:**
جیسے روزانہ کا ایک قطرہ پانی مٹکے کو بھر دیتا ہے، ویسے ہی روزانہ کے ۱۵ منٹ کی مشق آپ کو ہنر مند اور خود کفیل بناتی ہے۔

🎯 **آج کا فوری عملی کام (15 منٹ):**
ابھی Seekho کے ہوم پیج پر جا کر آج کا ۵ منٹ کا سبق اور ۷ منٹ کی مشق مکمل کریں۔

🔍 **آپ سے فالو اپ سوال:**
کیا آپ ابھی ۱۵ منٹ کی مشق شروع کرنے کے لیے تیار ہیں؟`;

    enPart = `Terrific, ${name}! Spending 15 focused minutes every day equates to 7.5 hours a month—enough to gain real mastery in any skill.

📌 **The 15-Minute Micro-Learning Formula:**
1. **First 5 Mins (Learn):** Read 1 key concept in **"${activeCourseName}"**.
2. **Middle 7 Mins (Hands-On):** Open the tool on your phone and practice it directly.
3. **Final 3 Mins (Review & Quiz):** Jot down 1 key takeaway and complete the quick quiz.

📌 **Simple Analogy:**
Small daily drops fill the vessel; 15 minutes of disciplined daily practice builds lifelong self-reliance.

🎯 **Today's Immediate Action (15 mins):**
Head to your Seekho course dashboard right now and complete today's micro-lesson.

🔍 **Follow-up Question:**
Are you ready to dive into today's 15-minute hands-on practice right now?`;
  }
  // 7. INTENT: CANVA & GRAPHIC DESIGN
  else if (
    query.includes("canva") ||
    query.includes("کینوا") ||
    query.includes("ڈیزائن") ||
    query.includes("design") ||
    query.includes("پوسٹر") ||
    query.includes("بینر") ||
    query.includes("لوگو")
  ) {
    urduPart = `بہت خوب ${name}! کینوا (Canva) موبائل کا ایسا آسان ٹول ہے جس سے آپ بغیر کمپیوٹر کے پیشہ ورانہ پوسٹر اور اشتہارات بنا سکتے ہیں۔

📌 **کینوا سیکھنے کے ۳ بنیادی مراحل:**
1. **ٹیمپلیٹ کا انتخاب:** کینوا ایپ میں بنے بنائے سانچے منتخب کریں (مثلاً "Social Media Post" یا "Sale Flyer")۔
2. **متن اور رنگ کی تبدیلی:** ڈمی ٹیکسٹ کو ہٹا کر اپنی دکان یا پیغام کا اردو/انگریزی متن لکھیں۔
3. **سیو اور شیئر:** تصویر کو PNG یا JPG میں محفوظ کریں اور واٹس ایپ/فیس بک پر شیئر کریں۔

🎯 **آج کا فوری عملی کام (10 منٹ):**
کینوا میں ایک سادہ پوسٹر بنا کر اس میں اپنا نام اور ایک اچھا تعلیمی نعرہ لکھیں۔

🔍 **آپ کی فہم کی جانچ:**
کیا کینوا پر بنے بنائے ڈیزائن میں ترمیم ممکن ہے؟
(الف: جی ہاں، بالکل آسان ہے / ب: نہیں)`;

    enPart = `Great topic, ${name}! Canva is a user-friendly mobile design application enabling professional poster and graphic creation without expensive software.

📌 **3 Steps to Master Canva:**
1. **Select a Template:** Choose a ready-made flyer, card, or banner layout.
2. **Customize Text & Colors:** Replace the placeholder wording with your own announcement.
3. **Export & Share:** Download high-resolution PNG/JPG files for print or social channels.

🎯 **Today's Practical Task (10 mins):**
Open Canva and build a simple personalized announcement banner.

🔍 **Quick Check:**
Can you modify templates in Canva?
(A: Yes, easily / B: No)`;
  }
  // 8. INTENT: DECISION MAKING, EMOTIONAL CONTROL & PRESSURE
  else if (
    query.includes("غصہ") ||
    query.includes("دباؤ") ||
    query.includes("پریشانی") ||
    query.includes("ٹینشن") ||
    query.includes("جھگڑا") ||
    query.includes("دوست") ||
    query.includes("والدین") ||
    query.includes("فیصلہ")
  ) {
    urduPart = `محترم ${name}! مشکل اور جذباتی لمحات میں صحیح فیصلہ کرنا انسان کے اصل کردار کی پہچان ہے۔

📌 **سنت اور حکمت کے ۵ مراحل (5-Step Method):**
1. **پہلے ۳۰ سیکنڈ رکیں (STOP):** غصے یا دباؤ میں فوری ردعمل نہ دیں۔ پانی پئیں اور ایک گہرا سانس لیں۔
2. **معاملے کو سمجھیں:** جذباتی ہونے کے بجائے حقیقت کو سمجھیں کہ اصل مسئلہ کیا ہے۔
3. **دو راستوں پر غور کریں:** جذباتی راستہ بعد میں ندامت لاتا ہے، جبکہ صبر اور حکمت عزت و سکون دیتی ہے۔
4. **رہنمائی:** نبی کریم ﷺ نے فرمایا: "پہلوان وہ نہیں جو پچھاڑ دے، بلکہ پہلوان وہ ہے جو غصے کے وقت خود پر قابو رکھے۔" (صحیح بخاری: ۶۱۱۴)
5. **مثبت اقدام:** پرسکون ہو کر احترام کے ساتھ بات چیت کریں یا خاموشی اختیار کریں۔

🎯 **آج کا ایک عمل:**
جب بھی کوئی منفی بات سنے کو ملے، ۳۰ سیکنڈ خاموش رہ کر سوچیں کہ باوقار جواب کیا ہونا چاہیے۔`;

    enPart = `Dear ${name}, making wise choices under emotional stress is the hallmark of true character.

📌 **The 5-Step Sunnah & Wisdom Framework:**
1. **Pause for 30 Seconds:** Do not react impulsively. Drink water, take a deep breath.
2. **Understand the Reality:** Look beyond raw emotions at the real issue.
3. **Weigh the Two Paths:** Impulsive reactions bring regret; patience and poise protect dignity.
4. **Prophetic Wisdom:** "The strong person is not the one who wrestles well, but the one who controls himself during anger." (Sahih Bukhari: 6114)
5. **Constructive Action:** Communicate with calm respect or maintain dignified silence.

🎯 **One Practical Action:**
Whenever provocation occurs, pause for 30 seconds before responding thoughtfully.`;
  }
  // 9. GENERAL CONTEXTUAL PEDAGOGICAL RESPONDER
  else {
    urduPart = `وعلیکم السلام و رحمتہ اللہ، ${name}! میں استاد سیکھو ہوں۔

آپ کی عمر (${ageGroup})، پس منظر اور فعال ہنر (**${activeCourseName}**) کے تناظر میں ہم ہر سوال کا جامع اور باوقار حل نکالتے ہیں۔

📌 **استاد سیکھو کی مستقل رہنمائی:**
1. **روزانہ کا مختصر تسلسل:** روزانہ ۱۵ سے ۲۰ منٹ باقاعدگی سے سیکھنے کے لیے نکالیں۔
2. **ہاتھ سے عملی مشق:** صرف پڑھنے کے بجائے موبائل یا کاپی پر عملی مشق کریں۔
3. **خدمت اور برکت:** جو ہنر سیکھیں، اس سے اپنے گھر اور محلے والوں کا کام آسان بنائیں۔

🎯 **آج کا فوری عملی قدم:**
اپنے کورس کا اگلا سبق کھولیں یا مجھے بتائیں کہ آپ کا سب سے بڑا سیکھنے کا ہدف کیا ہے۔

🔍 **آپ سے سوال:**
کیا آپ کا سوال کسی مخصوص ہنر، فری لانسنگ، کاروبار یا ذاتی ترقی کے بارے میں ہے؟`;

    enPart = `Hello and warm welcome, ${name}! I am Teacher Seekho.

Tailored for your age (${ageGroup}) and active skill (**${activeCourseName}**), we make every question actionable and clear.

📌 **Lifelong Learning Formula:**
1. **Daily Consistency:** Dedicate 15-20 minutes daily to active learning.
2. **Hands-on Practice:** Practice what you learn immediately on your phone.
3. **Community Upliftment:** Use your skills to help your family and neighborhood.

🎯 **Today's Practical Task:**
Open your next lesson or tell me your primary career or learning goal.

🔍 **Follow-up Question:**
Is your query related to specific skills, freelancing, small business, or personal development?`;
  }

  const suggestions = generateDynamicSuggestions(message, language);

  if (isDual) {
    const fullReply = `${urduPart}

---

**English Summary & Key Action Steps:**
• **Advice Summary:** ${enPart.split('\n\n')[0]}
• **Today's Action:** Dedicate 15 minutes today to hands-on practice on your selected skill.
• **Takeaway:** Lifelong self-reliance is built through small, consistent, honest actions.`;
    return { reply: fullReply, suggestions };
  }

  if (isUrduOnly) {
    return { reply: urduPart, suggestions };
  }

  return { reply: enPart, suggestions };
}

startServer();
