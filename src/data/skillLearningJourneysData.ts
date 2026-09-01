import { SkillUniverseItem } from './skillsUniverseData';

export interface TechnicalTermExplanation {
  englishTerm: string;
  urduTerm: string;
  simpleExplanationUrdu: string;
  simpleExplanationEn: string;
}

export interface MiniQuizQuestion {
  id: string;
  questionUrdu: string;
  questionEn: string;
  optionsUrdu: string[];
  optionsEn: string[];
  correctOptionIndex: number;
  explanationUrdu: string;
  explanationEn: string;
}

export interface SkillLesson {
  id: string;
  lessonNumber: number;
  level: 1 | 2 | 3 | 4 | 5;
  levelTitleUrdu: string;
  levelTitleEn: string;
  titleUrdu: string;
  titleEn: string;
  estimatedMinutes: number;
  
  // 1. One Clear Concept (ایک واضح تصور)
  conceptSummaryUrdu: string;
  conceptSummaryEn: string;
  
  // Technical Term Breakdown (اصطلاح کی وضاحت)
  technicalTerm: TechnicalTermExplanation;
  
  // Simple Explanation (آسان اردو میں تفصیلی وضاحت)
  explanationUrdu: string;
  explanationEn: string;
  
  // Real-life Example (روزمرہ اور پاکستانی مثال)
  realLifeExampleUrdu: string;
  realLifeExampleEn: string;
  
  // Hands-on Exercise (عملی مشق)
  handsOnExerciseUrdu: {
    instructions: string;
    steps: string[];
    checklist: string[];
    tips: string;
  };
  handsOnExerciseEn: {
    instructions: string;
    steps: string[];
    checklist: string[];
    tips: string;
  };
  
  // Practical Task to Prove Learning (ثابت کریں)
  practicalTask: {
    titleUrdu: string;
    titleEn: string;
    descriptionUrdu: string;
    descriptionEn: string;
    actionPromptUrdu: string;
    actionPromptEn: string;
    verificationCriteriaUrdu: string[];
    verificationCriteriaEn: string[];
  };
  
  // 1-3 Interactive Questions (مختصر کوئز)
  miniQuiz: MiniQuizQuestion[];
  
  // Rewards
  xpReward: number;
}

export interface SkillPracticalProject {
  id: string;
  titleUrdu: string;
  titleEn: string;
  badgeUrdu: string;
  badgeEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  realWorldClientScenarioUrdu: string;
  realWorldClientScenarioEn: string;
  deliverablesUrdu: string[];
  deliverablesEn: string[];
  stepByStepGuideUrdu: string[];
  stepByStepGuideEn: string[];
  rubricChecklistUrdu: string[];
  rubricChecklistEn: string[];
  estimatedHours: number;
  xpReward: number;
}

export interface SkillLearningPathway {
  skillId: string;
  slug: string;
  titleUrdu: string;
  titleEn: string;
  categoryUrdu: string;
  categoryEn: string;
  taglineUrdu: string;
  taglineEn: string;
  
  // Overview Dimensions
  whyImportantUrdu: string;
  whyImportantEn: string;
  dailyLifeBenefitUrdu: string;
  dailyLifeBenefitEn: string;
  
  // Earning Pathways
  earningPathwaysUrdu: {
    type: 'job' | 'freelancing' | 'business' | 'home_service' | 'online_store';
    typeTitle: string;
    title: string;
    description: string;
    expectedIncomeUrdu: string;
    icon: string;
  }[];
  earningPathwaysEn: {
    type: 'job' | 'freelancing' | 'business' | 'home_service' | 'online_store';
    typeTitle: string;
    title: string;
    description: string;
    expectedIncomeEn: string;
    icon: string;
  }[];
  
  // Required Tools & Equipment
  requiredToolsUrdu: {
    name: string;
    category: 'mobile_app' | 'free_software' | 'hardware' | 'physical_tool';
    isFree: boolean;
    description: string;
  }[];
  requiredToolsEn: {
    name: string;
    category: 'mobile_app' | 'free_software' | 'hardware' | 'physical_tool';
    isFree: boolean;
    description: string;
  }[];
  
  // 3-5 Levels Roadmap Definition
  levelsDefinition: {
    levelNumber: 1 | 2 | 3 | 4 | 5;
    badgeUrdu: string;
    badgeEn: string;
    titleUrdu: string;
    titleEn: string;
    targetAudienceUrdu: string;
    targetAudienceEn: string;
    timeRequiredUrdu: string;
    timeRequiredEn: string;
    keyOutcomeUrdu: string;
    keyOutcomeEn: string;
  }[];
  
  // Complete Micro Lessons
  lessons: SkillLesson[];
  
  // Practical Capstone Project
  capstoneProject: SkillPracticalProject;
  
  // AI Personal Learning Assistant Prompts
  aiGuidePrompts: {
    id: string;
    promptUrdu: string;
    promptEn: string;
    titleUrdu: string;
    titleEn: string;
  }[];
  
  // Smart Interconnected Skill Recommendations
  nextRecommendedSkills: {
    skillId: string;
    titleUrdu: string;
    titleEn: string;
    reasonUrdu: string;
    reasonEn: string;
  }[];
}

