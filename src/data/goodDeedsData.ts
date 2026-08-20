import { GoodDeedItem, GoodDeedCategory, UserProfile } from '../types';

export interface GoodDeedCategoryMeta {
  id: GoodDeedCategory;
  titleUrdu: string;
  titleEn: string;
  emoji: string;
  descriptionUrdu: string;
  descriptionEn: string;
  iconName: string;
}

export const GOOD_DEED_CATEGORIES: GoodDeedCategoryMeta[] = [
  {
    id: 'family',
    titleUrdu: 'خاندان',
    titleEn: 'Family',
    emoji: '❤️',
    descriptionUrdu: 'والدین، بہن بھائیوں اور اہلِ خانہ سے محبت، خدمت اور حسنِ سلوک',
    descriptionEn: 'Care, respect, and support for parents, siblings, and family',
    iconName: 'Heart'
  },
  {
    id: 'people',
    titleUrdu: 'لوگ و ہمدردی',
    titleEn: 'People & Care',
    emoji: '🤝',
    descriptionUrdu: 'دوستوں، رشتے داروں، بزرگوں اور ساتھیوں کے ساتھ حسنِ اخلاق و تعاون',
    descriptionEn: 'Active listening, helping friends, elders, and resolving conflicts',
    iconName: 'Users'
  },
  {
    id: 'community',
    titleUrdu: 'محلہ و برادری',
    titleEn: 'Community',
    emoji: '🏘️',
    descriptionUrdu: 'اپنے محلے، گلی، مسجد اور پڑوسیوں کی بہتری کے لیے عملی کردار',
    descriptionEn: 'Neighbourhood responsibility, street cleanliness, and helping neighbors',
    iconName: 'Home'
  },
  {
    id: 'environment',
    titleUrdu: 'ماحول و صفائی',
    titleEn: 'Environment',
    emoji: '🌱',
    descriptionUrdu: 'پانی اور بجلی کی بچت، پودوں کی نگہداشت اور گندگی سے صفائی',
    descriptionEn: 'Water/energy conservation, caring for plants, and keeping clean',
    iconName: 'Leaf'
  },
  {
    id: 'knowledge',
    titleUrdu: 'علم و رہنمائی',
    titleEn: 'Knowledge',
    emoji: '📚',
    descriptionUrdu: 'دوسروں کو مفید بات سکھانا، ڈیجیٹل ہنر میں رہنمائی اور حوصلہ افزائی',
    descriptionEn: 'Teaching children, digital literacy assistance, and sharing useful insights',
    iconName: 'BookOpen'
  },
  {
    id: 'work_honesty',
    titleUrdu: 'کام و دیانت',
    titleEn: 'Work & Honesty',
    emoji: '💼',
    descriptionUrdu: 'رزقِ حلال، لین دین میں سچائی، امانت داری اور وقت کا احترام',
    descriptionEn: 'Halal livelihood, honest transactions, and honoring commitments',
    iconName: 'Briefcase'
  },
  {
    id: 'self_discipline',
    titleUrdu: 'ضبطِ نفس و صبر',
    titleEn: 'Self-Discipline',
    emoji: '🧠',
    descriptionUrdu: 'غصے پر قابو، زبان کی حفاظت، اسکرین ٹائم کا اعتدال اور صبر',
    descriptionEn: 'Controlling temper, mindful speech, reducing distractions, and patience',
    iconName: 'ShieldCheck'
  },
  {
    id: 'character_worship',
    titleUrdu: 'اخلاق و بندگی',
    titleEn: 'Character & Worship',
    emoji: '🕌',
    descriptionUrdu: 'مسکراہٹ، سلام میں پہل، دلی دعا، شکر گزاری اور معاف کرنا',
    descriptionEn: 'Smiling, initiating greetings, sincere prayers, and gratefulness',
    iconName: 'Sparkles'
  },
  {
    id: 'humanity',
    titleUrdu: 'خدمتِ انسانیت',
    titleEn: 'Humanity',
    emoji: '🌍',
    descriptionUrdu: 'ضرورت مند کی مدد، بھوکے کو کھانا، پرندوں کا دانہ پانی اور آسانیاں بانٹنا',
    descriptionEn: 'Feeding the needy, caring for animals, relieving distress, and generosity',
    iconName: 'Globe'
  }
];

