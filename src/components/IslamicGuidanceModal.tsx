import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  ArrowLeft, 
  ArrowRight,
  Heart,
  Shield,
  Users,
  Globe,
  Share2,
  Volume2,
  VolumeX,
  Award,
  Scroll,
  Sun,
  Flame,
  Check,
  Send,
  HelpCircle,
  MessageSquare,
  Bot,
  User,
  Compass,
  Briefcase,
  GraduationCap,
  Home,
  Smartphone,
  CheckCheck,
  RotateCcw,
  Star
} from 'lucide-react';
import { IslamicDailyLesson, Language, UserProfile } from '../types';
import { speakText, stopSpeaking } from '../utils/speech';
import { 
  ISLAMIC_LESSONS_DATA, 
  ISLAMIC_CHARACTER_LEVELS, 
  ISLAMIC_LEARNING_REMINDER 
} from '../data/islamicGuidanceData';

type ModalTab = 'lesson' | 'scenario' | 'challenge' | 'reflection' | 'levels' | 'weekly';
type LearnerRole = 'student' | 'worker' | 'parent' | 'digitalYouth';

interface IslamicGuidanceModalProps {
  language: Language;
  userProfile: UserProfile;
  initialLessonIndex?: number;
  onClose: () => void;
  onCompleteLesson: (lessonId: string, points?: number) => void;
  onCompleteChallenge?: (lessonId: string, reflectionText?: string, challengeTitleUrdu?: string) => void;
  onSaveReflection?: (lessonId: string, reflectionText: string, challengeTitleUrdu?: string) => void;
  onOpenAITeacherWithPrompt?: (prompt: string) => void;
}

