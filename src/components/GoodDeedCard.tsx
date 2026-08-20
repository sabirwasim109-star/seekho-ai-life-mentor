import React, { useState } from 'react';
import { 
  Sprout, 
  Sparkles, 
  CheckCircle2, 
  RotateCw, 
  Bot, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Award, 
  BookOpen, 
  Heart, 
  Users, 
  Home, 
  Leaf, 
  Briefcase, 
  PlusCircle, 
  Check, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Target,
  FileText
} from 'lucide-react';
import { 
  Language, 
  UserProfile, 
  GoodDeedCategory, 
  GoodDeedItem, 
  PersonalImpactCategory, 
  PersonalImpactRecord 
} from '../types';
import { 
  PRACTICAL_IMPACT_SUGGESTIONS, 
  ImpactSuggestionItem,
  getPersonalImpactRecords,
  savePersonalImpactRecord,
  getRecommendedGoodDeed
} from '../data/goodDeedsData';

interface GoodDeedCardProps {
  language: Language;
  userProfile: UserProfile;
  onCompleteGoodDeed: (deed: GoodDeedItem) => void;
  onOpenAITeacher: (presetPrompt?: string) => void;
}

export const GoodDeedCard: React.FC<GoodDeedCardProps> = ({
  language,
  userProfile,
  onCompleteGoodDeed,
  onOpenAITeacher,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [activeCategory, setActiveCategory] = useState<PersonalImpactCategory | 'all'>('all');
  const [selectedSuggestion, setSelectedSuggestion] = useState<ImpactSuggestionItem>(PRACTICAL_IMPACT_SUGGESTIONS[0]);
  const [isRecordingCustom, setIsRecordingCustom] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

  // Custom record form state
  const [customTitle, setCustomTitle] = useState('');
  const [customWhatIDid, setCustomWhatIDid] = useState('');
  const [customWhoBenefited, setCustomWhoBenefited] = useState('');
  const [customWhatILearned, setCustomWhatILearned] = useState('');
  const [customWhatICanDoNext, setCustomWhatICanDoNext] = useState('');
  const [customCategory, setCustomCategory] = useState<PersonalImpactCategory>('family');

  const [savedRecords, setSavedRecords] = useState<PersonalImpactRecord[]>(() => 
    getPersonalImpactRecords()
  );

  const filteredSuggestions = activeCategory === 'all'
    ? PRACTICAL_IMPACT_SUGGESTIONS
    : PRACTICAL_IMPACT_SUGGESTIONS.filter(s => s.category === activeCategory);

  const handleSelectSuggestion = (sug: ImpactSuggestionItem) => {
    setSelectedSuggestion(sug);
    setConfirmationMessage(null);
  };

  const handleRecordSuggestionImpact = (sug: ImpactSuggestionItem) => {
    const newRecord: PersonalImpactRecord = {
      id: `impact-${Date.now()}`,
      category: sug.category,
      categoryUrdu: sug.categoryUrdu,
      categoryEn: sug.categoryEn,
      categoryEmoji: sug.categoryEmoji,
      titleUrdu: sug.titleUrdu,
      titleEn: sug.titleEn,
      whatIDidUrdu: sug.whatIDidUrdu,
      whatIDidEn: sug.whatIDidEn,
      whoBenefitedUrdu: sug.whoBenefitedUrdu,
      whoBenefitedEn: sug.whoBenefitedEn,
      whatILearnedUrdu: sug.whatILearnedUrdu,
      whatILearnedEn: sug.whatILearnedEn,
      whatICanDoNextUrdu: sug.whatICanDoNextUrdu,
      whatICanDoNextEn: sug.whatICanDoNextEn,
      createdAt: new Date().toISOString(),
      bismillahHeader: sug.bismillahHeader,
      verifiedSourceUrdu: sug.verifiedSourceUrdu,
      verifiedSourceEn: sug.verifiedSourceEn
    };

    const updated = savePersonalImpactRecord(newRecord);
    setSavedRecords(updated);

    // Link with existing onCompleteGoodDeed callback
    const deedItem: GoodDeedItem = {
      id: sug.id,
      category: sug.category as any,
      categoryUrdu: sug.categoryUrdu,
      categoryEn: sug.categoryEn,
      categoryEmoji: sug.categoryEmoji,
      titleUrdu: sug.titleUrdu,
      titleEn: sug.titleEn,
      descriptionUrdu: sug.whatIDidUrdu,
      descriptionEn: sug.whatIDidEn,
      actionStepUrdu: sug.whatICanDoNextUrdu,
      actionStepEn: sug.whatICanDoNextEn,
      estimatedMinutes: 10,
      points: 20,
      targetSkillUrdu: 'عملی نیکی و مثبت اثر',
      targetSkillEn: 'Practical Good Deed & Positive Impact',
      growthAreaId: 'community_service',
      quranOrHadithRefUrdu: sug.verifiedSourceUrdu,
      quranOrHadithRefEn: sug.verifiedSourceEn,
      iconName: 'Sprout'
    };

    onCompleteGoodDeed(deedItem);

    setConfirmationMessage(
      isUrdu
        ? 'ماشاءاللہ! آپ کا مخلصانہ عمل محفوظ ہو گیا۔ نیکی کی قدر خالص نیت اور تسلسل میں ہے، مقابلے میں نہیں۔'
        : 'Action successfully recorded! Sincere deeds flourish through consistency and pure intentions.'
    );
  };

  const handleSaveCustomImpact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customWhatIDid.trim()) return;

    const catMeta = PRACTICAL_IMPACT_SUGGESTIONS.find(s => s.category === customCategory) || PRACTICAL_IMPACT_SUGGESTIONS[0];

    const newRecord: PersonalImpactRecord = {
      id: `custom-impact-${Date.now()}`,
      category: customCategory,
      categoryUrdu: catMeta.categoryUrdu,
      categoryEn: catMeta.categoryEn,
      categoryEmoji: catMeta.categoryEmoji,
      titleUrdu: customTitle.trim() || 'میرا مخلصانہ اچھا عمل',
      titleEn: customTitle.trim() || 'My Personal Good Action',
      whatIDidUrdu: customWhatIDid.trim(),
      whatIDidEn: customWhatIDid.trim(),
      whoBenefitedUrdu: customWhoBenefited.trim() || 'اہل خانہ / معاشرہ',
      whoBenefitedEn: customWhoBenefited.trim() || 'Family / Community',
      whatILearnedUrdu: customWhatILearned.trim() || 'خدمت سے دل کو سکون ملتا ہے',
      whatILearnedEn: customWhatILearned.trim() || 'Service brings peace and empathy',
      whatICanDoNextUrdu: customWhatICanDoNext.trim() || 'یہ نیکی باقاعدگی سے جاری رکھوں گا',
      whatICanDoNextEn: customWhatICanDoNext.trim() || 'Will continue this habit consistently',
      createdAt: new Date().toISOString(),
      bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
      verifiedSourceUrdu: 'صحیح مسلم: ۲۶۹۹ ("اللہ بندے کی مدد میں رہتا ہے جب تک بندہ اپنے بھائی کی مدد میں رہے")',
      verifiedSourceEn: 'Sahih Muslim: 2699 ("Allah continues to assist His servant as long as the servant assists his brother")'
    };

    const updated = savePersonalImpactRecord(newRecord);
    setSavedRecords(updated);

    const deedItem: GoodDeedItem = {
      id: newRecord.id,
      category: customCategory as any,
      categoryUrdu: catMeta.categoryUrdu,
      categoryEn: catMeta.categoryEn,
      categoryEmoji: catMeta.categoryEmoji,
      titleUrdu: newRecord.titleUrdu,
      titleEn: newRecord.titleEn,
      descriptionUrdu: newRecord.whatIDidUrdu,
      descriptionEn: newRecord.whatIDidEn,
      actionStepUrdu: newRecord.whatICanDoNextUrdu,
      actionStepEn: newRecord.whatICanDoNextEn,
      estimatedMinutes: 10,
      points: 20,
      targetSkillUrdu: 'ذاتی نیکی و مثبت اثر',
      targetSkillEn: 'Personal Good Deed & Positive Impact',
      growthAreaId: 'community_service',
      iconName: 'Heart'
    };

    onCompleteGoodDeed(deedItem);

    // Reset form
    setCustomTitle('');
    setCustomWhatIDid('');
    setCustomWhoBenefited('');
    setCustomWhatILearned('');
    setCustomWhatICanDoNext('');
    setIsRecordingCustom(false);

    setConfirmationMessage(
      isUrdu
        ? 'ماشاءاللہ! آپ کا مخلصانہ عمل محفوظ ہو گیا۔ نیکی کی قدر خالص نیت اور تسلسل میں ہے، مقابلے میں نہیں۔'
        : 'Action successfully recorded! Sincere deeds flourish through consistency and pure intentions.'
    );
  };

  return (
    <div 
      id="my-impact-card" 
      className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-500/20 shadow-xl space-y-6 relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-50/60 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1.5 font-arabic">
              <Sprout className="w-3.5 h-3.5 text-emerald-700" />
              {isUrdu ? 'میرا مثبت اثر (My Impact)' : 'My Impact'}
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-arabic">
              {isUrdu ? `${savedRecords.length} مخلصانہ عمل درج شدہ` : `${savedRecords.length} Actions Logged`}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-arabic">
            {isUrdu ? 'عملی نیکی اور معاشرتی بھلائی کا ذاتی ریکارڈ' : 'Personal Good Actions & Social Impact'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-arabic max-w-2xl leading-relaxed">
            {isUrdu
              ? 'بغیر کسی دکھاوے یا مقابلے کے، اپنے روزمرہ کے چھوٹے اور مخلصانہ اچھے کاموں کو ریکارڈ کریں اور ان کے دیرپا اثرات کا جائزہ لیں۔'
              : 'Record meaningful daily good deeds and reflect on who benefited and what you learned, purely for self-growth.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            id="my-impact-record-toggle-btn"
            onClick={() => { setIsRecordingCustom(!isRecordingCustom); setConfirmationMessage(null); }}
            className="px-3.5 py-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm font-arabic shadow-xs transition flex items-center gap-1.5"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{isUrdu ? (isRecordingCustom ? 'تجاویز دیکھیں' : 'اپنا عمل درج کریں') : (isRecordingCustom ? 'View Suggestions' : 'Record Action')}</span>
          </button>

          {onOpenAITeacher && (
            <button
              onClick={() => onOpenAITeacher(isUrdu ? 'میں آج اپنے محلے، خاندان یا ساتھیوں کے لیے کیا چھوٹا اور موثر اچھا کام کر سکتا ہوں؟' : 'What small, high-leverage good action can I do today for my family or community?')}
              className="px-3.5 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm font-arabic transition flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4 text-emerald-700" />
              <span>{isUrdu ? 'استاد سے مشورہ لیں' : 'Ask Mentor'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Sincere Positive Confirmation Message */}
      {confirmationMessage && (
        <div className="relative z-10 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-start gap-3 shadow-xs font-arabic">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-black text-emerald-900">{isUrdu ? 'عمل کامیابی سے محفوظ ہو گیا' : 'Action Successfully Saved'}</h4>
            <p className="text-xs text-emerald-800 leading-relaxed">{confirmationMessage}</p>
          </div>
        </div>
      )}

      {/* 6 Category Filters */}
      {!isRecordingCustom && (
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs font-arabic">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition shrink-0 border ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {isUrdu ? 'تمام شعبہ جات' : 'All Categories'}
            </button>
            <button
              onClick={() => setActiveCategory('family')}
              className={`px-3 py-1.5 rounded-xl font-bold transition shrink-0 flex items-center gap-1 border ${
                activeCategory === 'family'
                  ? 'bg-rose-600 text-white border-rose-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>❤️</span>
              <span>{isUrdu ? 'خاندان (Family)' : 'Family'}</span>
            </button>
            <button
              onClick={() => setActiveCategory('community')}
              className={`px-3 py-1.5 rounded-xl font-bold transition shrink-0 flex items-center gap-1 border ${
                activeCategory === 'community'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>🏘️</span>
              <span>{isUrdu ? 'محلہ و برادری (Community)' : 'Community'}</span>
            </button>
            <button
              onClick={() => setActiveCategory('helping_others')}
              className={`px-3 py-1.5 rounded-xl font-bold transition shrink-0 flex items-center gap-1 border ${
                activeCategory === 'helping_others'
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>🤝</span>
              <span>{isUrdu ? 'دوسروں کی مدد (Helping Others)' : 'Helping Others'}</span>
            </button>
            <button
              onClick={() => setActiveCategory('teaching_knowledge')}
              className={`px-3 py-1.5 rounded-xl font-bold transition shrink-0 flex items-center gap-1 border ${
                activeCategory === 'teaching_knowledge'
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>📚</span>
              <span>{isUrdu ? 'علم و ہنر سکھانا (Teaching)' : 'Teaching'}</span>
            </button>
            <button
              onClick={() => setActiveCategory('environment')}
              className={`px-3 py-1.5 rounded-xl font-bold transition shrink-0 flex items-center gap-1 border ${
                activeCategory === 'environment'
                  ? 'bg-teal-600 text-white border-teal-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>🌱</span>
              <span>{isUrdu ? 'ماحول و صفائی (Environment)' : 'Environment'}</span>
            </button>
            <button
              onClick={() => setActiveCategory('ethical_work')}
              className={`px-3 py-1.5 rounded-xl font-bold transition shrink-0 flex items-center gap-1 border ${
                activeCategory === 'ethical_work'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>💼</span>
              <span>{isUrdu ? 'دیانتدارانہ کام (Ethical Work)' : 'Ethical Work'}</span>
            </button>
          </div>

          {/* Quick Suggestions Chips Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {filteredSuggestions.map((sug) => {
              const isSelected = selectedSuggestion.id === sug.id;
              return (
                <button
                  key={sug.id}
                  onClick={() => handleSelectSuggestion(sug)}
                  className={`p-3 rounded-2xl border text-right transition flex items-center gap-2 font-arabic ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="text-base">{sug.categoryEmoji}</span>
                  <span className="text-xs truncate">{isUrdu ? sug.titleUrdu : sug.titleEn}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* CUSTOM ACTION RECORDING FORM */}
      {isRecordingCustom && (
        <form onSubmit={handleSaveCustomImpact} className="relative z-10 bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-4 font-arabic">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{isUrdu ? 'اپنا مخلصانہ عمل درج کریں' : 'Record Your Personal Impact'}</span>
            </h3>
            <span className="text-xs text-slate-500">
              {isUrdu ? 'نیت کی صفائی نیکی کا اصل وزن ہے' : 'Sincerity is the essence of good deeds'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isUrdu ? 'شعبہ منتخب کریں:' : 'Select Category:'}
              </label>
              <select
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value as PersonalImpactCategory)}
                className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-xs font-bold text-slate-800"
              >
                <option value="family">{isUrdu ? '❤️ خاندان (Family)' : 'Family'}</option>
                <option value="community">{isUrdu ? '🏘️ محلہ و برادری (Community)' : 'Community'}</option>
                <option value="helping_others">{isUrdu ? '🤝 دوسروں کی مدد (Helping Others)' : 'Helping Others'}</option>
                <option value="teaching_knowledge">{isUrdu ? '📚 علم و ہنر سکھانا (Teaching/Knowledge)' : 'Teaching Knowledge'}</option>
                <option value="environment">{isUrdu ? '🌱 ماحول و صفائی (Environment)' : 'Environment'}</option>
                <option value="ethical_work">{isUrdu ? '💼 دیانتدارانہ کام (Ethical Work)' : 'Ethical Work'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isUrdu ? 'مختصر عنوان:' : 'Short Title:'}
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder={isUrdu ? 'مثلاً: بزرگ پڑوسی کا سودا لانا' : 'e.g., Brought groceries for elderly neighbor'}
                className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800"
              />
            </div>
          </div>

          {/* 4 Structured Questions */}
          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                {isUrdu ? '۱. میں نے کیا کیا؟ (What I did)' : '1. What I did:'}
              </label>
              <textarea
                required
                rows={2}
                value={customWhatIDid}
                onChange={(e) => setCustomWhatIDid(e.target.value)}
                placeholder={isUrdu ? 'آپ نے جو نیکی یا خدمت انجام دی اس کی مختصر تفصیل لکھیں...' : 'Describe what you did...'}
                className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {isUrdu ? '۲. کس کو فائدہ پہنچا؟ (Who benefited)' : '2. Who benefited:'}
                </label>
                <input
                  type="text"
                  value={customWhoBenefited}
                  onChange={(e) => setCustomWhoBenefited(e.target.value)}
                  placeholder={isUrdu ? 'مثلاً: امی، چھوٹا بھائی، پڑوسی، کلاس فیلو' : 'e.g., Mother, younger sibling, neighbor'}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {isUrdu ? '۳. مجھے کیا سبق / احساس ملا؟ (What I learned)' : '3. What I learned:'}
                </label>
                <input
                  type="text"
                  value={customWhatILearned}
                  onChange={(e) => setCustomWhatILearned(e.target.value)}
                  placeholder={isUrdu ? 'مثلاً: دل کو سکون ملا، سکھانے سے علم بڑھتا ہے' : 'e.g., Deep inner peace, teaching deepened mastery'}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                {isUrdu ? '۴. میں آگے کیا کر سکتا ہوں؟ (What I can do next)' : '4. What I can do next:'}
              </label>
              <input
                type="text"
                value={customWhatICanDoNext}
                onChange={(e) => setCustomWhatICanDoNext(e.target.value)}
                placeholder={isUrdu ? 'مثلاً: ہر جمعہ یہ خدمت دہراؤں گا / اگلے ہفتے مزید مدد کروں گا' : 'e.g., Will repeat this weekly / follow up next week'}
                className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsRecordingCustom(false)}
              className="px-4 py-2 rounded-xl bg-slate-200 text-slate-700 font-bold text-xs"
            >
              {isUrdu ? 'منسوخ کریں' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-sm flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{isUrdu ? 'عمل محفوظ کریں (+20 پوائنٹس)' : 'Save Action (+20 Pts)'}</span>
            </button>
          </div>
        </form>
      )}

      {/* SELECTED SUGGESTION & 4-PART FRAMEWORK DISPLAY */}
      {!isRecordingCustom && selectedSuggestion && (
        <div className="relative z-10 p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          {/* Islamic Verified Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <span className="text-xl">{selectedSuggestion.categoryEmoji}</span>
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                  {isUrdu ? selectedSuggestion.titleUrdu : selectedSuggestion.titleEn}
                </h3>
                <span className="text-xs text-slate-500 font-arabic">
                  {isUrdu ? `شعبہ: ${selectedSuggestion.categoryUrdu}` : `Category: ${selectedSuggestion.categoryEn}`}
                </span>
              </div>
            </div>

            <div className="text-right sm:text-left">
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200 font-arabic flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>{isUrdu ? selectedSuggestion.verifiedSourceUrdu : selectedSuggestion.verifiedSourceEn}</span>
              </span>
            </div>
          </div>

          <div className="text-center py-0.5">
            <span className="font-arabic text-xs text-emerald-800 font-bold">
              {selectedSuggestion.bismillahHeader}
            </span>
          </div>

          {/* 4 Structured Points Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-arabic">
            {/* 1. What I did */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{isUrdu ? '۱. میں نے کیا کیا؟ (What I did)' : '1. What I did:'}</span>
              </div>
              <p className="text-slate-700 leading-relaxed pr-5">
                {isUrdu ? selectedSuggestion.whatIDidUrdu : selectedSuggestion.whatIDidEn}
              </p>
            </div>

            {/* 2. Who benefited */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-indigo-800 font-bold">
                <Users className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>{isUrdu ? '۲. کس کو فائدہ پہنچا؟ (Who benefited)' : '2. Who benefited:'}</span>
              </div>
              <p className="text-slate-700 leading-relaxed pr-5">
                {isUrdu ? selectedSuggestion.whoBenefitedUrdu : selectedSuggestion.whoBenefitedEn}
              </p>
            </div>

            {/* 3. What I learned */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{isUrdu ? '۳. مجھے کیا سبق ملا؟ (What I learned)' : '3. What I learned:'}</span>
              </div>
              <p className="text-slate-700 leading-relaxed pr-5">
                {isUrdu ? selectedSuggestion.whatILearnedUrdu : selectedSuggestion.whatILearnedEn}
              </p>
            </div>

            {/* 4. What I can do next */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-teal-800 font-bold">
                <Target className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>{isUrdu ? '۴. میں آگے کیا کر سکتا ہوں؟ (Next Action)' : '4. What I can do next:'}</span>
              </div>
              <p className="text-slate-700 leading-relaxed pr-5">
                {isUrdu ? selectedSuggestion.whatICanDoNextUrdu : selectedSuggestion.whatICanDoNextEn}
              </p>
            </div>
          </div>

          {/* Action Confirmation Button */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={() => handleRecordSuggestionImpact(selectedSuggestion)}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-black text-xs sm:text-sm font-arabic shadow-md transition flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>{isUrdu ? 'میں نے یہ عمل مکمل کیا (ریکارڈ محفوظ کریں)' : 'I Completed This Action (Save Log)'}</span>
            </button>

            {onOpenAITeacher && (
              <button
                onClick={() => onOpenAITeacher(isUrdu ? `میں نے "${selectedSuggestion.titleUrdu}" کا عمل کیا ہے۔ مجھے اس پر مزید رہنمائی دیں کہ اس کے اثرات کو مستقل کیسے رکھوں؟` : `I completed "${selectedSuggestion.titleEn}". Guide me on sustaining this positive impact.`)}
                className="text-xs text-emerald-800 hover:text-emerald-950 font-bold font-arabic flex items-center gap-1 transition"
              >
                <Bot className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isUrdu ? 'اس عمل پر استاد سے بات کریں' : 'Reflect with AI Mentor'}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* MY IMPACT JOURNAL / LOG DRAWER */}
      {savedRecords.length > 0 && (
        <div className="relative z-10 border-t border-slate-100 pt-3">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition text-xs font-bold text-slate-700 font-arabic"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-700" />
              <span>{isUrdu ? `میری ذاتی نیکیوں کی ڈائری (${savedRecords.length} عمل درج شدہ)` : `My Personal Impact Journal (${savedRecords.length} Actions)`}</span>
            </div>
            {showHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showHistory && (
            <div className="mt-3 space-y-3 max-h-96 overflow-y-auto pr-1">
              {savedRecords.map((rec) => (
                <div key={rec.id} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 text-xs font-arabic">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <span>{rec.categoryEmoji}</span>
                      <span>{isUrdu ? rec.titleUrdu : rec.titleEn}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">
                      {new Date(rec.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                    <div>
                      <strong className="text-slate-800">{isUrdu ? 'کیا کیا:' : 'What I did:'}</strong> {isUrdu ? rec.whatIDidUrdu : rec.whatIDidEn}
                    </div>
                    <div>
                      <strong className="text-slate-800">{isUrdu ? 'فائدہ کس کو ملا:' : 'Who benefited:'}</strong> {isUrdu ? rec.whoBenefitedUrdu : rec.whoBenefitedEn}
                    </div>
                    <div>
                      <strong className="text-slate-800">{isUrdu ? 'کیا سبق ملا:' : 'What I learned:'}</strong> {isUrdu ? rec.whatILearnedUrdu : rec.whatILearnedEn}
                    </div>
                    <div>
                      <strong className="text-slate-800">{isUrdu ? 'اگلا قدم:' : 'Next step:'}</strong> {isUrdu ? rec.whatICanDoNextUrdu : rec.whatICanDoNextEn}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
