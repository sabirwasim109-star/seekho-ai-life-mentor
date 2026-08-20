import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  ArrowLeft, 
  Bot, 
  TrendingUp, 
  Users, 
  HeartHandshake, 
  MapPin, 
  Flame, 
  Clock, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  Briefcase,
  Compass,
  FolderKanban,
  GraduationCap,
  Library,
  ShieldCheck
} from 'lucide-react';
import { Course, Language, UserProfile, GoodDeedItem } from '../types';
import { COURSES_DATA, COMMUNITY_POSTS_DATA, AGE_GROUP_RECOMMENDATIONS, UI_TRANSLATIONS, SKILL_CATEGORIES_DATA } from '../data/mockData';
import { KNOWLEDGE_CATEGORIES_META } from '../data/knowledgeLibraryData';
import { INITIAL_LEARNER_SKILLS, LearnerSkillItem } from '../data/portfolioData';
import { SAMPLE_OPPORTUNITIES, SampleOpportunity } from '../data/opportunitiesData';
import { VisionBanner } from './VisionBanner';
import { MyActionPlanSection } from './MyActionPlanSection';
import { IslamicGuidanceCard } from './IslamicGuidanceCard';
import { PersonalGrowthCard } from './PersonalGrowthCard';
import { ThinkBeforeYouActCard } from './ThinkBeforeYouActCard';
import { GoodDeedCard } from './GoodDeedCard';
import { PracticalLifeSkillsSection } from './PracticalLifeSkillsSection';
import { MyLifeRoadmapSection } from './MyLifeRoadmapSection';
import { RealLifeMissionCard } from './RealLifeMissionCard';
import { DailySmartJourneyCard } from './DailySmartJourneyCard';
import { DiscoverWhatsNewSection } from './DiscoverWhatsNewSection';
import { LearnRememberPracticeCard } from './LearnRememberPracticeCard';
import { JourneyTimeLength } from '../types';

interface HomeScreenProps {
  language: Language;
  userProfile: UserProfile;
  onSelectCourse: (course: Course) => void;
  onOpenAITeacher: (presetPrompt?: string) => void;
  onNavigateToTab: (tab: any) => void;
  onCompleteDailyTask: () => void;
  dailyTaskCompleted: boolean;
  onOpenAssessment: () => void;
  onOpenVisionModal: () => void;
  onOpenIslamicModal?: (lessonIndex?: number) => void;
  onCompleteIslamicLesson?: (lessonId: string) => void;
  onOpenGrowthModal?: () => void;
  onCompleteGoodDeed?: (deed: GoodDeedItem) => void;
  onCompleteLifeLesson?: (lessonId: string, points: number, reflectionText?: string) => void;
  onCompleteMission?: (missionId: string, points: number, reflectionText: string, moodTag?: string) => void;
  onCompleteDailyJourney?: (timeLength: JourneyTimeLength, points: number, reflectionText: string, lessonId: string, missionId: string) => void;
  onOpenLesson?: (courseId: string, lessonId: string) => void;
  onDismissDiscoverItem?: (itemId: string) => void;
  onFeedbackDiscoverItem?: (itemId: string, helpful: boolean) => void;
}

