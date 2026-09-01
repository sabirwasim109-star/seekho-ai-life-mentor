export interface SkillUniverseCategory {
  id: string;
  number: number;
  titleUrdu: string;
  titleEn: string;
  slug: string;
  iconName: string;
  color: string;
  gradient: string;
  domainGroup: 'digital_tech' | 'creative_media' | 'business_commerce' | 'trades_technical' | 'crafts_lifestyle' | 'agriculture_rural' | 'education_community' | 'future_green';
  domainGroupUrdu: string;
  domainGroupEn: string;
  taglineUrdu: string;
  taglineEn: string;
  subcategories: {
    id: string;
    titleUrdu: string;
    titleEn: string;
    descriptionUrdu: string;
    descriptionEn: string;
  }[];
}

export interface SkillUniverseLevelMilestone {
  level: 1 | 2 | 3 | 4 | 5;
  levelBadgeUrdu: string;
  levelBadgeEn: string;
  titleUrdu: string;
  titleEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  practicalMilestoneUrdu: string;
  practicalMilestoneEn: string;
  estimatedDurationUrdu: string;
  estimatedDurationEn: string;
}

export interface SkillUniverseItem {
  id: string;
  slug: string;
  titleUrdu: string;
  titleEn: string;
  taglineUrdu: string;
  taglineEn: string;
  categoryId: string;
  subcategoryId: string;
  level: 1 | 2 | 3 | 4 | 5;
  levelTitleUrdu: string;
  levelTitleEn: string;
  timeToLearnDays: number;
  timeDisplayUrdu: string;
  timeDisplayEn: string;
  requiredResourcesUrdu: string[];
  requiredResourcesEn: string[];
  isMobileFriendly: boolean;
  isComputerRequired: boolean;
  isHomeBased: boolean;
  isOnlineWork: boolean;
  isOfflineLocal: boolean;
  isLowCost: boolean;
  isQuickLearn: boolean;
  targetAudience: ('students' | 'women' | 'youth' | 'village' | 'city' | 'all')[];
  primaryEarningPaths: ('job' | 'freelancing' | 'business' | 'home' | 'local_service' | 'online_selling')[];
  iconName: string;
  coverGradient: string;
  badgeUrdu: string;
  badgeEn: string;
  
  // 14 Core Universal Detail Dimensions
  whatIsThisUrdu: string;
  whatIsThisEn: string;
  whoIsItForUrdu: string;
  whoIsItForEn: string;
  canLearnFromMobileUrdu: string;
  canLearnFromMobileEn: string;
  isComputerNecessaryUrdu: string;
  isComputerNecessaryEn: string;
  howMuchTimeUrdu: string;
  howMuchTimeEn: string;
  whatItemsNeededUrdu: string[];
  whatItemsNeededEn: string[];
  whereIsItUsefulUrdu: string[];
  whereIsItUsefulEn: string[];
  
  // Real-world Pathways
  jobPathwayUrdu: string;
  jobPathwayEn: string;
  freelancePathwayUrdu: string;
  freelancePathwayEn: string;
  businessPathwayUrdu: string;
  businessPathwayEn: string;
  homeWorkPathwayUrdu: string;
  homeWorkPathwayEn: string;
  onlinePathwayUrdu: string;
  onlinePathwayEn: string;
  localPathwayUrdu: string;
  localPathwayEn: string;
  
  // Action & Graph Relationships
  firstPracticalActionUrdu: string;
  firstPracticalActionEn: string;
  nextSkillUrdu: string;
  nextSkillEn: string;
  nextSkillId?: string;
  relatedSkillIds: string[];
  
  // 5 Progressive Mastery Levels
  levels: SkillUniverseLevelMilestone[];
  
  // Multilingual & colloquial search keywords
  searchKeywords: string[];
}

export const SKILL_DOMAIN_GROUPS = [
  { id: 'all', titleUrdu: 'تمام کائنات (۵۰ کیٹیگریز)', titleEn: 'All 50 Categories', icon: 'Sparkles' },
  { id: 'digital_tech', titleUrdu: 'ڈیجیٹل، IT و ٹیکنالوجی', titleEn: 'Digital & Tech', icon: 'Laptop' },
  { id: 'creative_media', titleUrdu: 'میڈیا، ڈیزائن و ویڈیو', titleEn: 'Creative & Media', icon: 'Palette' },
  { id: 'business_commerce', titleUrdu: 'کاروبار، ای کامرس و سیلز', titleEn: 'Business & Sales', icon: 'TrendingUp' },
  { id: 'crafts_lifestyle', titleUrdu: 'دستکاری، سلائی و گھریلو ہنر', titleEn: 'Crafts & Home', icon: 'Scissors' },
  { id: 'agriculture_rural', titleUrdu: 'زراعت، لائیو اسٹاک و باغبانی', titleEn: 'Agri & Livestock', icon: 'Sprout' },
  { id: 'trades_technical', titleUrdu: 'فنی کاریگری، سولر و میکینک', titleEn: 'Trades & Repair', icon: 'Wrench' },
  { id: 'education_community', titleUrdu: 'تعلیم، زبانیں و سماجی خدمت', titleEn: 'Teaching & Social', icon: 'BookOpen' },
  { id: 'future_green', titleUrdu: 'مستقبل و گرین انرجی', titleEn: 'Future & Green', icon: 'Cpu' },
];

