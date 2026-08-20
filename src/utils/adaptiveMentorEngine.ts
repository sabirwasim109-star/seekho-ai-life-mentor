import {
  UserProfile,
  Language,
  Course,
  Lesson,
  AdaptiveMentorInsight,
  MentorPriorityAction,
  MentorDifficultyState,
} from '../types';
import { COURSES_DATA } from '../data/mockData';
import { ISLAMIC_LESSONS_DATA } from '../data/islamicGuidanceData';
import { PRACTICAL_LIFE_LESSONS } from '../data/practicalLifeSkillsData';
import { MENTOR_CHALLENGES } from '../data/mentorChallengesData';
import { GOOD_DEEDS_DATA, getPersonalImpactRecords } from '../data/goodDeedsData';
import { generateLifeRoadmap } from '../data/lifeRoadmapData';

/**
 * 🧭 ADAPTIVE PERSONALIZATION & MENTOR ENGINE FOR SEEKHO (استاد سیکھو)
 * 
 * Synthesizes 14 real learner dimensions:
 * 1. Age Group (10-15, 16-25, 26-45, 46-60, 61+)
 * 2. Education Level (Primary, Matric, Intermediate, Graduate, Informal)
 * 3. Current Occupation & Background
 * 4. Stated Skills & Competence Levels
 * 5. Learning Interests & Domain Focus
 * 6. Goals (Halal livelihood, Self-discipline, Family responsibility, Community)
 * 7. Available Learning Time (10-15m, 30m, 1h, 2h+)
 * 8. Course Progress (Enrolled courses, completed lessons, unfinished items)
 * 9. Quiz Performance (Mistakes count, accuracy, conceptual confusion)
 * 10. Completed Missions & Reflections (Hands-on field tasks)
 * 11. Character & Islamic Development (Verified Quran/Hadith lessons, reflections)
 * 12. Life Roadmap Diagnostics (Weakest/lowest development area)
 * 13. Daily Smart Journey Progress (Streak, completion, timing)
 * 14. My Impact (Logged good deeds, family/community/environmental actions)
 * 
 * DECIDES WHAT IS MOST USEFUL FOR THE LEARNER RIGHT NOW:
 * - Prioritizes ONLY ONE primary recommendation ("آپ کے لیے ابھی سب سے اہم قدم")
 * - Generates a clear, 1-sentence reason ("یہ آپ کے لیے کیوں تجویز کیا گیا؟")
 * - Connects to the full learning loop: Learn -> Practice -> Mission -> Reflection -> Progress
 * - Optionally provides up to 2 secondary recommendations
 */

