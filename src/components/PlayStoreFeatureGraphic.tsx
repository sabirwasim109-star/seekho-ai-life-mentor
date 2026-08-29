import React from 'react';
import { Sparkles, Compass, ShieldCheck, Zap, Globe, ArrowLeft, ArrowRight, Cpu, Award } from 'lucide-react';
import { Language } from '../types';
import { SeekhoLogo } from './SeekhoLogo';

interface PlayStoreFeatureGraphicProps {
  language?: Language;
  className?: string;
  showDownloadButton?: boolean;
}

/**
 * Play Store Feature Graphic & Modern Cyber-Lab Showcase (1024x500 Aspect Ratio)
 * Typography: "علم سے عمل اور اثر تک — مستقبل کا ہنر مند اور باکردار انسان بنیں"
 * Subtitle: "SEEKHO — Learn • Think • Act • Transform"
 * Visuals: 3D Glassmorphism, Microchip AI Circuits, Neon Cyan & Warm Gold Accents, Royal Navy Cyber-Lab Background
 */
export const PlayStoreFeatureGraphic: React.FC<PlayStoreFeatureGraphicProps> = ({
  language = 'ur',
  className = '',
  showDownloadButton = false
}) => {
  const isUrdu = language === 'ur';

  const pillars = [
    { title: isUrdu ? 'عملی زندگی' : 'Practical Life', icon: Zap, color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { title: isUrdu ? 'صائب سوچ' : 'Sound Thinking', icon: Compass, color: 'text-amber-400', border: 'border-amber-500/30' },
    { title: isUrdu ? 'حلال روزگار' : 'Halal Career', icon: Cpu, color: 'text-emerald-400', border: 'border-emerald-500/30' },
    { title: isUrdu ? 'باکردار انسان' : 'Character & Ethics', icon: ShieldCheck, color: 'text-sky-400', border: 'border-sky-500/30' },
  ];

  return (
    <div
      id="play-store-feature-graphic"
      className={`relative w-full rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-[#0B132B] text-white select-none ${className}`}
      style={{ minHeight: '340px' }}
    >
      {/* 1. Futuristic Cyber-Lab Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 65%),
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 32px 32px, 32px 32px'
        }}
      />

      {/* Cyber-Lab Atmospheric Radial Lights */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Main Content Layout */}
      <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full space-y-6">
        
        {/* Top Bar: Play Store Badge + Brand Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <SeekhoLogo className="w-12 h-12 sm:w-14 sm:h-14 shadow-lg shadow-cyan-500/20" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-white tracking-wide font-arabic">
                  {isUrdu ? 'سیکھو' : 'SEEKHO'}
                </span>
                <span className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/40 uppercase tracking-wider">
                  AI Life Mentor & Skills Lab
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 font-medium font-arabic mt-0.5">
                SEEKHO — Learn • Think • Act • Transform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold flex items-center gap-1.5 shadow-xs">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Google Play Ready</span>
            </span>
          </div>
        </div>

        {/* Centerpiece Display Typography */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-arabic backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>{isUrdu ? 'مستقبل کی عملی تعلیم اور کردار کی تربیت' : 'Future Skills & Ethical Character'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-arabic leading-[1.3] text-balance">
            {isUrdu ? (
              <>
                علم سے عمل اور اثر تک — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-amber-300">مستقبل کا ہنر مند اور باکردار انسان بنیں</span>
              </>
            ) : (
              <>
                From Knowledge to Action & Impact — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-amber-300">Become Capable, Wise, & Impactful</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-200 font-arabic leading-relaxed max-w-2xl">
            {isUrdu
              ? 'صرف ڈگریاں نہیں؛ عملی زندگی کے ہنر، ڈیجیٹل صلاحیت، صائب فیصلے، حلال روزگار اور قرآن و سنت کی روشنی میں اخلاقی رہنمائی۔'
              : 'Beyond theory: Practical life skills, digital literacy, critical thinking, halal livelihood pathways, and ethical integrity.'}
          </p>
        </div>

        {/* Bottom Feature Pillar Chips (Glassmorphic) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-3 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border ${pillar.border} transition flex items-center gap-2.5`}
              >
                <div className="w-8 h-8 rounded-xl bg-slate-800/90 flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className={`w-4 h-4 ${pillar.color}`} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-100 font-arabic whitespace-nowrap">
                  {pillar.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
