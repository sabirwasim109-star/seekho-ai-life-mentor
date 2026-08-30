import { SkillCategory } from '../types';

export interface SkillMasterItem {
  id: string;
  slug: string;
  categoryKey: 'digital' | 'traditional' | 'business' | 'professional' | 'future';
  categoryTitleUrdu: string;
  categoryTitleEn: string;
  titleUrdu: string;
  titleEn: string;
  taglineUrdu: string;
  taglineEn: string;
  iconName: string;
  coverGradient: string;
  badgeUrdu: string;
  badgeEn: string;
  requiredDevice: 'mobile' | 'computer' | 'tools' | 'any';
  difficultyLevels: {
    absoluteBeginner: string;
    beginner: string;
    intermediate: string;
    advanced: string;
    expert: string;
  };
  timeToLearnDays: number;
  marketDemand: 'بہت زیادہ' | 'زیادہ' | 'مستحکم' | 'مستقبل کا ہنر';
  // 18 Core Pathway Dimensions
  whatIsUrdu: string;
  whatIsEn: string;
  whyLearnUrdu: string;
  whyLearnEn: string;
  whoIsItForUrdu: string[];
  whoIsItForEn: string[];
  prerequisitesUrdu: string[];
  prerequisitesEn: string[];
  levelsDescriptionUrdu: {
    beginner: string;
    intermediate: string;
    advanced: string;
  };
  levelsDescriptionEn: {
    beginner: string;
    intermediate: string;
    advanced: string;
  };
  lessons: {
    id: string;
    stepNumber: number;
    titleUrdu: string;
    titleEn: string;
    summaryUrdu: string;
    summaryEn: string;
    detailedGuideUrdu: string;
    detailedGuideEn: string;
    practicalActionUrdu: string;
    practicalActionEn: string;
    estimatedMinutes: number;
  }[];
  practiceTasksUrdu: string[];
  practiceTasksEn: string[];
  realWorldProjects: {
    id: string;
    titleUrdu: string;
    titleEn: string;
    descriptionUrdu: string;
    descriptionEn: string;
    deliverableUrdu: string;
    deliverableEn: string;
    stepsUrdu: string[];
    stepsEn: string[];
  }[];
  commonMistakesUrdu: {
    mistake: string;
    solution: string;
  }[];
  commonMistakesEn: {
    mistake: string;
    solution: string;
  }[];
  assessmentQuestions: {
    id: string;
    questionUrdu: string;
    questionEn: string;
    optionsUrdu: string[];
    optionsEn: string[];
    correctIndex: number;
    explanationUrdu: string;
    explanationEn: string;
  }[];
  portfolioDeliverablesUrdu: string[];
  portfolioDeliverablesEn: string[];
  incomePathways: {
    type: 'job' | 'freelancing' | 'local_service' | 'small_business' | 'online_business' | 'teaching' | 'product' | 'consulting';
    typeUrdu: string;
    typeEn: string;
    pathwayUrdu: string;
    pathwayEn: string;
    realisticScopeUrdu: string;
    realisticScopeEn: string;
  }[];
  businessFormulaUrdu: string;
  businessFormulaEn: string;
  ethicalGuidanceUrdu: string[];
  ethicalGuidanceEn: string[];
  nextSkillRecommendation: {
    skillId: string;
    skillTitleUrdu: string;
    skillTitleEn: string;
    whyUrdu: string;
    whyEn: string;
  };
  communityBenefitUrdu: string;
  communityBenefitEn: string;
}

export const SKILL_CATEGORIES_MASTER = [
  {
    id: 'digital',
    titleUrdu: 'ڈیجیٹل مہارتیں اور ٹیکنالوجی',
    titleEn: 'Digital Skills & Tech',
    descUrdu: 'AI، کمپیوٹر، موبائل، گرافکس، ویڈیو، فری لانسنگ اور ای کامرس',
    descEn: 'AI, computers, mobile, design, video editing, freelancing, and online commerce',
    iconName: 'Laptop',
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-800',
    count: 14,
  },
  {
    id: 'traditional',
    titleUrdu: 'روایتی و عملی دستکاری',
    titleEn: 'Traditional & Practical Trades',
    descUrdu: 'سلائی، مرمت، الیکٹریشن، پلمبنگ، زراعت، فوڈ اور گھریلو دستکاری',
    descEn: 'Sewing, repairs, electrician, plumbing, agriculture, food, and trades',
    iconName: 'Wrench',
    color: 'amber',
    gradient: 'from-amber-600 to-orange-800',
    count: 14,
  },
  {
    id: 'business',
    titleUrdu: 'کاروبار، تجارت اور مالیات',
    titleEn: 'Business & Finance',
    descUrdu: 'چھوٹا کاروبار، سیلز، مارکیٹنگ، کھاتہ داری، ذاتی بجٹ اور منافع',
    descEn: 'Small business, sales, marketing, bookkeeping, budgeting, and profit calculation',
    iconName: 'Briefcase',
    color: 'blue',
    gradient: 'from-blue-600 to-indigo-800',
    count: 11,
  },
  {
    id: 'professional',
    titleUrdu: 'پیشہ ورانہ و قائدانہ مہارتیں',
    titleEn: 'Professional & Leadership',
    descUrdu: 'مواصلات، انگریزی، اردو تحریر، پبلک اسپیکنگ، سی وی اور کیریئر',
    descEn: 'Communication, English, Urdu writing, public speaking, CV, and career roadmap',
    iconName: 'GraduationCap',
    color: 'purple',
    gradient: 'from-purple-600 to-violet-800',
    count: 10,
  },
  {
    id: 'future',
    titleUrdu: 'مستقبل کے ہنر اور گرین انرجی',
    titleEn: 'Future & Green Technologies',
    descUrdu: 'سولر ٹیکنالوجی، آٹومیشن، الیکٹرک وہیکلز اور جدید فارمنگ',
    descEn: 'Solar power, automation, electric vehicles, and future agriculture',
    iconName: 'Sparkles',
    color: 'teal',
    gradient: 'from-teal-600 to-cyan-800',
    count: 6,
  },
];

