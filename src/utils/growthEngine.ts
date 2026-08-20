import {
  UserProfile,
  GrowthAreaId,
  GrowthAreaInfo,
  GrowthRecommendation,
  DailyGrowthPlanItem,
  WeeklyGrowthSummary,
  CommunityServiceOpportunity,
  DailyPlanDuration,
  Language,
  Course
} from '../types';
import { COURSES_DATA } from '../data/mockData';
import { ISLAMIC_LESSONS_DATA } from '../data/islamicGuidanceData';

/**
 * 🌟 GROWTH AREAS CONFIGURATION (۱۰ شعبہ ہائے ترقی)
 * Non-diagnostic, holistic framework for self-development and practical empowerment.
 */
export const GROWTH_AREAS_META: Record<
  GrowthAreaId,
  {
    titleUrdu: string;
    titleEn: string;
    iconName: string;
    color: string;
    descriptionUrdu: string;
    descriptionEn: string;
    realLifeApplicationUrdu: string;
    realLifeApplicationEn: string;
  }
> = {
  knowledge: {
    titleUrdu: 'علم و فہم',
    titleEn: 'Knowledge & Understanding',
    iconName: 'BookOpen',
    color: 'emerald',
    descriptionUrdu: 'مفید اور بنیادی تصورات، جدید حقائق اور دورِ حاضر کے بنیادی علم کی سوجھ بوجھ۔',
    descriptionEn: 'Foundational concepts, contemporary insights, and practical understanding.',
    realLifeApplicationUrdu: 'روزمرہ فیصلوں، خاندان کی رہنمائی اور صحیح و غلط کے انتخاب میں دانائی سے کام لینا۔',
    realLifeApplicationEn: 'Making informed daily decisions, guiding family, and applying sound judgment.'
  },
  practical_skills: {
    titleUrdu: 'عملی ہنر',
    titleEn: 'Practical Skills',
    iconName: 'Wrench',
    color: 'amber',
    descriptionUrdu: 'ہاتھ سے کام کرنے، روزگار، فنی دستکاری یا کمپیوٹر و موبائل پر خود کوئی چیز تخلیق کرنے کی صلاحیت۔',
    descriptionEn: 'Hands-on trade crafts, creative making, or digital problem-solving on mobile/PC.',
    realLifeApplicationUrdu: 'گھریلو مرمت، دکان، زراعت یا فری لانسنگ میں اپنی محنت سے رزقِ حلال کمانا اور خرچ بچانا۔',
    realLifeApplicationEn: 'Household repairs, shop maintenance, farming, or earning halal income through freelancing.'
  },
  character: {
    titleUrdu: 'اخلاق و کردار',
    titleEn: 'Character & Ethics',
    iconName: 'ShieldCheck',
    color: 'teal',
    descriptionUrdu: 'سچائی، امانت داری، غصے پر ضبط، والدین کا احترام اور قول و فعل میں دیانت۔',
    descriptionEn: 'Truthfulness, trustworthiness, emotional restraint, honoring parents, and integrity.',
    realLifeApplicationUrdu: 'لوگوں کے ساتھ خوش اخلاقی، لین دین میں امانت داری اور غصے کے وقت صبر و درگزر۔',
    realLifeApplicationEn: 'Honest dealing with neighbors, reliable integrity, and peaceful patience in disagreements.'
  },
  communication: {
    titleUrdu: 'گفتگو و رابطہ',
    titleEn: 'Communication & Expression',
    iconName: 'MessageSquare',
    color: 'blue',
    descriptionUrdu: 'احترام سے بات کرنا، دوسروں کی بات غور سے سننا، بات چیت اور تحریر میں وضاحت۔',
    descriptionEn: 'Respectful dialogue, active listening, clarity in speech, writing, and constructive expression.',
    realLifeApplicationUrdu: 'گھر، دفتر یا محلے میں غلط فہمیاں دور کرنا اور باوقار انداز میں اپنا موقف بیان کرنا۔',
    realLifeApplicationEn: 'Resolving family or workplace misunderstandings and expressing thoughts with calm dignity.'
  },
  digital_literacy: {
    titleUrdu: 'ڈیجیٹل مہارت',
    titleEn: 'Digital Literacy',
    iconName: 'Smartphone',
    color: 'indigo',
    descriptionUrdu: 'موبائل، انٹرنیٹ، AI اور آن لائن سہولیات کو محفوظ اور کارآمد طریقے سے استعمال کرنا۔',
    descriptionEn: 'Smart, safe, and productive use of smartphones, internet apps, and modern AI tools.',
    realLifeApplicationUrdu: 'گھر بیٹھے بجلی کے بل جمع کرنا، آن لائن فارم بھرنا، کینوا پر پوسٹر بنانا اور جعلی خبروں سے بچنا۔',
    realLifeApplicationEn: 'Paying utility bills online, filling forms, creating Canva graphics, and identifying online scams.'
  },
  financial_awareness: {
    titleUrdu: 'مالیاتی شعور',
    titleEn: 'Financial Awareness',
    iconName: 'Coins',
    color: 'yellow',
    descriptionUrdu: 'بچت، حساب کتاب، غیر ضروری اخراجات پر قابو، حلال کمائی اور چھوٹے کاروبار کی سوجھ بوجھ۔',
    descriptionEn: 'Budgeting, controlling unnecessary expenses, halal earning, and small business literacy.',
    realLifeApplicationUrdu: 'گھر کا ماہانہ بجٹ بنانا، ہنگامی فنڈ قائم کرنا اور کاروبار کے نفع نقصان کا روزانہ اندراج۔',
    realLifeApplicationEn: 'Creating a simple monthly household budget, maintaining emergency savings, and tracking cash flow.'
  },
  health_discipline: {
    titleUrdu: 'صحت و نظم و ضبط',
    titleEn: 'Health & Daily Discipline',
    iconName: 'HeartPulse',
    color: 'rose',
    descriptionUrdu: 'وقت کی پابندی، متوازن خوراک، روزانہ ورزش/چہل قدمی اور ذہنی سکون کا تسلسل۔',
    descriptionEn: 'Punctuality, balanced wholesome nutrition, physical activity, and mental calm.',
    realLifeApplicationUrdu: 'صبح سویرے اٹھنا، روزانہ ۲۰ منٹ چہل قدمی اور فضول اسکرین ٹائم کم کر کے پرسکون نیند لینا۔',
    realLifeApplicationEn: 'Early rising, 20-min brisk walking daily, and reducing passive screen time for better sleep.'
  },
  family_responsibility: {
    titleUrdu: 'خاندانی ذمہ داری',
    titleEn: 'Family Responsibility',
    iconName: 'Home',
    color: 'orange',
    descriptionUrdu: 'والدین، بہن بھائیوں، بچوں اور گھریلو ذمہ داریوں کو احسن طریقے سے پورا کرنا۔',
    descriptionEn: 'Honoring parents, supporting siblings, nurturing children, and fulfilling domestic duties.',
    realLifeApplicationUrdu: 'روزانہ بزرگوں کے پاس بیٹھ کر حال پوچھنا، گھریلو سودا سلف میں ہاتھ بٹانا اور بچوں کو وقت دینا۔',
    realLifeApplicationEn: 'Spending quality time with elders, sharing household chores, and mentoring younger siblings.'
  },
  community_service: {
    titleUrdu: 'خدمتِ خلق و سماجی کردار',
    titleEn: 'Community Service',
    iconName: 'HeartHandshake',
    color: 'green',
    descriptionUrdu: 'محلے کی صفائی، پودے لگانا، پڑوسی کی مدد اور بغیر لالچ کے کسی کے کام آنا۔',
    descriptionEn: 'Neighborhood cleanliness, tree planting, neighbor support, and voluntary selfless service.',
    realLifeApplicationUrdu: 'گلی سے پتھر یا کچرا ہٹانا، بیمار پڑوسی کی عیادت اور کسی نادار طالب علم کو پڑھائی میں مدد دینا۔',
    realLifeApplicationEn: 'Removing obstacles from pathways, visiting a sick neighbor, and tutoring a local student.'
  },
  leadership: {
    titleUrdu: 'قیادت و ذمہ داری',
    titleEn: 'Leadership & Responsibility',
    iconName: 'Target',
    color: 'purple',
    descriptionUrdu: 'نیکی اور بھلائی میں پہل کرنا، مسائل کا مل جل کر حل نکالنا اور دوسروں کو جوڑنا۔',
    descriptionEn: 'Taking positive initiative, collaborative problem-solving, and inspiring unity.',
    realLifeApplicationUrdu: 'محلے میں صفائی مہم یا درخت لگانے کی چھوٹی سرگرمی کی منظم منصوبہ بندی اور قیادت کرنا۔',
    realLifeApplicationEn: 'Organizing a small neighborhood tree-planting drive or community welfare activity.'
  }
};

