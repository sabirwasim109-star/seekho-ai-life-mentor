import { Course, Lesson, UserProfile } from '../types';
import { COURSES_DATA } from '../data/mockData';

export interface PersonalizedCourseResult {
  course: Course | null;
  lesson: Lesson | null;
  lessonIndex: number;
  isStage1FirstLesson: boolean;
  isContentPending: boolean;
  fallbackMessageUrdu: string;
  fallbackMessageEn: string;
  primaryGoalId: string;
  primaryGoalLabelUrdu: string;
  primaryGoalLabelEn: string;
}

/**
 * Standard 10 Onboarding Goal IDs mapped to their core foundation courses
 */
export const GOAL_TO_COURSE_MAP: Record<string, string> = {
  community_service: 'community-service-uplift-basics',
  quran_character: 'quran-character-ethics-basics',
  leadership: 'leadership-community-impact-basics',
  family_social: 'family-social-harmony-basics',
  career: 'freelancing-digital-work-basics',
  skills: 'computer-digital-world-basics',
  business: 'business-entrepreneurship-basics',
  financial_knowledge: 'financial-literacy-budgeting-basics',
  communication: 'communication-skills-basics',
  personal_growth: 'home-daily-life-skills-basics',
};

export const GOAL_LABELS: Record<string, { ur: string; en: string }> = {
  community_service: { ur: 'خدمتِ خلق و کمیونٹی سروس', en: 'Community Service' },
  quran_character: { ur: 'قرآن و کردار', en: 'Quran & Character' },
  leadership: { ur: 'قیادت و رہنمائی', en: 'Leadership' },
  family_social: { ur: 'خاندان و معاشرہ', en: 'Family & Social' },
  career: { ur: 'کیریئر و روزگار', en: 'Career & Jobs' },
  skills: { ur: 'عملی مہارتیں', en: 'Practical Skills' },
  business: { ur: 'کاروبار و کمائی', en: 'Business & Enterprise' },
  financial_knowledge: { ur: 'مالیاتی شعور', en: 'Financial Knowledge' },
  communication: { ur: 'گفتگو و رابطہ', en: 'Communication' },
  personal_growth: { ur: 'ذاتی ارتقاء', en: 'Personal Growth' },
};

/**
 * Resolve primary goal ID from user profile safely
 */
export function getPrimaryGoalId(userProfile: UserProfile): string {
  if (userProfile.interests && userProfile.interests.length > 0) {
    const firstInterest = userProfile.interests[0];
    if (GOAL_TO_COURSE_MAP[firstInterest]) {
      return firstInterest;
    }
  }

  // Check goals string
  const goalsStr = (userProfile.goals || '').toLowerCase();
  if (goalsStr.includes('community') || goalsStr.includes('خدمت') || goalsStr.includes('کمیونٹی')) return 'community_service';
  if (goalsStr.includes('quran') || goalsStr.includes('کردار') || goalsStr.includes('قرآن') || goalsStr.includes('اخلاق')) return 'quran_character';
  if (goalsStr.includes('leadership') || goalsStr.includes('قیادت')) return 'leadership';
  if (goalsStr.includes('family') || goalsStr.includes('خاندان') || goalsStr.includes('معاشرہ')) return 'family_social';
  if (goalsStr.includes('career') || goalsStr.includes('ملازمت') || goalsStr.includes('freelanc') || goalsStr.includes('روزگار')) return 'career';
  if (goalsStr.includes('business') || goalsStr.includes('کاروبار')) return 'business';
  if (goalsStr.includes('financ') || goalsStr.includes('مالیات') || goalsStr.includes('بجٹ')) return 'financial_knowledge';
  if (goalsStr.includes('communicat') || goalsStr.includes('گفتگو') || goalsStr.includes('رابطہ') || goalsStr.includes('انگلش')) return 'communication';
  if (goalsStr.includes('growth') || goalsStr.includes('ترقی') || goalsStr.includes('ارتقاء')) return 'personal_growth';
  if (goalsStr.includes('skill') || goalsStr.includes('ہنر') || goalsStr.includes('کمپیوٹر')) return 'skills';

  // Check activeSkillPathId
  const activePath = userProfile.activeSkillPathId || '';
  if (activePath.includes('comm') || activePath.includes('community')) return 'community_service';
  if (activePath.includes('quran') || activePath.includes('char')) return 'quran_character';
  if (activePath.includes('lead')) return 'leadership';
  if (activePath.includes('fam')) return 'family_social';
  if (activePath.includes('freelanc') || activePath.includes('career')) return 'career';
  if (activePath.includes('business') || activePath.includes('small-business')) return 'business';
  if (activePath.includes('finan')) return 'financial_knowledge';
  if (activePath.includes('english') || activePath.includes('comm')) return 'communication';
  if (activePath.includes('life')) return 'personal_growth';

  return 'skills';
}

/**
 * Get personalized active course and current lesson for user based on their Personal Roadmap
 */
