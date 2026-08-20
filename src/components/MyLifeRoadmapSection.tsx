import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Award, 
  Bot, 
  ArrowRight, 
  ArrowLeft, 
  Briefcase,
  DollarSign,
  ShieldCheck,
  Activity,
  HeartHandshake,
  Users,
  Target,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import { Language, UserProfile, Course } from '../types';
import { generateLifeRoadmap, LifeRoadmapArea, NextBestStepPriority } from '../data/lifeRoadmapData';
import { COURSES_DATA } from '../data/mockData';

interface MyLifeRoadmapSectionProps {
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacher?: (presetPrompt?: string) => void;
  onSelectCourse?: (course: Course) => void;
  onCompleteDailyTask?: () => void;
  dailyTaskCompleted?: boolean;
}

export const MyLifeRoadmapSection: React.FC<MyLifeRoadmapSectionProps> = ({
  language,
  userProfile,
  onOpenAITeacher,
  onSelectCourse,
  onCompleteDailyTask,
  dailyTaskCompleted = false,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const roadmap = React.useMemo(() => {
    return generateLifeRoadmap(userProfile);
  }, [userProfile]);

  const [stepCompleted, setStepCompleted] = useState(dailyTaskCompleted);

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return Briefcase;
      case 'DollarSign': return DollarSign;
      case 'ShieldCheck': return ShieldCheck;
      case 'Activity': return Activity;
      case 'HeartHandshake': return HeartHandshake;
      case 'Users': return Users;
      default: return Target;
    }
  };

  const getThemeStyles = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          badge: 'bg-blue-100 text-blue-800 border-blue-200',
          border: 'border-blue-200 hover:border-blue-400',
          bgGradient: 'from-blue-50/70 via-white to-white',
          bar: 'bg-blue-500',
          iconBg: 'bg-blue-100 text-blue-700'
        };
      case 'amber':
        return {
          badge: 'bg-amber-100 text-amber-800 border-amber-200',
          border: 'border-amber-200 hover:border-amber-400',
          bgGradient: 'from-amber-50/70 via-white to-white',
          bar: 'bg-amber-500',
          iconBg: 'bg-amber-100 text-amber-700'
        };
      case 'emerald':
        return {
          badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          border: 'border-emerald-200 hover:border-emerald-400',
          bgGradient: 'from-emerald-50/70 via-white to-white',
          bar: 'bg-emerald-500',
          iconBg: 'bg-emerald-100 text-emerald-700'
        };
      case 'teal':
        return {
          badge: 'bg-teal-100 text-teal-800 border-teal-200',
          border: 'border-teal-200 hover:border-teal-400',
          bgGradient: 'from-teal-50/70 via-white to-white',
          bar: 'bg-teal-500',
          iconBg: 'bg-teal-100 text-teal-700'
        };
      case 'rose':
        return {
          badge: 'bg-rose-100 text-rose-800 border-rose-200',
          border: 'border-rose-200 hover:border-rose-400',
          bgGradient: 'from-rose-50/70 via-white to-white',
          bar: 'bg-rose-500',
          iconBg: 'bg-rose-100 text-rose-700'
        };
      case 'purple':
        return {
          badge: 'bg-purple-100 text-purple-800 border-purple-200',
          border: 'border-purple-200 hover:border-purple-400',
          bgGradient: 'from-purple-50/70 via-white to-white',
          bar: 'bg-purple-500',
          iconBg: 'bg-purple-100 text-purple-700'
        };
      default:
        return {
          badge: 'bg-slate-100 text-slate-800 border-slate-200',
          border: 'border-slate-200 hover:border-slate-400',
          bgGradient: 'from-slate-50 via-white to-white',
          bar: 'bg-slate-500',
          iconBg: 'bg-slate-100 text-slate-700'
        };
    }
  };

  const handleExecuteNextStep = (step: NextBestStepPriority) => {
    if (step.actionType === 'skills' && onSelectCourse) {
      const course = COURSES_DATA[0];
      onSelectCourse(course);
    } else if (onOpenAITeacher) {
      onOpenAITeacher(isUrdu ? step.aiPromptUrdu : step.aiPromptEn);
    }
  };

  const handleMarkDone = () => {
    setStepCompleted(true);
    if (onCompleteDailyTask) {
      onCompleteDailyTask();
    }
  };

  return (
    <section 
      id="my-life-roadmap-section"
      className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-500/20 shadow-xl space-y-6 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1.5 font-arabic">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              {isUrdu ? 'میری زندگی کا روڈ میپ' : 'My Life Roadmap'}
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-arabic">
              {isUrdu ? `${roadmap.stats.streakDays} دن کا تسلسل` : `${roadmap.stats.streakDays}-Day Streak`}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-arabic">
            {isUrdu ? 'ذاتی ترقی اور متوازن زندگی کا ڈیش بورڈ' : 'Personal Life Development Dashboard'}
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed max-w-2xl">
            {isUrdu
              ? 'یہ روڈ میپ آپ کی صلاحیتوں، حلال کمائی، اخلاق، روزمرہ نظم، خاندان اور معاشرتی کردار کے ۶ اہم شعبوں کو ایک نظر میں متوازن رکھتا ہے۔'
              : 'Holistically tracking your development across Skills, Money, Character, Health, Family, and Community.'}
          </p>
        </div>

        {onOpenAITeacher && (
          <button
            id="roadmap-consult-ai-btn"
            onClick={() => onOpenAITeacher(isUrdu ? 'میری زندگی کے روڈ میپ کا جائزہ لے کر بتائیں کہ اس وقت میری سب سے اہم ضرورت کیا ہے؟' : 'Please review my Life Roadmap and guide me on my highest leverage area today.')}
            className="px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition flex items-center gap-2 shrink-0 font-arabic"
          >
            <Bot className="w-4 h-4 text-emerald-100" />
            <span>{isUrdu ? 'لائف مینٹور سے جائزہ لیں' : 'Ask Life Mentor'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* TOP SECTION: "My Next Best Step" (Show only ONE priority action at a time) */}
      <div 
        id="roadmap-next-best-step-card"
        className="relative z-10 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-emerald-950 text-white shadow-lg border border-indigo-500/30 space-y-4"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 block font-arabic">
                {isUrdu ? '🎯 میرا اگلا بہترین قدم (My Next Best Step)' : '🎯 My Next Best Step (Priority)'}
              </span>
              <span className="text-xs text-indigo-200 font-arabic">
                {isUrdu ? `شعبہ: ${roadmap.nextBestStep.areaTitleUrdu}` : `Focus: ${roadmap.nextBestStep.areaTitleEn}`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 font-bold font-arabic flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>{isUrdu ? roadmap.nextBestStep.timeLabelUrdu : roadmap.nextBestStep.timeLabelEn}</span>
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-black text-white font-arabic leading-snug">
            {isUrdu ? roadmap.nextBestStep.titleUrdu : roadmap.nextBestStep.titleEn}
          </h3>
          <p className="text-xs sm:text-sm text-indigo-100/90 font-arabic leading-relaxed">
            {isUrdu ? roadmap.nextBestStep.descriptionUrdu : roadmap.nextBestStep.descriptionEn}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
          <div className="flex items-center gap-2">
            <button
              id="roadmap-execute-step-btn"
              onClick={() => handleExecuteNextStep(roadmap.nextBestStep)}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm font-arabic shadow-md hover:scale-[1.02] active:scale-[0.98] transition flex items-center gap-2"
            >
              <span>{isUrdu ? roadmap.nextBestStep.buttonLabelUrdu : roadmap.nextBestStep.buttonLabelEn}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            {!stepCompleted ? (
              <button
                id="roadmap-mark-done-btn"
                onClick={handleMarkDone}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs font-arabic transition flex items-center gap-1.5"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isUrdu ? 'مکمل کر لیا' : 'Mark Done'}</span>
              </button>
            ) : (
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1.5 rounded-xl border border-emerald-400/30 font-arabic flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isUrdu ? 'آج مکمل ہو گیا!' : 'Done for Today!'}</span>
              </span>
            )}
          </div>

          {onOpenAITeacher && (
            <button
              onClick={() => onOpenAITeacher(isUrdu ? roadmap.nextBestStep.aiPromptUrdu : roadmap.nextBestStep.aiPromptEn)}
              className="text-xs text-amber-200 hover:text-amber-100 font-bold font-arabic flex items-center gap-1 transition"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>{isUrdu ? 'اس قدم پر رہنمائی لیں' : 'Get Mentor Guidance'}</span>
            </button>
          )}
        </div>
      </div>

      {/* 6 DEVELOPMENT AREAS DASHBOARD GRID */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
              {isUrdu ? 'زندگی کے ۶ بنیادی شعبوں کی پیشرفت' : '6 Core Life Development Areas'}
            </h3>
            <p className="text-xs text-slate-500 font-arabic">
              {isUrdu ? 'بغیر کسی دباؤ یا مقابلے کے اپنی ذاتی بہتری اور اگلے عمل کا جائزہ لیں۔' : 'Reflect on personal growth across all pillars with clarity and encouragement.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roadmap.areas.map((area: LifeRoadmapArea) => {
            const IconComponent = getAreaIcon(area.iconName);
            const theme = getThemeStyles(area.themeColor);

            return (
              <div
                key={area.id}
                id={`roadmap-area-${area.id}`}
                className={`rounded-2xl p-4 sm:p-5 border ${theme.border} bg-gradient-to-b ${theme.bgGradient} shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4`}
              >
                {/* Area Header & Icon */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-8 h-8 rounded-xl ${theme.iconBg} flex items-center justify-center font-bold shrink-0`}>
                        <IconComponent className="w-4 h-4" />
                      </span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${theme.badge} font-arabic`}>
                        {isUrdu ? area.badgeUrdu : area.badgeEn}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold text-slate-600 font-arabic">
                      {isUrdu ? area.progressLevelUrdu : area.progressLevelEn}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-black text-slate-900 font-arabic">
                    {isUrdu ? area.titleUrdu : area.titleEn}
                  </h4>

                  {/* Gentle Progress Indicator */}
                  <div className="space-y-1">
                    <div className="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${theme.bar}`}
                        style={{ width: `${area.progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* 3 Structured Items: Completed, Needs Improvement, Recommended Action */}
                <div className="space-y-2.5 text-xs font-arabic">
                  {/* 1. One thing already completed */}
                  <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200/70 space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{isUrdu ? 'مکمل شدہ پیشرفت:' : 'Completed Progress:'}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed pr-5">
                      {isUrdu ? area.completedUrdu : area.completedEn}
                    </p>
                  </div>

                  {/* 2. One area that needs improvement */}
                  <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200/70 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-700 font-bold">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{isUrdu ? 'بہتری کا شعبہ:' : 'Area to Improve:'}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed pr-5">
                      {isUrdu ? area.needsImprovementUrdu : area.needsImprovementEn}
                    </p>
                  </div>

                  {/* 3. One recommended next action */}
                  <div className="bg-emerald-950/5 p-2.5 rounded-xl border border-emerald-500/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-emerald-900 font-bold">
                        <Target className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{isUrdu ? 'تجویز کردہ اگلا قدم:' : 'Recommended Action:'}</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                        {isUrdu ? area.nextActionTimeUrdu : area.nextActionTimeEn}
                      </span>
                    </div>

                    <p className="text-slate-700 leading-relaxed font-semibold">
                      {isUrdu ? area.nextActionUrdu : area.nextActionEn}
                    </p>

                    {onOpenAITeacher && (
                      <button
                        onClick={() => onOpenAITeacher(isUrdu ? area.actionPromptUrdu : area.actionPromptEn)}
                        className="w-full py-1.5 px-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-[11px] flex items-center justify-center gap-1.5 transition shadow-2xs"
                      >
                        <Bot className="w-3 h-3 text-emerald-600" />
                        <span>{isUrdu ? 'استاد سیکھو سے اس پر رہنمائی لیں' : 'Ask Life Mentor'}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
