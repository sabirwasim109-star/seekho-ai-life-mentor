export type Language = 'dual' | 'ur' | 'en';

export type FontSize = 'normal' | 'large' | 'xlarge';

export type AgeGroup = '10-15' | '16-25' | '26-35' | '36-60' | '26-45' | '46-60' | '61-70' | '70+';

export type SkillCategory =
  | 'AI & Technology'
  | 'Computer & Digital Skills'
  | 'Communication & Languages'
  | 'Business & Freelancing'
  | 'Creative Skills'
  | 'Agriculture & Local Skills'
  | 'Technical Trades'
  | 'Life Skills'
  | 'Character & Leadership'
  | 'Community Development'
  | 'Computer'
  | 'Graphic Design'
  | 'Video Editing'
  | 'Digital Marketing'
  | 'Freelancing'
  | 'Business'
  | 'Agriculture'
  | 'Education'
  | 'Languages'
  | 'Communication'
  | 'Leadership'
  | 'Financial Literacy'
  | 'Environment'
  | 'Character & Ethics';

export interface AssessmentData {
  ageGroup: AgeGroup;
  educationLevel: string;
  currentOccupation: string;
  currentSkills: string[];
  interests: SkillCategory[];
  dailyTime: string;
  device: string;
  primaryGoal: string;
  learningStyle: string;
  sixMonthGoal: string;
  villageOrCity?: string;
  submittedAt?: string;
}

export interface RecommendedSkill {
  id: string;
  courseId: string;
  titleUrdu: string;
  titleEn: string;
  category: SkillCategory;
  categoryUrdu: string;
  whySuitableUrdu: string;
  whySuitableEn: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficultyUrdu: string;
  estimatedTimeUrdu: string;
  estimatedTimeEn: string;
  realWorldUsesUrdu: string[];
  realWorldUsesEn: string[];
  firstStepUrdu: string;
  firstStepEn: string;
  matchScore: number;
  icon: string;
  badgeUrdu: string;
  badgeEn: string;
  realLifePurpose: RealLifePurpose;
  dailyPlan: DailyPlanDay[];
  roadmapSteps: RoadmapStep[];
}

export interface RoadmapStep {
  stepNumber: number;
  titleUrdu: string;
  titleEn: string;
  subtitleUrdu: string;
  subtitleEn: string;
  durationUrdu: string;
  durationEn: string;
  keyActionsUrdu: string[];
  keyActionsEn: string[];
  deliverableUrdu: string;
  deliverableEn: string;
  status: 'locked' | 'in_progress' | 'completed';
}

export interface DailyPlanDay {
  dayNumber: number;
  dayNameUrdu: string;
  dayNameEn: string;
  type: 'learn' | 'practice' | 'project' | 'review' | 'challenge';
  typeUrdu: string;
  typeEn: string;
  titleUrdu: string;
  titleEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  durationMinutes: number;
  points: number;
  isCompleted: boolean;
  actionPromptUrdu?: string;
  actionPromptEn?: string;
}

export interface RealLifePurpose {
  forSelfUrdu?: string;
  forSelfEn?: string;
  forFamilyUrdu?: string;
  forFamilyEn?: string;
  forCommunityUrdu?: string;
  forCommunityEn?: string;
  forWorldUrdu?: string;
  forWorldEn?: string;

  personalBenefitUrdu?: string;
  personalBenefitEn?: string;
  familyHelpUrdu?: string;
  familyHelpEn?: string;
  communityHelpUrdu?: string;
  communityHelpEn?: string;
  societalBenefitUrdu?: string;
  societalBenefitEn?: string;
}

export interface UserProfile {
  userId?: string;
  email?: string | null;
  photoURL?: string | null;
  name: string;
  ageGroup: AgeGroup;
  age?: number;
  educationLevel: string;
  education?: string;
  country: string;
  region: string;
  city: string;
  village: string;
  currentSkills: string[];
  skills?: string[];
  interests: string[];
  goals: string;
  learningGoals?: string[];
  timePerDay: string;
  preferredLanguage: Language;
  device: string;
  completedAssessment: boolean;
  hasCompletedAssessment?: boolean;
  currentLevel?: 'Beginner' | 'Intermediate' | 'Advanced';
  assessmentScore?: number;
  assessmentAnswers?: Record<string, any>;
  role?: string;
  currentOccupation?: string;
  streakDays: number;
  points: number;
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  completedProjectIds: string[];
  activeSkillPathId?: string;
  assessmentData?: AssessmentData;
  completedDailyPlanDayIds?: string[];
  completedIslamicLessonIds?: string[];
  completedIslamicChallengeIds?: string[];
  islamicReflections?: Record<string, { reflectionText: string; completedAt: string; challengeTitleUrdu?: string }>;
  completedGrowthTaskIds?: string[];
  completedCommunityActionIds?: string[];
  completedGoodDeedIds?: string[];
  completedLifeSkillLessonIds?: string[];
  completedPracticeScenarioIds?: string[];
  lifeSkillReflections?: Record<string, { reflectionText: string; completedAt: string } | string>;
  growthDailyTimePreference?: '15m' | '30m' | '1h' | '2h+';
  quizMistakeRecords?: Record<string, number>; // questionId -> mistake count for intelligent encouraging revision
  completedMissionIds?: string[];
  missionReflections?: Record<string, { reflectionText: string; completedAt: string; missionTitleUrdu?: string; moodTag?: string }>;
  simplifiedMissionIds?: string[];
  dailyJourneyProgress?: UserDailyJourneyProgress;
  dismissedDiscoverItemIds?: string[];
  helpfulDiscoverItemIds?: string[];
  unhelpfulDiscoverItemIds?: string[];
  completedPathwayProjectIds?: string[];
  viewedPathwayIds?: string[];
  activePathwayId?: string;
  selectedSkill?: RecommendedSkill;
  lastAssessmentDate?: string;
  createdAt?: any;
  updatedAt?: any;
}

