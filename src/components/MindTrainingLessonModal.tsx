import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Brain,
  Clock,
  Target,
  Award,
  HelpCircle,
  CheckSquare,
  Flame,
  RotateCcw,
  Zap,
  TrendingUp,
  MessageSquare,
  Play,
  Pause,
  Compass,
  Heart,
  Share2,
  Check,
  ChevronRight,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  BookMarked,
  Layers
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { AudioReaderButton, VoiceInputButton } from './AudioSpeechControls';
import { stopSpeaking } from '../utils/speech';

interface MindTrainingLessonModalProps {
  language: Language;
  userProfile: UserProfile;
  onClose: () => void;
  onCompleteLesson: (points: number, reflectionData?: any) => void;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
}

const HOOK_OPTIONS = [
  {
    id: 'past',
    icon: '⏳',
    titleUrdu: 'ماضی کی باتوں اور پرانے پچھتاووں میں',
    titleEn: 'Dwelling on past memories and regrets',
    contextUrdu: 'ماضی ایک گزرا ہوا سایہ ہے۔ ماضی کا صحیح استعمال صرف اتنا ہے کہ اس سے سبق سیکھ کر آج کے عمل کو بہتر بنایا جائے۔',
    mentorAdviceUrdu: 'آپ کا ذہن شاید ماضی کی باتوں میں الجھا رہتا ہے۔ یاد رکھیں: جو لمحہ گزر گیا اسے بدلا نہیں جا سکتا، لیکن آج ایک مفید کام شروع کر کے آپ اپنا مستقبل ضرور سنوار سکتے ہیں۔'
  },
  {
    id: 'future',
    icon: '🔮',
    titleUrdu: 'مستقبل کے اندیشوں اور روزگار کے خوف میں',
    titleEn: 'Anxieties about future and livelihood',
    contextUrdu: 'مستقبل کی بے جا فکر انسان کی موجودہ توانائی کو ختم کر دیتی ہے۔ اللہ پر بھروسہ اور آج کی تیاری ہی بہترین حل ہے۔',
    mentorAdviceUrdu: 'مستقبل کے اندیشے اکثر فرضی ہوتے ہیں۔ اپنے ذہن کو حاضر لمحے میں لائیں: جو چیز آپ کے کنٹرول میں ہے (آج کی محنت اور نیت)، صرف اس پر فوکس کریں۔'
  },
  {
    id: 'comparison',
    icon: '👥',
    titleUrdu: 'دوسروں سے موازنے اور احساسِ کمتری میں',
    titleEn: 'Comparing with others on social media',
    contextUrdu: 'ہر انسان کا سفر اور آزمائش مختلف ہے۔ سوشل میڈیا پر لوگ صرف اپنی کامیابی کے اچھے لمحے دکھاتے ہیں، پردے کے پیچھے کی مشقت نہیں۔',
    mentorAdviceUrdu: 'دوسروں کی زندگی سے اپنا موازنہ کرنے سے حسد اور بے چینی جنم لیتی ہے۔ اپنا موازنہ صرف اپنے کل کے دن سے کریں کہ کیا آپ کل سے ایک قدم آگے بڑھے ہیں؟'
  },
  {
    id: 'scrolling',
    icon: '📱',
    titleUrdu: 'بے مقصد سوشل میڈیا اسکرولنگ اور وقت گزاری میں',
    titleEn: 'Aimless doomscrolling and killing time',
    contextUrdu: 'سوشل میڈیا کا الگورتھم ذہن کو ڈوپامین کے چکر میں الجھا دیتا ہے جس کے بعد ذہنی تھکن اور خالی پن محسوس ہوتا ہے۔',
    mentorAdviceUrdu: 'بے مقصد اسکرولنگ ذہن کو بے چین اور تھکا ہوا بنا دیتی ہے۔ جب بھی فون اٹھائیں تو پہلے مقصد طے کریں: "میں یہ فون کیوں کھول رہا ہوں؟"'
  },
  {
    id: 'productive',
    icon: '🌱',
    titleUrdu: 'میں کسی مفید اور تعمیری کام کی طرف چلا جاتا ہوں',
    titleEn: 'I naturally steer toward productive work',
    contextUrdu: 'ماشاءاللہ! یہ ایک اعلیٰ درجے کا ضبطِ نفس ہے جو کامیاب اور پرسکون انسانوں کی علامت ہے۔',
    mentorAdviceUrdu: 'ماشاءاللہ! آپ کے پاس ایک تعمیری عادت موجود ہے۔ اس کو اپنے روزمرہ کے معمول میں مستحکم رکھیں اور اپنے فارغ وقت سے دوسروں کو بھی نفع پہنچائیں۔'
  }
];

