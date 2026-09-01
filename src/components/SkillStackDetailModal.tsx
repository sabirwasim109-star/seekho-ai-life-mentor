import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Flame, 
  Check, 
  Volume2, 
  Square,
  Play,
  TrendingUp,
  Award,
  Zap,
  Bot
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { SkillStackItem } from '../data/skillStacksData';
import { speakText, stopSpeaking } from '../utils/speech';

interface SkillStackDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  stack: SkillStackItem | null;
  language: Language;
  userProfile: UserProfile;
  onOpenSkillDetail?: (skillId: string) => void;
  onOpenAITeacherWithPrompt?: (prompt: string) => void;
}

export const SkillStackDetailModal: React.FC<SkillStackDetailModalProps> = ({
  isOpen,
  onClose,
  stack,
  language,
  userProfile,
  onOpenSkillDetail,
  onOpenAITeacherWithPrompt,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!isOpen || !stack) return null;

  const handlePlayVoice = () => {
    stopSpeaking();
    setIsSpeaking(true);
    const text = isUrdu
      ? `${stack.titleUrdu}۔ ${stack.taglineUrdu}۔ مارکیٹ فائدہ: ${stack.marketAdvantageUrdu}۔ پہلا قدم: ${stack.firstStepUrdu}`
      : `${stack.titleEn}. ${stack.taglineEn}. Market Advantage: ${stack.marketAdvantageEn}. First Step: ${stack.firstStepEn}`;
    
    speakText(text, {
      language: 'ur',
      rate: 0.86,
      pitch: 0.84,
    });
  };

  const handleStopVoice = () => {
    stopSpeaking();
    setIsSpeaking(false);
  };

  const handleConsultAIMentor = () => {
    stopSpeaking();
    onClose();
    if (onOpenAITeacherWithPrompt) {
      const prompt = isUrdu
        ? `السلام علیکم! میں اسکل اسٹیک "${stack.titleUrdu}" کے بارے میں تفصیلی رہنمائی چاہتا ہوں۔ میں ان مہارتوں کو ملا کر کیسے سب سے تیز رفتار سے حلال آمدنی شروع کر سکتا ہوں؟`
        : `Hello! I want guidance on the skill stack "${stack.titleEn}". How can I combine these skills to start generating sustainable halal income?`;
      onOpenAITeacherWithPrompt(prompt);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Top Header */}
        <div className={`p-5 sm:p-6 bg-gradient-to-r ${stack.gradient} text-white relative`}>
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="absolute top-4 left-4 rtl:left-auto rtl:right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 max-w-xl pt-2">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black font-arabic inline-block">
              {isUrdu ? stack.badgeUrdu : stack.badgeEn}
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-arabic leading-snug">
              {isUrdu ? stack.titleUrdu : stack.titleEn}
            </h2>
            <p className="text-xs sm:text-sm text-slate-100 font-arabic opacity-90 leading-relaxed">
              {isUrdu ? stack.taglineUrdu : stack.taglineEn}
            </p>
          </div>

          {/* Voice Player */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-arabic text-amber-300 flex items-center gap-1.5">
                <Volume2 className="w-4 h-4" />
                {isUrdu ? 'آواز میں سنیں:' : 'Listen Voice:'}
              </span>
              <button
                onClick={handlePlayVoice}
                className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-arabic text-xs font-bold transition flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isUrdu ? '▶ سنیں' : 'Play'}</span>
              </button>
              {isSpeaking && (
                <button
                  onClick={handleStopVoice}
                  className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-arabic text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>{isUrdu ? 'روکیں' : 'Stop'}</span>
                </button>
              )}
            </div>

            <button
              onClick={handleConsultAIMentor}
              className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black font-arabic text-xs transition flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4" />
              <span>{isUrdu ? 'AI استاد سے مشورہ' : 'Consult AI'}</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 text-slate-800 text-sm font-arabic">
          
          {/* Skills Included in this Stack */}
          <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-3">
            <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-700" />
              <span>{isUrdu ? 'اس مجموعے میں شامل بنیادی مہارتیں:' : 'Core Skills Included:'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stack.skillsIncluded.map((s, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      {isUrdu ? s.titleUrdu : s.titleEn}
                    </span>
                  </div>
                  {onOpenSkillDetail && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenSkillDetail(s.skillId);
                      }}
                      className="p-1.5 text-emerald-700 hover:bg-emerald-50 rounded-lg transition"
                      title={isUrdu ? 'ہنر دیکھیں' : 'View Skill'}
                    >
                      <ArrowIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Resulting Role & Earning */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
              <span className="text-xs font-bold text-emerald-800">
                {isUrdu ? 'آپ کا کردار / جاب ٹائٹل:' : 'Resulting Role:'}
              </span>
              <p className="text-base font-black text-emerald-950">
                {isUrdu ? stack.resultingRoleUrdu : stack.resultingRoleEn}
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
              <span className="text-xs font-bold text-amber-800">
                {isUrdu ? 'تخمینہ آمدنی (مثال):' : 'Estimated Earning Potential:'}
              </span>
              <p className="text-sm font-black text-amber-950">
                {isUrdu ? stack.estimatedEarningUrdu : stack.estimatedEarningEn}
              </p>
            </div>
          </div>

          {/* Who is it for */}
          <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1.5 shadow-xs">
            <h5 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs text-slate-500">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>{isUrdu ? 'یہ کس کے لیے انتہائی موزوں ہے؟' : 'Who is it for?'}</span>
            </h5>
            <p className="text-slate-700 leading-relaxed font-medium">
              {isUrdu ? stack.whoIsItForUrdu : stack.whoIsItForEn}
            </p>
          </div>

          {/* Market Advantage */}
          <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 space-y-1.5">
            <h5 className="font-black text-purple-900 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-purple-700" />
              <span>{isUrdu ? 'مہارتیں ملانے کا مارکیٹ میں زبردست فائدہ:' : 'Market Superpower:'}</span>
            </h5>
            <p className="text-slate-700 leading-relaxed font-medium">
              {isUrdu ? stack.marketAdvantageUrdu : stack.marketAdvantageEn}
            </p>
          </div>

          {/* Practical First Step */}
          <div className="p-5 bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-black text-xs">
              <Zap className="w-4 h-4" />
              <span>{isUrdu ? 'آج کیا کروں؟ (میرا پہلا عملی قدم)' : 'What to do today?'}</span>
            </div>
            <p className="text-sm sm:text-base font-bold leading-relaxed">
              {isUrdu ? stack.firstStepUrdu : stack.firstStepEn}
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="py-2.5 px-5 rounded-2xl border border-slate-300 hover:bg-slate-200 text-slate-700 font-bold font-arabic text-xs transition"
          >
            {isUrdu ? 'بند کریں' : 'Close'}
          </button>

          <button
            onClick={handleConsultAIMentor}
            className="py-2.5 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black font-arabic text-xs transition flex items-center gap-2 shadow-xs"
          >
            <span>{isUrdu ? 'اسٹیک کا عملی پلان بنائیں' : 'Create Action Plan'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