export type PathwayCategoryKey =
  | 'ai'
  | 'graphic_design'
  | 'video_editing'
  | 'communication'
  | 'sales'
  | 'marketing'
  | 'computer_skills'
  | 'freelancing'
  | 'agriculture'
  | 'local_business'
  | 'community_services';

export interface SkillOpportunityPathway {
  id: string;
  categoryKey: PathwayCategoryKey;
  skillTitleUrdu: string;
  skillTitleEn: string;
  categoryUrdu: string;
  categoryEn: string;
  icon: string;
  color: string;
  relatedCourseIds: string[];

  // 4 Core Stages: Learn -> Build -> Apply -> Earn
  stages: {
    learn: {
      titleUrdu: string;
      titleEn: string;
      descUrdu: string;
      descEn: string;
      actionUrdu: string;
      actionEn: string;
      estimatedDays: number;
    };
    build: {
      titleUrdu: string;
      titleEn: string;
      descUrdu: string;
      descEn: string;
      actionUrdu: string;
      actionEn: string;
      projectDeliverableUrdu: string;
      projectDeliverableEn: string;
    };
    apply: {
      titleUrdu: string;
      titleEn: string;
      descUrdu: string;
      descEn: string;
      actionUrdu: string;
      actionEn: string;
      whereNeededUrdu: string;
      whereNeededEn: string;
    };
    earn: {
      titleUrdu: string;
      titleEn: string;
      descUrdu: string;
      descEn: string;
      ethicalIncomeUrdu: string;
      ethicalIncomeEn: string;
      startingRoleUrdu: string;
      startingRoleEn: string;
    };
  };

  // 1. میں نے کیا سیکھا؟
  whatILearnedUrdu: string;
  whatILearnedEn: string;

  // 2. میں اس skill سے کیا بنا سکتا ہوں؟
  whatICanBuildUrdu: string[];
  whatICanBuildEn: string[];

  // 3. اس کام کی ضرورت کہاں ہے؟
  whereIsDemandUrdu: string[];
  whereIsDemandEn: string[];

  // 4. آج میں کون سا چھوٹا project بنا سکتا ہوں؟
  todaysSmallProjectUrdu: {
    title: string;
    description: string;
    estimatedMinutes: number;
    actionStep: string;
  };
  todaysSmallProjectEn: {
    title: string;
    description: string;
    estimatedMinutes: number;
    actionStep: string;
  };

  // 5. اسے future income میں کیسے تبدیل کیا جا سکتا ہے؟
  futureIncomeTransformationUrdu: string;
  futureIncomeTransformationEn: string;

  // 6. اگلی کون سی skill سیکھنی چاہیے؟
  nextSkillRecommendationUrdu: {
    skillName: string;
    whyLearn: string;
    courseId?: string;
  };
  nextSkillRecommendationEn: {
    skillName: string;
    whyLearn: string;
    courseId?: string;
  };

  // Single Best Next Action
  bestNextActionUrdu: string;
  bestNextActionEn: string;

  // Ethical, legal & halal reminder
  ethicalDisclaimerUrdu: string;
  ethicalDisclaimerEn: string;
}

export type JourneyTimeLength = '10m' | '20m' | '30m' | '60m+';
export type JourneyStepKey = 'start' | 'learn' | 'practice' | 'act' | 'reflect' | 'complete';

export interface DailySmartJourney {
  id: string;
  dateStr: string;
  timeLength: JourneyTimeLength;
  totalEstimatedMinutes: number;
  totalPoints: number;
  isWelcomeBack?: boolean;
  difficultyLevel: 'gentle' | 'standard' | 'advanced';
  
  // Step 1: سیکھیں (Learn)
  learnStep: {
    courseId: string;
    courseTitleUrdu: string;
    courseTitleEn: string;
    lessonId: string;
    lessonTitleUrdu: string;
    lessonTitleEn: string;
    keyConceptUrdu: string;
    keyConceptEn: string;
    takeawayUrdu: string;
    takeawayEn: string;
    estimatedMinutes: number;
  };
  
  // Step 2: مشق کریں (Practice)
  practiceStep: {
    titleUrdu: string;
    titleEn: string;
    instructionUrdu: string;
    instructionEn: string;
    practicalToolUrdu: string;
    practicalToolEn: string;
    estimatedMinutes: number;
    points: number;
  };
  
  // Step 3: عمل کریں (Act - Real Life Mission)
  actStep: {
    missionId: string;
    missionTitleUrdu: string;
    missionTitleEn: string;
    categoryUrdu: string;
    categoryEn: string;
    whyItMattersUrdu: string;
    whyItMattersEn: string;
    actionUrdu: string;
    actionEn: string;
    estimatedMinutes: number;
    points: number;
  };
  
  // Step 4: غور کریں (Reflect - Quran / Hadith & Moral Takeaway)
  reflectStep: {
    themeUrdu: string;
    themeEn: string;
    quranUrdu?: string;
    quranEn?: string;
    quranRef?: string;
    hadithUrdu?: string;
    hadithEn?: string;
    hadithRef?: string;
    moralTakeawayUrdu: string;
    moralTakeawayEn: string;
    reflectionPromptUrdu: string;
    reflectionPromptEn: string;
    estimatedMinutes: number;
  };
}

export interface UserDailyJourneyProgress {
  lastCompletedDate?: string;
  consecutiveJourneyDays: number;
  completedJourneyCount: number;
  timePreference?: JourneyTimeLength;
  history?: Record<string, {
    completedAt: string;
    timeLength: JourneyTimeLength;
    reflection: string;
    lessonId: string;
    missionId: string;
    pointsEarned: number;
  }>;
}

