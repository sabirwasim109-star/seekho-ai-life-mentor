import { Language, UserProfile } from '../types';

export interface LifeDirectionDimension {
  id: string;
  titleUrdu: string;
  titleEn: string;
  category: 'core' | 'skill' | 'impact';
  icon: string;
  color: string;
  currentLevelUrdu: string;
  currentLevelEn: string;
  progressScore: number; // 0 - 100
  summaryUrdu: string;
  summaryEn: string;
  nextStepUrdu: string;
  nextStepEn: string;
  keyActionsUrdu: string[];
  keyActionsEn: string[];
  dunyaAkhirahBalanceUrdu: string;
  dunyaAkhirahBalanceEn: string;
}

export interface FamilyGoalItem {
  id: string;
  categoryUrdu: string;
  categoryEn: string;
  titleUrdu: string;
  titleEn: string;
  targetMemberUrdu: string; // والدین، بچے، بہن بھائی، پورا گھر
  targetMemberEn: string;
  icon: string;
  isCompleted: boolean;
  frequencyUrdu: string;
  frequencyEn: string;
  actionUrdu: string;
  actionEn: string;
  impactUrdu: string;
  impactEn: string;
}

export interface FutureGenerationTopic {
  id: string;
  titleUrdu: string;
  titleEn: string;
  subtitleUrdu: string;
  subtitleEn: string;
  tagUrdu: string;
  tagEn: string;
  icon: string;
  color: string;
  importanceUrdu: string;
  importanceEn: string;
  skillsIncludedUrdu: string[];
  skillsIncludedEn: string[];
  starterActionUrdu: string;
  starterActionEn: string;
  linkedCourseId?: string;
}

export interface CommunityImpactDeed {
  id: string;
  titleUrdu: string;
  titleEn: string;
  tier: 'family' | 'village' | 'society' | 'humanity';
  tierUrdu: string;
  tierEn: string;
  category: 'service' | 'education' | 'environment' | 'charity';
  categoryUrdu: string;
  categoryEn: string;
  icon: string;
  points: number;
  descriptionUrdu: string;
  descriptionEn: string;
  actionPromptUrdu: string;
  actionPromptEn: string;
}

export interface DailyPurposePlan {
  id: string;
  themeUrdu: string;
  themeEn: string;
  mottoUrdu: string;
  mottoEn: string;
  mainFocusUrdu: string;
  mainFocusEn: string;
  actions: {
    id: string;
    type: 'learn' | 'action' | 'family' | 'habit' | 'service';
    typeUrdu: string;
    typeEn: string;
    icon: string;
    titleUrdu: string;
    titleEn: string;
    descriptionUrdu: string;
    descriptionEn: string;
    points: number;
    estimatedMinutes: number;
    isCompleted?: boolean;
  }[];
}

