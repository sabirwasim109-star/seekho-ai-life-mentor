export type OpportunityType = 
  | 'Jobs'
  | 'Freelancing'
  | 'Internships'
  | 'Apprenticeships'
  | 'Local Work'
  | 'Small Business'
  | 'Community Projects'
  | 'Learning & Training';

export interface SampleOpportunity {
  id: string;
  titleUrdu: string;
  titleEn: string;
  type: OpportunityType;
  typeUrdu: string;
  requiredSkillUrdu: string;
  requiredSkillEn: string;
  skillCategory: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  levelUrdu: string;
  locationUrdu: string;
  locationEn: string;
  isLocalToPilot: boolean; // true for Dobay, Barnala
  shortDescriptionUrdu: string;
  shortDescriptionEn: string;
  whySuitableUrdu: string;
  whySuitableEn: string;
  fullDetailsUrdu: string;
  fullDetailsEn: string;
  preparationStepsUrdu: string[];
  preparationStepsEn: string[];
  relevantCourseId?: string;
  tagsUrdu: string[];
  tagsEn: string[];
  badgeUrdu?: string;
  badgeEn?: string;
}

export interface SkillPathway {
  skillId: string;
  skillNameUrdu: string;
  skillNameEn: string;
  icon: string;
  color: string;
  pathwaysUrdu: { title: string; desc: string }[];
  pathwaysEn: { title: string; desc: string }[];
}

export const OPPORTUNITY_TYPES_METADATA: { id: OpportunityType; labelUrdu: string; labelEn: string; icon: string; descriptionUrdu: string; descriptionEn: string }[] = [
  {
    id: 'Jobs',
    labelUrdu: 'نوکریاں / ملازمت',
    labelEn: 'Jobs',
    icon: 'Briefcase',
    descriptionUrdu: 'مقامی اور ریجنل اداروں میں تکنیکی و دفتری اسامیاں',
    descriptionEn: 'Entry-level and specialized workplace roles in local organizations',
  },
  {
    id: 'Freelancing',
    labelUrdu: 'فری لانسنگ',
    labelEn: 'Freelancing',
    icon: 'Globe',
    descriptionUrdu: 'گھر بیٹھے آن لائن ڈیجیٹل سروسز اور پروجیکٹس',
    descriptionEn: 'Remote digital services and micro-projects from home',
  },
  {
    id: 'Internships',
    labelUrdu: 'انٹرن شپس',
    labelEn: 'Internships',
    icon: 'GraduationCap',
    descriptionUrdu: 'نئی صلاحیتوں کی عملی مشق اور ادارے کے ساتھ تجربہ',
    descriptionEn: 'Practical hands-on work experience with local mentors & businesses',
  },
  {
    id: 'Apprenticeships',
    labelUrdu: 'شاگردی / اپرنٹس شپ',
    labelEn: 'Apprenticeships',
    icon: 'Wrench',
    descriptionUrdu: 'استاد کاریگر کے ساتھ روایتی و تکنیکی ہنر کی شاگردی',
    descriptionEn: 'Master-craftsperson on-site technical apprenticeship',
  },
  {
    id: 'Local Work',
    labelUrdu: 'مقامی کام',
    labelEn: 'Local Work',
    icon: 'MapPin',
    descriptionUrdu: 'برنالہ اور ڈوبے کے ارد گرد دکانوں اور اداروں میں کام',
    descriptionEn: 'Direct local opportunities within Dobay & Barnala',
  },
  {
    id: 'Small Business',
    labelUrdu: 'چھوٹا کاروبار',
    labelEn: 'Small Business',
    icon: 'Store',
    descriptionUrdu: 'کم سرمائے سے اپنا آزاد کاروباری یونٹ شروع کرنے کے آئیڈیاز',
    descriptionEn: 'Micro-enterprise and self-employment business concepts',
  },
  {
    id: 'Community Projects',
    labelUrdu: 'کمیونٹی پروجیکٹس',
    labelEn: 'Community Projects',
    icon: 'HeartHandshake',
    descriptionUrdu: 'برادری کی فلاح و بہبود اور ماحول کی بہتری کے فلاحی کام',
    descriptionEn: 'Civic, environmental, and public service volunteer initiatives',
  },
  {
    id: 'Learning & Training',
    labelUrdu: 'تعلیم و تربیت',
    labelEn: 'Learning & Training',
    icon: 'BookOpen',
    descriptionUrdu: 'مفت جدید کورسز اور فنی ورکشاپس',
    descriptionEn: 'Specialized advanced workshops and vocational bootcamps',
  },
];

