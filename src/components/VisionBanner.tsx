import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Sparkles, Globe, Heart, Home, Users, Building2, User, Trophy } from 'lucide-react';
import { Language } from '../types';

interface VisionBannerProps {
  language: Language;
  onOpenDetails?: () => void;
}

export const VisionBanner: React.FC<VisionBannerProps> = ({ language, onOpenDetails }) => {
  const stepsUrdu = [
    { num: '۱', title: 'سیکھیں', desc: 'مفید علم و ہنر حاصل کریں', icon: Sparkles },
    { num: '۲', title: 'مشق کریں', desc: 'روزانہ عملی کام کریں', icon: Trophy },
    { num: '۳', title: 'خود کو سنواریں', desc: 'اخلاق و صلاحیت بہتر کریں', icon: User },
    { num: '۴', title: 'خاندان کی مدد', desc: 'گھر میں خوشحالی لائیں', icon: Home },
    { num: '۵', title: 'برادری کی خدمت', desc: 'اپنے محلے اور گاؤں کو سنواریں', icon: Users },
    { num: '۶', title: 'ملک کی ترقی', desc: 'وطن کے باوقار شہری بنیں', icon: Building2 },
    { num: '۷', title: 'دنیا کے کام آئیں', desc: 'انسانیت کے لیے نفع بخش بنیں', icon: Globe },
  ];

  const stepsEn = [
    { num: '1', title: 'Learn', desc: 'Acquire practical knowledge & skills', icon: Sparkles },
    { num: '2', title: 'Practice', desc: 'Engage in hands-on daily tasks', icon: Trophy },
    { num: '3', title: 'Improve Self', desc: 'Refine character & capability', icon: User },
    { num: '4', title: 'Help Family', desc: 'Uplift household well-being', icon: Home },
    { num: '5', title: 'Help Community', desc: 'Solve local neighborhood challenges', icon: Users },
    { num: '6', title: 'Help Country', desc: 'Contribute to national progress', icon: Building2 },
    { num: '7', title: 'Help the World', desc: 'Benefit global humanity', icon: Globe },
  ];

  const steps = language === 'ur' ? stepsUrdu : stepsEn;

  return (
    <div 
      onClick={onOpenDetails}
      className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-lg border border-emerald-500/20 cursor-pointer hover:border-emerald-400/40 transition-all overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300">
            {language === 'ur' ? 'سیکھو کا بنیادی وژن' : 'Seekho Core Vision'}
          </h2>
        </div>
        <span className="text-[11px] sm:text-xs text-emerald-200/90 font-medium bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
          {language === 'ur' ? 'تفصیل دیکھیں ↗' : 'View Roadmap ↗'}
        </span>
      </div>

      {/* Horizontal Flow on Desktop & Scroll on Mobile */}
      <div className="overflow-x-auto pb-1 -mx-2 px-2 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-xs border border-white/10 rounded-xl px-3 py-2 transition">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/30 flex items-center justify-center text-emerald-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-emerald-400 font-bold">{step.num}.</span>
                      <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">{step.title}</span>
                    </div>
                    <p className="text-[10px] text-emerald-200/80 whitespace-nowrap hidden sm:block">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {!isLast && (
                  <div className="text-emerald-400/60 flex items-center px-0.5">
                    {language === 'ur' ? (
                      <ArrowLeft className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
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
