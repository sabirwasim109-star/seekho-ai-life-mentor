import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  BookOpen, 
  Lightbulb, 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Compass, 
  Clock, 
  Award, 
  Flame, 
  Send, 
  Bot, 
  Laptop, 
  Smartphone, 
  Briefcase, 
  User, 
  Users, 
  Globe, 
  Volume2, 
  Languages, 
  HelpCircle,
  Check,
  GraduationCap
} from 'lucide-react';
import { DynamicSearchLesson, Language, UserProfile, Course } from '../types';
import { FieldAudioSpeaker, AudioReaderButton, VoiceInputButton, useActiveSpeech } from './AudioSpeechControls';
import { stopSpeaking } from '../utils/speech';
import { COURSES_DATA } from '../data/mockData';

interface SmartSearchLessonModalProps {
  lesson: DynamicSearchLesson;
  language: Language;
  userProfile: UserProfile;
  onClose: () => void;
  onLanguageChange?: (lang: Language) => void;
  onSelectCourse?: (course: Course) => void;
  onAddToDailyJourney?: (lesson: DynamicSearchLesson, reflection: string) => void;
  onOpenAITeacherWithTopic?: (topicPrompt: string) => void;
}

export const SmartSearchLessonModal: React.FC<SmartSearchLessonModalProps> = ({
  lesson,
  language,
  userProfile,
  onClose,
  onLanguageChange,
  onSelectCourse,
  onAddToDailyJourney,
  onOpenAITeacherWithTopic,
}) => {
  const [currentLang, setCurrentLang] = useState<Language>(language || 'dual');
  const speechState = useActiveSpeech();

  useEffect(() => {
    if (language) {
      setCurrentLang(language);
    }
  }, [language]);

  const handleSwitchLanguage = (newLang: Language) => {
    setCurrentLang(newLang);
    try {
      localStorage.setItem('seekho_language', newLang);
    } catch (e) {
      console.warn('Failed to save language to localStorage:', e);
    }
    if (onLanguageChange) {
      onLanguageChange(newLang);
    }
  };

  const isUrduOnly = currentLang === 'ur';
  const isDual = currentLang === 'dual' || !currentLang;
  const isEnOnly = currentLang === 'en';

  // Interactive Quiz state for Step 4
  const [selectedPracticeOption, setSelectedPracticeOption] = useState<string | null>(null);
  const [practiceSubmitted, setPracticeSubmitted] = useState(false);

  // Practical action checkboxes for Step 5
  const [checkedActions, setCheckedActions] = useState<Record<number, boolean>>({});

  // Reflection text for Step 6
  const [reflectionText, setReflectionText] = useState('');
  const [reflectionSaved, setReflectionSaved] = useState(false);

  // Added to daily journey state
  const [isAddedToJourney, setIsAddedToJourney] = useState(false);

  // Matched course lookup
  const matchedCourse = lesson.matchedCourseId 
    ? COURSES_DATA.find(c => c.id === lesson.matchedCourseId)
    : null;

  const handleToggleAction = (index: number) => {
    setCheckedActions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSaveReflection = () => {
    if (!reflectionText.trim()) return;
    setReflectionSaved(true);
    try {
      const savedReflections = JSON.parse(localStorage.getItem('seekho_search_reflections') || '{}');
      savedReflections[lesson.id] = {
        query: lesson.query,
        topic: lesson.topicUrdu,
        reflection: reflectionText,
        savedAt: new Date().toISOString()
      };
      localStorage.setItem('seekho_search_reflections', JSON.stringify(savedReflections));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddJourneyClick = () => {
    setIsAddedToJourney(true);
    if (onAddToDailyJourney) {
      onAddToDailyJourney(lesson, reflectionText);
    }
  };

  const handleOpenCourseClick = () => {
    if (matchedCourse && onSelectCourse) {
      stopSpeaking();
      onClose();
      onSelectCourse(matchedCourse);
    }
  };

  const handleAskMentorClick = () => {
    if (onOpenAITeacherWithTopic) {
      stopSpeaking();
      onClose();
      const prompt = isEnOnly
        ? `I am learning about "${lesson.topicEn}". Please give me personalized advice and answer my questions about this topic.`
        : `میں "${lesson.topicUrdu}" کے بارے میں سیکھ رہا ہوں۔ برائے مہربانی مجھے اس کے بارے میں آسان اور ذاتی رہنمائی دیں۔`;
      onOpenAITeacherWithTopic(prompt);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="smart-search-modal-title"
    >
      <div 
        id="smart-search-modal-container"
        className="bg-white text-slate-900 w-full max-w-4xl max-h-[92vh] rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden relative"
      >
        {/* Modal Top Header */}
        <header className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4 border-b border-emerald-700/40 relative shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-inner shrink-0">
              <Sparkles className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 font-arabic">
                  {isDual ? '💡 فوری ۷ مرحلہ وار عملی سبق (Instant 7-Step Guide)' : isUrduOnly ? '💡 فوری ۷ مرحلہ وار عملی سبق' : '💡 Instant 7-Step Practical Guide'}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1 font-arabic">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lesson.estimatedMinutes} منٹ</span>
                </span>
                <span className="text-xs text-amber-300 flex items-center gap-1 font-bold font-arabic">
                  <Award className="w-3.5 h-3.5" />
                  <span>+{lesson.xpPoints} XP</span>
                </span>
              </div>
              <h2 id="smart-search-modal-title" className="text-lg sm:text-2xl font-black text-white font-arabic tracking-tight leading-snug mt-0.5">
                {isEnOnly ? lesson.topicEn : lesson.topicUrdu}
                {isDual && lesson.topicEn && (
                  <span className="text-xs sm:text-sm font-sans font-medium text-emerald-200/80 block sm:inline sm:mr-2">
                    ({lesson.topicEn})
                  </span>
                )}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Top Audio Reader for entire modal */}
            <AudioReaderButton
              id="search-modal-top-audio-reader"
              text={`${lesson.topicUrdu}۔ ${lesson.step1Learn.summaryUrdu}۔ ${lesson.step2Understand.realWorldExampleUrdu}۔ عملی اقدام: ${lesson.step5Action.todayActionUrdu}`}
              language={currentLang}
              variant="header"
              size="md"
              showLabel={false}
            />

            <button
              id="search-modal-close-btn"
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition active:scale-95 border border-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Top Sticky Language Switcher Bar */}
        <div className="bg-slate-900 text-white px-5 sm:px-8 py-2.5 border-b border-emerald-500/30 flex items-center justify-between gap-3 flex-wrap shadow-xs shrink-0">
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-emerald-400" />
            <span className="text-xs sm:text-sm font-bold font-arabic text-emerald-100">
              {isDual ? '🌐 زبان منتخب کریں (Select Language):' : isUrduOnly ? '🌐 زبان منتخب کریں:' : '🌐 Select Language:'}
            </span>
          </div>

          <div className="inline-flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700/80 shadow-inner">
            <button
              id="search-lang-ur"
              type="button"
              onClick={() => handleSwitchLanguage('ur')}
              className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-bold font-arabic transition-all ${
                currentLang === 'ur'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/70'
              }`}
            >
              اردو
            </button>
            <button
              id="search-lang-en"
              type="button"
              onClick={() => handleSwitchLanguage('en')}
              className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-bold font-sans transition-all ${
                currentLang === 'en'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/70'
              }`}
            >
              English
            </button>
            <button
              id="search-lang-dual"
              type="button"
              onClick={() => handleSwitchLanguage('dual')}
              className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-bold font-arabic transition-all ${
                currentLang === 'dual'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/70'
              }`}
            >
              Dual (دونوں)
            </button>
          </div>
        </div>

        {/* Scrollable Content Body with 7 Concrete Steps */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-7 space-y-6 sm:space-y-8 bg-slate-50/50">
          
          {/* Matched Full Course Banner (If query connects directly to an existing course) */}
          {matchedCourse && (
            <div 
              id="search-matched-course-banner"
              className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white p-4 sm:p-5 rounded-3xl border border-emerald-500/40 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-md shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 font-arabic">
                    {isDual ? '🚀 مکمل باقاعدہ کورس دستیاب ہے (Full Course Available)' : isUrduOnly ? '🚀 مکمل باقاعدہ کورس دستیاب ہے' : '🚀 Full Structured Course Available'}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white font-arabic mt-1">
                    {isEnOnly ? matchedCourse.titleEn : matchedCourse.titleUrdu}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-arabic line-clamp-1">
                    {isEnOnly ? matchedCourse.descriptionEn : matchedCourse.descriptionUrdu}
                  </p>
                </div>
              </div>

              <button
                id="search-open-full-course-btn"
                type="button"
                onClick={handleOpenCourseClick}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black text-xs sm:text-sm shadow-md transition font-arabic flex items-center justify-center gap-2 shrink-0 active:scale-98"
              >
                <span>{isDual ? 'کورس شروع کریں (Start Full Course)' : isUrduOnly ? 'کورس شروع کریں' : 'Start Full Course'}</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0 rotate-180" />
              </button>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 1: LEARN (پڑھیے) */}
          {/* ========================================================================= */}
          <section 
            id="search-step-1"
            className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 space-y-4 shadow-xs ${
              speechState.isActive && speechState.currentId === 'step1-audio-speaker'
                ? 'ring-2 ring-emerald-500 bg-emerald-50/90 border-emerald-400 shadow-md'
                : 'bg-white border-slate-200/90'
            }`}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-black font-arabic flex items-center justify-center text-base">
                  ۱
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                    {isEnOnly ? lesson.step1Learn.titleEn : lesson.step1Learn.titleUrdu}
                  </h3>
                  {isDual && (
                    <span className="text-xs text-slate-500 font-sans block">
                      ({lesson.step1Learn.titleEn})
                    </span>
                  )}
                </div>
              </div>

              <FieldAudioSpeaker
                id="step1-audio-speaker"
                text={isEnOnly ? `${lesson.step1Learn.titleEn}. ${lesson.step1Learn.summaryEn}` : `${lesson.step1Learn.titleUrdu}۔ ${lesson.step1Learn.summaryUrdu}`}
                language={currentLang}
                size="md"
                titleUr="پہلا مرحلہ سنیں"
                titleEn="Listen to Step 1"
              />
            </div>

            <p className="urdu-body text-[16px] sm:text-[17.5px] text-slate-800 font-medium leading-[1.85] font-arabic">
              {isEnOnly ? lesson.step1Learn.summaryEn : lesson.step1Learn.summaryUrdu}
            </p>

            {/* Core Bullet Points */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 space-y-2.5">
              <h4 className="text-xs sm:text-sm font-bold text-slate-700 font-arabic uppercase">
                {isDual ? '📌 اہم بنیادی نکات (Core Takeaways):' : isUrduOnly ? '📌 اہم بنیادی نکات:' : '📌 Core Takeaways:'}
              </h4>
              <ul className="space-y-2">
                {(isEnOnly ? lesson.step1Learn.corePointsEn : lesson.step1Learn.corePointsUrdu).map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-slate-700 font-arabic leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {lesson.step1Learn.simplifiedNoteUrdu && (
              <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-bold font-arabic flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{isEnOnly ? lesson.step1Learn.simplifiedNoteEn : lesson.step1Learn.simplifiedNoteUrdu}</span>
              </div>
            )}
          </section>

          {/* ========================================================================= */}
          {/* STEP 2: UNDERSTAND (سمجھیے) */}
          {/* ========================================================================= */}
          <section 
            id="search-step-2"
            className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 space-y-4 shadow-xs ${
              speechState.isActive && speechState.currentId === 'step2-audio-speaker'
                ? 'ring-2 ring-emerald-500 bg-emerald-50/90 border-emerald-400 shadow-md'
                : 'bg-white border-slate-200/90'
            }`}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 font-black font-arabic flex items-center justify-center text-base">
                  ۲
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                    {isEnOnly ? lesson.step2Understand.titleEn : lesson.step2Understand.titleUrdu}
                  </h3>
                  {isDual && (
                    <span className="text-xs text-slate-500 font-sans block">
                      ({lesson.step2Understand.titleEn})
                    </span>
                  )}
                </div>
              </div>

              <FieldAudioSpeaker
                id="step2-audio-speaker"
                text={isEnOnly ? `${lesson.step2Understand.titleEn}. ${lesson.step2Understand.realWorldExampleEn}` : `${lesson.step2Understand.titleUrdu}۔ ${lesson.step2Understand.realWorldExampleUrdu}`}
                language={currentLang}
                size="md"
                titleUr="دوسرا مرحلہ سنیں"
                titleEn="Listen to Step 2"
              />
            </div>

            <div className="bg-blue-50/70 p-4 sm:p-5 rounded-2xl border border-blue-200/80 space-y-2">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-700 shrink-0" />
                <h4 className="text-sm sm:text-base font-black text-blue-950 font-arabic">
                  {isEnOnly ? lesson.step2Understand.scenarioTitleEn : lesson.step2Understand.scenarioTitleUrdu}
                </h4>
              </div>
              <p className="urdu-body text-[15.5px] sm:text-[16.5px] text-blue-950/90 font-medium leading-[1.8] font-arabic">
                {isEnOnly ? lesson.step2Understand.realWorldExampleEn : lesson.step2Understand.realWorldExampleUrdu}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-arabic italic">
              {isEnOnly ? lesson.step2Understand.localContextEn : lesson.step2Understand.localContextUrdu}
            </p>
          </section>

          {/* ========================================================================= */}
          {/* STEP 3: THINK (سوچیے) */}
          {/* ========================================================================= */}
          <section 
            id="search-step-3"
            className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 space-y-4 shadow-xs ${
              speechState.isActive && speechState.currentId === 'step3-audio-speaker'
                ? 'ring-2 ring-emerald-500 bg-emerald-50/90 border-emerald-400 shadow-md'
                : 'bg-white border-slate-200/90'
            }`}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 font-black font-arabic flex items-center justify-center text-base">
                  ۳
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                    {isEnOnly ? lesson.step3Think.titleEn : lesson.step3Think.titleUrdu}
                  </h3>
                  {isDual && (
                    <span className="text-xs text-slate-500 font-sans block">
                      ({lesson.step3Think.titleEn})
                    </span>
                  )}
                </div>
              </div>

              <FieldAudioSpeaker
                id="step3-audio-speaker"
                text={isEnOnly ? `${lesson.step3Think.titleEn}. ${lesson.step3Think.reflectionQuestionEn}` : `${lesson.step3Think.titleUrdu}۔ ${lesson.step3Think.reflectionQuestionUrdu}`}
                language={currentLang}
                size="md"
                titleUr="تیسرا مرحلہ سنیں"
                titleEn="Listen to Step 3"
              />
            </div>

            <div className="bg-purple-50/70 p-4 sm:p-5 rounded-2xl border border-purple-200/80 space-y-2">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-700 shrink-0" />
                <h4 className="text-base sm:text-[17px] font-black text-purple-950 font-arabic leading-snug">
                  {isEnOnly ? lesson.step3Think.reflectionQuestionEn : lesson.step3Think.reflectionQuestionUrdu}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-purple-800 font-arabic">
                {isEnOnly ? lesson.step3Think.promptEn : lesson.step3Think.promptUrdu}
              </p>
            </div>

            {lesson.step3Think.suggestedAnglesUrdu && lesson.step3Think.suggestedAnglesUrdu.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 font-arabic uppercase">
                  {isDual ? 'سوچ کے چند زاویے (Thinking Angles):' : isUrduOnly ? 'سوچ کے چند زاویے:' : 'Thinking Angles:'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {(isEnOnly ? lesson.step3Think.suggestedAnglesEn : lesson.step3Think.suggestedAnglesUrdu).map((angle, idx) => (
                    <span 
                      key={idx}
                      className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-arabic font-medium border border-slate-200"
                    >
                      💡 {angle}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ========================================================================= */}
          {/* STEP 4: PRACTICE (مشق) */}
          {/* ========================================================================= */}
          <section 
            id="search-step-4"
            className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 space-y-4 shadow-xs ${
              speechState.isActive && speechState.currentId === 'step4-audio-speaker'
                ? 'ring-2 ring-emerald-500 bg-emerald-50/90 border-emerald-400 shadow-md'
                : 'bg-white border-slate-200/90'
            }`}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 font-black font-arabic flex items-center justify-center text-base">
                  ۴
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                    {isEnOnly ? lesson.step4Practice.titleEn : lesson.step4Practice.titleUrdu}
                  </h3>
                  {isDual && (
                    <span className="text-xs text-slate-500 font-sans block">
                      ({lesson.step4Practice.titleEn})
                    </span>
                  )}
                </div>
              </div>

              <FieldAudioSpeaker
                id="step4-audio-speaker"
                text={isEnOnly ? `${lesson.step4Practice.titleEn}. ${lesson.step4Practice.challengeEn}` : `${lesson.step4Practice.titleUrdu}۔ ${lesson.step4Practice.challengeUrdu}`}
                language={currentLang}
                size="md"
                titleUr="چوتھا مرحلہ سنیں"
                titleEn="Listen to Step 4"
              />
            </div>

            <div className="space-y-3">
              <p className="urdu-body text-[16px] sm:text-[17px] text-slate-900 font-bold font-arabic">
                {isEnOnly ? lesson.step4Practice.challengeEn : lesson.step4Practice.challengeUrdu}
              </p>

              <div className="space-y-2.5">
                {lesson.step4Practice.options.map((opt) => {
                  const isSelected = selectedPracticeOption === opt.id;
                  const isAnswered = practiceSubmitted;
                  
                  return (
                    <div 
                      key={opt.id}
                      className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all ${
                        isAnswered
                          ? opt.isCorrect
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                            : isSelected
                            ? 'bg-red-50 border-red-400 text-red-950'
                            : 'bg-white border-slate-200 opacity-60'
                          : isSelected
                          ? 'bg-amber-50 border-amber-500 text-slate-950 font-bold shadow-xs'
                          : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPracticeOption(opt.id);
                          setPracticeSubmitted(true);
                        }}
                        className="w-full flex items-start gap-3 text-start"
                      >
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          isAnswered && opt.isCorrect
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : isAnswered && isSelected && !opt.isCorrect
                            ? 'border-red-600 bg-red-600 text-white'
                            : isSelected
                            ? 'border-amber-500 bg-amber-500 text-white'
                            : 'border-slate-300'
                        }`}>
                          {isAnswered && opt.isCorrect && <Check className="w-3.5 h-3.5" />}
                          {isAnswered && isSelected && !opt.isCorrect && <X className="w-3.5 h-3.5" />}
                        </div>

                        <div className="flex-1 space-y-1">
                          <p className="text-[15.5px] sm:text-[16.5px] font-arabic font-medium leading-relaxed">
                            {isEnOnly ? opt.textEn : opt.textUrdu}
                          </p>

                          {isAnswered && (
                            <p className={`text-xs sm:text-sm font-arabic font-bold pt-1 ${
                              opt.isCorrect ? 'text-emerald-800' : 'text-red-700'
                            }`}>
                              {isEnOnly ? opt.explanationEn : opt.explanationUrdu}
                            </p>
                          )}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* STEP 5: PRACTICAL ACTION (عملی اقدام) */}
          {/* ========================================================================= */}
          <section 
            id="search-step-5"
            className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 space-y-4 shadow-xs ${
              speechState.isActive && speechState.currentId === 'step5-audio-speaker'
                ? 'ring-2 ring-emerald-500 bg-emerald-50/90 border-emerald-400 shadow-md'
                : 'bg-white border-slate-200/90'
            }`}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black font-arabic flex items-center justify-center text-base shadow-xs">
                  ۵
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                    {isEnOnly ? lesson.step5Action.titleEn : lesson.step5Action.titleUrdu}
                  </h3>
                  {isDual && (
                    <span className="text-xs text-slate-500 font-sans block">
                      ({lesson.step5Action.titleEn})
                    </span>
                  )}
                </div>
              </div>

              <FieldAudioSpeaker
                id="step5-audio-speaker"
                text={isEnOnly ? `${lesson.step5Action.titleEn}. ${lesson.step5Action.todayActionEn}` : `${lesson.step5Action.titleUrdu}۔ ${lesson.step5Action.todayActionUrdu}`}
                language={currentLang}
                size="md"
                titleUr="پانچواں مرحلہ سنیں"
                titleEn="Listen to Step 5"
              />
            </div>

            <div className="bg-emerald-900 text-white p-4 sm:p-5 rounded-2xl shadow-sm space-y-2 border border-emerald-700/60">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-arabic inline-block">
                {isDual ? '⚡ آج کا ہدف (Today’s Target)' : isUrduOnly ? '⚡ آج کا ہدف' : '⚡ Today’s Target'}
              </span>
              <p className="text-base sm:text-[17.5px] font-black text-white font-arabic leading-relaxed">
                {isEnOnly ? lesson.step5Action.todayActionEn : lesson.step5Action.todayActionUrdu}
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs font-bold text-slate-600 font-arabic uppercase block">
                {isDual ? 'عملی اقدامات کی فہرست (Action Checklist):' : isUrduOnly ? 'عملی اقدامات کی فہرست:' : 'Action Checklist:'}
              </span>
              {(isEnOnly ? lesson.step5Action.actionChecklistEn : lesson.step5Action.actionChecklistUrdu).map((item, idx) => {
                const isChecked = checkedActions[idx] || false;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleToggleAction(idx)}
                    className={`w-full p-3 rounded-xl border text-start flex items-center gap-3 transition ${
                      isChecked
                        ? 'bg-emerald-50/80 border-emerald-400 text-emerald-950 line-through'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                      isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-400'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-[14.5px] sm:text-[15.5px] font-arabic font-medium">
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* STEP 6: REFLECTION (انعکاس) */}
          {/* ========================================================================= */}
          <section 
            id="search-step-6"
            className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 space-y-4 shadow-xs ${
              speechState.isActive && speechState.currentId === 'step6-audio-speaker'
                ? 'ring-2 ring-emerald-500 bg-emerald-50/90 border-emerald-400 shadow-md'
                : 'bg-white border-slate-200/90'
            }`}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-900 font-black font-arabic flex items-center justify-center text-base">
                  ۶
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                    {isEnOnly ? lesson.step6Reflection.titleEn : lesson.step6Reflection.titleUrdu}
                  </h3>
                  {isDual && (
                    <span className="text-xs text-slate-500 font-sans block">
                      ({lesson.step6Reflection.titleEn})
                    </span>
                  )}
                </div>
              </div>

              <FieldAudioSpeaker
                id="step6-audio-speaker"
                text={isEnOnly ? `${lesson.step6Reflection.titleEn}. ${lesson.step6Reflection.promptEn}` : `${lesson.step6Reflection.titleUrdu}۔ ${lesson.step6Reflection.promptUrdu}`}
                language={currentLang}
                size="md"
                titleUr="چھٹا مرحلہ سنیں"
                titleEn="Listen to Step 6"
              />
            </div>

            <p className="urdu-body text-[15.5px] sm:text-[16.5px] text-slate-800 font-bold font-arabic">
              {isEnOnly ? lesson.step6Reflection.promptEn : lesson.step6Reflection.promptUrdu}
            </p>

            {/* Quick Sample Chips */}
            <div className="space-y-1.5">
              <span className="text-xs text-slate-500 font-arabic block">
                {isDual ? 'مثال کے تاثرات پر کلک کر کے منتخب کریں (Tap to autofill):' : isUrduOnly ? 'مثال کے تاثرات پر کلک کریں:' : 'Tap sample reflection to fill:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {(isEnOnly ? lesson.step6Reflection.sampleTakeawaysEn : lesson.step6Reflection.sampleTakeawaysUrdu).map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setReflectionText(sample)}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-arabic border border-slate-200 transition text-start"
                  >
                    ✏️ {sample}
                  </button>
                ))}
              </div>
            </div>

            {/* Textarea with Voice Input */}
            <div className="relative">
              <textarea
                id="search-reflection-textarea"
                rows={3}
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                placeholder={isEnOnly ? 'Write or speak your reflection here...' : 'یہاں اپنا تاثر یا سیکھی ہوئی بات لکھیں یا مائیک پر بولیں...'}
                className="urdu-input w-full bg-slate-50 min-h-[90px] p-4 rounded-2xl border border-slate-300 text-[16px] sm:text-[17px] font-medium font-arabic focus:border-emerald-600 focus:bg-white focus:outline-none transition shadow-2xs resize-none"
              />
              <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-auto flex items-center gap-2">
                <VoiceInputButton
                  language={currentLang}
                  size="sm"
                  tooltipUr="بول کر اپنا تاثر درج کریں"
                  tooltipEn="Speak your reflection"
                  onTranscript={(text) => setReflectionText(prev => prev ? `${prev} ${text}` : text)}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                id="search-save-reflection-btn"
                type="button"
                onClick={handleSaveReflection}
                disabled={!reflectionText.trim() || reflectionSaved}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic transition flex items-center gap-2 ${
                  reflectionSaved
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : reflectionText.trim()
                    ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{reflectionSaved ? (isEnOnly ? 'Saved!' : 'محفوظ ہو گیا!') : (isEnOnly ? 'Save Reflection' : 'تاثر محفوظ کریں')}</span>
              </button>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* STEP 7: IMPACT & GROWTH (پیش رفت) */}
          {/* ========================================================================= */}
          <section 
            id="search-step-7"
            className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 space-y-4 shadow-xs ${
              speechState.isActive && speechState.currentId === 'step7-audio-speaker'
                ? 'ring-2 ring-emerald-500 bg-emerald-50/90 border-emerald-400 shadow-md'
                : 'bg-white border-slate-200/90'
            }`}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-900 font-black font-arabic flex items-center justify-center text-base">
                  ۷
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                    {isEnOnly ? lesson.step7Impact.titleEn : lesson.step7Impact.titleUrdu}
                  </h3>
                  {isDual && (
                    <span className="text-xs text-slate-500 font-sans block">
                      ({lesson.step7Impact.titleEn})
                    </span>
                  )}
                </div>
              </div>

              <FieldAudioSpeaker
                id="step7-audio-speaker"
                text={isEnOnly 
                  ? `${lesson.step7Impact.titleEn}. ${lesson.step7Impact.selfImpactEn}. ${lesson.step7Impact.familyImpactEn}. ${lesson.step7Impact.societyImpactEn}` 
                  : `${lesson.step7Impact.titleUrdu}۔ ${lesson.step7Impact.selfImpactUrdu}۔ ${lesson.step7Impact.familyImpactUrdu}۔ ${lesson.step7Impact.societyImpactUrdu}`}
                language={currentLang}
                size="md"
                titleUr="ساتواں مرحلہ سنیں"
                titleEn="Listen to Step 7"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Card 1: Self */}
              <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald-800" />
                  <h4 className="text-sm font-black text-emerald-950 font-arabic">
                    {isDual ? '۱. ذات (Self):' : isUrduOnly ? '۱. ذات:' : '1. Self Impact:'}
                  </h4>
                </div>
                <p className="text-[14px] sm:text-[14.5px] text-emerald-950 font-arabic leading-relaxed">
                  {isEnOnly ? lesson.step7Impact.selfImpactEn : lesson.step7Impact.selfImpactUrdu}
                </p>
              </div>

              {/* Card 2: Family */}
              <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-800" />
                  <h4 className="text-sm font-black text-blue-950 font-arabic">
                    {isDual ? '۲. خاندان (Family):' : isUrduOnly ? '۲. خاندان:' : '2. Family Impact:'}
                  </h4>
                </div>
                <p className="text-[14px] sm:text-[14.5px] text-blue-950 font-arabic leading-relaxed">
                  {isEnOnly ? lesson.step7Impact.familyImpactEn : lesson.step7Impact.familyImpactUrdu}
                </p>
              </div>

              {/* Card 3: Society */}
              <div className="bg-purple-50/80 p-4 rounded-2xl border border-purple-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-800" />
                  <h4 className="text-sm font-black text-purple-950 font-arabic">
                    {isDual ? '۳. معاشرہ (Society):' : isUrduOnly ? '۳. معاشرہ:' : '3. Community Impact:'}
                  </h4>
                </div>
                <p className="text-[14px] sm:text-[14.5px] text-purple-950 font-arabic leading-relaxed">
                  {isEnOnly ? lesson.step7Impact.societyImpactEn : lesson.step7Impact.societyImpactUrdu}
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <footer className="bg-white border-t border-slate-200 px-5 sm:px-8 py-3.5 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 shadow-lg">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              id="search-ask-mentor-btn"
              type="button"
              onClick={handleAskMentorClick}
              className="flex-1 sm:flex-initial px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 font-arabic"
            >
              <Bot className="w-4 h-4 text-emerald-700" />
              <span>{isDual ? 'استاد سیکھو سے بات کریں (Ask AI Mentor)' : isUrduOnly ? 'استاد سیکھو سے بات کریں' : 'Ask AI Mentor'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              id="search-add-daily-journey-btn"
              type="button"
              onClick={handleAddJourneyClick}
              disabled={isAddedToJourney}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-2xl font-black text-sm sm:text-base shadow-md flex items-center justify-center gap-2.5 transition active:scale-98 font-arabic ${
                isAddedToJourney
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-800/30'
              }`}
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>
                {isAddedToJourney
                  ? (isDual ? 'روزمرہ سفر میں شامل ہے (+25 XP) ✓' : isUrduOnly ? 'روزمرہ سفر میں شامل ہے (+25 XP) ✓' : 'Added to Daily Journey (+25 XP) ✓')
                  : (isDual ? 'اسے میری روزمرہ لرننگ میں شامل کریں (+25 XP)' : isUrduOnly ? 'اسے میری روزمرہ لرننگ میں شامل کریں (+25 XP)' : 'Add to My Daily Journey (+25 XP)')}
              </span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
