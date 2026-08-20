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
import { KnowledgeLibraryView } from './components/KnowledgeLibraryView';
import { WelcomeScreen } from './components/WelcomeScreen';
import { RecommendedSkill } from './types';

export const App: React.FC = () => {
  // Auth & Cloud Profile State
  const { userProfile: authProfile, updateUserProfile } = useAuth();

  // App state
  const [language, setLanguage] = useState<Language>('ur');
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [userProfile, setUserProfile] = useState<UserProfile>(authProfile);

  // Welcome Screen state: only show automatically if the user hasn't seen it yet
  const [showWelcomeScreen, setShowWelcomeScreen] = useState<boolean>(() => {
    try {
      return localStorage.getItem('seekho_welcome_seen') !== 'true';
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
  };

  const handleOpenWelcome = () => {
    setShowWelcomeScreen(true);
  };

  // Modal states
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showVisionModal, setShowVisionModal] = useState(false);
  const [showIslamicModal, setShowIslamicModal] = useState(false);
  const [showGrowthModal, setShowGrowthModal] = useState(false);
  const [showSkillPathwayModal, setShowSkillPathwayModal] = useState(false);
  const [selectedPathwaySkillId, setSelectedPathwaySkillId] = useState<string | undefined>(undefined);
  const [selectedPathwayCategoryKey, setSelectedPathwayCategoryKey] = useState<string | undefined>(undefined);
  const [islamicModalIndex, setIslamicModalIndex] = useState(0);
  const [aiTeacherPresetPrompt, setAiTeacherPresetPrompt] = useState<string | undefined>(undefined);
  const [dailyTaskCompleted, setDailyTaskCompleted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Synchronous refs to coordinate Android / browser popstate events
  const isAnyModalOpen = Boolean(
    showOnboarding ||
    selectedCourse ||
    showVisionModal ||
    showIslamicModal ||
    showGrowthModal ||
    showSkillPathwayModal
  );
  const isAnyModalOpenRef = useRef(isAnyModalOpen);
  isAnyModalOpenRef.current = isAnyModalOpen;

  const activeTabRef = useRef(activeTab);
  activeTabRef.current = activeTab;

  // Safe dismiss helper for all open modals
  const dismissAllModals = () => {
    setShowOnboarding(false);
    setSelectedCourse(null);
    setShowVisionModal(false);
    setShowIslamicModal(false);
    setShowGrowthModal(false);
    setShowSkillPathwayModal(false);
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

  const handleOpenCourse = (course: Course) => {
    setSelectedCourse(course);
    window.history.pushState({ tab: activeTab, modal: 'course', courseId: course.id }, '');
  };

  const handleCloseCourse = () => {
    setSelectedCourse(null);
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
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

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

  const handleOpenLessonFromJourney = (courseId: string) => {
    const foundCourse = COURSES_DATA.find((c) => c.id === courseId);
    if (foundCourse) {
      setSelectedCourse(foundCourse);
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
        onToggleLanguage={() => setLanguage((prev) => (prev === 'ur' ? 'en' : 'ur'))}
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
            onDismissDiscoverItem={handleDismissDiscoverItem}
            onFeedbackDiscoverItem={handleFeedbackDiscoverItem}
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

      {/* Comprehensive Personal Skill Assessment & Recommendations Modal */}
      {showOnboarding && (
        <AssessmentModal
          language={language}
          initialProfile={userProfile}
          onSaveAndSelectSkill={(updatedProfile, selectedSkill) => {
            setUserProfile(updatedProfile);
            handleCloseAssessment();
            handleNavigateToTab('mylearning');
            showToast(
              language === 'ur'
                ? `🎉 مبارک ہو! "${selectedSkill?.titleUrdu || 'نیا ہنر'}" کا ذاتی روڈ میپ فعال ہو گیا۔`
                : `🎉 Custom learning path for "${selectedSkill?.titleEn || 'Skill'}" is now active!`
            );
          }}
          onClose={handleCloseAssessment}
          onOpenAITeacherWithPrompt={handleOpenAITeacherWithPrompt}
        />
      )}

      {/* Course Modal (Lesson -> Quiz -> Practice -> Project -> Certificate) */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          language={language}
          userProfile={userProfile}
          onClose={handleCloseCourse}
          onCompleteCourse={handleCompleteCourse}
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
