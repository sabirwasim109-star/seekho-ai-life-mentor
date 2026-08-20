import { UserProfile, DiscoverCategory, DiscoverItem } from '../types';
import { DISCOVER_ITEMS_DATA, DISCOVER_AREAS_METADATA } from '../data/discoverData';
import { generateLifeRoadmap } from '../data/lifeRoadmapData';

export interface ScoredDiscoverItem {
  item: DiscoverItem;
  score: number;
  personalizedReasonUrdu: string;
  personalizedReasonEn: string;
  adaptiveTagUrdu?: string;
  adaptiveTagEn?: string;
}

/**
 * Calculates an adaptive match score for a Discover item based on the learner's live progress,
 * Life Roadmap diagnostics, skill levels, quiz performance, and user feedback.
 */
export function scoreDiscoverItem(item: DiscoverItem, userProfile: UserProfile): ScoredDiscoverItem {
  let score = 50; // Base score
  const reasonsUrdu: string[] = [];
  const reasonsEn: string[] = [];
  let adaptiveTagUrdu: string | undefined;
  let adaptiveTagEn: string | undefined;

  const userAge = userProfile.age || 
    (userProfile.ageGroup === '16-25' ? 20 :
     userProfile.ageGroup === '26-45' ? 35 :
     userProfile.ageGroup === '46-60' ? 52 :
     userProfile.ageGroup === '61-70' ? 65 :
     userProfile.ageGroup === '70+' ? 75 : 22);

  const userEducation = (userProfile.educationLevel || userProfile.education || userProfile.assessmentData?.educationLevel || '').toLowerCase();
  const userInterests = (userProfile.interests || []).map(i => i.toLowerCase());
  const userGoals = (userProfile.goals || '').toLowerCase();
  const userTime = userProfile.dailyJourneyProgress?.timePreference || userProfile.growthDailyTimePreference || userProfile.timePerDay || '20m';
  
  const completedLessons = userProfile.completedLessonIds || [];
  const completedProjects = userProfile.completedProjectIds || [];
  const completedLifeSkills = userProfile.completedLifeSkillLessonIds || [];
  const completedIslamic = userProfile.completedIslamicLessonIds || [];
  const completedMissions = userProfile.completedMissionIds || [];
  const quizMistakes = userProfile.quizMistakeRecords || {};
  const totalMistakes = Object.values(quizMistakes).reduce((acc, curr) => acc + curr, 0);

  const dismissedIds = userProfile.dismissedDiscoverItemIds || [];
  const helpfulIds = userProfile.helpfulDiscoverItemIds || [];
  const unhelpfulIds = userProfile.unhelpfulDiscoverItemIds || [];

  // =========================================================================
  // 1. USER FEEDBACK SIGNALS (Local Adaptation)
  // =========================================================================
  if (dismissedIds.includes(item.id)) {
    score -= 150; // Filtered or pushed to the very bottom
  }
  if (unhelpfulIds.includes(item.id)) {
    score -= 60;
  }
  if (helpfulIds.includes(item.id)) {
    score += 25;
  }

  // Preference for category if user marked other items in this category helpful
  const helpfulSameCategory = DISCOVER_ITEMS_DATA.filter(
    d => d.category === item.category && helpfulIds.includes(d.id)
  ).length;
  if (helpfulSameCategory > 0) {
    score += helpfulSameCategory * 10;
  }

  // =========================================================================
  // 2. GOAL & ROADMAP ALIGNMENT (Priority 1 & 2)
  // =========================================================================
  if (item.targetGoals && item.targetGoals.length > 0) {
    const matchesGoal = item.targetGoals.some(g => userGoals.includes(g) || g.includes(userGoals));
    if (matchesGoal) {
      score += 35;
      reasonsUrdu.push(`آپ کے بنیادی ہدف (${userProfile.goals || 'ترقی'}) کے حصول میں معاون`);
      reasonsEn.push(`Supports your core goal (${userProfile.goals || 'Growth'})`);
      adaptiveTagUrdu = 'ہدف سے مطابقت';
      adaptiveTagEn = 'Goal Aligned';
    }
  }

  // Life Roadmap Diagnostic Check
  try {
    const roadmap = generateLifeRoadmap(userProfile);
    const areas = roadmap.areas;
    
    // Find the area with lowest progress percentage in learner's roadmap
    const sortedAreas = [...areas].sort((a, b) => a.progressPercentage - b.progressPercentage);
    const lowestArea = sortedAreas[0];

    if (lowestArea) {
      if (lowestArea.id === 'skills_career' && (item.category === 'new_skills' || item.category === 'freelancing_digital')) {
        score += 25;
        reasonsUrdu.push(`لائف روڈ میپ کے مطابق ڈیجیٹل و تکنیکی ہنر کو تقویت دیتا ہے`);
        reasonsEn.push(`Strengthens digital/technical skills identified in your Roadmap`);
        if (!adaptiveTagUrdu) {
          adaptiveTagUrdu = 'روڈ میپ تجویز';
          adaptiveTagEn = 'Roadmap Recommendation';
        }
      } else if (lowestArea.id === 'money_finance' && (item.category === 'practical_life_skills' || item.category === 'career_work' || item.category === 'business_ideas')) {
        score += 25;
        reasonsUrdu.push(`عملی زندگی اور معاشی نظم و ضبط کے شعبے کو بہتر بناتا ہے`);
        reasonsEn.push(`Helps build your practical life and financial skills`);
        if (!adaptiveTagUrdu) {
          adaptiveTagUrdu = 'روڈ میپ ترجیح';
          adaptiveTagEn = 'Roadmap Priority';
        }
      } else if ((lowestArea.id === 'character_islamic' || lowestArea.id === 'community_service') && (item.category === 'quran_hadith_character' || item.category === 'community_service')) {
        score += 25;
        reasonsUrdu.push(`کردار، حلال اصولوں اور معاشرتی بھلائی کو مضبوط کرتا ہے`);
        reasonsEn.push(`Nurtures Islamic character and community consciousness`);
        if (!adaptiveTagUrdu) {
          adaptiveTagUrdu = 'اخلاقی بنیاد';
          adaptiveTagEn = 'Moral Foundation';
        }
      } else if ((lowestArea.id === 'health_discipline' || lowestArea.id === 'family_social') && (item.category === 'personal_development' || item.category === 'books_knowledge')) {
        score += 25;
        reasonsUrdu.push(`روزانہ عادات، نظم و ضبط اور خاندانی احساس کے لیے مفید`);
        reasonsEn.push(`Supports daily discipline, family values, and mindset growth`);
        if (!adaptiveTagUrdu) {
          adaptiveTagUrdu = 'ذاتی ترقی';
          adaptiveTagEn = 'Personal Growth';
        }
      }
    }
  } catch (e) {
    // Fallback gracefully
  }

  // =========================================================================
  // 3. ADAPTIVE DIFFICULTY: STRUGGLING vs SUCCEEDING (Priority 3 & 4)
  // =========================================================================
  const isStruggling = totalMistakes >= 3;
  const isSucceeding = completedLessons.length >= 4 || (completedProjects.length >= 1 && userProfile.streakDays >= 3);

  if (isStruggling) {
    // Boost easier, foundational, bite-sized lessons
    if (item.difficultyLevel === 'easy' && item.estimatedMinutes <= 15) {
      score += 25;
      reasonsUrdu.push(`آسان، مختصر اور ذہنی دباؤ کے بغیر عملی بنیاد`);
      reasonsEn.push(`Easy, brief, and pressure-free foundational step`);
      if (!adaptiveTagUrdu) {
        adaptiveTagUrdu = 'آسان قدم';
        adaptiveTagEn = 'Gentle Step';
      }
    } else if (item.difficultyLevel === 'advanced') {
      score -= 20; // De-prioritize advanced items while learner is consolidating
    }
  } else if (isSucceeding) {
    // Recommend next level or practical application
    if (item.difficultyLevel === 'medium' || item.difficultyLevel === 'advanced' || item.actionType === 'open_course') {
      score += 20;
      reasonsUrdu.push(`آپ کی شاندار مسلسل پیش رفت کے بعد اگلا بہترین قدم`);
      reasonsEn.push(`The ideal next challenge following your consistent progress`);
      if (!adaptiveTagUrdu) {
        adaptiveTagUrdu = 'اگلا لیول';
        adaptiveTagEn = 'Next Level';
      }
    }
  }

  // =========================================================================
  // 4. AVOID COMPLETED COURSES REPETITION (Priority 5)
  // =========================================================================
  if (item.actionPayload?.courseId) {
    const courseId = item.actionPayload.courseId;
    const isCompleted = completedProjects.includes(courseId);
    const isEnrolled = userProfile.enrolledCourseIds?.includes(courseId);

    if (isCompleted) {
      score -= 40; // Avoid recommending completed course unless revision is needed
    } else if (isEnrolled) {
      score += 15; // In-progress courses get a constructive nudge
    }
  }

  // Check if corresponding practical life skill or mission was already completed
  if (item.id === 'disc-pd-anger-control-box' && completedLifeSkills.includes('pls-mindset-overthinking')) {
    score -= 15;
  }
  if (item.id === 'disc-life-budget-calculator' && completedLifeSkills.includes('pls-budget-cashflow')) {
    score -= 15;
  }

  // =========================================================================
  // 5. DEMOGRAPHIC & INTERESTS MATCHING
  // =========================================================================
  if (item.minAge && item.maxAge) {
    if (userAge >= item.minAge && userAge <= item.maxAge) {
      score += 15;
    } else {
      score -= 10;
    }
  }

  if (item.targetEducation && item.targetEducation.length > 0) {
    const matchesEdu = item.targetEducation.some(edu => userEducation.includes(edu.toLowerCase()));
    if (matchesEdu) {
      score += 12;
      reasonsUrdu.push(`تعلیمی پس منظر کے عین مطابق`);
      reasonsEn.push(`Matches educational level`);
    }
  }

  if (item.targetInterests && item.targetInterests.length > 0) {
    const matchingInterests = item.targetInterests.filter(interest => 
      userInterests.some(ui => ui.includes(interest) || interest.includes(ui))
    );
    if (matchingInterests.length > 0) {
      score += matchingInterests.length * 15;
      reasonsUrdu.push(`آپ کی دلچسپی سے ہم آہنگ`);
      reasonsEn.push(`Aligns with your interests`);
    }
  }

  // Available Time match
  const availableMinutes = userTime.includes('10m') ? 10 : userTime.includes('15m') ? 15 : userTime.includes('30m') ? 30 : userTime.includes('1h') ? 60 : 25;
  if (item.estimatedMinutes <= availableMinutes) {
    score += 10;
  }

  // =========================================================================
  // 6. SYNTHESIZE ONE CONCISE REASON (کیوں یہ آپ کے لیے؟)
  // =========================================================================
  // Short 1-sentence explanation why it was selected
  let conciseReasonUrdu = '';
  let conciseReasonEn = '';

  if (reasonsUrdu.length > 0) {
    conciseReasonUrdu = `${reasonsUrdu[0]} — ${item.whyUsefulUrdu}`;
    conciseReasonEn = `${reasonsEn[0]} — ${item.whyUsefulEn}`;
  } else {
    conciseReasonUrdu = item.whyUsefulUrdu;
    conciseReasonEn = item.whyUsefulEn;
  }

  return {
    item,
    score,
    personalizedReasonUrdu: conciseReasonUrdu,
    personalizedReasonEn: conciseReasonEn,
    adaptiveTagUrdu,
    adaptiveTagEn
  };
}

