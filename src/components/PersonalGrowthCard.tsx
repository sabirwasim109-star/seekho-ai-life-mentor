import React from 'react';
import { 
  Compass, 
  Sparkles, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  BookOpen, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { Language, UserProfile, Course } from '../types';
import { getSmartRecommendations, calculateGrowthScores } from '../utils/growthEngine';
import { COURSES_DATA } from '../data/mockData';

interface PersonalGrowthCardProps {
  language: Language;
  userProfile: UserProfile;
  onOpenGrowthModal: () => void;
  onSelectCourse: (course: Course) => void;
  onOpenIslamicModal?: (lessonIndex?: number) => void;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
}

export const PersonalGrowthCard: React.FC<PersonalGrowthCardProps> = ({
  language,
  userProfile,
  onOpenGrowthModal,
  onSelectCourse,
  onOpenIslamicModal,
  onOpenAITeacherWithPrompt,
}) => {
  const recommendations = getSmartRecommendations(userProfile, language);
  const primaryRec = recommendations[0];
  const scores = calculateGrowthScores(userProfile);
  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  if (!primaryRec) return null;

  const handleStartRecommendation = () => {
    if (primaryRec.targetType === 'course' && primaryRec.targetCourseId) {
      const course = COURSES_DATA.find(c => c.id === primaryRec.targetCourseId);
      if (course) onSelectCourse(course);
    } else if (primaryRec.targetType === 'lesson' && primaryRec.targetCourseId) {
      const course = COURSES_DATA.find(c => c.id === primaryRec.targetCourseId);
      if (course) onSelectCourse(course);
    } else if (primaryRec.targetType === 'islamic_lesson' && onOpenIslamicModal) {
      onOpenIslamicModal(primaryRec.targetIslamicLessonIndex || 0);
    } else if (primaryRec.targetType === 'quiz_review' && primaryRec.targetCourseId) {
      const course = COURSES_DATA.find(c => c.id === primaryRec.targetCourseId);
      if (course) onSelectCourse(course);
    } else {
      onOpenGrowthModal();
    }
  };

  // Average growth score
  const avgScore = Math.round(
    Object.values(scores).reduce((acc, curr) => acc + curr.score, 0) / 10
  );

  return (
    <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-emerald-500/40 relative overflow-hidden">
      {/* Background ambient lights */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-emerald-500/20">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-md shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider font-arabic">
                {language === 'ur' ? 'ذاتی ترقی کا ذہین نظام' : 'Personal Growth Engine'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-semibold border border-emerald-400/30">
                {language === 'ur' ? 'مرحلہ وار رہنمائی' : 'Adaptive'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-arabic tracking-tight">
              {language === 'ur' ? 'میرا اگلا بہترین قدم' : 'My Next Best Step'}
            </h3>
          </div>
        </div>

        {/* Growth Overview Pill */}
        <button
          id="open-personal-growth-modal-header-btn"
          onClick={onOpenGrowthModal}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 hover:text-white border border-white/15 transition text-xs font-bold font-arabic shadow-xs"
        >
          <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
          <span>{language === 'ur' ? `میری مجموعی ترقی (${avgScore}%)` : `My Growth (${avgScore}%)`}</span>
          <ArrowIcon className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Recommendation Content */}
      <div className="relative z-10 pt-4 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 flex-1 max-w-2xl">
            {/* Growth Area Pill & Badges */}
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30 font-arabic flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                {language === 'ur' ? primaryRec.growthAreaUrdu : primaryRec.growthAreaEn}
              </span>

              <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white/90 font-medium font-arabic flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-300" />
                {primaryRec.estimatedMinutes} {language === 'ur' ? 'منٹ کا کام' : 'mins'}
              </span>

              <span className="px-2.5 py-1 rounded-lg bg-amber-400/15 text-amber-300 font-medium font-arabic border border-amber-400/20">
                {language === 'ur' ? primaryRec.difficultyUrdu : primaryRec.difficulty}
              </span>
            </div>

            {/* Recommendation Title */}
            <h4 className="text-xl sm:text-2xl font-black text-white font-arabic leading-snug">
              {language === 'ur' ? primaryRec.titleUrdu : primaryRec.titleEn}
            </h4>

            {/* Why Recommended */}
            <p className="text-xs sm:text-sm text-emerald-100/90 font-arabic leading-relaxed">
              <span className="text-amber-300 font-bold">
                {language === 'ur' ? '💡 وجہ انتخاب: ' : '💡 Why: '}
              </span>
              {language === 'ur' ? primaryRec.whyUrdu : primaryRec.whyEn}
            </p>

            {/* Expected Practical Benefit */}
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-emerald-200 font-arabic flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>
                <strong className="text-white font-bold">
                  {language === 'ur' ? 'عملی فائدہ: ' : 'Practical Benefit: '}
                </strong>
                {language === 'ur' ? primaryRec.practicalBenefitUrdu : primaryRec.practicalBenefitEn}
              </span>
            </div>

            {primaryRec.encouragementNoteUrdu && (
              <p className="text-xs text-amber-300/90 font-arabic italic">
                {language === 'ur' ? primaryRec.encouragementNoteUrdu : primaryRec.encouragementNoteEn}
              </p>
            )}
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col items-stretch md:items-end gap-2.5 w-full md:w-auto shrink-0 pt-2 md:pt-0">
            <button
              id="growth-primary-start-btn"
              onClick={handleStartRecommendation}
              className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-arabic"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>
                {language === 'ur'
                  ? primaryRec.targetActionLabelUrdu || 'اب شروع کریں'
                  : primaryRec.targetActionLabelEn || 'Start Now'}
              </span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            <button
              id="growth-open-full-plan-btn"
              onClick={onOpenGrowthModal}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-100 font-bold text-xs border border-white/15 transition flex items-center justify-center gap-1.5 font-arabic"
            >
              <Compass className="w-3.5 h-3.5 text-amber-300" />
              <span>{language === 'ur' ? '۱۰ شعبہ ہائے ترقی و روزانہ پلان' : '10 Growth Areas & Daily Plan'}</span>
            </button>
          </div>
        </div>

        {/* Secondary Recommendations Previews (Top 2 & 3) */}
        {recommendations.length > 1 && (
          <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
              <span className="text-[11px] text-emerald-300/80 font-bold font-arabic shrink-0">
                {language === 'ur' ? 'دیگر ۲ اہم تجاویز:' : 'Other Top Next Steps:'}
              </span>
              {recommendations.slice(1, 3).map((rec, idx) => (
                <button
                  key={idx}
                  onClick={onOpenGrowthModal}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-white/90 border border-white/10 font-arabic truncate max-w-[220px] transition text-start"
                >
                  <span className="text-amber-300 font-bold mr-1">#{idx + 2}</span>
                  {language === 'ur' ? rec.titleUrdu : rec.titleEn}
                </button>
              ))}
            </div>

            <button
              onClick={onOpenGrowthModal}
              className="text-xs text-amber-300 hover:underline font-bold font-arabic shrink-0 flex items-center gap-1"
            >
              <span>{language === 'ur' ? 'تمام تجاویز دیکھیں' : 'View all'}</span>
              <ArrowIcon className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
