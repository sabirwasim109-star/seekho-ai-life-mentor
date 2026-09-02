import React, { useState, useEffect } from 'react';
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
  ShieldCheck,
  Volume2,
  VolumeX,
  Wrench,
  UserCheck,
  User,
  Home as HomeIcon,
  Flag,
  Globe,
  Moon,
  MoonStar,
  Quote
} from 'lucide-react';
import { Course, Language, UserProfile, GoodDeedItem } from '../types';
import { COURSES_DATA, COMMUNITY_POSTS_DATA, AGE_GROUP_RECOMMENDATIONS, UI_TRANSLATIONS, SKILL_CATEGORIES_DATA } from '../data/mockData';
import { KNOWLEDGE_CATEGORIES_META } from '../data/knowledgeLibraryData';
import { INITIAL_LEARNER_SKILLS, LearnerSkillItem } from '../data/portfolioData';
import { SAMPLE_OPPORTUNITIES, SampleOpportunity } from '../data/opportunitiesData';
import { speakText, stopSpeaking, subscribeSpeechState } from '../utils/speech';
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
import { JourneyTimeLength, LifePurposeAreaId } from '../types';
import { getPersonalizedCourseForUser } from '../utils/personalLearningPathEngine';
import { VoiceInputButton, FieldAudioSpeaker } from './AudioSpeechControls';
import { LifePurposeModal } from './LifePurposeModal';

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
  onOpenQuranicWisdom?: () => void;
  onOpenFamilySociety?: () => void;
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
  onOpenQuranicWisdom,
  onOpenFamilySociety,
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

  useEffect(() => {
    const unsubscribe = subscribeSpeechState((state) => {
      setIsPlayingAudio(state.isSpeaking && state.currentId === 'home-active-lesson');
    });
    return () => unsubscribe();
  }, []);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
    } else if (currentLesson) {
      const textToSpeak = language === 'ur'
        ? `${currentLesson.titleUrdu}۔ ${currentLesson.keyTakeawaysUrdu?.[0] || activeCourse?.descriptionUrdu || ''}`
        : `${currentLesson.titleEn}. ${currentLesson.keyTakeawaysEn?.[0] || activeCourse?.descriptionEn || ''}`;
      speakText(textToSpeak, {
        id: 'home-active-lesson',
        language,
        onStart: () => setIsPlayingAudio(true),
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false),
      });
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

  const [isPlayingHeaderAudio, setIsPlayingHeaderAudio] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeSpeechState((state) => {
      if (state.currentId === 'home-header-vision-audio') {
        setIsPlayingHeaderAudio(state.isSpeaking && !state.isPaused);
      } else if (!state.isSpeaking) {
        setIsPlayingHeaderAudio(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleToggleHeaderAudio = () => {
    if (isPlayingHeaderAudio) {
      stopSpeaking();
      setIsPlayingHeaderAudio(false);
    } else {
      const text = language === 'ur'
        ? 'السلام علیکم ورحمۃ اللہ وبرکاتہ! خوش آمدید، دعا فاطمہ۔ سیکھو — خود کو بہتر بنانے سے دنیا کو بہتر بنانے تک۔ اپنے آپ کے لیے، خاندان کے لیے، معاشرے کے لیے، ملک کے لیے، انسانیت کے لیے، اور آخرت کے لیے۔ قرآن مجید کا فرمان ہے: إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ — بے شک اللہ کسی قوم کی حالت نہیں بدلتا جب تک وہ خود اپنی حالت نہ بدلیں۔ سیکھو، عمل کرو، خود کو سنوارو اور دوسروں کے کام آؤ۔'
        : 'Assalam-o-Alaikum wa Rahmatullah wa Barakatuh! Welcome, Dua Fatima. Seekho — From bettering yourself to bettering the world. For yourself, your family, society, your country, humanity, and the Hereafter. Quran declares: Indeed, Allah will not change the condition of a people until they change what is in themselves. Learn, act, refine yourself, and benefit others.';
      speakText(text, {
        id: 'home-header-vision-audio',
        language,
        rate: 0.88,
        pitch: 0.84,
      });
      setIsPlayingHeaderAudio(true);
    }
  };

  const [astaghfirullahCount, setAstaghfirullahCount] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem('seekho_astaghfirullah_count') || '0', 10);
    } catch {
      return 0;
    }
  });
  const [showDhikrToast, setShowDhikrToast] = useState(false);

  const handleAstaghfirullahClick = () => {
    const next = astaghfirullahCount + 1;
    setAstaghfirullahCount(next);
    try {
      localStorage.setItem('seekho_astaghfirullah_count', next.toString());
    } catch {}
    setShowDhikrToast(true);
    setTimeout(() => setShowDhikrToast(false), 3500);
  };

  const [reflectionAnswered, setReflectionAnswered] = useState<string | null>(() => {
    try {
      return localStorage.getItem('seekho_daily_reflection_done') || null;
    } catch {
      return null;
    }
  });

  const [selectedPurposeAreaId, setSelectedPurposeAreaId] = useState<LifePurposeAreaId | null>(null);

  const handleReflectionSelect = (answer: string) => {
    setReflectionAnswered(answer);
    try {
      localStorage.setItem('seekho_daily_reflection_done', answer);
    } catch {}
    if (onCompleteLifeLesson) {
      onCompleteLifeLesson('daily-reflection-evening', 15, answer);
    }
  };

  return (
    <div className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      {/* 1. CLEAN HEADER & GREETING WITH ASTAGHFIRULLAH CORNER BADGE & AUDIO */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-md relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Top Controls Row: Astaghfirullah Corner & Audio Speaker */}
        <div className="relative z-20 flex items-center justify-between gap-3 mb-6 flex-wrap">
          {/* Astaghfirullah Corner Dignified Element */}
          <div className="relative">
            <button
              type="button"
              id="home-astaghfirullah-btn"
              onClick={handleAstaghfirullahClick}
              title="أَسْتَغْفِرُ اللَّهَ — استغفار اور روحانی سکون"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-950/90 hover:bg-emerald-900 text-emerald-200 border border-emerald-500/40 text-xs sm:text-sm font-black font-arabic shadow-sm hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer min-h-[44px]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>استغفر اللہ</span>
              {astaghfirullahCount > 0 && (
                <span className="text-[11px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-800/90 text-emerald-100 border border-emerald-400/40">
                  {astaghfirullahCount}
                </span>
              )}
            </button>

            {showDhikrToast && (
              <div className="absolute top-full mt-2 start-0 z-30 bg-emerald-950 text-emerald-100 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold font-arabic shadow-xl border border-emerald-500/50 whitespace-nowrap animate-fade-in flex items-center gap-2">
                <span>✨</span>
                <span>أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ — ماشاءاللہ!</span>
              </div>
            )}
          </div>

          {/* Clean Audio Icon Button */}
          <button
            type="button"
            id="home-header-audio-btn"
            onClick={handleToggleHeaderAudio}
            className="inline-flex items-center justify-center p-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm transition hover:scale-105 active:scale-95 min-w-[44px] min-h-[44px] cursor-pointer"
            title={isPlayingHeaderAudio ? (language === 'ur' ? 'آواز بند کریں' : 'Stop Audio') : (language === 'ur' ? 'آواز سنیں' : 'Listen with Audio')}
            aria-label={language === 'ur' ? 'آواز سنیں' : 'Listen with Audio'}
          >
            {isPlayingHeaderAudio ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        {/* Header Greeting & Points Summary */}
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-6">
          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-arabic tracking-tight leading-snug">
              السلام علیکم ورحمۃ اللہ وبرکاتہ
            </h1>
            <p className="text-xl sm:text-2xl font-black text-emerald-300 font-arabic">
              {language === 'ur' || language === 'dual' ? 'خوش آمدید، دعا فاطمہ' : 'Welcome, Dua Fatima'}
            </p>
          </div>

          {/* Points Badge */}
          <div className="flex items-center gap-3 bg-slate-800/90 px-4 py-3 rounded-2xl border border-slate-700/80 self-stretch md:self-auto justify-around shrink-0">
            <div className="flex items-center gap-2.5 text-emerald-300">
              <Award className="w-7 h-7 text-emerald-400 shrink-0" />
              <div className="text-start">
                <span className="text-xl font-black font-arabic block leading-tight">{userProfile.points || 175}</span>
                <span className="text-xs text-slate-300 font-bold font-arabic block">
                  {language === 'ur' ? 'پوائنٹس' : 'Points'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. DIGNIFIED MISSION & PURPOSE CARD WITH 6 CORE DIMENSIONS & QURANIC AYAH */}
        <div className="relative z-10 bg-slate-800/90 backdrop-blur-xs rounded-3xl p-5 sm:p-7 border border-emerald-500/25 space-y-6 shadow-inner">
          
          {/* Main Mission Slogan */}
          <div className="text-center sm:text-start space-y-1.5 border-b border-slate-700/70 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-arabic mb-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'ur' ? 'سیکھو مقصد و نظریہ' : 'Seekho Core Mission'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-arabic tracking-tight leading-relaxed">
              {language === 'ur' 
                ? 'سیکھو — خود کو بہتر بنانے سے دنیا کو بہتر بنانے تک'
                : 'Seekho — From Bettering Yourself to Bettering the World'}
            </h2>
          </div>

          {/* 6 Visual Dimension Cards / Pills with Intuitive Universal SVG Icons */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs sm:text-sm font-bold text-slate-300 font-arabic">
                {language === 'ur' ? 'مثبت تبدیلی کے ۶ بنیادی دائرے (مقاصد):' : '6 Core Spheres of Purposeful Impact:'}
              </p>
              <FieldAudioSpeaker
                id="purpose-spheres-heading"
                text={language === 'ur' 
                  ? 'مثبت تبدیلی کے چھ بنیادی مقاصد۔ اپنے آپ، خاندان، معاشرے، ملک، انسانیت اور آخرت کے لیے۔ کسی بھی مقصد پر کلک کر کے مکمل رہنمائی اور آج کا عملی قدم حاصل کریں۔'
                  : 'Six core spheres of purposeful impact: For Yourself, Family, Society, Nation, Humanity, and Hereafter. Tap any sphere to open guidance and daily missions.'}
              />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 font-arabic">
              
              {/* 1. اپنے آپ کے لیے */}
              <button 
                type="button"
                id="dimension-self"
                onClick={() => setSelectedPurposeAreaId('self')}
                title={language === 'ur' ? 'اپنے آپ کے لیے — مکمل رہنمائی و مشن کھولیں' : 'For Yourself — Open Guidance & Missions'}
                className="bg-slate-900/95 hover:bg-slate-900 rounded-2xl p-3.5 sm:p-4 border border-emerald-500/35 hover:border-emerald-400/70 transition-all flex flex-col items-center justify-center text-center gap-2.5 shadow-sm hover:shadow-md group cursor-pointer min-h-[104px] sm:min-h-[116px] active:scale-[0.98] w-full"
              >
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-emerald-950 text-emerald-300 flex items-center justify-center border border-emerald-500/40 group-hover:scale-105 group-hover:bg-emerald-900 transition-all shadow-inner shrink-0">
                  <User className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                </div>
                <span className="text-sm sm:text-base font-black text-white group-hover:text-emerald-300 leading-tight">
                  {language === 'ur' ? 'اپنے آپ کے لیے' : 'For Yourself'}
                </span>
              </button>

              {/* 2. خاندان کے لیے */}
              <button 
                type="button"
                id="dimension-family"
                onClick={() => setSelectedPurposeAreaId('family')}
                title={language === 'ur' ? 'خاندان کے لیے — مکمل رہنمائی و مشن کھولیں' : 'For Family — Open Guidance & Missions'}
                className="bg-slate-900/95 hover:bg-slate-900 rounded-2xl p-3.5 sm:p-4 border border-teal-500/35 hover:border-teal-400/70 transition-all flex flex-col items-center justify-center text-center gap-2.5 shadow-sm hover:shadow-md group cursor-pointer min-h-[104px] sm:min-h-[116px] active:scale-[0.98] w-full"
              >
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-teal-950 text-teal-300 flex items-center justify-center border border-teal-500/40 group-hover:scale-105 group-hover:bg-teal-900 transition-all shadow-inner shrink-0">
                  <HomeIcon className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                </div>
                <span className="text-sm sm:text-base font-black text-white group-hover:text-teal-300 leading-tight">
                  {language === 'ur' ? 'خاندان کے لیے' : 'For Family'}
                </span>
              </button>

              {/* 3. معاشرے کے لیے */}
              <button 
                type="button"
                id="dimension-society"
                onClick={() => setSelectedPurposeAreaId('society')}
                title={language === 'ur' ? 'معاشرے کے لیے — مکمل رہنمائی و مشن کھولیں' : 'For Society — Open Guidance & Missions'}
                className="bg-slate-900/95 hover:bg-slate-900 rounded-2xl p-3.5 sm:p-4 border border-cyan-500/35 hover:border-cyan-400/70 transition-all flex flex-col items-center justify-center text-center gap-2.5 shadow-sm hover:shadow-md group cursor-pointer min-h-[104px] sm:min-h-[116px] active:scale-[0.98] w-full"
              >
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-cyan-950 text-cyan-300 flex items-center justify-center border border-cyan-500/40 group-hover:scale-105 group-hover:bg-cyan-900 transition-all shadow-inner shrink-0">
                  <Users className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                </div>
                <span className="text-sm sm:text-base font-black text-white group-hover:text-cyan-300 leading-tight">
                  {language === 'ur' ? 'معاشرے کے لیے' : 'For Society'}
                </span>
              </button>

              {/* 4. ملک کے لیے */}
              <button 
                type="button"
                id="dimension-country"
                onClick={() => setSelectedPurposeAreaId('country')}
                title={language === 'ur' ? 'ملک کے لیے — مکمل رہنمائی و مشن کھولیں' : 'For Nation — Open Guidance & Missions'}
                className="bg-slate-900/95 hover:bg-slate-900 rounded-2xl p-3.5 sm:p-4 border border-emerald-500/35 hover:border-emerald-400/70 transition-all flex flex-col items-center justify-center text-center gap-2.5 shadow-sm hover:shadow-md group cursor-pointer min-h-[104px] sm:min-h-[116px] active:scale-[0.98] w-full"
              >
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-emerald-950 text-emerald-300 flex items-center justify-center border border-emerald-500/40 group-hover:scale-105 group-hover:bg-emerald-900 transition-all shadow-inner shrink-0">
                  <Flag className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                </div>
                <span className="text-sm sm:text-base font-black text-white group-hover:text-emerald-300 leading-tight">
                  {language === 'ur' ? 'ملک کے لیے' : 'For Nation'}
                </span>
              </button>

              {/* 5. انسانیت کے لیے */}
              <button 
                type="button"
                id="dimension-humanity"
                onClick={() => setSelectedPurposeAreaId('humanity')}
                title={language === 'ur' ? 'انسانیت کے لیے — مکمل رہنمائی و مشن کھولیں' : 'For Humanity — Open Guidance & Missions'}
                className="bg-slate-900/95 hover:bg-slate-900 rounded-2xl p-3.5 sm:p-4 border border-indigo-500/35 hover:border-indigo-400/70 transition-all flex flex-col items-center justify-center text-center gap-2.5 shadow-sm hover:shadow-md group cursor-pointer min-h-[104px] sm:min-h-[116px] active:scale-[0.98] w-full"
              >
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-indigo-950 text-indigo-300 flex items-center justify-center border border-indigo-500/40 group-hover:scale-105 group-hover:bg-indigo-900 transition-all shadow-inner shrink-0">
                  <Globe className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                </div>
                <span className="text-sm sm:text-base font-black text-white group-hover:text-indigo-300 leading-tight">
                  {language === 'ur' ? 'انسانیت کے لیے' : 'For Humanity'}
                </span>
              </button>

              {/* 6. آخرت کے لیے */}
              <button 
                type="button"
                id="dimension-hereafter"
                onClick={() => setSelectedPurposeAreaId('hereafter')}
                title={language === 'ur' ? 'آخرت کے لیے — مکمل رہنمائی و مشن کھولیں' : 'For Hereafter — Open Guidance & Missions'}
                className="bg-slate-900/95 hover:bg-slate-900 rounded-2xl p-3.5 sm:p-4 border border-amber-500/35 hover:border-amber-400/70 transition-all flex flex-col items-center justify-center text-center gap-2.5 shadow-sm hover:shadow-md group cursor-pointer min-h-[104px] sm:min-h-[116px] active:scale-[0.98] w-full"
              >
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-amber-950 text-amber-300 flex items-center justify-center border border-amber-500/40 group-hover:scale-105 group-hover:bg-amber-900 transition-all shadow-inner shrink-0">
                  <MoonStar className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                </div>
                <span className="text-sm sm:text-base font-black text-white group-hover:text-amber-300 leading-tight">
                  {language === 'ur' ? 'آخرت کے لیے' : 'For Hereafter'}
                </span>
              </button>

            </div>
          </div>

          {/* 3. DIGNIFIED QURANIC AYAH & TRANSLATION SECTION */}
          <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-teal-950/80 rounded-2xl p-5 sm:p-6 border border-amber-400/30 relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 space-y-3 font-arabic text-center sm:text-start">
              <div className="flex items-center justify-between gap-2 flex-wrap border-b border-amber-400/20 pb-2.5">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>{language === 'ur' ? 'قرآنی رہنما اصول' : 'Quranic Guiding Principle'}</span>
                </span>
                <span className="text-xs font-bold text-amber-200/80 px-2.5 py-0.5 rounded-md bg-amber-950/70 border border-amber-400/30">
                  سورۃ الرعد، 13:11
                </span>
              </div>

              {/* Arabic Verse */}
              <p className="text-lg sm:text-2xl font-black text-amber-200 tracking-wide leading-loose text-center py-1 font-arabic" dir="rtl">
                ”إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ“
              </p>

              {/* Urdu Translation */}
              <p className="text-sm sm:text-base font-bold text-slate-100 leading-relaxed text-center" dir="rtl">
                ”بے شک اللہ کسی قوم کی حالت نہیں بدلتا جب تک وہ خود اپنی حالت نہ بدلیں۔“
              </p>
            </div>
          </div>

          {/* 4. SEEKHO CORE PHILOSOPHY TAGLINE */}
          <div className="text-center pt-1 border-t border-slate-700/60">
            <p className="text-emerald-300 font-black text-sm sm:text-base font-arabic leading-relaxed">
              {language === 'ur'
                ? '”سیکھو، عمل کرو، خود کو سنوارو اور دوسروں کے کام آؤ۔“'
                : '“Learn, act, refine yourself, and benefit others.”'}
            </p>
          </div>

        </div>
      </div>

      {/* SEEKHO RAHNAMA GUIDE BANNER */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-5 sm:p-6 mb-8 border border-emerald-500/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          {/* Professional Modern Mentor Avatar */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-emerald-800 to-teal-600 border-2 border-emerald-400/40 text-amber-300 flex items-center justify-center shadow-md shrink-0 relative">
            <GraduationCap className="w-8 h-8 text-amber-300" />
            <span className="absolute -bottom-1 -end-1 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-arabic">
                {language === 'ur' ? 'رہنما' : 'Guide & Mentor'}
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-black font-arabic mt-1 text-white">
              {language === 'ur' ? 'سیکھو رہنما — آپ کا مخلص ساتھی' : 'Seekho Rahnama — Your Dedicated Mentor'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-arabic mt-0.5">
              {language === 'ur'
                ? 'علم کو عمل، ہنر کو خدمت اور آخرت کی کامیابی سے جوڑنے میں رہنمائی'
                : 'Guiding you to connect knowledge with action, service and life purpose'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end flex-wrap">
          <button
            type="button"
            id="seekho-rahnama-listen-btn"
            onClick={() => {
              const intro = language === 'ur'
                ? 'السلام علیکم ورحمۃ اللہ وبرکاتہ! خوش آمدید دعا فاطمہ۔ میں آپ کا سیکھو رہنما ہوں۔ علم سے عمل، ہنر سے اثر اور آخرت کی کامیابی کے اس سفر میں، میں ہر قدم پر آپ کے ساتھ ہوں۔ بتائیں آج ہم کیا نیا سیکھیں گے؟'
                : 'Assalam-o-Alaikum wa Rahmatullah wa Barakatuh! Welcome Dua Fatima. I am your Seekho mentor. On this journey from knowledge to action, skills to impact, and success in the Hereafter, I am with you every step.';
              speakText(intro, {
                id: 'seekho-mentor-guide-voice',
                language,
                rate: 0.86,
                pitch: 0.85,
              });
            }}
            className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition font-arabic flex items-center gap-2 shrink-0 min-h-[44px] cursor-pointer"
            title={language === 'ur' ? 'رہنما کا پیغام سنیں' : 'Listen Mentor Message'}
          >
            <Volume2 className="w-4 h-4 text-slate-950" />
            <span>{language === 'ur' ? 'رہنما کا پیغام سنیں' : 'Listen Mentor'}</span>
          </button>

          <button
            type="button"
            id="seekho-rahnama-chat-btn"
            onClick={() => onOpenAITeacher()}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-md transition font-arabic flex items-center gap-2 shrink-0 min-h-[44px] cursor-pointer"
            title={language === 'ur' ? 'رہنما سے سوال پوچھیں' : 'Ask Mentor Question'}
          >
            <Bot className="w-4 h-4 text-white" />
            <span>{language === 'ur' ? 'رہنما سے بات کریں' : 'Talk to Mentor'}</span>
          </button>
        </div>
      </div>

      {/* 2. 4 CLEAR, HIGH-IMPACT PRIMARY CARDS WITH GENEROUS WHITESPACE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8">
        {/* Card 1: 💼 حلال روزگار اور عملی ہنر */}
        <div
          id="card-skills-livelihood"
          onClick={() => onNavigateToTab('skills')}
          title={language === 'ur' ? 'ہنر اور حلال روزگار کے اسباق' : 'Skills and Livelihood Lessons'}
          className="bg-white hover:bg-emerald-50/40 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition">
              <Wrench className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-800 font-arabic transition">
              {language === 'ur' ? 'حلال روزگار اور عملی ہنر' : 'Livelihood & Practical Skills'}
            </h3>
            <p className="text-[16px] sm:text-[17px] text-slate-600 font-arabic leading-[1.8]">
              {language === 'ur'
                ? 'موبائل، ڈیجیٹل ہنر اور مقامی کام کے آسان اسباق'
                : 'Easy lessons on mobile, digital skills, and local trade craftsmanship.'}
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-emerald-700 font-bold font-arabic text-sm">
            <span>{language === 'ur' ? 'اسباق کھولیں' : 'Open Skills'}</span>
            <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 2: 🧠 فکر و تدبر اور قرآنی بصیرت */}
        <div
          id="card-quranic-reflection"
          onClick={() => onOpenQuranicWisdom ? onOpenQuranicWisdom() : onNavigateToTab('quranic_wisdom')}
          title={language === 'ur' ? 'فکر و تدبر اور قرآنی حکمت' : 'Thinking and Quranic Wisdom'}
          className="bg-white hover:bg-amber-50/40 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition">
              <Compass className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-amber-800 font-arabic transition">
              {language === 'ur' ? 'فکر و تدبر اور قرآنی بصیرت' : 'Thinking & Qur\'anic Mindset'}
            </h3>
            <p className="text-[16px] sm:text-[17px] text-slate-600 font-arabic leading-[1.8]">
              {language === 'ur'
                ? 'بغیر رٹا سوچنا، مسائل کا حل اور آخرت کی تیاری'
                : 'Thinking without rote, solving problems, and preparing for the Hereafter.'}
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-amber-800 font-bold font-arabic text-sm">
            <span>{language === 'ur' ? 'تدبر شروع کریں' : 'Start Reflection'}</span>
            <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 3: 🌍 دائرہ اثر: خاندان و معاشرہ */}
        <div
          id="card-family-society"
          onClick={() => onOpenFamilySociety ? onOpenFamilySociety() : onNavigateToTab('family_society')}
          title={language === 'ur' ? 'خاندان اور معاشرے کی خدمت' : 'Family and Society Service'}
          className="bg-white hover:bg-teal-50/40 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition">
              <HeartHandshake className="w-6 h-6 text-teal-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-teal-800 font-arabic transition">
              {language === 'ur' ? 'دائرہ اثر: خاندان و معاشرہ' : 'Impact & Community'}
            </h3>
            <p className="text-[16px] sm:text-[17px] text-slate-600 font-arabic leading-[1.8]">
              {language === 'ur'
                ? 'والدین کی خدمت، علاقے کی بہتری اور خلقِ خدا کا نفع'
                : 'Serving parents, neighborhood improvement, and benefiting humanity.'}
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-teal-800 font-bold font-arabic text-sm">
            <span>{language === 'ur' ? 'خدمت کے اقدامات' : 'Community Actions'}</span>
            <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 4: 🎙️ سیکھو رہنما سے سوال کریں */}
        <div
          id="card-ask-ai-mentor"
          onClick={() => onOpenAITeacher()}
          title={language === 'ur' ? 'سیکھو رہنما سے سوال پوچھیں' : 'Ask Seekho Mentor'}
          className="bg-white hover:bg-orange-50/40 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition">
              <Bot className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-orange-600 font-arabic transition">
              {language === 'ur' ? 'سیکھو رہنما سے سوال کریں' : 'Seekho Rahnama - Guided AI'}
            </h3>
            <p className="text-[16px] sm:text-[17px] text-slate-600 font-arabic leading-[1.8]">
              {language === 'ur'
                ? 'آواز یا تحریر سے اپنے سوال کا آسان اسلامی و عملی جواب پائیں'
                : 'Get simple Islamic & practical answers via voice or text.'}
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-orange-700 font-bold font-arabic text-sm">
            <span>{language === 'ur' ? 'رہنما سے بات کریں' : 'Talk to AI Mentor'}</span>
            <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* 3. EVENING SELF-REFLECTION (محاسبہ و آخرت) */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/30 my-8 space-y-5">
        <div className="flex items-center justify-between gap-3 flex-wrap border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-xs shrink-0">
              ⭐
            </span>
            <h3 className="text-lg sm:text-xl font-black text-amber-300 font-arabic">
              {language === 'ur' ? 'آج کا جائزہ (محاسبہ و آخرت)' : 'Daily Evening Self-Reflection'}
            </h3>
          </div>
          <span className="urdu-badge px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
            +15 {language === 'ur' ? 'پوائنٹس' : 'Points'}
          </span>
        </div>

        <p className="text-xl sm:text-2xl font-black text-white font-arabic leading-snug">
          {language === 'ur'
            ? '”آج کا جائزہ: کیا آج میرا عمل رب کی رضا اور خلقِ خدا کے فائدے کے لیے تھا؟“'
            : '“Daily Reflection: Was my action today for Divine pleasure and the benefit of humanity?”'}
        </p>

        {reflectionAnswered ? (
          <div className="bg-emerald-900/60 border border-emerald-500/50 rounded-2xl p-4 text-emerald-200 font-arabic text-center font-bold">
            {language === 'ur' ? '✅ ماشاءاللہ! آج کا محاسبہ مکمل ہوا۔ جزاک اللہ خیر!' : '✅ Reflection completed. Jazakallah Khair!'}
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={() => handleReflectionSelect('الحمد لله، بہتری کی کوشش کی')}
              className="urdu-btn py-3.5 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base sm:text-lg shadow-md transition flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{language === 'ur' ? 'الحمد لله، بہتری کی کوشش کی' : 'Alhamdulillah, tried my best'}</span>
            </button>
            <button
              onClick={() => handleReflectionSelect('ان شاء اللہ کل مزید بہتر کریں گے')}
              className="urdu-btn py-3.5 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base sm:text-lg shadow-md transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 shrink-0" />
              <span>{language === 'ur' ? 'ان شاء اللہ کل مزید بہتر کریں گے' : 'Insha\'Allah will do better tomorrow'}</span>
            </button>
          </div>
        )}
      </div>

      {/* 4. Footer Trust & Vision */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 font-arabic my-8">
        <div className="space-y-1.5 text-center sm:text-start">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <span className="text-lg font-black text-slate-900">
              {language === 'ur' ? 'سیکھو — Seekho' : 'Seekho'}
            </span>
            <span className="urdu-badge px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-300">
              {language === 'ur' ? 'بانی: وسیم صابر (Waseem Sabir)' : 'Founder: Waseem Sabir'}
            </span>
          </div>
          <p className="text-base text-slate-700 font-bold leading-relaxed">
            {language === 'ur'
              ? '”سیکھو — علم کو عمل، کردار اور بہتر زندگی سے جوڑنے کی کوشش ہے۔“'
              : '“Seekho is a dedicated effort to connect knowledge with action, character, and a better life.”'}
          </p>
        </div>

        <button
          id="home-open-vision-trust-btn"
          onClick={onOpenVisionModal}
          className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 border border-slate-200 text-sm font-bold transition shadow-xs flex items-center gap-2 shrink-0"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          <span>{language === 'ur' ? 'تعارف، رازداری و اعتماد' : 'About, Privacy & Trust'}</span>
        </button>
      </div>

      {/* 5. INTERACTIVE LIFE PURPOSE GUIDANCE MODAL */}
      {selectedPurposeAreaId && (
        <LifePurposeModal
          areaId={selectedPurposeAreaId}
          language={language}
          onClose={() => setSelectedPurposeAreaId(null)}
          onSelectArea={(newAreaId) => setSelectedPurposeAreaId(newAreaId)}
          onCompleteActionReward={(areaId, points, title) => {
            if (onCompletePurposeAction) {
              onCompletePurposeAction(areaId, points, title);
            } else if (onCompleteLifeLesson) {
              onCompleteLifeLesson(`purpose-${areaId}`, points, title);
            }
          }}
        />
      )}
    </div>
  );
};