export type RealLifeMissionType = 
  | 'daily'         // آج کا مشن — one small action for today
  | 'weekly'        // 7 دن کا مشن — a realistic weekly improvement
  | 'skill'         // Skill Mission — practice a learned skill
  | 'character'     // Character Mission — improve one character habit
  | 'family'        // Family Mission — useful action for family
  | 'community'     // Community Mission — useful action for society
  | 'self_control'; // Self-Control Mission — improve a harmful habit or reaction

export type MissionDifficulty = 'simple' | 'standard' | 'advanced';

export interface RealLifeMission {
  id: string;
  type: RealLifeMissionType;
  typeLabelUrdu: string;
  typeLabelEn: string;
  titleUrdu: string;
  titleEn: string;
  categoryUrdu: string;
  categoryEn: string;
  whyItMattersUrdu: string;
  whyItMattersEn: string;
  actionUrdu: string;
  actionEn: string;
  estimatedMinutes: number;
  durationDays?: number; // 1 for daily, 7 for weekly
  points: number;
  difficulty: MissionDifficulty;
  reflectionPromptUrdu: string;
  reflectionPromptEn: string;
  simplerAlternativeId?: string;
  targetType?: 'course' | 'lesson' | 'practical_life' | 'islamic' | 'growth' | 'self_reflection';
  targetId?: string;
  targetCourseId?: string;

  // Integrated Daily Mission 4-Action Structure
  practicalActionItem?: {
    titleUrdu: string;
    titleEn: string;
    actionUrdu: string;
    actionEn: string;
    estimatedMinutes: number;
  };
  learningActionItem?: {
    titleUrdu: string;
    titleEn: string;
    actionUrdu: string;
    actionEn: string;
    estimatedMinutes: number;
    courseId?: string;
    conceptUrdu?: string;
    conceptEn?: string;
  };
  characterIslamicActionItem?: {
    titleUrdu: string;
    titleEn: string;
    actionUrdu: string;
    actionEn: string;
    estimatedMinutes: number;
    referenceUrdu?: string;
    referenceEn?: string;
  };

  whySelectedUrdu?: string;
  whySelectedEn?: string;

  verifiedGuidance?: {
    quranUrdu?: string;
    quranEn?: string;
    quranRef?: string;
    hadithUrdu?: string;
    hadithEn?: string;
    hadithRef?: string;
    moralLessonUrdu?: string;
    moralLessonEn?: string;
  };
}

export interface QuizQuestion {
  id: string;
  questionUrdu: string;
  questionEn: string;
  optionsUrdu: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationUrdu: string;
  explanationEn: string;
}

export interface Lesson {
  id: string;
  titleUrdu: string;
  titleEn: string;
  durationMinutes: number;
  contentUrdu: string;
  contentEn: string;
  keyTakeawaysUrdu: string[];
  keyTakeawaysEn: string[];
  audioUrl?: string;
  quiz?: QuizQuestion[];
  practicalTask?: PracticalTask;
}

export interface PracticalTask {
  id: string;
  titleUrdu: string;
  titleEn: string;
  instructionsUrdu: string;
  instructionsEn: string;
  deliverableUrdu: string;
  deliverableEn: string;
  estimatedMinutes: number;
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';

export interface Course {
  id: string;
  titleUrdu: string;
  titleEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  category: SkillCategory;
  categoryUrdu: string;
  difficulty: SkillLevel;
  difficultyUrdu: string;
  level?: SkillLevel;
  levelUrdu?: string;
  estimatedHours: number;
  ageGroups: AgeGroup[];
  icon: string;
  coverGradient: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
  practicalTask: PracticalTask;
  projectDescriptionUrdu: string;
  projectDescriptionEn: string;
  whatYouWillLearnUrdu?: string[];
  whatYouWillLearnEn?: string[];
  realLifePurpose?: RealLifePurpose;
}

export interface CommunityPost {
  id: string;
  authorName: string;
  authorAgeGroup: AgeGroup;
  authorLocation: string;
  isElder: boolean;
  titleUrdu: string;
  titleEn: string;
  contentUrdu: string;
  contentEn: string;
  category: string;
  categoryUrdu: string;
  likes: number;
  commentsCount: number;
  timestamp: string;
  practicalOutcomeUrdu?: string;
  practicalOutcomeEn?: string;
}

export interface AreaTopic {
  id: string;
  titleUrdu: string;
  titleEn: string;
  category: 'Education' | 'Health' | 'Water' | 'Electricity' | 'Roads' | 'Employment' | 'Environment' | 'Youth skills';
  categoryUrdu: string;
  icon: string;
  status: 'In Progress' | 'Proposed' | 'Completed';
  statusUrdu: string;
  descriptionUrdu: string;
  descriptionEn: string;
  volunteersCount: number;
  actionPlanUrdu: string[];
  actionPlanEn: string[];
}

export interface ElderWisdom {
  id: string;
  elderName: string;
  age: number;
  locationUrdu: string;
  locationEn: string;
  fieldUrdu: string;
  fieldEn: string;
  titleUrdu: string;
  titleEn: string;
  storyUrdu: string;
  storyEn: string;
  practicalAdviceUrdu: string;
  practicalAdviceEn: string;
}

export interface Opportunity {
  id: string;
  titleUrdu: string;
  titleEn: string;
  type: 'Job' | 'Freelancing' | 'Internship' | 'Apprenticeship' | 'Training' | 'Business Opportunity';
  typeUrdu: string;
  organizationUrdu: string;
  organizationEn: string;
  locationUrdu: string;
  locationEn: string;
  remoteAvailable: boolean;
  stipendOrSalary: string;
  deadline: string;
  descriptionUrdu: string;
  descriptionEn: string;
  requirementsUrdu: string[];
  requirementsEn: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export interface IslamicScenario {
  situationUrdu: string;
  situationEn: string;
  optionsUrdu: string[];
  optionsEn: string[];
  explanationsUrdu: string[];
  explanationsEn: string[];
  recommendedIndex: number;
}

export interface IslamicPersonalizedChallenge {
  studentUrdu: string;
  studentEn: string;
  workerUrdu: string;
  workerEn: string;
  parentUrdu: string;
  parentEn: string;
  digitalYouthUrdu: string;
  digitalYouthEn: string;
}

export interface IslamicDailyLesson {
  id: string;
  dayNumber: number;
  levelNumber: number;
  levelTitleUrdu: string;
  levelTitleEn: string;
  themeUrdu: string;
  themeEn: string;
  bismillah: string;
  activityType: 'scenario' | '1min' | '5min' | 'digital' | 'family' | 'community' | 'reflection';
  
