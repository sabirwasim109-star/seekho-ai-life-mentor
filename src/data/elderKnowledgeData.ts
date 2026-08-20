export interface ElderKnowledgeEntry {
  id: string;
  elderName: string;
  elderAge: number;
  area: string; // e.g. "ڈوبے، برنالہ، آزاد کشمیر"
  category: ElderKnowledgeCategoryKey;
  titleUrdu: string;
  titleEn: string;
  experienceUrdu: string;
  experienceEn: string;
  sourceUrdu: string; // میں نے یہ کہاں سے سیکھا؟
  sourceEn: string;
  whyUsefulUrdu: string; // یہ علم دوسروں کے لیے کیوں مفید ہے؟
  whyUsefulEn: string;
  date: string;
  learnedCount: number; // میں نے یہ سیکھا counter
  savedCount: number;
  questionsCount: number;
}

export type ElderKnowledgeCategoryKey = 
  | 'agriculture'
  | 'crafts'
  | 'business'
  | 'local_history'
  | 'home_life'
  | 'education'
  | 'life_experience'
  | 'environment'
  | 'social_service'
  | 'other';

export interface ElderCategoryMeta {
  key: ElderKnowledgeCategoryKey;
  number: number;
  nameUrdu: string;
  nameEn: string;
  iconName: string;
}

export const ELDER_CATEGORIES: ElderCategoryMeta[] = [
  { key: 'agriculture', number: 1, nameUrdu: 'زراعت', nameEn: 'Agriculture', iconName: 'Sprout' },
  { key: 'crafts', number: 2, nameUrdu: 'ہنر اور کاریگری', nameEn: 'Crafts & Artisan Skills', iconName: 'Hammer' },
  { key: 'business', number: 3, nameUrdu: 'کاروبار', nameEn: 'Business & Trade', iconName: 'Briefcase' },
  { key: 'local_history', number: 4, nameUrdu: 'مقامی تاریخ', nameEn: 'Local History & Heritage', iconName: 'Landmark' },
  { key: 'home_life', number: 5, nameUrdu: 'گھر اور روزمرہ زندگی', nameEn: 'Home & Daily Life', iconName: 'Home' },
  { key: 'education', number: 6, nameUrdu: 'تعلیم', nameEn: 'Education', iconName: 'GraduationCap' },
  { key: 'life_experience', number: 7, nameUrdu: 'زندگی کے تجربات', nameEn: 'Life Experiences', iconName: 'Compass' },
  { key: 'environment', number: 8, nameUrdu: 'ماحول', nameEn: 'Environment & Nature', iconName: 'TreePine' },
  { key: 'social_service', number: 9, nameUrdu: 'سماجی خدمت', nameEn: 'Community Service', iconName: 'HeartHandshake' },
  { key: 'other', number: 10, nameUrdu: 'دیگر', nameEn: 'Other', iconName: 'Sparkles' },
];

