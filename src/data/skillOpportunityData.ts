import { SkillOpportunityPathway } from '../types';

export const SKILL_OPPORTUNITY_PATHWAYS_DATA: SkillOpportunityPathway[] = [
  // 1. AI (مصنوعی ذہانت اور سمارٹ ٹولز)
  {
    id: 'pathway-ai',
    categoryKey: 'ai',
    skillTitleUrdu: 'مصنوعی ذہانت اور پرامپٹ اسکلز (AI & Smart Tools)',
    skillTitleEn: 'AI & Smart Tools Proficiency',
    categoryUrdu: 'ٹیکنالوجی اور مصنوعی ذہانت',
    categoryEn: 'AI & Technology',
    icon: 'Cpu',
    color: 'emerald',
    relatedCourseIds: ['course-ai-mobile-basics', 'course-ai-daily-life', 'course-ai-1'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'بنیادی AI ٹولز (جیسے ChatGPT، Claude یا Gemini) کے ذریعے واضح سوالات (Prompts) پوچھنا اور موبائل پر صحیح رہنمائی حاصل کرنا۔',
        descEn: 'Master clear prompting and using AI assistants on mobile to summarize knowledge and generate solutions.',
        actionUrdu: 'روزانہ ۱۵ منٹ AI اسسٹنٹ کے ساتھ مختلف سوالات پوچھ کر بہترین جواب حاصل کرنے کی پریکٹس کریں۔',
        actionEn: 'Spend 15 mins practicing structured prompts with an AI assistant on mobile.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'اپنے یا کسی دوست کے کام کے لیے ایک مکمل معلوماتی چارٹ، تحریری ای میل یا اسٹڈی شیڈول AI کی مدد سے خود بنائیں۔',
        descEn: 'Generate a practical weekly study schedule, business customer replies, or a structured guide using AI.',
        actionUrdu: 'AI سے ۳ مختلف موضوعات پر ریڈی میڈ فارمیٹس بنائیں اور ان کی صحت خود چیک کریں۔',
        actionEn: 'Create 3 ready-to-use practical templates with AI and personally verify accuracy.',
        projectDeliverableUrdu: 'AI سے تیار کردہ کسٹمر کیئر پیغامات اور روزمرہ اسٹڈی پلان کا پورٹ فولیو',
        projectDeliverableEn: 'Portfolio of AI-assisted customer templates and study plans',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: 'اپنے محلے یا اسکول کے کسی فرد کی تحریری درخواست، اشتہار یا مضمون کو درست اور پرکشش بنا کر ان کی مدد کریں۔',
        descEn: 'Assist a local student or shop owner in drafting professional notices, Urdu social captions, or reports.',
        actionUrdu: 'کسی حقیقی ضرورت مند کی درخواست یا بزنس پوسٹ مفت میں بہتر بنا کر آزمائیں۔',
        actionEn: 'Help one real contact draft a professional application or product description.',
        whereNeededUrdu: 'آن لائن فری لانسنگ مارکیٹ، مقامی اسکول، دفاتر اور سوشل میڈیا پیجز',
        whereNeededEn: 'Freelance platforms, local businesses, school administration, and content creators',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'AI ٹولز کی مہارت سے کنٹینٹ ریسرچ، اردو/انگریزی ڈرافٹنگ، اور ریموٹ ڈیٹا اسسٹنس کی خدمات فراہم کریں۔',
        descEn: 'Provide paid AI-assisted research, copywriting, and virtual administrative support.',
        ethicalIncomeUrdu: 'آمدنی کا دارومدار کلائنٹ کے ساتھ دیانت دارانہ معاہدے اور حقیقی ویلیو فراہم کرنے پر ہے۔',
        ethicalIncomeEn: 'Earnings depend on transparent client agreements and delivering genuine practical value.',
        startingRoleUrdu: 'AI ریسرچ اسسٹنٹ / ورچوئل مواد معاون (ڈیمو رول)',
        startingRoleEn: 'AI Research Assistant / Virtual Support Specialist (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ AI کو محض وقت گزاری کے بجائے سمارٹ پرامپٹس دے کر دقیق تحقیق، زبان کی تصحیح اور مسائل حل کرنے کے لیے کیسا مددگار بنایا جاتا ہے۔',
    whatILearnedEn: 'You learned how to leverage prompt engineering to perform fast research, draft communications, and solve everyday problems.',
    whatICanBuildUrdu: [
      'دکانوں اور اسکولوں کے لیے کسٹمر سروس اور ای میل پیغامات',
      'کسی بھی موضوع کا ۵ منٹ کا آسان اردو/انگریزی خلاصہ',
      'سوشل میڈیا اور پوسٹرز کے لیے موثر تحریر اور کیپشنز',
      'روزمرہ کاموں اور بجٹ کی منصوبہ بندی'
    ],
    whatICanBuildEn: [
      'Customer service replies and inquiry emails for local shops/schools',
      '5-minute digestible summaries of complex topics in Urdu/English',
      'Compelling captions and scripts for social media posters',
      'Daily time-management schedules and budget templates'
    ],
    whereIsDemandUrdu: [
      'مقامی کاروبار جنہیں روزانہ کسٹمرز کو پیشہ ورانہ جوابات دینے ہوں',
      'آن لائن فری لانس کلائنٹس جنہیں ریسرچ اور ڈیٹا سمرائزیشن درکار ہو',
      'طلبہ اور اساتذہ جنہیں اسٹڈی مٹیریل کے خاکے بنانے ہوں',
      'سوشل میڈیا مہمات اور ڈیجیٹل ایجنسیاں'
    ],
    whereIsDemandEn: [
      'Local businesses needing prompt, professional customer communication',
      'Online clients seeking research summaries and structured data',
      'Students and educators requiring curriculum outlines',
      'Digital marketing agencies and small content teams'
    ],
    todaysSmallProjectUrdu: {
      title: 'مقامی جنرل اسٹور کے لیے ۵ ریڈی میڈ کسٹمر پیغامات بنائیں',
      description: 'AI سے اردو میں ۵ ایسے شائستہ پیغامات لکھوائیں جو دکاندار اپنے گاہکوں کو واٹس ایپ پر آرڈر، ڈلیوری یا ریٹ بتاتے وقت بھیج سکیں۔',
      estimatedMinutes: 20,
      actionStep: 'موبائل پر AI کھولیں، ڈرافٹ بنائیں اور اسے اپنے فون کے نوٹ پیڈ میں محفوظ کریں۔',
    },
    todaysSmallProjectEn: {
      title: 'Draft 5 Ready-to-Use WhatsApp Replies for a Local Shop',
      description: 'Use AI to create 5 courteous Urdu customer templates regarding orders, pricing, and polite follow-ups.',
      estimatedMinutes: 20,
      actionStep: 'Open AI on mobile, refine the draft prompts, and save to your notes.',
    },
    futureIncomeTransformationUrdu: 'شروع میں مفت مدد کر کے ۳ مضبوط نمونے (Portfolio) بنائیں۔ پھر مقامی تاجروں یا آن لائن کلائنٹس کو ماہانہ بنیاد پر "ڈیجیٹل کسٹمر سپورٹ و مواد معاونت" کی سروس حلال معاوضے پر پیش کریں۔',
    futureIncomeTransformationEn: 'Build 3 solid samples first. Then offer monthly digital communication and research support to local shops or remote clients at fair, agreed-upon rates.',
    nextSkillRecommendationUrdu: {
      skillName: 'گرافک ڈیزائن اور کینوا (Canva Design)',
      whyLearn: 'AI سے بنائی گئی تحریر کو جب آپ کینوا میں خوبصورت پوسٹر میں بدلیں گے تو آپ کی سروس کی مانگ دگنی ہو جائے گی۔',
      courseId: 'graphic-design-canva',
    },
    nextSkillRecommendationEn: {
      skillName: 'Graphic Design & Canva Basics',
      whyLearn: 'Pairing AI text with visual poster design doubles your service value and market demand.',
      courseId: 'graphic-design-canva',
    },
    bestNextActionUrdu: 'آج ۲۰ منٹ لگا کر ۳ کسٹمر سروس پیغامات کا ڈرافٹ AI سے بنوائیں اور خود پڑھ کر بہتر کریں۔',
    bestNextActionEn: 'Spend 20 mins drafting 3 customer service templates with AI and polish them manually.',
    ethicalDisclaimerUrdu: 'یاد رکھیں: آمدنی کی کوئی مصنوعی گارنٹی نہیں ہوتی۔ رزق حلال صرف محنت، مہارت، صداقت اور کلائنٹ کے ساتھ سچے وعدے سے حاصل ہوتا ہے۔',
    ethicalDisclaimerEn: 'Note: There is no guaranteed income. Halal earning requires real skills, hard work, honesty, and fulfilling client commitments.',
  },

  // 2. Graphic Design (گرافک ڈیزائن اور کینوا)
  {
    id: 'pathway-graphic-design',
    categoryKey: 'graphic_design',
    skillTitleUrdu: 'گرافک ڈیزائن اور کینوا پوسٹرز (Graphic Design & Canva)',
    skillTitleEn: 'Graphic Design & Visual Branding',
    categoryUrdu: 'تخلیقی ہنر اور ڈیزائن',
    categoryEn: 'Creative Skills & Design',
    icon: 'Palette',
    color: 'purple',
    relatedCourseIds: ['course-canva-1', 'course-canva-2'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'کینوا پر رنگوں کا انتخاب، فونٹس کا توازن اور موبائل پر ہائی کوالٹی پوسٹر بنانا سیکھیں۔',
        descEn: 'Learn color harmony, Urdu typography layout, and mobile poster creation in Canva.',
        actionUrdu: 'کینوا پر بنیادی ٹولز اور ٹیمپلیٹس کی روزانہ ۲۰ منٹ مشق کریں۔',
        actionEn: 'Practice layout design and typography in Canva for 20 mins daily.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'ایک فرضی دکان کے لیے ۳ اشتہاری پوسٹرز اور وزٹنگ کارڈ کا ڈیزائن بنائیں۔',
        descEn: 'Design 3 promotional social posters and a clean visiting card for a sample shop.',
        actionUrdu: 'اپنے بنائے گئے ۳ بہترین پوسٹرز کو محفوظ کر کے اپنا پہلا منی پورٹ فولیو تیار کریں۔',
        actionEn: 'Save your 3 top designs into a simple showcase PDF or image album.',
        projectDeliverableUrdu: '۳ اشتہاری بینرز اور ۱ وزٹنگ کارڈ کا پورٹ فولیو',
        projectDeliverableEn: 'Portfolio of 3 advertising banners and 1 visiting card',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: 'اپنے محلے کی کسی حقیقی دکان، مسجد کے اعلان یا اسکول کی تقریب کا پوسٹر بنا کر پیش کریں۔',
        descEn: 'Design a real announcement poster or price list for a local community school or grocery store.',
        actionUrdu: 'محلے کے کسی دکاندار کو ان کے ریٹ لسٹ کا خوبصورت اردو ڈیزائن بنا کر دکھائیں۔',
        actionEn: 'Show a local merchant an updated, clean rate-list design for their shop.',
        whereNeededUrdu: 'مقامی دکانیں، اسکول، ٹریول ایجنٹس، شادی کارڈ پرنٹرز اور سوشل میڈیا پیجز',
        whereNeededEn: 'Local retail, schools, printing shops, and social media agencies',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'سوشل میڈیا پوسٹس، فیس بک بینرز، پرنٹ اشتہارات اور لوگو ڈیزائن کی فری لانسنگ کریں۔',
        descEn: 'Offer social media graphic creation, print design, and branding to small businesses.',
        ethicalIncomeUrdu: 'کاپی رائٹ شدہ مواد سے گریز کریں اور سچی قیمت پر معیاری ڈیزائن دیں۔',
        ethicalIncomeEn: 'Avoid copyright infringement and deliver honest, original visual work.',
        startingRoleUrdu: 'جونیئر گرافک ڈیزائنر / کینوا ڈیزائن اسسٹنٹ (ڈیمو رول)',
        startingRoleEn: 'Junior Graphic Designer / Canva Specialist (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ عام موبائل فون پر پروفیشنل گرافکس، اردو اشتہارات، اور برانڈنگ کے بنیادی اصول کیسے لاگو کیے جاتے ہیں۔',
    whatILearnedEn: 'You learned to craft professional social media graphics, print banners, and clean Urdu typography on mobile.',
    whatICanBuildUrdu: [
      'فیس بک اور واٹس ایپ کے لیے اشتہاری پوسٹرز',
      'دکانوں کے ریٹ لسٹ اور پرنٹ شدہ مینو کارڈز',
      'وزٹنگ کارڈز اور باوقار سرٹیفکیٹس',
      'تعلیمی اداروں اور تقریبات کے خوبصورت فلائیرز'
    ],
    whatICanBuildEn: [
      'Promotional posters for Facebook and WhatsApp business channels',
      'Shop price catalogs and restaurant menu cards',
      'Professional business cards and certificates',
      'School event banners and community flyers'
    ],
    whereIsDemandUrdu: [
      'مقامی دکانیں جنہیں فیس بک اور واٹس ایپ پر اشتہار چلانا ہو',
      'پرنٹنگ پریس اور فوٹو اسٹیٹ کی دکانیں جنہیں ڈیزائنر درکار ہوں',
      'یوٹیوب چینلز جنہیں تھمب نیلز (Thumbnails) بنوانے ہوں',
      'آن لائن فری لانس پلیٹ فارمز (Fiverr, Upwork, Local Groups)'
    ],
    whereIsDemandEn: [
      'Local merchants running WhatsApp marketing campaigns',
      'Printing shops needing layout artists',
      'Content creators needing clickable YouTube thumbnails',
      'Freelance platforms and local entrepreneur networks'
    ],
    todaysSmallProjectUrdu: {
      title: 'مقامی دکان کا واٹس ایپ ڈسکاؤنٹ پوسٹر ڈیزائن کریں',
      description: 'کینوا پر ایک واضح اردو پوسٹر بنائیں جس میں دکان کا نام، خاص رعایت (مثلاً 10% آف)، اور فون نمبر نمایاں ہوں۔',
      estimatedMinutes: 25,
      actionStep: 'کینوا کھولیں، 1080x1080 سائز منتخب کریں، اور خوبصورت رنگوں کے ساتھ پوسٹر مکمل کریں۔',
    },
    todaysSmallProjectEn: {
      title: 'Design a WhatsApp Special Offer Poster for a Local Shop',
      description: 'Use Canva to create an eye-catching poster with the shop name, offer details, and clear contact info.',
      estimatedMinutes: 25,
      actionStep: 'Open Canva, select 1080x1080 layout, and export the finished design.',
    },
    futureIncomeTransformationUrdu: 'پہلے ۵ مفت یا رعایتی پروجیکٹس بنا کر اپنی واٹس ایپ کیٹلاگ تیار کریں۔ پھر فی پوسٹر ۵۰۰ سے ۱۵۰۰ روپے یا ماہانہ پیکج (مثلاً ۱۰ پوسٹرز فی مہینہ) کی معقول فیس پر کام شروع کریں۔',
    futureIncomeTransformationEn: 'Create 5 showcase designs for your catalog. Then offer per-poster or monthly retainer packages for local businesses looking to build an online presence.',
    nextSkillRecommendationUrdu: {
      skillName: 'ویڈیو ایڈیٹنگ اور ریلز (CapCut / VN)',
      whyLearn: 'سوشل میڈیا پر اسٹیٹک تصویر سے زیادہ ویڈیو دیکھی جاتی ہے۔ ویڈیو ایڈیٹنگ آپ کے معاوضے کو مزید بڑھا دے گی۔',
      courseId: 'graphic-design-canva',
    },
    nextSkillRecommendationEn: {
      skillName: 'Mobile Video Editing (CapCut/VN)',
      whyLearn: 'Video content commands higher engagement and higher client pricing than static graphics.',
      courseId: 'graphic-design-canva',
    },
    bestNextActionUrdu: 'آج کینوا پر ایک نیا پوسٹر بنا کر اپنے پورٹ فولیو میں محفوظ کریں۔',
    bestNextActionEn: 'Create one new poster design in Canva today and save it to your portfolio.',
    ethicalDisclaimerUrdu: 'ہمیشہ اصل اور حلال تصاویر استعمال کریں۔ غیر اخلاقی اور فریب پر مبنی اشتہارات سے سختی سے پرہیز کریں۔',
    ethicalDisclaimerEn: 'Always use halal and original assets. Never design misleading or deceptive advertising.',
  },

  // 3. Video Editing (ویڈیو ایڈیٹنگ اور شارٹس)
  {
    id: 'pathway-video-editing',
    categoryKey: 'video_editing',
    skillTitleUrdu: 'ویڈیو ایڈیٹنگ اور شارٹ ویڈیوز (Video Editing & Reels)',
    skillTitleEn: 'Mobile Video Editing & Short-Form Content',
    categoryUrdu: 'ویڈیو اور میڈیا پروڈکشن',
    categoryEn: 'Media & Video Production',
    icon: 'Play',
    color: 'rose',
    relatedCourseIds: ['course-video-1'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'موبائل پر CapCut یا VN ایڈیٹر کے ذریعے تراش خراش (Trimming)، کیپشنز، اور آڈیو ایڈجسٹمنٹ سیکھیں۔',
        descEn: 'Learn mobile video trimming, beat syncing, subtitles, and clean audio levels in CapCut/VN.',
        actionUrdu: 'روزانہ ۲۰ منٹ کسی چھوٹی ریکارڈنگ پر کٹ لگانے اور سب ٹائٹلز شامل کرنے کی مشق کریں۔',
        actionEn: 'Practice cutting and adding captions on a 30-second mobile recording for 20 mins.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'ایک ۳۰ سیکنڈ کی معلوماتی شارٹ ویڈیو یا پراڈکٹ شوکیس مکمل ایڈیٹنگ کے ساتھ تیار کریں۔',
        descEn: 'Edit a polished 30-second educational reel or product showcase with background audio.',
        actionUrdu: 'ایک مکمل ویڈیو بنائیں جس میں آواز صاف ہو اور متن وقت پر ظاہر ہو۔',
        actionEn: 'Produce one complete vertical video with crisp sound and synchronized text.',
        projectDeliverableUrdu: '۳۰ سیکنڈ کی ایڈیٹ شدہ معلوماتی ریل (Sample Video)',
        projectDeliverableEn: '30-second polished educational showcase video',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: 'اپنے اسکول، فلاحی کمیٹی، یا مقامی دکان دار کے لیے ایک معلوماتی ویڈیو بنا کر پیش کریں۔',
        descEn: 'Edit a video clip for a local school event, charity initiative, or shop promo.',
        actionUrdu: 'ایک مفید کلپ ایڈٹ کر کے دوستوں یا استاد کو دکھائیں اور فیڈ بیک لیں۔',
        actionEn: 'Share an edited sample with your mentor or peers to gather constructive feedback.',
        whereNeededUrdu: 'یوٹیوبرز، ای کامرس سیلرز، تعلیمی ادارے اور برانڈز',
        whereNeededEn: 'YouTubers, TikTok/Reel creators, e-commerce sellers, and coaching centers',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'یوٹیوب شارٹس، ٹک ٹاک ریلز اور ای کامرس پروڈکٹ ویڈیوز ایڈٹ کرنے کی فری لانسنگ کریں۔',
        descEn: 'Provide vertical video editing and captioning services for content creators and businesses.',
        ethicalIncomeUrdu: 'صرف باوقار اور اخلاقی مواد ایڈٹ کریں، بے ہودہ یا فحش گانوں سے پاک رہیں۔',
        ethicalIncomeEn: 'Edit only wholesome, ethical content free from vulgarity or deceptive gimmicks.',
        startingRoleUrdu: 'موبائل ویڈیو ایڈیٹر / شارٹس کریئیٹر (ڈیمو رول)',
        startingRoleEn: 'Mobile Video Editor / Reels Specialist (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ بغیر مہنگے کمپیوٹر کے، عام اسمارٹ فون پر تیز رفتار اور دلکش ویڈیوز کیسے تیار کی جاتی ہیں۔',
    whatILearnedEn: 'You learned to produce high-impact, clean vertical videos directly on your smartphone.',
    whatICanBuildUrdu: [
      'تعلیمی اور معلوماتی شارٹس اور ریلز (۳۰ سے ۶۰ سیکنڈ)',
      'دکان کے سامان اور مصنوعات کی وضاحتی ویڈیوز',
      'انٹرویو اور تقریبات کے کلپس کو مختصر کر کے نمایاں کرنا',
      'اردو سب ٹائٹلز اور بیک گراؤنڈ ساؤنڈ مکسنگ'
    ],
    whatICanBuildEn: [
      'Educational and informative reels (30–60 seconds)',
      'Product showcase and unboxing highlight clips',
      'Event and lecture highlight summaries with subtitles',
      'Urdu captioning and clean audio track mastering'
    ],
    whereIsDemandUrdu: [
      'آن لائن کاروبار جنہیں اپنی پراڈکٹ ویڈیو دکھانی ہو',
      'یوٹیوب چینلز اور بلاگرز جنہیں ایڈیٹر کی فوری ضرورت ہو',
      'مقامی اکیڈمیاں اور اساتذہ جو آن لائن لیکچر ریکارڈ کرتے ہیں'
    ],
    whereIsDemandEn: [
      'E-commerce brands needing video ads',
      'Creators seeking daily short-form editors',
      'Local academies and educators producing online material'
    ],
    todaysSmallProjectUrdu: {
      title: 'ایک ۲۰ سیکنڈ کی معلوماتی ریل میں اردو سب ٹائٹلز شامل کریں',
      description: 'اپنے فون سے کوئی بھی چھوٹی ویڈیو لیں، اس میں اہم باتیں اسکرین پر خوبصورت ٹیکسٹ میں لکھیں اور آخری نتیجہ ایکسپورٹ کریں۔',
      estimatedMinutes: 25,
      actionStep: 'ایپ میں ویڈیو امپورٹ کریں، ٹیکسٹ کیپشنز لگائیں اور پورٹ فولیو میں محفوظ کریں۔',
    },
    todaysSmallProjectEn: {
      title: 'Add Urdu Captions to a 20-Second Clip',
      description: 'Import a short video, synchronize on-screen text with the voiceover, and export in 1080p.',
      estimatedMinutes: 25,
      actionStep: 'Import into CapCut/VN, add text overlays, and export the file.',
    },
    futureIncomeTransformationUrdu: 'اپنے ۲ بہترین سیمپلز ٹک ٹاک/واٹس ایپ پر لگائیں۔ کلائنٹس کو فی ویڈیو یا ماہانہ پیکیج (مثلاً ۲۰ شارٹس فی ماہ) پر معیاری سروس دیں جس سے مستقل آمدنی کی راہ کھلے۔',
    futureIncomeTransformationEn: 'Showcase 2 high-quality sample reels. Offer monthly editing packages for creators wanting 15–20 consistent monthly videos.',
    nextSkillRecommendationUrdu: {
      skillName: 'ڈیجیٹل مارکیٹنگ اور سوشل میڈیا مہمات',
      whyLearn: 'ویڈیو بنانے کے بعد اسے صحیح گاہکوں تک پہنچانے کا ہنر جاننے سے آپ کلائنٹ کے لیے ناگزیر بن جاتے ہیں۔',
      courseId: 'business-entrepreneurship-basics',
    },
    nextSkillRecommendationEn: {
      skillName: 'Digital Marketing & Social Ads',
      whyLearn: 'Knowing how to distribute your videos ensures maximum client satisfaction and repeat projects.',
      courseId: 'business-entrepreneurship-basics',
    },
    bestNextActionUrdu: 'آج ایک ویڈیو کلپ پر کٹ لگا کر کیپشنز کی درست ٹائمنگ سیٹ کریں۔',
    bestNextActionEn: 'Practice timing text captions on a short video clip today.',
    ethicalDisclaimerUrdu: 'دیانت داری کے ساتھ وقت پر ڈلیوری دیں۔ کاپی رائٹ اور اخلاقی حدود کا پورا احترام کریں۔',
    ethicalDisclaimerEn: 'Deliver work on time and respect copyright and Islamic ethical boundaries.',
  },

  // 4. Communication (مؤثر گفتگو اور انگریزی/اردو ابلاغ)
  {
    id: 'pathway-communication',
    categoryKey: 'communication',
    skillTitleUrdu: 'مؤثر ابلاغ، پراعتماد گفتگو اور باضابطہ مراسلت (Communication)',
    skillTitleEn: 'Professional Communication & Public Speaking',
    categoryUrdu: 'ابلاغ اور زبان دانی',
    categoryEn: 'Communication & Soft Skills',
    icon: 'MessageSquare',
    color: 'blue',
    relatedCourseIds: ['course-comm-1', 'course-comm-english-basics'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'توجہ سے سننا (Active Listening)، شائستہ اور واضح انداز میں بات رکھنا، اور پیشہ ورانہ ای میلز لکھنا سیکھیں۔',
        descEn: 'Master active listening, clear spoken articulation, and professional email etiquette.',
        actionUrdu: 'روزانہ ۱۰ منٹ شائستگی سے بات کرنے اور واضح الفاظ چننے کی مشق کریں۔',
        actionEn: 'Practice structured 2-minute spoken explanations and clear writing for 10 mins daily.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'ایک باضابطہ ملازمت کی درخواست (Job Cover Letter) اور باوقار تعارف (Elevator Pitch) تیار کریں۔',
        descEn: 'Draft a formal cover letter and a crisp 60-second professional self-introduction.',
        actionUrdu: 'اپنا تحریری تعارف خود لکھیں اور بلند آواز میں پڑھ کر اعتماد پرکھیں۔',
        actionEn: 'Write your professional summary and practice reading it out loud with confidence.',
        projectDeliverableUrdu: '۱ باضابطہ کور لیٹر اور ۱ زبانی تعارف کا ریکارڈ',
        projectDeliverableEn: '1 formal cover letter and 1 recorded audio pitch',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: 'کسی دکان، اسکول یا تقریب میں کسی مسئلے پر پرسکون اور مؤثر انداز میں بات چیت کر کے حل نکالیں۔',
        descEn: 'Help resolve a real misunderstanding or represent a group in a local committee meeting.',
        actionUrdu: 'کسی اہم کام کے لیے باضابطہ شائستہ ای میل یا تحریری میسج لکھ کر بھیجیں۔',
        actionEn: 'Send a well-structured formal message or inquiry to an institution or peer.',
        whereNeededUrdu: 'ہر دفتر، کال سینٹر، اسکول، ہسپتال کا استقبالیہ اور کسٹمر کیئر',
        whereNeededEn: 'Corporate offices, customer service teams, front desks, and team leadership',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'کسٹمر سپورٹ، ریموٹ کمیونیکیشن معاون، مواد پروف ریڈر اور سیلز ریپریزنٹیٹو کے مواقع۔',
        descEn: 'Unlock roles in remote customer support, telephonic sales coordination, and administration.',
        ethicalIncomeUrdu: 'سچ بولنا، بدکلامی سے بچنا اور امانت داری کمیونیکیشن کا اصل رزق ہے۔',
        ethicalIncomeEn: 'Honesty, clear expectations, and polite speech form the backbone of halal success.',
        startingRoleUrdu: 'کسٹمر ریلیشن اسسٹنٹ / کوآرڈینیٹر (ڈیمو رول)',
        startingRoleEn: 'Customer Support / Communications Coordinator (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ الفاظ کی طاقت سے خوف دور کر کے اپنے خیالات کو شائستگی، وزن اور سچائی کے ساتھ کیسے پیش کیا جاتا ہے۔',
    whatILearnedEn: 'You learned to speak with composure, listen attentively, and write structured professional correspondence.',
    whatICanBuildUrdu: [
      'پیشہ ورانہ جاب اپلیکیشنز اور کور لیٹرز',
      'گاہکوں کے ساتھ خوش اخلاق اور مؤثر واٹس ایپ گفتگو کا خاکہ',
      'میٹنگز اور اہم فیصلوں کے تحریری نوٹس (Minutes of Meeting)',
      'کسی موضوع پر ۲ منٹ کی پر اعتماد تقریر'
    ],
    whatICanBuildEn: [
      'Professional job applications and cover letters',
      'Courteous customer negotiation and chat guidelines',
      'Meeting minutes and formal resolution summaries',
      '2-minute confident public speaking briefings'
    ],
    whereIsDemandUrdu: [
      'کسٹمر کیئر اور آن لائن شاپس کے واٹس ایپ مینیجرز',
      'مقامی دفاتر اور پرائیویٹ اسکولوں کے ایڈمن اسسٹنٹس',
      'فلاحی اداروں کے نمائندے اور عوامی رابطہ کار'
    ],
    whereIsDemandEn: [
      'Customer support teams for online businesses',
      'School administrators and executive assistants',
      'Public relations and community NGO coordinators'
    ],
    todaysSmallProjectUrdu: {
      title: 'اپنا ۱ منٹ کا باوقار اور شائستہ تعارف تحریر کریں',
      description: 'کاغذ پر ۳ پیراگراف لکھیں: ۱) آپ کون ہیں، ۲) آپ کے پاس کیا ہنر ہے، ۳) آپ دوسروں کے کس کام آ سکتے ہیں۔',
      estimatedMinutes: 15,
      actionStep: 'کاغذ پر لکھیں اور اسے ایک بار اونچی آواز میں پڑھ کر چیک کریں۔',
    },
    todaysSmallProjectEn: {
      title: 'Write Your 1-Minute Professional Pitch',
      description: 'Draft 3 bullet points: Who you are, what skills you offer, and how you solve problems for others.',
      estimatedMinutes: 15,
      actionStep: 'Write down the draft and rehearse speaking it clearly once.',
    },
    futureIncomeTransformationUrdu: 'مضبوط ابلاغ ہر فیلڈ میں تنخواہ اور پروجیکٹ کے ریٹس کو دگنا کرتا ہے۔ آپ ریموٹ اسسٹنس یا مقامی اداروں میں رابطہ کار (Coordinator) کی باوقار نوکری یا پروجیکٹ حاصل کر سکتے ہیں۔',
    futureIncomeTransformationEn: 'Effective communication amplifies earnings across all domains. You can secure remote administrative or sales coordination contracts.',
    nextSkillRecommendationUrdu: {
      skillName: 'سیلز اور کسٹمر ہینڈلنگ (Sales & Negotiation)',
      whyLearn: 'اچھی بات چیت کے ساتھ گاہک کی نفسیات سمجھنا آپ کو سیدھا کاروباری کامیابی کی طرف لے جاتا ہے۔',
      courseId: 'business-entrepreneurship-basics',
    },
    nextSkillRecommendationEn: {
      skillName: 'Sales & Customer Negotiation',
      whyLearn: 'Combining solid communication with sales psychology makes you an indispensable revenue driver.',
      courseId: 'business-entrepreneurship-basics',
    },
    bestNextActionUrdu: 'آج کسی ساتھی یا آئینے کے سامنے ۱ منٹ کا تعارف پرسکون لہجے میں دہرائیں۔',
    bestNextActionEn: 'Practice delivering your 1-minute intro clearly and calmly today.',
    ethicalDisclaimerUrdu: 'رسول اللہ ﷺ نے فرمایا: "سچائی نجات دیتی ہے اور جھوٹ ہلاک کرتا ہے۔" ہمیشہ سچی اور معتبر بات کریں۔',
    ethicalDisclaimerEn: 'The Prophet ﷺ taught that honesty brings salvation. Always speak truthfully in all business matters.',
  },

  // 5. Sales (سیلز، گاہک داری اور ڈیلنگ)
  {
    id: 'pathway-sales',
    categoryKey: 'sales',
    skillTitleUrdu: 'سیلز، گاہک کی نفسیات اور دیانت دارانہ ڈیلنگ (Ethical Sales)',
    skillTitleEn: 'Ethical Sales & Customer Value Creation',
    categoryUrdu: 'کاروبار اور سیلز',
    categoryEn: 'Business & Sales',
    icon: 'TrendingUp',
    color: 'amber',
    relatedCourseIds: ['course-sales-1', 'course-business-1'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'گاہک کی اصل ضرورت سمجھنا، عیب چھپائے بغیر چیز کی خوبی بتانا، اور قیمت طے کرنے کے اصول جانیں۔',
        descEn: 'Understand customer needs, highlight genuine benefits honestly, and master transparent pricing.',
        actionUrdu: 'روزانہ ۱۵ منٹ گاہک کے سوالات اور ان کے تسلی بخش جوابات کا مطالعہ کریں۔',
        actionEn: 'Study effective customer objection handling and pricing ethics for 15 mins daily.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'کسی ایک پروڈکٹ کے لیے مکمل "سیلز اسکرپٹ" اور کسٹمر فیڈ بیک فارم خود لکھیں۔',
        descEn: 'Develop a structured product sales script and a customer follow-up questionnaire.',
        actionUrdu: 'ایک معلوماتی سیلز پچ تیار کریں جو صرف حقیقت اور ضرورت پر مبنی ہو۔',
        actionEn: 'Write an honest, benefit-focused sales pitch for a local product.',
        projectDeliverableUrdu: '۱ مکمل سیلز اسکرپٹ اور گاہک داری گائیڈ',
        projectDeliverableEn: '1 complete sales script and customer handling guide',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: 'کسی دوست یا رشتہ دار کے چھوٹے کاروبار کے لیے ۳ ممکنہ گاہکوں کو شائستگی سے پیشکش کریں۔',
        descEn: 'Assist a local merchant or peer in approaching 3 prospective clients with a genuine offer.',
        actionUrdu: 'بغیر دباؤ ڈالے، خلوص کے ساتھ پراڈکٹ کی افادیت گاہک کے سامنے رکھیں۔',
        actionEn: 'Present the product value clearly without pushy tactics.',
        whereNeededUrdu: 'مقامی دکانیں، ہول سیل مارکیٹ، رئیل اسٹیٹ، ای کامرس اور آن لائن سروسز',
        whereNeededEn: 'Retail stores, wholesale distributors, online sellers, and service providers',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'کمیشن پر مصنوعات بیچنا (Affiliate/Sales Agent) یا کاروبار کے لیے سیلز مینیجر بننا۔',
        descEn: 'Earn through agreed sales commissions or base retaining fees as a sales specialist.',
        ethicalIncomeUrdu: 'جھوٹی قسموں اور مبالغہ آرائی سے بچنا تجارت میں برکت کی بنیادی شرط ہے۔',
        ethicalIncomeEn: 'Barakah in commerce comes from total transparency and avoiding false hype.',
        startingRoleUrdu: 'سیلز کوآرڈینیٹر / ایجنٹ (ڈیمو رول)',
        startingRoleEn: 'Sales Executive / Field Representative (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ سیلز کا مطلب دھوکہ دینا نہیں بلکہ گاہک کے مسئلے کا سچا اور مناسب حل فراہم کرنا ہے۔',
    whatILearnedEn: 'You learned that ethical selling means solving customer problems with honesty and value.',
    whatICanBuildUrdu: [
      'واٹس ایپ اور فون کال کے لیے مکمل سیلز پچ',
      'گاہکوں کے اعتراضات کے شائستہ جوابات کی گائیڈ',
      'پروڈکٹ کی خصوصیات اور قیمت کا واضح موازنہ چارٹ',
      'سیلز اور آرڈرز کا یومیہ ریکارڈ رجسٹر'
    ],
    whatICanBuildEn: [
      'WhatsApp and phone sales call scripts',
      'Customer objection resolution cheat sheets',
      'Transparent product feature comparison sheets',
      'Daily sales tracking and follow-up ledger'
    ],
    whereIsDemandUrdu: [
      'ہر دکان دار اور ہول سیلر جسے اپنے سامان کی فروخت بڑھانی ہو',
      'آن لائن مصنوعات بیچنے والے دراز اور فیس بک سیلرز',
      'سروس فراہم کرنے والے ادارے (سولر، بلڈنگ میٹریل، فرنیچر وغیرہ)'
    ],
    whereIsDemandEn: [
      'Retailers and wholesalers looking to expand distribution',
      'Daraz and e-commerce shop owners',
      'Service businesses (solar systems, construction supplies, furniture)'
    ],
    todaysSmallProjectUrdu: {
      title: 'کسی ایک پروڈکٹ کے ۵ اصل فوائد کی لسٹ بنائیں',
      description: 'اپنے گھر یا محلے کی کسی ایک چیز کا انتخاب کریں اور ۵ ایسے فائدے لکھیں جو گاہک کی حقیقی ضرورت پوری کرتے ہوں۔',
      estimatedMinutes: 20,
      actionStep: 'فوائد کاغذ پر لکھیں اور سوچیں کہ گاہک کو یہ کیسے بتائیں گے۔',
    },
    todaysSmallProjectEn: {
      title: 'List 5 Genuine Benefits of a Product',
      description: 'Choose a product from your local market and list 5 authentic benefits that solve a customer pain point.',
      estimatedMinutes: 20,
      actionStep: 'Write the points down and evaluate how you would present them to a buyer.',
    },
    futureIncomeTransformationUrdu: 'مقامی تاجروں سے طے کریں کہ آپ ان کے گاہک لائیں گے اور فی آرڈر مقررہ حلال کمیشن لیں گے۔ دیانت داری برقرار رکھنے سے آپ کا نیٹ ورک خود بخود بڑا ہو جائے گا۔',
    futureIncomeTransformationEn: 'Partner with local merchants on a pre-agreed halal commission per sale. Honesty creates long-term repeat clientele.',
    nextSkillRecommendationUrdu: {
      skillName: 'مارکیٹنگ اور سوشل میڈیا کسٹمر فائنڈنگ',
      whyLearn: 'سیلز کرنے کے لیے گاہکوں کا آنا ضروری ہے۔ مارکیٹنگ سیکھنے سے گاہکوں کا بہاؤ مسلسل رہتا ہے۔',
      courseId: 'business-entrepreneurship-basics',
    },
    nextSkillRecommendationEn: {
      skillName: 'Digital & Local Marketing',
      whyLearn: 'Marketing generates the steady flow of leads that your sales skills can convert.',
      courseId: 'business-entrepreneurship-basics',
    },
    bestNextActionUrdu: 'آج کسی پروڈکٹ کا ایک شائستہ ۳۰ سیکنڈ کا تعارفی میسج کاغذ پر تیار کریں۔',
    bestNextActionEn: 'Draft a courteous 30-second product introduction message today.',
    ethicalDisclaimerUrdu: 'رسول اللہ ﷺ نے فرمایا: "سچا اور امانت دار تاجر قیامت کے دن انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔" [ترمذی 1209]',
    ethicalDisclaimerEn: 'The Prophet ﷺ said: "The truthful, trustworthy merchant is with the prophets, the truthful, and the martyrs." [Tirmidhi: 1209]',
  },

  // 6. Marketing (ڈیجیٹل اور مقامی مارکیٹنگ)
  {
    id: 'pathway-marketing',
    categoryKey: 'marketing',
    skillTitleUrdu: 'ڈیجیٹل و مقامی مارکیٹنگ اور برانڈنگ (Marketing & Growth)',
    skillTitleEn: 'Digital & Local Community Marketing',
    categoryUrdu: 'مارکیٹنگ اور کاروباری فروغ',
    categoryEn: 'Marketing & Promotion',
    icon: 'Share2',
    color: 'teal',
    relatedCourseIds: ['course-marketing-1', 'course-social-media'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'فیس بک پیج، گوگل میپس پر دکان درج کروانا، اور واٹس ایپ براڈکاسٹ کے درست طریقے سیکھیں۔',
        descEn: 'Learn Google Maps location listing, WhatsApp broadcast management, and Facebook page growth.',
        actionUrdu: 'مقامی دکانوں کی تشہیر کے طریقوں پر روزانہ ۱۵ منٹ مطالعہ کریں۔',
        actionEn: 'Study local business promotional strategies for 15 mins daily.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'ایک دکان کے لیے ۷ دن کا سوشل میڈیا پوسٹنگ پلان اور واٹس ایپ مہم کا شیڈول بنائیں۔',
        descEn: 'Design a 7-day social media calendar and WhatsApp promotion campaign for a business.',
        actionUrdu: 'ایک مکمل مارکیٹنگ شیڈول تحریری شکل میں تیار کریں۔',
        actionEn: 'Create a calendar with post themes, captions, and publication times.',
        projectDeliverableUrdu: '۷ روزہ مارکیٹنگ پلان اور گوگل میپ گائیڈ',
        projectDeliverableEn: '7-day promotional calendar and Google Maps local guide',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: 'اپنے محلے کے کسی دکاندار کی لوکیشن گوگل میپ پر درست درج کروائیں تاکہ گاہک ان تک پہنچ سکیں۔',
        descEn: 'Help a local shop register accurately on Google Maps so local customers can locate them.',
        actionUrdu: 'ایک دکان کی گوگل لوکیشن اور فون نمبر مفت رجسٹر کروا کر مدد کریں۔',
        actionEn: 'Assist one merchant with their Google Business verification.',
        whereNeededUrdu: 'مقامی دکانیں، بیکریاں، ورکشاپس، کلینکس اور سروس پرووائیڈرز',
        whereNeededEn: 'Local retail, clinics, workshops, and regional service businesses',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'ماہانہ سوشل میڈیا مینیجمنٹ، فیس بک ایڈز سیٹ اپ اور لوکل بزنس لسٹنگ کی خدمات۔',
        descEn: 'Provide paid monthly social media handling and Google Maps setup services.',
        ethicalIncomeUrdu: 'جعلی فالوورز یا جھوٹے ریویوز کے بغیر صرف حقیقی کام اور سچی تشہیر کریں۔',
        ethicalIncomeEn: 'Never buy fake followers or false reviews. Focus on organic, honest reach.',
        startingRoleUrdu: 'لوکل بزنس مارکیٹنگ اسسٹنٹ (ڈیمو رول)',
        startingRoleEn: 'Local Business Marketing Assistant (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ کم خرچ میں صحیح گاہکوں تک اپنی پروڈکٹ اور برانڈ کی آواز کیسے پہنچائی جاتی ہے۔',
    whatILearnedEn: 'You learned low-budget, high-impact strategies to bring authentic customer visibility to businesses.',
    whatICanBuildUrdu: [
      'مقامی دکانوں کے لیے گوگل میپس رجسٹریشن پروفائل',
      'فیس بک اور انسٹاگرام کے لیے ہفتہ وار پوسٹنگ پلان',
      'واٹس ایپ کسٹمر براڈکاسٹ کے لیے پیغامات کا شیڈول',
      'آسان اردو میں لوکل پروموشنل پمفلٹ'
    ],
    whatICanBuildEn: [
      'Google Maps verified local business listings',
      'Weekly content calendar for Facebook/Instagram',
      'WhatsApp customer broadcast schedule',
      'Targeted local promotional flyers in Urdu'
    ],
    whereIsDemandUrdu: [
      'گاؤں اور قصبے کی وہ دکانیں جن کی انٹرنیٹ پر کوئی لوکیشن موجود نہیں',
      'نئے کھلنے والے اسکول، کلینکس اور شورومز',
      'وہ تاجر جو فیس بک پر اپنا مال دور دراز بیچنا چاہتے ہیں'
    ],
    whereIsDemandEn: [
      'Local merchants without any online presence',
      'Newly launched clinics, academies, and showrooms',
      'Entrepreneurs wanting to sell beyond their village'
    ],
    todaysSmallProjectUrdu: {
      title: 'ایک مقامی کاروبار کے لیے ۳ مارکیٹنگ آئیڈیاز تیار کریں',
      description: 'سوچیں کہ آپ کے محلے کی درزی، مٹھائی یا موبائل کی دکان پر مزید گاہک لانے کے ۳ آسان حلال طریقے کیا ہو سکتے ہیں۔',
      estimatedMinutes: 20,
      actionStep: '۳ نکات لکھیں اور متعلقہ دکاندار کو محبت سے مشورہ دیں۔',
    },
    todaysSmallProjectEn: {
      title: 'Develop 3 Low-Cost Marketing Ideas for a Local Shop',
      description: 'Identify 3 practical ideas (e.g. Google listing, WhatsApp flyer, seasonal bundle) to help a local shop.',
      estimatedMinutes: 20,
      actionStep: 'Write the 3 points down and offer them as a friendly tip to the owner.',
    },
    futureIncomeTransformationUrdu: 'دکانوں کو "ڈیجیٹل پریزنس پیکج" (گوگل میپ + فیس بک پیج + ۵ پوسٹرز) پیش کریں۔ مقامی سطح پر اس پیکج کے ۳ ہزار سے ۱۰ ہزار روپے تک مناسب فیس طے کی جا سکتی ہے۔',
    futureIncomeTransformationEn: 'Offer a "Digital Presence Starter Pack" (Google Maps + Facebook page + 5 launch graphics) to local merchants.',
    nextSkillRecommendationUrdu: {
      skillName: 'کمپیوٹر ڈیٹا انٹری اور بک کیپنگ',
      whyLearn: 'جب مارکیٹنگ سے کسٹمرز آئیں گے تو ان کا کھاتہ اور ریکارڈ سنبھالنا ضروری ہو جائے گا۔',
      courseId: 'computer-digital-world-basics',
    },
    nextSkillRecommendationEn: {
      skillName: 'Computer Data Entry & Bookkeeping',
      whyLearn: 'Managing customer records and digital ledgers is essential as marketing scales demand.',
      courseId: 'computer-digital-world-basics',
    },
    bestNextActionUrdu: 'آج کسی ایک لوکل شاپ کو گوگل میپس پر سرچ کریں اور دیکھیں کہ کیا ان کی معلومات درست ہیں۔',
    bestNextActionEn: 'Search for a local shop on Google Maps today to see if their profile is accurate.',
    ethicalDisclaimerUrdu: 'مارکیٹنگ میں جھوٹے وعدے اور مبالغہ حرام ہے۔ جو چیز جیسی ہے اسے ویسا ہی بیان کریں۔',
    ethicalDisclaimerEn: 'Exaggeration and deceptive promises in marketing are prohibited. State things as they truly are.',
  },

  // 7. Computer Skills (کمپیوٹر بنیادی و دفتری ہنر)
  {
    id: 'pathway-computer-skills',
    categoryKey: 'computer_skills',
    skillTitleUrdu: 'کمپیوٹر، اسپریڈشیٹ، اور دفتری دستاویزات (Computer Literacy)',
    skillTitleEn: 'Computer Literacy, Spreadsheets & Digital Office',
    categoryUrdu: 'کمپیوٹر اور دفتری مہارت',
    categoryEn: 'Computer & Office Skills',
    icon: 'Laptop',
    color: 'blue',
    relatedCourseIds: ['course-computer-1', 'course-computer-2'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'ٹائپنگ، گوگل شیٹس/ایکسل میں فارمولے، ورڈ میں درخواستیں اور فائلیں محفوظ کرنا سیکھیں۔',
        descEn: 'Learn typing speed, basic Excel formulas, spreadsheet data organization, and Word drafting.',
        actionUrdu: 'روزانہ ۲۰ منٹ اسپریڈشیٹ فارمولوں اور ٹائپنگ کی مشق کریں۔',
        actionEn: 'Practice spreadsheet formulas and typing for 20 mins daily.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'ایک مکمل گھریلو بجٹ شیٹ اور دکان کا یومیہ کیش بک لیجر (Cashbook) تیار کریں۔',
        descEn: 'Build a functional household monthly budget sheet and a shop cashbook ledger.',
        actionUrdu: 'ایکسل یا گوگل شیٹ میں ایک مکمل کھاتہ خود ڈیزائن کریں۔',
        actionEn: 'Construct a structured accounting workbook with automatic totals.',
        projectDeliverableUrdu: '۱ مکمل دکانداری کیش بک اور انوائس ٹیمپلیٹ',
        projectDeliverableEn: '1 complete shop cashbook and invoice workbook',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: 'اپنے محلے کے کسی بزرگ یا دکاندار کا پرانا کاغذی حساب کتاب ایکسل میں ڈیجیٹائز کریں۔',
        descEn: 'Help a local elder or shopkeeper transfer paper accounts into an organized spreadsheet.',
        actionUrdu: 'کسی حقیقی ادارے کا ایک مہینے کا ڈیٹا شیٹ میں داخل کر کے چیک کریں۔',
        actionEn: 'Digitize one real month of records to verify calculation accuracy.',
        whereNeededUrdu: 'ہر سرکاری و نجی دفتر، اسکول، ہسپتال، میڈیکل اسٹور اور فیکٹری',
        whereNeededEn: 'Schools, private clinics, pharmacies, distribution warehouses, and offices',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'ڈیٹا انٹری، آن لائن فارم فلنگ، دفتری اسسٹنٹ اور ورچوئل بک کیپنگ کے معاوضے پر کام۔',
        descEn: 'Work as a data entry operator, office clerk, or remote spreadsheet specialist.',
        ethicalIncomeUrdu: 'حساب کتاب میں رتی برابر خیانت نہ کریں اور ریکارڈ میں مکمل امانت داری رکھیں۔',
        ethicalIncomeEn: 'Ensure absolute accuracy and confidentiality with accounting figures.',
        startingRoleUrdu: 'ڈیٹا انٹری آپریٹر / دفتری معاون (ڈیمو رول)',
        startingRoleEn: 'Data Entry Assistant / Spreadsheet Clerk (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ کمپیوٹر پر حساب کتاب، سرکاری فارمز اور ریکارڈز کو غلطیوں سے پاک اور منظم کیسے کیا جاتا ہے۔',
    whatILearnedEn: 'You learned to organize digital records, build automatic calculation sheets, and handle office paperwork.',
    whatICanBuildUrdu: [
      'خودکار حساب کتاب والی گوگل شیٹس اور ایکسل فائلیں',
      'سرکاری محکموں اور نوکریوں کے لیے صاف ستھرے ریزیومے (CV)',
      'دکان کی انوائسز (بلز) اور ادھار کھاتے کا رجسٹر',
      'آن لائن داخلہ فارمز اور پی ڈی ایف دستاویزات'
    ],
    whatICanBuildEn: [
      'Automated calculation sheets in Google Sheets / Excel',
      'Clean professional CVs and job application forms',
      'Shop invoices and ledger management files',
      'Citizen online application forms and documentation'
    ],
    whereIsDemandUrdu: [
      'مقامی میڈیکل اسٹورز، ہارڈویئر کی دکانیں اور کارخانے',
      'اسکول اور کالجز جنہیں رزلٹ کارڈز اور فیس ریکارڈ بنانا ہو',
      'آن لائن فری لانسنگ مارکیٹ میں ایکسل کلیننگ اور ڈیٹا آرگنائزیشن'
    ],
    whereIsDemandEn: [
      'Pharmacies, retail hardware shops, and distribution outlets',
      'Schools needing student marksheet processing',
      'Freelance marketplaces needing spreadsheet cleanup'
    ],
    todaysSmallProjectUrdu: {
      title: 'اپنے پورے مہینے کے اخراجات کی ایک خوبصورت ایکسل شیٹ بنائیں',
      description: 'گوگل شیٹس میں ۵ کالم بنائیں: تاریخ، تفصیل، خرچ، زمرہ، اور نیچے کل رقم کا فارمولا لگائیں۔',
      estimatedMinutes: 25,
      actionStep: 'گوگل شیٹس کھولیں، ڈیٹا درج کریں اور =SUM فارمولا آزما کر محفوظ کریں۔',
    },
    todaysSmallProjectEn: {
      title: 'Build a Monthly Expense Spreadsheet',
      description: 'Create 5 columns in Google Sheets: Date, Description, Amount, Category, and add an automated =SUM total.',
      estimatedMinutes: 25,
      actionStep: 'Open Google Sheets, enter sample rows, and test the sum formula.',
    },
    futureIncomeTransformationUrdu: 'مقامی بازار میں دکانوں کے لیے "ماہانہ حساب کتاب سروس" شروع کریں۔ صرف روزانہ ۳۰ منٹ ڈیٹا درج کر کے متعدد دکانوں سے باوقار ماہانہ آمدن کمائیں۔',
    futureIncomeTransformationEn: 'Offer local shops a monthly bookkeeping service, spending 30 mins a day digitizing their receipts.',
    nextSkillRecommendationUrdu: {
      skillName: 'فری لانسنگ اور آن لائن پلیٹ فارمز (Freelancing)',
      whyLearn: 'کمپیوٹر ڈیٹا انٹری اور ایکسل کی صلاحیت کو اپ ورک اور فائور پر دنیا بھر کے کلائنٹس کو فروخت کریں۔',
      courseId: 'freelancing-digital-work-basics',
    },
    nextSkillRecommendationEn: {
      skillName: 'Freelancing Platforms & Client Bidding',
      whyLearn: 'Sell your spreadsheet and data management skills to global clients on Fiverr and Upwork.',
      courseId: 'freelancing-digital-work-basics',
    },
    bestNextActionUrdu: 'آج گوگل شیٹ پر ۱۰ اشیاء کا ایک فرضی بل بنا کر فارمولا ٹیسٹ کریں۔',
    bestNextActionEn: 'Create a sample 10-item bill in Google Sheets to test calculation formulas.',
    ethicalDisclaimerUrdu: 'قرآن کریم کی سخت تاکید ہے: "ناپ اور تول پورا کرو اور لوگوں کو ان کی چیزیں کم نہ دو۔" [سورۃ الاعراف: 85]',
    ethicalDisclaimerEn: 'The Quran commands: "Give full measure and weight with justice." Maintain complete integrity in all accounts.',
  },

  // 8. Freelancing (فری لانسنگ و آن لائن سروسز)
  {
    id: 'pathway-freelancing',
    categoryKey: 'freelancing',
    skillTitleUrdu: 'فری لانسنگ، آن لائن پلیٹ فارمز اور کلائنٹ ہینڈلنگ (Freelancing)',
    skillTitleEn: 'Freelancing, Client Bidding & Remote Services',
    categoryUrdu: 'فری لانسنگ اور آن لائن کیریئر',
    categoryEn: 'Freelancing & Remote Career',
    icon: 'Globe',
    color: 'emerald',
    relatedCourseIds: ['course-freelancing-1', 'course-freelancing-2'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'پروفائل بنانا، باوقار پروپوزل لکھنا، قیمت طے کرنا، اور ریویوز حاصل کرنے کے اصول سیکھیں۔',
        descEn: 'Learn profile creation, custom proposal writing, pricing milestones, and client communication.',
        actionUrdu: 'روزانہ ۱۵ منٹ کامیاب فری لانسرز کے پروپوزلز کے انداز کا مطالعہ کریں۔',
        actionEn: 'Analyze effective client proposals for 15 mins daily.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'اپنا مکمل فری لانس پورٹ فولیو اور ۳ بہترین سیمپلز ایک پی ڈی ایف میں یکجا کریں۔',
        descEn: 'Compile a professional portfolio showcase featuring your top 3 verified project samples.',
        actionUrdu: 'اپنی خدمات کا واضح مینو اور نمونہ جات کی فائل تیار کریں۔',
        actionEn: 'Assemble your portfolio showcase file ready to attach to proposals.',
        projectDeliverableUrdu: '۱ پروفیشنل فری لانس پروفائل اور سیمپل پورٹ فولیو',
        projectDeliverableEn: '1 verified freelance profile and portfolio deck',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: 'پہلے ۵ کسٹم پروپوزلز لکھیں جن میں کلائنٹ کے مسئلے کا سچا حل پیش کیا گیا ہو۔',
        descEn: 'Submit 5 tailored proposals directly addressing client problem statements.',
        actionUrdu: 'ایک حقیقی جاب پوسٹ پر خلوص اور سچائی پر مبنی بڈ جمع کروائیں۔',
        actionEn: 'Draft and send a focused proposal for a realistic beginner project.',
        whereNeededUrdu: 'Upwork, Fiverr, Facebook Groups, LinkedIn اور لوکل کلائنٹس',
        whereNeededEn: 'Fiverr, Upwork, LinkedIn, and direct remote company contracts',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'ڈالرز یا روپوں میں پروجیکٹ بیسڈ یا گھنٹہ وار بنیاد پر آزادانہ حلال کمائی۔',
        descEn: 'Earn project-based or hourly remote income with direct bank withdrawal.',
        ethicalIncomeUrdu: 'جو کام آتا ہو صرف وہی لیں، ڈیڈ لائن پر پورا اتریں اور کاپی پیسٹ پروپوزل سے بچیں۔',
        ethicalIncomeEn: 'Only bid on work you can genuinely deliver, and always respect deadlines.',
        startingRoleUrdu: 'فری لانس سروس پرووائیڈر (ڈیمو رول)',
        startingRoleEn: 'Freelance Service Specialist (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ گھر بیٹھے اپنے ہنر کو دیانت داری کے ساتھ عالمی اور ملکی منڈی میں کیسے پیش کیا جاتا ہے۔',
    whatILearnedEn: 'You learned to position your practical skills, pitch to remote clients, and win freelance projects.',
    whatICanBuildUrdu: [
      'فائور اور اپ ورک کے لیے دلکش سروس گیگز (Gigs)',
      'ہر جاب کے لیے مخصوص اور پر اثر کسٹم پروپوزل',
      'کلائنٹ کو پیش کرنے کے لیے پی ڈی ایف پورٹ فولیو',
      'کام کی ڈیلیوری کے ساتھ شائستہ شکریہ کا میسج'
    ],
    whatICanBuildEn: [
      'Optimized gig descriptions for Fiverr/Upwork',
      'Tailored, problem-solving job proposals',
      'Client-facing showcase portfolio decks',
      'Professional project handover summaries'
    ],
    whereIsDemandUrdu: [
      'دنیا بھر کے کلائنٹس جنہیں چھوٹے اور فوری ٹاسک کروانے ہوں',
      'ملکی کمپنیاں جنہیں ریموٹ ورک کے لیے ورکرز درکار ہوں'
    ],
    whereIsDemandEn: [
      'Global micro-business owners seeking quick digital tasks',
      'National firms hiring contract-based remote talent'
    ],
    todaysSmallProjectUrdu: {
      title: 'اپنے کسی ایک ہنر کے لیے ۲ پیراگراف کا کسٹم پروپوزل لکھیں',
      description: 'فرض کریں کسی کلائنٹ کو ایک لوگو، ایکسل شیٹ یا ای میل لکھوانی ہے، اسے بتائیں کہ آپ یہ کام کیسے اور کب تک کر دیں گے۔',
      estimatedMinutes: 20,
      actionStep: 'کاغذ یا نوٹ پیڈ پر لکھیں اور استاد سیکھو سے ریویو کروائیں۔',
    },
    todaysSmallProjectEn: {
      title: 'Draft a 2-Paragraph Job Proposal for Your Skill',
      description: 'Write a concise proposal stating how you will solve a client’s task, your timeline, and why you are dependable.',
      estimatedMinutes: 20,
      actionStep: 'Write in your notes app and verify its clarity.',
    },
    futureIncomeTransformationUrdu: 'پہلے ۵ چھوٹے پروجیکٹس ۵ اسٹار ریٹنگ کے ساتھ مکمل کریں۔ پھر اپنے ریٹس بتدریج بڑھائیں اور پرانے کلائنٹس سے مستقل ماہانہ کام حاصل کریں۔',
    futureIncomeTransformationEn: 'Deliver your first 5 small tasks with 5-star dedication. Then gradually increase your rates and turn one-off gigs into retainers.',
    nextSkillRecommendationUrdu: {
      skillName: 'مؤثر انگریزی گفتگو اور کسٹمر ڈیلنگ',
      whyLearn: 'انگریزی میں روانی عالمی کلائنٹس کے ساتھ ڈیلنگ کو آسان اور معاوضے کو کئی گنا بڑھا دیتی ہے۔',
      courseId: 'english-speaking-basics',
    },
    nextSkillRecommendationEn: {
      skillName: 'English Communication for Freelancers',
      whyLearn: 'Fluency in English client handling unlocks tier-1 markets with significantly higher project budgets.',
      courseId: 'english-speaking-basics',
    },
    bestNextActionUrdu: 'آج ایک فرضی جاب پوسٹ کے لیے ۳ لائنوں کا پر اثر تعارفی جملہ تیار کریں۔',
    bestNextActionEn: 'Draft a crisp 3-sentence proposal hook for a sample freelance job today.',
    ethicalDisclaimerUrdu: 'فری لانسنگ میں فیک ریویوز خریدنا یا ادھورا کام جمع کروا کر پیسے لینا حرام ہے۔ صرف حق کی کمائی کھائیں۔',
    ethicalDisclaimerEn: 'Buying fake reviews or delivering substandard work is strictly unethical. Strive for genuine excellence.',
  },

  // 9. Agriculture (جدید زراعت، باغبانی اور روایتی کھاد)
  {
    id: 'pathway-agriculture',
    categoryKey: 'agriculture',
    skillTitleUrdu: 'جدید زراعت، کچن گارڈننگ اور نامیاتی کھاد (Modern Agriculture)',
    skillTitleEn: 'Smart Agriculture, Kitchen Gardening & Composting',
    categoryUrdu: 'زراعت اور باغبانی',
    categoryEn: 'Agriculture & Local Farming',
    icon: 'Sprout',
    color: 'emerald',
    relatedCourseIds: ['course-agri-1', 'course-agri-kitchen-gardening'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'کم پانی میں ملچنگ، دیسی بیجوں کا تحفظ، اور گھر کے فضلے سے نامیاتی کھاد (Compost) بنانا سیکھیں۔',
        descEn: 'Learn water conservation through mulching, organic composting, and seasonal vegetable scheduling.',
        actionUrdu: 'روزانہ ۱۵ منٹ قدرتی کھاد اور بیجوں کی نشوونما کے اصولوں کا مطالعہ کریں۔',
        actionEn: 'Study natural composting and seed germination for 15 mins daily.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'گھر کے صحن یا گملے میں ایک چھوٹا کچن گارڈن یا نامیاتی کھاد کا ایک یونٹ تیار کریں۔',
        descEn: 'Set up a small organic compost pit or a home kitchen garden bed in pots/yard.',
        actionUrdu: 'پتوں اور گھریلو پسماندہ مواد سے قدرتی کھاد کا ایک بیج تیار کریں۔',
        actionEn: 'Prepare one compost container using dry leaves and organic kitchen scrap.',
        projectDeliverableUrdu: '۱ فعال کچن گارڈن بیڈ اور نامیاتی کھاد یونٹ',
        projectDeliverableEn: '1 active kitchen garden bed and composting setup',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: 'اپنے خاندان کے روزانہ سبزیوں کے خرچ میں بچت کریں اور پڑوسیوں کو بھی طریقہ سکھائیں۔',
        descEn: 'Reduce family vegetable spending and demonstrate organic techniques to neighboring farmers.',
        actionUrdu: 'گاؤں کے ۲ کسانوں کے ساتھ ملچنگ کے فوائد شیئر کریں۔',
        actionEn: 'Share water-saving mulching observations with 2 local farmers.',
        whereNeededUrdu: 'گاؤں کے کھیت، نرسریاں، دیہی گھرانے اور نامیاتی سبزیوں کی مقامی مارکیٹ',
        whereNeededEn: 'Local rural farms, organic produce markets, plant nurseries, and households',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'نامیاتی سبزیوں کی فروخت، پودوں کی نرسری، اور سستی نامیاتی کھاد بنا کر بیچنا۔',
        descEn: 'Sell organic vegetables, compost bags, and seedling starters locally.',
        ethicalIncomeUrdu: 'کھاد اور بیج میں ملاوٹ سے بچیں اور خالص قدرتی خوراک فراہم کریں۔',
        ethicalIncomeEn: 'Never dilute or falsely label produce. Pure organic yield brings true health and blessing.',
        startingRoleUrdu: 'ایگری سروس گائیڈ / کچن گارڈن سپروائزر (ڈیمو رول)',
        startingRoleEn: 'Kitchen Gardening Advisor / Small Farm Lead (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ زمین اور پانی کا دانشمندانہ استعمال کر کے گھر کا بجٹ کیسے بچایا جاتا ہے اور پیداوار کیسے بڑھائی جاتی ہے۔',
    whatILearnedEn: 'You learned to conserve irrigation water, enrich soil with zero-cost compost, and grow fresh produce.',
    whatICanBuildUrdu: [
      'گھر کے صحن میں سدا بہار کچن گارڈن',
      'گھریلو کچرے اور سوکھے پتوں سے بنی خالص نامیاتی کھاد',
      'موسمی سبزیوں کا کاشتکاری کلینڈر',
      'پانی کی بچت کے لیے ڈرپ یا گھڑے کی آبپاشی کا ماڈل'
    ],
    whatICanBuildEn: [
      'Household kitchen garden vegetable beds',
      'Zero-cost organic compost from yard waste',
      'Seasonal local planting schedule',
      'Low-cost pitcher / drip irrigation model'
    ],
    whereIsDemandUrdu: [
      'مقامی خاندان جن کا سبزیوں کا ماہانہ خرچ بہت زیادہ ہے',
      'گاؤں کے کسان جو مہنگی کیمیائی کھادوں کا سستا متبادل چاہتے ہیں',
      'شہر کے وہ افراد جو خالص نامیاتی سبزیاں خریدنا چاہتے ہیں'
    ],
    whereIsDemandEn: [
      'Families looking to slash daily grocery budgets',
      'Farmers seeking low-cost organic alternatives to chemical fertilizer',
      'Urban buyers wanting chemical-free fresh produce'
    ],
    todaysSmallProjectUrdu: {
      title: 'ایک گملے یا پلاسٹک کی بوتل میں دھنیا/پودینہ اگائیں',
      description: 'ایک خالی ڈبے یا گملے میں مٹی بھریں، بیج بوئیں، ہلکا پانی دیں اور دھوپ والی جگہ پر رکھیں۔',
      estimatedMinutes: 20,
      actionStep: 'گملے میں مٹی اور بیج ڈال کر تاریخ نوٹ کر لیں۔',
    },
    todaysSmallProjectEn: {
      title: 'Plant Fresh Mint or Coriander in a Recycled Container',
      description: 'Fill a recycled tub with soil, plant seeds with compost, water lightly, and place in morning sunlight.',
      estimatedMinutes: 20,
      actionStep: 'Prepare the pot, plant seeds, and note the planting date.',
    },
    futureIncomeTransformationUrdu: 'گاؤں میں سستے داموں نامیاتی کھاد تیار کر کے بیگ بنا کر فروخت کریں۔ یا گھر کی تازہ نامیاتی سبزیاں محلے کی دکانوں پر معقول منافع کے ساتھ سپلائی کریں۔',
    futureIncomeTransformationEn: 'Bag and sell enriched organic compost locally or supply fresh pesticide-free greens to neighborhood markets.',
    nextSkillRecommendationUrdu: {
      skillName: 'چھوٹا کاروبار اور مقامی دکان کا انتظام',
      whyLearn: 'زرعی پیداوار کو صحیح قیمت پر مارکیٹ کرنے کے لیے کاروباری حساب کتاب اور سیلز کی سمجھ ضروری ہے۔',
      courseId: 'business-entrepreneurship-basics',
    },
    nextSkillRecommendationEn: {
      skillName: 'Micro-Enterprise & Local Commerce',
      whyLearn: 'Commercializing agricultural yield requires sound bookkeeping, pricing, and retail coordination.',
      courseId: 'business-entrepreneurship-basics',
    },
    bestNextActionUrdu: 'آج کچن سے سبزیوں کے چھلکے اور سوکھے پتے جمع کر کے کھاد کے گڑھے میں ڈالیں۔',
    bestNextActionEn: 'Collect kitchen vegetable scraps and dry leaves into a compost box today.',
    ethicalDisclaimerUrdu: 'زمین اور ماحولیات اللہ کی امانت ہیں۔ قدرتی وسائل کی حفاظت اور مخلوق کو پاکیزہ رزق کھلانا صدقہ جاریہ ہے۔',
    ethicalDisclaimerEn: 'The earth and water are divine trusts. Nurturing healthy soil and providing wholesome food is continuous charity.',
  },

  // 10. Local Business (مقامی دکان و چھوٹا کاروبار)
  {
    id: 'pathway-local-business',
    categoryKey: 'local_business',
    skillTitleUrdu: 'مقامی دکان، چھوٹا کاروبار اور کیش فلو مینجمنٹ (Local Commerce)',
    skillTitleEn: 'Small Business, Inventory & Cash Flow Management',
    categoryUrdu: 'کاروبار اور خود روزگار',
    categoryEn: 'Micro-Enterprise & Commerce',
    icon: 'Store',
    color: 'amber',
    relatedCourseIds: ['course-business-1', 'course-business-accounting'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'کم سرمائے سے شروعات، منافع اور نقصان کا درست حساب، ادھار کے نقصانات سے بچاؤ، اور انوینٹری کنٹرول۔',
        descEn: 'Learn low-capital bootstrapping, profit/loss tracking, credit risk control, and stock turnover.',
        actionUrdu: 'روزانہ ۱۵ منٹ کاروباری نفع نقصان کے بنیادی فارمولوں کو سمجھیں۔',
        actionEn: 'Study cash flow math and inventory management for 15 mins daily.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'ایک فرضی ۱۰ ہزار روپے کے چھوٹے بزنس کا مکمل فزیبلٹی پلان اور بجٹ شیٹ بنائیں۔',
        descEn: 'Draft a 10,000 PKR micro-business feasibility model with cost-benefit analysis.',
        actionUrdu: 'ایک سادہ کاروبار کی کل لاگت، ممکنہ فروخت اور متوقع خالص منافع کا خاکہ تیار کریں۔',
        actionEn: 'Map out the startup costs, daily sales targets, and net margin on paper.',
        projectDeliverableUrdu: '۱ تفصیلی کاروباری فزیبلٹی رپورٹ اور کیش فلو پلان',
        projectDeliverableEn: '1 micro-business feasibility model and cash flow ledger',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: 'کسی حقیقی چھوٹی دکان کا اسٹاک چیک کریں اور دیکھیں کہ کون سی چیز سب سے زیادہ نفع دیتی ہے۔',
        descEn: 'Analyze a real local retail stall to identify fast-moving vs slow-moving stock.',
        actionUrdu: 'ایک دکاندار کے ساتھ بیٹھ کر ان کا خرچ کم کرنے کی کوئی عملی تجویز شیئر کریں۔',
        actionEn: 'Share an actionable cost-saving or waste-reduction idea with a shopkeeper.',
        whereNeededUrdu: 'قریبی بازار، موبائل شاپس، کریانہ، فوڈ اسٹالز اور ہول سیلرز',
        whereNeededEn: 'Village markets, retail grocery, mobile phone kiosks, and local suppliers',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'اپنا خود کا منافع بخش یونٹ یا پارٹنرشپ پر مبنی چھوٹا تجارتی سیٹ اپ قائم کرنا۔',
        descEn: 'Operate a sustainable micro-enterprise or partner with existing distributors.',
        ethicalIncomeUrdu: 'سود (Riba) اور ذخیرہ اندوزی سے مکمل پاک، صرف سچے نفع نقصان پر مبنی تجارت۔',
        ethicalIncomeEn: 'Strictly zero interest (riba) and zero hoarding. Genuine risk-and-reward trade.',
        startingRoleUrdu: 'چھوٹا تاجر / کاروباری مینیجر (ڈیمو رول)',
        startingRoleEn: 'Micro-Enterprise Owner / Retail Operator (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ بغیر کسی بڑے قرضے کے، کم رقم سے دانشمندانہ طور پر مستقل نفع کیسے کمایا جاتا ہے۔',
    whatILearnedEn: 'You learned to bootstrap a viable micro-business with disciplined accounting and zero interest.',
    whatICanBuildUrdu: [
      'چھوٹے کاروبار کا ۱ صفحے کا بزنس ماڈل پلان',
      'یومیہ نفع و نقصان اور ادھار کا محفوظ ریکارڈ',
      'سامان کی خریداری پر سستے ہول سیل ریٹس کا موازنہ',
      'گاہکوں کو راغب کرنے کا سادہ لائلٹی پروگرام'
    ],
    whatICanBuildEn: [
      '1-page micro-business canvas model',
      'Daily profit-loss and credit management log',
      'Wholesale supplier cost comparison sheet',
      'Customer retention and referral scheme'
    ],
    whereIsDemandUrdu: [
      'وہ نوجوان جو خود کا باوقار حلال روزگار شروع کرنا چاہتے ہیں',
      'مقامی مارکیٹ جہاں کسی خاص سامان کی قلت ہو'
    ],
    whereIsDemandEn: [
      'Youth aspiring to build self-reliant local livelihoods',
      'Neighborhoods underserved in quality daily goods'
    ],
    todaysSmallProjectUrdu: {
      title: 'اپنے علاقے کی کسی ایک مارکیٹ ضرورت کا ۱ صفحے کا خاکہ بنائیں',
      description: 'سوچیں کہ آپ کے گاؤں یا قصبے میں ایسی کون سی چیز ہے جس کے لیے لوگوں کو دور جانا پڑتا ہے، اور وہ یہاں کیسے مہیا ہو سکتی ہے۔',
      estimatedMinutes: 20,
      actionStep: '۳ سوالات کے جواب لکھیں: ضرورت کیا ہے؟ کتنی لاگت آئے گی؟ گاہک کون ہوں گے؟',
    },
    todaysSmallProjectEn: {
      title: 'Map a Local Market Opportunity on 1 Page',
      description: 'Identify a missing local service or good in your area, and map out cost, demand, and potential suppliers.',
      estimatedMinutes: 20,
      actionStep: 'Write answers to 3 core questions: What is needed? What is the setup cost? Who buys it?',
    },
    futureIncomeTransformationUrdu: 'پہلے چھوٹے پیمانے پر تجربہ کریں، کمائی کا نصف حصہ دوبارہ کاروبار میں لگائیں (Reinvest)۔ یوں چند ماہ میں بغیر قرضے کے آپ کا سرمایہ مضبوط ہو جائے گا۔',
    futureIncomeTransformationEn: 'Test at micro-scale first, reinvesting 50% of profits back into inventory to grow without debt.',
    nextSkillRecommendationUrdu: {
      skillName: 'ڈیجیٹل مارکیٹنگ اور واٹس ایپ سیلز',
      whyLearn: 'دکان کے سامان کو سوشل میڈیا اور واٹس ایپ کے ذریعے پورے قصبے میں بیچیں۔',
      courseId: 'business-entrepreneurship-basics',
    },
    nextSkillRecommendationEn: {
      skillName: 'Digital Marketing & WhatsApp Commerce',
      whyLearn: 'Expand your retail footprint across neighboring villages using WhatsApp channels.',
      courseId: 'business-entrepreneurship-basics',
    },
    bestNextActionUrdu: 'آج کسی مقامی شاپ کی ۵ اہم اشیاء کے خرید اور فروخت ریٹس کا فرق نوٹ کریں۔',
    bestNextActionEn: 'Note down wholesale vs retail margins for 5 common items in your market today.',
    ethicalDisclaimerUrdu: 'حضرت عبد الرحمن بن عوفؓ کی سنت پر عمل کرتے ہوئے ہمیشہ نقد، صاف اور بغیر ملاوٹ کے سچی تجارت کریں۔',
    ethicalDisclaimerEn: 'Emulate the honest trading ethos of Abdur Rahman ibn Awf (RA): cash transactions, transparency, and fair margins.',
  },

  // 11. Community Services (کمیونٹی سروس، فلاحی قیادت اور عوامی پروجیکٹس)
  {
    id: 'pathway-community-services',
    categoryKey: 'community_services',
    skillTitleUrdu: 'کمیونٹی سروس، فلاحی پروجیکٹس اور قیادت (Community Leadership)',
    skillTitleEn: 'Community Development, Civic Projects & Leadership',
    categoryUrdu: 'کمیونٹی اور سماجی خدمات',
    categoryEn: 'Community & Civic Leadership',
    icon: 'HeartHandshake',
    color: 'rose',
    relatedCourseIds: ['course-comm-service-1', 'course-leadership-1'],
    stages: {
      learn: {
        titleUrdu: '۱. سیکھیں (Learn)',
        titleEn: '1. Learn',
        descUrdu: 'علاقائی مسائل کا سروے، لوگوں کو اچھے مقصد کے لیے جوڑنا، فلاحی فنڈز کی شفافیت اور پروجیکٹ مینجمنٹ۔',
        descEn: 'Learn community need surveying, volunteer coordination, transparent civic funding, and project execution.',
        actionUrdu: 'روزانہ ۱۵ منٹ کامیاب کمیونٹی فلاحی ماڈلز کا مطالعہ کریں۔',
        actionEn: 'Study successful community development case studies for 15 mins daily.',
        estimatedDays: 7,
      },
      build: {
        titleUrdu: '۲. بنائیں (Build)',
        titleEn: '2. Build',
        descUrdu: 'گاؤں میں صفائی، شجرکاری یا تعلیمی مہم کا ۱ صفحے کا تفصیلی ایکشن پلان بنائیں۔',
        descEn: 'Design a 1-page structured action proposal for a local sanitation, tree plantation, or tutoring drive.',
        actionUrdu: 'پروجیکٹ کی ضرورت، رضاکاروں کے فرائض اور مکمل بجٹ کا شفاف خاکہ تیار کریں۔',
        actionEn: 'Draft an itemized budget, task distribution, and timeline for the civic initiative.',
        projectDeliverableUrdu: '۱ مکمل کمیونٹی ایکشن پلان اور رضاکار گائیڈ',
        projectDeliverableEn: '1 complete community project charter and volunteer plan',
      },
      apply: {
        titleUrdu: '۳. لاگو کریں (Apply)',
        titleEn: '3. Apply',
        descUrdu: '۳ نوجوان ساتھیوں کے ساتھ مل کر گاؤں کے کسی ایک راستے کی صفائی یا ۵ پودے لگانے کا عملی پروجیکٹ کریں۔',
        descEn: 'Partner with 3 peers to execute a street cleanliness campaign or plant 5 shade trees.',
        actionUrdu: 'ایک حقیقی فلاحی کام مکمل کر کے اس کی تصویری رپورٹ برادری کے ساتھ شیئر کریں۔',
        actionEn: 'Execute one tangible community step and share the transparent outcome with elders.',
        whereNeededUrdu: 'مقامی فلاحی کمیٹیاں، اسکول، مساجد، ماحولیاتی مہمات اور این جی اوز',
        whereNeededEn: 'Village councils, school committees, mosque boards, and civic NGOs',
      },
      earn: {
        titleUrdu: '۴. کمائیں (Earn - Halal Potential)',
        titleEn: '4. Earn',
        descUrdu: 'این جی اوز اور اداروں میں پراجیکٹ کوآرڈینیٹر، کمیونٹی مینیجر یا فیلوشپس کے اعزازیہ مواقع۔',
        descEn: 'Qualify for civic fellowships, NGO field coordinator roles, and grant management stipends.',
        ethicalIncomeUrdu: 'عوامی فنڈز کی پائی پائی کا حساب اللہ کے سامنے دینا ہے۔ مکمل شفافیت لازم ہے۔',
        ethicalIncomeEn: 'Public and charity resources demand rigorous accountability and total transparency.',
        startingRoleUrdu: 'کمیونٹی پروجیکٹ لیڈ / کوآرڈینیٹر (ڈیمو رول)',
        startingRoleEn: 'Community Project Coordinator / Civic Lead (Demo Role)',
      },
    },
    whatILearnedUrdu: 'آپ نے سیکھا کہ ذاتی فائدے سے بلند ہو کر دوسروں کے دکھ درد کو بانٹنے اور منظم انداز میں برادری کا ہاتھ بٹانے کی قیادت کیسے کی جاتی ہے۔',
    whatILearnedEn: 'You learned to organize collective civic efforts, conduct needs analysis, and lead with empathy and integrity.',
    whatICanBuildUrdu: [
      'علاقائی مسائل اور ضروریات کی سروے رپورٹ',
      'فلاحی فنڈز کے جمع و خرچ کا شفاف ڈیجیٹل رجسٹر',
      'نوجوان رضاکاروں کی ٹیم کا ٹاسک شیڈول',
      'کمیونٹی شعور و آگاہی کے بینرز اور پمفلٹس'
    ],
    whatICanBuildEn: [
      'Local civic needs assessment report',
      'Transparent community donation & expense ledger',
      'Volunteer team operational roster',
      'Public awareness flyers and posters'
    ],
    whereIsDemandUrdu: [
      'گاؤں اور بستی کی پنچایتیں اور فلاحی سوسائٹیاں',
      'ماحولیاتی اور شجرکاری مہمات چلانے والی تنظیمیں',
      'تعلیم اور صحت کے لیے کام کرنے والے نجی ٹرسٹ اور این جی اوز'
    ],
    whereIsDemandEn: [
      'Village development committees and welfare trusts',
      'Environmental afforestation initiatives',
      'Non-profit education and public health organizations'
    ],
    todaysSmallProjectUrdu: {
      title: 'اپنے محلے کی صفائی یا پانی کا ۱ مسئلہ اور اس کا ۳ نکاتی حل لکھیں',
      description: 'ایک صفحے پر درج کریں کہ مسئلہ کیا ہے، کون سے ۳ آسان اقدامات سے یہ حل ہو سکتا ہے، اور کتنے روپے لگیں گے۔',
      estimatedMinutes: 20,
      actionStep: 'کاغذ پر حل لکھیں اور محلے کے کسی بڑے یا امام مسجد سے مشاورت کریں۔',
    },
    todaysSmallProjectEn: {
      title: 'Document 1 Local Civic Issue & a 3-Step Solution',
      description: 'Write a concise note on a local civic need (water, sanitation, or lighting) with 3 feasible community actions.',
      estimatedMinutes: 20,
      actionStep: 'Write the 3 action steps and discuss with a community elder.',
    },
    futureIncomeTransformationUrdu: 'کمیونٹی میں دیانت دار لیڈر کی حیثیت سے پہچان بننے کے بعد آپ ملکی و بین الاقوامی فلاحی اداروں میں پیڈ پروجیکٹ کوآرڈینیٹر یا سوشل انٹرپرائز مینیجر کا باوقار کردار حاصل کر سکتے ہیں۔',
    futureIncomeTransformationEn: 'Proven civic leadership opens doors to paid project coordination roles with reputable social enterprises and development agencies.',
    nextSkillRecommendationUrdu: {
      skillName: 'مؤثر ابلاغ اور عوامی خطاب (Public Speaking)',
      whyLearn: 'لوگوں کو اچھے کام پر متفق کرنے اور ان کا تعاون حاصل کرنے کے لیے شائستہ اور پر اثر گفتگو ضروری ہے۔',
      courseId: 'communication-skills-basics',
    },
    nextSkillRecommendationEn: {
      skillName: 'Public Speaking & Group Facilitation',
      whyLearn: 'Persuasive, respectful communication is key to rallying community volunteers around a shared goal.',
      courseId: 'communication-skills-basics',
    },
    bestNextActionUrdu: 'آج محلے میں کوئی گرا ہوا کوڑا صاف کر کے یا ایک پودے کو پانی دے کر شروعات کریں۔',
    bestNextActionEn: 'Take one immediate civic action today: clear litter from a walkway or water a neighborhood tree.',
    ethicalDisclaimerUrdu: 'رسول اللہ ﷺ نے فرمایا: "لوگوں میں سے اللہ کو سب سے زیادہ محبوب وہ ہے جو لوگوں کے لیے سب سے زیادہ نفع بخش ہو۔" [طبرانی: 6026]',
    ethicalDisclaimerEn: 'The Prophet ﷺ said: "The most beloved of people to Allah are those who are most beneficial to people." [Tabarani: 6026]',
  },
];

/**
 * Helper to match any course ID, category name, or keyword to its SkillOpportunityPathway
 */
export function getPathwayByCourseOrSkill(
  courseOrSkillId?: string,
  categoryName?: string
): SkillOpportunityPathway {
  if (!courseOrSkillId && !categoryName) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[0]; // Default to AI
  }

  const needle = `${courseOrSkillId || ''} ${categoryName || ''}`.toLowerCase();

  if (needle.includes('ai') || needle.includes('technology') || needle.includes('prompt') || needle.includes('مصنوعی')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[0];
  }
  if (needle.includes('canva') || needle.includes('graphic') || needle.includes('design') || needle.includes('ڈیزائن') || needle.includes('پوسٹر')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[1];
  }
  if (needle.includes('video') || needle.includes('editing') || needle.includes('capcut') || needle.includes('ویڈیو')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[2];
  }
  if (needle.includes('comm') || needle.includes('english') || needle.includes('speaking') || needle.includes('ابلاغ') || needle.includes('گفتگو')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[3];
  }
  if (needle.includes('sales') || needle.includes('گاہک') || needle.includes('سیلز') || needle.includes('فروخت')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[4];
  }
  if (needle.includes('market') || needle.includes('social') || needle.includes('مارکیٹنگ') || needle.includes('فیس بک')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[5];
  }
  if (needle.includes('comp') || needle.includes('excel') || needle.includes('sheet') || needle.includes('کمپیوٹر') || needle.includes('ڈیٹا')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[6];
  }
  if (needle.includes('free') || needle.includes('fiverr') || needle.includes('upwork') || needle.includes('فری لانسنگ')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[7];
  }
  if (needle.includes('agri') || needle.includes('farm') || needle.includes('garden') || needle.includes('زراعت') || needle.includes('کھاد')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[8];
  }
  if (needle.includes('business') || needle.includes('shop') || needle.includes('کاروبار') || needle.includes('دکان')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[9];
  }
  if (needle.includes('service') || needle.includes('communit') || needle.includes('lead') || needle.includes('فلاح') || needle.includes('خدمت')) {
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[10];
  }

  // Check direct relatedCourseIds
  const matched = SKILL_OPPORTUNITY_PATHWAYS_DATA.find((p) =>
    p.relatedCourseIds.some((cid) => cid.toLowerCase() === (courseOrSkillId || '').toLowerCase())
  );

  return matched || SKILL_OPPORTUNITY_PATHWAYS_DATA[0];
}