  // 1. 🌿 آج کی قرآنی رہنمائی
  quranGuidance: {
    verseArabic: string;
    surahAndAyahUrdu: string;
    surahAndAyahEn: string;
    translationUrdu: string;
    translationEn: string;
    practicalMoralExplanationUrdu: string;
    practicalMoralExplanationEn: string;
  };

  // 2. 📖 آج کی حدیث
  hadithGuidance: {
    hadithArabic?: string;
    textUrdu: string;
    textEn: string;
    explanationUrdu: string;
    explanationEn: string;
    sourceReferenceUrdu: string;
    sourceReferenceEn: string;
  };

  // 3. ⭐ صحابہ کرامؓ سے سبق
  sahabaLesson: {
    sahabiNameUrdu: string;
    sahabiNameEn: string;
    storyUrdu: string;
    storyEn: string;
    lessonForYouthUrdu: string;
    lessonForYouthEn: string;
  };

  // 4. 🎯 آج کا عملی چیلنج (Today's Practical Action Challenge)
  practicalAction: {
    titleUrdu: string;
    titleEn: string;
    actionUrdu: string;
    actionEn: string;
    category: string;
    estimatedMinutes?: number;
  };

  // Personalized Challenge Variations
  personalizedChallenges?: IslamicPersonalizedChallenge;

  // Real-life Scenario Dilemma (Anti-boredom system)
  scenario?: IslamicScenario;

  // 5. 💭 فکری جائزہ و خود احتسابی (Reflection Question)
  reflectionQuestionUrdu?: string;
  reflectionQuestionEn?: string;