// ------------------------------------------------------------------------------------------------
// 1. CANVA & GRAPHIC DESIGN LEARNING JOURNEY (Master Model)
// ------------------------------------------------------------------------------------------------
export const CANVA_LEARNING_JOURNEY: SkillLearningPathway = {
  skillId: 'cat-3-canva-graphic-design',
  slug: 'canva-graphic-design',
  titleUrdu: 'Canva اور Graphic Design',
  titleEn: 'Canva & Graphic Design',
  categoryUrdu: 'میڈیا، ڈیزائن و ویڈیو',
  categoryEn: 'Creative & Media',
  taglineUrdu: 'خوبصورت پوسٹرز، لوگو، کارڈز اور سوشل میڈیا بینرز بغیر کسی پیچیدہ سافٹ ویئر کے بنائیں',
  taglineEn: 'Design posters, logos, cards, and social media flyers without complex software',
  
  whyImportantUrdu: 'آج ہر چھوٹے بڑے کاروبار، دکان، اکیڈمی، ہسپتال اور آن لائن پیج کو روزانہ اشتہارات اور پوسٹرز کی ضرورت ہے۔ کینوا کے ذریعے آپ چند منٹوں میں پروفیشنل ڈیزائن بنا سکتے ہیں۔',
  whyImportantEn: 'Every local shop, clinic, school, and online brand needs eye-catching banners and social flyers daily.',
  
  dailyLifeBenefitUrdu: 'شادی اور عید کے دعوتی کارڈز، اسکول کے پروجیکٹس، گھریلو کاروبار کا مینو کارڈ اور واٹس ایپ سٹیٹس خود ڈیزائن کریں۔',
  dailyLifeBenefitEn: 'Design wedding cards, school charts, home food menus, and WhatsApp flyers yourself.',
  
  earningPathwaysUrdu: [
    {
      type: 'freelancing',
      typeTitle: 'فری لانسنگ (Online Freelancing)',
      title: 'سوشل میڈیا پوسٹ ڈیزائنر',
      description: 'فیس بک، انسٹاگرام اور لنکڈ اِن کلائنٹس کے لیے ۳۰ دن کا پوسٹ پیکیج ڈیزائن کریں۔',
      expectedIncomeUrdu: '۲۰،۰۰۰ تا ۵۰،۰۰۰ روپے ماہانہ',
      icon: 'Globe'
    },
    {
      type: 'home_service',
      typeTitle: 'مقامی دکانیں و کلائنٹس (Local Business)',
      title: 'مقامی دکانوں کے فلائیرز اور کارڈز',
      description: 'اپنے محلے کی دکانوں، ریسٹورنٹس اور اسکولوں کے لیے مینو کارڈز اور اشتہارات بنائیں۔',
      expectedIncomeUrdu: '۱۵،۰۰۰ تا ۴۰،۰۰۰ روپے ماہانہ',
      icon: 'Store'
    },
    {
      type: 'online_store',
      typeTitle: 'ڈیجیٹل مصنوعات (Digital Templates)',
      title: 'ریڈی میڈ اردو و انگلش ٹیمپلیٹس',
      description: 'شادی کارڈ اور کاروباری ٹیمپلیٹس بنا کر واٹس ایپ یا دراز پر فروخت کریں۔',
      expectedIncomeUrdu: '۱۰،۰۰۰ تا ۳۰،۰۰۰ روپے غیر فعال آمدنی',
      icon: 'Tag'
    }
  ],
  earningPathwaysEn: [
    {
      type: 'freelancing',
      typeTitle: 'Freelancing',
      title: 'Social Media Post Designer',
      description: 'Design monthly content packs for Instagram and Facebook clients.',
      expectedIncomeEn: 'PKR 20,000 - 50,000 / month',
      icon: 'Globe'
    },
    {
      type: 'home_service',
      typeTitle: 'Local Business Services',
      title: 'Flyers and Menu Cards',
      description: 'Design flyers, brochures, and menus for local schools, restaurants, and shops.',
      expectedIncomeEn: 'PKR 15,000 - 40,000 / month',
      icon: 'Store'
    }
  ],
  
  requiredToolsUrdu: [
    { name: 'Canva Mobile App یا Web', category: 'free_software', isFree: true, description: 'موبائل اور کمپیوٹر دونوں پر مفت دستیاب ہے' },
    { name: 'اردو فونٹس (Urdu Fonts - Jameel/Gulzar)', category: 'free_software', isFree: true, description: 'خوبصورت نستعلیق و خطِ ثلث تحریر کے لیے' },
    { name: 'Remove.bg (تصویر کا بیک گراؤنڈ ہٹانا)', category: 'free_software', isFree: true, description: 'اشیاء کی تصاویر کا پس منظر صاف کرنے کے لیے' }
  ],
  requiredToolsEn: [
    { name: 'Canva App or Web', category: 'free_software', isFree: true, description: 'Available free on Android, iOS, and PC' },
    { name: 'Urdu Nastaliq Fonts', category: 'free_software', isFree: true, description: 'For authentic Urdu typography' },
    { name: 'Remove.bg', category: 'free_software', isFree: true, description: 'Quick background remover tool' }
  ],
  
  levelsDefinition: [
    {
      levelNumber: 1,
      badgeUrdu: 'لیول ۱: بالکل نیا (Beginner)',
      badgeEn: 'Level 1: Beginner',
      titleUrdu: 'کینوا کے بنیادی ٹولز اور سادہ پوسٹر',
      titleEn: 'Canva Basics & Simple Posters',
      targetAudienceUrdu: 'جس نے پہلے کبھی گرافک ڈیزائن نہیں کیا اور صرف موبائل چلانا جانتا ہو۔',
      targetAudienceEn: 'For complete beginners using just a smartphone.',
      timeRequiredUrdu: '۳ سے ۵ دن (روزانہ ۳۰ منٹ)',
      timeRequiredEn: '3-5 days (30 mins/day)',
      keyOutcomeUrdu: 'سوشل میڈیا اور واٹس ایپ کے لیے خوبصورت اردو/انگلش پوسٹر بنانا۔',
      keyOutcomeEn: 'Create clean social media flyers.'
    },
    {
      levelNumber: 2,
      badgeUrdu: 'لیول ۲: درمیانی (Intermediate)',
      badgeEn: 'Level 2: Intermediate',
      titleUrdu: 'برانڈنگ، رنگوں کا انتخاب اور مینو کارڈز',
      titleEn: 'Branding, Color Palettes & Print Layouts',
      targetAudienceUrdu: 'جو بنیادی کینوا جانتا ہو لیکن اب کلائنٹس کے لیے پروفیشنل ڈیزائن بنانا چاہتا ہو۔',
      targetAudienceEn: 'Designers ready to create client-standard assets.',
      timeRequiredUrdu: '۷ دن (روزانہ ۴۵ منٹ)',
      timeRequiredEn: '7 days (45 mins/day)',
      keyOutcomeUrdu: 'مکمل لوگو، وزیٹنگ کارڈ، مینو کارڈ اور پرنٹنگ تیار فائل بنانا۔',
      keyOutcomeEn: 'Build complete brand kits and print-ready files.'
    },
    {
      levelNumber: 3,
      badgeUrdu: 'لیول ۳: ایڈوانسڈ و کلائنٹ گریڈ (Advanced)',
      badgeEn: 'Level 3: Advanced & Freelancing',
      titleUrdu: 'اینیمیٹڈ پوسٹرز، پریزنٹیشنز اور کلائنٹ ہینڈلنگ',
      titleEn: 'Animated Graphics & Client Delivery',
      targetAudienceUrdu: 'جو ڈیزائن سے باقاعدہ ماہانہ آمدنی اور فری لانسنگ آرڈرز حاصل کرنا چاہے۔',
      targetAudienceEn: 'Professionals seeking paid freelance orders.',
      timeRequiredUrdu: '۱۰ دن (روزانہ ۱ گھنٹہ)',
      timeRequiredEn: '10 days (1 hr/day)',
      keyOutcomeUrdu: 'پورٹ فولیو تیار کرنا اور پہلی حلال آن لائن/آف لائن آمدنی حاصل کرنا۔',
      keyOutcomeEn: 'Deliver client project packages and build a portfolio.'
    }
  ],
  
  lessons: [
    {
      id: 'canva-les-1',
      lessonNumber: 1,
      level: 1,
      levelTitleUrdu: 'لیول ۱: ابتدائی',
      levelTitleEn: 'Level 1: Beginner',
      titleUrdu: 'کینوا کا پہلا تعارف اور سائز کا انتخاب',
      titleEn: 'Canva Canvas & Perfect Dimensions',
      estimatedMinutes: 8,
      conceptSummaryUrdu: 'ہر پلیٹ فارم (واٹس ایپ، فیس بک، پرنٹ) کے لیے کینوس کا سائز الگ ہوتا ہے۔ صحیح سائز چننا ڈیزائن کا پہلا قدم ہے۔',
      conceptSummaryEn: 'Every platform requires specific canvas dimensions. Selecting the right aspect ratio is step 1.',
      technicalTerm: {
        englishTerm: 'Canvas Dimensions & Aspect Ratio',
        urduTerm: 'کینوس کا سائز اور تناسب',
        simpleExplanationUrdu: 'تصویر کی چوڑائی اور لمبائی کی پیمائش (مثلاً انسٹاگرام پوسٹ کے لیے ۱۰۸۰ ضرب ۱۰۸۰ پکسلز)۔',
        simpleExplanationEn: 'The width and height of your image frame in pixels.'
      },
      explanationUrdu: 'کینوا اوپن کرتے ہی سب سے اوپر سرچ بار نظر آتا ہے۔ اگر آپ کو واٹس ایپ اسٹیٹس بنانا ہے تو "WhatsApp Status" منتخب کریں۔ اگر فیس بک یا انسٹاگرام کے لیے پوسٹ بنانی ہے تو "Square Post (1080x1080)" چنیں۔ اس سے آپ کا ڈیزائن کسی بھی موبائل سکرین پر کٹے بغیر بالکل صاف نظر آئے گا۔',
      explanationEn: 'Choose standard dimensions so your design looks crisp without unwanted cropping on user devices.',
      realLifeExampleUrdu: 'اگر آپ درزی کی دکان کا اشتہار بنا رہے ہیں تو واٹس ایپ اسٹیٹس کے لیے لمبا (Vertical) سائز منتخب کریں تاکہ گاہک موبائل پر پورا اشتہار ایک نظر میں پڑھ سکیں۔',
      realLifeExampleEn: 'When designing a WhatsApp flyer for a tailoring shop, choose vertical 1080x1920 so customers read it full screen.',
      handsOnExerciseUrdu: {
        instructions: 'اپنے موبائل پر کینوا ایپ کھولیں اور پہلی خالی اسکوائر شیٹ تیار کریں۔',
        steps: [
          'کینوا ایپ میں پلس (+) بٹن پر کلک کریں۔',
          '"Instagram Post (Square)" منتخب کریں۔',
          'بیک گراؤنڈ کا رنگ سفید سے بدل کر ہلکا نیلا یا آف وائٹ کریں۔'
        ],
        checklist: [
          'کیا آپ نے خالی صفحہ اوپن کر لیا؟',
          'کیا بیک گراؤنڈ کا رنگ تبدیل ہو گیا؟'
        ],
        tips: 'شروع میں گہرے اور آنکھوں کو چبھنے والے رنگوں سے پرہیز کریں، ہلکے رنگ پر سکون لگتے ہیں۔'
      },
      handsOnExerciseEn: {
        instructions: 'Open Canva and create a blank square canvas.',
        steps: [
          'Tap the (+) button in Canva.',
          'Select Instagram Post (Square).',
          'Change canvas background to a soft neutral color.'
        ],
        checklist: ['Opened blank canvas', 'Changed background color'],
        tips: 'Prefer clean soft neutral backgrounds.'
      },
      practicalTask: {
        titleUrdu: 'پہلا خالی کینوس تیار کر کے رنگ سیٹ کریں',
        titleEn: 'Set Up Canvas & Background Tone',
        descriptionUrdu: 'اپنے پسندیدہ رنگ کا ایک خالی کینوس بنائیں اور نیچے دی گئی تصدیق کریں۔',
        descriptionEn: 'Create your first canvas and confirm completion.',
        actionPromptUrdu: 'میں نے کینوا میں اسکوائر کینوس بنا لیا ہے اور پس منظر کا رنگ منتخب کر لیا ہے۔',
        actionPromptEn: 'I have set up my square canvas and background color.',
        verificationCriteriaUrdu: [
          'صحیح تناسب (Square 1:1) منتخب کیا گیا ہے',
          'پس منظر صاف اور واضح ہے'
        ],
        verificationCriteriaEn: ['Square ratio selected', 'Background tone set']
      },
      miniQuiz: [
        {
          id: 'q1',
          questionUrdu: 'واٹس ایپ اور انسٹاگرام کی مربع (Square) پوسٹ کا معیاری سائز کیا ہوتا ہے؟',
          questionEn: 'What is the standard size for a square social post?',
          optionsUrdu: ['1080 x 1080 پکسلز', '500 x 200 پکسلز', '1920 x 100 پکسلز', '100 x 100 پکسلز'],
          optionsEn: ['1080 x 1080 px', '500 x 200 px', '1920 x 100 px', '100 x 100 px'],
          correctOptionIndex: 0,
          explanationUrdu: '1080x1080 پکسل تمام سوشل میڈیا ایپس پر بغیر پکسل پھٹے واضح نظر آتا ہے۔',
          explanationEn: '1080x1080 px is the universal crisp standard.'
        }
      ],
      xpReward: 25
    },
    {
      id: 'canva-les-2',
      lessonNumber: 2,
      level: 1,
      levelTitleUrdu: 'لیول ۱: ابتدائی',
      levelTitleEn: 'Level 1: Beginner',
      titleUrdu: 'اردو اور انگلش تحریر (Typography) اور فونٹ سائز',
      titleEn: 'Text, Urdu Fonts & Visual Hierarchy',
      estimatedMinutes: 10,
      conceptSummaryUrdu: 'پوسٹر میں سب سے اہم بات سب سے بڑی اور واضح ہونی چاہیے، تاکہ پڑھنے والا ایک سیکنڈ میں سمجھ جائے۔',
      conceptSummaryEn: 'The most critical headline must be prominent so viewers grasp it instantly.',
      technicalTerm: {
        englishTerm: 'Visual Hierarchy & Typography',
        urduTerm: 'بصری درجہ بندی اور خطاطی',
        simpleExplanationUrdu: 'اہم ہیڈنگ کو بڑا اور ذیلی معلومات کو مناسب چھوٹا رکھنا تاکہ آنکھ پہلے اہم بات پڑھے۔',
        simpleExplanationEn: 'Arranging text sizes logically from headline to subhead to detail.'
      },
      explanationUrdu: 'ایک اچھے پوسٹر پر کبھی بھی سارے الفاظ ایک ہی سائز کے نہیں ہوتے۔ اصول یہ ہے کہ: (۱) اہم آفر یا نام سب سے بڑا (Headline)، (۲) اہم تفصیل درمیانی (Subheading)، (۳) رابطہ نمبر اور پتہ سب سے چھوٹا (Footer)۔ کینوا میں اردو فونٹس جیسے "Gulzar" یا "Noto Nastaliq" منتخب کرنے سے اردو لکھائی پرکشش بن جاتی ہے۔',
      explanationEn: 'Never keep all text the same size. Follow Headline > Subhead > Contact hierarchy.',
      realLifeExampleUrdu: 'اگر آپ کسی اسکول کے داخلے کا اشتہار بنا رہے ہیں تو "داخلہ جاری ہے" سب سے بڑا اور فیس یا تاریخ چھوٹی ہونی چاہیے۔',
      realLifeExampleEn: 'For school admission flyers, "Admissions Open" is large while dates and address are concise.',
      handsOnExerciseUrdu: {
        instructions: 'اپنے کینوس پر تین درجاتی ٹیکسٹ شامل کریں۔',
        steps: [
          'Text آپشن سے "Add a Heading" منتخب کریں اور لکھیں: "عید اسپیشل سیل"',
          '"Add Subheading" منتخب کریں اور لکھیں: "تمام سوٹوں پر ۳۰ فیصد رعایت"',
          'نیچے فون نمبر اور ایڈریس شامل کریں۔'
        ],
        checklist: [
          'کیا ہیڈنگ سب سے بڑی ہے؟',
          'کیا رابطہ نمبر واضح پڑھا جا رہا ہے؟'
        ],
        tips: 'ایک پوسٹر میں دو سے زیادہ مختلف فونٹس استعمال نہ کریں ورنہ ڈیزائن غیر سنجیدہ لگے گا۔'
      },
      handsOnExerciseEn: {
        instructions: 'Add 3 text layers following hierarchy.',
        steps: [
          'Add headline: "Eid Special Sale"',
          'Add subhead: "Flat 30% Off on all suits"',
          'Add contact details at the bottom.'
        ],
        checklist: ['Headline is largest', 'Contact info readable'],
        tips: 'Limit yourself to maximum 2 fonts per flyer.'
      },
      practicalTask: {
        titleUrdu: '۳ سطحی ٹیکسٹ والا مکمل اشتہار ٹائپ کریں',
        titleEn: 'Create 3-Level Text Hierarchy',
        descriptionUrdu: 'ہیڈنگ، ذیلی لائن اور رابطہ نمبر کے ساتھ ٹیکسٹ شامل کر کے تسلی کریں۔',
        descriptionEn: 'Add headline, subhead, and contact details.',
        actionPromptUrdu: 'میں نے ہیڈنگ اور ذیلی معلومات کو درست سائز اور فونٹس کے ساتھ ایڈجسٹ کر لیا ہے۔',
        actionPromptEn: 'I configured headline and subheadings with readable typography.',
        verificationCriteriaUrdu: [
          'ہیڈنگ واضح اور نمایاں ہے',
          'فونٹ اردو میں درست نظر آ رہا ہے'
        ],
        verificationCriteriaEn: ['Headline is prominent', 'Font is clean and legible']
      },
      miniQuiz: [
        {
          id: 'q2',
          questionUrdu: 'پوسٹر میں سب سے اہم بات کو کس طرح نمایاں کرنا چاہیے؟',
          questionEn: 'How should the main offer be highlighted in a flyer?',
          optionsUrdu: ['اسے بڑا اور واضح فونٹ سائز دے کر', 'اسے بالکل کونے میں چھوٹا لکھ کر', 'اسے غیر واضح رنگ میں چھپا کر', 'سب کچھ ایک ہی سائز میں رکھ کر'],
          optionsEn: ['Making it large with bold hierarchy', 'Hiding it in a small corner', 'Using faded gray text', 'Making all text identical size'],
          correctOptionIndex: 0,
          explanationUrdu: 'بصری درجہ بندی (Visual Hierarchy) کے تحت بنیادی پیغام ہمیشہ بڑا اور واضح ہونا چاہیے۔',
          explanationEn: 'The primary message must be prominent and readable at first glance.'
        }
      ],
      xpReward: 30
    },
    {
      id: 'canva-les-3',
      lessonNumber: 3,
      level: 1,
      levelTitleUrdu: 'لیول ۱: ابتدائی',
      levelTitleEn: 'Level 1: Beginner',
      titleUrdu: 'تصویر کا بیک گراؤنڈ ہٹانا اور شفاف لوگو لگانا',
      titleEn: 'Transparent PNGs, Background Removal & Icons',
      estimatedMinutes: 10,
      conceptSummaryUrdu: 'پروڈکٹ کی تصویر کا پس منظر ہٹا کر اسے پوسٹر پر رکھنے سے ڈیزائن کی خوبصورتی ۱۰ گنا بڑھ جاتی ہے۔',
      conceptSummaryEn: 'Removing cluttered photo backgrounds gives a clean, professional product look.',
      technicalTerm: {
        englishTerm: 'Transparent PNG & Background Cutout',
        urduTerm: 'شفاف تصویر اور بیک گراؤنڈ کٹ آؤٹ',
        simpleExplanationUrdu: 'ایسی تصویر جس کے پیچھے کوئی سفید یا غیر ضروری پردہ نہ ہو بلکہ صرف اصل پروڈکٹ نظر آئے۔',
        simpleExplanationEn: 'An image with zero background clutter, showcasing just the product item.'
      },
      explanationUrdu: 'جب آپ دکان کی کسی پروڈکٹ (جیسے جوتا، گھڑی، کپڑا، یا برگر) کی تصویر لیتے ہیں تو پیچھے میز یا دیوار آ جاتی ہے۔ اگر آپ Remove.bg یا کینوا کے Background Remover سے پس منظر صاف کر دیں تو پروڈکٹ ہوا میں تیرتی ہوئی اور پروفیشنل نظر آتی ہے۔',
      explanationEn: 'Remove distracting background clutter so only the sharp product stands out.',
      realLifeExampleUrdu: 'ایک فاسٹ فوڈ کی دکان کے لیے برگر کی تصویر کا پس منظر ہٹا کر اسے شوخ پیلے یا لال بینر پر رکھیں تاکہ گاہک کی بھوک چمکے۔',
      realLifeExampleEn: 'A burger photo with transparent background placed on a warm color background grabs appetite instantly.',
      handsOnExerciseUrdu: {
        instructions: 'ایک پروڈکٹ تصویر کا بیک گراؤنڈ صاف کر کے پوسٹر میں فٹ کریں۔',
        steps: [
          'موبائل کیمرے سے کسی بھی چیز (کپ، کتاب یا گھڑی) کی تصویر لیں۔',
          'Remove.bg پر جا کر مفت میں بیک گراؤنڈ ریموو کریں۔',
          'اس PNG تصویر کو کینوا کینوس پر اپلوڈ کر کے درمیان میں رکھیں۔'
        ],
        checklist: [
          'کیا پروڈکٹ کے کنارے ہموار ہیں؟',
          'کیا تصویر کے پیچھے ناپسندیدہ پس منظر ختم ہو گیا؟'
        ],
        tips: 'تصویر لیتے وقت روشنی اچھی ہو تاکہ کٹ آؤٹ صاف اور شفاف نکلے۔'
      },
      handsOnExerciseEn: {
        instructions: 'Remove background from a sample photo and place it.',
        steps: [
          'Take a photo of any household item.',
          'Use Remove.bg to isolate the object.',
          'Upload PNG into Canva and center it.'
        ],
        checklist: ['Clean edges', 'Distractions removed'],
        tips: 'Take photos in good daylight.'
      },
      practicalTask: {
        titleUrdu: 'بیک گراؤنڈ فری پروڈکٹ پوسٹر مکمل کریں',
        titleEn: 'Assemble Background-Free Product Graphic',
        descriptionUrdu: 'پروڈکٹ کٹ آؤٹ اور قیمت کے ساتھ پہلا مکمل اشتہار تیار کریں۔',
        descriptionEn: 'Combine product PNG with price tag and headline.',
        actionPromptUrdu: 'میں نے پروڈکٹ کی تصویر کا بیک گراؤنڈ صاف کر کے پوسٹر میں لگا دیا ہے۔',
        actionPromptEn: 'I inserted a clean product cutout with price badge.',
        verificationCriteriaUrdu: [
          'تصویر شفاف ہے',
          'قیمت اور عنوان واضح ہیں'
        ],
        verificationCriteriaEn: ['Image is clean PNG', 'Pricing and title are legible']
      },
      miniQuiz: [
        {
          id: 'q3',
          questionUrdu: 'شفاف (Transparent) تصویر کی کون سی فائل فارمیٹ ہوتی ہے؟',
          questionEn: 'Which file format supports transparent backgrounds?',
          optionsUrdu: ['PNG فائل', 'MP3 آڈیو', 'TXT ٹیکسٹ', 'PDF ڈاکیومنٹ'],
          optionsEn: ['PNG format', 'MP3 audio', 'TXT text', 'PDF file'],
          correctOptionIndex: 0,
          explanationUrdu: 'PNG فارمیٹ تصویر کے شفاف پس منظر کو محفوظ رکھتا ہے۔',
          explanationEn: 'PNG format preserves transparency layers.'
        }
      ],
      xpReward: 35
    },
    {
      id: 'canva-les-4',
      lessonNumber: 4,
      level: 2,
      levelTitleUrdu: 'لیول ۲: درمیانی',
      levelTitleEn: 'Level 2: Intermediate',
      titleUrdu: 'برانڈ کلرز، رولز اور وزیٹنگ کارڈ ڈیزائن',
      titleEn: 'Brand Color Palettes & Business Cards',
      estimatedMinutes: 12,
      conceptSummaryUrdu: 'کسی بھی کاروبار کے لیے مخصوص ۲ سے ۳ رنگوں کا انتخاب برانڈ بناتا ہے۔ وزیٹنگ کارڈ پرنٹنگ کا درست معیار سیکھیں۔',
      conceptSummaryEn: 'Limiting a brand to 2-3 consistent signature colors builds trust and recognition.',
      technicalTerm: {
        englishTerm: 'Color Psychology & Print Bleed',
        urduTerm: 'رنگوں کی نفسیات اور پرنٹنگ مارجن',
        simpleExplanationUrdu: 'صحیح رنگوں کا جوڑ اور کارڈ کٹنے کے لیے کناروں سے تھوڑا فاصلہ چھوڑنا۔',
        simpleExplanationEn: 'Choosing harmonious colors and leaving margins for clean cutting.'
      },
      explanationUrdu: 'کبھی بھی کارڈ میں ۵، ۶ بے تکے رنگ نہ ملائیں۔ کلینک کے لیے نیلا اور سفید، کھانے کے لیے لال اور پیلا، جبکہ مالیاتی کام کے لیے نیوی اور گولڈن بہترین رہتا ہے۔ وزیٹنگ کارڈ بناتے وقت تمام لکھائی کناروں سے کم از کم 5mm اندر رکھیں تاکہ پرنٹنگ مشین میں نام نہ کٹے۔',
      explanationEn: 'Keep text at least 5mm away from card boundaries to prevent cutting mistakes at print shops.',
      realLifeExampleUrdu: 'ایک رئیل اسٹیٹ ایجنٹ کا کارڈ بناتے وقت نیوی بلیو بیک گراؤنڈ پر سنہری (Golden) نام اور سفید فون نمبر بہت شاہانہ لگتے ہیں۔',
      realLifeExampleEn: 'For real estate cards, deep navy with gold accents exudes reliability and value.',
      handsOnExerciseUrdu: {
        instructions: 'ایک دکاندار یا سروس کے لیے دو رخی (Front & Back) وزیٹنگ کارڈ بنائیں۔',
        steps: [
          'کینوا میں "Business Card" سرچ کریں۔',
          'سامنے والی سائیڈ پر لوگو اور نام رکھیں۔',
          'پچھلی سائیڈ پر واٹس ایپ نمبر، سروسز اور لوکیشن لکھیں۔'
        ],
        checklist: [
          'کیا دونوں سائیڈز کے رنگ ایک جیسے ہیں؟',
          'کیا کوئی ٹیکسٹ کارڈ کے بالکل کونے پر تو نہیں؟'
        ],
        tips: 'QR کوڈ جنریٹر کے ذریعے واٹس ایپ کا QR کوڈ کارڈ پر ضرور لگائیں۔'
      },
      handsOnExerciseEn: {
        instructions: 'Design front and back of a clean business card.',
        steps: [
          'Select Business Card template in Canva.',
          'Front: Business Name & Logo.',
          'Back: WhatsApp, services, location.'
        ],
        checklist: ['Consistent color theme', 'Safe margin kept'],
        tips: 'Add a scannable WhatsApp QR code.'
      },
      practicalTask: {
        titleUrdu: 'مکمل وزیٹنگ کارڈ ڈیزائن مکمل کریں',
        titleEn: 'Create Complete Business Card',
        descriptionUrdu: 'ایک فرضی یا اصل کلائنٹ کے لیے وزیٹنگ کارڈ تیار کریں۔',
        descriptionEn: 'Design a print-ready business card.',
        actionPromptUrdu: 'میں نے وزیٹنگ کارڈ کا فرنٹ اور بیک مکمل ترتیب دے لیا ہے۔',
        actionPromptEn: 'I built front and back layouts with safe print margins.',
        verificationCriteriaUrdu: [
          '۲ سے ۳ رنگوں کا بہترین استعمال',
          'تمام رابطے درست اور پڑھنے کے لائق ہیں'
        ],
        verificationCriteriaEn: ['2-3 brand colors used', 'Margins and typography clean']
      },
      miniQuiz: [
        {
          id: 'q4',
          questionUrdu: 'وزیٹنگ کارڈ پرنٹ کرواتے وقت لکھائی کو کناروں سے اندر کیوں رکھا جاتا ہے؟',
          questionEn: 'Why should text be placed well inside card boundaries?',
          optionsUrdu: ['تاکہ کٹنگ مشین کے دوران نام یا نمبر کٹ نہ جائے', 'کارڈ کا وزن ہلکا کرنے کے لیے', 'رنگ بچانے کے لیے', 'کوئی خاص وجہ نہیں ہوتی'],
          optionsEn: ['To avoid accidental trimming during print slicing', 'To make it lightweight', 'To save ink', 'No specific reason'],
          correctOptionIndex: 0,
          explanationUrdu: 'پرنٹ کٹنگ مشین میں 2 سے 3 ملی میٹر کا کٹ آ سکتا ہے اس لیے مارجن ضروری ہے۔',
          explanationEn: 'Safe margin ensures critical details never get trimmed.'
        }
      ],
      xpReward: 40
    },
    {
      id: 'canva-les-5',
      lessonNumber: 5,
      level: 3,
      levelTitleUrdu: 'لیول ۳: کلائنٹ گریڈ',
      levelTitleEn: 'Level 3: Advanced',
      titleUrdu: 'کلائنٹ کو کام ڈیلیور کرنا اور پہلی آمدنی حاصل کرنا',
      titleEn: 'Client Delivery, High-Res Export & Pricing',
      estimatedMinutes: 15,
      conceptSummaryUrdu: 'صرف ڈیزائن بنانا کافی نہیں، بلکہ کلائنٹ کو ہائی کوالٹی PDF/PNG میں کام دینا اور مناسب اجرت وصول کرنا اصل کامیابی ہے۔',
      conceptSummaryEn: 'Mastering high-res export formats and professional client handover delivers repeat income.',
      technicalTerm: {
        englishTerm: 'PDF Print vs PNG & Client Handover',
        urduTerm: 'ہائی ریزولوشن ایکسپورٹ اور کلائنٹ ڈیلیوری',
        simpleExplanationUrdu: 'سوشل میڈیا کے لیے PNG اور پرنٹنگ کے لیے PDF Print فائل بنا کر کسٹمر کو دینا۔',
        simpleExplanationEn: 'Exporting PNG for social media and PDF Print (CMYK) for print machines.'
      },
      explanationUrdu: 'جب کلائنٹ آپ کو سوشل میڈیا پوسٹ کا کہے تو اسے کینوا سے "PNG" فائل دیں۔ لیکن جب وہ کہے کہ مجھے فلائیر یا بروشر پرنٹ کروانا ہے تو کینوا کے ڈاؤنلوڈ مینو سے "PDF Print" منتخب کریں۔ کام مکمل ہونے کے بعد واٹس ایپ پر فائل بھیجیں اور عزت دارانہ طریقے سے جاز کیش/ایزی پیسہ پر اپنی طے شدہ فیس وصول کریں۔',
      explanationEn: 'Send PNG for digital screens and PDF Print for printing press shops.',
      realLifeExampleUrdu: 'آپ نے محلے کی بیکری کے لیے ۵ سوشل میڈیا پوسٹس بنائیں اور فی پوسٹ ۵۰۰ روپے کے حساب سے ۲۵۰۰ روپے وصول کیے۔',
      realLifeExampleEn: 'Delivering a 5-flyer package to a local bakery for PKR 2,500 via mobile payment.',
      handsOnExerciseUrdu: {
        instructions: 'ایک مکمل کلائنٹ پروجیکٹ پیک تیار کر کے ایکسپورٹ کریں۔',
        steps: [
          'اپنے بنائے گئے ۳ بہترین ڈیزائنز کو ایک فولڈر میں رکھیں',
          'انہیں PNG اور PDF Print دونوں فارمیٹس میں ڈاؤنلوڈ کریں',
          'ایک چھوٹا تعارفی میسج لکھیں جو کلائنٹ کو بھیجا جائے'
        ],
        checklist: [
          'کیا دونوں فارمیٹس میں فائل موجود ہے؟',
          'کیا واٹس ایپ پر فائل کی کوالٹی مدھم تو نہیں ہوئی؟'
        ],
        tips: 'واٹس ایپ پر ہمیشہ "Document" کے طور پر تصویر بھیجیں تاکہ کوالٹی نہ گرے۔'
      },
      handsOnExerciseEn: {
        instructions: 'Export client deliverables in both PNG and PDF formats.',
        steps: [
          'Collect your 3 best design assets.',
          'Export PNG for digital and PDF Print for print.',
          'Draft a polite delivery message.'
        ],
        checklist: ['Exported in high resolution', 'Delivery message ready'],
        tips: 'Always send files as "Document" on WhatsApp to preserve quality.'
      },
      practicalTask: {
        titleUrdu: '۳ ڈیزائنز کا کلائنٹ پیکیج تیار کریں',
        titleEn: 'Assemble 3-Piece Client Portfolio Pack',
        descriptionUrdu: 'پوسٹر، کارڈ اور آفر بینر کا مشترکہ کلائنٹ پیک مکمل کریں۔',
        descriptionEn: 'Bundle a flyer, card, and social post for a sample client.',
        actionPromptUrdu: 'میں نے ۳ ڈیزائنز کا کلائنٹ پیکیج مکمل کر کے محفوظ کر لیا ہے۔',
        actionPromptEn: 'I assembled a 3-piece client portfolio package.',
        verificationCriteriaUrdu: [
          '۳ مختلف قسم کے معیاری ڈیزائن تیار ہیں',
          'ایکسپورٹ کوالٹی ہائی ریزولوشن ہے'
        ],
        verificationCriteriaEn: ['3 distinct design assets ready', 'High-res export completed']
      },
      miniQuiz: [
        {
          id: 'q5',
          questionUrdu: 'پرنٹنگ پریس کے لیے کینوا سے کون سی فائل ڈاؤنلوڈ کرنی چاہیے؟',
          questionEn: 'Which file format is ideal for physical printing machines?',
          optionsUrdu: ['PDF Print فارمیٹ', 'کم ریزولوشن JPG', 'GIF اینیمیشن', 'سادہ ٹیکسٹ فائل'],
          optionsEn: ['PDF Print format', 'Low-res JPG', 'GIF animation', 'Plain text'],
          correctOptionIndex: 0,
          explanationUrdu: 'PDF Print فارمیٹ پرنٹنگ پریس پر بغیر پکسل پھٹے بہترین چھپائی دیتا ہے۔',
          explanationEn: 'PDF Print format guarantees vector clarity for commercial print.'
        }
      ],
      xpReward: 50
    }
  ],
  
  capstoneProject: {
    id: 'canva-capstone-project',
    titleUrdu: 'حقیقی پروجیکٹ: ایک مقامی کاروبار کے لیے مکمل برانڈنگ پیکج',
    titleEn: 'Capstone Project: Complete Local Business Branding Package',
    badgeUrdu: 'حقیقی پروجیکٹ سند یافتہ',
    badgeEn: 'Capstone Certified',
    descriptionUrdu: 'اپنے محلے کی کسی اصلی دکان (مثلاً کپڑے کی دکان، ہوٹل، اسکول، یا کلینک) کا انتخاب کریں اور ان کے لیے مکمل ڈیزائن کٹ تیار کریں۔',
    descriptionEn: 'Select an actual local shop or clinic and build their complete brand design kit.',
    realWorldClientScenarioUrdu: 'ایک نئے کھلے ہوئے فاسٹ فوڈ کی دکان "الملت فرائیڈ چکن" کو اپنے افتتاح کے لیے فلائیر، مینو کارڈ اور فیس بک پوسٹ کی فوری ضرورت ہے۔',
    realWorldClientScenarioEn: 'A newly opened eatery needs an opening flyer, takeaway menu card, and Instagram promotional post.',
    deliverablesUrdu: [
      '۱. افتتاحی سوشل میڈیا پوسٹر (Opening Banner)',
      '۲. دو رخی وزیٹنگ اور مینو کارڈ (Takeaway Menu Card)',
      '۳. واٹس ایپ اسٹیٹس پروموشنل ریل کور (WhatsApp Status Flyer)'
    ],
    deliverablesEn: [
      '1. Grand Opening Social Flyer',
      '2. Two-sided Takeaway Menu Card',
      '3. WhatsApp Status Promotion Asset'
    ],
    stepByStepGuideUrdu: [
      'مرحلہ ۱: دکان کے لیے ۲ بنیادی رنگ چنیں (مثلاً گہرا لال اور سنہری پیلا)۔',
      'مرحلہ ۲: دکان کا نام اور آفر بڑا لکھیں ("عظیم الشان افتتاح - ۲۰ فیصد رعایت")۔',
      'مرحلہ ۳: کھانے کی شفاف PNG تصاویر اور آئٹم لسٹ شامل کریں۔',
      'مرحلہ ۴: نیچے واٹس ایپ نمبر اور ہوم ڈیلیوری واضح لکھیں۔',
      'مرحلہ ۵: کینوا سے PNG اور PDF Print دونوں ڈاؤنلوڈ کر کے پروجیکٹ سمری سبمٹ کریں۔'
    ],
    stepByStepGuideEn: [
      'Step 1: Pick 2 signature colors (e.g., deep crimson and golden yellow).',
      'Step 2: Add bold headline: "Grand Opening - Flat 20% Off".',
      'Step 3: Insert background-free food PNG items and prices.',
      'Step 4: Place clear WhatsApp delivery number.',
      'Step 5: Export and verify all dimensions.'
    ],
    rubricChecklistUrdu: [
      'کیا تمام ڈیزائنز میں ایک جیسے برانڈ کلرز اور فونٹس ہیں؟',
      'کیا ہجے (Spelling) اور قیمتیں درست ہیں؟',
      'کیا فون نمبر اور پتہ آسانی سے پڑھا جا رہا ہے؟',
      'کیا تصاویر شفاف اور صاف ہیں؟'
    ],
    rubricChecklistEn: [
      'Consistent brand colors and typography used',
      'Accurate spelling and clear pricing',
      'Legible contact details',
      'High-res cutouts'
    ],
    estimatedHours: 2,
    xpReward: 100
  },
  
  aiGuidePrompts: [
    {
      id: 'p1',
      titleUrdu: 'مجھے یہ سمجھ نہیں آیا',
      titleEn: 'Explain More Simply',
      promptUrdu: 'السلام علیکم! کینوا کے اس سبق کی وضاحت مزید آسان اردو اور گھریلو مثال کے ساتھ کر دیں تاکہ میں بغیر کسی الجھن کے سمجھ سکوں۔',
      promptEn: 'Please explain this Canva lesson concept in very simple Urdu with a relatable example.'
    },
    {
      id: 'p2',
      titleUrdu: 'یہ کام خود کیسے کروں؟',
      titleEn: 'How to Do This Task',
      promptUrdu: 'میں کینوا ایپ میں اس وقت موجود ہوں۔ مجھے انگلی پکڑ کر بتائیں کہ میں پہلا بٹن کون سا دباؤں اور یہ ٹاسک کیسے مکمل کروں؟',
      promptEn: 'Give me step-by-step practical tap-by-tap instructions on what to click in Canva right now.'
    },
    {
      id: 'p3',
      titleUrdu: 'کلائنٹ کو کیا قیمت بتاؤں؟',
      titleEn: 'How Much to Charge Client',
      promptUrdu: 'اگر کوئی مقامی دکاندار مجھ سے سوشل میڈیا پوسٹ یا مینو کارڈ بنوانا چاہے تو پاکستان میں مجھے شروع میں کتنے پیسے مانگنے چاہئیں؟',
      promptEn: 'What is the standard fair pricing to charge a local shop for social posts and menu cards in Pakistan?'
    }
  ],
  
  nextRecommendedSkills: [
    {
      skillId: 'cat-4-video-editing',
      titleUrdu: 'Video Editing (ویڈیو ایڈیٹنگ)',
      titleEn: 'Video Editing (CapCut)',
      reasonUrdu: 'ڈیزائننگ کے بعد اگر آپ ویڈیو ایڈیٹنگ سیکھ لیں تو آپ ریلز اور شارٹس بنا کر دگنی آمدنی حاصل کر سکتے ہیں۔',
      reasonEn: 'Pairing graphic design with video editing allows you to create high-value social reels.'
    },
    {
      skillId: 'cat-6-social-media',
      titleUrdu: 'Social Media Management',
      titleEn: 'Social Media Management',
      reasonUrdu: 'کلائنٹ کے پیجز پر ڈیزائن شیڈول کرنا اور کسٹمر میسجز ہینڈل کرنے کا مکمل ماہانہ پیکج دیں۔',
      reasonEn: 'Offer full monthly management including posting, design, and inbox support.'
    }
  ]
};

