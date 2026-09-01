import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Cpu, 
  Palette, 
  Play, 
  MessageSquare, 
  TrendingUp, 
  Share2, 
  Laptop, 
  Globe, 
  Sprout, 
  Store, 
  HeartHandshake, 
  ShieldCheck, 
  AlertCircle, 
  Clock, 
  Bot, 
  Layers, 
  Check, 
  Flame, 
  PlusCircle,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { Language, UserProfile, SkillOpportunityPathway } from '../types';
import { SKILL_OPPORTUNITY_PATHWAYS_DATA, getPathwayByCourseOrSkill } from '../data/skillOpportunityData';
import { AudioReaderButton } from './AudioSpeechControls';
import { stopSpeaking } from '../utils/speech';

interface SkillOpportunityPathModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  userProfile: UserProfile;
  initialSkillId?: string;
  initialCategoryKey?: string;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
  onAddToDailyMission?: (taskTitle: string, minutes: number) => void;
  onSelectCourse?: (courseId: string) => void;
  onNavigateToCourse?: (courseId: string) => void;
  onCompleteProject?: (pathwayId: string, projectId: string, points?: number) => void;
}

export const SkillOpportunityPathModal: React.FC<SkillOpportunityPathModalProps> = ({
  isOpen,
  onClose,
  language,
  userProfile,
  initialSkillId,
  initialCategoryKey,
  onOpenAITeacherWithPrompt,
  onAddToDailyMission,
  onSelectCourse,
  onNavigateToCourse,
  onCompleteProject,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  // Initialize selected pathway
  const [selectedPathwayId, setSelectedPathwayId] = useState<string>(() => {
    if (initialSkillId) {
      const match = getPathwayByCourseOrSkill(initialSkillId);
      return match.id;
    }
    if (initialCategoryKey) {
      const match = SKILL_OPPORTUNITY_PATHWAYS_DATA.find((p) => p.categoryKey === initialCategoryKey);
      if (match) return match.id;
    }
    return SKILL_OPPORTUNITY_PATHWAYS_DATA[0].id;
  });

  const [activeStageTab, setActiveStageTab] = useState<'all' | 'learn' | 'build' | 'apply' | 'earn'>('all');
  const [completedProjects, setCompletedProjects] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('seekho_completed_pathway_projects');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });
  const [copiedAction, setCopiedAction] = useState(false);

  if (!isOpen) return null;

  const currentPathway = 
    SKILL_OPPORTUNITY_PATHWAYS_DATA.find((p) => p.id === selectedPathwayId) || 
    SKILL_OPPORTUNITY_PATHWAYS_DATA[0];

  const getPathwayIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Palette': return Palette;
      case 'Play': return Play;
      case 'MessageSquare': return MessageSquare;
      case 'TrendingUp': return TrendingUp;
      case 'Share2': return Share2;
      case 'Laptop': return Laptop;
      case 'Globe': return Globe;
      case 'Sprout': return Sprout;
      case 'Store': return Store;
      case 'HeartHandshake': return HeartHandshake;
      default: return Sparkles;
    }
  };

  const IconComp = getPathwayIcon(currentPathway.icon);

  const handleToggleProjectComplete = (pathwayId: string) => {
    const nextState = !completedProjects[pathwayId];
    const updated = { ...completedProjects, [pathwayId]: nextState };
    setCompletedProjects(updated);
    try {
      localStorage.setItem('seekho_completed_pathway_projects', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleConsultAITeacher = () => {
    const prompt = isUrdu
      ? `السلام علیکم! میں نے "${currentPathway.skillTitleUrdu}" کی بنیاد پر اپنا عملی پروجیکٹ شروع کرنا ہے۔ مجھے بتائیں کہ میں آج کا سب سے پہلا قدم کیسے اٹھاؤں اور اگلے مراحل کیسے طے کروں؟`
      : `Hello! I want to start my practical project based on "${currentPathway.skillTitleEn}". How do I take my very first step today and navigate the next stages?`;
    
    onClose();
    if (onOpenAITeacherWithPrompt) {
      onOpenAITeacherWithPrompt(prompt);
    }
  };

  const isCurrentProjectDone = !!completedProjects[currentPathway.id];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 pt-10 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-2xl border border-white/20 text-emerald-100 backdrop-blur-xs">
              <IconComp className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-200 border border-amber-300/30">
                  {isUrdu ? 'ہنر سے موقع کا راستہ' : 'Skill to Opportunity Path'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-white border border-white/15">
                  {isUrdu ? 'ڈیمو / نمونہ گائیڈ' : 'Demo / Sample'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black mt-1 text-white">
                {isUrdu ? currentPathway.skillTitleUrdu : currentPathway.skillTitleEn}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <AudioReaderButton
              id={`pathway-tts-${currentPathway.id}`}
              text={`${isUrdu ? currentPathway.skillTitleUrdu : currentPathway.skillTitleEn}. ${isUrdu ? currentPathway.categoryUrdu : currentPathway.categoryEn}. ${isUrdu ? 'پہلا قدم:' : 'First Step:'} ${isUrdu ? currentPathway.stages.learn.actionUrdu : currentPathway.stages.learn.actionEn}. ${isUrdu ? 'عملی پروجیکٹ:' : 'Portfolio Project:'} ${isUrdu ? currentPathway.stages.build.projectDeliverableUrdu : currentPathway.stages.build.projectDeliverableEn}. ${isUrdu ? 'مواقع اور ارننگ:' : 'Opportunity:'} ${isUrdu ? currentPathway.stages.earn.titleUrdu : currentPathway.stages.earn.titleEn}`}
              language={language}
              variant="header"
              size="md"
              showLabel={true}
              labelUr="پڑھ کے سنائیں"
              labelEn="Listen"
            />

            <button
              id="close-pathway-modal-btn"
              type="button"
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Skill Selector Carousel / Horizontal Scroll */}
        <div className="bg-slate-50/90 border-b border-slate-200 p-2 sm:px-4 overflow-x-auto scrollbar-none shrink-0 flex items-center gap-2">
          {SKILL_OPPORTUNITY_PATHWAYS_DATA.map((pathway) => {
            const ItemIcon = getPathwayIcon(pathway.icon);
            const isSelected = pathway.id === currentPathway.id;
            return (
              <button
                key={pathway.id}
                id={`pathway-select-${pathway.id}`}
                type="button"
                onClick={() => setSelectedPathwayId(pathway.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 border ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <ItemIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-300' : 'text-emerald-700'}`} />
                <span>{isUrdu ? pathway.categoryUrdu : pathway.categoryEn}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          
          {/* 4-Stage Visual Path: Learn -> Build -> Apply -> Earn */}
          <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-200/80">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-700" />
                <h3 className="text-sm sm:text-base font-black text-emerald-900">
                  {isUrdu ? '۴ مراحل پر مشتمل عملی سفر: سیکھیں ← بنائیں ← لاگو کریں ← کمائیں' : '4-Stage Journey: Learn → Build → Apply → Earn'}
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                {isUrdu ? 'قدم بہ قدم ترقی' : 'Step-by-Step Progress'}
              </span>
            </div>

            {/* Step Grid / Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Step 1: Learn */}
              <div className="bg-white rounded-xl p-3 border border-emerald-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-800">
                      {isUrdu ? currentPathway.stages.learn.titleUrdu : currentPathway.stages.learn.titleEn}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {currentPathway.stages.learn.estimatedDays} {isUrdu ? 'دن' : 'days'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isUrdu ? currentPathway.stages.learn.descUrdu : currentPathway.stages.learn.descEn}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] font-bold text-emerald-800">
                  🎯 {isUrdu ? currentPathway.stages.learn.actionUrdu : currentPathway.stages.learn.actionEn}
                </div>
              </div>

              {/* Step 2: Build */}
              <div className="bg-white rounded-xl p-3 border border-emerald-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-100 text-purple-800">
                      {isUrdu ? currentPathway.stages.build.titleUrdu : currentPathway.stages.build.titleEn}
                    </span>
                    <span className="text-[10px] text-purple-700 font-bold">
                      {isUrdu ? 'پروجیکٹ' : 'Project'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isUrdu ? currentPathway.stages.build.descUrdu : currentPathway.stages.build.descEn}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] font-bold text-purple-900">
                  📦 {isUrdu ? currentPathway.stages.build.projectDeliverableUrdu : currentPathway.stages.build.projectDeliverableEn}
                </div>
              </div>

              {/* Step 3: Apply */}
              <div className="bg-white rounded-xl p-3 border border-emerald-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-900">
                      {isUrdu ? currentPathway.stages.apply.titleUrdu : currentPathway.stages.apply.titleEn}
                    </span>
                    <span className="text-[10px] text-amber-700 font-bold">
                      {isUrdu ? 'برادری' : 'Community'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isUrdu ? currentPathway.stages.apply.descUrdu : currentPathway.stages.apply.descEn}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] font-bold text-amber-900">
                  🤝 {isUrdu ? currentPathway.stages.apply.actionUrdu : currentPathway.stages.apply.actionEn}
                </div>
              </div>

              {/* Step 4: Earn */}
              <div className="bg-white rounded-xl p-3 border border-emerald-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {isUrdu ? currentPathway.stages.earn.titleUrdu : currentPathway.stages.earn.titleEn}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold">
                      {isUrdu ? 'حلال روزگار' : 'Halal'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isUrdu ? currentPathway.stages.earn.descUrdu : currentPathway.stages.earn.descEn}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] font-bold text-emerald-900">
                  💼 {isUrdu ? currentPathway.stages.earn.startingRoleUrdu : currentPathway.stages.earn.startingRoleEn}
                </div>
              </div>
            </div>
          </div>

          {/* FOCUS CARD: Single Best Next Action Right Now */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-2xl p-4 sm:p-5 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-slate-950 fill-current" />
                <span className="text-xs font-black uppercase tracking-wider bg-black/10 px-2 py-0.5 rounded-md">
                  {isUrdu ? 'آج کا سب سے بہترین اگلا قدم' : 'Single Best Next Action Right Now'}
                </span>
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-950 leading-snug">
                {isUrdu ? currentPathway.bestNextActionUrdu : currentPathway.bestNextActionEn}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <button
                id="do-best-next-action-btn"
                type="button"
                onClick={handleConsultAITeacher}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-black rounded-xl transition flex items-center justify-center gap-2 shadow-xs"
              >
                <Bot className="w-4 h-4 text-amber-300" />
                <span>{isUrdu ? 'استاد سے رہنمائی لیں' : 'Ask AI Teacher'}</span>
              </button>
            </div>
          </div>

          {/* THE 6 CORE QUESTIONS & ANSWERS */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
              <span>{isUrdu ? 'ہنر اور مستقبل کی راہیں (۶ بنیادی سوالات کے جوابات)' : 'Skill & Opportunity Breakdown (6 Core Questions)'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Question 1: میں نے کیا سیکھا؟ */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-black shrink-0">
                    ۱
                  </span>
                  <span>{isUrdu ? 'میں نے کیا سیکھا؟' : '1. What Did I Learn?'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {isUrdu ? currentPathway.whatILearnedUrdu : currentPathway.whatILearnedEn}
                </p>
              </div>

              {/* Question 2: میں اس skill سے کیا بنا سکتا ہوں؟ */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-black shrink-0">
                    ۲
                  </span>
                  <span>{isUrdu ? 'میں اس skill سے کیا بنا سکتا ہوں؟' : '2. What Can I Build With This Skill?'}</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {(isUrdu ? currentPathway.whatICanBuildUrdu : currentPathway.whatICanBuildEn).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Question 3: اس کام کی ضرورت کہاں ہے؟ */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-black shrink-0">
                    ۳
                  </span>
                  <span>{isUrdu ? 'اس کام کی ضرورت کہاں ہے؟' : '3. Where is the Demand / Need for This?'}</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {(isUrdu ? currentPathway.whereIsDemandUrdu : currentPathway.whereIsDemandEn).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Question 4: آج میں کون سا چھوٹا project بنا سکتا ہوں؟ */}
              <div className="bg-white rounded-2xl p-4 border-2 border-emerald-300 shadow-xs bg-emerald-50/30">
                <div className="flex items-center justify-between text-emerald-900 font-bold text-sm mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-black shrink-0">
                      ۴
                    </span>
                    <span>{isUrdu ? 'آج میں کون سا چھوٹا project بنا سکتا ہوں؟' : '4. What Small Project Can I Build Today?'}</span>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 bg-emerald-200/80 text-emerald-900 rounded-md">
                    {isUrdu ? currentPathway.todaysSmallProjectUrdu.estimatedMinutes : currentPathway.todaysSmallProjectEn.estimatedMinutes} {isUrdu ? 'منٹ' : 'mins'}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-emerald-200 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {isUrdu ? currentPathway.todaysSmallProjectUrdu.title : currentPathway.todaysSmallProjectEn.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isUrdu ? currentPathway.todaysSmallProjectUrdu.description : currentPathway.todaysSmallProjectEn.description}
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] text-emerald-800 font-medium">
                      💡 {isUrdu ? currentPathway.todaysSmallProjectUrdu.actionStep : currentPathway.todaysSmallProjectEn.actionStep}
                    </span>
                    <button
                      id="toggle-project-complete-btn"
                      type="button"
                      onClick={() => handleToggleProjectComplete(currentPathway.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-black transition flex items-center gap-1.5 ${
                        isCurrentProjectDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-800'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isCurrentProjectDone ? (isUrdu ? 'مکمل شدہ' : 'Completed') : (isUrdu ? 'مکمل نشان لگائیں' : 'Mark Done')}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Question 5: اسے future income میں کیسے تبدیل کیا جا سکتا ہے؟ */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-black shrink-0">
                    ۵
                  </span>
                  <span>{isUrdu ? 'اسے future income میں کیسے تبدیل کیا جا سکتا ہے؟' : '5. How to Transform This into Future Income?'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {isUrdu ? currentPathway.futureIncomeTransformationUrdu : currentPathway.futureIncomeTransformationEn}
                </p>
                <div className="mt-2 text-[11px] text-slate-500 font-medium">
                  ⚖️ {isUrdu ? 'سچائی، معیار اور وقت کی پابندی آمدنی کے مستقل دروازے کھولتی ہے۔' : 'Honesty, quality, and punctuality create recurring income.'}
                </div>
              </div>

              {/* Question 6: اگلی کون سی skill سیکھنی چاہیے؟ */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-black shrink-0">
                    ۶
                  </span>
                  <span>{isUrdu ? 'اگلی کون سی skill سیکھنی چاہیے؟' : '6. What Next Skill Should I Learn?'}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
                  <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>{isUrdu ? currentPathway.nextSkillRecommendationUrdu.skillName : currentPathway.nextSkillRecommendationEn.skillName}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isUrdu ? currentPathway.nextSkillRecommendationUrdu.whyLearn : currentPathway.nextSkillRecommendationEn.whyLearn}
                  </p>
                  {currentPathway.nextSkillRecommendationUrdu.courseId && onSelectCourse && (
                    <button
                      id="view-next-skill-course-btn"
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectCourse(currentPathway.nextSkillRecommendationUrdu.courseId!);
                      }}
                      className="mt-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
                    >
                      <span>{isUrdu ? 'یہ کورس دیکھیں' : 'View this course'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ETHICAL & HALAL PRINCIPLES (No Guaranteed Income Disclaimer) */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-amber-950 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm">
              <span className="font-bold text-amber-900 block">
                {isUrdu ? 'شرعی و اخلاقی اصول اور حقیقت پسندی (Ethical Standards & Halal Earning):' : 'Ethical Principles & Zero False Promises:'}
              </span>
              <p className="text-amber-900/90 leading-relaxed">
                {isUrdu ? currentPathway.ethicalDisclaimerUrdu : currentPathway.ethicalDisclaimerEn}
              </p>
              <p className="text-[11px] text-amber-800 font-medium">
                {isUrdu 
                  ? 'سیکھو ایپ کبھی بھی کسی آمدنی کا فکسڈ یا غیر حقیقی وعدہ نہیں کرتی۔ تمام مواقع اور کردار صرف رہنمائی اور نمونے (Demo / Sample) کے لیے ہیں۔' 
                  : 'Seekho never promises guaranteed or get-rich-quick income. All pathways and roles are realistic educational samples for guidance.'}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 font-medium text-center sm:text-right">
            {isUrdu ? 'ایک وقت میں صرف ایک قدم اٹھائیں اور مستقل مزاجی سے جاری رکھیں۔' : 'Take one focused step at a time with consistency.'}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              id="pathway-modal-ai-ask-btn"
              type="button"
              onClick={handleConsultAITeacher}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4 text-amber-300" />
              <span>{isUrdu ? 'اس ہنر پر AI استاد سے پوچھیں' : 'Ask AI Teacher'}</span>
            </button>

            <button
              id="pathway-modal-close-btn"
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs sm:text-sm font-bold transition"
            >
              {isUrdu ? 'بند کریں' : 'Close'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