  // 6. 🌍 معاشرے کے لیے سبق اور وسیع فوائد
  societalBenefit: {
    individualBenefitUrdu: string;
    familyBenefitUrdu: string;
    communityAndCountryUrdu: string;
    humanityBenefitUrdu: string;
  };
}

export interface IslamicCharacterLevel {
  levelNumber: number;
  titleUrdu: string;
  titleEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  iconName: string;
  lessonIds: string[];
}

// ==========================================
// 🌟 PERSONAL GROWTH ENGINE (ذاتی ترقی کا ذہین نظام)
// ==========================================

export type GrowthAreaId =
  | 'knowledge'               // 1. علم و آگاہی
  | 'practical_skills'        // 2. عملی ہنر
  | 'character'               // 3. اخلاق و کردار
  | 'communication'           // 4. گفتگو و رابطہ
  | 'digital_literacy'        // 5. ڈیجیٹل مہارت
  | 'financial_awareness'     // 6. مالیاتی شعور
  | 'health_discipline'       // 7. صحت و نظم و ضبط
  | 'family_responsibility'   // 8. خاندانی ذمہ داری
  | 'community_service'       // 9. خدمتِ خلق و سماجی کردار
  | 'leadership';             // 10. قیادت و ذمہ داری

export interface GrowthAreaInfo {
  id: GrowthAreaId;
  titleUrdu: string;
  titleEn: string;
  iconName: string;
  color: string;
  score: number; // 0 - 100 percentage
  levelUrdu: string;
  levelEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  realLifeApplicationUrdu: string;
  realLifeApplicationEn: string;
  completedTasksCount: number;
  totalSuggestedCount: number;
}

export interface GrowthRecommendation {
  id: string;
  titleUrdu: string;
  titleEn: string;
  growthArea: GrowthAreaId;
  growthAreaUrdu: string;
  growthAreaEn: string;
  whyUrdu: string;
  whyEn: string;
  estimatedMinutes: number;
  difficulty: SkillLevel;
  difficultyUrdu: string;
  practicalBenefitUrdu: string;
  practicalBenefitEn: string;
  targetType: 'course' | 'lesson' | 'islamic_lesson' | 'practical_task' | 'daily_challenge' | 'community_action' | 'quiz_review';
  targetCourseId?: string;
  targetLessonId?: string;
  targetIslamicLessonIndex?: number;
  targetActionLabelUrdu?: string;
  targetActionLabelEn?: string;
  encouragementNoteUrdu?: string;
  encouragementNoteEn?: string;
}

export type DailyPlanDuration = '15m' | '30m' | '1h' | '2h+';

export interface DailyGrowthPlanItem {
  id: string;
  type: 'learning' | 'practice' | 'practical_task' | 'reflection' | 'community' | 'project';
  typeUrdu: string;
  typeEn: string;
  titleUrdu: string;
  titleEn: string;
  durationMinutes: number;
  descriptionUrdu: string;
  descriptionEn: string;
  practicalOutcomeUrdu: string;
  practicalOutcomeEn: string;
  targetCourseId?: string;
  targetIslamicLessonIndex?: number;
}

export interface WeeklyGrowthSummary {
  completedLessonsCount: number;
  skillsPracticedCount: number;
  challengesCompletedCount: number;
  practicalTasksCount: number;
  characterAreasPracticedCount: number;
  reflectionEntriesCount: number;
  communityActionsCount: number;
  topRecommendation: GrowthRecommendation;
  growthStreakDays: number;
  encouragingMessageUrdu: string;
  encouragingMessageEn: string;
}

export interface CommunityServiceOpportunity {
  id: string;
  titleUrdu: string;
  titleEn: string;
  categoryUrdu: string;
  categoryEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  practicalStepUrdu: string;
  practicalStepEn: string;
  iconName: string;
  estimatedMinutes: number;
  points: number;
}

export type MentorChallengeType = 'daily' | 'seven_day' | 'character' | 'skill' | 'community';

export interface MentorChallenge {
  id: string;
  type: MentorChallengeType;
  typeUrdu: string;
  typeEn: string;
  titleUrdu: string;
  titleEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  actionUrdu: string;
  actionEn: string;
  estimatedMinutes: number;
  points: number;
  categoryUrdu: string;
  categoryEn: string;
  quranOrHadithRefUrdu?: string;
  quranOrHadithRefEn?: string;
  badgeNameUrdu?: string;
  badgeNameEn?: string;
  iconName: string;
  daysCount?: number;
}

export type DecisionCategory = 
  | 'anger_fighting'
  | 'revenge'
  | 'bad_friendship_peer_pressure'
  | 'social_media_wasting_time'
  | 'lying_dishonesty'
  | 'cheating_fraud'
  | 'bullying_mockery'
  | 'parents_disrespect'
  | 'jealousy_envy'
  | 'money_misuse_scams'
  | 'giving_up_education'
  | 'dangerous_behavior'
  | 'substance_temptation'
  | 'family_community_conflict';

export interface ConsequenceMap {
  immediateEffectUrdu: string;
  immediateEffectEn: string;
  shortTermEffectUrdu: string;
  shortTermEffectEn: string;
  longTermEffectUrdu: string;
  longTermEffectEn: string;
  familyEffectUrdu: string;
  familyEffectEn: string;
  societyEffectUrdu: string;
  societyEffectEn: string;
  characterEffectUrdu: string;
  characterEffectEn: string;
  islamicEthicalConsiderationUrdu: string;
  islamicEthicalConsiderationEn: string;
}

export interface DecisionOption {
  id: string;
  labelUrdu: string;
  labelEn: string;
  textUrdu: string;
  textEn: string;
  isConstructive: boolean;
  consequenceMap: ConsequenceMap;
  moralLessonUrdu: string;
  moralLessonEn: string;
  practicalActionUrdu: string;
  practicalActionEn: string;
  sourceLabelUrdu: 'قرآن' | 'حدیث' | 'صحابی کی زندگی سے سبق' | 'عملی اخلاقی رہنمائی';
  sourceLabelEn: 'Quran' | 'Hadith' | 'Companion Lesson' | 'Practical Ethical Guidance';
  islamicReferenceUrdu: string;
  islamicReferenceEn: string;
}

export interface DecisionScenario {
  id: string;
  category: DecisionCategory;
  titleUrdu: string;
  titleEn: string;
  situationUrdu: string;
  situationEn: string;
  stopPauseStepUrdu: string;
  stopPauseStepEn: string;
  understandQuestionUrdu: string;
  understandQuestionEn: string;
  options: DecisionOption[];
  iconName: string;
}

export type RetentionCycleStage = 'learn' | 'remember' | 'review' | 'practice' | 'apply';

export interface RetentionQuestionOption {
  id: string;
  textUrdu: string;
  textEn: string;
  isCorrect: boolean;
}

export interface LearnRememberPracticeItem {
  id: string;
  category: 'skill' | 'islamic' | 'character' | 'money' | 'health';
  titleUrdu: string;
  titleEn: string;
  keyLessonSummaryUrdu: string;
  keyLessonSummaryEn: string;
  isIslamic: boolean;
  bismillahHeader?: string;
  verifiedSourceUrdu?: string;
  verifiedSourceEn?: string;
  stage: RetentionCycleStage;
  difficultyLevel: 1 | 2 | 3;
  reviewQuestionUrdu: string;
  reviewQuestionEn: string;
  options: RetentionQuestionOption[];
  gentleRevisionUrdu: string;
  gentleRevisionEn: string;
  practicalActionUrdu: string;
  practicalActionEn: string;
  advancedActionUrdu?: string;
  advancedActionEn?: string;
  aiMentorPromptUrdu: string;
  aiMentorPromptEn: string;
  lastReviewedAt?: string;
  nextReviewTimingUrdu: string;
  nextReviewTimingEn: string;
}

// ==========================================
// 🌱 MY IMPACT & GOOD DEEDS (میرا مثبت اثر و آج کا اچھا کام)
// ==========================================

export type PersonalImpactCategory =
  | 'family'                // 1. Family (خاندان)
  | 'community'             // 2. Community (محلہ و برادری)
  | 'helping_others'        // 3. Helping Others (دوسروں کی مدد)
  | 'teaching_knowledge'    // 4. Teaching/Sharing Knowledge (علم و ہنر سکھانا)
  | 'environment'           // 5. Environment (ماحول و صفائی)
  | 'ethical_work';         // 6. Ethical Work (دیانتدارانہ کام)

export interface PersonalImpactRecord {
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
  createdAt: string;
  bismillahHeader?: string;
  verifiedSourceUrdu?: string;
  verifiedSourceEn?: string;
}

export type GoodDeedCategory =
  | 'family'             // 1. ❤️ Family (خاندان)
  | 'people'             // 2. 🤝 People (لوگ / ہمدردی)
  | 'community'          // 3. 🏘️ Community (محلہ و برادری)
  | 'environment'        // 4. 🌱 Environment (ماحول و صفائی)
  | 'knowledge'          // 5. 📚 Knowledge (علم و رہنمائی)
  | 'work_honesty'       // 6. 💼 Work & Honesty (کام و دیانت)
  | 'self_discipline'    // 7. 🧠 Self-Discipline (ضبطِ نفس و صبر)
  | 'character_worship'  // 8. 🕌 Character & Worship (اخلاق و بندگی)
  | 'humanity';          // 9. 🌍 Humanity (انسانیت کی خدمت)

export interface GoodDeedItem {
  id: string;
  category: GoodDeedCategory;
  categoryUrdu: string;
  categoryEn: string;
  categoryEmoji: string;
  titleUrdu: string;
  titleEn: string;
  descriptionUrdu: string;
  descriptionEn: string;
  actionStepUrdu: string;
  actionStepEn: string;
  estimatedMinutes: number; // 3, 5, 10, 15, 20
  points: number; // e.g. 15 or 20
  targetSkillUrdu: string; // e.g. "خاندانی ذمہ داری", "فعال سماعت", "ڈیجیٹل مہارت"
  targetSkillEn: string; // e.g. "Family Responsibility", "Active Listening", "Digital Literacy"
  growthAreaId: GrowthAreaId;
  quranOrHadithRefUrdu?: string;
  quranOrHadithRefEn?: string;
  iconName: string;
  targetAudience?: {
    minAge?: number;
    maxAge?: number;
    occupations?: string[];
    interests?: string[];
  };
}

// ==========================================
// 💡 زندگی کی عملی مہارتیں (PRACTICAL LIFE SKILLS)
// ==========================================

export type LifeSkillCategoryId =
  | 'money_earning'             // 1. 💰 پیسہ بنانا (Earning, saving, budgeting, gradual wealth)
  | 'mind_psychology'          // 2. 🧠 ذہن کو استعمال کرنا (Thinking, emotions, habits, mindset)
  | 'success_discipline'        // 3. 🎯 کامیاب ہونا (Goals, direction, discipline, consistency)
  | 'business_sales'           // 4. 💼 کاروبار کرنا (Business ideas, sales, marketing, branding)
  | 'effective_communication'  // 5. 🗣️ اپنی بات مؤثر انداز میں پیش کرنا (Speaking, storytelling, persuasion)
  | 'high_income_skills'       // 6. 🚀 زیادہ کمانے والی مہارتیں (High-income market skills, monetization)
  | 'better_decisions'         // 7. ⚖️ بہتر فیصلے کرنا (Problem solving, risk awareness, choices)
  | 'understanding_people'     // 8. 🤝 لوگوں کو سمجھنا (Human behavior, relationships, body language)
  | 'leadership_teamwork'      // 9. 👑 لیڈرشپ سیکھنا (Responsibility, teamwork, leading in crisis)
  | 'time_energy_management'   // 10. ⏳ وقت کو دولت بنانا (Time, attention and energy management)
  | 'learning_from_books'      // 11. 📚 بہترین کتابوں سے سیکھنا (Wisdom from top business/psychology books)
  | 'knowledge_into_action';   // 12. ⚡ علم کو عمل میں بدلنا (Taking concrete daily action)

export interface LifeSkillCategoryMeta {
  id: LifeSkillCategoryId;
  number: number;
  titleUrdu: string;
  titleEn: string;
  emoji: string;
  shortDescUrdu: string;
  shortDescEn: string;
  iconName: string;
  accentColor: string;
}

export interface PracticalLifeLesson {
  id: string;
  categoryId: LifeSkillCategoryId;
  titleUrdu: string;
  titleEn: string;
  subtitleUrdu: string;
  subtitleEn: string;
  keyIdeaUrdu: string;
  keyIdeaEn: string;
  sourceOrBookUrdu?: string;
  sourceOrBookEn?: string;
  realLifeExampleUrdu: string;
  realLifeExampleEn: string;
  
