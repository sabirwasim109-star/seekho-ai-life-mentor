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

        // 8-second safety timeout for external API calls
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Gemini API call timed out")), 8000)
        );

        const apiPromise = ai.models.generateContent({
          model: "gemini-3.7-flash",
          contents: formattedContents,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });

        const response: any = await Promise.race([apiPromise, timeoutPromise]);

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

  // Canva Overview
  if ((q.includes("canva") || q.includes("کینوا")) && (q.includes("کیا ہے") || q.includes("what is") || q.includes("تعارف") || q.includes("intro"))) {
    return isUrdu ? [
      "Canva سے گھر بیٹھے کام کیسے حاصل کیا جا سکتا ہے؟",
      "کینوا سے پہلا پورٹ فولیو کیسے بنائیں؟",
      "میرے پاس صرف موبائل ہے، کیا کینوا چل جائے گا؟",
      "میرا اگلا قدم کیا ہونا چاہیے؟"
    ] : [
      "How to get freelance work using Canva?",
      "How to create your first Canva portfolio?",
      "Can I run Canva smoothly on mobile only?",
      "What should be my next step?"
    ];
  }

  // Canva Earning / Freelancing with Canva
  if ((q.includes("canva") || q.includes("کینوا")) && (q.includes("کام") || q.includes("پیسے") || q.includes("کمائی") || q.includes("کلائنٹ") || q.includes("earn") || q.includes("freelanc"))) {
    return isUrdu ? [
      "مقامی دکانوں کو سوشل میڈیا ڈیزائن کیسے پیش کریں؟",
      "کینوا سے فائیور اور اپ ورک پر آرڈر کیسے لیں؟",
      "آن لائن کمائی میں حلال روزگار کے سنہری اصول",
      "میرا اگلا قدم کیا ہونا چاہیے؟"
    ] : [
      "Offering social media designs to local shops",
      "Getting freelance gigs on Fiverr/Upwork with Canva",
      "Principles of Halal online income",
      "What should be my next step?"
    ];
  }

  // Mobile Only Skills
  if (q.includes("صرف موبائل") || q.includes("موبائل ہے") || q.includes("only mobile") || q.includes("phone only") || q.includes("کمپیوٹر نہیں")) {
    return isUrdu ? [
      "موبائل سے ویڈیو ایڈیٹنگ (CapCut) کیسے سیکھیں؟",
      "کینوا سے موبائل پر پہلا بینر ڈیزائن کریں",
      "موبائل پر اردو/انگریزی ڈیٹا انٹری کے مواقع",
      "آج میں صرف 15 منٹ میں کیا سیکھ سکتا ہوں؟"
    ] : [
      "Learn mobile video editing with CapCut",
      "Design your first poster on Canva mobile",
      "Mobile data entry & translation opportunities",
      "What can I learn in 15 minutes today?"
    ];
  }

  // Critical Thinking
  if (q.includes("تنقیدی سوچ") || q.includes("critical thinking") || q.includes("سوچ سمجھ") || q.includes("تحقیق")) {
    return isUrdu ? [
      "روزمرہ زندگی میں تنقیدی سوچ کی عملی مثال",
      "سوشل میڈیا کی خبروں کی تصدیق کا اسلامی طریقہ",
      "غصے یا دباؤ میں صحیح فیصلہ کیسے کریں؟",
      "میرا اگلا قدم کیا ہونا چاہیے؟"
    ] : [
      "Everyday practical example of critical thinking",
      "Islamic guidelines on verifying news & rumors",
      "Making sound decisions under pressure",
      "What should be my next step?"
    ];
  }

  // Parenting & Screen Time
  if (q.includes("بچے") || q.includes("بچوں") || q.includes("والدین") || q.includes("موبائل کے غلط استعمال") || q.includes("screen time") || q.includes("parenting") || q.includes("موبائل کی لت")) {
    return isUrdu ? [
      "بچوں کو موبائل کی لت سے چھڑانے کا ۳ نکاتی فارمولا",
      "بچوں کے لیے مفید اسلامی و تعلیمی موبائل ایپس",
      "گھر میں پرسکون اور محبت بھرا ماحول کیسے بنائیں؟",
      "میرا اگلا قدم کیا ہونا چاہیے؟"
    ] : [
      "3-step formula to reduce child screen time",
      "Safe educational and Islamic apps for kids",
      "Creating a peaceful home environment",
      "What should be my next step?"
    ];
  }

  // Next Step
  if (q.includes("اگلا قدم") || q.includes("آگے کیا") || q.includes("next step") || q.includes("اب کیا") || q.includes("ہدف")) {
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

  // Freelancing General
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

  // Small Business
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

  // AI & Tech
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

  // 15-Minute Micro-Learning
  if (q.includes("15 منٹ") || q.includes("مختصر وقت") || q.includes("15 min") || q.includes("تھوڑا وقت") || q.includes("کچھ نیا سیکھنا")) {
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

  // Helper to extract recent assistant replies to ensure repeat-answer protection
  const lastAssistantMsg = Array.isArray(chatHistory)
    ? [...chatHistory].reverse().find(m => m.role === "assistant" || m.role === "model")?.text || ""
    : "";

  // 1. INTENT: CANVA OVERVIEW ("Canva کیا ہے؟")
  if (
    (query.includes("canva") || query.includes("کینوا")) &&
    (query.includes("کیا ہے") || query.includes("what is") || query.includes("تعارف") || query.includes("intro") || query.includes("کس کام آتا ہے"))
  ) {
    urduPart = `کینوا (Canva) موبائل اور کمپیوٹر کا ایک بے حد آسان اور مفت گرافک ڈیزائننگ ٹول ہے، جس سے ہر شخص بغیر کسی پیچیدہ سافٹ ویئر یا ڈگری کے خوبصورت ڈیزائن بنا سکتا ہے۔

📌 **کینوا کی ۴ اہم خصوصیات:**
1. **بنے بنائے سانچے (Templates):** کینوا پر لاکھوں تیار شدہ ٹیمپلیٹس موجود ہیں—جیسے دکان کا اشتہار، واٹس ایپ اسٹیٹس، سوشل میڈیا پوسٹ، بینر اور شادی کارڈ۔
2. **موبائل پر آسانی:** آپ کو کمپیوٹر کی ضرورت نہیں؛ عام سمارٹ فون پر صرف انگلی کے اشارے سے متن، رنگ اور تصاویر تبدیل کی جا سکتی ہیں۔
3. **اردو اور مقامی فونٹس:** کینوا میں خوبصورت اردو فونٹس (مثلاً جمیل نوری نستعلیق) اور کسٹم تحریر آسانی سے شامل کی جا سکتی ہے۔
4. **مفت اور فوری:** ڈیزائن مکمل ہونے پر ایک کلک سے ہائی کوالٹی تصویر (PNG/JPG) محفوظ ہو جاتی ہے۔

🎯 **آج کا فوری عملی کام (10 منٹ):**
اپنے موبائل میں Canva ایپ کھولیں (یا canva.com پر جائیں)، سرچ میں *"Sale Banner"* یا *"Quote"* لکھیں اور اپنا نام لکھ کر پہلی تصویر ڈاؤنلوڈ کریں۔

🔍 **آپ سے فالو اپ سوال:**
کیا آپ کینوا کو ذاتی استعمال کے لیے سیکھنا چاہتے ہیں، سوشل میڈیا کے لیے، یا اس سے فری لانسنگ کر کے پیسے کمانے کے لیے؟`;

    enPart = `Canva is an easy-to-use, free graphic design platform available on smartphones and computers, enabling anyone to create professional visuals without complex software.

📌 **4 Key Features of Canva:**
1. **Ready-Made Templates:** Thousands of layouts for social media, flyers, sale posters, and cards.
2. **100% Mobile Friendly:** Customize colors, fonts, and photos directly from your phone.
3. **Urdu & Multilingual Fonts:** Full support for beautiful typography and custom text.
4. **Fast & Free:** Download crisp, high-resolution PNG or PDF files with one tap.

🎯 **Today's Action (10 mins):**
Open Canva on your phone, choose a free template, insert your name or greeting, and export it.

🔍 **Follow-up Question:**
Are you exploring Canva for personal creative projects, social media, or to offer design services to clients?`;
  }
  // 2. INTENT: CANVA EARNING / FREELANCING PATHWAYS ("Canva سے گھر بیٹھے کام کیسے حاصل کیا جا سکتا ہے؟")
  else if (
    (query.includes("canva") || query.includes("کینوا")) &&
    (query.includes("کام") || query.includes("پیسے") || query.includes("کمائی") || query.includes("کلائنٹ") || query.includes("گھر بیٹھے") || query.includes("earning") || query.includes("freelanc") || query.includes("آرڈر"))
  ) {
    urduPart = `ماشاءاللہ ${name}! کینوا (Canva) سے گھر بیٹھے باعزت اور حلال آمدنی حاصل کرنے کا راستہ انتہائی عملی اور تیز ہے۔

📌 **کینوا سے کلائنٹس اور کام حاصل کرنے کا ۴ نکاتی لائحہ عمل:**
1. **پہلے ۳ سے ۵ نمونے (Portfolio) بنائیں:** مختلف موضوعات پر معیاری پوسٹرز بنائیں—مثلاً کریانہ اسٹور کی سیل، اسکول کا داخلہ اشتہار، ریسٹورنٹ کا مینو اور یوٹیوب تھمب نیل۔
2. **مقامی دکانوں اور کاروباروں سے آغاز کریں:** اپنے محلے کی بیکری، کپڑوں کی دکان، اکیڈمی یا ڈاکٹر کلینک سے رابطہ کریں اور انہیں اپنے بنے ہوئے پروموشنل ڈیزائن دکھائیں۔
3. **سوشل میڈیا مینجمنٹ:** فیس بک اور انسٹاگرام پیجز چلانے والوں کو ہفتہ وار ۳ سے ۵ پوسٹس بنا کر دینے کی سروس پیش کریں۔
4. **آن لائن مارکیٹس (Fiverr/Upwork):** جب ہاتھ میں صفائی آ جائے تو آن لائن پلیٹ فارمز پر "Social Media Poster Designer" کے طور پر گگ بنائیں۔

📜 **حدیث مبارکہ:** "سچا اور امانت دار تاجر (اور ہنر مند) قیامت کے دن انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔" (سنن ترمذی: ۱۲۰۹)

🎯 **آج کا فوری عملی کام (15 منٹ):**
اپنے علاقے کی کسی دکان یا اسکول کا فرضی اشتہار کینوا پر ڈیزائن کریں اور اسے بطور نمونہ محفوظ کریں۔

🔍 **آپ سے فالو اپ سوال:**
آپ کو مقامی دکانوں کے لیے پوسٹرز بنانے میں زیادہ دلچسپی ہے یا آن لائن انٹرنیشنل کلائنٹس تلاش کرنے میں؟`;

    enPart = `Masha’Allah ${name}! Generating dignified, halal income using Canva from home is one of the fastest and most practical freelancing pathways.

📌 **4-Step Roadmap to Get Paid Work with Canva:**
1. **Build a 3-5 Piece Portfolio:** Create realistic sample flyers for a local grocery store, tuition academy, restaurant menu, and YouTube thumbnail.
2. **Pitch to Local Neighborhood Businesses:** Show your ready-made flyers to local bakeries, tailors, and private schools who need promotion.
3. **Monthly Social Media Retainers:** Offer to design 3-5 promotional posts per week for local Facebook/Instagram shop pages.
4. **Freelance Gig Platforms:** Once your craft is polished, offer flyer and banner services on Fiverr and Upwork.

📜 **Prophetic Guidance:** "The truthful, trustworthy merchant will be with the prophets and martyrs." (Tirmidhi: 1209)

🎯 **Today's Action (15 mins):**
Design a sample promotional flyer for a local bakery or school in Canva and save it to your phone.

🔍 **Follow-up Question:**
Would you prefer starting with local businesses in your area or exploring online freelance platforms?`;
  }
  // 3. INTENT: MOBILE-ONLY SKILLS ("میرے پاس صرف موبائل ہے، میرے لیے کون سا ہنر بہتر ہے؟")
  else if (
    query.includes("صرف موبائل") ||
    query.includes("موبائل ہے") ||
    query.includes("only mobile") ||
    query.includes("phone only") ||
    query.includes("کمپیوٹر نہیں") ||
    query.includes("لیپ ٹاپ نہیں") ||
    query.includes("اسمارٹ فون سے کیا")
  ) {
    urduPart = `بہت زبردست سوال، ${name}! یہ ایک غلط فہمی ہے کہ ہنر سیکھنے کے لیے مہنگا کمپیوٹر لازمی ہے۔ آج کا سمارٹ فون ایک مکمل ڈیجیٹل ورک اسٹیشن ہے۔

📌 **صرف موبائل سے سیکھے جانے والے ۵ بہترین اور باوقار ہنر:**
1. **کینوا گرافک ڈیزائننگ (Canva):** سوشل میڈیا پوسٹس، بینرز، شادی کارڈز اور اشتہارات صرف موبائل سے پروفیشنل انداز میں بنتے ہیں۔
2. **شارٹ ویڈیو ایڈیٹنگ (CapCut / VN Editor):** موبائل سے ٹک ٹاک، یوٹیوب شارٹس اور انسٹاگرام ریلز ایڈٹ کریں جس کی مارکیٹ میں زبردست مانگ ہے۔
3. **اردو و انگریزی وائس اوور اور آڈیو ریکارڈنگ:** صاف آواز میں کہانیاں، اشتہاری پیغامات یا تعلیمی نوٹس ریکارڈ کریں۔
4. **ڈیجیٹل مارکیٹنگ و واٹس ایپ کیٹلاگ مینجمنٹ:** مقامی دکانوں کی مصنوعات کو واٹس ایپ بزنس پر لسٹ کرنا اور سوشل میڈیا پر پروموٹ کرنا۔
5. **ڈیٹا انٹری اور اردو ٹرانسلیشن:** گوگل ڈرائیو، گوگل شیٹس اور گوگل ڈاکس پر موبائل سے کام کرنا۔

🎯 **آج کا فوری عملی کام (15 منٹ):**
کینوا (Canva) یا کیپ کٹ (CapCut) موبائل ایپ انسٹال کریں اور پہلی بار اس کے ٹولز کو کھول کر ۵ منٹ مشق کریں۔

🔍 **آپ سے فالو اپ سوال:**
آپ کی زیادہ ترجیح گرافک ڈیزائن (پوسٹرز) کی طرف ہے، ویڈیو ایڈیٹنگ کی طرف، یا سوشل میڈیا مارکیٹنگ کی طرف؟`;

    enPart = `Excellent question, ${name}! It is a common misconception that you need an expensive laptop to learn valuable skills. A smartphone is a complete digital workstation.

📌 **Top 5 High-Demand Skills You Can Master 100% on Mobile:**
1. **Canva Graphic Design:** Create professional posters, flyers, and announcements directly on your phone.
2. **Mobile Video Editing (CapCut / VN):** Edit YouTube Shorts, TikToks, and reels for businesses and creators.
3. **Voiceover & Audio Narration:** Record clean voice clips for promotional messages and educational content.
4. **WhatsApp Business Catalog Management:** Set up online inventories and customer management for local shops.
5. **Content Writing & Data Entry:** Type and organize documents via Google Docs and Sheets mobile apps.

🎯 **Today's Action (15 mins):**
Install either Canva or CapCut on your smartphone and spend 5 minutes exploring its core editing interface.

🔍 **Follow-up Question:**
Are you more interested in visual poster design, video editing, or business management on your phone?`;
  }
  // 4. INTENT: CRITICAL THINKING ("تنقیدی سوچ کیا ہوتی ہے؟")
  else if (
    query.includes("تنقیدی سوچ") ||
    query.includes("critical thinking") ||
    query.includes("سوچ سمجھ") ||
    query.includes("تحقیق کرنا") ||
    query.includes("غور و فکر")
  ) {
    urduPart = `تنقیدی سوچ (Critical Thinking) کا مطلب ہے کسی بھی سنی سنائی بات، خبر یا دعوے پر آنکھ بند کر کے یقین کرنے کے بجائے، عقل، تحقیق اور ثبوت کی بنیاد پر حقیقت اور رائے کا فرق جانچنا۔

📌 **تنقیدی سوچ کے ۳ بنیادی ستون:**
1. **سوال پوچھنے کی ہمت:** *"کیا یہ بات واقعی سچ ہے؟ اس کا ثبوت کیا ہے؟ اور کہنے والے کا مقصد کیا ہو سکتا ہے؟"*
2. **حقیقت اور رائے میں فرق:** ہر انسان کی ذاتی پسند یا غصہ ایک "رائے" ہو سکتا ہے، مگر "ٹھوس حقیقت" ہمیشہ غیر جانبدار ثبوت مانگتی ہے۔
3. **جذبات کے بجائے دلیل کو ترجیح:** غصے یا تعصب میں آ کر فیصلہ کرنے کے بجائے پرسکون ہو کر دونوں رخ دیکھنا۔

📖 **قرآنی رہنمائی [سورۃ الحجرات: آیت ۶]:**
*"اے ایمان والو! اگر کوئی فاسق تمہارے پاس کوئی خبر لائے تو خوب تحقیق کر لیا کرو، کہیں ایسا نہ ہو کہ تم نادانی میں کسی قوم کو نقصان پہنچا بیٹھو۔"*

🎯 **آج کی عملی مشق (5 منٹ):**
آج سوشل میڈیا یا محلے میں سنی جانے والی کسی بھی سنسنی خیز خبر پر فوراً تبصرہ یا آگے فارورڈ نہ کریں، بلکہ پہلے سوچیں: *"کیا میرے پاس اس کی مصدقہ تصدیق ہے؟"*

🔍 **آپ سے فالو اپ سوال:**
کیا آپ روزمرہ زندگی میں کسی مخصوص فیصلے یا خبر کے حوالے سے تنقیدی سوچ کا جائزہ لینا چاہتے ہیں؟`;

    enPart = `Critical Thinking is the ability to evaluate information objectively—analyzing facts and evidence rather than blindly accepting rumors, assumptions, or emotional biases.

📌 **3 Core Pillars of Critical Thinking:**
1. **Inquiring Mindset:** Asking: *"Is this verified? What is the concrete evidence? What is the source?"*
2. **Distinguishing Fact from Opinion:** Recognizing subjective personal viewpoints versus objective verified reality.
3. **Reason Over Impulse:** Pausing before reacting emotionally to social media posts or rumors.

📖 **Quranic Injunction [Surah Al-Hujurat: 6]:**
*"O you who have believed, if there comes to you a disobedient one with information, investigate, lest you harm a people out of ignorance."*

🎯 **Today's Action (5 mins):**
Whenever you encounter sensational news or forward messages today, pause and verify the source before believing or sharing.

🔍 **Follow-up Question:**
Would you like an everyday practical scenario to practice applying critical thinking right now?`;
  }
  // 5. INTENT: CHILDREN SCREEN TIME & DIGITAL PARENTING ("گھر میں بچوں کو موبائل کے غلط استعمال سے کیسے بچائیں؟")
  else if (
    query.includes("بچے") ||
    query.includes("بچوں") ||
    query.includes("والدین") ||
    query.includes("موبائل کے غلط استعمال") ||
    query.includes("موبائل کی لت") ||
    query.includes("screen time") ||
    query.includes("parenting") ||
    query.includes("اسکرین")
  ) {
    urduPart = `محترم ${name}! بچوں کو موبائل کے غلط استعمال یا لت سے بچانا آج کے دور کا اہم ترین خاندانی چیلنج ہے، اور اس کا حل سختی یا مار پیٹ کے بجائے حکمت، نظم و ضبط اور محبت میں ہے۔

📌 **بچوں کی مثبت ڈیجیٹل تربیت کے ۴ عملی اصول:**
1. **گھر میں سکرین کا وقت (Screen Time) طے کریں:** دن میں زیادہ سے زیادہ ۳۰ سے ۴۵ منٹ مقرر کریں، اور کھانا کھاتے وقت یا سونے سے ۱ گھنٹہ پہلے موبائل کا استعمال سختی سے ممنوع رکھیں۔
2. **متبادل دلچسپ سرگرمیاں فراہم کریں:** اگر آپ بچے سے موبائل لیں گے تو اس کی جگہ رنگ بھرنے والی کتابیں، بلاکس، چھت پر کھیل یا کہانی سنانے کا وقت دیں۔
3. **والدین خود عملی نمونہ بنیں:** اگر والدین خود ہر وقت موبائل پر رہیں گے تو بچے کبھی نہیں مانیں گے۔ بچوں کے سامنے بامقصد اور محدود موبائل استعمال کریں۔
4. **مفید تعلیمی ایپس کا استعمال:** اگر موبائل دینا بھی پڑے تو کارٹونز کے بجائے سیکھنے اور ذہنی نشوونما والی ایپس (مثلاً اردو قاری، Seekho کے اسباق، یا قرآنی کہانیاں) کھول کر دیں۔

📜 **حدیث نبوی ﷺ:** "تم میں سے ہر شخص نگہبان ہے اور ہر ایک سے اس کی رعیت (اہل و عیال) کے بارے میں پوچھا جائے گا۔" (صحیح بخاری: ۸۹۳)

🎯 **آج کا عملی اقدام:**
آج شام کھانے کی میز پر تمام گھر والے موبائل ایک طرف رکھ کر آپس میں ۱۰ منٹ دن بھر کے احوال پر گفتگو کریں۔

🔍 **آپ سے فالو اپ سوال:**
کیا آپ کے گھر میں بچوں کی عمریں ۱۰ سال سے کم ہیں یا ٹین ایج (نو عمر) ہیں؟`;

    enPart = `Dear ${name}, guiding children toward healthy digital habits requires patience, clear household boundaries, and compassionate leadership rather than harsh scolding.

📌 **4 Practical Steps to Manage Screen Time:**
1. **Set Clear Daily Limits:** Restrict recreational screen time to 30-45 minutes daily. Keep meal times and bedrooms screen-free.
2. **Provide Engaging Physical Alternatives:** Offer drawing books, constructive puzzles, board games, or outdoor play to fill their natural energy.
3. **Lead by Example:** Children mirror adult habits. Minimize unnecessary phone scrolling in their presence.
4. **Curate Educational Content:** Replace mindless short-form entertainment with constructive learning and storytelling apps.

📜 **Prophetic Wisdom:** "Every one of you is a shepherd and is responsible for his flock." (Sahih Bukhari: 893)

🎯 **Today's Action:**
Implement a "Device-Free Family Dinner" tonight and spend 10 uninterrupted minutes talking with your children.

🔍 **Follow-up Question:**
What age group are your children so we can tailor age-appropriate activities?`;
  }
  // 6. INTENT: 15-MINUTE MICRO-LEARNING ("میں آج صرف 15 منٹ میں کیا سیکھ سکتا ہوں؟")
  else if (
    query.includes("15 منٹ") ||
    query.includes("مختصر وقت") ||
    query.includes("تھوڑا وقت") ||
    query.includes("15 min") ||
    query.includes("15 minutes") ||
    query.includes("کم وقت") ||
    query.includes("کچھ نیا سیکھنا") ||
    query.includes("quick learning")
  ) {
    urduPart = `بہت خوب ${name}! روزانہ کے صرف ۱۵ منٹ تسلسل کے ساتھ دینا مہینے کے ساڑھے سات گھنٹے بنتے ہیں جو انسان کو کسی بھی ہنر میں ماہر بنا دیتے ہیں۔

📌 **۱۵ منٹ کا سنہری مائیکرو لرننگ فارمولا:**
1. **پہلے ۵ منٹ (سیکھیں):** اپنے فعال کورس **"${activeCourseName}"** کا صرف ایک بنیادی نکتہ یا سبق دھیان سے پڑھیں۔
2. **درمیانی ۷ منٹ (ہاتھ سے مشق):** موبائل ایپ کھولیں اور اس فیچر کو خود آزما کر دیکھیں۔
3. **آخری ۳ منٹ (جائزہ و سوال):** جو سیکھا، اسے کاپی پر ایک جملے میں لکھیں اور فوری کوئز حل کریں۔

📌 **آسان مثال:**
جیسے روزانہ کا ایک قطرہ پانی مٹکے کو بھر دیتا ہے، ویسے ہی روزانہ کے ۱۵ منٹ کی مشق آپ کو ہنر مند اور خود کفیل بناتی ہے۔

🎯 **آج کا فوری عملی کام (15 منٹ):**
ابھی Seekho کے ہوم پیج پر جائیں اور اپنے کورس کا آج کا ۵ منٹ کا سبق اور ۷ منٹ کی مشق مکمل کریں۔

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
  // 7. INTENT: "WHAT IS MY NEXT STEP?" ("میرا اگلا قدم کیا ہے؟")
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
  // 8. INTENT: FREELANCING GENERAL ("فری لانسنگ شروع کرنے کے لیے مجھے کیا سیکھنا چاہیے؟")
  else if (
    query.includes("فری لانسنگ") ||
    query.includes("freelanc") ||
    query.includes("آن لائن کام") ||
    query.includes("کلائنٹ") ||
    query.includes("upwork") ||
    query.includes("fiverr") ||
    query.includes("کمائی") ||
    query.includes("earning")
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
  // 9. INTENT: SMALL BUSINESS / HOME BUSINESS ("گھر بیٹھ کر چھوٹا کاروبار کیسے شروع کروں؟")
  else if (
    query.includes("چھوٹا کاروبار") ||
    query.includes("گھر بیٹھ کر") ||
    query.includes("کاروبار") ||
    query.includes("دکان") ||
    query.includes("بزنس") ||
    query.includes("business") ||
    query.includes("دکانداری") ||
    query.includes("گھریلو")
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
  // 10. INTENT: EVERYDAY AI ("AI مجھے روزمرہ زندگی میں کیسے فائدہ دے سکتی ہے؟")
  else if (
    query.includes("ai") ||
    query.includes("مصنوعی ذہانت") ||
    query.includes("artificial intelligence") ||
    query.includes("chatgpt") ||
    query.includes("gemini") ||
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
  // 11. INTENT: "I DIDN'T UNDERSTAND" ("مجھے سمجھ نہیں آئی")
  else if (
    query.includes("سمجھ نہیں آئی") ||
    query.includes("سمجھ نہیں آیا") ||
    query.includes("دوبارہ بتائیں") ||
    query.includes("آسان الفاظ میں") ||
    query.includes("not understand") ||
    query.includes("explain again")
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
  // 12. GENERAL CONTEXTUAL RESPONDER
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
