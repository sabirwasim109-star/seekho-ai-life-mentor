import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  BookOpen, 
  Wrench, 
  ShieldCheck, 
  Smile, 
  Bot, 
  Award, 
  RotateCcw, 
  ChevronRight,
  Flame,
  Zap,
  Check,
  Compass,
  Layers,
  Heart
} from 'lucide-react';
import { 
  Language, 
  UserProfile, 
  JourneyTimeLength, 
  DailySmartJourney 
} from '../types';
import { 
  JOURNEY_TIME_OPTIONS, 
  generateDailySmartJourney, 
  isDailyJourneyCompletedToday, 
  checkUserWelcomeBackStatus 
} from '../utils/dailySmartJourneyEngine';

interface DailySmartJourneyCardProps {
  language: Language;
  userProfile: UserProfile;
  onCompleteJourney: (
    timeLength: JourneyTimeLength,
    points: number,
    reflectionText: string,
    lessonId: string,
    missionId: string
  ) => void;
  onOpenLesson?: (courseId: string, lessonId: string) => void;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
  onNavigateToTab?: (tab: string) => void;
}

type JourneyViewStep = 'select_time' | 'learn' | 'practice' | 'act' | 'reflect' | 'completed_summary';

const QUICK_REFLECTION_OPTIONS = [
  { ur: 'آج نیا ہنر سیکھ کر اعتماد بڑھا', en: 'Gained confidence learning a new skill' },
  { ur: 'عملی مشق بہت آسان اور مفید رہی', en: 'Practical exercise was simple & useful' },
  { ur: 'گھر والوں یا دوسروں کو فائدہ پہنچا', en: 'Benefited family or others' },
  { ur: 'دل کو سکون اور اطمینان ملا', en: 'Felt deep inner peace' }
];