/**
 * 🌍 VOLUNTARY COMMUNITY SERVICE OPPORTUNITIES
 */
export const COMMUNITY_SERVICE_OPPORTUNITIES: CommunityServiceOpportunity[] = [
  {
    id: 'comm-1',
    titleUrdu: 'گھریلو یا قریبی بزرگ کی معاونت',
    titleEn: 'Support a Family or Neighboring Elder',
    categoryUrdu: 'خاندانی و سماجی خیر',
    categoryEn: 'Family & Social Care',
    descriptionUrdu: 'کسی ضعیف بزرگ کے پاس ۱۰ منٹ بیٹھ کر ان کا حال پوچھیں اور ان کا کوئی چھوٹا کام (دوا لانا، عینک صاف کرنا) کر دیں۔',
    descriptionEn: 'Spend 10 minutes with an elder, listening to their stories and assisting with a simple chore.',
    practicalStepUrdu: 'آج شام کسی بزرگ کے پاس خلوصِ دل سے بیٹھیں اور دعا لیں۔',
    practicalStepEn: 'Visit an elder with genuine warmth and offer gentle assistance.',
    iconName: 'HeartHandshake',
    estimatedMinutes: 15,
    points: 30
  },
  {
    id: 'comm-2',
    titleUrdu: 'محلے میں شجر کاری یا پودے کی آبیاری',
    titleEn: 'Tree Care & Planting',
    categoryUrdu: 'ماحولیاتی خدمت',
    categoryEn: 'Environment',
    descriptionUrdu: 'اپنے گھر کے باہر یا گلی میں ایک پودا لگائیں یا کسی سوکھے ہوئے پودے کو باقاعدگی سے پانی دیں۔',
    descriptionEn: 'Plant a small sapling or water dry neighborhood plants and street trees.',
    practicalStepUrdu: 'پلاسٹک کے خالی برتن میں ایک قلم لگائیں یا گلی کے پودے کو پانی دیں۔',
    practicalStepEn: 'Water a roadside plant or plant a domestic green sapling.',
    iconName: 'Sprout',
    estimatedMinutes: 10,
    points: 25
  },
  {
    id: 'comm-3',
    titleUrdu: 'کسی کو ایک مفید ہنر سکھانا',
    titleEn: 'Teach Someone a Useful Skill',
    categoryUrdu: 'تعلیم و آگاہی',
    categoryEn: 'Knowledge Sharing',
    descriptionUrdu: 'موبائل پر بل جمع کرنا، AI سے سوال پوچھنا یا کینوا پر نام لکھنا کسی ساتھی یا چھوٹے بھائی کو سکھائیں۔',
    descriptionEn: 'Teach a peer or sibling how to pay a bill online, ask AI a smart question, or design a card.',
    practicalStepUrdu: 'صرف ۵ منٹ میں موبائل کا ایک کارآمد فیچر کسی کو سکھائیں۔',
    practicalStepEn: 'Spend 5 minutes guiding someone on a practical digital task.',
    iconName: 'GraduationCap',
    estimatedMinutes: 15,
    points: 35
  },
  {
    id: 'comm-4',
    titleUrdu: 'گلی و محلے کی صفائی میں حصہ ڈالنا',
    titleEn: 'Neighborhood Cleanliness Action',
    categoryUrdu: 'شہری ذمہ داری',
    categoryEn: 'Civic Responsibility',
    descriptionUrdu: 'راستے سے کوئی تکلیف دہ چیز (پتھر، کانٹا، کچرا) ہٹا کر کوڑے دان میں ڈالیں — یہ صدقہ ہے۔',
    descriptionEn: 'Clear trash or obstacles from a common pathway and place them in a bin.',
    practicalStepUrdu: 'اپنے گھر کے سامنے کا راستہ اور گلی صاف کریں۔',
    practicalStepEn: 'Clean the walkway in front of your home or workplace.',
    iconName: 'Sparkles',
    estimatedMinutes: 10,
    points: 25
  },
  {
    id: 'comm-5',
    titleUrdu: 'خون کے عطیات کی آگاہی اور معاونت',
    titleEn: 'Blood Donation Awareness',
    categoryUrdu: 'صحت و انسانیت',
    categoryEn: 'Health & Humanity',
    descriptionUrdu: 'اپنا بلڈ گروپ معلوم کریں اور محلے یا دوستوں کے واٹس ایپ گروپ میں ایمرجنسی بلڈ ڈونیشن رابطہ لسٹ بنانے میں مدد کریں۔',
    descriptionEn: 'Record your blood group and help create a local emergency blood donor directory.',
    practicalStepUrdu: 'اپنے اور خاندان کے ۳ افراد کا بلڈ گروپ ایک محفوظ ڈائری میں لکھیں۔',
    practicalStepEn: 'Note down blood groups of 3 family members in a shared emergency diary.',
    iconName: 'HeartPulse',
    estimatedMinutes: 15,
    points: 30
  },
  {
    id: 'comm-6',
    titleUrdu: 'پڑوسی کی خاموش مدد (حسنِ سلوک)',
    titleEn: 'Silent Neighborly Kindness',
    categoryUrdu: 'حقوق العباد',
    categoryEn: 'Neighbor Rights',
    descriptionUrdu: 'پڑوسی کے گھر کچھ کھانا بھیجیں یا ان کی کسی ضرورت کے وقت مسکرا کر پیش آئیں۔',
    descriptionEn: 'Share a portion of home-cooked meal with a neighbor or ask after their well-being.',
    practicalStepUrdu: 'کھانے میں سے ایک پلیٹ پڑوسی کے ہاں بھیجیں یا سلام میں پہل کریں۔',
    practicalStepEn: 'Initiate a warm greeting and share food with a neighbor.',
    iconName: 'Home',
    estimatedMinutes: 10,
    points: 25
  }
];