export function getPersonalizedCourseForUser(
  userProfile: UserProfile,
  coursesData: Course[] = COURSES_DATA
): PersonalizedCourseResult {
  const primaryGoalId = getPrimaryGoalId(userProfile);
  const goalLabels = GOAL_LABELS[primaryGoalId] || { ur: 'عملی مہارتیں', en: 'Practical Skills' };
  const completedLessonIds = userProfile.completedLessonIds || [];

  // 1. First, check if the user has a directly matching course for their primary goal
  const primaryCourseId = GOAL_TO_COURSE_MAP[primaryGoalId];
  let targetCourse = coursesData.find((c) => c.id === primaryCourseId);

  // 2. If target course not found by ID, look by category matching the goal
  if (!targetCourse) {
    if (primaryGoalId === 'community_service') {
      targetCourse = coursesData.find((c) => c.category === 'Community Development' || c.id.includes('community'));
    } else if (primaryGoalId === 'quran_character') {
      targetCourse = coursesData.find((c) => c.id.includes('quran') || (c.category === 'Character & Leadership' && c.id.includes('char')));
    } else if (primaryGoalId === 'leadership') {
      targetCourse = coursesData.find((c) => c.id.includes('lead') || c.category === 'Character & Leadership');
    } else if (primaryGoalId === 'career') {
      targetCourse = coursesData.find((c) => c.id.includes('freelancing') || c.id.includes('career'));
    } else if (primaryGoalId === 'business') {
      targetCourse = coursesData.find((c) => c.id.includes('business') || c.category === 'Business');
    } else if (primaryGoalId === 'financial_knowledge') {
      targetCourse = coursesData.find((c) => c.id.includes('financial') || c.category === 'Financial Literacy');
    } else if (primaryGoalId === 'communication') {
      targetCourse = coursesData.find((c) => c.id.includes('communication') || c.category === 'Communication & Languages');
    } else if (primaryGoalId === 'family_social') {
      targetCourse = coursesData.find((c) => c.id.includes('family') || c.id.includes('social'));
    } else if (primaryGoalId === 'personal_growth') {
      targetCourse = coursesData.find((c) => c.id.includes('home-daily-life') || c.category === 'Life Skills');
    } else if (primaryGoalId === 'skills') {
      targetCourse = coursesData.find((c) => c.id.includes('computer-digital-world') || c.category === 'Computer & Digital Skills');
    }
  }

  // 3. Fallback to any enrolled course if it matches user's interests
  if (!targetCourse && userProfile.enrolledCourseIds && userProfile.enrolledCourseIds.length > 0) {
    const enrolled = coursesData.find((c) => userProfile.enrolledCourseIds.includes(c.id));
    if (enrolled) {
      targetCourse = enrolled;
    }
  }

  // 4. If no matching course content is found for this goal
  if (!targetCourse) {
    return {
      course: null,
      lesson: null,
      lessonIndex: -1,
      isStage1FirstLesson: false,
      isContentPending: true,
      fallbackMessageUrdu: `آپ کے منتخب کردہ ہدف (${goalLabels.ur}) کے لیے ذاتی روڈ میپ کا اگلا سبق تیار کیا جا رہا ہے۔`,
      fallbackMessageEn: `The next lesson for your selected goal (${goalLabels.en}) is being prepared.`,
      primaryGoalId,
      primaryGoalLabelUrdu: goalLabels.ur,
      primaryGoalLabelEn: goalLabels.en,
    };
  }

  // 5. Find the next unfinished lesson in this target course
  const unfinishedLessonIndex = targetCourse.lessons.findIndex(
    (l) => !completedLessonIds.includes(l.id)
  );

  if (unfinishedLessonIndex !== -1) {
    const currentLesson = targetCourse.lessons[unfinishedLessonIndex];
    return {
      course: targetCourse,
      lesson: currentLesson,
      lessonIndex: unfinishedLessonIndex,
      isStage1FirstLesson: unfinishedLessonIndex === 0,
      isContentPending: false,
      fallbackMessageUrdu: '',
      fallbackMessageEn: '',
      primaryGoalId,
      primaryGoalLabelUrdu: goalLabels.ur,
      primaryGoalLabelEn: goalLabels.en,
    };
  }

  // 6. If all lessons in the primary course are completed, check for user's secondary goals
  const secondaryGoals = (userProfile.interests || []).slice(1);
  for (const secGoal of secondaryGoals) {
    const secCourseId = GOAL_TO_COURSE_MAP[secGoal];
    if (secCourseId) {
      const secCourse = coursesData.find((c) => c.id === secCourseId);
      if (secCourse) {
        const secUnfinishedIdx = secCourse.lessons.findIndex(
          (l) => !completedLessonIds.includes(l.id)
        );
        if (secUnfinishedIdx !== -1) {
          const secGoalLabels = GOAL_LABELS[secGoal] || { ur: secCourse.titleUrdu, en: secCourse.titleEn };
          return {
            course: secCourse,
            lesson: secCourse.lessons[secUnfinishedIdx],
            lessonIndex: secUnfinishedIdx,
            isStage1FirstLesson: secUnfinishedIdx === 0,
            isContentPending: false,
            fallbackMessageUrdu: '',
            fallbackMessageEn: '',
            primaryGoalId: secGoal,
            primaryGoalLabelUrdu: secGoalLabels.ur,
            primaryGoalLabelEn: secGoalLabels.en,
          };
        }
      }
    }
  }

  // 7. All lessons completed across primary and secondary goals
  const lastLesson = targetCourse.lessons[targetCourse.lessons.length - 1];
  return {
    course: targetCourse,
    lesson: lastLesson,
    lessonIndex: targetCourse.lessons.length - 1,
    isStage1FirstLesson: false,
    isContentPending: false,
    fallbackMessageUrdu: 'ماشاءاللہ! آپ نے اپنے منتخب روڈ میپ کے تمام اسباق مکمل کر لیے ہیں۔ نیا مرحلہ جلد دستیاب ہوگا۔',
    fallbackMessageEn: 'Masha’Allah! You have completed all lessons in your personalized roadmap.',
    primaryGoalId,
    primaryGoalLabelUrdu: goalLabels.ur,
    primaryGoalLabelEn: goalLabels.en,
  };
}
