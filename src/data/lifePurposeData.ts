import { LifePurposeArea, LifePurposeAreaId } from '../types';

export const LIFE_PURPOSE_AREAS: Record<LifePurposeAreaId, LifePurposeArea> = {
  // --------------------------------------------------------------------------
  // 1. اپنے آپ کے لیے (Personal Growth & Self-Mastery)
  // --------------------------------------------------------------------------
  self: {
    id: 'self',
    titleUrdu: 'اپنے آپ کے لیے',
    titleEn: 'For Yourself',
    subtitleUrdu: 'شخصیت کی تعمیر، خود شناسی، نظم و ضبط اور روزانہ بہتری',
    subtitleEn: 'Character Building, Discipline & Continuous Self-Improvement',
    iconName: 'User',
    themeColor: 'emerald',
    introUrdu:
      'جب تک انسان خود کو سنوارنے اور اپنی کمزوریوں کو قابو کرنے کی کوشش نہیں کرتا، وہ اپنے اردگرد کی دنیا میں بھی کوئی پائیدار مثبت تبدیلی نہیں لا سکتا۔ یہ سفر اندر کی اصلاح سے شروع ہوتا ہے۔',
    introEn:
      'True positive change begins from within. Until a person strives to refine their own character, conquer habits, and discipline their time, lasting external impact remains impossible.',
    todayAction: {
      titleUrdu: 'موبائل سے دوری اور مفید کام کی مہم',
      titleEn: '20-Minute Focus & Digital Detox Mission',
      descriptionUrdu:
        'آج مسلسل ۲۰ منٹ کے لیے موبائل فون اور سوشل میڈیا سے مکمل دور رہیں اور اس دوران کوئی ایک مفید کام کریں (مثلاً کوئی علمی کتاب پڑھیں، کمرا درست کریں، یا آئندہ دن کی منصوبہ بندی کریں)۔',
      descriptionEn:
        'Spend 20 continuous minutes completely away from your phone and social media to accomplish one meaningful task.',
      stepsUrdu: [
        'موبائل فون کو دوسرے کمرے میں سائلنٹ کر کے رکھ دیں۔',
        'ایک سادہ کاغذ اور قلم لیں یا کوئی معلوماتی کتاب اٹھائیں۔',
        '۲۰ منٹ تک بغیر کسی خلفشار کے صرف اس ایک کام پر توجہ دیں۔',
        'مکمل ہونے پر اپنے احساس اور ذہنی سکون کا جائزہ لیں۔'
      ],
      reflectionPromptUrdu: 'کیا اس ۲۰ منٹ کے فوکس کے بعد آپ نے ذہن میں سکون اور کام میں برکت محسوس کی؟',
      estimatedMinutes: 20,
      points: 25
    },
    youthFocusSection: {
      questionUrdu: 'ہم اپنی زندگی میں سستی، بے ترتیبی اور ٹال مٹول کیوں پیدا کر لیتے ہیں؟',
      explanationUrdu:
        'سستی یا ٹال مٹول کوئی پیدائشی عیب نہیں، بلکہ یہ نامکمل عادات، غیر واضح مقاصد اور ماحولیاتی عوامل کا مجموعہ ہے۔ جب تک ہم اصل وجوہات کو ہمدردی اور شعور سے نہیں سمجھیں گے، تبدیلی ممکن نہیں۔',
      keyFactorsUrdu: [
        {
          factor: 'نامکمل اور بے قاعدہ نیند',
          solution: 'رات کو دیر تک اسکرین دیکھنے سے دماغ تھک جاتا ہے۔ عشاء کے بعد جلدی سونے اور فجر کے وقت بیدار ہونے کا معمول بنائیں تاکہ جسم میں قدرتی توانائی بحال رہے۔'
        },
        {
          factor: 'موبائل اور سوشل میڈیا کا سستا ڈوپامائن (Dopamine)',
          solution: 'موبائل پر مسلسل اسکرولنگ دماغ کو بغیر محنت کے سستی خوشی دیتی ہے جس سے محنت طلب کام مشکل لگتے ہیں۔ نوٹیفیکیشنز بند کریں اور کام کے اوقات میں موبائل دور رکھیں۔'
        },
        {
          factor: 'واضح مقصد اور چھوٹے اہداف کا نہ ہونا',
          solution: 'جب ہدف بہت بڑا یا مبہم ہو تو دماغ گھبرا جاتا ہے۔ کام کو ۵ سے ۱۰ منٹ کے چھوٹے حصوں میں تقسیم کریں (مثلاً: صرف پہلا صفحہ پڑھنا)۔'
        },
        {
          factor: 'جسمانی حرکت اور ورزش کی کمی',
          solution: 'سارا دن ایک جگہ بیٹھے رہنے سے سستی چھا جاتی ہے۔ روزانہ کم از کم ۲۰ منٹ تیز چہل قدمی یا ہلکی ورزش خون کی روانی اور ذہنی چستی کے لیے لازمی ہے۔'
        },
        {
          factor: 'موٹیویشن (جذبے) کا انتظار کرنا',
          solution: 'جذبہ عارضی ہوتا ہے جبکہ ڈسپلن مستقل۔ کام اس لیے نہ کریں کہ دل چاہ رہا ہے، بلکہ اس لیے کریں کیونکہ یہ آپ کے مستقبل کے لیے ضروری ہے۔'
        }
      ],
      mindsetShiftUrdu: '”آپ کا مقابلہ دنیا کے کسی شخص سے نہیں، صرف اس شخص سے ہے جو آپ کل تھے۔ روزانہ صرف ۱٪ بہتری ایک سال میں ۳۷ گنا بڑی تبدیلی لاتی ہے۔“'
    },
    topics: [
      {
        id: 'self-1',
        titleUrdu: 'وقت کی پابندی اور صبح و شام کی روٹین',
        titleEn: 'Punctuality & Daily Morning Routine',
        iconName: 'Clock',
        summaryUrdu: 'وقت انسان کا سب سے قیمتی سرمایہ ہے۔ صبح کے ابتدائی اوقات برکت اور ذہنی یکسوئی کا بہترین ذریعہ ہیں۔',
        summaryEn: 'Time is the most precious resource. Early morning hours offer unparalleled focus and vitality.',
        quranSunnahWisdomUrdu: {
          arabicText: 'وَالْعَصْرِ ۙ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
          translationUrdu: 'قسم ہے زمانے کی! بیشک انسان خسارے میں ہے، سوائے ان کے جو ایمان لائے اور نیک عمل کیے۔',
          reference: 'سورۃ العصر، 103:1-3',
          practicalTakeawayUrdu: 'ہر گزرتا لمحہ واپس نہیں آ سکتا۔ اپنے دن کے اہم ترین کام صبح کے پہلے تین گھنٹوں میں مکمل کریں۔'
        },
        modernPracticalStepsUrdu: [
          'رات کو سونے سے پہلے اگلے دن کے صرف ۳ اہم کام لکھ لیں۔',
          'صبح الارم بجتے ہی بستر چھوڑ دیں اور فجر کی نماز ادا کریں۔',
          'جاگنے کے پہلے گھنٹے میں سوشل میڈیا نہ دیکھیں۔'
        ],
        audioScriptUrdu: 'وقت کی قدر کریں۔ رات کو جلدی سوئیں اور صبح کے وقت کو غنیمت جانیں۔ اپنے دن کو منصوبہ بندی کے تحت گزاریں۔'
      },
      {
        id: 'self-2',
        titleUrdu: 'جسمانی صفائی، طہارت اور ذاتی حفظانِ صحت',
        titleEn: 'Personal Hygiene & Physical Well-being',
        iconName: 'Sparkles',
        summaryUrdu: 'صاف ستھرا لباس، جسمانی طہارت اور خوشبو انسان کو باوقار اور پر اعتماد بناتی ہے۔',
        summaryEn: 'Cleanliness, personal grooming, and health instill dignity and inner self-respect.',
        quranSunnahWisdomUrdu: {
          translationUrdu: 'طہارت اور صفائی آدھا ایمان ہے۔',
          reference: 'صحیح مسلم: 223',
          practicalTakeawayUrdu: 'روزانہ مسواک یا دانت صاف کرنا، باقاعدہ نہانا اور ناخن تراشنا سنتِ نبوی اور اعلیٰ اخلاق کی علامت ہے۔'
        },
        modernPracticalStepsUrdu: [
          'دانتوں کی صفائی دن میں کم از کم دو بار لازمی کریں۔',
          'صاف اور باوقار لباس پہنیں، چاہے وہ کتنا ہی سادہ کیوں نہ ہو۔',
          'روزانہ مناسب مقدار میں صاف پانی پیئیں اور متوازن غذا کھائیں۔'
        ],
        audioScriptUrdu: 'صفائی ایمان کا نصف ہے۔ اپنے جسم، دانتوں، ناخنوں اور لباس کو ہمیشہ پاک صاف اور باوقار رکھیں۔'
      },
      {
        id: 'self-3',
        titleUrdu: 'غصے پر قابو اور زبان کی حفاظت',
        titleEn: 'Anger Management & Guarding the Tongue',
        iconName: 'ShieldAlert',
        summaryUrdu: 'غصے میں لیا گیا فیصلہ ہمیشہ نقصان دہ ہوتا ہے۔ باوقار انسان وہ ہے جو اشتعال کے وقت خاموشی اختیار کرے۔',
        summaryEn: 'True strength lies in controlling one\'s temper and avoiding hurtful words during conflicts.',
        quranSunnahWisdomUrdu: {
          arabicText: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',
          translationUrdu: 'اور جو غصے کو پی جانے والے اور لوگوں کو معاف کرنے والے ہیں، اللہ ایسے نیکوکاروں کو پسند فرماتا ہے۔',
          reference: 'سورۃ آل عمران، 3:134',
          practicalTakeawayUrdu: 'غصے کے وقت اگر کھڑے ہوں تو بیٹھ جائیں، پانی پیئیں اور اعوذ باللہ پڑھیں۔'
        },
        modernPracticalStepsUrdu: [
          'جب غصہ آئے تو ۱۰ سیکنڈ کے لیے گہرا سانس لیں اور فوری جواب نہ دیں۔',
          'کوئی بھی میسج یا کمنٹ غصے کی حالت میں ٹائپ کر کے فوری نہ بھیجیں۔',
          'کوشش کریں کہ آپ کی زبان سے کسی کا دل نہ دکھے۔'
        ],
        audioScriptUrdu: 'طاقتور وہ نہیں جو پچھاڑ دے، بلکہ طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔'
      },
      {
        id: 'self-4',
        titleUrdu: 'علم، مطالعہ اور باقاعدہ سوچ بچار (Critical Thinking)',
        titleEn: 'Lifelong Learning & Critical Thinking',
        iconName: 'BookOpen',
        summaryUrdu: 'روزانہ علم حاصل کرنا ذہن کو وسعت دیتا ہے اور انسان کو درست اور غلط میں تمیز سکھاتا ہے۔',
        summaryEn: 'Continuous reading and analytical thinking liberate the mind from ignorance and misconceptions.',
        quranSunnahWisdomUrdu: {
          arabicText: 'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',
          translationUrdu: 'فرما دیجئے: کیا وہ لوگ جو علم رکھتے ہیں اور جو نہیں رکھتے برابر ہو سکتے ہیں؟',
          reference: 'سورۃ الزمر، 39:9',
          practicalTakeawayUrdu: 'ہر روز کم از کم ایک نئی مفید بات سیکھیں اور کسی سنی سنائی بات پر اندھا اعتماد نہ کریں۔'
        },
        modernPracticalStepsUrdu: [
          'روزانہ ۱۰ سے ۱۵ منٹ کسی اچھی کتاب کے ۲ سے ۳ صفحات پڑھیں۔',
          'ہر خبر یا بات کو ماننے سے پہلے اس کی اصل دلیل یا تحقیق دیکھیں۔',
          'جو نیا ہنر یا بات سیکھیں، اسے کاپی پر نوٹ کریں۔'
        ],
        audioScriptUrdu: 'علم حاصل کرنا ہر مرد اور عورت پر فرض ہے۔ روزانہ مطالعہ کریں اور سوال پوچھنے اور سمجھنے کی عادت ڈالیں۔'
      }
    ],
    reflectionQuestions: [
      {
        questionUrdu: 'آج آپ نے اپنے وقت کا کتنا حصہ تعمیری کاموں اور کتنا حصہ سوشل میڈیا پر بغیر مقصد کے گزارا؟',
        questionEn: 'How much of your day was spent on constructive growth vs mindless scrolling?',
        encouragingNoteUrdu: 'محاسبہ احساسِ ندامت کے لیے نہیں بلکہ کل کے دن کو بہتر بنانے کا پہلا قدم ہے۔'
      },
      {
        questionUrdu: 'کیا آج آپ نے کسی بات پر غصے میں زبان پر قابو رکھا یا کوئی نئی اچھی بات سیکھی؟',
        questionEn: 'Did you control your temper today or learn one beneficial piece of knowledge?',
        encouragingNoteUrdu: 'شاباش! چھوٹی چھوٹی کوششیں ہی عظیم انسان بناتی ہیں۔'
      }
    ],
    audioOverviewUrdu:
      'السلام علیکم! اپنے آپ کو سنوارنے کے سفر میں خوش آمدید۔ سستی، ٹال مٹول اور غصے پر قابو پائیں، روزانہ وقت کی قدر کریں، پاکیزگی اختیار کریں اور روزانہ ایک چھوٹی سی بہتری ضرور لائیں۔'
  },

  // --------------------------------------------------------------------------
  // 2. خاندان کے لیے (Family Harmony & Loving Care)
  // --------------------------------------------------------------------------
  family: {
    id: 'family',
    titleUrdu: 'خاندان کے لیے',
    titleEn: 'For Family',
    subtitleUrdu: 'والدین کا ادب، میاں بیوی کا احترام، بچوں کی تربیت اور گھریلو امن',
    subtitleEn: 'Parents Respect, Marital Love, Child Nurturing & Peaceful Home',
    iconName: 'Home',
    themeColor: 'teal',
    introUrdu:
      'گھر اور خاندان انسان کا سب سے مضبوط قلعہ ہے۔ اگر گھر کے اندر محبت، انصاف، سچی ہمدردی اور نرم گفتگو کا ماحول ہو تو انسان باہر کی دنیا کی ہر آزمائش کا باوقار انداز میں مقابلہ کر سکتا ہے۔',
    introEn:
      'Family is the sanctuary of the soul. When homes are nurtured with respect, gentleness, and mutual support, every individual flourishes with emotional resilience.',
    todayAction: {
      titleUrdu: 'گھریلو تعاون اور احسان کا عمل',
      titleEn: 'Unsolicited Act of Household Care',
      descriptionUrdu:
        'آج گھر کے کسی فرد (والدہ، والد، شریکِ حیات یا بہن بھائی) کا کوئی ایک کام بغیر ان کے کہے محبت سے کر دیں، اور ان کا شکریہ ادا کریں۔',
      descriptionEn:
        'Perform a thoughtful chore or helpful gesture for a family member today without being asked, and express genuine gratitude.',
      stepsUrdu: [
        'دیکھیں کہ گھر میں اس وقت کون زیادہ تھکا ہوا یا مصروف ہے۔',
        'کوئی کام (مثلاً برتن سمیٹنا، پانی پلانا، سامان لا کر دینا، یا آرام کا خیال رکھنا) خود سے کر دیں۔',
        'والدین کے سامنے مسکرا کر ادب سے بات کریں۔',
        'گھر میں گفتگو کے دوران اپنے موبائل کو ایک طرف رکھ دیں۔'
      ],
      reflectionPromptUrdu: 'جب آپ نے اپنے گھر والوں کی مدد کی تو ان کے چہرے کے تاثرات اور گھر کا ماحول کیسا رہا؟',
      estimatedMinutes: 15,
      points: 25
    },
    topics: [
      {
        id: 'family-1',
        titleUrdu: 'والدین کے ساتھ حسنِ سلوک اور دعا',
        titleEn: 'Kindness & Devotion to Parents',
        iconName: 'HeartHandshake',
        summaryUrdu: 'والدین دنیا میں اللہ کی سب سے بڑی نعمت ہیں۔ ان کے سامنے آواز نیچی رکھنا اور ان کی خدمت کرنا برکت کا دروازہ ہے۔',
        summaryEn: 'Serving parents with humility and kindness unlocks endless peace, blessings, and spiritual light.',
        quranSunnahWisdomUrdu: {
          arabicText: 'وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ',
          translationUrdu: 'اور والدین کے ساتھ حسنِ سلوک کرو، اگر ان میں سے کوئی ایک یا دونوں تمہارے سامنے بڑھاپے کو پہنچ جائیں تو انہیں ”اف“ تک نہ کہو اور نہ انہیں جھڑکو۔',
          reference: 'سورۃ الاسراء، 17:23',
          practicalTakeawayUrdu: 'والدین کی رائے سے اختلاف بھی ہو تو گفتگو میں ادب، محبت اور نرمی کو ہاتھ سے نہ جانے دیں۔'
        },
        modernPracticalStepsUrdu: [
          'روزانہ کم از کم ایک بار والدین کے پاس بیٹھ کر ان کا حال پوچھیں اور ان کی بات غور سے سنیں۔',
          'اگر والدین دور رہتے ہوں تو روزانہ فون پر ان کی خیریت معلوم کریں۔',
          'ہر نماز کے بعد والدین کے لیے مغفرت اور صحت کی دعا کریں۔'
        ],
        audioScriptUrdu: 'والدین کے ساتھ نرمی اور ادب سے پیش آئیں۔ ان کی بات پر غصہ نہ کریں اور ان کے لیے روزانہ دل سے دعا مانگیں۔'
      },
      {
        id: 'family-2',
        titleUrdu: 'میاں بیوی کا باہمی احترام اور محبت',
        titleEn: 'Mutual Respect & Compassion in Marriage',
        iconName: 'Heart',
        summaryUrdu: 'ازدواجی زندگی محبت، درگزر اور باہمی تعاون سے خوبصورت بنتی ہے۔ ایک دوسرے کی عزت سب سے اہم ہے۔',
        summaryEn: 'A blessed marital relationship thrives on mutual empathy, overlooking small faults, and honorable partnership.',
        quranSunnahWisdomUrdu: {
          arabicText: 'وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ',
          translationUrdu: 'اور ان کے ساتھ اچھے طریقے سے زندگی بسر کرو۔',
          reference: 'سورۃ النساء، 4:19',
          practicalTakeawayUrdu: 'تم میں سے بہترین وہ ہے جو اپنے گھر والوں کے لیے بہترین ہے۔'
        },
        modernPracticalStepsUrdu: [
          'ایک دوسرے کی چھوٹی موٹی غلطیوں کو نظر انداز کریں اور طنز سے گریز کریں۔',
          'گھریلو کاموں اور بچوں کی ذمہ داریوں کو مل کر سنبھالیں۔',
          'اختلاف ہو تو اکیلے میں پرسکون لہجے میں بات کریں، تیسرے کے سامنے تذلیل نہ کریں۔'
        ],
        audioScriptUrdu: 'میاں بیوی ایک دوسرے کا لباس اور سہارا ہیں۔ گھر کے فیصلوں میں باہمی مشاورت اور عزت کو بنیاد بنائیں۔'
      },
      {
        id: 'family-3',
        titleUrdu: 'خواتین کے آرام کی قدر اور گھریلو کام میں تعاون',
        titleEn: 'Valuing Women\'s Rest & Shared Chores',
        iconName: 'Sparkles',
        summaryUrdu: 'گھر کی خواتین سارا دن محنت کرتی ہیں۔ نبی کریم ﷺ خود اپنے گھر کے کاموں میں ہاتھ بٹایا کرتے تھے۔',
        summaryEn: 'Honoring mothers, wives, and daughters by actively sharing household tasks reflects true prophetic character.',
        quranSunnahWisdomUrdu: {
          translationUrdu: 'حضرت عائشہؓ فرماتی ہیں: نبی کریم ﷺ اپنے گھر والوں کی خدمت اور کام کاج میں شریک رہتے تھے۔',
          reference: 'صحیح بخاری: 676',
          practicalTakeawayUrdu: 'گھر کے کام صرف عورت کی ذمہ داری نہیں، مرد کا ہاتھ بٹانا سنت اور اخلاق کا تقاضا ہے۔'
        },
        modernPracticalStepsUrdu: [
          'کھانے کے بعد اپنے برتن خود اٹھا کر کچن میں رکھیں۔',
          'گھر کے کاموں میں بہنوں، والدہ یا شریکِ حیات کا بغیر طعنے کے بوجھ بانٹیں۔',
          'انہیں روزمرہ آرام، نیند اور اپنی صحت کے لیے وقت نکالنے کا موقع دیں۔'
        ],
        audioScriptUrdu: 'گھر کے کاموں میں ہاتھ بٹانا نبی کریم صلی اللہ علیہ وسلم کی سنت ہے۔ خواتین کے آرام اور صحت کا پورا خیال رکھیں۔'
      },
      {
        id: 'family-4',
        titleUrdu: 'بچوں کی تربیت اور گھریلو اسکرین ٹائم کا اعتدال',
        titleEn: 'Child Nurturing & Healthy Screen Limits',
        iconName: 'Users',
        summaryUrdu: 'بچے نصیحت سے کم اور عمل سے زیادہ سیکھتے ہیں۔ گھر میں محبت بھرا اور محفوظ ماحول فراہم کریں۔',
        summaryEn: 'Children learn primarily through observed behavior. Create a safe, encouraging, screen-balanced environment.',
        quranSunnahWisdomUrdu: {
          translationUrdu: 'کسی باپ نے اپنی اولاد کو اچھے ادب اور عمدہ اخلاق سے بہتر کوئی تحفہ نہیں دیا۔',
          reference: 'جامع ترمذی: 1952',
          practicalTakeawayUrdu: 'بچوں کو ڈرانے کے بجائے ان سے دوستانہ گفتگو کریں اور ان کے سوالات کے پیار سے جواب دیں۔'
        },
        modernPracticalStepsUrdu: [
          'کھانے کی میز پر اور سونے کے وقت تمام افراد موبائل فون بند رکھیں۔',
          'روزانہ بچوں کے ساتھ کم از کم آدھا گھنٹہ کوئی کھیل، کتاب یا گفتگو کریں۔',
          'بچوں کو سچ بولنے پر انعام دیں، غلطی پر مارنے پیٹنے کے بجائے سمجھائیں۔'
        ],
        audioScriptUrdu: 'بچوں کی تربیت پیار اور عمدہ نمونے سے کریں۔ کھانے کے دوران موبائل فون استعمال نہ کریں اور خاندان کو وقت دیں۔'
      }
    ],
    reflectionQuestions: [
      {
        questionUrdu: 'کیا آج آپ نے اپنے گھر میں کسی پر بلاوجہ غصہ کیا یا کسی کی حوصلہ افزائی کی؟',
        questionEn: 'Did you lose temper at home today, or did you encourage someone with kind words?',
        encouragingNoteUrdu: 'گھر کے اندر نرمی لانا دنیا کی سب سے بڑی نیکیوں میں سے ہے۔'
      }
    ],
    audioOverviewUrdu:
      'خاندان کا نظام باہمی محبت، قربانی اور ادب پر قائم ہے۔ والدین کا احترام کریں، شریکِ حیات کی قدر کریں، گھر کے کاموں میں ہاتھ بٹائیں اور بچوں کو بہترین اخلاق سکھائیں۔'
  },

  // --------------------------------------------------------------------------
  // 3. معاشرے کے لیے (Civic Duty, Neighbors & Public Ethics)
  // --------------------------------------------------------------------------
  society: {
    id: 'society',
    titleUrdu: 'معاشرے کے لیے',
    titleEn: 'For Society',
    subtitleUrdu: 'راستوں کی صفائی، سچائی، امانت، پڑوسیوں کے حقوق اور ملاوٹ و رشوت کا خاتمہ',
    subtitleEn: 'Public Cleanliness, Integrity, Neighbor Rights & Zero Corruption',
    iconName: 'Users',
    themeColor: 'cyan',
    introUrdu:
      'ایک باشعور مسلمان اور انسان وہ ہے جس کے ہاتھ اور زبان سے اس کے اردگرد کے لوگ محفوظ رہیں۔ گلی، محلے، سڑک اور بازار میں دیانت داری اور خدمت ہی ایک مہذب معاشرہ بناتی ہے۔',
    introEn:
      'A true civil community is defined by mutual trust, clean public spaces, fair trade, neighborhood compassion, and ethical honesty in all social interactions.',
    todayAction: {
      titleUrdu: 'راستے کی صفائی اور آسانی پیدا کرنے کا عمل',
      titleEn: 'Public Courtesy & Removal of Harm',
      descriptionUrdu:
        'آج گلی، سڑک یا عوامی جگہ سے کوئی کوڑا کرکٹ اٹھا کر ڈسٹ بن میں ڈالیں یا کسی کے راستے کی رکاوٹ دور کریں۔',
      descriptionEn:
        'Clear litter or remove an obstacle from a shared public path, sidewalk, or neighborhood street today.',
      stepsUrdu: [
        'جب بھی باہر نکلیں، اپنا کوڑا سڑک یا گلی میں نہ پھینکیں۔',
        'اگر کوئی پتھر، کانٹا یا گندگی راستے میں نظر آئے تو اسے ہٹا دیں۔',
        'پڑوسی یا کسی راہگیر کو مسکرا کر سلام کریں۔',
        'گاڑی یا موٹر سائیکل چلاتے وقت پیدل چلنے والوں کو راستہ دیں۔'
      ],
      reflectionPromptUrdu: 'جب آپ نے راستے سے رکاوٹ یا گندگی ہٹائی تو آپ کو اپنے اندر کیسی خوشی اور طہارت محسوس ہوئی؟',
      estimatedMinutes: 10,
      points: 25
    },
    topics: [
      {
        id: 'society-1',
        titleUrdu: 'گلی محلے کی صفائی اور راستے کے حقوق',
        titleEn: 'Civic Cleanliness & Highway Etiquette',
        iconName: 'Sparkles',
        summaryUrdu: 'راستے سے تکلیف دہ چیز ہٹانا صدقہ ہے۔ گلی اور پبلک جگہ کو اپنا گھر سمجھ کر صاف رکھنا فرض ہے۔',
        summaryEn: 'Removing harm from public pathways is an act of charity. Public cleanliness is a civic duty.',
        quranSunnahWisdomUrdu: {
          translationUrdu: 'ایمان کے ستر سے زیادہ شعبے ہیں، سب سے افضل لا الہ الا اللہ ہے اور سب سے ادنیٰ راستے سے تکلیف دہ چیز کو ہٹانا ہے۔',
          reference: 'صحیح مسلم: 35',
          practicalTakeawayUrdu: 'اپنے گھر کا کچرا گلی یا نالی میں نہ پھینکیں، بلکہ محفوظ کوڑے دان میں ڈالیں۔'
        },
        modernPracticalStepsUrdu: [
          'گاڑی یا موٹرسائیکل سے کوڑا باہر سڑک پر مت پھینکیں۔',
          'اپنے گھر کے سامنے کی گلی کو خود روزانہ جھاڑو لگا کر صاف رکھیں۔',
          'پانی کی پائپ لائن یا نالی کا پانی گلی میں کھڑا نہ ہونے دیں۔'
        ],
        audioScriptUrdu: 'راستے سے تکلیف دہ چیز ہٹانا صدقہ ہے۔ گلی اور محلے کو اپنا گھر سمجھ کر صاف رکھیں اور کوڑا سڑک پر نہ پھینکیں۔'
      },
      {
        id: 'society-2',
        titleUrdu: 'سچائی، امانت داری اور ملاوٹ و بدعنوانی سے پرہیز',
        titleEn: 'Honesty, Trustworthiness & Fair Trade',
        iconName: 'ShieldAlert',
        summaryUrdu: 'تجارت، ملازمت اور روزمرہ معاملات میں سچ بولنا اور ناپ تول پورا کرنا برکت اور عزت کی بنیاد ہے۔',
        summaryEn: 'Honesty in speech and business transactions ensures prosperity and preserves societal trust.',
        quranSunnahWisdomUrdu: {
          arabicText: 'وَيْلٌ لِّلْمُطَفِّفِينَ ۙ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ',
          translationUrdu: 'ہلاکت ہے ناپ تول میں کمی کرنے والوں کے لیے، جو لوگوں سے ناپ کر لیں تو پورا لیں اور جب انہیں ناپ یا تول کر دیں تو کم دیں۔',
          reference: 'سورۃ المطففین، 83:1-3',
          practicalTakeawayUrdu: 'جس نے ملاوٹ کی یا دھوکہ دیا، وہ ہم میں سے نہیں ہے۔ (فرمانِ نبوی ﷺ)'
        },
        modernPracticalStepsUrdu: [
          'چاہے چھوٹا سودا ہو یا بڑا، چیز کے عیب کو گاہک کے سامنے واضح کریں۔',
          'دفتر یا کام کی جگہ پر ڈیوٹی کے وقت میں بددیانتی نہ کریں۔',
          'رشوت دینے اور لینے سے سختی سے انکار کریں۔'
        ],
        audioScriptUrdu: 'سچائی انسان کو نجات دلاتی ہے۔ کاروبار اور نوکری میں امانت داری رکھیں اور ملاوٹ اور رشوت سے دور رہیں۔'
      },
      {
        id: 'society-3',
        titleUrdu: 'پڑوسی کے حقوق اور کمزوروں کی مدد',
        titleEn: 'Neighbor Rights & Supporting the Vulnerable',
        iconName: 'HeartHandshake',
        summaryUrdu: 'پڑوسی چاہے کسی بھی مذہب یا برادری کا ہو، اس کی عزت، امن اور بھوک پیاس کا خیال رکھنا لازمی ہے۔',
        summaryEn: 'Caring for neighbors, protecting their dignity, and sharing food with them is a foundational moral tenet.',
        quranSunnahWisdomUrdu: {
          translationUrdu: 'وہ شخص مومن نہیں جو خود پیٹ بھر کر سوئے اور اس کا پڑوسی اس کے پہلو میں بھوکا ہو۔',
          reference: 'المستدرک للحاکم / شعب الایمان: 7089',
          practicalTakeawayUrdu: 'پڑوسیوں کو اونچی آواز، گاڑی کی غلط پارکنگ یا گندگی سے کبھی تکلیف نہ پہنچائیں۔'
        },
        modernPracticalStepsUrdu: [
          'جب گھر میں کوئی اچھا کھانا پکے تو پڑوسی کو بھی بھیجیں۔',
          'محلے کے بزرگ، بیوہ یا بیمار کی ضرورت کا خاموشی سے خیال رکھیں۔',
          'اپنی گاڑی یا بائیک ایسی جگہ پارک نہ کریں جس سے دوسرے کا راستہ رکے۔'
        ],
        audioScriptUrdu: 'پڑوسی کے حقوق کا خیال رکھیں۔ ان کی تکلیف کا سبب نہ بنیں اور محلے کے نادار لوگوں کی خاموشی سے مدد کریں۔'
      },
      {
        id: 'society-4',
        titleUrdu: 'سوشل میڈیا پر افواہوں کی تصدیق اور اختلاف کا احترام',
        titleEn: 'Digital Responsibility & Respect for Differences',
        iconName: 'Globe',
        summaryUrdu: 'بغیر تحقیق کے بات آگے بڑھانا جھوٹ ہے۔ فرقہ وارانہ یا سیاسی اختلاف کو ذاتی دشمنی نہ بنائیں۔',
        summaryEn: 'Verifying information before sharing on social media prevents discord, slander, and social chaos.',
        quranSunnahWisdomUrdu: {
          arabicText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',
          translationUrdu: 'اے ایمان والو! اگر کوئی فاسق تمہارے پاس کوئی خبر لائے تو اچھی طرح تحقیق کر لیا کرو۔',
          reference: 'سورۃ الحجرات، 49:6',
          practicalTakeawayUrdu: 'آدمی کے جھوٹا ہونے کے لیے اتنا ہی کافی ہے کہ وہ ہر سنی سنائی بات کو آگے پھیلا دے۔'
        },
        modernPracticalStepsUrdu: [
          'واٹس ایپ یا فیس بک پر بغیر تصدیق کے کوئی جذباتی یا مذہبی پوسٹ فارورڈ نہ کریں۔',
          'کسی کے خلاف توہین آمیز یا گالی گلوچ والا کمنٹ مت لکھیں۔',
          'مخالف رائے رکھنے والے کے ساتھ بھی شائستہ اور باوقار زبان استعمال کریں۔'
        ],
        audioScriptUrdu: 'بغیر تصدیق کے کوئی خبر سوشل میڈیا پر آگے نہ بڑھائیں۔ اختلافِ رائے میں شائستگی اور ادب کو نہ چھوڑیں۔'
      }
    ],
    reflectionQuestions: [
      {
        questionUrdu: 'کیا آج آپ نے ٹریفک، سڑک یا بازار میں کسی دوسرے انسان کے لیے آسانی پیدا کی؟',
        questionEn: 'Did you make life easier for someone on the road or in the marketplace today?',
        encouragingNoteUrdu: 'معاشرہ قوانین سے نہیں بلکہ ہمارے باہمی اخلاق اور احساس سے بنتا ہے۔'
      }
    ],
    audioOverviewUrdu:
      'معاشرے کی بہتری کا راز سچائی، امانت داری، صفائی اور پڑوسیوں کے حقوق میں ہے۔ ٹریفک کے آداب پر عمل کریں، رشوت اور ملاوٹ سے بچیں اور سوشل میڈیا پر ذمہ دار شہری بنیں۔'
  },

  // --------------------------------------------------------------------------
  // 4. ملک کے لیے (Responsible Citizenship, Skill & Integrity)
  // --------------------------------------------------------------------------
  country: {
    id: 'country',
    titleUrdu: 'ملک کے لیے',
    titleEn: 'For the Nation',
    subtitleUrdu: 'باوقار شہری بننا، قوانین کی پابندی، ہنر مندی، محنت اور وسائل کی حفاظت',
    subtitleEn: 'Responsible Citizenship, Skill Mastery, Productivity & Protecting National Assets',
    iconName: 'Flag',
    themeColor: 'emerald',
    introUrdu:
      'صرف زبانی دعوؤں یا شکایات سے ملک ترقی نہیں کرتے۔ ملک اس وقت ترقی کرتا ہے جب ہر شہری اپنی فیلڈ میں محنت کرے، نیا ہنر سیکھے، قانون مانے اور قومی وسائل کی حفاظت کرے۔',
    introEn:
      'Nations prosper not through complaints, but when citizens cultivate high-value skills, uphold law and order, work diligently, and protect shared public resources.',
    todayAction: {
      titleUrdu: 'ہنر اور پیداواری صلاحیت (Productivity) کا اضافہ',
      titleEn: 'Daily Skill & Productivity Sprint',
      descriptionUrdu:
        'آج کم از کم ۳۰ منٹ اپنے کسی پیشہ ورانہ ہنر (کمپیوٹر، زبان، کاریگری، یا جدید ٹول) کو سیکھنے یا بہتر بنانے میں لگائیں تاکہ آپ ملکی معیشت کے لیے زیادہ کارآمد بن سکیں۔',
      descriptionEn:
        'Dedicate 30 minutes today to learning or polishing a valuable skill (digital tools, crafts, trade, languages) that increases your productivity.',
      stepsUrdu: [
        'سیکھو ایپ کے اندر اپنی دلچسپی کا کوئی ایک پریکٹیکل کورس کھولیں۔',
        'نوٹ بک پر اس کے اہم نکات اور عملی مشق لکھیں۔',
        'اس ہنر سے کسی مسئلے کو حل کرنے کا منصوبہ بنائیں۔',
        'سرکاری یا عوامی وسائل (بجلی، پانی، گیس) کے ضیاع کو روکیں۔'
      ],
      reflectionPromptUrdu: 'کیا آج آپ نے کوئی ایسی نئی مہارت سیکھی جو آپ کے روزگار اور ملک کے کام آ سکے؟',
      estimatedMinutes: 30,
      points: 30
    },
    topics: [
      {
        id: 'country-1',
        titleUrdu: 'قانون کی پاسداری اور ایک ذمہ دار شہری بننا',
        titleEn: 'Upholding Rule of Law & Civic Responsibility',
        iconName: 'ShieldAlert',
        summaryUrdu: 'ٹریفک سگنل نہ توڑنا، صفائی رکھنا اور قواعد پر عمل کرنا حب الوطنی کی اصل عملی صورت ہے۔',
        summaryEn: 'Obeying laws, stopping at red lights, and maintaining order is the true essence of patriotic duty.',
        quranSunnahWisdomUrdu: {
          arabicText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ',
          translationUrdu: 'اے ایمان والو! اللہ کی اطاعت کرو اور رسول کی اطاعت کرو اور ان کی جو تم میں سے صاحبِ امر (قانون نافذ کرنے والے) ہوں۔',
          reference: 'سورۃ النساء، 4:59',
          practicalTakeawayUrdu: 'نظم و ضبط اور قانون کی پابندی قوموں کو عزت اور سلامتی بخشتی ہے۔'
        },
        modernPracticalStepsUrdu: [
          'چاہے کیمرہ یا پولیس والا نہ ہو، ٹریفک سگنل اور لین کے اصولوں کی پابندی کریں۔',
          'سرکاری کاغذی کارروائی اور واجبات کو ایمانداری سے پورا کریں۔',
          'لائن اور قطار کے نظام کا احترام کریں، کسی کا حق مار کر آگے نہ بڑھیں۔'
        ],
        audioScriptUrdu: 'قانون کی پابندی ہر محبِ وطن شہری کی ذمہ داری ہے۔ ٹریفک کے اصول مانیں اور قطار کے نظام کی پابندی کریں۔'
      },
      {
        id: 'country-2',
        titleUrdu: 'تعلیم، ہنر مندی اور روزگار پیدا کرنے کی سوچ',
        titleEn: 'Skill Mastery & Entrepreneurial Mindset',
        iconName: 'Wrench',
        summaryUrdu: 'صرف ڈگری کافی نہیں، عملی ہنر سیکھنا اور دوسروں کے لیے روزگار کے مواقع بنانا ملک کی اصل خدمت ہے۔',
        summaryEn: 'Practical technical trade skills and value-creating enterprises lift communities out of economic stagnation.',
        quranSunnahWisdomUrdu: {
          arabicText: 'وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ',
          translationUrdu: 'اور یہ کہ انسان کے لیے وہی کچھ ہے جس کی اس نے کوشش کی۔',
          reference: 'سورۃ النجم، 53:39',
          practicalTakeawayUrdu: 'کسی نے اس سے بہتر کھانا نہیں کھایا جو اس نے اپنے ہاتھ کی محنت سے کمایا ہو۔ (صحیح بخاری)'
        },
        modernPracticalStepsUrdu: [
          'روزانہ کم از کم ایک گھنٹہ کسی عملی اسکل (ڈیجیٹل، ٹریڈ یا کاروبار) کی مشق کریں۔',
          'نوکری مانگنے والے کے ساتھ ساتھ روزگار فراہم کرنے والا بننے کی منصوبہ بندی کریں۔',
          'لوکل مصنوعات اور ملکی پیداوار کو ترجیح دیں۔'
        ],
        audioScriptUrdu: 'ہنر سیکھیں اور محنت کریں۔ اپنے ہاتھ سے کمانا اور ملک کی پیداواری صلاحیت کو بڑھانا سب سے بڑی خدمت ہے۔'
      },
      {
        id: 'country-3',
        titleUrdu: 'قومی وسائل (پانی، بجلی، گیس) کی حفاظت',
        titleEn: 'Preserving National Utilities & Resources',
        iconName: 'Sparkles',
        summaryUrdu: 'پانی اور بجلی کا ضیاع یا چوری قومی امانت میں خیانت ہے۔ ہر قطرہ اور ہر یونٹ کو بچائیں۔',
        summaryEn: 'Conserving water, electricity, and public infrastructure is safeguarding a sacred national trust.',
        quranSunnahWisdomUrdu: {
          arabicText: 'وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ',
          translationUrdu: 'اور فضول خرچی اور ضیاع نہ کرو، بیشک اللہ ضیاع کرنے والوں کو پسند نہیں کرتا۔',
          reference: 'سورۃ الانعام، 6:141',
          practicalTakeawayUrdu: 'بہتی نہر پر بھی وضو کرتے وقت ضرورت سے زیادہ پانی خرچ کرنے کی ممانعت ہے۔'
        },
        modernPracticalStepsUrdu: [
          'کمرے سے نکلتے وقت لائٹس اور پنکھے بند کریں۔',
          'نلکے کو کھلا نہ چھوڑیں اور لیکج کو فوری ٹھیک کروائیں۔',
          'سڑکوں، پارکوں اور پبلک ٹرانسپورٹ کی چیزوں کو نقصان نہ پہنچائیں۔'
        ],
        audioScriptUrdu: 'پانی، بجلی اور گیس کا ضیاع نہ کریں۔ قومی املاک کی حفاظت کریں جیسے آپ اپنے ذاتی گھر کی حفاظت کرتے ہیں۔'
      },
      {
        id: 'country-4',
        titleUrdu: 'میں خود اپنے ملک کے لیے کیا کر سکتا ہوں؟ (عملی لائحہ عمل)',
        titleEn: 'What Can I Personally Do for My Nation?',
        iconName: 'Compass',
        summaryUrdu: 'حکومتوں اور نظام پر صرف تنقید کے بجائے اپنا فرض دیانت داری سے ادا کرنا تبدیلی کی اصل کنجی ہے۔',
        summaryEn: 'Moving from chronic cynicism to personal accountability is how resilient nations are built.',
        quranSunnahWisdomUrdu: {
          translationUrdu: 'تم میں سے ہر شخص نگہبان ہے اور ہر ایک سے اس کی رعیت اور ذمہ داری کے بارے میں سوال ہو گا۔',
          reference: 'صحیح بخاری: 893',
          practicalTakeawayUrdu: 'اپنے دائرہ اختیار میں آنے والے ہر کام کو بہترین اور مکمل طریقے سے انجام دیں۔'
        },
        modernPracticalStepsUrdu: [
          'اپنا کام اور پڑھائی پورے خلوص اور وقت کی پابندی سے کریں۔',
          'اپنے محلے کے ۲ بچوں کو مفت پڑھائیں یا کوئی ہنر سکھائیں۔',
          'رشوت دینے اور سفارش کلچر کا حصہ بننے سے مکمل انکار کریں۔'
        ],
        audioScriptUrdu: 'تنقید کے بجائے اپنے عمل پر توجہ دیں۔ ایمانداری سے کام کریں اور اپنے اردگرد کے لوگوں کی رہنمائی کریں۔'
      }
    ],
    reflectionQuestions: [
      {
        questionUrdu: 'کیا آج آپ نے کوئی ایسا کام کیا جس سے ملک کا کوئی وسیلہ بچا ہو یا آپ کی صلاحیت بڑھی ہو؟',
        questionEn: 'Did you conserve a national resource or build a productive skill today?',
        encouragingNoteUrdu: 'ایک باکردار اور محنتی شہری ہی ملک کا سب سے بڑا سرمایہ ہوتا ہے۔'
      }
    ],
    audioOverviewUrdu:
      'ملک کی تعمیر کا آغاز ہماری اپنی محنت سے ہوتا ہے۔ قانون کی پابندی کریں، ہنر حاصل کریں، قومی وسائل کی حفاظت کریں اور مایوسی پھیلانے کے بجائے مثبت حل پیش کریں۔'
  },

  // --------------------------------------------------------------------------
  // 5. انسانیت کے لیے (Universal Empathy, Global Good & Environment)
  // --------------------------------------------------------------------------
  humanity: {
    id: 'humanity',
    titleUrdu: 'انسانیت کے لیے',
    titleEn: 'For Humanity',
    subtitleUrdu: 'شرفِ انسانیت، رحم دلی، ماحولیات، شجرکاری اور ٹیکنالوجی کا مثبت استعمال',
    subtitleEn: 'Universal Dignity, Global Compassion, Environment, Trees & Tech for Good',
    iconName: 'Globe',
    themeColor: 'indigo',
    introUrdu:
      'تمام انسان حضرت آدمؑ کی اولاد ہیں۔ رنگ، نسل، زبان اور جغرافیہ کے فرق کے باوجود ہر انسان کی عزت، جان اور بھلائی کا احترام کرنا ہمارا اخلاقی اور ایمانی فریضہ ہے۔',
    introEn:
      'All humans share common ancestry and intrinsic dignity. Serving humanity, protecting the planetary environment, and applying technology for human welfare is our shared noble purpose.',
    todayAction: {
      titleUrdu: 'انسانیت اور ماحول کے لیے ایک نیک عمل',
      titleEn: 'Act of Empathy or Environmental Care',
      descriptionUrdu:
        'آج کسی پرندے کو دانہ پانی ڈالیں، کسی پودے کو پانی دیں، یا کسی مجبور انسان کے لیے کوئی غیر متوقع آسانی پیدا کریں۔',
      descriptionEn:
        'Water a tree, feed birds/animals, or facilitate a moment of relief for a struggling human being today.',
      stepsUrdu: [
        'چھت یا بالکونی پر پرندوں کے لیے صاف پانی کا پیالہ رکھیں۔',
        'کسی ضرورت مند شخص سے عزت اور مسکراہٹ کے ساتھ بات کریں۔',
        'اپنے علم یا انٹرنیٹ کی مدد سے کسی کا کوئی مسئلہ حل کر دیں۔',
        'پلاسٹک کے بے جا استعمال کو کم سے کم کریں۔'
      ],
      reflectionPromptUrdu: 'جب آپ نے کسی بے زبان جانور یا ضرورت مند انسان کی مدد کی تو کیسا محسوس ہوا؟',
      estimatedMinutes: 10,
      points: 25
    },
    topics: [
      {
        id: 'humanity-1',
        titleUrdu: 'شرفِ انسانیت اور ہر انسان کی عزت و تکریم',
        titleEn: 'Universal Dignity of Every Human Being',
        iconName: 'Heart',
        summaryUrdu: 'اللہ تعالیٰ نے بنی آدم کو تکریم بخشی ہے۔ کسی بھی انسان کو اس کے رنگ، زبان یا غربت کی وجہ سے حقیر نہ سمجھیں۔',
        summaryEn: 'Human dignity is inherent. No person should be demeaned on the basis of wealth, language, or race.',
        quranSunnahWisdomUrdu: {
          arabicText: 'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',
          translationUrdu: 'اور بیشک ہم نے بنی آدم کو عزت و تکریم عطا فرمائی۔',
          reference: 'سورۃ الاسراء، 17:70',
          practicalTakeawayUrdu: 'کسی عربی کو عجمی پر اور کسی گورے کو کالے پر کوئی فضیلت نہیں مگر تقویٰ اور اچھے عمل کی بنیاد پر۔'
        },
        modernPracticalStepsUrdu: [
          'گھر کے ملازم، چوکیدار اور صفائی والے سے احترام سے بات کریں۔',
          'ملازمت یا گفتگو میں کسی کے لہجے یا لباس کا مذاق نہ اڑائیں۔',
          'تمام مذاہب اور اقوام کے بنیادی انسانی حقوق کا احترام کریں۔'
        ],
        audioScriptUrdu: 'تمام انسان اللہ کا کنبہ ہیں۔ کسی انسان کو حقیر نہ سمجھیں اور سب کے ساتھ عزت اور مساوات کا سلوک کریں۔'
      },
      {
        id: 'humanity-2',
        titleUrdu: 'ماحول، شجرکاری اور پانی کی عالمی حفاظت',
        titleEn: 'Environmental Stewardship & Tree Plantation',
        iconName: 'Sparkles',
        summaryUrdu: 'درخت لگانا اور زمین کو آلودگی سے بچانا آنے والی نسلوں کے لیے صدقہ جاریہ ہے۔',
        summaryEn: 'Planting trees, fighting pollution, and stewarding planet Earth ensures a habitable home for future generations.',
        quranSunnahWisdomUrdu: {
          translationUrdu: 'اگر قیامت قائم ہو رہی ہو اور تم میں سے کسی کے ہاتھ میں پودا ہو تو وہ اسے ضرور زمین میں لگا دے۔',
          reference: 'مسند احمد: 12902',
          practicalTakeawayUrdu: 'زمین پر فساد، آلودگی اور درختوں کی اندھا دھند کٹائی سے پرہیز کریں۔'
        },
        modernPracticalStepsUrdu: [
          'سال میں کم از کم ۲ پھل دار یا سایہ دار درخت لگائیں اور ان کی دیکھ بھال کریں۔',
          'ایک بار استعمال ہونے والے پلاسٹک بیگز کا استعمال چھوڑ دیں۔',
          'کوڑا کرکٹ کو آگ لگا کر فضا کو آلودہ نہ کریں۔'
        ],
        audioScriptUrdu: 'زمین کو آلودہ نہ کریں۔ درخت لگانا صدقہ جاریہ ہے۔ پانی کو بچائیں اور ماحول کو صاف رکھیں۔'
      },
      {
        id: 'humanity-3',
        titleUrdu: 'ٹیکنالوجی اور AI کا انسانیت کی فلاح کے لیے استعمال',
        titleEn: 'Tech & Artificial Intelligence for Good',
        iconName: 'Compass',
        summaryUrdu: 'جدید ٹیکنالوجی اور مصنوعی ذہانت کو بیماریوں کے علاج، تعلیم کے پھیلاؤ اور آسانیوں کے لیے استعمال کریں۔',
        summaryEn: 'Modern AI and technology should be harnessed to solve poverty, expand education, and serve healthcare.',
        quranSunnahWisdomUrdu: {
          translationUrdu: 'لوگوں میں سے بہترین وہ ہے جو انسانوں کے لیے سب سے زیادہ فائدہ مند ہو۔',
          reference: 'المعجم الاوسط للطبرانی: 5787',
          practicalTakeawayUrdu: 'انٹرنیٹ اور ڈیجیٹل ذرائع کو نفرت یا دھوکے کے بجائے نیکی اور تعلیم کا ذریعہ بنائیں۔'
        },
        modernPracticalStepsUrdu: [
          'اے آئی (AI) اور ٹیکنالوجی کے ٹولز کو تعلیم حاصل کرنے کے لیے استعمال کریں۔',
          'ڈیجیٹل ذرائع سے کسی دور دراز علاقے کے طالب علم کی رہنمائی کریں۔',
          'فیک نیوز یا ڈیپ فیک دھوکے سے انسانوں کو خبردار کریں۔'
        ],
        audioScriptUrdu: 'ٹیکنالوجی اور انٹرنیٹ کو علم پھیلانے اور انسانیت کی خدمت کے لیے استعمال کریں۔ بہترین انسان وہ ہے جو دوسروں کو فائدہ پہنچائے۔'
      }
    ],
    reflectionQuestions: [
      {
        questionUrdu: 'کیا آج آپ نے کسی ایسے انسان یا جاندار کی مدد کی جس سے آپ کا کوئی ذاتی مفاد نہیں تھا؟',
        questionEn: 'Did you help someone without expecting anything in return today?',
        encouragingNoteUrdu: 'بے لوث خدمت ہی انسانی روح کو اصل اطمینان بخشتی ہے۔'
      }
    ],
    audioOverviewUrdu:
      'انسانیت کا مقصد ہر انسان کی عزت، شجرکاری، ماحولیات کی حفاظت اور علم و ٹیکنالوجی کو بھلائی کے لیے استعمال کرنا ہے۔ سب کے لیے آسانیاں پیدا کریں۔'
  },

  // --------------------------------------------------------------------------
  // 6. آخرت کے لیے (Ecosystem of Eternity, Accountability & Balance)
  // --------------------------------------------------------------------------
  hereafter: {
    id: 'hereafter',
    titleUrdu: 'آخرت کے لیے',
    titleEn: 'For the Hereafter',
    subtitleUrdu: 'اللہ سے تعلق، نماز، اخلاص، حقوق العباد، توبہ اور روزانہ کا محاسبہ',
    subtitleEn: 'Devotion to Allah, Prayer, Sincerity, Human Rights & Nightly Self-Accounting',
    iconName: 'MoonStar',
    themeColor: 'amber',
    introUrdu:
      'یہ دنیا چند روزہ مسافر خانہ ہے جبکہ آخرت ہمیشہ رہنے والی زندگی ہے۔ دنیا کے تمام جائز کام اگر نیت خالص کر کے اور حقوق العباد کا خیال رکھ کر کیے جائیں تو وہ بھی آخرت کا بہترین ذخیرہ بن جاتے ہیں۔',
    introEn:
      'This transient worldly life is a farming ground for eternity. Living with sincere purpose, fulfilling obligations to Creator and creation, ensures timeless peace and fulfillment.',
    todayAction: {
      titleUrdu: 'رات کو خاموش محاسبہ اور استغفار',
      titleEn: 'Nightly Self-Audit & Sincere Istighfar',
      descriptionUrdu:
        'آج رات بستر پر جانے سے پہلے صرف ۳ منٹ بیٹھ کر اپنے دن کے تمام اچھے اور برے اعمال کا جائزہ لیں، اور خلوصِ دل سے استغفار کریں۔',
      descriptionEn:
        'Spend 3 quiet minutes before sleep auditing your day\'s deeds, thanking Allah for blessings, and seeking forgiveness with sincere Istighfar.',
      stepsUrdu: [
        'چند لمحوں کے لیے موبائل بند کر کے بیٹھیں۔',
        'سوچیں: کیا آج کسی کی حق تلفی کی یا دل دکھایا؟ اگر ہاں تو معافی کی نیت کریں۔',
        'اللہ کی دی گئی صحت، رزق اور نعمتوں پر دل سے الحمدللہ کہیں۔',
        'کم از کم ۱۰ بار باوقار انداز میں ”استغفر اللہ“ کا ورد کریں۔'
      ],
      reflectionPromptUrdu: 'کیا دن کے اختتام پر اپنے اعمال کے جائزے سے آپ نے دل میں سکون اور کل بہتر انسان بننے کا عزم پایا؟',
      estimatedMinutes: 5,
      points: 25
    },
    topics: [
      {
        id: 'hereafter-1',
        titleUrdu: 'اللہ تعالیٰ سے زندہ تعلق اور نماز کی پابندی',
        titleEn: 'Living Bond with Allah & Daily Salah',
        iconName: 'BookOpen',
        summaryUrdu: 'نماز مومن کی معراج اور روح کی غذا ہے۔ روزانہ پانچ بار دنیا کے شور سے نکل کر اللہ کے سامنے جھکنا دل کو سکون دیتا ہے۔',
        summaryEn: 'Salah connects the human heart to the Divine Creator five times a day, bringing clarity and solace.',
        quranSunnahWisdomUrdu: {
          arabicText: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
          translationUrdu: 'سنو! اللہ کے ذکر ہی سے دلوں کو اطمینان حاصل ہوتا ہے۔',
          reference: 'سورۃ الرعد، 13:28',
          practicalTakeawayUrdu: 'نماز کو بوجھ سمجھنے کے بجائے اللہ سے ملاقات اور سکون کا ذریعہ بنائیں۔'
        },
        modernPracticalStepsUrdu: [
          'اذان کی آواز سنتے ہی کام چھوڑ کر باوضو ہونے کی کوشش کریں۔',
          'نماز میں پڑھی جانے والی سورتوں اور دعاؤں کے اردو معانی سیکھیں۔',
          'نماز کے بعد کچھ لمحے بیٹھ کر اپنے لیے اور امت کے لیے دعا کریں۔'
        ],
        audioScriptUrdu: 'نماز کو وقت پر ادا کریں۔ اللہ سے سچا تعلق قائم کریں اور روزانہ کی زندگی میں ذکر اور دعا کا معمول بنائیں۔'
      },
      {
        id: 'hereafter-2',
        titleUrdu: 'حقوق العباد کی اہمیت اور سچی توبہ',
        titleEn: 'Rights of Human Beings & Sincere Repentance',
        iconName: 'ShieldAlert',
        summaryUrdu: 'اللہ اپنے حقوق معاف فرما سکتا ہے مگر بندوں کے حقوق اس وقت تک معاف نہیں ہوتے جب تک وہ انسان خود معاف نہ کرے۔',
        summaryEn: 'Violations of human rights require direct restitution and forgiveness from the affected individual.',
        quranSunnahWisdomUrdu: {
          translationUrdu: 'مفلس وہ ہے جو قیامت کے دن نماز، روزے اور زکوٰۃ کے ساتھ آئے گا مگر اس نے کسی کو گالی دی ہوگی، کسی کا مال کھایا ہوگا، تو اس کی نیکیاں مظلوموں کو دے دی جائیں گی۔',
          reference: 'صحیح مسلم: 2581',
          practicalTakeawayUrdu: 'کسی کا ادھار، امانت یا حق کبھی نہ ماریں اور اگر کسی کا دل دکھایا ہو تو دنیا میں ہی معافی مانگ لیں۔'
        },
        modernPracticalStepsUrdu: [
          'اگر کسی کا قرض واجب الادا ہے تو اسے وقت پر واپس کریں۔',
          'غیبت، چغلی اور کسی پر الزام تراشی سے اپنی زبان کو محفوظ رکھیں۔',
          'غلطی ہونے پر فوراً معافی مانگنے کو اپنی عادت بنائیں۔'
        ],
        audioScriptUrdu: 'حقوق العباد کا خاص خیال رکھیں۔ کسی کا حق نہ ماریں اور اگر غلطی ہو جائے تو دنیا میں ہی معافی مانگ کر معاملہ صاف کریں۔'
      },
      {
        id: 'hereafter-3',
        titleUrdu: 'حلال روزی، سادگی اور صدقہ جاریہ',
        titleEn: 'Halal Sustenance & Ongoing Charity (Sadaqah Jariyah)',
        iconName: 'Sparkles',
        summaryUrdu: 'حلال لقمہ عبادات کی قبولیت کی بنیاد ہے۔ جو کماؤ حلال کماؤ اور اس میں سے ضرورت مندوں پر خرچ کرو۔',
        summaryEn: 'Pure livelihood fuels pure deeds. Investing in ongoing goodness yields eternal dividends in the Hereafter.',
        quranSunnahWisdomUrdu: {
          arabicText: 'يَا أَيُّهَا الرُّسُلُ كُلُوا مِنَ الطَّيِّبَاتِ وَاعْمَلُوا صَالِحًا',
          translationUrdu: 'اے پیغمبرو! پاکیزہ حلال چیزیں کھاؤ اور نیک عمل کرو۔',
          reference: 'سورۃ المؤمنون، 23:51',
          practicalTakeawayUrdu: 'جب انسان مرتا ہے تو اس کے اعمال کا سلسلہ ختم ہو جاتا ہے سوائے تین چیزوں کے: صدقہ جاریہ، نفع بخش علم، اور نیک اولاد جو دعا کرے۔'
        },
        modernPracticalStepsUrdu: [
          'حرام ذرائع اور سودی لین دین سے خود کو اور خاندان کو دور رکھیں۔',
          'اپنی آمدنی میں سے ہر ماہ کچھ نہ کچھ حصہ خیرات کے لیے مخصوص کریں۔',
          'کوئی ایسا مفید علم، کتاب یا پانی کا ذریعہ بنائیں جو آپ کے بعد بھی دوسروں کے کام آئے۔'
        ],
        audioScriptUrdu: 'ہمیشہ حلال روزی کمائیں۔ حرام سے بچیں اور صدقہ جاریہ میں حصہ لیں جو مرنے کے بعد بھی فائدہ دے گا۔'
      },
      {
        id: 'hereafter-4',
        titleUrdu: 'دنیا کی محنت اور آخرت کی فکر میں متوازن اعتدال',
        titleEn: 'Balanced Harmony: Worldly Diligence & Hereafter Focus',
        iconName: 'Compass',
        summaryUrdu: 'اسلام دنیا چھوڑنے کا نام نہیں بلکہ دنیا کو اللہ کے حکم کے مطابق گزار کر آخرت سنوارنے کا نام ہے۔',
        summaryEn: 'Islam does not advocate monastic escapism; it teaches excellence in worldly pursuits aligned with divine ethics.',
        quranSunnahWisdomUrdu: {
          arabicText: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
          translationUrdu: 'اے ہمارے پروردگار! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں آگ کے عذاب سے بچا۔',
          reference: 'سورۃ البقرۃ، 2:201',
          practicalTakeawayUrdu: 'دنیا میں بہترین بن کر جئیں، اور ہر اچھے عمل کو اللہ کی رضا کے لیے نیت کر کے کریں۔'
        },
        modernPracticalStepsUrdu: [
          'اپنے ہر جائز کام (تعلیم، نوکری، تجارت، خاندان کی دیکھ بھال) میں اللہ کی خوشنودی کی نیت کریں۔',
          'ہر کام کو اعلیٰ ترین معیار پر مکمل کرنے کی کوشش کریں (احسان)۔',
          'دن کے اختتام پر شکر گزاری اور استغفار کو اپنا معمول بنائیں۔'
        ],
        audioScriptUrdu: 'دنیا اور آخرت دونوں کی بھلائی کی دعا مانگیں۔ دنیا میں محنت اور نیکی کریں تاکہ آخرت میں سرخرو ہو سکیں۔'
      }
    ],
    reflectionQuestions: [
      {
        questionUrdu: 'اگر آج کا دن میری زندگی کا آخری دن ہو، تو کیا میں اللہ کے سامنے پیش ہونے کے لیے مطمئن ہوں؟',
        questionEn: 'If today were my last day, am I prepared to meet my Creator with clean hands and heart?',
        encouragingNoteUrdu: 'توبہ کا دروازہ ہر وقت کھلا ہے۔ آج سے ہی ایک نئی اور پاکیزہ شروعات کریں۔'
      }
    ],
    audioOverviewUrdu:
      'آخرت کی کامیابی اللہ سے تعلق، نماز کی پابندی، سچی توبہ، حلال روزی اور حقوق العباد کی ادائیگی میں ہے۔ دنیا میں محنت کریں اور ہر کام میں آخرت کی نیت رکھیں۔'
  }
};
