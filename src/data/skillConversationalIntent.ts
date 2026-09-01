export interface ConversationalIntentResult {
  matched: boolean;
  intentKey: string;
  intentTitleUrdu: string;
  intentTitleEn: string;
  taglineUrdu: string;
  taglineEn: string;
  userContextUrdu: string;
  userContextEn: string;
  recommendedSkillSlugs: string[];
  recommendedSkillIds: string[];
  recommendedCategoryIds: string[];
  dailyTimeRecommendedUrdu: string;
  dailyTimeRecommendedEn: string;
  minimumDeviceUrdu: string;
  minimumDeviceEn: string;
  startingLevelUrdu: string;
  startingLevelEn: string;
  fourStepQuickPathUrdu: {
    stepNumber: number;
    title: string;
    description: string;
    action: string;
  }[];
  fourStepQuickPathEn: {
    stepNumber: number;
    title: string;
    description: string;
    action: string;
  }[];
  scamWarningUrdu?: string;
  scamWarningEn?: string;
  bestImmediateActionUrdu: string;
  bestImmediateActionEn: string;
}

export const CONVERSATIONAL_INTENTS: Record<string, {
  keywords: string[];
  intentTitleUrdu: string;
  intentTitleEn: string;
  taglineUrdu: string;
  taglineEn: string;
  userContextUrdu: string;
  userContextEn: string;
  recommendedSkillSlugs: string[];
  recommendedSkillIds: string[];
  recommendedCategoryIds: string[];
  dailyTimeRecommendedUrdu: string;
  dailyTimeRecommendedEn: string;
  minimumDeviceUrdu: string;
  minimumDeviceEn: string;
  startingLevelUrdu: string;
  startingLevelEn: string;
  fourStepQuickPathUrdu: {
    stepNumber: number;
    title: string;
    description: string;
    action: string;
  }[];
  fourStepQuickPathEn: {
    stepNumber: number;
    title: string;
    description: string;
    action: string;
  }[];
  scamWarningUrdu?: string;
  scamWarningEn?: string;
  bestImmediateActionUrdu: string;
  bestImmediateActionEn: string;
}> = {
  home_earning: {
    keywords: [
      'گھر بیٹھے', 'گھر سے کمائی', 'گھریلو کام', 'خواتین کے لیے ہنر', 'گھر میں رہ کر',
      'home earning', 'work from home', 'ghar bethay', 'women skills', 'earn from home'
    ],
    intentTitleUrdu: '🏠 گھر بیٹھے باوقار و حلال روزگار کا مکمل روڈ میپ',
    intentTitleEn: '🏠 Home-Based Halal Earning Complete Roadmap',
    taglineUrdu: 'بغیر باہر جائے اپنے گھر سے کمپیوٹر، موبائل یا عملی ہنر سے آمدنی کا مستند منصوبہ',
    taglineEn: 'Legitimate earning roadmap from home using mobile, PC, or practical skills',
    userContextUrdu: 'اگر آپ گھر سے باہر نہیں جا سکتے یا پردے اور سہولت کے ساتھ کام کرنا چاہتے ہیں، تو ڈیجیٹل ڈیزائن، کنٹینٹ، سلائی، ہوم بیکنگ اور آن لائن ٹیچنگ بہترین راستے ہیں۔',
    userContextEn: 'Ideal for home-based learners: Digital design, content writing, tailoring, home baking, and online teaching.',
    recommendedSkillSlugs: ['canva-graphic-design', 'capcut-video-editing', 'sewing-tailoring', 'social-commerce-cod', 'chatgpt-prompting', 'home-chef-baking'],
    recommendedSkillIds: ['skill-canva-design', 'skill-video-editing', 'skill-social-media', 'skill-ai-tools', 'univ-sewing-basics'],
    recommendedCategoryIds: ['cat-3-canva-graphic-design', 'cat-4-video-editing', 'cat-11-home-tailoring', 'cat-12-cooking-food-business', 'cat-6-social-media'],
    dailyTimeRecommendedUrdu: '۱ سے ۲ گھنٹے روزانہ',
    dailyTimeRecommendedEn: '1 to 2 Hours Daily',
    minimumDeviceUrdu: 'صرف سمارٹ فون یا سلائی مشین / کچن سامان',
    minimumDeviceEn: 'Smartphone or Sewing/Kitchen equipment',
    startingLevelUrdu: 'لیول ۰ یا لیول ۱ (انتہائی آسان)',
    startingLevelEn: 'Level 0 or Level 1 (Gentle start)',
    fourStepQuickPathUrdu: [
      { stepNumber: 1, title: 'ایک مخصوص ہنر کا انتخاب', description: 'کینوا، کیپ کٹ ویڈیو، سلائی یا ہوم فوڈ میں سے ایک کا انتخاب کریں۔', action: 'نیچے دی گئی فہرست میں سے پہلا ہنر کھولیں۔' },
      { stepNumber: 2, title: '۷ دن کی بنیادی پریکٹس', description: 'روزانہ ۱ گھنٹہ ۳ نمونے بنا کر اپنے پاس محفوظ کریں۔', action: 'اپنا پہلا نمونہ پوسٹر یا ڈیزائن بنائیں۔' },
      { stepNumber: 3, title: 'واٹس ایپ بزنس کیٹلاگ بنانا', description: 'اپنے کام کی تصاویر اور سادہ قیمت واٹس ایپ بزنس پر لگائیں۔', action: 'واٹس ایپ پر اپنی دکان یا سروس درج کریں۔' },
      { stepNumber: 4, title: 'پہلے ۵ کسٹمرز کو حلال سروس دینا', description: 'رشتہ داروں، پڑوسیوں یا فیس بک گروپس میں خدمت پیش کریں۔', action: 'اپنے پہلے کسٹمر کے لیے کام مکمل کریں۔' }
    ],
    fourStepQuickPathEn: [
      { stepNumber: 1, title: 'Select One Focused Skill', description: 'Choose between Canva, CapCut, Tailoring, or Food.', action: 'Open the first recommended skill.' },
      { stepNumber: 2, title: '7 Days Focused Practice', description: 'Practice 1 hour daily and create 3 portfolio samples.', action: 'Create your first test design.' },
      { stepNumber: 3, title: 'Set Up WhatsApp Business', description: 'List your samples and straightforward pricing.', action: 'Set up WhatsApp Business Catalog.' },
      { stepNumber: 4, title: 'Serve First 5 Customers', description: 'Offer your service to local contacts or online groups.', action: 'Deliver high quality work to your first client.' }
    ],
    scamWarningUrdu: '⚠️ خبردار: کوئی بھی ویب سائٹ یا شخص جو "ٹاسک مکمل کرنے، ویڈیو لائک کرنے یا رجسٹریشن کے لیے پہلے فیس مانگے"، وہ ۱۰۰٪ فراڈ ہے۔ سیکھو پر حقیقی ہنر سیکھیں، دھوکے سے بچیں۔',
    scamWarningEn: '⚠️ Alert: Any website asking for registration fees or promising money for clicking ads is 100% scam. Build real skills.',
    bestImmediateActionUrdu: 'Canva یا کیپ کٹ کا پہلا ۱۵ منٹ کا سبق شروع کریں',
    bestImmediateActionEn: 'Start 15-minute beginner lesson on Canva or CapCut'
  },

  mobile_only: {
    keywords: [
      'صرف موبائل', 'موبائل ہے', 'بغیر کمپیوٹر', 'کمپیوٹر نہیں ہے', 'لیپ ٹاپ نہیں',
      'mobile only', 'only phone', 'no computer', 'no laptop', 'mobile se kaam', 'smartphone only'
    ],
    intentTitleUrdu: '📱 صرف سمارٹ فون سے ہنر اور کام کا راستہ',
    intentTitleEn: '📱 Smartphone-Only Skill & Work Pathway',
    taglineUrdu: 'کمپیوٹر یا لیپ ٹاپ کے بغیر صرف موبائل ایپ اور انٹرنیٹ سے سیکھنے اور کمانے کا منصوبہ',
    taglineEn: 'Learn and work using mobile apps with zero computer dependency',
    userContextUrdu: 'پاکستان اور ترقی پذیر ممالک میں ۹۰٪ طلباء کے پاس صرف موبائل ہوتا ہے۔ کینوا، کیپ کٹ، AI پرامپٹنگ، واٹس ایپ بزنس اور وائس اوور مکمل طور پر موبائل سے ممکن ہیں۔',
    userContextEn: '90% learners start on mobile. Canva, CapCut, AI prompt engineering, and WhatsApp Business run flawlessly on mobile.',
    recommendedSkillSlugs: ['canva-graphic-design', 'capcut-video-editing', 'chatgpt-prompting', 'social-commerce-cod', 'urdu-inpage-typing'],
    recommendedSkillIds: ['skill-canva-design', 'skill-video-editing', 'skill-ai-tools', 'skill-social-media'],
    recommendedCategoryIds: ['cat-1-mobile-digital', 'cat-3-canva-graphic-design', 'cat-4-video-editing', 'cat-2-ai-chatgpt', 'cat-6-social-media'],
    dailyTimeRecommendedUrdu: '۴۵ منٹ سے ۱ گھنٹہ',
    dailyTimeRecommendedEn: '45 mins to 1 hour',
    minimumDeviceUrdu: 'کوئی بھی اینڈرائیڈ یا آئی فون',
    minimumDeviceEn: 'Any Android or iPhone',
    startingLevelUrdu: 'لیول ۰ (موبائل دوستانہ)',
    startingLevelEn: 'Level 0 (Mobile-First)',
    fourStepQuickPathUrdu: [
      { stepNumber: 1, title: 'موبائل ایپس انسٹال کرنا', description: 'Canva، CapCut اور ChatGPT کی آفیشل ایپس انسٹال کریں۔', action: 'موبائل ایپ سے آغاز کریں۔' },
      { stepNumber: 2, title: 'موبائل کی ورڈ اور اردو ٹائپنگ', description: 'آسان اردو کی بورڈ اور وائس ٹائپنگ استعمال کرنا سیکھیں۔', action: 'وائس ٹائپنگ کا تجربہ کریں۔' },
      { stepNumber: 3, title: 'سوشل میڈیا ریل یا پوسٹر بنانا', description: 'موبائل سے ۳۰ سیکنڈ کی معلوماتی ریل تیار کریں۔', action: 'اپنی پہلی ریل ایکسپورٹ کریں۔' },
      { stepNumber: 4, title: 'لوکل دکانوں کے لیے اشتہار بنانا', description: 'محلے کی دکان یا اسکول کا پوسٹر موبائل پر بنا کر پیش کریں۔', action: 'پہلا اشتہار شیئر کریں۔' }
    ],
    fourStepQuickPathEn: [
      { stepNumber: 1, title: 'Install Core Mobile Apps', description: 'Get official Canva, CapCut, and ChatGPT apps.', action: 'Download mobile tools.' },
      { stepNumber: 2, title: 'Master Urdu Voice Typing', description: 'Learn voice typing and clean mobile typography.', action: 'Try voice typing.' },
      { stepNumber: 3, title: 'Create 30-Sec Reel or Poster', description: 'Produce clean high-definition mobile graphics.', action: 'Export first test visual.' },
      { stepNumber: 4, title: 'Serve Local Businesses', description: 'Create promotional flyers for local shops on mobile.', action: 'Share your work.' }
    ],
    scamWarningUrdu: '⚠️ موبائل پر "کیپچا بھریں" یا "گیم کھیل کر ڈالر کمائیں" والی تمام ایپس فیک ہوتی ہیں۔ صرف حقیقی سروس (ڈیزائن، ویڈیو، ای کامرس) سے حلال کمائی ممکن ہے۔',
    scamWarningEn: '⚠️ Never fall for captcha typing or spin-the-wheel apps. Focus on real creative services.',
    bestImmediateActionUrdu: 'موبائل کے لیے کینوا کا پہلا سبق شروع کریں',
    bestImmediateActionEn: 'Open Canva mobile-friendly guide'
  },

  low_literacy: {
    keywords: [
      'ان پڑھ', 'کم تعلیم', 'پڑھا لکھا نہیں', 'کم پڑھا لکھا', 'تعلیم نہیں ہے', 'مڈل پاس', 'پرائمری',
      'uneducated', 'low education', 'anparh', 'kam parha likha', 'no degree', 'non technical'
    ],
    intentTitleUrdu: '🛠️ کم تعلیم یافتہ بھائیوں اور بہنوں کے لیے باوقار ہنر (Visual & Voice)',
    intentTitleEn: '🛠️ Practical Trades for Low-Literacy & High-Dignity Learners',
    taglineUrdu: 'بغیر ڈگری اور بغیر انگریزی کے ہاتھ کی کاریگری، زراعت، سولر، سلائی اور مرمت کے ہنر',
    taglineEn: 'Master practical handcrafts, solar installation, tailoring, and agriculture without English or degree hurdles',
    userContextUrdu: 'ہنر سیکھنے کے لیے انگریزی یا بڑی ڈگری کی ضرورت نہیں ہوتی۔ ہمارا نظام آڈیو آواز اور بصری خاکوں کے ساتھ آسان اردو میں رہنمائی کرتا ہے۔',
    userContextEn: 'Dignified trades need focus, not degrees. Guided with clear audio voiceovers and practical visual steps.',
    recommendedSkillSlugs: ['solar-panel-installation', 'sewing-tailoring', 'electrician-basics', 'tunnel-farming', 'motorcycle-mechanic', 'home-chef-baking'],
    recommendedSkillIds: ['skill-solar-inverter', 'skill-home-repairs', 'skill-organic-farming', 'univ-sewing-basics'],
    recommendedCategoryIds: ['cat-9-solar-inverters', 'cat-11-home-tailoring', 'cat-8-electrician-house-wiring', 'cat-15-modern-agriculture', 'cat-12-cooking-food-business'],
    dailyTimeRecommendedUrdu: '۱ سے ۲ گھنٹے عملی مشق',
    dailyTimeRecommendedEn: '1 to 2 Hours Practical',
    minimumDeviceUrdu: 'سادہ موبائل (آواز سننے کے لیے) + اوزار',
    minimumDeviceEn: 'Basic phone (for audio guide) + Hand tools',
    startingLevelUrdu: 'لیول ۰ (صرف آواز و بصری خاکے)',
    startingLevelEn: 'Level 0 (Audio & Visual First)',
    fourStepQuickPathUrdu: [
      { stepNumber: 1, title: 'آواز میں رہنمائی سننا', description: 'اسکرین پر "سنیں" کا بٹن دبا کر پورے ہنر کا طریقہ سنیں۔', action: 'آڈیو رہنمائی پلے کریں۔' },
      { stepNumber: 2, title: 'بنیادی اوزاروں کی پہچان', description: 'پلاس، ٹیسٹر، میٹر، قینچی اور سامان کی پہچان کریں۔', action: 'اوزار چیک کریں۔' },
      { stepNumber: 3, title: 'استاد یا کاریگر کے ساتھ مشق', description: 'قریبی ورکشاپ، دکان یا گھر میں عملی تجربہ کریں۔', action: 'پہلی سادہ مرمت یا سلائی کریں۔' },
      { stepNumber: 4, title: 'محلے میں خدمت اور روزگار', description: 'اپنے علاقے میں ایمانداری کے ساتھ سروس دینا شروع کریں۔', action: 'پہلا لوکل کام مکمل کریں۔' }
    ],
    fourStepQuickPathEn: [
      { stepNumber: 1, title: 'Listen to Voice Guidance', description: 'Press the audio play button for voice explanation.', action: 'Play audio guidance.' },
      { stepNumber: 2, title: 'Identify Core Hand Tools', description: 'Learn safety rules, tester, pliers, and meters.', action: 'Inspect tools.' },
      { stepNumber: 3, title: 'Hands-on Workshop Practice', description: 'Practice with a local mentor or at home workbench.', action: 'Complete hands-on task.' },
      { stepNumber: 4, title: 'Serve Local Neighborhood', description: 'Offer reliable, honest maintenance services.', action: 'Deliver first neighborhood job.' }
    ],
    scamWarningUrdu: '⚠️ خبردار: باہر ملک کے ویزے کے نام پر یا جعلی نوکری کے جھانسے میں کسی ایجنٹ کو پیسے مت دیں۔ پہلے ہاتھ کا ہنر پکا کریں۔',
    scamWarningEn: '⚠️ Warning: Never pay shady agents for fake overseas visa promises. Solidify your handcraft first.',
    bestImmediateActionUrdu: 'سولر یا الیکٹریشن کا آڈیو سبق سنیں',
    bestImmediateActionEn: 'Listen to Solar or Electrician voice guide'
  },

  two_hours_daily: {
    keywords: [
      '2 گھنٹے', 'دو گھنٹے', 'وقت کم ہے', 'روزانہ 2 گھنٹے', 'پارٹ ٹائم', 'فارغ وقت',
      '2 hours', 'two hours', 'part time', 'daily 2 hours', 'kam waqt', 'spare time'
    ],
    intentTitleUrdu: '⏱️ روزانہ ۲ گھنٹے کا منظم مائیکرو لرننگ شیڈول',
    intentTitleEn: '⏱️ Structured 2-Hours Daily Micro-Learning Path',
    taglineUrdu: 'جاب، پڑھائی یا دکان کے ساتھ روزانہ ۲ گھنٹے میں ۳ ماہ کے اندر نیا ہنر مکمل کرنے کا منصوبہ',
    taglineEn: 'Master high-income skills alongside your job in 90 days with 2 hours daily focus',
    userContextUrdu: 'روزانہ کا مسلسل ۲ گھنٹہ وقت جادوئی نتائج لاتا ہے: ۳۰ منٹ سیکھیں + ۴۵ منٹ پریکٹس + ۳۰ منٹ پروجیکٹ + ۱۵ منٹ خلاصہ۔',
    userContextEn: 'Daily 2-hour compound learning: 30m learn + 45m practice + 30m project + 15m review.',
    recommendedSkillSlugs: ['canva-graphic-design', 'chatgpt-prompting', 'capcut-video-editing', 'python-programming', 'seo-content-writing'],
    recommendedSkillIds: ['skill-canva-design', 'skill-ai-tools', 'skill-video-editing', 'skill-copywriting'],
    recommendedCategoryIds: ['cat-2-ai-chatgpt', 'cat-3-canva-graphic-design', 'cat-4-video-editing', 'cat-7-content-writing'],
    dailyTimeRecommendedUrdu: '۲ گھنٹے روزانہ (مستقل مزاجی)',
    dailyTimeRecommendedEn: '2 Hours Daily (Consistency)',
    minimumDeviceUrdu: 'موبائل یا لیپ ٹاپ',
    minimumDeviceEn: 'Mobile or Laptop',
    startingLevelUrdu: 'لیول ۱ (منظم منصوبہ)',
    startingLevelEn: 'Level 1 (Structured Plan)',
    fourStepQuickPathUrdu: [
      { stepNumber: 1, title: 'پہلے ۳۰ منٹ: ۱ بنیادی سبق', description: 'بغیر کسی ڈسٹریکشن کے صرف ایک سبق سنیں اور سمجھیں۔', action: 'آج کا سبق کھولیں۔' },
      { stepNumber: 2, title: 'اگلے ۴۵ منٹ: ہاتھ سے پریکٹس', description: 'سبق میں جو سیکھا اسے فوری طور پر خود بنا کر دیکھیں۔', action: 'عملی مشق شروع کریں۔' },
      { stepNumber: 3, title: 'اگلے ۳۰ منٹ: پروجیکٹ بلڈنگ', description: 'اپنے پورٹ فولیو پروجیکٹ کا ایک حصہ تیار کریں۔', action: 'پروجیکٹ فائل محفوظ کریں۔' },
      { stepNumber: 4, title: 'آخری ۱۵ منٹ: خود احتسابی و نوٹس', description: 'چیک کریں کہ کیا غلطی ہوئی اور کل کیا کرنا ہے۔', action: 'پیش رفت محفوظ کریں۔' }
    ],
    fourStepQuickPathEn: [
      { stepNumber: 1, title: 'First 30 Mins: 1 Core Concept', description: 'Focused learning without distractions.', action: 'Open daily lesson.' },
      { stepNumber: 2, title: 'Next 45 Mins: Active Practice', description: 'Implement what you learned immediately.', action: 'Start practical practice.' },
      { stepNumber: 3, title: 'Next 30 Mins: Project Building', description: 'Build a tangible component of your portfolio.', action: 'Save project asset.' },
      { stepNumber: 4, title: 'Final 15 Mins: Review & Reflection', description: 'Note takeaways and set tomorrow target.', action: 'Log daily progress.' }
    ],
    scamWarningUrdu: '⚠️ ہر روز ایک نیا کورس بدلنے کے بجائے ایک ہنر پر مسلسل ۳۰ دن قائم رہیں۔ فوکس کامیابی کی کنجی ہے۔',
    scamWarningEn: '⚠️ Avoid jumping between 10 different skills. Commit 30 days to one craft.',
    bestImmediateActionUrdu: 'آج کا ۲۰ منٹ کا چیلنج شروع کریں',
    bestImmediateActionEn: 'Start today 20-minute practical challenge'
  },

  learn_ai: {
    keywords: [
      'ai سیکھنی ہے', 'chatgpt', 'مصنوعی ذہانت', 'پرامپٹ', 'ai کیسے سیکھوں', 'ai ٹولز',
      'learn ai', 'artificial intelligence', 'chatgpt prompt', 'ai tools', 'ai skills', 'prompt engineering'
    ],
    intentTitleUrdu: '🤖 AI اور ChatGPT سے روزمرہ کاموں اور کیریئر کو ۵ گنا تیز بنانا',
    intentTitleEn: '🤖 Generative AI & ChatGPT Mastery for 5x Productivity',
    taglineUrdu: 'پرامپٹ انجینئرنگ، ریسرچ، تحریر، بزنس آٹومیشن اور تصاویر بنانا سیکھیں',
    taglineEn: 'Master prompt engineering, high-speed research, copywriting, and business automation',
    userContextUrdu: 'AI انسانوں کو بدل نہیں رہا بلکہ وہ انسان جو AI استعمال کرتے ہیں وہ دوسروں سے آگے نکل رہے ہیں۔ یہ ہنر ہر شعبے (طالب علم، بزنس، استاد، فری لانسر) میں کارآمد ہے۔',
    userContextEn: 'AI augments human capability across all professions. Learn structured prompts, ethics, and workflows.',
    recommendedSkillSlugs: ['chatgpt-prompting', 'ai-content-writing', 'ai-image-generation', 'ai-business-automation'],
    recommendedSkillIds: ['skill-ai-tools', 'skill-copywriting', 'skill-social-media'],
    recommendedCategoryIds: ['cat-2-ai-chatgpt', 'cat-7-content-writing', 'cat-1-mobile-digital'],
    dailyTimeRecommendedUrdu: '۳۰ منٹ سے ۱ گھنٹہ',
    dailyTimeRecommendedEn: '30 mins to 1 hour',
    minimumDeviceUrdu: 'موبائل یا کمپیوٹر',
    minimumDeviceEn: 'Mobile or PC',
    startingLevelUrdu: 'لیول ۱ تا ۲',
    startingLevelEn: 'Level 1 to 2',
    fourStepQuickPathUrdu: [
      { stepNumber: 1, title: 'پرامپٹ کا بنیادی فارمولا (Role + Goal + Context)', description: 'AI کو واضح کردار، مقصد، معلومات اور فارمیٹ کی ہدایت دینا۔', action: 'پرامپٹ فریم ورک سیکھیں۔' },
      { stepNumber: 2, title: 'AI سے تحریر اور ای میلز لکھوانا', description: 'پیشہ ورانہ درخواستیں، مضامین اور کاروباری پیغامات تیار کرنا۔', action: 'پہلا پرامپٹ رن کریں۔' },
      { stepNumber: 3, title: 'حقائق کی تصدیق (Fact Checking)', description: 'AI کے جوابات کو خود چیک کرنا اور غلط معلومات سے بچنا۔', action: 'تصدیق کا طریقہ سیکھیں۔' },
      { stepNumber: 4, title: 'اپنے کام یا کاروبار میں AI انضمام', description: 'روزمرہ دفتری یا فری لانسنگ کام میں وقت بچانا۔', action: 'بزنس ورک فلو آزمائیں۔' }
    ],
    fourStepQuickPathEn: [
      { stepNumber: 1, title: 'Master Prompt Formula (Role + Goal + Context)', description: 'Structure precise instructions for reliable outputs.', action: 'Learn prompting formula.' },
      { stepNumber: 2, title: 'High-Speed Writing & Proposals', description: 'Generate drafts, emails, and client pitches.', action: 'Run first structured prompt.' },
      { stepNumber: 3, title: 'Fact-Checking & Quality Review', description: 'Verify accuracy and prevent AI hallucination.', action: 'Review verification rules.' },
      { stepNumber: 4, title: 'Integrate into Daily Workflow', description: 'Accelerate your studies, job, or freelancing.', action: 'Apply to real task.' }
    ],
    scamWarningUrdu: '⚠️ یاد رکھیں: AI کو ہوبہو نقل کرنے کے بجائے سوچنے کا مددگار بنائیں۔ جعلی "AI سے راتوں رات امیر بنیں" کورسز سے بچیں۔',
    scamWarningEn: '⚠️ Use AI as an intellectual assistant, not a blind copy-paste machine. Avoid get-rich-quick AI hypes.',
    bestImmediateActionUrdu: 'AI پرامپٹ انجینئرنگ کا گائیڈ کھولیں',
    bestImmediateActionEn: 'Open AI Prompt Engineering guide'
  },

  small_business_pk: {
    keywords: [
      'چھوٹا کاروبار', 'کاروبار شروع', 'دکان', 'پاکستان میں بزنس', 'کم سرمائے سے کاروبار', 'تجارت',
      'small business', 'business in pakistan', 'chota karobar', 'dukaan', 'start business', 'low investment business'
    ],
    intentTitleUrdu: '🏪 کم سرمائے سے چھوٹا کاروبار اور کیش آن ڈلیوری (COD) سسٹم',
    intentTitleEn: '🏪 Low-Investment Small Business & COD Social Commerce',
    taglineUrdu: 'پراڈکٹ سورسنگ، واٹس ایپ دکان، کسٹمر ڈیلنگ اور منافع کا درست کھاتہ',
    taglineEn: 'Master product sourcing, social media shop setup, customer closing, and profit margins',
    userContextUrdu: 'کاروبار میں سب سے اہم چیز بڑا سرمایہ نہیں بلکہ "کم خرچ آغاز، کسٹمر کا اعتماد اور نفع نقصان کا روزانہ حساب" ہے۔',
    userContextEn: 'Success in small business comes from low overhead, customer trust, and disciplined daily bookkeeping.',
    recommendedSkillSlugs: ['social-commerce-cod', 'bookkeeping-accounting', 'retail-shop-management', 'home-chef-baking', 'sewing-tailoring'],
    recommendedSkillIds: ['skill-small-business', 'skill-sales-closing', 'skill-social-media'],
    recommendedCategoryIds: ['cat-21-small-business-management', 'cat-6-social-media', 'cat-23-bookkeeping-accounting', 'cat-12-cooking-food-business'],
    dailyTimeRecommendedUrdu: '۲ سے ۳ گھنٹے',
    dailyTimeRecommendedEn: '2 to 3 Hours',
    minimumDeviceUrdu: 'موبائل + چھوٹا اسٹاک یا ہنر',
    minimumDeviceEn: 'Mobile + Small inventory or skill',
    startingLevelUrdu: 'لیول ۱ تا ۳',
    startingLevelEn: 'Level 1 to 3',
    fourStepQuickPathUrdu: [
      { stepNumber: 1, title: 'مارکیٹ کی طلب کی تصدیق', description: 'پہلے دیکھیں کہ لوگوں کو کس چیز کی شدید ضرورت ہے۔', action: 'طلب کا جائزہ لیں۔' },
      { stepNumber: 2, title: 'کم سے کم خرچ سے آغاز (MVP)', description: 'بڑا قرض لینے کے بجائے چھوٹے پیمانے پر ۱۰ پیس یا محدود آرڈرز سے شروع کریں۔', action: 'پہلا ٹیسٹ لاٹ لیں۔' },
      { stepNumber: 3, title: 'کیش آن ڈلیوری و کورئیر اکاؤنٹ', description: 'ٹریکس یا ٹی سی ایس کے ساتھ بغیر فیس کے پورٹل بنائیں۔', action: 'کورئیر سیٹ اپ کریں۔' },
      { stepNumber: 4, title: 'روزانہ نفع اور کھاتے کا اندراج', description: 'ہر روپے کی آمدن اور اخراجات کا صاف اندراج رکھیں۔', action: 'کھاتہ شیٹ بنائیں۔' }
    ],
    fourStepQuickPathEn: [
      { stepNumber: 1, title: 'Validate Market Demand', description: 'Identify what local buyers genuinely want.', action: 'Analyze demand.' },
      { stepNumber: 2, title: 'Lean Low-Risk Launch', description: 'Start small with 5-10 units instead of taking loans.', action: 'Launch minimal test.' },
      { stepNumber: 3, title: 'Set Up COD Courier Portal', description: 'Open courier business account for nation-wide delivery.', action: 'Set up courier portal.' },
      { stepNumber: 4, title: 'Disciplined Daily Bookkeeping', description: 'Track every rupee of revenue, expense, and net margin.', action: 'Open ledger.' }
    ],
    scamWarningUrdu: '⚠️ سنہری اصول: کبھی بھی ادھار پر بڑا مال نہ خریدیں اور نہ ہی غیر تصدیق شدہ فیس بک کسٹمر کو ایڈریس کی تصدیق کے بغیر پارسل بھیجیں۔',
    scamWarningEn: '⚠️ Never buy large stock on debt, and always confirm customer phone call before shipping COD.',
    bestImmediateActionUrdu: 'ای کامرس اور کیش آن ڈلیوری گائیڈ کھولیں',
    bestImmediateActionEn: 'Open Social Commerce & COD guide'
  },

  overseas_jobs: {
    keywords: [
      'بیرون ملک', 'خلیج', 'دبئی', 'سعودی', 'یو کے', 'باہر جاب', 'ویزہ', 'اوورسیز',
      'overseas job', 'gulf job', 'dubai', 'saudi', 'foreign jobs', 'bahir job', 'visa skills'
    ],
    intentTitleUrdu: '✈️ خلیج اور بیرونِ ملک اعلیٰ تنخواہ والی ٹیکنیکل مہارتیں',
    intentTitleEn: '✈️ High-Demand Technical & Certified Trades for Gulf & Global Jobs',
    taglineUrdu: 'سولر پینل، الیکٹریشن، پلمبنگ، HVAC ایئرکنڈیشننگ، اور آئی ٹی سرٹیفیکیشنز',
    taglineEn: 'Master certified trades in Solar, HVAC, Electrical, and Tech that international employers demand',
    userContextUrdu: 'خلیجی ممالک (سعودی عرب، یو اے ای، قطر) اور یورپ میں صرف لیبر بننے کے بجائے سرٹیفائیڈ ٹیکنیشن بننے سے تنخواہ ۳ گنا زیادہ ملتی ہے۔',
    userContextEn: 'Certified technicians earn 3x more than unskilled laborers in Gulf and international job markets.',
    recommendedSkillSlugs: ['solar-panel-installation', 'electrician-basics', 'hvac-ac-refrigeration', 'web-development-react', 'python-programming'],
    recommendedSkillIds: ['skill-solar-inverter', 'skill-home-repairs', 'skill-web-development'],
    recommendedCategoryIds: ['cat-9-solar-inverters', 'cat-8-electrician-house-wiring', 'cat-10-ac-refrigeration', 'cat-26-web-development'],
    dailyTimeRecommendedUrdu: '۲ سے ۳ گھنٹے روزانہ',
    dailyTimeRecommendedEn: '2 to 3 Hours Daily',
    minimumDeviceUrdu: 'اوزار + حفاظتی سامان + موبائل',
    minimumDeviceEn: 'Tools + Safety gear + Mobile',
    startingLevelUrdu: 'لیول ۲ تا ۴ (پروفیشنل)',
    startingLevelEn: 'Level 2 to 4 (Professional)',
    fourStepQuickPathUrdu: [
      { stepNumber: 1, title: 'حفاظتی اصول اور انٹرنیشنل کوڈز (Safety First)', description: 'بجلی، اونچائی اور آلات کے بین الاقوامی سیفٹی اصول سیکھیں۔', action: 'سیفٹی گائیڈ پڑھیں۔' },
      { stepNumber: 2, title: 'تکنیکی ڈرائنگ اور سرکٹ ڈایاگرام پڑھنا', description: 'انگلش نقشے اور فالٹ کوڈز سمجھنے کی اہلیت حاصل کریں۔', action: 'ڈرائنگ پڑھنا سیکھیں۔' },
      { stepNumber: 3, title: 'سرٹیفیکیشن و ہینڈز آن تجربہ', description: 'مستند ادارے یا تجربہ کار استاد کے ساتھ ۶ ماہ فیلڈ ورک کریں۔', action: 'فیلڈ ورک لاگ کریں۔' },
      { stepNumber: 4, title: 'پیشہ ورانہ CV اور انٹرویو تیاری', description: 'اپنے کیے گئے کام کی تصاویر اور تجربہ کے ساتھ ریزیومے بنائیں۔', action: 'سی وی ٹیمپلیٹ کھولیں۔' }
    ],
    fourStepQuickPathEn: [
      { stepNumber: 1, title: 'Master International Safety Standards', description: 'Understand HSE regulations, insulation, and gear.', action: 'Review safety rules.' },
      { stepNumber: 2, title: 'Schematic & Diagram Reading', description: 'Learn to read electrical blueprints and fault codes.', action: 'Study schematics.' },
      { stepNumber: 3, title: 'Hands-on Certified Field Hours', description: 'Accumulate verified practical experience on work sites.', action: 'Log field hours.' },
      { stepNumber: 4, title: 'Craft a Verified Trade Resume', description: 'Showcase photos of completed installations on your CV.', action: 'Build trade CV.' }
    ],
    scamWarningUrdu: '⚠️ انتہائی اہم: جعلی ویزہ ایجنٹوں کو کبھی ایڈوانس لاکھوں روپے نہ دیں۔ ہمیشہ مصدقہ سرکاری اوورسیز پورٹلز اور ویزہ پروٹیکٹر سے تصدیق کریں۔',
    scamWarningEn: '⚠️ Never give cash advances to unauthorized visa agents. Always verify through official government overseas employment portals.',
    bestImmediateActionUrdu: 'سولر یا الیکٹریشن کا پروفیشنل روڈ میپ دیکھیں',
    bestImmediateActionEn: 'Open Solar & Electrician professional roadmap'
  }
};