const PRACTICAL_ACTIONS = [
  { id: 'skill', icon: '💻', textUrdu: '20 منٹ کوئی نئی skill سیکھنا (مثلاً ڈیجیٹل، کمپیوٹر یا ہنر)' },
  { id: 'book', icon: '📖', textUrdu: '20 منٹ کسی اچھی معلوماتی یا فکری کتاب کا مطالعہ' },
  { id: 'quran', icon: '🕌', textUrdu: '20 منٹ قرآن و دینی مطالعہ اور ترجمہ و فہم' },
  { id: 'exercise', icon: '🏃', textUrdu: '20 منٹ تیز چہل قدمی، ورزش یا اسٹریچنگ' },
  { id: 'family', icon: '🤝', textUrdu: 'گھر کے کسی بزرگ یا بہن بھائی کے کام میں ہاتھ بٹانا' },
  { id: 'plan', icon: '🗓️', textUrdu: 'اپنے اگلے ۲ یا ۳ دن کے ضروری کاموں کی تحریری پلاننگ' },
  { id: 'creative', icon: '🎨', textUrdu: 'ایک تخلیقی کام (لکھنا، ڈیزائن، مسئلہ حل کرنا)' }
];

const RELATED_LESSONS = [
  { id: 'rel-1', titleUrdu: 'موازنے سے خود کو کیسے بچائیں؟', categoryUrdu: 'شخصی ترقی', durationUrdu: '10 منٹ', icon: 'Users' },
  { id: 'rel-2', titleUrdu: 'Overthinking کو کیسے کم کریں؟', categoryUrdu: 'ذہنی سکون', durationUrdu: '12 منٹ', icon: 'Brain' },
  { id: 'rel-3', titleUrdu: 'اپنے دن کا مقصد کیسے طے کریں؟', categoryUrdu: 'نظم و ضبط', durationUrdu: '8 منٹ', icon: 'Target' },
  { id: 'rel-4', titleUrdu: 'موبائل استعمال میں توازن کیسے پیدا کریں؟', categoryUrdu: 'ڈیجیٹل عادات', durationUrdu: '15 منٹ', icon: 'Smartphone' },
  { id: 'rel-5', titleUrdu: 'چھوٹی عادتیں، بڑی تبدیلی', categoryUrdu: 'مستقل مزاجی', durationUrdu: '10 منٹ', icon: 'Sparkles' }
];