export const GOOD_DEEDS_DATA: GoodDeedItem[] = [
  // -------------------------------------------------------------
  // 1. ❤️ FAMILY (خاندان)
  // -------------------------------------------------------------
  {
    id: 'deed-fam-1',
    category: 'family',
    categoryUrdu: 'خاندان',
    categoryEn: 'Family',
    categoryEmoji: '❤️',
    titleUrdu: 'والدین سے نرمی اور دلی محبت سے بات کرنا',
    titleEn: 'Speak with gentleness and affection to parents',
    descriptionUrdu: 'والدین کے پاس ۵ منٹ بیٹھ کر ان کا حال پوچھیں اور ان کی بات مسکرا کر توجہ سے سنیں۔',
    descriptionEn: 'Sit with parents for 5 minutes, ask about their well-being, and listen with a smile.',
    actionStepUrdu: 'ابھی والدین کے پاس جائیں، ان کے کندھے یا ہاتھ پر شفقت سے ہاتھ رکھیں اور ان کے لیے خیر کی دعا کریں۔',
    actionStepEn: 'Go to your parents, greet them warmly, and ask how you can assist them today.',
    estimatedMinutes: 5,
    points: 15,
    targetSkillUrdu: 'خاندانی محبت و ادب',
    targetSkillEn: 'Family Respect & Empathy',
    growthAreaId: 'family_responsibility',
    quranOrHadithRefUrdu: 'وَقُل لَّهُمَا قَوْلًا كَرِيمًا — "اور ان سے ادب و نرمی کی بات کہو۔" (سورۃ الاسراء: ۲۳)',
    quranOrHadithRefEn: '“And speak to them a noble word.” (Surah Al-Isra: 23)',
    iconName: 'Heart'
  },
  {
    id: 'deed-fam-2',
    category: 'family',
    categoryUrdu: 'خاندان',
    categoryEn: 'Family',
    categoryEmoji: '❤️',
    titleUrdu: 'گھر میں بغیر کہے کسی کام میں مدد کرنا',
    titleEn: 'Help with a household chore without being asked',
    descriptionUrdu: 'کمرہ سمیٹنا، برتن دھونا، سودا سلف لانا یا پانی بھرنا — بغیر فرمائش کے خاموشی سے مدد کریں۔',
    descriptionEn: 'Tidy up a room, bring groceries, or wash dishes without waiting to be asked.',
    actionStepUrdu: 'گھر میں دیکھیں کون سا کام بکھرا ہوا ہے، خاموشی سے اسے ٹھیک کر کے اپنے گھر والوں کا بوجھ ہلکا کریں۔',
    actionStepEn: 'Spot a household task that needs doing and quietly complete it to reduce family burden.',
    estimatedMinutes: 10,
    points: 20,
    targetSkillUrdu: 'خاندانی ذمہ داری',
    targetSkillEn: 'Family Responsibility',
    growthAreaId: 'family_responsibility',
    quranOrHadithRefUrdu: 'حدیث شریف: نبی کریم ﷺ اپنے گھر والوں کے کام کاج میں ہاتھ بٹایا کرتے تھے۔ (صحیح بخاری)',
    quranOrHadithRefEn: 'Hadith: The Prophet ﷺ used to assist his family in household chores. (Sahih Bukhari)',
    iconName: 'Home'
  },
  {
    id: 'deed-fam-3',
    category: 'family',
    categoryUrdu: 'خاندان',
    categoryEn: 'Family',
    categoryEmoji: '❤️',
    titleUrdu: 'چھوٹے بہن بھائی کو محبت سے پڑھانا یا رہنمائی دینا',
    titleEn: 'Tutor or encourage a younger sibling with kindness',
    descriptionUrdu: 'چھوٹے بہن بھائی کے اسکول کے کام، سبق یا کسی الجھن میں ۱۰ منٹ دوستانہ انداز سے مدد کریں۔',
    descriptionEn: 'Spend 10 minutes gently helping a sibling with schoolwork or practical advice.',
    actionStepUrdu: 'چھوٹے بہن بھائی کا ہوم ورک یا کتاب دیکھیں اور کسی مشکل سوال کو آسان کر کے سمجھائیں۔',
    actionStepEn: 'Review their lesson and guide them patiently through a difficult concept.',
    estimatedMinutes: 10,
    points: 15,
    targetSkillUrdu: 'تدریس و رہنمائی',
    targetSkillEn: 'Mentorship & Communication',
    growthAreaId: 'communication',
    quranOrHadithRefUrdu: 'حدیث شریف: "وہ ہم میں سے نہیں جو ہمارے چھوٹوں پر رحم نہ کرے اور بڑوں کی عزت نہ کرے۔" (ترمذی)',
    quranOrHadithRefEn: 'Hadith: “He is not of us who does not show mercy to our young and respect to our elders.” (Tirmidhi)',
    iconName: 'BookOpen'
  },

  // -------------------------------------------------------------
  // 2. 🤝 PEOPLE & CARE (لوگ و ہمدردی)
  // -------------------------------------------------------------
  {
    id: 'deed-peo-1',
    category: 'people',
    categoryUrdu: 'لوگ و ہمدردی',
    categoryEn: 'People & Care',
    categoryEmoji: '🤝',
    titleUrdu: 'کسی کی بات بغیر کاٹے پوری توجہ سے سننا',
    titleEn: 'Listen to someone attentively without interrupting',
    descriptionUrdu: 'جب کوئی دوست، بزرگ یا گھر کا فرد بات کرے تو اپنا موبائل رکھ کر پوری توجہ سے ان کی سنیں۔',
    descriptionEn: 'When a friend, elder, or colleague speaks, put your phone aside and listen deeply.',
    actionStepUrdu: 'آج جب بھی کوئی آپ سے بات کرے، بیچ میں نہ ٹوکیں اور ان کی بات ختم ہونے پر ہمدردی سے جواب دیں۔',
    actionStepEn: 'Practice uninterrupted, respectful listening in your next interaction today.',
    estimatedMinutes: 5,
    points: 15,
    targetSkillUrdu: 'فعال سماعت (Active Listening)',
    targetSkillEn: 'Active Listening',
    growthAreaId: 'communication',
    quranOrHadithRefUrdu: 'حکمت: اچھا سامع بننا گفتگو کا نصف ادب اور محبت کا بہترین ثبوت ہے۔',
    quranOrHadithRefEn: 'Wisdom: Attentive listening is half of respectful dialogue and builds deep trust.',
    iconName: 'Ear'
  },
  {
    id: 'deed-peo-2',
    category: 'people',
    categoryUrdu: 'لوگ و ہمدردی',
    categoryEn: 'People & Care',
    categoryEmoji: '🤝',
    titleUrdu: 'کسی ناراض شخص یا پرانے دوست سے صلح کا آغاز کرنا',
    titleEn: 'Initiate reconciliation with an estranged friend or relative',
    descriptionUrdu: 'انا کو ایک طرف رکھ کر کسی ایسے شخص کو سلام اور خیریت کا پیغام بھیجیں جس سے دوری ہو۔',
    descriptionEn: 'Put ego aside and send a warm greeting/reconciliation message to someone you drifted from.',
    actionStepUrdu: 'ایک شائستہ اور محبت بھرا پیغام لکھیں: "السلام علیکم، امید ہے آپ بخیریت ہوں گے۔ آپ کی یاد آئی تو سلام عرض کیا۔"',
    actionStepEn: 'Send a kind message wishing peace and reviving goodwill.',
    estimatedMinutes: 5,
    points: 20,
    targetSkillUrdu: 'صلح جوئی و رابطہ',
    targetSkillEn: 'Conflict Resolution & Communication',
    growthAreaId: 'communication',
    quranOrHadithRefUrdu: 'حدیث شریف: "بہترین وہ ہے جو سلام میں پہل کرے۔" (ابوداؤد)',
    quranOrHadithRefEn: 'Hadith: “The better of the two is the one who initiates the greeting of peace.” (Abu Dawud)',
    iconName: 'MessageSquare'
  },
  {
    id: 'deed-peo-3',
    category: 'people',
    categoryUrdu: 'لوگ و ہمدردی',
    categoryEn: 'People & Care',
    categoryEmoji: '🤝',
    titleUrdu: 'کسی بزرگ کی مدد کرنا یا ان کا بوجھ اٹھانا',
    titleEn: 'Assist an elderly person with kindness and respect',
    descriptionUrdu: 'گھر کے بزرگ یا محلے کے بزرگ کو بیٹھنے میں، دوا یاد دلانے یا سامان لانے میں عزت سے مدد دیں۔',
    descriptionEn: 'Help an elderly person carry their groceries, remind them of medicine, or sit with them.',
    actionStepUrdu: 'کسی بزرگ کے پاس جائیں، ان کے چہرے پر مسکراہٹ لائیں اور ان سے دعائیں لیں۔',
    actionStepEn: 'Offer immediate hands-on help to an elder in your home or neighborhood.',
    estimatedMinutes: 5,
    points: 15,
    targetSkillUrdu: 'احترام و سماجی ہمدردی',
    targetSkillEn: 'Respect & Social Care',
    growthAreaId: 'character',
    quranOrHadithRefUrdu: 'حدیث شریف: "جس نوجوان نے کسی بوڑھے کی عمر کی وجہ سے عزت کی، اللہ اس کے بڑھاپے میں اس کے لیے عزت کرنے والے مقرر فرمائے گا۔" (ترمذی)',
    quranOrHadithRefEn: 'Hadith: “If a youth honors an elder due to their age, Allah appoints someone to honor them in old age.” (Tirmidhi)',
    iconName: 'HeartHandshake'
  },

  // -------------------------------------------------------------
  // 3. 🏘️ COMMUNITY (محلہ و برادری)
  // -------------------------------------------------------------
  {
    id: 'deed-com-1',
    category: 'community',
    categoryUrdu: 'محلہ و برادری',
    categoryEn: 'Community',
    categoryEmoji: '🏘️',
    titleUrdu: 'راستے سے تکلیف دہ چیز (پتھر، کانٹا، کچرا) ہٹانا',
    titleEn: 'Remove a harmful obstacle (stone, thorn, trash) from the path',
    descriptionUrdu: 'گلی یا سڑک پر چلتے ہوئے ایسی کوئی چیز ہٹا دیں جس سے موٹرسائیکل، بچے یا راہگیر کو چوٹ لگ سکتی ہو۔',
    descriptionEn: 'Clear away any dangerous object or litter that could harm pedestrians or vehicles.',
    actionStepUrdu: 'اپنے گھر کے باہر یا گلی میں چلتے ہوئے راستے کو صاف اور محفوظ بنائیں۔',
    actionStepEn: 'Remove a hazard from the sidewalk or street to ensure safe passage for everyone.',
    estimatedMinutes: 3,
    points: 15,
    targetSkillUrdu: 'شہری ذمہ داری و صفائی',
    targetSkillEn: 'Civic Responsibility',
    growthAreaId: 'community_service',
    quranOrHadithRefUrdu: 'حدیث شریف: "راستے سے تکلیف دہ چیز کو ہٹانا صدقہ ہے۔" (صحیح مسلم)',
    quranOrHadithRefEn: 'Hadith: “Removing a harmful obstacle from the road is charity.” (Sahih Muslim)',
    iconName: 'ShieldAlert'
  },
  {
    id: 'deed-com-2',
    category: 'community',
    categoryUrdu: 'محلہ و برادری',
    categoryEn: 'Community',
    categoryEmoji: '🏘️',
    titleUrdu: 'پڑوسی کی خیریت معلوم کرنا یا کوئی تحفہ / کھانا بھیجنا',
    titleEn: 'Inquire after a neighbor or share food',
    descriptionUrdu: 'قریبی پڑوسی کا دروازہ کھٹکھٹا کر ان کی خیریت دریافت کریں یا گھر سے کوئی چیز بھیجیں۔',
    descriptionEn: 'Check on your neighbor, exchange warm greetings, or share a small dish of food.',
    actionStepUrdu: 'پڑوسی کے گھر جائیں یا ان کے فرد کو سلام کر کے پوچھیں: "کیا آپ کو کسی کام میں میری مدد کی ضرورت ہے؟"',
    actionStepEn: 'Reach out to your neighbor with genuine warmth and neighborly support.',
    estimatedMinutes: 10,
    points: 20,
    targetSkillUrdu: 'پڑوسی کے حقوق و سماجی تعلق',
    targetSkillEn: 'Community Bonding & Empathy',
    growthAreaId: 'community_service',
    quranOrHadithRefUrdu: 'حدیث شریف: حضرت جبرائیل مجھے پڑوسی کے بارے میں اتنی وصیت کرتے رہے کہ مجھے گمان ہوا کہ وہ اسے وارث بنا دیں گے۔ (بخاری)',
    quranOrHadithRefEn: 'Hadith: Jibreel continued to emphasize the rights of the neighbor until I thought he would make them heirs. (Bukhari)',
    iconName: 'Users'
  },

  // -------------------------------------------------------------
  // 4. 🌱 ENVIRONMENT (ماحول و صفائی)
  // -------------------------------------------------------------
  {
    id: 'deed-env-1',
    category: 'environment',
    categoryUrdu: 'ماحول و صفائی',
    categoryEn: 'Environment',
    categoryEmoji: '🌱',
    titleUrdu: 'پانی اور بجلی کے ضیاع کو روکنا',
    titleEn: 'Conserve water and electricity at home and workplace',
    descriptionUrdu: 'وضو، ہاتھ دھوتے وقت نل بند کرنا، اور خالی کمرے کی لائٹ یا پنکھا بند کرنا۔',
    descriptionEn: 'Turn off dripping taps, economize water during washing, and switch off unused appliances.',
    actionStepUrdu: 'پورے گھر میں گھوم کر غیر ضروری جلتی لائٹس بند کریں اور وضو میں پانی کا اعتدال رکھیں۔',
    actionStepEn: 'Turn off unneeded lights and practice water moderation throughout today.',
    estimatedMinutes: 3,
    points: 15,
    targetSkillUrdu: 'وسائل کی بچت و نظم و ضبط',
    targetSkillEn: 'Resource Conservation & Discipline',
    growthAreaId: 'health_discipline',
    quranOrHadithRefUrdu: 'حدیث شریف: نبی کریم ﷺ نے بہتی نہر پر بھی پانی ضائع کرنے سے منع فرمایا۔ (ابن ماجہ)',
    quranOrHadithRefEn: 'Hadith: The Prophet ﷺ prohibited wasting water even while at a flowing river. (Ibn Majah)',
    iconName: 'Zap'
  },
  {
    id: 'deed-env-2',
    category: 'environment',
    categoryUrdu: 'ماحول و صفائی',
    categoryEn: 'Environment',
    categoryEmoji: '🌱',
    titleUrdu: 'پودوں کو پانی دینا یا ایک پودا لگانا',
    titleEn: 'Water house plants or plant a seed',
    descriptionUrdu: 'گھر، چھت یا گلی میں پودوں اور درختوں کو پانی دیں تاکہ وہ سرسبز رہیں۔',
    descriptionEn: 'Water dry plants or plant a small sapling/seed for sustainable green growth.',
    actionStepUrdu: 'برتن میں پانی لیں اور مرجھاتے پودوں کو سیراب کر کے ماحول کو تروتازہ بنائیں۔',
    actionStepEn: 'Care for nearby plants by watering them and keeping their soil clean.',
    estimatedMinutes: 5,
    points: 15,
    targetSkillUrdu: 'ماحولیاتی شعور و پودوں کی نگہداشت',
    targetSkillEn: 'Environmental Stewardship',
    growthAreaId: 'practical_skills',
    quranOrHadithRefUrdu: 'حدیث شریف: "کوئی مسلمان جو پودا لگاتا ہے، پھر اس سے انسان یا پرندہ کھاتا ہے، وہ اس کے لیے صدقہ ہے۔" (بخاری)',
    quranOrHadithRefEn: 'Hadith: “Whatever a Muslim plants and an animal or bird eats from it is charity for them.” (Bukhari)',
    iconName: 'Leaf'
  },

  // -------------------------------------------------------------
  // 5. 📚 KNOWLEDGE (علم و رہنمائی)
  // -------------------------------------------------------------
  {
    id: 'deed-kno-1',
    category: 'knowledge',
    categoryUrdu: 'علم و رہنمائی',
    categoryEn: 'Knowledge',
    categoryEmoji: '📚',
    titleUrdu: 'کسی کو موبائل یا کمپیوٹر پر کوئی مفید کام سکھانا',
    titleEn: 'Help someone solve a digital or mobile phone problem',
    descriptionUrdu: 'کسی بزرگ یا ساتھی کو بجلی کا بل دیکھنا، آن لائن فارم بھرنا یا کوئی مفید ایپ استعمال کرنا سکھائیں۔',
    descriptionEn: 'Teach an elder or peer how to check a bill online, use an app, or navigate their phone.',
    actionStepUrdu: 'کسی قریبی شخص کی ڈیجیٹل مشکل پوچھیں اور ۵ منٹ میں صبر و تحمل سے انہیں خود کر کے دکھائیں۔',
    actionStepEn: 'Spend 5 minutes patiently guiding someone through a useful digital tool.',
    estimatedMinutes: 5,
    points: 20,
    targetSkillUrdu: 'ڈیجیٹل مہارت (Digital Literacy)',
    targetSkillEn: 'Digital Literacy & Mentorship',
    growthAreaId: 'digital_literacy',
    quranOrHadithRefUrdu: 'حدیث شریف: "تم میں سے بہترین وہ ہے جو قرآن اور نفع بخش علم سیکھے اور دوسروں کو سکھائے۔" (بخاری)',
    quranOrHadithRefEn: 'Hadith: “The best of you are those who learn beneficial knowledge and teach it.” (Bukhari)',
    iconName: 'Smartphone'
  },
  {
    id: 'deed-kno-2',
    category: 'knowledge',
    categoryUrdu: 'علم و رہنمائی',
    categoryEn: 'Knowledge',
    categoryEmoji: '📚',
    titleUrdu: 'کوئی مفید حکمت یا اچھی بات دوسروں کے ساتھ شیئر کرنا',
    titleEn: 'Share a beneficial ethical lesson or practical insight',
    descriptionUrdu: 'Seekho یا کسی کتاب سے سیکھی ہوئی قیمتی بات اپنے گھر والوں یا دوستوں کو آسان انداز میں بتائیں۔',
    descriptionEn: 'Share a practical takeaway or wise quote with your family or friends to uplift them.',
    actionStepUrdu: 'آج کے سیکھے ہوئے سبق سے ایک تعمیری بات اپنے دوست یا اہلِ خانہ کو سنائیں۔',
    actionStepEn: 'Communicate one practical life insight you recently learned to inspire someone.',
    estimatedMinutes: 5,
    points: 15,
    targetSkillUrdu: 'علم کا پھیلاؤ و ابلاغ',
    targetSkillEn: 'Knowledge Sharing & Communication',
    growthAreaId: 'knowledge',
    quranOrHadithRefUrdu: 'حدیث شریف: "مجھ سے پہنچاؤ خواہ ایک ہی آیت ہو۔" (بخاری)',
    quranOrHadithRefEn: 'Hadith: “Convey from me, even if it is a single verse.” (Bukhari)',
    iconName: 'Share2'
  },

  // -------------------------------------------------------------
  // 6. 💼 WORK & HONESTY (کام و دیانت)
  // -------------------------------------------------------------
  {
    id: 'deed-wrk-1',
    category: 'work_honesty',
    categoryUrdu: 'کام و دیانت',
    categoryEn: 'Work & Honesty',
    categoryEmoji: '💼',
    titleUrdu: 'کام اور لین دین میں مکمل سچائی اور امانت داری برتنا',
    titleEn: 'Uphold absolute honesty and fairness in work and dealings',
    descriptionUrdu: 'دکان، دفتر یا فری لانسنگ میں گاہک کو صحیح بات بتانا اور پیمانے و وقت میں خیانت نہ کرنا۔',
    descriptionEn: 'Be fully transparent with customers, provide accurate work, and fulfill commitments on time.',
    actionStepUrdu: 'آج اپنے کام میں گاہک یا ساتھی سے دیانت داری کے ساتھ معاملہ کریں اور عیب چھپائے بغیر بات کریں۔',
    actionStepEn: 'Practice rigorous transparency and honest communication in your daily work tasks today.',
    estimatedMinutes: 10,
    points: 20,
    targetSkillUrdu: 'دیانت داری و امانت',
    targetSkillEn: 'Integrity & Workplace Ethics',
    growthAreaId: 'character',
    quranOrHadithRefUrdu: 'حدیث شریف: "سچا اور امانت دار تاجر قیامت کے دن انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔" (ترمذی)',
    quranOrHadithRefEn: 'Hadith: “The honest and trustworthy merchant will be with the prophets and righteous on the Day of Judgment.” (Tirmidhi)',
    iconName: 'ShieldCheck'
  },
  {
    id: 'deed-wrk-2',
    category: 'work_honesty',
    categoryUrdu: 'کام و دیانت',
    categoryEn: 'Work & Honesty',
    categoryEmoji: '💼',
    titleUrdu: 'کسی ملازم یا محنت کش کا حق وقت پر اور عزت سے ادا کرنا',
    titleEn: 'Pay workers promptly and treat helpers with dignity',
    descriptionUrdu: 'کسی ڈیلیوری بوائے، رکشہ والے یا گھریلو ملازم سے نرمی سے بات کریں اور ان کا حق پورا دیں۔',
    descriptionEn: 'Treat service workers with great respect, tip fairly, and pay wages promptly.',
    actionStepUrdu: 'آج جس محنت کش سے بھی واسطہ پڑے، اسے "شکریہ" اور مسکراہٹ کے ساتھ عزت دیں۔',
    actionStepEn: 'Express gratitude and dignity to service workers and manual laborers you meet.',
    estimatedMinutes: 5,
    points: 15,
    targetSkillUrdu: 'پیشہ ورانہ اخلاق و ہمدردی',
    targetSkillEn: 'Professional Empathy & Justice',
    growthAreaId: 'character',
    quranOrHadithRefUrdu: 'حدیث شریف: "مزدور کا پسینہ خشک ہونے سے پہلے اس کی اجرت ادا کر دو۔" (ابن ماجہ)',
    quranOrHadithRefEn: 'Hadith: “Give the laborer his wages before his sweat dries.” (Ibn Majah)',
    iconName: 'Coins'
  },

  // -------------------------------------------------------------
  // 7. 🧠 SELF-DISCIPLINE (ضبطِ نفس و صبر)
  // -------------------------------------------------------------
  {
    id: 'deed-slf-1',
    category: 'self_discipline',
    categoryUrdu: 'ضبطِ نفس و صبر',
    categoryEn: 'Self-Discipline',
    categoryEmoji: '🧠',
    titleUrdu: 'غصے اور اختلاف کے وقت خاموش رہنا اور درگزر کرنا',
    titleEn: 'Practice silence and forgiveness during anger or conflict',
    descriptionUrdu: 'جب کوئی بات بری لگے تو فوری جواب دینے کی بجائے ۳۰ سیکنڈ خاموش رہیں اور پانی پی لیں۔',
    descriptionEn: 'When provoked, take a 30-second pause, refrain from harsh replies, and forgive.',
    actionStepUrdu: 'آج کے دن غصے کا ایک واقعہ آئے تو زبان کو سخت لفظ سے بچا کر درگزر کا مظاہرہ کریں۔',
    actionStepEn: 'Choose silent restraint and calm words when triggered by frustration today.',
    estimatedMinutes: 5,
    points: 20,
    targetSkillUrdu: 'ضبطِ نفس و جذبات پر قابو',
    targetSkillEn: 'Emotional Restraint & Patience',
    growthAreaId: 'character',
    quranOrHadithRefUrdu: 'حدیث شریف: "پہلوان وہ نہیں جو دوسرے کو پچھاڑ دے، بلکہ پہلوان وہ ہے جو غصے کے وقت خود پر قابو پائے۔" (بخاری)',
    quranOrHadithRefEn: 'Hadith: “The strong person is not the wrestler; rather the strong person controls themselves during anger.” (Bukhari)',
    iconName: 'Shield'
  },
  {
    id: 'deed-slf-2',
    category: 'self_discipline',
    categoryUrdu: 'ضبطِ نفس و صبر',
    categoryEn: 'Self-Discipline',
    categoryEmoji: '🧠',
    titleUrdu: 'غیر ضروری فون اسکرولنگ ۳۰ منٹ روک کر بامقصد کام کرنا',
    titleEn: 'Pause mindless phone scrolling for 30 minutes for focused work',
    descriptionUrdu: 'ریلز اور شارٹس کا وقت بچا کر اپنی تعلیم، ہنر یا کسی اہم کام پر یکسوئی سے لگائیں۔',
    descriptionEn: 'Set your phone aside for 30 minutes and invest that uninterrupted focus in learning.',
    actionStepUrdu: 'ابھی فون سائیڈ پر رکھیں اور ۱۵ سے ۳۰ منٹ کسی تعلیمی یا عملی مقصد پر فوکس کریں۔',
    actionStepEn: 'Put your phone face down and complete one meaningful focused task right now.',
    estimatedMinutes: 15,
    points: 20,
    targetSkillUrdu: 'وقت کی قدر و ڈیجیٹل ڈسپلن',
    targetSkillEn: 'Time Management & Focus',
    growthAreaId: 'health_discipline',
    quranOrHadithRefUrdu: 'حدیث شریف: "دو نعمتیں ایسی ہیں جن میں اکثر لوگ گھاٹے میں ہیں: صحت اور فراغت (وقت)۔" (بخاری)',
    quranOrHadithRefEn: 'Hadith: “Two blessings many people lose: health and free time.” (Bukhari)',
    iconName: 'Clock'
  },

  // -------------------------------------------------------------
  // 8. 🕌 CHARACTER & WORSHIP (اخلاق و بندگی)
  // -------------------------------------------------------------
  {
    id: 'deed-chr-1',
    category: 'character_worship',
    categoryUrdu: 'اخلاق و بندگی',
    categoryEn: 'Character & Worship',
    categoryEmoji: '🕌',
    titleUrdu: 'خندہ پیشانی سے مسکرانا اور سلام میں پہل کرنا',
    titleEn: 'Greet others with a cheerful smile and initiate the Salam',
    descriptionUrdu: 'آج جس سے بھی ملیں، خلوصِ دل سے مسکرا کر سلام کریں اور مثبت توانائی پھیلائیں۔',
    descriptionEn: 'Brighten someone’s day by greeting them with a sincere smile and pleasant Salam.',
    actionStepUrdu: 'آج کم از کم ۳ افراد کو خوش دلی کے ساتھ سلام میں پہل کریں۔',
    actionStepEn: 'Smile and initiate the greeting with at least 3 people you encounter today.',
    estimatedMinutes: 3,
    points: 15,
    targetSkillUrdu: 'حسنِ اخلاق و بشاشت',
    targetSkillEn: 'Interpersonal Warmth & Etiquette',
    growthAreaId: 'character',
    quranOrHadithRefUrdu: 'حدیث شریف: "اپنے بھائی کے سامنے تمہارا مسکرانا صدقہ ہے۔" (ترمذی)',
    quranOrHadithRefEn: 'Hadith: “Smiling in the face of your brother is charity.” (Tirmidhi)',
    iconName: 'Smile'
  },
  {
    id: 'deed-chr-2',
    category: 'character_worship',
    categoryUrdu: 'اخلاق و بندگی',
    categoryEn: 'Character & Worship',
    categoryEmoji: '🕌',
    titleUrdu: 'والدین، اساتذہ اور پریشان حال لوگوں کے لیے غائبانہ دعا',
    titleEn: 'Make sincere secret prayers for parents, teachers, and those in hardship',
    descriptionUrdu: 'تنہائی میں بیٹھ کر اپنے والدین کی صحت، اساتذہ اور دنیا کے مظلوم و پریشان افراد کے لیے دعا مانگیں۔',
    descriptionEn: 'Take a quiet moment to pray sincerely for your parents, teachers, and distressed souls.',
    actionStepUrdu: 'ایک منٹ کے لیے ہاتھ اٹھائیں یا دل میں مخلصانہ دعا کریں: "یا اللہ! میرے والدین، اساتذہ اور تمام ضرورت مندوں کی مشکلیں آسان فرما۔"',
    actionStepEn: 'Make a heartfelt silent prayer for your family and community members.',
    estimatedMinutes: 3,
    points: 15,
    targetSkillUrdu: 'شکر گزاری و روحانی پاکیزگی',
    targetSkillEn: 'Gratitude & Spiritual Mindfulness',
    growthAreaId: 'character',
    quranOrHadithRefUrdu: 'حدیث شریف: "مسلمان کی اپنے بھائی کے لیے پیٹھ پیچھے کی گئی دعا قبول ہوتی ہے۔" (صحیح مسلم)',
    quranOrHadithRefEn: 'Hadith: “A Muslim’s supplication for their brother in their absence is answered.” (Sahih Muslim)',
    iconName: 'Heart'
  },

  // -------------------------------------------------------------
  // 9. 🌍 HUMANITY (خدمتِ انسانیت)
  // -------------------------------------------------------------
  {
    id: 'deed-hum-1',
    category: 'humanity',
    categoryUrdu: 'خدمتِ انسانیت',
    categoryEn: 'Humanity',
    categoryEmoji: '🌍',
    titleUrdu: 'پرندوں یا جانوروں کے لیے پانی اور دانہ رکھنا',
    titleEn: 'Place water and grain for birds or stray animals',
    descriptionUrdu: 'چھت، بالکونی یا کھڑکی پر کسی برتن میں پرندوں کے لیے تازہ پانی اور روٹی کے ٹکڑے یا دانہ رکھیں۔',
    descriptionEn: 'Put out clean water and seeds/bread crumbs on your rooftop or window for birds.',
    actionStepUrdu: 'ایک چھوٹا پیالہ یا ڈبہ لیں، اسے دھو کر پانی بھریں اور چھت یا کھڑکی پر رکھیں۔',
    actionStepEn: 'Fill a clean dish with water and place it outside for birds and small creatures.',
    estimatedMinutes: 5,
    points: 15,
    targetSkillUrdu: 'مخلوقِ خدا پر رحم و ہمدردی',
    targetSkillEn: 'Compassion for Living Creatures',
    growthAreaId: 'character',
    quranOrHadithRefUrdu: 'حدیث شریف: "ہر جاندار پر رحم کرنے میں اجر و ثواب ہے۔" (صحیح بخاری)',
    quranOrHadithRefEn: 'Hadith: “In every living creature there is reward for doing good.” (Sahih Bukhari)',
    iconName: 'Feather'
  },
  {
    id: 'deed-hum-2',
    category: 'humanity',
    categoryUrdu: 'خدمتِ انسانیت',
    categoryEn: 'Humanity',
    categoryEmoji: '🌍',
    titleUrdu: 'کسی ضرورت مند کی مدد یا بھوکے کو کھانا پیش کرنا',
    titleEn: 'Help a needy person or share a meal with someone hungry',
    descriptionUrdu: 'کسی سفید پوش یا ضرورت مند کی خاموشی سے عزت نفس مجروح کیے بغیر مدد کریں۔',
    descriptionEn: 'Discreetly offer food, tea, or financial assistance to someone facing hardship.',
    actionStepUrdu: 'آج کسی ضرورت مند کو عزت کے ساتھ چائے، کھانا یا چھوٹی مدد پیش کریں۔',
    actionStepEn: 'Offer a dignified meal or helpful hand to someone struggling today.',
    estimatedMinutes: 10,
    points: 20,
    targetSkillUrdu: 'سخاوت و خدمتِ خلق',
    targetSkillEn: 'Generosity & Social Welfare',
    growthAreaId: 'community_service',
    quranOrHadithRefUrdu: 'حدیث شریف: "جو کسی مسلمان کی دنیاوی مشکل آسان کرے گا، اللہ قیامت کے دن اس کی مشکل آسان فرمائے گا۔" (مسلم)',
    quranOrHadithRefEn: 'Hadith: “Whoever relieves a hardship for a believer in this world, Allah will relieve their hardship on the Day of Judgment.” (Muslim)',
    iconName: 'HeartHandshake'
  }
];

