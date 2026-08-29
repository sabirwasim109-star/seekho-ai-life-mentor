import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  BookOpen, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Check, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  UserPlus
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { DEFAULT_FAMILY_GOALS, FamilyGoalItem } from '../data/lifeEcosystemData';

interface FamilyGrowthHubSectionProps {
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacher?: (prompt?: string) => void;
}

export const FamilyGrowthHubSection: React.FC<FamilyGrowthHubSectionProps> = ({
  language,
  userProfile,
  onOpenAITeacher,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [familyGoals, setFamilyGoals] = useState<FamilyGoalItem[]>(DEFAULT_FAMILY_GOALS);
  const [completedGoalIds, setCompletedGoalIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`seekho_family_goals_${userProfile.userId || 'guest'}`);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });

  const handleToggleFamilyGoal = (goalId: string) => {
    const isDone = !completedGoalIds[goalId];
    const updated = { ...completedGoalIds, [goalId]: isDone };
    setCompletedGoalIds(updated);

    try {
      localStorage.setItem(`seekho_family_goals_${userProfile.userId || 'guest'}`, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const completedCount = familyGoals.filter(g => completedGoalIds[g.id]).length;

  return (
    <div 
      id="family-growth-hub-section"
      className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border border-slate-200/90 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-black shadow-xs shrink-0">
            <Heart className="w-5 h-5 stroke-[2.5]" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic tracking-tight leading-tight">
                {isUrdu ? 'میرا خاندان (Family Growth & Goals)' : 'My Family Growth Hub'}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold font-arabic">
                {isUrdu ? 'مشترکہ اہداف' : 'Shared Goals'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-arabic mt-0.5">
              {isUrdu 
                ? 'خاندان کو جوڑنے، والدین کی خدمت، بچوں کی اخلاقی تربیت اور گھریلو سکون کا مشترکہ فریم ورک' 
                : 'Fostering family connection, parental respect, youth guidance, and shared household peace'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold font-arabic px-3 py-1.5 rounded-full bg-rose-50 text-rose-900 border border-rose-200">
          <Users className="w-4 h-4 text-rose-700" />
          <span>{completedCount} {isUrdu ? 'خاندانی مقاصد مکمل' : 'Family Goals Met'}</span>
        </div>
      </div>

      {/* Family Pillars Architecture: Parents, Youth, Children, Shared Routine */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs sm:text-sm font-arabic">
        <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-3 space-y-1">
          <span className="text-xl block">🧓👵</span>
          <strong className="text-rose-950 font-bold block">{isUrdu ? 'والدین کی خدمت' : 'Parents Care'}</strong>
          <span className="text-xs text-rose-800">{isUrdu ? 'دعا و احترام' : 'Respect & Duas'}</span>
        </div>

        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-3 space-y-1">
          <span className="text-xl block">👦👧</span>
          <strong className="text-amber-950 font-bold block">{isUrdu ? 'بچوں کی تربیت' : 'Children Guidance'}</strong>
          <span className="text-xs text-amber-800">{isUrdu ? 'تعلیم و اچھے اخلاق' : 'Values & Skills'}</span>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 space-y-1">
          <span className="text-xl block">🤝🏡</span>
          <strong className="text-emerald-950 font-bold block">{isUrdu ? 'بہن بھائی' : 'Siblings Love'}</strong>
          <span className="text-xs text-emerald-800">{isUrdu ? 'باہمی تعاون' : 'Mutual Support'}</span>
        </div>

        <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-3 space-y-1">
          <span className="text-xl block">💰🌱</span>
          <strong className="text-sky-950 font-bold block">{isUrdu ? 'مالی بچت' : 'Family Finance'}</strong>
          <span className="text-xs text-sky-800">{isUrdu ? 'مشاورت و برکت' : 'Budget & Relief'}</span>
        </div>
      </div>

      {/* Shared Family Action Goals List */}
      <div className="space-y-3">
        <span className="text-xs sm:text-sm font-bold text-slate-700 font-arabic block">
          {isUrdu ? 'مشترکہ خاندانی اہداف اور روزمرہ مشقیں:' : 'Active Family Growth Goals:'}
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {familyGoals.map((goal) => {
            const isDone = Boolean(completedGoalIds[goal.id]);

            return (
              <div
                key={goal.id}
                id={`family-goal-card-${goal.id}`}
                className={`rounded-2xl p-4 border transition-all flex flex-col justify-between gap-3 ${
                  isDone 
                    ? 'bg-rose-50/60 border-rose-300 shadow-2xs' 
                    : 'bg-slate-50 hover:bg-white border-slate-200'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-white text-rose-800 border border-rose-200 font-bold font-arabic">
                      {isUrdu ? goal.categoryUrdu : goal.categoryEn} • {isUrdu ? goal.targetMemberUrdu : goal.targetMemberEn}
                    </span>

                    <span className="text-xs text-slate-500 font-arabic">
                      ⏱ {isUrdu ? goal.frequencyUrdu : goal.frequencyEn}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => handleToggleFamilyGoal(goal.id)}
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isDone 
                          ? 'bg-rose-600 border-rose-700 text-white shadow-xs' 
                          : 'border-slate-300 hover:border-rose-400 bg-white'
                      }`}
                      title={isUrdu ? 'مکمل نشان لگائیں' : 'Toggle goal'}
                    >
                      {isDone && <Check className="w-4 h-4 stroke-[3]" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <h4 className={`text-base font-black font-arabic leading-snug ${isDone ? 'text-rose-900 line-through' : 'text-slate-900'}`}>
                        {isUrdu ? goal.titleUrdu : goal.titleEn}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed mt-1">
                        {isUrdu ? goal.actionUrdu : goal.actionEn}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between gap-2 text-xs font-arabic text-slate-500">
                  <span className="text-emerald-800 font-medium">
                    ✨ {isUrdu ? goal.impactUrdu : goal.impactEn}
                  </span>

                  <button
                    onClick={() => handleToggleFamilyGoal(goal.id)}
                    className={`font-bold px-2.5 py-1 rounded-lg transition ${isDone ? 'text-rose-700 hover:underline' : 'bg-rose-100 text-rose-800 hover:bg-rose-200'}`}
                  >
                    {isDone ? (isUrdu ? 'مکمل ہے' : 'Done') : (isUrdu ? 'مکمل کریں' : 'Complete')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