export const MindTrainingLessonModal: React.FC<MindTrainingLessonModalProps> = ({
  language,
  userProfile,
  onClose,
  onCompleteLesson,
  onOpenAITeacherWithPrompt
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  // Local Storage Keys
  const STORAGE_KEY_HOOK = 'seekho_mind_lesson_hook';
  const STORAGE_KEY_ACTION = 'seekho_mind_lesson_action';
  const STORAGE_KEY_REF_1 = 'seekho_mind_lesson_ref1';
  const STORAGE_KEY_REF_2 = 'seekho_mind_lesson_ref2';
  const STORAGE_KEY_REF_3 = 'seekho_mind_lesson_ref3';
  const STORAGE_KEY_CHALLENGE = 'seekho_mind_lesson_challenge_done';
  const STORAGE_KEY_COMPLETED = 'seekho_mind_lesson_completed';

  // State
  const [selectedHook, setSelectedHook] = useState<string>(() => {
    try { return localStorage.getItem(STORAGE_KEY_HOOK) || ''; } catch { return ''; }
  });

  const [selectedAction, setSelectedAction] = useState<string>(() => {
    try { return localStorage.getItem(STORAGE_KEY_ACTION) || ''; } catch { return ''; }
  });

  const [reflection1, setReflection1] = useState<string>(() => {
    try { return localStorage.getItem(STORAGE_KEY_REF_1) || ''; } catch { return ''; }
  });
  const [reflection2, setReflection2] = useState<string>(() => {
    try { return localStorage.getItem(STORAGE_KEY_REF_2) || ''; } catch { return ''; }
  });
  const [reflection3, setReflection3] = useState<string>(() => {
    try { return localStorage.getItem(STORAGE_KEY_REF_3) || ''; } catch { return ''; }
  });

  const [isReflectionSaved, setIsReflectionSaved] = useState<boolean>(() => {
    try { return Boolean(localStorage.getItem(STORAGE_KEY_REF_1)); } catch { return false; }
  });

  const [isChallengeCompleted, setIsChallengeCompleted] = useState<boolean>(() => {
    try { return localStorage.getItem(STORAGE_KEY_CHALLENGE) === 'true'; } catch { return false; }
  });

  const [isLessonCompleted, setIsLessonCompleted] = useState<boolean>(() => {
    try { return localStorage.getItem(STORAGE_KEY_COMPLETED) === 'true'; } catch { return false; }
  });

  // 30-Minute Challenge Timer
  const [timerSeconds, setTimerSeconds] = useState<number>(30 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isTimerRunning && timerSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsTimerRunning(false);
            handleCompleteChallenge();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate Progress Percentage
  const calculateProgress = () => {
    let progress = 10;
    if (selectedHook) progress += 20;
    if (selectedAction) progress += 20;
    if (isReflectionSaved) progress += 25;
    if (isChallengeCompleted || isLessonCompleted) progress += 25;
    return Math.min(100, progress);
  };

  const progressPercent = calculateProgress();

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Handlers
  const handleSelectHook = (optionId: string) => {
    setSelectedHook(optionId);
    try { localStorage.setItem(STORAGE_KEY_HOOK, optionId); } catch {}
    showToast(isUrdu ? 'آپ کا انتخاب محفوظ ہو گیا ہے۔' : 'Answer recorded.');
  };

  const handleSelectAction = (actionId: string) => {
    setSelectedAction(actionId);
    try { localStorage.setItem(STORAGE_KEY_ACTION, actionId); } catch {}
    showToast(isUrdu ? 'آج کا بامقصد کام منتخب ہو گیا!' : 'Action chosen for today!');
  };

  const handleSaveReflection = () => {
    if (!reflection1.trim() && !reflection2.trim() && !reflection3.trim()) {
      showToast(isUrdu ? 'براہ کرم کم از کم ایک سوال کا جواب درج کریں۔' : 'Please fill in at least one reflection answer.');
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY_REF_1, reflection1);
      localStorage.setItem(STORAGE_KEY_REF_2, reflection2);
      localStorage.setItem(STORAGE_KEY_REF_3, reflection3);
    } catch {}
    setIsReflectionSaved(true);
    showToast(isUrdu ? '🎉 آپ کے تاثرات محفوظ ہو گئے! (+5 پوائنٹس حاصل کیے)' : 'Reflection saved (+5 pts)!');
  };

  const handleCompleteChallenge = () => {
    setIsChallengeCompleted(true);
    try { localStorage.setItem(STORAGE_KEY_CHALLENGE, 'true'); } catch {}
    showToast(isUrdu ? '🏆 ماشاءاللہ! آج کا چیلنج مکمل ہوا (+10 پوائنٹس)!' : 'Challenge completed (+10 pts)!');
  };

  const handleFinishFullLesson = () => {
    setIsLessonCompleted(true);
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, 'true');
    } catch {}

    const totalPointsAwarded = 30;
    onCompleteLesson(totalPointsAwarded, {
      hook: selectedHook,
      action: selectedAction,
      reflection1,
      reflection2,
      reflection3
    });
    showToast(isUrdu ? '✨ مبارک ہو! سبق کامیابی سے مکمل ہو گیا (+30 پوائنٹس)!' : 'Lesson successfully completed (+30 points)!');
  };

  const selectedHookObj = HOOK_OPTIONS.find(h => h.id === selectedHook);

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
      dir={isUrdu ? 'rtl' : 'ltr'}
      id="mind-training-lesson-modal"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-60 bg-emerald-900 border-2 border-amber-400 text-white font-arabic px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce text-base sm:text-lg font-bold">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-slate-900 via-teal-950 to-slate-950 text-slate-100 rounded-3xl border-2 border-emerald-500/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md border-b border-emerald-500/30 px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-md shrink-0">
              <Compass className="w-6 h-6" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="urdu-badge px-3 py-0.5 rounded-full bg-emerald-900/90 text-emerald-300 border border-emerald-400/40 text-xs font-bold font-arabic">
                  {isUrdu ? 'حقیقی زندگی / ذہنی تربیت' : 'Real Life / Mental Training'}
                </span>
                <span className="urdu-badge px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold font-arabic">
                  {isUrdu ? 'ابتدائی / درمیانہ' : 'Beginner / Intermediate'}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white font-arabic tracking-wide leading-tight mt-1">
                {isUrdu ? 'خالی ذہن سب سے زیادہ شور مچاتا ہے' : 'An Empty Mind Makes the Most Noise'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <AudioReaderButton
              id="mind-lesson-tts-header"
              text={`${isUrdu ? 'خالی ذہن سب سے زیادہ شور مچاتا ہے' : 'An Empty Mind Makes the Most Noise'}. ${isUrdu ? 'جب انسان کے پاس کوئی واضح مقصد یا مفید کام نہیں ہوتا تو اس کا ذہن فضول وسوسوں، ماضی کے پچھتاووں اور مستقبل کے خوف میں الجھ جاتا ہے۔' : 'When a person has no clear goal, the mind gets entangled in doubts and anxiety.'} ${isUrdu ? 'حل یہ ہے کہ اپنے فارغ وقت کو کسی مثبت مہارت یا بامقصد عمل سے بھر دیں۔' : 'The solution is to fill idle time with positive skills and purposeful action.'}`}
              language={language}
              variant="header"
              size="md"
              showLabel={true}
              labelUr="پڑھ کے سنائیں"
              labelEn="Listen"
            />

            <div className="hidden sm:flex items-center gap-2 bg-emerald-950/80 px-3.5 py-1.5 rounded-xl border border-emerald-500/30 text-amber-300 font-bold font-arabic text-sm">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>+30 {isUrdu ? 'پوائنٹس' : 'Points'}</span>
            </div>
            <button
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              id="mind-lesson-close-btn"
              className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
              title={isUrdu ? 'بند کریں' : 'Close'}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-950 h-2 px-0 relative">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-300 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Sub-header progress stats */}
        <div className="bg-emerald-950/40 border-b border-emerald-500/20 px-5 sm:px-8 py-2 flex items-center justify-between text-xs sm:text-sm font-arabic text-emerald-200">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>⏱ {isUrdu ? 'دورانیہ: 10–15 منٹ' : 'Duration: 10–15 mins'}</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-amber-300">
            <span>{isUrdu ? `پیش رفت: ${progressPercent}% مکمل` : `Progress: ${progressPercent}%`}</span>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1">
          
          {/* =========================================================================
              SECTION A: HOOK (تعارفی سوال)
          ========================================================================= */}
          <section className="bg-slate-900/90 border-2 border-emerald-500/30 rounded-3xl p-5 sm:p-7 space-y-5 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center font-bold font-arabic text-lg shrink-0">
                ۱
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 font-arabic block">
                  {isUrdu ? 'حصہ اول: تعارفی سوچ' : 'Part 1: The Hook'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white font-arabic">
                  {isUrdu ? 'جب آپ اکیلے اور فارغ ہوتے ہیں تو آپ کا ذہن کہاں چلا جاتا ہے؟' : 'When you are alone and idle, where does your mind wander?'}
                </h2>
              </div>
            </div>

            <p className="text-emerald-100/90 font-arabic text-base sm:text-lg leading-[1.8]">
              {isUrdu ? 'کسی ایک آپشن پر کلک کریں جو آپ کی معمول کی کیفیت سے قریب ترین ہو:' : 'Select the option closest to your typical default mindset:'}
            </p>

            <div className="grid grid-cols-1 gap-3 pt-1">
              {HOOK_OPTIONS.map((opt, idx) => {
                const isSelected = selectedHook === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectHook(opt.id)}
                    className={`text-right p-4 sm:p-4.5 rounded-2xl border-2 transition-all flex items-center justify-between gap-4 font-arabic ${
                      isSelected
                        ? 'bg-amber-400/15 border-amber-400 text-amber-200 shadow-md ring-2 ring-amber-400/40'
                        : 'bg-slate-950/60 hover:bg-slate-800/80 border-slate-700/60 text-slate-200 hover:border-emerald-500/40'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-2xl shrink-0">{opt.icon}</span>
                      <div>
                        <span className="text-base sm:text-lg font-bold block leading-snug">
                          {idx + 1}. {opt.titleUrdu}
                        </span>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-500'
                    }`}>
                      {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedHookObj && (
              <div className="mt-4 p-4.5 rounded-2xl bg-emerald-950/80 border border-emerald-400/40 space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-2 text-amber-300 font-bold font-arabic text-sm sm:text-base">
                  <Lightbulb className="w-5 h-5 shrink-0" />
                  <span>{isUrdu ? 'نکتۂ نظر:' : 'Perspective:'}</span>
                </div>
                <p className="text-emerald-50 text-base sm:text-lg leading-[1.8] font-arabic">
                  {selectedHookObj.contextUrdu}
                </p>
              </div>
            )}
          </section>

          {/* =========================================================================
              SECTION B: UNDERSTAND (سمجھیں)
          ========================================================================= */}
          <section className="bg-slate-900/90 border-2 border-emerald-500/30 rounded-3xl p-5 sm:p-7 space-y-6 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center font-bold font-arabic text-lg shrink-0">
                ۲
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 font-arabic block">
                  {isUrdu ? 'حصہ دوم: حقیقت کو سمجھیں' : 'Part 2: Understand'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white font-arabic">
                  {isUrdu ? 'ذہن کو خالی جگہ پسند نہیں ہوتی' : 'The Mind Abhors a Vacuum'}
                </h2>
              </div>
            </div>

            <div className="text-emerald-50 font-arabic text-lg sm:text-xl leading-[1.9] space-y-4">
              <p>
                {isUrdu 
                  ? 'ذہن کو خالی جگہ پسند نہیں۔ اگر اسے کوئی بامقصد کام نہ دیا جائے تو وہ خاموشی کو بےکار خیالات، اندیشوں، خوف، موازنے اور فرضی مسائل سے بھر دیتا ہے۔'
                  : 'The mind hates emptiness. If not given a meaningful purpose, it naturally populates silence with useless anxieties, comparisons, and imagined burdens.'}
              </p>
            </div>

            {/* Visual Callout Card: Busy ≠ Purposeful */}
            <div className="bg-gradient-to-r from-teal-950 via-emerald-900 to-slate-900 p-6 rounded-2xl border-2 border-amber-400/50 text-center space-y-2 shadow-xl">
              <div className="inline-block px-4 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-sm tracking-wider uppercase mb-1">
                Busy ≠ Purposeful
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-300 font-arabic">
                {isUrdu ? 'مصروفیت اور مقصد میں فرق ہے' : 'Being Busy is Not Being Purposeful'}
              </h3>
              <p className="text-emerald-100 text-base sm:text-lg font-arabic max-w-xl mx-auto leading-[1.8]">
                {isUrdu 
                  ? 'ہر مصروف ذہن ضروری نہیں کہ بامقصد بھی ہو۔ کبھی کبھی ہمیں مزید تفریح یا بےکار مصروفیات کی نہیں، بلکہ ایک واضح سمت کی ضرورت ہوتی ہے۔'
                  : 'Every occupied mind is not purposeful. Often we need not more superficial entertainment, but a clear, grounded direction.'}
              </p>
            </div>

            {/* 6 Things to give your mind */}
            <div className="space-y-3 pt-2">
              <h4 className="text-lg font-bold text-amber-300 font-arabic flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>{isUrdu ? 'اپنے ذہن کو وہ چیزیں دیں جو اسے سنواریں:' : 'Feed your mind what truly ennobles it:'}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { icon: '🎯', title: 'کوئی بامعنی مقصد', desc: 'زندگی میں آگے بڑھنے کا واضح ہدف' },
                  { icon: '🛠️', title: 'مفید اور تعمیری کام', desc: 'ہاتھ سے کیا جانے والا نفع بخش عمل' },
                  { icon: '📚', title: 'نفع بخش علم اور ہنر', desc: 'روزانہ کچھ نیا سیکھنا' },
                  { icon: '🤲', title: 'عبادت اور ذکر', desc: 'روح اور دل کا سچا سکون' },
                  { icon: '💡', title: 'تخلیقی سوچ', desc: 'نئے مسائل کے آسان حل سوچنا' },
                  { icon: '🤝', title: 'دوسروں کی خدمت', desc: 'معاشرے اور خاندان کے کام آنا' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-500/30 flex items-start gap-3">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div className="font-arabic">
                      <span className="font-bold text-white text-base block">{item.title}</span>
                      <span className="text-emerald-300/80 text-xs sm:text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Footer */}
            <div className="p-4.5 rounded-2xl bg-white/5 border border-white/10 text-center font-arabic text-amber-200 text-base sm:text-lg font-medium leading-[1.8] italic">
              {isUrdu 
                ? '«جب ذہن کے پاس سمت نہ ہو تو وہ ہر طرف بھٹکتا ہے، لیکن جب اسے مقصد مل جائے تو خاموشی بھی سکون بن جاتی ہے۔»'
                : '"When the mind has no direction it wanders everywhere; but when given purpose, even silence becomes serenity."'}
            </div>
          </section>

          {/* =========================================================================
              SECTION C: REAL LIFE EXAMPLE (علی کی کہانی)
          ========================================================================= */}
          <section className="bg-slate-900/90 border-2 border-emerald-500/30 rounded-3xl p-5 sm:p-7 space-y-5 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center font-bold font-arabic text-lg shrink-0">
                ۳
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 font-arabic block">
                  {isUrdu ? 'حصہ سوم: روزمرہ زندگی کی مثال' : 'Part 3: Real Life Example'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white font-arabic">
                  {isUrdu ? 'علی کے شام کے ۳ گھنٹے: دو راستے' : "Ali's 3 Idle Evening Hours: Two Paths"}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 font-arabic">
              {/* Path 1: Doomscrolling */}
              <div className="p-5 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-3">
                <div className="flex items-center gap-2 text-rose-300 font-bold text-base">
                  <span className="text-xl">❌</span>
                  <span>{isUrdu ? 'پہلا راستہ (بے مقصد بھٹکنا):' : 'Path 1 (Aimless Wandering):'}</span>
                </div>
                <p className="text-rose-100/90 text-sm sm:text-base leading-[1.8]">
                  {isUrdu 
                    ? 'علی کے پاس شام کو ۳ گھنٹے فارغ ہوتے ہیں۔ وہ مسلسل موبائل اسکرول کرتا ہے، دوسروں کی چکا چوند زندگی سے اپنا موازنہ کرتا ہے اور پھر اسے لگتا ہے کہ اس کی اپنی زندگی آگے نہیں بڑھ رہی۔ رات کو تھکن اور مایوسی کے ساتھ سو جاتا ہے۔'
                    : 'Ali spends 3 free evening hours scrolling social media, comparing his reality to highlight reels, ending in mental fatigue and stagnation.'}
                </p>
              </div>

              {/* Path 2: Purposeful */}
              <div className="p-5 rounded-2xl bg-emerald-950/70 border border-emerald-400/50 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-base">
                  <span className="text-xl">✅</span>
                  <span>{isUrdu ? 'دوسرا راستہ (بامقصد سمت):' : 'Path 2 (Purposeful Direction):'}</span>
                </div>
                <p className="text-emerald-100 text-sm sm:text-base leading-[1.8]">
                  {isUrdu 
                    ? 'اگر وہ اسی وقت ایک چھوٹا سا مقصد طے کرے: ۳۰ منٹ انگریزی گفتگو، ۳۰ منٹ کوئی مفید ڈیجیٹل اسکل، ۲۰ منٹ کتاب اور کچھ وقت گھر والوں کی خدمت — تو چند ہفتوں میں وہی وقت اس کا مستقبل بدلنا شروع کر دیتا ہے۔'
                    : 'If he decides a focused routine: 30m English conversation, 30m digital skill, 20m reading, and helping family—that exact time builds his future.'}
                </p>
              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION D: PRACTICAL ACTION (آج اپنے ذہن کو ایک سمت دیں)
          ========================================================================= */}
          <section className="bg-slate-900/90 border-2 border-emerald-500/30 rounded-3xl p-5 sm:p-7 space-y-5 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center font-bold font-arabic text-lg shrink-0">
                ۴
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 font-arabic block">
                  {isUrdu ? 'حصہ چہارم: عملی قدم' : 'Part 4: Practical Action'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white font-arabic">
                  {isUrdu ? 'آج اپنے ذہن کو ایک سمت دیں' : 'Give Your Mind a Concrete Direction Today'}
                </h2>
              </div>
            </div>

            <p className="text-emerald-100/90 font-arabic text-base sm:text-lg leading-[1.8]">
              {isUrdu ? 'آج کے دن کے لیے کوئی ایک بامقصد کام منتخب کریں جسے آپ لازماً مکمل کریں گے:' : 'Select one purposeful action to commit to today:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {PRACTICAL_ACTIONS.map(action => {
                const isChosen = selectedAction === action.id;
                return (
                  <button
                    key={action.id}
                    onClick={() => handleSelectAction(action.id)}
                    className={`text-right p-4 rounded-2xl border-2 transition-all flex items-center gap-3.5 font-arabic ${
                      isChosen
                        ? 'bg-amber-400/20 border-amber-400 text-amber-200 shadow-md ring-2 ring-amber-400/40'
                        : 'bg-slate-950/60 hover:bg-slate-800/80 border-slate-700/60 text-slate-200 hover:border-emerald-500/40'
                    }`}
                  >
                    <span className="text-2xl shrink-0">{action.icon}</span>
                    <span className="text-base sm:text-lg font-bold flex-1">{action.textUrdu}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isChosen ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-500'
                    }`}>
                      {isChosen && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedAction && (
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-200 text-base font-arabic font-bold">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{isUrdu ? 'آپ کا آج کا بامقصد ہدف طے ہو گیا ہے!' : 'Your goal for today is locked in!'}</span>
              </div>
            )}
          </section>

          {/* =========================================================================
              SECTION E: 3-MINUTE REFLECTION (۳ منٹ کا جائزہ)
          ========================================================================= */}
          <section className="bg-slate-900/90 border-2 border-emerald-500/30 rounded-3xl p-5 sm:p-7 space-y-5 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center font-bold font-arabic text-lg shrink-0">
                ۵
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 font-arabic block">
                  {isUrdu ? 'حصہ پنجم: ۳ منٹ کا غور و فکر' : 'Part 5: 3-Minute Reflection'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white font-arabic">
                  {isUrdu ? 'اپنے خیالات کا جائزہ لیں' : 'Audit Your Immediate Thoughts'}
                </h2>
              </div>
            </div>

            <div className="space-y-4 pt-1 font-arabic">
              {/* Question 1 */}
              <div className="space-y-1.5">
                <label className="block text-base sm:text-lg font-bold text-amber-200">
                  {isUrdu ? '۱. آج میرے ذہن میں سب سے زیادہ کون سا خیال چل رہا ہے؟' : '1. What thought is dominating my mind today?'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={reflection1}
                    onChange={e => setReflection1(e.target.value)}
                    placeholder={isUrdu ? 'مثلاً: کل کا ٹیسٹ، کسی کی کہی بات... (یہاں لکھیں یا مائیک سے بولیں)' : 'e.g. An upcoming interview... (type or speak via mic)'}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-2xl px-4 pe-12 py-3 text-white text-base sm:text-lg font-arabic placeholder:text-slate-500 outline-hidden transition"
                  />
                  <div className="absolute top-2 end-2">
                    <VoiceInputButton
                      language={language}
                      size="sm"
                      tooltipUr="بول کر خیال درج کریں"
                      tooltipEn="Speak your thought"
                      onTranscript={(text) => {
                        setReflection1(prev => (prev ? `${prev} ${text}` : text));
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-1.5">
                <label className="block text-base sm:text-lg font-bold text-amber-200">
                  {isUrdu ? '۲. کیا یہ خیال میرے کسی کام آ رہا ہے یا محض وقت کا ضیاع ہے؟' : '2. Is this thought serving me or just draining mental energy?'}
                </label>
                <div className="flex gap-2 flex-wrap pb-1">
                  {['ہاں، کوئی ضروری کام ہے', 'نہیں، بے فائدہ بوجھ ہے', 'کچھ حد تک'].map(choice => (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => setReflection2(choice)}
                      className={`px-3.5 py-1.5 rounded-xl text-sm font-bold border transition ${
                        reflection2 === choice
                          ? 'bg-amber-400 text-slate-950 border-amber-400'
                          : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={reflection2}
                    onChange={e => setReflection2(e.target.value)}
                    placeholder={isUrdu ? 'مختصر وضاحت درج کریں یا مائیک سے بولیں...' : 'Brief note on utility...'}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-2xl px-4 pe-12 py-3 text-white text-base sm:text-lg font-arabic placeholder:text-slate-500 outline-hidden transition"
                  />
                  <div className="absolute top-2 end-2">
                    <VoiceInputButton
                      language={language}
                      size="sm"
                      tooltipUr="بول کر وضاحت درج کریں"
                      tooltipEn="Speak explanation"
                      onTranscript={(text) => {
                        setReflection2(prev => (prev ? `${prev} ${text}` : text));
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="space-y-1.5">
                <label className="block text-base sm:text-lg font-bold text-amber-200">
                  {isUrdu ? '۳. میں اپنی توجہ کس مفید کام کی طرف منتقل کر سکتا ہوں؟' : '3. What useful task can I channel my focus into right now?'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={reflection3}
                    onChange={e => setReflection3(e.target.value)}
                    placeholder={isUrdu ? 'مثلاً: اپنی پڑھائی، نیا ہنر، قرآن فہم... (یہاں لکھیں یا مائیک سے بولیں)' : 'e.g. My studies, digital skill... (type or speak via mic)'}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-2xl px-4 pe-12 py-3 text-white text-base sm:text-lg font-arabic placeholder:text-slate-500 outline-hidden transition"
                  />
                  <div className="absolute top-2 end-2">
                    <VoiceInputButton
                      language={language}
                      size="sm"
                      tooltipUr="بول کر مفید کام درج کریں"
                      tooltipEn="Speak task"
                      onTranscript={(text) => {
                        setReflection3(prev => (prev ? `${prev} ${text}` : text));
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Save Reflection Button */}
              <div className="pt-2">
                <button
                  onClick={handleSaveReflection}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-base sm:text-lg shadow-lg flex items-center justify-center gap-2.5 transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-300" />
                  <span>{isUrdu ? 'سوچ و تاثر محفوظ کریں (+5 پوائنٹس)' : 'Save Reflection (+5 pts)'}</span>
                </button>
              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION F: DAILY CHALLENGE (آج کا چیلنج)
          ========================================================================= */}
          <section className="bg-gradient-to-br from-amber-950/40 via-slate-900 to-teal-950 border-2 border-amber-400/40 rounded-3xl p-5 sm:p-7 space-y-5 shadow-xl">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black font-arabic text-lg shrink-0">
                  ۶
                </span>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-400 font-arabic block">
                    {isUrdu ? 'آج کا چیلنج' : 'Daily Challenge'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white font-arabic">
                    {isUrdu ? '30 منٹ بلا مقصد اسکرولنگ کے بجائے ایک بامقصد کام' : '30-Minute Screen-Detox Focus Challenge'}
                  </h2>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-bold font-arabic">
                +10 {isUrdu ? 'پوائنٹس' : 'Points'}
              </span>
            </div>

            <p className="text-emerald-100 font-arabic text-base sm:text-lg leading-[1.8]">
              {isUrdu 
                ? 'چیلنج: آج ۳۰ منٹ کے لیے سوشل میڈیا اور ریلز اسکرولنگ کو مکمل بند رکھیں اور یہ وقت اپنے منتخب کردہ بامقصد کام کو دیں۔'
                : 'Challenge: Put social media on pause for 30 minutes and execute your chosen purposeful task uninterrupted.'}
            </p>

            {/* Built-in Focus Timer & Completion Button */}
            <div className="bg-slate-950/80 rounded-2xl border border-amber-400/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 font-arabic">
                <Clock className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 font-bold block">{isUrdu ? 'فوکس ٹائمر' : 'Focus Timer'}</span>
                  <span className="text-3xl font-black text-amber-300 font-mono tracking-wider">
                    {formatTimer(timerSeconds)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`px-4 py-2.5 rounded-xl font-bold font-arabic text-sm flex items-center gap-2 transition ${
                    isTimerRunning
                      ? 'bg-rose-700 hover:bg-rose-600 text-white'
                      : 'bg-emerald-700 hover:bg-emerald-600 text-white'
                  }`}
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isTimerRunning ? (isUrdu ? 'روکیں' : 'Pause') : (isUrdu ? 'ٹائمر شروع کریں' : 'Start Timer')}</span>
                </button>

                <button
                  onClick={handleCompleteChallenge}
                  disabled={isChallengeCompleted}
                  className={`px-5 py-2.5 rounded-xl font-bold font-arabic text-sm sm:text-base flex items-center gap-2 transition ${
                    isChallengeCompleted
                      ? 'bg-emerald-850 text-emerald-300 border border-emerald-500/50 cursor-default'
                      : 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-black shadow-md'
                  }`}
                >
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>
                    {isChallengeCompleted
                      ? (isUrdu ? 'چیلنج مکمل ہوا ✓' : 'Challenge Completed ✓')
                      : (isUrdu ? 'میں نے آج کا Challenge مکمل کیا' : 'I Finished the Challenge')}
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION G: PERSONALIZED MENTOR GUIDANCE
          ========================================================================= */}
          {selectedHookObj && (
            <section className="bg-emerald-950/80 border-2 border-emerald-400/50 rounded-3xl p-5 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black shrink-0">
                  <Heart className="w-5 h-5 fill-slate-950" />
                </span>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-300 font-arabic block">
                    {isUrdu ? 'آپ کے لیے خصوصی رہنمائی' : 'Personalized Mentor Guidance'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white font-arabic">
                    {isUrdu ? 'سیکھو مینٹور کا مشورہ:' : 'Seekho Mentor Note:'}
                  </h3>
                </div>
              </div>

              <div className="p-4.5 rounded-2xl bg-slate-950/70 border border-emerald-500/30 text-emerald-100 font-arabic text-base sm:text-lg leading-[1.9]">
                <p>{selectedHookObj.mentorAdviceUrdu}</p>
              </div>

              {onOpenAITeacherWithPrompt && (
                <div className="pt-1 flex justify-end">
                  <button
                    onClick={() => onOpenAITeacherWithPrompt(
                      `السلام علیکم! میں نے "خالی ذہن سب سے زیادہ شور مچاتا ہے" کا سبق پڑھا ہے اور میرا ذہن "${selectedHookObj.titleUrdu}" کی طرف بھٹکتا ہے۔ مجھے اپنے روزمرہ شیڈول کو بامقصد بنانے کے لیے عملی رہنمائی دیں۔`
                    )}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 text-sm font-bold font-arabic flex items-center gap-2 transition"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    <span>{isUrdu ? 'استادِ محترم (AI) سے مزید رہنمائی لیں' : 'Ask AI Mentor'}</span>
                  </button>
                </div>
              )}
            </section>
          )}

          {/* =========================================================================
              SECTION H: RELATED LESSONS (متعلقہ اسباق)
          ========================================================================= */}
          <section className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-black text-white font-arabic flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <span>{isUrdu ? 'اس سبق سے متعلقہ اگلے اسباق:' : 'Related Next Lessons:'}</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-arabic">
              {RELATED_LESSONS.map((rel, i) => (
                <div 
                  key={rel.id} 
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 hover:border-emerald-500/40 transition space-y-2 group"
                >
                  <div className="flex items-center justify-between text-xs text-emerald-300">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30">
                      {rel.categoryUrdu}
                    </span>
                    <span>⏱ {rel.durationUrdu}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition leading-snug">
                    {rel.titleUrdu}
                  </h4>
                  <div className="pt-1 flex items-center justify-between text-xs text-slate-400">
                    <span>{isUrdu ? 'جلد دستیاب ہوگا' : 'Coming soon'}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition" />
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Sticky Footer CTA */}
        <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-md border-t border-emerald-500/30 px-5 sm:px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 font-arabic text-sm text-emerald-200">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              {isLessonCompleted 
                ? (isUrdu ? '🎉 سبق مکمل کیا جا چکا ہے!' : 'Lesson completed!') 
                : (isUrdu ? 'سبق کے تمام مراحل مکمل کر کے پوائنٹس حاصل کریں۔' : 'Complete all steps to claim points.')}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-300 font-bold font-arabic text-base transition text-center"
            >
              {isUrdu ? 'واپس جائیں' : 'Back'}
            </button>

            <button
              onClick={handleFinishFullLesson}
              id="mind-lesson-finish-btn"
              className="flex-1 sm:flex-none px-8 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base sm:text-lg font-arabic shadow-xl hover:shadow-2xl active:scale-95 transition flex items-center justify-center gap-2.5"
            >
              <CheckCircle2 className="w-5 h-5 fill-slate-950 stroke-amber-400" />
              <span>{isUrdu ? 'سبق مکمل کریں (+30 پوائنٹس)' : 'Finish Lesson (+30 pts)'}</span>
              <ArrowIcon className="w-5 h-5 shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
