import React, { useState } from 'react';
import { 
  GraduationCap, 
  Flame, 
  Award, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  BookOpen, 
  Play, 
  Trophy, 
  FileText,
  Printer,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  Compass,
  Layers,
  Bot,
  Sun
} from 'lucide-react';
import { Course, Language, UserProfile } from '../types';
import { COURSES_DATA, UI_TRANSLATIONS } from '../data/mockData';
import { ISLAMIC_LESSONS_DATA, ISLAMIC_LEARNING_REMINDER } from '../data/islamicGuidanceData';
import { PersonalRoadmapView } from './PersonalRoadmapView';
import { IslamicGuidanceCard } from './IslamicGuidanceCard';
import { PersonalGrowthCard } from './PersonalGrowthCard';

interface MyLearningViewProps {
  language: Language;
  userProfile: UserProfile;
  onSelectCourse: (course) => void;
  onNavigateToTab: (tab) => void;
  onOpenAssessment: () => void;
  onOpenAITeacherWithPrompt: (prompt?: string) => void;
  onCompleteDailyPlanDay: (dayNumber: number, points: number) => void;
  onOpenIslamicModal?: (lessonIndex?: number) => void;
  onCompleteIslamicLesson?: (lessonId: string) => void;
  onOpenGrowthModal?: () => void;
  onOpenSkillPathway?: (skillId?: string, categoryKey?: string) => void;
}

