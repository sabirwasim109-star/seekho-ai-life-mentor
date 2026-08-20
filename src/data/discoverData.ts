import { DiscoverCategory, DiscoverItem, DiscoverAreaMetadata } from '../types';

export const DISCOVER_AREAS_METADATA: DiscoverAreaMetadata[] = [
  {
    id: 'new_skills',
    number: 1,
    nameUrdu: 'نئی Skills',
    nameEn: 'New Skills',
    icon: 'Sparkles',
    colorClass: 'from-amber-500 to-amber-600',
    descriptionUrdu: 'موبائل، کینوا، جدید ٹولز اور روزگار کے عملی ہنر',
    descriptionEn: 'Mobile tools, Canva, AI aids, and practical work capabilities'
  },
  {
    id: 'career_work',
    number: 2,
    nameUrdu: 'Career & Work',
    nameEn: 'Career & Work',
    icon: 'Briefcase',
    colorClass: 'from-blue-600 to-indigo-700',
    descriptionUrdu: 'ملازمت، انٹرویو کی تیاری، پروفیشنل رویہ اور دفتری مہارتیں',
    descriptionEn: 'Jobs, interview prep, workplace etiquette, and office skills'
  },
  {
    id: 'business_ideas',
    number: 3,
    nameUrdu: 'Business Ideas',
    nameEn: 'Business Ideas',
    icon: 'TrendingUp',
    colorClass: 'from-emerald-600 to-teal-700',
    descriptionUrdu: 'کم سرمائے کے حلال کاروباری ماڈل اور مقامی مارکیٹ مواقع',
    descriptionEn: 'Low-capital halal business models and local market opportunities'
  },
  {
    id: 'freelancing_digital',
    number: 4,
    nameUrdu: 'Freelancing & Digital Work',
    nameEn: 'Freelancing & Digital Work',
    icon: 'Laptop',
    colorClass: 'from-cyan-600 to-blue-600',
    descriptionUrdu: 'گھر بیٹھے حلال خدمات، کلائنٹ رابطہ اور ڈیجیٹل اسکلز',
    descriptionEn: 'Home-based halal digital services, client communication, and skills'
  },
  {
    id: 'books_knowledge',
    number: 5,
    nameUrdu: 'Books & Knowledge',
    nameEn: 'Books & Knowledge',
    icon: 'BookOpen',
    colorClass: 'from-violet-600 to-purple-700',
    descriptionUrdu: 'زندگی بدلنے والی کتب کے عملی خلاصے اور قیمتی دانش',
    descriptionEn: 'Practical book summaries, wisdom, and mental models'
  },
  {
    id: 'personal_development',
    number: 6,
    nameUrdu: 'Personal Development',
    nameEn: 'Personal Development',
    icon: 'UserCheck',
    colorClass: 'from-rose-600 to-pink-600',
    descriptionUrdu: 'وقت کا انتظام، گفتگو کا سلیقہ، غصے پر قابو اور عادات',
    descriptionEn: 'Time management, clear speech, emotional control, and habits'
  },
  {
    id: 'community_service',
    number: 7,
    nameUrdu: 'Community & Service',
    nameEn: 'Community & Service',
    icon: 'HeartHandshake',
    colorClass: 'from-orange-500 to-amber-600',
    descriptionUrdu: 'اپنے محلے کی بہتری، بزرگوں کی مدد اور خدمتِ خلق',
    descriptionEn: 'Neighborhood uplift, helping elders, and social service'
  },
  {
    id: 'quran_hadith_character',
    number: 8,
    nameUrdu: 'Quran, Hadith & Character',
    nameEn: 'Quran, Hadith & Character',
    icon: 'ShieldCheck',
    colorClass: 'from-teal-600 to-emerald-700',
    descriptionUrdu: 'کاروباری سچائی، وعدے کی پابندی، رزقِ حلال اور برکت',
    descriptionEn: 'Honesty in trade, keeping promises, halal earning, and barakah'
  },
  {
    id: 'practical_life_skills',
    number: 9,
    nameUrdu: 'Practical Life Skills',
    nameEn: 'Practical Life Skills',
    icon: 'Wrench',
    colorClass: 'from-slate-700 to-slate-900',
    descriptionUrdu: 'گھریلو بجٹ، بجلی بچت، دھوکے سے بچاؤ اور قانونی شعور',
    descriptionEn: 'Household budgeting, power savings, fraud safety, and legal basics'
  }
];

