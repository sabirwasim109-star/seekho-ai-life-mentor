import React, { useState } from 'react';
import {
  X,
  Heart,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { RelationshipMatrixItem } from '../data/familyAndSocietyMasterData';

interface RelationshipAdvisorModalProps {
  relationship: RelationshipMatrixItem;
  language: Language;
  userProfile: UserProfile;
  onClose: () => void;
  onOpenAITeacherWithPrompt?: (prompt: string) => void;
  onRewardPoints?: (points: number, msgUrdu: string, msgEn: string) => void;
}

export const RelationshipAdvisorModal: React.FC<RelationshipAdvisorModalProps> = ({
  relationship,
  language,
  userProfile,
  onClose,
  onOpenAITeacherWithPrompt,
  onRewardPoints,
}) => {
  const [activeTab, setActiveTab] = useState<'principles' | 'dialogue' | 'plan'>('principles');
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`rel_turnaround_${relationship.id}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleDayCompletion = (dayNum: number) => {
    const updated = { ...completedDays, [dayNum]: !completedDays[dayNum] };
    setCompletedDays(updated);
    try {
      localStorage.setItem(`rel_turnaround_${relationship.id}`, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    if (!completedDays[dayNum] && onRewardPoints) {
      onRewardPoints(
        15,
        `شاندار! آپ نے ۷ دن کے منصوبے کا دن ${dayNum} مکمل کر لیا ہے۔`,
        `Great! Completed Day ${dayNum} of the 7-day relationship plan.`
      );
    }
  };

  const handleConsultAIMentor = () => {
    if (onOpenAITeacherWithPrompt) {
      const prompt = `السلام علیکم! میں اپنے تعلق "${relationship.titleUrdu}" (${relationship.titleEn}) کو بہتر بنانے کے لیے رہنمائی چاہتا ہوں۔ ہماری بات چیت میں کچھ رنجش اور دوری آ گئی ہے، مجھے دانشمندانہ حل بتائیں؟`;
      onOpenAITeacherWithPrompt(prompt);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-teal-900 via-emerald-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl border border-white/20">
              {relationship.symbol}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-500/30 text-teal-300 border border-teal-400/30">
                  رشتے بہتر بنائیں
                </span>
                <span className="text-xs text-slate-300 font-sans">{relationship.titleEn}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-arabic tracking-tight text-white mt-0.5">
                {relationship.titleUrdu}
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

        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-2 gap-2 text-sm font-arabic shrink-0">
          <button
            onClick={() => setActiveTab('principles')}
            className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
              activeTab === 'principles'
                ? 'bg-teal-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>بنیادی اصول و عام غلطیاں</span>
          </button>

          <button
            onClick={() => setActiveTab('dialogue')}
            className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
              activeTab === 'dialogue'
                ? 'bg-teal-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>گفتگو کے باوقار اسکرپٹس</span>
          </button>

          <button
            onClick={() => setActiveTab('plan')}
            className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
              activeTab === 'plan'
                ? 'bg-teal-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>۷ دن کا اصلاحی پلان</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6 font-arabic leading-relaxed text-slate-800">
          
          {activeTab === 'principles' && (
            <div className="space-y-6">
              
              {/* Core Principles */}
              <div className="bg-teal-50/80 rounded-2xl p-5 border border-teal-200/80 space-y-3">
                <div className="text-teal-950 font-bold text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-700" />
                  <span>اس تعلق کے ۳ سنہری اصول:</span>
                </div>
                <ul className="space-y-2 text-slate-800 text-base sm:text-lg">
                  {relationship.corePrinciplesUrdu.map((pr, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-teal-700 font-bold">●</span>
                      <span>{pr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Friction Points & Mistakes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-rose-50/80 rounded-2xl p-5 border border-rose-200/80 space-y-3">
                  <div className="text-rose-950 font-bold text-base flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    <span>عام دوری کے اسباب (Friction Points):</span>
                  </div>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    {relationship.commonFrictionPointsUrdu.map((fp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">✕</span>
                        <span>{fp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/80 space-y-3">
                  <div className="text-amber-950 font-bold text-base flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <span>کن غلطیوں سے سخت بچنا ہے؟</span>
                  </div>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    {relationship.pitfallsToAvoidUrdu.map((pf, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">⚠️</span>
                        <span>{pf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Daily Exercises */}
              <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200 space-y-3">
                <div className="text-emerald-950 font-bold text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span>روزانہ کی آسان عادات:</span>
                </div>
                <ul className="space-y-2 text-slate-700 text-base">
                  {relationship.dailyExercisesUrdu.map((ex, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}

          {activeTab === 'dialogue' && (
            <div className="space-y-5">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl text-blue-950 text-sm font-bold">
                💡 تلخ کلامی کے وقت الفاظ کا چناؤ کیسے رشتوں کو جوڑتا ہے یا توڑتا ہے، نیچے دیکھیں:
              </div>

              {relationship.communicationScriptsUrdu.map((script, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                  <div className="font-bold text-slate-900 text-base sm:text-lg">
                    صورتحال {idx + 1}: {script.situationUrdu}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-slate-800 space-y-1">
                      <div className="text-xs font-bold text-rose-700">غلط اور تکلیف دہ انداز ✕</div>
                      <p className="text-sm sm:text-base font-arabic font-bold text-rose-950">
                        {script.wrongWayUrdu}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-800 space-y-1">
                      <div className="text-xs font-bold text-emerald-700">باوقار اور جوڑنے والا انداز ✓</div>
                      <p className="text-sm sm:text-base font-arabic font-bold text-emerald-950">
                        {script.nobleWayUrdu}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'plan' && (
            <div className="space-y-4">
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl text-teal-950 text-sm font-bold flex items-center justify-between">
                <span>۷ دن کا عملی پلان — روزانہ ایک عمل پر ٹک کریں:</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-teal-200 text-teal-900 font-bold">
                  {Object.values(completedDays).filter(Boolean).length} / 7 مکمل
                </span>
              </div>

              <div className="space-y-3">
                {relationship.sevenDayTurnaroundPlanUrdu.map((step) => {
                  const isDone = !!completedDays[step.day];
                  return (
                    <div
                      key={step.day}
                      onClick={() => toggleDayCompletion(step.day)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isDone
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                            isDone
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          دن {step.day}
                        </div>
                        <div>
                          <div className="font-bold text-base sm:text-lg">{step.titleUrdu}</div>
                          <div className="text-sm text-slate-600 font-normal mt-0.5">{step.actionUrdu}</div>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                          isDone
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'border-slate-300 text-transparent'
                        }`}
                      >
                        ✓
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-100 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={handleConsultAIMentor}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 text-sm font-bold font-arabic transition-all"
          >
            <MessageSquare className="w-4 h-4 text-indigo-700" />
            <span>اس رشتے کے حل کے لیے AI رہنمائی لیں</span>
          </button>

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
