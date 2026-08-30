export interface QuranicWordMeaning {
  wordArabic: string;
  wordUrdu: string;
  wordEn: string;
  rootOrGrammar?: string;
}

export interface QuranicDepthLevels {
  beginner: string;
  intermediate: string;
  advanced: string;
  deepThinker: string;
}

export interface QuranicTopicItem {
  id: string;
  slug: string;
  categoryKey: string;
  categoryTitleUrdu: string;
  categoryTitleEn: string;
  titleUrdu: string;
  titleEn: string;
  taglineUrdu: string;
  taglineEn: string;
  arabicVerse: string;
  surahReference: string; // e.g. "سورۃ الحجرات: ۶"
  surahNumber: number;
  ayahNumber: string;
  translationUrdu: string;
  translationEn: string;
  keyWords: QuranicWordMeaning[];
  coreMessageUrdu: string;
  coreMessageEn: string;
  contemplationQuestionsUrdu: string[];
  contemplationQuestionsEn: string[];
  modernLifeRelevanceUrdu: string;
  modernLifeRelevanceEn: string;
  selfAssessmentPromptUrdu: string;
  selfAssessmentPromptEn: string;
  practicalActionUrdu: string;
  practicalActionEn: string;
  depthLevels: QuranicDepthLevels;
  referenceCitation: string;
  searchKeywords: string[];
  coverGradient: string;
  badgeUrdu: string;
  badgeEn: string;
  points: number;
}

export interface QuranicCategoryMeta {
  id: string;
  titleUrdu: string;
  titleEn: string;
  descUrdu: string;
  iconName: string;
  count: number;
}

export interface DailyThoughtQuestion {
  id: string;
  questionUrdu: string;
  questionEn: string;
  contextUrdu: string;
  contextEn: string;
  practicalExerciseUrdu: string;
  practicalExerciseEn: string;
  relatedTopicId?: string;
  quranicReference?: string;
}

export interface SelfReflectionDiagnosticQuestion {
  id: string;
  questionUrdu: string;
  questionEn: string;
  categoryUrdu: string;
  categoryEn: string;
  options: {
    id: string;
    labelUrdu: string;
    labelEn: string;
    severity: 'strong' | 'moderate' | 'needs_work';
  }[];
  weaknessFeedbackUrdu: string;
  weaknessFeedbackEn: string;
  sevenDayActionPlanUrdu: string[];
  sevenDayActionPlanEn: string[];
}

export interface SocietalIssueModule {
  id: string;
  titleUrdu: string;
  titleEn: string;
  icon: string;
  problemSummaryUrdu: string;
  problemSummaryEn: string;
  howWeContributeUrdu: string;
  howWeContributeEn: string;
  quranicPrincipleUrdu: string;
  quranicPrincipleEn: string;
  quranVerseReference: string;
  quranVerseText: string;
  concreteSolutionUrdu: string[];
  concreteSolutionEn: string[];
  todaysIndividualActionUrdu: string;
  todaysIndividualActionEn: string;
}

export interface CriticalThinkingLesson {
  id: string;
  conceptUrdu: string;
  conceptEn: string;
  termEnglish: string;
  definitionUrdu: string;
  definitionEn: string;
  everydayExampleUrdu: string;
  everydayExampleEn: string;
  quranicTeachingUrdu: string;
  quranicReference: string;
  habitBuildingQuestionsUrdu: string[];
  practiceExerciseUrdu: string;
}

export interface DailyPracticalDeed {
  id: string;
  titleUrdu: string;
  titleEn: string;
  descUrdu: string;
  descEn: string;
  categoryUrdu: string;
  estimatedMinutes: number;
  points: number;
  quranicLink: string;
}

export interface OneAyahOneProblemLesson {
  id: string;
  titleUrdu: string;
  titleEn: string;
  categoryUrdu: string;
  ayahArabic: string;
  surahReference: string;
  ayahTranslationUrdu: string;
  realLifeProblemUrdu: string;
  rootCauseUrdu: string;
  practicalLessonUrdu: string;
  actionChallengeUrdu: string;
  iconName?: string;
  points: number;
}

export interface CognitiveBiasModule {
  id: string;
  titleUrdu: string;
  termEnglish: string;
  definitionUrdu: string;
  howOurMindTrapsUsUrdu: string;
  relatableStoryUrdu: string;
  quranicCureVerse: string;
  quranicCureReference: string;
  quranicCureExplanationUrdu: string;
  diagnosticQuestionUrdu: string;
  dailyThinkingCheckUrdu: string;
}

export interface ClaimVsEvidenceItem {
  id: string;
  statementUrdu: string;
  isEvidence: boolean; // true if verifiable evidence, false if mere assertion/claim
  categoryUrdu: string;
  explanationUrdu: string;
  quranicRuleUrdu: string;
  quranReference: string;
}

export interface HearsayVsFactItem {
  id: string;
  scenarioTitleUrdu: string;
  scenarioDescriptionUrdu: string;
  hearsayAspectUrdu: string;
  howToVerifyUrdu: string[];
  quranicPrincipleUrdu: string;
  quranReference: string;
  takeawayUrdu: string;
}

export interface LifeQuestionInQuran {
  id: string;
  questionUrdu: string;
  questionEn: string;
  categoryUrdu: string;
  whyWeAskThisUrdu: string;
  quranicPerspectiveUrdu: string;
  keyAyahArabic: string;
  surahReference: string;
  ayahTranslationUrdu: string;
  practicalApplicationUrdu: string;
  mindsetShiftUrdu: string;
}

export interface WeeklyDeepIntellectualTopic {
  id: string;
  titleUrdu: string;
  titleEn: string;
  themeUrdu: string;
  summaryUrdu: string;
  coreDilemmaUrdu: string;
  classicalAndModernPerspectivesUrdu: string[];
  quranicFrameworkUrdu: string;
  quranicAyahs: {
    arabic: string;
    reference: string;
    translationUrdu: string;
  }[];
  philosophicalTakeawayUrdu: string;
  weeklyReflectionChallengeUrdu: string;
}

export interface ToughQuestionBalancedAnswer {
  id: string;
  questionUrdu: string;
  categoryUrdu: string;
  commonMisconceptionUrdu: string;
  balancedIntellectualAnswerUrdu: string;
  quranicGroundingUrdu: string;
  surahReference: string;
  keyAyahArabic: string;
  ayahTranslationUrdu: string;
  keyTakeawayUrdu: string;
}

export interface KnowledgeToCharacterStage {
  stage: number;
  titleUrdu: string;
  titleEn: string;
  arabicKeyword: string;
  descriptionUrdu: string;
  quranicLink: string;
  indicatorsOfSuccessUrdu: string[];
  commonPitfallsUrdu: string[];
  actionStepUrdu: string;
}

// -------------------------------------------------------------
// 1. 26 MASTER CATEGORIES
// -------------------------------------------------------------
export const QURANIC_WISDOM_CATEGORIES: QuranicCategoryMeta[] = [
  { id: 'think-with-quran', titleUrdu: 'قرآن سے سوچنا سیکھیں', titleEn: 'Think with Quran', descUrdu: 'قرآنی طرزِ فکر، غیر جذباتی تدبر اور معقولیت', iconName: 'Brain', count: 5 },
  { id: 'ayah-contemplation', titleUrdu: 'آیات پر غور و فکر', titleEn: 'Ayah Contemplation', descUrdu: 'آیات کے اندر چھپی حکمت اور زندگی کے رہنما اصول', iconName: 'BookOpen', count: 6 },
  { id: 'self-reflection', titleUrdu: 'اپنے آپ کا جائزہ', titleEn: 'Self-Reflection', descUrdu: 'محاسبۂ نفس اور ذاتی کوتاہیوں کا ادراک', iconName: 'UserCheck', count: 5 },
  { id: 'character-morals', titleUrdu: 'اخلاق اور کردار', titleEn: 'Morals & Character', descUrdu: 'عاجزی، نرمی، باوقار گفتگو اور بلند اخلاق', iconName: 'Heart', count: 6 },
  { id: 'truth-trust', titleUrdu: 'سچائی اور امانت', titleEn: 'Truth & Trust', descUrdu: 'جھوٹ سے اجتناب، وعدے کی پاسداری اور امانت داری', iconName: 'ShieldCheck', count: 5 },
  { id: 'justice-fairness', titleUrdu: 'عدل اور انصاف', titleEn: 'Justice & Fairness', descUrdu: 'حق کی حمایت، غیر جانبداری اور برابری', iconName: 'Scale', count: 5 },
  { id: 'parents-family', titleUrdu: 'والدین اور خاندان', titleEn: 'Parents & Family', descUrdu: 'ماں باپ کے حقوق، صلہ رحمی اور گھر کا سکون', iconName: 'Home', count: 4 },
  { id: 'neighbors-society', titleUrdu: 'پڑوسی اور معاشرہ', titleEn: 'Neighbors & Society', descUrdu: 'علاقے کے حقوق، صفائی اور باہمی ہمدردی', iconName: 'Users', count: 5 },
  { id: 'knowledge-research', titleUrdu: 'علم اور تحقیق', titleEn: 'Knowledge & Research', descUrdu: 'معلومات کی تصدیق، کتاب سے دوستی اور گہرائی', iconName: 'Search', count: 5 },
  { id: 'intellect-tadabbur', titleUrdu: 'عقل اور تدبر', titleEn: 'Intellect & Reason', descUrdu: 'عقل کا صحیح استعمال اور اندھی تقلید کی نفی', iconName: 'Lightbulb', count: 5 },
  { id: 'asking-questions', titleUrdu: 'سوال کرنا سیکھیں', titleEn: 'Art of Questioning', descUrdu: 'تلاشِ حق کے لیے شائستہ اور گہرے سوالات', iconName: 'HelpCircle', count: 4 },
  { id: 'critical-thinking', titleUrdu: 'دلیل اور تنقیدی سوچ', titleEn: 'Evidence & Critical Thinking', descUrdu: 'دعویٰ اور دلیل میں فرق، غیر جذباتی فیصلہ', iconName: 'Target', count: 5 },
  { id: 'false-info', titleUrdu: 'غلط معلومات کو پہچاننا', titleEn: 'Detecting Misinformation', descUrdu: 'افواہوں کی جانچ اور سنسنی سے پرہیز', iconName: 'AlertTriangle', count: 4 },
  { id: 'avoiding-blind-following', titleUrdu: 'اندھی تقلید سے بچنا', titleEn: 'Avoiding Blind Conformity', descUrdu: 'رواج اور بھیڑ چال کے بجائے دلیل کی پیروی', iconName: 'Compass', count: 4 },
  { id: 'prejudice-division', titleUrdu: 'تعصب اور گروہی تقسیم', titleEn: 'Prejudice & Polarization', descUrdu: 'لسانی، نسلی و مسلکی منافرت کا قرآنی علاج', iconName: 'Layers', count: 4 },
  { id: 'time-life', titleUrdu: 'وقت اور زندگی', titleEn: 'Time & Purpose', descUrdu: 'عمر کی قدر، فضولیات سے دوری اور مقصدیت', iconName: 'Clock', count: 4 },
  { id: 'halal-livelihood', titleUrdu: 'رزق اور حلال کمائی', titleEn: 'Halal Livelihood', descUrdu: 'دیانت دارانہ روزگار، ملاوٹ اور دھوکے سے پرہیز', iconName: 'Briefcase', count: 5 },
  { id: 'gratitude-responsibility', titleUrdu: 'شکر اور ذمہ داری', titleEn: 'Gratitude & Responsibility', descUrdu: 'نعمتوں کا اعتراف اور اپنے اعمال کی جوابدہی', iconName: 'Sparkles', count: 4 },
  { id: 'human-universe', titleUrdu: 'انسان اور کائنات', titleEn: 'Human & Universe', descUrdu: 'نظامِ فلکیات، زمین و آسمان کی نشانیاں', iconName: 'Globe', count: 4 },
  { id: 'nature-environment', titleUrdu: 'قدرت اور ماحول', titleEn: 'Nature & Environment', descUrdu: 'پانی کی حفاظت، شجرکاری اور زمین میں فساد نہ پھیلانا', iconName: 'Sprout', count: 4 },
  { id: 'youth-future', titleUrdu: 'نوجوان اور مستقبل', titleEn: 'Youth & Future', descUrdu: 'اصحابِ کہف کا جذبہ، صلاحیتوں کا مثبت استعمال', iconName: 'Flame', count: 4 },
  { id: 'societal-issues', titleUrdu: 'معاشرتی مسائل کا حل', titleEn: 'Solving Societal Ills', descUrdu: 'کرپشن، رشوت، گندگی اور ناانصافی کا علاج', iconName: 'Wrench', count: 5 },
  { id: 'self-correction', titleUrdu: 'اپنی اصلاح (تزکیہ)', titleEn: 'Self-Correction & Growth', descUrdu: 'تکبر، حسد اور غصے سے دل کی صفائی', iconName: 'TrendingUp', count: 4 },
  { id: 'rights-of-others', titleUrdu: 'دوسروں کے حقوق (حقوق العباد)', titleEn: 'Rights of Others', descUrdu: 'کمزوروں، یتیموں، مسافروں اور ماتحتوں کا حق', iconName: 'HeartHandshake', count: 5 },
  { id: 'dunya-akhirah', titleUrdu: 'دنیا اور آخرت کا توازن', titleEn: 'Balance in Life & Hereafter', descUrdu: 'دنیا میں بہترین کردار اور آخرت کی فکر', iconName: 'Award', count: 4 },
  { id: 'benefit-humanity', titleUrdu: 'انسانیت کے لیے فائدہ مند بننا', titleEn: 'Benefiting Humanity', descUrdu: '”خیر الناس من ینفع الناس“ کا عملی نمونہ', iconName: 'Sparkles', count: 5 },
];