// ------------------------------------------------------------------------------------------------
// 2. AI & CHATGPT LEARNING JOURNEY
// ------------------------------------------------------------------------------------------------
export const AI_CHATGPT_LEARNING_JOURNEY: SkillLearningPathway = {
  skillId: 'cat-2-ai-chatgpt',
  slug: 'ai-and-chatgpt',
  titleUrdu: 'AI اور ChatGPT (مصنوعی ذہانت)',
  titleEn: 'AI & ChatGPT Productivity',
  categoryUrdu: 'ڈیجیٹل، IT و ٹیکنالوجی',
  categoryEn: 'Digital & Tech',
  taglineUrdu: 'مصنوعی ذہانت کو اپنا مددگار بنا کر تحریر، ریسرچ اور روزمرہ مسائل ۵ گنا تیزی سے حل کریں',
  taglineEn: 'Harness AI for research, high-speed writing, task automation, and problem solving',
  
  whyImportantUrdu: 'AI دنیا کی تاریخ کا سب سے تیز ترین انقلاب ہے۔ جو شخص AI کو درست ہدایات دینا سیکھ لے، وہ اکیلا شخص ۱۰ آدمیوں جتنا کام چند منٹوں میں مکمل کر سکتا ہے۔',
  whyImportantEn: 'Mastering AI prompts multiplies your daily output and problem-solving speed by 10x.',
  
  dailyLifeBenefitUrdu: 'دفتری خطوط، اسکول کے اسباق کا خلاصہ، صحت و خوراک کا شیڈول، قانونی تجاویز اور کاروباری ای میلز فوراً لکھوائیں۔',
  dailyLifeBenefitEn: 'Draft professional emails, summarize long reports, create daily diet plans, and solve business challenges.',
  
  earningPathwaysUrdu: [
    {
      type: 'freelancing',
      typeTitle: 'فری لانسنگ (Content & Copywriting)',
      title: 'AI اسسٹڈ کنٹینٹ رائٹنگ',
      description: 'بلاگز، پروڈکٹ ڈسکرپشنز، اور سوشل میڈیا کیپشنز تیز رفتاری سے لکھیں۔',
      expectedIncomeUrdu: '۲۵،۰۰۰ تا ۶۰،۰۰۰ روپے ماہانہ',
      icon: 'FileText'
    },
    {
      type: 'business',
      typeTitle: 'کاروباری خود کاری (Business Automation)',
      title: 'دکان و کسٹمر سپورٹ کے فوری جوابات',
      description: 'واٹس ایپ کسٹمرز کے سوالات کے خودکار اور شائستہ جوابات تیار کریں۔',
      expectedIncomeUrdu: '۲۰،۰۰۰ تا ۴۵،۰۰۰ روپے ماہانہ',
      icon: 'Zap'
    }
  ],
  earningPathwaysEn: [
    {
      type: 'freelancing',
      typeTitle: 'Freelance AI Copywriting',
      title: 'Content & Copywriting',
      description: 'Produce high-converting blog posts and marketing copies quickly.',
      expectedIncomeEn: 'PKR 25,000 - 60,000 / month',
      icon: 'FileText'
    }
  ],
  
  requiredToolsUrdu: [
    { name: 'ChatGPT / Claude / Gemini', category: 'free_software', isFree: true, description: 'موبائل اور کمپیوٹر پر مفت دستیاب ہے' },
    { name: 'موبائل نوٹ پیڈ یا گوگل ڈوکس', category: 'free_software', isFree: true, description: 'پرامپٹس اور نتائج کو محفوظ کرنے کے لیے' }
  ],
  requiredToolsEn: [
    { name: 'ChatGPT / Gemini', category: 'free_software', isFree: true, description: 'Free tier available on web and mobile apps' }
  ],
  
  levelsDefinition: [
    {
      levelNumber: 1,
      badgeUrdu: 'لیول ۱: بنیادی (Beginner)',
      badgeEn: 'Level 1: Beginner',
      titleUrdu: 'AI سے بات چیت اور بنیادی سوالات',
      titleEn: 'Conversing with AI & Basic Q&A',
      targetAudienceUrdu: 'جس نے پہلے کبھی AI استعمال نہیں کیا اور اردو میں مدد حاصل کرنا چاہتا ہو۔',
      targetAudienceEn: 'Complete beginners discovering AI chat tools.',
      timeRequiredUrdu: '۲ دن (روزانہ ۲۰ منٹ)',
      timeRequiredEn: '2 days (20 mins/day)',
      keyOutcomeUrdu: 'روزمرہ مسائل اور تحریر میں AI سے درست جواب حاصل کرنا۔',
      keyOutcomeEn: 'Ask clear questions and obtain accurate responses in Urdu/English.'
    },
    {
      levelNumber: 2,
      badgeUrdu: 'لیول ۲: پرامپٹ انجینئرنگ (Intermediate)',
      badgeEn: 'Level 2: Intermediate',
      titleUrdu: 'طاقتور پرامپٹ سٹرکچر (Role + Context + Action)',
      titleEn: 'Structured Prompt Engineering',
      targetAudienceUrdu: 'جو AI سے عام جواب کے بجائے ماہرانہ اور مخصوص نتائج چاہتا ہو۔',
      targetAudienceEn: 'Users seeking precise, professional AI outputs.',
      timeRequiredUrdu: '۵ دن (روزانہ ۳۰ منٹ)',
      timeRequiredEn: '5 days (30 mins/day)',
      keyOutcomeUrdu: 'پیشہ ورانہ ای میلز، مضامین، اور کاروباری تجاویز حاصل کرنا۔',
      keyOutcomeEn: 'Draft full business proposals and structured research.'
    },
    {
      levelNumber: 3,
      badgeUrdu: 'لیول ۳: ایڈوانسڈ ورک فلو (Advanced)',
      badgeEn: 'Level 3: Advanced',
      titleUrdu: 'AI سے کاموں کی خود کاری اور آمدنی کے منصوبے',
      titleEn: 'Workflow Automation & Earning',
      targetAudienceUrdu: 'جو AI کے ذریعے حقیقی فری لانسنگ اور کاروباری سروسز دینا چاہے۔',
      targetAudienceEn: 'Professionals monetizing AI workflows.',
      timeRequiredUrdu: '۷ دن (روزانہ ۴۵ منٹ)',
      timeRequiredEn: '7 days (45 mins/day)',
      keyOutcomeUrdu: 'مکمل کسٹمر سپورٹ سسٹم، ڈیٹا ریسرچ اور کنٹینٹ سٹریٹجی تیار کرنا۔',
      keyOutcomeEn: 'Automate content research, customer replies, and client deliverables.'
    }
  ],
  
  lessons: [
    {
      id: 'ai-les-1',
      lessonNumber: 1,
      level: 1,
      levelTitleUrdu: 'لیول ۱: ابتدائی',
      levelTitleEn: 'Level 1: Beginner',
      titleUrdu: 'AI کیا ہے اور یہ کیسے کام کرتا ہے؟',
      titleEn: 'What is AI and How Large Language Models Work',
      estimatedMinutes: 8,
      conceptSummaryUrdu: 'AI ایک ایسا ذہین ڈیجیٹل معاون ہے جو دنیا بھر کی کروڑوں کتابوں اور معلومات کو پڑھ کر آپ کے سوال کا فوری اور بامعنی جواب دیتا ہے۔',
      conceptSummaryEn: 'AI is a responsive assistant trained on vast knowledge to assist and solve tasks.',
      technicalTerm: {
        englishTerm: 'Large Language Model (LLM)',
        urduTerm: 'زبان پر مبنی ذہین ماڈل',
        simpleExplanationUrdu: 'ایک ایسا کمپیوٹر پروگرام جو انسانوں کی طرح اردو یا انگلش زبان کو سمجھ کر فطری جواب دیتا ہے۔',
        simpleExplanationEn: 'A deep learning model capable of understanding and generating human text.'
      },
      explanationUrdu: 'AI کوئی جادو نہیں ہے بلکہ یہ الفاظ اور منطق کی بنیاد پر کام کرتا ہے۔ آپ اس سے اردو میں بھی بات کر سکتے ہیں اور انگلش میں بھی۔ جتنا صاف اور واضح سوال آپ پوچھیں گے، AI اتنا ہی بہترین اور کارآمد جواب دے گا۔',
      explanationEn: 'The more specific and clear your input is, the better the AI output.',
      realLifeExampleUrdu: 'اگر آپ AI سے کہیں: "مجھے گردوں کی پتھری کے مریض کے لیے ایک دن کا سادہ خوراک چارٹ اردو میں بنا دو"، تو وہ سیکنڈوں میں صبح سے رات تک کا پرہیز اور غذائیں لکھ دے گا۔',
      realLifeExampleEn: 'Asking AI for a specific daily meal chart produces a structured, actionable schedule instantly.',
      handsOnExerciseUrdu: {
        instructions: 'AI سے اپنا پہلا تعارفی سوال اردو میں پوچھیں۔',
        steps: [
          'Seekho میں AI مددگار یا ChatGPT اوپن کریں۔',
          'لکھیں: "السلام علیکم! مجھے روزانہ صبح جلدی اٹھنے کے ۳ آسان طریقے بتائیں۔"',
          'جواب کا جائزہ لیں اور دیکھیں کہ وہ کتنا واضح ہے۔'
        ],
        checklist: [
          'کیا آپ نے سوال اردو میں بھیجا؟',
          'کیا جواب فورا موصول ہوا؟'
        ],
        tips: 'AI سے بالکل ایسے بات کریں جیسے آپ کسی بااخلاق اور ماہر استاد سے بات کر رہے ہوں۔'
      },
      handsOnExerciseEn: {
        instructions: 'Ask your first structured Urdu/English query.',
        steps: [
          'Open AI Assistant.',
          'Type: "Give me 3 practical habits to wake up early consistently."',
          'Read and evaluate the response.'
        ],
        checklist: ['Sent query', 'Received clear response'],
        tips: 'Communicate with clear intent.'
      },
      practicalTask: {
        titleUrdu: 'AI سے پہلا مسئلہ حل کروائیں',
        titleEn: 'Solve Your First Everyday Problem with AI',
        descriptionUrdu: 'اپنی روزمرہ زندگی کا ایک حقیقی سوال AI سے پوچھ کر اس کا جواب حاصل کریں۔',
        descriptionEn: 'Submit an everyday challenge query to AI.',
        actionPromptUrdu: 'میں نے AI سے روزمرہ زندگی کا سوال پوچھ کر اس کا عملی جواب حاصل کر لیا ہے۔',
        actionPromptEn: 'I queried AI and verified its practical response.',
        verificationCriteriaUrdu: [
          'سوال واضح اور بامقصد تھا',
          'جواب سے تسلی ہوئی'
        ],
        verificationCriteriaEn: ['Clear prompt', 'Helpful output']
      },
      miniQuiz: [
        {
          id: 'ai-q1',
          questionUrdu: 'AI سے بہترین جواب حاصل کرنے کا سنہری اصول کیا ہے؟',
          questionEn: 'What is the golden rule to get the best answer from AI?',
          optionsUrdu: ['واضح، مخصوص اور مکمل ہدایات دینا', 'صرف ایک لفظ لکھ کر چھوڑ دینا', 'مبہم اور الٹی سیدھی بات لکھنا', 'کوئی سوال نہ پوچھنا'],
          optionsEn: ['Providing clear, specific, and structured instructions', 'Writing just one vague word', 'Using confusing words', 'Not asking anything'],
          correctOptionIndex: 0,
          explanationUrdu: 'جتنی تفصیلی اور واضح ہدایت (Prompt) ہوگی، AI کا جواب اتنا ہی معیاری آئے گا۔',
          explanationEn: 'Specific context yields targeted, high-quality answers.'
        }
      ],
      xpReward: 25
    },
    {
      id: 'ai-les-2',
      lessonNumber: 2,
      level: 2,
      levelTitleUrdu: 'لیول ۲: پرامپٹ مہارت',
      levelTitleEn: 'Level 2: Intermediate',
      titleUrdu: 'پرامپٹ انجینئرنگ کا ۳ سطحی فارمولا (Role + Task + Context)',
      titleEn: 'The 3-Part Prompt Formula: Role + Task + Context',
      estimatedMinutes: 10,
      conceptSummaryUrdu: 'AI کو عام بات کہنے کے بجائے ۳ چیزیں بتائیں: (۱) تم کون ہو (Role)، (۲) کیا کرنا ہے (Task)، (۳) کس فارمیٹ میں چاہیے (Format)۔',
      conceptSummaryEn: 'Supercharge AI prompts with: Persona/Role + Exact Task + Required Format.',
      technicalTerm: {
        englishTerm: 'Prompt Engineering & Persona Framing',
        urduTerm: 'پرامپٹ انجینئرنگ اور کردار کا تعین',
        simpleExplanationUrdu: 'AI کو ایک ماہر استاد یا بزنس مین کا کردار سونپنا تاکہ وہ عام انسان کے بجائے پروفیشنل انداز میں جواب دے۔',
        simpleExplanationEn: 'Instructing AI to adopt a specific expert persona for higher quality output.'
      },
      explanationUrdu: '❌ خراب پرامپٹ: "ایک ای میل لکھ دو۔"\n✅ بہترین پرامپٹ: "تم ایک تجربہ کار مینیجر ہو۔ میرے لیے دفتر کے باس کو ایک چھٹی کی بااخلاق ای میل لکھو کیونکہ میری والدہ کی طبیعت ناساز ہے۔ انداز سنجیدہ ہو اور صرف ۴ لائنوں پر مشتمل ہو۔"',
      explanationEn: 'Vague prompts generate bland results. Giving role and length limits ensures perfection.',
      realLifeExampleUrdu: 'جب آپ AI کو کہیں: "تم ایک کپڑے کی دکان کے کسٹمر سروس مینیجر ہو، ایک ناراض گاہک کو معذرت اور حل کا پیغام لکھو"، تو وہ انتہائی شائستہ اور گاہک کو راضی کرنے والا میسج تیار کر دے گا۔',
      realLifeExampleEn: 'Assigning a customer service persona drafts empathetic resolution messages for unhappy buyers.',
      handsOnExerciseUrdu: {
        instructions: 'فارمولا کے تحت ایک پروفیشنل پرامپٹ لکھ کر ٹیسٹ کریں۔',
        steps: [
          'کردار چنیں: "تم ایک ماہر سوشل میڈیا ایڈوائزر ہو۔"',
          'کام بتائیں: "میری شہد بیچنے والی چھوٹی دکان کے لیے ۳ فیس بک پوسٹ آئیڈیاز دو۔"',
          'فارمیٹ بتائیں: "ہر آئیڈیا میں ایک پرکشش ہیڈنگ اور ایک کال ٹو ایکشن شامل ہو۔"'
        ],
        checklist: [
          'کیا کردار طے کیا گیا؟',
          'کیا نتیجہ ۳ پوائنٹس میں ملا؟'
        ],
        tips: 'ہمیشہ آؤٹ پٹ فارمیٹ (جیسے بلٹ پوائنٹس یا ٹیبل) کا ذکر کریں۔'
      },
      handsOnExerciseEn: {
        instructions: 'Test a 3-part structured prompt.',
        steps: [
          'Define Role: Expert social strategist.',
          'Define Task: 3 Facebook post ideas for pure honey shop.',
          'Define Format: Headline + Call-to-action.'
        ],
        checklist: ['Role assigned', 'Format strictly followed'],
        tips: 'Always specify desired format (bullets, table, paragraph).'
      },
      practicalTask: {
        titleUrdu: '۳ حصوں والا پرامپٹ تیار کر کے ٹیسٹ کریں',
        titleEn: 'Execute a 3-Part Formula Prompt',
        descriptionUrdu: 'کسی دکان، اسکول یا کام کے لیے مکمل پرامپٹ چلا کر نتیجہ حاصل کریں۔',
        descriptionEn: 'Submit structured prompt and verify output format.',
        actionPromptUrdu: 'میں نے کردار، کام اور فارمیٹ کے ساتھ پرامپٹ لکھ کر بہترین نتیجہ حاصل کر لیا ہے۔',
        actionPromptEn: 'I ran a structured 3-part prompt and received accurate output.',
        verificationCriteriaUrdu: [
          'پرامپٹ میں رول اور فارمیٹ واضح ہے',
          'نتیجہ قابلِ استعمال ہے'
        ],
        verificationCriteriaEn: ['Role and format included', 'Output is actionable']
      },
      miniQuiz: [
        {
          id: 'ai-q2',
          questionUrdu: 'پرامپٹ میں AI کو "کردار" (Role) دینے کا کیا فائدہ ہوتا ہے؟',
          questionEn: 'What is the benefit of assigning a Role to AI in your prompt?',
          optionsUrdu: ['AI اس شعبے کے ماہر کی طرح گہرا اور معیاری جواب دیتا ہے', 'AI کی رفتار سست ہو جاتی ہے', 'کوئی فائدہ نہیں ہوتا', 'AI کام کرنے سے انکار کر دیتا ہے'],
          optionsEn: ['AI responds with field-specific depth and professional vocabulary', 'It slows down AI', 'No difference', 'AI refuses to work'],
          correctOptionIndex: 0,
          explanationUrdu: 'کردار سونپنے سے AI کا فوکس اس فیلڈ کی اصطلاحات اور بہترین روایات پر آ جاتا ہے۔',
          explanationEn: 'Role conditioning narrows AI focus to specialized best practices.'
        }
      ],
      xpReward: 35
    },
    {
      id: 'ai-les-3',
      level: 3,
      lessonNumber: 3,
      levelTitleUrdu: 'لیول ۳: ایڈوانسڈ ورک فلو',
      levelTitleEn: 'Level 3: Advanced',
      titleUrdu: 'AI سے حقیقی کام اور کسٹمر سپورٹ آٹومیشن',
      titleEn: 'Customer Support Templates & Workflow Monetization',
      estimatedMinutes: 12,
      conceptSummaryUrdu: 'دکان اور کاروبار کے عام کسٹمر سوالات (قیمت، ڈیلیوری، شکایات) کے ۱۰ بہترین ریڈی میڈ جوابات AI سے تیار کر کے محفوظ کریں۔',
      conceptSummaryEn: 'Automate WhatsApp FAQs, order confirmations, and customer complaint scripts using AI.',
      technicalTerm: {
        englishTerm: 'FAQ Automation & Customer Response Scripts',
        urduTerm: 'اکثر پوچھے جانے والے سوالات کا خودکار سکرپٹ',
        simpleExplanationUrdu: 'گاہکوں کے بار بار آنے والے پیغامات کے شائستہ اور تفصیلی جوابات کا تیار مجموعہ۔',
        simpleExplanationEn: 'Pre-crafted, professional response scripts for customer inquiries.'
      },
      explanationUrdu: 'ہر کاروباری شخص روزانہ ایک جیسے میسجز ("قیمت کیا ہے؟"، "کتنے دن میں ملے گا؟") کے جواب دے کر تھک جاتا ہے۔ AI کی مدد سے آپ تمام صورتحال کے لیے بااخلاق، شائستہ اور کسٹمر کو قائل کرنے والے ۱۰ ٹیمپلیٹس تیار کر سکتے ہیں جنہیں واٹس ایپ بزنس کے Quick Replies میں سیو کیا جا سکتا ہے۔',
      explanationEn: 'Save hours of repetitive typing by generating polite WhatsApp Quick Replies with AI.',
      realLifeExampleUrdu: 'ایک جوتوں کے آن لائن سٹور کے لیے سائز بدلنے کی پالیسی کا ایسا شائستہ جواب تیار کرنا جس سے گاہک ناراض ہوئے بغیر مطمئن ہو جائے۔',
      realLifeExampleEn: 'Drafting an empathetic shoe return/exchange policy script for WhatsApp buyers.',
      handsOnExerciseUrdu: {
        instructions: 'کسی کاروبار کے لیے ۵ واٹس ایپ کوئیک ریپلائی ٹیمپلیٹس بنائیں۔',
        steps: [
          'AI سے کہیں: "ایک آن لائن دکان کے لیے ۵ واٹس ایپ کوئیک ریپلائیز بناؤ۔"',
          '۱. خوش آمدید، ۲. قیمت و تفصیل، ۳. آرڈر کنفرمیشن، ۴. پارسل ٹریکنگ، ۵. فیڈ بیک'
        ],
        checklist: [
          'کیا پانچوں میسجز شائستہ ہیں؟',
          'کیا ان میں ایموجیز اور واضح معلومات ہیں؟'
        ],
        tips: 'اردو میں "محترم گاہک" اور "جزاک اللہ" کا استعمال اعتماد بڑھاتا ہے۔'
      },
      handsOnExerciseEn: {
        instructions: 'Generate 5 WhatsApp customer response templates.',
        steps: [
          'Instruct AI to craft 5 polite e-commerce reply templates.',
          'Welcome, pricing, order confirm, tracking, feedback.'
        ],
        checklist: ['5 polite scripts', 'Formatted cleanly'],
        tips: 'Use polite conversational greetings.'
      },
      practicalTask: {
        titleUrdu: 'کسٹمر سپورٹ کٹ تیار کریں',
        titleEn: 'Create Customer Support Script Kit',
        descriptionUrdu: 'ایک کاروبار کے لیے ۵ شائستہ جوابی پیغامات تیار کر کے تصدیق کریں۔',
        descriptionEn: 'Build 5 customer response scripts using AI.',
        actionPromptUrdu: 'میں نے AI سے ۵ معیاری اور شائستہ کسٹمر سروس ٹیمپلیٹس تیار کر لیے ہیں۔',
        actionPromptEn: 'I drafted 5 high-conversion customer reply scripts with AI.',
        verificationCriteriaUrdu: [
          'تمام ضروری مراحل کور ہیں',
          'لہجہ بااخلاق اور پیشہ ورانہ ہے'
        ],
        verificationCriteriaEn: ['All 5 situations covered', 'Tone is polite and helpful']
      },
      miniQuiz: [
        {
          id: 'ai-q3',
          questionUrdu: 'واٹس ایپ بزنس میں AI سے بنے فوری جوابات (Quick Replies) کا سب سے بڑا فائدہ کیا ہے؟',
          questionEn: 'What is the main benefit of saving AI-crafted Quick Replies in WhatsApp Business?',
          optionsUrdu: ['گاہک کو بغیر تاخیر کے فوری اور بااخلاق جواب ملتا ہے جس سے سیلز بڑھتی ہیں', 'موبائل کی بیٹری زیادہ خرچ ہوتی ہے', 'گاہک میسج پڑھنا چھوڑ دیتا ہے', 'کوئی فائدہ نہیں ہوتا'],
          optionsEn: ['Customers receive instant, polite responses leading to faster sales conversions', 'Drains battery', 'Customer ignores it', 'No benefit'],
          correctOptionIndex: 0,
          explanationUrdu: 'فوری اور شائستہ جواب دینے والے کاروبار پر گاہکوں کا اعتماد اور سیلز دونوں بڑھتے ہیں۔',
          explanationEn: 'Fast and empathetic responses build trust and maximize sales conversion.'
        }
      ],
      xpReward: 50
    }
  ],
  
  capstoneProject: {
    id: 'ai-capstone-project',
    titleUrdu: 'حقیقی پروجیکٹ: ایک کاروبار کے لیے مکمل AI کنٹینٹ و کسٹمر سسٹم',
    titleEn: 'Capstone Project: Complete AI Content & Customer System for a Business',
    badgeUrdu: 'AI ورک فلو سند یافتہ',
    badgeEn: 'AI Workflow Certified',
    descriptionUrdu: 'کسی حقیقی یا فرضی کاروبار کے لیے AI کا استعمال کرتے ہوئے ۳ مضامین، ۱۰ کسٹمر ریپلائیز اور سوشل میڈیا کا ۳۰ دن کا پلان تیار کریں۔',
    descriptionEn: 'Build a 30-day social calendar, 10 customer scripts, and 3 promotional blogs for a business using AI.',
    realWorldClientScenarioUrdu: 'ایک مقامی نامیاتی شہد اور زیتون بیچنے والے برانڈ "قدرت پیور" کو اپنے فیس بک اور واٹس ایپ کے لیے مکمل کنٹینٹ پلان اور سیلز سکرپٹ کی ضرورت ہے۔',
    realWorldClientScenarioEn: 'A natural honey and organic store needs a complete monthly social calendar and WhatsApp sales conversion playbook.',
    deliverablesUrdu: [
      '۱. ۳۰ دن کا سوشل میڈیا پوسٹ پلان (30-Day Content Calendar)',
      '۲. ۱۰ واٹس ایپ سیلز اور کسٹمر سپورٹ ٹیمپلیٹس (WhatsApp Scripts)',
      '۳. ۲ پروموشنل اردو مضامین برائے فوائد (Health Benefit Articles)'
    ],
    deliverablesEn: [
      '1. 30-Day Social Media Content Calendar',
      '2. 10 WhatsApp Customer Support & Sales Scripts',
      '3. 2 Educational Urdu Articles on Health Benefits'
    ],
    stepByStepGuideUrdu: [
      'مرحلہ ۱: AI کو رول دیں: "تم پاکستان کے نامیاتی فوڈ برانڈ کے سینئر مارکیٹنگ کنسلٹنٹ ہو۔"',
      'مرحلہ ۲: پہلے پرامپٹ سے ۳۰ دن کا منظم ٹیبل بنوائیں (ہفتہ ۱ تا ہفتہ ۴)۔',
      'مرحلہ ۳: دوسرے پرامپٹ سے قیمت، ہوم ڈیلیوری، اور خالص ہونے کی گارنٹی کے ۱۰ پیغامات لکھوائیں۔',
      'مرحلہ ۴: شہد کے قرآنی و سائنسی فوائد پر ۲ خوبصورت معلوماتی پوسٹس تیار کروائیں۔',
      'مرحلہ ۵: تمام مواد کو منظم کر کے پروجیکٹ مکمل کریں۔'
    ],
    stepByStepGuideEn: [
      'Step 1: Frame AI persona as Organic Brand Marketing Consultant.',
      'Step 2: Generate 30-day weekly content matrix.',
      'Step 3: Draft 10 WhatsApp conversion scripts.',
      'Step 4: Generate 2 high-value educational posts on natural benefits.',
      'Step 5: Review, polish, and submit project package.'
    ],
    rubricChecklistUrdu: [
      'کیا تمام مواد میں خالص اور بااخلاق زبان استعمال ہوئی ہے؟',
      'کیا ۳۰ دن کے پلان میں تنوع (معلومات، آفر، تعارف) موجود ہے؟',
      'کیا واٹس ایپ سکرپٹس گاہک کے شکوک رفع کرتے ہیں؟'
    ],
    rubricChecklistEn: [
      'Ethical and authentic tone across all outputs',
      'Balanced mix of education, engagement, and offers',
      'Effective objection handling in scripts'
    ],
    estimatedHours: 2,
    xpReward: 100
  },
  
  aiGuidePrompts: [
    {
      id: 'ai-p1',
      titleUrdu: 'مجھے یہ سمجھ نہیں آیا',
      titleEn: 'Explain More Simply',
      promptUrdu: 'السلام علیکم! مجھے پرامپٹ لکھنے کا یہ طریقہ اور بھی آسان الفاظ اور مثال کے ساتھ سمجھا دیں۔',
      promptEn: 'Please explain this prompt writing principle with a simpler daily example.'
    },
    {
      id: 'ai-p2',
      titleUrdu: 'میرے کام کے لیے پرامپٹ بنا دیں',
      titleEn: 'Craft a Prompt for My Work',
      promptUrdu: 'میں اس وقت یہ کام کرنا چاہتا ہوں۔ برائے مہربانی مجھے ایک طاقتور ۳ سطحی پرامپٹ لکھ کر دیں جسے میں کاپی پیسٹ کر سکوں۔',
      promptEn: 'Generate an optimized 3-part prompt ready for me to copy and paste for my specific task.'
    }
  ],
  
  nextRecommendedSkills: [
    {
      skillId: 'cat-3-canva-graphic-design',
      titleUrdu: 'Canva اور Graphic Design',
      titleEn: 'Canva Graphic Design',
      reasonUrdu: 'AI سے لکھوائی گئی تحریر کو کینوا کے پوسٹرز میں ڈال کر مکمل ڈیزائنر بنیں۔',
      reasonEn: 'Combine AI copywriting with Canva visual posters for complete digital marketing.'
    },
    {
      skillId: 'cat-6-social-media',
      titleUrdu: 'Social Media Management',
      titleEn: 'Social Media Management',
      reasonUrdu: 'AI کی مدد سے پوسٹس کو شیڈول اور منظم کرنا سیکھیں۔',
      reasonEn: 'Use AI to power full monthly social media management contracts.'
    }
  ]
};

