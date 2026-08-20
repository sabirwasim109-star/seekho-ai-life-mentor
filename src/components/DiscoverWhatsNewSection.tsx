import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  BookOpen, 
  Wrench, 
  Briefcase, 
  TrendingUp, 
  Laptop, 
  UserCheck, 
  HeartHandshake, 
  ShieldCheck, 
  Bot, 
  ChevronDown, 
  ChevronUp, 
  Info,
  X,
  GraduationCap,
  ThumbsUp,
  ThumbsDown,
  EyeOff,
  CheckCircle2
} from 'lucide-react';
import { 
  Language, 
  UserProfile, 
  DiscoverCategory, 
  DiscoverItem 
} from '../types';
import { 
  DISCOVER_AREAS_METADATA 
} from '../data/discoverData';
import { 
  getPersonalizedDiscoverRecommendations, 
  getAllDiscoverItemsForCategory,
  ScoredDiscoverItem 
} from '../utils/discoverEngine';

interface DiscoverWhatsNewSectionProps {
  language: Language;
  userProfile: UserProfile;
  onSelectCourseById?: (courseId: string) => void;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
  onNavigateToTab?: (tab: string) => void;
  onDismissDiscoverItem?: (itemId: string) => void;
  onFeedbackDiscoverItem?: (itemId: string, helpful: boolean) => void;
}

