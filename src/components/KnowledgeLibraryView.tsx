import React, { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  Sparkles,
  Search,
  Clock,
  Award,
  CheckCircle2,
  Filter,
  ShieldCheck,
  Compass,
  Heart,
  TrendingUp,
  Coins,
  Briefcase,
  MessageSquare,
  Cpu,
  Wrench,
  Globe,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  Bot,
  Layers,
  X,
  Target,
  Bookmark,
  Calendar,
  Check,
  RotateCcw,
  Sprout,
  HelpCircle,
  Share2,
  ExternalLink
} from 'lucide-react';
import { Language, UserProfile, KnowledgeCategory, KnowledgeLibraryItem } from '../types';
import {
  KNOWLEDGE_CATEGORIES_META,
  KNOWLEDGE_LIBRARY_ITEMS,
  getPersonalizedWhyUseful,
  searchKnowledgeLibraryWithIntents
} from '../data/knowledgeLibraryData';
import {
  scheduleKnowledgeItemInRetentionCycle,
  isKnowledgeItemScheduledInRetention
} from '../data/retentionCycleData';

interface KnowledgeLibraryViewProps {
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacherWithPrompt: (prompt: string) => void;
  onRewardPoints?: (points: number, messageUrdu: string, messageEn: string) => void;
  onNavigateToTab?: (tab: any) => void;
}

const QUICK_INTENT_QUERIES = [
  { ur: 'پیسے بچانے ہیں', en: 'Save money & budget', icon: Coins },
  { ur: 'غصہ کم کرنا ہے', en: 'Control anger & patience', icon: Heart },
  { ur: 'کاروبار شروع کرنا ہے', en: 'Start a business', icon: Briefcase },
  { ur: 'فری لانسنگ کا آغاز', en: 'Start freelancing', icon: TrendingUp },
  { ur: 'AI کا درست استعمال', en: 'Practical AI skills', icon: Cpu },
  { ur: 'وقت کا انتظام', en: 'Time management', icon: Clock },
];

