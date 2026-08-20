import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

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

      const isUrdu = language === "ur";
      const courseName = currentCourse ? (isUrdu ? currentCourse.titleUrdu : currentCourse.titleEn) : "General Skill";
      const lessonName = currentLesson ? (isUrdu ? currentLesson.titleUrdu : currentLesson.titleEn) : "";
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

        const systemInstruction = `You are "استاد سیکھو" (Teacher Seekho), a deeply personalized, authentic life-and-learning mentor on the platform "Seekho" (سیکھو).
The platform's philosophy:
Learn → Practice → Improve Yourself → Uplift Family & Community.

Active Learner Context:
- Name: ${userProfile?.name || "Learner"}
- Age Group: ${ageGroup} (Suitable for ages 10 to 70+)
- Education: ${userProfile?.education || "General"}
- Occupation/Role: ${userProfile?.currentOccupation || "Learner"}
- Selected Skill / Course: ${courseName}
- Current Lesson: ${lessonName || "None selected"}
- Preferred Language: ${language === "ur" ? "Urdu (اردو)" : "English"}

CORE LIFE MENTOR CAPABILITIES & FORMATS:
1. WHEN LEARNER ASKS "اب مجھے کیا کرنا چاہیے؟" ("WHAT SHOULD I DO NOW?"):
   Do NOT give a long generic answer. Structure your response into EXACTLY these 6 steps:
   1. **میری موجودہ حالت** (Current state)
   2. **میری سب سے اہم ضرورت** (Most important need)
   3. **آج کا ایک بہترین قدم** (Today's single best step)
   4. **اس قدم کے لیے اندازاً وقت** (Estimated time needed, e.g. 5-15 mins)
   5. **مکمل کرنے کا آسان طریقہ** (Simple numbered steps)
   6. **مکمل ہونے کے بعد اگلا قدم** (Next milestone upon completion)

2. STRICT AUTHENTICITY FOR ISLAMIC GUIDANCE:
   - NEVER invent Quran verses, Hadith, references, or historical stories.
   - Clearly distinguish between:
     * 📖 قرآن مجید (Holy Quran - always with Surah and Ayah reference)
     * 📜 حدیث نبوی ﷺ (Prophetic Hadith - always with authentic collection like Sahih Bukhari, Sahih Muslim, etc.)
     * 🏛️ صحابہ کرامؓ سے سبق / تعلیمی نصیحت (Sahaba lesson / Educational advice)
   - Keep guidance respectful, compassionate, and educational, never coercive or judgmental.

3. CHALLENGE SYSTEM:
   When asked about challenges, offer one of:
   - Today's Challenge (آج کا چیلنج)
   - 7-Day Challenge (۷ روزہ چیلنج)
   - Character Challenge (کردار سازی کا چیلنج)
   - Skill Challenge (ہنر کا عملی چیلنج)
   - Community Service Challenge (خدمتِ خلق چیلنج)

4. AGE & TONE ADAPTATION:
   - Children / youth (10-15): Warm, engaging, simple analogies.
   - Youth & working adults (16-45): Practical skills, honest halal livelihood, time discipline, family responsibility.
   - Elders (46-70+): Respectful honorifics ("محترم بزرگوار"), gentle pacing, community wisdom.

5. IF LEARNER SAYS "I DIDN'T UNDERSTAND" ("مجھے سمجھ نہیں آئی"):
   - Reassure warmly without shaming.
   - Use an ultra-simple everyday household analogy.
   - Give 1 small 2-5 minute task and ask 1 simple check question.

6. DECISION & CHARACTER PROTECTION SYSTEM (5-STEP METHOD):
   When the learner describes a difficult situation, conflict, or harmful impulse (anger, fighting, revenge, bad friendships, peer pressure, social media misuse, wasting time, lying, cheating, bullying, parents disrespect, jealousy, money misuse/scams, giving up education, etc.):
   - DO NOT assume the learner is guilty or preach; first understand the situation.
   - Follow the 5-Step Decision Method:
     * Step 1 — STOP (Pause before acting / "30 سیکنڈ رکیں" / take deep breaths)
     * Step 2 — UNDERSTAND ("What exactly happened?")
     * Step 3 — CONSEQUENCES (Explain short-term, long-term, family, and character effects of choices)
     * Step 4 — GUIDANCE (Provide authentic Quran verse with Surah/Ayah or authentic Hadith with Sahih collection & number, clearly labeled "قرآن" or "حدیث" or "صحابی کی زندگی سے سبق" or "عملی اخلاقی رہنمائی")
     * Step 5 — BETTER ACTION (Give ONE practical, constructive action right now)
   
   Structure response as:
   🧠 **مسئلہ:** [مختصر سمجھ]
   ⏸️ **پہلے رکیں:** [فوری پرسکون ہونے کا قدم]
   ⚖️ **دو راستے:** [راستہ الف بمع نقصان vs راستہ ب بمع نفع و وقار]
   📖 **رہنمائی:** [مستند قرآن / حدیث کا حوالہ مع ماخذ]
   🎯 **آج کا عمل:** [ONE practical action]
   ⭐ **اگلا قدم:** [چھوٹا اگلا ہدف]

7. CRITICAL SAFETY:
   If a learner indicates immediate danger of serious harm to themselves or another person, do NOT encourage or instruct harm. Encourage immediate calm separation from the danger and contacting a trusted parent, family elder, or local emergency support. Do not diagnose mental illness.`;

        // Format history
        const formattedHistory = chatHistory.slice(-6).map((msg: { role: string; text: string }) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        }));

        const chat = ai.chats.create({
          model: "gemini-3.7-flash",
          config: {
            systemInstruction,
            temperature: 0.7,
          },
          history: formattedHistory,
        });

        const response = await chat.sendMessage({ message });
        const replyText = response.text || "";

        return res.json({
          reply: replyText,
          source: "gemini",
        });
      } else {
        // Fallback intelligent responder based on query topics
        const fallbackReply = generateSmartFallbackReply(message, language, userProfile, currentCourse, currentLesson, chatHistory);
        return res.json({
          reply: fallbackReply,
          source: "local-engine",
        });
      }
    } catch (error: any) {
      console.error("AI Teacher Error:", error);
      const fallbackReply = generateSmartFallbackReply(req.body.message || "", req.body.language || "ur", req.body.userProfile, req.body.currentCourse, req.body.currentLesson, req.body.chatHistory);
      return res.json({
        reply: fallbackReply,
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

function generateSmartFallbackReply(
  message: string,
  language: string,
  userProfile: any,
  currentCourse?: any,
  currentLesson?: any,
  chatHistory: any[] = []
): string {
  const query = (message || "").toLowerCase();
  const isUrdu = language === "ur";
  const name = userProfile?.name || (isUrdu ? "پیارے ساتھی" : "Learner");
  const ageGroup = userProfile?.ageGroup || "All ages";

  // Check if learner says "I didn't understand" / "مجھے سمجھ نہیں آئی"
  const notUnderstood = [
    "سمجھ نہیں آئی",
    "سمجھ نہیں آیا",
    "نہیں سمجھی",
    "نہیں سمجھا",
    "دوبارہ بتائیں",
    "آسان الفاظ میں",
    "مشکل ہے",
    "not understand",
    "did not understand",
    "explain again",
    "simpler",
  ].some((pat) => query.includes(pat));

  if (notUnderstood) {
    if (isUrdu) {
      return `کوئی بات نہیں ${name}! بالکل پریشان نہ ہوں۔

سیکھنے کے دوران کسی بات کا پہلی بار سمجھ نہ آنا **بالکل قدرتی اور عام بات ہے**۔ آپ نے سوال پوچھا، یہ آپ کی ذہانت اور لگن کی نشانی ہے! شاباش! 🌱

📌 **آسان روزمرہ مثال:**
جیسے ایک کاریگر یا بزرگ کے پاس آپ جاتے ہیں اور وہ آپ کو بغیر مشکل الفاظ کے عام زبان میں کام کرنا سکھا دیتے ہیں، بالکل ایسے ہی یہ ہنر آپ کے موبائل پر کام کرتا ہے۔

🎯 **آج کا چھوٹا عملی قدم:**
ایک کاپی پر صرف ایک جملہ لکھیں کہ آپ اس ہنر سے اپنے گھر یا دکان کا کون سا کام آسان بنانا چاہتے ہیں۔

🔍 **آپ کی فہم کی جانچ (ایک آسان سوال):**
کیا سوال پوچھنا سیکھنے کا بہترین طریقہ ہے؟
(الف: جی ہاں، بالکل! / ب: نہیں)`;
    } else {
      return `No worries at all, ${name}! Please do not worry.

It is **completely normal and wonderful** to ask for clarification when learning something new. 🌟

📌 **Simple Everyday Example:**
Think of it like having a trusted neighbor guide you step-by-step in your own language without any complicated technical jargon.

🎯 **Today's Practical Task:**
Write down 1 sentence describing how this skill can help you at home or work.

🔍 **Quick Check Question:**
Is asking questions the right way to master a skill?
(A: Yes, absolutely! / B: No)`;
    }
  }

  if (isUrdu) {
    if (query.includes("موبائل") || query.includes("ایک گھنٹہ") || query.includes("canva") || query.includes("کینوا") || query.includes("ڈیزائن")) {
      return `بہت خوب ${name}! موبائل اور کینوا کے ذریعے آپ روزمرہ ڈیزائننگ بہت آسانی سے سیکھ سکتے ہیں۔

**کینوا (Canva) آسان الفاظ میں:**
کینوا موبائل کی مفت ایپ ہے جس میں شادی کارڈ، دکان کے اشتہار اور بینرز کے بنے بنائے سانچے ہوتے ہیں۔

📌 **آسان مثال:**
جیسے تیار شدہ فریم میں تصویر لگا دی جائے اور نیچے نام لکھ دیا جائے، ویسے ہی کینوا میں چند سیکنڈ میں پوسٹر بن جاتا ہے۔

🎯 **آج کا چھوٹا عملی کام (10 منٹ):**
کینوا ایپ کھولیں اور اپنے گھر یا دکان کے لیے ایک سادہ بینر بنائیں۔

🔍 **آپ کی فہم کی جانچ (ایک آسان سوال):**
کیا کینوا پر بنے بنائے ڈیزائن میں ترمیم ممکن ہے؟
(الف: جی ہاں، بالکل آسان ہے / ب: نہیں)`;
    }

    if (query.includes("ai") || query.includes("مصنوعی ذہانت") || query.includes("chatgpt")) {
      return `ماشاءاللہ ${name}! مصنوعی ذہانت (AI) ایک ڈیجیٹل مددگار ہے جس نے دنیا بھر کی معلومات پڑھی ہوئی ہیں۔

📌 **آسان مثال:**
جیسے ایک سمجھدار دوست سے آپ پوچھیں کہ *"مجھے درخواست لکھ کر دیں"* اور وہ فوری لکھ دے، ویسے ہی AI اردو میں آپ کی مدد کرتا ہے۔

🎯 **آج کا چھوٹا عملی کام (5 منٹ):**
کسی بھی AI ٹول سے پوچھیں: *"مجھے اردو میں خوش خطی کے 3 آسان طریقے بتائیں۔"*

🔍 **آپ کی فہم کی جانچ (ایک آسان سوال):**
کیا AI سے اردو میں عام بات چیت کی جا سکتی ہے؟
(الف: جی ہاں، بالکل / ب: نہیں)`;
    }

    if (query.includes("کاروبار") || query.includes("گاؤں") || query.includes("دکان")) {
      return `خوش آمدید ${name}! کاروبار کا اصل راز اپنے محلے کے لوگوں کا کوئی حقیقی مسئلہ حل کرنا ہے۔

📌 **آسان مثال:**
اگر گاؤں کے لوگوں کو بل جمع کرانے یا پرنٹ لینے دور جانا پڑتا ہے تو گاؤں میں چھوٹا ڈیجیٹل سروس پوائنٹ کھولنا ایک فوری نفع بخش کام ہے۔

🎯 **آج کا چھوٹا عملی کام:**
ایک ڈائری میں روزانہ کی کل آمدنی اور کل خرچ کے دو کالم بنائیں۔

🔍 **آپ کی فہم کی جانچ (ایک آسان سوال):**
گاہک کا اعتماد کس چیز سے بنتا ہے؟
(الف: ایمانداری اور خوش اخلاقی سے / ب: بحث کرنے سے)`;
    }

    return `وعلیکم السلام و رحمتہ اللہ، ${name}! میں استاد سیکھو ہوں۔

آپ کی عمر (${ageGroup}) اور پس منظر کے مطابق ہم ہنر کو آسان اور عملی بناتے ہیں۔

📌 **استاد سیکھو کی رہنمائی:**
1. روزانہ صرف 15-20 منٹ نکالیں۔
2. جو سیکھیں، ہاتھ سے کر کے دیکھیں۔
3. اگر کبھی کوئی بات سمجھ نہ آئے تو بلا جھجھک کہہ دیں: **"مجھے سمجھ نہیں آئی"**۔

📌 **آسان مثال:**
جیسے روزانہ کا ایک قطرہ مٹکا بھر دیتا ہے، ویسے ہی روزانہ کی 15 منٹ مشق ہنر مند بنا دیتی ہے۔

🎯 **آج کا چھوٹا عملی کام:**
آج کے سیکھنے کے لیے اپنا 15 منٹ کا وقت مقرر کریں۔

🔍 **آپ کی فہم کی جانچ (ایک آسان سوال):**
ہنر میں مہارت کیسے حاصل ہوتی ہے؟
(الف: روزانہ چھوٹی مشق سے / ب: صرف سوچنے سے)`;
  } else {
    if (query.includes("mobile") || query.includes("canva") || query.includes("design")) {
      return `Great question, ${name}!

**Canva & Mobile Design:**
Canva is a free tool with pre-made templates for shop posters, banners, and announcements.

📌 **Simple Example:**
Just like placing your photo inside a ready-made frame, you simply replace the text with your own words.

🎯 **Today's Practical Task (10 mins):**
Open Canva and create a simple flyer for an event or store.

🔍 **Quick Check Question:**
Can you customize templates in Canva?
(A: Yes, very easily / B: No)`;
    }

    return `Hello and welcome, ${name}! I am Teacher Seekho.

📌 **Lifelong Learning Formula:**
1. Learn 15–20 mins daily.
2. Practice hands-on immediately.
3. If anything is unclear, simply say **"I didn't understand"**.

📌 **Simple Example:**
Small daily drops fill the bucket; 15 minutes of daily practice builds lifelong mastery.

🎯 **Today's Practical Task:**
Set aside a 15-minute dedicated slot today for hands-on practice.

🔍 **Quick Check Question:**
How is skill mastery achieved?
(A: Daily consistent practice / B: Daydreaming)`;
  }
}

startServer();
