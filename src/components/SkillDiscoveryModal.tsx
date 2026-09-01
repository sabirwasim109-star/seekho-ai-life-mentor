import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Award, 
  Wrench, 
  Laptop, 
  Cpu, 
  Palette, 
  Scissors, 
  Store, 
  Smartphone,
  Check,
  Flame,
  Bot,
  Play,
  Volume2,
  RotateCcw,
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  ChevronUp,
  Sprout,
  Users,
  GraduationCap,
  Search,
  Briefcase,
  Globe,
  FileText,
  HeartHandshake,
  HelpCircle,
  Compass,
  ShieldCheck,
  TrendingUp,
  Home,
  SlidersHorizontal,
  FolderKanban,
  Zap
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { 
  SkillUniverseItem, 
  SKILL_UNIVERSE_ITEMS, 
  getSkillUniverseItemById 
} from '../data/skillsUniverseData';
import { 
  SkillMasterItem, 
  SKILLS_MASTER_DATA 
} from '../data/skillsMasterData';
import { 
  DISCOVERY_QUESTIONS, 
  DiscoveryQuestion, 
  UserDiscoveryProfile, 
  SkillMatch, 
  DiscoveryResultGroups,
  matchSkillsForUserProfile,
  saveDiscoveryProgress,
  loadDiscoveryProgress,
  clearDiscoveryProgress,
  saveUserDiscoveryProfile,
  loadUserDiscoveryProfile,
  toggleSaveSkillBookmark,
  getSavedSkillBookmarks
} from '../data/skillDiscoveryEngine';
import { speakText, stopSpeaking } from '../utils/speech';

interface SkillDiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  userProfile: UserProfile;
  onSelectUniverseSkill?: (skill: SkillUniverseItem) => void;
  onSelectSkill?: (skill: SkillMasterItem) => void;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
}

