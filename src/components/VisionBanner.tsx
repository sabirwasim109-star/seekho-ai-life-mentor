import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Globe, Home, Users, Building2, User, Trophy, Award } from 'lucide-react';
import { Language } from '../types';

interface VisionBannerProps {
  language: Language;
  onOpenDetails?: () => void;
}

export const VisionBanner: React.FC<VisionBannerProps> = ({ language, onOpenDetails }) => {
  const isUrdu = language === 'ur';
  const isEn = language === 'en';

  const rawSteps = [
    { numUrdu: '۱', numEn: '1', titleUrdu: 'سیکھیں', titleEn: 'Learn', descUrdu: 'مفید علم و ہنر حاصل کریں', descEn: 'Acquire practical skills', icon: Sparkles, color: 'text-cyan-300' },
    { numUrdu: '۲', numEn: '2', titleUrdu: 'مشق کریں', titleEn: 'Practice', descUrdu: 'روزانہ عملی کام کریں', descEn: 'Engage in daily tasks', icon: Trophy, color: 'text-amber-300' },
    { numUrdu: '۳', numEn: '3', titleUrdu: 'خود کو سنواریں', titleEn: 'Improve Self', descUrdu: 'اخلاق و صلاحیت بہتر کریں', descEn: 'Refine character', icon: User, color: 'text-emerald-300' },
    { numUrdu: '۴', numEn: '4', titleUrdu: 'خاندان کی مدد', titleEn: 'Help Family', descUrdu: 'گھر میں خوشحالی لائیں', descEn: 'Uplift household', icon: Home, color: 'text-indigo-300' },
    { numUrdu: '۵', numEn: '5', titleUrdu: 'برادری کی خدمت', titleEn: 'Help Community', descUrdu: 'محلے اور گاؤں کو سنواریں', descEn: 'Support neighborhood', icon: Users, color: 'text-rose-300' },
    { numUrdu: '۶', numEn: '6', titleUrdu: 'ملک کی ترقی', titleEn: 'Help Country', descUrdu: 'وطن کے باوقار شہری بنیں', descEn: 'Contribute to nation', icon: Building2, color: 'text-teal-300' },
    { numUrdu: '۷', numEn: '7', titleUrdu: 'دنیا کے کام آئیں', titleEn: 'Help World', descUrdu: 'انسانیت کے لیے نفع بخش بنیں', descEn: 'Benefit humanity', icon: Globe, color: 'text-sky-300' },
  ];

  return (
    <div 
      onClick={onOpenDetails}
      className="bg-gradient-to-r from-[#0F172A] via-[#0B233A] to-[#020617] text-white rounded-3xl p-4 sm:p-5 shadow-xl border border-cyan-500/30 cursor-pointer hover:border-cyan-400/60 transition-all overflow-hidden relative group"
    >
      {/* High-tech radial background glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400/80" />
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-300 font-arabic flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            {language === 'dual' ? (
              <span>۷ رکنی امپیکٹ روڈ میپ <span className="font-sans text-[11px] opacity-80 font-normal">(7-Stage Impact Circle Roadmap)</span></span>
            ) : isUrdu ? (
              <span>۷ رکنی امپیکٹ روڈ میپ (Impact Circle)</span>
            ) : (
              <span>7-Stage Impact Circle Roadmap</span>
            )}
          </h2>
        </div>
        <span className="text-[11px] sm:text-xs text-cyan-200/90 font-medium bg-cyan-950/80 hover:bg-cyan-900/90 px-3 py-1 rounded-full border border-cyan-400/40 font-arabic flex items-center gap-1 shadow-2xs">
          <span>{language === 'dual' ? 'مکمل روڈ میپ (Full Roadmap) ↗' : isUrdu ? 'مکمل روڈ میپ و برانڈ ↗' : 'View Full Roadmap ↗'}</span>
        </span>
      </div>

      {/* Horizontal Flow on Desktop & Scroll on Mobile */}
      <div className="overflow-x-auto pb-1 -mx-2 px-2 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {rawSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === rawSteps.length - 1;

            return (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800/90 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/40 rounded-2xl px-3 py-2 transition shadow-xs">
                  <div className="w-7 h-7 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center shrink-0">
                    <Icon className={`w-3.5 h-3.5 ${step.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-cyan-400 font-bold">
                        #{isEn ? step.numEn : step.numUrdu}
                      </span>
                      {language === 'dual' ? (
                        <div className="flex flex-col">
                          <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap font-arabic">
                            {step.titleUrdu}
                          </span>
                          <span className="text-[10px] text-cyan-300/80 font-sans tracking-tight font-medium">
                            {step.titleEn}
                          </span>
                        </div>
                      ) : (
                        <span className={`text-xs sm:text-sm font-bold text-white whitespace-nowrap ${isEn ? 'font-sans' : 'font-arabic'}`}>
                          {isEn ? step.titleEn : step.titleUrdu}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {!isLast && (
                  <div className="text-cyan-500/50 flex items-center px-0.5">
                    {isEn ? (
                      <ArrowRight className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowLeft className="w-3.5 h-3.5" />
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

