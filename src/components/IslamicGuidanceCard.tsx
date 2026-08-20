import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  Sun,
  Shield,
  Heart,
  Award,
  Star,
  Flame,
  Check
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { ISLAMIC_LESSONS_DATA, ISLAMIC_LEARNING_REMINDER } from '../data/islamicGuidanceData';

interface IslamicGuidanceCardProps {
  language: Language;
  userProfile: UserProfile;
  onOpenModal: (lessonIndex?: number) => void;
  onQuickComplete?: (lessonId: string) => void;
}

export const IslamicGuidanceCard: React.FC<IslamicGuidanceCardProps> = ({
  language,
  userProfile,
  onOpenModal,
  onQuickComplete,
}) => {
  const completedIds = userProfile.completedIslamicLessonIds || [];
  const completedChallenges = userProfile.completedIslamicChallengeIds || [];
  
  const currentDayIndex = Math.min(
    ISLAMIC_LESSONS_DATA.length - 1, 
    Math.max(0, ISLAMIC_LESSONS_DATA.findIndex(l => !completedIds.includes(l.id)) !== -1 
      ? ISLAMIC_LESSONS_DATA.findIndex(l => !completedIds.includes(l.id)) 
      : 0)
  );

  const todaysLesson = ISLAMIC_LESSONS_DATA[currentDayIndex] || ISLAMIC_LESSONS_DATA[0];
  const isDone = completedIds.includes(todaysLesson.id);
  const isChallengeDone = completedChallenges.includes(todaysLesson.id);
  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-emerald-500/40 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-52 h-52 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-emerald-400/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md shrink-0">
            <Sun className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-white font-arabic">
                {language === 'ur' ? 'قرآن و حدیث سے رہنمائی' : 'Guidance from Quran & Hadith'}
              </h3>
              <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold font-arabic">
                {language === 'ur' ? 'کردار سازی و اخلاقیات' : 'Character Development'}
              </span>
            </div>
            <p className="text-xs text-emerald-200/90 font-arabic mt-0.5">
              {language === 'ur' 
                ? 'نوجوانوں کی کردار سازی، سچائی، دیانت داری، احترام اور خدمتِ خلق' 
                : 'Character building, honesty, compassion, self-discipline and service to humanity'}
            </p>
          </div>
        </div>

        {/* Progress badge & 15 Level indicator */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs bg-emerald-950/80 text-emerald-200 border border-emerald-400/30 px-3 py-1 rounded-full font-bold font-arabic flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            {language === 'ur' ? `لیول ${todaysLesson.levelNumber} از ${ISLAMIC_LESSONS_DATA.length}` : `Level ${todaysLesson.levelNumber} of ${ISLAMIC_LESSONS_DATA.length}`}
          </span>
          {isDone && (
            <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-2.5 py-1 rounded-full font-bold font-arabic flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {language === 'ur' ? 'سبق مکمل' : 'Done'}
            </span>
          )}
        </div>
      </div>

      {/* Main Lesson Summary Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 relative z-10 space-y-4">
        {/* Sacred Bismillah */}
        <div className="text-center pb-2 border-b border-white/10">
          <p className="text-xl sm:text-2xl font-black text-amber-300 font-arabic tracking-wide">
            {todaysLesson.bismillah}
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white font-arabic mt-1">
            {language === 'ur' ? todaysLesson.themeUrdu : todaysLesson.themeEn}
          </h4>
        </div>

        {/* 2 Key Highlights: Verse & Hadith Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Verse Snapshot */}
          <div className="bg-emerald-950/50 rounded-xl p-3.5 border border-emerald-400/20 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300 font-arabic flex items-center gap-1">
                🌿 {language === 'ur' ? 'آج کی قرآنی رہنمائی' : "Today's Quranic Verse"}
              </span>
              <span className="text-[10px] text-emerald-300 font-arabic">
                {language === 'ur' ? todaysLesson.quranGuidance.surahAndAyahUrdu : todaysLesson.quranGuidance.surahAndAyahEn}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-100 font-arabic line-clamp-2 leading-relaxed">
              {language === 'ur' ? todaysLesson.quranGuidance.translationUrdu : todaysLesson.quranGuidance.translationEn}
            </p>
          </div>

          {/* Hadith Snapshot */}
          <div className="bg-teal-950/50 rounded-xl p-3.5 border border-teal-400/20 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300 font-arabic flex items-center gap-1">
                📖 {language === 'ur' ? 'آج کی مبارک حدیث' : "Today's Hadith"}
              </span>
              <span className="text-[10px] text-teal-300 font-mono">
                {language === 'ur' ? todaysLesson.hadithGuidance.sourceReferenceUrdu.split('|')[0] : todaysLesson.hadithGuidance.sourceReferenceEn.split('|')[0]}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-100 font-arabic line-clamp-2 leading-relaxed">
              {language === 'ur' ? todaysLesson.hadithGuidance.textUrdu : todaysLesson.hadithGuidance.textEn}
            </p>
          </div>
        </div>

        {/* Practical Daily Action Banner */}
        <div className="bg-gradient-to-r from-amber-400/20 via-emerald-500/20 to-teal-500/20 rounded-xl p-3 border border-amber-400/30 flex items-start sm:items-center justify-between gap-3 flex-wrap">
          <div className="flex items-start sm:items-center gap-2.5">
            <span className="text-lg shrink-0">🎯</span>
            <div>
              <span className="text-xs font-bold text-amber-300 font-arabic block">
                {language === 'ur' ? 'آج کا عملی چیلنج:' : "Today's Practical Challenge:"}
              </span>
              <p className="text-xs sm:text-sm text-white font-arabic font-semibold">
                {language === 'ur' ? todaysLesson.practicalAction.actionUrdu : todaysLesson.practicalAction.actionEn}
              </p>
            </div>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black font-arabic shrink-0">
            {todaysLesson.practicalAction.category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            id="btn-open-full-islamic-lesson"
            onClick={() => onOpenModal(currentDayIndex)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 font-arabic"
          >
            <BookOpen className="w-4 h-4 text-slate-950" />
            <span>{language === 'ur' ? 'سبق شروع کریں و چیلنج دیکھیں' : 'Start Lesson & Challenge'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>

          {isDone ? (
            <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold font-arabic">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{language === 'ur' ? 'ماشاءاللہ! سبق مکمل ہو چکا ہے۔' : 'Masha’Allah! Lesson Completed.'}</span>
            </div>
          ) : (
            onQuickComplete && (
              <button
                id="btn-quick-complete-islamic-lesson"
                onClick={() => onQuickComplete(todaysLesson.id)}
                className="text-xs text-emerald-200 hover:text-white underline font-bold font-arabic transition"
              >
                {language === 'ur' ? 'آج کا سبق مکمل نشان زد کریں (+25 pts)' : 'Mark Lesson Done (+25 pts)'}
              </button>
            )
          )}
        </div>
      </div>

      {/* Reminder at bottom */}
      <div className="mt-4 pt-3 border-t border-white/10 text-center relative z-10">
        <p className="text-xs sm:text-sm text-amber-200/90 font-arabic font-medium italic">
          "{language === 'ur' ? ISLAMIC_LEARNING_REMINDER.urdu : ISLAMIC_LEARNING_REMINDER.english}"
        </p>
      </div>
    </div>
  );
};
