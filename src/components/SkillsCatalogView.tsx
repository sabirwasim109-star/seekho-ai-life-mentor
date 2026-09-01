import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  BookOpen, 
  Clock, 
  Play, 
  Award,
  Layers,
  Cpu,
  Laptop,
  Briefcase,
  Globe,
  Palette,
  Sprout,
  Wrench,
  HeartHandshake,
  Users,
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  Flame,
  Volume2,
  HelpCircle,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Scissors,
  PlusCircle,
  FolderKanban,
  Zap,
  Filter,
  Grid,
  List,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Store,
  GraduationCap,
  Sun,
  Package,
  CheckSquare
} from 'lucide-react';
import { Course, Language, UserProfile } from '../types';
import { 
  SKILLS_MASTER_DATA, 
  SKILL_CATEGORIES_MASTER, 
  REAL_WORLD_PROJECT_TEMPLATES, 
  DAILY_PRACTICAL_CHALLENGES, 
  SkillMasterItem,
  searchSkillsMaster
} from '../data/skillsMasterData';
import { 
  SKILL_UNIVERSE_50_CATEGORIES, 
  SKILL_DOMAIN_GROUPS, 
  SKILL_UNIVERSE_ITEMS, 
  SkillUniverseCategory, 
  SkillUniverseItem, 
  searchSkillUniverse 
} from '../data/skillsUniverseData';
import { detectConversationalIntent } from '../data/skillConversationalIntent';
import { SkillDiscoveryModal } from './SkillDiscoveryModal';
import { SkillMasterDetailModal } from './SkillMasterDetailModal';
import { SkillUniverseDetailModal } from './SkillUniverseDetailModal';
import { SkillStackDetailModal } from './SkillStackDetailModal';
import { SKILL_STACKS_MASTER, SkillStackItem } from '../data/skillStacksData';
import { speakText, stopSpeaking } from '../utils/speech';

interface SkillsCatalogViewProps {
  language: Language;
  userProfile: UserProfile;
  onSelectCourse: (course: Course) => void;
  onOpenSkillPathway?: (skillId?: string, categoryKey?: string) => void;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
}

const CONVERSATIONAL_SEARCH_PROMPTS = [
  { ur: 'گھر بیٹھے کیا سیکھ سکتا ہوں؟', en: 'What can I learn from home?' },
  { ur: 'میرے پاس صرف موبائل ہے', en: 'I only have a mobile phone' },
  { ur: 'مجھے سلائی آتی ہے، اس سے کیسے کماؤں؟', en: 'How to earn with sewing skills?' },
  { ur: 'AI اور ChatGPT کیسے سیکھوں؟', en: 'How to learn AI & ChatGPT?' },
  { ur: 'سولر پینل اور انورٹر کام', en: 'Solar panel & inverter work' },
  { ur: 'آن لائن کھانا بیچنا (ہوم شیف)', en: 'Online food & home chef' },
  { ur: 'جدید ٹنل فارمنگ اور سبزیاں', en: 'Modern tunnel farming' },
  { ur: 'بغیر ڈگری کے کون سا ہنر سیکھوں؟', en: 'Skills to learn without a degree' },
];