/**
 * Smart Good Deed Recommendation Algorithm
 * Tailors recommendation according to learner's:
 * - Available time (5m vs 10-15m vs 20m)
 * - Age / Occupation / Interests
 * - Uncompleted deeds
 * - Category filters
 */
export function getRecommendedGoodDeed(
  userProfile: UserProfile,
  categoryFilter?: GoodDeedCategory | 'all',
  cycleOffset: number = 0
): GoodDeedItem {
  let pool = [...GOOD_DEEDS_DATA];

  if (categoryFilter && categoryFilter !== 'all') {
    pool = pool.filter(d => d.category === categoryFilter);
  }

  if (pool.length === 0) {
    pool = [...GOOD_DEEDS_DATA];
  }

  // Check available time
  const timePref = userProfile.growthDailyTimePreference || userProfile.timePerDay || '15m';
  const prefersShort = timePref === '15m' || timePref.includes('5') || timePref.includes('10');

  // Completed IDs
  const completedIds = userProfile.completedGoodDeedIds || userProfile.completedGrowthTaskIds || [];

  // Sort pool: uncompleted first, matching time preference
  const uncompleted = pool.filter(d => !completedIds.includes(d.id));
  const candidatePool = uncompleted.length > 0 ? uncompleted : pool;

  if (prefersShort) {
    // Sort by shorter duration first
    candidatePool.sort((a, b) => a.estimatedMinutes - b.estimatedMinutes);
  } else {
    // Balanced distribution
    candidatePool.sort((a, b) => b.points - a.points);
  }

  // Safe cycling index
  const index = Math.abs(cycleOffset) % candidatePool.length;
  return candidatePool[index];
}

