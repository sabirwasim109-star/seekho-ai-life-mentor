import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Bot, 
  Award, 
  Zap, 
  Target, 
  Brain, 
  TrendingUp,
  ShieldCheck,
  Users,
  Compass,
  MessageSquare
} from 'lucide-react';
import { Language, UserProfile, LifeSkillCategoryId, PracticalLifeLesson } from '../types';
import { 
  LIFE_SKILL_CATEGORIES, 
  PRACTICAL_LIFE_LESSONS, 
  LIFE_SKILLS_CORE_PRINCIPLE, 
  getLessonsByCategory 
} from '../data/practicalLifeSkillsData';
import { PracticalLifeSkillModal } from './PracticalLifeSkillModal';

interface PracticalLifeSkillsSectionProps {
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacher: (presetPrompt?: string) => void;
  onCompleteLifeLesson: (lessonId: string, points: number, reflectionText?: string) => void;
}

export const PracticalLifeSkillsSection: React.FC<PracticalLifeSkillsSectionProps> = ({
  language,
  userProfile,
  onOpenAITeacher,
  onCompleteLifeLesson
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [selectedCategoryId, setSelectedCategoryId] = useState<LifeSkillCategoryId>('money_earning');
  const [activeModalLesson, setActiveModalLesson] = useState<PracticalLifeLesson | null>(null);

  const currentLessons = getLessonsByCategory(selectedCategoryId);
  const activeCategoryMeta = LIFE_SKILL_CATEGORIES.find(c => c.id === selectedCategoryId) || LIFE_SKILL_CATEGORIES[0];

  const completedLessonIds = userProfile.completedLifeSkillLessonIds || [];
  const completedCount = completedLessonIds.length;

  return (
    <section id="practical-life-skills-section" className="space-y-4">
      {/* Main Section Banner & Introduction */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-5 sm:p-7 border-2 border-indigo-500/40 shadow-xl relative overflow-hidden transition-all">
        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-indigo-500/30">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </span>
              <span className="text-xs px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 font-semibold font-arabic">
                {isUrdu ? '۱۲ عملی زمرہ جات • حقیقی زندگی، آمدنی و کردار' : '12 Practical Life Domains'}
              </span>
              {completedCount > 0 && (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold font-arabic flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{completedCount} {isUrdu ? 'اسباق مکمل' : 'completed'}</span>
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white font-arabic tracking-tight flex items-center gap-2">
              <span>{isUrdu ? '💡 زندگی کی عملی مہارتیں' : '💡 Practical Life Skills'}</span>
            </h2>

            <p className="text-indigo-100/90 text-xs sm:text-sm font-arabic max-w-2xl leading-relaxed">
              {isUrdu
                ? 'صرف موٹیویشن نہیں، بلکہ وہ حقیقی علم، عادات اور ہنر جو آپ کی آمدنی، سوچ، کاروبار، تعلقات اور وقت کو بہتر بنائیں۔'
                : 'Not just passive motivation — actionable knowledge, habits, and skills to elevate your income, mindset, business, and daily impact.'}
            </p>
          </div>

          <button
            id="life-skills-ask-ai-teacher-btn"
            onClick={() => onOpenAITeacher(
              isUrdu 
                ? 'مجھے زندگی کی عملی مہارتوں (پیسہ، ذہن، کاروبار، وقت، فیصلوں) میں سے میری ضرورت کے مطابق ایک بہترین سبق اور عملی قدم تجویز کریں۔' 
                : 'Recommend a high-impact practical life lesson for my career, mindset, or daily discipline.'
            )}
            className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-98 text-slate-950 font-black text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 self-start md:self-auto shrink-0 font-arabic"
          >
            <Bot className="w-4 h-4 text-slate-950" />
            <span>{isUrdu ? 'استاد سیکھو سے مشورہ' : 'Ask AI Teacher'}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Core Principle & 5-Step Interactive Cycle */}
        <div className="relative z-10 pt-4 pb-2">
          <div className="bg-slate-950/60 rounded-2xl p-4 border border-indigo-500/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider font-arabic">
                {isUrdu ? '🎯 سنہری اصول:' : '🎯 Core Principle:'}
              </span>
              <p className="text-sm font-black text-white font-arabic">
                "{LIFE_SKILLS_CORE_PRINCIPLE[language]}"
              </p>
            </div>

            {/* 5-Step Cycle Indicators */}
            <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap text-[11px] font-arabic font-bold">
              {(isUrdu ? LIFE_SKILLS_CORE_PRINCIPLE.cycleUrdu : LIFE_SKILLS_CORE_PRINCIPLE.cycleEn).map((step, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <span className="px-2.5 py-1 rounded-xl bg-white/10 text-emerald-200 border border-white/10 flex items-center gap-1 shadow-2xs">
                    <span className="w-4 h-4 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-[10px] font-black">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </span>
                  {idx < 4 && <span className="text-white/40 font-bold hidden sm:inline">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 12 Categories Filter Bar */}
        <div className="relative z-10 pt-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs font-arabic">
            {LIFE_SKILL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`px-3 py-2 rounded-2xl text-xs font-bold transition shrink-0 flex items-center gap-1.5 border shadow-2xs ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-black'
                      : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
                  }`}
                >
                  <span className="text-sm">{cat.emoji}</span>
                  <span>{isUrdu ? `${cat.number}. ${cat.titleUrdu}` : `${cat.number}. ${cat.titleEn}`}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Lessons Display */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">{activeCategoryMeta.emoji}</span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-arabic">
              {isUrdu ? activeCategoryMeta.titleUrdu : activeCategoryMeta.titleEn}
            </h3>
            <span className="text-xs text-slate-500 font-arabic">
              ({currentLessons.length} {isUrdu ? 'اسباق' : 'lessons'})
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-arabic hidden sm:block max-w-md text-end">
            {isUrdu ? activeCategoryMeta.shortDescUrdu : activeCategoryMeta.shortDescEn}
          </p>
        </div>

        {/* Lesson Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentLessons.map((lesson) => {
            const isCompleted = completedLessonIds.includes(lesson.id);

            return (
              <div
                key={lesson.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-3">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 border border-indigo-200/60 dark:border-indigo-800 text-[11px] font-bold font-arabic">
                        {isUrdu ? lesson.tagUrdu : lesson.tagEn}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1 font-arabic">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{lesson.estimatedMinutes} {isUrdu ? 'منٹ' : 'mins'}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                      <Sparkles className="w-3 h-3" />
                      <span>+{lesson.points} {isUrdu ? 'پوائنٹس' : 'pts'}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-arabic group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition leading-snug">
                      {isUrdu ? lesson.titleUrdu : lesson.titleEn}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-arabic line-clamp-2 leading-relaxed">
                      {isUrdu ? lesson.subtitleUrdu : lesson.subtitleEn}
                    </p>
                  </div>

                  {/* Key Idea Quote snippet */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-3 border border-slate-100 dark:border-slate-800 text-xs font-arabic text-slate-700 dark:text-slate-300 italic flex items-start gap-2">
                    <span className="text-amber-500 font-bold text-sm shrink-0">“</span>
                    <span className="line-clamp-2">
                      {isUrdu ? lesson.keyIdeaUrdu : lesson.keyIdeaEn}
                    </span>
                  </div>

                  {/* Concrete Action Step Preview */}
                  <div className="bg-emerald-50/80 dark:bg-emerald-950/40 rounded-xl p-2.5 border border-emerald-200/60 dark:border-emerald-800/60 flex items-start gap-2 text-xs font-arabic text-emerald-950 dark:text-emerald-200">
                    <Target className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-1 font-semibold">
                      <strong>{isUrdu ? '۲۴ گھنٹے کا قدم:' : '24h Action:'}</strong>{' '}
                      {isUrdu ? lesson.applyActionUrdu : lesson.applyActionEn}
                    </span>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-arabic">
                    {isCompleted ? (
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{isUrdu ? 'مکمل شدہ ✓' : 'Completed ✓'}</span>
                      </span>
                    ) : (
                      <span className="text-slate-500 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <span>{isUrdu ? '۵ مراحل: سیکھیں • مشق • عمل' : '5 Steps: Learn • Practice • Apply'}</span>
                      </span>
                    )}
                  </div>

                  <button
                    id={`start-life-lesson-${lesson.id}`}
                    onClick={() => setActiveModalLesson(lesson)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black font-arabic transition flex items-center gap-1.5 shadow-2xs ${
                      isCompleted
                        ? 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white active:scale-98'
                    }`}
                  >
                    <span>{isCompleted ? (isUrdu ? 'دوبارہ دیکھیں' : 'Review') : (isUrdu ? 'سبق شروع کریں' : 'Start Lesson')}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal */}
      {activeModalLesson && (
        <PracticalLifeSkillModal
          lesson={activeModalLesson}
          language={language}
          userProfile={userProfile}
          onClose={() => setActiveModalLesson(null)}
          onCompleteLesson={(lessonId, points, reflectionText) => {
            onCompleteLifeLesson(lessonId, points, reflectionText);
          }}
          onOpenAITeacher={onOpenAITeacher}
        />
      )}
    </section>
  );
};
