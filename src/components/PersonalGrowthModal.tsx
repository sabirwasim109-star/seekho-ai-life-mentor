import React, { useState } from 'react';
import {
  X,
  Compass,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Wrench,
  ShieldCheck,
  MessageSquare,
  Smartphone,
  Coins,
  HeartPulse,
  Home,
  HeartHandshake,
  Target,
  Play,
  Award,
  Flame,
  Calendar,
  Layers,
  HelpCircle,
  Check,
  Bot,
  UserCheck
} from 'lucide-react';
import { 
  Language, 
  UserProfile, 
  Course, 
  GrowthAreaId, 
  DailyPlanDuration, 
  GrowthRecommendation 
} from '../types';
import { 
  calculateGrowthScores, 
  getSmartRecommendations, 
  getPersonalizedDailyPlan, 
  getWeeklyGrowthSummary,
  COMMUNITY_SERVICE_OPPORTUNITIES,
  GROWTH_AREAS_META
} from '../utils/growthEngine';
import { COURSES_DATA } from '../data/mockData';
import { ISLAMIC_LESSONS_DATA } from '../data/islamicGuidanceData';

interface PersonalGrowthModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  userProfile: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  onSelectCourse: (course: Course) => void;
  onOpenIslamicModal?: (lessonIndex?: number) => void;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
}