// ==========================================
// 🌟 MY IMPACT (میرا مثبت اثر) ENGINE & RECORDS
// ==========================================

import { PersonalImpactRecord, PersonalImpactCategory } from '../types';

export interface ImpactSuggestionItem {
  id: string;
  category: PersonalImpactCategory;
  categoryUrdu: string;
  categoryEn: string;
  categoryEmoji: string;
  titleUrdu: string;
  titleEn: string;
  whatIDidUrdu: string;
  whatIDidEn: string;
  whoBenefitedUrdu: string;
  whoBenefitedEn: string;
  whatILearnedUrdu: string;
  whatILearnedEn: string;
  whatICanDoNextUrdu: string;
  whatICanDoNextEn: string;
  bismillahHeader: string;
  verifiedSourceUrdu: string;
  verifiedSourceEn: string;
}

export const PRACTICAL_IMPACT_SUGGESTIONS: ImpactSuggestionItem[] = [
  {
    id: 'sug-family-help',
    category: 'family',
    categoryUrdu: 'خاندان',
    categoryEn: 'Family',
    categoryEmoji: '❤️',
    titleUrdu: 'اہل خانہ یا والدین کی عملی مدد',
    titleEn: 'Help a family member or parents',
    whatIDidUrdu: 'والدین کے گھریلو کام میں ہاتھ بٹایا، سامان لا کر دیا اور مسکرا کر خیریت پوچھی۔',
    whatIDidEn: 'Assisted parents with household chores, brought groceries, and asked about their day with respect.',
    whoBenefitedUrdu: 'امی، ابو اور گھر کے تمام افراد۔',
    whoBenefitedEn: 'Mother, father, and the whole household.',
    whatILearnedUrdu: 'والدین کی خدمت اور چھوٹے چھوٹے کاموں میں تعاون سے گھر کا ماحول پرسکون اور محبت بھرا بنتا ہے۔',
    whatILearnedEn: 'Serving family creates deep tranquility, blessings, and emotional warmth at home.',
    whatICanDoNextUrdu: 'روزانہ بغیر کہے کم از کم ایک گھریلو ذمہ داری خود سنبھالوں گا۔',
    whatICanDoNextEn: 'Will take proactive initiative on one household task every single day.',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    verifiedSourceUrdu: 'قرآن کریم: سورۃ الاسراء: ۲۳ ("اور والدین کے ساتھ حسنِ سلوک کرو")',
    verifiedSourceEn: 'Quran: Surah Al-Isra 17:23 ("And be dutiful and kind to parents")'
  },
  {
    id: 'sug-teach-skill',
    category: 'teaching_knowledge',
    categoryUrdu: 'علم و ہنر سکھانا',
    categoryEn: 'Teaching & Sharing Knowledge',
    categoryEmoji: '📚',
    titleUrdu: 'کسی کو ایک مفید ہنر سکھائیں',
    titleEn: 'Teach someone a useful skill',
    whatIDidUrdu: 'اپنے کزن یا دوست کو موبائل پر کینوا سے پوسٹر بنانے اور فائل محفوظ کرنے کا طریقہ سکھایا۔',
    whatIDidEn: 'Taught a friend or younger cousin how to create a digital poster and save files in Canva.',
    whoBenefitedUrdu: 'میرا دوست / چھوٹا بھائی جس نے ایک نیا ہنر سیکھا۔',
    whoBenefitedEn: 'My friend / younger peer who gained a practical digital capability.',
    whatILearnedUrdu: 'اپنا ہنر دوسروں کو سکھانے سے انسان کا اپنا علم اور اعتماد دوگنا ہو جاتا ہے۔',
    whatILearnedEn: 'Teaching solidifies your own mastery and builds collective community competence.',
    whatICanDoNextUrdu: 'اگلے ہفتے اسے آن لائن مفت ریسورسز تلاش کرنے کا طریقہ بتاؤں گا۔',
    whatICanDoNextEn: 'Next week, I will guide them on finding credible free educational resources.',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    verifiedSourceUrdu: 'صحیح بخاری: ۵۰۲۷ ("تم میں سے بہترین وہ ہے جس نے قرآن سیکھا اور سکھایا" اور نفع بخش علم صدقہ جاریہ ہے)',
    verifiedSourceEn: 'Sahih al-Bukhari: 5027 ("The best among you are those who learn knowledge and teach it")'
  },
  {
    id: 'sug-neighbor-help',
    category: 'community',
    categoryUrdu: 'محلہ و برادری',
    categoryEn: 'Community',
    categoryEmoji: '🏘️',
    titleUrdu: 'پڑوسی کی خبر گیری اور مدد',
    titleEn: 'Help or check on a neighbor',
    whatIDidUrdu: 'محلے کے بزرگ پڑوسی کی دکان سے ادویات یا سودا لا دیا اور ان کے لیے نیک تمناؤں کا اظہار کیا۔',
    whatIDidEn: 'Ran an errand to fetch groceries/medicine for an elderly neighbor and checked on their wellbeing.',
    whoBenefitedUrdu: 'ہمارے بزرگ پڑوسی جن کو باہر جانے میں دشواری تھی۔',
    whoBenefitedEn: 'Our elderly neighbor who had mobility difficulties.',
    whatILearnedUrdu: 'پڑوسیوں کا حق دین میں بہت بلند ہے، ان کی دعاؤں سے دل کو سکون اور کام میں برکت ملتی ہے۔',
    whatILearnedEn: 'Neighbors hold immense rights in ethical living; their sincere prayers bring deep inner contentment.',
    whatICanDoNextUrdu: 'ہر جمعہ ان کے دروازے پر جا کر خیریت پوچھنا معمول بناؤں گا۔',
    whatICanDoNextEn: 'Will make it a habit to check on them every Friday.',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    verifiedSourceUrdu: 'صحیح بخاری: ۶۰۱۴ | صحیح مسلم: ۲۶۲۴ ("جبریل مجھے پڑوسی کے متعلق وصیت کرتے رہے یہاں تک کہ مجھے لگا اسے وارث بنا دیں گے")',
    verifiedSourceEn: 'Sahih al-Bukhari: 6014 | Sahih Muslim: 2624 ("Gabriel continued to advise me about the neighbor until I thought he would make him an heir")'
  },
  {
    id: 'sug-share-knowledge',
    category: 'teaching_knowledge',
    categoryUrdu: 'علم و ہنر سکھانا',
    categoryEn: 'Teaching & Sharing Knowledge',
    categoryEmoji: '💡',
    titleUrdu: 'مفید علم یا معلومات کا تبادلہ',
    titleEn: 'Share useful knowledge',
    whatIDidUrdu: 'ساتھیوں کو انٹرنیٹ فراڈ اور آسان پیسے کے جھوٹے اشتہارات سے بچنے کے ۵ حفاظتی اصول سمجھائے۔',
    whatIDidEn: 'Shared 5 safety rules with peers on how to identify and avoid online phishing scams.',
    whoBenefitedUrdu: 'کلاس فیلوز اور محلے کے نوجوان جو آن لائن پیسے گنوانے سے محفوظ رہے۔',
    whoBenefitedEn: 'Peers and classmates who avoided falling into predatory financial scams.',
    whatILearnedUrdu: 'بروقت سچی رہنمائی کسی کا بڑا مالی و ذہنی نقصان بچا سکتی ہے، اور یہ امانت کا حق ہے۔',
    whatILearnedEn: 'Timely guidance protects peers from distress and fulfills the trust of beneficial knowledge.',
    whatICanDoNextUrdu: 'محفوظ آن لائن خریداری کا ۲ منٹ کا ایک مختصر معلوماتی نوٹ بنا کر شیئر کروں گا۔',
    whatICanDoNextEn: 'Will prepare a 2-minute checklist on safe internet browsing to share with friends.',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    verifiedSourceUrdu: 'صحیح مسلم: ۲۶۷۴ ("جس نے بھلائی کی طرف رہنمائی کی، اس کو اس پر عمل کرنے والے جتنا اجر ملے گا")',
    verifiedSourceEn: 'Sahih Muslim: 2674 ("Whoever guides someone to goodness will have a reward like the one who did it")'
  },
  {
    id: 'sug-support-person',
    category: 'helping_others',
    categoryUrdu: 'دوسروں کی مدد',
    categoryEn: 'Helping Others',
    categoryEmoji: '🤝',
    titleUrdu: 'کسی ضرورت مند کا سہارا بننا',
    titleEn: 'Support someone who needs help',
    whatIDidUrdu: 'ایک پریشان حال ساتھی کی بات خاموشی و ہمدردی سے سنی، اس کی عزتِ نفس کی حفاظت کی اور حوصلہ دیا۔',
    whatIDidEn: 'Listened empathetically to a struggling friend, preserved their confidentiality, and provided moral support.',
    whoBenefitedUrdu: 'میرا ساتھی جس کا دل ہلکا ہوا اور مایوسی دور ہوئی۔',
    whoBenefitedEn: 'My friend who found comfort and relief from distress.',
    whatILearnedUrdu: 'توجہ سے سننا اور تسلی دینا بھی صدقہ ہے، بعض اوقات صرف ساتھ دینا ہی سب سے بڑی مدد ہوتا ہے۔',
    whatILearnedEn: 'Empathetic listening and emotional support are profound acts of charity.',
    whatICanDoNextUrdu: 'اس کے مسئلے کے عملی حل کے لیے اس کی باوقار معاونت جاری رکھوں گا۔',
    whatICanDoNextEn: 'Will continue following up to help them achieve a practical resolution.',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    verifiedSourceUrdu: 'صحیح مسلم: ۲۶۹۹ ("اللہ بندے کی مدد میں رہتا ہے جب تک بندہ اپنے بھائی کی مدد میں رہے")',
    verifiedSourceEn: 'Sahih Muslim: 2699 ("Allah continues to assist His servant as long as the servant assists his brother")'
  },
  {
    id: 'sug-environment-clean',
    category: 'environment',
    categoryUrdu: 'ماحول و صفائی',
    categoryEn: 'Environment',
    categoryEmoji: '🌱',
    titleUrdu: 'ماحول و گلی کی صفائی کا چھوٹا عمل',
    titleEn: 'Small environmental or cleanliness action',
    whatIDidUrdu: 'گلی کے راستے سے شیشہ، نوکیلا پتھر اور کچرا ہٹا کر کوڑے دان میں ڈالا اور خشک پودے کو پانی دیا۔',
    whatIDidEn: 'Removed broken glass and obstacles from the walkway, disposed of litter, and watered a dry plant.',
    whoBenefitedUrdu: 'راستے سے گزرنے والے تمام لوگ، بچے اور آس پاس کا ماحول۔',
    whoBenefitedEn: 'Pedestrians, neighborhood children, and the natural environment.',
    whatILearnedUrdu: 'راستے سے تکلیف دہ چیز ہٹانا ایمان کا حصہ ہے اور اس سے معاشرے میں وقار پیدا ہوتا ہے۔',
    whatILearnedEn: 'Removing harm from the public path is a foundational branch of faith and civic responsibility.',
    whatICanDoNextUrdu: 'اپنے گھر اور دکان کے آگے روزانہ ۵ منٹ صفائی کا معمول قائم رکھوں گا۔',
    whatICanDoNextEn: 'Will keep a daily 5-minute routine of keeping the storefront/doorstep clean.',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    verifiedSourceUrdu: 'صحیح بخاری: ۲۴۷۳ | صحیح مسلم: ۳۵ ("ایمان کی ستر سے زیادہ شاخیں ہیں... اور سب سے نچلی شاخ راستے سے تکلیف دہ چیز ہٹانا ہے")',
    verifiedSourceEn: 'Sahih al-Bukhari: 2473 | Sahih Muslim: 35 ("Faith has seventy-odd branches... the simplest of which is removing harm from the path")'
  },
  {
    id: 'sug-ethical-work',
    category: 'ethical_work',
    categoryUrdu: 'دیانتدارانہ کام',
    categoryEn: 'Ethical Work',
    categoryEmoji: '💼',
    titleUrdu: 'کام اور لین دین میں دیانت داری',
    titleEn: 'Honesty and integrity in work & trade',
    whatIDidUrdu: 'ایک گاہک یا ساتھی کے ساتھ لین دین میں نفع و نقصان کی پوری سچائی واضح کی اور عیب نہیں چھپایا۔',
    whatIDidEn: 'Disclosed all product details honestly to a buyer/partner without hiding any defect or misrepresenting quality.',
    whoBenefitedUrdu: 'گاہک، کاروبار کا وقار اور میری اپنی حلال کمائی۔',
    whoBenefitedEn: 'The client, business reputation, and pure halal earning.',
    whatILearnedUrdu: 'سچائی میں برکت ہے اور جھوٹ بول کر حاصل کیا گیا منافع برکت سے محروم کر دیتا ہے۔',
    whatILearnedEn: 'Truthfulness brings sustained divine blessing; deceptive gain extinguishes long-term prosperity.',
    whatICanDoNextUrdu: 'اپنے تمام کاروباری وعدوں اور وقت کی پابندی پر سختی سے عمل کروں گا۔',
    whatICanDoNextEn: 'Will honor all delivery commitments and time promises with precision.',
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    verifiedSourceUrdu: 'سنن ترمذی: ۱۲۰۹ (صحیح) ("سچا اور امانت دار تاجر انبیاء، صدیقین اور شہداء کے ساتھ ہوگا")',
    verifiedSourceEn: 'Sunan al-Tirmidhi: 1209 (Authentic) ("The truthful and trustworthy merchant is with the prophets, the truthful, and the martyrs")'
  }
];

