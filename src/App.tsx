import React, { useState, useEffect, useRef } from 'react';
import { Course, FontSize, Language, UserProfile, GoodDeedItem, JourneyTimeLength, UserDailyJourneyProgress } from './types';
import { DEFAULT_USER_PROFILE, UI_TRANSLATIONS, COURSES_DATA } from './data/mockData';
import { useAuth } from './lib/AuthContext';
import { Navbar } from './components/Navbar';
import { BottomNavigation, NavTab } from './components/BottomNavigation';
import { HomeScreen } from './components/HomeScreen';
import { MyLearningView } from './components/MyLearningView';
import { SkillsCatalogView } from './components/SkillsCatalogView';
import { AITeacherView } from './components/AITeacherView';
import { CommunityView } from './components/CommunityView';
import { MyAreaView } from './components/MyAreaView';
import { ProfileView } from './components/ProfileView';
import { EldersWisdomView } from './components/EldersWisdomView';
import { MySkillsPortfolioView } from './components/MySkillsPortfolioView';
import { OpportunitiesView } from './components/OpportunitiesView';
import { OnboardingModal } from './components/OnboardingModal';
import { AssessmentModal } from './components/AssessmentModal';
import { CourseModal } from './components/CourseModal';
import { VisionModal } from './components/VisionModal';
import { IslamicGuidanceModal } from './components/IslamicGuidanceModal';
import { PersonalGrowthModal } from './components/PersonalGrowthModal';
import { SkillOpportunityPathModal } from './components/SkillOpportunityPathModal';
import { MindTrainingLessonModal } from './components/MindTrainingLessonModal';
import { KnowledgeLibraryView } from './components/KnowledgeLibraryView';
import { PersonalRoadmapView } from './components/PersonalRoadmapView';
import { WelcomeScreen } from './components/WelcomeScreen';
import { RecommendedSkill, DynamicSearchLesson } from './types';
import { SmartSearchLessonModal } from './components/SmartSearchLessonModal';
import { generateDynamicSearchLesson } from './utils/searchLessonGeneratorEngine';
import { Sparkles, Bot, Loader2 } from 'lucide-react';

