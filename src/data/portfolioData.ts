export interface LearnerSkillItem {
  id: string;
  nameUrdu: string;
  nameEn: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  levelUrdu: string;
  progressPercent: number; // e.g. 80, 100, 60
  completedCoursesCount: number;
  totalCoursesCount: number;
  status: 'In Progress' | 'Completed';
  statusUrdu: string;
  category: string;
}

export interface PortfolioProjectItem {
  id: string;
  titleUrdu: string;
  titleEn: string;
  skillUrdu: string;
  skillEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  whatILearnedUrdu: string;
  whatILearnedEn: string;
  howHelpsOthersUrdu: string;
  howHelpsOthersEn: string;
  completionDate: string;
  status: 'Completed' | 'In Progress';
  statusUrdu: string;
}

export interface CommunityContributionItem {
  id: string;
  titleUrdu: string;
  titleEn: string;
  categoryUrdu: string;
  categoryEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  date: string;
  impactUrdu: string;
  impactEn: string;
  isVerified: boolean;
}

export interface ProfileSummaryData {
  whatIKnowUrdu: string;
  whatIKnowEn: string;
  whatILearningUrdu: string;
  whatILearningEn: string;
  whatIBuiltUrdu: string;
  whatIBuiltEn: string;
  whatICanDoForOthersUrdu: string;
  whatICanDoForOthersEn: string;
}

export const INITIAL_LEARNER_SKILLS: LearnerSkillItem[] = [
  {
    id: 'skill-ai',
    nameUrdu: 'مصنوعی ذہانت اور ٹیکنالوجی (AI)',
    nameEn: 'AI & Technology',
    level: 'Beginner',
    levelUrdu: 'ابتدائی (Beginner)',
    progressPercent: 80,
    completedCoursesCount: 2,
    totalCoursesCount: 3,
    status: 'In Progress',
    statusUrdu: 'جاری ہے',
    category: 'AI & Technology',
  },
  {
    id: 'skill-comp',
    nameUrdu: 'کمپیوٹر اور ڈیجیٹل بنیادی مہارتیں',
    nameEn: 'Computer & Digital Skills',
    level: 'Beginner',
    levelUrdu: 'ابتدائی (Beginner)',
    progressPercent: 100,
    completedCoursesCount: 3,
    totalCoursesCount: 3,
    status: 'Completed',
    statusUrdu: 'مکمل شدہ ✓',
    category: 'Computer & Digital Skills',
  },
  {
    id: 'skill-comm',
    nameUrdu: 'مؤثر گفتگو اور انگریزی بول چال',
    nameEn: 'Communication & Languages',
    level: 'Intermediate',
    levelUrdu: 'درمیانہ (Intermediate)',
    progressPercent: 60,
    completedCoursesCount: 2,
    totalCoursesCount: 4,
    status: 'In Progress',
    statusUrdu: 'جاری ہے',
    category: 'Communication & Languages',
  },
  {
    id: 'skill-agri',
    nameUrdu: 'جدید زراعت اور روایتی کھاد کا استعمال',
    nameEn: 'Agriculture & Local Skills',
    level: 'Beginner',
    levelUrdu: 'ابتدائی (Beginner)',
    progressPercent: 70,
    completedCoursesCount: 2,
    totalCoursesCount: 3,
    status: 'In Progress',
    statusUrdu: 'جاری ہے',
    category: 'Agriculture & Local Skills',
  },
  {
    id: 'skill-comm-dev',
    nameUrdu: 'کمیونٹی سروس اور مسئلہ حل کرنا',
    nameEn: 'Community Development',
    level: 'Intermediate',
    levelUrdu: 'درمیانہ (Intermediate)',
    progressPercent: 90,
    completedCoursesCount: 3,
    totalCoursesCount: 3,
    status: 'Completed',
    statusUrdu: 'مکمل شدہ ✓',
    category: 'Community Development',
  },
];