// -------------------------------------------------------------
// 2. MASTER QURANIC TOPICS & REFLECTIONS
// -------------------------------------------------------------
export const QURANIC_TOPICS_MASTER_DATA: QuranicTopicItem[] = [
  // 1. تحقیق اور تصدیق (Research & Verification)
  {
    id: 'topic-hujurat-verification',
    slug: 'verify-information-before-acting',
    categoryKey: 'false-info',
    categoryTitleUrdu: 'غلط معلومات کو پہچاننا',
    categoryTitleEn: 'Detecting Misinformation',
    titleUrdu: 'سنی سنائی بات کی تصدیق: معلومات اور افواہ میں فرق',
    titleEn: 'Information Verification: Distinguishing Fact from Rumor',
    taglineUrdu: 'کسی خبر پر یقین کرنے یا آگے پھیلانے سے پہلے اس کی خود تحقیق کرنا',
    taglineEn: 'Independently verifying any news before believing or sharing it',
    arabicVerse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَن تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُمْ نَادِمِينَ',
    surahReference: 'سورۃ الحجرات: ۶',
    surahNumber: 49,
    ayahNumber: '6',
    translationUrdu: 'اے لوگو جو ایمان لائے ہو! اگر کوئی فاسق (غیر معتبر شخص) تمہارے پاس کوئی خبر لے کر آئے تو خوب تحقیق کر لیا کرو، کہیں ایسا نہ ہو کہ تم نادانی میں کسی قوم یا شخص کو نقصان پہنچا بیٹھو، پھر اپنے کیے پر شرمندہ ہو جاؤ۔',
    translationEn: 'O you who believe! If a troublemaker brings you news, verify it thoroughly, lest you harm people in ignorance and then become regretful over what you have done.',
    keyWords: [
      { wordArabic: 'فَتَبَيَّنُوا', wordUrdu: 'خوب تحقیق و چھان بین کرو', wordEn: 'Verify and investigate thoroughly', rootOrGrammar: 'ب-ی-ن (واضح کرنا)' },
      { wordArabic: 'نَبَإٍ', wordUrdu: 'اہم خبر / اطلاع', wordEn: 'Significant news / report', rootOrGrammar: 'ن-ب-أ' },
      { wordArabic: 'بِجَهَالَةٍ', wordUrdu: 'نادانی یا جلد بازی میں', wordEn: 'In ignorance or haste', rootOrGrammar: 'ج-ہ-ل' },
      { wordArabic: 'نَادِمِينَ', wordUrdu: 'پچھتانے والے / شرمندہ', wordEn: 'Regretful / remorseful', rootOrGrammar: 'ن-د-م' },
    ],
    coreMessageUrdu: 'قرآن انسانی ذہن کو ذمہ داری سکھاتا ہے: کوئی بھی شخص صرف اس لیے سچا نہیں ہو جاتا کہ اس نے جذباتی بات کہی۔ سوشل میڈیا یا محلے کی ہر بات بغیر مصدقہ ثبوت کے آگے بڑھانا سنگین گناہ اور معاشرتی تباہی کا سبب ہے۔',
    coreMessageEn: 'The Quran demands critical verification. Emotional claims do not make statements true. Forwarding unverified rumors causes irreversible social and personal harm.',
    contemplationQuestionsUrdu: [
      'کیا میں واٹس ایپ، فیس بک یا محفل میں سنی ہوئی بات کو بغیر تحقیق آگے بھیجتا ہوں؟',
      'کیا میں نے کبھی کسی انسان کے بارے میں سنی سنائی بات سن کر اپنی رائے قائم کر لی؟',
      'جب کوئی خبر میرے جذبات کو ابھارے، تو کیا میں فوراً رک کر سوچتا ہوں کہ اس کا اصل ماخذ (Source) کیا ہے؟',
    ],
    contemplationQuestionsEn: [
      'Do I forward WhatsApp or social media messages without checking primary sources?',
      'Have I ever judged a person based solely on hearsay?',
      'When news triggers strong emotions, do I pause to investigate the primary evidence?',
    ],
    modernLifeRelevanceUrdu: 'آج کے ڈیجیٹل دور میں جعلی ویڈیوز (Deepfakes)، ایڈیٹ شدہ تصاویر اور سنسنی خیز سرخیاں عام ہیں۔ یہ آیت ہمیں سکھاتی ہے کہ "کلک" یا "شیئر" کا بٹن دبانے سے پہلے سچائی جاننا ہر انسان کی اخلاقی ذمہ داری ہے۔',
    modernLifeRelevanceEn: 'In our era of deepfakes and clickbait, this verse establishes the foundational digital ethics rule: never react or amplify without primary verification.',
    selfAssessmentPromptUrdu: 'پچھلے ۷ دنوں میں آپ نے جو خبریں یا باتیں سن کر یقین کیا، ان میں سے کتنی باتوں کا ثبوت آپ نے خود اپنی آنکھوں سے دیکھا تھا؟',
    selfAssessmentPromptEn: 'Of the news stories you believed over the past week, how many did you personally verify through primary evidence?',
    practicalActionUrdu: 'آج سوشل میڈیا یا گفتگو میں کوئی بھی بات سنیں تو فوراً اس کا اصل ماخذ تلاش کریں، اور جب تک تسلی نہ ہو اسے کسی دوسرے کو نہ بتائیں۔',
    practicalActionEn: 'Today, before repeating or forwarding any information, trace its original primary source. If uncertain, remain silent.',
    depthLevels: {
      beginner: 'سنی سنائی بات کو آگے مت پھیلائیں۔ پہلے تصدیق کریں۔',
      intermediate: 'خبر لانے والے کے مفاد، جانبداری اور بات کے پس منظر کا جائزہ لینے کی عادت ڈالیں۔',
      advanced: 'ڈیجیٹل سورس ویریفکیشن، کراس چیکنگ اور سنسنی پھیلانے والے الگورتھمز کے نفسیاتی اثرات کو سمجھیں۔',
      deepThinker: 'معاشرتی ابلاغ، اجتماعی سچائی، اور افواہ سازی کی سیاسی و معاشی حرکیات کا قرآنی اصولِ عدل کی روشنی میں فلسفیانہ تجزیہ۔',
    },
    referenceCitation: 'قرآن حکیم، سورۃ الحجرات (۴۹)، آیت ۶ — تفسیر ابن کثیر و تفہیم القرآن',
    searchKeywords: ['jhoot', 'tahqeeq', 'khabar', 'fake news', 'social media', 'hujurat', 'afwah', 'verification', 'source', 'misinformation'],
    coverGradient: 'from-amber-800 via-slate-900 to-emerald-950',
    badgeUrdu: 'بنیادی فکری اصول',
    badgeEn: 'Core Principle',
    points: 25,
  },

  // 2. عدل اور غیر جانبداری (Justice Even Against Self)
  {
    id: 'topic-nisa-justice',
    slug: 'justice-and-fairness-even-against-self',
    categoryKey: 'justice-fairness',
    categoryTitleUrdu: 'عدل اور انصاف',
    categoryTitleEn: 'Justice & Fairness',
    titleUrdu: 'انصاف کا پیمانہ: اپنے اور اپنوں کے خلاف بھی سچ کا ساتھ',
    titleEn: 'Absolute Justice: Standing for Truth Even Against Oneself',
    taglineUrdu: 'رشتہ داری، دولت یا ذاتی مفاد کی خاطر انصاف کے اصول کو نہ توڑنا',
    taglineEn: 'Refusing to compromise truth for kinship, wealth, or self-interest',
    arabicVerse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ وَلَوْ عَلَىٰ أَنفُسِكُمْ أَوِ الْوَالِدَيْنِ وَالأَقْرَبِينَ',
    surahReference: 'سورۃ النساء: ۱۳۵',
    surahNumber: 4,
    ayahNumber: '135',
    translationUrdu: 'اے لوگو جو ایمان لائے ہو! انصاف پر مضبوطی سے قائم رہنے والے اور اللہ کے واسطے سچی گواہی دینے والے بنو، خواہ یہ گواہی تمہاری اپنی ذات، یا تمہارے والدین اور قریبی رشتہ داروں ہی کے خلاف کیوں نہ پڑتی ہو۔',
    translationEn: 'O you who believe! Stand out firmly for justice as witnesses to Allah, even if it be against yourselves, or your parents, or your closest relatives.',
    keyWords: [
      { wordArabic: 'قَوَّامِينَ', wordUrdu: 'مضبوطی سے ڈٹ جانے والے', wordEn: 'Firmly standing and upholding', rootOrGrammar: 'ق-و-م' },
      { wordArabic: 'بِالْقِسْطِ', wordUrdu: 'عدل اور برابری کے ساتھ', wordEn: 'With balance and absolute justice', rootOrGrammar: 'ق-س-ط' },
      { wordArabic: 'شُهَدَاءَ لِلَّهِ', wordUrdu: 'صرف اللہ کی خاطر گواہ', wordEn: 'Witnesses purely for Divine sake', rootOrGrammar: 'ش-ہ-د' },
    ],
    coreMessageUrdu: 'انصاف کا تقاضا ہے کہ صحیح کو صحیح اور غلط کو غلط کہا جائے، چاہے غلطی اپنے بھائی، بیٹے یا دوست کی ہو، اور سچ کسی مخالف یا ناپسندیدہ شخص کے پاس ہو۔ ذاتی پسند ناپسند انصاف کی راہ میں رکاوٹ نہیں بننی چاہیے۔',
    coreMessageEn: 'Justice requires recognizing right as right and wrong as wrong, even when the mistake belongs to our beloved family member and the truth is with an adversary.',
    contemplationQuestionsUrdu: [
      'جب میرے گھر یا دوستوں میں کوئی جھگڑا ہوتا ہے، کیا میں اندھا دھند اپنے ساتھی کی حمایت کرتا ہوں یا انصاف دیکھتا ہوں؟',
      'کیا میں نے کبھی اپنی غلطی تسلیم کر کے دوسرے کے حق کا اعتراف کیا ہے؟',
      'کیا میں طاقتور کے سامنے سچ بولنے اور کمزور کا ساتھ دینے کی ہمت رکھتا ہوں؟',
    ],
    contemplationQuestionsEn: [
      'During family or friend disputes, do I blindly back my side, or stand objectively for justice?',
      'Have I ever openly admitted my mistake and restored another person’s rightful claim?',
      'Do I possess the moral courage to speak truth before power and protect the vulnerable?',
    ],
    modernLifeRelevanceUrdu: 'ہمارے معاشرے میں قبائلی، خاندانی اور سیاسی طرف داری انصاف کو کھا جاتی ہے۔ اگر ہم چاہتے ہیں کہ ملک میں عدل ہو تو پہلے اپنے گھر، دکان اور دفتر میں اپنوں کی غلطی پر پردہ ڈالنے کے بجائے انصاف کا اصول نافذ کریں۔',
    modernLifeRelevanceEn: 'Tribalism, nepotism, and partisanship destroy societal harmony. Rule of law begins when we refuse to shield wrongdoing committed by our own circle.',
    selfAssessmentPromptUrdu: 'کیا آپ میں اتنی اخلاقی جرات ہے کہ اگر آپ کا قریبی دوست کسی کا حق مارے تو آپ سچ کا ساتھ دیں؟',
    selfAssessmentPromptEn: 'Do you possess the moral fortitude to stand for truth if your closest friend infringes on another’s right?',
    practicalActionUrdu: 'آج کسی بھی گفتگو یا معاملے میں اپنی یا اپنے قریبی شخص کی غلطی کا دیانت داری سے اعتراف کریں اور بلا جھجھک درست بات کا ساتھ دیں۔',
    practicalActionEn: 'In your interactions today, honestly acknowledge an error if you made one, and uphold fairness without excuses.',
    depthLevels: {
      beginner: 'ہر معاملے میں سچ بولیں، چاہے اپنا نقصان ہی کیوں نہ ہو۔',
      intermediate: 'خاندانی جھگڑوں اور دوستوں کے معاملات میں غیر جانبدار ثالث بننے کی مشق کریں۔',
      advanced: 'قانونی، معاشی اور معاشرتی ناانصافی کے خلاف اصولی آواز اٹھانے اور ادارہ جاتی دیانت قائم کرنے کا فہم۔',
      deepThinker: 'قرآنی نظریۂ انصاف (Cosmic & Moral Justice) اور اس کا جدید عدالتی و سماجی فلسفوں (Distributive & Retributive Justice) سے تقابلی جائزہ۔',
    },
    referenceCitation: 'قرآن حکیم، سورۃ النساء (۴)، آیت ۱۳۵ — التفسیر الکبیر و فی ظلال القرآن',
    searchKeywords: ['insaf', 'adl', 'justice', 'haq', 'nisa', 'gawahi', 'truth', 'fairness', 'nepotism', 'impartiality'],
    coverGradient: 'from-teal-900 via-slate-900 to-emerald-950',
    badgeUrdu: 'انصاف کا قانون',
    badgeEn: 'Rule of Justice',
    points: 30,
  },

  // 3. عقل، تفکر اور کائنات میں نشانیاں (Reason & Nature)
  {
    id: 'topic-imran-intellect',
    slug: 'contemplation-in-creation-and-intellect',
    categoryKey: 'intellect-tadabbur',
    categoryTitleUrdu: 'عقل اور تدبر',
    categoryTitleEn: 'Intellect & Reason',
    titleUrdu: 'اہلِ عقل کی پہچان: کائنات پر غور، علم اور مقصدِ حیات',
    titleEn: 'The Mark of Intellect: Reflecting upon Creation and Cosmic Purpose',
    taglineUrdu: 'دنیا کی ہر چیز پر اندھا دھند گزر جانے کے بجائے اس میں کارفرما قوانین کو سمجھنا',
    taglineEn: 'Refusing to pass blindly by creation, seeking the deep laws behind nature',
    arabicVerse: 'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الأَلْبَابِ ۝ الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلا',
    surahReference: 'سورۃ آل عمران: ۱۹۰-۱۹۱',
    surahNumber: 3,
    ayahNumber: '190-191',
    translationUrdu: 'بے شک آسمانوں اور زمین کی پیدائش میں اور رات اور دن کے باری باری آنے میں عقل رکھنے والوں کے لیے بڑی نشانیاں ہیں۔ وہ جو اٹھتے، بیٹھتے اور اپنے پہلوؤں پر لیٹتے ہوئے اللہ کو یاد کرتے ہیں اور آسمانوں و زمین کی خلقت میں گہرا غور و فکر کرتے ہیں (اور پکار اٹھتے ہیں کہ) اے ہمارے رب! تو نے یہ سب کچھ بے مقصد نہیں بنایا۔',
    translationEn: 'Indeed, in the creation of the heavens and the earth, and the alternation of night and day, are signs for people of understanding. Those who remember Allah standing, sitting, and lying on their sides, and contemplate the creation of the heavens and earth, saying: Our Lord, You have not created all this without purpose.',
    keyWords: [
      { wordArabic: 'لِّأُولِي الأَلْبَابِ', wordUrdu: 'خالص عقل و بصیرت والے لوگ', wordEn: 'People of deep insight and intellect', rootOrGrammar: 'ل-ب-ب (مغز و دانائی)' },
      { wordArabic: 'يَتَفَكَّرُونَ', wordUrdu: 'وہ گہرا غور و فکر اور تحقیق کرتے ہیں', wordEn: 'They actively contemplate and investigate', rootOrGrammar: 'ف-ک-ر' },
      { wordArabic: 'بَاطِلا', wordUrdu: 'بے مقصد، فضول یا بغیر حکمت کے', wordEn: 'Aimlessly, in vain, or without purpose', rootOrGrammar: 'ب-ط-ل' },
    ],
    coreMessageUrdu: 'قرآن کے مطابق سچا مومن وہ ہے جس کے دل میں خدا کی یاد اور دماغ میں کائنات کے اسرار پر غور و تحقیق ہو۔ ایمان عقل کو بند کرنے کا نام نہیں، بلکہ عقل، سائنس اور مشاہدے کو جگانے کا نام ہے۔',
    coreMessageEn: 'True devotion combines moral remembrance with active scientific and intellectual exploration. Faith awakens curiosity, rigorous questioning, and systematic observation.',
    contemplationQuestionsUrdu: [
      'کیا میں نے کبھی آسمان، درختوں، پانی اور انسانی جسم کی بناوٹ کو دیکھ کر اس کے پیچھے پوشیدہ حکمت پر غور کیا؟',
      'کیا میں زندگی کو ایک مقصد سمجھتا ہوں یا صرف وقت گزار رہا ہوں؟',
      'میں نئی چیزیں سیکھنے اور کائنات کے قوانین کو سمجھنے کے لیے روزانہ کتنا وقت دیتا ہوں؟',
    ],
    contemplationQuestionsEn: [
      'Have I contemplated the profound engineering behind nature, ecosystems, and human physiology?',
      'Do I view life with conscious purpose or passive drift?',
      'How much time do I invest daily in discovering new truths and expanding my intellect?',
    ],
    modernLifeRelevanceUrdu: 'سائنسی تحقیق، ماحول کی حفاظت، پودے لگانا، صاف توانائی اور ٹیکنالوجی کی دریافتیں دراصل کائنات کے اس تدبر کا حصہ ہیں جن کی طرف قرآن ہمیں بار بار متوجہ کرتا ہے۔',
    modernLifeRelevanceEn: 'Scientific research, ecological conservation, clean energy, and tech innovations are direct expressions of the cosmic reflection demanded by the Quran.',
    selfAssessmentPromptUrdu: 'کیا آپ کا ذہن سوال پوچھنے اور کائنات کے حقائق جاننے کا متلاشی ہے، یا آپ روایتی سوچ کے قیدی ہیں؟',
    selfAssessmentPromptEn: 'Is your mind actively seeking answers and truth, or trapped in passive mental conformity?',
    practicalActionUrdu: 'آج ۱۰ منٹ خاموشی سے کھلے آسمان یا کسی پودے اور درخت کا باریک بینی سے مشاہدہ کریں اور زندگی کے مقصد پر غور کریں۔',
    practicalActionEn: 'Spend 10 minutes in quiet nature observing plant biology or the sky, deeply meditating on the conscious purpose of your existence.',
    depthLevels: {
      beginner: 'قدرت کی خوبصورتی اور اس کے بنانے والے کی کاریگری کا مشاہدہ کریں۔',
      intermediate: 'سائنسی حقائق اور کائنات کے منظم قوانین کو سمجھ کر اپنے علم میں اضافہ کریں۔',
      advanced: 'قرآنی کونیات (Quranic Cosmology) اور سائنس کے باہمی تعلق پر مدلل مضامین کا مطالعہ کریں۔',
      deepThinker: 'وجودیت، ٹیلیولوجی (Teleology - کائنات کی غائیت) اور قرآنی مابعدالطبیعیات کا گہرا فلسفیانہ مطالعہ۔',
    },
    referenceCitation: 'قرآن حکیم، سورۃ آل عمران (۳)، آیات ۱۹۰-۱۹۱ — تفسیر طبری و معارف القرآن',
    searchKeywords: ['aql', 'soch', 'science', 'nature', 'universe', 'imran', 'tadabbur', 'fikr', 'intellect', 'purpose of life'],
    coverGradient: 'from-indigo-950 via-slate-900 to-teal-900',
    badgeUrdu: 'علم و بصیرت',
    badgeEn: 'Intellect & Insight',
    points: 25,
  },

  // 4. اندھی تقلید کی نفی اور دلیل کی پیروی (Rejecting Blind Conformity)
  {
    id: 'topic-baqarah-blind-following',
    slug: 'rejecting-blind-conformity-and-tradition',
    categoryKey: 'avoiding-blind-following',
    categoryTitleUrdu: 'اندھی تقلید سے بچنا',
    categoryTitleEn: 'Avoiding Blind Conformity',
    titleUrdu: 'اندھی تقلید کی نفی: رواج کے بجائے دلیل کی پیروی',
    titleEn: 'Overcoming Blind Conformity: Choosing Reason Over Unchecked Tradition',
    taglineUrdu: '”ہمارے آباؤ اجداد یوں کرتے تھے“ جیسے کمزور بہانوں سے آزاد ہو کر حق تلاش کرنا',
    taglineEn: 'Freeing the mind from herd mentality and unexamined ancestral customs',
    arabicVerse: 'وَإِذَا قِيلَ لَهُمُ اتَّبِعُوا مَا أَنزَلَ اللَّهُ قَالُوا بَلْ نَتَّبِعُ مَا أَلْفَيْنَا عَلَيْهِ آبَاءَنَا أَوَلَوْ كَانَ آبَاؤُهُمْ لا يَعْقِلُونَ شَيْئًا وَلا يَهْتَدُونَ',
    surahReference: 'سورۃ البقرۃ: ۱۷۰',
    surahNumber: 2,
    ayahNumber: '170',
    translationUrdu: 'اور جب ان سے کہا جاتا ہے کہ اس چیز کی پیروی کرو جو اللہ نے نازل فرمائی ہے، تو کہتے ہیں کہ نہیں! ہم تو اسی راستے پر چلیں گے جس پر ہم نے اپنے باپ دادا کو پایا۔ کیا وہ تب بھی اندھی پیروی کریں گے اگرچہ ان کے باپ دادا کچھ بھی عقل نہ رکھتے ہوں اور نہ سیدھے راستے پر ہوں؟',
    translationEn: 'When it is said to them: Follow what Allah has revealed, they say: Nay! We shall follow what we found our fathers following. Even though their fathers understood nothing nor were they rightly guided?',
    keyWords: [
      { wordArabic: 'أَلْفَيْنَا', wordUrdu: 'ہم نے پایا / دیکھا', wordEn: 'We found / inherited', rootOrGrammar: 'ل-ف-ی' },
      { wordArabic: 'لا يَعْقِلُونَ', wordUrdu: 'وہ عقل استعمال نہیں کرتے تھے', wordEn: 'They did not exercise intellect', rootOrGrammar: 'ع-ق-ل' },
      { wordArabic: 'لا يَهْتَدُونَ', wordUrdu: 'وہ رہنمائی نہیں پاتے تھے', wordEn: 'They were not guided', rootOrGrammar: 'ہ-د-ی' },
    ],
    coreMessageUrdu: 'قرآن مجید بھیڑ چال، فرسودہ رسوم و رواج اور فرقہ وارانہ تعصبات کی اندھی پیروی کی شدید مذمت کرتا ہے۔ ہر انسان اپنی فکری آزادی کا خود ذمہ دار ہے اور اسے ہر رسم کو قرآن و عقل کے ترازو میں تولنا چاہیے۔',
    coreMessageEn: 'The Quran unequivocally condemns herd mentality, unexamined customs, and sectarian tribalism. Each human is personally accountable for thinking independently.',
    contemplationQuestionsUrdu: [
      'کیا میں کسی بات کو صرف اس لیے مانتا ہوں کہ میرے خاندان یا علاقے میں ہمیشہ سے ایسا ہوتا آ رہا ہے؟',
      'کیا میرے پاس اپنے نظریات کی کوئی ٹھوس دلیل ہے یا یہ صرف ماحول کی دین ہے؟',
      'جب کوئی شخص غلط رسم پر سوال اٹھائے تو کیا میں غصے میں آتا ہوں یا ٹھنڈے دل سے دلیل سنتا ہوں؟',
    ],
    contemplationQuestionsEn: [
      'Do I accept customs purely because my community has always practiced them?',
      'Do I hold verifiable evidence for my beliefs, or are they mere cultural conditioning?',
      'When someone questions an inherited custom, do I react with rage or objective reflection?',
    ],
    modernLifeRelevanceUrdu: 'شادی بیاہ کی فضول خرچیاں، جہیز کے مطالبات، ذات پات کی اونچ نیچ اور جھوٹے شگون ایسی رسومات ہیں جنہیں معاشرہ "رواج" کے نام پر گھسیٹ رہا ہے۔ قرآن ہمیں ان زنجیروں کو توڑنے کی ہمت دیتا ہے۔',
    modernLifeRelevanceEn: 'Extravagant wedding debts, dowry demands, caste biases, and superstition persist because of blind conformity. The Quran commands us to break these shackles.',
    selfAssessmentPromptUrdu: 'کیا آپ میں اتنی جرات ہے کہ کسی غلط اور ظالمانہ رسم کو چھوڑ کر حق اور سادگی کا راستہ اپنائیں؟',
    selfAssessmentPromptEn: 'Do you have the moral clarity to abandon an unjust custom in favor of simple, principled truth?',
    practicalActionUrdu: 'آج اپنے گھر یا روزمرہ زندگی کے کسی ایسے رواج کی نشاندہی کریں جو عقل اور قرآن کے خلاف ہو، اور اسے اپنی حد تک ختم کرنے کا عزم کریں۔',
    practicalActionEn: 'Identify one wasteful or irrational social custom in your routine today and consciously refuse to participate in it.',
    depthLevels: {
      beginner: 'لوگوں کے کہنے پر غلط کام نہ کریں؛ پہلے سوچیں کہ کیا یہ بات صحیح ہے۔',
      intermediate: 'خاندانی اور معاشرتی دباؤ کا شائستگی اور دلیل کے ساتھ سامنا کرنے کی مہارت سیکھیں۔',
      advanced: 'معاشرتی نفسیات (Social Conformity & Groupthink) اور قرآنی آزادیٔ فکر کا تجزیہ۔',
      deepThinker: 'روایت، اجماع، عقل اور الہام کا علمی توازن: قدامت پسندی اور تجدیدِ نو کا فکری تجزیہ۔',
    },
    referenceCitation: 'قرآن حکیم، سورۃ البقرۃ (۲)، آیت ۱۷۰ — احکام القرآن للجصاص',
    searchKeywords: ['riwaj', 'rasm', 'taqleed', 'baqarah', 'aql', 'conformity', 'superstition', 'tradition', 'groupthink', 'freedom of thought'],
    coverGradient: 'from-slate-900 via-rose-950 to-slate-900',
    badgeUrdu: 'فکری آزادی',
    badgeEn: 'Intellectual Freedom',
    points: 25,
  },

  // 5. سچائی، ناپ تول اور حلال کمائی (Business Ethics & Honesty)
  {
    id: 'topic-mutaffifin-trade-honesty',
    slug: 'honest-weights-measures-and-halal-trade',
    categoryKey: 'halal-livelihood',
    categoryTitleUrdu: 'رزق اور حلال کمائی',
    categoryTitleEn: 'Halal Livelihood',
    titleUrdu: 'ناپ تول میں کمی اور دھوکہ: معاشرتی بربادی کی جڑ',
    titleEn: 'Cheating in Weights & Measures: The Root of Economic Decay',
    taglineUrdu: 'کاروبار، وقت اور ملازمت میں پورا پورا حق ادا کرنا اور ملاوٹ سے بچنا',
    taglineEn: 'Delivering full value in trade, work hours, and craftsmanship',
    arabicVerse: 'وَيْلٌ لِّلْمُطَفِّفِينَ ۝ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ ۝ وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ ۝ أَلا يَظُنُّ أُولَٰئِكَ أَنَّهُم مَّبْعُوثُونَ ۝ لِيَوْمٍ عَظِيمٍ',
    surahReference: 'سورۃ المطففین: ۱-۵',
    surahNumber: 83,
    ayahNumber: '1-5',
    translationUrdu: 'تباہی ہے ناپ تول میں کمی کرنے والوں کے لیے! وہ لوگ کہ جب دوسروں سے ناپ کر لیتے ہیں تو پورا پورا لیتے ہیں، اور جب ان کو ناپ کر یا تول کر دیتے ہیں تو گھٹا دیتے ہیں۔ کیا یہ لوگ نہیں سوچتے کہ وہ ایک بڑے دن کے لیے دوبارہ اٹھائے جانے والے ہیں؟',
    translationEn: 'Woe to those who give less in measure and weight! Those who, when they take measure from people, demand full, but when they give by measure or weight to others, cause loss. Do they not think that they will be resurrected on a Tremendous Day?',
    keyWords: [
      { wordArabic: 'الْمُطَفِّفِينَ', wordUrdu: 'ناپ تول میں ڈنڈی مارنے والے / حق چھیننے والے', wordEn: 'Those who defraud in measure and value', rootOrGrammar: 'ط-ف-ف' },
      { wordArabic: 'يَسْتَوْفُونَ', wordUrdu: 'پورا پورا وصول کرتے ہیں', wordEn: 'They demand full extraction', rootOrGrammar: 'و-ف-ی' },
      { wordArabic: 'يُخْسِرُونَ', wordUrdu: 'وہ نقصان دیتے ہیں / کم دیتے ہیں', wordEn: 'They diminish and cause loss', rootOrGrammar: 'خ-س-ر' },
    ],
    coreMessageUrdu: 'ناپ تول میں کمی صرف دکان کے ترازو تک محدود نہیں ہے، بلکہ دفتر میں وقت چرانا، کام میں ڈنڈی مارنا، ناقص مال کو اصلی بتا کر بیچنا اور خود زیادہ مانگنا مگر دوسروں کو کم دینا سب اس آیت کے تحت سنگین جرم ہیں۔',
    coreMessageEn: 'Defrauding is not merely a physical scale issue; it includes slacking on work hours, concealing product flaws, overcharging, and demanding rights while refusing responsibilities.',
    contemplationQuestionsUrdu: [
      'کیا میں دفتر، دکان یا گاہک کے ساتھ اپنے وعدے اور کام کا پورا حق ادا کرتا ہوں؟',
      'کیا میں اپنے فائدے کے لیے دوسرے کی مجبوری کا فائدہ اٹھاتا ہوں؟',
      'کیا میرے اندر یہ احساس زندہ ہے کہ میری ہر پائی کا حساب اللہ کے ہاں ہونا ہے؟',
    ],
    contemplationQuestionsEn: [
      'Do I provide full value for every hour and rupee paid to me by clients or employers?',
      'Do I exploit someone’s emergency to overcharge them unfairly?',
      'Is my consciousness aware that every single penny must be accounted for before God?',
    ],
    modernLifeRelevanceUrdu: 'ملاوٹ، ذخیرہ اندوزی، جعلی ادویات اور کام چوری نے ہمارے معاشی نظام کی ساکھ ختم کر دی ہے۔ برکت اور عزت صرف اسی کمائی میں ہے جو دیانت، شفافیت اور محنت سے کمائی جائے۔',
    modernLifeRelevanceEn: 'Adulteration, black marketing, and deceit destroy trust in our marketplace. Divine blessing and lasting prosperity exist only in honest craftsmanship and integrity.',
    selfAssessmentPromptUrdu: 'اگر آپ کے گاہک کو آپ کے تمام پوشیدہ راز پتا چل جائیں، تب بھی کیا وہ آپ پر اعتماد کرے گا؟',
    selfAssessmentPromptEn: 'If your customer discovered all the hidden details of your work, would they still trust you completely?',
    practicalActionUrdu: 'آج اپنے کام، ملازمت یا سودے میں ۱۰٪ اضافی محنت اور مکمل دیانت برتیں اور گاہک یا مالک کو کسی دھوکے کے بغیر مطمئن کریں۔',
    practicalActionEn: 'In your work today, deliver 10% extra care, ensure absolute transparency, and give full value without shortcuts.',
    depthLevels: {
      beginner: 'کسی کو ناپ تول میں کم نہ دیں، اور جھوٹ بول کر مال نہ بیچیں۔',
      intermediate: 'دفتر کے اوقات، معاہدوں اور کام کے معیار میں کامل دیانت برتنے کی مشق کریں۔',
      advanced: 'اسلامی معاشیات، کنزیومر پروٹیکشن اور منصفانہ مارکیٹ کے تقاضوں کا فہم۔',
      deepThinker: 'معاشی عدل (Economic Justice)، مارکیٹ اخلاقیات اور سرمائے کے استحصال کے خاتمے کا قرآنی و تمدنی ماڈل۔',
    },
    referenceCitation: 'قرآن حکیم، سورۃ المطففین (۸۳)، آیات ۱-۵ — تفسیر قرطبی و روح المعانی',
    searchKeywords: ['halal', 'tijarat', 'business', 'mutaffifin', 'nap tol', 'dhoka', 'milawat', 'integrity', 'trade', 'fair trade'],
    coverGradient: 'from-amber-900 via-slate-900 to-emerald-950',
    badgeUrdu: 'معاشی دیانت',
    badgeEn: 'Economic Ethics',
    points: 25,
  },

  // 6. غصے پر قابو اور معاف کرنا (Emotional Intelligence & Restraint)
  {
    id: 'topic-imran-anger-forgiveness',
    slug: 'emotional-restraint-anger-and-forgiveness',
    categoryKey: 'self-correction',
    categoryTitleUrdu: 'اپنی اصلاح (تزکیہ)',
    categoryTitleEn: 'Self-Correction & Growth',
    titleUrdu: 'غصے پر قابو اور احسان: جذبات کی پختگی اور درگزر',
    titleEn: 'Mastering Anger & Forgiving: Emotional Intelligence in Adversity',
    taglineUrdu: 'اشتعال کے وقت اپنے نفس کو قابو میں رکھنا اور برائی کا جواب بھلائی سے دینا',
    taglineEn: 'Mastering impulses during provocation and overcoming enmity with grace',
    arabicVerse: 'الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ',
    surahReference: 'سورۃ آل عمران: ۱۳۴',
    surahNumber: 3,
    ayahNumber: '134',
    translationUrdu: 'جو خوشحالی اور تنگ دستی دونوں حالتوں میں خرچ کرتے ہیں، اور غصے کو پی جانے والے ہیں، اور لوگوں سے درگزر کرنے والے ہیں، اور اللہ احسان (بھلائی) کرنے والوں سے محبت رکھتا ہے۔',
    translationEn: 'Those who spend in prosperity and adversity, who restrain anger, and who pardon people; and Allah loves the doers of good.',
    keyWords: [
      { wordArabic: 'وَالْكَاظِمِينَ', wordUrdu: 'غصے کے گھونٹ پی جانے والے / ضبط کرنے والے', wordEn: 'Those who suppress and restrain rage', rootOrGrammar: 'ک-ظ-م' },
      { wordArabic: 'الْغَيْظَ', wordUrdu: 'شدید غصہ / جوش و اشتعال', wordEn: 'Fierce rage / violent anger', rootOrGrammar: 'غ-ی-ظ' },
      { wordArabic: 'وَالْعَافِينَ', wordUrdu: 'معاف کرنے والے / درگزر کرنے والے', wordEn: 'Those who generously pardon', rootOrGrammar: 'ع-ف-و' },
      { wordArabic: 'الْمُحْسِنِينَ', wordUrdu: 'احسان اور خوبصورتی سے پیش آنے والے', wordEn: 'Doers of excellence and grace', rootOrGrammar: 'ح-س-ن' },
    ],
    coreMessageUrdu: 'بہادر وہ نہیں جو پہلوانی میں دوسرے کو گرا دے، بلکہ اصل طاقتور وہ ہے جو غصے کے وقت اپنے جذبات اور زبان پر قابو پائے۔ غصے کا علاج انتقام نہیں بلکہ معافی اور احسان ہے۔',
    coreMessageEn: 'True strength is not physical dominance, but emotional self-mastery during provocation. The highest virtue is transcending rage through proactive forgiveness.',
    contemplationQuestionsUrdu: [
      'جب مجھے شدید غصہ آتا ہے، تو کیا میں چیختا چلاتا ہوں یا چند سیکنڈ خاموش رہ کر سوچتا ہوں؟',
      'کیا میں نے کسی کو دل سے معاف کیا ہے یا دل میں کینہ اور بدلہ پال رکھا ہے؟',
      'کیا میں اپنے گھر والوں اور ماتحتوں پر اپنا غصہ نکالتا ہوں؟',
    ],
    contemplationQuestionsEn: [
      'When triggered, do I yell impulsively or deliberately pause to regain composure?',
      'Have I genuinely forgiven past grievances, or am I harboring silent bitterness?',
      'Do I take out my frustrations on vulnerable family members or subordinates?',
    ],
    modernLifeRelevanceUrdu: 'ٹریفک کی لڑائیاں، سوشل میڈیا پر گالیاں اور خاندانی رنجشیں معمولی غصے پر قابو نہ پانے کی وجہ سے بڑھتی ہیں۔ یہ آیت ہمیں سکھاتی ہے کہ اشتعال پر قابو پانا ہی مہذب انسان کی پہچان ہے۔',
    modernLifeRelevanceEn: 'Road rage, abusive online arguments, and broken families stem from unchecked anger. Emotional restraint is the bedrock of civilized human society.',
    selfAssessmentPromptUrdu: 'پچھلی بار جب آپ پر غصہ غالب آیا تھا، تو آپ نے اس کے بعد کیا نقصان اٹھایا؟',
    selfAssessmentPromptEn: 'The last time anger overpowered you, what relationship or dignity did you damage?',
    practicalActionUrdu: 'آج اگر کوئی شخص آپ سے بدتمیزی یا تلخی کرے تو فوری جواب دینے کے بجائے ۳ گہرے سانس لیں، مسکرائیں اور نرمی سے جواب دیں۔',
    practicalActionEn: 'If provoked today, take 3 deep breaths, refrain from retaliating, and respond with deliberate gentleness.',
    depthLevels: {
      beginner: 'غصے کے وقت خاموش ہو جائیں اور وضو کریں۔',
      intermediate: 'غصہ آنے کی وجوہات (Triggers) کو سمجھ کر اپنے جذبات کو سنبھالنے کی مشق کریں۔',
      advanced: 'احسان کی نفسیات (Psychology of Forgiveness) اور ذہنی سکون کے تعلق کا مطالعہ۔',
      deepThinker: 'تزکیۂ نفس، جذباتی ذہانت (Emotional Intelligence) اور اخلاقی فلسفے کا قرآنی ماڈل۔',
    },
    referenceCitation: 'قرآن حکیم، سورۃ آل عمران (۳)، آیت ۱۳۴ — صحیح البخاری (حدیثِ غضب) و تفسیر ابن کثیر',
    searchKeywords: ['ghussa', 'sabr', 'forgiveness', 'anger', 'maafi', 'imran', 'kazim', 'emotional intelligence', 'calmness'],
    coverGradient: 'from-rose-950 via-slate-900 to-emerald-950',
    badgeUrdu: 'جذباتی ضبط',
    badgeEn: 'Emotional Mastery',
    points: 25,
  },
];