export const SAMPLE_OPPORTUNITIES: SampleOpportunity[] = [
  // 1. Local Opportunity in Dobay, Barnala (Local Work / Small Business Support)
  {
    id: 'opp-local-shop-catalog',
    titleUrdu: 'مقامی دکانوں کے لیے ڈیجیٹل کیٹلاگ اور ریٹ لسٹ معاون',
    titleEn: 'Digital Catalog & Price List Assistant for Local Grocers',
    type: 'Local Work',
    typeUrdu: 'مقامی کام',
    requiredSkillUrdu: 'کینوا، موبائل فوٹوگرافی اور بنیادی اردو ٹائپنگ',
    requiredSkillEn: 'Canva, Mobile Photography & Basic Urdu Typing',
    skillCategory: 'Creative Skills',
    level: 'Beginner',
    levelUrdu: 'ابتدائی',
    locationUrdu: 'ڈوبے، برنالہ، آزاد کشمیر',
    locationEn: 'Dobay, Barnala, Azad Kashmir',
    isLocalToPilot: true,
    shortDescriptionUrdu: 'برنالہ بازار اور ڈوبے کی مقامی کریانہ و کپڑے کی دکانوں کے لیے موبائل سے ریٹ لسٹ، واٹس ایپ اسٹیٹس بینرز اور سادہ رسیدیں بنانا۔',
    shortDescriptionEn: 'Help local village shopkeepers create Urdu price catalogs, WhatsApp promotional flyers, and digital receipts using your phone.',
    whySuitableUrdu: 'اگر آپ نے موبائل پر کینوا یا ڈیجیٹل اسکلز کا بنیادی کورس کیا ہے تو آپ اپنے محلے کی دکانوں کو آسانی سے یہ سروس دے سکتے ہیں۔',
    whySuitableEn: 'Ideal for beginners with Canva and mobile design basics who want to assist neighborhood retailers.',
    fullDetailsUrdu: 'یہ ایک مثالی مقامی کام کا نمونہ ہے۔ گاؤں کی دکانوں کو اپنے گاہکوں کو نئی قیمتیں اور اشیاء بتانے کے لیے صاف ستھرے بینرز کی ضرورت ہوتی ہے۔ آپ فی دکان سادہ مینو یا کیٹلاگ تیار کر کے ان کا کام آسان بنا سکتے ہیں۔',
    fullDetailsEn: 'A demonstration local project showing how small businesses need digital flyers for WhatsApp customer updates.',
    preparationStepsUrdu: [
      'کینوا پر اردو پوسٹر بنانے کی 2 نمونے فائلز تیار کریں',
      'مقامی دکان دار سے ان کی مصنوعات اور قیمتوں کی فہرست لیں',
      'سادہ اور واضح اردو فونٹ میں ریٹ لسٹ مرتب کریں',
    ],
    preparationStepsEn: [
      'Design 2 sample flyers in Canva',
      'Collect standard price lists from a shopkeeper',
      'Format clearly with legible Urdu typography',
    ],
    relevantCourseId: 'canva-designing',
    tagsUrdu: ['مقامی کام', 'ڈوبے', 'کینوا', 'موبائل'],
    tagsEn: ['Local Work', 'Dobay', 'Canva', 'Mobile'],
    badgeUrdu: 'مقامی موقع (ڈوبے)',
    badgeEn: 'Local (Dobay)',
  },

  // 2. Local Agriculture Project in Dobay, Barnala
  {
    id: 'opp-local-agri-compost',
    titleUrdu: 'ڈوبے آرگینک کھاد اور بارانی مٹی کا کمیونٹی پروجیکٹ',
    titleEn: 'Dobay Rainfed Soil & Organic Compost Community Project',
    type: 'Community Projects',
    typeUrdu: 'کمیونٹی پروجیکٹس',
    requiredSkillUrdu: 'روایتی کھاد بنانا، پودوں کی دیکھ بھال اور کمیونٹی رابطہ',
    requiredSkillEn: 'Organic Composting, Plant Care & Community Outreach',
    skillCategory: 'Agriculture & Local Skills',
    level: 'Beginner',
    levelUrdu: 'ابتدائی',
    locationUrdu: 'ڈوبے و قریبی دیہات، برنالہ',
    locationEn: 'Dobay & Nearby Villages, Barnala',
    isLocalToPilot: true,
    shortDescriptionUrdu: 'بارانی زمینوں میں نمی برقرار رکھنے اور گھریلو پسماندہ نامیاتی مادے سے سستی کھاد تیار کرنے کا مشترکہ تجرباتی منصوبہ۔',
    shortDescriptionEn: 'A community agricultural effort to set up organic waste composting pits and test moisture retention in rainfed soil.',
    whySuitableUrdu: 'زرعی کورس اور بزرگوں کے روایتی زرعی علم کے بعد آپ اس منصوبے میں عملی رہنمائی کر سکتے ہیں۔',
    whySuitableEn: 'Directly applies organic farming and elder wisdom lessons to cut fertilizer costs.',
    fullDetailsUrdu: 'اس نمونہ پروجیکٹ کا مقصد علاقے کے کسانوں کو مہنگی کیمیائی کھادوں کے متبادل قدرتی طریقے سکھانا اور 5 دیہی گھرانوں میں کھاد کے گڑھے تیار کروانا ہے۔',
    fullDetailsEn: 'Sample community project aimed at establishing 5 village composting pits to reduce reliance on chemical fertilizers.',
    preparationStepsUrdu: [
      'روایتی زرعی کھاد کا طریقہ کار نوٹ کریں',
      'گھر کے سبزیوں اور پتوں کے فضلے کو جمع کرنے کی جگہ بنائیں',
      'دیگر کسان ساتھیوں کے ساتھ مٹی کے نمونے دیکھیں',
    ],
    preparationStepsEn: [
      'Document elder composting methods',
      'Set up a household organic waste pit',
      'Coordinate with fellow farming neighbors',
    ],
    relevantCourseId: 'agri-basics',
    tagsUrdu: ['زراعت', 'ڈوبے', 'کھاد', 'کمیونٹی'],
    tagsEn: ['Agriculture', 'Dobay', 'Compost', 'Community'],
    badgeUrdu: 'زرعی پروجیکٹ',
    badgeEn: 'Agri Project',
  },

  // 3. Technical Apprenticeship in Barnala
  {
    id: 'opp-solar-electric-apprentice',
    titleUrdu: 'سولر پینل تنصیب اور بنیادی وائرنگ شاگردی',
    titleEn: 'Solar Panel Installation & Electrical Apprenticeship',
    type: 'Apprenticeships',
    typeUrdu: 'شاگردی / اپرنٹس شپ',
    requiredSkillUrdu: 'برقی سیفٹی کے بنیادی اصول اور اوزاروں کا استعمال',
    requiredSkillEn: 'Basic Electrical Safety & Hand Tools Handling',
    skillCategory: 'Technical Trades',
    level: 'Beginner',
    levelUrdu: 'ابتدائی',
    locationUrdu: 'برنالہ سٹی ورکشاپ، ضلع بھمبر',
    locationEn: 'Barnala City Workshop, Bhimber District',
    isLocalToPilot: true,
    shortDescriptionUrdu: 'مقامی سینئر الیکٹریشن اور سولر ٹیکنیشن کے ساتھ 4 ہفتے کی عملی شاگردی برائے انورٹر سیٹنگ اور بیٹری کنکشن۔',
    shortDescriptionEn: 'A 4-week practical apprenticeship working alongside a certified local technician on household solar & inverters.',
    whySuitableUrdu: 'اگر آپ ہاتھ سے کام کرنے اور ٹیکنیکل فیلڈ میں روزگار بنانے میں دلچسپی رکھتے ہیں تو یہ بہترین نقطہ آغاز ہے۔',
    whySuitableEn: 'Great hands-on learning pathway for practical problem solvers wanting technical livelihood.',
    fullDetailsUrdu: 'یہ ایک مثالی اپرنٹس شپ ماڈل ہے۔ شاگرد تجربہ کار استاد کے ساتھ فیلڈ میں جا کر سولر پینل کا اینگل سیٹ کرنا، وائرنگ جوڑنا اور فالٹ تلاش کرنا سیکھتا ہے۔',
    fullDetailsEn: 'Demonstration vocational apprenticeship focusing on safe voltage handling and practical solar maintenance.',
    preparationStepsUrdu: [
      'برقی سیفٹی اور اوزاروں کا بنیادی سبق مکمل کریں',
      'ملٹی میٹر کے بنیادی استعمال کی معلومات حاصل کریں',
      'حفاظتی دستانے اور جوتوں کا اہتمام کریں',
    ],
    preparationStepsEn: [
      'Complete Basic Electrical Safety lesson',
      'Learn standard multimeter measurements',
      'Equip proper safety gear (gloves, boots)',
    ],
    relevantCourseId: 'technical-basics',
    tagsUrdu: ['شاگردی', 'سولر', 'برنالہ', 'ہنر'],
    tagsEn: ['Apprenticeship', 'Solar', 'Barnala', 'Trade'],
    badgeUrdu: 'فنی شاگردی',
    badgeEn: 'Technical Trade',
  },

  // 4. AI & Freelancing Opportunity (Remote / Online)
  {
    id: 'opp-ai-content-freelancing',
    titleUrdu: 'AI اسسٹنٹ اور کنٹینٹ ایڈیٹنگ فری لانسنگ',
    titleEn: 'AI-Assisted Content Formatting & Virtual Assistance',
    type: 'Freelancing',
    typeUrdu: 'فری لانسنگ',
    requiredSkillUrdu: 'AI پرامپٹ لکھنا، اردو/انگریزی پروف ریڈنگ اور مائیکروسافٹ ورڈ',
    requiredSkillEn: 'AI Prompting, Urdu/English Proofreading & MS Word',
    skillCategory: 'AI & Technology',
    level: 'Intermediate',
    levelUrdu: 'درمیانہ',
    locationUrdu: 'آن لائن / ریموٹ (گھر بیٹھے)',
    locationEn: 'Online / Remote (From Home)',
    isLocalToPilot: false,
    shortDescriptionUrdu: 'AI ٹولز کی مدد سے مضامین، ای میلز، خلاصے اور دستاویزات کی درستی اور پروف ریڈنگ کا کام۔',
    shortDescriptionEn: 'Provide online remote document formatting, AI prompt-assisted summaries, and bilingual proofreading.',
    whySuitableUrdu: 'اگر آپ نے AI فنڈامینٹلز اور کمیونیکیشن کورسز مکمل کیے ہیں تو آپ چھوٹے آن لائن کاموں کے لیے تیار ہیں۔',
    whySuitableEn: 'Matches learners who completed AI Fundamentals and understand clear prompt engineering.',
    fullDetailsUrdu: 'فری لانسنگ میں کلائنٹس کو تیز رفتاری سے خطوط، پروجیکٹ سمری یا سوشل میڈیا کیپشنز بنوانے ہوتے ہیں۔ AI کو درست ہدایات دے کر نتائج کو انسان کی طرح جانچنا اور سنوارنا ایک قیمتی ہنر ہے۔',
    fullDetailsEn: 'Sample remote freelancing role showing how AI prompting and human editing create useful text deliverables.',
    preparationStepsUrdu: [
      'AI کی مدد سے 3 مختلف فارمیٹس (ای میل، رپورٹ، CV) تیار کریں',
      'اردو سے انگریزی اور انگریزی سے اردو پروف ریڈنگ کی مشق کریں',
      'اپنا پورٹ فولیو پروجیکٹ تیار رکھیں',
    ],
    preparationStepsEn: [
      'Create 3 sample document outputs using AI',
      'Practice bilingual proofreading and editing',
      'Save sample files in your Seekho portfolio',
    ],
    relevantCourseId: 'ai-fundamentals-all-ages',
    tagsUrdu: ['فری لانسنگ', 'AI', 'ریموٹ', 'کنٹینٹ'],
    tagsEn: ['Freelancing', 'AI', 'Remote', 'Content'],
    badgeUrdu: 'ریموٹ فری لانسنگ',
    badgeEn: 'Remote Freelance',
  },

  // 5. Small Business Idea (Local Micro-Enterprise)
  {
    id: 'opp-small-biz-tutoring-center',
    titleUrdu: 'دیہی ڈیجیٹل ہیلپ اور تعلیمی ٹیوشن کا چھوٹا سیٹ اپ',
    titleEn: 'Village Digital Assistance & Community Tuition Point',
    type: 'Small Business',
    typeUrdu: 'چھوٹا کاروبار',
    requiredSkillUrdu: 'کمپیوٹر کی بنیادی مہارت، آن لائن فارم بھرنا اور تدریسی لگن',
    requiredSkillEn: 'Computer Basics, Online Form Submissions & Teaching Drive',
    skillCategory: 'Computer & Digital Skills',
    level: 'Intermediate',
    levelUrdu: 'درمیانہ',
    locationUrdu: 'ڈوبے یا برنالہ، آزاد کشمیر',
    locationEn: 'Dobay or Barnala, Azad Kashmir',
    isLocalToPilot: true,
    shortDescriptionUrdu: 'گاؤں کے طلباء اور بزرگوں کے لیے آن لائن فارم، نتائج پرنٹنگ، نادرا رہنمائی اور شام کی کمپیوٹر کلاسز کا منی سینٹر۔',
    shortDescriptionEn: 'A village-level digital kiosk idea helping residents submit online applications, check exam results, and learn basic phone skills.',
    whySuitableUrdu: 'ایک لیپ ٹاپ اور پرنٹر کے ساتھ کم خرچ میں عزت دار خود روزگاری کا بہترین آئیڈیا ہے۔',
    whySuitableEn: 'A sustainable self-employment model bridging the digital gap in rural areas.',
    fullDetailsUrdu: 'دیہات میں بہت سے افراد کو سرکاری نوکریوں کے آن لائن فارم، بجلی کے بل ڈاؤن لوڈ کرنے یا بچوں کے تعلیمی رزلٹ دیکھنے میں مشکل ہوتی ہے۔ ایک باشعور نوجوان یہ خدمات فراہم کر کے باعزت آمدنی پیدا کر سکتا ہے۔',
    fullDetailsEn: 'Sample small business framework illustrating how local digital services meet daily village administrative needs.',
    preparationStepsUrdu: [
      'آن لائن اپلائی کرنے کے 5 عام سرکاری پورٹلز سمجھیں',
      'پرنٹر اور موبائل ہاٹ اسپاٹ کی ورکنگ سیکھیں',
      'محلے میں شفاف اور مناسب فیس کا چارٹ لگائیں',
    ],
    preparationStepsEn: [
      'Master 5 standard online application portals',
      'Set up a basic printer and mobile hotspot',
      'Establish a transparent local service fee chart',
    ],
    relevantCourseId: 'computer-digital-literacy',
    tagsUrdu: ['چھوٹا کاروبار', 'ڈیجیٹل پوائنٹ', 'ڈوبے', 'خدمت'],
    tagsEn: ['Small Business', 'Digital Kiosk', 'Dobay', 'Service'],
    badgeUrdu: 'خود روزگاری آئیڈیا',
    badgeEn: 'Self-Employment',
  },

  // 6. Internship / Training Opportunity
  {
    id: 'opp-intern-social-media',
    titleUrdu: 'مقامی اسکول اور ویلفیئر ٹرسٹ کے لیے ڈیجیٹل میڈیا انٹرن شپ',
    titleEn: 'Digital Media & Communications Intern for Local Welfare Trust',
    type: 'Internships',
    typeUrdu: 'انٹرن شپس',
    requiredSkillUrdu: 'سوشل میڈیا پوسٹنگ، تصاویر لینا اور رپورٹنگ',
    requiredSkillEn: 'Social Media Posting, Basic Photography & Event Reporting',
    skillCategory: 'Communication & Languages',
    level: 'Beginner',
    levelUrdu: 'ابتدائی',
    locationUrdu: 'برنالہ و بھمبر',
    locationEn: 'Barnala & Bhimber',
    isLocalToPilot: true,
    shortDescriptionUrdu: 'مقامی فلاحی ادارے یا پرائیویٹ اسکول کی تعلیمی سرگرمیوں، امتحانات اور شجرکاری مہم کی تصاویر اور فیس بک اپ ڈیٹس بنانا۔',
    shortDescriptionEn: 'A 6-week hands-on internship managing social media updates, student highlight posts, and newsletters for a local school.',
    whySuitableUrdu: 'طالب علموں کے لیے پورٹ فولیو اور عملی تجربہ بنانے کا شاندار موقع ہے۔',
    whySuitableEn: 'Great for students wanting practical communications and social media management experience.',
    fullDetailsUrdu: 'اس نمونہ انٹرن شپ میں امیدوار کو ہفتہ وار 4 گھنٹے کام کرنا ہوتا ہے جس میں سرگرمیوں کی مختصر تحریر اور فون سے لی گئی تصاویر کو کینوا میں خوبصورت فریم میں لگانا شامل ہے۔',
    fullDetailsEn: 'Demonstration internship focusing on community storytelling and digital visual communication.',
    preparationStepsUrdu: [
      'اسکول کی سرگرمی کا 1 فرضی سوشل میڈیا پوسٹر ڈیزائن کریں',
      'اردو میں مختصر تعارفی رپورٹ لکھیں',
      'پیشہ ورانہ کمیونیکیشن کے آداب پر نظر ثانی کریں',
    ],
    preparationStepsEn: [
      'Design 1 sample school activity poster',
      'Write a concise Urdu event report',
      'Review professional communication etiquette',
    ],
    relevantCourseId: 'canva-designing',
    tagsUrdu: ['انٹرن شپ', 'سوشل میڈیا', 'برنالہ', 'تجربہ'],
    tagsEn: ['Internship', 'Social Media', 'Barnala', 'Experience'],
    badgeUrdu: 'عملی انٹرن شپ',
    badgeEn: 'Internship',
  },

  // 7. Entry-Level Job (Sample)
  {
    id: 'opp-job-data-operator',
    titleUrdu: 'کمپیوٹر ڈیٹا انٹری اور کسٹمر سپورٹ اسسٹنٹ',
    titleEn: 'Computer Data Entry & Front Desk Assistant',
    type: 'Jobs',
    typeUrdu: 'نوکریاں / ملازمت',
    requiredSkillUrdu: 'ایکسل/اسپریڈشیٹ، اردو ٹائپنگ اور خوش اخلاقی',
    requiredSkillEn: 'Spreadsheets, Urdu/English Typing & Professional Demeanor',
    skillCategory: 'Computer & Digital Skills',
    level: 'Intermediate',
    levelUrdu: 'درمیانہ',
    locationUrdu: 'برنالہ بازار / قریبی قصبہ',
    locationEn: 'Barnala Bazaar / Nearby Town',
    isLocalToPilot: true,
    shortDescriptionUrdu: 'مقامی کلینک یا ٹریڈرز آفس میں روزانہ ریکارڈ اندراج، کسٹمر کی معلومات درج کرنا اور رسیدیں تیار کرنا۔',
    shortDescriptionEn: 'Entry-level office role entering patient/customer records, managing daily inventory spreadsheets, and issuing receipts.',
    whySuitableUrdu: 'کمپیوٹر کی بنیادی استعداد اور منظم انداز میں کام کرنے والوں کے لیے موزوں ہے۔',
    whySuitableEn: 'Suited for organized individuals with solid spreadsheet and Urdu/English typing fundamentals.',
    fullDetailsUrdu: 'یہ ایک ڈیمو ملازمت کی تفصیل ہے۔ اس میں بنیادی کمپیوٹر کی رفتار، گوگل شیٹس میں ڈیٹا داخل کرنا اور صارفین سے شائستہ انداز میں گفتگو کی اہلیت درکار ہوتی ہے۔',
    fullDetailsEn: 'Sample office role demonstrating workplace expectations for clerical and data administration roles.',
    preparationStepsUrdu: [
      'ایکسل میں سادہ ٹیبل اور سم کا فارمولا چلانا سیکھیں',
      'اردو اور انگریزی ٹائپنگ کی اسپیڈ بہتر بنائیں',
      'اپنا سی وی تیار کر کے پورٹ فولیو میں محفوظ کریں',
    ],
    preparationStepsEn: [
      'Practice spreadsheet basic formulas and formatting',
      'Improve bilingual typing speed',
      'Export and verify your CV in Seekho Portfolio',
    ],
    relevantCourseId: 'computer-digital-literacy',
    tagsUrdu: ['ملازمت', 'ڈیٹا انٹری', 'برنالہ', 'دفتر'],
    tagsEn: ['Job', 'Data Entry', 'Barnala', 'Office'],
    badgeUrdu: 'دفتر کی ملازمت',
    badgeEn: 'Office Job',
  },

  // 8. Learning & Training Bootcamp / Workshop
  {
    id: 'opp-training-smart-farming-workshop',
    titleUrdu: 'مفت آن لائن ورکشاپ: اسمارٹ موبائل ایگریکلچر اور موسمی ڈیٹا',
    titleEn: 'Free Online Workshop: Smart Mobile Agriculture & Weather Data',
    type: 'Learning & Training',
    typeUrdu: 'تعلیم و تربیت',
    requiredSkillUrdu: 'اسمارٹ فون کا بنیادی استعمال اور زراعت میں دلچسپی',
    requiredSkillEn: 'Basic Smartphone Use & Agricultural Curiosity',
    skillCategory: 'Agriculture & Local Skills',
    level: 'Beginner',
    levelUrdu: 'ابتدائی',
    locationUrdu: 'آن لائن ورکشاپ / زوم یا واٹس ایپ',
    locationEn: 'Online Workshop / Zoom or WhatsApp',
    isLocalToPilot: false,
    shortDescriptionUrdu: 'موسمی ایپس، کھاد کی درست مقدار کا حساب لگانے والے موبائل ٹولز اور جدید زراعت کے 3 روزہ تربیتی سیشنز۔',
    shortDescriptionEn: 'A 3-day practical online workshop on leveraging weather forecasting apps, soil moisture metrics, and smart farming tools.',
    whySuitableUrdu: 'تمام عمر کے افراد اور کاشتکاروں کے لیے بغیر کسی فیس کے جدید ٹولز سے روشناس ہونے کا موقع۔',
    whySuitableEn: 'Open to all age groups and growers looking to integrate mobile tools into field planning.',
    fullDetailsUrdu: 'یہ ایک نمونہ تربیتی ورکشاپ ہے۔ اس کا مقصد کاشتکاروں کو موسم کی پیش گوئی دیکھ کر بوائی اور کٹائی کا صحیح وقت منتخب کرنے کی تربیت دینا ہے۔',
    fullDetailsEn: 'Demonstration vocational workshop module demonstrating mobile climate tools for rainfed farming.',
    preparationStepsUrdu: [
      'موبائل میں موسم کی ایپ انسٹال کر کے 7 دن کا ڈیٹا دیکھیں',
      'کھیت کی بنیادی معلومات اور فصل کا نام نوٹ کریں',
      'ورکشاپ کے وقت پر نوٹس لینے کا سامان تیار رکھیں',
    ],
    preparationStepsEn: [
      'Install and test a weather forecasting application',
      'Note down your local crop and soil conditions',
      'Prepare note-taking materials for the workshop',
    ],
    relevantCourseId: 'agri-basics',
    tagsUrdu: ['تربیت', 'زراعت', 'موبائل', 'ورکشاپ'],
    tagsEn: ['Training', 'Agriculture', 'Mobile', 'Workshop'],
    badgeUrdu: 'مفت ورکشاپ',
    badgeEn: 'Free Workshop',
  },
];

