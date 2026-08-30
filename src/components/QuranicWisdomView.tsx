import React, { useState, useMemo } from 'react';
import {
  Brain,
  BookOpen,
  Sparkles,
  Search,
  CheckCircle2,
  Filter,
  Scale,
  Compass,
  Heart,
  Users,
  ShieldCheck,
  Lightbulb,
  AlertTriangle,
  Clock,
  Briefcase,
  Sprout,
  Flame,
  Award,
  ArrowLeft,
  ArrowRight,
  Bot,
  HelpCircle,
  Share2,
  Calendar,
  Check,
  RotateCcw,
  Volume2,
  VolumeX,
  Target,
  Layers,
  MessageSquare,
  Eye,
  FileCheck,
  AlertCircle,
  TrendingUp,
  Bookmark,
  Send,
  Zap,
  BookMarked
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import {
  QURANIC_WISDOM_CATEGORIES,
  QURANIC_TOPICS_MASTER_DATA,
  DAILY_THOUGHT_QUESTIONS,
  SOCIETAL_ISSUES_MASTER_DATA,
  CRITICAL_THINKING_MODULES,
  DAILY_PRACTICAL_DEEDS,
  ONE_AYAH_ONE_PROBLEM_MASTER,
  COGNITIVE_BIASES_MASTER,
  CLAIM_VS_EVIDENCE_QUIZ_DATA,
  HEARSAY_VS_FACT_SCENARIOS,
  LIFE_QUESTIONS_IN_QURAN_MASTER,
  WEEKLY_INTELLECTUAL_TOPICS_MASTER,
  TOUGH_QUESTIONS_BALANCED_MASTER,
  KNOWLEDGE_TO_CHARACTER_MASTER,
  QuranicTopicItem,
  DailyThoughtQuestion,
  searchQuranicWisdomMaster
} from '../data/quranicWisdomMasterData';
import { QuranicTopicDetailModal } from './QuranicTopicDetailModal';
import { QuranicSelfReflectionModal } from './QuranicSelfReflectionModal';
import { speakText, stopSpeaking } from '../utils/speech';

interface QuranicWisdomViewProps {
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacherWithPrompt: (prompt: string) => void;
  onRewardPoints?: (points: number, messageUrdu: string, messageEn: string) => void;
}

export type QuranicTab =
  | 'topics'
  | 'oneAyahOneProblem'
  | 'criticalThinking'
  | 'claimVsEvidence'
  | 'hearsayVsFact'
  | 'lifeQuestions'
  | 'societalIssues'
  | 'weeklyTopic'
  | 'toughQuestions'
  | 'characterJourney'
  | 'dailyDeeds';

export const QuranicWisdomView: React.FC<QuranicWisdomViewProps> = ({
  language,
  userProfile,
  onOpenAITeacherWithPrompt,
  onRewardPoints,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [activeTab, setActiveTab] = useState<QuranicTab>('topics');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals state
  const [selectedTopicModal, setSelectedTopicModal] = useState<QuranicTopicItem | null>(null);
  const [showSelfReflectionModal, setShowSelfReflectionModal] = useState<boolean>(false);

  // Daily thought question state
  const [dailyQuestionAnswered, setDailyQuestionAnswered] = useState<boolean>(() => {
    try {
      return localStorage.getItem('seekho_daily_thought_q_done') === 'true';
    } catch {
      return false;
    }
  });
  const [dailyQuestionInput, setDailyQuestionInput] = useState('');

  // Daily completed deeds tracking
  const [completedDeedIds, setCompletedDeedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_completed_quran_deeds');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 1 Ayah 1 Problem completed challenges tracking
  const [completedProblemIds, setCompletedProblemIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_completed_oaop_lessons');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Claim vs Evidence Quiz State
  const [userQuizAnswers, setUserQuizAnswers] = useState<Record<string, boolean>>({});

  // Active weekly topic index
  const [activeWeeklyTopicIdx, setActiveWeeklyTopicIdx] = useState(0);

  const currentDailyThought: DailyThoughtQuestion = DAILY_THOUGHT_QUESTIONS[0];

  // Filtered topics based on search & category
  const filteredTopics = useMemo(() => {
    let result = searchQuranicWisdomMaster(searchQuery);
    if (selectedCategory !== 'all') {
      result = result.filter((item) => item.categoryKey === selectedCategory);
    }
    return result;
  }, [searchQuery, selectedCategory]);

  const [isPlayingHeaderAudio, setIsPlayingHeaderAudio] = useState(false);
  const handleToggleHeaderAudio = () => {
    if (isPlayingHeaderAudio) {
      stopSpeaking();
      setIsPlayingHeaderAudio(false);
    } else {
      const text = 'فکر و تدبر اور قرآنی بصیرت۔ قرآن سے سمجھ، غور، سوال، سوچ، عمل، کردار اور معاشرے میں فائدہ مند بننے کا جامع فکری نظام۔';
      speakText(text, {
        id: 'quranic-wisdom-header-audio',
        language: 'ur',
        rate: 0.86,
        pitch: 0.84, // Male mentor pitch
      });
      setIsPlayingHeaderAudio(true);
    }
  };

  const handleCompleteDailyThought = () => {
    if (!dailyQuestionInput.trim()) return;
    setDailyQuestionAnswered(true);
    try {
      localStorage.setItem('seekho_daily_thought_q_done', 'true');
    } catch (e) {
      console.error(e);
    }
    if (onRewardPoints) {
      onRewardPoints(20, '🎉 ماشاءاللہ! آج کے فکری سوال کا جواب محفوظ ہو گیا (+20 XP)', '🎉 Daily reflection saved (+20 XP)');
    }
  };

  const handleToggleDeedComplete = (deedId: string, points: number) => {
    const isDone = completedDeedIds.includes(deedId);
    let updated: string[];
    if (isDone) {
      updated = completedDeedIds.filter((id) => id !== deedId);
    } else {
      updated = [...completedDeedIds, deedId];
      if (onRewardPoints) {
        onRewardPoints(points, `🎉 ماشاءاللہ! آج کا عمل مکمل ہوا (+${points} XP)`, `🎉 Daily practical action completed (+${points} XP)`);
      }
    }
    setCompletedDeedIds(updated);
    try {
      localStorage.setItem('seekho_completed_quran_deeds', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleProblemAction = (problemId: string, points: number) => {
    const isDone = completedProblemIds.includes(problemId);
    let updated: string[];
    if (isDone) {
      updated = completedProblemIds.filter((id) => id !== problemId);
    } else {
      updated = [...completedProblemIds, problemId];
      if (onRewardPoints) {
        onRewardPoints(points, `🎉 ماشاءاللہ! عملی سبق کا چیلنج مکمل ہوا (+${points} XP)`, `🎉 Practical challenge completed (+${points} XP)`);
      }
    }
    setCompletedProblemIds(updated);
    try {
      localStorage.setItem('seekho_completed_oaop_lessons', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAnswerClaimQuiz = (itemId: string, selectedIsEvidence: boolean) => {
    setUserQuizAnswers((prev) => ({ ...prev, [itemId]: selectedIsEvidence }));
    const item = CLAIM_VS_EVIDENCE_QUIZ_DATA.find((q) => q.id === itemId);
    if (item && item.isEvidence === selectedIsEvidence && onRewardPoints) {
      onRewardPoints(10, '🌟 زبردست! آپ نے دلیل اور دعوے کا درست فیصلہ کیا (+10 XP)', '🌟 Correct evaluation of Evidence vs Claim (+10 XP)');
    }
  };

  return (
    <div className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 font-arabic">
      
      {/* 1. SECTION MASTER HEADER & PURPOSE */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-md relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-arabic">
                🧠 فکری اور قرآنی نظام
              </span>
              <button
                type="button"
                onClick={handleToggleHeaderAudio}
                className="px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black flex items-center gap-2 shadow-xs transition cursor-pointer"
              >
                <span>{isPlayingHeaderAudio ? '⏹' : '🔊'}</span>
                <span>{isPlayingHeaderAudio ? 'آڈیو بند کریں' : 'تعارف سنیں'}</span>
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              فکر و تدبر اور قرآنی بصیرت
            </h1>

            {/* Core Methodology Formula Banner */}
            <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-700 space-y-2 shadow-inner">
              <p className="text-amber-300 font-black text-sm sm:text-base">
                قرآن کا فکری سفر:
              </p>
              <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold text-slate-100">
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-700 text-emerald-300">قرآن</span>
                <span>←</span>
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-700 text-teal-300">سمجھ</span>
                <span>←</span>
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-700 text-amber-300">غور</span>
                <span>←</span>
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-700 text-indigo-300">سوال</span>
                <span>←</span>
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-700 text-purple-300">سوچ</span>
                <span>←</span>
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-700 text-rose-300">عمل</span>
                <span>←</span>
                <span className="px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-700 text-emerald-300">کردار</span>
                <span>←</span>
                <span className="px-2.5 py-1 bg-emerald-700 text-white rounded-lg font-black">معاشرے میں نفع</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 pt-1 leading-relaxed">
                یہ سیکشن صرف زبانی یاد کرنے کے لیے نہیں ہے، بلکہ عقل کو بیدار کرنے، سوال کرنے، اندھی تقلید سے بچنے اور عملی زندگی میں سچا، منصف اور فائدہ مند انسان بننے کی تربیت ہے۔
              </p>
            </div>
          </div>

          {/* Quick Action Button to Self Assessment */}
          <div className="flex flex-col gap-3 shrink-0 self-stretch md:self-auto">
            <button
              onClick={() => setShowSelfReflectionModal(true)}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>🪞</span>
              <span>خود احتسابی کا آئینہ (جائزہ)</span>
            </button>
            <button
              onClick={() => {
                onOpenAITeacherWithPrompt(
                  'السلام علیکم! مجھے قرآن سے سوچنا اور تنقیدی فکر (Critical Thinking) کے اصول سیکھنے ہیں، رہنمائی فرمائیں۔'
                );
              }}
              className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/30 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Bot className="w-4 h-4 text-amber-400" />
              <span>AI فکری رہنما سے مکالمہ</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. TODAY'S DEEP CONTEMPLATION QUESTION ("آج کا سوال") */}
      <div className="bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 mb-8 space-y-4 shadow-lg">
        <div className="flex items-center justify-between gap-3 flex-wrap border-b border-amber-500/20 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm">
              ❓
            </span>
            <h3 className="text-lg sm:text-xl font-black text-amber-300">
              آج کا فکری سوال (رک کر سوچیں)
            </h3>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full border border-amber-400/30">
            {currentDailyThought.quranicReference}
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-xl sm:text-2xl font-black text-white leading-snug">
            ”{currentDailyThought.questionUrdu}“
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            {currentDailyThought.contextUrdu}
          </p>
        </div>

        {!dailyQuestionAnswered ? (
          <div className="space-y-3 pt-2">
            <textarea
              rows={2}
              value={dailyQuestionInput}
              onChange={(e) => setDailyQuestionInput(e.target.value)}
              placeholder="اپنا جواب یا سوچ یہاں لکھیں (مثلاً: مجھے اپنی صفائی اور وعدے پر توجہ دینی چاہیے...)"
              className="w-full bg-slate-950 border border-slate-700 rounded-2xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-arabic"
            />
            <button
              onClick={handleCompleteDailyThought}
              disabled={!dailyQuestionInput.trim()}
              className="px-6 py-3 rounded-xl bg-amber-400 disabled:opacity-40 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>جواب محفوظ کریں (+20 XP)</span>
            </button>
          </div>
        ) : (
          <div className="p-3.5 bg-emerald-950/80 border border-emerald-500/50 rounded-2xl text-emerald-200 font-bold text-sm flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>ماشاءاللہ! آج کے فکری سوال پر آپ کا تدبر اور جواب محفوظ ہو چکا ہے۔</span>
          </div>
        )}
      </div>

      {/* 3. MASTER SUB-TABS NAVIGATION */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-slate-200 scrollbar-none">
        <button
          onClick={() => setActiveTab('topics')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'topics'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>قرآنی موضوعات و کیٹلاگ ({QURANIC_WISDOM_CATEGORIES.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('oneAyahOneProblem')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'oneAyahOneProblem'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>ایک آیت، ایک مسئلہ، ایک عملی سبق ({ONE_AYAH_ONE_PROBLEM_MASTER.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('criticalThinking')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'criticalThinking'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Brain className="w-4 h-4 text-teal-400" />
          <span>سوچنا سیکھیں اور تعصبات ({COGNITIVE_BIASES_MASTER.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('claimVsEvidence')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'claimVsEvidence'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Scale className="w-4 h-4 text-indigo-400" />
          <span>دلیل بمقابلہ دعویٰ (کوئز)</span>
        </button>

        <button
          onClick={() => setActiveTab('hearsayVsFact')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'hearsayVsFact'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>سنی سنائی بات یا حقیقت؟</span>
        </button>

        <button
          onClick={() => setActiveTab('lifeQuestions')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'lifeQuestions'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-rose-400" />
          <span>قرآن سے اپنے سوالات ({LIFE_QUESTIONS_IN_QURAN_MASTER.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('societalIssues')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'societalIssues'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Users className="w-4 h-4 text-amber-400" />
          <span>معاشرتی مسائل کا علاج ({SOCIETAL_ISSUES_MASTER_DATA.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('weeklyTopic')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'weeklyTopic'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Compass className="w-4 h-4 text-blue-400" />
          <span>ہفتہ وار فکری موضوع</span>
        </button>

        <button
          onClick={() => setActiveTab('toughQuestions')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'toughQuestions'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Lightbulb className="w-4 h-4 text-emerald-400" />
          <span>مشکل سوالات کے متوازن جوابات</span>
        </button>

        <button
          onClick={() => setActiveTab('characterJourney')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'characterJourney'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <TrendingUp className="w-4 h-4 text-teal-400" />
          <span>علم → فہم → عمل → کردار</span>
        </button>

        <button
          onClick={() => setActiveTab('dailyDeeds')}
          className={`px-4 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'dailyDeeds'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Target className="w-4 h-4 text-rose-400" />
          <span>آج ایک عملی کام ({completedDeedIds.length}/{DAILY_PRACTICAL_DEEDS.length})</span>
        </button>
      </div>

      {/* 4. SUB-TAB 1: ALL TOPICS & 26 CATEGORIES */}
      {activeTab === 'topics' && (
        <div className="space-y-8">
          
          {/* SEARCH BAR */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="تلاش کریں: اردو (جھوٹ، انصاف)، Roman Urdu (jhoot, adl, verification)، یا English (critical thinking)..."
                className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:outline-none text-base text-slate-900 placeholder-slate-400 font-arabic"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  صاف کریں
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-emerald-800 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                تمام کیٹیگریز ({QURANIC_TOPICS_MASTER_DATA.length})
              </button>
              {QURANIC_WISDOM_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-800 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.titleUrdu}
                </button>
              ))}
            </div>
          </div>

          {/* TOPICS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => setSelectedTopicModal(topic)}
                className="bg-white hover:bg-emerald-50/30 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      {topic.categoryTitleUrdu}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono text-xs font-bold">
                      {topic.surahReference}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-800 transition leading-snug">
                    {topic.titleUrdu}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {topic.taglineUrdu}
                  </p>

                  {/* Highlight Box */}
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-sm text-slate-700 font-medium line-clamp-2">
                    ”{topic.translationUrdu}“
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-emerald-700 font-bold text-sm">
                  <span className="flex items-center gap-1.5">
                    <span>گہرا مطالعہ و ۴ درجاتِ فہم</span>
                    <span>(+{topic.points} XP)</span>
                  </span>
                  <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-6 space-y-3">
              <span className="text-4xl block">🔍</span>
              <h3 className="text-xl font-black text-slate-900">کوئی قرآنی موضوع نہیں ملا</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                آپ کے مطلوبہ لفظ سے ملتا جلتا کوئی موضوع نہیں ملا۔ براہ کرم مختلف الفاظ آزمائیں یا کیٹیگری تبدیل کریں۔
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm cursor-pointer"
              >
                سب دکھائیں
              </button>
            </div>
          )}
        </div>
      )}

      {/* 5. SUB-TAB 2: ONE AYAH, ONE PROBLEM, ONE LESSON */}
      {activeTab === 'oneAyahOneProblem' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="px-3 py-1 rounded-full bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
              زندگی کے حقیقی مسائل اور قرآنی حل
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              ایک آیت، ایک مسئلہ، ایک عملی سبق
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              ہمارے روزمرہ کے حقیقی مسائل (ڈپریشن، غیبت، وعدہ خلافی، حسد، وقت کا ضیاع) کی جڑ اور قرآن سے اس کا فوری قابلِ عمل علاج۔
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ONE_AYAH_ONE_PROBLEM_MASTER.map((item) => {
              const isDone = completedProblemIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all flex flex-col justify-between space-y-4 shadow-xs ${
                    isDone ? 'border-emerald-400 bg-emerald-50/20' : 'border-slate-200'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-full">
                        {item.categoryUrdu}
                      </span>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        {item.surahReference}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                      {item.titleUrdu}
                    </h3>

                    {/* Problem Box */}
                    <div className="p-4 bg-rose-50 border border-rose-200/80 rounded-2xl space-y-1">
                      <strong className="text-xs font-black text-rose-900 block">
                        ⚠️ اصل مسئلہ و بگاڑ:
                      </strong>
                      <p className="text-sm text-rose-950 leading-relaxed font-medium">
                        {item.realLifeProblemUrdu}
                      </p>
                    </div>

                    {/* Ayah Box */}
                    <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2 shadow-inner">
                      <p className="text-lg font-arabic font-bold text-amber-300 leading-loose text-center">
                        {item.ayahArabic}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-200 text-center font-medium leading-relaxed">
                        ”{item.ayahTranslationUrdu}“
                      </p>
                    </div>

                    {/* Root Cause & Practical Lesson */}
                    <div className="space-y-2 text-sm text-slate-700">
                      <div>
                        <strong className="font-bold text-slate-900">🔍 مسئلہ کی اصل جڑ: </strong>
                        <span>{item.rootCauseUrdu}</span>
                      </div>
                      <div>
                        <strong className="font-bold text-slate-900">💡 عملی فہم: </strong>
                        <span>{item.practicalLessonUrdu}</span>
                      </div>
                    </div>

                    {/* Action Challenge */}
                    <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
                      <strong className="text-xs font-black text-emerald-900 block">
                        🎯 آج کا عملی چیلنج:
                      </strong>
                      <p className="text-sm text-emerald-950 font-bold leading-relaxed">
                        {item.actionChallengeUrdu}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleToggleProblemAction(item.id, item.points)}
                    className={`w-full py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition cursor-pointer ${
                      isDone
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{isDone ? 'چیلنج مکمل کر لیا گیا (ماشاءاللہ)' : `یہ چیلنج قبول کریں (+${item.points} XP)`}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 6. SUB-TAB 3: CRITICAL THINKING & COGNITIVE BIASES */}
      {activeTab === 'criticalThinking' && (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="px-3 py-1 rounded-full bg-teal-900 text-teal-300 border border-teal-500/40 text-xs font-bold">
              عقلی و فکری تربیت
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              کیا میں صحیح سوچ رہا ہوں؟ (سوچ کے مغالطے اور تعصبات)
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              ہمارا دماغ کن نفسیاتی جالوں میں پھنستا ہے اور قرآن ہمیں ان تعصبات سے نکل کر سچی دلیل اور منصفانہ سوچ پر کیسے لاتا ہے۔
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COGNITIVE_BIASES_MASTER.map((bias) => (
              <div
                key={bias.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-3 py-0.5 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold">
                      {bias.termEnglish}
                    </span>
                    <span className="text-xs text-amber-700 font-bold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {bias.quranicCureReference}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {bias.titleUrdu}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {bias.definitionUrdu}
                  </p>

                  <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200/80 text-xs text-amber-900 space-y-1">
                    <strong className="block font-bold">🧠 ہمارا دماغ کیسا دھوکہ کھاتا ہے؟</strong>
                    <span>{bias.howOurMindTrapsUsUrdu}</span>
                  </div>

                  <div className="p-3.5 bg-rose-50 rounded-2xl border border-rose-200/80 text-xs text-rose-950 space-y-1">
                    <strong className="block font-bold">📖 روزمرہ زندگی کی مثال:</strong>
                    <span>{bias.relatableStoryUrdu}</span>
                  </div>

                  {/* Quranic Cure */}
                  <div className="p-4 bg-emerald-950 text-white rounded-2xl space-y-2">
                    <span className="text-xs text-emerald-300 font-bold block">✨ قرآنی علاج:</span>
                    <p className="text-base font-arabic font-bold text-amber-300 leading-loose">
                      {bias.quranicCureVerse}
                    </p>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      {bias.quranicCureExplanationUrdu}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-800 space-y-1">
                  <strong className="font-bold text-slate-900 block">🪞 خود سے پوچھیں:</strong>
                  <span>{bias.diagnosticQuestionUrdu}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. SUB-TAB 4: CLAIM VS EVIDENCE QUIZ */}
      {activeTab === 'claimVsEvidence' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="px-3 py-1 rounded-full bg-indigo-900 text-indigo-300 border border-indigo-500/40 text-xs font-bold">
              عملی تربیتی ٹیسٹ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              دلیل اور دعویٰ میں فرق (خود کو آزمائیں)
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              ہر بیان کو پڑھیں اور فیصلہ کریں کہ کیا یہ ایک ”ٹھوس دلیل اور قابلِ تصدیق ثبوت“ ہے یا محض ایک ”ذاتی دعویٰ اور رائے“ ہے۔
            </p>
          </div>

          <div className="space-y-4">
            {CLAIM_VS_EVIDENCE_QUIZ_DATA.map((item, idx) => {
              const answered = userQuizAnswers[item.id] !== undefined;
              const isCorrect = userQuizAnswers[item.id] === item.isEvidence;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-800 font-bold text-xs rounded-full">
                      سوال {idx + 1} — {item.categoryUrdu}
                    </span>
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                      {item.quranReference}
                    </span>
                  </div>

                  <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {item.statementUrdu}
                  </p>

                  {/* Options */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <button
                      onClick={() => handleAnswerClaimQuiz(item.id, true)}
                      className={`px-5 py-2.5 rounded-2xl font-bold text-sm transition cursor-pointer ${
                        answered && userQuizAnswers[item.id] === true
                          ? item.isEvidence
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      📊 یہ ایک ٹھوس دلیل (Evidence) ہے
                    </button>

                    <button
                      onClick={() => handleAnswerClaimQuiz(item.id, false)}
                      className={`px-5 py-2.5 rounded-2xl font-bold text-sm transition cursor-pointer ${
                        answered && userQuizAnswers[item.id] === false
                          ? !item.isEvidence
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      🗣️ یہ صرف ایک دعویٰ / رائے (Claim) ہے
                    </button>
                  </div>

                  {/* Feedback */}
                  {answered && (
                    <div
                      className={`p-4 rounded-2xl border text-sm space-y-1.5 ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : 'bg-amber-50 border-amber-300 text-amber-950'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-black">
                        {isCorrect ? '✅ درست جواب!' : '💡 غور طلب بات:'}
                      </div>
                      <p className="leading-relaxed font-medium">
                        {item.explanationUrdu}
                      </p>
                      <p className="text-xs font-bold text-slate-600 pt-1">
                        📖 قرآنی اصول: {item.quranicRuleUrdu} ({item.quranReference})
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 8. SUB-TAB 5: HEARSAY VS FACT VERIFICATION */}
      {activeTab === 'hearsayVsFact' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="px-3 py-1 rounded-full bg-purple-900 text-purple-300 border border-purple-500/40 text-xs font-bold">
              معلومات کی تحقیق
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              سنی سنائی بات یا حقیقت؟ (افواہوں کا علاج)
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              سوشل میڈیا اور محفلوں میں گردش کرنے والی افواہوں کو بغیر تحقیق سچ ماننے اور آگے پھیلانے کے گناہ سے بچنے کا تربیتی نظام۔
            </p>
          </div>

          <div className="space-y-6">
            {HEARSAY_VS_FACT_SCENARIOS.map((scen) => (
              <div
                key={scen.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-purple-100 text-purple-900 font-bold text-xs rounded-full">
                    کیس اسٹڈی
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                    {scen.quranReference}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {scen.scenarioTitleUrdu}
                </h3>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 text-base font-medium leading-relaxed">
                  {scen.scenarioDescriptionUrdu}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl space-y-1.5">
                    <strong className="text-xs font-black text-rose-900 block">
                      ⚠️ اس میں افواہ اور خطرہ کیا تھا؟
                    </strong>
                    <p className="text-sm text-rose-950 font-medium leading-relaxed">
                      {scen.hearsayAspectUrdu}
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1.5">
                    <strong className="text-xs font-black text-emerald-900 block">
                      🔍 تصدیق کے درست طریقے:
                    </strong>
                    <ul className="text-sm text-emerald-950 space-y-1 list-disc list-inside font-medium">
                      {scen.howToVerifyUrdu.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-2xl flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <strong className="text-amber-300 font-black block">
                      قرآنی اصول: {scen.quranicPrincipleUrdu} ({scen.quranReference})
                    </strong>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      {scen.takeawayUrdu}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 9. SUB-TAB 6: LIFE QUESTIONS IN QURAN */}
      {activeTab === 'lifeQuestions' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="px-3 py-1 rounded-full bg-rose-900 text-rose-300 border border-rose-500/40 text-xs font-bold">
              وجود کے سوالات اور قرآن
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              قرآن کی روشنی میں اپنے سوالات کو سمجھنا
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              مشکلات کیوں آتی ہیں؟ محنت کے باوجود تاخیر کیوں؟ برے لوگ کیوں پھلتے پھولتے ہیں؟ قرآن کا گہرا اور تسلی بخش فکری جواب۔
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LIFE_QUESTIONS_IN_QURAN_MASTER.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-rose-100 text-rose-900 text-xs font-bold">
                      {item.categoryUrdu}
                    </span>
                    <span className="text-xs text-amber-800 font-bold bg-amber-100 px-2.5 py-0.5 rounded-full">
                      {item.surahReference}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {item.questionUrdu}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    <strong className="text-slate-900">یہ سوال کیوں پیدا ہوتا ہے: </strong>
                    {item.whyWeAskThisUrdu}
                  </p>

                  <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2 shadow-inner">
                    <p className="text-base sm:text-lg font-arabic font-bold text-amber-300 leading-loose text-center">
                      {item.keyAyahArabic}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200 text-center font-medium leading-relaxed">
                      ”{item.ayahTranslationUrdu}“
                    </p>
                  </div>

                  <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1 text-sm text-emerald-950">
                    <strong className="font-bold text-emerald-900 block">✨ قرآنی تناظر:</strong>
                    <p className="leading-relaxed font-medium">{item.quranicPerspectiveUrdu}</p>
                  </div>
                </div>

                <div className="p-3.5 bg-indigo-50 border border-indigo-200 rounded-2xl space-y-1 text-xs text-indigo-950">
                  <strong className="font-bold text-indigo-900 block">🔄 سوچ کا رخ بدلیں (Mindset Shift):</strong>
                  <p className="font-medium">{item.mindsetShiftUrdu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 10. SUB-TAB 7: SOCIETAL ISSUES */}
      {activeTab === 'societalIssues' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="px-3 py-1 rounded-full bg-teal-900 text-teal-300 border border-teal-500/40 text-xs font-bold">
              شہری و معاشرتی ذمہ داری
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              معاشرتی مسائل کا فکری و قرآنی حل
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              گندگی، ٹریفک قوانین کی پامالی، رشوت، اور جھوٹ جیسی معاشرتی بیماریوں کی وجوہات اور ان کے انفرادی حل۔
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOCIETAL_ISSUES_MASTER_DATA.map((issue) => (
              <div
                key={issue.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                      معاشرتی بگاڑ
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-bold">
                      {issue.quranVerseReference}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900">
                    {issue.titleUrdu}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {issue.problemSummaryUrdu}
                  </p>

                  <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200/80 text-xs text-amber-900 space-y-1">
                    <strong className="block font-bold">ہماری غلطی:</strong>
                    <span>{issue.howWeContributeUrdu}</span>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200/80 text-xs text-emerald-900 space-y-1">
                    <strong className="block font-bold">قرآنی اصول:</strong>
                    <span>{issue.quranicPrincipleUrdu}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <strong className="text-xs font-bold text-slate-900 block">حل کے اقدامات:</strong>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    {issue.concreteSolutionUrdu.slice(0, 3).map((sol, idx) => (
                      <li key={idx}>{sol}</li>
                    ))}
                  </ul>
                  <div className="p-2.5 bg-slate-900 text-amber-300 rounded-xl text-xs font-bold mt-2 text-center">
                    🎯 آج کا قدم: {issue.todaysIndividualActionUrdu}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 11. SUB-TAB 8: WEEKLY DEEP INTELLECTUAL TOPIC */}
      {activeTab === 'weeklyTopic' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="px-3 py-1 rounded-full bg-blue-900 text-blue-300 border border-blue-500/40 text-xs font-bold">
              ہفتہ وار فکری کیس اسٹڈی
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              گہرے فکری اور فلسفیانہ موضوعات
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              سنجیدہ مطالعہ، تقدیر و جبر، سائنس و ایمان، اور انسانی تہذیب سے دلچسپی رکھنے والوں کے لیے جامع تجزیہ۔
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {WEEKLY_INTELLECTUAL_TOPICS_MASTER.map((top, idx) => (
              <button
                key={top.id}
                onClick={() => setActiveWeeklyTopicIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                  activeWeeklyTopicIdx === idx
                    ? 'bg-blue-800 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                موضوع {idx + 1}: {top.titleUrdu}
              </button>
            ))}
          </div>

          {(() => {
            const currentTopic = WEEKLY_INTELLECTUAL_TOPICS_MASTER[activeWeeklyTopicIdx] || WEEKLY_INTELLECTUAL_TOPICS_MASTER[0];
            return (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div className="space-y-2 border-b border-slate-100 pb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-900 font-bold text-xs rounded-full">
                    {currentTopic.themeUrdu}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 pt-1 leading-snug">
                    {currentTopic.titleUrdu}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {currentTopic.summaryUrdu}
                  </p>
                </div>

                {/* Core Dilemma */}
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-1">
                  <strong className="text-xs font-black text-amber-900 block">
                    ⚖️ بنیادی فکری الجھن (Core Dilemma):
                  </strong>
                  <p className="text-sm text-amber-950 font-medium leading-relaxed">
                    {currentTopic.coreDilemmaUrdu}
                  </p>
                </div>

                {/* Perspectives */}
                <div className="space-y-3">
                  <h4 className="text-lg font-black text-slate-900">
                    مختلف فکری و فلسفیانہ زاویے:
                  </h4>
                  <div className="space-y-2">
                    {currentTopic.classicalAndModernPerspectivesUrdu.map((p, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 font-medium">
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quranic Framework Ayahs */}
                <div className="space-y-3">
                  <h4 className="text-lg font-black text-slate-900">
                    قرآنی فریم ورک اور آیاتِ بینات:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentTopic.quranicAyahs.map((ayah, idx) => (
                      <div key={idx} className="p-4 bg-slate-900 text-white rounded-2xl space-y-2">
                        <span className="text-xs text-amber-400 font-bold block">{ayah.reference}</span>
                        <p className="text-base font-arabic font-bold text-amber-200 leading-loose">
                          {ayah.arabic}
                        </p>
                        <p className="text-xs text-slate-300 font-medium leading-relaxed">
                          ”{ayah.translationUrdu}“
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Takeaway & Weekly Challenge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
                    <strong className="text-xs font-black text-emerald-900 block">💡 فکری حاصل (Takeaway):</strong>
                    <p className="text-sm text-emerald-950 font-medium leading-relaxed">
                      {currentTopic.philosophicalTakeawayUrdu}
                    </p>
                  </div>
                  <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl space-y-1">
                    <strong className="text-xs font-black text-indigo-900 block">🎯 ہفتہ وار فکری مشق:</strong>
                    <p className="text-sm text-indigo-950 font-bold leading-relaxed">
                      {currentTopic.weeklyReflectionChallengeUrdu}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* 12. SUB-TAB 9: TOUGH QUESTIONS BALANCED ANSWERS */}
      {activeTab === 'toughQuestions' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="px-3 py-1 rounded-full bg-indigo-900 text-indigo-300 border border-indigo-500/40 text-xs font-bold">
              علمی و عقلی اطمینان
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              مشکل اور ہم عصر سوالات کے متوازن جوابات
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              شر اور تکلیف کا فلسفہ، فرقہ واریت اور جدید شکوک کے متوازن، دلائل سے بھرپور اور قرآنی جوابات۔
            </p>
          </div>

          <div className="space-y-6">
            {TOUGH_QUESTIONS_BALANCED_MASTER.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-900 font-bold text-xs rounded-full">
                    {item.categoryUrdu}
                  </span>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {item.surahReference}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  {item.questionUrdu}
                </h3>

                <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl space-y-1">
                  <strong className="text-xs font-black text-rose-900 block">
                    ⚠️ عام غلط فہمی (Common Misconception):
                  </strong>
                  <p className="text-sm text-rose-950 font-medium leading-relaxed">
                    {item.commonMisconceptionUrdu}
                  </p>
                </div>

                <div className="p-5 bg-emerald-50/60 border border-emerald-200 rounded-2xl space-y-2">
                  <strong className="text-sm font-black text-emerald-950 block">
                    ✨ متوازن علمی و عقلی جواب:
                  </strong>
                  <p className="text-base text-slate-800 font-medium leading-relaxed">
                    {item.balancedIntellectualAnswerUrdu}
                  </p>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2">
                  <span className="text-xs text-amber-400 font-bold block">قرآنی بنیاد ({item.surahReference})</span>
                  <p className="text-base font-arabic font-bold text-amber-200 leading-loose">
                    {item.keyAyahArabic}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    ”{item.ayahTranslationUrdu}“
                  </p>
                </div>

                <div className="p-3 bg-slate-100 rounded-2xl text-xs font-bold text-slate-900 flex items-center gap-2">
                  <span>💡 بنیادی خلاصہ:</span>
                  <span>{item.keyTakeawayUrdu}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 13. SUB-TAB 10: CHARACTER JOURNEY */}
      {activeTab === 'characterJourney' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="px-3 py-1 rounded-full bg-teal-900 text-teal-300 border border-teal-500/40 text-xs font-bold">
              کردار سازی کا روڈ میپ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              علم → فہم → عمل → کردار کا سفر
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              صرف معلومات اکٹھا کرنے سے انسان نہیں بدلتا؛ یہ چار مراحل ہیں جن سے گزر کر علم انسان کا مستقل اخلاق اور کردار بنتا ہے۔
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {KNOWLEDGE_TO_CHARACTER_MASTER.map((stage) => (
              <div
                key={stage.stage}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-black text-sm">
                      {stage.stage}
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-900 font-bold text-xs rounded-full font-arabic">
                      {stage.arabicKeyword}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {stage.titleUrdu}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {stage.descriptionUrdu}
                  </p>

                  <div className="p-3 bg-slate-900 text-amber-300 rounded-2xl text-xs font-bold">
                    📖 قرآنی سند: {stage.quranicLink}
                  </div>

                  <div className="space-y-2 pt-1">
                    <strong className="text-xs font-bold text-emerald-900 block">✅ کامیابی کی علامات:</strong>
                    <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside font-medium">
                      {stage.indicatorsOfSuccessUrdu.map((ind, idx) => (
                        <li key={idx}>{ind}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-xs font-bold text-rose-900 block">⚠️ کن خطرات سے بچنا ہے:</strong>
                    <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside font-medium">
                      {stage.commonPitfallsUrdu.map((pit, idx) => (
                        <li key={idx}>{pit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1 text-xs text-emerald-950 mt-2">
                  <strong className="font-black block text-emerald-900">🎯 آج کا عملی قدم:</strong>
                  <p className="font-bold">{stage.actionStepUrdu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 14. SUB-TAB 11: DAILY DEEDS CHECKLIST */}
      {activeTab === 'dailyDeeds' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="px-3 py-1 rounded-full bg-rose-900 text-rose-300 border border-rose-500/40 text-xs font-bold">
              روزانہ کے اعمال
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              آج ایک چھوٹا عملی کام (مائیکرو ہیبٹس)
            </h2>
            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              بڑے نعروں کے بجائے روزانہ ایک چھوٹا نیکی کا عمل اپنائیں۔ علم کو عمل میں تبدیل کرنے کی روزمرہ چیک لسٹ۔
            </p>
          </div>

          <div className="space-y-4">
            {DAILY_PRACTICAL_DEEDS.map((deed) => {
              const isCompleted = completedDeedIds.includes(deed.id);

              return (
                <div
                  key={deed.id}
                  onClick={() => handleToggleDeedComplete(deed.id, deed.points)}
                  className={`p-5 sm:p-6 rounded-3xl border transition cursor-pointer flex items-center justify-between gap-4 shadow-xs ${
                    isCompleted
                      ? 'bg-emerald-50/70 border-emerald-400'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition cursor-pointer ${
                        isCompleted
                          ? 'bg-emerald-600 text-white'
                          : 'border-2 border-slate-300 text-transparent'
                      }`}
                    >
                      <Check className="w-5 h-5" />
                    </button>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {deed.categoryUrdu}
                        </span>
                        <span className="text-xs text-amber-700 font-bold font-mono">
                          {deed.quranicLink}
                        </span>
                      </div>
                      <h4
                        className={`text-lg sm:text-xl font-black ${
                          isCompleted ? 'line-through text-emerald-900' : 'text-slate-900'
                        }`}
                      >
                        {deed.titleUrdu}
                      </h4>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">
                        {deed.descUrdu}
                      </p>
                    </div>
                  </div>

                  <div className="text-left shrink-0">
                    <span className="text-xs font-black text-amber-700 block">
                      +{deed.points} XP
                    </span>
                    <span className="text-xs text-slate-400">
                      {deed.estimatedMinutes} منٹ
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 15. DETAILED TOPIC MODAL */}
      {selectedTopicModal && (
        <QuranicTopicDetailModal
          topic={selectedTopicModal}
          language={language}
          userProfile={userProfile}
          onClose={() => setSelectedTopicModal(null)}
          onCompleteAction={(topicId, reflection) => {
            if (onRewardPoints) {
              onRewardPoints(selectedTopicModal.points, `🎉 ماشاءاللہ! "${selectedTopicModal.titleUrdu}" کا عملی تدبر مکمل ہوا (+${selectedTopicModal.points} XP)`, `🎉 Practical reflection completed (+${selectedTopicModal.points} XP)`);
            }
          }}
          onOpenAITeacherWithPrompt={onOpenAITeacherWithPrompt}
        />
      )}

      {/* 16. SELF-REFLECTION DIAGNOSTIC MIRROR MODAL */}
      {showSelfReflectionModal && (
        <QuranicSelfReflectionModal
          language={language}
          onClose={() => setShowSelfReflectionModal(false)}
          onComplete={(score, feedback) => {
            setShowSelfReflectionModal(false);
            if (onRewardPoints) {
              onRewardPoints(50, '🎉 ماشاءاللہ! آپ نے خود احتسابی کا آئینہ مکمل کیا اور ۷ روزہ لائحہ عمل حاصل کیا (+50 XP)', '🎉 Self-Reflection Mirror Completed (+50 XP)');
            }
          }}
        />
      )}

    </div>
  );
};
