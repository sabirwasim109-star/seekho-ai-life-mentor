import { UserProfile, Language } from '../types';

export type LifeRoadmapAreaId = 
  | 'skills_career'
  | 'money_finance'
  | 'character_islamic'
  | 'health_discipline'
  | 'family_social'
  | 'community_service';

export interface LifeRoadmapArea {
  id: LifeRoadmapAreaId;
  titleUrdu: string;
  titleEn: string;
  iconName: string;
  badgeUrdu: string;
  badgeEn: string;
  themeColor: string;
  
  // 1. Current progress
  progressPercentage: number;
  progressLevelUrdu: string;
  progressLevelEn: string;
  
  // 2. One thing already completed
  completedUrdu: string;
  completedEn: string;
  
  // 3. One area that needs improvement
  needsImprovementUrdu: string;
  needsImprovementEn: string;
  
  // 4. One recommended next action
  nextActionUrdu: string;
  nextActionEn: string;
  nextActionTimeUrdu: string;
  nextActionTimeEn: string;
  actionPromptUrdu: string;
  actionPromptEn: string;
  actionType: 'skills' | 'money' | 'islamic' | 'health' | 'family' | 'community';
}

export interface NextBestStepPriority {
  areaId: LifeRoadmapAreaId;
  areaTitleUrdu: string;
  areaTitleEn: string;
  titleUrdu: string;
  titleEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  estimatedMinutes: number;
  timeLabelUrdu: string;
  timeLabelEn: string;
  buttonLabelUrdu: string;
  buttonLabelEn: string;
  aiPromptUrdu: string;
  aiPromptEn: string;
  actionType: 'skills' | 'money' | 'islamic' | 'health' | 'family' | 'community';
}

export interface LifeRoadmapData {
  nextBestStep: NextBestStepPriority;
  areas: LifeRoadmapArea[];
  stats: {
    completedLessonsCount: number;
    completedMissionsCount: number;
    completedGoodDeedsCount: number;
    completedPracticeScenariosCount: number;
    streakDays: number;
    growthPoints: number;
  };
}

