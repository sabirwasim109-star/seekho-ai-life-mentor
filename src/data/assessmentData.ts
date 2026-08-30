import { 
  AssessmentData, 
  RecommendedSkill, 
  SkillCategory, 
  RoadmapStep, 
  DailyPlanDay, 
  RealLifePurpose, 
  AgeGroup 
} from '../types';

export interface SkillCategoryInfo {
  id: string;
  nameUrdu: string;
  nameEn: string;
  descUrdu: string;
  descEn: string;
  iconName: string;
  badgeColor: string;
}

export const EXISTING_SKILL_CATEGORIES: SkillCategoryInfo[] = [
  {
    id: 'AI & Technology',
    nameUrdu: 'مصنوعی ذہانت و جدید ٹیکنالوجی',
    nameEn: 'AI & Technology',
    descUrdu: 'چیٹ جی پی ٹی، پرامپٹنگ اور روزمرہ AI ٹولز کا استعمال',
    descEn: 'ChatGPT, Prompting, and practical AI tools',
    iconName: 'Bot',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
  },
  {
    id: 'Computer & Digital Skills',
    nameUrdu: 'کمپیوٹر اور ڈیجیٹل بنیادی مہارتیں',
    nameEn: 'Computer & Digital Skills',
    descUrdu: 'ایم ایس آفس، ای میل، فائل مینجمنٹ اور اسمارٹ فون مہارت',
    descEn: 'MS Office, Email, file management & digital literacy',
    iconName: 'Laptop',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
  },
  {
    id: 'Communication & Languages',
    nameUrdu: 'مواصلات اور زبانیں (انگلش و گفتگو)',
    nameEn: 'Communication & Languages',
    descUrdu: 'روزمرہ بول چال، تلفظ، وکیبلری اور اعتماد سے بات چیت',
    descEn: 'Daily spoken English, vocabulary & dialogue',
    iconName: 'MessageSquare',
    badgeColor: 'bg-violet-100 text-violet-900 border-violet-300',
  },
  {
    id: 'Business & Freelancing',
    nameUrdu: 'کاروبار اور آن لائن روزگار',
    nameEn: 'Business & Freelancing',
    descUrdu: 'چھوٹا کاروبار، کھاتہ بک، ڈیجی کھاتہ اور ریموٹ سروسز',
    descEn: 'Small business, DigiKhata, bookkeeping & remote work',
    iconName: 'Store',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
  },
  {
    id: 'Creative Skills',
    nameUrdu: 'تخلیقی مہارتیں اور گرافک ڈیزائن',
    nameEn: 'Creative Skills & Graphic Design',
    descUrdu: 'کینوا، پوسٹرز، بینرز، شادی کارڈز اور سوشل میڈیا ڈیزائن',
    descEn: 'Canva, posters, banners, cards & social media design',
    iconName: 'Palette',
    badgeColor: 'bg-pink-100 text-pink-900 border-pink-300',
  },
  {
    id: 'Agriculture & Local Skills',
    nameUrdu: 'جدید زراعت اور مقامی ہنر',
    nameEn: 'Agriculture & Local Skills',
    descUrdu: 'کچن گارڈننگ، ڈرپ اریگیشن، قدرتی کھاد اور پودوں کی نگہداشت',
    descEn: 'Kitchen gardening, drip irrigation, organic composting & crops',
    iconName: 'Sprout',
    badgeColor: 'bg-green-100 text-green-900 border-green-300',
  },
  {
    id: 'Technical Trades',
    nameUrdu: 'تکنیکی ہنر اور ہوم سروسز',
    nameEn: 'Technical Trades & Home Repair',
    descUrdu: 'سولر پینل، بنیادی بجلی، گھریلو اوزار اور محفوظ پلمبنگ',
    descEn: 'Solar panels, basic electrical, household tools & repair',
    iconName: 'Wrench',
    badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-300',
  },
  {
    id: 'Life Skills',
    nameUrdu: 'روزمرہ زندگی کی مہارتیں اور بجٹ',
    nameEn: 'Life Skills & Budgeting',
    descUrdu: 'وقت کی منصوبہ بندی، گھریلو بجٹ، فرسٹ ایڈ اور لائف بیلنس',
    descEn: 'Time management, household budget, first aid & wellness',
    iconName: 'Heart',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
  },
  {
    id: 'Character & Leadership',
    nameUrdu: 'کردار، اخلاقیات اور قیادت',
    nameEn: 'Character & Leadership',
    descUrdu: 'دیانت داری، فیصلہ سازی، بزرگانہ رہنمائی اور انسانی اقدار',
    descEn: 'Honesty, decision making, mentorship & moral values',
    iconName: 'ShieldCheck',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
  },
  {
    id: 'Community Development',
    nameUrdu: 'برادری اور علاقائی ترقی',
    nameEn: 'Community Development',
    descUrdu: 'صفائی مہم، صاف پانی، کمیونٹی لائبریری اور باہمی تعاون',
    descEn: 'Clean water drives, village committees & social action',
    iconName: 'Building2',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-300',
  },
];

export const SKILL_CATEGORIES_LIST = EXISTING_SKILL_CATEGORIES;

export interface InterestOption {
  id: string;
  nameUrdu: string;
  nameEn: string;
  icon: string;
}

export const INTERESTS_OPTIONS: InterestOption[] = [
  { id: 'Technology', nameUrdu: 'ٹیکنالوجی (Technology)', nameEn: 'Technology', icon: 'Laptop' },
  { id: 'AI', nameUrdu: 'مصنوعی ذہانت (AI)', nameEn: 'AI', icon: 'Bot' },
  { id: 'Business', nameUrdu: 'کاروبار (Business)', nameEn: 'Business', icon: 'Store' },
  { id: 'Freelancing', nameUrdu: 'فری لانسنگ (Freelancing)', nameEn: 'Freelancing', icon: 'Briefcase' },
  { id: 'Communication', nameUrdu: 'گفتگو اور مواصلات (Communication)', nameEn: 'Communication', icon: 'MessageSquare' },
  { id: 'Technical work', nameUrdu: 'تکنیکی و مرمتی کام (Technical Work)', nameEn: 'Technical work', icon: 'Wrench' },
  { id: 'Agriculture', nameUrdu: 'زراعت اور باغبانی (Agriculture)', nameEn: 'Agriculture', icon: 'Sprout' },
  { id: 'Life skills', nameUrdu: 'روزمرہ زندگی کی مہارتیں (Life Skills)', nameEn: 'Life skills', icon: 'Heart' },
  { id: 'Leadership', nameUrdu: 'قیادت اور تنظیم سازی (Leadership)', nameEn: 'Leadership', icon: 'Users' },
  { id: 'Finance', nameUrdu: 'مالیات اور بچت (Finance)', nameEn: 'Finance', icon: 'Coins' },
  { id: 'Community service', nameUrdu: 'خدمتِ خلق و برادری (Community Service)', nameEn: 'Community service', icon: 'Building2' },
  { id: 'Education', nameUrdu: 'تعلیم و تدریس (Education)', nameEn: 'Education', icon: 'GraduationCap' },
];

export interface AssessmentCandidateSkill {
  id: string;
  courseId: string;
  titleUrdu: string;
  titleEn: string;
  category: SkillCategory;
  categoryUrdu: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficultyUrdu: string;
  estimatedTimeUrdu: string;
  estimatedTimeEn: string;
  icon: string;
  badgeUrdu: string;
  badgeEn: string;
  baseMatchScore: number;
  relevantInterests: string[];
  relevantGoals: string[];
  relevantOccupations: string[];
  getWhySuitableUrdu: (data: AssessmentData, userName: string) => string;
  getWhySuitableEn: (data: AssessmentData, userName: string) => string;
  realWorldUsesUrdu: string[];
  realWorldUsesEn: string[];
  firstStepUrdu: string;
  firstStepEn: string;
  realLifePurpose: RealLifePurpose;
  roadmapSteps: RoadmapStep[];
  dailyPlan: DailyPlanDay[];
}