/**
 * 📊 CALCULATE COMPREHENSIVE GROWTH SCORES (10 Areas)
 * Strictly objective, positive, non-diagnostic.
 */
export function calculateGrowthScores(userProfile: UserProfile): Record<GrowthAreaId, GrowthAreaInfo> {
  const completedLessons = userProfile.completedLessonIds || [];
  const enrolledCourses = userProfile.enrolledCourseIds || [];
  const completedIslamicLessons = userProfile.completedIslamicLessonIds || [];
  const completedIslamicChallenges = userProfile.completedIslamicChallengeIds || [];
  const completedMissions = userProfile.completedMissionIds || [];
  const missionReflections = Object.keys(userProfile.missionReflections || {});
  const reflections = [
    ...Object.keys(userProfile.islamicReflections || {}),
    ...missionReflections
  ];
  const completedDailyDays = userProfile.completedDailyPlanDayIds || [];
  const completedGrowthTasks = userProfile.completedGrowthTaskIds || [];
  const completedCommunityActions = userProfile.completedCommunityActionIds || [];
  const points = userProfile.points || 0;
  const streak = userProfile.streakDays || 0;

  // Helper to clamp score
  const calc = (base: number, tasksCount: number, totalSuggested: number): { score: number; levelUrdu: string; levelEn: string } => {
    const score = Math.min(100, Math.max(15, Math.round(base)));
    let levelUrdu = 'ابتدائی سفر';
    let levelEn = 'Foundation';
    if (score >= 70) {
      levelUrdu = 'مضبوط و پختہ';
      levelEn = 'Mastered';
    } else if (score >= 40) {
      levelUrdu = 'بہترین پیش رفت';
      levelEn = 'Progressing';
    }
    return { score, levelUrdu, levelEn };
  };

  // 1. Knowledge
  const kScore = 20 + completedLessons.length * 8 + (userProfile.completedAssessment ? 15 : 0) + enrolledCourses.length * 5;
  const kInfo = calc(kScore, completedLessons.length, 10);

  // 2. Practical Skills (connected with daily missions & projects)
  const psScore = 20 + completedDailyDays.length * 10 + (userProfile.completedProjectIds?.length || 0) * 15 + completedMissions.length * 6 + points / 50;
  const psInfo = calc(psScore, completedDailyDays.length + (userProfile.completedProjectIds?.length || 0) + completedMissions.length, 8);

  // 3. Character (connected with daily missions, reflections & Islamic challenges)
  const cScore = 25 + completedIslamicLessons.length * 12 + completedIslamicChallenges.length * 8 + reflections.length * 8 + completedMissions.length * 7;
  const cInfo = calc(cScore, completedIslamicLessons.length + completedIslamicChallenges.length + completedMissions.length, 15);

  // 4. Communication
  const commCourseEnrolled = enrolledCourses.some(id => id.includes('comm') || id.includes('english') || id.includes('urdu'));
  const commScore = 25 + (commCourseEnrolled ? 25 : 0) + reflections.length * 8 + (points > 100 ? 15 : 5);
  const commInfo = calc(commScore, reflections.length + (commCourseEnrolled ? 2 : 0), 6);

  // 5. Digital Literacy
  const digCoursesCount = enrolledCourses.filter(id => id.includes('ai') || id.includes('mobile') || id.includes('canva') || id.includes('digital')).length;
  const digScore = 25 + digCoursesCount * 20 + completedLessons.filter(id => id.includes('ai') || id.includes('dig')).length * 10;
  const digInfo = calc(digScore, digCoursesCount, 5);

  // 6. Financial Awareness
  const finEnrolled = enrolledCourses.some(id => id.includes('business') || id.includes('freelance') || id.includes('shop'));
  const finScore = 20 + (finEnrolled ? 30 : 0) + Math.min(30, points / 40);
  const finInfo = calc(finScore, finEnrolled ? 3 : 1, 5);

  // 7. Health & Daily Discipline
  const healthScore = 25 + Math.min(45, streak * 10) + completedDailyDays.length * 5 + completedMissions.length * 4;
  const healthInfo = calc(healthScore, streak, 7);

  // 8. Family Responsibility
  const famScore = 30 + completedIslamicChallenges.filter(id => id.includes('parent') || id.includes('family') || id.includes('4') || id.includes('6')).length * 15 + reflections.length * 6 + completedMissions.length * 5;
  const famInfo = calc(famScore, completedIslamicChallenges.length + completedMissions.length, 5);

  // 9. Community Service
  const commServScore = 20 + completedCommunityActions.length * 20 + completedIslamicChallenges.filter(id => id.includes('service') || id.includes('15') || id.includes('charity')).length * 12;
  const commServInfo = calc(commServScore, completedCommunityActions.length, 6);

  // 10. Leadership & Responsibility
  const leadScore = 20 + (completedProjectIdsCount(userProfile) > 0 ? 25 : 0) + (streak >= 3 ? 20 : 5) + completedCommunityActions.length * 10 + completedMissions.length * 5;
  const leadInfo = calc(leadScore, completedCommunityActions.length + (streak >= 3 ? 1 : 0), 5);

  const result: Record<GrowthAreaId, GrowthAreaInfo> = {
    knowledge: {
      id: 'knowledge',
      ...GROWTH_AREAS_META.knowledge,
      score: kInfo.score,
      levelUrdu: kInfo.levelUrdu,
      levelEn: kInfo.levelEn,
      completedTasksCount: completedLessons.length,
      totalSuggestedCount: 10
    },
    practical_skills: {
      id: 'practical_skills',
      ...GROWTH_AREAS_META.practical_skills,
      score: psInfo.score,
      levelUrdu: psInfo.levelUrdu,
      levelEn: psInfo.levelEn,
      completedTasksCount: completedDailyDays.length,
      totalSuggestedCount: 8
    },
    character: {
      id: 'character',
      ...GROWTH_AREAS_META.character,
      score: cInfo.score,
      levelUrdu: cInfo.levelUrdu,
      levelEn: cInfo.levelEn,
      completedTasksCount: completedIslamicLessons.length + completedIslamicChallenges.length,
      totalSuggestedCount: 15
    },
    communication: {
      id: 'communication',
      ...GROWTH_AREAS_META.communication,
      score: commInfo.score,
      levelUrdu: commInfo.levelUrdu,
      levelEn: commInfo.levelEn,
      completedTasksCount: reflections.length,
      totalSuggestedCount: 6
    },
    digital_literacy: {
      id: 'digital_literacy',
      ...GROWTH_AREAS_META.digital_literacy,
      score: digInfo.score,
      levelUrdu: digInfo.levelUrdu,
      levelEn: digInfo.levelEn,
      completedTasksCount: digCoursesCount,
      totalSuggestedCount: 5
    },
    financial_awareness: {
      id: 'financial_awareness',
      ...GROWTH_AREAS_META.financial_awareness,
      score: finInfo.score,
      levelUrdu: finInfo.levelUrdu,
      levelEn: finInfo.levelEn,
      completedTasksCount: finEnrolled ? 2 : 0,
      totalSuggestedCount: 5
    },
    health_discipline: {
      id: 'health_discipline',
      ...GROWTH_AREAS_META.health_discipline,
      score: healthInfo.score,
      levelUrdu: healthInfo.levelUrdu,
      levelEn: healthInfo.levelEn,
      completedTasksCount: streak,
      totalSuggestedCount: 7
    },
    family_responsibility: {
      id: 'family_responsibility',
      ...GROWTH_AREAS_META.family_responsibility,
      score: famInfo.score,
      levelUrdu: famInfo.levelUrdu,
      levelEn: famInfo.levelEn,
      completedTasksCount: Math.min(5, reflections.length + 1),
      totalSuggestedCount: 5
    },
    community_service: {
      id: 'community_service',
      ...GROWTH_AREAS_META.community_service,
      score: commServInfo.score,
      levelUrdu: commServInfo.levelUrdu,
      levelEn: commServInfo.levelEn,
      completedTasksCount: completedCommunityActions.length,
      totalSuggestedCount: 6
    },
    leadership: {
      id: 'leadership',
      ...GROWTH_AREAS_META.leadership,
      score: leadInfo.score,
      levelUrdu: leadInfo.levelUrdu,
      levelEn: leadInfo.levelEn,
      completedTasksCount: completedCommunityActions.length + (streak > 2 ? 1 : 0),
      totalSuggestedCount: 5
    }
  };

  return result;
}