  // Step 1: Learn (سیکھیں)
  learnContentUrdu: string;
  learnContentEn: string;
  keyTakeawaysUrdu: string[];
  keyTakeawaysEn: string[];
  
  // Step 2: Practice (مشق کریں)
  practiceScenarioUrdu: string;
  practiceScenarioEn: string;
  practiceOptionsUrdu: string[];
  practiceOptionsEn: string[];
  practiceCorrectIndex: number;
  practiceFeedbackUrdu: string;
  practiceFeedbackEn: string;

  // Step 3: Apply (عملی قدم)
  applyActionUrdu: string;
  applyActionEn: string;
  applyChecklistUrdu: string[];
  applyChecklistEn: string[];

  // Step 4: Reflect (سوچیں)
  reflectPromptUrdu: string;
  reflectPromptEn: string;
  reflectOptionsUrdu: string[];
  reflectOptionsEn: string[];

  // Step 5: Improve (بہتری لائیں)
  improveTipUrdu: string;
  improveTipEn: string;

  // Optional legacy/alias fields
  corePrincipleUrdu?: string;
  corePrincipleEn?: string;
  realLifeSituationUrdu?: string;
  realLifeSituationEn?: string;
  proTipUrdu?: string;
  proTipEn?: string;

  estimatedMinutes: number;
  points: number;
  tagUrdu: string;
  tagEn: string;
  iconName: string;
}

export type MentorDifficultyState = 'revision_simplified' | 'balanced' | 'advanced_challenge';

export interface MentorPriorityAction {
  id: string;
  titleUrdu: string;
  titleEn: string;
  categoryUrdu: string;
  categoryEn: string;
  estimatedMinutes: number;
  points: number;
  whyUrdu: string;
  whyEn: string;
  practicalActionUrdu: string;
  practicalActionEn: string;
  targetType: 'lesson' | 'quiz_review' | 'life_skill' | 'islamic' | 'challenge' | 'good_deed';
  targetCourseId?: string;
  targetLessonId?: string;
  targetLifeSkillId?: string;
  targetChallengeId?: string;
  difficultyState: MentorDifficultyState;
}

export interface AdaptiveMentorInsight {
  // 1. What they are doing well
  doingWellUrdu: string;
  doingWellEn: string;
  doingWellKeyPointsUrdu: string[];
  doingWellKeyPointsEn: string[];

