import React, { useState } from 'react';
import {
  X,
  HelpCircle,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Award
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { FamilySituationDilemma } from '../data/familyAndSocietyMasterData';

interface FamilySituationDilemmaModalProps {
  dilemma: FamilySituationDilemma;
  language: Language;
  userProfile: UserProfile;
  onClose: () => void;
  onRewardPoints?: (points: number, msgUrdu: string, msgEn: string) => void;
}

export const FamilySituationDilemmaModal: React.FC<FamilySituationDilemmaModalProps> = ({
  dilemma,
  language,
  userProfile,
  onClose,
  onRewardPoints,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const selectedOption = dilemma.options.find((o) => o.id === selectedOptionId);

  const handleSelectOption = (optId: string) => {
    setSelectedOptionId(optId);
    const opt = dilemma.options.find((o) => o.id === optId);
    if (opt && opt.outcomeType === 'noble_solution' && onRewardPoints) {
      onRewardPoints(
        25,
        `شاندار دانشمندی! آپ نے درست اور اخلاقی حل منتخب کیا ہے۔ (+25 پوائنٹس)`,
        `Wise choice! You selected the noble and principled resolution. (+25 Points)`
      );
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl border border-white/20">
              ⚖️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-300 border border-purple-400/30">
                  {dilemma.category}
                </span>
                <span className="text-xs text-slate-300 font-sans">{dilemma.titleEn}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-arabic tracking-tight text-white mt-0.5">
                {dilemma.titleUrdu}
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

        {/* Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6 font-arabic leading-relaxed text-slate-800">
          
          {/* Scenario Box */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
            <div className="text-sm font-bold text-indigo-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-700" />
              <span>اصل زندگی کی سچویشن (Real Scenario):</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {dilemma.scenarioUrdu}
            </p>
          </div>

          {/* Options Selection */}
          {!selectedOption ? (
            <div className="space-y-4">
              <div className="text-sm font-bold text-slate-700">
                آپ کیا ردعمل دیں گے؟ کوئی ایک انتخاب کریں:
              </div>

              <div className="space-y-3">
                {dilemma.options.map((opt, idx) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className="w-full text-right p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-indigo-400 bg-white hover:bg-indigo-50/50 transition-all flex items-start gap-3 group cursor-pointer shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-indigo-200 text-slate-700 group-hover:text-indigo-900 flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-indigo-950 font-arabic pt-0.5">
                      {opt.labelUrdu}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Outcome & Analysis */
            <div className="space-y-5 animate-fadeIn">
              
              {/* Chosen Response Box */}
              <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-900 space-y-1">
                <div className="text-xs font-bold text-slate-500">آپ کا ردِعمل:</div>
                <div className="font-bold text-base">{selectedOption.labelUrdu}</div>
              </div>

              {/* Outcome Feedback */}
              <div
                className={`p-5 rounded-2xl border space-y-3 ${
                  selectedOption.outcomeType === 'noble_solution'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : selectedOption.outcomeType === 'negative'
                    ? 'bg-rose-50 border-rose-300 text-rose-950'
                    : 'bg-amber-50 border-amber-300 text-amber-950'
                }`}
              >
                <div className="font-black text-lg flex items-center gap-2">
                  {selectedOption.outcomeType === 'noble_solution' && (
                    <>
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      <span>بہترین اور دانشمندانہ حل ✓</span>
                    </>
                  )}
                  {selectedOption.outcomeType === 'negative' && (
                    <>
                      <AlertCircle className="w-6 h-6 text-rose-600" />
                      <span>نقصان دہ اور جذباتی ردِعمل ✕</span>
                    </>
                  )}
                  {selectedOption.outcomeType === 'passive' && (
                    <>
                      <AlertCircle className="w-6 h-6 text-amber-600" />
                      <span>غیر فعال اور لاپرواہ رویہ ⚠️</span>
                    </>
                  )}
                </div>

                <div className="text-base sm:text-lg leading-relaxed">
                  <strong>ممکنہ نتائج: </strong>
                  {selectedOption.consequenceUrdu}
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-sm sm:text-base">
                  <strong>نفسیاتی بصیرت: </strong>
                  {selectedOption.psychologicalInsightUrdu}
                </div>

                <div className="p-3.5 bg-white/80 rounded-xl border border-slate-200/80 text-sm sm:text-base font-bold">
                  <strong>سبق و رہنمائی: </strong>
                  {selectedOption.lessonUrdu}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>دوبارہ دوسری چوائس آزمائیں</span>
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
            مکمل کیا
          </button>
        </div>

      </div>
    </div>
  );
};
