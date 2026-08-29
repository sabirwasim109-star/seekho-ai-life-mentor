import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  TrendingUp, 
  Layers, 
  Heart, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Zap, 
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language, UserProfile, Course } from '../types';
import { FUTURE_GENERATION_TOPICS, FutureGenerationTopic } from '../data/lifeEcosystemData';

interface FutureGenerationsSectionProps {
  language: Language;
  userProfile: UserProfile;
  onSelectCourseById?: (courseId: string) => void;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
  onNavigateToTab?: (tab: any) => void;
}

export const FutureGenerationsSection: React.FC<FutureGenerationsSectionProps> = ({
  language,
  userProfile,
  onSelectCourseById,
  onOpenAITeacherWithPrompt,
  onNavigateToTab,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'ShieldCheck': return ShieldCheck;
      case 'Compass': return Compass;
      case 'TrendingUp': return TrendingUp;
      case 'Layers': return Layers;
      default: return Heart;
    }
  };

  return (
    <div 
      id="future-generations-section"
      className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border border-slate-200/90 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-black shadow-xs shrink-0">
            <Sparkles className="w-5 h-5 text-amber-600 stroke-[2.5]" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic tracking-tight leading-tight">
                {isUrdu ? 'آنے والی نسل کے لیے (Future Readiness)' : 'For Future Generations'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold font-arabic">
                {isUrdu ? 'مستقبل کے ہنر' : 'Future Skills'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-arabic mt-0.5">
              {isUrdu 
                ? 'نوجوانوں اور بچوں کو AI، ڈیجیٹل اکانومی اور جدید دنیا کے چیلنجز کے لیے تیار کرنے کا جامع فریم ورک' 
                : 'Empowering youth and children with AI literacy, critical thinking, and resilient life skills'}
            </p>
          </div>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold font-arabic">
          2026 – 2035 {isUrdu ? 'ویژن' : 'Vision'}
        </span>
      </div>

      {/* 6 Key Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FUTURE_GENERATION_TOPICS.map((topic) => {
          const Icon = getTopicIcon(topic.icon);
          const isExpanded = selectedTopicId === topic.id;

          return (
            <div
              key={topic.id}
              id={`future-topic-card-${topic.id}`}
              className={`rounded-2xl p-4.5 border transition-all duration-200 flex flex-col justify-between gap-3 ${
                isExpanded 
                  ? 'bg-gradient-to-br from-emerald-50 via-white to-amber-50/50 border-2 border-emerald-500 shadow-md' 
                  : 'bg-slate-50 hover:bg-white hover:shadow-sm border-slate-200'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold shadow-2xs shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>

                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white text-emerald-900 border border-emerald-200 font-bold font-arabic">
                    {isUrdu ? topic.tagUrdu : topic.tagEn}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic leading-snug">
                    {isUrdu ? topic.titleUrdu : topic.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed mt-1">
                    {isUrdu ? topic.subtitleUrdu : topic.subtitleEn}
                  </p>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="pt-2 border-t border-slate-200/80 space-y-2.5 text-xs sm:text-sm font-arabic">
                    <div className="bg-white rounded-xl p-2.5 border border-slate-200 space-y-1">
                      <strong className="text-emerald-900 block">{isUrdu ? 'کیوں اہم ہے؟' : 'Why is it important?'}</strong>
                      <p className="text-slate-700 leading-relaxed">{isUrdu ? topic.importanceUrdu : topic.importanceEn}</p>
                    </div>

                    <div className="space-y-1">
                      <strong className="text-slate-900 block">{isUrdu ? 'شامل مہارتیں:' : 'Skills included:'}</strong>
                      <div className="flex flex-wrap gap-1.5">
                        {(isUrdu ? topic.skillsIncludedUrdu : topic.skillsIncludedEn).map((sk, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-lg bg-emerald-100/70 text-emerald-900 text-xs font-medium">
                            ✓ {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-2.5 border border-amber-200 text-amber-950 space-y-0.5">
                      <strong className="block text-amber-900">🎯 {isUrdu ? 'آج کا ابتدائی قدم:' : 'Starter Action:'}</strong>
                      <p className="leading-relaxed">{isUrdu ? topic.starterActionUrdu : topic.starterActionEn}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-200/60 text-xs sm:text-sm font-arabic">
                <button
                  onClick={() => setSelectedTopicId(isExpanded ? null : topic.id)}
                  className="text-emerald-800 hover:text-emerald-900 font-bold flex items-center gap-1"
                >
                  <span>{isExpanded ? (isUrdu ? 'کم دکھائیں' : 'Show Less') : (isUrdu ? 'تفصیل و اسکلز' : 'View Details')}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {topic.linkedCourseId && onSelectCourseById ? (
                  <button
                    onClick={() => onSelectCourseById(topic.linkedCourseId!)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold transition flex items-center gap-1 shadow-2xs"
                  >
                    <span>{isUrdu ? 'سیکھنا شروع کریں' : 'Start Learning'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                ) : onOpenAITeacherWithPrompt ? (
                  <button
                    onClick={() => onOpenAITeacherWithPrompt(isUrdu ? `مجھے ${topic.titleUrdu} سیکھنے کا روڈ میپ بتائیں۔` : `Teach me the roadmap for ${topic.titleEn}.`)}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition flex items-center gap-1"
                  >
                    <span>{isUrdu ? 'گائیڈ حاصل کریں' : 'Get Guide'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
