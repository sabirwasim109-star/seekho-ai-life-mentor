import { LifeSkillCategoryMeta, PracticalLifeLesson, LifeSkillCategoryId } from '../types';

export const LIFE_SKILLS_CORE_PRINCIPLE = {
  urdu: 'صرف کامیابی کے بارے میں سوچنا نہیں، کامیابی کے لیے عملی قدم اٹھانا۔',
  en: 'Not just thinking about success, but taking concrete practical action.',
  cycleUrdu: ['سیکھیں (Learn)', 'مشق کریں (Practice)', 'عملی قدم (Apply)', 'سوچیں (Reflect)', 'بہتری لائیں (Improve)'],
  cycleEn: ['Learn', 'Practice', 'Apply', 'Reflect', 'Improve']
};

export const LIFE_SKILL_CATEGORIES: LifeSkillCategoryMeta[] = [
  {
    id: 'money_earning',
    number: 1,
    titleUrdu: 'پیسہ بنانا',
    titleEn: 'Money & Wealth Building',
    emoji: '💰',
    shortDescUrdu: 'کمانا، بچت، بجٹ بنانا، ذمہ دارانہ سرمایہ کاری اور بتدریج دولت بنانا',
    shortDescEn: 'Earning, saving, budgeting, responsible investing and gradual wealth building',
    iconName: 'Coins',
    accentColor: 'from-emerald-600 to-teal-800'
  },
  {
    id: 'mind_psychology',
    number: 2,
    titleUrdu: 'ذہن کو استعمال کرنا',
    titleEn: 'Mindset & Self-Control',
    emoji: '🧠',
    shortDescUrdu: 'سوچ، جذبات پر قابو، خوف، مثبت عادات اور خود اعتمادی',
    shortDescEn: 'Thinking, emotions, fear, habits, mindset and self-control',
    iconName: 'Brain',
    accentColor: 'from-purple-600 to-indigo-800'
  },
  {
    id: 'success_discipline',
    number: 3,
    titleUrdu: 'کامیاب ہونا',
    titleEn: 'Goals & Discipline',
    emoji: '🎯',
    shortDescUrdu: 'واضح اہداف، صحیح سمت، نظم و ضبط، مستقل مزاجی اور کام مکمل کرنا',
    shortDescEn: 'Goals, direction, discipline, consistency and completing work',
    iconName: 'Target',
    accentColor: 'from-blue-600 to-cyan-800'
  },
  {
    id: 'business_sales',
    number: 4,
    titleUrdu: 'کاروبار کرنا',
    titleEn: 'Business & Sales',
    emoji: '💼',
    shortDescUrdu: 'کاروباری آئیڈیاز، مارکیٹ کے مواقع، گاہک، سیلز، مارکیٹنگ اور برانڈنگ',
    shortDescEn: 'Business ideas, opportunities, customers, sales, marketing and branding',
    iconName: 'Briefcase',
    accentColor: 'from-amber-600 to-orange-800'
  },
  {
    id: 'effective_communication',
    number: 5,
    titleUrdu: 'اپنی بات مؤثر انداز میں پیش کرنا',
    titleEn: 'Persuasion & Communication',
    emoji: '🗣️',
    shortDescUrdu: 'بولنا، لکھنا، اسٹوری ٹیلنگ، قائل کرنا اور اپنے آئیڈیا یا پراڈکٹ کو پیش کرنا',
    shortDescEn: 'Speaking, writing, storytelling, persuasion and presenting ideas or products',
    iconName: 'MessageSquare',
    accentColor: 'from-teal-600 to-emerald-800'
  },
  {
    id: 'high_income_skills',
    number: 6,
    titleUrdu: 'زیادہ کمانے والی مہارتیں',
    titleEn: 'High-Income Skills',
    emoji: '🚀',
    shortDescUrdu: 'مارکیٹ کی قیمتی مہارتوں کی پہچان، انہیں سیکھنا اور ہنر کو آمدنی میں بدلنا',
    shortDescEn: 'Identify useful market skills, learn them and turn skills into income',
    iconName: 'TrendingUp',
    accentColor: 'from-emerald-600 to-blue-800'
  },
  {
    id: 'better_decisions',
    number: 7,
    titleUrdu: 'بہتر فیصلے کرنا',
    titleEn: 'Smart Decisions & Logic',
    emoji: '⚖️',
    shortDescUrdu: 'مسائل کا حل، جذباتی کنٹرول، خطرات کی پہچان اور بہترین انتخاب',
    shortDescEn: 'Problem solving, emotional control, risk awareness and better choices',
    iconName: 'ShieldAlert',
    accentColor: 'from-indigo-600 to-slate-800'
  },
  {
    id: 'understanding_people',
    number: 8,
    titleUrdu: 'لوگوں کو سمجھنا',
    titleEn: 'Understanding People',
    emoji: '🤝',
    shortDescUrdu: 'انسانی رویے، موثر رابطہ، گہرے تعلقات اور باڈی لینگویج کو پڑھنا',
    shortDescEn: 'Human behavior, communication, relationships and body language',
    iconName: 'Users',
    accentColor: 'from-rose-600 to-pink-800'
  },
  {
    id: 'leadership_teamwork',
    number: 9,
    titleUrdu: 'لیڈرشپ سیکھنا',
    titleEn: 'Leadership & Teamwork',
    emoji: '👑',
    shortDescUrdu: 'ذمہ داری قبول کرنا، ٹیم ورک، قیادت، موثر ابلاغ اور مشکل حالات سنبھالنا',
    shortDescEn: 'Responsibility, teamwork, leadership, communication and handling difficult situations',
    iconName: 'Award',
    accentColor: 'from-amber-600 to-yellow-800'
  },
  {
    id: 'time_energy_management',
    number: 10,
    titleUrdu: 'وقت کو دولت بنانا',
    titleEn: 'Time & Energy Management',
    emoji: '⏳',
    shortDescUrdu: 'وقت، توجہ اور ذہنی و جسمانی توانائی کا بہترین انتظام',
    shortDescEn: 'Time, attention and energy management for peak productivity',
    iconName: 'Clock',
    accentColor: 'from-cyan-600 to-blue-800'
  },
  {
    id: 'learning_from_books',
    number: 11,
    titleUrdu: 'بہترین کتابوں سے سیکھنا',
    titleEn: 'Wisdom from Great Books',
    emoji: '📚',
    shortDescUrdu: 'کاروبار، نفسیات، دولت، ذہانت اور ذاتی ترقی کی شہرہ آفاق کتابوں کے خلاصے',
    shortDescEn: 'Teach major ideas from important books about business, psychology, money & intelligence',
    iconName: 'BookOpen',
    accentColor: 'from-violet-600 to-indigo-900'
  },
  {
    id: 'knowledge_into_action',
    number: 12,
    titleUrdu: 'علم کو عمل میں بدلنا',
    titleEn: 'Turning Knowledge into Action',
    emoji: '⚡',
    shortDescUrdu: 'ہر سبق اور سوچ کو روزمرہ زندگی کے ایک چھوٹے مگر مضبوط عملی قدم میں تبدیل کرنا',
    shortDescEn: 'Transforming insights into immediate 24-hour practical action',
    iconName: 'Zap',
    accentColor: 'from-amber-500 to-emerald-700'
  }
];

