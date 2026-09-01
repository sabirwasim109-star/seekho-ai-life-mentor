import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Award, 
  Check, 
  Flame, 
  ShieldCheck, 
  HelpCircle, 
  Briefcase, 
  Layers, 
  Bot, 
  Laptop, 
  Smartphone, 
  Wrench, 
  Share2, 
  HeartHandshake, 
  AlertTriangle, 
  BookOpen, 
  TrendingUp, 
  FileText,
  Volume2,
  Square,
  Play
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { SkillMasterItem } from '../data/skillsMasterData';
import { speakText, stopSpeaking } from '../utils/speech';

interface SkillMasterDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: SkillMasterItem | null;
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
  onSelectNextSkill?: (nextSkillId: string) => void;
  onRewardPoints?: (points: number, msgUrdu: string, msgEn: string) => void;
}

export const SkillMasterDetailModal: React.FC<SkillMasterDetailModalProps> = ({
  isOpen,
  onClose,
  skill,
  language,
  userProfile,
  onOpenAITeacherWithPrompt,
  onSelectNextSkill,
  onRewardPoints,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [activeTab, setActiveTab] = useState<'overview' | 'lessons' | 'pathway' | 'projects' | 'earning' | 'ethics' | 'teach'>('overview');
  const [completedLessonIds, setCompletedLessonIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('seekho_completed_skill_lessons');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });

  const [completedProjectIds, setCompletedProjectIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('seekho_completed_skill_projects');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });

  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [taughtPersonName, setTaughtPersonName] = useState('');
  const [taughtLogged, setTaughtLogged] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState<number>(0.86);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  if (!isOpen || !skill) return null;

  const handlePlayVoice = (text: string, speed = 0.86) => {
    stopSpeaking();
    setIsSpeaking(true);
    setSpeechSpeed(speed);
    speakText(text, {
      language: 'ur',
      rate: speed,
      pitch: 0.84,
    });
  };

  const handleStopVoice = () => {
    stopSpeaking();
    setIsSpeaking(false);
  };

  const handleToggleLesson = (lessonId: string) => {
    const nextState = !completedLessonIds[lessonId];
    const updated = { ...completedLessonIds, [lessonId]: nextState };
    setCompletedLessonIds(updated);
    try {
      localStorage.setItem('seekho_completed_skill_lessons', JSON.stringify(updated));
    } catch {
      // ignore
    }
    if (nextState && onRewardPoints) {
      onRewardPoints(20, 'ماشاءاللہ! سبق مکمل کرنے پر ۲۰ پوائنٹس شامل ہو گئے!', 'Lesson completed! +20 points awarded.');
    }
  };

  const handleToggleProject = (projId: string) => {
    const nextState = !completedProjectIds[projId];
    const updated = { ...completedProjectIds, [projId]: nextState };
    setCompletedProjectIds(updated);
    try {
      localStorage.setItem('seekho_completed_skill_projects', JSON.stringify(updated));
    } catch {
      // ignore
    }
    if (nextState && onRewardPoints) {
      onRewardPoints(50, 'شاندار! پروجیکٹ مکمل کرنے پر ۵۰ پوائنٹس شامل ہو گئے!', 'Project completed! +50 points awarded.');
    }
  };

  const handleAnswerQuiz = (qId: string, optIndex: number, isCorrect: boolean) => {
    setQuizAnswers(prev => ({ ...prev, [qId]: optIndex }));
    if (isCorrect && onRewardPoints) {
      onRewardPoints(15, 'درست جواب! +۱۵ پوائنٹس!', 'Correct answer! +15 points!');
    }
  };

  const handleLogTeaching = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taughtPersonName.trim()) return;
    setTaughtLogged(true);
    if (onRewardPoints) {
      onRewardPoints(100, `ماشاءاللہ! آپ نے "${taughtPersonName}" کو سکھا کر صدقہ جاریہ کا کام کیا! +۱۰۰ پوائنٹس!`, `You taught ${taughtPersonName}! +100 Points!`);
    }
  };

  const handleAskMentor = () => {
    const prompt = isUrdu 
      ? `السلام علیکم! میں "${skill.titleUrdu}" کا ہنر سیکھ رہا ہوں۔ مجھے بتائیں کہ میں آج کا سب سے پہلا عملی قدم کیسے اٹھاؤں اور اس سے حلال روزگار کے کون سے راستے میرے لیے سب سے تیز ہیں؟`
      : `Hello! I am learning "${skill.titleEn}". What is the very first practical step I should take today, and what are the best halal earning pathways for me?`;
    
    stopSpeaking();
    onClose();
    if (onOpenAITeacherWithPrompt) {
      onOpenAITeacherWithPrompt(prompt);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Modal Top Banner */}
        <div className={`p-4 sm:p-6 bg-gradient-to-r ${skill.coverGradient} text-white relative`}>
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="absolute top-4 left-4 rtl:left-auto rtl:right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold font-arabic backdrop-blur-xs">
                  {isUrdu ? skill.categoryTitleUrdu : skill.categoryTitleEn}
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black font-arabic">
                  {isUrdu ? skill.badgeUrdu : skill.badgeEn}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-bold font-arabic border border-emerald-500/30">
                  {isUrdu ? `مارکیٹ مانگ: ${skill.marketDemand}` : `Market Demand: ${skill.marketDemand}`}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black font-arabic tracking-tight leading-tight">
                {isUrdu ? skill.titleUrdu : skill.titleEn}
              </h1>
              <p className="text-sm sm:text-base text-slate-100 font-arabic opacity-90 leading-relaxed">
                {isUrdu ? skill.taglineUrdu : skill.taglineEn}
              </p>
            </div>
          </div>

          {/* Voice Player Bar */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-arabic text-amber-300 flex items-center gap-1.5">
                <Volume2 className="w-4 h-4" />
                {isUrdu ? 'پاکستانی اردو رہنما کی آواز:' : 'Pakistani Urdu Mentor Voice:'}
              </span>
              <button
                onClick={() => handlePlayVoice(isUrdu ? `${skill.titleUrdu}۔ ${skill.taglineUrdu}۔ ${skill.whatIsUrdu}` : `${skill.titleEn}. ${skill.whatIsEn}`, 0.86)}
                className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-arabic text-xs font-bold transition flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isUrdu ? '▶ سنیں' : '▶ Listen'}</span>
              </button>
              <button
                onClick={() => handlePlayVoice(isUrdu ? `${skill.titleUrdu}۔ ${skill.whatIsUrdu}` : `${skill.titleEn}. ${skill.whatIsEn}`, 0.72)}
                className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-arabic text-xs font-bold transition flex items-center gap-1.5"
              >
                <span>{isUrdu ? '🐢 آہستہ سنیں' : '🐢 Slow'}</span>
              </button>
              {isSpeaking && (
                <button
                  onClick={handleStopVoice}
                  className="px-3 py-1.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-arabic text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>{isUrdu ? 'روکیں' : 'Stop'}</span>
                </button>
              )}
            </div>

            <button
              onClick={handleAskMentor}
              className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-arabic text-xs font-black transition flex items-center gap-1.5 shadow-sm"
            >
              <Bot className="w-4 h-4" />
              <span>{isUrdu ? 'رہنما سے سوال پوچھیں' : 'Ask AI Mentor'}</span>
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs (7 Clear Pillars) */}
        <div className="border-b border-slate-200 bg-slate-50 flex items-center overflow-x-auto px-4 py-2 gap-2 text-xs sm:text-sm font-arabic font-bold text-slate-600">
          {[
            { id: 'overview', labelUrdu: '۱. مکمل جائزہ', labelEn: 'Overview' },
            { id: 'lessons', labelUrdu: '۲. عملی اسباق (Learn & Act)', labelEn: 'Lessons' },
            { id: 'pathway', labelUrdu: '۳. روڈ میپ (آج / یہ ہفتہ)', labelEn: 'Learning Roadmap' },
            { id: 'projects', labelUrdu: '۴. پروجیکٹس و ٹیسٹ', labelEn: 'Projects' },
            { id: 'earning', labelUrdu: '۵. حلال روزگار کے ۸ راستے', labelEn: 'Income Pathways' },
            { id: 'ethics', labelUrdu: '۶. دیانت و اخلاق', labelEn: 'Ethics' },
            { id: 'teach', labelUrdu: '۷. ایک انسان کو سکھائیں', labelEn: 'Teach One' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                stopSpeaking();
                setActiveTab(tab.id as any);
              }}
              className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-800 text-white shadow-xs font-black'
                  : 'hover:bg-slate-200/70 text-slate-700'
              }`}
            >
              {isUrdu ? tab.labelUrdu : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-slate-800">
          
          {/* TAB 1: OVERVIEW & WHY LEARN */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in">
              {/* 1. What is this & Why learn */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-emerald-50/60 p-5 rounded-3xl border border-emerald-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-900 font-black font-arabic text-base">
                    <BookOpen className="w-5 h-5 text-emerald-700" />
                    <span>{isUrdu ? 'یہ ہنر کیا ہے؟' : 'What is this skill?'}</span>
                  </div>
                  <p className="text-sm font-arabic leading-relaxed text-slate-700">
                    {isUrdu ? skill.whatIsUrdu : skill.whatIsEn}
                  </p>
                </div>

                <div className="bg-amber-50/60 p-5 rounded-3xl border border-amber-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-amber-900 font-black font-arabic text-base">
                    <TrendingUp className="w-5 h-5 text-amber-700" />
                    <span>{isUrdu ? 'یہ کیوں سیکھیں اور کیا فائدہ ہوگا؟' : 'Why learn this?'}</span>
                  </div>
                  <p className="text-sm font-arabic leading-relaxed text-slate-700">
                    {isUrdu ? skill.whyLearnUrdu : skill.whyLearnEn}
                  </p>
                </div>
              </div>

              {/* 2. Who is it for & Prerequisites */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white p-5 rounded-3xl border border-slate-200 space-y-3 shadow-xs">
                  <h4 className="font-black text-slate-900 font-arabic text-base flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-600" />
                    <span>{isUrdu ? 'یہ ہنر کس کے لیے ہے؟' : 'Who is it for?'}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm font-arabic text-slate-600">
                    {(isUrdu ? skill.whoIsItForUrdu : skill.whoIsItForEn).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-200 space-y-3 shadow-xs">
                  <h4 className="font-black text-slate-900 font-arabic text-base flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-amber-600" />
                    <span>{isUrdu ? 'شروع کرنے کے لیے کیا سامان چاہیے؟' : 'Prerequisites & Tools'}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm font-arabic text-slate-600">
                    {(isUrdu ? skill.prerequisitesUrdu : skill.prerequisitesEn).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. 5 Adaptive Levels Progression */}
              <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-4">
                <h4 className="font-black text-slate-900 font-arabic text-base flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-700" />
                  <span>{isUrdu ? 'ہر انسان کے لیے ۵ سطحی پیش رفت (Levels for Everyone)' : '5-Level Progressive Mastery'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-arabic">
                  <div className="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                      {isUrdu ? 'سطح ۱: ابتدائی' : 'Level 1: Beginner'}
                    </span>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {skill.difficultyLevels.beginner}
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-black">
                      {isUrdu ? 'سطح ۲: درمیانی' : 'Level 2: Intermediate'}
                    </span>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {skill.difficultyLevels.intermediate}
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-2xl border border-slate-200 space-y-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-black">
                      {isUrdu ? 'سطح ۳: اعلیٰ و پروجیکٹ' : 'Level 3: Advanced'}
                    </span>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {skill.difficultyLevels.advanced}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STEP-BY-STEP PRACTICAL LESSONS & ACTIONS */}
          {activeTab === 'lessons' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-emerald-900 text-white p-4 sm:p-5 rounded-3xl flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-black font-arabic">
                    {isUrdu ? 'سیکھیں → مشق کریں → خود بنائیں' : 'Learn → Practice → Build'}
                  </h3>
                  <p className="text-xs text-emerald-200 font-arabic">
                    {isUrdu ? 'ہر سبق کے بعد دیا گیا عملی کام اپنے موبائل یا ہاتھ سے ضرور کریں۔' : 'Complete the practical action step after every lesson.'}
                  </p>
                </div>
                <span className="text-2xl font-black text-amber-300">
                  {skill.lessons.length} {isUrdu ? 'اسباق' : 'Lessons'}
                </span>
              </div>

              <div className="space-y-4">
                {skill.lessons.map((lesson) => {
                  const isDone = !!completedLessonIds[lesson.id];
                  return (
                    <div 
                      key={lesson.id}
                      className={`p-5 rounded-3xl border transition-all space-y-4 ${
                        isDone 
                          ? 'bg-emerald-50/40 border-emerald-300 shadow-xs' 
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-slate-500 font-arabic flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-emerald-600" />
                            {lesson.estimatedMinutes} {isUrdu ? 'منٹ کا سبق' : 'min lesson'}
                          </span>
                          <h4 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
                            {isUrdu ? lesson.titleUrdu : lesson.titleEn}
                          </h4>
                        </div>
                        <button
                          onClick={() => handleToggleLesson(lesson.id)}
                          className={`p-2.5 rounded-2xl border flex items-center gap-1.5 text-xs font-bold font-arabic transition ${
                            isDone 
                              ? 'bg-emerald-700 text-white border-emerald-800' 
                              : 'bg-slate-100 hover:bg-emerald-100 text-slate-700 border-slate-300'
                          }`}
                        >
                          <Check className="w-4 h-4" />
                          <span>{isDone ? (isUrdu ? 'مکمل شدہ ✓' : 'Completed ✓') : (isUrdu ? 'مکمل کریں' : 'Mark Done')}</span>
                        </button>
                      </div>

                      <p className="text-sm text-slate-700 font-arabic leading-relaxed bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100">
                        {isUrdu ? lesson.detailedGuideUrdu : lesson.detailedGuideEn}
                      </p>

                      {/* Practical Action Box */}
                      <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <span className="text-xs font-black text-amber-900 font-arabic flex items-center gap-1.5">
                            ⚡ {isUrdu ? 'آج کا عملی کام (Action):' : 'Today\'s Practical Action:'}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-slate-900 font-arabic">
                            {isUrdu ? lesson.practicalActionUrdu : lesson.practicalActionEn}
                          </p>
                        </div>
                        <button
                          onClick={() => handlePlayVoice(isUrdu ? lesson.practicalActionUrdu : lesson.practicalActionEn)}
                          className="px-3 py-1.5 rounded-xl bg-white text-amber-900 text-xs font-bold border border-amber-300 hover:bg-amber-100 transition shrink-0"
                        >
                          🎙️ {isUrdu ? 'کام سنیں' : 'Listen'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: PRACTICAL LEARNING ROADMAP (TODAY / THIS WEEK / FIRST EARNING) */}
          {activeTab === 'pathway' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-gradient-to-r from-teal-900 to-emerald-950 text-white p-5 sm:p-6 rounded-3xl space-y-2">
                <h3 className="text-xl font-black font-arabic text-amber-300">
                  🗺️ {isUrdu ? 'عملی روڈ میپ: شروع سے پہلی کمائی تک' : 'Step-by-Step Practical Learning Pathway'}
                </h3>
                <p className="text-xs sm:text-sm text-teal-100 font-arabic leading-relaxed">
                  {isUrdu 
                    ? 'الجھن سے بچنے کے لیے اپنے سفر کو ۴ واضح مراحل میں بانٹیں: آج کیا کرنا ہے، اس ہفتے کیا بنانا ہے، پہلا پروجیکٹ اور مارکیٹ کا اگلا ہنر۔' 
                    : 'A realistic milestone-based roadmap from day 1 to first earnings and skill progression.'}
                </p>
              </div>

              <div className="space-y-4">
                {/* Milestone 1: Today */}
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black font-arabic">
                      ⚡ {isUrdu ? 'مرحلہ ۱: آج کا دن (Day 1 Focus)' : 'Milestone 1: Today'}
                    </span>
                    <span className="text-xs text-slate-500 font-arabic font-bold">⏱️ ۲۰ منٹ</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 font-arabic">
                    {isUrdu ? 'بنیادی تعارف اور پہلے ٹول کی عملی انسٹالیشن / سیٹ اپ' : 'Tool Installation & First Sandbox Exercise'}
                  </h4>
                  <p className="text-sm text-slate-600 font-arabic leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    {isUrdu ? skill.lessons[0]?.practicalActionUrdu || 'آج کے دن ہنر کا بنیادی سبق سنیں اور کم از کم ایک عملی خاکہ خود تیار کریں۔' : 'Listen to the first core lesson and complete the initial action exercise.'}
                  </p>
                </div>

                {/* Milestone 2: This Week */}
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black font-arabic">
                      📅 {isUrdu ? 'مرحلہ ۲: پہلا ہفتہ (Week 1 Outcome)' : 'Milestone 2: Week 1'}
                    </span>
                    <span className="text-xs text-slate-500 font-arabic font-bold">⏱️ روزانہ ۳۰ منٹ</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 font-arabic">
                    {isUrdu ? '۳ مکمل مشقیں اور پورٹ فولیو کا بنیادی فولڈر تیار کرنا' : '3 Hands-on Exercises & Basic Portfolio'}
                  </h4>
                  <p className="text-sm text-slate-600 font-arabic leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    {isUrdu 
                      ? 'روزانہ ایک سبق مکمل کر کے اپنے ہاتھ یا موبائل سے ۳ نمونے تیار کریں اور اپنے فون میں "میرا ہنر پورٹ فولیو" نامی فولڈر بنا کر محفوظ کریں۔' 
                      : 'Complete 3 tangible exercises and archive your work in a dedicated showcase folder.'}
                  </p>
                </div>

                {/* Milestone 3: First Real Deliverable */}
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-black font-arabic">
                      🎯 {isUrdu ? 'مرحلہ ۳: پہلا لائیو پروجیکٹ (First Live Deliverable)' : 'Milestone 3: First Live Project'}
                    </span>
                    <span className="text-xs text-slate-500 font-arabic font-bold">⏱️ اختتامِ مہینہ</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 font-arabic">
                    {isUrdu ? (skill.realWorldProjects[0]?.titleUrdu || 'پہلا حقیقی پروجیکٹ') : 'First Live Real-World Project'}
                  </h4>
                  <p className="text-sm text-slate-600 font-arabic leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    {isUrdu 
                      ? (skill.realWorldProjects[0]?.descriptionUrdu || 'کسی دوست، رشتہ دار یا مقامی دکاندار کے لیے مکمل پروجیکٹ تیار کر کے فیڈ بیک لیں۔') 
                      : 'Deliver a finished project for a real person or local shop to get genuine feedback.'}
                  </p>
                </div>

                {/* Milestone 4: Next Stack Skill */}
                <div className="p-5 rounded-3xl bg-purple-50 border border-purple-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-purple-200 text-purple-900 text-xs font-black font-arabic">
                      🚀 {isUrdu ? 'مرحلہ ۴: اگلا اسکل اسٹیک (Skill Stack Expansion)' : 'Milestone 4: Stack Extension'}
                    </span>
                    <span className="text-xs text-purple-700 font-arabic font-bold">💡 ہائی ویلیو</span>
                  </div>
                  <h4 className="text-lg font-black text-purple-950 font-arabic">
                    {isUrdu ? skill.nextSkillRecommendation.skillTitleUrdu : skill.nextSkillRecommendation.skillTitleEn}
                  </h4>
                  <p className="text-sm text-slate-700 font-arabic leading-relaxed">
                    {isUrdu ? skill.nextSkillRecommendation.whyUrdu : skill.nextSkillRecommendation.whyEn}
                  </p>
                  {onSelectNextSkill && (
                    <button
                      onClick={() => {
                        stopSpeaking();
                        onSelectNextSkill(skill.nextSkillRecommendation.skillId);
                      }}
                      className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs font-arabic rounded-xl transition"
                    >
                      {isUrdu ? 'اس ہنر کی تفصیل دیکھیں' : 'Explore Next Skill'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PROJECTS & SELF ASSESSMENT */}
          {activeTab === 'projects' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="space-y-4">
                <h3 className="text-xl font-black text-slate-900 font-arabic flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span>{isUrdu ? 'حقیقی دنیا کے پروجیکٹس (Real-World Projects)' : 'Real-World Projects'}</span>
                </h3>

                {skill.realWorldProjects.map((proj) => {
                  const isDone = !!completedProjectIds[proj.id];
                  return (
                    <div 
                      key={proj.id}
                      className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black font-arabic">
                            {isUrdu ? 'عملی پروجیکٹ' : 'Hands-on Project'}
                          </span>
                          <h4 className="text-lg sm:text-xl font-black text-slate-900 font-arabic pt-1">
                            {isUrdu ? proj.titleUrdu : proj.titleEn}
                          </h4>
                        </div>
                        <button
                          onClick={() => handleToggleProject(proj.id)}
                          className={`py-2 px-4 rounded-xl text-xs font-black font-arabic transition flex items-center gap-1.5 ${
                            isDone 
                              ? 'bg-emerald-700 text-white' 
                              : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xs'
                          }`}
                        >
                          <Check className="w-4 h-4" />
                          <span>{isDone ? (isUrdu ? 'مکمل و پورٹ فولیو میں محفوظ' : 'Logged to Portfolio ✓') : (isUrdu ? 'پروجیکٹ مکمل کیا' : 'Mark Completed')}</span>
                        </button>
                      </div>

                      <p className="text-sm text-slate-600 font-arabic leading-relaxed">
                        {isUrdu ? proj.descriptionUrdu : proj.descriptionEn}
                      </p>

                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-xs font-black text-slate-900 font-arabic">
                          📋 {isUrdu ? 'پروجیکٹ مکمل کرنے کے ۴ مراحل:' : '4 Steps to Complete:'}
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm font-arabic text-slate-700">
                          {(isUrdu ? proj.stepsUrdu : proj.stepsEn).map((step, sIdx) => (
                            <li key={sIdx} className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-xs font-bold shrink-0">
                                {sIdx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Assessment Quiz */}
              <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-4">
                <h4 className="text-lg font-black text-slate-900 font-arabic flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-700" />
                  <span>{isUrdu ? 'خود تشخیصی سوال (Self-Check Assessment)' : 'Self-Assessment Quiz'}</span>
                </h4>

                {skill.assessmentQuestions.map((q) => {
                  const selected = quizAnswers[q.id];
                  const isCorrect = selected === q.correctIndex;
                  return (
                    <div key={q.id} className="p-4 bg-white rounded-2xl border border-slate-200 space-y-3">
                      <p className="text-base font-black text-slate-900 font-arabic">
                        {isUrdu ? q.questionUrdu : q.questionEn}
                      </p>
                      <div className="space-y-2">
                        {(isUrdu ? q.optionsUrdu : q.optionsEn).map((opt, oIdx) => {
                          const isOptionSelected = selected === oIdx;
                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleAnswerQuiz(q.id, oIdx, oIdx === q.correctIndex)}
                              className={`w-full text-right p-3 rounded-xl border text-xs sm:text-sm font-arabic transition flex items-center justify-between ${
                                isOptionSelected
                                  ? (oIdx === q.correctIndex ? 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold' : 'bg-red-100 border-red-500 text-red-900')
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                              }`}
                            >
                              <span>{opt}</span>
                              {isOptionSelected && (
                                <span>{oIdx === q.correctIndex ? '✅ درست' : '❌ دوبارہ کوشش کریں'}</span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                      {selected !== undefined && (
                        <p className="text-xs text-slate-600 font-arabic bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200">
                          💡 {isUrdu ? q.explanationUrdu : q.explanationEn}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: INCOME & BUSINESS PATHWAYS */}
          {activeTab === 'earning' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-emerald-50/70 p-5 rounded-3xl border border-emerald-200 space-y-2">
                <h3 className="text-xl font-black text-emerald-950 font-arabic">
                  {isUrdu ? 'اس ہنر سے حلال روزگار کے ممکنہ راستے' : 'Realistic Halal Earning Pathways'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed">
                  {isUrdu 
                    ? 'کسی بھی ہنر میں کمائی کا انحصار آپ کی محنت، مہارت کی صفائی، کسٹمر سے دیانت دارانہ برتاؤ اور مارکیٹ کی مانگ پر ہوتا ہے۔ کوئی جھوٹا وعدہ نہیں، حقیقت پسندانہ راستے یہ ہیں:' 
                    : 'Income depends on practical craftsmanship, fair pricing, and customer trust. Here are proven pathways:'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skill.incomePathways.map((path, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black font-arabic">
                        {isUrdu ? path.typeUrdu : path.typeEn}
                      </span>
                      <Briefcase className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="text-base font-black text-slate-900 font-arabic">
                      {isUrdu ? path.pathwayUrdu : path.pathwayEn}
                    </h4>
                    <p className="text-xs text-slate-600 font-arabic leading-relaxed bg-slate-50 p-2.5 rounded-xl">
                      <strong>{isUrdu ? 'حقیقی دائرہ کار: ' : 'Scope: '}</strong>
                      {isUrdu ? path.realisticScopeUrdu : path.realisticScopeEn}
                    </p>
                  </div>
                ))}
              </div>

              {/* Business Formula */}
              <div className="p-5 rounded-3xl bg-amber-50 border border-amber-200 space-y-2">
                <h4 className="text-base font-black text-amber-950 font-arabic">
                  🚀 {isUrdu ? 'ہنر کو کاروبار میں تبدیل کرنے کا سنہری فارمولا' : 'Formula to Turn Skill into Business'}
                </h4>
                <p className="text-sm text-slate-800 font-arabic leading-relaxed font-bold">
                  {isUrdu ? skill.businessFormulaUrdu : skill.businessFormulaEn}
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: ETHICS & HALAL EARNING */}
          {activeTab === 'ethics' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                  <h3 className="text-xl font-black font-arabic">
                    {isUrdu ? 'دیانت، انصاف اور حلال رزق کے سنہری اصول' : 'Ethical & Halal Livelihood Principles'}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 font-arabic leading-relaxed">
                  {isUrdu 
                    ? 'ہنر مند انسان کی اصل قیمت اس کی دیانت اور وعدے کی سچائی ہے۔ جب نیت حلال رزق کمانے اور خلقِ خدا کو نفع پہنچانے کی ہو تو روزی میں بے پناہ برکت ہوتی ہے۔' 
                    : 'A craftsperson\'s true reputation is built on honesty and punctuality. When the intention is lawful livelihood, divine blessings follow.'}
                </p>
              </div>

              <div className="space-y-3">
                {(isUrdu ? skill.ethicalGuidanceUrdu : skill.ethicalGuidanceEn).map((guideline, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs font-arabic">
                    <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-slate-800 leading-relaxed font-medium">
                      {guideline}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: TEACH ONE (COMMUNITY BENEFIT) & NEXT SKILL */}
          {activeTab === 'teach' && (
            <div className="space-y-6 animate-in fade-in">
              {/* Teach one challenge */}
              <div className="bg-gradient-to-br from-teal-900 to-emerald-950 text-white p-6 rounded-3xl space-y-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-2xl shadow-xs">
                    🤝
                  </div>
                  <div>
                    <h3 className="text-xl font-black font-arabic text-amber-300">
                      {isUrdu ? '”ایک ہنر سیکھیں، ایک انسان کو سکھائیں“' : '“Learn One Skill, Teach One Human”'}
                    </h3>
                    <p className="text-xs text-teal-200 font-arabic">
                      {isUrdu ? 'اپنے فائدے سے آگے بڑھ کر خاندان، محلے اور انسانیت کے کام آئیں' : 'Progress from self to family, neighborhood, and humanity'}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-arabic leading-relaxed text-slate-100">
                  {isUrdu ? skill.communityBenefitUrdu : skill.communityBenefitEn}
                </p>

                {taughtLogged ? (
                  <div className="bg-white/10 p-4 rounded-2xl border border-emerald-400/50 text-emerald-300 font-arabic text-center font-bold">
                    ✅ {isUrdu ? 'ماشاءاللہ! آپ نے تدریس کا ریکارڈ درج کر دیا۔ جزاک اللہ خیر!' : 'Recorded successfully! Jazakallah Khair!'}
                  </div>
                ) : (
                  <form onSubmit={handleLogTeaching} className="space-y-3 pt-2">
                    <label className="text-xs font-bold font-arabic text-slate-200 block">
                      {isUrdu ? 'آپ نے یہ بات کس کو سکھائی؟ (نام لکھیں):' : 'Who did you teach this to? (Enter name):'}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={taughtPersonName}
                        onChange={(e) => setTaughtPersonName(e.target.value)}
                        placeholder={isUrdu ? 'مثلاً: چھوٹے بھائی احمد کو، دوست علی کو...' : 'e.g. Brother Ahmed, Friend Ali...'}
                        className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black font-arabic text-xs transition"
                      >
                        {isUrdu ? 'ریکارڈ درج کریں (+100)' : 'Log (+100 Pts)'}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Next Recommended Skill */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <span className="text-xs font-black text-slate-500 font-arabic">
                  {isUrdu ? 'اگلا تجویز کردہ ہنر (Next Recommended Step):' : 'Next Recommended Step:'}
                </span>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-black text-slate-900 font-arabic">
                      {isUrdu ? skill.nextSkillRecommendation.skillTitleUrdu : skill.nextSkillRecommendation.skillTitleEn}
                    </h4>
                    <p className="text-xs text-slate-600 font-arabic mt-1">
                      {isUrdu ? skill.nextSkillRecommendation.whyUrdu : skill.nextSkillRecommendation.whyEn}
                    </p>
                  </div>
                  {onSelectNextSkill && (
                    <button
                      onClick={() => {
                        stopSpeaking();
                        onSelectNextSkill(skill.nextSkillRecommendation.skillId);
                      }}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs font-arabic rounded-xl transition whitespace-nowrap"
                    >
                      {isUrdu ? 'اگلا ہنر دیکھیں' : 'View Next Skill'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3 flex-wrap">
          <div className="text-xs text-slate-600 font-arabic">
            💡 {isUrdu ? 'روزانہ ۲۰ منٹ مشق سے چند ہفتوں میں مہارت حاصل کریں' : '20 mins daily practice guarantees mastery'}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAskMentor}
              className="py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold font-arabic text-xs transition flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4 text-emerald-700" />
              <span>{isUrdu ? 'رہنما سے سوال' : 'Ask Mentor'}</span>
            </button>
            <button
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="py-2.5 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-black font-arabic text-xs transition"
            >
              {isUrdu ? 'سمجھ آ گیا، بند کریں' : 'Done'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