function completedProjectIdsCount(user: UserProfile): number {
  return user.completedProjectIds?.length || 0;
}

/**
 * 🎯 SMART RECOMMENDATION ENGINE (TOP 3 NEXT ACTIONS)
 * Strictly connects Profile -> Skills -> Courses -> Lessons -> Quizzes -> Practical Tasks -> Islamic Character -> Daily Challenges -> Reflection -> Community -> Progress.
 * Never based on age stereotypes. Handles mistakes encouragingly.
 */
export function getSmartRecommendations(
  userProfile: UserProfile,
  language: Language = 'ur'
): GrowthRecommendation[] {
  const recommendations: GrowthRecommendation[] = [];
  const completedLessons = userProfile.completedLessonIds || [];
  const enrolledCourseIds = userProfile.enrolledCourseIds || [];
  const completedIslamicLessons = userProfile.completedIslamicLessonIds || [];
  const completedIslamicChallenges = userProfile.completedIslamicChallengeIds || [];
  const mistakes = userProfile.quizMistakeRecords || {};

  // Check 1: Quiz Revision / Encouraging Practice if there were mistakes
  const hasQuizMistakes = Object.values(mistakes).some(count => count > 0);
  if (hasQuizMistakes) {
    const activeCourse = COURSES_DATA.find(c => enrolledCourseIds.includes(c.id)) || COURSES_DATA[0];
    recommendations.push({
      id: 'rec-quiz-review',
      titleUrdu: `آسان نظر ثانی: ${activeCourse.titleUrdu}`,
      titleEn: `Gentle Review: ${activeCourse.titleEn}`,
      growthArea: 'knowledge',
      growthAreaUrdu: 'علم و فہم',
      growthAreaEn: 'Knowledge',
      whyUrdu: 'آپ نے بہت اچھی کوشش کی ہے! ایک بار پھر چھوٹی سی مشق سے یہ تصور بالکل پکا ہو جائے گا۔',
      whyEn: 'Great effort! A quick, friendly recap will reinforce this concept perfectly.',
      estimatedMinutes: 5,
      difficulty: 'Beginner',
      difficultyUrdu: 'آسان و حوصلہ افزا',
      practicalBenefitUrdu: 'کوئز اور اہم نکات پر مکمل گرفت اور اعتماد کا حصول۔',
      practicalBenefitEn: 'Clear conceptual confidence and solid retention without stress.',
      targetType: 'quiz_review',
      targetCourseId: activeCourse.id,
      targetActionLabelUrdu: 'ایک بار پھر کوشش کریں',
      targetActionLabelEn: 'Try Again Gently',
      encouragementNoteUrdu: 'چلیں اسے ایک آسان مثال سے سمجھتے ہیں 🌱',
      encouragementNoteEn: 'Let’s explore this with a simpler everyday example 🌱'
    });
  }

  // Check 2: Active or Next Course Lesson Progression
  let activeCourse: Course | undefined = COURSES_DATA.find(c => enrolledCourseIds.includes(c.id));
  if (!activeCourse) {
    // Pick based on user interests or foundational mobile/AI course
    activeCourse = COURSES_DATA[0];
  }

  const nextUnfinishedLesson = activeCourse.lessons.find(l => !completedLessons.includes(l.id));

  if (nextUnfinishedLesson) {
    recommendations.push({
      id: `rec-lesson-${nextUnfinishedLesson.id}`,
      titleUrdu: nextUnfinishedLesson.titleUrdu,
      titleEn: nextUnfinishedLesson.titleEn,
      growthArea: activeCourse.category === 'AI & Technology' ? 'digital_literacy' : 'practical_skills',
      growthAreaUrdu: activeCourse.categoryUrdu || 'عملی ہنر',
      growthAreaEn: activeCourse.category,
      whyUrdu: 'آپ کے موجودہ سیکھنے کے سفر اور روزانہ دستیاب وقت کے مطابق یہ اگلا مفید قدم ہو سکتا ہے۔',
      whyEn: 'Based on your active learning pace and daily available time, this is your next high-impact step.',
      estimatedMinutes: nextUnfinishedLesson.durationMinutes || 10,
      difficulty: activeCourse.difficulty || 'Beginner',
      difficultyUrdu: activeCourse.difficultyUrdu || 'ابتدائی',
      practicalBenefitUrdu: 'اس ہنر سے آپ موبائل یا اپنے کام میں ایک نیا عملی فائدہ حاصل کریں گے۔',
      practicalBenefitEn: 'Gain direct hands-on capability on your phone or work routine.',
      targetType: 'lesson',
      targetCourseId: activeCourse.id,
      targetLessonId: nextUnfinishedLesson.id,
      targetActionLabelUrdu: 'اب شروع کریں',
      targetActionLabelEn: 'Start Now'
    });
  } else {
    // Course finished or none active -> Recommend practical task / next complementary course
    const otherCourse = COURSES_DATA.find(c => !enrolledCourseIds.includes(c.id)) || COURSES_DATA[1];
    recommendations.push({
      id: `rec-course-${otherCourse.id}`,
      titleUrdu: otherCourse.titleUrdu,
      titleEn: otherCourse.titleEn,
      growthArea: 'practical_skills',
      growthAreaUrdu: otherCourse.categoryUrdu,
      growthAreaEn: otherCourse.category,
      whyUrdu: 'آپ نے پچھلا ہنر کامیابی سے مکمل کیا ہے، اگلا باوقار قدم یہ نیا ہنر شروع کرنا ہے۔',
      whyEn: 'You completed your previous module smoothly; taking up this new skill expands your horizon.',
      estimatedMinutes: 15,
      difficulty: otherCourse.difficulty || 'Beginner',
      difficultyUrdu: otherCourse.difficultyUrdu || 'ابتدائی',
      practicalBenefitUrdu: otherCourse.descriptionUrdu,
      practicalBenefitEn: otherCourse.descriptionEn,
      targetType: 'course',
      targetCourseId: otherCourse.id,
      targetActionLabelUrdu: 'کورس شروع کریں',
      targetActionLabelEn: 'Explore Course'
    });
  }

  // Check 3: Islamic Character Development Level & 5-Min Action Challenge
  const nextIslamicLessonIndex = ISLAMIC_LESSONS_DATA.findIndex(l => !completedIslamicLessons.includes(l.id));
  const activeIslamicIdx = nextIslamicLessonIndex !== -1 ? nextIslamicLessonIndex : 0;
  const activeIslamicLesson = ISLAMIC_LESSONS_DATA[activeIslamicIdx] || ISLAMIC_LESSONS_DATA[0];

  const challengeDone = completedIslamicChallenges.includes(`challenge-${activeIslamicLesson.id}`);

  recommendations.push({
    id: `rec-islamic-${activeIslamicLesson.id}`,
    titleUrdu: `${activeIslamicLesson.levelTitleUrdu} — ${activeIslamicLesson.themeUrdu}`,
    titleEn: `${activeIslamicLesson.levelTitleEn} — ${activeIslamicLesson.themeEn}`,
    growthArea: 'character',
    growthAreaUrdu: 'اخلاق و کردار',
    growthAreaEn: 'Character & Ethics',
    whyUrdu: 'ہنر مندی کی بنیاد سچے کردار، امانت اور نیت کی پاکیزگی پر قائم ہے۔',
    whyEn: 'True practical craft flourishes upon a foundation of sincerity, truth, and moral character.',
    estimatedMinutes: 5,
    difficulty: 'Beginner',
    difficultyUrdu: '۵ منٹ کا عملی سبق',
    practicalBenefitUrdu: activeIslamicLesson.practicalAction?.actionUrdu || 'روزمرہ معاملات میں امانت، سچائی اور درگزر سے کام لینا',
    practicalBenefitEn: activeIslamicLesson.practicalAction?.actionEn || 'Practicing sincere character in daily interactions',
    targetType: 'islamic_lesson',
    targetIslamicLessonIndex: activeIslamicIdx,
    targetActionLabelUrdu: challengeDone ? 'کردار سازی کا جائزہ' : 'آج کا ۵ منٹ چیلنج',
    targetActionLabelEn: challengeDone ? 'Review Lesson' : "Today's 5-Min Action"
  });

  // Check 4: Voluntary Community Impact or Real-Life Application
  const remainingComm = COMMUNITY_SERVICE_OPPORTUNITIES.find(
    c => !(userProfile.completedCommunityActionIds || []).includes(c.id)
  ) || COMMUNITY_SERVICE_OPPORTUNITIES[0];

  recommendations.push({
    id: `rec-comm-${remainingComm.id}`,
    titleUrdu: remainingComm.titleUrdu,
    titleEn: remainingComm.titleEn,
    growthArea: 'community_service',
    growthAreaUrdu: 'خدمتِ خلق و سماجی کردار',
    growthAreaEn: 'Community Service',
    whyUrdu: 'اپنے علم اور وقت سے خاندان، محلے یا کسی نادار ساتھی کی چھوٹی سی مدد کریں۔',
    whyEn: 'Use your skills and kindness to assist a neighbor or family member.',
    estimatedMinutes: remainingComm.estimatedMinutes,
    difficulty: 'Beginner',
    difficultyUrdu: 'آسان خیراتی قدم',
    practicalBenefitUrdu: remainingComm.descriptionUrdu,
    practicalBenefitEn: remainingComm.descriptionEn,
    targetType: 'community_action',
    targetActionLabelUrdu: 'عملی قدم دیکھیں',
    targetActionLabelEn: 'View Practical Step'
  });

  // Return the TOP 3 recommendations strictly
  return recommendations.slice(0, 3);
}