export const CANDIDATE_SKILLS: AssessmentCandidateSkill[] = [
  // 1. Practical AI on Mobile
  {
    id: 'rec-ai-mobile',
    courseId: 'ai-modern-tech-beginner',
    titleUrdu: 'موبائل سے AI اور چیٹ جی پی ٹی کا عملی استعمال',
    titleEn: 'Practical AI & ChatGPT on Mobile',
    category: 'AI & Technology',
    categoryUrdu: 'مصنوعی ذہانت و جدید ٹیکنالوجی',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی (بہت آسان)',
    estimatedTimeUrdu: '۲ سے ۳ ہفتے (روزانہ ۲۰–۳۰ منٹ)',
    estimatedTimeEn: '2–3 weeks (20–30 mins daily)',
    icon: 'Bot',
    badgeUrdu: 'انتہائی مفید و آسان',
    badgeEn: 'High Impact & Easy',
    baseMatchScore: 80,
    relevantInterests: ['AI', 'Technology', 'Education', 'Communication', 'Freelancing', 'Business'],
    relevantGoals: ['Learn a new skill', 'Find better work', 'Start a small business', 'Improve current work', 'Personal development', 'Help my family'],
    relevantOccupations: ['Student', 'Freelancer', 'Business owner', 'Shopkeeper', 'Homemaker', 'Worker', 'Retired', 'Other', 'Farmer'],
    getWhySuitableUrdu: (data, name) => {
      const isSenior = data.ageGroup === '61-70' || data.ageGroup === '70+';
      const seniorContext = isSenior ? 'ہر عمر کے شائقین اور بزرگوں کے لیے بغیر کسی تکنیکی پیچیدگی کے ' : '';
      return `${name ? `${name}! ` : ''}آپ کے شعبے (${data.currentOccupation})، روزانہ دستیاب وقت (${data.dailyTime}) اور مقصد (${data.primaryGoal}) کے لیے AI ایک انقلابی اوزار ہے۔ ${seniorContext}یہ آپ کو روزمرہ خطوط، سوالات، پڑھائی اور کام میں فوری مدد دیتا ہے۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Tailored for your role (${data.currentOccupation}), daily commitment of ${data.dailyTime}, and goal of ${data.primaryGoal}. AI gives you instant support for drafting letters, learning any subject, and solving everyday challenges.`;
    },
    realWorldUsesUrdu: [
      'گھر بیٹھے درخواستیں، خطوط اور سرکاری ای میلز سیکنڈوں میں لکھوانا',
      'بچوں کے اسکول اسباق اور ریاضی کے مسائل کو آسان اردو میں سمجھانا',
      'دکان یا کام کے لیے پرکشش پیغامات اور اشتہارات بنوانا',
      'کوئی بھی نیا موضوع، زبان یا معلومات اپنی مادری زبان میں سیکھنا'
    ],
    realWorldUsesEn: [
      'Drafting official letters, notices, and applications in seconds',
      'Explaining school concepts and homework in simple terms',
      'Creating engaging business announcements and marketing texts',
      'Learning any new topic or language in plain language'
    ],
    firstStepUrdu: 'موبائل براؤزر میں مفت AI ٹول کھولیں اور اپنا پہلا آسان سوال یا پرامپٹ لکھیں۔',
    firstStepEn: 'Open the free AI tool on your phone and type your first practical prompt.',
    realLifePurpose: {
      personalBenefitUrdu: 'آپ کا روزمرہ کا کام تیز ہوگا اور آپ جدید ڈیجیٹل دور کے ساتھ خود اعتمادی سے جڑ جائیں گے۔',
      personalBenefitEn: 'Accelerates your daily work and connects you with modern digital tools.',
      familyHelpUrdu: 'گھر کے بچوں کی پڑھائی میں مدد کر سکیں گے اور گھریلو منصوبہ بندی آسان ہوگی۔',
      familyHelpEn: 'Help children with homework and organize household planning.',
      communityHelpUrdu: 'محلے کے لوگوں کی سرکاری درخواستیں، اشتہارات اور اعلانات بنا کر مفت مدد کریں۔',
      communityHelpEn: 'Help neighbors by drafting official petitions, notices, and community letters.',
      societalBenefitUrdu: 'مثبت، سچی اور تعمیری ڈیجیٹل معلومات کو عام کر کے معاشرے میں علم پھیلائیں۔',
      societalBenefitEn: 'Spread constructive and ethical digital knowledge across society.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'AI کا بنیادی تصور اور پہلا آسان پرامپٹ لکھنا',
        subtitleEn: 'Foundational concept & your first prompt',
        durationUrdu: 'دن ۱ تا ۳',
        durationEn: 'Days 1–3',
        keyActionsUrdu: ['AI کا تعارف سمجھیں', 'موبائل پر رسائی حاصل کریں', 'پہلا سلامی میسج لکھیں'],
        keyActionsEn: ['Understand AI principles', 'Set up mobile access', 'Send first prompt'],
        deliverableUrdu: 'پہلا کامیاب اردو جواب حاصل کریں',
        deliverableEn: 'Receive your first accurate AI response',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'کردار، تفصیل اور انداز بتا کر بہترین نتائج لینا',
        subtitleEn: 'Effective prompting with role and context',
        durationUrdu: 'دن ۴ تا ۷',
        durationEn: 'Days 4–7',
        keyActionsUrdu: ['رول اسائن کریں', 'تفصیلی سوال پوچھیں', 'کوئز حل کریں'],
        keyActionsEn: ['Assign roles', 'Provide context', 'Solve knowledge quiz'],
        deliverableUrdu: '۳ عملی اور کارآمد پرامپٹس بنائیں',
        deliverableEn: 'Craft 3 practical prompts',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: 'ایک باقاعدہ سرکاری درخواست یا تعلیمی گائیڈ تیار کریں',
        subtitleEn: 'Draft an official application or study guide',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['موضوع چنیں', 'مکمل ڈرافٹ حاصل کریں', 'انسانی نظر سے تصدیق کریں'],
        keyActionsEn: ['Select topic', 'Generate full draft', 'Review and verify'],
        deliverableUrdu: 'ایک مکمل باقاعدہ درخواست دستاویز',
        deliverableEn: 'One finalized document',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'اپنے روزمرہ کام، دکان یا گھریلو معاملات میں روزانہ استعمال کریں',
        subtitleEn: 'Integrate into daily study, business, or household tasks',
        durationUrdu: 'ہفتہ ۳',
        durationEn: 'Week 3',
        keyActionsUrdu: ['روزانہ ایک مسئلہ AI سے حل کریں', 'بچت اور وقت کا حساب رکھیں', 'سرٹیفکیٹ حاصل کریں'],
        keyActionsEn: ['Solve one daily problem with AI', 'Track time saved', 'Earn certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Seekho Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'کسی دوست، رشتے دار یا پڑوسی کو سکھائیں یا ان کا کام کریں',
        subtitleEn: 'Teach a family member or help a neighbor with their documents',
        durationUrdu: 'مستقل عمل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['پڑوسی کی درخواست لکھیں', 'بچوں کو AI سے سکھائیں', 'نیک مشورے بانٹیں'],
        keyActionsEn: ['Assist neighbor with notices', 'Mentor youth', 'Share beneficial knowledge'],
        deliverableUrdu: 'معاشرے میں مثبت مدد کا عملی ثبوت',
        deliverableEn: 'Tangible social contribution',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'AI کیا ہے اور موبائل پر کیسے کام کرتی ہے؟',
        titleEn: 'Introduction to AI on Mobile',
        descriptionUrdu: 'آسان اردو میں سمجھیں کہ AI انسان کی مدد کیسے کرتی ہے۔',
        descriptionEn: 'Learn how AI acts as an on-demand personal assistant.',
        durationMinutes: 20,
        points: 25,
        isCompleted: true,
      },
      {
        dayNumber: 2,
        dayNameUrdu: 'دوسرا دن',
        dayNameEn: 'Day 2',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'پرامپٹ لکھنے کا سنہری فارمولا',
        titleEn: 'Golden Prompting Formula',
        descriptionUrdu: 'کردار، تفصیل اور مطلوبہ انداز دے کر درست جواب حاصل کریں۔',
        descriptionEn: 'Role, context, task and formatting rules for precision.',
        durationMinutes: 20,
        points: 25,
        isCompleted: false,
      },
      {
        dayNumber: 3,
        dayNameUrdu: 'تیسرا دن',
        dayNameEn: 'Day 3',
        type: 'practice',
        typeUrdu: 'مشق',
        typeEn: 'Practice',
        titleUrdu: 'عملی مشق: خط اور درخواست لکھنا',
        titleEn: 'Hands-on Practice: Drafting Letters',
        descriptionUrdu: 'بجلی یا اسکول کے لیے ایک باقاعدہ شائستہ درخواست لکھوائیں۔',
        descriptionEn: 'Draft a formal application to school or utility company.',
        durationMinutes: 25,
        points: 30,
        isCompleted: false,
      }
    ]
  },

  // 2. Mobile Graphic Design & Canva
  {
    id: 'rec-canva-design',
    courseId: 'graphic-design-canva',
    titleUrdu: 'کینوا سے موبائل پر گرافک ڈیزائننگ',
    titleEn: 'Mobile Graphic Design with Canva',
    category: 'Creative Skills',
    categoryUrdu: 'تخلیقی مہارتیں اور ڈیزائن',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedTimeUrdu: '۲ سے ۳ ہفتے (روزانہ ۲۵ منٹ)',
    estimatedTimeEn: '2–3 weeks (25 mins daily)',
    icon: 'Palette',
    badgeUrdu: 'تخلیقی و باطلب ہنر',
    badgeEn: 'Creative & High Demand',
    baseMatchScore: 78,
    relevantInterests: ['Freelancing', 'Business', 'Technology', 'Education', 'Community service'],
    relevantGoals: ['Learn a new skill', 'Start a small business', 'Find better work', 'Improve current work', 'Help my family'],
    relevantOccupations: ['Student', 'Homemaker', 'Freelancer', 'Shopkeeper', 'Business owner', 'Worker', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      return `${name ? `${name}! ` : ''}آپ کے شعبے (${data.currentOccupation}) اور دلچسپی کے پیش نظر کینوا موبائل پر اشتہارات، شادی کارڈز اور پوسٹرز بنانے کا شاندار ہنر ہے جس سے فوری روزگار اور گھریلو بچت ممکن ہے۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Matches your background (${data.currentOccupation}) and goals. Design banners, greeting cards, and marketing posts easily on your phone.`;
    },
    realWorldUsesUrdu: [
      'مقامی دکانوں کے لیے فیس بک اور واٹس ایپ اشتہاری بینرز بنانا',
      'شادی بیاہ اور تقاریب کے خوبصورت ڈیجیٹل کارڈز تیار کرنا',
      'یوٹیوب تھمب نیلز اور سوشل میڈیا پوسٹس ڈیزائن کرنا',
      'اسکولوں اور فلاحی کاموں کے لیے تعلیمی چارٹس بنانا'
    ],
    realWorldUsesEn: [
      'Creating WhatsApp & Facebook flyers for local shops',
      'Designing digital invitation and wedding cards',
      'Crafting attractive YouTube thumbnails and social banners',
      'Making community and educational posters'
    ],
    firstStepUrdu: 'کینوا ایپ یا ویب سائٹ کھولیں اور کسی بھی ٹیمپلیٹ میں اپنا نام لکھ کر تبدیل کریں۔',
    firstStepEn: 'Open Canva on mobile and customize your first template.',
    realLifePurpose: {
      personalBenefitUrdu: 'تخلیقی صلاحیت میں اضافہ اور گھر بیٹھے ڈیزائننگ سے اضافی آمدنی کا موقع۔',
      personalBenefitEn: 'Boosts visual creativity and offers remote freelance income potential.',
      familyHelpUrdu: 'گھر کے فنکشنز کے کارڈز اور بچوں کے اسکول پروجیکٹس مفت اور شاندار ڈیزائن کریں۔',
      familyHelpEn: 'Design family function cards and school charts at zero cost.',
      communityHelpUrdu: 'گاؤں کے اسکولوں، فلاحی اعلانات اور کھیلوں کے ایونٹس کے لیے مفت پوسٹرز بنائیں۔',
      communityHelpEn: 'Design posters for local schools, charity drives, and events.',
      societalBenefitUrdu: 'اخلاقی اور پرامن پیغامات کو خوبصورت بصری پوسٹرز کے ذریعے معاشرے میں عام کریں۔',
      societalBenefitEn: 'Promote positive and ethical messages visually across society.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'کینوا کا موبائل انٹرفیس، سائزز اور اردو فونٹس',
        subtitleEn: 'Canva mobile tools & Urdu typography',
        durationUrdu: 'دن ۱ تا ۳',
        durationEn: 'Days 1–3',
        keyActionsUrdu: ['اکاؤنٹ بنائیں', 'سوشل میڈیا لے آؤٹ منتخب کریں', 'اردو ٹیکسٹ شامل کریں'],
        keyActionsEn: ['Sign up', 'Choose dimensions', 'Add Urdu text'],
        deliverableUrdu: 'ایک بنیادی اردو قول کا پوسٹر',
        deliverableEn: 'One simple quote flyer',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'بیک گراؤنڈ صاف کرنا، تصاویر اور رنگوں کا امتزاج',
        subtitleEn: 'Background removal & color palettes',
        durationUrdu: 'دن ۴ تا ۷',
        durationEn: 'Days 4–7',
        keyActionsUrdu: ['بیک گراؤنڈ ہٹائیں', 'آئیکونز لگائیں', 'رنگوں کی ہم آہنگی بنائیں'],
        keyActionsEn: ['Erase backgrounds', 'Add badges', 'Balance contrast'],
        deliverableUrdu: 'ایک دکان کا اشتہاری بینر',
        deliverableEn: 'One shop marketing banner',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: 'شادی یا تقریب کا مکمل ڈیجیٹل دعوتی کارڈ تیار کریں',
        subtitleEn: 'Design a full digital invitation card',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['خوبصورت فریمز چنیں', 'پوری تفصیل لکھیں', 'ہائی کوالٹی ایکسپورٹ کریں'],
        keyActionsEn: ['Select frame', 'Format text', 'Export in HD'],
        deliverableUrdu: 'مکمل ڈیجیٹل تقریب کارڈ',
        deliverableEn: 'Finished digital invitation card',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'مقامی دکان یا کاروبار کے لیے سوشل میڈیا مواد تیار کریں',
        subtitleEn: 'Create marketing assets for a real business or event',
        durationUrdu: 'ہفتہ ۳',
        durationEn: 'Week 3',
        keyActionsUrdu: ['مارکیٹنگ کیٹلاگ بنائیں', 'سوشل میڈیا پر شیئر کریں', 'سرٹیفکیٹ حاصل کریں'],
        keyActionsEn: ['Build catalog', 'Publish on social channels', 'Earn certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'گاؤں کے فلاحی کام، اسکول یا کسی چھوٹے دکاندار کو مفت ڈیزائن بنا کر دیں',
        subtitleEn: 'Help a local school or charity by designing free awareness posters',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['فلاحی پوسٹر ڈیزائن کریں', 'نوجوانوں کو کینوا سکھائیں', 'خدمت کریں'],
        keyActionsEn: ['Design charity posters', 'Teach youth basic design', 'Give back'],
        deliverableUrdu: 'کمیونٹی کی بصری خدمت',
        deliverableEn: 'Community graphic contribution',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'کینوا کا بنیادی تعارف اور موبائل انٹرفیس',
        titleEn: 'Canva Interface & Basic Tools',
        descriptionUrdu: 'موبائل پر کینوا کے بنیادی ٹولز اور لے آؤٹس کا جائزہ لیں۔',
        descriptionEn: 'Explore templates and dimensions on mobile.',
        durationMinutes: 20,
        points: 25,
        isCompleted: false,
      }
    ]
  },

  // 3. Technical & Repair Skills (Safety-First)
  {
    id: 'rec-solar-repair',
    courseId: 'solar-and-electrical-basics',
    titleUrdu: 'بنیادی Technical اور Repair Skills',
    titleEn: 'Technical & Repair Skills',
    category: 'Technical Trades',
    categoryUrdu: 'تکنیکی و عملی دستکاری',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی (محفوظ)',
    estimatedTimeUrdu: '۱.۵ سے ۲ ہفتے (روزانہ ۲۰–۳۰ منٹ)',
    estimatedTimeEn: '1.5–2 weeks (20–30 mins daily)',
    icon: 'Wrench',
    badgeUrdu: 'عملی و خود انحصاری',
    badgeEn: 'Practical Self-Reliance',
    baseMatchScore: 76,
    relevantInterests: ['Technical work', 'Agriculture', 'Technology', 'Life skills', 'Community service'],
    relevantGoals: ['Learn a new skill', 'Improve current work', 'Find better work', 'Help my family', 'Help my community'],
    relevantOccupations: ['Worker', 'Farmer', 'Shopkeeper', 'Student', 'Homemaker', 'Retired', 'Business owner', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      return `${name ? `${name}! ` : ''}آپ کے شعبے (${data.currentOccupation}) اور وقت (${data.dailyTime}) کے لیے گھریلو اوزاروں کا محفوظ استعمال اور بنیادی مرمت سیکھنا پیسے بچانے اور ہنگامی حالات میں خود انحصاری کا بہترین ذریعہ ہے۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Safe everyday tool usage, preventative care, and minor repair knowledge save household expenses and build invaluable self-reliance.`;
    },
    realWorldUsesUrdu: [
      'اوزاروں (اسکرو ڈرائیور، پلاس، رینچ) کا درست اور محفوظ طریقہ استعمال',
      'گھریلو دروازوں، قبضوں اور ڈھیلے اسکرو کی احتیاطی مرمت اور تیل لگانا',
      'بجلی، گیس اور پانی کے مین والوز کی فوری پہچان اور ہنگامی حفاظتی اقدامات',
      'یہ جاننا کہ کون سا کام خود کرنا ہے اور کب مستند ٹیکنیشن کو بلانا ہے'
    ],
    realWorldUsesEn: [
      'Safe and proper handling of essential household hand tools',
      'Preventive tightening of loose hinges and minor hardware maintenance',
      'Locating main utility shutoffs during emergencies (water, gas, electric)',
      'Recognizing clear boundaries on when to call certified technicians'
    ],
    firstStepUrdu: 'گھر کے ٹول باکس کا معائنہ کریں، اوزاروں کو صاف کپڑے سے پونچھیں اور خشک جگہ پر رکھیں۔',
    firstStepEn: 'Inspect household tools, clean them dry, and store safely away from moisture.',
    realLifePurpose: {
      personalBenefitUrdu: 'ہنگامی حالات میں گھبراہٹ ختم ہوگی اور بنیادی دیکھ بھال سے سامان کی عمر بڑھے گی۔',
      personalBenefitEn: 'Builds calmness during emergencies and prolongs appliance lifespan.',
      familyHelpUrdu: 'گھر میں بجلی و گیس کے ممکنہ خطرات سے خاندان کو محفوظ رکھیں گے اور غیر ضروری خرچ بچے گا۔',
      familyHelpEn: 'Keeps household safe from hazards and prevents costly minor damage.',
      communityHelpUrdu: 'محلے کے بزرگوں یا ضرورت مندوں کے گھر کی چھوٹی موٹی مرمت میں فی سبیل اللہ مدد کریں۔',
      communityHelpEn: 'Assist elderly neighbors with safe minor household maintenance.',
      societalBenefitUrdu: 'معاشرے میں حفاظتی شعور اور باوقار دستی ہنر مندی کا کلچر پروان چڑھائیں۔',
      societalBenefitEn: 'Promote safety standards and dignity of practical craftsmanship.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'ٹولز کی پہچان، گرپ اور سیفٹی کے بنیادی اصول',
        subtitleEn: 'Tool identification, grip safety & storage',
        durationUrdu: 'دن ۱ تا ۳',
        durationEn: 'Days 1–3',
        keyActionsUrdu: ['بنیادی اوزار پہچانیں', 'ہاتھوں کی حفاظت یقینی بنائیں', 'پہلا سبق پڑھیں'],
        keyActionsEn: ['Identify hand tools', 'Wear protective gloves', 'Read first lesson'],
        deliverableUrdu: 'ٹول سیفٹی چیک لسٹ مکمل کریں',
        deliverableEn: 'Tool safety checklist verified',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'ڈھیلے اسکرو سخت کرنا اور مشینوں کو صاف رکھنا',
        subtitleEn: 'Tightening hardware & dust prevention',
        durationUrdu: 'دن ۴ تا ۶',
        durationEn: 'Days 4–6',
        keyActionsUrdu: ['ڈھیلا قبضہ کسیں', 'جام تالے پر تیل لگائیں', 'کوئز حل کریں'],
        keyActionsEn: ['Tighten loose screws', 'Lubricate squeaky hinges', 'Solve quiz'],
        deliverableUrdu: 'گھر کے ۳ پوائنٹس کی مرمت',
        deliverableEn: '3 minor maintenance checkpoints',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: 'گھر کے لیے ہنگامی شٹ آف گائیڈ اور ٹول باکس چارٹ تیار کریں',
        subtitleEn: 'Create a household emergency shutoff chart',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['مین سوئچ اور والو پر لیبل لگائیں', 'ہنگامی نمبرز لکھیں', 'خاندان کو آگاہ کریں'],
        keyActionsEn: ['Label main valves', 'List technician emergency contacts', 'Brief family'],
        deliverableUrdu: 'گھریلو سیفٹی چارٹ',
        deliverableEn: 'Home Safety Emergency Chart',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'موسمی دیکھ بھال کا شیڈول بنائیں اور خود انحصاری سے کام لیں',
        subtitleEn: 'Implement seasonal appliance maintenance schedule',
        durationUrdu: 'ہفتہ ۲ کے اختتام پر',
        durationEn: 'End of Week 2',
        keyActionsUrdu: ['پنکھوں کی صفائی', 'سولر شیشے سے گرد ہٹانا', 'سرٹیفکیٹ ڈاؤن لوڈ کریں'],
        keyActionsEn: ['Clean ventilation', 'Wipe solar glass safely', 'Download certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'کسی ضعیف پڑوسی کے گھر کا حفاظتی معائنہ کر کے ان کی مدد کریں',
        subtitleEn: 'Help an elderly neighbor verify their emergency water/electric shutoffs',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['بزرگوں کی مدد کریں', 'سیفٹی ٹپس بتائیں', 'معاشرے میں خیر پھیلائیں'],
        keyActionsEn: ['Assist elders', 'Share hazard prevention tips', 'Serve community'],
        deliverableUrdu: 'محلے میں عملی اور محفوظ مدد',
        deliverableEn: 'Community neighborhood assistance',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'Technical Skills کیا ہیں اور ان کی اہمیت',
        titleEn: 'What are Technical Skills & Safety First',
        descriptionUrdu: 'گھریلو خود انحصاری اور حفاظتی اصولوں کی تفہیم۔',
        descriptionEn: 'Learn self-reliance and basic safety precautions.',
        durationMinutes: 15,
        points: 25,
        isCompleted: false,
      }
    ]
  },

  // 4. Agriculture & Gardening Fundamentals
  {
    id: 'rec-agri-gardening',
    courseId: 'agriculture-gardening-basics',
    titleUrdu: 'زراعت اور باغبانی کی بنیادی سمجھ',
    titleEn: 'Agriculture & Gardening Fundamentals',
    category: 'Agriculture & Local Skills',
    categoryUrdu: 'جدید زراعت اور مقامی ہنر',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedTimeUrdu: '۲ ہفتے (روزانہ ۲۰ منٹ)',
    estimatedTimeEn: '2 weeks (20 mins daily)',
    icon: 'Sprout',
    badgeUrdu: 'قدرتی پیداوار و صحت',
    badgeEn: 'Organic Health & Food',
    baseMatchScore: 77,
    relevantInterests: ['Agriculture', 'Life skills', 'Community service', 'Business', 'Technical work'],
    relevantGoals: ['Help my family', 'Start a small business', 'Improve current work', 'Help my community', 'Personal development', 'Learn a new skill'],
    relevantOccupations: ['Farmer', 'Homemaker', 'Worker', 'Retired', 'Shopkeeper', 'Student', 'Business owner', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      return `${name ? `${name}! ` : ''}آپ کے پس منظر (${data.currentOccupation}) اور مقصد (${data.primaryGoal}) کے لیے گھر کے صحن، گملوں یا زمین پر زراعت و باغبانی خالص غذا، ذہنی سکون اور گھریلو بجٹ کے تحفظ کا قدرتی راستہ ہے۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Organic cultivation, kitchen gardening, and smart water usage provide fresh nutrition, mental calmness, and household grocery savings.`;
    },
    realWorldUsesUrdu: [
      'گھر کے گملوں میں پودینہ، دھنیا، ہری مرچ اور سبزیاں اگانا',
      'بھربھری زرخیز مٹی، گوبر اور خشک پتوں سے قدرتی کھاد بنانا',
      'پانی کی بچت کے طریقے اور صبح و شام پانی دینے کے سنہری اصول',
      'پودوں کی قدرتی نگہداشت اور گھریلو و دیسی کیڑوں سے بچاؤ'
    ],
    realWorldUsesEn: [
      'Growing fresh mint, coriander, and vegetables in household pots',
      'Preparing natural compost from dry leaves and organic matter',
      'Water conservation and optimal morning/evening irrigation timing',
      'Organic pest control and plant aeration'
    ],
    firstStepUrdu: 'کسی پرانے ڈبے یا گملے میں مٹی بھریں اور پودینے کی چند شاخیں یا دھنیے کے بیج بوئیں۔',
    firstStepEn: 'Fill a container with crumbly loamy soil and plant mint cuttings or coriander seeds.',
    realLifePurpose: {
      personalBenefitUrdu: 'قدرت کے قریب رہنے سے ذہنی سکون حاصل ہوگا اور تازہ و کیمیکل سے پاک سبزی ملے گی۔',
      personalBenefitEn: 'Offers mental tranquility and pesticide-free fresh greens.',
      familyHelpUrdu: 'گھر کے کچن کا خرچ کم ہوگا اور خاندان کو صحت مند اور خالص غذا میسر آئے گی۔',
      familyHelpEn: 'Reduces grocery expenses and provides fresh nutrition to family.',
      communityHelpUrdu: 'گاؤں یا محلے میں پودے بانٹیں اور شجرکاری مہم میں پودے لگا کر حصہ لیں۔',
      communityHelpEn: 'Distribute organic plant saplings and lead neighborhood greening.',
      societalBenefitUrdu: 'ماحولیاتی آلودگی کے خاتمے اور زمین کی زرخیزی کی بحالی میں اپنا کردار ادا کریں۔',
      societalBenefitEn: 'Combats climate change and restores ecological balance.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'مٹی کی جانچ، مناسب بیج اور سورج کی روشنی کی پہچان',
        subtitleEn: 'Soil texture, seed selection & sunlight',
        durationUrdu: 'دن ۱ تا ۳',
        durationEn: 'Days 1–3',
        keyActionsUrdu: ['زرخیز مٹی تیار کریں', 'دھوپ کی جگہ منتخب کریں', 'پہلا بیج لگائیں'],
        keyActionsEn: ['Prepare loamy soil', 'Select sunny spot', 'Sow first seeds'],
        deliverableUrdu: 'پہلا بویا گیا گملہ یا کیاری',
        deliverableEn: 'First planted container',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'صبح شام کا پانی، قدرتی کھاد اور جڑی بوٹیوں کی تلفی',
        subtitleEn: 'Irrigation balance, organic composting & weeding',
        durationUrdu: 'دن ۴ تا ۷',
        durationEn: 'Days 4–7',
        keyActionsUrdu: ['نمی چیک کریں', 'قدرتی کھاد مکس کریں', 'کوئز مکمل کریں'],
        keyActionsEn: ['Check soil moisture', 'Apply organic compost', 'Complete quiz'],
        deliverableUrdu: 'پودے کی صحت مند نشوونما',
        deliverableEn: 'Healthy sprout growth',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: '۳ روزمرہ سبزیوں پر مشتمل کچن گارڈننگ یونٹ تیار کریں',
        subtitleEn: 'Establish a 3-herb household kitchen garden',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['پودینہ، دھنیا، مرچ کا سیٹ بنائیں', 'خشک پتوں کی ملچنگ کریں', 'ریکارڈ رکھیں'],
        keyActionsEn: ['Plant mint, coriander, chilies', 'Apply organic leaf mulch', 'Log growth'],
        deliverableUrdu: 'مکمل کچن گارڈن کارنر',
        deliverableEn: 'Finished Kitchen Garden',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'تازہ پیداوار توڑیں اور گھریلو کھانوں میں استعمال کریں',
        subtitleEn: 'Harvest fresh produce for daily household cooking',
        durationUrdu: 'ہفتہ ۲ کے اختتام پر',
        durationEn: 'End of Week 2',
        keyActionsUrdu: ['پہلی سبزی توڑیں', 'خاندان کو کھلائیں', 'سرٹیفکیٹ حاصل کریں'],
        keyActionsEn: ['Harvest fresh herbs', 'Serve to family', 'Earn certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'اپنے پڑوسی یا رشتے دار کو پودینہ و سبزی کی پنیری تحفے میں دیں اور سکھائیں',
        subtitleEn: 'Gift vegetable saplings to a neighbor and teach them container gardening',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['پودے تحفے میں دیں', 'کچن گارڈننگ سکھائیں', 'گاؤں کو سرسبز بنائیں'],
        keyActionsEn: ['Gift saplings', 'Mentor neighbors', 'Green the community'],
        deliverableUrdu: 'کمیونٹی شجرکاری و باغبانی اثر',
        deliverableEn: 'Community greening contribution',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'زراعت اور باغبانی کی اہمیت اور فوائد',
        titleEn: 'Importance of Gardening & Food Security',
        descriptionUrdu: 'خالص خوراک اور قدرتی زندگی کے فوائد کو سمجھیں۔',
        descriptionEn: 'Understand fresh food security and plant biology.',
        durationMinutes: 15,
        points: 25,
        isCompleted: false,
      }
    ]
  },

  // 5. Home & Daily Life Skills
  {
    id: 'rec-life-skills',
    courseId: 'home-daily-life-skills-basics',
    titleUrdu: 'روزمرہ زندگی کی مفید Skills',
    titleEn: 'Home & Daily Life Skills',
    category: 'Life Skills',
    categoryUrdu: 'روزمرہ زندگی کی مہارتیں اور صحت',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedTimeUrdu: '۱.۵ سے ۲ ہفتے (روزانہ ۱۵ منٹ)',
    estimatedTimeEn: '1.5–2 weeks (15 mins daily)',
    icon: 'Heart',
    badgeUrdu: 'نظم و ضبط و خوشحالی',
    badgeEn: 'Daily Order & Peace',
    baseMatchScore: 75,
    relevantInterests: ['Life skills', 'Finance', 'Leadership', 'Communication', 'Community service', 'Education'],
    relevantGoals: ['Personal development', 'Help my family', 'Improve current work', 'Help my community', 'Learn a new skill'],
    relevantOccupations: ['Homemaker', 'Student', 'Worker', 'Retired', 'Farmer', 'Shopkeeper', 'Freelancer', 'Business owner', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      return `${name ? `${name}! ` : ''}آپ کے روزمرہ معمول (${data.dailyTime}) اور مقصد کے لیے وقت کی منصوبہ بندی، گھریلو ذمہ داریوں کی تقسیم، اور پرسکون فیصلے روزمرہ زندگی کو پرسکون اور کامیاب بناتے ہیں۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Time prioritization, sharing household responsibilities, and composed decision-making build a harmonious, peaceful daily life.`;
    },
    realWorldUsesUrdu: [
      'روزانہ کے اہم ترین ۳ کاموں کی ترجیحی فہرست بنانا اور وقت پر عمل کرنا',
      'گھریلو کاموں اور ذمہ داریوں کو بغیر تلخی کے خوش اسلوبی سے تقسیم کرنا',
      'گھر اور سامان کو منظم رکھنا، صفائی اور ہاتھ دھونے کے اصولوں پر عمل',
      'غصے کی حالت میں فیصلہ نہ کرنا اور پرسکون انداز میں مسائل کے ۲ حل سوچنا'
    ],
    realWorldUsesEn: [
      'Prioritizing top 3 daily tasks and conquering distractions',
      'Harmonious division of family chores and mutual appreciation',
      'Maintaining clean living spaces and hygienic habits',
      'Cool-headed decision making and weighing long-term consequences'
    ],
    firstStepUrdu: 'آج شام اپنے کل کے صرف ۳ اہم ترین کام ایک کاغذ یا فون کے نوٹ میں لکھیں۔',
    firstStepEn: 'Write down your top 3 priority tasks for tomorrow on paper or phone notes.',
    realLifePurpose: {
      personalBenefitUrdu: 'روزانہ کے ذہنی دباؤ اور بے ترتیبی سے نجات ملے گی اور خود اعتمادی پیدا ہوگی۔',
      personalBenefitEn: 'Reduces daily mental clutter and builds strong personal discipline.',
      familyHelpUrdu: 'گھر میں محبت، باہمی احترام اور سکون کی فضا قائم ہوگی اور جھگڑے ختم ہوں گے۔',
      familyHelpEn: 'Fosters mutual respect, reduces domestic friction, and brings harmony.',
      communityHelpUrdu: 'محلے میں صفائی، وقت کی پابندی اور صلح صفائی کا عملی نمونہ پیش کریں۔',
      communityHelpEn: 'Model punctuality, cleanliness, and peaceful conflict resolution.',
      societalBenefitUrdu: 'معاشرے میں ذمہ دار، مہذب اور بااخلاق شہریوں کی بنیاد رکھیں۔',
      societalBenefitEn: 'Cultivates responsible, empathetic, and disciplined citizenship.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'وقت کی منصوبہ بندی اور روزانہ کے ۳ ترجیحی اہداف',
        subtitleEn: 'Time planning & top 3 daily priorities',
        durationUrdu: 'دن ۱ تا ۳',
        durationEn: 'Days 1–3',
        keyActionsUrdu: ['اسکرین ٹائم محدود کریں', 'صبح کا ٹائم ٹیبل بنائیں', 'پہلا سبق مکمل کریں'],
        keyActionsEn: ['Reduce screen clutter', 'Draft morning routine', 'Complete lesson 1'],
        deliverableUrdu: 'ذاتی روزمرہ ٹائم ٹیبل',
        deliverableEn: 'Personal daily schedule',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'گھر کی صفائی، چیزوں کی مخصوص جگہ اور صحت و صفائی',
        subtitleEn: 'Tidiness, designated storage & hygiene',
        durationUrdu: 'دن ۴ تا ۷',
        durationEn: 'Days 4–7',
        keyActionsUrdu: ['کمرے کو منظم کریں', 'ذمہ داریاں بانٹیں', 'کوئز حل کریں'],
        keyActionsEn: ['Organize living space', 'Share household tasks', 'Pass quiz'],
        deliverableUrdu: 'منظم اور پرسکون کمرہ',
        deliverableEn: 'Clutter-free living space',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: 'خاندانی تعاون چارٹ اور مسئلہ حل کرنے کا فارمولا بنائیں',
        subtitleEn: 'Build a family chore charter and problem-solving sheet',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['خاندان کے ساتھ میٹنگ کریں', 'کاموں کا چارٹ لگائیں', 'مثبت رویہ رکھیں'],
        keyActionsEn: ['Discuss with family', 'Post chore charter', 'Practice empathy'],
        deliverableUrdu: 'گھریلو خاندانی چارٹر',
        deliverableEn: 'Household Harmony Charter',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'مشکل صورتحال میں پرسکون فیصلہ سازی کی عادت اپنائیں',
        subtitleEn: 'Apply composed decision-making during stressful moments',
        durationUrdu: 'ہفتہ ۲ کے اختتام پر',
        durationEn: 'End of Week 2',
        keyActionsUrdu: ['غصے پر قابو رکھیں', 'مستقبل کے نتائج سوچیں', 'سرٹیفکیٹ حاصل کریں'],
        keyActionsEn: ['Control temper', 'Weigh consequences', 'Download certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'کسی دوست یا رشتہ دار کو پریشانی میں پرسکون حل تلاش کرنے میں مدد دیں',
        subtitleEn: 'Counsel a friend or relative facing a stressful challenge calmly',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['ہمدردی سے سنیں', 'نیک مشورہ دیں', 'مثبت ماحول بنائیں'],
        keyActionsEn: ['Listen attentively', 'Provide calm advice', 'Promote peace'],
        deliverableUrdu: 'معاشرتی سکون اور صلح صفائی',
        deliverableEn: 'Community counseling and harmony',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'وقت کی منصوبہ بندی اور ترجیحات کا تعین',
        titleEn: 'Time Management & Prioritization',
        descriptionUrdu: 'اپنے قیمتی وقت کو ضائع ہونے سے بچانے کے طریقے سیکھیں۔',
        descriptionEn: 'Learn to protect your time and defeat distractions.',
        durationMinutes: 15,
        points: 25,
        isCompleted: false,
      }
    ]
  },

  // 6. Small Business & Shop Management
  {
    id: 'rec-small-business',
    courseId: 'business-entrepreneurship-basics',
    titleUrdu: 'چھوٹا کاروبار اور کھاتہ بک مینجمنٹ',
    titleEn: 'Small Business & Shop Management',
    category: 'Business & Freelancing',
    categoryUrdu: 'کاروبار اور آن لائن روزگار',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedTimeUrdu: '۲ سے ۳ ہفتے (روزانہ ۲۰ منٹ)',
    estimatedTimeEn: '2–3 weeks (20 mins daily)',
    icon: 'Store',
    badgeUrdu: 'منافع و ترقی',
    badgeEn: 'Profit & Growth',
    baseMatchScore: 76,
    relevantInterests: ['Business', 'Finance', 'Freelancing', 'Technology', 'Leadership'],
    relevantGoals: ['Start a small business', 'Improve current work', 'Find better work', 'Help my family', 'Learn a new skill'],
    relevantOccupations: ['Shopkeeper', 'Business owner', 'Farmer', 'Freelancer', 'Worker', 'Homemaker', 'Student', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      return `${name ? `${name}! ` : ''}آپ کے مقصد (${data.primaryGoal}) کے لیے ڈیجیٹل کھاتہ، ادھار کی وصولی، اور منافع کا درست حساب آپ کے کام کو جدید اور منافع بخش بنانے میں فوری مدد دے گا۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Digital bookkeeping, credit recovery reminders, and cash flow control ensure sustainable business growth and higher profits.`;
    },
    realWorldUsesUrdu: [
      'موبائل ایپ (DigiKhata) سے روزانہ کے ادھار اور نقد کا حساب رکھنا',
      'گاہکوں کو شائستہ واٹس ایپ ریمائنڈرز بھیج کر پھنسا ہوا ادھار وصول کرنا',
      'فالتو اخراجات اور منافع کا درست تعین کر کے دکان کی وسعت',
      'گاہکوں سے اچھے اخلاق اور شفافیت کے ساتھ مستقل گاہک بنانا'
    ],
    realWorldUsesEn: [
      'Tracking daily receivables, cash in hand, and sales on mobile',
      'Automated polite WhatsApp credit payment reminders',
      'Accurate cost and profit margin calculation',
      'Building long-term customer trust with transparent service'
    ],
    firstStepUrdu: 'فون میں ڈیجیٹل کھاتہ انسٹال کریں اور آج کی پہلی ۳ انٹریز لکھیں۔',
    firstStepEn: 'Install a digital bookkeeping app and log your first 3 cash/credit entries.',
    realLifePurpose: {
      personalBenefitUrdu: 'مالی بے ترتیبی اور ادھار ڈوبنے کا خوف ختم ہوگا اور آمدنی میں برکت ہوگی۔',
      personalBenefitEn: 'Eliminates lost credit debts and builds financial clarity.',
      familyHelpUrdu: 'کاروبار کی آمدنی میں اضافے سے خاندان کی ضروریات اور مستقبل محفوظ ہوگا۔',
      familyHelpEn: 'Boosts family financial security through predictable earnings.',
      communityHelpUrdu: 'علاقے کے لوگوں کو منصفانہ قیمت اور امانت داری کے ساتھ معیاری سامان مہیا کریں۔',
      communityHelpEn: 'Provide fair pricing, honest weights, and dependable goods to village.',
      societalBenefitUrdu: 'رزقِ حلال، دیانت دار تجارت اور شفاف کاروباری اقدار کا کلچر عام کریں۔',
      societalBenefitEn: 'Champion ethical trade and transparent commerce in society.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'ڈیجیٹل کھاتہ اور بنیادی انٹریز کا طریقہ',
        subtitleEn: 'Digital bookkeeping & initial ledger setup',
        durationUrdu: 'دن ۱ تا ۳',
        durationEn: 'Days 1–3',
        keyActionsUrdu: ['کھاتہ ایپ کھولیں', 'گاہکوں کے نام درج کریں', 'پہلا سبق مکمل کریں'],
        keyActionsEn: ['Open ledger app', 'Add customer accounts', 'Complete lesson 1'],
        deliverableUrdu: 'فعال ڈیجیٹل کھاتہ بک',
        deliverableEn: 'Active digital ledger',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'روزانہ کیش اور ادھار وصولی کے ریمائنڈرز',
        subtitleEn: 'Daily cash reconciliation & reminder alerts',
        durationUrdu: 'دن ۴ تا ۷',
        durationEn: 'Days 4–7',
        keyActionsUrdu: ['کیش بیلنس ملائیں', 'واٹس ایپ میسج بھیجیں', 'کوئز حل کریں'],
        keyActionsEn: ['Balance daily register', 'Send reminder notes', 'Solve quiz'],
        deliverableUrdu: 'پھنسے ہوئے ادھار کی وصولی',
        deliverableEn: 'First recovered credit payment',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: 'واٹس ایپ بزنس پر اپنی دکان کا ڈیجیٹل کیٹلاگ تیار کریں',
        subtitleEn: 'Create a digital product catalog on WhatsApp Business',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['تصاویر اور قیمتیں ڈالیں', 'کیٹلاگ شیئر کریں', 'آرڈرز مینج کریں'],
        keyActionsEn: ['Add photos and prices', 'Share catalog link', 'Manage orders'],
        deliverableUrdu: 'مکمل آن لائن کیٹلاگ',
        deliverableEn: 'Online Product Catalog',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'ماہانہ منافع اور اخراجات کا جامع موازنہ شیٹ بنائیں',
        subtitleEn: 'Implement monthly profit-and-loss audit system',
        durationUrdu: 'ہفتہ ۳',
        durationEn: 'Week 3',
        keyActionsUrdu: ['اخراجات کا حساب رکھیں', 'منافع کا تجزیہ کریں', 'سرٹیفکیٹ حاصل کریں'],
        keyActionsEn: ['Audit expenses', 'Calculate margins', 'Earn certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'محلے کے کسی بزرگ یا چھوٹے دکاندار کو موبائل کھاتہ بک سکھائیں',
        subtitleEn: 'Teach a fellow small merchant how to use digital ledger on their phone',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['ساتھی دکاندار کی مدد کریں', 'ایپ انسٹال کروائیں', 'تعاون بڑھائیں'],
        keyActionsEn: ['Assist fellow merchant', 'Help them set up app', 'Foster solidarity'],
        deliverableUrdu: 'مقامی کاروباری کمیونٹی کی مدد',
        deliverableEn: 'Local merchant mentoring',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'کاروباری کھاتہ اور ڈیجیٹل سسٹم کی بنیادی سمجھ',
        titleEn: 'Fundamentals of Retail Ledger & Cash Flow',
        descriptionUrdu: 'دکان اور کاروبار کے حساب کتاب کو منظم کرنا سیکھیں۔',
        descriptionEn: 'Learn fundamentals of bookkeeping and ledgering.',
        durationMinutes: 20,
        points: 25,
        isCompleted: false,
      }
    ]
  },

  // 7. Online Freelancing & Remote Work
  {
    id: 'rec-freelancing',
    courseId: 'freelancing-digital-work-basics',
    titleUrdu: 'آن لائن فری لانسنگ اور ڈیجیٹل روزگار',
    titleEn: 'Online Freelancing & Remote Work',
    category: 'Business & Freelancing',
    categoryUrdu: 'کاروبار اور آن لائن روزگار',
    difficulty: 'Intermediate',
    difficultyUrdu: 'درمیانی',
    estimatedTimeUrdu: '۳ سے ۴ ہفتے (روزانہ ۳۰ منٹ)',
    estimatedTimeEn: '3–4 weeks (30 mins daily)',
    icon: 'Briefcase',
    badgeUrdu: 'آن لائن کمائی و آزادی',
    badgeEn: 'Online Earning & Remote',
    baseMatchScore: 74,
    relevantInterests: ['Freelancing', 'Technology', 'AI', 'Business', 'Communication'],
    relevantGoals: ['Find better work', 'Start a small business', 'Learn a new skill', 'Help my family', 'Personal development'],
    relevantOccupations: ['Student', 'Freelancer', 'Worker', 'Homemaker', 'Business owner', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      return `${name ? `${name}! ` : ''}آپ کے اہداف (${data.primaryGoal}) اور دلچسپی کے مطابق گھر بیٹھے بین الاقوامی و مقامی کلائنٹس کو سروسز دینا اور آن لائن باعزت روزگار کمانا ممکن ہے۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Unlocks verified methods to offer digital services to local and remote clients with structured milestone delivery.`;
    },
    realWorldUsesUrdu: [
      'فری لانسنگ پلیٹ فارمز پر پروفیشنل پروفائل بنانا',
      'کلائنٹ کو شائستہ اور پرکشش پروپوزل لکھ کر آرڈر حاصل کرنا',
      'بروقت ڈیلیوری اور فائیو اسٹار ریٹنگز برقرار رکھنا',
      'بینک یا جاز کیش میں محفوظ طریقے سے فیس وصول کرنا'
    ],
    realWorldUsesEn: [
      'Setting up a professional profile on freelance networks',
      'Writing high-converting client proposals',
      'Delivering milestone tasks with high ratings',
      'Receiving payments safely to local bank/wallet'
    ],
    firstStepUrdu: 'اپنی کسی ایک بہترین مہارت (ڈیزائن، ڈیٹا یا AI پرامپٹنگ) کی فہرست بنائیں۔',
    firstStepEn: 'List your top digital skill and draft a 2-line service summary.',
    realLifePurpose: {
      personalBenefitUrdu: 'گھر بیٹھے آزادی کے ساتھ اپنی شرائط پر کام کرنے کا موقع اور اضافی آمدنی۔',
      personalBenefitEn: 'Work independently from home with flexible remote income.',
      familyHelpUrdu: 'خاندان کی کفالت اور اخراجات میں فوری اور باوقار ہاتھ بٹائیں۔',
      familyHelpEn: 'Provide meaningful financial support to family household.',
      communityHelpUrdu: 'علاقے کے بیروزگار نوجوانوں کو فری لانسنگ اور ڈیجیٹل ہنر مفت سکھائیں۔',
      communityHelpEn: 'Mentor local unemployed youth in legitimate remote work.',
      societalBenefitUrdu: 'ملک میں زرمبادلہ اور جدید ڈیجیٹل افرادی قوت کا کلچر مضبوط کریں۔',
      societalBenefitEn: 'Contribute to ethical digital economy and knowledge exports.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'سروس کا انتخاب اور پروفائل کی تیاری',
        subtitleEn: 'Service niche selection & bio setup',
        durationUrdu: 'دن ۱ تا ۵',
        durationEn: 'Days 1–5',
        keyActionsUrdu: ['ایک نِش منتخب کریں', 'پروفائل ڈرافٹ لکھیں', 'پہلا سبق مکمل کریں'],
        keyActionsEn: ['Select service niche', 'Write bio', 'Complete lesson 1'],
        deliverableUrdu: 'پروفائل کا خاکہ',
        deliverableEn: 'Profile draft',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'پروپوزل رائٹنگ اور سیمپل پورٹ فولیو تیار کرنا',
        subtitleEn: 'Proposal writing & sample portfolio',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['۳ فرضی پروجیکٹس بنائیں', 'پروپوزل پریکٹس کریں', 'کوئز حل کریں'],
        keyActionsEn: ['Create 3 sample artifacts', 'Practice proposal writing', 'Pass quiz'],
        deliverableUrdu: 'سیمپل پورٹ فولیو',
        deliverableEn: 'Sample portfolio',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: 'کسی مقامی یا آن لائن شخص کو ایک مفت ٹیسٹ پروجیکٹ ڈیلیور کریں',
        subtitleEn: 'Deliver a free pilot project to gain first review',
        durationUrdu: 'ہفتہ ۳',
        durationEn: 'Week 3',
        keyActionsUrdu: ['کلائنٹ کا کام مکمل کریں', 'ریویو حاصل کریں', 'فائلز ڈیلیور کریں'],
        keyActionsEn: ['Deliver task', 'Secure feedback review', 'Package files'],
        deliverableUrdu: 'پہلا مکمل پروجیکٹ نمونہ',
        deliverableEn: 'First completed project case study',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'بامعاوضہ آرڈرز وصول کریں اور مستقل کلائنٹس بنائیں',
        subtitleEn: 'Secure paid client orders and build monthly retainers',
        durationUrdu: 'ہفتہ ۴',
        durationEn: 'Week 4',
        keyActionsUrdu: ['ریگولر بولی لگائیں', 'بروقت ڈیلیوری دیں', 'سرٹیفکیٹ حاصل کریں'],
        keyActionsEn: ['Bid on jobs', 'Maintain turnaround', 'Earn certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'اپنے علاقے کے ۲ نوجوانوں کی پروفائل بنوانے میں مفت رہنمائی کریں',
        subtitleEn: 'Mentor 2 local youth to launch their digital freelance journeys',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['نوجوانوں کو گائیڈ کریں', 'اسکیمز سے بچائیں', 'ترقی میں مدد دیں'],
        keyActionsEn: ['Guide youth', 'Protect from scams', 'Foster local jobs'],
        deliverableUrdu: 'کمیونٹی روزگار رہنمائی',
        deliverableEn: 'Youth employment mentorship',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'فری لانسنگ کی حقیقت اور بنیادی تقاضے',
        titleEn: 'What is Freelancing & Prerequisites',
        descriptionUrdu: 'آن لائن روزگار کی حقیقت اور تیاری کا جائزہ لیں۔',
        descriptionEn: 'Explore how remote freelancing works.',
        durationMinutes: 25,
        points: 25,
        isCompleted: false,
      }
    ]
  },

  // 8. Spoken English & Communication
  {
    id: 'rec-english-comm',
    courseId: 'english-speaking-basics',
    titleUrdu: 'روزمرہ گفتگو اور بنیادی انگلش',
    titleEn: 'Spoken English & Everyday Communication',
    category: 'Communication & Languages',
    categoryUrdu: 'مواصلات اور زبانیں',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedTimeUrdu: '۲ سے ۳ ہفتے (روزانہ ۲۰ منٹ)',
    estimatedTimeEn: '2–3 weeks (20 mins daily)',
    icon: 'MessageSquare',
    badgeUrdu: 'اعتماد و روانی',
    badgeEn: 'Fluency & Confidence',
    baseMatchScore: 75,
    relevantInterests: ['Communication', 'Education', 'Technology', 'Freelancing', 'Leadership', 'Business'],
    relevantGoals: ['Learn a new skill', 'Find better work', 'Personal development', 'Start a small business', 'Help my family'],
    relevantOccupations: ['Student', 'Worker', 'Shopkeeper', 'Homemaker', 'Freelancer', 'Business owner', 'Retired', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      return `${name ? `${name}! ` : ''}آپ کے شعبے (${data.currentOccupation}) اور خواہش کے لیے آسان انگریزی الفاظ، اعتماد سے گفتگو اور شائستہ بول چال روزمرہ زندگی اور کیریئر میں نئے مواقع کھولتی ہے۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Everyday conversational English phrases and active listening boost personal confidence, job interviews, and global communication.`;
    },
    realWorldUsesUrdu: [
      'روزمرہ تعارف، سلام دعا اور آسان جملے بغیر جھجھک بولنا',
      'اسمارٹ فون پر انگریزی میسجز، ای میلز اور بورڈز آسانی سے پڑھنا',
      'انٹرویو اور دفتری ملاقاتوں میں اعتماد کے ساتھ بات کرنا',
      'بچوں کے ساتھ گھر میں انگلش بول چال کی تفریحی پریکٹس'
    ],
    realWorldUsesEn: [
      'Introducing oneself and everyday conversational greetings with confidence',
      'Reading smartphone notifications, app menus, and basic emails',
      'Speaking clearly in job interviews and professional dialogues',
      'Practicing fun English vocabulary games with family children'
    ],
    firstStepUrdu: 'آئینے کے سامنے یا فون ریکارڈر میں ۲ آسان جملوں میں اپنا تعارف انگلش میں بولیں۔',
    firstStepEn: 'Practice a 2-sentence English self-introduction in front of a mirror or voice memo.',
    realLifePurpose: {
      personalBenefitUrdu: 'انگریزی بولنے کا خوف اور جھجھک ختم ہوگی اور خود اعتمادی پیدا ہوگی۔',
      personalBenefitEn: 'Overcomes hesitation and builds natural conversational confidence.',
      familyHelpUrdu: 'گھر کے بچوں کی اسکول انگریزی اور تلفظ کی درستگی میں مدد کر سکیں گے۔',
      familyHelpEn: 'Assist family children with school English vocabulary and reading.',
      communityHelpUrdu: 'محلے کے طلباء کو بنیادی انگریزی تلفظ اور بول چال مفت سکھائیں۔',
      communityHelpEn: 'Tutor neighborhood students in basic spoken English and phonetics.',
      societalBenefitUrdu: 'معاشرے میں رابطے، شائستگی اور باہمی تفہیم کے پل تعمیر کریں۔',
      societalBenefitEn: 'Bridge communication barriers and promote courteous dialogue.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'روزمرہ سلام دعا اور تعارف کے ۱۰ آسان جملے',
        subtitleEn: 'Greetings & 10 essential introductory phrases',
        durationUrdu: 'دن ۱ تا ۳',
        durationEn: 'Days 1–3',
        keyActionsUrdu: ['الفاظ سنیں', 'آواز سے دہرائیں', 'پہلا سبق مکمل کریں'],
        keyActionsEn: ['Listen to audio', 'Repeat aloud', 'Finish lesson 1'],
        deliverableUrdu: 'انگلش تعارف کی آڈیو',
        deliverableEn: 'Self-intro voice recording',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'دکان، سفر اور فون پر بات چیت کے ضروری فقرے',
        subtitleEn: 'Phrases for shopping, travel, and phone calls',
        durationUrdu: 'دن ۴ تا ۷',
        durationEn: 'Days 4–7',
        keyActionsUrdu: ['سوال پوچھنا سیکھیں', 'شائستہ جواب دیں', 'کوئز حل کریں'],
        keyActionsEn: ['Ask questions politely', 'Give clear answers', 'Pass quiz'],
        deliverableUrdu: 'روزمرہ ڈائیلاگ پریکٹس',
        deliverableEn: 'Daily dialogue practice',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: '۱ منٹ کی مسلسل انگریزی تقریر یا کہانی ریکارڈ کریں',
        subtitleEn: 'Record a 1-minute uninterrupted English talk on your daily routine',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['موضوع کا خاکہ بنائیں', 'صاف تلفظ سے بولیں', 'آڈیو محفوظ کریں'],
        keyActionsEn: ['Outline topic', 'Speak clearly', 'Save audio'],
        deliverableUrdu: '۱ منٹ کی آڈیو ریکارڈنگ',
        deliverableEn: '1-minute talk recording',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'روزمرہ میسجز اور گفتگو میں انگریزی الفاظ کا قدرتی استعمال',
        subtitleEn: 'Incorporate English vocabulary into daily texting and chats',
        durationUrdu: 'ہفتہ ۳',
        durationEn: 'Week 3',
        keyActionsUrdu: ['انگلش میں چیٹ کریں', 'ویڈیوز سنیں', 'سرٹیفکیٹ حاصل کریں'],
        keyActionsEn: ['Text in English', 'Listen to talks', 'Earn certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'گھر کے بچوں یا محلے کے ساتھی کے ساتھ روزانہ ۱۰ منٹ انگریزی مکالمہ کریں',
        subtitleEn: 'Run a 10-minute daily English speaking circle for family or peers',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['بچوں کے ساتھ بولیں', 'غلطیوں پر حوصلہ افزائی کریں', 'سکھائیں'],
        keyActionsEn: ['Speak with kids', 'Encourage gently', 'Foster confidence'],
        deliverableUrdu: 'معاشرے میں زبان کی روانی',
        deliverableEn: 'Peer language mentorship',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'انگریزی بول چال کا خوف ختم کرنا اور پہلا تعارف',
        titleEn: 'Overcoming Speaking Anxiety & First Greetings',
        descriptionUrdu: 'آسان الفاظ کے ساتھ بغیر جھجھک بولنا شروع کریں۔',
        descriptionEn: 'Start speaking simple greetings without hesitation.',
        durationMinutes: 20,
        points: 25,
        isCompleted: false,
      }
    ]
  },

  // 9. Financial Literacy & Budgeting
  {
    id: 'rec-financial-lit',
    courseId: 'financial-literacy-budgeting-basics',
    titleUrdu: 'مالیاتی شعور اور گھریلو بجٹ سازی',
    titleEn: 'Financial Literacy & Household Budgeting',
    category: 'Life Skills',
    categoryUrdu: 'روزمرہ زندگی کی مہارتیں اور صحت',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedTimeUrdu: '۲ ہفتے (روزانہ ۱۵ منٹ)',
    estimatedTimeEn: '2 weeks (15 mins daily)',
    icon: 'Coins',
    badgeUrdu: 'بچت و خوشحالی',
    badgeEn: 'Savings & Security',
    baseMatchScore: 75,
    relevantInterests: ['Finance', 'Business', 'Life skills', 'Leadership', 'Community service'],
    relevantGoals: ['Help my family', 'Start a small business', 'Improve current work', 'Personal development', 'Learn a new skill'],
    relevantOccupations: ['Homemaker', 'Worker', 'Farmer', 'Shopkeeper', 'Student', 'Freelancer', 'Business owner', 'Retired', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      return `${name ? `${name}! ` : ''}آپ کے شعبے (${data.currentOccupation}) اور مقصد (${data.primaryGoal}) کے لیے گھریلو بجٹ بنانا، فضول خرچی کی روک تھام اور ہنگامی فنڈ کا قیام خاندان کو معاشی استحکام دیتا ہے۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Household monthly budgeting, emergency reserve funds, and wise saving strategies protect your family from financial shocks.`;
    },
    realWorldUsesUrdu: [
      'ماہانہ آمدنی اور اخراجات کا ۵۰/۳۰/۲۰ کے اصول پر بجٹ بنانا',
      'غیر ضروری خرچوں (فضول خرچی) کی شناخت اور فوری روک تھام',
      'ہنگامی حالات (بیماری، مرمت) کے لیے محفوظ بچت فنڈ تیار کرنا',
      'بینک اکاؤنٹ، ڈیجیٹل والٹس اور منافع بخش بچت کے محفوظ طریقے'
    ],
    realWorldUsesEn: [
      'Building a 50/30/20 monthly budget for income vs essential needs',
      'Identifying and curbing impulsive or wasteful expenses',
      'Establishing a 3-month emergency buffer fund',
      'Safe usage of bank accounts, micro-investments, and digital wallets'
    ],
    firstStepUrdu: 'آج کے تمام چھوٹے بڑے اخراجات ایک کاغذ پر لکھیں اور فالتو اخراجات پر نشان لگائیں۔',
    firstStepEn: 'List every expense made today on paper and flag non-essential costs.',
    realLifePurpose: {
      personalBenefitUrdu: 'قرض اور پیسوں کی تنگی کے خوف سے نجات ملے گی اور مستقبل محفوظ ہوگا۔',
      personalBenefitEn: 'Relieves debt anxiety and builds steady financial freedom.',
      familyHelpUrdu: 'خاندان کو مشکل وقت میں ادھار مانگنے کی ضرورت نہیں پڑے گی اور خوشحالی آئے گی۔',
      familyHelpEn: 'Prevents emergency borrowing and guarantees family stability.',
      communityHelpUrdu: 'محلے کے نوجوانوں کو سود اور قرض کے نقصانات سے بچنے کا مالیاتی شعور دیں۔',
      communityHelpEn: 'Educate community peers against debt traps and impulsive spending.',
      societalBenefitUrdu: 'معاشرے میں سادگی، قناعت اور رزق کی قدردانی کا کلچر عام کریں۔',
      societalBenefitEn: 'Promote contentment, simplicity, and prudent wealth management.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'ماہانہ آمدنی اور اخراجات کا جامع تخمینہ',
        subtitleEn: 'Income vs expense auditing',
        durationUrdu: 'دن ۱ تا ۳',
        durationEn: 'Days 1–3',
        keyActionsUrdu: ['کل آمدنی لکھیں', 'مستقل بلز نوٹ کریں', 'پہلا سبق مکمل کریں'],
        keyActionsEn: ['Record total income', 'List fixed utilities', 'Finish lesson 1'],
        deliverableUrdu: 'آمدن و خرچ کی شیٹ',
        deliverableEn: 'Monthly expense breakdown',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'فالتو خرچوں کی کٹوتی اور بچت کا اصول',
        subtitleEn: 'Cutting impulse spending & saving first',
        durationUrdu: 'دن ۴ تا ۷',
        durationEn: 'Days 4–7',
        keyActionsUrdu: ['فضول خرچی پہچانیں', '۱۰٪ رقم الگ رکھیں', 'کوئز حل کریں'],
        keyActionsEn: ['Spot leakage expenses', 'Set aside 10% first', 'Pass quiz'],
        deliverableUrdu: 'پہلی محفوظ کی گئی بچت',
        deliverableEn: 'First saved emergency fund',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: 'گھر کے لیے ۳ ماہ کا باقاعدہ بجٹ پلانر تیار کریں',
        subtitleEn: 'Build a 3-month family budget planner',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['بجٹ فارمولا لگائیں', 'خاندان کو اعتماد میں لیں', 'چارٹ بنائیں'],
        keyActionsEn: ['Apply budget ratio', 'Consult household', 'Create planner'],
        deliverableUrdu: 'مکمل گھریلو بجٹ پلانر',
        deliverableEn: 'Finished Budget Planner',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'پہلے مہینے کا بجٹ چیک کریں اور بچت کا ہدف حاصل کریں',
        subtitleEn: 'Execute month-end financial audit and achieve savings target',
        durationUrdu: 'ہفتہ ۲ کے اختتام پر',
        durationEn: 'End of Week 2',
        keyActionsUrdu: ['حقیقی اخراجات چیک کریں', 'بچت اکاؤنٹ میں رکھیں', 'سرٹیفکیٹ حاصل کریں'],
        keyActionsEn: ['Audit real costs', 'Deposit savings', 'Earn certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'کسی قریبی رشتے دار یا دوست کو گھریلو بجٹ بنانے میں مدد دیں',
        subtitleEn: 'Help a family member or peer structure a simple debt-free budget',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['دوست کو گائیڈ کریں', 'بچت کے فوائد بتائیں', 'معاشرے میں سادگی پھیلائیں'],
        keyActionsEn: ['Advise friend', 'Share savings strategies', 'Champion simplicity'],
        deliverableUrdu: 'خاندانوں کو معاشی خود انحصاری',
        deliverableEn: 'Household financial empowerment',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'مالیاتی شعور کیا ہے اور بجٹ کی ضرورت کیوں ہے؟',
        titleEn: 'What is Financial Literacy & Need for Budget',
        descriptionUrdu: 'پیسے کے درست استعمال اور بچت کے بنیادی اصول سمجھیں۔',
        descriptionEn: 'Learn fundamental money management principles.',
        durationMinutes: 15,
        points: 25,
        isCompleted: false,
      }
    ]
  },

  // 10. Leadership, Ethics & Community Development
  {
    id: 'rec-leadership-comm',
    courseId: 'character-community-service',
    titleUrdu: 'قیادت، اخلاقیات اور گاؤں کی ترقی',
    titleEn: 'Leadership, Ethics & Community Development',
    category: 'Character & Leadership',
    categoryUrdu: 'کردار، اخلاقیات اور قیادت',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedTimeUrdu: '۲ ہفتے (روزانہ ۲۰ منٹ)',
    estimatedTimeEn: '2 weeks (20 mins daily)',
    icon: 'Users',
    badgeUrdu: 'خدمتِ خلق و برادری',
    badgeEn: 'Service & Leadership',
    baseMatchScore: 74,
    relevantInterests: ['Leadership', 'Community service', 'Education', 'Life skills', 'Communication'],
    relevantGoals: ['Help my community', 'Help my family', 'Personal development', 'Improve current work', 'Learn a new skill'],
    relevantOccupations: ['Retired', 'Worker', 'Teacher', 'Farmer', 'Shopkeeper', 'Student', 'Homemaker', 'Business owner', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      return `${name ? `${name}! ` : ''}آپ کے شعبے (${data.currentOccupation}) اور مقصد (${data.primaryGoal}) کے لیے برادری کے مسائل حل کرنا، دیانت داری اور خدمتِ خلق آپ کے علاقے میں باوقار اثر پیدا کرتی ہے۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Organizing community initiatives, peaceful dispute mediation, and moral leadership empower you to uplift your entire locality.`;
    },
    realWorldUsesUrdu: [
      'گاؤں یا محلے میں صفائی مہم اور صاف پانی کے منصوبے منظم کرنا',
      'باہمی اختلافات اور جھگڑوں کو افہام و تفہیم سے حل کروانا',
      'نوجوانوں کے لیے کھیلوں، تعلیمی لائبریری اور ہنر مندی کی سرگرمیاں بنانا',
      'سرکاری محکموں اور فلاحی اداروں سے رابطہ کر کے علاقے کے مسائل حل کرنا'
    ],
    realWorldUsesEn: [
      'Organizing village sanitation and clean drinking water drives',
      'Facilitating peaceful, empathetic neighborhood conflict resolution',
      'Setting up youth sports circles and community study corners',
      'Liaising with civic authorities to address local infrastructure issues'
    ],
    firstStepUrdu: 'اپنے محلے یا گاؤں کا سب سے بڑا ایک اجتماعی مسئلہ لکھیں اور اس کا ایک آسان حل سوچیں۔',
    firstStepEn: 'Identify one common civic challenge in your neighborhood and outline a 1-step community action.',
    realLifePurpose: {
      personalBenefitUrdu: 'برادری میں عزت، اعتماد اور نیک نامی حاصل ہوگی اور قیادت کا ملکہ پیدا ہوگا۔',
      personalBenefitEn: 'Earns community respect, trust, and authentic leadership capabilities.',
      familyHelpUrdu: 'خاندان کا سر فخر سے بلند ہوگا اور محفوظ و خوشحال ماحول میسر آئے گا۔',
      familyHelpEn: 'Provides an honorable, safe, and collaborative neighborhood for family.',
      communityHelpUrdu: 'گاؤں کے مسائل اجتماعی کوشش سے حل ہوں گے اور باہمی اتحاد بڑھے گا۔',
      communityHelpEn: 'Solves shared village challenges and strengthens community unity.',
      societalBenefitUrdu: 'معاشرے میں خود اعتمادی، خدمت اور اخوت کا لازوال کلچر پروان چڑھائیں۔',
      societalBenefitEn: 'Nurtures solidarity, civic ownership, and public goodwill across society.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'سچے لیڈر کے اوصاف اور خدمتِ خلق کا جذبہ',
        subtitleEn: 'Servant leadership principles & moral compass',
        durationUrdu: 'دن ۱ تا ۳',
        durationEn: 'Days 1–3',
        keyActionsUrdu: ['لیڈرشپ کا تصور سمجھیں', 'لوگوں کو سننا سیکھیں', 'پہلا سبق مکمل کریں'],
        keyActionsEn: ['Understand service mindset', 'Practice active listening', 'Finish lesson 1'],
        deliverableUrdu: 'کمیونٹی سروس چارٹر',
        deliverableEn: 'Community leadership charter',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'مسائل کی نشاندہی اور باہمی مشاورت (شوریٰ)',
        subtitleEn: 'Identifying local needs & mutual consultation',
        durationUrdu: 'دن ۴ تا ۷',
        durationEn: 'Days 4–7',
        keyActionsUrdu: ['بزرگوں اور نوجوانوں سے ملیں', 'مسئلہ منتخب کریں', 'کوئز حل کریں'],
        keyActionsEn: ['Consult elders and youth', 'Select focal issue', 'Pass quiz'],
        deliverableUrdu: 'مقامی مسائل کی ترجیحی لسٹ',
        deliverableEn: 'Local Needs Priority List',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: 'محلے میں ایک عملی صفائی یا درخت لگانے کی مہم منعقد کریں',
        subtitleEn: 'Lead a small local cleanliness or tree planting action drive',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['۵ افراد کو شامل کریں', '۱ گھنٹہ عملی کام کریں', 'رپورٹ شیئر کریں'],
        keyActionsEn: ['Mobilize 5 volunteers', 'Execute 1-hour drive', 'Share photos'],
        deliverableUrdu: 'کمیونٹی مہم کی کامیابی رپورٹ',
        deliverableEn: 'Community Action Report',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'گاؤں یا محلے کی باقاعدہ فلاحی کمیٹی یا بیٹھک تشکیل دیں',
        subtitleEn: 'Establish a recurring monthly neighborhood welfare committee',
        durationUrdu: 'ہفتہ ۲ کے اختتام پر',
        durationEn: 'End of Week 2',
        keyActionsUrdu: ['ماہانہ بیٹھک رکھیں', 'مسائل حل کرائیں', 'سرٹیفکیٹ حاصل کریں'],
        keyActionsEn: ['Schedule monthly meeting', 'Resolve issues', 'Earn certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'نوجوانوں میں سے نئے لیڈرز تیار کریں اور انہیں ذمہ داریاں سونپیں',
        subtitleEn: 'Mentor upcoming young leaders to take ownership of village progress',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['نوجوانوں کو آگے لائیں', 'رہنمائی دیں', 'علاقے کو خوشحال بنائیں'],
        keyActionsEn: ['Empower youth', 'Provide guidance', 'Uplift locality'],
        deliverableUrdu: 'پائیدار علاقائی ترقی و خدمت',
        deliverableEn: 'Enduring community development',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'قیادت کیا ہے اور سچا لیڈر کون ہوتا ہے؟',
        titleEn: 'What is Servant Leadership & Core Values',
        descriptionUrdu: 'خدمت، سچائی اور امانت داری پر مبنی قیادت کے اصول سیکھیں۔',
        descriptionEn: 'Learn moral leadership and community service fundamentals.',
        durationMinutes: 15,
        points: 25,
        isCompleted: false,
      }
    ]
  },

  // 11. Smartphone & Computer Basics
  {
    id: 'rec-smartphone-basics',
    courseId: 'smartphone-safety-elders',
    titleUrdu: 'اسمارٹ فون اور بنیادی کمپیوٹر مہارتیں',
    titleEn: 'Smartphone & Computer Basics',
    category: 'Computer & Digital Skills',
    categoryUrdu: 'کمپیوٹر اور ڈیجیٹل بنیادی مہارتیں',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی (بہت آسان)',
    estimatedTimeUrdu: '۱.۵ سے ۲ ہفتے (روزانہ ۱۵–۲۰ منٹ)',
    estimatedTimeEn: '1.5–2 weeks (15–20 mins daily)',
    icon: 'Laptop',
    badgeUrdu: 'ڈیجیٹل شعور و سہولت',
    badgeEn: 'Digital Ease & Literacy',
    baseMatchScore: 76,
    relevantInterests: ['Technology', 'Education', 'Life skills', 'Communication', 'Business'],
    relevantGoals: ['Learn a new skill', 'Find better work', 'Help my family', 'Personal development', 'Improve current work'],
    relevantOccupations: ['Homemaker', 'Retired', 'Worker', 'Farmer', 'Shopkeeper', 'Student', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      const isSenior = data.ageGroup === '61-70' || data.ageGroup === '70+';
      const seniorNote = isSenior ? 'بزرگوں کے لیے بڑے فونٹ، آواز کی صفائی اور فراڈ سے ۱۰۰٪ حفاظت کے ساتھ ' : '';
      return `${name ? `${name}! ` : ''}آپ کے شعبے (${data.currentOccupation}) اور وقت (${data.dailyTime}) کے لیے ${seniorNote}اسمارٹ فون، واٹس ایپ اور ای میل کا پرسکون اور محفوظ استعمال روزمرہ زندگی کو انتہائی آسان بناتا ہے۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Master essential smartphone navigation, large font comfort, fraud safety, and document management with confidence.`;
    },
    realWorldUsesUrdu: [
      'واٹس ایپ پر فیک کالز، لاٹری پیغامات اور فراڈ لنکس سے ۱۰۰٪ محفوظ رہنا',
      'فونٹ کا سائز بڑا کرنا، اسکرین برائٹنس اور وائس ٹائپنگ کا استعمال',
      'یوٹیوب، تلاوت اور معلوماتی ویڈیوز کی پلے لسٹ بنانا اور دیکھنا',
      'گوگل میپس، آن لائن بلز ادائیگی اور سرکاری ایپس کا آسان استعمال'
    ],
    realWorldUsesEn: [
      '100% protection against SMS scams, fake OTPs, and phishing calls',
      'Enlarging text size and using voice typing for easy messaging',
      'Organizing playlists for educational, health, and religious talks',
      'Paying utility bills online and using digital maps easily'
    ],
    firstStepUrdu: 'فون کی سیٹنگز میں جائیں اور فونٹ سائز کو اپنی پسند کے مطابق آرام دہ اور بڑا کریں۔',
    firstStepEn: 'Open phone settings and adjust display font size for comfortable reading.',
    realLifePurpose: {
      personalBenefitUrdu: 'فون کے استعمال میں خوف اور جھجھک ختم ہوگی اور ڈیجیٹل خودمختاری حاصل ہوگی۔',
      personalBenefitEn: 'Removes technical hesitation and provides full digital independence.',
      familyHelpUrdu: 'پیاروں کے ساتھ ویڈیو کال پر جڑے رہیں گے اور بچوں کے فون معاملات میں مدد کر سکیں گے۔',
      familyHelpEn: 'Stay effortlessly connected with family via smooth video calls.',
      communityHelpUrdu: 'اپنے محلے کے بزرگوں کو فون پر بل جمع کرانا اور فراڈ سے بچنا سکھائیں۔',
      communityHelpEn: 'Help neighborhood elders pay utility bills online and stay scam-free.',
      societalBenefitUrdu: 'معاشرے میں ڈیجیٹل شعور اور سائبر سیکیورٹی کا تحفظ قائم کریں۔',
      societalBenefitEn: 'Promote safe, ethical, and scam-proof digital culture.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'فون کی سیٹنگز، فونٹ بڑا کرنا اور آواز کی ایڈجسٹمنٹ',
        subtitleEn: 'Display adjustments, large font & clear audio',
        durationUrdu: 'دن ۱ تا ۳',
        durationEn: 'Days 1–3',
        keyActionsUrdu: ['بڑا فونٹ کریں', 'برائٹنس ایڈجسٹ کریں', 'پہلا سبق پڑھیں'],
        keyActionsEn: ['Increase font size', 'Adjust brightness', 'Complete lesson 1'],
        deliverableUrdu: 'آسان اور پڑھنے کے قابل اسکرین',
        deliverableEn: 'Readable mobile screen',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'سائبر سیکیورٹی، فیک انعامی میسجز اور پاس ورڈ کا تحفظ',
        subtitleEn: 'Scam defense, fake prize alerts & passwords',
        durationUrdu: 'دن ۴ تا ۶',
        durationEn: 'Days 4–6',
        keyActionsUrdu: ['او ٹی پی کی رازداری رکھیں', 'مشتبہ کالز بلاک کریں', 'کوئز حل کریں'],
        keyActionsEn: ['Never share OTPs', 'Block unknown spam', 'Pass quiz'],
        deliverableUrdu: '۱۰۰٪ محفوظ موبائل فون',
        deliverableEn: '100% scam-shielded phone',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: 'ہنگامی رابطوں، ڈاکٹرز اور بچوں کے نمبرز کی اسپیڈ ڈائل بنائیں',
        subtitleEn: 'Set up favorite speed dial contacts and emergency folder',
        durationUrdu: 'ہفتہ ۲',
        durationEn: 'Week 2',
        keyActionsUrdu: ['اہم نمبرز محفوظ کریں', 'ہوم اسکرین پر رکھیں', 'وائس میسج بھیجیں'],
        keyActionsEn: ['Save key contacts', 'Add to home screen', 'Send voice note'],
        deliverableUrdu: 'ہنگامی رابطہ لسٹ',
        deliverableEn: 'Emergency Speed Dial Setup',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'آن لائن بل کی تفصیل چیک کریں یا گوگل میپس سے راستہ تلاش کریں',
        subtitleEn: 'Check utility bills online or navigate with Google Maps',
        durationUrdu: 'ہفتہ ۲ کے اختتام پر',
        durationEn: 'End of Week 2',
        keyActionsUrdu: ['بل چیک کریں', 'میپس استعمال کریں', 'سرٹیفکیٹ حاصل کریں'],
        keyActionsEn: ['Check bill online', 'Use navigation', 'Earn certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'اپنے خاندان یا پڑوس کے کسی فرد کو فون کی سیفٹی سیٹنگز سکھائیں',
        subtitleEn: 'Help an elderly relative or friend secure their phone against online fraud',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['بزرگوں کی مدد کریں', 'فراڈ سے بچائیں', 'خدمت کریں'],
        keyActionsEn: ['Assist elders', 'Protect from scams', 'Share digital ease'],
        deliverableUrdu: 'محلے میں ڈیجیٹل تحفظ کی آگاہی',
        deliverableEn: 'Community cyber safety assistance',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'اسمارٹ فون کو آسان اور آنکھوں کے لیے آرام دہ بنانا',
        titleEn: 'Making Smartphone Screen Comfortable & Accessible',
        descriptionUrdu: 'بڑے فونٹس اور سکرین سیٹنگز کو ایڈجسٹ کرنا سیکھیں۔',
        descriptionEn: 'Learn to enlarge text and adjust contrast.',
        durationMinutes: 15,
        points: 25,
        isCompleted: false,
      }
    ]
  },

  // 12. AI Fundamentals for All Ages
  {
    id: 'rec-ai-fundamentals',
    courseId: 'ai-fundamentals-all-ages',
    titleUrdu: 'AI کی بنیادی سمجھ — ہر عمر کے لیے',
    titleEn: 'AI Fundamentals for All Ages',
    category: 'AI & Technology',
    categoryUrdu: 'مصنوعی ذہانت و ٹیکنالوجی',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedTimeUrdu: '۱.۵ گھنٹے (روزانہ ۱۵ منٹ)',
    estimatedTimeEn: '1.5 hours (15 mins daily)',
    icon: 'Sparkles',
    badgeUrdu: 'ہر عمر کے لیے موزوں',
    badgeEn: 'All Ages Friendly',
    baseMatchScore: 78,
    relevantInterests: ['AI', 'Technology', 'Education', 'Life skills', 'Communication', 'Leadership'],
    relevantGoals: ['Learn a new skill', 'Personal development', 'Help my family', 'Help my community', 'Improve current work', 'Find better work'],
    relevantOccupations: ['Student', 'Retired', 'Homemaker', 'Worker', 'Farmer', 'Shopkeeper', 'Business owner', 'Freelancer', 'Other'],
    getWhySuitableUrdu: (data, name) => {
      return `${name ? `${name}! ` : ''}آپ کی عمر (${data.ageGroup} سال)، دستیاب وقت (${data.dailyTime}) اور مقصد کے لیے یہ بنیادی کورس ۱۰ سال کے بچے سے لے کر ۷۰+ سال کے بزرگ تک ہر ایک کو AI کی آسان، محفوظ اور اخلاقی تفہیم فراہم کرتا ہے۔`;
    },
    getWhySuitableEn: (data, name) => {
      return `${name ? `${name}, ` : ''}Designed without age barriers. Provides clear foundational understanding of AI, smart prompting, and ethical usage in everyday life.`;
    },
    realWorldUsesUrdu: [
      'سمجھنا کہ AI کیا ہے اور یہ ہماری روزمرہ زندگی میں کہاں کام آ رہی ہے',
      'AI سے سوال پوچھنے کے ۳ سنہری اصول (کردار، تفصیل اور مطلوبہ انداز)',
      'پڑھائی اور کام میں AI کو نقل کے بجائے فہم بڑھانے کا ذریعہ بنانا',
      'ذاتی رازداری کا تحفظ، حقائق کی تصدیق اور محفوظ ڈیجیٹل عادات'
    ],
    realWorldUsesEn: [
      'Understanding what AI is and recognizing its presence in daily tools',
      '3 golden prompt rules: Role, Context, and Formatting',
      'Using AI ethically to deepen understanding rather than copy homework',
      'Data privacy, fact-checking, and responsible digital hygiene'
    ],
    firstStepUrdu: 'پہلا سبق پڑھیں اور اپنے سادہ الفاظ میں ایک جملے میں AI کی تعریف لکھیں۔',
    firstStepEn: 'Read lesson 1 and write your 1-sentence personal definition of AI.',
    realLifePurpose: {
      personalBenefitUrdu: 'جدید دنیا کی ٹیکنالوجی کو بلا خوف سمجھنے اور اعتماد سے بات کرنے کی صلاحیت۔',
      personalBenefitEn: 'Removes intimidation around modern technology and fosters digital confidence.',
      familyHelpUrdu: 'گھر کے تمام افراد کے ساتھ مل کر ٹیکنالوجی کا مثبت اور تعلیمی استعمال سیکھیں۔',
      familyHelpEn: 'Guides the entire family toward safe, productive digital habits.',
      communityHelpUrdu: 'محلے میں AI کے بارے میں غلط فہمیاں دور کریں اور اس کے فوائد بتائیں۔',
      communityHelpEn: 'Dispel myths about AI in the community and advocate for ethical digital tools.',
      societalBenefitUrdu: 'معاشرے میں دیانت دار، سچی اور انسان دوست ٹیکنالوجی کے کلچر کو فروغ دیں۔',
      societalBenefitEn: 'Promote an ethical, human-centric, and constructive AI culture in society.'
    },
    roadmapSteps: [
      {
        stepNumber: 1,
        titleUrdu: 'مرحلہ ۱ — شروع کریں (Start)',
        titleEn: 'Step 1 — Start',
        subtitleUrdu: 'AI کیا ہے اور انسانوں کا مددگار کیسے بنتی ہے',
        subtitleEn: 'What is AI & how it assists humans',
        durationUrdu: 'دن ۱ تا ۲',
        durationEn: 'Days 1–2',
        keyActionsUrdu: ['سبق ۱ پڑھیں', 'تصور سمجھیں', 'کلیدی نکات نوٹ کریں'],
        keyActionsEn: ['Read lesson 1', 'Grasp concepts', 'Take notes'],
        deliverableUrdu: 'AI کی سادہ تعریف',
        deliverableEn: 'Simple definition of AI',
        status: 'in_progress'
      },
      {
        stepNumber: 2,
        titleUrdu: 'مرحلہ ۲ — مشق کریں (Practice)',
        titleEn: 'Step 2 — Practice',
        subtitleUrdu: 'روزمرہ زندگی میں AI کے استعمال اور پرامپٹ کی مشق',
        subtitleEn: 'Daily life examples & prompt formulation',
        durationUrdu: 'دن ۳ تا ۴',
        durationEn: 'Days 3–4',
        keyActionsUrdu: ['سبق ۲ و ۳ پڑھیں', 'کوئز حل کریں', 'ایک پرامپٹ بنائیں'],
        keyActionsEn: ['Read lessons 2 & 3', 'Pass quiz', 'Draft a prompt'],
        deliverableUrdu: 'پرامپٹنگ کوئز میں ۱۰۰٪ اسکور',
        deliverableEn: '100% score in Prompt Quiz',
        status: 'locked'
      },
      {
        stepNumber: 3,
        titleUrdu: 'مرحلہ ۳ — ایک چھوٹا پروجیکٹ بنائیں (Build a Project)',
        titleEn: 'Step 3 — Build a small project',
        subtitleUrdu: 'پڑھائی یا کام کے لیے ۱ ہفتہ وار ٹائم ٹیبل پلانر تیار کریں',
        subtitleEn: 'Create a weekly study or business workflow plan',
        durationUrdu: 'دن ۵',
        durationEn: 'Day 5',
        keyActionsUrdu: ['ہفتہ وار اہداف طے کریں', 'AI سے رہنمائی لیں', 'پروجیکٹ محفوظ کریں'],
        keyActionsEn: ['Define goals', 'Consult AI assistant', 'Save workflow plan'],
        deliverableUrdu: 'ہفتہ وار شیڈول دستاویز',
        deliverableEn: 'Weekly Schedule Document',
        status: 'locked'
      },
      {
        stepNumber: 4,
        titleUrdu: 'مرحلہ ۴ — حقیقی زندگی میں لاگو کریں (Apply in Real Life)',
        titleEn: 'Step 4 — Apply the skill in real life',
        subtitleUrdu: 'محفوظ، اخلاقی اور ذمہ دارانہ AI استعمال کے اصول اپنائیں',
        subtitleEn: 'Practice data privacy and fact-checking protocols',
        durationUrdu: 'دن ۶',
        durationEn: 'Day 6',
        keyActionsUrdu: ['سبق ۵ پڑھیں', 'رازداری کا جائزہ لیں', 'سرٹیفکیٹ ڈاؤن لوڈ کریں'],
        keyActionsEn: ['Read lesson 5', 'Verify privacy rules', 'Download certificate'],
        deliverableUrdu: 'سیکھو کا تصدیق شدہ سرٹیفکیٹ',
        deliverableEn: 'Verified Certificate',
        status: 'locked'
      },
      {
        stepNumber: 5,
        titleUrdu: 'مرحلہ ۵ — دوسروں کی مدد کریں (Help Someone Else)',
        titleEn: 'Step 5 — Help someone else with the skill',
        subtitleUrdu: 'کسی بچے یا بزرگ کو AI سے آسان اردو میں ہوم ورک یا معلومات لینا سکھائیں',
        subtitleEn: 'Show a family member or neighbor how AI can answer their questions in Urdu',
        durationUrdu: 'مستقل',
        durationEn: 'Ongoing',
        keyActionsUrdu: ['پیار سے سکھائیں', 'سیفٹی کا دھیان رکھیں', 'مثبت علم پھیلائیں'],
        keyActionsEn: ['Teach patiently', 'Emphasize safety', 'Share beneficial knowledge'],
        deliverableUrdu: 'خاندان و برادری میں ڈیجیٹل آگاہی',
        deliverableEn: 'Community digital literacy uplift',
        status: 'locked'
      }
    ],
    dailyPlan: [
      {
        dayNumber: 1,
        dayNameUrdu: 'پہلا دن',
        dayNameEn: 'Day 1',
        type: 'learn',
        typeUrdu: 'سبق',
        typeEn: 'Learn',
        titleUrdu: 'AI کیا ہے؟',
        titleEn: 'What is AI?',
        descriptionUrdu: 'مصنوعی ذہانت کا بنیادی تصور آسان مثالوں سے سمجھیں۔',
        descriptionEn: 'Understand fundamental concepts of Artificial Intelligence.',
        durationMinutes: 15,
        points: 25,
        isCompleted: true,
      }
    ]
  }
];

