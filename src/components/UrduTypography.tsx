import React from 'react';

/**
 * Standardized Urdu Typography Tokens and Components for Seekho
 * Follows Global Readability Standards:
 * - Page Title: 26–30px
 * - Section Title: 22–24px
 * - Question / Lesson Heading: 22–26px
 * - Body: 17–18px (line-height ~1.8)
 * - Secondary: 15–16px
 * - Small Labels: 14–15px
 * - Button: 17–18px (min-height 48–52px)
 */

export const UrduPageTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => (
  <h1
    id={id}
    className={`urdu-page-title text-[26px] sm:text-[30px] font-black text-slate-900 leading-[1.4] font-arabic tracking-normal text-balance ${className}`}
  >
    {children}
  </h1>
);

export const UrduSectionTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => (
  <h2
    id={id}
    className={`urdu-section-title text-[22px] sm:text-[24px] font-black text-slate-900 leading-[1.5] font-arabic tracking-normal ${className}`}
  >
    {children}
  </h2>
);

export const UrduQuestion: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => (
  <h3
    id={id}
    className={`urdu-question text-[22px] sm:text-[25px] font-black text-slate-900 leading-[1.6] font-arabic tracking-normal text-balance ${className}`}
  >
    {children}
  </h3>
);

export const UrduBody: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => (
  <p
    id={id}
    className={`urdu-body text-[17px] sm:text-[18px] text-slate-700 leading-[1.8] font-arabic ${className}`}
  >
    {children}
  </p>
);

export const UrduSecondary: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => (
  <p
    id={id}
    className={`urdu-secondary text-[15px] sm:text-[16px] text-slate-500 leading-[1.7] font-arabic ${className}`}
  >
    {children}
  </p>
);

export const UrduLabel: React.FC<{
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
  id?: string;
}> = ({ children, className = '', htmlFor, id }) => (
  <label
    id={id}
    htmlFor={htmlFor}
    className={`urdu-label text-[14px] sm:text-[15px] font-bold text-slate-800 leading-[1.5] font-arabic block ${className}`}
  >
    {children}
  </label>
);
