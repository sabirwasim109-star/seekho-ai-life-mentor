import React, { useState } from 'react';
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
  MessageSquare
} from 'lucide-react';
import { Language, UserProfile, PracticalLifeLesson } from '../types';
import { LIFE_SKILLS_CORE_PRINCIPLE, LIFE_SKILL_CATEGORIES } from '../data/practicalLifeSkillsData';

interface PracticalLifeSkillModalProps {
  lesson: PracticalLifeLesson;
  language: Language;
  userProfile: UserProfile;
  onClose: () => void;
  onCompleteLesson: (lessonId: string, points: number, reflectionText?: string) => void;
  onOpenAITeacher?: (prompt?: string) => void;
}

type StepType = 'learn' | 'practice' | 'apply' | 'reflect' | 'improve';

export const PracticalLifeSkillModal: React.FC<PracticalLifeSkillModalProps> = ({
  lesson,
  language,
  userProfile,
  onClose,
  onCompleteLesson,
  onOpenAITeacher
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;
  const BackArrowIcon = isUrdu ? ArrowRight : ArrowLeft;

  const [currentStep, setCurrentStep] = useState<StepType>('learn');
  const [selectedPracticeOption, setSelectedPracticeOption] = useState<number | null>(null);
  const [practiceAnswered, setPracticeAnswered] = useState<boolean>(false);
  const [checklistCompleted, setChecklistCompleted] = useState<Record<number, boolean>>({});
  const [selectedReflectOption, setSelectedReflectOption] = useState<string | null>(null);
  const [reflectionCustomText, setReflectionCustomText] = useState<string>('');
  const [isCompletedState, setIsCompletedState] = useState<boolean>(
    userProfile.completedLifeSkillLessonIds?.includes(lesson.id) || false
  );

  const categoryMeta = LIFE_SKILL_CATEGORIES.find(c => c.id === lesson.categoryId);

  const steps: { id: StepType; labelUrdu: string; labelEn: string; icon: any; num: number }[] = [
    { id: 'learn', labelUrdu: '۱. سیکھیں', labelEn: '1. Learn', icon: BookOpen, num: 1 },
    { id: 'practice', labelUrdu: '۲. مشق کریں', labelEn: '2. Practice', icon: Brain, num: 2 },
    { id: 'apply', labelUrdu: '۳. عملی قدم', labelEn: '3. Apply', icon: Target, num: 3 },
    { id: 'reflect', labelUrdu: '۴. سوچیں', labelEn: '4. Reflect', icon: MessageSquare, num: 4 },
    { id: 'improve', labelUrdu: '۵. بہتری', labelEn: '5. Improve', icon: TrendingUp, num: 5 }
  ];

  const handleToggleChecklist = (index: number) => {
    setChecklistCompleted(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleFinishLesson = () => {
    onCompleteLesson(
      lesson.id, 
      lesson.points, 
      selectedReflectOption ? `${selectedReflectOption}${reflectionCustomText ? ` - ${reflectionCustomText}` : ''}` : reflectionCustomText
    );
    setIsCompletedState(true);
    setCurrentStep('improve');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div 
        id="life-skill-lesson-modal"
        className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto flex flex-col max-h-[92vh]"
      >
        {/* Top Header */}
        <div className={`p-4 sm:p-6 bg-gradient-to-r ${categoryMeta?.accentColor || 'from-emerald-700 to-teal-900'} text-white relative flex flex-col gap-3 shrink-0`}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-xl bg-white/20 backdrop-blur-md text-xs font-black font-arabic flex items-center gap-1.5 border border-white/20">
                <span>{categoryMeta?.emoji || '💡'}</span>
                <span>{isUrdu ? categoryMeta?.titleUrdu : categoryMeta?.titleEn}</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black font-arabic">
                +{lesson.points} {isUrdu ? 'پوائنٹس' : 'pts'}
              </span>
              <span className="text-xs text-white/80 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{lesson.estimatedMinutes} {isUrdu ? 'منٹ' : 'mins'}</span>
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black font-arabic tracking-tight text-white leading-snug">
              {isUrdu ? lesson.titleUrdu : lesson.titleEn}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-arabic mt-1">
              {isUrdu ? lesson.subtitleUrdu : lesson.subtitleEn}
            </p>
          </div>

          {/* 5-Step Flow Tabs */}
          <div className="grid grid-cols-5 gap-1 pt-2 border-t border-white/15">
            {steps.map(s => {
              const Icon = s.icon;
              const isActive = currentStep === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentStep(s.id)}
                  className={`py-1.5 px-1 rounded-xl text-[11px] sm:text-xs font-bold font-arabic transition flex items-center justify-center gap-1 ${
                    isActive 
                      ? 'bg-white text-slate-950 shadow-md font-black' 
                      : 'bg-white/10 text-white/90 hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-3 h-3 hidden xs:inline-block" />
                  <span className="truncate">{isUrdu ? s.labelUrdu : s.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* ========================================================================= */}
          {/* STEP 1: LEARN (سیکھیں) */}
          {/* ========================================================================= */}
          {currentStep === 'learn' && (
            <div className="space-y-5 animate-fade-in">
              {/* Key Idea Quote */}
              <div className="bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700/50 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider font-arabic">
                    {isUrdu ? '💡 سنہری بنیادی خیال (Core Insight)' : '💡 Core Insight'}
                  </span>
                  <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-arabic leading-relaxed">
                    "{isUrdu ? lesson.keyIdeaUrdu : lesson.keyIdeaEn}"
                  </p>
                  {lesson.sourceOrBookUrdu && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-arabic italic block pt-1">
                      📚 {isUrdu ? lesson.sourceOrBookUrdu : lesson.sourceOrBookEn}
                    </span>
                  )}
                </div>
              </div>

              {/* Main Explanatory Content */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <h3 className="text-base font-black text-slate-900 dark:text-white font-arabic flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{isUrdu ? 'آسان اور عملی فہم:' : 'Practical Understanding:'}</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-arabic leading-relaxed whitespace-pre-line">
                  {isUrdu ? lesson.learnContentUrdu : lesson.learnContentEn}
                </div>
              </div>

              {/* Real Life Example Box */}
              <div className="bg-teal-50 dark:bg-teal-950/40 rounded-2xl p-4 sm:p-5 border border-teal-200 dark:border-teal-800/60 space-y-2">
                <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-bold text-xs font-arabic">
                  <Zap className="w-4 h-4 text-teal-600" />
                  <span>{isUrdu ? 'حقیقی زندگی کی مثال:' : 'Real-World Relatable Story:'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-arabic leading-relaxed">
                  {isUrdu ? lesson.realLifeExampleUrdu : lesson.realLifeExampleEn}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 font-arabic uppercase tracking-wider">
                  {isUrdu ? '📌 اہم ترین نکات:' : '📌 Key Takeaways:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(isUrdu ? lesson.keyTakeawaysUrdu : lesson.keyTakeawaysEn).map((point, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2 text-xs font-arabic text-slate-800 dark:text-slate-200 shadow-2xs">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: PRACTICE (مشق کریں) */}
          {/* ========================================================================= */}
          {currentStep === 'practice' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-purple-50 dark:bg-purple-950/40 rounded-2xl p-5 border border-purple-200 dark:border-purple-800/60 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shadow-xs">
                    <Brain className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white font-arabic">
                      {isUrdu ? 'عملی صورتحال کا تجزیہ (Scenario Practice)' : 'Scenario Exercise'}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-arabic">
                      {isUrdu ? 'سوچیں کہ اس موقع پر سب سے دانشمندانہ قدم کیا ہوگا:' : 'Consider the smartest move in this practical scenario:'}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-purple-100 dark:border-purple-900 text-sm font-bold text-slate-900 dark:text-white font-arabic leading-relaxed">
                  {isUrdu ? lesson.practiceScenarioUrdu : lesson.practiceScenarioEn}
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {(isUrdu ? lesson.practiceOptionsUrdu : lesson.practiceOptionsEn).map((opt, idx) => {
                  const isSelected = selectedPracticeOption === idx;
                  const isCorrect = idx === lesson.practiceCorrectIndex;
                  const showResult = practiceAnswered;

                  let cardStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-400 text-slate-800 dark:text-slate-200';
                  if (showResult) {
                    if (isCorrect) {
                      cardStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-bold';
                    } else if (isSelected && !isCorrect) {
                      cardStyle = 'bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-400 text-rose-950 dark:text-rose-100';
                    } else {
                      cardStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                    }
                  } else if (isSelected) {
                    cardStyle = 'bg-purple-50 dark:bg-purple-950/60 border-2 border-purple-500 text-purple-950 dark:text-purple-100 font-bold';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedPracticeOption(idx);
                        setPracticeAnswered(true);
                      }}
                      className={`w-full p-3.5 sm:p-4 rounded-2xl border text-xs sm:text-sm font-arabic text-start transition flex items-center justify-between gap-3 shadow-2xs ${cardStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {showResult && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {practiceAnswered && (
                <div className={`p-4 rounded-2xl border font-arabic text-xs sm:text-sm animate-fade-in ${
                  selectedPracticeOption === lesson.practiceCorrectIndex
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-200'
                    : 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-700 text-amber-950 dark:text-amber-200'
                }`}>
                  <p className="font-bold mb-1">
                    {selectedPracticeOption === lesson.practiceCorrectIndex 
                      ? (isUrdu ? '🎉 زبردست جواب!' : '🎉 Excellent analysis!')
                      : (isUrdu ? '💡 غور طلب نقطہ:' : '💡 Key Insight:')}
                  </p>
                  <p className="leading-relaxed">
                    {isUrdu ? lesson.practiceFeedbackUrdu : lesson.practiceFeedbackEn}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: APPLY (عملی قدم) */}
          {/* ========================================================================= */}
          {currentStep === 'apply' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl p-5 border-2 border-emerald-300 dark:border-emerald-700/60 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
                    <Target className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white font-arabic">
                      {isUrdu ? 'آج کا ۲۴ گھنٹے کا عملی قدم' : '24-Hour Concrete Action'}
                    </h3>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300 font-arabic">
                      {LIFE_SKILLS_CORE_PRINCIPLE[language]}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-800 text-sm font-bold text-slate-900 dark:text-white font-arabic leading-relaxed">
                  {isUrdu ? lesson.applyActionUrdu : lesson.applyActionEn}
                </div>
              </div>

              {/* Practical Checklist */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 font-arabic uppercase tracking-wider">
                  {isUrdu ? 'عمل کی سادہ چیک لسٹ:' : 'Action Checklist:'}
                </h4>
                {(isUrdu ? lesson.applyChecklistUrdu : lesson.applyChecklistEn).map((item, idx) => {
                  const isChecked = !!checklistCompleted[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => handleToggleChecklist(idx)}
                      className={`w-full p-3.5 rounded-2xl border text-start transition flex items-center gap-3 font-arabic text-xs sm:text-sm ${
                        isChecked 
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 text-emerald-950 dark:text-emerald-200 font-bold line-through' 
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-400'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center border transition shrink-0 ${
                        isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: REFLECT (سوچیں) */}
          {/* ========================================================================= */}
          {currentStep === 'reflect' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-blue-50 dark:bg-blue-950/40 rounded-2xl p-5 border border-blue-200 dark:border-blue-800/60 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white font-arabic">
                      {isUrdu ? 'خود احتسابی و جائزہ (Self-Reflection)' : 'Self-Reflection'}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-arabic">
                      {isUrdu ? 'اپنی موجودہ حالت اور ترجیحات پر ایک لمحہ غور کریں:' : 'Take a moment to reflect on your current habits and priorities:'}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-blue-100 dark:border-blue-900 text-sm font-bold text-slate-900 dark:text-white font-arabic leading-relaxed">
                  {isUrdu ? lesson.reflectPromptUrdu : lesson.reflectPromptEn}
                </div>
              </div>

              {/* 1-Click Reflection Options */}
              <div className="space-y-2">
                {(isUrdu ? lesson.reflectOptionsUrdu : lesson.reflectOptionsEn).map((opt, idx) => {
                  const isSelected = selectedReflectOption === opt;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedReflectOption(opt)}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-arabic text-start transition flex items-center justify-between gap-3 ${
                        isSelected 
                          ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-sm' 
                          : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-white shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Optional Custom Note */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-300 font-arabic">
                  {isUrdu ? 'کوئی ذاتی نوٹ یا عزم لکھنا چاہیں (اختیاری):' : 'Personal note or commitment (optional):'}
                </label>
                <input
                  type="text"
                  value={reflectionCustomText}
                  onChange={(e) => setReflectionCustomText(e.target.value)}
                  placeholder={isUrdu ? 'مثلاً: میں کل سے صبح جلدی اٹھ کر اس اصول پر عمل کروں گا...' : 'e.g., I will start applying this rule from tomorrow morning...'}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm font-arabic focus:ring-2 focus:ring-emerald-500 outline-hidden text-slate-900 dark:text-white"
                />
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 5: IMPROVE (بہتری لائیں) */}
          {/* ========================================================================= */}
          {currentStep === 'improve' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-6 border-2 border-emerald-500/40 text-center space-y-4 shadow-xl">
                <div className="w-14 h-14 rounded-3xl bg-emerald-400 text-slate-950 flex items-center justify-center font-black mx-auto shadow-lg">
                  <Award className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-black text-amber-300 uppercase tracking-widest font-arabic">
                    {isUrdu ? '🎉 ماشاءاللہ! عملی سبق مکمل' : '🎉 Masha’Allah! Lesson Completed'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-arabic">
                    {isUrdu ? lesson.titleUrdu : lesson.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 font-arabic max-w-md mx-auto">
                    {isUrdu 
                      ? `آپ کے پروفائل میں +${lesson.points} پوائنٹس شامل کر دیے گئے ہیں اور یہ مہارت آپ کے پورٹ فولیو کا حصہ بن چکی ہے۔` 
                      : `+${lesson.points} points awarded to your profile and added to your lifelong competence.`}
                  </p>
                </div>

                {/* Pro Improvement Tip */}
                <div className="bg-slate-950/60 rounded-2xl p-4 border border-emerald-500/30 text-start space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs font-arabic">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isUrdu ? 'مستقل بہتری کا مشورہ (Continuous Growth Tip):' : 'Continuous Improvement Tip:'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-arabic leading-relaxed">
                    {isUrdu ? lesson.improveTipUrdu : lesson.improveTipEn}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          {currentStep !== 'learn' ? (
            <button
              onClick={() => {
                const order: StepType[] = ['learn', 'practice', 'apply', 'reflect', 'improve'];
                const idx = order.indexOf(currentStep);
                if (idx > 0) setCurrentStep(order[idx - 1]);
              }}
              className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm font-arabic flex items-center gap-1.5 transition"
            >
              <BackArrowIcon className="w-4 h-4" />
              <span>{isUrdu ? 'پچھلا مرحلہ' : 'Back'}</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            {onOpenAITeacher && (
              <button
                onClick={() => {
                  onClose();
                  onOpenAITeacher(
                    isUrdu 
                      ? `مجھے "${lesson.titleUrdu}" کے بارے میں مزید تفصیل اور میری صورتحال کے مطابق عملی رہنمائی دیں۔`
                      : `Can you guide me on how to apply "${lesson.titleEn}" in my specific daily situation?`
                  );
                }}
                className="hidden sm:flex px-3.5 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 dark:bg-amber-950 dark:hover:bg-amber-900 text-amber-900 dark:text-amber-200 border border-amber-300 font-bold text-xs font-arabic items-center gap-1.5 transition"
              >
                <Brain className="w-3.5 h-3.5" />
                <span>{isUrdu ? 'استاد سے پوچھیں' : 'Ask AI Teacher'}</span>
              </button>
            )}

            {currentStep === 'reflect' ? (
              <button
                id="finish-practical-life-lesson-btn"
                onClick={handleFinishLesson}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 active:scale-98 text-white font-black text-xs sm:text-sm font-arabic shadow-md transition flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isUrdu ? 'سبق مکمل کریں (+25 پوائنٹس)' : 'Complete Lesson (+25 pts)'}</span>
              </button>
            ) : currentStep === 'improve' ? (
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-xs sm:text-sm font-arabic shadow-md transition"
              >
                <span>{isUrdu ? 'بند کریں' : 'Close'}</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  const order: StepType[] = ['learn', 'practice', 'apply', 'reflect', 'improve'];
                  const idx = order.indexOf(currentStep);
                  if (idx < order.length - 1) setCurrentStep(order[idx + 1]);
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-xs sm:text-sm font-arabic shadow-sm transition flex items-center gap-1.5"
              >
                <span>{isUrdu ? 'اگلا مرحلہ' : 'Next Step'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
