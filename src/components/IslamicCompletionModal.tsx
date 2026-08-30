import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Sparkles, Award, Volume2, X } from 'lucide-react';
import { Language } from '../types';

export interface IslamicCompletionModalProps {
  isOpen: boolean;
  type?: 'lesson' | 'task' | 'reflection' | 'service' | 'course';
  title?: string;
  points?: number;
  language: Language;
  onClose: () => void;
  onConfirm: () => void;
}

export const IslamicCompletionModal: React.FC<IslamicCompletionModalProps> = ({
  isOpen,
  type = 'lesson',
  title = '',
  points = 20,
  language,
  onClose,
  onConfirm
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const handlePlayAudio = (textToSpeak: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'ur-PK';
    utterance.rate = 0.85;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const isReflectionOrService = type === 'reflection' || type === 'service';

  const defaultUrduTitle = isReflectionOrService
    ? 'جَزَاكَ اللَّهُ خَيْرًا — اللہ آپ کی اس کوشش کو قبول فرمائے'
    : 'الحمد لله — علم کی توفیق پر شکر';

  const defaultEnTitle = isReflectionOrService
    ? 'Jazakallah Khair — May Allah accept your noble effort'
    : 'Alhamdulillah — Grateful for the blessing of knowledge';

  const audioText = isReflectionOrService
    ? 'جزاك الله خيراً. اللہ آپ کی اس کوشش کو قبول فرمائے اور آپ کے علم و عمل میں برکت عطا فرمائے۔'
    : 'الحمد لله على توفيق العلم. إن شاء الله اس پر عمل کی پوری کوشش کریں گے۔';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border-2 border-emerald-500/40 shadow-2xl relative overflow-hidden space-y-6"
      >
        {/* Glowing Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Points Badge */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-500/45 text-emerald-300 font-black text-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span>+{points} {language === 'ur' ? 'پوائنٹس' : 'Points'}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4 text-center sm:text-start">
          {title && (
            <span className="text-xs sm:text-sm font-bold text-emerald-300 font-arabic block">
              {title}
            </span>
          )}

          <h2 className="text-2xl sm:text-3xl font-black text-white font-arabic leading-snug">
            {language === 'ur' ? defaultUrduTitle : defaultEnTitle}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-arabic leading-relaxed">
            {language === 'ur'
              ? 'سیکھنے کا یہ مرحلہ کامیابی سے مکمل ہو گیا۔ اللہ تعالیٰ سے دعا ہے کہ یہ علم آپ کے لیے دنیا اور آخرت میں نفع بخش ہو۔'
              : 'This learning milestone has been successfully completed. May this knowledge bring benefit in this world and the Hereafter.'}
          </p>

          {/* Interactive Audio Button */}
          <div className="pt-1 flex justify-center sm:justify-start">
            <button
              type="button"
              onClick={() => handlePlayAudio(audioText)}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 font-bold text-xs sm:text-sm flex items-center gap-2 transition font-arabic shadow-xs"
            >
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span>{isPlayingAudio ? (language === 'ur' ? 'آڈیو بند کریں' : 'Stop Audio') : (language === 'ur' ? 'دعا سنیں (Audio)' : 'Listen Blessing')}</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onConfirm}
            className="urdu-btn flex-1 py-3.5 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[17px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-arabic"
          >
            <span>{language === 'ur' ? 'ان شاء الله — عمل جاری رکھیں' : 'Inshallah — Continue'}</span>
            <CheckCircle2 className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