// -------------------------------------------------------------
// 3. DAILY DEEP THOUGHT QUESTIONS ("آج کا سوال")
// -------------------------------------------------------------
export const DAILY_THOUGHT_QUESTIONS: DailyThoughtQuestion[] = [
  {
    id: 'dtq-1',
    questionUrdu: 'میں جو کام آج کر رہا ہوں، اگر پورا معاشرہ وہی کرے تو دنیا کیسی بنے گی؟',
    questionEn: 'If everyone in society did exactly what I am doing today, what would the world look like?',
    contextUrdu: 'یہ سوال ہمیں اپنی انفرادی ذمہ داری کا احساس دلاتا ہے کہ کیا ہمارا عمل معاشرے میں خیر بڑھا رہا ہے یا بگاڑ۔',
    contextEn: 'This question tests whether our personal conduct builds collective prosperity or accelerates social decay.',
    practicalExerciseUrdu: 'آج اپنے کسی ایک چھوٹے سے معمول (مثلاً کچرا پھینکنا، ٹریفک میں قطار توڑنا، یا وقت ضائع کرنا) کا غیر جانبدارانہ جائزہ لیں۔',
    practicalExerciseEn: 'Honestly audit one daily habit (littering, cutting lines, or wasting hours) through this universal lens.',
    quranicReference: 'سورۃ المائدۃ: ۳۲',
  },
  {
    id: 'dtq-2',
    questionUrdu: 'کیا میں سچ مچ علم حاصل کر رہا ہوں یا صرف معلومات کا انبار جمع کر رہا ہوں؟',
    questionEn: 'Am I acquiring genuine transformative wisdom, or merely accumulating passive information?',
    contextUrdu: 'علم وہ ہے جو انسان کے عمل اور کردار کو بدلے، ورنہ معلومات تو انٹرنیٹ پر اربوں صفحات میں بھری پڑی ہے۔',
    contextEn: 'Real knowledge transforms character and actions; raw data without application is useless weight.',
    practicalExerciseUrdu: 'گزشتہ ایک مہینے میں سیکھی گئی کسی ایک بات پر آج عملی طور پر عمل کر کے دکھائیں۔',
    practicalExerciseEn: 'Take one valuable lesson you learned this past month and translate it into a tangible deed today.',
    quranicReference: 'سورۃ الجمعۃ: ۵',
  },
  {
    id: 'dtq-3',
    questionUrdu: 'کیا میں اپنی غلطی تسلیم کرنے کے لیے تیار ہوں جب سچائی میرے سامنے آ جائے؟',
    questionEn: 'Am I genuinely willing to admit my mistake when the truth becomes clear?',
    contextUrdu: 'تکبر کی اصل تعریف یہ ہے کہ انسان حق کا انکار کرے اور دوسرے کو حقیر سمجھے۔ غلطی تسلیم کرنا بلندی کا زینہ ہے۔',
    contextEn: 'Arrogance is rejecting the truth and belittling people. Admitting an error is the gateway to nobility.',
    practicalExerciseUrdu: 'اگر کسی معاملے میں آپ کا مؤقف کمزور ثابت ہو تو بلا جھجھک اپنی کوتاہی کا اعتراف کریں۔',
    practicalExerciseEn: 'If your position is shown to be incorrect today, concede gracefully without defensiveness.',
    quranicReference: 'سورۃ النحل: ۲۳',
  },
  {
    id: 'dtq-4',
    questionUrdu: 'میں دوسروں سے تو انصاف چاہتا ہوں، لیکن کیا میں دوسروں کے ساتھ انصاف برتتا ہوں؟',
    questionEn: 'I expect absolute fairness from others; do I extend that same fairness to everyone around me?',
    contextUrdu: 'ہم اکثر دوسروں کی غلطی پر سخت جج بن جاتے ہیں لیکن اپنی غلطی کے لیے ہزاروں بہانے تلاش کرتے ہیں۔',
    contextEn: 'We frequently act as severe judges toward others while acting as lenient defense attorneys for ourselves.',
    practicalExerciseUrdu: 'اپنے ماتحت، دکاندار یا محلے دار کے ساتھ معاملہ کرتے وقت اس کے حق کو اپنے حق کی طرح ترجیح دیں۔',
    practicalExerciseEn: 'Treat your employee, vendor, or neighbor with the exact fairness you demand for your own children.',
    quranicReference: 'سورۃ المطففین: ۱-۳',
  },
  {
    id: 'dtq-5',
    questionUrdu: 'کیا میں کسی بات پر یقین کرنے سے پہلے خود سوچتا ہوں یا صرف بھیڑ کی پیروی کرتا ہوں؟',
    questionEn: 'Do I verify and think critically before believing, or merely follow the herd?',
    contextUrdu: 'اکثریت کا کسی بات کو ماننا اس کے سچ ہونے کی دلیل نہیں ہوتا۔ سچائی دلیل اور ثبوت کا نام ہے۔',
    contextEn: 'Popularity is not proof of truth. Verifiable evidence and sound reason determine reality.',
    practicalExerciseUrdu: 'آج سوشل میڈیا پر وائرل ہونے والے کسی ایک دعوے کا غیر جانبدارانہ ثبوت خود تلاش کریں۔',
    practicalExerciseEn: 'Independently fact-check one viral social media claim before accepting or repeating it.',
    quranicReference: 'سورۃ الانعام: ۱۱۶',
  },
  {
    id: 'dtq-6',
    questionUrdu: 'میری سب سے بڑی کمزوری کیا ہے جسے مجھے اللہ کی رضا کے لیے بدلنا چاہیے؟',
    questionEn: 'What is my greatest personal weakness that I must overcome for Divine pleasure?',
    contextUrdu: 'خود احتسابی کا آغاز اپنی کمزوری کو ایمانداری کے ساتھ تسلیم کرنے سے ہوتا ہے۔',
    contextEn: 'Self-mastery begins with unvarnished, honest acknowledgment of our core flaws.',
    practicalExerciseUrdu: 'ایک کاغذ پر اپنی ایک بری عادت لکھیں اور اگلے ۷ دن اس کے خاتمے کا عملی منصوبہ بنائیں۔',
    practicalExerciseEn: 'Write down one bad habit on paper and design a 7-day micro-habit strategy to eliminate it.',
    quranicReference: 'سورۃ الشمس: ۹-۱۰',
  },
];

