import { RealLifeMission, RealLifeMissionType, UserProfile } from '../types';
import { REAL_LIFE_MISSIONS_DATA } from '../data/realLifeMissionsData';

export const MISSION_TYPES_CONFIG: {
  type: RealLifeMissionType;
  labelUrdu: string;
  labelEn: string;
  icon: string;
  descriptionUrdu: string;
  descriptionEn: string;
}[] = [
  {
    type: 'daily',
    labelUrdu: 'آج کا مشن',
    labelEn: "Today's Action",
    icon: 'Sparkles',
    descriptionUrdu: 'آج کے دن کے لیے ایک چھوٹا اور عملی اقدام',
    descriptionEn: 'One small actionable step for today'
  },
  {
    type: 'weekly',
    labelUrdu: '7 دن کا مشن',
    labelEn: '7-Day Mission',
    icon: 'Calendar',
    descriptionUrdu: 'ایک ہفتے میں حقیقی عادت اور بہتری',
    descriptionEn: 'A realistic 7-day steady improvement'
  },
  {
    type: 'skill',
    labelUrdu: 'Skill Mission',
    labelEn: 'Skill Practice',
    icon: 'Briefcase',
    descriptionUrdu: 'سیکھے ہوئے ہنر کو حقیقت میں آزمانا',
    descriptionEn: 'Practicing a learned practical skill'
  },
  {
    type: 'character',
    labelUrdu: 'Character Mission',
    labelEn: 'Character Habit',
    icon: 'ShieldCheck',
    descriptionUrdu: 'سچائی، امانت اور اخلاقی پختگی',
    descriptionEn: 'Strengthening moral integrity and truth'
  },
  {
    type: 'family',
    labelUrdu: 'Family Mission',
    labelEn: 'Family Support',
    icon: 'Heart',
    descriptionUrdu: 'اپنے گھر والوں اور والدین کے لیے خدمت',
    descriptionEn: 'Meaningful support for your family'
  },
  {
    type: 'community',
    labelUrdu: 'Community Mission',
    labelEn: 'Community Impact',
    icon: 'Users',
    descriptionUrdu: 'اپنے محلے اور معاشرے کی عملی بہتری',
    descriptionEn: 'Civic responsibility and social good'
  },
  {
    type: 'self_control',
    labelUrdu: 'Self-Control Mission',
    labelEn: 'Self-Control',
    icon: 'Zap',
    descriptionUrdu: 'غصے، فضول خرچی اور منفی عادت پر قابو',
    descriptionEn: 'Overcoming impulsive reactions and harmful habits'
  }
];

/**
 * Intelligently select and enrich ONE focused real-life mission for the learner
 * based on their progress, streak, recent completed missions, active goals, and difficulty needs.
 */
export function getPersonalizedMission(
  userProfile: UserProfile,
  typeFilter?: RealLifeMissionType,
  forceDifficulty?: 'simple' | 'standard' | 'advanced'
): RealLifeMission {
  const completedIds = userProfile.completedMissionIds || [];
  const streak = userProfile.streakDays || 0;

  // Determine difficulty level:
  // - If user has lower streak or fewer completions, prefer 'simple'.
  // - If user has consistent streak (>= 3) and completed multiple missions, enable 'standard'.
  let targetDifficulty: 'simple' | 'standard' | 'advanced' = forceDifficulty || 'standard';
  if (!forceDifficulty) {
    if (streak < 2 || completedIds.length === 0) {
      targetDifficulty = 'simple';
    } else if (streak >= 4 && completedIds.length >= 2) {
      targetDifficulty = 'standard';
    }
  }

  // Filter pool by type if requested
  let candidatePool = typeFilter 
    ? REAL_LIFE_MISSIONS_DATA.filter(m => m.type === typeFilter)
    : REAL_LIFE_MISSIONS_DATA;

  // Prefer uncompleted missions
  let uncompleted = candidatePool.filter(m => !completedIds.includes(m.id));
  if (uncompleted.length === 0) {
    // If all completed, cycle through the pool
    uncompleted = candidatePool;
  }

  // Filter by difficulty or fallback gracefully
  const difficultyMatched = uncompleted.filter(m => m.difficulty === targetDifficulty);
  const baseMission = difficultyMatched.length > 0 
    ? difficultyMatched[0] 
    : (uncompleted[0] || REAL_LIFE_MISSIONS_DATA[0]);

  // Clone to dynamically personalize why it was selected if needed
  const selectedMission: RealLifeMission = { ...baseMission };

  // Personalize selection rationale based on learner profile
  if (userProfile.goals) {
    const goalsLower = userProfile.goals.toLowerCase();
    if (goalsLower.includes('earn') || goalsLower.includes('money') || goalsLower.includes('کاروبار') || goalsLower.includes('پیسہ')) {
      selectedMission.whySelectedUrdu = 'آپ کے معاشی و کاروباری اہداف اور باوقار حلال کمائی کے ارادے کے تحت منتخب کیا گیا۔';
      selectedMission.whySelectedEn = 'Selected based on your financial goals and focus on honorable halal livelihoods.';
    } else if (goalsLower.includes('skill') || goalsLower.includes('ہنر') || goalsLower.includes('digital')) {
      selectedMission.whySelectedUrdu = 'آپ کی موجودہ اسکل اور روزانہ عملی مشق کے تسلسل کو مضبوط بنانے کے لیے منتخب کیا گیا۔';
      selectedMission.whySelectedEn = 'Selected to strengthen your active skill acquisition through daily consistent practice.';
    }
  }

  return selectedMission;
}

/**
 * Get a simpler, zero-shame alternative for a mission
 */
export function getSimplerMissionAlternative(mission: RealLifeMission): RealLifeMission {
  if (mission.simplerAlternativeId) {
    const found = REAL_LIFE_MISSIONS_DATA.find(m => m.id === mission.simplerAlternativeId);
    if (found) return found;
  }

  // Fallback: find any simple difficulty mission in same type, or a gentle daily action
  const sameTypeSimple = REAL_LIFE_MISSIONS_DATA.find(
    m => m.type === mission.type && m.difficulty === 'simple' && m.id !== mission.id
  );
  if (sameTypeSimple) return sameTypeSimple;

  const anySimple = REAL_LIFE_MISSIONS_DATA.find(m => m.difficulty === 'simple');
  return anySimple || REAL_LIFE_MISSIONS_DATA[1]; // daily-pause-1min
}

/**
 * Check if a mission is marked completed
 */
export function isMissionCompleted(missionId: string, userProfile: UserProfile): boolean {
  return (userProfile.completedMissionIds || []).includes(missionId);
}

/**
 * Retrieve reflection text for a completed mission
 */
export function getMissionReflection(
  missionId: string,
  userProfile: UserProfile
): { reflectionText: string; completedAt: string; moodTag?: string } | null {
  return userProfile.missionReflections?.[missionId] || null;
}