// Icon helper
const renderIconByName = (name: string, className = 'w-5 h-5') => {
  switch (name) {
    case 'Smartphone': return <Smartphone className={className} />;
    case 'Laptop': return <Laptop className={className} />;
    case 'Scissors': return <Scissors className={className} />;
    case 'Wrench': return <Wrench className={className} />;
    case 'Store': return <Store className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Sprout': return <Sprout className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Bot': return <Bot className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Search': return <Search className={className} />;
    case 'Users': return <Users className={className} />;
    case 'HeartHandshake': return <HeartHandshake className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Play': return <Play className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'BookOpen': return <FileText className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export const SkillDiscoveryModal: React.FC<SkillDiscoveryModalProps> = ({
  isOpen,
  onClose,
  language,
  userProfile,
  onSelectUniverseSkill,
  onSelectSkill,
  onOpenAITeacherWithPrompt,
}) => {
  const isUrdu = language === 'ur' || language === 'dual';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;
  const BackArrowIcon = isUrdu ? ArrowRight : ArrowLeft;

  // Question navigation state
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [hasSavedProfile, setHasSavedProfile] = useState<boolean>(false);
  const [activeResultTab, setActiveResultTab] = useState<'top' | 'mobile' | 'home' | 'job' | 'online' | 'business' | 'lowcost' | 'future'>('top');
  const [expandedReasonSkillId, setExpandedReasonSkillId] = useState<string | null>(null);
  const [bookmarkedSkillIds, setBookmarkedSkillIds] = useState<string[]>([]);
  const [results, setResults] = useState<DiscoveryResultGroups | null>(null);

  // Initialize or check saved state upon opening
  useEffect(() => {
    if (!isOpen) return;

    // Load saved bookmarks
    setBookmarkedSkillIds(getSavedSkillBookmarks());

    // Check if user already has a saved completed profile
    const savedProfile = loadUserDiscoveryProfile();
    const savedProgress = loadDiscoveryProgress();

    if (savedProfile && Object.keys(savedProfile).length > 0) {
      setHasSavedProfile(true);
      // Generate results for saved profile
      const calculated = matchSkillsForUserProfile(savedProfile);
      setResults(calculated);
    }

    if (savedProgress && savedProgress.answers && Object.keys(savedProgress.answers).length > 0) {
      setAnswers(savedProgress.answers);
      if (savedProgress.currentStep < DISCOVERY_QUESTIONS.length) {
        setCurrentStep(savedProgress.currentStep);
      }
    }
  }, [isOpen]);

  // Sync ESC & Android back key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        stopSpeaking();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentQ = DISCOVERY_QUESTIONS[currentStep];

  // Voice narration helper
  const handleVoiceRead = (text: string) => {
    stopSpeaking();
    speakText(text, { language: 'ur', rate: 0.84, pitch: 0.85 });
  };

  // Option selection logic
  const handleSelectSingleOption = (questionId: string, optionId: string) => {
    const updated = { ...answers, [questionId]: optionId };
    setAnswers(updated);
    saveDiscoveryProgress(currentStep, updated);

    // Auto advance to next question smoothly
    if (currentStep < DISCOVERY_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        saveDiscoveryProgress(currentStep + 1, updated);
      }, 180);
    } else {
      finalizeDiscovery(updated);
    }
  };

  const handleToggleMultiOption = (questionId: string, optionId: string) => {
    const currentList = Array.isArray(answers[questionId]) ? (answers[questionId] as string[]) : [];
    let updatedList: string[] = [];

    if (currentList.includes(optionId)) {
      updatedList = currentList.filter(id => id !== optionId);
    } else {
      updatedList = [...currentList, optionId];
    }

    const updated = { ...answers, [questionId]: updatedList };
    setAnswers(updated);
    saveDiscoveryProgress(currentStep, updated);
  };

  const handleNextStep = () => {
    if (currentStep < DISCOVERY_QUESTIONS.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      saveDiscoveryProgress(nextStep, answers);
    } else {
      finalizeDiscovery(answers);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      saveDiscoveryProgress(prevStep, answers);
    }
  };

  const finalizeDiscovery = (finalAnswers: Record<string, string | string[]>) => {
    const profile: UserDiscoveryProfile = {
      currentActivity: (finalAnswers['q_activity'] as string) || 'unemployed',
      educationLevel: (finalAnswers['q_education'] as string) || 'school',
      preferredWorkstyle: (finalAnswers['q_workstyle'] as string) || 'dont_know_open',
      availableResources: Array.isArray(finalAnswers['q_resources']) ? finalAnswers['q_resources'] : ['mobile_only'],
      workLocation: (finalAnswers['q_location'] as string) || 'home',
      primaryGoal: (finalAnswers['q_goal'] as string) || 'learn_skill',
      dailyTimeAvailable: (finalAnswers['q_time'] as string) || '30_min',
      urgencyLevel: (finalAnswers['q_urgency'] as string) || 'today',
      interests: Array.isArray(finalAnswers['q_interests']) ? finalAnswers['q_interests'] : ['open_anything'],
    };

    saveUserDiscoveryProfile(profile);
    clearDiscoveryProgress();

    const calculated = matchSkillsForUserProfile(profile);
    setResults(calculated);
    setIsCompleted(true);
    setHasSavedProfile(true);
  };

  const handleRestartJourney = () => {
    stopSpeaking();
    clearDiscoveryProgress();
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const handleEditAnswers = () => {
    setIsCompleted(false);
    setCurrentStep(0);
  };

  const handleToggleBookmark = (skillId: string) => {
    const isNowBookmarked = toggleSaveSkillBookmark(skillId);
    if (isNowBookmarked) {
      setBookmarkedSkillIds(prev => [...prev, skillId]);
    } else {
      setBookmarkedSkillIds(prev => prev.filter(id => id !== skillId));
    }
  };

  const handleOpenSkill = (skill: SkillUniverseItem) => {
    stopSpeaking();
    onClose();
    if (onSelectUniverseSkill) {
      onSelectUniverseSkill(skill);
    } else if (onSelectSkill) {
      // Find fallback master item
      const master = SKILLS_MASTER_DATA.find(s => s.id === skill.id || s.slug === skill.slug) || SKILLS_MASTER_DATA[0];
      onSelectSkill(master);
    }
  };

  // Compute active skills to display in the result view
  const currentTabMatches: SkillMatch[] = useMemo(() => {
    if (!results) return [];
    switch (activeResultTab) {
      case 'top': return results.topBestMatches;
      case 'mobile': return results.mobileFriendlyMatches;
      case 'home': return results.homeBasedMatches;
      case 'job': return results.jobPathwayMatches;
      case 'online': return results.onlineFreelanceMatches;
      case 'business': return results.businessMatches;
      case 'lowcost': return results.lowCostMatches;
      case 'future': return results.futureTechMatches;
      default: return results.topBestMatches;
    }
  }, [results, activeResultTab]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 flex flex-col max-h-[94vh] overflow-hidden"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* MODAL HEADER */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black font-arabic tracking-tight text-white">
                  {isUrdu ? 'میرے لیے کون سا ہنر؟ (ذاتی تشخیصی گائیڈ)' : 'Personalized Skill Discovery'}
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  {isUrdu ? 'مفت و آسان' : 'Free & Easy'}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-arabic">
                {isUrdu 
                  ? 'آپ کے وسائل، وقت اور حالات کے عین مطابق بہترین ہنر کی تلاش' 
                  : 'Tailored recommendations matching your exact tools, time, and environment'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="p-2 text-slate-300 hover:text-white rounded-xl hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">
          {/* SCREEN 1: RESUME PROMPT (IF SAVED RESULTS EXIST AND USER HAS NOT YET STARTED/COMPLETED THIS SESSION) */}
          {hasSavedProfile && !isCompleted && currentStep === 0 && Object.keys(answers).length === 0 && (
            <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white p-5 sm:p-6 rounded-3xl space-y-4 border border-emerald-500/30 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-white/15 rounded-2xl text-amber-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="text-lg font-black font-arabic text-white">
                    {isUrdu ? 'آپ کے محفوظ شدہ ہنر نتائج موجود ہیں!' : 'Saved Discovery Results Found!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 font-arabic leading-relaxed">
                    {isUrdu 
                      ? 'آپ نے پہلے ایک تشخیصی ٹیسٹ مکمل کیا تھا۔ آپ اپنے پرانے نتائج دیکھ سکتے ہیں یا نئے سرے سے دوبارہ ٹیسٹ دے سکتے ہیں۔' 
                      : 'You have existing discovery results. You can view them directly or retake the questions.'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 flex-wrap">
                <button
                  onClick={() => setIsCompleted(true)}
                  className="py-2.5 px-5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm font-arabic shadow-md transition flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {isUrdu ? 'محفوظ شدہ نتائج دیکھیں' : 'View Saved Results'}
                </button>
                <button
                  onClick={() => {
                    handleRestartJourney();
                  }}
                  className="py-2.5 px-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm font-arabic transition flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  {isUrdu ? 'نیا ٹیسٹ شروع کریں' : 'Start Fresh Diagnostic'}
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 2: ACTIVE QUESTION STEP */}
          {!isCompleted ? (
            <div className="space-y-6">
              {/* Step Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 font-arabic">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    {isUrdu 
                      ? `مرحلہ ${currentStep + 1} از ${DISCOVERY_QUESTIONS.length}` 
                      : `Question ${currentStep + 1} of ${DISCOVERY_QUESTIONS.length}`}
                  </span>
                  <span>{Math.round(((currentStep + 1) / DISCOVERY_QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div 
                    className="bg-gradient-to-r from-emerald-600 to-teal-500 h-full rounded-full transition-all duration-300 shadow-xs"
                    style={{ width: `${((currentStep + 1) / DISCOVERY_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Header Card */}
              <div className="bg-gradient-to-br from-emerald-50 via-teal-50/60 to-white p-5 sm:p-6 rounded-3xl border border-emerald-200/80 shadow-xs space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 flex-1">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic leading-snug">
                      {isUrdu ? currentQ.questionUrdu : currentQ.questionEn}
                    </h3>
                    {currentQ.subtitleUrdu && (
                      <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed">
                        {isUrdu ? currentQ.subtitleUrdu : currentQ.subtitleEn}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => handleVoiceRead(`${isUrdu ? currentQ.questionUrdu : currentQ.questionEn}. ${isUrdu ? (currentQ.subtitleUrdu || '') : ''}`)}
                    className="p-3 rounded-2xl bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100 shadow-xs shrink-0 transition flex items-center gap-1.5"
                    title={isUrdu ? 'آواز سنیں' : 'Listen voice'}
                  >
                    <Volume2 className="w-4 h-4 text-emerald-700" />
                    <span className="text-[11px] font-bold font-arabic hidden sm:inline">{isUrdu ? 'سنیں' : 'Listen'}</span>
                  </button>
                </div>

                {currentQ.isMultiple && (
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black font-arabic">
                      ✨ {isUrdu ? 'ایک سے زیادہ آپشنز چن سکتے ہیں' : 'Multiple selections allowed'}
                    </span>
                  </div>
                )}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt) => {
                  const isMulti = currentQ.isMultiple;
                  const currentSelected = answers[currentQ.id];
                  const isSelected = isMulti 
                    ? Array.isArray(currentSelected) && currentSelected.includes(opt.id)
                    : currentSelected === opt.id;

                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        if (isMulti) {
                          handleToggleMultiOption(currentQ.id, opt.id);
                        } else {
                          handleSelectSingleOption(currentQ.id, opt.id);
                        }
                      }}
                      className={`text-right p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between gap-3 font-arabic group text-slate-900 ${
                        isSelected 
                          ? 'bg-emerald-900 text-white border-emerald-950 shadow-md ring-2 ring-emerald-500/50' 
                          : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-emerald-300 shadow-xs'
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1 text-right">
                        <div className={`p-2.5 rounded-xl shrink-0 transition ${
                          isSelected ? 'bg-white/20 text-amber-300' : 'bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-800'
                        }`}>
                          {renderIconByName(opt.iconName, 'w-5 h-5')}
                        </div>
                        <div className="space-y-0.5 flex-1">
                          <p className={`text-base sm:text-lg font-black leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                            {isUrdu ? opt.labelUrdu : opt.labelEn}
                          </p>
                          {opt.descUrdu && (
                            <p className={`text-xs leading-relaxed ${isSelected ? 'text-emerald-100/90' : 'text-slate-500'}`}>
                              {isUrdu ? opt.descUrdu : opt.descEn}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Selection Check Indicator */}
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-1 transition ${
                        isSelected 
                          ? 'border-white bg-amber-400 text-slate-950 shadow-xs' 
                          : 'border-slate-300 text-transparent group-hover:border-emerald-400'
                      }`}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                {currentStep > 0 ? (
                  <button
                    onClick={handlePrevStep}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm font-arabic flex items-center gap-2 transition"
                  >
                    <BackArrowIcon className="w-4 h-4" />
                    {isUrdu ? 'پچھلا سوال' : 'Previous'}
                  </button>
                ) : (
                  <div />
                )}

                {/* Next button for multi-selection or explicit step advance */}
                {currentQ.isMultiple ? (
                  <button
                    onClick={handleNextStep}
                    disabled={!answers[currentQ.id] || (Array.isArray(answers[currentQ.id]) && (answers[currentQ.id] as string[]).length === 0)}
                    className="py-3 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-black text-sm font-arabic shadow-md transition flex items-center gap-2"
                  >
                    <span>{currentStep === DISCOVERY_QUESTIONS.length - 1 ? (isUrdu ? 'نتائج حاصل کریں 🎯' : 'Show Results 🎯') : (isUrdu ? 'اگلا سوال' : 'Next Question')}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                ) : (
                  answers[currentQ.id] && (
                    <button
                      onClick={handleNextStep}
                      className="py-2.5 px-5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs sm:text-sm font-arabic shadow-xs transition flex items-center gap-2"
                    >
                      <span>{currentStep === DISCOVERY_QUESTIONS.length - 1 ? (isUrdu ? 'نتائج دیکھیں' : 'View Results') : (isUrdu ? 'آگے بڑھیں' : 'Continue')}</span>
                      <ArrowIcon className="w-4 h-4" />
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            /* SCREEN 3: COMPLETED RESULTS VIEW WITH WHY-MATCH EXPLANATIONS */
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Result Congratulations Banner */}
              <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white p-6 sm:p-7 rounded-3xl border border-emerald-500/30 shadow-xl relative overflow-hidden space-y-4 text-center">
                <div className="w-16 h-16 rounded-3xl bg-amber-400 text-slate-950 mx-auto flex items-center justify-center font-black text-3xl shadow-lg">
                  ⭐
                </div>
                <div className="space-y-2 max-w-xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-black font-arabic text-white">
                    {isUrdu ? 'ماشاءاللہ! آپ کے لیے موزوں ترین ہنر تیار ہیں' : 'Your Tailored Skill Matches Are Ready!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-arabic leading-relaxed opacity-95">
                    {isUrdu 
                      ? 'ہم نے آپ کے موبائل، دستیاب وقت، تعلیمی پس منظر اور روزگار کے ہدف کا باریک بینی سے جائزہ لے کر یہ عملی سفارشات تیار کی ہیں:' 
                      : 'We evaluated your device capabilities, available daily time, and livelihood goals to curate these high-fit practical skills:'}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
                  <button
                    onClick={handleEditAnswers}
                    className="py-2 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold font-arabic transition flex items-center gap-1.5"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    {isUrdu ? 'جوابات میں ترمیم کریں' : 'Edit Answers'}
                  </button>
                  <button
                    onClick={handleRestartJourney}
                    className="py-2 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold font-arabic transition flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    {isUrdu ? 'دوبارہ نیا ٹیسٹ دیں' : 'Retake Diagnostic'}
                  </button>
                </div>
              </div>

              {/* No-False-Promise Integrity Notice */}
              <div className="bg-amber-50/90 border border-amber-300/80 rounded-2xl p-4 flex items-start gap-3 text-amber-950 font-arabic shadow-xs">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <span className="font-black">
                    {isUrdu ? 'شفافیت اور دیانت داری: ' : 'Honesty & Integrity: '}
                  </span>
                  {isUrdu 
                    ? 'سیکھو کسی ہوائی کمائی کا جھوٹا وعدہ نہیں کرتا۔ آمدنی اور کامیابی کا انحصار آپ کی محنت، مسلسل مشق، حلال طریقے اور مارکیٹ کے حالات پر ہے۔' 
                    : 'SEEKHO makes no fake income promises. True livelihood success depends on consistent practice, market value, and honest service.'}
                </div>
              </div>

              {/* Curated Result Filter Tabs */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 font-arabic">
                  <span>{isUrdu ? 'نتائج کے زمرے (Categories):' : 'Result Filter Views:'}</span>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                  {[
                    { id: 'top', labelUrdu: '⭐ میرے لیے بہترین (Top 5)', labelEn: '⭐ Top Matches', count: results?.topBestMatches.length || 0 },
                    { id: 'mobile', labelUrdu: '📱 صرف موبائل (Mobile)', labelEn: '📱 Mobile-first', count: results?.mobileFriendlyMatches.length || 0 },
                    { id: 'home', labelUrdu: '🏠 گھر بیٹھے (Home-based)', labelEn: '🏠 Home-based', count: results?.homeBasedMatches.length || 0 },
                    { id: 'online', labelUrdu: '🌐 آن لائن و فری لانس', labelEn: '🌐 Online Freelance', count: results?.onlineFreelanceMatches.length || 0 },
                    { id: 'business', labelUrdu: '🏪 کاروبار و دکانداری', labelEn: '🏪 Small Business', count: results?.businessMatches.length || 0 },
                    { id: 'job', labelUrdu: '💼 نوکری کے راستے', labelEn: '💼 Job Pathways', count: results?.jobPathwayMatches.length || 0 },
                    { id: 'lowcost', labelUrdu: '🌱 کم وسائل (Zero Budget)', labelEn: '🌱 Low Resource', count: results?.lowCostMatches.length || 0 },
                    { id: 'future', labelUrdu: '🚀 AI و مستقبل کے ہنر', labelEn: '🚀 AI & Future', count: results?.futureTechMatches.length || 0 },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveResultTab(tab.id as any)}
                      className={`py-2 px-3.5 rounded-xl text-xs font-black font-arabic whitespace-nowrap transition flex items-center gap-1.5 shrink-0 ${
                        activeResultTab === tab.id
                          ? 'bg-emerald-800 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{isUrdu ? tab.labelUrdu : tab.labelEn}</span>
                      <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                        activeResultTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Matches List */}
              <div className="space-y-4">
                {currentTabMatches.map((matchItem, idx) => {
                  const skill = matchItem.skill;
                  const isExpanded = expandedReasonSkillId === skill.id;
                  const isBookmarked = bookmarkedSkillIds.includes(skill.id);

                  return (
                    <div 
                      key={skill.id}
                      className="bg-white rounded-3xl border border-slate-200 hover:border-emerald-300 shadow-sm transition overflow-hidden p-5 sm:p-6 space-y-4 relative"
                    >
                      {/* Top Rank Badge & Match Percentage */}
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center shadow-xs">
                            #{idx + 1}
                          </span>
                          <div>
                            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-black text-xs font-arabic border border-emerald-200">
                              {matchItem.matchScore}٪ {isUrdu ? matchItem.matchLevelUrdu : matchItem.matchLevelEn}
                            </span>
                          </div>
                        </div>

                        {/* Bookmark Button */}
                        <button
                          onClick={() => handleToggleBookmark(skill.id)}
                          className={`p-2 rounded-xl border transition ${
                            isBookmarked 
                              ? 'bg-rose-50 border-rose-200 text-rose-600' 
                              : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700'
                          }`}
                          title={isUrdu ? 'بعد کے لیے محفوظ کریں' : 'Save for later'}
                        >
                          {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Skill Main Title & Tagline */}
                      <div className="space-y-1">
                        <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic">
                          {isUrdu ? skill.titleUrdu : skill.titleEn}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed">
                          {isUrdu ? skill.taglineUrdu : skill.taglineEn}
                        </p>
                      </div>

                      {/* Key Attribute Badges */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {skill.isMobileFriendly && (
                          <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-bold font-arabic border border-teal-200 flex items-center gap-1">
                            📱 {isUrdu ? 'صرف موبائل پر ممکن' : 'Mobile Only'}
                          </span>
                        )}
                        {skill.isHomeBased && (
                          <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-800 text-xs font-bold font-arabic border border-indigo-200 flex items-center gap-1">
                            🏠 {isUrdu ? 'گھر سے کام' : 'Home-based'}
                          </span>
                        )}
                        {skill.isOnlineWork && (
                          <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 text-xs font-bold font-arabic border border-sky-200 flex items-center gap-1">
                            🌐 {isUrdu ? 'آن لائن / فری لانسنگ' : 'Online'}
                          </span>
                        )}
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold font-arabic flex items-center gap-1">
                          ⏱️ {isUrdu ? skill.timeDisplayUrdu : skill.timeDisplayEn}
                        </span>
                      </div>

                      {/* "یہ آپ کے لیے کیوں موزوں ہے؟" (Personalized Match Justification) */}
                      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-emerald-950 font-arabic flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-emerald-700" />
                            {isUrdu ? 'یہ آپ کے لیے کیوں بہترین ہے؟' : 'Why is this a great fit for you?'}
                          </span>
                          <button
                            onClick={() => handleVoiceRead(matchItem.whyThisMatchUrdu.join('. '))}
                            className="p-1 text-emerald-800 hover:text-emerald-950"
                            title={isUrdu ? 'وجوہات سنیں' : 'Listen reasons'}
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        <ul className="space-y-1.5 text-xs text-slate-800 font-arabic leading-relaxed">
                          {matchItem.whyThisMatchUrdu.slice(0, isExpanded ? 5 : 2).map((reason, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>

                        {matchItem.whyThisMatchUrdu.length > 2 && (
                          <button
                            onClick={() => setExpandedReasonSkillId(isExpanded ? null : skill.id)}
                            className="text-[11px] font-bold text-emerald-800 hover:underline flex items-center gap-1 font-arabic pt-1"
                          >
                            <span>{isExpanded ? (isUrdu ? 'کم دیکھیں' : 'Show less') : (isUrdu ? `مزید ${matchItem.whyThisMatchUrdu.length - 2} وجوہات دیکھیں` : 'Show more reasons')}</span>
                            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          </button>
                        )}
                      </div>

                      {/* First Practical Action Preview */}
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-1">
                        <div className="text-[11px] font-black text-slate-500 font-arabic">
                          🚀 {isUrdu ? 'آپ کا فوری پہلا عملی قدم:' : 'Your Immediate First Action Step:'}
                        </div>
                        <p className="text-xs text-slate-800 font-bold font-arabic leading-relaxed">
                          {isUrdu ? skill.firstPracticalActionUrdu : skill.firstPracticalActionEn}
                        </p>
                      </div>

                      {/* Direct CTA Buttons */}
                      <div className="pt-2 flex items-center justify-between gap-3 flex-wrap">
                        <button
                          onClick={() => handleOpenSkill(skill)}
                          className="py-3 px-6 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs sm:text-sm font-arabic shadow-md transition flex items-center gap-2 flex-1 sm:flex-initial justify-center"
                        >
                          <Play className="w-4 h-4 fill-white" />
                          <span>{isUrdu ? 'یہ ہنر دیکھیں و شروع کریں' : 'Explore & Start Skill'}</span>
                          <ArrowIcon className="w-4 h-4" />
                        </button>

                        {onOpenAITeacherWithPrompt && (
                          <button
                            onClick={() => {
                              stopSpeaking();
                              onClose();
                              onOpenAITeacherWithPrompt(
                                isUrdu 
                                  ? `مجھے "${skill.titleUrdu}" کا ہنر سیکھنا ہے۔ براہ کرم مجھے بتائیں کہ میں آج سے اس کا پہلا عملی سبق کیسے شروع کروں؟` 
                                  : `I want to learn "${skill.titleEn}". Please guide me on my very first step.`
                              );
                            }}
                            className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs font-arabic transition flex items-center gap-1.5"
                          >
                            <Bot className="w-4 h-4 text-emerald-700" />
                            <span>{isUrdu ? 'استاد سے رہنمائی لیں' : 'Ask AI Mentor'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-3 flex-wrap">
                <button
                  onClick={handleRestartJourney}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs font-arabic transition flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  {isUrdu ? 'دوبارہ ٹیسٹ دیں' : 'Retake Diagnostic'}
                </button>

                <button
                  onClick={() => {
                    stopSpeaking();
                    onClose();
                  }}
                  className="py-2.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm font-arabic transition shadow-xs"
                >
                  {isUrdu ? 'ہنر کائنات میں واپس جائیں' : 'Back to Skill Universe'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
