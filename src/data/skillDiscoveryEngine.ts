import { SkillUniverseItem, SKILL_UNIVERSE_ITEMS, getSkillUniverseItemById, getCategoryById } from './skillsUniverseData';

export interface DiscoveryOption {
  id: string;
  labelUrdu: string;
  labelEn: string;
  descUrdu?: string;
  descEn?: string;
  iconName: string;
  tag?: string;
}

export interface DiscoveryQuestion {
  id: string;
  category: 'status' | 'education' | 'workstyle' | 'resources' | 'location' | 'goal' | 'time' | 'urgency' | 'interests';
  questionUrdu: string;
  questionEn: string;
  subtitleUrdu?: string;
  subtitleEn?: string;
  isMultiple?: boolean;
  maxSelections?: number;
  options: DiscoveryOption[];
  // Conditional check whether to display this question based on current answers
  shouldAsk?: (answers: Record<string, string | string[]>) => boolean;
}

export interface UserDiscoveryProfile {
  currentActivity?: string;
  educationLevel?: string;
  preferredWorkstyle?: string;
  availableResources: string[];
  workLocation?: string;
  primaryGoal?: string;
  dailyTimeAvailable?: string;
  urgencyLevel?: string;
  interests: string[];
  completedAt?: string;
}

export interface MatchReason {
  type: 'resource' | 'location' | 'interest' | 'education' | 'time' | 'goal' | 'workstyle' | 'simplicity';
  textUrdu: string;
  textEn: string;
}

export interface SkillMatch {
  skill: SkillUniverseItem;
  matchScore: number; // 0 to 100
  matchLevelUrdu: string;
  matchLevelEn: string;
  whyThisMatchUrdu: string[];
  whyThisMatchEn: string[];
  primaryReasons: MatchReason[];
  tagsUrdu: string[];
  tagsEn: string[];
}

export interface DiscoveryResultGroups {
  topBestMatches: SkillMatch[];
  otherGreatMatches: SkillMatch[];
  mobileFriendlyMatches: SkillMatch[];
  homeBasedMatches: SkillMatch[];
  jobPathwayMatches: SkillMatch[];
  onlineFreelanceMatches: SkillMatch[];
  businessMatches: SkillMatch[];
  lowCostMatches: SkillMatch[];
  futureTechMatches: SkillMatch[];
}

// ---------------------------------------------------------------------------
// 1. DISCOVERY QUESTIONS DEFINITION (A THROUGH I + ADAPTIVE)
// ---------------------------------------------------------------------------