export const INITIAL_ELDER_ENTRIES: ElderKnowledgeEntry[] = [
  {
    id: 'ek-1',
    elderName: 'بابا فضل دین',
    elderAge: 74,
    area: 'ڈوبے، برنالہ، آزاد کشمیر',
    category: 'agriculture',
    titleUrdu: 'بارانی مٹی کی نمی برقرار رکھنا اور قدرتی نامیاتی کھاد کا استعمال',
    titleEn: 'Retaining Soil Moisture in Rainfed Fields & Organic Composting',
    experienceUrdu: 'ہماری برنالہ کی زمین بارانی ہے۔ جب برسات کی پہلی بارش ہو تو زمین کو گہرا ہل چلا کر چھوڑ دیا جائے تاکہ بارش کا ایک ایک قطرہ مٹی کے اندر جذب ہو۔ فصل کی کٹائی کے بعد پودوں کی باقیات جلانے کے بجائے زمین میں ملائیں اور بکریوں کی کھاد ڈالیں، اس سے زمین تین گنا زیادہ نمی روکتی ہے اور کم بارش میں بھی پیداوار بہترین رہتی ہے۔',
    experienceEn: 'Our land in Barnala is rainfed. During the first monsoon rains, plowing deeply captures every drop of water into the soil bed. Never burn post-harvest crop residues—mix them with livestock manure to create natural mulch that triples soil moisture retention during dry spells.',
    sourceUrdu: 'اپنے والد صاحب اور ۵۰ سالہ عملی کاشتکاری کے تجربے اور موسمی مشاہدات سے۔',
    sourceEn: 'From my late father and over 50 years of hands-on farming and seasonal weather observations.',
    whyUsefulUrdu: 'مہنگی مصنوعی کھادوں اور اضافی ڈیزل پمپ کے خرچ سے نجات ملتی ہے اور ہماری زمین کی قدرتی زرخیزی اگلی نسل کے لیے محفوظ رہتی ہے۔',
    whyUsefulEn: 'Saves expensive chemical fertilizer costs and protects the long-term fertility of our ancestral topsoil for our youth.',
    date: '10 اگست 2026',
    learnedCount: 64,
    savedCount: 28,
    questionsCount: 5,
  },
  {
    id: 'ek-2',
    elderName: 'صوفی نذیر احمد',
    elderAge: 70,
    area: 'برنالہ خاص، آزاد کشمیر',
    category: 'business',
    titleUrdu: 'دکان اور کاروبار میں گاہک کا دائمی اعتماد اور ادھار کی شفافیت',
    titleEn: 'Building Enduring Customer Trust & Managing Credit in Small Business',
    experienceUrdu: 'میں نے ۴۰ سال برنالہ کے بازار میں کریانہ کی دکان چلائی ہے۔ گاہک کو ہمیشہ خالص چیز دیں اور اگر کسی چیز میں نقص ہو تو خود بتا کر مناسب رعایت دیں۔ کھاتے میں پائی پائی کا حساب لکھیں اور ادھار کا تقاضا عزت اور نرمی کے ساتھ تنہائی میں کریں۔ دیانت داری سے کمایا گیا ایک روپیہ بے ایمانی کے لاکھ روپے سے زیادہ برکت لاتا ہے۔',
    experienceEn: 'I ran a grocery shop in Barnala market for 40 years. Always offer honest quality; if an item has any flaw, declare it upfront. Record every rupee with transparency and request credit repayments privately with dignity. One honest rupee outlives fortunes gained by deception.',
    sourceUrdu: 'برنالہ بازار میں اپنے استاد اور روزمرہ کے لین دین کے عملی اتار چڑھاؤ سے۔',
    sourceEn: 'From my business mentor in Barnala Bazaar and decades of real-world trading.',
    whyUsefulUrdu: 'نئے نوجوان جو دکان یا آن لائن کاروبار شروع کر رہے ہیں، وہ گاہک سے دیرپا رشتہ بنانا اور نقصان سے بچنا سیکھ سکتے ہیں۔',
    whyUsefulEn: 'Young entrepreneurs starting shops or digital sales learn how to build lifelong client loyalty without burning relationships.',
    date: '12 اگست 2026',
    learnedCount: 52,
    savedCount: 33,
    questionsCount: 4,
  },
  {
    id: 'ek-3',
    elderName: 'استاد عبدالستار',
    elderAge: 68,
    area: 'ڈوبے، برنالہ، آزاد کشمیر',
    category: 'crafts',
    titleUrdu: 'پائیدار لکڑی کے جوڑ اور دیسی سن (بان) کی مضبوط چارپائی کی بنائی',
    titleEn: 'Traditional Wood Joinery & Sturdy Natural Fiber Weaving',
    experienceUrdu: 'مضبوط فرنیچر اور چارپائی کے لیے شیشم یا کیکر کی لکڑی کا انتخاب کریں۔ لکڑی کو سائے میں سوکھنے دیں تاکہ تریڑ نہ آئے۔ چارپائی کے بانے میں سن یا سوت کے رسے کو برابر کھنچاؤ کے ساتھ بنیں تاکہ وہ ۲۰ سال تک کبھی ڈھیلی نہ ہو۔ ہاتھ کے ہنر میں کبھی جلدی نہ کریں، کاریگری کی خوبصورتی نفاست میں ہے۔',
    experienceEn: 'For long-lasting furniture and beds, choose seasoned Sheesham or Kikar dried in the shade. When weaving ropes, maintain uniform tension so the frame never sags for decades. Never rush handcrafted woodwork; enduring beauty lies in patience.',
    sourceUrdu: 'ڈوبے کے پرانے کاریگروں کی شاگردی اور پچاس سالہ لکڑی کے کام سے۔',
    sourceEn: 'Apprenticeship under master carpenters in Dobay and 50 years of woodcraft.',
    whyUsefulUrdu: 'نوجوان اگر اس روایتی ہنر کو جدید ڈیزائن اور آن لائن مارکیٹ سے جوڑیں تو باوقار روزگار کما سکتے ہیں۔',
    whyUsefulEn: 'Youth can combine these authentic crafting techniques with modern design to earn sustainable income.',
    date: '08 اگست 2026',
    learnedCount: 41,
    savedCount: 19,
    questionsCount: 3,
  },
  {
    id: 'ek-4',
    elderName: 'حاجی عنایت اللہ',
    elderAge: 78,
    area: 'ڈوبے، برنالہ، آزاد کشمیر',
    category: 'local_history',
    titleUrdu: 'ڈوبے اور برنالہ کے قدرتی چشمے، قدیم راستے اور باہمی تعاون کا ورثہ',
    titleEn: 'Historical Water Springs, Footpaths & Heritage of Mutual Aid in Dobay',
    experienceUrdu: 'پچاس سال پہلے ڈوبے میں جب پختہ سڑکیں نہیں تھیں، تو پورے گاؤں کے لوگ "ویگار" (اجتماعی رضا کارانہ کام) کے تحت مل کر راستے اور چشمے کے پشتے بناتے تھے۔ فصل کی کٹائی اور مکان کی چھت ڈالنے میں سب ایک دوسرے کا ہاتھ بٹاتے تھے۔ یہ تاریخ ہمیں یاد دلاتی ہے کہ ہم الگ ہو کر کمزور اور مل کر ناقابل شکست ہیں۔',
    experienceEn: 'Fifty years ago before paved roads, Dobay villagers practiced "Vigar" (collective volunteer aid) to repair footpaths and natural springs. Everyone helped during harvest and roofing. This heritage teaches us that unity makes communities unbreakable.',
    sourceUrdu: 'بزرگوں کی زبانی روایات اور بچپن سے اپنی آنکھوں سے دیکھے ہوئے گاؤں کے تاریخی واقعات سے۔',
    sourceEn: 'Oral traditions passed by our forefathers and witnessing community village history firsthand.',
    whyUsefulUrdu: 'ہماری نئی نسل کو اپنی جڑوں اور برادری کی باہمی محبت کی تاریخ کا علم ہوتا ہے تاکہ وہ گاؤں کا احساس کریں۔',
    whyUsefulEn: 'Teaches our young generation about their cultural roots and the priceless value of village solidarity.',
    date: '05 اگست 2026',
    learnedCount: 79,
    savedCount: 45,
    questionsCount: 7,
  },
  {
    id: 'ek-5',
    elderName: 'محترمہ فاطمہ بی بی',
    elderAge: 71,
    area: 'ڈھانڈری، برنالہ، آزاد کشمیر',
    category: 'home_life',
    titleUrdu: 'دیسی جڑی بوٹیوں سے موسمی نزلہ زکام اور گھریلو بچت کا سلیقہ',
    titleEn: 'Home Herbal Remedies for Seasonal Colds & Household Thrift',
    experienceUrdu: 'موسم بدلتے وقت ادرک، دار چینی، شہد اور ملٹھی کا قہوہ پینے سے بچے اور بزرگ نزلہ زکام اور سینے کی جکڑن سے محفوظ رہتے ہیں۔ گھر کا بجٹ چلاتے وقت کبھی غیر ضروری دکھاوے پر خرچ نہ کریں، ہمیشہ تھوڑی بچت کسی ہنگامی ضرورت کے لیے سنبھال کر رکھیں۔ سادگی میں ہی اصل سکون ہے۔',
    experienceEn: 'At seasonal shifts, ginger, cinnamon, honey, and liquorice tea protect both children and elders from chest congestion without heavy pills. In household budgeting, avoid vanity spending and save a small portion for emergencies.',
    sourceUrdu: 'اپنی والدہ اور دادی جان کے خاندانی روایتی نسخوں اور ۷۰ سال کے گھریلو تجربے سے۔',
    sourceEn: 'From family ancestral herbal wisdom passed by my mother and grandmother.',
    whyUsefulUrdu: 'بلاوجہ مہنگی اور اینٹی بائیوٹک ادویات کے مضر اثرات سے بچت ہوتی ہے اور گھر کا ماحول صحت مند رہتا ہے۔',
    whyUsefulEn: 'Protects families from over-reliance on chemical medications and preserves healthy traditional living.',
    date: '14 اگست 2026',
    learnedCount: 68,
    savedCount: 37,
    questionsCount: 6,
  },
  {
    id: 'ek-6',
    elderName: 'ماسٹر محمد اسلم',
    elderAge: 69,
    area: 'ڈوبے، برنالہ، آزاد کشمیر',
    category: 'education',
    titleUrdu: 'بچوں کو بغیر خوف کے محبت اور روزمرہ کہانیوں سے ریاضی و اخلاق سکھانا',
    titleEn: 'Teaching Children Math and Ethics Through Kindness and Stories',
    experienceUrdu: 'میں نے پرائمری اسکول میں ۳۵ سال پڑھایا ہے۔ بچے کو مار یا جھڑک کر سکھانے سے اس کی ذہنی صلاحیت دب جاتی ہے۔ حساب کے سوالوں کو گھر کے انڈوں، بکریوں اور دکان کے سودے کی مثالوں سے سمجھائیں تو بچہ کبھی نہیں بھولتا۔ استاد اور والدین کا نرم رویہ بچے کو قابل اور خود اعتماد انسان بناتا ہے۔',
    experienceEn: 'I taught in primary schools for 35 years. Fear and harsh punishment crush a child curious mind. When you explain math using eggs, livestock, and real market change, they master concepts effortlessly with love.',
    sourceUrdu: '۳۵ سالہ تدریسی کیریئر اور سینکڑوں طلباء کی ذہنی نشوونما کے مشاہدے سے۔',
    sourceEn: 'From a 35-year teaching career mentoring hundreds of young village students.',
    whyUsefulUrdu: 'نوجوان والدین اور نئے اساتذہ اپنے بچوں کی بہتر پرورش اور اعتماد کی بحالی کا ہنر سیکھ سکتے ہیں۔',
    whyUsefulEn: 'Young parents and teachers learn gentle, effective pedagogical techniques for child development.',
    date: '02 اگست 2026',
    learnedCount: 88,
    savedCount: 51,
    questionsCount: 8,
  },
  {
    id: 'ek-7',
    elderName: 'چوہدری غلام مصطفیٰ',
    elderAge: 75,
    area: 'وٹالہ، برنالہ، آزاد کشمیر',
    category: 'life_experience',
    titleUrdu: 'مشکل وقت میں صبر، قناعت اور مشترکہ خاندانی نظام کو جوڑ کر رکھنے کا گر',
    titleEn: 'Patience, Contentment & Sustaining Family Harmony Through Hardship',
    experienceUrdu: 'زندگی میں تنگی اور آسانی دونوں اللہ کی طرف سے آزمائش ہیں۔ جب تنگی آئے تو غصے اور شکوے کے بجائے صبر سے کام لیں اور خاندان کے ساتھ بیٹھ کر مشورہ کریں۔ گھر کے ہر فرد کی بات سنیں، چھوٹوں پر شفقت اور بڑوں کا احترام قائم رکھیں تو کوئی بھی پریشانی خاندان کو توڑ نہیں سکتی۔',
    experienceEn: 'Hardships and ease are both life tests. When facing adversity, replace frustration with patience and open family consultation. Listen to every family member, nurture youngsters, and uphold elder dignity.',
    sourceUrdu: 'اپنی زندگی کے نشیب و فراز اور مشترکہ خاندان کی سربراہی کے ۴۵ سالہ تجربے سے۔',
    sourceEn: 'From steering a joint family through 45 years of life ups and downs.',
    whyUsefulUrdu: 'آج کل کی بے چینی اور خاندانی دوریوں کو ختم کرنے کے لیے یہ پائیدار ذہنی سکون کا نسخہ ہے۔',
    whyUsefulEn: 'Provides mental clarity and emotional strength for youths navigating modern stress.',
    date: '01 اگست 2026',
    learnedCount: 95,
    savedCount: 62,
    questionsCount: 9,
  },
  {
    id: 'ek-8',
    elderName: 'بابا رحمت علی',
    elderAge: 73,
    area: 'ڈوبے، برنالہ، آزاد کشمیر',
    category: 'environment',
    titleUrdu: 'قدرتی ندی نالوں کی حفاظت اور پہاڑی ڈھلوان پر زیتون و بیر کے درخت اگانا',
    titleEn: 'Protecting Waterways & Cultivating Wild Olive and Berry Trees',
    experienceUrdu: 'ہمارے علاقے میں خود رو جنگلی زیتون (کہو) اور بیر بکثرت پائے جاتے ہیں۔ اگر ان پر قلم کاری (Grafting) کر کے اچھے زیتون یا سیب نما بیر کی قلم لگائی جائے تو یہ بغیر اضافی پانی کے شاندار پھل دیتے ہیں اور مٹی کے کٹاؤ کو روکتے ہیں۔ کبھی بھی ندی کے کنارے پلاسٹک کا کچرا نہ پھینکیں، پانی سب کی امانت ہے۔',
    experienceEn: 'Wild olives and berries naturally thrive on our hills. By grafting high-yield varieties onto native wild rootstocks, they produce abundant harvest without extra irrigation while anchoring fragile hillsides.',
    sourceUrdu: 'ڈوبے کے جنگلات اور باغات میں پچاس سالہ عملی مشاہدے اور قلم کاری کے تجربات سے۔',
    sourceEn: 'From 50 years of grafting trials and forest conservation across Barnala hills.',
    whyUsefulUrdu: 'ماحولیاتی تحفظ اور بغیر کسی بڑے خرچ کے پہاڑی بنجر زمینوں کو سرسبز اور منافع بخش بنانے کا حل ملتا ہے۔',
    whyUsefulEn: 'Provides a zero-cost blueprint to green barren hillsides and create natural economic value.',
    date: '11 اگست 2026',
    learnedCount: 57,
    savedCount: 29,
    questionsCount: 4,
  },
  {
    id: 'ek-9',
    elderName: 'حاجی محمد بشیر',
    elderAge: 72,
    area: 'ڈوبے، برنالہ، آزاد کشمیر',
    category: 'social_service',
    titleUrdu: 'محلے کے تنازعات جرگہ اور بیٹھک میں محبت اور عدل سے نمٹانا',
    titleEn: 'Resolving Neighborhood Disputes with Impartiality & Compassion',
    experienceUrdu: 'جب دو بھائیوں یا ہمسایوں میں زمین، پانی یا بات چیت پر جھگڑا ہو، تو فوراً عدالتوں کے چکر میں پڑنے سے بچیں جہاں نسلیں برباد ہوتی ہیں۔ دونوں فریقین کو عزت سے بٹھائیں، دونوں کا پورا موقف سنیں، اور حق و انصاف کے ساتھ صلح کروائیں۔ صلح کروانے والے کو ہمیشہ بے لوث اور غیر جانبدار ہونا چاہیے۔',
    experienceEn: 'When neighbors or relatives face disputes over land or water, avoid costly litigation that ruins generations. Seat both parties respectfully, listen impartially, and forge peaceful reconciliation with fairness.',
    sourceUrdu: 'ڈوبے اور برنالہ میں ۳۰ سال پنچائتی و اصلاحی بیٹھکوں کی ثالثی کے مشاہدات سے۔',
    sourceEn: 'From mediating hundreds of community arbitrations in Barnala for over 30 years.',
    whyUsefulUrdu: 'عدالتی اخراجات اور خاندانی دشمنیوں سے بچاؤ اور محلے میں بھائی چارہ قائم رکھنے کا سنہری اصول ہے۔',
    whyUsefulEn: 'Fosters peaceful community coexistence and prevents destructive long-term feuds.',
    date: '07 اگست 2026',
    learnedCount: 73,
    savedCount: 41,
    questionsCount: 5,
  },
];