export const SKILL_TO_OPPORTUNITY_PATHWAYS: SkillPathway[] = [
  {
    skillId: 'ai-basics',
    skillNameUrdu: 'مصنوعی ذہانت (AI) کے بنیادی اصول',
    skillNameEn: 'AI & Technology Basics',
    icon: 'Sparkles',
    color: 'teal',
    pathwaysUrdu: [
      {
        title: 'روزمرہ پیداوری (AI Productivity)',
        desc: 'خطوط، خلاصے، سوالات کے جوابات اور تعلیمی اسباق کی تیاری میں AI سے فوری اور معیاری مدد لینا۔',
      },
      {
        title: 'کنٹینٹ اور تحریر کی تیاری (Content Creation)',
        desc: 'مضامین، سوشل میڈیا پیغامات اور تعلیمی مواد کے لیے پرامپٹس لکھ کر مسودے بنانا۔',
      },
      {
        title: 'ڈیجیٹل معاونت (Digital Assistance)',
        desc: 'گھر والوں اور برادری کے لیے انگریزی یا اردو میں پیشہ ورانہ درخواستیں اور CV تیار کرنا۔',
      },
      {
        title: 'مزید ایڈوانسڈ AI سیکھنا (Further AI Learning)',
        desc: 'ڈیٹا اینالیسس، کوڈنگ کے بنیادی ماڈلز اور AI کے جدید اوزاروں کی طرف قدم بڑھانا۔',
      },
    ],
    pathwaysEn: [
      {
        title: 'AI Productivity',
        desc: 'Accelerating drafting letters, summarizing notes, and educational prep using tailored prompts.',
      },
      {
        title: 'Content Creation',
        desc: 'Generating draft outlines, captions, and localized educational content.',
      },
      {
        title: 'Digital Assistance',
        desc: 'Helping peers and family formulate professional CVs and official letters.',
      },
      {
        title: 'Further AI Learning',
        desc: 'Progressing towards data analysis, basic coding assistance, and advanced generative tools.',
      },
    ],
  },
  {
    skillId: 'graphic-design',
    skillNameUrdu: 'گرافک ڈیزائن اور کینوا (Graphic Design & Canva)',
    skillNameEn: 'Graphic Design & Canva',
    icon: 'Palette',
    color: 'rose',
    pathwaysUrdu: [
      {
        title: 'پوسٹرز اور بینرز (Posters & Banners)',
        desc: 'اسکول کی تقریبات، فلاحی پروگراموں اور محلے کے اعلانات کے لیے خوبصورت بینرز ڈیزائن کرنا۔',
      },
      {
        title: 'سوشل میڈیا ڈیزائن (Social Media Graphics)',
        desc: 'واٹس ایپ اسٹیٹس، فیس بک پوسٹس اور معلوماتی کارڈز کے لیے مناسب سائز اور رنگوں کا انتخاب۔',
      },
      {
        title: 'دکانوں کے کیٹلاگ اور ریٹ لسٹ (Price Lists & Catalogs)',
        desc: 'مقامی کریانہ اسٹورز اور چھوٹی دکانوں کے لیے اردو میں پروڈکٹ لسٹیں بنانا۔',
      },
      {
        title: 'پورٹ فولیو اور فری لانس پریکٹس (Portfolio & Freelance)',
        desc: 'اپنے ڈیزائنز کو جمع کر کے پورٹ فولیو تیار کرنا اور آن لائن کلائنٹس کو نمونے دکھانا۔',
      },
    ],
    pathwaysEn: [
      {
        title: 'Posters & Event Banners',
        desc: 'Designing announcement flyers for school functions, community notices, and local seminars.',
      },
      {
        title: 'Social Media Designs',
        desc: 'Creating formatted WhatsApp status flyers and informative Facebook announcement graphics.',
      },
      {
        title: 'Shop Catalogs & Price Lists',
        desc: 'Building clear Urdu rate lists and product catalogs for village merchants.',
      },
      {
        title: 'Portfolio & Freelance Practice',
        desc: 'Compiling structured design showcases to take on micro-freelancing assignments.',
      },
    ],
  },
  {
    skillId: 'agriculture-local',
    skillNameUrdu: 'جدید زراعت اور روایتی کھاد (Agriculture & Local Skills)',
    skillNameEn: 'Agriculture & Local Knowledge',
    icon: 'Sprout',
    color: 'emerald',
    pathwaysUrdu: [
      {
        title: 'گھریلو کچن گارڈننگ (Home Kitchen Gardening)',
        desc: 'گھر کے صحن یا چھت پر نامیاتی سبزیاں اگا کر گھر کے بجٹ میں مدد کرنا۔',
      },
      {
        title: 'چھوٹے پیمانے پر جدید کاشتکاری (Small Farming)',
        desc: 'بارانی زمینوں میں پانی کے کم خرچ والے بیج اور قدرتی ملچنگ کا استعمال۔',
      },
      {
        title: 'روایتی نامیاتی کھاد کی تیاری (Organic Composting)',
        desc: 'پتوں اور گھریلو پسماندہ مواد سے سستی اور قدرتی کھاد بنا کر کیمیائی کھادوں کا خرچ کم کرنا۔',
      },
      {
        title: 'کمیونٹی ایگریکلچر پروجیکٹ (Community Agriculture)',
        desc: 'گاؤں کے دوسرے کسانوں کے ساتھ مل کر بیجوں کی بچت اور مشترکہ فصل کے نمونے بنانا۔',
      },
    ],
    pathwaysEn: [
      {
        title: 'Home Kitchen Gardening',
        desc: 'Cultivating organic vegetables in household yards to supplement family nutrition and budget.',
      },
      {
        title: 'Small Farming & Moisture Retention',
        desc: 'Applying mulching and rainfed conservation techniques to maximize crop yields.',
      },
      {
        title: 'Organic Composting',
        desc: 'Transforming agricultural and household organic waste into nutrient-dense compost.',
      },
      {
        title: 'Community Agriculture Projects',
        desc: 'Collaborating with neighboring farmers on seed preservation and collective farming trials.',
      },
    ],
  },
  {
    skillId: 'computer-digital',
    skillNameUrdu: 'کمپیوٹر اور ڈیجیٹل بنیادی مہارتیں (Computer Literacy)',
    skillNameEn: 'Computer & Digital Literacy',
    icon: 'Laptop',
    color: 'blue',
    pathwaysUrdu: [
      {
        title: 'دفتر اور ریکارڈ کا اندراج (Office Documentation & Data Entry)',
        desc: 'اسپریڈشیٹ میں حساب کتاب رکھنا، رسیدیں بنانا اور فائلوں کو منظم کرنا۔',
      },
      {
        title: 'آن لائن سہولیات میں رہنمائی (Citizen Online Services)',
        desc: 'محلے کے افراد کے لیے داخلہ فارم، رزلٹ کارڈز اور بلز چیک کرنے میں مدد۔',
      },
      {
        title: 'دکانوں کا ڈیجیٹل حساب کتاب (Digital Bookkeeping)',
        desc: 'چھوٹے تاجروں کے لیے گوگل شیٹس پر یومیہ آمدن و خرچ کا آسان کھاتہ بنانا۔',
      },
      {
        title: 'ای میل اور باضابطہ مراسلت (Formal Emailing & Communication)',
        desc: 'پیشہ ورانہ خط و کتابت اور اداروں سے رابطہ کرنے کی صلاحیت۔',
      },
    ],
    pathwaysEn: [
      {
        title: 'Office Documentation & Data Entry',
        desc: 'Managing spreadsheet tables, issuing invoices, and structuring digital records.',
      },
      {
        title: 'Citizen Online Services',
        desc: 'Guiding village residents through online applications, exam records, and billing queries.',
      },
      {
        title: 'Digital Bookkeeping',
        desc: 'Setting up simple daily income/expense ledger sheets for local shop owners.',
      },
      {
        title: 'Formal Communication',
        desc: 'Drafting structured professional emails and inquiry correspondence.',
      },
    ],
  },
  {
    skillId: 'community-leadership',
    skillNameUrdu: 'کمیونٹی سروس اور قیادت (Community Development)',
    skillNameEn: 'Community Development & Service',
    icon: 'Users',
    color: 'amber',
    pathwaysUrdu: [
      {
        title: 'مقامی مسائل کی سروے ٹیم (Local Needs Survey Lead)',
        desc: 'گاؤں میں پانی، صفائی اور تعلیمی ضروریات کا ڈیٹا شائستگی سے اکٹھا کرنا۔',
      },
      {
        title: 'شجرکاری اور ماحولیاتی رضاکار (Environmental Volunteer)',
        desc: 'علاقائی راستوں پر مقامی سایہ دار پودے لگانے اور پانی دینے کی مہم چلانا۔',
      },
      {
        title: 'نوجوانوں کی رہنمائی اور ٹیوشن (Peer Mentorship)',
        desc: 'چھوٹے بچوں اور ہم عمر دوستوں کو بنیادی موبائل اور تعلیمی اسکلز سکھانا۔',
      },
      {
        title: 'مسجد اور پنچایت کمیٹی معاونت (Civic Committee Support)',
        desc: 'برادری کی میٹنگز کے اہم فیصلے اور تجاویز تحریری شکل میں قلمبند کرنا۔',
      },
    ],
    pathwaysEn: [
      {
        title: 'Local Needs Survey Lead',
        desc: 'Conducting structured community surveys on sanitation, water, and youth schooling.',
      },
      {
        title: 'Environmental Volunteer Campaigns',
        desc: 'Organizing tree planting drives and public cleanliness initiatives along village roads.',
      },
      {
        title: 'Peer Tutoring & Mentorship',
        desc: 'Guiding younger students and peers in digital literacy and practical problem-solving.',
      },
      {
        title: 'Civic Committee Secretarial Support',
        desc: 'Documenting meeting outcomes and resolutions for community elders and committees.',
      },
    ],
  },
];