export const SKILLS_MASTER_DATA: SkillMasterItem[] = [
  // 1. AI & Smart Tools
  {
    id: 'skill-ai-tools',
    slug: 'ai-smart-tools',
    categoryKey: 'digital',
    categoryTitleUrdu: 'ڈیجیٹل مہارتیں اور ٹیکنالوجی',
    categoryTitleEn: 'Digital Skills & Tech',
    titleUrdu: 'مصنوعی ذہانت اور سمارٹ اوزار (AI & ChatGPT)',
    titleEn: 'AI & Smart Tools Proficiency',
    taglineUrdu: 'موبائل سے AI کو اپنا سمارٹ اسسٹنٹ بنا کر ریسرچ، تحریر اور کام تیز کرنا',
    taglineEn: 'Master AI on mobile as your smart assistant for research, drafting, and problem solving',
    iconName: 'Cpu',
    coverGradient: 'from-emerald-700 via-teal-800 to-slate-900',
    badgeUrdu: 'سب سے زیادہ مانگ',
    badgeEn: 'Highest Demand',
    requiredDevice: 'mobile',
    difficultyLevels: {
      absoluteBeginner: 'موبائل میں AI ایپ کھول کر آسان اردو میں سوال پوچھنا',
      beginner: 'اچھے اور واضح پرامپٹس لکھ کر مضامین و پیغامات تیار کروانا',
      intermediate: 'کاروباری کسٹمر سروس، ای میلز اور ڈیٹا سمرائزیشن کروانا',
      advanced: 'مختلف AI ٹولز کو ملا کر مکمل پروجیکٹ اور ریسرچ رپورٹ بنانا',
      expert: 'دوسروں کو AI کے محفوظ اور پیداواری استعمال کی تربیت دینا',
    },
    timeToLearnDays: 14,
    marketDemand: 'بہت زیادہ',
    whatIsUrdu: 'مصنوعی ذہانت (AI) کمپیوٹر کا ایسا نظام ہے جو انسانی زبان سمجھ کر سوالات کے فوری جوابات، مضامین، ترجمہ، حساب کتاب اور روزمرہ مسائل کے حل پیش کرتا ہے۔',
    whatIsEn: 'Artificial Intelligence is smart computing technology that comprehends natural language to generate instant answers, writing, translations, and problem solutions.',
    whyLearnUrdu: 'یہ آپ کے گھنٹوں کا کام منٹوں میں کرتی ہے۔ چاہے آپ طالب علم ہوں، گھریلو خاتون، دکاندار یا پروفیشنل—AI آپ کی رفتار اور آمدنی کی صلاحیت کو کئی گنا بڑھا سکتی ہے۔',
    whyLearnEn: 'It accelerates your workflow significantly. Whether student, homemaker, shopkeeper, or professional, AI multiplies your productivity and earning potential.',
    whoIsItForUrdu: [
      'طالب علم جو پڑھائی اور ریسرچ میں مدد چاہتے ہیں',
      'دکاندار اور تاجر جو کسٹمر میسجز اور حساب آسان بنانا چاہتے ہیں',
      'فری لانسرز اور مواد لکھنے والے',
      'ہر وہ شخص جس کے پاس اسمارٹ فون ہے'
    ],
    whoIsItForEn: [
      'Students seeking research and study aid',
      'Shopkeepers needing fast customer replies',
      'Freelancers and content writers',
      'Anyone with a smartphone'
    ],
    prerequisitesUrdu: ['ایک عام اسمارٹ فون', 'انٹرنیٹ کنکشن', 'بنیادی اردو یا انگریزی پڑھنے کی صلاحیت'],
    prerequisitesEn: ['A regular smartphone', 'Internet access', 'Basic reading ability'],
    levelsDescriptionUrdu: {
      beginner: 'بنیادی سوالات پوچھنا، غلط معلومات کو پرکھنا اور روزمرہ مشورے لینا۔',
      intermediate: 'بزنس خطوط، اشتہارات اور لمبی تحریروں کے خلاصے بنوانا۔',
      advanced: 'فری لانسنگ، ڈیٹا اینالسس اور ملٹی ٹول ورک فلو چلانا۔',
    },
    levelsDescriptionEn: {
      beginner: 'Asking basic questions, verifying facts, and daily brainstorming.',
      intermediate: 'Drafting business letters, ads, and comprehensive summaries.',
      advanced: 'Freelancing workflows, data structuring, and multi-tool automation.',
    },
    lessons: [
      {
        id: 'ai-l1',
        stepNumber: 1,
        titleUrdu: '۱. AI کیا ہے اور موبائل میں کیسے چلائیں؟',
        titleEn: '1. What is AI and how to run on mobile?',
        summaryUrdu: 'AI ایپ ڈاؤن لوڈ کرنا، اکاؤنٹ بنانا اور پہلی گفتگو شروع کرنا۔',
        summaryEn: 'Downloading AI apps, creating accounts, and starting your first query.',
        detailedGuideUrdu: 'اپنے فون پر ChatGPT یا Gemini ایپ کھولیں۔ یاد رکھیں کہ AI جادو نہیں بلکہ ایک بہت لائق معاون ہے۔ جب آپ اسے واضح انداز میں ہدایت دیتے ہیں تو یہ بہترین جواب دیتی ہے۔',
        detailedGuideEn: 'Open ChatGPT or Gemini on your phone. Treat AI as a capable assistant—the clearer your instruction, the better its response.',
        practicalActionUrdu: 'آج AI سے پوچھیں: ”مجھے روزانہ ۲۰ منٹ میں انگلش بولنے کی مشق کا آسان شیڈول بنا کر دو۔“',
        practicalActionEn: 'Ask AI today: "Create a simple 20-minute daily schedule for practicing English speaking."',
        estimatedMinutes: 15,
      },
      {
        id: 'ai-l2',
        stepNumber: 2,
        titleUrdu: '۲. پرامپٹ لکھنے کا سنہری فارمولا (Clear Instructions)',
        titleEn: '2. The Golden Prompting Formula',
        summaryUrdu: 'کردار (Role) + کام (Task) + سیاق و سباق (Context) + انداز (Format)',
        summaryEn: 'Role + Task + Context + Output Format',
        detailedGuideUrdu: 'اگر آپ صرف کہیں گے ”خط لکھو“ تو جواب عمومی ہوگا۔ لیکن اگر آپ کہیں گے: ”آپ ایک تجربہ کار استاد ہیں، ایک طالب علم کے لیے ۳ نکات پر مشتمل شائستہ درخواست لکھیں“ تو شاندار جواب ملے گا۔',
        detailedGuideEn: 'Instead of generic prompts, specify persona, context, and exact format for top-notch results.',
        practicalActionUrdu: 'اپنے یا کسی محلے دار کے کام کے لیے ایک واٹس ایپ کسٹمر میسج AI سے تیار کروائیں۔',
        practicalActionEn: 'Draft a polite WhatsApp customer notice for a local business using AI.',
        estimatedMinutes: 20,
      },
      {
        id: 'ai-l3',
        stepNumber: 3,
        titleUrdu: '۳. حقیقت بمقابلہ غلط بیانی (Fact-Checking & Ethics)',
        titleEn: '3. Fact-Checking & Ethical Usage',
        summaryUrdu: 'AI کی بتائی ہوئی ہر بات کو آنکھ بند کر کے نہ مانیں، تصدیق کا طریقہ سیکھیں۔',
        summaryEn: 'Never accept AI claims blindly; learn verification and ethical usage.',
        detailedGuideUrdu: 'AI کبھی کبھار غلط معلومات بھی بنا سکتی ہے۔ خاص طور پر دینی مسائل، ادویات اور قانونی معاملات میں ماہر انسان سے تصدیق ضروری ہے۔ دھوکہ دہی کے لیے AI کا استعمال قطعی حرام ہے۔',
        detailedGuideEn: 'AI can occasionally hallucinate. Verify critical facts and never use AI for deceit.',
        practicalActionUrdu: 'AI کے دیے گئے کسی ۳ جوابات کی خود گوگل یا کتاب سے تصدیق کریں۔',
        practicalActionEn: 'Cross-check 3 facts generated by AI with a trusted source.',
        estimatedMinutes: 15,
      },
    ],
    practiceTasksUrdu: [
      'اپنے روزمرہ معمول کا ایک زبردست نظام الاوقات AI سے بنوائیں',
      'کسی مشکل مضمون یا کتابی پیراگراف کا ۵ سال کے بچے کی سمجھ کے مطابق آسان اردو خلاصہ کروائیں',
      'اپنی مقامی دکان کے لیے ۵ پرکشش اور اخلاقی اشتہاری جملے تیار کریں',
      'کسی دوست کے لیے ایک پرکشش اور باوقار سی وی (CV) کا خاکہ لکھوائیں'
    ],
    practiceTasksEn: [
      'Generate a personalized daily time management routine with AI',
      'Summarize a complex article into simple 5th-grade Urdu',
      'Create 5 engaging ethical ad copies for a local grocery store',
      'Draft a professional resume layout outline for a job seeker'
    ],
    realWorldProjects: [
      {
        id: 'proj-ai-shop',
        titleUrdu: 'مقامی کاروبار کے لیے ڈیجیٹل کسٹمر سروس کٹ',
        titleEn: 'Digital Customer Service Kit for Local Business',
        descriptionUrdu: 'اپنے قریبی جنرل اسٹور، ٹیلر یا کلینک کے لیے واٹس ایپ پر کسٹمرز کو شائستہ اور فوری جواب دینے کے ۱۰ ریڈی میڈ فارمیٹس تیار کریں۔',
        descriptionEn: 'Create 10 courteous, ready-to-use WhatsApp response templates for a local shop, tailor, or clinic.',
        deliverableUrdu: 'فون کے نوٹ پیڈ میں محفوظ ۱۰ اخلاقی اور واضح کسٹمر سروس پیغامات',
        deliverableEn: '10 courteous customer templates saved in your phone notepad',
        stepsUrdu: [
          'دکاندار سے پوچھیں کہ گاہک عام طور پر کیا سوالات پوچھتے ہیں',
          'AI کو پرامپٹ دیں کہ وہ انتہائی شائستہ اور احترام والا اردو جواب لکھے',
          'دکاندار کو دکھا کر ان کی پسند کے مطابق ایڈٹ کریں',
          'ان کے فون میں محفوظ کروا دیں'
        ],
        stepsEn: [
          'Identify frequent customer inquiries with the owner',
          'Prompt AI to draft courteous, respectful Urdu replies',
          'Review and adjust with the owner',
          'Save on their WhatsApp clipboard/notes'
        ],
      },
    ],
    commonMistakesUrdu: [
      {
        mistake: 'AI پر مکمل اندھا اعتماد کرنا اور بنا پڑھے دوسروں کو بھیج دینا۔',
        solution: 'ہمیشہ خود ایک بار پڑھیں، غلطی درست کریں اور انسان کا ذاتی لمس شامل رکھیں۔'
      },
      {
        mistake: 'بہت مبہم اور ایک لفظی سوال پوچھنا۔',
        solution: 'پورا پس منظر، اپنا مقصد اور مطلوبہ لمبائی واضح کریں۔'
      }
    ],
    commonMistakesEn: [
      {
        mistake: 'Blindly copying and pasting AI output without reviewing.',
        solution: 'Always review, fact-check, and personalize the content.'
      },
      {
        mistake: 'Giving vague, single-word prompts.',
        solution: 'Provide clear context, goals, and desired length.'
      }
    ],
    assessmentQuestions: [
      {
        id: 'q-ai-1',
        questionUrdu: 'AI سے بہترین اور کارآمد جواب لینے کے لیے سب سے اہم کیا ہے؟',
        questionEn: 'What is most crucial to obtain a great response from AI?',
        optionsUrdu: [
          'واضح پس منظر، کردار اور مطلوبہ انداز پر مشتمل تفصیلی پرامپٹ دینا',
          'بہت جلدی جلدی بٹن دبانا',
          'صرف ایک لفظ لکھ کر چھوڑ دینا',
          'فون کو ری سٹارٹ کرنا'
        ],
        optionsEn: [
          'Providing a clear prompt with context, role, and output format',
          'Tapping buttons rapidly',
          'Entering only single-word queries',
          'Restarting the phone'
        ],
        correctIndex: 0,
        explanationUrdu: 'جتنا واضح اور تفصیلی پرامپٹ ہوگا، AI اتنا ہی شاندار اور مخصوص جواب دے گی۔',
        explanationEn: 'The more structured and contextual your prompt, the more tailored the AI response.'
      }
    ],
    portfolioDeliverablesUrdu: [
      'AI سے تیار کردہ کسٹمر سروس ٹیمپلیٹس کا مجموعہ',
      'مختلف موضوعات کے ۵ منٹ کے تدریسی خاکے',
      'سوشل میڈیا اور کاروباری پروموشن کے اردو ڈرافٹس'
    ],
    portfolioDeliverablesEn: [
      'Customer service template collection',
      '5-minute study guide outlines',
      'Urdu social promotion copy samples'
    ],
    incomePathways: [
      {
        type: 'freelancing',
        typeUrdu: 'فری لانسنگ (Online Work)',
        typeEn: 'Freelancing',
        pathwayUrdu: 'ریموٹ ریسرچ، ای میل ڈرافٹنگ اور مواد کی تیاری کی خدمات',
        pathwayEn: 'Remote research, email drafting, and content support',
        realisticScopeUrdu: 'شروع میں مفت ۳ کلائنٹس کی مدد کر کے پورٹ فولیو بنائیں، پھر مناسب معاوضہ طے کریں۔',
        realisticScopeEn: 'Build 3 portfolio samples first, then charge fair agreed rates.'
      },
      {
        type: 'local_service',
        typeUrdu: 'مقامی معاونت (Local Support)',
        typeEn: 'Local Support',
        pathwayUrdu: 'مقامی اسکولوں، دکانداروں اور دفاتر کے لیے لیٹرز اور اشتہارات تیار کرنا',
        pathwayEn: 'Drafting notices and promotions for local schools and businesses',
        realisticScopeUrdu: 'مقامی سطح پر فی درخواست یا ماہانہ معاونت کا مناسب حلال معاوضہ۔',
        realisticScopeEn: 'Per-task or monthly retainer for administrative assistance.'
      }
    ],
    businessFormulaUrdu: 'مفت مدد سے اعتماد جیتیں → اچھے نمونے جمع کریں → ماہانہ ”ڈیجیٹل و مواد معاونت“ سروس پیش کریں۔',
    businessFormulaEn: 'Win trust through initial free support → Build solid samples → Offer monthly administrative support.',
    ethicalGuidanceUrdu: [
      'کسی کا حق مارنے، جعلی مضامین یا امتحانات میں دھوکہ دہی کے لیے AI کا استعمال ہرگز نہ کریں۔',
      'کلائنٹ کو سچ بتائیں کہ آپ AI کو بطور معاون اوزار استعمال کر رہے ہیں اور خود کوالٹی چیک کرتے ہیں۔',
      'دیانت داری اور سچائی کو اپنی کمائی کی برکت کا سبب بنائیں۔'
    ],
    ethicalGuidanceEn: [
      'Never use AI for cheating, plagiarism, or deceptive schemes.',
      'Maintain transparency with clients regarding AI-assisted workflows.',
      'Prioritize honesty and verified quality.'
    ],
    nextSkillRecommendation: {
      skillId: 'skill-canva-design',
      skillTitleUrdu: 'کینوا اور گرافک ڈیزائن (Canva Graphic Design)',
      skillTitleEn: 'Canva Graphic Design',
      whyUrdu: 'AI سے بنی تحریر کو جب آپ کینوا کے خوبصورت پوسٹر میں بدلیں گے تو آپ کے کام کی قدر دگنی ہو جائے گی۔',
      whyEn: 'Pairing AI copy with attractive Canva visuals doubles your client market value.'
    },
    communityBenefitUrdu: 'اپنے محلے کے بزرگوں، طلبہ اور غیر تعلیم یافتہ افراد کے سرکاری فارمز، درخواستیں اور خطوط بغیر فیس کے لکھنے میں مدد کریں۔',
    communityBenefitEn: 'Help elderly neighbors, students, and low-literacy individuals draft official applications free of cost.'
  },

  // 2. Graphic Design & Canva
  {
    id: 'skill-canva-design',
    slug: 'canva-graphic-design',
    categoryKey: 'digital',
    categoryTitleUrdu: 'ڈیجیٹل مہارتیں اور ٹیکنالوجی',
    categoryTitleEn: 'Digital Skills & Tech',
    titleUrdu: 'کینوا اور موبائل گرافک ڈیزائن (Canva Design)',
    titleEn: 'Graphic Design with Canva on Mobile & PC',
    taglineUrdu: 'سوشل میڈیا پوسٹرز، بزنس کارڈز اور لوگو بغیر مہنگے کمپیوٹر کے بنانا',
    taglineEn: 'Create social media posters, logos, and cards without expensive hardware',
    iconName: 'Palette',
    coverGradient: 'from-purple-700 via-pink-800 to-slate-900',
    badgeUrdu: 'آسان اور فوری قابلِ عمل',
    badgeEn: 'Fast & Actionable',
    requiredDevice: 'mobile',
    difficultyLevels: {
      absoluteBeginner: 'کینوا میں بنے بنائے ٹیمپلیٹس میں نام اور فون نمبر تبدیل کرنا',
      beginner: 'رنگوں، فونٹ اور تصویروں کی درست ہم آہنگی سیکھنا',
      intermediate: 'سوشل میڈیا پوسٹس، بینرز اور مینو کارڈز خود ڈیزائن کرنا',
      advanced: 'مکمل برانڈ کٹ، لوگو اور پرنٹ ریڈی فائلز بنانا',
      expert: 'آن لائن کلائنٹس اور پرنٹنگ پریس کے لیے پروفیشنل ڈیزائن بنانا',
    },
    timeToLearnDays: 21,
    marketDemand: 'بہت زیادہ',
    whatIsUrdu: 'گرافک ڈیزائن تصاویر، الفاظ اور رنگوں کے ذریعے پیغام کو پرکشش اور واضح انداز میں پیش کرنے کا ہنر ہے۔ کینوا (Canva) موبائل اور کمپیوٹر پر ڈیزائننگ کا سب سے آسان اور مقبول اوزار ہے۔',
    whatIsEn: 'Graphic design combines imagery, typography, and color to communicate visually. Canva is the leading accessible design platform for phones and computers.',
    whyLearnUrdu: 'ہر دکان، اسکول، یوٹیوب چینل اور کاروبار کو روزانہ اشتہار، پوسٹر اور کارڈ کی ضرورت ہوتی ہے۔ یہ ہنر آپ کو چند ہفتوں میں عملی کمانے کا اہل بناتا ہے۔',
    whyLearnEn: 'Every business, school, and creator needs continuous visual content. Mastering Canva makes you immediately commercially viable.',
    whoIsItForUrdu: [
      'گھریلو خواتین جو گھر بیٹھے ڈیزائننگ کرنا چاہتی ہیں',
      'طلبہ جو اپنی جیب خرچ یا پڑھائی کے اخراجات خود اٹھانا چاہتے ہیں',
      'دکاندار جو اپنی مصنوعات کے اشتہار خود بنانا چاہتے ہیں'
    ],
    whoIsItForEn: [
      'Homemakers working remotely from home',
      'Students looking for supplemental income',
      'Business owners promoting their goods'
    ],
    prerequisitesUrdu: ['ایک عام اسمارٹ فون', 'کینوا کی مفت ایپ', 'رنگوں اور ترتیب کی تھوڑی سی حس'],
    prerequisitesEn: ['Smartphone', 'Free Canva app', 'Basic visual aesthetics'],
    levelsDescriptionUrdu: {
      beginner: 'ٹیمپلیٹس میں اردو تحریر شامل کرنا اور تصویریں بدلنا۔',
      intermediate: 'خالی کینوس پر اپنا پوسٹر، کارڈ اور واٹس ایپ اسٹیٹس ڈیزائن کرنا۔',
      advanced: 'برانڈ گائیڈ لائنز، ہائی ریزولوشن پرنٹنگ اور سوشل میڈیا مہمات۔',
    },
    levelsDescriptionEn: {
      beginner: 'Editing ready templates with Urdu text and images.',
      intermediate: 'Designing posters from scratch with balanced layout.',
      advanced: 'Brand guidelines, print-ready files, and social campaigns.',
    },
    lessons: [
      {
        id: 'canva-l1',
        stepNumber: 1,
        titleUrdu: '۱. کینوا کا تعارف اور فون پر انسٹالیشن',
        titleEn: '1. Canva Introduction & Mobile Setup',
        summaryUrdu: 'ایپ ڈاؤن لوڈ کریں، جمیل نوری نستعلیق یا اچھے اردو فانٹ سیٹ کریں۔',
        summaryEn: 'Install app, set up dimensions, and enable clear fonts.',
        detailedGuideUrdu: 'کینوا پر مفت اکاؤنٹ بنائیں۔ سائز کا انتخاب کریں (جیسے Instagram Post: 1080x1080)۔ عناصر (Elements) اور ٹیکسٹ ٹولز کو سمجھیں۔',
        detailedGuideEn: 'Create free account, choose square 1080x1080 canvas, explore elements and Urdu font options.',
        practicalActionUrdu: 'اپنے نام اور پسندیدہ قول کے ساتھ ایک خوبصورت اسلامی اسٹیٹس کارڈ ڈیزائن کریں۔',
        practicalActionEn: 'Create an elegant quote card with your name in Canva today.',
        estimatedMinutes: 20,
      },
      {
        id: 'canva-l2',
        stepNumber: 2,
        titleUrdu: '۲. رنگوں اور فاصلے (Whitespace) کے ۳ اہم اصول',
        titleEn: '2. 3 Golden Rules of Color & Whitespace',
        summaryUrdu: 'کبھی بھی ۵ سے زیادہ رنگ استعمال نہ کریں، پڑھنے میں آسانی اولین ترجیح ہے۔',
        summaryEn: 'Limit palette to 2-3 colors; high contrast for readability.',
        detailedGuideUrdu: 'پوسٹر پر اتنی تحریر نہ بھریں کہ پڑھنا مشکل ہو جائے۔ اہم بات بڑی اور موٹی ہونی چاہیے، تفصیل چھوٹی۔ پس منظر اور تحریر کا رنگ ایک دوسرے سے واضح مختلف ہو۔',
        detailedGuideEn: 'Avoid cluttering. Ensure high contrast between text and background.',
        practicalActionUrdu: 'کسی قریبی بیکری یا درزی کے لیے ایک سادہ اور پرکشش سیل پوسٹر بنائیں۔',
        practicalActionEn: 'Design a clean promotional discount poster for a local tailor/bakery.',
        estimatedMinutes: 25,
      },
    ],
    practiceTasksUrdu: [
      'اپنے فیملی ممبر کے کاروبار کا وزٹنگ کارڈ ڈیزائن کریں',
      'مقامی مسجد یا تعلیمی ادارے کے لیے ماہانہ درس کا معلوماتی پوسٹر تیار کریں',
      'اپنے پسندیدہ موضوع پر ۳ پوسٹس کی سوشل میڈیا سیریز بنائیں'
    ],
    practiceTasksEn: [
      'Design a business card for a family member',
      'Create an announcement poster for a community educational session',
      'Design a 3-part informational social media carousel'
    ],
    realWorldProjects: [
      {
        id: 'proj-canva-local',
        titleUrdu: 'مقامی فاسٹ فوڈ یا دکان کا مکمل سوشل میڈیا پیکج',
        titleEn: 'Social Media Starter Kit for Local Restaurant',
        descriptionUrdu: 'مینو کارڈ، ۲ واٹس ایپ افر پوسٹرز اور فیس بک کور فوٹو ڈیزائن کریں۔',
        descriptionEn: 'Design a menu card, 2 WhatsApp promotional flyers, and a Facebook cover photo.',
        deliverableUrdu: '۴ ہائی کوالٹی ڈیزائنز کا پرنٹ و ڈیجیٹل سیٹ',
        deliverableEn: '4 high-quality design assets ready for print & digital share',
        stepsUrdu: ['تصاویر اور قیمتیں لیں', 'رنگین اور صاف ڈیزائن بنائیں', 'دکاندار کو دکھا کر فائنل کریں'],
        stepsEn: ['Collect product images & prices', 'Design clean assets', 'Deliver to owner'],
      }
    ],
    commonMistakesUrdu: [
      {
        mistake: 'بہت زیادہ چمکدار اور آپس میں ٹکراتے ہوئے رنگوں کا بے جا استعمال۔',
        solution: 'سادہ، باوقار ۲ یا ۳ رنگوں کا امتزاج چنیں جیسے گہرا نیلا اور سنہرا۔'
      }
    ],
    commonMistakesEn: [
      {
        mistake: 'Clashing bright colors and overwhelming fonts.',
        solution: 'Use 2-3 harmonious colors with clean readability.'
      }
    ],
    assessmentQuestions: [
      {
        id: 'q-canva-1',
        questionUrdu: 'ایک اچھے پوسٹر کی سب سے بڑی خوبی کیا ہوتی ہے؟',
        questionEn: 'What is the hallmark of a great poster design?',
        optionsUrdu: [
          'پیغام ایک نظر میں واضح اور آسانی سے پڑھا جا سکے',
          'اس میں ۲۰ مختلف رنگ اور چمکتی بتیاں ہوں',
          'ساری جگہ بلاوجہ تحریر سے بھری ہو',
          'تحریر کا سائز اتنا چھوٹا ہو کہ عینک چاہیے ہو'
        ],
        optionsEn: [
          'Message is clear, legible, and understood at a glance',
          'Contains 20 conflicting colors',
          'Overfilled with unnecessary text',
          'Tiny illegible font'
        ],
        correctIndex: 0,
        explanationUrdu: 'ڈیزائن کا مقصد پیغام کو آسان اور خوبصورت بنا کر فوری سمجھانا ہے۔',
        explanationEn: 'Design serves communication first—clarity and beauty must work together.'
      }
    ],
    portfolioDeliverablesUrdu: [
      '۵ مختلف کیٹیگریز کے سوشل میڈیا پوسٹرز',
      '۲ پروفیشنل وزٹنگ کارڈز کے نمونے',
      '۱ ریسٹورنٹ یا دکان کا مینو کارڈ'
    ],
    portfolioDeliverablesEn: [
      '5 distinct social media flyers',
      '2 professional business cards',
      '1 restaurant/shop menu layout'
    ],
    incomePathways: [
      {
        type: 'local_service',
        typeUrdu: 'مقامی دکانوں کے لیے ڈیزائننگ',
        typeEn: 'Local Business Graphics',
        pathwayUrdu: 'مقامی دکانداروں اور اسکولوں کے لیے ماہانہ بنیاد پر پوسٹس بنانا',
        pathwayEn: 'Monthly social post design for local businesses & clinics',
        realisticScopeUrdu: 'فی پوسٹ ۳۰۰ سے ۸۰۰ روپے یا ماہانہ پیکیج ۵ سے ۱۵ ہزار روپے۔',
        realisticScopeEn: 'PKR 300-800 per post or PKR 5k-15k monthly retainer.'
      },
      {
        type: 'freelancing',
        typeUrdu: 'آن لائن فری لانسنگ (Fiverr/Upwork)',
        typeEn: 'Online Freelancing',
        pathwayUrdu: 'بین الاقوامی کلائنٹس کے لیے سوشل میڈیا ٹیمپلیٹس اور ای بکس کور',
        pathwayEn: 'Canva template packs, flyers, and eBook covers',
        realisticScopeUrdu: '۵ سے ۳۰ ڈالر فی پروجیکٹ۔',
        realisticScopeEn: '$5 to $30 per project based on quality.'
      }
    ],
    businessFormulaUrdu: '۵ زبردست نمونے مفت بنائیں → انسٹاگرام/واٹس ایپ پر شیئر کریں → مقامی دکانوں کو ماہانہ سوشل میڈیا پیکج پیش کریں۔',
    businessFormulaEn: 'Create 5 stellar sample designs → Share on social → Offer monthly graphic retainers to local brands.',
    ethicalGuidanceUrdu: [
      'کسی کا ڈیزائن چوری کر کے اپنا نہ بتائیں۔',
      'ناجائز اور غیر اخلاقی مصنوعات (جیسے جوا، سود، بے حیائی) کے اشتہارات کبھی نہ بنائیں۔',
      'جو وقت کلائنٹ سے طے کریں، اسی پر کام مکمل کر کے دیں۔'
    ],
    ethicalGuidanceEn: [
      'Never plagiarize another creator\'s work.',
      'Refuse promotional work for harmful or prohibited goods.',
      'Always deliver strictly on time.'
    ],
    nextSkillRecommendation: {
      skillId: 'skill-video-editing',
      skillTitleUrdu: 'موبائل ویڈیو ایڈیٹنگ (CapCut Video Editing)',
      skillTitleEn: 'Mobile Video Editing with CapCut',
      whyUrdu: 'آج کل ویڈیو کی مانگ تصاویر سے ۱۰ گنا زیادہ ہے۔ پوسٹر بنانے کے بعد چھوٹی ویڈیوز بنانا سیکھیں!',
      whyEn: 'Short video content has 10x engagement. Expanding into video multiplies your client base.'
    },
    communityBenefitUrdu: 'مقامی فلاحی تنظیموں اور مساجد کے اعلانات و امدادی مہمات کے پوسٹرز بلا معاوضہ تیار کر کے ثواب کمائیں۔',
    communityBenefitEn: 'Design charity flyers, disaster relief appeals, and educational notices for your community pro bono.'
  },

  // 3. Sewing & Tailoring (سلائی کڑھائی اور ٹیلرنگ)
  {
    id: 'skill-sewing-tailoring',
    slug: 'sewing-and-tailoring',
    categoryKey: 'traditional',
    categoryTitleUrdu: 'روایتی و عملی دستکاری',
    categoryTitleEn: 'Traditional & Practical Trades',
    titleUrdu: 'سلائی کڑھائی اور جدید ٹیلرنگ (Sewing & Tailoring)',
    titleEn: 'Sewing, Tailoring & Garment Crafting',
    taglineUrdu: 'گھریلو پیمانے پر کپڑوں کی کٹائی، سلائی اور ڈیزائننگ سے باعزت کمائی',
    taglineEn: 'Master cutting, sewing, and modern tailoring for sustainable home income',
    iconName: 'Scissors',
    coverGradient: 'from-amber-700 via-orange-800 to-slate-900',
    badgeUrdu: 'گھر بیٹھے مستقل روزگار',
    badgeEn: 'Reliable Home Earning',
    requiredDevice: 'tools',
    difficultyLevels: {
      absoluteBeginner: 'سلائی مشین چلانا، سوئی دھاگہ ڈالنا اور سیدھی سلائی لگانا',
      beginner: 'سادہ قمیض شلوار اور بچوں کے کپڑوں کی بنیادی ناپ و کٹائی',
      intermediate: 'گلے کے ڈیزائن، پائپنگ، ٹراؤزر اور جدید کٹس تیار کرنا',
      advanced: 'فینسی سوٹس، بچوں کی فراکس اور شادی بیاہ کے ملبوسات کی کٹنگ',
      expert: 'اپنا بوتیک یا آن لائن برانڈ شروع کر کے دوسروں کو روزگار دینا',
    },
    timeToLearnDays: 30,
    marketDemand: 'بہت زیادہ',
    whatIsUrdu: 'سلائی کڑھائی کپڑے کو انسانی جسم کی مناسبت سے کاٹنے، جوڑنے اور خوبصورت لباس کی شکل دینے کا ہمیشہ زندہ رہنے والا باوقار ہنر ہے۔',
    whatIsEn: 'Sewing and tailoring is the timeless craft of pattern making, cutting, and stitching fabrics into well-fitted, dignified garments.',
    whyLearnUrdu: 'لباس ہر انسان کی بنیادی ضرورت ہے۔ یہ ہنر خاص طور پر خواتین کو گھر کی چاردیواری کے اندر عزت کے ساتھ لاکھوں روپے کمانے اور خود کفیل ہونے کی طاقت دیتا ہے۔',
    whyLearnEn: 'Clothing is an essential daily need. This craft empowers individuals, especially women, to generate solid income from the dignity of home.',
    whoIsItForUrdu: [
      'خواتین جو گھر سے باہر جائے بغیر حلال روزگار کمانا چاہتی ہیں',
      'نوجوان جو اپنا ٹیلرنگ یا بوتیک بزنس شروع کرنا چاہتے ہیں',
      'وہ لوگ جو اپنے گھر کے کپڑوں کے اخراجات میں بچت کرنا چاہتے ہیں'
    ],
    whoIsItForEn: [
      'Women seeking dignified home-based halal livelihoods',
      'Youth aspiring to start boutique businesses',
      'Families looking to save on clothing expenses'
    ],
    prerequisitesUrdu: ['ایک عام سلائی مشین', 'انچی ٹیپ اور قینچی', 'پرانے کپڑے پریکٹس کے لیے'],
    prerequisitesEn: ['Sewing machine', 'Measuring tape & shears', 'Scrap fabric for practice'],
    levelsDescriptionUrdu: {
      beginner: 'ناپ لینا، کپڑے پر نشان لگانا اور سیدھی سلائیاں لگانا۔',
      intermediate: 'گلے اور بازو کی صفائی، فٹنگ اور بٹن/کاج کرنا۔',
      advanced: 'ڈیزائنر سوٹس، کڑھائی اور کسٹم آرڈرز تیار کرنا۔',
    },
    levelsDescriptionEn: {
      beginner: 'Body measurements, fabric marking, and straight seams.',
      intermediate: 'Neckline finishing, sleeve attachments, fitting, and buttonholes.',
      advanced: 'Designer garments, embroidery finishing, and custom tailoring.',
    },
    lessons: [
      {
        id: 'sew-l1',
        stepNumber: 1,
        titleUrdu: '۱. درست ناپ لینے کا سائنسی طریقہ',
        titleEn: '1. Accurate Body Measurement Methodology',
        summaryUrdu: 'لمبائی، چوڑائی، تیرا، بازو اور گھیر کا درست رجسٹر ریکارڈ بنانا۔',
        summaryEn: 'Recording shoulders, chest, waist, length, and sleeves systematically.',
        detailedGuideUrdu: 'ناپ لیتے وقت انچی ٹیپ کو نہ زیادہ کھینچیں اور نہ بہت ڈھیلا چھوڑیں۔ کسٹمر کی پسند (کھلا یا فٹنگ) پہلے سے لکھیں۔ کاغذی ڈائری میں کسٹمر کا نام اور تفصیل نوٹ کریں۔',
        detailedGuideEn: 'Use precise measuring tape tension. Note customer ease preferences clearly in a dedicated tailoring ledger.',
        practicalActionUrdu: 'اپنے گھر کے کسی فرد کا مکمل ناپ لے کر رجسٹر پر صاف لکھیں۔',
        practicalActionEn: 'Measure a family member accurately and log it in a dedicated book.',
        estimatedMinutes: 25,
      },
      {
        id: 'sew-l2',
        stepNumber: 2,
        titleUrdu: '۲. کٹائی کا خوف دور کریں (اخبار پر پریکٹس)',
        titleEn: '2. Pattern Cutting on Newspaper',
        summaryUrdu: 'براہ راست قیمتی کپڑا کاٹنے کے بجائے پہلے اخبار یا سستے کپڑے پر کٹنگ کریں۔',
        summaryEn: 'Practice pattern lines on newspaper before cutting expensive fabric.',
        detailedGuideUrdu: 'نئے سیکھنے والوں کا سب سے بڑا خوف کپڑا خراب ہونا ہوتا ہے۔ اخبار پر گلے اور بغل کی گولائی کی ۲ بار مشق کریں، اس سے آپ کا ہاتھ صاف اور پراعتماد ہو جائے گا۔',
        detailedGuideEn: 'Overcome fear of fabric damage by drawing and cutting armhole curves on newspapers first.',
        practicalActionUrdu: 'اخبار پر ایک قمیض کا فرنٹ اور بیک پینل کٹ کریں۔',
        practicalActionEn: 'Cut a sample shirt front & back panel on old newspaper.',
        estimatedMinutes: 30,
      }
    ],
    practiceTasksUrdu: [
      'پرانے کپڑے پر مختلف فاصلے پر ۵ سیدھی اور گول سلائیاں لگائیں',
      'بچوں کا ایک سادہ سوٹ یا نیکر خود کاٹ کر سلائی کریں',
      'ایک سادہ قمیض پر صفائی کے ساتھ گلے کی پٹی لگائیں'
    ],
    practiceTasksEn: [
      'Stitch 5 straight and curved parallel lines on scrap cloth',
      'Cut and stitch a simple children\'s outfit',
      'Attach a clean piped neckline to a test bodice'
    ],
    realWorldProjects: [
      {
        id: 'proj-sew-first-suit',
        titleUrdu: 'مکمل لیڈیز سوٹ کی سلائی اور کسٹمر ڈلیوری',
        titleEn: 'Complete Stitched Ladies Suit Project',
        descriptionUrdu: 'ناپ لینے سے لے کر کٹنگ، سلائی، اوورلاک اور استری تک مکمل سوٹ تیار کریں۔',
        descriptionEn: 'Take measurements, cut, stitch, finish edges, and press a complete outfit.',
        deliverableUrdu: 'ایک مکمل سلا ہوا استری شدہ سوٹ مع پیکنگ',
        deliverableEn: 'One fully stitched, finished, and ironed garment',
        stepsUrdu: ['ناپ لیں', 'کپڑا کاٹیں', 'سلائی اور فٹنگ کریں', 'استری اور پیک کریں'],
        stepsEn: ['Measure', 'Cut patterns', 'Stitch & fit', 'Iron & deliver'],
      }
    ],
    commonMistakesUrdu: [
      {
        mistake: 'کپڑے کو سلائی سے پہلے شال کیے (Shrink/Sponging) بغیر کاٹ دینا جس سے بعد میں چھوٹا ہو جاتا ہے۔',
        solution: 'سوتی کپڑوں کو سلائی سے پہلے ہمیشہ پانی میں بھگو کر سکھائیں اور استری کریں۔'
      }
    ],
    commonMistakesEn: [
      {
        mistake: 'Cutting cotton fabric without pre-shrinking and ironing.',
        solution: 'Always pre-wash and press cotton/linen fabrics before cutting.'
      }
    ],
    assessmentQuestions: [
      {
        id: 'q-sew-1',
        questionUrdu: 'کپڑے کی کٹنگ کرتے وقت سب سے پہلی احتیاط کیا ہے؟',
        questionEn: 'What is the primary rule before cutting cloth?',
        optionsUrdu: [
          'کپڑے کو سیدھا بچھا کر استری کرنا اور سلائی کا حق (مارجن) چھوڑ کر نشان لگانا',
          'بغیر ناپ کے جلدی سے قینچی چلا دینا',
          'کپڑے کو الٹا سیدھا دیکھے بغیر کاٹنا',
          'دھاگے کا رنگ دیکھے بغیر سلائی شروع کرنا'
        ],
        optionsEn: [
          'Smoothing/ironing fabric and marking seam allowances carefully',
          'Rushing with scissors without measuring',
          'Cutting without checking fabric grain',
          'Stitching with mismatched thread'
        ],
        correctIndex: 0,
        explanationUrdu: 'استری شدہ کپڑے پر صحیح مارجن کے ساتھ نشان لگانے سے سوٹ بالکل پرفیکٹ بیٹھتا ہے۔',
        explanationEn: 'Accurate marking with seam allowances on smooth fabric guarantees exact fit.'
      }
    ],
    portfolioDeliverablesUrdu: [
      'اپنے سلے ہوئے ۳ بہترین سوٹس کی صاف تصاویر',
      'گلے اور دامن کے ۵ خوبصورت ڈیزائنز کا نمونہ کیٹلاگ',
      'گاہکوں کے مطمئن ریویوز کی لسٹ'
    ],
    portfolioDeliverablesEn: [
      'High-quality photos of 3 completed outfits',
      'Design catalog of 5 custom necklines/sleeves',
      'Customer satisfaction testimonials'
    ],
    incomePathways: [
      {
        type: 'local_service',
        typeUrdu: 'گھریلو ٹیلرنگ سروس',
        typeEn: 'Home Tailoring Service',
        pathwayUrdu: 'محلے اور رشتہ داروں کے کپڑے سلائی کرنا',
        pathwayEn: 'Stitching garments for neighborhood families',
        realisticScopeUrdu: 'فی سوٹ ۸۰۰ سے ۲۵۰۰ روپے، ماہانہ ۲۰ سے ۶۰ ہزار روپے۔',
        realisticScopeEn: 'PKR 800-2500 per suit, monthly PKR 20k-60k.'
      },
      {
        type: 'online_business',
        typeUrdu: 'آن لائن کسٹم بوتیک',
        typeEn: 'Online Custom Boutique',
        pathwayUrdu: 'واٹس ایپ اور انسٹاگرام پر تیار شدہ فراکس اور سوٹس فروخت کرنا',
        pathwayEn: 'Selling readymade boutique wear on social media',
        realisticScopeUrdu: 'مناسب مارجن کے ساتھ فی جوڑا ۱۰۰۰ سے ۳۰۰۰ روپے منافع۔',
        realisticScopeEn: 'Solid profit margin of PKR 1k-3k per piece.'
      }
    ],
    businessFormulaUrdu: 'صفائی اور وعدے کی پابندی پر سمجھوتہ نہ کریں → عید اور تہواروں پر ایڈوانس آرڈرز لیں → کام زیادہ ہونے پر محلے کی دوسری خواتین کو کام سکھا کر ٹیم بنائیں۔',
    businessFormulaEn: 'Never compromise on stitching quality and promised dates → Accept early seasonal orders → Expand by training neighbors.',
    ethicalGuidanceUrdu: [
      'گاہک کے کپڑے کا بچا ہوا ٹکڑا یا فالتو لیس ایمانداری کے ساتھ واپس لوٹائیں۔',
      'وعدے کے مطابق مقررہ تاریخ پر کپڑے تیار رکھیں، تاخیر سے گاہک کا اعتماد ختم ہوتا ہے۔',
      'ناپ اور فٹنگ کی خرابی کی صورت میں بغیر بحث کے خود درست کریں۔'
    ],
    ethicalGuidanceEn: [
      'Always return leftover fabric remnants honestly.',
      'Deliver strictly on the promised date without excuses.',
      'Rectify fitting adjustments courteously without charge.'
    ],
    nextSkillRecommendation: {
      skillId: 'skill-handicrafts-embroidery',
      skillTitleUrdu: 'کشیدہ کاری، کڑھائی اور دستکاری (Handicrafts & Embroidery)',
      skillTitleEn: 'Handicrafts & Modern Embroidery',
      whyUrdu: 'سادہ سلے ہوئے سوٹ پر ہلکی کڑھائی یا گوٹا کناری لگا کر اس کی قیمت ۳ گنا بڑھ جاتی ہے۔',
      whyEn: 'Adding embroidery or embellishment triples the commercial value of stitched garments.'
    },
    communityBenefitUrdu: 'اپنے محلے کی یتیم یا نادار بچیوں کو مفت سلائی سکھا کر اپنے پاؤں پر کھڑا ہونے کا ذریعہ بنیں۔',
    communityBenefitEn: 'Teach tailoring free of charge to underprivileged girls in your locality to make them self-reliant.'
  },

  // 4. Mobile Repairing & Hardware Skills
  {
    id: 'skill-mobile-repairing',
    slug: 'mobile-phone-repairing',
    categoryKey: 'traditional',
    categoryTitleUrdu: 'روایتی و عملی دستکاری',
    categoryTitleEn: 'Traditional & Practical Trades',
    titleUrdu: 'موبائل فون ریپئرنگ اور ہارڈویئر (Mobile Repair)',
    titleEn: 'Smartphone Repair, Screen & Hardware Diagnostics',
    taglineUrdu: 'موبائل ڈسپلے، چارجنگ پورٹ، بیٹری اور سافٹ ویئر کے مسائل حل کرنا',
    taglineEn: 'Master display replacements, charging ports, batteries, and software flashing',
    iconName: 'Smartphone',
    coverGradient: 'from-blue-800 via-slate-800 to-slate-950',
    badgeUrdu: 'بہت زیادہ منافع بخش ہنر',
    badgeEn: 'High-Margin Trade',
    requiredDevice: 'tools',
    difficultyLevels: {
      absoluteBeginner: 'موبائل کے بیرونی پرزوں اور بنیادی اوزاروں کی پہچان',
      beginner: 'بیٹری تبدیل کرنا، چارجنگ پورٹ صاف کرنا اور سم جیکٹ کھولنا',
      intermediate: 'ایل سی ڈی / ٹچ اسکرین کی تبدیلی اور کیمرہ ریپلیسمنٹ',
      advanced: 'مائیکرو سولڈرنگ، چارجنگ آئی سی اور شارٹ سرکٹ فالٹ ٹریسنگ',
      expert: 'مدر بورڈ چپ لیول ریپئرنگ اور جدید سافٹ ویئر ان لاکنگ',
    },
    timeToLearnDays: 45,
    marketDemand: 'بہت زیادہ',
    whatIsUrdu: 'موبائل فون ریپئرنگ اسمارٹ فونز میں آنے والی خرابیوں (جیسے ٹوٹا ہوا گلاس، چارج نہ ہونا، سپیکر خراب ہونا یا سافٹ ویئر ہینگ ہونا) کو درست کرنے کا جدید تکنیکی ہنر ہے۔',
    whatIsEn: 'Mobile repair is the technical craftsmanship of diagnosing and fixing smartphone hardware (LCDs, charging, ICs) and operating software faults.',
    whyLearnUrdu: 'آج ہر گھر میں ۴ سے ۵ موبائل فون موجود ہیں اور وہ روزانہ گرتے یا خراب ہوتے ہیں۔ اس ہنر کے ماہر کے پاس ہر روز نقد حلال کمائی کے گاہک موجود ہوتے ہیں۔',
    whyLearnEn: 'With billions of active smartphones, repair technicians enjoy daily cash flow and consistent local market demand.',
    whoIsItForUrdu: [
      'نوجوان جو تکنیکی ہنر سیکھ کر فوراً دکان یا سروس شروع کرنا چاہتے ہیں',
      'وہ افراد جو اپنے ہاتھ سے پرزے جوڑنا اور مرمت کرنا پسند کرتے ہیں',
      'کمپیوٹر یا الیکٹرانکس میں دلچسپی رکھنے والے'
    ],
    whoIsItForEn: [
      'Youth looking for immediate practical trade careers',
      'Individuals who enjoy hands-on mechanical repairs',
      'Electronics and hardware enthusiasts'
    ],
    prerequisitesUrdu: ['بنیادی اسکرو ڈرائیور کٹ', 'ہیٹ گن یا اوپنر اوزار', 'پرانا خراب فون پریکٹس کے لیے'],
    prerequisitesEn: ['Precision screwdriver kit', 'Opening spudgers', 'Dead phone for practice'],
    levelsDescriptionUrdu: {
      beginner: 'فون کو بنا نقصان پہنچائے کھولنا اور بند کرنا۔',
      intermediate: 'اسکرین، بیٹری اور چارجنگ سٹرپ کی تبدیلی۔',
      advanced: 'ملٹی میٹر سے شارٹ سرکٹ چیک کرنا اور ٹانکے (Soldering) لگانا۔',
    },
    levelsDescriptionEn: {
      beginner: 'Safe teardown and reassembly without frame damage.',
      intermediate: 'LCD, battery, and charging port daughterboard replacements.',
      advanced: 'Multimeter diagnostics, short detection, and micro-soldering.',
    },
    lessons: [
      {
        id: 'mob-l1',
        stepNumber: 1,
        titleUrdu: '۱. موبائل فون کھولنے کا محفوظ طریقہ (Teardown)',
        titleEn: '1. Safe Teardown & Screw Management',
        summaryUrdu: 'اسکرو کو سائز کے مطابق الگ رکھنا اور نازک ربن کیبلز کی حفاظت۔',
        summaryEn: 'Organizing screws by length and protecting delicate flex cables.',
        detailedGuideUrdu: 'موبائل میں مختلف لمبائی کے پیچ ہوتے ہیں۔ غلط لمبا پیچ غلط جگہ لگانے سے مدر بورڈ کٹ جاتا ہے۔ مقناطیسی میٹ پر پیچ ترتیب سے رکھیں۔',
        detailedGuideEn: 'Never mix screw lengths; a long screw in the wrong standoff damages motherboard traces. Use a magnetic mat.',
        practicalActionUrdu: 'کسی پرانے بے کار فون کو مکمل کھولیں، پیچ ترتیب سے رکھیں اور دوبارہ بند کریں۔',
        practicalActionEn: 'Disassemble a non-working test phone completely and reassemble.',
        estimatedMinutes: 30,
      }
    ],
    practiceTasksUrdu: [
      'ایک فون کی خراب بیٹری تبدیل کریں اور درست فکسنگ کریں',
      'چارجنگ پورٹ سے مٹی اور کچرا احتیاط سے نکال کر فاسٹ چارجنگ ٹیسٹ کریں',
      'ملٹی میٹر سے بیٹری کے وولٹیج چیک کریں'
    ],
    practiceTasksEn: [
      'Replace a swollen phone battery safely',
      'Clean lint and debris from a USB-C/Lightning port safely',
      'Measure battery terminal voltage using a digital multimeter'
    ],
    realWorldProjects: [
      {
        id: 'proj-mob-screen-fix',
        titleUrdu: 'موبائل اسکرین و چارجنگ پورٹ کی مکمل بحالی',
        titleEn: 'Complete Screen & Charging Port Restoration',
        descriptionUrdu: 'کسی کسٹمر کے ٹوٹے ہوئے موبائل کا ڈسپلے بدلیں اور چارجنگ چیک کریں۔',
        descriptionEn: 'Replace cracked LCD assembly, test touch response, and verify charging current.',
        deliverableUrdu: '۱۰۰٪ ورکنگ موبائل مع وارنٹی رسید',
        deliverableEn: 'Fully working tested smartphone with warranty slip',
        stepsUrdu: ['ٹیسٹنگ کریں', 'پرانا پینل اتاریں', 'نیا پینل ٹیسٹ کریں', 'گلو لگا کر فکس کریں'],
        stepsEn: ['Initial diagnosis', 'Remove old screen', 'Test new panel', 'Adhere and clamp'],
      }
    ],
    commonMistakesUrdu: [
      {
        mistake: 'نیا ڈسپلے چپکانے سے پہلے چیک نہ کرنا، ایک بار گم لگ گئی تو واپس نہیں ہوتا۔',
        solution: 'ہمیشہ پہلے لوز کیبل جوڑ کر ٹچ اور ڈسپلے چیک کریں، تسلی کے بعد گلو لگائیں۔'
      }
    ],
    commonMistakesEn: [
      {
        mistake: 'Gluing a replacement LCD before testing touch & display.',
        solution: 'Always test dry connection first before applying adhesive.'
      }
    ],
    assessmentQuestions: [
      {
        id: 'q-mob-1',
        questionUrdu: 'اگر موبائل چارج نہ ہو رہا ہو تو سب سے پہلا اور آسان ترین چیک کیا ہے؟',
        questionEn: 'If a phone stops charging, what is the first and simplest check?',
        optionsUrdu: [
          'چارجنگ پورٹ کے اندر مٹی اور کچرا چیک کرنا اور دوسری کیبل سے آزمائش',
          'فوراً مدر بورڈ توڑ دینا',
          'فون کو پانی میں ڈبو دینا',
          'صرف نیا فون خرید لینا'
        ],
        optionsEn: [
          'Inspecting charging port for compressed lint & testing a known good cable',
          'Smashing the motherboard immediately',
          'Dunking the phone in water',
          'Buying a new phone blindly'
        ],
        correctIndex: 0,
        explanationUrdu: '۷۰٪ موبائلز میں چارج نہ ہونے کی وجہ پورٹ میں پھنسی ہوئی مٹی یا خراب کیبل ہوتی ہے۔',
        explanationEn: 'Over 70% of charging failures are simply due to pocket lint or worn-out cables.'
      }
    ],
    portfolioDeliverablesUrdu: [
      'مرمت کیے گئے ۵ فونز کی پہلے اور بعد کی تصاویر',
      'بنیادی ٹول کٹ اور ملٹی میٹر کا سیٹ اپ',
      'گاہکوں کا ریکارڈ رجسٹر'
    ],
    portfolioDeliverablesEn: [
      'Before/After photos of 5 repaired devices',
      'Diagnostic tool kit setup',
      'Customer service logbook'
    ],
    incomePathways: [
      {
        type: 'local_service',
        typeUrdu: 'ڈور اسٹیپ یا دکان ریپئرنگ سروس',
        typeEn: 'Doorstep / Shop Repair Service',
        pathwayUrdu: 'محلے میں یا مارکیٹ میں ریپئرنگ کی ٹیبل لگا کر فوری سروس دینا',
        pathwayEn: 'Fast repair service via bench space or home visits',
        realisticScopeUrdu: 'فی اسکرین ۵۰۰ سے ۱۵۰۰ روپے محنتانہ، روزانہ ۲۰۰۰ سے ۶۰۰۰ روپے آمدنی۔',
        realisticScopeEn: 'PKR 500-1500 labor per fix, daily PKR 2k-6k.'
      }
    ],
    businessFormulaUrdu: 'ایمانداری سے اصل پرزہ لگائیں → کسٹمر کے ڈیٹا اور پرائیویسی کی حفاظت کریں → گاہک کو مناسب وارنٹی دیں۔',
    businessFormulaEn: 'Use genuine parts → Guard customer data and privacy religiously → Offer reasonable repair warranty.',
    ethicalGuidanceUrdu: [
      'کسٹمر کے موبائل کے اندر موجود ذاتی تصاویر، ویڈیوز اور ڈیٹا کو دیکھنا یا کاپی کرنا سخت گناہ اور امانت میں خیانت ہے۔',
      'گاہک کو اصل اور کاپی پرزے کا فرق سچ بتائیں، کاپی چیز کے اصل پیسے نہ لیں۔',
      'موبائل میں جو خرابی ہو صرف وہی بتائیں، بلاوجہ جھوٹ بول کر پیسے نہ بٹوریں۔'
    ],
    ethicalGuidanceEn: [
      'Strictly respect client privacy—never browse or copy personal files.',
      'Always disclose genuine vs aftermarket component grades transparently.',
      'Diagnose honestly without inflating artificial faults.'
    ],
    nextSkillRecommendation: {
      skillId: 'skill-solar-energy',
      skillTitleUrdu: 'سولر انرجی اور بیٹری ٹیکنالوجی (Solar Energy Installation)',
      skillTitleEn: 'Solar & Battery Installation Systems',
      whyUrdu: 'الیکٹرانکس کا بنیادی علم رکھنے والوں کے لیے سولر ٹیکنالوجی میں بے پناہ روزگار کے مواقع ہیں۔',
      whyEn: 'Hardware diagnostics naturally pave the way into high-yield solar inverter technology.'
    },
    communityBenefitUrdu: 'غریب طلبہ اور بزرگوں کے فونز بغیر محنتانہ لیے ٹھیک کر کے ان کی دعائیں لیں۔',
    communityBenefitEn: 'Repair mobile devices for underprivileged students and elderly neighbors free of labor charges.'
  },

  // 5. Small Business & Entrepreneurship
  {
    id: 'skill-small-business',
    slug: 'small-business-planning',
    categoryKey: 'business',
    categoryTitleUrdu: 'کاروبار، تجارت اور مالیات',
    categoryTitleEn: 'Business & Finance',
    titleUrdu: 'چھوٹا کاروبار اور خود روزگاری (Small Business & Entrepreneurship)',
    titleEn: 'Small Business Setup, Sales & Financial Planning',
    taglineUrdu: 'کم سرمائے سے منافع بخش کام شروع کرنے اور کسٹمرز بڑھانے کا فارمولا',
    taglineEn: 'Launch high-margin lean businesses, manage cash flow, and acquire customers',
    iconName: 'Store',
    coverGradient: 'from-blue-700 via-indigo-900 to-slate-900',
    badgeUrdu: 'ہر انسان کے لیے ضروری',
    badgeEn: 'Universal Life Skill',
    requiredDevice: 'any',
    difficultyLevels: {
      absoluteBeginner: 'کاروباری سوچ اور نفع و نقصان کا بنیادی حساب سمجھنا',
      beginner: 'ایک صفحے کا بزنس ماڈل اور ابتدائی اخراجات کا پلان بنانا',
      intermediate: 'مارکیٹنگ، قیمت کا تعین اور گاہکوں سے سودے بازی کرنا',
      advanced: 'ڈیجیٹل سیلز، سپلائرز سے ڈیل اور ٹیم بنانا',
      expert: 'کاروبار کو دوسرے شہروں یا آن لائن پلیٹ فارمز پر پھیلانا',
    },
    timeToLearnDays: 20,
    marketDemand: 'بہت زیادہ',
    whatIsUrdu: 'چھوٹا کاروبار کسی مسئلے کا حل نکال کر لوگوں کو معیاری مصنوعات یا خدمات فراہم کرنے اور دیانت داری سے حلال منافع کمانے کا علم ہے۔',
    whatIsEn: 'Small business management is the science of solving local problems with products or services, managing cash flow, and earning ethical profits.',
    whyLearnUrdu: 'ملازمت میں آمدنی محدود ہوتی ہے جبکہ کاروبار میں انسان اپنی محنت سے اپنے خاندان کی تقدیر بدل سکتا ہے اور دوسرے لوگوں کو بھی روزگار فراہم کر سکتا ہے۔',
    whyLearnEn: 'Business removes fixed income ceilings and empowers you to create employment for others while serving community needs.',
    whoIsItForUrdu: [
      'نوجوان جو نوکری کے بجائے اپنا ذاتی کام کرنا چاہتے ہیں',
      'دکاندار اور تاجر جو اپنی فروخت بڑھانا چاہتے ہیں',
      'گھریلو خواتین جو دستکاری یا کھانے کا چھوٹا کاروبار شروع کرنا چاہتی ہیں'
    ],
    whoIsItForEn: [
      'Youth aspiring to build self-reliant enterprises',
      'Traders seeking to increase sales volume',
      'Homemakers launching home food/craft ventures'
    ],
    prerequisitesUrdu: ['ایک ڈائری اور قلم', 'سیکھنے کا جذبہ', 'معمولی بچت یا مہارت'],
    prerequisitesEn: ['Notebook & pen', 'Willingness to learn', 'Modest initial focus'],
    levelsDescriptionUrdu: {
      beginner: 'آئیڈیا منتخب کرنا، گاہکوں کی ضرورت سمجھنا اور لاگت کا حساب لگانا۔',
      intermediate: 'پہلی فروخت کرنا، کسٹمر فیڈ بیک لینا اور کھاتہ مینج کرنا۔',
      advanced: 'آن لائن پروموشن، سپلائی چین اور منافع کو دوبارہ انویسٹ کرنا۔',
    },
    levelsDescriptionEn: {
      beginner: 'Selecting a viable idea, calculating unit economics and cost.',
      intermediate: 'Making the first 10 sales, customer relations, and cash tracking.',
      advanced: 'Digital outreach, inventory sourcing, and capital reinvestment.',
    },
    lessons: [
      {
        id: 'biz-l1',
        stepNumber: 1,
        titleUrdu: '۱. ایک صفحے کا بزنس پلان (One Page Business Canvas)',
        titleEn: '1. One-Page Lean Business Plan',
        summaryUrdu: 'مسئلہ کیا ہے؟ حل کیا ہے؟ گاہک کون ہے؟ لاگت کتنی ہے؟ منافع کتنا ہے؟',
        summaryEn: 'Problem, Solution, Customer, Cost, and Profit in 5 simple boxes.',
        detailedGuideUrdu: 'کاروبار شروع کرنے کے لیے بڑی موٹی کتابوں کی ضرورت نہیں ہوتی۔ صرف یہ ۵ باتیں لکھیں: ۱. لوگوں کا کون سا مسئلہ حل کر رہے ہیں؟ ۲. آپ کی پروڈکٹ/سروس کیا ہے؟ ۳. گاہک کون ہیں اور کہاں ملیں گے؟ ۴. ایک چیز بنانے پر کتنی لاگت آئے گی؟ ۵. کتنا منافع رکھیں گے؟',
        detailedGuideEn: 'Clarify 5 core elements on a single page: Customer Problem, Your Solution, Target Audience, Unit Cost, and Fair Profit Margin.',
        practicalActionUrdu: 'ایک صفحے پر اپنے کسی پسندیدہ کام کا ۵ منٹ کا پلان لکھیں۔',
        practicalActionEn: 'Draft a 1-page business canvas for your favorite service or product.',
        estimatedMinutes: 20,
      }
    ],
    practiceTasksUrdu: [
      'اپنے گھر یا محلے کے ۳ ایسے مسائل نوٹ کریں جن کا حل لوگ پیسے دے کر خریدنا پسند کریں',
      'کسی ایک پروڈکٹ کا مکمل حساب نکالیں: خام مال + محنت + پیکنگ = کل لاگت',
      'اپنے کاروبار کا ایک دلکش اور باوقار نام سوچیں'
    ],
    practiceTasksEn: [
      'List 3 everyday neighborhood problems people would gladly pay to solve',
      'Calculate unit economics: Raw Materials + Labor + Packaging = Cost',
      'Brainstorm an authentic, trustworthy brand name'
    ],
    realWorldProjects: [
      {
        id: 'proj-biz-launch',
        titleUrdu: 'چھوٹے پیمانے پر پہلی ۱۰ مصنوعات یا خدمات کی کامیاب فروخت',
        titleEn: 'First 10 Sales Milestone Campaign',
        descriptionUrdu: 'بغیر بڑی دکان کھولے، اپنے دوستوں اور رشتہ داروں میں پہلی ۱۰ فروخت مکمل کریں۔',
        descriptionEn: 'Produce, price, and sell your first 10 units to real customers with zero retail overhead.',
        deliverableUrdu: 'پہلی ۱۰ فروخت کا حساب اور کمایا ہوا خالص منافع',
        deliverableEn: 'Sales ledger showing 10 transactions and net profit',
        stepsUrdu: ['پروڈکٹ تیار کریں', 'واٹس ایپ پر پیش کریں', 'آرڈر لیں اور ڈلیور کریں', 'رائے لیں'],
        stepsEn: ['Prepare samples', 'Share on WhatsApp', 'Fulfill orders', 'Collect reviews'],
      }
    ],
    commonMistakesUrdu: [
      {
        mistake: 'پہلے دن ہی ادھار پر مال بیچ دینا جس سے سرمایہ بلاک ہو جاتا ہے۔',
        solution: 'شروع میں نقد یا ایڈوانس پر کام کریں، ادھار سے پرہیز کریں۔'
      },
      {
        mistake: 'کاروبار کی آمدنی اور گھر کے خرچے کو ایک ہی جیب میں ملانا۔',
        solution: 'کاروبار کے لیے الگ ڈائری رکھیں اور اپنے لیے ایک طے شدہ ماہانہ تنخواہ نکالیں۔'
      }
    ],
    commonMistakesEn: [
      {
        mistake: 'Giving credit/udhaar on day one and drying out cash flow.',
        solution: 'Operate strictly on cash or upfront deposits in early phases.'
      },
      {
        mistake: 'Mixing business revenue with personal household expenses.',
        solution: 'Keep strict separate ledgers and pay yourself a fixed wage.'
      }
    ],
    assessmentQuestions: [
      {
        id: 'q-biz-1',
        questionUrdu: 'ایک کامیاب دکاندار یا تاجر کی سب سے بڑی طاقت کیا ہوتی ہے؟',
        questionEn: 'What is a merchant\'s greatest commercial asset?',
        optionsUrdu: [
          'سچائی، خوش اخلاقی اور وعدے کی پابندی جس سے گاہک کا مستقل اعتماد بنتا ہے',
          'گاہک کو دھوکہ دے کر خراب مال بیچنا',
          'بہت مغرور بن کر بات کرنا',
          'وقت ضائع کرنا'
        ],
        optionsEn: [
          'Honesty, courteous demeanor, and honoring promises to build trust',
          'Deceiving buyers with defective goods',
          'Arrogant communication',
          'Wasting time'
        ],
        correctIndex: 0,
        explanationUrdu: 'سچا اور امانت دار تاجر ہمیشہ دیرپا اور بابرکت کامیابی پاتا ہے۔',
        explanationEn: 'The honest and trustworthy merchant achieves enduring sustainable success.'
      }
    ],
    portfolioDeliverablesUrdu: [
      '۱ صفحے کا مکمل بزنس ماڈل پلان',
      'پروڈکٹ کاسٹنگ اور منافع کی شیٹ',
      'کسٹمرز کے نام اور فیڈ بیک کا رجسٹر'
    ],
    portfolioDeliverablesEn: [
      '1-page Lean Business Model Canvas',
      'Unit costing & profit calculation sheet',
      'Customer order & review ledger'
    ],
    incomePathways: [
      {
        type: 'small_business',
        typeUrdu: 'مقامی یا گھریلو کاروبار',
        typeEn: 'Local / Home Enterprise',
        pathwayUrdu: 'کھانے پینے، کپڑوں، دستکاری یا سروسز کا کام',
        pathwayEn: 'Home food, clothing, crafts, or local agency',
        realisticScopeUrdu: 'ماہانہ ۳۰ ہزار سے ۱ لاکھ+ روپے۔',
        realisticScopeEn: 'PKR 30k to 100k+ monthly profit.'
      }
    ],
    businessFormulaUrdu: 'کم خرچ سے شروع کریں → اچھے اخلاق سے کسٹمر بنائیں → منافع کا ۳۰٪ دوبارہ کاروبار میں لگائیں۔',
    businessFormulaEn: 'Start lean → Win repeat buyers with exceptional service → Reinvest 30% of profit into growth.',
    ethicalGuidanceUrdu: [
      'ناپ تول میں پورا رکھیں، کمی نہ کریں۔',
      'مال کا عیب گاہک کو واضح بتائیں۔',
      'جھوٹی قسمیں کھا کر مال فروخت کرنے سے بچیں۔'
    ],
    ethicalGuidanceEn: [
      'Give exact and full measure without shortfall.',
      'Disclose any defect in goods transparently.',
      'Never use false oaths or deception to make sales.'
    ],
    nextSkillRecommendation: {
      skillId: 'skill-digital-marketing',
      skillTitleUrdu: 'ڈیجیٹل مارکیٹنگ اور سوشل میڈیا (Digital Marketing)',
      skillTitleEn: 'Digital Marketing & Social Media Management',
      whyUrdu: 'اپنے کاروبار کی مصنوعات کو ہزاروں لوگوں تک پہنچانے کے لیے سوشل میڈیا مارکیٹنگ کا ہنر لازمی ہے۔',
      whyEn: 'Digital marketing allows you to reach thousands of buyers without expensive billboards.'
    },
    communityBenefitUrdu: 'اپنے کاروبار کے منافع سے اپنے محلے کے غریبوں اور ضرورت مندوں کی خاموشی سے مدد کریں۔',
    communityBenefitEn: 'Dedicate a portion of business profits to support underprivileged neighborhood families quietly.'
  }
];