export function generateLifeRoadmap(userProfile: UserProfile): LifeRoadmapData {
  const completedSkills = userProfile.completedLessonIds || [];
  const completedMissions = userProfile.completedMissionIds || [];
  const completedIslamic = userProfile.completedIslamicLessonIds || [];
  const completedGoodDeeds = userProfile.completedGoodDeedIds || [];
  const completedLifeSkills = userProfile.completedLifeSkillLessonIds || [];
  const completedPractices = userProfile.completedPracticeScenarioIds || [];
  const streak = userProfile.streakDays || 1;
  const points = userProfile.points || 120;
  const reflectionsCount = Object.keys(userProfile.islamicReflections || {}).length + 
    Object.keys(userProfile.lifeSkillReflections || {}).length +
    Object.keys(userProfile.missionReflections || {}).length;

  // 1. Skills & Career (ہنر اور روزگار)
  const skillsCount = completedSkills.length + (userProfile.completedProjectIds?.length || 0);
  const skillsProgress = Math.min(100, Math.max(25, skillsCount * 25 + 25));
  const skillsArea: LifeRoadmapArea = {
    id: 'skills_career',
    titleUrdu: 'ہنر اور روزگار (Skills & Career)',
    titleEn: 'Skills & Career',
    iconName: 'Briefcase',
    badgeUrdu: 'ڈیجیٹل ہنر و کام',
    badgeEn: 'Digital & Work Craft',
    themeColor: 'blue',
    progressPercentage: skillsProgress,
    progressLevelUrdu: skillsProgress > 70 ? 'پیش رفت پر' : skillsProgress > 40 ? 'بنیاد مضبوط' : 'شروع کا مرحلہ',
    progressLevelEn: skillsProgress > 70 ? 'Progressing Well' : skillsProgress > 40 ? 'Foundational' : 'Getting Started',
    completedUrdu: skillsCount > 0 
      ? `آپ نے ${skillsCount} عملی اسباق اور سیکھنے کے بنیادی مراحل مکمل کیے ہیں۔`
      : 'بنیادی اسکلز کا جائزہ اور سیکھنے کے اہداف کا تعین۔',
    completedEn: skillsCount > 0
      ? `Completed ${skillsCount} hands-on lessons and core learning modules.`
      : 'Initial skill assessment and learning goal setup completed.',
    needsImprovementUrdu: 'سیکھے گئے ہنر سے 1 مکمل پراجیکٹ تیار کرنا تاکہ عملی مہارت اور خود اعتمادی پیدا ہو۔',
    needsImprovementEn: 'Building one complete practical portfolio sample to prove competence.',
    nextActionUrdu: 'کینوا، AI یا اپنی منتخب اسکل کا اگلا 15 منٹ کا سبق مکمل کریں۔',
    nextActionEn: 'Complete the next 15-minute lesson in your selected skill path.',
    nextActionTimeUrdu: '۱۵ منٹ',
    nextActionTimeEn: '15 mins',
    actionPromptUrdu: 'میری Skills & Career کے متعلق بتائیں کہ میں اپنی موجودہ اسکل سے پہلا چھوٹا پروجیکٹ کیسے شروع کروں؟',
    actionPromptEn: 'Guide me on how to build my first small practical project in my chosen skill.',
    actionType: 'skills'
  };

  // 2. Money & Financial Knowledge (مالیاتی شعور اور حلال کمائی)
  const moneyPracticed = completedLifeSkills.some(id => id.includes('money') || id.includes('business')) ||
    completedPractices.some(id => id.includes('scam') || id.includes('cheat'));
  const moneyProgress = Math.min(100, Math.max(20, (moneyPracticed ? 45 : 25) + completedLifeSkills.length * 15));
  const moneyArea: LifeRoadmapArea = {
    id: 'money_finance',
    titleUrdu: 'مالیاتی شعور اور حلال کمائی (Money & Finance)',
    titleEn: 'Money & Financial Knowledge',
    iconName: 'DollarSign',
    badgeUrdu: 'بجٹ و حلال رزق',
    badgeEn: 'Budget & Halal Earning',
    themeColor: 'amber',
    progressPercentage: moneyProgress,
    progressLevelUrdu: moneyProgress > 70 ? 'پختہ شعور' : moneyProgress > 40 ? 'عملی عادت' : 'ابتدائی آگاہی',
    progressLevelEn: moneyProgress > 70 ? 'Sound Mindset' : moneyProgress > 40 ? 'Habit Forming' : 'Awareness',
    completedUrdu: moneyPracticed
      ? 'آن لائن فراڈ اور آسان پیسے کے جھانسے سے بچاؤ کا شعور اور حلال روزگار کا بنیادی فہم۔'
      : 'حلال رزق اور غیر ضروری خرچ سے بچنے کی بنیادی اہمیت کا ادراک۔',
    completedEn: moneyPracticed
      ? 'Awareness of scam traps and grounded understanding of halal earnings.'
      : 'Core appreciation of halal earning and mindful expenditure.',
    needsImprovementUrdu: 'روزانہ کے چھوٹے چھوٹے اخراجات کو لکھ کر نوٹ کرنے اور 10 فیصد بچت کی مستقل عادت۔',
    needsImprovementEn: 'Daily recording of pocket expenses and developing a 10% savings discipline.',
    nextActionUrdu: 'آج کے تمام اخراجات ایک کاغذ یا موبائل پر لکھیں اور 1 غیر ضروری خرچ ختم کریں۔',
    nextActionEn: 'Write down today’s expenses and eliminate one unnecessary impulse purchase.',
    nextActionTimeUrdu: '۱۰ منٹ',
    nextActionTimeEn: '10 mins',
    actionPromptUrdu: 'مجھے مالیاتی شعور اور بجٹ بنانے کے متعلق 5-Step طریقہ کار کے تحت رہنمائی فرمائیں۔',
    actionPromptEn: 'Guide me on simple personal budgeting and financial discipline with practical steps.',
    actionType: 'money'
  };

  // 3. Character & Islamic Development (اخلاق اور اسلامی کردار)
  const islamicCount = completedIslamic.length + reflectionsCount + completedPractices.length;
  const islamicProgress = Math.min(100, Math.max(35, islamicCount * 15 + 30));
  const characterArea: LifeRoadmapArea = {
    id: 'character_islamic',
    titleUrdu: 'اخلاق اور اسلامی کردار (Character & Islamic)',
    titleEn: 'Character & Islamic Development',
    iconName: 'ShieldCheck',
    badgeUrdu: 'سچائی و خود احتسابی',
    badgeEn: 'Truth & Self-Reflection',
    themeColor: 'emerald',
    progressPercentage: islamicProgress,
    progressLevelUrdu: islamicProgress > 75 ? 'بہترین تسلسل' : islamicProgress > 45 ? 'فعال پیشرفت' : 'بنیادی اخلاق',
    progressLevelEn: islamicProgress > 75 ? 'Consistent' : islamicProgress > 45 ? 'Active Practice' : 'Foundational',
    completedUrdu: completedIslamic.length > 0
      ? `قرآن و حدیث کے ${completedIslamic.length} اسباق اور سچائی و دیانت کے اخلاقی تقاضوں پر غور۔`
      : 'سچائی، غصے پر قابو اور نیت کی صفائی کی بنیادی اخلاقی تفہیم۔',
    completedEn: completedIslamic.length > 0
      ? `Completed ${completedIslamic.length} Quran & Hadith guidance lessons with self-reflection.`
      : 'Reflected on truthfulness, self-restraint, and sincere intention.',
    needsImprovementUrdu: 'غصے، اختلاف یا دباؤ کے وقت 30 سیکنڈ کا وقفہ لے کر صبر و معافی کو ترجیح دینا۔',
    needsImprovementEn: 'Applying the 30-second pause to choose patience and forgiveness during friction.',
    nextActionUrdu: 'قرآن و حدیث کے آج کے سبق کا مطالعہ کریں اور خود احتسابی کی ایک سطر لکھیں۔',
    nextActionEn: 'Read today’s authentic guidance lesson and record one honest self-reflection.',
    nextActionTimeUrdu: '۱۰ منٹ',
    nextActionTimeEn: '10 mins',
    actionPromptUrdu: 'مجھے اخلاق کی صفائی، غصے کے علاج اور سچائی پر استقامت کے لیے مستند حدیث کی روشنی میں رہنمائی دیں۔',
    actionPromptEn: 'Mentor me on strengthening truthfulness, patience, and character in daily life.',
    actionType: 'islamic'
  };

  // 4. Health & Daily Discipline (صحت اور روزمرہ نظم و ضبط)
  const healthProgress = Math.min(100, Math.max(30, streak * 10 + (completedMissions.length > 0 ? 25 : 15)));
  const healthArea: LifeRoadmapArea = {
    id: 'health_discipline',
    titleUrdu: 'صحت اور روزمرہ نظم و ضبط (Health & Discipline)',
    titleEn: 'Health & Daily Discipline',
    iconName: 'Activity',
    badgeUrdu: 'تسلسل و وقت کی قدر',
    badgeEn: 'Routine & Time Value',
    themeColor: 'teal',
    progressPercentage: healthProgress,
    progressLevelUrdu: streak >= 3 ? 'مستقل مزاج' : 'عادت سازی کا مرحلہ',
    progressLevelEn: streak >= 3 ? 'Disciplined' : 'Habit Building',
    completedUrdu: `${streak} دن کا فعال تسلسل اور سیکھنے کے وقت کا روزانہ چیک اِن۔`,
    completedEn: `${streak}-day active consistency and daily learning routine check-in.`,
    needsImprovementUrdu: 'بے مقصد موبائل اسکرولنگ اور رات دیر تک جاگنے کی عادت پر قابو پانا۔',
    needsImprovementEn: 'Eliminating mindless phone scrolling and establishing punctual sleep hours.',
    nextActionUrdu: 'فون کو 30 منٹ دور رکھ کر 15 منٹ کا واک یا گہرے سانس لینے کا عمل کریں۔',
    nextActionEn: 'Put the phone aside for 30 minutes and do a 15-minute walk or breathing reset.',
    nextActionTimeUrdu: '۱۵ منٹ',
    nextActionTimeEn: '15 mins',
    actionPromptUrdu: 'مجھے روزمرہ نظم و ضبط، موبائل کی لت سے بچاؤ اور وقت کی قدر کا عملی طریقہ سکھائیں۔',
    actionPromptEn: 'Give me practical techniques for daily time discipline and reducing screen distractions.',
    actionType: 'health'
  };

  // 5. Family & Social Responsibility (خاندان اور سماجی ذمہ داری)
  const familyPracticed = completedPractices.some(id => id.includes('parent') || id.includes('peer')) ||
    completedGoodDeeds.length > 0;
  const familyProgress = Math.min(100, Math.max(25, (familyPracticed ? 45 : 20) + completedGoodDeeds.length * 15));
  const familyArea: LifeRoadmapArea = {
    id: 'family_social',
    titleUrdu: 'خاندان اور سماجی ذمہ داری (Family & Social)',
    titleEn: 'Family & Social Responsibility',
    iconName: 'HeartHandshake',
    badgeUrdu: 'والدین کا ادب و صلہ رحمی',
    badgeEn: 'Parents Respect & Care',
    themeColor: 'rose',
    progressPercentage: familyProgress,
    progressLevelUrdu: familyProgress > 60 ? 'خوش اسلوب' : 'پیش رفت پر',
    progressLevelEn: familyProgress > 60 ? 'Attentive' : 'Developing',
    completedUrdu: completedGoodDeeds.length > 0
      ? 'والدین اور اہل خانہ کے لیے نیکی و احترام کے عملی اقدامات کی شروعات۔'
      : 'والدین کے احترام اور گھریلو ذمہ داریوں کے احساس کی تفہیم۔',
    completedEn: completedGoodDeeds.length > 0
      ? 'Initiated practical acts of service and respect for parents and family.'
      : 'Reflected on family duties and compassionate communication with elders.',
    needsImprovementUrdu: 'گھر میں والدین یا اہل خانہ کی بات کو تحمل سے سننا اور تلخ کلامی سے قطعی پرہیز۔',
    needsImprovementEn: 'Listening patiently to family members and eliminating sharp/harsh reactions.',
    nextActionUrdu: 'آج والدین یا گھر کے کسی فرد کی بغیر کہے ایک خاص عملی مدد یا خدمت کریں۔',
    nextActionEn: 'Perform one unprompted act of kindness or assistance for a family member today.',
    nextActionTimeUrdu: '۱۰ منٹ',
    nextActionTimeEn: '10 mins',
    actionPromptUrdu: 'والدین کے ساتھ ادب، حسنِ سلوک اور اختلاف رائے میں حکمت اختیار کرنے کی رہنمائی فرمائیں۔',
    actionPromptEn: 'Guide me on communicating with parents with maximum respect, wisdom, and patience.',
    actionType: 'family'
  };

  // 6. Community Service (خدمتِ خلق اور معاشرتی بھلائی)
  const communityCount = (userProfile.completedCommunityActionIds?.length || 0) + 
    completedPractices.filter(id => id.includes('bully') || id.includes('peer')).length;
  const communityProgress = Math.min(100, Math.max(20, communityCount * 25 + completedGoodDeeds.length * 10 + 20));
  const communityArea: LifeRoadmapArea = {
    id: 'community_service',
    titleUrdu: 'خدمتِ خلق اور معاشرتی کردار (Community Service)',
    titleEn: 'Community Service',
    iconName: 'Users',
    badgeUrdu: 'معاشرے کی بہتری',
    badgeEn: 'Community Welfare',
    themeColor: 'purple',
    progressPercentage: communityProgress,
    progressLevelUrdu: communityProgress > 60 ? 'فعال خادم' : 'آغاز',
    progressLevelEn: communityProgress > 60 ? 'Active Contributor' : 'Starting Out',
    completedUrdu: communityCount > 0
      ? 'محفل میں کمزور کا دفاع اور معاشرتی نیکی میں عملی شراکت۔'
      : 'راستے سے تکلیف دہ چیز ہٹانے اور نفع بخش انسان بننے کی سوچ۔',
    completedEn: communityCount > 0
      ? 'Protected a peer’s dignity and participated in community welfare.'
      : 'Appreciated the duty of being useful and removing harm from public paths.',
    needsImprovementUrdu: 'اپنے سیکھے گئے علم یا ہنر سے محلے کے کسی ضرورت مند کو فائدہ پہنچانا۔',
    needsImprovementEn: 'Sharing your knowledge and digital skills to uplift someone in your local community.',
    nextActionUrdu: 'اپنے محلے یا دوستوں میں سے کسی کو مفید بات یا ہنر سکھانے میں مدد کریں۔',
    nextActionEn: 'Help a friend or neighbor by teaching a useful skill or offering practical support.',
    nextActionTimeUrdu: '۱۵ منٹ',
    nextActionTimeEn: '15 mins',
    actionPromptUrdu: 'مجھے اپنے علاقے اور محلے میں خدمتِ خلق کے آسان اور باوقار طریقے سکھائیں جن سے لوگوں کا بھلا ہو۔',
    actionPromptEn: 'Guide me on simple, dignified ways to serve my local community and help others.',
    actionType: 'community'
  };

  const areas: LifeRoadmapArea[] = [
    skillsArea,
    moneyArea,
    characterArea,
    healthArea,
    familyArea,
    communityArea
  ];

  // Determine the Single "Next Best Step" Priority at top
  // Priority rule: Respect the user's primary learning goal first, then foundational priorities
  let nextBestStep: NextBestStepPriority;

  const primaryGoal = userProfile.learningGoals?.[0] || userProfile.interests?.[0] || '';
  const isCommunityGoal = primaryGoal.includes('community') || primaryGoal.includes('برادری') || primaryGoal.includes('خدمت') || primaryGoal.includes('فلاح');
  const isBusinessGoal = primaryGoal.includes('business') || primaryGoal.includes('کاروبار') || primaryGoal.includes('فری لانسنگ') || primaryGoal.includes('freelanc');
  const isFinanceGoal = primaryGoal.includes('finance') || primaryGoal.includes('مالیات') || primaryGoal.includes('بچت') || primaryGoal.includes('money');
  const isLeadershipGoal = primaryGoal.includes('leadership') || primaryGoal.includes('قیادت') || primaryGoal.includes('رہنمائی');
  const isCommunicationGoal = primaryGoal.includes('comm') || primaryGoal.includes('مواصلات') || primaryGoal.includes('گفتگو');
  const isFamilyGoal = primaryGoal.includes('family') || primaryGoal.includes('خاندان') || primaryGoal.includes('گھریلو');
  const isGrowthGoal = primaryGoal.includes('growth') || primaryGoal.includes('ذاتی') || primaryGoal.includes('نظم');

  if (isCommunityGoal) {
    nextBestStep = {
      areaId: 'community_service',
      areaTitleUrdu: 'خدمتِ خلق اور برادری کی فلاح',
      areaTitleEn: 'Community Service & Social Uplift',
      titleUrdu: 'آج کا بہترین قدم: کمیونٹی کے مسئلے کو سمجھنا اور خدمت کا جذبہ',
      titleEn: 'Next Best Step: Understanding Community Needs & Spirit of Service',
      descriptionUrdu: 'اپنے محلے اور برادری کے بنیادی مسائل کو سمجھیں اور خدمتِ خلق کے عملی اور باوقار طریقوں کا پہلا سبق مکمل کریں۔',
      descriptionEn: 'Understand core community needs and complete Lesson 1 on dignified service and collective uplift.',
      estimatedMinutes: 15,
      timeLabelUrdu: '۱۵ منٹ',
      timeLabelEn: '15 mins',
      buttonLabelUrdu: 'سبق شروع کریں (15 منٹ)',
      buttonLabelEn: 'Start Lesson (15 min)',
      aiPromptUrdu: 'السلام علیکم! مجھے بتائیں کہ میں اپنی برادری یا محلے کے مسائل سمجھ کر خدمتِ خلق کا پہلا عملی قدم کیسے اٹھاؤں؟',
      aiPromptEn: 'Guide me on identifying local community needs and taking my first dignified step in social service.',
      actionType: 'community'
    };
  } else if (isBusinessGoal) {
    nextBestStep = {
      areaId: 'money_finance',
      areaTitleUrdu: 'کاروبار اور فری لانسنگ',
      areaTitleEn: 'Business & Freelancing',
      titleUrdu: 'آج کا بہترین قدم: منافع بخش کاروباری آئیڈیا اور مارکیٹ کی ضرورت',
      titleEn: 'Next Best Step: Profitable Business Ideas & Market Validation',
      descriptionUrdu: 'چھوٹے سرمائے سے نفع بخش کاروبار کا انتخاب کرنے اور گاہک کی حقیقی ضرورت جانچنے کا بنیادی سبق حاصل کریں۔',
      descriptionEn: 'Learn how to identify profitable local/digital business ideas and validate customer demand.',
      estimatedMinutes: 15,
      timeLabelUrdu: '۱۵ منٹ',
      timeLabelEn: '15 mins',
      buttonLabelUrdu: 'سبق شروع کریں (15 منٹ)',
      buttonLabelEn: 'Start Lesson (15 min)',
      aiPromptUrdu: 'مجھے چھوٹے سرمائے یا بغیر سرمائے کے حلال اور نفع بخش کاروبار شروع کرنے کے بنیادی مراحل بتائیں۔',
      aiPromptEn: 'Guide me on validating a small-capital halal business or freelancing idea effectively.',
      actionType: 'money'
    };
  } else if (isFinanceGoal) {
    nextBestStep = {
      areaId: 'money_finance',
      areaTitleUrdu: 'مالیاتی شعور اور حلال کمائی',
      areaTitleEn: 'Money & Financial Knowledge',
      titleUrdu: 'آج کا بہترین قدم: آمدن، بجٹ اور 10 فیصد بچت کا اصول',
      titleEn: 'Next Best Step: Master the 10% Savings & Halal Budget Habit',
      descriptionUrdu: 'اپنے روزمرہ اخراجات کو لکھیں، غیر ضروری خرچ کم کریں اور باقاعدہ بچت کا مضبوط معمول بنائیں۔',
      descriptionEn: 'Track your daily expenses in writing and allocate 10% toward disciplined savings for future independence.',
      estimatedMinutes: 10,
      timeLabelUrdu: '۱۰ منٹ',
      timeLabelEn: '10 mins',
      buttonLabelUrdu: 'بجٹ کا سبق پڑھیں (10 منٹ)',
      buttonLabelEn: 'Review Budget Skill (10 min)',
      aiPromptUrdu: 'السلام علیکم! مجھے اپنی موجودہ آمدنی سے 10 فیصد بچت اور فضول خرچی ختم کرنے کا عملی نسخہ بتائیں۔',
      aiPromptEn: 'Guide me on managing personal expenses wisely and building an unbreakable 10% savings habit.',
      actionType: 'money'
    };
  } else if (isLeadershipGoal) {
    nextBestStep = {
      areaId: 'skills_career',
      areaTitleUrdu: 'کردار اور قیادت',
      areaTitleEn: 'Character & Leadership',
      titleUrdu: 'آج کا بہترین قدم: بااثر اور خدمت گار لیڈر کی بنیادی خوبیاں',
      titleEn: 'Next Best Step: Core Qualities of a Servant Leader',
      descriptionUrdu: 'لیڈرشپ کی اصل بنیاد دوسروں کو راستہ دکھانا، ذمہ داری لینا اور عدل و اعتماد قائم کرنا ہے۔',
      descriptionEn: 'Learn how true leadership stems from responsibility, trust-building, and serving others.',
      estimatedMinutes: 15,
      timeLabelUrdu: '۱۵ منٹ',
      timeLabelEn: '15 mins',
      buttonLabelUrdu: 'سبق شروع کریں (15 منٹ)',
      buttonLabelEn: 'Start Lesson (15 min)',
      aiPromptUrdu: 'مجھے اپنے کام، گھر یا محلے میں ایک ذمہ دار اور بااعتماد لیڈر بننے کے بنیادی اصول سکھائیں۔',
      aiPromptEn: 'Mentor me on developing practical leadership qualities and building team trust.',
      actionType: 'skills'
    };
  } else if (isCommunicationGoal) {
    nextBestStep = {
      areaId: 'skills_career',
      areaTitleUrdu: 'مواصلات اور موثر گفتگو',
      areaTitleEn: 'Communication & Interpersonal Skills',
      titleUrdu: 'آج کا بہترین قدم: دھیان سے سننا (Active Listening) اور پرسکون جواب',
      titleEn: 'Next Best Step: Active Listening & Calm Articulation',
      descriptionUrdu: 'دوسروں کی بات بغیر کاٹے غور سے سننے اور احترام کے ساتھ اپنی رائے پیش کرنے کی مشق کریں۔',
      descriptionEn: 'Practice active listening and delivering calm, articulate responses in daily conversations.',
      estimatedMinutes: 15,
      timeLabelUrdu: '۱۵ منٹ',
      timeLabelEn: '15 mins',
      buttonLabelUrdu: 'سبق شروع کریں (15 منٹ)',
      buttonLabelEn: 'Start Lesson (15 min)',
      aiPromptUrdu: 'مجھے روزمرہ زندگی اور کام میں موثر انداز میں بات چیت اور ایکٹو لسننگ کی تکنیک سکھائیں۔',
      aiPromptEn: 'Guide me on mastering active listening and clear communication techniques.',
      actionType: 'skills'
    };
  } else if (isFamilyGoal) {
    nextBestStep = {
      areaId: 'family_social',
      areaTitleUrdu: 'خاندانی اور سماجی تعلقات',
      areaTitleEn: 'Family & Social Relations',
      titleUrdu: 'آج کا بہترین قدم: والدین، شریکِ حیات اور اہل خانہ کا احترام',
      titleEn: 'Next Best Step: Respect & Harmony in Family Relations',
      descriptionUrdu: 'گھر کے افراد کی قربانیوں کا اعتراف، نرم لہجہ اور گھریلو ذمہ داریوں میں ہاتھ بٹانے کا ہنر سیکھیں۔',
      descriptionEn: 'Learn practical principles of gentle communication, domestic cooperation, and family harmony.',
      estimatedMinutes: 15,
      timeLabelUrdu: '۱۵ منٹ',
      timeLabelEn: '15 mins',
      buttonLabelUrdu: 'سبق شروع کریں (15 منٹ)',
      buttonLabelEn: 'Start Lesson (15 min)',
      aiPromptUrdu: 'مجھے گھر اور خاندان میں محبت اور احترام بڑھانے کے لیے عملی تجاویز دیں۔',
      aiPromptEn: 'Suggest practical actions to strengthen family bonding and resolve small domestic tensions calmly.',
      actionType: 'family'
    };
  } else if (isGrowthGoal) {
    nextBestStep = {
      areaId: 'health_discipline',
      areaTitleUrdu: 'ذاتی ترقی اور خود اعتمادی',
      areaTitleEn: 'Personal Growth & Confidence',
      titleUrdu: 'آج کا بہترین قدم: صبح کے اوقات اور روزانہ کے معمول کا نظم و ضبط',
      titleEn: 'Next Best Step: Morning Routine & Daily Self-Discipline',
      descriptionUrdu: 'وقت کے ضیاع سے بچنے، مستقل مزاجی پیدا کرنے اور ذاتی اہداف حاصل کرنے کا عملی سبق مکمل کریں۔',
      descriptionEn: 'Master morning focus, habit consistency, and structured daily routines for personal growth.',
      estimatedMinutes: 15,
      timeLabelUrdu: '۱۵ منٹ',
      timeLabelEn: '15 mins',
      buttonLabelUrdu: 'سبق شروع کریں (15 منٹ)',
      buttonLabelEn: 'Start Lesson (15 min)',
      aiPromptUrdu: 'مجھے روزانہ وقت کی پابندی اور مستقل مزاجی برقرار رکھنے کا عملی فریم ورک بتائیں۔',
      aiPromptEn: 'Guide me on building daily self-discipline and an effective morning routine.',
      actionType: 'health'
    };
  } else if (completedIslamic.length === 0) {
    nextBestStep = {
      areaId: 'character_islamic',
      areaTitleUrdu: 'اخلاق اور اسلامی کردار',
      areaTitleEn: 'Character & Islamic Development',
      titleUrdu: 'آج کا بہترین قدم: قرآن و حدیث کی روشنی میں سچائی اور نیت کا سبق',
      titleEn: 'Next Best Step: Study Today’s Authentic Islamic Guidance & Reflection',
      descriptionUrdu: 'آج کے قرآن و حدیث رہنمائی کے کارڈ کو پڑھیں اور اپنی روزمرہ نیت کو پاکیزہ کرنے کا ایک چھوٹا عہد لکھیں۔',
      descriptionEn: 'Read today’s Quran & Hadith guidance card and record one sincere reflection for ethical alignment.',
      estimatedMinutes: 10,
      timeLabelUrdu: '۱۰ منٹ',
      timeLabelEn: '10 mins',
      buttonLabelUrdu: 'رہنمائی کارڈ کھولیں (10 منٹ)',
      buttonLabelEn: 'Open Guidance Card (10 min)',
      aiPromptUrdu: 'السلام علیکم! مجھے آج کے دن کی شروعات کے لیے سچائی، اخلاص اور نیت کے متعلق ایک مختصر اور موثر رہنمائی فرمائیں۔',
      aiPromptEn: 'Guide me on setting a sincere daily intention and practicing truthfulness in all actions today.',
      actionType: 'islamic'
    };
  } else if (completedSkills.length === 0) {
    nextBestStep = {
      areaId: 'skills_career',
      areaTitleUrdu: 'ہنر اور روزگار',
      areaTitleEn: 'Skills & Career',
      titleUrdu: 'آج کا بہترین قدم: منتخب ہنر کا پہلا عملی سبق مکمل کریں',
      titleEn: 'Next Best Step: Complete Lesson 1 of Your Chosen Craft',
      descriptionUrdu: 'کینوا، ڈیجیٹل اسکلز یا موبائل کے استعمال کا ایک مکمل مختصر سبق پڑھیں اور عملی مشق آزمائیں۔',
      descriptionEn: 'Complete one 15-minute hands-on lesson in Canva, AI tools, or Digital Literacy to gain concrete momentum.',
      estimatedMinutes: 15,
      timeLabelUrdu: '۱۵ منٹ',
      timeLabelEn: '15 mins',
      buttonLabelUrdu: 'سبق شروع کریں (15 منٹ)',
      buttonLabelEn: 'Start Lesson (15 min)',
      aiPromptUrdu: 'مجھے بتائیں کہ میں اپنی پہلی ڈیجیٹل اسکل کی مشق 15 منٹ میں کیسے شروع کروں؟',
      aiPromptEn: 'How should I start my first 15-minute practical skill exercise today?',
      actionType: 'skills'
    };
  } else {
    nextBestStep = {
      areaId: 'money_finance',
      areaTitleUrdu: 'مالیاتی شعور اور حلال کمائی',
      areaTitleEn: 'Money & Financial Knowledge',
      titleUrdu: 'آج کا بہترین قدم: آمدن، بجٹ اور 10 فیصد بچت کا اصول',
      titleEn: 'Next Best Step: Master the 10% Savings & Halal Budget Habit',
      descriptionUrdu: 'اپنے آج کے تمام اخراجات کو لکھیں اور کسی ایک فضول خرچ کو بچا کر حلال رزق میں برکت کا معمول بنائیں۔',
      descriptionEn: 'Track your daily expenses in writing and allocate 10% toward disciplined savings for future independence.',
      estimatedMinutes: 10,
      timeLabelUrdu: '۱۰ منٹ',
      timeLabelEn: '10 mins',
      buttonLabelUrdu: 'بجٹ کا سبق پڑھیں (10 منٹ)',
      buttonLabelEn: 'Review Budget Skill (10 min)',
      aiPromptUrdu: 'السلام علیکم! مجھے اپنی موجودہ آمدنی یا پاکٹ منی سے 10 فیصد بچت اور فضول خرچی ختم کرنے کا عملی نسخہ بتائیں۔',
      aiPromptEn: 'Guide me on managing personal expenses wisely and building an unbreakable 10% savings habit.',
      actionType: 'money'
    };
  }

  return {
    nextBestStep,
    areas,
    stats: {
      completedLessonsCount: completedSkills.length,
      completedMissionsCount: completedMissions.length,
      completedGoodDeedsCount: completedGoodDeeds.length,
      completedPracticeScenariosCount: completedPractices.length,
      streakDays: streak,
      growthPoints: points,
    }
  };
}
