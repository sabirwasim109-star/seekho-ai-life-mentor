import React, { useState } from 'react';
import { 
  BookOpen, 
  Languages, 
  Sparkles, 
  Flame, 
  Volume2, 
  Info, 
  CheckCircle2, 
  Compass, 
  ZoomIn, 
  ZoomOut,
  Layers,
  Briefcase,
  LogIn,
  User as UserIcon,
  Cloud,
  Library
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';
import { useAuth } from '../lib/AuthContext';
import { SeekhoLogo } from './SeekhoLogo';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  userProfile: UserProfile;
  textScale?: number;
  onSetTextScale?: (scale: number) => void;
  onOpenAssessment?: () => void;
  onOpenArchitecture?: () => void;
  onOpenVision?: () => void;
  onOpenOpportunities?: () => void;
  onOpenProfileTab?: () => void;
  onOpenLibrary?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  userProfile,
  textScale = 1.0,
  onSetTextScale = (_scale: number) => {},
  onOpenAssessment = () => {},
  onOpenArchitecture,
  onOpenVision = () => {},
  onOpenOpportunities,
  onOpenProfileTab,
  onOpenLibrary,
}) => {
  const t = UI_TRANSLATIONS[language];
  const { user, signInWithGoogle } = useAuth();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
        {/* Brand Logo & Slogan */}
        <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none" onClick={onOpenVision}>
          <SeekhoLogo className="w-10 h-10 sm:w-11 sm:h-11 shadow-md shadow-emerald-700/20" />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-arabic">
                {language === 'ur' ? 'سیکھو' : 'Seekho'}
              </h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium hidden xs:inline-block">
                {language === 'ur' ? 'مسلسل سیکھنا' : 'Lifelong Learning'}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-1 max-w-[200px] sm:max-w-none">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Action Controls: Vision, Font Scaling, Lang Switch, Assessment, Streak */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Knowledge Library Button */}
          {onOpenLibrary && (
            <button
              id="nav-library-btn"
              onClick={onOpenLibrary}
              title={language === 'ur' ? 'علم کا خزانہ (14 بنیادی موضوعات)' : 'Knowledge Library'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300/80 transition-all font-arabic shadow-2xs"
            >
              <Library className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden xs:inline">{language === 'ur' ? 'علم کا خزانہ' : 'Library'}</span>
            </button>
          )}

          {/* Opportunities Button */}
          {onOpenOpportunities && (
            <button
              id="nav-opp-btn"
              onClick={onOpenOpportunities}
              title={language === 'ur' ? 'مواقع اور کیریئر راہیں' : 'Opportunities & Pathways'}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-bold border border-indigo-200/80 transition-all font-arabic"
            >
              <Briefcase className="w-3.5 h-3.5 text-indigo-700" />
              <span>{language === 'ur' ? 'مواقع' : 'Opportunities'}</span>
            </button>
          )}

          {/* Vision Roadmap Button */}
          <button
            id="nav-vision-btn"
            onClick={onOpenVision}
            title={language === 'ur' ? 'سیکھو کا 7 نکاتی مشن' : 'Seekho 7-Step Vision'}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200/80 transition-all"
          >
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>{language === 'ur' ? 'ہمارا مشن' : 'Our Vision'}</span>
          </button>

          {/* Font Size Accessibility Controls for Seniors */}
          <div className="flex items-center bg-slate-100/90 rounded-lg p-0.5 border border-slate-200/80" title={t.fontSizeToggle}>
            <button
              id="font-scale-down-btn"
              onClick={() => onSetTextScale(Math.max(0.9, textScale - 0.1))}
              disabled={textScale <= 0.9}
              className="p-1.5 text-slate-600 hover:text-slate-900 disabled:opacity-30 rounded hover:bg-white transition"
              aria-label="Decrease Font Size"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-bold px-1 text-slate-700 select-none">
              {Math.round(textScale * 100)}%
            </span>
            <button
              id="font-scale-up-btn"
              onClick={() => onSetTextScale(Math.min(1.35, textScale + 0.1))}
              disabled={textScale >= 1.35}
              className="p-1.5 text-slate-600 hover:text-slate-900 disabled:opacity-30 rounded hover:bg-white transition"
              aria-label="Increase Font Size"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Language Switch Button (Urdu / English) */}
          <button
            id="nav-lang-toggle-btn"
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/90 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 transition-all shadow-2xs"
            title="Switch Language"
          >
            <Languages className="w-4 h-4 text-slate-600" />
            <span>{t.switchLanguage}</span>
          </button>

          {/* Streak Badge */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold" title={t.streakDays}>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>{userProfile.streakDays}</span>
          </div>

          {/* Google Sign-in / Cloud Status Badge in Navbar */}
          {user ? (
            <button
              id="nav-user-profile-btn"
              onClick={onOpenProfileTab}
              title={user.email || user.displayName || 'Google Account'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold transition shadow-2xs font-arabic"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="w-5 h-5 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <UserIcon className="w-4 h-4 text-emerald-700" />
              )}
              <span className="hidden sm:inline max-w-[90px] truncate">
                {user.displayName?.split(' ')[0] || userProfile.name?.split(' ')[0] || (language === 'ur' ? 'اکاؤنٹ' : 'Account')}
              </span>
            </button>
          ) : (
            <button
              id="nav-signin-btn"
              onClick={() => signInWithGoogle().catch(console.error)}
              title={language === 'ur' ? 'گوگل سے سائن ان کریں' : 'Sign in with Google'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-2xs font-arabic"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{language === 'ur' ? 'سائن ان' : 'Sign In'}</span>
            </button>
          )}

          {/* Technical Architecture Info Trigger */}
          <button
            id="nav-arch-btn"
            onClick={onOpenArchitecture}
            className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium border border-slate-200"
            title="System Architecture & Database Blueprint"
          >
            <Layers className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden xl:inline">{language === 'ur' ? 'سسٹم ڈیزائن' : 'Architecture'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