  // 2. What needs improvement
  needsImprovementUrdu: string;
  needsImprovementEn: string;
  needsImprovementKeyPointsUrdu: string[];
  needsImprovementKeyPointsEn: string[];

  // 3. One highest-priority next step
  highestPriorityNextStep: MentorPriorityAction;

  // Up to 2 secondary recommendations
  secondaryRecommendations?: MentorPriorityAction[];

  // Short 1-sentence reason for "یہ آپ کے لیے کیوں تجویز کیا گیا؟"
  recommendationReasonUrdu: string;
  recommendationReasonEn: string;

  // Connected learning loop stage: Learn -> Practice -> Mission -> Reflection -> Progress
  learningLoopStageUrdu: string;
  learningLoopStageEn: string;

  // 4. One practical action for today
  practicalActionToday: {
    titleUrdu: string;
    titleEn: string;
    descriptionUrdu: string;
    descriptionEn: string;
    estimatedMinutes: number;
    points: number;
    stepsUrdu: string[];
    stepsEn: string[];
  };

  // 5. One small challenge
  smallChallenge: {
    id: string;
    titleUrdu: string;
    titleEn: string;
    categoryUrdu: string;
    categoryEn: string;
    actionUrdu: string;
    actionEn: string;
    estimatedMinutes: number;
    points: number;
    badgeUrdu: string;
    badgeEn: string;
  };

  // Authentic Quran & Hadith guidance (with explicit verified references)
  verifiedGuidance: {
    quranTextUrdu: string;
    quranTextEn: string;
    quranSurahAndAyah: string;
    hadithTextUrdu: string;
    hadithTextEn: string;
    hadithSource: string;
    moralTakeawayUrdu: string;
    moralTakeawayEn: string;
  };

  // Teaching Style Profile
  teachingStyle: {
    audienceTierUrdu: string;
    audienceTierEn: string;
    toneUrdu: string;
    toneEn: string;
    difficultyState: MentorDifficultyState;
    difficultyBadgeUrdu: string;
    difficultyBadgeEn: string;
    dailyTimeQuotaUrdu: string;
    dailyTimeQuotaEn: string;
  };
}

// -----------------------------------------------------------------------------
// "میرے لیے کیا نیا ہے؟" (SMART DISCOVER EXPERIENCE TYPES)
// -----------------------------------------------------------------------------
export type DiscoverCategory = 
  | 'new_skills'
  | 'career_work'
  | 'business_ideas'
  | 'freelancing_digital'
  | 'books_knowledge'
  | 'personal_development'
  | 'community_service'
  | 'quran_hadith_character'
  | 'practical_life_skills';

export interface DiscoverItem {
  id: string;
  category: DiscoverCategory;
  titleUrdu: string;
  titleEn: string;
  shortDescriptionUrdu: string;
  shortDescriptionEn: string;
  
  // Why this is useful for the learner (personalized)
  whyUsefulUrdu: string;
  whyUsefulEn: string;
  
  // Difficulty & Time
  difficultyLevel: 'easy' | 'medium' | 'advanced';
  difficultyUrdu: string;
  difficultyEn: string;
  estimatedTimeUrdu: string;
  estimatedTimeEn: string;
  estimatedMinutes: number;
  
  // Target demographic & tailoring rules
  minAge?: number;
  maxAge?: number;
  targetEducation?: string[]; // e.g., 'matric', 'intermediate', 'bachelor', 'any', 'madrasa'
  targetInterests?: string[]; // keywords e.g., 'technology', 'business', 'islamic', 'writing', 'agriculture', 'freelancing'
  targetGoals?: string[];
  
  // Detailed step-by-step guidance (when user clicks to explore)
  fullDetailsUrdu?: string;
  fullDetailsEn?: string;
  actionStepsUrdu?: string[];
  actionStepsEn?: string[];
  practicalTipsUrdu?: string[];
  practicalTipsEn?: string[];
  
  // Clear single action button
  actionType: 'open_course' | 'open_modal' | 'ask_mentor' | 'navigate_tab' | 'practical_action';
  actionLabelUrdu: string;
  actionLabelEn: string;
  actionPayload?: {
    courseId?: string;
    lessonId?: string;
    tab?: string;
    prompt?: string;
  };
  
