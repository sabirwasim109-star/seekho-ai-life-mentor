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
  FolderKanban
} from 'lucide-react';
import { Course, Language, UserProfile } from '../types';
import { COURSES_DATA } from '../data/mockData';
import { 
  SKILLS_MASTER_DATA, 
  SKILL_CATEGORIES_MASTER, 
  REAL_WORLD_PROJECT_TEMPLATES, 
  DAILY_PRACTICAL_CHALLENGES, 
  SkillMasterItem,
  searchSkillsMaster
} from '../data/skillsMasterData';
import { SkillDiscoveryModal } from './SkillDiscoveryModal';
import { SkillMasterDetailModal } from './SkillMasterDetailModal';
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
  { ur: 'AI کیسے سیکھوں؟', en: 'How to learn AI?' },
  { ur: 'بغیر ڈگری کے کون سا ہنر سیکھوں؟', en: 'Skills to learn without a degree' },
  { ur: 'میں 50 سال کا ہوں، کیا سیکھ سکتا ہوں؟', en: 'I am 50+, what can I learn?' },
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

  const [activeSubTab, setActiveSubTab] = useState<'all_skills' | 'projects' | 'earning' | 'challenges' | 'portfolio'>('all_skills');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [selectedDevice, setSelectedDevice] = useState<'all' | 'mobile' | 'computer' | 'tools'>('all');

  // Modals state
  const [showDiscoveryModal, setShowDiscoveryModal] = useState<boolean>(false);
  const [selectedSkillForDetail, setSelectedSkillForDetail] = useState<SkillMasterItem | null>(null);

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
      ? 'اپنا ہنر پہچانیں، سیکھیں، کمائیں اور دوسروں کے کام آئیں۔ چاہے آپ نے زیادہ تعلیم حاصل کی ہو یا بالکل نہ کی ہو، یہاں آپ اپنی دلچسپی اور صلاحیت کے مطابق ہنر سیکھ سکتے ہیں، عملی کام کر سکتے ہیں اور حلال روزگار کے نئے راستے تلاش کر سکتے ہیں۔'
      : 'Discover your skill, learn, earn, and benefit humanity. Whether you have formal schooling or not, learn practical skills for halal livelihood.';
    
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

  // Filter skills
  const filteredSkills = searchSkillsMaster(searchQuery).filter((skill) => {
    const matchesCategory = !selectedCategory || skill.categoryKey === selectedCategory;
    const matchesDevice = selectedDevice === 'all' || skill.requiredDevice === selectedDevice || skill.requiredDevice === 'any';
    return matchesCategory && matchesDevice;
  });

  return (
    <div className="space-y-6 pb-24 max-w-6xl mx-auto px-3 sm:px-6 pt-2" dir={isUrdu ? 'rtl' : 'ltr'}>
      {/* 1. MASTER HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/30 relative overflow-hidden space-y-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black font-arabic shadow-xs">
              💼 {isUrdu ? 'روزگار اور ہنر (Livelihood & Skills)' : 'Livelihood & Practical Skills'}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-arabic">
              {isUrdu ? 'ہر انسان کے لیے آسان اور مفت' : 'Accessible for every human'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white font-arabic leading-snug tracking-tight">
            {isUrdu 
              ? '”اپنا ہنر پہچانیں، سیکھیں، کمائیں اور دوسروں کے کام آئیں“' 
              : '“Discover Your Craft, Learn, Earn & Serve Others”'}
          </h1>

          <p className="text-sm sm:text-base text-slate-200 font-arabic leading-relaxed opacity-95">
            {isUrdu 
              ? 'چاہے آپ نے زیادہ تعلیم حاصل کی ہو یا بالکل نہ کی ہو، یہاں آپ اپنی دلچسپی اور صلاحیت کے مطابق ہنر سیکھ سکتے ہیں، عملی کام کر سکتے ہیں اور حلال روزگار کے نئے راستے تلاش کر سکتے ہیں۔'
              : 'Whether you have formal education or not, discover skills suited to your interests and strengths, do practical work, and find new avenues of halal livelihood.'}
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
              <span>{isUrdu ? 'رہنما کی آواز سنیں' : 'Listen Mentor Voice'}</span>
            </button>
            <button
              onClick={() => handleVoiceIntro(0.72)}
              className="py-2.5 px-3 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold font-arabic transition"
            >
              <span>🐢 {isUrdu ? 'آہستہ سنیں' : 'Slow'}</span>
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
              <span>{isUrdu ? 'ہنر، پیشہ، مسئلہ یا سوال تلاش کریں' : 'Search Skills, Profession, or Questions'}</span>
            </h2>
            <p className="text-xs text-slate-500 font-arabic">
              {isUrdu ? 'مثلاً: ”گھر بیٹھے کیا سیکھوں؟“، ”صرف موبائل ہے“، ”سلائی سے کمائی“' : 'Search in natural Urdu or English queries'}
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
          <span className="text-slate-400 shrink-0 text-[11px]">{isUrdu ? 'فوری سوالات:' : 'Quick search:'}</span>
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
      </div>

      {/* 3. MODULE NAVIGATION TABS */}
      <div className="bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200 shadow-xs flex items-center overflow-x-auto gap-2 text-xs sm:text-sm font-arabic font-bold text-slate-600">
        {[
          { id: 'all_skills', labelUrdu: '📚 تمام ہنر و کیٹلاگ', labelEn: 'All Skills Library', icon: BookOpen },
          { id: 'projects', labelUrdu: '🚀 حقیقی دنیا کے پروجیکٹس', labelEn: 'Real-World Projects', icon: Sparkles },
          { id: 'earning', labelUrdu: '💼 روزگار و کمائی کے ۸ راستے', labelEn: '8 Income Pathways', icon: Briefcase },
          { id: 'challenges', labelUrdu: '⚡ ۲۰ منٹ عملی چیلنج', labelEn: '20-Min Challenge', icon: Flame },
          { id: 'portfolio', labelUrdu: '📊 میری پیش رفت و پورٹ فولیو', labelEn: 'My Portfolio', icon: FolderKanban },
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

      {/* SUB-VIEW 1: ALL SKILLS & CATEGORIES */}
      {activeSubTab === 'all_skills' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Category Filter Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`p-4 rounded-2xl border transition-all text-right flex flex-col justify-between space-y-2 font-arabic ${
                selectedCategory === null 
                  ? 'bg-emerald-800 text-white border-emerald-900 shadow-md font-black' 
                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">🌟</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">{SKILLS_MASTER_DATA.length} {isUrdu ? 'ہنر' : 'Skills'}</span>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black leading-tight">
                  {isUrdu ? 'تمام شعبہ جات' : 'All Categories'}
                </h3>
              </div>
            </button>

            {SKILL_CATEGORIES_MASTER.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                  className={`p-4 rounded-2xl border transition-all text-right flex flex-col justify-between space-y-2 font-arabic ${
                    isSelected 
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-md font-black' 
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">
                      {cat.id === 'digital' ? '💻' : cat.id === 'traditional' ? '🛠️' : cat.id === 'business' ? '💼' : cat.id === 'professional' ? '🎓' : '⚡'}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20' : 'bg-slate-100 text-slate-600'}`}>
                      {cat.count} {isUrdu ? 'ہنر' : 'Skills'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black leading-tight">
                      {isUrdu ? cat.titleUrdu : cat.titleEn}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Device & Difficulty Pills */}
          <div className="flex items-center justify-between gap-3 flex-wrap bg-white p-3 rounded-2xl border border-slate-200 text-xs font-arabic">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-bold">{isUrdu ? 'سامان / آلہ:' : 'Device:'}</span>
              {[
                { id: 'all', labelUrdu: 'تمام', labelEn: 'All' },
                { id: 'mobile', labelUrdu: '📱 صرف موبائل', labelEn: 'Mobile Only' },
                { id: 'computer', labelUrdu: '💻 کمپیوٹر / لیپ ٹاپ', labelEn: 'Computer' },
                { id: 'tools', labelUrdu: '🛠️ اوزار / ہاتھ کا کام', labelEn: 'Tools / Trades' },
              ].map((dev) => (
                <button
                  key={dev.id}
                  onClick={() => setSelectedDevice(dev.id as any)}
                  className={`px-3 py-1 rounded-xl transition ${
                    selectedDevice === dev.id 
                      ? 'bg-emerald-100 text-emerald-900 font-black' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {isUrdu ? dev.labelUrdu : dev.labelEn}
                </button>
              ))}
            </div>

            <span className="text-slate-500 font-medium">
              {filteredSkills.length} {isUrdu ? 'ہنر دستیاب ہیں' : 'skills available'}
            </span>
          </div>

          {/* High-Craft Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                onClick={() => setSelectedSkillForDetail(skill)}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-arabic">
                      {isUrdu ? skill.categoryTitleUrdu : skill.categoryTitleEn}
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

                  {/* 4-Stage Pathway Pill */}
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold font-arabic text-emerald-800 bg-emerald-50/60 p-2.5 rounded-2xl border border-emerald-100">
                    <span>سیکھیں</span>
                    <span>←</span>
                    <span>مشق</span>
                    <span>←</span>
                    <span>بنائیں</span>
                    <span>←</span>
                    <span>کمائیں</span>
                    <span>←</span>
                    <span>سکھائیں</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-arabic text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>{isUrdu ? `سیکھنے کا وقت: ${skill.timeToLearnDays} دن` : `${skill.timeToLearnDays} Days`}</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-700 font-black group-hover:translate-x-1 transition-transform">
                    <span>{isUrdu ? '۱۸ مرحلہ وار گائیڈ کھولیں' : 'Open 18-Step Guide'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-VIEW 2: REAL-WORLD PROJECTS */}
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

      {/* SUB-VIEW 3: 8 INCOME PATHWAYS */}
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

      {/* SUB-VIEW 4: DAILY 20-MIN CHALLENGE */}
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

      {/* SUB-VIEW 5: MY SKILLS & PORTFOLIO */}
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

      {/* 4. MODALS */}
      <SkillDiscoveryModal
        isOpen={showDiscoveryModal}
        onClose={() => setShowDiscoveryModal(false)}
        language={language}
        userProfile={userProfile}
        onSelectSkill={(skill) => {
          setSelectedSkillForDetail(skill);
        }}
      />

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
    </div>
  );
};
