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

  const [isPlayingHeaderAudio, setIsPlayingHeaderAudio] = useState(false);
  const handleToggleHeaderAudio = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isPlayingHeaderAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingHeaderAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const text = language === 'ur'
        ? 'السلام علیکم! سیکھو. علم سے عمل، ہنر سے اثر، اور آخرت کی کامیابی تک۔'
        : 'Assalam-o-Alaikum! Seekho. From knowledge to action, skills to impact, and success in the Hereafter.';
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'ur' ? 'ur-PK' : 'en-US';
      utterance.rate = 0.9;
      utterance.onend = () => setIsPlayingHeaderAudio(false);
      utterance.onerror = () => setIsPlayingHeaderAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingHeaderAudio(true);
    }
  };

  const [reflectionAnswered, setReflectionAnswered] = useState<string | null>(() => {
    try {
      return localStorage.getItem('seekho_daily_reflection_done') || null;
    } catch {
      return null;
    }
  });

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
      {/* 1. CLEAN HEADER & SLOGAN WITH GLOBAL AUDIO READOUT (🔊) */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-md relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-arabic">
                {language === 'ur' ? 'پلیٹ فارم وژن' : 'Platform Vision & Purpose'}
              </span>
              <button
                type="button"
                onClick={handleToggleHeaderAudio}
                className="px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black font-arabic flex items-center gap-2 shadow-sm transition"
                title={language === 'ur' ? 'وژن اور سلاگن سنیں' : 'Listen to vision and slogan'}
              >
                <span>{isPlayingHeaderAudio ? '⏹' : '🔊'}</span>
                <span>{isPlayingHeaderAudio ? (language === 'ur' ? 'آڈیو بند کریں' : 'Stop Audio') : (language === 'ur' ? 'وژن آڈیو سنیں' : 'Listen Vision')}</span>
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white font-arabic tracking-tight leading-snug">
              {language === 'ur' ? 'السلام علیکم!' : 'Assalam-o-Alaikum!'}{' '}
              <span className="text-emerald-300">{userProfile.name || (language === 'ur' ? 'معزز ساتھی' : 'Learner')}</span>
            </h1>

            {/* Core Message Area as requested */}
            <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-700 space-y-2 font-arabic shadow-inner">
              <p className="text-emerald-300 font-black text-base sm:text-lg">
                {language === 'ur' ? 'یہ ایپ آپ کے لیے ہے —' : 'This application is for you —'}
              </p>
              <p className="text-slate-100 text-sm sm:text-base font-semibold leading-relaxed">
                {language === 'ur'
                  ? 'اپنے آپ کے لیے، اپنے خاندان کے لیے، معاشرے کے لیے، ملک کے لیے، قوم کے لیے، ساری دنیا اور انسانیت کے لیے فائدہ مند بننے کے لیے۔'
                  : 'To become beneficial for yourself, your family, society, country, nation, the entire world, and all of humanity.'}
              </p>
              <p className="text-amber-300 font-bold text-xs sm:text-sm pt-1">
                {language === 'ur'
                  ? '”ایک بامقصد نظریہ اپنائیں، اپنی زندگی کو بہتر بنائیں اور اپنی آخرت بھی سنواریں۔“'
                  : '“Adopt a purposeful vision, improve your life, and enrich your Hereafter.”'}
              </p>
            </div>
          </div>

          {/* Quick Streak & Points Badge */}
          <div className="flex items-center gap-4 bg-slate-800/90 p-4 rounded-2xl border border-slate-700 self-stretch md:self-auto justify-around shrink-0">
            <div className="text-center px-2">
              <div className="flex items-center justify-center gap-1.5 text-amber-400 font-black text-2xl font-arabic">
                <Flame className="w-6 h-6 fill-amber-400" />
                <span>{userProfile.streakDays}</span>
              </div>
              <span className="text-xs text-slate-300 block font-bold font-arabic mt-0.5">
                {language === 'ur' ? 'دن کا تسلسل' : 'Day Streak'}
              </span>
            </div>
            <div className="w-px h-10 bg-slate-700" />
            <div className="text-center px-2">
              <div className="flex items-center justify-center gap-1.5 text-emerald-300 font-black text-2xl font-arabic">
                <Award className="w-6 h-6" />
                <span>{userProfile.points}</span>
              </div>
              <span className="text-xs text-slate-300 block font-bold font-arabic mt-0.5">
                {language === 'ur' ? 'پوائنٹس' : 'Points'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MALE MENTOR VOICE GUIDE BANNER (سیکھو رہنما - مردانہ استاد) */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-2xl p-4 sm:p-5 mb-8 border border-emerald-500/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-2xl shadow-md shrink-0">
            👨‍🏫
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-arabic">
                {language === 'ur' ? 'مردانہ رہنما و استاد' : 'Male Mentor Guide'}
              </span>
              <span className="text-xs text-amber-300 font-arabic font-bold">
                {language === 'ur' ? 'قدرتی اردو آواز' : 'Natural Urdu Voice'}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-black font-arabic mt-1">
              {language === 'ur' ? 'سیکھو رہنما — آپ کا ہمدرد اور مخلص استاد' : 'Seekho Rahnama — Your Wise & Encouraging Mentor'}
            </h4>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
            window.speechSynthesis.cancel();
            const intro = language === 'ur'
              ? 'السلام علیکم میرے معزز ساتھی! میں آپ کا سیکھو رہنما ہوں۔ علم سے عمل، ہنر سے اثر اور آخرت کی کامیابی کے اس سفر میں، میں ہر قدم پر آپ کے ساتھ ہوں۔ بتائیں آج ہم کیا نیا سیکھیں گے؟'
              : 'Assalam-o-Alaikum my dear friend! I am your Seekho mentor. On this journey from knowledge to action, skills to impact, and success in the Hereafter, I am with you every step.';
            const utt = new SpeechSynthesisUtterance(intro);
            utt.lang = language === 'ur' ? 'ur-PK' : 'en-US';
            utt.rate = 0.88;
            utt.pitch = 0.88;
            window.speechSynthesis.speak(utt);
          }}
          className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition font-arabic flex items-center gap-2 shrink-0"
        >
          <span>🔊</span>
          <span>{language === 'ur' ? 'رہنما کی آواز سنیں' : 'Listen Mentor'}</span>
        </button>
      </div>

      {/* 2. 4 CLEAR, HIGH-IMPACT PRIMARY CARDS WITH GENEROUS WHITESPACE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8">
        {/* Card 1: 💼 حلال روزگار اور عملی ہنر */}
        <div
          onClick={() => onNavigateToTab('skills')}
          className="bg-white hover:bg-emerald-50/40 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition">
              <Briefcase className="w-6 h-6 text-emerald-700" />
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
          onClick={() => onOpenIslamicModal ? onOpenIslamicModal(0) : onNavigateToTab('library')}
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
          onClick={() => onNavigateToTab('community')}
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
          onClick={() => onOpenAITeacher()}
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
    </div>
  );
};