/**
 * Intelligent, Anti-Stereotype Recommendation Engine
 * Recommends the TOP 3 Skills based on comprehensive holistic scoring:
 * - Age
 * - Education
 * - Occupation
 * - Existing skills
 * - Interests (high fidelity domain matching)
 * - Daily available learning time
 * - Main goal
 * 
 * Crucially: Age is never used to restrict any topic (e.g. 60+ / 70+ interested in AI or Freelancing receive AI recommendations).
 */
export function generatePersonalizedRecommendations(
  data: AssessmentData,
  userName: string = 'معزز ساتھی'
): RecommendedSkill[] {
  const userInterests = Array.isArray(data.interests) ? data.interests.map(i => String(i).trim()) : [];
  const userExistingSkills = Array.isArray(data.currentSkills) ? data.currentSkills : [];
  const userGoal = String(data.primaryGoal || '').trim();
  const userOccupation = String(data.currentOccupation || '').trim();
  const userEducation = String(data.educationLevel || '').trim();
  const userTime = String(data.dailyTime || '').trim();
  const userAge = String(data.ageGroup || '').trim();

  // Score each candidate skill
  const scoredSkills = CANDIDATE_SKILLS.map((candidate) => {
    let score = candidate.baseMatchScore;

    // =========================================================================
    // 1. INTERESTS MATCH (Weight: +35 points per match + domain category boosts)
    // =========================================================================
    const matchingInterests = candidate.relevantInterests.filter((intKey) =>
      userInterests.some((uInt) => uInt.toLowerCase().includes(intKey.toLowerCase()) || intKey.toLowerCase().includes(uInt.toLowerCase()))
    );
    score += matchingInterests.length * 35;

    // High-priority domain boosts
    if (userInterests.some(i => i === 'AI' || i.includes('AI') || i === 'Technology') && 
       (candidate.category === 'AI & Technology' || candidate.relevantInterests.includes('AI') || candidate.relevantInterests.includes('Technology'))) {
      score += 65;
    }
    if (userInterests.some(i => i === 'Technical work' || i.includes('Technical')) && candidate.category === 'Technical Trades') {
      score += 70;
    }
    if (userInterests.some(i => i === 'Agriculture' || i.includes('Agriculture')) && candidate.category === 'Agriculture & Local Skills') {
      score += 70;
    }
    if (userInterests.some(i => i === 'Business' || i === 'Finance') && 
       (candidate.category === 'Business & Freelancing' || candidate.id === 'rec-small-business' || candidate.id === 'rec-financial-lit')) {
      score += 60;
    }
    if (userInterests.some(i => i === 'Freelancing') && (candidate.id === 'rec-freelancing' || candidate.id === 'rec-canva-design')) {
      score += 65;
    }
    if (userInterests.some(i => i === 'Life skills') && (candidate.id === 'rec-life-skills' || candidate.id === 'rec-financial-lit')) {
      score += 60;
    }
    if (userInterests.some(i => i === 'Leadership' || i === 'Community service') && candidate.id === 'rec-leadership-comm') {
      score += 65;
    }
    if (userInterests.some(i => i === 'Communication' || i === 'Education') && (candidate.id === 'rec-english-comm' || candidate.id === 'rec-ai-fundamentals')) {
      score += 60;
    }

    // =========================================================================
    // 2. MAIN GOAL MATCH (Weight: +30 points)
    // =========================================================================
    const matchesGoal = candidate.relevantGoals.some((g) =>
      userGoal.toLowerCase().includes(g.toLowerCase()) || g.toLowerCase().includes(userGoal.toLowerCase())
    );
    if (matchesGoal) {
      score += 30;
    }
    if (userGoal.includes('Find better work') || userGoal.includes('بہتر روزگار')) {
      if (candidate.id === 'rec-freelancing' || candidate.id === 'rec-canva-design' || candidate.id === 'rec-solar-repair' || candidate.id === 'rec-ai-fundamentals') {
        score += 25;
      }
    } else if (userGoal.includes('Start a small business') || userGoal.includes('کاروبار')) {
      if (candidate.id === 'rec-small-business' || candidate.id === 'rec-financial-lit' || candidate.id === 'rec-canva-design') {
        score += 30;
      }
    } else if (userGoal.includes('Help my family') || userGoal.includes('خاندان')) {
      if (candidate.id === 'rec-financial-lit' || candidate.id === 'rec-life-skills' || candidate.id === 'rec-solar-repair') {
        score += 25;
      }
    } else if (userGoal.includes('Help my community') || userGoal.includes('برادری')) {
      if (candidate.id === 'rec-leadership-comm' || candidate.id === 'rec-modern-agri' || candidate.id === 'rec-solar-repair') {
        score += 30;
      }
    }

    // =========================================================================
    // 3. OCCUPATION MATCH (Weight: +25 points)
    // =========================================================================
    const matchesOccupation = candidate.relevantOccupations.some((occ) =>
      userOccupation.toLowerCase().includes(occ.toLowerCase()) || occ.toLowerCase().includes(userOccupation.toLowerCase())
    );
    if (matchesOccupation) {
      score += 25;
    }
    if (userOccupation.includes('Student') || userOccupation.includes('طالب علم')) {
      if (candidate.id === 'rec-ai-fundamentals' || candidate.id === 'rec-canva-design' || candidate.id === 'rec-english-comm' || candidate.id === 'rec-freelancing') {
        score += 20;
      }
    } else if (userOccupation.includes('Farmer') || userOccupation.includes('کسان')) {
      if (candidate.id === 'rec-modern-agri' || candidate.id === 'rec-solar-repair' || candidate.id === 'rec-financial-lit') {
        score += 35;
      }
    } else if (userOccupation.includes('Shopkeeper') || userOccupation.includes('دکاندار')) {
      if (candidate.id === 'rec-small-business' || candidate.id === 'rec-financial-lit' || candidate.id === 'rec-canva-design') {
        score += 30;
      }
    } else if (userOccupation.includes('Homemaker') || userOccupation.includes('گھریلو خاتون')) {
      if (candidate.id === 'rec-financial-lit' || candidate.id === 'rec-canva-design' || candidate.id === 'rec-life-skills' || candidate.id === 'rec-ai-fundamentals') {
        score += 25;
      }
    } else if (userOccupation.includes('Worker') || userOccupation.includes('ملازم')) {
      if (candidate.id === 'rec-solar-repair' || candidate.id === 'rec-financial-lit' || candidate.id === 'rec-small-business') {
        score += 25;
      }
    } else if (userOccupation.includes('Freelancer') || userOccupation.includes('فری لانسر')) {
      if (candidate.id === 'rec-freelancing' || candidate.id === 'rec-canva-design' || candidate.id === 'rec-ai-fundamentals' || candidate.id === 'rec-english-comm') {
        score += 30;
      }
    } else if (userOccupation.includes('Retired') || userOccupation.includes('ریٹائرڈ')) {
      if (candidate.id === 'rec-leadership-comm' || candidate.id === 'rec-life-skills' || candidate.id === 'rec-ai-fundamentals') {
        score += 25;
      }
    }

    // =========================================================================
    // 4. EDUCATION LEVEL FIT (Weight: +20 points)
    // =========================================================================
    if (userEducation.includes('Primary') || userEducation.includes('Middle') || userEducation.includes('Self-taught') || userEducation.includes('پرائمری') || userEducation.includes('مڈل') || userEducation.includes('خود سیکھا')) {
      // Practical, visual, intuitive, Urdu-first courses get natural boost
      if (candidate.difficulty === 'Beginner' || candidate.id === 'rec-canva-design' || candidate.id === 'rec-solar-repair' || candidate.id === 'rec-small-business' || candidate.id === 'rec-modern-agri' || candidate.id === 'rec-life-skills') {
        score += 20;
      }
    } else if (userEducation.includes('Higher Education') || userEducation.includes('اعلیٰ تعلیم')) {
      if (candidate.id === 'rec-ai-fundamentals' || candidate.id === 'rec-freelancing' || candidate.id === 'rec-leadership-comm' || candidate.id === 'rec-english-comm') {
        score += 20;
      }
    } else {
      // Matric / Intermediate
      score += 15;
    }

    // =========================================================================
    // 5. AGE GROUP HARMONY (Weight: +15 points)
    // =========================================================================
    if (userAge === '10-15') {
      if (candidate.id === 'rec-ai-fundamentals' || candidate.id === 'rec-canva-design' || candidate.id === 'rec-english-comm') {
        score += 20;
      }
    } else if (userAge === '16-25') {
      if (candidate.id === 'rec-freelancing' || candidate.id === 'rec-canva-design' || candidate.id === 'rec-ai-fundamentals' || candidate.id === 'rec-english-comm' || candidate.id === 'rec-solar-repair') {
        score += 20;
      }
    } else if (userAge === '26-45') {
      if (candidate.id === 'rec-small-business' || candidate.id === 'rec-financial-lit' || candidate.id === 'rec-freelancing' || candidate.id === 'rec-modern-agri' || candidate.id === 'rec-solar-repair') {
        score += 20;
      }
    } else if (userAge === '46-60') {
      if (candidate.id === 'rec-small-business' || candidate.id === 'rec-modern-agri' || candidate.id === 'rec-leadership-comm' || candidate.id === 'rec-solar-repair') {
        score += 20;
      }
    } else if (userAge === '61-70' || userAge === '70+') {
      if (candidate.id === 'rec-life-skills' || candidate.id === 'rec-leadership-comm' || candidate.id === 'rec-ai-fundamentals') {
        score += 20;
      }
    }

    // =========================================================================
    // 6. SYNERGIES WITH EXISTING SKILLS (Weight: +15 points)
    // =========================================================================
    if (userExistingSkills.length > 0) {
      const hasComplementarySkill = userExistingSkills.some(sk => 
        candidate.categoryUrdu.includes(sk) || candidate.titleUrdu.includes(sk)
      );
      if (hasComplementarySkill) {
        score += 15;
      }
    }

    // =========================================================================
    // 7. DAILY AVAILABLE TIME HARMONY (Weight: +15 points)
    // =========================================================================
    if (userTime.includes('15') && (candidate.estimatedTimeUrdu.includes('15') || candidate.id === 'rec-ai-fundamentals' || candidate.id === 'rec-life-skills')) {
      score += 15;
    } else if (userTime.includes('30') || userTime.includes('1') || userTime.includes('2+')) {
      score += 10;
    }

    // Tailored Why Suitable strings
    const whySuitableUrdu = candidate.getWhySuitableUrdu(data, userName);
    const whySuitableEn = candidate.getWhySuitableEn(data, userName);

    return {
      id: candidate.id,
      courseId: candidate.courseId,
      titleUrdu: candidate.titleUrdu,
      titleEn: candidate.titleEn,
      category: candidate.category,
      categoryUrdu: candidate.categoryUrdu,
      whySuitableUrdu,
      whySuitableEn,
      difficulty: candidate.difficulty,
      difficultyUrdu: candidate.difficultyUrdu,
      estimatedTimeUrdu: candidate.estimatedTimeUrdu,
      estimatedTimeEn: candidate.estimatedTimeEn,
      realWorldUsesUrdu: candidate.realWorldUsesUrdu,
      realWorldUsesEn: candidate.realWorldUsesEn,
      firstStepUrdu: candidate.firstStepUrdu,
      firstStepEn: candidate.firstStepEn,
      matchScore: score,
      icon: candidate.icon,
      badgeUrdu: candidate.badgeUrdu,
      badgeEn: candidate.badgeEn,
      realLifePurpose: candidate.realLifePurpose,
      roadmapSteps: candidate.roadmapSteps,
      dailyPlan: candidate.dailyPlan,
    } as RecommendedSkill;
  });

  // Sort descending by matchScore
  scoredSkills.sort((a, b) => b.matchScore - a.matchScore);

  // Return the TOP 3 Recommended Skills strictly
  return scoredSkills.slice(0, 3);
}