// 1. Generate Multi-dimensional Life Direction based on User Profile
export function generateLifeDirectionDimensions(profile: UserProfile): LifeDirectionDimension[] {
  const completedLessons = profile.completedLessonIds?.length || 0;
  const completedMissions = profile.completedMissionIds?.length || 0;
  const completedGoodDeeds = profile.completedGoodDeedIds?.length || 0;
  const completedIslamic = profile.completedIslamicLessonIds?.length || 0;
  const completedLifeSkills = profile.completedLifeSkillLessonIds?.length || 0;

  return [
    {
      id: 'knowledge',
      titleUrdu: 'علم و فہم',
      titleEn: 'Knowledge & Understanding',
      category: 'core',
      icon: 'BookOpen',
      color: 'emerald',
      currentLevelUrdu: completedLessons >= 5 ? 'مضبوط بنیاد' : 'ابتدائی جستجو',
      currentLevelEn: completedLessons >= 5 ? 'Solid Foundation' : 'Curious Starter',
      progressScore: Math.min(95, Math.max(35, 30 + completedLessons * 10)),
      summaryUrdu: 'نافع علم حاصل کرنا، روزمرہ مسائل کو سمجھنا اور زندگی میں مسلسل سیکھنے کا جذبہ برقرار رکھنا۔',
      summaryEn: 'Acquiring beneficial knowledge and maintaining a continuous learning mindset.',
      nextStepUrdu: 'آج 15 منٹ کا ایک نیا سبق پڑھیں یا سنیں۔',
      nextStepEn: 'Read or listen to a 15-minute new lesson today.',
      keyActionsUrdu: [
        'روزانہ کم از کم 15 منٹ مطالعہ یا نئی اسکل سیکھنا',
        'جو سیکھیں اسے سادہ الفاظ میں دوسروں کو سمجھانا',
        'مفید اور نقصان دہ معلومات میں فرق کرنا'
      ],
      keyActionsEn: [
        'Study or learn a new skill for at least 15 minutes daily',
        'Explain what you learn in simple words to others',
        'Distinguish between beneficial and harmful information'
      ],
      dunyaAkhirahBalanceUrdu: 'علم وہ چراغ ہے جو دنیا میں باوقار روزگار اور آخرت میں درجات کی بلندی کا ذریعہ بنتا ہے۔',
      dunyaAkhirahBalanceEn: 'Beneficial knowledge elevates both worldly livelihood and eternal rewards.'
    },
    {
      id: 'character',
      titleUrdu: 'اخلاق و کردار',
      titleEn: 'Character & Ethics',
      category: 'core',
      icon: 'ShieldCheck',
      color: 'amber',
      currentLevelUrdu: completedLifeSkills >= 3 ? 'پختہ اخلاق' : 'تعمیرِ کردار',
      currentLevelEn: completedLifeSkills >= 3 ? 'Refined Character' : 'Developing',
      progressScore: Math.min(92, Math.max(40, 40 + completedLifeSkills * 12)),
      summaryUrdu: 'سچائی، امانت داری، غصے پر قابو، وعدے کی پابندی اور نرم گفتگو۔',
      summaryEn: 'Honesty, trustworthiness, patience, emotional maturity, and kind speech.',
      nextStepUrdu: 'آج کسی مشکل گفتگو میں صبر اور نرم لہجے کا مظاہرہ کریں۔',
      nextStepEn: 'Practice patience and gentle speech during a tough conversation today.',
      keyActionsUrdu: [
        'غصے کی حالت میں فوری ردِعمل کی بجائے خاموش رہنا',
        'چھوٹے معاملات میں بھی دیانت داری قائم رکھنا',
        'وعدہ پورا کرنا اور وقت کی پابندی کرنا'
      ],
      keyActionsEn: [
        'Pause and remain calm instead of reacting impulsively in anger',
        'Maintain honesty even in minor matters',
        'Honor promises and respect others’ time'
      ],
      dunyaAkhirahBalanceUrdu: 'حسنِ اخلاق میزان میں سب سے بھاری نیکی ہے اور دنیا میں دلوں کو فتح کرتا ہے۔',
      dunyaAkhirahBalanceEn: 'Good character wins hearts in this world and weighs heaviest on the scales.'
    },
    {
      id: 'spiritual',
      titleUrdu: 'عبادت و روحانیت',
      titleEn: 'Spiritual Purpose',
      category: 'core',
      icon: 'Compass',
      color: 'teal',
      currentLevelUrdu: completedIslamic >= 3 ? 'بامقصد ربط' : 'بنیادی تعلق',
      currentLevelEn: completedIslamic >= 3 ? 'Connected Purpose' : 'Basic Link',
      progressScore: Math.min(90, Math.max(45, 45 + completedIslamic * 10)),
      summaryUrdu: 'نماز و تلاوت کا اہتمام، روزمرہ زندگی میں اللہ کی یاد اور آخرت کی فکر۔',
      summaryEn: 'Consistent prayer, Quranic reflection, mindfulness of Allah, and accountability.',
      nextStepUrdu: 'قرآن پاک کی کسی ایک آیت کے ترجمہ پر 3 منٹ غور کریں۔',
      nextStepEn: 'Reflect on the meaning of one Quranic verse for 3 minutes.',
      keyActionsUrdu: [
        'نمازوں کو وقت پر ادا کرنا',
        'صبح و شام کے مسنون اذکار',
        'ہر اچھے کام سے پہلے نیت کی درستگی'
      ],
      keyActionsEn: [
        'Offer prayers on time',
        'Morning & evening supplications',
        'Purity of intention before every good deed'
      ],
      dunyaAkhirahBalanceUrdu: 'روحانی سکون انسان کو دنیا کے دباؤ میں پرسکون اور آخرت میں سرخرو رکھتا ہے۔',
      dunyaAkhirahBalanceEn: 'Spiritual connection keeps one grounded in worldly stress and successful in the hereafter.'
    },
    {
      id: 'skills',
      titleUrdu: 'عملی مہارتیں (Skills)',
      titleEn: 'Practical Skills',
      category: 'skill',
      icon: 'Wrench',
      color: 'blue',
      currentLevelUrdu: profile.currentSkills?.length ? 'ہنرمند' : 'ابتدائی ہنر مند',
      currentLevelEn: profile.currentSkills?.length ? 'Skilled' : 'Novice',
      progressScore: Math.min(96, Math.max(30, 35 + (profile.currentSkills?.length || 1) * 15)),
      summaryUrdu: 'ڈیجیٹل مہارتیں، AI کا استعمال، ابلاغ، کینوا، روزگار اور خود انحصاری۔',
      summaryEn: 'Digital tools, AI prompt mastery, graphic design, communication, and economic self-reliance.',
      nextStepUrdu: 'آج کسی اسکل کی ایک عملی اسائنمنٹ تیار کریں۔',
      nextStepEn: 'Complete one hands-on practical assignment in your chosen skill today.',
      keyActionsUrdu: [
        'AI اور اسمارٹ فون کا بامقصد استعمال سیکھنا',
        'آن لائن یا مقامی مارکیٹ میں کام کی پیشکش کا ہنر',
        'مسائل کو تکنیکی طور پر حل کرنے کی مشق'
      ],
      keyActionsEn: [
        'Learn purposeful use of AI and smartphone tools',
        'Deliver real value in local or digital freelance markets',
        'Practice solving real problems technically'
      ],
      dunyaAkhirahBalanceUrdu: 'حلال اور باوقار روزگار کمانا عبادت کا درجہ رکھتا ہے۔',
      dunyaAkhirahBalanceEn: 'Earning an honest and dignified livelihood is a noble form of worship.'
    },
    {
      id: 'family',
      titleUrdu: 'خاندان و والدین',
      titleEn: 'Family & Home',
      category: 'impact',
      icon: 'Heart',
      color: 'rose',
      currentLevelUrdu: 'سایہ رحمت',
      currentLevelEn: 'Caring Anchor',
      progressScore: Math.min(90, Math.max(50, 50 + completedMissions * 8)),
      summaryUrdu: 'والدین کی خدمت، بہن بھائیوں سے پیار، گھریلو ذمہ داریاں اور پرسکون ماحول۔',
      summaryEn: 'Service to parents, care for siblings, shared home responsibilities, and emotional warmth.',
      nextStepUrdu: 'آج والدین کے ہاتھ چومیں یا ان کی کوئی ضروری بات سنیں۔',
      nextStepEn: 'Spend quality distraction-free time listening to your parents or family today.',
      keyActionsUrdu: [
        'گھر والوں کے ساتھ بغیر موبائل کے روزانہ وقت گزارنا',
        'گھریلو کاموں میں ہاتھ بٹانا',
        'بچوں اور چھوٹوں کی محبت اور تربیت'
      ],
      keyActionsEn: [
        'Spend daily distraction-free time with family',
        'Assist proactively in household tasks',
        'Nurture and guide younger family members'
      ],
      dunyaAkhirahBalanceUrdu: 'صلہ رحمی اور والدین کی دعا سے عمر اور رزق میں برکت ہوتی ہے۔',
      dunyaAkhirahBalanceEn: 'Honoring parents and kin brings blessings in livelihood, lifespan, and eternal grace.'
    },
    {
      id: 'service',
      titleUrdu: 'خدمت و معاشرتی اثر',
      titleEn: 'Community & Service',
      category: 'impact',
      icon: 'Users',
      color: 'indigo',
      currentLevelUrdu: completedGoodDeeds >= 2 ? 'مفید شہری' : 'معاون و ہمدرد',
      currentLevelEn: completedGoodDeeds >= 2 ? 'Active Contributor' : 'Helpful Neighbor',
      progressScore: Math.min(88, Math.max(30, 30 + completedGoodDeeds * 14)),
      summaryUrdu: 'اپنے گاؤں، محلے اور قوم کے مسائل کے حل میں عملی کردار ادا کرنا۔',
      summaryEn: 'Contributing actively to village, neighborhood, civic uplift, and humanitarian relief.',
      nextStepUrdu: 'آج کسی ضرورت مند کی پوشیدہ مدد کریں یا راستہ صاف کریں۔',
      nextStepEn: 'Secretly help someone in need or clear an obstacle from a shared path today.',
      keyActionsUrdu: [
        'اپنے علاقے میں کسی کو کوئی مفید ہنر سکھانا',
        'صفائی اور ماحولیاتی ذمہ داری نبھانا',
        'پریشان حال یا غریب پڑوسی کی خبرگیری'
      ],
      keyActionsEn: [
        'Teach a useful skill to someone in your village or town',
        'Promote cleanliness and care for public spaces',
        'Inquire about and assist neighbors in distress'
      ],
      dunyaAkhirahBalanceUrdu: 'بہترین انسان وہ ہے جو دوسرے انسانوں کے لیے سب سے زیادہ نفع بخش ہو۔',
      dunyaAkhirahBalanceEn: 'The best of people are those who bring the greatest benefit to others.'
    }
  ];
}

