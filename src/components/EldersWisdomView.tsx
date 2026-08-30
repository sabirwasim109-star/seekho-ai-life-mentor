import React, { useState, useEffect, useMemo } from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  UserCheck, 
  Award,
  Send,
  PlusCircle,
  Clock,
  Heart,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  Sprout,
  Hammer,
  Briefcase,
  Landmark,
  Home,
  GraduationCap,
  Compass,
  TreePine,
  Search,
  Filter,
  X,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Share2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { 
  ELDER_CATEGORIES, 
  INITIAL_ELDER_ENTRIES, 
  ElderKnowledgeEntry, 
  ElderKnowledgeCategoryKey 
} from '../data/elderKnowledgeData';

interface EldersWisdomViewProps {
  language: Language;
  userProfile: UserProfile;
}

export const EldersWisdomView: React.FC<EldersWisdomViewProps> = ({
  language,
  userProfile,
}) => {
  const isUrdu = language === 'ur';

  // 1. Local state for all entries (initialized from localStorage or mock data)
  const [entries, setEntries] = useState<ElderKnowledgeEntry[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_elder_knowledge_entries');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_ELDER_ENTRIES;
  });

  // Saved / Bookmarked entries
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_elder_saved_ids');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return ['ek-1', 'ek-4'];
  });

  // "میں نے یہ سیکھا" (Learned) marked IDs
  const [learnedIds, setLearnedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_elder_learned_ids');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return ['ek-1'];
  });

  // Category filter and search query
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active detail modal
  const [detailEntry, setDetailEntry] = useState<ElderKnowledgeEntry | null>(null);

  // Question modal / input state
  const [askingQuestionFor, setAskingQuestionFor] = useState<ElderKnowledgeEntry | null>(null);
  const [questionText, setQuestionText] = useState<string>('');
  const [questionSubmitted, setQuestionSubmitted] = useState<boolean>(false);

  // Modal for Elder knowledge creation
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    elderName: userProfile.name || (isUrdu ? 'حاجی محمد یوسف' : 'Haji Muhammad Yousaf'),
    elderAge: 65,
    area: 'ڈوبے، برنالہ، آزاد کشمیر',
    category: 'agriculture' as ElderKnowledgeCategoryKey,
    titleUrdu: '',
    titleEn: '',
    experienceUrdu: '',
    experienceEn: '',
    sourceUrdu: '',
    sourceEn: '',
    whyUsefulUrdu: '',
    whyUsefulEn: '',
  });

  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [showSuccessBanner, setShowSuccessBanner] = useState<boolean>(false);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('seekho_elder_knowledge_entries', JSON.stringify(entries));
    } catch (e) {
      // ignore
    }
  }, [entries]);

  useEffect(() => {
    try {
      localStorage.setItem('seekho_elder_saved_ids', JSON.stringify(savedIds));
    } catch (e) {
      // ignore
    }
  }, [savedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('seekho_elder_learned_ids', JSON.stringify(learnedIds));
    } catch (e) {
      // ignore
    }
  }, [learnedIds]);

  // Sync modal dismissal with Android system back button & Escape key
  useEffect(() => {
    if (!showCreateModal && !askingQuestionFor) return;

    const handlePopState = () => {
      setShowCreateModal(false);
      setAskingQuestionFor(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowCreateModal(false);
        setAskingQuestionFor(null);
      }
    };

    window.history.pushState({ modal: 'elder-modal' }, '');
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showCreateModal, askingQuestionFor]);

  // Handle TTS
  const handleSpeak = (id: string, text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'ur' ? 'ur-PK' : 'en-US';
      utterance.rate = 0.9;
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      window.speechSynthesis.speak(utterance);
      setSpeakingId(id);
    }
  };

  // Toggle bookmark
  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedIds((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      // update count in entry
      setEntries((all) =>
        all.map((item) =>
          item.id === id
            ? { ...item, savedCount: exists ? Math.max(0, item.savedCount - 1) : item.savedCount + 1 }
            : item
        )
      );
      return updated;
    });
  };

  // Toggle "میں نے یہ سیکھا"
  const handleToggleLearned = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLearnedIds((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      // update count in entry
      setEntries((all) =>
        all.map((item) =>
          item.id === id
            ? { ...item, learnedCount: exists ? Math.max(0, item.learnedCount - 1) : item.learnedCount + 1 }
            : item
        )
      );
      return updated;
    });
  };

  // Handle Question Submit
  const handleSendQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim() || !askingQuestionFor) return;
    
    // Increment question count
    setEntries((all) =>
      all.map((item) =>
        item.id === askingQuestionFor.id
          ? { ...item, questionsCount: (item.questionsCount || 0) + 1 }
          : item
      )
    );
    setQuestionSubmitted(true);
    setTimeout(() => {
      setQuestionSubmitted(false);
      setQuestionText('');
      setAskingQuestionFor(null);
    }, 2000);
  };

  // Handle Create Entry
  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.titleUrdu && !formData.titleEn) return;
    if (!formData.experienceUrdu && !formData.experienceEn) return;

    const newEntry: ElderKnowledgeEntry = {
      id: `ek-${Date.now()}`,
      elderName: formData.elderName || (isUrdu ? 'بزرگ استاد' : 'Elder Mentor'),
      elderAge: Number(formData.elderAge) || 65,
      area: formData.area || 'ڈوبے، برنالہ، آزاد کشمیر',
      category: formData.category,
      titleUrdu: formData.titleUrdu || formData.titleEn,
      titleEn: formData.titleEn || formData.titleUrdu,
      experienceUrdu: formData.experienceUrdu || formData.experienceEn,
      experienceEn: formData.experienceEn || formData.experienceUrdu,
      sourceUrdu: formData.sourceUrdu || (isUrdu ? 'زندگی کے طویل عملی تجربات اور مشاہدات سے۔' : 'From life experiences and observations.'),
      sourceEn: formData.sourceEn || 'From life experiences and direct practice.',
      whyUsefulUrdu: formData.whyUsefulUrdu || (isUrdu ? 'نئی نسل کے عملی فائدے اور رہنمائی کے لیے۔' : 'For guiding and empowering the next generation.'),
      whyUsefulEn: formData.whyUsefulEn || 'For practical guidance of youth.',
      date: isUrdu ? 'آج' : 'Today',
      learnedCount: 1,
      savedCount: 0,
      questionsCount: 0,
    };

    setEntries([newEntry, ...entries]);
    setShowCreateModal(false);
    setShowSuccessBanner(true);
    setTimeout(() => setShowSuccessBanner(false), 4000);

    // Reset form
    setFormData({
      elderName: userProfile.name || (isUrdu ? 'حاجی محمد یوسف' : 'Haji Muhammad Yousaf'),
      elderAge: 65,
      area: 'ڈوبے، برنالہ، آزاد کشمیر',
      category: 'agriculture',
      titleUrdu: '',
      titleEn: '',
      experienceUrdu: '',
      experienceEn: '',
      sourceUrdu: '',
      sourceEn: '',
      whyUsefulUrdu: '',
      whyUsefulEn: '',
    });
  };

  const getCategoryIcon = (categoryKey: ElderKnowledgeCategoryKey) => {
    switch (categoryKey) {
      case 'agriculture': return Sprout;
      case 'crafts': return Hammer;
      case 'business': return Briefcase;
      case 'local_history': return Landmark;
      case 'home_life': return Home;
      case 'education': return GraduationCap;
      case 'life_experience': return Compass;
      case 'environment': return TreePine;
      case 'social_service': return HeartHandshake;
      case 'other':
      default: return Sparkles;
    }
  };

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      const matchCat = selectedCategory === 'all' || entry.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchCat;
      const matchSearch =
        entry.titleUrdu.toLowerCase().includes(q) ||
        entry.titleEn.toLowerCase().includes(q) ||
        entry.elderName.toLowerCase().includes(q) ||
        entry.area.toLowerCase().includes(q) ||
        entry.experienceUrdu.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [entries, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 pb-28 max-w-5xl mx-auto px-3 sm:px-6 pt-2">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-br from-amber-900 via-amber-950 to-slate-900 text-white rounded-3xl p-5 sm:p-7 shadow-lg border border-amber-500/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black flex items-center gap-1.5 font-arabic">
              <HeartHandshake className="w-3.5 h-3.5" />
              {isUrdu ? 'ہمارے بزرگ، ہمارا علم' : 'Elder Knowledge'}
            </span>
            <span className="text-xs text-amber-200 font-bold font-arabic">
              {isUrdu ? 'نسلوں کے درمیان علم کا پل' : 'Intergenerational Knowledge Sharing'}
            </span>
          </div>

          <span className="text-[11px] text-amber-100/90 bg-white/10 px-3 py-0.5 rounded-full font-medium">
            {isUrdu ? 'ڈوبے، برنالہ، آزاد کشمیر' : 'Dobay, Barnala, Azad Kashmir'}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <h1 className="text-xl sm:text-3xl font-black text-white font-arabic tracking-tight">
              {isUrdu ? 'بزرگوں کی دانائی، تجربات اور عملی علم' : 'Wisdom & Real-Life Knowledge from Elders'}
            </h1>
            <p className="text-xs sm:text-sm text-amber-100/90 font-arabic leading-relaxed">
              {isUrdu
                ? 'نصف صدی کے سچے تجربات، روایتی ہنر، زراعت، کاروبار اور اخلاقی رہنما اصول—جو نوجوانوں کے روشن مستقبل کی بنیاد ہیں۔'
                : 'Half a century of authentic experiences, craft mastery, agriculture, and wisdom guiding our youth.'}
            </p>
          </div>

          {/* Button: Share Elder Knowledge */}
          <button
            type="button"
            id="btn-open-create-elder-knowledge"
            onClick={() => setShowCreateModal(true)}
            className="w-full md:w-auto px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-md font-arabic shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-slate-950" />
            <span>{isUrdu ? '+ اپنا تجربہ درج کریں' : '+ Share Elder Experience'}</span>
          </button>
        </div>
      </div>

      {/* Success Notification Banner */}
      {showSuccessBanner && (
        <div className="bg-emerald-50 border-2 border-emerald-500 text-emerald-950 p-4 rounded-2xl flex items-center justify-between gap-3 shadow-sm font-arabic">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <p className="text-xs sm:text-sm font-bold">
              {isUrdu
                ? 'ماشاءاللہ! آپ کا قیمتی علم کامیابی سے شامل کر دیا گیا ہے اور نئی نسل کے لیے دستیاب ہے۔'
                : 'Knowledge entry successfully saved and shared with the community!'}
            </p>
          </div>
          <button onClick={() => setShowSuccessBanner(false)} className="text-emerald-700 hover:text-emerald-900">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 2. Category Filter Bar (10 Categories) */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-700" />
            <h2 className="text-xs sm:text-sm font-black text-slate-900 font-arabic">
              {isUrdu ? 'شعبہ جات (۱۰ کیٹیگریز)' : 'Categories (10 Categories)'}
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isUrdu ? 'عنوان، بزرگ یا علاقہ تلاش کریں...' : 'Search title, elder, or area...'}
              className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl pr-9 pl-3 py-2 border border-slate-200 focus:outline-none focus:border-amber-500 font-arabic"
            />
          </div>
        </div>

        {/* 10 Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 transition font-arabic ${
              selectedCategory === 'all'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {isUrdu ? 'تمام شعبے' : 'All Categories'} ({entries.length})
          </button>

          {ELDER_CATEGORIES.map((cat) => {
            const CatIcon = getCategoryIcon(cat.key);
            const isSelected = selectedCategory === cat.key;
            const count = entries.filter((e) => e.category === cat.key).length;

            return (
              <button
                key={cat.key}
                type="button"
                id={`cat-filter-${cat.key}`}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 flex items-center gap-1.5 transition font-arabic ${
                  isSelected
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <CatIcon className="w-3.5 h-3.5" />
                <span>{isUrdu ? `${cat.number}. ${cat.nameUrdu}` : `${cat.number}. ${cat.nameEn}`}</span>
                <span className="text-[10px] opacity-75">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Knowledge Entries Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-xl font-black text-slate-900 font-arabic">
            {isUrdu ? 'بزرگوں کے قیمتی تجربات و اسباق' : 'Elder Knowledge Entries'}
          </h2>
          <span className="text-xs text-slate-500 font-bold font-arabic">
            {isUrdu ? `${filteredEntries.length} اندراجات دستیاب` : `${filteredEntries.length} entries available`}
          </span>
        </div>

        {filteredEntries.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center border border-slate-200 space-y-2">
            <Sparkles className="w-8 h-8 text-amber-500 mx-auto" />
            <h3 className="text-sm font-bold text-slate-800 font-arabic">
              {isUrdu ? 'کوئی اندراج نہیں ملا' : 'No entries found'}
            </h3>
            <p className="text-xs text-slate-500 font-arabic">
              {isUrdu ? 'فلٹر تبدیل کریں یا اپنا تجربہ شامل کریں۔' : 'Try changing filters or add a new entry.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredEntries.map((entry) => {
              const CatIcon = getCategoryIcon(entry.category);
              const catMeta = ELDER_CATEGORIES.find((c) => c.key === entry.category) || ELDER_CATEGORIES[0];
              const isSaved = savedIds.includes(entry.id);
              const isLearned = learnedIds.includes(entry.id);

              return (
                <div
                  key={entry.id}
                  id={`elder-entry-card-${entry.id}`}
                  onClick={() => setDetailEntry(entry)}
                  className="bg-white rounded-3xl p-5 border-2 border-slate-200 hover:border-amber-400 transition-all shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Elder Header Profile */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-950 flex items-center justify-center font-black text-base shrink-0 border border-amber-200">
                          {entry.elderName.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-sm sm:text-base font-black text-slate-900 font-arabic">
                              {entry.elderName}
                            </h3>
                            <span className="text-[11px] bg-amber-100 text-amber-950 px-2 py-0.5 rounded-full font-bold">
                              {entry.elderAge} {isUrdu ? 'سال' : 'yrs'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-arabic mt-0.5">{entry.area}</p>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <span className="flex items-center gap-1 text-[11px] font-black px-2.5 py-1 rounded-xl bg-slate-100 text-slate-800 font-arabic shrink-0">
                        <CatIcon className="w-3.5 h-3.5 text-amber-700" />
                        <span>{isUrdu ? catMeta.nameUrdu : catMeta.nameEn}</span>
                      </span>
                    </div>

                    {/* Entry Title */}
                    <h4 className="text-sm sm:text-base font-black text-slate-900 font-arabic leading-snug">
                      {isUrdu ? entry.titleUrdu : entry.titleEn}
                    </h4>

                    {/* Experience Quote Snippet */}
                    <div className="bg-amber-50/60 rounded-2xl p-3.5 border border-amber-200/80 text-xs sm:text-sm text-slate-800 font-arabic leading-relaxed line-clamp-3">
                      "{isUrdu ? entry.experienceUrdu : entry.experienceEn}"
                    </div>

                    {/* Meta: Source & Why Useful Pills */}
                    <div className="space-y-1.5 text-[11px] font-arabic">
                      <div className="text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <strong className="text-amber-950 font-bold">
                          {isUrdu ? 'کہاں سے سیکھا: ' : 'Learned From: '}
                        </strong>
                        {isUrdu ? entry.sourceUrdu : entry.sourceEn}
                      </div>

                      <div className="text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <strong className="text-emerald-950 font-bold">
                          {isUrdu ? 'کیوں مفید ہے: ' : 'Why Useful: '}
                        </strong>
                        {isUrdu ? entry.whyUsefulUrdu : entry.whyUsefulEn}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Controls */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    {/* Left side: Listen & Ask Question */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeak(entry.id, isUrdu ? entry.experienceUrdu : entry.experienceEn);
                        }}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
                        title={isUrdu ? 'سنیں' : 'Listen'}
                      >
                        {speakingId === entry.id ? <VolumeX className="w-4 h-4 text-amber-700" /> : <Volume2 className="w-4 h-4 text-slate-700" />}
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setAskingQuestionFor(entry);
                        }}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold font-arabic transition"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
                        <span>{isUrdu ? 'سوال پوچھیں' : 'Ask Question'}</span>
                      </button>
                    </div>

                    {/* Right side: Save & "میں نے یہ سیکھا" */}
                    <div className="flex items-center gap-1.5">
                      {/* Save / Bookmark */}
                      <button
                        type="button"
                        id={`btn-save-elder-${entry.id}`}
                        onClick={(e) => handleToggleBookmark(entry.id, e)}
                        className={`p-2 rounded-xl transition ${
                          isSaved
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                        title={isUrdu ? 'محفوظ کریں' : 'Save'}
                      >
                        {isSaved ? <BookmarkCheck className="w-4 h-4 text-amber-800" /> : <Bookmark className="w-4 h-4" />}
                      </button>

                      {/* "میں نے یہ سیکھا" Button */}
                      <button
                        type="button"
                        id={`btn-learned-elder-${entry.id}`}
                        onClick={(e) => handleToggleLearned(entry.id, e)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition font-arabic ${
                          isLearned
                            ? 'bg-emerald-700 text-white shadow-2xs'
                            : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isLearned ? 'text-white' : 'text-emerald-700'}`} />
                        <span>{isUrdu ? 'میں نے یہ سیکھا' : 'I Learned This'}</span>
                        <span className="text-[10px] opacity-80">({entry.learnedCount})</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. Generation Bridge Section (As explicitly requested by user) */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/30 shadow-lg space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black font-arabic inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {isUrdu ? 'نسلوں کا ملاپ اور عملی تسلسل' : 'Generation Bridge'}
          </span>

          <h2 className="text-lg sm:text-2xl font-black text-amber-300 font-arabic tracking-tight">
            "بزرگوں کا تجربہ + نوجوانوں کی توانائی = بہتر مستقبل"
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100/90 font-arabic">
            {isUrdu
              ? 'جب بزرگ اپنا نصف صدی کا علم سکھاتے ہیں اور نوجوان اسے جدید ٹیکنالوجی سے عملی زندگی میں لاتے ہیں، تو پورا معاشرہ خوددار بنتا ہے۔'
              : 'When elders pass down their life lessons and youth apply them with modern tech, the entire community thrives.'}
          </p>
        </div>

        {/* The 4-Step Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
          {/* Step 1: بزرگ سکھائیں */}
          <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/10 text-center space-y-2 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-base shadow-sm">
              ۱
            </div>
            <h3 className="text-sm font-black text-white font-arabic">
              {isUrdu ? 'بزرگ سکھائیں' : 'Elders Teach'}
            </h3>
            <p className="text-[11px] text-amber-200/90 font-arabic">
              {isUrdu ? 'قیمتی تجربات، اخلاق اور روایتی ہنر' : 'Valuable experiences and heritage crafts'}
            </p>
          </div>

          {/* Step 2: نوجوان سیکھیں */}
          <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/10 text-center space-y-2 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-2xl bg-emerald-400 text-slate-950 flex items-center justify-center font-black text-base shadow-sm">
              ۲
            </div>
            <h3 className="text-sm font-black text-white font-arabic">
              {isUrdu ? 'نوجوان سیکھیں' : 'Youth Learn'}
            </h3>
            <p className="text-[11px] text-emerald-200/90 font-arabic">
              {isUrdu ? 'ادب، توجہ اور فہم کے ساتھ' : 'With respect, focus, and curiosity'}
            </p>
          </div>

          {/* Step 3: نوجوان عمل کریں */}
          <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/10 text-center space-y-2 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-2xl bg-cyan-400 text-slate-950 flex items-center justify-center font-black text-base shadow-sm">
              ۳
            </div>
            <h3 className="text-sm font-black text-white font-arabic">
              {isUrdu ? 'نوجوان عمل کریں' : 'Youth Act'}
            </h3>
            <p className="text-[11px] text-cyan-200/90 font-arabic">
              {isUrdu ? 'عملی پروجیکٹس اور ڈیجیٹل ٹولز کے ساتھ' : 'Through practical projects and tech'}
            </p>
          </div>

          {/* Step 4: علم اگلی نسل تک پہنچے */}
          <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/10 text-center space-y-2 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-2xl bg-rose-400 text-slate-950 flex items-center justify-center font-black text-base shadow-sm">
              ۴
            </div>
            <h3 className="text-sm font-black text-white font-arabic">
              {isUrdu ? 'علم اگلی نسل تک پہنچے' : 'Pass to Next Gen'}
            </h3>
            <p className="text-[11px] text-rose-200/90 font-arabic">
              {isUrdu ? 'دیرپا فائدہ اور صدقہ جاریہ' : 'Sustainable impact and living legacy'}
            </p>
          </div>
        </div>
      </div>

      {/* 5. Detail Modal (When an entry is opened) */}
      {detailEntry && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 max-w-2xl w-full p-5 sm:p-7 border border-slate-200 shadow-2xl space-y-5 my-8">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-950 flex items-center justify-center font-black text-lg border border-amber-200">
                  {detailEntry.elderName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                      {detailEntry.elderName}
                    </h3>
                    <span className="text-xs bg-amber-100 text-amber-950 px-2.5 py-0.5 rounded-full font-bold">
                      {detailEntry.elderAge} {isUrdu ? 'سال' : 'yrs'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-arabic mt-0.5">{detailEntry.area}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setDetailEntry(null)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Details */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-xl font-black text-slate-900 font-arabic leading-snug">
                {isUrdu ? detailEntry.titleUrdu : detailEntry.titleEn}
              </h2>

              {/* Full Experience */}
              <div className="bg-amber-50/80 rounded-2xl p-4 sm:p-5 border border-amber-200 text-xs sm:text-sm text-slate-900 font-arabic leading-relaxed whitespace-pre-line">
                <strong className="block text-amber-950 font-black text-sm mb-1.5">
                  {isUrdu ? 'میرا تجربہ:' : 'My Experience:'}
                </strong>
                {isUrdu ? detailEntry.experienceUrdu : detailEntry.experienceEn}
              </div>

              {/* میں نے یہ کہاں سے سیکھا؟ */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs sm:text-sm text-slate-800 font-arabic space-y-1">
                <strong className="block text-slate-950 font-black">
                  {isUrdu ? 'میں نے یہ کہاں سے سیکھا؟' : 'Where did I learn this from?'}
                </strong>
                <p>{isUrdu ? detailEntry.sourceUrdu : detailEntry.sourceEn}</p>
              </div>

              {/* یہ علم دوسروں کے لیے کیوں مفید ہے؟ */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-arabic space-y-1">
                <strong className="block text-emerald-950 font-black">
                  {isUrdu ? 'یہ علم دوسروں کے لیے کیوں مفید ہے؟' : 'Why is this knowledge useful for others?'}
                </strong>
                <p>{isUrdu ? detailEntry.whyUsefulUrdu : detailEntry.whyUsefulEn}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => handleSpeak(detailEntry.id, isUrdu ? detailEntry.experienceUrdu : detailEntry.experienceEn)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs font-arabic"
              >
                {speakingId === detailEntry.id ? <VolumeX className="w-4 h-4 text-amber-700" /> : <Volume2 className="w-4 h-4" />}
                <span>{speakingId === detailEntry.id ? (isUrdu ? 'آواز بند کریں' : 'Stop Audio') : (isUrdu ? 'آواز سے سنیں' : 'Listen with Audio')}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleBookmark(detailEntry.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition font-arabic ${
                    savedIds.includes(detailEntry.id)
                      ? 'bg-amber-100 text-amber-950 border border-amber-300'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{savedIds.includes(detailEntry.id) ? (isUrdu ? 'محفوظ شدہ' : 'Bookmarked') : (isUrdu ? 'محفوظ کریں' : 'Bookmark')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleToggleLearned(detailEntry.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition font-arabic ${
                    learnedIds.includes(detailEntry.id)
                      ? 'bg-emerald-700 text-white'
                      : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isUrdu ? 'میں نے یہ سیکھا' : 'I Learned This'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Ask Question Modal */}
      {askingQuestionFor && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-700" />
                <h3 className="text-base font-black text-slate-900 font-arabic">
                  {isUrdu ? `بزرگ ${askingQuestionFor.elderName} سے سوال پوچھیں` : `Ask ${askingQuestionFor.elderName}`}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setAskingQuestionFor(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {questionSubmitted ? (
              <div className="bg-emerald-50 border-2 border-emerald-500 text-emerald-950 p-5 rounded-2xl text-center space-y-2 font-arabic">
                <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                <h4 className="font-black text-sm">
                  {isUrdu ? 'جزاک اللہ! آپ کا سوال درج کر لیا گیا ہے۔' : 'Your question has been noted!'}
                </h4>
                <p className="text-xs text-emerald-900">
                  {isUrdu
                    ? 'بزرگ استاد اگلی بیٹھک یا سیشن میں اس کی مزید وضاحت فرمائیں گے۔'
                    : 'The elder mentor will address this in the upcoming community circle.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendQuestion} className="space-y-3 font-arabic">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {isUrdu ? 'آپ کا سوال یا وضاحت کی درخواست:' : 'Your question or request for clarification:'}
                  </label>
                  <textarea
                    rows={4}
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    required
                    placeholder={
                      isUrdu
                        ? 'محترم بابا جی، کیا آپ اس طریقہ کار میں پانی کی مقدار یا اوزاروں کے بارے میں مزید بتا سکتے ہیں؟'
                        : 'Dear Elder, could you please explain more about the tools or timing used in this practice?'
                    }
                    className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm rounded-2xl p-3.5 border border-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setAskingQuestionFor(null)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    {isUrdu ? 'منسوخ کریں' : 'Cancel'}
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isUrdu ? 'سوال بھیجیں' : 'Send Question'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 7. Create Elder Knowledge Entry Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 border border-slate-200 shadow-2xl space-y-5 my-8">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 font-arabic">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-amber-700" />
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {isUrdu ? 'بزرگ کا قیمتی تجربہ و علم درج کریں' : 'Share Elder Knowledge Entry'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4 font-arabic text-xs sm:text-sm">
              {/* Elder Name, Age, Area */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    {isUrdu ? 'بزرگ کا نام' : 'Elder Mentor Name'} *
                  </label>
                  <input
                    type="text"
                    value={formData.elderName}
                    onChange={(e) => setFormData({ ...formData, elderName: e.target.value })}
                    required
                    className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    {isUrdu ? 'عمر (سال)' : 'Age (Years)'} *
                  </label>
                  <input
                    type="number"
                    min={40}
                    max={120}
                    value={formData.elderAge}
                    onChange={(e) => setFormData({ ...formData, elderAge: Number(e.target.value) })}
                    required
                    className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    {isUrdu ? 'علاقہ' : 'Area'} *
                  </label>
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    required
                    className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Category Selection (10 categories) */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isUrdu ? 'شعبہ (Category)' : 'Category'} *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as ElderKnowledgeCategoryKey })}
                  className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-amber-500"
                >
                  {ELDER_CATEGORIES.map((cat) => (
                    <option key={cat.key} value={cat.key}>
                      {cat.number}. {isUrdu ? cat.nameUrdu : cat.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* عنوان (Title) */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isUrdu ? 'عنوان (Title)' : 'Title'} *
                </label>
                <input
                  type="text"
                  value={formData.titleUrdu}
                  onChange={(e) => setFormData({ ...formData, titleUrdu: e.target.value })}
                  required
                  placeholder={isUrdu ? 'مثلاً: بارانی مٹی کی زرخیزی اور دیسی کھاد کا گر' : 'e.g., Soil moisture conservation'}
                  className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* میرا تجربہ (My Experience) */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isUrdu ? 'میرا تجربہ (My Experience)' : 'My Experience'} *
                </label>
                <textarea
                  rows={3}
                  value={formData.experienceUrdu}
                  onChange={(e) => setFormData({ ...formData, experienceUrdu: e.target.value })}
                  required
                  placeholder={isUrdu ? 'اپنا طویل عملی مشاہدہ، طریقہ کار اور نصیحت تفصیل سے لکھیں...' : 'Share detailed life experience...'}
                  className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* میں نے یہ کہاں سے سیکھا؟ */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isUrdu ? 'میں نے یہ کہاں سے سیکھا؟' : 'Where did I learn this from?'} *
                </label>
                <input
                  type="text"
                  value={formData.sourceUrdu}
                  onChange={(e) => setFormData({ ...formData, sourceUrdu: e.target.value })}
                  required
                  placeholder={isUrdu ? 'مثلاً: اپنے دادا جان اور ۴۰ سالہ عملی کھیتی باڑی سے' : 'e.g., From forefathers and 40 years practice'}
                  className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* یہ علم دوسروں کے لیے کیوں مفید ہے؟ */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isUrdu ? 'یہ علم دوسروں کے لیے کیوں مفید ہے؟' : 'Why is this knowledge useful for others?'} *
                </label>
                <input
                  type="text"
                  value={formData.whyUsefulUrdu}
                  onChange={(e) => setFormData({ ...formData, whyUsefulUrdu: e.target.value })}
                  required
                  placeholder={isUrdu ? 'مثلاً: اس سے کم خرچ میں بہتر فصل حاصل ہوتی ہے اور زمین محفوظ رہتی ہے' : 'e.g., Reduces cost and preserves soil'}
                  className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  {isUrdu ? 'منسوخ کریں' : 'Cancel'}
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md"
                >
                  {isUrdu ? 'علم شائع کریں ✓' : 'Publish Knowledge ✓'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