export const SKILL_DISCOVERY_QUESTIONS = [
  {
    id: 'q1-interest',
    questionUrdu: '۱. آپ کو کس قسم کے کام میں سب سے زیادہ دلچسپی ہے؟',
    questionEn: '1. What type of work interests you most?',
    options: [
      { id: 'tech', labelUrdu: 'کمپیوٹر، موبائل اور ٹیکنالوجی', labelEn: 'Computer, Mobile & Tech', matchDomain: 'digital' },
      { id: 'craft', labelUrdu: 'ہاتھ سے بنانا، سلائی، دستکاری یا مرمت', labelEn: 'Crafting, Sewing, Repairs', matchDomain: 'traditional' },
      { id: 'business', labelUrdu: 'خرید و فروخت، تجارت اور نیا کاروبار', labelEn: 'Trade, Commerce & Business', matchDomain: 'business' },
      { id: 'people', labelUrdu: 'پڑھانا، لکھنا، بولنا اور لوگوں کی رہنمائی', labelEn: 'Teaching, Writing, Speaking', matchDomain: 'professional' },
      { id: 'future', labelUrdu: 'سولر انرجی، مشینیں اور جدید ایجادات', labelEn: 'Solar, Machines & Clean Tech', matchDomain: 'future' },
    ],
  },
  {
    id: 'q2-workstyle',
    questionUrdu: '۲. آپ ہاتھ سے کام کرنا پسند کرتے ہیں یا ذہنی/ڈیجیٹل؟',
    questionEn: '2. Do you prefer physical hands-on work or mental/digital?',
    options: [
      { id: 'mental', labelUrdu: 'ذہنی و ڈیجیٹل (سوچنا، ڈیزائن، ریسرچ، موبائل چلانا)', labelEn: 'Mental / Digital (Thinking, Design, Mobile)', matchDomain: 'digital' },
      { id: 'hands', labelUrdu: 'ہاتھ سے عملی کام (اوزار، کپڑا، مشینیں، کٹنگ)', labelEn: 'Physical Hands-on (Tools, Fabric, Hardware)', matchDomain: 'traditional' },
      { id: 'both', labelUrdu: 'دونوں کا ملا جلا کام (لوگوں سے ملنا، ڈیلنگ، سروس)', labelEn: 'Blend of Both (Dealing, Management, Services)', matchDomain: 'business' },
    ],
  },
  {
    id: 'q3-location',
    questionUrdu: '۳. آپ کام کہاں سے کرنا چاہتے ہیں؟',
    questionEn: '3. Where do you prefer working from?',
    options: [
      { id: 'home', labelUrdu: 'گھر بیٹھ کر باوقار انداز میں', labelEn: 'From Home', matchDomain: 'digital' },
      { id: 'shop', labelUrdu: 'دکان، ورکشاپ یا دفتر سے', labelEn: 'Shop, Workshop or Office', matchDomain: 'business' },
      { id: 'field', labelUrdu: 'فیلڈ میں، سائٹ پر یا کسٹمرز کے پاس جا کر', labelEn: 'On Field, Site or Client Premises', matchDomain: 'future' },
    ],
  },
  {
    id: 'q4-phone',
    questionUrdu: '۴. آپ کے پاس کون سا موبائل فون موجود ہے؟',
    questionEn: '4. What type of phone do you currently have?',
    options: [
      { id: 'smart', labelUrdu: 'اسمارٹ فون ہے (واٹس ایپ اور یوٹیوب چلتا ہے)', labelEn: 'Smartphone (runs WhatsApp & YouTube)' },
      { id: 'good-phone', labelUrdu: 'اچھا نیا اسمارٹ فون ہے', labelEn: 'Fast modern smartphone' },
      { id: 'basic-phone', labelUrdu: 'سادہ فون ہے یا فیملی کا فون استعمال کرتا ہوں', labelEn: 'Basic or shared phone' },
    ],
  },
  {
    id: 'q5-computer',
    questionUrdu: '۵. کیا آپ کے پاس لیپ ٹاپ یا کمپیوٹر ہے؟',
    questionEn: '5. Do you have a computer or laptop?',
    options: [
      { id: 'no-pc', labelUrdu: 'نہیں، میرے پاس صرف موبائل ہے', labelEn: 'No, smartphone only' },
      { id: 'yes-pc', labelUrdu: 'ہاں، ذاتی لیپ ٹاپ یا کمپیوٹر موجود ہے', labelEn: 'Yes, I have a PC/Laptop' },
      { id: 'shared-pc', labelUrdu: 'کبھی کبھار دوست یا ادارے کا پی سی مل جاتا ہے', labelEn: 'Occasional shared PC access' },
    ],
  },
  {
    id: 'q6-internet',
    questionUrdu: '۶. انٹرنیٹ کی سہولت کیسی ہے؟',
    questionEn: '6. How is your internet access?',
    options: [
      { id: 'wifi', labelUrdu: 'مستقل تیز وائی فائی (Wi-Fi) موجود ہے', labelEn: 'Reliable Broadband Wi-Fi' },
      { id: 'mobile-data', labelUrdu: 'موبائل ڈیٹا پیکج استعمال کرتا ہوں', labelEn: 'Mobile Data Package' },
      { id: 'limited', labelUrdu: 'محدود انٹرنیٹ ہے', labelEn: 'Limited connectivity' },
    ],
  },
  {
    id: 'q7-daily-time',
    questionUrdu: '۷. آپ ہنر سیکھنے اور مشق کے لیے روزانہ کتنا وقت دے سکتے ہیں؟',
    questionEn: '7. How much daily time can you commit?',
    options: [
      { id: '20-30m', labelUrdu: 'روزانہ ۲۰ سے ۳۰ منٹ', labelEn: '20-30 minutes daily' },
      { id: '1hour', labelUrdu: 'روزانہ ۱ گھنٹہ', labelEn: '1 hour daily' },
      { id: '2-3hours', labelUrdu: 'روزانہ ۲ سے ۳ گھنٹے', labelEn: '2-3 hours daily' },
      { id: 'full-time', labelUrdu: 'فل ٹائم سیکھنے کو تیار ہوں', labelEn: 'Full-time commitment' },
    ],
  },
  {
    id: 'q8-education',
    questionUrdu: '۸. آپ کی موجودہ تعلیمی سطح کیا ہے؟',
    questionEn: '8. What is your current formal education level?',
    options: [
      { id: 'uneducated', labelUrdu: 'کوئی رسمی تعلیم نہیں لیکن سیکھنا چاہتا ہوں', labelEn: 'No formal schooling, eager to learn' },
      { id: 'basic-urdu', labelUrdu: 'بنیادی اردو پڑھ اور لکھ سکتا ہوں', labelEn: 'Can read & write basic Urdu' },
      { id: 'matric', labelUrdu: 'مڈل یا میٹرک (Matric)', labelEn: 'Middle / Matric' },
      { id: 'fa-ba', labelUrdu: 'انٹرمیڈیٹ یا بی اے (FA / BA / B.Com)', labelEn: 'Intermediate / Bachelors' },
      { id: 'masters-pro', labelUrdu: 'ماسٹرز یا گریجویٹ ڈگری', labelEn: 'Masters / Postgraduate / Professional' },
    ],
  },
  {
    id: 'q9-prior-skill',
    questionUrdu: '۹. کیا آپ کو پہلے سے کوئی کام یا ہنر تھوڑا بہت آتا ہے؟',
    questionEn: '9. Do you already have any prior practical skill?',
    options: [
      { id: 'none', labelUrdu: 'بالکل نیا ہوں، شروع سے کچھ سیکھنا ہے', labelEn: 'Complete beginner' },
      { id: 'sewing-food', labelUrdu: 'سلائی، کھانا پکانا یا دستکاری', labelEn: 'Sewing, cooking, or craft' },
      { id: 'tech-mobile', labelUrdu: 'موبائل فون چلانا، سوشل میڈیا یا کمپیوٹر', labelEn: 'Social media, mobile tech' },
      { id: 'trade-repair', labelUrdu: 'بجلی، پلمبنگ، ڈرائیونگ یا کوئی تکنیکی کام', labelEn: 'Electric, plumbing, mechanics' },
      { id: 'teaching-sales', labelUrdu: 'پڑھانا، حساب کتاب یا دکان داری', labelEn: 'Teaching, accounting, sales' },
    ],
  },
  {
    id: 'q10-income-goal',
    questionUrdu: '۱۰. آپ کا فوری مالی یا روزگار کا ہدف کیا ہے؟',
    questionEn: '10. What is your immediate livelihood or earning goal?',
    options: [
      { id: 'pocket-money', labelUrdu: 'اضافی جیب خرچ (ماہانہ ۱۰ سے ۲۰ ہزار روپے)', labelEn: 'Pocket income (10k-20k PKR/mo)' },
      { id: 'household-support', labelUrdu: 'گھر کا خرچ چلانا (ماہانہ ۳۰ سے ۶۰ ہزار روپے)', labelEn: 'Household livelihood (30k-60k PKR/mo)' },
      { id: 'career-growth', labelUrdu: 'بڑا کاروبار یا ہائی انکم فری لانسنگ (۱ لاکھ+ روپے)', labelEn: 'High-income business/freelance (100k+ PKR/mo)' },
      { id: 'learn-first', labelUrdu: 'پہلے مضبوط ہنر سیکھنا ہے، کمائی بعد میں', labelEn: 'Focus on solid learning first' },
    ],
  },
];