export const DISCOVERY_QUESTIONS: DiscoveryQuestion[] = [
  // A. آپ اس وقت کیا کر رہے ہیں؟
  {
    id: 'q_activity',
    category: 'status',
    questionUrdu: 'آپ اس وقت کیا کر رہے ہیں؟',
    questionEn: 'What is your current daily activity?',
    subtitleUrdu: 'اپنا موجودہ معمول منتخب کریں تاکہ ہم آپ کے شیڈول کے مطابق ہنر چنیں:',
    subtitleEn: 'Select your current status so we can suggest matching skill paths:',
    isMultiple: false,
    options: [
      { id: 'student', labelUrdu: 'طالب علم (پڑھائی جاری ہے)', labelEn: 'Student (Studying)', iconName: 'GraduationCap', descUrdu: 'اسکول، کالج یا یونیورسٹی کے ساتھ کچھ سیکھنا چاہتا ہوں' },
      { id: 'unemployed', labelUrdu: 'بے روزگار (کام کی تلاش)', labelEn: 'Unemployed (Job Seeking)', iconName: 'Search', descUrdu: 'فوری روزگار یا آمدنی کا ذریعہ بنانا چاہتا ہوں' },
      { id: 'homemaker', labelUrdu: 'گھر کا کام / گھریلو ذمہ داریاں', labelEn: 'Homemaker / Household', iconName: 'Home', descUrdu: 'گھر سنبھالنے کے ساتھ ساتھ باوقار آمدنی چاہتا/چاہتی ہوں' },
      { id: 'job', labelUrdu: 'ملازمت / نوکری کر رہا ہوں', labelEn: 'Employed / Job', iconName: 'Briefcase', descUrdu: 'نوکری کے ساتھ اضافی کمائی یا کیریئر ترقی چاہتا ہوں' },
      { id: 'business', labelUrdu: 'چھوٹا کاروبار / دکان داری', labelEn: 'Small Business / Shop', iconName: 'Store', descUrdu: 'اپنے کاروبار کو وسیع اور جدید بنانا چاہتا ہوں' },
      { id: 'freelancer', labelUrdu: 'فری لانسنگ یا آن لائن کام', labelEn: 'Freelancing / Online', iconName: 'Globe', descUrdu: 'نئی ڈیجیٹل مہارتیں حاصل کر کے ریٹس بڑھانا چاہتا ہوں' },
      { id: 'tradesman', labelUrdu: 'ہنر مند کام / کاریگری', labelEn: 'Skilled Trades / Labor', iconName: 'Wrench', descUrdu: 'میکینک، الیکٹریشن، درزی یا کوئی فیلڈ کام کرتا ہوں' },
      { id: 'other', labelUrdu: 'کچھ اور / نیا آغاز', labelEn: 'Something Else / Fresh Start', iconName: 'Sparkles', descUrdu: 'زندگی میں نئے سرے سے کوئی مفید راستہ بنانا چاہتا ہوں' },
    ],
  },

  // B. آپ کی تعلیم کتنی ہے؟
  {
    id: 'q_education',
    category: 'education',
    questionUrdu: 'آپ کی تعلیم کتنی ہے؟',
    questionEn: 'What is your education level?',
    subtitleUrdu: 'یاد رکھیں: ہنر سیکھنے کے لیے بڑی ڈگری کی کوئی شرط نہیں!',
    subtitleEn: 'Remember: Practical skills do not require high formal degrees!',
    isMultiple: false,
    options: [
      { id: 'non_reader', labelUrdu: 'میں پڑھ نہیں سکتا / سکتی', labelEn: 'No formal schooling', iconName: 'Volume2', descUrdu: 'تصاویر، عملی مشق اور بول چال سے سیکھنا پسند کرتا ہوں' },
      { id: 'basic_reading', labelUrdu: 'تھوڑی بہت پڑھائی (اردو پڑھ لیتا ہوں)', labelEn: 'Basic Urdu / Literacy', iconName: 'BookOpen', descUrdu: 'سادہ باتیں اور نمبرز سمجھ لیتا ہوں' },
      { id: 'school', labelUrdu: 'اسکول (پرائمری، مڈل، میٹرک)', labelEn: 'School (Middle / Matric)', iconName: 'GraduationCap', descUrdu: 'بنیادی اسکولنگ مکمل ہے' },
      { id: 'college', labelUrdu: 'کالج (FA, FSc, ICS, BA وغیرہ)', labelEn: 'College (Intermediate / BA)', iconName: 'FileText', descUrdu: 'کالج کی سطح کی تعلیم حاصل کی ہے' },
      { id: 'university', labelUrdu: 'یونیورسٹی (گریجویٹ / ماسٹرز)', labelEn: 'University / Masters', iconName: 'Award', descUrdu: 'اعلیٰ تعلیم یا پروفیشنل ڈگری ہے' },
      { id: 'technical_diploma', labelUrdu: 'پیشہ ورانہ تعلیم (ڈپلومہ / DAE)', labelEn: 'Vocational / Technical Diploma', iconName: 'Cpu', descUrdu: 'فنی یا تکنیکی کورس کیا ہوا ہے' },
    ],
  },

  // C. آپ کو کس قسم کا کام پسند ہے؟
  {
    id: 'q_workstyle',
    category: 'workstyle',
    questionUrdu: 'آپ کو کس قسم کا کام پسند ہے؟',
    questionEn: 'What type of work do you naturally enjoy?',
    subtitleUrdu: 'وہ انداز منتخب کریں جس میں آپ کو مزہ آتا ہے:',
    subtitleEn: 'Choose the work style that best fits your personality:',
    isMultiple: false,
    options: [
      { id: 'hands_on', labelUrdu: 'ہاتھ سے کام (کاریگری و چیزیں بنانا)', labelEn: 'Hands-on Crafts & Making', iconName: 'Scissors', descUrdu: 'سلائی، پینٹ، مرمت، کھانا پکانا، باغبانی' },
      { id: 'digital_screen', labelUrdu: 'موبائل اور کمپیوٹر اسکرین کا کام', labelEn: 'Mobile & Computer Screen', iconName: 'Laptop', descUrdu: 'ڈیزائن، ایپس، انٹرنیٹ، ٹائپنگ، ریسرچ' },
      { id: 'people_sales', labelUrdu: 'لوگوں کے ساتھ کام (بات چیت و کسٹمرز)', labelEn: 'Working with People & Clients', iconName: 'Users', descUrdu: 'گاہکوں سے رابطہ، گائیڈ کرنا، مشورہ دینا' },
      { id: 'solo_quiet', labelUrdu: 'اکیلا اور پرسکون کام (Focus)', labelEn: 'Solo & Focused Work', iconName: 'CheckCircle2', descUrdu: 'بغیر مداخلت اپنی رفتار پر اطمینان سے کام' },
      { id: 'creative_art', labelUrdu: 'تخلیقی اور ڈیزائننگ کا کام', labelEn: 'Creative & Visual Art', iconName: 'Palette', descUrdu: 'نئے خیالات، رنگ، ویڈیو اور خوبصورتی لانا' },
      { id: 'math_numbers', labelUrdu: 'حساب کتاب اور ریکارڈ رکھنا', labelEn: 'Numbers, Accounts & Records', iconName: 'TrendingUp', descUrdu: 'کھاتہ داری، بجٹ، انتظام اور ترتیب' },
      { id: 'teaching_mentoring', labelUrdu: 'پڑھانا اور دوسروں کو سکھانا', labelEn: 'Teaching & Mentoring', iconName: 'HeartHandshake', descUrdu: 'بچوں اور بڑوں کی تعلیم اور تربیت' },
      { id: 'business_trading', labelUrdu: 'خرید و فروخت اور کاروبار', labelEn: 'Commerce & Small Business', iconName: 'Store', descUrdu: 'نفع نقصان کا اندازہ، مارکیٹنگ اور مال بیچنا' },
      { id: 'problem_fixing', labelUrdu: 'مسئلے حل کرنا اور مرمت کرنا', labelEn: 'Problem Solving & Repairs', iconName: 'Wrench', descUrdu: 'خرابی دور کرنا، سسٹم درست کرنا' },
      { id: 'dont_know_open', labelUrdu: 'مجھے ابھی معلوم نہیں (کچھ بھی نیا سیکھنے کو تیار)', labelEn: 'Not sure yet (Open to learn)', iconName: 'Compass', descUrdu: 'جو آسان اور مفید ہو وہ آزمانا چاہتا ہوں' },
    ],
  },

  // D. آپ کے پاس کیا وسائل موجود ہیں؟ (Multiple Selections)
  {
    id: 'q_resources',
    category: 'resources',
    questionUrdu: 'آپ کے پاس اس وقت کیا کیا موجود ہے؟',
    questionEn: 'What resources or tools do you currently have?',
    subtitleUrdu: 'آپ ایک سے زیادہ آپشنز چن سکتے ہیں:',
    subtitleEn: 'Select all that apply to your current setup:',
    isMultiple: true,
    options: [
      { id: 'mobile_only', labelUrdu: 'صرف عام سمارٹ فون', labelEn: 'Smartphone Only', iconName: 'Smartphone', descUrdu: 'واٹس ایپ اور بنیادی ایپس چلتی ہیں' },
      { id: 'mobile_internet', labelUrdu: 'موبائل + اچھا تیز انٹرنیٹ', labelEn: 'Mobile + Good Internet', iconName: 'Globe', descUrdu: 'یوٹیوب اور ویڈیوز آسانی سے چلتی ہیں' },
      { id: 'computer_laptop', labelUrdu: 'کمپیوٹر یا لیپ ٹاپ', labelEn: 'Laptop or Desktop PC', iconName: 'Laptop', descUrdu: 'ذاتی پی سی موجود ہے' },
      { id: 'sewing_machine', labelUrdu: 'سلائی مشین', labelEn: 'Sewing Machine', iconName: 'Scissors', descUrdu: 'گھر میں سلائی مشین موجود ہے' },
      { id: 'tools_hardware', labelUrdu: 'اوزار / ٹول کٹ / اوزار باکس', labelEn: 'Tool Kit / Technical Tools', iconName: 'Wrench', descUrdu: 'بجلی، پلمبنگ یا مرمت کے اوزار' },
      { id: 'land_farm', labelUrdu: 'زمین / باغ / خالی صحن', labelEn: 'Land / Garden / Yard', iconName: 'Sprout', descUrdu: 'پودے لگانے یا جانور رکھنے کی جگہ' },
      { id: 'shop_place', labelUrdu: 'دکان یا تجارتی جگہ', labelEn: 'Shop or Commercial Space', iconName: 'Store', descUrdu: 'کوئی کاؤنٹر، دکان یا اسٹال' },
      { id: 'home_workspace', labelUrdu: 'گھر میں کام کرنے کا پرسکون کونا', labelEn: 'Quiet Corner at Home', iconName: 'Home', descUrdu: 'گھریلو کام کے لیے جگہ' },
      { id: 'minimal_none', labelUrdu: 'ابھی کچھ خاص نہیں (صفر وسائل)', labelEn: 'Nothing special (Zero budget)', iconName: 'Sparkles', descUrdu: 'بغیر کسی خرچ کے آغاز چاہتا ہوں' },
    ],
  },

  // E. آپ کہاں کام کرنا چاہتے ہیں؟
  {
    id: 'q_location',
    category: 'location',
    questionUrdu: 'آپ کہاں کام کرنا چاہتے ہیں؟',
    questionEn: 'Where do you prefer to work?',
    subtitleUrdu: 'اپنے حالات کے مطابق کام کی موزوں ترین جگہ چنیں:',
    subtitleEn: 'Select your preferred workplace environment:',
    isMultiple: false,
    options: [
      { id: 'home', labelUrdu: 'گھر کے اندر سے (Home-based)', labelEn: 'From Home', iconName: 'Home', descUrdu: 'گھر بیٹھے اپنے کمرے یا کچن سے' },
      { id: 'village', labelUrdu: 'گاؤں / دیہی علاقے میں (Village)', labelEn: 'In Village / Rural Area', iconName: 'Sprout', descUrdu: 'دیہات میں رہتے ہوئے زراعت یا مقامی کام' },
      { id: 'city_market', labelUrdu: 'شہر یا بازار کی دکان / دفتر میں', labelEn: 'City Market / Office', iconName: 'Store', descUrdu: 'مارکیٹ یا ادارے میں جا کر کام' },
      { id: 'online_anywhere', labelUrdu: 'آن لائن (انٹرنیٹ کے ذریعے کہیں سے بھی)', labelEn: 'Online (Anywhere)', iconName: 'Globe', descUrdu: 'ڈیجیٹل انداز میں ملک و بیرون ملک کلائنٹس' },
      { id: 'anywhere_flexible', labelUrdu: 'کہیں بھی (جہاں اچھا روزگار ملے)', labelEn: 'Anywhere (Flexible)', iconName: 'Compass', descUrdu: 'جگہ کی کوئی پابندی نہیں' },
      { id: 'not_decided', labelUrdu: 'ابھی فیصلہ نہیں کیا', labelEn: 'Not decided yet', iconName: 'HelpCircle', descUrdu: 'جو راستہ آسان ہو' },
    ],
  },

  // F. آپ کا بنیادی مقصد کیا ہے؟
  {
    id: 'q_goal',
    category: 'goal',
    questionUrdu: 'آپ کا بنیادی مقصد کیا ہے؟',
    questionEn: 'What is your primary livelihood goal?',
    subtitleUrdu: 'آپ اس ہنر سے کیا حاصل کرنا چاہتے ہیں؟',
    subtitleEn: 'What outcome are you hoping to achieve?',
    isMultiple: false,
    options: [
      { id: 'learn_skill', labelUrdu: 'مضبوط ہنر سیکھنا (Master a Craft)', labelEn: 'Learn a Solid Craft', iconName: 'Award', descUrdu: 'پہلے اپنے ہاتھ میں کوئی پکا ہنر لانا چاہتا ہوں' },
      { id: 'side_income', labelUrdu: 'اضافی گھریلو آمدنی (Side Income)', labelEn: 'Side Income', iconName: 'TrendingUp', descUrdu: 'موجودہ معمول کے ساتھ کچھ بچت بڑھانا' },
      { id: 'job_employment', labelUrdu: 'باقاعدہ ملازمت یا نوکری (Job)', labelEn: 'Full-time / Part-time Job', iconName: 'Briefcase', descUrdu: 'کسی ادارے میں باعزت تنخواہ دار کام' },
      { id: 'freelancing', labelUrdu: 'آن لائن فری لانسنگ (Freelancing)', labelEn: 'Online Freelancing', iconName: 'Globe', descUrdu: 'گھر بیٹھے ڈالر یا روپے میں پروجیکٹس لینا' },
      { id: 'own_business', labelUrdu: 'اپنا آزاد کاروبار یا دکان (Own Business)', labelEn: 'Start Own Business', iconName: 'Store', descUrdu: 'خود مختار بننا اور دوسروں کو نوکری دینا' },
      { id: 'improve_current', labelUrdu: 'موجودہ کام کو بہتر کرنا (Upskilling)', labelEn: 'Improve Current Work', iconName: 'Flame', descUrdu: 'اپنے پرانے کام میں نئی ٹیکنالوجی لانا' },
      { id: 'career_change', labelUrdu: 'کیریئر تبدیل کرنا (New Direction)', labelEn: 'Career Change', iconName: 'Compass', descUrdu: 'نئے شعبے میں باوقار قدم رکھنا' },
      { id: 'exploring_only', labelUrdu: 'ابھی صرف معلومات و تلاش (Explore)', labelEn: 'Just Exploring Options', iconName: 'Sparkles', descUrdu: 'مختلف امکانات کو سمجھنا چاہتا ہوں' },
    ],
  },

  // G. روزانہ کتنا وقت دے سکتے ہیں؟
  {
    id: 'q_time',
    category: 'time',
    questionUrdu: 'روزانہ کتنا وقت دے سکتے ہیں؟',
    questionEn: 'How much time can you commit daily?',
    subtitleUrdu: 'تھوڑا وقت بھی باقاعدگی سے دیا جائے تو بڑی تبدیلی لاتا ہے:',
    subtitleEn: 'Even consistent small daily steps yield massive progress:',
    isMultiple: false,
    options: [
      { id: '15_min', labelUrdu: '۱۵ منٹ (مختصر روزانہ قدم)', labelEn: '15 minutes daily', iconName: 'Clock', descUrdu: 'چھوٹے روزانہ اسباق اور مشق' },
      { id: '30_min', labelUrdu: '۳۰ منٹ (درمیانہ وقت)', labelEn: '30 minutes daily', iconName: 'Clock', descUrdu: 'مناسب وقت جس سے ایک ماہ میں ہنر تیار ہو سکے' },
      { id: '1_hour', labelUrdu: '۱ گھنٹہ (بہترین رفتار)', labelEn: '1 hour daily', iconName: 'Flame', descUrdu: 'باقاعدہ پریکٹس اور پروجیکٹس بنانے کے لیے' },
      { id: '2_hours', labelUrdu: '۲ گھنٹے (تیز رفتار ترقی)', labelEn: '2 hours daily', iconName: 'TrendingUp', descUrdu: 'جلد از جلد مارکیٹ میں کام شروع کرنے کے لیے' },
      { id: '3_plus_hours', labelUrdu: '۳+ گھنٹے یا فل ٹائم (مکمل فوکس)', labelEn: '3+ hours / Full focus', iconName: 'Award', descUrdu: 'مکمل لگن کے ساتھ پروفیشنل بننے کے لیے' },
    ],
  },

  // H. آپ کتنی جلدی شروع کرنا چاہتے ہیں؟
  {
    id: 'q_urgency',
    category: 'urgency',
    questionUrdu: 'آپ کتنی جلدی شروع کرنا چاہتے ہیں؟',
    questionEn: 'How soon do you want to begin?',
    subtitleUrdu: 'آپ کا ارادہ کتنا فوری ہے؟',
    subtitleEn: 'What is your timeline for starting?',
    isMultiple: false,
    options: [
      { id: 'today', labelUrdu: 'آج ہی! (پہلا قدم ابھی اٹھانا ہے)', labelEn: 'Today! (First action now)', iconName: 'Flame', descUrdu: 'بغیر کسی تاخیر کے فوری آغاز' },
      { id: 'this_week', labelUrdu: 'اسی ہفتے کے دوران', labelEn: 'Within this week', iconName: 'Clock', descUrdu: 'چند دنوں میں سامان اور ذہن تیار کر کے' },
      { id: 'slow_pace', labelUrdu: 'آہستہ آہستہ (اپنی سہولت سے)', labelEn: 'Slow & Steady pace', iconName: 'Compass', descUrdu: 'بغیر دباؤ کے اطمینان سے سیکھنا' },
      { id: 'info_first', labelUrdu: 'پہلے معلومات حاصل کرنا چاہتا/چاہتی ہوں', labelEn: 'Gather info & explore first', iconName: 'BookOpen', descUrdu: 'تمام پہلو سمجھ کر فیصلہ کروں گا/گی' },
    ],
  },

  // I. آپ کو کون سی چیزیں دلچسپ لگتی ہیں؟ (Multiple Selections)
  {
    id: 'q_interests',
    category: 'interests',
    questionUrdu: 'آپ کو کن موضوعات اور چیزوں میں دلچسپی ہے؟',
    questionEn: 'Which subjects & activities spark your interest?',
    subtitleUrdu: 'اپنی پسند کی چند چیزیں منتخب کریں (کم از کم ۱ یا ۲):',
    subtitleEn: 'Select the areas you naturally enjoy (choose 1 or more):',
    isMultiple: true,
    options: [
      { id: 'ai_smart_tech', labelUrdu: '🤖 AI اور اسمارٹ ٹیکنالوجی (ChatGPT)', labelEn: 'AI & Smart Tech', iconName: 'Bot' },
      { id: 'mobile_apps', labelUrdu: '📱 موبائل، سوشل میڈیا و ایپس', labelEn: 'Mobile & Social Media', iconName: 'Smartphone' },
      { id: 'graphic_design', labelUrdu: '🎨 گرافک ڈیزائن اور کینوا (تصاویر)', labelEn: 'Graphic Design & Canva', iconName: 'Palette' },
      { id: 'video_editing', labelUrdu: '🎬 ویڈیو ایڈیٹنگ و کیمرہ شوٹنگ', labelEn: 'Video Editing & CapCut', iconName: 'Play' },
      { id: 'writing_content', labelUrdu: '✍️ اردو و انگریزی لکھنا (کنٹینٹ)', labelEn: 'Writing & Content Creation', iconName: 'FileText' },
      { id: 'teaching_kids', labelUrdu: '📚 پڑھانا، ٹیوشن و قرآن تعلیم', labelEn: 'Teaching, Tuition & Quran', iconName: 'BookOpen' },
      { id: 'business_trading', labelUrdu: '🏪 دکانداری، خرید و فروخت و منافع', labelEn: 'Business, Retail & Trade', iconName: 'Store' },
      { id: 'online_selling', labelUrdu: '📦 دراز، فیس بک پر سامان بیچنا', labelEn: 'Online Selling & Daraz', iconName: 'TrendingUp' },
      { id: 'cooking_food', labelUrdu: '🍲 کھانا پکانا، ہوم شیف و بیکنگ', labelEn: 'Cooking & Home Chef', iconName: 'Home' },
      { id: 'sewing_tailoring', labelUrdu: '🪡 سلائی کڑھائی، فیشن و کپڑے', labelEn: 'Sewing, Tailoring & Fashion', iconName: 'Scissors' },
      { id: 'crafts_art', labelUrdu: '🎨 دستکاری، ہوم ڈیکور و مہندی', labelEn: 'Handicrafts, Art & Henna', iconName: 'HeartHandshake' },
      { id: 'agriculture_garden', labelUrdu: '🌾 زراعت، سبزیاں، باغبانی و نرسری', labelEn: 'Farming, Gardening & Nursery', iconName: 'Sprout' },
      { id: 'livestock_animals', labelUrdu: '🐄 ڈیری فارمنگ، بکریاں و مرغیاں', labelEn: 'Livestock, Dairy & Poultry', iconName: 'HeartHandshake' },
      { id: 'electric_solar', labelUrdu: '⚡ بجلی، سولر پینل و انورٹر کام', labelEn: 'Electric, Solar & Inverter', iconName: 'Cpu' },
      { id: 'motorcycle_auto', labelUrdu: '🛵 موٹر سائیکل و گاڑی مرمت', labelEn: 'Motorcycle & Auto Repair', iconName: 'Wrench' },
      { id: 'construction_paint', labelUrdu: '🏠 تعمیرات، پینٹ و پلمبنگ', labelEn: 'Plumbing, Paint & Trade', iconName: 'Wrench' },
      { id: 'helping_counseling', labelUrdu: '🤝 لوگوں کی خدمت، علاج و مشاورت', labelEn: 'Helping, Health & Counseling', iconName: 'HeartHandshake' },
      { id: 'nature_green', labelUrdu: '🌱 ماحول، ری سائیکلنگ و صفائی', labelEn: 'Nature & Green Solutions', iconName: 'Sprout' },
      { id: 'open_anything', labelUrdu: '🧭 مجھے ابھی معلوم نہیں (کچھ بھی اچھا)', labelEn: 'Open to explore anything', iconName: 'Compass' },
    ],
  },
];