// 2. Future Generations Pillars (آنے والی نسل کے لیے)
export const FUTURE_GENERATION_TOPICS: FutureGenerationTopic[] = [
  {
    id: 'ai-future-tech',
    titleUrdu: 'مصنوعی ذہانت اور جدید ٹیکنالوجی',
    titleEn: 'AI & Future Technology',
    subtitleUrdu: 'AI کو سمجھیں، اچھے پرامپٹ لکھیں اور کاموں کو 10 گنا تیز بنائیں',
    subtitleEn: 'Master AI prompts, automation, and 10x productivity tools',
    tagUrdu: 'مستقبل کی بنیادی اسکل',
    tagEn: 'Essential Future Skill',
    icon: 'Sparkles',
    color: 'emerald',
    importanceUrdu: 'آنے والے 10 سال میں ہر پیشے میں AI معاون کی حیثیت اختیار کر جائے گا۔ جو آج سیکھے گا وہ کل آگے رہے گا۔',
    importanceEn: 'In the coming decade, AI will assist every profession. Early learners will lead.',
    skillsIncludedUrdu: ['ChatGPT و Claude کا استعمال', 'پرامپٹ انجینئرنگ', 'AI سے تصویر و مواد بنانا', 'روزمرہ کاموں میں آٹومیشن'],
    skillsIncludedEn: ['Generative AI basics', 'Prompt crafting', 'AI creative workflows', 'Everyday automation'],
    starterActionUrdu: 'آج AI سے اپنے مطالعے یا کام کے متعلق 3 ذہین سوالات پوچھیں۔',
    starterActionEn: 'Ask AI 3 smart questions about your study or work today.',
    linkedCourseId: 'ai-fundamentals-all-ages'
  },
  {
    id: 'digital-safety-balance',
    titleUrdu: 'ڈیجیٹل تحفظ اور متوازن استعمال',
    titleEn: 'Digital Safety & Mindful Tech',
    subtitleUrdu: 'اسکرین کی عادت پر قابو، سائبر فراڈ سے بچاؤ اور پرائیویسی کا تحفظ',
    subtitleEn: 'Break screen addiction, avoid online scams, and secure privacy',
    tagUrdu: 'ذہنی و ڈیجیٹل صحت',
    tagEn: 'Mental & Digital Wellness',
    icon: 'ShieldCheck',
    color: 'blue',
    importanceUrdu: 'ٹیکنالوجی کو غلام بنائیں، اس کے غلام نہ بنیں۔ محفوظ رہنے کا شعور نئی نسل کا سب سے بڑا دفاع ہے۔',
    importanceEn: 'Master technology rather than being controlled by it. Safety is the first defense.',
    skillsIncludedUrdu: ['فیک لنکس و فراڈ کی پہچان', 'مضبوط پاس ورڈز و 2FA', 'اسکرین ٹائم مینجمنٹ', 'ڈیجیٹل لت سے نجات'],
    skillsIncludedEn: ['Scam & phishing awareness', 'Strong passwords & 2FA', 'Screen time discipline', 'Dopamine detox'],
    starterActionUrdu: 'آج رات سونے سے ایک گھنٹہ پہلے تمام اسکرینز بند کرنے کا تجربہ کریں۔',
    starterActionEn: 'Turn off all screens 1 hour before bed tonight.',
    linkedCourseId: 'mobile-digital-skills-beginners'
  },
  {
    id: 'critical-thinking-solving',
    titleUrdu: 'تنقیدی سوچ اور مسئلہ حل کرنا',
    titleEn: 'Critical Thinking & Problem Solving',
    subtitleUrdu: 'افواہوں کی جانچ، حقائق کی تلاش اور منطقی فیصلے کرنے کی صلاحیت',
    subtitleEn: 'Fact-checking, identifying biases, and making sound logical decisions',
    tagUrdu: 'دانش اور فہم',
    tagEn: 'Wisdom & Logic',
    icon: 'Compass',
    color: 'amber',
    importanceUrdu: 'معلومات کی بھرمار میں سچ اور جھوٹ میں تمیز کرنا انسان کا سب سے قیمتی وصف ہے۔',
    importanceEn: 'In an era of information overload, discerning truth from falsehood is priceless.',
    skillsIncludedUrdu: ['خبروں کی تصدیق کرنا', 'مسئلے کو بنیادی اجزاء میں توڑنا', 'تعصبات سے بچنا', 'فیصلہ سازی کے اصول'],
    skillsIncludedEn: ['Fact verification', 'First-principles reasoning', 'Cognitive bias awareness', 'Decision matrices'],
    starterActionUrdu: 'آج سوشل میڈیا پر دیکھی گئی کسی خبر پر فوری یقین کرنے کے بجائے اس کا اصل ذریعہ تلاش کریں۔',
    starterActionEn: 'Verify the primary source of a news item today before believing or sharing.',
    linkedCourseId: 'ai-fundamentals-all-ages'
  },
  {
    id: 'financial-literacy-earning',
    titleUrdu: 'مالی بصیرت اور جدید روزگار',
    titleEn: 'Financial Literacy & Modern Livelihood',
    subtitleUrdu: 'بچت، بجٹ، حلال سرمایہ کاری اور ریموٹ فری لانسنگ سے خود انحصاری',
    subtitleEn: 'Budgeting, halal investments, savings, and remote freelancing',
    tagUrdu: 'خود انحصاری',
    tagEn: 'Self-Reliance',
    icon: 'TrendingUp',
    color: 'teal',
    importanceUrdu: 'پیسے کو سنبھالنا اور حلال طریقے سے کمانا انسان کو قرض اور محتاجی سے بچاتا ہے۔',
    importanceEn: 'Managing money wisely and earning honorably protects against debt and dependency.',
    skillsIncludedUrdu: ['ماہانہ بجٹ بنانا', 'بے جا اخراجات روکنا', 'فری لانسنگ و سروسز بیچنا', 'حلال بچت کے طریقے'],
    skillsIncludedEn: ['Monthly budgeting', 'Expense auditing', 'Selling freelance skills', 'Halal asset growth'],
    starterActionUrdu: 'آج اپنے پچھلے ایک ہفتے کے تمام اخراجات ایک کاغذ پر لکھیں اور فالتو خرچ نوٹ کریں۔',
    starterActionEn: 'Write down all your expenses from the past week and highlight unnecessary spends.',
    linkedCourseId: 'canva-design-freelancing'
  },
  {
    id: 'creativity-communication',
    titleUrdu: 'تخلیقی صلاحیت اور مؤثر ابلاغ',
    titleEn: 'Creativity & Modern Communication',
    subtitleUrdu: 'اپنا مافی الضمیر واضح بیان کرنا، پبلک اسپیکنگ، اور ویژول ڈیزائن',
    subtitleEn: 'Clear articulation, storytelling, active listening, and visual design',
    tagUrdu: 'ابلاغ و اثر پذیری',
    tagEn: 'Communication & Impact',
    icon: 'Layers',
    color: 'rose',
    importanceUrdu: 'جس کے پاس اچھی بات کہنے اور مؤثر انداز میں پیش کرنے کا فن ہے، دنیا اس کی سنتی ہے۔',
    importanceEn: 'Those who articulate ideas with clarity and empathy lead movements and teams.',
    skillsIncludedUrdu: ['واضح بولنا اور سننا', 'کینوا سے پوسٹر و پریزنٹیشن', 'انگریزی و مادری زبان میں اعتماد', 'کہانی بیان کرنا'],
    skillsIncludedEn: ['Active listening', 'Visual storytelling in Canva', 'Confidence in Urdu & English', 'Persuasive speaking'],
    starterActionUrdu: 'آج کسی دوست یا ساتھی کے سامنے 2 منٹ کسی مفید خیال پر پراعتماد انداز میں گفتگو کریں۔',
    starterActionEn: 'Confidently explain one useful idea to a friend or peer for 2 minutes today.',
    linkedCourseId: 'canva-design-freelancing'
  },
  {
    id: 'eco-community-leadership',
    titleUrdu: 'ماحولیاتی تحفظ اور برادری کی خدمت',
    titleEn: 'Eco Stewardship & Community Care',
    subtitleUrdu: 'پانی کی بچت، شجرکاری، کچرے کا انتظام اور برادری کی قیادت',
    subtitleEn: 'Water conservation, tree planting, clean neighborhoods, and civic leadership',
    tagUrdu: 'خدمتِ خلق',
    tagEn: 'Civic Service',
    icon: 'Heart',
    color: 'emerald',
    importanceUrdu: 'زمین اور ہمارے اردگرد کے لوگ ہمارا اثاثہ ہیں۔ ان کی حفاظت اور بہتری ہماری مشترکہ ذمہ داری ہے۔',
    importanceEn: 'Caring for our earth and neighbors is our sacred shared trust and civic duty.',
    skillsIncludedUrdu: ['شجرکاری و سبزہ اگانا', 'پانی کا غیر ضروری ضیاع روکنا', 'محلے کی صفائی مہم', 'مقامی مسائل پر آواز اٹھانا'],
    skillsIncludedEn: ['Planting trees', 'Water conservation', 'Neighborhood cleanups', 'Community organizing'],
    starterActionUrdu: 'آج وضو یا نہانے کے دوران پانی کا کم از کم 30 فیصد ضیاع روکیں۔',
    starterActionEn: 'Save water consciously during ablution or cleaning today.',
    linkedCourseId: 'kitchen-gardening-organic-vegetables'
  }
];