export const PRACTICAL_LIFE_LESSONS: PracticalLifeLesson[] = [
  // =========================================================================
  // 1. 💰 پیسہ بنانا (MONEY & WEALTH BUILDING)
  // =========================================================================
  {
    id: 'pls-money-1',
    categoryId: 'money_earning',
    titleUrdu: '50/30/20 بجٹ رول: ہر مہینے غیر ضروری اخراجات روکنا',
    titleEn: 'The 50/30/20 Budget Rule: Controlling Monthly Leakages',
    subtitleUrdu: 'اپنی ماہانہ آمدنی کو ۳ حصوں میں تقسیم کر کے مالی تحفظ حاصل کریں',
    subtitleEn: 'Split your monthly income into 3 clear buckets for lasting security',
    keyIdeaUrdu: 'پیسہ کتنا کمایا یہ اہم نہیں، پیسہ کتنا بچایا اور کس طرح استعمال کیا یہ آپ کو مالی طور پر مضبوط بناتا ہے۔',
    keyIdeaEn: 'It is not just what you earn, but what you retain and direct purposefully that builds strength.',
    sourceOrBookUrdu: 'مالیاتی اصول و بنیادی معاشی حکمت',
    sourceOrBookEn: 'Fundamental Personal Finance Framework',
    realLifeExampleUrdu: 'احمد ماہانہ ۴۰ ہزار کماتا تھا مگر مہینے کے آخری ہفتے ادھار مانگتا تھا۔ اس نے ۵۰٪ ضروریات (راشن، بل)، ۳۰٪ خواہشات اور ۲۰٪ (۸ ہزار) سیدھا بچت میں ڈالنا شروع کیا تو ۶ ماہ میں ۵۰ ہزار کا ایمرجنسی فنڈ بن گیا۔',
    realLifeExampleEn: 'Ahmad earned 40,000 PKR but was always broke by month-end. By locking 20% into savings right on payday, he built a 50k emergency cushion in 6 months.',
    learnContentUrdu: `بجٹ بنانے کا سب سے آسان طریقہ 50/30/20 فارمولا ہے:
1. **50% بنیادی ضروریات:** گھر کا کرایہ، راشن، یوٹیلیٹی بلز اور دوا وغیرہ۔
2. **30% ذاتی خواہشات:** باہر کھانا، نیا لباس یا تفریح (اس پر قابو رکھیں)۔
3. **20% لازمی بچت و سرمایہ کاری:** تنخواہ ملتے ہی یہ رقم الگ کر دیں، بچے ہوئے پیسوں سے مہینہ گزاریں۔

**سنہری اصول:** "پہلے بچت الگ کریں، پھر جو بچے اسے خرچ کریں۔ نہ کہ پہلے خرچ کریں اور جو بچے وہ بچائیں۔"`,
    learnContentEn: `The 50/30/20 budgeting rule splits net income into:
1. **50% Needs:** Essentials like groceries, rent, utility bills, basic healthcare.
2. **30% Wants:** Dining out, upgrades, lifestyle (keep guarded).
3. **20% Savings & Emergency:** Automatically set aside on payday before spending anything.`,
    keyTakeawaysUrdu: [
      'تنخواہ آتے ہی پہلے 20% بچت میں منتقل کریں۔',
      'چھوٹے چھوٹے روزانہ کے فضول خرچ ماہانہ بنیاد پر ہزاروں روپے ضائع کرتے ہیں۔',
      'بجٹ پابندی نہیں بلکہ آپ کے پیسے کو صحیح سمت دینے کا نام ہے۔'
    ],
    keyTakeawaysEn: [
      'Save 20% immediately on receiving income.',
      'Small daily leakages accumulate into huge monthly losses.',
      'A budget is not restriction; it gives your money deliberate direction.'
    ],
    practiceScenarioUrdu: 'آپ کو اس مہینے ۵ ہزار روپے اضافی بونس ملے۔ آپ کیا کریں گے؟',
    practiceScenarioEn: 'You received a 5,000 bonus this month. What is the smartest financial choice?',
    practiceOptionsUrdu: [
      'فوری طور پر مہنگے ریسٹورنٹ میں سارا خرچ کر دینا',
      'کم از کم ۵۰٪ (۲۵۰۰ روپے) ایمرجنسی فنڈ میں ڈالنا اور باقی سے ضروری کام نکالنا',
      'کسی غیر تصدیق شدہ اسکیم میں ڈبل کرنے کے لالچ میں لگا دینا'
    ],
    practiceOptionsEn: [
      'Spend all of it immediately on luxury dining',
      'Allocate at least 50% into emergency savings and use the rest wisely',
      'Risk it in an unverified "get-rich-quick" scheme'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'شاباش! غیر متوقع رقم کا بڑا حصہ ہمیشہ بچت یا ایمرجنسی فنڈ میں جانا چاہیے تاکہ مستقبل محفوظ ہو۔',
    practiceFeedbackEn: 'Spot on! Windfalls should always strengthen your financial safety net first.',
    applyActionUrdu: 'آج ایک کاغذ یا فون کے نوٹس میں پچھلے ۳ دن کے تمام اخراجات لکھیں اور کم از کم ایک ایسا خرچہ شناخت کریں جسے آپ ختم کر سکتے ہیں۔',
    applyActionEn: 'Write down all your expenses from the last 3 days and pinpoint at least one wasteful leak you will stop today.',
    applyChecklistUrdu: [
      'پچھلے ۳ دن کے تمام اخراجات کی لسٹ بنائیں',
      'ضروری بمقابلہ غیر ضروری کی تمیز کریں',
      'مہینے کے لیے بچت کا ایک ہدف لکھیں'
    ],
    applyChecklistEn: [
      'List all expenses from the past 3 days',
      'Separate genuine needs from discretionary wants',
      'Set a specific monthly savings target'
    ],
    reflectPromptUrdu: 'آپ کے خیال میں آپ کے ماہانہ بجٹ میں سب سے زیادہ پیسہ کس غیر ضروری چیز پر ضائع ہوتا ہے؟',
    reflectPromptEn: 'Where do you feel the biggest leakage happens in your monthly spending?',
    reflectOptionsUrdu: [
      'باہر کے کھانے اور فاسٹ فوڈ',
      'بغیر سوچے سمجھے موبائل یا آن لائن شاپنگ',
      'غیر منظم بل اور بجلی/پٹرول کا غیر محتاط استعمال',
      'میں پہلے سے محتاط بجٹ بنا رہا ہوں'
    ],
    reflectOptionsEn: [
      'Eating out and fast food',
      'Impulsive online shopping',
      'Unchecked utility bills and fuel wastage',
      'I already budget carefully'
    ],
    improveTipUrdu: 'ہر خریداری سے پہلے ۲۴ گھنٹے کا اصول اپنائیں: اگر کوئی غیر ضروری چیز پسند آئے تو خریدنے سے پہلے ۲۴ گھنٹے سوچیں۔ اکثر شوق خود ختم ہو جاتا ہے۔',
    improveTipEn: 'Practice the 24-hour rule: wait 24 hours before making any impulse purchase.',
    estimatedMinutes: 5,
    points: 25,
    tagUrdu: 'مالی نظم و ضبط',
    tagEn: 'Financial Discipline',
    iconName: 'Wallet'
  },

  // =========================================================================
  // 2. 🧠 ذہن کو استعمال کرنا (MINDSET & PSYCHOLOGY)
  // =========================================================================
  {
    id: 'pls-mind-1',
    categoryId: 'mind_psychology',
    titleUrdu: 'منفی خیالات اور ناکامی کے خوف پر قابو پانا',
    titleEn: 'Overcoming Self-Doubt and Fear of Failure',
    subtitleUrdu: 'ذہنی کشمکش کو تعمیری عمل میں تبدیل کرنے کی نفسیاتی تکنیک',
    subtitleEn: 'Cognitive reframing to convert self-limiting doubt into constructive action',
    keyIdeaUrdu: 'ناکامی کامیابی کی ضد نہیں، بلکہ کامیابی کے راستے کا لازمی سنگِ میل ہے۔',
    keyIdeaEn: 'Failure is not the opposite of success; it is an essential stepping stone on the journey.',
    sourceOrBookUrdu: 'Mindset: The New Psychology of Success (کیرول ڈویک)',
    sourceOrBookEn: 'Mindset: The New Psychology of Success by Carol Dweck',
    realLifeExampleUrdu: 'بلال جب بھی نئی آن لائن اسکل سیکھنا چاہتا تو دل میں آواز آتی: "تم سے نہیں ہوگا۔" اس نے اپنے جملے کو بدلا: "میں ابھی ماہر نہیں ہوں، لیکن روزانہ ۱۵ منٹ سیکھ کر بہتر ہو سکتا ہوں۔" اس سادہ تبدیلی نے اس کی پریشانی ختم کر دی۔',
    realLifeExampleEn: 'Whenever Bilal tried a new digital skill, self-doubt struck: "You will fail." He reframed it: "I am not an expert yet, but 15 minutes of daily practice will get me there."',
    learnContentUrdu: `ہمارا دماغ قدرتی طور پر خطرات سے بچنے کے لیے منفی خیالات پیدا کرتا ہے۔ لیکن آپ اسے کنٹرول کر سکتے ہیں:

1. **"ابھی تک" (Yet) کا جادو:** جب بھی خیال آئے "مجھ سے یہ نہیں ہوتا"، تو آخر میں کہیں: "مجھ سے یہ **ابھی تک** نہیں ہوتا، مشق سے ہو جائے گا۔"
2. **بدترین صورتحال کا تجزیہ:** اپنے آپ سے پوچھیں: "اگر میں ناکام ہو بھی گیا تو بدترین کیا ہوگا؟" آپ کو معلوم ہوگا کہ نقصان اتنا بڑا نہیں جتنا دماغ سوچ رہا تھا۔
3. **چھوٹا قدم:** خوف کا بہترین علاج فوری طور پر کوئی چھوٹا سا عملی قدم اٹھانا ہے۔`,
    learnContentEn: `Our brain naturally highlights risk. You can reframe negative self-talk using three cognitive tools:
1. **The Power of "Yet":** Shift from "I can't do this" to "I can't do this *yet* with practice."
2. **Worst-Case Assessment:** Objectively identify the realistic downside. It is almost never fatal.
3. **Micro-Action:** Action immediately dispels the paralysis of overthinking.`,
    keyTakeawaysUrdu: [
      'اپنے اندر کی منفی تنقید کو پہچانیں اور اس پر سوال اٹھائیں۔',
      'ناکامی ایک واقعہ ہے، آپ کی شناخت نہیں۔',
      'حرکت میں برکت ہے: عمل شروع کرنے سے خوف خودبخود گھٹ جاتا ہے۔'
    ],
    keyTakeawaysEn: [
      'Catch and challenge negative inner dialogue.',
      'Failure is an event, not an identity.',
      'Action cures fear: taking the first step dissolves anxiety.'
    ],
    practiceScenarioUrdu: 'آپ ایک اہم انٹرویو یا نئے کام کے لیے جا رہے ہیں اور گھبراہٹ ہو رہی ہے۔ بہترین رویہ کیا ہے؟',
    practiceScenarioEn: 'You are stepping into an important job interview or client pitch and feeling nervous. What is best?',
    practiceOptionsUrdu: [
      'خوف کے مارے کام کو ملتوی کر کے گھر بیٹھ جانا',
      'گہرے سانس لینا، تیاری کا اعادہ کرنا اور خود کو یاد دلانا کہ یہ سیکھنے کا بہترین موقع ہے',
      'یہ سوچنا کہ میں سب سے کمزور ہوں اور دوسروں کو مجھ سے بہتر سب کچھ آتا ہے'
    ],
    practiceOptionsEn: [
      'Cancel or postpone the task out of fear',
      'Take deep breaths, review your core points, and reframe it as a growth opportunity',
      'Assume you are inadequate compared to everyone else'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'بالکل درست! تیاری اور پرسکون گہرا سانس گھبراہٹ کو ختم کر کے اعتماد دیتا ہے۔',
    practiceFeedbackEn: 'Exactly! Controlled breathing and cognitive reframing ground your confidence.',
    applyActionUrdu: 'ایک ایسی بات سوچیں جس سے آپ کافی دن سے جھجھک رہے تھے (جیسے کسی سے بات کرنا، نیا ہنر شروع کرنا) اور اگلے ۱ گھنٹے میں اس کا پہلا چھوٹا سا قدم اٹھائیں۔',
    applyActionEn: 'Identify one task you have been procrastinating on out of hesitation, and take a 2-minute starter action within the next hour.',
    applyChecklistUrdu: [
      'جھجھک یا خوف والے کام کی نشاندہی کریں',
      'اس کا سب سے چھوٹا ممکنہ قدم منتخب کریں',
      'بغیر کسی تاخیر کے فوری شروع کریں'
    ],
    applyChecklistEn: [
      'Pinpoint the task you were hesitating on',
      'Break it into a tiny 2-minute starting micro-step',
      'Execute it immediately without overthinking'
    ],
    reflectPromptUrdu: 'جب آپ کو کسی کام میں ناکامی یا رکاوٹ کا سامنا ہوتا ہے تو آپ کا پہلا ردعمل کیا ہوتا ہے؟',
    reflectPromptEn: 'What is your typical immediate response when facing a setback?',
    reflectOptionsUrdu: [
      'مایوس ہو کر کام چھوڑ دینا',
      'غلطی کا تجزیہ کر کے دوبارہ کوشش کرنا',
      'دوسروں یا حالات کو قصوروار ٹھہرانا',
      'کسی تجربہ کار ساتھی سے رہنمائی لینا'
    ],
    reflectOptionsEn: [
      'Giving up out of frustration',
      'Analyzing what went wrong and trying again',
      'Blaming circumstances or others',
      'Seeking counsel from an experienced mentor'
    ],
    improveTipUrdu: 'ہر رات سونے سے پہلے اپنے دن کے ۲ ایسے لمحات یاد کریں جہاں آپ نے ہمت دکھائی یا کوئی اچھی بات سیکھی۔',
    improveTipEn: 'Every night before sleeping, acknowledge 2 small moments where you demonstrated resilience.',
    estimatedMinutes: 5,
    points: 25,
    tagUrdu: 'ذہنی پختگی و مائنڈ سیٹ',
    tagEn: 'Mindset & Resilience',
    iconName: 'Sparkles'
  },

  // =========================================================================
  // 3. 🎯 کامیاب ہونا (GOALS, DISCIPLINE & CONSISTENCY)
  // =========================================================================
  {
    id: 'pls-goals-1',
    categoryId: 'success_discipline',
    titleUrdu: 'مستقل مزاجی کا راز: روزانہ کا 1 فیصد اصول',
    titleEn: 'The Power of 1% Daily Consistency',
    subtitleUrdu: 'بڑے خوابوں کو روزانہ کے ناقابلِ شکست چھوٹے معمولات میں ڈھالیں',
    subtitleEn: 'How marginal daily gains compound into monumental lifetime results',
    keyIdeaUrdu: 'کامیابی کسی ایک دن کے دھماکے سے نہیں ملتی، بلکہ روزانہ کی خاموش اور مسلسل محنت کا مجموعہ ہوتی ہے۔',
    keyIdeaEn: 'Success is not a single giant leap, but the compound interest of everyday quiet discipline.',
    sourceOrBookUrdu: 'Atomic Habits (جیمز کلیئر)',
    sourceOrBookEn: 'Atomic Habits by James Clear',
    realLifeExampleUrdu: 'طاہر نے روزانہ ۳ گھنٹے پڑھائی کا ارادہ کیا مگر ۳ دن بعد تھک گیا۔ پھر اس نے روزانہ صرف ۲۰ منٹ پڑھنے کا اصول اپنایا۔ سال کے اختتام پر وہ بغیر ہمت ہارے پوری کتاب اور ۲ کورسز مکمل کر چکا تھا۔',
    realLifeExampleEn: 'Tahir tried studying 3 hours a day and burnt out on day 4. He scaled down to an unbreakable 20 minutes a day and completed 2 certifications over the year.',
    learnContentUrdu: `اگر آپ روزانہ صرف **1%** بہتر ہوں، تو سال کے ۳۶۵ دنوں بعد آپ پہلے سے **37 گنا** زیادہ بہتر بن چکے ہوں گے۔

**مستقل مزاجی کے ۳ سنہری اصول:**
1. **شروعات اتنی چھوٹی ہو کہ انکار ناممکن ہو:** مثلاً ۲۰ پش اپس کی بجائے ۲ پش اپس، یا پوری کتاب کی بجائے روزانہ ۲ صفحے۔
2. **وقت اور جگہ مقرر کریں:** "میں کل پڑھائی کروں گا" کی بجائے "میں روزانہ شام ۶ بجے اپنے کمرے میں ۲۰ منٹ پڑھوں گا"۔
3. **کبھی بھی دو دن لگاتار ناغہ نہ کریں:** اگر کسی دن ایمرجنسی میں ناغہ ہو بھی جائے تو اگلے دن لازماً تسلسل بحال کریں۔`,
    learnContentEn: `If you get 1% better every day for a year, you end up 37 times better:
1. **Make it too small to fail:** Start with 2 pages or 5 minutes of focused work.
2. **State specific time and location:** Implementation intentions bridge the intention-action gap.
3. **Never miss twice:** If life derails one day, resume the streak immediately the next day.`,
    keyTakeawaysUrdu: [
      'جوش و جذبہ شروع کرواتا ہے، لیکن نظم و ضبط منزل تک پہنچاتا ہے۔',
      'روزانہ کا تھوڑا سا کام سالوں میں پہاڑ بن جاتا ہے۔',
      'ایک دن کے ناغے کو عادت نہ بننے دیں۔'
    ],
    keyTakeawaysEn: [
      'Motivation starts you off; daily discipline finishes the job.',
      'Small daily efforts compound into massive outcomes.',
      'Never allow an accidental slip to become a new negative habit.'
    ],
    practiceScenarioUrdu: 'آپ نے انگلش بول چال سیکھنے کا فیصلہ کیا۔ سب سے پائیدار طریقہ کیا ہوگا؟',
    practiceScenarioEn: 'You decided to learn conversational English. What is the most sustainable approach?',
    practiceOptionsUrdu: [
      'اتوار کے دن ۶ گھنٹے رٹا لگانا اور پورا ہفتہ کچھ نہ دیکھنا',
      'روزانہ صبح ۱۵ منٹ کوئی ویڈیو دیکھنا، نئے الفاظ نوٹ کرنا اور بلند آواز میں دہرانا',
      'صرف سوچتے رہنا اور کل پر ڈالتے رہنا'
    ],
    practiceOptionsEn: [
      'Cram for 6 hours on Sunday and do nothing the rest of the week',
      'Spend 15 focused minutes every morning practicing and speaking aloud',
      'Postpone it endlessly waiting for the "ideal schedule"'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'زبردست! روزانہ کے ۱۵ منٹ اتوار کے ۶ گھنٹے سے کہیں زیادہ مؤثر اور پائیدار ہوتے ہیں۔',
    practiceFeedbackEn: 'Excellent! Daily bite-sized practice builds deep neural fluency far better than sporadic cramming.',
    applyActionUrdu: 'اپنے سب سے اہم ہدف کے لیے ایک "2 منٹ کا مائیکرو ٹاسک" طے کریں اور آج ہی کا وقت مقرر کر کے اسے انجام دیں۔',
    applyActionEn: 'Define a 2-minute micro-habit towards your primary goal and lock in an exact time today to perform it.',
    applyChecklistUrdu: [
      'اپنا ہدف لکھیں',
      'اس کا روزانہ کا سب سے چھوٹا قدم طے کریں',
      'ایک مخصوص وقت اور جگہ منتخب کریں'
    ],
    applyChecklistEn: [
      'Write down your target objective',
      'Define its minimum daily micro-step',
      'Schedule exact time and setting'
    ],
    reflectPromptUrdu: 'آپ کے لیے مستقل مزاجی برقرار رکھنے میں سب سے بڑی رکاوٹ کیا بنتی ہے؟',
    reflectPromptEn: 'What is your biggest obstacle to staying consistent?',
    reflectOptionsUrdu: [
      'بہت جلدی بڑے نتائج کی توقع رکھنا',
      'موبائل فون اور سوشل میڈیا کے خلفشار (Distractions)',
      'تھکاوٹ اور نیند کی کمی',
      'واضح روڈ میپ یا سمت کا نہ ہونا'
    ],
    reflectOptionsEn: [
      'Expecting instant monumental results',
      'Phone and social media notifications',
      'Fatigue and irregular sleep',
      'Lack of a clear structured roadmap'
    ],
    improveTipUrdu: 'ایک ڈائری میں روزانہ کا ایک ٹک مارک لگائیں۔ لڑی (Streak) کو ٹوٹنے سے بچانا آپ کے دماغ کو فخر اور تسلسل دیتا ہے۔',
    improveTipEn: 'Keep a visual habit tracker. Watching your streak build creates immense psychological momentum.',
    estimatedMinutes: 5,
    points: 25,
    tagUrdu: 'نظم و ضبط و عادات',
    tagEn: 'Discipline & Habits',
    iconName: 'Target'
  },

  // =========================================================================
  // 4. 💼 کاروبار کرنا (BUSINESS, SALES & MARKETING)
  // =========================================================================
  {
    id: 'pls-bus-1',
    categoryId: 'business_sales',
    titleUrdu: 'کاروبار کی بنیاد: گاہک کا حقیقی مسئلہ تلاش کرنا',
    titleEn: 'Business Foundations: Solving Real Customer Pain Points',
    subtitleUrdu: 'پراڈکٹ بیچنے کی بجائے لوگوں کی مشکل حل کر کے کامیاب کاروبار بنائیں',
    subtitleEn: 'Move from pushing products to relieving genuine customer problems',
    keyIdeaUrdu: 'لوگ مصنوعات نہیں خریدتے، بلکہ اپنے مسائل کا آسان، سچا اور قابلِ اعتماد حل خریدتے ہیں۔',
    keyIdeaEn: 'Customers do not buy products; they buy solutions, relief, and reliable transformation.',
    sourceOrBookUrdu: 'The Lean Startup (ایرک ریس) و عملی کاروباری اصول',
    sourceOrBookEn: 'The Lean Startup by Eric Ries & Practical Business Fundamentals',
    realLifeExampleUrdu: 'عمر نے دیکھا کہ اس کے محلے میں شام کے وقت تازی دیسی سبزیاں لانے میں بزرگوں کو پریشانی ہوتی ہے۔ اس نے بڑی دکان کھولنے کی بجائے واٹس ایپ پر آرڈر لے کر مفت ہوم ڈیلیوری شروع کی۔ پہلے ہی ماہ ۵۰ مستقل گاہک بن گئے۔',
    realLifeExampleEn: 'Umar noticed neighborhood elders struggled to buy fresh produce late in the day. Instead of opening a costly shop, he took WhatsApp orders for fresh evening doorstep delivery, gaining 50 loyal clients in month one.',
    learnContentUrdu: `نیا کاروبار شروع کرتے وقت لوگ سب سے بڑی غلطی یہ کرتے ہیں کہ وہ دکان یا سامان پر سارا پیسہ لگا دیتے ہیں بغیر یہ جانے کہ گاہک کو کیا چاہیے۔

**کاروبار کے ۳ بنیادی ستون:**
1. **درد یا ضرورت کی پہچان (Pain Point):** لوگوں کو کس چیز میں پریشانی، تاخیر یا مہنگائی کا سامنا ہے؟
2. **کم خرچ میں تجربہ (MVP):** بڑے خرچ سے پہلے چھوٹے پیمانے پر ۵ سے ۱۰ گاہکوں کو سروس یا پراڈکٹ دے کر فیڈ بیک لیں۔
3. **اعتماد اور سچائی:** گاہک کا اعتماد قائم رکھنا سب سے بڑا مارکیٹنگ کا ذریعہ ہے۔ مطمئن گاہک خود دوسرے گاہک لاتا ہے۔`,
    learnContentEn: `The most common entrepreneurial failure is building something nobody needs.
1. **Identify the Core Pain:** Where are people wasting time, money, or suffering inconvenience?
2. **Test Small (MVP):** Validate your idea with 5-10 real paying customers before making large investments.
3. **Word-of-Mouth via Trust:** Delivering honesty and exceptional quality turns early buyers into enthusiastic advocates.`,
    keyTakeawaysUrdu: [
      'کاروبار کا آغاز گاہک کی بات سننے سے ہوتا ہے، اپنے خیال پر اڑنے سے نہیں۔',
      'پہلے تصدیق کریں کہ کیا لوگ اس حل کے لیے پیسے دینے کو تیار ہیں۔',
      'گاہک کی توقع سے تھوڑی بہتر سروس دینا کاروبار کو لازوال بناتا ہے۔'
    ],
    keyTakeawaysEn: [
      'Business starts with listening to user frustration, not falling in love with your idea.',
      'Validate that real people will exchange real money for your solution.',
      'Over-delivering on customer promises is the ultimate organic growth engine.'
    ],
    practiceScenarioUrdu: 'آپ سلائی کڑھائی یا گرافک ڈیزائن کی سروس شروع کرنا چاہتے ہیں۔ پہلا قدم کیا ہونا چاہیے؟',
    practiceScenarioEn: 'You want to launch a local tailoring or graphic design service. What should be your first step?',
    practiceOptionsUrdu: [
      'بینک سے بڑا قرض لے کر بڑا دفتر یا دکان کرائے پر لینا',
      '۳ سے ۵ بہترین سیمپلز تیار کرنا اور قریبی ضرورت مند لوگوں یا دکانداروں کو مناسب قیمت پر دکھا کر کام لینا',
      'مہنگے اشتہار چھپوانا بغیر یہ جانے کہ کام کیسا ہے'
    ],
    practiceOptionsEn: [
      'Take a large bank loan and lease an expensive commercial space',
      'Create 3-5 solid portfolio samples and approach local prospective buyers with a fair offer',
      'Spend heavily on banners before validating customer interest'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'شاباش! پورٹ فولیو اور براہِ راست گاہک سے رابطہ کم خرچ اور پائیدار کاروبار کی بنیاد ہے۔',
    practiceFeedbackEn: 'Bingo! A solid starter portfolio and direct outreach validate customer demand without unnecessary debt.',
    applyActionUrdu: 'اپنے ارد گرد ۳ ایسے مسائل یا ضروریات نوٹ کریں جو لوگ اکثر شکایت کرتے ہیں، اور سوچیں کہ آپ اپنے ہنر سے اس کا کیا آسان حل پیش کر سکتے ہیں۔',
    applyActionEn: 'Write down 3 daily complaints or unmet needs you observe around you, and draft a simple service concept to solve one.',
    applyChecklistUrdu: [
      'مارکیٹ یا محلے کے ۳ عام مسائل لکھیں',
      'ان میں سے ایک کا آسان حل سوچیں',
      'کسی ایک ممکنہ گاہک سے اس کی رائے پوچھیں'
    ],
    applyChecklistEn: [
      'Note down 3 everyday problems in your area',
      'Draft a simple solution for the most viable one',
      'Ask a prospective customer for honest feedback'
    ],
    reflectPromptUrdu: 'آپ کے خیال میں کسی نئی پروڈکٹ کو خریدتے وقت آپ کے لیے سب سے اہم کیا ہوتا ہے؟',
    reflectPromptEn: 'When you buy a service or product, what matters most to you?',
    reflectOptionsUrdu: [
      'فروخت کرنے والے کی ایمانداری اور رویہ',
      'معیار اور پائیداری',
      'مناسب قیمت اور وقت کی بچت',
      'فوری اور قابلِ اعتماد کسٹمر سروس'
    ],
    reflectOptionsEn: [
      'Honesty and demeanor of the seller',
      'Quality and durability',
      'Fair pricing and time savings',
      'Prompt and dependable after-sales support'
    ],
    improveTipUrdu: 'گاہک کی بات بیچ میں نہ کاٹیں۔ جب گاہک اپنی بات پوری کہہ لے تو اس کے مسئلے کو دہرائیں تاکہ اسے لگے کہ اس کی بات سنی گئی ہے۔',
    improveTipEn: 'Never interrupt a client. Mirror their problem back to them so they feel truly understood before you pitch.',
    estimatedMinutes: 6,
    points: 25,
    tagUrdu: 'کاروبار و سیلز',
    tagEn: 'Business & Sales',
    iconName: 'TrendingUp'
  },

  // =========================================================================
  // 5. 🗣️ اپنی بات مؤثر انداز میں پیش کرنا (COMMUNICATION & PERSUASION)
  // =========================================================================
  {
    id: 'pls-comm-1',
    categoryId: 'effective_communication',
    titleUrdu: '60 سیکنڈ کا ایلیویٹر پچ: اپنی بات واضح اور پرکشش بنانا',
    titleEn: 'The 60-Second Elevator Pitch: Clear, Persuasive Communication',
    subtitleUrdu: 'کسی بھی شخص، گاہک یا انٹرویو لینے والے کو ۱ منٹ میں متاثر کرنے کا طریقہ',
    subtitleEn: 'How to explain your value, idea, or skill in one crisp, engaging minute',
    keyIdeaUrdu: 'اگر آپ اپنی بات ایک منٹ میں آسان الفاظ میں نہیں سمجھا سکتے، تو آپ نے خود اسے پوری طرح نہیں سمجھا۔',
    keyIdeaEn: 'If you cannot explain your idea in 60 plain seconds, you do not understand it deeply enough.',
    sourceOrBookUrdu: 'Talk Like TED (کارمائن گیلو) و موثر ابلاغ کی تکنیک',
    sourceOrBookEn: 'Talk Like TED by Carmine Gallo & Effective Pitching Models',
    realLifeExampleUrdu: 'سلمان سے جب کوئی پوچھتا: "آپ کیا کرتے ہیں؟" تو وہ کہتا تھا: "میں کمپیوٹر کا کام کرتا ہوں۔" اس نے سیکھ کر پچ بدلی: "میں چھوٹے دکانداروں کو موبائل پر حساب کتاب کا سافٹ ویئر لگا کر دیتا ہوں تاکہ ان کا روزانہ کا ۲ گھنٹے کا وقت بچے۔" اس کے بعد ہر دوسرے شخص نے اس سے رابطہ نمبر مانگا۔',
    realLifeExampleEn: 'Salman used to say: "I do computer stuff." He updated his pitch: "I set up mobile accounting for shopkeepers so they save 2 hours daily on bookkeeping." Inquiries skyrocketed immediately.',
    learnContentUrdu: `ایک زبردست ۶۰ سیکنڈ کی گفتگو میں ۴ اجزاء ہوتے ہیں:

1. **ہک (Hook):** ایک دلچسپ مسئلہ یا سوال جس سے سننے والا متوجہ ہو۔
2. **آپ کا حل (Solution):** آپ کس طرح اس مسئلے کو آسان بناتے ہیں۔
3. **ثبوت یا ویلیو (Proof/Benefit):** اس سے دوسرے کو کیا فائدہ یا وقت/پیسے کی بچت ہوتی ہے۔
4. **دعوتِ عمل (Call to Action):** اگلا قدم کیا ہے (مثلاً: "کیا میں آپ کو کل ۲ منٹ کا سیمپل دکھاؤں؟")۔`,
    learnContentEn: `A crisp 60-second pitch has 4 parts:
1. **The Hook:** A relatable question or pain point that grabs attention.
2. **Your Solution:** How your skill or product relieves that specific pain.
3. **The Concrete Benefit:** Time saved, stress avoided, or money generated.
4. **Call to Action:** A gentle next step ("Would you like to see a quick sample tomorrow?").`,
    keyTakeawaysUrdu: [
      'تکنیکی الفاظ اور مشکل اصطلاحات کی بجائے سادہ اور عام فہم زبان استعمال کریں۔',
      'سامنے والے کے فائدے (WIIFM - What is in it for me) پر فوکس کریں۔',
      'آواز میں نرمی، نظریں ملا کر بات چیت اور مسکراہٹ بات میں اثر ڈالتی ہے۔'
    ],
    keyTakeawaysEn: [
      'Replace technical jargon with clear, conversational language.',
      'Focus on the listener’s benefit, not just your features.',
      'A warm tone, eye contact, and a confident smile multiply persuasion.'
    ],
    practiceScenarioUrdu: 'کسی گاہک یا انٹرویو میں اپنے بارے میں بتاتے ہوئے کون سا جملہ سب سے طاقتور ہے؟',
    practiceScenarioEn: 'When introducing your work to a prospective client, which statement is most impactful?',
    practiceOptionsUrdu: [
      '"میں نے بہت سے ڈپلومے کیے ہیں اور میں سب کچھ کر سکتا ہوں۔"',
      '"میں آپ کے بزنس کے لیے ایسی سوشل میڈیا پوسٹس بناتا ہوں جو نئے گاہکوں کو متوجہ کر کے آپ کی سیلز بڑھاتی ہیں۔"',
      '"بس مجھے کوئی بھی کام دے دیں، میں کر لوں گا۔"'
    ],
    practiceOptionsEn: [
      '"I hold many certificates and can do pretty much everything."',
      '"I design social media creatives that attract local customers and increase your store inquiries."',
      '"Just give me any random task and I will try to do it."'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'بہترین! مخصوص نتیجہ اور گاہک کا فائدہ بتانا ہمیشہ اعتماد پیدا کرتا ہے۔',
    practiceFeedbackEn: 'Spot on! Highlighting specific business outcomes positions you as an indispensable problem-solver.',
    applyActionUrdu: 'آئینے کے سامنے یا اپنے فون پر ۱ منٹ کی آڈیو ریکارڈ کریں جس میں اپنا نام، مہارت اور اس سے دوسروں کو ہونے والا فائدہ آسان اردو میں بتائیں۔',
    applyActionEn: 'Record a 60-second voice note explaining your skill and how it benefits someone in everyday terms.',
    applyChecklistUrdu: [
      'اپنا تعارف اور مہارت ایک سطر میں لکھیں',
      'اس سے گاہک کو ہونے والا فائدہ شامل کریں',
      '۶۰ سیکنڈ کی ریکارڈنگ کر کے سنیں اور بہتر کریں'
    ],
    applyChecklistEn: [
      'Draft your 1-sentence value statement',
      'Highlight the tangible benefit to the client',
      'Record, listen back, and refine your delivery'
    ],
    reflectPromptUrdu: 'جب آپ کسی کی بات سنتے ہیں تو آپ کو کس چیز سے سب سے زیادہ بوریت یا بددلی محسوس ہوتی ہے؟',
    reflectPromptEn: 'When listening to someone, what turns you off the most?',
    reflectOptionsUrdu: [
      'لمبی غیر ضروری تفصیلات اور اصل بات پر نہ آنا',
      'خود ستائی اور اپنی تعریفیں کرنا',
      'بے دلی اور غیر واضح دھیمی آواز',
      'دوسرے کی رائے کو بالکل اہمیت نہ دینا'
    ],
    reflectOptionsEn: [
      'Rambling details without reaching the main point',
      'Boastful self-promotion',
      'Monotone, unconfident delivery',
      'Dismissing the other person’s input'
    ],
    improveTipUrdu: 'بولنے سے پہلے ۲ سیکنڈ کا توقف لیں۔ یہ آپ کو سوچنے کا موقع دیتا ہے اور سننے والے کو لگتا ہے کہ آپ سنجیدہ اور باوقار گفتگو کر رہے ہیں۔',
    improveTipEn: 'Pause for 2 seconds before answering. It conveys thoughtfulness and composure.',
    estimatedMinutes: 5,
    points: 25,
    tagUrdu: 'موثر گفتگو و ابلاغ',
    tagEn: 'Communication & Pitching',
    iconName: 'MessageCircle'
  },

  // =========================================================================
  // 6. 🚀 زیادہ کمانے والی مہارتیں (HIGH-INCOME SKILLS & MONETIZATION)
  // =========================================================================
  {
    id: 'pls-highskill-1',
    categoryId: 'high_income_skills',
    titleUrdu: 'ہائی ڈیمانڈ اسکلز کی پہچان اور آمدنی کا فارمولا',
    titleEn: 'Identifying High-Income Skills and the Monetization Formula',
    subtitleUrdu: 'کم تنخواہ کے دائرے سے نکل کر مارکیٹ کی قیمتی صلاحیتیں حاصل کرنا',
    subtitleEn: 'How to escape the low-wage trap by acquiring market-valued specialized skills',
    keyIdeaUrdu: 'دنیا آپ کو اس بات کے پیسے نہیں دیتی کہ آپ کتنی محنت کرتے ہیں، بلکہ اس بات کے دیتی ہے کہ آپ کی مہارت کو بدلنا کتنا مشکل ہے۔',
    keyIdeaEn: 'The market does not reward raw exhaustion; it rewards scarcity and the value of your specialized skill.',
    sourceOrBookUrdu: 'So Good They Can’t Ignore You (کیل نیوپورٹ) و معاشی اصول',
    sourceOrBookEn: 'So Good They Can’t Ignore You by Cal Newport',
    realLifeExampleUrdu: 'کاشف عام ڈیٹا اینٹری کرتا تھا جس کے اسے بمشکل ۲۰۰ روپے فی گھنٹہ ملتے تھے کیونکہ یہ کام کوئی بھی کر سکتا تھا۔ اس نے ۳ ماہ لگا کر ویڈیو ایڈیٹنگ اور ای کامرس پروڈکٹ لسٹنگ سیکھی، اب وہی کاشف فی گھنٹہ ۱۵۰۰ روپے کما رہا ہے۔',
    realLifeExampleEn: 'Kashif did generic data entry for low wages because it was easily replaceable. He spent 3 months mastering product video editing and now commands 7x higher compensation for specialized outputs.',
    learnContentUrdu: `زیادہ کمانے والی مہارتوں (High-Income Skills) کی ۳ نشانیاں ہیں:

1. **مارکیٹ میں شدید ضرورت:** کاروباروں کو سیلز بڑھانے، لاگت گھٹانے یا وقت بچانے کی اشد ضرورت ہوتی ہے۔
2. **سیکھنے میں تھوڑی محنت:** جو چیز ہر کوئی ۵ منٹ میں کر لے اس کی قیمت کم ہوتی ہے؛ جو تھوڑی مہارت مانگے اس کی مانگ زیادہ ہوتی ہے۔
3. **ہنر + مارکیٹنگ کا ملاپ:** صرف ہنر کافی نہیں، ہنر کا عملی پورٹ فولیو اور گاہک تک پہنچنا ضروری ہے۔

**موجودہ دور کی چند ہائی ڈیمانڈ اسکلز:**
- ڈیجیٹل مارکیٹنگ و سیلز کاپی رائٹنگ
- موبائل ایپ و ویب ڈیولپمنٹ
- AI ٹولز کا موثر استعمال
- ویڈیو ایڈیٹنگ و کینوا ڈیزائننگ
- ای کامرس اور لوکل بزنس آٹومیشن`,
    learnContentEn: `High-income skills share 3 distinct traits:
1. **Direct Value to Businesses:** They directly increase revenue, save operational hours, or streamline bottlenecks.
2. **Barrier to Entry:** They require disciplined deliberate practice, making practitioners scarce.
3. **Skill + Distribution:** Mastery must be paired with proof of work (portfolio) and client outreach.`,
    keyTakeawaysUrdu: [
      'عام مزدور بننے کی بجائے کسی ایک شعبے میں ماہر بنیں۔',
      'روزانہ کا ۱ گھنٹہ کسی قیمتی ہنر کو سیکھنے پر لگائیں۔',
      'کام کے نمونے (Portfolio) دکھائے بغیر گاہک نہیں ملتا۔'
    ],
    keyTakeawaysEn: [
      'Specialize in a high-leverage niche rather than remaining a generalist.',
      'Invest 1 hour daily in mastering a scalable digital or technical craft.',
      'Show, do not just tell: concrete proof of work wins high-paying opportunities.'
    ],
    practiceScenarioUrdu: 'آپ نے کینوا یا ویڈیو ایڈیٹنگ سیکھی ہے۔ پہلی آمدنی کمانے کا سب سے تیز اور باوقار طریقہ کیا ہوگا؟',
    practiceScenarioEn: 'You learned Canva design or video editing. What is the fastest path to your first paying client?',
    practiceOptionsUrdu: [
      'گھر بیٹھ کر انتظار کرنا کہ کوئی خود آ کر کام دے گا',
      'قریبی ۳ دکانوں یا آن لائن پیجز کے لیے مفت میں ایک زبردست سیمپل بنا کر انہیں دکھانا اور کہنا کہ اگر پسند آئے تو اگلا کام باقاعدہ کریں',
      'سوشل میڈیا پر غیر متعلقہ پوسٹس میں اپنا نمبر اسپام کرنا'
    ],
    practiceOptionsEn: [
      'Sit back and wait for clients to magically discover you',
      'Create customized mockups for 3 local businesses or online shops and offer a low-risk trial',
      'Spam your phone number in irrelevant social media comment sections'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'شاندار! مفت سیمپل گاہک کے خطرے کو ختم کر دیتا ہے اور آپ کی صلاحیت کا عملی ثبوت پیش کرتا ہے۔',
    practiceFeedbackEn: 'Spot on! Offering a customized proof-of-work eliminates client risk and proves your capability instantly.',
    applyActionUrdu: 'Seekho کی کورسز لسٹ میں سے ایک ایسی مہارت منتخب کریں جس کی موجودہ مارکیٹ میں مانگ ہے اور آج اس کا پہلا بنیادی سبق مکمل کریں۔',
    applyActionEn: 'Choose one high-demand skill from Seekho’s catalog and complete its first module today.',
    applyChecklistUrdu: [
      'ایک ہائی ڈیمانڈ اسکل منتخب کریں',
      'اس کا پہلا عملی سبق مکمل کریں',
      'اس سبق سے ایک عملی مشق بنا کر محفوظ کریں'
    ],
    applyChecklistEn: [
      'Select a high-income skill aligned with your goals',
      'Finish the introductory hands-on lesson',
      'Create one practical artifact/exercise'
    ],
    reflectPromptUrdu: 'اگر آپ کے پاس روزانہ ایک گھنٹہ ہو تو آپ کس شعبے میں مہارت حاصل کرنا پسند کریں گے؟',
    reflectPromptEn: 'If you had 1 focused hour daily, which domain would you prioritize?',
    reflectOptionsUrdu: [
      'AI ٹولز اور پرامپٹ انجینئرنگ',
      'ڈیجیٹل مارکیٹنگ اور آن لائن سیلز',
      'گرافک ڈیزائن اور ویڈیو کری ایشن',
      'پروگرامنگ اور ویب ڈیولپمنٹ'
    ],
    reflectOptionsEn: [
      'AI tools and prompt engineering',
      'Digital marketing and online sales',
      'Graphic design and video creation',
      'Programming and web development'
    ],
    improveTipUrdu: 'اپنے کام کے اچھے نتائج کا ہمیشہ اسکرین شاٹ یا فائل محفوظ کریں، یہ کل کو آپ کا سب سے بڑا اثاثہ بنے گا۔',
    improveTipEn: 'Always screenshot and archive your best work samples into a tidy portfolio folder.',
    estimatedMinutes: 6,
    points: 25,
    tagUrdu: 'ہائی انکم اسکلز',
    tagEn: 'High-Income Skills',
    iconName: 'Zap'
  },

  // =========================================================================
  // 7. ⚖️ بہتر فیصلے کرنا (SMART DECISIONS & PROBLEM SOLVING)
  // =========================================================================
  {
    id: 'pls-decide-1',
    categoryId: 'better_decisions',
    titleUrdu: '10/10/10 کا اصول: فوری جذبات سے بالاتر ہو کر فیصلے کرنا',
    titleEn: 'The 10/10/10 Rule for Rational Decision Making',
    subtitleUrdu: 'فیصلے کا اثر ۱۰ منٹ، ۱۰ ماہ اور ۱۰ سال بعد دیکھ کر پچھتاوے سے بچیں',
    subtitleEn: 'Evaluate choices across 10 minutes, 10 months, and 10 years to eliminate regret',
    keyIdeaUrdu: 'جذبات عارضی ہوتے ہیں مگر ان کی حالت میں کیے گئے غلط فیصلوں کے نتائج مستقل ہوتے ہیں۔',
    keyIdeaEn: 'Emotions are fleeting, but the consequences of decisions made under emotional heat are permanent.',
    sourceOrBookUrdu: '10-10-10: A Life-Transforming Idea (سوزی ویلچ) و فیصلہ سازی کے اصول',
    sourceOrBookEn: '10-10-10 by Suzy Welch & Decision Frameworks',
    realLifeExampleUrdu: 'نعمان کو نوکری پر غصہ آیا اور وہ فوراً استعفیٰ دینے لگا تھا۔ اس نے 10/10/10 کا اصول سوچا: ۱۰ منٹ بعد غصہ ٹھنڈا ہوگا، ۱۰ ماہ بعد بے روزگاری میں خاندان پریشان ہوگا، ۱۰ سال بعد پچھتاوا ہوگا۔ اس نے جذباتی استعفیٰ روکا، شام کو بات چیت کر کے مسئلہ حل کر لیا۔',
    realLifeExampleEn: 'Noman felt furious at work and almost resigned in anger. He applied 10/10/10: In 10 minutes anger cools; in 10 months unemployment hits hard; in 10 years deep regret. He stayed calm and resolved the grievance rationally.',
    learnContentUrdu: `جب بھی آپ کو کسی مشکل فیصلے یا جذباتی دباؤ کا سامنا ہو تو خود سے ۳ سوالات پوچھیں:

1. **اس فیصلے کا اثر ۱۰ منٹ بعد کیا ہوگا؟** (کیا یہ وقتی سکون یا وقتی غصہ ہے؟)
2. **اس فیصلے کا اثر ۱۰ ماہ بعد کیا ہوگا؟** (کیا یہ میرے کیریئر، رشتے یا مالی حالت کو نقصان پہنچائے گا؟)
3. **اس فیصلے کا اثر ۱۰ سال بعد کیا ہوگا؟** (کیا یہ میری زندگی کے بڑے مقصد سے ہم آہنگ ہے؟)

**اہم اصول:** غصے میں کبھی فیصلہ نہ کریں، اور حد سے زیادہ خوشی میں کبھی کوئی بڑا وعدہ نہ کریں۔`,
    learnContentEn: `Whenever facing a tough fork in the road or high stress, ask:
1. **How will I feel in 10 minutes?** (Is this just temporary impulse or relief?)
2. **How will I feel in 10 months?** (Will it damage financial health, relationships, or career?)
3. **How will I feel in 10 years?** (Does this choice serve my long-term purpose?)`,
    keyTakeawaysUrdu: [
      'فوری ردعمل دینے سے پہلے ۲۴ گھنٹے کی مہلت لیں۔',
      'وقتی فائدے کے لیے طویل المدتی نقصان نہ خریدیں۔',
      'فیصلے حقائق اور مستقبل کے اثرات پر کریں، وقتی موڈ پر نہیں۔'
    ],
    keyTakeawaysEn: [
      'Take a 24-hour cooling buffer before irreversible decisions.',
      'Never trade long-term security for short-term emotional gratification.',
      'Base choices on future consequences, not momentary mood swings.'
    ],
    practiceScenarioUrdu: 'آپ کو ایک دوست نے ایسی اسکیم میں پیسے لگانے کا کہا جس میں ایک ہفتے میں ڈبل ہونے کا دعویٰ ہے۔ فیصلہ کیسے کریں گے؟',
    practiceScenarioEn: 'A friend promises to double your money in one week through an unverified scheme. How do you decide?',
    practiceOptionsUrdu: [
      'لالچ میں آ کر ساری جمع پونجی فوری لگا دینا',
      '10/10/10 اصول لگانا: سمجھنا کہ یہ واضح فراڈ ہے اور ۱۰ ماہ بعد شدید مالی نقصان اور پچھتاوا ہوگا، لہٰذا نرمی سے انکار کرنا',
      'دوست کی ناراضگی کے ڈر سے خاموشی سے پیسے دے دینا'
    ],
    practiceOptionsEn: [
      'Hand over all life savings out of greed',
      'Apply 10/10/10: recognize the high probability of total loss and regret in 10 months, and decline firmly',
      'Yield to peer pressure because you fear offending your friend'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'بہترین! لالچ اور آسان راستے ہمیشہ مالی تباہی کا سبب بنتے ہیں۔ دانشمندانہ انکار ہی اصل تحفظ ہے۔',
    practiceFeedbackEn: 'Spot on! High-return get-rich-quick traps prey on emotion. Rational scrutiny protects your hard-earned assets.',
    applyActionUrdu: 'آج کسی ایک فیصلے کے بارے میں سوچیں جس میں آپ شش و پنج کا شکار ہیں، اور 10/10/10 کا تجزیہ کاغذ پر لکھیں۔',
    applyActionEn: 'Take a decision you are currently contemplating and write out your 10-minute, 10-month, and 10-year impact projection.',
    applyChecklistUrdu: [
      'زیرِ غور فیصلہ لکھیں',
      '۱۰ منٹ، ۱۰ ماہ اور ۱۰ سال کا اثر نوٹ کریں',
      'سب سے محفوظ اور تعمیری انتخاب کریں'
    ],
    applyChecklistEn: [
      'Write down the decision at hand',
      'Project impacts at 10m, 10mo, and 10yr horizons',
      'Select the path with highest long-term integrity'
    ],
    reflectPromptUrdu: 'ماضی میں آپ کا کون سا فیصلہ وقتی جذبات میں ہوا تھا جس سے آپ نے سبق سیکھا؟',
    reflectPromptEn: 'Which past decision taught you the danger of momentary emotional impulse?',
    reflectOptionsUrdu: [
      'غصے میں کسی قریبی شخص کو تلخ جواب دینا',
      'جوش میں آ کر غیر ضروری مہنگی چیز خریدنا',
      'بغیر تحقیق کے کسی غلط بات پر یقین کرنا',
      'میں ہمیشہ سوچ سمجھ کر فیصلہ کرتا ہوں'
    ],
    reflectOptionsEn: [
      'Harsh words blurted out in anger',
      'An impulsive luxury purchase',
      'Believing unverified rumors without checking',
      'I generally weigh choices carefully'
    ],
    improveTipUrdu: 'بڑے فیصلوں سے پہلے ہمیشہ کسی مخلص اور تجربہ کار خیر خواہ سے مشورہ (استخارہ و مشاورت) کریں۔',
    improveTipEn: 'Always combine objective data with sincere mentorship and ethical counsel before life-altering choices.',
    estimatedMinutes: 5,
    points: 25,
    tagUrdu: 'فیصلہ سازی و حکمت',
    tagEn: 'Decision Making',
    iconName: 'ShieldCheck'
  },

  // =========================================================================
  // 8. 🤝 لوگوں کو سمجھنا (UNDERSTANDING PEOPLE & RELATIONSHIPS)
  // =========================================================================
  {
    id: 'pls-people-1',
    categoryId: 'understanding_people',
    titleUrdu: 'فعال سماعت اور ہمدردی: لوگوں کے دل جیتنے کا فن',
    titleEn: 'Active Listening and Empathetic Rapport',
    subtitleUrdu: 'جواب تیار کرنے کی بجائے دوسرے کا درد سمجھنے کے لیے سنیں',
    subtitleEn: 'Listen to understand rather than simply waiting for your turn to reply',
    keyIdeaUrdu: 'ہر انسان کی سب سے گہری خواہش یہ ہوتی ہے کہ اسے سنا جائے، سمجھا جائے اور اس کی قدر کی جائے۔',
    keyIdeaEn: 'The deepest human craving is the desire to be heard, understood, and genuinely valued.',
    sourceOrBookUrdu: 'How to Win Friends and Influence People (ڈیل کارنیگی)',
    sourceOrBookEn: 'How to Win Friends and Influence People by Dale Carnegie',
    realLifeExampleUrdu: 'راشد کا اپنے بیٹے یا ساتھی سے اکثر جھگڑا رہتا تھا کیونکہ وہ بات مکمل ہونے سے پہلے ڈانٹ دیتا تھا۔ اس نے خاموشی سے پوری بات سننے اور پھر کہنے کا معمول بنایا: "میں آپ کی پریشانی سمجھ رہا ہوں، آئیے مل کر حل نکالتے ہیں۔" اس سے تمام دوریاں ختم ہو گئیں۔',
    realLifeExampleEn: 'Rashid used to argue constantly because he cut people off mid-sentence. When he started letting people finish fully and validated their feelings before proposing solutions, conflicts dissolved.',
    learnContentUrdu: `بہترین گفتگو وہ نہیں ہوتی جس میں آپ زیادہ بولیں، بلکہ وہ ہوتی ہے جس میں سامنے والا یہ محسوس کرے کہ اس کی بات کو عزت دی گئی ہے۔

**فعال سماعت (Active Listening) کے ۴ اصول:**
1. **موبائل سائیڈ پر رکھیں:** جب کوئی بات کرے تو اپنی پوری توجہ اور نظریں ان پر رکھیں۔
2. **بیچ میں نہ ٹوکیں:** سامنے والے کو اپنی بات اور جذبات مکمل کرنے دیں۔
3. **تصدیقی جملے بولیں:** "صحیح"، "بالکل"، "آپ بالکل ٹھیک کہہ رہے ہیں"۔
4. **دوسرے کے زاویے سے سوچیں:** اگر آپ اس کی جگہ ہوتے تو کیسا محسوس کرتے؟`,
    learnContentEn: `Great conversationalists do not dominate conversations; they create safe, attentive space for others.
1. **Eliminate Screens:** Put down your device and maintain warm, present eye contact.
2. **Zero Interruptions:** Let the speaker finish their thought completely without jumping in.
3. **Verbal Affirmation:** Use gentle nods and acknowledgment to signal active engagement.
4. **Perspective Taking:** Ask yourself how you would feel standing in their exact shoes.`,
    keyTakeawaysUrdu: [
      'بحث جیت کر بھی اکثر ہم انسان ہار جاتے ہیں؛ تعلق کو انا پر ترجیح دیں۔',
      'لوگوں کے نام یاد رکھیں اور ان کی مخلصانہ تعریف کریں۔',
      'تنقید اور الزام تراشی سے ہمیشہ پرہیز کریں۔'
    ],
    keyTakeawaysEn: [
      'Winning an argument often means losing a relationship; prioritize empathy over ego.',
      'Remember people’s names and offer sincere, honest appreciation.',
      'Abstain from harsh public criticism and personal blame.',
    ],
    practiceScenarioUrdu: 'ایک ساتھی پریشان حالت میں آپ کے پاس آ کر اپنے مسئلے کی شکایت کر رہا ہے۔ بہترین رویہ کیا ہوگا؟',
    practiceScenarioEn: 'A coworker or family member comes to you visibly distressed and venting. What is the most supportive response?',
    practiceOptionsUrdu: [
      'ان کا مذاق اڑانا یا کہنا کہ تم ہمیشہ ہی روتے رہتے ہو',
      'پوری توجہ سے ان کی سننا، ان کے جذبات کو تسلیم کرنا اور پھر ہمدردی سے پوچھنا کہ میں کیا مدد کر سکتا ہوں',
      'ان کی بات کاٹ کر اپنے مسائل کا رونا شروع کر دینا'
    ],
    practiceOptionsEn: [
      'Dismiss their feelings or mock them for complaining',
      'Listen with full presence, validate their distress, and gently ask how you can support them',
      'Cut them off and hijack the conversation with your own troubles'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'شاباش! ہمدردانہ سماعت انسان کو ذہنی سکون دیتی ہے اور باہمی رشتے کو انتہائی مضبوط بناتی ہے۔',
    practiceFeedbackEn: 'Exactly! Sincere, empathetic listening builds lasting loyalty and emotional safety.',
    applyActionUrdu: 'آج جب بھی کوئی آپ سے بات کرے (والدین، بچے، ساتھی یا گاہک)، فون ایک طرف رکھ کر بغیر ٹوکے کم از کم ۳ منٹ پوری توجہ سے سنیں۔',
    applyActionEn: 'During your next conversation today, put away your phone and practice 3 uninterrupted minutes of pure active listening.',
    applyChecklistUrdu: [
      'موبائل فون سائیڈ پر رکھیں',
      'پوری توجہ اور نظروں کے رابطے سے سنیں',
      'بات ختم ہونے پر ہمدردانہ جواب دیں'
    ],
    applyChecklistEn: [
      'Put all screens out of sight',
      'Listen with present posture and eye contact',
      'Respond with empathy and respect'
    ],
    reflectPromptUrdu: 'آپ کے خیال میں جب کوئی آپ کی بات توجہ سے نہیں سنتا تو آپ کو کیسا محسوس ہوتا ہے؟',
    reflectPromptEn: 'How does it make you feel when someone is distracted while you are speaking to them?',
    reflectOptionsUrdu: [
      'بے عزتی اور عدم توجہی کا احساس',
      'غصہ اور بات بند کر دینے کا دل',
      'مایوسی کہ میری رائے کی کوئی اہمیت نہیں',
      'میں عادی ہو چکا ہوں'
    ],
    reflectOptionsEn: [
      'Disrespected and ignored',
      'Frustrated and inclined to stop talking',
      'Disheartened that my voice doesn’t matter',
      'Indifferent'
    ],
    improveTipUrdu: 'لوگوں کو اصلاح دیتے وقت "سینڈوچ تکنیک" استعمال کریں: پہلے سچی تعریف، پھر نرمی سے اصلاح کا مشورہ، اور آخر میں دوبارہ حوصلہ افزائی۔',
    improveTipEn: 'When offering constructive feedback, use the sandwich method: sincere praise, gentle suggestion, encouraging closing.',
    estimatedMinutes: 5,
    points: 25,
    tagUrdu: 'انسانی تعلقات و نفسیات',
    tagEn: 'Interpersonal Dynamics',
    iconName: 'Users'
  },

  // =========================================================================
  // 9. 👑 لیڈرشپ سیکھنا (LEADERSHIP & TEAMWORK)
  // =========================================================================
  {
    id: 'pls-lead-1',
    categoryId: 'leadership_teamwork',
    titleUrdu: 'حقیقی لیڈرشپ: الزام لگانے کی بجائے مکمل ذمہ داری لینا',
    titleEn: 'Extreme Ownership: Leading by Taking Responsibility',
    subtitleUrdu: 'مشکل حالات میں بہانے بنانے کی بجائے حل نکالنے کا قائدانہ رویہ',
    subtitleEn: 'Moving from excuses and finger-pointing to proactive leadership',
    keyIdeaUrdu: 'ایک کمزور شخص دوسروں پر الزام لگاتا ہے، لیکن ایک سچا لیڈر خود ذمہ داری لے کر حل نکالتا ہے۔',
    keyIdeaEn: 'A weak character searches for scapegoats; a true leader assumes ownership and drives the resolution.',
    sourceOrBookUrdu: 'Extreme Ownership (جوکو ولنک) و اخلاقی قیادت',
    sourceOrBookEn: 'Extreme Ownership by Jocko Willink & Ethical Leadership Models',
    realLifeExampleUrdu: 'پروجیکٹ میں غلطی ہونے پر ساجد نے ٹیم پر غصہ نکالنے کی بجائے کہا: "یہ میری نگرانی کی کمی تھی، آئیے اب دیکھیں کہ ہم مل کر اسے کیسے ٹھیک کر سکتے ہیں۔" ٹیم نے اس کی عزت کرتے ہوئے رات جاگ کر کام ٹھیک کر دیا۔',
    realLifeExampleEn: 'When an error occurred, Sajid did not berate his team. He stated: "I failed to provide clear enough guidelines. Here is how we fix it together." Inspired by his integrity, the team rallied and resolved the issue seamlessly.',
    learnContentUrdu: `لیڈرشپ کسی کرسی یا عہدے کا نام نہیں، بلکہ ذمہ داری اور خدمت کا رویہ ہے۔

**قائدانہ طرزِ فکر کے ۳ اصول:**
1. **نو ایکسکیوز (No Excuses):** حالات، موسم یا ساتھیوں کو قصوروار ٹھہرانا بند کریں اور پوچھیں: "اب میں کیا بہتر کر سکتا ہوں؟"
2. **مثال بن کر رہنمائی:** جو کام آپ دوسروں سے چاہتے ہیں (وقت کی پابندی، ایمانداری، محنت)، وہ پہلے خود کر کے دکھائیں۔
3. **ساتھیوں کی کامیابی میں اپنی خوشی:** ایک اچھا لیڈر دوسروں کو آگے بڑھنے کے مواقع دیتا ہے اور ان کی تعریف کرتا ہے۔`,
    learnContentEn: `Leadership is not a title; it is moral responsibility and servant leadership in action.
1. **Zero Excuses:** Stop blaming circumstances or colleagues; ask: "What can I control and improve right now?"
2. **Lead by Example:** Embody the exact standards (punctuality, integrity, diligence) you expect from others.
3. **Empower Others:** Great leaders celebrate team accomplishments and share credit generously.`,
    keyTakeawaysUrdu: [
      'ذمہ داری قبول کرنے سے عزت اور اثر و رسوخ میں اضافہ ہوتا ہے۔',
      'بحران کے وقت پرسکون رہنا اور حل پر فوکس کرنا لیڈر کی پہچان ہے۔',
      'لوگ آپ کے الفاظ سے زیادہ آپ کے عمل کی پیروی کرتے ہیں۔'
    ],
    keyTakeawaysEn: [
      'Assuming total ownership instantly builds trust and natural authority.',
      'Remaining composed during crises is the hallmark of a resilient leader.',
      'People follow your everyday deeds far more than your spoken words.'
    ],
    practiceScenarioUrdu: 'آپ کی زیرِ نگرانی کام میں ایک بڑی غلطی ہو گئی۔ بہترین لیڈرشپ کیا ہوگی؟',
    practiceScenarioEn: 'An error occurs under your team’s watch. What reflects genuine leadership?',
    practiceOptionsUrdu: [
      'کسی جونیئر ملازم پر سارا ملبہ ڈال کر خود کو بچانا',
      'سامنے آ کر غلطی تسلیم کرنا، اس کے سدباب کا فوری پلان بنانا اور مستقبل کے لیے سسٹم کو بہتر کرنا',
      'غلطی کو چھپانے کی کوشش کرنا تاکہ کسی کو پتہ نہ چلے'
    ],
    practiceOptionsEn: [
      'Blame an intern or junior teammate to protect your own image',
      'Own the misstep publicly, roll out an immediate recovery plan, and refine the system for the future',
      'Attempt to hide the mistake and hope nobody notices'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'شاباش! غلطی تسلیم کرنا اور حل کی قیادت کرنا ہی اصل لیڈر کو الگ کرتا ہے۔',
    practiceFeedbackEn: 'Exactly! Owning mistakes and spearheading the solution builds unbreakable credibility.',
    applyActionUrdu: 'آج اپنے گھر، دفتر یا ساتھیوں میں کسی ایسے کام کی خود ذمہ داری لیں جو کافی عرصے سے التوا کا شکار تھا، اور بغیر احسان جتائے اسے مکمل کریں۔',
    applyActionEn: 'Step up and take ownership of one lingering unresolved task at home or work today without waiting to be asked.',
    applyChecklistUrdu: [
      'التوا کا شکار کام منتخب کریں',
      'خاموشی سے ذمہ داری لے کر مکمل کریں',
      'ساتھیوں کا حوصلہ بڑھائیں'
    ],
    applyChecklistEn: [
      'Select a stalled task needing initiative',
      'Take complete ownership and resolve it',
      'Uplift your peers with encouragement'
    ],
    reflectPromptUrdu: 'آپ جس لیڈر یا استاد کی دل سے عزت کرتے ہیں، اس میں کون سی ایسی صفت ہے جو آپ کو سب سے زیادہ پسند ہے؟',
    reflectPromptEn: 'What quality do you admire most in leaders or mentors you respect?',
    reflectOptionsUrdu: [
      'ان کی عاجزی اور سب کے ساتھ یکساں عزت کا سلوک',
      'مشکل وقت میں ان کا صبر اور پرسکون فیصلہ',
      'ان کا قول و فعل کا یکساں ہونا (سچائی)',
      'دوسروں کو آگے لانا اور حوصلہ دینا'
    ],
    reflectOptionsEn: [
      'Humility and treating everyone with equal dignity',
      'Calm resolve during adversity',
      'Authentic integrity (actions matching words)',
      'Mentoring and empowering others to succeed'
    ],
    improveTipUrdu: 'جب ٹیم کامیاب ہو تو کریڈٹ اپنے ساتھیوں کو دیں؛ جب کوئی رکاوٹ آئے تو سب سے آگے خود کھڑے ہوں۔',
    improveTipEn: 'When the team wins, distribute the credit; when setbacks occur, stand in front and protect the team.',
    estimatedMinutes: 5,
    points: 25,
    tagUrdu: 'قیادت و ٹیم ورک',
    tagEn: 'Leadership & Integrity',
    iconName: 'Award'
  },

  // =========================================================================
  // 10. ⏳ وقت کو دولت بنانا (TIME, ATTENTION & ENERGY MANAGEMENT)
  // =========================================================================
  {
    id: 'pls-time-1',
    categoryId: 'time_energy_management',
    titleUrdu: 'آئزن ہاور میٹرکس: اہم بمقابلہ فوری کاموں کی تمیز',
    titleEn: 'The Eisenhower Matrix: Urgent vs Important Mastery',
    subtitleUrdu: 'سارا دن مصروف رہنے کے باوجود کچھ حاصل نہ ہونے کے احساس کو ختم کریں',
    subtitleEn: 'How to break the illusion of busywork and focus relentlessly on high-impact priorities',
    keyIdeaUrdu: 'جو کام سب سے زیادہ شور مچاتا ہے ضروری نہیں کہ وہ سب سے زیادہ اہم بھی ہو۔',
    keyIdeaEn: 'What is urgent is seldom important, and what is important is seldom loud.',
    sourceOrBookUrdu: 'The 7 Habits of Highly Effective People (اسٹیفن کووی)',
    sourceOrBookEn: 'The 7 Habits of Highly Effective People by Stephen Covey',
    realLifeExampleUrdu: 'فرحان سارا دن واٹس ایپ نوٹیفکیشنز اور چھوٹی موٹی ای میلز کے جواب میں ضائع کر دیتا تھا اور اس کا اصل پروجیکٹ ادھورا رہتا تھا۔ اس نے صبح کا پہلا ڈیڑھ گھنٹہ موبائل بند کر کے صرف اپنے اہم کام پر لگانا شروع کیا۔ اس کی پیداواری صلاحیت تین گنا بڑھ گئی۔',
    realLifeExampleEn: 'Farhan spent his entire day reacting to endless notifications while his core project stagnated. He instituted a 90-minute morning offline block dedicated purely to his high-leverage goals, tripling his weekly output.',
    learnContentUrdu: `اپنے روزانہ کے کاموں کو ۴ خانوں میں تقسیم کریں:

1. **اہم اور فوری (کریں):** ایمرجنسی، ڈیڈ لائنز اور ہنگامی مسائل۔
2. **اہم لیکن غیر فوری (شیڈول کریں - سب سے قیمتی خانہ):** پڑھائی، ہنر سیکھنا، صحت، ورزش اور خاندانی وقت۔
3. **غیر اہم مگر فوری (دوسروں کے حوالے کریں):** بے وقت کالز اور غیر ضروری چھوٹے موٹے تقاضے۔
4. **نہ اہم نہ فوری (ختم کریں):** گھنٹوں بے مقصد ریلز/شارٹس اسکرولنگ۔

**کامیاب لوگوں کا راز:** وہ خانہ نمبر ۲ (اہم مگر غیر فوری کاموں) کو روزانہ ترجیح دیتے ہیں۔`,
    learnContentEn: `Categorize daily commitments into the 4 Eisenhower Quadrants:
1. **Urgent & Important (Do):** True crises and immediate deadlines.
2. **Important but Not Urgent (Schedule - The Goldmine):** Learning skills, health, deep planning, strategic goals.
3. **Urgent but Not Important (Delegate/Minimize):** Interruptions, reactive messages.
4. **Neither Urgent nor Important (Eliminate):** Endless mindless doom-scrolling.`,
    keyTakeawaysUrdu: [
      'صبح کے پہلے ۹۰ منٹ دنیا کو نہیں بلکہ اپنے سب سے اہم کام کو دیں۔',
      'ہر غیر اہم کام کو مسکرا کر "نہ" کہنا سیکھیں۔',
      'توانائی کا انتظام وقت کے انتظام سے زیادہ اہم ہے (نیند اور خوراک کا خیال رکھیں)۔'
    ],
    keyTakeawaysEn: [
      'Dedicate your prime morning energy to Quadrant 2 strategic priorities.',
      'Learn to politely decline non-essential demands on your attention.',
      'Manage energy alongside time: deep rest fuels sharp focus.'
    ],
    practiceScenarioUrdu: 'صبح اٹھتے ہی سب سے پہلا قدم کیا ہونا چاہیے؟',
    practiceScenarioEn: 'What is the most productive first morning ritual?',
    practiceOptionsUrdu: [
      'آنکھ کھلتے ہی ۱ گھنٹہ انسٹاگرام اور خبریں اسکرول کرنا',
      'نماز، پرسکون پانی پینا اور دن کے ۳ سب سے اہم کاموں (Top 3 Priorities) کی لسٹ بنا کر پہلے کام پر فوکس کرنا',
      'بغیر کسی ترتیب کے جو سامنے آئے وہ کرنا شروع کر دینا'
    ],
    practiceOptionsEn: [
      'Instantly open social media and doom-scroll for an hour',
      'Morning mindfulness/prayer, hydration, and identifying your Top 3 daily priorities before screens',
      'Dive randomly into whatever reactive message arrived first'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'شاندار! دن کا آغاز شعوری ترجیحات کے ساتھ کرنا ہی کامیابی کی ضمانت ہے۔',
    practiceFeedbackEn: 'Spot on! Starting the day proactively rather than reactively preserves mental clarity.',
    applyActionUrdu: 'آج اپنے فون پر اسکرین ٹائم چیک کریں اور سوشل میڈیا کی کسی ایک ایپ پر روزانہ کی ۳۰ منٹ کی حد (App Limit) لگائیں۔',
    applyActionEn: 'Review your screen time today and set a strict 30-minute daily limit on your most distracting app.',
    applyChecklistUrdu: [
      'آج کے ۳ اہم ترین کام لکھیں',
      'غیر ضروری ایپس کے نوٹیفکیشنز بند کریں',
      'ایک گھنٹہ مکمل یکسوئی سے مطالعہ یا کام کریں'
    ],
    applyChecklistEn: [
      'Identify Top 3 non-negotiable priorities today',
      'Mute non-essential app notifications',
      'Complete one 60-minute deep-work session'
    ],
    reflectPromptUrdu: 'دن بھر میں آپ کا سب سے زیادہ قیمتی وقت کس چیز میں ضائع ہوتا ہے؟',
    reflectPromptEn: 'Where does your most valuable productive time leak during the day?',
    reflectOptionsUrdu: [
      'شارٹس اور ریلز کی لامتناہی اسکرولنگ',
      'غیر ضروری گپ شپ اور بیٹھکیں',
      'ایک کام کو ادھورا چھوڑ کر دوسرے پر چھلانگ لگانا',
      'بہت زیادہ سوچنا اور شروعات میں تاخیر'
    ],
    reflectOptionsEn: [
      'Endless short-form video feeds',
      'Aimless chatting and unfocused gatherings',
      'Task switching and lack of focus',
      'Overthinking and analysis paralysis'
    ],
    improveTipUrdu: 'پومودورو تکنیک آزمائیں: ۲۵ منٹ مکمل فوکس کے ساتھ کام کریں اور پھر ۵ منٹ کا بریک لیں۔ دماغ کبھی نہیں تھکے گا۔',
    improveTipEn: 'Use Pomodoro intervals: 25 minutes of laser-focused work followed by a strict 5-minute break.',
    estimatedMinutes: 5,
    points: 25,
    tagUrdu: 'وقت و توانائی کا انتظام',
    tagEn: 'Time & Energy Management',
    iconName: 'Clock'
  },

  // =========================================================================
  // 11. 📚 بہترین کتابوں سے سیکھنا (WISDOM FROM GREAT BOOKS)
  // =========================================================================
  {
    id: 'pls-books-1',
    categoryId: 'learning_from_books',
    titleUrdu: 'The Psychology of Money: دولت دکھاوے میں نہیں، بچت میں ہے',
    titleEn: 'The Psychology of Money: Wealth is What You Don’t See',
    subtitleUrdu: 'مورگن ہاؤسل کی شہرہ آفاق کتاب کا خلاصہ اور مالیاتی آزادی کا راز',
    subtitleEn: 'Key lessons from Morgan Housel on wealth, behavior, and quiet financial freedom',
    keyIdeaUrdu: 'امیر ہونا (Rich) اور دولت مند ہونا (Wealthy) دو الگ باتیں ہیں۔ امیر وہ ہے جو دکھاتا ہے، دولت مند وہ ہے جس کے پاس آزادی ہے۔',
    keyIdeaEn: 'Being rich is current income spent visibly; being wealthy is the unspent flexibility and freedom you own.',
    sourceOrBookUrdu: 'The Psychology of Money (مورگن ہاؤسل)',
    sourceOrBookEn: 'The Psychology of Money by Morgan Housel',
    realLifeExampleUrdu: 'دو دوست تھے: ایک نے مہنگی قسطوں پر گاڑی لی تاکہ لوگ تعریف کریں، دوسرا پرانی موٹرسائیکل چلا کر رقم کاروبار اور بچت میں لگاتا رہا۔ ۵ سال بعد پہلا قرض کے بوجھ میں تھا جبکہ دوسرا اپنا ذاتی مکان اور پرسکون کاروبار بنا چکا تھا۔',
    realLifeExampleEn: 'One friend bought an expensive car on high-interest debt to impress peers; the other rode a simple motorbike and invested his surplus. Five years later, the second owned a debt-free home and business.',
    learnContentUrdu: `اس کتاب کے ۳ بنیادی اسباق:

1. **دولت آزادی کا نام ہے:** پیسے کا سب سے بڑا فائدہ یہ ہے کہ یہ آپ کو اپنے وقت پر قابو دیتا ہے تاکہ آپ اپنی مرضی سے زندگی گزار سکیں۔
2. **دکھاوے کا جال:** جب آپ کسی کو مہنگی گاڑی میں دیکھتے ہیں تو آپ اس کی تعریف نہیں کرتے بلکہ یہ سوچتے ہیں کہ اگر میرے پاس یہ ہوتی تو لوگ میری تعریف کرتے۔ دکھاوے کی خریداری خود کو غریب رکھنے کا سب سے تیز طریقہ ہے۔
3. **صبر اور کمپاؤنڈنگ (Compounding):** چھوٹی چھوٹی بچت سالوں میں ایسی بڑی طاقت بن جاتی ہے کہ انسان حیران رہ جاتا ہے۔`,
    learnContentEn: `Key takeaways from The Psychology of Money:
1. **Wealth Equals Autonomy:** The highest dividend money pays is the ability to control your time.
2. **The Display Trap:** Spending money to show people how much money you have is the fastest way to have less money.
3. **Patience & Compounding:** Modest, consistent returns sustained over long periods produce staggering financial resilience.`,
    keyTakeawaysUrdu: [
      'اپنی خوشی کو دوسروں کے سامنے فخر جتانے سے آزاد کریں۔',
      'بچت آمدنی مائنس انا (Ego) کے برابر ہے۔ جتنا دکھاوا کم ہوگا، بچت اتنی زیادہ ہوگی۔',
      'مالی سکون کسی بھی لگژری آئٹم سے زیادہ قیمتی ہے۔'
    ],
    keyTakeawaysEn: [
      'Untangle self-worth from material display.',
      'Savings = Income minus Ego. Taming ego is the highest-leverage wealth multiplier.',
      'Peace of mind and freedom vastly outshine fleeting status symbols.'
    ],
    practiceScenarioUrdu: 'آپ کے پاس اتنے پیسے جمع ہو گئے ہیں کہ آپ نیا مہنگا فون خرید سکتے ہیں جبکہ پرانا بالکل ٹھیک چل رہا ہے۔ بہترین فیصلہ کیا ہوگا؟',
    practiceScenarioEn: 'You saved enough to buy the newest smartphone even though your current phone works perfectly. What is the wisest choice?',
    practiceOptionsUrdu: [
      'فوراً خرید لینا تاکہ دوستوں پر رعب پڑے',
      'پرانا فون استعمال جاری رکھنا اور رقم کو اپنی تعلیم، ہنر یا منافع بخش بچت میں محفوظ رکھنا',
      'قرض لے کر اس سے بھی زیادہ مہنگا ماڈل لینا'
    ],
    practiceOptionsEn: [
      'Buy it immediately to impress friends',
      'Keep using the functional phone and direct those savings towards education, skills, or emergency reserves',
      'Take a loan to buy an even more extravagant model'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'زبردست! پیسہ بچا کر اپنے مستقبل پر لگانا ہی حقیقی دولت مندی کی علامت ہے۔',
    practiceFeedbackEn: 'Bingo! Retaining capital to invest in capability and security creates true wealth.',
    applyActionUrdu: 'آج ایک کاغذ پر اپنی زندگی کے سب سے بڑے ۳ مالی مقاصد لکھیں اور دیکھیں کہ کون سا دکھاوے کا خرچ ان کے راستے میں رکاوٹ بن رہا ہے۔',
    applyActionEn: 'Write down your 3 core financial goals and pinpoint which vanity expenses you will eliminate to reach them.',
    applyChecklistUrdu: [
      'اپنے ۳ اہم مالی اہداف لکھیں',
      'دکھاوے کے ایک خرچ کو ترک کرنے کا عہد کریں',
      'بچت کو محفوظ جگہ منتقل کریں'
    ],
    applyChecklistEn: [
      'Document your 3 primary financial objectives',
      'Identify one status-driven expense to eliminate',
      'Safeguard the saved amount'
    ],
    reflectPromptUrdu: 'آپ کے نزدیک "کامیاب اور خوشحال انسان" کا حقیقی معیار کیا ہے؟',
    reflectPromptEn: 'In your eyes, what defines true wealth and personal success?',
    reflectOptionsUrdu: [
      'اپنے وقت کی آزادی اور قرض سے پاک پرسکون زندگی',
      'مہنگی گاڑیاں، برانڈڈ کپڑے اور سماجی دکھاوا',
      'صحت مند خاندان اور روحانی سکون',
      'بڑا عہدہ اور لوگوں پر اثر و رسوخ'
    ],
    reflectOptionsEn: [
      'Time autonomy and a peaceful, debt-free existence',
      'Expensive cars, branded attire, and social status display',
      'Healthy family, strong character, and inner peace',
      'High-status title and social influence'
    ],
    improveTipUrdu: 'ہر ماہ کم از کم ایک معیاری کتاب یا اس کا خلاصہ ضرور پڑھیں؛ کتابوں کی حکمت سالوں کی ٹھوکروں سے بچاتی ہے۔',
    improveTipEn: 'Commit to absorbing the core insights of at least one transformative book per month.',
    estimatedMinutes: 6,
    points: 25,
    tagUrdu: 'کتابوں کی حکمت',
    tagEn: 'Book Wisdom',
    iconName: 'BookOpen'
  },

  // =========================================================================
  // 12. ⚡ علم کو عمل میں بدلنا (TURNING KNOWLEDGE INTO ACTION)
  // =========================================================================
  {
    id: 'pls-action-1',
    categoryId: 'knowledge_into_action',
    titleUrdu: '24 گھنٹے کا ایکشن رول: سیکھی ہوئی بات پر فوری عمل',
    titleEn: 'The 24-Hour Implementation Rule: Immediate Action',
    subtitleUrdu: 'معلومات کو صرف ذہن میں جمع کرنے کی بجائے فوری عملی نتائج میں بدلیں',
    subtitleEn: 'Bridging the knowing-doing gap by taking a concrete action within 24 hours',
    keyIdeaUrdu: 'صرف جاننا کافی نہیں، ہمیں عمل کرنا ہوگا۔ صرف ارادہ کافی نہیں، ہمیں قدم اٹھانا ہوگا۔',
    keyIdeaEn: 'Knowing is not enough; we must apply. Willing is not enough; we must execute.',
    sourceOrBookUrdu: 'The 5 Second Rule (میل رابنز) و عملی حکمت',
    sourceOrBookEn: 'The 5 Second Rule by Mel Robbins & Execution Principles',
    realLifeExampleUrdu: 'عامر نے درجنوں بزنس کورسز اور کتابیں پڑھ رکھی تھیں مگر عملی طور پر کچھ نہیں کیا۔ جب اس نے "24 گھنٹے کا رول" اپنایا کہ ہر نئی بات پر اگلے ۲۴ گھنٹے میں ایک عملی کام کرنا ہے، تو ۳ ماہ کے اندر اس کا اپنا چھوٹا آن لائن اسٹور فعال ہو گیا۔',
    realLifeExampleEn: 'Aamir hoarded dozens of online courses but took zero real action. Adopting the 24-hour implementation rule forced him to execute one micro-step for every lesson, launching his online store in 90 days.',
    learnContentUrdu: `جب آپ کوئی نئی بات سیکھتے ہیں تو آپ کا دماغ ۷۲ گھنٹوں میں اس کا ۹۰٪ حصہ بھول جاتا ہے اگر آپ اس پر عمل نہ کریں۔

**24 گھنٹے کے ایکشن رول کا طریقہ:**
1. **ایک چھوٹا قدم منتخب کریں:** کوئی بھی ہنر، بات یا حکمت سیکھیں تو اپنے آپ سے پوچھیں: "میں اگلے ۲۴ گھنٹوں میں اس پر کیا ایک چھوٹا سا کام کر سکتا ہوں؟"
2. **۵ سیکنڈ کی الٹی گنتی (5-4-3-2-1 Go):** جیسے ہی دل میں کسی اچھے کام کا خیال آئے، ۵ سے ۱ تک گنیں اور فوری حرکت میں آئیں۔ دماغ کو بہانے بنانے کا موقع نہ دیں۔
3. **دوسروں کو سکھائیں:** جو بات آپ نے سیکھی ہے وہ گھر میں کسی کو یا دوست کو سکھا دیں، اس سے وہ بات ہمیشہ کے لیے آپ کے ذہن میں پکی ہو جائے گی۔`,
    learnContentEn: `Without immediate execution, 90% of retained knowledge decays within 72 hours.
1. **Identify the 24-Hour Action:** After learning any concept, ask: "What is one concrete physical action I can take in the next 24 hours?"
2. **The 5-Second Rule:** Count backwards 5-4-3-2-1 and take physical action immediately before brain rationalizes excuses.
3. **Teach to Solidify:** Share what you learned with someone else; teaching is the fastest path to mastery.`,
    keyTakeawaysUrdu: [
      'ایک گرام عمل ایک ٹن معلومات سے زیادہ وزنی ہے۔',
      'کمال (Perfection) کا انتظار نہ کریں، غلطیوں کے ساتھ آغاز کریں اور راستے میں سدھاریں۔',
      'عمل کرنے سے اعتماد آتا ہے، سوچتے رہنے سے شک اور خوف بڑھتا ہے۔'
    ],
    keyTakeawaysEn: [
      'An ounce of real execution outweighs a ton of passive theory.',
      'Do not wait for flawless conditions; launch imperfectly and refine along the journey.',
      'Action produces confidence; passive rumination breeds doubt and anxiety.'
    ],
    practiceScenarioUrdu: 'آپ نے کینوا یا فوٹو شاپ میں لوگو بنانا سیکھا ہے۔ اگلا بہترین قدم کیا ہے؟',
    practiceScenarioEn: 'You just completed a lesson on logo design. What is the most effective next step?',
    practiceOptionsUrdu: [
      'مزید ۱۰ ویڈیوز دیکھنا اور کوئی لوگو نہ بنانا',
      'اگلے ۲۴ گھنٹے میں خود سے کسی فرضی یا اصلی محلے کے کاروبار کے لیے ایک خوبصورت لوگو بنا کر محفوظ کرنا',
      'یہ سوچ کر بند کر دینا کہ میں کل سے بناؤں گا'
    ],
    practiceOptionsEn: [
      'Binge-watch 10 more videos without opening the design editor',
      'Design a real logo for a local shop or practice brief within the next 24 hours',
      'Close your computer and postpone practice indefinitely'
    ],
    practiceCorrectIndex: 1,
    practiceFeedbackUrdu: 'شاباش! خود اپنے ہاتھوں سے عملی مشق کرنا ہی ہنر کو مستقل مہارت میں بدلتا ہے۔',
    practiceFeedbackEn: 'Bingo! Direct hands-on creation anchors theoretical lessons into enduring practical competence.',
    applyActionUrdu: 'آج Seekho سے سیکھی ہوئی کسی بھی ایک بات پر اگلے ۲۴ گھنٹے میں عمل کرنے کا تحریری وعدہ کریں اور اسے انجام دیں۔',
    applyActionEn: 'Commit to executing one concrete action from today’s learning within the next 24 hours.',
    applyChecklistUrdu: [
      'آج سیکھی ہوئی سب سے اہم بات منتخب کریں',
      'اس کا ۲۴ گھنٹے کا ایکشن طے کریں',
      'اسے مکمل کر کے خود کو داد دیں'
    ],
    applyChecklistEn: [
      'Pick the most impactful insight you learned today',
      'Define its immediate 24-hour micro-task',
      'Execute it and mark completed'
    ],
    reflectPromptUrdu: 'وہ کون سا علم یا ہنر ہے جو آپ کافی عرصے سے جانتے ہیں مگر ابھی تک اس پر عمل نہیں کیا؟',
    reflectPromptEn: 'Which valuable insight or skill have you known for a long time but hesitated to put into practice?',
    reflectOptionsUrdu: [
      'باقاعدہ ورزش اور صحت بخش غذا',
      'آن لائن ہنر سیکھ کر کمانا شروع کرنا',
      'بچت اور اخراجات کا بجٹ بنانا',
      'نئے لوگوں سے رابطہ اور اعتماد سے بات چیت'
    ],
    reflectOptionsEn: [
      'Regular exercise and clean diet',
      'Monetizing a digital skill online',
      'Setting up a monthly savings plan',
      'Approaching new people and confident networking'
    ],
    improveTipUrdu: 'ہر اتوار کی شام اپنے پچھلے ہفتے کا جائزہ لیں: "میں نے اس ہفتے کیا نیا سیکھا اور اس پر کیا عملی قدم اٹھایا؟"',
    improveTipEn: 'Conduct a Sunday evening self-audit: "What did I learn this week, and what concrete action did I execute?"',
    estimatedMinutes: 5,
    points: 25,
    tagUrdu: 'عملی قدم و نفاذ',
    tagEn: 'Action & Execution',
    iconName: 'Zap'
  }
];

export function getLessonsByCategory(categoryId: LifeSkillCategoryId): PracticalLifeLesson[] {
  return PRACTICAL_LIFE_LESSONS.filter(l => l.categoryId === categoryId);
}

export function getRecommendedLifeLesson(userCompletedIds: string[] = []): PracticalLifeLesson {
  const uncompleted = PRACTICAL_LIFE_LESSONS.filter(l => !userCompletedIds.includes(l.id));
  if (uncompleted.length > 0) {
    return uncompleted[0];
  }
  return PRACTICAL_LIFE_LESSONS[0];
}