export const INITIAL_PORTFOLIO_PROJECTS: PortfolioProjectItem[] = [
  {
    id: 'proj-1',
    titleUrdu: 'AI سے پیشہ ورانہ CV تیار کرنا',
    titleEn: 'Crafting a Professional CV with AI',
    skillUrdu: 'مصنوعی ذہانت (AI)',
    skillEn: 'AI & Technology',
    descriptionUrdu: 'چیٹ جی پی ٹی اور اے آئی پرامپٹنگ کی مدد سے اردو اور انگریزی میں معیاری ریزیومے اور تعارفی خط تیار کیا۔',
    descriptionEn: 'Created a bilingual professional CV and cover letter using tailored AI prompt engineering.',
    whatILearnedUrdu: 'واضح ہدایات (Prompts) لکھنا، تعلیمی تجربات کو منظم کرنا اور پیشہ ورانہ فارمیٹنگ۔',
    whatILearnedEn: 'Learned prompt structuring, summarizing skills concisely, and professional formatting.',
    howHelpsOthersUrdu: 'اپنے محلے اور کالج کے دوستوں کو روزگار کے لیے مفت اور معیاری CV بنانے میں مدد دی جا سکتی ہے۔',
    howHelpsOthersEn: 'Can assist local village youths and students in building high-quality job applications.',
    completionDate: '12 اگست 2026',
    status: 'Completed',
    statusUrdu: 'مکمل شدہ ✓',
  },
  {
    id: 'proj-2',
    titleUrdu: 'اپنے علاقے کے مسئلے کا مختصر Survey',
    titleEn: 'Local Area Community Needs Survey',
    skillUrdu: 'کمیونٹی ڈویلپمنٹ (Community Development)',
    skillEn: 'Community Development',
    descriptionUrdu: 'ڈوبے، برنالہ میں ۱۰ گھرانوں سے پینے کے پانی کی ترسیل اور فلٹریشن کے حوالے سے رائے اکٹھی کی اور خلاصہ مرتب کیا۔',
    descriptionEn: 'Conducted a 10-household survey in Dobay, Barnala regarding clean drinking water access and filter maintenance.',
    whatILearnedUrdu: 'شائستگی سے سوالات پوچھنا، ڈیٹا کا اندراج اور حقیقی مسائل کی ترجیح بندی۔',
    whatILearnedEn: 'Ethical community surveying, listening, structured data collection, and issue prioritization.',
    howHelpsOthersUrdu: 'اس سروے کی بنیاد پر مقامی برادری اور مسجد کمیٹی کو فلٹر کی صفائی کے لیے آمادہ کیا گیا۔',
    howHelpsOthersEn: 'Helped the local community committee allocate maintenance for water filtration points.',
    completionDate: '08 اگست 2026',
    status: 'Completed',
    statusUrdu: 'مکمل شدہ ✓',
  },
  {
    id: 'proj-3',
    titleUrdu: 'کینوا پر مقامی دکان کے لیے ریٹ لسٹ اور پوسٹر',
    titleEn: 'Shop Price List & Digital Catalog on Canva',
    skillUrdu: 'گرافک ڈیزائن اور موبائل اسکلز',
    skillEn: 'Graphic Design & Mobile Skills',
    descriptionUrdu: 'موبائل فون پر کینوا ایپ کا استعمال کر کے کریانہ اسٹور کے لیے صاف ستھری اردو ریٹ لسٹ اور واٹس ایپ بینر تیار کیا۔',
    descriptionEn: 'Designed a clean Urdu price catalog and WhatsApp promotional banner for a local village grocer.',
    whatILearnedUrdu: 'اردو فونٹس کا انتخاب، رنگوں کا توازن اور موبائل پر پروڈکٹ کی تصویر کشی۔',
    whatILearnedEn: 'Urdu typography pairing, color contrast, and creating mobile-friendly promotional graphics.',
    howHelpsOthersUrdu: 'چھوٹے دکاندار بغیر اضافی خرچ کے اپنی سیلز بڑھا سکتے ہیں اور گاہکوں کے لیے شفافیت آتی ہے۔',
    howHelpsOthersEn: 'Local shopkeepers can modernize their sales catalogs without costly design agencies.',
    completionDate: '02 اگست 2026',
    status: 'Completed',
    statusUrdu: 'مکمل شدہ ✓',
  },
  {
    id: 'proj-4',
    titleUrdu: 'بارانی مٹی کی تیاری اور قدرتی کھاد کا چارٹ',
    titleEn: 'Rainfed Soil Preparation & Organic Compost Guide',
    skillUrdu: 'زراعت اور مقامی علم (Agriculture)',
    skillEn: 'Agriculture & Local Knowledge',
    descriptionUrdu: 'ڈوبے کے بزرگ کسان سے انٹرویو لے کر کم بارش والے علاقوں کے لیے نامیاتی کھاد بنانے کا ایک صفحاتی گائیڈ تیار کیا۔',
    descriptionEn: 'Documented an elder farmer traditional organic composting process into a 1-page step-by-step visual guide.',
    whatILearnedUrdu: 'بزرگوں کے روایتی علم کو قلمبند کرنا اور مٹی کی قدرتی زرخیزی کے بنیادی اصول۔',
    whatILearnedEn: 'Capturing elder oral heritage and principles of organic moisture retention for rainfed fields.',
    howHelpsOthersUrdu: 'کاشتکار مہنگی کیمیائی کھادوں کے خرچے سے بچ سکتے ہیں اور زمین زرخیز رہتی ہے۔',
    howHelpsOthersEn: 'Enables neighboring farmers to cut fertilizer expenses by 40% and protect local soil health.',
    completionDate: '28 جولائی 2026',
    status: 'Completed',
    statusUrdu: 'مکمل شدہ ✓',
  },
];