// -------------------------------------------------------------
// 4. INTERACTIVE SELF-REFLECTION ASSESSMENT ("اپنے آپ کو پرکھیں")
// -------------------------------------------------------------
export const SELF_REFLECTION_DIAGNOSTIC_QUESTIONS: SelfReflectionDiagnosticQuestion[] = [
  {
    id: 'diag-1',
    questionUrdu: 'کیا میں روزمرہ زندگی یا گفتگو میں چھوٹی موٹی باتوں میں جھوٹ یا مبالغہ آرائی کا سہارا لیتا ہوں؟',
    questionEn: 'Do I resort to small lies, excuses, or exaggeration in everyday speech?',
    categoryUrdu: 'سچائی اور دیانت',
    categoryEn: 'Truthfulness & Integrity',
    options: [
      { id: 'opt-1', labelUrdu: 'الحمد للہ، پوری کوشش کرتا ہوں کہ سچ بولوں خواہ کتنا ہی مشکل ہو۔', labelEn: 'Strictly truthful regardless of difficulty', severity: 'strong' },
      { id: 'opt-2', labelUrdu: 'کبھی کبھار جان چھڑانے کے لیے یا مذاق میں مبالغہ آرائی ہو جاتی ہے۔', labelEn: 'Occasionally make excuses or exaggerate', severity: 'moderate' },
      { id: 'opt-3', labelUrdu: 'اکثر اوقات مصلحت کے نام پر جھوٹ بولنا پڑتا ہے، جس پر بعد میں برا لگتا ہے۔', labelEn: 'Frequently make dishonest compromises', severity: 'needs_work' },
    ],
    weaknessFeedbackUrdu: 'آپ نے محسوس کیا کہ زبان کی سچائی میں کچھ کمزوری ہے۔ چھوٹی جھوٹی باتیں دل کے نور کو ختم کر دیتی ہیں۔',
    weaknessFeedbackEn: 'You identified a gap in absolute truthfulness. Minor dishonest compromises erode moral strength.',
    sevenDayActionPlanUrdu: [
      'پہلا دن: آج ہر جملہ بولنے سے پہلے ۲ سیکنڈ رکیں اور صرف سچ بولیں۔',
      'دوسرا دن: اگر کوئی غلطی ہو جائے تو بہانہ بنانے کے بجائے صاف اعتراف کریں۔',
      'تیسرا دن: مذاق یا ہنسی مذاق میں بھی جھوٹ بولنے سے مکمل پرہیز کریں۔',
      'چوتھا دن: کسی کی تعریف کرتے وقت مبالغہ آرائی نہ کریں؛ جو سچ ہے وہی کہیں۔',
      'پانچواں دن: وعدہ کرتے وقت "ان شاء اللہ" کہیں اور پورا کرنے کا پختہ ارادہ رکھیں۔',
      'چھٹا دن: اگر نادانستہ غلط بیانی ہو جائے تو فوراً اسی وقت درست کر لیں۔',
      'ساتواں دن: سچے لوگوں کی صحبت اختیار کریں اور سچائی پر استقامت کی دعا مانگیں۔',
    ],
    sevenDayActionPlanEn: [
      'Day 1: Pause 2 seconds before speaking and commit to zero falsehood.',
      'Day 2: Admit mistakes honestly without crafting excuses.',
      'Day 3: Refrain from falsehood even in humor or jest.',
      'Day 4: Avoid exaggerated flattery; speak balanced truth.',
      'Day 5: Say Insha\'Allah with genuine intention to honor promises.',
      'Day 6: Promptly correct any accidental misstatement.',
      'Day 7: Seek truthful companionship and pray for steadfastness.',
    ],
  },
  {
    id: 'diag-2',
    questionUrdu: 'جب مجھے شدید غصہ آتا ہے، تو میرا رویہ کیسا ہوتا ہے؟',
    questionEn: 'When overwhelmed with fierce anger, how do I react?',
    categoryUrdu: 'ضبطِ نفس اور برداشت',
    categoryEn: 'Self-Control & Patience',
    options: [
      { id: 'opt-1', labelUrdu: 'فوری خاموشی اختیار کرتا ہوں، پانی پیتا ہوں اور ماحول سے ہٹ جاتا ہوں۔', labelEn: 'Maintain quiet restraint and step away', severity: 'strong' },
      { id: 'opt-2', labelUrdu: 'کبھی کبھار آواز اونچی ہو جاتی ہے لیکن بعد میں پچھتا کر معافی مانگتا ہوں۔', labelEn: 'Sometimes raise voice but apologize later', severity: 'moderate' },
      { id: 'opt-3', labelUrdu: 'کنٹرول کھو بیٹھتا ہوں، طعنے دیتا ہوں یا ہاتھ پاؤں چلا بیٹھتا ہوں۔', labelEn: 'Lose control and lash out verbally/physically', severity: 'needs_work' },
    ],
    weaknessFeedbackUrdu: 'غصے پر قابو پانا اصل مردانگی ہے۔ جب غصہ آئے تو شیطان انسان سے وہ کرواتا ہے جس کا پچھتاوا عمر بھر رہتا ہے۔',
    weaknessFeedbackEn: 'Mastering anger is true courage. Unchecked rage leads to irreversible regrets.',
    sevenDayActionPlanUrdu: [
      'پہلا دن: غصہ آتے ہی زبان پر تالا لگا لیں اور "اعوذ باللہ" پڑھیں۔',
      'دوسرا دن: اگر کھڑے ہوں تو بیٹھ جائیں، بیٹھے ہوں تو لیٹ جائیں۔',
      'تیسرا دن: ٹھنڈے پانی سے وضو کریں اور چہرے پر چھینٹیں ماریں۔',
      'چوتھا دن: کسی سے جھگڑے کے بعد جواب دینے کے لیے ۲۴ گھنٹے کا وقفہ لیں۔',
      'پانچواں دن: اپنے سے کمزور پر غصہ نکالنے سے خاص طور پر پرہیز کریں۔',
      'چھٹا دن: جس پر کبھی غصہ کیا تھا، آج اس سے جا کر نرمی سے معذرت کریں۔',
      'ساتواں دن: روزانہ صبح یہ نیت کریں کہ آج پورا دن مسکرا کر اور نرمی سے بات کروں گا۔',
    ],
    sevenDayActionPlanEn: [
      'Day 1: Pause speech immediately and seek refuge in Allah.',
      'Day 2: Change posture: sit down if standing; lie down if sitting.',
      'Day 3: Perform ablution with cool water to soothe the nervous system.',
      'Day 4: Institute a mandatory 24-hour cooling delay before replying to disputes.',
      'Day 5: Strictly refrain from venting anger at vulnerable individuals.',
      'Day 6: Reach out and gently apologize to someone you hurt in anger.',
      'Day 7: Start your day with a clear intention of warmth and smiling.',
    ],
  },
  {
    id: 'diag-3',
    questionUrdu: 'کیا میں سوشل میڈیا اور روزمرہ گفتگو میں سنی سنائی باتوں کو بغیر تحقیق پھیلانے کا حصہ بنتا ہوں؟',
    questionEn: 'Do I amplify unverified hearsay or rumors on social media and in conversations?',
    categoryUrdu: 'تحقیق اور ذمہ داری',
    categoryEn: 'Verification & Responsibility',
    options: [
      { id: 'opt-1', labelUrdu: 'ہرگز نہیں؛ جب تک مستند ثبوت نہ دیکھ لوں، خاموش رہتا ہوں۔', labelEn: 'Never; remain silent unless verified with primary evidence', severity: 'strong' },
      { id: 'opt-2', labelUrdu: 'کبھی کبھی دلچسپ یا پریشان کن خبر دیکھ کر بغیر سوچے شیئر ہو جاتی ہے۔', labelEn: 'Occasionally share sensational posts without thinking', severity: 'moderate' },
      { id: 'opt-3', labelUrdu: 'اکثر خبریں اور افواہیں آگے بھیجتا ہوں کہ لوگ خود دیکھ لیں۔', labelEn: 'Frequently forward messages for others to verify', severity: 'needs_work' },
    ],
    weaknessFeedbackUrdu: 'حدیث میں ہے کہ انسان کے جھوٹا ہونے کے لیے اتنا ہی کافی ہے کہ وہ ہر سنی سنائی بات آگے بیان کر دے۔',
    weaknessFeedbackEn: 'The Prophet (PBUH) taught that it is sufficient falsehood for a person to narrate everything they hear.',
    sevenDayActionPlanUrdu: [
      'پہلا دن: آج واٹس ایپ پر آنے والی کسی ایک خبر کو آگے فارورڈ نہ کریں۔',
      'دوسرا دن: کسی بھی سنسنی خیز خبر کو دیکھیں تو پہلے گوگل یا آفیشل ذرائع سے تصدیق کریں۔',
      'تیسرا دن: اگر کوئی دوست افواہ پھیلائے تو اسے شائستگی سے ثبوت مانگنے کا کہیں۔',
      'چوتھا دن: کسی شخص کی برائی یا غیبت والی بات سن کر اسے آگے بڑھانے کے بجائے روک دیں۔',
      'پانچواں دن: غیر ضروری اور سنسنی پھیلانے والے گروپس یا چینلز کو میوٹ کریں۔',
      'چھٹا دن: اپنی رائے اور حقیقت کے درمیان فرق کرنا سیکھیں۔',
      'ساتواں دن: صرف وہی بات بیان کریں جس کے سچ ہونے کا آپ کے پاس حتمی ثبوت ہو۔',
    ],
    sevenDayActionPlanEn: [
      'Day 1: Do not forward a single unverified message today.',
      'Day 2: Cross-check sensational news against primary, official sources.',
      'Day 3: Politely encourage friends to verify before repeating claims.',
      'Day 4: Stop gossip in its tracks rather than passing it along.',
      'Day 5: Mute sensationalist, low-quality group chats and channels.',
      'Day 6: Clearly distinguish between personal opinion and objective facts.',
      'Day 7: Commit to only stating what you can personally verify.',
    ],
  },
];