export const KnowledgeLibraryView: React.FC<KnowledgeLibraryViewProps> = ({
  language,
  userProfile,
  onOpenAITeacherWithPrompt,
  onRewardPoints,
  onNavigateToTab,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItemForModal, setSelectedItemForModal] = useState<KnowledgeLibraryItem | null>(null);
  
  // Interactive modal tabs: 'lesson' | 'action' | 'review'
  const [modalTab, setModalTab] = useState<'lesson' | 'action' | 'review'>('lesson');
  
  // Storage for completed item actions
  const [completedItemActions, setCompletedItemActions] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_completed_knowledge_actions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Storage for bookmarked items
  const [bookmarkedItemIds, setBookmarkedItemIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_bookmarked_knowledge_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Scheduled retention items state tracker
  const [scheduledRetentions, setScheduledRetentions] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('seekho_scheduled_retention_ids');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Quick review question state in modal
  const [selectedReviewOption, setSelectedReviewOption] = useState<string | null>(null);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState<boolean>(false);
  const [isReviewCorrect, setIsReviewCorrect] = useState<boolean | null>(null);

  // Category icon mapping helper
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return BookOpen;
      case 'Sparkles': return Sparkles;
      case 'Compass': return Compass;
      case 'ShieldCheck': return ShieldCheck;
      case 'Heart': return Heart;
      case 'TrendingUp': return TrendingUp;
      case 'Coins': return Coins;
      case 'Briefcase': return Briefcase;
      case 'MessageSquare': return MessageSquare;
      case 'Cpu': return Cpu;
      case 'Award': return Award;
      case 'Wrench': return Wrench;
      case 'Globe': return Globe;
      case 'Lightbulb': return Lightbulb;
      default: return BookOpen;
    }
  };

  // Listen for back button / popstate / Escape when knowledge modal is open
  useEffect(() => {
    if (!selectedItemForModal) return;

    window.history.pushState({ modal: 'knowledge_detail', id: selectedItemForModal.id }, '');

    const handlePopState = () => {
      setSelectedItemForModal(null);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseDetailModal();
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItemForModal?.id]);

  const handleCloseDetailModal = () => {
    if (selectedItemForModal) {
      setSelectedItemForModal(null);
      if (window.history.state?.modal === 'knowledge_detail') {
        window.history.back();
      }
    }
  };

  // Filter items based on intelligent intent search & category selection
  const filteredItems = useMemo(() => {
    if (searchQuery.trim()) {
      return searchKnowledgeLibraryWithIntents(searchQuery, KNOWLEDGE_LIBRARY_ITEMS, selectedCategory);
    }
    if (selectedCategory === 'all') {
      return KNOWLEDGE_LIBRARY_ITEMS;
    }
    return KNOWLEDGE_LIBRARY_ITEMS.filter((item) => item.categoryId === selectedCategory);
  }, [selectedCategory, searchQuery]);

  const handleOpenItem = (item: KnowledgeLibraryItem, initialTab: 'lesson' | 'action' = 'lesson') => {
    setSelectedItemForModal(item);
    setModalTab(initialTab);
    setSelectedReviewOption(null);
    setIsReviewSubmitted(false);
    setIsReviewCorrect(null);
  };

  const handleMarkActionDone = (itemId: string) => {
    if (completedItemActions.includes(itemId)) return;
    const updated = [...completedItemActions, itemId];
    setCompletedItemActions(updated);
    try {
      localStorage.setItem('seekho_completed_knowledge_actions', JSON.stringify(updated));
    } catch {
      // storage fallback
    }

    if (onRewardPoints) {
      onRewardPoints(
        20,
        '🎉 ماشاءاللہ! آپ نے اس علمی حکمت پر عمل کیا اور 20 پوائنٹس حاصل کیے۔',
        '🎉 Masha’Allah! You applied this knowledge and earned 20 pts.'
      );
    }
  };

  const handleToggleBookmark = (itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = bookmarkedItemIds.includes(itemId)
      ? bookmarkedItemIds.filter((id) => id !== itemId)
      : [...bookmarkedItemIds, itemId];
    setBookmarkedItemIds(updated);
    try {
      localStorage.setItem('seekho_bookmarked_knowledge_items', JSON.stringify(updated));
    } catch {
      // fallback
    }
  };

  const handleScheduleReview = (item: KnowledgeLibraryItem) => {
    const success = scheduleKnowledgeItemInRetentionCycle(item);
    if (success) {
      const updated = { ...scheduledRetentions, [item.id]: true };
      setScheduledRetentions(updated);
      try {
        localStorage.setItem('seekho_scheduled_retention_ids', JSON.stringify(updated));
      } catch {
        // fallback
      }
      if (onRewardPoints) {
        onRewardPoints(
          10,
          '⏰ دہرائی کا شیڈول "سیکھیں → یاد رکھیں → عمل کریں" میں شامل کر دیا گیا۔',
          '⏰ Revision scheduled in Learn → Remember → Practice.'
        );
      }
    }
  };

  const handleCheckReviewAnswer = (item: KnowledgeLibraryItem) => {
    if (!selectedReviewOption || !item.reviewOptions) return;
    const chosen = item.reviewOptions.find((o) => o.id === selectedReviewOption);
    const correct = chosen ? chosen.isCorrect : false;
    setIsReviewCorrect(correct);
    setIsReviewSubmitted(true);

    if (correct && onRewardPoints) {
      onRewardPoints(
        15,
        '🌟 شاندار! آپ نے سبق کا درست جواب دیا اور 15 پوائنٹس حاصل کیے۔',
        '🌟 Excellent! Correct answer. You earned 15 pts.'
      );
    }
  };

  return (
    <div id="knowledge-library-view" className="space-y-6 pb-20 max-w-7xl mx-auto px-2 sm:px-4">
      {/* 1. Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white shadow-xl border border-emerald-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold font-arabic">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isUrdu ? 'مستند اور جامع علم' : 'Authentic Knowledge Hub'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-arabic tracking-tight leading-tight">
            {isUrdu ? 'علم کا خزانہ (Knowledge Library)' : 'Knowledge Library'}
          </h2>

          <p className="text-sm sm:text-base text-emerald-100/90 font-arabic leading-relaxed">
            {isUrdu
              ? 'قرآن، سنت، سیرت، صحابہ کرامؓ، مالیاتی شعور، جدید اے آئی اور عملی زندگی کے 14 بنیادی شعبوں کا مستند و آسان فہم خلاصہ۔'
              : 'Concise, practical summaries across 14 vital categories: Quran, Hadith, Seerah, Sahaba, Finance, AI, and Practical Life Skills.'}
          </p>

          {/* Search Bar with Natural Language / Intent Matching */}
          <div className="pt-2">
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 absolute left-3 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="knowledge-library-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isUrdu
                    ? 'مثلاً "پیسے بچانے ہیں", "غصہ کم کرنا ہے", "کاروبار", "AI"...'
                    : 'Search e.g. "save money", "control anger", "start business", "AI"...'
                }
                className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-11 py-3 rounded-2xl bg-white/95 text-slate-900 dark:bg-slate-800/95 dark:text-white placeholder-slate-400 border border-emerald-300/40 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 text-sm font-arabic shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Intent Search Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-3">
              <span className="text-[11px] font-bold text-emerald-200 font-arabic">
                {isUrdu ? 'فوری تلاش:' : 'Quick search:'}
              </span>
              {QUICK_INTENT_QUERIES.map((q, idx) => {
                const Icon = q.icon;
                const active = searchQuery === q.ur || searchQuery === q.en;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (active) {
                        setSearchQuery('');
                      } else {
                        setSearchQuery(isUrdu ? q.ur : q.en);
                      }
                    }}
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-xl transition flex items-center gap-1 font-arabic ${
                      active
                        ? 'bg-emerald-400 text-slate-950 shadow-xs'
                        : 'bg-white/10 hover:bg-white/20 text-emerald-100 border border-white/10'
                    }`}
                  >
                    <Icon className="w-3 h-3 text-emerald-300" />
                    <span>{isUrdu ? q.ur : q.en}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2. 14 Category Filter Pills */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 font-arabic flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isUrdu ? 'موضوعات منتخب کریں (14 شعبے):' : 'Browse by Category (14 Areas):'}</span>
          </span>
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 font-arabic">
            {filteredItems.length} {isUrdu ? 'اسباق دستیاب' : 'topics found'}
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
          {/* 'All' pill */}
          <button
            id="cat-pill-all"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 font-arabic shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isUrdu ? 'تمام موضوعات' : 'All Topics'}</span>
          </button>

          {/* 14 Categories */}
          {KNOWLEDGE_CATEGORIES_META.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                id={`cat-pill-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 font-arabic shrink-0 ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{isUrdu ? `${cat.number}. ${cat.titleUrdu}` : cat.titleEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
          <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 font-arabic">
            {isUrdu ? 'کوئی سبق نہیں ملا' : 'No topics found'}
          </h4>
          <p className="text-xs text-slate-500 font-arabic">
            {isUrdu ? 'براہ کرم سرچ کے الفاظ بدلیں یا تمام موضوعات دیکھیں۔' : 'Try searching with different keywords.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold font-arabic"
          >
            {isUrdu ? 'تمام موضوعات دیکھیں' : 'Reset Filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredItems.map((item) => {
            const isCompleted = completedItemActions.includes(item.id);
            const isBookmarked = bookmarkedItemIds.includes(item.id);
            const isScheduled = scheduledRetentions[item.id] || isKnowledgeItemScheduledInRetention(item.id);

            return (
              <div
                key={item.id}
                id={`knowledge-card-${item.id}`}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4 relative overflow-hidden"
              >
                <div className="space-y-3">
                  {/* Top Category & Meta Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 font-arabic">
                      {isUrdu ? item.categoryTitleUrdu : item.categoryTitleEn}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {item.verifiedSource && (
                        <span
                          title={isUrdu ? 'مستند حوالہ' : 'Verified Source'}
                          className="flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 font-arabic"
                        >
                          <ShieldCheck className="w-3 h-3 text-amber-600" />
                          <span>{isUrdu ? 'مستند' : 'Verified'}</span>
                        </span>
                      )}

                      <button
                        onClick={(e) => handleToggleBookmark(item.id, e)}
                        className={`p-1.5 rounded-lg transition ${
                          isBookmarked
                            ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/50'
                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                        }`}
                        title={isUrdu ? 'محفوظ کریں' : 'Bookmark'}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-arabic leading-snug">
                    {isUrdu ? item.titleUrdu : item.titleEn}
                  </h3>

                  {/* Short Explanation */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-arabic leading-relaxed line-clamp-3">
                    {isUrdu ? item.shortExplanationUrdu : item.shortExplanationEn}
                  </p>

                  {/* Practical Benefit Highlight */}
                  <div className="bg-emerald-50/60 dark:bg-emerald-950/20 rounded-xl p-2.5 border border-emerald-100 dark:border-emerald-900/40 text-xs text-emerald-950 dark:text-emerald-200 font-arabic">
                    <span className="font-bold">✨ {isUrdu ? 'عملی فائدہ:' : 'Practical Benefit:'}</span>{' '}
                    {isUrdu ? item.practicalBenefitUrdu : item.practicalBenefitEn}
                  </div>

                  {/* Source Reference if available */}
                  {(item.sourceReferenceUrdu || item.sourceReference) && (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-arabic">
                      <span className="font-semibold">{isUrdu ? 'حوالہ:' : 'Source:'}</span>{' '}
                      <span className="text-slate-700 dark:text-slate-300 font-mono text-[10.5px]">
                        {isUrdu ? (item.sourceReferenceUrdu || item.sourceReference) : item.sourceReference}
                      </span>
                    </div>
                  )}

                  {/* Badges: Time & Difficulty & Scheduled */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-arabic pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {isUrdu ? item.estimatedTimeUrdu : item.estimatedTimeEn}
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-3.5 h-3.5 text-slate-400" />
                      {isUrdu ? item.difficultyUrdu : item.difficultyEn}
                    </span>
                    {isScheduled && (
                      <span className="flex items-center gap-1 text-indigo-600 font-bold text-[11px]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{isUrdu ? 'دہرائی شیڈول' : 'Scheduled'}</span>
                      </span>
                    )}
                    {isCompleted && (
                      <span className="flex items-center gap-1 text-emerald-600 font-bold ml-auto rtl:ml-0 rtl:mr-auto">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isUrdu ? 'مکمل شدہ' : 'Done'}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Two Action Buttons: "سیکھیں" and "عمل کریں" */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    id={`learn-btn-${item.id}`}
                    onClick={() => handleOpenItem(item, 'lesson')}
                    className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold font-arabic transition flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isUrdu ? 'سیکھیں' : 'Learn'}</span>
                  </button>

                  <button
                    id={`act-btn-${item.id}`}
                    onClick={() => handleOpenItem(item, 'action')}
                    className="px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-arabic transition shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isUrdu ? 'عمل کریں' : 'Apply'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. Complete 6-Step Intelligence Modal */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 sm:p-4 animate-fade-in overflow-y-auto">
          <div
            id="knowledge-detail-modal"
            className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 border border-slate-200 dark:border-slate-800 shadow-2xl p-5 sm:p-7 space-y-5 my-auto max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-arabic">
                    {isUrdu ? selectedItemForModal.categoryTitleUrdu : selectedItemForModal.categoryTitleEn}
                  </span>
                  {selectedItemForModal.verifiedSource && (
                    <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-arabic">
                      <ShieldCheck className="w-3 h-3 text-amber-600" />
                      <span>{isUrdu ? 'مستند تصدیق شدہ' : 'Verified Source'}</span>
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white font-arabic">
                  {isUrdu ? selectedItemForModal.titleUrdu : selectedItemForModal.titleEn}
                </h3>
              </div>

              <button
                onClick={handleCloseDetailModal}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bismillah Header for Islamic/Prophetic categories */}
            {selectedItemForModal.bismillahHeader && (
              <div className="text-center py-1 text-emerald-800 dark:text-emerald-400 font-arabic font-bold text-sm tracking-wide bg-emerald-50/50 dark:bg-emerald-950/30 rounded-xl">
                {selectedItemForModal.bismillahHeader}
              </div>
            )}

            {/* Step 2: "آپ کے لیے یہ کیوں مفید ہے؟" (Personalized Rationale) */}
            <div className="p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/50 text-indigo-950 dark:text-indigo-200 space-y-1 font-arabic">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-800 dark:text-indigo-300">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>{isUrdu ? 'آپ کے لیے یہ کیوں مفید ہے؟' : 'Why this is useful for you:'}</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                {getPersonalizedWhyUseful(selectedItemForModal, userProfile, language)}
              </p>
            </div>

            {/* Mode Switch Tabs: Lesson vs Action vs Gentle Revision */}
            <div className="grid grid-cols-3 gap-2 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-2xl">
              <button
                onClick={() => setModalTab('lesson')}
                className={`py-2 rounded-xl text-xs font-bold font-arabic transition flex items-center justify-center gap-1.5 ${
                  modalTab === 'lesson'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isUrdu ? '۱. سبق و مثال' : '1. Lesson'}</span>
              </button>

              <button
                onClick={() => setModalTab('action')}
                className={`py-2 rounded-xl text-xs font-bold font-arabic transition flex items-center justify-center gap-1.5 ${
                  modalTab === 'action'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isUrdu ? '۲. ایک چھوٹا عمل' : '2. Action'}</span>
              </button>

              <button
                onClick={() => setModalTab('review')}
                className={`py-2 rounded-xl text-xs font-bold font-arabic transition flex items-center justify-center gap-1.5 ${
                  modalTab === 'review'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5 text-indigo-600" />
                <span>{isUrdu ? '۳. آسان دہرائی' : '3. Review'}</span>
              </button>
            </div>

            {/* TAB 1: LESSON & PRACTICAL EXAMPLE */}
            {modalTab === 'lesson' && (
              <div className="space-y-4 text-xs sm:text-sm font-arabic">
                {/* Short Explanation */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 leading-relaxed text-sm">
                  <p>{isUrdu ? selectedItemForModal.shortExplanationUrdu : selectedItemForModal.shortExplanationEn}</p>
                </div>

                {/* Step 3: ONE Practical Example */}
                {(selectedItemForModal.practicalExampleUrdu || selectedItemForModal.practicalExampleEn) && (
                  <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 text-amber-950 dark:text-amber-200 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-black text-amber-900 dark:text-amber-300">
                      <Lightbulb className="w-4 h-4 text-amber-600" />
                      <span>{isUrdu ? 'ایک عملی حقیقی مثال (Practical Example):' : 'One Practical Real-Life Example:'}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {isUrdu ? selectedItemForModal.practicalExampleUrdu : selectedItemForModal.practicalExampleEn}
                    </p>
                  </div>
                )}

                {/* Key Takeaways */}
                <div className="space-y-2">
                  <h4 className="font-black text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>{isUrdu ? 'اہم فکری و عملی نکات:' : 'Key Takeaways:'}</span>
                  </h4>
                  <div className="space-y-1.5">
                    {(isUrdu
                      ? selectedItemForModal.keyTakeawaysUrdu
                      : selectedItemForModal.keyTakeawaysEn
                    ).map((pt, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 text-emerald-950 dark:text-emerald-100"
                      >
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="leading-relaxed">{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Reference */}
                {(selectedItemForModal.sourceReferenceUrdu || selectedItemForModal.sourceReference) && (
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                    <span className="font-bold">{isUrdu ? 'مستند حوالہ / ماخذ:' : 'Verified Reference:'}</span>{' '}
                    <span className="font-mono">
                      {isUrdu
                        ? selectedItemForModal.sourceReferenceUrdu || selectedItemForModal.sourceReference
                        : selectedItemForModal.sourceReference}
                    </span>
                  </div>
                )}

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setModalTab('action')}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition font-arabic"
                  >
                    <span>{isUrdu ? 'اب اس پر عمل کریں' : 'Go to Practical Action'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: ONE SMALL ACTION & STEP-BY-STEP EXECUTION */}
            {modalTab === 'action' && (
              <div className="space-y-4 text-xs sm:text-sm font-arabic">
                {/* Step 4: ONE Small Action Highlight */}
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-black text-sm text-emerald-900 dark:text-emerald-200">
                    <Target className="w-4 h-4 text-emerald-600" />
                    <span>{isUrdu ? 'آج کا ایک چھوٹا قدم (One Small Action):' : 'Today’s One Small Action:'}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    {isUrdu
                      ? selectedItemForModal.oneSmallActionUrdu || selectedItemForModal.practicalBenefitUrdu
                      : selectedItemForModal.oneSmallActionEn || selectedItemForModal.practicalBenefitEn}
                  </p>
                </div>

                {/* Practical Action Steps Checklist */}
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{isUrdu ? 'عملی اقدامات کی فہرست:' : 'Step-by-step Execution:'}</span>
                  </h4>
                  <div className="space-y-2">
                    {(isUrdu
                      ? selectedItemForModal.practicalActionStepsUrdu
                      : selectedItemForModal.practicalActionStepsEn
                    ).map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                      >
                        <span className="font-bold text-emerald-600">✓</span>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mark as Done Button */}
                <button
                  id="mark-action-done-btn"
                  onClick={() => handleMarkActionDone(selectedItemForModal.id)}
                  disabled={completedItemActions.includes(selectedItemForModal.id)}
                  className={`w-full py-3.5 rounded-2xl font-bold font-arabic transition shadow-md flex items-center justify-center gap-2 ${
                    completedItemActions.includes(selectedItemForModal.id)
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>
                    {completedItemActions.includes(selectedItemForModal.id)
                      ? (isUrdu ? 'ماشاءاللہ! آپ نے یہ عمل مکمل کر لیا (+20 پوائنٹس)' : 'Action Completed (+20 pts)')
                      : (isUrdu ? 'میں نے یہ عمل کر لیا (+20 پوائنٹس)' : 'I Completed This Action (+20 pts)')}
                  </span>
                </button>

                {/* Step 5: Schedule in Retention System */}
                <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="space-y-0.5 text-start">
                    <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{isUrdu ? 'کیا آپ اس کی دہرائی شیڈول کرنا چاہتے ہیں؟' : 'Schedule for gentle revision?'}</span>
                    </span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">
                      {isUrdu
                        ? 'Learn → Remember → Practice نظام میں شامل کریں تاکہ یہ علم یاد رہے۔'
                        : 'Add to Learn → Remember → Practice for timely retention.'}
                    </p>
                  </div>

                  <button
                    onClick={() => handleScheduleReview(selectedItemForModal)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
                      scheduledRetentions[selectedItemForModal.id] || isKnowledgeItemScheduledInRetention(selectedItemForModal.id)
                        ? 'bg-indigo-200 text-indigo-950 border border-indigo-300 font-black'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {scheduledRetentions[selectedItemForModal.id] || isKnowledgeItemScheduledInRetention(selectedItemForModal.id)
                        ? (isUrdu ? 'شیڈول ہو چکا ✓' : 'Scheduled ✓')
                        : (isUrdu ? 'شیڈول کریں (+10 pts)' : 'Schedule Review (+10 pts)')}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: GENTLE REVISION & REVIEW (NO TEST ANXIETY) */}
            {modalTab === 'review' && (
              <div className="space-y-4 text-xs sm:text-sm font-arabic">
                {/* Gentle Revision Note */}
                <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <RotateCcw className="w-4 h-4 text-amber-600" />
                    <span>{isUrdu ? 'آسان یاد دہانی (Gentle Revision):' : 'Gentle Revision Reminder:'}</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {isUrdu ? selectedItemForModal.gentleRevisionUrdu : selectedItemForModal.gentleRevisionEn}
                  </p>
                </div>

                {/* 1 Quick Check Question */}
                {selectedItemForModal.reviewQuestionUrdu && selectedItemForModal.reviewOptions && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                      <HelpCircle className="w-4 h-4 text-indigo-600" />
                      <span>{isUrdu ? selectedItemForModal.reviewQuestionUrdu : selectedItemForModal.reviewQuestionEn}</span>
                    </div>

                    <div className="space-y-2">
                      {selectedItemForModal.reviewOptions.map((opt) => {
                        const isSelected = selectedReviewOption === opt.id;
                        let optionStyle = 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-600';
                        if (isReviewSubmitted) {
                          if (opt.isCorrect) {
                            optionStyle = 'bg-emerald-100 text-emerald-950 border-emerald-400 font-bold';
                          } else if (isSelected && !opt.isCorrect) {
                            optionStyle = 'bg-rose-100 text-rose-950 border-rose-400';
                          }
                        } else if (isSelected) {
                          optionStyle = 'bg-indigo-50 text-indigo-950 border-indigo-400 font-bold';
                        }

                        return (
                          <button
                            key={opt.id}
                            onClick={() => !isReviewSubmitted && setSelectedReviewOption(opt.id)}
                            className={`w-full text-start p-3 rounded-xl border text-xs font-arabic transition flex items-center justify-between gap-2 ${optionStyle}`}
                          >
                            <span>{isUrdu ? opt.textUrdu : opt.textEn}</span>
                            {isReviewSubmitted && opt.isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {!isReviewSubmitted ? (
                      <button
                        onClick={() => handleCheckReviewAnswer(selectedItemForModal)}
                        disabled={!selectedReviewOption}
                        className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold text-xs transition"
                      >
                        {isUrdu ? 'جواب چیک کریں (+15 پوائنٹس)' : 'Check Answer (+15 pts)'}
                      </button>
                    ) : (
                      <div className={`p-2.5 rounded-xl text-xs font-bold text-center ${
                        isReviewCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                      }`}>
                        {isReviewCorrect
                          ? (isUrdu ? '🎉 ماشاءاللہ! بالکل درست جواب۔' : '🎉 Masha’Allah! Correct answer.')
                          : (isUrdu ? '💡 درست جواب سبز رنگ میں نمایاں ہے۔ دوبارہ ذہن نشین کر لیں۔' : '💡 Review the correct option highlighted in green.')}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* "اب آپ یہ کریں" Recommendation Step */}
            {selectedItemForModal.nextRecommendedStepUrdu && (
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100 space-y-2 font-arabic">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black flex items-center gap-1.5 text-emerald-900 dark:text-emerald-200">
                    <Compass className="w-4 h-4 text-emerald-600" />
                    <span>{isUrdu ? 'اب آپ یہ کریں (Next Recommended Step):' : 'Now do this (Next Step):'}</span>
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-200/80 text-emerald-900">
                    {isUrdu ? 'ذاتی لائحہ عمل' : 'Tailored'}
                  </span>
                </div>
                <p className="text-xs leading-relaxed font-medium">
                  {isUrdu ? selectedItemForModal.nextRecommendedStepUrdu : selectedItemForModal.nextRecommendedStepEn}
                </p>

                {/* Direct Action triggers for Next Step */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {selectedItemForModal.nextRecommendedStepType === 'course' && onNavigateToTab && (
                    <button
                      onClick={() => {
                        setSelectedItemForModal(null);
                        onNavigateToTab('skills');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-bold flex items-center gap-1"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>{isUrdu ? 'متعلقہ ہنر کورس کھولیں' : 'Open Related Skill'}</span>
                    </button>
                  )}

                  {selectedItemForModal.nextRecommendedStepType === 'roadmap' && onNavigateToTab && (
                    <button
                      onClick={() => {
                        setSelectedItemForModal(null);
                        onNavigateToTab('mylearning');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-bold flex items-center gap-1"
                    >
                      <TrendingUp className="w-3 h-3" />
                      <span>{isUrdu ? 'لائف روڈ میپ دیکھیں' : 'View Life Roadmap'}</span>
                    </button>
                  )}

                  {selectedItemForModal.nextRecommendedStepType === 'knowledge' && selectedItemForModal.nextRecommendedStepId && (
                    <button
                      onClick={() => {
                        const target = KNOWLEDGE_LIBRARY_ITEMS.find((k) => k.id === selectedItemForModal.nextRecommendedStepId);
                        if (target) {
                          handleOpenItem(target, 'lesson');
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-bold flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{isUrdu ? 'اگلا تجویز کردہ سبق کھولیں' : 'Open Next Recommended Lesson'}</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Modal Bottom AI Mentor Guidance CTA */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2">
              <button
                onClick={() => {
                  const prompt = isUrdu
                    ? `استاد سیکھو! میں نے علم کے خزانے سے "${selectedItemForModal.titleUrdu}" کا مطالعہ کیا ہے۔ براہ کرم میری عمر اور مقاصد کے مطابق اس پر عمل کرنے کی مزید ذاتی رہنمائی فرمائیں۔`
                    : `Teacher Seekho! I just reviewed "${selectedItemForModal.titleEn}" from the Knowledge Library. Please give me personalized advice on applying it.`;
                  setSelectedItemForModal(null);
                  onOpenAITeacherWithPrompt(prompt);
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold font-arabic transition flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700"
              >
                <Bot className="w-4 h-4 text-emerald-600" />
                <span>{isUrdu ? 'استاد سیکھو سے ذاتی رہنمائی لیں' : 'Ask AI Mentor'}</span>
              </button>

              <button
                onClick={() => setSelectedItemForModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold font-arabic transition"
              >
                {isUrdu ? 'بند کریں' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
