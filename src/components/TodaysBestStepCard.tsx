import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Award,
  Bot,
  TrendingUp,
  AlertCircle,
  HelpCircle,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
  Target,
  Compass,
  Layers
} from 'lucide-react';
import { Language, UserProfile, Course, MentorPriorityAction } from '../types';
import { generateAdaptiveMentorInsight } from '../utils/adaptiveMentorEngine';
import { COURSES_DATA } from '../data/mockData';

interface TodaysBestStepCardProps {
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacher: (prompt?: string) => void;
  onSelectCourse?: (course: Course) => void;
  onCompleteDailyTask?: () => void;
  dailyTaskCompleted?: boolean;
}

export const TodaysBestStepCard: React.FC<TodaysBestStepCardProps> = ({
  language,
  userProfile,
  onOpenAITeacher,
  onSelectCourse,
  onCompleteDailyTask,
  dailyTaskCompleted = false,
}) => {
  const isUrdu = language === 'ur';
  const [showFullInsights, setShowFullInsights] = useState(false);
  const [isCompletedLocally, setIsCompletedLocally] = useState(dailyTaskCompleted);

  // Generate real-time adaptive mentor insights based on learner's 14 dimensions
  const mentor = generateAdaptiveMentorInsight(userProfile, language);
  const nextStep = mentor.highestPriorityNextStep;
  const isRevision = nextStep.difficultyState === 'revision_simplified';
  const isAdvanced = nextStep.difficultyState === 'advanced_challenge';

  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const handleStartStep = (actionStep: MentorPriorityAction = nextStep) => {
    if (actionStep.targetCourseId && onSelectCourse) {
      const course = COURSES_DATA.find((c) => c.id === actionStep.targetCourseId);
      if (course) {
        onSelectCourse(course);
        return;
      }
    }
    const prompt = isUrdu
      ? `استاد سیکھو! میں اپنے اگلے قدم "${actionStep.titleUrdu}" پر کام شروع کر رہا ہوں۔ براہ کرم مجھے بالکل واضح اور عملی رہنمائی دیں۔`
      : `Teacher Seekho! I am starting my next step "${actionStep.titleEn}". Please guide me through it.`;
    onOpenAITeacher(prompt);
  };

  const handleMarkDone = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCompletedLocally(true);
    if (onCompleteDailyTask) {
      onCompleteDailyTask();
    }
  };

  return (
    <div
      id="todays-best-step-card"
      className={`rounded-3xl p-5 sm:p-7 shadow-lg border-2 transition-all relative overflow-hidden ${
        isRevision
          ? 'bg-gradient-to-br from-amber-500/10 via-white to-orange-500/5 dark:from-amber-950/40 dark:via-slate-900 dark:to-orange-950/30 border-amber-400/60 dark:border-amber-500/40'
          : isAdvanced
          ? 'bg-gradient-to-br from-indigo-500/10 via-white to-purple-500/5 dark:from-indigo-950/40 dark:via-slate-900 dark:to-purple-950/30 border-indigo-400/60 dark:border-indigo-500/40'
          : 'bg-gradient-to-br from-emerald-500/10 via-white to-teal-500/5 dark:from-emerald-950/40 dark:via-slate-900 dark:to-teal-950/30 border-emerald-400/60 dark:border-emerald-500/40'
      }`}
    >
      {/* Background Accent Glow */}
      <div
        className={`absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl pointer-events-none ${
          isRevision ? 'bg-amber-400/15' : isAdvanced ? 'bg-indigo-400/15' : 'bg-emerald-400/15'
        }`}
      />

      {/* 1. Header Bar: Priority Badge & Teaching Style Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 relative z-10">
        <div className="flex items-center gap-2.5">
          <span
            className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-xs ${
              isRevision
                ? 'bg-amber-500'
                : isAdvanced
                ? 'bg-indigo-600'
                : 'bg-emerald-600'
            }`}
          >
            <Compass className="w-5 h-5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-arabic">
                {isUrdu ? 'آپ کے لیے ابھی سب سے اہم قدم' : 'Your Most Important Step Right Now'}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 dark:bg-white/10 dark:text-amber-200 font-arabic">
                {isUrdu ? 'ذاتی رہنمائی' : 'Personalized'}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-arabic">
              {isUrdu
                ? `آپ کی موجودہ کارکردگی، ${mentor.teachingStyle.dailyTimeQuotaUrdu} اور لائف روڈ میپ کے مطابق`
                : `Matched to your recent performance, ${mentor.teachingStyle.dailyTimeQuotaEn}, and roadmap`}
            </p>
          </div>
        </div>

        {/* Dynamic Difficulty Badge */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border shadow-2xs font-arabic flex items-center gap-1 ${
              isRevision
                ? 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/80 dark:text-amber-200 dark:border-amber-700'
                : isAdvanced
                ? 'bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-950/80 dark:text-indigo-200 dark:border-indigo-700'
                : 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-200 dark:border-emerald-700'
            }`}
          >
            {isRevision ? (
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            ) : isAdvanced ? (
              <Zap className="w-3.5 h-3.5 text-indigo-600" />
            ) : (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            )}
            <span>
              {isUrdu
                ? mentor.teachingStyle.difficultyBadgeUrdu
                : mentor.teachingStyle.difficultyBadgeEn}
            </span>
          </span>
        </div>
      </div>

      {/* 2. Main Priority Step Banner */}
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs relative z-10 mb-4 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-lg font-arabic">
                {isUrdu ? nextStep.categoryUrdu : nextStep.categoryEn}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-arabic">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {nextStep.estimatedMinutes} {isUrdu ? 'منٹ' : 'mins'}
              </span>
              <span className="text-xs text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1 font-arabic">
                <Award className="w-3.5 h-3.5" />
                +{nextStep.points} {isUrdu ? 'پوائنٹس' : 'pts'}
              </span>
              <span className="text-[11px] text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-md font-arabic font-semibold">
                🔄 {isUrdu ? mentor.learningLoopStageUrdu : mentor.learningLoopStageEn}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-arabic leading-snug">
              {isUrdu ? nextStep.titleUrdu : nextStep.titleEn}
            </h4>

            {/* Why this is recommended (Tailored 1-Sentence Reason) */}
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-arabic leading-relaxed">
              <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-0.5">
                <span>💡 {isUrdu ? 'یہ آپ کے لیے کیوں تجویز کیا گیا؟' : 'Why this is recommended for you?'}</span>
              </p>
              <p className="text-slate-600 dark:text-slate-300 pr-4">
                {isUrdu ? mentor.recommendationReasonUrdu : mentor.recommendationReasonEn}
              </p>
            </div>

            {/* Micro Action Checklist */}
            <div className="bg-emerald-50/60 dark:bg-emerald-950/20 rounded-xl p-3 border border-emerald-200/60 dark:border-emerald-800/40 flex items-start gap-2.5">
              <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white font-arabic">
                  {isUrdu ? 'آج کا عملی کام:' : "Today's Practical Task:"}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-arabic mt-0.5">
                  {isUrdu ? nextStep.practicalActionUrdu : nextStep.practicalActionEn}
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 justify-center">
            <button
              id="todays-best-step-start-btn"
              onClick={() => handleStartStep(nextStep)}
              className={`px-5 py-3 rounded-xl font-black text-sm text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition flex items-center justify-center gap-2 font-arabic ${
                isRevision
                  ? 'bg-amber-600 hover:bg-amber-500'
                  : isAdvanced
                  ? 'bg-indigo-600 hover:bg-indigo-500'
                  : 'bg-emerald-600 hover:bg-emerald-500'
              }`}
            >
              <span>{isUrdu ? 'ابھی شروع کریں' : 'Start Now'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            <button
              id="todays-best-step-mentor-chat-btn"
              onClick={() => {
                const p = isUrdu
                  ? `استاد سیکھو! میں آج کے قدم "${nextStep.titleUrdu}" کے بارے میں رہنمائی لینا چاہتا ہوں۔`
                  : `Teacher Seekho! Please give me personalized advice for today's step: "${nextStep.titleEn}".`;
                onOpenAITeacher(p);
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition flex items-center justify-center gap-1.5 font-arabic border border-slate-200 dark:border-slate-700"
            >
              <Bot className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{isUrdu ? 'استاد سے مشورہ لیں' : 'Ask Mentor'}</span>
            </button>
          </div>
        </div>

        {/* Learning Loop Visual Breadcrumb */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-arabic overflow-x-auto no-scrollbar gap-2">
          <span className="font-bold text-slate-700 dark:text-slate-300 shrink-0">
            {isUrdu ? 'سیکھنے کا فطری چکر:' : 'Learning Loop:'}
          </span>
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 shrink-0">
            <span className="font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">{isUrdu ? '۱. سیکھیں' : '1. Learn'}</span>
            <span>→</span>
            <span className="font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">{isUrdu ? '۲. مشق کریں' : '2. Practice'}</span>
            <span>→</span>
            <span className="font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">{isUrdu ? '۳. مشن' : '3. Mission'}</span>
            <span>→</span>
            <span className="font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">{isUrdu ? '۴. غور و فکر' : '4. Reflection'}</span>
            <span>→</span>
            <span className="font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-bold">{isUrdu ? '۵. پیش رفت' : '5. Progress'}</span>
          </div>
        </div>
      </div>

      {/* Up to 2 Secondary Recommendations */}
      {mentor.secondaryRecommendations && mentor.secondaryRecommendations.length > 0 && (
        <div className="relative z-10 mb-4 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 font-arabic">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isUrdu ? 'دیگر مفید اختیارات (ثانوی تجاویز):' : 'Other Useful Secondary Options:'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {mentor.secondaryRecommendations.slice(0, 2).map((sec) => (
              <div
                key={sec.id}
                onClick={() => handleStartStep(sec)}
                className="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xs transition cursor-pointer flex flex-col justify-between gap-2 font-arabic"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {isUrdu ? sec.categoryUrdu : sec.categoryEn}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {sec.estimatedMinutes} {isUrdu ? 'منٹ' : 'm'}
                    </span>
                  </div>
                  <h5 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                    {isUrdu ? sec.titleUrdu : sec.titleEn}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                    {isUrdu ? sec.whyUrdu : sec.whyEn}
                  </p>
                </div>

                <div className="flex items-center justify-end text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  <span>{isUrdu ? 'دیکھیں' : 'Explore'}</span>
                  <ArrowIcon className="w-3.5 h-3.5 mr-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Expandable Full Insights Drawer */}
      <div className="relative z-10">
        <button
          id="todays-best-step-insights-toggle-btn"
          onClick={() => setShowFullInsights(!showFullInsights)}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 text-xs font-bold transition font-arabic border border-slate-200/60 dark:border-slate-700"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>
              {isUrdu
                ? 'استاد سیکھو کی مکمل 5 نکاتی رہنمائی دیکھیں'
                : 'View 5-Point Adaptive Mentor Insights'}
            </span>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>{showFullInsights ? (isUrdu ? 'چھپائیں' : 'Hide') : (isUrdu ? 'تفصیل' : 'Details')}</span>
            {showFullInsights ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        {showFullInsights && (
          <div className="mt-3 bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            {/* 1. What doing well */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl p-3.5 border border-emerald-200/60 dark:border-emerald-800/50">
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h5 className="text-xs font-extrabold text-emerald-900 dark:text-emerald-200 font-arabic">
                  {isUrdu ? '1. آپ کیا اچھا کر رہے ہیں (Doing Well):' : '1. What You Are Doing Well:'}
                </h5>
              </div>
              <p className="text-xs text-emerald-950 dark:text-emerald-100 font-arabic mb-2">
                {isUrdu ? mentor.doingWellUrdu : mentor.doingWellEn}
              </p>
              <ul className="space-y-1 text-xs text-emerald-900 dark:text-emerald-200 font-arabic list-disc list-inside">
                {(isUrdu ? mentor.doingWellKeyPointsUrdu : mentor.doingWellKeyPointsEn).map(
                  (pt, idx) => (
                    <li key={idx}>{pt}</li>
                  )
                )}
              </ul>
            </div>

            {/* 2. What needs improvement */}
            <div className="bg-amber-50/70 dark:bg-amber-950/30 rounded-xl p-3.5 border border-amber-200/60 dark:border-amber-800/50">
              <div className="flex items-center gap-2 mb-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h5 className="text-xs font-extrabold text-amber-900 dark:text-amber-200 font-arabic">
                  {isUrdu ? '2. بہتری کی گنجائش (Needs Improvement):' : '2. What Needs Improvement:'}
                </h5>
              </div>
              <p className="text-xs text-amber-950 dark:text-amber-100 font-arabic mb-2">
                {isUrdu ? mentor.needsImprovementUrdu : mentor.needsImprovementEn}
              </p>
              <ul className="space-y-1 text-xs text-amber-900 dark:text-amber-200 font-arabic list-disc list-inside">
                {(isUrdu
                  ? mentor.needsImprovementKeyPointsUrdu
                  : mentor.needsImprovementKeyPointsEn
                ).map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* 3 & 4: Today's Action & Small Challenge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Today's Practical Action */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-arabic">
                    {isUrdu ? "3. آج کا فوری عملی قدم" : "3. Today's Action"}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-md">
                    +{mentor.practicalActionToday.points} pts
                  </span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-arabic mb-2">
                  {isUrdu
                    ? mentor.practicalActionToday.descriptionUrdu
                    : mentor.practicalActionToday.descriptionEn}
                </p>
                <div className="space-y-1">
                  {(isUrdu
                    ? mentor.practicalActionToday.stepsUrdu
                    : mentor.practicalActionToday.stepsEn
                  ).map((step, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400 font-arabic">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small Challenge */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-arabic">
                    {isUrdu ? '4. آج کا چھوٹا چیلنج' : '4. Small Challenge'}
                  </span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 dark:bg-amber-950/80 px-2 py-0.5 rounded-md">
                    +{mentor.smallChallenge.points} pts
                  </span>
                </div>
                <h6 className="text-xs font-bold text-slate-900 dark:text-white font-arabic">
                  {isUrdu ? mentor.smallChallenge.titleUrdu : mentor.smallChallenge.titleEn}
                </h6>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-arabic mt-1">
                  {isUrdu ? mentor.smallChallenge.actionUrdu : mentor.smallChallenge.actionEn}
                </p>
                <span className="mt-2 inline-block text-[10px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md font-arabic">
                  🏅 {isUrdu ? mentor.smallChallenge.badgeUrdu : mentor.smallChallenge.badgeEn}
                </span>
              </div>
            </div>

            {/* 5. Verified Quran & Hadith Reference */}
            <div className="bg-gradient-to-r from-emerald-950 to-teal-950 text-white rounded-xl p-3.5 border border-emerald-500/30">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-300 font-arabic">
                  {isUrdu
                    ? '5. مستند قرآنی و حدیثی رہنمائی (Verified Guidance)'
                    : '5. Verified Quran & Prophetic Guidance'}
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="bg-white/10 rounded-lg p-2.5 border border-white/10">
                  <p className="font-arabic leading-relaxed text-emerald-100">
                    📖 "{isUrdu ? mentor.verifiedGuidance.quranTextUrdu : mentor.verifiedGuidance.quranTextEn}"
                  </p>
                  <p className="text-[10px] text-amber-300 font-mono mt-1">
                    [{mentor.verifiedGuidance.quranSurahAndAyah}]
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-2.5 border border-white/10">
                  <p className="font-arabic leading-relaxed text-emerald-100">
                    📜 "{isUrdu ? mentor.verifiedGuidance.hadithTextUrdu : mentor.verifiedGuidance.hadithTextEn}"
                  </p>
                  <p className="text-[10px] text-amber-300 font-mono mt-1">
                    [{mentor.verifiedGuidance.hadithSource}]
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