export const SkillsCatalogView: React.FC<SkillsCatalogViewProps> = ({
  language,
  userProfile,
  onSelectCourse,
  onOpenSkillPathway,
  onOpenAITeacherWithPrompt,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  // Active Main SubTab
  const [activeSubTab, setActiveSubTab] = useState<'universe' | 'all_skills' | 'stacks' | 'projects' | 'earning' | 'challenges' | 'portfolio'>('universe');
  
  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomainGroup, setSelectedDomainGroup] = useState<string>('all');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<'all' | 'mobile_only' | 'no_computer' | 'home_based' | 'online_only' | 'offline_local' | 'low_cost' | 'quick_learn'>('all');
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);

  // Modals state
  const [showDiscoveryModal, setShowDiscoveryModal] = useState<boolean>(false);
  const [selectedSkillForDetail, setSelectedSkillForDetail] = useState<SkillMasterItem | null>(null);
  const [selectedUniverseSkill, setSelectedUniverseSkill] = useState<SkillUniverseItem | null>(null);
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<SkillUniverseCategory | null>(null);
  const [selectedStackForDetail, setSelectedStackForDetail] = useState<SkillStackItem | null>(null);

  // Daily Challenge completed state
  const [completedChallenges, setCompletedChallenges] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('seekho_completed_daily_challenges');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {};
  });

  const handleVoiceIntro = (speed = 0.86) => {
    const text = isUrdu
      ? 'سیکھو ہنر کائنات میں خوش آمدید۔ یہاں ۵۰ بڑے شعبہ جات، سینکڑوں ہنر، اور باوقار حلال روزگار کے عملی راستے موجود ہیں۔ آپ اپنی دلچسپی، موبائل یا اوزاروں کی سہولت کے مطابق ہنر چن سکتے ہیں۔'
      : 'Welcome to SEEKHO Skill Universe. Explore 50 major categories, hundreds of skills, and practical halal earning pathways.';
    
    stopSpeaking();
    speakText(text, { language: 'ur', rate: speed, pitch: 0.84 });
  };

  const handleToggleChallenge = (chalId: string) => {
    const nextState = !completedChallenges[chalId];
    const updated = { ...completedChallenges, [chalId]: nextState };
    setCompletedChallenges(updated);
    try {
      localStorage.setItem('seekho_completed_daily_challenges', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Filter Categories in Universe
  const filteredCategories = SKILL_UNIVERSE_50_CATEGORIES.filter((cat) => {
    const matchesDomain = selectedDomainGroup === 'all' || cat.domainGroup === selectedDomainGroup;
    const matchesQuery = !searchQuery.trim() || 
      cat.titleUrdu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.taglineUrdu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.subcategories.some(sub => sub.titleUrdu.includes(searchQuery) || sub.titleEn.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDomain && matchesQuery;
  });

  // Filter Skills in All Skills
  const universeSkillResults = searchSkillUniverse(
    searchQuery,
    selectedCategorySlug,
    selectedLevel,
    selectedDevice,
    selectedAudience
  );

  // Conversational Intent Match
  const detectedIntent = detectConversationalIntent(searchQuery);

  return (
    <div className="space-y-6 pb-24 max-w-6xl mx-auto px-3 sm:px-6 pt-2" dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* 1. MASTER HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/30 relative overflow-hidden space-y-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black font-arabic shadow-xs">
              🌌 {isUrdu ? 'روزگار اور ہنر کی وسیع کائنات (Skill Universe)' : 'Livelihood & Skills Universe'}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-arabic">
              {isUrdu ? '۵۰ شعبہ جات • مفت اور آسان' : '50 Domains • Free & Scalable'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white font-arabic leading-snug tracking-tight">
            {isUrdu 
              ? '”اپنا ہنر پہچانیں، سیکھیں، کمائیں اور دوسروں کے کام آئیں“' 
              : '“Discover Your Craft, Learn, Earn & Serve Others”'}
          </h1>

          <p className="text-sm sm:text-base text-slate-200 font-arabic leading-relaxed opacity-95">
            {isUrdu 
              ? 'چاہے آپ کے پاس صرف موبائل ہو، آپ گھر سے کام کرنا چاہتے ہوں یا دکان و کھیت میں—یہاں ہر انسان کے لیے رہنمائی، حقیقی پروجیکٹس اور روزگار کے ممکنہ راستے موجود ہیں۔'
              : 'Whether you only have a mobile phone, prefer home-based work, or work in trades and farms—discover guided pathways and dignified halal livelihood.'}
          </p>
        </div>

        {/* Hero Controls & Voice Player */}
        <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => handleVoiceIntro(0.86)}
              className="py-2.5 px-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-black font-arabic transition flex items-center gap-2 backdrop-blur-xs"
            >
              <span>🎙️</span>
              <span>{isUrdu ? 'کائنات کا تعارف سنیں' : 'Listen Voice Intro'}</span>
            </button>
            <button
              onClick={() => handleVoiceIntro(0.72)}
              className="py-2.5 px-3 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold font-arabic transition"
            >
              <span>🐢 {isUrdu ? 'آہستہ' : 'Slow'}</span>
            </button>
          </div>

          {/* Primary Action Button: "میرا ہنر کون سا ہے؟" */}
          <button
            id="btn-open-discovery-diagnostic"
            onClick={() => setShowDiscoveryModal(true)}
            className="py-3 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base font-arabic shadow-lg transition flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>{isUrdu ? 'میرا ہنر کون سا ہے؟ (ٹیسٹ شروع کریں)' : 'Discover My Skill (Start Test)'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. CONVERSATIONAL SEARCH BOX */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-black text-slate-900 font-arabic flex items-center gap-2">
              <Search className="w-5 h-5 text-emerald-700" />
              <span>{isUrdu ? 'ہنر، شعبہ، مسئلہ یا سوال تلاش کریں' : 'Search Skills, Domains, or Questions'}</span>
            </h2>
            <p className="text-xs text-slate-500 font-arabic">
              {isUrdu ? 'مثلاً: ”صرف موبائل سے کام“، ”گھر بیٹھے کھانا یا سلائی“، ”سولر انورٹر“، ”AI پرامپٹ“' : 'Search in natural Urdu or English queries'}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <input
              id="skills-master-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isUrdu ? 'ہنر یا سوال لکھیں...' : 'Search skills, tools, or ideas...'}
              className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 pl-10 pr-10 py-3 rounded-2xl border border-slate-300 text-sm focus:border-emerald-500 focus:outline-none font-arabic font-medium"
            />
            <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3.5 rtl:left-auto rtl:right-3.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute top-1/2 -translate-y-1/2 right-3 rtl:right-auto rtl:left-3 text-xs text-slate-400 hover:text-slate-700 p-1"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Quick Conversational Prompt Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-arabic font-bold">
          <span className="text-slate-400 shrink-0 text-[11px]">{isUrdu ? 'فوری تلاش:' : 'Quick search:'}</span>
          {CONVERSATIONAL_SEARCH_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => setSearchQuery(isUrdu ? prompt.ur : prompt.en)}
              className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-900 border border-slate-200 transition shrink-0 whitespace-nowrap"
            >
              {isUrdu ? prompt.ur : prompt.en}
            </button>
          ))}
        </div>

        {/* 🌟 DYNAMIC CONVERSATIONAL INTENT ROADMAP CARD */}
        {detectedIntent && (
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border-2 border-amber-400 shadow-xl space-y-4 animate-in fade-in">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="space-y-1 max-w-2xl">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
                  🎯 {isUrdu ? 'ذہین رہنمائی برائے سوال' : 'Smart Intent Roadmap'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                  {isUrdu ? detectedIntent.intentTitleUrdu : detectedIntent.intentTitleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {isUrdu ? detectedIntent.userContextUrdu : detectedIntent.userContextEn}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap text-xs font-bold text-slate-300">
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15">
                  ⏱️ {isUrdu ? detectedIntent.dailyTimeRecommendedUrdu : detectedIntent.dailyTimeRecommendedEn}
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15">
                  📱 {isUrdu ? detectedIntent.minimumDeviceUrdu : detectedIntent.minimumDeviceEn}
                </span>
                <span className="px-3 py-1 rounded-xl bg-emerald-900/80 text-emerald-300 border border-emerald-500/30">
                  🌱 {isUrdu ? detectedIntent.startingLevelUrdu : detectedIntent.startingLevelEn}
                </span>
              </div>
            </div>

            {/* 4 Step Quick Path */}
            <div className="space-y-2 pt-2 border-t border-white/15">
              <h4 className="text-xs font-black text-amber-300">
                🗺️ {isUrdu ? 'آپ کے لیے ۴ مراحل کا فوری عملی روڈ میپ:' : '4-Step Immediate Action Path:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                {(isUrdu ? detectedIntent.fourStepQuickPathUrdu : detectedIntent.fourStepQuickPathEn).map((stg) => (
                  <div key={stg.stepNumber} className="p-3.5 rounded-2xl bg-white/10 border border-white/15 space-y-1.5 flex flex-col justify-between">
                    <div>
                      <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center mb-1">
                        {stg.stepNumber}
                      </span>
                      <p className="font-black text-white">{stg.title}</p>
                      <p className="text-[11px] text-slate-300 leading-relaxed pt-0.5">{stg.description}</p>
                    </div>
                    <span className="text-[10px] font-bold text-amber-300 pt-1">
                      👉 {stg.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scam Alert warning inside intent card if present */}
            {detectedIntent.scamWarningUrdu && (
              <div className="p-3 rounded-2xl bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs font-bold flex items-center gap-2">
                <span>⚠️</span>
                <span>{isUrdu ? detectedIntent.scamWarningUrdu : detectedIntent.scamWarningEn}</span>
              </div>
            )}

            {/* Quick Action Footer */}
            <div className="pt-2 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="text-slate-300 font-bold">
                🚀 {isUrdu ? 'پہلا فوری قدم:' : 'First Step:'} <strong>{isUrdu ? detectedIntent.bestImmediateActionUrdu : detectedIntent.bestImmediateActionEn}</strong>
              </span>

              <button
                onClick={() => {
                  setActiveSubTab('all_skills');
                  // Pick first matched skill or keep search
                }}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black shadow-md transition flex items-center gap-1.5"
              >
                <span>{isUrdu ? 'موزوں ہنر کی فہرست دیکھیں' : 'View Recommended Skills'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 3. MODULE NAVIGATION TABS */}
      <div className="bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200 shadow-xs flex items-center overflow-x-auto gap-2 text-xs sm:text-sm font-arabic font-bold text-slate-600">
        {[
          { id: 'universe', labelUrdu: '🌌 ۵۰ شعبہ جات کی کائنات', labelEn: '50-Domain Universe', icon: Globe },
          { id: 'all_skills', labelUrdu: '📚 تمام تفصیلی ہنر گائیڈز', labelEn: 'Skills Deep Library', icon: BookOpen },
          { id: 'stacks', labelUrdu: '⚡ اسکل اسٹیک (امتزاج)', labelEn: 'Skill Stacks', icon: Layers },
          { id: 'projects', labelUrdu: '🚀 حقیقی پروجیکٹس', labelEn: 'Real Projects', icon: Sparkles },
          { id: 'earning', labelUrdu: '💼 کمائی کے ۸ ماڈلز', labelEn: '8 Income Models', icon: Briefcase },
          { id: 'challenges', labelUrdu: '⚡ ۲۰ منٹ چیلنج', labelEn: '20-Min Challenge', icon: Flame },
          { id: 'portfolio', labelUrdu: '📊 پیش رفت و پورٹ فولیو', labelEn: 'My Portfolio', icon: FolderKanban },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all ${
                isActive 
                  ? 'bg-emerald-800 text-white shadow-xs font-black' 
                  : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
              <span>{isUrdu ? tab.labelUrdu : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* SUB-VIEW 1: 50-CATEGORY SKILL UNIVERSE EXPLORER */}
      {/* ========================================================================= */}
      {activeSubTab === 'universe' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Domain Groups Filter Ribbon */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-700 font-arabic">
                🏛️ {isUrdu ? 'شعبہ جات کے مطابق فلٹر کریں:' : 'Filter by Domain Group:'}
              </span>
              <span className="text-xs text-slate-500 font-bold font-arabic">
                {filteredCategories.length} / {SKILL_UNIVERSE_50_CATEGORIES.length} {isUrdu ? 'شعبہ جات' : 'Categories'}
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-arabic font-bold">
              {SKILL_DOMAIN_GROUPS.map((grp) => {
                const isSelected = selectedDomainGroup === grp.id;
                return (
                  <button
                    key={grp.id}
                    onClick={() => setSelectedDomainGroup(grp.id)}
                    className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition shrink-0 flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-emerald-800 text-white font-black shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>{isUrdu ? grp.titleUrdu : grp.titleEn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 50 Categories Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setSelectedCategoryModal(cat)}
                className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between group space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-black font-arabic">
                      #{cat.number} {cat.domainGroupUrdu}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold font-arabic">
                      {cat.subcategories.length} {isUrdu ? 'ذیلی شاخیں' : 'Subcategories'}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-emerald-800 font-arabic transition">
                    {isUrdu ? cat.titleUrdu : cat.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 font-arabic leading-relaxed line-clamp-2">
                    {isUrdu ? cat.taglineUrdu : cat.taglineEn}
                  </p>

                  {/* Subcategories Tags Preview */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {cat.subcategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub.id}
                        className="px-2 py-0.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-medium font-arabic"
                      >
                        {isUrdu ? sub.titleUrdu : sub.titleEn}
                      </span>
                    ))}
                    {cat.subcategories.length > 3 && (
                      <span className="text-[11px] text-slate-400 font-bold font-arabic">
                        +{cat.subcategories.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-arabic text-slate-500">
                  <span className="text-emerald-700 font-black">
                    {isUrdu ? 'تفصیل و ذیلی ہنر کھولیں' : 'View Details & Subcategories'}
                  </span>
                  <ArrowIcon className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 2: ALL DETAILED SKILLS LIBRARY WITH FILTERS */}
      {/* ========================================================================= */}
      {activeSubTab === 'all_skills' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Advanced Multi-Dimension Filter Bar */}
          <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-sm font-black text-slate-900 font-arabic flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-emerald-700" />
                <span>{isUrdu ? 'اپنی ضرورت اور حالات کے مطابق تلاش فلٹر کریں:' : 'Filter by Device, Work Mode & Level:'}</span>
              </h3>

              {(selectedDevice !== 'all' || selectedLevel !== 'all' || selectedAudience || selectedCategorySlug) && (
                <button
                  onClick={() => {
                    setSelectedDevice('all');
                    setSelectedLevel('all');
                    setSelectedAudience(null);
                    setSelectedCategorySlug(null);
                  }}
                  className="text-xs text-rose-600 hover:text-rose-800 font-bold font-arabic"
                >
                  {isUrdu ? 'تمام فلٹرز ختم کریں ✕' : 'Reset Filters ✕'}
                </button>
              )}
            </div>

            {/* Device & Mode Filter */}
            <div className="space-y-1.5">
              <span className="text-xs text-slate-500 font-bold font-arabic">{isUrdu ? 'کام اور ڈیوائس کا طریقہ:' : 'Device & Work Mode:'}</span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-arabic">
                {[
                  { id: 'all', labelUrdu: 'تمام موڈز', labelEn: 'All Modes' },
                  { id: 'mobile_only', labelUrdu: '📱 صرف موبائل (No PC)', labelEn: 'Mobile Only' },
                  { id: 'home_based', labelUrdu: '🏠 گھر بیٹھے (Home Based)', labelEn: 'Home Based' },
                  { id: 'online_only', labelUrdu: '🌐 آن لائن فری لانسنگ', labelEn: 'Online Freelance' },
                  { id: 'offline_local', labelUrdu: '🛠️ لوکل کاریگری و فیلڈ', labelEn: 'Local Trades' },
                  { id: 'low_cost', labelUrdu: '💰 بغیر خرچے کے شروع', labelEn: 'Low Cost' },
                  { id: 'quick_learn', labelUrdu: '⚡ جلد سیکھنے والے', labelEn: 'Quick Learn' },
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDevice(d.id as any)}
                    className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition ${
                      selectedDevice === d.id
                        ? 'bg-emerald-800 text-white font-black'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {isUrdu ? d.labelUrdu : d.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Audience Filter */}
            <div className="space-y-1.5">
              <span className="text-xs text-slate-500 font-bold font-arabic">{isUrdu ? 'کس کے لیے موزوں:' : 'Target Audience:'}</span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-arabic">
                {[
                  { id: null, labelUrdu: 'سب کے لیے', labelEn: 'All' },
                  { id: 'women', labelUrdu: '🧕 خواتین و گھریلو', labelEn: 'Women / Homemakers' },
                  { id: 'students', labelUrdu: '🎓 طلبہ (Students)', labelEn: 'Students' },
                  { id: 'youth', labelUrdu: '🚀 نوجوان (Youth)', labelEn: 'Youth' },
                  { id: 'village', labelUrdu: '🌾 دیہات و کسان', labelEn: 'Rural / Farmers' },
                  { id: 'city', labelUrdu: '🏙️ شہری و دکاندار', labelEn: 'Urban / Retail' },
                ].map((aud, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedAudience(aud.id)}
                    className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition ${
                      selectedAudience === aud.id
                        ? 'bg-amber-400 text-slate-950 font-black'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {isUrdu ? aud.labelUrdu : aud.labelEn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Skills Cards Grid (Universe 14-Dimension Items + Master Data) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-arabic text-slate-500">
              <span className="font-bold">
                {isUrdu ? `کل نتائج: ${universeSkillResults.length} تفصیلی ہنر گائیڈز` : `Showing ${universeSkillResults.length} Skills`}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {universeSkillResults.map((skill) => (
                <div
                  key={skill.id}
                  onClick={() => setSelectedUniverseSkill(skill)}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-arabic">
                        {skill.categoryId}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black font-arabic">
                        {isUrdu ? skill.badgeUrdu : skill.badgeEn}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-800 font-arabic transition">
                      {isUrdu ? skill.titleUrdu : skill.titleEn}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-slate-600 font-arabic leading-[1.8]">
                      {isUrdu ? skill.taglineUrdu : skill.taglineEn}
                    </p>

                    {/* Quick Badges: Mobile friendly / Home based */}
                    <div className="flex items-center gap-2 flex-wrap text-xs font-arabic">
                      {skill.isMobileFriendly && (
                        <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold">
                          📱 {isUrdu ? 'موبائل سے ممکن' : 'Mobile Ready'}
                        </span>
                      )}
                      {skill.isHomeBased && (
                        <span className="px-2 py-0.5 rounded-lg bg-sky-50 text-sky-800 font-bold">
                          🏠 {isUrdu ? 'گھر بیٹھے' : 'Home-based'}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-lg bg-amber-50 text-amber-900 font-bold">
                        ⏱️ {isUrdu ? skill.timeDisplayUrdu : skill.timeDisplayEn}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-arabic text-slate-500">
                    <span className="text-emerald-700 font-black group-hover:translate-x-1 transition-transform">
                      {isUrdu ? '۱۴ نکات و ۵ درجات کی مکمل تفصیل کھولیں' : 'Open 14 Facts & 5 Levels'}
                    </span>
                    <ArrowIcon className="w-4 h-4 text-emerald-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 3: SKILL STACKS (COMBINING SKILLS) */}
      {/* ========================================================================= */}
      {activeSubTab === 'stacks' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white p-6 rounded-3xl space-y-3 border border-purple-500/30">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black font-arabic">
                ⚡ {isUrdu ? 'اسکل اسٹیک فارمولا' : 'Skill Stack Formula'}
              </span>
              <span className="text-xs text-purple-200 font-arabic">
                {isUrdu ? '۱ + ۱ = ۱۱' : '1 + 1 = 11'}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-arabic text-amber-300">
              {isUrdu ? '”مہارتیں ملا کر اپنی مارکیٹ ویلیو دوگنی کریں“' : '“Combine Skills to Multiply Your Market Earning Power”'}
            </h3>
            <p className="text-sm text-slate-200 font-arabic leading-relaxed max-w-3xl">
              {isUrdu 
                ? 'جب آپ صرف ایک ہنر سیکھتے ہیں تو آپ کو عام کاریگر سمجھا جاتا ہے۔ لیکن جب آپ دو تین ہنر ملا لیتے ہیں (مثلاً: کینوا + AI + سوشل میڈیا) تو آپ مارکیٹ میں سب سے آگے نکل جاتے ہیں اور کلائنٹس آپ کو باوقار ماہانہ آمدنی دیتے ہیں۔' 
                : 'Combining 2 or 3 complementary skills transforms you into a complete solution provider, commanding premium client retainers.'}
            </p>
          </div>

          {/* Stacks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {SKILL_STACKS_MASTER.map((stack) => (
              <div
                key={stack.id}
                onClick={() => setSelectedStackForDetail(stack)}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-black font-arabic">
                      {isUrdu ? stack.badgeUrdu : stack.badgeEn}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 font-arabic bg-emerald-50 px-2.5 py-1 rounded-full">
                      💰 {isUrdu ? stack.estimatedEarningUrdu : stack.estimatedEarningEn}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-purple-800 font-arabic transition">
                    {isUrdu ? stack.titleUrdu : stack.titleEn}
                  </h3>

                  <p className="text-sm text-slate-600 font-arabic leading-relaxed">
                    {isUrdu ? stack.taglineUrdu : stack.taglineEn}
                  </p>

                  {/* Skills Pills in Stack */}
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-2">
                    <span className="text-[11px] font-bold text-slate-500 font-arabic block">
                      {isUrdu ? 'اس مجموعے کے ۳ اجزاء:' : '3 Skills Combined:'}
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {stack.skillsIncluded.map((s, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold font-arabic shadow-2xs"
                        >
                          {isUrdu ? s.titleUrdu : s.titleEn}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-arabic">
                  <span className="text-slate-500 font-bold">
                    🎯 {isUrdu ? stack.resultingRoleUrdu : stack.resultingRoleEn}
                  </span>
                  <div className="flex items-center gap-1 text-purple-700 font-black group-hover:translate-x-1 transition-transform">
                    <span>{isUrdu ? 'اسٹیک کا مکمل پلان دیکھیں' : 'View Action Plan'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 4: REAL-WORLD PROJECTS */}
      {/* ========================================================================= */}
      {activeSubTab === 'projects' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="bg-emerald-50/70 p-5 rounded-3xl border border-emerald-200 space-y-2">
            <h3 className="text-xl font-black text-emerald-950 font-arabic">
              🚀 {isUrdu ? 'حقیقی دنیا کے منصوبے (Real-World Projects)' : 'Real-World Hands-on Projects'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed">
              {isUrdu 
                ? 'ہمارا مقصد صرف اسباق ختم کرنا نہیں ہے، بلکہ حقیقی زندگی کا کوئی کارآمد کام کر کے دکھانا ہے۔ یہ پروجیکٹس آپ کو عملی تجربہ اور اعتماد دیں گے:' 
                : 'The objective is not merely to finish lessons, but to produce something genuinely useful in real life.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REAL_WORLD_PROJECT_TEMPLATES.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black font-arabic">
                      {isUrdu ? proj.categoryUrdu : proj.categoryEn}
                    </span>
                    <span className="text-xs text-slate-500 font-bold font-arabic">
                      ⏱️ {isUrdu ? proj.difficultyUrdu : proj.difficultyEn}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
                    {isUrdu ? proj.titleUrdu : proj.titleEn}
                  </h4>

                  <p className="text-sm text-slate-600 font-arabic leading-relaxed">
                    {isUrdu ? proj.descUrdu : proj.descEn}
                  </p>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-1.5 text-xs font-arabic">
                    <span className="font-black text-slate-800">📋 {isUrdu ? 'عملی مراحل:' : 'Action Steps:'}</span>
                    <ul className="space-y-1 text-slate-600 list-disc list-inside">
                      {(isUrdu ? proj.actionStepsUrdu : proj.actionStepsEn).map((step, sIdx) => (
                        <li key={sIdx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-arabic">
                  <span className="text-slate-500 font-bold">
                    🎯 {isUrdu ? proj.deliverableUrdu : proj.deliverableEn}
                  </span>
                  <button
                    onClick={() => {
                      if (onOpenAITeacherWithPrompt) {
                        onOpenAITeacherWithPrompt(`السلام علیکم! میں پروجیکٹ "${proj.titleUrdu}" شروع کرنا چاہتا ہوں۔ مجھے اس پروجیکٹ کے پہلے قدم کی تفصیلی رہنمائی فرمائیں۔`);
                      }
                    }}
                    className="py-2 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition"
                  >
                    {isUrdu ? 'رہنمائی لیں' : 'Get Guidance'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 5: 8 INCOME PATHWAYS */}
      {/* ========================================================================= */}
      {activeSubTab === 'earning' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-3">
            <h3 className="text-2xl font-black font-arabic text-amber-400">
              💼 {isUrdu ? 'ہنر سے حلال کمائی کے ۸ بنیادی فارمولے' : '8 Core Halal Earning Models'}
            </h3>
            <p className="text-sm text-slate-300 font-arabic leading-relaxed">
              {isUrdu 
                ? 'جب آپ کوئی بھی ہنر سیکھ لیتے ہیں تو اس سے روزگار پیدا کرنے کے یہ ۸ حقیقی راستے کھلتے ہیں:' 
                : 'Mastering a skill unlocks 8 proven avenues for dignified halal income:'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: '1', titleUrdu: '۱. باقاعدہ ملازمت (Job)', descUrdu: 'کسی دکان، اسکول یا ادارے میں ماہانہ تنخواہ پر کام۔' },
              { id: '2', titleUrdu: '۲. آن لائن فری لانسنگ (Freelancing)', descUrdu: 'گھر بیٹھے بین الاقوامی یا ملکی کلائنٹس کو سروسز دینا۔' },
              { id: '3', titleUrdu: '۳. مقامی سروس (Local Service)', descUrdu: 'اپنے محلے اور علاقے میں گھر جا کر یا دکان پر کام کرنا۔' },
              { id: '4', titleUrdu: '۴. چھوٹا کاروبار (Small Business)', descUrdu: 'اپنی دکان، ورکشاپ یا پروڈکشن یونٹ کھولنا۔' },
              { id: '5', titleUrdu: '۵. آن لائن دکان (Online Business)', descUrdu: 'واٹس ایپ، فیس بک یا دراز پر سامان فروخت کرنا۔' },
              { id: '6', titleUrdu: '۶. تدریس و کوچنگ (Teaching)', descUrdu: 'دوسروں کو یہ ہنر سکھا کر فیس لینا اور صدقہ جاریہ بنانا۔' },
              { id: '7', titleUrdu: '۷. اپنی پروڈکٹ (Product Making)', descUrdu: 'کھانا، دستکاری یا کپڑے خود بنا کر بیچنا۔' },
              { id: '8', titleUrdu: '۸. مشاورت (Consulting)', descUrdu: 'تجربے کی بنیاد پر دوسروں کے مسائل حل کرنے کا معاوضہ لینا۔' },
            ].map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2 font-arabic">
                <h4 className="text-base font-black text-slate-900">
                  {item.titleUrdu}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.descUrdu}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 6: DAILY 20-MIN CHALLENGE */}
      {/* ========================================================================= */}
      {activeSubTab === 'challenges' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="bg-amber-500/15 border border-amber-300 p-5 rounded-3xl space-y-2">
            <h3 className="text-xl font-black text-amber-950 font-arabic flex items-center gap-2">
              <Flame className="w-6 h-6 text-amber-600" />
              <span>{isUrdu ? 'آج ۲۰ منٹ میں یہ کام کریں (Daily Practical Challenge)' : 'Daily 20-Min Challenge'}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-arabic leading-relaxed">
              {isUrdu ? 'بڑے اہداف چھوٹے مستقل قدموں سے حاصل ہوتے ہیں۔ آج کا آسان چیلنج مکمل کریں اور پوائنٹس حاصل کریں:' : 'Consistency leads to mastery. Complete today\'s 20-minute challenge:'}
            </p>
          </div>

          <div className="space-y-4">
            {DAILY_PRACTICAL_CHALLENGES.map((chal) => {
              const isDone = !!completedChallenges[chal.id];
              return (
                <div 
                  key={chal.id}
                  className={`p-5 rounded-3xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-arabic ${
                    isDone ? 'bg-emerald-50/60 border-emerald-300' : 'bg-white border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-black">
                        +{chal.points} {isUrdu ? 'پوائنٹس' : 'Points'}
                      </span>
                      <span className="text-xs text-slate-500 font-bold">
                        ⏱️ {chal.estimatedMinutes} {isUrdu ? 'منٹ' : 'mins'}
                      </span>
                    </div>
                    <h4 className="text-lg font-black text-slate-900">
                      {isUrdu ? chal.titleUrdu : chal.titleEn}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {isUrdu ? chal.descUrdu : chal.descEn}
                    </p>
                  </div>

                  <button
                    onClick={() => handleToggleChallenge(chal.id)}
                    className={`py-2.5 px-6 rounded-2xl font-black text-xs transition whitespace-nowrap self-stretch sm:self-auto flex items-center justify-center gap-2 ${
                      isDone 
                        ? 'bg-emerald-700 text-white' 
                        : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xs'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>{isDone ? (isUrdu ? 'مکمل شدہ ✓' : 'Completed ✓') : (isUrdu ? 'چیلنج مکمل کیا' : 'Mark Completed')}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 7: MY SKILLS & PORTFOLIO */}
      {/* ========================================================================= */}
      {activeSubTab === 'portfolio' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-xl font-black text-slate-900 font-arabic flex items-center gap-2">
              <FolderKanban className="w-5 h-5 text-emerald-700" />
              <span>{isUrdu ? 'میری سیکھنے کی سطح اور پورٹ فولیو' : 'My Skills Progress & Portfolio'}</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-arabic">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <span className="text-2xl font-black text-emerald-900">
                  {Object.keys(completedChallenges).length}
                </span>
                <p className="text-xs text-slate-600 font-bold mt-1">
                  {isUrdu ? 'مکمل کردہ چیلنجز' : 'Completed Challenges'}
                </p>
              </div>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <span className="text-2xl font-black text-amber-900">
                  {userProfile.points || 120}
                </span>
                <p className="text-xs text-slate-600 font-bold mt-1">
                  {isUrdu ? 'حاصل کردہ پوائنٹس' : 'Skill Points'}
                </p>
              </div>
              <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100">
                <span className="text-2xl font-black text-sky-900">
                  {userProfile.streakDays || 3}
                </span>
                <p className="text-xs text-slate-600 font-bold mt-1">
                  {isUrdu ? 'مسلسل سیکھنے کے دن' : 'Streak Days'}
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
                <span className="text-2xl font-black text-purple-900">
                  {isUrdu ? 'ابتدائی' : 'Beginner'}
                </span>
                <p className="text-xs text-slate-600 font-bold mt-1">
                  {isUrdu ? 'موجودہ لیول' : 'Current Level'}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-center">
              <button
                onClick={() => setShowDiscoveryModal(true)}
                className="py-3 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold font-arabic text-sm transition"
              >
                {isUrdu ? '🧭 نیا ہنر دریافت کریں (Discovery Quiz)' : '🧭 Discover New Skill'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MODALS & POPUPS */}
      {/* ========================================================================= */}

      {/* Category Subcategories Drawer / Detail Modal */}
      {selectedCategoryModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in" dir={isUrdu ? 'rtl' : 'ltr'}>
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden relative space-y-5 p-6">
            <button
              onClick={() => setSelectedCategoryModal(null)}
              className="absolute top-5 left-5 rtl:left-auto rtl:right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            >
              ✕
            </button>

            <div className="space-y-2 pr-8 rtl:pr-0 rtl:pl-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black font-arabic">
                  #{selectedCategoryModal.number} {selectedCategoryModal.domainGroupUrdu}
                </span>
                <span className="text-xs text-slate-500 font-bold font-arabic">
                  {selectedCategoryModal.subcategories.length} {isUrdu ? 'ذیلی شاخیں' : 'Subcategories'}
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 font-arabic">
                {isUrdu ? selectedCategoryModal.titleUrdu : selectedCategoryModal.titleEn}
              </h2>

              <p className="text-sm text-slate-600 font-arabic leading-relaxed">
                {isUrdu ? selectedCategoryModal.taglineUrdu : selectedCategoryModal.taglineEn}
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h3 className="text-sm font-black text-slate-900 font-arabic">
                📑 {isUrdu ? 'اس شعبے کی ذیلی شاخیں (Subcategories):' : 'Subcategories & Areas:'}
              </h3>

              <div className="space-y-2.5">
                {selectedCategoryModal.subcategories.map((sub) => (
                  <div 
                    key={sub.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 font-arabic"
                  >
                    <h4 className="text-sm sm:text-base font-black text-slate-900">
                      {isUrdu ? sub.titleUrdu : sub.titleEn}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {isUrdu ? sub.descriptionUrdu : sub.descriptionEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setSelectedCategorySlug(selectedCategoryModal.id);
                  setActiveSubTab('all_skills');
                  setSelectedCategoryModal(null);
                }}
                className="py-2.5 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs sm:text-sm font-arabic transition flex items-center gap-1.5"
              >
                <span>{isUrdu ? 'اس شعبے کے ہنر دیکھیں' : 'Filter Skills in this Domain'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedCategoryModal(null)}
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs font-arabic transition"
              >
                {isUrdu ? 'بند کریں' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Discovery Diagnostic Quiz Modal */}
      <SkillDiscoveryModal
        isOpen={showDiscoveryModal}
        onClose={() => setShowDiscoveryModal(false)}
        language={language}
        userProfile={userProfile}
        onSelectUniverseSkill={(skill) => {
          setSelectedUniverseSkill(skill);
        }}
        onSelectSkill={(skill) => {
          setSelectedSkillForDetail(skill);
        }}
        onOpenAITeacherWithPrompt={onOpenAITeacherWithPrompt}
      />

      {/* Skill Universe 14-Dimension Detail Modal */}
      <SkillUniverseDetailModal
        isOpen={!!selectedUniverseSkill}
        onClose={() => setSelectedUniverseSkill(null)}
        skill={selectedUniverseSkill}
        language={language}
        userProfile={userProfile}
        onOpenAITeacherWithPrompt={onOpenAITeacherWithPrompt}
        onSelectNextSkill={(nextSkillId) => {
          const next = SKILL_UNIVERSE_ITEMS.find(s => s.id === nextSkillId);
          if (next) {
            setSelectedUniverseSkill(next);
          }
        }}
      />

      {/* Legacy Skill Master Detail Modal */}
      <SkillMasterDetailModal
        isOpen={!!selectedSkillForDetail}
        onClose={() => setSelectedSkillForDetail(null)}
        skill={selectedSkillForDetail}
        language={language}
        userProfile={userProfile}
        onOpenAITeacherWithPrompt={onOpenAITeacherWithPrompt}
        onSelectNextSkill={(nextSkillId) => {
          const next = SKILLS_MASTER_DATA.find(s => s.id === nextSkillId);
          if (next) {
            setSelectedSkillForDetail(next);
          }
        }}
      />

      {/* Skill Stack Detail Modal */}
      <SkillStackDetailModal
        isOpen={!!selectedStackForDetail}
        onClose={() => setSelectedStackForDetail(null)}
        stack={selectedStackForDetail}
        language={language}
        userProfile={userProfile}
        onOpenAITeacherWithPrompt={onOpenAITeacherWithPrompt}
        onOpenSkillDetail={(skillId) => {
          const found = SKILLS_MASTER_DATA.find(s => s.id === skillId);
          if (found) {
            setSelectedSkillForDetail(found);
          }
        }}
      />
    </div>
  );
};
