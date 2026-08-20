import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Bot, 
  ShieldCheck, 
  BookOpen, 
  Heart, 
  Users, 
  Zap, 
  Calendar, 
  Briefcase, 
  RotateCcw, 
  Smile, 
  Award,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language, UserProfile, RealLifeMission, RealLifeMissionType } from '../types';
import { 
  getPersonalizedMission, 
  getSimplerMissionAlternative, 
  MISSION_TYPES_CONFIG,
  isMissionCompleted,
  getMissionReflection
} from '../utils/realLifeMissionEngine';

interface RealLifeMissionCardProps {
  language: Language;
  userProfile: UserProfile;
  onCompleteMission: (missionId: string, points: number, reflectionText: string, moodTag?: string) => void;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
  onSelectCourseById?: (courseId: string) => void;
}

const QUICK_MOOD_TAGS = [
  { ur: 'بہت سکون ملا', en: 'Felt very peaceful' },
  { ur: 'آسان اور فائدہ مند', en: 'Simple & beneficial' },
  { ur: 'اپنوں کو خوشی ہوئی', en: 'Brought joy to others' },
  { ur: 'تھوڑی کوشش لگی پر اچھا ہوا', en: 'Took effort but worth it' },
];

export const RealLifeMissionCard: React.FC<RealLifeMissionCardProps> = ({
  language,
  userProfile,
  onCompleteMission,
  onOpenAITeacherWithPrompt,
  onSelectCourseById,
}) => {
  const [selectedType, setSelectedType] = useState<RealLifeMissionType>('daily');
  const [activeMission, setActiveMission] = useState<RealLifeMission>(() => 
    getPersonalizedMission(userProfile, 'daily')
  );
  const [showReflectionInput, setShowReflectionInput] = useState(false);
  const [reflectionText, setReflectionText] = useState('');
  const [selectedMoodTag, setSelectedMoodTag] = useState<string>('بہت سکون ملا');
  const [isSimplerModeActive, setIsSimplerModeActive] = useState(false);
  const [showAllTypes, setShowAllTypes] = useState(false);

  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  // Sync mission when tab changes
  const handleTypeSelect = (type: RealLifeMissionType) => {
    setSelectedType(type);
    setIsSimplerModeActive(false);
    setShowReflectionInput(false);
    setReflectionText('');
    const mission = getPersonalizedMission(userProfile, type);
    setActiveMission(mission);
  };

  // Request a simpler version without shame
  const handleRequestSimpler = () => {
    const simpler = getSimplerMissionAlternative(activeMission);
    setActiveMission(simpler);
    setIsSimplerModeActive(true);
    setShowReflectionInput(false);
  };

  const isCompleted = isMissionCompleted(activeMission.id, userProfile);
  const savedReflection = getMissionReflection(activeMission.id, userProfile);

  const handleStartMission = () => {
    if (onOpenAITeacherWithPrompt) {
      const prompt = language === 'ur'
        ? `میں آج کا مشن "${activeMission.titleUrdu}" مکمل کرنا چاہتا ہوں۔ مجھے بتائیں کہ میں اسے حقیقی زندگی میں آسانی سے اور بہترین طریقے سے کیسے کروں؟`
        : `I want to complete today's mission: "${activeMission.titleEn}". Please guide me on how to do this in real life step-by-step.`;
      onOpenAITeacherWithPrompt(prompt);
    }
  };

  const handleSaveReflectionAndComplete = () => {
    const finalReflection = reflectionText.trim() || (language === 'ur' ? 'الحمدللہ مشن مکمل کیا اور بہت اچھا تجربہ رہا۔' : 'Alhamdulillah completed the mission with great benefit.');
    onCompleteMission(
      activeMission.id,
      activeMission.points,
      finalReflection,
      selectedMoodTag
    );
    setShowReflectionInput(false);
    setReflectionText('');
  };

  // Get icon for mission type
  const getIconForType = (type: RealLifeMissionType) => {
    switch (type) {
      case 'daily': return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'weekly': return <Calendar className="w-4 h-4 text-blue-500" />;
      case 'skill': return <Briefcase className="w-4 h-4 text-purple-500" />;
      case 'character': return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'family': return <Heart className="w-4 h-4 text-rose-500" />;
      case 'community': return <Users className="w-4 h-4 text-teal-600" />;
      case 'self_control': return <Zap className="w-4 h-4 text-amber-600" />;
      default: return <Sparkles className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div id="real-life-mission-card" className="bg-gradient-to-br from-emerald-900/95 via-slate-900 to-teal-950 text-white rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-emerald-500/40 relative overflow-hidden my-6">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header section */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md shrink-0">
            <Sparkles className="w-5 h-5 fill-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {language === 'ur' ? 'حقیقی زندگی کا مشن' : 'Real-Life Mission'}
              </span>
              {isCompleted && (
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {language === 'ur' ? 'مکمل شدہ' : 'Completed'}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-arabic mt-0.5">
              {language === 'ur' ? 'آج کا مشن' : "Today's Mission"}
            </h3>
          </div>
        </div>

        {/* Action time badge */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/10 text-emerald-200 border border-white/15 flex items-center gap-1.5 font-arabic">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            {activeMission.estimatedMinutes} {language === 'ur' ? 'منٹ کا عمل' : 'mins action'}
          </span>
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 flex items-center gap-1 font-arabic shadow-xs">
            <Award className="w-3.5 h-3.5" />
            +{activeMission.points} {language === 'ur' ? 'پوائنٹس' : 'pts'}
          </span>
        </div>
      </div>

      {/* 7 Mission Types Clean Tab Bar */}
      <div className="relative z-10 mb-5">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {MISSION_TYPES_CONFIG.map((cfg) => {
            const isSelected = selectedType === cfg.type;
            const label = language === 'ur' ? cfg.labelUrdu : cfg.labelEn;
            return (
              <button
                key={cfg.type}
                id={`mission-type-tab-${cfg.type}`}
                onClick={() => handleTypeSelect(cfg.type)}
                className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shrink-0 font-arabic border ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md scale-[1.02]'
                    : 'bg-white/10 hover:bg-white/20 text-slate-200 border-white/15'
                }`}
              >
                {getIconForType(cfg.type)}
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Mission Details Box */}
      <div className="relative z-10 bg-slate-950/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-emerald-500/30 space-y-4">
        {/* Mission Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs text-amber-300 font-bold font-arabic block mb-1">
              {language === 'ur' ? activeMission.categoryUrdu : activeMission.categoryEn}
              {isSimplerModeActive && (
                <span className="text-emerald-300 mx-2 font-normal">
                  ({language === 'ur' ? 'آسان بنایا گیا قدم' : 'Gentle step'})
                </span>
              )}
            </span>
            <h4 className="text-lg sm:text-xl font-black text-white font-arabic leading-snug">
              {language === 'ur' ? activeMission.titleUrdu : activeMission.titleEn}
            </h4>
          </div>

          {activeMission.durationDays && activeMission.durationDays > 1 && (
            <span className="text-xs px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-400/30 font-bold self-start font-arabic">
              {language === 'ur' ? `🗓️ ${activeMission.durationDays} روزہ تسلسل` : `🗓️ ${activeMission.durationDays}-Day Habit`}
            </span>
          )}
        </div>

        {/* 1. WHY THIS MISSION WAS SELECTED & WHY IT MATTERS */}
        <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 space-y-2">
          {/* Why Selected (Personalized Rationale) */}
          {activeMission.whySelectedUrdu && (
            <div className="flex items-start gap-2 text-xs text-amber-200 font-arabic pb-1.5 border-b border-white/10">
              <span className="w-4 h-4 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                🎯
              </span>
              <p>
                <strong className="text-amber-300">
                  {language === 'ur' ? 'یہ مشن کیوں منتخب ہوا؟: ' : 'Why this mission was selected: '}
                </strong>
                {language === 'ur' ? activeMission.whySelectedUrdu : activeMission.whySelectedEn}
              </p>
            </div>
          )}

          <div className="flex items-center gap-2 mb-1">
            <span className="w-5 h-5 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center text-xs font-black">
              💡
            </span>
            <span className="text-xs font-bold text-amber-300 font-arabic">
              {language === 'ur' ? 'یہ عمل کیوں ضروری ہے؟' : 'Why it matters:'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-arabic">
            {language === 'ur' ? activeMission.whyItMattersUrdu : activeMission.whyItMattersEn}
          </p>
        </div>

        {/* 2. THE 4 CONNECTED ACTIONS (یا جامع عملی اقدام) */}
        {activeMission.practicalActionItem || activeMission.learningActionItem || activeMission.characterIslamicActionItem ? (
          <div className="space-y-2.5">
            <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5 font-arabic">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{language === 'ur' ? 'آج کے ۴ باہم مربوط اقدامات (Today’s 4 Actions):' : 'Today’s 4 Connected Actions:'}</span>
            </div>

            {/* Action 1: Practical Life Action */}
            {activeMission.practicalActionItem && (
              <div className="bg-slate-900/80 rounded-xl p-3 border border-emerald-500/30 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-xs font-bold text-emerald-300 font-arabic">
                      {language === 'ur' ? activeMission.practicalActionItem.titleUrdu : activeMission.practicalActionItem.titleEn}
                    </span>
                    <span className="text-[11px] text-slate-400 font-arabic shrink-0">
                      ⏱️ {activeMission.practicalActionItem.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
                    </span>
                  </div>
                  <p className="text-xs text-white font-arabic leading-relaxed">
                    {language === 'ur' ? activeMission.practicalActionItem.actionUrdu : activeMission.practicalActionItem.actionEn}
                  </p>
                </div>
              </div>
            )}

            {/* Action 2: Learning Action */}
            {activeMission.learningActionItem && (
              <div className="bg-slate-900/80 rounded-xl p-3 border border-blue-500/30 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-xs font-bold text-blue-300 font-arabic">
                      {language === 'ur' ? activeMission.learningActionItem.titleUrdu : activeMission.learningActionItem.titleEn}
                    </span>
                    <span className="text-[11px] text-slate-400 font-arabic shrink-0">
                      ⏱️ {activeMission.learningActionItem.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
                    </span>
                  </div>
                  <p className="text-xs text-white font-arabic leading-relaxed">
                    {language === 'ur' ? activeMission.learningActionItem.actionUrdu : activeMission.learningActionItem.actionEn}
                  </p>
                </div>
              </div>
            )}

            {/* Action 3: Character / Islamic Action */}
            {activeMission.characterIslamicActionItem && (
              <div className="bg-slate-900/80 rounded-xl p-3 border border-amber-500/30 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  3
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-xs font-bold text-amber-300 font-arabic">
                      {language === 'ur' ? activeMission.characterIslamicActionItem.titleUrdu : activeMission.characterIslamicActionItem.titleEn}
                    </span>
                    <span className="text-[11px] text-slate-400 font-arabic shrink-0">
                      ⏱️ {activeMission.characterIslamicActionItem.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
                    </span>
                  </div>
                  <p className="text-xs text-white font-arabic leading-relaxed">
                    {language === 'ur' ? activeMission.characterIslamicActionItem.actionUrdu : activeMission.characterIslamicActionItem.actionEn}
                  </p>
                  {activeMission.characterIslamicActionItem.referenceUrdu && (
                    <p className="text-[11px] text-amber-200/90 font-arabic mt-1 bg-amber-950/40 px-2 py-1 rounded-lg border border-amber-500/20">
                      📖 {language === 'ur' ? activeMission.characterIslamicActionItem.referenceUrdu : activeMission.characterIslamicActionItem.referenceEn}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Action 4: Small Reflection */}
            <div className="bg-slate-900/80 rounded-xl p-3 border border-purple-500/30 flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                4
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span className="text-xs font-bold text-purple-300 font-arabic">
                    {language === 'ur' ? 'مختصر سوچ و جائزہ (Short Reflection)' : 'Small Reflection'}
                  </span>
                  <span className="text-[11px] text-slate-400 font-arabic shrink-0">
                    ⏱️ 1-2 {language === 'ur' ? 'منٹ' : 'mins'}
                  </span>
                </div>
                <p className="text-xs text-slate-200 font-arabic leading-relaxed">
                  {language === 'ur' ? activeMission.reflectionPromptUrdu : activeMission.reflectionPromptEn}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Standard Action Box fallback */
          <div className="bg-emerald-950/70 rounded-xl p-3.5 border border-emerald-500/40">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-5 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center text-xs font-black">
                ⚡
              </span>
              <span className="text-xs font-bold text-emerald-300 font-arabic">
                {language === 'ur' ? 'آج کا عملی اقدام (Measurable Action):' : 'Measurable Action:'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white font-bold leading-relaxed font-arabic">
              {language === 'ur' ? activeMission.actionUrdu : activeMission.actionEn}
            </p>
          </div>
        )}

        {/* 3. VERIFIED GUIDANCE (مستند حوالہ) - If available */}
        {activeMission.verifiedGuidance && (
          <div className="bg-teal-950/60 rounded-xl p-3.5 border border-teal-500/30 text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-teal-300 font-bold font-arabic">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === 'ur' ? 'مستند رہنمائی' : 'Verified Reference'}</span>
            </div>
            {activeMission.verifiedGuidance.hadithUrdu && (
              <p className="text-slate-200 font-arabic">
                <span className="text-amber-300 font-semibold">📜 حدیث نبوی ﷺ: </span>
                "{language === 'ur' ? activeMission.verifiedGuidance.hadithUrdu : activeMission.verifiedGuidance.hadithEn}"
                <span className="text-teal-300 font-bold block text-[11px] mt-0.5">
                  [{activeMission.verifiedGuidance.hadithRef}]
                </span>
              </p>
            )}
            {activeMission.verifiedGuidance.quranUrdu && (
              <p className="text-slate-200 font-arabic">
                <span className="text-emerald-300 font-semibold">📖 قرآن مجید: </span>
                "{language === 'ur' ? activeMission.verifiedGuidance.quranUrdu : activeMission.verifiedGuidance.quranEn}"
                <span className="text-emerald-300 font-bold block text-[11px] mt-0.5">
                  [{activeMission.verifiedGuidance.quranRef}]
                </span>
              </p>
            )}
          </div>
        )}

        {/* 4. COMPLETED STATE VIEW OR ACTION BUTTONS */}
        {isCompleted ? (
          <div className="bg-emerald-900/40 rounded-xl p-4 border border-emerald-500/50 space-y-2">
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm font-arabic">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>
                {language === 'ur' ? 'ماشاءاللہ! آپ نے یہ مشن مکمل کر لیا ہے۔' : 'Masha’Allah! You completed this mission.'}
              </span>
            </div>
            {savedReflection && (
              <div className="text-xs text-slate-200 bg-white/5 p-2.5 rounded-lg border border-white/10 font-arabic">
                <span className="text-amber-300 font-bold block mb-1">
                  {language === 'ur' ? 'آپ کا تاثر (Reflection):' : 'Your Reflection:'}
                </span>
                <p className="italic">"{savedReflection.reflectionText}"</p>
                {savedReflection.moodTag && (
                  <span className="inline-block mt-1 text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200">
                    {savedReflection.moodTag}
                  </span>
                )}
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* REFLECTION INPUT (When user clicks Mark Complete) */}
            {showReflectionInput ? (
              <div className="bg-white/10 rounded-2xl p-4 border border-amber-400/40 space-y-3 animate-fade-in">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm font-arabic">
                  <Smile className="w-4 h-4 text-amber-400" />
                  <span>
                    {language === 'ur' 
                      ? activeMission.reflectionPromptUrdu 
                      : activeMission.reflectionPromptEn}
                  </span>
                </div>

                {/* Quick Mood Chips */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {QUICK_MOOD_TAGS.map((tag, idx) => {
                    const tagLabel = language === 'ur' ? tag.ur : tag.en;
                    const isTagSelected = selectedMoodTag === tag.ur;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedMoodTag(tag.ur)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-arabic transition ${
                          isTagSelected
                            ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                            : 'bg-white/10 text-slate-200 hover:bg-white/20'
                        }`}
                      >
                        {tagLabel}
                      </button>
                    );
                  })}
                </div>

                {/* Short reflection textarea */}
                <textarea
                  id="mission-reflection-input"
                  value={reflectionText}
                  onChange={(e) => setReflectionText(e.target.value)}
                  placeholder={language === 'ur' ? 'ایک جملے میں اپنا مختصر تاثر یا نتیجہ لکھیں...' : 'Write one brief reflection or takeaway...'}
                  rows={2}
                  className="w-full bg-slate-950/80 text-white rounded-xl p-3 text-xs sm:text-sm border border-white/20 focus:border-amber-400 focus:outline-hidden font-arabic"
                />

                {/* Action buttons */}
                <div className="flex items-center gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowReflectionInput(false)}
                    className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold font-arabic text-slate-300"
                  >
                    {language === 'ur' ? 'منسوخ' : 'Cancel'}
                  </button>
                  <button
                    type="button"
                    id="save-mission-reflection-btn"
                    onClick={handleSaveReflectionAndComplete}
                    className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm font-arabic shadow-md flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{language === 'ur' ? 'محفوظ کریں اور مکمل کریں (+25 pts)' : 'Save & Complete (+25 pts)'}</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Normal button row */
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2">
                <div className="flex items-center gap-2 flex-1">
                  {/* Start Button */}
                  <button
                    id="start-mission-btn"
                    onClick={handleStartMission}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 font-arabic transition border border-white/20"
                  >
                    <Bot className="w-4 h-4 text-amber-400" />
                    <span>{language === 'ur' ? 'شروع کریں / رہنمائی لیں' : 'Start / Get Guidance'}</span>
                  </button>

                  {/* Mark Complete Button */}
                  <button
                    id="mark-mission-complete-btn"
                    onClick={() => setShowReflectionInput(true)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 font-arabic shadow-lg transition hover:scale-[1.02]"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{language === 'ur' ? 'مکمل کیا' : 'Mark Complete'}</span>
                  </button>
                </div>

                {/* Gentle "Make Simpler" Button */}
                {!isSimplerModeActive && (
                  <button
                    id="simplify-mission-btn"
                    onClick={handleRequestSimpler}
                    className="text-xs text-emerald-200/90 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition font-arabic flex items-center justify-center gap-1 shrink-0 self-center sm:self-auto"
                    title={language === 'ur' ? 'اگر یہ قدم مشکل لگ رہا ہے تو زیادہ آسان قدم چنیں' : 'Choose a simpler step'}
                  >
                    <RotateCcw className="w-3 h-3 text-emerald-300" />
                    <span>{language === 'ur' ? 'یہ مشکل ہے، آسان مشن دیں' : 'Make it simpler'}</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Gentle Non-Competitive Bottom Footnote */}
      <div className="relative z-10 mt-3.5 flex items-center justify-between text-[11px] text-emerald-200/70 font-arabic px-1">
        <span>
          {language === 'ur'
            ? '💡 مشن کا مقصد مقابلہ نہیں بلکہ روزانہ کا حقیقی فائدہ اور کردار سازی ہے۔'
            : '💡 Missions focus on personal character and real-world benefit, not competition.'}
        </span>
        <span className="hidden sm:inline">
          {language === 'ur' ? 'ایک وقت میں ایک قدم' : 'One step at a time'}
        </span>
      </div>
    </div>
  );
};
