import { RealLifeMission, RealLifeMissionType } from '../types';

export const REAL_LIFE_MISSIONS_DATA: RealLifeMission[] = [
  // ===========================================================================
  // 1. آج کا مشن (Daily Mission) — Combines 4 Actions: Practical + Learning + Character + Reflection
  // ===========================================================================
  {
    id: 'daily-focus-5min',
    type: 'daily',
    typeLabelUrdu: 'آج کا مشن',
    typeLabelEn: "Today's Mission",
    titleUrdu: 'بامقصد روزمرہ مشن (۴ متوازن عملی اقدامات)',
    titleEn: 'Daily Balanced Mission (4 Connected Actions)',
    categoryUrdu: 'روزانہ کی متوازن مشق',
    categoryEn: 'Daily Balanced Growth',
    whyItMattersUrdu: 'فضول اسکرولنگ کے بجائے ہنر، مالیاتی سمجھ، گھر والوں کا خیال اور اللہ کے کلام پر عمل آپ کو ۲۴ گھنٹے میں حقیقی پیش رفت دیتا ہے۔',
    whyItMattersEn: 'Combining skill practice, career knowledge, family goodwill, and authentic reflection delivers tangible daily momentum.',
    whySelectedUrdu: 'یہ مشن آپ کے موجودہ تعلیمی سلسلے اور ذاتی کردار کے توازن کو سامنے رکھ کر ترتیب دیا گیا ہے۔',
    whySelectedEn: 'Selected to balance your active skill learning with practical life habits and moral strength.',
    actionUrdu: 'آج کے ۴ اقدامات: ۱) فون یا کام کی جگہ ترتیب دیں، ۲) ۱۵ منٹ ہنر سیکھیں، ۳) وعدہ نبھائیں یا گھر میں مدد کریں، ۴) ایک مختصر سچی سوچ نوٹ کریں۔',
    actionEn: 'Today’s 4 actions: 1) 5-min workplace/phone cleanup, 2) 15-min skill practice, 3) Fulfill promise or family support, 4) Brief honest reflection.',
    
    // 1. One practical life action
    practicalActionItem: {
      titleUrdu: 'عملی زندگی کا قدم (Practical Action)',
      titleEn: 'Practical Life Action',
      actionUrdu: 'اپنے فون یا کام کی میز سے ۵ غیر ضروری چیزیں یا فائلیں ہٹا کر صاف کریں (۵ منٹ)۔',
      actionEn: 'Clean up 5 unnecessary files, screenshots, or clutter on your workspace (5 mins).',
      estimatedMinutes: 5,
    },
    
    // 2. One learning action
    learningActionItem: {
      titleUrdu: 'تعلیم و ہنر کا قدم (Learning Action)',
      titleEn: 'Learning / Career Action',
      actionUrdu: 'اپنے فعال کورس کا ایک سبق یا مالیاتی سمجھ کی ایک اہم ٹپ ۱۵ منٹ کے لیے سمجھ کر پڑھیں۔',
      actionEn: 'Review one lesson or learn a key financial/career concept for 15 focused minutes.',
      estimatedMinutes: 15,
      conceptUrdu: 'بامقصد روزانہ مطالعہ اور ہنر سازی',
      conceptEn: 'Daily skill practice and financial understanding'
    },

    // 3. One character/Islamic action
    characterIslamicActionItem: {
      titleUrdu: 'اسلامی اخلاق و نیکی (Character & Faith)',
      titleEn: 'Islamic Character & Good Deed',
      actionUrdu: 'گھر کے کسی فرد کی بنا کہے مدد کریں، یا آج کیے گئے ہر وعدے کو سچائی سے پورا کریں۔',
      actionEn: 'Help a family member without being asked, or honor every spoken commitment with honesty.',
      estimatedMinutes: 5,
      referenceUrdu: 'رسول اللہ ﷺ نے فرمایا: "تم میں سے بہترین وہ ہے جو اپنے اہل و عیال کے لیے بہترین ہو" [ترمذی: 3895]',
      referenceEn: 'The Prophet ﷺ said: "The best of you are those who are best to their families." [Tirmidhi: 3895]'
    },

    estimatedMinutes: 25,
    durationDays: 1,
    points: 40,
    difficulty: 'standard',
    reflectionPromptUrdu: 'آج ان ۴ اقدامات کے بعد آپ کے دل، ذہن اور کام میں کیا مثبت تبدیلی محسوس ہوئی؟',
    reflectionPromptEn: 'After completing these 4 steps, what positive difference do you feel in your focus and peace?',
    simplerAlternativeId: 'daily-pause-1min',
    targetType: 'growth',
    verifiedGuidance: {
      hadithUrdu: 'تم میں سے بہترین وہ ہے جو اپنے اہل و عیال کے لیے سب سے بہترین ہو۔',
      hadithEn: 'The best among you is the one who is best to his family.',
      hadithRef: 'جامع الترمذی: 3895 (حدیث صحیح)',
      quranUrdu: 'اور وعدہ پورا کرو، بے شک وعدے کے بارے میں پوچھا جائے گا۔',
      quranEn: 'And fulfill every commitment, for every commitment will indeed be questioned.',
      quranRef: 'سورۃ الإسراء: 34',
      moralLessonUrdu: 'ہنر اور علم تب نکھرتا ہے جب اخلاق اور کردار سچا ہو۔',
      moralLessonEn: 'Knowledge and skills truly shine when anchored in upright character.'
    }
  },
  {
    id: 'daily-pause-1min',
    type: 'daily',
    typeLabelUrdu: 'آج کا مشن (آسان ترین)',
    typeLabelEn: "Today's Mission (Gentle)",
    titleUrdu: 'آسان اور پرسکون روزانہ مشن (بغیر کسی بوجھ کے)',
    titleEn: 'Gentle Daily Mission (Zero-Pressure)',
    categoryUrdu: 'آسان شروعات',
    categoryEn: 'Gentle Start',
    whyItMattersUrdu: 'کسی بھی کام سے پہلے اچھی نیت اور ایک منٹ کا سکون ذہن کو بوجھ اور انتشار سے آزاد کر دیتا ہے۔',
    whyItMattersEn: 'A one-minute pause and sincere intention calms the mind and centers your daily focus.',
    whySelectedUrdu: 'آج کا مشن نرم اور ہلکا رکھا گیا ہے تاکہ آپ بنا کسی پریشانی کے مسلسل جڑے رہیں۔',
    whySelectedEn: 'Crafted with a light pace so you can build consistency without cognitive pressure.',
    actionUrdu: 'آنکھیں بند کر کے ایک گہرا سانس لیں، ۳ منٹ کا ایک مختصر خلاصہ پڑھیں، اور مسکرا کر کسی سے بات کریں۔',
    actionEn: 'Take a calm breath, review a 3-minute key takeaway, and greet someone with a warm smile.',
    
    // 1. One practical life action
    practicalActionItem: {
      titleUrdu: 'عملی زندگی کا قدم (Practical Action)',
      titleEn: 'Practical Life Action',
      actionUrdu: 'ایک گلاس پانی بیٹھ کر پرسکون ہو کر پئیں اور ۲ گہرے سانس لیں (۱ منٹ)۔',
      actionEn: 'Sit down and sip a glass of water mindfully while taking deep breaths (1 min).',
      estimatedMinutes: 2,
    },
    
    // 2. One learning action
    learningActionItem: {
      titleUrdu: 'تعلیم و ہنر کا قدم (Learning Action)',
      titleEn: 'Learning Action',
      actionUrdu: 'کسی بھی کورس یا کتاب کی صرف ۱ مفید لائن یا اصطلاح دہرائیں (۳ منٹ)۔',
      actionEn: 'Review just 1 single practical term or concept from your learning path (3 mins).',
      estimatedMinutes: 3,
    },

    // 3. One character/Islamic action
    characterIslamicActionItem: {
      titleUrdu: 'اسلامی اخلاق و نیکی (Character & Faith)',
      titleEn: 'Islamic Character & Faith',
      actionUrdu: 'کسی کے سامنے مسکرائیں اور دل سے "الحمدللہ" کہیں (مسکراہٹ بھی صدقہ ہے)۔',
      actionEn: 'Smile warmly at a family member or peer and whisper Alhamdulillah with gratitude.',
      estimatedMinutes: 1,
      referenceUrdu: 'رسول اللہ ﷺ نے فرمایا: "اپنے بھائی کے سامنے تمہارا مسکرانا صدقہ ہے" [ترمذی: 1956]',
      referenceEn: 'The Prophet ﷺ said: "Your smiling in the face of your brother is charity." [Tirmidhi: 1956]'
    },

    estimatedMinutes: 6,
    durationDays: 1,
    points: 20,
    difficulty: 'simple',
    reflectionPromptUrdu: 'اس ہلکے اور پرسکون قدم کے بعد آپ کو کتنا سکون ملا؟',
    reflectionPromptEn: 'How much lighter and more peaceful do you feel after this gentle action?',
    targetType: 'self_reflection'
  },
  {
    id: 'daily-digital-clean-10min',
    type: 'daily',
    typeLabelUrdu: 'آج کا مشن',
    typeLabelEn: "Today's Mission",
    titleUrdu: 'نظم و ضبط اور خود احتسابی کا روزانہ مشن',
    titleEn: 'Organization & Integrity Daily Mission',
    categoryUrdu: 'نظم و ضبط اور اخلاق',
    categoryEn: 'Organization & Discipline',
    whyItMattersUrdu: 'صاف جگہ، ایک نئی مہارت اور زبان کی حفاظت انسان کے اعتماد اور وقار کو بلندی پر پہنچاتے ہیں۔',
    whyItMattersEn: 'A clear workspace, focused skill review, and speech integrity build unshakeable character and focus.',
    whySelectedUrdu: 'آپ کے لیے وقت بچانے، ہنر پختہ کرنے اور غصے/وقت کے زیاں سے حفاظت کے لیے منتخب کیا گیا۔',
    whySelectedEn: 'Chosen to help you reclaim time, polish skill retention, and practice emotional composure.',
    actionUrdu: '۱) غیر ضروری ایپس ڈیلیٹ کریں، ۲) ۱۵ منٹ اسکل کی مشق کریں، ۳) غیبت و بحث سے پرہیز کریں، ۴) ایک لمحہ سوچیں۔',
    actionEn: '1) Clean phone notifications, 2) 15-min skill practice, 3) Avoid gossip/arguments, 4) Record a takeaway.',

    // 1. One practical life action
    practicalActionItem: {
      titleUrdu: 'عملی زندگی کا قدم (Practical Action)',
      titleEn: 'Practical Life Action',
      actionUrdu: 'فون کے غیر ضروری نوٹیفیکیشن بند کریں اور آج کا سب سے اہم کام کاغذ پر لکھیں (۵ منٹ)۔',
      actionEn: 'Turn off unnecessary app notifications and write today’s top priority on paper (5 mins).',
      estimatedMinutes: 5,
    },
    
    // 2. One learning action
    learningActionItem: {
      titleUrdu: 'تعلیم و ہنر کا قدم (Learning Action)',
      titleEn: 'Learning / Money Action',
      actionUrdu: 'پیسے بچانے یا کاروبار کے کسی بنیادی اصول پر ۱۰ منٹ غور کریں اور نوٹ کریں۔',
      actionEn: 'Dedicate 10 minutes to understand a core budgeting or career principle.',
      estimatedMinutes: 10,
    },

    // 3. One character/Islamic action
    characterIslamicActionItem: {
      titleUrdu: 'اسلامی اخلاق و نیکی (Character & Faith)',
      titleEn: 'Islamic Character & Self-Control',
      actionUrdu: 'آج اگر بحث یا غصے کی نوبت آئے تو خاموشی اختیار کریں اور زبان کی حفاظت کریں۔',
      actionEn: 'Practice silence during arguments or irritation and avoid speaking ill of anyone.',
      estimatedMinutes: 3,
      referenceUrdu: 'رسول اللہ ﷺ نے فرمایا: "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں" [بخاری: 10]',
      referenceEn: 'The Prophet ﷺ said: "A Muslim is the one from whose tongue and hands other Muslims are safe." [Bukhari: 10]'
    },

    estimatedMinutes: 20,
    durationDays: 1,
    points: 35,
    difficulty: 'standard',
    reflectionPromptUrdu: 'فون اور زبان دونوں پر ضبط رکھ کر آپ کو کتنا دلی سکون ملا؟',
    reflectionPromptEn: 'How much clarity did you gain by organizing your screen and restraining your speech?',
    targetType: 'practical_life'
  },

  // ===========================================================================
  // 2. 7 دن کا مشن (7-Day Mission) — A realistic weekly improvement
  // ===========================================================================
  {
    id: 'weekly-15min-learning',
    type: 'weekly',
    typeLabelUrdu: '7 دن کا مشن',
    typeLabelEn: '7-Day Mission',
    titleUrdu: 'روزانہ ۱۵ منٹ مسلسل سیکھنے کی عادت',
    titleEn: '15-Minute Daily Focused Learning Habit',
    categoryUrdu: 'ہفتہ وار ہدف',
    categoryEn: 'Weekly Growth',
    whyItMattersUrdu: 'بڑے دعووں کے بجائے روزانہ کے ۱۵ منٹ ۷ دنوں میں آپ کو ۲ گھنٹے سے زیادہ کا عملی ہنر سکھا دیتے ہیں۔',
    whyItMattersEn: 'Consistent 15 daily minutes yields over 2 hours of solid skill-building in just 7 days.',
    actionUrdu: 'اگلے ۷ دن تک روزانہ ایک مقررہ وقت پر (جیسے عصر یا عشاء کے بعد) ۱۵ منٹ اسکل کا ایک سبق پڑھیں یا دہرائیں۔',
    actionEn: 'For the next 7 days, dedicate 15 focused minutes at a fixed time daily to review your skill.',
    estimatedMinutes: 15,
    durationDays: 7,
    points: 100,
    difficulty: 'standard',
    reflectionPromptUrdu: 'اس ہفتے باقاعدگی برقرار رکھنے میں کیا چیز سب سے زیادہ مددگار رہی؟',
    reflectionPromptEn: 'What helped you stay most consistent during this 7-day learning routine?',
    simplerAlternativeId: 'daily-focus-5min',
    targetType: 'growth'
  },
  {
    id: 'weekly-expense-tracking',
    type: 'weekly',
    typeLabelUrdu: '7 دن کا مشن',
    typeLabelEn: '7-Day Mission',
    titleUrdu: '۷ دن تک روزانہ کا خرچ ڈائری میں لکھنا',
    titleEn: '7-Day Daily Expense Tracking',
    categoryUrdu: 'مالیاتی شعور',
    categoryEn: 'Financial Discipline',
    whyItMattersUrdu: 'جب تک آپ کو معلوم نہ ہو کہ پیسہ کہاں جا رہا ہے، بچت اور مالی آزادی حاصل نہیں ہو سکتی۔',
    whyItMattersEn: 'You cannot achieve financial peace and savings without knowing exactly where your money goes.',
    actionUrdu: 'ایک چھوٹی ڈائری یا فون نوٹ میں روزانہ رات کو سونے سے پہلے دن بھر کا کل خرچ ایمانداری سے لکھیں۔',
    actionEn: 'Before sleeping each night for 7 days, jot down every rupee spent with absolute honesty.',
    estimatedMinutes: 5,
    durationDays: 7,
    points: 120,
    difficulty: 'standard',
    reflectionPromptUrdu: '۷ دن خرچ نوٹ کرنے کے بعد آپ کو کون سے غیر ضروری اخراجات کا اندازہ ہوا؟',
    reflectionPromptEn: 'After 7 days of tracking, which unnecessary expenses did you notice?',
    targetType: 'practical_life'
  },

  // ===========================================================================
  // 3. Skill Mission — Practice a learned skill
  // ===========================================================================
  {
    id: 'skill-create-practical-asset',
    type: 'skill',
    typeLabelUrdu: 'Skill کا مشن',
    typeLabelEn: 'Skill Mission',
    titleUrdu: 'سیکھی ہوئی اسکل کا ایک عملی نمونہ تیار کریں',
    titleEn: 'Build a Practical Proof-of-Work Asset',
    categoryUrdu: 'عملی ہنر',
    categoryEn: 'Skill Application',
    whyItMattersUrdu: 'صرف ویڈیو دیکھنے سے ہنر نہیں آتا، جب آپ خود اپنے ہاتھ سے کام تیار کرتے ہیں تو اعتماد پیدا ہوتا ہے۔',
    whyItMattersEn: 'Knowledge becomes real skill only when you produce a tangible output with your own hands.',
    actionUrdu: 'جو کورس آپ پڑھ رہے ہیں (مثلاً کینوا، AI پراپمٹ، یا حساب کتاب)، اس کی مدد سے ایک اصل چیز (پوسٹر، پیغام یا شیٹ) بنائیں۔',
    actionEn: 'Using what you learned (Canva, AI prompts, or budget sheet), create one real piece of work.',
    estimatedMinutes: 20,
    durationDays: 1,
    points: 50,
    difficulty: 'standard',
    reflectionPromptUrdu: 'یہ عملی کام خود تیار کر کے آپ کا اعتماد کتنا بڑھا؟ کیا چیلنج سامنے آیا؟',
    reflectionPromptEn: 'How did creating this practical item boost your confidence?',
    simplerAlternativeId: 'daily-focus-5min',
    targetType: 'course'
  },
  {
    id: 'skill-teach-one-person',
    type: 'skill',
    typeLabelUrdu: 'Skill کا مشن',
    typeLabelEn: 'Skill Mission',
    titleUrdu: 'ایک نئی اسکل کسی اور کو آسان انداز میں سکھائیں',
    titleEn: 'Teach One Practical Skill to Someone',
    categoryUrdu: 'علم کی زکوٰۃ',
    categoryEn: 'Knowledge Sharing',
    whyItMattersUrdu: 'جب آپ کسی کو کوئی مفید چیز سکھاتے ہیں تو آپ کا اپنا فہم ۱۰ گنا پختہ ہو جاتا ہے۔',
    whyItMattersEn: 'Teaching a useful skill to someone else cements your own understanding tenfold.',
    actionUrdu: 'اپنے کسی دوست، بہن بھائی یا ساتھی کو فون کی کوئی کارآمد سیٹنگ، ایپ یا شارٹ کٹ سکھائیں۔',
    actionEn: 'Show a friend, sibling, or peer one helpful phone setting, app feature, or shortcut.',
    estimatedMinutes: 10,
    durationDays: 1,
    points: 40,
    difficulty: 'simple',
    reflectionPromptUrdu: 'کسی کو سکھاتے وقت آپ کو کیسا لگا اور سامنے والے کا کیا ردعمل تھا؟',
    reflectionPromptEn: 'How did it feel to teach someone, and how did they react?',
    targetType: 'practical_life'
  },

  // ===========================================================================
  // 4. Character Mission — Improve one character habit
  // ===========================================================================
  {
    id: 'character-truth-and-promises',
    type: 'character',
    typeLabelUrdu: 'کردار کا مشن',
    typeLabelEn: 'Character Mission',
    titleUrdu: 'سچائی اور وعدے کی مکمل پاسداری',
    titleEn: 'Honesty in Words & Fulfilling Promises',
    categoryUrdu: 'اخلاق و امانت',
    categoryEn: 'Moral Integrity',
    whyItMattersUrdu: 'ایماندار انسان پر ہر کوئی بھروسہ کرتا ہے۔ کاروبار اور تعلقات کی بنیاد صرف اور صرف سچ اور وعدہ نبھانے پر ہے۔',
    whyItMattersEn: 'Trust is the bedrock of all relationships and commerce. Honesty builds unshakeable character.',
    actionUrdu: 'آج دن بھر میں دیئے گئے ہر وعدے کو وقت پر پورا کریں، اور کسی معمولی فائدے کے لیے بھی مبالغہ آرائی یا غلط بیانی سے مکمل پرہیز کریں۔',
    actionEn: 'Honor every commitment made today, and completely avoid exaggeration or untruths.',
    estimatedMinutes: 10,
    durationDays: 1,
    points: 45,
    difficulty: 'standard',
    reflectionPromptUrdu: 'آج سچ پر قائم رہ کر آپ نے اپنے دل میں کیا خود اعتمادی اور طمانیت محسوس کی؟',
    reflectionPromptEn: 'What inner peace and confidence did you experience by upholding absolute honesty today?',
    verifiedGuidance: {
      hadithUrdu: 'سچائی نیکی کی طرف لے جاتی ہے اور نیکی جنت کی طرف رہنمائی کرتی ہے۔',
      hadithEn: 'Truthfulness leads to righteousness, and righteousness leads to Paradise.',
      hadithRef: 'صحیح البخاری: 6094، صحیح مسلم: 2607',
      quranUrdu: 'اور وعدہ پورا کرو، بے شک وعدے کے بارے میں پوچھا جائے گا۔',
      quranEn: 'And fulfill every commitment, for every commitment will indeed be questioned.',
      quranRef: 'سورۃ الإسراء: 34',
      moralLessonUrdu: 'سچا انسان کبھی ناکام نہیں ہوتا، اس کا کردار ہی اس کی سب سے بڑی طاقت بن جاتا ہے۔',
      moralLessonEn: 'An honest person never fails in character; truth is their greatest asset.'
    },
    targetType: 'islamic'
  },
  {
    id: 'character-no-backbiting',
    type: 'character',
    typeLabelUrdu: 'کردار کا مشن',
    typeLabelEn: 'Character Mission',
    titleUrdu: 'زبان کی حفاظت اور غیبت سے مکمل پرہیز',
    titleEn: 'Guarding the Tongue from Backbiting',
    categoryUrdu: 'تزکیہ نفس',
    categoryEn: 'Self-Purification',
    whyItMattersUrdu: 'پیٹھ پیچھے برائی کرنے سے دل سیاہ ہوتا ہے اور معاشرے میں اعتماد ختم ہو جاتا ہے۔',
    whyItMattersEn: 'Speaking ill behind backs ruins trust and corrupts inner clarity.',
    actionUrdu: 'آج اگر کسی محفل میں کسی کی برائی شروع ہو تو یا تو نرمی سے بات کا رخ موڑ دیں یا خاموشی اختیار کریں۔',
    actionEn: 'If negative talk starts in a group today, gently divert the conversation or stay silent.',
    estimatedMinutes: 5,
    durationDays: 1,
    points: 40,
    difficulty: 'standard',
    reflectionPromptUrdu: 'منفی گفتگو سے خود کو روکنے کے بعد آپ نے کیسی ہلکی اور پاکیزہ کیفیت محسوس کی؟',
    reflectionPromptEn: 'How did staying away from negative gossip make you feel inside?',
    verifiedGuidance: {
      hadithUrdu: 'مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں۔',
      hadithEn: 'A true Muslim is the one from whose tongue and hands other people are safe.',
      hadithRef: 'صحیح البخاری: 10، صحیح مسلم: 40',
      quranUrdu: 'اور تم میں سے کوئی کسی کی غیبت نہ کرے۔',
      quranEn: 'And do not backbite one another.',
      quranRef: 'سورۃ الحجرات: 12',
      moralLessonUrdu: 'زبان پر قابو انسان کو دنیا و آخرت کی رسوائی سے بچاتا ہے۔',
      moralLessonEn: 'Controlling one’s speech preserves dignity and protects from harm.'
    },
    targetType: 'islamic'
  },

  // ===========================================================================
  // 5. Family Mission — Useful action for family
  // ===========================================================================
  {
    id: 'family-help-parents-elder',
    type: 'family',
    typeLabelUrdu: 'خاندانی مشن',
    typeLabelEn: 'Family Mission',
    titleUrdu: 'والدین یا گھر کے بزرگ کی بنا کہے خدمت',
    titleEn: 'Unsolicited Support for Parents or Elders',
    categoryUrdu: 'حسنِ سلوک',
    categoryEn: 'Family Support',
    whyItMattersUrdu: 'گھر کے اندر خدمت اور نرمی سے برکت اور دعا ملتی ہے، جس سے زندگی کے تمام راستے کھل جاتے ہیں۔',
    whyItMattersEn: 'Caring for family brings peace and blessings that elevate every sphere of life.',
    actionUrdu: 'آج والدین یا گھر کے کسی بزرگ کو بنا کہے پانی پیش کریں، ان کے پیر دبائیں یا گھر کا کوئی کام چپ چاپ کر دیں۔',
    actionEn: 'Offer a drink, ease a chore, or sit with parents/elders with attentiveness without being asked.',
    estimatedMinutes: 10,
    durationDays: 1,
    points: 40,
    difficulty: 'simple',
    reflectionPromptUrdu: 'آپ کے اس اقدام پر ان کے چہرے پر کیا تاثر تھا اور آپ کو کیسا لگا؟',
    reflectionPromptEn: 'How did they respond, and what warmth did it bring to your heart?',
    verifiedGuidance: {
      quranUrdu: 'اور ہم نے انسان کو اپنے والدین کے ساتھ حسن سلوک کی تاکید کی ہے۔',
      quranEn: 'And We have enjoined upon man goodness to parents.',
      quranRef: 'سورۃ العنکبوت: 8',
      hadithUrdu: 'تم میں سے بہترین وہ ہے جو اپنے اہل و عیال کے لیے سب سے بہترین ہو۔',
      hadithEn: 'The best among you is the one who is best to his family.',
      hadithRef: 'جامع الترمذی: 3895 (حدیث صحیح)',
      moralLessonUrdu: 'گھر سے شروع ہونے والا احسان ہی اصل کامیابی کی بنیاد ہے۔',
      moralLessonEn: 'Goodness that begins at home is the foundation of genuine success.'
    },
    targetType: 'islamic'
  },
  {
    id: 'family-listen-patiently',
    type: 'family',
    typeLabelUrdu: 'خاندانی مشن',
    typeLabelEn: 'Family Mission',
    titleUrdu: 'گھر والوں کی بات بنا ٹوکے توجہ سے سننا',
    titleEn: '10 Minutes of Attentive Listening to Family',
    categoryUrdu: 'خاندانی ہم آہنگی',
    categoryEn: 'Empathetic Connection',
    whyItMattersUrdu: 'فون سائیڈ پر رکھ کر اپنوں کو توجہ دینا گھر میں محبت اور سکون پیدا کرتا ہے۔',
    whyItMattersEn: 'Putting phones away to genuinely listen builds deep mutual respect and warmth.',
    actionUrdu: 'آج کھانے کے وقت یا شام کو فون ایک طرف رکھ کر کم از کم ۱۰ منٹ گھر والوں کے ساتھ مسکرا کر بات چیت کریں۔',
    actionEn: 'Put your phone away and spend 10 mindful minutes conversing warmly with family members.',
    estimatedMinutes: 10,
    durationDays: 1,
    points: 30,
    difficulty: 'simple',
    reflectionPromptUrdu: 'فون ہٹا کر بات سننے سے گھریلو ماحول پر کیا مثبت فرق پڑا؟',
    reflectionPromptEn: 'What positive change occurred in the household atmosphere when you listened attentively?',
    targetType: 'practical_life'
  },

  // ===========================================================================
  // 6. Community Mission — Useful action for society
  // ===========================================================================
  {
    id: 'community-remove-harm-path',
    type: 'community',
    typeLabelUrdu: 'معاشرتی مشن',
    typeLabelEn: 'Community Mission',
    titleUrdu: 'راستے سے تکلیف دہ چیز ہٹانا یا صفائی',
    titleEn: 'Removing Obstacles from Path & Cleanliness',
    categoryUrdu: 'شہری ذمہ داری',
    categoryEn: 'Civic Responsibility',
    whyItMattersUrdu: 'معاشرے کو صاف اور محفوظ بنانا ہر فرد کا فرض ہے، اس سے بلا معاوضہ صدقہ اور دعائیں ملتی ہیں۔',
    whyItMattersEn: 'Keeping pathways safe and clean is a civic duty and an ongoing act of continuous charity.',
    actionUrdu: 'گلی، مسجد، بازار یا دفتر کے راستے سے کوئی پتھر، کانٹا یا کوڑا ہٹا کر کوڑے دان میں ڈالیں۔',
    actionEn: 'Pick up an obstacle, stone, or litter from a street, hallway, or walkway and dispose of it properly.',
    estimatedMinutes: 5,
    durationDays: 1,
    points: 35,
    difficulty: 'simple',
    reflectionPromptUrdu: 'راستے کو صاف کرنے پر آپ نے شہری ذمہ داری کا کیسا احساس پایا؟',
    reflectionPromptEn: 'How did this simple civic action make you feel about your role in society?',
    verifiedGuidance: {
      hadithUrdu: 'راستے سے تکلیف دہ چیز کو ہٹانا صدقہ ہے۔',
      hadithEn: 'Removing a harmful object from the pathway is a charity.',
      hadithRef: 'صحیح البخاری: 2989، صحیح مسلم: 1009',
      moralLessonUrdu: 'چھوٹا سا عمل بھی معاشرے کے لیے بڑی راحت بن سکتا ہے۔',
      moralLessonEn: 'Even the smallest civic action brings immense relief to passersby.'
    },
    targetType: 'islamic'
  },
  {
    id: 'community-help-elder-digital',
    type: 'community',
    typeLabelUrdu: 'معاشرتی مشن',
    typeLabelEn: 'Community Mission',
    titleUrdu: 'کسی بزرگ یا ضرورت مند کی ڈیجیٹل مدد',
    titleEn: 'Help an Elder with a Digital/Utility Task',
    categoryUrdu: 'معاشرتی خدمت',
    categoryEn: 'Community Service',
    whyItMattersUrdu: 'ڈیجیٹل دنیا میں بزرگوں کو فون، بل جمع کرنے یا معلومات میں مدد دینا ان کے لیے بہت بڑا احسان ہے۔',
    whyItMattersEn: 'Assisting elders with online bill payments or phone utility spares them hours of stress.',
    actionUrdu: 'محلے کے کسی بزرگ یا دکاندار کا بجلی کا بل آن لائن چیک کرنے، یا کسی کو فون ملانے میں مدد کریں۔',
    actionEn: 'Help an elderly neighbor or local shopkeeper check a utility bill online or navigate a phone task.',
    estimatedMinutes: 10,
    durationDays: 1,
    points: 40,
    difficulty: 'standard',
    reflectionPromptUrdu: 'کسی کی مشکل آسان کر کے آپ کو کیا قلبی اطمینان ملا؟',
    reflectionPromptEn: 'What heart-settling joy did you feel by easing someone else’s technical hurdle?',
    targetType: 'practical_life'
  },

  // ===========================================================================
  // 7. Self-Control Mission — Improve a harmful habit or reaction
  // ===========================================================================
  {
    id: 'selfcontrol-anger-pause',
    type: 'self_control',
    typeLabelUrdu: 'ضبطِ نفس کا مشن',
    typeLabelEn: 'Self-Control Mission',
    titleUrdu: 'غصے اور اختلاف کے وقت خاموشی کا اصول',
    titleEn: 'Silent Pause & Restraint During Anger',
    categoryUrdu: 'جذباتی ضبط',
    categoryEn: 'Emotional Mastery',
    whyItMattersUrdu: 'غصے کے وقت بولے گئے جملے سالوں کے تعلقات کو ایک سیکنڈ میں تباہ کر دیتے ہیں۔ ۱۰ سیکنڈ کا ضبط عزت بچا لیتا ہے۔',
    whyItMattersEn: 'Words spoken in anger destroy years of goodwill in seconds. A 10-second pause protects lifelong dignity.',
    actionUrdu: 'آج اگر کسی بات پر غصہ یا جھنجھلاہٹ آئے تو فوری جواب دینے کے بجائے ۳ گہرے سانس لیں اور خاموشی سے جگہ بدلیں۔',
    actionEn: 'When irritated or provoked today, withhold reaction, take 3 slow breaths, and pause.',
    estimatedMinutes: 5,
    durationDays: 1,
    points: 50,
    difficulty: 'standard',
    reflectionPromptUrdu: 'غصے کے ردعمل کو روکنے سے آپ کس بڑے نقصان اور شرمندگی سے محفوظ رہے؟',
    reflectionPromptEn: 'What regret or conflict did you avoid by pausing before reacting?',
    verifiedGuidance: {
      hadithUrdu: 'پہلوان وہ نہیں جو دوسروں کو پچھاڑ دے، بلکہ اصل طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔',
      hadithEn: 'The strong is not the one who overcomes people by his strength, but the one who controls himself while in anger.',
      hadithRef: 'صحیح البخاری: 6114، صحیح مسلم: 2609',
      quranUrdu: 'اور غصہ پی جانے والے اور لوگوں سے درگزر کرنے والے (اللہ کو پسند ہیں)۔',
      quranEn: 'And those who restrain anger and pardon people; and Allah loves the doers of good.',
      quranRef: 'سورۃ آل عمران: 134',
      moralLessonUrdu: 'غصے پر قابو پانا کمزوری نہیں بلکہ باوقار انسان کی سب سے بڑی طاقت ہے۔',
      moralLessonEn: 'Controlling anger is the true mark of inner strength and self-respect.'
    },
    simplerAlternativeId: 'selfcontrol-gentle-water',
    targetType: 'islamic'
  },
  {
    id: 'selfcontrol-gentle-water',
    type: 'self_control',
    typeLabelUrdu: 'ضبطِ نفس کا مشن (آسان قدم)',
    typeLabelEn: 'Self-Control (Gentle Step)',
    titleUrdu: 'پریشانی کے وقت ایک گلاس پانی بیٹھ کر پینا',
    titleEn: 'Mindful Glass of Water When Stressed',
    categoryUrdu: 'آسان سکون',
    categoryEn: 'Gentle Calming',
    whyItMattersUrdu: 'تناؤ اور غصے کے وقت بیٹھ کر پانی پینا دل کی دھڑکن کو نارمل کر دیتا ہے اور اعصاب کو پرسکون کرتا ہے۔',
    whyItMattersEn: 'Sitting down and sipping water when distressed quickly normalizes heart rate and relaxes the nervous system.',
    actionUrdu: 'جب بھی تھکن یا جھنجھلاہٹ ہو، بیٹھ جائیں اور بسم اللہ کہہ کر ۳ گھونٹ میں پانی پی کر خود کو پرسکون کریں۔',
    actionEn: 'Whenever feeling frustrated today, sit down, take three mindful sips of water, and relax.',
    estimatedMinutes: 2,
    durationDays: 1,
    points: 20,
    difficulty: 'simple',
    reflectionPromptUrdu: 'اس آسان طریقے سے آپ کے غصے یا پریشانی کی شدت میں کتنی کمی آئی؟',
    reflectionPromptEn: 'How quickly did this simple step lower your stress or tension?',
    targetType: 'practical_life'
  },
  {
    id: 'selfcontrol-24h-purchase-delay',
    type: 'self_control',
    typeLabelUrdu: 'ضبطِ نفس کا مشن',
    typeLabelEn: 'Self-Control Mission',
    titleUrdu: 'غیر ضروری خریداری پر ۲۴ گھنٹے کی پابندی',
    titleEn: '24-Hour Cooling-Off Rule on Purchases',
    categoryUrdu: 'مالی ضبط',
    categoryEn: 'Impulse Control',
    whyItMattersUrdu: 'جذباتی خریداری انسان کو قرض اور فضول خرچی میں دھکیل دیتی ہے۔ ۲۴ گھنٹے کا وقفہ ذہن کو اصل ضرورت سمجھا دیتا ہے۔',
    whyItMattersEn: 'Impulse buys lead to financial strain. Waiting 24 hours clarifies whether something is truly a need.',
    actionUrdu: 'آج اگر کوئی ایسی چیز خریدنے کا دل کرے جو فوری ضروری نہیں، تو خود کو پابند کریں کہ ۲۴ گھنٹے بعد ہی فیصلہ کریں گے۔',
    actionEn: 'If tempted to buy a non-essential item today, enforce a strict 24-hour waiting rule before deciding.',
    estimatedMinutes: 5,
    durationDays: 1,
    points: 40,
    difficulty: 'standard',
    reflectionPromptUrdu: '۲۴ گھنٹے کا وقفہ دینے کے بعد کیا وہ چیز اب بھی اتنی ضروری لگ رہی تھی؟',
    reflectionPromptEn: 'After the pause, did you still feel the urge to spend unnecessarily?',
    targetType: 'practical_life'
  }
];