// -------------------------------------------------------------
// 5. SOCIETAL ISSUES & REFORM MODULES ("معاشرتی مسائل کا علاج")
// -------------------------------------------------------------
export const SOCIETAL_ISSUES_MASTER_DATA: SocietalIssueModule[] = [
  {
    id: 'issue-trash-cleanliness',
    titleUrdu: 'گندگی، کوڑا کرکٹ اور راستے میں رکاوٹ',
    titleEn: 'Littering, Cleanliness & Public Obstacles',
    icon: 'Trash2',
    problemSummaryUrdu: 'گلیوں، بازاروں اور پارکوں میں کوڑا پھینکنا، نالیوں کو بند کرنا اور اپنے گھر کا کچرا دوسرے کے دروازے پر ڈال دینا۔',
    problemSummaryEn: 'Dumping trash on streets, clogging public drains, and littering public spaces.',
    howWeContributeUrdu: 'گاڑی یا رکشے سے کچرا باہر پھینک دینا، چپس کا ریپر سڑک پر گرا دینا، یا صفائی کو صرف خاکروب کا کام سمجھنا۔',
    howWeContributeEn: 'Tossing wrappers from cars, ignoring dropped trash, and viewing public hygiene as someone else\'s job.',
    quranicPrincipleUrdu: 'قرآن ہمیں زمین میں فساد پھیلانے سے روکتا ہے اور رسول اللہ ﷺ نے فرمایا کہ راستے سے تکلیف دہ چیز ہٹانا ایمان کا حصہ ہے۔',
    quranicPrincipleEn: 'The Quran commands stewardship and prohibits corruption on earth; removing obstacles from pathways is an act of faith.',
    quranVerseReference: 'سورۃ البقرۃ: ۲۰۵ / صحیح مسلم',
    quranVerseText: 'وَإِذَا تَوَلَّىٰ سَعَىٰ فِي الأَرْضِ لِيُفْسِدَ فِيهَا وَيُهْلِكَ الْحَرْثَ وَالنَّسْلَ وَاللَّهُ لا يُحِبُّ الْفَسَادَ',
    concreteSolutionUrdu: [
      'اپنے گھر اور گاڑی میں ایک چھوٹا ڈسٹ بن یا کچرے کا شاپر لازمی رکھیں۔',
      'جب تک کوڑے دان نہ ملے، ریپر یا بوتل اپنی جیب یا بیگ میں رکھیں۔',
      'ہفتے میں ایک دن اپنی گلی یا محلے کی صفائی میں خود حصہ لیں۔',
      'پڑوسی کے سامنے کوڑا پھینکنے کی سختی سے ممانعت کریں۔',
    ],
    concreteSolutionEn: [
      'Keep a dedicated trash bag in your car and home.',
      'Keep wrappers in your pocket until you locate a proper bin.',
      'Dedicate one hour weekly to cleaning your street or neighborhood.',
      'Respect public pathways as shared communal spaces.',
    ],
    todaysIndividualActionUrdu: 'آج راستے میں پڑا ہوا کوئی بھی پلاسٹک یا رکاوٹ اٹھا کر ڈسٹ بن میں ڈالیں اور اپنے گھر کا کچرا صحیح جگہ رکھیں۔',
    todaysIndividualActionEn: 'Pick up one piece of discarded trash from the path today and dispose of it responsibly.',
  },
  {
    id: 'issue-traffic-rules',
    titleUrdu: 'ٹریفک قوانین کی خلاف ورزی اور بے صبری',
    titleEn: 'Traffic Violations, Reckless Driving & Impatience',
    icon: 'AlertCircle',
    problemSummaryUrdu: 'ریڈ لائٹ توڑنا، ون وے کی خلاف ورزی، بلاوجہ پریشر ہارن بجانا اور پیدل چلنے والوں کو راستہ نہ دینا۔',
    problemSummaryEn: 'Breaking red lights, one-way violations, noise pollution, and denying pedestrian rights.',
    howWeContributeUrdu: '۲ منٹ جلدی پہنچنے کے چکر میں دوسروں کی جان خطرے میں ڈالنا اور قطار توڑ کر آگے نکلنا۔',
    howWeContributeEn: 'Risky overtakes and cutting queues to save 2 minutes while endangering human lives.',
    quranicPrincipleUrdu: 'قرآن زمین پر عاجزی اور وقار سے چلنے کی تلقین کرتا ہے، اور ایک انسان کی جان بچانا پوری انسانیت کو بچانے کے مترادف ہے۔',
    quranicPrincipleEn: 'The Quran praises those who walk the earth humbly and equates saving one life to saving all of humanity.',
    quranVerseReference: 'سورۃ الفرقان: ۶۳ / سورۃ المائدۃ: ۳۲',
    quranVerseText: 'وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الأَرْضِ هَوْنًا وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلامًا',
    concreteSolutionUrdu: [
      'ٹریفک سگنل کا احترام اپنی ذاتی اور دینی ذمہ داری سمجھیں۔',
      'ہارن صرف ایمرجنسی میں بجائیں، بلاوجہ شور پیدا نہ کریں۔',
      'پیدل چلنے والوں کو پہلے سڑک پار کرنے کا حق دیں۔',
      'موٹر سائیکل چلاتے وقت ہیلمٹ ضرور پہنیں اور ون وے کی خلاف ورزی نہ کریں۔',
    ],
    concreteSolutionEn: [
      'Respect traffic signals as a moral and religious obligation.',
      'Use the vehicle horn only in genuine emergencies.',
      'Give right of way to pedestrians at crossings.',
      'Always wear a safety helmet and never drive against traffic flow.',
    ],
    todaysIndividualActionUrdu: 'آج ڈرائیونگ یا سفر کے دوران مکمل صبر کا مظاہرہ کریں، قطار میں چلیں اور کسی پر ہارن نہ بجائیں۔',
    todaysIndividualActionEn: 'Practice total patience while commuting today; observe queue discipline and zero unnecessary honking.',
  },
  {
    id: 'issue-corruption-bribery',
    titleUrdu: 'رشوت، سفارش اور ناانصافی',
    titleEn: 'Bribery, Nepotism & Corruption',
    icon: 'ShieldAlert',
    problemSummaryUrdu: 'حق دار کا حق مار کر سفارش یا پیسے کے زور پر نااہل کو آگے لانا اور دفاتر میں بغیر رشوت کام نہ کرنا۔',
    problemSummaryEn: 'Depriving deserving people through bribes, nepotism, and bureaucratic exploitation.',
    howWeContributeUrdu: 'اپنا جائز یا ناجائز کام جلدی کروانے کے لیے خود رشوت پیش کرنا اور سفارشیں ڈھونڈنا۔',
    howWeContributeEn: 'Offering bribes to speed up bureaucratic processes instead of standing on lawful procedure.',
    quranicPrincipleUrdu: 'قرآن دوسروں کا مال ناحق کھانے اور حکام کو رشوت دینے کو صریح حرام قرار دیتا ہے۔',
    quranicPrincipleEn: 'The Quran strictly forbids consuming wealth unjustly and bribing authorities to take others’ rights.',
    quranVerseReference: 'سورۃ البقرۃ: ۱۸۸',
    quranVerseText: 'وَلا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ وَتُدْلُوا بِهَا إِلَى الْحُكَّامِ لِتَأْكُلُوا فَرِيقًا مِّنْ أَمْوَالِ النَّاسِ بِالإِثْمِ وَأَنتُمْ تَعْلَمُونَ',
    concreteSolutionUrdu: [
      'رشوت دینے اور لینے سے قطعی انکار کریں، چاہے کام میں کچھ تاخیر ہو۔',
      'کسی ادارے میں بھرتی یا تقرری کے وقت میرٹ اور اہلیت کو اولیت دیں۔',
      'کمزور اور غریب لوگوں کا جائز کام بغیر کسی غرض کے مفت کروائیں۔',
      'دیانت دار افسران اور کارکنوں کی حوصلہ افزائی کریں۔',
    ],
    concreteSolutionEn: [
      'Refuse to give or take bribes, even if it causes administrative delays.',
      'Promote strictly merit-based hiring and promotions.',
      'Assist the poor and vulnerable in paperwork without asking for favors.',
      'Encourage and protect honest civil servants.',
    ],
    todaysIndividualActionUrdu: 'آج کسی بھی کام میں شارٹ کٹ یا غیر اخلاقی سفارش کا سہارا نہ لیں اور اصول پر قائم رہیں۔',
    todaysIndividualActionEn: 'Refuse all illegal shortcuts today and resolve to handle matters strictly on principle.',
  },
];

// -------------------------------------------------------------
// 6. CRITICAL THINKING & LOGIC SYSTEM ("سوچنا سیکھیں")
// -------------------------------------------------------------
export const CRITICAL_THINKING_MODULES: CriticalThinkingLesson[] = [
  {
    id: 'crit-1',
    conceptUrdu: 'دعویٰ اور دلیل میں فرق',
    conceptEn: 'Claim vs. Evidence',
    termEnglish: 'Claim vs Evidence',
    definitionUrdu: 'دعویٰ کسی انسان کی کہی ہوئی بات یا دعویٰ ہوتا ہے، جبکہ دلیل وہ ٹھوس، قابلِ تصدیق ثبوت ہے جو اس دعوے کو سچا ثابت کرے۔ صرف بڑا نام یا پرجوش انداز دلیل نہیں بن سکتا۔',
    definitionEn: 'A claim is an assertion; evidence is verifiable data supporting that assertion. Tone and status are not proof.',
    everydayExampleUrdu: 'کوئی کہے کہ "فلاں دوا پینے سے ہر بیماری ختم ہو جاتی ہے" — یہ صرف ایک دعویٰ ہے۔ اس کا ثبوت لیبارٹری ٹیسٹ اور میڈیکل ریسرچ ہے۔',
    everydayExampleEn: 'Claim: "This miracle drink cures all illnesses." Evidence: Rigorous peer-reviewed laboratory trials.',
    quranicTeachingUrdu: 'قرآن مجید مخالفین سے بار بار کہتا ہے: ”قُلْ هَاتُوا بُرْهَانَكُمْ إِن كُنتُمْ صَادِقِينَ“ (کہو کہ اگر تم سچے ہو تو اپنی ٹھوس دلیل لے کر آؤ)۔',
    quranicReference: 'سورۃ البقرۃ: ۱۱۱',
    habitBuildingQuestionsUrdu: [
      'اس بات کا اصل ثبوت کیا ہے؟',
      'کیا یہ بات کہنے والے کا ذاتی دعویٰ ہے یا اس کے پاس کوئی ٹھوس حقائق ہیں؟',
      'اگر میں اس کے دعوے کو مان لوں تو کیا میں بغیر ثبوت بات مان رہا ہوں؟',
    ],
    practiceExerciseUrdu: 'آج سوشل میڈیا یا محفل میں سنے گئے کسی دعوے کے پیچھے اصل "دلیل" تلاش کرنے کی مشق کریں۔',
  },
  {
    id: 'crit-2',
    conceptUrdu: 'حقیقت اور رائے میں فرق',
    conceptEn: 'Fact vs. Opinion',
    termEnglish: 'Fact vs Opinion',
    definitionUrdu: 'حقیقت وہ چیز ہے جسے پیمائش، مشاہدے یا ثبوت سے ثابت کیا جا سکے (جیسے پانی ۱۰۰ ڈگری پر ابلتا ہے)۔ رائے کسی شخص کا ذاتی ذوق یا پسند ہے (جیسے سردی کا موسم گرمی سے اچھا ہے)۔ رائے پر جھگڑا نہیں کیا جاتا۔',
    definitionEn: 'A fact is objectively verifiable; an opinion is a subjective preference or interpretation.',
    everydayExampleUrdu: '”پاکستان کا دارالحکومت اسلام آباد ہے“ ایک حقیقت (Fact) ہے۔ ”اسلام آباد دنیا کا سب سے خوبصورت شہر ہے“ ایک ذاتی رائے (Opinion) ہے۔',
    everydayExampleEn: '"Islamabad is the capital of Pakistan" is a fact. "Islamabad is the most beautiful city" is an opinion.',
    quranicTeachingUrdu: 'قرآن مجید قیاس آرائیوں اور بغیر علم کے رائے قائم کرنے سے منع کرتا ہے: ”إِن يَتَّبِعُونَ إِلاَّ الظَّنَّ“ (وہ صرف اپنے گمان کی پیروی کرتے ہیں)۔',
    quranicReference: 'سورۃ النجم: ۲۸',
    habitBuildingQuestionsUrdu: [
      'کیا یہ بات ناقابلِ تردید حقیقت ہے یا صرف بولنے والے کی ذاتی پسند؟',
      'کیا مختلف لوگ اس بات پر مختلف رائے رکھ سکتے ہیں؟',
    ],
    practiceExerciseUrdu: 'آج کسی اخبار یا گفتگو میں ۳ حقائق اور ۳ ذاتی آراء کی الگ الگ فہرست بنائیں۔',
  },
  {
    id: 'crit-3',
    conceptUrdu: 'تصدیقی تعصب کو سمجھنا',
    conceptEn: 'Confirmation Bias',
    termEnglish: 'Confirmation Bias',
    definitionUrdu: 'انسان کی یہ فطری کمزوری کہ وہ صرف وہی خبر یا بات سننا اور ماننا چاہتا ہے جو اس کی پہلے سے موجود رائے کی تائید کرے، اور اپنے مخالف ہر سچی بات کو بغیر سوچے جھٹلا دیتا ہے۔',
    definitionEn: 'The psychological tendency to embrace information confirming prior beliefs while rejecting contrary facts.',
    everydayExampleUrdu: 'سیاسی یا مذہبی بحثوں میں ہم اپنے پسندیدہ لیڈر کی ہر کمزوری پر پردہ ڈالتے ہیں اور مخالف کی ہر اچھائی کو بھی چالاکی قرار دیتے ہیں۔',
    everydayExampleEn: 'Defending every flaw of a favored political leader while discounting all virtues of an opponent.',
    quranicTeachingUrdu: 'قرآن فرماتا ہے: ”کسی قوم کی دشمنی تمہیں اس بات پر نہ ابھارے کہ تم انصاف چھوڑ دو۔ عدل کرو، یہی تقویٰ کے زیادہ قریب ہے۔“',
    quranicReference: 'سورۃ المائدۃ: ۸',
    habitBuildingQuestionsUrdu: [
      'کیا میں یہ خبر اس لیے مان رہا ہوں کیونکہ میں دل سے چاہتا تھا کہ ایسا ہی ہو؟',
      'اگر یہی بات میرے مخالف کے حق میں ہوتی تو کیا میں تب بھی اسے مانتا؟',
    ],
    practiceExerciseUrdu: 'آج اپنے کسی اختلافی موضوع پر اپنے مخالف کے مضبوط ترین دلائل کو کھلے دل اور انصاف سے پڑھیں۔',
  },
];

// -------------------------------------------------------------
// 7. DAILY PRACTICAL DEEDS ("آج ایک عمل")
// -------------------------------------------------------------
export const DAILY_PRACTICAL_DEEDS: DailyPracticalDeed[] = [
  {
    id: 'deed-1',
    titleUrdu: 'آج ایک شخص سے سچ بولیں جہاں جھوٹ بولنا آسان تھا',
    titleEn: 'Speak Truth Where Falsehood Was Easy',
    descUrdu: 'دفتر، گھر یا گاہک کے ساتھ کسی بھی معاملے میں کوئی بہانہ بنانے کے بجائے پوری سچائی اور دیانت کے ساتھ بات کریں۔',
    descEn: 'In your office, home, or shop, speak total truth without crafting convenient excuses.',
    categoryUrdu: 'سچائی اور دیانت',
    estimatedMinutes: 5,
    points: 20,
    quranicLink: 'سورۃ التوبۃ: ۱۱۹',
  },
  {
    id: 'deed-2',
    titleUrdu: 'کسی ایک خبر کو آگے بھیجنے سے پہلے اس کا ماخذ دیکھیں',
    titleEn: 'Verify Source Before Forwarding',
    descUrdu: 'واٹس ایپ یا فیس بک پر آئی ہوئی کسی بھی سنسنی خیز خبر کو بغیر تحقیق آگے بھیجنے سے رک جائیں اور اسے چیک کریں۔',
    descEn: 'Pause and verify the primary source of any sensational viral message before sharing.',
    categoryUrdu: 'تحقیق اور سچائی',
    estimatedMinutes: 10,
    points: 20,
    quranicLink: 'سورۃ الحجرات: ۶',
  },
  {
    id: 'deed-3',
    titleUrdu: '۱۰ منٹ خاموش بیٹھ کر اپنی زندگی کے مقصد پر غور کریں',
    titleEn: '10 Minutes Quiet Reflection on Purpose',
    descUrdu: 'موبائل فون ایک طرف رکھ دیں، تنہائی میں بیٹھ کر سوچیں کہ میں کتنا وقت مفید کاموں میں اور کتنا وقت فضول کاموں میں لگا رہا ہوں۔',
    descEn: 'Set aside your phone, sit in quiet solitude, and reflect honestly on your time allocation.',
    categoryUrdu: 'عقل اور تدبر',
    estimatedMinutes: 10,
    points: 25,
    quranicLink: 'سورۃ الحشر: ۱۸',
  },
  {
    id: 'deed-4',
    titleUrdu: 'کسی ایک انسان کا حق خوشدلی سے ادا کریں',
    titleEn: 'Fulfill One Person\'s Right Generously',
    descUrdu: 'اپنے ماتحت مزدور، ڈرائیور، دکاندار یا گھریلو مددگار کو اس کا حق اور طے شدہ معاوضہ بغیر تاخیر کے پورا ادا کریں۔',
    descEn: 'Pay your worker, driver, or assistant their full compensation promptly and with warm respect.',
    categoryUrdu: 'حقوق العباد',
    estimatedMinutes: 15,
    points: 25,
    quranicLink: 'سورۃ النساء: ۵۸',
  },
  {
    id: 'deed-5',
    titleUrdu: 'راستے سے کوئی گندگی یا رکاوٹ ہٹا کر ڈسٹ بن میں ڈالیں',
    titleEn: 'Remove a Public Obstacle or Trash',
    descUrdu: 'گلی، سڑک یا سیڑھیوں سے کوئی بھی تکلیف دہ چیز، پتھر یا کچرا اٹھا کر مناسب جگہ پر پھینکیں۔',
    descEn: 'Pick up a harmful object, stone, or trash from the walkway and discard it in a bin.',
    categoryUrdu: 'معاشرتی خدمت',
    estimatedMinutes: 5,
    points: 20,
    quranicLink: 'صحیح مسلم (شعب الایمان)',
  },
];

