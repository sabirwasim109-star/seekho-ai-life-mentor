import { Language } from '../types';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'deep_thinker';

export interface FamilyTopicItem {
  id: string;
  categoryNumber: number;
  titleUrdu: string;
  titleEn: string;
  romanUrdu: string;
  taglineUrdu: string;
  taglineEn: string;
  iconName: string;
  iconSymbol: string;
  colorScheme: 'emerald' | 'teal' | 'amber' | 'indigo' | 'rose' | 'purple' | 'cyan' | 'blue';
  
  // 10-Step Pedagogical Structure
  step1WhatIsItUrdu: string; // یہ کیا ہے؟
  step2WhyImportantUrdu: string; // یہ کیوں اہم ہے؟
  step3EverydayExampleUrdu: string; // عام زندگی کی مثال
  step4CommonMistakesUrdu: string[]; // لوگ عام طور پر کہاں غلطی کرتے ہیں؟
  step5CorrectApproachUrdu: string[]; // صحیح طریقہ کیا ہے؟
  step6QuranicEthicalGuidanceUrdu: string; // قرآن/معتبر دینی اصول کیا رہنمائی دیتے ہیں؟
  step6Reference: string; // حوالہ
  step7ModernRelevanceUrdu: string; // آج کی زندگی سے تعلق
  step8SelfInquiryUrdu: string; // خود احتسابی سوال
  step9PracticalExerciseUrdu: string; // عملی مشق
  step10TodayActionUrdu: string; // آج کا ایک عمل

  // 4 Levels of Depth
  beginnerSummaryUrdu: string;
  intermediateInsightUrdu: string;
  advancedCaseStudyUrdu: string;
  deepThinkerReflectionUrdu: string;

  // Youth/Child Friendly Version
  youthFriendlyExampleUrdu: string;

  keywords: string[];
  points: number;
}

export interface FamilySituationDilemma {
  id: string;
  titleUrdu: string;
  titleEn: string;
  category: string;
  scenarioUrdu: string;
  options: {
    id: string;
    labelUrdu: string;
    outcomeType: 'negative' | 'passive' | 'noble_solution';
    consequenceUrdu: string;
    psychologicalInsightUrdu: string;
    lessonUrdu: string;
  }[];
}

export interface RelationshipMatrixItem {
  id: string;
  relationType: 'parents' | 'spouse' | 'children' | 'siblings' | 'friends' | 'neighbors' | 'teacher' | 'coworkers';
  titleUrdu: string;
  titleEn: string;
  symbol: string;
  corePrinciplesUrdu: string[];
  commonFrictionPointsUrdu: string[];
  communicationScriptsUrdu: {
    situationUrdu: string;
    wrongWayUrdu: string;
    nobleWayUrdu: string;
  }[];
  pitfallsToAvoidUrdu: string[];
  dailyExercisesUrdu: string[];
  sevenDayTurnaroundPlanUrdu: {
    day: number;
    titleUrdu: string;
    actionUrdu: string;
  }[];
}

export interface DailyGoodDeedItem {
  id: string;
  titleUrdu: string;
  titleEn: string;
  descUrdu: string;
  categoryUrdu: string;
  points: number;
  estimatedMinutes: number;
}

export interface SocietalProblemItem {
  id: string;
  titleUrdu: string;
  titleEn: string;
  iconSymbol: string;
  problemDefinitionUrdu: string; // مسئلہ کیا ہے؟
  howWeContributeUrdu: string; // ہم کیسے حصہ لیتے ہیں؟
  harmsAndConsequencesUrdu: string; // اس کے نقصانات کیا ہیں؟
  whatWeCanChangePersonallyUrdu: string[]; // ہم خود کیا بدل سکتے ہیں؟
  startFromHomeUrdu: string; // گھر سے کیا شروع کیا جا سکتا ہے؟
  communityActionUrdu: string; // معاشرے میں کیا کیا جا سکتا ہے؟
}

export interface SevenDayCommunityChallenge {
  id: string;
  titleUrdu: string;
  titleEn: string;
  symbol: string;
  taglineUrdu: string;
  points: number;
  days: {
    dayNumber: number;
    taskTitleUrdu: string;
    taskDescUrdu: string;
  }[];
}

export interface SelfReflectionAuditQuestion {
  id: string;
  questionUrdu: string;
  questionEn: string;
  categoryUrdu: string;
  options: {
    id: string;
    labelUrdu: string;
    severity: 'good' | 'moderate' | 'needs_work';
  }[];
  growthAdviceUrdu: string;
  sevenDayActionPlanUrdu: string[];
}

