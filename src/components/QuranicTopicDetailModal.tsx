import React, { useState, useEffect } from 'react';
import {
  X,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Share2,
  Volume2,
  VolumeX,
  Award,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  MessageSquare,
  Bot,
  Brain,
  Scale,
  ShieldCheck,
  Send,
  Compass,
  Check,
  Layers,
  Clock,
  RotateCcw
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { QuranicTopicItem } from '../data/quranicWisdomMasterData';
import { speakText, stopSpeaking, subscribeSpeechState } from '../utils/speech';

interface QuranicTopicDetailModalProps {
  topic: QuranicTopicItem;
  language: Language;
  userProfile: UserProfile;
  onClose: () => void;
  onCompleteAction: (topicId: string, reflectionText?: string) => void;
  onOpenAITeacherWithPrompt?: (prompt: string) => void;
}

type DetailTab = 'overview' | 'vocabulary' | 'contemplation' | 'depth' | 'action';

export const QuranicTopicDetailModal: React.FC<QuranicTopicDetailModalProps> = ({
  topic,
  language,
  userProfile,
  onClose,
  onCompleteAction,
  onOpenAITeacherWithPrompt,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [activeTab, setActiveTab] = useState<DetailTab>('overview');
  const [selectedDepth, setSelectedDepth] = useState<'beginner' | 'intermediate' | 'advanced' | 'deepThinker'>('beginner');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isSlowAudio, setIsSlowAudio] = useState(false);
  const [userReflection, setUserReflection] = useState('');
  const [isActionCompleted, setIsActionCompleted] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(`seekho_quran_action_${topic.id}`);
      return saved === 'true';
    } catch {
      return false;
    }
  });
  const [copiedNotification, setCopiedNotification] = useState(false);

  const audioTrackId = `quran-topic-${topic.id}`;

  useEffect(() => {
    const unsubscribe = subscribeSpeechState((state) => {
      if (state.currentId === audioTrackId) {
        setIsPlayingAudio(state.isSpeaking && !state.isPaused);
      } else if (!state.isSpeaking) {
        setIsPlayingAudio(false);
      }
    });
    return () => {
      unsubscribe();
      stopSpeaking();
    };
  }, [audioTrackId]);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      const textToRead = `${topic.arabicVerse}۔ ترجمہ: ${topic.translationUrdu}۔ بنیادی پیغام: ${topic.coreMessageUrdu}`;
      speakText(textToRead, {
        id: audioTrackId,
        language: 'ur',
        rate: isSlowAudio ? 0.72 : 0.86,
        pitch: 0.84, // Male mentor pitch
      });
      setIsPlayingAudio(true);
    }
  };

  const handleCompleteActionClick = () => {
    setIsActionCompleted(true);
    try {
      localStorage.setItem(`seekho_quran_action_${topic.id}`, 'true');
    } catch (e) {
      console.error(e);
    }
    onCompleteAction(topic.id, userReflection);
  };

  const handleShare = () => {
    const shareText = `📖 سیکھو (فکر و تدبر اور قرآنی بصیرت)\n\n${topic.titleUrdu}\n\nآیت: ${topic.arabicVerse}\nحوالہ: ${topic.surahReference}\n\nترجمہ: ${topic.translationUrdu}\n\nآج کا عملی قدم: ${topic.practicalActionUrdu}\n\nعلم سے عمل اور آخرت کی کامیابی تک — سیکھو`;
    if (navigator.share) {
      navigator.share({
        title: topic.titleUrdu,
        text: shareText,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-white my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* MODAL HEADER */}
        <div className={`p-5 sm:p-6 bg-gradient-to-r ${topic.coverGradient} border-b border-slate-700 relative`}>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs font-bold font-arabic">
                  {topic.categoryTitleUrdu}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold font-arabic">
                  {topic.surahReference}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-bold font-arabic">
                  +{topic.points} XP
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-arabic leading-snug text-white">
                {topic.titleUrdu}
              </h2>
              <p className="text-sm text-slate-200 font-arabic font-medium">
                {topic.taglineUrdu}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition"
                title="شیئر کریں"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-rose-900/60 text-slate-200 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {copiedNotification && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg font-arabic">
              ✅ کاپی ہو گیا!
            </div>
          )}
        </div>

        {/* AUDIO PLAYER & SPEED CONTROL BAR */}
        <div className="bg-slate-800/90 px-4 sm:px-6 py-2.5 border-b border-slate-700 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleAudio}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-black font-arabic flex items-center gap-2 transition ${
                isPlayingAudio
                  ? 'bg-rose-600 hover:bg-rose-700 text-white'
                  : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isPlayingAudio ? 'آڈیو بند کریں' : 'تلاوت و مفہوم سنیں (🔊)'}</span>
            </button>

            <button
              onClick={() => {
                setIsSlowAudio(!isSlowAudio);
                if (isPlayingAudio) {
                  stopSpeaking();
                  setIsPlayingAudio(false);
                }
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold font-arabic transition ${
                isSlowAudio
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-700 text-slate-300'
              }`}
            >
              {isSlowAudio ? 'آہستہ رفتار (0.7x)' : 'معمول کی رفتار (1.0x)'}
            </button>
          </div>

          {onOpenAITeacherWithPrompt && (
            <button
              onClick={() => {
                onClose();
                onOpenAITeacherWithPrompt(
                  `السلام علیکم! مجھے قرآن حکیم کی آیت "${topic.arabicVerse}" (${topic.surahReference}) کے بارے میں رہنمائی فرمائیں کہ میں اسے اپنی روزمرہ زندگی، سوچ اور عمل میں کیسے لاگو کروں؟`
                );
              }}
              className="px-3 py-1.5 rounded-xl bg-teal-900/80 hover:bg-teal-800 text-teal-200 border border-teal-500/40 text-xs font-bold font-arabic flex items-center gap-1.5 transition"
            >
              <Bot className="w-4 h-4 text-teal-300" />
              <span>AI رہنما سے گہرا سوال کریں</span>
            </button>
          )}
        </div>

        {/* MODAL TABS */}
        <div className="flex items-center gap-1 overflow-x-auto px-4 sm:px-6 py-2 bg-slate-950/60 border-b border-slate-800 scrollbar-none font-arabic">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
              activeTab === 'overview'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            📖 آیت و ترجمہ
          </button>
          <button
            onClick={() => setActiveTab('vocabulary')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
              activeTab === 'vocabulary'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            🔍 الفاظ کے معانی ({topic.keyWords.length})
          </button>
          <button
            onClick={() => setActiveTab('contemplation')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
              activeTab === 'contemplation'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            🤔 غور و فکر و جدید زندگی
          </button>
          <button
            onClick={() => setActiveTab('depth')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
              activeTab === 'depth'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            🎓 ۴ درجاتی گہرائی
          </button>
          <button
            onClick={() => setActiveTab('action')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
              activeTab === 'action'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            ⚡ آج کا عملی قدم
          </button>
        </div>

        {/* TAB CONTENTS */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 font-arabic">
          
          {/* 1. OVERVIEW TAB: ARABIC VERSE, TRANSLATION, CORE MESSAGE */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Arabic Verse Box */}
              <div className="bg-slate-950/90 border border-amber-400/30 rounded-2xl p-6 text-center space-y-4 shadow-inner">
                <span className="text-xs text-amber-300 font-bold tracking-wider px-3 py-1 bg-amber-400/10 rounded-full border border-amber-400/20 inline-block">
                  {topic.surahReference}
                </span>
                <p className="text-2xl sm:text-3xl font-black text-amber-200 leading-[2.2] tracking-wide dir-rtl font-arabic">
                  {topic.arabicVerse}
                </p>
              </div>

              {/* Urdu & English Translation */}
              <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <BookOpen className="w-4 h-4" />
                  <span>سادہ اردو ترجمہ</span>
                </div>
                <p className="text-lg sm:text-xl text-slate-100 font-bold leading-relaxed">
                  {topic.translationUrdu}
                </p>
                <div className="pt-2 border-t border-slate-700/60 text-xs text-slate-300 font-sans">
                  {topic.translationEn}
                </div>
              </div>

              {/* Core Divine Message */}
              <div className="bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-300 font-black text-base">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span>آیت کا بنیادی پیغام و حکمت</span>
                </div>
                <p className="text-base text-slate-200 leading-relaxed font-semibold">
                  {topic.coreMessageUrdu}
                </p>
              </div>

              {/* Source & Authenticity Note */}
              <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                <span>📚 مستند حوالہ: {topic.referenceCitation}</span>
                <span className="text-emerald-400">تحقیق شدہ متن</span>
              </div>
            </div>
          )}

          {/* 2. VOCABULARY TAB */}
          {activeTab === 'vocabulary' && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-sm text-slate-300">
                قرآنی الفاظ کی جڑ (Root) اور مفہوم کو سمجھنے سے آیت کا اصل پیغام واضح ہو جاتا ہے:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topic.keyWords.map((kw, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/80 border border-slate-700/90 rounded-2xl p-4 space-y-2 hover:border-emerald-500/50 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-amber-300 font-arabic">
                        {kw.wordArabic}
                      </span>
                      {kw.rootOrGrammar && (
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-700">
                          {kw.rootOrGrammar}
                        </span>
                      )}
                    </div>
                    <div className="text-base font-bold text-emerald-300">
                      {kw.wordUrdu}
                    </div>
                    <div className="text-xs text-slate-300 font-sans">
                      {kw.wordEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. CONTEMPLATION & MODERN LIFE */}
          {activeTab === 'contemplation' && (
            <div className="space-y-6">
              {/* Contemplation Questions */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-amber-300 font-black text-base">
                  <Brain className="w-5 h-5" />
                  <span>غور و فکر کے سوالات (رک کر سوچیں)</span>
                </div>
                <div className="space-y-3">
                  {topic.contemplationQuestionsUrdu.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                      <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-base text-slate-100 font-bold leading-snug">
                        {q}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modern Life Link */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-teal-300 font-black text-base">
                  <Compass className="w-5 h-5" />
                  <span>آج کی جدید زندگی اور معاشرے سے تعلق</span>
                </div>
                <p className="text-base text-slate-200 leading-relaxed font-semibold">
                  {topic.modernLifeRelevanceUrdu}
                </p>
              </div>

              {/* Self Assessment Prompt */}
              <div className="bg-indigo-950/50 border border-indigo-500/30 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-indigo-300 font-black text-base">
                  <Scale className="w-5 h-5" />
                  <span>اپنے عمل کا ذاتی جائزہ</span>
                </div>
                <p className="text-base text-slate-100 font-bold leading-relaxed">
                  {topic.selfAssessmentPromptUrdu}
                </p>
              </div>
            </div>
          )}

          {/* 4. 4-TIER DEPTH LEVELS */}
          {activeTab === 'depth' && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 p-1.5 bg-slate-950 rounded-2xl border border-slate-800 overflow-x-auto">
                <button
                  onClick={() => setSelectedDepth('beginner')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    selectedDepth === 'beginner'
                      ? 'bg-emerald-700 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  🟢 ابتدائی (Beginner)
                </button>
                <button
                  onClick={() => setSelectedDepth('intermediate')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    selectedDepth === 'intermediate'
                      ? 'bg-emerald-700 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  🟡 درمیانی (Intermediate)
                </button>
                <button
                  onClick={() => setSelectedDepth('advanced')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    selectedDepth === 'advanced'
                      ? 'bg-emerald-700 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  🔵 اعلیٰ (Advanced)
                </button>
                <button
                  onClick={() => setSelectedDepth('deepThinker')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    selectedDepth === 'deepThinker'
                      ? 'bg-purple-800 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  🟣 گہرا مفکر (Deep Thinker)
                </button>
              </div>

              <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900 text-emerald-400 border border-emerald-500/30">
                    {selectedDepth === 'beginner' && 'بہت آسان زبان، مختصر مثالیں اور روزمرہ زندگی'}
                    {selectedDepth === 'intermediate' && 'مزید وضاحت، عملی مشق اور رویوں کا سدھار'}
                    {selectedDepth === 'advanced' && 'دلائل، تاریخی و فکری تناظر اور سائنسی و معاشرتی فہم'}
                    {selectedDepth === 'deepThinker' && 'گہرے سوالات، فلسفیانہ بحث، اخلاقی dilemmas اور تجزیاتی سوچ'}
                  </span>
                </div>

                <p className="text-lg sm:text-xl text-slate-100 font-bold leading-relaxed">
                  {topic.depthLevels[selectedDepth]}
                </p>
              </div>
            </div>
          )}

          {/* 5. ACTION TAB */}
          {activeTab === 'action' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-950/60 to-slate-900 border border-amber-400/40 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-300 font-black text-lg">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span>آج کا ایک ٹھوس عملی قدم</span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-amber-400/20 text-amber-300 rounded-full border border-amber-400/30">
                    +{topic.points} پوائنٹس
                  </span>
                </div>

                <p className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {topic.practicalActionUrdu}
                </p>
                <p className="text-xs text-slate-300 font-sans">
                  {topic.practicalActionEn}
                </p>
              </div>

              {/* Reflection Diary Input */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-300">
                  اپنی ڈائری: اس عمل سے آپ نے کیا محسوس کیا؟ (اختیاری)
                </label>
                <textarea
                  rows={3}
                  value={userReflection}
                  onChange={(e) => setUserReflection(e.target.value)}
                  placeholder="مثلاً: آج میں نے اس بات پر عمل کیا اور مجھے دلی سکون ملا..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Action Button */}
              {isActionCompleted ? (
                <div className="p-4 bg-emerald-900/60 border border-emerald-500/50 rounded-2xl text-center text-emerald-200 font-bold text-base flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span>ماشاءاللہ! آج کا یہ عملی قدم مکمل ہو چکا ہے۔ (+{topic.points} XP)</span>
                </div>
              ) : (
                <button
                  onClick={handleCompleteActionClick}
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg shadow-lg hover:shadow-emerald-600/30 transition flex items-center justify-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  <span>میں نے یہ عمل مکمل کر لیا ہے</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3 font-arabic">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition"
          >
            بند کریں
          </button>

          <div className="flex items-center gap-2">
            {activeTab !== 'action' ? (
              <button
                onClick={() => {
                  const tabs: DetailTab[] = ['overview', 'vocabulary', 'contemplation', 'depth', 'action'];
                  const curIdx = tabs.indexOf(activeTab);
                  if (curIdx < tabs.length - 1) setActiveTab(tabs[curIdx + 1]);
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm flex items-center gap-2 transition"
              >
                <span>اگلا مرحلہ</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm transition"
              >
                مکمل ہوا
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