// 3. Family Growth Goals (میرا خاندان)
export const DEFAULT_FAMILY_GOALS: FamilyGoalItem[] = [
  {
    id: 'fam-screen-free-time',
    categoryUrdu: 'تعلقات و محبت',
    categoryEn: 'Connection & Warmth',
    titleUrdu: 'روزانہ 15 منٹ بغیر موبائل خاندانی نشست',
    titleEn: '15 Minutes Daily Screen-Free Family Time',
    targetMemberUrdu: 'پورا گھرانہ',
    targetMemberEn: 'Whole Family',
    icon: 'Users',
    isCompleted: false,
    frequencyUrdu: 'روزانہ',
    frequencyEn: 'Daily',
    actionUrdu: 'کھانے کے وقت یا شام کی چائے پر تمام موبائل فونز ایک طرف رکھ کر آپس کے دن کا احوال سنیں۔',
    actionEn: 'Put phones aside during tea or mealtime and listen to each other.',
    impactUrdu: 'باہمی اعتماد اور دلوں کی دوریاں ختم ہوتی ہیں۔',
    impactEn: 'Restores trust and emotional connection among family members.'
  },
  {
    id: 'fam-parents-honor',
    categoryUrdu: 'والدین کی خدمت',
    categoryEn: 'Parents Care',
    titleUrdu: 'والدین کے آرام کا خصوصی خیال اور دعا کی درخواست',
    titleEn: 'Honoring Parents & Seeking Their Prayers',
    targetMemberUrdu: 'والدین',
    targetMemberEn: 'Parents',
    icon: 'Heart',
    isCompleted: false,
    frequencyUrdu: 'روزانہ',
    frequencyEn: 'Daily',
    actionUrdu: 'روزانہ امی یا ابو کے پاس بیٹھ کر ان کی ضرورت پوچھیں اور محبت بھرا سلام پیش کریں۔',
    actionEn: 'Sit with your parents daily, inquire about their comfort, and greet them with love.',
    impactUrdu: 'والدین کی خوشنودی دنیا و آخرت میں کامیابی کا سب سے بڑا دروازہ ہے۔',
    impactEn: 'Parental pleasure opens gates of divine mercy and lifelong peace.'
  },
  {
    id: 'fam-children-learning',
    categoryUrdu: 'بچوں کی تعلیم و تربیت',
    categoryEn: 'Children Growth',
    titleUrdu: 'بچوں کو روزانہ ایک اچھی کہانی یا ہنر سکھانا',
    titleEn: 'Teach Children One Uplifting Story or Skill',
    targetMemberUrdu: 'بچے اور نوجوان',
    targetMemberEn: 'Children & Youth',
    icon: 'BookOpen',
    isCompleted: false,
    frequencyUrdu: 'ہفتہ وار',
    frequencyEn: 'Weekly',
    actionUrdu: 'بچوں کو سیرتِ طیبہ، صحابہؓ یا کسی عظیم شخصیت کا واقعہ سنائیں یا موبائل کا مثبت استعمال سکھائیں۔',
    actionEn: 'Share an inspiring historic or moral story with children and guide their digital habits.',
    impactUrdu: 'بچوں کے اخلاق اور سوچ میں مثبت اور پائیدار تبدیلی آتی ہے۔',
    impactEn: 'Builds character and lifelong moral anchors in youth.'
  },
  {
    id: 'fam-budget-saving',
    categoryUrdu: 'مالی منصوبہ بندی',
    categoryEn: 'Financial Security',
    titleUrdu: 'گھریلو بچت اور فالتو اخراجات پر باہمی مشاورت',
    titleEn: 'Family Budgeting & Conscious Spending',
    targetMemberUrdu: 'والدین اور بڑے افراد',
    targetMemberEn: 'Adults & Parents',
    icon: 'TrendingUp',
    isCompleted: false,
    frequencyUrdu: 'ماہانہ',
    frequencyEn: 'Monthly',
    actionUrdu: 'مہینے کے شروع میں ضروری اور غیر ضروری اخراجات کا تعین کر کے 10 فیصد بچت کی عادت بنائیں۔',
    actionEn: 'Plan monthly expenses collaboratively and aim for a 10% safety reserve.',
    impactUrdu: 'گھر پر قرض کا بوجھ نہیں آتا اور سکون رہتا ہے۔',
    impactEn: 'Prevents debt anxiety and promotes household stability.'
  },
  {
    id: 'fam-joint-service',
    categoryUrdu: 'مشترکہ نیکی',
    categoryEn: 'Shared Kindness',
    titleUrdu: 'کسی ضرورت مند پڑوسی کو کھانا یا تحفہ بھیجنا',
    titleEn: 'Sending Food or Help to a Neighbor Together',
    targetMemberUrdu: 'پورا گھرانہ',
    targetMemberEn: 'Whole Family',
    icon: 'HeartHandshake',
    isCompleted: false,
    frequencyUrdu: 'ہفتہ وار',
    frequencyEn: 'Weekly',
    actionUrdu: 'گھر میں بنے کھانے میں سے ایک حصہ عزت کے ساتھ کسی پڑوسی یا ضرورت مند کو پہنچائیں۔',
    actionEn: 'Share a portion of home-cooked meal respectfully with a neighbor in need.',
    impactUrdu: 'گھر کے بچوں میں سخاوت اور برادری سے ہمدردی کا جذبہ پروان چڑھتا ہے۔',
    impactEn: 'Instills generosity and civic warmth across generations.'
  }
];

