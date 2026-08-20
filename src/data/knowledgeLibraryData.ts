import { KnowledgeCategory, KnowledgeCategoryMeta, KnowledgeLibraryItem, Language, UserProfile } from '../types';

export const KNOWLEDGE_CATEGORIES_META: KnowledgeCategoryMeta[] = [
  {
    id: 'quran_guidance',
    number: 1,
    titleUrdu: 'قرآن سے رہنمائی',
    titleEn: 'Quranic Guidance',
    iconName: 'BookOpen',
    colorTheme: 'emerald',
    descriptionUrdu: 'قرآن مجید کی آیاتِ مبارکہ سے زندگی، محنت، سوچ اور تدبر کے رہنما اصول۔',
    descriptionEn: 'Core Quranic principles for daily mindfulness, purposeful labor, and reflection.'
  },
  {
    id: 'hadith',
    number: 2,
    titleUrdu: 'حدیثِ نبوی ﷺ',
    titleEn: 'Prophetic Hadith',
    iconName: 'Sparkles',
    colorTheme: 'teal',
    descriptionUrdu: 'صحیح احادیث کی روشنی میں نیت، معاملات اور حسنِ اخلاق کے سچے اسباق۔',
    descriptionEn: 'Authentic prophetic traditions illuminating intentions, transactions, and sublime manners.'
  },
  {
    id: 'seerah',
    number: 3,
    titleUrdu: 'سیرت النبی ﷺ',
    titleEn: 'Prophetic Seerah',
    iconName: 'Compass',
    colorTheme: 'amber',
    descriptionUrdu: 'رسول اللہ ﷺ کی مبارک حیاتِ طیبہ سے قیادت، برداشت اور عملی حکمت۔',
    descriptionEn: 'Wisdom, leadership, and emotional resilience from the blessed life of the Prophet ﷺ.'
  },
  {
    id: 'sahaba',
    number: 4,
    titleUrdu: 'صحابہ کرامؓ',
    titleEn: 'The Sahaba (Companions)',
    iconName: 'ShieldCheck',
    colorTheme: 'indigo',
    descriptionUrdu: 'صحابہ کرامؓ کی سچائی، محنت، فیاضی اور کردار کے مشعلِ راہ نمونے۔',
    descriptionEn: 'Exemplary models of integrity, halal trade, sacrifice, and character from the Companions.'
  },
  {
    id: 'character_ethics',
    number: 5,
    titleUrdu: 'اخلاق و کردار',
    titleEn: 'Character & Ethics',
    iconName: 'Heart',
    colorTheme: 'rose',
    descriptionUrdu: 'سچائی، دیانت داری، غصے پر قابو اور نرم گفتگو کا عملی طریقہ۔',
    descriptionEn: 'Actionable frameworks for truthfulness, trustworthiness, patience, and kind speech.'
  },
  {
    id: 'personal_development',
    number: 6,
    titleUrdu: 'شخصی ترقی (Personal Dev)',
    titleEn: 'Personal Development',
    iconName: 'TrendingUp',
    colorTheme: 'blue',
    descriptionUrdu: 'عادات کی تعمیر، یکسوئی، مستقل مزاجی اور خود اعتمادی کے آسان اصول۔',
    descriptionEn: 'Habit formation, deep focus, mental clarity, and growth mindset.'
  },
  {
    id: 'financial_literacy',
    number: 7,
    titleUrdu: 'مالیاتی شعور (Money)',
    titleEn: 'Money & Financial Literacy',
    iconName: 'Coins',
    colorTheme: 'emerald',
    descriptionUrdu: 'بجٹ بنانا، فضول خرچی سے بچاؤ، حلال بچت اور مالیاتی سکون۔',
    descriptionEn: 'Simple budgeting rules, debt avoidance, halal savings, and financial peace.'
  },
  {
    id: 'business_entrepreneurship',
    number: 8,
    titleUrdu: 'کاروبار و انٹرپرینیورشپ',
    titleEn: 'Business & Entrepreneurship',
    iconName: 'Briefcase',
    colorTheme: 'violet',
    descriptionUrdu: 'چھوٹا کاروبار شروع کرنا، کسٹمر کی ضرورت سمجھنا اور دیانت دار منافع۔',
    descriptionEn: 'Lean startups, customer-first problem solving, and ethical business execution.'
  },
  {
    id: 'communication_leadership',
    number: 9,
    titleUrdu: 'گفتگو و قیادت',
    titleEn: 'Communication & Leadership',
    iconName: 'MessageSquare',
    colorTheme: 'cyan',
    descriptionUrdu: 'غور سے سننا، شائستہ اظہار، ٹیم کی رہنمائی اور تنازعات کا حل۔',
    descriptionEn: 'Active listening, assertive yet polite speech, and servant leadership.'
  },
  {
    id: 'digital_ai',
    number: 10,
    titleUrdu: 'ڈیجیٹل و اے آئی مہارتیں',
    titleEn: 'Digital & AI Skills',
    iconName: 'Cpu',
    colorTheme: 'sky',
    descriptionUrdu: 'آرٹیفیشل انٹیلیجنس کے ٹولز کا موثر استعمال اور آن لائن تحفظ۔',
    descriptionEn: 'Practical AI prompting, automation tools, and essential digital safety.'
  },
  {
    id: 'career_freelancing',
    number: 11,
    titleUrdu: 'کیریئر و فری لانسنگ',
    titleEn: 'Career & Freelancing',
    iconName: 'Award',
    colorTheme: 'orange',
    descriptionUrdu: 'پورٹ فولیو بنانا، کلائنٹ سے بات چیت اور ہنر سے حلال روزگار۔',
    descriptionEn: 'Proof-of-work portfolios, client negotiation, and market-ready freelance skills.'
  },
  {
    id: 'practical_life_skills',
    number: 12,
    titleUrdu: 'عملی زندگی کی مہارتیں',
    titleEn: 'Practical Life Skills',
    iconName: 'Wrench',
    colorTheme: 'amber',
    descriptionUrdu: 'گھریلو بجٹ، وقت کی پابندی، ضروری آلات کی دیکھ بھال اور بنیادی زندگی۔',
    descriptionEn: 'Time management, essential home care, organization, and daily ergonomics.'
  },
  {
    id: 'environment_community',
    number: 13,
    titleUrdu: 'ماحول اور سماجی خدمت',
    titleEn: 'Environment & Community',
    iconName: 'Globe',
    colorTheme: 'lime',
    descriptionUrdu: 'پانی اور بجلی کی بچت، شجرکاری، صفائی اور پڑوسیوں کا تعاون۔',
    descriptionEn: 'Water conservation, neighborhood clean-ups, tree planting, and civic care.'
  },
  {
    id: 'books_ideas',
    number: 14,
    titleUrdu: 'کتابیں اور منتخب افکار',
    titleEn: 'Books & Ideas',
    iconName: 'Lightbulb',
    colorTheme: 'purple',
    descriptionUrdu: 'دنیا کی منتخب فکر انگیز کتابوں کے آسان خلاصے اور دانائی کے موتی۔',
    descriptionEn: 'Distilled summaries of timeless wisdom, mental models, and transformative ideas.'
  }
];

