import React from 'react';
import { Language } from '../types';

/**
 * Formats a bilingual string for plain text contexts (e.g. titles, button tooltips, placeholders)
 */
export function formatBilingual(urdu: string, en: string, lang: Language): string {
  if (lang === 'ur') return urdu;
  if (lang === 'en') return en;
  // Dual mode
  if (!urdu) return en;
  if (!en) return urdu;
  return `${urdu} (${en})`;
}

/**
 * Formats a bilingual string with inline parenthesis
 */
export function formatBilingualInline(urdu: string, en: string, lang: Language): string {
  return formatBilingual(urdu, en, lang);
}

interface BilingualTextProps {
  urdu: string;
  en: string;
  lang: Language;
  className?: string;
  urduClassName?: string;
  enClassName?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | 'title';
  layout?: 'stacked' | 'inline' | 'flex';
  id?: string;
}

/**
 * Core Bilingual Display Component (اردو + English)
 * - Primary Text: Urdu (18px–20px font size, font-arabic, proper RTL line-height)
 * - Secondary Text: English (Subdued/muted styling beneath or beside Urdu text, e.g., 13px–15px)
 */
export const BilingualText: React.FC<BilingualTextProps> = ({
  urdu,
  en,
  lang,
  className = '',
  urduClassName = '',
  enClassName = '',
  size = 'base',
  layout = 'stacked',
  id,
}) => {
  if (lang === 'ur') {
    return (
      <span id={id} className={`font-arabic ${className}`}>
        {urdu}
      </span>
    );
  }

  if (lang === 'en') {
    return (
      <span id={id} className={`font-sans ${className}`}>
        {en}
      </span>
    );
  }

  // Dual Language Mode
  if (layout === 'inline') {
    return (
      <span id={id} className={`inline-flex items-baseline gap-1.5 flex-wrap ${className}`}>
        <span className={`font-arabic font-bold ${urduClassName}`}>{urdu}</span>
        <span className={`text-[0.88em] opacity-80 font-sans font-medium tracking-normal ${enClassName}`}>
          ({en})
        </span>
      </span>
    );
  }

  // Stacked layout (Urdu primary on top, English secondary below)
  const sizeUrduMap = {
    xs: 'text-xs sm:text-sm',
    sm: 'text-sm sm:text-base',
    base: 'text-[17px] sm:text-[19px] leading-[1.75]',
    lg: 'text-[20px] sm:text-[22px] leading-[1.6]',
    xl: 'text-[22px] sm:text-[25px] leading-[1.5]',
    '2xl': 'text-[25px] sm:text-[28px] leading-[1.4]',
    title: 'text-[26px] sm:text-[30px] leading-[1.35]',
  };

  const sizeEnMap = {
    xs: 'text-[10px] sm:text-[11px]',
    sm: 'text-[11px] sm:text-xs',
    base: 'text-xs sm:text-[13px]',
    lg: 'text-xs sm:text-sm',
    xl: 'text-xs sm:text-sm',
    '2xl': 'text-sm sm:text-base',
    title: 'text-sm sm:text-base',
  };

  return (
    <div id={id} className={`flex flex-col gap-0.5 ${className}`}>
      <span className={`font-arabic font-bold text-inherit ${sizeUrduMap[size]} ${urduClassName}`}>
        {urdu}
      </span>
      <span className={`font-sans font-medium text-slate-500/90 dark:text-slate-400/90 ${sizeEnMap[size]} tracking-normal leading-normal ${enClassName}`}>
        {en}
      </span>
    </div>
  );
};

interface BilingualBadgeProps {
  urdu: string;
  en: string;
  lang: Language;
  className?: string;
  variant?: 'emerald' | 'cyan' | 'amber' | 'indigo' | 'rose' | 'slate';
  id?: string;
}

export const BilingualBadge: React.FC<BilingualBadgeProps> = ({
  urdu,
  en,
  lang,
  className = '',
  variant = 'emerald',
  id,
}) => {
  const variantStyles = {
    emerald: 'bg-emerald-50 text-emerald-900 border-emerald-300/80',
    cyan: 'bg-cyan-50 text-cyan-900 border-cyan-300/80',
    amber: 'bg-amber-50 text-amber-900 border-amber-300/80',
    indigo: 'bg-indigo-50 text-indigo-900 border-indigo-300/80',
    rose: 'bg-rose-50 text-rose-900 border-rose-300/80',
    slate: 'bg-slate-100 text-slate-900 border-slate-300',
  };

  return (
    <span
      id={id}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold border ${variantStyles[variant]} ${className}`}
    >
      <span className="font-arabic">{lang === 'en' ? en : urdu}</span>
      {lang === 'dual' && (
        <span className="text-[10px] font-sans opacity-75 font-normal">({en})</span>
      )}
    </span>
  );
};