const SEARCH_SUGGESTIONS = [
  {
    ur: 'موبائل چلانا سیکھنا ہے',
    en: 'Learn mobile phone skills',
    keywords: ['موبائل', 'فون', 'mobile', 'smartphone', 'digital'],
  },
  {
    ur: 'AI سیکھنا ہے',
    en: 'Learn AI',
    keywords: ['ai', 'اے آئی', 'chatgpt', 'مصنوعی ذہانت'],
  },
  {
    ur: 'فری لانسنگ شروع کرنی ہے',
    en: 'Start freelancing',
    keywords: ['فری لانسنگ', 'freelance', 'freelancing', 'canva', 'کینوا'],
  },
  {
    ur: 'اپنے گاؤں میں کاروبار کرنا ہے',
    en: 'Start a business in my village',
    keywords: ['کاروبار', 'گاؤں', 'business', 'دکان', 'کاشتکاری'],
  },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({
  language,
  userProfile,
  onSelectCourse,
  onOpenAITeacher,
  onNavigateToTab,
  onCompleteDailyTask,
  dailyTaskCompleted,
  onOpenAssessment,
  onOpenVisionModal,
  onOpenIslamicModal,
  onCompleteIslamicLesson,
  onOpenGrowthModal,
  onCompleteGoodDeed,
  onCompleteLifeLesson,
  onCompleteMission,
  onCompleteDailyJourney,
  onOpenLesson,
  onDismissDiscoverItem,
  onFeedbackDiscoverItem,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Community action options state
  const [selectedCommunityOption, setSelectedCommunityOption] = useState<'family' | 'village' | 'society'>('family');
  const [startedCommunitySteps, setStartedCommunitySteps] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('seekho_community_actions_started');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });

  const handleStartCommunityStep = (optionId: string) => {
    setStartedCommunitySteps((prev) => {
      const updated = { ...prev, [optionId]: true };
      try {
        localStorage.setItem('seekho_community_actions_started', JSON.stringify(updated));
      } catch {
        // fallback
      }
      return updated;
    });
  };

  // Time-aware greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 
    ? t.greetingMorning 
    : hour < 17 
    ? t.greetingAfternoon 
    : t.greetingEvening;

  // Active course & Progress calculation for "میری تعلیم"
  const enrolledCourses = COURSES_DATA.filter((course) =>
    userProfile.enrolledCourseIds?.includes(course.id)
  );
  const activeCourse = enrolledCourses.length > 0 ? enrolledCourses[0] : null;

  const completedLessonCount = activeCourse
    ? activeCourse.lessons.filter((l) => userProfile.completedLessonIds?.includes(l.id)).length
    : 0;
  const totalLessonsCount = activeCourse ? Math.max(1, activeCourse.lessons.length) : 1;
  const progressPercent = activeCourse
    ? Math.min(100, Math.round((completedLessonCount / totalLessonsCount) * 100))
    : 0;

  const currentLesson = activeCourse
    ? (activeCourse.lessons.find((l) => !userProfile.completedLessonIds?.includes(l.id)) ||
       activeCourse.lessons[0])
    : null;

  // Featured Today's Lesson (fallback to activeCourse if present, or first course)
  const todaysCourse = activeCourse || COURSES_DATA[0];
  const todaysLesson = currentLesson || todaysCourse.lessons[0];

  // Top 3 learner skills for "میری Skills" section
  const learnerSkills: LearnerSkillItem[] = React.useMemo(() => {
    try {
      const saved = localStorage.getItem('seekho_portfolio_skills');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // fallback
    }
    return INITIAL_LEARNER_SKILLS;
  }, []);

  const top3Skills = learnerSkills.slice(0, 3);

  // Top 2 sample opportunities based on learner's skills and interests
  const matchedOpportunities: SampleOpportunity[] = React.useMemo(() => {
    const userInterests = userProfile.interests || [];
    const enrolledIds = userProfile.enrolledCourseIds || [];
    const skillNames = learnerSkills.map(s => (s.nameEn || '') + ' ' + (s.nameUrdu || '')).join(' ').toLowerCase();

    const scored = SAMPLE_OPPORTUNITIES.map((opp) => {
      let score = 0;
      if (opp.relevantCourseId && enrolledIds.includes(opp.relevantCourseId)) {
        score += 6;
      }
      if (userInterests.some(i => 
        opp.skillCategory.toLowerCase().includes(i.toLowerCase()) || 
        opp.requiredSkillUrdu.toLowerCase().includes(i.toLowerCase()) ||
        opp.tagsUrdu.some(t => t.toLowerCase().includes(i.toLowerCase()))
      )) {
        score += 4;
      }
      if (opp.requiredSkillUrdu.split(/[\s،,]+/).some(w => w.length > 2 && skillNames.includes(w.toLowerCase()))) {
        score += 3;
      }
      if (opp.level === 'Beginner') {
        score += 1;
      }
      return { opp, score };
    });

    const matches = scored
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(s => s.opp);

    if (matches.length > 0) {
      return matches.slice(0, 2);
    }
    // If no specific skills/interests enrolled or matched
    return [];
  }, [userProfile.interests, userProfile.enrolledCourseIds, learnerSkills]);

  // Age group tailored recommendation package
  const ageRec = AGE_GROUP_RECOMMENDATIONS[userProfile.ageGroup] || AGE_GROUP_RECOMMENDATIONS['16-25'];

  // Filtered skills
  const filteredCourses = COURSES_DATA.filter((course) => {
    if (!searchQuery.trim()) {
      return !selectedCategory || course.category === selectedCategory;
    }
    const q = searchQuery.toLowerCase().trim();
    
    // Check if query matches any suggestion keywords or normal text
    const matchedSuggestion = SEARCH_SUGGESTIONS.find(s => s.ur === q || s.en.toLowerCase() === q);
    
    let matchesSearch = 
      course.titleUrdu.toLowerCase().includes(q) ||
      course.titleEn.toLowerCase().includes(q) ||
      course.descriptionUrdu.toLowerCase().includes(q) ||
      course.descriptionEn.toLowerCase().includes(q) ||
      course.categoryUrdu.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q);

    if (matchedSuggestion) {
      matchesSearch = matchesSearch || matchedSuggestion.keywords.some(kw => 
        course.titleUrdu.toLowerCase().includes(kw) ||
        course.titleEn.toLowerCase().includes(kw) ||
        course.descriptionUrdu.toLowerCase().includes(kw) ||
        course.categoryUrdu.toLowerCase().includes(kw) ||
        course.category.toLowerCase().includes(kw) ||
        course.id.toLowerCase().includes(kw)
      );
    } else {
      const catLower = String(course.category).toLowerCase();
      if (q.includes('موبائل') || q.includes('فون') || q.includes('phone') || q.includes('mobile')) {
        matchesSearch = matchesSearch || course.id.includes('mobile') || catLower.includes('digital') || catLower.includes('computer') || course.titleUrdu.includes('موبائل') || course.titleEn.toLowerCase().includes('digital') || course.titleEn.toLowerCase().includes('mobile');
      }
      if (q.includes('ai') || q.includes('اے آئی') || q.includes('ذہانت')) {
        matchesSearch = matchesSearch || course.id.includes('ai') || catLower.includes('ai') || catLower.includes('technology');
      }
      if (q.includes('فری لانسنگ') || q.includes('freelanc')) {
        matchesSearch = matchesSearch || course.id.includes('freelanc') || course.id.includes('canva') || catLower.includes('freelancing') || catLower.includes('business');
      }
      if (q.includes('کاروبار') || q.includes('گاؤں') || q.includes('business')) {
        matchesSearch = matchesSearch || course.id.includes('business') || catLower.includes('business') || catLower.includes('local') || catLower.includes('agriculture') || course.titleUrdu.includes('کاروبار') || course.titleUrdu.includes('کاشتکاری');
      }
    }

    const matchesCat = !selectedCategory || course.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-6 pb-24 max-w-5xl mx-auto px-3 sm:px-6 pt-2">
      {/* 1. Header Greeting: "السلام علیکم!" */}
      <div className="bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl border border-emerald-600/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 font-bold border border-emerald-400/30">
                {language === 'ur' ? `عمر: ${userProfile.ageGroup} سال` : `Age: ${userProfile.ageGroup} yrs`}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/90 font-medium">
                {userProfile.village || 'ڈوبے، برنالہ'}
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-semibold border border-amber-400/30">
                {language === 'ur' ? 'ہر عمر کے لیے آسان' : 'Easy for Ages 10–70+'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-arabic">
              {language === 'ur' ? 'السلام علیکم!' : 'Assalam-o-Alaikum!'} <span className="text-emerald-300">{userProfile.name || (language === 'ur' ? 'معزز ساتھی' : 'Learner')}</span>
            </h1>

            {/* Core Platform Tagline: "زندگی سیکھیں، بہتر بنائیں، عمل کریں" */}
            <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs sm:text-sm font-black font-arabic shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <span>{language === 'ur' ? 'زندگی سیکھیں، بہتر بنائیں، عمل کریں' : 'Learn Life, Improve, Act'}</span>
            </div>

            <p className="text-emerald-100/90 text-xs sm:text-sm mt-2 max-w-xl font-arabic leading-relaxed">
              {language === 'ur'
                ? 'سیکھو ایک AI Life Mentor ہے جو علم کو عملی زندگی، مہارت، کردار اور روزمرہ عمل سے جوڑتا ہے۔'
                : 'Seekho is an AI Life Mentor connecting knowledge with practical life, skills, character, and daily action.'}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-white/15 self-stretch sm:self-auto justify-around">
            <div className="text-center px-2">
              <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-lg sm:text-xl">
                <Flame className="w-5 h-5 fill-amber-400" />
                <span>{userProfile.streakDays}</span>
              </div>
              <span className="text-[11px] text-emerald-200 block font-medium">
                {language === 'ur' ? 'دن کا تسلسل' : 'Day Streak'}
              </span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center px-2">
              <div className="flex items-center justify-center gap-1 text-emerald-300 font-black text-lg sm:text-xl">
                <Award className="w-5 h-5" />
                <span>{userProfile.points}</span>
              </div>
              <span className="text-[11px] text-emerald-200 block font-medium">
                {language === 'ur' ? 'پوائنٹس' : 'Skill Points'}
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar: "آپ کیا سیکھنا یا کرنا چاہتے ہیں؟" with 4 example suggestions */}
        <div className="mt-5 space-y-3">
          <div className="relative">
            <input
              id="home-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ur' ? 'آپ کیا سیکھنا یا کرنا چاہتے ہیں؟' : 'What do you want to learn or do?'}
              className="w-full bg-white text-slate-900 placeholder:text-slate-500 pl-11 pr-11 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold shadow-lg border-2 border-transparent focus:border-amber-400 focus:outline-none transition-all font-arabic"
            />
            <Search className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3.5 rtl:left-auto rtl:right-3.5 pointer-events-none" />
            {searchQuery && (
              <button
                id="home-search-clear-btn"
                onClick={() => setSearchQuery('')}
                className="absolute top-1/2 -translate-y-1/2 right-3.5 rtl:right-auto rtl:left-3.5 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg font-bold font-arabic transition shadow-xs"
              >
                {language === 'ur' ? 'ختم کریں' : 'Clear'}
              </button>
            )}
          </div>

          {/* 4 Simple Example Suggestions */}
          <div className="flex items-center gap-2 flex-wrap pt-0.5">
            <span className="text-xs text-emerald-200/90 font-medium font-arabic shrink-0">
              {language === 'ur' ? 'تجویز کردہ مثالیں:' : 'Suggestions:'}
            </span>
            {SEARCH_SUGGESTIONS.map((sug, idx) => {
              const text = language === 'ur' ? sug.ur : sug.en;
              const isSelected = searchQuery === text;
              return (
                <button
                  key={idx}
                  id={`home-search-suggestion-${idx}`}
                  onClick={() => setSearchQuery(isSelected ? '' : text)}
                  className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all flex items-center gap-1 font-arabic shadow-xs ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 border border-amber-300 scale-105'
                      : 'bg-white/15 hover:bg-white/25 text-white border border-white/20 hover:border-white/30'
                  }`}
                >
                  <span>{text}</span>
                </button>
              );
            })}
          </div>

          {/* Search Result Feedback / Notification */}
          {searchQuery && (
            <div className="bg-emerald-950/60 backdrop-blur-md rounded-xl px-3 py-2 border border-emerald-400/30 flex items-center justify-between text-xs text-emerald-100">
              <span className="font-arabic font-medium">
                {language === 'ur' 
                  ? `نتائج برائے: "${searchQuery}" (${filteredCourses.length} کورسز ملے)`
                  : `Results for: "${searchQuery}" (${filteredCourses.length} matching)`}
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-amber-300 hover:underline font-bold font-arabic"
              >
                {language === 'ur' ? 'تمام کورسز دیکھیں' : 'Reset search'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 2. SECTION: "میری تعلیم" (My Learning) */}
      <div className="bg-gradient-to-br from-emerald-700 via-teal-800 to-emerald-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border-2 border-emerald-500/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-xs">
              <GraduationCap className="w-5 h-5" />
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-arabic">
              {language === 'ur' ? 'میری تعلیم' : 'My Learning'}
            </h3>
          </div>

          {activeCourse && (
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-200 border border-emerald-400/30 font-semibold font-arabic">
              {language === 'ur' ? 'جاری کورس' : 'Active Course'}
            </span>
          )}
        </div>

        {activeCourse ? (
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3.5 max-w-2xl flex-1">
              {/* Course Name */}
              <div>
                <span className="text-xs font-bold text-amber-300 font-arabic">
                  {language === 'ur' ? activeCourse.categoryUrdu : activeCourse.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug font-arabic mt-0.5">
                  {language === 'ur' ? activeCourse.titleUrdu : activeCourse.titleEn}
                </h2>
              </div>

              {/* Current Lesson */}
              {currentLesson && (
                <div className="bg-white/10 rounded-2xl p-3.5 border border-white/15 backdrop-blur-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200 font-semibold font-arabic">
                      {language === 'ur' ? 'موجودہ سبق:' : 'Current Lesson:'}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white font-arabic">
                      {language === 'ur' ? currentLesson.titleUrdu : currentLesson.titleEn}
                    </p>
                  </div>
                </div>
              )}

              {/* Progress percentage & Progress bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-xs font-bold font-arabic">
                  <span className="text-emerald-200">
                    {language === 'ur' ? 'پیش رفت (Progress):' : 'Course Progress:'}
                  </span>
                  <span className="text-amber-300 text-sm font-black">
                    {progressPercent}%
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-3 bg-emerald-950/70 rounded-full overflow-hidden border border-emerald-400/20 p-0.5">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full transition-all duration-500 shadow-xs"
                    style={{ width: `${Math.max(5, progressPercent)}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-emerald-200/80 font-arabic">
                  <span>
                    {completedLessonCount} {language === 'ur' ? 'اسباق مکمل' : 'completed'} / {activeCourse.lessons.length} {language === 'ur' ? 'کل اسباق' : 'total'}
                  </span>
                  <span>
                    {activeCourse.lessons.length - completedLessonCount > 0 
                      ? `${activeCourse.lessons.length - completedLessonCount} ${language === 'ur' ? 'اسباق باقی' : 'remaining'}`
                      : (language === 'ur' ? 'کورس مکمل' : 'Completed')}
                  </span>
                </div>
              </div>
            </div>

            {/* "جاری رکھیں" Button */}
            <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-3 w-full md:w-auto shrink-0">
              <button
                id="home-my-learning-continue-btn"
                onClick={() => onSelectCourse(activeCourse)}
                className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 w-full sm:w-auto font-arabic"
              >
                <Play className="w-5 h-5 fill-slate-950" />
                <span>{language === 'ur' ? 'جاری رکھیں' : 'Continue'}</span>
                <ArrowIcon className="w-5 h-5" />
              </button>

              {userProfile.completedAssessment ? (
                <button
                  onClick={() => onNavigateToTab('mylearning')}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-100 font-semibold text-xs border border-white/15 transition flex items-center justify-center gap-1.5 font-arabic"
                >
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>{language === 'ur' ? 'میرا مکمل روڈ میپ دیکھیں' : 'View Full Roadmap'}</span>
                </button>
              ) : (
                <button
                  onClick={onOpenAssessment}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-100 font-semibold text-xs border border-white/15 transition flex items-center justify-center gap-1.5 font-arabic"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-300" />
                  <span>{language === 'ur' ? 'روڈ میپ اسیسمنٹ' : 'Personal Assessment'}</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Empty state: "ابھی کوئی کورس شروع نہیں کیا" + "Skill تلاش کریں" button */
          <div className="relative z-10 py-6 px-4 sm:px-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
            <div className="space-y-2 max-w-lg">
              <h4 className="text-xl sm:text-2xl font-black text-white font-arabic">
                {language === 'ur' ? 'ابھی کوئی کورس شروع نہیں کیا' : 'No course started yet'}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-arabic">
                {language === 'ur'
                  ? 'اپنی پسند اور ضرورت کے مطابق موبائل اسکل، AI، کینوا، زراعت یا کاروبار کا ہنر منتخب کریں اور سیکھنا شروع کریں۔'
                  : 'Choose a practical skill in mobile literacy, AI, Canva, agriculture, or business to begin.'}
              </p>
            </div>

            <button
              id="home-my-learning-explore-skills-btn"
              onClick={() => onNavigateToTab('skills')}
              className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shrink-0 font-arabic"
            >
              <Search className="w-4 h-4 text-slate-950" />
              <span>{language === 'ur' ? 'Skill تلاش کریں' : 'Explore Skills'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* 2.2. SECTION: "میرا آج کا سفر" (Daily Smart Journey - 10m/20m/30m/60m+ Progressive Flow) */}
      <DailySmartJourneyCard
        language={language}
        userProfile={userProfile}
        onCompleteJourney={(timeLength, points, reflectionText, lessonId, missionId) => {
          if (onCompleteDailyJourney) {
            onCompleteDailyJourney(timeLength, points, reflectionText, lessonId, missionId);
          }
        }}
        onOpenLesson={onOpenLesson}
        onOpenAITeacherWithPrompt={onOpenAITeacher}
        onNavigateToTab={onNavigateToTab}
      />

      {/* 2.3. SECTION: "میرے لیے کیا نیا ہے؟" (Personalized Smart Discover Experience) */}
      <DiscoverWhatsNewSection
        language={language}
        userProfile={userProfile}
        onSelectCourseById={(courseId) => {
          const course = COURSES_DATA.find(c => c.id === courseId);
          if (course) onSelectCourse(course);
        }}
        onOpenAITeacherWithPrompt={onOpenAITeacher}
        onNavigateToTab={onNavigateToTab}
        onDismissDiscoverItem={onDismissDiscoverItem}
        onFeedbackDiscoverItem={onFeedbackDiscoverItem}
      />

      {/* 2.4. SECTION: "آج کا مشن" (Lightweight Real-Life Mission System) */}
      <RealLifeMissionCard
        language={language}
        userProfile={userProfile}
        onCompleteMission={(missionId, points, reflectionText, moodTag) => {
          if (onCompleteMission) {
            onCompleteMission(missionId, points, reflectionText, moodTag);
          }
        }}
        onOpenAITeacherWithPrompt={onOpenAITeacher}
        onSelectCourseById={(courseId) => {
          const course = COURSES_DATA.find(c => c.id === courseId);
          if (course) onSelectCourse(course);
        }}
      />

      {/* 2.4. SECTION: "میرا اگلا بہترین قدم" (Personal Growth Engine Smart Recommendation Card) */}
      <PersonalGrowthCard
        language={language}
        userProfile={userProfile}
        onOpenGrowthModal={() => onOpenGrowthModal && onOpenGrowthModal()}
        onSelectCourse={onSelectCourse}
        onOpenIslamicModal={(idx) => onOpenIslamicModal && onOpenIslamicModal(idx)}
        onOpenAITeacherWithPrompt={onOpenAITeacher}
      />

      {/* 2.5. SECTION: "قرآن و حدیث سے رہنمائی" (Daily Quran & Hadith Guidance Module) */}
      <IslamicGuidanceCard
        language={language}
        userProfile={userProfile}
        onOpenModal={(idx) => onOpenIslamicModal && onOpenIslamicModal(idx)}
        onQuickComplete={(id) => onCompleteIslamicLesson && onCompleteIslamicLesson(id)}
      />

      {/* 2.6. SECTION: "سوچیں اور محفوظ فیصلہ کریں" (Think Before You Act / Decision & Character Protection) */}
      <ThinkBeforeYouActCard
        language={language}
        userProfile={userProfile}
        onOpenAITeacher={onOpenAITeacher}
        onCompletePracticeScenario={(id, pts) => {
          if (onCompleteLifeLesson) {
            onCompleteLifeLesson(id, pts, 'Completed Real Life Practice Scenario');
          }
        }}
      />

      {/* 2.65. SECTION: "میں نے سیکھا → مجھے یاد رہا → میں نے عمل کیا" (Learn -> Remember -> Practice Retention Cycle) */}
      <LearnRememberPracticeCard
        language={language}
        userProfile={userProfile}
        onOpenAITeacherWithPrompt={onOpenAITeacher}
        onAwardGrowthPoints={(pts, reason) => {
          if (onCompleteLifeLesson) {
            onCompleteLifeLesson('retention-review-practice', pts, reason);
          }
        }}
      />

      {/* 2.7. SECTION: "🌱 آج کا اچھا کام" (Good Deeds & Positive Impact Engine) */}
      <GoodDeedCard
        language={language}
        userProfile={userProfile}
        onCompleteGoodDeed={(deed) => onCompleteGoodDeed && onCompleteGoodDeed(deed)}
        onOpenAITeacher={onOpenAITeacher}
      />

      {/* 2.75. SECTION: "📚 علم کا خزانہ" (Knowledge Library Hub - 14 Categories) */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-5 sm:p-6 text-white shadow-lg border border-emerald-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold font-arabic">
              <Library className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'ur' ? '14 بنیادی موضوعات' : '14 Key Subject Areas'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black font-arabic">
              {language === 'ur' ? 'علم کا خزانہ (Knowledge Library)' : 'Knowledge Library'}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-arabic leading-relaxed">
              {language === 'ur'
                ? 'قرآن، حدیث، سیرت، صحابہ کرامؓ، مالیاتی شعور، جدید اے آئی اور عملی زندگی کے منتخب اسباق اور عملی اقدامات۔'
                : 'Verified insights from Quran, Hadith, Seerah, Sahaba, Money, AI & Life Skills.'}
            </p>
          </div>

          <button
            id="home-open-library-btn"
            onClick={() => onNavigateToTab('library')}
            className="w-full md:w-auto px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 font-arabic"
          >
            <span>{language === 'ur' ? 'خزانہ کھولیں اور سیکھیں' : 'Open Library'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Mini Preview Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 mt-3 border-t border-white/10 no-scrollbar text-xs font-arabic">
          {KNOWLEDGE_CATEGORIES_META.slice(0, 6).map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigateToTab('library')}
              className="px-2.5 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 text-[11px] whitespace-nowrap transition"
            >
              {language === 'ur' ? cat.titleUrdu : cat.titleEn}
            </button>
          ))}
          <button
            onClick={() => onNavigateToTab('library')}
            className="px-2.5 py-1 rounded-xl bg-emerald-500/30 hover:bg-emerald-500/40 text-emerald-200 text-[11px] font-bold whitespace-nowrap transition"
          >
            +{KNOWLEDGE_CATEGORIES_META.length - 6} {language === 'ur' ? 'مزید' : 'more'}
          </button>
        </div>
      </div>

      {/* 2.8. SECTION: "💡 زندگی کی عملی مہارتیں" (Practical Life Skills: Money, Mind, Business, Communication, High-Income Skills, Decisions, People, Leadership, Time, Books, Action) */}
      <PracticalLifeSkillsSection
        language={language}
        userProfile={userProfile}
        onOpenAITeacher={onOpenAITeacher}
        onCompleteLifeLesson={(lessonId, points, reflectionText) => {
          if (onCompleteLifeLesson) {
            onCompleteLifeLesson(lessonId, points, reflectionText);
          }
        }}
      />

      {/* 2.9. SECTION: "🧭 میرا زندگی کا راستہ" (Personalized Life Roadmap connecting Skills, Islamic Ethics, Practical Life Skills & AI Coach) */}
      <MyLifeRoadmapSection
        language={language}
        userProfile={userProfile}
        onOpenAITeacher={onOpenAITeacher}
        onSelectCourse={onSelectCourse}
        onCompleteDailyTask={onCompleteDailyTask}
        dailyTaskCompleted={dailyTaskCompleted}
      />

      {/* 3. SECTION: "آج کے 3 کام" (Today's 3 Tasks) */}
      <div className="bg-slate-50/80 dark:bg-slate-900/40 rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-arabic">
                {language === 'ur' ? 'آج کے 3 کام' : "Today's 3 Tasks"}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-arabic">
              {language === 'ur' 
                ? 'روزانہ کے ۳ آسان اور پریکٹیکل اقدامات — عمر ۱۰ سے ۷۰+ سال کے تمام ساتھیوں کے لیے'
                : '3 simple and practical daily actions — tailored for all learners aged 10 to 70+'}
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full self-start sm:self-auto">
            {language === 'ur' ? 'روزانہ کی مشق' : 'Daily Practice'}
          </span>
        </div>

        {/* 3 Tasks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Task 1: Today's Lesson */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                  1
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  {language === 'ur' ? 'آج کا سبق' : "Today's Lesson"}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-2 font-arabic group-hover:text-emerald-700 transition">
                {language === 'ur' ? todaysLesson.titleUrdu : todaysLesson.titleEn}
              </h4>

              <p className="text-xs text-slate-600 line-clamp-2 mb-4 font-arabic">
                {language === 'ur' ? todaysCourse.descriptionUrdu : todaysCourse.descriptionEn}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {todaysLesson.durationMinutes} {language === 'ur' ? 'منٹ کا آسان سبق' : 'mins lesson'}
              </span>
              <button
                id="home-start-task-1-btn"
                onClick={() => onSelectCourse(todaysCourse)}
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs transition"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{language === 'ur' ? 'سبق شروع کریں' : 'Start Lesson'}</span>
              </button>
            </div>
          </div>

          {/* Task 2: Today's Practical Task */}
          <div className={`rounded-2xl p-5 border shadow-sm transition flex flex-col justify-between ${
            dailyTaskCompleted ? 'bg-emerald-50/80 border-emerald-300' : 'bg-white border-slate-200 hover:shadow-md'
          }`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="w-7 h-7 rounded-xl bg-amber-500 text-white font-black text-xs flex items-center justify-center shadow-xs">
                  2
                </span>
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  +25 {language === 'ur' ? 'پوائنٹس' : 'pts'}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-2 font-arabic">
                {language === 'ur' ? todaysCourse.practicalTask.titleUrdu : todaysCourse.practicalTask.titleEn}
              </h4>

              <p className="text-xs text-slate-600 line-clamp-2 mb-4 font-arabic">
                {language === 'ur' ? todaysCourse.practicalTask.instructionsUrdu : todaysCourse.practicalTask.instructionsEn}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                id="home-complete-task-2-btn"
                onClick={onCompleteDailyTask}
                disabled={dailyTaskCompleted}
                className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition ${
                  dailyTaskCompleted
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-amber-600 hover:bg-amber-700 text-white shadow-xs'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {dailyTaskCompleted 
                    ? (language === 'ur' ? 'ماشاءاللہ! مکمل ہوا' : 'Task Done! (+25 pts)')
                    : (language === 'ur' ? 'عملی کام مکمل کریں' : 'Mark as Done')}
                </span>
              </button>
            </div>
          </div>

          {/* Task 3: AI Teacher Question & Guidance */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="w-7 h-7 rounded-xl bg-orange-500 text-white font-black text-xs flex items-center justify-center shadow-xs">
                  3
                </span>
                <span className="text-xs font-bold text-orange-900 bg-orange-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Bot className="w-3 h-3 text-orange-600" />
                  {language === 'ur' ? 'AI استاد' : 'AI Teacher'}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 mb-1.5 line-clamp-2 font-arabic group-hover:text-orange-600 transition">
                {language === 'ur' ? 'AI استاد سے سوال پوچھیں' : 'Ask AI Teacher'}
              </h4>

              <p className="text-xs text-slate-600 line-clamp-2 mb-4 font-arabic">
                {language === 'ur'
                  ? 'کسی بھی لفظ، ہنر، روزمرہ مسئلے یا موبائل استعمال پر سادہ اردو میں فوری رہنمائی حاصل کریں۔'
                  : 'Get instant, gentle guidance on any skill, vocabulary, or phone tool in simple words.'}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                id="home-ask-ai-task-3-btn"
                onClick={() => onOpenAITeacher()}
                className="w-full py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs transition"
              >
                <Bot className="w-4 h-4" />
                <span>{language === 'ur' ? 'ابھی سوال پوچھیں' : 'Ask Question'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. "میرا راستہ دریافت کریں" (Discover My Learning Path / Assessment) */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-800 to-emerald-900 rounded-3xl p-5 sm:p-6 text-white shadow-lg border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'ur' ? 'ذاتی اسکل اسیسمنٹ' : 'Personal Skill Assessment'}
            </span>
            {userProfile.completedAssessment && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-semibold border border-emerald-400/30">
                {language === 'ur' ? 'روڈ میپ فعال ہے' : 'Path Active'}
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white font-arabic">
            {language === 'ur' ? 'میرا راستہ دریافت کریں' : 'Discover My Learning Path'}
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-arabic">
            {language === 'ur'
              ? 'صرف ۱۰–۱۲ آسان سوالات کے جواب دیں اور اپنی عمر، دستیاب وقت، تعلیم اور مقصد کے مطابق بہترین ہنر و ۷ روزہ عملی روڈ میپ حاصل کریں۔'
              : 'Answer 10-12 quick questions to get personalized skill recommendations tailored to your age, device, daily time, and life goals.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-2.5 w-full md:w-auto shrink-0">
          <button
            id="home-discover-my-path-btn"
            onClick={onOpenAssessment}
            className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 font-arabic"
          >
            <Compass className="w-4 h-4 text-slate-950" />
            <span>{language === 'ur' ? 'میرا راستہ دریافت کریں' : 'Discover My Path'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>

          {userProfile.completedAssessment && (
            <button
              onClick={() => onNavigateToTab('mylearning')}
              className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/20 transition flex items-center justify-center gap-1.5 font-arabic"
            >
              <Award className="w-3.5 h-3.5 text-emerald-300" />
              <span>{language === 'ur' ? 'فعال روڈ میپ کھولیں' : 'View My Active Roadmap'}</span>
            </button>
          )}
        </div>
      </div>

      {/* 5. Vision Banner: Learn -> Practice -> Improve -> Help World */}
      <VisionBanner language={language} onOpenDetails={onOpenVisionModal} />

      {/* 6. "میرا عملی منصوبہ" 5-Step Action Plan Section */}
      <MyActionPlanSection
        language={language}
        userProfile={userProfile}
        onSelectCourse={onSelectCourse}
        onStepCompleted={onCompleteDailyTask}
      />

      {/* 7. Age-Cohort Personalized Roadmap Banner */}
      <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-5 border border-emerald-500/20 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 font-semibold">
                {language === 'ur' ? t.recommendedSkillsForYou : 'Personalized Recommendations'}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mt-1 font-arabic">
              {language === 'ur' ? ageRec.titleUrdu : ageRec.titleEn}
            </h3>
          </div>

          <button
            id="home-retake-assessment-btn"
            onClick={onOpenAssessment}
            className="text-xs bg-white/10 hover:bg-white/20 text-emerald-200 px-3 py-1.5 rounded-lg border border-white/15 self-start sm:self-auto transition font-medium font-arabic"
          >
            {language === 'ur' ? 'اسکل اسیسمنٹ تبدیل کریں' : 'Retake Assessment'}
          </button>
        </div>

        {/* Recommended Skills Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mt-3">
          {(language === 'ur' ? ageRec.skillsUrdu : ageRec.skillsEn).map((skillName, idx) => (
            <div 
              key={idx}
              onClick={() => onNavigateToTab('skills')}
              className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-2.5 flex items-center gap-2.5 transition cursor-pointer"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-500/40 flex items-center justify-center text-emerald-300 text-xs font-bold shrink-0">
                {idx + 1}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white/95 line-clamp-1 font-arabic">
                {skillName}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Recommended Courses Carousel / Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-arabic">
              {language === 'ur' ? 'میرے لیے بہترین Skills و کورسز' : 'Recommended Practical Courses'}
            </h3>
            <p className="text-xs text-slate-500 font-arabic">
              {language === 'ur' ? 'عملی سیکھنے کا ماڈل: سبق → کوئز → مشق → پروجیکٹ' : 'Model: Lesson → Quiz → Practice → Project'}
            </p>
          </div>

          <button
            onClick={() => onNavigateToTab('skills')}
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 font-arabic"
          >
            <span>{language === 'ur' ? 'تمام دیکھیں' : 'View All'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between group"
            >
              <div className={`p-4 bg-gradient-to-r ${course.coverGradient} text-white relative`}>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full font-medium">
                    {language === 'ur' ? course.categoryUrdu : course.category}
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full font-medium">
                    {language === 'ur' ? course.difficultyUrdu : course.difficulty}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:underline font-arabic">
                  {language === 'ur' ? course.titleUrdu : course.titleEn}
                </h4>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-3 font-arabic">
                  {language === 'ur' ? course.descriptionUrdu : course.descriptionEn}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-medium text-slate-700 font-arabic">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    {course.lessons.length} {language === 'ur' ? 'اسباق' : 'Lessons'}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 font-arabic">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    {language === 'ur' ? 'عملی پروجیکٹ' : 'Hands-on Project'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 9. "اپنے علاقے کے لیے کچھ کریں" Community Section */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-5">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-xs">
              <Users className="w-5 h-5 text-emerald-700" />
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic">
                {language === 'ur' ? 'اپنے علاقے کے لیے کچھ کریں' : 'Do Something for Your Area'}
              </h3>
              <span className="text-[11px] bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold px-2.5 py-0.5 rounded-full font-arabic">
                {language === 'ur' ? 'کمیونٹی خدمت' : 'Community Action'}
              </span>
            </div>
          </div>

          <button
            onClick={() => onNavigateToTab('community')}
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 font-arabic transition"
          >
            <span>{language === 'ur' ? 'کمیونٹی فورم دیکھیں' : 'View Community Forum'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Simple Options Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              id: 'family' as const,
              titleUrdu: 'اپنے خاندان کی مدد',
              titleEn: 'Help Your Family',
              icon: Users,
              sampleActionUrdu: 'اپنے گھر کے کسی فرد کو ایک مفید Skill سکھائیں۔',
              sampleActionEn: 'Teach a useful digital or practical skill to a family member at home.',
            },
            {
              id: 'village' as const,
              titleUrdu: 'اپنے گاؤں/علاقے کی مدد',
              titleEn: 'Help Your Village / Area',
              icon: MapPin,
              sampleActionUrdu: 'اپنے علاقے کا ایک مسئلہ identify کریں اور اس کا ممکنہ حل لکھیں۔',
              sampleActionEn: 'Identify a local challenge in your area and write a possible solution.',
            },
            {
              id: 'society' as const,
              titleUrdu: 'معاشرے کی خدمت',
              titleEn: 'Serve Society',
              icon: HeartHandshake,
              sampleActionUrdu: 'کسی دوسرے شخص کی کوئی مفید کام میں مدد کریں۔',
              sampleActionEn: 'Assist someone in the community with a beneficial task or skill.',
            },
          ].map((opt) => {
            const isSelected = selectedCommunityOption === opt.id;
            const isStarted = !!startedCommunitySteps[opt.id];
            const OptIcon = opt.icon;

            return (
              <button
                key={opt.id}
                id={`community-opt-${opt.id}`}
                onClick={() => setSelectedCommunityOption(opt.id)}
                className={`p-4 rounded-2xl border text-start transition flex flex-col justify-between gap-3 relative ${
                  isSelected
                    ? 'bg-emerald-50/80 border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                    : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200/90 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 w-full">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                    isSelected ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    <OptIcon className="w-4 h-4" />
                  </div>
                  {isStarted && (
                    <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full flex items-center gap-1 font-arabic">
                      <CheckCircle2 className="w-3 h-3" />
                      {language === 'ur' ? 'شروع شدہ' : 'Started'}
                    </span>
                  )}
                </div>

                <div>
                  <h4 className={`text-sm sm:text-base font-bold font-arabic ${
                    isSelected ? 'text-emerald-950' : 'text-slate-900'
                  }`}>
                    {language === 'ur' ? opt.titleUrdu : opt.titleEn}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Option Action Details Card */}
        {(() => {
          const currentOptionData = {
            family: {
              titleUrdu: 'اپنے خاندان کی مدد',
              titleEn: 'Help Your Family',
              sampleActionUrdu: 'اپنے گھر کے کسی فرد کو ایک مفید Skill سکھائیں۔',
              sampleActionEn: 'Teach a useful digital or practical skill to a family member at home.',
              hintUrdu: 'مثلاً: والدین یا بہن بھائیوں کو ایزی پیسہ، واٹس ایپ یا کوئی نئی عملی مہارت سکھائیں۔',
              hintEn: 'E.g., Teach digital payments, messaging tools, or a productive skill to family members.',
            },
            village: {
              titleUrdu: 'اپنے گاؤں/علاقے کی مدد',
              titleEn: 'Help Your Village / Area',
              sampleActionUrdu: 'اپنے علاقے کا ایک مسئلہ identify کریں اور اس کا ممکنہ حل لکھیں۔',
              sampleActionEn: 'Identify a local challenge in your area and write a possible solution.',
              hintUrdu: 'مثلاً: پانی کے ذخیرے، گلی کی صفائی، راستے کی بہتری یا پودے لگانے کا عملی قدم۔',
              hintEn: 'E.g., Identify water conservation, cleanliness, or neighborhood improvement ideas.',
            },
            society: {
              titleUrdu: 'معاشرے کی خدمت',
              titleEn: 'Serve Society',
              sampleActionUrdu: 'کسی دوسرے شخص کی کوئی مفید کام میں مدد کریں۔',
              sampleActionEn: 'Assist someone in the community with a beneficial task or skill.',
              hintUrdu: 'مثلاً: کسی کو سرکاری فارم بھرنے، پڑھنے، یا ہنر سیکھنے میں بلا معاوضہ مدد فراہم کریں۔',
              hintEn: 'E.g., Help someone fill an official form, read, or learn a practical skill.',
            },
          }[selectedCommunityOption];

          const isActionStarted = !!startedCommunitySteps[selectedCommunityOption];

          return (
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/40 rounded-2xl p-5 border border-emerald-200/80 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-800 font-arabic bg-emerald-100 px-2.5 py-0.5 rounded-md">
                    {language === 'ur' ? 'منتخب کردہ عملی عمل (Sample Action):' : 'Sample Practical Action:'}
                  </span>
                </div>
                
                <h4 className="text-base sm:text-lg font-black text-slate-900 font-arabic leading-snug">
                  {language === 'ur' ? currentOptionData.sampleActionUrdu : currentOptionData.sampleActionEn}
                </h4>

                <p className="text-xs text-slate-600 font-arabic">
                  {language === 'ur' ? currentOptionData.hintUrdu : currentOptionData.hintEn}
                </p>
              </div>

              {/* Action Button & Progress State */}
              <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                {isActionStarted ? (
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm font-arabic shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-100" />
                    <span>{language === 'ur' ? 'میرا قدم شروع ہوگیا' : 'My step has started!'}</span>
                  </div>
                ) : (
                  <button
                    id="home-community-practical-step-btn"
                    onClick={() => handleStartCommunityStep(selectedCommunityOption)}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 font-arabic"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{language === 'ur' ? 'میرا عملی قدم' : 'My Practical Step'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                )}

                {isActionStarted && (
                  <span className="text-xs text-emerald-800 font-arabic font-medium">
                    {language === 'ur' ? 'ماشاءاللہ! آپ کا عملی قدم جاری ہے۔' : 'Progress started. Keep up the good work!'}
                  </span>
                )}
              </div>
            </div>
          );
        })()}

        {/* Existing Community & Elder Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Community Highlight */}
          <div className="bg-emerald-50/40 rounded-2xl p-4 sm:p-5 border border-emerald-200/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-900 bg-emerald-200/80 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-arabic">
                  <Users className="w-3.5 h-3.5" />
                  {t.communityHighlight}
                </span>
                <span className="text-[11px] text-emerald-700 font-medium">
                  {t.pilotAreaLabel}
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-2 mb-1 font-arabic">
                {language === 'ur' ? COMMUNITY_POSTS_DATA[0].titleUrdu : COMMUNITY_POSTS_DATA[0].titleEn}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2 mb-3 font-arabic">
                {language === 'ur' ? COMMUNITY_POSTS_DATA[0].contentUrdu : COMMUNITY_POSTS_DATA[0].contentEn}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-emerald-200/60">
              <span className="text-xs text-slate-700 font-medium font-arabic">
                {COMMUNITY_POSTS_DATA[0].authorName}
              </span>
              <button
                onClick={() => onNavigateToTab('community')}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 font-arabic"
              >
                <span>{language === 'ur' ? 'برادری دیکھیں' : 'Join Discussion'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Elder Knowledge Banner */}
          <div className="bg-amber-50/60 rounded-2xl p-4 sm:p-5 border border-amber-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-900 bg-amber-200/90 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-arabic">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  {t.elderKnowledgeTitle}
                </span>
                <span className="text-[11px] text-amber-800 font-semibold font-arabic">
                  {language === 'ur' ? 'استاد و رہنما' : 'Wisdom'}
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-2 mb-1 font-arabic">
                {language === 'ur' ? 'ہمارے بزرگ، ہماری شناخت اور زندگی کا نچوڑ' : 'Wisdom of our Elders'}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2 mb-3 font-arabic">
                {language === 'ur'
                  ? 'روایتی کاشتکاری، دستکاری، مقامی تاریخ اور اخلاقی اصولوں کا انمول خزانہ۔'
                  : 'Preserving traditional farming, crafts, local history, and wisdom.'}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-amber-200/70">
              <span className="text-xs text-amber-900 font-medium font-arabic">
                {language === 'ur' ? 'تجربات کا خزانہ' : 'Stories'}
              </span>
              <button
                onClick={() => onNavigateToTab('elders')}
                className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 font-arabic"
              >
                <span>{language === 'ur' ? 'بزرگوں کی باتیں' : 'Read Wisdom'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 10. My Area Pilot Launcher */}
      <div 
        onClick={() => onNavigateToTab('myarea')}
        className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:border-emerald-400/80 transition cursor-pointer flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-arabic">
                {language === 'ur' ? 'میرا علاقہ (ڈوبے، برنالہ، آزاد کشمیر)' : 'My Area (Dobay, Barnala, Azad Kashmir)'}
              </h4>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full font-arabic">
                {language === 'ur' ? 'پائلٹ پراجیکٹ' : 'Pilot'}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-arabic">
              {language === 'ur' ? 'پانی، راستے، صفائی اور تعلیمی مسائل کے عملی حل میں حصہ لیں۔' : 'Explore and contribute to local water, roads, education, and health initiatives.'}
            </p>
          </div>
        </div>

        <button 
          id="home-my-area-shortcut-btn"
          className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition shrink-0"
        >
          <ArrowIcon className="w-4 h-4" />
        </button>
      </div>

      {/* 11. "میری Skills" (My Skills Section) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold shadow-xs">
              <FolderKanban className="w-5 h-5 text-teal-700" />
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic">
              {language === 'ur' ? 'میری Skills' : 'My Skills'}
            </h3>
          </div>

          {top3Skills.length > 0 && (
            <button
              id="home-view-all-skills-header-btn"
              onClick={() => onNavigateToTab('portfolio')}
              className="text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 font-arabic transition"
            >
              <span>{language === 'ur' ? 'تمام Skills دیکھیں' : 'View All Skills'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          )}
        </div>

        {top3Skills.length > 0 ? (
          <div className="space-y-4">
            {/* Top 3 Skills Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {top3Skills.map((skill, idx) => {
                const skillName = language === 'ur' ? skill.nameUrdu : skill.nameEn;
                const levelName = language === 'ur' ? skill.levelUrdu : (skill.level || 'Beginner');

                return (
                  <div
                    key={skill.id || idx}
                    className="bg-slate-50 hover:bg-slate-100/90 rounded-2xl p-4 border border-slate-200/80 transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-teal-100/90 text-teal-900 font-bold border border-teal-200/60 font-arabic">
                          {levelName}
                        </span>
                        <span className="text-xs font-black text-teal-700 font-arabic">
                          {skill.progressPercent}%
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 font-arabic group-hover:text-teal-800 transition line-clamp-2 mb-3">
                        {skillName}
                      </h4>
                    </div>

                    {/* Progress details and small progress bar */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-arabic">
                        <span>{language === 'ur' ? 'پیش رفت:' : 'Progress:'}</span>
                        <span className="font-bold text-slate-700 font-arabic">
                          {skill.progressPercent}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(4, skill.progressPercent)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* "تمام Skills دیکھیں" Button */}
            <div className="pt-1 flex justify-end">
              <button
                id="home-view-all-skills-btn"
                onClick={() => onNavigateToTab('portfolio')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs sm:text-sm border border-teal-200/80 flex items-center justify-center gap-2 transition font-arabic"
              >
                <span>{language === 'ur' ? 'تمام Skills دیکھیں' : 'View All Skills'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Empty state */
          <div className="py-6 px-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-arabic">
                {language === 'ur' ? 'ابھی کوئی Skill منتخب نہیں کی' : 'No skills selected yet'}
              </h4>
              <p className="text-xs text-slate-500 font-arabic mt-1">
                {language === 'ur'
                  ? 'اپنی پسند اور مقصد کے مطابق ہنر منتخب کریں اور سیکھنا شروع کریں۔'
                  : 'Choose a skill that matches your learning goals to start.'}
              </p>
            </div>

            <button
              id="home-explore-skills-empty-btn"
              onClick={() => onNavigateToTab('skills')}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition flex items-center justify-center gap-2 shrink-0 font-arabic"
            >
              <Search className="w-4 h-4 text-slate-950" />
              <span>{language === 'ur' ? 'Skill تلاش کریں' : 'Explore Skills'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* 12. "میرے لیے ممکنہ مواقع" (Potential Opportunities for Me) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold shadow-xs">
              <Briefcase className="w-5 h-5 text-indigo-700" />
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic">
                {language === 'ur' ? 'میرے لیے ممکنہ مواقع' : 'Potential Opportunities for Me'}
              </h3>
              <span className="text-[11px] bg-amber-100 text-amber-900 border border-amber-300 font-bold px-2.5 py-0.5 rounded-full font-arabic">
                Demo / Sample
              </span>
            </div>
          </div>

          <button
            id="home-view-all-opps-header-btn"
            onClick={() => onNavigateToTab('opportunities')}
            className="text-xs sm:text-sm font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1 font-arabic transition"
          >
            <span>{language === 'ur' ? 'تمام مواقع دیکھیں' : 'View All Opportunities'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Prototype & Educational Disclaimer Notice */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-[11px] sm:text-xs text-slate-600 font-arabic leading-relaxed flex items-start gap-2">
          <span className="text-amber-600 font-black text-sm shrink-0">ℹ</span>
          <span>
            {language === 'ur'
              ? 'یہ تمام مواقع تعلیمی اور معلوماتی ڈیمو نمونے (Demo / Sample) ہیں تاکہ آپ کو ہنر کے بعد عملی راستے سمجھنے میں رہنمائی ملے۔ یہ کوئی حقیقی ملازمت یا یقینی آمدنی کا دعویٰ نہیں ہے۔'
              : 'These are educational demo samples to illustrate practical skill applications. They are not real job offers or guarantees of income.'}
          </span>
        </div>

        {/* Opportunities List or Empty State */}
        {matchedOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchedOpportunities.map((opp, idx) => {
              const oppTitle = language === 'ur' ? opp.titleUrdu : opp.titleEn;
              const oppType = language === 'ur' ? opp.typeUrdu : opp.type;
              const oppSkill = language === 'ur' ? opp.requiredSkillUrdu : opp.requiredSkillEn;
              const oppLevel = language === 'ur' ? opp.levelUrdu : opp.level;
              const oppDesc = language === 'ur' ? opp.shortDescriptionUrdu : opp.shortDescriptionEn;

              return (
                <div
                  key={opp.id || idx}
                  className="bg-slate-50 hover:bg-slate-100/90 rounded-2xl p-4 sm:p-5 border border-slate-200/90 transition flex flex-col justify-between group space-y-3"
                >
                  <div className="space-y-2.5">
                    {/* Tags: Type, Level, Demo Label */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 font-bold border border-indigo-200/70 font-arabic">
                          {oppType}
                        </span>
                        <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/70 font-arabic">
                          {language === 'ur' ? `درجہ: ${oppLevel}` : `Level: ${oppLevel}`}
                        </span>
                      </div>
                      <span className="text-[10px] bg-amber-200/70 text-slate-900 border border-amber-300 font-bold px-2 py-0.5 rounded-md font-arabic">
                        Demo / Sample
                      </span>
                    </div>

                    {/* عنوان (Title) */}
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-arabic group-hover:text-indigo-800 transition line-clamp-2 leading-snug">
                      {oppTitle}
                    </h4>

                    {/* Required Skill & Skill Level */}
                    <div className="bg-white/80 rounded-xl p-2.5 border border-slate-200/60 text-xs space-y-1 font-arabic">
                      <div className="flex items-start gap-1.5 text-slate-700">
                        <span className="font-bold text-slate-900 shrink-0">
                          {language === 'ur' ? 'مطلوبہ ہنر:' : 'Required Skill:'}
                        </span>
                        <span className="text-indigo-700 font-medium">
                          {oppSkill}
                        </span>
                      </div>
                    </div>

                    {/* مختصر وضاحت (Short Description) */}
                    <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed line-clamp-3">
                      {oppDesc}
                    </p>
                  </div>

                  {/* "مزید دیکھیں" Button */}
                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-end">
                    <button
                      id={`home-opp-details-btn-${idx}`}
                      onClick={() => onNavigateToTab('opportunities')}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 font-arabic shadow-xs"
                    >
                      <span>{language === 'ur' ? 'مزید دیکھیں' : 'View Details'}</span>
                      <ArrowIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="py-6 px-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
            <div className="space-y-1 max-w-md">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-arabic">
                {language === 'ur' ? 'ابھی آپ کے لیے کوئی مناسب موقع نہیں ملا۔' : 'No suitable opportunities found for you yet.'}
              </h4>
              <p className="text-xs text-slate-500 font-arabic leading-relaxed">
                {language === 'ur'
                  ? 'مزید مہارتیں اور عملی اسکلز حاصل کریں تاکہ آپ کے لیے متعلقہ ڈیمو مواقع ظاہر ہوں۔'
                  : 'Learn more skills to discover relevant demonstration opportunities.'}
              </p>
            </div>

            <button
              id="home-opps-learn-more-skills-btn"
              onClick={() => onNavigateToTab('skills')}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition flex items-center justify-center gap-2 shrink-0 font-arabic"
            >
              <BookOpen className="w-4 h-4 text-slate-950" />
              <span>{language === 'ur' ? 'مزید Skill سیکھیں' : 'Learn More Skills'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* 13. Footer: Vision, Purpose & Trust */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 font-arabic">
        <div className="space-y-1 text-center sm:text-start">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <span className="text-sm font-black text-slate-900">
              {language === 'ur' ? 'سیکھو — Seekho' : 'Seekho'}
            </span>
            <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              {language === 'ur' ? 'بانی: وسیم صابر (Waseem Sabir)' : 'Founder: Waseem Sabir'}
            </span>
          </div>
          <p className="text-xs text-slate-700 font-bold leading-relaxed">
            {language === 'ur'
              ? '”سیکھو — علم کو عمل، کردار اور بہتر زندگی سے جوڑنے کی کوشش ہے۔“'
              : '“Seekho is a dedicated effort to connect knowledge with action, character, and a better life.”'}
          </p>
        </div>

        <button
          id="home-open-vision-trust-btn"
          onClick={onOpenVisionModal}
          className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 border border-slate-200 text-xs font-bold transition shadow-xs flex items-center gap-2 shrink-0"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>{language === 'ur' ? 'تعارف، رازداری و اعتماد' : 'About, Privacy & Trust'}</span>
        </button>
      </div>
    </div>
  );
};