export const MyLearningView: React.FC<MyLearningViewProps> = ({
  language,
  userProfile,
  onSelectCourse,
  onNavigateToTab,
  onOpenAssessment,
  onOpenAITeacherWithPrompt,
  onCompleteDailyPlanDay,
  onOpenIslamicModal,
  onCompleteIslamicLesson,
  onOpenGrowthModal,
  onOpenSkillPathway,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [activeSubTab, setActiveSubTab] = useState<'roadmap' | 'courses' | 'islamic'>('roadmap');
  const [selectedCertCourse, setSelectedCertCourse] = useState<Course | null>(null);

  // Completed courses
  const completedCourses = COURSES_DATA.filter(c => userProfile.enrolledCourseIds.includes(c.id));
  const activeCourses = COURSES_DATA.slice(0, 3);

  // Overall progress percentage calculation
  const totalAvailableSkills = COURSES_DATA.length;
  const progressPercent = Math.min(100, Math.round((userProfile.enrolledCourseIds.length / totalAvailableSkills) * 100) + 15);

  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-6 pb-24 max-w-5xl mx-auto px-3 sm:px-6 pt-2">
      {/* Top Segmented Switcher: Roadmap vs Courses & Certificates vs Islamic Guidance */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-1 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
          <button
            id="mylearning-tab-roadmap"
            type="button"
            onClick={() => setActiveSubTab('roadmap')}
            className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 shrink-0 sm:flex-1 ${
              activeSubTab === 'roadmap'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{language === 'ur' ? 'ذاتی روڈ میپ' : 'Personal Roadmap'}</span>
          </button>

          <button
            id="mylearning-tab-courses"
            type="button"
            onClick={() => setActiveSubTab('courses')}
            className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 shrink-0 sm:flex-1 ${
              activeSubTab === 'courses'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{language === 'ur' ? 'کورسز و اسناد' : 'Courses & Certs'}</span>
          </button>

          <button
            id="mylearning-tab-islamic"
            type="button"
            onClick={() => setActiveSubTab('islamic')}
            className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 shrink-0 sm:flex-1 ${
              activeSubTab === 'islamic'
                ? 'bg-emerald-800 text-amber-300 shadow-xs border border-amber-400/40'
                : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'
            }`}
          >
            <Sun className="w-4 h-4 text-amber-500" />
            <span>{language === 'ur' ? 'قرآن و حدیث سے رہنمائی' : 'Quran & Hadith'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {onOpenGrowthModal && (
            <button
              id="mylearning-open-growth-engine-btn"
              onClick={onOpenGrowthModal}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-amber-300 border border-emerald-500/50 font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-xs"
            >
              <Compass className="w-3.5 h-3.5 text-amber-300" />
              <span>{language === 'ur' ? 'ذاتی ترقی کا نظام' : 'Growth Engine'}</span>
            </button>
          )}

          <button
            onClick={onOpenAssessment}
            className="hidden md:flex px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs items-center gap-1.5 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === 'ur' ? 'نیا راستہ دریافت کریں' : 'Retake Assessment'}</span>
          </button>
        </div>
      </div>

      {/* View Rendering based on active sub tab */}
      {activeSubTab === 'roadmap' && (
        <div className="space-y-6">
          <PersonalGrowthCard
            language={language}
            userProfile={userProfile}
            onOpenGrowthModal={() => onOpenGrowthModal && onOpenGrowthModal()}
            onSelectCourse={onSelectCourse}
            onOpenIslamicModal={(idx) => onOpenIslamicModal && onOpenIslamicModal(idx)}
            onOpenAITeacherWithPrompt={onOpenAITeacherWithPrompt}
          />

          <PersonalRoadmapView
            language={language}
            userProfile={userProfile}
            onSelectCourse={onSelectCourse}
            onOpenAITeacherWithPrompt={onOpenAITeacherWithPrompt}
            onRetakeAssessment={onOpenAssessment}
            onCompleteDailyPlanDay={onCompleteDailyPlanDay}
          />
        </div>
      )}

      {activeSubTab === 'islamic' && (
        <div className="space-y-6">
          <IslamicGuidanceCard
            language={language}
            userProfile={userProfile}
            onOpenModal={(idx) => onOpenIslamicModal && onOpenIslamicModal(idx)}
            onQuickComplete={(id) => onCompleteIslamicLesson && onCompleteIslamicLesson(id)}
          />

          {/* 15 Character Development Levels Grid */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-arabic">
                  {language === 'ur' ? '15 اخلاقی و کردار سازی کے اسباق و چیلنجز' : '15 Islamic Character & Ethics Levels'}
                </h3>
                <p className="text-xs text-slate-500 font-arabic mt-0.5">
                  {language === 'ur' 
                    ? 'سیکھیں → سمجھیں → مشق کریں → خود احتسابی → بہتر بنیں → دوسروں کی خدمت کریں' 
                    : 'Learn → Understand → Practice → Reflect → Improve → Help Others'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-bold rounded-full font-arabic">
                  {userProfile.completedIslamicLessonIds?.length || 0} / {ISLAMIC_LESSONS_DATA.length} {language === 'ur' ? 'اسباق مکمل' : 'Lessons Done'}
                </span>
                <span className="text-xs px-3 py-1 bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold rounded-full font-arabic">
                  {userProfile.completedIslamicChallengeIds?.length || 0} / {ISLAMIC_LESSONS_DATA.length} {language === 'ur' ? 'چیلنجز' : 'Challenges'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {ISLAMIC_LESSONS_DATA.map((lesson, idx) => {
                const isLessonDone = userProfile.completedIslamicLessonIds?.includes(lesson.id);
                const isChallengeDone = userProfile.completedIslamicChallengeIds?.includes(lesson.id);
                const hasReflection = !!userProfile.islamicReflections?.[lesson.id];

                return (
                  <div
                    key={lesson.id}
                    onClick={() => onOpenIslamicModal && onOpenIslamicModal(idx)}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-emerald-50/30 transition cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isLessonDone 
                          ? 'bg-emerald-600 text-white shadow-xs' 
                          : 'bg-amber-100 dark:bg-slate-700 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-slate-600'
                      }`}>
                        {isLessonDone ? <CheckCircle2 className="w-5 h-5" /> : `L${lesson.levelNumber}`}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 font-arabic">
                            {language === 'ur' ? lesson.quranGuidance.surahAndAyahUrdu : lesson.quranGuidance.surahAndAyahEn}
                          </span>
                          {isChallengeDone && (
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/30 text-amber-800 dark:text-amber-300 font-bold font-arabic">
                              ★ {language === 'ur' ? 'چیلنج مکمل' : 'Challenge done'}
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 font-arabic group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition">
                          {language === 'ur' ? lesson.themeUrdu : lesson.themeEn}
                        </h4>
                      </div>
                    </div>

                    <button
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 font-bold text-xs border border-slate-200 dark:border-slate-700 group-hover:bg-emerald-700 group-hover:text-white transition shrink-0 font-arabic"
                    >
                      {language === 'ur' ? 'کھولیں' : 'Open'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'courses' && (
        /* Traditional Courses & Certificates View */
        <div className="space-y-6">
          {/* Title Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                  {language === 'ur' ? 'میری تعلیم و ذاتی ترقی کا ڈیش بورڈ' : 'My Learning & Personal Growth Dashboard'}
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-arabic">
                {language === 'ur'
                  ? 'سیکھیں → مشق کریں → خود کو سنواریں → خاندان اور برادری کے کام آئیں'
                  : 'Track your courses, active streak, submitted projects, and certificates.'}
              </p>
            </div>

            <button
              onClick={() => onNavigateToTab('skills')}
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-xs flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>{language === 'ur' ? '+ نئی مہارت سیکھیں' : '+ Explore New Skills'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Key Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Streak */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                <Flame className="w-6 h-6 fill-white" />
              </div>
              <div>
                <div className="text-2xl font-black">{userProfile.streakDays} {language === 'ur' ? 'دن' : 'Days'}</div>
                <div className="text-[11px] sm:text-xs text-amber-100 font-medium">{t.streakDays}</div>
              </div>
            </div>

            {/* Skill Points */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black">{userProfile.points}</div>
                <div className="text-[11px] sm:text-xs text-emerald-100 font-medium">{t.learningPoints}</div>
              </div>
            </div>

            {/* Completed Lessons */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">{userProfile.completedLessonIds.length + 3}</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  {language === 'ur' ? 'مکمل اسباق' : 'Completed Lessons'}
                </div>
              </div>
            </div>

            {/* Practical Projects */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">{userProfile.completedProjectIds.length + 1}</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">{t.completedProjects}</div>
              </div>
            </div>
          </div>

          {/* Progress Bar & Goal Tracker */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800">
              <span>{language === 'ur' ? 'مجموعی تعلیمی ہدف کی پیش رفت' : 'Overall Learning Goal Progress'}</span>
              <span className="text-emerald-700 font-black">{progressPercent}%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 text-end">
              {language === 'ur' ? 'روزانہ ۱۵ تا ۳۰ منٹ سیکھنے سے آپ کا ہدف آسانی سے حاصل ہو سکتا ہے۔' : '15-30 minutes daily ensures continuous, lasting progress.'}
            </p>
          </div>

          {/* Current Active Courses */}
          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {language === 'ur' ? 'زیرِ مطالعہ کورسز اور مہارتیں' : 'Current Enrolled Courses'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCourses.map((course, idx) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {language === 'ur' ? course.categoryUrdu : course.category}
                      </span>
                      <span className="text-xs text-emerald-700 font-bold">
                        {idx === 0 ? '75%' : idx === 1 ? '40%' : '15%'} {language === 'ur' ? 'مکمل' : 'Done'}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                      {language === 'ur' ? course.titleUrdu : course.titleEn}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {language === 'ur' ? course.descriptionUrdu : course.descriptionEn}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {course.estimatedHours} {language === 'ur' ? 'گھنٹے' : 'hours'}
                    </span>

                    <div className="flex items-center gap-2">
                      {onOpenSkillPathway && (
                        <button
                          type="button"
                          onClick={() => onOpenSkillPathway(course.id, course.category)}
                          className="px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs flex items-center gap-1 transition"
                        >
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          <span className="hidden sm:inline">{language === 'ur' ? 'راستہ' : 'Path'}</span>
                        </button>
                      )}
                      <button
                        onClick={() => onSelectCourse(course)}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-1 transition"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>{language === 'ur' ? 'سبق جاری رکھیں' : 'Continue Lesson'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Earned Certificates */}
          <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-5 sm:p-7 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h2 className="text-lg sm:text-xl font-black text-white">
                    {language === 'ur' ? 'سیکھو — کورس مکمل کرنے کا سرٹیفکیٹ' : 'Seekho — Course Completion Certificate'}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-emerald-200 mt-0.5">
                  {language === 'ur'
                    ? 'آپ کے تمام اسباق اور مشقیں مکمل کرنے پر جاری کیے گئے سرٹیفکیٹ'
                    : 'Certificates issued after completing all lessons and practical exercises.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {completedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 hover:border-emerald-400/50 transition flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300">
                        {language === 'ur' ? 'سیکھو سرٹیفکیٹ' : 'Seekho Certificate'}
                      </span>
                      <h3 className="font-bold text-white text-sm sm:text-base mt-2">
                        {language === 'ur' ? course.titleUrdu : course.titleEn}
                      </h3>
                      <p className="text-xs text-emerald-100/80 mt-0.5">
                        {language === 'ur' ? `نام: ${userProfile.name}` : `Issued to: ${userProfile.name}`}
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-amber-400/20 text-amber-300">
                      <Trophy className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                    <span className="text-emerald-300 font-mono">
                      ID: SKH-2025-{course.id.toUpperCase().slice(0, 4)}
                    </span>
                    <button
                      onClick={() => setSelectedCertCourse(course)}
                      className="px-3 py-1 rounded-lg bg-white text-slate-900 hover:bg-emerald-50 font-bold flex items-center gap-1 transition"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{language === 'ur' ? 'سرٹیفکیٹ دیکھیں' : 'View Certificate'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal View */}
      {selectedCertCourse && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border-4 border-amber-300 shadow-2xl relative animate-fade-in text-center space-y-5">
            <button
              onClick={() => setSelectedCertCourse(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition"
            >
              ✕
            </button>

            <div className="space-y-2">
              <div className="inline-block p-3 bg-emerald-50 rounded-2xl text-emerald-800 mb-1">
                <GraduationCap className="w-10 h-10 mx-auto" />
              </div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-amber-600">
                {language === 'ur' ? 'سیکھو لرننگ پلیٹ فارم' : 'SEEKHO LEARNING PLATFORM'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {language === 'ur' ? 'سیکھو — کورس مکمل کرنے کا سرٹیفکیٹ' : 'Seekho — Course Completion Certificate'}
              </h2>
            </div>

            <div className="border-y-2 border-dashed border-slate-200 py-5 space-y-2.5">
              <p className="text-xs sm:text-sm text-slate-600">
                {language === 'ur' ? 'یہ سند دی جاتی ہے:' : 'This is to certify that'}
              </p>
              <h3 className="text-2xl font-black text-emerald-800">
                {userProfile.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {language === 'ur'
                  ? `نے کامیابی کے ساتھ تمام اسباق، کوئز اور عملی مراحل مکمل کر کے "${selectedCertCourse.titleUrdu}" کا کورس مکمل کیا ہے۔`
                  : `has successfully completed all lessons, quizzes, and practical tasks for "${selectedCertCourse.titleEn}".`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-1">
              <div className="text-start">
                <span className="block font-bold text-slate-800">
                  {language === 'ur' ? 'جاری کنندہ:' : 'Issued by:'}
                </span>
                <span>Seekho Platform</span>
              </div>
              <div className="text-end">
                <span className="block font-bold text-slate-800">
                  {language === 'ur' ? 'سرٹیفکیٹ نمبر:' : 'Certificate ID:'}
                </span>
                <span className="font-mono">SKH-2025-{selectedCertCourse.id.toUpperCase()}</span>
              </div>
            </div>

            {/* Accreditation Disclaimer Note */}
            <p className="text-xs text-slate-500 bg-amber-50/70 p-3 rounded-xl border border-amber-200/80 leading-relaxed font-arabic text-center">
              {language === 'ur'
                ? 'یہ سرٹیفکیٹ صرف Seekho platform پر اس کورس کی تکمیل کی تصدیق کرتا ہے۔ یہ کسی سرکاری یا accredited ادارے کی سند نہیں ہے۔'
                : 'This certificate verifies course completion exclusively on the Seekho platform. It is not an accredited or governmental credential.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              {onOpenSkillPathway && (
                <button
                  type="button"
                  onClick={() => {
                    const c = selectedCertCourse;
                    setSelectedCertCourse(null);
                    onOpenSkillPathway(c.id, c.category);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>{language === 'ur' ? 'اس ہنر کے بعد اگلا راستہ دیکھیں (Learn → Build → Apply → Earn)' : 'View Skill to Opportunity Path'}</span>
                </button>
              )}
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
              >
                <Printer className="w-4 h-4" />
                <span>{language === 'ur' ? 'پرنٹ یا ڈاؤن لوڈ کریں' : 'Print Certificate'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Educational Reminder Banner */}
      <div className="bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl p-4 border border-emerald-200 dark:border-emerald-800 text-center shadow-xs">
        <p className="text-xs sm:text-sm font-black text-emerald-950 dark:text-emerald-200 font-arabic">
          "{language === 'ur' ? ISLAMIC_LEARNING_REMINDER.urdu : ISLAMIC_LEARNING_REMINDER.english}"
        </p>
      </div>
    </div>
  );
};