// -------------------------------------------------------------
// 8. ONE AYAH, ONE PROBLEM, ONE LESSON ("ایک آیت، ایک مسئلہ، ایک عملی سبق")
// -------------------------------------------------------------
export const ONE_AYAH_ONE_PROBLEM_MASTER: OneAyahOneProblemLesson[] = [
  {
    id: 'oaop-1',
    titleUrdu: 'مایوسی اور ڈپریشن کا شکار ہونا',
    titleEn: 'Depression, Anxiety & Despair',
    categoryUrdu: 'ذہنی سکون اور امید',
    ayahArabic: 'أَلا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    surahReference: 'سورۃ الرعد: ۲۸',
    ayahTranslationUrdu: 'سنو! اللہ ہی کی یاد سے دلوں کو اطمینان اور سکون ملتا ہے۔',
    realLifeProblemUrdu: 'آج کا انسان مادی آسائشوں کے باوجود اندر سے بے چین، خوف زدہ اور مستقبل کے وسوسوں میں گھرا ہوا ہے۔',
    rootCauseUrdu: 'مسئلے کو خدا سے بڑا سمجھنا، سوشل میڈیا کا ضرورت سے زیادہ استعمال اور کائنات کے خالق سے تعلق کی کمزوری۔',
    practicalLessonUrdu: 'سکون باہر کی اشیاء میں نہیں بلکہ دل کے اندر کی خاموشی اور رب کی رضا پر راضی رہنے میں ہے۔',
    actionChallengeUrdu: 'آج جب بھی بے چینی یا گھبراہٹ ہو، ۳ منٹ کے لیے تمام سکرینز بند کریں، گہرا سانس لیں اور اللہ کی نعمتوں پر غور کریں۔',
    iconName: 'Heart',
    points: 25,
  },
  {
    id: 'oaop-2',
    titleUrdu: 'دفتر اور گھر میں غیبت اور چغل خوری',
    titleEn: 'Backbiting & Toxic Office Gossip',
    categoryUrdu: 'زبان کی حفاظت اور اخلاق',
    ayahArabic: 'وَلا يَغْتَب بَّعْضُكُم بَعْضًا أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ',
    surahReference: 'سورۃ الحجرات: ۱۲',
    ayahTranslationUrdu: 'اور تم میں سے کوئی کسی کی غیبت نہ کرے؛ کیا تم میں سے کوئی اپنے مردہ بھائی کا گوشت کھانا پسند کرے گا؟ تم خود اس سے گھن کھاتے ہو۔',
    realLifeProblemUrdu: 'محفلوں اور ٹی بریک پر دوسروں کی برائیاں، کمزوریاں اور راز اچھال کر اپنا وقت اور تعلقات برباد کرنا۔',
    rootCauseUrdu: 'حسد، احساسِ کمتری اور اپنے آپ کو دوسروں سے برتر ثابت کرنے کی منفی نفسانی خواہش۔',
    practicalLessonUrdu: 'اگر کسی کی اصلاح کرنی ہو تو تنہائی میں پیار سے بات کریں، پیٹھ پیچھے بات کرنا اخلاقی موت ہے۔',
    actionChallengeUrdu: 'آج اگر کسی مجلس میں کسی غیر موجود شخص کی برائی شروع ہو تو یا تو اس کی اچھائی یاد دلائیں یا شائستگی سے موضوع بدل دیں۔',
    iconName: 'MessageSquare',
    points: 25,
  },
  {
    id: 'oaop-3',
    titleUrdu: 'معاہدوں کی خلاف ورزی اور حیلے بہانے',
    titleEn: 'Breaking Contracts & Excuses',
    categoryUrdu: 'وعدہ خلافی اور دیانت',
    ayahArabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ',
    surahReference: 'سورۃ المائدۃ: ۱',
    ayahTranslationUrdu: 'اے لوگو جو ایمان لائے ہو! اپنے تمام عہد و پیمان اور معاہدوں کو پورا کرو۔',
    realLifeProblemUrdu: 'کاروباری سودوں، نوکری کے وقت، ادھار کی واپسی یا گھریلو وعدوں میں جان بوجھ کر تاخیر اور جھوٹے بہانے بنانا۔',
    rootCauseUrdu: 'وقت اور زبانی قول کی قدر نہ کرنا اور فوری ذاتی مفاد کو اخلاقی ساکھ پر ترجیح دینا۔',
    practicalLessonUrdu: 'ایک باوقار اور ایماندار انسان کی زبان اس کا سب سے بڑا معاہدہ ہوتی ہے۔',
    actionChallengeUrdu: 'آج اپنے کسی پچھلے ادھورے وعدے یا وقت پر کیے جانے والے کام کو مکمل کریں یا پہلے سے مطلع کر کے معذرت کریں۔',
    iconName: 'ShieldCheck',
    points: 25,
  },
  {
    id: 'oaop-4',
    titleUrdu: 'حسد اور دوسروں کی نعمت پر جلنا',
    titleEn: 'Envy, Comparison & Resentment',
    categoryUrdu: 'قلبی صفائی اور شکر',
    ayahArabic: 'وَلا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ عَلَىٰ بَعْضٍ',
    surahReference: 'سورۃ النساء: ۳۲',
    ayahTranslationUrdu: 'اور اس چیز کی تمنا اور لالچ مت کرو جس میں اللہ نے تم میں سے بعض کو بعض پر فضیلت دی ہے۔',
    realLifeProblemUrdu: 'سوشل میڈیا پر دوسروں کی گاڑی، گھر یا خوشیاں دیکھ کر اندر ہی اندر کڑھنا اور اپنی موجودہ نعمتوں کو حقیر سمجھنا۔',
    rootCauseUrdu: 'موازنہ کرنے کی بیماری اور اللہ کی تقسیم پر عدم اطمینان۔',
    practicalLessonUrdu: 'ہر انسان کا امتحان اور رزق مختلف ہے۔ دوسروں کی نعمت دیکھ کر حسد کے بجائے ان کے لیے برکت اور اپنے لیے فضل مانگیں۔',
    actionChallengeUrdu: 'جس شخص سے آپ کو کبھی حسد یا رقابت محسوس ہوئی ہو، آج دل سے اس کی ترقی و خوشحالی کے لیے دعا مانگیں۔',
    iconName: 'Sparkles',
    points: 30,
  },
  {
    id: 'oaop-5',
    titleUrdu: 'ذخیرہ اندوزی اور مصنوعی مہنگائی',
    titleEn: 'Hoarding & Exploitative Pricing',
    categoryUrdu: 'معاشی انصاف اور برکت',
    ayahArabic: 'وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ وَلا يُنفِقُونَهَا فِي سَبِيلِ اللَّهِ فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ',
    surahReference: 'سورۃ التوبۃ: ۳۴',
    ayahTranslationUrdu: 'اور جو لوگ سونا چاندی جمع کر کے رکھتے ہیں اور اسے اللہ کی راہ میں خرچ نہیں کرتے، انہیں دردناک عذاب کی خوشخبری سنا دو۔',
    realLifeProblemUrdu: 'بحران یا رمضان میں اشیائے خور و نوش چھپا کر دام بڑھانا اور مجبور انسانوں کی مجبوری کا سودا کرنا۔',
    rootCauseUrdu: 'لالچ، حرص اور اس وہم کا شکار ہونا کہ مال چھپانے سے حفاظت اور دولت بڑھتی ہے۔',
    practicalLessonUrdu: 'دولت اور وسائل پانی کی طرح ہیں؛ بہتے رہیں تو زندگی دیتے ہیں، رک جائیں تو تعفن بن جاتے ہیں۔',
    actionChallengeUrdu: 'اپنے پاس موجود کسی اضافی شے یا راشن کو آج کسی ضرورت مند کے ساتھ بانٹیں۔',
    iconName: 'Scale',
    points: 25,
  },
  {
    id: 'oaop-6',
    titleUrdu: 'وقت کا ضیاع اور سستی',
    titleEn: 'Procrastination & Wasting Lifetime',
    categoryUrdu: 'وقت اور مقصدیت',
    ayahArabic: 'وَالْعَصْرِ ۝ إِنَّ الإِنسَانَ لَفِي خُسْرٍ ۝ إِلاَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
    surahReference: 'سورۃ العصر: ۱-۳',
    ayahTranslationUrdu: 'زمانے کی قسم! بے شک انسان سراسر خسارے میں ہے۔ سوائے ان لوگوں کے جو ایمان لائے، اور جنہوں نے نیک عمل کیے، اور ایک دوسرے کو حق کی وصیت کی اور صبر کی تلقین کی۔',
    realLifeProblemUrdu: 'گھنٹوں موبائل سکرولنگ، فضول گپ شپ اور اہم کاموں کو کل پر ٹال کر قیمتی عمر گنوا دینا۔',
    rootCauseUrdu: 'موت اور وقت کی نزاکت کا احساس نہ ہونا اور زندگی کو بغیر حساب سمجھنا۔',
    practicalLessonUrdu: 'ہر گزرتا لمحہ عمر کی عمارت سے ایک اینٹ کم کر رہا ہے۔ کامیابی روزانہ کے چھوٹے نیک کاموں کے تسلسل میں ہے۔',
    actionChallengeUrdu: 'آج کسی ضروری کام پر بغیر رکے ۲۵ منٹ مکمل فوکس کے ساتھ کام کریں (سوشل میڈیا مکمل بند)۔',
    iconName: 'Clock',
    points: 25,
  },
  {
    id: 'oaop-7',
    titleUrdu: 'والدین کے ساتھ تلخی اور بڑھاپے میں دوری',
    titleEn: 'Neglecting Aging Parents',
    categoryUrdu: 'والدین اور خاندان',
    ayahArabic: 'فَلا تَقُل لَّهُمَا أُفٍّ وَلا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلا كَرِيمًا',
    surahReference: 'سورۃ الاسراء: ۲۳',
    ayahTranslationUrdu: 'تو ان (ماں باپ) کو کبھی "اف" تک نہ کہو، اور نہ انہیں جھڑکو، بلکہ ان کے ساتھ نہایت ادب اور عزت والی بات کرو۔',
    realLifeProblemUrdu: 'والدین کے بار بار پوچھنے یا کمزور ہونے پر جھنجھلا جانا، منہ بنانا یا موبائل میں مگن ہو کر ان کی بات کاٹنا۔',
    rootCauseUrdu: 'بچپن کی قربانیوں کو بھول جانا اور اپنی مصروفیت کو والدین کے وقت سے زیادہ اہم سمجھنا۔',
    practicalLessonUrdu: 'والدین کے سامنے عاجزی اور مسکراہٹ دنیا کا سب سے بڑا اخلاقی اور روحانی سرمایہ ہے۔',
    actionChallengeUrdu: 'آج والدین کے پاس جا کر ان کے ہاتھ چومیں، ان کے پاؤں دبائیں یا اگر وہ دور ہیں تو فون کر کے ان کی خیریت پوچھیں۔',
    iconName: 'Heart',
    points: 30,
  },
  {
    id: 'oaop-8',
    titleUrdu: 'سخت کلامی اور طنز کے وار',
    titleEn: 'Harsh Speech & Mockery',
    categoryUrdu: 'گفتگو کے آداب',
    ayahArabic: 'وَقُولُوا لِلنَّاسِ حُسْنًا',
    surahReference: 'سورۃ البقرۃ: ۸۳',
    ayahTranslationUrdu: 'اور تمام لوگوں سے اچھی، خوبصورت اور شائستہ بات کہو۔',
    realLifeProblemUrdu: 'ماتحتوں، دکانداروں، ڈرائیوروں یا بچوں پر بلاوجہ رعب جھاڑنا اور طنزیہ جملوں سے ان کا دل دکھانا۔',
    rootCauseUrdu: 'تکبر، رتبے کا زعم اور زبان کی بے لگامی۔',
    practicalLessonUrdu: 'کلام میں مٹھاس اور لہجے میں عاجزی انسان کو ہر دلعزیز بناتی ہے اور معاشرے میں امن پھیلاتی ہے۔',
    actionChallengeUrdu: 'آج دن بھر میں جتنے لوگوں سے بات کریں، چہرے پر مسکراہٹ اور نرم ترین لہجہ اختیار کریں۔',
    iconName: 'MessageSquare',
    points: 20,
  },
];

// -------------------------------------------------------------
// 9. COGNITIVE BIASES & LOGICAL FALLACIES ("کیا میں صحیح سوچ رہا ہوں؟")
// -------------------------------------------------------------
export const COGNITIVE_BIASES_MASTER: CognitiveBiasModule[] = [
  {
    id: 'bias-confirmation',
    titleUrdu: 'اپنی من پسند بات کی تلاش (Confirmation Bias)',
    termEnglish: 'Confirmation Bias',
    definitionUrdu: 'انسان کا صرف ان باتوں اور خبروں کو تلاش کرنا اور سچ ماننا جو اس کے پہلے سے بنے ہوئے خیالات کی تائید کریں، اور مخالف سچائی کو مکمل نظر انداز کر دینا۔',
    howOurMindTrapsUsUrdu: 'ہمارا دماغ اپنی رائے کے خلاف دلائل سنتے ہی خطرہ محسوس کرتا ہے اور صرف اپنی تسلی کی چیزیں چنتا ہے۔',
    relatableStoryUrdu: 'سیاست یا کھیل میں ہم اپنے پسندیدہ کھلاڑی کی ہر غلطی کو حادثہ اور مخالف کی ہر خوبی کو سازش قرار دیتے ہیں۔',
    quranicCureVerse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ وَلا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلاَّ تَعْدِلُوا اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ',
    quranicCureReference: 'سورۃ المائدۃ: ۸',
    quranicCureExplanationUrdu: 'قرآن انصاف کو جذبات سے الگ کرنے کا حکم دیتا ہے؛ سچائی کو اپنائیں چاہے وہ آپ کے مخالف کے پاس ہو۔',
    diagnosticQuestionUrdu: 'کیا میں نے کبھی اپنے مخالف نظریے کی کتاب یا ویڈیو غیر جانبدار ہو کر دیکھی ہے؟',
    dailyThinkingCheckUrdu: 'آج کسی اختلافی مسئلے پر اپنے مخالف کا سب سے مضبوط نکتہ تلاش کریں اور اس کا اعتراف کریں۔',
  },
  {
    id: 'bias-emotional-reasoning',
    titleUrdu: 'جذبات کو دلیل سمجھنا (Emotional Reasoning)',
    termEnglish: 'Emotional Reasoning',
    definitionUrdu: 'یہ سمجھنا کہ چونکہ مجھے ایسا "محسوس" ہو رہا ہے اس لیے یہ لازماً سچ ہے۔ غصے، خوف یا محبت کے زیرِ اثر فیصلوں کو حقائق پر ترجیح دینا۔',
    howOurMindTrapsUsUrdu: 'شدید جذبات کے وقت دماغ کا منطقی حصہ کمزور ہو جاتا ہے اور ہم وقتی احساس کو حتمی سچ مان بیٹھتے ہیں۔',
    relatableStoryUrdu: 'کسی کے بارے میں دل میں شک پیدا ہوا تو یہ مان لینا کہ وہ واقعی برا انسان ہے، بغیر کسی ثبوت کے۔',
    quranicCureVerse: 'إِن يَتَّبِعُونَ إِلاَّ الظَّنَّ وَمَا تَهْوَى الأَنفُسُ وَلَقَدْ جَاءَهُم مِّن رَّبِّهِمُ الْهُدَىٰ',
    quranicCureReference: 'سورۃ النجم: ۲۳',
    quranicCureExplanationUrdu: 'قرآن خواہشات اور ظن و گمان کی پیروی کو گمراہی قرار دیتا ہے اور سچی وحی و دلیل کی پیروی سکھاتا ہے۔',
    diagnosticQuestionUrdu: 'کیا میرا یہ فیصلہ ٹھوس حقائق پر مبنی ہے یا وقتی غصے اور جذبات کا نتیجہ ہے؟',
    dailyThinkingCheckUrdu: 'کوئی بھی اہم فیصلہ غصے یا بے پناہ خوشی کی حالت میں نہ لیں؛ ۲۴ گھنٹے بعد ٹھنڈے دماغ سے دوبارہ سوچیں۔',
  },
  {
    id: 'bias-bandwagon',
    titleUrdu: 'بھیڑ چال اور اکثریت کی اندھی پیروی (Bandwagon Effect)',
    termEnglish: 'Bandwagon Effect',
    definitionUrdu: 'کسی بات کو صرف اس لیے سچ مان لینا یا کرنا کہ "سب لوگ یہی کر رہے ہیں"۔ رواج کو دلیل سمجھ لینا۔',
    howOurMindTrapsUsUrdu: 'اکثریت سے الگ ہونے پر اکیلے پن کا ڈر محسوس ہوتا ہے اس لیے انسان بغیر سوچے ہجوم کے پیچھے چل پڑتا ہے۔',
    relatableStoryUrdu: 'شادی میں مہنگی فضول رسومات صرف اس لیے کرنا کہ "لوگ کیا کہیں گے اور سب ایسا ہی کرتے ہیں"۔',
    quranicCureVerse: 'وَإِن تُطِعْ أَكْثَرَ مَن فِي الأَرْضِ يُضِلُّوكَ عَن سَبِيلِ اللَّهِ إِن يَتَّبِعُونَ إِلاَّ الظَّنَّ',
    quranicCureReference: 'سورۃ الانعام: ۱۱۶',
    quranicCureExplanationUrdu: 'قرآن واضح کرتا ہے کہ کثرت یا اکثریت سچائی کا پیمانہ نہیں ہے۔ سچائی دلیل اور حقانیت کا نام ہے۔',
    diagnosticQuestionUrdu: 'اگر معاشرے کے سب لوگ غلط کام کر رہے ہوں، تو کیا میں اکیلا سچ پر کھڑا ہو سکتا ہوں؟',
    dailyThinkingCheckUrdu: 'آج کسی ایسی رسم یا عادت کو چھوڑیں جو صرف رواج کی وجہ سے آپ کی زندگی کا حصہ بنی ہوئی تھی۔',
  },
  {
    id: 'bias-black-and-white',
    titleUrdu: 'سب اچھا یا سب برا سمجھنا (Black-and-White Thinking)',
    termEnglish: 'False Dichotomy / Polarization',
    definitionUrdu: 'دنیا اور انسانوں کو صرف دو انتہاؤں میں دیکھنا: یا تو وہ مکمل فرشتہ ہے یا مکمل شیطان، کوئی درمیانی صورت نہیں۔',
    howOurMindTrapsUsUrdu: 'دماغ کے لیے پیچیدگی کو سمجھنا مشکل ہوتا ہے اس لیے وہ آسان لیکن خطرناک انتہاؤں میں تقسیم کر دیتا ہے۔',
    relatableStoryUrdu: 'کسی دوست کی ایک غلطی دیکھ کر اس کی پچھلی تمام اچھائیوں اور احسانات کو ایک جھٹکے میں بھلا دینا۔',
    quranicCureVerse: 'وَآخَرُونَ اعْتَرَفُوا بِذُنُوبِهِمْ خَلَطُوا عَمَلا صَالِحًا وَآخَرَ سَيِّئًا عَسَى اللَّهُ أَن يَتُوبَ عَلَيْهِمْ',
    quranicCureReference: 'سورۃ التوبۃ: ۱۰۲',
    quranicCureExplanationUrdu: 'قرآن انسانوں کے تنوع اور نیکی و بدی کے ملاپ کا حقیقت پسندانہ شعور دیتا ہے اور اعتدال سکھاتا ہے۔',
    diagnosticQuestionUrdu: 'کیا میں کسی شخص کی ایک کوتاہی کی وجہ سے اس کے سارے اچھے پہلوؤں کو رد تو نہیں کر رہا؟',
    dailyThinkingCheckUrdu: 'جس شخص سے آپ کا اختلاف ہے، آج اس کی کسی ایک حقیقی خوبی کو کھلے دل سے تسلیم کریں۔',
  },
  {
    id: 'bias-ad-hominem',
    titleUrdu: 'بات کے بجائے بولنے والے پر حملہ (Ad Hominem)',
    termEnglish: 'Ad Hominem Fallacy',
    definitionUrdu: 'سامنے والے کی دلیل کا جواب دینے کے بجائے اس کی ذات، ذات پات، لباس یا کردار پر طنز کر کے اس کی بات کو رد کرنا۔',
    howOurMindTrapsUsUrdu: 'جب دلیل کا جواب نہ ہو تو انسان غصے میں آ کر ذاتی حملوں پر اتر آتا ہے تاکہ بحث جیت سکے۔',
    relatableStoryUrdu: 'کوئی صفائی کی بات کرے تو کہنا کہ "تم پہلے اپنا چہرہ تو دیکھو، تم ہمیں کیا سکھاؤ گے!"',
    quranicCureVerse: 'قَالُوا إِنَّمَا أَنتَ مِنَ الْمُسَحَّرِينَ ۝ مَا أَنتَ إِلاَّ بَشَرٌ مِّثْلُنَا فَأْتِ بِآيَةٍ إِن كُنتَ مِنَ الصَّادِقِينَ',
    quranicCureReference: 'سورۃ الشعراء: ۱۵۳-۱۵۴',
    quranicCureExplanationUrdu: 'قرآن میں انبیاء کے مخالفین ہمیشہ ان کی ذات پر طنز کرتے تھے، جبکہ دین سکھاتا ہے کہ بات کو اس کے وزن سے پرکھا جائے۔',
    diagnosticQuestionUrdu: 'کیا میں دلیل کا جواب دلیل سے دیتا ہوں یا بات کرنے والے کی ذات پر حملہ کرتا ہوں؟',
    dailyThinkingCheckUrdu: 'آج اگر کوئی چھوٹا یا مخالف بھی سچی بات کہے تو بغیر کسی تنقید کے اس کی بات سنیں اور مانیں۔',
  },
];