export const PersonalGrowthModal: React.FC<PersonalGrowthModalProps> = ({
  isOpen,
  onClose,
  language,
  userProfile,
  onUpdateProfile,
  onSelectCourse,
  onOpenIslamicModal,
  onOpenAITeacherWithPrompt,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'recommendations' | 'dimensions' | 'daily_plan' | 'weekly_card' | 'real_life'>('recommendations');
  const [selectedDuration, setSelectedDuration] = useState<DailyPlanDuration>(
    userProfile.growthDailyTimePreference || (userProfile.timePerDay?.includes('15') ? '15m' : userProfile.timePerDay?.includes('30') ? '30m' : userProfile.timePerDay?.includes('2') ? '2h+' : '30m')
  );

  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  const recommendations = getSmartRecommendations(userProfile, language);
  const growthScores = calculateGrowthScores(userProfile);
  const dailyPlanItems = getPersonalizedDailyPlan(selectedDuration, userProfile, language);
  const weeklySummary = getWeeklyGrowthSummary(userProfile, language);

  const completedGrowthTasks = userProfile.completedGrowthTaskIds || [];
  const completedCommunityActions = userProfile.completedCommunityActionIds || [];

  // Toggle Growth Task completion
  const handleToggleGrowthTask = (taskId: string, points: number = 20) => {
    const isDone = completedGrowthTasks.includes(taskId);
    let updatedTasks: string[];
    let updatedPoints = userProfile.points;

    if (isDone) {
      updatedTasks = completedGrowthTasks.filter(id => id !== taskId);
    } else {
      updatedTasks = [...completedGrowthTasks, taskId];
      updatedPoints += points;
    }

    onUpdateProfile({
      completedGrowthTaskIds: updatedTasks,
      points: updatedPoints,
      streakDays: isDone ? userProfile.streakDays : userProfile.streakDays + 1
    });
  };

  // Toggle Community Action completion
  const handleToggleCommunityAction = (actionId: string, points: number = 30) => {
    const isDone = completedCommunityActions.includes(actionId);
    let updatedActions: string[];
    let updatedPoints = userProfile.points;

    if (isDone) {
      updatedActions = completedCommunityActions.filter(id => id !== actionId);
    } else {
      updatedActions = [...completedCommunityActions, actionId];
      updatedPoints += points;
    }

    onUpdateProfile({
      completedCommunityActionIds: updatedActions,
      points: updatedPoints,
      streakDays: isDone ? userProfile.streakDays : userProfile.streakDays + 1
    });
  };

  // Change Daily Time Plan
  const handleChangeDuration = (dur: DailyPlanDuration) => {
    setSelectedDuration(dur);
    onUpdateProfile({ growthDailyTimePreference: dur });
  };

  // Execute recommendation action
  const handleExecuteRec = (rec: GrowthRecommendation) => {
    onClose();
    if (rec.targetType === 'course' && rec.targetCourseId) {
      const course = COURSES_DATA.find(c => c.id === rec.targetCourseId);
      if (course) onSelectCourse(course);
    } else if (rec.targetType === 'lesson' && rec.targetCourseId) {
      const course = COURSES_DATA.find(c => c.id === rec.targetCourseId);
      if (course) onSelectCourse(course);
    } else if (rec.targetType === 'islamic_lesson' && onOpenIslamicModal) {
      onOpenIslamicModal(rec.targetIslamicLessonIndex || 0);
    } else if (rec.targetType === 'quiz_review' && rec.targetCourseId) {
      const course = COURSES_DATA.find(c => c.id === rec.targetCourseId);
      if (course) onSelectCourse(course);
    } else if (rec.targetType === 'community_action') {
      setActiveTab('real_life');
    }
  };

  // Helper for growth icons
  const getGrowthIcon = (iconName: string, className: string = 'w-5 h-5') => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'MessageSquare': return <MessageSquare className={className} />;
      case 'Smartphone': return <Smartphone className={className} />;
      case 'Coins': return <Coins className={className} />;
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'Home': return <Home className={className} />;
      case 'HeartHandshake': return <HeartHandshake className={className} />;
      case 'Target': return <Target className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const overallAvg = Math.round(
    Object.values(growthScores).reduce((acc, curr) => acc + curr.score, 0) / 10
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white p-4 sm:p-6 flex items-center justify-between gap-4 shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-md shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black font-arabic tracking-tight">
                  {language === 'ur' ? 'ذاتی ترقی کا ذہین نظام' : 'Personal Growth Engine'}
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-semibold border border-emerald-400/30">
                  {overallAvg}% {language === 'ur' ? 'مجموعی پیش رفت' : 'Overall'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 font-arabic mt-0.5">
                {language === 'ur'
                  ? 'آپ کے سیکھنے کے سفر، اخلاق، عملی ہنر اور دستیاب وقت کے مطابق مرحلہ وار سمارٹ رہنمائی'
                  : 'Holistic adaptive guidance connecting knowledge, practical skills, character, and daily life.'}
              </p>
            </div>
          </div>

          <button
            id="close-personal-growth-modal-btn"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition shrink-0 relative z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Segmented Switcher Tabs */}
        <div className="bg-slate-100 dark:bg-slate-800/80 p-2 border-b border-slate-200 dark:border-slate-700/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
          <button
            onClick={() => setActiveTab('recommendations')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'recommendations'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-arabic">{language === 'ur' ? 'اگلا قدم و تجاویز (Top 3)' : 'Top 3 Actions'}</span>
          </button>

          <button
            onClick={() => setActiveTab('dimensions')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'dimensions'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="font-arabic">{language === 'ur' ? '۱۰ شعبہ ہائے ترقی' : '10 Growth Areas'}</span>
          </button>

          <button
            onClick={() => setActiveTab('daily_plan')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'daily_plan'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span className="font-arabic">{language === 'ur' ? 'روزانہ کا لائحہ عمل' : 'Daily Plan'}</span>
          </button>

          <button
            onClick={() => setActiveTab('weekly_card')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'weekly_card'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span className="font-arabic">{language === 'ur' ? 'ہفتہ وار جائزہ' : 'Weekly Journey'}</span>
          </button>

          <button
            onClick={() => setActiveTab('real_life')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'real_life'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span className="font-arabic">{language === 'ur' ? 'حقیقی زندگی و خدمت' : 'Real-Life & Service'}</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">

          {/* TAB 1: TOP 3 RECOMMENDATIONS */}
          {activeTab === 'recommendations' && (
            <div className="space-y-5">
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm font-arabic text-emerald-950 dark:text-emerald-100 leading-relaxed">
                  <strong>{language === 'ur' ? 'ذہین نظام کا اصول: ' : 'Growth Principle: '}</strong>
                  {language === 'ur'
                    ? 'یہ تجاویز آپ کے پروفائل، مکمل شدہ کورسز، کوئز کارکردگی، اسلامی کردار سازی اور دستیاب وقت کو جوڑ کر منتخب کی گئی ہیں تاکہ ہر قدم آسان اور کارآمد رہے۔'
                    : 'These top actions connect your profile, course progress, quiz confidence, Islamic character practice, and time availability.'}
                </div>
              </div>

              <div className="space-y-4">
                {recommendations.map((rec, idx) => (
                  <div
                    key={rec.id}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap text-xs">
                        <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                          {idx + 1}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-bold font-arabic">
                          {language === 'ur' ? rec.growthAreaUrdu : rec.growthAreaEn}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium font-arabic flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {rec.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-300 font-semibold font-arabic text-[11px]">
                          {language === 'ur' ? rec.difficultyUrdu : rec.difficulty}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-arabic">
                        {language === 'ur' ? rec.titleUrdu : rec.titleEn}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-arabic leading-relaxed">
                        <span className="font-bold text-amber-600 dark:text-amber-400">
                          {language === 'ur' ? '💡 وجہ انتخاب: ' : '💡 Why: '}
                        </span>
                        {language === 'ur' ? rec.whyUrdu : rec.whyEn}
                      </p>

                      <div className="p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 font-arabic flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>
                          <strong>{language === 'ur' ? 'متوقع عملی فائدہ: ' : 'Expected Benefit: '}</strong>
                          {language === 'ur' ? rec.practicalBenefitUrdu : rec.practicalBenefitEn}
                        </span>
                      </div>

                      {rec.encouragementNoteUrdu && (
                        <p className="text-xs text-emerald-700 dark:text-emerald-400 font-arabic italic">
                          {language === 'ur' ? rec.encouragementNoteUrdu : rec.encouragementNoteEn}
                        </p>
                      )}
                    </div>

                    <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0">
                      <button
                        onClick={() => handleExecuteRec(rec)}
                        className="w-full md:w-auto px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 font-arabic"
                      >
                        <Play className="w-4 h-4 fill-slate-950" />
                        <span>{language === 'ur' ? rec.targetActionLabelUrdu || 'اب شروع کریں' : rec.targetActionLabelEn || 'Start Now'}</span>
                        <ArrowIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ask AI Teacher Quick Guidance CTA */}
              <div className="p-4 bg-teal-50 dark:bg-teal-950/40 rounded-2xl border border-teal-200 dark:border-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-start">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-teal-950 dark:text-teal-100 font-arabic">
                      {language === 'ur' ? 'استاد سیکھو سے ذاتی رہنمائی لیں' : 'Ask Ustad Seekho'}
                    </h4>
                    <p className="text-xs text-teal-800 dark:text-teal-200/90 font-arabic">
                      {language === 'ur' ? 'استاد سے پوچھیں: "مجھے اب کیا سیکھنا چاہیے؟" یا "میں کہاں پریکٹس کروں؟"' : 'Ask: "What should I learn next?" for customized mentoring.'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    if (onOpenAITeacherWithPrompt) {
                      onOpenAITeacherWithPrompt(language === 'ur' ? 'مجھے اب کیا سیکھنا چاہیے؟' : 'What should I learn next?');
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs font-arabic shrink-0 transition"
                >
                  {language === 'ur' ? 'استاد سے رہنمائی لیں' : 'Ask AI Teacher'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: 10 GROWTH DIMENSIONS OVERVIEW */}
          {activeTab === 'dimensions' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white font-arabic">
                    {language === 'ur' ? '۱۰ بنیادی شعبہ ہائے ترقی کا توازن' : '10 Growth Dimensions Model'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-arabic mt-0.5">
                    {language === 'ur'
                      ? 'یہ کوئی طبی یا نفسیاتی تشخیص نہیں بلکہ زندگی سنوارنے کا متوازن و جامع خاکہ ہے۔'
                      : 'A practical, non-diagnostic holistic framework to nurture well-rounded personal development.'}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 px-3 py-1.5 rounded-xl text-xs font-bold font-arabic">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{overallAvg}% {language === 'ur' ? 'مجموعی اوسط' : 'Avg Score'}</span>
                </div>
              </div>

              {/* 10 Growth Areas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(Object.keys(GROWTH_AREAS_META) as GrowthAreaId[]).map((areaKey) => {
                  const item = growthScores[areaKey];
                  return (
                    <div
                      key={areaKey}
                      className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md transition space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                            {getGrowthIcon(item.iconName)}
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-arabic">
                              {language === 'ur' ? item.titleUrdu : item.titleEn}
                            </h4>
                            <span className="text-[11px] text-emerald-700 dark:text-emerald-300 font-bold font-arabic">
                              {language === 'ur' ? item.levelUrdu : item.levelEn}
                            </span>
                          </div>
                        </div>

                        <span className="text-sm font-black text-slate-900 dark:text-white">
                          {item.score}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-500"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 font-arabic line-clamp-2">
                        {language === 'ur' ? item.descriptionUrdu : item.descriptionEn}
                      </p>

                      {/* Real-life Application */}
                      <div className="p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-700/50 text-[11px] font-arabic text-slate-700 dark:text-slate-300">
                        <span className="font-bold text-amber-600 dark:text-amber-400 block mb-0.5">
                          {language === 'ur' ? '📌 حقیقی زندگی میں استعمال:' : '📌 Real-Life Application:'}
                        </span>
                        {language === 'ur' ? item.realLifeApplicationUrdu : item.realLifeApplicationEn}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: PERSONALIZED DAILY PLAN */}
          {activeTab === 'daily_plan' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white font-arabic">
                  {language === 'ur' ? 'آپ کا روزانہ کا متوازن لائحہ عمل' : 'Your Personalized Daily Plan'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-arabic mt-0.5">
                  {language === 'ur'
                    ? 'اپنے دستیاب وقت کے مطابق شیڈول منتخب کریں — یہ نظام آپ پر بوجھ ڈالے بغیر روزانہ چھوٹی پیش رفت یقینی بناتا ہے۔'
                    : 'Select your available time per day for a focused, non-overwhelming step-by-step routine.'}
                </p>
              </div>

              {/* Time Selector Pills (15m, 30m, 1h, 2h+) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { key: '15m' as DailyPlanDuration, ur: '۱۵ منٹ (مختصر و تیز)', en: '15 Mins' },
                  { key: '30m' as DailyPlanDuration, ur: '۳۰ منٹ (معیاری روزانہ)', en: '30 Mins' },
                  { key: '1h' as DailyPlanDuration, ur: '۱ گھنٹہ (جامع مطالعہ)', en: '1 Hour' },
                  { key: '2h+' as DailyPlanDuration, ur: '۲+ گھنٹے (گہری مہارت)', en: '2+ Hours' }
                ].map(item => (
                  <button
                    key={item.key}
                    onClick={() => handleChangeDuration(item.key)}
                    className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold transition flex flex-col items-center justify-center gap-1 font-arabic ${
                      selectedDuration === item.key
                        ? 'bg-emerald-700 text-white border-emerald-600 shadow-md scale-[1.02]'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    <span>{language === 'ur' ? item.ur : item.en}</span>
                  </button>
                ))}
              </div>

              {/* Plan Items List */}
              <div className="space-y-3 pt-2">
                {dailyPlanItems.map((item, idx) => {
                  const isDone = completedGrowthTasks.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-2xl border transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                        isDone
                          ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <button
                          onClick={() => handleToggleGrowthTask(item.id, 20)}
                          className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 transition ${
                            isDone
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'border-2 border-slate-300 dark:border-slate-600 hover:border-emerald-500'
                          }`}
                        >
                          {isDone ? <Check className="w-4 h-4" /> : idx + 1}
                        </button>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-arabic">
                              {language === 'ur' ? item.typeUrdu : item.typeEn}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.durationMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
                            </span>
                          </div>

                          <h4 className={`text-base font-bold font-arabic ${isDone ? 'line-through text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                            {language === 'ur' ? item.titleUrdu : item.titleEn}
                          </h4>

                          <p className="text-xs text-slate-600 dark:text-slate-400 font-arabic">
                            {language === 'ur' ? item.descriptionUrdu : item.descriptionEn}
                          </p>

                          <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold font-arabic block pt-0.5">
                            🎯 {language === 'ur' ? 'حاصلِ مشق: ' : 'Deliverable: '}
                            {language === 'ur' ? item.practicalOutcomeUrdu : item.practicalOutcomeEn}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2 self-end sm:self-center">
                        <button
                          onClick={() => handleToggleGrowthTask(item.id, 20)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold font-arabic transition flex items-center gap-1 ${
                            isDone
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200'
                              : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{isDone ? (language === 'ur' ? 'مکمل شدہ (+20)' : 'Completed') : (language === 'ur' ? 'مکمل کریں' : 'Mark Done')}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: WEEKLY PERSONAL GROWTH CARD SUMMARY */}
          {activeTab === 'weekly_card' && (
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-emerald-600/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div>
                      <span className="text-xs text-amber-300 font-bold font-arabic block uppercase tracking-wider">
                        {language === 'ur' ? 'ہفتہ وار جائزہ' : 'Weekly Summary'}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-white font-arabic mt-0.5">
                        {language === 'ur' ? 'آپ کا اس ہفتے کا سفر' : 'Your Journey This Week'}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/15">
                      <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-bold text-emerald-200 font-arabic">
                        {weeklySummary.growthStreakDays} {language === 'ur' ? 'دن کا تسلسل' : 'Day Streak'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-emerald-100 font-arabic leading-relaxed">
                    {language === 'ur' ? weeklySummary.encouragingMessageUrdu : weeklySummary.encouragingMessageEn}
                  </p>

                  {/* 7 Key Achievements Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="bg-white/10 rounded-2xl p-3.5 border border-white/15 text-center">
                      <span className="text-2xl font-black text-amber-300 block">{weeklySummary.completedLessonsCount}</span>
                      <span className="text-[11px] text-emerald-200 font-arabic font-medium">{language === 'ur' ? 'مکمل اسباق' : 'Lessons'}</span>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-3.5 border border-white/15 text-center">
                      <span className="text-2xl font-black text-emerald-300 block">{weeklySummary.skillsPracticedCount}</span>
                      <span className="text-[11px] text-emerald-200 font-arabic font-medium">{language === 'ur' ? 'ہنر آزمائے گئے' : 'Skills'}</span>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-3.5 border border-white/15 text-center">
                      <span className="text-2xl font-black text-teal-300 block">{weeklySummary.challengesCompletedCount}</span>
                      <span className="text-[11px] text-emerald-200 font-arabic font-medium">{language === 'ur' ? 'اخلاقی چیلنجز' : 'Challenges'}</span>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-3.5 border border-white/15 text-center">
                      <span className="text-2xl font-black text-amber-300 block">{weeklySummary.reflectionEntriesCount}</span>
                      <span className="text-[11px] text-emerald-200 font-arabic font-medium">{language === 'ur' ? 'فکری ڈائری' : 'Reflections'}</span>
                    </div>
                  </div>

                  {/* Highlight: اگلا بہترین قدم */}
                  {weeklySummary.topRecommendation && (
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-amber-400/40 space-y-2 mt-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span className="text-xs font-black text-amber-300 font-arabic uppercase tracking-wider">
                          {language === 'ur' ? 'اگلا بہترین قدم (Next Best Step)' : 'Single Next Best Step'}
                        </span>
                      </div>

                      <h4 className="text-lg font-black text-white font-arabic">
                        {language === 'ur' ? weeklySummary.topRecommendation.titleUrdu : weeklySummary.topRecommendation.titleEn}
                      </h4>

                      <p className="text-xs text-emerald-100/90 font-arabic">
                        {language === 'ur' ? weeklySummary.topRecommendation.whyUrdu : weeklySummary.topRecommendation.whyEn}
                      </p>

                      <div className="pt-2">
                        <button
                          onClick={() => handleExecuteRec(weeklySummary.topRecommendation)}
                          className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs font-arabic flex items-center gap-2 transition"
                        >
                          <Play className="w-3.5 h-3.5 fill-slate-950" />
                          <span>{language === 'ur' ? 'یہ قدم شروع کریں' : 'Start This Step'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: REAL-LIFE APPLICATION & COMMUNITY SERVICE */}
          {activeTab === 'real_life' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white font-arabic">
                  {language === 'ur' ? 'حقیقی زندگی میں استعمال اور بلا معاوضہ خدمت' : 'Real-Life Application & Community Service'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-arabic mt-0.5">
                  {language === 'ur'
                    ? 'ہمارا مقصد صرف اسکرین پر پڑھنا نہیں، بلکہ حقیقی زندگی میں اپنے خاندان، محلے اور معاشرے کے کام آنا ہے۔'
                    : 'True learning translates into practical daily benefit, helping family, and uplifting your local community.'}
                </p>
              </div>

              {/* Real-Life Mapping Cards */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-arabic">
                  {language === 'ur' ? '💡 "میں اسے اپنی حقیقی زندگی میں کہاں استعمال کروں؟"' : '💡 "Where do I apply this in real life?"'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { titleUrdu: 'ڈیجیٹل مہارت و AI', titleEn: 'Digital Skills & AI', actionUrdu: 'بجلی کے بل آن لائن بھرنا، کینوا پر دکان کا پوسٹر بنانا اور نوکری/کاروبار کے لیے خط لکھوانا۔', actionEn: 'Paying utility bills online, creating shop notices on Canva, and drafting letters.' },
                    { titleUrdu: 'گفتگو و رابطہ', titleEn: 'Communication', actionUrdu: 'خاندان یا محلے میں غلط فہمیوں کے وقت پرسکون رہ کر باوقار انداز میں اپنا موقف بیان کرنا۔', actionEn: 'Expressing ideas politely and resolving family or neighborhood misunderstandings.' },
                    { titleUrdu: 'مالیاتی شعور', titleEn: 'Financial Awareness', actionUrdu: 'ماہانہ گھریلو بجٹ بنانا، روزانہ آمدنی و خرچ کا اندراج اور غیر ضروری اسراف سے بچنا۔', actionEn: 'Drafting a simple monthly household budget and tracking cash flow daily.' },
                    { titleUrdu: 'اسلامی کردار و اخلاق', titleEn: 'Islamic Character', actionUrdu: 'غصے کے وقت 3 سیکنڈ خاموش رہنا، سچ بولنا اور کام شروع کرنے سے پہلے نیت کی تجدید۔', actionEn: 'Patience in anger, truthfulness in business, and renewing pure intentions.' },
                    { titleUrdu: 'زراعت و مقامی ہنر', titleEn: 'Agriculture & Local Craft', actionUrdu: 'گھر میں کچن گارڈننگ (دھنیا، پودینہ)، نامیاتی کھاد بنانا اور پودوں کی آبیاری۔', actionEn: 'Kitchen gardening, composting kitchen scraps, and watering local plants.' },
                    { titleUrdu: 'فری لانسنگ و چھوٹا کام', titleEn: 'Freelancing & Trades', actionUrdu: 'ایک نمونہ پورٹ فولیو بنانا اور محلے یا آن لائن کسی کو پہلی بامقصد سروس فراہم کرنا۔', actionEn: 'Creating a sample portfolio item and offering real value to a client or neighbor.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1">
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 font-arabic block">
                        {language === 'ur' ? item.titleUrdu : item.titleEn}
                      </span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-arabic leading-relaxed">
                        {language === 'ur' ? item.actionUrdu : item.actionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Voluntary Community Service Opportunities */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-arabic">
                    {language === 'ur' ? '🤝 رضاکارانہ سماجی خدمات (اختیاری و باوقار)' : '🤝 Voluntary Community Service (Optional)'}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-arabic">
                    {completedCommunityActions.length} / {COMMUNITY_SERVICE_OPPORTUNITIES.length} {language === 'ur' ? 'مکمل' : 'Done'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {COMMUNITY_SERVICE_OPPORTUNITIES.map(comm => {
                    const isDone = completedCommunityActions.includes(comm.id);
                    return (
                      <div
                        key={comm.id}
                        className={`p-4 rounded-2xl border transition flex flex-col justify-between space-y-3 ${
                          isDone
                            ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-arabic">
                              {language === 'ur' ? comm.categoryUrdu : comm.categoryEn}
                            </span>
                            <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                              +{comm.points} {language === 'ur' ? 'پوائنٹس' : 'pts'}
                            </span>
                          </div>

                          <h5 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-arabic">
                            {language === 'ur' ? comm.titleUrdu : comm.titleEn}
                          </h5>

                          <p className="text-xs text-slate-600 dark:text-slate-400 font-arabic">
                            {language === 'ur' ? comm.descriptionUrdu : comm.descriptionEn}
                          </p>

                          <div className="p-2 bg-slate-50 dark:bg-slate-900/60 rounded-xl text-[11px] font-arabic text-emerald-800 dark:text-emerald-300">
                            <strong>{language === 'ur' ? 'عملی اقدام: ' : 'Action: '}</strong>
                            {language === 'ur' ? comm.practicalStepUrdu : comm.practicalStepEn}
                          </div>
                        </div>

                        <button
                          onClick={() => handleToggleCommunityAction(comm.id, comm.points)}
                          className={`w-full py-2 px-3 rounded-xl text-xs font-bold font-arabic transition flex items-center justify-center gap-1.5 ${
                            isDone
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200'
                              : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{isDone ? (language === 'ur' ? 'ماشاءاللہ! مکمل ہوا' : 'Completed') : (language === 'ur' ? 'خدمت مکمل کرنے کی تصدیق کریں' : 'Confirm Action')}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 dark:bg-slate-900/80 p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-arabic">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{language === 'ur' ? 'ہر عمل خود بخود محفوظ ہو رہا ہے۔' : 'Progress saved automatically.'}</span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-white font-bold text-xs font-arabic transition"
          >
            {language === 'ur' ? 'بند کریں' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
