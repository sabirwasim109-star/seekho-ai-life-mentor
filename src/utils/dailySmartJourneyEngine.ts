import { 
  UserProfile, 
  DailySmartJourney, 
  JourneyTimeLength, 
  Course, 
  Lesson,
  RealLifeMission
} from '../types';
import { COURSES_DATA } from '../data/mockData';
import { PRACTICAL_LIFE_LESSONS } from '../data/practicalLifeSkillsData';
import { ISLAMIC_LESSONS_DATA } from '../data/islamicGuidanceData';
import { REAL_LIFE_MISSIONS_DATA } from '../data/realLifeMissionsData';
import { getPersonalizedMission } from './realLifeMissionEngine';
import { getPersonalizedCourseForUser } from './personalLearningPathEngine';

export const JOURNEY_TIME_OPTIONS: {
  id: JourneyTimeLength;
  labelUrdu: string;
  labelEn: string;
  badgeUrdu: string;
  badgeEn: string;
  minutes: number;
  descriptionUrdu: string;
  descriptionEn: string;
  points: number;
  icon: string;
}[] = [
  {
    id: '10m',
    labelUrdu: '10 منٹ',
    labelEn: '10 Minutes',
    badgeUrdu: 'تیز اور آسان',
    badgeEn: 'Quick & Gentle',
    minutes: 10,
    descriptionUrdu: 'ایک فوری سبق، چھوٹی مشق اور آج کا ایک چھوٹا عملی قدم۔',
    descriptionEn: 'One fast lesson, micro practice, and a small action.',
    points: 30,
    icon: 'Zap'
  },
  {
    id: '20m',
    labelUrdu: '20 منٹ',
    labelEn: '20 Minutes',
    badgeUrdu: 'متوازن اور معیاری',
    badgeEn: 'Balanced & Steady',
    minutes: 20,
    descriptionUrdu: 'مکمل سبق، ہنر کی عملی مشق، مشن اور مختصر غور و فکر۔',
    descriptionEn: 'Complete lesson, practical skill activity, and real mission.',
    points: 50,
    icon: 'Clock'
  },
  {
    id: '30m',
    labelUrdu: '30 منٹ',
    labelEn: '30 Minutes',
    badgeUrdu: 'گہری پیش رفت',
    badgeEn: 'Deep Progress',
    minutes: 30,
    descriptionUrdu: 'جامع مطالعہ، پریکٹیکل مشق، خاندانی یا سماجی مشن اور اخلاقی رہنمائی۔',
    descriptionEn: 'In-depth study, hands-on practice, family/community mission.',
    points: 75,
    icon: 'Sparkles'
  },
  {
    id: '60m+',
    labelUrdu: '60+ منٹ',
    labelEn: '60+ Minutes',
    badgeUrdu: 'ماہرانہ اور جامع',
    badgeEn: 'Mastery & Focus',
    minutes: 60,
    descriptionUrdu: 'مکمل مہارت کا تسلسل، پروجیکٹ ورک، کردار کی پختگی اور مکمل خود احتسابی۔',
    descriptionEn: 'Extended skill mastery, project work, character building.',
    points: 120,
    icon: 'Flame'
  }
];

/**
 * Check if the user is returning after inactivity (2+ days without guilt)
 */
export function checkUserWelcomeBackStatus(userProfile: UserProfile): {
  isWelcomeBack: boolean;
  welcomeMessageUrdu: string;
  welcomeMessageEn: string;
} {
  const lastDate = userProfile.dailyJourneyProgress?.lastCompletedDate;
  if (!lastDate) {
    return {
      isWelcomeBack: false,
      welcomeMessageUrdu: 'خوش آمدید! آج کا سفر شروع کریں۔',
      welcomeMessageEn: 'Welcome! Begin today’s smart journey.'
    };
  }

  const lastTime = new Date(lastDate).getTime();
  const now = new Date().getTime();
  const diffDays = Math.floor((now - lastTime) / (1000 * 60 * 60 * 24));

  if (diffDays >= 2) {
    return {
      isWelcomeBack: true,
      welcomeMessageUrdu: 'خوش آمدید! ہر نیا دن نئی شروعات ہے۔ آج کا سفر آپ کے لیے پرسکون اور آسان رکھا گیا ہے۔',
      welcomeMessageEn: 'Welcome back! Every day is a fresh start. Today’s journey is designed to be gentle and refreshing.'
    };
  }

  return {
    isWelcomeBack: false,
    welcomeMessageUrdu: 'ماشاءاللہ! آپ کا روزانہ سیکھنے کا تسلسل جاری ہے۔',
    welcomeMessageEn: 'Masha’Allah! Your daily learning momentum continues.'
  };
}

/**
 * Generate a personalized Daily Smart Journey combining:
 * 1. Learn (One short lesson)
 * 2. Practice (One practical skill activity)
 * 3. Act (One real-life mission)
 * 4. Reflect (One Quran/Hadith moral reflection)
 * 5. Complete (Celebration + Progress update)
 */