export const DISCOVER_ITEMS_DATA: DiscoverItem[] = [
  // ===========================================================================
  // 1. نئی SKILLS (NEW SKILLS)
  // ===========================================================================
  {
    id: 'disc-skill-canva-flyer',
    category: 'new_skills',
    titleUrdu: 'موبائل سے سوشل میڈیا پوسٹ اور اشتہار بنانا',
    titleEn: 'Designing Social Media Posts & Flyers on Smartphone',
    shortDescriptionUrdu: 'کینوا (Canva) ایپ کی مدد سے 10 منٹ میں دکان یا آن لائن کام کے لیے خوبصورت اردو/انگریزی پوسٹرز بنائیں۔',
    shortDescriptionEn: 'Create eye-catching Urdu and English posters for local shops or online services in 10 minutes using Canva.',
    whyUsefulUrdu: 'ہر چھوٹے کاروبار، اکیڈمی اور آن لائن پیج کو اشتہار کی ضرورت ہوتی ہے، یہ ہنر بغیر کمپیوٹر صرف فون سے سیکھا جا سکتا ہے۔',
    whyUsefulEn: 'Every local shop and page needs digital promotion; you can master this on your mobile without a computer.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'آسان (مبتدی)',
    difficultyEn: 'Easy (Beginner)',
    estimatedTimeUrdu: '15 منٹ',
    estimatedTimeEn: '15 mins',
    estimatedMinutes: 15,
    minAge: 12,
    maxAge: 65,
    targetInterests: ['design', 'canva', 'technology', 'business', 'freelancing'],
    targetGoals: ['learn_skills', 'earn_halal', 'digital_literacy'],
    badgeUrdu: 'موبائل ہنر',
    badgeEn: 'Mobile Skill',
    iconName: 'Sparkles',
    actionType: 'open_course',
    actionLabelUrdu: 'کینوا کورس شروع کریں',
    actionLabelEn: 'Start Canva Course',
    actionPayload: {
      courseId: 'canva-design'
    },
    actionStepsUrdu: [
      'گوگل پلے اسٹور سے Canva ایپ انسٹال کریں۔',
      '"Instagram Post" سائز کا سانچہ منتخب کریں۔',
      'اردو فونٹ (جیسے جمیل نوری نستعلیق یا سادہ خط) کا انتخاب کریں اور اپنی سروس لکھیں۔'
    ],
    actionStepsEn: [
      'Install the Canva app from Google Play Store.',
      'Select an "Instagram Post" template.',
      'Add clean typography, your business name, and clear contact info.'
    ],
    practicalTipsUrdu: [
      'پوسٹ میں بہت زیادہ رنگ استعمال نہ کریں، 2 یا 3 بنیادی رنگ کافی ہیں۔',
      'متن کو تصویر کے کنارے سے دور رکھیں تاکہ کٹنے کا خدشہ نہ ہو۔'
    ],
    practicalTipsEn: [
      'Limit yourself to 2 or 3 core brand colors.',
      'Keep text well inside the margins for clarity.'
    ]
  },
  {
    id: 'disc-skill-voice-typing-urdu',
    category: 'new_skills',
    titleUrdu: 'اردو وائس ٹائپنگ اور پی ڈی ایف مینجمنٹ',
    titleEn: 'Urdu Voice Typing & Mobile Document Management',
    shortDescriptionUrdu: 'بول کر تیزی سے مکمل مضامین، نوٹس اور خطوط ٹائپ کرنا اور موبائل سے پی ڈی ایف بنانا۔',
    shortDescriptionEn: 'Type articles, letters, and notes rapidly using Google Voice in Urdu, and compile them to PDF.',
    whyUsefulUrdu: 'کی بورڈ پر سست ٹائپنگ کی پریشانی ختم ہوتی ہے؛ اسکول اساتذہ، طلبہ اور کاروباری افراد کا گھنٹوں کا کام منٹوں میں ہوتا ہے۔',
    whyUsefulEn: 'Eliminates slow manual typing; saves hours for teachers, students, and shop owners.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'بہت آسان',
    difficultyEn: 'Very Easy',
    estimatedTimeUrdu: '10 منٹ',
    estimatedTimeEn: '10 mins',
    estimatedMinutes: 10,
    minAge: 14,
    maxAge: 75,
    targetInterests: ['technology', 'writing', 'education', 'productivity'],
    targetGoals: ['digital_literacy', 'learn_skills'],
    badgeUrdu: 'روزمرہ آسانی',
    badgeEn: 'Daily Productivity',
    iconName: 'Sparkles',
    actionType: 'open_course',
    actionLabelUrdu: 'موبائل اسکلز سیکھیں',
    actionLabelEn: 'Learn Mobile Skills',
    actionPayload: {
      courseId: 'mobile-literacy'
    }
  },
  {
    id: 'disc-skill-ai-prompting-urdu',
    category: 'new_skills',
    titleUrdu: 'AI (مصنوعی ذہانت) سے روزمرہ مسائل حل کروانا',
    titleEn: 'Using AI to Solve Daily Learning & Business Queries',
    shortDescriptionUrdu: 'AI کو درست ہدایات (Prompts) دے کر حساب، خط نویسی، مشورے اور سبق کی وضاحت حاصل کرنے کا طریقہ۔',
    shortDescriptionEn: 'Learn how to give effective Urdu prompts to AI models to draft letters, solve math, and plan projects.',
    whyUsefulUrdu: 'AI کو صحیح سوال پوچھنے کا فن آ جائے تو آپ کا وقت 5 گنا بچتا ہے اور سیکھنے کی رفتار تیز ہوتی ہے۔',
    whyUsefulEn: 'Mastering prompt formulation accelerates your learning and saves hours on drafting and problem solving.',
    difficultyLevel: 'medium',
    difficultyUrdu: 'درمیانہ',
    difficultyEn: 'Medium',
    estimatedTimeUrdu: '20 منٹ',
    estimatedTimeEn: '20 mins',
    estimatedMinutes: 20,
    minAge: 13,
    maxAge: 70,
    targetInterests: ['ai', 'technology', 'freelancing', 'education'],
    targetGoals: ['learn_skills', 'earn_halal'],
    badgeUrdu: 'جدید ٹیکنالوجی',
    badgeEn: 'Modern Tech',
    iconName: 'Bot',
    actionType: 'open_course',
    actionLabelUrdu: 'AI فاؤنڈیشنز کورس دیکھیں',
    actionLabelEn: 'Explore AI Course',
    actionPayload: {
      courseId: 'ai-foundations'
    }
  },

  // ===========================================================================
  // 2. CAREER & WORK
  // ===========================================================================
  {
    id: 'disc-career-simple-resume',
    category: 'career_work',
    titleUrdu: 'موبائل سے 1 صفحے کی شاندار CV / بائیو ڈیٹا بنانا',
    titleEn: 'Creating a Clean 1-Page Resume on Your Mobile',
    shortDescriptionUrdu: 'بغیر کمپوزنگ سینٹر کے خرچے کے، اپنے فون پر صاف ستھری اور پروفیشنل CV تیار کریں۔',
    shortDescriptionEn: 'Build a polished, employer-friendly single-page CV directly on your phone without paying drafting fees.',
    whyUsefulUrdu: 'کسی بھی ملازمت یا کام کے لیے پہلی تاثر آپ کی CV ہوتی ہے؛ واضح اور غلطیوں سے پاک CV انتخاب کے امکانات بڑھاتی ہے۔',
    whyUsefulEn: 'A clear, error-free resume is your first impression for any local or remote job opportunity.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'آسان',
    difficultyEn: 'Easy',
    estimatedTimeUrdu: '25 منٹ',
    estimatedTimeEn: '25 mins',
    estimatedMinutes: 25,
    minAge: 16,
    maxAge: 50,
    targetEducation: ['matric', 'intermediate', 'bachelor', 'master'],
    targetGoals: ['earn_halal', 'career_growth'],
    badgeUrdu: 'روزگار تیاری',
    badgeEn: 'Job Prep',
    iconName: 'Briefcase',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'استاد سے CV کا خاکہ لیں',
    actionLabelEn: 'Get Resume Template from Mentor',
    actionPayload: {
      prompt: 'مجھے نوکری کے لیے ایک سادہ اور معیاری 1 صفحے کی CV بنانے کا طریقہ اور خاکہ بتائیں جو میں موبائل پر بنا سکوں۔'
    }
  },
  {
    id: 'disc-career-interview-confidence',
    category: 'career_work',
    titleUrdu: 'ملازمت کے انٹرویو میں پراعتماد گفتگو کے 5 اصول',
    titleEn: '5 Proven Rules for Interview Confidence and Etiquette',
    shortDescriptionUrdu: 'انٹرویو کے بنیادی سوالات کے سچے اور مدلل جوابات دینے اور گھبراہٹ پر قابو پانے کا عملی طریقہ۔',
    shortDescriptionEn: 'Practical methods to overcome nervousness and articulate truthful, confident answers during job interviews.',
    whyUsefulUrdu: 'اکثر لوگ قابلیت رکھنے کے باوجود انٹرویو کی جھجک کی وجہ سے موقع گنوا دیتے ہیں؛ یہ رہنمائی اعتماد بحال کرتی ہے۔',
    whyUsefulEn: 'Many capable candidates miss opportunities due to nervousness; this builds calm self-assurance.',
    difficultyLevel: 'medium',
    difficultyUrdu: 'درمیانہ',
    difficultyEn: 'Medium',
    estimatedTimeUrdu: '15 منٹ',
    estimatedTimeEn: '15 mins',
    estimatedMinutes: 15,
    minAge: 18,
    maxAge: 45,
    targetGoals: ['earn_halal', 'career_growth'],
    badgeUrdu: 'پروفیشنل اخلاق',
    badgeEn: 'Professional Etiquette',
    iconName: 'Briefcase',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'انٹرویو گائیڈ دیکھیں',
    actionLabelEn: 'View Interview Guide',
    actionPayload: {
      prompt: 'ملازمت کے انٹرویو میں "اپنا تعارف کروائیں" اور "ہم آپ کو کیوں منتخب کریں" کا باوقار اور سچا جواب کیسے دیا جائے؟'
    }
  },

  // ===========================================================================
  // 3. BUSINESS IDEAS (حلال کاروباری آئیڈیاز)
  // ===========================================================================
  {
    id: 'disc-biz-organic-honey-spices',
    category: 'business_ideas',
    titleUrdu: 'گھریلو مصالحہ جات یا خالص شہد کی مائیکرو پیکنگ اور سپلائی',
    titleEn: 'Micro-Packaging & Local Supply of Spices or Pure Honey',
    shortDescriptionUrdu: '10 سے 20 ہزار روپے سے شروع ہونے والا کاروبار: معیار کی ضمانت اور قریبی محلے میں ہوم ڈیلیوری۔',
    shortDescriptionEn: 'Low-capital model (Rs. 10k-20k): Quality sourcing, hygienic packaging, and doorstep delivery.',
    whyUsefulUrdu: 'خالص خوراک کی طلب ہر گھر میں ہے؛ اگر آپ سچائی اور صفائی کو اصول بنائیں تو گاہک ہمیشہ آپ سے جڑے رہتے ہیں۔',
    whyUsefulEn: 'Pure food has high consistent demand; honesty and cleanliness build long-term repeat customers.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'آسان و کم سرمایہ',
    difficultyEn: 'Easy & Low Capital',
    estimatedTimeUrdu: '30 منٹ مطالعہ',
    estimatedTimeEn: '30 mins study',
    estimatedMinutes: 30,
    minAge: 18,
    maxAge: 65,
    targetInterests: ['business', 'agriculture', 'sales'],
    targetGoals: ['earn_halal', 'business'],
    badgeUrdu: 'حلال مائیکرو بزنس',
    badgeEn: 'Halal Micro-Business',
    halalNoteUrdu: 'خالص مال دینا اور وزن میں پورا تولنا رزق میں برکت کا ضامن ہے۔',
    halalNoteEn: 'Strict honesty in weight and pure quality guarantees barakah.',
    iconName: 'TrendingUp',
    actionType: 'open_course',
    actionLabelUrdu: 'کاروباری بنیادی اصول دیکھیں',
    actionLabelEn: 'View Business Fundamentals',
    actionPayload: {
      courseId: 'small-business'
    }
  },
  {
    id: 'disc-biz-mobile-service-kiosk',
    category: 'business_ideas',
    titleUrdu: 'ڈیجیٹل خدمت پوائنٹ (نادرا فارم، پرنٹنگ اور بلنگ معاونت)',
    titleEn: 'Local Digital Citizen Help Kiosk (Forms, Billing, Printing)',
    shortDescriptionUrdu: 'محلے میں بزرگوں اور غیر تعلیم یافتہ افراد کے لیے بجلی بل، بے نظیر پروگرام اور نادرا آن لائن اپلائی میں معاونت۔',
    shortDescriptionEn: 'Assist neighborhood elders with online utility billing, government forms, and printing with modest fair service fee.',
    whyUsefulUrdu: 'دیہات اور چھوٹے قصبوں میں آن لائن فارم بھرنے کی شدید ضرورت ہے؛ یہ بیک وقت خدمت اور باعزت روزگار ہے۔',
    whyUsefulEn: 'Strong demand in towns for online form assistance; combines community service with dignified income.',
    difficultyLevel: 'medium',
    difficultyUrdu: 'درمیانہ',
    difficultyEn: 'Medium',
    estimatedTimeUrdu: '20 منٹ',
    estimatedTimeEn: '20 mins',
    estimatedMinutes: 20,
    minAge: 18,
    maxAge: 55,
    targetInterests: ['technology', 'business', 'community'],
    targetGoals: ['earn_halal', 'community'],
    badgeUrdu: 'خدمت + روزگار',
    badgeEn: 'Service + Livelihood',
    iconName: 'TrendingUp',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'کاروباری منصوبہ سمجھیں',
    actionLabelEn: 'Understand Business Plan',
    actionPayload: {
      prompt: 'اپنے قصبے یا گاؤں میں ڈیجیٹل سروس پوائنٹ شروع کرنے کے لیے کون سے بنیادی اوزار اور حلال اصول درکار ہیں؟'
    }
  },

  // ===========================================================================
  // 4. FREELANCING & DIGITAL WORK (فری لانسنگ اور ڈیجیٹل کام)
  // ===========================================================================
  {
    id: 'disc-free-urdu-transcription',
    category: 'freelancing_digital',
    titleUrdu: 'اردو آڈیو سن کر لکھنا (Transcription) اور ٹائپنگ سروسز',
    titleEn: 'Urdu Audio Transcription & Typing Services',
    shortDescriptionUrdu: 'یوٹیوب بیانات، انٹرویوز اور پوڈکاسٹس کی آڈیو سن کر ٹیکسٹ فائل تیار کرنا۔ کوئی مہنگا لیپ ٹاپ ضروری نہیں۔',
    shortDescriptionEn: 'Convert Urdu podcasts, lectures, and interviews into accurate text files directly on mobile or basic PC.',
    whyUsefulUrdu: 'یہ کام بغیر کسی ایڈوانس کوڈنگ یا پیچیدہ انگلش کے شروع کیا جا سکتا ہے؛ توجہ اور سچائی درکار ہے۔',
    whyUsefulEn: 'Can be started without advanced coding or complex English; requires attentive listening and honesty.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'مبتدی کے لیے موزوں',
    difficultyEn: 'Beginner Friendly',
    estimatedTimeUrdu: '15 منٹ',
    estimatedTimeEn: '15 mins',
    estimatedMinutes: 15,
    minAge: 16,
    maxAge: 60,
    targetInterests: ['freelancing', 'writing', 'technology'],
    targetGoals: ['earn_halal', 'digital_literacy'],
    badgeUrdu: 'حقیقی ڈیجیٹل کام',
    badgeEn: 'Real Digital Task',
    iconName: 'Laptop',
    actionType: 'open_course',
    actionLabelUrdu: 'فری لانسنگ کورس دیکھیں',
    actionLabelEn: 'View Freelancing Basics',
    actionPayload: {
      courseId: 'freelancing-basics'
    }
  },
  {
    id: 'disc-free-honest-communication',
    category: 'freelancing_digital',
    titleUrdu: 'کلائنٹ سے حلال اور شفاف بات چیت کا سلیقہ',
    titleEn: 'Honest Client Communication & Realistic Project Delivery',
    shortDescriptionUrdu: 'جھوٹے وعدے کے بغیر کام کی ڈیڈ لائن طے کرنا اور خلوص کے ساتھ گاہک کا اعتماد جیتنا۔',
    shortDescriptionEn: 'Setting realistic deadlines without false promises and winning client trust through transparent communication.',
    whyUsefulUrdu: 'فری لانسنگ میں طویل مدتی کامیابی کا راز صرف ہنر نہیں بلکہ سچا اور بروقت رویہ ہے۔',
    whyUsefulEn: 'Long-term freelancing success depends more on dependable integrity and punctual delivery than just raw skill.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'آسان اصول',
    difficultyEn: 'Easy Principles',
    estimatedTimeUrdu: '12 منٹ',
    estimatedTimeEn: '12 mins',
    estimatedMinutes: 12,
    minAge: 16,
    maxAge: 55,
    targetInterests: ['freelancing', 'business', 'communication'],
    targetGoals: ['earn_halal'],
    badgeUrdu: 'کلائنٹ اعتماد',
    badgeEn: 'Client Trust',
    iconName: 'Laptop',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'رہنمائی حاصل کریں',
    actionLabelEn: 'Get Communication Tips',
    actionPayload: {
      prompt: 'آن لائن کلائنٹ کو وقت پر کام دینے اور پروجیکٹ میں ایمانداری قائم رکھنے کے عملی اسلامی اصول کیا ہیں؟'
    }
  },

  // ===========================================================================
  // 5. BOOKS & KNOWLEDGE (کتب اور علم)
  // ===========================================================================
  {
    id: 'disc-book-atomic-habits',
    category: 'books_knowledge',
    titleUrdu: 'کتاب کا خلاصہ: "چھوٹی عادات کی بڑی طاقت" (Atomic Habits)',
    titleEn: 'Book Summary: The Power of Small Habits (Atomic Habits)',
    shortDescriptionUrdu: 'روزانہ صرف 1 فیصد بہتری کیسے سال بھر میں 37 گنا بڑی کامیابی اور کردار میں نکھار بنتی ہے۔',
    shortDescriptionEn: 'How just 1% daily improvement compounds into 37x greater growth and self-mastery over one year.',
    whyUsefulUrdu: 'بڑے اہداف اکثر خوفزدہ کر دیتے ہیں؛ یہ طریقہ سکھاتا ہے کہ چھوٹے آسان قدم روزانہ کیسے اٹھائے جائیں۔',
    whyUsefulEn: 'Big goals can overwhelm; this framework teaches how tiny daily actions create unstoppable momentum.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'آسان فہم خلاصہ',
    difficultyEn: 'Easy Summary',
    estimatedTimeUrdu: '10 منٹ مطالعہ',
    estimatedTimeEn: '10 mins read',
    estimatedMinutes: 10,
    minAge: 12,
    maxAge: 80,
    targetInterests: ['personal_development', 'reading', 'productivity'],
    targetGoals: ['learn_skills', 'personal_growth'],
    badgeUrdu: 'عالمی شہرت یافتہ کتاب',
    badgeEn: 'Best-Selling Wisdom',
    iconName: 'BookOpen',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'کتاب کا خلاصہ پڑھیں',
    actionLabelEn: 'Read Book Summary',
    actionPayload: {
      prompt: 'مجھے جیمز کلیئر کی کتاب "Atomic Habits" کے ۵ سب سے اہم عملی اسباق اردو میں سمجھائیں جو میں آج سے لاگو کر سکوں۔'
    }
  },
  {
    id: 'disc-book-al-ghazali-youth',
    category: 'books_knowledge',
    titleUrdu: 'امام غزالیؒ کی نوجوانوں کے نام قیمتی نصیحتیں (ایھا الولد)',
    titleEn: 'Imam Al-Ghazali’s Timeless Advice to Youth (Ayyuhal Walad)',
    shortDescriptionUrdu: 'وہ علم جو عمل میں نہ ڈھلے بے فائدہ ہے؛ وقت کی قدر اور نیت کو خالص رکھنے کی سنہری ہدایات۔',
    shortDescriptionEn: 'Knowledge without practical action is futile; golden rules on valuing time and sincere intentions.',
    whyUsefulUrdu: 'طالب علموں اور نوجوانوں کو زندگی کا واضح مقصد اور وقت کی قدر کا احساس دلاتی ہے۔',
    whyUsefulEn: 'Provides students and youth with a profound sense of purpose, integrity, and time awareness.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'روحانی و عملی دانائی',
    difficultyEn: 'Spiritual Wisdom',
    estimatedTimeUrdu: '15 منٹ',
    estimatedTimeEn: '15 mins',
    estimatedMinutes: 15,
    minAge: 13,
    maxAge: 75,
    targetInterests: ['islamic', 'reading', 'personal_development'],
    targetGoals: ['personal_growth', 'spiritual_growth'],
    badgeUrdu: 'کلاسیکی حکمت',
    badgeEn: 'Classic Wisdom',
    iconName: 'BookOpen',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'نصیحتیں پڑھیں',
    actionLabelEn: 'Explore Advice',
    actionPayload: {
      prompt: 'امام غزالیؒ کی کتاب "اے فرزند (ایھا الولد)" کے اہم ترین اخلاقی و تعلیمی نکات آسان اردو میں بیان کریں۔'
    }
  },

  // ===========================================================================
  // 6. PERSONAL DEVELOPMENT (ذاتی ترقی و کردار)
  // ===========================================================================
  {
    id: 'disc-pd-anger-control-box',
    category: 'personal_development',
    titleUrdu: 'غصے کے وقت 60 سیکنڈ کا وقفہ اور وضو کی مشق',
    titleEn: 'The 60-Second Emotional Pause & Sunnah Method for Anger',
    shortDescriptionUrdu: 'غصے کی حالت میں جواب نہ دینے، پوزیشن بدلنے (کھڑے سے بیٹھنا) اور پانی پینے کی عملی حکمت۔',
    shortDescriptionEn: 'The psychological and Sunnah method of holding response for 60 seconds, sitting down, and cooling off.',
    whyUsefulUrdu: 'غصے میں کیے گئے فیصلے سالوں کے تعلقات اور معاشی مواقع برباد کر دیتے ہیں؛ یہ ہنر زندگی کا سکون بچاتا ہے۔',
    whyUsefulEn: 'Impulsive anger ruins relationships and business deals; this emotional mastery saves peace of mind.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'روزانہ مشق',
    difficultyEn: 'Daily Habit',
    estimatedTimeUrdu: '8 منٹ',
    estimatedTimeEn: '8 mins',
    estimatedMinutes: 8,
    minAge: 10,
    maxAge: 85,
    targetInterests: ['personal_development', 'islamic', 'health'],
    targetGoals: ['personal_growth'],
    badgeUrdu: 'ذہنی سکون',
    badgeEn: 'Mental Peace',
    iconName: 'UserCheck',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'مشق کا طریقہ دیکھیں',
    actionLabelEn: 'View Exercise Steps',
    actionPayload: {
      prompt: 'جب اچانک غصہ آئے یا کوئی تلخ بات کرے تو خود کو فوری پرسکون کرنے کا نبوی ﷺ اور نفسیاتی طریقہ کیا ہے؟'
    }
  },
  {
    id: 'disc-pd-clean-speech-no-gossip',
    category: 'personal_development',
    titleUrdu: 'گفتگو کا وقار: غیبت اور غیر ضروری بحث سے پرہیز',
    titleEn: 'Dignified Speech: Avoiding Backbiting and Futile Debates',
    shortDescriptionUrdu: 'محفلوں میں خاموشی کی طاقت، مثبت الفاظ کا چناؤ اور دوسروں کی غیر موجودگی میں ان کا دفاع کرنا۔',
    shortDescriptionEn: 'The power of constructive silence, choosing positive words, and protecting absent peoples dignity.',
    whyUsefulUrdu: 'جس انسان کی زبان پاک ہو لوگ اس پر اندھا اعتماد کرتے ہیں، کاروبار اور گھریلو زندگی میں عزت ملتی ہے۔',
    whyUsefulEn: 'People place immense trust in someone with disciplined speech, leading to respect in home and work.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'آسان مگر طاقتور',
    difficultyEn: 'Simple yet Potent',
    estimatedTimeUrdu: '10 منٹ',
    estimatedTimeEn: '10 mins',
    estimatedMinutes: 10,
    minAge: 12,
    maxAge: 80,
    targetInterests: ['personal_development', 'islamic', 'communication'],
    targetGoals: ['personal_growth', 'spiritual_growth'],
    badgeUrdu: 'اخلاقی نکھار',
    badgeEn: 'Character Refinement',
    iconName: 'UserCheck',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'استاد سے رہنمائی لیں',
    actionLabelEn: 'Consult Mentor',
    actionPayload: {
      prompt: 'غیر ضروری بحث اور غیبت سے اپنی زبان کو محفوظ رکھنے کے لیے روزانہ کی کیا احتیاطی تدابیر ہیں؟'
    }
  },

  // ===========================================================================
  // 7. COMMUNITY & SERVICE (خدمت خلق و معاشرہ)
  // ===========================================================================
  {
    id: 'disc-comm-elder-digital-aid',
    category: 'community_service',
    titleUrdu: 'محلے کے بزرگوں کے بل جمع کروانا اور فون سکھانا',
    titleEn: 'Helping Neighborhood Elders with Mobile Bills & Medicine Reminders',
    shortDescriptionUrdu: 'ہفتے میں صرف 30 منٹ کسی بزرگ کو فون پر میسج پڑھنا سکھائیں یا ان کا بجلی بل آن لائن ادا کریں۔',
    shortDescriptionEn: 'Dedicate 30 mins weekly to help an elder pay their utility bill online or set medicine alarms on their phone.',
    whyUsefulUrdu: 'بزرگوں کی سچی دعائیں زندگی میں آسانیاں اور برکتیں لاتی ہیں اور نسلوں کے درمیان محبت بڑھتی ہے۔',
    whyUsefulEn: 'Sincere prayers of elders bring immense barakah, building intergenerational warmth in the community.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'آسان خدمت',
    difficultyEn: 'Gentle Service',
    estimatedTimeUrdu: '20 منٹ',
    estimatedTimeEn: '20 mins',
    estimatedMinutes: 20,
    minAge: 12,
    maxAge: 50,
    targetInterests: ['community', 'islamic', 'technology'],
    targetGoals: ['community', 'good_deeds'],
    badgeUrdu: 'خدمتِ بزرگاں',
    badgeEn: 'Elder Care',
    iconName: 'HeartHandshake',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'خدمت کا طریقہ کار',
    actionLabelEn: 'Service Steps',
    actionPayload: {
      prompt: 'بزرگوں کو عزت و احترام کے ساتھ اسمارٹ فون اور آن لائن بلنگ میں مدد کرنے کے آداب کیا ہیں؟'
    }
  },
  {
    id: 'disc-comm-clean-water-green-tree',
    category: 'community_service',
    titleUrdu: 'گلی محلے کی صفائی اور پرندوں کے لیے پانی کا انتظام',
    titleEn: 'Neighborhood Cleanliness & Water Bowls for Birds/Animals',
    shortDescriptionUrdu: 'اپنے دروازے کے آگے صفائی، راستے سے کانٹا یا پتھر ہٹانا اور چھت پر پرندوں کے لیے مٹی کا پیالہ رکھنا۔',
    shortDescriptionEn: 'Keeping door fronts clean, removing harmful obstacles from streets, and placing water bowls for birds.',
    whyUsefulUrdu: 'راستے سے تکلیف دہ چیز ہٹانا ایمان کا حصہ ہے؛ یہ چھوٹے اقدامات معاشرے کو خوبصورت بناتے ہیں۔',
    whyUsefulEn: 'Removing harm from pathways is an act of faith; these small deeds elevate our collective environment.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'آسان صدقہ جاریہ',
    difficultyEn: 'Easy Charity',
    estimatedTimeUrdu: '5 منٹ',
    estimatedTimeEn: '5 mins',
    estimatedMinutes: 5,
    minAge: 8,
    maxAge: 85,
    targetInterests: ['community', 'islamic', 'environment'],
    targetGoals: ['community', 'good_deeds'],
    badgeUrdu: 'صدقہ جاریہ',
    badgeEn: 'Perpetual Good',
    iconName: 'HeartHandshake',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'عملی رہنمائی حاصل کریں',
    actionLabelEn: 'Get Practical Guide',
    actionPayload: {
      prompt: 'اپنے محلے میں بغیر کسی بڑے خرچے کے خدمت خلق اور صفائی کے چھوٹے چھوٹے کام کیسے کیے جا سکتے ہیں؟'
    }
  },

  // ===========================================================================
  // 8. QURAN, HADITH & CHARACTER (قرآن، حدیث اور اخلاقیات)
  // ===========================================================================
  {
    id: 'disc-quran-truth-in-trade',
    category: 'quran_hadith_character',
    titleUrdu: 'تجارت میں سچائی اور عیب نہ چھپانے کی نبوی برکت',
    titleEn: 'Prophetic Guidance on Truthfulness & Transparency in Trade',
    shortDescriptionUrdu: 'نبی کریم ﷺ کا فرمان: "سچا اور امانت دار تاجر قیامت کے دن انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔"',
    shortDescriptionEn: 'The Prophet ﷺ said: "The truthful and trustworthy trader will be with the Prophets, the truthful, and martyrs."',
    whyUsefulUrdu: 'اگر سامان میں کوئی نقص ہو تو خریدار کو پہلے بتا دیں؛ یہ اصول وقتی نقصان سے بچا کر دائمی برکت دیتا ہے۔',
    whyUsefulEn: 'Disclosing defects upfront builds unshakable customer loyalty and ensures divine blessing in livelihood.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'ایمان و برکت',
    difficultyEn: 'Faith & Barakah',
    estimatedTimeUrdu: '10 منٹ',
    estimatedTimeEn: '10 mins',
    estimatedMinutes: 10,
    minAge: 14,
    maxAge: 80,
    targetInterests: ['islamic', 'business', 'personal_development'],
    targetGoals: ['earn_halal', 'spiritual_growth'],
    badgeUrdu: 'مستند حدیث نبوی ﷺ',
    badgeEn: 'Authentic Hadith [Tirmidhi]',
    halalNoteUrdu: 'جامع ترمذی: 1209 (حدیث حسن)',
    halalNoteEn: 'Jami` at-Tirmidhi: 1209 (Hasan)',
    iconName: 'ShieldCheck',
    actionType: 'open_course',
    actionLabelUrdu: 'اسلامی کاروباری اخلاق دیکھیں',
    actionLabelEn: 'View Islamic Ethics Course',
    actionPayload: {
      courseId: 'islamic-work-ethics'
    }
  },
  {
    id: 'disc-quran-kindness-parents',
    category: 'quran_hadith_character',
    titleUrdu: 'والدین کے آگے نرم لہجہ: قرآن مجید کی ہدایت (وَاخْفِضْ لَهُمَا)',
    titleEn: 'Gentle Tone with Parents: The Quranic Injunction of Humility',
    shortDescriptionUrdu: 'قرآن کریم: "اور ان کے آگے شفقت سے عاجزی کے بازو جھکائے رکھو اور کہو: اے میرے رب! ان پر رحم فرما جیسے انہوں نے مجھے بچپن میں پالا۔"',
    shortDescriptionEn: 'Quran: "And lower to them the wing of humility out of mercy and say: My Lord, have mercy upon them as they brought me up when I was small."',
    whyUsefulUrdu: 'روزمرہ کی مصروفیت میں ماں باپ کی بات تحمل سے سننا اور مسکرا کر جواب دینا دنیا و آخرت کی کامیابی کی کنجی ہے۔',
    whyUsefulEn: 'Listening patiently to parents and replying with warmth is the foundational key to peace and eternal success.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'روزانہ کا عمل',
    difficultyEn: 'Daily Habit',
    estimatedTimeUrdu: '8 منٹ',
    estimatedTimeEn: '8 mins',
    estimatedMinutes: 8,
    minAge: 10,
    maxAge: 80,
    targetInterests: ['islamic', 'personal_development'],
    targetGoals: ['spiritual_growth', 'good_deeds'],
    badgeUrdu: 'قرآنی ہدایت',
    badgeEn: 'Quranic Guidance [17:24]',
    halalNoteUrdu: 'سورۃ الاسراء: آیت 24',
    halalNoteEn: 'Surah Al-Isra: Verse 24',
    iconName: 'ShieldCheck',
    actionType: 'ask_mentor',
    actionLabelUrdu: 'تفسیر و نصیحت پڑھیں',
    actionLabelEn: 'Read Explanation',
    actionPayload: {
      prompt: 'سورۃ الاسراء کی آیت 24 کی روشنی میں والدین کے ساتھ حسن سلوک اور ان کی خدمت کے عملی طریقے بتائیں۔'
    }
  },

  // ===========================================================================
  // 9. PRACTICAL LIFE SKILLS (عملی زندگی کے ہنر)
  // ===========================================================================
  {
    id: 'disc-life-budget-calculator',
    category: 'practical_life_skills',
    titleUrdu: 'گھریلو ماہانہ بجٹ اور بجلی کے بل کی پیشگی پیمائش',
    titleEn: 'Household Monthly Budgeting & Electric Meter Calculation',
    shortDescriptionUrdu: 'یونٹ ریٹ، پیک آورز اور غیر ضروری لوڈ کی نشاندہی کر کے ماہانہ بجلی کے بل میں 20 سے 30 فیصد کمی لانے کے عملی طریقے',
    shortDescriptionEn: 'Practical steps to calculate peak vs off-peak meter units and lower your electricity bill by 20-30%.',
    whyUsefulUrdu: 'مہنگائی کے دور میں بجلی اور راشن کے اخراجات کا حساب رکھنا ہر خاندان کے لیے فوری مالی راحت کا ذریعہ بنتا ہے۔',
    whyUsefulEn: 'In high inflation, calculating meter consumption and tracking grocery budgets provides immediate financial relief.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'عملی ریاضی',
    difficultyEn: 'Practical Math',
    estimatedTimeUrdu: '15 منٹ',
    estimatedTimeEn: '15 mins',
    estimatedMinutes: 15,
    minAge: 14,
    maxAge: 75,
    targetInterests: ['math', 'money', 'practical_skills', 'family'],
    targetGoals: ['learn_skills', 'family_help'],
    badgeUrdu: 'گھریلو بچت',
    badgeEn: 'Home Savings',
    iconName: 'Wrench',
    actionType: 'open_course',
    actionLabelUrdu: 'بجٹنگ کورس دیکھیں',
    actionLabelEn: 'View Budgeting Course',
    actionPayload: {
      courseId: 'practical-math-budgeting'
    }
  },
  {
    id: 'disc-life-scam-protection-otp',
    category: 'practical_life_skills',
    titleUrdu: 'بینک، ایزی پیسہ اور واٹس ایپ فراڈ سے خاندان کو بچانا',
    titleEn: 'Safeguarding Your Family from Bank, Easypaisa & WhatsApp Scams',
    shortDescriptionUrdu: 'کبھی کسی کو فون پر OTP کوڈ یا پن نمبر نہ دینے، جعلی قرعہ اندازی کالز اور ہیکنگ لنکس کو فوری پہچاننے کا طریقہ۔',
    shortDescriptionEn: 'How to instantly recognize fake prize calls, phishing links, and strictly protect OTP codes and PINs.',
    whyUsefulUrdu: 'روزانہ ہزاروں سیدھے سادھے لوگ اپنی محنت کی کمائی فراڈ میں گنوا دیتے ہیں؛ یہ آگاہی آپ کی اور آپ کے پیاروں کی دولت بچاتی ہے۔',
    whyUsefulEn: 'Thousands fall victim to online scams daily; this awareness protects your familys hard-earned money.',
    difficultyLevel: 'easy',
    difficultyUrdu: 'حفاظتی شعور',
    difficultyEn: 'Safety Awareness',
    estimatedTimeUrdu: '10 منٹ',
    estimatedTimeEn: '10 mins',
    estimatedMinutes: 10,
    minAge: 12,
    maxAge: 85,
    targetInterests: ['technology', 'safety', 'money', 'family'],
    targetGoals: ['digital_literacy', 'family_help'],
    badgeUrdu: 'مالی تحفظ',
    badgeEn: 'Financial Safety',
    iconName: 'Wrench',
    actionType: 'open_course',
    actionLabelUrdu: 'موبائل سیفٹی سیکھیں',
    actionLabelEn: 'Learn Mobile Safety',
    actionPayload: {
      courseId: 'mobile-literacy'
    }
  }
];
