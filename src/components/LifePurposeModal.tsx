import React, { useState, useEffect } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  CheckCircle2,
  User,
  Home,
  Users,
  Flag,
  Globe,
  MoonStar,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  Clock,
  Heart,
  HeartHandshake,
  Wrench,
  Compass,
  Award,
  ChevronDown,
  ChevronUp,
  Share2,
  Check
} from 'lucide-react';
import { Language, LifePurposeAreaId, LifePurposeTopic } from '../types';
import { LIFE_PURPOSE_AREAS } from '../data/lifePurposeData';
import { speakText, stopSpeaking, subscribeSpeechState, isTTSSupported } from '../utils/speech';
import { ReadAlongText } from './AudioSpeechControls';

interface LifePurposeModalProps {
  areaId: LifePurposeAreaId;
  language: Language;
  onClose: () => void;
  onSelectArea?: (areaId: LifePurposeAreaId) => void;
  onCompleteActionReward?: (areaId: LifePurposeAreaId, points: number, title: string) => void;
}

export const LifePurposeModal: React.FC<LifePurposeModalProps> = ({
  areaId,
  language,
  onClose,
  onSelectArea,
  onCompleteActionReward
}) => {
  const [activeAreaId, setActiveAreaId] = useState<LifePurposeAreaId>(areaId);
  const [activeTab, setActiveTab] = useState<'overview' | 'topics' | 'reflection' | 'youth'>('overview');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [completedActions, setCompletedActions] = useState<Record<string, boolean>>({});
  const [reflectionAnswers, setReflectionAnswers] = useState<Record<string, string>>({});
  const [actionDoneFeedback, setActionDoneFeedback] = useState<boolean>(false);

  // Sync active area when prop changes
  useEffect(() => {
    setActiveAreaId(areaId);
    setActiveTab('overview');
    setExpandedTopicId(null);
  }, [areaId]);

  // Subscribe to universal speech state
  useEffect(() => {
    const unsubscribe = subscribeSpeechState((state) => {
      if (state.isSpeaking) {
        setPlayingAudioId(state.currentId);
      } else {
        setPlayingAudioId(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleClose = () => {
    stopSpeaking();
    setPlayingAudioId(null);
    onClose();
  };

  // Keyboard shortcut (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Load completed actions from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('seekho_purpose_actions_completed');
      if (saved) {
        setCompletedActions(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Stop audio on unmount or area change
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, [activeAreaId]);

  const currentArea = LIFE_PURPOSE_AREAS[activeAreaId] || LIFE_PURPOSE_AREAS.self;
  const isActionCompleted = !!completedActions[currentArea.id];

  // Helper to get Lucide icon
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Flag': return <Flag className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'MoonStar': return <MoonStar className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  // Audio Play / Stop Handler
  const handleToggleAudio = (text: string, id: string) => {
    if (playingAudioId === id) {
      stopSpeaking();
      setPlayingAudioId(null);
    } else {
      stopSpeaking();
      setPlayingAudioId(id);
      speakText(text, {
        id,
        language: 'ur',
        onEnd: () => setPlayingAudioId(null),
        onError: () => setPlayingAudioId(null)
      });
    }
  };

  // Handle Action Completion
  const handleToggleCompleteAction = () => {
    const nextState = !isActionCompleted;
    const updated = { ...completedActions, [currentArea.id]: nextState };
    setCompletedActions(updated);
    try {
      localStorage.setItem('seekho_purpose_actions_completed', JSON.stringify(updated));
    } catch {
      // ignore
    }

    if (nextState) {
      setActionDoneFeedback(true);
      if (onCompleteActionReward) {
        onCompleteActionReward(currentArea.id, currentArea.todayAction.points, currentArea.todayAction.titleUrdu);
      }
      setTimeout(() => setActionDoneFeedback(false), 3000);
    }
  };

  // Theme border/colors
  const getThemeClasses = () => {
    switch (currentArea.themeColor) {
      case 'emerald':
        return {
          badge: 'bg-emerald-950 text-emerald-300 border-emerald-500/40',
          activeTab: 'bg-emerald-600 text-white shadow-md',
          accentBorder: 'border-emerald-500/40',
          accentBg: 'bg-emerald-500/10',
          iconBg: 'bg-emerald-900/60 text-emerald-300 border-emerald-500/50'
        };
      case 'teal':
        return {
          badge: 'bg-teal-950 text-teal-300 border-teal-500/40',
          activeTab: 'bg-teal-600 text-white shadow-md',
          accentBorder: 'border-teal-500/40',
          accentBg: 'bg-teal-500/10',
          iconBg: 'bg-teal-900/60 text-teal-300 border-teal-500/50'
        };
      case 'cyan':
        return {
          badge: 'bg-cyan-950 text-cyan-300 border-cyan-500/40',
          activeTab: 'bg-cyan-600 text-white shadow-md',
          accentBorder: 'border-cyan-500/40',
          accentBg: 'bg-cyan-500/10',
          iconBg: 'bg-cyan-900/60 text-cyan-300 border-cyan-500/50'
        };
      case 'indigo':
        return {
          badge: 'bg-indigo-950 text-indigo-300 border-indigo-500/40',
          activeTab: 'bg-indigo-600 text-white shadow-md',
          accentBorder: 'border-indigo-500/40',
          accentBg: 'bg-indigo-500/10',
          iconBg: 'bg-indigo-900/60 text-indigo-300 border-indigo-500/50'
        };
      case 'blue':
        return {
          badge: 'bg-blue-950 text-blue-300 border-blue-500/40',
          activeTab: 'bg-blue-600 text-white shadow-md',
          accentBorder: 'border-blue-500/40',
          accentBg: 'bg-blue-500/10',
          iconBg: 'bg-blue-900/60 text-blue-300 border-blue-500/50'
        };
      case 'amber':
        return {
          badge: 'bg-amber-950 text-amber-300 border-amber-500/40',
          activeTab: 'bg-amber-600 text-white shadow-md',
          accentBorder: 'border-amber-500/40',
          accentBg: 'bg-amber-500/10',
          iconBg: 'bg-amber-900/60 text-amber-300 border-amber-500/50'
        };
      default:
        return {
          badge: 'bg-emerald-950 text-emerald-300 border-emerald-500/40',
          activeTab: 'bg-emerald-600 text-white shadow-md',
          accentBorder: 'border-emerald-500/40',
          accentBg: 'bg-emerald-500/10',
          iconBg: 'bg-emerald-900/60 text-emerald-300 border-emerald-500/50'
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto" dir="rtl">
      <div 
        id="life-purpose-modal-container"
        className="bg-slate-900 border border-slate-700/80 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col text-slate-100 font-arabic animate-in fade-in zoom-in-95 duration-200"
      >
        
        {/* MODAL HEADER */}
        <div className="p-4 sm:p-6 bg-slate-950/90 border-b border-slate-800 flex items-start justify-between gap-3 relative shrink-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border shadow-inner shrink-0 ${theme.iconBg}`}>
              {getTopicIcon(currentArea.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-black px-2.5 py-0.5 rounded-full border ${theme.badge}`}>
                  {language === 'ur' ? 'مقصدِ زندگی گائیڈ' : 'Life Purpose Guide'}
                </span>
                <span className="text-xs text-slate-400">
                  {currentArea.todayAction.estimatedMinutes} {language === 'ur' ? 'منٹ کا سفر' : 'min journey'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mt-1 leading-tight">
                {language === 'ur' || language === 'dual' ? currentArea.titleUrdu : currentArea.titleEn}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 max-w-xl">
                {language === 'ur' || language === 'dual' ? currentArea.subtitleUrdu : currentArea.subtitleEn}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Master Audio Button */}
            <button
              id="btn-master-purpose-audio"
              onClick={() => handleToggleAudio(
                `${currentArea.titleUrdu}۔ ${currentArea.introUrdu}۔ آج کا عملی قدم: ${currentArea.todayAction.titleUrdu}۔ ${currentArea.todayAction.descriptionUrdu}`,
                `master-purpose-${currentArea.id}`
              )}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-black transition-all border ${
                playingAudioId === `master-purpose-${currentArea.id}`
                  ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
              title={playingAudioId === `master-purpose-${currentArea.id}` ? 'آواز روکیں' : 'مکمل رہنمائی سنیں'}
            >
              {playingAudioId === `master-purpose-${currentArea.id}` ? (
                <>
                  <VolumeX className="w-4 h-4 text-slate-950" />
                  <span className="hidden sm:inline">روکیں</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline">آواز سنیں</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              id="btn-close-purpose-modal"
              onClick={handleClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer"
              aria-label="بند کریں"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6 AREA QUICK SWITCHER PILLS (Easy Navigation across 6 Spheres) */}
        <div className="px-4 py-2.5 bg-slate-950/60 border-b border-slate-800/80 overflow-x-auto no-scrollbar flex items-center gap-2 shrink-0">
          {(Object.keys(LIFE_PURPOSE_AREAS) as LifePurposeAreaId[]).map((key) => {
            const area = LIFE_PURPOSE_AREAS[key];
            const isCurrent = key === activeAreaId;
            return (
              <button
                key={key}
                id={`btn-nav-purpose-${key}`}
                onClick={() => {
                  stopSpeaking();
                  setPlayingAudioId(null);
                  setActiveAreaId(key);
                  if (onSelectArea) onSelectArea(key);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                  isCurrent
                    ? 'bg-slate-800 text-white border-emerald-400 shadow-xs'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {getTopicIcon(area.iconName)}
                <span>{area.titleUrdu}</span>
                {completedActions[key] && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* SECTION TABS */}
        <div className="px-4 sm:px-6 pt-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            id="tab-purpose-overview"
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-black transition border-b-2 ${
              activeTab === 'overview'
                ? 'border-emerald-400 text-emerald-300 bg-slate-800/80'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            🌟 تعارف و آج کا عمل
          </button>

          <button
            id="tab-purpose-topics"
            onClick={() => setActiveTab('topics')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-black transition border-b-2 flex items-center gap-1.5 ${
              activeTab === 'topics'
                ? 'border-emerald-400 text-emerald-300 bg-slate-800/80'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📖 اسباق و رہنما اصول
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300">
              {currentArea.topics.length}
            </span>
          </button>

          <button
            id="tab-purpose-reflection"
            onClick={() => setActiveTab('reflection')}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-black transition border-b-2 ${
              activeTab === 'reflection'
                ? 'border-emerald-400 text-emerald-300 bg-slate-800/80'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            🧠 خود احتسابی و جائزہ
          </button>

          {currentArea.youthFocusSection && (
            <button
              id="tab-purpose-youth"
              onClick={() => setActiveTab('youth')}
              className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-black transition border-b-2 flex items-center gap-1.5 ${
                activeTab === 'youth'
                  ? 'border-amber-400 text-amber-300 bg-slate-800/80'
                  : 'border-transparent text-slate-400 hover:text-amber-200'
              }`}
            >
              💡 نوجوانوں کے لیے خصوصی گائیڈ
            </button>
          )}
        </div>

        {/* MODAL BODY CONTENT */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-100">

          {/* TAB 1: OVERVIEW & TODAY'S ACTION */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Introduction Card */}
              <div className="bg-slate-800/80 rounded-2xl p-4 sm:p-5 border border-slate-700/80 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-black text-emerald-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-400" />
                    <span>بنیادی پیغام و اہمیت</span>
                  </h3>
                  <button
                    onClick={() => handleToggleAudio(
                      currentArea.introUrdu,
                      `intro-audio-${currentArea.id}`
                    )}
                    className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
                    title="پیغام سنیں"
                  >
                    {playingAudioId === `intro-audio-${currentArea.id}` ? (
                      <VolumeX className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                  <ReadAlongText id={`intro-audio-${currentArea.id}`} text={currentArea.introUrdu} />
                </p>
              </div>

              {/* Today's Practical Action (آج کا عملی قدم) */}
              <div className="bg-gradient-to-br from-slate-800/90 via-slate-800/70 to-emerald-950/40 rounded-3xl p-5 sm:p-6 border-2 border-emerald-500/40 shadow-lg space-y-4">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-xs font-bold text-emerald-300 block">آج کیا کریں؟</span>
                      <h4 className="text-lg sm:text-xl font-black text-white">
                        {currentArea.todayAction.titleUrdu}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                      +{currentArea.todayAction.points} پوائنٹس
                    </span>
                    <button
                      onClick={() => handleToggleAudio(
                        `آج کا عمل: ${currentArea.todayAction.titleUrdu}۔ ${currentArea.todayAction.descriptionUrdu}`,
                        `action-audio-${currentArea.id}`
                      )}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 cursor-pointer"
                      title="آواز سنیں"
                    >
                      {playingAudioId === `action-audio-${currentArea.id}` ? (
                        <VolumeX className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-semibold">
                  <ReadAlongText id={`action-audio-${currentArea.id}`} text={currentArea.todayAction.descriptionUrdu} />
                </p>

                {/* Step by Step list */}
                <div className="space-y-2 pt-2 border-t border-slate-700/60">
                  <span className="text-xs font-bold text-slate-400 block">عملی مراحل (Steps):</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentArea.todayAction.stepsUrdu.map((step, idx) => (
                      <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm">
                        <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-slate-200 leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mark as Complete Button */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-xs text-slate-300 italic">
                    💡 {currentArea.todayAction.reflectionPromptUrdu}
                  </p>

                  <button
                    id="btn-complete-purpose-action"
                    onClick={handleToggleCompleteAction}
                    className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                      isActionCompleted
                        ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                        : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-95'
                    }`}
                  >
                    {isActionCompleted ? (
                      <>
                        <Check className="w-5 h-5 text-white" />
                        <span>ماشاءاللہ! آج کا عمل مکمل ہو گیا</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>یہ عمل مکمل کریں اور پوائنٹس حاصل کریں</span>
                      </>
                    )}
                  </button>
                </div>

                {actionDoneFeedback && (
                  <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-300 text-xs sm:text-sm font-bold text-center animate-in fade-in">
                    🎉 مبارک ہو! آپ نے اپنے مقصد کا ایک اہم قدم کامیابی سے اٹھایا۔ +{currentArea.todayAction.points} پوائنٹس شامل ہو گئے۔
                  </div>
                )}
              </div>

              {/* Quick Summary of Topics Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-black text-slate-200">
                    اس مقصد کے اہم اسباق ({currentArea.topics.length}):
                  </h4>
                  <button
                    onClick={() => setActiveTab('topics')}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                  >
                    <span>تمام اسباق پڑھیں</span>
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentArea.topics.map((topic) => (
                    <div
                      key={topic.id}
                      onClick={() => {
                        setActiveTab('topics');
                        setExpandedTopicId(topic.id);
                      }}
                      className="bg-slate-800/80 hover:bg-slate-800 p-4 rounded-2xl border border-slate-700/80 hover:border-emerald-500/40 transition cursor-pointer flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-xl bg-slate-900 text-emerald-300 border border-slate-700 shrink-0 group-hover:scale-105 transition">
                        {getTopicIcon(topic.iconName)}
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-sm font-black text-white group-hover:text-emerald-300 transition">
                          {topic.titleUrdu}
                        </h5>
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {topic.summaryUrdu}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: CORE TOPICS & LESSONS (FULL GUIDES) */}
          {activeTab === 'topics' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="text-xs sm:text-sm text-slate-300 bg-slate-800/60 p-3 rounded-xl border border-slate-700">
                💡 ہر عنوان پر کلک کر کے تفصیلی قرآنی حکمت، حدیث اور آج کے دور کے عملی طریقے ملاحظہ فرمائیں۔
              </div>

              {currentArea.topics.map((topic, index) => {
                const isExpanded = expandedTopicId === topic.id;
                return (
                  <div
                    key={topic.id}
                    id={`topic-card-${topic.id}`}
                    className={`bg-slate-800/90 rounded-2xl border transition-all overflow-hidden ${
                      isExpanded ? 'border-emerald-500/60 shadow-md' : 'border-slate-700/80 hover:border-slate-600'
                    }`}
                  >
                    {/* Header Row */}
                    <div
                      onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                      className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none bg-slate-850"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-300 flex items-center justify-center border border-slate-700 shrink-0">
                          {getTopicIcon(topic.iconName)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">
                              سبق {index + 1}
                            </span>
                          </div>
                          <h4 className="text-base sm:text-lg font-black text-white mt-0.5">
                            {topic.titleUrdu}
                          </h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleAudio(
                              `${topic.titleUrdu}۔ ${topic.summaryUrdu}۔ ${topic.quranSunnahWisdomUrdu ? topic.quranSunnahWisdomUrdu.translationUrdu : ''}۔ ${topic.audioScriptUrdu}`,
                              `topic-audio-${topic.id}`
                            );
                          }}
                          className={`p-2 rounded-xl border transition ${
                            playingAudioId === `topic-audio-${topic.id}`
                              ? 'bg-amber-500 text-slate-950 border-amber-400'
                              : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                          }`}
                          title="سبق سنیں"
                        >
                          {playingAudioId === `topic-audio-${topic.id}` ? (
                            <VolumeX className="w-4 h-4" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-emerald-400" />
                          )}
                        </button>
                        <button className="p-1 text-slate-400">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Summary (Always Visible) */}
                    <div className="px-4 pb-3 sm:px-5 text-xs sm:text-sm text-slate-300 border-b border-slate-700/50">
                      <ReadAlongText id={`topic-audio-${topic.id}`} text={topic.summaryUrdu} />
                    </div>

                    {/* Expanded Content: Quran/Sunnah + Practical Steps */}
                    {isExpanded && (
                      <div className="p-4 sm:p-5 space-y-4 bg-slate-900/60 border-t border-slate-800">
                        
                        {/* Quran & Sunnah Wisdom Card */}
                        {topic.quranSunnahWisdomUrdu && (
                          <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 p-4 rounded-xl border border-amber-400/30 space-y-2">
                            <div className="flex items-center justify-between gap-2 border-b border-amber-400/20 pb-1.5 text-xs">
                              <span className="font-bold text-amber-300 flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                                <span>قرآن و سنت کی روشنی</span>
                              </span>
                              <span className="text-amber-200/80 font-bold px-2 py-0.5 rounded-md bg-amber-950/80 border border-amber-400/20 text-[11px]">
                                {topic.quranSunnahWisdomUrdu.reference}
                              </span>
                            </div>

                            {topic.quranSunnahWisdomUrdu.arabicText && (
                              <p className="text-base sm:text-lg font-black text-amber-200 text-center py-1 font-arabic" dir="rtl">
                                ”{topic.quranSunnahWisdomUrdu.arabicText}“
                              </p>
                            )}

                            <p className="text-xs sm:text-sm font-semibold text-slate-100 text-center" dir="rtl">
                              ”{topic.quranSunnahWisdomUrdu.translationUrdu}“
                            </p>

                            <div className="pt-2 border-t border-slate-700/50 text-xs text-emerald-300">
                              <strong className="text-emerald-400">عملی نتیجہ: </strong>
                              {topic.quranSunnahWisdomUrdu.practicalTakeawayUrdu}
                            </div>
                          </div>
                        )}

                        {/* Modern Practical Steps */}
                        <div className="space-y-2">
                          <h5 className="text-xs sm:text-sm font-black text-slate-200 flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span>آج کے دور میں عملی طریقہ (How to Apply Today):</span>
                          </h5>
                          <div className="space-y-2">
                            {topic.modernPracticalStepsUrdu.map((step, idx) => (
                              <div key={idx} className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex items-start gap-2.5 text-xs sm:text-sm">
                                <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                                  {idx + 1}
                                </span>
                                <span className="text-slate-200 leading-snug">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: REFLECTION & SELF-ACCOUNTING (محاسبہ) */}
          {activeTab === 'reflection' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700 space-y-2">
                <h3 className="text-base sm:text-lg font-black text-emerald-300 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-400" />
                  <span>روزانہ کا ذاتی جائزہ و سوچ بچار</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  اپنے دن کے اختتام پر ان سوالات پر چند لمحے غور کریں تاکہ آپ کو اندازہ ہو سکے کہ آپ نے اپنی زندگی کے اس مقصد میں کتنی پیش رفت کی۔
                </p>
              </div>

              <div className="space-y-4">
                {currentArea.reflectionQuestions.map((q, idx) => (
                  <div key={idx} className="bg-slate-850 p-4 sm:p-5 rounded-2xl border border-slate-700 space-y-3">
                    <span className="text-xs font-bold text-emerald-400 block">سوال {idx + 1}:</span>
                    <h4 className="text-sm sm:text-base font-black text-white leading-relaxed">
                      {q.questionUrdu}
                    </h4>

                    <div className="space-y-2">
                      <label className="text-xs text-slate-400 block">آپ کا ذاتی احساس / جواب:</label>
                      <textarea
                        rows={2}
                        value={reflectionAnswers[`${currentArea.id}-${idx}`] || ''}
                        onChange={(e) => setReflectionAnswers({
                          ...reflectionAnswers,
                          [`${currentArea.id}-${idx}`]: e.target.value
                        })}
                        placeholder="یہاں اپنے خیالات مختصر لکھیں یا دل میں دہرائیں..."
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-emerald-400"
                      />
                    </div>

                    <p className="text-xs text-emerald-300/90 italic bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/20">
                      💡 {q.encouragingNoteUrdu}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: YOUTH CONSTRUCTIVE FOCUS (نوجوانوں کی رہنمائی) */}
          {activeTab === 'youth' && currentArea.youthFocusSection && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-900 p-5 rounded-2xl border border-amber-500/30 space-y-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-400/30">
                  تحقیقی و تعمیری جائزہ
                </span>
                <h3 className="text-lg sm:text-xl font-black text-amber-200 leading-snug">
                  {currentArea.youthFocusSection.questionUrdu}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {currentArea.youthFocusSection.explanationUrdu}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-black text-slate-200">
                  ۵ بنیادی وجوہات اور ان کا سائنسی و اخلاقی حل:
                </h4>
                <div className="space-y-3">
                  {currentArea.youthFocusSection.keyFactorsUrdu.map((item, idx) => (
                    <div key={idx} className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/80 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-950 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold text-xs shrink-0">
                          {idx + 1}
                        </span>
                        <h5 className="text-sm font-black text-amber-300">{item.factor}</h5>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed ps-8 font-medium">
                        {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center">
                <p className="text-xs sm:text-sm font-black text-emerald-300 leading-relaxed">
                  {currentArea.youthFocusSection.mindsetShiftUrdu}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* MODAL FOOTER */}
        <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>سیکھو، عمل کرو اور دوسروں کے کام آؤ</span>
          </div>

          <button
            id="btn-footer-close-purpose"
            onClick={handleClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs sm:text-sm font-bold transition cursor-pointer"
          >
            بند کریں
          </button>
        </div>

      </div>
    </div>
  );
};