// 4. Community Impact Actions (میرا اثر)
export const COMMUNITY_IMPACT_DEEDS: CommunityImpactDeed[] = [
  {
    id: 'impact-teach-digital',
    titleUrdu: 'کسی کو موبائل یا کمپیوٹر پر ضروری کام سکھانا',
    titleEn: 'Teach Someone a Digital Skill',
    tier: 'village',
    tierUrdu: 'گاؤں و محلہ',
    tierEn: 'Village & Town',
    category: 'education',
    categoryUrdu: 'تعلیم و رہنمائی',
    categoryEn: 'Education',
    icon: 'Laptop',
    points: 25,
    descriptionUrdu: 'اپنے محلے میں کسی دکاندار یا بزرگ کو ایزی پیسہ، گوگل میپ یا وائس ٹائپنگ سکھائیں۔',
    descriptionEn: 'Help a local elder or shopkeeper use digital payments, navigation, or voice typing.',
    actionPromptUrdu: 'آج محلے میں کسی ایک فرد کو موبائل کا کوئی مفید فیچر سکھائیں۔',
    actionPromptEn: 'Teach one useful smartphone feature to someone in your locality today.'
  },
  {
    id: 'impact-clean-street',
    titleUrdu: 'گلی یا پبلک راستے سے کوئی رکاوٹ یا کچرا ہٹانا',
    titleEn: 'Remove Obstacle or Litter from Public Way',
    tier: 'village',
    tierUrdu: 'گاؤں و محلہ',
    tierEn: 'Village & Town',
    category: 'environment',
    categoryUrdu: 'ماحول و صفائی',
    categoryEn: 'Environment',
    icon: 'Sparkles',
    points: 20,
    descriptionUrdu: 'راستے سے پتھر، کانٹا یا گندگی ہٹانا ایمان کا حصہ اور صدقہ ہے۔',
    descriptionEn: 'Clearing harmful obstacles or litter from common pathways is an act of faith and charity.',
    actionPromptUrdu: 'آج چلتے ہوئے کسی پبلک جگہ کو پہلے سے تھوڑا زیادہ صاف چھوڑیں۔',
    actionPromptEn: 'Leave a shared space slightly cleaner than you found it today.'
  },
  {
    id: 'impact-reconcile-people',
    titleUrdu: 'دو لوگوں کے درمیان غلط فہمی دور کرانا',
    titleEn: 'Reconcile Between Two People',
    tier: 'society',
    tierUrdu: 'معاشرہ',
    tierEn: 'Society',
    category: 'service',
    categoryUrdu: 'سماجی خدمت',
    categoryEn: 'Social Service',
    icon: 'HeartHandshake',
    points: 30,
    descriptionUrdu: 'دوستوں، رشتہ داروں یا پڑوسیوں میں صلح کرانا اور دلوں کو جوڑنا عظیم ترین نیکی ہے۔',
    descriptionEn: 'Mending relations and fostering peace between individuals is a noble societal deed.',
    actionPromptUrdu: 'آج کسی ناراض عزیز سے خود آگے بڑھ کر بات کریں یا صلح میں معاون بنیں۔',
    actionPromptEn: 'Reach out to an estranged loved one or facilitate peace between two peers today.'
  },
  {
    id: 'impact-tree-water',
    titleUrdu: 'پودا لگانا یا پیاسے پرندوں / جانوروں کو پانی پلانا',
    titleEn: 'Plant a Seed or Provide Water to Birds',
    tier: 'humanity',
    tierUrdu: 'انسانیت و کائنات',
    tierEn: 'Humanity & Creation',
    category: 'environment',
    categoryUrdu: 'ماحول و کائنات',
    categoryEn: 'Eco Balance',
    icon: 'Sprout',
    points: 20,
    descriptionUrdu: 'ہر جاندار کے ساتھ نیکی کا بدلہ ہے۔ چھت پر پانی کا پیالہ رکھنا یا پودا لگانا صدقہ جاریہ ہے۔',
    descriptionEn: 'Putting water for birds or planting a tree is an enduring continuous charity (Sadaqah Jariyah).',
    actionPromptUrdu: 'آج چھت پر پرندوں کے لیے پانی کا برتن رکھیں یا کسی پودے کو پانی دیں۔',
    actionPromptEn: 'Place fresh water for birds on your roof or water a plant today.'
  }
];