// -------------------------------------------------------------
// 10. CLAIM VS EVIDENCE ANALYZER ("دلیل اور دعویٰ میں فرق")
// -------------------------------------------------------------
export const CLAIM_VS_EVIDENCE_QUIZ_DATA: ClaimVsEvidenceItem[] = [
  {
    id: 'cve-1',
    statementUrdu: '”ہمارے محلے کے پانی کے ٹیسٹ میں آرسینک کی مقدار مقررہ حد سے ۳ گنا زیادہ نکلی ہے، یہ رپورٹ لیبارٹری سے تصدیق شدہ ہے۔“',
    isEvidence: true,
    categoryUrdu: 'صحت و ماحول',
    explanationUrdu: 'یہ ایک قابلِ تصدیق دلیل (Evidence) ہے کیونکہ اس کے پیچھے مستند لیبارٹری ٹیسٹ اور پیمائش شدہ ڈیٹا موجود ہے۔',
    quranicRuleUrdu: 'قرآن ثبوت اور برہان کا تقاضا کرتا ہے: ”قُلْ هَاتُوا بُرْهَانَكُمْ“۔',
    quranReference: 'سورۃ البقرۃ: ۱۱۱',
  },
  {
    id: 'cve-2',
    statementUrdu: '”مجھے پکا یقین ہے کہ فلاں افسر بے ایمان ہے، کیونکہ اس کے بات کرنے کا انداز مجھے بالکل پسند نہیں آیا۔“',
    isEvidence: false,
    categoryUrdu: 'معاشرتی رائے',
    explanationUrdu: 'یہ محض ایک ذاتی دعویٰ اور بدگمانی ہے؛ ذاتی پسند ناپسند کسی جرم کا ثبوت نہیں بن سکتی۔',
    quranicRuleUrdu: 'قرآن بدگمانی سے منع کرتا ہے: ”إِنَّ بَعْضَ الظَّنِّ إِثْمٌ“ (بے شک بعض گمان گناہ ہوتے ہیں)۔',
    quranReference: 'سورۃ الحجرات: ۱۲',
  },
  {
    id: 'cve-3',
    statementUrdu: '”اس پودے کے پتوں کا قہوہ پینے سے شوگر کی بیماری ہمیشہ کے لیے جڑ سے ختم ہو جاتی ہے، میرے چچا نے بتایا تھا۔“',
    isEvidence: false,
    categoryUrdu: 'طب و علاج',
    explanationUrdu: 'یہ صرف سنی سنائی بات اور انفرادی دعویٰ ہے؛ طبی سائنس میں جب تک کلینیکل ٹرائلز نہ ہوں، دوا ثابت نہیں ہوتی۔',
    quranicRuleUrdu: 'قرآن بغیر علم کے بات کرنے سے روکتا ہے: ”وَلا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ“۔',
    quranReference: 'سورۃ الاسراء: ۳۶',
  },
  {
    id: 'cve-4',
    statementUrdu: '”موسمیاتی ادارے کی سیٹلائٹ تصاویر اور بارش کے گزشتہ ۵۰ سالہ ریکارڈ سے ثابت ہے کہ رواں سال خشک سالی بڑھی ہے۔“',
    isEvidence: true,
    categoryUrdu: 'سائنس و کائنات',
    explanationUrdu: 'یہ مستند سائنسی مشاہدے اور تاریخی ڈیٹا پر مبنی ٹھوس ثبوت ہے جسے ہر کوئی خود چیک کر سکتا ہے۔',
    quranicRuleUrdu: 'قرآن زمین اور آسمان کے مشاہدے کی دعوت دیتا ہے: ”قُلِ انظُرُوا مَاذَا فِي السَّمَاوَاتِ وَالأَرْضِ“۔',
    quranReference: 'سورۃ یونس: ۱۰۱',
  },
  {
    id: 'cve-5',
    statementUrdu: '”اس سکول کی تعلیم خراب ہے کیونکہ اس کی عمارت بہت پرانی اور چھوٹی ہے۔“',
    isEvidence: false,
    categoryUrdu: 'تعلیم و معیار',
    explanationUrdu: 'یہ ظاہری شکل و صورت پر مبنی قیاس آرائی ہے۔ سکول کا معیار اساتذہ، نتائج اور نصاب سے ناپا جاتا ہے عمارت کے رنگ سے نہیں۔',
    quranicRuleUrdu: 'ظواہر کے دھوکے سے بچنا اور حقیقت پر نظر رکھنا قرآنی اصول ہے۔',
    quranReference: 'سورۃ النحل: ۷۸',
  },
];

// -------------------------------------------------------------
// 11. HEARSAY VS FACT VERIFICATION ("سنی سنائی بات یا حقیقت؟")
// -------------------------------------------------------------
export const HEARSAY_VS_FACT_SCENARIOS: HearsayVsFactItem[] = [
  {
    id: 'hvf-1',
    scenarioTitleUrdu: 'واٹس ایپ پر وائرل میسج: "کل سے تمام بینک بند ہو رہے ہیں"',
    scenarioDescriptionUrdu: 'ایک وائس نوٹ آیا جس میں ایک نامعلوم شخص پریشان کن آواز میں کہہ رہا ہے کہ اپنے سارے پیسے نکال لیں، کل سے بینکوں کے اکاؤنٹ منجمد ہو رہے ہیں۔',
    hearsayAspectUrdu: 'نامعلوم ماخذ، کوئی آفیشل نوٹیفکیشن نہیں، جذباتی اور خوف پھیلانے والا لہجہ۔',
    howToVerifyUrdu: [
      'سٹیٹ بینک آف پاکستان یا متعلقہ بینک کی آفیشل ویب سائٹ پر پریس ریلیز چیک کریں۔',
      'معتبر قومی خبر رساں اداروں کے بلیٹن دیکھیں۔',
      'جب تک تصدیق نہ ہو، میسج کو کسی ایک شخص یا گروپ میں بھی آگے نہ بھیجیں۔',
    ],
    quranicPrincipleUrdu: 'اگر کوئی غیر معتبر شخص خبر لائے تو خوب تحقیق کر لو۔',
    quranReference: 'سورۃ الحجرات: ۶',
    takeawayUrdu: 'خوف پھیلانے والے پیغامات عام طور پر جعلی ہوتے ہیں۔ خاموش رہنا اور تصدیق کرنا سب سے بڑی دانشمندی ہے۔',
  },
  {
    id: 'hvf-2',
    scenarioTitleUrdu: 'سوشل میڈیا پر ایڈیٹ شدہ ویڈیو اور بدنامی کی مہم',
    scenarioDescriptionUrdu: 'ایک ۱۰ سیکنڈ کی ویڈیو کلپ شیئر ہو رہی ہے جس میں ایک معزز استاد یا لیڈر کی بات سیاق و سباق سے کاٹ کر دکھائی گئی ہے تاکہ لوگ ان پر غصہ کریں۔',
    hearsayAspectUrdu: 'پوری گفتگو کے بجائے چند سیکنڈ کا ٹکڑا، سنسنی خیز موسیقی اور کیپشن۔',
    howToVerifyUrdu: [
      'پورا اصل انٹرویو یا مکمل تقریر یوٹیوب یا ماخذ سے نکال کر سنیں۔',
      'بات کے سیاق و سباق اور موقع محل کو سمجھیں۔',
      'کمنٹس میں گالیاں دینے کے بجائے عقل اور تحقیق کا مظاہرہ کریں۔',
    ],
    quranicPrincipleUrdu: 'سیاق و سباق سے بات کاٹنا تحریف اور ظلم ہے۔',
    quranReference: 'سورۃ النساء: ۴۶',
    takeawayUrdu: 'آج کل ویڈیو ایڈٹ کرنا چند منٹ کا کام ہے۔ ادھوری ویڈیو پر رائے قائم کرنا گناہ اور ناانصافی ہے۔',
  },
  {
    id: 'hvf-3',
    scenarioTitleUrdu: 'محلے میں کسی کے کردار کے بارے میں افواہ',
    scenarioDescriptionUrdu: 'ایک پڑوسی نے آ کر کہا: "فلاں دکاندار چوری کا مال بیچتا ہے، مجھے فلاں نے بتایا تھا"۔',
    hearsayAspectUrdu: 'تیسرے درجے کی سنی سنائی بات، کوئی چشم دید گواہ نہیں، بغض یا کاروباری رقابت کا امکان۔',
    howToVerifyUrdu: [
      'بات کرنے والے سے پوچھیں کہ "کیا آپ نے اپنی آنکھوں سے دیکھا تھا؟"',
      'اگر ثبوت نہ ہو تو اسے وہیں روکیں اور غیبت کا حصہ نہ بنیں۔',
      'کسی بے گناہ کی ساکھ خراب کرنے کے گناہ سے ڈریں۔',
    ],
    quranicPrincipleUrdu: 'بدگمانی اور ٹوہ لگانے سے باز رہو۔',
    quranReference: 'سورۃ الحجرات: ۱۲',
    takeawayUrdu: 'جب تک ٹھوس اور چشم دید ثبوت نہ ہو، ہر انسان بے گناہ ہے اور اس کی عزت محفوظ ہے۔',
  },
];

// -------------------------------------------------------------
// 12. UNDERSTANDING LIFE QUESTIONS IN THE LIGHT OF QURAN ("قرآن کی روشنی میں اپنے سوالات کو سمجھنا")
// -------------------------------------------------------------
export const LIFE_QUESTIONS_IN_QURAN_MASTER: LifeQuestionInQuran[] = [
  {
    id: 'lq-1',
    questionUrdu: 'ہم پر مصیبتیں اور سخت حالات کیوں آتے ہیں؟',
    questionEn: 'Why do hardships and trials occur in human life?',
    categoryUrdu: 'آزمائش اور زندگی کی حقیقت',
    whyWeAskThisUrdu: 'جب انسان بیماری، نقصان یا غربت کا سامنا کرتا ہے تو وہ سوچتا ہے کہ کیا خدا مجھ سے ناراض ہے؟',
    quranicPerspectiveUrdu: 'قرآن سکھاتا ہے کہ یہ دنیا عیش کا مستقل گھر نہیں بلکہ ایک امتحانی ہال ہے۔ مشکلات سزا نہیں بلکہ انسان کے صبر، کردار کی پختگی اور درجات کی بلندی کا ذریعہ ہیں۔',
    keyAyahArabic: 'وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الأَمْوَالِ وَالأَنفُسِ وَالثَّمَرَاتِ وَبَشِّرِ الصَّابِرِينَ',
    surahReference: 'سورۃ البقرۃ: ۱۵۵',
    ayahTranslationUrdu: 'اور ہم ضرور تمہیں خوف، بھوک، مالوں، جانوں اور پھلوں کے نقصان کے ذریعے آزمائیں گے؛ اور صبر کرنے والوں کو خوشخبری دے دیجیے۔',
    practicalApplicationUrdu: 'تکلیف کے وقت شکوہ کرنے کے بجائے صبر کا دامن تھامیں اور مشکل سے نئی قوت کے ساتھ ابھریں۔',
    mindsetShiftUrdu: '”یہ میرے ساتھ ہی کیوں ہوا؟“ کے بجائے سوچیں ”اس آزمائش میں اللہ مجھ سے کیسا صبر اور کردار چاہتا ہے؟“',
  },
  {
    id: 'lq-2',
    questionUrdu: 'محنت کے باوجود کامیابی میں تاخیر کیوں ہوتی ہے؟',
    questionEn: 'Why is success delayed despite relentless effort?',
    categoryUrdu: 'محنت، توکل اور وقت',
    whyWeAskThisUrdu: 'ہم رات دن محنت کرتے ہیں لیکن فوری نتیجہ نہ ملنے پر مایوس ہو کر کوشش چھوڑ دیتے ہیں۔',
    quranicPerspectiveUrdu: 'انسان کا کام صرف دیانت داری سے کوشش کرنا ہے، نتیجہ اور اس کا بہترین وقت اللہ کے علم میں ہے۔ تاخیر بعض اوقات انسان کو بڑے نقصان سے بچانے کے لیے ہوتی ہے۔',
    keyAyahArabic: 'وَأَن لَّيْسَ لِلإِنسَانِ إِلاَّ مَا سَعَىٰ ۝ وَأَنَّ سَعْيَهُ سَوْفَ يُرَىٰ',
    surahReference: 'سورۃ النجم: ۳۹-۴۰',
    ayahTranslationUrdu: 'اور یہ کہ انسان کے لیے وہی کچھ ہے جس کی اس نے کوشش کی، اور بے شک اس کی کوشش عنقریب دیکھی جائے گی۔',
    practicalApplicationUrdu: 'نتائج کی فکر چھوڑ کر اپنے کام کے معیار اور مسلسل سیکھنے پر توجہ مرکوز رکھیں۔',
    mindsetShiftUrdu: 'فوری کامیابی کے وہم سے نکل کر مستقل مزاجی (Consistency) کو اپنا اصول بنائیں۔',
  },
  {
    id: 'lq-3',
    questionUrdu: 'دنیا میں برے اور ظالم لوگ کیوں پھلتے پھولتے نظر آتے ہیں؟',
    questionEn: 'Why do corrupt and unjust people seem to prosper?',
    categoryUrdu: 'عدلِ الٰہی اور مہلت',
    whyWeAskThisUrdu: 'ظالموں کے محلات اور مظلوموں کی تنگی دیکھ کر دل میں بے چینی پیدا ہوتی ہے کہ انصاف کہاں ہے؟',
    quranicPerspectiveUrdu: 'اللہ ظالم کو مہلت دیتا ہے تاکہ اس پر حجت تمام ہو جائے، لیکن وہ کبھی غافل نہیں ہے۔ دنیا کا نفع عارضی ہے اور اصل انصاف کا دن ابھی باقی ہے۔',
    keyAyahArabic: 'وَلا تَحْسَبَنَّ اللَّهَ غَافِلا عَمَّا يَعْمَلُ الظَّالِمُونَ إِنَّمَا يُؤَخِّرُهُمْ لِيَوْمٍ تَشْخَصُ فِيهِ الأَبْصَارُ',
    surahReference: 'سورۃ ابراہیم: ۴۲',
    ayahTranslationUrdu: 'اور ہرگز اللہ کو اس سے بے خبر نہ سمجھو جو ظالم کر رہے ہیں؛ وہ تو بس انہیں اس دن کے لیے مہلت دے رہا ہے جس میں آنکھیں پھٹی کی پھٹی رہ جائیں گی۔',
    practicalApplicationUrdu: 'کسی کے ظاہری جاہ و جلال سے مرعوب ہو کر اپنے اصولوں کا سودا نہ کریں۔ سچائی پر قائم رہیں۔',
    mindsetShiftUrdu: 'کامیابی کی پیمائش بنگلوں اور پروٹوکول سے نہیں بلکہ پاکیزہ ضمیر اور آخرت کے ترازو سے کریں۔',
  },
  {
    id: 'lq-4',
    questionUrdu: 'رزق کی تنگی اور پریشانی کا اصل روحانی و عملی علاج کیا ہے؟',
    questionEn: 'What is the genuine spiritual and practical cure for financial anxiety?',
    categoryUrdu: 'رزق، شکر اور تقویٰ',
    whyWeAskThisUrdu: 'معاشی تنگی کے وقت انسان غلط راستوں یا مایوسی کی دلدل میں پھنس جاتا ہے۔',
    quranicPerspectiveUrdu: 'قرآن تقویٰ، حلال روزگار میں محنت، شکر گزاری اور استغفار کو برکت کے دروازے کھولنے کی کنجی بتاتا ہے۔',
    keyAyahArabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لا يَحْتَسِبُ',
    surahReference: 'سورۃ الطلاق: ۲-۳',
    ayahTranslationUrdu: 'اور جو کوئی اللہ کا تقویٰ اختیار کرے، اللہ اس کے لیے نکلنے کا راستہ بنا دیتا ہے، اور اسے ایسی جگہ سے رزق دیتا ہے جہاں سے اس کا گمان بھی نہیں ہوتا۔',
    practicalApplicationUrdu: 'روزگار میں ملاوٹ اور جھوٹ سے مکمل توبہ کریں اور اپنے ہنر کو بہتر بنا کر کوشش کریں۔',
    mindsetShiftUrdu: 'تلاشِ رزق کو صرف پیسوں کی دوڑ نہ سمجھیں بلکہ اسے اللہ کی نعمت اور امانت سمجھیں۔',
  },
];