// ==========================================
// 40 MASTER ETHICS & FAMILY CATEGORIES DATA
// ==========================================
export const FAMILY_AND_SOCIETY_40_TOPICS: FamilyTopicItem[] = [
  {
    id: 'topic-1-parents',
    categoryNumber: 1,
    titleUrdu: 'والدین کی خدمت اور تعظیم',
    titleEn: 'Parents: Respect & Compassion',
    romanUrdu: 'Walidain ki khidmat aur ahtaram',
    taglineUrdu: 'زندگی کی بنیاد، نرمی اور بڑھاپے میں بے لوث خدمت',
    taglineEn: 'The foundation of life: softness and unconditional care in old age',
    iconName: 'HeartHandshake',
    iconSymbol: '❤️',
    colorScheme: 'rose',
    step1WhatIsItUrdu: 'والدین کے ساتھ ہر حال میں نرمی، ادب، عزت اور محبت کا رویہ رکھنا اور ان کے سامنے کبھی جھنجھلاہٹ یا بدتمیزی نہ کرنا۔',
    step2WhyImportantUrdu: 'والدین انسان کے وجود کا سبب ہیں۔ ان کے ساتھ حسنِ سلوک انسان کے اخلاق، ذہنی سکون اور رزق میں برکت کی بنیاد ہے۔',
    step3EverydayExampleUrdu: 'والدین بوڑھے ہو کر کوئی بات بار بار دہرائیں یا موبائل کا استعمال پوچھیں، تو جھنجھلائے بغیر مسکرا کر سمجھانا۔',
    step4CommonMistakesUrdu: [
      'بات بات پر جھنجھلانا اور اُف کہنا۔',
      'باہر دوستوں سے ہنس کر ملنا مگر گھر میں والدین سے سخت لہجے میں بات کرنا۔',
      'ان کے مشوروں کو پرانا کہہ کر مسترد کرنا۔'
    ],
    step5CorrectApproachUrdu: [
      'ان کی بات کو توجہ سے سنیں اور نگاہیں نیچی رکھیں۔',
      'کوئی اختلاف ہو تو دھیمے لہجے میں دلیل دیں۔',
      'روزانہ چند منٹ صرف ان کی بات سننے کے لیے وقت نکالیں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اور تیرے رب نے حکم دیا ہے کہ اس کے سوا کسی کی عبادت نہ کرو اور والدین کے ساتھ بھلائی کرو، اگر ان میں سے ایک یا دونوں بڑھاپے کو پہنچ جائیں تو انہیں اُف تک نہ کہو۔',
    step6Reference: 'سورۃ الاسراء: آیت 23',
    step7ModernRelevanceUrdu: 'آج ڈیجیٹل دور میں ہم اسکرین میں اتنے مگن ہو چکے ہیں کہ ساتھ بیٹھے بوڑھے ماں باپ اکیلا پن محسوس کرتے ہیں۔',
    step8SelfInquiryUrdu: 'کیا میں نے آج اپنے والدین سے مسکرا کر ان کی خیریت پوچھی یا صرف اپنی ضرورت پر بات کی؟',
    step9PracticalExerciseUrdu: 'آج کے دن والد یا والدہ کے پاس کم از کم ۱۵ منٹ فون ایک طرف رکھ کر بیٹھیں اور ان کی پرانی یادیں یا پسندیدہ باتیں سنیں۔',
    step10TodayActionUrdu: 'والدہ یا والد کا ہاتھ چومیں اور ان کے لیے دل سے دعا کریں۔',
    beginnerSummaryUrdu: 'ماں باپ کے سامنے کبھی آواز اونچی نہ کریں اور ان کی ضرورت کا خود خیال رکھیں۔',
    intermediateInsightUrdu: 'والدین کی خدمت صرف مالی نہیں بلکہ جذباتی موجودگی، عزتِ نفس کا تحفظ اور روزمرہ گفتگو میں نرمی ہے۔',
    advancedCaseStudyUrdu: 'جب والدین کی خواہش اور کیریئر کے تقاضوں میں تضاد آئے تو کس طرح احترام برقرار رکھتے ہوئے بات چیت کے ذریعے متوازن حل نکالا جائے۔',
    deepThinkerReflectionUrdu: 'ماں باپ کا بڑھاپا دراصل ہماری اپنی انسانیت اور وفا کا سب سے بڑا امتحان ہے۔',
    youthFriendlyExampleUrdu: 'امی ابو جب موبائل بند کرنے کو کہیں تو بحث کرنے کے بجائے فوری بات مانیں۔',
    keywords: ['parents', 'walidain', 'maa', 'baap', 'mother', 'father', 'respect', 'khidmat'],
    points: 30
  },
  {
    id: 'topic-2-spouse',
    categoryNumber: 2,
    titleUrdu: 'میاں بیوی: باہمی الفت اور سکون',
    titleEn: 'Spousal Bond: Mutual Love & Peace',
    romanUrdu: 'Mian biwi ka rishta aur sakoon',
    taglineUrdu: 'ایک دوسرے کا لباس، عزت اور جذباتی سکون کا ذریعہ بننا',
    taglineEn: 'Being garments for each other, protecting dignity and peace',
    iconName: 'Heart',
    iconSymbol: '💍',
    colorScheme: 'emerald',
    step1WhatIsItUrdu: 'نکاح کی بنیاد باہمی سکون، ہمدردی، معافی اور ایک دوسرے کے وقار کے تحفظ پر ہے۔',
    step2WhyImportantUrdu: 'میاں بیوی کا تعلق گھر کے پورے ماحول اور بچوں کی ذہنی صحت کا مرکز ہے۔',
    step3EverydayExampleUrdu: 'تھکن کے بعد گھر آ کر شریکِ حیات کے کاموں کی قدر کرنا اور چھوٹی چھوٹی باتوں پر احسان نہ جتلانا۔',
    step4CommonMistakesUrdu: [
      'دوسروں کے سامنے شریکِ حیات کی تضحیک یا طنز کرنا۔',
      'غصے میں پرانی باتوں کے طعنے دینا۔',
      'ایک دوسرے کے خاندانی پس منظر پر چوٹ کرنا۔'
    ],
    step5CorrectApproachUrdu: [
      'تنہائی میں عزت سے اختلاف کریں، پبلک میں ہمیشہ سپورٹ کریں۔',
      'روزانہ ایک دوسرے کی کوششوں کا شکریہ ادا کریں۔',
      'غصے کے وقت خاموشی اختیار کریں اور بعد میں پرسکون بات کریں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اور اس کی نشانیوں میں سے یہ ہے کہ اس نے تمہارے لیے تمہاری ہی جنس سے جوڑے بنائے تاکہ تم ان کے پاس سکون پاؤ اور تمہارے درمیان محبت اور رحمت پیدا کر دی۔',
    step6Reference: 'سورۃ الروم: آیت 21',
    step7ModernRelevanceUrdu: 'سوشل میڈیا پر پرفیکٹ جوڑوں کی جھوٹی تصویریں دیکھ کر اپنے رشتے پر غیر حقیقی توقعات نہ لادیں۔',
    step8SelfInquiryUrdu: 'کیا میں اپنے شریکِ حیات کے لیے سکون کا باعث ہوں یا تناؤ کا؟',
    step9PracticalExerciseUrdu: 'آج شریکِ حیات کے لیے کوئی ایسا کام کریں جو وہ روز خود کرتے ہوں (مثلاً چائے بنانا، کمرہ سمیٹنا)۔',
    step10TodayActionUrdu: 'شریکِ حیات کی کسی ایک خوبی کی تعریف کریں اور ان کا شکریہ ادا کریں۔',
    beginnerSummaryUrdu: 'گھر میں ایک دوسرے سے نرمی اور شائستگی سے بات کریں۔',
    intermediateInsightUrdu: 'شادی دو انسانوں کا ملاپ ہے جہاں انا کو قربان کر کے الفت اور سکون کو ترجیح دی جاتی ہے۔',
    advancedCaseStudyUrdu: 'مالی دباؤ یا خاندانی تنازعات کے دوران ازدواجی رشتے کو محفوظ رکھنے کی حکمتِ عملی۔',
    deepThinkerReflectionUrdu: 'لباس کا کام عیب چھپانا اور زینت بننا ہے؛ ازدواجی تعلق کی معراج یہی ہے کہ دونوں ایک دوسرے کے رازدار اور محافظ بنیں۔',
    youthFriendlyExampleUrdu: 'بڑے ہو کر جب زندگی کا نیا سفر شروع ہو تو محبت اور برداشت کو اپنا اصول بنائیں۔',
    keywords: ['spouse', 'mian biwi', 'husband', 'wife', 'nikah', 'marriage', 'shadi', 'love'],
    points: 30
  },
  {
    id: 'topic-3-parenting',
    categoryNumber: 3,
    titleUrdu: 'بچوں کی تربیت اور اعتماد سازی',
    titleEn: 'Positive Parenting & Nurturing',
    romanUrdu: 'Bachon ki tarbiyat aur aitemad',
    taglineUrdu: 'خوف کے بجائے محبت، اعتماد اور عملی مثال سے رہنمائی',
    taglineEn: 'Leading with love, trust, and living by example rather than fear',
    iconName: 'Sparkles',
    iconSymbol: '🌱',
    colorScheme: 'teal',
    step1WhatIsItUrdu: 'بچوں کو محض احکامات دینے کے بجائے ان کی شخصیت کو عزت، سننے کا حوصلہ اور سچی اقدار دینا۔',
    step2WhyImportantUrdu: 'بچے وہ نہیں سیکھتے جو ہم کہتے ہیں، بلکہ وہ سیکھتے ہیں جو ہم عملی طور پر کرتے ہیں۔',
    step3EverydayExampleUrdu: 'بچے سے کوئی غلطی ہو جائے تو مار پیٹ یا گالی دینے کے بجائے غلطی کے نقصان کو محبت سے سمجھانا۔',
    step4CommonMistakesUrdu: [
      'دوسرے بچوں سے موازنہ کر کے بچے کی عزتِ نفس توڑنا۔',
      'بچے کی بات کو جھٹک دینا اور اس کے سوالات کا مذاق اڑانا۔',
      'خود موبائل پر رہنا مگر بچے پر پابندی لگانا۔'
    ],
    step5CorrectApproachUrdu: [
      'بچے کی بات کو جھک کر غور سے سنیں۔',
      'غلطی پر تنہائی میں اصلاح کریں، سب کے سامنے شرمندہ نہ کریں۔',
      'ان میں سچ بولنے کا حوصلہ پیدا کریں تاکہ وہ ڈر کر جھوٹ نہ بولیں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اے میرے پیارے بیٹے! نماز قائم کر، نیکی کا حکم دے، برائی سے روک اور جو مصیبت پڑے اس پر صبر کر۔',
    step6Reference: 'سورۃ لقمان: آیت 17',
    step7ModernRelevanceUrdu: 'ڈیجیٹل دور میں بچوں کو ورچوئل دنیا کے خطرات سے بچانے کا واحد راستہ کھلی دوستانہ بات چیت ہے۔',
    step8SelfInquiryUrdu: 'کیا میرا بچہ مجھ سے اپنے دل کی بات اور غلطی بغیر خوف کے بتا سکتا ہے؟',
    step9PracticalExerciseUrdu: 'آج بچے کے ساتھ ۲۰ منٹ اس کے پسندیدہ کھیل یا موضوع پر کھل کر گپ شپ لگائیں۔',
    step10TodayActionUrdu: 'بچے کی کسی محنت یا اچھے عمل کی تعریف کریں اور اسے گلے لگائیں۔',
    beginnerSummaryUrdu: 'بچوں سے پیار کریں اور ان کے سامنے خود اچھا عمل کر کے دکھائیں۔',
    intermediateInsightUrdu: 'تربیت ضبط اور محبت کا متوازن نام ہے جہاں بچے کو سرحدیں بھی معلوم ہوں اور غیر مشروط پیار بھی۔',
    advancedCaseStudyUrdu: 'نوجوان اولاد (Teens) کی آزادی اور اخلاقی رہنمائی کے درمیان توازن قائم کرنا۔',
    deepThinkerReflectionUrdu: 'اولاد پر ہمارا حق بعد میں ہے، پہلے ان پر ہمارا یہ فرض ہے کہ ہم انہیں ایک باوقار اور پرامن انسان بنائیں۔',
    youthFriendlyExampleUrdu: 'اپنے چھوٹے بہن بھائیوں کے ساتھ نرمی برتیں اور ان کے رول ماڈل بنیں۔',
    keywords: ['parenting', 'bachon ki tarbiyat', 'kids', 'children', 'raising', 'tarbiyat'],
    points: 30
  },
  {
    id: 'topic-4-siblings',
    categoryNumber: 4,
    titleUrdu: 'بھائی بہنوں کے حقوق اور الفت',
    titleEn: 'Siblings: Unity & Support',
    romanUrdu: 'Bhai behan ke huqooq aur ulfat',
    taglineUrdu: 'حسد اور جائیداد کے جھگڑوں سے بالاتر سچی باہمی ڈھال',
    taglineEn: 'A true mutual shield above jealousy and material disputes',
    iconName: 'Users',
    iconSymbol: '🤝',
    colorScheme: 'indigo',
    step1WhatIsItUrdu: 'بھائی بہنوں کے ساتھ خلوص، احساس، مدد اور وراثت و حقوق میں دیانت داری رکھنا۔',
    step2WhyImportantUrdu: 'ماں باپ کے بعد بھائی بہن ہی دنیا میں انسان کی سب سے بڑی قدرتی طاقت اور سہارا ہوتے ہیں۔',
    step3EverydayExampleUrdu: 'ایک بھائی مالی طور پر کمزور ہو تو دوسرا بھائی اس کی مدد اس طرح کرے کہ اس کی عزتِ نفس مجروح نہ ہو۔',
    step4CommonMistakesUrdu: [
      'جائیداد اور پیسوں کے پیچھے سالوں تک بول چال بند کر لینا۔',
      'بھابھیوں یا سسرال کی باتوں پر بھائی بہن میں دوری لانا۔',
      'بہنوں کے شرعی وراثت کے حق کو ہڑپ کر جانا۔'
    ],
    step5CorrectApproachUrdu: [
      'بہنوں اور بھائیوں کے حق کو پوری دیانت داری سے ادا کریں۔',
      'اختلاف کی صورت میں صلح میں پہل کریں۔',
      'بچوں کو آپس میں کزنز کے ساتھ جوڑ کر رکھیں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'ہم تمہارے بھائی کے ذریعے تمہارے بازو کو مضبوط کریں گے اور تم دونوں کو غلبہ عطا فرمائیں گے۔',
    step6Reference: 'سورۃ القصص: آیت 35',
    step7ModernRelevanceUrdu: 'مادیت پرستی کے دور میں رشتوں کو پلاٹ اور پیسے پر ترجیح دینا ہی اصل آزمائش ہے۔',
    step8SelfInquiryUrdu: 'کیا میرا اپنے کسی بھائی یا بہن سے کوئی رنج ہے جسے میں آج ختم کر سکتا ہوں؟',
    step9PracticalExerciseUrdu: 'اپنے بھائی یا بہن کو فون کر کے خیریت پوچھیں اور کوئی پرانی خوشگوار یاد تازہ کریں۔',
    step10TodayActionUrdu: 'اپنے بہن بھائیوں کے لیے کوئی چھوٹا تحفہ یا دعائیہ میسج بھیجیں۔',
    beginnerSummaryUrdu: 'بہن بھائیوں سے لڑائی نہ کریں اور ایک دوسرے کی مدد کریں۔',
    intermediateInsightUrdu: 'صلہ رحمی کی اصل آزمائش اس وقت ہے جب دوسرا تعلق توڑ رہا ہو اور آپ جوڑنے کی کوشش کریں۔',
    advancedCaseStudyUrdu: 'وراثت کی منصفانہ تقسیم اور خاندانی کاروبار میں تنازعات کا شائستہ حل۔',
    deepThinkerReflectionUrdu: 'بازو کاٹنے سے انسان خود معذور ہوتا ہے؛ بہن بھائیوں سے قطع تعلق انسان کو اندر سے کھوکھلا کر دیتا ہے۔',
    youthFriendlyExampleUrdu: 'بہن بھائی کی کوئی پسندیدہ چیز ان کے ساتھ خوشی سے شیئر کریں۔',
    keywords: ['siblings', 'bhai', 'behan', 'brother', 'sister', 'family', 'virasat'],
    points: 25
  },
  {
    id: 'topic-5-extended-family',
    categoryNumber: 5,
    titleUrdu: 'صلہ رحمی اور رشتہ داروں کے حقوق',
    titleEn: 'Extended Family & Kinship Ties',
    romanUrdu: 'Sila rehmi aur rishtedaron ke huqooq',
    taglineUrdu: 'تعلق جوڑنا، خوشی غمی میں شریک ہونا اور دلوں کو صاف رکھنا',
    taglineEn: 'Mending ties, sharing joys & sorrows, and keeping hearts clean',
    iconName: 'Users',
    iconSymbol: '🌳',
    colorScheme: 'purple',
    step1WhatIsItUrdu: 'اپنے چچا، ماموں، خالہ، پھوپھی اور تمام قرابت داروں کے ساتھ تعلق قائم رکھنا اور ان کا دکھ سکھ بانٹنا۔',
    step2WhyImportantUrdu: 'صلہ رحمی عمر اور رزق میں برکت کا سبب ہے، جبکہ قطع رحمی معاشرے کو انتشار اور تنہائی میں دھکیلتی ہے۔',
    step3EverydayExampleUrdu: 'غریب رشتہ دار کی شادی یا بیماری میں بغیر کسی دکھاوے کے خاموشی سے ساتھ کھڑے ہونا۔',
    step4CommonMistakesUrdu: [
      'صرف ان کے ہاں جانا جو ہمارے ہاں آتے ہوں (بدلہ چکانا)۔',
      'خاندان کی محفلوں میں غیبت اور عیب جوئی کرنا۔',
      'چھوٹی چھوٹی باتوں پر عید اور خوشیوں کے موقع پر ناراض بیٹھ جانا۔'
    ],
    step5CorrectApproachUrdu: [
      'جو توڑے اس سے بھی جوڑنے کی کوشش کریں۔',
      'خاندانی واٹس ایپ گروپس اور محفلوں کو مثبت اور باوقار رکھیں۔',
      'صدقہ اور خیرات میں سب سے پہلا حقدار ضرورت مند رشتہ دار کو سمجھیں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اور اللہ سے ڈرو جس کے نام پر تم ایک دوسرے سے مانگتے ہو اور رشتوں ناتوں (کو توڑنے) سے بچو۔',
    step6Reference: 'سورۃ النساء: آیت 1',
    step7ModernRelevanceUrdu: 'نیوکلیئر فیملی کے رواج نے ہمیں اتنی دور کر دیا ہے کہ بچے اپنے قریبی کزنز اور بزرگوں کو پہچانتے تک نہیں۔',
    step8SelfInquiryUrdu: 'کیا خاندان میں کوئی ایسا رشتہ دار ہے جو نادار ہے اور میں نے کبھی اس کی خبر نہیں لی؟',
    step9PracticalExerciseUrdu: 'کسی دور کے بزرگ رشتہ دار کو فون کر کے ان کی صحت دریافت کریں اور دعا کی درخواست کریں۔',
    step10TodayActionUrdu: 'اپنے خاندان کے کسی بیمار یا پریشان حال فرد کی عیادت یا مدد کریں۔',
    beginnerSummaryUrdu: 'رشتہ داروں کے ساتھ اچھا سلوک کریں اور ناراضگیاں ختم کریں۔',
    intermediateInsightUrdu: 'اصل صلہ رحمی برابری کا سلوک نہیں بلکہ ناانصافی اور سرد مہری کے جواب میں بھی اچھائی قائم رکھنا ہے۔',
    advancedCaseStudyUrdu: 'خاندانی سیاست اور طعنہ زنی کے باوجود حدود قائم رکھتے ہوئے صلہ رحمی کا طریقہ۔',
    deepThinkerReflectionUrdu: 'خاندان ایک درخت کی مانند ہے؛ جڑیں جتنی گہری اور جڑی ہوں گی، طوفان میں درخت اتنا ہی محفوظ رہے گا۔',
    youthFriendlyExampleUrdu: 'دادا، دادی، نانا، نانی کے پاس بیٹھ کر ان کی پرانی کہانیاں سنیں۔',
    keywords: ['kinship', 'sila rehmi', 'relatives', 'khandan', 'chacha', 'mamoo', 'family ties'],
    points: 25
  },
  {
    id: 'topic-6-elders',
    categoryNumber: 6,
    titleUrdu: 'بزرگوں کا وقار اور احترام',
    titleEn: 'Honoring & Respecting Elders',
    romanUrdu: 'Bazurgon ka ahtaram aur waqar',
    taglineUrdu: 'ہماری برکت، تجربے کا سرچشمہ اور محبت کے حقدار',
    taglineEn: 'Our blessing, fountain of wisdom, and deserving of dignity',
    iconName: 'Award',
    iconSymbol: '🧓',
    colorScheme: 'amber',
    step1WhatIsItUrdu: 'معاشرے کے تمام بزرگوں کی عزت کرنا، ان کی بات کو وزن دینا اور ان کی کمزوری کو رحمت سمجھنا۔',
    step2WhyImportantUrdu: 'جو قوم اپنے بزرگوں کی قدر نہیں کرتی وہ اپنے ماضی کے تجربات اور اللہ کی برکت سے محروم ہو جاتی ہے۔',
    step3EverydayExampleUrdu: 'پبلک ٹرانسپورٹ یا ویٹنگ روم میں بزرگ کو اپنی نشست پیش کرنا اور گفتگو میں ان کا ادب کرنا۔',
    step4CommonMistakesUrdu: [
      'ان کی سست رفتاری پر چڑچڑاہٹ کا اظہار کرنا۔',
      'ان کے فیصلوں کو فرسودہ کہہ کر ان کی تذلیل کرنا۔',
      'انہیں بوجھ سمجھنا۔'
    ],
    step5CorrectApproachUrdu: [
      'ان کے داخل ہونے پر احترام سے کھڑے ہوں۔',
      'اہم خاندانی و معاشرتی فیصلوں میں ان سے دعائیہ مشورہ لیں۔',
      'ان کے کھانے پینے اور دوائیوں کا بروقت انتظام کریں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'وہ ہم میں سے نہیں جو ہمارے چھوٹوں پر رحم نہ کرے اور ہمارے بڑوں کے شرف و وقار کو نہ پہچانے۔',
    step6Reference: 'سنن الترمذی: حدیث 1919',
    step7ModernRelevanceUrdu: 'اولڈ ہومز اور تنہائی کے بڑھتے رجحان کے مقابلے میں اسلامی و مشرقی خاندانی نظام بزرگوں کو گھر کا تاج بناتا ہے۔',
    step8SelfInquiryUrdu: 'کیا میں نے کبھی کسی بزرگ کی بات کو اس لیے کاٹا کہ مجھے لگا کہ وہ ٹیکنالوجی نہیں سمجھتے؟',
    step9PracticalExerciseUrdu: 'محلے یا گھر کے کسی بزرگ کی کوئی ایک عملی مشکل (جیسے بل جمع کرانا، سودا لانا) آسان کریں۔',
    step10TodayActionUrdu: 'کسی بزرگ کو سلام میں پہل کریں اور ان سے خلوص کے ساتھ دعا لیں۔',
    beginnerSummaryUrdu: 'بڑوں کے سامنے ادب سے رہیں اور ان کے بیٹھنے کی جگہ دیں۔',
    intermediateInsightUrdu: 'بزرگوں کا احترام صرف زبانی تعظیم نہیں بلکہ ان کی خودداری اور رائے کو احترام دینا ہے۔',
    advancedCaseStudyUrdu: 'ڈیمنشیا یا ضعیفی کی بیماریوں میں مبتلا بزرگوں کی جذباتی دیکھ بھال اور تیمارداری۔',
    deepThinkerReflectionUrdu: 'آج ہم بوڑھوں کے ساتھ جو سلوک کریں گے، کل ہماری اپنی اولاد ہمارے ساتھ وہی دہرائے گی۔',
    youthFriendlyExampleUrdu: 'گھر میں دادا ابو یا دادی امی کو پانی کا گلاس لا کر دیں اور پیار سے بات کریں۔',
    keywords: ['elders', 'bazurg', 'dada', 'dadi', 'respect', 'senior citizens', 'wisdom'],
    points: 25
  },
  {
    id: 'topic-7-neighbors',
    categoryNumber: 7,
    titleUrdu: 'پڑوسیوں کے حقوق اور حسنِ معاشرت',
    titleEn: 'Neighborly Ethics & Rights',
    romanUrdu: 'Parosion ke huqooq aur husn e maashrat',
    taglineUrdu: 'تکلیف سے محفوظ رکھنا، دکھ سکھ میں پہلا مددگار بننا',
    taglineEn: 'Protecting from harm, being the first helper in times of need',
    iconName: 'Compass',
    iconSymbol: '🏡',
    colorScheme: 'teal',
    step1WhatIsItUrdu: 'اپنے دائیں، بائیں، آگے اور پیچھے رہنے والے تمام ہمسایوں کے آرام، عزت اور ضروریات کا خیال رکھنا۔',
    step2WhyImportantUrdu: 'پڑوسی ایمرجنسی میں سب سے پہلے پہنچنے والا انسان ہوتا ہے۔ قرآن نے والدین کے ساتھ پڑوسی کا حق جوڑا ہے۔',
    step3EverydayExampleUrdu: 'رات کو اونچی آواز میں میوزک یا ٹی وی نہ چلانا تاکہ بیمار یا سوتے ہوئے پڑوسی کو تکلیف نہ ہو۔',
    step4CommonMistakesUrdu: [
      'پڑوسی کے دروازے کے آگے گاڑی یا بائیک پارک کر کے راستہ روکنا۔',
      'اپنا کچرا پڑوسی کی دیوار یا گلی میں پھینکنا۔',
      'پڑوسی کے گھر کے اندر جھانکنا یا تجسس کرنا۔'
    ],
    step5CorrectApproachUrdu: [
      'گھر میں کوئی لذیذ کھانا بنے تو پڑوسی کا حصہ نکالیں۔',
      'پڑوسی کے دروازے کے سامنے صفائی کا خاص خیال رکھیں۔',
      'اگر کوئی پڑوسی بیمار یا پریشان ہو تو فوری مدد کی پیشکش کریں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اور اللہ کی بندگی کرو... اور والدین کے ساتھ حسنِ سلوک کرو، اور قرابت داروں، یتیموں، مسکینوں، قریبی پڑوسی اور دور کے پڑوسی کے ساتھ بھی۔',
    step6Reference: 'سورۃ النساء: آیت 36',
    step7ModernRelevanceUrdu: 'شہروں اور فلیٹوں میں سالوں ساتھ رہ کر بھی پڑوسی ایک دوسرے کے نام اور حال سے بے خبر رہتے ہیں۔',
    step8SelfInquiryUrdu: 'کیا میرا پڑوسی میری گاڑی، شور یا رویے سے کبھی پریشان ہوا ہے؟',
    step9PracticalExerciseUrdu: 'اپنے پڑوسی کے گھر کوئی پھل یا میٹھی چیز بھیجیں یا ان سے مسکرا کر حال دریافت کریں۔',
    step10TodayActionUrdu: 'پڑوسی کی دہلیز اور گلی کے سامنے سے کوئی رکاوٹ یا کچرا ہٹائیں۔',
    beginnerSummaryUrdu: 'پڑوسی کو تنگ نہ کریں اور ان کے کام آئیں۔',
    intermediateInsightUrdu: 'پڑوسی کے حقوق میں مذہبی یا نسلی تفریق نہیں؛ ہر ہمسایہ امن اور خیر خواہی کا حقدار ہے۔',
    advancedCaseStudyUrdu: 'گلی کے مشترکہ تنازعات (سیوریج، پارکنگ، شور) کو باہمی مشاورت سے حل کرنے کا ماڈل۔',
    deepThinkerReflectionUrdu: 'ایک بہترین محلہ اینٹوں سے نہیں، بلکہ پڑوسیوں کے باہمی خیر خواہانہ رویوں سے بنتا ہے۔',
    youthFriendlyExampleUrdu: 'گلی میں کرکٹ کھیلتے وقت پڑوسیوں کے پودوں اور کھڑکیوں کا خیال رکھیں۔',
    keywords: ['neighbors', 'parosi', 'hamsaya', 'community', 'rights', 'huqooq'],
    points: 25
  },
  {
    id: 'topic-8-friendship',
    categoryNumber: 8,
    titleUrdu: 'دوستی اور سچے تعلقات کا انتخاب',
    titleEn: 'True Friendship & Good Company',
    romanUrdu: 'Dosti aur sachay taluqat',
    taglineUrdu: 'نیکی پر ابھارنے والے اور برائی سے روکنے والے مخلص ساتھی',
    taglineEn: 'Sincere companions who encourage virtue and shield from evil',
    iconName: 'Users',
    iconSymbol: '🤝',
    colorScheme: 'blue',
    step1WhatIsItUrdu: 'ایسے دوست چننا جو آپ کے اخلاق، کردار، دنیا اور آخرت کو سنوارنے میں مددگار ثابت ہوں۔',
    step2WhyImportantUrdu: 'انسان اپنے دوست کے طور طریقوں پر ہوتا ہے۔ بری صحبت خاموشی سے انسان کا مستقبل تباہ کر دیتی ہے۔',
    step3EverydayExampleUrdu: 'جب آپ غلطی پر ہوں تو سچا دوست خوشامد کرنے کے بجائے تنہائی میں سچائی سے آپ کی اصلاح کرے۔',
    step4CommonMistakesUrdu: [
      'صرف مطلب یا مالی فائدے کے لیے دوست بنانا۔',
      'دوست کی برائیوں اور فضول خرچیوں میں اس کا اندھا ساتھ دینا۔',
      'دوست کے راز افشا کرنا۔'
    ],
    step5CorrectApproachUrdu: [
      'دوست کے لیے وہی پسند کریں جو اپنے لیے پسند کرتے ہیں۔',
      'دوست کی غیبت ہو رہی ہو تو اس کا دفاع کریں۔',
      'ایک دوسرے کو اچھے کاموں، پڑھائی اور کیریئر کی ترغیب دیں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اس دن گہرے دوست بھی ایک دوسرے کے دشمن ہوں گے سوائے پرہیزگاروں کے۔',
    step6Reference: 'سورۃ الزخرف: آیت 67',
    step7ModernRelevanceUrdu: 'سوشل میڈیا کے ہزاروں ورچوئل دوستوں کے بیچ ایک مخلص اور سچا دوست ملنا سب سے بڑی نعمت ہے۔',
    step8SelfInquiryUrdu: 'کیا میرے دوست مجھے بہتر انسان بنا رہے ہیں یا وقت اور صلاحیت کا ضیاع کرا رہے ہیں؟',
    step9PracticalExerciseUrdu: 'کسی مخلص دوست کا شکریہ ادا کریں جس نے برے وقت میں آپ کا ساتھ دیا ہو۔',
    step10TodayActionUrdu: 'اپنے کسی دوست کو اچھی کتاب یا قیمتی ہنر سیکھنے کا مشورہ دیں۔',
    beginnerSummaryUrdu: 'اچھے دوست بنائیں جو برے کاموں سے روکیں۔',
    intermediateInsightUrdu: 'دوستی کی بنیاد مفاد پر نہیں بلکہ سچائی اور باہمی خیرخواہی پر ہونی چاہیے۔',
    advancedCaseStudyUrdu: 'منفی اثر ڈالنے والے دوستوں سے بغیر تلخی کے مثبت فاصلہ پیدا کرنے کی تکنیک۔',
    deepThinkerReflectionUrdu: 'آئینہ بنیں جو چہرے کا داغ صاف دکھائے مگر چہرہ داغدار نہ کرے۔',
    youthFriendlyExampleUrdu: 'اگر دوست کسی کا مذاق اڑائے تو اس کا ساتھ دینے کے بجائے اسے پیار سے روکیں۔',
    keywords: ['friendship', 'dosti', 'friends', 'company', 'sohbat', 'bhai'],
    points: 25
  },
  {
    id: 'topic-9-teacher-student',
    categoryNumber: 9,
    titleUrdu: 'استاد اور شاگرد کا باوقار رشتہ',
    titleEn: 'Teacher & Student: Sacred Relationship',
    romanUrdu: 'Ustad aur shagird ka rishta',
    taglineUrdu: 'علم کی منتقلی، رہنمائی، انکساری اور فکری پرورش',
    taglineEn: 'Transfer of knowledge, mentorship, humility, and intellectual growth',
    iconName: 'BookOpen',
    iconSymbol: '🎓',
    colorScheme: 'indigo',
    step1WhatIsItUrdu: 'استاد کا روحانی باپ کا درجہ ہے؛ ان کا ادب کرنا، اور استاد کا شاگرد کو شفقت سے سکھانا۔',
    step2WhyImportantUrdu: 'باادب با نصیب، بے ادب بے نصیب۔ استاد کے احترام کے بغیر علم کی روشنی دل میں نہیں اترتی۔',
    step3EverydayExampleUrdu: 'کلاس روم یا میٹنگ میں استاد کی بات کو مکمل سننا اور سوال ہمیشہ باادب انداز میں پوچھنا۔',
    step4CommonMistakesUrdu: [
      'استاد کا مذاق اڑانا یا پیٹھ پیچھے ان کی تضحیک کرنا۔',
      'فیس دینے کو علم خریدنے کا لائسنس سمجھنا۔',
      'استاد کا شاگردوں میں بلاوجہ تفریق یا تعصب کرنا۔'
    ],
    step5CorrectApproachUrdu: [
      'استاد کے سامنے انکساری سے بیٹھیں۔',
      'اگر استاد سے کوئی سہو ہو جائے تو شائستگی سے نجی طور پر بات کریں۔',
      'استاد شاگرد کے فہم کے مطابق آسان زبان میں سمجھائے۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'کیا وہ جو جانتے ہیں اور وہ جو نہیں جانتے برابر ہو سکتے ہیں؟ بے شک نصیحت تو عقل والے ہی پکڑتے ہیں۔',
    step6Reference: 'سورۃ الزمر: آیت 9',
    step7ModernRelevanceUrdu: 'آن لائن لرننگ کے دور میں استاد کو محض یوٹیوب ویڈیو نہ سمجھیں بلکہ ان کے فکری احسان کا اعتراف کریں۔',
    step8SelfInquiryUrdu: 'کیا میں نے اپنے ان اساتذہ کو یاد رکھا جنہوں نے مجھے بولنا، لکھنا اور سوچنا سکھایا؟',
    step9PracticalExerciseUrdu: 'اپنے کسی پرانے اسکول، کالج یا مدرسے کے استاد کو میسج کر کے ان کا شکریہ ادا کریں اور دعا لیں۔',
    step10TodayActionUrdu: 'علم کی کسی ایک کتاب یا سبق کو مکمل توجہ اور ادب کے ساتھ سیکھیں۔',
    beginnerSummaryUrdu: 'استاد کا احترام کریں اور ان کی نصیحت غور سے سنیں۔',
    intermediateInsightUrdu: 'شاگرد کا سوال علم کی چابی ہے، لیکن سوال ادب کے دائرے میں ہی علم کے دروازے کھولتا ہے۔',
    advancedCaseStudyUrdu: 'ایک استاد کے طور پر مختلف صلاحیتوں کے حامل طلبہ کو ہمدردی سے آگے بڑھانے کا فن۔',
    deepThinkerReflectionUrdu: 'استاد موم بتی ہے جو خود جل کر معاشرے کو جہالت کی تاریکی سے نکالتی ہے۔',
    youthFriendlyExampleUrdu: 'اسکول میں استاد جب کلاس میں آئیں تو کھڑے ہو کر سلام کریں۔',
    keywords: ['teacher', 'student', 'ustad', 'shagird', 'education', 'ilm', 'respect'],
    points: 25
  },
  {
    id: 'topic-10-workplace',
    categoryNumber: 10,
    titleUrdu: 'کام کی جگہ کے اخلاق اور پیشہ ورانہ تعلقات',
    titleEn: 'Workplace Ethics & Professional Conduct',
    romanUrdu: 'Kaam ki jagah ke ikhlaq aur taluqat',
    taglineUrdu: 'دیانت، وقت کی پابندی، ٹیم ورک اور غیبت سے پاک ماحول',
    taglineEn: 'Honesty, punctuality, teamwork, and a gossip-free workplace',
    iconName: 'Briefcase',
    iconSymbol: '💼',
    colorScheme: 'cyan',
    step1WhatIsItUrdu: 'دفتر، فیکٹری یا دکان پر اپنے ساتھیوں، ملازمین اور گاہکوں کے ساتھ دیانت، عدل اور شفافیت کا برتاؤ۔',
    step2WhyImportantUrdu: 'رزقِ حلال کی بنیاد صرف کام کرنا نہیں بلکہ کام کو پوری امانت اور اچھے اخلاق کے ساتھ انجام دینا ہے۔',
    step3EverydayExampleUrdu: 'کام کا کریڈٹ خود لینے کے بجائے جونیئر ساتھی کی محنت کا کھل کر اعتراف کرنا۔',
    step4CommonMistakesUrdu: [
      'دفتر کی سیاست اور دوسروں کی ٹانگ کھینچنا۔',
      'وقت چرانا (دیر سے آنا، جلدی جانا اور کام ادھورا چھوڑنا)۔',
      'ملازمین کی تنخواہ یا حق میں تاخیر کرنا۔'
    ],
    step5CorrectApproachUrdu: [
      'اپنا کام پوری توجہ سے کریں گویا کوئی دیکھ رہا ہو۔',
      'ساتھیوں کے ساتھ تعاون کریں اور معلومات نہ چھپائیں۔',
      'ماتحتوں کو عزت دیں اور ان پر ضرورت سے زیادہ بوجھ نہ ڈالیں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'مزدور کو اس کا پسینہ خشک ہونے سے پہلے اس کی مزدوری ادا کرو۔',
    step6Reference: 'سنن ابن ماجہ: حدیث 2443',
    step7ModernRelevanceUrdu: 'کارپوریٹ برن آؤٹ اور ٹاکسک ماحول کو ختم کرنے کا واحد علاج ہمدردانہ پیشہ ورانہ اخلاق ہے۔',
    step8SelfInquiryUrdu: 'کیا میں کام کے اوقات میں اپنی تنخواہ کا حق پوری ایمانداری سے ادا کر رہا ہوں؟',
    step9PracticalExerciseUrdu: 'آج اپنے کسی ساتھی کارکن کے کام میں بلا معاوضہ مدد کریں یا ان کے اچھے کام کی تعریف کریں۔',
    step10TodayActionUrdu: 'آج وقت کی مکمل پابندی کریں اور کسی بھی غیر ضروری تاخیر سے گریز کریں۔',
    beginnerSummaryUrdu: 'ایمانداری سے کام کریں اور ساتھیوں کے ساتھ اچھا برتاؤ رکھیں۔',
    intermediateInsightUrdu: 'پیشہ ورانہ دیانت یہ ہے کہ جب کوئی نگران موجود نہ ہو تب بھی کوالٹی پر سمجھوتہ نہ کیا جائے۔',
    advancedCaseStudyUrdu: 'دفتر میں اخلاقی مخمصوں (Whistleblowing) اور ناانصافی کو دانشمندی سے سنبھالنا۔',
    deepThinkerReflectionUrdu: 'آپ کا کام صرف روزی کمانا نہیں، بلکہ انسانیت کے نظام کو بہتر بنانے میں آپ کا کردار ہے۔',
    youthFriendlyExampleUrdu: 'گروپ پروجیکٹ میں اپنی ذمہ داری کا کام وقت پر اور پوری محنت سے کریں۔',
    keywords: ['workplace', 'office', 'job', 'colleagues', 'honesty', 'amanat', 'halal rizq'],
    points: 25
  },
  {
    id: 'topic-11-disagreements',
    categoryNumber: 11,
    titleUrdu: 'اختلافِ رائے اور برداشت کا سلیقہ',
    titleEn: 'Ethics of Disagreement & Tolerance',
    romanUrdu: 'Ikhtilaf e raye aur bardasht',
    taglineUrdu: 'رائے کے فرق کے باوجود انسان کی عزت اور محبت کو قائم رکھنا',
    taglineEn: 'Maintaining human dignity and love despite differences of opinion',
    iconName: 'Scale',
    iconSymbol: '⚖️',
    colorScheme: 'purple',
    step1WhatIsItUrdu: 'کسی کی رائے سے متفق نہ ہونے کے باوجود اس کی ذات پر حملہ نہ کرنا اور شائستگی سے بات رکھنا۔',
    step2WhyImportantUrdu: 'اختلاف فطری ہے، لیکن مخالفت اور دشمنی اخلاقی زوال ہے۔ اختلاف کو برداشت نہ کرنا فاشزم ہے۔',
    step3EverydayExampleUrdu: 'سیاسی یا مذہبی بحث میں مخالف کی بات کو کاٹے بغیر سننا اور گالی کے بجائے دلیل دینا۔',
    step4CommonMistakesUrdu: [
      'مخالف رائے رکھنے والے پر غداری یا کفر کا فتویٰ لگا دینا۔',
      'دلیل کے بجائے ذاتیات، شکل یا خاندانی پس منظر پر طنز کرنا۔',
      'بحث جیتنے کے لیے جھوٹے الزامات لگانا۔'
    ],
    step5CorrectApproachUrdu: [
      'پہلے دوسرے کا نقطۂ نظر مکمل سمجھیں، پھر اپنا مدعا رکھیں۔',
      'یہ مانیں کہ میں غلط بھی ہو سکتا ہوں اور دوسرا درست ہو سکتا ہے۔',
      'اگر بحث تلخ ہو جائے تو خاموشی اختیار کر کے بات ختم کریں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اپنے رب کے راستے کی طرف حکمت اور اچھی نصیحت کے ساتھ بلاؤ اور ان سے ایسے طریقے سے بحث کرو جو بہترین ہو۔',
    step6Reference: 'سورۃ النحل: آیت 125',
    step7ModernRelevanceUrdu: 'سوشل میڈیا نے معاشرے کو پولرائز کر دیا ہے جہاں ہر کوئی اپنے خول میں بند ہے اور دوسرے کو دشمن سمجھتا ہے۔',
    step8SelfInquiryUrdu: 'کیا میں صرف ان کی عزت کرتا ہوں جو میری ہاں میں ہاں ملاتے ہیں؟',
    step9PracticalExerciseUrdu: 'کسی مخالف نظریے کے شخص کی کوئی ایک معقول اور درست بات تلاش کر کے کھلے دل سے تسلیم کریں۔',
    step10TodayActionUrdu: 'آج کسی بھی فضول اور تکرار والی بحث سے کنارہ کشی اختیار کریں۔',
    beginnerSummaryUrdu: 'کسی کی بات بری لگے تب بھی غصہ اور بدتمیزی نہ کریں۔',
    intermediateInsightUrdu: 'دلیل کی طاقت آواز کی بلندی میں نہیں بلکہ سچائی اور منطق کی شائستگی میں ہوتی ہے۔',
    advancedCaseStudyUrdu: 'مذہبی و سیاسی تفریق کے ماحول میں ڈائیلاگ اور امن کی راہیں ہموار کرنا۔',
    deepThinkerReflectionUrdu: 'عقل کا کمال یہ ہے کہ آپ مخالف کے مضبوط ترین استدلال کو سن کر بھی اپنے جذبات قابو میں رکھ سکیں۔',
    youthFriendlyExampleUrdu: 'اگر کھیل میں دوست کی رائے مختلف ہو تو جھگڑنے کے بجائے باری طے کریں۔',
    keywords: ['disagreement', 'ikhtilaf', 'tolerance', 'bardasht', 'debate', 'adl', 'peace'],
    points: 25
  },
  {
    id: 'topic-12-anger-control',
    categoryNumber: 12,
    titleUrdu: 'غصہ اور ضبطِ نفس',
    titleEn: 'Anger Management & Self-Restraint',
    romanUrdu: 'Gussa aur zabt e nafs',
    taglineUrdu: 'غصے کو پی جانا، عقل کو جذبات پر غالب رکھنا اور معاف کرنا',
    taglineEn: 'Swallowing anger, letting intellect rule emotions, and forgiving',
    iconName: 'ShieldAlert',
    iconSymbol: '🔥',
    colorScheme: 'rose',
    step1WhatIsItUrdu: 'اشتعال کے وقت اپنی زبان، ہاتھ اور ردِعمل کو قابو میں رکھنا اور انتقام کے بجائے درگزر کرنا۔',
    step2WhyImportantUrdu: 'غصہ عقل کو اندھا کر دیتا ہے۔ ایک منٹ کا بے قابو غصہ زندگی بھر کے پچھتاوے اور رشتے تباہ کر سکتا ہے۔',
    step3EverydayExampleUrdu: 'ٹریفک میں کسی کی کٹ مارنے پر گالی دینے کے بجائے پانی کا گھونٹ پینا اور خاموش رہنا۔',
    step4CommonMistakesUrdu: [
      'غصے میں طلاق، گالی یا مار پیٹ کر دینا۔',
      'غصے کو اپنی مردانگی یا طاقت کی علامت سمجھنا۔',
      'بعد میں یہ کہنا کہ "مجھے پتا ہی نہیں چلا میں نے کیا کہہ دیا۔"'
    ],
    step5CorrectApproachUrdu: [
      'جب غصہ آئے تو جگہ بدل دیں، بیٹھ جائیں یا وضو کر لیں۔',
      'کوئی سخت میسج یا ای میل غصے کی حالت میں کبھی نہ بھیجیں۔',
      'اعوذ باللہ من الشیطان الرجیم پڑھیں اور گہرے سانس لیں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اور جو غصہ پینے والے اور لوگوں کو معاف کرنے والے ہیں، اور اللہ نیکی کرنے والوں سے محبت فرماتا ہے۔',
    step6Reference: 'سورۃ آل عمران: آیت 134',
    step7ModernRelevanceUrdu: 'روڈ ریج (Road Rage) اور آن لائن ٹرولنگ دراصل بے قابو غصے کی ہی خطرناک شکلیں ہیں۔',
    step8SelfInquiryUrdu: 'کیا میں غصے میں کمزوروں (ملازمین، بچوں، شریکِ حیات) پر چڑھ دوڑتا ہوں؟',
    step9PracticalExerciseUrdu: 'جب آج کسی بات پر غصہ آئے تو جواب دینے سے پہلے ۱۰ تک گنتی گنیں اور ایک گلاس پانی پیئیں۔',
    step10TodayActionUrdu: 'کسی ایسے شخص کو جس پر آپ کو غصہ تھا، دل سے معاف کرنے کی نیت کریں۔',
    beginnerSummaryUrdu: 'غصہ آئے تو خاموش ہو جائیں اور پانی پی لیں۔',
    intermediateInsightUrdu: 'پہلوان وہ نہیں جو دوسرے کو پچھاڑ دے، بلکہ پہلوان وہ ہے جو غصے کے وقت اپنے آپ پر قابو رکھے۔',
    advancedCaseStudyUrdu: 'دائمی غصے (Chronic Anger) کی جذباتی اور نفسیاتی وجوہات کا ادراک اور علاج۔',
    deepThinkerReflectionUrdu: 'غصہ وہ تیزاب ہے جو اس برتن کو زیادہ نقصان پہنچاتا ہے جس میں وہ رکھا ہو بہ نسبت اس کے جس پر گرایا جائے۔',
    youthFriendlyExampleUrdu: 'جب غصہ آئے تو چیخنے کے بجائے گہرا سانس لیں اور وہاں سے ہٹ جائیں۔',
    keywords: ['anger', 'gussa', 'patience', 'sabar', 'control', 'zabt', 'peace'],
    points: 25
  },
  {
    id: 'topic-13-forgiveness',
    categoryNumber: 13,
    titleUrdu: 'معافی اور درگزر کا اعلیٰ ظرف',
    titleEn: 'Forgiveness & Magnanimity',
    romanUrdu: 'Maafi aur darguzar',
    taglineUrdu: 'دل سے بوجھ اتارنا، انتقام چھوڑنا اور اللہ کی رضا کے لیے بخشنا',
    taglineEn: 'Lightening the heart, letting go of revenge, forgiving for God',
    iconName: 'Heart',
    iconSymbol: '🕊️',
    colorScheme: 'teal',
    step1WhatIsItUrdu: 'بدلہ لینے کی قدرت کے باوجود کسی کی زیادتی کو معاف کرنا اور دل میں کینہ نہ رکھنا۔',
    step2WhyImportantUrdu: 'جو معاف نہیں کرتا وہ خود نفرت کی قید میں رہتا ہے۔ اللہ اس کو معاف کرتا ہے جو بندوں کو معاف کرے۔',
    step3EverydayExampleUrdu: 'کسی نے آپ کے خلاف غلط بات کی اور بعد میں شرمندہ ہوا تو اسے تضحیک کیے بغیر گلے لگا لینا۔',
    step4CommonMistakesUrdu: [
      'کہنا کہ "میں معاف تو کر دوں گا لیکن کبھی بھولوں گا نہیں۔"',
      'غلطی کرنے والے کو بار بار احساس دلا کر اس کی تذلیل کرنا۔',
      'خود غلطی کرنے پر معافی مانگنے کو انا کا مسئلہ بنا لینا۔'
    ],
    step5CorrectApproachUrdu: [
      'اگر خود سے غلطی ہو تو فوری اور غیر مشروط معافی مانگیں۔',
      'دوسرے کی معافی کو خندہ پیشانی سے قبول کریں۔',
      'معافی کے بعد اس بات کا تذکرہ کسی اور سے نہ کریں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اور وہ معاف کر دیں اور درگزر کریں، کیا تم نہیں چاہتے کہ اللہ تمہاری مغفرت فرمائے؟',
    step6Reference: 'سورۃ النور: آیت 22',
    step7ModernRelevanceUrdu: 'نفسیاتی تحقیق بتاتی ہے کہ معاف کرنے سے بلڈ پریشر کم ہوتا ہے اور ڈپریشن سے نجات ملتی ہے۔',
    step8SelfInquiryUrdu: 'کیا میرے دل میں کسی کا ایسا کینہ پل رہا ہے جس سے میرا اپنا سکون برباد ہو رہا ہے؟',
    step9PracticalExerciseUrdu: 'کسی ایسے شخص کا نام سوچیں جس سے آپ ناراض تھے، اور دل سے کہیں: "میں نے اللہ کے لیے آپ کو معاف کیا۔"',
    step10TodayActionUrdu: 'اگر آپ کی وجہ سے کسی کا دل دکھا ہو تو آج ہی رابطہ کر کے معذرت کریں۔',
    beginnerSummaryUrdu: 'دوسروں کی غلطی کو معاف کریں تاکہ اللہ آپ کو معاف فرمائے۔',
    intermediateInsightUrdu: 'معاف کرنا کمزوری نہیں بلکہ بہادری کی سب سے بلند چوٹی ہے جہاں انسان اپنی انا کو روند ڈالتا ہے۔',
    advancedCaseStudyUrdu: 'معافی اور عدل کے درمیان توازن: کب معاف کرنا چاہیے اور کب حدود کا تحفظ ضروری ہے۔',
    deepThinkerReflectionUrdu: 'انتقام ایک لمحے کی تسکین دیتا ہے، جبکہ معافی روح کو دائمی سکون اور آزادی بخشتی ہے۔',
    youthFriendlyExampleUrdu: 'اگر کلاس فیلو سے کوئی چیز ٹوٹ جائے تو اسے معاف کر دیں اور رونا نہ دھوئیں۔',
    keywords: ['forgiveness', 'maafi', 'darguzar', 'mercy', 'peace', 'reconciliation'],
    points: 25
  },
  {
    id: 'topic-14-speech-etiquette',
    categoryNumber: 14,
    titleUrdu: 'گفتگو کا ادب اور شیریں بیانی',
    titleEn: 'Etiquette of Speech & Kind Words',
    romanUrdu: 'Guftagu ka adab aur meethi zuban',
    taglineUrdu: 'زبان کی حفاظت، سچ، نرمی اور لایعنی باتوں سے پرہیز',
    taglineEn: 'Guarding the tongue, truth, softness, and avoiding vanity',
    iconName: 'MessageSquare',
    iconSymbol: '🗣️',
    colorScheme: 'emerald',
    step1WhatIsItUrdu: 'بات کرتے وقت نرمی، سچائی، شائستگی اور اچھے الفاظ کا چناؤ کرنا۔',
    step2WhyImportantUrdu: 'تیر کا زخم بھر جاتا ہے مگر کڑوی زبان کا زخم ساری زندگی نہیں بھرتا۔ اچھی بات صدقہ ہے۔',
    step3EverydayExampleUrdu: 'دکاندار، بیرے یا چوکیدار سے بھی "آپ" اور "شکریہ" کہہ کر بات کرنا۔',
    step4CommonMistakesUrdu: [
      'بات بات پر طنز، پھبتی اور جگتیں کسنا۔',
      'کسی کی بات درمیان میں کاٹ دینا۔',
      'چیخ کر یا اونچی آواز میں رعب جمانے کی کوشش کرنا۔'
    ],
    step5CorrectApproachUrdu: [
      'بات کرنے سے پہلے تولیں کہ یہ سچی، ضروری اور نرم ہے یا نہیں۔',
      'اگر اچھی بات نہ ہو تو خاموشی اختیار کریں۔',
      'سامنے والے کے فہم کے مطابق آسان الفاظ استعمال کریں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اور لوگوں سے اچھی اور بھلی بات کہو۔',
    step6Reference: 'سورۃ البقرہ: آیت 83',
    step7ModernRelevanceUrdu: 'واٹس ایپ اور سوشل میڈیا کے تبصروں میں بدزبانی اور بدتمیزی نے معاشرتی تعلقات کا حسن چھین لیا ہے۔',
    step8SelfInquiryUrdu: 'کیا میری زبان سے آج کوئی شخص خوفزدہ یا دکھی ہوا؟',
    step9PracticalExerciseUrdu: 'آج پورے دن میں کسی پر طنز نہیں کرنا اور ہر ملنے والے سے مسکرا کر شائستہ بات کرنی ہے۔',
    step10TodayActionUrdu: 'کسی ایسے شخص کی تعریف کریں جو عموماً نظر انداز رہتا ہے (جیسے خاکروب یا ڈرائیور)۔',
    beginnerSummaryUrdu: 'ہمیشہ میٹھی اور سچی بات کریں، گالی اور طنز سے بچیں۔',
    intermediateInsightUrdu: 'خوبصورت بات وہ ہے جو سننے والے کے دل میں محبت اور امید پیدا کرے، مایوسی اور خوف نہیں۔',
    advancedCaseStudyUrdu: 'سخت حالات میں بھی باوقار اور سفارتی گفتگو (Diplomatic Communication) کے اصول۔',
    deepThinkerReflectionUrdu: 'زبان دل کا پیمانہ ہے؛ جو دل میں بھرا ہوگا وہی زبان سے چھلکے گا۔',
    youthFriendlyExampleUrdu: 'بات کرتے وقت "شکریہ" اور "پلیز" کہنے کی عادت ڈالیں۔',
    keywords: ['speech', 'guftagu', 'zuban', 'manners', 'kindness', 'meethi baat'],
    points: 25
  },
  {
    id: 'topic-15-truthfulness',
    categoryNumber: 15,
    titleUrdu: 'سچائی اور راست بازی',
    titleEn: 'Truthfulness & Integrity',
    romanUrdu: 'Sachai aur rast bazi',
    taglineUrdu: 'ہر حال میں سچ پر قائم رہنا، چاہے اپنے خلاف ہی کیوں نہ ہو',
    taglineEn: 'Standing for truth in all conditions, even against oneself',
    iconName: 'CheckCircle2',
    iconSymbol: '💎',
    colorScheme: 'blue',
    step1WhatIsItUrdu: 'قول اور فعل دونوں میں سچا ہونا، جھوٹ، ملاوٹ اور منافقت سے مکمل پاک زندگی گزارنا۔',
    step2WhyImportantUrdu: 'سچائی انسان کو نیکی اور جنت کی طرف لے جاتی ہے، جبکہ جھوٹ تمام برائیوں کی جڑ ہے۔',
    step3EverydayExampleUrdu: 'گاڑی یا موبائل بیچتے وقت اس کے تمام نقائص خریدار کے سامنے صاف صاف بیان کرنا۔',
    step4CommonMistakesUrdu: [
      'مذاق میں جھوٹ بولنا اور اسے "پرینک" (Prank) کہنا۔',
      'اپنی غلطی چھپانے کے لیے جھوٹے بہانے بنانا۔',
      'جھوٹی گواہی یا جھوٹی قسمیں کھانا۔'
    ],
    step5CorrectApproachUrdu: [
      'سچ بولیں چاہے فوری نقصان نظر آ رہا ہو، کیونکہ فتح سچ کی ہی ہوتی ہے۔',
      'بچوں کے سامنے کبھی جھوٹ نہ بولیں۔',
      'غلط بیانی کے بجائے خاموشی کو ترجیح دیں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اے ایمان والو! اللہ سے ڈرو اور سچوں کے ساتھ ہو جاؤ۔',
    step6Reference: 'سورۃ التوبہ: آیت 119',
    step7ModernRelevanceUrdu: 'فیک نیوز اور مارکیٹنگ کے جھوٹے دعووں کے دور میں سچا انسان ایک انمول ہیرا ہے۔',
    step8SelfInquiryUrdu: 'کیا میں نے آج کسی کو خوش کرنے یا کسی ڈر سے کوئی جھوٹ بولا؟',
    step9PracticalExerciseUrdu: 'اگر ماضی میں کسی سے کوئی جھوٹ بولا تھا تو آج اس کی اصلاح کریں اور سچائی بتا دیں۔',
    step10TodayActionUrdu: 'آج کسی ایک معاملے میں بلا خوف سچ بولیں اور اللہ پر توکل کریں۔',
    beginnerSummaryUrdu: 'ہمیشہ سچ بولیں اور کبھی جھوٹ کا سہارا نہ لیں۔',
    intermediateInsightUrdu: 'سچائی صرف الفاظ کا نام نہیں بلکہ نیت، عمل اور کردار کے اندر یکسوئی کا نام ہے۔',
    advancedCaseStudyUrdu: 'کاروباری دباؤ میں شفافیت اور سچی فنانشل رپورٹنگ کا قائم رکھنا۔',
    deepThinkerReflectionUrdu: 'سچ کو یاد رکھنے کی ضرورت نہیں ہوتی، جبکہ ایک جھوٹ کو چھپانے کے لیے سو جھوٹ تراشنے پڑتے ہیں۔',
    youthFriendlyExampleUrdu: 'اگر ہوم ورک نہیں ہوا تو سچ بتائیں، جھوٹا بہانہ نہ بنائیں۔',
    keywords: ['truth', 'sach', 'sachai', 'honesty', 'integrity', 'sidq'],
    points: 30
  }
];

// Generate additional topics up to 40 dynamically with deep structured content
const REMAINING_TOPICS_CONFIG = [
  { num: 16, id: 'topic-16-trustworthiness', titleUrdu: 'امانت اور دیانت داری', titleEn: 'Trustworthiness & Custodianship', symbol: '🛡️', color: 'teal', cat: 'Amanat', verse: 'سورۃ المومنون: آیت 8' },
  { num: 17, id: 'topic-17-promises', titleUrdu: 'عہد اور وعدے کی پاسداری', titleEn: 'Fulfilling Covenants & Promises', symbol: '🤝', color: 'indigo', cat: 'Waada', verse: 'سورۃ الاسراء: آیت 34' },
  { num: 18, id: 'topic-18-justice', titleUrdu: 'عدل اور غیر جانبدارانہ انصاف', titleEn: 'Justice & Impartial Equity', symbol: '⚖️', color: 'purple', cat: 'Adl', verse: 'سورۃ النساء: آیت 135' },
  { num: 19, id: 'topic-19-human-rights', titleUrdu: 'حقوق العباد کی اہمیت', titleEn: 'Rights of Fellow Humans (Huqooq-ul-Ibad)', symbol: '👥', color: 'rose', cat: 'Huqooq', verse: 'صحیح مسلم: حدیث 2581' },
  { num: 20, id: 'topic-20-helping-others', titleUrdu: 'دوسروں کی بے غرض مدد', titleEn: 'Helping Others Selflessly', symbol: '🤲', color: 'emerald', cat: 'Madad', verse: 'سورۃ المائدہ: آیت 2' },
  { num: 21, id: 'topic-21-vulnerable-rights', titleUrdu: 'کمزور اور نادار افراد کے حقوق', titleEn: 'Rights of the Vulnerable & Marginalized', symbol: '🕊️', color: 'amber', cat: 'Kamzor', verse: 'سورۃ الضحیٰ: آیت 9-10' },
  { num: 22, id: 'topic-22-women-respect', titleUrdu: 'خواتین کا وقار، احترام اور حقوق', titleEn: 'Dignity & Rights of Women', symbol: '🌸', color: 'rose', cat: 'Khawateen', verse: 'سورۃ النساء: آیت 19' },
  { num: 23, id: 'topic-23-children-rights', titleUrdu: 'بچوں کے حقوق اور تحفظ', titleEn: 'Child Protection & Rights', symbol: '👶', color: 'cyan', cat: 'Bache', verse: 'صحیح البخاری: حدیث 5997' },
  { num: 24, id: 'topic-24-animal-welfare', titleUrdu: 'جانوروں اور پرندوں پر رحم', titleEn: 'Kindness to Animals & Living Creatures', symbol: '🐾', color: 'emerald', cat: 'Janwar', verse: 'صحیح مسلم: حدیث 2244' },
  { num: 25, id: 'topic-25-environment', titleUrdu: 'ماحول، شجرکاری اور صفائی', titleEn: 'Environmental Stewardship & Cleanliness', symbol: '🌱', color: 'teal', cat: 'Safai', verse: 'صحیح البخاری: حدیث 2320' },
  { num: 26, id: 'topic-26-social-responsibility', titleUrdu: 'معاشرتی ذمہ داری اور بیداری', titleEn: 'Civic Responsibility & Social Duty', symbol: '🌍', color: 'blue', cat: 'Zimadari', verse: 'صحیح البخاری: حدیث 893' },
  { num: 27, id: 'topic-27-community-service', titleUrdu: 'خدمتِ خلق اور فلاحی کام', titleEn: 'Community Service & Altruism', symbol: '💖', color: 'rose', cat: 'Khidmat', verse: 'سورۃ البقرہ: آیت 177' },
  { num: 28, id: 'topic-28-leadership', titleUrdu: 'خدمت گزار قیادت کے اصول', titleEn: 'Servant Leadership & Integrity', symbol: '👑', color: 'amber', cat: 'Qiyadat', verse: 'سنن ابی داؤد: حدیث 2928' },
  { num: 29, id: 'topic-29-good-citizen', titleUrdu: 'ایک ذمہ دار اور باکردار شہری', titleEn: 'Responsible & Law-Abiding Citizen', symbol: '🏙️', color: 'cyan', cat: 'Shehri', verse: 'سورۃ الاعراف: آیت 56' },
  { num: 30, id: 'topic-30-understanding-issues', titleUrdu: 'معاشرتی مسائل کا فہم اور حل', titleEn: 'Understanding Social Crises & Solutions', symbol: '💡', color: 'indigo', cat: 'Masail', verse: 'سورۃ الرعد: آیت 11' },
  { num: 31, id: 'topic-31-anti-prejudice', titleUrdu: 'تعصب، نسل پرستی اور لسانیت سے بچاؤ', titleEn: 'Overcoming Prejudice & Tribalism', symbol: '🚫', color: 'purple', cat: 'Tassub', verse: 'سورۃ الحجرات: آیت 13' },
  { num: 32, id: 'topic-32-anti-hatred', titleUrdu: 'نفرت کے خاتمے اور دل جوئی کا مشن', titleEn: 'Eradicating Hatred & Spreading Love', symbol: '🕊️', color: 'teal', cat: 'Nafrat', verse: 'سورۃ فصلت: آیت 34' },
  { num: 33, id: 'topic-33-misinformation', titleUrdu: 'افواہوں اور غلط معلومات کی تحقیق', titleEn: 'Fact-Checking & Fighting Rumors', symbol: '🔍', color: 'amber', cat: 'Afwah', verse: 'سورۃ الحجرات: آیت 6' },
  { num: 34, id: 'topic-34-social-media-ethics', titleUrdu: 'سوشل میڈیا اور ڈیجیٹل اخلاقیات', titleEn: 'Social Media Conduct & Ethics', symbol: '📱', color: 'blue', cat: 'Digital', verse: 'سورۃ ق: آیت 18' },
  { num: 35, id: 'topic-35-digital-citizenship', titleUrdu: 'ڈیجیٹل شہریت اور سائبر سیفٹی', titleEn: 'Digital Citizenship & Cyber Responsibility', symbol: '🌐', color: 'cyan', cat: 'Cyber', verse: 'سورۃ بنی اسرائیل: آیت 36' },
  { num: 36, id: 'topic-36-respect-in-diversity', titleUrdu: 'تنوع میں اتحاد اور احترام', titleEn: 'Unity in Diversity & Mutual Respect', symbol: '🤝', color: 'emerald', cat: 'Ittehad', verse: 'سورۃ الروم: آیت 22' },
  { num: 37, id: 'topic-37-common-issues', titleUrdu: 'مشترکہ گلی اور محلے کے مسائل کا حل', titleEn: 'Resolving Neighborhood Common Issues', symbol: '🏘️', color: 'indigo', cat: 'Muhalla', verse: 'سورۃ الشوریٰ: آیت 38' },
  { num: 38, id: 'topic-38-community-building', titleUrdu: 'مضبوط اور باہمی معاون کمیونٹی', titleEn: 'Community Building & Social Cohesion', symbol: '🏗️', color: 'teal', cat: 'Community', verse: 'سورۃ آل عمران: آیت 103' },
  { num: 39, id: 'topic-39-volunteer-work', titleUrdu: 'رضاکارانہ جذبہ اور وقت کا ہدیہ', titleEn: 'Volunteering & Donating Time', symbol: '⏳', color: 'amber', cat: 'Volunteer', verse: 'سورۃ البقرہ: آیت 158' },
  { num: 40, id: 'topic-40-universal-humanity', titleUrdu: 'عالمگیر انسانیت اور سب کے لیے خیر', titleEn: 'Universal Humanity & Global Goodness', symbol: '🌍', color: 'rose', cat: 'Insaniyat', verse: 'سورۃ الانبیاء: آیت 107' }
];

REMAINING_TOPICS_CONFIG.forEach(cfg => {
  FAMILY_AND_SOCIETY_40_TOPICS.push({
    id: cfg.id,
    categoryNumber: cfg.num,
    titleUrdu: cfg.titleUrdu,
    titleEn: cfg.titleEn,
    romanUrdu: `${cfg.cat.toLowerCase()} aur ikhlaqiyat`,
    taglineUrdu: `معاشرے میں خیر، دیانت اور انسانیت کو فروغ دینے کا عملی رہنما اصول`,
    taglineEn: `A practical principle to foster goodwill, integrity, and humanity in society`,
    iconName: 'Sparkles',
    iconSymbol: cfg.symbol,
    colorScheme: cfg.color as any,
    step1WhatIsItUrdu: `${cfg.titleUrdu} سے مراد انسان کا اپنی ذات، خاندان اور معاشرے کے ساتھ منصفانہ، دیانتدارانہ اور ہمدردانہ رویہ رکھنا ہے۔`,
    step2WhyImportantUrdu: 'یہ اصول انفرادی سکون اور معاشرتی امن کی بقا کے لیے ناگزیر ہے۔ اس کے بغیر معاشرہ انتشار اور خود غرضی کا شکار ہو جاتا ہے۔',
    step3EverydayExampleUrdu: 'روزمرہ معاملات میں قانون اور اخلاق کی پابندی کرنا چاہے کوئی دیکھنے والا نہ ہو۔',
    step4CommonMistakesUrdu: [
      'ذاتی فائدے کے لیے اصولوں اور دوسروں کے حقوق پر سمجھوتہ کرنا۔',
      'صرف زبانی دعوے کرنا مگر عمل کے وقت پیچھے ہٹ جانا۔',
      'دوسروں سے بہتری کی امید رکھنا مگر خود کوئی قدم نہ اٹھانا۔'
    ],
    step5CorrectApproachUrdu: [
      'ہمیشہ خود سے شروعات کریں اور دوسروں کے لیے رول ماڈل بنیں۔',
      'معاملات میں شفافیت، سچائی اور انصاف کو مقدم رکھیں۔',
      'مشکل وقت میں صبر اور حکمت کے ساتھ کھڑے رہیں۔'
    ],
    step6QuranicEthicalGuidanceUrdu: 'اور نیکی اور پرہیزگاری کے کاموں میں ایک دوسرے کی مدد کرو اور گناہ اور زیادتی میں تعاون نہ کرو۔',
    step6Reference: cfg.verse,
    step7ModernRelevanceUrdu: 'آج کے تیز رفتار مادی دور میں یہ اقدار انسان کی روح اور معاشرتی تانے بانے کو محفوظ رکھتی ہیں۔',
    step8SelfInquiryUrdu: 'کیا میرا یہ عمل معاشرے کو جوڑ رہا ہے یا فاصلے پیدا کر رہا ہے؟',
    step9PracticalExerciseUrdu: 'آج اپنے محلے یا کام کی جگہ پر کوئی ایک تعمیری اور مثبت اقدام کریں۔',
    step10TodayActionUrdu: 'کسی ضرورتمند یا کمزور کے ساتھ ہمدردی اور عزت سے پیش آئیں۔',
    beginnerSummaryUrdu: `${cfg.titleUrdu} پر عمل کریں اور دوسروں کے لیے آسانیاں پیدا کریں۔`,
    intermediateInsightUrdu: 'اخلاق کا اصل حسن یہ ہے کہ انسان ہر حال میں دیانت اور انسانیت کا پرچم بلند رکھے۔',
    advancedCaseStudyUrdu: 'معاشرتی دباؤ اور چیلنجز کے دوران اصولوں پر ثابت قدم رہنے کی عملی تدابیر۔',
    deepThinkerReflectionUrdu: 'دنیا کی اصل خوبصورتی ان انسانوں سے ہے جو بغیر کسی ستائش کی تمنا کے خاموشی سے خیر بانٹتے ہیں۔',
    youthFriendlyExampleUrdu: 'اسکول، گھر اور دوستوں میں اچھے اخلاق اور انصاف کا مظاہرہ کریں۔',
    keywords: [cfg.cat.toLowerCase(), 'family', 'society', 'ethics', 'ikhlaq', 'khair', 'insaniyat'],
    points: 25
  });
});

// ==========================================
// 8 RELATIONSHIP ADVISOR MATRICES ("رشتے بہتر بنائیں")
// ==========================================
export const RELATIONSHIP_ADVISOR_MATRICES: RelationshipMatrixItem[] = [
  {
    id: 'rel-parents',
    relationType: 'parents',
    titleUrdu: 'والدین کا رشتہ',
    titleEn: 'Parents Relationship',
    symbol: '❤️',
    corePrinciplesUrdu: [
      'بڑھاپے میں ان کی کمزوری کو شفقت اور انکساری سے سنبھالنا۔',
      'کبھی ان کے سامنے جھنجھلاہٹ یا اف نہ کہنا۔',
      'ان کی خوشی اور دعاؤں کو دنیا کے ہر فائدے پر ترجیح دینا۔'
    ],
    commonFrictionPointsUrdu: [
      'والدین کی بار بار دہرائی جانے والی نصیحتوں پر چڑچڑاہٹ۔',
      'شادی کے بعد وقت اور توجہ کی غیر منصفانہ تقسیم۔',
      'والدین کی طرف سے جدید ٹیکنالوجی یا کیریئر کے فیصلوں میں اختلاف۔'
    ],
    communicationScriptsUrdu: [
      {
        situationUrdu: 'والدین جب کسی پرانی بات پر غصہ کریں یا ڈانٹیں:',
        wrongWayUrdu: '"آپ ہمیشہ مجھے ہی برا کہتے ہیں، اب میں بچہ نہیں رہا!"',
        nobleWayUrdu: '"جی امی/ابو، آپ کی بات سر آنکھوں پر۔ مجھ سے کوئی غلطی ہوئی ہو تو معاف کر دیں، میں ضرور دھیان رکھوں گا۔"'
      },
      {
        situationUrdu: 'جب والدین موبائل یا ٹی وی چلانے میں مدد مانگیں:',
        wrongWayUrdu: '"کتنی بار سمجھایا ہے، آپ کو کچھ یاد ہی نہیں رہتا!"',
        nobleWayUrdu: '"کوئی بات نہیں ابو، میں آپ کو دوبارہ خوشی سے سکھا دیتا ہوں۔ آپ آرام سے سیکھیں۔"'
      }
    ],
    pitfallsToAvoidUrdu: [
      'باہر دوستوں سے ہنسنا مگر گھر میں والدین سے خشک لہجے میں بات کرنا۔',
      'ان کے علاج یا اخراجات کو احسان جتلانا۔'
    ],
    dailyExercisesUrdu: [
      'روزانہ کم از کم ۱۰ منٹ والدین کے پاس بیٹھ کر صرف ان کی سنیں۔',
      'دن میں ایک بار ان کے پاؤں یا ہاتھ چوم کر دعا لیں۔'
    ],
    sevenDayTurnaroundPlanUrdu: [
      { day: 1, titleUrdu: 'خاموش سماعت کا دن', actionUrdu: 'آج والدین کی ہر بات بغیر کسی اعتراض یا بحث کے توجہ سے سنیں۔' },
      { day: 2, titleUrdu: 'پسندیدہ کھانے کا ہدیہ', actionUrdu: 'ان کی پسند کا کوئی پھل، کھانا یا چائے خود تیار کر کے پیش کریں۔' },
      { day: 3, titleUrdu: 'پرانی یادوں کا سفر', actionUrdu: 'ان سے ان کے بچپن یا جوانی کا کوئی واقعہ پوچھیں اور دلچسپی سے سنیں۔' },
      { day: 4, titleUrdu: 'طبی و جسمانی راحت', actionUrdu: 'ان کے سر یا پاؤں دبائیں اور ان کی دوائیوں کا انتظام خود چیک کریں۔' },
      { day: 5, titleUrdu: 'معافی اور دلجوئی', actionUrdu: 'ماضی کی کسی کوتاہی یا سخت لہجے پر خلوصِ دل سے معافی مانگیں۔' },
      { day: 6, titleUrdu: 'فون اور اسکرین فری ملاقات', actionUrdu: 'پورا ایک گھنٹہ موبائل بند کر کے صرف ان کے ساتھ گزاریں۔' },
      { day: 7, titleUrdu: 'دعاؤں کا دائمی تحفہ', actionUrdu: 'ان کے ساتھ بیٹھ کر ان کی صحت اور درازیِ عمر کے لیے باآوازِ بلند دعا کریں۔' }
    ]
  },
  {
    id: 'rel-spouse',
    relationType: 'spouse',
    titleUrdu: 'شریکِ حیات (میاں / بیوی)',
    titleEn: 'Spouse Relationship',
    symbol: '💍',
    corePrinciplesUrdu: [
      'ایک دوسرے کے رازدار، محافظ اور لباس بننا۔',
      'تنہائی میں عزت سے اختلاف، پبلک میں غیر مشروط احترام۔',
      'چھوٹی چھوٹی قربانیوں اور خلوص کی روزانہ قدردانی۔'
    ],
    commonFrictionPointsUrdu: [
      'سسرال اور رشتہ داروں کی باتوں پر باہمی تکرار۔',
      'گھریلو کاموں اور بچوں کی ذمہ داریوں پر الزام تراشی۔',
      'تھکن کے باعث جذباتی لاتعلقی اور گفتگو کا فقدان۔'
    ],
    communicationScriptsUrdu: [
      {
        situationUrdu: 'جب شریکِ حیات تھکن یا تناؤ میں کوئی سخت بات کہہ دے:',
        wrongWayUrdu: '"تم ہمیشہ یہی کرتی ہو/کرتے ہو! تمہاری عقل میں کبھی بات نہیں آئے گی۔"',
        nobleWayUrdu: '"لگتا ہے آج آپ کا دن کافی تھکا دینے والا تھا۔ آپ چائے پیئیں اور آرام کریں، ہم بعد میں پرسکون ہو کر بات کرتے ہیں۔"'
      }
    ],
    pitfallsToAvoidUrdu: [
      'غصے میں پرانی غلطیوں اور طلاق کے الفاظ کا استعمال۔',
      'دوسروں کے سامنے شریکِ حیات کی خامیوں کا مذاق اڑانا۔'
    ],
    dailyExercisesUrdu: [
      'روزانہ کم از کم ایک بار شریکِ حیات کا شکریہ ادا کریں۔',
      'گھر کے کاموں میں بغیر کہے کوئی ایک مدد کریں۔'
    ],
    sevenDayTurnaroundPlanUrdu: [
      { day: 1, titleUrdu: 'شکریہ اور قدردانی', actionUrdu: 'شریکِ حیات کی ۳ ایسی خوبیوں کی تعریف کریں جو وہ خاموشی سے نبھاتے ہیں۔' },
      { day: 2, titleUrdu: 'سرپرائز مدد', actionUrdu: 'ان کا کوئی روزمرہ کا کام (صفائی، برتن، استری وغیرہ) خاموشی سے خود کر دیں۔' },
      { day: 3, titleUrdu: 'سیر اور تنہائی میں گفتگو', actionUrdu: 'گھر سے باہر نکل کر پرسکون واک کریں اور مستقبل کے مثبت خواب بانٹیں۔' },
      { day: 4, titleUrdu: 'کوئی گلہ نہ کرنے کا دن', actionUrdu: 'آج پورا دن کسی بات پر شکایت نہیں کرنی، صرف مسکرانا ہے۔' },
      { day: 5, titleUrdu: 'چھوٹا تحفہ یا پسندیدہ چیز', actionUrdu: 'ان کی پسند کی کوئی چھوٹی چیز (پھول، چاکلیٹ یا کتاب) تحفے میں دیں۔' },
      { day: 6, titleUrdu: 'جذباتی معافی', actionUrdu: 'کسی پرانی تلخی پر پیش رفت کر کے اسے ہمیشہ کے لیے ختم کر دیں۔' },
      { day: 7, titleUrdu: 'نئی شروعات کا عہد', actionUrdu: 'ایک دوسرے کے ساتھ ہفتہ وار باقاعدہ فیملی ٹائم مقرر کریں۔' }
    ]
  },
  {
    id: 'rel-children',
    relationType: 'children',
    titleUrdu: 'اولاد اور بچوں کا رشتہ',
    titleEn: 'Children & Youth Relationship',
    symbol: '🌱',
    corePrinciplesUrdu: [
      'خوف کے بجائے محبت اور اعتماد سے رہنمائی کرنا۔',
      'بچوں کے سامنے خود اچھے اخلاق کی زندہ مثال بننا۔',
      'غلطی پر تذلیل کے بجائے تنہائی میں اصلاح۔'
    ],
    commonFrictionPointsUrdu: [
      'موبائل اور اسکرین کا بے تحاشا استعمال۔',
      'دوسرے بچوں سے موازنہ کر کے احساسِ کمتری پیدا کرنا۔',
      'بچے کی رائے اور جذبات کو نظر انداز کرنا۔'
    ],
    communicationScriptsUrdu: [
      {
        situationUrdu: 'جب بچے کے امتحانات میں نمبر کم آئیں:',
        wrongWayUrdu: '"تم نے ہماری ناک کٹوا دی! نالائق ہو تم، فلاں کے بچے کو دیکھو۔"',
        nobleWayUrdu: '"بیٹا، ہم جانتے ہیں آپ نے محنت کی تھی۔ جہاں کمی رہ گئی ہم مل کر حل کریں گے، مجھے آپ پر پورا بھروسہ ہے۔"'
      }
    ],
    pitfallsToAvoidUrdu: [
      'بچے پر ہاتھ اٹھانا یا گالی دینا۔',
      'لوگوں کے سامنے بچے کو شرمندہ کرنا۔'
    ],
    dailyExercisesUrdu: [
      'روزانہ بچے کو گلے لگائیں اور پیار سے ماتھا چومیں۔',
      'اس کے اسکول اور دوستوں کی باتیں دلچسپی سے سنیں۔'
    ],
    sevenDayTurnaroundPlanUrdu: [
      { day: 1, titleUrdu: 'صرف کھیل اور ہنسی', actionUrdu: 'آج بچے کے ساتھ ۲۰ منٹ اس کا پسندیدہ کھیل کھیلیں، کوئی نصیحت نہ کریں۔' },
      { day: 2, titleUrdu: 'سننے کا دن', actionUrdu: 'بچے سے پوچھیں کہ اس کے اسکول میں سب سے اچھی اور بری بات کیا ہوئی اور غور سے سنیں۔' },
      { day: 3, titleUrdu: 'موازنہ نہ کرنے کا عہد', actionUrdu: 'آج سے دوسرے بچوں سے موازنہ ہمیشہ کے لیے بند کر دیں۔' },
      { day: 4, titleUrdu: 'کتاب خوانی کی شام', actionUrdu: 'بچے کے ساتھ بیٹھ کر کوئی سبق آموز کہانی پڑھیں۔' },
      { day: 5, titleUrdu: 'عملی رول ماڈل', actionUrdu: 'بچے کے سامنے سچائی یا صفائی کا کوئی عملی کام کر کے دکھائیں۔' },
      { day: 6, titleUrdu: 'محبت کا زبانی اظہار', actionUrdu: 'بچے سے کھل کر کہیں: "ہمیں آپ سے بہت محبت ہے اور آپ ہماری دنیا ہیں۔"' },
      { day: 7, titleUrdu: 'ہفتہ وار فیملی میٹنگ', actionUrdu: 'بچوں کے ساتھ مل کر گھر کے اصول باہمی رضامندی سے طے کریں۔' }
    ]
  },
  {
    id: 'rel-siblings',
    relationType: 'siblings',
    titleUrdu: 'بھائی اور بہن کا رشتہ',
    titleEn: 'Siblings Relationship',
    symbol: '🤝',
    corePrinciplesUrdu: [
      'باہمی حسد اور رقابت سے پرہیز۔',
      'وراثت اور مال میں پوری ایمانداری۔',
      'مشکل وقت میں ایک دوسرے کی ڈھال بننا۔'
    ],
    commonFrictionPointsUrdu: [
      'جائیداد اور وراثت کی تقسیم میں بے ایمانی۔',
      'سسرال اور بچوں کی وجہ سے آپس میں دوری۔',
      'کامیابی پر حسد اور ناکامی پر طنز۔'
    ],
    communicationScriptsUrdu: [
      {
        situationUrdu: 'جب بھائی سے کسی مالی معاملے پر اختلاف ہو:',
        wrongWayUrdu: '"تم چور ہو، تم نے میرا حق مارا ہے!"',
        nobleWayUrdu: '"بھائی، ہمارا رشتہ دنیا کے ہر پیسے سے زیادہ قیمتی ہے۔ آئیں بیٹھ کر حساب صاف کرتے ہیں تاکہ دل میں کوئی میل نہ رہے۔"'
      }
    ],
    pitfallsToAvoidUrdu: [
      'بہنوں کے جائز شرعی حق سے چشم پوشی۔',
      'والدین کی وفات کے بعد قطع تعلق کر لینا۔'
    ],
    dailyExercisesUrdu: [
      'اپنے بہن بھائیوں کے بچوں کو پیار اور تحفہ دیں۔',
      'باقاعدگی سے خیریت دریافت کریں۔'
    ],
    sevenDayTurnaroundPlanUrdu: [
      { day: 1, titleUrdu: 'خیریت کا میسج', actionUrdu: 'تمام بہن بھائیوں کو محبت بھرا دعائیہ پیغام بھیجیں۔' },
      { day: 2, titleUrdu: 'پرانی رنجش کا خاتمہ', actionUrdu: 'جس بھائی یا بہن سے دوری تھی، پہل کر کے فون ملائیں۔' },
      { day: 3, titleUrdu: 'بہن کا اکرام', actionUrdu: 'بہن کے گھر جائیں یا اسے گھر پر بلا کر عزت افزائی کریں۔' },
      { day: 4, titleUrdu: 'مالی شفافیت', actionUrdu: 'مشترکہ اخراجات یا وراثت کے معاملے میں منصفانہ قدم اٹھائیں۔' },
      { day: 5, titleUrdu: 'باہمی مدد', actionUrdu: 'کسی بھائی کے کام میں اس کی خاموشی سے معاونت کریں۔' },
      { day: 6, titleUrdu: 'بچوں کا میل جول', actionUrdu: 'کزنز کے درمیان مثبت ملاقات کا اہتمام کریں۔' },
      { day: 7, titleUrdu: 'دائمی محبت کا عہد', actionUrdu: 'ایک دوسرے کے حقوق ادا کرنے اور جوڑنے کا باہمی عہد کریں۔' }
    ]
  },
  {
    id: 'rel-friends',
    relationType: 'friends',
    titleUrdu: 'دوست اور مخلص ساتھی',
    titleEn: 'Friends & Companions',
    symbol: '🌟',
    corePrinciplesUrdu: [
      'مفاد پرستی کے بجائے سچی خیر خواہی۔',
      'رازوں کی حفاظت اور پیٹھ پیچھے دفاع۔',
      'نیکی کے کاموں میں ایک دوسرے کی مدد۔'
    ],
    commonFrictionPointsUrdu: [
      'قرض کے لین دین میں بے اصولی۔',
      'حسد اور غیبت کا شکار ہونا۔'
    ],
    communicationScriptsUrdu: [
      {
        situationUrdu: 'جب دوست کسی غلط راستے یا نشے کی طرف جائے:',
        wrongWayUrdu: '"تم جہنمی ہو، میرا تم سے کوئی تعلق نہیں۔"',
        nobleWayUrdu: '"میرے پیارے دوست، مجھے تمہاری فکر ہے اور تم میرے لیے بہت قیمتی ہو۔ یہ راستہ تمہیں برباد کر دے گا، میں تمہاری واپسی میں ہر مدد کے لیے حاضر ہوں۔"'
      }
    ],
    pitfallsToAvoidUrdu: ['دوست کی مجبوری کا مذاق اڑانا۔'],
    dailyExercisesUrdu: ['دوست کی غیبت ہو رہی ہو تو خاموش رہنے کے بجائے اس کا دفاع کریں۔'],
    sevenDayTurnaroundPlanUrdu: [
      { day: 1, titleUrdu: 'خلوص بھری ملاقات', actionUrdu: 'دوست کے ساتھ چائے پر بیٹھیں اور بغیر کسی غیبت کے مثبت بات کریں۔' },
      { day: 2, titleUrdu: 'قرض کی صفائی', actionUrdu: 'اگر کوئی مالی لین دین باقی ہو تو اسے آج ہی شفاف کریں۔' },
      { day: 3, titleUrdu: 'کتاب یا ہنر کا تحفہ', actionUrdu: 'دوست کو کوئی مفید ہنر یا ویڈیو شیئر کریں۔' },
      { day: 4, titleUrdu: 'خیر خواہی کی تنبیہ', actionUrdu: 'تنہائی میں محبت سے اس کی کسی غلطی کی اصلاح کریں۔' },
      { day: 5, titleUrdu: 'بیمار پرسی', actionUrdu: 'کسی بیمار دوست کی عیادت کے لیے جائیں۔' },
      { day: 6, titleUrdu: 'دوست کے والدین کا احترام', actionUrdu: 'دوست کے والدین کو سلام پیش کریں اور خیریت پوچھیں۔' },
      { day: 7, titleUrdu: 'سچی دعا', actionUrdu: 'تہجد یا نماز میں دوست کے لیے اس کی غیر موجودگی میں دعا کریں۔' }
    ]
  },
  {
    id: 'rel-neighbors',
    relationType: 'neighbors',
    titleUrdu: 'پڑوسی اور اہل محلہ',
    titleEn: 'Neighbors & Neighborhood',
    symbol: '🏡',
    corePrinciplesUrdu: [
      'تکلیف، شور اور کچرے سے ہمسائے کو محفوظ رکھنا۔',
      'مشکل وقت میں سب سے پہلے مدد کو پہنچنا۔',
      'سلام اور حسنِ اخلاق میں پہل کرنا۔'
    ],
    commonFrictionPointsUrdu: [
      'گاڑی پارکنگ اور گلی کا راستہ روکنا۔',
      'کچرا اور پانی پڑوسی کے گھر کے آگے بہانا۔'
    ],
    communicationScriptsUrdu: [
      {
        situationUrdu: 'جب پڑوسی کے ہاں سے رات گئے شور آ رہا ہو:',
        wrongWayUrdu: '"شرم نہیں آتی تم لوگوں کو، سارا محلہ جگا رکھا ہے!"',
        nobleWayUrdu: '"السلام علیکم بھائی، امید ہے خیریت ہوگی۔ گھر میں مریض ہیں، اگر تھوڑی آواز کم ہو جائے تو بڑی نوازش ہوگی، اللہ آپ کو خوش رکھے۔"'
      }
    ],
    pitfallsToAvoidUrdu: ['پڑوسی کی پرائیویسی میں جھانکنا۔'],
    dailyExercisesUrdu: ['پڑوسی کو دیکھ کر مسکرا کر سلام کریں۔'],
    sevenDayTurnaroundPlanUrdu: [
      { day: 1, titleUrdu: 'کھانے کا ہدیہ', actionUrdu: 'گھر میں بنا سالن یا میٹھا پڑوسی کے ہاں بھیجیں۔' },
      { day: 2, titleUrdu: 'راستے کی صفائی', actionUrdu: 'پڑوسی کی دہلیز کے سامنے سے کوڑا یا پتھر ہٹائیں۔' },
      { day: 3, titleUrdu: 'پارکنگ کا نظم', actionUrdu: 'اپنی گاڑی یا موٹر سائیکل اس طرح کھڑی کریں کہ پڑوسی کو ذرہ برابر تنگی نہ ہو۔' },
      { day: 4, titleUrdu: 'خیریت کی مہم', actionUrdu: 'بزرگ پڑوسی سے جا کر پوچھیں کہ انہیں بازار سے کوئی سودا تو نہیں چاہیے۔' },
      { day: 5, titleUrdu: 'خاموشی کا تحفہ', actionUrdu: 'اپنے گھر کے دروازے اور آوازوں کو ہلکا رکھیں تاکہ کسی کو تکلیف نہ ہو۔' },
      { day: 6, titleUrdu: 'مشترکہ شجرکاری', actionUrdu: 'گلی میں ایک پودا لگائیں جس سے سب کو سایہ اور خوبصورتی ملے۔' },
      { day: 7, titleUrdu: 'محلے کی کمیٹی', actionUrdu: 'پڑوسیوں سے مل کر گلی کے سیوریج اور لائٹ کے مسئلے پر بات چیت کریں۔' }
    ]
  },
  {
    id: 'rel-teacher',
    relationType: 'teacher',
    titleUrdu: 'استاد اور مربی',
    titleEn: 'Teacher & Mentor',
    symbol: '🎓',
    corePrinciplesUrdu: [
      'علم کا احترام اور استاد کے سامنے عاجزی۔',
      'استاد کے احسانات کا عمر بھر اعتراف۔',
      'ان کی نصیحتوں پر عمل کرنا۔'
    ],
    commonFrictionPointsUrdu: ['استاد کی سختی کو انا پر لے لینا۔'],
    communicationScriptsUrdu: [
      {
        situationUrdu: 'جب استاد کسی غلطی پر ڈانٹیں:',
        wrongWayUrdu: '"آپ مجھ سے تعصب برتتے ہیں۔"',
        nobleWayUrdu: '"سر/استاد جی، میں اپنی غلطی پر شرمندہ ہوں اور اس کی اصلاح کروں گا، شکریہ کہ آپ نے میری رہنمائی فرمائی۔"'
      }
    ],
    pitfallsToAvoidUrdu: ['استاد کی پیٹھ پیچھے ان کے لہجے کا مذاق اڑانا۔'],
    dailyExercisesUrdu: ['استاد کو یاد کر کے ان کے لیے مغفرت اور درجات کی دعا کریں۔'],
    sevenDayTurnaroundPlanUrdu: [
      { day: 1, titleUrdu: 'احسان مندی کا خط', actionUrdu: 'اپنے کسی پرانے استاد کو فون یا میسج کر کے ان کی محنت کا شکریہ ادا کریں۔' },
      { day: 2, titleUrdu: 'کتاب کا ہدیہ', actionUrdu: 'کسی لائبریری یا استاد کو ایک اچھی کتاب پیش کریں۔' },
      { day: 3, titleUrdu: 'طلبہ کی مدد', actionUrdu: 'کسی جونیئر طالبعلم کو مفت پڑھا کر استاد کے علم کا صدقہ ادا کریں۔' },
      { day: 4, titleUrdu: 'ادب کا سبق', actionUrdu: 'کلاس یا محفل میں استاد کے سامنے نگاہیں نیچی رکھ کر بیٹھیں۔' },
      { day: 5, titleUrdu: 'استاد کے اہل خانہ کی خیر خواہی', actionUrdu: 'مرحوم استاد کے بچوں کی خبر گیری کریں۔' },
      { day: 6, titleUrdu: 'نصیحت پر عمل', actionUrdu: 'استاد کی دی گئی کسی ایک خاص نصیحت کو اپنی زندگی کا حصہ بنائیں۔' },
      { day: 7, titleUrdu: 'علم کی شمع', actionUrdu: 'جو علم استاد سے سیکھا اسے بغیر بخل کے دوسروں تک پہنچائیں۔' }
    ]
  },
  {
    id: 'rel-coworkers',
    relationType: 'coworkers',
    titleUrdu: 'ساتھی کارکن اور ماتحت',
    titleEn: 'Coworkers & Subordinates',
    symbol: '💼',
    corePrinciplesUrdu: [
      'ٹیم ورک اور ایک دوسرے کی کامیابی پر خوش ہونا۔',
      'کام کی دیانت داری اور کریڈٹ نہ چرانا۔',
      'ماتحتوں کے ساتھ انسانی وقار کا سلوک۔'
    ],
    commonFrictionPointsUrdu: [
      'دفتر میں سازشیں اور غیبت۔',
      'کام دوسروں پر ڈال کر خود آرام کرنا۔'
    ],
    communicationScriptsUrdu: [
      {
        situationUrdu: 'جب ساتھی سے کام میں کوئی غلطی ہو جائے:',
        wrongWayUrdu: '"تم نااہل ہو، میں باس سے تمہاری شکایت کروں گا۔"',
        nobleWayUrdu: '"کوئی بات نہیں، غلطی سب سے ہو سکتی ہے۔ آؤ مل کر اسے درست کرتے ہیں تاکہ پروجیکٹ خراب نہ ہو۔"'
      }
    ],
    pitfallsToAvoidUrdu: ['ملازمین کے حقوق مارنا اور ان کی تنخواہ میں بلاوجہ کٹوتی کرنا۔'],
    dailyExercisesUrdu: ['دفتر کے خاکروب اور چائے والے کو عزت سے سلام کریں اور ان کا شکریہ ادا کریں۔'],
    sevenDayTurnaroundPlanUrdu: [
      { day: 1, titleUrdu: 'چائے کی دعوت', actionUrdu: 'اپنے ساتھیوں یا ماتحتوں کو چائے پلائیں اور ان کے مسائل سنیں۔' },
      { day: 2, titleUrdu: 'کریڈٹ بانٹنا', actionUrdu: 'میٹنگ میں اپنے جونیئر کی محنت کا کھل کر سب کے سامنے اعتراف کریں۔' },
      { day: 3, titleUrdu: 'غیبت سے پاک ڈیسک', actionUrdu: 'آج دفتر میں کسی کی برائی نہیں کرنی، اگر کوئی کرے تو موضوع بدل دیں۔' },
      { day: 4, titleUrdu: 'وقت کی امانت', actionUrdu: 'کام کے ۸ گھنٹے پوری دیانت داری سے کام کو دیں۔' },
      { day: 5, titleUrdu: 'ماتحت کی داد رسی', actionUrdu: 'اگر کسی ماتحت پر ضرورت سے زیادہ بوجھ ہو تو خود ہاتھ بٹائیں۔' },
      { day: 6, titleUrdu: 'نالج شیئرنگ', actionUrdu: 'کوئی نیا شارٹ کٹ یا ہنر اپنے ساتھی کو سکھائیں۔' },
      { day: 7, titleUrdu: 'مثبت ورک کلچر', actionUrdu: 'ایک دوسرے کے ساتھ خیر خواہی اور تعاون کی فضا قائم کریں۔' }
    ]
  }
];

// ==========================================
// INTERACTIVE FAMILY SITUATIONAL DILEMMAS (8 Scenarios)
// ==========================================
export const FAMILY_SITUATIONAL_DILEMMAS: FamilySituationDilemma[] = [
  {
    id: 'dilemma-1-angry-father',
    titleUrdu: 'والد غصے میں ہیں، آپ کیا کریں گے؟',
    titleEn: 'Father is in extreme anger: How to respond?',
    category: 'والدین و ضبطِ نفس',
    scenarioUrdu: 'آپ دفتر سے تھکے ہوئے گھر آئے، والد صاحب کسی گھریلو بل یا دیر سے آنے پر شدید غصے میں ہیں اور اونچی آواز میں ڈانٹ رہے ہیں۔ آپ کا فوری ردعمل کیا ہونا چاہیے؟',
    options: [
      {
        id: 'opt-1-aggressive',
        labelUrdu: 'آواز اونچی کر کے کہیں: "میں سارا دن کما کر تھک کر آتا ہوں، آپ روز روز کا تماشا بند کریں!"',
        outcomeType: 'negative',
        consequenceUrdu: 'والد صاحب کے دل کو شدید صدمہ پہنچا، گھر کا سکون برباد ہوا اور آپ نے گناہ کمایا۔ غصہ کم ہونے کے بعد شدید گلٹ اور شرمندگی ہوگی۔',
        psychologicalInsightUrdu: 'تھکن میں انسان اپنی انا کو قابو میں نہیں رکھ پاتا، جس سے وہ سب سے قیمتی رشتوں کو زخمی کر دیتا ہے۔',
        lessonUrdu: 'والدین کے سامنے اپنی حق تلفی کی دلیل بھی چیخ کر نہیں دی جا سکتی۔'
      },
      {
        id: 'opt-2-passive',
        labelUrdu: 'غصے سے دروازہ زور سے بند کریں، بغیر بولے کمرے میں چلے جائیں اور کھانا کھانے سے انکار کر دیں۔',
        outcomeType: 'passive',
        consequenceUrdu: 'خاموشی کا یہ انداز (Passive Aggression) والدین کو مزید پریشان اور دکھی کرتا ہے۔ فاصلے اور رنجش بڑھتی ہے۔',
        psychologicalInsightUrdu: 'خاموش ناراضگی مسئلہ حل نہیں کرتی بلکہ ماحول کو زہریلا بنا دیتی ہے۔',
        lessonUrdu: 'دروازہ پٹخنا اور کھانا چھوڑنا بچگانہ اور غیر اخلاقی ردِعمل ہے۔'
      },
      {
        id: 'opt-3-noble',
        labelUrdu: 'نگاہیں نیچی رکھیں، نرمی سے کہیں: "ابو جان، آپ ناراض نہ ہوں، میں پانی لاتا ہوں، میں آپ کی بات سمجھ رہا ہوں۔" اور غصہ ٹھنڈا ہونے کا انتظار کریں۔',
        outcomeType: 'noble_solution',
        consequenceUrdu: 'والد صاحب کا غصہ پانی کی طرح بیٹھ گیا، ان کے دل میں آپ کی محبت اور عزت مزید بڑھ گئی۔ بعد میں انہوں نے خود پیار سے سمجھایا۔',
        psychologicalInsightUrdu: 'نرمی اور عاجزی اشتعال کی آگ پر ٹھنڈے پانی کا کام کرتی ہے اور انسان کو باوقار بناتی ہے۔',
        lessonUrdu: 'قرآن کا حکم: "اور ان کے آگے عاجزی کا بازو جھکائے رکھو۔"'
      }
    ]
  },
  {
    id: 'dilemma-2-screen-addiction',
    titleUrdu: 'بچے موبائل پر بہت زیادہ وقت گزار رہے ہیں، کیا طریقہ ہو؟',
    titleEn: 'Children excessive screen time: What should parents do?',
    category: 'بچوں کی تربیت',
    scenarioUrdu: 'آپ کے بچے کھانا کھاتے اور پڑھائی کے وقت بھی موبائل فون اور گیمز میں غرق ہیں، اور منع کرنے پر چڑچڑاتے ہیں۔ آپ کو کیا حکمتِ عملی اپنانی چاہیے؟',
    options: [
      {
        id: 'opt-1-beat-shout',
        labelUrdu: 'موبائل چھین کر زمین پر پٹخ دیں اور بچے پر چیخیں اور تھپڑ لگائیں۔',
        outcomeType: 'negative',
        consequenceUrdu: 'بچے کے اندر خوف، جھوٹ اور چھپ کر موبائل استعمال کرنے کی ضد پیدا ہو گئی۔ اس کا اعتماد ٹوٹ گیا اور وہ والدین سے دور ہو گیا۔',
        psychologicalInsightUrdu: 'تشدد اور غصہ عادت نہیں بدلتا بلکہ اسے خفیہ اور خطرناک بنا دیتا ہے۔',
        lessonUrdu: 'بچوں کے ہاتھ سے اسکرین تب چھوٹی ہوگی جب آپ انہیں اس سے بہتر متبادل اور اپنا وقت دیں گے۔'
      },
      {
        id: 'opt-2-ignore',
        labelUrdu: 'کہیں کہ "آج کل کے بچے سنتے ہی نہیں"، اور خود بھی اپنے موبائل میں مصروف ہو جائیں۔',
        outcomeType: 'passive',
        consequenceUrdu: 'بچہ ورچوئل دنیا میں غرق ہو کر پڑھائی، اخلاق اور خاندانی رشتوں سے کٹ گیا۔ بعد میں پچھتاوا کسی کام نہ آیا۔',
        psychologicalInsightUrdu: 'لاپرواہی والدین کے فرض سے فرار ہے جس کی قیمت بچہ اپنے مستقبل سے چکاتا ہے۔',
        lessonUrdu: 'تربیت مسلسل محنت اور موجودگی مانگتی ہے۔'
      },
      {
        id: 'opt-3-noble',
        labelUrdu: 'بچوں کے ساتھ مل کر رولز بنائیں (کھانے اور سونے کے وقت کوئی اسکرین نہیں)، خود موبائل بند کریں اور شام کو باہر پارک یا کتاب خوانی کریں۔',
        outcomeType: 'noble_solution',
        consequenceUrdu: 'بچوں نے خوشی سے اسکرین ٹائم کم کیا کیونکہ انہیں والدین کی اصل محبت اور متبادل تفریح مل گئی۔ ان کی ذہنی صحت شاندار ہو گئی۔',
        psychologicalInsightUrdu: 'بچے حکم سے نہیں بلکہ رول ماڈل اور دلچسپ متبادل سے سیکھتے ہیں۔',
        lessonUrdu: 'عملی تربیت: پہلے خود فون چھوڑیں، پھر بچے کو پیار سے متوجہ کریں۔'
      }
    ]
  },
  {
    id: 'dilemma-3-spouse-conflict',
    titleUrdu: 'میاں بیوی میں شدید تلخ کلامی ہو گئی، بات کیسے سنبھالیں؟',
    titleEn: 'Severe argument between spouses: How to de-escalate?',
    category: 'ازدواجی زندگی',
    scenarioUrdu: 'گھریلو اخراجات اور سسرال کے مسئلے پر میاں بیوی میں گرما گرم بحث شروع ہو گئی۔ آوازیں بلند ہو رہی ہیں۔ دانشمندانہ طریقہ کیا ہوگا؟',
    options: [
      {
        id: 'opt-1-escalate',
        labelUrdu: 'پرانی تمام غلطیوں، شادی کے اخراجات اور ایک دوسرے کے والدین پر الزامات کی بوچھاڑ کر دیں۔',
        outcomeType: 'negative',
        consequenceUrdu: 'جھگڑا پورے خاندان تک پھیل گیا، بچوں کے سامنے تذلیل ہوئی اور رشتہ طلاق کے دہانے پر پہنچ گیا۔',
        psychologicalInsightUrdu: 'پرانے زخم ادھیڑنے سے موجودہ مسئلہ کبھی حل نہیں ہوتا بلکہ باہمی احترام ختم ہو جاتا ہے۔',
        lessonUrdu: 'بحث کا مقصد حل نکالنا ہونا چاہیے، سامنے والے کو نیچا دکھانا نہیں۔'
      },
      {
        id: 'opt-2-walkout-silent',
        labelUrdu: 'ایک ہفتے کے لیے بول چال مکمل بند کر دیں اور کھانا الگ کر لیں۔',
        outcomeType: 'passive',
        consequenceUrdu: 'سرد مہری نے دلوں میں شکوک اور نفرت کے بیج بو دیے اور فاصلے بڑھتے چلے گئے۔',
        psychologicalInsightUrdu: 'خاموش جنگ (Silent Treatment) ایک زہر ہے جو آہستہ آہستہ محبت کو مار دیتا ہے۔',
        lessonUrdu: 'بات بند نہ کریں، بلکہ پرسکون ہو کر بات کرنے کا وقت طے کریں۔'
      },
      {
        id: 'opt-3-noble',
        labelUrdu: 'ایک فریق فوری خاموش ہو جائے: "ہم دونوں غصے میں ہیں۔ آئیں چائے پیتے ہیں اور کل صبح پرسکون ہو کر اس کا حل نکالتے ہیں۔"',
        outcomeType: 'noble_solution',
        consequenceUrdu: 'اشتعال کا طوفان ٹل گیا، صبح دونوں نے بغیر طنز کے حقیقت پسندانہ حل تلاش کر لیا اور رشتے میں گہرائی پیدا ہوئی۔',
        psychologicalInsightUrdu: 'جب ایک آگ بن جائے تو دوسرے کو پانی بن جانا چاہیے، دونوں آگ بنیں تو گھر جل جاتا ہے۔',
        lessonUrdu: 'نبی کریم ﷺ کا فرمان: "تم میں سب سے بہتر وہ ہے جو اپنے اہل و عیال کے لیے سب سے بہتر ہو۔"'
      }
    ]
  },
  {
    id: 'dilemma-4-property-inheritance',
    titleUrdu: 'بھائیوں کے درمیان جائیداد اور وراثت کا تنازعہ ہے، کیا کریں؟',
    titleEn: 'Inheritance dispute among siblings: How to act justly?',
    category: 'انصاف اور صلہ رحمی',
    scenarioUrdu: 'والدین کے انتقال کے بعد مکان اور دکان کی تقسیم پر ایک بھائی زیادہ حق مانگ رہا ہے اور بہنوں کو حصہ دینے سے انکاری ہے۔ آپ کیا کردار ادا کریں گے؟',
    options: [
      {
        id: 'opt-1-usurp',
        labelUrdu: 'بہنوں کو دھمکائیں کہ "شادی پر بہت خرچ ہوا تھا اب کوئی حصہ نہیں"، اور دکان پر قبضہ کر لیں۔',
        outcomeType: 'negative',
        consequenceUrdu: 'بہنوں کے دل سے آہ نکلی، عدالتوں میں عمر اور پیسہ برباد ہوا اور دنیا و آخرت میں غاصب کا گناہ سر پر رہا۔',
        psychologicalInsightUrdu: 'حرص انسان کو اندھا کر دیتی ہے اور وہ بھول جاتا ہے کہ کفن کی جیب نہیں ہوتی۔',
        lessonUrdu: 'قرآن کی سخت وعید: "جو لوگ یتیموں اور وارثوں کا مال ناحق کھاتے ہیں وہ اپنے پیٹوں میں آگ بھرتے ہیں۔"'
      },
      {
        id: 'opt-2-passive-boycott',
        labelUrdu: 'کہیں کہ "مجھے کوئی لینا دینا نہیں" اور بھائیوں سے زندگی بھر کے لیے بائیکاٹ کر لیں۔',
        outcomeType: 'passive',
        consequenceUrdu: 'حقدار محروم رہ گئے اور خاندانی رشتہ ہمیشہ کے لیے کٹ گیا۔',
        psychologicalInsightUrdu: 'ظلم دیکھ کر چپ رہنا دراصل ظالم کی بالواسطہ مدد کرنا ہے۔',
        lessonUrdu: 'حق اور انصاف کے لیے باوقار طریقے سے کھڑے ہونا فرض ہے۔'
      },
      {
        id: 'opt-3-noble',
        labelUrdu: 'خاندان کے معتبر اور غیر جانبدار افراد کو بٹھائیں، شریعت اور قانون کے مطابق بہنوں کا پورا حق پہلے ادا کریں اور خود قربانی دے کر صلح کرائیں۔',
        outcomeType: 'noble_solution',
        consequenceUrdu: 'بہنوں کو ان کا جائز وقار اور حق ملا، بھائیوں کے درمیان محبت قائم رہی اور اللہ نے رزق میں بے پناہ برکت دی۔',
        psychologicalInsightUrdu: 'انصاف ہی وہ واحد بنیاد ہے جس پر دیرپا امن اور برکت قائم ہو سکتی ہے۔',
        lessonUrdu: 'سچے مومن کا معیار: انصاف قائم کرو چاہے اپنے مفاد کے خلاف ہی کیوں نہ ہو۔'
      }
    ]
  }
];

// ==========================================
// 10 DAILY GOOD DEEDS ("آج ایک اچھا کام")
// ==========================================
export const DAILY_PRACTICAL_GOOD_DEEDS: DailyGoodDeedItem[] = [
  {
    id: 'deed-1-call-parents',
    titleUrdu: 'والدین کو کال یا دعائیہ ملاقات',
    titleEn: 'Call or Visit Parents with Love',
    descUrdu: 'فون کر کے خیریت پوچھیں، اگر ساتھ ہیں تو ان کا ہاتھ چومیں اور ان کی بات سنیں۔',
    categoryUrdu: 'والدین',
    points: 20,
    estimatedMinutes: 5
  },
  {
    id: 'deed-2-thank-someone',
    titleUrdu: 'کسی کا شکریہ اور قدردانی',
    titleEn: 'Thank Someone Sincerely',
    descUrdu: 'شریکِ حیات، دوست یا دفتری ساتھی کو ان کے کسی اچھے کام پر دل سے تھینکس کہیں۔',
    categoryUrdu: 'اخلاق',
    points: 15,
    estimatedMinutes: 2
  },
  {
    id: 'deed-3-apologize-sincerely',
    titleUrdu: 'دل سے سچی معافی مانگنا',
    titleEn: 'Apologize Sincerely for a Past Mistake',
    descUrdu: 'اگر آپ کی وجہ سے کسی کا دل دکھا تھا تو بغیر کسی انا کے میسج یا کال کر کے معذرت کریں۔',
    categoryUrdu: 'معافی',
    points: 25,
    estimatedMinutes: 3
  },
  {
    id: 'deed-4-help-neighbor',
    titleUrdu: 'پڑوسی کی چھوٹی مدد',
    titleEn: 'Help a Neighbor with Ease',
    descUrdu: 'پڑوسی کے گھر کوئی کھانا بھیجیں یا ان کے راستے سے کوئی رکاوٹ دور کریں۔',
    categoryUrdu: 'پڑوسی',
    points: 20,
    estimatedMinutes: 5
  },
  {
    id: 'deed-5-home-chore-unasked',
    titleUrdu: 'گھر کا ایک کام بغیر کہے کرنا',
    titleEn: 'Do a Home Chore Without Being Asked',
    descUrdu: 'برتن دھونا، کمرہ سمیٹنا یا سودا لا کر گھر والوں کی تھکن کم کرنا۔',
    categoryUrdu: 'خاندان',
    points: 20,
    estimatedMinutes: 10
  },
  {
    id: 'deed-6-calm-response',
    titleUrdu: 'غصے والے کو مسکرا کر سکون سے جواب دینا',
    titleEn: 'Respond Calmly to an Angry Person',
    descUrdu: 'کسی تند مزاج انسان کے سخت جملے پر مسکرا کر نرمی سے جواب دیں اور جھگڑا ٹالیں۔',
    categoryUrdu: 'برداشت',
    points: 25,
    estimatedMinutes: 2
  },
  {
    id: 'deed-7-secret-charity',
    titleUrdu: 'کسی ضرورت مند کی خفیہ مدد',
    titleEn: 'Secret Charity or Kindness to the Needy',
    descUrdu: 'کسی خاکروب، محنت کش یا سفید پوش رشتہ دار کو بغیر کسی دکھاوے کے مالی یا عملی سہارا دینا۔',
    categoryUrdu: 'خدمت',
    points: 30,
    estimatedMinutes: 5
  },
  {
    id: 'deed-8-quality-time-child',
    titleUrdu: 'کسی بچے کو بغیر موبائل کے وقت دینا',
    titleEn: 'Give Screen-Free Quality Time to a Child',
    descUrdu: 'بچے کی بات سننا، اسے کوئی مفید کہانی سنانا یا اس کے ساتھ کھل کر کھیلنا۔',
    categoryUrdu: 'تربیت',
    points: 20,
    estimatedMinutes: 15
  },
  {
    id: 'deed-9-listen-to-elder',
    titleUrdu: 'کسی بزرگ کی بات بغیر ٹوکے مکمل سننا',
    titleEn: 'Listen Attentively to an Elder',
    descUrdu: 'بزرگ کے پاس بیٹھ کر ان کی پرانی یادیں یا نصیحتیں پورے ادب اور دلچسپی سے سنیں۔',
    categoryUrdu: 'بزرگ',
    points: 20,
    estimatedMinutes: 10
  },
  {
    id: 'deed-10-clean-pathway',
    titleUrdu: 'گلی یا راستے سے تکلیف دہ چیز ہٹانا',
    titleEn: 'Remove a Harmful Object from Path',
    descUrdu: 'سڑک یا گلی سے کانٹا، پتھر، شیشہ یا کچرا ہٹا کر راستے کا حق ادا کریں۔',
    categoryUrdu: 'معاشرہ',
    points: 20,
    estimatedMinutes: 3
  }
];

// ==========================================
// 10 SELF-REFLECTION DIAGNOSTIC QUESTIONS ("اپنے اخلاق کو پرکھیں")
// ==========================================
export const FAMILY_SELF_REFLECTION_QUESTIONS: SelfReflectionAuditQuestion[] = [
  {
    id: 'audit-q1-home-vs-outside',
    questionUrdu: 'کیا میں گھر کے اندر اپنے گھر والوں کے ساتھ ویسا ہی شائستہ اور نرم انسان ہوں جیسا باہر دوستوں اور محفل میں نظر آتا ہوں؟',
    questionEn: 'Am I as polite and kind to my family at home as I appear to friends and people outside?',
    categoryUrdu: 'کردار کا توازن',
    options: [
      { id: 'q1-opt1', labelUrdu: 'جی ہاں، گھر میں میرا رویہ ہمیشہ نرم اور قدردان ہوتا ہے۔', severity: 'good' },
      { id: 'q1-opt2', labelUrdu: 'کبھی کبھی تھکن میں گھر میں چڑچڑا پن اور سختی آ جاتی ہے۔', severity: 'moderate' },
      { id: 'q1-opt3', labelUrdu: 'سچ یہ ہے کہ باہر ہنستا ہوں مگر گھر میں غصہ اور رعب جھاڑتا ہوں۔', severity: 'needs_work' }
    ],
    growthAdviceUrdu: 'بہترین انسان وہ ہے جو اپنے اہل خانہ کے لیے بہترین ہو۔ گھر کے اندر کی شائستگی ہی اصل کردار کا امتحان ہے۔',
    sevenDayActionPlanUrdu: [
      'گھر میں داخل ہوتے ہی مسکرا کر سلام کریں۔',
      'گھر والوں کے لیے وہی الفاظ استعمال کریں جو معزز مہمان کے لیے کرتے ہیں۔',
      'تھکن ہو تو پہلے آرام کریں، پھر بات کریں۔'
    ]
  },
  {
    id: 'audit-q2-respect-giving',
    questionUrdu: 'کیا میں دوسروں سے عزت چاہتا ہوں مگر خود اپنے ملازمین، ماتحتوں اور چھوٹوں کو عزت دینے میں کنجوسی کرتا ہوں؟',
    questionEn: 'Do I demand respect from others while withholding respect from subordinates and young ones?',
    categoryUrdu: 'عزت اور انکساری',
    options: [
      { id: 'q2-opt1', labelUrdu: 'میں ہر انسان کو اس کی مالی یا سماجی حیثیت سے قطع نظر عزت دیتا ہوں۔', severity: 'good' },
      { id: 'q2-opt2', labelUrdu: 'بعض اوقات نادانستہ طور پر کمزوروں کو نظر انداز کر دیتا ہوں۔', severity: 'moderate' },
      { id: 'q2-opt3', labelUrdu: 'مجھے لگتا ہے کہ عزت کمانے کے لیے دوسروں پر رعب ڈالنا ضروری ہے۔', severity: 'needs_work' }
    ],
    growthAdviceUrdu: 'عزت دینے سے عزت بڑھتی ہے۔ جو دوسروں کے وقار کا خیال رکھتا ہے، اللہ اس کا وقار بلند کرتا ہے۔',
    sevenDayActionPlanUrdu: [
      'چوکیدار اور خاکروب کو "آپ" کہہ کر مخاطب کریں۔',
      'چھوٹوں کے سر پر شفقت سے ہاتھ رکھیں اور ان کی بات سنیں۔',
      'کسی کا مذاق اڑا کر محفل کو ہنسانے سے پرہیز کریں۔'
    ]
  },
  {
    id: 'audit-q3-admitting-mistakes',
    questionUrdu: 'جب مجھ سے کوئی غلطی ہو جاتی ہے تو کیا میں اسے کھلے دل سے تسلیم کر کے معافی مانگتا ہوں یا دفاعی بہانے بناتا ہوں؟',
    questionEn: 'When I make a mistake, do I openly admit it and apologize, or do I make defensive excuses?',
    categoryUrdu: 'اعتراف اور انا',
    options: [
      { id: 'q3-opt1', labelUrdu: 'میں غلطی کا فوری اعتراف کرتا ہوں اور معذرت مانگتا ہوں۔', severity: 'good' },
      { id: 'q3-opt2', labelUrdu: 'غلطی محسوس تو ہوتی ہے مگر معافی مانگتے ہوئے جھجھک ہوتی ہے۔', severity: 'moderate' },
      { id: 'q3-opt3', labelUrdu: 'میں کبھی غلطی نہیں مانتا، ہمیشہ دوسروں کو قصوروار ٹھہراتا ہوں۔', severity: 'needs_work' }
    ],
    growthAdviceUrdu: 'غلطی تسلیم کرنا انسان کو چھوٹا نہیں کرتا بلکہ اس کے قد اور کردار کو عظیم بناتا ہے۔',
    sevenDayActionPlanUrdu: [
      'غلطی ہو تو فوری کہیں: "یہ مجھ سے چوک ہوئی، معاف کیجیے گا۔"',
      'بہانے بازی اور الزام تراشی سے مکمل پرہیز کریں۔',
      'اصلاح کی نیت سے معافی کو دل کا سکون بنائیں۔'
    ]
  },
  {
    id: 'audit-q4-anger-harm',
    questionUrdu: 'کیا میں غصے کی حالت میں اپنی زبان یا رویے سے رشتوں کو گہری تکلیف پہنچاتا ہوں؟',
    questionEn: 'Do I inflict deep emotional harm on my relationships when I am in a state of anger?',
    categoryUrdu: 'ضبطِ نفس',
    options: [
      { id: 'q4-opt1', labelUrdu: 'میں غصے میں خاموش ہو جاتا ہوں اور کوئی تلخ بات نہیں کہتا۔', severity: 'good' },
      { id: 'q4-opt2', labelUrdu: 'کبھی کبھار سخت الفاظ نکل جاتے ہیں جن کا بعد میں پچھتاوا ہوتا ہے۔', severity: 'moderate' },
      { id: 'q4-opt3', labelUrdu: 'غصے میں میرا خود پر قابو نہیں رہتا اور میں توڑ پھوڑ یا گالی پر اتر آتا ہوں۔', severity: 'needs_work' }
    ],
    growthAdviceUrdu: 'غصہ پی جانے والے ہی درحقیقت طاقتور اور اللہ کے پسندیدہ بندے ہیں۔',
    sevenDayActionPlanUrdu: [
      'غصہ آئے تو فوری وضو کریں یا جگہ بدل دیں۔',
      'غصے میں طلاق یا بائیکاٹ کا کوئی لفظ زبان پر نہ لائیں۔',
      'روزانہ غصے پر قابو پانے کی مشق کریں۔'
    ]
  }
];

// ==========================================
// 16 SOCIETAL ISSUES BREAKDOWN ("معاشرتی مسائل کا قرآنی و عملی علاج")
// ==========================================
export const SOCIETAL_16_PROBLEMS_MASTER_DATA: SocietalProblemItem[] = [
  {
    id: 'soc-1-garbage',
    titleUrdu: 'گندگی اور کچرے کا غیر ذمہ دارانہ پھیلاؤ',
    titleEn: 'Garbage, Littering & Waste Mismanagement',
    iconSymbol: '🗑️',
    problemDefinitionUrdu: 'گلیوں، پارکوں اور شاہراہوں پر بلا جھجھک ریپرز، شاپر اور کچرا پھینکنا جس سے تعفن اور بیماریاں پھیلتی ہیں۔',
    howWeContributeUrdu: 'گاڑی یا بائیک سے جوس کا ڈبہ سڑک پر پھینک دینا، گھر کا کچرا خالی پلاٹ یا گلی کے کونے پر ڈال آنا۔',
    harmsAndConsequencesUrdu: 'سیوریج بلاک ہونا، مچھر اور ہیضہ پھیلنا، اور قومی سطح پر بے حسی کا تاثر جانا۔',
    whatWeCanChangePersonallyUrdu: [
      'کوئی بھی ریپر یا کچرا ڈسٹ بن ملنے تک اپنی جیب یا گاڑی میں رکھیں۔',
      'گھر کے کچرے کو تھیلی میں بند کر کے کوڑے دان میں ڈالیں۔',
      'اپنے بچوں کو سڑک پر کچرا نہ پھینکنے کی سخت تربیت دیں۔'
    ],
    startFromHomeUrdu: 'گھر کے دروازے اور گلی کے سامنے روزانہ خود جھاڑو دیں اور صفائی کا ماڈل بنیں۔',
    communityActionUrdu: 'اہل محلہ کے ساتھ مل کر گلی کے کونے پر ایک بڑا ڈھکن والا کوڑے دان لگوائیں۔'
  },
  {
    id: 'soc-2-corruption-bribery',
    titleUrdu: 'کرپشن، رشوت اور سفارش کا ناسور',
    titleEn: 'Corruption, Bribery & Favoritism',
    iconSymbol: '🛑',
    problemDefinitionUrdu: 'اپنا جائز یا ناجائز کام کرانے کے لیے پیسے دینا یا حقدار کا حق مار کر سفارش استعمال کرنا۔',
    howWeContributeUrdu: 'ٹریفک چالان سے بچنے کے لیے پولیس والے کو رشوت کی پیشکش کرنا، نوکری کے لیے میرٹ کے بجائے تعلقات استعمال کرنا۔',
    harmsAndConsequencesUrdu: 'لائق نوجوانوں کی مایوسی، اداروں کی تباہی اور اللہ کی رحمت سے محرومی۔',
    whatWeCanChangePersonallyUrdu: [
      'چالان یا قانونی کارروائی ہو تو رشوت دینے کے بجائے قانونی جرمانہ خوشی سے ادا کریں۔',
      'اپنے کام میں شفافیت رکھیں اور کسی کا حق نہ ماریں۔',
      'رشوت دینے اور لینے دونوں سے سخت نفرت کریں۔'
    ],
    startFromHomeUrdu: 'بچوں کو حرام لقمے کی ہلاکت خیزیاں سمجھائیں اور حلال پر فخر کرنا سکھائیں۔',
    communityActionUrdu: 'اپنے دفتر اور ادارے میں میرٹ اور شفافیت کے نظام کو فروغ دیں۔'
  },
  {
    id: 'soc-3-traffic-violations',
    titleUrdu: 'ٹریفک قوانین کی خلاف ورزی اور روڈ ریج',
    titleEn: 'Traffic Violations & Reckless Driving',
    iconSymbol: '🚦',
    problemDefinitionUrdu: 'ریڈ لائٹ توڑنا، ون وے کی خلاف ورزی، ہیلمٹ نہ پہننا، اور راستے میں بلاوجہ ہارن بجا کر ہنگامہ کھڑا کرنا۔',
    howWeContributeUrdu: 'جلدی پہنچنے کے لیے فٹ پاتھ یا راؤنڈ اباؤٹ کا غلط استعمال کرنا، ایمبولینس کو راستہ نہ دینا۔',
    harmsAndConsequencesUrdu: 'روزانہ سینکڑوں نوجوانوں کی معذوری اور اموات، ایمرجنسی مریضوں کا راستے میں دم توڑنا۔',
    whatWeCanChangePersonallyUrdu: [
      'چاہے سڑک خالی ہو، ریڈ سگنل پر ہمیشہ رکیں۔',
      'ایمبولینس کا سائرن سنتے ہی فوری بائیں طرف ہو کر راستہ دیں۔',
      'ہیلمٹ اور سیٹ بیلٹ کو اپنی حفاظت کی سنت سمجھیں۔'
    ],
    startFromHomeUrdu: 'کم عمر بچوں کو بائیک یا گاڑی کی چابی ہرگز نہ دیں۔',
    communityActionUrdu: 'سڑک پر صبر اور شائستگی کا مظاہرہ کر کے دوسروں کو راستہ دینے کی روایت قائم کریں۔'
  },
  {
    id: 'soc-4-adulteration-cheating',
    titleUrdu: 'ناپ تول میں کمی اور ملاوٹ',
    titleEn: 'Cheating in Weights & Food Adulteration',
    iconSymbol: '⚖️',
    problemDefinitionUrdu: 'دودھ، مصالحہ جات اور اشیائے خوردونوش میں ملاوٹ کرنا اور پیمانوں میں ڈنڈی مارنا۔',
    howWeContributeUrdu: 'کاروبار میں گاہک کو خراب مال چھپا کر دینا اور جھوٹ بول کر منافع کمانا۔',
    harmsAndConsequencesUrdu: 'کینسر اور بیماریوں کا عام ہونا، رزق سے برکت کا ختم ہو جانا اور اجتماعی عذاب۔',
    whatWeCanChangePersonallyUrdu: [
      'کاروبار میں خامی اور عیب کو پہلے بتائیں۔',
      'پورا تولو اور ترازو میں انصاف قائم رکھو۔',
      'تھوڑے حلال کو زیادہ حرام پر ترجیح دیں۔'
    ],
    startFromHomeUrdu: 'گھر میں رزقِ حلال کی برکتوں اور ملاوٹ کے گناہ پر گفتگو کریں۔',
    communityActionUrdu: 'ایماندار دکانداروں کی حوصلہ افزائی کریں اور ملاوٹ کرنے والوں کا بائیکاٹ کریں۔'
  }
];

// ==========================================
// 8 7-DAY HABIT CHALLENGES ("عملی اخلاقی چیلنجز")
// ==========================================
export const SEVEN_DAY_COMMUNITY_CHALLENGES: SevenDayCommunityChallenge[] = [
  {
    id: 'challenge-parents-love',
    titleUrdu: '۷ دن والدین خدمت و احترام Challenge',
    titleEn: '7-Day Parents Compassion Challenge',
    symbol: '❤️',
    taglineUrdu: 'روزانہ ایک خاص عمل سے والدین کا دل جیتیں اور دعائیں سمیٹیں',
    points: 150,
    days: [
      { dayNumber: 1, taskTitleUrdu: 'مسکرا کر سلام اور ہاتھ چومنا', taskDescUrdu: 'صبح اٹھ کر یا گھر داخل ہو کر محبت سے پیش آئیں۔' },
      { dayNumber: 2, taskTitleUrdu: 'پسندیدہ چائے یا ناشتہ', taskDescUrdu: 'ان کے لیے ان کی پسند کی چائے یا کھانا خود تیار کریں۔' },
      { dayNumber: 3, taskTitleUrdu: '۱۵ منٹ خاموش سماعت', taskDescUrdu: 'موبائل ایک طرف رکھ کر ان کے پرانے قصے اور باتیں سنیں۔' },
      { dayNumber: 4, taskTitleUrdu: 'طبی و جسمانی خدمت', taskDescUrdu: 'ان کے پاؤں یا سر دبائیں اور دوائیوں کی جانچ کریں۔' },
      { dayNumber: 5, taskTitleUrdu: 'سچی معافی اور دلجوئی', taskDescUrdu: 'ماضی کی کسی سختی پر خلوص سے معافی مانگیں۔' },
      { dayNumber: 6, taskTitleUrdu: 'ان کے دوستوں یا بہن بھائیوں کی خدمت', taskDescUrdu: 'والدین کے قریبی رشتہ داروں کی خیریت دریافت کریں۔' },
      { dayNumber: 7, taskTitleUrdu: 'دائمی خدمت کا عہد', taskDescUrdu: 'روزانہ ان کی دعائیں لینے کا پکا ارادہ کریں۔' }
    ]
  },
  {
    id: 'challenge-cleanliness',
    titleUrdu: '۷ دن صفائی اور ماحول Challenge',
    titleEn: '7-Day Cleanliness & Environment Challenge',
    symbol: '🌱',
    taglineUrdu: 'اپنے گھر، گلی اور راستے کو صاف رکھ کر ایمان کا عملی ثبوت دیں',
    points: 140,
    days: [
      { dayNumber: 1, taskTitleUrdu: 'زیرو لٹرنگ ڈے', taskDescUrdu: 'آج کوئی ریپر سڑک پر نہیں پھینکنا، جیب میں رکھیں۔' },
      { dayNumber: 2, taskTitleUrdu: 'گلی کا کچرا ہٹانا', taskDescUrdu: 'اپنے گھر کے سامنے کی گلی صاف کریں۔' },
      { dayNumber: 3, taskTitleUrdu: 'ایک پودا لگائیں', taskDescUrdu: 'گھر یا گلی میں ایک پودا لگائیں اور پانی دیں۔' },
      { dayNumber: 4, taskTitleUrdu: 'پانی کی بچت', taskDescUrdu: 'وضو اور دانت صاف کرتے وقت نل کھلا نہ چھوڑیں۔' },
      { dayNumber: 5, taskTitleUrdu: 'پلاسٹک کے استعمال میں کمی', taskDescUrdu: 'سودا سلف لانے کے لیے کپڑے کا بیگ استعمال کریں۔' },
      { dayNumber: 6, taskTitleUrdu: 'مسجد یا پبلک جگہ کی صفائی', taskDescUrdu: 'مسجد میں جوتے اور چٹائیاں سیدھی کریں۔' },
      { dayNumber: 7, taskTitleUrdu: 'کمیونٹی کلین اپ', taskDescUrdu: 'دوستوں کے ساتھ مل کر پارک یا گلی کو چمکائیں۔' }
    ]
  },
  {
    id: 'challenge-anger-control',
    titleUrdu: '۷ دن غصہ کنٹرول اور صبر Challenge',
    titleEn: '7-Day Anger Management & Patience Challenge',
    symbol: '🔥',
    taglineUrdu: 'اشتعال کے وقت خاموش رہ کر اپنی عقل کو فتح یاب بنائیں',
    points: 150,
    days: [
      { dayNumber: 1, taskTitleUrdu: '۱۰ سیکنڈ کا وقفہ', taskDescUrdu: 'جب غصہ آئے تو بولنے سے پہلے ۱۰ سیکنڈ رکیں۔' },
      { dayNumber: 2, taskTitleUrdu: 'پانی پینا اور وضو', taskDescUrdu: 'غصے کے وقت فوری بیٹھ جائیں اور پانی پیئیں۔' },
      { dayNumber: 3, taskTitleUrdu: 'نرمی سے جواب', taskDescUrdu: 'کسی تلخ بات پر مسکرا کر نرم لہجے میں بات کریں۔' },
      { dayNumber: 4, taskTitleUrdu: 'روڈ پر صبر', taskDescUrdu: 'ٹریفک میں کسی کی غلطی پر ہارن بجانے اور گالی سے پرہیز کریں۔' },
      { dayNumber: 5, taskTitleUrdu: 'گھر میں شائستگی', taskDescUrdu: 'بچوں یا ملازمین پر چیخنے کے بجائے پیار سے سمجھائیں۔' },
      { dayNumber: 6, taskTitleUrdu: 'دل سے معافی', taskDescUrdu: 'کسی پرانے ناراض شخص کو دل سے معاف کر دیں۔' },
      { dayNumber: 7, taskTitleUrdu: 'پہلوان بننے کا جشن', taskDescUrdu: 'نبی کریم ﷺ کے فرمان کے مطابق ضبطِ نفس پر اللہ کا شکر ادا کریں۔' }
    ]
  }
];

// Helper search function supporting Urdu, Roman Urdu, and English
export function searchFamilyAndSocietyMaster(query: string): FamilyTopicItem[] {
  if (!query || !query.trim()) return FAMILY_AND_SOCIETY_40_TOPICS;
  const q = query.toLowerCase().trim();

  return FAMILY_AND_SOCIETY_40_TOPICS.filter((item) => {
    return (
      item.titleUrdu.includes(q) ||
      item.titleEn.toLowerCase().includes(q) ||
      item.romanUrdu.toLowerCase().includes(q) ||
      item.taglineUrdu.includes(q) ||
      item.taglineEn.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });
}
