export interface SkillStackItem {
  id: string;
  titleUrdu: string;
  titleEn: string;
  taglineUrdu: string;
  taglineEn: string;
  skillsIncluded: {
    skillId: string;
    titleUrdu: string;
    titleEn: string;
    icon: string;
  }[];
  resultingRoleUrdu: string;
  resultingRoleEn: string;
  whoIsItForUrdu: string;
  whoIsItForEn: string;
  marketAdvantageUrdu: string;
  marketAdvantageEn: string;
  estimatedEarningUrdu: string;
  estimatedEarningEn: string;
  firstStepUrdu: string;
  firstStepEn: string;
  badgeUrdu: string;
  badgeEn: string;
  gradient: string;
}

export const SKILL_STACKS_MASTER: SkillStackItem[] = [
  {
    id: 'stack-content-creator',
    titleUrdu: 'کینوا + سوشل میڈیا + AI (ڈیجیٹل کنٹینٹ کرئیٹر)',
    titleEn: 'Canva + Social Media + AI (Digital Content Creator)',
    taglineUrdu: 'موبائل سے پوسٹرز، ریلز اور اشتہارات تیار کر کے دکانداروں اور برانڈز کو سوشل میڈیا سروسز فراہم کریں',
    taglineEn: 'Create posters, reels, and ads on mobile to provide full social media marketing retainers',
    skillsIncluded: [
      { skillId: 'skill-canva-design', titleUrdu: 'کینوا ڈیزائن', titleEn: 'Canva Design', icon: 'Palette' },
      { skillId: 'skill-social-media', titleUrdu: 'سوشل میڈیا مینجمنٹ', titleEn: 'Social Media', icon: 'Share2' },
      { skillId: 'skill-ai-tools', titleUrdu: 'AI و پرامپٹنگ', titleEn: 'AI & Prompts', icon: 'Cpu' }
    ],
    resultingRoleUrdu: 'سوشل میڈیا مینیجر اور کنٹینٹ کریئیٹر',
    resultingRoleEn: 'Social Media & Content Creator',
    whoIsItForUrdu: 'طلبہ، گھریلو خواتین اور نوجوان جو بغیر کسی مہنگے پی سی کے گھر بیٹھے آن لائن کمائی چاہتے ہیں',
    whoIsItForEn: 'Students, homemakers, and youth wanting mobile-based freelance income',
    marketAdvantageUrdu: 'اکیلا ڈیزائنر صرف تصویر دیتا ہے، لیکن جب آپ AI سے تحریر اور سوشل میڈیا پر پوسٹنگ بھی سنبھالتے ہیں تو کلائنٹ آپ کو ماہانہ ریٹینر دیتا ہے۔',
    marketAdvantageEn: 'Instead of just one poster, you handle copy, graphics, and scheduled posting, securing monthly client retainers.',
    estimatedEarningUrdu: 'ماہانہ ۲۰ سے ۶۰ ہزار روپے (فی کلائنٹ ۱۰ سے ۱۵ ہزار روپے ماہانہ)',
    estimatedEarningEn: 'PKR 20k to 60k/month (PKR 10k-15k per client retainer)',
    firstStepUrdu: 'آج ہی کینوا میں ۳ خوبصورت پوسٹرز اور AI سے ان کی ۳ اردو کیپشنز تیار کر کے ایک نمونہ پورٹ فولیو بنائیں',
    firstStepEn: 'Design 3 sample flyers in Canva with AI-crafted Urdu captions to form your first portfolio',
    badgeUrdu: 'سب سے مقبول امتزاج',
    badgeEn: 'Most Popular Stack',
    gradient: 'from-purple-700 via-pink-800 to-slate-900'
  },
  {
    id: 'stack-home-food-business',
    titleUrdu: 'کھانا پکانا + فوڈ فوٹوگرافی + واٹس ایپ آرڈرز (گھریلو فوڈ بزنس)',
    titleEn: 'Cooking + Food Photography + WhatsApp Orders (Home Food Business)',
    taglineUrdu: 'صاف ستھرا گھریلو کھانا، بیکری یا لنچ بکس بنا کر واٹس ایپ اور سوشل میڈیا پر بیچیں',
    taglineEn: 'Cook hygienic home meals, baking, or office lunch boxes and sell via WhatsApp & local delivery',
    skillsIncluded: [
      { skillId: 'skill-cooking-food', titleUrdu: 'کھانا پکانا و بیکنگ', titleEn: 'Cooking & Baking', icon: 'UtensilsCrossed' },
      { skillId: 'skill-photography', titleUrdu: 'موبائل فوٹوگرافی', titleEn: 'Mobile Photography', icon: 'Camera' },
      { skillId: 'skill-ecommerce-selling', titleUrdu: 'آن لائن و واٹس ایپ سیلز', titleEn: 'WhatsApp Sales', icon: 'ShoppingBag' }
    ],
    resultingRoleUrdu: 'گھریلو فوڈ انٹرپرینیور (Home Chef)',
    resultingRoleEn: 'Home Food Entrepreneur',
    whoIsItForUrdu: 'خواتین اور گھریلو شیفس جو کچن کے ہنر سے باوقار آمدنی کمانا چاہتی ہیں',
    whoIsItForEn: 'Homemakers and passionate cooks seeking kitchen-based income',
    marketAdvantageUrdu: 'صرف کھانا اچھا ہونا کافی نہیں، جب اچھی تصویر اور واٹس ایپ مینو کارڈ ہو تو آرڈرز کی لائن لگ جاتی ہے۔',
    marketAdvantageEn: 'Great taste paired with appealing photos and structured menus attracts consistent repeat orders.',
    estimatedEarningUrdu: 'ماہانہ ۳۰ سے ۸۰ ہزار روپے منافع',
    estimatedEarningEn: 'PKR 30k to 80k/month net profit',
    firstStepUrdu: 'اپنے تیار کردہ ۳ بہترین کھانوں کی صاف تصویریں دن کی روشنی میں کھینچیں اور ایک سادہ واٹس ایپ مینو بنائیں',
    firstStepEn: 'Photograph 3 signature dishes in daylight and draft a clean WhatsApp menu card',
    badgeUrdu: 'گھریلو خواتین کے لیے بہترین',
    badgeEn: 'Best for Homemakers',
    gradient: 'from-amber-600 via-orange-800 to-slate-900'
  },
  {
    id: 'stack-boutique-ecommerce',
    titleUrdu: 'سلائی کڑھائی + یوٹیوب/ٹک ٹاک + آن لائن فروخت (آن لائن بوتیک)',
    titleEn: 'Tailoring + Video Content + Online Selling (Online Boutique)',
    taglineUrdu: 'کپڑے سلائی کرنے کی ویڈیوز بنائیں اور تیار شدہ فینسی سوٹس پورے ملک میں بذریعہ ٹی سی ایس بھیجیں',
    taglineEn: 'Record sewing tutorials/reels and dispatch custom designer dresses nationwide via COD',
    skillsIncluded: [
      { skillId: 'skill-sewing-tailoring', titleUrdu: 'سلائی و کڑھائی', titleEn: 'Tailoring & Embroidery', icon: 'Scissors' },
      { skillId: 'skill-video-editing', titleUrdu: 'ویڈیو ایڈیٹنگ', titleEn: 'Short Video Editing', icon: 'Video' },
      { skillId: 'skill-ecommerce-selling', titleUrdu: 'ای کامرس و کیش آن ڈلیوری', titleEn: 'Online Selling / COD', icon: 'Package' }
    ],
    resultingRoleUrdu: 'آن لائن بوتیک اونر اور کرافٹ کرئیٹر',
    resultingRoleEn: 'Online Boutique Owner & Creator',
    whoIsItForUrdu: 'ٹیلرز، فیشن ڈیزائنرز اور دستکاری بنانے والی باہمت خواتین',
    whoIsItForEn: 'Tailors, fashion creators, and artisan women',
    marketAdvantageUrdu: 'محلے کے محدود گاہکوں کے بجائے سوشل میڈیا کی مدد سے پورے پاکستان سے آرڈرز حاصل ہوتے ہیں۔',
    marketAdvantageEn: 'Expands your customer base from a neighborhood street to nationwide parcel deliveries.',
    estimatedEarningUrdu: 'ماہانہ ۵۰ ہزار سے ۲ لاکھ روپے',
    estimatedEarningEn: 'PKR 50k to 200k/month',
    firstStepUrdu: 'ایک فینسی سوٹ سلائی کرتے ہوئے ۳۰ سیکنڈ کی شارٹ ویڈیو موبائل سے ریکارڈ کریں اور سوشل میڈیا پر لگائیں',
    firstStepEn: 'Record a 30-second making-of reel of a finished dress and share online',
    badgeUrdu: 'ہائی اسکیل کاروبار',
    badgeEn: 'High Scaling Business',
    gradient: 'from-rose-700 via-pink-900 to-slate-900'
  },
  {
    id: 'stack-smart-farming-solar',
    titleUrdu: 'جدید زراعت + سولر انرجی + ڈیجیٹل مارکیٹنگ (سمارٹ فارمنگ)',
    titleEn: 'Modern Farming + Solar Energy + Digital Marketing (Smart Farming)',
    taglineUrdu: 'سولر ٹیوب ویل، ڈرپ ایریگیشن اور اپنی فصل یا ڈیری کی مصنوعات براہ راست شہروں میں اچھے داموں بیچنا',
    taglineEn: 'Power tube-wells with solar, reduce fuel costs, and sell produce directly to consumers online',
    skillsIncluded: [
      { skillId: 'skill-agriculture-farming', titleUrdu: 'جدید زراعت و باغبانی', titleEn: 'Modern Agriculture', icon: 'Sprout' },
      { skillId: 'skill-solar-energy', titleUrdu: 'سولر انرجی سسٹم', titleEn: 'Solar Tech', icon: 'Sun' },
      { skillId: 'skill-small-business', titleUrdu: 'براہ راست کسان مارکیٹنگ', titleEn: 'Direct-to-Consumer', icon: 'Store' }
    ],
    resultingRoleUrdu: 'سمارٹ ایگری انٹرپرینیور اور فارم مینیجر',
    resultingRoleEn: 'Smart Agri-Entrepreneur & Farm Manager',
    whoIsItForUrdu: 'دیہات اور قصبات کے زمیندار، کسان اور زراعت میں دلچسپی رکھنے والے نوجوان',
    whoIsItForEn: 'Rural farmers, landowners, and youth interested in high-yield agribusiness',
    marketAdvantageUrdu: 'مہنگے ڈیزل اور بجلی کے بلوں سے نجات اور آڑھتیوں کے کم ریٹ کے بجائے براہ راست گاہکوں کو دیسی اشیاء بیچ کر دوگنا منافع۔',
    marketAdvantageEn: 'Zero diesel overhead with solar, plus direct urban sales eliminating middleman cuts.',
    estimatedEarningUrdu: 'ماہانہ ۱ سے ۵ لاکھ روپے (فصل و ڈیری کے لحاظ سے)',
    estimatedEarningEn: 'PKR 100k to 500k/month (depending on harvest/dairy volume)',
    firstStepUrdu: 'اپنے علاقے میں سولر ٹیوب ویل کی لاگت کا موازنہ ڈیزل کے سالانہ خرچے سے کریں اور سوشل میڈیا پر دیسی مصنوعات کا پیج بنائیں',
    firstStepEn: 'Calculate solar ROI vs annual diesel expense, and set up a farm-fresh direct Facebook page',
    badgeUrdu: 'دیہات و کسانوں کے لیے گیم چینجر',
    badgeEn: 'Rural Game Changer',
    gradient: 'from-emerald-700 via-teal-900 to-slate-900'
  },
  {
    id: 'stack-digital-freelance-pro',
    titleUrdu: 'ویب ڈویلپمنٹ + AI اوزار + انگریزی کمیونیکیشن (گلوبل فری لانسر)',
    titleEn: 'Web Development + AI Tools + English Communication (Global Freelancer)',
    taglineUrdu: 'جدید ویب سائٹس اور ایپس بنا کر بیرونی ممالک کے کلائنٹس سے ڈالرز میں کمائی',
    taglineEn: 'Build modern websites and web apps for global clients and earn in foreign currency',
    skillsIncluded: [
      { skillId: 'skill-web-development', titleUrdu: 'ویب ڈویلپمنٹ', titleEn: 'Web Development', icon: 'Laptop' },
      { skillId: 'skill-ai-tools', titleUrdu: 'AI کوڈنگ اسسٹنس', titleEn: 'AI Coding Tools', icon: 'Cpu' },
      { skillId: 'skill-english-communication', titleUrdu: 'انگریزی مواصلات', titleEn: 'English Communication', icon: 'Languages' }
    ],
    resultingRoleUrdu: 'فل اسٹیک ویب ڈویلپر اور سافٹ ویئر فری لانسر',
    resultingRoleEn: 'Full-Stack Web Developer & Freelancer',
    whoIsItForUrdu: 'طلبہ، گریجویٹس اور نوجوان جو آئی ٹی انڈسٹری میں شاندار کیریئر بنانا چاہتے ہیں',
    whoIsItForEn: 'Students, graduates, and youth seeking global high-paying IT careers',
    marketAdvantageUrdu: 'AI کی مدد سے کوڈنگ کی رفتار ۵ گنا تیز اور روانی والی انگلش سے بین الاقوامی کلائنٹس کو باآسانی مطمئن کرنا۔',
    marketAdvantageEn: '5x development speed with AI assistance combined with fluent client pitch communication.',
    estimatedEarningUrdu: 'ماہانہ ۱ لاکھ سے ۴ لاکھ روپے ($300 - $1,500/month)',
    estimatedEarningEn: '$300 to $1,500/month (PKR 100k - 400k+)',
    firstStepUrdu: 'ایک سادہ پورٹ فولیو ویب سائٹ بنائیں اور اپنے ۳ پروجیکٹس انٹرنیٹ پر لائیو کریں',
    firstStepEn: 'Build a single-page portfolio website showcasing 3 live project demos',
    badgeUrdu: 'سب سے زیادہ آمدنی والا راستہ',
    badgeEn: 'Highest Income Pathway',
    gradient: 'from-blue-700 via-indigo-950 to-slate-900'
  },
  {
    id: 'stack-technician-agency',
    titleUrdu: 'الیکٹریشن/پلمبنگ + موبائل ایپ بکنگ + کسٹمر سروس (ہوم سروس ایجنسی)',
    titleEn: 'Electrician/Plumbing + App Booking + Customer Service (Home Service Agency)',
    taglineUrdu: 'گھریلو مرمت کا ہنر رکھنے والے کاریگروں کی ٹیم بنائیں اور شہر بھر میں فون کال پر کوالٹی سروس دیں',
    taglineEn: 'Lead a team of skilled technicians offering guaranteed on-demand home repair services',
    skillsIncluded: [
      { skillId: 'skill-electrical-work', titleUrdu: 'الیکٹریکل و وائرنگ', titleEn: 'Electrical Work', icon: 'Zap' },
      { skillId: 'skill-plumbing-work', titleUrdu: 'پلمبنگ و سینیٹری', titleEn: 'Plumbing', icon: 'Droplets' },
      { skillId: 'skill-small-business', titleUrdu: 'سروس ایجنسی مینجمنٹ', titleEn: 'Agency Management', icon: 'Store' }
    ],
    resultingRoleUrdu: 'ہوم سروسز ایجنسی مینیجر',
    resultingRoleEn: 'Home Repair Services Agency Owner',
    whoIsItForUrdu: 'تجربہ کار کاریگر، الیکٹریشن اور پلمبر جو اکیلے کام کرنے کے بجائے اپنا ادارہ بنانا چاہتے ہیں',
    whoIsItForEn: 'Skilled tradesmen aspiring to build a managed contractor agency',
    marketAdvantageUrdu: 'لوگ اناڑی کاریگروں کے نخروں سے تنگ ہیں؛ یونیفارم، وقت کی پابندی اور مقررہ ریٹ لسٹ دینے سے مستقل کسٹمر ملتے ہیں۔',
    marketAdvantageEn: 'Customers value reliability and fixed pricing over unaccountable informal handymen.',
    estimatedEarningUrdu: 'ماہانہ ۶۰ ہزار سے ۲ لاکھ روپے',
    estimatedEarningEn: 'PKR 60k to 200k/month',
    firstStepUrdu: 'اپنے محلے کے ۳ اچھے کاریگروں سے بات کریں اور ایک صفحے کا معیاری سروس کارڈ اور ریٹ لسٹ بنائیں',
    firstStepEn: 'Partner with 3 reliable local tradesmen and print a standardized rate card with warranty',
    badgeUrdu: 'شہری و مقامی روزگار',
    badgeEn: 'Local Services Scaler',
    gradient: 'from-cyan-800 via-blue-900 to-slate-900'
  }
];