// -------------------------------------------------------------
// 13. WEEKLY DEEP INTELLECTUAL TOPICS ("ہفتہ وار گہرا فکری موضوع")
// -------------------------------------------------------------
export const WEEKLY_INTELLECTUAL_TOPICS_MASTER: WeeklyDeepIntellectualTopic[] = [
  {
    id: 'wit-1',
    titleUrdu: 'آزادیٔ ارادہ بمقابلہ جبر: انسان اپنے اعمال کا کتنا ذمہ دار ہے؟',
    titleEn: 'Free Will vs. Determinism: Moral Accountability in the Quran',
    themeUrdu: 'فلسفۂ تقدیر اور انسانی ذمہ داری',
    summaryUrdu: 'کیا انسان محض ایک کٹھ پتلی ہے یا اسے اپنے فیصلے خود کرنے کی مکمل آزادی دی گئی ہے؟ اس گہرے موضوع پر قرآنی اور فکری رہنمائی۔',
    coreDilemmaUrdu: 'کچھ لوگ اپنی ہر سستی، گناہ اور معاشرتی ناکامی کو "قسمت" کا نام دے کر بری الذمہ ہونا چاہتے ہیں۔',
    classicalAndModernPerspectivesUrdu: [
      'جبریہ (Fatalism): انسان کے پاس کوئی اختیار نہیں (قرآن اس نظریے کو رد کرتا ہے)۔',
      'قدریہ (Absolute Autonomy): انسان مکمل طور پر خدا سے آزاد ہے (قرآن کے توحیدی اصول کے منافی)۔',
      'قرآنی اعتدال (Amr Bayn al-Amrayn): انسان کو نیکی اور بدی کا شعور اور انتخاب کا اختیار دیا گیا ہے، اور وہ اپنے دائرۂ اختیار کے اندر مکمل جوابدہ ہے۔',
    ],
    quranicFrameworkUrdu: 'قرآن واضح فرماتا ہے کہ خدا کسی قوم کی حالت نہیں بدلتا جب تک وہ خود اپنے اندر تبدیلی نہ لائیں۔',
    quranicAyahs: [
      {
        arabic: 'إِنَّ اللَّهَ لا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',
        reference: 'سورۃ الرعد: ۱۱',
        translationUrdu: 'بے شک اللہ کسی قوم کی حالت اس وقت تک نہیں بدلتا جب تک کہ وہ خود اپنے اندر کی حالت کو نہ بدل لیں۔',
      },
      {
        arabic: 'وَهَدَيْنَاهُ النَّجْدَيْنِ',
        reference: 'سورۃ البلد: ۱۰',
        translationUrdu: 'اور ہم نے اسے (خیر اور شر کے) دونوں راستے واضح دکھا دیے۔',
      },
    ],
    philosophicalTakeawayUrdu: 'قسمت بہانے بنانے کا نام نہیں ہے۔ جو حالات آپ کے اختیار سے باہر ہیں وہ آزمائش ہیں، اور جو فیصلے آپ کے اختیار میں ہیں ان کا حساب آپ نے دینا ہے۔',
    weeklyReflectionChallengeUrdu: 'اس ہفتے اپنی کسی ایسی ناکامی پر غور کریں جس کا ملبہ آپ قسمت پر ڈالتے رہے ہیں، اور اس کے حل کے لیے ۳ عملی اقدامات لکھیں۔',
  },
  {
    id: 'wit-2',
    titleUrdu: 'سائنس اور ایمان: کیا عقل اور وحی میں کوئی تضاد ہے؟',
    titleEn: 'Faith, Science & Reason: The Harmony of Intellect and Revelation',
    themeUrdu: 'علمیات اور قرآنی کونیات',
    summaryUrdu: 'جدید دور میں یہ غلط فہمی پھیلائی جاتی ہے کہ سائنس اور مذہب ایک دوسرے کے مخالف ہیں۔ قرآن عقل، تجربے اور مشاہدے کو ایمان کی بنیاد بناتا ہے۔',
    coreDilemmaUrdu: 'کیا کائنات کے مادی قوانین پر تحقیق کرنا خدا کے وجود کے ایمان سے متصادم ہے؟',
    classicalAndModernPerspectivesUrdu: [
      'سائنسی مادہ پرستی: صرف وہی سچ ہے جسے لیبارٹری میں ناپا جا سکے (اخلاقیات اور روحانیت کا انکار)۔',
      'مذہبی انتہا پسندی: سائنسی ترقی کو بے کار یا غیر ضروری سمجھنا۔',
      'قرآنی نقطۂ نظر: کائنات خدا کی کتابِ تکوین ہے اور قرآن کتابِ تدوین؛ دونوں ایک ہی سچے خالق کی طرف سے ہیں اور ان میں کامل ہم آہنگی ہے۔',
    ],
    quranicFrameworkUrdu: 'قرآن بار بار کہتا ہے کہ آسمانوں، زمین، ہواؤں، بادلوں اور انسانی ساخت میں نشانیاں ہیں۔',
    quranicAyahs: [
      {
        arabic: 'سَنُرِيهِمْ آيَاتِنَا فِي الآفَاقِ وَفِي أَنفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ',
        reference: 'سورۃ فصلت: ۵۳',
        translationUrdu: 'عنقریب ہم انہیں کائنات کے اطراف میں اور ان کے اپنے اندر اپنی نشانیاں دکھائیں گے یہاں تک کہ ان پر واضح ہو جائے کہ یہی حق ہے۔',
      },
    ],
    philosophicalTakeawayUrdu: 'سائنس بتاتی ہے کہ کائنات "کیسے" کام کرتی ہے، جبکہ وحی بتاتی ہے کہ کائنات کا "مقصد" کیا ہے۔ دونوں ایک دوسرے کی تکمیل کرتے ہیں۔',
    weeklyReflectionChallengeUrdu: 'اس ہفتے سائنس کی کسی ایک دریافت (جیسے ڈی این اے یا فلکیات) پر مطالعہ کریں اور خالق کی عظمت پر غور کریں۔',
  },
];

// -------------------------------------------------------------
// 14. BALANCED ANSWERS TO TOUGH CONTEMPORARY QUESTIONS ("مشکل سوالات کے متوازن جوابات")
// -------------------------------------------------------------
export const TOUGH_QUESTIONS_BALANCED_MASTER: ToughQuestionBalancedAnswer[] = [
  {
    id: 'tq-1',
    questionUrdu: 'اگر اللہ ہر چیز پر قادر ہے تو دنیا میں شر، ظلم اور معصوموں کی تکلیف کیوں ہے؟ (Problem of Evil)',
    categoryUrdu: 'فلسفۂ خیر و شر',
    commonMisconceptionUrdu: 'یہ سمجھنا کہ اگر دنیا میں دکھ ہے تو نعوذ باللہ خدا رحیم نہیں یا وہ بااختیار نہیں۔',
    balancedIntellectualAnswerUrdu: 'اللہ نے انسان کو ایک روبوٹ نہیں بنایا بلکہ ارادہ اور اختیار دیا۔ اگر انسان ظلم کرتا ہے تو یہ اس کے غلط انتخاب کا نتیجہ ہے۔ دنیا انصاف کا حتمی مقام نہیں بلکہ امتحان ہے؛ اصل اور کامل انصاف آخرت میں ہوگا جہاں ذرہ برابر ظلم کا بھی بدلہ دیا جائے گا۔ اس کے علاوہ تکلیف انسان میں ہمدردی، عاجزی اور روحانی بلندی پیدا کرتی ہے۔',
    quranicGroundingUrdu: 'قرآن واضح کرتا ہے کہ انسان کے ہاتھوں کے کرتوتوں سے فساد ظاہر ہوتا ہے اور زندگی سراسر ایک آزمائش ہے۔',
    surahReference: 'سورۃ الروم: ۴۱ / سورۃ الملک: ۲',
    keyAyahArabic: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلا',
    ayahTranslationUrdu: 'جس نے موت اور زندگی کو پیدا کیا تاکہ تمہیں آزمائے کہ تم میں سے کون عمل کے اعتبار سے زیادہ اچھا ہے۔',
    keyTakeawayUrdu: 'شر کا وجود خدا کے انکار کی دلیل نہیں بلکہ آخرت کے حتمی انصاف اور احتساب کی ضرورت کا سب سے بڑا ثبوت ہے۔',
  },
  {
    id: 'tq-2',
    questionUrdu: 'کیا مختلف مسالک اور فرقوں کے اختلافات میں ایک عام مسلمان گمراہ ہو جائے گا؟',
    categoryUrdu: 'اتحادِ امت اور فہمِ دین',
    commonMisconceptionUrdu: 'یہ سوچنا کہ فرقہ واریت کی وجہ سے دین مشکوک ہو گیا ہے اور ہر کوئی دوسرے کو کافر کہہ رہا ہے۔',
    balancedIntellectualAnswerUrdu: 'دین کے بنیادی عقائد (توحید، رسالت، آخرت، نماز، روزہ، زکوٰۃ، حج، سچائی، عدل) پر پوری امت کا اجماع ہے۔ فروعی یا جزوی تفاصیل میں اختلافِ رائے فطری اور علمی وسعت کی علامت ہے۔ ہمیں بنیادی قرآنی احکام اور اخلاق کو مضبوطی سے پکڑنا چاہیے اور گروہی تعصبات سے خود کو بلند رکھنا چاہیے۔',
    quranicGroundingUrdu: 'قرآن اللہ کی رسی کو مضبوطی سے تھامنے اور تفرقے میں نہ پڑنے کا دو ٹوک حکم دیتا ہے۔',
    surahReference: 'سورۃ آل عمران: ۱۰۳',
    keyAyahArabic: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلا تَفَرَّقُوا',
    ayahTranslationUrdu: 'اور تم سب مل کر اللہ کی رسی کو مضبوطی سے تھام لو اور آپس میں تفرقہ نہ ڈالو۔',
    keyTakeawayUrdu: 'کسی خاص لیبل کے بجائے صرف "مسلمان" بن کر قرآن و سنت کے واضح اخلاقی اور فکری اصولوں پر زندگی گزاریں۔',
  },
];

// -------------------------------------------------------------
// 15. KNOWLEDGE TO CHARACTER JOURNEY ("علم → فہم → عمل → کردار کا سفر")
// -------------------------------------------------------------
export const KNOWLEDGE_TO_CHARACTER_MASTER: KnowledgeToCharacterStage[] = [
  {
    stage: 1,
    titleUrdu: 'پہلا مرحلہ: علم کی طلب (Seeking Knowledge)',
    titleEn: 'Acquiring Knowledge',
    arabicKeyword: 'العلم',
    descriptionUrdu: 'مستند ذرائع سے قرآن، اخلاق اور زندگی کے حقائق کو درست اور بغیر تعصب کے سیکھنا۔',
    quranicLink: 'سورۃ طٰہٰ: ۱۱۴ (وَقُل رَّبِّ زِدْنِي عِلْمًا)',
    indicatorsOfSuccessUrdu: [
      'سنی سنائی باتوں کے بجائے کتاب اور مستند دلائل سے سیکھنا۔',
      'روزانہ کم از کم ۱۵ منٹ سنجیدہ مطالعہ کرنا۔',
    ],
    commonPitfallsUrdu: [
      'صرف بحثیں جیتنے کے لیے معلومات جمع کرنا۔',
      'سوشل میڈیا کے سطحی اقتباسات کو علم سمجھ لینا۔',
    ],
    actionStepUrdu: 'آج کسی ایک قرآنی موضوع کا مستند ترجمہ اور تفسیر پڑھیں۔',
  },
  {
    stage: 2,
    titleUrdu: 'دوسرا مرحلہ: گہرا فہم اور تدبر (Deep Understanding)',
    titleEn: 'Cultivating Understanding & Tadabbur',
    arabicKeyword: 'الفہم والتدبر',
    descriptionUrdu: 'حاصل کردہ علم پر غور کرنا، اس کے اسباب و علل کو سمجھنا اور اسے اپنی ذات پر لاگو کرنا۔',
    quranicLink: 'سورۃ ص: ۲۹ (لِّيَدَّبَّرُوا آيَاتِهِ)',
    indicatorsOfSuccessUrdu: [
      'آیات کو سن کر رکنا اور اپنے آپ سے سوالات پوچھنا۔',
      'ظاہری الفاظ کے پیچھے چھپی حکمت کو محسوس کرنا۔',
    ],
    commonPitfallsUrdu: [
      'بغیر سوچے سمجھے صرف الفاظ کو رٹ لینا۔',
      'دوسروں کو جج کرنے کے لیے علم کا استعمال کرنا۔',
    ],
    actionStepUrdu: 'آج کسی ایک آیت کے مفہوم پر ۵ منٹ خاموشی سے سوچیں۔',
  },
  {
    stage: 3,
    titleUrdu: 'تیسرا مرحلہ: عملی نفاذ (Tangible Practice)',
    titleEn: 'Translating into Daily Action',
    arabicKeyword: 'العمل الصالح',
    descriptionUrdu: 'جو سیکھا ہے اسے روزمرہ معاملات، بول چال، دکان، دفتر اور گھر میں نافذ کرنا۔',
    quranicLink: 'سورۃ الصف: ۲-۳ (لِمَ تَقُولُونَ مَا لا تَفْعَلُونَ)',
    indicatorsOfSuccessUrdu: [
      'گفتگو میں سچائی اور وعدے کی پاسداری نظر آنا۔',
      'غصے اور ناانصافی سے عملاً باز رہنا۔',
    ],
    commonPitfallsUrdu: [
      'بڑی بڑی تقریریں کرنا لیکن اپنے گھر میں رویہ تلخ رکھنا۔',
      'عمل کو بعد کے لیے ٹالتے رہنا۔',
    ],
    actionStepUrdu: 'آج سیکھی ہوئی ایک اخلاقی بات پر اپنے گھر یا دفتر میں عمل کریں۔',
  },
  {
    stage: 4,
    titleUrdu: 'چوتھا مرحلہ: مستقل کردار اور اخلاق (Noble Character)',
    titleEn: 'Solidifying Lifelong Character',
    arabicKeyword: 'الخلق الحسن',
    descriptionUrdu: 'نیکی کا انسان کی فطرت ثانیہ بن جانا، جس سے معاشرے کا ہر فرد خیر اور راحت پائے۔',
    quranicLink: 'سورۃ القلم: ۴ (وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ)',
    indicatorsOfSuccessUrdu: [
      'تنہائی اور مجمع دونوں میں ایک جیسا پاکیزہ رویہ۔',
      'لوگوں کے لیے سراپا رحمت، امانت اور سکون کا باعث بننا۔',
    ],
    commonPitfallsUrdu: [
      'تکبر میں مبتلا ہو کر اپنے آپ کو دوسروں سے نیک سمجھنا۔',
    ],
    actionStepUrdu: 'آج بغیر کسی دکھاوے کے کسی انسان کے ساتھ احسان اور خوبصورت سلوک کریں۔',
  },
];

// -------------------------------------------------------------
// 16. MULTI-LINGUAL SEARCH HELPER (Urdu, Roman Urdu, English)
// -------------------------------------------------------------

export function searchQuranicWisdomMaster(query: string): QuranicTopicItem[] {
  if (!query || !query.trim()) return QURANIC_TOPICS_MASTER_DATA;
  const q = query.toLowerCase().trim();

  // Normalize Roman Urdu mappings
  const romanMappings: Record<string, string[]> = {
    jhoot: ['جھوٹ', 'سچائی', 'تحقیق', 'تکذیب'],
    sach: ['سچ', 'سچائی', 'دیانت', 'صدق'],
    adl: ['عدل', 'انصاف', 'قسط', 'برابری'],
    insaf: ['انصاف', 'عدل', 'حق'],
    aql: ['عقل', 'سوچ', 'تدبر', 'تفکر'],
    soch: ['سوچ', 'فکر', 'تدبر', 'عقل'],
    ghussa: ['غصہ', 'صبر', 'برداشت', 'درگزر'],
    sabr: ['صبر', 'استقامت', 'برداشت'],
    halal: ['حلال', 'رزق', 'کمائی', 'دیانت'],
    rizq: ['رزق', 'حلال', 'برکت'],
    quran: ['قرآن', 'آیت', 'بصیرت'],
    dhoka: ['دھوکہ', 'ملاوٹ', 'ناپ تول'],
    cleanliness: ['صفائی', 'گندگی', 'ماحول'],
    safai: ['صفائی', 'ماحول', 'طہارت'],
    tahqeeq: ['تحقیق', 'تصدیق', 'دلیل'],
    waqt: ['وقت', 'زندگی', 'عمر'],
    walidain: ['والدین', 'ماں باپ', 'خاندان'],
  };

  return QURANIC_TOPICS_MASTER_DATA.filter((item) => {
    // 1. Direct text match
    const directMatch =
      item.titleUrdu.toLowerCase().includes(q) ||
      item.titleEn.toLowerCase().includes(q) ||
      item.taglineUrdu.toLowerCase().includes(q) ||
      item.taglineEn.toLowerCase().includes(q) ||
      item.translationUrdu.toLowerCase().includes(q) ||
      item.translationEn.toLowerCase().includes(q) ||
      item.coreMessageUrdu.toLowerCase().includes(q) ||
      item.categoryTitleUrdu.toLowerCase().includes(q) ||
      item.categoryTitleEn.toLowerCase().includes(q) ||
      item.surahReference.toLowerCase().includes(q) ||
      item.searchKeywords.some((kw) => kw.toLowerCase().includes(q));

    if (directMatch) return true;

    // 2. Roman Urdu matching
    for (const [romanKey, urduEquivalents] of Object.entries(romanMappings)) {
      if (q.includes(romanKey)) {
        const matchesUrdu = urduEquivalents.some(
          (u) =>
            item.titleUrdu.includes(u) ||
            item.taglineUrdu.includes(u) ||
            item.coreMessageUrdu.includes(u) ||
            item.categoryTitleUrdu.includes(u)
        );
        if (matchesUrdu) return true;
      }
    }

    return false;
  });
}