export const REAL_WORLD_PROJECT_TEMPLATES = [
  {
    id: 'proj-temp-family-budget',
    titleUrdu: '۱. گھر کا مکمل ماہانہ بجٹ اور بچت کا منصوبہ',
    titleEn: '1. Family Monthly Budget & Expense Tracker',
    iconName: 'Calculator',
    categoryUrdu: 'مالیات و گھریلو انتظام',
    categoryEn: 'Finance & Household',
    difficultyUrdu: 'بہت آسان (۲۰ منٹ)',
    difficultyEn: 'Very Easy (20 min)',
    descUrdu: 'گھر کی آمدنی، کرایہ، بل، راشن اور ناگہانی اخراجات کا صاف ستھرا ریکارڈ بنائیں تاکہ ماہانہ بچت ممکن ہو سکے۔',
    descEn: 'Track income, utilities, groceries, and savings systematically to ensure peace of mind.',
    actionStepsUrdu: [
      'ایک صاف کاپی یا موبائل کے نوٹ پیڈ میں ماہانہ کل آمدنی لکھیں',
      'لازمی اخراجات (راشن، بجلی کا بل، اسکول فیس) الگ درج کریں',
      'غیر ضروری فضول خرچی کی نشاندہی کر کے کم از کم ۵٪ بچت کی رقم صدقہ اور ایمرجنسی فنڈ میں رکھیں'
    ],
    actionStepsEn: [
      'List all monthly income streams in a dedicated notebook/notepad',
      'Categorize fixed essentials (groceries, bills, fees)',
      'Identify leakage areas and allocate at least 5% towards emergency savings & charity'
    ],
    deliverableUrdu: 'ایک مکمل تیار شدہ ماہانہ گھریلو بجٹ ڈائری',
    deliverableEn: 'Completed Monthly Household Budget Ledger'
  },
  {
    id: 'proj-temp-local-shop-promo',
    titleUrdu: '۲. قریبی دکان یا سروس کا واٹس ایپ پرومو پوسٹر',
    titleEn: '2. Local Business WhatsApp Promo Poster',
    iconName: 'Palette',
    categoryUrdu: 'گرافک ڈیزائن و مارکیٹنگ',
    categoryEn: 'Design & Marketing',
    difficultyUrdu: 'آسان (۲۵ منٹ)',
    difficultyEn: 'Easy (25 min)',
    descUrdu: 'کینوا کی مدد سے اپنے قریبی درزی، بیکری یا جنرل اسٹور کے لیے خوبصورت اردو اشتہار بنائیں اور انہیں گفٹ کریں۔',
    descEn: 'Design a clean promotional flyer for a neighborhood tailor, bakery, or clinic using Canva.',
    actionStepsUrdu: [
      'موبائل پر کینوا ایپ کھولیں اور 1080x1080 سائز چنیں',
      'دکان کا نام، خاص آفر اور فون نمبر صاف اردو فونٹ میں لکھیں',
      'تصویر کو صاف سیٹ کریں اور دکاندار کو واٹس ایپ کر دیں'
    ],
    actionStepsEn: [
      'Open Canva on mobile, select Square 1080x1080 layout',
      'Add shop name, offer details, and contact number in clean typography',
      'Export and send to the shopkeeper'
    ],
    deliverableUrdu: '۱ ہائی ریزولوشن ڈیجیٹل پوسٹر',
    deliverableEn: '1 High-Resolution Social Promo Poster'
  },
  {
    id: 'proj-temp-home-business-listing',
    titleUrdu: '۳. گھریلو سروس یا پروڈکٹ کی پہلی پیشکش (Service Profile)',
    titleEn: '3. First Paid Service Offering Profile',
    iconName: 'Briefcase',
    categoryUrdu: 'کاروبار و فری لانسنگ',
    categoryEn: 'Business & Freelance',
    difficultyUrdu: 'درمیانہ (۳۰ منٹ)',
    difficultyEn: 'Intermediate (30 min)',
    descUrdu: 'آپ کو جو ہنر آتا ہے (سلائی، کھانا، کمپیوٹر، پڑھانا) اس کی ایک صفحے کی ریٹ لسٹ اور تعارفی کارڈ تیار کریں۔',
    descEn: 'Create a 1-page professional rate sheet and introductory service card for what you can do.',
    actionStepsUrdu: [
      'اپنی ۳ اہم مہارتیں لکھیں جو آپ دوسروں کے لیے کر سکتے ہیں',
      'ہر سروس کا مناسب اور انصاف پر مبنی حلال ریٹ مقرر کریں',
      'واٹس ایپ پر اپنے جاننے والوں کو شائستگی سے مطلع کریں'
    ],
    actionStepsEn: [
      'List 3 clear services you can deliver reliably',
      'Set fair, transparent pricing for each',
      'Draft a polite introduction message for your WhatsApp network'
    ],
    deliverableUrdu: 'ایک صفحے کا سروس مینو کارڈ مع ریٹ لسٹ',
    deliverableEn: '1-page Professional Service Menu & Pricing'
  },
  {
    id: 'proj-temp-digital-farm-ledger',
    titleUrdu: '۴. کسان یا دکاندار کے لیے ڈیجیٹل کھاتہ اور ریکارڈ',
    titleEn: '4. Digital Ledger & Farm/Shop Records',
    iconName: 'Database',
    categoryUrdu: 'ڈیجیٹل اسکلز و زراعت',
    categoryEn: 'Digital Skills & Ag',
    difficultyUrdu: 'آسان (۲۰ منٹ)',
    difficultyEn: 'Easy (20 min)',
    descUrdu: 'کھاد، بیج، پٹرول، فصل کی پیداوار یا دکان کے سامان کا کھاتہ موبائل میں ڈیجیٹل محفوظ کریں۔',
    descEn: 'Digitize farm inputs (fertilizer, seed, fuel) or shop inventory into a clean mobile ledger.',
    actionStepsUrdu: [
      'موبائل میں گوگل شیٹس یا ڈیجیٹل کھاتہ ایپ کھولیں',
      'تاریخ، مد، لاگت اور وصولی کے ۴ کالم بنائیں',
      'گزشتہ ایک ہفتے کا حساب درج کر کے کل ٹوٹل نکالیں'
    ],
    actionStepsEn: [
      'Open Google Sheets or a digital ledger app',
      'Create 4 columns: Date, Item, Cost, Revenue',
      'Enter the past week\'s entries to compute totals'
    ],
    deliverableUrdu: 'موبائل پر محفوظ فعال ڈیجیٹل کھاتہ',
    deliverableEn: 'Working Mobile Digital Ledger'
  }
];