/**
 * ⏱️ PERSONALIZED DAILY PLAN
 * 15m, 30m, 1h, 2h+ — Never overwhelming, tightly focused.
 */
export function getPersonalizedDailyPlan(
  duration: DailyPlanDuration,
  userProfile: UserProfile,
  language: Language = 'ur'
): DailyGrowthPlanItem[] {
  const activeCourse = COURSES_DATA.find(c => (userProfile.enrolledCourseIds || []).includes(c.id)) || COURSES_DATA[0];
  const nextLesson = activeCourse.lessons.find(l => !(userProfile.completedLessonIds || []).includes(l.id)) || activeCourse.lessons[0];

  const islamicIdx = (userProfile.completedIslamicLessonIds || []).length % ISLAMIC_LESSONS_DATA.length;
  const currentIslamic = ISLAMIC_LESSONS_DATA[islamicIdx] || ISLAMIC_LESSONS_DATA[0];

  if (duration === '15m') {
    return [
      {
        id: 'plan-15-1',
        type: 'learning',
        typeUrdu: 'سیکھنا',
        typeEn: 'Learn',
        titleUrdu: `5 منٹ علم: ${nextLesson.titleUrdu}`,
        titleEn: `5-Min Learning: ${nextLesson.titleEn}`,
        durationMinutes: 5,
        descriptionUrdu: 'سبق کے ۳ بنیادی نکات کو غور سے پڑھیں اور سمجھیں۔',
        descriptionEn: 'Read and absorb the 3 core takeaways of this lesson.',
        practicalOutcomeUrdu: 'نئے تصور کی بنیادی فہم',
        practicalOutcomeEn: 'Clear conceptual grasp of the topic',
        targetCourseId: activeCourse.id
      },
      {
        id: 'plan-15-2',
        type: 'practice',
        typeUrdu: 'مشق',
        typeEn: 'Practice',
        titleUrdu: '5 منٹ عملی آزمائش (Hands-on)',
        titleEn: '5-Min Hands-on Practice',
        durationMinutes: 5,
        descriptionUrdu: 'موبائل پر فوری طور پر اس سبق کے بتائے ہوئے ٹول یا بٹن کو دبا کر آزمائیں۔',
        descriptionEn: 'Test the tool or method shown in the lesson directly on your phone.',
        practicalOutcomeUrdu: 'ہاتھ سے عملی مشق',
        practicalOutcomeEn: 'Immediate hands-on testing',
        targetCourseId: activeCourse.id
      },
      {
        id: 'plan-15-3',
        type: 'reflection',
        typeUrdu: 'خود احتسابی',
        typeEn: 'Reflection',
        titleUrdu: `5 منٹ کردار: ${currentIslamic.themeUrdu}`,
        titleEn: `5-Min Character: ${currentIslamic.themeEn}`,
        durationMinutes: 5,
        descriptionUrdu: 'آج کے دن نیت کی پاکیزگی اور ایک نیک اخلاقی عمل کا جائزہ لیں۔',
        descriptionEn: 'Reflect on purity of intention and perform one mindful moral act.',
        practicalOutcomeUrdu: 'کردار سنوارنا اور دعا',
        practicalOutcomeEn: 'Moral mindfulness and reflection',
        targetIslamicLessonIndex: islamicIdx
      }
    ];
  }

  if (duration === '30m') {
    return [
      {
        id: 'plan-30-1',
        type: 'learning',
        typeUrdu: 'سیکھنا',
        typeEn: 'Learn',
        titleUrdu: `10 منٹ سبق: ${nextLesson.titleUrdu}`,
        titleEn: `10-Min Lesson: ${nextLesson.titleEn}`,
        durationMinutes: 10,
        descriptionUrdu: 'مکمل سبق پڑھیں اور اس کے ساتھ دی گئی آسان روزمرہ مثال کو سمجھیں۔',
        descriptionEn: 'Read the lesson and study the simple real-life analogy.',
        practicalOutcomeUrdu: 'گہری فہم و شعور',
        practicalOutcomeEn: 'In-depth conceptual understanding',
        targetCourseId: activeCourse.id
      },
      {
        id: 'plan-30-2',
        type: 'practice',
        typeUrdu: 'مشق و کوئز',
        typeEn: 'Practice & Quiz',
        titleUrdu: '10 منٹ کوئز و خود تشخیصی سوالات',
        titleEn: '10-Min Quiz & Self-Check',
        durationMinutes: 10,
        descriptionUrdu: 'کوئز حل کریں تاکہ معلوم ہو کہ آپ نے کتنا سمجھا ہے۔',
        descriptionEn: 'Answer the interactive questions to confirm your understanding.',
        practicalOutcomeUrdu: 'فہم کی پختگی',
        practicalOutcomeEn: 'Solidifying memory and skills',
        targetCourseId: activeCourse.id
      },
      {
        id: 'plan-30-3',
        type: 'practical_task',
        typeUrdu: 'عملی ٹاسک',
        typeEn: 'Practical Task',
        titleUrdu: `10 منٹ حقیقی زندگی کا ٹاسک: ${activeCourse.practicalTask.titleUrdu}`,
        titleEn: `10-Min Real Task: ${activeCourse.practicalTask.titleEn}`,
        durationMinutes: 10,
        descriptionUrdu: activeCourse.practicalTask.instructionsUrdu,
        descriptionEn: activeCourse.practicalTask.instructionsEn,
        practicalOutcomeUrdu: activeCourse.practicalTask.deliverableUrdu,
        practicalOutcomeEn: activeCourse.practicalTask.deliverableEn,
        targetCourseId: activeCourse.id
      }
    ];
  }

  if (duration === '1h') {
    return [
      {
        id: 'plan-60-1',
        type: 'learning',
        typeUrdu: 'جامع مطالعہ',
        typeEn: 'Comprehensive Learning',
        titleUrdu: `20 منٹ گہرا مطالعہ: ${activeCourse.titleUrdu}`,
        titleEn: `20-Min Deep Study: ${activeCourse.titleEn}`,
        durationMinutes: 20,
        descriptionUrdu: 'سبق اور اس کے تمام نکات کو تسلی سے سمجھیں اور نوٹس بنائیں۔',
        descriptionEn: 'Study the full lesson, take notes, and review key takeaways.',
        practicalOutcomeUrdu: 'جامع علم',
        practicalOutcomeEn: 'Thorough subject knowledge',
        targetCourseId: activeCourse.id
      },
      {
        id: 'plan-60-2',
        type: 'practice',
        typeUrdu: 'عملی مشق',
        typeEn: 'Hands-on Practice',
        titleUrdu: '15 منٹ براہِ راست موبائل/کمپیوٹر پر مشق',
        titleEn: '15-Min Direct Practice on Device',
        durationMinutes: 15,
        descriptionUrdu: 'موبائل پر کینوا ڈیزائن بنائیں، AI پرامپٹ لکھیں یا حساب کتاب کریں۔',
        descriptionEn: 'Create a design, test an AI prompt, or draft an income log.',
        practicalOutcomeUrdu: 'عملی نتیجہ',
        practicalOutcomeEn: 'Tangible digital creation',
        targetCourseId: activeCourse.id
      },
      {
        id: 'plan-60-3',
        type: 'project',
        typeUrdu: 'پروجیکٹ',
        typeEn: 'Mini Project',
        titleUrdu: '15 منٹ منی پروجیکٹ کی تکمیل',
        titleEn: '15-Min Mini Project Deliverable',
        durationMinutes: 15,
        descriptionUrdu: activeCourse.projectDescriptionUrdu,
        descriptionEn: activeCourse.projectDescriptionEn,
        practicalOutcomeUrdu: 'مکمل پورٹ فولیو آئٹم',
        practicalOutcomeEn: 'Complete portfolio deliverable',
        targetCourseId: activeCourse.id
      },
      {
        id: 'plan-60-4',
        type: 'reflection',
        typeUrdu: 'کردار و خود احتسابی',
        typeEn: 'Character & Reflection',
        titleUrdu: `10 منٹ خود احتسابی و کردار چیلنج: ${currentIslamic.themeUrdu}`,
        titleEn: `10-Min Character Challenge: ${currentIslamic.themeEn}`,
        durationMinutes: 10,
        descriptionUrdu: 'حضرت عمرؓ کے قول کے مطابق دن کا خود احتسابی جائزہ لیں اور ڈائری میں لکھیں۔',
        descriptionEn: 'Reflect deeply on your day and log your thoughts in your reflection journal.',
        practicalOutcomeUrdu: 'روحانی و فکری سکون',
        practicalOutcomeEn: 'Self-audit and moral clarity',
        targetIslamicLessonIndex: islamicIdx
      }
    ];
  }

  // 2h+
  return [
    {
      id: 'plan-120-1',
      type: 'learning',
      typeUrdu: 'گہرا مطالعہ',
      typeEn: 'Deep Learning',
      titleUrdu: `35 منٹ ایڈوانس سیکھنا: ${activeCourse.titleUrdu}`,
      titleEn: `35-Min Advanced Learning: ${activeCourse.titleEn}`,
      durationMinutes: 35,
      descriptionUrdu: 'اسباق، کوئز اور ایڈوانس مثالوں کا گہرائی سے جائزہ لیں۔',
      descriptionEn: 'Review advanced scenarios, quizzes, and technical concepts.',
      practicalOutcomeUrdu: 'ہنر میں مہارت',
      practicalOutcomeEn: 'Advanced domain mastery',
      targetCourseId: activeCourse.id
    },
    {
      id: 'plan-120-2',
      type: 'project',
      typeUrdu: 'بڑا عملی پروجیکٹ',
      typeEn: 'Major Practical Project',
      titleUrdu: '45 منٹ مکمل پروجیکٹ (دکان کا پوسٹر، بجٹ یا زرعی شیڈول)',
      titleEn: '45-Min Major Project (Flyer, Budget, or Farm Plan)',
      durationMinutes: 45,
      descriptionUrdu: 'ایک مکمل کام تیار کریں جسے حقیقی زندگی میں فوراً استعمال کیا جا سکے۔',
      descriptionEn: 'Build a production-ready asset usable in real-world situations.',
      practicalOutcomeUrdu: 'حقیقی دنیا میں قابلِ استعمال کام',
      practicalOutcomeEn: 'Deployable real-world artifact',
      targetCourseId: activeCourse.id
    },
    {
      id: 'plan-120-3',
      type: 'community',
      typeUrdu: 'سماجی خیر و خدمت',
      typeEn: 'Community Action',
      titleUrdu: '25 منٹ محلے یا خاندان کے لیے عملی اقدام',
      titleEn: '25-Min Family or Community Service Action',
      durationMinutes: 25,
      descriptionUrdu: 'کسی بزرگ کی مدد کریں، پودا لگائیں یا کسی ساتھی کو یہ ہنر سکھائیں۔',
      descriptionEn: 'Assist an elder, plant a tree, or mentor a peer in this new skill.',
      practicalOutcomeUrdu: 'معاشرتی خیر اور صدقہ جاریہ',
      practicalOutcomeEn: 'Lasting community goodwill',
      targetCourseId: activeCourse.id
    },
    {
      id: 'plan-120-4',
      type: 'reflection',
      typeUrdu: 'فکری ڈائری',
      typeEn: 'Reflection Journal',
      durationMinutes: 15,
      titleUrdu: `15 منٹ اسلامی کردار و خود احتسابی ڈائری`,
      titleEn: `15-Min Islamic Character & Audit Journal`,
      descriptionUrdu: 'آج کے دن کے اخلاقی فیصلوں اور نیت کا خود احتسابی اندراج کریں۔',
      descriptionEn: 'Write your daily reflection and renewal of sincere intention.',
      practicalOutcomeUrdu: 'فکری پختگی',
      practicalOutcomeEn: 'Refined moral self-audit',
      targetIslamicLessonIndex: islamicIdx
    }
  ];
}

