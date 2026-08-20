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
  // Priority rule: Focus on the lowest completed foundational area that offers immediate, high leverage
  let nextBestStep: NextBestStepPriority;

  if (completedIslamic.length === 0) {
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
  } else if (completedPractices.length === 0) {
    nextBestStep = {
      areaId: 'character_islamic',
      areaTitleUrdu: 'سوچیں اور محفوظ فیصلہ کریں',
      areaTitleEn: 'Decision & Mindset Practice',
      titleUrdu: 'آج کا بہترین قدم: حقیقی زندگی کے ایک فیصلے کی سمیلیشن مکمل کریں',
      titleEn: 'Next Best Step: Practice 1 Real-Life Decision Scenario',
      descriptionUrdu: 'غصے، منفی دباؤ یا لالچ سے بچنے کے 10 سمیلیٹرز میں سے کسی ایک کا انتخاب کر کے 3 راستوں کے نتائج دیکھیں۔',
      descriptionEn: 'Select any of the 10 Real Life Practice scenarios, test 3 choices, and observe consequence breakdowns.',
      estimatedMinutes: 5,
      timeLabelUrdu: '۵ منٹ',
      timeLabelEn: '5 mins',
      buttonLabelUrdu: 'عملی مشق شروع کریں (5 منٹ)',
      buttonLabelEn: 'Start Practice (5 min)',
      aiPromptUrdu: 'مجھے غصے یا منفی دباؤ کے وقت درست فیصلہ کرنے کے لیے 5-Step ماڈل کی رہنمائی دیں۔',
      aiPromptEn: 'Mentor me on using the 5-step decision framework to handle high-pressure moments.',
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