export const DAILY_PRACTICAL_CHALLENGES = [
  {
    id: 'chal-1',
    dayNumber: 1,
    titleUrdu: 'آج ۲۰ منٹ میں AI سے اپنے ۳ مسائل کا حل پوچھیں',
    titleEn: 'Ask AI 3 practical solutions in 20 mins',
    descUrdu: 'موبائل پر AI سے اپنی پڑھائی، کام یا وقت کی بچت کا ایک زبردست طریقہ معلوم کریں۔',
    descEn: 'Consult AI for a personalized time-saving or study workflow on your phone.',
    estimatedMinutes: 20,
    points: 25,
  },
  {
    id: 'chal-2',
    dayNumber: 2,
    titleUrdu: 'کینوا پر اپنے نام کا وزٹنگ کارڈ ڈیزائن کریں',
    titleEn: 'Design a personal business card in Canva',
    descUrdu: 'اپنا نام اور مہارت لکھ کر ایک باوقار ڈیجیٹل کارڈ تیار کریں۔',
    descEn: 'Create a clean personal contact card displaying your primary skills.',
    estimatedMinutes: 20,
    points: 25,
  },
  {
    id: 'chal-3',
    dayNumber: 3,
    titleUrdu: 'ایک صفحے پر اپنا ماہانہ مالیاتی بجٹ تیار کریں',
    titleEn: 'Draft your monthly financial budget on paper',
    descUrdu: 'آمدنی اور اخراجات کا حساب لکھیں تاکہ فضول خرچی سے بچ سکیں۔',
    descEn: 'Write down all monthly costs and plan at least 5% emergency savings.',
    estimatedMinutes: 20,
    points: 25,
  },
  {
    id: 'chal-4',
    dayNumber: 4,
    titleUrdu: 'ایک ہنر سیکھیں، ایک انسان کو سکھائیں',
    titleEn: 'Teach one skill to one human today',
    descUrdu: 'آج جو بات آپ نے سیکھی ہے، وہ اپنے چھوٹے بھائی، بہن یا دوست کو سکھائیں۔',
    descEn: 'Share one practical skill you learned today with a sibling or friend.',
    estimatedMinutes: 15,
    points: 30,
  }
];