export function detectConversationalIntent(query: string): ConversationalIntentResult | null {
  if (!query || query.trim().length < 3) return null;
  const q = query.trim().toLowerCase();

  for (const [intentKey, data] of Object.entries(CONVERSATIONAL_INTENTS)) {
    const isMatch = data.keywords.some(kw => q.includes(kw.toLowerCase()));
    if (isMatch) {
      return {
        matched: true,
        intentKey,
        intentTitleUrdu: data.intentTitleUrdu,
        intentTitleEn: data.intentTitleEn,
        taglineUrdu: data.taglineUrdu,
        taglineEn: data.taglineEn,
        userContextUrdu: data.userContextUrdu,
        userContextEn: data.userContextEn,
        recommendedSkillSlugs: data.recommendedSkillSlugs,
        recommendedSkillIds: data.recommendedSkillIds,
        recommendedCategoryIds: data.recommendedCategoryIds,
        dailyTimeRecommendedUrdu: data.dailyTimeRecommendedUrdu,
        dailyTimeRecommendedEn: data.dailyTimeRecommendedEn,
        minimumDeviceUrdu: data.minimumDeviceUrdu,
        minimumDeviceEn: data.minimumDeviceEn,
        startingLevelUrdu: data.startingLevelUrdu,
        startingLevelEn: data.startingLevelEn,
        fourStepQuickPathUrdu: data.fourStepQuickPathUrdu,
        fourStepQuickPathEn: data.fourStepQuickPathEn,
        scamWarningUrdu: data.scamWarningUrdu,
        scamWarningEn: data.scamWarningEn,
        bestImmediateActionUrdu: data.bestImmediateActionUrdu,
        bestImmediateActionEn: data.bestImmediateActionEn
      };
    }
  }

  return null;
}
