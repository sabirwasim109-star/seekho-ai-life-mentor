import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Award, 
  BookOpen, 
  Wrench, 
  Bot, 
  Heart, 
  Users, 
  Globe, 
  Play, 
  ArrowRight, 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp,
  FileCheck,
  Flame,
  CheckCircle,
  Circle,
  HelpCircle,
  Layers,
  Calendar,
  Share2
} from 'lucide-react';
import { Course, Language, RecommendedSkill, UserProfile, DailyPlanDay, RoadmapStep } from '../types';
import { COURSES_DATA, UI_TRANSLATIONS } from '../data/mockData';
import { generatePersonalizedRecommendations } from '../data/assessmentData';
import { MyActionPlanSection } from './MyActionPlanSection';
import { MyLifeRoadmapSection } from './MyLifeRoadmapSection';

interface PersonalRoadmapViewProps {
  language: Language;
  userProfile: UserProfile;
  onSelectCourse: (course: Course) => void;
  onOpenAITeacherWithPrompt: (prompt?: string) => void;
  onRetakeAssessment: () => void;
  onCompleteDailyPlanDay: (dayNumber: number, points: number) => void;
}

export const PersonalRoadmapView: React.FC<PersonalRoadmapViewProps> = ({
  language,
  userProfile,
  onSelectCourse,
  onOpenAITeacherWithPrompt,
  onRetakeAssessment,
  onCompleteDailyPlanDay,
}) => {
  const t = UI_TRANSLATIONS[language];
  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  // Active skill path resolution
  const activeSkill: RecommendedSkill = React.useMemo(() => {
    if (userProfile.assessmentData) {
      const recs = generatePersonalizedRecommendations(
        userProfile.assessmentData,
        userProfile.name
      );
      const found = recs.find((r) => r.id === userProfile.activeSkillPathId);
      if (found) return found;
      if (recs.length > 0) return recs[0];
    }
    // Fallback to default AI Mobile skill
    const defaultRecs = generatePersonalizedRecommendations({
      ageGroup: userProfile.ageGroup || '16-25',
      educationLevel: userProfile.educationLevel || 'Matric',
      currentOccupation: userProfile.role || 'طالب علم',
      currentSkills: userProfile.currentSkills || ['موبائل استعمال'],
      interests: ['AI & Technology', 'Graphic Design', 'Business'],
      dailyTime: userProfile.timePerDay || '30 منٹ',
      device: userProfile.device || 'اسمارٹ فون',
      primaryGoal: userProfile.goals || 'Skill سیکھنا',
      learningStyle: 'مرحلہ وار آسان اسباق',
      sixMonthGoal: 'ایک نئی ڈیجیٹل اسکل پر عبور',
    }, userProfile.name);
    return defaultRecs[0];
  }, [userProfile]);

  // Find linked course in catalog
  const matchingCourse = COURSES_DATA.find((c) => c.id === activeSkill.courseId) || COURSES_DATA[0];

  // Expanded step details state
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  // Active day index in daily plan (defaults to day 1 or next uncompleted)
  const completedDayIds = userProfile.completedDailyPlanDayIds || [];
  
  // Calculate completed roadmap progress percentage
  const totalDays = activeSkill.dailyPlan.length;
  const completedDaysCount = activeSkill.dailyPlan.filter((d) => 
    completedDayIds.includes(`${activeSkill.id}-day-${d.dayNumber}`) || (d.dayNumber === 1 && d.isCompleted)
  ).length;
  const progressPercent = Math.min(100, Math.round((completedDaysCount / totalDays) * 100));

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-3 sm:px-6 py-3 pb-28">
      {/* 0. Comprehensive Life Roadmap: 7 Pillars, Diagnostic, Weaknesses, Strengths, Next Step, Actions & Goals */}
      <MyLifeRoadmapSection
        language={language}
        userProfile={userProfile}
        onOpenAITeacher={onOpenAITeacherWithPrompt}
        onSelectCourse={onSelectCourse}
        onCompleteDailyTask={() => onCompleteDailyPlanDay(1, 25)}
        dailyTaskCompleted={completedDaysCount >= 1}
      />

      {/* 1. Top Header Banner: Active Learning Path Summary */}
      <div className="bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl border border-emerald-600/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 font-bold border border-emerald-400/30 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                {language === 'ur' ? 'ذاتی تعلیمی روڈ میپ' : 'Personalized Learning Roadmap'}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                {language === 'ur' ? activeSkill.badgeUrdu : activeSkill.badgeEn}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {language === 'ur' ? activeSkill.titleUrdu : activeSkill.titleEn}
            </h1>

            <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed font-arabic">
              {language === 'ur' ? activeSkill.whySuitableUrdu : activeSkill.whySuitableEn}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-200 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <strong>{language === 'ur' ? 'کل وقت:' : 'Duration:'}</strong>{' '}
                {language === 'ur' ? activeSkill.estimatedTimeUrdu : activeSkill.estimatedTimeEn}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <strong>{language === 'ur' ? 'لیول:' : 'Difficulty:'}</strong>{' '}
                {language === 'ur' ? activeSkill.difficultyUrdu : activeSkill.difficulty}
              </span>
            </div>
          </div>

          {/* Quick Progress & Change Path Actions */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 w-full md:w-auto flex flex-col items-center justify-center shrink-0 space-y-3">
            <div className="text-center">
              <div className="text-2xl font-black text-emerald-300">
                {progressPercent}%
              </div>
              <div className="text-[11px] text-emerald-100 font-medium">
                {language === 'ur' ? 'روڈ میپ پیش رفت' : 'Path Progress'}
              </div>
            </div>

            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-400 to-amber-300 h-full rounded-full transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <button
              id="roadmap-retake-assessment-btn"
              onClick={onRetakeAssessment}
              className="text-xs bg-white/15 hover:bg-white/25 text-white px-3.5 py-1.5 rounded-xl border border-white/20 transition font-bold"
            >
              {language === 'ur' ? 'دوسرا ہنر یا اسیسمنٹ بدلیں' : 'Change Skill / Retake'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. "آج کا کام" (Today's Daily Plan Task) Prominent Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-md">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-900">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                {language === 'ur' ? '۷ روزہ عملی شیڈول' : '7-Day Structured Schedule'}
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                {language === 'ur' ? 'آج کا اہم کام اور مشق' : "Today's Task & Practice"}
              </h2>
            </div>
          </div>

          <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {completedDaysCount} / {totalDays} {language === 'ur' ? 'دن مکمل' : 'Days Done'}
          </div>
        </div>

        {/* 7 Days Timeline Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 mb-5">
          {activeSkill.dailyPlan.map((day) => {
            const isDone = completedDayIds.includes(`${activeSkill.id}-day-${day.dayNumber}`) || (day.dayNumber === 1 && day.isCompleted);
            
            return (
              <div
                key={day.dayNumber}
                className={`p-3 rounded-2xl border-2 text-start transition ${
                  isDone
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-950 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-black mb-1">
                  <span>{language === 'ur' ? day.dayNameUrdu : day.dayNameEn}</span>
                  {isDone ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Circle className="w-3.5 h-3.5 text-slate-300" />
                  )}
                </div>
                <div className="text-xs font-black line-clamp-1">
                  {language === 'ur' ? day.titleUrdu : day.titleEn}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  +{day.points} {language === 'ur' ? 'پوائنٹس' : 'pts'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Active Day Task Details */}
        {(() => {
          const currentActiveDay = activeSkill.dailyPlan.find((d) => 
            !completedDayIds.includes(`${activeSkill.id}-day-${d.dayNumber}`)
          ) || activeSkill.dailyPlan[0];

          const isDayDone = completedDayIds.includes(`${activeSkill.id}-day-${currentActiveDay.dayNumber}`) || (currentActiveDay.dayNumber === 1 && currentActiveDay.isCompleted);

          return (
            <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 p-5 rounded-2xl border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-700 text-white">
                    {language === 'ur' ? currentActiveDay.dayNameUrdu : currentActiveDay.dayNameEn} ({language === 'ur' ? currentActiveDay.typeUrdu : currentActiveDay.typeEn})
                  </span>
                  <span className="text-xs text-slate-600 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {currentActiveDay.durationMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {language === 'ur' ? currentActiveDay.titleUrdu : currentActiveDay.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed">
                  {language === 'ur' ? currentActiveDay.descriptionUrdu : currentActiveDay.descriptionEn}
                </p>

                {currentActiveDay.actionPromptUrdu && (
                  <div className="text-xs font-bold text-emerald-900 bg-white/80 p-2.5 rounded-xl border border-emerald-200 mt-2">
                    <strong>{language === 'ur' ? 'عملی کام:' : 'Task:'}</strong>{' '}
                    {language === 'ur' ? currentActiveDay.actionPromptUrdu : currentActiveDay.actionPromptEn}
                  </div>
                )}
              </div>

              <div className="flex sm:flex-col items-center gap-2 shrink-0 w-full sm:w-auto">
                <button
                  id={`complete-day-task-btn-${currentActiveDay.dayNumber}`}
                  type="button"
                  onClick={() => onCompleteDailyPlanDay(currentActiveDay.dayNumber, currentActiveDay.points)}
                  disabled={isDayDone}
                  className={`w-full sm:w-44 py-3 px-4 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition ${
                    isDayDone
                      ? 'bg-emerald-700 text-white cursor-default'
                      : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-amber-500/20'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {isDayDone 
                      ? (language === 'ur' ? 'ماشاءاللہ! مکمل ہوا' : 'Task Completed!') 
                      : (language === 'ur' ? 'مکمل کریں (+پوائنٹس)' : 'Mark as Done')}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCourse(matchingCourse)}
                  className="w-full sm:w-44 py-2.5 px-3 rounded-2xl bg-white hover:bg-slate-100 text-emerald-900 font-bold text-xs border border-emerald-300 flex items-center justify-center gap-1.5 transition"
                >
                  <Play className="w-3.5 h-3.5 fill-emerald-800" />
                  <span>{language === 'ur' ? 'پورا سبق کھولیں' : 'Open Full Lesson'}</span>
                </button>
              </div>
            </div>
          );
        })()}
      </div>

      {/* 2.5 "میرا عملی منصوبہ" 5-Step Action Plan Section */}
      <MyActionPlanSection
        language={language}
        userProfile={userProfile}
        onSelectCourse={onSelectCourse}
        onStepCompleted={(stepNum) => onCompleteDailyPlanDay(stepNum, stepNum * 15)}
      />

      {/* 3. 6-Step Visual Roadmap Progression */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-md">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-900">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                {language === 'ur' ? '۵ مراحل پر مشتمل عملی خاکہ' : '5-Stage Practical Sequence'}
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                {language === 'ur' ? 'آپ کا مکمل عملی روڈ میپ' : 'Your Step-by-Step Learning Path'}
              </h2>
            </div>
          </div>
        </div>

        {/* Visual Step Cards */}
        <div className="space-y-3">
          {activeSkill.roadmapSteps.map((step) => {
            const isExpanded = expandedStep === step.stepNumber;
            const isDone = step.stepNumber === 1 && completedDaysCount >= 1;

            return (
              <div
                key={step.stepNumber}
                className={`rounded-2xl border-2 transition-all overflow-hidden ${
                  isExpanded 
                    ? 'border-emerald-600 bg-emerald-50/30 shadow-xs' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => setExpandedStep(isExpanded ? null : step.stepNumber)}
                  className="p-4 flex items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : isExpanded
                        ? 'bg-emerald-700 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {step.stepNumber}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-black text-slate-900">
                          {language === 'ur' ? step.titleUrdu : step.titleEn}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {language === 'ur' ? step.durationUrdu : step.durationEn}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">
                        {language === 'ur' ? step.subtitleUrdu : step.subtitleEn}
                      </p>
                    </div>
                  </div>

                  <button className="p-1 rounded-lg text-slate-400 hover:text-slate-600">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Expanded Step Details */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-emerald-100/80 bg-white/70 space-y-3">
                    <div>
                      <div className="text-xs font-bold text-slate-700 mb-1.5">
                        {language === 'ur' ? 'اہم عملی اقدامات:' : 'Key Actions:'}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {(language === 'ur' ? step.keyActionsUrdu : step.keyActionsEn).map((act, aIdx) => (
                          <div key={aIdx} className="bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-950 flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center shrink-0">
                              {aIdx + 1}
                            </span>
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-center justify-between gap-3">
                      <div>
                        <strong>{language === 'ur' ? 'حتمی نتیجہ / ثبوت:' : 'Deliverable:'}</strong>{' '}
                        {language === 'ur' ? step.deliverableUrdu : step.deliverableEn}
                      </div>

                      <button
                        onClick={() => onSelectCourse(matchingCourse)}
                        className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-xs shrink-0 flex items-center gap-1"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        <span>{language === 'ur' ? 'شروع کریں' : 'Start'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Real-Life Purpose & 4-Tier Community Impact */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-950 text-white rounded-3xl p-5 sm:p-7 shadow-xl border border-emerald-500/20">
        <div className="flex items-center gap-2.5 mb-2">
          <Heart className="w-5 h-5 text-rose-400" />
          <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
            {language === 'ur' ? 'علم کا حقیقی مقصد اور برکت' : 'Real-Life Purpose & Contribution'}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white mb-4">
          {language === 'ur' ? 'یہ ہنر کس طرح آپ، آپ کے گھر اور دنیا کو بدلے گا؟' : 'How this skill empowers you, your family & the world'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Tier 1: For You */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm">
              <span className="w-6 h-6 rounded-lg bg-amber-400/20 flex items-center justify-center text-xs">👤</span>
              <span>{language === 'ur' ? '۱. یہ Skill آپ کے لیے کیسے فائدہ مند ہے؟' : '1. For Your Personal Growth & Income'}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-arabic">
              {language === 'ur' ? activeSkill.realLifePurpose.forSelfUrdu : activeSkill.realLifePurpose.forSelfEn}
            </p>
          </div>

          {/* Tier 2: For Family */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs sm:text-sm">
              <span className="w-6 h-6 rounded-lg bg-emerald-400/20 flex items-center justify-center text-xs">👨‍👩‍👧‍👦</span>
              <span>{language === 'ur' ? '۲. یہ Skill آپ کے خاندان کے لیے کیسے فائدہ مند ہو سکتی ہے؟' : '2. For Your Family & Household'}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-arabic">
              {language === 'ur' ? activeSkill.realLifePurpose.forFamilyUrdu : activeSkill.realLifePurpose.forFamilyEn}
            </p>
          </div>

          {/* Tier 3: For Area / Community */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs sm:text-sm">
              <span className="w-6 h-6 rounded-lg bg-cyan-400/20 flex items-center justify-center text-xs">🏘️</span>
              <span>{language === 'ur' ? '۳. آپ اپنے علاقے کے لیے اس Skill سے کیا کر سکتے ہیں؟' : '3. For Your Village & Community'}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-arabic">
              {language === 'ur' ? activeSkill.realLifePurpose.forCommunityUrdu : activeSkill.realLifePurpose.forCommunityEn}
            </p>
          </div>

          {/* Tier 4: For World */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 space-y-1.5">
            <div className="flex items-center gap-2 text-rose-300 font-bold text-xs sm:text-sm">
              <span className="w-6 h-6 rounded-lg bg-rose-400/20 flex items-center justify-center text-xs">🌍</span>
              <span>{language === 'ur' ? '۴. آپ دنیا کے لیے کیا contribution دے سکتے ہیں؟' : '4. For Global Impact & Ethics'}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-arabic">
              {language === 'ur' ? activeSkill.realLifePurpose.forWorldUrdu : activeSkill.realLifePurpose.forWorldEn}
            </p>
          </div>
        </div>
      </div>

      {/* 5. Integrated AI Teacher Interaction Box */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-3xl p-5 sm:p-6 shadow-lg border border-amber-300/40">
        <div className="flex items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner">
              <Bot className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black">
                {language === 'ur' ? 'اپنے AI استاد سے رہنمائی لیں' : 'Ask AI Teacher for Custom Advice'}
              </h3>
              <p className="text-xs sm:text-sm text-amber-100">
                {language === 'ur' ? 'اپنے شیڈول، ہنر اور علاقے کے مطابق رہنمائی کے لیے کلک کریں:' : 'Instant practical guidance for this skill roadmap:'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            { 
              ur: 'یہ Skill میرے لیے کیوں مناسب ہے؟', 
              en: 'Why is this skill suitable for me?',
              promptUr: `میں نے سیکھو پر "${activeSkill.titleUrdu}" کو اپنے روڈ میپ کے طور پر منتخب کیا ہے۔ میری عمر ${userProfile.ageGroup} سال ہے اور مجھے روزانہ ${userProfile.timePerDay} ملتے ہیں۔ یہ ہنر میرے لیے کیوں سب سے بہترین ہے؟`,
              promptEn: `I selected "${activeSkill.titleEn}" as my Seekho learning path. I am ${userProfile.ageGroup} yrs old with ${userProfile.timePerDay} daily time. Why is this skill best for me?`
            },
            { 
              ur: 'میں آج سے کہاں سے شروع کروں؟', 
              en: 'Where should I start today?',
              promptUr: `میں آج سے "${activeSkill.titleUrdu}" کا پہلا مرحلہ شروع کر رہا ہوں۔ مجھے بتائیں کہ اگلے 30 منٹ میں مجھے سب سے پہلا کیا کام کرنا چاہیے؟`,
              promptEn: `I am starting Step 1 of "${activeSkill.titleEn}". What exact action should I take in my first 30 minutes today?`
            },
            { 
              ur: 'مجھے روزانہ صرف ۳۰ منٹ ملتے ہیں، میرا schedule بنائیں', 
              en: 'I have only 30 mins daily, create my schedule',
              promptUr: `میرے پاس روزانہ صرف 30 منٹ ہیں۔ براہ کرم "${activeSkill.titleUrdu}" سیکھنے کے لیے میرا ایک منظم 7 روزہ ٹائم ٹیبل بنائیں۔`,
              promptEn: `I only have 30 minutes daily. Please make an easy 7-day schedule for mastering "${activeSkill.titleEn}".`
            },
            { 
              ur: 'میں اس Skill سے اپنے علاقے کے لوگوں کی کیسے مدد کر سکتا ہوں؟', 
              en: 'How can I help my village with this skill?',
              promptUr: `میں ${userProfile.village || 'ڈوبے، برنالہ'} کا رہنے والا ہوں۔ میں "${activeSkill.titleUrdu}" کی مہارت سے اپنے گاؤں کے لوگوں کی عملی خدمت کیسے کر سکتا ہوں؟`,
              promptEn: `I live in ${userProfile.village || 'Dobay, Barnala'}. How can I use "${activeSkill.titleEn}" to solve real problems for my local community?`
            },
          ].map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onOpenAITeacherWithPrompt(language === 'ur' ? item.promptUr : item.promptEn)}
              className="p-3 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-start text-xs font-bold transition flex items-center justify-between gap-2 shadow-2xs"
            >
              <span>{language === 'ur' ? item.ur : item.en}</span>
              <ArrowIcon className="w-4 h-4 shrink-0 opacity-90" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