export function generateAdaptiveMentorInsight(
  userProfile: UserProfile,
  language: Language = 'ur'
): AdaptiveMentorInsight {
  const isUrdu = language === 'ur';

  // ---------------------------------------------------------------------------
  // 1. Gather Real Learner Progress & Activity Data
  // ---------------------------------------------------------------------------
  const enrolledCourseIds = userProfile.enrolledCourseIds || [];
  const completedLessonIds = userProfile.completedLessonIds || [];
  const completedLifeSkillLessonIds = userProfile.completedLifeSkillLessonIds || [];
  const completedIslamicLessonIds = userProfile.completedIslamicLessonIds || [];
  const completedIslamicChallengeIds = userProfile.completedIslamicChallengeIds || [];
  const completedGoodDeedIds = userProfile.completedGoodDeedIds || [];
  const completedGrowthTaskIds = userProfile.completedGrowthTaskIds || [];
  const completedMissionIds = userProfile.completedMissionIds || [];
  const reflectionsCount = Object.keys(userProfile.islamicReflections || {}).length +
    Object.keys(userProfile.lifeSkillReflections || {}).length +
    Object.keys(userProfile.missionReflections || {}).length;
  const streak = userProfile.streakDays || 0;
  const points = userProfile.points || 0;
  const quizMistakes = userProfile.quizMistakeRecords || {};
  const personalImpactRecords = getPersonalImpactRecords();

  // Find active course or default to first
  const activeCourse: Course = 
    COURSES_DATA.find((c) => enrolledCourseIds.includes(c.id)) || COURSES_DATA[0];
  
  // Find next unfinished lesson in active course
  const nextUnfinishedLesson: Lesson | undefined = 
    activeCourse.lessons.find((l) => !completedLessonIds.includes(l.id)) || activeCourse.lessons[0];

  // Total mistake count across quizzes
  const totalMistakeCount = Object.values(quizMistakes).reduce((acc, curr) => acc + curr, 0);

  // ---------------------------------------------------------------------------
  // 2. Demographic & Availability Profile
  // ---------------------------------------------------------------------------
  const ageGroup = userProfile.ageGroup || '16-25';
  const education = userProfile.assessmentData?.educationLevel || userProfile.educationLevel || 'General';
  const dailyTime = userProfile.growthDailyTimePreference || userProfile.timePerDay || '15m';
  const occupation = userProfile.currentOccupation || userProfile.assessmentData?.currentOccupation || 'Learner';
  const primaryGoal = userProfile.goals || userProfile.assessmentData?.primaryGoal || (isUrdu ? 'رزقِ حلال اور ہنر مندی' : 'Halal Livelihood & Skills');

  let dailyTimeQuotaUrdu = 'روزانہ ۱۵ منٹ';
  let dailyTimeQuotaEn = '15 mins / day';
  if (dailyTime === '30m') {
    dailyTimeQuotaUrdu = 'روزانہ ۳۰ منٹ';
    dailyTimeQuotaEn = '30 mins / day';
  } else if (dailyTime === '1h') {
    dailyTimeQuotaUrdu = 'روزانہ ۱ گھنٹہ';
    dailyTimeQuotaEn = '1 hour / day';
  } else if (dailyTime === '2h+') {
    dailyTimeQuotaUrdu = 'روزانہ ۱ سے ۲ گھنٹے';
    dailyTimeQuotaEn = '1 to 2 hours / day';
  }

  // ---------------------------------------------------------------------------
  // 3. Determine Difficulty & Learner State
  // ---------------------------------------------------------------------------
  let difficultyState: MentorDifficultyState = 'balanced';
  if (totalMistakeCount >= 2 || (Object.keys(quizMistakes).length > 0 && completedLessonIds.length === 0)) {
    difficultyState = 'revision_simplified';
  } else if (streak >= 3 && completedLessonIds.length >= 2 && totalMistakeCount === 0) {
    difficultyState = 'advanced_challenge';
  }

  // Evaluate Life Roadmap diagnostic
  const roadmap = generateLifeRoadmap(userProfile);
  const lowestRoadmapArea = [...roadmap.areas].sort((a, b) => a.progressPercentage - b.progressPercentage)[0];

  // ---------------------------------------------------------------------------
  // 4. Determine Teaching Style & Tone
  // ---------------------------------------------------------------------------
  let audienceTierUrdu = 'نوجوان و متلاشی';
  let audienceTierEn = 'Young Adult & Seeker';
  let toneUrdu = 'عملی و روزگار پر مبنی شفیق رہنمائی';
  let toneEn = 'Practical & career-focused mentorship';

  if (ageGroup === '10-15') {
    audienceTierUrdu = 'ابتدائی طالب علم (۱۰-۱۵ سال)';
    audienceTierEn = 'Junior Learner (10-15 yrs)';
    toneUrdu = 'حوصلہ افزا، آسان تمثیلات اور بنیادی اخلاقیات';
    toneEn = 'Encouraging, relatable analogies, and foundational values';
  } else if (ageGroup === '46-60' || ageGroup === '61-70' || ageGroup === '70+') {
    audienceTierUrdu = 'محترم بزرگ و تجربہ کار (۴۶+ سال)';
    audienceTierEn = 'Respected Senior & Elder (46+ yrs)';
    toneUrdu = 'باوقار، پرسکون رفتار، خاندانی دانائی اور مستقل مزاجی';
    toneEn = 'Dignified, serene pacing, family wisdom, and lifelong discipline';
  } else if (ageGroup === '26-45') {
    audienceTierUrdu = 'برسرِ روزگار و گھریلو سرپرست (۲۶-۴۵ سال)';
    audienceTierEn = 'Working Adult & Family Head (26-45 yrs)';
    toneUrdu = 'بجٹ، کاروباری نفاست، گھریلو ذمہ داری اور موثر وقت کا انتظام';
    toneEn = 'Budgeting, business efficiency, family care, and time mastery';
  }

  const difficultyBadgeUrdu = difficultyState === 'revision_simplified'
    ? 'آسان مشق و نظر ثانی'
    : difficultyState === 'advanced_challenge'
    ? 'اعلیٰ سطح کا عملی چیلنج'
    : 'متوازن پیش رفت';

  const difficultyBadgeEn = difficultyState === 'revision_simplified'
    ? 'Simplified Review'
    : difficultyState === 'advanced_challenge'
    ? 'Advanced Practice'
    : 'Balanced Pace';

  // ---------------------------------------------------------------------------
  // 5. Positive Strengths (What they are doing well)
  // ---------------------------------------------------------------------------
  const doingWellPointsUrdu: string[] = [];
  const doingWellPointsEn: string[] = [];

  if (streak >= 2) {
    doingWellPointsUrdu.push(`تسلسل کا مظاہرہ: آپ کا ${streak} دن کا روزانہ سیکھنے کا تسلسل قابلِ تحسین ہے۔`);
    doingWellPointsEn.push(`Consistency: Your active ${streak}-day daily learning streak is commendable.`);
  } else {
    doingWellPointsUrdu.push(`سیکھنے کا آغاز: آپ نے سنجیدگی سے اپنے لیے وقت نکال کر روزانہ سیکھنے کا آغاز کیا۔`);
    doingWellPointsEn.push(`Active Initiative: Dedicated meaningful daily time towards self-improvement.`);
  }

  if (personalImpactRecords.length > 0 || completedGoodDeedIds.length > 0) {
    doingWellPointsUrdu.push(`مثبت اثر: خاندان اور برادری میں ${personalImpactRecords.length + completedGoodDeedIds.length} عملی اچھے کام انجام دیے۔`);
    doingWellPointsEn.push(`Positive Impact: Completed ${personalImpactRecords.length + completedGoodDeedIds.length} practical good actions for family & community.`);
  }

  if (completedLessonIds.length > 0) {
    doingWellPointsUrdu.push(`ہنر کی پیش رفت: کورس "${activeCourse.titleUrdu}" کے اسباق میں تسلسل سے آگے بڑھ رہے ہیں۔`);
    doingWellPointsEn.push(`Skill Advancement: Progressing through "${activeCourse.titleEn}".`);
  }

  const doingWellUrdu = isUrdu
    ? `ماشاءاللہ! آپ نے اپنے ہنر، کردار اور وقت کی حفاظت کے لیے مضبوط بنیاد رکھی ہے۔`
    : `Masha'Allah! You have established a solid foundation in daily learning, positive habits, and practical skills.`;
  const doingWellEn = `Masha'Allah! You have established a solid foundation in daily learning, positive habits, and practical skills.`;

  // ---------------------------------------------------------------------------
  // 6. Areas for Improvement (What needs improvement)
  // ---------------------------------------------------------------------------
  const needsImprovementPointsUrdu: string[] = [];
  const needsImprovementPointsEn: string[] = [];

  if (difficultyState === 'revision_simplified') {
    needsImprovementPointsUrdu.push(`تصورات کی وضاحت: کوئز کے مشکل سوالات پر ۵ منٹ کی پرسکون دہرائی کریں۔`);
    needsImprovementPointsEn.push(`Clarify Concepts: Spend 5 calm minutes reviewing tricky quiz concepts.`);
  } else if (completedLifeSkillLessonIds.length === 0) {
    needsImprovementPointsUrdu.push(`مالیاتی شعور: روزانہ کی آمدن و خرچ کو ایک کاپی پر باقاعدگی سے لکھنے کی عادت ڈالیں۔`);
    needsImprovementPointsEn.push(`Financial Awareness: Build a habit of recording daily expenses in a notebook.`);
  } else if (reflectionsCount === 0) {
    needsImprovementPointsUrdu.push(`خود احتسابی: سبق مکمل کر کے ۱ منٹ سوچیں کہ یہ ہنر عملی زندگی میں کیسے کام آئے گا۔`);
    needsImprovementPointsEn.push(`Self Reflection: Spend 1 minute reflecting on how this skill applies in real life.`);
  } else {
    needsImprovementPointsUrdu.push(`عملی نمونہ سازی: سیکھے گئے ٹول سے اپنا پہلا اصلی نمونہ (Deliverable) بنائیں۔`);
    needsImprovementPointsEn.push(`Deliverable Creation: Build your first real deliverable using your learned tools.`);
  }

  const needsImprovementUrdu = difficultyState === 'revision_simplified'
    ? `کوئی پریشانی کی بات نہیں! غلطیوں سے سیکھنا ہی حقیقی کاریگر بناتا ہے۔`
    : `اپنی پیش رفت کو پائیدار بنانے کے لیے اس ایک نقطے پر توجہ دیں۔`;
  const needsImprovementEn = difficultyState === 'revision_simplified'
    ? `Mistakes are natural stepping stones to mastery. A quick gentle review will make everything clear.`
    : `To sustain your growth, keep this one core habit in focus.`;

  // ---------------------------------------------------------------------------
  // 7. DECIDE THE SINGLE HIGHEST PRIORITY RECOMMENDATION
  // "آپ کے لیے ابھی سب سے اہم قدم"
  // ---------------------------------------------------------------------------
  let highestPriorityNextStep: MentorPriorityAction;
  let recommendationReasonUrdu = '';
  let recommendationReasonEn = '';
  let learningLoopStageUrdu = 'سیکھیں → مشق کریں → مشن → غور و فکر → پیش رفت';
  let learningLoopStageEn = 'Learn → Practice → Mission → Reflection → Progress';

  if (difficultyState === 'revision_simplified') {
    // Condition 1: Learner made mistakes -> simplify and review
    highestPriorityNextStep = {
      id: `priority-rev-${activeCourse.id}`,
      titleUrdu: `آسان نظر ثانی: ${activeCourse.titleUrdu}`,
      titleEn: `Gentle Review: ${activeCourse.titleEn}`,
      categoryUrdu: 'آسان فہم و نظر ثانی',
      categoryEn: 'Gentle Concept Review',
      estimatedMinutes: 5,
      points: 20,
      whyUrdu: `کیونکہ پچھلے کوئز میں کچھ غلطیاں ہوئیں، اس لیے یہ ۵ منٹ کی آسان دہرائی آپ کے تصورات کو بالکل واضح کر دے گی۔`,
      whyEn: `Because recent quiz questions showed minor confusion, this 5-minute review will clarify the concepts with ease.`,
      practicalActionUrdu: `سبق کے بنیادی خاکے کو دوبارہ دیکھیں اور صرف ۱ اہم نکتہ کاپی پر لکھیں۔`,
      practicalActionEn: `Revisit the simple summary and write 1 core takeaway in your notebook.`,
      targetType: 'quiz_review',
      targetCourseId: activeCourse.id,
      targetLessonId: nextUnfinishedLesson?.id,
      difficultyState: 'revision_simplified',
    };
    recommendationReasonUrdu = `کیونکہ پچھلے کوئز کی دہرائی آپ کو اگلے اسباق میں کسی الجھن کے بغیر آسانی سے آگے بڑھنے میں مدد دے گی۔`;
    recommendationReasonEn = `Because reviewing recent tricky questions ensures you build confidence without confusion.`;
    learningLoopStageUrdu = 'مشق و نظر ثانی (Practice & Review)';
    learningLoopStageEn = 'Practice & Review';
  } else if (difficultyState === 'advanced_challenge') {
    // Condition 2: Consistent learner doing very well -> real-world deliverable
    highestPriorityNextStep = {
      id: `priority-challenge-${activeCourse.id}`,
      titleUrdu: `عملی چیلنج: ${activeCourse.titleUrdu} کا حقیقی نمونہ تیار کرنا`,
      titleEn: `Hands-on Challenge: Build Real Sample in ${activeCourse.titleEn}`,
      categoryUrdu: 'اعلیٰ عملی مشق',
      categoryEn: 'Advanced Practical Challenge',
      estimatedMinutes: Math.min(20, dailyTime === '15m' ? 15 : 20),
      points: 40,
      whyUrdu: `کیونکہ آپ کا تعلیمی تسلسل اور کارکردگی بہترین ہے، اس لیے یہ عملی چیلنج آپ کی مہارت کو اگلے درجے پر لے جائے گا۔`,
      whyEn: `Because your streak and quiz performance are excellent, this challenge transitions your skill into real-world output.`,
      practicalActionUrdu: `اپنے موبائل یا کمپیوٹر پر ایک مکمل عملی ڈیزائن، آڈیو یا بجٹ شیٹ بنا کر محفوظ کریں۔`,
      practicalActionEn: `Create and save 1 complete functional sample design, audio note, or budget sheet.`,
      targetType: 'challenge',
      targetCourseId: activeCourse.id,
      targetLessonId: nextUnfinishedLesson?.id,
      difficultyState: 'advanced_challenge',
    };
    recommendationReasonUrdu = `کیونکہ آپ کی مسلسل کامیابی کے بعد اب وقت ہے کہ اپنے ہنر سے ایک ٹھوس عملی نتیجہ تیار کریں۔`;
    recommendationReasonEn = `Because your consistent mastery makes you ready to produce tangible real-world work.`;
    learningLoopStageUrdu = 'مشن و عملی اطلاق (Mission & Real Application)';
    learningLoopStageEn = 'Mission & Real Application';
  } else if (lowestRoadmapArea && lowestRoadmapArea.progressPercentage < 25 && lowestRoadmapArea.id === 'money_finance') {
    // Condition 3: Life Roadmap shows money/finance awareness needs support
    const lifeLesson = PRACTICAL_LIFE_LESSONS[0];
    highestPriorityNextStep = {
      id: `priority-roadmap-finance-${lifeLesson.id}`,
      titleUrdu: `${lifeLesson.titleUrdu}`,
      titleEn: `${lifeLesson.titleEn}`,
      categoryUrdu: 'مالیاتی شعور و حلال کمائی',
      categoryEn: 'Financial Awareness & Halal Living',
      estimatedMinutes: 10,
      points: 25,
      whyUrdu: `کیونکہ آپ کے لائف روڈ میپ کے مطابق مالیاتی شعور اور بجٹ سازی اس وقت آپ کی سب سے مفید ضرورت ہے۔`,
      whyEn: `Because your Life Roadmap highlights budgeting discipline as a high-value priority for your current goals.`,
      practicalActionUrdu: `آج کے ۳ چھوٹے گھریلو اخراجات نوٹ کریں اور فضول خرچی سے بچاؤ کا اصول آزمائیں۔`,
      practicalActionEn: `Write down 3 daily expenses and apply the 24-hour pause on impulse buying.`,
      targetType: 'life_skill',
      targetLifeSkillId: lifeLesson.id,
      difficultyState: 'balanced',
    };
    recommendationReasonUrdu = `کیونکہ آپ کے لائف روڈ میپ کے تجزیے کے مطابق اس شعبے میں بنیادی نظم و ضبط لانا آپ کی سب سے اہم ضرورت ہے۔`;
    recommendationReasonEn = `Because your Life Roadmap diagnostic identifies financial discipline as the highest-impact area right now.`;
    learningLoopStageUrdu = 'سیکھیں و مشق کریں (Learn & Practice)';
    learningLoopStageEn = 'Learn & Practice';
  } else {
    // Condition 4: Next core lesson progression respecting available time
    highestPriorityNextStep = {
      id: `priority-lesson-${nextUnfinishedLesson?.id || activeCourse.id}`,
      titleUrdu: nextUnfinishedLesson ? nextUnfinishedLesson.titleUrdu : activeCourse.titleUrdu,
      titleEn: nextUnfinishedLesson ? nextUnfinishedLesson.titleEn : activeCourse.titleEn,
      categoryUrdu: activeCourse.categoryUrdu || 'عملی ہنر',
      categoryEn: activeCourse.category || 'Practical Skill',
      estimatedMinutes: nextUnfinishedLesson?.durationMinutes || 12,
      points: 25,
      whyUrdu: `کیونکہ یہ آپ کے منتخب ہدف (${primaryGoal}) اور روزانہ وقت (${dailyTimeQuotaUrdu}) کے عین مطابق اگلا قدم ہے۔`,
      whyEn: `Because this directly matches your target (${primaryGoal}) and fits within your daily available time (${dailyTimeQuotaEn}).`,
      practicalActionUrdu: `سبق کے اہم نکات سنیں اور دیے گئے عملی کام کو موبائل پر ۵ منٹ میں مکمل کریں۔`,
      practicalActionEn: `Complete the lesson takeaways and test the 5-minute hands-on practice.`,
      targetType: 'lesson',
      targetCourseId: activeCourse.id,
      targetLessonId: nextUnfinishedLesson?.id,
      difficultyState: 'balanced',
    };
    recommendationReasonUrdu = `کیونکہ آپ نے پچھلا مرحلہ مکمل کیا ہے اور یہ آپ کے روزانہ وقت (${dailyTimeQuotaUrdu}) کے عین مطابق ہے۔`;
    recommendationReasonEn = `Because you successfully finished the previous step and this perfectly fits your ${dailyTimeQuotaEn} routine.`;
    learningLoopStageUrdu = 'سیکھیں اور آگے بڑھیں (Learn & Progress)';
    learningLoopStageEn = 'Learn & Progress';
  }

  // ---------------------------------------------------------------------------
  // 8. OPTIONAL SECONDARY RECOMMENDATIONS (Up to 2)
  // ---------------------------------------------------------------------------
  const secondaryRecommendations: MentorPriorityAction[] = [];

  // Secondary 1: Character & Verified Islamic Action / Good Deed
  const islamicLesson = ISLAMIC_LESSONS_DATA[
    Math.min(completedIslamicLessonIds.length, ISLAMIC_LESSONS_DATA.length - 1)
  ] || ISLAMIC_LESSONS_DATA[0];

  secondaryRecommendations.push({
    id: `sec-islamic-${islamicLesson.id}`,
    titleUrdu: islamicLesson.themeUrdu,
    titleEn: islamicLesson.themeEn,
    categoryUrdu: 'اخلاق و بندگی',
    categoryEn: 'Character & Ethics',
    estimatedMinutes: 5,
    points: 15,
    whyUrdu: `روزمرہ معاملات میں سچائی، امانت داری اور حسنِ اخلاق کی مستند رہنمائی۔`,
    whyEn: `Verified authentic guidance on truthfulness, trust, and noble character.`,
    practicalActionUrdu: islamicLesson.practicalAction.actionUrdu,
    practicalActionEn: islamicLesson.practicalAction.actionEn,
    targetType: 'islamic',
    difficultyState: 'balanced',
  });

  // Secondary 2: Practical Life Skill / Real-Life Practice
  const lifeLesson = PRACTICAL_LIFE_LESSONS[
    Math.min(completedLifeSkillLessonIds.length, PRACTICAL_LIFE_LESSONS.length - 1)
  ] || PRACTICAL_LIFE_LESSONS[0];

  secondaryRecommendations.push({
    id: `sec-life-${lifeLesson.id}`,
    titleUrdu: lifeLesson.titleUrdu,
    titleEn: lifeLesson.titleEn,
    categoryUrdu: 'عملی زندگی کی مہارت',
    categoryEn: 'Practical Life Skill',
    estimatedMinutes: 10,
    points: 20,
    whyUrdu: `گفتگو، وقت کے انتظام اور روزمرہ مسائل کے حل کا آسان عملی طریقہ۔`,
    whyEn: `Practical actionable framework for communication, time, and problem-solving.`,
    practicalActionUrdu: lifeLesson.applyActionUrdu,
    practicalActionEn: lifeLesson.applyActionEn,
    targetType: 'life_skill',
    targetLifeSkillId: lifeLesson.id,
    difficultyState: 'balanced',
  });

  // ---------------------------------------------------------------------------
  // 9. ONE Practical Action for Today (5-10 mins)
  // ---------------------------------------------------------------------------
  const practicalActionToday = {
    titleUrdu: isUrdu ? 'آج کا ایک فوری عملی قدم (۵ منٹ)' : "Today's 5-Minute Practical Step",
    titleEn: "Today's 5-Minute Practical Step",
    descriptionUrdu: highestPriorityNextStep.practicalActionUrdu,
    descriptionEn: highestPriorityNextStep.practicalActionEn,
    estimatedMinutes: 5,
    points: 15,
    stepsUrdu: [
      'اپنا فون یا کاپی اٹھائیں اور نوٹیفکیشن سائلنٹ کریں۔',
      'سبق کا بنیادی ٹول یا فارمولا آزمائیں (مثلاً ایک خرچ نوٹ کرنا یا ایک جملہ لکھنا)۔',
      'مکمل کر کے اطمینان محسوس کریں۔',
    ],
    stepsEn: [
      'Silence notifications for 5 uninterrupted minutes.',
      'Test the primary concept directly (e.g. noting an expense or writing a line).',
      'Mark as completed and feel the progress.',
    ],
  };

  // ---------------------------------------------------------------------------
  // 10. ONE Small Challenge
  // ---------------------------------------------------------------------------
  const firstUnfinishedChallenge = MENTOR_CHALLENGES.find(
    (c) => !completedGrowthTaskIds.includes(c.id)
  ) || MENTOR_CHALLENGES[0];

  const smallChallenge = {
    id: firstUnfinishedChallenge.id,
    titleUrdu: firstUnfinishedChallenge.titleUrdu,
    titleEn: firstUnfinishedChallenge.titleEn,
    categoryUrdu: firstUnfinishedChallenge.categoryUrdu,
    categoryEn: firstUnfinishedChallenge.categoryEn,
    actionUrdu: firstUnfinishedChallenge.actionUrdu,
    actionEn: firstUnfinishedChallenge.actionEn,
    estimatedMinutes: firstUnfinishedChallenge.estimatedMinutes,
    points: firstUnfinishedChallenge.points,
    badgeUrdu: firstUnfinishedChallenge.badgeNameUrdu,
    badgeEn: firstUnfinishedChallenge.badgeNameEn,
  };

  // ---------------------------------------------------------------------------
  // 11. Authentic Quran & Hadith Guidance (Verified Sources Only)
  // ---------------------------------------------------------------------------
  const verifiedGuidance = {
    quranTextUrdu: islamicLesson.quranGuidance.translationUrdu,
    quranTextEn: islamicLesson.quranGuidance.translationEn,
    quranSurahAndAyah: isUrdu 
      ? islamicLesson.quranGuidance.surahAndAyahUrdu 
      : islamicLesson.quranGuidance.surahAndAyahEn,
    hadithTextUrdu: islamicLesson.hadithGuidance.textUrdu,
    hadithTextEn: islamicLesson.hadithGuidance.textEn,
    hadithSource: isUrdu 
      ? islamicLesson.hadithGuidance.sourceReferenceUrdu 
      : islamicLesson.hadithGuidance.sourceReferenceEn,
    moralTakeawayUrdu: islamicLesson.hadithGuidance.explanationUrdu,
    moralTakeawayEn: islamicLesson.hadithGuidance.explanationEn,
  };

  return {
    doingWellUrdu,
    doingWellEn,
    doingWellKeyPointsUrdu: doingWellPointsUrdu,
    doingWellKeyPointsEn: doingWellPointsEn,
    needsImprovementUrdu,
    needsImprovementEn,
    needsImprovementKeyPointsUrdu: needsImprovementPointsUrdu,
    needsImprovementKeyPointsEn: needsImprovementPointsEn,
    highestPriorityNextStep,
    secondaryRecommendations,
    recommendationReasonUrdu,
    recommendationReasonEn,
    learningLoopStageUrdu,
    learningLoopStageEn,
    practicalActionToday,
    smallChallenge,
    verifiedGuidance,
    teachingStyle: {
      audienceTierUrdu,
      audienceTierEn,
      toneUrdu,
      toneEn,
      difficultyState,
      difficultyBadgeUrdu,
      difficultyBadgeEn,
      dailyTimeQuotaUrdu,
      dailyTimeQuotaEn,
    },
  };
}