export const DailySmartJourneyCard: React.FC<DailySmartJourneyCardProps> = ({
  language,
  userProfile,
  onCompleteJourney,
  onOpenLesson,
  onOpenAITeacherWithPrompt,
  onNavigateToTab,
}) => {
  const isAlreadyCompletedToday = isDailyJourneyCompletedToday(userProfile);
  const welcomeStatus = checkUserWelcomeBackStatus(userProfile);

  // Default time length from preference or 20m
  const defaultTime = userProfile.dailyJourneyProgress?.timePreference || '20m';
  const [selectedTime, setSelectedTime] = useState<JourneyTimeLength>(defaultTime);
  const [journeyData, setJourneyData] = useState<DailySmartJourney>(() => 
    generateDailySmartJourney(userProfile, defaultTime)
  );

  // Stepper state: 'select_time' -> 'learn' -> 'practice' -> 'act' -> 'reflect' -> 'completed_summary'
  const [currentStep, setCurrentStep] = useState<JourneyViewStep>(
    isAlreadyCompletedToday ? 'completed_summary' : 'select_time'
  );

  // Step interaction states
  const [practiceDone, setPracticeDone] = useState(false);
  const [actionDone, setActionDone] = useState(false);
  const [userReflection, setUserReflection] = useState('');
  const [selectedQuickReflection, setSelectedQuickReflection] = useState<string>(QUICK_REFLECTION_OPTIONS[0].ur);

  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;
  const BackArrowIcon = language === 'ur' ? ArrowRight : ArrowLeft;

  // Re-generate journey if selected time changes
  const handleTimeSelect = (time: JourneyTimeLength) => {
    setSelectedTime(time);
    const newJourney = generateDailySmartJourney(userProfile, time);
    setJourneyData(newJourney);
  };

  const handleStartJourney = () => {
    setCurrentStep('learn');
  };

  const handleFinishJourney = () => {
    const finalReflection = userReflection.trim() || selectedQuickReflection;
    onCompleteJourney(
      selectedTime,
      journeyData.totalPoints,
      finalReflection,
      journeyData.learnStep.lessonId,
      journeyData.actStep.missionId
    );
    setCurrentStep('completed_summary');
  };

  // Step Indicators data
  const STEP_TABS = [
    { id: 'learn', number: '۱', labelUrdu: 'سیکھیں', labelEn: 'Learn', icon: BookOpen },
    { id: 'practice', number: '۲', labelUrdu: 'مشق کریں', labelEn: 'Practice', icon: Wrench },
    { id: 'act', number: '۳', labelUrdu: 'عمل کریں', labelEn: 'Act', icon: ShieldCheck },
    { id: 'reflect', number: '۴', labelUrdu: 'غور کریں', labelEn: 'Reflect', icon: Smile },
  ];

  return (
    <div 
      id="daily-smart-journey-card" 
      className="bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white rounded-3xl p-5 sm:p-7 shadow-2xl border-2 border-emerald-500/40 relative overflow-hidden my-6"
    >
      {/* Background glowing orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ------------------------------------------------------------- */}
      {/* HEADER SECTION */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center font-black shadow-lg shrink-0">
            <Compass className="w-6 h-6 fill-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {language === 'ur' ? 'روزانہ اسمارٹ سفر' : 'Daily Smart Journey'}
              </span>
              {journeyData.difficultyLevel === 'advanced' && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-purple-400" />
                  {language === 'ur' ? 'ماہرانہ سطح' : 'Advanced Level'}
                </span>
              )}
              {isAlreadyCompletedToday && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {language === 'ur' ? 'آج کا سفر مکمل' : 'Completed Today'}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-arabic mt-0.5">
              {language === 'ur' ? 'میرا آج کا سفر' : 'My Daily Journey'}
            </h3>
          </div>
        </div>

        {/* Total Points & Status */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/10 text-emerald-200 border border-white/15 flex items-center gap-1.5 font-arabic">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            {journeyData.totalEstimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
          </span>
          <span className="text-xs font-black px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 flex items-center gap-1 font-arabic shadow-md">
            <Award className="w-3.5 h-3.5" />
            +{journeyData.totalPoints} {language === 'ur' ? 'پوائنٹس' : 'pts'}
          </span>
        </div>
      </div>

      {/* Gentle Welcome Back Banner (Without guilt/shame) */}
      {welcomeStatus.isWelcomeBack && currentStep === 'select_time' && (
        <div className="relative z-10 mt-4 p-3.5 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-arabic flex items-center gap-2.5">
          <Heart className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {language === 'ur' ? welcomeStatus.welcomeMessageUrdu : welcomeStatus.welcomeMessageEn}
          </span>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STEP PROGRESS BAR (When Inside Steps) */}
      {/* ------------------------------------------------------------- */}
      {currentStep !== 'select_time' && currentStep !== 'completed_summary' && (
        <div className="relative z-10 my-5">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {STEP_TABS.map((tab, idx) => {
              const stepIndex = idx;
              const currentStepIdx = ['learn', 'practice', 'act', 'reflect'].indexOf(currentStep);
              const isPast = stepIndex < currentStepIdx;
              const isCurrent = stepIndex === currentStepIdx;
              const TabIcon = tab.icon;

              return (
                <div
                  key={tab.id}
                  className={`p-2 sm:p-2.5 rounded-xl border text-center transition-all ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950 border-amber-300 font-black shadow-md scale-[1.02]'
                      : isPast
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold'
                      : 'bg-white/5 text-slate-400 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    {isPast ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <TabIcon className="w-3.5 h-3.5" />
                    )}
                    <span className="text-[11px] sm:text-xs">
                      {language === 'ur' ? `${tab.number}.` : `${idx + 1}.`}
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-arabic block truncate">
                    {language === 'ur' ? tab.labelUrdu : tab.labelEn}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STEP 0: TIME SELECTION & OVERVIEW ("شروع کریں") */}
      {/* ------------------------------------------------------------- */}
      {currentStep === 'select_time' && (
        <div className="relative z-10 mt-5 space-y-5">
          {/* Question Prompt */}
          <div className="space-y-1.5">
            <h4 className="text-base sm:text-lg font-black text-amber-300 font-arabic flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>
                {language === 'ur' ? 'آج آپ کے پاس کتنا وقت ہے؟' : 'How much time do you have today?'}
              </span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-arabic leading-relaxed">
              {language === 'ur'
                ? 'اپنے دستیاب وقت کا انتخاب کریں، ہم آپ کے لیے 5 متوازن مراحل پر مشتمل فوری سفر تیار کریں گے۔'
                : 'Choose your available time. We will prepare a 5-step balanced journey for you.'}
            </p>
          </div>

          {/* 4 Time Duration Options */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {JOURNEY_TIME_OPTIONS.map((opt) => {
              const isSelected = selectedTime === opt.id;
              return (
                <button
                  key={opt.id}
                  id={`journey-time-option-${opt.id}`}
                  onClick={() => handleTimeSelect(opt.id)}
                  className={`p-4 rounded-2xl border text-start transition-all relative overflow-hidden ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-xl scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 text-white border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className={`text-base sm:text-lg font-black font-arabic ${isSelected ? 'text-slate-950' : 'text-amber-300'}`}>
                      {language === 'ur' ? opt.labelUrdu : opt.labelEn}
                    </span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-slate-950 font-black" />
                    )}
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full inline-block mb-1.5 font-arabic ${
                    isSelected ? 'bg-slate-950/15 text-slate-950' : 'bg-emerald-500/20 text-emerald-300'
                  }`}>
                    {language === 'ur' ? opt.badgeUrdu : opt.badgeEn}
                  </span>
                  <p className={`text-[11px] font-arabic leading-tight ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-300'}`}>
                    {language === 'ur' ? opt.descriptionUrdu : opt.descriptionEn}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Preview summary of today's 5 steps */}
          <div className="bg-slate-950/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-300 font-arabic">
              <span>{language === 'ur' ? 'آج کے سفر کا روڈ میپ:' : "Today's Journey Preview:"}</span>
              <span className="text-amber-300 font-bold">
                {journeyData.totalEstimatedMinutes} {language === 'ur' ? 'منٹ کا سفر' : 'mins total'}
              </span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm font-arabic">
              <div className="flex items-center gap-2.5 text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0">
                  ۱
                </span>
                <span className="font-bold text-white">
                  {language === 'ur' ? 'سیکھیں:' : 'Learn:'}
                </span>
                <span className="truncate text-slate-300">
                  {language === 'ur' ? journeyData.learnStep.lessonTitleUrdu : journeyData.learnStep.lessonTitleEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                  ۲
                </span>
                <span className="font-bold text-white">
                  {language === 'ur' ? 'مشق کریں:' : 'Practice:'}
                </span>
                <span className="truncate text-slate-300">
                  {language === 'ur' ? journeyData.practiceStep.titleUrdu : journeyData.practiceStep.titleEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-xs shrink-0">
                  ۳
                </span>
                <span className="font-bold text-white">
                  {language === 'ur' ? 'عمل کریں:' : 'Act:'}
                </span>
                <span className="truncate text-slate-300">
                  {language === 'ur' ? journeyData.actStep.missionTitleUrdu : journeyData.actStep.missionTitleEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs shrink-0">
                  ۴
                </span>
                <span className="font-bold text-white">
                  {language === 'ur' ? 'غور کریں:' : 'Reflect:'}
                </span>
                <span className="truncate text-slate-300">
                  {language === 'ur' ? journeyData.reflectStep.themeUrdu : journeyData.reflectStep.themeEn}
                </span>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            <button
              id="start-daily-journey-btn"
              onClick={handleStartJourney}
              className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base sm:text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 font-arabic"
            >
              <Play className="w-5 h-5 fill-slate-950" />
              <span>{language === 'ur' ? 'سفر شروع کریں' : 'Start Daily Journey'}</span>
              <ArrowIcon className="w-5 h-5" />
            </button>

            <span className="text-xs text-emerald-200/80 font-arabic text-center sm:text-end">
              {language === 'ur' 
                ? '💡 ایک وقت میں ایک قدم سامنے آئے گا تاکہ بوجھ نہ بنے۔'
                : '💡 One step is revealed at a time for calm, focused learning.'}
            </span>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STEP 1: سیکھیں (LEARN) */}
      {/* ------------------------------------------------------------- */}
      {currentStep === 'learn' && (
        <div className="relative z-10 mt-4 space-y-4 animate-fade-in">
          <div className="bg-slate-950/70 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-emerald-500/30 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-amber-300 font-bold font-arabic px-2.5 py-1 rounded-lg bg-amber-400/15 border border-amber-400/30">
                {language === 'ur' ? 'قدم ۱: سیکھیں' : 'Step 1: Learn'} ({journeyData.learnStep.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'})
              </span>
              <span className="text-xs text-emerald-200 font-arabic">
                {language === 'ur' ? journeyData.learnStep.courseTitleUrdu : journeyData.learnStep.courseTitleEn}
              </span>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-black text-white font-arabic leading-snug">
                {language === 'ur' ? journeyData.learnStep.lessonTitleUrdu : journeyData.learnStep.lessonTitleEn}
              </h4>
            </div>

            {/* Key Concept Box */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 font-arabic">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{language === 'ur' ? 'بنیادی نکتہ (Key Concept):' : 'Key Concept:'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-arabic">
                {language === 'ur' ? journeyData.learnStep.keyConceptUrdu : journeyData.learnStep.keyConceptEn}
              </p>
            </div>

            {/* Quick Practical Takeaway */}
            <div className="bg-emerald-950/60 rounded-xl p-4 border border-emerald-500/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 font-arabic">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ur' ? 'عملی خلاصہ (Practical Takeaway):' : 'Practical Takeaway:'}</span>
              </div>
              <p className="text-xs sm:text-sm text-white font-bold leading-relaxed font-arabic">
                {language === 'ur' ? journeyData.learnStep.takeawayUrdu : journeyData.learnStep.takeawayEn}
              </p>
            </div>

            {/* Optional Full Lesson Open */}
            {onOpenLesson && (
              <div className="pt-1 flex items-center justify-between text-xs font-arabic">
                <span className="text-slate-300">
                  {language === 'ur' ? 'کیا آپ تفصیلی سبق دیکھنا چاہتے ہیں؟' : 'Want to view the full lesson?'}
                </span>
                <button
                  onClick={() => onOpenLesson(journeyData.learnStep.courseId, journeyData.learnStep.lessonId)}
                  className="text-amber-300 hover:text-amber-200 underline font-bold"
                >
                  {language === 'ur' ? 'مکمل سبق کھولیں' : 'Open Full Lesson'}
                </button>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setCurrentStep('select_time')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs sm:text-sm font-bold font-arabic flex items-center gap-1.5"
            >
              <BackArrowIcon className="w-4 h-4" />
              <span>{language === 'ur' ? 'واپس' : 'Back'}</span>
            </button>

            <button
              id="journey-step-1-next-btn"
              onClick={() => setCurrentStep('practice')}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm font-arabic shadow-md flex items-center gap-2 hover:scale-[1.02] transition"
            >
              <span>{language === 'ur' ? 'اگلا قدم: مشق کریں' : 'Next Step: Practice'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STEP 2: مشق کریں (PRACTICE) */}
      {/* ------------------------------------------------------------- */}
      {currentStep === 'practice' && (
        <div className="relative z-10 mt-4 space-y-4 animate-fade-in">
          <div className="bg-slate-950/70 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-emerald-500/30 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-amber-300 font-bold font-arabic px-2.5 py-1 rounded-lg bg-amber-400/15 border border-amber-400/30">
                {language === 'ur' ? 'قدم ۲: مشق کریں' : 'Step 2: Practice'} ({journeyData.practiceStep.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'})
              </span>
              <span className="text-xs text-emerald-300 font-bold font-arabic">
                +{journeyData.practiceStep.points} {language === 'ur' ? 'پوائنٹس' : 'pts'}
              </span>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-black text-white font-arabic leading-snug">
                {language === 'ur' ? journeyData.practiceStep.titleUrdu : journeyData.practiceStep.titleEn}
              </h4>
            </div>

            {/* Instruction Box */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 font-arabic">
                <Wrench className="w-4 h-4 text-amber-400" />
                <span>{language === 'ur' ? 'عملی سرگرمی (Hands-on Activity):' : 'Hands-on Activity:'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-arabic">
                {language === 'ur' ? journeyData.practiceStep.instructionUrdu : journeyData.practiceStep.instructionEn}
              </p>
            </div>

            {/* Practical Tool Badge */}
            <div className="bg-teal-950/50 rounded-xl p-3.5 border border-teal-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-teal-200 font-arabic">
                <Layers className="w-4 h-4 text-teal-400" />
                <span>{language === 'ur' ? 'مطلوبہ اوزار یا ایپ:' : 'Required Tool / App:'}</span>
              </div>
              <span className="text-xs font-bold text-amber-300 font-arabic">
                {language === 'ur' ? journeyData.practiceStep.practicalToolUrdu : journeyData.practiceStep.practicalToolEn}
              </span>
            </div>

            {/* Interactive Checkbox */}
            <button
              type="button"
              id="journey-practice-checkbox-btn"
              onClick={() => setPracticeDone(!practiceDone)}
              className={`w-full p-4 rounded-xl border flex items-center gap-3 transition-all font-arabic ${
                practiceDone
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                  : 'bg-white/5 border-white/15 text-slate-300 hover:bg-white/10'
              }`}
            >
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center border font-bold ${
                practiceDone ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'border-white/30'
              }`}>
                {practiceDone && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <span className="text-xs sm:text-sm font-bold text-start">
                {language === 'ur' 
                  ? 'میں نے یہ ہنر عملی طور پر آزما کر دیکھ لیا ہے'
                  : 'I have practically practiced this skill'}
              </span>
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setCurrentStep('learn')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs sm:text-sm font-bold font-arabic flex items-center gap-1.5"
            >
              <BackArrowIcon className="w-4 h-4" />
              <span>{language === 'ur' ? 'پچھلا قدم' : 'Previous'}</span>
            </button>

            <button
              id="journey-step-2-next-btn"
              onClick={() => setCurrentStep('act')}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm font-arabic shadow-md flex items-center gap-2 hover:scale-[1.02] transition"
            >
              <span>{language === 'ur' ? 'اگلا قدم: عمل کریں' : 'Next Step: Act'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STEP 3: عمل کریں (ACT - REAL LIFE MISSION) */}
      {/* ------------------------------------------------------------- */}
      {currentStep === 'act' && (
        <div className="relative z-10 mt-4 space-y-4 animate-fade-in">
          <div className="bg-slate-950/70 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-emerald-500/30 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-amber-300 font-bold font-arabic px-2.5 py-1 rounded-lg bg-amber-400/15 border border-amber-400/30">
                {language === 'ur' ? 'قدم ۳: عمل کریں' : 'Step 3: Act'} ({journeyData.actStep.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'})
              </span>
              <span className="text-xs text-amber-300 font-bold font-arabic">
                +{journeyData.actStep.points} {language === 'ur' ? 'پوائنٹس' : 'pts'}
              </span>
            </div>

            <div>
              <span className="text-xs text-emerald-300 font-semibold font-arabic block mb-1">
                {language === 'ur' ? journeyData.actStep.categoryUrdu : journeyData.actStep.categoryEn}
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white font-arabic leading-snug">
                {language === 'ur' ? journeyData.actStep.missionTitleUrdu : journeyData.actStep.missionTitleEn}
              </h4>
            </div>

            {/* Why It Matters */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 font-arabic">
                <span>💡</span>
                <span>{language === 'ur' ? 'یہ عمل کیوں ضروری ہے؟' : 'Why this matters:'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-arabic">
                {language === 'ur' ? journeyData.actStep.whyItMattersUrdu : journeyData.actStep.whyItMattersEn}
              </p>
            </div>

            {/* Action Box */}
            <div className="bg-emerald-950/70 rounded-xl p-4 border border-emerald-500/40 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 font-arabic">
                <span>⚡</span>
                <span>{language === 'ur' ? 'آج کا عملی اقدام:' : 'Measurable Action for Today:'}</span>
              </div>
              <p className="text-xs sm:text-sm text-white font-bold leading-relaxed font-arabic">
                {language === 'ur' ? journeyData.actStep.actionUrdu : journeyData.actStep.actionEn}
              </p>
            </div>

            {/* Interactive Checkbox */}
            <button
              type="button"
              id="journey-act-checkbox-btn"
              onClick={() => setActionDone(!actionDone)}
              className={`w-full p-4 rounded-xl border flex items-center gap-3 transition-all font-arabic ${
                actionDone
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                  : 'bg-white/5 border-white/15 text-slate-300 hover:bg-white/10'
              }`}
            >
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center border font-bold ${
                actionDone ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'border-white/30'
              }`}>
                {actionDone && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <span className="text-xs sm:text-sm font-bold text-start">
                {language === 'ur' 
                  ? 'میں نے یہ عملی مشن مکمل کر لیا ہے / شروع کر دیا ہے'
                  : 'I have undertaken / completed this real-life mission'}
              </span>
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setCurrentStep('practice')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs sm:text-sm font-bold font-arabic flex items-center gap-1.5"
            >
              <BackArrowIcon className="w-4 h-4" />
              <span>{language === 'ur' ? 'پچھلا قدم' : 'Previous'}</span>
            </button>

            <button
              id="journey-step-3-next-btn"
              onClick={() => setCurrentStep('reflect')}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm font-arabic shadow-md flex items-center gap-2 hover:scale-[1.02] transition"
            >
              <span>{language === 'ur' ? 'اگلا قدم: غور کریں' : 'Next Step: Reflect'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STEP 4: غور کریں (REFLECT - QURAN / HADITH & SHORT REFLECTION) */}
      {/* ------------------------------------------------------------- */}
      {currentStep === 'reflect' && (
        <div className="relative z-10 mt-4 space-y-4 animate-fade-in">
          <div className="bg-slate-950/70 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-emerald-500/30 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-amber-300 font-bold font-arabic px-2.5 py-1 rounded-lg bg-amber-400/15 border border-amber-400/30">
                {language === 'ur' ? 'قدم ۴: غور کریں' : 'Step 4: Reflect'} ({journeyData.reflectStep.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'})
              </span>
              <span className="text-xs text-emerald-300 font-arabic">
                {language === 'ur' ? journeyData.reflectStep.themeUrdu : journeyData.reflectStep.themeEn}
              </span>
            </div>

            {/* Authentic Quran / Hadith Reference Box */}
            <div className="bg-teal-950/60 rounded-xl p-4 border border-teal-500/40 space-y-2.5 text-xs sm:text-sm font-arabic">
              <div className="flex items-center gap-2 text-teal-300 font-bold">
                <BookOpen className="w-4 h-4 text-teal-400" />
                <span>{language === 'ur' ? 'مستند رہنمائی و سبق:' : 'Verified Guidance & Lesson:'}</span>
              </div>

              {journeyData.reflectStep.hadithUrdu && (
                <div className="bg-slate-950/50 p-3 rounded-lg border border-teal-500/20">
                  <p className="text-slate-200 italic leading-relaxed">
                    <span className="text-amber-300 font-bold not-italic">📜 حدیث نبوی ﷺ: </span>
                    "{language === 'ur' ? journeyData.reflectStep.hadithUrdu : journeyData.reflectStep.hadithEn}"
                  </p>
                  <span className="text-[11px] text-teal-300 font-semibold block mt-1">
                    [{journeyData.reflectStep.hadithRef}]
                  </span>
                </div>
              )}

              {journeyData.reflectStep.quranUrdu && (
                <div className="bg-slate-950/50 p-3 rounded-lg border border-emerald-500/20">
                  <p className="text-slate-200 italic leading-relaxed">
                    <span className="text-emerald-300 font-bold not-italic">📖 قرآن مجید: </span>
                    "{language === 'ur' ? journeyData.reflectStep.quranUrdu : journeyData.reflectStep.quranEn}"
                  </p>
                  <span className="text-[11px] text-emerald-300 font-semibold block mt-1">
                    [{journeyData.reflectStep.quranRef}]
                  </span>
                </div>
              )}

              <p className="text-slate-300 text-xs leading-relaxed">
                💡 <span className="font-semibold text-white">{language === 'ur' ? 'اخلاقی نچوڑ:' : 'Moral Takeaway:'} </span>
                {language === 'ur' ? journeyData.reflectStep.moralTakeawayUrdu : journeyData.reflectStep.moralTakeawayEn}
              </p>
            </div>

            {/* Quick Emotion / Feeling Chips */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-300 font-arabic block">
                {language === 'ur' ? 'آج کے سفر سے آپ کا تاثر:' : 'Your reflection on today’s journey:'}
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {QUICK_REFLECTION_OPTIONS.map((opt, idx) => {
                  const label = language === 'ur' ? opt.ur : opt.en;
                  const isSelected = selectedQuickReflection === opt.ur;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedQuickReflection(opt.ur)}
                      className={`text-xs px-3 py-1.5 rounded-xl font-arabic transition ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                          : 'bg-white/10 text-slate-200 hover:bg-white/20'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Short Optional Reflection Text */}
            <textarea
              id="journey-reflection-input"
              value={userReflection}
              onChange={(e) => setUserReflection(e.target.value)}
              placeholder={language === 'ur' ? 'ایک مختصر جملہ لکھیں (اختیاری)...' : 'Write one brief takeaway (optional)...'}
              rows={2}
              className="w-full bg-slate-950/80 text-white rounded-xl p-3 text-xs sm:text-sm border border-white/20 focus:border-amber-400 focus:outline-hidden font-arabic"
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setCurrentStep('act')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs sm:text-sm font-bold font-arabic flex items-center gap-1.5"
            >
              <BackArrowIcon className="w-4 h-4" />
              <span>{language === 'ur' ? 'پچھلا قدم' : 'Previous'}</span>
            </button>

            <button
              id="complete-daily-journey-btn"
              onClick={handleFinishJourney}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm sm:text-base font-arabic shadow-xl flex items-center gap-2 hover:scale-[1.02] transition"
            >
              <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
              <span>{language === 'ur' ? `سفر مکمل کریں (+${journeyData.totalPoints} پوائنٹس)` : `Complete Journey (+${journeyData.totalPoints} pts)`}</span>
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* STEP 5: COMPLETED CELEBRATION SUMMARY */}
      {/* ------------------------------------------------------------- */}
      {currentStep === 'completed_summary' && (
        <div className="relative z-10 mt-5 space-y-5 animate-fade-in text-center sm:text-start">
          {/* Main Celebration Highlight */}
          <div className="bg-gradient-to-br from-emerald-900/60 to-teal-900/60 rounded-3xl p-6 sm:p-7 border-2 border-emerald-400/50 space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto sm:mx-0 shadow-xl font-black">
              <Award className="w-8 h-8 fill-slate-950" />
            </div>

            <div className="space-y-1.5">
              <h4 className="text-xl sm:text-2xl font-black text-white font-arabic">
                {language === 'ur' 
                  ? 'آج آپ نے اپنے آپ میں ایک قدم بہتری پیدا کی۔'
                  : 'Today you took one step towards improving yourself.'}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/90 font-arabic leading-relaxed">
                {language === 'ur'
                  ? 'ماشاءاللہ! آپ نے آج کا سبق سیکھا، عملی مشق کی، حقیقی مشن سرانجام دیا اور خود احتسابی کی۔ کل کا سفر آپ کی آج کی پیش رفت کے مطابق خود بخود نیا بنے گا۔'
                  : 'Masha’Allah! You completed learning, practice, action, and reflection. Tomorrow’s journey will adapt to your growth.'}
              </p>
            </div>

            {/* Accomplishments Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="bg-slate-950/60 p-3 rounded-2xl border border-white/10">
                <span className="text-[11px] text-slate-300 font-arabic block">{language === 'ur' ? 'سبق' : 'Lesson'}</span>
                <span className="text-xs font-bold text-white font-arabic truncate block">
                  {language === 'ur' ? journeyData.learnStep.lessonTitleUrdu : journeyData.learnStep.lessonTitleEn}
                </span>
              </div>

              <div className="bg-slate-950/60 p-3 rounded-2xl border border-white/10">
                <span className="text-[11px] text-slate-300 font-arabic block">{language === 'ur' ? 'عملی مشق' : 'Practice'}</span>
                <span className="text-xs font-bold text-amber-300 font-arabic truncate block">
                  {language === 'ur' ? journeyData.practiceStep.titleUrdu : journeyData.practiceStep.titleEn}
                </span>
              </div>

              <div className="bg-slate-950/60 p-3 rounded-2xl border border-white/10">
                <span className="text-[11px] text-slate-300 font-arabic block">{language === 'ur' ? 'مشن' : 'Mission'}</span>
                <span className="text-xs font-bold text-emerald-300 font-arabic truncate block">
                  {language === 'ur' ? journeyData.actStep.missionTitleUrdu : journeyData.actStep.missionTitleEn}
                </span>
              </div>

              <div className="bg-slate-950/60 p-3 rounded-2xl border border-white/10">
                <span className="text-[11px] text-slate-300 font-arabic block">{language === 'ur' ? 'پوائنٹس' : 'Points'}</span>
                <span className="text-xs font-black text-amber-400 font-arabic block">
                  +{journeyData.totalPoints} {language === 'ur' ? 'حاصل کیے' : 'earned'}
                </span>
              </div>
            </div>
          </div>

          {/* Action Links & Connected Ecosystem */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              {onOpenAITeacherWithPrompt && (
                <button
                  id="journey-discuss-ai-teacher-btn"
                  onClick={() => {
                    const prompt = language === 'ur'
                      ? `میں نے آج کا سفر مکمل کر لیا ہے جس میں "${journeyData.learnStep.lessonTitleUrdu}" سیکھا اور "${journeyData.actStep.missionTitleUrdu}" کیا۔ مجھے مزید رہنمائی دیں۔`
                      : `I completed my daily journey covering "${journeyData.learnStep.lessonTitleEn}" and mission "${journeyData.actStep.missionTitleEn}". Guide me further.`;
                    onOpenAITeacherWithPrompt(prompt);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 text-xs font-bold font-arabic flex items-center gap-1.5 transition"
                >
                  <Bot className="w-4 h-4 text-amber-400" />
                  <span>{language === 'ur' ? 'استاد سیکھو سے بات کریں' : 'Discuss with AI Mentor'}</span>
                </button>
              )}

              {onNavigateToTab && (
                <button
                  onClick={() => onNavigateToTab('skills')}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 text-xs font-bold font-arabic flex items-center gap-1.5 transition"
                >
                  <Compass className="w-4 h-4 text-emerald-300" />
                  <span>{language === 'ur' ? 'روڈ میپ اور اسکلز دیکھیں' : 'View Roadmap & Skills'}</span>
                </button>
              )}
            </div>

            {/* Restart or Change time length */}
            <button
              onClick={() => setCurrentStep('select_time')}
              className="text-xs text-emerald-200/80 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition font-arabic flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3 text-amber-300" />
              <span>{language === 'ur' ? 'دوبارہ سفر ترتیب دیں' : 'Reconfigure Journey'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Gentle Bottom Guidance */}
      <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-200/70 font-arabic">
        <span>
          {language === 'ur'
            ? '🌱 روزانہ کی چھوٹی اور مستقل کوشش بڑی کامیابی بنتی ہے۔'
            : '🌱 Small, steady daily effort builds lasting success.'}
        </span>
        <span className="hidden sm:inline">
          {language === 'ur' ? 'ایک دن، ایک سفر' : 'One day, one journey'}
        </span>
      </div>
    </div>
  );
};