/**
 * 📅 WEEKLY PERSONAL GROWTH CARD SUMMARY ("آپ کا اس ہفتے کا سفر")
 * Strictly highlights internal growth; no comparisons or toxic competition.
 */
export function getWeeklyGrowthSummary(
  userProfile: UserProfile,
  language: Language = 'ur'
): WeeklyGrowthSummary {
  const completedLessons = userProfile.completedLessonIds || [];
  const completedDailyDays = userProfile.completedDailyPlanDayIds || [];
  const completedIslamicLessons = userProfile.completedIslamicLessonIds || [];
  const completedIslamicChallenges = userProfile.completedIslamicChallengeIds || [];
  const reflections = Object.keys(userProfile.islamicReflections || {});
  const completedCommunityActions = userProfile.completedCommunityActionIds || [];
  const streak = userProfile.streakDays || 1;

  const topRec = getSmartRecommendations(userProfile, language)[0];

  const encouragingMessageUrdu =
    streak > 3
      ? 'ماشاءاللہ! آپ کا سیکھنے کا تسلسل بہت شاندار اور باوقار ہے — روزانہ کا چھوٹا قدم زندگی بدل دیتا ہے۔'
      : 'بہت خوب! آپ نے سیکھنے کے سفر میں باقاعدگی کی طرف بہت اچھا قدم بڑھایا ہے۔ آگے بڑھتے رہیں!';

  const encouragingMessageEn =
    streak > 3
      ? 'MashaAllah! Your steady consistency is truly admirable — small daily steps create lifelong mastery.'
      : 'Wonderful start! Every focused minute builds towards your independence and skill mastery.';

  return {
    completedLessonsCount: completedLessons.length,
    skillsPracticedCount: (userProfile.enrolledCourseIds || []).length,
    challengesCompletedCount: completedIslamicChallenges.length,
    practicalTasksCount: completedDailyDays.length + (userProfile.completedProjectIds?.length || 0),
    characterAreasPracticedCount: completedIslamicLessons.length,
    reflectionEntriesCount: reflections.length,
    communityActionsCount: completedCommunityActions.length,
    topRecommendation: topRec,
    growthStreakDays: streak,
    encouragingMessageUrdu,
    encouragingMessageEn
  };
}
