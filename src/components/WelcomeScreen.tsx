import React from 'react';
import { Sparkles, Languages, ArrowRight, ArrowLeft, Zap, Target, BookOpen, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { SeekhoLogo } from './SeekhoLogo';

interface WelcomeScreenProps {
  language: Language;
  onToggleLanguage: () => void;
  onGetStarted: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  language,
  onToggleLanguage,
  onGetStarted,
}) => {
  const isUrdu = language === 'ur';

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 flex flex-col items-end sm:items-center justify-between p-4 sm:p-6 overflow-y-auto text-white">
      {/* Top Bar: Language Toggle */}
      <header className="w-full max-w-md flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-arabic">
            {isUrdu ? 'اے آئی لائف مینٹور' : 'AI Life Mentor'}
          </span>
        </div>

        <button
          id="welcome-lang-toggle-btn"
          onClick={onToggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition backdrop-blur-xs font-arabic"
          title={isUrdu ? 'زبان تبدیل کریں (English)' : 'Switch Language (اردو)'}
        >
          <Languages className="w-3.5 h-3.5 text-emerald-400" />
          <span>{isUrdu ? 'English' : 'اردو'}</span>
        </button>
      </header>

      {/* Center Main Card */}
      <main className="w-full max-w-md my-auto py-6 sm:py-8 flex flex-col items-center text-center space-y-6">
        {/* App Icon Container */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 blur-md opacity-40 group-hover:opacity-60 transition duration-500" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-slate-900/90 p-1.5 ring-1 ring-white/20 shadow-2xl flex items-center justify-center">
            <SeekhoLogo className="w-full h-full rounded-2xl" showRings />
          </div>
        </div>

        {/* App Title & Tagline */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-arabic">
              {isUrdu ? 'سیکھو' : 'Seekho'}
            </h1>
            <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              {isUrdu ? 'Seekho' : 'سیکھو'}
            </span>
          </div>

          <p className="text-base sm:text-lg font-bold text-emerald-300 font-arabic">
            {isUrdu ? '”زندگی سیکھیں، بہتر بنائیں، عمل کریں“' : '“Learn Life, Improve, Act”'}
          </p>
        </div>

        {/* Core Short Message */}
        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-white/15 shadow-xl w-full text-center space-y-3 font-arabic">
          <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
            {isUrdu ? (
              <>
                علم کو عمل میں بدلیں،<br />
                اپنی صلاحیتیں بڑھائیں،<br />
                اور دوسروں کے لیے فائدہ مند بنیں۔
              </>
            ) : (
              <>
                Turn knowledge into action,<br />
                grow your practical abilities,<br />
                and become beneficial to others.
              </>
            )}
          </p>

          {/* Three Core Pillars: Knowledge -> Growth -> Action */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-2 text-xs font-bold text-emerald-200 flex-wrap">
            <span className="flex items-center gap-1 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              {isUrdu ? 'علم (Knowledge)' : 'Knowledge'}
            </span>
            <span className="text-emerald-400">→</span>
            <span className="flex items-center gap-1 bg-teal-950/60 px-2.5 py-1 rounded-lg border border-teal-500/20">
              <Zap className="w-3.5 h-3.5 text-teal-300" />
              {isUrdu ? 'ترقی (Growth)' : 'Growth'}
            </span>
            <span className="text-emerald-400">→</span>
            <span className="flex items-center gap-1 bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-500/20">
              <Target className="w-3.5 h-3.5 text-amber-300" />
              {isUrdu ? 'عمل (Action)' : 'Action'}
            </span>
          </div>
        </div>

        {/* One Clear Primary Button: شروع کریں */}
        <div className="w-full pt-2">
          <button
            id="welcome-get-started-btn"
            onClick={onGetStarted}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-base sm:text-lg shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 font-arabic"
          >
            <span>{isUrdu ? 'شروع کریں' : 'Get Started'}</span>
            {isUrdu ? (
              <ArrowLeft className="w-5 h-5 text-slate-950" />
            ) : (
              <ArrowRight className="w-5 h-5 text-slate-950" />
            )}
          </button>
        </div>
      </main>

      {/* Bottom Footer: Founder Credit */}
      <footer className="w-full max-w-md pb-2 text-center text-xs text-slate-400 font-arabic">
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          <span>{isUrdu ? 'بانی:' : 'Founder:'}</span>
          <span className="text-emerald-300 font-bold">
            {isUrdu ? 'وسیم صابر (Waseem Sabir)' : 'Waseem Sabir (وسیم صابر)'}
          </span>
        </div>
      </footer>
    </div>
  );
};