  // Badges & Tagging
  badgeUrdu?: string;
  badgeEn?: string;
  iconName?: string;
  halalNoteUrdu?: string;
  halalNoteEn?: string;
}

export interface DiscoverAreaMetadata {
  id: DiscoverCategory;
  number: number;
  nameUrdu: string;
  nameEn: string;
  icon: string;
  colorClass: string;
  descriptionUrdu: string;
  descriptionEn: string;
}

// ==========================================
// 📚 KNOWLEDGE LIBRARY (علم کا خزانہ) TYPES
// ==========================================

export type KnowledgeCategory =
  | 'quran_guidance'           // 1. قرآن سے رہنمائی
  | 'hadith'                    // 2. حدیث
  | 'seerah'                   // 3. سیرت النبی ﷺ
  | 'sahaba'                   // 4. صحابہ کرامؓ
  | 'character_ethics'         // 5. اخلاق و کردار
  | 'personal_development'     // 6. Personal Development
  | 'financial_literacy'       // 7. Money & Financial Literacy
  | 'business_entrepreneurship'// 8. Business & Entrepreneurship
  | 'communication_leadership' // 9. Communication & Leadership
  | 'digital_ai'               // 10. Digital & AI Skills
  | 'career_freelancing'       // 11. Career & Freelancing
  | 'practical_life_skills'    // 12. Practical Life Skills
  | 'environment_community'    // 13. Environment & Community
  | 'books_ideas';             // 14. Books & Ideas

export type KnowledgeDifficulty = 'easy' | 'medium' | 'advanced';

export interface KnowledgeCategoryMeta {
  id: KnowledgeCategory;
  number: number;
  titleUrdu: string;
  titleEn: string;
  iconName: string;
  colorTheme: string;
  descriptionUrdu: string;
  descriptionEn: string;
}

export interface KnowledgeLibraryItem {
  id: string;
  categoryId: KnowledgeCategory;
  categoryTitleUrdu: string;
  categoryTitleEn: string;
  titleUrdu: string;
  titleEn: string;
  shortExplanationUrdu: string;
  shortExplanationEn: string;
  difficulty: KnowledgeDifficulty;
  difficultyUrdu: string;
  difficultyEn: string;
  estimatedTimeMinutes: number;
  estimatedTimeUrdu: string;
  estimatedTimeEn: string;
  practicalBenefitUrdu: string;
  practicalBenefitEn: string;
  practicalExampleUrdu?: string;
  practicalExampleEn?: string;
  oneSmallActionUrdu?: string;
  oneSmallActionEn?: string;
  bismillahHeader?: string;
  sourceReference?: string;
  sourceReferenceUrdu?: string;
  verifiedSource?: boolean;
  keyTakeawaysUrdu: string[];
  keyTakeawaysEn: string[];
  practicalActionStepsUrdu: string[];
  practicalActionStepsEn: string[];
  reviewQuestionUrdu?: string;
  reviewQuestionEn?: string;
  reviewOptions?: { id: string; textUrdu: string; textEn: string; isCorrect: boolean }[];
  gentleRevisionUrdu?: string;
  gentleRevisionEn?: string;
  nextRecommendedStepUrdu?: string;
  nextRecommendedStepEn?: string;
  nextRecommendedStepType?: 'course' | 'mission' | 'knowledge' | 'impact' | 'skills' | 'roadmap';
  nextRecommendedStepId?: string;
  impactCategory?: 'Family' | 'Community' | 'Helping Others' | 'Teaching/Sharing Knowledge' | 'Environment' | 'Ethical Work';
  iconName?: string;
  tagsUrdu?: string[];
  tagsEn?: string[];
}

// ============================================================================
// 7-STEP DYNAMIC SMART SEARCH & PRACTICAL LESSON GENERATOR TYPES
// ============================================================================

export interface DynamicLessonStep1Learn {
  titleUrdu: string;
  titleEn: string;
  summaryUrdu: string;
  summaryEn: string;
  corePointsUrdu: string[];
  corePointsEn: string[];
  simplifiedNoteUrdu?: string;
  simplifiedNoteEn?: string;
}

export interface DynamicLessonStep2Understand {
  titleUrdu: string;
  titleEn: string;
  scenarioTitleUrdu: string;
  scenarioTitleEn: string;
  realWorldExampleUrdu: string;
  realWorldExampleEn: string;
  localContextUrdu: string;
  localContextEn: string;
}

export interface DynamicLessonStep3Think {
  titleUrdu: string;
  titleEn: string;
  reflectionQuestionUrdu: string;
  reflectionQuestionEn: string;
  promptUrdu: string;
  promptEn: string;
  suggestedAnglesUrdu: string[];
  suggestedAnglesEn: string[];
}

export interface DynamicLessonPracticeOption {
  id: string;
  textUrdu: string;
  textEn: string;
  isCorrect: boolean;
  explanationUrdu: string;
  explanationEn: string;
}

export interface DynamicLessonStep4Practice {
  titleUrdu: string;
  titleEn: string;
  challengeUrdu: string;
  challengeEn: string;
  interactiveQuestionUrdu: string;
  interactiveQuestionEn: string;
  options: DynamicLessonPracticeOption[];
}

export interface DynamicLessonStep5Action {
  titleUrdu: string;
  titleEn: string;
  todayActionUrdu: string;
  todayActionEn: string;
  actionChecklistUrdu: string[];
  actionChecklistEn: string[];
  estimatedMinutes: number;
}

export interface DynamicLessonStep6Reflection {
  titleUrdu: string;
  titleEn: string;
  promptUrdu: string;
  promptEn: string;
  sampleTakeawaysUrdu: string[];
  sampleTakeawaysEn: string[];
}

export interface DynamicLessonStep7Impact {
  titleUrdu: string;
  titleEn: string;
  selfImpactUrdu: string;
  selfImpactEn: string;
  familyImpactUrdu: string;
  familyImpactEn: string;
  societyImpactUrdu: string;
  societyImpactEn: string;
}

export interface DynamicSearchLesson {
  id: string;
  query: string;
  topicUrdu: string;
  topicEn: string;
  categoryUrdu: string;
  categoryEn: string;
  iconName: string;
  matchedCourseId?: string;
  matchedCourseTitleUrdu?: string;
  matchedCourseTitleEn?: string;
  matchedLibraryItemId?: string;
  estimatedMinutes: number;
  xpPoints: number;
  step1Learn: DynamicLessonStep1Learn;
  step2Understand: DynamicLessonStep2Understand;
  step3Think: DynamicLessonStep3Think;
  step4Practice: DynamicLessonStep4Practice;
  step5Action: DynamicLessonStep5Action;
  step6Reflection: DynamicLessonStep6Reflection;
  step7Impact: DynamicLessonStep7Impact;
}



