import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  CheckCircle2, 
  User, 
  Lightbulb, 
  BookOpen, 
  Award, 
  HelpCircle,
  Clock,
  ShieldCheck,
  HeartHandshake,
  Calendar,
  Smile,
  Palette,
  Cpu,
  TrendingUp,
  Users,
  Trash2,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Check,
  Star,
  Compass,
  Sprout
} from 'lucide-react';
import { ChatMessage, Course, Language, Lesson, UserProfile, MentorChallenge, MentorChallengeType } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';
import { generateAITeacherResponse } from '../utils/aiTeacherEngine';
import { MENTOR_CHALLENGES, getRecommendedChallengesForUser } from '../data/mentorChallengesData';
import { AudioReaderButton, VoiceInputButton } from './AudioSpeechControls';
import { speakText, stopSpeaking } from '../utils/speech';

interface AITeacherViewProps {
  language: Language;
  userProfile: UserProfile;
  initialPrompt?: string;
  onNavigateToSkills: () => void;
  currentCourse?: Course | null;
  currentLesson?: Lesson | null;
  onUpdateProfile?: (updated: Partial<UserProfile>) => void;
  onOpenIslamicModal?: (lessonIndex?: number) => void;
  onSelectCourse?: (course: Course) => void;
  onOpenKnowledgeLibrary?: () => void;
}

