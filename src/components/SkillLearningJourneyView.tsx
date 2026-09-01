import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  CheckCircle,
  Check,
  Clock,
  Award,
  BookOpen,
  HelpCircle,
  Briefcase,
  Layers,
  Bot,
  Laptop,
  Smartphone,
  Wrench,
  Flame,
  Volume2,
  Square,
  Play,
  Share2,
  Send,
  Zap,
  Target,
  FileText,
  Store,
  Tag,
  Globe,
  Compass,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Lock,
  Unlock,
  CheckSquare
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { SkillUniverseItem } from '../data/skillsUniverseData';
import {
  SkillLearningPathway,
  SkillLesson,
  getSkillLearningJourney
} from '../data/skillLearningJourneysData';
import { speakText, stopSpeaking } from '../utils/speech';

interface SkillLearningJourneyViewProps {
  skill: SkillUniverseItem;
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
  onSelectNextSkill?: (nextSkillId: string) => void;
  onRewardPoints?: (points: number, msgUrdu: string, msgEn: string) => void;
}

export const SkillLearningJourneyView: React.FC<SkillLearningJourneyViewProps> = ({
  skill,
  language,
  userProfile,
  onOpenAITeacherWithPrompt,
  onSelectNextSkill,
  onRewardPoints,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;
  const BackIcon = isUrdu ? ArrowRight : ArrowLeft;

  // Load the structured learning journey data for this skill
  const journey: SkillLearningPathway = getSkillLearningJourney(skill);

  // Active Journey Sub-Tab: 'overview' | 'lesson' | 'capstone' | 'ai_mentor'
  const [activeView, setActiveView] = useState<'overview' | 'lesson' | 'capstone' | 'ai_mentor'>('overview');
  const [selectedLevelNumber, setSelectedLevelNumber] = useState<number>(1);
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);

  // Lesson sub-tabs: 'learn' | 'practice' | 'quiz' | 'task'
  const [lessonSubTab, setLessonSubTab] = useState<'learn' | 'practice' | 'quiz' | 'task'>('learn');

  // Persistence State
  const storageKey = `seekho_skill_journey_${skill.id}_v2`;

  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.completedLessons || {};
      }
    } catch {
      // ignore
    }
    return {};
  });

  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.quizAnswers || {};
      }
    } catch {
      // ignore
    }
    return {};
  });

  const [taskSubmissions, setTaskSubmissions] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.taskSubmissions || {};
      }
    } catch {
      // ignore
    }
    return {};
  });

  const [capstoneSubmitted, setCapstoneSubmitted] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return !!parsed.capstoneSubmitted;
      }
    } catch {
      // ignore
    }
    return false;
  });

  const [capstoneSubmissionText, setCapstoneSubmissionText] = useState<string>('');
  const [capstoneChecklist, setCapstoneChecklist] = useState<boolean[]>([false, false, false, false]);

  // Current Lesson Interactive Task States
  const [currentTaskInput, setCurrentTaskInput] = useState<string>('');
  const [currentPracticeChecks, setCurrentPracticeChecks] = useState<Record<string, boolean>>({});

  // AI Assistant States
  const [aiChatMessages, setAiChatMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    {
      role: 'assistant',
      text: isUrdu
        ? `السلام علیکم! میں آپ کا ذاتی تعلیمی رہنما (AI Learning Guide) ہوں۔ آپ مجھ سے ہنر "${skill.titleUrdu}" کے بارے میں کوئی بھی سوال آسان ترین اردو میں پوچھ سکتے ہیں۔`
        : `Welcome! I am your AI Learning Guide for ${skill.titleEn}. Ask me anything in simple terms.`
    }
  ]);
  const [aiCustomInput, setAiCustomInput] = useState<string>('');
  const [aiIsGenerating, setAiIsGenerating] = useState<boolean>(false);

  // Audio Voice Guidance
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Save changes to localStorage
  const saveState = (
    updatedLessons = completedLessons,
    updatedQuizzes = quizAnswers,
    updatedTasks = taskSubmissions,
    updatedCapstone = capstoneSubmitted
  ) => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          completedLessons: updatedLessons,
          quizAnswers: updatedQuizzes,
          taskSubmissions: updatedTasks,
          capstoneSubmitted: updatedCapstone,
          lastUpdated: new Date().toISOString()
        })
      );
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  // Filter lessons for the selected level (or show all if needed)
  const currentLevelLessons = journey.lessons.filter((l) => l.level === selectedLevelNumber);
  const activeLesson: SkillLesson =
    currentLevelLessons[activeLessonIndex] ||
    journey.lessons[0] ||
    journey.lessons.find((l) => l.level === selectedLevelNumber) ||
    journey.lessons[0];

  // Calculate Progress Stats
  const totalLessonsCount = journey.lessons.length;
  const completedLessonsCount = journey.lessons.filter((l) => !!completedLessons[l.id]).length;
  const progressPercent = Math.min(
    100,
    Math.round(
      ((completedLessonsCount + (capstoneSubmitted ? 1 : 0)) / (totalLessonsCount + 1)) * 100
    )
  );

  // Calculate Total XP Earned in this Skill
  const earnedSkillXP =
    journey.lessons.reduce((acc, l) => acc + (completedLessons[l.id] ? l.xpReward : 0), 0) +
    (capstoneSubmitted ? journey.capstoneProject.xpReward : 0);

  // Handlers for Audio Speech
  const handlePlayVoice = (text: string, rate: number = 0.85) => {
    setIsSpeaking(true);
    speakText(text, {
      language: isUrdu ? 'ur' : 'en',
      rate,
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  const handleStopVoice = () => {
    stopSpeaking();
    setIsSpeaking(false);
  };

  // Mark Lesson Completed
  const handleCompleteLesson = (lessonId: string, xpReward: number) => {
    if (completedLessons[lessonId]) return;

    const updated = { ...completedLessons, [lessonId]: true };
    setCompletedLessons(updated);
    saveState(updated, quizAnswers, taskSubmissions, capstoneSubmitted);

    if (onRewardPoints) {
      onRewardPoints(
        xpReward,
        `ماشاءاللہ! سبق مکمل کرنے پر +${xpReward} XP پوائنٹس حاصل ہو گئے!`,
        `Lesson complete! +${xpReward} XP earned!`
      );
    }
  };

  // Handle Mini Quiz Option Select
  const handleSelectQuizOption = (quizId: string, selectedIdx: number, correctIdx: number) => {
    const updated = { ...quizAnswers, [quizId]: selectedIdx };
    setQuizAnswers(updated);
    saveState(completedLessons, updated, taskSubmissions, capstoneSubmitted);

    if (selectedIdx === correctIdx) {
      if (onRewardPoints) {
        onRewardPoints(
          10,
          'درست جواب! کوئز پاس کرنے پر +۱۰ پوائنٹس!',
          'Correct answer! +10 XP earned!'
        );
      }
    }
  };

  // Handle Practical Task Submission
  const handleSubmitPracticalTask = (e: React.FormEvent, lesson: SkillLesson) => {
    e.preventDefault();
    if (!currentTaskInput.trim()) return;

    const updated = { ...taskSubmissions, [lesson.id]: currentTaskInput };
    setTaskSubmissions(updated);
    handleCompleteLesson(lesson.id, lesson.xpReward);
    saveState(completedLessons, quizAnswers, updated, capstoneSubmitted);
    setCurrentTaskInput('');
  };

  // Handle Capstone Project Submission
  const handleSubmitCapstone = (e: React.FormEvent) => {
    e.preventDefault();
    setCapstoneSubmitted(true);
    saveState(completedLessons, quizAnswers, taskSubmissions, true);

    if (onRewardPoints) {
      onRewardPoints(
        journey.capstoneProject.xpReward,
        `شاندار کامیابی! حقیقی پروجیکٹ مکمل کرنے پر +${journey.capstoneProject.xpReward} XP حاصل ہو گئے!`,
        `Capstone Project Certified! +${journey.capstoneProject.xpReward} XP earned!`
      );
    }
  };

  // AI Prompt Runner
  const handleRunAiPrompt = (promptText: string) => {
    setAiChatMessages((prev) => [
      ...prev,
      { role: 'user', text: promptText }
    ]);
    setAiIsGenerating(true);

    // Simulate instant intelligent context-aware teaching response
    setTimeout(() => {
      let aiResponse = '';
      if (promptText.includes('سمجھ نہیں آیا') || promptText.includes('Explain More Simply')) {
        aiResponse = `جی بالکل! آسان ترین الفاظ میں:\n\n👉 **بنیادی نکتہ**: ${activeLesson.conceptSummaryUrdu}\n\n📖 **اصطلاح کا مطلب**: "${activeLesson.technicalTerm.englishTerm}" یعنی ${activeLesson.technicalTerm.simpleExplanationUrdu}\n\n💡 **روزمرہ مثال**: ${activeLesson.realLifeExampleUrdu}\n\nاب آپ آرام سے "مشق کریں" والے بٹن پر کلک کر کے پہلا قدم اٹھائیں۔ کوئی جلدی نہیں ہے!`;
      } else if (promptText.includes('خود کیسے کروں') || promptText.includes('Step-by-Step')) {
        aiResponse = `بہترین! یہاں آپ کے لیے مرحلہ وار گائیڈ ہے:\n\n۱. سب سے پہلے: ${activeLesson.handsOnExerciseUrdu.steps[0] || 'ٹول کھولیں'}\n۲. دوسرا قدم: ${activeLesson.handsOnExerciseUrdu.steps[1] || 'بنیادی سیٹنگز چیک کریں'}\n۳. تیسرا قدم: ${activeLesson.handsOnExerciseUrdu.steps[2] || 'ٹاسک پریکٹس کریں'}\n\n✨ **سنہری مشورہ**: ${activeLesson.handsOnExerciseUrdu.tips}`;
      } else if (promptText.includes('اگلا بہترین قدم') || promptText.includes('Next')) {
        aiResponse = `ماشاءاللہ! آپ کا موجودہ ہنر لیول ${selectedLevelNumber} پر ہے۔ آپ کا اگلا بہترین قدم یہ ہے:\n\n🎯 **سبق نمبر ${activeLesson.lessonNumber + 1}**: ${journey.lessons[activeLessonIndex + 1]?.titleUrdu || 'حقیقی کیپسٹون پروجیکٹ شروع کرنا'}\n\nاس کے مکمل ہونے کے بعد آپ کو ${journey.capstoneProject.xpReward} XP پوائنٹس اور حلال آمدنی کا عملی اعتماد حاصل ہوگا۔`;
      } else {
        aiResponse = `ماشاءاللہ! آپ کا سوال بہت اہم ہے۔ ہنر "${skill.titleUrdu}" کے حوالے سے اصول یہ ہے کہ:\n\n۱. پہلے روزمرہ کی چھوٹی ضرورت پر مشق کریں۔\n۲. پھر اپنے کام کے ۳ اچھے نمونے بنائیں۔\n۳. ${activeLesson.explanationUrdu.slice(0, 180)}...\n\nاگر آپ مزید گہرائی سے سیکھنا چاہیں تو نیچے "مکمل AI استاد سے بات کریں" پر کلک کر سکتے ہیں!`;
      }

      setAiChatMessages((prev) => [
        ...prev,
        { role: 'assistant', text: aiResponse }
      ]);
      setAiIsGenerating(false);
    }, 450);
  };

  const handleSendCustomAiMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiCustomInput.trim()) return;
    const text = aiCustomInput;
    setAiCustomInput('');
    handleRunAiPrompt(text);
  };

  // Find Next Recommended Action
  const nextIncompleteLesson = journey.lessons.find((l) => !completedLessons[l.id]);

  return (
    <div className="space-y-6 animate-in fade-in" dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* ========================================================================= */}
      {/* 1. MASTER PROGRESS & SMART RECOMMENDATION BANNER */}
      {/* ========================================================================= */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border-2 border-emerald-500/30 shadow-xl space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black font-arabic shadow-xs">
                🎯 {isUrdu ? 'عملی سیکھنے کا روڈ میپ' : 'Practical Learning Journey'}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-bold font-arabic border border-white/15">
                ⚡ {earnedSkillXP} {isUrdu ? 'حاصل شدہ XP' : 'XP Earned'}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-arabic">
                🏆 {completedLessonsCount}/{totalLessonsCount} {isUrdu ? 'اسباق مکمل' : 'Lessons Done'}
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black text-white font-arabic tracking-tight">
              {isUrdu ? journey.titleUrdu : journey.titleEn}
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 font-arabic leading-relaxed">
              {isUrdu ? journey.taglineUrdu : journey.taglineEn}
            </p>
          </div>

          {/* Overall Progress Gauge */}
          <div className="flex flex-col items-end gap-1.5 self-center sm:self-start">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-4xl font-black text-amber-400 font-arabic">
                {progressPercent}%
              </span>
              <span className="text-xs text-slate-400 font-bold font-arabic">
                {isUrdu ? 'سیکھنے کی رفتار' : 'Completed'}
              </span>
            </div>
            <div className="w-40 sm:w-48 h-3 bg-white/10 rounded-full overflow-hidden border border-white/15">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Smart Next Step Recommendation Card */}
        <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-lg shrink-0">
              👉
            </div>
            <div>
              <p className="text-[11px] font-bold text-amber-300 font-arabic">
                {isUrdu ? 'آپ کے لیے اگلا بہترین قدم:' : 'Recommended Next Action:'}
              </p>
              <h4 className="text-sm font-black text-white font-arabic">
                {nextIncompleteLesson
                  ? `${isUrdu ? 'سبق نمبر' : 'Lesson'} ${nextIncompleteLesson.lessonNumber}: ${isUrdu ? nextIncompleteLesson.titleUrdu : nextIncompleteLesson.titleEn}`
                  : !capstoneSubmitted
                  ? (isUrdu ? 'حقیقی کیپسٹون پروجیکٹ مکمل کریں' : 'Complete Capstone Project')
                  : (isUrdu ? 'ماشاءاللہ! آپ نے تمام مراحل مکمل کر لیے ہیں۔' : 'Congratulations! All stages mastered!')}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (nextIncompleteLesson) {
                  setSelectedLevelNumber(nextIncompleteLesson.level);
                  const idxInLevel = journey.lessons
                    .filter((l) => l.level === nextIncompleteLesson.level)
                    .findIndex((l) => l.id === nextIncompleteLesson.id);
                  setActiveLessonIndex(Math.max(0, idxInLevel));
                  setActiveView('lesson');
                  setLessonSubTab('learn');
                } else if (!capstoneSubmitted) {
                  setActiveView('capstone');
                }
              }}
              className="py-2.5 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm font-arabic transition flex items-center gap-1.5 shadow-md"
            >
              <span>{isUrdu ? 'جاری رکھیں' : 'Continue Learning'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Switcher Tabs (Overview | Lessons | Capstone Project | AI Helper) */}
        <div className="pt-2 border-t border-white/15 flex items-center gap-2 overflow-x-auto text-xs font-arabic font-bold">
          {[
            { id: 'overview', labelUrdu: '📋 تفصیل، اہمیت و آمدنی', labelEn: 'Overview & Income', icon: BookOpen },
            { id: 'lesson', labelUrdu: '📖 اسباق و عملی مشق (Learn & Practice)', labelEn: 'Lessons & Practice', icon: Layers },
            { id: 'capstone', labelUrdu: '🏆 حقیقی پروجیکٹ (Capstone Project)', labelEn: 'Capstone Project', icon: Award },
            { id: 'ai_mentor', labelUrdu: '🤖 AI ذاتی استاد (AI Guide)', labelEn: 'AI Mentor', icon: Bot },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeView === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id as any)}
                className={`py-2 px-3.5 rounded-xl whitespace-nowrap transition flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                    : 'bg-white/10 hover:bg-white/20 text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{isUrdu ? tab.labelUrdu : tab.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TAB A: OVERVIEW & INCOME PATHWAYS */}
      {/* ========================================================================= */}
      {activeView === 'overview' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Why It Matters & Everyday Benefit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 sm:p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 space-y-2 font-arabic">
              <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 text-xs font-black">
                🌟 {isUrdu ? 'یہ ہنر کیوں اہم ہے؟' : 'Why This Skill Matters'}
              </span>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-bold pt-1">
                {isUrdu ? journey.whyImportantUrdu : journey.whyImportantEn}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 space-y-2 font-arabic">
              <span className="px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-black">
                🏡 {isUrdu ? 'روزمرہ زندگی میں عملی فائدہ' : 'Everyday Life Benefit'}
              </span>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-bold pt-1">
                {isUrdu ? journey.dailyLifeBenefitUrdu : journey.dailyLifeBenefitEn}
              </p>
            </div>
          </div>

          {/* Income Pathways Grid */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
                  💰 {isUrdu ? 'اس ہنر سے آمدنی کے ممکنہ راستے' : 'Ethical Earning & Income Pathways'}
                </h3>
                <p className="text-xs text-slate-500 font-arabic">
                  {isUrdu ? 'حلال اور باوقار روزگار حاصل کرنے کے ۳ اہم ذرائع' : '3 realistic earning avenues'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {(isUrdu ? journey.earningPathwaysUrdu : journey.earningPathwaysEn).map((path, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/40 border border-slate-200 transition space-y-2.5 font-arabic flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 text-[11px] font-black">
                      {path.typeTitle}
                    </span>
                    <h4 className="text-base font-black text-slate-900">{path.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{path.description}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs font-black text-emerald-800">
                    <span>{isUrdu ? 'متوقع آمدنی:' : 'Expected Income:'}</span>
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-100/80 text-emerald-950 font-mono text-[11px]">
                      {path.expectedIncomeUrdu || (path as any).expectedIncomeEn}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Resources Checklist */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <h3 className="text-lg font-black text-slate-900 font-arabic">
              🛠️ {isUrdu ? 'درکار ٹولز اور ضروری اوزار' : 'Required Tools & Resources'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(isUrdu ? journey.requiredToolsUrdu : journey.requiredToolsEn).map((tool, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1 font-arabic">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-900 text-sm">{tool.name}</span>
                    {tool.isFree && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                        {isUrdu ? 'مفت (Free)' : 'Free'}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Levels Breakdown Overview */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
            <h3 className="text-lg font-black text-slate-900 font-arabic">
              📊 {isUrdu ? '۳ بنیادی درجات (Learning Levels Roadmap)' : '3 Learning Levels'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {journey.levelsDefinition.map((lvl) => (
                <div
                  key={lvl.levelNumber}
                  className={`p-4 rounded-2xl border space-y-2 font-arabic transition ${
                    selectedLevelNumber === lvl.levelNumber
                      ? 'bg-emerald-50/70 border-emerald-500 shadow-sm ring-2 ring-emerald-400/30'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-xs font-black">
                      {isUrdu ? lvl.badgeUrdu : lvl.badgeEn}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      ⏱️ {isUrdu ? lvl.timeRequiredUrdu : lvl.timeRequiredEn}
                    </span>
                  </div>

                  <h4 className="text-base font-black text-slate-900">
                    {isUrdu ? lvl.titleUrdu : lvl.titleEn}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isUrdu ? lvl.targetAudienceUrdu : lvl.targetAudienceEn}
                  </p>

                  <div className="pt-2 border-t border-slate-200 text-xs font-bold text-emerald-800 flex items-center gap-1">
                    <span>🎯</span>
                    <span>{isUrdu ? lvl.keyOutcomeUrdu : lvl.keyOutcomeEn}</span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedLevelNumber(lvl.levelNumber);
                      setActiveView('lesson');
                      setActiveLessonIndex(0);
                      setLessonSubTab('learn');
                    }}
                    className="w-full mt-2 py-2 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs transition flex items-center justify-center gap-1"
                  >
                    <span>{isUrdu ? 'اس لیول کے اسباق شروع کریں' : 'Start Level Lessons'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. TAB B: INTERACTIVE LESSONS & MICRO-LEARNING WORKBENCH */}
      {/* ========================================================================= */}
      {activeView === 'lesson' && activeLesson && (
        <div className="space-y-6 animate-in fade-in">
          {/* Level Switcher Header */}
          <div className="p-3 bg-slate-100 rounded-2xl flex items-center justify-between gap-2 overflow-x-auto border border-slate-200">
            <div className="flex items-center gap-1.5">
              {journey.levelsDefinition.map((lvl) => (
                <button
                  key={lvl.levelNumber}
                  onClick={() => {
                    setSelectedLevelNumber(lvl.levelNumber);
                    setActiveLessonIndex(0);
                    setLessonSubTab('learn');
                  }}
                  className={`py-2 px-3.5 rounded-xl text-xs font-black font-arabic whitespace-nowrap transition ${
                    selectedLevelNumber === lvl.levelNumber
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {isUrdu ? lvl.badgeUrdu : lvl.badgeEn}
                </button>
              ))}
            </div>

            <span className="text-xs font-bold font-arabic text-slate-500 shrink-0">
              {currentLevelLessons.length} {isUrdu ? 'اسباق دستیاب' : 'Lessons Available'}
            </span>
          </div>

          {/* Lesson Navigation Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {currentLevelLessons.map((les, idx) => {
              const isDone = !!completedLessons[les.id];
              const isCurrent = idx === activeLessonIndex;
              return (
                <button
                  key={les.id}
                  onClick={() => {
                    setActiveLessonIndex(idx);
                    setLessonSubTab('learn');
                  }}
                  className={`p-3 rounded-2xl border text-right font-arabic transition shrink-0 min-w-[200px] flex items-center justify-between gap-2 ${
                    isCurrent
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-emerald-500/40'
                      : isDone
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-black opacity-80">
                      {isUrdu ? `سبق #${les.lessonNumber}` : `Lesson #${les.lessonNumber}`} • ⏱️ {les.estimatedMinutes} {isUrdu ? 'منٹ' : 'min'}
                    </span>
                    <p className="text-xs font-black truncate max-w-[150px]">
                      {isUrdu ? les.titleUrdu : les.titleEn}
                    </p>
                  </div>
                  {isDone ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-black flex items-center justify-center shrink-0">
                      {les.lessonNumber}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* 🌟 CURRENT LESSON CONTAINER */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden space-y-5">
            {/* Lesson Top Banner */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-start justify-between gap-3 flex-wrap">
              <div className="space-y-1 max-w-2xl font-arabic">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-xs font-black">
                    {isUrdu ? activeLesson.levelTitleUrdu : activeLesson.levelTitleEn}
                  </span>
                  <span className="text-xs text-slate-300 font-bold">
                    ⏱️ {activeLesson.estimatedMinutes} {isUrdu ? 'منٹ' : 'mins'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                    ⚡ +{activeLesson.xpReward} XP
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                  {isUrdu ? activeLesson.titleUrdu : activeLesson.titleEn}
                </h3>
              </div>

              {/* Audio Reading Controls */}
              <div className="flex items-center gap-2">
                {!isSpeaking ? (
                  <button
                    onClick={() =>
                      handlePlayVoice(
                        `${activeLesson.titleUrdu}۔ ${activeLesson.conceptSummaryUrdu}۔ ${activeLesson.explanationUrdu}۔`
                      )
                    }
                    className="py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold font-arabic transition flex items-center gap-1.5"
                  >
                    <Volume2 className="w-4 h-4 text-amber-300" />
                    <span>{isUrdu ? 'سبق سنیں' : 'Listen'}</span>
                  </button>
                ) : (
                  <button
                    onClick={handleStopVoice}
                    className="py-1.5 px-3 rounded-xl bg-rose-600 text-white text-xs font-black font-arabic transition flex items-center gap-1.5"
                  >
                    <Square className="w-3.5 h-3.5 fill-current" />
                    <span>{isUrdu ? 'روکیں' : 'Stop'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* 4-Stage Learning Loop Sub-Tabs (Learn -> Practice -> Mini Quiz -> Practical Task) */}
            <div className="px-5 sm:px-6">
              <div className="p-1.5 bg-slate-100 rounded-2xl flex items-center gap-1 overflow-x-auto text-xs font-black font-arabic text-slate-700">
                {[
                  { id: 'learn', labelUrdu: '📖 ۱. سمجھیں (Concept & Learn)', labelEn: '1. Learn', icon: BookOpen },
                  { id: 'practice', labelUrdu: '⚡ ۲. مشق کریں (Hands-on Practice)', labelEn: '2. Practice', icon: Flame },
                  { id: 'quiz', labelUrdu: '❓ ۳. جانچیں (Mini Quiz)', labelEn: '3. Mini Quiz', icon: HelpCircle },
                  { id: 'task', labelUrdu: '🛠️ ۴. ثابت کریں (Practical Task)', labelEn: '4. Prove Task', icon: Target },
                ].map((sub) => {
                  const Icon = sub.icon;
                  const isActive = lessonSubTab === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setLessonSubTab(sub.id as any)}
                      className={`py-2 px-3 sm:px-4 rounded-xl whitespace-nowrap transition flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-emerald-800 text-white shadow-xs'
                          : 'hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{isUrdu ? sub.labelUrdu : sub.labelEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SUB-PANEL 1: LEARN (1 Concept + Technical Term + Simple Explanation + Real Example) */}
            {lessonSubTab === 'learn' && (
              <div className="p-5 sm:p-6 space-y-5 font-arabic animate-in fade-in">
                {/* 1 Clear Concept Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 space-y-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-950 text-xs font-black">
                    💡 {isUrdu ? 'ایک واضح تصور (Core Concept)' : 'Core Concept'}
                  </span>
                  <p className="text-base sm:text-lg font-black text-emerald-950 leading-relaxed">
                    {isUrdu ? activeLesson.conceptSummaryUrdu : activeLesson.conceptSummaryEn}
                  </p>
                </div>

                {/* Technical English Term Breakdown */}
                {activeLesson.technicalTerm && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-white font-mono text-xs font-bold">
                        {activeLesson.technicalTerm.englishTerm}
                      </span>
                      <span className="text-xs font-black text-slate-700">
                        ({activeLesson.technicalTerm.urduTerm})
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-bold">
                      {isUrdu
                        ? activeLesson.technicalTerm.simpleExplanationUrdu
                        : activeLesson.technicalTerm.simpleExplanationEn}
                    </p>
                  </div>
                )}

                {/* Detailed Simple Explanation */}
                <div className="space-y-2">
                  <h4 className="text-base font-black text-slate-900">
                    📝 {isUrdu ? 'آسان وضاحت:' : 'Detailed Explanation:'}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line font-bold">
                    {isUrdu ? activeLesson.explanationUrdu : activeLesson.explanationEn}
                  </p>
                </div>

                {/* Real Life Example */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-950 text-xs font-black">
                    🇵🇰 {isUrdu ? 'روزمرہ اور پاکستانی مثال' : 'Real-World Example'}
                  </span>
                  <p className="text-sm sm:text-base text-amber-950 font-bold leading-relaxed pt-1">
                    {isUrdu ? activeLesson.realLifeExampleUrdu : activeLesson.realLifeExampleEn}
                  </p>
                </div>

                {/* Next SubTab Button */}
                <div className="pt-3 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setLessonSubTab('practice')}
                    className="py-2.5 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs sm:text-sm transition flex items-center gap-1.5"
                  >
                    <span>{isUrdu ? 'اگلا مرحلہ: عملی مشق کریں' : 'Next: Practice'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* SUB-PANEL 2: PRACTICE WORKBENCH (Step-by-step hands on) */}
            {lessonSubTab === 'practice' && (
              <div className="p-5 sm:p-6 space-y-5 font-arabic animate-in fade-in">
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
                  <h4 className="text-base font-black text-sky-950">
                    ⚡ {isUrdu ? 'عملی مشق کے مراحل' : 'Step-by-Step Practical Exercise'}
                  </h4>
                  <p className="text-xs text-sky-800">
                    {isUrdu
                      ? activeLesson.handsOnExerciseUrdu.instructions
                      : activeLesson.handsOnExerciseEn.instructions}
                  </p>
                </div>

                {/* Step List */}
                <div className="space-y-2.5">
                  {(isUrdu ? activeLesson.handsOnExerciseUrdu.steps : activeLesson.handsOnExerciseEn.steps).map(
                    (step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                      >
                        <span className="w-6 h-6 rounded-full bg-emerald-800 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <p className="text-sm font-bold text-slate-800 leading-relaxed">{step}</p>
                      </div>
                    )
                  )}
                </div>

                {/* Practical Checklist */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h5 className="text-xs font-black text-slate-700">
                    ✅ {isUrdu ? 'خود احتسابی چیک لسٹ (Self Checklist):' : 'Self Checklist:'}
                  </h5>
                  <div className="space-y-2">
                    {(isUrdu ? activeLesson.handsOnExerciseUrdu.checklist : activeLesson.handsOnExerciseEn.checklist).map(
                      (item, cIdx) => {
                        const checkKey = `${activeLesson.id}_chk_${cIdx}`;
                        const isChecked = !!currentPracticeChecks[checkKey];
                        return (
                          <button
                            key={cIdx}
                            type="button"
                            onClick={() =>
                              setCurrentPracticeChecks((prev) => ({
                                ...prev,
                                [checkKey]: !prev[checkKey]
                              }))
                            }
                            className={`w-full p-2.5 rounded-xl border text-right text-xs font-bold transition flex items-center justify-between gap-2 ${
                              isChecked
                                ? 'bg-emerald-100/80 border-emerald-400 text-emerald-950'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <span>{item}</span>
                            {isChecked ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-400 shrink-0" />
                            )}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Tip Box */}
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-950 flex items-center gap-2">
                  <span>💡</span>
                  <span>
                    <strong>{isUrdu ? 'سنہری مشورہ:' : 'Golden Tip:'}</strong>{' '}
                    {isUrdu ? activeLesson.handsOnExerciseUrdu.tips : activeLesson.handsOnExerciseEn.tips}
                  </span>
                </div>

                {/* SubTab Navigation */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setLessonSubTab('learn')}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
                  >
                    {isUrdu ? 'پچھلا مرحلہ' : 'Back'}
                  </button>

                  <button
                    onClick={() => setLessonSubTab('quiz')}
                    className="py-2.5 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs sm:text-sm transition flex items-center gap-1.5"
                  >
                    <span>{isUrdu ? 'اگلا مرحلہ: کوئز حل کریں' : 'Next: Mini Quiz'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* SUB-PANEL 3: MINI QUIZ (1-3 Questions with instant validation) */}
            {lessonSubTab === 'quiz' && (
              <div className="p-5 sm:p-6 space-y-5 font-arabic animate-in fade-in">
                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-1">
                  <h4 className="text-base font-black text-purple-950">
                    ❓ {isUrdu ? 'فہم کی جانچ (Interactive Mini Quiz)' : 'Check Your Understanding'}
                  </h4>
                  <p className="text-xs text-purple-800">
                    {isUrdu
                      ? 'صحیح آپشن منتخب کریں اور فوری فیڈ بیک حاصل کریں۔'
                      : 'Select the right answer for instant feedback.'}
                  </p>
                </div>

                {activeLesson.miniQuiz.map((q, qIdx) => {
                  const selectedAnswer = quizAnswers[q.id];
                  const hasAnswered = selectedAnswer !== undefined;
                  const isCorrect = selectedAnswer === q.correctOptionIndex;

                  return (
                    <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          {qIdx + 1}
                        </span>
                        <p className="text-sm sm:text-base font-black text-slate-900 leading-relaxed">
                          {isUrdu ? q.questionUrdu : q.questionEn}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {(isUrdu ? q.optionsUrdu : q.optionsEn).map((opt, oIdx) => {
                          const isOptionSelected = selectedAnswer === oIdx;
                          const isOptionCorrect = oIdx === q.correctOptionIndex;

                          let btnStyle = 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700';
                          if (hasAnswered) {
                            if (isOptionCorrect) {
                              btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black';
                            } else if (isOptionSelected) {
                              btnStyle = 'bg-rose-100 border-rose-500 text-rose-950 font-black';
                            } else {
                              btnStyle = 'bg-white opacity-50 border-slate-200 text-slate-500';
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              disabled={hasAnswered}
                              onClick={() => handleSelectQuizOption(q.id, oIdx, q.correctOptionIndex)}
                              className={`p-3 rounded-xl border text-right text-xs sm:text-sm font-bold transition flex items-center justify-between gap-2 ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {hasAnswered && isOptionCorrect && (
                                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {hasAnswered && (
                        <div
                          className={`p-3 rounded-xl text-xs font-bold leading-relaxed ${
                            isCorrect
                              ? 'bg-emerald-100/90 text-emerald-950 border border-emerald-300'
                              : 'bg-rose-100/90 text-rose-950 border border-rose-300'
                          }`}
                        >
                          <span className="font-black">
                            {isCorrect ? '✅ ماشاءاللہ درست جواب!' : '❌ دوبارہ غور فرمائیں:'}
                          </span>{' '}
                          {isUrdu ? q.explanationUrdu : q.explanationEn}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* SubTab Navigation */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setLessonSubTab('practice')}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
                  >
                    {isUrdu ? 'پچھلا مرحلہ' : 'Back'}
                  </button>

                  <button
                    onClick={() => setLessonSubTab('task')}
                    className="py-2.5 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs sm:text-sm transition flex items-center gap-1.5"
                  >
                    <span>{isUrdu ? 'اگلا مرحلہ: ٹاسک جمع کرائیں' : 'Next: Submit Task'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* SUB-PANEL 4: PRACTICAL TASK (Prove Learning & Submit) */}
            {lessonSubTab === 'task' && (
              <div className="p-5 sm:p-6 space-y-5 font-arabic animate-in fade-in">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-black text-amber-950">
                      🛠️ {isUrdu ? activeLesson.practicalTask.titleUrdu : activeLesson.practicalTask.titleEn}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-950 text-xs font-black">
                      +{activeLesson.xpReward} XP
                    </span>
                  </div>
                  <p className="text-xs text-amber-900">
                    {isUrdu
                      ? activeLesson.practicalTask.descriptionUrdu
                      : activeLesson.practicalTask.descriptionEn}
                  </p>
                </div>

                {/* Verification Criteria */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h5 className="text-xs font-black text-slate-700">
                    📋 {isUrdu ? 'کامیابی کی شرائط:' : 'Success Criteria:'}
                  </h5>
                  <div className="space-y-1.5">
                    {(isUrdu
                      ? activeLesson.practicalTask.verificationCriteriaUrdu
                      : activeLesson.practicalTask.verificationCriteriaEn
                    ).map((crit, crIdx) => (
                      <div key={crIdx} className="flex items-center gap-2 text-xs text-slate-600 font-bold">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{crit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submission Form */}
                <form
                  onSubmit={(e) => handleSubmitPracticalTask(e, activeLesson)}
                  className="space-y-3"
                >
                  <label className="block text-xs font-black text-slate-700">
                    ✍️ {isUrdu ? 'اپنے کیے گئے کام کی تفصیل یا تصدیق لکھیں:' : 'Your Task Submission Note:'}
                  </label>
                  <textarea
                    rows={3}
                    value={currentTaskInput || taskSubmissions[activeLesson.id] || ''}
                    onChange={(e) => setCurrentTaskInput(e.target.value)}
                    placeholder={
                      isUrdu
                        ? activeLesson.practicalTask.actionPromptUrdu
                        : activeLesson.practicalTask.actionPromptEn
                    }
                    className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-emerald-600 text-xs sm:text-sm font-bold text-slate-900 outline-none transition"
                  />

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setLessonSubTab('quiz')}
                      className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
                    >
                      {isUrdu ? 'پچھلا مرحلہ' : 'Back'}
                    </button>

                    <button
                      type="submit"
                      className="py-3 px-6 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-black text-sm transition flex items-center gap-2 shadow-md"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>
                        {completedLessons[activeLesson.id]
                          ? isUrdu
                            ? 'سبق مکمل ہے (دوبارہ اپڈیٹ کریں)'
                            : 'Update Submission'
                          : isUrdu
                          ? `ٹاسک مکمل کریں اور +${activeLesson.xpReward} XP حاصل کریں`
                          : `Complete Task (+${activeLesson.xpReward} XP)`}
                      </span>
                    </button>
                  </div>
                </form>

                {/* Next Lesson Direct Navigation */}
                {activeLessonIndex < currentLevelLessons.length - 1 && (
                  <div className="pt-4 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => {
                        setActiveLessonIndex((prev) => prev + 1);
                        setLessonSubTab('learn');
                      }}
                      className="py-2 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center gap-1.5"
                    >
                      <span>{isUrdu ? 'اگلا سبق شروع کریں' : 'Next Lesson'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. TAB C: PRACTICAL CAPSTONE PROJECT */}
      {/* ========================================================================= */}
      {activeView === 'capstone' && (
        <div className="space-y-6 font-arabic animate-in fade-in">
          <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white shadow-xl space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-slate-950 text-amber-300 text-xs font-black">
                🏆 {isUrdu ? journey.capstoneProject.badgeUrdu : journey.capstoneProject.badgeEn}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/20 text-white text-xs font-bold">
                ⏱️ {journey.capstoneProject.estimatedHours} {isUrdu ? 'گھنٹے کا عملی کام' : 'Hours Real Work'}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-black">
                ⚡ +{journey.capstoneProject.xpReward} XP
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-white leading-snug">
              {isUrdu ? journey.capstoneProject.titleUrdu : journey.capstoneProject.titleEn}
            </h3>

            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-bold">
              {isUrdu ? journey.capstoneProject.descriptionUrdu : journey.capstoneProject.descriptionEn}
            </p>
          </div>

          {/* Real World Client Scenario */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h4 className="text-base font-black text-slate-900">
              🏢 {isUrdu ? 'حقیقی کلائنٹ کا منظرنامہ (Client Case):' : 'Real-World Client Scenario:'}
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-bold">
              {isUrdu
                ? journey.capstoneProject.realWorldClientScenarioUrdu
                : journey.capstoneProject.realWorldClientScenarioEn}
            </div>
          </div>

          {/* Deliverables List */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-base font-black text-slate-900">
              📦 {isUrdu ? 'درکار نتائج و فائلز (Deliverables):' : 'Required Deliverables:'}
            </h4>
            <div className="space-y-2">
              {(isUrdu
                ? journey.capstoneProject.deliverablesUrdu
                : journey.capstoneProject.deliverablesEn
              ).map((del, dIdx) => (
                <div
                  key={dIdx}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-xs sm:text-sm font-black text-slate-800"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-xs font-black flex items-center justify-center shrink-0">
                    {dIdx + 1}
                  </span>
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step By Step Guide */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 space-y-3">
            <h4 className="text-base font-black text-slate-900">
              🗺️ {isUrdu ? 'مرحلہ وار گائیڈ برائے تکمیل:' : 'Step-by-Step Project Execution Guide:'}
            </h4>
            <div className="space-y-2.5">
              {(isUrdu
                ? journey.capstoneProject.stepByStepGuideUrdu
                : journey.capstoneProject.stepByStepGuideEn
              ).map((guideStep, gIdx) => (
                <div
                  key={gIdx}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-emerald-700 font-black shrink-0">👉</span>
                  <span>{guideStep}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rubric Verification Checklist */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-base font-black text-slate-900">
              🔍 {isUrdu ? 'خود احتسابی چیک لسٹ برائے معیار (Rubric):' : 'Quality Rubric Checklist:'}
            </h4>
            <div className="space-y-2">
              {(isUrdu
                ? journey.capstoneProject.rubricChecklistUrdu
                : journey.capstoneProject.rubricChecklistEn
              ).map((rub, rIdx) => {
                const isChecked = capstoneChecklist[rIdx];
                return (
                  <button
                    key={rIdx}
                    type="button"
                    onClick={() => {
                      const updated = [...capstoneChecklist];
                      updated[rIdx] = !updated[rIdx];
                      setCapstoneChecklist(updated);
                    }}
                    className={`w-full p-3 rounded-2xl border text-right text-xs sm:text-sm font-bold transition flex items-center justify-between gap-2 ${
                      isChecked
                        ? 'bg-emerald-100 border-emerald-400 text-emerald-950 font-black'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{rub}</span>
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Capstone Submission Form */}
          <form
            onSubmit={handleSubmitCapstone}
            className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4"
          >
            <h4 className="text-base font-black text-slate-900">
              📤 {isUrdu ? 'پروجیکٹ کی سمری یا تصدیق جمع کرائیں:' : 'Submit Project Summary:'}
            </h4>

            <textarea
              rows={4}
              value={capstoneSubmissionText}
              onChange={(e) => setCapstoneSubmissionText(e.target.value)}
              placeholder={
                isUrdu
                  ? 'میں نے یہ پروجیکٹ کامیابی سے مکمل کر لیا ہے۔ میں نے یہ ۳ فائلز/نتائج تیار کیے ہیں اور کلائنٹ معیار کے مطابق چیک کر لیا ہے...'
                  : 'I completed this capstone deliverable according to client requirements...'
              }
              className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-300 focus:bg-white focus:border-amber-500 text-xs sm:text-sm font-bold text-slate-900 outline-none transition"
            />

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-base transition flex items-center justify-center gap-2 shadow-lg"
            >
              <Award className="w-5 h-5 text-slate-950" />
              <span>
                {capstoneSubmitted
                  ? isUrdu
                    ? '🎉 پروجیکٹ سند یافتہ ہے (دوبارہ اپڈیٹ کریں)'
                    : 'Project Certified (Update)'
                  : isUrdu
                  ? `حقیقی پروجیکٹ مکمل کریں اور +${journey.capstoneProject.xpReward} XP حاصل کریں`
                  : `Submit Project (+${journey.capstoneProject.xpReward} XP)`}
              </span>
            </button>
          </form>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. TAB D: AI PERSONAL LEARNING GUIDE */}
      {/* ========================================================================= */}
      {activeView === 'ai_mentor' && (
        <div className="space-y-6 font-arabic animate-in fade-in">
          {/* AI Banner */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900 text-white shadow-xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-400 text-slate-950 text-xs font-black">
                🤖 {isUrdu ? 'ذاتی AI تعلیمی رہنما' : 'AI Personal Learning Guide'}
              </span>
              <span className="text-xs text-purple-200 font-bold">
                {isUrdu ? `ہنر: ${skill.titleUrdu}` : `Skill: ${skill.titleEn}`}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isUrdu ? 'کوئی بات سمجھ نہیں آئی؟ AI استاد سے فوری پوچھیں!' : 'Have questions? Ask your AI Mentor!'}
            </h3>

            <p className="text-xs sm:text-sm text-purple-200 leading-relaxed font-bold">
              {isUrdu
                ? 'آسان ترین اردو میں وضاحت، انگریزی اصطلاح کا ترجمہ، یا عملی کام کا طریقہ جاننے کے لیے نیچے دیے گئے بٹن دبائیں۔'
                : 'Get simple explanations, terminology breakdowns, and hands-on guidance.'}
            </p>
          </div>

          {/* 3 Quick Prompt Shortcut Buttons */}
          <div className="space-y-2">
            <span className="text-xs font-black text-slate-700">
              ⚡ {isUrdu ? 'فوری رہنمائی کے لیے ایک کلک کریں:' : 'One-Tap Quick Prompts:'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {journey.aiGuidePrompts.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleRunAiPrompt(isUrdu ? p.promptUrdu : p.promptEn)}
                  className="p-3.5 rounded-2xl bg-white hover:bg-purple-50 border border-purple-200 text-purple-950 font-black text-xs transition flex items-center justify-between gap-2 shadow-xs"
                >
                  <span>{isUrdu ? p.titleUrdu : p.titleEn}</span>
                  <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* AI Chat History */}
          <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 max-h-[380px] overflow-y-auto">
            {aiChatMessages.map((msg, mIdx) => (
              <div
                key={mIdx}
                className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm font-bold leading-relaxed space-y-1 ${
                  msg.role === 'user'
                    ? 'bg-purple-50 text-purple-950 border border-purple-200 ml-6 rtl:ml-0 rtl:mr-6'
                    : 'bg-slate-50 text-slate-900 border border-slate-200 mr-6 rtl:mr-0 rtl:ml-6'
                }`}
              >
                <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-500">
                  {msg.role === 'user' ? '👤 آپ کا سوال' : '🤖 AI تعلیمی رہنما'}
                </div>
                <div className="whitespace-pre-line text-slate-900">{msg.text}</div>
              </div>
            ))}

            {aiIsGenerating && (
              <div className="p-3 rounded-xl bg-purple-50 text-purple-900 text-xs font-bold animate-pulse flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>{isUrdu ? 'AI جواب تیار کر رہا ہے...' : 'Generating response...'}</span>
              </div>
            )}
          </div>

          {/* AI Custom Query Input */}
          <form onSubmit={handleSendCustomAiMessage} className="flex items-center gap-2">
            <input
              type="text"
              value={aiCustomInput}
              onChange={(e) => setAiCustomInput(e.target.value)}
              placeholder={
                isUrdu
                  ? 'کوئی بھی سوال لکھیں، مثلاً: "کلائنٹ کو کیسے تلاش کروں؟"'
                  : 'Type any question about this skill...'
              }
              className="flex-1 p-3.5 rounded-2xl bg-white border border-slate-300 focus:border-purple-600 text-xs sm:text-sm font-bold text-slate-900 outline-none transition shadow-xs"
            />
            <button
              type="submit"
              disabled={!aiCustomInput.trim() || aiIsGenerating}
              className="py-3.5 px-5 rounded-2xl bg-purple-800 hover:bg-purple-900 disabled:opacity-50 text-white font-black text-xs sm:text-sm transition flex items-center gap-1.5 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>{isUrdu ? 'پوچھیں' : 'Ask'}</span>
            </button>
          </form>

          {/* Jump to Full AI Teacher View */}
          {onOpenAITeacherWithPrompt && (
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-between gap-3 flex-wrap">
              <div className="space-y-0.5">
                <h5 className="text-xs font-black text-slate-900">
                  🎙️ {isUrdu ? 'مکمل آواز اور وائس چیٹ کے ساتھ بات کریں؟' : 'Voice Chat with Global AI Mentor?'}
                </h5>
                <p className="text-[11px] text-slate-500 font-bold">
                  {isUrdu ? 'Seekho کا مکمل صوتی استاد کھولیں' : 'Open full voice AI teacher'}
                </p>
              </div>

              <button
                onClick={() =>
                  onOpenAITeacherWithPrompt(
                    `السلام علیکم! میں ہنر "${skill.titleUrdu}" سیکھ رہا ہوں۔ مجھے اس میں رہنمائی فرمائیں۔`
                  )
                }
                className="py-2 px-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs transition flex items-center gap-1"
              >
                <span>{isUrdu ? 'مکمل AI استاد کھولیں' : 'Open AI Teacher'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. SMART INTERCONNECTED SKILLS FOOTER */}
      {/* ========================================================================= */}
      {journey.nextRecommendedSkills && journey.nextRecommendedSkills.length > 0 && (
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 font-arabic">
          <h4 className="text-sm font-black text-slate-900">
            🔗 {isUrdu ? 'اس ہنر کے بعد اگلی مفید مہارتیں:' : 'Interconnected Next Skills:'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {journey.nextRecommendedSkills.map((rec, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1 flex items-start justify-between gap-2"
              >
                <div>
                  <span className="text-xs font-black text-slate-900">
                    {isUrdu ? rec.titleUrdu : rec.titleEn}
                  </span>
                  <p className="text-[11px] text-slate-500 font-bold leading-relaxed pt-0.5">
                    {isUrdu ? rec.reasonUrdu : rec.reasonEn}
                  </p>
                </div>
                {onSelectNextSkill && (
                  <button
                    onClick={() => onSelectNextSkill(rec.skillId)}
                    className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-black text-xs shrink-0 transition"
                    title="ہنر کھولیں"
                  >
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
