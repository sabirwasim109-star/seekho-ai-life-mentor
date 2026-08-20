import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Sparkles, 
  Flame, 
  Users, 
  Clock, 
  HeartHandshake, 
  TrendingUp, 
  BookOpen, 
  ArrowRight, 
  ArrowLeft, 
  Bot, 
  CheckCircle2, 
  RotateCcw, 
  X, 
  Scale, 
  AlertCircle,
  Eye,
  Award,
  ChevronLeft,
  ChevronRight,
  Compass,
  Check
} from 'lucide-react';
import { Language, DecisionScenario, DecisionOption, UserProfile } from '../types';
import { DECISION_SCENARIOS_DATA } from '../data/decisionScenariosData';

interface ThinkBeforeYouActCardProps {
  language: Language;
  onOpenAITeacher: (presetPrompt?: string) => void;
  userProfile?: UserProfile;
  onCompletePracticeScenario?: (scenarioId: string, points: number) => void;
}

export const ThinkBeforeYouActCard: React.FC<ThinkBeforeYouActCardProps> = ({
  language,
  onOpenAITeacher,
  userProfile,
  onCompletePracticeScenario,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [activeScenario, setActiveScenario] = useState<DecisionScenario | null>(null);
  const [selectedOption, setSelectedOption] = useState<DecisionOption | null>(null);
  const [pauseSeconds, setPauseSeconds] = useState<number>(30);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [activeScenarioIndex, setActiveScenarioIndex] = useState<number>(0);
  const [completedScenarios, setCompletedScenarios] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_completed_practice_scenarios');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return userProfile?.completedPracticeScenarioIds || [];
  });
  const [justCompletedScenarioId, setJustCompletedScenarioId] = useState<string | null>(null);

  useEffect(() => {
    if (userProfile?.completedPracticeScenarioIds && userProfile.completedPracticeScenarioIds.length > 0) {
      setCompletedScenarios(prev => Array.from(new Set([...prev, ...userProfile.completedPracticeScenarioIds!])));
    }
  }, [userProfile?.completedPracticeScenarioIds]);

  // Quick preset triggers
  const QUICK_TRIGGERS = [
    {
      id: 'anger',
      icon: Flame,
      scenarioIndex: 0,
      labelUrdu: '😡 غصہ و لڑائی',
      labelEn: '😡 Anger & Fight',
      promptUrdu: 'میں اس وقت شدید غصے میں ہوں، لڑائی ہونے کا خطرہ ہے، مجھے 5-Step طریقہ کار کے تحت رہنمائی کریں کہ کیا کروں۔',
      promptEn: 'I am extremely angry right now and at risk of fighting. Please guide me using the 5-step decision framework.'
    },
    {
      id: 'revenge',
      icon: Scale,
      scenarioIndex: 1,
      labelUrdu: '⚡ بدلہ یا معافی',
      labelEn: '⚡ Revenge vs Pardon',
      promptUrdu: 'کسی نے مجھے نقصان پہنچایا ہے اور میں بدلہ لینا چاہتا ہوں، مجھے 5-Step طریقہ کار کے تحت رہنمائی کریں۔',
      promptEn: 'Someone harmed me and I am tempted to retaliate. Please guide me using the 5-step decision framework.'
    },
    {
      id: 'peer',
      icon: Users,
      scenarioIndex: 2,
      labelUrdu: '👥 دوستوں کا منفی دباؤ',
      labelEn: '👥 Peer Pressure',
      promptUrdu: 'دوست مجھے غلط کام اور وقت ضائع کرنے پر اکسا رہے ہیں، مجھے منفی دباؤ سے بچنے کا تعمیری حل بتائیں۔',
      promptEn: 'Peers are pressuring me into harmful habits and wasting time. Guide me on handling this peer pressure.'
    },
    {
      id: 'time',
      icon: Clock,
      scenarioIndex: 3,
      labelUrdu: '📱 اسکرولنگ / وقت کا ضیاع',
      labelEn: '📱 Phone Scrolling',
      promptUrdu: 'میں فون پر ریلز اور گیمز میں گھنٹوں ضائع کر رہا ہوں، مجھے فوکس اور وقت کی قدر کا عملی طریقہ بتائیں۔',
      promptEn: 'I am losing hours to mindless phone scrolling. Please guide me with a practical 15-minute action.'
    },
    {
      id: 'parents',
      icon: HeartHandshake,
      scenarioIndex: 4,
      labelUrdu: '👨‍👩‍👧 والدین کا احترام',
      labelEn: '👨‍👩‍👧 Parents Respect',
      promptUrdu: 'والدین کی کسی بات پر اختلاف ہے اور غصہ آ رہا ہے، مجھے 5-Step طریقہ کار کے مطابق ادب و حکمت سے بات کرنے کی رہنمائی دیں۔',
      promptEn: 'I have a disagreement with parents and feel frustrated. Guide me with respectful, wise communication.'
    },
    {
      id: 'cheat',
      icon: AlertCircle,
      scenarioIndex: 5,
      labelUrdu: '📝 نقل یا سچائی کی آزمائش',
      labelEn: '📝 Cheating vs Honesty',
      promptUrdu: 'امتحان یا کام میں نقل اور شارٹ کٹ کا موقع ہے، مجھے سچائی اور حقیقی صلاحیت کے انتخاب کی رہنمائی دیں۔',
      promptEn: 'I have an opportunity to cheat in an exam or work. Guide me on choosing honesty and real competence.'
    },
    {
      id: 'scam',
      icon: TrendingUp,
      scenarioIndex: 6,
      labelUrdu: '💰 آسان پیسے کا لالچ',
      labelEn: '💰 Quick-Money Scam',
      promptUrdu: 'کسی نے جلدی امیر بننے یا آن لائن پیسے لگانے کی پیشکش کی ہے، مجھے لالچ سے بچنے اور حلال ہنر کی رہنمائی دیں۔',
      promptEn: 'Someone offered a quick-money scheme online. Guide me on avoiding scams and building halal skills.'
    },
    {
      id: 'bully',
      icon: Users,
      scenarioIndex: 7,
      labelUrdu: '🛡️ مذاق اڑانا / طعنہ زنی',
      labelEn: '🛡️ Mocking / Bullying',
      promptUrdu: 'محفل میں کسی کمزور کا مذاق اڑایا جا رہا ہے، مجھے شرافت اور مظلوم کا دفاع کرنے کا طریقہ سکھائیں۔',
      promptEn: 'A peer is being bullied or mocked in public. Guide me on standing up for dignity with wisdom.'
    },
    {
      id: 'jealousy',
      icon: Sparkles,
      scenarioIndex: 8,
      labelUrdu: '✨ حسد و جلن سے بچاؤ',
      labelEn: '✨ Overcoming Envy',
      promptUrdu: 'کسی دوست کی کامیابی پر دل میں جلن آ رہی ہے، مجھے دل کی صفائی اور اپنی محنت پر توجہ کی رہنمائی دیں۔',
      promptEn: 'I feel envious of a peer\'s success. Guide me on purifying my heart and celebrating others.'
    },
    {
      id: 'quit',
      icon: Compass,
      scenarioIndex: 9,
      labelUrdu: '📚 مایوسی و ہمت ہارنا',
      labelEn: '📚 Beating Despair',
      promptUrdu: 'سبق مشکل لگ رہا ہے اور پڑھائی یا ہنر چھوڑنے کا دل چاہ رہا ہے، مجھے مایوسی ختم کرنے کے لیے 5-Step رہنمائی دیں۔',
      promptEn: 'Learning feels hard and I feel like dropping out. Guide me on overcoming hopelessness.'
    }
  ];

  const handleOpenScenario = (scenario: DecisionScenario, index?: number) => {
    setActiveScenario(scenario);
    if (typeof index === 'number') {
      setActiveScenarioIndex(index);
    } else {
      const idx = DECISION_SCENARIOS_DATA.findIndex(s => s.id === scenario.id);
      if (idx !== -1) setActiveScenarioIndex(idx);
    }
    setSelectedOption(null);
    setPauseSeconds(30);
    setIsTimerRunning(false);
  };

  const handleNextScenario = () => {
    const nextIdx = (activeScenarioIndex + 1) % DECISION_SCENARIOS_DATA.length;
    setActiveScenarioIndex(nextIdx);
    setActiveScenario(DECISION_SCENARIOS_DATA[nextIdx]);
    setSelectedOption(null);
    setPauseSeconds(30);
    setIsTimerRunning(false);
  };

  const handlePrevScenario = () => {
    const prevIdx = (activeScenarioIndex - 1 + DECISION_SCENARIOS_DATA.length) % DECISION_SCENARIOS_DATA.length;
    setActiveScenarioIndex(prevIdx);
    setActiveScenario(DECISION_SCENARIOS_DATA[prevIdx]);
    setSelectedOption(null);
    setPauseSeconds(30);
    setIsTimerRunning(false);
  };

  const handleTryAgain = () => {
    setSelectedOption(null);
    setPauseSeconds(30);
    setIsTimerRunning(false);
  };

  const handleCompleteScenarioPractice = (scenarioId: string) => {
    const updated = Array.from(new Set([...completedScenarios, scenarioId]));
    setCompletedScenarios(updated);
    setJustCompletedScenarioId(scenarioId);

    try {
      localStorage.setItem('seekho_completed_practice_scenarios', JSON.stringify(updated));
    } catch {
      // ignore
    }

    if (onCompletePracticeScenario) {
      onCompletePracticeScenario(scenarioId, 15);
    }

    setTimeout(() => {
      setJustCompletedScenarioId(null);
    }, 4000);
  };

  const handleStartTimer = () => {
    if (isTimerRunning) return;
    setIsTimerRunning(true);
    let sec = 30;
    const timer = setInterval(() => {
      sec -= 1;
      setPauseSeconds(sec);
      if (sec <= 0) {
        clearInterval(timer);
        setIsTimerRunning(false);
      }
    }, 1000);
  };

  const completedCount = completedScenarios.length;

  return (
    <div id="think-before-you-act-card" className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-5 sm:p-7 border border-indigo-500/30 shadow-xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-indigo-800/40">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center font-bold">
              <ShieldAlert className="w-4 h-4" />
            </span>
            <span className="text-xs px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 font-semibold font-arabic">
              {isUrdu ? 'حقیقی زندگی کی ۱۰ عملی مشقیں (Real Life Practice)' : '10 Real Life Practice Scenarios'}
            </span>
            {completedCount > 0 && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold font-arabic flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>{completedCount}/10 {isUrdu ? 'مکمل' : 'Done'}</span>
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-arabic tracking-tight">
            {isUrdu ? 'سوچیں اور محفوظ فیصلہ کریں' : 'Think Before You Act'}
          </h2>
          <p className="text-indigo-200/90 text-xs sm:text-sm font-arabic max-w-2xl">
            {isUrdu
              ? 'غصے، جذبات، منفی دباؤ یا لالچ میں ۳۰ سیکنڈ کا وقفہ لیں — ۳ راستوں کے نتائج دیکھیں اور ذاتی ترقی (Personal Growth) کے پوائنٹس حاصل کریں۔'
              : 'Pause 30 seconds during anger, peer pressure, or greed — weigh 3 choices and earn Personal Growth points.'}
          </p>
        </div>

        <button
          id="think-card-consult-ai-btn"
          onClick={() => onOpenAITeacher(isUrdu ? 'مجھے ایک اہم فیصلے کے بارے میں سوچ بچار کے 5-Step طریقہ کار کے تحت رہنمائی چاہیے' : 'I need guidance on making a wise decision using the 5-step framework')}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition flex items-center justify-center gap-2 self-start md:self-auto shrink-0 font-arabic"
        >
          <Bot className="w-4 h-4 text-slate-950" />
          <span>{isUrdu ? 'استاد سیکھو سے فیصلہ سازی پوچھیں' : 'Ask Life Mentor'}</span>
          <ArrowIcon className="w-4 h-4" />
        </button>
      </div>

      {/* 10 Real Life Practice Scenarios Grid */}
      <div className="relative z-10 pt-5 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-xs font-bold text-indigo-300 font-arabic flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{isUrdu ? '۱۰ حقیقی صورتِ حال کی مشقیں منتخب کریں:' : 'Select any of the 10 real-life practice scenarios:'}</span>
          </p>
          <span className="text-[11px] text-indigo-300/80 font-arabic">
            {isUrdu ? 'ہر مشق مکمل کرنے پر +15 گروتھ پوائنٹس' : '+15 Growth Points per scenario'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {DECISION_SCENARIOS_DATA.map((scenario, idx) => {
            const isCompleted = completedScenarios.includes(scenario.id);
            return (
              <button
                key={scenario.id}
                id={`scenario-btn-${scenario.id}`}
                onClick={() => handleOpenScenario(scenario, idx)}
                className={`p-3 rounded-2xl border text-start transition flex flex-col justify-between group h-full shadow-xs relative ${
                  isCompleted 
                    ? 'bg-emerald-950/30 border-emerald-500/40 hover:bg-emerald-900/40' 
                    : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-indigo-400/40'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-400/10 px-1.5 py-0.5 rounded">
                    #{idx + 1}
                  </span>
                  {isCompleted ? (
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  ) : (
                    <span className="text-[10px] text-indigo-300/80 font-bold opacity-0 group-hover:opacity-100 transition">
                      {isUrdu ? 'مشق' : 'Practice'}
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold text-white font-arabic line-clamp-2 leading-relaxed group-hover:text-amber-200 transition">
                  {isUrdu ? scenario.titleUrdu : scenario.titleEn}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Scenario Explorer Banner */}
      <div className="relative z-10 mt-5 p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-arabic">
              {isUrdu ? 'نتائج کا نقشہ سمیلیٹر (Consequence Map Simulator)' : 'Consequence Map Simulator'}
            </h4>
            <p className="text-[11px] text-indigo-200 font-arabic">
              {isUrdu
                ? 'ہر صورت حال کے ۳ راستے، فوری و طویل مدتی نتائج، حکمت کا سبق اور عملی قدم آزمائیں۔'
                : 'Test 3 choices per scenario, view consequences, moral lessons, and better actions.'}
            </p>
          </div>
        </div>

        <button
          id="open-first-scenario-btn"
          onClick={() => handleOpenScenario(DECISION_SCENARIOS_DATA[0], 0)}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-xs transition flex items-center gap-1.5 shrink-0 self-stretch sm:self-auto justify-center font-arabic"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{isUrdu ? 'مشق شروع کریں' : 'Start Practice'}</span>
        </button>
      </div>

      {/* Decision Scenario Modal / Drawer */}
      {activeScenario && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 text-white rounded-3xl border border-indigo-500/40 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-7 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header & Navigation */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center justify-center font-bold text-xs font-mono">
                  {activeScenarioIndex + 1}/10
                </span>
                <div>
                  <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">
                    {isUrdu ? 'حقیقی زندگی کی عملی مشق' : 'Real Life Practice Scenario'}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white font-arabic">
                    {isUrdu ? activeScenario.titleUrdu : activeScenario.titleEn}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevScenario}
                  title="Previous Scenario"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextScenario}
                  title="Next Scenario"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveScenario(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center transition ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Step 1: STOP */}
            <div className="bg-amber-950/40 border border-amber-500/30 rounded-2xl p-4 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-amber-300 font-black text-xs sm:text-sm font-arabic">
                  <span>🛑 مرحلہ ۱: پہلے ۳۰ سیکنڈ رکیں (STOP & BREATHE)</span>
                </div>
                {!isTimerRunning && pauseSeconds === 30 ? (
                  <button
                    onClick={handleStartTimer}
                    className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs font-arabic hover:bg-amber-300 transition"
                  >
                    {isUrdu ? '۳۰ سیکنڈ ٹائمر شروع کریں' : 'Start 30s Timer'}
                  </button>
                ) : (
                  <span className="text-xs font-mono font-bold text-amber-300 bg-amber-900/60 px-2 py-0.5 rounded-md">
                    {pauseSeconds}s
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-amber-100/90 font-arabic leading-relaxed">
                {isUrdu ? activeScenario.stopPauseStepUrdu : activeScenario.stopPauseStepEn}
              </p>
            </div>

            {/* Step 2: UNDERSTAND */}
            <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-indigo-300 font-black text-xs sm:text-sm font-arabic">
                <span>🧠 مرحلہ ۲: صورتِ حال کو سمجھیں (UNDERSTAND)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-arabic leading-relaxed">
                {isUrdu ? activeScenario.situationUrdu : activeScenario.situationEn}
              </p>
              <p className="text-xs text-indigo-200/90 font-semibold font-arabic pt-1">
                ❓ {isUrdu ? activeScenario.understandQuestionUrdu : activeScenario.understandQuestionEn}
              </p>
            </div>

            {/* Step 3: 3 CHOICES (Option A, Option B, Option C) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-emerald-300 font-black text-xs sm:text-sm font-arabic">
                  <span>⚖️ مرحلہ ۳: تین ممکنہ راستے (3 CHOICES)</span>
                </div>
                {selectedOption && (
                  <button
                    id="try-again-choice-btn"
                    onClick={handleTryAgain}
                    className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 border border-indigo-400/30 text-xs font-bold font-arabic flex items-center gap-1.5 transition"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{isUrdu ? 'دوسرا انتخاب آزمائیں (Try Again)' : 'Try Another Choice'}</span>
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-400 font-arabic">
                {isUrdu ? 'کسی بھی راستے پر کلک کر کے اس کے فوری، قلیل مدتی اور طویل مدتی نتائج دیکھیں:' : 'Click any choice to see its complete consequence breakdown and moral lesson:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {activeScenario.options.map((opt, oIdx) => (
                  <button
                    key={opt.id}
                    id={`opt-btn-${opt.id}`}
                    onClick={() => setSelectedOption(opt)}
                    className={`p-3.5 rounded-2xl text-start transition border flex flex-col justify-between ${
                      selectedOption?.id === opt.id
                        ? 'bg-indigo-900/70 border-amber-400 shadow-md ring-2 ring-amber-400/50'
                        : opt.isConstructive
                        ? 'bg-emerald-950/30 border-emerald-500/30 hover:border-emerald-400/60'
                        : 'bg-rose-950/30 border-rose-500/30 hover:border-rose-400/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          opt.isConstructive ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                        }`}>
                          {opt.isConstructive ? (isUrdu ? '🟢 تعمیری' : '🟢 Constructive') : (isUrdu ? '🔴 نقصان دہ' : '🔴 Harmful')}
                        </span>
                        {selectedOption?.id === opt.id && (
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        )}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white font-arabic mb-1">
                        {isUrdu ? opt.labelUrdu : opt.labelEn}
                      </h4>
                      <p className="text-[11px] text-slate-300 font-arabic line-clamp-3 leading-relaxed">
                        {isUrdu ? opt.textUrdu : opt.textEn}
                      </p>
                    </div>

                    <span className="text-[11px] text-amber-300 font-bold font-arabic mt-2 block">
                      {isUrdu ? 'نتائج دیکھیں →' : 'View Impact →'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Option Full Impact Details */}
            {selectedOption && (
              <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 space-y-3.5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                  <h4 className="text-sm font-black text-amber-300 font-arabic flex items-center gap-1.5">
                    <span>📊 {isUrdu ? `نتائج کا نقشہ: ${selectedOption.labelUrdu}` : `Consequence Map: ${selectedOption.labelEn}`}</span>
                  </h4>
                  <button
                    onClick={handleTryAgain}
                    className="text-xs text-indigo-300 hover:text-indigo-200 font-arabic flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{isUrdu ? 'دوبارہ کوشش (Try Again)' : 'Try Again'}</span>
                  </button>
                </div>

                {/* 4 Consequence Grid Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-arabic">
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-amber-400 font-bold block mb-0.5">⚡ فوری اثر (Immediate):</span>
                    <span className="text-slate-300">{isUrdu ? selectedOption.consequenceMap.immediateEffectUrdu : selectedOption.consequenceMap.immediateEffectEn}</span>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-indigo-400 font-bold block mb-0.5">⏳ قلیل مدتی اثر (Short-term):</span>
                    <span className="text-slate-300">{isUrdu ? selectedOption.consequenceMap.shortTermEffectUrdu : selectedOption.consequenceMap.shortTermEffectEn}</span>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-emerald-400 font-bold block mb-0.5">🔮 طویل مدتی اثر (Long-term):</span>
                    <span className="text-slate-300">{isUrdu ? selectedOption.consequenceMap.longTermEffectUrdu : selectedOption.consequenceMap.longTermEffectEn}</span>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-rose-400 font-bold block mb-0.5">👨‍👩‍👧 خاندان و معاشرہ (Family/Society):</span>
                    <span className="text-slate-300">{isUrdu ? selectedOption.consequenceMap.familyEffectUrdu : selectedOption.consequenceMap.familyEffectEn}</span>
                  </div>
                </div>

                {/* Brief Explanation / Moral Lesson */}
                {selectedOption.moralLessonUrdu && (
                  <div className="bg-amber-950/40 p-3 rounded-xl border border-amber-500/30 text-xs font-arabic space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>💡 {isUrdu ? 'حکمت و سبق (Brief Explanation)' : 'Moral Lesson / Core Wisdom'}</span>
                    </div>
                    <p className="text-amber-100 font-arabic leading-relaxed">
                      {isUrdu ? selectedOption.moralLessonUrdu : selectedOption.moralLessonEn}
                    </p>
                  </div>
                )}

                {/* Islamic & Ethical Guidance */}
                <div className="bg-indigo-950/60 p-3 rounded-xl border border-indigo-500/30 text-xs font-arabic space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-300 font-bold">
                    <span>📖 {isUrdu ? `مستند رہنمائی [ماخذ: ${selectedOption.sourceLabelUrdu}]` : `Authentic Guidance [Source: ${selectedOption.sourceLabelEn}]`}</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed font-arabic">
                    {isUrdu ? selectedOption.islamicReferenceUrdu : selectedOption.islamicReferenceEn}
                  </p>
                </div>

                {/* One Better Action (آج کا ایک عملی قدم) */}
                <div className="bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-500/30 text-xs font-arabic space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>🎯 {isUrdu ? 'آج کا ایک عملی قدم (One Better Action)' : 'One Better Action for Today'}</span>
                    </div>
                  </div>
                  <p className="text-emerald-100 leading-relaxed font-arabic text-xs sm:text-sm">
                    {isUrdu ? selectedOption.practicalActionUrdu : selectedOption.practicalActionEn}
                  </p>
                </div>

                {/* Progress & Personal Growth Connection Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-indigo-950/40 p-3 rounded-xl border border-indigo-500/30">
                  <div className="text-xs font-arabic text-indigo-200">
                    {completedScenarios.includes(activeScenario.id) ? (
                      <span className="text-emerald-300 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{isUrdu ? 'یہ مشق ذاتی ترقی (Personal Growth) میں ریکارڈ ہو چکی ہے!' : 'Scenario recorded in Personal Growth!'}</span>
                      </span>
                    ) : (
                      <span>{isUrdu ? 'اس مشق کو مکمل کر کے اپنے Personal Growth میں پوائنٹس شامل کریں۔' : 'Complete this scenario to earn Personal Growth points.'}</span>
                    )}
                  </div>

                  {!completedScenarios.includes(activeScenario.id) ? (
                    <button
                      id="complete-scenario-practice-btn"
                      onClick={() => handleCompleteScenarioPractice(activeScenario.id)}
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs font-arabic flex items-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-[0.98] transition shrink-0"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>{isUrdu ? 'یہ مشق مکمل کریں (+15 پوائنٹس)' : 'Complete Practice (+15 pts)'}</span>
                    </button>
                  ) : (
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-lg border border-emerald-400/30 font-arabic">
                      ✓ {isUrdu ? 'مکمل شدہ (+15 پوائنٹس)' : 'Completed (+15 pts)'}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevScenario}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs font-arabic flex items-center gap-1 transition"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>{isUrdu ? 'پچھلی مشق' : 'Prev'}</span>
                </button>
                <button
                  onClick={handleNextScenario}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs font-arabic flex items-center gap-1 transition"
                >
                  <span>{isUrdu ? 'اگلی مشق' : 'Next'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const prompt = isUrdu 
                      ? `صورتِ حال: "${activeScenario.titleUrdu}" کے متعلق 5-Step طریقہ کار کے تحت رہنمائی فرمائیں۔`
                      : `Please mentor me on: "${activeScenario.titleEn}" using the 5-step decision framework.`;
                    setActiveScenario(null);
                    onOpenAITeacher(prompt);
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs font-arabic flex items-center justify-center gap-1.5 transition shadow-xs flex-1 sm:flex-initial"
                >
                  <Bot className="w-3.5 h-3.5 text-slate-950" />
                  <span>{isUrdu ? 'استاد سیکھو سے بات کریں' : 'Life Mentor'}</span>
                </button>

                <button
                  onClick={() => setActiveScenario(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 font-semibold text-xs font-arabic transition text-center"
                >
                  {isUrdu ? 'بند کریں' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