// ---------------------------------------------------------------------------
// 2. INTELLIGENT MATCHING & SCORING ENGINE
// ---------------------------------------------------------------------------

export function matchSkillsForUserProfile(profile: UserDiscoveryProfile): DiscoveryResultGroups {
  const resources = profile.availableResources || [];
  const interests = profile.interests || [];
  const location = profile.workLocation || 'anywhere_flexible';
  const goal = profile.primaryGoal || 'learn_skill';
  const workstyle = profile.preferredWorkstyle || 'dont_know_open';
  const education = profile.educationLevel || 'school';
  const time = profile.dailyTimeAvailable || '30_min';
  const activity = profile.currentActivity || 'unemployed';

  const hasOnlyMobile = resources.includes('mobile_only') && !resources.includes('computer_laptop');
  const hasLaptop = resources.includes('computer_laptop');
  const hasSewingMachine = resources.includes('sewing_machine');
  const hasTools = resources.includes('tools_hardware');
  const hasLand = resources.includes('land_farm');
  const hasShop = resources.includes('shop_place');
  const wantsHome = location === 'home';
  const isVillage = location === 'village';
  const wantsOnline = location === 'online_anywhere' || goal === 'freelancing';
  const isBeginnerEducation = education === 'non_reader' || education === 'basic_reading';

  const scoredSkills: SkillMatch[] = SKILL_UNIVERSE_ITEMS.map((skill) => {
    let score = 50; // baseline
    const category = getCategoryById(skill.categoryId);
    const domainGroup = category?.domainGroup;
    const whyUrdu: string[] = [];
    const whyEn: string[] = [];
    const reasons: MatchReason[] = [];
    const tagsUrdu: string[] = [];
    const tagsEn: string[] = [];

    // --- 1. DEVICE & RESOURCE MATCH ---
    if (hasOnlyMobile) {
      if (skill.isMobileFriendly) {
        score += 24;
        whyUrdu.push('آپ کے پاس موبائل فون ہے اور یہ ہنر ۱۰۰٪ اسمارٹ فون سے کیا جا سکتا ہے۔');
        whyEn.push('You have a smartphone, and this skill can be 100% learned and practiced on mobile.');
        reasons.push({
          type: 'resource',
          textUrdu: '📱 ۱۰۰٪ موبائل فون پر ممکن',
          textEn: '100% Mobile Smartphone Friendly',
        });
        tagsUrdu.push('صرف موبائل');
        tagsEn.push('Mobile Only');
      } else if (skill.isComputerRequired) {
        score -= 28; // penalty for requiring PC when user has only mobile
      }
    } else if (hasLaptop) {
      if (skill.isComputerRequired || skill.isMobileFriendly) {
        score += 15;
        whyUrdu.push('آپ کے پاس لیپ ٹاپ یا کمپیوٹر کی سہولت موجود ہے، جو اس ہنر کے لیے بہترین ہے۔');
        whyEn.push('You have a computer/laptop which accelerates learning this skill.');
        reasons.push({
          type: 'resource',
          textUrdu: '💻 کمپیوٹر / لیپ ٹاپ مطابقت',
          textEn: 'PC/Laptop Compatible',
        });
      }
    }

    // Specific equipment bonuses
    if (hasSewingMachine && (skill.id.includes('sewing') || skill.categoryId.includes('cat-5') || skill.titleUrdu.includes('سلائی'))) {
      score += 35;
      whyUrdu.push('آپ کے پاس پہلے سے سلائی مشین موجود ہے، جس سے آپ فوری طور پر کام اور آمدنی شروع کر سکتے ہیں۔');
      whyEn.push('You have a sewing machine at home for immediate practical start.');
      reasons.push({
        type: 'resource',
        textUrdu: '🪡 سلائی مشین کی موجودگی',
        textEn: 'Sewing machine available',
      });
      tagsUrdu.push('فوری آغاز');
      tagsEn.push('Instant Start');
    }

    if (hasTools && (skill.isOfflineLocal || domainGroup === 'trades_technical' || skill.titleUrdu.includes('سولر') || skill.titleUrdu.includes('بجلی'))) {
      score += 28;
      whyUrdu.push('آپ کے پاس اوزار یا ٹول کٹ موجود ہے، جو اس تکنیکی ہنر میں کام آئے گی۔');
      whyEn.push('You have tools/hardware suitable for practical trade application.');
      reasons.push({
        type: 'resource',
        textUrdu: '🛠️ اوزاروں کا استعمال',
        textEn: 'Hardware tools match',
      });
    }

    if (hasLand && (skill.categoryId.includes('cat-7') || skill.titleUrdu.includes('فارمنگ') || skill.titleUrdu.includes('زراعت') || skill.titleUrdu.includes('باغبانی'))) {
      score += 32;
      whyUrdu.push('آپ کے پاس زمین یا جگہ موجود ہے، جس سے آپ زرعی یا فارمنگ پروجیکٹ آسانی سے شروع کر سکتے ہیں۔');
      whyEn.push('You have land/space available for agricultural or livestock projects.');
      reasons.push({
        type: 'resource',
        textUrdu: '🌾 زمین و جگہ کی سہولت',
        textEn: 'Land/yard resource match',
      });
      tagsUrdu.push('زمین پر ممکن');
      tagsEn.push('Land Ready');
    }

    if (hasShop && (skill.primaryEarningPaths.includes('business') || skill.primaryEarningPaths.includes('local_service'))) {
      score += 20;
      whyUrdu.push('آپ کے پاس دکان یا تجارتی جگہ موجود ہے، جس سے گاہکوں کو سروس دینا آسان ہے۔');
      whyEn.push('You have commercial space or shop setup to directly serve customers.');
    }

    // --- 2. LOCATION MATCH ---
    if (wantsHome) {
      if (skill.isHomeBased) {
        score += 25;
        whyUrdu.push('آپ نے گھر سے کام کی ترجیح دی ہے اور یہ ہنر گھر کے اندر پرسکون ماحول میں باوقار طریقے سے کیا جا سکتا ہے۔');
        whyEn.push('Matches your preference for home-based work without commuting.');
        reasons.push({
          type: 'location',
          textUrdu: '🏠 ۱۰۰٪ گھر سے باوقار کام',
          textEn: '100% Dignified Home-based work',
        });
        tagsUrdu.push('گھر بیٹھے');
        tagsEn.push('Home-based');
      } else if (!skill.isHomeBased && skill.isOfflineLocal) {
        score -= 20;
      }
    }

    if (isVillage) {
      if (skill.targetAudience.includes('village') || domainGroup === 'agriculture_rural' || skill.isOfflineLocal) {
        score += 24;
        whyUrdu.push('یہ ہنر دیہات اور قصبوں کے مقامی ماحول، فصلوں اور مقامی مارکیٹ کے لیے انتہائی موزوں ہے۔');
        whyEn.push('Highly suited for rural villages, local community needs, and agricultural setups.');
        reasons.push({
          type: 'location',
          textUrdu: '🌾 دیہاتی ماحول سے ہم آہنگ',
          textEn: 'Rural & Village Compatible',
        });
        tagsUrdu.push('دیہات کے لیے موزوں');
        tagsEn.push('Rural Ready');
      }
    }

    if (wantsOnline) {
      if (skill.isOnlineWork || skill.primaryEarningPaths.includes('freelancing')) {
        score += 24;
        whyUrdu.push('آپ آن لائن کام چاہتے ہیں، اور اس ہنر سے انٹرنیٹ پر ملکی اور بین الاقوامی کلائنٹس کو سروسز دی جا سکتی ہیں۔');
        whyEn.push('Directly matches your goal for online remote and freelance work.');
        reasons.push({
          type: 'location',
          textUrdu: '🌐 آن لائن و ریموٹ کام',
          textEn: 'Online & Remote Friendly',
        });
        tagsUrdu.push('آن لائن فری لانسنگ');
        tagsEn.push('Online Freelance');
      }
    }

    // --- 3. INTERESTS MATCH ---
    if (interests.length > 0) {
      let interestMatched = false;

      if (interests.includes('ai_smart_tech') && (skill.categoryId.includes('cat-3') || skill.slug.includes('ai') || skill.titleUrdu.includes('AI') || skill.titleUrdu.includes('چیٹ جی پی ٹی'))) {
        score += 30;
        interestMatched = true;
        whyUrdu.push('آپ کو AI اور جدید ٹیکنالوجی کا شوق ہے، یہ ہنر آپ کو سب سے آگے لے جائے گا۔');
        whyEn.push('Matches your curiosity for AI and modern tools.');
        reasons.push({ type: 'interest', textUrdu: '🤖 AI میں دلچسپی', textEn: 'AI Interest Match' });
      }

      if (interests.includes('graphic_design') && (skill.categoryId.includes('cat-2') || skill.slug.includes('canva') || skill.titleUrdu.includes('ڈیزائن') || skill.titleUrdu.includes('کینوا'))) {
        score += 32;
        interestMatched = true;
        whyUrdu.push('آپ نے گرافک ڈیزائن میں دلچسپی ظاہر کی ہے، کینوا اور ڈیزائننگ آپ کی تخلیقی صلاحیت کو اجاگر کرے گی۔');
        whyEn.push('Aligns with your interest in graphic design and visuals.');
        reasons.push({ type: 'interest', textUrdu: '🎨 ڈیزائننگ کا شوق', textEn: 'Visual Design Match' });
      }

      if (interests.includes('cooking_food') && (skill.categoryId.includes('cat-5') || skill.titleUrdu.includes('کھانا') || skill.titleUrdu.includes('شیف') || skill.titleUrdu.includes('بیکنگ'))) {
        score += 35;
        interestMatched = true;
        whyUrdu.push('آپ کو کھانا پکانے اور کچن کا شوق ہے، جس سے ہوم کچن کا بہترین کاروبار بن سکتا ہے۔');
        whyEn.push('Directly connects with your passion for cooking and catering.');
        reasons.push({ type: 'interest', textUrdu: '🍲 کھانا پکانے کا ہنر', textEn: 'Culinary Passion Match' });
      }

      if (interests.includes('sewing_tailoring') && (skill.id.includes('sewing') || skill.titleUrdu.includes('سلائی') || skill.titleUrdu.includes('کپڑے'))) {
        score += 35;
        interestMatched = true;
        whyUrdu.push('آپ کو سلائی کڑھائی اور فیشن میں دلچسپی ہے، یہ ہمیشہ طلب میں رہنے والا باوقار ہنر ہے۔');
        whyEn.push('Aligns with your interest in sewing and garment tailoring.');
        reasons.push({ type: 'interest', textUrdu: '🪡 سلائی و کڑھائی', textEn: 'Tailoring Interest' });
      }

      if (interests.includes('electric_solar') && (skill.categoryId.includes('cat-8') || skill.titleUrdu.includes('سولر') || skill.titleUrdu.includes('بجلی') || skill.titleUrdu.includes('انورٹر'))) {
        score += 35;
        interestMatched = true;
        whyUrdu.push('آپ کو بجلی اور سولر کے کام میں دلچسپی ہے، جو کہ موجودہ وقت کا سب سے زیادہ منافع بخش فیلڈ ہنر ہے۔');
        whyEn.push('Matches your interest in electrical solar energy trade.');
        reasons.push({ type: 'interest', textUrdu: '⚡ سولر و الیکٹریکل', textEn: 'Solar & Electrical Interest' });
      }

      if (interests.includes('agriculture_garden') && (skill.categoryId.includes('cat-7') || skill.titleUrdu.includes('زراعت') || skill.titleUrdu.includes('ٹنل') || skill.titleUrdu.includes('سبزیاں'))) {
        score += 35;
        interestMatched = true;
        whyUrdu.push('آپ کو باغبانی اور زراعت پسند ہے، جدید طریقے آپ کی آمدنی کو کئی گنا بڑھا سکتے ہیں۔');
        whyEn.push('Directly matches your interest in modern agriculture.');
        reasons.push({ type: 'interest', textUrdu: '🌾 زراعت و باغبانی', textEn: 'Agriculture Interest' });
      }

      if (interests.includes('video_editing') && (skill.categoryId.includes('cat-2') || skill.titleUrdu.includes('ویڈیو') || skill.titleUrdu.includes('کیپ کٹ'))) {
        score += 32;
        interestMatched = true;
        whyUrdu.push('آپ کو ویڈیو بنانے کا شوق ہے، شارٹ ویڈیوز اور ریلز کی مارکیٹ میں زبردست ڈیمانڈ ہے۔');
        whyEn.push('Aligns with your interest in video editing and digital storytelling.');
        reasons.push({ type: 'interest', textUrdu: '🎬 ویڈیو ایڈیٹنگ', textEn: 'Video Editing Match' });
      }

      if (interests.includes('business_trading') || interests.includes('online_selling')) {
        if (skill.primaryEarningPaths.includes('business') || skill.primaryEarningPaths.includes('online_selling') || skill.categoryId.includes('cat-4')) {
          score += 22;
          interestMatched = true;
          whyUrdu.push('آپ تجارت اور خرید و فروخت کا ذہن رکھتے ہیں، یہ ہنر آپ کو سیدھا کسٹمرز اور منافع تک پہنچاتا ہے۔');
          whyEn.push('Matches your entrepreneurial mindset and sales goals.');
        }
      }

      if (interests.includes('open_anything')) {
        // Universal easy starters get a boost
        if (skill.isQuickLearn || skill.isLowCost) {
          score += 15;
          whyUrdu.push('یہ ایک سادہ، تیز اور آزمودہ ہنر ہے جسے کوئی بھی شخص آسانی سے سیکھ کر شروع کر سکتا ہے۔');
          whyEn.push('A versatile, low-barrier skill ideal for beginners.');
        }
      }
    }

    // --- 4. EDUCATION & ACCESSIBILITY ---
    // Rule: Education is NEVER a hard exclusion!
    if (isBeginnerEducation) {
      if (skill.level === 1 || skill.isMobileFriendly || skill.isQuickLearn || domainGroup === 'crafts_lifestyle' || domainGroup === 'trades_technical' || domainGroup === 'agriculture_rural') {
        score += 18;
        whyUrdu.push('اس ہنر کو سیکھنے کے لیے کسی بڑی انگریزی یا اسکول کی کتابوں کی ضرورت نہیں، یہ دیکھ کر اور مشق سے باآسانی آ جاتا ہے۔');
        whyEn.push('No complex academic background needed. Highly intuitive visual & practical learning.');
        reasons.push({
          type: 'education',
          textUrdu: '✨ بغیر رسمی ڈگری کے ممکن',
          textEn: 'No formal degree required',
        });
        tagsUrdu.push('آسان سیکھنا');
        tagsEn.push('Easy to learn');
      }
    }

    // --- 5. WORKSTYLE MATCH ---
    if (workstyle === 'hands_on' && (domainGroup === 'crafts_lifestyle' || domainGroup === 'trades_technical' || domainGroup === 'agriculture_rural')) {
      score += 18;
      whyUrdu.push('آپ کو ہاتھ سے عملی کام پسند ہے، اور یہ ہنر آپ کی عملی کاریگری سے بھرپور مطابقت رکھتا ہے۔');
      whyEn.push('Matches your preference for hands-on, tangible craftsmanship.');
      reasons.push({ type: 'workstyle', textUrdu: '🖐️ ہاتھ کا کام و کاریگری', textEn: 'Hands-on Workstyle' });
    } else if (workstyle === 'digital_screen' && (domainGroup === 'digital_tech' || domainGroup === 'creative_media')) {
      score += 18;
      whyUrdu.push('آپ اسکرین اور ڈیجیٹل ایپس میں دلچسپی رکھتے ہیں، اس لیے یہ ہنر آپ کے مزاج سے میل کھاتا ہے۔');
      whyEn.push('Matches your interest in digital screens and apps.');
      reasons.push({ type: 'workstyle', textUrdu: '💻 ڈیجیٹل اسکرین ورک', textEn: 'Digital Screen Workstyle' });
    } else if (workstyle === 'creative_art' && (domainGroup === 'creative_media' || skill.id.includes('canva') || skill.id.includes('sewing'))) {
      score += 20;
      whyUrdu.push('آپ کے اندر تخلیقی سوچ ہے اور یہ ہنر آپ کو خوبصورت چیزیں بنانے کا موقع دیتا ہے۔');
      whyEn.push('Directly appeals to your creative and visual mindset.');
      reasons.push({ type: 'workstyle', textUrdu: '🎨 تخلیقی صلاحیت', textEn: 'Creative Mindset' });
    }

    // --- 6. GOAL FIT ---
    if (goal === 'side_income' && (skill.isHomeBased || skill.isQuickLearn || skill.timeToLearnDays <= 30)) {
      score += 16;
      whyUrdu.push('اضافی گھریلو آمدنی کے لیے یہ ہنر ۳۰ دن کے اندر نتائج دینا شروع کر سکتا ہے۔');
      whyEn.push('Ideal for side income, capable of quick monetization within 30 days.');
      tagsUrdu.push('اضافی آمدنی');
      tagsEn.push('Side Income');
    } else if (goal === 'own_business' && (skill.primaryEarningPaths.includes('business') || domainGroup === 'business_commerce')) {
      score += 20;
      whyUrdu.push('اپنا آزاد کاروبار شروع کرنے کے لیے یہ ایک انتہائی منافع بخش اور محفوظ راستہ ہے۔');
      whyEn.push('Strong foundation for building an independent small business.');
      tagsUrdu.push('اپنا کاروبار');
      tagsEn.push('Own Business');
    }

    // Fallback default reason if list is empty
    if (whyUrdu.length === 0) {
      whyUrdu.push('یہ ہنر آپ کے منتخب کردہ وسائل، وقت اور روزگار کے ہدف سے بہترین مطابقت رکھتا ہے۔');
      whyEn.push('This skill is aligned with your available time, resources, and livelihood focus.');
    }

    // Cap score at 99 for realism
    const finalScore = Math.min(Math.max(score, 45), 99);

    let matchLevelUrdu = 'بہترین انتخاب ⭐';
    let matchLevelEn = 'Top Match ⭐';
    if (finalScore >= 90) {
      matchLevelUrdu = 'شاندار ترین مطابقت (۹۰٪+) ⭐';
      matchLevelEn = 'Outstanding Fit (90%+) ⭐';
    } else if (finalScore >= 80) {
      matchLevelUrdu = 'انتہائی موزوں ہنر (۸۰٪+)';
      matchLevelEn = 'High Recommendation (80%+)';
    } else if (finalScore >= 70) {
      matchLevelUrdu = 'اچھا متبادل انتخاب (۷۰٪+)';
      matchLevelEn = 'Good Alternative (70%+)';
    } else {
      matchLevelUrdu = 'قابل غور ہنر';
      matchLevelEn = 'Worth Exploring';
    }

    return {
      skill,
      matchScore: finalScore,
      matchLevelUrdu,
      matchLevelEn,
      whyThisMatchUrdu: whyUrdu,
      whyThisMatchEn: whyEn,
      primaryReasons: reasons,
      tagsUrdu: Array.from(new Set(tagsUrdu)),
      tagsEn: Array.from(new Set(tagsEn)),
    };
  });

  // Sort by score descending
  scoredSkills.sort((a, b) => b.matchScore - a.matchScore);

  // Group into curated sections for discovery
  const topBestMatches = scoredSkills.slice(0, 5);
  const otherGreatMatches = scoredSkills.slice(5, 10);
  const mobileFriendlyMatches = scoredSkills.filter(s => s.skill.isMobileFriendly).slice(0, 6);
  const homeBasedMatches = scoredSkills.filter(s => s.skill.isHomeBased).slice(0, 6);
  const jobPathwayMatches = scoredSkills.filter(s => s.skill.primaryEarningPaths.includes('job')).slice(0, 6);
  const onlineFreelanceMatches = scoredSkills.filter(s => s.skill.isOnlineWork || s.skill.primaryEarningPaths.includes('freelancing')).slice(0, 6);
  const businessMatches = scoredSkills.filter(s => s.skill.primaryEarningPaths.includes('business') || s.skill.primaryEarningPaths.includes('online_selling')).slice(0, 6);
  const lowCostMatches = scoredSkills.filter(s => s.skill.isLowCost).slice(0, 6);
  const futureTechMatches = scoredSkills.filter(s => {
    const dg = getCategoryById(s.skill.categoryId)?.domainGroup;
    return dg === 'digital_tech' || dg === 'future_green' || s.skill.slug.includes('ai');
  }).slice(0, 6);

  return {
    topBestMatches,
    otherGreatMatches,
    mobileFriendlyMatches,
    homeBasedMatches,
    jobPathwayMatches,
    onlineFreelanceMatches,
    businessMatches,
    lowCostMatches,
    futureTechMatches,
  };
}

