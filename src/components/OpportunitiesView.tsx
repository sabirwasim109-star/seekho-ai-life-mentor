import React, { useState, useMemo, useEffect } from 'react';
import { 
  Briefcase, 
  Globe, 
  GraduationCap, 
  Wrench, 
  MapPin, 
  Store, 
  HeartHandshake, 
  BookOpen, 
  Sparkles, 
  Filter, 
  Info, 
  ShieldCheck, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight,
  Compass,
  Laptop,
  Palette,
  Sprout,
  Users,
  Search,
  Check
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { 
  OPPORTUNITY_TYPES_METADATA, 
  SAMPLE_OPPORTUNITIES, 
  SKILL_TO_OPPORTUNITY_PATHWAYS, 
  OpportunityType, 
  SampleOpportunity,
  SkillPathway
} from '../data/opportunitiesData';

interface OpportunitiesViewProps {
  language: Language;
  userProfile: UserProfile;
  onNavigateToCourses?: () => void;
  onOpenSkillPathway?: (skillId?: string, categoryKey?: string) => void;
}

export const OpportunitiesView: React.FC<OpportunitiesViewProps> = ({
  language,
  userProfile,
  onNavigateToCourses,
  onOpenSkillPathway,
}) => {
  const isUrdu = language === 'ur';

  // Sub-tab selection: 'all' | 'personalized' | 'local' | 'pathways'
  const [activeSection, setActiveSection] = useState<'all' | 'personalized' | 'local' | 'pathways'>('personalized');
  
  // Type filter: 'ALL' | OpportunityType
  const [selectedType, setSelectedType] = useState<string>('ALL');

  // Search filter
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected Opportunity for Detail Modal
  const [selectedOpportunity, setSelectedOpportunity] = useState<SampleOpportunity | null>(null);

  // Sync modal dismissal with Android system back button & Escape key
  useEffect(() => {
    if (!selectedOpportunity) return;

    const handlePopState = () => {
      setSelectedOpportunity(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedOpportunity(null);
      }
    };

    window.history.pushState({ modal: 'opportunity-detail', id: selectedOpportunity.id }, '');
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedOpportunity]);

  // Filtered Opportunities
  const filteredOpportunities = useMemo(() => {
    return SAMPLE_OPPORTUNITIES.filter((opp) => {
      // Section check
      if (activeSection === 'local' && !opp.isLocalToPilot) {
        return false;
      }
      if (activeSection === 'personalized') {
        // Match with user skills or interests
        const userInterestMatches = userProfile.interests.some((interest) => 
          opp.skillCategory.toLowerCase().includes(interest.toLowerCase()) ||
          opp.requiredSkillUrdu.toLowerCase().includes(interest.toLowerCase())
        );
        // Or if location is local
        const isNearby = opp.locationUrdu.includes('ڈوبے') || opp.locationUrdu.includes('برنالہ') || opp.locationUrdu.includes('آن لائن');
        if (!userInterestMatches && !isNearby && !opp.isLocalToPilot) {
          // Keep if it has generic beginner level
          if (opp.level !== 'Beginner') return false;
        }
      }

      // Type filter
      if (selectedType !== 'ALL' && opp.type !== selectedType) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = opp.titleUrdu.toLowerCase().includes(q) || opp.titleEn.toLowerCase().includes(q);
        const matchesDesc = opp.shortDescriptionUrdu.toLowerCase().includes(q) || opp.shortDescriptionEn.toLowerCase().includes(q);
        const matchesSkill = opp.requiredSkillUrdu.toLowerCase().includes(q) || opp.requiredSkillEn.toLowerCase().includes(q);
        const matchesLoc = opp.locationUrdu.toLowerCase().includes(q) || opp.locationEn.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesSkill && !matchesLoc) return false;
      }

      return true;
    });
  }, [activeSection, selectedType, searchQuery, userProfile]);

  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-6 pb-28 max-w-5xl mx-auto px-3 sm:px-6 pt-2">
      {/* 1. Header Banner & Safety Notice */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl border border-indigo-500/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-indigo-400 text-slate-950 font-black flex items-center gap-1.5 font-arabic">
              <Briefcase className="w-3.5 h-3.5" />
              {isUrdu ? 'مواقع (Opportunities)' : 'Opportunities'}
            </span>
            <span className="text-xs text-indigo-300 font-bold font-arabic">
              {isUrdu ? 'تربیتی و عملی امکانات برائے رہنمائی' : 'Educational & Practical Guidance'}
            </span>
          </div>

          <span className="text-[11px] text-amber-300 bg-amber-950/80 border border-amber-500/40 px-3 py-0.5 rounded-full font-bold font-arabic">
            {isUrdu ? 'ڈیمو اور فرضی نمونہ برائے فہم' : 'Demo / Sample Opportunity'}
          </span>
        </div>

        <div className="space-y-1 max-w-3xl">
          <h1 className="text-xl sm:text-3xl font-black text-white font-arabic tracking-tight">
            {isUrdu ? 'مہارتوں سے عملی مواقع تک کا راستہ' : 'Connecting Skills to Practical Opportunities'}
          </h1>
          <p className="text-xs sm:text-sm text-indigo-100/90 font-arabic leading-relaxed">
            {isUrdu
              ? 'یہ سیکشن آپ کو سکھاتا ہے کہ سیکھو پر حاصل کردہ مہارتیں، پروجیکٹس اور تجربہ کس طرح حقیقی زندگی میں نوکری، فری لانسنگ، مقامی کام یا خدمت میں بدلا جا سکتا ہے۔'
              : 'Explore how skills acquired on Seekho connect to real-world apprenticeships, local freelancing, community projects, and enterprise ideas.'}
          </p>
        </div>

        {/* Clear Transparent Notice (Mandatory Disclaimers) */}
        <div className="bg-white/10 rounded-2xl p-3 sm:p-3.5 border border-white/15 text-[11.5px] text-indigo-100 font-arabic flex items-start gap-2.5">
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <strong className="text-amber-300 font-bold block">
              {isUrdu ? 'شفافیت و رہنمائی کا اعلان: ' : 'Transparency Notice: '}
            </strong>
            <p className="text-slate-200 leading-relaxed">
              {isUrdu
                ? 'یہاں دیے گئے تمام مواقع اور ادارے طلباء اور شہریوں کی تعلیمی رہنمائی کے لیے تیار کردہ فرضی ڈیمو (Sample Opportunities) ہیں۔ یہ کوئی حقیقی نوکری کی اسامیاں یا آمدنی کی قانونی ضمانت نہیں ہیں۔'
                : 'All listings are realistic sample demonstration opportunities designed for practical learning pathways and career guidance. They do not constitute actual job vacancies or income guarantees.'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Top Navigation Tabs for Sections */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/90">
        <button
          type="button"
          id="tab-opp-personalized"
          onClick={() => setActiveSection('personalized')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 font-arabic ${
            activeSection === 'personalized'
              ? 'bg-indigo-700 text-white shadow-xs'
              : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{isUrdu ? 'آپ کے لیے ممکنہ مواقع' : 'Personalized for You'}</span>
        </button>

        <button
          type="button"
          id="tab-opp-local"
          onClick={() => setActiveSection('local')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 font-arabic ${
            activeSection === 'local'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
          }`}
        >
          <MapPin className="w-4 h-4 text-emerald-300" />
          <span>{isUrdu ? 'میرے علاقے میں مواقع (ڈوبے)' : 'Local (Dobay, Barnala)'}</span>
        </button>

        <button
          type="button"
          id="tab-opp-pathways"
          onClick={() => setActiveSection('pathways')}
          className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 font-arabic ${
            activeSection === 'pathways'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
          }`}
        >
          <Compass className="w-4 h-4 text-white" />
          <span>{isUrdu ? 'اس Skill کے بعد کیا کر سکتے ہیں؟' : 'Skill to Opportunity'}</span>
        </button>

        <button
          type="button"
          id="tab-opp-all"
          onClick={() => setActiveSection('all')}
          className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-1.5 font-arabic ${
            activeSection === 'all'
              ? 'bg-slate-800 text-white shadow-xs'
              : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>{isUrdu ? 'تمام مواقع' : 'All Opportunities'}</span>
        </button>
      </div>

      {/* 3. Section: Skill to Opportunity Pathways Explorer (اس Skill کے بعد آپ کیا کر سکتے ہیں؟) */}
      {activeSection === 'pathways' && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg sm:text-2xl font-black text-slate-900 font-arabic">
                {isUrdu ? 'اس Skill کے بعد آپ کیا کر سکتے ہیں؟' : 'What can you do after completing a skill?'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-arabic leading-relaxed">
              {isUrdu
                ? 'ہر مکمل کی گئی مہارت کے بعد حقیقی دنیا میں کھلنے والے 4 عملی راستے:'
                : 'Explore structured practical pathways for your mastered and in-progress skills:'}
            </p>
          </div>

          <div className="space-y-4">
            {SKILL_TO_OPPORTUNITY_PATHWAYS.map((pathway) => (
              <div
                key={pathway.skillId}
                id={`pathway-${pathway.skillId}`}
                className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-200 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                        {isUrdu ? pathway.skillNameUrdu : pathway.skillNameEn}
                      </h3>
                      <span className="text-[11px] font-bold text-slate-500 font-arabic">
                        {isUrdu ? 'عملی اطلاق اور کیریئر روڈ میپ' : 'Practical Application Roadmap'}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold font-arabic">
                    {isUrdu ? '4 عملی راستے' : '4 Pathways'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {(isUrdu ? pathway.pathwaysUrdu : pathway.pathwaysEn).map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1.5 hover:border-indigo-300 transition"
                    >
                      <div className="flex items-center gap-2 text-indigo-950 font-black text-xs sm:text-sm font-arabic">
                        <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-900 flex items-center justify-center text-xs">
                          {idx + 1}
                        </span>
                        <h4>{item.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-arabic">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {onOpenSkillPathway && (
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => onOpenSkillPathway(pathway.skillId)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>{isUrdu ? 'مکمل ۶ سوالات اور Learn → Build → Apply → Earn کا راستہ دیکھیں' : 'View Full 6-Question Path (Learn → Build → Apply → Earn)'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Filter & Search Controls for Opportunities */}
      {activeSection !== 'pathways' && (
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-3.5">
          {/* Search bar & Type label */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isUrdu ? 'ہنر، عنوان یا مقام سے تلاش کریں...' : 'Search by skill, title, or location...'}
                className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm rounded-xl py-2 px-9 border border-slate-200 focus:outline-none focus:border-indigo-500 font-arabic"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-arabic">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="font-bold">{isUrdu ? 'قسم کے لحاظ سے فلٹر:' : 'Filter by Category:'}</span>
            </div>
          </div>

          {/* 8 Opportunity Categories Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedType('ALL')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition font-arabic ${
                selectedType === 'ALL'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isUrdu ? 'تمام اقسام' : 'All Types'}
            </button>

            {OPPORTUNITY_TYPES_METADATA.map((cat) => {
              const isSelected = selectedType === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  id={`filter-cat-${cat.id}`}
                  onClick={() => setSelectedType(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1 font-arabic ${
                    isSelected
                      ? 'bg-indigo-700 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{isUrdu ? cat.labelUrdu : cat.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. Section Specific Heading & Count */}
      {activeSection !== 'pathways' && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
              {activeSection === 'personalized' && (isUrdu ? 'آپ کے لیے ممکنہ مواقع (Personalized Matches)' : 'Potential Opportunities for You')}
              {activeSection === 'local' && (isUrdu ? 'میرے علاقے میں مواقع (ڈوبے، برنالہ، آزاد کشمیر)' : 'Opportunities in My Area (Dobay, Barnala)')}
              {activeSection === 'all' && (isUrdu ? 'تمام دستیاب ڈیمو مواقع' : 'All Demo Opportunities')}
            </h2>
            <p className="text-xs text-slate-500 font-arabic">
              {activeSection === 'personalized' && (isUrdu ? 'آپ کی مہارتوں، سطح، دلچسپی اور سیکھنے کے اہداف کے مطابق منتخب کردہ:' : 'Matched with your skills, level, interests, and learning goals:')}
              {activeSection === 'local' && (isUrdu ? 'پائلٹ ایریا ڈوبے اور برنالہ کے لیے مخصوص عملی آئیڈیاز:' : 'Practical projects and training specifically for Dobay & Barnala:')}
              {activeSection === 'all' && (isUrdu ? 'تمام 8 کیٹیگریز کے رہنمائی نمونے:' : 'Sample opportunities across all 8 categories:')}
            </p>
          </div>

          <span className="text-xs font-black text-indigo-900 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-xl font-arabic">
            {isUrdu ? `${filteredOpportunities.length} مواقع دستیاب` : `${filteredOpportunities.length} Opportunities`}
          </span>
        </div>
      )}

      {/* 6. Opportunities Cards Grid */}
      {activeSection !== 'pathways' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredOpportunities.map((opp) => {
            return (
              <div
                key={opp.id}
                id={`opp-card-${opp.id}`}
                className="bg-white rounded-3xl p-5 border-2 border-slate-200 hover:border-indigo-400 transition shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Top Bar: Type, Location & Demo Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-black px-2.5 py-1 rounded-xl bg-indigo-50 text-indigo-950 border border-indigo-200 font-arabic">
                        {isUrdu ? opp.typeUrdu : opp.type}
                      </span>
                      {opp.isLocalToPilot && (
                        <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 font-arabic flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-emerald-600" />
                          {isUrdu ? 'ڈوبے / برنالہ' : 'Dobay / Barnala'}
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-950 font-arabic shrink-0">
                      {isUrdu ? 'ڈیمو نمونہ' : 'Sample'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-black text-slate-900 font-arabic leading-snug">
                    {isUrdu ? opp.titleUrdu : opp.titleEn}
                  </h3>

                  {/* Required Skill & Level */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-arabic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-500 font-bold block text-[11px]">
                        {isUrdu ? 'درکار مہارت (Required Skill):' : 'Required Skill:'}
                      </span>
                      <span className="font-bold text-slate-800">
                        {isUrdu ? opp.requiredSkillUrdu : opp.requiredSkillEn}
                      </span>
                    </div>

                    <span className="text-[11px] font-black bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-700">
                      {isUrdu ? `سطح: ${opp.levelUrdu}` : `Level: ${opp.level}`}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-700 font-arabic leading-relaxed">
                    {isUrdu ? opp.shortDescriptionUrdu : opp.shortDescriptionEn}
                  </p>

                  {/* Why it may be suitable */}
                  <div className="bg-amber-50/70 p-3 rounded-2xl border border-amber-200/80 space-y-1 font-arabic">
                    <div className="flex items-center gap-1 text-amber-950 font-black text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{isUrdu ? 'یہ آپ کے لیے کیوں موزوں ہو سکتا ہے؟' : 'Why it may be suitable:'}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {isUrdu ? opp.whySuitableUrdu : opp.whySuitableEn}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Location & "مزید دیکھیں" button */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-arabic">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="line-clamp-1">{isUrdu ? opp.locationUrdu : opp.locationEn}</span>
                  </div>

                  <button
                    type="button"
                    id={`btn-view-opp-${opp.id}`}
                    onClick={() => setSelectedOpportunity(opp)}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs flex items-center gap-1.5 shadow-xs transition font-arabic shrink-0"
                  >
                    <span>{isUrdu ? 'مزید دیکھیں' : 'View Details'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 7. Empty State if no opportunities matched */}
      {activeSection !== 'pathways' && filteredOpportunities.length === 0 && (
        <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-3 font-arabic">
          <Info className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            {isUrdu ? 'کوئی موقع نہیں ملا' : 'No matching opportunities found'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {isUrdu
              ? 'براہ کرم سرچ کیورڈ تبدیل کریں یا فلٹر میں تمام اقسام منتخب کریں۔'
              : 'Please clear your search query or select "All Types" in the category filter.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedType('ALL');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200"
          >
            {isUrdu ? 'تمام فلٹرز ری سیٹ کریں' : 'Reset Filters'}
          </button>
        </div>
      )}

      {/* 8. Opportunity Details Modal ("مزید دیکھیں") */}
      {selectedOpportunity && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 max-w-xl w-full p-5 sm:p-7 border border-slate-200 shadow-2xl space-y-5 my-8 font-arabic animate-fade-in">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-950">
                    {isUrdu ? selectedOpportunity.typeUrdu : selectedOpportunity.type}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-950">
                    {isUrdu ? 'ڈیمو نمونہ برائے رہنمائی' : 'Demo Sample'}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {isUrdu ? selectedOpportunity.titleUrdu : selectedOpportunity.titleEn}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedOpportunity(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Meta Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 font-bold block text-[10px]">{isUrdu ? 'مقام:' : 'Location:'}</span>
                <span className="font-bold text-slate-900">{isUrdu ? selectedOpportunity.locationUrdu : selectedOpportunity.locationEn}</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span className="text-slate-500 font-bold block text-[10px]">{isUrdu ? 'مہارت کی سطح:' : 'Skill Level:'}</span>
                <span className="font-bold text-slate-900">{isUrdu ? selectedOpportunity.levelUrdu : selectedOpportunity.level}</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
                <span className="text-slate-500 font-bold block text-[10px]">{isUrdu ? 'شعبہ:' : 'Category:'}</span>
                <span className="font-bold text-slate-900">{selectedOpportunity.skillCategory}</span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs sm:text-sm font-black text-slate-900">
                {isUrdu ? 'تفصیلی تعارف و پس منظر:' : 'Detailed Overview:'}
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                {isUrdu ? selectedOpportunity.fullDetailsUrdu : selectedOpportunity.fullDetailsEn}
              </p>
            </div>

            {/* Why Suitable */}
            <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 text-xs space-y-1">
              <strong className="text-amber-950 font-bold block">
                💡 {isUrdu ? 'یہ آپ کے لیے کیوں موزوں ہے؟' : 'Why this suits your profile:'}
              </strong>
              <p className="text-slate-800 leading-relaxed">
                {isUrdu ? selectedOpportunity.whySuitableUrdu : selectedOpportunity.whySuitableEn}
              </p>
            </div>

            {/* 3 Steps to Prepare */}
            <div className="space-y-2">
              <h4 className="text-xs sm:text-sm font-black text-slate-900">
                {isUrdu ? 'اس موقع کے لیے تیار ہونے کے عملی اقدامات:' : 'Preparation Steps on Seekho:'}
              </h4>
              <div className="space-y-1.5">
                {(isUrdu ? selectedOpportunity.preparationStepsUrdu : selectedOpportunity.preparationStepsEn).map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100 text-xs text-emerald-950 font-arabic"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer in Modal */}
            <div className="p-2.5 rounded-xl bg-slate-100 text-[11px] text-slate-600 font-arabic flex items-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <span>
                {isUrdu
                  ? 'یاد دہانی: یہ سیکھو کے تعلیمی ماڈل کے تحت ایک ڈیمو پروجیکٹ آئیڈیا ہے۔'
                  : 'Notice: This is a demonstration learning model designed for skill development.'}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedOpportunity(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                {isUrdu ? 'بند کریں' : 'Close'}
              </button>

              {onNavigateToCourses && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedOpportunity(null);
                    onNavigateToCourses();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs sm:text-sm shadow-md font-arabic flex items-center gap-1.5"
                >
                  <span>{isUrdu ? 'متعلقہ کورسز دیکھیں' : 'View Relevant Courses'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
