import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Wrench, 
  Heart, 
  Users, 
  TrendingUp, 
  Target,
  ChevronDown,
  ChevronUp,
  Layers,
  Flame,
  Globe
} from 'lucide-react';
import { Language, UserProfile, Course } from '../types';
import { generateLifeDirectionDimensions, LifeDirectionDimension } from '../data/lifeEcosystemData';

interface PersonalLifeDirectionSectionProps {
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacher?: (prompt?: string) => void;
  onSelectCourse?: (course: Course) => void;
  onNavigateToTab?: (tab: any) => void;
}

export const PersonalLifeDirectionSection: React.FC<PersonalLifeDirectionSectionProps> = ({
  language,
  userProfile,
  onOpenAITeacher,
  onSelectCourse,
  onNavigateToTab,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const dimensions = React.useMemo(() => {
    return generateLifeDirectionDimensions(userProfile);
  }, [userProfile]);

  const [selectedDimensionId, setSelectedDimensionId] = useState<string>(dimensions[0].id);
  const [showAllDimensions, setShowAllDimensions] = useState(false);

  const activeDimension = dimensions.find(d => d.id === selectedDimensionId) || dimensions[0];

  const getDimensionIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return BookOpen;
      case 'ShieldCheck': return ShieldCheck;
      case 'Wrench': return Wrench;
      case 'Heart': return Heart;
      case 'Users': return Users;
      default: return Compass;
    }
  };

  // 5 High-level Visual Progress Indicators as requested:
  // علم, کردار, Skills, عمل, خدمت
  const completedLessons = userProfile.completedLessonIds?.length || 0;
  const completedMissions = userProfile.completedMissionIds?.length || 0;
  const completedDeeds = userProfile.completedGoodDeedIds?.length || 0;
  const userSkillsCount = userProfile.currentSkills?.length || 1;

  const coreProgressMetrics = [
    { labelUrdu: 'علم و فہم', labelEn: 'Knowledge', percent: Math.min(100, 30 + completedLessons * 12), color: 'from-emerald-500 to-teal-400', icon: BookOpen },
    { labelUrdu: 'کردار و اخلاق', labelEn: 'Character', percent: Math.min(100, 45 + completedMissions * 10), color: 'from-amber-500 to-yellow-400', icon: ShieldCheck },
    { labelUrdu: 'عملی مہارتیں (Skills)', labelEn: 'Skills', percent: Math.min(100, 35 + userSkillsCount * 15), color: 'from-blue-500 to-cyan-400', icon: Wrench },
    { labelUrdu: 'روزمرہ عمل', labelEn: 'Action', percent: Math.min(100, 40 + completedMissions * 14), color: 'from-rose-500 to-pink-400', icon: Target },
    { labelUrdu: 'خدمت و اثر', labelEn: 'Impact & Service', percent: Math.min(100, 25 + completedDeeds * 18), color: 'from-indigo-500 to-violet-400', icon: Users },
  ];

  return (
    <div 
      id="personal-life-direction-section"
      className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border border-slate-200/90 space-y-6"
    >
      {/* Header: میرا سفر اور میری سمت */}
      <div className="flex items-center justify-between gap-3 flex-wrap border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black shadow-xs shrink-0">
            <Compass className="w-5 h-5 stroke-[2.5]" />
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic tracking-tight leading-tight">
              {isUrdu ? 'میرا سفر اور میری پیش رفت' : 'My Multi-Dimensional Journey'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-arabic mt-0.5">
              {isUrdu 
                ? 'علم، کردار، ہنر، عمل اور خدمت کے تمام شعبوں میں مسلسل ترقی' 
                : 'Holistic growth across knowledge, character, skills, action, and service'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-arabic">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>{isUrdu ? 'ذاتی زندگی کا کمپاس' : 'Life Direction Compass'}</span>
        </div>
      </div>

      {/* 1. Journey Roadmap Summary Box: Where I started -> Where I am -> Next Destination */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-2xl p-4 sm:p-5 relative overflow-hidden space-y-3.5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm font-arabic">
          {/* Starting Point */}
          <div className="bg-white/10 rounded-xl p-3 border border-white/10 space-y-1">
            <span className="text-xs text-amber-300 font-bold block">
              {isUrdu ? '📍 میں کہاں سے شروع ہوا؟' : '📍 Starting Point:'}
            </span>
            <p className="text-white/95 font-medium leading-relaxed">
              {isUrdu ? 'سیکھنے کا شوق، اسمارٹ فون اور بنیادی رہنمائی کی تلاش۔' : 'Curiosity to learn and basic digital skills.'}
            </p>
          </div>

          {/* Current Position */}
          <div className="bg-emerald-500/20 rounded-xl p-3 border border-emerald-400/30 space-y-1">
            <span className="text-xs text-emerald-300 font-bold block">
              {isUrdu ? '🧭 میں اس وقت کہاں ہوں؟' : '🧭 Current State:'}
            </span>
            <p className="text-white font-medium leading-relaxed">
              {isUrdu 
                ? `${completedLessons} اسباق مکمل، ${completedMissions} عملی اقدامات اور روزمرہ تربیت جاری۔`
                : `${completedLessons} lessons & ${completedMissions} actions completed.`}
            </p>
          </div>

          {/* Next Destination */}
          <div className="bg-amber-400/20 rounded-xl p-3 border border-amber-400/40 space-y-1">
            <span className="text-xs text-amber-300 font-bold block">
              {isUrdu ? '🎯 میری اگلی منزل کیا ہے؟' : '🎯 Next Destination:'}
            </span>
            <p className="text-amber-100 font-medium leading-relaxed">
              {isUrdu ? 'اسکل پر مکمل مہارت، خود انحصاری اور خاندان و معاشرے کے لیے نفع بخش بننا۔' : 'Skill mastery, self-reliance, and family/community uplift.'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Visual Multi-dimensional Growth Bars (علم, کردار, Skills, عمل, خدمت) */}
      <div className="space-y-3 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-slate-800 font-arabic">
            {isUrdu ? 'شعبہ جات میں میری موجودہ پیش رفت:' : 'Multi-Dimensional Progress:'}
          </span>
          <span className="text-xs text-slate-500 font-arabic">
            {isUrdu ? 'صرف الفاظ نہیں، روزمرہ عمل' : 'Action-driven metrics'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {coreProgressMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-3 border border-slate-200 space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold font-arabic text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{isUrdu ? metric.labelUrdu : metric.labelEn}</span>
                  </span>
                  <span className="text-emerald-800 font-mono font-black">{metric.percent}%</span>
                </div>

                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${metric.color} transition-all duration-700`}
                    style={{ width: `${metric.percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Dimension Selector Chips & Active Deep-Dive Card */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs sm:text-sm font-bold text-slate-700 font-arabic">
            {isUrdu ? 'تفصیلی رہنمائی کے لیے شعبہ منتخب کریں:' : 'Select an area for detailed guidance:'}
          </span>
        </div>

        {/* Dimension Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {dimensions.map((dim) => {
            const isSelected = selectedDimensionId === dim.id;
            const Icon = getDimensionIcon(dim.icon);

            return (
              <button
                key={dim.id}
                id={`life-direction-tab-${dim.id}`}
                onClick={() => setSelectedDimensionId(dim.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic transition-all flex items-center gap-2 shrink-0 border ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-md scale-102'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{isUrdu ? dim.titleUrdu : dim.titleEn}</span>
                <span className={`text-xs px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {dim.progressScore}%
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Dimension Details Card */}
        {activeDimension && (
          <div className="bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 rounded-2xl p-5 border-2 border-emerald-500/30 space-y-4 shadow-sm">
            <div className="flex items-center justify-between gap-3 flex-wrap border-b border-emerald-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold shadow-2xs">
                  {React.createElement(getDimensionIcon(activeDimension.icon), { className: 'w-4 h-4' })}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
                    {isUrdu ? activeDimension.titleUrdu : activeDimension.titleEn}
                  </h3>
                  <span className="text-xs text-emerald-800 font-bold font-arabic">
                    {isUrdu ? `موجودہ درجہ: ${activeDimension.currentLevelUrdu}` : `Current Level: ${activeDimension.currentLevelEn}`}
                  </span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold font-arabic border border-emerald-200">
                {activeDimension.progressScore}% {isUrdu ? 'مضبوطی' : 'Strength'}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-700 font-arabic leading-relaxed">
              {isUrdu ? activeDimension.summaryUrdu : activeDimension.summaryEn}
            </p>

            {/* Next Best Action in this dimension */}
            <div className="bg-white rounded-xl p-3.5 border border-emerald-200 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-800 text-xs sm:text-sm font-bold font-arabic">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{isUrdu ? '🎯 اس شعبے میں آج کا اگلا قدم:' : 'Next Step in this Area:'}</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-900 font-arabic">
                {isUrdu ? activeDimension.nextStepUrdu : activeDimension.nextStepEn}
              </p>
            </div>

            {/* Key Action Points */}
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-arabic">
              <span className="font-bold text-slate-900 block">
                {isUrdu ? 'مستقل عمل کے رہنما اصول:' : 'Key Principles for Growth:'}
              </span>
              <ul className="space-y-1 pr-4 list-disc">
                {(isUrdu ? activeDimension.keyActionsUrdu : activeDimension.keyActionsEn).map((actionText, i) => (
                  <li key={i} className="leading-relaxed">{actionText}</li>
                ))}
              </ul>
            </div>

            {/* Dunya & Akhirah Balance Note */}
            <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 flex items-start gap-2.5 text-xs sm:text-sm text-amber-950 font-arabic">
              <span className="text-base shrink-0">⚖️</span>
              <div>
                <strong className="block mb-0.5">{isUrdu ? 'دنیا اور آخرت کا توازن:' : 'Worldly & Eternal Harmony:'}</strong>
                <span>{isUrdu ? activeDimension.dunyaAkhirahBalanceUrdu : activeDimension.dunyaAkhirahBalanceEn}</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-emerald-100 flex-wrap">
              {onOpenAITeacher && (
                <button
                  onClick={() => onOpenAITeacher(isUrdu ? `مجھے ${activeDimension.titleUrdu} کو بہتر بنانے کے لیے عملی اور آسان گائیڈنس دیں۔` : `Guide me on improving in ${activeDimension.titleEn}.`)}
                  className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm font-arabic shadow-xs transition flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{isUrdu ? 'اس پر AI رہنما سے رہنمائی لیں' : 'Ask AI Mentor'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              )}

              {onNavigateToTab && (
                <button
                  onClick={() => onNavigateToTab('journey')}
                  className="text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-900 font-arabic underline"
                >
                  {isUrdu ? 'میرا مکمل لائف روڈ میپ دیکھیں' : 'View Full Roadmap'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
