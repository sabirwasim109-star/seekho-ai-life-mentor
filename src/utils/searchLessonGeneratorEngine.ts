import { 
  DynamicSearchLesson, 
  UserProfile, 
  Language, 
  Course,
  KnowledgeLibraryItem
} from '../types';
import { COURSES_DATA } from '../data/mockData';
import { KNOWLEDGE_LIBRARY_ITEMS } from '../data/knowledgeLibraryData';

/**
 * Normalizes query string for robust multilingual matching
 */
function normalizeText(text: string): string {
  return (text || '')
    .toLowerCase()
    .trim()
    .replace(/[؟?.,!،؛_#*`~]/g, '')
    .replace(/\s+/g, ' ');
}

/**
 * Pre-curated, highly detailed 7-step practical lessons for high-frequency queries
 */
const PRE_CURATED_LESSONS: Record<string, Omit<DynamicSearchLesson, 'id' | 'query'>> = {
  ai: {
    topicUrdu: 'آرٹیفیشل انٹیلیجنس (AI) کا روزمرہ زندگی اور کام میں استعمال',
    topicEn: 'Using Artificial Intelligence (AI) for Everyday Work & Learning',
    categoryUrdu: 'جدید ٹیکنالوجی اور پیداواری صلاحیت',
    categoryEn: 'Modern Technology & Productivity',
    iconName: 'Bot',
    matchedCourseId: 'ai-prompt-engineering',
    matchedCourseTitleUrdu: 'اے آئی (AI) اور پرامپٹ انجینئرنگ',
    matchedCourseTitleEn: 'AI & Prompt Engineering',
    estimatedMinutes: 8,
    xpPoints: 25,
    step1Learn: {
      titleUrdu: '۱. پڑھیے — AI دراصل کیا ہے اور یہ کیسے کام کرتا ہے؟',
      titleEn: '1. Learn — What is AI and how does it assist you?',
      summaryUrdu: 'مصنوعی ذہانت (AI) ایک ایسا ہوشیار ڈیجیٹل معاون ہے جو معلومات کے وسیع سمندر کو سمجھ کر آپ کے سوالوں کے جواب دیتا ہے، خط و کتابت میں مدد کرتا ہے، اور مشکل تصورات کو آسان زبان میں سمجھاتا ہے۔ یہ انسان کی جگہ نہیں لیتا بلکہ انسان کے کام کو ۱۰ گنا تیز اور آسان بنا دیتا ہے۔',
      summaryEn: 'Artificial Intelligence (AI) is a smart digital assistant that understands vast information to answer questions, draft messages, and simplify complex ideas. It does not replace human wisdom; it multiplies your productivity and learning speed.',
      corePointsUrdu: [
        'AI ایک استاد، ریسرچر اور مددگار کی طرح ہے جس سے آپ اردو یا انگریزی میں بات کر سکتے ہیں۔',
        'بہترین نتائج کے لیے واضح اور مکمل ہدایات (پرامپٹ) دینا ضروری ہے۔',
        'AI کے جوابات کو عقل اور تصدیق کے ساتھ استعمال کرنا چاہیے، آنکھیں بند کر کے نہیں۔',
      ],
      corePointsEn: [
        'AI acts like a 24/7 tutor, researcher, and helper you can converse with in plain language.',
        'Giving clear, specific instructions (prompts) yields the most useful and actionable results.',
        'Always verify critical facts with your own judgment and authentic local sources.',
      ],
      simplifiedNoteUrdu: 'نکتہ: AI سے جتنا واضح سوال پوچھیں گے، اتنا ہی مفید اور درست جواب ملے گا۔',
      simplifiedNoteEn: 'Key Takeaway: The clearer your prompt, the more practical and accurate the AI output.',
    },
    step2Understand: {
      titleUrdu: '۲. سمجھیے — روزمرہ زندگی کی عملی مثال',
      titleEn: '2. Understand — Real-World Everyday Scenario',
      scenarioTitleUrdu: 'مثال: گاؤں کے اسکول ٹیچر اور چھوٹے دکاندار کا فائدہ',
      scenarioTitleEn: 'Scenario: Village School Teacher & Local Shopkeeper',
      realWorldExampleUrdu: 'برنالہ کے ایک استاد نے AI سے پوچھا: "چھٹی جماعت کے بچوں کو پانی کی بچت کا سبق ۱۰ منٹ کی دلچسپ کہانی کی صورت میں اردو میں لکھ کر دو"۔ چند سیکنڈوں میں AI نے ایک خوبصورت دیہی مثال والی کہانی تیار کر دی جس سے بچوں نے سبق فوراً یاد کر لیا۔ اسی طرح ایک دکاندار نے اپنے سامان کی فہرست اور آمدن کا حساب کتاب ترتیب دینے میں AI سے رہنمائی لی۔',
      realWorldExampleEn: 'A village teacher asked AI: "Write a 10-minute engaging story in Urdu to teach 6th-grade students water conservation." In seconds, AI generated a culturally relevant story that the students loved. A local shopkeeper used AI to draft inventory checklists and customer messages.',
      localContextUrdu: 'گھریلو استعمال: بچے کے ہوم ورک کا طریقہ سمجھنا، صحت مند گھریلو نسخوں کی تصدیق، یا دکان کا اشتہار بنانا۔',
      localContextEn: 'Local Relevance: Explaining homework concepts, organizing local sales, and drafting community announcements.',
    },
    step3Think: {
      titleUrdu: '۳. سوچیے — خود احتسابی اور غور و فکر کا سوال',
      titleEn: '3. Think — Critical Reflection Question',
      reflectionQuestionUrdu: 'آپ کی روزمرہ زندگی یا کام میں ایسا کون سا ایک مشکل یا وقت طلب کام ہے جس میں AI آپ کا گھنٹوں کا وقت بچا سکتا ہے؟',
      reflectionQuestionEn: 'What is one repetitive or difficult task in your daily work where AI could save you valuable time?',
      promptUrdu: 'سوچیے کہ کیا آپ اس سے کوئی نئی زبان سیکھ سکتے ہیں، خط لکھوا سکتے ہیں، یا کوئی ہنر سمجھ سکتے ہیں؟',
      promptEn: 'Consider whether you can use AI to learn a new language, write official letters, or grasp a new technical trade.',
      suggestedAnglesUrdu: [
        'تعلیمی مضامین کو آسان الفاظ میں سمجھنا',
        'کاروباری خطوط یا درخواستیں لکھوانا',
        'گھریلو مسائل اور بجٹ کا پلان بنانا',
      ],
      suggestedAnglesEn: [
        'Simplifying difficult academic concepts',
        'Drafting official business applications',
        'Organizing household budgets and meal plans',
      ],
    },
    step4Practice: {
      titleUrdu: '۴. مشق — فوری انٹرایکٹو سوال',
      titleEn: '4. Practice — Quick Interactive Challenge',
      challengeUrdu: 'درج ذیل میں سے AI سے بہترین نتیجہ حاصل کرنے کا درست طریقہ کون سا ہے؟',
      challengeEn: 'Which of the following is the best way to get accurate results from AI?',
      interactiveQuestionUrdu: 'اگر آپ کو اپنے گاؤں میں درخت لگانے کی مہم کا خاکہ بنانا ہو تو کون سا پرامپٹ بہتر رہے گا؟',
      interactiveQuestionEn: 'If you want to plan a village tree plantation drive, which prompt will work best?',
      options: [
        {
          id: 'opt1',
          textUrdu: 'صرف لکھیں: "درخت لگاؤ"',
          textEn: 'Just type: "plant trees"',
          isCorrect: false,
          explanationUrdu: 'یہ بہت مختصر اور غیر واضح ہے، AI کو آپ کا ماحول، بجٹ اور ہدف معلوم نہیں ہوگا۔',
          explanationEn: 'This is too vague; AI will not know your local context, budget, or community size.',
        },
        {
          id: 'opt2',
          textUrdu: 'لکھیں: "ہمارے گاؤں میں ۵۰ نوجوانوں کے ساتھ ۱ روزہ شجرکاری مہم کا مرحلہ وار پلان، کم خرچ پودوں کی فہرست اور ذمہ داریاں تجویز کرو"',
          textEn: 'Type: "Provide a 1-day step-by-step village tree plantation plan for 50 volunteers, with low-cost native tree species and task assignments"',
          isCorrect: true,
          explanationUrdu: 'شاباش! یہ مکمل اور واضح پرامپٹ ہے جس میں تعداد، مقصد اور سیاق و سباق شامل ہے۔',
          explanationEn: 'Correct! This prompt is specific, giving clear roles, context, and exact deliverables.',
        },
        {
          id: 'opt3',
          textUrdu: 'AI پر ہر بات کا اندھا دھند یقین کر کے بغیر پڑھے آگے بھیج دیں',
          textEn: 'Blindly trust and forward whatever AI outputs without reviewing',
          isCorrect: false,
          explanationUrdu: 'AI مددگار ضرور ہے مگر انسان کو اپنے فہم اور حقیقت سے موازنہ لازمی کرنا چاہیے۔',
          explanationEn: 'AI is a helper; human review and local fact-checking remain essential.',
        },
      ],
    },
    step5Action: {
      titleUrdu: '۵. عملی اقدام — آج آپ کو حقیقی زندگی میں کیا کرنا ہے؟',
      titleEn: '5. Practical Action — What to do TODAY in real life',
      todayActionUrdu: 'آج ہی اپنے فون پر مفت AI ٹول (جیسے Seekho AI Mentor یا ChatGPT) کھولیں اور اپنی دلچسپی کا کوئی ایک سوال پوچھ کر آزمائیں۔',
      todayActionEn: 'Open a free AI tool (like Seekho AI Mentor) and test it today by asking one real question from your work or study.',
      actionChecklistUrdu: [
        'اپنے فون پر Seekho AI استاد کا بٹن دبائیں یا مائیک پر بولیں۔',
        'اپنا سوال واضح انداز میں پوچھیں (مثال: "مجھے کینوا میں پوسٹر بنانے کا طریقہ ۳ مرحلوں میں بتاؤ")۔',
        'جواب پڑھ کر یا سن کر اس پر عمل کرنے کی کوشش کریں۔',
      ],
      actionChecklistEn: [
        'Tap the Seekho AI Mentor button or speak using the voice mic.',
        'Ask a specific question (e.g., "Give me 3 easy steps to design a poster in Canva").',
        'Read or listen to the output and test the steps immediately.',
      ],
      estimatedMinutes: 5,
    },
    step6Reflection: {
      titleUrdu: '۶. انعکاس — آپ نے کیا سیکھا اور کیسا محسوس ہوا؟',
      titleEn: '6. Reflection — Log what you discovered',
      promptUrdu: 'AI کا استعمال آزما کر آپ کو سب سے زیادہ کون سی چیز مفید یا حیران کن لگی؟ نیچے اپنے تاثرات درج کریں:',
      promptEn: 'After trying AI, what feature did you find most helpful or surprising? Record your quick thoughts:',
      sampleTakeawaysUrdu: [
        'مجھے سمجھ آیا کہ AI اردو میں بھی اتنی روانی سے بات چیت اور مدد کر سکتا ہے۔',
        'اب میں درخواست لکھنے کے لیے کسی دوسرے کا انتظار نہیں کروں گا۔',
        'میں اپنے بچوں کو اسکول کے مضامین سمجھانے میں اس سے مدد لوں گا۔',
      ],
      sampleTakeawaysEn: [
        'I realized AI communicates fluently in Urdu and understands local contexts.',
        'I can draft official letters independently without waiting for outside help.',
        'I will use it to explain difficult concepts to my younger siblings and children.',
      ],
    },
    step7Impact: {
      titleUrdu: '۷. پیش رفت اور اثرات — ذات، خاندان اور معاشرے کا فائدہ',
      titleEn: '7. Impact & Growth — Self, Family & Society',
      selfImpactUrdu: 'ذات (Self): نئی ٹیکنالوجی کا خوف ختم ہوگا، سیکھنے کی رفتار تیز ہوگی اور اعتماد میں اضافہ ہوگا۔',
      selfImpactEn: 'Self: Eliminates tech hesitation, boosts learning velocity, and builds digital confidence.',
      familyImpactUrdu: 'خاندان (Family): بچوں کی پڑھائی میں فوری رہنمائی، گھریلو حساب کتاب میں آسانی، اور وقت کی بچت۔',
      familyImpactEn: 'Family: Instant homework assistance for children, household planning, and time savings.',
      societyImpactUrdu: 'معاشرہ (Society): آپ اپنے گاؤں اور برادری کے دیگر افراد کو ڈیجیٹل سہولیات سے جوڑ کر رہنمائی دے سکیں گے۔',
      societyImpactEn: 'Society: Empowers you to mentor peers and bring modern productivity into your community.',
    },
  },

  mobile: {
    topicUrdu: 'اسمارٹ فون کا محفوظ، مفید اور باشعور استعمال',
    topicEn: 'Safe, Productive & Purposeful Smartphone Mastery',
    categoryUrdu: 'بنیادی ڈیجیٹل ہنر اور سیکیورٹی',
    categoryEn: 'Core Digital Skills & Security',
    iconName: 'Smartphone',
    matchedCourseId: 'digital-safety-cybersecurity',
    matchedCourseTitleUrdu: 'ڈیجیٹل تحفظ، پرائیویسی اور آن لائن فراڈ سے بچاؤ',
    matchedCourseTitleEn: 'Digital Privacy, Safety & Scam Prevention',
    estimatedMinutes: 7,
    xpPoints: 25,
    step1Learn: {
      titleUrdu: '۱. پڑھیے — اسمارٹ فون صرف تفریح نہیں بلکہ روزگار اور علم کا ذریعہ ہے',
      titleEn: '1. Learn — A smartphone is a tool for learning and earning',
      summaryUrdu: 'اسمارٹ فون آج کی دنیا میں بینک، اسکول، لائبریری اور دفتر ہے۔ اگر اسے صرف وقت ضائع کرنے والی ویڈیوز کے لیے استعمال کیا جائے تو یہ نقصان دہ ہے، لیکن اگر اسے علم، بلوں کی ادائیگی، اور ہنر سیکھنے کے لیے استعمال کیا جائے تو یہ زندگی بدلنے والی طاقت ہے۔',
      summaryEn: 'A smartphone is your pocket bank, school, library, and office. While mindless scrolling wastes precious hours, purposeful usage turns it into an engine of continuous learning, daily productivity, and ethical livelihood.',
      corePointsUrdu: [
        'فون کو سیکھنے، روزمرہ حساب کتاب اور برادری سے بامقصد رابطے کا ذریعہ بنائیں۔',
        'اپنے فون کے پاسورڈ، او ٹی پی (OTP) کوڈ اور ذاتی معلومات کسی اجنبی کو کبھی نہ دیں۔',
        'فضول نوٹیفیکیشن بند کر کے روزانہ بامقصد مطالعے کے لیے وقت مختص کریں۔',
      ],
      corePointsEn: [
        'Use your device as a portal for acquiring skills, managing accounts, and wholesome connections.',
        'Never share OTP security codes, passwords, or personal banking credentials with callers.',
        'Turn off distracting notifications and set aside dedicated daily time for skill growth.',
      ],
      simplifiedNoteUrdu: 'اصول: فون آپ کا ملازم ہونا چاہیے، آپ فون کے ملازم نہ بنیں۔',
      simplifiedNoteEn: 'Guiding Rule: Let the smartphone serve your goals; never let notifications control your attention.',
    },
    step2Understand: {
      titleUrdu: '۲. سمجھیے — گاؤں میں روزمرہ کا عملی تجربہ',
      titleEn: '2. Understand — Practical Village Scenario',
      scenarioTitleUrdu: 'مثال: بجلی کا بل اور جاز کیش / ایزی پیسہ کا محفوظ طریقہ',
      scenarioTitleEn: 'Scenario: Utility Bills & Safe Mobile Banking',
      realWorldExampleUrdu: 'چوہدری صاحب کو ہر ماہ بجلی کے بل جمع کروانے کے لیے برنالہ جا کر ۳ گھنٹے قطار میں لگنا پڑتا تھا۔ ان کے بیٹے نے فون پر ایپ انسٹال کر کے کیمرے سے کیو آر کوڈ اسکین کر کے بل ادا کرنا سکھا دیا۔ اب وہ ۳ منٹ میں گھر بیٹھے بل ادا کر کے رسید محفوظ کر لیتے ہیں اور فراڈ کالز سے ہوشیار رہتے ہیں۔',
      realWorldExampleEn: 'Chaudhry Sahib used to travel to town and wait 3 hours in bank queues to pay electricity bills. His son showed him how to scan the QR code via mobile banking. Now he pays in 3 minutes from home, keeps digital receipts, and stays vigilant against fraud calls.',
      localContextUrdu: 'مقامی افادیت: ہسپتالوں کے اوقات معلوم کرنا، سرکاری ایپس سے رہنمائی، اور دور دراز عزیزوں سے مفت ویڈیو رابطہ۔',
      localContextEn: 'Local Relevance: Booking clinic appointments, checking utility statuses, and staying connected with distant relatives.',
    },
    step3Think: {
      titleUrdu: '۳. سوچیے — سکرین ٹائم اور وقت کا احتساب',
      titleEn: '3. Think — Time & Screen Accountability',
      reflectionQuestionUrdu: 'کل آپ نے اپنے فون پر جتنا وقت گزارا، اس میں سے کتنا حصہ آپ کے علم یا روزگار میں اضافے کا باعث بنا؟',
      reflectionQuestionEn: 'Out of the time spent on your smartphone yesterday, how much contributed directly to your learning or livelihood?',
      promptUrdu: 'کیا آپ روزانہ صرف ۱۵ منٹ سیکھو ایپ یا کسی اچھے تعلیمی چینل کے لیے مخصوص کر سکتے ہیں؟',
      promptEn: 'Can you dedicate just 15 minutes each day to structured learning on Seekho or productive trade skills?',
      suggestedAnglesUrdu: [
        'غیر ضروری شارٹس اور ریلز کے وقت میں کمی لانا',
        'ہر صبح ایک مثبت اور تعلیمی بات سننا',
        'آن لائن دھوکے بازوں کے طریقوں کو سمجھنا',
      ],
      suggestedAnglesEn: [
        'Reducing aimless short-video doomscrolling',
        'Listening to one inspiring educational talk every morning',
        'Learning how common phone fraud schemes operate to protect your family',
      ],
    },
    step4Practice: {
      titleUrdu: '۴. مشق — آن لائن تحفظ کا جائزہ',
      titleEn: '4. Practice — Online Safety Quick Check',
      challengeUrdu: 'اگر آپ کے فون پر کال آئے کہ "آپ کا انعام نکلا ہے، ہمیں فوراً ایس ایم ایس کوڈ بتائیں" تو کیا کرنا چاہیے؟',
      challengeEn: 'If a caller claims you won a prize and asks for an SMS verification code, what should you do?',
      interactiveQuestionUrdu: 'فون سیکیورٹی کا بنیادی اصول کیا ہے؟',
      interactiveQuestionEn: 'What is the golden rule of mobile security?',
      options: [
        {
          id: 'opt1',
          textUrdu: 'خوشی سے کوڈ بتا دیں تاکہ انعام مل سکے',
          textEn: 'Share the code immediately to claim the prize',
          isCorrect: false,
          explanationUrdu: 'ہرگز نہیں! یہ ۱۰۰ فیصد فراڈ ہے۔ کوئی بھی بینک یا ادارہ آپ سے خفیہ کوڈ نہیں مانگتا۔',
          explanationEn: 'Never! This is 100% scam. Legitimate institutions never ask for your private OTP.',
        },
        {
          id: 'opt2',
          textUrdu: 'فون فوراً کاٹ دیں اور کبھی بھی اپنا پاسورڈ یا او ٹی پی کسی کو نہ بتائیں',
          textEn: 'Hang up immediately and never share passwords or OTP codes with anyone',
          isCorrect: true,
          explanationUrdu: 'بالکل درست! او ٹی پی (OTP) آپ کی ڈیجیٹل تجوری کی چابی ہے جسے ہمیشہ خفیہ رکھنا چاہیے۔',
          explanationEn: 'Exactly right! Your OTP is the key to your digital vault and must always remain secret.',
        },
        {
          id: 'opt3',
          textUrdu: 'فون سنتے رہیں اور ان سے بحث کریں',
          textEn: 'Keep talking and arguing with the scammer',
          isCorrect: false,
          explanationUrdu: 'بحث کرنے کے بجائے نمبر بلاک کرنا اور وقت بچانا زیادہ دانشمندی ہے۔',
          explanationEn: 'Instead of engaging, simply block the number and safeguard your time.',
        },
      ],
    },
    step5Action: {
      titleUrdu: '۵. عملی اقدام — آج کا ۱ چھوٹا قدم',
      titleEn: '5. Practical Action — One tangible step today',
      todayActionUrdu: 'آج اپنے فون کی سیٹنگز میں جا کر فنگر پرنٹ یا اسکرین لاک لگائیں اور غیر ضروری ایپس کے نوٹیفیکیشن بند کریں۔',
      todayActionEn: 'Open phone settings right now to enable biometric screen lock and mute notifications for non-essential entertainment apps.',
      actionChecklistUrdu: [
        'سیٹنگز میں اسکرین لاک (Screen Lock / PIN) فعال کریں۔',
        'سیکھو ایپ کے آڈیو بٹن کو سن کر اردو سبق سننا آزمائیں۔',
        'اپنے گھر کے کسی بڑے یا چھوٹے فرد کو ایک مفید فیچر سکھائیں۔',
      ],
      actionChecklistEn: [
        'Enable Screen Lock PIN or fingerprint security.',
        'Test the audio reader on Seekho to listen to a full Urdu lesson.',
        'Teach one elder or sibling a useful digital shortcut today.',
      ],
      estimatedMinutes: 4,
    },
    step6Reflection: {
      titleUrdu: '۶. انعکاس — آپ کی ڈیجیٹل نیت',
      titleEn: '6. Reflection — Set your digital intention',
      promptUrdu: 'آپ اپنے فون کو کس مقصد کے لیے سب سے زیادہ استعمال کرنا چاہتے ہیں؟',
      promptEn: 'What is your primary productive goal for your smartphone going forward?',
      sampleTakeawaysUrdu: [
        'میں اپنے فارغ وقت میں نئے ہنر اور اخلاقی اسباق سیکھوں گا۔',
        'میں آن لائن کام اور ڈیجیٹل سروسز سے حلال روزگار کمانا چاہتا ہوں۔',
        'میں اپنے گاؤں کے دوستوں کو آن لائن فراڈ سے باخبر رکھوں گا۔',
      ],
      sampleTakeawaysEn: [
        'I will transform idle screen time into practical learning and character enrichment.',
        'I aim to explore ethical online freelance trades and digital services.',
        'I will guide my family and community against online fraud.',
      ],
    },
    step7Impact: {
      titleUrdu: '۷. پیش رفت اور اثرات — ذات، خاندان اور معاشرے کی بہتری',
      titleEn: '7. Impact & Growth — Self, Family & Community',
      selfImpactUrdu: 'ذات (Self): ذہنی سکون، وقت کی بچت اور آن لائن مالیاتی فراڈ سے مکمل حفاظت۔',
      selfImpactEn: 'Self: Mental clarity, hours saved from distraction, and robust defense against scams.',
      familyImpactUrdu: 'خاندان (Family): گھریلو بلوں اور بینکنگ میں باوقار خود کفالت اور بزرگوں کی مدد۔',
      familyImpactEn: 'Family: Effortless utility bill management and assisting elders with digital tasks.',
      societyImpactUrdu: 'معاشرہ (Society): معاشرے میں ڈیجیٹل شعور کی ترویج اور بزرگوں کے لیے ڈیجیٹل آسانی۔',
      societyImpactEn: 'Society: Fosters a culture of cyber awareness and respectful digital inclusion.',
    },
  },

  freelancing: {
    topicUrdu: 'فری لانسنگ، کینوا اور آن لائن ڈیجیٹل ہنر سے حلال کمائی',
    topicEn: 'Freelancing, Canva & Digital Skills for Ethical Livelihood',
    categoryUrdu: 'آن لائن روزگار اور فری لانسنگ',
    categoryEn: 'Online Freelancing & Career Growth',
    iconName: 'Laptop',
    matchedCourseId: 'freelancing-upwork-fiverr',
    matchedCourseTitleUrdu: 'فری لانسنگ، کینوا اور آن لائن روزگار کی شروعات',
    matchedCourseTitleEn: 'Freelancing, Canva & Online Income Foundations',
    estimatedMinutes: 9,
    xpPoints: 25,
    step1Learn: {
      titleUrdu: '۱. پڑھیے — فری لانسنگ کیا ہے اور کیسے شروع ہوتی ہے؟',
      titleEn: '1. Learn — What is freelancing and how do you begin?',
      summaryUrdu: 'فری لانسنگ کا مطلب ہے اپنے ہنر (جیسے گرافک ڈیزائننگ، ٹائپنگ، ویڈیو ایڈیٹنگ، ڈیٹا اینٹری، یا ترجمہ نگاری) کی بنیاد پر کسی مستقل ملازمت کے بغیر دنیا بھر کے کلائنٹس کو خدمات فراہم کرنا اور فی پروجیکٹ معاوضہ حاصل کرنا۔ اس کے لیے کسی ڈگری سے زیادہ عملی مہارت اور ایمانداری کی ضرورت ہوتی ہے۔',
      summaryEn: 'Freelancing means offering your practical skills (such as Canva design, typing, video editing, translation, or data entry) directly to clients worldwide on a project basis. Success depends on genuine practical competence, clear communication, and absolute integrity.',
      corePointsUrdu: [
        'پہلے کوئی ایک مخصوص ہنر (جیسے کینوا پر سوشل میڈیا پوسٹر بنانا) اچھی طرح سیکھیں۔',
        'اپنے کام کے ۵ بہترین نمونے (Portfolio) بنا کر تیار رکھیں۔',
        'وقت کی پابندی، سچائی اور کلائنٹ کے ساتھ باوقار اخلاق کامیابی کی بنیاد ہے۔',
      ],
      corePointsEn: [
        'Master one focused high-demand skill first (e.g., social media poster design in Canva).',
        'Build a solid portfolio of 5 clean real-world sample projects.',
        'Punctuality, honest communication, and ethical commitments ensure long-term client trust.',
      ],
      simplifiedNoteUrdu: 'سنہری اصول: پہلے ہنر سیکھیں، پیسے کے پیچھے نہ بھاگیں، ہنر پختہ ہوگا تو معاوضہ خود آئے گا۔',
      simplifiedNoteEn: 'Golden Rule: Focus on mastering the craft first; consistent income follows genuine competence.',
    },
    step2Understand: {
      titleUrdu: '۲. سمجھیے — حقیقی زندگی کی کامیابی کی کہانی',
      titleEn: '2. Understand — Practical Case Study',
      scenarioTitleUrdu: 'مثال: برنالہ کے نوجوان کا کینوا سے پہلا آرڈر',
      scenarioTitleEn: 'Case Study: Village Youth Earning with Canva Designs',
      realWorldExampleUrdu: 'عمران نے اپنے موبائل پر کینوا (Canva) پر دکانوں کے لیے فیس بک پوسٹرز اور کارڈز ڈیزائن کرنا سیکھا۔ پہلے اس نے اپنے گاؤں کے کریانہ اسٹور اور میڈیکل اسٹور کے لیے مفت پوسٹر بنائے جس سے اس کا پورٹ فولیو بن گیا۔ پھر اس نے آن لائن گروپ میں پوسٹ کی اور اسے شہر کی ایک بیکری سے ماہانہ ۱۰ پوسٹرز بنانے کا باقاعدہ کام مل گیا۔',
      realWorldExampleEn: 'Imran learned Canva poster design on his phone. He started by designing promotional flyers for his local pharmacy and grocery shop for free, which built his portfolio. He then shared his work online and secured a recurring monthly design gig from a bakery.',
      localContextUrdu: 'لوکل مارکیٹ: اسکولوں کے داخلہ بینرز، شادی کارڈز، دکانوں کی تشہیر، اور یوٹیوب تھمب نیلز۔',
      localContextEn: 'Local Market: School admission posters, social media banners, and YouTube thumbnails.',
    },
    step3Think: {
      titleUrdu: '۳. سوچیے — آپ کا قدرتی ہنر کیا ہے؟',
      titleEn: '3. Think — Discovering Your Core Strength',
      reflectionQuestionUrdu: 'آپ کے پاس ایسا کون سا کام یا ہنر ہے جس میں آپ کی دلچسپی ہے اور آپ اسے کمپیوٹر یا فون پر دوسروں کے لیے کر سکتے ہیں؟',
      reflectionQuestionEn: 'What is a skill you enjoy practicing that could be offered to others digitally on a computer or phone?',
      promptUrdu: 'سوچیے کہ کیا آپ کو ڈیزائننگ، اردو ٹائپنگ، آواز کی ریکارڈنگ، یا تصاویر بنانے کا شوق ہے؟',
      promptEn: 'Do you lean toward visual design, Urdu typing, voiceover recording, research, or accounting?',
      suggestedAnglesUrdu: [
        'کینوا (Canva) پر پوسٹر اور فلائیر ڈیزائن',
        'موبائل پر کیپ کٹ (CapCut) سے ویڈیو ایڈیٹنگ',
        'ان پیج یا ورڈ میں خوبصورت اردو کمپوزنگ',
      ],
      suggestedAnglesEn: [
        'Canva graphic and banner design',
        'CapCut mobile short-form video editing',
        'Clean Urdu word processing and transcription',
      ],
    },
    step4Practice: {
      titleUrdu: '۴. مشق — کلائنٹ ڈیلنگ اور کمیونیکیشن چیلنج',
      titleEn: '4. Practice — Client Communication Scenario',
      challengeUrdu: 'اگر کوئی کلائنٹ آپ سے کام کا کہے تو سب سے پہلے کیا کرنا چاہیے؟',
      challengeEn: 'When a new client approaches you with a project, what is the best first step?',
      interactiveQuestionUrdu: 'پیشہ ورانہ فری لانسنگ کا درست طریقہ کون سا ہے؟',
      interactiveQuestionEn: 'What is the professional approach to onboarding a client?',
      options: [
        {
          id: 'opt1',
          textUrdu: 'بغیر سمجھے "ہاں میں سب کر دوں گا" کہہ دینا اور پھر کام وقت پر نہ دینا',
          textEn: 'Over-promise immediately without clarifying details, then miss the deadline',
          isCorrect: false,
          explanationUrdu: 'یہ ناتجربہ کاری ہے جس سے اعتماد ٹوٹتا ہے اور ریٹنگ خراب ہوتی ہے۔',
          explanationEn: 'Over-promising and failing to deliver damages trust and reputation.',
        },
        {
          id: 'opt2',
          textUrdu: 'کلائنٹ کی ضرورت کو غور سے سمجھنا، وقت اور معاوضہ واضح طے کرنا اور بہترین نمونہ دکھانا',
          textEn: 'Carefully understand project scope, set realistic timelines and fees, and share sample work',
          isCorrect: true,
          explanationUrdu: 'ماشاءاللہ! یہی باوقار، کامیاب اور قابلِ اعتماد فری لانسر کی نشانی ہے۔',
          explanationEn: 'Masha’Allah! Clear scope and transparent communication build lasting client partnerships.',
        },
        {
          id: 'opt3',
          textUrdu: 'مارکیٹ سے ۵ گنا زیادہ فیس کا مطالبہ کرنا بغیر کوئی پچھلا کام دکھائے',
          textEn: 'Demand exorbitant rates without having any proven work samples',
          isCorrect: false,
          explanationUrdu: 'شروع میں معقول فیس اور مضبوط پورٹ فولیو پر توجہ دینی چاہیے۔',
          explanationEn: 'Early in your career, prioritize solid portfolio proof and fair value pricing.',
        },
      ],
    },
    step5Action: {
      titleUrdu: '۵. عملی اقدام — آج کا پہلا عملی منصوبہ',
      titleEn: '5. Practical Action — Today’s concrete task',
      todayActionUrdu: 'آج کینوا (Canva.com) پر مفت اکاؤنٹ بنائیں اور اپنے نام یا کسی دکان کا ایک خوبصورت پوسٹر ڈیزائن کریں۔',
      todayActionEn: 'Create a free account on Canva and design one attractive social media poster for a local shop or service.',
      actionChecklistUrdu: [
        'کینوا ایپ انسٹال کریں یا ویب سائٹ کھولیں۔',
        'ایک مفت ٹیمپلیٹ منتخب کریں اور اس میں اردو یا انگریزی میں لکھیں۔',
        'مکمل ڈیزائن ڈاؤن لوڈ کر کے اپنے پورٹ فولیو فولڈر میں محفوظ کریں۔',
      ],
      actionChecklistEn: [
        'Install Canva on your phone or open it on your laptop.',
        'Pick a clean template and customize the text and colors.',
        'Export the graphic and save it to your portfolio gallery.',
      ],
      estimatedMinutes: 10,
    },
    step6Reflection: {
      titleUrdu: '۶. انعکاس — آپ کا ۹۰ دن کا ہدف',
      titleEn: '6. Reflection — Your 90-Day Vision',
      promptUrdu: 'آپ اگلے ۳ مہینوں میں فری لانسنگ کے ذریعے کیا ہدف حاصل کرنا چاہتے ہیں؟',
      promptEn: 'What is your primary milestone for the next 90 days of skill practice?',
      sampleTakeawaysUrdu: [
        'میں کینوا میں ۱۰ پیشہ ورانہ ڈیزائن مکمل کر کے پورٹ فولیو بناؤں گا۔',
        'میں ماہانہ ۲۰ ہزار روپے حلال آمدن کما کر اپنے تعلیمی اخراجات خود اٹھاؤں گا۔',
        'میں اپنے چھوٹے بھائی اور محلے کے ساتھیوں کو بھی یہ ہنر سکھاؤں گا۔',
      ],
      sampleTakeawaysEn: [
        'I will build a 10-piece verified Canva design portfolio.',
        'I aim to earn ethical supplementary income to support my education.',
        'I will share this digital skillset with peers in my community.',
      ],
    },
    step7Impact: {
      titleUrdu: '۷. پیش رفت اور اثرات — مالی خود مختاری اور عزت',
      titleEn: '7. Impact & Growth — Financial Dignity & Family Support',
      selfImpactUrdu: 'ذات (Self): معاشی خود انحصاری، بے روزگاری کے خوف کا خاتمہ اور ہنر مندی کا فخر۔',
      selfImpactEn: 'Self: Financial independence, dignity of skilled labor, and confidence.',
      familyImpactUrdu: 'خاندان (Family): والدین پر مالی بوجھ میں کمی اور گھر میں خوشحالی و عزت۔',
      familyImpactEn: 'Family: Easing the financial load on parents and fostering household prosperity.',
      societyImpactUrdu: 'معاشرہ (Society): ملکی معیشت میں زرِمبادلہ لانا اور نوجوانوں کے لیے مثبت رول ماڈل بننا۔',
      societyImpactEn: 'Society: Bringing foreign remittance to the economy and mentoring youth.',
    },
  },

  business: {
    topicUrdu: 'گاؤں اور چھوٹے شہر میں کم سرمائے سے منافع بخش کاروبار کی شروعات',
    topicEn: 'Starting a Profitable Low-Capital Business in Towns & Villages',
    categoryUrdu: 'کاروبار، زراعت اور مقامی معیشت',
    categoryEn: 'Enterprise, Agriculture & Local Economy',
    iconName: 'Briefcase',
    matchedCourseId: 'entrepreneurship-rural-business',
    matchedCourseTitleUrdu: 'چھوٹے کاروبار کا آغاز، دیہی معیشت اور کسٹمر ڈیلنگ',
    matchedCourseTitleEn: 'Small Business, Rural Enterprise & Customer Mastery',
    estimatedMinutes: 8,
    xpPoints: 25,
    step1Learn: {
      titleUrdu: '۱. پڑھیے — کامیاب کاروبار کا بنیادی فارمولا',
      titleEn: '1. Learn — The core formula of a thriving enterprise',
      summaryUrdu: 'کاروبار کا مطلب صرف بڑی دکان یا فیکٹری نہیں ہے، بلکہ لوگوں کے کسی حقیقی مسئلے کو حل کرنا اور دیانتداری کے ساتھ بہترین سروس یا چیز فراہم کرنا ہے۔ گاؤں اور چھوٹے قصبوں میں ایسے درجنوں مواقع موجود ہیں جہاں کم سرمائے مگر محنت اور سلیقے سے بہترین روزگار کمایا جا سکتا ہے۔',
      summaryEn: 'Business is not about large capital or giant showrooms; it is about solving real everyday problems for people with honesty and reliable quality. Local towns and villages hold abundant opportunities for low-cost, high-value enterprises.',
      corePointsUrdu: [
        'پہلے اپنے گاؤں یا محلے کی ایسی ضرورت تلاش کریں جس کے لیے لوگوں کو دور شہر جانا پڑتا ہے۔',
        'دیانتداری، ناپ تول میں برابری اور خوش اخلاقی مستقل کسٹمرز بناتی ہے۔',
        'آمدن اور خرچ کا روزانہ باقاعدہ کھاتہ لکھنا کاروبار کی ریڑھ کی ہڈی ہے۔',
      ],
      corePointsEn: [
        'Identify local shortages or services for which villagers currently travel to distant cities.',
        'Strict honesty, fair weights, and courteous service build unbreakable customer loyalty.',
        'Maintaining daily written income and expenditure logs is the backbone of business longevity.',
      ],
      simplifiedNoteUrdu: 'حکمت: برکت سچائی میں ہے، جھوٹ سے عارضی نفع ہو سکتا ہے مگر دائمی نقصان ہوتا ہے۔',
      simplifiedNoteEn: 'Wisdom: Lasting prosperity resides in truthfulness and ethical customer care.',
    },
    step2Understand: {
      titleUrdu: '۲. سمجھیے — مقامی دیہی کاروبار کی سچی مثال',
      titleEn: '2. Understand — Local Village Success Story',
      scenarioTitleUrdu: 'مثال: ڈوبے گاؤں میں دیسی انڈوں اور شہد کی پیکنگ کا کاروبار',
      scenarioTitleEn: 'Scenario: Organic Honey & Free-Range Poultry Farm',
      realWorldExampleUrdu: 'ایک نوجوان نے صرف ۲۰ دیسی مرغیوں سے شروعات کی اور واٹس ایپ گروپ کے ذریعے گاؤں اور قریبی شہر کے ڈاکٹروں اور خاندانوں کو خالص دیسی انڈے اور شہد فراہم کرنا شروع کیا۔ کیونکہ معیار خالص تھا، اس لیے لوگ پیشگی آرڈر بک کرواتے تھے۔ ۶ ماہ میں اس کا ماہانہ منافع ۵۰ ہزار سے تجاوز کر گیا۔',
      realWorldExampleEn: 'A village youth started with 20 free-range hens and connected with town families via WhatsApp to supply organic eggs and pure honey. Because the quality was verified, customers placed advance orders. Within 6 months his monthly net profit exceeded 50,000 PKR.',
      localContextUrdu: 'دیہی مواقع: بیج و کھاد کی ڈلیوری، سولر لائٹس مرمت، مویشیوں کی ونڈا سپلائی، یا گھریلو اچار اور مربے۔',
      localContextEn: 'Rural Opportunities: Solar maintenance, organic produce packaging, feed delivery, and local transport.',
    },
    step3Think: {
      titleUrdu: '۳. سوچیے — آپ کے علاقے کا سب سے بڑا مسئلہ کیا ہے؟',
      titleEn: '3. Think — Identifying Your Village Problem',
      reflectionQuestionUrdu: 'آپ کے گاؤں یا محلے میں ایسی کون سی چیز یا خدمت ہے جس کی لوگوں کو ضرورت ہے مگر دستیاب نہیں؟',
      reflectionQuestionEn: 'What is one essential product or service your local community frequently needs but struggles to find nearby?',
      promptUrdu: 'سوچیے کہ کیا وہ تازہ سبزیاں ہیں، موبائل رپیئرنگ ہے، بجلی کا سامان ہے یا بچوں کی ٹیوشن؟',
      promptEn: 'Is it organic groceries, solar servicing, mobile repair, tailoring, or clean drinking water supply?',
      suggestedAnglesUrdu: [
        'زرعی پیداوار کو بغیر مڈل مین کے براہِ راست فروخت کرنا',
        'موبائل اور سولر آلات کی لوکل مرمت',
        'خالص گھریلو مصالحہ جات اور اناج کی صفائی و پیکنگ',
      ],
      suggestedAnglesEn: [
        'Direct farm-to-consumer produce packaging',
        'Local solar and home appliance servicing',
        'Clean spice packaging and flour processing',
      ],
    },
    step4Practice: {
      titleUrdu: '۴. مشق — کاروباری بجٹ اور اخراجات کا حساب',
      titleEn: '4. Practice — Business Budget & Cashflow Check',
      challengeUrdu: 'اگر آپ کی دکان پر روزانہ ۵ ہزار کی فروخت ہو اور ۴ ہزار سامان کی قیمت ہو، تو بچ جانے والے ۱ ہزار کا کیا کرنا چاہیے؟',
      challengeEn: 'If your daily sales are 5,000 PKR and goods cost 4,000 PKR, how should you manage the 1,000 PKR profit?',
      interactiveQuestionUrdu: 'کاروباری منافع کے انتظام کا درست اسلامی و معاشی طریقہ کیا ہے؟',
      interactiveQuestionEn: 'What is the disciplined way to handle daily business profits?',
      options: [
        {
          id: 'opt1',
          textUrdu: 'سارا ۱ ہزار اسی شام گھریلو عیاشی میں خرچ کر دیں',
          textEn: 'Spend the entire 1,000 PKR that very evening on luxuries',
          isCorrect: false,
          explanationUrdu: 'یہ غلط ہے! اس طرح دکان کا سرمایہ (Capital) ختم ہو جائے گا اور کاروبار بند ہو جائے گا۔',
          explanationEn: 'Incorrect! This drains working capital and leads to enterprise collapse.',
        },
        {
          id: 'opt2',
          textUrdu: 'کھاتہ لکھیں: آدھا حصہ کاروبار کے اضافے اور ایمرجنسی فنڈ میں رکھیں اور آدھا گھریلو ضرورت پر لگائیں',
          textEn: 'Log it: Reinvest 50% into business growth/emergency reserve, and use 50% for family needs',
          isCorrect: true,
          explanationUrdu: 'ماشاءاللہ! یہی مالی سلیقہ مندی ہے جو چھوٹے کاروبار کو بڑا اور مضبوط ادارہ بناتی ہے۔',
          explanationEn: 'Masha’Allah! Reinvesting profits and maintaining reserves is how small ventures become resilient.',
        },
        {
          id: 'opt3',
          textUrdu: 'بغیر لکھے سارا پیسہ گلے میں پڑا رہنے دیں اور کوئی حساب نہ رکھیں',
          textEn: 'Keep all cash unrecorded in the cashbox without keeping records',
          isCorrect: false,
          explanationUrdu: 'حساب کتاب نہ رکھنے سے نقصان اور بے برکتی پیدا ہوتی ہے۔',
          explanationEn: 'Failing to track cashflow breeds confusion and operational losses.',
        },
      ],
    },
    step5Action: {
      titleUrdu: '۵. عملی اقدام — آج کا ۱ کاروباری قدم',
      titleEn: '5. Practical Action — One business action today',
      todayActionUrdu: 'ایک سادہ ڈائری یا کاپی لیں، اس پر "میرا کاروباری منصوبہ" لکھیں اور گاؤں کے ۵ ایسے لوگوں کے نام لکھیں جو آپ سے کوئی سروس یا چیز خرید سکتے ہیں۔',
      todayActionEn: 'Take a notebook, title it "My Enterprise Plan", and list 5 local people who would benefit from your product or service.',
      actionChecklistUrdu: [
        'کاپی میں ۳ ممکنہ کاروباری خیالات لکھیں۔',
        'ہر خیال کا تخمینی ابتدائی خرچہ اور متوقع منافع درج کریں۔',
        'گاؤں کے کسی تجربہ کار دکاندار یا بزرگ سے مشورہ لیں۔',
      ],
      actionChecklistEn: [
        'Write down 3 potential village business ideas.',
        'Estimate starting cost and weekly profit for each.',
        'Seek advice from one respected local merchant or elder.',
      ],
      estimatedMinutes: 8,
    },
    step6Reflection: {
      titleUrdu: '۶. انعکاس — دیانت اور نیت',
      titleEn: '6. Reflection — Honest Enterprise Intent',
      promptUrdu: 'آپ اپنے کاروبار کے ذریعے اپنے گاؤں کے لوگوں کو کیا آسانی پہنچانا چاہتے ہیں؟',
      promptEn: 'What genuine benefit and convenience do you intend to bring to your community through your work?',
      sampleTakeawaysUrdu: [
        'میں خالص اشیاء مناسب داموں فراہم کر کے حلال روزی کماؤں گا۔',
        'میں اپنے گاؤں کے نوجوانوں کو بھی روزگار کے مواقع دوں گا۔',
        'میں کسٹمرز کو عزت اور سچائی کے ساتھ سروس دوں گا۔',
      ],
      sampleTakeawaysEn: [
        'I will provide pure, high-quality goods at fair prices for ethical livelihood.',
        'I aim to create local employment opportunities for village youth.',
        'I will treat every customer with utmost dignity and transparency.',
      ],
    },
    step7Impact: {
      titleUrdu: '۷. پیش رفت اور اثرات — دیہی ترقی اور خوشحالی',
      titleEn: '7. Impact & Growth — Community Prosperity & Self-Reliance',
      selfImpactUrdu: 'ذات (Self): ملازمت کی محتاجی ختم، خود مختاری اور عزتِ نفس میں اضافہ۔',
      selfImpactEn: 'Self: Freedom from dependency, enhanced dignity, and leadership skills.',
      familyImpactUrdu: 'خاندان (Family): پائیدار مالی استحکام، بچوں کی معیاری تعلیم اور خاندانی سکون۔',
      familyImpactEn: 'Family: Long-term financial stability and better education for your children.',
      societyImpactUrdu: 'معاشرہ (Society): گاؤں میں پیسوں کی گردش، مقامی روزگار کی فراہمی اور خود کفالت۔',
      societyImpactEn: 'Society: Local wealth circulation, village employment, and community self-reliance.',
    },
  },
};

/**
 * Intelligent Dynamic Lesson Synthesizer for arbitrary search queries
 */
export function generateDynamicSearchLesson(
  rawQuery: string,
  userProfile?: UserProfile,
  language: Language = 'ur'
): DynamicSearchLesson {
  const q = normalizeText(rawQuery);
  const isUrdu = language === 'ur';

  // 1. Check for Pre-Curated High-Value Matches
  if (q.includes('ai') || q.includes('اے آئی') || q.includes('چیٹ') || q.includes('ذہانت') || q.includes('chatgpt') || q.includes('کمپیوٹر')) {
    const base = PRE_CURATED_LESSONS.ai;
    return {
      id: `dyn-ai-${Date.now()}`,
      query: rawQuery,
      ...base,
    };
  }

  if (q.includes('موبائل') || q.includes('فون') || q.includes('phone') || q.includes('mobile') || q.includes('سیکیورٹی') || q.includes('فراڈ') || q.includes('ایپ')) {
    const base = PRE_CURATED_LESSONS.mobile;
    return {
      id: `dyn-mobile-${Date.now()}`,
      query: rawQuery,
      ...base,
    };
  }

  if (q.includes('فری لانس') || q.includes('freelanc') || q.includes('کینوا') || q.includes('canva') || q.includes('ڈیزائن') || q.includes('آن لائن کمائی') || q.includes('گرافک')) {
    const base = PRE_CURATED_LESSONS.freelancing;
    return {
      id: `dyn-freelance-${Date.now()}`,
      query: rawQuery,
      ...base,
    };
  }

  if (q.includes('کاروبار') || q.includes('business') || q.includes('دکان') || q.includes('گاؤں') || q.includes('منافع') || q.includes('شاپ') || q.includes('ٹریڈ')) {
    const base = PRE_CURATED_LESSONS.business;
    return {
      id: `dyn-business-${Date.now()}`,
      query: rawQuery,
      ...base,
    };
  }

  // 2. Check if query matches built-in COURSES_DATA
  const matchedCourse = COURSES_DATA.find((c) => {
    const tU = normalizeText(c.titleUrdu);
    const tE = normalizeText(c.titleEn);
    const dU = normalizeText(c.descriptionUrdu);
    const cU = normalizeText(c.categoryUrdu);
    return tU.includes(q) || tE.includes(q) || dU.includes(q) || cU.includes(q) || q.includes(tU) || q.includes(tE);
  });

  // 3. Check if query matches Knowledge Library
  const matchedLibraryItem = KNOWLEDGE_LIBRARY_ITEMS.find((k) => {
    const tU = normalizeText(k.titleUrdu);
    const tE = normalizeText(k.titleEn);
    const sU = normalizeText(k.shortExplanationUrdu);
    return tU.includes(q) || tE.includes(q) || sU.includes(q) || q.includes(tU);
  });

  // 4. Synthesize Dynamic 7-Step Lesson for any custom query
  const cleanTitleUrdu = matchedCourse?.titleUrdu || matchedLibraryItem?.titleUrdu || rawQuery || 'عملی ہنر اور رہنمائی';
  const cleanTitleEn = matchedCourse?.titleEn || matchedLibraryItem?.titleEn || rawQuery || 'Practical Skill & Guidance';
  const categoryUrdu = matchedCourse?.categoryUrdu || matchedLibraryItem?.categoryTitleUrdu || 'عملی زندگی اور روزگار';
  const categoryEn = matchedCourse?.category || matchedLibraryItem?.categoryTitleEn || 'Life Skills & Enterprise';

  const userVillage = userProfile?.village || 'ڈوبے، برنالہ';
  const userName = userProfile?.name || (isUrdu ? 'محترم ساتھی' : 'Learner');

  return {
    id: `dyn-custom-${Date.now()}`,
    query: rawQuery,
    topicUrdu: cleanTitleUrdu,
    topicEn: cleanTitleEn,
    categoryUrdu,
    categoryEn,
    iconName: matchedCourse?.icon || matchedLibraryItem?.iconName || 'Sparkles',
    matchedCourseId: matchedCourse?.id,
    matchedCourseTitleUrdu: matchedCourse?.titleUrdu,
    matchedCourseTitleEn: matchedCourse?.titleEn,
    matchedLibraryItemId: matchedLibraryItem?.id,
    estimatedMinutes: 8,
    xpPoints: 25,
    step1Learn: {
      titleUrdu: `۱. پڑھیے — "${cleanTitleUrdu}" کی بنیادی سمجھ`,
      titleEn: `1. Learn — Core Understanding of "${cleanTitleEn}"`,
      summaryUrdu: matchedCourse?.descriptionUrdu || matchedLibraryItem?.shortExplanationUrdu || `اس موضوع کا بنیادی مقصد یہ ہے کہ آپ "${cleanTitleUrdu}" کے عملی اصولوں کو بغیر کسی مشکل اصطلاح کے سمجھیں اور اسے اپنی روزمرہ زندگی، گھریلو فلاح اور روزگار میں نافذ کر سکیں۔`,
      summaryEn: matchedCourse?.descriptionEn || matchedLibraryItem?.shortExplanationEn || `The purpose of this guide is to explain the core practical concepts of "${cleanTitleEn}" in simple, accessible language for daily implementation and progress.`,
      corePointsUrdu: matchedCourse?.lessons?.slice(0, 3).map((l, i) => `${i + 1}. ${l.titleUrdu}: ${l.keyTakeawaysUrdu?.[0] || 'بنیادی نکتہ'}`) || matchedLibraryItem?.keyTakeawaysUrdu?.slice(0, 3) || [
        `پہلا نکتہ: اس مہارت کی بنیادی معلومات حاصل کریں اور اسے مرحلہ وار سیکھیں۔`,
        `دوسرا نکتہ: بغیر جلد بازی کے روزانہ ۱۰ سے ۱۵ منٹ مسلسل مشق کریں۔`,
        `تیسرا نکتہ: اپنے سیکھے ہوئے علم سے اپنے خاندان اور اردگرد کے لوگوں کو فائدہ پہنچائیں۔`,
      ],
      corePointsEn: matchedCourse?.lessons?.slice(0, 3).map((l, i) => `${i + 1}. ${l.titleEn}: ${l.keyTakeawaysEn?.[0] || 'Core takeaway'}`) || matchedLibraryItem?.keyTakeawaysEn?.slice(0, 3) || [
        `Key 1: Grasp the core fundamentals and advance step-by-step.`,
        `Key 2: Practice consistently for 10–15 minutes every single day.`,
        `Key 3: Use your acquired competence to benefit your household and peers.`,
      ],
      simplifiedNoteUrdu: `اہم نکتہ: مسلسل تھوڑا سیکھنا، ایک دن میں سب کچھ کرنے کی کوشش سے زیادہ فائدہ مند ہے۔`,
      simplifiedNoteEn: `Key Principle: Small daily consistent practice outperforms sporadic irregular bursts.`,
    },
    step2Understand: {
      titleUrdu: '۲. سمجھیے — روزمرہ کا زمینی ماحول اور مثال',
      titleEn: '2. Understand — Ground-Reality Local Scenario',
      scenarioTitleUrdu: `مثال: ${userVillage} میں اس کا عملی اطلاق`,
      scenarioTitleEn: `Scenario: Practical Application in ${userVillage}`,
      realWorldExampleUrdu: matchedLibraryItem?.practicalExampleUrdu || `تصور کریں کہ آپ ${userVillage} میں اپنے دوستوں کے ساتھ بیٹھے ہیں۔ جب آپ اس موضوع ("${cleanTitleUrdu}") کو مرحلہ وار نافذ کرتے ہیں تو آپ کا وقت بھی بچتا ہے اور غیر ضروری پریشانیوں سے بھی نجات ملتی ہے۔`,
      realWorldExampleEn: matchedLibraryItem?.practicalExampleEn || `Imagine applying "${cleanTitleEn}" within your local community in ${userVillage}. By organizing tasks clearly, you save time, reduce stress, and achieve tangible results.`,
      localContextUrdu: `دیہی و شہری مطابقت: وسائل کا صحیح استعمال، وقت کی بچت اور مستند رہنمائی۔`,
      localContextEn: `Local Relevance: Smart resource utilization, time management, and verified guidance.`,
    },
    step3Think: {
      titleUrdu: '۳. سوچیے — گہری سوچ اور خود احتسابی',
      titleEn: '3. Think — Critical Self-Inquiry',
      reflectionQuestionUrdu: `اگر آپ "${cleanTitleUrdu}" کے اصولوں پر پوری دیانتداری سے عمل کریں تو اگلے ایک ماہ میں آپ کی زندگی میں کیا مثبت تبدیلی آ سکتی ہے؟`,
      reflectionQuestionEn: `If you consistently implement the principles of "${cleanTitleEn}", what positive shift will you experience in the next 30 days?`,
      promptUrdu: 'سوچیے کہ اس سے آپ کے اخلاق، آمدن یا خاندانی تعلقات میں کیا بہتری ممکن ہے؟',
      promptEn: 'Reflect on how this will enhance your character, livelihood, or family relationships.',
      suggestedAnglesUrdu: [
        'اپنی روزمرہ عادات کو وقت کا پابند بنانا',
        'غلط فہمیوں اور لاپرواہی سے بچنا',
        'مفید ہنر کو روزگار کا ذریعہ بنانا',
      ],
      suggestedAnglesEn: [
        'Bringing discipline into your daily routine',
        'Avoiding common misconceptions and neglect',
        'Transforming practical skills into reliable income',
      ],
    },
    step4Practice: {
      titleUrdu: '۴. مشق — فوری انٹرایکٹو چیلنج',
      titleEn: '4. Practice — Quick Interactive Challenge',
      challengeUrdu: `اس موضوع ("${cleanTitleUrdu}") میں کامیابی حاصل کرنے کے لیے سب سے بہترین رویہ کیا ہے؟`,
      challengeEn: `What is the most effective approach to mastering "${cleanTitleEn}"?`,
      interactiveQuestionUrdu: 'درست طریقہ منتخب کیجیے:',
      interactiveQuestionEn: 'Select the correct approach:',
      options: [
        {
          id: 'opt1',
          textUrdu: 'صرف سن لینا مگر عملی زندگی میں کوئی قدم نہ اٹھانا',
          textEn: 'Just listen passively without taking any tangible real-world action',
          isCorrect: false,
          explanationUrdu: 'صرف جاننا کافی نہیں، جب تک علم پر عمل نہ کیا جائے وہ فائدہ نہیں دیتا۔',
          explanationEn: 'Knowledge without practical implementation brings no real benefit.',
        },
        {
          id: 'opt2',
          textUrdu: 'سمجھ کر نیت کرنا، روزانہ چھوٹا قدم اٹھانا اور دیانتداری سے مشق کرنا',
          textEn: 'Understand with pure intention, take daily small steps, and practice with integrity',
          isCorrect: true,
          explanationUrdu: 'ماشاءاللہ! یہی سیکھو کا اصل فلسفہ ہے: علم + فہم + عمل۔',
          explanationEn: 'Masha’Allah! This is the essence of Seekho: Learn + Understand + Practice.',
        },
        {
          id: 'opt3',
          textUrdu: 'پہلے دن ہی مشکل ترین کام شروع کر کے تھک جانا',
          textEn: 'Overcomplicate everything on day one and burn out quickly',
          isCorrect: false,
          explanationUrdu: 'آسان سے شروع کر کے رفتہ رفتہ آگے بڑھنا ہی پائیداری کی علامت ہے۔',
          explanationEn: 'Starting small and pacing yourself ensures sustainable mastery.',
        },
      ],
    },
    step5Action: {
      titleUrdu: '۵. عملی اقدام — آج آپ کو کیا کرنا ہے؟',
      titleEn: '5. Practical Action — What to do TODAY',
      todayActionUrdu: matchedLibraryItem?.oneSmallActionUrdu || `آج ہی اس موضوع سے متعلق ایک چھوٹا سا عملی کام کریں (مثال: بنیادی نکات کاپی پر لکھیں یا کسی بزرگ / استاد سے اس پر گفتگو کریں)۔`,
      todayActionEn: matchedLibraryItem?.oneSmallActionEn || `Take one immediate tangible step today regarding this topic (e.g., write down key takeaways or consult a mentor).`,
      actionChecklistUrdu: matchedLibraryItem?.practicalActionStepsUrdu?.slice(0, 3) || [
        `آج کے اہم نکات کو اپنے فون یا ڈائری میں محفوظ کریں۔`,
        `اس پر عمل کرنے کا ۵ منٹ کا وقت مقرر کریں۔`,
        `اپنے کسی دوست یا گھر والے کو یہ بات آسان الفاظ میں بتائیں۔`,
      ],
      actionChecklistEn: matchedLibraryItem?.practicalActionStepsEn?.slice(0, 3) || [
        `Save the core points in your notebook or phone notes.`,
        `Dedicate 5 minutes today to complete this micro-action.`,
        `Explain this concept simply to a family member or friend.`,
      ],
      estimatedMinutes: 5,
    },
    step6Reflection: {
      titleUrdu: '۶. انعکاس — اپنا تاثر محفوظ کریں',
      titleEn: '6. Reflection — Save your insight',
      promptUrdu: 'اس سبق سے آپ نے سب سے اہم کیا بات سیکھی؟ نیچے ایک جملہ درج کریں:',
      promptEn: 'What was your most important takeaway from this guide? Record a brief reflection:',
      sampleTakeawaysUrdu: [
        `مجھے سمجھ آیا کہ کسی بھی کام کو چھوٹے اور آسان حصوں میں بانٹ کر حل کیا جا سکتا ہے۔`,
        `میں آج ہی سے اس پر عمل شروع کروں گا۔`,
        `یہ رہنمائی میرے روزمرہ کام میں بہت فائدہ مند ثابت ہوگی۔`,
      ],
      sampleTakeawaysEn: [
        `I realized that breaking large goals into small steps guarantees progress.`,
        `I will implement this practical guidance starting today.`,
        `This will bring tangible order to my daily work.`,
      ],
    },
    step7Impact: {
      titleUrdu: '۷. پیش رفت اور اثرات — ۳ جہتی فائدہ',
      titleEn: '7. Impact & Growth — 3-Dimensional Growth',
      selfImpactUrdu: 'ذات (Self): نئی صلاحیت، ذہنی اطمینان اور ذاتی نظم و ضبط۔',
      selfImpactEn: 'Self: New competence, peace of mind, and personal discipline.',
      familyImpactUrdu: 'خاندان (Family): گھر کے ماحول میں بہتری اور خاندانی معاونت۔',
      familyImpactEn: 'Family: Uplifting the household atmosphere and supporting loved ones.',
      societyImpactUrdu: `معاشرہ (Society): ${userVillage} کی ترقی میں مثبت کردار اور باوقار خدمت۔`,
      societyImpactEn: `Society: Active contribution to the betterment of ${userVillage}.`,
    },
  };
}