export function generateDailySmartJourney(
  userProfile: UserProfile,
  timeLength: JourneyTimeLength = '20m'
): DailySmartJourney {
  const todayStr = new Date().toISOString().split('T')[0];
  const completedLessonIds = userProfile.completedLessonIds || [];
  const completedMissions = userProfile.completedMissionIds || [];
  const journeyProgress = userProfile.dailyJourneyProgress || {
    consecutiveJourneyDays: 0,
    completedJourneyCount: 0
  };

  const welcomeStatus = checkUserWelcomeBackStatus(userProfile);
  
  // Determine difficulty level
  let difficultyLevel: 'gentle' | 'standard' | 'advanced' = 'standard';
  if (welcomeStatus.isWelcomeBack || journeyProgress.completedJourneyCount < 2) {
    difficultyLevel = 'gentle';
  } else if (journeyProgress.consecutiveJourneyDays >= 3 || journeyProgress.completedJourneyCount >= 5) {
    difficultyLevel = 'advanced';
  }

  // Time split calculations
  let learnMinutes = 5;
  let practiceMinutes = 5;
  let actMinutes = 7;
  let reflectMinutes = 3;
  let totalMinutes = 20;
  let totalPoints = 50;

  if (timeLength === '10m') {
    learnMinutes = 3;
    practiceMinutes = 2;
    actMinutes = 3;
    reflectMinutes = 2;
    totalMinutes = 10;
    totalPoints = 30;
  } else if (timeLength === '30m') {
    learnMinutes = 10;
    practiceMinutes = 8;
    actMinutes = 8;
    reflectMinutes = 4;
    totalMinutes = 30;
    totalPoints = 75;
  } else if (timeLength === '60m+') {
    learnMinutes = 20;
    practiceMinutes = 18;
    actMinutes = 15;
    reflectMinutes = 7;
    totalMinutes = 60;
    totalPoints = 120;
  }

  // -------------------------------------------------------------
  // STEP 1: LEARN (سیکھیں - Personalized from Personal Learning Path)
  // -------------------------------------------------------------
  const personalizedResult = getPersonalizedCourseForUser(userProfile, COURSES_DATA);
  
  let courseId = 'character-community-service';
  let courseTitleUrdu = 'کمیونٹی سروس اور برادری کی فلاح';
  let courseTitleEn = 'Community Service & Social Uplift';
  let lessonId = 'char-l1';
  let lessonTitleUrdu = '1. کمیونٹی کے مسئلے کو سمجھنا اور خدمتِ خلق کا جذبہ';
  let lessonTitleEn = '1. Understanding Community Needs & Spirit of Service';
  let keyConceptUrdu = 'اس سبق کا بنیادی نکتہ روزمرہ زندگی اور برادری میں مثبت کردار ادا کرنا ہے۔';
  let keyConceptEn = 'The core takeaway is practical positive action and service in your daily routine.';
  let takeawayUrdu = 'ایک وقت میں ایک چیز پر توجہ دیں اور نیت کے اخلاص کے ساتھ عمل کریں۔';
  let takeawayEn = 'Focus on one specific action with sincere intent and practice it immediately.';

  if (personalizedResult.course && personalizedResult.lesson) {
    const { course, lesson } = personalizedResult;
    courseId = course.id;
    courseTitleUrdu = course.titleUrdu;
    courseTitleEn = course.titleEn;
    lessonId = lesson.id;
    lessonTitleUrdu = lesson.titleUrdu;
    lessonTitleEn = lesson.titleEn;
    keyConceptUrdu = lesson.keyTakeawaysUrdu?.[0] || keyConceptUrdu;
    keyConceptEn = lesson.keyTakeawaysEn?.[0] || keyConceptEn;
    takeawayUrdu = lesson.keyTakeawaysUrdu?.[1] || lesson.keyTakeawaysUrdu?.[0] || takeawayUrdu;
    takeawayEn = lesson.keyTakeawaysEn?.[1] || lesson.keyTakeawaysEn?.[0] || takeawayEn;
  } else if (personalizedResult.isContentPending) {
    courseId = `pending-${personalizedResult.primaryGoalId}`;
    courseTitleUrdu = personalizedResult.primaryGoalLabelUrdu;
    courseTitleEn = personalizedResult.primaryGoalLabelEn;
    lessonId = `pending-l1`;
    lessonTitleUrdu = personalizedResult.fallbackMessageUrdu;
    lessonTitleEn = personalizedResult.fallbackMessageEn;
    keyConceptUrdu = personalizedResult.fallbackMessageUrdu;
    keyConceptEn = personalizedResult.fallbackMessageEn;
  }

  const learnStep = {
    courseId,
    courseTitleUrdu,
    courseTitleEn,
    lessonId,
    lessonTitleUrdu,
    lessonTitleEn,
    keyConceptUrdu,
    keyConceptEn,
    takeawayUrdu,
    takeawayEn,
    estimatedMinutes: learnMinutes
  };

  // -------------------------------------------------------------
  // STEP 2: PRACTICE (مشق کریں - Connected to Lesson Practical Task)
  // -------------------------------------------------------------
  const skillLessonIndex = (journeyProgress.completedJourneyCount || 0) % (PRACTICAL_LIFE_LESSONS.length || 1);
  const selectedLifeLesson = PRACTICAL_LIFE_LESSONS[skillLessonIndex] || PRACTICAL_LIFE_LESSONS[0];
  const lessonTask = personalizedResult.lesson?.practicalTask;

  const practiceStep = {
    titleUrdu: lessonTask?.titleUrdu || selectedLifeLesson.titleUrdu,
    titleEn: lessonTask?.titleEn || selectedLifeLesson.titleEn,
    instructionUrdu: lessonTask?.instructionsUrdu || selectedLifeLesson.applyActionUrdu || selectedLifeLesson.practiceScenarioUrdu || 'آج کے سیکھے ہوئے ہنر کو اپنے معمول میں 5 منٹ آزما کر دیکھیں۔',
    instructionEn: lessonTask?.instructionsEn || selectedLifeLesson.applyActionEn || selectedLifeLesson.practiceScenarioEn || 'Apply the learned concept practically on your device or workspace for 5 minutes.',
    practicalToolUrdu: lessonTask?.deliverableUrdu || selectedLifeLesson.tagUrdu || 'روزمرہ عمل',
    practicalToolEn: lessonTask?.deliverableEn || selectedLifeLesson.tagEn || 'Daily Practice',
    estimatedMinutes: practiceMinutes,
    points: Math.round(totalPoints * 0.3)
  };

  // -------------------------------------------------------------
  // STEP 3: ACT (عمل کریں - Real Life Mission)
  // -------------------------------------------------------------
  // Pick a real-life mission tailored to the user
  const mission = getPersonalizedMission(
    userProfile, 
    undefined, 
    difficultyLevel === 'gentle' ? 'simple' : (difficultyLevel === 'advanced' ? 'advanced' : 'standard')
  );

  const actStep = {
    missionId: mission.id,
    missionTitleUrdu: mission.titleUrdu,
    missionTitleEn: mission.titleEn,
    categoryUrdu: mission.categoryUrdu,
    categoryEn: mission.categoryEn,
    whyItMattersUrdu: mission.whyItMattersUrdu,
    whyItMattersEn: mission.whyItMattersEn,
    actionUrdu: mission.actionUrdu,
    actionEn: mission.actionEn,
    estimatedMinutes: actMinutes,
    points: mission.points || Math.round(totalPoints * 0.4)
  };

  // -------------------------------------------------------------
  // STEP 4: REFLECT (غور کریں - Quran & Hadith Guidance)
  // -------------------------------------------------------------
  // Pick an authentic Islamic lesson for reflection
  const islamicLessonIdx = (journeyProgress.completedJourneyCount || 0) % ISLAMIC_LESSONS_DATA.length;
  const islamicLesson = ISLAMIC_LESSONS_DATA[islamicLessonIdx] || ISLAMIC_LESSONS_DATA[0];

  const reflectStep = {
    themeUrdu: islamicLesson.themeUrdu,
    themeEn: islamicLesson.themeEn,
    quranUrdu: islamicLesson.quranGuidance?.translationUrdu,
    quranEn: islamicLesson.quranGuidance?.translationEn,
    quranRef: islamicLesson.quranGuidance?.surahAndAyahUrdu,
    hadithUrdu: islamicLesson.hadithGuidance?.textUrdu,
    hadithEn: islamicLesson.hadithGuidance?.textEn,
    hadithRef: islamicLesson.hadithGuidance?.sourceReferenceUrdu,
    moralTakeawayUrdu: islamicLesson.hadithGuidance?.explanationUrdu || islamicLesson.quranGuidance?.practicalMoralExplanationUrdu || 'کردار اور اخلاص انسان کی حقیقی کامیابی ہیں۔',
    moralTakeawayEn: islamicLesson.hadithGuidance?.explanationEn || islamicLesson.quranGuidance?.practicalMoralExplanationEn || 'Moral character and sincerity are true human success.',
    reflectionPromptUrdu: 'آج کے اس عمل یا سیکھنے سے آپ نے اپنے دل میں کیا تبدیلی محسوس کی؟',
    reflectionPromptEn: 'What positive change or feeling did you experience from today’s action?',
    estimatedMinutes: reflectMinutes
  };

  return {
    id: `journey-${todayStr}-${timeLength}`,
    dateStr: todayStr,
    timeLength,
    totalEstimatedMinutes: totalMinutes,
    totalPoints,
    isWelcomeBack: welcomeStatus.isWelcomeBack,
    difficultyLevel,
    learnStep,
    practiceStep,
    actStep,
    reflectStep
  };
}

/**
 * Check if the user has completed their daily smart journey today
 */
export function isDailyJourneyCompletedToday(userProfile: UserProfile): boolean {
  const todayStr = new Date().toISOString().split('T')[0];
  const lastCompleted = userProfile.dailyJourneyProgress?.lastCompletedDate;
  return lastCompleted === todayStr;
}
