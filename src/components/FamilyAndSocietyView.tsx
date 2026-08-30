import React, { useState, useEffect } from 'react';
import {
  HeartHandshake,
  Search,
  Users,
  Heart,
  Scale,
  Sparkles,
  BookOpen,
  Volume2,
  VolumeX,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  Filter,
  ShieldCheck,
  AlertTriangle,
  Award,
  HelpCircle,
  MessageSquare,
  Baby,
  Smile
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import {
  FAMILY_AND_SOCIETY_40_TOPICS,
  RELATIONSHIP_ADVISOR_MATRICES,
  FAMILY_SITUATIONAL_DILEMMAS,
  DAILY_PRACTICAL_GOOD_DEEDS,
  SOCIETAL_16_PROBLEMS_MASTER_DATA,
  SEVEN_DAY_COMMUNITY_CHALLENGES,
  FamilyTopicItem,
  RelationshipMatrixItem,
  FamilySituationDilemma,
  DailyGoodDeedItem,
  SocietalProblemItem,
  SevenDayCommunityChallenge,
  searchFamilyAndSocietyMaster
} from '../data/familyAndSocietyMasterData';
import { FamilyTopicDetailModal } from './FamilyTopicDetailModal';
import { RelationshipAdvisorModal } from './RelationshipAdvisorModal';
import { FamilySituationDilemmaModal } from './FamilySituationDilemmaModal';
import { FamilySelfReflectionModal } from './FamilySelfReflectionModal';
import { speakText, stopSpeaking } from '../utils/speech';

interface FamilyAndSocietyViewProps {
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacherWithPrompt?: (prompt: string) => void;
  onRewardPoints?: (points: number, msgUrdu: string, msgEn: string) => void;
}

export const FamilyAndSocietyView: React.FC<FamilyAndSocietyViewProps> = ({
  language,
  userProfile,
  onOpenAITeacherWithPrompt,
  onRewardPoints,
}) => {
  const [activeSection, setActiveSection] = useState<'topics' | 'relationships' | 'dilemmas' | 'societal' | 'challenges' | 'deeds'>('topics');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlayingHeaderVoice, setIsPlayingHeaderVoice] = useState(false);
  const [isYouthMode, setIsYouthMode] = useState(false);

  // Selected Modal States
  const [selectedTopic, setSelectedTopic] = useState<FamilyTopicItem | null>(null);
  const [selectedRelationship, setSelectedRelationship] = useState<RelationshipMatrixItem | null>(null);
  const [selectedDilemma, setSelectedDilemma] = useState<FamilySituationDilemma | null>(null);
  const [showReflectionModal, setShowReflectionModal] = useState(false);

  // Daily Deeds Completed State
  const [completedDeeds, setCompletedDeeds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('seekho_family_completed_deeds');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Challenge tracking
  const [challengeProgress, setChallengeProgress] = useState<Record<string, number[]>>(() => {
    try {
      const saved = localStorage.getItem('seekho_family_challenges_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const filteredTopics = searchFamilyAndSocietyMaster(searchQuery);

  const handleToggleHeaderVoice = () => {
    if (isPlayingHeaderVoice) {
      stopSpeaking();
      setIsPlayingHeaderVoice(false);
    } else {
      const textToSpeak = 'دانش و اخلاق — خاندان اور معاشرہ۔ اپنے آپ کے ساتھ بہتر ہوں، والدین کی خدمت کریں، اپنے بچوں کی اچھی تربیت کریں، پڑوسیوں کا خیال رکھیں اور معاشرے کے لیے مفید انسان بنیں۔';
      speakText(textToSpeak, {
        language: 'ur',
        onEnd: () => setIsPlayingHeaderVoice(false),
        onError: () => setIsPlayingHeaderVoice(false),
      });
      setIsPlayingHeaderVoice(true);
    }
  };

  const handleToggleDeed = (deed: DailyGoodDeedItem) => {
    const isNowDone = !completedDeeds[deed.id];
    const updated = { ...completedDeeds, [deed.id]: isNowDone };
    setCompletedDeeds(updated);
    try {
      localStorage.setItem('seekho_family_completed_deeds', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    if (isNowDone && onRewardPoints) {
      onRewardPoints(
        deed.points || 20,
        `ماشاءاللہ! آپ نے "${deed.titleUrdu}" کا نیک عمل مکمل کر لیا ہے۔ (+${deed.points} پوائنٹس)`,
        `MashaAllah! You logged the good deed: "${deed.titleEn}". (+${deed.points} Points)`
      );
    }
  };

  const handleToggleChallengeDay = (challengeId: string, dayNum: number) => {
    const currentDays = challengeProgress[challengeId] || [];
    const isDone = currentDays.includes(dayNum);
    const updatedDays = isDone
      ? currentDays.filter((d) => d !== dayNum)
      : [...currentDays, dayNum];

    const updated = { ...challengeProgress, [challengeId]: updatedDays };
    setChallengeProgress(updated);
    try {
      localStorage.setItem('seekho_family_challenges_progress', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    if (!isDone && onRewardPoints) {
      onRewardPoints(
        20,
        `شاندار! چیلنج کا دن ${dayNum} کامیابی سے مکمل ہوا۔`,
        `Great! Challenge Day ${dayNum} completed.`
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24 font-arabic text-slate-900" dir="rtl">
      
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 text-white pt-10 pb-12 px-4 sm:px-6 relative overflow-hidden border-b border-emerald-800/40">
        <div className="max-w-6xl mx-auto space-y-6 relative z-10">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl border border-white/20 shadow-md">
                🏡
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/30">
                    {language === 'ur' ? 'اخلاق و معاشرت کا مکمل نصاب' : 'Family & Social Ethics System'}
                  </span>
                  <span className="text-xs text-slate-300 font-sans">40 Master Categories</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black font-arabic tracking-tight text-white mt-1">
                  دانش و اخلاق — خاندان و معاشرہ
                </h1>
              </div>
            </div>

            {/* Action buttons in header */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setIsYouthMode(!isYouthMode)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                  isYouthMode
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                }`}
              >
                <Baby className="w-4 h-4" />
                <span>{isYouthMode ? 'بچوں کا موڈ آن ہے ✓' : 'بچوں اور نوجوانوں کا موڈ'}</span>
              </button>

              <button
                onClick={handleToggleHeaderVoice}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                  isPlayingHeaderVoice
                    ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                }`}
              >
                {isPlayingHeaderVoice ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isPlayingHeaderVoice ? 'آواز بند کریں' : 'صوتی تعارف سنیں'}</span>
              </button>

              <button
                onClick={() => setShowReflectionModal(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-black border border-amber-300 shadow-sm transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>اپنے اخلاق کو پرکھیں</span>
              </button>
            </div>
          </div>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-3xl leading-relaxed font-arabic">
            "اپنے آپ کے ساتھ بہتر بنیں → والدین کا سہارا بنیں → بچوں کی باوقار تربیت کریں → پڑوسیوں اور معاشرے کے لیے نفع بخش انسان بنیں۔ دنیا بھی سنواریں اور آخرت بھی بہتر بنائیں۔"
          </p>

          {/* Search Box */}
          <div className="relative max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="تلاش کریں: والدین، بچوں کی تربیت، غصہ، پڑوسی، dosti, anger control..."
              className="w-full bg-white/95 backdrop-blur-md text-slate-900 placeholder:text-slate-500 text-sm sm:text-base rounded-2xl py-3.5 px-12 border border-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-lg font-arabic"
            />
            <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full hover:bg-slate-300"
              >
                صاف کریں
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 2. SECTION NAVIGATION TABS */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto flex items-center gap-2 py-2.5">
          
          <button
            onClick={() => setActiveSection('topics')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black font-arabic whitespace-nowrap transition-all flex items-center gap-2 ${
              activeSection === 'topics'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>۴۰ اخلاقی موضوعات ({FAMILY_AND_SOCIETY_40_TOPICS.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('relationships')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black font-arabic whitespace-nowrap transition-all flex items-center gap-2 ${
              activeSection === 'relationships'
                ? 'bg-teal-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>رشتے بہتر بنائیں (8 Matrices)</span>
          </button>

          <button
            onClick={() => setActiveSection('dilemmas')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black font-arabic whitespace-nowrap transition-all flex items-center gap-2 ${
              activeSection === 'dilemmas'
                ? 'bg-purple-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>عملی سچویشنز اور فیصلے</span>
          </button>

          <button
            onClick={() => setActiveSection('societal')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black font-arabic whitespace-nowrap transition-all flex items-center gap-2 ${
              activeSection === 'societal'
                ? 'bg-indigo-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>معاشرتی مسائل کا حل</span>
          </button>

          <button
            onClick={() => setActiveSection('challenges')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black font-arabic whitespace-nowrap transition-all flex items-center gap-2 ${
              activeSection === 'challenges'
                ? 'bg-amber-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>۷ دن کے چیلنجز</span>
          </button>

          <button
            onClick={() => setActiveSection('deeds')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-black font-arabic whitespace-nowrap transition-all flex items-center gap-2 ${
              activeSection === 'deeds'
                ? 'bg-rose-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>آج ایک اچھا کام ({Object.values(completedDeeds).filter(Boolean).length}/10)</span>
          </button>

        </div>
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 space-y-10">

        {/* SECTION 1: 40 MASTER ETHICS TOPICS */}
        {activeSection === 'topics' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  {language === 'ur' ? '۴۰ بنیادی اخلاقی و خاندانی موضوعات' : '40 Master Ethics & Family Categories'}
                </h2>
                <p className="text-sm text-slate-600">
                  ہر موضوع میں ۱۰ مرحلہ وار تفہیم، قرآنی حوالہ اور عملی مشق شامل ہے۔
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full">
                {filteredTopics.length} موضوعات دستیاب
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className="bg-white hover:bg-emerald-50/30 rounded-3xl p-5 sm:p-6 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform shadow-2xs">
                        {topic.iconSymbol}
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        #{topic.categoryNumber}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-emerald-800 transition">
                        {topic.titleUrdu}
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">{topic.titleEn}</p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {isYouthMode ? topic.youthFriendlyExampleUrdu : topic.taglineUrdu}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                    <span>سبق اور مشق کھولیں</span>
                    <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: RELATIONSHIPS MATRIX */}
        {activeSection === 'relationships' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                رشتے بہتر بنائیں — ۸ کلیدی تعلقات
              </h2>
              <p className="text-sm text-slate-600">
                کسی بھی تعلق کو منتخب کریں: اصول، غلطیاں، مثبت گفتگو کے طریقے اور ۷ دن کا اصلاحی پلان دیکھیں۔
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATIONSHIP_ADVISOR_MATRICES.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => setSelectedRelationship(rel)}
                  className="bg-white hover:bg-teal-50/40 rounded-3xl p-6 border border-slate-200 hover:border-teal-300 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center text-3xl group-hover:scale-105 transition shadow-2xs">
                      {rel.symbol}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-teal-800 transition">
                        {rel.titleUrdu}
                      </h3>
                      <p className="text-xs text-slate-500 font-sans">{rel.titleEn}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {rel.corePrinciplesUrdu[0]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-800">
                    <span>۷ دن کا پلان دیکھیں</span>
                    <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 3: DILEMMAS & REAL LIFE SITUATIONS */}
        {activeSection === 'dilemmas' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                گھریلو و معاشرتی سچویشنز — اصل فیصلے
              </h2>
              <p className="text-sm text-slate-600">
                مختلف حالات میں اپنے فیصلے آزمائیں اور دیکھیں کہ اس کے نفسیاتی اور خاندانی نتائج کیا ہوتے ہیں۔
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FAMILY_SITUATIONAL_DILEMMAS.map((dilemma) => (
                <div
                  key={dilemma.id}
                  onClick={() => setSelectedDilemma(dilemma)}
                  className="bg-white hover:bg-purple-50/40 rounded-3xl p-6 border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                        {dilemma.category}
                      </span>
                      <span className="text-xl">⚖️</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-purple-900 transition">
                      {dilemma.titleUrdu}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {dilemma.scenarioUrdu}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-800">
                    <span>اپنا فیصلہ منتخب کریں</span>
                    <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 4: SOCIETAL ISSUES BREAKDOWN */}
        {activeSection === 'societal' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                معاشرتی مسائل کا قرآنی و عملی علاج
              </h2>
              <p className="text-sm text-slate-600">
                مسئلہ کیا ہے؟ ہم نادانستہ کیسے حصہ لیتے ہیں؟ اور انفرادی و اجتماعی طور پر کیا بدل سکتے ہیں؟
              </p>
            </div>

            <div className="space-y-5">
              {SOCIETAL_16_PROBLEMS_MASTER_DATA.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                      {item.iconSymbol}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{item.titleUrdu}</h3>
                      <p className="text-xs text-slate-500 font-sans">{item.titleEn}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 space-y-1">
                      <div className="font-bold text-rose-900">ہم نادانستہ کیسے حصہ لیتے ہیں؟</div>
                      <p className="text-slate-700 leading-relaxed">{item.howWeContributeUrdu}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-1">
                      <div className="font-bold text-emerald-900">ہم خود کیا بدل سکتے ہیں؟</div>
                      <ul className="space-y-1 text-slate-700">
                        {item.whatWeCanChangePersonallyUrdu.map((ch, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 space-y-1">
                      <div className="font-bold text-blue-900">گھر اور محلے کا عملی قدم:</div>
                      <p className="text-slate-700 leading-relaxed">{item.startFromHomeUrdu}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 5: 7-DAY CHALLENGES */}
        {activeSection === 'challenges' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                عملی ۷ دن کے اخلاقی و خاندانی چیلنجز
              </h2>
              <p className="text-sm text-slate-600">
                روزانہ ایک چھوٹا ٹاسک مکمل کریں اور اپنی عادات میں دیرپا تبدیلی لائیں۔
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SEVEN_DAY_COMMUNITY_CHALLENGES.map((challenge) => {
                const completed = challengeProgress[challenge.id] || [];
                return (
                  <div key={challenge.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{challenge.symbol}</span>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                          {completed.length} / 7 دن مکمل
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-slate-900">
                        {challenge.titleUrdu}
                      </h3>
                      <p className="text-xs text-slate-600">{challenge.taglineUrdu}</p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {challenge.days.map((day) => {
                          const isDone = completed.includes(day.dayNumber);
                          return (
                            <div
                              key={day.dayNumber}
                              onClick={() => handleToggleChallengeDay(challenge.id, day.dayNumber)}
                              className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center justify-between gap-2 ${
                                isDone
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                              }`}
                            >
                              <span>دن {day.dayNumber}: {day.taskTitleUrdu}</span>
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                                isDone ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                              }`}>
                                {isDone && '✓'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 6: DAILY GOOD DEEDS TRACKER */}
        {activeSection === 'deeds' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  آج ایک اچھا کام — روزمرہ نیکیوں کا ٹریکر
                </h2>
                <p className="text-sm text-slate-600">
                  روزانہ چھوٹے لیکن بااثر اعمال انجام دیں اور مکمل ہونے پر ٹک کریں۔
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-rose-100 text-rose-900 rounded-full">
                {Object.values(completedDeeds).filter(Boolean).length} / {DAILY_PRACTICAL_GOOD_DEEDS.length} مکمل
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DAILY_PRACTICAL_GOOD_DEEDS.map((deed) => {
                const isDone = !!completedDeeds[deed.id];
                return (
                  <div
                    key={deed.id}
                    onClick={() => handleToggleDeed(deed)}
                    className={`p-5 rounded-3xl border transition-all cursor-pointer flex items-center justify-between gap-4 shadow-2xs ${
                      isDone
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shrink-0 ${
                          isDone ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {isDone ? '✓' : '✨'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {deed.categoryUrdu}
                          </span>
                          <span className="text-xs text-amber-700 font-bold">+{deed.points} XP</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-black mt-0.5">{deed.titleUrdu}</h4>
                        <p className="text-xs text-slate-600 mt-0.5">{deed.descUrdu}</p>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        isDone
                          ? 'bg-emerald-600 border-emerald-600 text-white font-bold'
                          : 'border-slate-300 text-transparent'
                      }`}
                    >
                      ✓
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </main>

      {/* MODALS */}
      {selectedTopic && (
        <FamilyTopicDetailModal
          topic={selectedTopic}
          language={language}
          userProfile={userProfile}
          onClose={() => setSelectedTopic(null)}
          onOpenAITeacherWithPrompt={onOpenAITeacherWithPrompt}
          onRewardPoints={onRewardPoints}
        />
      )}

      {selectedRelationship && (
        <RelationshipAdvisorModal
          relationship={selectedRelationship}
          language={language}
          userProfile={userProfile}
          onClose={() => setSelectedRelationship(null)}
          onOpenAITeacherWithPrompt={onOpenAITeacherWithPrompt}
          onRewardPoints={onRewardPoints}
        />
      )}

      {selectedDilemma && (
        <FamilySituationDilemmaModal
          dilemma={selectedDilemma}
          language={language}
          userProfile={userProfile}
          onClose={() => setSelectedDilemma(null)}
          onRewardPoints={onRewardPoints}
        />
      )}

      {showReflectionModal && (
        <FamilySelfReflectionModal
          language={language}
          userProfile={userProfile}
          onClose={() => setShowReflectionModal(false)}
          onRewardPoints={onRewardPoints}
        />
      )}

    </div>
  );
};
