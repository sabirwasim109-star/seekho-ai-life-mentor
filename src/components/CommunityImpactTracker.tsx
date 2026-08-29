import React, { useState } from 'react';
import { 
  Globe, 
  Heart, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  Award, 
  Sprout, 
  ShieldCheck, 
  Laptop, 
  HeartHandshake,
  Send
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { COMMUNITY_IMPACT_DEEDS, CommunityImpactDeed } from '../data/lifeEcosystemData';

interface CommunityImpactTrackerProps {
  language: Language;
  userProfile: UserProfile;
  onLogCommunityDeed?: (deedId: string, points: number, note: string) => void;
  onOpenAITeacher?: (prompt?: string) => void;
}

export const CommunityImpactTracker: React.FC<CommunityImpactTrackerProps> = ({
  language,
  userProfile,
  onLogCommunityDeed,
  onOpenAITeacher,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [completedDeedIds, setCompletedDeedIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`seekho_community_deeds_${userProfile.userId || 'guest'}`);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });

  const [activeDeedForLog, setActiveDeedForLog] = useState<string | null>(null);
  const [deedNote, setDeedNote] = useState('');

  const completedDeedsCount = Object.keys(completedDeedIds).filter(k => completedDeedIds[k]).length;
  const completedLessonsCount = userProfile.completedLessonIds?.length || 0;
  const completedMissionsCount = userProfile.completedMissionIds?.length || 0;
  const skillsCount = userProfile.currentSkills?.length || 1;

  const handleCompleteDeed = (deed: CommunityImpactDeed) => {
    const updated = { ...completedDeedIds, [deed.id]: true };
    setCompletedDeedIds(updated);

    try {
      localStorage.setItem(`seekho_community_deeds_${userProfile.userId || 'guest'}`, JSON.stringify(updated));
    } catch {
      // ignore
    }

    if (onLogCommunityDeed) {
      onLogCommunityDeed(deed.id, deed.points, deedNote || (isUrdu ? deed.titleUrdu : deed.titleEn));
    }

    setActiveDeedForLog(null);
    setDeedNote('');
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'village': return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'society': return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'humanity': return 'bg-amber-50 text-amber-900 border-amber-200';
      default: return 'bg-rose-50 text-rose-800 border-rose-200';
    }
  };

  return (
    <div 
      id="community-impact-section"
      className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border border-slate-200/90 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-black shadow-xs shrink-0">
            <Globe className="w-5 h-5 stroke-[2.5]" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic tracking-tight leading-tight">
                {isUrdu ? 'میرا اثر اور خدمتِ خلق (My Impact)' : 'My Community Impact & Service'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold font-arabic">
                {isUrdu ? 'مثبت کردار' : 'Positive Contribution'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-arabic mt-0.5">
              {isUrdu 
                ? 'اپنے آپ سے شروع کر کے خاندان، گاؤں، قوم اور پوری انسانیت کے لیے خیر کا ذریعہ بنیں' 
                : 'Progressing from self to family, village, nation, and humanity as a source of benefit'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-900 text-xs font-bold font-arabic border border-teal-200">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>{isUrdu ? 'نفع بخش زندگی' : 'Beneficial Life'}</span>
        </div>
      </div>

      {/* Gradual Impact Flow: Self -> Family -> Village -> Society -> Nation -> Humanity */}
      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-3">
        <span className="text-xs font-bold text-slate-600 font-arabic block">
          {isUrdu ? '🌟 نفع بخشی کا بتدریج سفر (The Impact Spectrum):' : 'The Impact Spectrum:'}
        </span>

        <div className="flex items-center gap-1 sm:gap-2 flex-wrap text-xs sm:text-sm font-arabic">
          <span className="px-3 py-1 rounded-xl bg-white text-slate-800 font-bold border border-slate-200 shadow-2xs">
            {isUrdu ? '۱. اپنی ذات' : '1. Self'}
          </span>
          <span className="text-slate-400">→</span>
          <span className="px-3 py-1 rounded-xl bg-white text-slate-800 font-bold border border-slate-200 shadow-2xs">
            {isUrdu ? '۲. خاندان' : '2. Family'}
          </span>
          <span className="text-slate-400">→</span>
          <span className="px-3 py-1 rounded-xl bg-emerald-100 text-emerald-900 font-bold border border-emerald-300 shadow-2xs">
            {isUrdu ? '۳. گاؤں و محلہ' : '3. Village'}
          </span>
          <span className="text-slate-400">→</span>
          <span className="px-3 py-1 rounded-xl bg-teal-100 text-teal-900 font-bold border border-teal-300 shadow-2xs">
            {isUrdu ? '۴. معاشرہ' : '4. Society'}
          </span>
          <span className="text-slate-400">→</span>
          <span className="px-3 py-1 rounded-xl bg-amber-100 text-amber-900 font-bold border border-amber-300 shadow-2xs">
            {isUrdu ? '۵. قوم و ملک' : '5. Nation'}
          </span>
          <span className="text-slate-400">→</span>
          <span className="px-3 py-1 rounded-xl bg-slate-900 text-amber-300 font-black shadow-xs">
            {isUrdu ? '۶. پوری انسانیت' : '6. All Humanity'}
          </span>
        </div>
      </div>

      {/* 4 Tangible Impact Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-arabic">
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3.5 space-y-1">
          <span className="text-2xl font-black text-emerald-900 block font-mono">{skillsCount}</span>
          <strong className="text-xs sm:text-sm text-emerald-950 font-bold block">{isUrdu ? 'سیکھے گئے ہنر' : 'Skills Learned'}</strong>
          <span className="text-xs text-emerald-700">{isUrdu ? 'خود انحصاری' : 'Self-reliance'}</span>
        </div>

        <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-3.5 space-y-1">
          <span className="text-2xl font-black text-teal-900 block font-mono">{completedMissionsCount + completedDeedsCount}</span>
          <strong className="text-xs sm:text-sm text-teal-950 font-bold block">{isUrdu ? 'عملی اقدامات' : 'Practical Acts'}</strong>
          <span className="text-xs text-teal-700">{isUrdu ? 'روزمرہ نیکی' : 'Daily Deeds'}</span>
        </div>

        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-3.5 space-y-1">
          <span className="text-2xl font-black text-amber-900 block font-mono">{completedDeedsCount + 2}</span>
          <strong className="text-xs sm:text-sm text-amber-950 font-bold block">{isUrdu ? 'معاونت پانے والے' : 'People Benefited'}</strong>
          <span className="text-xs text-amber-700">{isUrdu ? 'گھر و محلہ' : 'Family & Town'}</span>
        </div>

        <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-3.5 space-y-1">
          <span className="text-2xl font-black text-sky-900 block font-mono">{completedLessonsCount}</span>
          <strong className="text-xs sm:text-sm text-sky-950 font-bold block">{isUrdu ? 'نافع معلومات' : 'Useful Insights'}</strong>
          <span className="text-xs text-sky-700">{isUrdu ? 'رہنمائی و روشنی' : 'Guidance'}</span>
        </div>
      </div>

      {/* Practical Community Deeds to Perform & Log */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-bold text-slate-700 font-arabic block">
          {isUrdu ? 'گاؤں اور معاشرے کے لیے آج کا عملی قدم منتخب کریں:' : 'Choose an active service step today:'}
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {COMMUNITY_IMPACT_DEEDS.map((deed) => {
            const isDone = Boolean(completedDeedIds[deed.id]);
            const isLoggingThis = activeDeedForLog === deed.id;

            return (
              <div
                key={deed.id}
                id={`community-deed-card-${deed.id}`}
                className={`rounded-2xl p-4 border transition-all flex flex-col justify-between gap-3 ${
                  isDone 
                    ? 'bg-teal-50/60 border-teal-300 shadow-2xs' 
                    : 'bg-slate-50 hover:bg-white border-slate-200'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-bold font-arabic ${getTierBadge(deed.tier)}`}>
                      {isUrdu ? deed.tierUrdu : deed.tierEn} • {isUrdu ? deed.categoryUrdu : deed.categoryEn}
                    </span>

                    <span className="text-xs text-amber-800 font-bold font-arabic">
                      +{deed.points} {isUrdu ? 'پوائنٹس' : 'pts'}
                    </span>
                  </div>

                  <h4 className={`text-base font-black font-arabic leading-snug ${isDone ? 'text-teal-900 line-through' : 'text-slate-900'}`}>
                    {isUrdu ? deed.titleUrdu : deed.titleEn}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed">
                    {isUrdu ? deed.descriptionUrdu : deed.descriptionEn}
                  </p>
                </div>

                {isLoggingThis ? (
                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    <input
                      type="text"
                      value={deedNote}
                      onChange={(e) => setDeedNote(e.target.value)}
                      placeholder={isUrdu ? 'آپ نے یہ کام کیسے مکمل کیا؟ (اختیاری نوٹ)' : 'Briefly describe your action...'}
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:border-teal-500 font-arabic"
                    />
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setActiveDeedForLog(null)}
                        className="px-3 py-1 text-xs text-slate-500 font-arabic"
                      >
                        {isUrdu ? 'منسوخ' : 'Cancel'}
                      </button>
                      <button
                        onClick={() => handleCompleteDeed(deed)}
                        className="px-4 py-1.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-xs font-arabic shadow-xs flex items-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>{isUrdu ? 'محفوظ کریں' : 'Confirm Done'}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between gap-2 text-xs font-arabic">
                    <span className="text-slate-500">
                      🎯 {isUrdu ? deed.actionPromptUrdu : deed.actionPromptEn}
                    </span>

                    <button
                      onClick={() => {
                        if (!isDone) setActiveDeedForLog(deed.id);
                      }}
                      className={`font-bold px-3 py-1.5 rounded-xl transition shrink-0 ${
                        isDone 
                          ? 'bg-teal-100 text-teal-800' 
                          : 'bg-teal-800 hover:bg-teal-700 text-white shadow-2xs'
                      }`}
                    >
                      {isDone ? (isUrdu ? 'مکمل ہے ✓' : 'Done ✓') : (isUrdu ? 'مکمل کیا' : 'Log Action')}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