// ------------------------------------------------------------------------------------------------
// 3. DYNAMIC JOURNEY GENERATOR & STORE (Ensures all 50 skills have full deep journeys)
// ------------------------------------------------------------------------------------------------
export function getSkillLearningJourney(skill: SkillUniverseItem): SkillLearningPathway {
  // If specific master journey exists, return it
  if (skill.id === 'cat-3-canva-graphic-design' || skill.slug === 'canva-graphic-design') {
    return CANVA_LEARNING_JOURNEY;
  }
  if (skill.id === 'cat-2-ai-chatgpt' || skill.slug === 'ai-and-chatgpt') {
    return AI_CHATGPT_LEARNING_JOURNEY;
  }

  // Dynamic High-Quality Generator tailored to any SkillUniverseItem
  const levelsCount = skill.levels?.length || 3;
  const generatedLevels = (skill.levels && skill.levels.length > 0)
    ? skill.levels.map((lvl) => ({
        levelNumber: lvl.level as 1 | 2 | 3 | 4 | 5,
        badgeUrdu: lvl.levelBadgeUrdu,
        badgeEn: lvl.levelBadgeEn,
        titleUrdu: lvl.titleUrdu,
        titleEn: lvl.titleEn,
        targetAudienceUrdu: `تمام سیکھنے والے جو ${skill.titleUrdu} میں مرحلہ وار آگے بڑھنا چاہتے ہیں۔`,
        targetAudienceEn: `Learners advancing in ${skill.titleEn}.`,
        timeRequiredUrdu: lvl.estimatedDurationUrdu,
        timeRequiredEn: lvl.estimatedDurationEn,
        keyOutcomeUrdu: lvl.practicalMilestoneUrdu,
        keyOutcomeEn: lvl.practicalMilestoneEn,
      }))
    : [
        {
          levelNumber: 1 as const,
          badgeUrdu: 'لیول ۱: بنیادی (Beginner)',
          badgeEn: 'Level 1: Beginner',
          titleUrdu: `${skill.titleUrdu} کا بنیادی فہم و اوزار`,
          titleEn: `Fundamentals of ${skill.titleEn}`,
          targetAudienceUrdu: 'بالکل نئے سیکھنے والے',
          targetAudienceEn: 'Complete beginners',
          timeRequiredUrdu: '۳ سے ۵ دن',
          timeRequiredEn: '3-5 days',
          keyOutcomeUrdu: 'بنیادی تصورات اور پہلا سادہ ٹاسک مکمل کرنا۔',
          keyOutcomeEn: 'Understand core logic and complete first task.'
        },
        {
          levelNumber: 2 as const,
          badgeUrdu: 'لیول ۲: درمیانی (Intermediate)',
          badgeEn: 'Level 2: Intermediate',
          titleUrdu: 'عملی مہارت اور مسائل کا خود حل',
          titleEn: 'Hands-on Execution & Problem Solving',
          targetAudienceUrdu: 'بنیادی چیزیں جاننے والے',
          targetAudienceEn: 'Intermediate learners',
          timeRequiredUrdu: '۷ سے ۱۰ دن',
          timeRequiredEn: '7-10 days',
          keyOutcomeUrdu: 'درمیانے درجے کے مسائل اور ٹاسکس حل کرنا۔',
          keyOutcomeEn: 'Solve realistic problems independently.'
        },
        {
          levelNumber: 3 as const,
          badgeUrdu: 'لیول ۳: ایڈوانسڈ و روزگار (Advanced)',
          badgeEn: 'Level 3: Advanced',
          titleUrdu: 'کلائنٹ کوالٹی، پورٹ فولیو اور حلال کمائی',
          titleEn: 'Market Quality & Income Readiness',
          targetAudienceUrdu: 'جو روزگار اور فری لانسنگ چاہیں',
          targetAudienceEn: 'Ready for income and clients',
          timeRequiredUrdu: '۱۵ دن',
          timeRequiredEn: '15 days',
          keyOutcomeUrdu: 'مکمل پورٹ فولیو اور پہلی اجرت حاصل کرنا۔',
          keyOutcomeEn: 'Complete market-ready project and deliver value.'
        }
      ];

  // Generate 4-5 focused micro lessons
  const generatedLessons: SkillLesson[] = [
    {
      id: `${skill.id}-les-1`,
      lessonNumber: 1,
      level: 1,
      levelTitleUrdu: 'لیول ۱: ابتدائی',
      levelTitleEn: 'Level 1: Beginner',
      titleUrdu: `${skill.titleUrdu} کا پہلا قدم اور ضروری ٹولز`,
      titleEn: `First Steps & Essential Tools for ${skill.titleEn}`,
      estimatedMinutes: 8,
      conceptSummaryUrdu: `${skill.titleUrdu} کا بنیادی مقصد سمجھنا اور اس کے لیے درکار ابتدائی ٹولز تیار کرنا۔`,
      conceptSummaryEn: `Understand core goal of ${skill.titleEn} and set up initial tools.`,
      technicalTerm: {
        englishTerm: `${skill.titleEn} Fundamentals`,
        urduTerm: 'بنیادی اصول و اوزار',
        simpleExplanationUrdu: `اس ہنر کی بنیادی بنیاد اور طریقہ کار۔`,
        simpleExplanationEn: `Core principles and practical foundation of this skill.`
      },
      explanationUrdu: `${skill.whatIsThisUrdu}۔ اس مرحلے پر آپ کا مقصد کسی پیچیدگی میں الجھے بغیر صرف بنیادی ٹولز اور کام کی ترتیب کو سمجھنا ہے۔`,
      explanationEn: `${skill.whatIsThisEn}. Focus on essential setup and simple workflows.`,
      realLifeExampleUrdu: `روزمرہ زندگی میں ${skill.whereIsItUsefulUrdu?.[0] || 'گھریلو اور کاروباری ضروریات'} میں اس کا براہِ راست فائدہ ہوتا ہے۔`,
      realLifeExampleEn: `Directly useful in everyday home and business tasks.`,
      handsOnExerciseUrdu: {
        instructions: `اپنے پاس درکار بنیادی چیزیں چیک کریں: ${skill.requiredResourcesUrdu?.join('، ') || 'موبائل یا بنیادی اوزار'}۔`,
        steps: [
          'پہلا ٹول کھولیں یا ورک سپیس تیار کریں۔',
          'بنیادی سیٹنگز اور آپشنز کا جائزہ لیں۔',
          'ایک سادہ فرضی ٹاسک پریکٹس کریں۔'
        ],
        checklist: ['ٹولز تیار ہیں', 'پہلا تجربہ مکمل ہوا'],
        tips: 'شروع میں غلطی ہونے سے نہ گھبرائیں، غلطی سے ہی سیکھنے کی رفتار بڑھتی ہے۔'
      },
      handsOnExerciseEn: {
        instructions: `Check required resources: ${skill.requiredResourcesEn?.join(', ') || 'Smartphone or tools'}.`,
        steps: ['Open tool', 'Inspect options', 'Perform simple test'],
        checklist: ['Tools ready', 'Initial test done'],
        tips: 'Mistakes are normal in early stages.'
      },
      practicalTask: {
        titleUrdu: 'پہلا بنیادی ٹاسک مکمل کریں',
        titleEn: 'Execute First Practical Step',
        descriptionUrdu: skill.firstPracticalActionUrdu || 'پہلا عملی قدم مکمل کر کے تصدیق کریں۔',
        descriptionEn: skill.firstPracticalActionEn || 'Execute your first hands-on action.',
        actionPromptUrdu: `میں نے ${skill.titleUrdu} کا پہلا بنیادی ٹاسک کامیابی سے سمجھ کر مکمل کر لیا ہے۔`,
        actionPromptEn: `I completed the fundamental task for ${skill.titleEn}.`,
        verificationCriteriaUrdu: ['بنیادی ٹول درست کام کر رہا ہے', 'پہلا نتیجہ حاصل ہو گیا ہے'],
        verificationCriteriaEn: ['Tool working correctly', 'First output produced']
      },
      miniQuiz: [
        {
          id: `${skill.id}-q1`,
          questionUrdu: `${skill.titleUrdu} سیکھتے وقت سب سے پہلا قدم کیا ہونا چاہیے؟`,
          questionEn: `What is the first step when learning ${skill.titleEn}?`,
          optionsUrdu: ['بنیادی ٹولز اور بنیادی منطق کو عملی طور پر سمجھنا', 'بغیر سمجھے مشکل کام شروع کر دینا', 'پہلے دن ہی بڑا رسک لینا', 'کچھ نہ کرنا'],
          optionsEn: ['Understand core tools and foundational logic', 'Jump into complex risks immediately', 'Overcomplicate', 'Do nothing'],
          correctOptionIndex: 0,
          explanationUrdu: 'مضبوط بنیاد اور بنیادی ٹولز کی درست سمجھ ہی آگے کامیابی دلاتی ہے۔',
          explanationEn: 'Solid fundamentals guarantee rapid long-term progress.'
        }
      ],
      xpReward: 25
    },
    {
      id: `${skill.id}-les-2`,
      lessonNumber: 2,
      level: 1,
      levelTitleUrdu: 'لیول ۱: ابتدائی',
      levelTitleEn: 'Level 1: Beginner',
      titleUrdu: 'عام غلطیوں سے بچاؤ اور درست طریقہ کار',
      titleEn: 'Best Practices & Avoiding Common Pitfalls',
      estimatedMinutes: 10,
      conceptSummaryUrdu: 'نئے سیکھنے والے اکثر جن غلطیوں میں وقت اور پیسے ضائع کرتے ہیں، ان سے بچنے کے سنہری اصول۔',
      conceptSummaryEn: 'Proven best practices to avoid time and money losses.',
      technicalTerm: {
        englishTerm: 'Quality Control & Best Practices',
        urduTerm: 'معیار کا کنٹرول اور احتیاطی تدابیر',
        simpleExplanationUrdu: 'کام کو پہلی ہی بار میں صاف اور پائیدار بنانے کے اصول۔',
        simpleExplanationEn: 'Principles ensuring durable, high-standard execution.'
      },
      explanationUrdu: `اس ہنر میں کامیابی کے لیے جلد بازی کے بجائے صفائی، پیمائش اور دیانت داری ضروری ہے۔ ${skill.taglineUrdu}۔`,
      explanationEn: `Precision, clean execution, and integrity matter most in ${skill.titleEn}.`,
      realLifeExampleUrdu: 'اگر ایک کاریگر بغیر ناپے کام کاٹے تو مال ضائع ہوتا ہے؛ جبکہ ناپ کر کام کرنے والا وقت اور مال دونوں بچاتا ہے۔',
      realLifeExampleEn: 'Measuring twice and cutting once saves both time and material cost.',
      handsOnExerciseUrdu: {
        instructions: 'ایک احتیاطی چیک لسٹ بنائیں اور اپنے اگلے ٹاسک پر لاگو کریں۔',
        steps: [
          '۳ اہم حفاظتی یا کوالٹی نکات نوٹ کریں',
          'ان نکات کو سامنے رکھ کر مشق کریں',
          'نتیجے کا معائنہ کریں'
        ],
        checklist: ['چیک لسٹ بن گئی', 'کوالٹی چیک مکمل ہوا'],
        tips: 'معیار پر کبھی سمجھوتہ نہ کریں۔'
      },
      handsOnExerciseEn: {
        instructions: 'Create a quality checklist and apply it.',
        steps: ['Note 3 safety/quality rules', 'Apply to test task', 'Inspect outcome'],
        checklist: ['Checklist created', 'Quality verified'],
        tips: 'Never compromise on durability.'
      },
      practicalTask: {
        titleUrdu: 'کوالٹی چیک لسٹ کی مشق',
        titleEn: 'Apply Quality Best Practices',
        descriptionUrdu: 'اپنے کام کی خود جانچ کر کے نقائص درست کریں۔',
        descriptionEn: 'Perform self-audit and correct any imperfections.',
        actionPromptUrdu: 'میں نے اپنے کام کا کوالٹی آڈٹ مکمل کر لیا ہے اور نتیجہ معیار کے مطابق ہے۔',
        actionPromptEn: 'I applied quality best practices and validated results.',
        verificationCriteriaUrdu: ['غلطیوں کی نشاندہی اور درستگی', 'معیار میں بہتری'],
        verificationCriteriaEn: ['Flaws identified and corrected', 'Standard raised']
      },
      miniQuiz: [
        {
          id: `${skill.id}-q2`,
          questionUrdu: 'کسی بھی ہنر میں کام کی قدر (Value) کس چیز سے بڑھتی ہے؟',
          questionEn: 'What enhances the market value of any skilled work?',
          optionsUrdu: ['صفائی، مضبوطی اور وعدے کی پابندی سے', 'ناقص میٹریل استعمال کرنے سے', 'گاہک کو دیر کروانے سے', 'غیر معیاری کام سے'],
          optionsEn: ['Clean finish, durability, and honoring deadlines', 'Using substandard materials', 'Unnecessary delays', 'Careless finishing'],
          correctOptionIndex: 0,
          explanationUrdu: 'دیانت، صفائی اور وقت کی پابندی ہی گاہک کا مستقل اعتماد جیتتی ہے۔',
          explanationEn: 'Integrity, clean execution, and punctuality build repeat client trust.'
        }
      ],
      xpReward: 30
    },
    {
      id: `${skill.id}-les-3`,
      lessonNumber: 3,
      level: 2,
      levelTitleUrdu: 'لیول ۲: درمیانی',
      levelTitleEn: 'Level 2: Intermediate',
      titleUrdu: 'حقیقی مسئلے کا خود حل اور مشق',
      titleEn: 'Independent Problem Solving & Workflow',
      estimatedMinutes: 12,
      conceptSummaryUrdu: 'کسی کی مدد کے بغیر کسی مسئلے کو خود حل کرنا اور اختتامی پروڈکٹ تیار کرنا۔',
      conceptSummaryEn: 'Solving real-world tasks independently from start to finish.',
      technicalTerm: {
        englishTerm: 'Troubleshooting & Execution',
        urduTerm: 'مسائل کی تشخیص اور مکمل حل',
        simpleExplanationUrdu: 'خرابی کو تلاش کر کے مرحلہ وار درست کرنے کی صلاحیت۔',
        simpleExplanationEn: 'The ability to diagnose root causes and apply fixes.'
      },
      explanationUrdu: `جب آپ اس مرحلے پر پہنچتے ہیں تو آپ کو چھوٹے موٹے مسائل پر پریشان ہونے کے بجائے ان کی وجوہات تلاش کرنی چاہئیں۔ ${skill.whatIsThisUrdu}`,
      explanationEn: `Diagnose issues calmly and follow a structured troubleshooting process.`,
      realLifeExampleUrdu: `مارکیٹ میں کلائنٹس ایسے کاریگر کو ترجیح دیتے ہیں جو مسئلہ سن کر خود مناسب اور سستا حل نکال لے۔`,
      realLifeExampleEn: `Clients value professionals who diagnose issues and suggest cost-effective solutions.`,
      handsOnExerciseUrdu: {
        instructions: 'ایک درمیانے درجے کا پروجیکٹ شروع کریں اور ختم کریں۔',
        steps: [
          'مسئلے یا ضرورت کی تعریف کریں',
          'حل کے لیے ۲ متبادل راستے سوچیں',
          'بہترین راستے پر عمل کر کے نتیجہ حاصل کریں'
        ],
        checklist: ['مسئلہ واضح ہوا', 'حل مکمل ہوا'],
        tips: 'ہمیشہ گاہک کے بجٹ اور ضرورت کا خیال رکھیں۔'
      },
      handsOnExerciseEn: {
        instructions: 'Execute an end-to-end task from diagnosis to completion.',
        steps: ['Define need', 'Evaluate 2 solutions', 'Execute best approach'],
        checklist: ['Diagnosed accurately', 'Executed successfully'],
        tips: 'Respect budget constraints.'
      },
      practicalTask: {
        titleUrdu: 'حقیقی ٹاسک کی تکمیل',
        titleEn: 'Complete Independent Project Milestone',
        descriptionUrdu: 'ایک مکمل ٹاسک اپنے ہاتھ سے سرانجام دے کر نتائج نوٹ کریں۔',
        descriptionEn: 'Execute a full task independently and document outcome.',
        actionPromptUrdu: `میں نے ${skill.titleUrdu} کا ایک مکمل پریکٹیکل مرحلہ بغیر رکاوٹ مکمل کر لیا ہے۔`,
        actionPromptEn: `I executed a complete intermediate milestone for ${skill.titleEn}.`,
        verificationCriteriaUrdu: ['ٹاسک خود مکمل کیا گیا ہے', 'کوئی اہم خامی باقی نہیں'],
        verificationCriteriaEn: ['Done independently', 'No critical flaws remaining']
      },
      miniQuiz: [
        {
          id: `${skill.id}-q3`,
          questionUrdu: 'مسئلہ حل کرتے وقت سب سے اہم پہلا قدم کیا ہوتا ہے؟',
          questionEn: 'What is the most critical first step when troubleshooting a problem?',
          optionsUrdu: ['مسئلے کی اصل جڑ (Root Cause) کو تسلی سے سمجھنا', 'بغیر دیکھے سامان بدل دینا', 'گھبرا جانا', 'کام ادھورا چھوڑ دینا'],
          optionsEn: ['Calmly understanding the root cause', 'Replacing parts blindly', 'Panic', 'Quitting midway'],
          correctOptionIndex: 0,
          explanationUrdu: 'جب تک اصل خرابی سمجھ نہ آئے، درست حل ممکن نہیں ہوتا۔',
          explanationEn: 'Accurate diagnosis is the foundation of any lasting fix.'
        }
      ],
      xpReward: 35
    },
    {
      id: `${skill.id}-les-4`,
      lessonNumber: 4,
      level: 3,
      levelTitleUrdu: 'لیول ۳: کلائنٹ و روزگار',
      levelTitleEn: 'Level 3: Advanced',
      titleUrdu: 'حلال آمدنی کے راستے، کلائنٹ تلاش اور پورٹ فولیو',
      titleEn: 'Ethical Earning, Finding Clients & Portfolios',
      estimatedMinutes: 15,
      conceptSummaryUrdu: 'اپنے کام کی بہترین نمائش (Portfolio) بنانا، قیمت کا تعین اور پہلی حلال کمائی کا آغاز۔',
      conceptSummaryEn: 'Creating a clean portfolio, fair pricing, and landing your first client.',
      technicalTerm: {
        englishTerm: 'Portfolio & Client Acquisition',
        urduTerm: 'پورٹ فولیو اور گاہکوں کا حصول',
        simpleExplanationUrdu: 'اپنے بہترین کام کی ۳ سے ۵ تصاویر یا نمونے محفوظ کر کے گاہک کو دکھانا تاکہ وہ مطمئن ہو کر کام دے۔',
        simpleExplanationEn: 'Presenting 3-5 proof-of-work samples to win client trust.'
      },
      explanationUrdu: `آپ کی آمدنی کے راستے: ${skill.freelancePathwayUrdu || skill.jobPathwayUrdu || skill.businessPathwayUrdu}۔ جب بھی کوئی گاہک پوچھے کہ "آپ نے پہلے کیا کام کیا ہے؟" تو آپ کے پاس اپنے ۳ بہترین نمونے موبائل میں موجود ہونے چاہئیں۔`,
      explanationEn: `Income pathways: ${skill.freelancePathwayEn || skill.jobPathwayEn || skill.businessPathwayEn}. Keep 3-5 proof-of-work samples on your phone.`,
      realLifeExampleUrdu: 'جب ایک مستری یا ڈیزائنر اپنے پچھلے ۵ صاف ستھرے کاموں کی تصاویر دکھاتا ہے تو گاہک بغیر بحث کے اسے کام دے دیتا ہے۔',
      realLifeExampleEn: 'Showing a portfolio of 5 completed works builds instant trust without price haggling.',
      handsOnExerciseUrdu: {
        instructions: 'اپنے کام کے ۳ بہترین نمونوں کی تصویر یا فائل محفوظ کریں۔',
        steps: [
          'اپنے ۳ بہترین پروجیکٹس منتخب کریں',
          'ان کے ساتھ ۱ لائن کا مختصر تعارف لکھیں',
          'انہیں موبائل کے الگ البم یا فولڈر میں رکھیں'
        ],
        checklist: ['۳ نمونے تیار ہیں', 'تعارفی میسج تیار ہے'],
        tips: 'سچائی اور دیانت کے ساتھ صرف وہی کام دکھائیں جو آپ نے خود کیا ہو۔'
      },
      handsOnExerciseEn: {
        instructions: 'Collect 3 proof-of-work samples into a dedicated folder.',
        steps: ['Pick 3 best works', 'Write 1-line description for each', 'Organize in mobile album'],
        checklist: ['3 samples ready', 'Intro message drafted'],
        tips: 'Always display authentic work.'
      },
      practicalTask: {
        titleUrdu: 'پورٹ فولیو پیک تیار کریں',
        titleEn: 'Build 3-Sample Portfolio Pack',
        descriptionUrdu: 'اپنے ہنر کی نمائش کے لیے ۳ نمونے تیار کر کے محفوظ کریں۔',
        descriptionEn: 'Assemble 3 portfolio samples ready for clients.',
        actionPromptUrdu: 'میں نے اپنے کام کے ۳ معیاری نمونوں کا پورٹ فولیو تیار کر لیا ہے۔',
        actionPromptEn: 'I assembled a 3-piece portfolio ready for client presentations.',
        verificationCriteriaUrdu: ['۳ اصلی نمونے موجود ہیں', 'قیمت اور رابطے کی تفصیل واضح ہے'],
        verificationCriteriaEn: ['3 authentic samples', 'Clear contact information']
      },
      miniQuiz: [
        {
          id: `${skill.id}-q4`,
          questionUrdu: 'نئے گاہکوں کو متوجہ کرنے کا سب سے مؤثر طریقہ کیا ہے؟',
          questionEn: 'What is the most effective way to win new clients?',
          optionsUrdu: ['اپنے پچھلے بہترین کام کے تصویری یا عملی ثبوت (Proof of Work) دکھانا', 'صرف زبانی دعوے کرنا', 'جھوٹے وعدے کرنا', 'کوئی ثبوت نہ دکھانا'],
          optionsEn: ['Showing authentic proof-of-work samples', 'Only making verbal claims', 'False promises', 'Showing nothing'],
          correctOptionIndex: 0,
          explanationUrdu: 'دیکھنے والا ثبوت دیکھ کر مطمئن ہوتا ہے اور فوری فیصلہ کرتا ہے۔',
          explanationEn: 'Concrete proof-of-work creates immediate trust.'
        }
      ],
      xpReward: 40
    }
  ];

  // Practical Capstone Project
  const capstoneProject: SkillPracticalProject = {
    id: `${skill.id}-capstone`,
    titleUrdu: `حقیقی پروجیکٹ: ${skill.titleUrdu} کا ایک مکمل عملی ماڈل`,
    titleEn: `Capstone Project: End-to-End Practical Deliverable in ${skill.titleEn}`,
    badgeUrdu: 'حقیقی پروجیکٹ سند',
    badgeEn: 'Capstone Certified',
    descriptionUrdu: `ایک حقیقی ضرورت یا کلائنٹ کا انتخاب کر کے ${skill.titleUrdu} کا مکمل مرحلہ وار حل تیار کریں اور اس کی نمائش کریں۔`,
    descriptionEn: `Execute a complete, real-world project in ${skill.titleEn} addressing a practical client need.`,
    realWorldClientScenarioUrdu: `ایک مقامی کلائنٹ یا گھریلو ضرورت کے لیے ${skill.titleUrdu} کی ایک معیاری سروس یا پروڈکٹ تیار کرنا۔`,
    realWorldClientScenarioEn: `Delivering a standard, client-grade outcome in ${skill.titleEn} for a local requirement.`,
    deliverablesUrdu: [
      '۱. کام کا تفصیلی منصوبہ اور وقت کا تخمینہ',
      '۲. مکمل تیار شدہ پروجیکٹ / سروس کا نتیجہ',
      '۳. خود احتسابی چیک لسٹ اور کلائنٹ فیڈ بیک نوٹ'
    ],
    deliverablesEn: [
      '1. Project timeline & requirements plan',
      '2. Completed practical deliverable / asset',
      '3. Quality checklist and client handover note'
    ],
    stepByStepGuideUrdu: [
      'مرحلہ ۱: ہدف اور ضرورت کا تعین کریں۔',
      'مرحلہ ۲: ضروری ٹولز اور سامان جمع کریں۔',
      'مرحلہ ۳: مرحلہ وار کام مکمل کریں۔',
      'مرحلہ ۴: کوالٹی چیک اور فنشنگ دیں۔',
      'مرحلہ ۵: نتائج کو محفوظ کریں اور پروجیکٹ سبمٹ کریں۔'
    ],
    stepByStepGuideEn: [
      'Step 1: Define the target deliverable.',
      'Step 2: Assemble tools and materials.',
      'Step 3: Execute step-by-step.',
      'Step 4: Quality finish and review.',
      'Step 5: Document and submit.'
    ],
    rubricChecklistUrdu: [
      'کیا کام پائیدار اور معیاری ہے؟',
      'کیا تمام ضروری تقاضے پورے کیے گئے ہیں؟',
      'کیا وقت اور بجٹ کا خیال رکھا گیا ہے؟'
    ],
    rubricChecklistEn: [
      'High standard of durability/finish',
      'All requirements fulfilled',
      'Delivered within budget and timeline'
    ],
    estimatedHours: 2,
    xpReward: 100
  };

  // Earning Pathways
  const earningPathwaysUrdu = [
    {
      type: 'freelancing' as const,
      typeTitle: 'فری لانسنگ / آن لائن',
      title: 'آن لائن سروسز و آرڈرز',
      description: skill.freelancePathwayUrdu || 'آن لائن کلائنٹس کو سروسز فراہم کریں۔',
      expectedIncomeUrdu: '۲۰،۰۰۰ تا ۵۰،۰۰۰ روپے ماہانہ',
      icon: 'Globe'
    },
    {
      type: 'home_service' as const,
      typeTitle: 'مقامی یا گھریلو سروسز',
      title: 'محلے اور قریبی مارکیٹ میں کام',
      description: skill.localPathwayUrdu || skill.homeWorkPathwayUrdu || 'مقامی دکانوں اور گھروں کے لیے کام کریں۔',
      expectedIncomeUrdu: '۱۵،۰۰۰ تا ۴۰،۰۰۰ روپے ماہانہ',
      icon: 'Store'
    },
    {
      type: 'job' as const,
      typeTitle: 'ملازمت / ورکشاپ',
      title: 'پیشہ ورانہ جاب یا اسسٹنٹ شپ',
      description: skill.jobPathwayUrdu || 'کسی ادارے یا دکان میں باقاعدہ کام۔',
      expectedIncomeUrdu: '۲۵،۰۰۰ تا ۶۰،۰۰۰ روپے ماہانہ',
      icon: 'Briefcase'
    }
  ];

  const earningPathwaysEn = [
    {
      type: 'freelancing' as const,
      typeTitle: 'Freelancing & Remote',
      title: 'Remote Services & Projects',
      description: skill.freelancePathwayEn || 'Deliver services to remote clients.',
      expectedIncomeEn: 'PKR 20,000 - 50,000 / month',
      icon: 'Globe'
    },
    {
      type: 'home_service' as const,
      typeTitle: 'Local & On-demand',
      title: 'Community Services',
      description: skill.localPathwayEn || skill.homeWorkPathwayEn || 'Provide on-demand services in your area.',
      expectedIncomeEn: 'PKR 15,000 - 40,000 / month',
      icon: 'Store'
    }
  ];

  // Required Tools
  const requiredToolsUrdu = (skill.requiredResourcesUrdu || ['بنیادی اسمارٹ فون', 'انٹرنیٹ کنکشن']).map((r, idx) => ({
    name: r,
    category: (skill.isMobileFriendly ? 'mobile_app' : 'hardware') as any,
    isFree: true,
    description: `اس ہنر کے لیے ضروری اوزار #${idx + 1}`
  }));

  const requiredToolsEn = (skill.requiredResourcesEn || ['Smartphone', 'Internet']).map((r, idx) => ({
    name: r,
    category: (skill.isMobileFriendly ? 'mobile_app' : 'hardware') as any,
    isFree: true,
    description: `Required tool #${idx + 1}`
  }));

  return {
    skillId: skill.id,
    slug: skill.slug,
    titleUrdu: skill.titleUrdu,
    titleEn: skill.titleEn,
    categoryUrdu: skill.badgeUrdu,
    categoryEn: skill.badgeEn,
    taglineUrdu: skill.taglineUrdu,
    taglineEn: skill.taglineEn,
    whyImportantUrdu: skill.whatIsThisUrdu,
    whyImportantEn: skill.whatIsThisEn,
    dailyLifeBenefitUrdu: skill.whereIsItUsefulUrdu?.join('، ') || 'روزمرہ زندگی میں خود انحصاری اور گھریلو بچت۔',
    dailyLifeBenefitEn: skill.whereIsItUsefulEn?.join(', ') || 'Self-reliance and household utility.',
    earningPathwaysUrdu,
    earningPathwaysEn,
    requiredToolsUrdu,
    requiredToolsEn,
    levelsDefinition: generatedLevels,
    lessons: generatedLessons,
    capstoneProject,
    aiGuidePrompts: [
      {
        id: 'p1',
        titleUrdu: 'مجھے یہ سمجھ نہیں آیا',
        titleEn: 'Explain More Simply',
        promptUrdu: `السلام علیکم! ہنر "${skill.titleUrdu}" کے اس سبق کی وضاحت مزید آسان اردو اور عام فہم مثال کے ساتھ کر دیں تاکہ میں بغیر کسی الجھن کے سمجھ سکوں۔`,
        promptEn: `Please explain this lesson in ${skill.titleEn} in very simple language with a practical example.`
      },
      {
        id: 'p2',
        titleUrdu: 'یہ کام خود کیسے کروں؟',
        titleEn: 'Step-by-Step Practical Steps',
        promptUrdu: `میں "${skill.titleUrdu}" کا عملی ٹاسک خود کرنا چاہتا ہوں۔ مجھے بتائیں کہ میں پہلا عملی قدم کیا اٹھاؤں؟`,
        promptEn: `Give me step-by-step practical action instructions for ${skill.titleEn}.`
      },
      {
        id: 'p3',
        titleUrdu: 'اگلا بہترین قدم کیا ہے؟',
        titleEn: 'What Should I Do Next?',
        promptUrdu: `میں نے اس ہنر کا یہ حصہ سمجھ لیا ہے۔ اب مجھے اپنی روزمرہ آمدنی اور عملی مشق کے لیے اگلا کون سا قدم اٹھانا چاہیے؟`,
        promptEn: `What is my single highest-leverage next step in ${skill.titleEn}?`
      }
    ],
    nextRecommendedSkills: [
      {
        skillId: skill.nextSkillId || 'cat-2-ai-chatgpt',
        titleUrdu: skill.nextSkillUrdu || 'AI اور ChatGPT',
        titleEn: skill.nextSkillEn || 'AI & ChatGPT',
        reasonUrdu: 'اس ہنر کے ساتھ یہ مہارت ملانے سے آپ کی کارکردگی اور آمدنی دگنی ہو جاتی ہے۔',
        reasonEn: 'Combining this with adjacent skills multiplies your productivity.'
      }
    ]
  };
}