// Helper to query skills through natural language search
export const searchSkillsMaster = (query: string): SkillMasterItem[] => {
  const q = query.trim().toLowerCase();
  if (!q) return SKILLS_MASTER_DATA;

  // Natural language intent matches
  if (q.includes('گھر') || q.includes('home') || q.includes('خواتین') || q.includes('خاتون')) {
    return SKILLS_MASTER_DATA.filter(s => s.id === 'skill-sewing-tailoring' || s.id === 'skill-canva-design' || s.id === 'skill-ai-tools' || s.id === 'skill-small-business');
  }
  if (q.includes('موبائل') || q.includes('صرف موبائل') || q.includes('mobile')) {
    return SKILLS_MASTER_DATA.filter(s => s.requiredDevice === 'mobile' || s.id === 'skill-mobile-repairing');
  }
  if (q.includes('سلائی') || q.includes('کپڑے') || q.includes('sewing') || q.includes('tailor')) {
    return SKILLS_MASTER_DATA.filter(s => s.id === 'skill-sewing-tailoring');
  }
  if (q.includes('ai') || q.includes('chatgpt') || q.includes('مصنوعی ذہانت')) {
    return SKILLS_MASTER_DATA.filter(s => s.id === 'skill-ai-tools');
  }
  if (q.includes('بغیر ڈگری') || q.includes('ڈگری') || q.includes('no degree') || q.includes('ان پڑھ')) {
    return SKILLS_MASTER_DATA.filter(s => s.id === 'skill-sewing-tailoring' || s.id === 'skill-mobile-repairing' || s.id === 'skill-canva-design' || s.id === 'skill-small-business');
  }
  if (q.includes('50') || q.includes('بزرگ') || q.includes('عمر')) {
    return SKILLS_MASTER_DATA.filter(s => s.id === 'skill-small-business' || s.id === 'skill-ai-tools' || s.id === 'skill-sewing-tailoring');
  }

  // Generic keyword match
  return SKILLS_MASTER_DATA.filter(s => 
    s.titleUrdu.toLowerCase().includes(q) ||
    s.titleEn.toLowerCase().includes(q) ||
    s.taglineUrdu.toLowerCase().includes(q) ||
    s.taglineEn.toLowerCase().includes(q) ||
    s.whatIsUrdu.toLowerCase().includes(q) ||
    s.whatIsEn.toLowerCase().includes(q) ||
    s.categoryTitleUrdu.toLowerCase().includes(q) ||
    s.categoryTitleEn.toLowerCase().includes(q)
  );
};
