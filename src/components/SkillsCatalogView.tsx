import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  BookOpen, 
  Clock, 
  Play, 
  Award,
  Layers,
  Cpu,
  Laptop,
  Languages as LangIcon,
  Briefcase,
  Globe,
  Palette,
  Sprout,
  Wrench,
  HeartHandshake,
  Users,
  Compass
} from 'lucide-react';
import { AgeGroup, Course, Language, UserProfile } from '../types';
import { COURSES_DATA, SKILL_CATEGORIES_DATA, UI_TRANSLATIONS } from '../data/mockData';

interface SkillsCatalogViewProps {
  language: Language;
  userProfile: UserProfile;
  onSelectCourse: (course: Course) => void;
  onOpenSkillPathway?: (skillId?: string, categoryKey?: string) => void;
}

export const SkillsCatalogView: React.FC<SkillsCatalogViewProps> = ({
  language,
  userProfile,
  onSelectCourse,
  onOpenSkillPathway,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional'>('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup | 'all'>('all');

  const ageGroups: { id: AgeGroup | 'all'; labelUrdu: string; labelEn: string }[] = [
    { id: 'all', labelUrdu: 'تمام عمریں', labelEn: 'All Ages' },
    { id: '10-15', labelUrdu: '۱۰ تا ۱۵ سال', labelEn: '10–15 yrs' },
    { id: '16-25', labelUrdu: '۱۶ تا ۲۵ سال', labelEn: '16–25 yrs' },
    { id: '26-45', labelUrdu: '۲۶ تا ۴۵ سال', labelEn: '26–45 yrs' },
    { id: '46-60', labelUrdu: '۴۶ تا ۶۰ سال', labelEn: '46–60 yrs' },
    { id: '61-70', labelUrdu: '۶۱ تا ۷۰ سال', labelEn: '61–70 yrs' },
    { id: '70+', labelUrdu: '۷۰ سال سے زائد', labelEn: '70+ yrs' },
  ];

  const levels: { id: 'all' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional'; labelUrdu: string; labelEn: string }[] = [
    { id: 'all', labelUrdu: 'تمام (All)', labelEn: 'All' },
    { id: 'Beginner', labelUrdu: 'ابتدائی (Beginner)', labelEn: 'Beginner' },
    { id: 'Intermediate', labelUrdu: 'درمیانہ (Intermediate)', labelEn: 'Intermediate' },
    { id: 'Advanced', labelUrdu: 'اعلیٰ (Advanced)', labelEn: 'Advanced' },
    { id: 'Professional', labelUrdu: 'پروفیشنل پروجیکٹ (Professional)', labelEn: 'Professional' },
  ];

  // Helper for level badge color and label
  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Beginner':
        return {
          bg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          badgeUrdu: 'ابتدائی (Beginner)',
          badgeEn: 'Beginner'
        };
      case 'Intermediate':
        return {
          bg: 'bg-sky-100 text-sky-800 border-sky-300',
          badgeUrdu: 'درمیانہ (Intermediate)',
          badgeEn: 'Basic / Intermediate'
        };
      case 'Advanced':
        return {
          bg: 'bg-purple-100 text-purple-800 border-purple-300',
          badgeUrdu: 'اعلیٰ (Advanced)',
          badgeEn: 'Advanced'
        };
      case 'Professional':
        return {
          bg: 'bg-amber-100 text-amber-900 border-amber-300',
          badgeUrdu: 'پروفیشنل پروجیکٹ (Pro)',
          badgeEn: 'Professional Project'
        };
      default:
        return {
          bg: 'bg-slate-100 text-slate-800 border-slate-300',
          badgeUrdu: level,
          badgeEn: level
        };
    }
  };

  // Helper to render category icon
  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'AI & Technology':
        return <Cpu className="w-4 h-4" />;
      case 'Computer & Digital Skills':
        return <Laptop className="w-4 h-4" />;
      case 'Communication & Languages':
        return <LangIcon className="w-4 h-4" />;
      case 'Business & Freelancing':
        return <Briefcase className="w-4 h-4" />;
      case 'Creative Skills':
        return <Palette className="w-4 h-4" />;
      case 'Agriculture & Local Skills':
        return <Sprout className="w-4 h-4" />;
      case 'Technical Trades':
        return <Wrench className="w-4 h-4" />;
      case 'Life Skills':
        return <Compass className="w-4 h-4" />;
      case 'Character & Leadership':
        return <HeartHandshake className="w-4 h-4" />;
      case 'Community Development':
        return <Users className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesSearch = searchQuery === '' ||
      course.titleUrdu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.descriptionUrdu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.difficulty === selectedLevel;
    const matchesAge = selectedAgeGroup === 'all' || course.ageGroups.includes(selectedAgeGroup);

    return matchesSearch && matchesCategory && matchesLevel && matchesAge;
  });

  return (
    <div className="space-y-6 pb-24 max-w-6xl mx-auto px-3 sm:px-6 pt-2">
      {/* Page Header */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              {language === 'ur' ? 'مہارت اور کورس لائبریری' : 'Skill & Course Library'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {language === 'ur'
                ? '10 بنیادی شعبہ جات: آرٹیفیشل انٹیلیجنس، ڈیجیٹل اسکلز، کاروبار، زراعت، اخلاقیات اور کمیونٹی سروس'
                : '10 fundamental domains spanning AI, Digital Skills, Business, Agriculture, Ethics, and Community Service.'}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              id="skills-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ur' ? 'مہارت یا کورس تلاش کریں...' : 'Search skills or courses...'}
              className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3" />
          </div>
        </div>

        {/* Skill to Opportunity Path Banner Highlight */}
        {onOpenSkillPathway && (
          <div className="mt-4 p-3.5 bg-gradient-to-r from-emerald-800 to-teal-800 text-white rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-white/10 rounded-xl">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="text-xs font-black text-amber-300">
                  {language === 'ur' ? 'ہنر سے موقع کا راستہ (Learn → Build → Apply → Earn)' : 'Skill to Opportunity Path (Learn → Build → Apply → Earn)'}
                </span>
                <p className="text-[11px] text-emerald-100 font-medium">
                  {language === 'ur'
                    ? 'جانیں کہ آپ کی سیکھی ہوئی مہارت کس طرح عملی پروجیکٹ اور حلال روزگار میں تبدیل ہو سکتی ہے'
                    : 'Discover how your skill turns into real projects and halal opportunities.'}
                </p>
              </div>
            </div>
            <button
              id="open-skill-pathway-global-btn"
              type="button"
              onClick={() => onOpenSkillPathway()}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black rounded-xl transition shadow-xs whitespace-nowrap self-stretch sm:self-auto text-center"
            >
              {language === 'ur' ? 'راستہ دیکھیں' : 'Explore Pathways'}
            </button>
          </div>
        )}

        {/* Level and Age Group Filters */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Level Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-700 whitespace-nowrap flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              {language === 'ur' ? 'لیول:' : 'Level:'}
            </span>
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  selectedLevel === lvl.id
                    ? 'bg-emerald-700 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {language === 'ur' ? lvl.labelUrdu : lvl.labelEn}
              </button>
            ))}
          </div>

          {/* Age Group Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-700 whitespace-nowrap flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              {language === 'ur' ? 'عمر:' : 'Age:'}
            </span>
            {ageGroups.map((ag) => (
              <button
                key={ag.id}
                onClick={() => setSelectedAgeGroup(ag.id)}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  selectedAgeGroup === ag.id
                    ? 'bg-emerald-700 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {language === 'ur' ? ag.labelUrdu : ag.labelEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 10 Canonical Categories Grid Selector */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>{language === 'ur' ? '۱۰ بنیادی کیٹیگریز (Skill Categories)' : '10 Skill Categories'}</span>
          </h2>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs text-emerald-700 font-bold hover:underline"
            >
              {language === 'ur' ? 'تمام کیٹیگریز دیکھیں' : 'Show All Categories'}
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {SKILL_CATEGORIES_DATA.map((cat, idx) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                className={`p-3 rounded-2xl border text-start transition flex items-center gap-2.5 group ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-md font-bold'
                    : 'bg-white hover:bg-emerald-50/50 border-slate-200 text-slate-800'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100'
                }`}>
                  {getCategoryIcon(cat.id)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-400 group-hover:text-emerald-600 font-bold">
                    {idx + 1}
                  </div>
                  <div className="text-xs font-bold leading-tight truncate">
                    {language === 'ur' ? cat.ur : cat.id}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Courses Cards Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            {language === 'ur' ? `دستیاب کورسز (${filteredCourses.length})` : `Available Courses (${filteredCourses.length})`}
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            {language === 'ur' ? 'ہر کورس میں سبق، کوئز اور عملی مشق شامل ہے' : 'Every course includes lessons, quiz, and practical tasks'}
          </span>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 space-y-2">
            <p className="text-slate-500 text-sm">
              {language === 'ur' ? 'کوئی کورس نہیں ملا، براہ کرم فلٹر تبدیل کریں۔' : 'No courses matched your filters.'}
            </p>
            <button
              onClick={() => { setSelectedCategory(null); setSelectedLevel('all'); setSelectedAgeGroup('all'); setSearchQuery(''); }}
              className="text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl"
            >
              {language === 'ur' ? 'تمام فلٹرز ری سیٹ کریں' : 'Reset All Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition overflow-hidden flex flex-col justify-between group"
              >
                {/* Course Header Banner */}
                <div className={`p-4 bg-gradient-to-r ${course.coverGradient} text-white relative`}>
                  <div className="flex items-center justify-between gap-2 text-xs mb-2">
                    <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full font-medium truncate">
                      {language === 'ur' ? course.categoryUrdu : course.category}
                    </span>
                    <span className="bg-white/30 backdrop-blur-md px-2.5 py-0.5 rounded-full font-bold border border-white/30 shrink-0">
                      {language === 'ur' 
                        ? (course.difficulty === 'Beginner' ? 'لیول: ابتدائی' : course.difficulty === 'Intermediate' ? 'لیول: درمیانہ' : course.difficulty === 'Advanced' ? 'لیول: اعلیٰ' : 'لیول: پروفیشنل')
                        : `Level: ${course.difficulty}`}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {language === 'ur' ? course.titleUrdu : course.titleEn}
                  </h3>
                </div>

                {/* Course Description and Metrics */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3.5">
                  <div className="space-y-2">
                    {/* Level Pill in Card Body */}
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${getLevelBadge(course.difficulty).bg}`}>
                        {language === 'ur' ? getLevelBadge(course.difficulty).badgeUrdu : getLevelBadge(course.difficulty).badgeEn}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {language === 'ur' ? course.descriptionUrdu : course.descriptionEn}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{course.lessons.length} {language === 'ur' ? 'اسباق' : 'Lessons'}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{course.estimatedHours} {language === 'ur' ? 'گھنٹے' : 'hours'}</span>
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-1.5">
                      <button
                        id={`start-course-btn-${course.id}`}
                        onClick={() => onSelectCourse(course)}
                        className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>{language === 'ur' ? 'کورس شروع کریں' : 'Start Course'}</span>
                      </button>

                      {onOpenSkillPathway && (
                        <button
                          id={`pathway-course-btn-${course.id}`}
                          type="button"
                          onClick={() => onOpenSkillPathway(course.id, course.category)}
                          className="w-full py-1.5 px-3 rounded-lg text-emerald-800 hover:bg-emerald-50 text-[11px] font-bold flex items-center justify-center gap-1 transition"
                        >
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          <span>{language === 'ur' ? 'ہنر سے موقع کا راستہ دیکھیں' : 'View Opportunity Path'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