export const KNOWLEDGE_LIBRARY_ITEMS: KnowledgeLibraryItem[] = [
  // -------------------------------------------------------------
  // 1. قرآن سے رہنمائی (Quranic Guidance)
  // -------------------------------------------------------------
  {
    id: 'quran-1',
    categoryId: 'quran_guidance',
    categoryTitleUrdu: 'قرآن سے رہنمائی',
    categoryTitleEn: 'Quranic Guidance',
    titleUrdu: 'علم اور تدبر: جاننے والے اور نہ جاننے والے برابر نہیں',
    titleEn: 'Knowledge & Reflection: The Learned and Unlearned are Not Equal',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    shortExplanationUrdu: 'قرآن مجید غور و فکر، مشاہدہ اور نفع بخش علم حاصل کرنے کی بار بار ترغیب دیتا ہے۔ علم عمل کی بنیاد ہے۔',
    shortExplanationEn: 'The Quran repeatedly encourages reflection, observation, and seeking beneficial knowledge as the root of action.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 4,
    estimatedTimeUrdu: '۴ منٹ',
    estimatedTimeEn: '4 mins',
    practicalBenefitUrdu: 'بغیر سوچے سمجھے تقلید کے بجائے سوال کرنے اور گہرائی سے سیکھنے کی عادت بنتی ہے۔',
    practicalBenefitEn: 'Builds intellectual curiosity and reasoned action over blind routine.',
    practicalExampleUrdu: 'مثال: جب علی کو کوئی واٹس ایپ فارورڈ یا نیا دعویٰ ملا تو اس نے فوراً آگے بھیجنے کے بجائے اصل حقیقت اور تصدیق کی، جس سے غلط فہمی رک گئی۔',
    practicalExampleEn: 'Example: Before forwarding an unverified message, Ali checked the source and verified the facts, preventing panic and misinformation.',
    oneSmallActionUrdu: 'آج اپنے شعبے یا دین کا ایک ایسا نکتہ پڑھیں اور سمجھیں جو پہلے واضح نہیں تھا۔',
    oneSmallActionEn: 'Read and deeply understand one concept related to your trade or values today.',
    sourceReferenceUrdu: 'سورت الزمر، آیت ۹: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ"',
    sourceReference: 'Surah Az-Zumar (39:9)',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'علم وہ ہے جو انسان میں تواضع، عمل اور دوسروں کی خیر خواہی پیدا کرے۔',
      'روزانہ کم از کم ۵ منٹ کسی نئی نفع بخش چیز کو سمجھنے کے لیے وقف کریں۔',
      'قرآن پر تدبر صرف پڑھنے کا نام نہیں بلکہ زندگی کے فیصلوں میں لاگو کرنے کا نام ہے۔'
    ],
    keyTakeawaysEn: [
      'True knowledge cultivates humility, practical action, and benevolence.',
      'Dedicate at least 5 minutes daily to understanding beneficial ideas.',
      'Quranic reflection is about applying principles to daily life decisions.'
    ],
    practicalActionStepsUrdu: [
      'آج اپنے شعبے یا دین کا ایک ایسا نکتہ پڑھیں جو پہلے واضح نہیں تھا۔',
      'کاپی پر لکھیں کہ اس سے میرے روزمرہ کے رویے میں کیا مثبت تبدیلی آنی چاہیے۔'
    ],
    practicalActionStepsEn: [
      'Read and deeply understand one concept related to your trade or values.',
      'Write down one practical behavioral change resulting from this insight.'
    ],
    reviewQuestionUrdu: 'قرآن کریم کے مطابق نفع بخش علم کا انسان کے روزمرہ عمل اور سوچ پر کیا اثر ہوتا ہے؟',
    reviewQuestionEn: 'According to Quranic reflection, what is the true fruit of beneficial knowledge?',
    reviewOptions: [
      { id: 'a', textUrdu: 'انسان غور و فکر کرتا ہے، تواضع پیدا ہوتی ہے اور عمل نکھرتا ہے', textEn: 'It cultivates deep reflection, humility, and principled action', isCorrect: true },
      { id: 'b', textUrdu: 'انسان صرف معلومات جمع کرتا ہے مگر زندگی نہیں بدلتی', textEn: 'Just amassing trivia without changing character', isCorrect: false },
      { id: 'c', textUrdu: 'دوسروں کو نیچا دکھانے کے لیے بحث کرنا', textEn: 'Arguing to show intellectual superiority', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: علم وہ روشنی ہے جو انسان کے فیصلوں اور اخلاق میں دکھائی دے۔',
    gentleRevisionEn: 'Gentle Reminder: True knowledge is demonstrated through wisdom and character in decisions.',
    nextRecommendedStepUrdu: 'اب آپ "حدیث: اعمال کا دارومدار نیتوں پر ہے" کا مطالعہ کریں یا ڈیجیٹل اسکل کی مشق کریں۔',
    nextRecommendedStepEn: 'Next step: Study "Hadith: Intentions" or practice a digital skill module.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'hadith-1',
    impactCategory: 'Teaching/Sharing Knowledge',
    tagsUrdu: ['علم', 'تدبر', 'قرآن', 'تحقیق', 'رہنمائی'],
    tagsEn: ['Knowledge', 'Reflection', 'Quran', 'Critical Thinking']
  },
  {
    id: 'quran-2',
    categoryId: 'quran_guidance',
    categoryTitleUrdu: 'قرآن سے رہنمائی',
    categoryTitleEn: 'Quranic Guidance',
    titleUrdu: 'زمین پر چلو اور رزقِ حلال تلاش کرو',
    titleEn: 'Walk the Earth and Seek Halal Sustenance',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    shortExplanationUrdu: 'اللہ تعالیٰ نے زمین کو مسخر فرمایا تاکہ انسان ہاتھ سے محنت کرے، راستے تلاش کرے اور عزت کی روزی کمائے۔',
    shortExplanationEn: 'Allah made the earth subservient so that humans exert effort, explore avenues, and earn dignified livelihood.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 5,
    estimatedTimeUrdu: '۵ منٹ',
    estimatedTimeEn: '5 mins',
    practicalBenefitUrdu: 'بے عملی اور سستی ختم ہوتی ہے اور خود انحصاری کا جذبہ بیدار ہوتا ہے۔',
    practicalBenefitEn: 'Eliminates passive dependency and fuels proactive work ethic.',
    practicalExampleUrdu: 'مثال: عثمان نے بے روزگاری میں بیٹھ کر مایوس ہونے کے بجائے موبائل پر کینوا سے پوسٹر بنانے کا ہنر سیکھا اور مقامی دکان داروں کو اپنی خدمات پیش کیں۔',
    practicalExampleEn: 'Example: Instead of waiting helplessly, Usman learned basic digital design on his phone and offered local shopkeepers social posters.',
    oneSmallActionUrdu: 'آج کسی مفت سہارے کی امید کے بجائے اپنی محنت سے کسی چھوٹے مسئلے کا حل تلاش کریں۔',
    oneSmallActionEn: 'Take proactive ownership of finding one halal income or skill opportunity today.',
    sourceReferenceUrdu: 'سورت الملک، آیت ۱۵: "فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِن رِّزْقِهِ وَإِلَيْهِ النُّشُورُ"',
    sourceReference: 'Surah Al-Mulk (67:15)',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'رزق اللہ کے ہاتھ میں ہے، لیکن اس کی تلاش کے لیے کوشش اور سفر انسان کی ذمہ داری ہے۔',
      'حلال روزی کی محنت بھی بندگی اور اجر کا باعث ہے۔',
      'وسائل کا جائز اور نفع بخش استعمال برکت لاتا ہے۔'
    ],
    keyTakeawaysEn: [
      'Sustenance is decreed by Allah, but proactive seeking is our moral duty.',
      'Honest work for halal livelihood is rewarded as an act of worship.',
      'Utilizing productive tools with integrity brings barakah.'
    ],
    practicalActionStepsUrdu: [
      'آج اپنے کام کے دوران سستی دور کریں اور پورا وقت دیانت داری سے کام کریں۔',
      'اللہ پر توکل کر کے ایک نئی مفید پیشہ ورانہ مہارت سیکھنے کی شروعات کریں۔'
    ],
    practicalActionStepsEn: [
      'Work with full presence and diligence without wasting work hours.',
      'Start learning a new skill while trusting in Allah for results.'
    ],
    reviewQuestionUrdu: 'قرآنی حکم "فَامْشُوا فِي مَنَاكِبِهَا" کا عملی سبق کیا ہے؟',
    reviewQuestionEn: 'What is the practical takeaway of walking the earth for sustenance?',
    reviewOptions: [
      { id: 'a', textUrdu: 'ہاتھ پر ہاتھ رکھ کر بیٹھنے کے بجائے محنت اور اسباب اختیار کرنا', textEn: 'Taking active initiative and honest effort rather than passive waiting', isCorrect: true },
      { id: 'b', textUrdu: 'بغیر محنت کے صرف دعاؤں پر تکیہ کرنا', textEn: 'Expecting results without taking practical means', isCorrect: false },
      { id: 'c', textUrdu: 'حلال و حرام کی تمیز ختم کر دینا', textEn: 'Ignoring ethical boundaries in pursuit of wealth', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: رزقِ حلال کی تلاش اللہ کا حکم اور عزت کا راستہ ہے۔',
    gentleRevisionEn: 'Gentle Reminder: Seeking halal income through honest endeavor is honored in Islam.',
    nextRecommendedStepUrdu: 'اب آپ "حضرت عبد الرحمن بن عوفؓ کی خود انحصاری" کا سبق پڑھیں یا اسکل کورس شروع کریں۔',
    nextRecommendedStepEn: 'Next step: Study "Abdur Rahman ibn Awf (RA) Self-Reliance" or start a skill course.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'sahaba-1',
    impactCategory: 'Ethical Work',
    tagsUrdu: ['رزقِ حلال', 'محنت', 'توکل', 'روزی', 'کاروبار'],
    tagsEn: ['Halal Livelihood', 'Diligence', 'Tawakkul', 'Work Ethic']
  },

  // -------------------------------------------------------------
  // 2. حدیثِ نبوی ﷺ (Hadith)
  // -------------------------------------------------------------
  {
    id: 'hadith-1',
    categoryId: 'hadith',
    categoryTitleUrdu: 'حدیثِ نبوی ﷺ',
    categoryTitleEn: 'Prophetic Hadith',
    titleUrdu: 'اعمال کا دارومدار نیتوں پر ہے',
    titleEn: 'Actions are Judged by Intentions',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    shortExplanationUrdu: 'ہر کام کی حقیقت اور اس کا نتیجہ اس نیت سے طے ہوتا ہے جس کے ساتھ وہ شروع کیا گیا ہو۔ خالص نیت عام کام کو عبادت بنا دیتی ہے۔',
    shortExplanationEn: 'The true value and outcome of every deed depends entirely upon the underlying intention.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 3,
    estimatedTimeUrdu: '۳ منٹ',
    estimatedTimeEn: '3 mins',
    practicalBenefitUrdu: 'دکھاوے اور وقتی مایوسی سے بچاؤ، اور کام میں دلی سکون و اخلاص۔',
    practicalBenefitEn: 'Shields from ostentation and instills intrinsic purpose in daily tasks.',
    practicalExampleUrdu: 'مثال: سارہ نے روزمرہ کا کھانا بناتے وقت نیت کی کہ "گھر والوں کو حلال اور صحت بخش کھانا کھلا کر اللہ کو راضی کرنا ہے"، جس سے تھکن ثواب میں بدل گئی۔',
    practicalExampleEn: 'Example: Cooking daily meals with the intention of nourishing family for Allah’s pleasure turns daily chores into continuous reward.',
    oneSmallActionUrdu: 'اگلا کام شروع کرنے سے پہلے ۳ سیکنڈ رک کر نیت کی تجدید کریں کہ یہ کس اچھے مقصد کے لیے ہے۔',
    oneSmallActionEn: 'Pause for 3 seconds before starting your next task to consciously renew your positive intention.',
    sourceReferenceUrdu: 'صحیح بخاری: ۱، صحیح مسلم: ۱۹۰۷ - حضرت عمر بن الخطابؓ سے روایت',
    sourceReference: 'Sahih al-Bukhari 1, Sahih Muslim 1907',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'دن کے کسی بھی کام سے پہلے صرف ۲ سیکنڈ رک کر اپنی نیت درست کریں۔',
      'حلال کمانا، بچوں کی پرورش یا ہنر سیکھنا اگر اللہ کی رضا اور خدمت کے لیے ہو تو سراسر نیکی ہے۔',
      'نیت میں شفافیت ذہنی یکسوئی دیتی ہے۔'
    ],
    keyTakeawaysEn: [
      'Pause for 2 seconds before any daily task to align your intention.',
      'Skill acquisition and honest livelihood done for good becomes worship.',
      'Clarity of intent brings mental focus and peace.'
    ],
    practicalActionStepsUrdu: [
      'اگلا کام شروع کرنے سے پہلے دل میں کہیں: "یا اللہ! یہ کام میں آپ کی رضا، رزقِ حلال اور اچھے مقصد کے لیے کر رہا ہوں۔"',
      'دکھاوے اور تعریف کی خواہش کو دل سے جھٹک دیں۔'
    ],
    practicalActionStepsEn: [
      'Before your next assignment, affirm your intention for goodness and halal income.',
      'Refocus praise outward and work with genuine sincerity.'
    ],
    reviewQuestionUrdu: 'نبی کریم ﷺ کے ارشاد کے مطابق ایک عام دنیاوی کام (جیسے ہنر سیکھنا یا کمانا) کیسے عبادت بن سکتا ہے؟',
    reviewQuestionEn: 'How can ordinary worldly work become an act of worship according to Hadith?',
    reviewOptions: [
      { id: 'a', textUrdu: 'جب نیت اللہ کی رضا، حلال روزی اور خدمتِ خلق کی ہو', textEn: 'When the intention is pure for Allah’s sake and honest service', isCorrect: true },
      { id: 'b', textUrdu: 'صرف اس وقت جب بہت زیادہ پیسہ کمایا جائے', textEn: 'Only when excessive profit is generated', isCorrect: false },
      { id: 'c', textUrdu: 'جب لوگ آپ کی تعریف کریں', textEn: 'When people publicly praise your status', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: ہر کام سے پہلے اپنی نیت کا رخ سچائی اور خیر کی طرف موڑیں۔',
    gentleRevisionEn: 'Gentle Reminder: Check and purify your intention before every action.',
    nextRecommendedStepUrdu: 'اب آپ "حدیث: آسانیاں پیدا کرو، تنگی نہ ڈالو" پڑھیں یا آج کا نیک عمل لاگ کریں۔',
    nextRecommendedStepEn: 'Next step: Explore "Hadith: Facilitate Ease" or log today’s good deed in My Impact.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'hadith-2',
    impactCategory: 'Ethical Work',
    tagsUrdu: ['نیت', 'اخلاص', 'حدیث', 'نیکی', 'مقصد'],
    tagsEn: ['Intention', 'Sincerity', 'Hadith', 'Mindfulness']
  },
  {
    id: 'hadith-2',
    categoryId: 'hadith',
    categoryTitleUrdu: 'حدیثِ نبوی ﷺ',
    categoryTitleEn: 'Prophetic Hadith',
    titleUrdu: 'آسانیاں پیدا کرو، تنگی نہ ڈالو',
    titleEn: 'Facilitate Ease and Do Not Create Hardship',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    shortExplanationUrdu: 'نبی کریم ﷺ کا سنہری اصول: لوگوں کے ساتھ معاملات، گفتگو اور تعلیم میں آسانی اور امید پیدا کرنا۔',
    shortExplanationEn: 'The prophetic principle: make matters easy, spread glad tidings, and avoid repelling others through harshness.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 4,
    estimatedTimeUrdu: '۴ منٹ',
    estimatedTimeEn: '4 mins',
    practicalBenefitUrdu: 'خاندان اور کام کی جگہ پر کشیدگی کا خاتمہ اور باہمی تعاون کا فروغ۔',
    practicalBenefitEn: 'Reduces interpersonal friction and fosters warmth at home and work.',
    practicalExampleUrdu: 'مثال: حامد نے اپنے چھوٹے بھائی کو ریاضی کا سوال سمجھاتے وقت ڈانٹنے کے بجائے ایک دلچسپ مثال سے سمجھایا، جس سے اس کا خوف دور ہو گیا۔',
    practicalExampleEn: 'Example: Instead of scolding, Hamid explained a math problem with a fun real-world example, boosting his brother’s confidence.',
    oneSmallActionUrdu: 'آج کسی شخص کے الجھے ہوئے کام میں کوئی ایسی مدد کریں جس سے اس کا وقت اور پریشانی کم ہو۔',
    oneSmallActionEn: 'Help simplify a chore or process for someone feeling overwhelmed today.',
    sourceReferenceUrdu: 'صحیح بخاری: ۶۹، صحیح مسلم: ۱۷۳۴ - حضرت انس بن مالکؓ سے روایت',
    sourceReference: 'Sahih al-Bukhari 69, Sahih Muslim 1734',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'کسی کو بات سمجھاتے وقت مشکل الفاظ کے بجائے آسان طریقہ اختیار کریں۔',
      'غلطی پر طعنہ دینے کے بجائے اصلاح کا نرم رستہ دکھائیں۔',
      'گھریلو اور دفتری مسائل میں لچک اور وسعت پیدا کریں۔'
    ],
    keyTakeawaysEn: [
      'Choose simple, relatable words when teaching or explaining.',
      'Guide gently rather than publicly humiliating someone for a mistake.',
      'Practice flexibility in family and team interactions.'
    ],
    practicalActionStepsUrdu: [
      'آج کسی ایسے شخص کی مشکل آسان کریں جو کسی کام میں الجھا ہوا ہو۔',
      'بات چیت میں سخت لہجے کے بجائے حوصلہ افزا الفاظ استعمال کریں۔'
    ],
    practicalActionStepsEn: [
      'Help simplify a task for someone struggling today.',
      'Replace critical tone with calm, encouraging guidance.'
    ],
    reviewQuestionUrdu: 'نبی کریم ﷺ کے مطابق لوگوں سے معاملات میں کون سا طرزِ عمل پسندیدہ ہے؟',
    reviewQuestionEn: 'What is the beloved prophetic approach when dealing with people?',
    reviewOptions: [
      { id: 'a', textUrdu: 'آسانی پیدا کرنا، خوشخبری دینا اور نرمی اپنانا', textEn: 'Creating ease, giving glad tidings, and adopting gentleness', isCorrect: true },
      { id: 'b', textUrdu: 'سختی دکھانا تاکہ لوگ رعب میں رہیں', textEn: 'Acting sternly to intimidate others', isCorrect: false },
      { id: 'c', textUrdu: 'چھوٹی غلطی پر بھی بات بند کر دینا', textEn: 'Cutting ties over minor misunderstandings', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: نرمی جس چیز میں بھی ہو اسے خوبصورت بنا دیتی ہے۔',
    gentleRevisionEn: 'Gentle Reminder: Gentleness beautifies everything it touches.',
    nextRecommendedStepUrdu: 'اب آپ "سیرت: صادق اور امین" کا مطالعہ کریں یا گفتگو کی مہارت کو بہتر بنائیں۔',
    nextRecommendedStepEn: 'Next step: Study "Seerah: As-Sadiq & Al-Amin" or practice Communication Skills.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'seerah-1',
    impactCategory: 'Helping Others',
    tagsUrdu: ['آسانی', 'اخلاق', 'تعاون', 'نرمی', 'حدیث'],
    tagsEn: ['Ease', 'Empathy', 'Communication', 'Kindness']
  },

  // -------------------------------------------------------------
  // 3. سیرت النبی ﷺ (Seerah)
  // -------------------------------------------------------------
  {
    id: 'seerah-1',
    categoryId: 'seerah',
    categoryTitleUrdu: 'سیرت النبی ﷺ',
    categoryTitleEn: 'Prophetic Seerah',
    titleUrdu: 'صادق اور امین: نبوت سے پہلے کی معتبر ساکھ',
    titleEn: 'As-Sadiq & Al-Amin: Trusted Reputation Before Prophethood',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    shortExplanationUrdu: 'نبی کریم ﷺ نے جوانی میں اپنی دیانت داری، وعدے کی پاسداری اور کھرے پن سے پورے مکہ میں "امین" (امانت دار) کا لقب پایا۔',
    shortExplanationEn: 'Through unblemished honesty and honoring commitments, the Prophet ﷺ earned the title Al-Amin across Makkah.',
    difficulty: 'medium',
    difficultyUrdu: 'درمیانہ',
    difficultyEn: 'Intermediate',
    estimatedTimeMinutes: 6,
    estimatedTimeUrdu: '۶ منٹ',
    estimatedTimeEn: '6 mins',
    practicalBenefitUrdu: 'ذاتی ساکھ (Personal Reputation) کی اہمیت کا فہم اور کاروباری اعتبار کی تعمیر۔',
    practicalBenefitEn: 'Teaches the irreplaceable value of ethical reputation and personal integrity.',
    practicalExampleUrdu: 'مثال: بلال نے کلائنٹ کو کام دیتے وقت واضح بتا دیا کہ اس کام میں کیا چیز ابھی نامکمل ہے اور اضافی وقت مانگا؛ کلائنٹ نے سچائی کی وجہ سے اسے مستقل پروجیکٹ سونپ دیا۔',
    practicalExampleEn: 'Example: Bilal honestly stated a slight limitation in his delivery and asked for time to fix it; the client rewarded his transparency with long-term trust.',
    oneSmallActionUrdu: 'آج کسی سے کیے گئے چھوٹے سے وعدے کو بھی وقت سے پہلے کھرے پن کے ساتھ پورا کریں۔',
    oneSmallActionEn: 'Fulfill an everyday promise before its deadline with absolute fidelity.',
    sourceReferenceUrdu: 'سیرت ابن ہشام (جلد ۱)، البدایہ والنہایہ لابن کثیر',
    sourceReference: 'Ibn Hisham (Vol 1), Al-Bidayah wan-Nihayah',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'اعتبار اور ساکھ دنیا اور آخرت کا سب سے بڑا سرمایہ ہے۔',
      'تجارت میں سچ بولنا اور عیب چھپائے بغیر چیز بیچنا برکت لاتا ہے۔',
      'مشکل وقت میں بھی امانت اور سچائی کو ہاتھ سے نہ چھوڑیں۔'
    ],
    keyTakeawaysEn: [
      'Integrity is your greatest personal asset in this life and the next.',
      'Honesty in business without concealing flaws invites long-term blessings.',
      'Never compromise on promises even in difficult moments.'
    ],
    practicalActionStepsUrdu: [
      'آج کسی سے کیے گئے کسی چھوٹے وعدے کو مقررہ وقت سے پہلے پورا کریں۔',
      'اپنے کام میں کسی کمی کو چھپانے کے بجائے واضح اور شفاف رکھیں۔'
    ],
    practicalActionStepsEn: [
      'Fulfill a pending minor commitment before its deadline.',
      'Be fully transparent in your work deliverables.'
    ],
    reviewQuestionUrdu: 'نبی کریم ﷺ کو جوانی ہی میں الصادق اور الامین کا لقب کس بنیاد پر ملا؟',
    reviewQuestionEn: 'On what basis did the Prophet ﷺ earn the titles As-Sadiq and Al-Amin early in life?',
    reviewOptions: [
      { id: 'a', textUrdu: 'کامل سچائی، امانت داری، اور وعدوں کی اٹل پاسداری پر', textEn: 'Flawless truthfulness, honoring trusts, and keeping commitments', isCorrect: true },
      { id: 'b', textUrdu: 'بہت زیادہ مال اور جائیداد کی وجہ سے', textEn: 'Due to excessive material wealth', isCorrect: false },
      { id: 'c', textUrdu: 'محض خاندانی اثر و رسوخ کی وجہ سے', textEn: 'Solely through tribal influence', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: دیانت داری دیرپا عزت اور رزق میں برکت کا واحد ذریعہ ہے۔',
    gentleRevisionEn: 'Gentle Reminder: Trustworthiness is the foundation of enduring honor.',
    nextRecommendedStepUrdu: 'اب آپ "صحابہ: حضرت عبد الرحمن بن عوفؓ" کی تجارتی دانائی کا سبق دیکھیں یا بزنس ایتھکس سیکھیں۔',
    nextRecommendedStepEn: 'Next step: Study "Sahaba: Abdur Rahman ibn Awf (RA)" or explore business ethics.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'sahaba-1',
    impactCategory: 'Ethical Work',
    tagsUrdu: ['سیرت', 'امانت', 'ساکھ', 'سچائی', 'دیانت'],
    tagsEn: ['Seerah', 'Trustworthiness', 'Integrity', 'Honesty']
  },

  // -------------------------------------------------------------
  // 4. صحابہ کرامؓ (The Sahaba)
  // -------------------------------------------------------------
  {
    id: 'sahaba-1',
    categoryId: 'sahaba',
    categoryTitleUrdu: 'صحابہ کرامؓ',
    categoryTitleEn: 'The Sahaba (Companions)',
    titleUrdu: 'حضرت عبد الرحمن بن عوفؓ: "مجھے بازار کا راستہ بتا دو"',
    titleEn: 'Abdur Rahman ibn Awf (RA): "Show Me the Way to the Market"',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    shortExplanationUrdu: 'مدینہ منورہ ہجرت کے بعد بغیر کسی مالی سہارے کے، صرف اپنی محنت، تجارتی فہم اور حلال جستجو سے معاشی خود انحصاری قائم کی۔',
    shortExplanationEn: 'Upon arriving in Madinah with nothing, he declined free financial handouts and asked only for the market location, building honest self-reliance.',
    difficulty: 'medium',
    difficultyUrdu: 'درمیانہ',
    difficultyEn: 'Intermediate',
    estimatedTimeMinutes: 5,
    estimatedTimeUrdu: '۵ منٹ',
    estimatedTimeEn: '5 mins',
    practicalBenefitUrdu: 'مفت کے سہارے پر بیٹھنے کے بجائے محنت اور کاروباری خود اعتمادی کی بیداری۔',
    practicalBenefitEn: 'Instills self-reliance, entrepreneurship, and dignity over passive entitlement.',
    practicalExampleUrdu: 'مثال: طارق نے دوست سے قرض مانگنے کے بجائے مارکیٹ میں گھوم کر دیکھا کہ کون سا مال آسانی سے بک سکتا ہے اور چھوٹی ری سیلنگ سے منافع کمایا۔',
    practicalExampleEn: 'Example: Tariq surveyed local market demands and started a modest trading service instead of relying on loans, achieving financial dignity.',
    oneSmallActionUrdu: 'آج سوچیں کہ آپ کے پاس کون سا ایسا ہنر یا معلومات ہیں جن سے آپ کسی کا جائز کام آسان کر سکتے ہیں۔',
    oneSmallActionEn: 'Identify one practical skill you have that can solve an immediate local need.',
    sourceReferenceUrdu: 'صحیح بخاری: ۲۰۴۸ - کتاب البیوع',
    sourceReference: 'Sahih al-Bukhari 2048',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'ہنر اور تجارتی سلیقہ انسان کو کسی کے آگے ہاتھ پھیلانے سے بے نیاز کر دیتا ہے۔',
      'حلال منافع کمانے کے بعد فراخ دلی سے ضرورت مندوں پر خرچ کرنا کامیابی کا اصل راز ہے۔',
      'چھوٹے پیمانے پر بھی دیانت دار کام شروع کرنا بے روزگاری کا بہترین علاج ہے۔'
    ],
    keyTakeawaysEn: [
      'A practical skill and trading literacy frees one from dependency.',
      'True wealth lies in earning honestly and giving generously.',
      'Starting small with integrity is the cure to hopelessness.'
    ],
    practicalActionStepsUrdu: [
      'سوچیں کہ آپ کے پاس کون سا ایسا ہنر ہے جس سے کسی کا جائز مسئلہ حل ہو سکتا ہے۔',
      'آج کسی مفت سہولت پر تکیہ کرنے کے بجائے خود اپنے ہاتھ سے ایک کام انجام دیں۔'
    ],
    practicalActionStepsEn: [
      'Identify one service or practical skill you can offer to help others.',
      'Take proactive ownership of a task without relying on handouts.'
    ],
    reviewQuestionUrdu: 'حضرت عبد الرحمن بن عوفؓ نے مدینہ آمد پر انصاری بھائی کے مال میں آدھا حصہ لینے کے بجائے کیا فرمایا؟',
    reviewQuestionEn: 'What did Abdur Rahman ibn Awf (RA) say when offered half of his Ansari brother’s estate?',
    reviewOptions: [
      { id: 'a', textUrdu: '"اللہ آپ کے مال میں برکت دے، مجھے بس بازار کا راستہ بتا دو"', textEn: '"May Allah bless your wealth, just show me the way to the market"', isCorrect: true },
      { id: 'b', textUrdu: '"سارا مال میرے حوالے کر دیں"', textEn: '"Hand over all your wealth to me"', isCorrect: false },
      { id: 'c', textUrdu: '"میں تجارت کے قابل نہیں ہوں"', textEn: '"I am unable to engage in trade"', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: خود انحصاری اور محنت ایمان کا تقاضا اور عزت کا زیور ہے۔',
    gentleRevisionEn: 'Gentle Reminder: Self-reliance preserves human dignity and unlocks abundance.',
    nextRecommendedStepUrdu: 'اب آپ "کاروبار: پہلے مسئلہ تلاش کرو" کا مطالعہ کریں یا مالیاتی شعور کا سبق دیکھیں۔',
    nextRecommendedStepEn: 'Next step: Check "Business: Solve Real Problems" or Financial Literacy modules.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'biz-1',
    impactCategory: 'Ethical Work',
    tagsUrdu: ['صحابہ', 'خود انحصاری', 'تجارت', 'مارکیٹ', 'محنت'],
    tagsEn: ['Sahaba', 'Self-Reliance', 'Trade', 'Entrepreneurship']
  },

  // -------------------------------------------------------------
  // 5. اخلاق و کردار (Character & Ethics)
  // -------------------------------------------------------------
  {
    id: 'char-1',
    categoryId: 'character_ethics',
    categoryTitleUrdu: 'اخلاق و کردار',
    categoryTitleEn: 'Character & Ethics',
    titleUrdu: 'غصے پر قابو اور خاموشی کا ہنر',
    titleEn: 'Emotional Self-Control & The Power of Calm Speech',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    shortExplanationUrdu: 'طاقتور وہ نہیں جو کسی کو پچھاڑ دے، بلکہ بہادر وہ ہے جو غصے اور اشتعال کے وقت اپنے نفس پر قابو رکھے۔',
    shortExplanationEn: 'True strength is not physical dominance, but mastering your tongue and impulses in moments of anger.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 4,
    estimatedTimeUrdu: '۴ منٹ',
    estimatedTimeEn: '4 mins',
    practicalBenefitUrdu: 'تعلقات ٹوٹنے سے بچتے ہیں اور انسان جلد بازی کے غلط فیصلوں سے محفوظ رہتا ہے۔',
    practicalBenefitEn: 'Protects relationships and prevents costly rash decisions.',
    practicalExampleUrdu: 'مثال: جب ٹریفک میں کسی گاڑی والے نے کٹ مارا تو فہد نے گالی یا ہارن بجانے کے بجائے گہرا سانس لیا اور اعوذ باللہ پڑھی، جس سے ممکنہ حادثہ اور لڑائی ٹل گئی۔',
    practicalExampleEn: 'Example: When cut off in traffic, Fahad took a deep breath, refrained from shouting, and de-escalated the situation smoothly.',
    oneSmallActionUrdu: 'آج جب بھی کوئی ناگوار بات سنے، جواب دینے سے پہلے پورے ۱۰ سیکنڈ خاموش رہیں۔',
    oneSmallActionEn: 'Whenever triggered today, take a mandatory 10-second silent pause before speaking.',
    sourceReferenceUrdu: 'صحیح بخاری: ۶۱۱۴، صحیح مسلم: ۲۶۰۹ - حضرت ابو ہریرہؓ',
    sourceReference: 'Sahih al-Bukhari 6114, Sahih Muslim 2609',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'جب غصہ آئے تو ۱۰ سیکنڈ خاموش رہیں اور پوزیشن بدلیں (کھڑے ہیں تو بیٹھ جائیں)۔',
      'غصے کی حالت میں کوئی معاہدہ، فیصلہ یا سخت میسج مت بھیجیں۔',
      'معاف کرنا کمزوری نہیں بلکہ باوقار انسان کی سب سے بڑی طاقت ہے۔'
    ],
    keyTakeawaysEn: [
      'Pause for 10 seconds and change physical position when triggered.',
      'Never send messages or make permanent decisions in temporary anger.',
      'Pardon and restraint are marks of high character.'
    ],
    practicalActionStepsUrdu: [
      'آج اگر کوئی بات ناگوار گزرے تو فوراً جواب دینے کے بجائے ایک گہرا سانس لیں اور درگزر کریں۔',
      'کسی سے بات کرتے وقت آواز دھیمی اور لہجہ شائستہ رکھیں۔'
    ],
    practicalActionStepsEn: [
      'Take a 10-second deep breath before responding to irritating comments.',
      'Consciously lower your speaking volume and soften your tone.'
    ],
    reviewQuestionUrdu: 'غصہ اور اشتعال آنے پر نبوی اور نفسیاتی طریقہ علاج کیا ہے؟',
    reviewQuestionEn: 'What is the prophetic and psychological remedy when provoked by anger?',
    reviewOptions: [
      { id: 'a', textUrdu: 'خاموش ہو جانا، پوزیشن بدلنا (بیٹھ جانا) اور وضو کرنا', textEn: 'Staying silent, changing posture (sitting), and performing Wudu', isCorrect: true },
      { id: 'b', textUrdu: 'فوری طور پر چیخ کر غصہ نکالنا', textEn: 'Yelling loudly to vent feelings immediately', isCorrect: false },
      { id: 'c', textUrdu: 'سامنے والے پر ہاتھ اٹھانا', textEn: 'Physical retaliation', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: غصے کا علاج خاموشی اور درگزر ہے۔',
    gentleRevisionEn: 'Gentle Reminder: The cure for sudden anger is silence and patience.',
    nextRecommendedStepUrdu: 'اب آپ "سوچیں اور محفوظ فیصلہ کریں" کا چیلنج آزمائیں یا روزانہ کا اچھا کام لاگ کریں۔',
    nextRecommendedStepEn: 'Next step: Try the "Think Before You Act" scenario or log an Impact deed.',
    nextRecommendedStepType: 'mission',
    nextRecommendedStepId: 'daily-self-control',
    impactCategory: 'Family',
    tagsUrdu: ['صبر', 'غصہ', 'اخلاق', 'خاموشی', 'جذبات'],
    tagsEn: ['Patience', 'Emotional Control', 'Ethics', 'Self-Control']
  },

  // -------------------------------------------------------------
  // 6. Personal Development (شخصی ترقی)
  // -------------------------------------------------------------
  {
    id: 'pdev-1',
    categoryId: 'personal_development',
    categoryTitleUrdu: 'شخصی ترقی',
    categoryTitleEn: 'Personal Development',
    titleUrdu: 'روزانہ ۱ فیصد بہتری کا اصول (The Power of Atomic Habits)',
    titleEn: 'The 1% Daily Improvement Rule',
    shortExplanationUrdu: 'بڑی تبدیلی ایک رات میں نہیں آتی۔ روزانہ اپنے علم، ہنر یا اخلاق میں صرف ۱ فیصد اضافہ سال بھر میں ۳۷ گنا بہتری لاتا ہے۔',
    shortExplanationEn: 'Massive success is the compound interest of tiny daily 1% improvements sustained over time.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 5,
    estimatedTimeUrdu: '۵ منٹ',
    estimatedTimeEn: '5 mins',
    practicalBenefitUrdu: 'سیکھنے کا بوجھ ختم ہوتا ہے اور روزمرہ کا تسلسل (Streak) آسان ہو جاتا ہے۔',
    practicalBenefitEn: 'Removes overwhelm and makes consistent daily practice effortless.',
    practicalExampleUrdu: 'مثال: زینب نے روزانہ صرف ۱۰ منٹ انگریزی کے ۳ جملے بولنے کی مشق کی؛ ۶ ماہ بعد وہ روانی سے بات چیت کرنے لگی۔',
    practicalExampleEn: 'Example: Zainab practiced English for just 10 minutes a day; in 6 months she achieved confident fluency.',
    oneSmallActionUrdu: 'آج کسی ایک نئی مثبت عادت کو صرف ۲ منٹ کے لیے انجام دیں اور کل بھی دہرائیں۔',
    oneSmallActionEn: 'Perform a single 2-minute positive micro-habit today and commit to repeating it tomorrow.',
    sourceReferenceUrdu: 'عادات و نفسیات کا عمومی خلاصہ (اصل الفاظ میں خلاصہ)',
    sourceReference: 'Principles of Habit Psychology',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'بہت بڑا ہدف بنانے سے زیادہ ضروری روزانہ ۵ سے ۱۵ منٹ کی مستقل مزاجی ہے۔',
      'جب بھی سستی آئے، کام کو اتنا چھوٹا کر لیں کہ انکار کرنا ناممکن ہو۔',
      'کامیابی کسی ایک دن کا معجزہ نہیں بلکہ روزانہ کے چھوٹے فیصلوں کا مجموعہ ہے۔'
    ],
    keyTakeawaysEn: [
      'Daily 10-minute consistency beats sporadic hours of burnout.',
      'Shrink the resistance: make the first step too easy to fail.',
      'Success is the sum of small daily choices repeated steadily.'
    ],
    practicalActionStepsUrdu: [
      'ایک ایسی مثبت عادت منتخب کریں جو صرف ۲ منٹ لے (جیسے ۱ صفحہ پڑھنا یا پانی پینا)۔',
      'اسے روزانہ مقررہ وقت پر دہرانے کا عہد کریں۔'
    ],
    practicalActionStepsEn: [
      'Pick one 2-minute micro habit (e.g. reading 1 page or planning the day).',
      'Commit to executing it at the exact same hour every day.'
    ],
    reviewQuestionUrdu: '۱ فیصد روزانہ بہتری کے قانون کا بنیادی نکتہ کیا ہے؟',
    reviewQuestionEn: 'What is the core takeaway of the 1% daily improvement rule?',
    reviewOptions: [
      { id: 'a', textUrdu: 'روزانہ کا چھوٹا تسلسل وقت کے ساتھ غیر معمولی نتائج لاتا ہے', textEn: 'Tiny daily consistency compounds into extraordinary long-term transformation', isCorrect: true },
      { id: 'b', textUrdu: 'ایک ہی دن میں ۱۰ گھنٹے پڑھ کر باقی مہینہ چھوڑ دینا', textEn: 'Studying for 10 hours in one day and doing nothing for a month', isCorrect: false },
      { id: 'c', textUrdu: 'بغیر مشق کے نتائج کی توقع کرنا', textEn: 'Expecting results without continuous repetition', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: مستقل مزاجی پہاڑوں کو ریت بنا دیتی ہے۔',
    gentleRevisionEn: 'Gentle Reminder: Small habits sustained over time move mountains.',
    nextRecommendedStepUrdu: 'اب آپ "وقت کی قیمت اور زندگی کا حقیقی سرمایہ" کا سبق دیکھیں یا ڈیلی اسمارٹ جرنی مکمل کریں۔',
    nextRecommendedStepEn: 'Next step: Read "Value of Time" or complete your Daily Smart Journey.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'book-1',
    impactCategory: 'Teaching/Sharing Knowledge',
    tagsUrdu: ['عادات', 'تسلسل', 'ترقی', 'ہمت', 'وقت'],
    tagsEn: ['Habits', 'Consistency', 'Growth', 'Discipline']
  },

  // -------------------------------------------------------------
  // 7. Money & Financial Literacy (مالیاتی شعور)
  // -------------------------------------------------------------
  {
    id: 'fin-1',
    categoryId: 'financial_literacy',
    categoryTitleUrdu: 'مالیاتی شعور',
    categoryTitleEn: 'Money & Financial Literacy',
    titleUrdu: 'ضرورت اور خواہش کا فرق: ۵۰/۳۰/۲۰ کا بجٹ اصول',
    titleEn: 'Need vs Want: The 50/30/20 Household Budgeting Rule',
    shortExplanationUrdu: 'اپنی آمدن کو ۳ حصوں میں تقسیم کریں: ۵۰٪ بنیادی ضروریات (راشن، کرایہ)، ۳۰٪ جائز خواہشات، اور ۲۰٪ مستقبل کی بچت و خیرات۔',
    shortExplanationEn: 'Split income into essentials (50%), discretionary wants (30%), and savings/charity (20%) to prevent financial anxiety.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 6,
    estimatedTimeUrdu: '۶ منٹ',
    estimatedTimeEn: '6 mins',
    practicalBenefitUrdu: 'مہینے کے آخر میں خالی ہاتھ ہونے اور قرض کے چنگل سے حفاظت۔',
    practicalBenefitEn: 'Eliminates month-end cash crises and prevents predatory debts.',
    practicalExampleUrdu: 'مثال: کامران نے اپنی ۳۰ ہزار آمدنی میں سے ۳ ہزار روپے سب سے پہلے بچت کے الگ لفافے میں رکھے، باقی سے ضروریات اور راشن پورا کیا؛ سال کے آخر میں ایمرجنسی فنڈ تیار ہو گیا۔',
    practicalExampleEn: 'Example: Kamran set aside 10% (Rs 3,000) from his modest wage into an emergency envelope right on payday, saving him from unexpected debts.',
    oneSmallActionUrdu: 'آج اپنی جیب میں موجود رقم میں سے ۱۰ فیصد الگ کر کے ایک محفوظ جگہ یا لفافے میں رکھیں۔',
    oneSmallActionEn: 'Put 10% of today’s pocket money or earnings into a dedicated savings envelope right now.',
    sourceReferenceUrdu: 'بنیادی مالیاتی خواندگی کے رہنما اصول',
    sourceReference: 'Foundational Financial Literacy Guidelines',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'کسی بھی غیر ضروری چیز کو خریدنے سے پہلے ۲۴ گھنٹے کا وقفہ لیں۔',
      'پہلے بچت الگ کریں، پھر بچ جانے والی رقم سے خرچ کریں۔',
      'چھوٹے چھوٹے روزانہ کے غیر ضروری اخراجات نوٹ کرنے سے بجٹ کا کنٹرول ملتا ہے۔'
    ],
    keyTakeawaysEn: [
      'Apply the 24-hour pause before making impulsive purchases.',
      'Pay your savings first before spending the rest.',
      'Tracking daily micro expenses reveals where money silently leaks.'
    ],
    practicalActionStepsUrdu: [
      'ایک سادہ کاپی یا فون میں آج کے ۳ سب سے بڑے اخراجات لکھیں۔',
      'دیکھیں کہ ان میں کون سی چیز خالصتاً خواہش تھی جس سے بچا جا سکتا تھا۔'
    ],
    practicalActionStepsEn: [
      'Log your top 3 daily expenses in a small notebook or mobile app.',
      'Identify one avoidable expense you can trim without compromising health.'
    ],
    reviewQuestionUrdu: 'مالیاتی آزادی کا سب سے پہلا اور بنیادی اصول کیا ہے؟',
    reviewQuestionEn: 'What is the golden rule of basic personal financial freedom?',
    reviewOptions: [
      { id: 'a', textUrdu: 'خرچ کرنے سے پہلے کم از کم ۱۰ سے ۲۰ فیصد بچت الگ محفوظ کرنا', textEn: 'Setting aside 10-20% savings before spending on discretionary items', isCorrect: true },
      { id: 'b', textUrdu: 'پہلے ساری خواہشات پر خرچ کرنا اور بچ جانے پر سوچنا', textEn: 'Spending on all wants first and saving leftovers', isCorrect: false },
      { id: 'c', textUrdu: 'فضول خرچی کے لیے قرض لینا', textEn: 'Taking loans for luxury lifestyle purchases', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: خرچ سے پہلے بچت الگ کرنا ہی مستقبل کا تحفظ ہے۔',
    gentleRevisionEn: 'Gentle Reminder: Pay your savings first before spending.',
    nextRecommendedStepUrdu: 'اب آپ "کاروبار: پہلے مسئلہ تلاش کرو" پڑھیں یا کیریئر کی راہیں تلاش کریں۔',
    nextRecommendedStepEn: 'Next step: Explore "Business: Problem Solving" or explore Opportunity pathways.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'biz-1',
    impactCategory: 'Ethical Work',
    tagsUrdu: ['بجٹ', 'بچت', 'مالیات', 'پیسے بچانا', 'پیسہ', 'خرچ'],
    tagsEn: ['Budget', 'Savings', 'Finance', 'Money Management']
  },

  // -------------------------------------------------------------
  // 8. Business & Entrepreneurship (کاروبار)
  // -------------------------------------------------------------
  {
    id: 'biz-1',
    categoryId: 'business_entrepreneurship',
    categoryTitleUrdu: 'کاروبار و انٹرپرینیورشپ',
    categoryTitleEn: 'Business & Entrepreneurship',
    titleUrdu: 'پہلے مسئلہ تلاش کرو، پھر پروڈکٹ بناؤ',
    titleEn: 'Find the Real Problem Before Building the Product',
    shortExplanationUrdu: 'ناکام کاروبار وہ ہوتے ہیں جو ایسی چیز بناتے ہیں جس کی کسی کو ضرورت نہیں ہوتی۔ کامیاب کاروبار لوگوں کا اصل مسئلہ حل کرتے ہیں۔',
    shortExplanationEn: 'Most ventures fail by creating products nobody needs. Successful entrepreneurs solve painful, existing problems.',
    difficulty: 'medium',
    difficultyUrdu: 'درمیانہ',
    difficultyEn: 'Intermediate',
    estimatedTimeMinutes: 7,
    estimatedTimeUrdu: '۷ منٹ',
    estimatedTimeEn: '7 mins',
    practicalBenefitUrdu: 'بغیر تحقیق کے سرمائے کا ضیاع نہیں ہوتا اور کسٹمر خوشی سے ادائیگی کرتا ہے۔',
    practicalBenefitEn: 'Prevents wasted capital and ensures strong market demand.',
    practicalExampleUrdu: 'مثال: راشد نے دیکھا کہ گاؤں میں کسانوں کو کھاد کی قیمت معلوم کرنے دور جانا پڑتا ہے؛ اس نے واٹس ایپ پر روزانہ نرخ بتانے کی چھوٹی سروس شروع کی اور دکان داروں سے کمیشن لیا۔',
    practicalExampleEn: 'Example: Rashid noticed farmers traveled far just to check market fertilizer rates; he created a simple WhatsApp update group, charging a modest commission from vendors.',
    oneSmallActionUrdu: 'آج اپنے محلے یا کام کی جگہ پر ۳ ایسے مسائل نوٹ کریں جن پر لوگ اکثر شکایت کرتے ہیں۔',
    oneSmallActionEn: 'Write down 3 recurring frustrations people complain about in your workplace or neighborhood.',
    sourceReferenceUrdu: 'کاروباری حکمتِ عملی کے بنیادی اصول',
    sourceReference: 'Principles of Lean Product Validation',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'پہلے محلے، مارکیٹ یا آن لائن لوگوں سے ان کی روزمرہ مشکلات سنیں۔',
      'بڑے سرمایہ لگانے سے پہلے ایک چھوٹا، کم خرچ پروٹوٹائپ (Sample) ٹیسٹ کریں۔',
      'دیانت دار اور بروقت سروس ہی مستقل گاہک لاتی ہے۔'
    ],
    keyTakeawaysEn: [
      'Interview target users to discover their genuine daily bottlenecks.',
      'Build a simple prototype (MVP) before investing large savings.',
      'Reliable, honest service generates repeat customers.'
    ],
    practicalActionStepsUrdu: [
      'اپنے آس پاس کے ۵ لوگوں سے پوچھیں: "آپ کے روزمرہ کام میں کون سی چیز سب سے زیادہ وقت یا پریشانی لیتی ہے؟"',
      'سوچیں کہ آپ کا ہنر اس کا کیا آسان حل نکال سکتا ہے۔'
    ],
    practicalActionStepsEn: [
      'Ask 5 local peers what repetitive problem costs them the most time.',
      'Brainstorm a low-cost service solving that exact friction.'
    ],
    reviewQuestionUrdu: 'ایک نئے کاروبار کو شروع کرنے کا سب سے محفوظ اور پائیدار پہلا قدم کیا ہے؟',
    reviewQuestionEn: 'What is the safest, most sustainable first step when launching a new service or business?',
    reviewOptions: [
      { id: 'a', textUrdu: 'پہلے کسٹمر کا حقیقی مسئلہ سمجھنا اور چھوٹے پیمانے پر حل ٹیسٹ کرنا', textEn: 'Validating real customer pain points and testing a lean solution first', isCorrect: true },
      { id: 'b', textUrdu: 'بغیر تحقیق کے سارا پیسہ اشتہارات اور دکان کی سجاوٹ پر لگانا', textEn: 'Spending all capital on fancy decor without testing demand', isCorrect: false },
      { id: 'c', textUrdu: 'کسی کی نقل کر کے بغیر سوچے وہی کام شروع کرنا', textEn: 'Blindly copying a competitor without knowing their costs', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: کسٹمر کو پروڈکٹ سے نہیں، اپنے مسئلے کے حل سے غرض ہوتی ہے۔',
    gentleRevisionEn: 'Gentle Reminder: Customers buy solutions to their problems, not mere features.',
    nextRecommendedStepUrdu: 'اب آپ "گفتگو و قیادت: فعال سننا" پڑھیں یا فری لانسنگ کا عملی پورٹ فولیو بنائیں۔',
    nextRecommendedStepEn: 'Next step: Study "Communication: Active Listening" or build your Skill Portfolio.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'comm-1',
    impactCategory: 'Ethical Work',
    tagsUrdu: ['کاروبار', 'کسٹمر', 'انٹرپرینیور', 'سیلز', 'بزنس', 'سٹارٹ اپ'],
    tagsEn: ['Business', 'Customer Discovery', 'Entrepreneurship', 'Sales', 'Startup']
  },

  // -------------------------------------------------------------
  // 9. Communication & Leadership (گفتگو و قیادت)
  // -------------------------------------------------------------
  {
    id: 'comm-1',
    categoryId: 'communication_leadership',
    categoryTitleUrdu: 'گفتگو و قیادت',
    categoryTitleEn: 'Communication & Leadership',
    titleUrdu: 'سننے کا فن: جواب دینے کے بجائے سمجھنے کے لیے سنیں',
    titleEn: 'Active Listening: Listen to Understand, Not Just to Reply',
    shortExplanationUrdu: 'بہترین بات چیت وہ نہیں جو آپ بولتے ہیں، بلکہ وہ ہے کہ آپ دوسرے کو کس قدر توجہ، احترام اور بغیر کاٹے سنتے ہیں۔',
    shortExplanationEn: 'The most impactful communicators are those who listen with full presence and empathy without interrupting.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 4,
    estimatedTimeUrdu: '۴ منٹ',
    estimatedTimeEn: '4 mins',
    practicalBenefitUrdu: 'باہمی اعتماد قائم ہوتا ہے اور غلط فہمیوں کا امکان ۹۰٪ کم ہو جاتا ہے۔',
    practicalBenefitEn: 'Builds instant rapport and dissolves 90% of miscommunications.',
    practicalExampleUrdu: 'مثال: جب کلائنٹ نے غصے میں شکایت کی تو اسلم نے بحث کے بجائے پورا مسئلہ خاموشی سے سنا، پھر کہا: "میں آپ کی پریشانی سمجھتا ہوں، ہم اسے ابھی ٹھیک کرتے ہیں"؛ کلائنٹ فوری پرسکون ہو گیا۔',
    practicalExampleEn: 'Example: When a client complained, Aslam listened completely without interrupting, acknowledged the issue, and resolved it calmly.',
    oneSmallActionUrdu: 'آج کسی سے بات کرتے وقت اپنا فون ایک طرف رکھ دیں اور ان کی بات مکمل ہوئے بغیر نہ بولیں۔',
    oneSmallActionEn: 'Put your phone away during a conversation today and listen until they fully finish speaking.',
    sourceReferenceUrdu: 'ابلاغیات اور باہمی تعلقات کے رہنما اسباق',
    sourceReference: 'Interpersonal Communication Principles',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'جب کوئی بات کر رہا ہو تو اپنا فون نیچے رکھیں اور متوجہ ہوں۔',
      'بات مکمل ہونے کے بعد پہلے تصدیق کریں: "کیا آپ کا مطلب یہ تھا؟"',
      'دوسرے کے جذبات کی تائید کرنا گفتگو کو پرسکون بناتا ہے۔'
    ],
    keyTakeawaysEn: [
      'Put your phone face-down and make respectful eye contact.',
      'Clarify understanding before giving your opinion: "Did you mean...?"',
      'Acknowledge emotions before jumping into logical counterarguments.'
    ],
    practicalActionStepsUrdu: [
      'آج گھر یا دفتر میں کسی سے بات کرتے ہوئے پوری توجہ دیں اور ان کی بات نہ کاٹیں۔',
      'سننے کے بعد نرمی سے تائید کریں۔'
    ],
    practicalActionStepsEn: [
      'Engage in a 5-minute conversation today without checking your screen or interrupting.',
      'Validate their point before offering feedback.'
    ],
    reviewQuestionUrdu: 'فعال سننے (Active Listening) کا سنہری طریقہ کیا ہے؟',
    reviewQuestionEn: 'What defines true active listening?',
    reviewOptions: [
      { id: 'a', textUrdu: 'پوری توجہ سے سننا، بات نہ کاٹنا اور سمجھنے کے بعد شائستگی سے جواب دینا', textEn: 'Listening with full attention without interrupting, then responding thoughtfully', isCorrect: true },
      { id: 'b', textUrdu: 'سامنے والے کی بات کے دوران موبائل اسکرول کرتے رہنا', textEn: 'Looking at screens while someone is talking', isCorrect: false },
      { id: 'c', textUrdu: 'بات مکمل ہونے سے پہلے ہی اپنے دلائل شروع کر دینا', textEn: 'Cutting in with counter-arguments before they finish', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: اچھا بولنے والا بننے کے لیے پہلے اچھا سننے والا بننا پڑتا ہے۔',
    gentleRevisionEn: 'Gentle Reminder: To be a great communicator, first become a great listener.',
    nextRecommendedStepUrdu: 'اب آپ "ڈیجیٹل و اے آئی: پرامپٹ کے ۳ سنہری اصول" پڑھیں یا کمیونٹی سے رابطہ کریں۔',
    nextRecommendedStepEn: 'Next step: Study "Digital & AI Prompting" or connect with the community.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'dig-1',
    impactCategory: 'Family',
    tagsUrdu: ['گفتگو', 'سننا', 'قیادت', 'سیلز', 'کسٹمر', 'اخلاق'],
    tagsEn: ['Listening', 'Empathy', 'Leadership', 'Sales', 'Communication']
  },

  // -------------------------------------------------------------
  // 10. Digital & AI Skills (ڈیجیٹل و اے آئی)
  // -------------------------------------------------------------
  {
    id: 'dig-1',
    categoryId: 'digital_ai',
    categoryTitleUrdu: 'ڈیجیٹل و اے آئی مہارتیں',
    categoryTitleEn: 'Digital & AI Skills',
    titleUrdu: 'اے آئی پرامپٹ کے ۳ سنہری اصول: سیاق، ہدف اور فارمیٹ',
    titleEn: '3 Golden Rules of AI Prompting: Context, Goal, & Format',
    shortExplanationUrdu: 'آرٹیفیشل انٹیلیجنس سے بہترین جواب لینے کے لیے مبہم سوال کے بجائے واضح کردار، تفصیل اور مطلوبہ خاکہ دیں۔',
    shortExplanationEn: 'To get precise results from AI tools, specify who it is (Role), what to do (Goal), and how to format the output (Constraint).',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 5,
    estimatedTimeUrdu: '۵ منٹ',
    estimatedTimeEn: '5 mins',
    practicalBenefitUrdu: 'گھنٹوں کا کام منٹوں میں ہوتا ہے اور بے مقصد ادھورے جوابات سے بچاؤ ملتا ہے۔',
    practicalBenefitEn: 'Turns hours of manual drafting into minutes of focused productivity.',
    practicalExampleUrdu: 'مثال: علی نے "مجھے بزنس بتاؤ" لکھنے کے بجائے پرامپٹ دیا: "تم ایک پاکستانی کریٹو بزنس مینٹور ہو، مجھے طلبہ کے لیے ۵ کم خرچ ہنر سکھانے والے آئیڈیاز آسان اردو پوائنٹس میں دو"؛ اسے زبردست اور عملی جواب ملا۔',
    practicalExampleEn: 'Example: Instead of a vague query, Ali asked AI: "Act as a career mentor, suggest 3 practical zero-capital online skills for students in bullet points," getting actionable insights instantly.',
    oneSmallActionUrdu: 'آج استاد سیکھو AI سے بات کرتے ہوئے ۳ حصوں والا پرامپٹ (کردار + کام + فارمیٹ) لکھ کر آزمائیں۔',
    oneSmallActionEn: 'Test a structured 3-part prompt (Role + Task + Format) with Seekho AI Teacher right now.',
    sourceReferenceUrdu: 'جدید پرامپٹ انجینئرنگ کے رہنما اصول',
    sourceReference: 'Applied Prompt Engineering Standards',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      '۱. کردار بتائیں: "تم اردو کے ایک شفیق استاد ہو..."',
      '۲. ہدف بتائیں: "مجھے ۵ آسان نکات میں بجٹ بنانا سکھاؤ..."',
      '۳. فارمیٹ بتائیں: "صرف گولیوں کی شکل میں اور ۱۰ سال کے بچے کے لیے آسان..."'
    ],
    keyTakeawaysEn: [
      '1. Role: "Act as an experienced mentor..."',
      '2. Task: "Explain how to structure a budget in 5 steps..."',
      '3. Constraint: "Keep it under 100 words, bullet format, simple language."'
    ],
    practicalActionStepsUrdu: [
      'استاد سیکھو AI میں ایک ایسا پرامپٹ آزمائیں جس میں یہ تینوں حصے شامل ہوں۔',
      'دیکھیں کہ نتیجہ کتنا واضح اور موثر آتا ہے۔'
    ],
    practicalActionStepsEn: [
      'Test a 3-part structured prompt in Seekho AI Teacher.',
      'Notice the dramatic boost in clarity and usefulness.'
    ],
    reviewQuestionUrdu: 'اے آئی (جیسے چیٹ جی پی ٹی یا جیمنائی) سے بہترین نتیجہ حاصل کرنے کے لیے پرامپٹ کا ڈھانچہ کیا ہونا چاہیے؟',
    reviewQuestionEn: 'What is the best prompt structure to get quality output from AI models?',
    reviewOptions: [
      { id: 'a', textUrdu: 'کردار (Role) + مخصوص کام (Goal) + مطلوبہ فارمیٹ (Format)', textEn: 'Role + Specific Task/Goal + Desired Format/Constraints', isCorrect: true },
      { id: 'b', textUrdu: 'صرف ایک لفظ لکھ کر چھوڑ دینا', textEn: 'Typing only one vague keyword', isCorrect: false },
      { id: 'c', textUrdu: 'بغیر کسی وضاحت کے عام سوال پوچھنا', textEn: 'Asking generic open questions without context', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: جتنی واضح ہدایات دیں گے، AI اتنا ہی شاندار کام کرے گا۔',
    gentleRevisionEn: 'Gentle Reminder: Precise instructions produce extraordinary AI results.',
    nextRecommendedStepUrdu: 'اب آپ "عملی پورٹ فولیو" کا سبق پڑھیں یا اے آئی چیٹ بوٹ سے کوئی سوال پوچھیں۔',
    nextRecommendedStepEn: 'Next step: Study "Proof of Work Portfolio" or practice with AI Teacher.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'car-1',
    impactCategory: 'Teaching/Sharing Knowledge',
    tagsUrdu: ['اے آئی', 'پرامپٹ', 'ٹیکنالوجی', 'کمپیوٹر', 'ڈیجیٹل'],
    tagsEn: ['AI', 'Prompting', 'Productivity', 'Digital Skills']
  },

  // -------------------------------------------------------------
  // 11. Career & Freelancing (کیریئر و فری لانسنگ)
  // -------------------------------------------------------------
  {
    id: 'car-1',
    categoryId: 'career_freelancing',
    categoryTitleUrdu: 'کیریئر و فری لانسنگ',
    categoryTitleEn: 'Career & Freelancing',
    titleUrdu: 'عملی پورٹ فولیو: ڈگری سے زیادہ کام کا ثبوت بولتا ہے',
    titleEn: 'Proof of Work: Why Your Portfolio Speaks Louder Than a Resume',
    shortExplanationUrdu: 'آن لائن یا آف لائن مارکیٹ میں کلائنٹ کو لمبی باتوں کے بجائے ۳ بہترین کام کے نمونے دکھائیں جن سے آپ کی صلاحیت ثابت ہو۔',
    shortExplanationEn: 'Clients and employers care about tangible proof. Showing 3 polished sample projects wins trust faster than words.',
    difficulty: 'medium',
    difficultyUrdu: 'درمیانہ',
    difficultyEn: 'Intermediate',
    estimatedTimeMinutes: 6,
    estimatedTimeUrdu: '۶ منٹ',
    estimatedTimeEn: '6 mins',
    practicalBenefitUrdu: 'پہلا آرڈر یا ملازمت حاصل کرنے کے امکانات ۳ گنا بڑھ جاتے ہیں۔',
    practicalBenefitEn: 'Triples your chance of securing real freelance clients or employment.',
    practicalExampleUrdu: 'مثال: ثناء نے کینوا سیکھنے کے بعد اپنے علاقے کی بیکری کے لیے ۳ مفت سوشل میڈیا پوسٹرز بنا کر دکھائے؛ بیکری مالک نے خوش ہو کر اسے ماہانہ گرافک ڈیزائن کا معاوضہ دے دیا۔',
    practicalExampleEn: 'Example: Sana designed 3 sample menu flyers for a neighborhood cafe; the owner immediately hired her on a monthly retainer.',
    oneSmallActionUrdu: 'آج اپنے ہنر کا ایک چھوٹا نمونہ تیار کر کے سیکھو پورٹ فولیو میں محفوظ کریں۔',
    oneSmallActionEn: 'Create 1 clean sample project demonstrating your skill and log it into your portfolio.',
    sourceReferenceUrdu: 'فری لانسنگ اور ڈیجیٹل مارکیٹ کے تجربات',
    sourceReference: 'Practical Freelance Career Frameworks',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'فرضی پروجیکٹ کے بجائے کسی حقیقی محلے دار یا دکان دار کا مسئلہ حل کر کے نمونہ بنائیں۔',
      'ہمیشہ کام کے ساتھ دکھائیں کہ اس سے وقت یا پیسہ کیسے بچا۔',
      'پورٹ فولیو کو صاف، منظم اور آسانی سے کھلنے والے فارمیٹ میں رکھیں۔'
    ],
    keyTakeawaysEn: [
      'Build real sample projects solving practical local business needs.',
      'Show the business impact: how your work saved time or generated value.',
      'Keep your portfolio accessible, concise, and clean.'
    ],
    practicalActionStepsUrdu: [
      'اپنے سیکھے گئے ہنر سے ایک مکمل نمونہ (ڈیزائن، تحریر یا حساب کتاب شیٹ) بنائیں۔',
      'اسے "میرا پورٹ فولیو" میں محفوظ کریں۔'
    ],
    practicalActionStepsEn: [
      'Create 1 polished deliverable using your chosen skill today.',
      'Save it into your Seekho My Portfolio section.'
    ],
    reviewQuestionUrdu: 'فری لانسنگ یا نوکری کے انٹرویو میں کلائنٹ کا اعتماد حاصل کرنے کی سب سے ٹھوس چیز کیا ہے؟',
    reviewQuestionEn: 'What is the most convincing proof of competence for clients or employers?',
    reviewOptions: [
      { id: 'a', textUrdu: 'عملی پورٹ فولیو جس میں اصل کام کے ۳ بہترین نمونے موجود ہوں', textEn: 'A tangible proof-of-work portfolio with 3 polished sample projects', isCorrect: true },
      { id: 'b', textUrdu: 'صرف زبانی دعوے کرنا', textEn: 'Mere verbal claims without visual proof', isCorrect: false },
      { id: 'c', textUrdu: 'کسی دوسرے کا کام چرا کر اپنا بتانا', textEn: 'Plagiarizing someone else’s work', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: ثبوت الفاظ سے زیادہ گونجتا ہے۔',
    gentleRevisionEn: 'Gentle Reminder: Tangible proof of work speaks louder than promises.',
    nextRecommendedStepUrdu: 'اب آپ "مواقع اور کیریئر راہیں" ٹیب کھول کر اپنے ہنر کے متعلق نوکریاں دیکھیں۔',
    nextRecommendedStepType: 'skills',
    impactCategory: 'Ethical Work',
    tagsUrdu: ['پورٹ فولیو', 'فری لانسنگ', 'کیریئر', 'ہنر', 'کمائی', 'نوکری'],
    tagsEn: ['Portfolio', 'Freelancing', 'Career', 'Proof of Work']
  },

  // -------------------------------------------------------------
  // 12. Practical Life Skills (عملی زندگی کی مہارتیں)
  // -------------------------------------------------------------
  {
    id: 'life-1',
    categoryId: 'practical_life_skills',
    categoryTitleUrdu: 'عملی زندگی کی مہارتیں',
    categoryTitleEn: 'Practical Life Skills',
    titleUrdu: 'اہم دستاویزات کی فائلنگ اور وقت کی حفاظت',
    titleEn: 'Organizing Critical Documents & Time Protection',
    shortExplanationUrdu: 'شناختی کارڈ، بلز، میڈیکل رپورٹس اور تعلیمی اسناد کو ایک شفاف فولڈر اور ڈیجیٹل تصویر میں محفوظ رکھنا ہنگامی پریشانی سے بچاتا ہے۔',
    shortExplanationEn: 'Keeping critical identity, utility, and medical papers neatly organized saves hours of stress during emergencies.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 5,
    estimatedTimeUrdu: '۵ منٹ',
    estimatedTimeEn: '5 mins',
    practicalBenefitUrdu: 'ضرورت کے وقت تلاش کی پریشانی ختم اور وقت کا تحفظ۔',
    practicalBenefitEn: 'Zero emergency panic and seamless family administrative clarity.',
    practicalExampleUrdu: 'مثال: جب زبیر کو ہسپتال میں بچے کی پیدائش کا سرٹیفکیٹ چاہیے تھا تو اس نے فون پر ڈیجیٹل فولڈر کھول کر فوراً تصویر دکھائی اور گھنٹوں کی دوڑ دھوپ سے بچ گیا۔',
    practicalExampleEn: 'Example: When Zubair needed emergency verification, he accessed organized digital scans on his phone, avoiding panic and delays.',
    oneSmallActionUrdu: 'آج اپنے گھر کے تمام ضروری شناختی کارڈز اور بلز کی ایک واضح تصویر کھینچ کر محفوظ البم میں رکھیں۔',
    oneSmallActionEn: 'Take clear digital scans/photos of your primary ID documents and store them securely.',
    sourceReferenceUrdu: 'گھریلو انتظام اور روزمرہ زندگی کے اصول',
    sourceReference: 'Home Organization & Safety Fundamentals',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'تمام شناختی و تعلیمی کاغذات کی ایک ایک واضح تصویر اپنے موبائل کے محفوظ فولڈر میں رکھیں۔',
      'گھر کے تمام ضروری بلز کی تاریخ ایک ڈائری پر لکھیں۔',
      'منظم انسان کے دماغ پر غیر ضروری بوجھ نہیں ہوتا۔'
    ],
    keyTakeawaysEn: [
      'Store secure digital photos of essential certificates on your phone.',
      'Log utility due dates in a visible calendar.',
      'Order in physical spaces creates peace in mental spaces.'
    ],
    practicalActionStepsUrdu: [
      'آج اپنے گھر کا کوئی ایک بکھرا ہوا دراز یا کاغذات کا لفافہ صاف اور ترتیب وار کریں۔',
      'ضروری ایمرجنسی نمبرز ایک پرچی پر لکھ کر محفوظ جگہ چسپاں کریں۔'
    ],
    practicalActionStepsEn: [
      'Organize one cluttered desk drawer or document folder today.',
      'Write emergency family contact numbers on a dedicated card.'
    ],
    reviewQuestionUrdu: 'گھریلو اور ذاتی دستاویزات کو منظم رکھنے کا سب سے بڑا فوری فائدہ کیا ہے؟',
    reviewQuestionEn: 'What is the most immediate benefit of organized personal paperwork?',
    reviewOptions: [
      { id: 'a', textUrdu: 'ہنگامی صورتحال میں فوری دستیابی اور ذہنی سکون', textEn: 'Immediate accessibility and peace of mind during urgent situations', isCorrect: true },
      { id: 'b', textUrdu: 'گھر میں کاغذوں کا ڈھیر لگنا', textEn: 'Creating unnecessary clutter', isCorrect: false },
      { id: 'c', textUrdu: 'کاغذات کھو جانے کا خوف بڑھنا', textEn: 'Increasing panic', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: صفائی اور تنظیم زندگی کو آسان اور محفوظ بناتی ہے۔',
    gentleRevisionEn: 'Gentle Reminder: Orderliness brings calm and saves critical time.',
    nextRecommendedStepUrdu: 'اب آپ "ماحول: پانی کی حفاظت" کا سبق دیکھیں یا گھریلو اچھا کام لاگ کریں۔',
    nextRecommendedStepEn: 'Next step: Study "Environment: Water Conservation" or log a household deed.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'env-1',
    impactCategory: 'Family',
    tagsUrdu: ['تنظیم', 'دستاویزات', 'گھریلو مہارت', 'حفاظت', 'انتظام'],
    tagsEn: ['Organization', 'Documents', 'Life Skills', 'Home Safety']
  },

  // -------------------------------------------------------------
  // 13. Environment & Community (ماحول اور سماجی خدمت)
  // -------------------------------------------------------------
  {
    id: 'env-1',
    categoryId: 'environment_community',
    categoryTitleUrdu: 'ماحول اور سماجی خدمت',
    categoryTitleEn: 'Environment & Community',
    titleUrdu: 'پانی کی حفاظت: وضو میں بھی اسراف سے پرہیز',
    titleEn: 'Water Conservation: Avoiding Wastefulness Even at Running Streams',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    shortExplanationUrdu: 'رسول اللہ ﷺ نے جاری نہر کے کنارے بھی وضو کرتے وقت ضرورت سے زیادہ پانی بہانے سے منع فرمایا۔ قدرتی وسائل کی قدر عبادت ہے۔',
    shortExplanationEn: 'The Prophet ﷺ forbade wasting water even when performing ablution by a flowing river, teaching radical ecological consciousness.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 4,
    estimatedTimeUrdu: '۴ منٹ',
    estimatedTimeEn: '4 mins',
    practicalBenefitUrdu: 'ماحولیاتی بقا، پانی کے بحران سے بچاؤ اور قومی وسائل کی حفاظت۔',
    practicalBenefitEn: 'Preserves vital freshwater resources and instills mindful conservation.',
    practicalExampleUrdu: 'مثال: ارشد نے وضو اور برش کرتے ہوئے نل کھلا چھوڑنے کے بجائے مگ میں پانی استعمال کرنا شروع کیا، جس سے روزانہ ۲۰ لیٹر پانی ضائع ہونے سے بچا۔',
    practicalExampleEn: 'Example: Arshad switched to using a mug for brushing and ablution rather than leaving the tap running, saving 20 liters of water daily.',
    oneSmallActionUrdu: 'آج ہاتھ دھوتے، برش کرتے یا وضو کرتے وقت نلکا آدھا کھولیں اور ضرورت کے بغیر بند رکھیں۔',
    oneSmallActionEn: 'Turn off the tap completely while soaping hands or brushing teeth today.',
    sourceReferenceUrdu: 'سنن ابن ماجہ: ۴۲۵، مسند احمد: ۷۰۶۵ - حضرت عبداللہ بن عمروؓ',
    sourceReference: 'Sunan Ibn Majah 425, Musnad Ahmad 7065',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'نلکا کھلا چھوڑنے کے بجائے صرف ضرورت کے وقت کھولیں۔',
      'گھر کا کوئی ٹپکتا ہوا نل فوری ٹھیک کروانا صدقہ اور کفایت شعاری ہے۔',
      'ماحول کو صاف رکھنا اور درخت لگانا صدقہ جاریہ ہے۔'
    ],
    keyTakeawaysEn: [
      'Never leave faucets running freely while brushing or washing.',
      'Fixing a leaking tap saves hundreds of liters and counts as stewardship.',
      'Planting trees and keeping streets clean is continuous charity.'
    ],
    practicalActionStepsUrdu: [
      'آج دانت صاف کرتے یا وضو کرتے ہوئے نلکا آدھا کھولیں اور ضیاع روکیں۔',
      'گھر کے کسی گملے یا پودے کو پانی دیں۔'
    ],
    practicalActionStepsEn: [
      'Turn off the faucet while soaping hands or brushing teeth today.',
      'Water a house plant or outdoor tree mindful of conservation.'
    ],
    reviewQuestionUrdu: 'نبی کریم ﷺ نے وضو کے پانی کے اسراف کے بارے میں کیا ارشاد فرمایا؟',
    reviewQuestionEn: 'What did the Prophet ﷺ instruct regarding water waste during ablution?',
    reviewOptions: [
      { id: 'a', textUrdu: 'اگرچہ تم بہتی ہوئی نہر پر ہی کیوں نہ ہو، اسراف مت کرو', textEn: 'Do not be wasteful even if you are by a flowing river', isCorrect: true },
      { id: 'b', textUrdu: 'جتنا مرضی پانی بہاؤ کوئی حرج نہیں', textEn: 'Use unlimited water without concern', isCorrect: false },
      { id: 'c', textUrdu: 'صرف مسجد میں احتیاط کرو، گھر میں نہیں', textEn: 'Care only at the mosque, not at home', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: قدرتی وسائل امانت ہیں، ان کا تحفظ صدقہ ہے۔',
    gentleRevisionEn: 'Gentle Reminder: Natural resources are trusts; saving them is charity.',
    nextRecommendedStepUrdu: 'اب آپ "My Impact" میں جا کر ماحولیاتی نیکی لاگ کریں یا کتابوں کی دانائی دیکھیں۔',
    nextRecommendedStepEn: 'Next step: Log an environmental deed in My Impact or explore Books & Ideas.',
    nextRecommendedStepType: 'impact',
    impactCategory: 'Environment',
    tagsUrdu: ['پانی کی بچت', 'ماحول', 'صدقہ', 'اسراف', 'صفائی'],
    tagsEn: ['Water Conservation', 'Environment', 'Civic Duty', 'Ecology']
  },

  // -------------------------------------------------------------
  // 14. Books & Ideas (کتابیں اور منتخب افکار)
  // -------------------------------------------------------------
  {
    id: 'book-1',
    categoryId: 'books_ideas',
    categoryTitleUrdu: 'کتابیں اور منتخب افکار',
    categoryTitleEn: 'Books & Ideas',
    titleUrdu: 'وقت کی قیمت اور زندگی کا حقیقی سرمایہ',
    titleEn: 'The Value of Time as Irreplaceable Human Capital',
    shortExplanationUrdu: 'انسان دنوں کا مجموعہ ہے؛ جب ایک دن گزرتا ہے تو انسان کا ایک حصہ گھٹ جاتا ہے۔ وقت وہ دولت ہے جو خریدی نہیں جا سکتی۔',
    shortExplanationEn: 'Human life is a finite collection of days; whenever a day passes, a piece of your earthly existence goes with it.',
    difficulty: 'easy',
    difficultyUrdu: 'ابتدائی',
    difficultyEn: 'Easy',
    estimatedTimeMinutes: 5,
    estimatedTimeUrdu: '۵ منٹ',
    estimatedTimeEn: '5 mins',
    practicalBenefitUrdu: 'فضول اسکرولنگ کا خاتمہ اور بامقصد زندگی کا آغاز۔',
    practicalBenefitEn: 'Replaces aimless doomscrolling with purposeful time stewardship.',
    practicalExampleUrdu: 'مثال: وقاص نے رات کو سونے سے پہلے سوشل میڈیا کے بجائے اگلے دن کے ۳ اہم ترین کام لکھنا شروع کیے؛ اس کا ہر دن پرسکون اور نتیجہ خیز ہو گیا۔',
    practicalExampleEn: 'Example: Waqas replaced late-night phone doomscrolling with writing down his top 3 priorities for tomorrow, transforming his morning focus.',
    oneSmallActionUrdu: 'آج رات سونے سے پہلے کل کے لیے صرف ۳ اہم ترین کام ایک کاغذ پر لکھیں۔',
    oneSmallActionEn: 'Write down tomorrow’s 3 critical needle-moving priorities on a note before sleeping.',
    sourceReferenceUrdu: 'حسن بصریؒ کا معروف مقولہ اور کلاسیکی کتبِ دانائی کا خلاصہ',
    sourceReference: 'Classical Wisdom on Time Management (Hasan al-Basri)',
    verifiedSource: true,
    keyTakeawaysUrdu: [
      'ہر صبح اپنے ۳ سب سے اہم کاموں کی فہرست بنائیں۔',
      'سوشل میڈیا کے بے مقصد استعمال پر روزانہ وقت کی حد لگائیں۔',
      'وہ وقت سب سے قیمتی ہے جو کسی کو نفع پہنچانے یا نیا ہنر سیکھنے میں گزرے۔'
    ],
    keyTakeawaysEn: [
      'List your top 3 needle-moving tasks every morning.',
      'Set conscious app timers on mindless digital scrolling.',
      'Time spent learning or helping someone is compounding capital.'
    ],
    practicalActionStepsUrdu: [
      'آج شام کو ۲ منٹ جائزہ لیں: "آج میرا کون سا گھنٹہ سب سے زیادہ نفع بخش تھا؟"',
      'کل کے لیے ایک اہم ہدف کاپی پر لکھ کر سوئیں۔'
    ],
    practicalActionStepsEn: [
      'Reflect for 2 minutes tonight on which hour was most fruitful today.',
      'Write tomorrow\'s primary single goal before going to sleep.'
    ],
    reviewQuestionUrdu: 'حسن بصریؒ کے قول کے مطابق انسان کی اصل حقیقت کیا ہے؟',
    reviewQuestionEn: 'According to classical wisdom, what is the core reality of human life on earth?',
    reviewOptions: [
      { id: 'a', textUrdu: 'انسان چند دنوں کا مجموعہ ہے، ایک دن گیا تو اس کا ایک حصہ گھٹ گیا', textEn: 'Man is but a collection of days; when a day departs, a part of him departs', isCorrect: true },
      { id: 'b', textUrdu: 'وقت کی کوئی خاص قدر نہیں ہوتی', textEn: 'Time is infinite and inconsequential', isCorrect: false },
      { id: 'c', textUrdu: 'صرف آرام کرنا ہی زندگی کا مقصد ہے', textEn: 'Continuous idle rest is the only purpose', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: وقت دنیا کی وہ واحد چیز ہے جو خرچ ہونے کے بعد واپس نہیں خریدی جا سکتی۔',
    gentleRevisionEn: 'Gentle Reminder: Time is the only resource that cannot be repurchased once spent.',
    nextRecommendedStepUrdu: 'اب آپ "قرآن سے رہنمائی: علم اور تدبر" پڑھیں یا لائف روڈ میپ کا جائزہ لیں۔',
    nextRecommendedStepEn: 'Next step: Study "Quranic Guidance: Knowledge & Reflection" or review your Life Roadmap.',
    nextRecommendedStepType: 'knowledge',
    nextRecommendedStepId: 'quran-1',
    impactCategory: 'Teaching/Sharing Knowledge',
    tagsUrdu: ['وقت', 'دانائی', 'کتابیں', 'مقصد', 'حکمت', 'پلاننگ'],
    tagsEn: ['Time Mastery', 'Wisdom', 'Philosophy', 'Focus']
  }
];

// =============================================================
// INTELLIGENCE SYSTEM CONNECTIVITY HELPERS
// =============================================================

/**
 * Returns a dynamic, personalized rationale explaining why this specific knowledge
 * card is directly useful for this learner right now.
 */
export function getPersonalizedWhyUseful(
  item: KnowledgeLibraryItem,
  profile: UserProfile,
  language: Language
): string {
  const isUrdu = language === 'ur';
  const age = profile.ageGroup || '19-25';
  const occupation = profile.currentOccupation || '';
  const primaryGoal = typeof profile.goals === 'string' ? profile.goals : '';

  // Tailored personal explanations
  if (item.categoryId === 'financial_literacy') {
    if (isUrdu) {
      return `چونکہ آپ کا مقصد "${primaryGoal || 'مالی خود انحصاری'}" ہے اور آپ ${occupation ? `${occupation} کے طور پر` : 'اپنی زندگی میں'} حلال روزگار و بچت کو بڑھانا چاہتے ہیں، اس لیے یہ سبق آپ کے لیے بنیادی بنیاد فراہم کرتا ہے۔`;
    } else {
      return `Since your goal is "${primaryGoal || 'Financial Independence'}", this lesson provides the exact foundational budgeting formula suited for your current journey.`;
    }
  }

  if (item.categoryId === 'character_ethics' || item.categoryId === 'hadith') {
    if (isUrdu) {
      return `روزمرہ کے دباؤ اور تعلقات میں ٹھہراؤ لانے کے لیے یہ نبوی حکمت آپ کی جذباتی قوت اور ذہنی سکون کو فوری تقویت دے گی۔`;
    } else {
      return `To bring calm and emotional balance into your daily interactions, this prophetic principle provides immediate practical clarity.`;
    }
  }

  if (item.categoryId === 'digital_ai' || item.categoryId === 'career_freelancing') {
    if (isUrdu) {
      return `آپ کے ہنر اور مستقبل کے مواقع کے پیشِ نظر، یہ طریقہ آپ کے کام کو ۳ گنا تیز اور مارکیٹ کے تقاضوں کے مطابق بنائے گا۔`;
    } else {
      return `Aligned with your practical skills, this workflow will accelerate your output by 3x and align you with current market opportunities.`;
    }
  }

  if (item.categoryId === 'business_entrepreneurship' || item.categoryId === 'sahaba') {
    if (isUrdu) {
      return `محنت اور خود انحصاری کا یہ اصول آپ کو بغیر قرض اور سرمائے کے ضیاع کے عملی کامیابی کی طرف گامزن کرے گا۔`;
    } else {
      return `This self-reliance framework will steer you toward practical enterprise without unnecessary debt or wasted capital.`;
    }
  }

  if (isUrdu) {
    return `آپ کی عمر کے گروپ (${age}) اور ذاتی مقاصد کی روشنی میں یہ سبق روزانہ کے فیصلوں میں آپ کو یکسوئی اور برکت فراہم کرے گا۔`;
  } else {
    return `Tailored for your current learning path and daily focus, this lesson brings clarity and practical momentum to your decisions.`;
  }
}

/**
 * Natural Language Search with intelligent intent mapping:
 * - "پیسے بچانے ہیں" -> Financial Literacy, Budgeting, 50/30/20, Money habits
 * - "غصہ کم کرنا ہے" -> Character Development, Emotional self-control, Hadith, Patience
 * - "کاروبار شروع کرنا ہے" -> Business, Sahaba (Abdur Rahman bin Awf), Sales, Communication
 * Limits results to top 4-6 items so user is never overwhelmed.
 */
export function searchKnowledgeLibraryWithIntents(
  query: string,
  items: KnowledgeLibraryItem[],
  selectedCategory: string = 'all'
): KnowledgeLibraryItem[] {
  if (!query || !query.trim()) {
    if (selectedCategory === 'all') return items;
    return items.filter((item) => item.categoryId === selectedCategory);
  }

  const rawQ = query.toLowerCase().trim();

  // Intent 1: Money / Savings / Budget ("پیسے بچانے ہیں", "بچت", "save money", "budget", "خرچ کم کرنا")
  const isMoneyIntent = /پیسے|بچت|بچانے|خرچ|مالیات|budget|money|save|saving|finan/.test(rawQ);

  // Intent 2: Anger / Emotional Control / Patience ("غصہ کم کرنا ہے", "غصہ", "صبر", "anger", "calm", "patience")
  const isAngerIntent = /غصہ|صبر|خاموش|برداشت|anger|calm|patience|emotion|control/.test(rawQ);

  // Intent 3: Business / Startup / Trade ("کاروبار شروع کرنا ہے", "بزنس", "دکان", "business", "startup", "trade")
  const isBusinessIntent = /کاروبار|بزنس|دکان|تجارت|سیلز|گاہک|مارکیٹ|business|startup|trade|sales|customer/.test(rawQ);

  // Intent 4: Freelancing / Career / Portfolio ("فری لانسنگ", "کیریئر", "freelance", "portfolio", "نوکری")
  const isFreelanceIntent = /فری لانسنگ|کیریئر|پورٹ فولیو|نوکری|ملازمت|freelance|career|portfolio|job/.test(rawQ);

  // Intent 5: AI / Digital ("اے آئی", "کمپیوٹر", "ai", "prompt", "digital")
  const isAIIntent = /اے آئی|کمپیوٹر|پرامپٹ|ٹیکنالوجی|ai|prompt|digital|tech/.test(rawQ);

  // Intent 6: Time / Habits ("وقت", "عادات", "time", "habit", "focus")
  const isTimeIntent = /وقت|ٹائم|عادت|تسلسل|focus|time|habit|routine/.test(rawQ);

  // Intent 7: Environment / Water ("پانی", "ماحول", "water", "environment", "clean")
  const isEnvIntent = /پانی|ماحول|صفائی|شجر|water|environment|clean|green/.test(rawQ);

  // Score each item
  const scored = items.map((item) => {
    let score = 0;
    const cat = item.categoryId;

    if (selectedCategory !== 'all' && cat !== selectedCategory) {
      return { item, score: -100 };
    }

    // Direct text inclusions
    const haystack = `${item.titleUrdu} ${item.titleEn} ${item.shortExplanationUrdu} ${item.shortExplanationEn} ${item.practicalBenefitUrdu} ${item.practicalBenefitEn} ${(item.tagsUrdu || []).join(' ')} ${(item.tagsEn || []).join(' ')} ${item.sourceReferenceUrdu || ''}`.toLowerCase();

    if (haystack.includes(rawQ)) {
      score += 50;
    }

    // Individual words match
    const words = rawQ.split(/\s+/);
    for (const w of words) {
      if (w.length > 2 && haystack.includes(w)) {
        score += 15;
      }
    }

    // Intent boosters
    if (isMoneyIntent && (cat === 'financial_literacy' || item.id === 'fin-1' || item.id === 'quran-2' || item.id === 'sahaba-1')) {
      score += 100;
    }

    if (isAngerIntent && (cat === 'character_ethics' || item.id === 'char-1' || item.id === 'hadith-1' || item.id === 'hadith-2')) {
      score += 100;
    }

    if (isBusinessIntent && (cat === 'business_entrepreneurship' || item.id === 'biz-1' || item.id === 'sahaba-1' || cat === 'communication_leadership' || cat === 'financial_literacy')) {
      score += 100;
    }

    if (isFreelanceIntent && (cat === 'career_freelancing' || item.id === 'car-1' || cat === 'digital_ai' || cat === 'practical_life_skills')) {
      score += 100;
    }

    if (isAIIntent && (cat === 'digital_ai' || item.id === 'dig-1')) {
      score += 100;
    }

    if (isTimeIntent && (cat === 'books_ideas' || item.id === 'book-1' || cat === 'personal_development' || item.id === 'pdev-1')) {
      score += 100;
    }

    if (isEnvIntent && (cat === 'environment_community' || item.id === 'env-1')) {
      score += 100;
    }

    return { item, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6) // Max 6 results to prevent overwhelm
    .map((s) => s.item);
}

