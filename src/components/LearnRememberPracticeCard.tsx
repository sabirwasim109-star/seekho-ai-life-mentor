import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  Bot, 
  Target, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Lightbulb, 
  Check, 
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { Language, UserProfile, RetentionCycleStage, LearnRememberPracticeItem } from '../types';
import { 
  getRetentionCycleItems, 
  updateRetentionItemProgress, 
  saveRetentionCycleItems 
} from '../data/retentionCycleData';

interface LearnRememberPracticeCardProps {
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
  onAwardGrowthPoints?: (points: number, reasonUrdu: string) => void;
}

export const LearnRememberPracticeCard: React.FC<LearnRememberPracticeCardProps> = ({
  language,
  userProfile,
  onOpenAITeacherWithPrompt,
  onAwardGrowthPoints,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [items, setItems] = useState<LearnRememberPracticeItem[]>(() => 
    getRetentionCycleItems(userProfile)
  );
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [actionMarkedDone, setActionMarkedDone] = useState<boolean>(false);

  const currentItem = items[activeItemIndex] || items[0];

  const handleSelectOption = (optionId: string) => {
    if (hasSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const handleCheckAnswer = () => {
    if (!selectedOptionId || !currentItem) return;
    
    const chosen = currentItem.options.find(o => o.id === selectedOptionId);
    const correct = chosen ? chosen.isCorrect : false;

    setIsCorrect(correct);
    setHasSubmitted(true);

    const { updatedItems } = updateRetentionItemProgress(items, currentItem.id, correct);
    setItems(updatedItems);

    if (correct && onAwardGrowthPoints) {
      onAwardGrowthPoints(15, 'سبق کی یاد دہانی اور درست جواب (+15 پوائنٹس)');
    }
  };

  const handleForgotLesson = () => {
    setIsCorrect(false);
    setHasSubmitted(true);
    const { updatedItems } = updateRetentionItemProgress(items, currentItem.id, false);
    setItems(updatedItems);
  };

  const handleNextLesson = () => {
    setSelectedOptionId(null);
    setHasSubmitted(false);
    setIsCorrect(null);
    setActionMarkedDone(false);
    setActiveItemIndex((prev) => (prev + 1) % items.length);
  };

  const getStageBadge = (stage: RetentionCycleStage) => {
    switch (stage) {
      case 'learn':
        return { labelUrdu: '۱. میں نے سیکھا', labelEn: '1. Learned', color: 'bg-blue-100 text-blue-800 border-blue-200' };
      case 'remember':
        return { labelUrdu: '۲. مجھے یاد رہا', labelEn: '2. Remembered', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
      case 'review':
        return { labelUrdu: '۳. میں نے دہرایا', labelEn: '3. Reviewed', color: 'bg-amber-100 text-amber-800 border-amber-200' };
      case 'practice':
        return { labelUrdu: '۴. میں نے مشق کی', labelEn: '4. Practiced', color: 'bg-purple-100 text-purple-800 border-purple-200' };
      case 'apply':
        return { labelUrdu: '۵. میں نے عمل کیا', labelEn: '5. Applied', color: 'bg-teal-100 text-teal-800 border-teal-200' };
    }
  };

  const stageBadge = getStageBadge(currentItem.stage);

  return (
    <div 
      id="learn-remember-practice-card"
      className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-indigo-500/20 shadow-xl space-y-6 relative overflow-hidden"
    >
      {/* Decorative Subtle Ambient Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header & Flow Indicator */}
      <div className="relative z-10 space-y-3 pb-3 border-b border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 flex items-center gap-1.5 font-arabic">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              {isUrdu ? 'سیکھیں → یاد رکھیں → عمل کریں' : 'Learn → Remember → Practice'}
            </span>
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${stageBadge.color} font-arabic`}>
              {isUrdu ? stageBadge.labelUrdu : stageBadge.labelEn}
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-arabic">
              {isUrdu ? `درجہ ${currentItem.difficultyLevel}` : `Level ${currentItem.difficultyLevel}`}
            </span>
          </div>

          {items.length > 1 && (
            <button
              onClick={handleNextLesson}
              className="text-xs font-bold text-slate-600 hover:text-indigo-600 flex items-center gap-1 font-arabic transition self-end sm:self-auto"
            >
              <span>{isUrdu ? `اگلا سبق (${activeItemIndex + 1}/${items.length})` : `Next Lesson (${activeItemIndex + 1}/${items.length})`}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Progress Indicator: میں نے سیکھا → مجھے یاد رہا → میں نے عمل کیا */}
        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
          <div className="text-[11px] font-bold text-slate-500 mb-2 font-arabic flex items-center justify-between">
            <span>{isUrdu ? 'یادداشت اور عملی نفاذ کا سفر:' : 'Retention & Practice Cycle:'}</span>
            <span className="text-indigo-600 font-black">{isUrdu ? currentItem.nextReviewTimingUrdu : currentItem.nextReviewTimingEn}</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 text-center text-xs font-bold font-arabic">
            <div className={`p-1.5 rounded-xl border transition ${currentItem.stage === 'learn' ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs' : 'bg-white text-slate-700 border-slate-200'}`}>
              {isUrdu ? '۱. سیکھا' : '1. Learn'}
            </div>
            <div className={`p-1.5 rounded-xl border transition ${currentItem.stage === 'remember' ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs' : 'bg-white text-slate-700 border-slate-200'}`}>
              {isUrdu ? '۲. یاد رہا' : '2. Remember'}
            </div>
            <div className={`p-1.5 rounded-xl border transition ${currentItem.stage === 'review' ? 'bg-amber-600 text-white border-amber-700 shadow-xs' : 'bg-white text-slate-700 border-slate-200'}`}>
              {isUrdu ? '۳. دہرایا' : '3. Review'}
            </div>
            <div className={`p-1.5 rounded-xl border transition ${currentItem.stage === 'practice' ? 'bg-purple-600 text-white border-purple-700 shadow-xs' : 'bg-white text-slate-700 border-slate-200'}`}>
              {isUrdu ? '۴. مشق کی' : '4. Practice'}
            </div>
            <div className={`p-1.5 rounded-xl border transition ${currentItem.stage === 'apply' ? 'bg-teal-600 text-white border-teal-700 shadow-xs' : 'bg-white text-slate-700 border-slate-200'}`}>
              {isUrdu ? '۵. عمل کیا' : '5. Apply'}
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content Area */}
      <div className="relative z-10 space-y-4">
        {/* Islamic Verified Bismillah Header if applicable */}
        {currentItem.isIslamic && (
          <div className="text-center py-1">
            <span className="font-arabic text-sm text-emerald-800 font-bold tracking-wide">
              {currentItem.bismillahHeader || 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ'}
            </span>
          </div>
        )}

        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
              {isUrdu ? currentItem.titleUrdu : currentItem.titleEn}
            </h3>

            {currentItem.verifiedSourceUrdu && (
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-arabic flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isUrdu ? currentItem.verifiedSourceUrdu : currentItem.verifiedSourceEn}</span>
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed bg-slate-50/80 p-3 rounded-xl border border-slate-200/60">
            <strong>{isUrdu ? 'بنیادی سبق:' : 'Core Lesson:'}</strong> {isUrdu ? currentItem.keyLessonSummaryUrdu : currentItem.keyLessonSummaryEn}
          </p>
        </div>

        {/* Short, Enjoyable Review Question (Not an Exam) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200/80 space-y-3">
          <div className="flex items-center gap-2 text-indigo-900 font-black text-sm sm:text-base font-arabic">
            <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0" />
            <h4>{isUrdu ? currentItem.reviewQuestionUrdu : currentItem.reviewQuestionEn}</h4>
          </div>

          {/* Options */}
          <div className="space-y-2 pt-1">
            {currentItem.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              let optionStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';

              if (hasSubmitted) {
                if (opt.isCorrect) {
                  optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                } else if (isSelected && !opt.isCorrect) {
                  optionStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                } else {
                  optionStyle = 'bg-white/60 border-slate-200 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                optionStyle = 'bg-indigo-50 border-indigo-600 text-indigo-950 font-bold shadow-xs';
              }

              return (
                <button
                  key={opt.id}
                  disabled={hasSubmitted}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full text-right p-3 rounded-xl border text-xs sm:text-sm font-arabic transition flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <span className="leading-relaxed">{isUrdu ? opt.textUrdu : opt.textEn}</span>
                  {hasSubmitted && opt.isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons before Submission */}
          {!hasSubmitted && (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedOptionId}
                className={`px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm font-arabic shadow-md transition flex items-center gap-2 ${
                  selectedOptionId 
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer active:scale-98' 
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>{isUrdu ? 'جواب کی تصدیق کریں' : 'Confirm Answer'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <button
                onClick={handleForgotLesson}
                className="text-xs text-slate-500 hover:text-slate-700 font-arabic underline underline-offset-4 py-1"
              >
                {isUrdu ? 'مجھے یاد نہیں آ رہا (دہرائی دکھائیں)' : 'I forgot (Show revision)'}
              </button>
            </div>
          )}
        </div>

        {/* FEEDBACK & PRACTICAL ACTION SECTION (Revealed after answer) */}
        {hasSubmitted && (
          <div className="space-y-3 pt-2">
            {/* If Correct */}
            {isCorrect ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-black text-sm font-arabic">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>{isUrdu ? 'ماشاءاللہ! بالکل درست جواب۔ آپ کی یادداشت مضبوط ہو رہی ہے!' : 'Excellent! Perfect recall. Your mastery is strengthening!'}</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-arabic">
                    +15 Points
                  </span>
                </div>
                <p className="text-xs text-emerald-800 font-arabic">
                  {isUrdu ? 'آپ کا مرحلہ اگلے درجے پر منتقل کر دیا گیا ہے۔ اب اس کو عمل میں لانے کا وقت ہے!' : 'Advanced to the next retention stage. Time to put it into action!'}
                </p>
              </div>
            ) : (
              /* If Forgotten / Incorrect: Gentle Revision (No Stress) */
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-black text-sm font-arabic text-amber-900">
                  <RotateCcw className="w-4 h-4 text-amber-700" />
                  <span>{isUrdu ? 'آسان دہرائی (کوئی بات نہیں، دہرانے سے ہی علم پختہ ہوتا ہے)' : 'Simple Revision (Repetition builds deep mastery)'}</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 font-arabic leading-relaxed">
                  {isUrdu ? currentItem.gentleRevisionUrdu : currentItem.gentleRevisionEn}
                </p>
              </div>
            )}

            {/* MANDATORY: One Practical Action (عمل کا ایک قدم) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-amber-300" />
                  <span className="text-xs font-black uppercase text-amber-300 font-arabic">
                    {isUrdu ? '🎯 آج کا ایک عملی قدم (One Practical Action)' : '🎯 Today’s Practical Action'}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100 font-arabic font-semibold leading-relaxed">
                {isUrdu ? currentItem.practicalActionUrdu : currentItem.practicalActionEn}
              </p>

              {currentItem.advancedActionUrdu && currentItem.difficultyLevel >= 2 && (
                <div className="pt-2 border-t border-white/10 text-xs text-indigo-200 font-arabic">
                  <strong>{isUrdu ? 'اگلا ایڈوانس چیلنج:' : 'Advanced Practice:'}</strong>{' '}
                  {isUrdu ? currentItem.advancedActionUrdu : currentItem.advancedActionEn}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  {!actionMarkedDone ? (
                    <button
                      onClick={() => setActionMarkedDone(true)}
                      className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs font-arabic transition flex items-center gap-1.5 shadow-sm active:scale-98"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{isUrdu ? 'میں نے یہ عمل کر لیا' : 'Mark Action Done'}</span>
                    </button>
                  ) : (
                    <span className="text-xs font-bold text-emerald-300 bg-emerald-800/60 px-3 py-1.5 rounded-xl border border-emerald-400/40 font-arabic flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isUrdu ? 'شاباش! عمل ریکارڈ ہو گیا' : 'Action Logged!'}</span>
                    </span>
                  )}

                  <button
                    onClick={handleNextLesson}
                    className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs font-arabic transition flex items-center gap-1"
                  >
                    <span>{isUrdu ? 'اگلا سبق آزمائیں' : 'Try Next Lesson'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>

                {onOpenAITeacherWithPrompt && (
                  <button
                    onClick={() => onOpenAITeacherWithPrompt(isUrdu ? currentItem.aiMentorPromptUrdu : currentItem.aiMentorPromptEn)}
                    className="text-xs text-indigo-200 hover:text-white font-bold font-arabic flex items-center gap-1 transition"
                  >
                    <Bot className="w-3.5 h-3.5 text-amber-300" />
                    <span>{isUrdu ? 'استاد سیکھو سے رہنمائی لیں' : 'Ask AI Mentor'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