export const SKILL_UNIVERSE_50_CATEGORIES: SkillUniverseCategory[] = [
  {
    id: 'cat-1-mobile-digital',
    number: 1,
    titleUrdu: 'موبائل اور ڈیجیٹل ہنر',
    titleEn: 'Mobile & Digital Skills',
    slug: 'mobile-digital-skills',
    iconName: 'Smartphone',
    color: 'emerald',
    gradient: 'from-emerald-700 via-teal-800 to-slate-900',
    domainGroup: 'digital_tech',
    domainGroupUrdu: 'ڈیجیٹل و ٹیکنالوجی',
    domainGroupEn: 'Digital & Tech',
    taglineUrdu: 'صرف سمارٹ فون کی مدد سے روزمرہ کا ڈیجیٹل کام، براؤزنگ اور سادہ سروسز انجام دینا',
    taglineEn: 'Handle everyday digital tasks, research, and basic services using just a smartphone',
    subcategories: [
      { id: 'sub-mob-basics', titleUrdu: 'موبائل کے بنیادی ٹولز', titleEn: 'Mobile Basics', descriptionUrdu: 'گوگل ایپس، کلاؤڈ اسٹوریج اور فائلز مینجمنٹ', descriptionEn: 'Google Apps, cloud storage, file management' },
      { id: 'sub-mob-doc', titleUrdu: 'موبائل پر تحریر و دستاویزات', titleEn: 'Mobile Docs & PDF', descriptionUrdu: 'پی ڈی ایف، فارمز اور اسکیننگ', descriptionEn: 'PDF handling, mobile forms and scanning' },
      { id: 'sub-mob-apps', titleUrdu: 'یوٹیلٹی و پروڈکٹیوٹی ایپس', titleEn: 'Productivity Apps', descriptionUrdu: 'کیلنڈر، واٹس ایپ بزنس، نوٹس', descriptionEn: 'Calendar, WhatsApp Business, notes' },
      { id: 'sub-mob-online-work', titleUrdu: 'موبائل سے آن لائن مائیکرو ٹاسکس', titleEn: 'Micro Tasks on Mobile', descriptionUrdu: 'ڈیٹا کلیکشن، سروے اور فارم فلنگ', descriptionEn: 'Data collection, surveys, form entry' }
    ]
  },
  {
    id: 'cat-2-ai-chatgpt',
    number: 2,
    titleUrdu: 'AI اور ChatGPT',
    titleEn: 'AI & ChatGPT',
    slug: 'ai-and-chatgpt',
    iconName: 'Cpu',
    color: 'purple',
    gradient: 'from-purple-700 via-indigo-900 to-slate-900',
    domainGroup: 'digital_tech',
    domainGroupUrdu: 'ڈیجیٹل و ٹیکنالوجی',
    domainGroupEn: 'Digital & Tech',
    taglineUrdu: 'مصنوعی ذہانت کو اپنا مددگار بنا کر تحریر، ڈیزائننگ اور روزمرہ مسائل ۵ گنا تیزی سے حل کریں',
    taglineEn: 'Harness AI for research, high-speed writing, task automation, and problem solving',
    subcategories: [
      { id: 'sub-ai-basics', titleUrdu: 'AI کا بنیادی تعارف', titleEn: 'AI Basics', descriptionUrdu: 'AI کیسے کام کرتا ہے اور محفوظ استعمال کیا ہے', descriptionEn: 'How generative AI works and safe usage' },
      { id: 'sub-ai-prompting', titleUrdu: 'پرامپٹ انجینئرنگ', titleEn: 'Prompting Skills', descriptionUrdu: 'درست اور طاقتور ہدایات لکھنا', descriptionEn: 'Writing structured prompts for precise results' },
      { id: 'sub-ai-writing', titleUrdu: 'AI سے تحریر و ریسرچ', titleEn: 'AI Writing & Research', descriptionUrdu: 'مضامین، ای میلز، سمریاں اور کاروباری تجاویز', descriptionEn: 'Articles, emails, summaries, business proposals' },
      { id: 'sub-ai-images', titleUrdu: 'AI امیجز اور گرافکس', titleEn: 'AI Images & Art', descriptionUrdu: 'تصاویر بنانا اور فوٹو اینہانسمنٹ', descriptionEn: 'Generating visuals and photo enhancement' },
      { id: 'sub-ai-business', titleUrdu: 'کاروبار و دکان کے لیے AI', titleEn: 'AI for Business', descriptionUrdu: 'کسٹمر سپورٹ، ریپلائی اور مارکیٹنگ میں AI', descriptionEn: 'Customer replies and marketing workflows' }
    ]
  },
  {
    id: 'cat-3-canva-graphic-design',
    number: 3,
    titleUrdu: 'Canva اور Graphic Design',
    titleEn: 'Canva & Graphic Design',
    slug: 'canva-graphic-design',
    iconName: 'Palette',
    color: 'pink',
    gradient: 'from-pink-600 via-purple-900 to-slate-900',
    domainGroup: 'creative_media',
    domainGroupUrdu: 'میڈیا و ڈیزائن',
    domainGroupEn: 'Creative & Media',
    taglineUrdu: 'خوبصورت پوسٹرز، لوگو، کارڈز اور سوشل میڈیا بینرز بغیر کسی پیچیدہ سافٹ ویئر کے بنائیں',
    taglineEn: 'Design posters, logos, cards, and social media flyers without complex software',
    subcategories: [
      { id: 'sub-canva-basics', titleUrdu: 'کینوا کے بنیادی ٹولز', titleEn: 'Canva Fundamentals', descriptionUrdu: 'ٹیمپلیٹس، فونٹس اور رنگوں کا امتزاج', descriptionEn: 'Templates, fonts, color palettes' },
      { id: 'sub-canva-social', titleUrdu: 'سوشل میڈیا پوسٹرز و ریل کورز', titleEn: 'Social Media Graphics', descriptionUrdu: 'فیس بک، انسٹاگرام اور واٹس ایپ سٹیٹس', descriptionEn: 'Instagram posts, Facebook ads, WhatsApp flyers' },
      { id: 'sub-canva-print', titleUrdu: 'پرنٹنگ ڈیزائن (کارڈز و فلائیرز)', titleEn: 'Print Design', descriptionUrdu: 'وزیٹنگ کارڈ، مینو کارڈ اور بروشرز', descriptionEn: 'Business cards, menus, flyers' },
      { id: 'sub-canva-presentation', titleUrdu: 'پریزنٹیشنز و پورٹ فولیو', titleEn: 'Presentations & Portfolios', descriptionUrdu: 'پیشہ ورانہ سلائیڈز اور ریزیومے', descriptionEn: 'Professional slide decks and CV designs' }
    ]
  },
  {
    id: 'cat-4-video-editing',
    number: 4,
    titleUrdu: 'Video Editing (ویڈیو ایڈیٹنگ)',
    titleEn: 'Video Editing',
    slug: 'video-editing',
    iconName: 'Video',
    color: 'rose',
    gradient: 'from-rose-600 via-red-900 to-slate-900',
    domainGroup: 'creative_media',
    domainGroupUrdu: 'میڈیا و ڈیزائن',
    domainGroupEn: 'Creative & Media',
    taglineUrdu: 'موبائل اور کمپیوٹر پر شارٹس، ریلز اور یوٹیوب ویڈیوز کو پروفیشنل انداز میں ایڈیٹ کرنا',
    taglineEn: 'Edit engaging shorts, reels, and YouTube videos on mobile or computer',
    subcategories: [
      { id: 'sub-vid-capcut', titleUrdu: 'موبائل ایڈیٹنگ (CapCut / VN)', titleEn: 'Mobile Video Editing', descriptionUrdu: 'کٹ، میوزک، ٹرانزیشن اور کیپشنز', descriptionEn: 'Cuts, background music, transitions, Urdu captions' },
      { id: 'sub-vid-reels', titleUrdu: 'شارٹس اور ریلز کی تیاری', titleEn: 'Short-Form Reels', descriptionUrdu: 'وائرل ہکس، رفتار اور اینیمیشن', descriptionEn: 'Hook pacing, trending audio, dynamic text' },
      { id: 'sub-vid-youtube', titleUrdu: 'لانگ فارم یوٹیوب ایڈیٹنگ', titleEn: 'Long-Form YouTube Videos', descriptionUrdu: 'بی رول، ساؤنڈ ایفیکٹس، کہانی کا تسلسل', descriptionEn: 'B-roll, sound design, multi-track storytelling' },
      { id: 'sub-vid-audio', titleUrdu: 'آواز کی صفائی اور بیک گراؤنڈ میوزک', titleEn: 'Voiceover & Audio Clean', descriptionUrdu: 'شور ختم کرنا اور واضح آواز', descriptionEn: 'Noise removal and balanced voice mix' }
    ]
  },
  {
    id: 'cat-5-youtube',
    number: 5,
    titleUrdu: 'YouTube (یوٹیوب چینل تخلیق)',
    titleEn: 'YouTube Channel Creation',
    slug: 'youtube-creator',
    iconName: 'PlaySquare',
    color: 'red',
    gradient: 'from-red-600 via-rose-950 to-slate-900',
    domainGroup: 'creative_media',
    domainGroupUrdu: 'میڈیا و ڈیزائن',
    domainGroupEn: 'Creative & Media',
    taglineUrdu: 'مفید اور معلوماتی یوٹیوب چینل شروع کرنا، تھمب نیلز، SEO اور آڈینس گروتھ',
    taglineEn: 'Launch an educational YouTube channel, master thumbnails, SEO, and audience growth',
    subcategories: [
      { id: 'sub-yt-niche', titleUrdu: 'چینل آئیڈیا اور موضوع کا انتخاب', titleEn: 'Niche Selection', descriptionUrdu: 'اپنے ہنر اور شوق کے مطابق موضوع چننا', descriptionEn: 'Picking high-value topics based on passion' },
      { id: 'sub-yt-thumbnail', titleUrdu: 'کلک ایبل تھمب نیل ڈیزائن', titleEn: 'High-CTR Thumbnails', descriptionUrdu: 'واضح عنوانات اور پرکشش چہرہ/تصویر', descriptionEn: 'Bold Urdu typography and eye-catching visual composition' },
      { id: 'sub-yt-seo', titleUrdu: 'یوٹیوب SEO اور ٹیگز', titleEn: 'YouTube SEO & Metadata', descriptionUrdu: 'ٹائٹل، ڈسکرپشن اور سرچ رینکنگ', descriptionEn: 'Search-friendly descriptions, titles and tags' },
      { id: 'sub-yt-monetize', titleUrdu: 'مونیٹائزیشن اور سپانسر شپس', titleEn: 'Monetization Pathways', descriptionUrdu: 'ایڈسینس، اپنی پراڈکٹس اور الحاق', descriptionEn: 'AdSense, affiliate marketing, digital products' }
    ]
  },
  {
    id: 'cat-6-social-media',
    number: 6,
    titleUrdu: 'Social Media Management',
    titleEn: 'Social Media Management',
    slug: 'social-media-management',
    iconName: 'Share2',
    color: 'blue',
    gradient: 'from-blue-600 via-cyan-900 to-slate-900',
    domainGroup: 'creative_media',
    domainGroupUrdu: 'میڈیا و ڈیزائن',
    domainGroupEn: 'Creative & Media',
    taglineUrdu: 'کاروباری اداروں اور برانڈز کے فیس بک، انسٹاگرام اور واٹس ایپ پیجز کو منظم کرنا',
    taglineEn: 'Manage Facebook, Instagram, and WhatsApp profiles for businesses and shops',
    subcategories: [
      { id: 'sub-sm-page-setup', titleUrdu: 'پروفیشنل پیج سیٹ اپ', titleEn: 'Page Optimization', descriptionUrdu: 'بائیو، کور، واٹس ایپ بٹن اور مینو', descriptionEn: 'Bio, call-to-action buttons, contact layout' },
      { id: 'sub-sm-calendar', titleUrdu: 'کنٹینٹ کیلنڈر و شیڈولنگ', titleEn: 'Content Calendars', descriptionUrdu: 'ہفتہ وار پوسٹس کا منظم منصوبہ', descriptionEn: 'Weekly post schedule and automated publishing' },
      { id: 'sub-sm-community', titleUrdu: 'کسٹمر انگیجمنٹ و کمنٹس', titleEn: 'Community Engagement', descriptionUrdu: 'میسجز کا فوری اور بااخلاق جواب', descriptionEn: 'Prompt and polite customer message handling' },
      { id: 'sub-sm-analytics', titleUrdu: 'پیج کی کارکردگی اور رزلٹس', titleEn: 'Insights & Analytics', descriptionUrdu: 'ریچ، لائکس اور کسٹمرز کا ڈیٹا سمجھنا', descriptionEn: 'Reading impressions, reach, and user actions' }
    ]
  },
  {
    id: 'cat-7-digital-marketing',
    number: 7,
    titleUrdu: 'Digital Marketing (ڈیجیٹل مارکیٹنگ)',
    titleEn: 'Digital Marketing',
    slug: 'digital-marketing',
    iconName: 'TrendingUp',
    color: 'emerald',
    gradient: 'from-emerald-600 via-teal-900 to-slate-900',
    domainGroup: 'business_commerce',
    domainGroupUrdu: 'کاروبار و سیلز',
    domainGroupEn: 'Business & Sales',
    taglineUrdu: 'فیس بک، گوگل اور واٹس ایپ پر ٹارگٹڈ اشتہارات چلا کر کسٹمرز اور سیلز حاصل کرنا',
    taglineEn: 'Run targeted ads on Meta and Google to drive inbound leads and online sales',
    subcategories: [
      { id: 'sub-dm-meta-ads', titleUrdu: 'فیس بک و انسٹاگرام ایڈز', titleEn: 'Meta Ads Manager', descriptionUrdu: 'ٹارگٹ آڈینس، بجٹ اور ایڈ مہم', descriptionEn: 'Audience targeting, daily budget, ad creatives' },
      { id: 'sub-dm-whatsapp', titleUrdu: 'واٹس ایپ مارکیٹنگ', titleEn: 'WhatsApp Marketing', descriptionUrdu: 'براڈکاسٹ لسٹ، کیٹلاگ اور آٹو میسجز', descriptionEn: 'Broadcasts, product catalog, quick auto-replies' },
      { id: 'sub-dm-local-seo', titleUrdu: 'گوگل میپس و لوکل بزنس', titleEn: 'Google Business Profile', descriptionUrdu: 'دکان کو گوگل میپ پر رجسٹر کرنا', descriptionEn: 'Listing local shop on Google Maps with reviews' }
    ]
  },
  {
    id: 'cat-8-freelancing',
    number: 8,
    titleUrdu: 'Freelancing (فری لانسنگ)',
    titleEn: 'Freelancing',
    slug: 'freelancing-fundamentals',
    iconName: 'Globe',
    color: 'cyan',
    gradient: 'from-cyan-600 via-blue-900 to-slate-900',
    domainGroup: 'business_commerce',
    domainGroupUrdu: 'کاروبار و سیلز',
    domainGroupEn: 'Business & Sales',
    taglineUrdu: 'انٹرنیٹ پر اپنی خدمات پیش کرنا، پروفائل بنانا، پروپوزل لکھنا اور بین الاقوامی ادائیگیاں',
    taglineEn: 'Offer your services globally on Upwork, Fiverr, and secure payments in Pakistan',
    subcategories: [
      { id: 'sub-fl-platforms', titleUrdu: 'پلیٹ فارمز کا تعارف (Upwork / Fiverr)', titleEn: 'Freelance Platforms', descriptionUrdu: 'پروفائل کی درست ترتیب اور تصدیق', descriptionEn: 'Setting up verified profiles and gigs' },
      { id: 'sub-fl-proposal', titleUrdu: 'پروپوزل اور بڈنگ کے اصول', titleEn: 'Proposal Writing', descriptionUrdu: 'کلائنٹ کے مسئلے کا حل پیش کرنا', descriptionEn: 'Crafting problem-solving, winning pitches' },
      { id: 'sub-fl-payment', titleUrdu: 'بین الاقوامی ادائیگیاں (Payoneer / بینک)', titleEn: 'Payment Gateways', descriptionUrdu: 'حلال کمائی کو پاکستانی بینک میں لانا', descriptionEn: 'Withdrawing funds safely to local bank accounts' }
    ]
  },
  {
    id: 'cat-9-web-development',
    number: 9,
    titleUrdu: 'Web Development (ویب سائٹ بنانا)',
    titleEn: 'Web Development',
    slug: 'web-development',
    iconName: 'Layout',
    color: 'indigo',
    gradient: 'from-indigo-600 via-purple-900 to-slate-900',
    domainGroup: 'digital_tech',
    domainGroupUrdu: 'ڈیجیٹل و ٹیکنالوجی',
    domainGroupEn: 'Digital & Tech',
    taglineUrdu: 'کاروباری ویب سائٹس، لینڈنگ پیجز اور آن لائن پورٹلز کی تیاری',
    taglineEn: 'Build responsive business websites, landing pages, and web applications',
    subcategories: [
      { id: 'sub-web-html-css', titleUrdu: 'HTML, CSS اور بنیادی ساخت', titleEn: 'HTML & CSS Basics', descriptionUrdu: 'صفحات کے رنگ روپ اور موبائل لے آؤٹ', descriptionEn: 'Responsive layout, styles, modern UI' },
      { id: 'sub-web-wordpress', titleUrdu: 'ورڈپریس بغیر کوڈنگ کے', titleEn: 'No-Code WordPress', descriptionUrdu: 'دکانوں اور کمپنیوں کی مکمل ویب سائٹس', descriptionEn: 'Building complete business sites with themes' },
      { id: 'sub-web-frontend', titleUrdu: 'ماڈرن فرنٹ اینڈ (React / Tailwind)', titleEn: 'Modern Frontend', descriptionUrdu: 'انٹرایکٹو ویب ایپس اور ڈیش بورڈز', descriptionEn: 'Interactive client applications and dashboards' }
    ]
  },
  {
    id: 'cat-10-app-development',
    number: 10,
    titleUrdu: 'App Development (موبائل ایپ بنانا)',
    titleEn: 'Mobile App Development',
    slug: 'mobile-app-development',
    iconName: 'Smartphone',
    color: 'emerald',
    gradient: 'from-emerald-700 via-blue-900 to-slate-900',
    domainGroup: 'digital_tech',
    domainGroupUrdu: 'ڈیجیٹل و ٹیکنالوجی',
    domainGroupEn: 'Digital & Tech',
    taglineUrdu: 'اینڈرائڈ اور آئی فون ایپس تیار کر کے پلے اسٹور پر لانچ کرنا',
    taglineEn: 'Develop Android & iOS cross-platform mobile apps for business solutions',
    subcategories: [
      { id: 'sub-app-flutter', titleUrdu: 'فلٹر اور کراس پلیٹ فارم', titleEn: 'Flutter & React Native', descriptionUrdu: 'ایک کوڈ سے اینڈرائڈ اور آئی او ایس ایپ', descriptionEn: 'Single codebase mobile UI development' },
      { id: 'sub-app-nocode', titleUrdu: 'بغیر کوڈنگ کے موبائل ایپس (FlutterFlow)', titleEn: 'No-Code App Builders', descriptionUrdu: 'ڈرَیگ اینڈ ڈراپ سے ایپ بنانا', descriptionEn: 'Visual drag-and-drop app generation' },
      { id: 'sub-app-playstore', titleUrdu: 'پلے اسٹور پبلشنگ اور پالیسی', titleEn: 'Play Store Deployment', descriptionUrdu: 'ایپ اپلوڈ اور اپڈیٹ کے مراحل', descriptionEn: 'App bundle testing, release, and compliance' }
    ]
  },
  {
    id: 'cat-11-programming',
    number: 11,
    titleUrdu: 'Programming (پروگرامنگ و کوڈنگ)',
    titleEn: 'Programming & Logic',
    slug: 'programming-and-coding',
    iconName: 'Code',
    color: 'slate',
    gradient: 'from-slate-700 via-slate-900 to-black',
    domainGroup: 'digital_tech',
    domainGroupUrdu: 'ڈیجیٹل و ٹیکنالوجی',
    domainGroupEn: 'Digital & Tech',
    taglineUrdu: 'پائتھون اور جاوا اسکرپٹ کے ذریعے منطق، ڈیٹا پراسیسنگ اور آٹومیشن سیکھنا',
    taglineEn: 'Master computational logic, Python, JavaScript, and workflow automation',
    subcategories: [
      { id: 'sub-prog-logic', titleUrdu: 'پروگرامنگ کی بنیادی منطق', titleEn: 'Programming Logic', descriptionUrdu: 'ویری ایبلز، لوپس، شرائط اور فنکشنز', descriptionEn: 'Variables, loops, conditions, functions' },
      { id: 'sub-prog-python', titleUrdu: 'پائتھون برائے مبتدی', titleEn: 'Python for Beginners', descriptionUrdu: 'آسان اور تیز رفتار پروگرامنگ زبان', descriptionEn: 'Readable scripting for daily automation' },
      { id: 'sub-prog-automation', titleUrdu: 'روزمرہ کاموں کی خودکاری (Scripts)', titleEn: 'Task Automation', descriptionUrdu: 'فائلز، ای میلز اور ڈیٹا خودکار کرنا', descriptionEn: 'Automating repetitive file and web tasks' }
    ]
  },
  {
    id: 'cat-12-data-office-skills',
    number: 12,
    titleUrdu: 'Data & Office Skills (ایکسل و آفس)',
    titleEn: 'Data & Office Skills',
    slug: 'data-and-office-skills',
    iconName: 'FileSpreadsheet',
    color: 'emerald',
    gradient: 'from-emerald-800 via-teal-950 to-slate-900',
    domainGroup: 'digital_tech',
    domainGroupUrdu: 'ڈیجیٹل و ٹیکنالوجی',
    domainGroupEn: 'Digital & Tech',
    taglineUrdu: 'ایکسل شیٹس، ورڈ دستاویزات، ڈیٹا انٹری اور دفتری رپورٹنگ کی مہارت',
    taglineEn: 'Master Excel spreadsheets, Word reports, data entry, and office reporting',
    subcategories: [
      { id: 'sub-data-excel-basics', titleUrdu: 'ایکسل فارمولے اور حساب کتاب', titleEn: 'Excel Formulas', descriptionUrdu: 'SUM, AVERAGE, IF اور بنیادی فارمولے', descriptionEn: 'Arithmetic, logical formulas, cell styling' },
      { id: 'sub-data-entry', titleUrdu: 'ڈیٹا انٹری اور کلین اپ', titleEn: 'Data Entry & Cleaning', descriptionUrdu: 'بغیر غلطی کے تیز رفتار ڈیٹا درج کرنا', descriptionEn: 'Fast and accurate data transcription' },
      { id: 'sub-data-sheets', titleUrdu: 'گوگل شیٹس اور ٹیم شیئرنگ', titleEn: 'Google Sheets & Collab', descriptionUrdu: 'موبائل اور لیپ ٹاپ پر آن لائن شیئرنگ', descriptionEn: 'Real-time collaborative spreadsheets' }
    ]
  },
  {
    id: 'cat-13-online-teaching',
    number: 13,
    titleUrdu: 'Online Teaching (آن لائن تدریس)',
    titleEn: 'Online Teaching & Tutoring',
    slug: 'online-teaching',
    iconName: 'GraduationCap',
    color: 'amber',
    gradient: 'from-amber-600 via-orange-900 to-slate-900',
    domainGroup: 'education_community',
    domainGroupUrdu: 'تعلیم و سماج',
    domainGroupEn: 'Teaching & Social',
    taglineUrdu: 'قرآن، اسکول کے مضامین یا ہنر آن لائن زوم/واٹس ایپ پر ملکی و غیر ملکی طلبہ کو پڑھانا',
    taglineEn: 'Teach Quran, school subjects, or skills online to local and overseas students',
    subcategories: [
      { id: 'sub-teach-quran', titleUrdu: 'آن لائن قرآن و تجوید اکیڈمی', titleEn: 'Online Quran Tutoring', descriptionUrdu: 'بیرونی ممالک کے بچوں کو ناظرہ و حفظ', descriptionEn: 'Teaching recitation to overseas kids via Zoom' },
      { id: 'sub-teach-school', titleUrdu: 'اکیڈمک ٹیوشن (ریاضی، سائنس، انگلش)', titleEn: 'Academic Tutoring', descriptionUrdu: 'اسکول و کالج کے امتحانات کی تیاری', descriptionEn: 'Matric/FSc and primary subject tutoring' },
      { id: 'sub-teach-digital-tools', titleUrdu: 'زوم، وائٹ بورڈ اور سلائیڈز', titleEn: 'Virtual Classroom Setup', descriptionUrdu: 'آن لائن کلاس روم کو دلچسپ بنانا', descriptionEn: 'Interactive boards, slides, audio clarity' }
    ]
  },
  {
    id: 'cat-14-writing-content-creation',
    number: 14,
    titleUrdu: 'Writing & Content Creation',
    titleEn: 'Writing & Content Creation',
    slug: 'writing-content-creation',
    iconName: 'Feather',
    color: 'teal',
    gradient: 'from-teal-700 via-emerald-950 to-slate-900',
    domainGroup: 'creative_media',
    domainGroupUrdu: 'میڈیا و ڈیزائن',
    domainGroupEn: 'Creative & Media',
    taglineUrdu: 'دلچسپ اردو و انگلش مضامین، بلاگز، اسکرپٹس اور اشتہاری تحریریں (کاپی رائٹنگ) لکھنا',
    taglineEn: 'Craft engaging Urdu/English blogs, video scripts, product copy, and storytelling',
    subcategories: [
      { id: 'sub-write-copywriting', titleUrdu: 'کاپی رائٹنگ اور اشتہاری الفاظ', titleEn: 'Copywriting & Sales Copy', descriptionUrdu: 'گاہک کے دل کو چھونے والی تحریر', descriptionEn: 'Persuasive headlines and product descriptions' },
      { id: 'sub-write-script', titleUrdu: 'یوٹیوب و ویڈیو اسکرپٹ رائٹنگ', titleEn: 'Video Scriptwriting', descriptionUrdu: 'دلچسپ کہانی اور ہکس لکھنا', descriptionEn: 'Retention-focused video storytelling' },
      { id: 'sub-write-blog', titleUrdu: 'بلاگ پوسٹس اور آرٹیکلز', titleEn: 'Article & Blog Writing', descriptionUrdu: 'معلوماتی اور مفید رہنمائی', descriptionEn: 'Educational and SEO-friendly blog articles' }
    ]
  },
  {
    id: 'cat-15-translation-languages',
    number: 15,
    titleUrdu: 'Translation & Languages (ترجمہ)',
    titleEn: 'Translation & Language Services',
    slug: 'translation-and-languages',
    iconName: 'Languages',
    color: 'blue',
    gradient: 'from-blue-700 via-indigo-950 to-slate-900',
    domainGroup: 'education_community',
    domainGroupUrdu: 'تعلیم و سماج',
    domainGroupEn: 'Teaching & Social',
    taglineUrdu: 'اردو، انگلش اور عربی کے درمیان تحریری و زبانی ترجمہ اور دستاویزات کی پروف ریڈنگ',
    taglineEn: 'Provide accurate translation and proofreading across Urdu, English, and Arabic',
    subcategories: [
      { id: 'sub-trans-en-ur', titleUrdu: 'انگلش سے اردو درست ترجمہ', titleEn: 'English to Urdu Translation', descriptionUrdu: 'بامحاورہ اور آسان مفہوم', descriptionEn: 'Context-aware, idiomatic translation' },
      { id: 'sub-trans-subtitles', titleUrdu: 'ویڈیو سب ٹائٹلز و کیپشنز', titleEn: 'Video Subtitling', descriptionUrdu: 'ویڈیوز کے نیچے متن کی ٹائمنگ', descriptionEn: 'SRT time-coded subtitle authoring' },
      { id: 'sub-trans-proofreading', titleUrdu: 'پروف ریڈنگ اور املا کی درستگی', titleEn: 'Proofreading & Editing', descriptionUrdu: 'گرائمر اور املا کی غلطیاں درست کرنا', descriptionEn: 'Grammar and typo polishing' }
    ]
  },
  {
    id: 'cat-16-photography',
    number: 16,
    titleUrdu: 'Photography (موبائل فوٹوگرافی)',
    titleEn: 'Mobile & Product Photography',
    slug: 'mobile-photography',
    iconName: 'Camera',
    color: 'amber',
    gradient: 'from-amber-700 via-yellow-950 to-slate-900',
    domainGroup: 'creative_media',
    domainGroupUrdu: 'میڈیا و ڈیزائن',
    domainGroupEn: 'Creative & Media',
    taglineUrdu: 'مصنوعات، کھانوں اور ایونٹس کی شاندار تصاویر موبائل کیمرے سے کھینچنا اور بیچنا',
    taglineEn: 'Capture stunning product, food, and event photos with your phone camera',
    subcategories: [
      { id: 'sub-photo-product', titleUrdu: 'پراڈکٹ فوٹوگرافی برائے ای کامرس', titleEn: 'Product Photography', descriptionUrdu: 'صاف بیک گراؤنڈ اور قدرتی روشنی', descriptionEn: 'Clean lighting and multi-angle ecommerce shots' },
      { id: 'sub-photo-food', titleUrdu: 'کھانوں کی فوٹوگرافی', titleEn: 'Food Photography', descriptionUrdu: 'مزیدار اور پرکشش فوڈ اینگلز', descriptionEn: 'Appealing food styling and daylight captures' },
      { id: 'sub-photo-editing', titleUrdu: 'موبائل پر فوٹو ری ٹچنگ (Lightroom)', titleEn: 'Mobile Photo Retouching', descriptionUrdu: 'رنگوں کی سیٹنگ اور چمک', descriptionEn: 'Lightroom presets and color grading' }
    ]
  },
  {
    id: 'cat-17-ecommerce',
    number: 17,
    titleUrdu: 'E-commerce (ای کامرس)',
    titleEn: 'E-commerce Store Management',
    slug: 'ecommerce-management',
    iconName: 'ShoppingBag',
    color: 'emerald',
    gradient: 'from-emerald-700 via-teal-900 to-slate-900',
    domainGroup: 'business_commerce',
    domainGroupUrdu: 'کاروبار و سیلز',
    domainGroupEn: 'Business & Sales',
    taglineUrdu: 'دراز، شاپائف یا اپنے پلیٹ فارم پر آن لائن اسٹور چلانا اور آرڈرز سنبھالنا',
    taglineEn: 'Run online stores on Daraz, Shopify, and manage daily inventory/fulfillment',
    subcategories: [
      { id: 'sub-ecom-daraz', titleUrdu: 'دراز سیلر سینٹر', titleEn: 'Daraz Seller Operations', descriptionUrdu: 'پراڈکٹ لسٹنگ، پیکیجنگ اور ریٹنگز', descriptionEn: 'Product listing, stock sync, Daraz ratings' },
      { id: 'sub-ecom-shopify', titleUrdu: 'شاپائف اسٹور بنانا', titleEn: 'Shopify Store Building', descriptionUrdu: 'آن لائن اسٹور کا ڈیزائن اور ادائیگی', descriptionEn: 'Custom storefront and COD setup' },
      { id: 'sub-ecom-sourcing', titleUrdu: 'سستی اشیاء کی سورسنگ (ہول سیل)', titleEn: 'Product Sourcing', descriptionUrdu: 'مارکیٹ سے اچھے ریٹ پر مال خریدنا', descriptionEn: 'Wholesale market negotiation and stocking' }
    ]
  },
  {
    id: 'cat-18-online-selling',
    number: 18,
    titleUrdu: 'Online Selling (آن لائن فروخت)',
    titleEn: 'Social Commerce & COD',
    slug: 'online-selling-social',
    iconName: 'Package',
    color: 'pink',
    gradient: 'from-pink-700 via-rose-950 to-slate-900',
    domainGroup: 'business_commerce',
    domainGroupUrdu: 'کاروبار و سیلز',
    domainGroupEn: 'Business & Sales',
    taglineUrdu: 'فیس بک مارکیٹ پلیس اور واٹس ایپ کے ذریعے کیش آن ڈلیوری (COD) پر سامان بیچنا',
    taglineEn: 'Sell goods on Facebook Marketplace and WhatsApp with Cash-on-Delivery (COD)',
    subcategories: [
      { id: 'sub-sell-fb-market', titleUrdu: 'فیس بک مارکیٹ پلیس لسٹنگ', titleEn: 'Facebook Marketplace', descriptionUrdu: 'مقامی خریداروں کو تیزی سے سامان بیچنا', descriptionEn: 'High-converting local listings' },
      { id: 'sub-sell-cod', titleUrdu: 'کیش آن ڈلیوری اور کورئیر (TCS/Leopards/Trax)', titleEn: 'COD Logistics & Couriers', descriptionUrdu: 'پارسل بکنگ، ٹریکنگ اور رقم کی وصولی', descriptionEn: 'Courier portal booking and cash remittance' },
      { id: 'sub-sell-customer-chat', titleUrdu: 'کسٹمر چیٹ اور آرڈر کلوزنگ', titleEn: 'Chat Closing Techniques', descriptionUrdu: 'گاہک کو مطمئن کر کے آرڈر کنفرم کرنا', descriptionEn: 'Objection handling and verified order booking' }
    ]
  },
  {
    id: 'cat-19-local-business',
    number: 19,
    titleUrdu: 'Local Business (مقامی دکان و کاروبار)',
    titleEn: 'Local Business Growth',
    slug: 'local-business-growth',
    iconName: 'Store',
    color: 'amber',
    gradient: 'from-amber-700 via-yellow-950 to-slate-900',
    domainGroup: 'business_commerce',
    domainGroupUrdu: 'کاروبار و سیلز',
    domainGroupEn: 'Business & Sales',
    taglineUrdu: 'محلے کی دکان، ہوٹل یا ورکشاپ کے گاہک بڑھانا، آمدن کا حساب اور کسٹمر لائلٹی',
    taglineEn: 'Scale neighborhood shops, food spots, or repair centers with proven local tactics',
    subcategories: [
      { id: 'sub-local-display', titleUrdu: 'دکان کی سجاوٹ اور ڈسپلے', titleEn: 'Storefront Merchandising', descriptionUrdu: 'صاف ستھرا اور پرکشش ماحول', descriptionEn: 'Clean visibility and impulse purchase layout' },
      { id: 'sub-local-repeat', titleUrdu: 'مستقل کسٹمر بنانے کا گر', titleEn: 'Repeat Customer Retention', descriptionUrdu: 'شائستہ اخلاق اور رعایت', descriptionEn: 'Trust building, fair pricing, VIP treatment' },
      { id: 'sub-local-digital', titleUrdu: 'دکان کا واٹس ایپ گروپ و میپ', titleEn: 'Local Digital Presence', descriptionUrdu: 'محلے کے لوگوں کو نئی اشیاء کی اطلاع', descriptionEn: 'Neighborhood WhatsApp catalog' }
    ]
  },
  {
    id: 'cat-20-entrepreneurship',
    number: 20,
    titleUrdu: 'Entrepreneurship (کاروبار کا آغاز)',
    titleEn: 'Micro-Entrepreneurship',
    slug: 'micro-entrepreneurship',
    iconName: 'Zap',
    color: 'purple',
    gradient: 'from-purple-700 via-indigo-950 to-slate-900',
    domainGroup: 'business_commerce',
    domainGroupUrdu: 'کاروبار و سیلز',
    domainGroupEn: 'Business & Sales',
    taglineUrdu: 'کم سرمائے سے نیا کاروبار شروع کرنا، نفع و نقصان کا تخمینہ اور رزقِ حلال کی برکت',
    taglineEn: 'Launch a low-capital startup, validate market demand, and structure halal profit margins',
    subcategories: [
      { id: 'sub-ent-idea', titleUrdu: 'بزنس آئیڈیا کی جانچ', titleEn: 'Idea Validation', descriptionUrdu: 'کیا لوگ اس کے پیسے دینے کو تیار ہیں؟', descriptionEn: 'Testing genuine customer demand before investing' },
      { id: 'sub-ent-budget', titleUrdu: 'چھوٹے سرمائے سے شروعات', titleEn: 'Bootstrapping & Lean Launch', descriptionUrdu: 'فضول خرچی سے بچاؤ اور کم سے کم لاگت', descriptionEn: 'Zero-waste launch with minimal overhead' },
      { id: 'sub-ent-scaling', titleUrdu: 'کاروبار کو بڑا کرنا', titleEn: 'Business Scaling', descriptionUrdu: 'نفع کو دوبارہ کاروبار میں لگانا', descriptionEn: 'Reinvesting profits for sustainable expansion' }
    ]
  },
  {
    id: 'cat-21-accounting-bookkeeping',
    number: 21,
    titleUrdu: 'Accounting & Bookkeeping (کھاتہ)',
    titleEn: 'Bookkeeping & Khata',
    slug: 'accounting-bookkeeping',
    iconName: 'Calculator',
    color: 'emerald',
    gradient: 'from-emerald-800 via-slate-900 to-black',
    domainGroup: 'business_commerce',
    domainGroupUrdu: 'کاروبار و سیلز',
    domainGroupEn: 'Business & Sales',
    taglineUrdu: 'ادھار، نقد، اخراجات اور روزمرہ منافع کا صاف ستھرا کھاتہ موبائل ایپ یا رجسٹر پر رکھنا',
    taglineEn: 'Track cash flow, customer credits (Udhaar), expenses, and net profit with digital Khata apps',
    subcategories: [
      { id: 'sub-acc-digikhata', titleUrdu: 'ڈیجی کھاتہ / کریڈٹ بک ایپ', titleEn: 'Digital Khata Apps', descriptionUrdu: 'موبائل پر ادھار اور ادائیگی کا ایس ایم ایس', descriptionEn: 'Digital ledger and payment reminder SMS' },
      { id: 'sub-acc-cashflow', titleUrdu: 'روزمرہ کیش فلو اور اخراجات', titleEn: 'Daily Cash Flow', descriptionUrdu: 'آمدنی اور خرچ کا روزانہ بیلنس', descriptionEn: 'Separating business cash from personal spending' },
      { id: 'sub-acc-profit', titleUrdu: 'خالص منافع کا حساب', titleEn: 'Net Profit Calculation', descriptionUrdu: 'کرایہ، بل اور مال کی لاگت نکال کر منافع', descriptionEn: 'Accurate margins after all overheads' }
    ]
  },
  {
    id: 'cat-22-sales',
    number: 22,
    titleUrdu: 'Sales (فروخت اور گاہک داری)',
    titleEn: 'Sales & Negotiation',
    slug: 'sales-and-negotiation',
    iconName: 'Tag',
    color: 'orange',
    gradient: 'from-orange-600 via-amber-950 to-slate-900',
    domainGroup: 'business_commerce',
    domainGroupUrdu: 'کاروبار و سیلز',
    domainGroupEn: 'Business & Sales',
    taglineUrdu: 'سچی بات اور شائستگی سے چیز بیچنا، بھاؤ تاؤ کرنا اور گاہک کے اعتراضات دور کرنا',
    taglineEn: 'Master ethical salesmanship, value presentation, negotiation, and closing deals',
    subcategories: [
      { id: 'sub-sale-listen', titleUrdu: 'گاہک کی ضرورت سمجھنا', titleEn: 'Needs Discovery', descriptionUrdu: 'گاہک کی بات سن کر درست چیز دکھانا', descriptionEn: 'Active listening to match real needs' },
      { id: 'sub-sale-objection', titleUrdu: 'اعتراضات کا حل (قیمت زیادہ ہے؟)', titleEn: 'Overcoming Price Resistance', descriptionUrdu: 'معیار اور پائیداری کا احساس دلانا', descriptionEn: 'Demonstrating value and durability respectfully' },
      { id: 'sub-sale-closing', titleUrdu: 'ڈیل مکمل کرنا (Closing)', titleEn: 'Deal Closing', descriptionUrdu: 'بغیر دباؤ ڈالے فیصلہ کروانا', descriptionEn: 'Gentle and conclusive closing methods' }
    ]
  },
  {
    id: 'cat-23-communication',
    number: 23,
    titleUrdu: 'Communication (مواصلات و گفتگو)',
    titleEn: 'Interpersonal Communication',
    slug: 'interpersonal-communication',
    iconName: 'MessageSquare',
    color: 'teal',
    gradient: 'from-teal-700 via-cyan-950 to-slate-900',
    domainGroup: 'education_community',
    domainGroupUrdu: 'تعلیم و سماج',
    domainGroupEn: 'Teaching & Social',
    taglineUrdu: 'واضح، پرتاثیر اور باادب گفتگو کرنا، سننا اور لوگوں کو اپنا ہم خیال بنانا',
    taglineEn: 'Speak clearly with confidence, listen actively, and build trust in personal & work life',
    subcategories: [
      { id: 'sub-comm-active-listening', titleUrdu: 'غور سے سننا (Active Listening)', titleEn: 'Active Listening', descriptionUrdu: 'بات کاٹ کر بولنے کے بجائے پورا سننا', descriptionEn: 'Listening patiently without interruptions' },
      { id: 'sub-comm-clarity', titleUrdu: 'مختصر اور واضح پیغام', titleEn: 'Clear Articulation', descriptionUrdu: 'الجھن کے بغیر دو ٹوک بات کہنا', descriptionEn: 'Expressing ideas directly without confusion' },
      { id: 'sub-comm-body-language', titleUrdu: 'باڈی لینگویج اور لہجہ', titleEn: 'Tone & Body Language', descriptionUrdu: 'مسکراہٹ اور نرم و باوقار انداز', descriptionEn: 'Warm tone, eye contact, respectful posture' }
    ]
  },
  {
    id: 'cat-24-english-language',
    number: 24,
    titleUrdu: 'English & Language Learning',
    titleEn: 'Spoken English for Career',
    slug: 'spoken-english-career',
    iconName: 'BookA',
    color: 'indigo',
    gradient: 'from-indigo-700 via-blue-950 to-slate-900',
    domainGroup: 'education_community',
    domainGroupUrdu: 'تعلیم و سماج',
    domainGroupEn: 'Teaching & Social',
    taglineUrdu: 'روزمرہ بول چال، انٹرنیٹ چیٹ اور کلائنٹس کے ساتھ روانی والی انگلش سیکھنا',
    taglineEn: 'Build confident spoken and written English for international clients and career growth',
    subcategories: [
      { id: 'sub-eng-daily-phrases', titleUrdu: 'روزمرہ بول چال کے ۱۰۰ جملے', titleEn: 'Everyday Spoken Phrases', descriptionUrdu: 'تعارف، حال احوال اور سوال پوچھنا', descriptionEn: 'Greetings, introductions, daily conversation' },
      { id: 'sub-eng-client-chat', titleUrdu: 'کلائنٹ چیٹ اور ای میلز', titleEn: 'Business Chat & Email', descriptionUrdu: 'پیشہ ورانہ اور شائستہ پیغامات', descriptionEn: 'Polite client messaging and progress updates' },
      { id: 'sub-eng-vocab-pronounce', titleUrdu: 'تلفظ اور الفاظ کا ذخیرہ', titleEn: 'Pronunciation & Vocabulary', descriptionUrdu: 'صحیح آواز اور اعتماد سے بولنا', descriptionEn: 'Clear pronunciation and vocabulary building' }
    ]
  },
  {
    id: 'cat-25-sewing-embroidery',
    number: 25,
    titleUrdu: 'Sewing & Embroidery (سلائی و کڑھائی)',
    titleEn: 'Sewing & Tailoring',
    slug: 'sewing-tailoring-embroidery',
    iconName: 'Scissors',
    color: 'pink',
    gradient: 'from-pink-700 via-rose-950 to-slate-900',
    domainGroup: 'crafts_lifestyle',
    domainGroupUrdu: 'دستکاری و گھریلو',
    domainGroupEn: 'Crafts & Home',
    taglineUrdu: 'مردانہ و زنانہ کپڑوں کی کٹنگ، سلائی، جدید کڑھائی اور فینسی ڈریس ڈیزائننگ',
    taglineEn: 'Master fabric cutting, machine stitching, hand embroidery, and custom dressmaking',
    subcategories: [
      { id: 'sub-sew-basic-machine', titleUrdu: 'سلائی مشین کا استعمال و دیکھ بھال', titleEn: 'Machine Basics & Maintenance', descriptionUrdu: 'دھاگہ ڈالنا، چال اور صفائی', descriptionEn: 'Threading, tension adjustment, oiling' },
      { id: 'sub-sew-cutting', titleUrdu: 'کٹنگ اور ناپ لینا', titleEn: 'Pattern Cutting & Sizing', descriptionUrdu: 'درست ناپ اور قمیض/شلوار کی کٹنگ', descriptionEn: 'Accurate body measurement and paper drafts' },
      { id: 'sub-sew-embroidery', titleUrdu: 'ہاتھ کی کڑھائی اور لیس لگانا', titleEn: 'Hand Embroidery & Trims', descriptionUrdu: 'موتی، ستارے اور خوبصورت ٹانکے', descriptionEn: 'Traditional needlework and lace application' },
      { id: 'sub-sew-boutique', titleUrdu: 'گھریلو بوتیک اور آرڈرز', titleEn: 'Home Boutique Business', descriptionUrdu: 'کسٹمر سے آرڈر لے کر سلائی فراہم کرنا', descriptionEn: 'Managing neighborhood stitching orders' }
    ]
  },
  {
    id: 'cat-26-handicrafts',
    number: 26,
    titleUrdu: 'Handicrafts (روایتی دستکاری)',
    titleEn: 'Traditional Handicrafts',
    slug: 'traditional-handicrafts',
    iconName: 'Sparkle',
    color: 'amber',
    gradient: 'from-amber-600 via-orange-950 to-slate-900',
    domainGroup: 'crafts_lifestyle',
    domainGroupUrdu: 'دستکاری و گھریلو',
    domainGroupEn: 'Crafts & Home',
    taglineUrdu: 'مٹی کے برتن، کھلونے، کروشیا، چمڑے کی اشیاء اور سجاوٹی دستکاری تیار کرنا',
    taglineEn: 'Create handmade artisanal items, crochet, clay crafts, and decorative home goods',
    subcategories: [
      { id: 'sub-craft-crochet', titleUrdu: 'کروشیا اور اون کے کپڑے/کھلونے', titleEn: 'Crochet & Wool Crafts', descriptionUrdu: 'بچوں کے کپڑے، ٹوپی اور سجاوٹ', descriptionEn: 'Baby wear, amigurumi toys, table runners' },
      { id: 'sub-craft-resin-candle', titleUrdu: 'موم بتیاں اور ریزن آرٹ', titleEn: 'Scented Candles & Resin', descriptionUrdu: 'خوشبودار کینڈلز اور کی چینز', descriptionEn: 'Aroma candles and custom resin jewelry' },
      { id: 'sub-craft-packaging', titleUrdu: 'گفٹ پیکیجنگ اور ہینڈ میڈ لیبلز', titleEn: 'Artisanal Gift Packaging', descriptionUrdu: 'خوبصورت ڈبے اور ہاتھ کے بنے تحائف', descriptionEn: 'Eco-friendly boxes and tags' }
    ]
  },
  {
    id: 'cat-27-cooking-food-business',
    number: 27,
    titleUrdu: 'Cooking & Food Business (فوڈ بزنس)',
    titleEn: 'Cooking & Food Entrepreneurship',
    slug: 'cooking-and-food-business',
    iconName: 'UtensilsCrossed',
    color: 'orange',
    gradient: 'from-orange-600 via-red-950 to-slate-900',
    domainGroup: 'crafts_lifestyle',
    domainGroupUrdu: 'دستکاری و گھریلو',
    domainGroupEn: 'Crafts & Home',
    taglineUrdu: 'صاف ستھرا گھریلو کھانا، بیکنگ، لنچ بکس، اچار/مصالحے بنا کر باوقار آمدنی حاصل کرنا',
    taglineEn: 'Prepare hygienic home meals, baking, lunch boxes, and specialty snacks for sale',
    subcategories: [
      { id: 'sub-food-lunchbox', titleUrdu: 'آفس لنچ بکس اور ہوم ڈلیوری', titleEn: 'Office Lunchbox Delivery', descriptionUrdu: 'دفاتر اور ہاسٹلز کو روزانہ کھانا پہنچانا', descriptionEn: 'Daily healthy tiffin service for workplaces' },
      { id: 'sub-food-baking', titleUrdu: 'کیک، بسکٹ اور بیکری آئٹمز', titleEn: 'Home Baking & Cakes', descriptionUrdu: 'سالگرہ کے کیک اور تازہ کوکیز', descriptionEn: 'Custom birthday cakes and party desserts' },
      { id: 'sub-food-preserves', titleUrdu: 'دیسی اچار، چٹنیاں اور مصالحے', titleEn: 'Pickles, Sauces & Spices', descriptionUrdu: 'پیک کر کے دکانوں اور آن لائن بیچنا', descriptionEn: 'Preserved organic pickles and spice blends' }
    ]
  },
  {
    id: 'cat-28-beauty-personal-care',
    number: 28,
    titleUrdu: 'Beauty & Personal Care (بیوٹی پارلر)',
    titleEn: 'Beauty & Personal Care',
    slug: 'beauty-and-personal-care',
    iconName: 'Smile',
    color: 'rose',
    gradient: 'from-rose-600 via-pink-950 to-slate-900',
    domainGroup: 'crafts_lifestyle',
    domainGroupUrdu: 'دستکاری و گھریلو',
    domainGroupEn: 'Crafts & Home',
    taglineUrdu: 'مہندی، میک اپ، ہیئر کٹنگ، فیشل اور گھر پر ذاتی گرومنگ سروسز فراہم کرنا',
    taglineEn: 'Offer bridal mehndi, hair styling, skin treatments, and mobile salon services',
    subcategories: [
      { id: 'sub-beauty-mehndi', titleUrdu: 'مہندی ڈیزائننگ (برائیڈل و پارٹی)', titleEn: 'Mehndi & Henna Art', descriptionUrdu: 'خوبصورت عربی اور روایتی پیٹرنز', descriptionEn: 'Bridal and festive henna patterns' },
      { id: 'sub-beauty-hair-skin', titleUrdu: 'سکن کیئر اور بیسک فیشل', titleEn: 'Skin Care & Facials', descriptionUrdu: 'جلد کی صفائی اور مساج کے اصول', descriptionEn: 'Hygienic facials and skin cleansing' },
      { id: 'sub-beauty-grooming', titleUrdu: 'مردانہ گرومنگ و ہیئر کٹنگ', titleEn: 'Barbering & Hairdressing', descriptionUrdu: 'جدید ہیئر اسٹائل اور شیو ٹولز', descriptionEn: 'Clean fades, beard trimming, sanitation' }
    ]
  },
  {
    id: 'cat-29-agriculture',
    number: 29,
    titleUrdu: 'Agriculture (زراعت و فصلیں)',
    titleEn: 'Agriculture & Crop Farming',
    slug: 'agriculture-and-crops',
    iconName: 'Sprout',
    color: 'emerald',
    gradient: 'from-emerald-700 via-green-950 to-slate-900',
    domainGroup: 'agriculture_rural',
    domainGroupUrdu: 'زراعت و لائیو اسٹاک',
    domainGroupEn: 'Agri & Livestock',
    taglineUrdu: 'زمین کی تیاری، بیج کا انتخاب، کھاد، اسپرے اور زیادہ پیداوار دینے والی فصلیں اگانا',
    taglineEn: 'Master soil preparation, seed selection, balanced fertilizer, and high-yield harvest',
    subcategories: [
      { id: 'sub-agri-soil', titleUrdu: 'زمین کی زرخیزی اور تیاری', titleEn: 'Soil Health & Prep', descriptionUrdu: 'گوبر کھاد، پی ایچ لیول اور ہل چلانا', descriptionEn: 'Organic composting and seedbed tillage' },
      { id: 'sub-agri-crops', titleUrdu: 'بنیادی فصلیں (گندم، چاول، کپاس، مکئی)', titleEn: 'Cash Crop Management', descriptionUrdu: 'پانی اور کھاد کا صحیح وقت', descriptionEn: 'Optimal irrigation and nutrient scheduling' },
      { id: 'sub-agri-pest', titleUrdu: 'کیڑوں کا قدرتی و کیمیائی تدارک', titleEn: 'Pest & Disease Control', descriptionUrdu: 'فصل کو بیماریوں سے بچانا', descriptionEn: 'Integrated pest management and sprays' }
    ]
  },
  {
    id: 'cat-30-modern-farming',
    number: 30,
    titleUrdu: 'Modern Farming (جدید کاشتکاری)',
    titleEn: 'Modern Precision Farming',
    slug: 'modern-precision-farming',
    iconName: 'SunMedium',
    color: 'teal',
    gradient: 'from-teal-700 via-emerald-950 to-slate-900',
    domainGroup: 'agriculture_rural',
    domainGroupUrdu: 'زراعت و لائیو اسٹاک',
    domainGroupEn: 'Agri & Livestock',
    taglineUrdu: 'ڈرپ ایریگیشن، ٹنل فارمنگ، ہائیڈروپونکس اور کم پانی میں سال بھر سبزیوں کی کاشت',
    taglineEn: 'Deploy drip irrigation, tunnel greenhouses, and hydroponics for year-round yields',
    subcategories: [
      { id: 'sub-mf-tunnel', titleUrdu: 'ٹنل فارمنگ (بے موسمی سبزیاں)', titleEn: 'Tunnel Greenhouse', descriptionUrdu: 'کھیرے، ٹماٹر اور شملہ مرچ زیادہ منافع پر', descriptionEn: 'Off-season high-margin vegetable cultivation' },
      { id: 'sub-mf-drip', titleUrdu: 'ڈرپ و فوارہ ایریگیشن', titleEn: 'Drip Irrigation Systems', descriptionUrdu: 'پانی کی ۸۰ فیصد بچت اور جڑوں تک کھاد', descriptionEn: '80% water savings and direct fertigation' },
      { id: 'sub-mf-organic', titleUrdu: 'آرگینک فارمنگ اور زہر سے پاک خوراک', titleEn: 'Certified Organic Farming', descriptionUrdu: 'شہروں میں مہنگے داموں بکنے والی فصلیں', descriptionEn: 'Pesticide-free food commanding premium urban rates' }
    ]
  },
  {
    id: 'cat-31-livestock',
    number: 31,
    titleUrdu: 'Livestock (مال مویشی پالنا)',
    titleEn: 'Livestock Management',
    slug: 'livestock-management',
    iconName: 'Shield',
    color: 'amber',
    gradient: 'from-amber-800 via-orange-950 to-slate-900',
    domainGroup: 'agriculture_rural',
    domainGroupUrdu: 'زراعت و لائیو اسٹاک',
    domainGroupEn: 'Agri & Livestock',
    taglineUrdu: 'گائے، بھینس، بکریاں اور بھیڑیں پالنا، ونڈا، ویکسینیشن اور عید قربان کے جانور تیار کرنا',
    taglineEn: 'Breed and raise healthy cattle, goats, and sheep for meat and Eid sacrifice sales',
    subcategories: [
      { id: 'sub-live-goat', titleUrdu: 'بکری فارمنگ (گوشت و افزائش)', titleEn: 'Goat & Sheep Farming', descriptionUrdu: 'ٹیڈی، بیتل اور بربری بکریاں', descriptionEn: 'High-reproduction meat goat breeds' },
      { id: 'sub-live-feed', titleUrdu: 'متوازن ونڈا اور سائیلج بنانا', titleEn: 'Silage & Animal Feed', descriptionUrdu: 'کم خرچ میں جانور کا وزن تیزی سے بڑھانا', descriptionEn: 'Cost-effective high-protein feed formulas' },
      { id: 'sub-live-health', titleUrdu: 'ویکسینیشن اور بیماریوں کا علاج', titleEn: 'Vaccination & Animal Health', descriptionUrdu: 'جانور کو منہ کھر اور گل گھوٹو سے بچانا', descriptionEn: 'Preventative shots and early symptom treatment' }
    ]
  },
  {
    id: 'cat-32-poultry',
    number: 32,
    titleUrdu: 'Poultry (مرغبانی و پولٹری)',
    titleEn: 'Poultry Farming',
    slug: 'poultry-farming',
    iconName: 'Egg',
    color: 'yellow',
    gradient: 'from-yellow-700 via-amber-950 to-slate-900',
    domainGroup: 'agriculture_rural',
    domainGroupUrdu: 'زراعت و لائیو اسٹاک',
    domainGroupEn: 'Agri & Livestock',
    taglineUrdu: 'دیسی مرغیاں، لیئر (انڈے) اور برائلر فارمنگ، انکیوبیٹر کا استعمال اور فیڈ مینجمنٹ',
    taglineEn: 'Raise desi country chickens, layer hens for eggs, and broilers for healthy poultry income',
    subcategories: [
      { id: 'sub-poul-desi', titleUrdu: 'دیسی و اسیل مرغبانی (گھریلو)', titleEn: 'Desi Country Chicken', descriptionUrdu: 'گھر کی چھت یا صحن میں انڈے و گوشت', descriptionEn: 'Backyard organic poultry for daily eggs' },
      { id: 'sub-poul-incubator', titleUrdu: 'انکیوبیٹر سے چوزے نکالنا', titleEn: 'Incubator & Hatchery', descriptionUrdu: 'درجہ حرارت اور نمی کی مکمل سیٹنگ', descriptionEn: 'Automated temperature/humidity egg hatching' },
      { id: 'sub-poul-disease', titleUrdu: 'رانی کھیت اور بخار سے بچاؤ', titleEn: 'Poultry Disease Control', descriptionUrdu: 'پانی میں قطرے اور صفائی ستھرائی', descriptionEn: 'ND/IB vaccination schedule and biosecurity' }
    ]
  },
  {
    id: 'cat-33-dairy',
    number: 33,
    titleUrdu: 'Dairy (ڈیری فارمنگ و دودھ)',
    titleEn: 'Dairy Farming & Processing',
    slug: 'dairy-farming-milk',
    iconName: 'Milk',
    color: 'blue',
    gradient: 'from-blue-700 via-teal-950 to-slate-900',
    domainGroup: 'agriculture_rural',
    domainGroupUrdu: 'زراعت و لائیو اسٹاک',
    domainGroupEn: 'Agri & Livestock',
    taglineUrdu: 'زیادہ دودھ دینے والے جانور، صاف دودھ کی پیداوار، دہی، پنیر، مکھن اور دیسی گھی کی تیاری',
    taglineEn: 'Manage high-yield dairy cows/buffaloes, hygienic milking, butter, cheese, and desi ghee',
    subcategories: [
      { id: 'sub-dairy-breeds', titleUrdu: 'فریزن، ساہیوال اور نیلی راوی گائے/بھینس', titleEn: 'High-Yield Dairy Breeds', descriptionUrdu: 'دودھ کی زیادہ پیداوار اور دیکھ بھال', descriptionEn: 'Managing high-producing milking stock' },
      { id: 'sub-dairy-hygiene', titleUrdu: 'صاف ستھری مل کنگ اور اسٹوریج', titleEn: 'Hygienic Milking & Chillers', descriptionUrdu: 'بغیر ملاوٹ خالص دودھ کا معیار برقرار رکھنا', descriptionEn: 'Cold-chain milk preservation' },
      { id: 'sub-dairy-products', titleUrdu: 'دیسی گھی، مکھن اور کھویا بنانا', titleEn: 'Ghee & Dairy Value-Add', descriptionUrdu: 'دودھ کو مصنوعات میں بدل کر دوگنا منافع', descriptionEn: 'Value-added butter, ghee, and curd packaging' }
    ]
  },
  {
    id: 'cat-34-gardening',
    number: 34,
    titleUrdu: 'Gardening (باغبانی و کچن گارڈننگ)',
    titleEn: 'Gardening & Kitchen Garden',
    slug: 'gardening-and-kitchen-garden',
    iconName: 'Flower2',
    color: 'emerald',
    gradient: 'from-emerald-600 via-green-950 to-slate-900',
    domainGroup: 'agriculture_rural',
    domainGroupUrdu: 'زراعت و لائیو اسٹاک',
    domainGroupEn: 'Agri & Livestock',
    taglineUrdu: 'گھر کی چھت، گملوں یا چھوٹے پلاٹ میں تازہ دھنیا، پودینہ، ٹماٹر، لیموں اور پھول اگانا',
    taglineEn: 'Grow fresh mint, coriander, tomatoes, citrus, and flowers in pots or rooftop patches',
    subcategories: [
      { id: 'sub-gard-pots', titleUrdu: 'گملوں اور چھت پر کچن گارڈننگ', titleEn: 'Rooftop Container Gardening', descriptionUrdu: 'مٹی اور کھاد کا مکسچر تیار کرنا', descriptionEn: 'Potting soil mix, drainage, pot selection' },
      { id: 'sub-gard-herbs', titleUrdu: 'روزمرہ جڑی بوٹیاں و کچن سبزیاں', titleEn: 'Daily Kitchen Greens', descriptionUrdu: 'دھنیا، ہری مرچ، پودینہ اور پالک', descriptionEn: 'Fast-growing kitchen culinary herbs' },
      { id: 'sub-gard-trees', titleUrdu: 'پھل دار پودوں کی قلم کاری (Grafting)', titleEn: 'Plant Grafting & Pruning', descriptionUrdu: 'آم، لیموں اور امرود کی پیوند کاری', descriptionEn: 'Fruit tree branch grafting and seasonal pruning' }
    ]
  },
  {
    id: 'cat-35-solar-energy',
    number: 35,
    titleUrdu: 'Solar & Energy (سولر انرجی)',
    titleEn: 'Solar Energy Systems',
    slug: 'solar-energy-systems',
    iconName: 'Sun',
    color: 'amber',
    gradient: 'from-amber-600 via-yellow-950 to-slate-900',
    domainGroup: 'future_green',
    domainGroupUrdu: 'مستقبل و گرین انرجی',
    domainGroupEn: 'Future & Green',
    taglineUrdu: 'سولر پینلز، انورٹرز، لیتھیم بیٹریاں لگانا، ٹیوب ویل چلانا اور سولر فالٹس ٹھیک کرنا',
    taglineEn: 'Install, maintain, and troubleshoot solar panels, inverters, batteries, and solar tube wells',
    subcategories: [
      { id: 'sub-sol-install', titleUrdu: 'سولر پینل انسٹالیشن و اینگل', titleEn: 'Panel Mounting & Angles', descriptionUrdu: 'جنوب کی سمت اور درست تاروں کے کنکشن', descriptionEn: 'South-facing pitch angles and MC4 crimping' },
      { id: 'sub-sol-inverter', titleUrdu: 'انورٹر سیٹنگز (آن گرڈ / ہائبرڈ)', titleEn: 'Inverter Setup & Programming', descriptionUrdu: 'نیٹ میٹرنگ اور لوڈ مینجمنٹ', descriptionEn: 'Hybrid inverter charging and load balancing' },
      { id: 'sub-sol-tubewell', titleUrdu: 'سولر ٹیوب ویل و VFD ڈرائیو', titleEn: 'Solar Tube Well & VFD', descriptionUrdu: 'کسانوں کے لیے ڈیزل کے بغیر پانی نکالنا', descriptionEn: 'VFD pump motor drive wiring and tuning' }
    ]
  },
  {
    id: 'cat-36-electrical',
    number: 36,
    titleUrdu: 'Electrical (الیکٹریکل و وائرنگ)',
    titleEn: 'Electrical & House Wiring',
    slug: 'electrical-house-wiring',
    iconName: 'Zap',
    color: 'yellow',
    gradient: 'from-yellow-700 via-amber-950 to-slate-900',
    domainGroup: 'trades_technical',
    domainGroupUrdu: 'فنی کاریگری و مرمت',
    domainGroupEn: 'Trades & Repair',
    taglineUrdu: 'گھریلو و کمرشل وائرنگ، سرکٹ بریکرز، پنکھے، موٹریں اور الیکٹریکل خرابیوں کی درستگی',
    taglineEn: 'Handle residential wiring, circuit breakers, fan capacitors, water motors, and safety audits',
    subcategories: [
      { id: 'sub-elec-safety', titleUrdu: 'الیکٹریکل سیفٹی اور ارتھنگ', titleEn: 'Electrical Safety & Earthing', descriptionUrdu: 'کرنٹ سے بچاؤ اور بریکر لگانا', descriptionEn: 'Breaker ratings, grounding, safety tools' },
      { id: 'sub-elec-wiring', titleUrdu: 'سنگل و تھری فیز وائرنگ', titleEn: 'Single & Three-Phase Wiring', descriptionUrdu: 'سوئچ بورڈ، ڈی بی باکس اور کنکشنز', descriptionEn: 'Distribution board (DB) layout and cabling' },
      { id: 'sub-elec-motor', titleUrdu: 'پنکھے، استری اور پانی کی موٹر کی مرمت', titleEn: 'Home Appliance Repair', descriptionUrdu: 'کپیسیٹر بدلنا، بیئرنگ اور شارٹ چیکنگ', descriptionEn: 'Capacitor replacement and continuity testing' }
    ]
  },
  {
    id: 'cat-37-plumbing',
    number: 37,
    titleUrdu: 'Plumbing (پلمبنگ و سینیٹری)',
    titleEn: 'Plumbing & Sanitary Tech',
    slug: 'plumbing-and-sanitary',
    iconName: 'Droplets',
    color: 'blue',
    gradient: 'from-blue-700 via-cyan-950 to-slate-900',
    domainGroup: 'trades_technical',
    domainGroupUrdu: 'فنی کاریگری و مرمت',
    domainGroupEn: 'Trades & Repair',
    taglineUrdu: 'PPRC پائپ فٹنگ، گیزر، سینیٹری کا سامان لگانا، لیکج روکنا اور پانی کا پریشر درست کرنا',
    taglineEn: 'Master PPRC pipe welding, water geysers, sanitary fixtures, leak sealing, and pressure pumps',
    subcategories: [
      { id: 'sub-plumb-pprc', titleUrdu: 'PPRC اور UPVC پائپ جوڑنا', titleEn: 'PPRC Pipe Welding', descriptionUrdu: 'ہیٹر مشین سے پائپ جوڑنے کا طریقہ', descriptionEn: 'Thermal pipe fusion and elbow/tee joints' },
      { id: 'sub-plumb-sanitary', titleUrdu: 'کمبوڈ، واش بیسن اور شاور فٹنگ', titleEn: 'Bathroom Fixture Mounting', descriptionUrdu: 'مکسر، نلکے اور سینیٹری سیٹ کرنا', descriptionEn: 'Commode, vanity mixer, and waste line traps' },
      { id: 'sub-plumb-geyser', titleUrdu: 'گیس و الیکٹرک گیزر انسٹالیشن', titleEn: 'Geyser & Valve Installation', descriptionUrdu: 'سیفٹی والو اور گرم ٹھنڈے پانی کے کنکشن', descriptionEn: 'Safety non-return valves and gas burner lines' }
    ]
  },
  {
    id: 'cat-38-construction',
    number: 38,
    titleUrdu: 'Construction (تعمیرات و چنائی)',
    titleEn: 'Construction & Masonry',
    slug: 'construction-and-masonry',
    iconName: 'Building',
    color: 'stone',
    gradient: 'from-stone-700 via-zinc-950 to-slate-900',
    domainGroup: 'trades_technical',
    domainGroupUrdu: 'فنی کاریگری و مرمت',
    domainGroupEn: 'Trades & Repair',
    taglineUrdu: 'اینٹوں کی چنائی، سیمنٹ مصالحہ، پلاسٹر، ٹائل ماربل لگانا اور بنیادی بلڈنگ کا کام',
    taglineEn: 'Master bricklaying, plastering, cement ratios, tile/marble installation, and leveling',
    subcategories: [
      { id: 'sub-const-masonry', titleUrdu: 'اینٹوں کی چنائی اور ساول (Plumb)', titleEn: 'Bricklaying & Plumb Line', descriptionUrdu: 'سیدھی اور مضبوط دیوار بنانا', descriptionEn: 'Level alignment and cement mortar mixing' },
      { id: 'sub-const-tiles', titleUrdu: 'فرش اور دیواروں کی ٹائل ماربل فٹنگ', titleEn: 'Tile & Marble Laying', descriptionUrdu: 'گراؤٹنگ اور واٹر پروفنگ', descriptionEn: 'Tile adhesive, spacers, and grouting finish' },
      { id: 'sub-const-paint', titleUrdu: 'وال پٹی اور پینٹ کا کام', titleEn: 'Wall Putty & Painting', descriptionUrdu: 'ہموار دیواریں اور پرائمر لگانا', descriptionEn: 'Surface scraping, putty smoothing, roller coat' }
    ]
  },
  {
    id: 'cat-39-welding',
    number: 39,
    titleUrdu: 'Welding (ویلڈنگ و فیبریکیشن)',
    titleEn: 'Welding & Metal Fabrication',
    slug: 'welding-and-fabrication',
    iconName: 'Flame',
    color: 'orange',
    gradient: 'from-orange-700 via-red-950 to-slate-900',
    domainGroup: 'trades_technical',
    domainGroupUrdu: 'فنی کاریگری و مرمت',
    domainGroupEn: 'Trades & Repair',
    taglineUrdu: 'آرک ویلڈنگ، لوہے کے دروازے، کھڑکیاں، گرلز، شیڈز اور زرعی آلات کی فیبریکیشن',
    taglineEn: 'Master electric arc welding, iron gates, safety grills, roof sheds, and metal structures',
    subcategories: [
      { id: 'sub-weld-arc', titleUrdu: 'آرک ویلڈنگ اور راڈ چلانا', titleEn: 'Arc Welding Techniques', descriptionUrdu: 'مضبوط ٹانکا اور سلیگ صاف کرنا', descriptionEn: 'Current selection, bead formation, safety mask' },
      { id: 'sub-weld-grills', titleUrdu: 'دروازے، کھڑکیاں اور فریم بنانا', titleEn: 'Gate & Window Fabrication', descriptionUrdu: 'درست کٹنگ، گنیا اور جوڑ ملانا', descriptionEn: 'Right-angle squaring and hinge installation' },
      { id: 'sub-weld-grinder', titleUrdu: 'گرائنڈر اور کٹنگ ٹولز کا استعمال', titleEn: 'Angle Grinder & Metal Cutting', descriptionUrdu: 'لوہا کاٹنا اور چمکدار فنشنگ دینا', descriptionEn: 'Safe cutting wheel handling and weld buffing' }
    ]
  },
  {
    id: 'cat-40-carpentry',
    number: 40,
    titleUrdu: 'Carpentry (کارپینٹری و لکڑی)',
    titleEn: 'Carpentry & Woodworking',
    slug: 'carpentry-woodworking',
    iconName: 'Axe',
    color: 'amber',
    gradient: 'from-amber-800 via-yellow-950 to-slate-900',
    domainGroup: 'trades_technical',
    domainGroupUrdu: 'فنی کاریگری و مرمت',
    domainGroupEn: 'Trades & Repair',
    taglineUrdu: 'دروازے، کھڑکیاں، الماریاں، فرنیچر بنانا، پالش اور لکڑی کی مرمت کا ہنر',
    taglineEn: 'Build custom wooden doors, wardrobes, kitchen cabinets, repair furniture, and polish',
    subcategories: [
      { id: 'sub-carp-tools', titleUrdu: 'رندا، آری اور لکڑی کے بنیادی اوزار', titleEn: 'Woodworking Hand Tools', descriptionUrdu: 'لکڑی چھلائی اور گنیا چیک کرنا', descriptionEn: 'Hand planer, chisel, handsaw, and marking gauge' },
      { id: 'sub-carp-cabinet', titleUrdu: 'کچن کیبنٹ اور الماری (شیٹ کا کام)', titleEn: 'Cabinetry & MDF Sheets', descriptionUrdu: 'لَیامینیشن شیٹ، قبضے اور چینل لگانا', descriptionEn: 'MDF board cutting, soft-close hinges, drawer slides' },
      { id: 'sub-carp-polish', titleUrdu: 'فرنیچر پالش اور وارنش', titleEn: 'Wood Polishing & Varnish', descriptionUrdu: 'سفیلر، سینڈنگ اور قدرتی چمک', descriptionEn: 'Wood sanding, lacquer, and natural grain polish' }
    ]
  },
  {
    id: 'cat-41-automobile-motorcycle',
    number: 41,
    titleUrdu: 'Automobile & Motorcycle (میکینک)',
    titleEn: 'Automobile & Motorcycle Tech',
    slug: 'auto-motorcycle-repair',
    iconName: 'Car',
    color: 'red',
    gradient: 'from-red-700 via-zinc-950 to-slate-900',
    domainGroup: 'trades_technical',
    domainGroupUrdu: 'فنی کاریگری و مرمت',
    domainGroupEn: 'Trades & Repair',
    taglineUrdu: 'موٹر سائیکل ٹیوننگ، کار انجن سروس، بریک، کاربوریٹر/EFI فالٹس اور آئل چینج',
    taglineEn: 'Master motorcycle tuning, car EFI diagnostics, oil service, brake pads, and engine repair',
    subcategories: [
      { id: 'sub-auto-bike-tuning', titleUrdu: 'موٹر سائیکل ٹیوننگ اور آئل چینج', titleEn: 'Motorcycle Tuning & Oil', descriptionUrdu: 'پلگ، ٹیپٹ، کاربوریٹر اور چین سیٹنگ', descriptionEn: 'Spark plug gap, tappet tuning, chain tension' },
      { id: 'sub-auto-car-efi', titleUrdu: 'کار EFI اور سنسرز چیک کرنا', titleEn: 'Car EFI & Diagnostics', descriptionUrdu: 'سکینر سے فالٹ کوڈز پڑھنا اور حل', descriptionEn: 'OBD2 scanner diagnostics and sensor cleanup' },
      { id: 'sub-auto-brakes', titleUrdu: 'بریک پیڈز اور سسپنشن کا کام', titleEn: 'Brakes & Suspension', descriptionUrdu: 'ڈسک بریک، شو اور جمپ مرمت', descriptionEn: 'Brake fluid bleeding, pad replacement, shock absorbers' }
    ]
  },
  {
    id: 'cat-42-repair-maintenance',
    number: 42,
    titleUrdu: 'Repair & Maintenance (گھریلو مرمت)',
    titleEn: 'General Repair & Maintenance',
    slug: 'general-repair-maintenance',
    iconName: 'Wrench',
    color: 'slate',
    gradient: 'from-slate-700 via-blue-950 to-slate-900',
    domainGroup: 'trades_technical',
    domainGroupUrdu: 'فنی کاریگری و مرمت',
    domainGroupEn: 'Trades & Repair',
    taglineUrdu: 'گھر کے تالے، نلکے، سوئچ، دروازے، چھوٹے آلات اور فوری ہینڈی مین سروسز',
    taglineEn: 'Fix household locks, taps, squeaky doors, appliances, and offer on-demand handyman services',
    subcategories: [
      { id: 'sub-rep-handyman', titleUrdu: 'آل راؤنڈ ہینڈی مین ٹولز کٹ', titleEn: 'Handyman Essentials', descriptionUrdu: 'ڈرِل مشین، اسکرو ڈرائیور اور ٹیسٹر', descriptionEn: 'Drill anchors, screw fasteners, multimeter' },
      { id: 'sub-rep-locks', titleUrdu: 'دروازوں کے تالے اور ہینڈل بدلنا', titleEn: 'Lock & Hardware Replacement', descriptionUrdu: 'سیفٹی لاک، کنڈی اور اسٹاپرز', descriptionEn: 'Mortise lock installation and alignment' },
      { id: 'sub-rep-appliances', titleUrdu: 'واشنگ مشین اور جوسر بلینڈر کی مرمت', titleEn: 'Small Motor Appliance Fixes', descriptionUrdu: 'بیلٹ، کاربن برش اور بٹن کی خرابی', descriptionEn: 'Drive belt, motor carbon brushes, switch contacts' }
    ]
  },
  {
    id: 'cat-43-tourism-hospitality',
    number: 43,
    titleUrdu: 'Tourism & Hospitality (سیاحت)',
    titleEn: 'Tourism & Local Hospitality',
    slug: 'tourism-and-hospitality',
    iconName: 'Compass',
    color: 'teal',
    gradient: 'from-teal-700 via-emerald-950 to-slate-900',
    domainGroup: 'education_community',
    domainGroupUrdu: 'تعلیم و سماج',
    domainGroupEn: 'Teaching & Social',
    taglineUrdu: 'مقامی ٹور گائیڈ، ہوٹل مینجمنٹ، ہوم اسٹے کرایہ داری اور سیاحوں کی مہمان نوازی',
    taglineEn: 'Become a certified local tour guide, manage homestays, and provide tourist hospitality',
    subcategories: [
      { id: 'sub-tour-guide', titleUrdu: 'مقامی ٹور گائیڈ اور تاریخی معلومات', titleEn: 'Local Tour Guiding', descriptionUrdu: 'سیاحوں کو تاریخی اور قدرتی مقامات کی سیر', descriptionEn: 'Storytelling, route planning, safety management' },
      { id: 'sub-tour-homestay', titleUrdu: 'ہوم اسٹے اور گیسٹ ہاؤس سیٹ اپ', titleEn: 'Homestay & Guest Rooms', descriptionUrdu: 'صاف بستر، ناشتہ اور مہمان نوازی', descriptionEn: 'Clean bedding, traditional breakfast, guest review management' },
      { id: 'sub-tour-transport', titleUrdu: 'سیاحتی گاڑی اور ٹور پیکیجز', titleEn: 'Tour Packages & Rentals', descriptionUrdu: 'خاندانوں کے لیے ۳ سے ۵ دن کے ٹرپ پیکیجز', descriptionEn: '3-day family itinerary pricing and coordination' }
    ]
  },
  {
    id: 'cat-44-teaching-education',
    number: 44,
    titleUrdu: 'Teaching & Education (تعلیم و تدریس)',
    titleEn: 'Teaching & Pedagogy',
    slug: 'teaching-and-pedagogy',
    iconName: 'GraduationCap',
    color: 'emerald',
    gradient: 'from-emerald-700 via-teal-950 to-slate-900',
    domainGroup: 'education_community',
    domainGroupUrdu: 'تعلیم و سماج',
    domainGroupEn: 'Teaching & Social',
    taglineUrdu: 'شاندار تدریسی طریقہ کار، بچوں کی نفسیات، سبق کی منصوبہ بندی اور اخلاقی تربیت',
    taglineEn: 'Master child pedagogy, interactive lesson planning, student empathy, and moral guidance',
    subcategories: [
      { id: 'sub-edu-lesson-plan', titleUrdu: 'سبق کا موثر خاکہ (Lesson Planning)', titleEn: 'Engaging Lesson Planning', descriptionUrdu: 'سبق کا مقصد، سرگرمی اور خلاصہ', descriptionEn: 'Clear learning objectives, games, and wrap-ups' },
      { id: 'sub-edu-classroom-mgmt', titleUrdu: 'کلاس روم کنٹرول اور محبت بھرا ماحول', titleEn: 'Positive Classroom Culture', descriptionUrdu: 'بغیر مارے پیٹے بچوں کا دھیان حاصل کرنا', descriptionEn: 'Dignified engagement without corporal punishment' },
      { id: 'sub-edu-moral-training', titleUrdu: 'کردار سازی اور عملی تربیت', titleEn: 'Character & Tarbiyah', descriptionUrdu: 'سچائی، صفائی اور باہمی احترام سکھانا', descriptionEn: 'Instilling truthfulness, hygiene, and mutual respect' }
    ]
  },
  {
    id: 'cat-45-community-services',
    number: 45,
    titleUrdu: 'Community Services (سماجی خدمات)',
    titleEn: 'Community & Social Service',
    slug: 'community-social-services',
    iconName: 'HeartHandshake',
    color: 'rose',
    gradient: 'from-rose-700 via-pink-950 to-slate-900',
    domainGroup: 'education_community',
    domainGroupUrdu: 'تعلیم و سماج',
    domainGroupEn: 'Teaching & Social',
    taglineUrdu: 'محلے کی صفائی، فلاحی کام، فرسٹ ایڈ، مصالحت اور عوامی مسائل کے لیے فنڈ ریزنگ',
    taglineEn: 'Lead local cleanliness drives, first aid response, dispute mediation, and neighborhood aid',
    subcategories: [
      { id: 'sub-soc-first-aid', titleUrdu: 'ابتدائی طبی امداد (First Aid & CPR)', titleEn: 'Emergency First Aid & CPR', descriptionUrdu: 'زخم، جلنے اور بے ہوشی میں فوری مدد', descriptionEn: 'Bandaging, burn care, and emergency resuscitation' },
      { id: 'sub-soc-cleanliness', titleUrdu: 'محلہ صفائی اور شجرکاری مہم', titleEn: 'Sanitation & Tree Planting', descriptionUrdu: 'کوڑا دان لگانا اور پودے لگانا', descriptionEn: 'Waste bin placement and green neighborhood drives' },
      { id: 'sub-soc-dispute', titleUrdu: 'باہمی تنازعات کا اخلاقی حل (صلح)', titleEn: 'Community Mediation (Sulh)', descriptionUrdu: 'ہمسایوں کے جھگڑے پیار سے ختم کروانا', descriptionEn: 'Fair listening and amicable conflict resolution' }
    ]
  },
  {
    id: 'cat-46-professional-careers',
    number: 46,
    titleUrdu: 'Professional Careers (پیشہ ورانہ ترقی)',
    titleEn: 'Professional Career Navigation',
    slug: 'professional-careers',
    iconName: 'Briefcase',
    color: 'blue',
    gradient: 'from-blue-700 via-indigo-950 to-slate-900',
    domainGroup: 'education_community',
    domainGroupUrdu: 'تعلیم و سماج',
    domainGroupEn: 'Teaching & Social',
    taglineUrdu: 'ریزیومے (CV) بنانا، انٹرویو کی تیاری، دفتری آداب اور نوکری میں تیزی سے ترقی کے گر',
    taglineEn: 'Craft ATS-friendly CVs, excel in interviews, master corporate etiquette, and earn promotions',
    subcategories: [
      { id: 'sub-car-resume', titleUrdu: 'پیشہ ورانہ ریزیومے اور کور لیٹر', titleEn: 'Professional CV & Cover Letter', descriptionUrdu: 'اپنی کامیابیوں کو واضح انداز میں لکھنا', descriptionEn: 'Highlighting skills and measurable achievements' },
      { id: 'sub-car-interview', titleUrdu: 'انٹرویو کے سوالات اور اعتماد', titleEn: 'Interview Preparation', descriptionUrdu: 'تعارف، تنخواہ کی بات چیت اور پرسکون انداز', descriptionEn: 'Confidence, salary negotiation, answering behavioral questions' },
      { id: 'sub-car-workplace-ethics', titleUrdu: 'دفتری دیانت اور ٹیم ورک', titleEn: 'Workplace Ethics & Teamwork', descriptionUrdu: 'وقت کی پابندی اور باس و ساتھیوں سے تعاون', descriptionEn: 'Punctuality, reliability, and collaborative spirit' }
    ]
  },
  {
    id: 'cat-47-future-skills',
    number: 47,
    titleUrdu: 'Future Skills (مستقبل کے ہنر)',
    titleEn: 'Future & Exponential Skills',
    slug: 'future-skills',
    iconName: 'Cpu',
    color: 'purple',
    gradient: 'from-purple-700 via-indigo-950 to-slate-900',
    domainGroup: 'future_green',
    domainGroupUrdu: 'مستقبل و گرین انرجی',
    domainGroupEn: 'Future & Green',
    taglineUrdu: 'ڈیٹا اینالیٹکس، سائبر سیکیورٹی، بلاک چین، روبوٹکس اور اگلی دہائی کے انقلابی ہنر',
    taglineEn: 'Explore data analytics, cybersecurity basics, automation, and emerging technologies',
    subcategories: [
      { id: 'sub-fut-cybersecurity', titleUrdu: 'سائبر سیکیورٹی اور ڈیجیٹل سیفٹی', titleEn: 'Cybersecurity Fundamentals', descriptionUrdu: 'ہیکنگ، فراڈ اور فشنگ سے اکاؤنٹ محفوظ رکھنا', descriptionEn: 'Account protection, 2FA, anti-phishing hygiene' },
      { id: 'sub-fut-data-analytics', titleUrdu: 'ڈیٹا اینالیٹکس اور پاور بی آئی', titleEn: 'Data Analytics & Power BI', descriptionUrdu: 'کاروباری ڈیٹا سے چارٹس اور فیصلے لینا', descriptionEn: 'Transforming spreadsheets into interactive visual dashboards' },
      { id: 'sub-fut-iot', titleUrdu: 'سمارٹ ڈیوائسز اور IoT سنسرز', titleEn: 'IoT & Smart Sensors', descriptionUrdu: 'موبائل سے موٹر اور لائٹس کنٹرول کرنا', descriptionEn: 'Automated relays, sensors, and remote switches' }
    ]
  },
  {
    id: 'cat-48-green-energy-skills',
    number: 48,
    titleUrdu: 'Green/Energy Skills (سبز و پائیدار ہنر)',
    titleEn: 'Green Energy & Sustainability',
    slug: 'green-energy-skills',
    iconName: 'Leaf',
    color: 'emerald',
    gradient: 'from-emerald-700 via-teal-950 to-slate-900',
    domainGroup: 'future_green',
    domainGroupUrdu: 'مستقبل و گرین انرجی',
    domainGroupEn: 'Future & Green',
    taglineUrdu: 'بائیو گیس پلانٹ، پانی کی ری سائیکلنگ، ماحول دوست تعمیرات اور ویسٹ مینجمنٹ',
    taglineEn: 'Build biogas plants, greywater recycling, eco-friendly buildings, and waste upcycling',
    subcategories: [
      { id: 'sub-grn-biogas', titleUrdu: 'گوبر گیس و بائیو گیس پلانٹ', titleEn: 'Biogas Digester Construction', descriptionUrdu: 'گائے کے گوبر سے مفت کوکنگ گیس بنانا', descriptionEn: 'Constructing household digesters for free cooking gas' },
      { id: 'sub-grn-water-harvest', titleUrdu: 'بارش کے پانی کی بچت (Rainwater Harvesting)', titleEn: 'Rainwater Harvesting', descriptionUrdu: 'چھت کے پانی کو ٹینک میں جمع کر کے استعمال کرنا', descriptionEn: 'Underground storage tanks and sand filtration' },
      { id: 'sub-grn-composting', titleUrdu: 'آرگینک ویسٹ سے بلیک گولڈ کھاد', titleEn: 'Organic Composting', descriptionUrdu: 'پھلوں کے چھلکوں اور پتوں سے مفت کھاد', descriptionEn: 'Nutrient-rich worm composting for crops' }
    ]
  },
  {
    id: 'cat-49-home-based-work',
    number: 49,
    titleUrdu: 'Home-based Work (گھریلو کام و روزگار)',
    titleEn: 'Home-Based Enterprises',
    slug: 'home-based-work',
    iconName: 'Home',
    color: 'pink',
    gradient: 'from-pink-700 via-purple-950 to-slate-900',
    domainGroup: 'crafts_lifestyle',
    domainGroupUrdu: 'دستکاری و گھریلو',
    domainGroupEn: 'Crafts & Home',
    taglineUrdu: 'خواتین اور بزرگوں کے لیے گھر سے باعزت آمدنی، پیکنگ، دستکاری اور ڈیجیٹل سروسز',
    taglineEn: 'Dignified home-based earnings for women, homemakers, and elders with zero commute',
    subcategories: [
      { id: 'sub-home-crafts', titleUrdu: 'گھریلو دستکاری اور بیوٹی پراڈکٹس', titleEn: 'Home Crafts & Natural Soaps', descriptionUrdu: 'دیسی صابن، شیمپو اور ہاتھ کی بنی اشیاء', descriptionEn: 'Herbal soaps, bath salts, and homemade cosmetics' },
      { id: 'sub-home-packaging', titleUrdu: 'مصالحہ جات اور ڈرائی فروٹ پیکنگ', titleEn: 'Spices & Dry Fruit Repacking', descriptionUrdu: 'چھوٹے پاؤچ بنا کر محلے میں فروخت', descriptionEn: 'Weighing, sealing, and labeling spice pouches' },
      { id: 'sub-home-data-entry', titleUrdu: 'گھر بیٹھے ٹائپنگ اور فارم فلنگ', titleEn: 'Home Typing & Document Prep', descriptionUrdu: 'کمپیوٹر یا موبائل پر اردو/انگلش ٹائپنگ', descriptionEn: 'Inpage, Word typing, and document formatting' }
    ]
  },
  {
    id: 'cat-50-small-business-skills',
    number: 50,
    titleUrdu: 'Small Business Skills (چھوٹا کاروبار)',
    titleEn: 'Small Business Mastery',
    slug: 'small-business-skills',
    iconName: 'Store',
    color: 'amber',
    gradient: 'from-amber-700 via-orange-950 to-slate-900',
    domainGroup: 'business_commerce',
    domainGroupUrdu: 'کاروبار و سیلز',
    domainGroupEn: 'Business & Sales',
    taglineUrdu: 'دکان داری کے اصول، مارکیٹ ریٹس، سپلائرز سے ڈیلنگ، سٹاک مینجمنٹ اور دیانت داری کا نظام',
    taglineEn: 'Master retail operations, wholesale negotiation, stock rotation, and high-trust ethics',
    subcategories: [
      { id: 'sub-sb-supplier-deal', titleUrdu: 'ہول سیل سپلائر سے بات چیت اور ریٹ', titleEn: 'Wholesale Supplier Deals', descriptionUrdu: 'بہترین کوالٹی اور مناسب ترین دام', descriptionEn: 'Negotiating payment terms and bulk discounts' },
      { id: 'sub-sb-inventory', titleUrdu: 'اسٹاک کی دیکھ بھال (ایکسپائری و کمی)', titleEn: 'Inventory & Stock Turnover', descriptionUrdu: 'کون سی چیز جلدی بکتی ہے اور کون سی رکتی ہے', descriptionEn: 'Fast-moving vs dead stock tracking' },
      { id: 'sub-sb-customer-trust', titleUrdu: 'سودے بازی میں دیانت اور برکت', titleEn: 'Ethical Trade Principles', descriptionUrdu: 'عیب چھپائے بغیر سچ بول کر بیچنا', descriptionEn: 'Zero-deception trade ensuring long-term barakah' }
    ]
  }
];