// ---------------------------------------------------------------------------
// 3. PERSISTENCE HELPERS
// ---------------------------------------------------------------------------

const STORAGE_KEY_PROFILE = 'seekho_user_discovery_profile';
const STORAGE_KEY_PROGRESS = 'seekho_user_discovery_progress';
const STORAGE_KEY_SAVED_SKILLS = 'seekho_saved_discovery_skills';

export function saveDiscoveryProgress(currentStep: number, answers: Record<string, string | string[]>) {
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify({ currentStep, answers, timestamp: Date.now() }));
  } catch (err) {
    console.warn('Failed to save discovery progress', err);
  }
}

export function loadDiscoveryProgress(): { currentStep: number; answers: Record<string, string | string[]> } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.warn('Failed to load discovery progress', err);
  }
  return null;
}

export function clearDiscoveryProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY_PROGRESS);
  } catch (err) {
    // ignore
  }
}

export function saveUserDiscoveryProfile(profile: UserDiscoveryProfile) {
  try {
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify({ ...profile, completedAt: new Date().toISOString() }));
  } catch (err) {
    console.warn('Failed to save discovery profile', err);
  }
}

export function loadUserDiscoveryProfile(): UserDiscoveryProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.warn('Failed to load discovery profile', err);
  }
  return null;
}

export function toggleSaveSkillBookmark(skillId: string): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SAVED_SKILLS);
    const list: string[] = raw ? JSON.parse(raw) : [];
    const index = list.indexOf(skillId);
    if (index >= 0) {
      list.splice(index, 1);
      localStorage.setItem(STORAGE_KEY_SAVED_SKILLS, JSON.stringify(list));
      return false; // unbookmarked
    } else {
      list.push(skillId);
      localStorage.setItem(STORAGE_KEY_SAVED_SKILLS, JSON.stringify(list));
      return true; // bookmarked
    }
  } catch {
    return false;
  }
}

export function getSavedSkillBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SAVED_SKILLS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
