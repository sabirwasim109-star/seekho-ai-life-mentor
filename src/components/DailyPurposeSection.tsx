import React, { useState } from 'react';
import { 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Award, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Heart, 
  Users, 
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Check,
  Zap,
  Flame
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { generateTodayPurposePlan, DailyPurposePlan } from '../data/lifeEcosystemData';

interface DailyPurposeSectionProps {
  language: Language;
  userProfile: UserProfile;
  onCompletePurposeAction?: (actionId: string, points: number, actionTitle: string) => void;
  onOpenLesson?: (courseId: string, lessonId: string) => void;
  onOpenAITeacher?: (prompt?: string) => void;
  onNavigateToTab?: (tab: any) => void;
}

export const DailyPurposeSection: React.FC<DailyPurposeSectionProps> = ({
  language,
  userProfile,
  onCompletePurposeAction,
  onOpenLesson,
  onOpenAITeacher,
  onNavigateToTab,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const purposePlan = React.useMemo(() => {
    return generateTodayPurposePlan(userProfile);
  }, [userProfile]);

  // Track completed action IDs from localStorage or state
  const [completedActionIds, setCompletedActionIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`seekho_daily_purpose_${userProfile.userId || 'guest'}_${new Date().toDateString()}`);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });

  const [expandedActionId, setExpandedActionId] = useState<string | null>(null);
  const [reflectionText, setReflectionText] = useState('');
  const [activeActionForReflection, setActiveActionForReflection] = useState<string | null>(null);

  const completedCount = purposePlan.actions.filter(a => completedActionIds[a.id]).length;
  const totalCount = purposePlan.actions.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const handleToggleAction = (actionId: string, points: number, title: string) => {
    const isNowDone = !completedActionIds[actionId];
    const updated = { ...completedActionIds, [actionId]: isNowDone };
    setCompletedActionIds(updated);

    try {
      localStorage.setItem(
        `seekho_daily_purpose_${userProfile.userId || 'guest'}_${new Date().toDateString()}`,
        JSON.stringify(updated)
      );
    } catch {
      // ignore
    }

    if (isNowDone && onCompletePurposeAction) {
      onCompletePurposeAction(actionId, points, title);
    }
  };

  const getActionIcon = (type: string) => {
    switch (type) {
      case 'learn': return BookOpen;
      case 'action': return Zap;
      case 'family': return Heart;
      case 'service': return Users;
      default: return CheckCircle2;
    }
  };

  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case 'learn': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'action': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'family': return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      case 'service': return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
      default: return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <div 
      id="daily-purpose-section"
      className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 text-white rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-emerald-500/40 relative overflow-hidden space-y-5"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between gap-3 flex-wrap border-b border-white/10 pb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-md shrink-0">
            <Target className="w-5 h-5 stroke-[2.5]" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-white font-arabic tracking-tight leading-tight">
                {isUrdu ? 'آج کا مقصد' : "Today's Purpose"}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold font-arabic">
                {isUrdu ? purposePlan.themeUrdu : purposePlan.themeEn}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/90 font-arabic mt-0.5">
              {isUrdu ? purposePlan.mottoUrdu : purposePlan.mottoEn}
            </p>
          </div>
        </div>

        {/* Progress Pill */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/15 text-xs sm:text-sm font-bold font-arabic">
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>
            {isUrdu 
              ? `${completedCount} از ${totalCount} مقاصد مکمل (${progressPercent}%)`
              : `${completedCount} of ${totalCount} done (${progressPercent}%)`}
          </span>
        </div>
      </div>

      {/* Philosophy Banner: چھوٹا قدم، مستقل عمل، بڑی تبدیلی */}
      <div className="relative z-10 bg-emerald-950/60 border border-emerald-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 backdrop-blur-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-amber-300 text-xs sm:text-sm font-bold font-arabic">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>{isUrdu ? 'مرکزی اصول:' : 'Core Philosophy:'}</span>
          </div>
          <p className="text-sm sm:text-base text-white/95 font-arabic font-medium leading-relaxed">
            {isUrdu ? purposePlan.mainFocusUrdu : purposePlan.mainFocusEn}
          </p>
        </div>

        {progressPercent === 100 && (
          <div className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs sm:text-sm font-arabic flex items-center gap-1.5 shadow-md shrink-0">
            <Award className="w-4 h-4" />
            <span>{isUrdu ? 'ماشاءاللہ! آج کا مقصد پورا ہوا' : 'All Goals Achieved Today!'}</span>
          </div>
        )}
      </div>

      {/* 4 Intelligent Daily Actions (Learn + Action + Family + Service) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {purposePlan.actions.map((act, index) => {
          const isDone = Boolean(completedActionIds[act.id]);
          const Icon = getActionIcon(act.type);
          const isExpanded = expandedActionId === act.id;

          return (
            <div
              key={act.id}
              id={`daily-purpose-action-${act.id}`}
              className={`rounded-2xl p-4 border transition-all duration-200 flex flex-col justify-between gap-3 ${
                isDone 
                  ? 'bg-emerald-950/80 border-emerald-500/50 shadow-inner' 
                  : 'bg-white/5 hover:bg-white/10 border-white/15 shadow-sm'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold font-arabic border flex items-center gap-1 ${getTypeBadgeStyle(act.type)}`}>
                    <Icon className="w-3.5 h-3.5" />
                    <span>{isUrdu ? act.typeUrdu : act.typeEn}</span>
                  </span>

                  <span className="text-xs font-bold text-amber-300/90 font-arabic flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{act.estimatedMinutes} {isUrdu ? 'منٹ' : 'mins'}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-emerald-300">+{act.points} pts</span>
                  </span>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <button
                    onClick={() => handleToggleAction(act.id, act.points, isUrdu ? act.titleUrdu : act.titleEn)}
                    className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isDone 
                        ? 'bg-amber-400 border-amber-300 text-slate-950 shadow-sm' 
                        : 'border-white/30 hover:border-amber-400 bg-white/10'
                    }`}
                    title={isUrdu ? 'مکمل نشان لگائیں' : 'Mark complete'}
                  >
                    {isDone && <Check className="w-4 h-4 stroke-[3]" />}
                  </button>

                  <div className="flex-1 min-w-0">
                    <h4 className={`text-base sm:text-[17px] font-black font-arabic leading-snug ${isDone ? 'text-emerald-200 line-through' : 'text-white'}`}>
                      {isUrdu ? act.titleUrdu : act.titleEn}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-arabic leading-relaxed mt-1">
                      {isUrdu ? act.descriptionUrdu : act.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Trigger Buttons */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs sm:text-sm font-arabic">
                <button
                  onClick={() => handleToggleAction(act.id, act.points, isUrdu ? act.titleUrdu : act.titleEn)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 ${
                    isDone 
                      ? 'bg-white/10 text-emerald-300 hover:bg-white/20' 
                      : 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-black shadow-xs'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isDone ? (isUrdu ? 'مکمل ہو گیا' : 'Completed') : (isUrdu ? 'مکمل کریں' : 'Mark as Done')}</span>
                </button>

                {act.type === 'learn' && onNavigateToTab && (
                  <button
                    onClick={() => onNavigateToTab('mylearning')}
                    className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1 underline"
                  >
                    <span>{isUrdu ? 'سبق پر جائیں' : 'Go to Lesson'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                )}

                {act.type === 'action' && onOpenAITeacher && (
                  <button
                    onClick={() => onOpenAITeacher(isUrdu ? 'مجھے آج کے اس عملی قدم کو بہترین انداز میں مکمل کرنے کی رہنمائی دیں۔' : 'Help me complete today’s practical task.')}
                    className="text-emerald-300 hover:text-emerald-200 font-bold flex items-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isUrdu ? 'AI رہنمائی' : 'AI Help'}</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