export const App: React.FC = () => {
  // Auth & Cloud Profile State
  const { userProfile: authProfile, updateUserProfile } = useAuth();

  // App state - Default to 'dual' (Urdu + English) as specified
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('seekho_language') as Language;
      if (saved === 'dual' || saved === 'ur' || saved === 'en') return saved;
    } catch {
      // fallback
    }
    return 'dual';
  });
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [userProfile, setUserProfile] = useState<UserProfile>(authProfile);

  const handleSetLanguage = (newLang: Language) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('seekho_language', newLang);
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => {
      let next: Language = 'dual';
      if (prev === 'dual') next = 'ur';
      else if (prev === 'ur') next = 'en';
      else next = 'dual';
      try {
        localStorage.setItem('seekho_language', next);
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Welcome Screen state: only show automatically if the user hasn't seen it yet
  const [showWelcomeScreen, setShowWelcomeScreen] = useState<boolean>(() => {
    try {
      return localStorage.getItem('seekho_welcome_seen') !== 'true';
    } catch {
      return false;
    }
  });

  // Modal states: Automatically show onboarding if welcome was dismissed but onboarding not completed
  const [showOnboarding, setShowOnboarding] = useState<boolean>(() => {
    try {
      const welcomeSeen = localStorage.getItem('seekho_welcome_seen') === 'true';
      const onboarded = localStorage.getItem('seekho_onboarding_completed') === 'true';
      return welcomeSeen && !onboarded;
    } catch {
      return false;
    }
  });

  // Keep local userProfile in sync with authProfile when auth state loads
  useEffect(() => {
    if (authProfile) {
      setUserProfile(authProfile);
    }
  }, [authProfile]);

  // Welcome dismiss handler (stores seen state so returning users open directly)
  const handleDismissWelcome = () => {
    try {
      localStorage.setItem('seekho_welcome_seen', 'true');
    } catch (e) {
      console.error(e);
    }
    setShowWelcomeScreen(false);
    try {
      const onboarded = localStorage.getItem('seekho_onboarding_completed') === 'true';
      if (!onboarded) {
        setShowOnboarding(true);
      }
    } catch {
      setShowOnboarding(true);
    }
  };

  const handleOpenWelcome = () => {
    setShowWelcomeScreen(true);
  };

  // Modal states
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showVisionModal, setShowVisionModal] = useState(false);
  const [showIslamicModal, setShowIslamicModal] = useState(false);
  const [showGrowthModal, setShowGrowthModal] = useState(false);
  const [showMindLessonModal, setShowMindLessonModal] = useState(false);
  const [showSkillPathwayModal, setShowSkillPathwayModal] = useState(false);
  const [selectedPathwaySkillId, setSelectedPathwaySkillId] = useState<string | undefined>(undefined);
  const [selectedPathwayCategoryKey, setSelectedPathwayCategoryKey] = useState<string | undefined>(undefined);
  const [selectedCourseInitialStep, setSelectedCourseInitialStep] = useState<'detail' | 'lesson' | 'quiz' | 'practice'>('detail');
  const [selectedCourseInitialLessonId, setSelectedCourseInitialLessonId] = useState<string | undefined>(undefined);
  const [islamicModalIndex, setIslamicModalIndex] = useState(0);
  const [aiTeacherPresetPrompt, setAiTeacherPresetPrompt] = useState<string | undefined>(undefined);
  const [dailyTaskCompleted, setDailyTaskCompleted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Smart Search & Dynamic 7-Step Lesson Generator State
  const [activeSearchLesson, setActiveSearchLesson] = useState<DynamicSearchLesson | null>(null);
  const [isGeneratingSearchLesson, setIsGeneratingSearchLesson] = useState(false);

  // Synchronous refs to coordinate Android / browser popstate events
  const isAnyModalOpen = Boolean(
    showOnboarding ||
    selectedCourse ||
    showVisionModal ||
    showIslamicModal ||
    showGrowthModal ||
    showMindLessonModal ||
    showSkillPathwayModal ||
    activeSearchLesson
  );
  const isAnyModalOpenRef = useRef(isAnyModalOpen);
  isAnyModalOpenRef.current = isAnyModalOpen;

  const activeTabRef = useRef(activeTab);
  activeTabRef.current = activeTab;

  // Safe dismiss helper for all open modals
  const dismissAllModals = () => {
    setShowOnboarding(false);
    setSelectedCourse(null);
    setSelectedCourseInitialStep('detail');
    setSelectedCourseInitialLessonId(undefined);
    setShowVisionModal(false);
    setShowIslamicModal(false);
    setShowGrowthModal(false);
    setShowMindLessonModal(false);
    setShowSkillPathwayModal(false);
    setActiveSearchLesson(null);
    setIsGeneratingSearchLesson(false);
  };

  const handleTriggerSmartSearch = (query: string) => {
    if (!query || !query.trim()) return;
    setIsGeneratingSearchLesson(true);
    
    // Smooth, realistic AI synthesis transition
    setTimeout(() => {
      try {
        const generated = generateDynamicSearchLesson(query.trim(), userProfile, language);
        setActiveSearchLesson(generated);
        window.history.pushState({ tab: activeTab, modal: 'search_lesson' }, '');
      } catch (err) {
        console.error('Error generating search lesson:', err);
      } finally {
        setIsGeneratingSearchLesson(false);
      }
    }, 450);
  };

  const handleCloseSearchLesson = () => {
    setActiveSearchLesson(null);
    if (window.history.state?.modal === 'search_lesson') {
      window.history.back();
    }
  };

  const handleAddToDailyJourneyFromSearch = (lesson: DynamicSearchLesson, reflection: string) => {
    const points = lesson.xpPoints || 25;
    const newPoints = userProfile.points + points;
    const newStreak = userProfile.streakDays + 1;

    const currentCompleted = userProfile.completedLifeSkillLessonIds || [];
    const updatedCompleted = currentCompleted.includes(lesson.id) ? currentCompleted : [...currentCompleted, lesson.id];

    const currentReflections = userProfile.lifeSkillReflections || {};
    const updatedReflections = reflection ? { ...currentReflections, [lesson.id]: reflection } : currentReflections;

    setUserProfile((prev) => ({
      ...prev,
      points: newPoints,
      streakDays: newStreak,
      completedLifeSkillLessonIds: updatedCompleted,
      lifeSkillReflections: updatedReflections,
    }));

    updateUserProfile({
      points: newPoints,
      streakDays: newStreak,
      completedLifeSkillLessonIds: updatedCompleted,
      lifeSkillReflections: updatedReflections,
    });

    showToast(
      language === 'ur'
        ? `🎉 ماشاءاللہ! "${lesson.topicUrdu}" آپ کے روزمرہ سفر اور پروفائل میں شامل کر دیا گیا ہے (+${points} XP)`
        : `🎉 Masha’Allah! "${lesson.topicEn}" added to your daily journey (+${points} XP)`
    );
  };

  // Dedicated modal open/close helpers with history state synchronization
  const handleOpenAssessment = () => {
    setShowOnboarding(true);
    window.history.pushState({ tab: activeTab, modal: 'assessment' }, '');
  };

  const handleCloseAssessment = () => {
    setShowOnboarding(false);
    if (window.history.state?.modal === 'assessment') {
      window.history.back();
    }
  };

  const handleOpenCourse = (
    course: Course,
    initialStep: 'detail' | 'lesson' | 'quiz' | 'practice' = 'detail',
    initialLessonId?: string
  ) => {
    setSelectedCourse(course);
    setSelectedCourseInitialStep(initialStep);
    setSelectedCourseInitialLessonId(initialLessonId);
    window.history.pushState({ tab: activeTab, modal: 'course', courseId: course.id }, '');
  };

  const handleCloseCourse = () => {
    setSelectedCourse(null);
    setSelectedCourseInitialStep('detail');
    setSelectedCourseInitialLessonId(undefined);
    if (window.history.state?.modal === 'course') {
      window.history.back();
    }
  };

  const handleOpenVisionModal = () => {
    setShowVisionModal(true);
    window.history.pushState({ tab: activeTab, modal: 'vision' }, '');
  };

  const handleCloseVisionModal = () => {
    setShowVisionModal(false);
    if (window.history.state?.modal === 'vision') {
      window.history.back();
    }
  };

  const handleOpenIslamicModal = (lessonIndex: number = 0) => {
    setIslamicModalIndex(lessonIndex);
    setShowIslamicModal(true);
    window.history.pushState({ tab: activeTab, modal: 'islamic' }, '');
  };

  const handleCloseIslamicModal = () => {
    setShowIslamicModal(false);
    if (window.history.state?.modal === 'islamic') {
      window.history.back();
    }
  };

  const handleOpenGrowthModal = () => {
    setShowGrowthModal(true);
    window.history.pushState({ tab: activeTab, modal: 'growth' }, '');
  };

  const handleCloseGrowthModal = () => {
    setShowGrowthModal(false);
    if (window.history.state?.modal === 'growth') {
      window.history.back();
    }
  };

  const handleOpenMindLessonModal = () => {
    setShowMindLessonModal(true);
    window.history.pushState({ tab: activeTab, modal: 'mindLesson' }, '');
  };

  const handleCloseMindLessonModal = () => {
    setShowMindLessonModal(false);
    if (window.history.state?.modal === 'mindLesson') {
      window.history.back();
    }
  };

  const handleCompleteMindLesson = (pointsAwarded: number = 30, reflectionData?: any) => {
    const updatedPoints = (userProfile.points || 0) + pointsAwarded;
    const completedLifeSkillIds = Array.from(
      new Set([...(userProfile.completedLifeSkillLessonIds || []), 'pls-mind-empty-mind'])
    );

    const updatedProfile: Partial<UserProfile> = {
      points: updatedPoints,
      completedLifeSkillLessonIds: completedLifeSkillIds
    };

    setUserProfile(prev => ({
      ...prev,
      ...updatedProfile
    }));

    updateUserProfile(updatedProfile);

    showToast(
      language === 'ur'
        ? `🌟 ماشاءاللہ! آپ نے "خالی ذہن سب سے زیادہ شور مچاتا ہے" سبق مکمل کر کے +${pointsAwarded} پوائنٹس حاصل کیے!`
        : `🌟 Lesson Completed! You earned +${pointsAwarded} points!`
    );
  };

  const handleOpenSkillPathway = (skillId?: string, categoryKey?: string) => {
    setSelectedPathwaySkillId(skillId);
    setSelectedPathwayCategoryKey(categoryKey);
    setShowSkillPathwayModal(true);
    window.history.pushState({ tab: activeTab, modal: 'pathway' }, '');
  };

  const handleCloseSkillPathway = () => {
    setShowSkillPathwayModal(false);
    if (window.history.state?.modal === 'pathway') {
      window.history.back();
    }
  };

  // Tab navigation helper with history state pushing
  const handleNavigateToTab = (newTab: NavTab) => {
    if (newTab === activeTab) return;
    dismissAllModals();
    window.history.pushState({ tab: newTab, modal: null }, '');
    setActiveTab(newTab);
  };

  // Handle Android system back button (popstate) & Escape key
  useEffect(() => {
    if (!window.history.state) {
      window.history.replaceState({ tab: 'home', modal: null }, '');
    }

    const handlePopState = (event: PopStateEvent) => {
      // 1. If any modal/popup is open, close it first without navigating away
      if (isAnyModalOpenRef.current) {
        dismissAllModals();
        return;
      }

      // 2. If no modal is open, return to previous app tab or fallback to home
      if (event.state?.tab) {
        setActiveTab(event.state.tab);
      } else if (activeTabRef.current !== 'home') {
        setActiveTab('home');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAnyModalOpenRef.current) {
        dismissAllModals();
        if (window.history.state?.modal) {
          window.history.back();
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCompletePathwayProject = (pathwayId: string, projectId: string, points: number = 30) => {
    const currentCompleted = userProfile.completedPathwayProjectIds || [];
    if (currentCompleted.includes(projectId)) return;

    const updated = [...currentCompleted, projectId];
    const newPoints = userProfile.points + points;
    const newStreak = userProfile.streakDays + 1;

    setUserProfile((prev) => ({
      ...prev,
      points: newPoints,
      streakDays: newStreak,
      completedPathwayProjectIds: updated,
    }));

    updateUserProfile({
      points: newPoints,
      streakDays: newStreak,
      completedPathwayProjectIds: updated,
    });

    showToast(
      language === 'ur'
        ? `🎉 ماشاءاللہ! عملی پروجیکٹ مکمل ہوا (+${points} پوائنٹس)`
        : `🎉 Project marked complete! (+${points} pts)`
    );
  };

  // Adjust RTL / LTR document direction and font scaling class on body
  useEffect(() => {
    document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = language === 'en' ? 'en' : 'ur';

    // Font size scaling class
    document.body.classList.remove('font-size-normal', 'font-size-large', 'font-size-xlarge');
    document.body.classList.add(`font-size-${fontSize}`);
  }, [language, fontSize]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Sync profile to local and cloud storage
  const handleUpdateProfile = (updated: Partial<UserProfile>) => {
    setUserProfile((prev) => ({ ...prev, ...updated }));
    updateUserProfile(updated);
    showToast(language === 'ur' ? 'پروفائل کامیابی سے محفوظ ہو گئی۔' : 'Profile updated successfully.');
  };

  const handleCompleteDailyTask = () => {
    if (dailyTaskCompleted) return;
    setDailyTaskCompleted(true);
    setUserProfile((prev) => ({
      ...prev,
      points: prev.points + 25,
      streakDays: prev.streakDays + 1,
    }));
    showToast(language === 'ur' ? '🎉 ماشاءاللہ! آج کا عملی کام مکمل ہوا۔ (+25 پوائنٹس)' : '🎉 Daily practical task completed! (+25 pts)');
  };

  const handleCompleteDailyPlanDay = (dayNumber: number, points: number) => {
    const dayKey = `${userProfile.activeSkillPathId || 'active'}-day-${dayNumber}`;
    if (userProfile.completedDailyPlanDayIds.includes(dayKey)) return;

    setUserProfile((prev) => ({
      ...prev,
      points: prev.points + points,
      streakDays: prev.streakDays + 1,
      completedDailyPlanDayIds: [...prev.completedDailyPlanDayIds, dayKey],
    }));

    showToast(
      language === 'ur' 
        ? `🎉 ماشاءاللہ! دن ${dayNumber} کا کام مکمل ہوا۔ (+${points} پوائنٹس)` 
        : `🎉 Day ${dayNumber} task completed! (+${points} pts)`
    );
  };

  const handleCompleteCourse = (courseId: string, points: number) => {
    setUserProfile((prev) => ({
      ...prev,
      points: prev.points + points,
      enrolledCourseIds: prev.enrolledCourseIds.includes(courseId)
        ? prev.enrolledCourseIds
        : [...prev.enrolledCourseIds, courseId],
      completedProjectIds: prev.completedProjectIds.includes(courseId)
        ? prev.completedProjectIds
        : [...prev.completedProjectIds, courseId],
    }));
    showToast(language === 'ur' ? `🎉 مبارک ہو! آپ کو سرٹیفکیٹ اور ${points} پوائنٹس مل گئے۔` : `🎉 Course completed! You earned ${points} skill points.`);
  };

  const handleOpenAITeacherWithPrompt = (presetPrompt?: string) => {
    setAiTeacherPresetPrompt(presetPrompt);
    handleNavigateToTab('aiteacher');
  };

  const handleCompleteIslamicLesson = (lessonId: string, points: number = 25) => {
    const currentCompleted = userProfile.completedIslamicLessonIds || [];
    if (currentCompleted.includes(lessonId)) return;

    const updatedCompleted = [...currentCompleted, lessonId];
    setUserProfile((prev) => ({
      ...prev,
      points: prev.points + points,
      streakDays: prev.streakDays + 1,
      completedIslamicLessonIds: updatedCompleted,
    }));

    updateUserProfile({
      points: userProfile.points + points,
      streakDays: userProfile.streakDays + 1,
      completedIslamicLessonIds: updatedCompleted,
    });

    showToast(
      language === 'ur'
        ? '🎉 ماشاءاللہ! آج کا سبق مکمل ہوگیا۔ (+25 پوائنٹس)'
        : '🎉 Masha’Allah! Today’s lesson completed! (+25 pts)'
    );
  };

  const handleCompleteIslamicChallenge = (lessonId: string, reflectionText?: string, challengeTitleUrdu?: string) => {
    const currentChallenges = userProfile.completedIslamicChallengeIds || [];
    const updatedChallenges = currentChallenges.includes(lessonId) ? currentChallenges : [...currentChallenges, lessonId];
    
    const updatedReflections = {
      ...(userProfile.islamicReflections || {}),
      ...(reflectionText ? {
        [lessonId]: {
          reflectionText,
          completedAt: new Date().toLocaleDateString('ur-PK'),
          challengeTitleUrdu: challengeTitleUrdu || ''
        }
      } : {})
    };

    setUserProfile((prev) => ({
      ...prev,
      points: prev.points + 20,
      completedIslamicChallengeIds: updatedChallenges,
      islamicReflections: updatedReflections,
    }));

    updateUserProfile({
      points: userProfile.points + 20,
      completedIslamicChallengeIds: updatedChallenges,
      islamicReflections: updatedReflections,
    });

    showToast(
      language === 'ur'
        ? '🌟 ماشاءاللہ! آج کا اخلاقی چیلنج مکمل اور محفوظ ہو گیا۔ (+20 پوائنٹس)'
        : '🌟 Masha’Allah! Today’s character challenge completed and saved! (+20 pts)'
    );
  };

  const handleSaveIslamicReflection = (lessonId: string, reflectionText: string, challengeTitleUrdu?: string) => {
    const updatedReflections = {
      ...(userProfile.islamicReflections || {}),
      [lessonId]: {
        reflectionText,
        completedAt: new Date().toLocaleDateString('ur-PK'),
        challengeTitleUrdu: challengeTitleUrdu || ''
      }
    };

    setUserProfile((prev) => ({
      ...prev,
      islamicReflections: updatedReflections,
    }));

    updateUserProfile({
      islamicReflections: updatedReflections,
    });

    showToast(
      language === 'ur'
        ? '✍️ آپ کا خود احتسابی کا تاثر کامیابی سے محفوظ ہو گیا۔'
        : '✍️ Your reflection has been saved.'
    );
  };

  const handleCompleteGoodDeed = (deed: GoodDeedItem) => {
    const currentCompleted = userProfile.completedGoodDeedIds || [];
    if (currentCompleted.includes(deed.id)) return;

    const updatedCompleted = [...currentCompleted, deed.id];
    const currentGrowthTasks = userProfile.completedGrowthTaskIds || [];
    const updatedGrowthTasks = currentGrowthTasks.includes(deed.id) ? currentGrowthTasks : [...currentGrowthTasks, deed.id];

    setUserProfile((prev) => ({
      ...prev,
      points: prev.points + deed.points,
      streakDays: prev.streakDays + 1,
      completedGoodDeedIds: updatedCompleted,
      completedGrowthTaskIds: updatedGrowthTasks,
    }));

    updateUserProfile({
      points: userProfile.points + deed.points,
      streakDays: userProfile.streakDays + 1,
      completedGoodDeedIds: updatedCompleted,
      completedGrowthTaskIds: updatedGrowthTasks,
    });

    showToast(
      language === 'ur'
        ? `🌱 ماشاءاللہ! آپ نے ایک اچھا کام کیا اور اپنی "${deed.targetSkillUrdu}" صلاحیت بھی بہتر کی۔ (+${deed.points} پوائنٹس)`
        : `🌱 Masha’Allah! You did a good deed and improved your "${deed.targetSkillEn}" skill! (+${deed.points} pts)`
    );
  };

  const handleCompleteLifeLesson = (lessonId: string, points: number, reflectionText?: string) => {
    const currentCompleted = userProfile.completedLifeSkillLessonIds || [];
    const updatedCompleted = currentCompleted.includes(lessonId) ? currentCompleted : [...currentCompleted, lessonId];
    
    const currentReflections = userProfile.lifeSkillReflections || {};
    const updatedReflections = reflectionText ? { ...currentReflections, [lessonId]: reflectionText } : currentReflections;

    setUserProfile((prev) => ({
      ...prev,
      points: prev.points + points,
      streakDays: prev.streakDays + 1,
      completedLifeSkillLessonIds: updatedCompleted,
      lifeSkillReflections: updatedReflections,
    }));

    updateUserProfile({
      points: userProfile.points + points,
      streakDays: userProfile.streakDays + 1,
      completedLifeSkillLessonIds: updatedCompleted,
      lifeSkillReflections: updatedReflections,
    });

    showToast(
      language === 'ur'
        ? `💡 ماشاءاللہ! آپ نے عملی مہارت کا سبق مکمل کیا (+${points} پوائنٹس)`
        : `💡 Masha’Allah! You completed a practical life skill lesson (+${points} pts)`
    );
  };

  const handleCompleteMission = (missionId: string, points: number, reflectionText: string, moodTag?: string) => {
    const currentCompleted = userProfile.completedMissionIds || [];
    const updatedCompleted = currentCompleted.includes(missionId) ? currentCompleted : [...currentCompleted, missionId];

    const currentReflections = userProfile.missionReflections || {};
    const updatedReflections = {
      ...currentReflections,
      [missionId]: {
        reflectionText,
        completedAt: new Date().toLocaleDateString('ur-PK'),
        moodTag
      }
    };

    const newPoints = userProfile.points + points;
    const newStreak = userProfile.streakDays + 1;

    setUserProfile((prev) => ({
      ...prev,
      points: newPoints,
      streakDays: newStreak,
      completedMissionIds: updatedCompleted,
      missionReflections: updatedReflections,
    }));

    updateUserProfile({
      points: newPoints,
      streakDays: newStreak,
      completedMissionIds: updatedCompleted,
      missionReflections: updatedReflections,
    });

    showToast(
      language === 'ur'
        ? `🎯 ماشاءاللہ! آپ نے آج کا مشن مکمل کر لیا (+${points} پوائنٹس)`
        : `🎯 Masha’Allah! Real-life mission completed (+${points} pts)`
    );
  };

  const handleCompleteDailyJourney = (
    timeLength: JourneyTimeLength,
    points: number,
    reflectionText: string,
    lessonId: string,
    missionId: string
  ) => {
    const todayStr = new Date().toISOString().split('T')[0];
    const prevProgress = userProfile.dailyJourneyProgress || {
      consecutiveJourneyDays: 0,
      completedJourneyCount: 0,
    };

    const isConsecutive = prevProgress.lastCompletedDate
      ? (new Date().getTime() - new Date(prevProgress.lastCompletedDate).getTime()) <= (2 * 24 * 60 * 60 * 1000)
      : true;

    const newConsecutive = isConsecutive ? (prevProgress.consecutiveJourneyDays || 0) + 1 : 1;
    const newCount = (prevProgress.completedJourneyCount || 0) + 1;

    const updatedHistory = {
      ...(prevProgress.history || {}),
      [todayStr]: {
        completedAt: new Date().toLocaleDateString('ur-PK'),
        timeLength,
        reflection: reflectionText,
        lessonId,
        missionId,
        pointsEarned: points,
      },
    };

    const newDailyJourneyProgress: UserDailyJourneyProgress = {
      lastCompletedDate: todayStr,
      consecutiveJourneyDays: newConsecutive,
      completedJourneyCount: newCount,
      timePreference: timeLength,
      history: updatedHistory,
    };

    // Update completed lesson ids
    const currentCompletedLessons = userProfile.completedLessonIds || [];
    const updatedLessons = currentCompletedLessons.includes(lessonId)
      ? currentCompletedLessons
      : [...currentCompletedLessons, lessonId];

    // Update completed mission ids & reflections
    const currentCompletedMissions = userProfile.completedMissionIds || [];
    const updatedMissions = currentCompletedMissions.includes(missionId)
      ? currentCompletedMissions
      : [...currentCompletedMissions, missionId];

    const currentMissionReflections = userProfile.missionReflections || {};
    const updatedMissionReflections = {
      ...currentMissionReflections,
      [missionId]: {
        reflectionText,
        completedAt: new Date().toLocaleDateString('ur-PK'),
      },
    };

    const newPoints = userProfile.points + points;
    const newStreak = userProfile.streakDays + 1;

    const updatedProfile: Partial<UserProfile> = {
      points: newPoints,
      streakDays: newStreak,
      completedLessonIds: updatedLessons,
      completedMissionIds: updatedMissions,
      missionReflections: updatedMissionReflections,
      dailyJourneyProgress: newDailyJourneyProgress,
    };

    setUserProfile((prev) => ({
      ...prev,
      ...updatedProfile,
    }));

    updateUserProfile(updatedProfile);

    showToast(
      language === 'ur'
        ? `🌟 ماشاءاللہ! آج آپ نے اپنے آپ میں ایک قدم بہتری پیدا کی (+${points} پوائنٹس)`
        : `🌟 Masha’Allah! Today you took one step towards improving yourself (+${points} pts)`
    );
  };

  const handleCompletePurposeAction = (actionId: string, points: number, title: string) => {
    const newPoints = userProfile.points + points;
    const newStreak = userProfile.streakDays + 1;

    setUserProfile((prev) => ({
      ...prev,
      points: newPoints,
      streakDays: newStreak,
    }));

    updateUserProfile({
      points: newPoints,
      streakDays: newStreak,
    });

    showToast(
      language === 'ur'
        ? `🎯 ماشاءاللہ! آج کا ہدف مکمل ہوا: ${title} (+${points} پوائنٹس)`
        : `🎯 Goal achieved: ${title} (+${points} pts)`
    );
  };

  const handleLogCommunityDeed = (deedId: string, points: number, note: string) => {
    const currentCompleted = userProfile.completedGoodDeedIds || [];
    const updatedCompleted = currentCompleted.includes(deedId) ? currentCompleted : [...currentCompleted, deedId];
    const newPoints = userProfile.points + points;
    const newStreak = userProfile.streakDays + 1;

    setUserProfile((prev) => ({
      ...prev,
      points: newPoints,
      streakDays: newStreak,
      completedGoodDeedIds: updatedCompleted,
    }));

    updateUserProfile({
      points: newPoints,
      streakDays: newStreak,
      completedGoodDeedIds: updatedCompleted,
    });

    showToast(
      language === 'ur'
        ? `🌍 ماشاءاللہ! آپ کا یہ نیک عمل معاشرے اور انسانیت کے لیے خیر کا ذریعہ بنا (+${points} پوائنٹس)`
        : `🌍 Masha'Allah! Your positive act served the community (+${points} pts)`
    );
  };

  const handleCompleteLesson = (lessonId: string, courseId: string) => {
    const currentCompleted = userProfile.completedLessonIds || [];
    if (!currentCompleted.includes(lessonId)) {
      const updatedCompleted = [...currentCompleted, lessonId];
      const newPoints = userProfile.points + 20;
      setUserProfile((prev) => ({
        ...prev,
        completedLessonIds: updatedCompleted,
        points: newPoints,
      }));
      updateUserProfile({
        completedLessonIds: updatedCompleted,
        points: newPoints,
      });
      showToast(
        language === 'ur'
          ? '🎉 ماشاءاللہ! سبق کامیابی سے مکمل ہوا۔ (+20 پوائنٹس)'
          : '🎉 Lesson completed! (+20 pts)'
      );
    }
  };

  const handleOpenLessonFromJourney = (courseId: string, lessonId?: string) => {
    const foundCourse = COURSES_DATA.find((c) => c.id === courseId);
    if (foundCourse) {
      handleOpenCourse(foundCourse, 'lesson', lessonId);
    }
  };

  const handleDismissDiscoverItem = (itemId: string) => {
    const currentDismissed = userProfile.dismissedDiscoverItemIds || [];
    if (currentDismissed.includes(itemId)) return;

    const updatedDismissed = [...currentDismissed, itemId];
    const updatedProfile: Partial<UserProfile> = {
      dismissedDiscoverItemIds: updatedDismissed
    };

    setUserProfile((prev) => ({
      ...prev,
      ...updatedProfile
    }));

    updateUserProfile(updatedProfile);

    showToast(
      language === 'ur'
        ? '✓ تجویز ہٹا دی گئی۔ آپ کی ترجیح محفوظ کر لی گئی ہے۔'
        : '✓ Recommendation dismissed. Your preference is saved.'
    );
  };

  const handleFeedbackDiscoverItem = (itemId: string, helpful: boolean) => {
    const currentHelpful = userProfile.helpfulDiscoverItemIds || [];
    const currentUnhelpful = userProfile.unhelpfulDiscoverItemIds || [];

    let updatedHelpful = [...currentHelpful];
    let updatedUnhelpful = [...currentUnhelpful];

    if (helpful) {
      if (!updatedHelpful.includes(itemId)) updatedHelpful.push(itemId);
      updatedUnhelpful = updatedUnhelpful.filter(id => id !== itemId);
    } else {
      if (!updatedUnhelpful.includes(itemId)) updatedUnhelpful.push(itemId);
      updatedHelpful = updatedHelpful.filter(id => id !== itemId);
    }

    const updatedProfile: Partial<UserProfile> = {
      helpfulDiscoverItemIds: updatedHelpful,
      unhelpfulDiscoverItemIds: updatedUnhelpful
    };

    setUserProfile((prev) => ({
      ...prev,
      ...updatedProfile
    }));

    updateUserProfile(updatedProfile);

    showToast(
      helpful
        ? (language === 'ur' ? '👍 شکریہ! آئندہ اس طرح کی مزید مفید تجاویز ملیں گی۔' : '👍 Thank you! We will recommend more items like this.')
        : (language === 'ur' ? '👌 تاثر موصول ہوا۔ ہم تجاویز کو آپ کی ضرورت کے مطابق بہتر بنائیں گے۔' : '👌 Feedback received. Future suggestions will be adjusted.')
    );
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans transition-all selection:bg-emerald-200 selection:text-emerald-950 font-size-${fontSize}`}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-18 left-1/2 -translate-x-1/2 z-50 bg-emerald-900 text-white px-5 py-2.5 rounded-2xl shadow-xl border border-emerald-500/40 text-xs sm:text-sm font-bold animate-fade-in flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Navigation */}
      <Navbar
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onChangeLanguage={handleSetLanguage}
        userProfile={userProfile}
        onOpenAssessment={handleOpenAssessment}
        onOpenVision={handleOpenVisionModal}
        onOpenOpportunities={() => handleNavigateToTab('opportunities')}
        onOpenProfileTab={() => handleNavigateToTab('profile')}
        onOpenLibrary={() => handleNavigateToTab('library')}
      />

      {/* Main Body Content View Router */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-2 sm:p-4">
        {activeTab === 'home' && (
          <HomeScreen
            language={language}
            userProfile={userProfile}
            onSelectCourse={handleOpenCourse}
            onOpenAITeacher={handleOpenAITeacherWithPrompt}
            onNavigateToTab={handleNavigateToTab}
            onCompleteDailyTask={handleCompleteDailyTask}
            dailyTaskCompleted={dailyTaskCompleted}
            onOpenAssessment={handleOpenAssessment}
            onOpenVisionModal={handleOpenVisionModal}
            onOpenIslamicModal={handleOpenIslamicModal}
            onCompleteIslamicLesson={handleCompleteIslamicLesson}
            onOpenGrowthModal={handleOpenGrowthModal}
            onCompleteGoodDeed={handleCompleteGoodDeed}
            onCompleteLifeLesson={handleCompleteLifeLesson}
            onCompleteMission={handleCompleteMission}
            onCompleteDailyJourney={handleCompleteDailyJourney}
            onOpenLesson={handleOpenLessonFromJourney}
            onOpenMindLessonModal={handleOpenMindLessonModal}
            onDismissDiscoverItem={handleDismissDiscoverItem}
            onFeedbackDiscoverItem={handleFeedbackDiscoverItem}
            onCompletePurposeAction={handleCompletePurposeAction}
            onLogCommunityDeed={handleLogCommunityDeed}
            onTriggerSmartSearch={handleTriggerSmartSearch}
          />
        )}

        {activeTab === 'journey' && (
          <PersonalRoadmapView
            language={language}
            userProfile={userProfile}
            onSelectCourse={handleOpenCourse}
            onOpenAITeacherWithPrompt={handleOpenAITeacherWithPrompt}
            onRetakeAssessment={handleOpenAssessment}
            onCompleteDailyPlanDay={handleCompleteDailyPlanDay}
          />
        )}

        {activeTab === 'library' && (
          <KnowledgeLibraryView
            language={language}
            userProfile={userProfile}
            onOpenAITeacherWithPrompt={handleOpenAITeacherWithPrompt}
            onNavigateToTab={handleNavigateToTab}
            onRewardPoints={(points, msgUrdu, msgEn) => {
              const newPoints = userProfile.points + points;
              const newStreak = userProfile.streakDays + 1;
              setUserProfile((prev) => ({
                ...prev,
                points: newPoints,
                streakDays: newStreak,
              }));
              updateUserProfile({
                points: newPoints,
                streakDays: newStreak,
              });
              showToast(language === 'ur' ? msgUrdu : msgEn);
            }}
          />
        )}

        {activeTab === 'mylearning' && (
          <MyLearningView
            language={language}
            userProfile={userProfile}
            onSelectCourse={handleOpenCourse}
            onNavigateToTab={handleNavigateToTab}
            onOpenAssessment={handleOpenAssessment}
            onOpenAITeacherWithPrompt={handleOpenAITeacherWithPrompt}
            onCompleteDailyPlanDay={handleCompleteDailyPlanDay}
            onOpenIslamicModal={handleOpenIslamicModal}
            onCompleteIslamicLesson={handleCompleteIslamicLesson}
            onOpenGrowthModal={handleOpenGrowthModal}
            onOpenSkillPathway={handleOpenSkillPathway}
          />
        )}

        {activeTab === 'skills' && (
          <SkillsCatalogView
            language={language}
            userProfile={userProfile}
            onSelectCourse={handleOpenCourse}
            onOpenSkillPathway={handleOpenSkillPathway}
          />
        )}

        {activeTab === 'aiteacher' && (
          <AITeacherView
            language={language}
            userProfile={userProfile}
            initialPrompt={aiTeacherPresetPrompt}
            onNavigateToSkills={() => handleNavigateToTab('skills')}
            currentCourse={selectedCourse}
            onUpdateProfile={handleUpdateProfile}
            onOpenIslamicModal={handleOpenIslamicModal}
            onSelectCourse={handleOpenCourse}
            onOpenKnowledgeLibrary={() => handleNavigateToTab('library')}
          />
        )}

        {activeTab === 'community' && (
          <CommunityView
            language={language}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'myarea' && (
          <MyAreaView
            language={language}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView
            language={language}
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
            userProfile={userProfile}
            onUpdateProfile={handleUpdateProfile}
            onOpenAssessment={handleOpenAssessment}
            onOpenVisionModal={handleOpenVisionModal}
            onOpenPortfolio={() => handleNavigateToTab('portfolio')}
            onOpenOpportunities={() => handleNavigateToTab('opportunities')}
            onOpenWelcome={handleOpenWelcome}
          />
        )}

        {activeTab === 'portfolio' && (
          <MySkillsPortfolioView
            language={language}
            userProfile={userProfile}
            onNavigateToCourses={() => handleNavigateToTab('skills')}
          />
        )}

        {activeTab === 'opportunities' && (
          <OpportunitiesView
            language={language}
            userProfile={userProfile}
            onNavigateToCourses={() => handleNavigateToTab('skills')}
            onOpenSkillPathway={handleOpenSkillPathway}
          />
        )}

        {activeTab === 'elders' && (
          <EldersWisdomView
            language={language}
            userProfile={userProfile}
          />
        )}
      </main>

      {/* 7-Tab Bottom Navigation (Sticky) */}
      <BottomNavigation
        activeTab={activeTab}
        onSelectTab={handleNavigateToTab}
        language={language}
      />

      {/* Comprehensive Personal Learning Engine & Onboarding Modal */}
      {showOnboarding && (
        <OnboardingModal
          language={language}
          onLanguageChange={setLanguage}
          initialProfile={userProfile}
          onSaveProfile={(updatedProfile) => {
            setUserProfile(updatedProfile);
            updateUserProfile(updatedProfile);
            try {
              localStorage.setItem('seekho_onboarding_completed', 'true');
              localStorage.setItem('seekho_user_profile', JSON.stringify(updatedProfile));
            } catch (e) {
              console.warn(e);
            }
            setShowOnboarding(false);
            setActiveTab('home');
            showToast(
              language === 'ur'
                ? `🎉 ماشاءاللہ! آپ کا پرسنل لرننگ پلان اور روڈ میپ فعال ہو گیا۔`
                : `🎉 Personalized Learning Plan and Roadmap are now active!`
            );
          }}
          onClose={handleCloseAssessment}
        />
      )}

      {/* Course Modal (Lesson -> Quiz -> Practice -> Project -> Certificate) */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          language={language}
          userProfile={userProfile}
          initialStep={selectedCourseInitialStep}
          initialLessonId={selectedCourseInitialLessonId}
          onClose={handleCloseCourse}
          onCompleteCourse={handleCompleteCourse}
          onCompleteLesson={handleCompleteLesson}
          onOpenSkillPathway={handleOpenSkillPathway}
        />
      )}

      {/* Skill to Opportunity Pathway Modal (Learn -> Build -> Apply -> Earn) */}
      {showSkillPathwayModal && (
        <SkillOpportunityPathModal
          isOpen={showSkillPathwayModal}
          language={language}
          initialSkillId={selectedPathwaySkillId}
          initialCategoryKey={selectedPathwayCategoryKey}
          userProfile={userProfile}
          onClose={handleCloseSkillPathway}
          onNavigateToCourse={(courseId) => {
            handleCloseSkillPathway();
            const foundCourse = COURSES_DATA.find((c) => c.id === courseId);
            if (foundCourse) {
              handleOpenCourse(foundCourse);
            } else {
              handleNavigateToTab('skills');
            }
          }}
          onCompleteProject={handleCompletePathwayProject}
        />
      )}

      {/* Seekho 7-Step Vision Modal */}
      {showVisionModal && (
        <VisionModal
          language={language}
          onClose={handleCloseVisionModal}
        />
      )}

      {/* Islamic Character Development Modal (قرآن و حدیث سے رہنمائی) */}
      {showIslamicModal && (
        <IslamicGuidanceModal
          language={language}
          userProfile={userProfile}
          initialLessonIndex={islamicModalIndex}
          onClose={handleCloseIslamicModal}
          onCompleteLesson={(lessonId, points) => handleCompleteIslamicLesson(lessonId, points || 25)}
          onCompleteChallenge={(lessonId, reflection, title) => handleCompleteIslamicChallenge(lessonId, reflection, title)}
          onSaveReflection={(lessonId, text, title) => handleSaveIslamicReflection(lessonId, text, title)}
          onOpenAITeacherWithPrompt={handleOpenAITeacherWithPrompt}
        />
      )}

      {/* Personal Growth Engine Modal (ذاتی ترقی کا ذہین نظام) */}
      {showGrowthModal && (
        <PersonalGrowthModal
          isOpen={showGrowthModal}
          onClose={handleCloseGrowthModal}
          language={language}
          userProfile={userProfile}
          onUpdateProfile={handleUpdateProfile}
          onSelectCourse={handleOpenCourse}
          onOpenIslamicModal={handleOpenIslamicModal}
          onOpenAITeacherWithPrompt={handleOpenAITeacherWithPrompt}
        />
      )}

      {/* Featured Mind Training Lesson Modal (خالی ذہن سب سے زیادہ شور مچاتا ہے) */}
      {showMindLessonModal && (
        <MindTrainingLessonModal
          language={language}
          userProfile={userProfile}
          onClose={handleCloseMindLessonModal}
          onCompleteLesson={handleCompleteMindLesson}
          onOpenAITeacherWithPrompt={handleOpenAITeacherWithPrompt}
        />
      )}

      {/* Dynamic 7-Step Smart Search Lesson Modal */}
      {activeSearchLesson && (
        <SmartSearchLessonModal
          lesson={activeSearchLesson}
          language={language}
          userProfile={userProfile}
          onClose={handleCloseSearchLesson}
          onLanguageChange={setLanguage}
          onSelectCourse={(course) => {
            handleCloseSearchLesson();
            handleOpenCourse(course);
          }}
          onAddToDailyJourney={handleAddToDailyJourneyFromSearch}
          onOpenAITeacherWithTopic={(prompt) => {
            handleCloseSearchLesson();
            handleOpenAITeacherWithPrompt(prompt);
          }}
        />
      )}

      {/* AI Lesson Generator Loading Overlay */}
      {isGeneratingSearchLesson && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          role="status"
          aria-live="polite"
        >
          <div className="bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-emerald-500/40 max-w-md w-full text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
              <Bot className="w-8 h-8 text-emerald-700 animate-bounce" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
                {language === 'ur' 
                  ? 'سیکھو AI استاد آپ کے لیے آسان سبق تیار کر رہا ہے...' 
                  : language === 'dual'
                  ? 'سیکھو AI استاد سبق تیار کر رہا ہے... (Seekho AI is generating your guide...)'
                  : 'Seekho AI Mentor is generating your practical guide...'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-arabic">
                {language === 'ur'
                  ? '۷ مرحلہ وار عملی رہنمائی، حقیقی مثالیں اور مشقیں مرتب کی جا رہی ہیں'
                  : 'Synthesizing the 7-step practical model with local village and city examples'}
              </p>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-600 h-full w-2/3 animate-pulse" />
            </div>
          </div>
        </div>
      )}

      {/* First-Time Welcome / Splash Experience (Only shown for first-time users or on-demand) */}
      {showWelcomeScreen && (
        <WelcomeScreen
          language={language}
          onToggleLanguage={() => setLanguage((prev) => (prev === 'ur' ? 'en' : 'ur'))}
          onGetStarted={handleDismissWelcome}
        />
      )}
    </div>
  );
};

export default App;
