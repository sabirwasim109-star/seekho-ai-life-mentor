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
import { DailyPurposeSection } from './DailyPurposeSection';
import { PersonalLifeDirectionSection } from './PersonalLifeDirectionSection';
import { AIPersonalMentorBanner } from './AIPersonalMentorBanner';
import { FutureGenerationsSection } from './FutureGenerationsSection';
import { FamilyGrowthHubSection } from './FamilyGrowthHubSection';
import { CommunityImpactTracker } from './CommunityImpactTracker';
import { JourneyTimeLength } from '../types';
import { getPersonalizedCourseForUser } from '../utils/personalLearningPathEngine';
import { VoiceInputButton, FieldAudioSpeaker } from './AudioSpeechControls';

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
  onOpenMindLessonModal?: () => void;
  onDismissDiscoverItem?: (itemId: string) => void;
  onFeedbackDiscoverItem?: (itemId: string, helpful: boolean) => void;
  onCompletePurposeAction?: (actionId: string, points: number, title: string) => void;
  onLogCommunityDeed?: (deedId: string, points: number, note: string) => void;
  onTriggerSmartSearch?: (query: string) => void;
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
  onOpenMindLessonModal,
  onDismissDiscoverItem,
  onFeedbackDiscoverItem,
  onCompletePurposeAction,
  onLogCommunityDeed,
  onTriggerSmartSearch,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const queryToSearch = searchQuery.trim();
    if (!queryToSearch) return;
    if (onTriggerSmartSearch) {
      onTriggerSmartSearch(queryToSearch);
    }
  };

  const handleSuggestionClick = (suggestionText: string) => {
    setSearchQuery(suggestionText);
    if (onTriggerSmartSearch) {
      onTriggerSmartSearch(suggestionText);
    }
  };

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

  // Dynamic Personal Learning Path Engine Integration
  const personalizedLearning = getPersonalizedCourseForUser(userProfile, COURSES_DATA);

  // Active course & Progress calculation for "میری تعلیم"
  const enrolledCourses = COURSES_DATA.filter((course) =>
    userProfile.enrolledCourseIds?.includes(course.id)
  );
  // Prioritize personalized learning roadmap course, then explicitly enrolled course
  const activeCourse = personalizedLearning.course || (enrolledCourses.length > 0 ? enrolledCourses[0] : null);

  const completedLessonCount = activeCourse
    ? activeCourse.lessons.filter((l) => userProfile.completedLessonIds?.includes(l.id)).length
    : 0;
  const totalLessonsCount = activeCourse ? Math.max(1, activeCourse.lessons.length) : 1;
  const progressPercent = activeCourse
    ? Math.min(100, Math.round((completedLessonCount / totalLessonsCount) * 100))
    : 0;

  const currentLesson = personalizedLearning.lesson || (activeCourse
    ? (activeCourse.lessons.find((l) => !userProfile.completedLessonIds?.includes(l.id)) ||
       activeCourse.lessons[0])
    : null);

  const currentLessonIndex = activeCourse && currentLesson
    ? activeCourse.lessons.findIndex((l) => l.id === currentLesson.id)
    : 0;

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleToggleAudio = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else if (currentLesson) {
      window.speechSynthesis.cancel();
      const textToSpeak = language === 'ur'
        ? `${currentLesson.titleUrdu}۔ ${currentLesson.keyTakeawaysUrdu?.[0] || activeCourse?.descriptionUrdu || ''}`
        : `${currentLesson.titleEn}. ${currentLesson.keyTakeawaysEn?.[0] || activeCourse?.descriptionEn || ''}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak.replace(/[#*`_]/g, ''));
      utterance.lang = language === 'ur' ? 'ur-PK' : 'en-US';
      utterance.rate = 0.9;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleContinueCurrentLesson = () => {
    if (activeCourse && currentLesson) {
      if (onOpenLesson) {
        onOpenLesson(activeCourse.id, currentLesson.id);
      } else {
        onSelectCourse(activeCourse);
      }
    } else if (activeCourse) {
      onSelectCourse(activeCourse);
    }
  };

  // Featured Today's Lesson connected directly to personal roadmap
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
    <div className="space-y-6 sm:space-y-7 pb-24 max-w-5xl mx-auto px-3.5 sm:px-6 pt-2">
      {/* 1. Header Greeting & Context: Compact, Welcoming, Reduced Visual Dominance */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            {/* Identity & Goal Badges */}
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="urdu-badge px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-xs sm:text-sm">
                {language === 'ur' ? `عمر: ${userProfile.ageGroup} سال` : `Age: ${userProfile.ageGroup} yrs`}
              </span>
              <span className="urdu-badge px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm">
                {userProfile.village || 'ڈوبے، برنالہ'}
              </span>
              <span className="urdu-badge px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-bold">
                {language === 'ur' ? `🎯 ہدف: ${userProfile.goals || userProfile.learningGoals?.[0] || 'کمیونٹی سروس'}` : `🎯 Goal: ${userProfile.goals || 'Community'}`}
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-2xl sm:text-3xl font-black text-white font-arabic tracking-normal leading-snug">
              {language === 'ur' ? 'السلام علیکم!' : 'Assalam-o-Alaikum!'}{' '}
              <span className="text-emerald-300">{userProfile.name || (language === 'ur' ? 'معزز ساتھی' : 'Learner')}</span>
            </h1>

            <p className="text-slate-300 text-[15px] sm:text-[16px] font-arabic leading-relaxed">
              {language === 'ur'
                ? 'سیکھو: علم کو عملی زندگی، روزمرہ اخلاق، مفید ہنر اور ترقی سے جوڑنے کا پلیٹ فارم۔'
                : 'Seekho: Connecting knowledge with practical life, ethics, useful skills, and progress.'}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 bg-slate-800/90 p-3 sm:p-4 rounded-2xl border border-slate-700 self-stretch sm:self-auto justify-around shrink-0">
            <div className="text-center px-2">
              <div className="flex items-center justify-center gap-1.5 text-amber-400 font-black text-xl sm:text-2xl font-arabic">
                <Flame className="w-5 h-5 fill-amber-400" />
                <span>{userProfile.streakDays}</span>
              </div>
              <span className="text-xs sm:text-sm text-slate-300 block font-bold font-arabic mt-0.5">
                {language === 'ur' ? 'دن کا تسلسل' : 'Day Streak'}
              </span>
            </div>
            <div className="w-px h-10 bg-slate-700" />
            <div className="text-center px-2">
              <div className="flex items-center justify-center gap-1.5 text-emerald-300 font-black text-xl sm:text-2xl font-arabic">
                <Award className="w-5 h-5" />
                <span>{userProfile.points}</span>
              </div>
              <span className="text-xs sm:text-sm text-slate-300 block font-bold font-arabic mt-0.5">
                {language === 'ur' ? 'پوائنٹس' : 'Skill Points'}
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar: "آپ کیا سیکھنا یا کرنا چاہتے ہیں؟" with 4 example suggestions */}
        <form onSubmit={handleSearchSubmit} className="mt-5 space-y-3">
          <div className="flex items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <label htmlFor="home-search-input" className="text-xs sm:text-sm font-bold text-slate-200 font-arabic">
                {language === 'ur' 
                  ? '🔍 اسمارٹ AI سرچ اور فوری ۷ مرحلہ وار سبق:' 
                  : language === 'dual'
                  ? '🔍 اسمارٹ AI سرچ اور فوری سبق (Smart AI Search & Instant Guide):'
                  : '🔍 Smart AI Search & Instant 7-Step Guide:'}
              </label>
            </div>

            <FieldAudioSpeaker
              id="home-search-bar-audio-speaker"
              text={language === 'ur'
                ? 'آپ کیا سیکھنا یا کرنا چاہتے ہیں؟ اپنا سوال یا موضوع لکھیں یا مائیک پر بولیں، سیکھو اے آئی استاد فوری طور پر ۷ مرحلہ وار عملی سبق تیار کرے گا۔'
                : 'What do you want to learn or do? Type or speak your topic, and Seekho AI Mentor will instantly generate a 7-step practical guide.'}
              language={language}
              size="sm"
              titleUr="سرچ بار کی رہنمائی سنیں"
              titleEn="Listen to search guide"
            />
          </div>

          <div className="relative flex items-center">
            <input
              id="home-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ur' ? 'آپ کیا سیکھنا یا کرنا چاہتے ہیں؟ (مثلاً AI، موبائل، کاروبار...)' : 'What do you want to learn or do? (e.g. AI, mobile, business...)'}
              className="w-full bg-white text-slate-900 placeholder:text-slate-500 pl-11 pr-28 sm:pr-36 py-3.5 sm:py-4 rounded-2xl text-base sm:text-[17px] font-bold shadow-md border-2 border-transparent focus:border-amber-400 focus:outline-none transition-all font-arabic"
            />
            <Search className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 left-4 rtl:left-auto rtl:right-4 pointer-events-none" />
            
            {/* Inline controls inside search input: Clear, Voice Mic, and Search Button */}
            <div className="absolute top-1/2 -translate-y-1/2 right-2 rtl:right-auto rtl:left-2 flex items-center gap-1.5">
              {searchQuery && (
                <button
                  type="button"
                  id="home-search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2 py-1.5 rounded-lg font-bold font-arabic transition"
                  title="Clear"
                >
                  {language === 'ur' ? 'ختم' : 'Clear'}
                </button>
              )}

              <VoiceInputButton
                language={language}
                size="sm"
                tooltipUr="بول کر تلاش کریں"
                tooltipEn="Speak to search"
                onTranscript={(transcript) => {
                  setSearchQuery(transcript);
                  if (onTriggerSmartSearch) {
                    onTriggerSmartSearch(transcript);
                  }
                }}
              />

              <button
                id="home-search-submit-btn"
                type="submit"
                className="px-3 sm:px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-black text-xs sm:text-sm shadow-xs transition font-arabic flex items-center gap-1.5 active:scale-95 shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">{language === 'ur' ? 'سبق بنائیں' : 'Generate'}</span>
              </button>
            </div>
          </div>

          {/* 4 Simple Example Suggestions */}
          <div className="flex items-center gap-2 flex-wrap pt-0.5">
            <span className="text-xs sm:text-sm text-slate-300 font-bold font-arabic shrink-0">
              {language === 'ur' ? 'تجویز کردہ موضوعات:' : 'Quick Topics:'}
            </span>
            {SEARCH_SUGGESTIONS.map((sug, idx) => {
              const text = language === 'ur' ? sug.ur : sug.en;
              const isSelected = searchQuery === text;
              return (
                <button
                  key={idx}
                  type="button"
                  id={`home-search-suggestion-${idx}`}
                  onClick={() => handleSuggestionClick(text)}
                  className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-bold transition-all flex items-center gap-1 font-arabic shadow-xs ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 border border-amber-300 scale-105'
                      : 'bg-slate-800 hover:bg-emerald-900/80 hover:border-emerald-500/50 text-slate-200 border border-slate-700'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>{text}</span>
                </button>
              );
            })}
          </div>

          {/* Search Result Feedback / Notification */}
          {searchQuery && (
            <div className="bg-slate-800/90 rounded-xl px-4 py-2.5 border border-slate-700 flex items-center justify-between text-xs sm:text-sm text-slate-200">
              <span className="font-arabic font-medium">
                {language === 'ur' 
                  ? `نتائج برائے: "${searchQuery}" (${filteredCourses.length} کورسز ملے)`
                  : `Results for: "${searchQuery}" (${filteredCourses.length} matching)`}
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-amber-300 hover:underline font-bold font-arabic"
              >
                {language === 'ur' ? 'تمام کورسز دیکھیں' : 'Reset search'}
              </button>
            </div>
          )}
        </form>
      </div>

      {/* STRATEGIC PRIORITY 1: "آج کا مقصد" (Daily Purpose & Micro-Action System) */}
      <DailyPurposeSection
        language={language}
        userProfile={userProfile}
        onCompletePurposeAction={onCompletePurposeAction}
        onOpenLesson={onOpenLesson}
        onOpenAITeacher={onOpenAITeacher}
        onNavigateToTab={onNavigateToTab}
      />

      {/* STRATEGIC PRIORITY 2: "میرا سفر اور میری سمت" (Multi-Dimensional Journey & Life Direction) */}
      <PersonalLifeDirectionSection
        language={language}
        userProfile={userProfile}
        onOpenAITeacher={onOpenAITeacher}
        onSelectCourse={onSelectCourse}
        onNavigateToTab={onNavigateToTab}
      />

      {/* PRIORITY 1: "میرا آج کا سفر" (Daily Smart Journey - Primary Daily Pathway) */}
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

      {/* PRIORITY 2: "میری آج کی تعلیم" (Current Active Lesson & Real-World Practical Action) */}
      <div 
        id="home-my-learning-card"
        className="bg-gradient-to-br from-emerald-850 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-emerald-500/40 relative overflow-hidden space-y-5"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Card Header: میری آج کی تعلیم + Goal Badge */}
        <div className="relative z-10 flex items-center justify-between gap-3 flex-wrap border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-xs shrink-0">
              <GraduationCap className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xl sm:text-2xl font-black text-amber-300 font-arabic tracking-wide block leading-tight">
                {language === 'ur' ? 'میری آج کی تعلیم' : 'My Learning Today'}
              </span>
            </div>
          </div>

          {activeCourse && (
            <span className="urdu-badge px-3.5 py-1 rounded-full bg-emerald-950/90 text-emerald-200 border border-emerald-400/40 shadow-xs text-xs sm:text-sm font-bold">
              {language === 'ur' ? (activeCourse.categoryUrdu || 'جاری کورس') : activeCourse.category}
            </span>
          )}
        </div>

        {activeCourse ? (
          <div className="relative z-10 space-y-4">
            {/* Course Title Context */}
            <div>
              <span className="text-xs sm:text-sm text-emerald-300/90 font-bold font-arabic block mb-0.5">
                {language === 'ur' ? 'منتخب کورس:' : 'Course:'}
              </span>
              <p className="text-base sm:text-lg font-bold text-white/95 font-arabic">
                {language === 'ur' ? activeCourse.titleUrdu : activeCourse.titleEn}
              </p>
            </div>

            {/* Current Lesson Title (Priority 2 - 24–28px, font-black) */}
            {currentLesson ? (
              <h2 className="text-[24px] sm:text-[28px] font-black text-white leading-[1.4] font-arabic tracking-normal text-balance">
                {language === 'ur' ? currentLesson.titleUrdu : currentLesson.titleEn}
              </h2>
            ) : (
              <h2 className="text-[24px] sm:text-[28px] font-black text-white leading-[1.4] font-arabic tracking-normal">
                {language === 'ur' ? activeCourse.titleUrdu : activeCourse.titleEn}
              </h2>
            )}

            {/* "آپ کیا سیکھیں گے؟" Box (Why am I learning it?) */}
            <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-2xl p-4 sm:p-4.5 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-300 text-sm sm:text-base font-bold font-arabic">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>{language === 'ur' ? 'آپ کیا سیکھیں گے؟ (مقصد و فائدہ)' : 'What you will learn:'}</span>
              </div>
              <p className="text-[17px] sm:text-[18px] text-emerald-50 leading-[1.8] font-arabic">
                {currentLesson && currentLesson.keyTakeawaysUrdu && currentLesson.keyTakeawaysUrdu[0]
                  ? currentLesson.keyTakeawaysUrdu[0]
                  : (language === 'ur' ? activeCourse.descriptionUrdu : activeCourse.descriptionEn)}
              </p>
            </div>

            {/* "🎯 آج کا عملی کام:" Box (What should I do now?) */}
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-4 sm:p-4.5 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-300 text-sm sm:text-base font-bold font-arabic">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{language === 'ur' ? '🎯 آج کا عملی کام:' : "Today's Practical Task:"}</span>
              </div>
              <p className="text-[16px] sm:text-[18px] text-amber-100 font-medium leading-[1.8] font-arabic">
                {currentLesson?.practicalTask
                  ? (language === 'ur' ? currentLesson.practicalTask.instructionsUrdu : currentLesson.practicalTask.instructionsEn)
                  : activeCourse.practicalTask
                  ? (language === 'ur' ? activeCourse.practicalTask.instructionsUrdu : activeCourse.practicalTask.instructionsEn)
                  : (language === 'ur' ? 'آج کے سبق کی روشنی میں ایک چھوٹا عملی قدم اٹھائیں۔' : 'Take one small practical step today.')}
              </p>
            </div>

            {/* Single clean line: ⏱ 15 منٹ کا سبق | پیش رفت: مرحلہ ۱ (0% مکمل) */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-[15px] sm:text-[16px] font-bold font-arabic text-emerald-200 bg-white/10 rounded-2xl px-4 py-2.5 border border-white/15 backdrop-blur-xs w-fit">
              <span className="flex items-center gap-1.5 text-amber-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>⏱ {currentLesson?.durationMinutes || 15} {language === 'ur' ? 'منٹ کا سبق' : 'mins'}</span>
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5">
                <span>{language === 'ur' ? `پیش رفت: مرحلہ ${(currentLessonIndex ?? 0) + 1} (${progressPercent}% مکمل - سبق ${(currentLessonIndex ?? 0) + 1} از ${totalLessonsCount})` : `Progress: Step ${(currentLessonIndex ?? 0) + 1} (${progressPercent}%)`}</span>
              </span>
            </div>

            {/* Progress line */}
            <div className="w-full max-w-md h-2 bg-emerald-950/80 rounded-full overflow-hidden border border-emerald-400/30 p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full transition-all duration-500 shadow-xs"
                style={{ width: `${Math.max(4, progressPercent)}%` }}
              />
            </div>

            {/* Primary & Secondary Buttons: [ ▶ جاری رکھیں ] (>=52px height) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap">
              {/* Main Prominent Button - Deep Links into Current Lesson */}
              <button
                id="home-my-learning-continue-btn"
                onClick={handleContinueCurrentLesson}
                className="urdu-btn min-h-[52px] px-8 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[18px] sm:text-[19px] shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shrink-0"
              >
                <Play className="w-5 h-5 fill-slate-950 shrink-0" />
                <span>{language === 'ur' ? 'جاری رکھیں' : 'Continue'}</span>
                <ArrowIcon className="w-5 h-5 shrink-0" />
              </button>

              {/* Secondary: سبق سنیں */}
              <button
                id="home-my-learning-audio-btn"
                onClick={handleToggleAudio}
                className="min-h-[48px] px-5 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 text-emerald-100 font-bold text-[15px] sm:text-[16px] border border-white/20 transition flex items-center justify-center gap-2 font-arabic"
                title={language === 'ur' ? 'سبق کی آڈیو سنیں' : 'Listen to lesson'}
              >
                <span className="text-base">{isPlayingAudio ? '⏹' : '🔊'}</span>
                <span>{isPlayingAudio ? (language === 'ur' ? 'آڈیو بند کریں' : 'Stop Audio') : (language === 'ur' ? 'سبق سنیں' : 'Listen to Lesson')}</span>
              </button>

              {/* Secondary: میرا مکمل روڈ میپ دیکھیں */}
              {userProfile.completedAssessment ? (
                <button
                  id="home-my-learning-roadmap-btn"
                  onClick={() => onNavigateToTab('mylearning')}
                  className="min-h-[48px] px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-emerald-100 font-bold text-[15px] sm:text-[16px] border border-white/15 transition flex items-center justify-center gap-2 font-arabic"
                >
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>{language === 'ur' ? 'میرا مکمل روڈ میپ دیکھیں' : 'View Full Roadmap'}</span>
                </button>
              ) : (
                <button
                  id="home-my-learning-assessment-btn"
                  onClick={onOpenAssessment}
                  className="min-h-[48px] px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-emerald-100 font-bold text-[15px] sm:text-[16px] border border-white/15 transition flex items-center justify-center gap-2 font-arabic"
                >
                  <Compass className="w-4 h-4 text-amber-300" />
                  <span>{language === 'ur' ? 'روڈ میپ اسیسمنٹ' : 'Personal Assessment'}</span>
                </button>
              )}
            </div>
          </div>
        ) : personalizedLearning.isContentPending ? (
          /* Personalized Content In Progress state */
          <div className="relative z-10 py-7 px-5 sm:px-7 bg-white/10 rounded-2xl border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start backdrop-blur-xs">
            <div className="space-y-2.5 max-w-lg">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-bold font-arabic border border-amber-400/30">
                <Sparkles className="w-4 h-4" />
                <span>{language === 'ur' ? personalizedLearning.primaryGoalLabelUrdu : personalizedLearning.primaryGoalLabelEn}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white font-arabic">
                {language === 'ur' ? personalizedLearning.fallbackMessageUrdu : personalizedLearning.fallbackMessageEn}
              </h4>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-[1.8] font-arabic">
                {language === 'ur'
                  ? 'آپ کے منتخب کردہ ہدف کے مطابق نیا مواد تیار ہو رہا ہے۔ آپ اس دوران دیگر مفید بنیادی مہارتیں بھی دیکھ سکتے ہیں۔'
                  : 'Your personalized learning path is being prepared. In the meantime, you can explore other foundational skills.'}
              </p>
            </div>

            <button
              id="home-my-learning-explore-skills-btn"
              onClick={() => onNavigateToTab('skills')}
              className="urdu-btn px-7 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <Search className="w-5 h-5 text-slate-950" />
              <span>{language === 'ur' ? 'دیگر مہارتیں دیکھیں' : 'Explore Skills'}</span>
              <ArrowIcon className="w-5 h-5" />
            </button>
          </div>
        ) : (
          /* Empty state: "ابھی کوئی کورس شروع نہیں کیا" */
          <div className="relative z-10 py-7 px-5 sm:px-7 bg-white/5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
            <div className="space-y-2.5 max-w-lg">
              <h4 className="text-xl sm:text-2xl font-black text-white font-arabic">
                {language === 'ur' ? 'ابھی کوئی کورس شروع نہیں کیا' : 'No course started yet'}
              </h4>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-[1.8] font-arabic">
                {language === 'ur'
                  ? 'اپنی پسند اور ضرورت کے مطابق موبائل اسکل، AI، کینوا، زراعت یا کاروبار کا ہنر منتخب کریں اور سیکھنا شروع کریں۔'
                  : 'Choose a practical skill in mobile literacy, AI, Canva, agriculture, or business to begin.'}
              </p>
            </div>

            <button
              id="home-my-learning-explore-skills-btn"
              onClick={() => onNavigateToTab('skills')}
              className="urdu-btn px-7 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <Search className="w-5 h-5 text-slate-950" />
              <span>{language === 'ur' ? 'Skill تلاش کریں' : 'Explore Skills'}</span>
              <ArrowIcon className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* STRATEGIC PRIORITY 3: "ذاتی تعلیمی رہنما" (AI Personal Mentor) */}
      <AIPersonalMentorBanner
        language={language}
        userProfile={userProfile}
        onOpenAITeacherWithPrompt={onOpenAITeacher}
      />

      {/* 2.25. FEATURED MENTAL TRAINING LESSON: "خالی ذہن سب سے زیادہ شور مچاتا ہے" */}
      <div 
        id="home-mind-training-card"
        className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border-2 border-amber-400/40 relative overflow-hidden space-y-4"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between gap-3 flex-wrap border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-xs shrink-0">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs sm:text-sm font-bold text-amber-300 font-arabic tracking-wide block">
                {language === 'ur' ? 'حقیقی زندگی اور ذہنی تربیت • خصوصی سبق' : 'Real-Life Mindset & Mental Training'}
              </span>
            </div>
          </div>

          <span className="urdu-badge px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-bold">
            +30 {language === 'ur' ? 'پوائنٹس' : 'Points'}
          </span>
        </div>

        <div className="relative z-10 space-y-3">
          <h3 className="text-2xl sm:text-3xl font-black text-white font-arabic tracking-tight leading-snug">
            {language === 'ur' ? 'خالی ذہن سب سے زیادہ شور مچاتا ہے' : 'An Empty Mind Makes the Most Noise'}
          </h3>

          <p className="text-base sm:text-lg text-emerald-100/90 font-arabic leading-[1.8]">
            {language === 'ur'
              ? 'جب ذہن کے پاس کوئی بامقصد سمت نہیں ہوتی تو وہ خاموشی کو بےکار خیالات، موازنے اور خوف سے بھر دیتا ہے۔ اپنے ذہن کو مصروف نہیں، بامقصد بنائیں۔'
              : 'When the mind lacks purposeful direction, it fills silence with idle worries, comparisons, and anxieties. Learn how to give it direction.'}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm font-arabic">
            <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-200 font-bold">
              ⚡ Busy ≠ Purposeful
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200">
              ⏱ {language === 'ur' ? 'دورانیہ: 10–15 منٹ' : 'Duration: 10–15 mins'}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200">
              🎯 {language === 'ur' ? 'عملی مشق و چیلنج' : 'Interactive & Challenge'}
            </span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              id="home-open-mind-lesson-btn"
              onClick={() => onOpenMindLessonModal && onOpenMindLessonModal()}
              className="urdu-btn min-h-[50px] px-8 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[17px] sm:text-[18px] shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shrink-0"
            >
              <Compass className="w-5 h-5 text-slate-950 shrink-0" />
              <span>{language === 'ur' ? 'یہ سبق شروع کریں' : 'Start Lesson'}</span>
              <ArrowIcon className="w-5 h-5 shrink-0" />
            </button>
          </div>
        </div>
      </div>

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

      {/* STRATEGIC HUB 1: "آنے والی نسل کے لیے" (Future Readiness: AI, Digital Economy, Critical Thinking) */}
      <FutureGenerationsSection
        language={language}
        userProfile={userProfile}
        onSelectCourseById={(courseId) => {
          const course = COURSES_DATA.find(c => c.id === courseId);
          if (course) onSelectCourse(course);
        }}
        onOpenAITeacherWithPrompt={onOpenAITeacher}
        onNavigateToTab={onNavigateToTab}
      />

      {/* STRATEGIC HUB 2: "میرا خاندان" (Family Growth & Shared Household Goals) */}
      <FamilyGrowthHubSection
        language={language}
        userProfile={userProfile}
        onOpenAITeacher={onOpenAITeacher}
      />

      {/* STRATEGIC HUB 3: "میرا اثر و خدمتِ خلق" (Community Impact & Real-World Service Deeds) */}
      <CommunityImpactTracker
        language={language}
        userProfile={userProfile}
        onLogCommunityDeed={onLogCommunityDeed}
        onOpenAITeacher={onOpenAITeacher}
      />

      {/* 3. SECTION: "آج کے 3 کام" (Today's 3 Tasks) */}
      <div className="bg-slate-50/90 dark:bg-slate-900/40 rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-arabic">
                {language === 'ur' ? 'آج کے 3 کام' : "Today's 3 Tasks"}
              </h3>
            </div>
            <p className="text-[15px] sm:text-[16px] text-slate-600 dark:text-slate-400 mt-1 font-arabic leading-relaxed">
              {language === 'ur' 
                ? 'روزانہ کے ۳ آسان اور پریکٹیکل اقدامات — عمر ۱۰ سے ۷۰+ سال کے تمام ساتھیوں کے لیے'
                : '3 simple and practical daily actions — tailored for all learners aged 10 to 70+'}
            </p>
          </div>
          <span className="urdu-badge px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 self-start sm:self-auto shadow-xs">
            {language === 'ur' ? 'روزانہ کی مشق' : 'Daily Practice'}
          </span>
        </div>

        {/* 3 Tasks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Task 1: Today's Lesson */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-black text-sm flex items-center justify-center shadow-xs">
                  ۱
                </span>
                <span className="urdu-badge px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                  {language === 'ur' ? 'آج کا سبق' : "Today's Lesson"}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-2 font-arabic group-hover:text-emerald-700 transition leading-snug">
                {language === 'ur' ? todaysLesson.titleUrdu : todaysLesson.titleEn}
              </h4>

              <p className="text-[15px] sm:text-[16px] text-slate-600 mb-4 font-arabic leading-[1.8]">
                {language === 'ur' ? todaysCourse.descriptionUrdu : todaysCourse.descriptionEn}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <span className="text-sm font-bold text-slate-500 flex items-center gap-1.5 font-arabic">
                <Clock className="w-4 h-4 text-emerald-600" />
                {todaysLesson.durationMinutes} {language === 'ur' ? 'منٹ کا آسان سبق' : 'mins lesson'}
              </span>
              <button
                id="home-start-task-1-btn"
                onClick={() => onSelectCourse(todaysCourse)}
                className="urdu-btn min-h-[48px] w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[16px] sm:text-[17px] flex items-center justify-center gap-2 shadow-xs transition"
              >
                <Play className="w-4 h-4 fill-white shrink-0" />
                <span>{language === 'ur' ? 'سبق شروع کریں' : 'Start Lesson'}</span>
              </button>
            </div>
          </div>

          {/* Task 2: Today's Practical Task */}
          <div className={`rounded-2xl p-5 sm:p-6 border shadow-sm transition flex flex-col justify-between ${
            dailyTaskCompleted ? 'bg-emerald-50/90 border-emerald-300' : 'bg-white border-slate-200 hover:shadow-md'
          }`}>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black text-sm flex items-center justify-center shadow-xs">
                  ۲
                </span>
                <span className="urdu-badge px-3 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  +25 {language === 'ur' ? 'پوائنٹس' : 'pts'}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-2 font-arabic leading-snug">
                {language === 'ur' ? todaysCourse.practicalTask.titleUrdu : todaysCourse.practicalTask.titleEn}
              </h4>

              <p className="text-[15px] sm:text-[16px] text-slate-600 mb-4 font-arabic leading-[1.8]">
                {language === 'ur' ? todaysCourse.practicalTask.instructionsUrdu : todaysCourse.practicalTask.instructionsEn}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                id="home-complete-task-2-btn"
                onClick={onCompleteDailyTask}
                disabled={dailyTaskCompleted}
                className={`urdu-btn min-h-[48px] w-full py-3 px-4 rounded-xl font-black text-[16px] sm:text-[17px] flex items-center justify-center gap-2 transition ${
                  dailyTaskCompleted
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-xs'
                }`}
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>
                  {dailyTaskCompleted 
                    ? (language === 'ur' ? 'ماشاءاللہ! مکمل ہوا' : 'Task Done! (+25 pts)')
                    : (language === 'ur' ? 'عملی کام مکمل کریں' : 'Mark as Done')}
                </span>
              </button>
            </div>
          </div>

          {/* Task 3: AI Teacher Question & Guidance */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="w-8 h-8 rounded-xl bg-orange-500 text-white font-black text-sm flex items-center justify-center shadow-xs">
                  ۳
                </span>
                <span className="urdu-badge px-3 py-0.5 rounded-full bg-orange-100 text-orange-950 border border-orange-300 flex items-center gap-1">
                  <Bot className="w-3.5 h-3.5 text-orange-600" />
                  {language === 'ur' ? 'AI استاد' : 'AI Teacher'}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-2 font-arabic group-hover:text-orange-600 transition leading-snug">
                {language === 'ur' ? 'AI استاد سے سوال پوچھیں' : 'Ask AI Teacher'}
              </h4>

              <p className="text-[15px] sm:text-[16px] text-slate-600 mb-4 font-arabic leading-[1.8]">
                {language === 'ur'
                  ? 'کسی بھی لفظ، ہنر، روزمرہ مسئلے یا موبائل استعمال پر سادہ اردو میں فوری رہنمائی حاصل کریں۔'
                  : 'Get instant, gentle guidance on any skill, vocabulary, or phone tool in simple words.'}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                id="home-ask-ai-task-3-btn"
                onClick={() => onOpenAITeacher()}
                className="urdu-btn min-h-[48px] w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-[16px] sm:text-[17px] flex items-center justify-center gap-2 shadow-xs transition"
              >
                <Bot className="w-5 h-5 shrink-0" />
                <span>{language === 'ur' ? 'ابھی سوال پوچھیں' : 'Ask Question'}</span>
                <ArrowIcon className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. "میرا راستہ دریافت کریں" (Discover My Learning Path / Assessment) */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-emerald-950 rounded-3xl p-5 sm:p-7 text-white shadow-lg border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2.5 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="urdu-badge px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'ur' ? 'ذاتی اسکل اسیسمنٹ' : 'Personal Skill Assessment'}
            </span>
            {userProfile.completedAssessment && (
              <span className="urdu-badge px-3 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                {language === 'ur' ? 'روڈ میپ فعال ہے' : 'Path Active'}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white font-arabic">
            {language === 'ur' ? 'میرا راستہ دریافت کریں' : 'Discover My Learning Path'}
          </h2>

          <p className="text-[15px] sm:text-[16px] text-emerald-100 leading-[1.8] font-arabic">
            {language === 'ur'
              ? 'صرف ۱۰–۱۲ آسان سوالات کے جواب دیں اور اپنی عمر، دستیاب وقت، تعلیم اور مقصد کے مطابق بہترین ہنر و ۷ روزہ عملی روڈ میپ حاصل کریں۔'
              : 'Answer 10-12 quick questions to get personalized skill recommendations tailored to your age, device, daily time, and life goals.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-3 w-full md:w-auto shrink-0">
          <button
            id="home-discover-my-path-btn"
            onClick={onOpenAssessment}
            className="urdu-btn min-h-[50px] px-7 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[17px] sm:text-[18px] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
          >
            <Compass className="w-5 h-5 text-slate-950 shrink-0" />
            <span>{language === 'ur' ? 'میرا راستہ دریافت کریں' : 'Discover My Path'}</span>
            <ArrowIcon className="w-5 h-5 shrink-0" />
          </button>

          {userProfile.completedAssessment && (
            <button
              onClick={() => onNavigateToTab('mylearning')}
              className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base border border-white/20 transition flex items-center justify-center gap-2 font-arabic"
            >
              <Award className="w-4 h-4 text-emerald-300" />
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
      <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-5 sm:p-6 border border-emerald-500/30 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="urdu-badge px-3 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/30">
                {language === 'ur' ? t.recommendedSkillsForYou : 'Personalized Recommendations'}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white mt-1.5 font-arabic">
              {language === 'ur' ? ageRec.titleUrdu : ageRec.titleEn}
            </h3>
          </div>

          <button
            id="home-retake-assessment-btn"
            onClick={onOpenAssessment}
            className="text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-emerald-200 px-3.5 py-2 rounded-xl border border-white/20 self-start sm:self-auto transition font-bold font-arabic shadow-xs"
          >
            {language === 'ur' ? 'اسکل اسیسمنٹ تبدیل کریں' : 'Retake Assessment'}
          </button>
        </div>

        {/* Recommended Skills Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
          {(language === 'ur' ? ageRec.skillsUrdu : ageRec.skillsEn).map((skillName, idx) => (
            <div 
              key={idx}
              onClick={() => onNavigateToTab('skills')}
              className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-3 flex items-center gap-3 transition cursor-pointer"
            >
              <div className="w-7 h-7 rounded-xl bg-emerald-500/40 flex items-center justify-center text-emerald-300 text-xs font-black shrink-0">
                {idx + 1}
              </div>
              <span className="text-sm sm:text-base font-bold text-white/95 line-clamp-1 font-arabic">
                {skillName}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Recommended Courses Carousel / Grid */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic">
              {language === 'ur' ? 'میرے لیے بہترین Skills و کورسز' : 'Recommended Practical Courses'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-arabic mt-0.5">
              {language === 'ur' ? 'عملی سیکھنے کا ماڈل: سبق → کوئز → مشق → پروجیکٹ' : 'Model: Lesson → Quiz → Practice → Project'}
            </p>
          </div>

          <button
            onClick={() => onNavigateToTab('skills')}
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 font-arabic transition shrink-0"
          >
            <span>{language === 'ur' ? 'تمام دیکھیں' : 'View All'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredCourses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between group"
            >
              <div className={`p-4 sm:p-5 bg-gradient-to-r ${course.coverGradient} text-white relative`}>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full font-semibold">
                    {language === 'ur' ? course.categoryUrdu : course.category}
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full font-semibold">
                    {language === 'ur' ? course.difficultyUrdu : course.difficulty}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-black text-white group-hover:underline font-arabic leading-snug">
                  {language === 'ur' ? course.titleUrdu : course.titleEn}
                </h4>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <p className="text-[15px] sm:text-[16px] text-slate-600 mb-4 font-arabic leading-[1.8] line-clamp-2">
                  {language === 'ur' ? course.descriptionUrdu : course.descriptionEn}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-500">
                  <span className="flex items-center gap-1.5 font-bold text-slate-700 font-arabic">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    {course.lessons.length} {language === 'ur' ? 'اسباق' : 'Lessons'}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 font-arabic text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    {language === 'ur' ? 'عملی پروجیکٹ' : 'Hands-on Project'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 9. "اپنے علاقے کے لیے کچھ کریں" Community Section */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-5">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-xs">
              <Users className="w-5 h-5 text-emerald-700" />
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic">
                {language === 'ur' ? 'اپنے علاقے کے لیے کچھ کریں' : 'Do Something for Your Area'}
              </h3>
              <span className="urdu-badge px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                {language === 'ur' ? 'کمیونٹی خدمت' : 'Community Action'}
              </span>
            </div>
          </div>

          <button
            onClick={() => onNavigateToTab('community')}
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-950 flex items-center gap-1 font-arabic transition"
          >
            <span>{language === 'ur' ? 'کمیونٹی فورم دیکھیں' : 'View Community Forum'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Simple Options Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
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
                className={`p-4 sm:p-5 rounded-2xl border text-start transition flex flex-col justify-between gap-3 relative ${
                  isSelected
                    ? 'bg-emerald-50/90 border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                    : 'bg-slate-50 hover:bg-slate-100/90 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 w-full">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                    isSelected ? 'bg-emerald-700 text-white shadow-xs' : 'bg-slate-200/80 text-slate-700'
                  }`}>
                    <OptIcon className="w-5 h-5" />
                  </div>
                  {isStarted && (
                    <span className="urdu-badge px-2.5 py-0.5 rounded-full bg-emerald-700 text-white flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {language === 'ur' ? 'شروع شدہ' : 'Started'}
                    </span>
                  )}
                </div>

                <div>
                  <h4 className={`text-base sm:text-lg font-black font-arabic ${
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
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 rounded-2xl p-5 sm:p-6 border border-emerald-200/90 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="urdu-badge px-3 py-0.5 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300">
                    {language === 'ur' ? 'منتخب کردہ عملی عمل (Sample Action):' : 'Sample Practical Action:'}
                  </span>
                </div>
                
                <h4 className="text-lg sm:text-xl font-black text-slate-900 font-arabic leading-snug">
                  {language === 'ur' ? currentOptionData.sampleActionUrdu : currentOptionData.sampleActionEn}
                </h4>

                <p className="text-[15px] sm:text-[16px] text-slate-700 font-arabic leading-[1.8]">
                  {language === 'ur' ? currentOptionData.hintUrdu : currentOptionData.hintEn}
                </p>
              </div>

              {/* Action Button & Progress State */}
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                {isActionStarted ? (
                  <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 text-white font-black text-sm sm:text-base font-arabic shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-100" />
                    <span>{language === 'ur' ? 'میرا قدم شروع ہوگیا' : 'My step has started!'}</span>
                  </div>
                ) : (
                  <button
                    id="home-community-practical-step-btn"
                    onClick={() => handleStartCommunityStep(selectedCommunityOption)}
                    className="urdu-btn min-h-[48px] px-7 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-base shadow-md hover:shadow-lg transition flex items-center justify-center gap-2.5"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>{language === 'ur' ? 'میرا عملی قدم' : 'My Practical Step'}</span>
                    <ArrowIcon className="w-4 h-4 shrink-0" />
                  </button>
                )}

                {isActionStarted && (
                  <span className="text-sm text-emerald-900 font-arabic font-bold">
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
          <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="urdu-badge px-3 py-0.5 rounded-full bg-emerald-200/80 text-emerald-950 flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  {t.communityHighlight}
                </span>
                <span className="text-xs text-emerald-800 font-bold font-arabic">
                  {t.pilotAreaLabel}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-black text-slate-900 mt-2 mb-1.5 font-arabic">
                {language === 'ur' ? COMMUNITY_POSTS_DATA[0].titleUrdu : COMMUNITY_POSTS_DATA[0].titleEn}
              </h4>
              <p className="text-[15px] sm:text-[16px] text-slate-700 mb-3 font-arabic leading-[1.8] line-clamp-2">
                {language === 'ur' ? COMMUNITY_POSTS_DATA[0].contentUrdu : COMMUNITY_POSTS_DATA[0].contentEn}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-emerald-200/80">
              <span className="text-xs sm:text-sm text-slate-700 font-bold font-arabic">
                {COMMUNITY_POSTS_DATA[0].authorName}
              </span>
              <button
                onClick={() => onNavigateToTab('community')}
                className="text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 font-arabic"
              >
                <span>{language === 'ur' ? 'برادری دیکھیں' : 'Join Discussion'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Elder Knowledge Banner */}
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="urdu-badge px-3 py-0.5 rounded-full bg-amber-200 text-amber-950 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4" />
                  {t.elderKnowledgeTitle}
                </span>
                <span className="text-xs text-amber-900 font-bold font-arabic">
                  {language === 'ur' ? 'استاد و رہنما' : 'Wisdom'}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-black text-slate-900 mt-2 mb-1.5 font-arabic">
                {language === 'ur' ? 'ہمارے بزرگ، ہماری شناخت اور زندگی کا نچوڑ' : 'Wisdom of our Elders'}
              </h4>
              <p className="text-[15px] sm:text-[16px] text-slate-700 mb-3 font-arabic leading-[1.8] line-clamp-2">
                {language === 'ur'
                  ? 'روایتی کاشتکاری، دستکاری، مقامی تاریخ اور اخلاقی اصولوں کا انمول خزانہ۔'
                  : 'Preserving traditional farming, crafts, local history, and wisdom.'}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-amber-200/80">
              <span className="text-xs sm:text-sm text-amber-900 font-bold font-arabic">
                {language === 'ur' ? 'تجربات کا خزانہ' : 'Stories'}
              </span>
              <button
                onClick={() => onNavigateToTab('elders')}
                className="text-xs sm:text-sm font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 font-arabic"
              >
                <span>{language === 'ur' ? 'بزرگوں کی باتیں' : 'Read Wisdom'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 10. My Area Pilot Launcher */}
      <div 
        onClick={() => onNavigateToTab('myarea')}
        className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:border-emerald-500/80 transition cursor-pointer flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                {language === 'ur' ? 'میرا علاقہ (ڈوبے، برنالہ، آزاد کشمیر)' : 'My Area (Dobay, Barnala, Azad Kashmir)'}
              </h4>
              <span className="urdu-badge px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                {language === 'ur' ? 'پائلٹ پراجیکٹ' : 'Pilot'}
              </span>
            </div>
            <p className="text-[14px] sm:text-[15px] text-slate-600 font-arabic mt-0.5 leading-relaxed">
              {language === 'ur' ? 'پانی، راستے، صفائی اور تعلیمی مسائل کے عملی حل میں حصہ لیں۔' : 'Explore and contribute to local water, roads, education, and health initiatives.'}
            </p>
          </div>
        </div>

        <button 
          id="home-my-area-shortcut-btn"
          className="p-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition shrink-0"
        >
          <ArrowIcon className="w-5 h-5" />
        </button>
      </div>

      {/* 11. "میری Skills" (My Skills Section) */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold shadow-xs">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {top3Skills.map((skill, idx) => {
                const skillName = language === 'ur' ? skill.nameUrdu : skill.nameEn;
                const levelName = language === 'ur' ? skill.levelUrdu : (skill.level || 'Beginner');

                return (
                  <div
                    key={skill.id || idx}
                    className="bg-slate-50 hover:bg-slate-100/90 rounded-2xl p-4 sm:p-5 border border-slate-200 transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="urdu-badge px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-900 border border-teal-200">
                          {levelName}
                        </span>
                        <span className="text-sm font-black text-teal-800 font-arabic">
                          {skill.progressPercent}%
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-black text-slate-900 font-arabic group-hover:text-teal-800 transition line-clamp-2 mb-3">
                        {skillName}
                      </h4>
                    </div>

                    {/* Progress details and small progress bar */}
                    <div className="space-y-2 pt-2.5 border-t border-slate-200">
                      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 font-arabic">
                        <span>{language === 'ur' ? 'پیش رفت:' : 'Progress:'}</span>
                        <span className="font-black text-slate-800 font-arabic">
                          {skill.progressPercent}%
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
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
                className="urdu-btn w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 font-black text-sm sm:text-base border border-teal-200 flex items-center justify-center gap-2 transition"
              >
                <span>{language === 'ur' ? 'تمام Skills دیکھیں' : 'View All Skills'}</span>
                <ArrowIcon className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        ) : (
          /* Empty state */
          <div className="py-6 px-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
            <div>
              <h4 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
                {language === 'ur' ? 'ابھی کوئی Skill منتخب نہیں کی' : 'No skills selected yet'}
              </h4>
              <p className="text-[15px] sm:text-[16px] text-slate-600 font-arabic mt-1 leading-relaxed">
                {language === 'ur'
                  ? 'اپنی پسند اور مقصد کے مطابق ہنر منتخب کریں اور سیکھنا شروع کریں۔'
                  : 'Choose a skill that matches your learning goals to start.'}
              </p>
            </div>

            <button
              id="home-explore-skills-empty-btn"
              onClick={() => onNavigateToTab('skills')}
              className="urdu-btn px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-xs hover:shadow-md transition flex items-center justify-center gap-2 shrink-0"
            >
              <Search className="w-4 h-4 text-slate-950" />
              <span>{language === 'ur' ? 'Skill تلاش کریں' : 'Explore Skills'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* 12. "میرے لیے ممکنہ مواقع" (Potential Opportunities for Me) */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-4">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold shadow-xs">
              <Briefcase className="w-5 h-5 text-indigo-700" />
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic">
                {language === 'ur' ? 'میرے لیے ممکنہ مواقع' : 'Potential Opportunities for Me'}
              </h3>
              <span className="urdu-badge px-3 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300">
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
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs sm:text-sm text-slate-700 font-arabic leading-relaxed flex items-start gap-2.5">
          <span className="text-amber-600 font-black text-base shrink-0">ℹ</span>
          <span>
            {language === 'ur'
              ? 'یہ تمام مواقع تعلیمی اور معلوماتی ڈیمو نمونے (Demo / Sample) ہیں تاکہ آپ کو ہنر کے بعد عملی راستے سمجھنے میں رہنمائی ملے۔ یہ کوئی حقیقی ملازمت یا یقینی آمدنی کا دعویٰ نہیں ہے۔'
              : 'These are educational demo samples to illustrate practical skill applications. They are not real job offers or guarantees of income.'}
          </span>
        </div>

        {/* Opportunities List or Empty State */}
        {matchedOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {matchedOpportunities.map((opp, idx) => {
              const oppTitle = language === 'ur' ? opp.titleUrdu : opp.titleEn;
              const oppType = language === 'ur' ? opp.typeUrdu : opp.type;
              const oppSkill = language === 'ur' ? opp.requiredSkillUrdu : opp.requiredSkillEn;
              const oppLevel = language === 'ur' ? opp.levelUrdu : opp.level;
              const oppDesc = language === 'ur' ? opp.shortDescriptionUrdu : opp.shortDescriptionEn;

              return (
                <div
                  key={opp.id || idx}
                  className="bg-slate-50 hover:bg-slate-100/90 rounded-2xl p-5 border border-slate-200 transition flex flex-col justify-between group space-y-3.5"
                >
                  <div className="space-y-2.5">
                    {/* Tags: Type, Level, Demo Label */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="urdu-badge px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                          {oppType}
                        </span>
                        <span className="urdu-badge px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {language === 'ur' ? `درجہ: ${oppLevel}` : `Level: ${oppLevel}`}
                        </span>
                      </div>
                      <span className="urdu-badge px-2.5 py-0.5 rounded-md bg-amber-200 text-slate-900 border border-amber-300">
                        Demo / Sample
                      </span>
                    </div>

                    {/* عنوان (Title) */}
                    <h4 className="text-base sm:text-lg font-black text-slate-900 font-arabic group-hover:text-indigo-800 transition line-clamp-2 leading-snug">
                      {oppTitle}
                    </h4>

                    {/* Required Skill & Skill Level */}
                    <div className="bg-white rounded-xl p-3 border border-slate-200 text-xs sm:text-sm space-y-1 font-arabic">
                      <div className="flex items-start gap-1.5 text-slate-700">
                        <span className="font-black text-slate-900 shrink-0">
                          {language === 'ur' ? 'مطلوبہ ہنر:' : 'Required Skill:'}
                        </span>
                        <span className="text-indigo-700 font-bold">
                          {oppSkill}
                        </span>
                      </div>
                    </div>

                    {/* مختصر وضاحت (Short Description) */}
                    <p className="text-[14px] sm:text-[15px] text-slate-600 font-arabic leading-[1.8] line-clamp-3">
                      {oppDesc}
                    </p>
                  </div>

                  {/* "مزید دیکھیں" Button */}
                  <div className="pt-2.5 border-t border-slate-200 flex items-center justify-end">
                    <button
                      id={`home-opp-details-btn-${idx}`}
                      onClick={() => onNavigateToTab('opportunities')}
                      className="urdu-btn min-h-[44px] w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-xs"
                    >
                      <span>{language === 'ur' ? 'مزید دیکھیں' : 'View Details'}</span>
                      <ArrowIcon className="w-4 h-4 shrink-0" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="py-6 px-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
            <div className="space-y-1 max-w-md">
              <h4 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
                {language === 'ur' ? 'ابھی آپ کے لیے کوئی مناسب موقع نہیں ملا۔' : 'No suitable opportunities found for you yet.'}
              </h4>
              <p className="text-[14px] sm:text-[15px] text-slate-600 font-arabic leading-[1.8]">
                {language === 'ur'
                  ? 'مزید مہارتیں اور عملی اسکلز حاصل کریں تاکہ آپ کے لیے متعلقہ ڈیمو مواقع ظاہر ہوں۔'
                  : 'Learn more skills to discover relevant demonstration opportunities.'}
              </p>
            </div>

            <button
              id="home-opps-learn-more-skills-btn"
              onClick={() => onNavigateToTab('skills')}
              className="urdu-btn px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-xs hover:shadow-md transition flex items-center justify-center gap-2 shrink-0"
            >
              <BookOpen className="w-4 h-4 text-slate-950" />
              <span>{language === 'ur' ? 'مزید Skill سیکھیں' : 'Learn More Skills'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* 13. Footer: Vision, Purpose & Trust */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 font-arabic">
        <div className="space-y-1.5 text-center sm:text-start">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <span className="text-base font-black text-slate-900">
              {language === 'ur' ? 'سیکھو — Seekho' : 'Seekho'}
            </span>
            <span className="urdu-badge px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-300">
              {language === 'ur' ? 'بانی: وسیم صابر (Waseem Sabir)' : 'Founder: Waseem Sabir'}
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed">
            {language === 'ur'
              ? '”سیکھو — علم کو عمل، کردار اور بہتر زندگی سے جوڑنے کی کوشش ہے۔“'
              : '“Seekho is a dedicated effort to connect knowledge with action, character, and a better life.”'}
          </p>
        </div>

        <button
          id="home-open-vision-trust-btn"
          onClick={onOpenVisionModal}
          className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 border border-slate-200 text-sm font-bold transition shadow-xs flex items-center gap-2 shrink-0"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          <span>{language === 'ur' ? 'تعارف، رازداری و اعتماد' : 'About, Privacy & Trust'}</span>
        </button>
      </div>
    </div>
  );
};