export const SKILL_UNIVERSE_ITEMS: SkillUniverseItem[] = [
  // 1. Mobile & Digital
  {
    id: 'univ-skill-mob-digital',
    slug: 'mobile-productivity-basics',
    titleUrdu: 'موبائل سے دفتری و ڈیجیٹل کام',
    titleEn: 'Mobile Office & Digital Productivity',
    taglineUrdu: 'صرف سمارٹ فون سے گوگل ڈرائیو، پی ڈی ایف، کیمرہ اسکیننگ اور آن لائن ڈیٹا کا نظم',
    taglineEn: 'Master Google Drive, PDF scanning, online forms, and file organization on smartphone',
    categoryId: 'cat-1-mobile-digital',
    subcategoryId: 'sub-mob-basics',
    level: 1,
    levelTitleUrdu: 'لیول ۱: بالکل شروع سے (صفر معلومات)',
    levelTitleEn: 'Level 1: Absolute Beginner',
    timeToLearnDays: 5,
    timeDisplayUrdu: '۵ سے ۷ دن (روزانہ ۲۰ منٹ)',
    timeDisplayEn: '5-7 days (20 mins daily)',
    requiredResourcesUrdu: ['کوئی بھی عام سمارٹ فون', 'انٹرنیٹ کنکشن', 'گوگل اکاؤنٹ'],
    requiredResourcesEn: ['Any standard smartphone', 'Internet connection', 'Google Account'],
    isMobileFriendly: true,
    isComputerRequired: false,
    isHomeBased: true,
    isOnlineWork: true,
    isOfflineLocal: true,
    isLowCost: true,
    isQuickLearn: true,
    targetAudience: ['all', 'students', 'women', 'youth', 'village', 'city'],
    primaryEarningPaths: ['job', 'freelancing', 'home', 'local_service'],
    iconName: 'Smartphone',
    coverGradient: 'from-emerald-700 via-teal-900 to-slate-900',
    badgeUrdu: '🟢 صفر کمپیوٹر کی ضرورت',
    badgeEn: '🟢 100% Mobile Friendly',
    
    whatIsThisUrdu: 'یہ ہنر آپ کو سکھاتا ہے کہ بغیر کمپیوٹر کے صرف اپنے موبائل سے سرکاری یا نجی دفاتر، دکانوں اور آن لائن اداروں کے لیے فارم فلنگ، پی ڈی ایف بنانا، اسکیننگ اور فائلیں ترتیب دینا کیسے ممکن ہے۔',
    whatIsThisEn: 'This skill teaches you how to perform essential office tasks, document scanning, form filing, and digital file management purely using your smartphone without needing a desktop PC.',
    whoIsItForUrdu: 'ہر وہ طالب علم، گھریلو خاتون، دکاندار یا نوجوان جس کے پاس کمپیوٹر نہیں مگر وہ ڈیجیٹل دنیا میں پہلا قدم رکھنا چاہتا ہے۔',
    whoIsItForEn: 'Students, homemakers, shop owners, and youth who have a smartphone and want to start their digital journey.',
    canLearnFromMobileUrdu: 'جی ہاں، ۱۰۰٪ موبائل سے سیکھا اور کیا جا سکتا ہے۔',
    canLearnFromMobileEn: 'Yes, 100% executable and learnable on any standard smartphone.',
    isComputerNecessaryUrdu: 'بالکل نہیں، کمپیوٹر کی قطعی ضرورت نہیں ہے۔',
    isComputerNecessaryEn: 'Not at all. A basic smartphone is fully sufficient.',
    howMuchTimeUrdu: 'صرف ۵ سے ۷ دن (روزانہ ۱۵ سے ۲۰ منٹ مشق)۔',
    howMuchTimeEn: '5 to 7 days with 15-20 minutes daily practice.',
    whatItemsNeededUrdu: ['اینڈرائڈ یا آئی فون', 'گوگل ڈرائیو اور کیم اسکینر ایپ', 'انٹرنیٹ ڈیٹا'],
    whatItemsNeededEn: ['Android or iPhone', 'Google Drive & CamScanner app', 'Internet connection'],
    whereIsItUsefulUrdu: ['مقامی فوٹو اسٹیٹ اور ایزی پیسہ شاپس پر', 'آن لائن داخلہ اور نوکری کے فارم بھرنے میں', 'گھریلو بجٹ اور دستاویزات کے کلاؤڈ بیک اپ میں', 'چھوٹے کاروبار کے ریکارڈز میں'],
    whereIsItUsefulEn: ['Local print/photocopy kiosks', 'College/job application form filing', 'Digital cloud backups of personal docs', 'Small business bookkeeping'],
    
    jobPathwayUrdu: 'فوٹو کاپی دکانوں، پرنٹنگ پریس اور مقامی دفاتر میں ڈیٹا اسسٹنٹ کے طور پر۔',
    jobPathwayEn: 'Data assistant at local print shops, schools, or community office kiosks.',
    freelancePathwayUrdu: 'آن لائن ڈیٹا کلین اپ اور موبائل ٹاسک اسسٹنٹ۔',
    freelancePathwayEn: 'Online micro-task virtual assistant for document conversion.',
    businessPathwayUrdu: 'محلے میں ”آن لائن سہولت مرکز“ (داخلہ فارم، سی وی پرنٹنگ، ٹکٹ بکنگ)۔',
    businessPathwayEn: 'Neighborhood digital facilitation desk (forms, ticket bookings, CV scans).',
    homeWorkPathwayUrdu: 'گھر بیٹھے جاننے والوں کے شناختی کارڈز، اسناد اسکین کر کے محفوظ پی ڈی ایف فائل بنانا۔',
    homeWorkPathwayEn: 'Converting physical family records and certificates into secure organized PDFs.',
    onlinePathwayUrdu: 'گوگل فارمز سروے اور ڈیٹا کلیکشن سروسز۔',
    onlinePathwayEn: 'Google Form creation and basic remote survey data collation.',
    localPathwayUrdu: 'مقامی کونسل، اسکول یا دکاندار کے رجسٹر ریکارڈز کو فون سے ڈیجیٹل بنانا۔',
    localPathwayEn: 'Digitizing local council, school, or retail registers into spreadsheets.',
    
    firstPracticalActionUrdu: 'آج ہی اپنے فون میں Google Drive ایپ کھولیں، ”My Documents“ کا فولڈر بنائیں اور ایک شناختی کارڈ کی تصویر اسکین کر کے PDF بنا کر محفوظ کریں۔',
    firstPracticalActionEn: 'Open Google Drive on your phone, create a "My Documents" folder, scan a sample ID card, and save it as a clean PDF.',
    nextSkillUrdu: 'Canva پر پوسٹرز اور وزیٹنگ کارڈز بنانا',
    nextSkillEn: 'Canva Graphic Design Fundamentals',
    nextSkillId: 'univ-skill-canva-design',
    relatedSkillIds: ['univ-skill-canva-design', 'univ-skill-ai-prompting', 'univ-skill-data-excel'],
    
    levels: [
      {
        level: 1,
        levelBadgeUrdu: '🟢 Level 1: بالکل شروع سے',
        levelBadgeEn: '🟢 Level 1: Zero Knowledge',
        titleUrdu: 'موبائل فائل مینیجر اور فولڈرز بنانا',
        titleEn: 'Mobile File Management & Folders',
        descriptionUrdu: 'فون میں درست نام کے ساتھ فولڈرز بنانا اور فائلیں تلاش کرنا۔',
        descriptionEn: 'Creating organized directory structures and searching files on mobile.',
        practicalMilestoneUrdu: 'اپنے فون میں ۳ الگ الگ فولڈر (اسناد، بل، تصاویر) بنائیں۔',
        practicalMilestoneEn: 'Create 3 organized folders for certificates, bills, and images.',
        estimatedDurationUrdu: '۱ دن',
        estimatedDurationEn: '1 Day'
      },
      {
        level: 2,
        levelBadgeUrdu: '🔵 Level 2: بنیادی مہارت',
        levelBadgeEn: '🔵 Level 2: Foundational',
        titleUrdu: 'پی ڈی ایف بنانا اور کیمرہ اسکیننگ',
        titleEn: 'PDF Creation & Camera Scanning',
        descriptionUrdu: 'دستاویز کی سیدھی تصویر لینا، شیڈو ہٹانا اور ہائی کوالٹی PDF بنانا۔',
        descriptionEn: 'High-clarity document scanning, perspective crop, and PDF conversion.',
        practicalMilestoneUrdu: 'کسی کتاب کے ۵ صفحے اسکین کر کے ایک پی ڈی ایف فائل بنائیں۔',
        practicalMilestoneEn: 'Scan 5 book pages and compile into a single merged PDF.',
        estimatedDurationUrdu: '۲ دن',
        estimatedDurationEn: '2 Days'
      },
      {
        level: 3,
        levelBadgeUrdu: '🟡 Level 3: درمیانی مہارت',
        levelBadgeEn: '🟡 Level 3: Intermediate',
        titleUrdu: 'کلاؤڈ بیک اپ اور شیئرنگ لنکس',
        titleEn: 'Cloud Backup & View Links',
        descriptionUrdu: 'گوگل ڈرائیو پر فائل اپلوڈ کرنا اور پاس ورڈ یا ویو لنک بنانا۔',
        descriptionEn: 'Uploading to Google Drive and generating shareable view/edit links.',
        practicalMilestoneUrdu: 'اپنے پورٹ فولیو کا لنک بنا کر کسی دوست کو شیئر کریں۔',
        practicalMilestoneEn: 'Generate a shared cloud link and test access permissions.',
        estimatedDurationUrdu: '۲ دن',
        estimatedDurationEn: '2 Days'
      },
      {
        level: 4,
        levelBadgeUrdu: '🟠 Level 4: اعلیٰ مہارت',
        levelBadgeEn: '🟠 Level 4: Advanced',
        titleUrdu: 'گوگل فارمز اور موبائل شیٹس',
        titleEn: 'Google Forms & Mobile Spreadsheets',
        descriptionUrdu: 'آن لائن رجسٹریشن فارم بنانا اور موصولہ ڈیٹا شیٹ میں دیکھنا۔',
        descriptionEn: 'Designing custom registration forms and collecting responses in Sheets.',
        practicalMilestoneUrdu: 'ایک فیڈ بیک فارم بنا کر ۵ لوگوں سے ڈیٹا وصول کریں۔',
        practicalMilestoneEn: 'Build a survey form and collect 5 real responses.',
        estimatedDurationUrdu: '۲ دن',
        estimatedDurationEn: '2 Days'
      },
      {
        level: 5,
        levelBadgeUrdu: '🔴 Level 5: پیشہ ورانہ سطح',
        levelBadgeEn: '🔴 Level 5: Professional',
        titleUrdu: 'آن لائن سروس ڈیسک کا مکمل انتظام',
        titleEn: 'Full Mobile Service Hub Setup',
        descriptionUrdu: 'مکمل واٹس ایپ بزنس کیٹلاگ اور فارم فلنگ کی کمرشل سروس چلانا۔',
        descriptionEn: 'Running a commercial digital facilitation desk via WhatsApp Business.',
        practicalMilestoneUrdu: 'اپنا پہلا باقاعدہ پیڈ کسٹمر آرڈر مکمل کریں۔',
        practicalMilestoneEn: 'Deliver your first paid client order successfully.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      }
    ],
    searchKeywords: ['موبائل', 'موبائل سے کام', 'فون سے کام', 'بغیر کمپیوٹر', 'پی ڈی ایف', 'اسکین', 'گوگل ڈرائیو', 'mobile work', 'no computer', 'phone', 'pdf scanner', 'google drive']
  },

  // 2. AI & ChatGPT
  {
    id: 'univ-skill-ai-prompting',
    slug: 'ai-chatgpt-mastery',
    titleUrdu: 'AI اور ChatGPT کا عملی استعمال',
    titleEn: 'Practical AI & ChatGPT Mastery',
    taglineUrdu: 'مصنوعی ذہانت کو اپنا اسسٹنٹ بنا کر ریسرچ، اردو/انگلش تحریر، آئیڈیاز اور حل چند سیکنڈ میں حاصل کریں',
    taglineEn: 'Supercharge writing, problem solving, business proposals, and learning using AI prompts',
    categoryId: 'cat-2-ai-chatgpt',
    subcategoryId: 'sub-ai-prompting',
    level: 1,
    levelTitleUrdu: 'لیول ۱: بالکل شروع سے (صفر معلومات)',
    levelTitleEn: 'Level 1: Absolute Beginner',
    timeToLearnDays: 7,
    timeDisplayUrdu: '۷ سے ۱۰ دن (روزانہ ۲۰ منٹ)',
    timeDisplayEn: '7-10 days (20 mins daily)',
    requiredResourcesUrdu: ['سمارٹ فون یا کمپیوٹر', 'انٹرنیٹ', 'مفت ChatGPT یا Gemini اکاؤنٹ'],
    requiredResourcesEn: ['Smartphone or PC', 'Internet', 'Free ChatGPT/Gemini account'],
    isMobileFriendly: true,
    isComputerRequired: false,
    isHomeBased: true,
    isOnlineWork: true,
    isOfflineLocal: false,
    isLowCost: true,
    isQuickLearn: true,
    targetAudience: ['all', 'students', 'women', 'youth', 'village', 'city'],
    primaryEarningPaths: ['freelancing', 'job', 'home', 'business'],
    iconName: 'Cpu',
    coverGradient: 'from-purple-700 via-indigo-900 to-slate-900',
    badgeUrdu: '⚡ سب سے زیادہ مانگ',
    badgeEn: '⚡ High Demand Future Skill',
    
    whatIsThisUrdu: 'یہ ہنر آپ کو سکھاتا ہے کہ AI ماڈلز (جیسے ChatGPT یا Gemini) سے کس طرح واضح اور جامع سوالات پوچھ کر معیاری تحریریں، کاروباری خاکے، سبق کا خلاصہ اور کسٹمر میسجز لکھوائے جا سکتے ہیں۔',
    whatIsThisEn: 'Learn how to construct structured prompts to produce professional articles, translation, business proposals, and customer support templates in seconds.',
    whoIsItForUrdu: 'طلبہ، اساتذہ، فری لانسرز، دکاندار اور ہر وہ فرد جو اپنے وقت کی بچت کر کے پیداواری صلاحیت بڑھانا چاہتا ہے۔',
    whoIsItForEn: 'Students, educators, content creators, freelancers, and small business owners.',
    canLearnFromMobileUrdu: 'جی ہاں، موبائل ایپ یا براؤزر سے باآسانی ممکن ہے۔',
    canLearnFromMobileEn: 'Yes, fully functional through the mobile app or browser.',
    isComputerNecessaryUrdu: 'نہیں، موبائل پر بھی تمام کام تیزی سے ہوتا ہے۔',
    isComputerNecessaryEn: 'No, smartphone is 100% sufficient.',
    howMuchTimeUrdu: '۷ سے ۱۰ دن میں بنیادی پرامپٹنگ کی مہارت حاصل ہو جاتی ہے۔',
    howMuchTimeEn: '7 to 10 days for foundational prompt mastery.',
    whatItemsNeededUrdu: ['موبائل فون یا لیپ ٹاپ', 'انٹرنیٹ کنکشن', 'AI اکاؤنٹ'],
    whatItemsNeededEn: ['Phone or Laptop', 'Internet connection', 'Free AI account'],
    whereIsItUsefulUrdu: ['ای میلز اور خطوط لکھنے میں', 'اسکول/کالج اسائنمنٹس اور تیاری میں', 'سوشل میڈیا پوسٹس کے کیپشنز میں', 'کاروباری تجاویز اور کسٹمر جوابات میں'],
    whereIsItUsefulEn: ['Writing professional emails and letters', 'Educational summaries and tutoring', 'Social media caption generation', 'Business pitch and customer replies'],
    
    jobPathwayUrdu: 'ڈیجیٹل مارکیٹنگ ایجنسیوں میں AI کنٹینٹ آپریٹر اور اسسٹنٹ۔',
    jobPathwayEn: 'AI Content Assistant and Junior Copywriter at digital agencies.',
    freelancePathwayUrdu: 'Upwork اور Fiverr پر AI اسسٹڈ بلاگ رائٹنگ اور پرامپٹ کرافٹنگ۔',
    freelancePathwayEn: 'AI-assisted blog writing, copywriting, and prompt template authoring on Upwork/Fiverr.',
    businessPathwayUrdu: 'اپنے کاروبار کی تمام مارکیٹنگ اور کسٹمر سروس کو خودکار کرنا۔',
    businessPathwayEn: 'Drafting all product descriptions, flyers, and WhatsApp sales copy in-house.',
    homeWorkPathwayUrdu: 'گھر بیٹھے مضامین، خلاصے اور سوشل میڈیا کیپشنز لکھ کر کلائنٹس کو فراہم کرنا۔',
    homeWorkPathwayEn: 'Writing articles, scripts, and product blurbs from home for clients.',
    onlinePathwayUrdu: 'یوٹیوب اسکرپٹس اور بلاگ پوسٹس کا مکمل مواد تیار کرنا۔',
    onlinePathwayEn: 'Creating full YouTube video outlines, scripts, and blog articles.',
    localPathwayUrdu: 'مقامی اسکولوں اور اداروں کو درخواستیں اور پرپوزلز لکھ کر دینا۔',
    localPathwayEn: 'Drafting formal proposals, school notices, and promotional text for local firms.',
    
    firstPracticalActionUrdu: 'ChatGPT کھولیں اور پرامپٹ لکھیں: ”ایک دکان کے لیے ۵ پرکشش واٹس ایپ آفر میسجز اردو میں تیار کرو۔“ اور نتیجہ دیکھیں۔',
    firstPracticalActionEn: 'Open ChatGPT and test a prompt: "Draft 5 polite Urdu WhatsApp promotional messages for a local grocery shop."',
    nextSkillUrdu: 'Canva گرافک ڈیزائننگ',
    nextSkillEn: 'Canva Graphic Design',
    nextSkillId: 'univ-skill-canva-design',
    relatedSkillIds: ['univ-skill-canva-design', 'univ-skill-video-editing', 'univ-skill-freelancing-core'],
    
    levels: [
      {
        level: 1,
        levelBadgeUrdu: '🟢 Level 1: بالکل شروع سے',
        levelBadgeEn: '🟢 Level 1: Zero Knowledge',
        titleUrdu: 'AI سے بنیادی گفتگو اور سوالات',
        titleEn: 'First AI Chats & Question Asking',
        descriptionUrdu: 'AI اکاؤنٹ بنانا اور آسان زبان میں سوال پوچھنا۔',
        descriptionEn: 'Creating an account and asking simple natural queries in Urdu or English.',
        practicalMilestoneUrdu: 'کسی بھی مشکل لفظ یا سوال کا آسان اردو مفہوم AI سے حاصل کریں۔',
        practicalMilestoneEn: 'Ask AI to explain a complex topic in simple Urdu words.',
        estimatedDurationUrdu: '۱ دن',
        estimatedDurationEn: '1 Day'
      },
      {
        level: 2,
        levelBadgeUrdu: '🔵 Level 2: بنیادی مہارت',
        levelBadgeEn: '🔵 Level 2: Foundational',
        titleUrdu: 'پرامپٹ کا فارمولا (کردار + کام + حوالہ)',
        titleEn: 'Structured Prompting Formula',
        descriptionUrdu: 'کردار، سیاق و سباق اور آؤٹ پٹ فارمیٹ طے کر کے پرامپٹ لکھنا۔',
        descriptionEn: 'Specifying Role, Task, Context, and output format for precise answers.',
        practicalMilestoneUrdu: 'ایک مکمل تعارفی ای میل اور درخواست کا مسودہ تیار کروائیں۔',
        practicalMilestoneEn: 'Prompt AI to draft a formal job application letter.',
        estimatedDurationUrdu: '۲ دن',
        estimatedDurationEn: '2 Days'
      },
      {
        level: 3,
        levelBadgeUrdu: '🟡 Level 3: درمیانی مہارت',
        levelBadgeEn: '🟡 Level 3: Intermediate',
        titleUrdu: 'AI سے تحریر کی پروف ریڈنگ اور اینہانسمنٹ',
        titleEn: 'Writing Enhancement & Proofreading',
        descriptionUrdu: 'اپنی لکھی تحریر میں خوبصورتی، روانی اور املا کی اصلاح کروانا۔',
        descriptionEn: 'Polishing drafts, fixing grammar, and adapting tone for different audiences.',
        practicalMilestoneUrdu: 'کسی عام پیراگراف کو شاندار پیشہ ورانہ تحریر میں تبدیل کروائیں۔',
        practicalMilestoneEn: 'Convert an informal draft into a polished professional memo.',
        estimatedDurationUrdu: '۲ دن',
        estimatedDurationEn: '2 Days'
      },
      {
        level: 4,
        levelBadgeUrdu: '🟠 Level 4: اعلیٰ مہارت',
        levelBadgeEn: '🟠 Level 4: Advanced',
        titleUrdu: 'کاروباری منصوبہ بندی اور مارکیٹنگ خاکے',
        titleEn: 'Business Planning & Marketing Roadmaps',
        descriptionUrdu: 'کاروباری آئیڈیا کا نفع نقصان، حریفوں کا موازنہ اور ۳۰ دن کا سوشل پلان۔',
        descriptionEn: 'Generating competitor matrices, SWOT summaries, and monthly content calendars.',
        practicalMilestoneUrdu: 'ایک فرضی دکان کے لیے ۳۰ دن کا سوشل میڈیا پلان جنریٹ کریں۔',
        practicalMilestoneEn: 'Generate a 30-day social media calendar with captions and hooks.',
        estimatedDurationUrdu: '۲ دن',
        estimatedDurationEn: '2 Days'
      },
      {
        level: 5,
        levelBadgeUrdu: '🔴 Level 5: پیشہ ورانہ سطح',
        levelBadgeEn: '🔴 Level 5: Professional',
        titleUrdu: 'AI ورک فلو آٹومیشن اور فری لانس پروجیکٹس',
        titleEn: 'AI Workflow Integration & Client Delivery',
        descriptionUrdu: 'کلائنٹ کے پروجیکٹس کو تیز رفتاری اور اعلیٰ اخلاقی معیار کے ساتھ مکمل کرنا۔',
        descriptionEn: 'Delivering end-to-end client copywriting and research deliverables with human oversight.',
        practicalMilestoneUrdu: 'ایک مکمل کلائنٹ ڈیلیوری ایبل پیکج تیار کریں۔',
        practicalMilestoneEn: 'Package a complete 5-article batch with SEO metadata for a client.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      }
    ],
    searchKeywords: ['AI', 'ChatGPT', 'Gemini', 'پرامپٹ', 'مصنوعی ذہانت', 'چیٹ جی پی ٹی', 'انگریزی تحریر', 'مضمون', 'ai writer', 'prompt engineering', 'chat gpt', 'urdu chatgpt']
  },

  // 3. Canva & Graphic Design
  {
    id: 'univ-skill-canva-design',
    slug: 'canva-graphic-design',
    titleUrdu: 'Canva پر گرافک ڈیزائننگ',
    titleEn: 'Canva Graphic & Social Design',
    taglineUrdu: 'بغیر فوٹو شاپ کے موبائل یا لیپ ٹاپ پر سوشل میڈیا پوسٹس، لوگو، کارڈز اور فلائیرز ڈیزائن کرنا',
    taglineEn: 'Create eye-catching social posts, logos, business cards, and banners without Photoshop',
    categoryId: 'cat-3-canva-graphic-design',
    subcategoryId: 'sub-canva-basics',
    level: 1,
    levelTitleUrdu: 'لیول ۱: بالکل شروع سے (صفر معلومات)',
    levelTitleEn: 'Level 1: Absolute Beginner',
    timeToLearnDays: 10,
    timeDisplayUrdu: '۱۰ سے ۱۴ دن (روزانہ ۲۵ منٹ)',
    timeDisplayEn: '10-14 days (25 mins daily)',
    requiredResourcesUrdu: ['سمارٹ فون یا لیپ ٹاپ', 'کینوا مفت ایپ', 'انٹرنیٹ'],
    requiredResourcesEn: ['Smartphone or Laptop', 'Canva free app', 'Internet'],
    isMobileFriendly: true,
    isComputerRequired: false,
    isHomeBased: true,
    isOnlineWork: true,
    isOfflineLocal: true,
    isLowCost: true,
    isQuickLearn: true,
    targetAudience: ['all', 'students', 'women', 'youth', 'city', 'village'],
    primaryEarningPaths: ['freelancing', 'business', 'home', 'local_service', 'job'],
    iconName: 'Palette',
    coverGradient: 'from-pink-600 via-purple-900 to-slate-900',
    badgeUrdu: '🎨 فورا شروع کرنے لائق',
    badgeEn: '🎨 Instant Visual Craft',
    
    whatIsThisUrdu: 'کینوا ایک سادہ اور طاقتور ڈیزائن ایپ ہے جس میں بنے بنائے ٹیمپلیٹس، فونٹس اور تصاویر ہوتی ہیں جنہیں ایڈٹ کر کے منٹوں میں شاندار ڈیزائن تیار کیے جا سکتے ہیں۔',
    whatIsThisEn: 'Canva is an accessible visual design tool that empowers anyone to build professional flyers, social graphics, logos, and print cards using intuitive drag-and-drop templates.',
    whoIsItForUrdu: 'خواتین، طلبہ، دکاندار، سوشل میڈیا مینیجرز اور نئے فری لانسرز۔',
    whoIsItForEn: 'Homemakers, students, local merchants, social managers, and emerging freelancers.',
    canLearnFromMobileUrdu: 'جی ہاں، کینوا موبائل ایپ سے شاندار ڈیزائن بنتے ہیں۔',
    canLearnFromMobileEn: 'Yes, the Canva mobile app is extremely responsive and feature-complete.',
    isComputerNecessaryUrdu: 'نہیں، موبائل پر پورا کام ممکن ہے، لیپ ٹاپ ہو تو اور آسانی ہوتی ہے۔',
    isComputerNecessaryEn: 'No, smartphone works great; laptop is an optional bonus.',
    howMuchTimeUrdu: '۱۰ سے ۱۴ دن میں مکمل اعتماد حاصل ہو جاتا ہے۔',
    howMuchTimeEn: '10 to 14 days to reach solid portfolio-ready proficiency.',
    whatItemsNeededUrdu: ['موبائل فون یا پی سی', 'کینوا اکاؤنٹ', 'انٹرنیٹ کنکشن'],
    whatItemsNeededEn: ['Phone or PC', 'Canva account', 'Internet connection'],
    whereIsItUsefulUrdu: ['فیس بک اور انسٹاگرام پوسٹس میں', 'دکان کے اشتہاری پمفلٹس اور بینرز میں', 'سکول، شادی اور وزٹنگ کارڈز میں', 'یوٹیوب تھمب نیلز میں'],
    whereIsItUsefulEn: ['Facebook & Instagram branding', 'Shop flyers and discount banners', 'Visiting cards and invitation prints', 'YouTube video thumbnails'],
    
    jobPathwayUrdu: 'لوکل پرنٹنگ پریس، ایڈورٹائزنگ شاپس اور اسکولوں میں گرافک ڈیزائنر۔',
    jobPathwayEn: 'Junior Graphic Designer at local print houses, schools, and marketing agencies.',
    freelancePathwayUrdu: 'Fiverr اور سوشل میڈیا پر سوشل پوسٹ پیکس اور تھمب نیل ڈیزائننگ۔',
    freelancePathwayEn: 'Selling 10-post social media branding packs and YouTube thumbnails on Fiverr.',
    businessPathwayUrdu: 'اپنی مصنوعات، کپڑوں یا کھانوں کی پرکشش مارکیٹنگ خود کرنا۔',
    businessPathwayEn: 'Designing promotional flyers and menus for your own products/shop.',
    homeWorkPathwayUrdu: 'گھر بیٹھے واٹس ایپ کے ذریعے کسٹمرز کے لیے ڈیجیٹل کارڈز اور اسٹیٹس پوسٹس بنانا۔',
    homeWorkPathwayEn: 'Creating digital invitation cards, birthday posters, and status ads from home.',
    onlinePathwayUrdu: 'آن لائن اسٹورز اور فیس بک پیجز کے لیے مکمل برانڈ کٹس فراہم کرنا۔',
    onlinePathwayEn: 'Building social media brand visual identity kits for ecommerce merchants.',
    localPathwayUrdu: 'محلے کے دکانداروں، کلینک اور اکیڈمیوں کے لیے فلائیرز اور کارڈز ڈیزائن کرنا۔',
    localPathwayEn: 'Designing promotional banners and visiting cards for neighborhood doctors & tutors.',
    
    firstPracticalActionUrdu: 'Canva ایپ کھولیں، ”Instagram Post“ سرچ کریں، کسی ایک ٹیمپلیٹ میں اردو متن اور اپنی تصویر تبدیل کر کے ڈاؤن لوڈ کریں۔',
    firstPracticalActionEn: 'Open Canva, search "Instagram Post", change the text to your custom Urdu headline, and download your first graphic.',
    nextSkillUrdu: 'سوشل میڈیا مینجمنٹ',
    nextSkillEn: 'Social Media Management',
    nextSkillId: 'univ-skill-social-media',
    relatedSkillIds: ['univ-skill-ai-prompting', 'univ-skill-video-editing', 'univ-skill-social-media'],
    
    levels: [
      {
        level: 1,
        levelBadgeUrdu: '🟢 Level 1: بالکل شروع سے',
        levelBadgeEn: '🟢 Level 1: Zero Knowledge',
        titleUrdu: 'ٹیمپلیٹس کا انتخاب اور ٹیکسٹ ایڈیٹنگ',
        titleEn: 'Template Selection & Text Editing',
        descriptionUrdu: 'کینوا پر مناسب سائز چننا اور ٹیکسٹ/فونٹس بدلنا۔',
        descriptionEn: 'Picking standard social formats and customizing typography.',
        practicalMilestoneUrdu: 'ایک خوبصورت اقوالِ زریں یا مبارکباد کا پوسٹر بنائیں۔',
        practicalMilestoneEn: 'Design an inspiring Urdu quote or greeting flyer.',
        estimatedDurationUrdu: '۲ دن',
        estimatedDurationEn: '2 Days'
      },
      {
        level: 2,
        levelBadgeUrdu: '🔵 Level 2: بنیادی مہارت',
        levelBadgeEn: '🔵 Level 2: Foundational',
        titleUrdu: 'رنگوں کی ہم آہنگی اور تصاویر لگانا',
        titleEn: 'Color Harmony & Image Insertion',
        descriptionUrdu: 'تصاویر کا بیک گراؤنڈ ہٹانا، برانڈ کے رنگ اور ایلیمنٹس سیٹ کرنا۔',
        descriptionEn: 'Background removal, frame placement, and balanced contrast.',
        practicalMilestoneUrdu: 'ایک پروڈکٹ (مثلاً جوتے یا کپڑے) کا سیل پوسٹر ڈیزائن کریں۔',
        practicalMilestoneEn: 'Create a 20% discount sale flyer for a physical product.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 3,
        levelBadgeUrdu: '🟡 Level 3: درمیانی مہارت',
        levelBadgeEn: '🟡 Level 3: Intermediate',
        titleUrdu: 'پرنٹنگ ڈیزائن (وزیٹنگ کارڈ و مینو)',
        titleEn: 'Print Media (Cards & Menus)',
        descriptionUrdu: 'پرنٹ کے لیے درست سائز، حاشیے (Margins) اور PDF پرنٹ فارمیٹ۔',
        descriptionEn: 'Print bleeds, margins, double-sided business cards, and restaurant menus.',
        practicalMilestoneUrdu: 'کسی قریبی دکان کے لیے دو طرفہ وزیٹنگ کارڈ بنائیں۔',
        practicalMilestoneEn: 'Design a professional double-sided business card.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 4,
        levelBadgeUrdu: '🟠 Level 4: اعلیٰ مہارت',
        levelBadgeEn: '🟠 Level 4: Advanced',
        titleUrdu: 'یوٹیوب تھمب نیل اور لوگو برانڈنگ',
        titleEn: 'YouTube Thumbnails & Logo Kits',
        descriptionUrdu: 'پرکشش یوٹیوب تھمب نیل اور بزنس لوگو کی ترتیب۔',
        descriptionEn: 'High-contrast click-worthy thumbnails and cohesive brand identity palettes.',
        practicalMilestoneUrdu: '۳ مختلف ویڈیوز کے لیے ہائی کلک تھمب نیلز تیار کریں۔',
        practicalMilestoneEn: 'Design 3 bold YouTube thumbnails with Urdu typography.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 5,
        levelBadgeUrdu: '🔴 Level 5: پیشہ ورانہ سطح',
        levelBadgeEn: '🔴 Level 5: Professional',
        titleUrdu: 'مکمل سوشل میڈیا پوسٹ پیکیج اور پورٹ فولیو',
        titleEn: 'Social Media Retainer Kit & Portfolio',
        descriptionUrdu: 'کسی کلائنٹ کے پورے مہینے کی پوسٹس کا ایک جیسا شاندار برانڈڈ سیٹ۔',
        descriptionEn: 'Assembling a 15-post unified visual campaign and PDF portfolio.',
        practicalMilestoneUrdu: 'اپنا ۵ شاہکار ڈیزائنز پر مشتمل پورٹ فولیو تیار کریں۔',
        practicalMilestoneEn: 'Publish a 5-sample design portfolio for client outreach.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      }
    ],
    searchKeywords: ['کینوا', 'گرافک ڈیزائن', 'پوسٹر', 'لوگو', 'کارڈ', 'تھمب نیل', 'canva', 'graphic design', 'logo', 'poster', 'thumbnail', 'visiting card']
  },

  // 4. Video Editing
  {
    id: 'univ-skill-video-editing',
    slug: 'mobile-video-editing',
    titleUrdu: 'موبائل ویڈیو ایڈیٹنگ (CapCut / VN)',
    titleEn: 'Mobile Video Editing (CapCut/VN)',
    taglineUrdu: 'موبائل فون پر ریلز، شارٹس اور ویڈیوز کو پروفیشنل انداز میں کٹ کرنا، کیپشنز اور میوزک لگانا',
    taglineEn: 'Master transitions, Urdu captions, cuts, pacing, and viral short-form reels on phone',
    categoryId: 'cat-4-video-editing',
    subcategoryId: 'sub-vid-capcut',
    level: 1,
    levelTitleUrdu: 'لیول ۱: بالکل شروع سے (صفر معلومات)',
    levelTitleEn: 'Level 1: Absolute Beginner',
    timeToLearnDays: 12,
    timeDisplayUrdu: '۱۲ سے ۱۵ دن (روزانہ ۳۰ منٹ)',
    timeDisplayEn: '12-15 days (30 mins daily)',
    requiredResourcesUrdu: ['سمارٹ فون (اچھی میموری)', 'CapCut یا VN ایپ', 'انٹرنیٹ'],
    requiredResourcesEn: ['Smartphone (adequate RAM)', 'CapCut or VN app', 'Internet'],
    isMobileFriendly: true,
    isComputerRequired: false,
    isHomeBased: true,
    isOnlineWork: true,
    isOfflineLocal: true,
    isLowCost: true,
    isQuickLearn: true,
    targetAudience: ['youth', 'students', 'women', 'all', 'city', 'village'],
    primaryEarningPaths: ['freelancing', 'home', 'business', 'job'],
    iconName: 'Video',
    coverGradient: 'from-rose-600 via-red-900 to-slate-900',
    badgeUrdu: '🔥 ٹاپ ٹرینڈنگ',
    badgeEn: '🔥 High Growth Skill',
    
    whatIsThisUrdu: 'موبائل ویڈیو ایڈیٹنگ وہ ہنر ہے جس سے آپ عام کیمرے کی ویڈیو کو کاٹ چھانٹ کر، بیک گراؤنڈ میوزک لگا کر، ٹیکسٹ اور خوبصورت ٹرانزیشنز ڈال کر دیکھنے کے لائق بنا دیتے ہیں۔',
    whatIsThisEn: 'Mobile video editing involves cutting footage, balancing audio, applying smooth transitions, and adding automated captions to create engaging content.',
    whoIsItForUrdu: 'نوجوان، یوٹیوبرز، ٹک ٹاکرز، ای کامرس سیلرز اور فری لانسرز۔',
    whoIsItForEn: 'Youth, aspiring creators, shop owners, and social video freelancers.',
    canLearnFromMobileUrdu: 'جی ہاں، CapCut اور VN موبائل پر ہی سب سے زیادہ تیز چلتے ہیں۔',
    canLearnFromMobileEn: 'Yes, CapCut and VN are mobile-first powerhouses.',
    isComputerNecessaryUrdu: 'نہیں، موبائل پر تمام مطلوبہ شارٹس اور ریلز ایڈیٹ ہو جاتی ہیں۔',
    isComputerNecessaryEn: 'No, smartphone editing dominates short-form video today.',
    howMuchTimeUrdu: '۱۲ سے ۱۵ دن میں اچھی گرفت حاصل ہو جاتی ہے۔',
    howMuchTimeEn: '12-15 days to create smooth, high-retention video edits.',
    whatItemsNeededUrdu: ['سمارٹ فون', 'CapCut / VN ایپ', 'ہینڈز فری / مائیک'],
    whatItemsNeededEn: ['Smartphone', 'CapCut/VN App', 'Earphones/Mic'],
    whereIsItUsefulUrdu: ['ٹک ٹاک، ریلز اور یوٹیوب شارٹس میں', 'پراڈکٹ تشہیری ویڈیوز میں', 'شادی اور فیملی ایونٹس کی ویڈیوز میں', 'تعلیمی اور رہنمائی اسباق میں'],
    whereIsItUsefulEn: ['TikTok, IG Reels & YouTube Shorts', 'Product demo video ads', 'Family event montages', 'Educational explainers'],
    
    jobPathwayUrdu: 'سوشل میڈیا ایجنسیوں، اینکرز اور پروڈکشن ہاؤسز میں ویڈیو ایڈیٹر۔',
    jobPathwayEn: 'Video editor at media agencies, influencers, and brand marketing teams.',
    freelancePathwayUrdu: 'Fiverr اور انسٹاگرام پر ریلز اور ٹک ٹاک ایڈیٹنگ کے آرڈرز۔',
    freelancePathwayEn: 'Editing batches of 30 reels/shorts for international content creators on retainer.',
    businessPathwayUrdu: 'اپنی دکان یا مصنوعات کی پرکشش ویڈیوز بنا کر کسٹمرز بڑھانا۔',
    businessPathwayEn: 'Showcasing your own goods and craft via high-energy video demonstrations.',
    homeWorkPathwayUrdu: 'گھر بیٹھے یوٹیوبرز کی ویڈیوز وصول کر کے ایڈیٹ کر کے واپس بھیجنا۔',
    homeWorkPathwayEn: 'Remote video editing pipeline delivering processed clips from home.',
    onlinePathwayUrdu: 'اپنا ایجوکیشنل یوٹیوب چینل یا فیس بک پیج مونیٹائز کرنا۔',
    onlinePathwayEn: 'Monetizing your own tutorial/faceless channel on social media platforms.',
    localPathwayUrdu: 'مقامی اسکولوں کے فنکشنز اور تقریبات کی ویڈیوز تیار کرنا۔',
    localPathwayEn: 'Editing school sports days, speech contests, and local wedding clips.',
    
    firstPracticalActionUrdu: 'اپنے فون سے ۱۰ سیکنڈ کی ۳ الگ الگ کلپس بنائیں، CapCut میں امپورٹ کر کے فالتو حصہ کاٹیں اور ہلکا بیک گراؤنڈ میوزک لگائیں۔',
    firstPracticalActionEn: 'Shoot three 5-second video clips on your phone, import into CapCut, trim dead air, and add soft background music.',
    nextSkillUrdu: 'یوٹیوب چینل گروتھ',
    nextSkillEn: 'YouTube Channel Growth',
    nextSkillId: 'univ-skill-youtube-creator',
    relatedSkillIds: ['univ-skill-canva-design', 'univ-skill-ai-prompting', 'univ-skill-youtube-creator'],
    
    levels: [
      {
        level: 1,
        levelBadgeUrdu: '🟢 Level 1: بالکل شروع سے',
        levelBadgeEn: '🟢 Level 1: Zero Knowledge',
        titleUrdu: 'ویڈیو کٹنگ، اسپلٹ اور ٹرم',
        titleEn: 'Video Trimming & Splitting',
        descriptionUrdu: 'ویڈیو کا غیر ضروری حصہ نکالنا اور رفتار درست کرنا۔',
        descriptionEn: 'Trimming unwanted pauses and organizing sequence timeline.',
        practicalMilestoneUrdu: 'ایک ۳۰ سیکنڈ کی ویڈیو سے تمام خاموشیاں کاٹ کر صاف کریں۔',
        practicalMilestoneEn: 'Trim all dead silence from a 30-second raw voice recording.',
        estimatedDurationUrdu: '۲ دن',
        estimatedDurationEn: '2 Days'
      },
      {
        level: 2,
        levelBadgeUrdu: '🔵 Level 2: بنیادی مہارت',
        levelBadgeEn: '🔵 Level 2: Foundational',
        titleUrdu: 'میوزک، ساؤنڈ ایفیکٹس اور والیوم بیلنس',
        titleEn: 'Sound Mix & Audio Leveling',
        descriptionUrdu: 'پس منظر کی موسیقی کو آواز سے دھیما رکھنا اور ایفیکٹس لگانا۔',
        descriptionEn: 'Audio ducking, sound effects (whoosh, pop), and voice amplification.',
        practicalMilestoneUrdu: 'ویڈیو کے اہم موڑ پر مناسب ساؤنڈ ایفیکٹ لگائیں۔',
        practicalMilestoneEn: 'Add background music and 3 timed sound effects.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 3,
        levelBadgeUrdu: '🟡 Level 3: درمیانی مہارت',
        levelBadgeEn: '🟡 Level 3: Intermediate',
        titleUrdu: 'آٹو کیپشنز اور اردو متحرک ٹیکسٹ',
        titleEn: 'Auto Captions & Dynamic Urdu Text',
        descriptionUrdu: 'بولے جانے والے الفاظ کو اسکرین پر خوبصورت رنگوں میں دکھانا۔',
        descriptionEn: 'Syncing on-screen animated subtitle text and highlights.',
        practicalMilestoneUrdu: 'ایک ۶۰ سیکنڈ کی ریل پر مکمل کیپشنز لگائیں۔',
        practicalMilestoneEn: 'Add stylized animated captions to a 60-second reel.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 4,
        levelBadgeUrdu: '🟠 Level 4: اعلیٰ مہارت',
        levelBadgeEn: '🟠 Level 4: Advanced',
        titleUrdu: 'بی رول (B-Roll) اور زوم ان/آؤٹ اینیمیشن',
        titleEn: 'B-Roll & Keyframe Animation',
        descriptionUrdu: 'بات کے دوران متعلقہ تصاویر اور ویڈیو کلپس لگانا تاکہ ناظرین بور نہ ہوں۔',
        descriptionEn: 'Overlaying relevant stock imagery, zoom-cuts, and visual punch-ins.',
        practicalMilestoneUrdu: 'ایک ویڈیو پر ۵ جگہوں پر متعلقہ تصویر/ویڈیو اوورلے کریں۔',
        practicalMilestoneEn: 'Produce a reel with 5 narrative B-roll overlays.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 5,
        levelBadgeUrdu: '🔴 Level 5: پیشہ ورانہ سطح',
        levelBadgeEn: '🔴 Level 5: Professional',
        titleUrdu: 'مکمل وائرل ریل فارمیٹ اور کلائنٹ ڈیلیوری',
        titleEn: 'Viral Retention Formatting & Master Delivery',
        descriptionUrdu: 'پہلے ۳ سیکنڈ کا پرکشش ہک اور مسلسل انگیجمنٹ والی ویڈیو بنانا۔',
        descriptionEn: 'Delivering retention-optimized vertical clips ready for TikTok and Instagram.',
        practicalMilestoneUrdu: '۳ مکمل پیشہ ورانہ ریلز کا ایک پورٹ فولیو لنک بنائیں۔',
        practicalMilestoneEn: 'Compile a 3-reel showcase portfolio to send to potential clients.',
        estimatedDurationUrdu: '۴ دن',
        estimatedDurationEn: '4 Days'
      }
    ],
    searchKeywords: ['ویڈیو ایڈیٹنگ', 'کیپ کٹ', 'ریلز', 'شارٹس', 'ٹک ٹاک', 'ویڈیو ایڈیٹر', 'video editing', 'capcut', 'vn', 'reels', 'shorts', 'tiktok editor']
  },

  // 5. YouTube Creator
  {
    id: 'univ-skill-youtube-creator',
    slug: 'youtube-channel-creator',
    titleUrdu: 'یوٹیوب چینل بنانا اور گرو کرنا',
    titleEn: 'YouTube Channel Creation & Growth',
    taglineUrdu: 'مفید اور معلوماتی یوٹیوب چینل شروع کرنا، ٹائٹل، تھمب نیلز، SEO اور آمدنی کے ذرائع',
    taglineEn: 'Launch an impactful YouTube channel, master SEO, retention scripting, and monetization',
    categoryId: 'cat-5-youtube',
    subcategoryId: 'sub-yt-niche',
    level: 1,
    levelTitleUrdu: 'لیول ۱: بالکل شروع سے (صفر معلومات)',
    levelTitleEn: 'Level 1: Absolute Beginner',
    timeToLearnDays: 14,
    timeDisplayUrdu: '۱۴ سے ۲۱ دن (روزانہ ۳۰ منٹ)',
    timeDisplayEn: '14-21 days (30 mins daily)',
    requiredResourcesUrdu: ['سمارٹ فون', 'انٹرنیٹ', 'مائیکروفون / ہینڈز فری'],
    requiredResourcesEn: ['Smartphone', 'Internet', 'Handsfree/Mic'],
    isMobileFriendly: true,
    isComputerRequired: false,
    isHomeBased: true,
    isOnlineWork: true,
    isOfflineLocal: false,
    isLowCost: true,
    isQuickLearn: false,
    targetAudience: ['youth', 'students', 'all', 'women', 'village', 'city'],
    primaryEarningPaths: ['freelancing', 'home', 'business', 'online_selling'],
    iconName: 'PlaySquare',
    coverGradient: 'from-red-600 via-rose-950 to-slate-900',
    badgeUrdu: '📈 لانگ ٹرم اثاثہ',
    badgeEn: '📈 Long-Term Digital Asset',
    
    whatIsThisUrdu: 'یوٹیوب پر اپنا چینل بنا کر مفید معلومات، ہنر، کہانیاں یا وگز کی ویڈیوز اپلوڈ کرنا اور مسلسل ناظرین بنا کر باوقار آمدنی اور پہچان حاصل کرنا۔',
    whatIsThisEn: 'Building a sustainable YouTube channel around your authentic craft or knowledge, optimizing metadata, and generating passive income over time.',
    whoIsItForUrdu: 'اساتذہ، کہانی کار، کاریگر، طلبہ اور ہر وہ فرد جو دوسروں کو کچھ سکھانا یا بتانا چاہتا ہے۔',
    whoIsItForEn: 'Educators, storytellers, craftsmen, students, and subject experts.',
    canLearnFromMobileUrdu: 'جی ہاں، یوٹیوب اسٹوڈیو ایپ سے پورا چینل موبائل سے چلتا ہے۔',
    canLearnFromMobileEn: 'Yes, YouTube Studio mobile app gives complete administrative control.',
    isComputerNecessaryUrdu: 'نہیں، موبائل پر ریکارڈنگ، ایڈیٹنگ اور اپلوڈنگ سب ہو جاتا ہے۔',
    isComputerNecessaryEn: 'No, modern creators record, edit, and publish purely via phone.',
    howMuchTimeUrdu: '۱۴ سے ۲۱ دن میں بنیادی چینل اور پہلی ۳ ویڈیوز مکمل ہو جاتی ہیں۔',
    howMuchTimeEn: '14 to 21 days to set up channel and publish initial batch of videos.',
    whatItemsNeededUrdu: ['سمارٹ فون', 'شور سے پاک جگہ', 'یوٹیوب ایپ'],
    whatItemsNeededEn: ['Smartphone', 'Quiet room', 'YouTube Studio app'],
    whereIsItUsefulUrdu: ['ذاتی پہچان اور عزت بنانے میں', 'اپنے کاروبار اور پراڈکٹس کو مفت پروموٹ کرنے میں', 'ایڈسینس اور سپانسر شپس سے آمدنی میں', 'معاشرے میں خیر پھیلانے میں'],
    whereIsItUsefulEn: ['Personal authority & reach', 'Promoting own products for free', 'AdSense & sponsorship revenue', 'Community education'],
    
    jobPathwayUrdu: 'یوٹیوب چینل مینیجر اور مواد کی ترتیب کے طور پر۔',
    jobPathwayEn: 'Channel Manager and Content Coordinator for established brands.',
    freelancePathwayUrdu: 'دوسروں کے چینلز کے لیے تھمب نیلز، SEO اور ویڈیو اپلوڈنگ سروسز۔',
    freelancePathwayEn: 'Offering YouTube SEO and thumbnail optimization gigs.',
    businessPathwayUrdu: 'چینل کے ناظرین کو اپنی پراڈکٹس اور کورسز فروخت کرنا۔',
    businessPathwayEn: 'Converting channel subscribers into buyers of physical or digital goods.',
    homeWorkPathwayUrdu: 'گھر کے ایک پرسکون کونے سے معلوماتی ویڈیوز تیار کرنا۔',
    homeWorkPathwayEn: 'Recording and editing high-retention educational videos from home.',
    onlinePathwayUrdu: 'گوگل ایڈسینس کے ذریعے ہر ماہ براہ راست بینک اکاؤنٹ میں آمدنی۔',
    onlinePathwayEn: 'Direct monthly Google AdSense wire transfers to Pakistani bank accounts.',
    localPathwayUrdu: 'مقامی علاقے کے مسائل اور ہنر کی معلوماتی ویڈیوز بنانا۔',
    localPathwayEn: 'Highlighting local craftsmanship and regional tourism attractions.',
    
    firstPracticalActionUrdu: 'اپنے دلچسپی کے موضوع پر ۳ منٹ کی ایک سادہ ویڈیو موبائل پر ریکارڈ کریں اور دوستوں سے فیڈ بیک لیں۔',
    firstPracticalActionEn: 'Record a simple 3-minute video on a topic you love and review audio clarity.',
    nextSkillUrdu: 'ڈیجیٹل مارکیٹنگ و اشتہارات',
    nextSkillEn: 'Digital Marketing & Ads',
    nextSkillId: 'univ-skill-digital-marketing',
    relatedSkillIds: ['univ-skill-video-editing', 'univ-skill-canva-design', 'univ-skill-ai-prompting'],
    
    levels: [
      {
        level: 1,
        levelBadgeUrdu: '🟢 Level 1: بالکل شروع سے',
        levelBadgeEn: '🟢 Level 1: Zero Knowledge',
        titleUrdu: 'چینل کی سیٹنگز اور برانڈنگ',
        titleEn: 'Channel Setup & Clean Branding',
        descriptionUrdu: 'لوگو، چینل بینر اور معلوماتی ڈسکرپشن لکھنا۔',
        descriptionEn: 'Configuring channel handle, logo, banner, and mission description.',
        practicalMilestoneUrdu: 'اپنا یوٹیوب چینل بنا کر لوگو اور بینر لگائیں۔',
        practicalMilestoneEn: 'Set up a clean YouTube channel with avatar and banner.',
        estimatedDurationUrdu: '۲ دن',
        estimatedDurationEn: '2 Days'
      },
      {
        level: 2,
        levelBadgeUrdu: '🔵 Level 2: بنیادی مہارت',
        levelBadgeEn: '🔵 Level 2: Foundational',
        titleUrdu: 'آواز کی کوالٹی اور روشنی',
        titleEn: 'Audio Clarity & Lighting Basics',
        descriptionUrdu: 'صاف آواز کے لیے مائیک اور چہرے پر مناسب روشنی کا انتظام۔',
        descriptionEn: 'Noise-free voice capture and daylight face illumination.',
        practicalMilestoneUrdu: 'ایک ویڈیو بالکل صاف آواز کے ساتھ ریکارڈ کریں۔',
        practicalMilestoneEn: 'Record a crisp, echo-free 3-minute voiceover clip.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 3,
        levelBadgeUrdu: '🟡 Level 3: درمیانی مہارت',
        levelBadgeEn: '🟡 Level 3: Intermediate',
        titleUrdu: 'کلک ایبل تھمب نیل اور پرکشش ٹائٹل',
        titleEn: 'Click-Worthy Thumbnail & Titles',
        descriptionUrdu: 'لوگوں کو ویڈیو کھولنے پر مجبور کرنے والا واضح عنوان اور تھمب نیل۔',
        descriptionEn: 'Designing high-contrast thumbnails with curiosity-driven titles.',
        practicalMilestoneUrdu: 'کینوا پر ایک ایسا تھمب نیل بنائیں جو دور سے پڑھا جا سکے۔',
        practicalMilestoneEn: 'Create a thumbnail readable even on small phone screens.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 4,
        levelBadgeUrdu: '🟠 Level 4: اعلیٰ مہارت',
        levelBadgeEn: '🟠 Level 4: Advanced',
        titleUrdu: 'یوٹیوب SEO اور سرچ رینکنگ',
        titleEn: 'YouTube SEO & Search Discovery',
        descriptionUrdu: 'ٹیگز، ڈسکرپشن اور چیپٹرز لگا کر ویڈیو کو سرچ میں اوپر لانا۔',
        descriptionEn: 'Writing keyword-rich descriptions and chapters for search intent.',
        practicalMilestoneUrdu: 'اپنی ویڈیو پر مکمل SEO اور ٹائم اسٹیمپ لاگو کریں۔',
        practicalMilestoneEn: 'Publish a fully SEO-optimized video with chapters and tags.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 5,
        levelBadgeUrdu: '🔴 Level 5: پیشہ ورانہ سطح',
        levelBadgeEn: '🔴 Level 5: Professional',
        titleUrdu: 'اینالیٹکس ریڈنگ اور آمدنی کا نظام',
        titleEn: 'Analytics Insights & Multiple Revenue Streams',
        descriptionUrdu: 'واچ ٹائم، آڈینس ریٹینشن اور مونیٹائزیشن پالیسی کی تکمیل۔',
        descriptionEn: 'Analyzing audience retention graphs and scaling beyond AdSense.',
        practicalMilestoneUrdu: 'مسلسل ۱۰ ویڈیوز کا شیڈول بنا کر پہلی کامیابی حاصل کریں۔',
        practicalMilestoneEn: 'Execute a consistent 10-video publishing cadence.',
        estimatedDurationUrdu: '۵ دن',
        estimatedDurationEn: '5 Days'
      }
    ],
    searchKeywords: ['یوٹیوب', 'یوٹیوبر', 'چینل', 'تھمب نیل', 'ایڈسینس', 'کمائی', 'youtube', 'channel', 'adsense', 'video creator', 'youtube seo']
  },

  // 6. Sewing & Tailoring
  {
    id: 'univ-skill-sewing-tailoring',
    slug: 'sewing-tailoring-craft',
    titleUrdu: 'سلائی، کٹنگ اور ڈریس ڈیزائننگ',
    titleEn: 'Sewing, Pattern Cutting & Tailoring',
    taglineUrdu: 'سلائی مشین چلانا، کپڑوں کی ناپ اور کٹنگ، گلے کے ڈیزائن اور گھر سے بوتیک کا آغاز',
    taglineEn: 'Master fabric cutting, pattern drafting, machine stitching, and launch a home boutique',
    categoryId: 'cat-25-sewing-embroidery',
    subcategoryId: 'sub-sew-cutting',
    level: 1,
    levelTitleUrdu: 'لیول ۱: بالکل شروع سے (صفر معلومات)',
    levelTitleEn: 'Level 1: Absolute Beginner',
    timeToLearnDays: 30,
    timeDisplayUrdu: '۳۰ سے ۴۵ دن (روزانہ ۴۵ منٹ)',
    timeDisplayEn: '30-45 days (45 mins daily)',
    requiredResourcesUrdu: ['سلائی مشین (سادہ یا موٹر)', 'انچی ٹیپ اور کینچی', 'پرانا کپڑا برائے مشق'],
    requiredResourcesEn: ['Sewing machine', 'Measuring tape & shears', 'Practice fabric'],
    isMobileFriendly: false,
    isComputerRequired: false,
    isHomeBased: true,
    isOnlineWork: false,
    isOfflineLocal: true,
    isLowCost: true,
    isQuickLearn: false,
    targetAudience: ['women', 'youth', 'all', 'village', 'city'],
    primaryEarningPaths: ['home', 'local_service', 'business', 'online_selling'],
    iconName: 'Scissors',
    coverGradient: 'from-pink-700 via-rose-950 to-slate-900',
    badgeUrdu: '🧵 باوقار گھریلو ہنر',
    badgeEn: '🧵 Dignified Home Craft',
    
    whatIsThisUrdu: 'کپڑوں کی درست پیمائش لے کر قمیض، شلوار، بچوں کے سوٹ اور فینسی ملبوسات کی کٹنگ اور صفائی سے سلائی کرنے کا مکمل فن۔',
    whatIsThisEn: 'The traditional and modern art of precise body measurement, fabric drafting, and clean garment stitching.',
    whoIsItForUrdu: 'خواتین، گھریلو افراد، درزی حضرات اور فیشن میں دلچسپی رکھنے والے افراد۔',
    whoIsItForEn: 'Women, homemakers, aspiring tailors, and fashion creators.',
    canLearnFromMobileUrdu: 'موبائل پر ویڈیو اسباق دیکھ کر گھر کی مشین پر مشق کریں۔',
    canLearnFromMobileEn: 'Learn concepts via mobile video lessons while practicing on physical machine.',
    isComputerNecessaryUrdu: 'بالکل نہیں، صرف سلائی مشین اور کینچی درکار ہے۔',
    isComputerNecessaryEn: 'Not at all. Physical tools (machine & shears) are all you need.',
    howMuchTimeUrdu: '۳۰ سے ۴۵ دن میں خود اپنے اور بچوں کے کپڑے سینے کے قابل ہو جائیں گے۔',
    howMuchTimeEn: '30 to 45 days to stitch complete outfits independently.',
    whatItemsNeededUrdu: ['سلائی مشین', 'کینچی اور انچی ٹیپ', 'دھاگے اور سوئیاں'],
    whatItemsNeededEn: ['Sewing machine', 'Shears and measuring tape', 'Threads and needles'],
    whereIsItUsefulUrdu: ['اپنے اور گھر والوں کے کپڑے سینے میں (بچت)', 'محلے والوں کے کپڑے سی کر باوقار آمدنی میں', 'آن لائن فیس بک/واٹس ایپ پر ڈریس بیچنے میں', 'بوتیک اور فیکٹریوں میں'],
    whereIsItUsefulEn: ['Household clothing cost savings', 'Neighborhood custom tailoring income', 'Selling tailored dresses online', 'Boutique garment production'],
    
    jobPathwayUrdu: 'بوتیکس، گارمنٹ فیکٹریوں اور درزی کی دکانوں پر کٹر یا ماسٹر ٹیلر۔',
    jobPathwayEn: 'Master Tailor or Cutter at boutiques and garment manufacturing units.',
    freelancePathwayUrdu: 'آن لائن کسٹم کپڑے سی کر کورئیر کے ذریعے ڈلیور کرنا۔',
    freelancePathwayEn: 'Taking custom size orders online and dispatching via COD parcels.',
    businessPathwayUrdu: 'اپنا گھریلو بوتیک اور سلے سلائے کپڑوں کا کام شروع کرنا۔',
    businessPathwayEn: 'Launching a dedicated home boutique with ready-to-wear seasonal lines.',
    homeWorkPathwayUrdu: 'گھر کے کمرے میں بیٹھ کر عزت سے روزانہ ۲ سے ۳ سوٹ سی کر کمانا۔',
    homeWorkPathwayEn: 'Stitching 2-3 suits daily from the comfort and privacy of your home.',
    onlinePathwayUrdu: 'واٹس ایپ اور فیس بک پر اپنے سلائی کے نمونے دکھا کر آرڈرز لینا۔',
    onlinePathwayEn: 'Sharing photo portfolios of finished cuts on WhatsApp status to get booked.',
    localPathwayUrdu: 'محلے کی خواتین اور بچوں کے لیے عید اور سیزنل سلائی سروس۔',
    localPathwayEn: 'Peak Eid and wedding seasonal stitching for neighborhood families.',
    
    firstPracticalActionUrdu: 'کسی پرانے کپڑے پر انچی ٹیپ سے ۵ سیدھی لکیریں لگائیں اور مشین سے بالکل سیدھا ٹانکا لگانے کی مشق کریں۔',
    firstPracticalActionEn: 'Draw 5 straight lines on scrap cloth with chalk and practice sewing perfectly straight seams.',
    nextSkillUrdu: 'آن لائن کپڑے فروخت کرنا (سوشل کامرس)',
    nextSkillEn: 'Online Apparel Selling',
    nextSkillId: 'univ-skill-online-selling',
    relatedSkillIds: ['univ-skill-online-selling', 'univ-skill-canva-design', 'univ-skill-mob-digital'],
    
    levels: [
      {
        level: 1,
        levelBadgeUrdu: '🟢 Level 1: بالکل شروع سے',
        levelBadgeEn: '🟢 Level 1: Zero Knowledge',
        titleUrdu: 'مشین کا تعارف اور سیدھا ٹانکا',
        titleEn: 'Machine Setup & Straight Seams',
        descriptionUrdu: 'دھاگہ ڈالنا، بوبن بھرنا اور سیدھی سلائی چلانا۔',
        descriptionEn: 'Threading needle, winding bobbin, and practicing straight lines.',
        practicalMilestoneUrdu: 'پرانے کپڑے پر ۴ رخ کی چوکور سلائی صاف لگائیں۔',
        practicalMilestoneEn: 'Stitch a clean square boundary on scrap cloth.',
        estimatedDurationUrdu: '۵ دن',
        estimatedDurationEn: '5 Days'
      },
      {
        level: 2,
        levelBadgeUrdu: '🔵 Level 2: بنیادی مہارت',
        levelBadgeEn: '🔵 Level 2: Foundational',
        titleUrdu: 'ناپ لینا اور سادہ شلوار کی کٹنگ',
        titleEn: 'Body Sizing & Trouser/Shalwar Cut',
        descriptionUrdu: 'درست لمبائی، گھیر، آسن اور پانچے کا ناپ لے کر کپڑا کاٹنا۔',
        descriptionEn: 'Taking length/width measurements and cutting a standard shalwar.',
        practicalMilestoneUrdu: 'ایک سادہ شلوار کاٹ کر مکمل سلائی کریں۔',
        practicalMilestoneEn: 'Cut and complete a full basic shalwar.',
        estimatedDurationUrdu: '۷ دن',
        estimatedDurationEn: '7 Days'
      },
      {
        level: 3,
        levelBadgeUrdu: '🟡 Level 3: درمیانی مہارت',
        levelBadgeEn: '🟡 Level 3: Intermediate',
        titleUrdu: 'سادہ قمیض کی کٹنگ، گلا اور بازو',
        titleEn: 'Shirt Cutting, Neckline & Sleeves',
        descriptionUrdu: 'تیرَہ، چھاتی، کمر اور بغل (Armhole) کی کٹنگ اور بکرم کا گلا بنانا۔',
        descriptionEn: 'Armhole curves, chest fitting, and fused buckram neckline finishing.',
        practicalMilestoneUrdu: 'ایک مکمل سادہ قمیض کٹنگ کر کے تیار کریں۔',
        practicalMilestoneEn: 'Cut, stitch, and finish a complete basic shirt.',
        estimatedDurationUrdu: '۸ دن',
        estimatedDurationEn: '8 Days'
      },
      {
        level: 4,
        levelBadgeUrdu: '🟠 Level 4: اعلیٰ مہارت',
        levelBadgeEn: '🟠 Level 4: Advanced',
        titleUrdu: 'فینسی ڈیزائننگ، پائپنگ اور لیس لگانا',
        titleEn: 'Piping, Trims & Fancy Design',
        descriptionUrdu: 'گم سلائی، ڈوری پائپنگ، پلیٹس اور جدید استین کے ڈیزائن۔',
        descriptionEn: 'Concealed piping, pleat styling, and modern sleeve cuffs.',
        practicalMilestoneUrdu: 'ایک فینسی پارٹی سوٹ پائپنگ اور لیس کے ساتھ مکمل کریں۔',
        practicalMilestoneEn: 'Stitch a designer party wear suit with concealed piping.',
        estimatedDurationUrdu: '۸ دن',
        estimatedDurationEn: '8 Days'
      },
      {
        level: 5,
        levelBadgeUrdu: '🔴 Level 5: پیشہ ورانہ سطح',
        levelBadgeEn: '🔴 Level 5: Professional',
        titleUrdu: 'کسٹمر فٹنگ اور بوتیک بزنس مینجمنٹ',
        titleEn: 'Boutique Production & Customer Sizing',
        descriptionUrdu: 'مختلف جسمانی ساخت کے مطابق پرفیکٹ فٹنگ اور آرڈرز مینج کرنا۔',
        descriptionEn: 'Handling diverse body fits, alterations, and managing client deadlines.',
        practicalMilestoneUrdu: '۵ اصلی کلائنٹس کے کپڑے سی کر مطمئن کریں۔',
        practicalMilestoneEn: 'Deliver 5 client garments with zero fitting flaws.',
        estimatedDurationUrdu: '۱۰ دن',
        estimatedDurationEn: '10 Days'
      }
    ],
    searchKeywords: ['سلائی', 'کٹنگ', 'درزی', 'کپڑے سینا', 'بوتیک', 'شلوار قمیض', 'sewing', 'tailoring', 'cutting', 'dress making', 'boutique', 'embroidery']
  },

  // 7. Cooking & Food Business
  {
    id: 'univ-skill-cooking-food',
    slug: 'cooking-and-food-business',
    titleUrdu: 'گھریلو کھانا پکانا اور فوڈ بزنس',
    titleEn: 'Home Cooking & Food Entrepreneurship',
    taglineUrdu: 'صاف ستھرا لذیذ کھانا، دفتری لنچ باکس، بیکنگ، اچار اور مصالحہ جات بنا کر بیچنا',
    taglineEn: 'Prepare hygienic home meals, office lunchboxes, pickles, and baked goods for sale',
    categoryId: 'cat-27-cooking-food-business',
    subcategoryId: 'sub-food-lunchbox',
    level: 1,
    levelTitleUrdu: 'لیول ۱: بالکل شروع سے (صفر معلومات)',
    levelTitleEn: 'Level 1: Absolute Beginner',
    timeToLearnDays: 15,
    timeDisplayUrdu: '۱۵ سے ۲۰ دن (روزانہ ۴۰ منٹ)',
    timeDisplayEn: '15-20 days (40 mins daily)',
    requiredResourcesUrdu: ['گھریلو کچن اور برتن', 'پیکنگ ڈبے / فوڈ کنٹینرز', 'واٹس ایپ برائے آرڈرز'],
    requiredResourcesEn: ['Kitchen & cookware', 'Food-grade packaging', 'WhatsApp for orders'],
    isMobileFriendly: false,
    isComputerRequired: false,
    isHomeBased: true,
    isOnlineWork: false,
    isOfflineLocal: true,
    isLowCost: true,
    isQuickLearn: true,
    targetAudience: ['women', 'youth', 'all', 'city', 'village'],
    primaryEarningPaths: ['home', 'business', 'local_service', 'online_selling'],
    iconName: 'UtensilsCrossed',
    coverGradient: 'from-orange-600 via-red-950 to-slate-900',
    badgeUrdu: '🍲 روزمرہ کی مانگ',
    badgeEn: '🍲 Constant Daily Demand',
    
    whatIsThisUrdu: 'گھر کے کچن میں حفظانِ صحت کے اصولوں کے مطابق معیاری کھانا بنا کر دفاتر، ہاسٹلز اور محلے کے گھروں میں باقاعدہ ڈلیوری کے ذریعے نفع حاصل کرنا۔',
    whatIsThisEn: 'Preparing hygienic, delicious home-cooked meals and launching a tiffin or specialty food enterprise with low startup overhead.',
    whoIsItForUrdu: 'خواتین، گھریلو ککس، فوڈ کے شوقین افراد اور نئے فوڈ انٹرپرینیورز۔',
    whoIsItForEn: 'Homemakers, passionate home cooks, and food entrepreneurs.',
    canLearnFromMobileUrdu: 'ترکیبیں اور پیکنگ آئیڈیاز موبائل سے دیکھیں، کچن میں بنائیں اور واٹس ایپ پر بیچیں۔',
    canLearnFromMobileEn: 'Learn recipes and costing on mobile, cook in kitchen, market via WhatsApp.',
    isComputerNecessaryUrdu: 'بالکل نہیں، کچن کے اوزار اور موبائل کیمرہ کافی ہے۔',
    isComputerNecessaryEn: 'Not at all. Standard kitchen utensils and a phone camera are enough.',
    howMuchTimeUrdu: '۱۵ سے ۲۰ دن میں کوسٹنگ اور باقاعدہ کسٹمرز بننا شروع ہو جاتے ہیں۔',
    howMuchTimeEn: '15 to 20 days to refine menu costing and secure initial subscribers.',
    whatItemsNeededUrdu: ['کچن اور گیس چولہا', 'صاف فوڈ باکس اور لیبلز', 'سپلائی کا طریقہ (بائیک یا خود ڈلیوری)'],
    whatItemsNeededEn: ['Kitchen stove', 'Food-grade containers & labels', 'Delivery method (bike or local pick)'],
    whereIsItUsefulUrdu: ['بینک اور کارپوریٹ دفاتر کے لنچ میں', 'ہاسٹل کے طلبہ اور اکیلے رہنے والے ملازمین میں', 'گھریلو تقریبات اور چھوٹی پارٹیوں میں', 'دیسی مصالحے اور اچار فروخت کرنے میں'],
    whereIsItUsefulEn: ['Corporate office lunch deliveries', 'Hostel students & single workers', 'Home birthday and dinner parties', 'Bottled pickles and organic spice blends'],
    
    jobPathwayUrdu: 'ریسٹورنٹس، ہوٹلوں اور کیٹرنگ سروسز میں شیف یا کچن سپروائزر۔',
    jobPathwayEn: 'Chef or Kitchen Manager at catering services and local cafes.',
    freelancePathwayUrdu: 'آن لائن فوڈ پانڈا ہوم شیف یا کلاؤڈ کچن رجسٹر کرنا۔',
    freelancePathwayEn: 'Listing as an authorized HomeChef on Foodpanda/local food delivery apps.',
    businessPathwayUrdu: 'اپنا مکمل ٹفن سسٹم اور کیٹرنگ وینچر شروع کرنا۔',
    businessPathwayEn: 'Launching a monthly recurring subscription tiffin service.',
    homeWorkPathwayUrdu: 'گھر کے صاف کچن سے روزانہ ۱۰ سے ۱۵ کھانے بنا کر ڈلیور کرنا۔',
    homeWorkPathwayEn: 'Cooking 10-15 hygienic lunch boxes daily from home kitchen.',
    onlinePathwayUrdu: 'فیس بک اور واٹس ایپ فوڈ گروپس میں روزانہ کا مینو شیئر کر کے آرڈرز وصول کرنا۔',
    onlinePathwayEn: 'Posting daily mouth-watering menu videos in local neighborhood groups.',
    localPathwayUrdu: 'محلے کے کلینکس، دکانوں اور دفاتر کو ماہانہ بنیاد پر کھانا پہنچانا۔',
    localPathwayEn: 'Supplying daily lunch to nearby bank branches, clinics, and markets.',
    
    firstPracticalActionUrdu: 'اپنے سب سے پسندیدہ کھانے کا ایک مثالی باکس بنائیں، اس کی پرکشش تصویر لیں اور ۵ جاننے والوں کو ٹیسٹنگ کے لیے بھیج کر رائے لیں۔',
    firstPracticalActionEn: 'Cook a sample lunch box of your specialty dish, take a clean photo, and get feedback from 5 friends.',
    nextSkillUrdu: 'آن لائن سیلنگ اور واٹس ایپ مارکیٹنگ',
    nextSkillEn: 'Online WhatsApp Selling',
    nextSkillId: 'univ-skill-online-selling',
    relatedSkillIds: ['univ-skill-online-selling', 'univ-skill-canva-design', 'univ-skill-mob-digital'],
    
    levels: [
      {
        level: 1,
        levelBadgeUrdu: '🟢 Level 1: بالکل شروع سے',
        levelBadgeEn: '🟢 Level 1: Zero Knowledge',
        titleUrdu: 'حفظانِ صحت، صفائی اور بنیادی کٹنگ',
        titleEn: 'Kitchen Sanitation & Prep Basics',
        descriptionUrdu: 'کچن کی صفائی، ہاتھ دھونا، تیز کٹنگ اور مصالحوں کی پہچان۔',
        descriptionEn: 'Food safety protocols, hygienic prep, knife skills, and spice ratios.',
        practicalMilestoneUrdu: 'مکمل صفائی اور وقت کے ساتھ ۲ بنیادی کھانے تیار کریں۔',
        practicalMilestoneEn: 'Cook 2 standard meals maintaining strict cleanliness standards.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 2,
        levelBadgeUrdu: '🔵 Level 2: بنیادی مہارت',
        levelBadgeEn: '🔵 Level 2: Foundational',
        titleUrdu: 'ذائقہ کا تسلسل اور درست تناسب',
        titleEn: 'Consistent Flavor & Standardization',
        descriptionUrdu: 'ہر بار ایک جیسا شاندار ذائقہ لانے کے لیے پیمائش کا طریقہ۔',
        descriptionEn: 'Standardizing spice spoons and cooking times for repeatable taste.',
        practicalMilestoneUrdu: 'ایک ہی کھانا ۳ الگ الگ دن بنا کر ذائقہ کا تسلسل چیک کریں۔',
        practicalMilestoneEn: 'Cook the same dish on 3 separate days with identical flavor outcome.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 3,
        levelBadgeUrdu: '🟡 Level 3: درمیانی مہارت',
        levelBadgeEn: '🟡 Level 3: Intermediate',
        titleUrdu: 'لاگت اور منافع کا حساب (Costing)',
        titleEn: 'Recipe Costing & Profit Margins',
        descriptionUrdu: 'تیل، گیس، مصالحے اور باکس کی قیمت نکال کر منافع بخش ریٹ طے کرنا۔',
        descriptionEn: 'Calculating per-box ingredient costs, gas, box overhead, and 40% margin.',
        practicalMilestoneUrdu: 'اپنے مینو کے ۵ آئٹمز کی درست کوسٹ شیٹ بنائیں تاکہ نقصان نہ ہو۔',
        practicalMilestoneEn: 'Calculate exact cost-per-plate for 5 menu items.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 4,
        levelBadgeUrdu: '🟠 Level 4: اعلیٰ مہارت',
        levelBadgeEn: '🟠 Level 4: Advanced',
        titleUrdu: 'پیکنگ، درجہ حرارت اور ڈلیوری ٹائمنگ',
        titleEn: 'Food Packaging & Delivery Timing',
        descriptionUrdu: 'کھانا گرم، تازہ اور بغیر گرے کسٹمر تک پہنچانے کی پیکنگ۔',
        descriptionEn: 'Spill-proof foil containers, thermal bags, and prompt 1 PM lunch delivery.',
        practicalMilestoneUrdu: '۵ ٹفن باکسز پیک کر کے ۴۰ منٹ بعد کھول کر معیار چیک کریں۔',
        practicalMilestoneEn: 'Test pack 5 meals and inspect warmth and presentation after 40 mins.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 5,
        levelBadgeUrdu: '🔴 Level 5: پیشہ ورانہ سطح',
        levelBadgeEn: '🔴 Level 5: Professional',
        titleUrdu: 'ماہانہ سبسکرپشن اور کسٹمر لائلٹی',
        titleEn: 'Monthly Subscriptions & Customer Retainers',
        descriptionUrdu: 'ماہانہ ایڈوانس پیمنٹ پر ۱۰ سے ۲۰ مستقل کلائنٹس کا نظام بنانا۔',
        descriptionEn: 'Managing 10-20 recurring monthly lunchbox clients with automated billing.',
        practicalMilestoneUrdu: 'پہلے ۳ باقاعدہ ماہانہ کسٹمرز حاصل کریں۔',
        practicalMilestoneEn: 'Onboard your first 3 recurring monthly office lunch clients.',
        estimatedDurationUrdu: '۴ دن',
        estimatedDurationEn: '4 Days'
      }
    ],
    searchKeywords: ['کھانا پکانا', 'فوڈ بزنس', 'لنچ بکس', 'ٹفن', 'ہوم شیف', 'بیکنگ', 'cooking', 'food business', 'lunchbox', 'tiffin service', 'home chef', 'baking']
  },

  // 8. Solar Energy Systems
  {
    id: 'univ-skill-solar-energy',
    slug: 'solar-energy-technician',
    titleUrdu: 'سولر پینل انسٹالیشن اور فالٹ درستگی',
    titleEn: 'Solar Energy Installation & Troubleshooting',
    taglineUrdu: 'سولر پینلز کا رخ و اینگل، انورٹر کنکشن، بیٹریاں، نیٹ میٹرنگ اور سولر ٹیوب ویل لگانا',
    taglineEn: 'Install solar arrays, configure hybrid inverters, wire battery banks, and service tube wells',
    categoryId: 'cat-35-solar-energy',
    subcategoryId: 'sub-sol-install',
    level: 1,
    levelTitleUrdu: 'لیول ۱: بالکل شروع سے (صفر معلومات)',
    levelTitleEn: 'Level 1: Absolute Beginner',
    timeToLearnDays: 20,
    timeDisplayUrdu: '۲۰ سے ۳۰ دن (روزانہ ۴۵ منٹ)',
    timeDisplayEn: '20-30 days (45 mins daily)',
    requiredResourcesUrdu: ['ملٹی میٹر اور بنیادی اوزار', 'حفاظتی دستانے اور جوتے', 'بنیادی الیکٹریکل سمجھ بوجھ'],
    requiredResourcesEn: ['Multimeter & toolset', 'Safety gloves & boots', 'Basic electrical awareness'],
    isMobileFriendly: false,
    isComputerRequired: false,
    isHomeBased: false,
    isOnlineWork: false,
    isOfflineLocal: true,
    isLowCost: false,
    isQuickLearn: false,
    targetAudience: ['youth', 'all', 'village', 'city'],
    primaryEarningPaths: ['local_service', 'job', 'business'],
    iconName: 'Sun',
    coverGradient: 'from-amber-600 via-yellow-950 to-slate-900',
    badgeUrdu: '☀️ زبردست فیوچر ڈیمانڈ',
    badgeEn: '☀️ High Demand Field',
    
    whatIsThisUrdu: 'بجلی کے بڑھتے بلوں کے حل کے لیے گھروں، دکانوں اور زرعی ٹیوب ویلوں پر سولر پینل، انورٹر اور بیٹریاں لگانے اور ان کی خرابی دور کرنے کی عملی مہارت۔',
    whatIsThisEn: 'The technical craft of sizing, mounting, wiring, and maintaining photovoltaic solar arrays and hybrid inverters for homes and farms.',
    whoIsItForUrdu: 'الیکٹریشنز، فنی کاریگر، کسان اور تکنیکی کام میں دلچسپی رکھنے والے نوجوان۔',
    whoIsItForEn: 'Electricians, technical technicians, farmers, and young tradespeople.',
    canLearnFromMobileUrdu: 'تھیوری اور وائرنگ ڈایاگرام موبائل سے سیکھیں، فیلڈ میں اوزاروں سے پریکٹس کریں۔',
    canLearnFromMobileEn: 'Learn wiring diagrams and calculations on phone; practice hands-on on roofs.',
    isComputerNecessaryUrdu: 'نہیں، ملٹی میٹر اور ٹول کٹ بنیادی ضرورت ہے۔',
    isComputerNecessaryEn: 'No, a digital multimeter and standard hand tools are the primary equipment.',
    howMuchTimeUrdu: '۲۰ سے ۳۰ دن میں سنگل فیز اور ہائبرڈ سسٹم کی انسٹالیشن سمجھ آ جاتی ہے۔',
    howMuchTimeEn: '20 to 30 days to independently handle single-phase and hybrid installations.',
    whatItemsNeededUrdu: ['ڈیجیٹل ملٹی میٹر', 'اسکرو ڈرائیور اور پلاس سیٹ', 'MC4 کرمپنگ ٹول'],
    whatItemsNeededEn: ['Digital multimeter', 'Screwdriver and plier set', 'MC4 crimping tool'],
    whereIsItUsefulUrdu: ['گھروں کی چھتوں پر سولر لگانے میں', 'زرعی ٹیوب ویلوں کو سولر پر منتقل کرنے میں', 'یو پی ایس اور لیتھیم بیٹری کی سیٹنگ میں', 'سولر پینل کی صفائی اور مینٹیننس میں'],
    whereIsItUsefulEn: ['Rooftop residential solar mounts', 'Agricultural solar tube well conversions', 'Lithium battery bank charging', 'Array maintenance & panel washing'],
    
    jobPathwayUrdu: 'سولر کمپنیوں اور انجینئرنگ فرمز میں سولر ٹیکنیشن یا انسٹالر۔',
    jobPathwayEn: 'Solar Installer and Field Technician at renewable energy companies.',
    freelancePathwayUrdu: 'علاقے میں آزاد سولر کنسلٹنٹ اور انسٹالیشن ٹھیکیدار۔',
    freelancePathwayEn: 'Independent solar installation contractor charging per-kilowatt.',
    businessPathwayUrdu: 'سولر پینلز، انورٹرز اور لیتھیم بیٹریوں کی دکان یا ایجنسی۔',
    businessPathwayEn: 'Retail dealership of solar panels, inverters, and mounting frames.',
    homeWorkPathwayUrdu: 'گھریلو سسٹمز کا لوڈ کاؤنٹ کر کے سائزنگ رپورٹ اور کوٹیشن تیار کرنا۔',
    homeWorkPathwayEn: 'Preparing load calculation charts and quotes from home.',
    onlinePathwayUrdu: 'فیس بک پر سولر پراجیکٹس کی ویڈیوز ڈال کر قریبی شہروں سے انسٹالیشن آرڈرز لینا۔',
    onlinePathwayEn: 'Showcasing completed solar installations on Facebook to generate inbound calls.',
    localPathwayUrdu: 'محلے اور گاؤں کے گھروں میں انورٹر فالٹ اور نیٹ میٹرنگ کے کام۔',
    localPathwayEn: 'Troubleshooting inverter fault codes and breaker trips in the local area.',
    
    firstPracticalActionUrdu: 'اپنے گھر کے تمام پنکھے، لائٹس اور فریج کے واٹ لکھیں اور معلوم کریں کہ گھر کا کل لوڈ کتنے کلو واٹ ہے۔',
    firstPracticalActionEn: 'List the wattage of all fans, bulbs, and fridge at home to calculate your total kilowatt load.',
    nextSkillUrdu: 'الیکٹریکل و ہاؤس وائرنگ',
    nextSkillEn: 'Electrical & House Wiring',
    nextSkillId: 'univ-skill-electrical-wiring',
    relatedSkillIds: ['univ-skill-electrical-wiring', 'univ-skill-modern-farming', 'univ-skill-mob-digital'],
    
    levels: [
      {
        level: 1,
        levelBadgeUrdu: '🟢 Level 1: بالکل شروع سے',
        levelBadgeEn: '🟢 Level 1: Zero Knowledge',
        titleUrdu: 'واٹ، وولٹ، ایمپیئر اور سولر بنیادی حساب',
        titleEn: 'Watts, Volts, Amps & Sizing Calculations',
        descriptionUrdu: 'بجلی کے بنیادی اصول اور گھر کے لوڈ کے مطابق پینلز کی گنتی۔',
        descriptionEn: 'Basic electricity math: Watts = Volts x Amps, and panel sizing formulas.',
        practicalMilestoneUrdu: 'کسی ایک کمرے کے لوڈ کے لیے پینلز اور بیٹری کا درست حساب نکالیں۔',
        practicalMilestoneEn: 'Calculate panel and battery capacity required for a 500W room load.',
        estimatedDurationUrdu: '۴ دن',
        estimatedDurationEn: '4 Days'
      },
      {
        level: 2,
        levelBadgeUrdu: '🔵 Level 2: بنیادی مہارت',
        levelBadgeEn: '🔵 Level 2: Foundational',
        titleUrdu: 'پینل کا رخ، زاویہ (Angle) اور اسٹرکچر',
        titleEn: 'South Facing Orientation & Mounting Angles',
        descriptionUrdu: 'پاکستان میں جنوب کی سمت اور گرمیوں سردیوں کے اینگل پر پینل فکس کرنا۔',
        descriptionEn: 'Fixing panels at optimal 25-30 degree south tilt for maximum solar sun hours.',
        practicalMilestoneUrdu: 'کمپاس اور لیول کی مدد سے پینل کا درست رخ متعین کریں۔',
        practicalMilestoneEn: 'Use compass and spirit level to align a mounting stand perfectly south.',
        estimatedDurationUrdu: '۴ دن',
        estimatedDurationEn: '4 Days'
      },
      {
        level: 3,
        levelBadgeUrdu: '🟡 Level 3: درمیانی مہارت',
        levelBadgeEn: '🟡 Level 3: Intermediate',
        titleUrdu: 'سیریز و پیرالل کنکشن اور MC4 جوڑ',
        titleEn: 'Series vs Parallel Strings & MC4 Connectors',
        descriptionUrdu: 'وولٹیج بڑھانے کے لیے سیریز اور ایمپیئر کے لیے پیرالل کنکشن بنانا۔',
        descriptionEn: 'Stringing panels to match inverter MPPT voltage windows safely.',
        practicalMilestoneUrdu: '۴ پینلز کی سیریز بنا کر ملٹی میٹر سے اوپن سرکٹ وولٹ (Voc) ناپیں۔',
        practicalMilestoneEn: 'Crimp MC4 pins and measure Voc string voltage with multimeter.',
        estimatedDurationUrdu: '۴ دن',
        estimatedDurationEn: '4 Days'
      },
      {
        level: 4,
        levelBadgeUrdu: '🟠 Level 4: اعلیٰ مہارت',
        levelBadgeEn: '🟠 Level 4: Advanced',
        titleUrdu: 'ہائبرڈ انورٹر سیٹنگ اور بیٹری پروٹیکشن',
        titleEn: 'Hybrid Inverter Setup & Battery Parameters',
        descriptionUrdu: 'ایس او ایل (SOL/SBU) موڈ، چارجنگ کرنٹ، بریکرز اور لائٹننگ اریسٹر۔',
        descriptionEn: 'Programming inverter priorities, cut-off voltages, DC/AC breakers, and surge protection.',
        practicalMilestoneUrdu: 'ایک انورٹر کی اسکرین پر بیٹری کی قسم اور چارجنگ ایمپیئر سیٹ کریں۔',
        practicalMilestoneEn: 'Configure bulk/float voltage and charging limit on a hybrid inverter.',
        estimatedDurationUrdu: '۴ دن',
        estimatedDurationEn: '4 Days'
      },
      {
        level: 5,
        levelBadgeUrdu: '🔴 Level 5: پیشہ ورانہ سطح',
        levelBadgeEn: '🔴 Level 5: Professional',
        titleUrdu: 'نیٹ میٹرنگ، VFD ٹیوب ویل اور فالٹ ٹربل شوٹنگ',
        titleEn: 'Net Metering, VFD Solar Pumps & Fault Clearance',
        descriptionUrdu: 'گرڈ فیڈ ان، زراعت کے لیے VFD پمپ ڈرائیو اور فالٹ کوڈز کا فوری حل۔',
        descriptionEn: 'Commissioning 3-phase solar tube wells and handling error codes (01-09).',
        practicalMilestoneUrdu: 'ایک مکمل ۵ کلو واٹ سسٹم کی کامیاب وائرنگ اور فالٹ ٹیسٹ مکمل کریں۔',
        practicalMilestoneEn: 'Complete a full live commissioning test of a 5kW solar hybrid system.',
        estimatedDurationUrdu: '۵ دن',
        estimatedDurationEn: '5 Days'
      }
    ],
    searchKeywords: ['سولر', 'سولر پینل', 'انورٹر', 'نیٹ میٹرنگ', 'ٹیوب ویل', 'بیٹری', 'الیکٹریشن', 'solar', 'solar energy', 'inverter', 'tube well', 'lithium battery', 'solar technician']
  },

  // 9. Modern Farming & Agriculture
  {
    id: 'univ-skill-modern-farming',
    slug: 'modern-precision-farming',
    titleUrdu: 'جدید کاشتکاری اور ٹنل فارمنگ',
    titleEn: 'Modern Farming & Tunnel Greenhouses',
    taglineUrdu: 'ٹنل فارمنگ، ڈرپ ایریگیشن، بے موسمی سبزیاں، زمین کی زرخیزی اور کم پانی سے زیادہ پیداوار',
    taglineEn: 'Deploy tunnel greenhouses, drip irrigation, off-season high-margin crops, and organic yields',
    categoryId: 'cat-30-modern-farming',
    subcategoryId: 'sub-mf-tunnel',
    level: 1,
    levelTitleUrdu: 'لیول ۱: بالکل شروع سے (صفر معلومات)',
    levelTitleEn: 'Level 1: Absolute Beginner',
    timeToLearnDays: 25,
    timeDisplayUrdu: '۲۵ سے ۳۵ دن (روزانہ ۴۰ منٹ)',
    timeDisplayEn: '25-35 days (40 mins daily)',
    requiredResourcesUrdu: ['کاشت کے لیے زمین یا کچن پلاٹ', 'پانی کا ذریعہ', 'بنیادی زرعی اوزار'],
    requiredResourcesEn: ['Farmland or backyard patch', 'Water source', 'Basic farm tools'],
    isMobileFriendly: false,
    isComputerRequired: false,
    isHomeBased: false,
    isOnlineWork: false,
    isOfflineLocal: true,
    isLowCost: false,
    isQuickLearn: false,
    targetAudience: ['village', 'youth', 'all'],
    primaryEarningPaths: ['business', 'local_service', 'online_selling'],
    iconName: 'Sprout',
    coverGradient: 'from-teal-700 via-emerald-950 to-slate-900',
    badgeUrdu: '🌱 دیہات و زراعت کی طاقت',
    badgeEn: '🌱 Agricultural Wealth',
    
    whatIsThisUrdu: 'روایتی کاشتکاری کے بجائے جدید طریقوں (جیسے بانس کے ٹنل، ڈرپ پائپ اور ملچنگ) سے کم رقبے اور کم پانی میں ۳ سے ۵ گنا زیادہ منافع بخش سبزیاں اگانا۔',
    whatIsThisEn: 'Transitioning from flood irrigation to high-efficiency polytunnel farming and precision drip fertigation for high-value off-season crops.',
    whoIsItForUrdu: 'کسان، دیہات کے نوجوان، زمیندار اور زرعی بزنس شروع کرنے والے افراد۔',
    whoIsItForEn: 'Farmers, rural youth, landowners, and agricultural entrepreneurs.',
    canLearnFromMobileUrdu: 'ویڈیوز اور کھاد کی شیڈولنگ موبائل سے سیکھیں اور کھیت میں عملی عمل کریں۔',
    canLearnFromMobileEn: 'Follow climate calendars and fertilizer dosing on mobile while tending crops.',
    isComputerNecessaryUrdu: 'نہیں، زمین اور زرعی سامان بنیادی اثاثہ ہے۔',
    isComputerNecessaryEn: 'No, physical soil, seeds, and irrigation lines are the medium.',
    howMuchTimeUrdu: '۲۵ سے ۳۵ دن میں مکمل سیزنل منصوبہ بندی اور پودوں کی پرورش سمجھ آ جاتی ہے۔',
    howMuchTimeEn: '25 to 35 days to master full crop cycle planning and pest prevention.',
    whatItemsNeededUrdu: ['بیج اور کھاد', 'ڈرپ پائپ یا ٹنل پولی تھین شیٹ', 'اسپرے مشین'],
    whatItemsNeededEn: ['Quality seeds & compost', 'Drip lines / tunnel plastic sheets', 'Hand sprayer'],
    whereIsItUsefulUrdu: ['بے موسمی کھیرے، ٹماٹر اور شملہ مرچ اگانے میں', 'پانی کی ۸۰٪ بچت کے ساتھ بنجر رقبہ آباد کرنے میں', 'شہر کی منڈی میں مہنگے داموں سبزیاں سپلائی کرنے میں', 'کچن گارڈننگ اور گھریلو خوراک میں'],
    whereIsItUsefulEn: ['Off-season greenhouse cucumber & bell peppers', 'Cultivating arid land with 80% water savings', 'Direct farm-to-city wholesale supply', 'Nutrient-rich household food security'],
    
    jobPathwayUrdu: 'بڑے زرعی فارمز اور گرین ہاؤس کمپنیوں میں فارم سپروائزر یا مینیجر۔',
    jobPathwayEn: 'Farm Manager or Tunnel Agronomist at commercial agribusiness estates.',
    freelancePathwayUrdu: 'کسانوں کو ڈرپ ایریگیشن اور ٹنل لگانے کی کنسلٹنسی سروس۔',
    freelancePathwayEn: 'Consulting local growers on tunnel installation and fertilizer schedules.',
    businessPathwayUrdu: 'اپنے ایک یا دو ایکڑ رقبے پر ٹنل فارمنگ کر کے لاکھوں کا سالانہ منافع۔',
    businessPathwayEn: 'Operating high-density polytunnel vegetable farming enterprise.',
    homeWorkPathwayUrdu: 'چھت یا صحن میں ڈرپ سسٹم لگا کر خالص نامیاتی سبزیاں اگانا۔',
    homeWorkPathwayEn: 'Backyard organic vegetable farming and microgreen cultivation.',
    onlinePathwayUrdu: 'فارم کی تازہ آرگینک سبزیاں واٹس ایپ گروپس کے ذریعے شہروں میں ڈلیور کرنا۔',
    onlinePathwayEn: 'Direct-to-consumer farm-fresh box delivery via social media orders.',
    localPathwayUrdu: 'مقامی سبزی منڈی میں عام سبزی سے ۲ ہفتے پہلے اپنی فصل لا کر اونچے دام لینا۔',
    localPathwayEn: 'Commanding early-market premium pricing at regional vegetable mandis.',
    
    firstPracticalActionUrdu: 'ایک چھوٹے گملے یا کیاری میں ٹماٹر کے بیج لگائیں اور نمی برقرار رکھنے کے لیے اوپر ہلکی ملچنگ (گھاس یا پلاسٹک) رکھیں۔',
    firstPracticalActionEn: 'Sow tomato seeds in a small tray, cover with light mulch, and observe germination in 5 days.',
    nextSkillUrdu: 'سولر ٹیوب ویل اور انرجی مینجمنٹ',
    nextSkillEn: 'Solar Tube Well & Energy Management',
    nextSkillId: 'univ-skill-solar-energy',
    relatedSkillIds: ['univ-skill-solar-energy', 'univ-skill-online-selling', 'univ-skill-mob-digital'],
    
    levels: [
      {
        level: 1,
        levelBadgeUrdu: '🟢 Level 1: بالکل شروع سے',
        levelBadgeEn: '🟢 Level 1: Zero Knowledge',
        titleUrdu: 'زمین کا ٹیسٹ اور بیج کی تیاری (پنیری)',
        titleEn: 'Soil Health & Nursery Seedbed',
        descriptionUrdu: 'گوبر کھاد کا مکسچر اور ٹرے میں صحتمند پنیری اگانا۔',
        descriptionEn: 'Compost enriched potting soil and nursery tray seedling propagation.',
        practicalMilestoneUrdu: 'نرسری ٹرے میں ۵۰ بیج کامیابی سے اگائیں۔',
        practicalMilestoneEn: 'Sprout 50 healthy vegetable seedlings in a nursery tray.',
        estimatedDurationUrdu: '۵ دن',
        estimatedDurationEn: '5 Days'
      },
      {
        level: 2,
        levelBadgeUrdu: '🔵 Level 2: بنیادی مہارت',
        levelBadgeEn: '🔵 Level 2: Foundational',
        titleUrdu: 'ڈرپ ایریگیشن پائپ اور ملچنگ شیٹ',
        titleEn: 'Drip Line Layout & Plastic Mulching',
        descriptionUrdu: 'زمین پر وٹیں بنانا، ڈرپ پائپ بچھانا اور کالی ملچنگ شیٹ لگانا۔',
        descriptionEn: 'Bed formation, laying drip tape, and black plastic mulching for weed suppression.',
        practicalMilestoneUrdu: 'ایک کیاری پر ڈرپ سسٹم لگا کر پانی کا یکساں اخراج چیک کریں۔',
        practicalMilestoneEn: 'Install a 10-meter drip lateral and verify uniform emitter flow.',
        estimatedDurationUrdu: '۶ دن',
        estimatedDurationEn: '6 Days'
      },
      {
        level: 3,
        levelBadgeUrdu: '🟡 Level 3: درمیانی مہارت',
        levelBadgeEn: '🟡 Level 3: Intermediate',
        titleUrdu: 'بانس یا لوہے کے پائپ کا لو-ٹنل بنانا',
        titleEn: 'Low-Tunnel & Walk-In Tunnel Construction',
        descriptionUrdu: 'پلاسٹک پولی تھین شیٹ سے سردی اور کورے سے پودوں کو بچانا۔',
        descriptionEn: 'Bending conduit pipes/bamboo arches and securing transparent UV sheeting.',
        practicalMilestoneUrdu: 'ایک چھوٹا ٹنل فریم تیار کر کے شیٹ فکس کریں۔',
        practicalMilestoneEn: 'Construct a protective plastic arch tunnel over a practice bed.',
        estimatedDurationUrdu: '۶ دن',
        estimatedDurationEn: '6 Days'
      },
      {
        level: 4,
        levelBadgeUrdu: '🟠 Level 4: اعلیٰ مہارت',
        levelBadgeEn: '🟠 Level 4: Advanced',
        titleUrdu: 'پودے کی ٹریننگ، کٹائی (Pruning) اور فرٹیگیشن',
        titleEn: 'Plant Pruning, Trellising & Fertigation',
        descriptionUrdu: 'رسی کے ساتھ پودے کو اوپر چڑھانا اور ڈرپ میں گھلنشیل کھاد دینا۔',
        descriptionEn: 'String trellising, lateral sucker pruning, and soluble NPK fertigation.',
        practicalMilestoneUrdu: 'پودوں کو رسی سے باندھ کر غیر ضروری شاخیں صاف کریں۔',
        practicalMilestoneEn: 'Trellis 10 tomato plants and prune non-productive suckers.',
        estimatedDurationUrdu: '۶ دن',
        estimatedDurationEn: '6 Days'
      },
      {
        level: 5,
        levelBadgeUrdu: '🔴 Level 5: پیشہ ورانہ سطح',
        levelBadgeEn: '🔴 Level 5: Professional',
        titleUrdu: 'بیماریوں کا تدارک اور منڈی میں سپلائی چین',
        titleEn: 'IPM Disease Control & Market Timing',
        descriptionUrdu: 'پھپھوندی اور کیڑوں کا تدارک اور درست وقت پر تڑائی کر کے منڈی لے جانا۔',
        descriptionEn: 'Organic bio-fungicide sprays, grade-A sorting, and direct vendor contracts.',
        practicalMilestoneUrdu: 'پہلی مکمل فصل کی تڑائی، گریڈنگ اور فروخت کا ریکارڈ مکمل کریں۔',
        practicalMilestoneEn: 'Harvest, grade, pack, and log sales from a complete test cycle.',
        estimatedDurationUrdu: '۷ دن',
        estimatedDurationEn: '7 Days'
      }
    ],
    searchKeywords: ['کاشتکاری', 'زراعت', 'ٹنل فارمنگ', 'ڈرپ ایریگیشن', 'سبزیاں', 'کسان', 'گاؤں', 'farming', 'agriculture', 'tunnel farming', 'drip irrigation', 'crops', 'kisan']
  },

  // 10. Social Media & Online Selling
  {
    id: 'univ-skill-online-selling',
    slug: 'online-selling-social-commerce',
    titleUrdu: 'آن لائن فروخت اور کیش آن ڈلیوری (COD)',
    titleEn: 'Social Commerce & Cash on Delivery (COD)',
    taglineUrdu: 'فیس بک، واٹس ایپ اور دراز پر مصنوعات بیچنا، کورئیر اکاؤنٹ اور گاہک داری',
    taglineEn: 'Sell physical goods via WhatsApp & Facebook Marketplace with COD courier logistics',
    categoryId: 'cat-18-online-selling',
    subcategoryId: 'sub-sell-cod',
    level: 1,
    levelTitleUrdu: 'لیول ۱: بالکل شروع سے (صفر معلومات)',
    levelTitleEn: 'Level 1: Absolute Beginner',
    timeToLearnDays: 10,
    timeDisplayUrdu: '۱۰ سے ۱۴ دن (روزانہ ۳۰ منٹ)',
    timeDisplayEn: '10-14 days (30 mins daily)',
    requiredResourcesUrdu: ['سمارٹ فون', 'واٹس ایپ بزنس ایپ', 'شناختی کارڈ برائے کورئیر پورٹل'],
    requiredResourcesEn: ['Smartphone', 'WhatsApp Business', 'CNIC for courier portal'],
    isMobileFriendly: true,
    isComputerRequired: false,
    isHomeBased: true,
    isOnlineWork: true,
    isOfflineLocal: true,
    isLowCost: true,
    isQuickLearn: true,
    targetAudience: ['all', 'women', 'youth', 'students', 'city', 'village'],
    primaryEarningPaths: ['online_selling', 'business', 'home', 'freelancing'],
    iconName: 'Package',
    coverGradient: 'from-pink-700 via-rose-950 to-slate-900',
    badgeUrdu: '📦 فوری نقد آمدنی',
    badgeEn: '📦 Rapid Cash Conversion',
    
    whatIsThisUrdu: 'کسی بھی چیز (کپڑے، جوتے، گھریلو اشیاء، شہد، مصالحے) کی تصاویر موبائل پر لگا کر پورے پاکستان میں کسٹمرز کو بیچنا اور کورئیر والے کے ذریعے نقد رقم وصول کرنا۔',
    whatIsThisEn: 'Listing physical products on social platforms, converting chat leads, and shipping parcels nationwide via Cash on Delivery courier accounts.',
    whoIsItForUrdu: 'خواتین، دکاندار، مینوفیکچررز، طلبہ اور گھریلو کاریگر۔',
    whoIsItForEn: 'Homemakers, retailers, local artisans, students, and home manufacturers.',
    canLearnFromMobileUrdu: 'جی ہاں، ۹۹٪ آن لائن سیلنگ صرف موبائل فون سے چلائی جاتی ہے۔',
    canLearnFromMobileEn: 'Yes, 99% of social commerce operations run directly on smartphones.',
    isComputerNecessaryUrdu: 'نہیں، موبائل پر تمام کورئیر پورٹلز اور واٹس ایپ کیٹلاگ بہترین کام کرتے ہیں۔',
    isComputerNecessaryEn: 'No, courier apps and WhatsApp Business are fully mobile native.',
    howMuchTimeUrdu: '۱۰ سے ۱۴ دن میں پہلا پارسل بک کرنے کا طریقہ سمجھ آ جاتا ہے۔',
    howMuchTimeEn: '10 to 14 days to set up catalog, courier portal, and ship first order.',
    whatItemsNeededUrdu: ['سمارٹ فون', 'کورئیر اکاؤنٹ (TCS / Leopards / Trax)', 'فلائیر لفافے'],
    whatItemsNeededEn: ['Smartphone', 'Courier account (TCS/Leopards/Trax)', 'Courier flyer bags'],
    whereIsItUsefulUrdu: ['گھر بیٹھے سلائی کے کپڑے یا چادریں بیچنے میں', 'علاقے کی مشہور اشیاء (جیسے ملتانی سوہن حلوہ یا کھیس) بیچنے میں', 'دکان کا فالتو مال تیزی سے خالی کرنے میں', 'نئی پروڈکٹ کی مارکیٹ جانچنے میں'],
    whereIsItUsefulEn: ['Selling home-stitched clothes & bedsheets', 'Selling regional specialties nationwide', 'Clearing slow-moving shop inventory', 'Testing new product market demand'],
    
    jobPathwayUrdu: 'ای کامرس کمپنیوں میں آرڈر کنفرمیشن اور کسٹمر سپورٹ ایجنٹ۔',
    jobPathwayEn: 'Ecommerce Order Processing & Chat Support Specialist.',
    freelancePathwayUrdu: 'دکانداروں کے لیے سوشل میڈیا پیج اور آن لائن سیلز سنبھالنا۔',
    freelancePathwayEn: 'Managing COD store operations for offline manufacturers.',
    businessPathwayUrdu: 'اپنا مکمل ڈیجیٹل برانڈ شروع کر کے روزانہ ۲۰ سے ۵۰ پارسل بھیجنا۔',
    businessPathwayEn: 'Scaling an independent D2C brand shipping 20-50 parcels daily.',
    homeWorkPathwayUrdu: 'گھر کے ایک کونے میں اسٹاک رکھ کر پارسل پیک کرنا اور کورئیر کو دینا۔',
    homeWorkPathwayEn: 'Running a zero-rent home fulfillment dispatch point.',
    onlinePathwayUrdu: 'فیس بک ایڈز اور ٹک ٹاک ریلز کے ذریعے ہر شہر سے آرڈرز لینا۔',
    onlinePathwayEn: 'Driving targeted traffic via organic short videos and Meta ads.',
    localPathwayUrdu: 'مقامی ہول سیل مارکیٹ سے چیز لے کر آن لائن مناسب منافع پر بیچنا۔',
    localPathwayEn: 'Sourcing goods locally and selling to distant buyers at retail prices.',
    
    firstPracticalActionUrdu: 'اپنے فون میں WhatsApp Business ایپ انسٹال کریں، ”Business Profile“ مکمل کریں اور ۳ مصنوعات کی قیمت کے ساتھ کیٹلاگ بنائیں۔',
    firstPracticalActionEn: 'Install WhatsApp Business, set up your profile, and add 3 items to your product catalog with clear photos and prices.',
    nextSkillUrdu: 'ڈیجیٹل مارکیٹنگ اور میٹا ایڈز',
    nextSkillEn: 'Digital Marketing & Meta Ads',
    nextSkillId: 'univ-skill-digital-marketing',
    relatedSkillIds: ['univ-skill-canva-design', 'univ-skill-mob-digital', 'univ-skill-digital-marketing'],
    
    levels: [
      {
        level: 1,
        levelBadgeUrdu: '🟢 Level 1: بالکل شروع سے',
        levelBadgeEn: '🟢 Level 1: Zero Knowledge',
        titleUrdu: 'واٹس ایپ بزنس کیٹلاگ اور پرکشش تصاویر',
        titleEn: 'WhatsApp Business Catalog & Clean Photos',
        descriptionUrdu: 'پراڈکٹ کی صاف تصاویر کھینچنا، درست قیمت اور تفصیل لکھنا۔',
        descriptionEn: 'Photographing items with natural daylight and listing prices in catalog.',
        practicalMilestoneUrdu: 'واٹس ایپ پر ۳ اشیاء کی مکمل کیٹلاگ تیار کریں۔',
        practicalMilestoneEn: 'List 3 sample products with photos and descriptions on WhatsApp.',
        estimatedDurationUrdu: '۲ دن',
        estimatedDurationEn: '2 Days'
      },
      {
        level: 2,
        levelBadgeUrdu: '🔵 Level 2: بنیادی مہارت',
        levelBadgeEn: '🔵 Level 2: Foundational',
        titleUrdu: 'فیس بک مارکیٹ پلیس پر لسٹنگ',
        titleEn: 'Facebook Marketplace Listings',
        descriptionUrdu: 'مفت میں لاکھوں خریداروں تک چیز پہنچانے کا طریقہ۔',
        descriptionEn: 'Creating optimized free listings on Marketplace with location targeting.',
        practicalMilestoneUrdu: 'فیس بک مارکیٹ پلیس پر ایک پروڈکٹ لسٹ کر کے انکوائری حاصل کریں۔',
        practicalMilestoneEn: 'Publish a product listing on Facebook Marketplace.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 3,
        levelBadgeUrdu: '🟡 Level 3: درمیانی مہارت',
        levelBadgeEn: '🟡 Level 3: Intermediate',
        titleUrdu: 'کسٹمر چیٹ اور آرڈر کنفرمیشن',
        titleEn: 'Customer Chat Closing & Phone Confirmation',
        descriptionUrdu: 'فیک آرڈرز اور ریٹرن سے بچنے کے لیے فون کال پر ایڈریس کنفرم کرنا۔',
        descriptionEn: 'Verifying complete address, landmark, and phone before packing.',
        practicalMilestoneUrdu: 'ایک مکمل کسٹمر آرڈر تصدیق کر کے پیکنگ تیار کریں۔',
        practicalMilestoneEn: 'Verify a complete customer delivery address and phone number.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 4,
        levelBadgeUrdu: '🟠 Level 4: اعلیٰ مہارت',
        levelBadgeEn: '🟠 Level 4: Advanced',
        titleUrdu: 'کیش آن ڈلیوری (COD) کورئیر پورٹل بکنگ',
        titleEn: 'COD Courier Booking & Tracking (Trax/TCS/Leopards)',
        descriptionUrdu: 'کورئیر پورٹل پر ایڈریس درج کرنا، پرچی پرنٹ کرنا اور پیکنگ۔',
        descriptionEn: 'Generating courier tracking consignment notes (CN) and flyer sealing.',
        practicalMilestoneUrdu: 'کورئیر پورٹل پر ایک ٹیسٹ پارسل بک کریں۔',
        practicalMilestoneEn: 'Book a parcel on a courier portal and generate a CN number.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      },
      {
        level: 5,
        levelBadgeUrdu: '🔴 Level 5: پیشہ ورانہ سطح',
        levelBadgeEn: '🔴 Level 5: Professional',
        titleUrdu: 'ریٹرن ریشو کنٹرول اور رقم کی وصولی',
        titleEn: 'Return Mitigation & Payment Reconciliation',
        descriptionUrdu: 'ریٹرن کم سے کم رکھنا اور بینک میں پیسے محفوظ وصول کرنا۔',
        descriptionEn: 'Tracking weekly COD bank remittances and maintaining under 10% return rate.',
        practicalMilestoneUrdu: '۵ کامیاب پارسلز ڈلیور کر کے بینک میں رقم وصول کریں۔',
        practicalMilestoneEn: 'Complete 5 paid deliveries and reconcile bank statement.',
        estimatedDurationUrdu: '۳ دن',
        estimatedDurationEn: '3 Days'
      }
    ],
    searchKeywords: ['آن لائن سیلنگ', 'کیش آن ڈلیوری', 'سی او ڈی', 'دراز', 'فیس بک مارکیٹ', 'واٹس ایپ بزنس', 'online selling', 'cod', 'cash on delivery', 'daraz seller', 'social commerce', 'trax courier']
  }
];

// Helper Functions & Search Engine
export function searchSkillUniverse(
  query: string,
  categoryId?: string | null,
  levelFilter?: number | 'all',
  deviceFilter?: 'all' | 'mobile_only' | 'no_computer' | 'home_based' | 'online_only' | 'offline_local' | 'low_cost' | 'quick_learn',
  audienceFilter?: string | null
): SkillUniverseItem[] {
  let results = [...SKILL_UNIVERSE_ITEMS];

  // Category filter
  if (categoryId && categoryId !== 'all') {
    results = results.filter(s => s.categoryId === categoryId);
  }

  // Level filter
  if (levelFilter && levelFilter !== 'all') {
    results = results.filter(s => s.level === levelFilter);
  }

  // Device & Mode filter
  if (deviceFilter && deviceFilter !== 'all') {
    if (deviceFilter === 'mobile_only' || deviceFilter === 'no_computer') {
      results = results.filter(s => s.isMobileFriendly && !s.isComputerRequired);
    } else if (deviceFilter === 'home_based') {
      results = results.filter(s => s.isHomeBased);
    } else if (deviceFilter === 'online_only') {
      results = results.filter(s => s.isOnlineWork);
    } else if (deviceFilter === 'offline_local') {
      results = results.filter(s => s.isOfflineLocal);
    } else if (deviceFilter === 'low_cost') {
      results = results.filter(s => s.isLowCost);
    } else if (deviceFilter === 'quick_learn') {
      results = results.filter(s => s.isQuickLearn);
    }
  }

  // Audience filter
  if (audienceFilter && audienceFilter !== 'all') {
    results = results.filter(s => s.targetAudience.includes(audienceFilter as any) || s.targetAudience.includes('all'));
  }

  // Search query (Urdu, English, Roman Urdu, Colloquial)
  if (query && query.trim()) {
    const q = query.trim().toLowerCase();
    
    // Colloquial semantic map
    const semanticSynonyms: Record<string, string[]> = {
      'موبائل': ['smartphone', 'phone', 'بغیر کمپیوٹر', 'موبائل سے کام', 'فون'],
      'گھر': ['home', 'خواتین', 'گھریلو', 'گھر بیٹھے', 'سلائی', 'کھانا'],
      'آن لائن': ['online', 'internet', 'freelancing', 'فری لانسنگ'],
      'کمائی': ['earning', 'income', 'روزگار', 'پیسے', 'کاروبار'],
      'جلدی': ['quick', 'fast', 'آسان', 'شارٹ'],
      'گاؤں': ['village', 'دیہات', 'زراعت', 'سولر', 'فارمنگ']
    };

    results = results.filter(item => {
      const matchTitleUr = item.titleUrdu.toLowerCase().includes(q);
      const matchTitleEn = item.titleEn.toLowerCase().includes(q);
      const matchTaglineUr = item.taglineUrdu.toLowerCase().includes(q);
      const matchTaglineEn = item.taglineEn.toLowerCase().includes(q);
      const matchKeywords = item.searchKeywords.some(k => k.toLowerCase().includes(q));

      if (matchTitleUr || matchTitleEn || matchTaglineUr || matchTaglineEn || matchKeywords) {
        return true;
      }

      // Check synonyms
      for (const [key, syns] of Object.entries(semanticSynonyms)) {
        if (q.includes(key)) {
          if (syns.some(s => item.titleUrdu.includes(s) || item.titleEn.toLowerCase().includes(s) || item.searchKeywords.some(k => k.includes(s)))) {
            return true;
          }
        }
      }

      return false;
    });
  }

  return results;
}

export function getCategoryById(categoryId: string): SkillUniverseCategory | undefined {
  return SKILL_UNIVERSE_50_CATEGORIES.find(c => c.id === categoryId);
}

export function getSkillUniverseItemById(skillId: string): SkillUniverseItem | undefined {
  return SKILL_UNIVERSE_ITEMS.find(s => s.id === skillId);
}