export const IslamicGuidanceModal: React.FC<IslamicGuidanceModalProps> = ({
  language,
  userProfile,
  initialLessonIndex = 0,
  onClose,
  onCompleteLesson,
  onCompleteChallenge,
  onSaveReflection,
  onOpenAITeacherWithPrompt,
}) => {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(initialLessonIndex);
  const [activeTab, setActiveTab] = useState<ModalTab>('lesson');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Role selection for personalized challenges
  const [selectedRole, setSelectedRole] = useState<LearnerRole>(() => {
    const age = userProfile.ageGroup;
    if (age === '10-15') return 'student';
    if (age === '16-25') return 'digitalYouth';
    if (age === '46-60' || age === '61-70' || age === '70+') return 'parent';
    return 'worker';
  });

  // Scenario decision state
  const [selectedScenarioOption, setSelectedScenarioOption] = useState<number | null>(null);
  const [scenarioEvaluated, setScenarioEvaluated] = useState(false);

  // Reflection diary state
  const [reflectionInput, setReflectionInput] = useState('');
  const [reflectionSavedMessage, setReflectionSavedMessage] = useState(false);

  const completedLessonIds = userProfile.completedIslamicLessonIds || [];
  const completedChallengeIds = userProfile.completedIslamicChallengeIds || [];
  const currentLesson: IslamicDailyLesson = ISLAMIC_LESSONS_DATA[selectedLessonIndex] || ISLAMIC_LESSONS_DATA[0];
  
  const isLessonCompleted = completedLessonIds.includes(currentLesson.id);
  const isChallengeCompleted = completedChallengeIds.includes(currentLesson.id);
  const existingReflection = userProfile.islamicReflections?.[currentLesson.id]?.reflectionText || '';

  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  React.useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const handleLessonChange = (idx: number) => {
    stopSpeaking();
    setIsSpeaking(false);
    setSelectedLessonIndex(idx);
    setSelectedScenarioOption(null);
    setScenarioEvaluated(false);
    setReflectionInput('');
    setReflectionSavedMessage(false);
  };

  const handleToggleCompleteLesson = () => {
    onCompleteLesson(currentLesson.id, 25);
  };

  const handleSaveUserReflection = () => {
    if (!reflectionInput.trim()) return;
    if (onSaveReflection) {
      onSaveReflection(currentLesson.id, reflectionInput.trim(), currentLesson.practicalAction.titleUrdu);
    }
    if (onCompleteChallenge) {
      onCompleteChallenge(currentLesson.id, reflectionInput.trim(), currentLesson.practicalAction.titleUrdu);
    }
    setReflectionSavedMessage(true);
    setTimeout(() => setReflectionSavedMessage(false), 3000);
  };

  const handleShare = () => {
    const text = `${currentLesson.bismillah}\n\n🌿 ${language === 'ur' ? 'آج کی قرآنی رہنمائی:' : "Today's Quranic Guidance:"}\n"${currentLesson.quranGuidance.verseArabic}"\n${language === 'ur' ? currentLesson.quranGuidance.translationUrdu : currentLesson.quranGuidance.translationEn}\n\n📖 ${language === 'ur' ? 'آج کی حدیث:' : "Today's Hadith:"}\n${language === 'ur' ? currentLesson.hadithGuidance.textUrdu : currentLesson.hadithGuidance.textEn}\n(${language === 'ur' ? currentLesson.hadithGuidance.sourceReferenceUrdu : currentLesson.hadithGuidance.sourceReferenceEn})\n\n🎯 ${language === 'ur' ? 'آج کا عملی چیلنج:' : "Today's Character Challenge:"}\n${language === 'ur' ? currentLesson.practicalAction.actionUrdu : currentLesson.practicalAction.actionEn}\n\n- Seekho: کردار سازی و اسلامی رہنمائی`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const toggleSpeech = () => {
    const audioId = `islamic-guidance-${currentLesson.id}`;
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      stopSpeaking();
      const textToRead = language === 'ur' 
        ? `${currentLesson.bismillah}۔ ${currentLesson.themeUrdu}۔ قرآنی رہنمائی: ${currentLesson.quranGuidance.translationUrdu}۔ حدیث نبوی: ${currentLesson.hadithGuidance.textUrdu}۔ صحابہ کرام سے سبق: ${currentLesson.sahabaLesson.storyUrdu}۔ آج کا عملی سبق: ${currentLesson.practicalAction.actionUrdu}`
        : `${currentLesson.themeEn}. Quranic guidance: ${currentLesson.quranGuidance.translationEn}. Hadith: ${currentLesson.hadithGuidance.textEn}. Practical action: ${currentLesson.practicalAction.actionEn}`;
      
      setIsSpeaking(true);
      speakText(textToRead, {
        id: audioId,
        language: language === 'ur' ? 'ur' : 'en',
        onEnd: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false),
      });
    }
  };

  const handleAskAITeacher = () => {
    if (onOpenAITeacherWithPrompt) {
      const prompt = language === 'ur'
        ? `استاد سیکھو! مجھے "${currentLesson.themeUrdu}" کے بارے میں مزید سمجھائیں کہ روزمرہ زندگی میں اس پر کیسے عمل کریں؟`
        : `Teacher Seekho! Please guide me on how to practice "${currentLesson.themeEn}" in daily life with a simple example.`;
      onClose();
      onOpenAITeacherWithPrompt(prompt);
    }
  };

  // Get current role-specific challenge text
  const getPersonalizedChallengeText = () => {
    if (!currentLesson.personalizedChallenges) {
      return language === 'ur' ? currentLesson.practicalAction.actionUrdu : currentLesson.practicalAction.actionEn;
    }
    const pc = currentLesson.personalizedChallenges;
    if (language === 'ur') {
      switch (selectedRole) {
        case 'student': return pc.studentUrdu;
        case 'worker': return pc.workerUrdu;
        case 'parent': return pc.parentUrdu;
        case 'digitalYouth': return pc.digitalYouthUrdu;
        default: return currentLesson.practicalAction.actionUrdu;
      }
    } else {
      switch (selectedRole) {
        case 'student': return pc.studentEn;
        case 'worker': return pc.workerEn;
        case 'parent': return pc.parentEn;
        case 'digitalYouth': return pc.digitalYouthEn;
        default: return currentLesson.practicalAction.actionEn;
      }
    }
  };

  // Calculate Character Journey Stats
  const totalLevels = ISLAMIC_LESSONS_DATA.length;
  const completedLessonsCount = completedLessonIds.length;
  const completedChallengesCount = completedChallengeIds.length;
  const savedReflectionsCount = Object.keys(userProfile.islamicReflections || {}).length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 pt-10 sm:p-4">
      <div 
        className="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 w-full max-w-4xl max-h-[94vh] flex flex-col shadow-2xl border-2 border-emerald-500/40 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 text-white p-4 sm:p-5 relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start justify-between gap-3 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black font-arabic flex items-center gap-1.5 shadow-xs">
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                  {language === 'ur' ? 'قرآن و حدیث سے کردار سازی' : 'Islamic Character Development'}
                </span>
                <span className="text-xs text-emerald-200 font-bold font-arabic">
                  {language === 'ur' 
                    ? `لیول ${currentLesson.levelNumber} از ${totalLevels}: ${currentLesson.levelTitleUrdu.split(':')[1] || currentLesson.themeUrdu}` 
                    : `Level ${currentLesson.levelNumber} of ${totalLevels}: ${currentLesson.themeEn}`}
                </span>
              </div>

              <h2 className="text-lg sm:text-2xl font-black font-arabic text-white mt-1">
                {language === 'ur' ? currentLesson.themeUrdu : currentLesson.themeEn}
              </h2>
            </div>

            {/* Quick Action Icons */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                id="islamic-modal-ask-ai-btn"
                onClick={handleAskAITeacher}
                title={language === 'ur' ? 'استاد سیکھو سے سوال پوچھیں' : 'Ask AI Teacher'}
                className="px-2.5 py-1.5 rounded-xl bg-amber-400/20 hover:bg-amber-400 text-amber-300 hover:text-slate-950 border border-amber-400/40 transition flex items-center gap-1 text-xs font-bold font-arabic"
              >
                <Bot className="w-4 h-4" />
                <span className="hidden sm:inline">{language === 'ur' ? 'رہنمائی لیں' : 'Ask AI'}</span>
              </button>

              <button
                id="islamic-modal-audio-btn"
                onClick={toggleSpeech}
                title={language === 'ur' ? 'آڈیو سنیں' : 'Listen audio'}
                className={`p-2 rounded-xl border transition ${
                  isSpeaking 
                    ? 'bg-amber-400 text-slate-950 border-amber-300 animate-pulse' 
                    : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                id="islamic-modal-share-btn"
                onClick={handleShare}
                title={language === 'ur' ? 'کاپی اور شیئر کریں' : 'Copy and share'}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition relative"
              >
                <Share2 className="w-4 h-4" />
                {copiedNotification && (
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-amber-300 text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap font-arabic">
                    {language === 'ur' ? 'کاپی ہو گیا!' : 'Copied!'}
                  </span>
                )}
              </button>

              <button
                id="islamic-modal-close-btn"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-red-500/30 text-white border border-white/20 hover:border-red-400 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 15 Days / Levels Slider Navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-3 pb-1 scrollbar-none relative z-10">
            {ISLAMIC_LESSONS_DATA.map((lesson, idx) => {
              const isSelected = selectedLessonIndex === idx;
              const isDone = completedLessonIds.includes(lesson.id);
              const isChDone = completedChallengeIds.includes(lesson.id);

              return (
                <button
                  key={lesson.id}
                  id={`islamic-day-tab-${idx}`}
                  onClick={() => handleLessonChange(idx)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold font-arabic transition shrink-0 flex items-center gap-1 ${
                    isSelected 
                      ? 'bg-amber-400 text-slate-950 shadow-md font-black scale-105' 
                      : 'bg-white/10 hover:bg-white/20 text-emerald-100 border border-white/10'
                  }`}
                >
                  <span>{language === 'ur' ? `لیول ${lesson.levelNumber}` : `L${lesson.levelNumber}`}</span>
                  {isDone && (
                    <CheckCircle2 className={`w-3 h-3 ${isSelected ? 'text-slate-950' : 'text-emerald-300'}`} />
                  )}
                  {isChDone && (
                    <Star className={`w-2.5 h-2.5 fill-amber-300 text-amber-300`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Sub-Navigation Tabs */}
          <div className="grid grid-cols-6 gap-1 bg-black/30 p-1 rounded-2xl mt-3 border border-white/10 text-center">
            <button
              onClick={() => setActiveTab('lesson')}
              className={`py-1.5 px-1 rounded-xl text-[11px] sm:text-xs font-bold font-arabic transition ${
                activeTab === 'lesson'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              🌿 {language === 'ur' ? 'سبق و رہنمائی' : 'Lesson'}
            </button>

            <button
              onClick={() => setActiveTab('scenario')}
              className={`py-1.5 px-1 rounded-xl text-[11px] sm:text-xs font-bold font-arabic transition relative ${
                activeTab === 'scenario'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              🎭 {language === 'ur' ? 'عملی صورتحال' : 'Scenario'}
            </button>

            <button
              onClick={() => setActiveTab('challenge')}
              className={`py-1.5 px-1 rounded-xl text-[11px] sm:text-xs font-bold font-arabic transition ${
                activeTab === 'challenge'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              🎯 {language === 'ur' ? 'عملی چیلنج' : 'Challenge'}
            </button>

            <button
              onClick={() => setActiveTab('reflection')}
              className={`py-1.5 px-1 rounded-xl text-[11px] sm:text-xs font-bold font-arabic transition ${
                activeTab === 'reflection'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              ✍️ {language === 'ur' ? 'خود احتسابی' : 'Reflection'}
            </button>

            <button
              onClick={() => setActiveTab('levels')}
              className={`py-1.5 px-1 rounded-xl text-[11px] sm:text-xs font-bold font-arabic transition ${
                activeTab === 'levels'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              🏆 {language === 'ur' ? '15 لیولز' : '15 Levels'}
            </button>

            <button
              onClick={() => setActiveTab('weekly')}
              className={`py-1.5 px-1 rounded-xl text-[11px] sm:text-xs font-bold font-arabic transition ${
                activeTab === 'weekly'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              📊 {language === 'ur' ? 'ہفتہ وار جائزہ' : 'Review'}
            </button>
          </div>
        </div>

        {/* Modal Main Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: MAIN LESSON & GUIDANCE (Quran, Hadith, Sahaba, Societal) */}
          {activeTab === 'lesson' && (
            <div className="space-y-6">
              {/* Mandatory Sacred Bismillah Opening for EVERY Islamic Lesson */}
              <div className="text-center py-3.5 px-4 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-2xl border border-emerald-300/80 dark:border-emerald-800/50 shadow-2xs">
                <p className="text-2xl sm:text-3xl font-black text-emerald-900 dark:text-emerald-200 font-arabic tracking-wide leading-relaxed">
                  {currentLesson.bismillah}
                </p>
                <p className="text-xs text-emerald-700/80 dark:text-emerald-300/70 font-arabic mt-1">
                  {language === 'ur' 
                    ? 'شروع اللہ کے نام سے جو بے حد مہربان، نہایت رحم کرنے والا ہے۔' 
                    : 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'}
                </p>
              </div>

              {/* 1. 🌿 قرآنی رہنمائی (Quranic Guidance) */}
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 border-2 border-emerald-500/30 shadow-xs space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 border-b border-emerald-100 dark:border-slate-700 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🌿</span>
                    <h3 className="text-base sm:text-lg font-black text-emerald-900 dark:text-emerald-300 font-arabic">
                      {language === 'ur' ? '۱. قرآن مجید کی رہنمائی' : '1. Quranic Guidance'}
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-bold font-arabic">
                    {language === 'ur' ? currentLesson.quranGuidance.surahAndAyahUrdu : currentLesson.quranGuidance.surahAndAyahEn}
                  </span>
                </div>

                {/* Calligraphic Arabic Verse */}
                <div className="p-4 bg-emerald-50/50 dark:bg-slate-900/60 rounded-xl text-center border border-emerald-200/60 dark:border-emerald-800/40">
                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-arabic leading-loose dir-rtl" dir="rtl">
                    ﴿ {currentLesson.quranGuidance.verseArabic} ﴾
                  </p>
                </div>

                {/* Translation */}
                <div className="space-y-1 pt-1">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-arabic">
                    {language === 'ur' ? 'اردو ترجمہ و مفہوم:' : 'Translation:'}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 font-arabic leading-relaxed">
                    {language === 'ur' ? currentLesson.quranGuidance.translationUrdu : currentLesson.quranGuidance.translationEn}
                  </p>
                </div>

                {/* Moral Insight */}
                <div className="p-3 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 font-arabic block mb-1">
                    {language === 'ur' ? '💡 عملی و اخلاقی سبق:' : '💡 Moral & Practical Insight:'}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-arabic leading-relaxed">
                    {language === 'ur' ? currentLesson.quranGuidance.practicalMoralExplanationUrdu : currentLesson.quranGuidance.practicalMoralExplanationEn}
                  </p>
                </div>
              </div>

              {/* 2. 📖 مبارک حدیث نبوی (Hadith Guidance) */}
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 border-2 border-teal-500/30 shadow-xs space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-teal-100 dark:border-slate-700 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📖</span>
                    <h3 className="text-base sm:text-lg font-black text-teal-900 dark:text-teal-300 font-arabic">
                      {language === 'ur' ? '۲. فرمانِ رسول ﷺ (صحیح حدیث)' : "2. Authentic Hadith"}
                    </h3>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 font-bold font-arabic">
                    {language === 'ur' ? 'مستند و صحیح حوالہ' : 'Authentic Citation'}
                  </span>
                </div>

                {currentLesson.hadithGuidance.hadithArabic && (
                  <div className="p-3.5 bg-teal-50/40 dark:bg-slate-900/60 rounded-xl text-center border border-teal-200/60 dark:border-teal-800/40">
                    <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-arabic leading-relaxed dir-rtl" dir="rtl">
                      « {currentLesson.hadithGuidance.hadithArabic} »
                    </p>
                  </div>
                )}

                <div className="space-y-1.5">
                  <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 font-arabic leading-relaxed">
                    {language === 'ur' ? currentLesson.hadithGuidance.textUrdu : currentLesson.hadithGuidance.textEn}
                  </p>
                  
                  {/* Authentic Reference Source Badge */}
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-arabic">
                      {language === 'ur' ? 'مستند حوالہ:' : 'Source:'}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono font-semibold">
                      {language === 'ur' ? currentLesson.hadithGuidance.sourceReferenceUrdu : currentLesson.hadithGuidance.sourceReferenceEn}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-teal-50/50 dark:bg-slate-900/40 rounded-xl border border-teal-200/60 dark:border-slate-700">
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-arabic leading-relaxed">
                    {language === 'ur' ? currentLesson.hadithGuidance.explanationUrdu : currentLesson.hadithGuidance.explanationEn}
                  </p>
                </div>
              </div>

              {/* 3. ⭐ صحابہ کرامؓ کی زندگی سے روشن مثال (Sahaba Lesson) */}
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 border-2 border-amber-500/30 shadow-xs space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-amber-100 dark:border-slate-700 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⭐</span>
                    <h3 className="text-base sm:text-lg font-black text-amber-900 dark:text-amber-300 font-arabic">
                      {language === 'ur' ? '۳. صحابہ کرامؓ کی زندگی سے روشن مثال' : '3. Lesson from Sahaba (R.A.)'}
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold font-arabic">
                    {language === 'ur' ? currentLesson.sahabaLesson.sahabiNameUrdu : currentLesson.sahabaLesson.sahabiNameEn}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-arabic leading-relaxed">
                  {language === 'ur' ? currentLesson.sahabaLesson.storyUrdu : currentLesson.sahabaLesson.storyEn}
                </p>

                <div className="p-3 bg-amber-50/60 dark:bg-slate-900/40 rounded-xl border border-amber-200/80 dark:border-slate-700 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-amber-950 dark:text-amber-300 font-arabic block">
                      {language === 'ur' ? 'آج کے نوجوانوں کے لیے سبق:' : 'Takeaway for Today’s Youth:'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-arabic mt-0.5">
                      {language === 'ur' ? currentLesson.sahabaLesson.lessonForYouthUrdu : currentLesson.sahabaLesson.lessonForYouthEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. 🌍 معاشرے اور انسانیت کے لیے فوائد (Societal Benefit Breakdown) */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-lg">🌍</span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-arabic">
                    {language === 'ur' ? '۴. معاشرے اور انسانیت کے لیے فوائد' : '4. Benefits for Society & Humanity'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                    <span className="text-xs font-black text-emerald-700 dark:text-emerald-400 font-arabic flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      {language === 'ur' ? 'ذاتی زندگی (فرد):' : 'Individual:'}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-arabic leading-relaxed">
                      {currentLesson.societalBenefit.individualBenefitUrdu}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                    <span className="text-xs font-black text-teal-700 dark:text-teal-400 font-arabic flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5" />
                      {language === 'ur' ? 'خاندان و گھر:' : 'Family:'}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-arabic leading-relaxed">
                      {currentLesson.societalBenefit.familyBenefitUrdu}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                    <span className="text-xs font-black text-blue-700 dark:text-blue-400 font-arabic flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {language === 'ur' ? 'گاؤں، برادری و ملک:' : 'Community & Country:'}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-arabic leading-relaxed">
                      {currentLesson.societalBenefit.communityAndCountryUrdu}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                    <span className="text-xs font-black text-purple-700 dark:text-purple-400 font-arabic flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      {language === 'ur' ? 'پوری انسانیت:' : 'Humanity:'}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-arabic leading-relaxed">
                      {currentLesson.societalBenefit.humanityBenefitUrdu}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE REAL-LIFE SCENARIO (Anti-Boredom) */}
          {activeTab === 'scenario' && (
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-5 rounded-2xl border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎭</span>
                  <h3 className="text-lg sm:text-xl font-black font-arabic">
                    {language === 'ur' ? 'عملی صورتحال اور اخلاقی فیصلہ' : 'Real-Life Dilemma & Choice'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 font-arabic leading-relaxed">
                  {language === 'ur' 
                    ? 'یہ حقیقی زندگی کی ایک آزمائش ہے۔ غور سے پڑھیں اور بتائیں کہ ایک سچے اور باکردار انسان کے طور پر آپ کا فیصلہ کیا ہوگا؟' 
                    : 'Read the dilemma below and select the decision that best exemplifies moral integrity.'}
                </p>
              </div>

              {currentLesson.scenario && (
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 space-y-4">
                  {/* Situation box */}
                  <div className="p-4 bg-amber-50/70 dark:bg-slate-900 rounded-xl border border-amber-300 dark:border-slate-700">
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-300 font-arabic block mb-1">
                      {language === 'ur' ? '📌 اصل صورتحال:' : '📌 Real-Life Situation:'}
                    </span>
                    <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-arabic leading-relaxed">
                      {language === 'ur' ? currentLesson.scenario.situationUrdu : currentLesson.scenario.situationEn}
                    </p>
                  </div>

                  {/* 4 Interactive Choices */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-arabic block">
                      {language === 'ur' ? 'آپ کا انتخاب کیا ہوگا؟' : 'What is your decision?'}
                    </span>

                    {(language === 'ur' ? currentLesson.scenario.optionsUrdu : currentLesson.scenario.optionsEn).map((opt, oIdx) => {
                      const isSelected = selectedScenarioOption === oIdx;
                      const isOptimal = oIdx === currentLesson.scenario?.recommendedIndex;

                      return (
                        <button
                          key={oIdx}
                          id={`scenario-option-${oIdx}`}
                          onClick={() => {
                            setSelectedScenarioOption(oIdx);
                            setScenarioEvaluated(false);
                          }}
                          className={`w-full text-start p-3.5 rounded-xl border transition flex items-start gap-3 font-arabic ${
                            isSelected
                              ? 'bg-emerald-100 dark:bg-emerald-950 border-emerald-500 text-emerald-950 dark:text-emerald-100 shadow-xs'
                              : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isSelected 
                              ? 'bg-emerald-600 text-white' 
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}>
                            {oIdx + 1}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold leading-relaxed flex-1">
                            {opt}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Submit Decision Button */}
                  {selectedScenarioOption !== null && !scenarioEvaluated && (
                    <button
                      id="btn-evaluate-scenario"
                      onClick={() => setScenarioEvaluated(true)}
                      className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition font-arabic flex items-center justify-center gap-2"
                    >
                      <span>{language === 'ur' ? 'میرا فیصلہ چیک کریں' : 'Check My Decision'}</span>
                      <ArrowIcon className="w-4 h-4" />
                    </button>
                  )}

                  {/* Feedback Explanation */}
                  {scenarioEvaluated && selectedScenarioOption !== null && (
                    <div className={`p-4 rounded-xl border animate-in fade-in duration-200 space-y-2 ${
                      selectedScenarioOption === currentLesson.scenario.recommendedIndex
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 text-emerald-950 dark:text-emerald-100'
                        : 'bg-amber-50 dark:bg-amber-950/60 border-amber-400 text-amber-950 dark:text-amber-100'
                    }`}>
                      <div className="flex items-center gap-2 font-black text-sm font-arabic">
                        {selectedScenarioOption === currentLesson.scenario.recommendedIndex ? (
                          <>
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            <span>{language === 'ur' ? 'ماشاءاللہ! بالکل درست اور دانشمندانہ فیصلہ' : 'Excellent & Wise Decision!'}</span>
                          </>
                        ) : (
                          <>
                            <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                            <span>{language === 'ur' ? 'بہتر طریقہ اور اسلامی حکمت:' : 'Alternative Ethical Approach:'}</span>
                          </>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm font-arabic leading-relaxed">
                        {language === 'ur' 
                          ? (currentLesson.scenario.explanationsUrdu[selectedScenarioOption] || currentLesson.scenario.explanationsUrdu[currentLesson.scenario.recommendedIndex]) 
                          : (currentLesson.scenario.explanationsEn[selectedScenarioOption] || currentLesson.scenario.explanationsEn[currentLesson.scenario.recommendedIndex])}
                      </p>

                      <div className="pt-2">
                        <button
                          onClick={() => setActiveTab('challenge')}
                          className="text-xs font-bold text-emerald-800 dark:text-emerald-300 hover:underline font-arabic flex items-center gap-1"
                        >
                          <span>{language === 'ur' ? 'اب آج کا عملی چیلنج دیکھیں' : 'Proceed to Today’s Challenge'}</span>
                          <ArrowIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: PERSONALIZED ROLE-BASED CHALLENGE (Learn -> Practice) */}
          {activeTab === 'challenge' && (
            <div className="space-y-5">
              {/* Header */}
              <div className="bg-gradient-to-br from-teal-800 via-emerald-800 to-slate-900 text-white p-5 rounded-2xl border border-teal-500/30 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    <h3 className="text-lg sm:text-xl font-black font-arabic">
                      {language === 'ur' ? 'آج کا عملی چیلنج' : "Today's Practical Character Challenge"}
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black font-arabic">
                    {currentLesson.practicalAction.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 font-arabic leading-relaxed">
                  {language === 'ur'
                    ? 'اسلام صرف جاننے کا نام نہیں، بلکہ روزمرہ کے عمل میں خوبصورتی پیدا کرنے کا نام ہے۔'
                    : 'Turn sacred knowledge into concrete daily character and positive action.'}
                </p>
              </div>

              {/* Role Switcher */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 space-y-3">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-arabic block">
                  {language === 'ur' ? 'اپنا کردار / شعبہ منتخب کریں (چیلنج خودکار طریقے سے ڈھل جائے گا):' : 'Select your role (Challenge adapts automatically):'}
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => setSelectedRole('student')}
                    className={`p-2.5 rounded-xl border text-xs font-bold font-arabic transition flex items-center justify-center gap-1.5 ${
                      selectedRole === 'student'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>{language === 'ur' ? 'طالب علم' : 'Student'}</span>
                  </button>

                  <button
                    onClick={() => setSelectedRole('worker')}
                    className={`p-2.5 rounded-xl border text-xs font-bold font-arabic transition flex items-center justify-center gap-1.5 ${
                      selectedRole === 'worker'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>{language === 'ur' ? 'ملازم / کاریگر' : 'Worker'}</span>
                  </button>

                  <button
                    onClick={() => setSelectedRole('parent')}
                    className={`p-2.5 rounded-xl border text-xs font-bold font-arabic transition flex items-center justify-center gap-1.5 ${
                      selectedRole === 'parent'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span>{language === 'ur' ? 'گھریلو ذمہ دار' : 'Household'}</span>
                  </button>

                  <button
                    onClick={() => setSelectedRole('digitalYouth')}
                    className={`p-2.5 rounded-xl border text-xs font-bold font-arabic transition flex items-center justify-center gap-1.5 ${
                      selectedRole === 'digitalYouth'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>{language === 'ur' ? 'ڈیجیٹل نوجوان' : 'Digital Youth'}</span>
                  </button>
                </div>
              </div>

              {/* Adapted Challenge Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-5 border-2 border-emerald-500/40 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 font-arabic flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    {language === 'ur' ? 'آپ کے لیے مخصوص عملی چیلنج:' : 'Your Tailored Practical Action:'}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-200/80 dark:bg-emerald-900 text-emerald-950 dark:text-emerald-200 font-bold font-arabic">
                    {language === 'ur' ? 'دورانیہ: 2 تا 5 منٹ' : '2–5 mins'}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-arabic">
                  {language === 'ur' ? currentLesson.practicalAction.titleUrdu : currentLesson.practicalAction.titleEn}
                </h4>

                <p className="text-sm sm:text-base font-bold text-emerald-950 dark:text-emerald-100 font-arabic leading-relaxed p-4 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-slate-700">
                  {getPersonalizedChallengeText()}
                </p>

                {/* Challenge Completion Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  {isChallengeCompleted ? (
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300 font-arabic">
                      <CheckCheck className="w-4 h-4 text-emerald-600" />
                      <span>{language === 'ur' ? 'ماشاءاللہ! یہ چیلنج مکمل ہو چکا ہے۔' : 'Masha’Allah! Challenge Completed.'}</span>
                    </div>
                  ) : (
                    <button
                      id="btn-mark-challenge-done"
                      onClick={() => {
                        if (onCompleteChallenge) {
                          onCompleteChallenge(currentLesson.id, '', currentLesson.practicalAction.titleUrdu);
                        }
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md transition font-arabic flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4 text-amber-300" />
                      <span>{language === 'ur' ? 'میں نے یہ چیلنج مکمل کر لیا (+20 pts)' : 'I Completed This Challenge (+20 pts)'}</span>
                    </button>
                  )}

                  <button
                    onClick={() => setActiveTab('reflection')}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-700 underline font-bold font-arabic"
                  >
                    {language === 'ur' ? 'اپنا تجربہ ڈائری میں لکھیں' : 'Write reflection in journal'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: REFLECTION JOURNAL (Reflect -> Improve) */}
          {activeTab === 'reflection' && (
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white p-5 rounded-2xl border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✍️</span>
                  <h3 className="text-lg sm:text-xl font-black font-arabic">
                    {language === 'ur' ? 'خود احتسابی ڈائری (Reflection Journal)' : 'Daily Self-Audit & Reflection'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 font-arabic leading-relaxed">
                  {language === 'ur'
                    ? 'حضرت عمرؓ کا فرمان: "اپنے اعمال کا خود جائزہ لو قبل اس کے کہ تمہارا حساب لیا جائے"۔'
                    : 'Review your conduct with sincere self-auditing to build continuous moral growth.'}
                </p>
              </div>

              {/* Reflection Prompts */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 space-y-4">
                {(currentLesson.reflectionQuestionUrdu || currentLesson.reflectionQuestionEn) && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-arabic block">
                      {language === 'ur' ? '💡 خود احتسابی کا بنیادی سوال:' : '💡 Self-Reflection Question:'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-arabic font-medium leading-relaxed">
                      {language === 'ur' ? currentLesson.reflectionQuestionUrdu : currentLesson.reflectionQuestionEn}
                    </p>
                  </div>
                )}

                {/* Input Text Area */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-200 font-arabic block">
                    {language === 'ur' 
                      ? 'آپ نے آج کے عمل سے کیا سیکھا اور اپنے رویے میں کیا تبدیلی لائیں گے؟' 
                      : 'What did you experience practicing today’s lesson and what will you improve?'}
                  </label>

                  <textarea
                    id="islamic-reflection-input"
                    rows={4}
                    value={reflectionInput}
                    onChange={(e) => setReflectionInput(e.target.value)}
                    placeholder={existingReflection || (language === 'ur' 
                      ? 'اپنا ذاتی تجربہ یہاں لکھیں (مثلاً: آج میں نے غصے کے وقت 3 سیکنڈ خاموشی اختیار کی جس سے جھگڑا بچ گیا...)' 
                      : 'Write your personal experience and reflection here...')}
                    className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm font-arabic focus:border-emerald-500 focus:outline-none transition"
                  />

                  {reflectionSavedMessage && (
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold font-arabic flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{language === 'ur' ? 'ماشاءاللہ! آپ کا تاثر کامیابی سے محفوظ ہو گیا۔' : 'Masha’Allah! Your reflection has been saved.'}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-500 font-arabic">
                      {language === 'ur' ? 'یہ آپ کی نجی ڈائری ہے جو صرف آپ کے پاس محفوظ ہے۔' : 'This is your private reflection journal.'}
                    </span>

                    <button
                      id="btn-save-reflection"
                      onClick={handleSaveUserReflection}
                      disabled={!reflectionInput.trim()}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold text-xs font-arabic shadow-xs transition flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === 'ur' ? 'اپنا تجربہ محفوظ کریں' : 'Save Reflection'}</span>
                    </button>
                  </div>
                </div>

                {/* Previously Saved Reflections History */}
                {Object.keys(userProfile.islamicReflections || {}).length > 0 && (
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700 space-y-3">
                    <span className="text-xs font-black text-slate-700 dark:text-slate-300 font-arabic block">
                      {language === 'ur' ? '📖 آپ کے پچھلے خود احتسابی تاثرات:' : '📖 Your Previous Reflection Entries:'}
                    </span>

                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {Object.entries(userProfile.islamicReflections || {}).map(([lessonId, rawItem]) => {
                        const item = rawItem as { reflectionText: string; completedAt: string; challengeTitleUrdu?: string };
                        const lessonMatch = ISLAMIC_LESSONS_DATA.find(l => l.id === lessonId);
                        if (!item || !item.reflectionText) return null;
                        return (
                          <div key={lessonId} className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-arabic space-y-1">
                            <div className="flex items-center justify-between text-slate-500 text-[10px]">
                              <span className="font-bold text-emerald-700 dark:text-emerald-400">
                                {language === 'ur' ? lessonMatch?.themeUrdu : lessonMatch?.themeEn}
                              </span>
                              <span>{item.completedAt}</span>
                            </div>
                            <p className="text-slate-800 dark:text-slate-200 font-medium">
                              "{item.reflectionText}"
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: 15 CHARACTER DEVELOPMENT LEVELS MATRIX */}
          {activeTab === 'levels' && (
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-5 rounded-2xl border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    <h3 className="text-lg sm:text-xl font-black font-arabic">
                      {language === 'ur' ? '15 اخلاقی و کردار سازی لیولز کا روڈ میپ' : '15 Islamic Character Levels'}
                    </h3>
                  </div>
                  <span className="text-xs bg-amber-400 text-slate-950 font-black px-3 py-1 rounded-full font-arabic">
                    {completedLessonsCount} / 15 {language === 'ur' ? 'مکمل' : 'Done'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 font-arabic leading-relaxed">
                  {language === 'ur'
                    ? 'نیت کی پاکیزگی سے لے کر تقویٰ تک — اسلامی اخلاق کے 15 منظم درجات'
                    : 'From pure intention to Taqwa — a step-by-step path to moral excellence.'}
                </p>
              </div>

              {/* Milestones Badges (Non-competitive) */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-arabic block">
                  {language === 'ur' ? 'اخلاقی تسلسل کے سنگ میل (Badges):' : 'Character Consistency Milestones:'}
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className={`p-3 rounded-xl border text-center font-arabic ${
                    completedLessonsCount >= 1 
                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 text-amber-900 dark:text-amber-200' 
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 opacity-40'
                  }`}>
                    <span className="text-xl block">🌱</span>
                    <span className="text-xs font-bold block mt-1">{language === 'ur' ? 'پہلا قدم' : 'First Step'}</span>
                    <span className="text-[10px] text-slate-500 block">{language === 'ur' ? '1 سبق مکمل' : '1 Lesson'}</span>
                  </div>

                  <div className={`p-3 rounded-xl border text-center font-arabic ${
                    userProfile.streakDays >= 3 
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-900 dark:text-emerald-200' 
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 opacity-40'
                  }`}>
                    <span className="text-xl block">🌿</span>
                    <span className="text-xs font-bold block mt-1">{language === 'ur' ? '3 دن کا تسلسل' : '3-Day Streak'}</span>
                    <span className="text-[10px] text-slate-500 block">{language === 'ur' ? 'مسلسل مطالعہ' : 'Consistent'}</span>
                  </div>

                  <div className={`p-3 rounded-xl border text-center font-arabic ${
                    userProfile.streakDays >= 7 
                      ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-400 text-teal-900 dark:text-teal-200' 
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 opacity-40'
                  }`}>
                    <span className="text-xl block">🛡️</span>
                    <span className="text-xs font-bold block mt-1">{language === 'ur' ? '7 دن کا سفر' : '7-Day Journey'}</span>
                    <span className="text-[10px] text-slate-500 block">{language === 'ur' ? 'کردار کی پختگی' : 'Steadfast'}</span>
                  </div>

                  <div className={`p-3 rounded-xl border text-center font-arabic ${
                    savedReflectionsCount >= 5 
                      ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-400 text-purple-900 dark:text-purple-200' 
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 opacity-40'
                  }`}>
                    <span className="text-xl block">✍️</span>
                    <span className="text-xs font-bold block mt-1">{language === 'ur' ? 'خود احتسابی' : 'Reflective Mind'}</span>
                    <span className="text-[10px] text-slate-500 block">{language === 'ur' ? '5 تاثرات درج' : '5 Reflections'}</span>
                  </div>
                </div>
              </div>

              {/* 15 Levels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ISLAMIC_CHARACTER_LEVELS.map((level, lIdx) => {
                  const isCompleted = completedLessonIds.includes(level.lessonIds[0]);
                  const isCurrent = selectedLessonIndex === lIdx;

                  return (
                    <div
                      key={level.levelNumber}
                      onClick={() => {
                        handleLessonChange(lIdx);
                        setActiveTab('lesson');
                      }}
                      className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between gap-3 ${
                        isCurrent
                          ? 'border-amber-400 bg-amber-50/50 dark:bg-slate-800 shadow-sm ring-1 ring-amber-400'
                          : isCompleted
                          ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/30 dark:bg-slate-900/50 hover:bg-emerald-50'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                          isCompleted
                            ? 'bg-emerald-600 text-white'
                            : isCurrent
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {isCompleted ? <Check className="w-4 h-4" /> : level.levelNumber}
                        </div>

                        <div>
                          <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white font-arabic">
                            {language === 'ur' ? level.titleUrdu : level.titleEn}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-arabic line-clamp-1 mt-0.5">
                            {language === 'ur' ? level.descriptionUrdu : level.descriptionEn}
                          </p>
                        </div>
                      </div>

                      <button
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-300 text-[11px] font-bold font-arabic shrink-0 transition"
                      >
                        {language === 'ur' ? 'سبق دیکھیں' : 'View'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 6: WEEKLY CHARACTER REVIEW (اس ہفتے آپ نے کیا بہتر کیا؟) */}
          {activeTab === 'weekly' && (
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white p-5 rounded-2xl border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-lg sm:text-xl font-black font-arabic">
                    {language === 'ur' ? 'ہفتہ وار اخلاقی جائزہ (Weekly Character Review)' : 'Weekly Character Growth Review'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 font-arabic leading-relaxed">
                  {language === 'ur'
                    ? 'اس ہفتے آپ نے قرآن و حدیث کی روشنی میں کن عادات کو سنوارا اور دوسروں کے کام آئے؟'
                    : 'A summary of moral traits practiced, challenges completed, and next steps.'}
                </p>
              </div>

              {/* Weekly Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-center font-arabic space-y-1">
                  <span className="text-2xl">📖</span>
                  <span className="text-2xl font-black text-emerald-700 dark:text-emerald-400 block">
                    {completedLessonsCount}
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                    {language === 'ur' ? 'مکمل اخلاقی اسباق' : 'Completed Lessons'}
                  </span>
                </div>

                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-center font-arabic space-y-1">
                  <span className="text-2xl">🎯</span>
                  <span className="text-2xl font-black text-amber-600 dark:text-amber-400 block">
                    {completedChallengesCount}
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                    {language === 'ur' ? 'مکمل عملی چیلنجز' : 'Practical Challenges'}
                  </span>
                </div>

                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-center font-arabic space-y-1">
                  <span className="text-2xl">✍️</span>
                  <span className="text-2xl font-black text-teal-600 dark:text-teal-400 block">
                    {savedReflectionsCount}
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                    {language === 'ur' ? 'خود احتسابی اندراجات' : 'Saved Reflections'}
                  </span>
                </div>
              </div>

              {/* Character Summary & Community Impact */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 space-y-4">
                <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-arabic flex items-center gap-2">
                  <Heart className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'ur' ? 'معاشرتی کردار کا اثر (Community Impact):' : 'Community & Social Impact:'}</span>
                </h4>

                <div className="p-4 bg-emerald-50/60 dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-slate-700 font-arabic text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                  <p>
                    {language === 'ur'
                      ? 'ماشاءاللہ! آپ کی سچائی، امانت داری اور غصے پر قابو پانے کی مشق نہ صرف آپ کے ذاتی سکون کا باعث ہے بلکہ اس سے آپ کا گھرانہ پُرامن، محلہ محفوظ اور رزق میں برکت قائم ہوتی ہے۔'
                      : 'Your consistent practice of truthfulness, honesty, and emotional restraint brings peace to your household, trust to your workplace, and harmony to your neighborhood.'}
                  </p>
                </div>

                {/* Recommended Next Focus Level */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-amber-50/70 dark:bg-slate-900 rounded-xl border border-amber-300 dark:border-slate-700 font-arabic">
                  <div>
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-300 block">
                      {language === 'ur' ? 'اگلا تجویز کردہ اخلاقی ہدف:' : 'Recommended Next Character Goal:'}
                    </span>
                    <span className="text-sm font-black text-slate-900 dark:text-white block mt-0.5">
                      {language === 'ur' 
                        ? ISLAMIC_LESSONS_DATA[(completedLessonsCount % totalLevels)].themeUrdu 
                        : ISLAMIC_LESSONS_DATA[(completedLessonsCount % totalLevels)].themeEn}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      handleLessonChange(completedLessonsCount % totalLevels);
                      setActiveTab('lesson');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs font-arabic shadow-xs transition"
                  >
                    {language === 'ur' ? 'اگلا سبق شروع کریں' : 'Start Next Lesson'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mandatory Reminder Box at Bottom */}
          <div className="bg-amber-50 dark:bg-amber-950/40 rounded-2xl p-4 border border-amber-300 dark:border-amber-800/60 text-center">
            <p className="text-xs sm:text-sm font-black text-amber-950 dark:text-amber-200 font-arabic">
              "{language === 'ur' ? ISLAMIC_LEARNING_REMINDER.urdu : ISLAMIC_LEARNING_REMINDER.english}"
            </p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-50 dark:bg-slate-900 p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              disabled={selectedLessonIndex === 0}
              onClick={() => handleLessonChange(Math.max(0, selectedLessonIndex - 1))}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title={language === 'ur' ? 'پچھلا سبق' : 'Previous'}
            >
              <ChevronRight className="w-4 h-4 rtl:rotate-0 rotate-180" />
            </button>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 font-arabic">
              {language === 'ur' ? `لیول ${currentLesson.levelNumber} از ${totalLevels}` : `Level ${currentLesson.levelNumber} of ${totalLevels}`}
            </span>
            <button
              disabled={selectedLessonIndex === totalLevels - 1}
              onClick={() => handleLessonChange(Math.min(totalLevels - 1, selectedLessonIndex + 1))}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title={language === 'ur' ? 'اگلا سبق' : 'Next'}
            >
              <ChevronLeft className="w-4 h-4 rtl:rotate-0 rotate-180" />
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {isLessonCompleted ? (
              <div className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-black text-xs font-arabic flex items-center justify-center gap-1.5 border border-emerald-300 dark:border-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{language === 'ur' ? 'سبق مکمل شدہ ✓' : 'Lesson Completed ✓'}</span>
              </div>
            ) : (
              <button
                id="btn-complete-islamic-lesson"
                onClick={handleToggleCompleteLesson}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-xs shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 font-arabic"
              >
                <Award className="w-4 h-4 text-amber-300" />
                <span>{language === 'ur' ? 'آج کا سبق مکمل کریں (+25 pts)' : 'Complete Lesson (+25 pts)'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-300 dark:hover:bg-slate-700 transition font-arabic"
            >
              {language === 'ur' ? 'بند کریں' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