/**
 * Returns ranked Discover items for the learner with balanced diversity.
 * Mixes learning, practical skills, career, character and community opportunities,
 * while respecting dismissals and feedback.
 */
export function getPersonalizedDiscoverRecommendations(
  userProfile: UserProfile,
  selectedCategory: DiscoverCategory | 'all' = 'all',
  limit: number = 3
): ScoredDiscoverItem[] {
  let sourceItems = DISCOVER_ITEMS_DATA;

  // Filter out dismissed items
  const dismissed = userProfile.dismissedDiscoverItemIds || [];
  sourceItems = sourceItems.filter(item => !dismissed.includes(item.id));

  if (selectedCategory !== 'all') {
    sourceItems = sourceItems.filter(item => item.category === selectedCategory);
  }

  // Score all candidate items
  const scored = sourceItems.map(item => scoreDiscoverItem(item, userProfile));
  scored.sort((a, b) => b.score - a.score);

  if (selectedCategory !== 'all') {
    return scored.slice(0, limit);
  }

  // Balanced Category Mixing: ensure top recommendations feature diverse areas
  const topDiverse: ScoredDiscoverItem[] = [];
  const seenCategories = new Set<DiscoverCategory>();

  for (const candidate of scored) {
    if (!seenCategories.has(candidate.item.category)) {
      topDiverse.push(candidate);
      seenCategories.add(candidate.item.category);
      if (topDiverse.length >= limit) break;
    }
  }

  // If we still need more to fill the limit, add next highest scoring items
  if (topDiverse.length < limit) {
    for (const candidate of scored) {
      if (!topDiverse.some(t => t.item.id === candidate.item.id)) {
        topDiverse.push(candidate);
        if (topDiverse.length >= limit) break;
      }
    }
  }

  return topDiverse;
}

/**
 * Returns all discover items for category exploration (excluding dismissed)
 */
export function getAllDiscoverItemsForCategory(
  userProfile: UserProfile,
  category: DiscoverCategory | 'all'
): ScoredDiscoverItem[] {
  const dismissed = userProfile.dismissedDiscoverItemIds || [];
  const filtered = DISCOVER_ITEMS_DATA.filter(i => !dismissed.includes(i.id));

  const source = category === 'all' 
    ? filtered 
    : filtered.filter(i => i.category === category);
    
  const scored = source.map(item => scoreDiscoverItem(item, userProfile));
  scored.sort((a, b) => b.score - a.score);
  return scored;
}

/**
 * Get category metadata
 */
export function getDiscoverAreaMetadata(category: DiscoverCategory) {
  return DISCOVER_AREAS_METADATA.find(m => m.id === category) || DISCOVER_AREAS_METADATA[0];
}