// 5. Intelligent Daily Purpose Generator (آج کا مقصد)
export function generateTodayPurposePlan(profile: UserProfile): DailyPurposePlan {
  const completedCount = profile.completedMissionIds?.length || 0;
  const streak = profile.streakDays || 1;

  return {
    id: `purpose-day-${streak}`,
    themeUrdu: 'چھوٹا قدم، مستقل عمل، بڑی تبدیلی',
    themeEn: 'Small Action, Consistent Effort, Big Change',
    mottoUrdu: 'علم وہ ہے جو عمل میں ڈھلے، اور ہنر وہ ہے جو دوسروں کے کام آئے۔',
    mottoEn: 'True knowledge turns into action, and real skill brings benefit to others.',
    mainFocusUrdu: 'آج اپنی ذات کے لیے ایک نئی مہارت اور خاندان و معاشرے کے لیے ایک نفع بخش عمل کریں۔',
    mainFocusEn: 'Learn one useful skill for yourself and perform one beneficial act for family or community today.',
    actions: [
      {
        id: 'purpose-act-learn',
        type: 'learn',
        typeUrdu: 'علم و ہنر',
        typeEn: 'Learn Skill',
        icon: 'BookOpen',
        titleUrdu: '15 منٹ کا نیا عملی سبق سیکھیں',
        titleEn: 'Complete 15 Mins of Practical Learning',
        descriptionUrdu: 'آج اپنے منتخب کردہ کورس یا اسکل میں سے اگلا مرحلہ مکمل کریں۔',
        descriptionEn: 'Make tangible progress on your current active skill or course.',
        points: 20,
        estimatedMinutes: 15
      },
      {
        id: 'purpose-act-practice',
        type: 'action',
        typeUrdu: 'عملی اطلاق',
        typeEn: 'Take Action',
        icon: 'CheckCircle2',
        titleUrdu: 'سیکھی گئی بات کا ایک عملی قدم اٹھائیں',
        titleEn: 'Take 1 Tangible Practical Step',
        descriptionUrdu: 'صرف پڑھنے پر نہ رکیں، آج اس پر عمل کر کے دکھائیں (مثلاً ایک پرامپٹ لکھیں یا چھوٹا ڈیزائن بنائیں)۔',
        descriptionEn: 'Do not stop at reading; apply what you learned in a real task.',
        points: 15,
        estimatedMinutes: 10
      },
      {
        id: 'purpose-act-family',
        type: 'family',
        typeUrdu: 'خاندان و والدین',
        typeEn: 'Family Care',
        icon: 'Heart',
        titleUrdu: 'گھر والوں کے ساتھ 10 منٹ بغیر موبائل کے وقت',
        titleEn: '10 Mins Screen-Free Family Time',
        descriptionUrdu: 'والدین یا بہن بھائیوں کے ساتھ محبت اور توجہ سے گفتگو کریں یا گھریلو کام میں مدد کریں۔',
        descriptionEn: 'Give undivided attention to parents or family without phone interruptions.',
        points: 15,
        estimatedMinutes: 10
      },
      {
        id: 'purpose-act-service',
        type: 'service',
        typeUrdu: 'خدمت و معاشرہ',
        typeEn: 'Service & Impact',
        icon: 'Users',
        titleUrdu: 'آج کسی ایک شخص کے لیے آسانی پیدا کریں',
        titleEn: 'Create Ease for Someone Today',
        descriptionUrdu: 'کسی کو کوئی مفید بات سکھائیں، راستہ صاف کریں یا کسی کی خاموش مدد کریں۔',
        descriptionEn: 'Share useful knowledge, assist someone in need, or clear a public pathway.',
        points: 15,
        estimatedMinutes: 5
      }
    ]
  };
}