export const AITeacherView: React.FC<AITeacherViewProps> = ({
  language,
  userProfile,
  initialPrompt,
  onNavigateToSkills,
  currentCourse,
  currentLesson,
  onUpdateProfile,
  onOpenIslamicModal,
  onSelectCourse,
  onOpenKnowledgeLibrary,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [inputMessage, setInputMessage] = useState(initialPrompt || '');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeakingId, setIsSpeakingId] = useState<string | null>(null);
  const [activeChallengeType, setActiveChallengeType] = useState<MentorChallengeType | null>(null);
  const [showChallengeDeck, setShowChallengeDeck] = useState(false);
  const [completedChallengeIds, setCompletedChallengeIds] = useState<string[]>(
    userProfile.completedGrowthTaskIds || []
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isUrdu = language === 'ur';
  const isDual = language === 'dual';
  const ageLabel = userProfile.ageGroup ? `${userProfile.ageGroup} ${isUrdu || isDual ? 'سال' : 'yrs'}` : (isUrdu || isDual ? 'تمام عمر' : 'All ages');
  const activeCourseName = currentCourse 
    ? (isUrdu ? currentCourse.titleUrdu : isDual ? `${currentCourse.titleUrdu} (${currentCourse.titleEn})` : currentCourse.titleEn)
    : (userProfile.interests && userProfile.interests.length > 0 ? userProfile.interests[0] : (isUrdu || isDual ? 'عملی ہنر مندی (Practical Skills)' : 'Practical Skills'));

  const recommendedChallenges = getRecommendedChallengesForUser(userProfile, language);

  const initialWelcomeUrdu = `السلام علیکم و رحمتہ اللہ، ${userProfile.name || 'محترم ساتھی'}!

میں **"استاد سیکھو"** ہوں—آپ کا ذاتی زندگی اور ہنر کا مشیر و رہنما (Personal Life Mentor)۔ 

🌱 **ہمارا منشور:**
**سیکھیں → مشق کریں → خود کو سنواریں → خاندان اور برادری کی خدمت کریں**

💡 **آپ کا ذاتی پس منظر:**
عمر: **${ageLabel}** • پیشۂ/تعلیم: **${userProfile.currentOccupation || 'طالب علم / متلاشی'}** • فعال موضوع: **${activeCourseName}**

جب بھی آپ پوچھیں گے **"اب مجھے کیا کرنا چاہیے؟"**، میں آپ کے ہنر، روزانہ مشن، ذاتی ترقی، قرآنی و نبوی رہنمائی اور اخلاق کو جوڑ کر بالکل جامع ۶ نکاتی لائحہ عمل دوں گا۔`;

  const initialWelcomeDual = `السلام علیکم و رحمتہ اللہ، ${userProfile.name || 'محترم ساتھی'}!

میں **"استاد سیکھو"** ہوں—آپ کا ذاتی زندگی اور ہنر کا مشیر و رہنما (Personal Life Mentor)۔ 

🌱 **ہمارا منشور (Our Vision):**
**سیکھیں → مشق کریں → خود کو سنواریں → خاندان اور برادری کی خدمت کریں**
*(Learn → Practice → Improve Yourself → Uplift Family & Community)*

💡 **آپ کا ذاتی پس منظر:**
عمر: **${ageLabel}** • پیشۂ/تعلیم: **${userProfile.currentOccupation || 'طالب علم / متلاشی'}** • فعال موضوع: **${activeCourseName}**

جب بھی آپ پوچھیں گے **"اب مجھے کیا کرنا چاہیے؟"**، میں آپ کے ہنر، روزانہ مشن، ذاتی ترقی، قرآنی و نبوی رہنمائی اور اخلاق کو جوڑ کر جامع ۶ نکاتی لائحہ عمل دوں گا۔

---

**English Summary & Next Steps:**
• **Role:** Teacher Seekho provides personalized guidance on skills, halal livelihood, decision making, and community upliftment.
• **How to use:** Ask any life or learning question, or choose from the quick prompts below.`;

  const initialWelcomeEn = `Hello and Welcome, ${userProfile.name || 'Learner'}!

I am **"Teacher Seekho"**—your personalized Life & Learning Mentor.

🌱 **Our Vision:**
**Learn → Practice → Improve Yourself → Uplift Family & Community**

💡 **Your Active Profile Context:**
Age Group: **${ageLabel}** • Role: **${userProfile.currentOccupation || 'Learner'}** • Focus: **${activeCourseName}**

Whenever you ask **"What should I do now?"**, I will connect your skills, daily mission, personal growth, authentic Islamic guidance, and character into a clear 6-point actionable plan.`;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      text: isDual ? initialWelcomeDual : isUrdu ? initialWelcomeUrdu : initialWelcomeEn,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: isDual ? [
        'مجھے آگے کیا کرنا چاہیے؟ (What should I do next?)',
        'آج کا مشن اور ہنر (Today’s Mission & Skill)',
        'حلال روزگار اور برکت (Halal Livelihood)',
        'غصہ یا دباؤ آئے تو سنت کے مطابق کیسے فیصلہ کریں؟ (Wise Decision Under Pressure)',
        'مجھے سمجھ نہیں آئی، آسان الفاظ میں سمجھائیں (Explain Simpler)',
      ] : isUrdu ? [
        'مجھے آگے کیا کرنا چاہیے؟',
        'آج کا مشن اور ہنر',
        'حلال روزگار اور خدمت کا راستہ',
        'غصہ یا دباؤ آئے تو سنت کے مطابق کیسے فیصلہ کریں؟',
        'مجھے سمجھ نہیں آئی، آسان الفاظ میں سمجھائیں۔',
      ] : [
        'What should I do next?',
        'Show today’s mission & skill',
        'Halal livelihood & service pathway',
        'How to make wise decisions under pressure?',
        'I did not understand, please explain simpler.',
      ],
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const lastSentPromptRef = useRef<string | null>(null);

  useEffect(() => {
    if (initialPrompt && initialPrompt.trim() && lastSentPromptRef.current !== initialPrompt) {
      lastSentPromptRef.current = initialPrompt;
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // First attempt server endpoint with full context
      const res = await fetch('/api/ai-teacher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          userProfile,
          language,
          currentCourse,
          currentLesson,
          chatHistory: messages.slice(-6).map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      if (!res.ok) {
        throw new Error('Server unreachable or API fallback needed');
      }

      const data = await res.json();
      
      const fallbackResult = !data.reply
        ? generateAITeacherResponse({
            message: text,
            userProfile,
            language,
            currentCourse,
            currentLesson,
            chatHistory: [...messages, userMsg],
          })
        : null;

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: data.reply || (fallbackResult ? fallbackResult.reply : ''),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: data.suggestions && data.suggestions.length > 0
          ? data.suggestions
          : (fallbackResult ? fallbackResult.suggestions : []),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      // Local zero-dependency intelligent engine execution
      const responseResult = generateAITeacherResponse({
        message: text,
        userProfile,
        language,
        currentCourse,
        currentLesson,
        chatHistory: [...messages, userMsg],
      });

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: responseResult.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: responseResult.suggestions,
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = (msgId: string, text: string) => {
    const audioId = `ai-teacher-msg-${msgId}`;
    if (isSpeakingId === msgId) {
      stopSpeaking();
      setIsSpeakingId(null);
    } else {
      stopSpeaking();
      setIsSpeakingId(msgId);
      speakText(text, {
        id: audioId,
        language: language === 'ur' ? 'ur' : 'en',
        onEnd: () => setIsSpeakingId(null),
        onError: () => setIsSpeakingId(null),
      });
    }
  };

  const handleCompleteChallenge = (challenge: MentorChallenge) => {
    if (completedChallengeIds.includes(challenge.id)) return;

    const updated = [...completedChallengeIds, challenge.id];
    setCompletedChallengeIds(updated);

    if (onUpdateProfile) {
      onUpdateProfile({
        points: (userProfile.points || 0) + challenge.points,
        streakDays: (userProfile.streakDays || 0) + 1,
        completedGrowthTaskIds: updated,
      });
    }

    const congratulatoryPrompt = isUrdu
      ? `ماشاءاللہ! میں نے چیلنج "${challenge.titleUrdu}" مکمل کر لیا ہے۔ مجھے اگلا مفید مشورہ دیں۔`
      : `Masha’Allah! I have completed the challenge "${challenge.titleEn}". Please guide my next step.`;
    handleSendMessage(congratulatoryPrompt);
  };

  const renderChallengeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-4 h-4 text-amber-600" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-emerald-600" />;
      case 'Smile': return <Smile className="w-4 h-4 text-amber-500" />;
      case 'Calendar': return <Calendar className="w-4 h-4 text-teal-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4 text-rose-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-blue-600" />;
      case 'Palette': return <Palette className="w-4 h-4 text-purple-600" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-emerald-600" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-cyan-600" />;
      case 'Users': return <Users className="w-4 h-4 text-indigo-600" />;
      case 'Trash2': return <Trash2 className="w-4 h-4 text-emerald-700" />;
      default: return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-w-4xl mx-auto px-2 sm:px-4 pb-20">
      {/* AI Teacher Header with Active Learner Context Bar */}
      <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-xs mb-2 space-y-2.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black text-slate-900">
                  {isUrdu ? 'استاد سیکھو — ذاتی مشیر' : 'Teacher Seekho (Life & Learning Mentor)'}
                </h1>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-xs text-slate-500">
                {isUrdu ? 'ہنر، کردار، قرآنی رہنمائی اور روزمرہ چیلنجز کا جامع اور ذاتی نظام' : 'Intelligently connecting skills, character, Quran/Hadith & daily challenges'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setShowChallengeDeck(!showChallengeDeck)}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition flex items-center gap-1.5 border ${
                showChallengeDeck 
                  ? 'bg-amber-500 text-white border-amber-600 shadow-xs' 
                  : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
              }`}
              title={isUrdu ? 'چیلنجز کا انتخاب' : 'Explore Challenges'}
            >
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">{isUrdu ? 'چیلنج سسٹم' : 'Challenges'}</span>
              {showChallengeDeck ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => {
                setMessages([messages[0]]);
                if (isSpeakingId) {
                  stopSpeaking();
                  setIsSpeakingId(null);
                }
              }}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              title={isUrdu ? 'نئی گفتگو شروع کریں' : 'Reset Conversation'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Personalized Learner Context Badges */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100 text-[11px] text-slate-600 font-medium">
          <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 font-bold border border-amber-200 flex items-center gap-1">
            <User className="w-3 h-3 text-amber-700" />
            <span>{isUrdu ? 'عمر:' : 'Age:'} {ageLabel}</span>
          </span>

          <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-900 font-bold border border-emerald-200 flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-emerald-700" />
            <span>{isUrdu ? 'ہنر:' : 'Skill:'} {activeCourseName}</span>
          </span>

          <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-900 font-bold border border-sky-200 flex items-center gap-1">
            <Clock className="w-3 h-3 text-sky-700" />
            <span>{isUrdu ? 'روزانہ وقت:' : 'Daily Time:'} {userProfile.growthDailyTimePreference || userProfile.timePerDay || '15m'}</span>
          </span>

          <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-900 font-bold border border-purple-200 flex items-center gap-1">
            <Star className="w-3 h-3 text-purple-700" />
            <span>{userProfile.points || 0} {isUrdu ? 'پوائنٹس' : 'pts'}</span>
          </span>
        </div>

        {/* Expandable Mentor Challenges Deck */}
        {showChallengeDeck && (
          <div className="pt-2 border-t border-slate-100 space-y-2 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-slate-800 flex items-center gap-1.5 font-arabic">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{isUrdu ? 'منتخب چیلنجز (آج کے لیے موزوں ترین):' : 'Mentor Challenges (Tailored for you):'}</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {completedChallengeIds.length} {isUrdu ? 'مکمل شدہ' : 'completed'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {recommendedChallenges.map((ch) => {
                const isDone = completedChallengeIds.includes(ch.id);

                return (
                  <div
                    key={ch.id}
                    className={`p-2.5 rounded-xl border transition flex flex-col justify-between text-start ${
                      isDone 
                        ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' 
                        : 'bg-slate-50 hover:bg-amber-50/60 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                          {renderChallengeIcon(ch.iconName)}
                          <span>{isUrdu ? ch.typeUrdu : ch.typeEn}</span>
                        </span>

                        <span className="text-[10px] font-black text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full">
                          +{ch.points} {isUrdu ? 'پوائنٹس' : 'pts'}
                        </span>
                      </div>

                      <h4 className="text-xs font-black text-slate-900 leading-tight mb-1 font-arabic">
                        {isUrdu ? ch.titleUrdu : ch.titleEn}
                      </h4>

                      <p className="text-[11px] text-slate-600 leading-snug line-clamp-2 font-arabic">
                        {isUrdu ? ch.descriptionUrdu : ch.descriptionEn}
                      </p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between gap-1.5">
                      <button
                        onClick={() => handleSendMessage(
                          isUrdu 
                            ? `استاد جی! مجھے اس چیلنج پر رہنمائی دیں: "${ch.titleUrdu}" (${ch.typeUrdu})` 
                            : `Teacher, please guide me on this challenge: "${ch.titleEn}" (${ch.typeEn})`
                        )}
                        className="text-[10px] font-bold text-slate-700 hover:text-emerald-800 bg-white border border-slate-200 px-2 py-1 rounded-lg transition flex items-center gap-1 font-arabic"
                      >
                        <Compass className="w-3 h-3 text-amber-600" />
                        <span>{isUrdu ? 'رہنمائی لیں' : 'Ask Mentor'}</span>
                      </button>

                      {isDone ? (
                        <span className="text-[10px] font-bold text-emerald-800 flex items-center gap-1 bg-emerald-100 px-2 py-1 rounded-lg">
                          <Check className="w-3 h-3 text-emerald-700" />
                          <span>{isUrdu ? 'مکمل ہو گیا' : 'Done'}</span>
                        </span>
                      ) : (
                        <button
                          onClick={() => handleCompleteChallenge(ch)}
                          className="text-[10px] font-bold text-white bg-emerald-700 hover:bg-emerald-800 px-2 py-1 rounded-lg transition flex items-center gap-1 font-arabic"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isUrdu ? 'مکمل کیا!' : 'Mark Done'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Chat Messages Stream */}
      <div className="flex-1 overflow-y-auto space-y-4 p-2 sm:p-4 bg-slate-50/80 rounded-3xl border border-slate-200/80">
        {messages.map((msg) => {
          const isAssistant = msg.role === 'assistant';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 sm:gap-3 ${
                isAssistant ? '' : 'flex-row-reverse'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-white shrink-0 text-xs font-bold ${
                  isAssistant
                    ? 'bg-amber-600 shadow-xs'
                    : 'bg-emerald-700 shadow-xs'
                }`}
              >
                {isAssistant ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                  isAssistant
                    ? 'bg-white border border-slate-200 text-slate-900 rounded-tl-xs'
                    : 'bg-emerald-800 text-white rounded-tr-xs'
                }`}
              >
                <div className="space-y-2">
                  {msg.text.includes('---') ? (
                    (() => {
                      const parts = msg.text.split('---');
                      const urduPart = parts[0].trim();
                      const enPart = parts.slice(1).join('---').trim();
                      return (
                        <>
                          <div className="whitespace-pre-line font-arabic text-[16px] sm:text-[17px] leading-[1.9] text-slate-900">
                            {urduPart}
                          </div>
                          {enPart && (
                            <div className="mt-2.5 p-3 rounded-xl bg-slate-50/90 border border-slate-200/90 text-left dir-ltr text-xs sm:text-[13px] text-slate-700 leading-relaxed font-sans">
                              <div className="whitespace-pre-line">
                                {enPart}
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })()
                  ) : (
                    <div className="whitespace-pre-line font-arabic text-[15.5px] sm:text-[16.5px] leading-[1.85]">
                      {msg.text}
                    </div>
                  )}
                </div>

                {/* Audio readout & timestamp footer */}
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100/80 text-[10px] text-slate-400">
                  <span>{msg.timestamp}</span>

                  {isAssistant && (
                    <AudioReaderButton
                      id={`ai-msg-tts-${msg.id}`}
                      text={msg.text}
                      language={language}
                      variant="inline"
                      size="sm"
                      showLabel={true}
                      labelUr="سنیں"
                      labelEn="Listen"
                    />
                  )}
                </div>

                {/* Suggestion Chips */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-slate-100 space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-600 flex items-center gap-1 font-arabic">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      <span>{isUrdu ? 'فوری رہنمائی اور اگلے اقدامات:' : 'Next Action Options:'}</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.suggestions.map((sug, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if ((sug.includes('علم کا خزانہ') || sug.includes('Knowledge Library')) && onOpenKnowledgeLibrary) {
                              onOpenKnowledgeLibrary();
                            } else {
                              handleSendMessage(sug);
                            }
                          }}
                          className="text-[11px] text-start bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 border border-slate-200 text-slate-800 px-2.5 py-1 rounded-xl transition font-arabic"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]" />
              <span className="font-medium text-slate-700 font-arabic">
                {isUrdu ? 'استاد سیکھو ذاتی لائحہ عمل تیار کر رہے ہیں...' : 'Teacher Seekho is drafting your personalized guidance...'}
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Action Mentorship Bar */}
      <div className="flex items-center gap-2 py-1.5 px-1 overflow-x-auto text-[11px] scrollbar-none">
        {/* Core Button 1: "اب مجھے کیا کرنا چاہیے؟" */}
        <button
          type="button"
          onClick={() => handleSendMessage(isUrdu ? 'اب مجھے کیا کرنا چاہیے؟' : 'What should I do now?')}
          className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black transition flex items-center gap-1.5 shrink-0 shadow-xs font-arabic"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{isUrdu ? '🧭 اب مجھے کیا کرنا چاہیے؟' : '🧭 What should I do now?'}</span>
        </button>

        {/* Core Button 2: "آج کا چیلنج" */}
        <button
          type="button"
          onClick={() => handleSendMessage(isUrdu ? 'مجھے آج کا چیلنج بتائیں' : 'Show me today’s challenge')}
          className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 font-bold transition flex items-center gap-1.5 shrink-0 font-arabic"
        >
          <Award className="w-3.5 h-3.5 text-amber-700" />
          <span>{isUrdu ? '🏆 آج کا چیلنج' : '🏆 Today\'s Challenge'}</span>
        </button>

        {/* Core Button 3: "مجھے سمجھ نہیں آئی" */}
        <button
          type="button"
          onClick={() => handleSendMessage(isUrdu ? 'مجھے سمجھ نہیں آئی، آسان الفاظ میں دوبارہ سمجھائیں۔' : 'I did not understand, please explain in simpler terms.')}
          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold transition flex items-center gap-1.5 shrink-0 font-arabic"
        >
          <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
          <span>{isUrdu ? '💡 مجھے سمجھ نہیں آئی' : '💡 I didn\'t understand'}</span>
        </button>

        {/* Core Button 4: "میں کہاں مزید مشق کروں؟" */}
        <button
          type="button"
          onClick={() => handleSendMessage(isUrdu ? 'میں کہاں کمزور ہوں اور کہاں مزید مشق کروں؟' : 'Where can I practice more?')}
          className="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-950 border border-purple-200 font-bold transition flex items-center gap-1.5 shrink-0 font-arabic"
        >
          <TrendingUp className="w-3.5 h-3.5 text-purple-700" />
          <span>{isUrdu ? '📈 مزید مشق کہاں کروں؟' : '📈 Where to Practice?'}</span>
        </button>

        {/* Core Button 5: "سوچیں اور محفوظ فیصلہ کریں" */}
        <button
          type="button"
          onClick={() => handleSendMessage(isUrdu ? 'سوچیں اور محفوظ فیصلہ کریں: کسی بھی کشمکش، غصے یا دباؤ میں 5-Step طریقہ کار کے تحت رہنمائی فرمائیں۔' : 'Think Before You Act: Guide me using the 5-step decision framework during pressure or conflict.')}
          className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-950 border border-indigo-200 font-bold transition flex items-center gap-1.5 shrink-0 font-arabic"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-700" />
          <span>{isUrdu ? '🛑 سوچیں اور فیصلہ کریں' : '🛑 Smart Decisions'}</span>
        </button>

        {/* Core Button 6: "🌱 آج کا اچھا کام" */}
        <button
          type="button"
          onClick={() => handleSendMessage(isUrdu ? 'میں آج کیا اچھا کام کر سکتا ہوں؟ مجھے ایک عملی قدم تجویز کریں۔' : 'What good deed can I do today? Suggest a practical action.')}
          className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-200 font-bold transition flex items-center gap-1.5 shrink-0 font-arabic"
        >
          <Sprout className="w-3.5 h-3.5 text-emerald-700" />
          <span>{isUrdu ? '🌱 آج کا اچھا کام' : '🌱 Today’s Good Deed'}</span>
        </button>
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="mt-1 flex items-center gap-2 bg-white p-2 rounded-2xl border-2 border-slate-200 focus-within:border-emerald-500 shadow-sm"
      >
        <input
          id="ai-teacher-input"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={isUrdu ? 'استاد سیکھو سے کچھ بھی پوچھیں یا مائیک کا بٹن دبائیں...' : 'Ask Teacher Seekho or click mic to speak...'}
          className="flex-1 px-3 py-2 text-xs sm:text-sm bg-transparent text-slate-900 focus:outline-none placeholder:text-slate-400 font-medium font-arabic"
        />

        <VoiceInputButton
          language={language}
          size="md"
          tooltipUr="بول کر سوال پوچھیں"
          tooltipEn="Speak your question"
          onTranscript={(text) => {
            setInputMessage((prev) => (prev ? `${prev} ${text}` : text));
          }}
        />

        <button
          id="ai-teacher-send-btn"
          type="submit"
          disabled={!inputMessage.trim() || isLoading}
          className="p-2.5 sm:px-4 sm:py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-1.5 shadow-xs shrink-0 font-arabic"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">{isUrdu ? 'ارسال کریں' : 'Send'}</span>
        </button>
      </form>

      {/* Trust & Privacy Notice */}
      <div className="px-1 pt-1 text-[11px] text-slate-500 flex items-center justify-between gap-2 font-arabic">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
          <span>
            {isUrdu
              ? 'رازداری کی یاد دہانی: چیٹ میں پاس ورڈ، بینک یا شناختی کارڈ نمبر درج نہ کریں۔ اہم فیصلوں کی آزادانہ تصدیق کریں۔'
              : 'Privacy reminder: Never share passwords, banking, or national IDs. Verify critical decisions independently.'}
          </span>
        </span>
      </div>
    </div>
  );
};