export function getPersonalImpactRecords(): PersonalImpactRecord[] {
  try {
    const saved = localStorage.getItem('seekho_my_personal_impact_records');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // fallback
  }

  // Initial starter sample
  return [
    {
      id: 'init-impact-1',
      category: 'family',
      categoryUrdu: 'خاندان',
      categoryEn: 'Family',
      categoryEmoji: '❤️',
      titleUrdu: 'والدین کی خدمت اور خیر خیریت دریافت کرنا',
      titleEn: 'Family Care & Respect',
      whatIDidUrdu: 'والدین کے پاس بیٹھ کر ان کی ضروریات پوچھیں اور گھر کا سودا لا دیا۔',
      whatIDidEn: 'Sat with parents, listened to their needs, and ran an errand for groceries.',
      whoBenefitedUrdu: 'والدین اور اہلِ خانہ۔',
      whoBenefitedEn: 'Parents and family members.',
      whatILearnedUrdu: 'والدین کے چہرے کی مسکراہٹ سے دل کو جو سکون ملتا ہے وہ کسی اور چیز میں نہیں۔',
      whatILearnedEn: 'The peaceful satisfaction from parents’ smiles is unmatched.',
      whatICanDoNextUrdu: 'روزانہ کم از کم ۱۵ منٹ فون کے بغیر ان کے پاس بیٹھوں گا۔',
      whatICanDoNextEn: 'Will spend 15 screen-free minutes daily in their company.',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
      verifiedSourceUrdu: 'سورۃ الاسراء: ۲۳',
      verifiedSourceEn: 'Surah Al-Isra 17:23'
    }
  ];
}

export function savePersonalImpactRecord(record: PersonalImpactRecord): PersonalImpactRecord[] {
  const current = getPersonalImpactRecords();
  const updated = [record, ...current.filter(r => r.id !== record.id)];
  try {
    localStorage.setItem('seekho_my_personal_impact_records', JSON.stringify(updated));
  } catch {
    // ignore
  }
  return updated;
}

