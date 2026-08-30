import React, { useState } from 'react';
import {
  X,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Heart,
  Award
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { FAMILY_SELF_REFLECTION_QUESTIONS, SelfReflectionAuditQuestion } from '../data/familyAndSocietyMasterData';

interface FamilySelfReflectionModalProps {
  language: Language;
  userProfile: UserProfile;
  onClose: () => void;
  onRewardPoints?: (points: number, msgUrdu: string, msgEn: string) => void;
}

export const FamilySelfReflectionModal: React.FC<FamilySelfReflectionModalProps> = ({
  language,
  userProfile,
  onClose,
  onRewardPoints,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = FAMILY_SELF_REFLECTION_QUESTIONS[currentIdx];

  const handleSelectOption = (qId: string, optId: string) => {
    const updated = { ...answers, [qId]: optId };
    setAnswers(updated);
    if (currentIdx < FAMILY_SELF_REFLECTION_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsCompleted(true);
      if (onRewardPoints) {
        onRewardPoints(
          50,
          'بہت خوب! آپ نے خاندانی و اخلاقی خود احتسابی کا ٹیسٹ مکمل کر لیا ہے۔ (+50 پوائنٹس)',
          'Great! You completed the family and ethical self-reflection diagnostic. (+50 Points)'
        );
      }
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-amber-900 via-teal-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl border border-white/20">
              🪞
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300 border border-amber-400/30">
                  غیر جانبدارانہ خود احتسابی
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-arabic tracking-tight text-white mt-0.5">
                اپنے اخلاق اور رشتوں کو پرکھیں
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6 font-arabic leading-relaxed text-slate-800">
          
          {!isCompleted ? (
            <div className="space-y-6">
              
              {/* Progress indicator */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>سوال {currentIdx + 1} از {FAMILY_SELF_REFLECTION_QUESTIONS.length}</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-sans">
                  {Math.round(((currentIdx + 1) / FAMILY_SELF_REFLECTION_QUESTIONS.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIdx + 1) / FAMILY_SELF_REFLECTION_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/80 space-y-2">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                  {currentQ.categoryUrdu}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-amber-950 leading-relaxed font-arabic">
                  {currentQ.questionUrdu}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt) => {
                  const isSelected = answers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(currentQ.id, opt.id)}
                      className={`w-full text-right p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 group cursor-pointer ${
                        isSelected
                          ? 'bg-amber-100/80 border-amber-400 text-amber-950 font-bold'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <span className="text-base font-arabic font-bold pt-0.5">
                        {opt.labelUrdu}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-amber-600 bg-amber-600 text-white text-xs' : 'border-slate-300'
                        }`}
                      >
                        {isSelected && '✓'}
                      </div>
                    </button>
                  );
                })}
              </div>

              {currentIdx > 0 && (
                <button
                  onClick={() => setCurrentIdx(currentIdx - 1)}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 text-sm font-bold pt-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>پچھلا سوال</span>
                </button>
              )}

            </div>
          ) : (
            /* Summary and Non-Judgmental Growth Roadmap */
            <div className="space-y-6 animate-fadeIn">
              
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl mx-auto flex items-center justify-center text-xl shadow-xs">
                  ✓
                </div>
                <h3 className="text-xl font-black text-emerald-950">
                  خود تشخیصی مکمل! آپ نے سچائی کے ساتھ آئینہ دیکھا
                </h3>
                <p className="text-slate-700 text-base">
                  "سیکھو آپ کے کسی جواب پر فیصلہ (Judge) نہیں سناتا۔ ہم سب میں کمزوریاں ہیں، اصل کامیابی یہ ہے کہ ہم انہیں پہچان کر عملی طور پر بہتر بنائیں۔"
                </p>
              </div>

              <div className="space-y-4">
                <div className="font-black text-slate-900 text-lg">
                  آپ کے لیے خاص ۷ دن کا اصلاحی و اخلاقی ایکشن پلان:
                </div>

                {FAMILY_SELF_REFLECTION_QUESTIONS.map((q, idx) => (
                  <div key={q.id} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                    <div className="font-bold text-base text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{q.categoryUrdu} — عملی رہنمائی:</span>
                    </div>

                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {q.growthAdviceUrdu}
                    </p>

                    <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1.5">
                      <div className="font-bold text-teal-900">عملی مائیکرو عادات:</div>
                      {q.sevenDayActionPlanUrdu.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>دوبارہ ٹیسٹ شروع کریں</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-100 border-t border-slate-200 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white text-sm font-bold font-arabic transition-all"
          >
            بند کریں
          </button>
        </div>

      </div>
    </div>
  );
};