export const INITIAL_COMMUNITY_CONTRIBUTIONS: CommunityContributionItem[] = [
  {
    id: 'contrib-1',
    titleUrdu: 'کسی دوسرے شخص کو Skill سکھائی',
    titleEn: 'Mentored a Peer in Mobile Digital Skills',
    categoryUrdu: 'تعلیم و تدریس',
    categoryEn: 'Peer Tutoring',
    descriptionUrdu: 'محلے کے دو نوجوانوں کو اسمارٹ فون پر گوگل ڈرائیو اور نوٹس ایپ میں حساب کتاب لکھنا سکھایا۔',
    descriptionEn: 'Taught two neighborhood youths how to track small daily budgets on Google Drive and mobile notes.',
    date: '10 اگست 2026',
    impactUrdu: '۲ ساتھیوں نے ڈیجیٹل ریکارڈ رکھنا شروع کیا۔',
    impactEn: '2 peers adopted digital record keeping.',
    isVerified: true,
  },
  {
    id: 'contrib-2',
    titleUrdu: 'علاقے کا مسئلہ identify کیا',
    titleEn: 'Identified & Documented Local Area Issue',
    categoryUrdu: 'برادری کی بہتری',
    categoryEn: 'Civic Identification',
    descriptionUrdu: 'گاؤں کے پرائمری اسکول کے قریب پینے کے پانی کے نل سے لیکیج کو نشان زد کیا اور کمیونٹی کے ساتھ مل کر درست کروایا۔',
    descriptionEn: 'Identified a leaking community water tap near the village primary school and coordinated with elders to fix it.',
    date: '04 اگست 2026',
    impactUrdu: 'روزانہ سینکڑوں لیٹر پینے کا پانی ضائع ہونے سے بچایا۔',
    impactEn: 'Saved hundreds of liters of clean water daily.',
    isVerified: true,
  },
  {
    id: 'contrib-3',
    titleUrdu: 'Community project میں حصہ لیا',
    titleEn: 'Participated in Community Tree Planting & Clean-up',
    categoryUrdu: 'ماحولیاتی خدمت',
    categoryEn: 'Environmental Service',
    descriptionUrdu: 'ڈوبے کے مرکزی راستے پر اتوار کی صبح رضاکارانہ صفائی اور ۳ سایہ دار پودے لگانے کی مہم میں عملی حصہ لیا۔',
    descriptionEn: 'Participated in a Sunday morning volunteer cleanup and planted 3 native shade saplings along the main village path.',
    date: '25 جولائی 2026',
    impactUrdu: 'گاؤں کے راستے کی خوبصورتی اور ماحولیاتی تحفظ۔',
    impactEn: 'Greener village walkway and cleaner surroundings.',
    isVerified: true,
  },
];

export const DEFAULT_PROFILE_SUMMARY: ProfileSummaryData = {
  whatIKnowUrdu: 'کمپیوٹر کی بنیادی مہارتیں، اردو ٹائپنگ، کینوا پر سادہ ڈیزائن، موبائل کا تعلیمی استعمال، اور اے آئی پرامپٹس لکھنے کا طریقہ۔',
  whatIKnowEn: 'Basic computer literacy, Urdu typing, simple graphic design on Canva, educational mobile tools, and practical AI prompting.',
  whatILearningUrdu: 'انگریزی میں روانی سے بات چیت، ڈیجیٹل مارکیٹنگ کے طریقے، اور کمیونٹی پروجیکٹ مینجمنٹ۔',
  whatILearningEn: 'Conversational English fluency, digital marketing basics, and structured community project management.',
  whatIBuiltUrdu: 'پیشہ ورانہ CV، مقامی دکان کا ریٹ لسٹ ڈیزائن، پانی کے مسئلے کا سروے چارٹ، اور بزرگوں کے روایتی زرعی علم کا تحریری خلاصہ۔',
  whatIBuiltEn: 'A professional CV, a village shop rate list, a local water survey report, and an elder agricultural knowledge guide.',
  whatICanDoForOthersUrdu: 'طلباء کو سی وی بنانا سکھا سکتا ہوں، دکانداروں کی آن لائن لسٹنگ میں مدد کر سکتا ہوں، اور محلے کے فلاحی کاموں میں رضاکارانہ وقت دے سکتا ہوں۔',
  whatICanDoForOthersEn: 'I can help peers create CVs, assist local businesses with digital catalogs, and volunteer time for community uplift.',
};