export const DiscoverWhatsNewSection: React.FC<DiscoverWhatsNewSectionProps> = ({
  language,
  userProfile,
  onSelectCourseById,
  onOpenAITeacherWithPrompt,
  onNavigateToTab,
  onDismissDiscoverItem,
  onFeedbackDiscoverItem,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<DiscoverCategory | 'all'>('all');
  const [showAllItems, setShowAllItems] = useState(false);
  const [activeDetailItem, setActiveDetailItem] = useState<ScoredDiscoverItem | null>(null);
  const [feedbackFeedbackGiven, setFeedbackGiven] = useState<Record<string, 'helpful' | 'unhelpful'>>({});

  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  // Retrieve top 3 recommendations or all if toggled / category selected
  const recommendations: ScoredDiscoverItem[] = React.useMemo(() => {
    if (showAllItems || selectedCategory !== 'all') {
      return getAllDiscoverItemsForCategory(userProfile, selectedCategory);
    }
    return getPersonalizedDiscoverRecommendations(userProfile, 'all', 3);
  }, [userProfile, selectedCategory, showAllItems]);

  const handleActionClick = (scoredItem: ScoredDiscoverItem) => {
    const { item } = scoredItem;

    if (item.actionType === 'open_course' && item.actionPayload?.courseId) {
      if (onSelectCourseById) {
        onSelectCourseById(item.actionPayload.courseId);
      } else if (onNavigateToTab) {
        onNavigateToTab('skills');
      }
      return;
    }

    if (item.actionType === 'ask_mentor' && onOpenAITeacherWithPrompt) {
      const defaultPrompt = language === 'ur'
        ? `مجھے "${item.titleUrdu}" کے بارے میں تفصیلی رہنمائی دیں۔`
        : `Please guide me on "${item.titleEn}".`;
      onOpenAITeacherWithPrompt(item.actionPayload?.prompt || defaultPrompt);
      return;
    }

    if (item.actionType === 'navigate_tab' && item.actionPayload?.tab && onNavigateToTab) {
      onNavigateToTab(item.actionPayload.tab);
      return;
    }

    // Default: Open in-depth preview modal
    setActiveDetailItem(scoredItem);
  };

  const handleDismiss = (itemId: string) => {
    if (onDismissDiscoverItem) {
      onDismissDiscoverItem(itemId);
    }
  };

  const handleFeedback = (itemId: string, helpful: boolean) => {
    setFeedbackGiven(prev => ({
      ...prev,
      [itemId]: helpful ? 'helpful' : 'unhelpful'
    }));
    if (onFeedbackDiscoverItem) {
      onFeedbackDiscoverItem(itemId, helpful);
    }
  };

  const getCategoryIcon = (category: DiscoverCategory) => {
    switch (category) {
      case 'new_skills': return Sparkles;
      case 'career_work': return Briefcase;
      case 'business_ideas': return TrendingUp;
      case 'freelancing_digital': return Laptop;
      case 'books_knowledge': return BookOpen;
      case 'personal_development': return UserCheck;
      case 'community_service': return HeartHandshake;
      case 'quran_hadith_character': return ShieldCheck;
      case 'practical_life_skills': return Wrench;
      default: return Sparkles;
    }
  };

  const getDifficultyBadgeColor = (level: 'easy' | 'medium' | 'advanced') => {
    switch (level) {
      case 'easy':
        return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30';
      case 'medium':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30';
      case 'advanced':
        return 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30';
    }
  };

  return (
    <section 
      id="discover-whats-new-section" 
      className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm my-6 space-y-6 relative overflow-hidden"
    >
      {/* Background soft ambient decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/5 dark:bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ------------------------------------------------------------- */}
      {/* SECTION HEADER */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 font-arabic">
              {language === 'ur' ? 'میرے لیے کیا نیا ہے؟' : "What's New For Me?"}
            </span>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-arabic flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" />
              {userProfile.educationLevel || userProfile.education || (language === 'ur' ? 'بنیادی تعلیم' : 'Education')} • {userProfile.ageGroup || '16-25'}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-arabic mt-1">
            {language === 'ur' ? 'سیکھنے اور ترقی کے نئے مواقع' : 'Curated Learning & Growth Opportunities'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-arabic max-w-3xl leading-relaxed">
            {language === 'ur'
              ? 'آپ کے اہداف، لائف روڈ میپ اور پیش رفت کے مطابق موزوں عملی ہنر، حلال آئیڈیاز اور اخلاقی مواقع۔'
              : 'Practical skills, halal ideas, and character opportunities tailored to your stated goals, roadmap, and daily rhythm.'}
          </p>
        </div>

        {/* Available Time Badge & Status */}
        <div className="flex items-center gap-2 self-start md:self-auto shrink-0 font-arabic">
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>{language === 'ur' ? 'دستیاب وقت:' : 'Daily Time:'}</span>
            <strong className="text-emerald-700 dark:text-emerald-400">
              {userProfile.dailyJourneyProgress?.timePreference || userProfile.growthDailyTimePreference || userProfile.timePerDay || '20m'}
            </strong>
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 9 DISCOVERY AREAS PILLS / CATEGORY SELECTOR */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
          {/* ALL (سب) Pill */}
          <button
            id="discover-cat-all"
            onClick={() => {
              setSelectedCategory('all');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-arabic whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 border ${
              selectedCategory === 'all'
                ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 border-slate-900 dark:border-amber-400 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ur' ? 'سب سے اہم تجاویز' : 'Top Recommendations'}</span>
          </button>

          {/* 9 Specific Discovery Areas */}
          {DISCOVER_AREAS_METADATA.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const CatIcon = getCategoryIcon(cat.id);

            return (
              <button
                key={cat.id}
                id={`discover-cat-${cat.id}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-arabic whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 border ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 border-slate-900 dark:border-amber-400 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <CatIcon className="w-3.5 h-3.5" />
                <span>{language === 'ur' ? cat.nameUrdu : cat.nameEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* RECOMMENDATION CARDS (Top 3 or Filtered) */}
      {/* ------------------------------------------------------------- */}
      {recommendations.length === 0 ? (
        <div className="text-center py-8 px-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 space-y-2">
          <p className="text-sm font-bold text-slate-700 dark:text-slate-300 font-arabic">
            {language === 'ur' 
              ? 'اس شعبے کے تمام مواقع آپ دیکھ چکے ہیں۔ مزید شعبہ جات دریافت کریں۔' 
              : 'You have reviewed all available items in this area. Explore other categories.'}
          </p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="text-xs font-bold text-emerald-700 dark:text-emerald-400 underline font-arabic"
          >
            {language === 'ur' ? 'اہم تجاویز پر واپس جائیں' : 'Return to Top Recommendations'}
          </button>
        </div>
      ) : (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {recommendations.map((scoredItem) => {
            const { item, personalizedReasonUrdu, personalizedReasonEn, adaptiveTagUrdu, adaptiveTagEn } = scoredItem;
            const CatIcon = getCategoryIcon(item.category);
            const areaMeta = DISCOVER_AREAS_METADATA.find(a => a.id === item.category);
            const isHelpful = feedbackFeedbackGiven[item.id] === 'helpful' || (userProfile.helpfulDiscoverItemIds || []).includes(item.id);
            const isUnhelpful = feedbackFeedbackGiven[item.id] === 'unhelpful' || (userProfile.unhelpfulDiscoverItemIds || []).includes(item.id);

            return (
              <div
                key={item.id}
                id={`discover-card-${item.id}`}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative"
              >
                {/* Card Header & Category Badge + Dismiss Button */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1 font-arabic">
                      <CatIcon className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>{language === 'ur' ? areaMeta?.nameUrdu : areaMeta?.nameEn}</span>
                    </span>

                    <div className="flex items-center gap-1.5">
                      {adaptiveTagUrdu && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 font-arabic">
                          {language === 'ur' ? adaptiveTagUrdu : adaptiveTagEn}
                        </span>
                      )}

                      {/* "ابھی نہیں" (Dismiss Recommendation Button) */}
                      <button
                        id={`discover-dismiss-${item.id}`}
                        onClick={() => handleDismiss(item.id)}
                        title={language === 'ur' ? 'ابھی نہیں (یہ تجویز فی الحال ہٹا دیں)' : 'Not now (dismiss item)'}
                        className="text-[11px] font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 px-2 py-0.5 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition flex items-center gap-1 font-arabic"
                      >
                        <EyeOff className="w-3 h-3" />
                        <span>{language === 'ur' ? 'ابھی نہیں' : 'Not now'}</span>
                      </button>
                    </div>
                  </div>

                  {/* 1. What it is (Title & Description) */}
                  <div>
                    <h4 className="text-base font-black text-slate-900 dark:text-white font-arabic line-clamp-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition leading-snug">
                      {language === 'ur' ? item.titleUrdu : item.titleEn}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-1.5 font-arabic leading-relaxed">
                      {language === 'ur' ? item.shortDescriptionUrdu : item.shortDescriptionEn}
                    </p>
                  </div>

                  {/* 2. "کیوں یہ آپ کے لیے؟" (One short sentence why it was selected) */}
                  <div className="bg-amber-500/10 dark:bg-amber-400/10 rounded-xl p-3 border border-amber-500/20 dark:border-amber-400/20 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-800 dark:text-amber-300 font-arabic">
                      <Info className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>{language === 'ur' ? 'کیوں یہ آپ کے لیے؟' : 'Why this for you?'}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-200 font-arabic leading-relaxed">
                      {language === 'ur' ? personalizedReasonUrdu : personalizedReasonEn}
                    </p>
                  </div>

                  {/* Halal / Ethical note if present */}
                  {item.halalNoteUrdu && (
                    <div className="text-[10px] text-teal-800 dark:text-teal-300 font-arabic bg-teal-50 dark:bg-teal-950/40 px-2.5 py-1 rounded-lg border border-teal-500/20 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 shrink-0 text-teal-600 dark:text-teal-400" />
                      <span className="truncate">{language === 'ur' ? item.halalNoteUrdu : item.halalNoteEn}</span>
                    </div>
                  )}
                </div>

                {/* Card Footer: Difficulty + Time + Action Button + Feedback */}
                <div className="pt-4 mt-4 border-t border-slate-200/70 dark:border-slate-700/70 space-y-3">
                  {/* Difficulty & Time Row */}
                  <div className="flex items-center justify-between text-xs font-arabic">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-lg border ${getDifficultyBadgeColor(item.difficultyLevel)}`}>
                      {language === 'ur' ? item.difficultyUrdu : item.difficultyEn}
                    </span>

                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{language === 'ur' ? item.estimatedTimeUrdu : item.estimatedTimeEn}</span>
                    </span>
                  </div>

                  {/* One Clear Action Button */}
                  <div className="flex items-center gap-2">
                    <button
                      id={`discover-action-btn-${item.id}`}
                      onClick={() => handleActionClick(scoredItem)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md transition active:scale-[0.98] font-arabic"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>{language === 'ur' ? item.actionLabelUrdu : item.actionLabelEn}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>

                    <button
                      title={language === 'ur' ? 'تفصیلات دیکھیں' : 'View Details'}
                      onClick={() => setActiveDetailItem(scoredItem)}
                      className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Simple Feedback Row: "یہ میرے لیے مفید ہے" / "یہ میرے لیے مناسب نہیں" */}
                  <div className="pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between gap-1 text-[10.5px] font-arabic text-slate-500 dark:text-slate-400">
                    <span className="truncate">{language === 'ur' ? 'آپ کا تاثر:' : 'Feedback:'}</span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        id={`discover-feedback-pos-${item.id}`}
                        onClick={() => handleFeedback(item.id, true)}
                        className={`px-2 py-1 rounded-lg border transition flex items-center gap-1 ${
                          isHelpful
                            ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/40 font-bold'
                            : 'hover:bg-slate-200 dark:hover:bg-slate-700 border-transparent text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>{language === 'ur' ? 'یہ میرے لیے مفید ہے' : 'Useful for me'}</span>
                      </button>

                      <button
                        id={`discover-feedback-neg-${item.id}`}
                        onClick={() => handleFeedback(item.id, false)}
                        className={`px-2 py-1 rounded-lg border transition flex items-center gap-1 ${
                          isUnhelpful
                            ? 'bg-rose-500/20 text-rose-800 dark:text-rose-300 border-rose-500/40 font-bold'
                            : 'hover:bg-slate-200 dark:hover:bg-slate-700 border-transparent text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <ThumbsDown className="w-3 h-3" />
                        <span>{language === 'ur' ? 'مناسب نہیں' : 'Not suitable'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TOGGLE MORE RECOMMENDATIONS (Without overwhelming) */}
      {/* ------------------------------------------------------------- */}
      {selectedCategory === 'all' && recommendations.length > 0 && (
        <div className="relative z-10 pt-2 flex items-center justify-between flex-wrap gap-3">
          <button
            id="discover-toggle-more-btn"
            onClick={() => setShowAllItems(!showAllItems)}
            className="text-xs font-bold text-emerald-800 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 px-4 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800/80 transition flex items-center gap-1.5 font-arabic"
          >
            {showAllItems ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>{language === 'ur' ? 'صرف اہم ۳ تجاویز دکھائیں' : 'Show Top 3 Only'}</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>{language === 'ur' ? 'مزید دریافت کریں (تمام شعبہ جات)' : 'Explore All Categories'}</span>
              </>
            )}
          </button>

          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-arabic">
            {language === 'ur'
              ? '💡 تمام مواقع حقیقت پسندانہ، کم سرمائے اور بغیر کسی غیر حقیقی دعوے کے تیار کیے گئے ہیں۔'
              : '💡 All recommendations are grounded, realistic, and halal without get-rich-quick claims.'}
          </span>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* DETAIL MODAL (When clicking detail info or specific topic) */}
      {/* ------------------------------------------------------------- */}
      {activeDetailItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-5 sm:p-7 max-w-xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 my-auto relative animate-fade-in"
            dir={language === 'ur' ? 'rtl' : 'ltr'}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveDetailItem(null)}
              className="absolute top-4 end-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1.5 pe-8">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 font-arabic">
                {language === 'ur' 
                  ? DISCOVER_AREAS_METADATA.find(a => a.id === activeDetailItem.item.category)?.nameUrdu 
                  : DISCOVER_AREAS_METADATA.find(a => a.id === activeDetailItem.item.category)?.nameEn}
              </span>
              <h4 className="text-lg sm:text-xl font-black font-arabic">
                {language === 'ur' ? activeDetailItem.item.titleUrdu : activeDetailItem.item.titleEn}
              </h4>
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-arabic leading-relaxed">
              {language === 'ur' ? activeDetailItem.item.shortDescriptionUrdu : activeDetailItem.item.shortDescriptionEn}
            </p>

            {/* "کیوں یہ آپ کے لیے؟" (Why this for you) */}
            <div className="bg-amber-50 dark:bg-amber-950/40 rounded-2xl p-4 border border-amber-200 dark:border-amber-800/60 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300 font-arabic">
                <Info className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>{language === 'ur' ? 'کیوں یہ آپ کے لیے؟' : 'Why this for you?'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-arabic leading-relaxed">
                {language === 'ur' ? activeDetailItem.personalizedReasonUrdu : activeDetailItem.personalizedReasonEn}
              </p>
            </div>

            {/* Action Steps if available */}
            {activeDetailItem.item.actionStepsUrdu && activeDetailItem.item.actionStepsUrdu.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white font-arabic block">
                  {language === 'ur' ? 'عملی اقدامات:' : 'Action Steps:'}
                </span>
                <div className="space-y-1.5">
                  {(language === 'ur' ? activeDetailItem.item.actionStepsUrdu : activeDetailItem.item.actionStepsEn || []).map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs font-arabic text-slate-700 dark:text-slate-300">
                      <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Practical Tips */}
            {activeDetailItem.item.practicalTipsUrdu && activeDetailItem.item.practicalTipsUrdu.length > 0 && (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 rounded-xl p-3 border border-emerald-200 dark:border-emerald-800/60 space-y-1 text-xs font-arabic">
                <span className="font-bold text-emerald-900 dark:text-emerald-300 block">
                  💡 {language === 'ur' ? 'اہم عملی نکتہ:' : 'Practical Tip:'}
                </span>
                <p className="text-slate-700 dark:text-slate-200">
                  {language === 'ur' ? activeDetailItem.item.practicalTipsUrdu[0] : activeDetailItem.item.practicalTipsEn?.[0]}
                </p>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                id="discover-modal-action-btn"
                onClick={() => {
                  const target = activeDetailItem;
                  setActiveDetailItem(null);
                  handleActionClick(target);
                }}
                className="w-full sm:flex-1 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm font-arabic shadow-md flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{language === 'ur' ? activeDetailItem.item.actionLabelUrdu : activeDetailItem.item.actionLabelEn}</span>
              </button>

              {onOpenAITeacherWithPrompt && (
                <button
                  id="discover-modal-discuss-mentor-btn"
                  onClick={() => {
                    const prompt = language === 'ur'
                      ? `مجھے "${activeDetailItem.item.titleUrdu}" کے بارے میں تفصیلی رہنمائی دیں۔`
                      : `Please guide me about "${activeDetailItem.item.titleEn}".`;
                    setActiveDetailItem(null);
                    onOpenAITeacherWithPrompt(prompt);
                  }}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm font-arabic flex items-center justify-center gap-1.5"
                >
                  <Bot className="w-4 h-4 text-amber-500" />
                  <span>{language === 'ur' ? 'استاد سے بات کریں' : 'Ask Mentor'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
