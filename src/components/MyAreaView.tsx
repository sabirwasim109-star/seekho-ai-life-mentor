import React, { useState, useEffect, useMemo } from 'react';
import { 
  MapPin, 
  Droplets, 
  Laptop, 
  TreePine, 
  HeartPulse, 
  Zap, 
  Briefcase, 
  GraduationCap,
  Users,
  CheckCircle2,
  Circle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Compass,
  HelpCircle,
  Lightbulb,
  HandHeart,
  Flame,
  ChevronDown,
  ChevronUp,
  Award
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { COMMUNITY_PROBLEMS_DATA, CommunityProblemCategory } from '../data/communityProblemsData';

interface MyAreaViewProps {
  language: Language;
  userProfile: UserProfile;
}

export const MyAreaView: React.FC<MyAreaViewProps> = ({
  language,
  userProfile,
}) => {
  const isUrdu = language === 'ur';

  // Area location state - Dobay, Barnala, Azad Kashmir as primary prototype
  const [selectedCountry, setSelectedCountry] = useState('Pakistan');
  const [selectedRegion, setSelectedRegion] = useState('Azad Kashmir');
  const [selectedCity, setSelectedCity] = useState('Barnala / Bhimber');
  const [selectedVillage, setSelectedVillage] = useState('Dobay (ڈوبے)');

  // Active selected problem for 5-step action plan
  const [activeProblemId, setActiveProblemId] = useState<string>('prob-education');

  // Category filter state ('all' or specific id)
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Track completed action plan steps per problem in local state & localStorage
  const [problemStepsProgress, setProblemStepsProgress] = useState<Record<string, number[]>>(() => {
    try {
      const saved = localStorage.getItem('seekho_community_problems_progress');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    // Default initial step for first prototype problem
    return {
      'prob-education': [1],
      'prob-water': [1],
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem('seekho_community_problems_progress', JSON.stringify(problemStepsProgress));
    } catch (e) {
      // ignore
    }
  }, [problemStepsProgress]);

  const activeProblem = useMemo(() => {
    return (
      COMMUNITY_PROBLEMS_DATA.find((p) => p.id === activeProblemId) ||
      COMMUNITY_PROBLEMS_DATA[0]
    );
  }, [activeProblemId]);

  const handleToggleStep = (problemId: string, stepNumber: number) => {
    setProblemStepsProgress((prev) => {
      const currentList = prev[problemId] || [];
      const updatedList = currentList.includes(stepNumber)
        ? currentList.filter((s) => s !== stepNumber)
        : [...currentList, stepNumber];
      return {
        ...prev,
        [problemId]: updatedList,
      };
    });
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'HeartPulse': return HeartPulse;
      case 'Droplets': return Droplets;
      case 'Sparkles': return Sparkles;
      case 'TreePine': return TreePine;
      case 'Briefcase': return Briefcase;
      case 'Laptop': return Laptop;
      case 'Zap': return Zap;
      default: return MapPin;
    }
  };

  const activeProblemCompletedSteps = problemStepsProgress[activeProblem.id] || [];
  const activeCompletedCount = activeProblemCompletedSteps.length;
  const activeProgressPercent = Math.round((activeCompletedCount / 5) * 100);

  const filteredProblems = useMemo(() => {
    if (filterCategory === 'all') return COMMUNITY_PROBLEMS_DATA;
    return COMMUNITY_PROBLEMS_DATA.filter((p) => p.id === filterCategory);
  }, [filterCategory]);

  return (
    <div className="space-y-6 pb-24 max-w-5xl mx-auto px-3 sm:px-6 pt-2">
      {/* 1. Header Banner: Pilot Area - Dobay, Barnala, Azad Kashmir */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-5 sm:p-7 shadow-lg border border-emerald-500/20 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black flex items-center gap-1.5 font-arabic">
              <MapPin className="w-3.5 h-3.5" />
              {isUrdu ? 'پائلٹ پروجیکٹ علاقہ' : 'Pilot Community Project'}
            </span>
            <span className="text-xs text-emerald-300 font-bold font-arabic">
              {isUrdu ? 'تعلیمی و برادری مرکز' : 'Educational & Community Action'}
            </span>
          </div>

          <span className="text-[11px] text-slate-300 bg-white/10 px-3 py-0.5 rounded-full font-medium">
            {isUrdu ? 'علم → مشق → خدمت' : 'Learn → Practice → Serve'}
          </span>
        </div>

        <div>
          <h1 className="text-xl sm:text-3xl font-black text-white font-arabic tracking-tight">
            {isUrdu ? 'میرا علاقہ: ڈوبے، برنالہ، آزاد کشمیر' : 'My Area: Dobay, Barnala, Azad Kashmir'}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200/90 font-arabic mt-1 leading-relaxed">
            {isUrdu
              ? 'اپنے گاؤں اور محلے کے حقیقی مسائل کو سمجھیں اور اپنی سیکھی ہوئی Skills کے ذریعے مثبت، پرامن اور تعلیمی کردار ادا کریں۔'
              : 'Understand local community challenges and apply your practical skills to make a constructive difference.'}
          </p>
        </div>

        {/* Location Dropdowns Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-white/10">
          <div>
            <label className="text-[10px] uppercase font-bold text-emerald-300 block mb-1">
              {isUrdu ? 'ملک' : 'Country'}
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-white/10 text-white text-xs font-semibold p-2 rounded-xl border border-white/20 focus:outline-none"
            >
              <option value="Pakistan" className="text-slate-900">Pakistan (پاکستان)</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-emerald-300 block mb-1">
              {isUrdu ? 'خطہ / صوبہ' : 'Region'}
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-white/10 text-white text-xs font-semibold p-2 rounded-xl border border-white/20 focus:outline-none"
            >
              <option value="Azad Kashmir" className="text-slate-900">Azad Kashmir (آزاد کشمیر)</option>
              <option value="Punjab" className="text-slate-900">Punjab (پنجاب)</option>
              <option value="Sindh" className="text-slate-900">Sindh (سندھ)</option>
              <option value="KPK" className="text-slate-900">KPK (خیبر پختونخوا)</option>
              <option value="Balochistan" className="text-slate-900">Balochistan (بلوچستان)</option>
              <option value="Gilgit-Baltistan" className="text-slate-900">Gilgit-Baltistan (گلگت بلتستان)</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-emerald-300 block mb-1">
              {isUrdu ? 'شہر / تحصیل' : 'City/Tehsil'}
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-white/10 text-white text-xs font-semibold p-2 rounded-xl border border-white/20 focus:outline-none"
            >
              <option value="Barnala / Bhimber" className="text-slate-900">Barnala / Bhimber (برنالہ / بھمبر)</option>
              <option value="Mirpur" className="text-slate-900">Mirpur (میرپور)</option>
              <option value="Kotli" className="text-slate-900">Kotli (کوٹلی)</option>
              <option value="Rawalakot" className="text-slate-900">Rawalakot (راولاکوٹ)</option>
              <option value="Muzaffarabad" className="text-slate-900">Muzaffarabad (مظفرآباد)</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-emerald-300 block mb-1">
              {isUrdu ? 'گاؤں / محلہ' : 'Village/Area'}
            </label>
            <select
              value={selectedVillage}
              onChange={(e) => setSelectedVillage(e.target.value)}
              className="w-full bg-white/10 text-white text-xs font-semibold p-2 rounded-xl border border-white/20 focus:outline-none"
            >
              <option value="Dobay (ڈوبے)" className="text-slate-900">Dobay (ڈوبے)</option>
              <option value="Dhandri (ڈھانڈری)" className="text-slate-900">Dhandri (ڈھانڈری)</option>
              <option value="Watala (وٹالہ)" className="text-slate-900">Watala (وٹالہ)</option>
              <option value="Barnala Khas (برنالہ خاص)" className="text-slate-900">Barnala Khas (برنالہ خاص)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. Active 5-Step Community Action Plan Box (for the currently selected problem) */}
      <div 
        id="active-community-action-plan"
        className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-600/80 shadow-md space-y-6 scroll-mt-6"
      >
        {/* Header with Problem info and Progress */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black flex items-center gap-1.5 font-arabic">
                <Compass className="w-3.5 h-3.5 text-emerald-700" />
                {isUrdu ? '۵ مرحلہ وار عملی لائحہ عمل' : '5-Step Community Action Plan'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold font-arabic">
                {isUrdu ? activeProblem.nameUrdu : activeProblem.nameEn}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-arabic">
              {isUrdu 
                ? `${activeProblem.nameUrdu} کا عملی حل: ۵ قدم`
                : `Action Plan for ${activeProblem.nameEn}`}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-arabic">
              {isUrdu
                ? `علاقہ: ${activeProblem.locationUrdu} — ہر مرحلے پر عمل کر کے مکمل کا بٹن دبائیں:`
                : `Area: ${activeProblem.locationEn} — Complete each step with your community:`}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 w-full sm:w-auto shrink-0 flex flex-col sm:items-end">
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full">
              <span className="text-xs font-black text-slate-700 font-arabic">
                {isUrdu ? `${activeCompletedCount} از ۵ مراحل مکمل` : `${activeCompletedCount} of 5 Steps Done`}
              </span>
              <span className="text-sm font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-lg">
                {activeProgressPercent}%
              </span>
            </div>

            <div className="w-full sm:w-40 bg-slate-200 h-2.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${activeProgressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* The 5 Steps */}
        <div className="space-y-3.5">
          {activeProblem.actionSteps.map((step) => {
            const isDone = activeProblemCompletedSteps.includes(step.stepNumber);

            return (
              <div
                key={step.stepNumber}
                id={`problem-step-${activeProblem.id}-${step.stepNumber}`}
                className={`p-4 sm:p-5 rounded-2xl border-2 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                  isDone
                    ? 'bg-emerald-50/60 border-emerald-500/80 shadow-2xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Step Info */}
                <div className="flex items-start gap-3.5 flex-1">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 transition ${
                      isDone
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {isDone ? <Check className="w-5 h-5 stroke-[3]" /> : step.stepNumber}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm sm:text-base font-black text-slate-900 font-arabic">
                        {isUrdu ? step.titleUrdu : step.titleEn}
                      </h3>
                      {isDone && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-emerald-200 text-emerald-950 font-arabic">
                          {isUrdu ? 'مکمل شدہ ✓' : 'Completed ✓'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 font-arabic leading-relaxed">
                      <strong className="text-emerald-900 font-bold">
                        {isUrdu ? 'عملی کام: ' : 'Practical Task: '}
                      </strong>
                      {isUrdu ? step.taskUrdu : step.taskEn}
                    </p>

                    <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100 font-arabic">
                      💡 {isUrdu ? step.tipUrdu : step.tipEn}
                    </div>
                  </div>
                </div>

                {/* "مکمل ہوگیا" Button */}
                <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <button
                    type="button"
                    id={`btn-done-problem-${activeProblem.id}-step-${step.stepNumber}`}
                    onClick={() => handleToggleStep(activeProblem.id, step.stepNumber)}
                    className={`w-full md:w-auto px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-xs font-arabic ${
                      isDone
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300'
                    }`}
                  >
                    {isDone ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                        <span>{isUrdu ? 'مکمل ہوگیا' : 'Completed'}</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4 text-emerald-700" />
                        <span>{isUrdu ? 'مکمل ہوگیا' : 'Mark as Done'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. The 8 Local Problem Categories Section */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 font-arabic">
              {isUrdu ? 'علاقائی مسائل کے ۸ اہم شعبہ جات' : '8 Local Community Problem Categories'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-arabic mt-0.5">
              {isUrdu
                ? 'کسی بھی مسئلے کی تفصیل دیکھیں اور "اس مسئلے پر کام کریں" کا بٹن دبا کر عملی منصوبہ شروع کریں:'
                : 'Explore community challenges and click "Work on this issue" to launch your action plan:'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1 rounded-full text-xs font-bold font-arabic transition ${
                filterCategory === 'all'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {isUrdu ? 'تمام شعبے (۸)' : 'All 8 Categories'}
            </button>
          </div>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProblems.map((prob) => {
            const Icon = getCategoryIcon(prob.iconName);
            const isCurrentActive = activeProblemId === prob.id;
            const completedCount = (problemStepsProgress[prob.id] || []).length;
            const hasProgress = completedCount > 0;

            return (
              <div
                key={prob.id}
                id={`problem-card-${prob.id}`}
                className={`bg-white rounded-3xl p-5 border-2 transition-all flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md ${
                  isCurrentActive
                    ? 'border-emerald-600 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-3.5">
                  {/* Category Badge & Progress */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 text-xs font-black text-emerald-950 bg-emerald-100 px-3 py-1 rounded-full font-arabic">
                      <Icon className="w-4 h-4 text-emerald-700" />
                      <span>{isUrdu ? prob.nameUrdu : prob.nameEn}</span>
                      <span className="text-[10px] text-emerald-800">#{prob.categoryNumber}</span>
                    </span>

                    {hasProgress ? (
                      <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-arabic">
                        {isUrdu ? `${completedCount}/۵ مکمل` : `${completedCount}/5 Done`}
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-arabic">
                        {isUrdu ? prob.tagUrdu : prob.tagEn}
                      </span>
                    )}
                  </div>

                  {/* 4 Required Questions & Answers */}
                  <div className="space-y-2.5 pt-1">
                    {/* Q1: مسئلہ کیا ہے؟ */}
                    <div className="bg-rose-50/70 rounded-2xl p-3 border border-rose-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-rose-900 font-arabic">
                        <HelpCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>{isUrdu ? 'مسئلہ کیا ہے؟' : 'What is the problem?'}</span>
                      </div>
                      <p className="text-xs text-slate-700 font-arabic leading-relaxed">
                        {isUrdu ? prob.whatIsProblemUrdu : prob.whatIsProblemEn}
                      </p>
                    </div>

                    {/* Q2: میں اس مسئلے کو بہتر سمجھنے کے لیے کیا سیکھ سکتا ہوں؟ */}
                    <div className="bg-amber-50/70 rounded-2xl p-3 border border-amber-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 font-arabic">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{isUrdu ? 'میں اس مسئلے کو بہتر سمجھنے کے لیے کیا سیکھ سکتا ہوں؟' : 'What can I learn to understand this?'}</span>
                      </div>
                      <p className="text-xs text-slate-700 font-arabic leading-relaxed">
                        {isUrdu ? prob.whatToLearnUrdu : prob.whatToLearnEn}
                      </p>
                    </div>

                    {/* Q3: میں اپنی Skill سے کیا چھوٹا کام کر سکتا ہوں؟ */}
                    <div className="bg-emerald-50/70 rounded-2xl p-3 border border-emerald-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-emerald-950 font-arabic">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{isUrdu ? 'میں اپنی Skill سے کیا چھوٹا کام کر سکتا ہوں؟' : 'What small task can I do with my skill?'}</span>
                      </div>
                      <p className="text-xs text-slate-700 font-arabic leading-relaxed">
                        {isUrdu ? prob.mySkillActionUrdu : prob.mySkillActionEn}
                      </p>
                    </div>

                    {/* Q4: میں دوسروں کے ساتھ مل کر کیا کر سکتا ہوں؟ */}
                    <div className="bg-sky-50/70 rounded-2xl p-3 border border-sky-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-black text-sky-950 font-arabic">
                        <Users className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                        <span>{isUrdu ? 'میں دوسروں کے ساتھ مل کر کیا کر سکتا ہوں؟' : 'What can I do together with others?'}</span>
                      </div>
                      <p className="text-xs text-slate-700 font-arabic leading-relaxed">
                        {isUrdu ? prob.togetherActionUrdu : prob.togetherActionEn}
                      </p>
                    </div>
                  </div>
                </div>

                {/* "اس مسئلے پر کام کریں" Button */}
                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    id={`btn-work-on-${prob.id}`}
                    onClick={() => {
                      setActiveProblemId(prob.id);
                      const el = document.getElementById('active-community-action-plan');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-full py-3 px-4 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xs font-arabic ${
                      isCurrentActive
                        ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <Compass className="w-4 h-4" />
                    <span>{isUrdu ? 'اس مسئلے پر کام کریں' : 'Work on this issue'}</span>
                    {isUrdu ? <ArrowLeft className="w-4 h-4 mr-1" /> : <ArrowRight className="w-4 h-4 ml-1" />}
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
