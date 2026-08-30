import React, { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  Brain,
  Scale,
  Calendar,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Check,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { SELF_REFLECTION_DIAGNOSTIC_QUESTIONS, SelfReflectionDiagnosticQuestion } from '../data/quranicWisdomMasterData';

interface QuranicSelfReflectionModalProps {
  language: Language;
  userProfile?: UserProfile;
  onClose: () => void;
  onComplete?: (score: number, feedback: string) => void;
  onSavePlan?: (category: string, plan: string[]) => void;
}

export const QuranicSelfReflectionModal: React.FC<QuranicSelfReflectionModalProps> = ({
  language,
  userProfile,
  onClose,
  onComplete,
  onSavePlan,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeDayChecked, setActiveDayChecked] = useState<Record<number, boolean>>({});

  const currentQ: SelfReflectionDiagnosticQuestion = SELF_REFLECTION_DIAGNOSTIC_QUESTIONS[currentStepIndex];

  const handleSelectOption = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (currentStepIndex < SELF_REFLECTION_DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setIsCompleted(false);
  };

  // Find areas needing work
  const needsWorkQuestions = SELF_REFLECTION_DIAGNOSTIC_QUESTIONS.filter((q) => {
    const selectedOptId = answers[q.id];
    const opt = q.options.find((o) => o.id === selectedOptId);
    return opt?.severity === 'needs_work' || opt?.severity === 'moderate';
  });

  const primaryFocusQuestion = needsWorkQuestions[0] || SELF_REFLECTION_DIAGNOSTIC_QUESTIONS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-white my-auto font-arabic">
        
        {/* HEADER */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-xs">
              🪞
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                اپنے آپ کو پرکھیں (خود احتسابی و جائزہ)
              </h2>
              <p className="text-xs text-slate-300">
                بغیر کسی فیصلے کے اپنے اخلاق اور روزمرہ عمل کی تعمیرِ نو
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {!isCompleted ? (
            <div className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>سوال {currentStepIndex + 1} از {SELF_REFLECTION_DIAGNOSTIC_QUESTIONS.length}</span>
                <span className="text-emerald-400 font-bold">{currentQ.categoryUrdu}</span>
              </div>

              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${((currentStepIndex + 1) / SELF_REFLECTION_DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {currentQ.questionUrdu}
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  {currentQ.questionEn}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt) => {
                  const isSelected = answers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(currentQ.id, opt.id)}
                      className={`w-full text-right p-4 rounded-2xl border transition flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-md'
                          : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-200'
                      }`}
                    >
                      <div className="space-y-1 text-right flex-1">
                        <p className="text-base font-bold leading-relaxed">{opt.labelUrdu}</p>
                        <p className="text-xs text-slate-400 font-sans">{opt.labelEn}</p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-emerald-400 bg-emerald-500 text-slate-950' : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* COMPLETED SUMMARY & 7-DAY ACTION PLAN */
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-950/80 via-slate-900 to-teal-950 border border-emerald-500/40 rounded-3xl p-6 space-y-3 text-center">
                <span className="text-3xl block">🌱</span>
                <h3 className="text-2xl font-black text-white">
                  ماشاءاللہ! آپ کا خود جائزہ مکمل ہوا۔
                </h3>
                <p className="text-base text-emerald-200 font-bold leading-relaxed max-w-xl mx-auto">
                  ”{primaryFocusQuestion.weaknessFeedbackUrdu}“
                </p>
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700 text-sm text-amber-300 font-bold">
                  آئیے اگلے ۷ دن اس پر عملی کام کرتے ہیں اور اپنی روزمرہ عادت بناتے ہیں:
                </div>
              </div>

              {/* 7-DAY ACTION PLAN */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-lg font-black text-white">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span>اگلے ۷ دن کا عملی لائحۂ عمل:</span>
                </div>

                <div className="space-y-2.5">
                  {primaryFocusQuestion.sevenDayActionPlanUrdu.map((stepText, idx) => {
                    const isChecked = Boolean(activeDayChecked[idx]);
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveDayChecked((prev) => ({ ...prev, [idx]: !prev[idx] }))}
                        className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between gap-3 ${
                          isChecked
                            ? 'bg-emerald-950/60 border-emerald-500/80 text-emerald-200'
                            : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 ${
                              isChecked ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-slate-700 text-slate-300'
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <span className="text-base font-bold leading-snug">{stepText}</span>
                        </div>
                        <CheckCircle2
                          className={`w-6 h-6 shrink-0 ${isChecked ? 'text-emerald-400' : 'text-slate-600'}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          {!isCompleted ? (
            <>
              <button
                onClick={handlePrev}
                disabled={currentStepIndex === 0}
                className="px-4 py-2.5 rounded-xl bg-slate-800 disabled:opacity-40 text-slate-300 font-bold text-sm"
              >
                پیچھے
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[currentQ.id]}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 disabled:opacity-40 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2"
              >
                <span>{currentStepIndex === SELF_REFLECTION_DIAGNOSTIC_QUESTIONS.length - 1 ? 'نتیجہ دیکھیں' : 'اگلا سوال'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleRestart}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>دوبارہ ٹیسٹ کریں</span>
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm"
              >
                یہ منصوبہ محفوظ کریں
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
