import React, { useState } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  Share2,
  Heart,
  MessageCircle,
  HelpCircle,
  Award,
  Layers
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { FamilyTopicItem, DifficultyLevel } from '../data/familyAndSocietyMasterData';
import { speakText, stopSpeaking } from '../utils/speech';

interface FamilyTopicDetailModalProps {
  topic: FamilyTopicItem;
  language: Language;
  userProfile: UserProfile;
  onClose: () => void;
  onOpenAITeacherWithPrompt?: (prompt: string) => void;
  onRewardPoints?: (points: number, msgUrdu: string, msgEn: string) => void;
}

export const FamilyTopicDetailModal: React.FC<FamilyTopicDetailModalProps> = ({
  topic,
  language,
  userProfile,
  onClose,
  onOpenAITeacherWithPrompt,
  onRewardPoints,
}) => {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [activeTab, setActiveTab] = useState<'study' | 'levels' | 'action'>('study');
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel>('intermediate');
  const [isCompleted, setIsCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem(`family_topic_completed_${topic.id}`);
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const handleToggleVoice = () => {
    if (isPlayingVoice) {
      stopSpeaking();
      setIsPlayingVoice(false);
    } else {
      const textToSpeak = `${topic.titleUrdu}۔ ${topic.taglineUrdu}۔ ${topic.step1WhatIsItUrdu}۔ قرآنی رہنمائی: ${topic.step6QuranicEthicalGuidanceUrdu}۔ آج کا عمل: ${topic.step10TodayActionUrdu}`;
      speakText(textToSpeak, {
        language: 'ur',
        onEnd: () => setIsPlayingVoice(false),
        onError: () => setIsPlayingVoice(false),
      });
      setIsPlayingVoice(true);
    }
  };

  const handleMarkCompleted = () => {
    if (isCompleted) return;
    setIsCompleted(true);
    try {
      localStorage.setItem(`family_topic_completed_${topic.id}`, 'true');
    } catch (e) {
      console.error(e);
    }
    if (onRewardPoints) {
      onRewardPoints(
        topic.points || 30,
        `شاندار! آپ نے "${topic.titleUrdu}" کا تفصیلی سبق مکمل کر لیا ہے۔ (+${topic.points} پوائنٹس)`,
        `Excellent! You completed the study on "${topic.titleEn}". (+${topic.points} Points)`
      );
    }
  };

  const handleConsultAIMentor = () => {
    if (onOpenAITeacherWithPrompt) {
      const prompt = `السلام علیکم سیکھو رہنما! میں موضوع "${topic.titleUrdu}" (${topic.titleEn}) پر اپنی زندگی کے حوالے سے رہنمائی اور عملی مشورہ چاہتا ہوں۔ مجھے بتائیں کہ میں اپنے خاندان اور تعلقات میں اس اصول کو بہترین طریقے سے کیسے لاگو کروں؟`;
      onOpenAITeacherWithPrompt(prompt);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden relative">
        
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl border border-white/20">
              {topic.iconSymbol}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/30">
                  {language === 'ur' ? `موضوع #${topic.categoryNumber}` : `Topic #${topic.categoryNumber}`}
                </span>
                <span className="text-xs text-slate-300 font-sans">{topic.titleEn}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-arabic tracking-tight text-white mt-0.5">
                {topic.titleUrdu}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleVoice}
              className={`p-2.5 rounded-2xl border transition-all ${
                isPlayingVoice
                  ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse shadow-md'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
              }`}
              title={isPlayingVoice ? 'آواز بند کریں' : 'سبق سنیں'}
            >
              {isPlayingVoice ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50 px-4 sm:px-6 py-2 gap-2 text-sm font-arabic shrink-0">
          <button
            onClick={() => setActiveTab('study')}
            className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
              activeTab === 'study'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{language === 'ur' ? 'مکمل تفہیمی سبق' : 'Core 10-Step Lesson'}</span>
          </button>

          <button
            onClick={() => setActiveTab('levels')}
            className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
              activeTab === 'levels'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{language === 'ur' ? 'تفہیمی درجات (۴ درجے)' : '4 Depth Levels'}</span>
          </button>

          <button
            onClick={() => setActiveTab('action')}
            className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
              activeTab === 'action'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{language === 'ur' ? 'عملی مشق اور خود احتسابی' : 'Practice & Action'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6 font-arabic leading-relaxed text-slate-800">
          
          {activeTab === 'study' && (
            <div className="space-y-6">
              
              {/* Step 1 & 2: یہ کیا ہے اور کیوں اہم ہے؟ */}
              <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-base sm:text-lg">
                  <Sparkles className="w-5 h-5 text-emerald-700" />
                  <span>یہ کیا ہے اور کیوں اہم ہے؟</span>
                </div>
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed">
                  {topic.step1WhatIsItUrdu}
                </p>
                <div className="pt-2 border-t border-emerald-200/60 text-slate-700 text-sm sm:text-base">
                  <strong className="text-emerald-950">اہمیت: </strong>
                  {topic.step2WhyImportantUrdu}
                </div>
              </div>

              {/* Step 6: قرآن و دینی رہنمائی */}
              <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/90 space-y-3">
                <div className="flex items-center justify-between text-amber-950 font-bold text-base sm:text-lg">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-700" />
                    <span>قرآن و معتبر دینی اصول کیا رہنمائی دیتے ہیں؟</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-amber-200/70 text-amber-900 font-sans font-bold">
                    {topic.step6Reference}
                  </span>
                </div>
                <blockquote className="text-lg sm:text-xl font-black text-amber-950 bg-white/70 p-4 rounded-xl border-r-4 border-amber-600 leading-relaxed font-arabic">
                  "{topic.step6QuranicEthicalGuidanceUrdu}"
                </blockquote>
              </div>

              {/* Step 3: عام زندگی کی مثال */}
              <div className="bg-blue-50/70 rounded-2xl p-5 border border-blue-200/80 space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-base sm:text-lg">
                  <Lightbulb className="w-5 h-5 text-blue-700" />
                  <span>عام روزمرہ زندگی کی مثال:</span>
                </div>
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed">
                  {topic.step3EverydayExampleUrdu}
                </p>
              </div>

              {/* Step 4 & 5: غلطیاں بمقابلہ صحیح طریقہ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mistakes */}
                <div className="bg-rose-50/70 rounded-2xl p-5 border border-rose-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-rose-900 font-bold text-base">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    <span>لوگ کہاں غلطی کرتے ہیں؟</span>
                  </div>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    {topic.step4CommonMistakesUrdu.map((mistake, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">✕</span>
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Correct Approach */}
                <div className="bg-teal-50/70 rounded-2xl p-5 border border-teal-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-teal-900 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    <span>صحیح اور باوقار طریقہ کیا ہے؟</span>
                  </div>
                  <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
                    {topic.step5CorrectApproachUrdu.map((approach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold">✓</span>
                        <span>{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 7: آج کی جدید زندگی سے تعلق */}
              <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <Sparkles className="w-5 h-5 text-slate-700" />
                  <span>آج کے دور میں اس کی اہمیت:</span>
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  {topic.step7ModernRelevanceUrdu}
                </p>
              </div>

            </div>
          )}

          {activeTab === 'levels' && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl">
                {(['beginner', 'intermediate', 'advanced', 'deep_thinker'] as DifficultyLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`flex-1 py-2 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      selectedLevel === lvl
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {lvl === 'beginner' && 'ابتدائی (Beginner)'}
                    {lvl === 'intermediate' && 'درمیانہ (Intermediate)'}
                    {lvl === 'advanced' && 'اعلیٰ (Advanced)'}
                    {lvl === 'deep_thinker' && 'گہرا فلسفیانہ (Deep)'}
                  </button>
                ))}
              </div>

              {selectedLevel === 'beginner' && (
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 space-y-3">
                  <div className="text-emerald-900 font-bold text-lg">آسان اور سادہ ترین خلاصہ:</div>
                  <p className="text-lg text-slate-800 leading-relaxed font-bold">
                    {topic.beginnerSummaryUrdu}
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-emerald-100 text-slate-700 text-sm">
                    <strong>بچوں اور نوجوانوں کے لیے مثال: </strong>
                    {topic.youthFriendlyExampleUrdu}
                  </div>
                </div>
              )}

              {selectedLevel === 'intermediate' && (
                <div className="bg-teal-50 rounded-2xl p-6 border border-teal-200 space-y-3">
                  <div className="text-teal-900 font-bold text-lg">عملی و فکری گہرائی:</div>
                  <p className="text-lg text-slate-800 leading-relaxed">
                    {topic.intermediateInsightUrdu}
                  </p>
                </div>
              )}

              {selectedLevel === 'advanced' && (
                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200 space-y-3">
                  <div className="text-purple-900 font-bold text-lg">اخلاقی کیس اسٹڈی اور پیچیدہ حالات:</div>
                  <p className="text-lg text-slate-800 leading-relaxed">
                    {topic.advancedCaseStudyUrdu}
                  </p>
                </div>
              )}

              {selectedLevel === 'deep_thinker' && (
                <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200 space-y-3">
                  <div className="text-indigo-900 font-bold text-lg">فلسفیانہ و اخلاقی نچوڑ:</div>
                  <blockquote className="text-xl font-black text-indigo-950 italic p-4 bg-white rounded-xl border-r-4 border-indigo-600">
                    "{topic.deepThinkerReflectionUrdu}"
                  </blockquote>
                </div>
              )}
            </div>
          )}

          {activeTab === 'action' && (
            <div className="space-y-5">
              
              {/* Step 8: خود احتسابی */}
              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-amber-950 font-bold text-base sm:text-lg">
                  <HelpCircle className="w-5 h-5 text-amber-700" />
                  <span>خود احتسابی — دل پر ہاتھ رکھ کر سوچیں:</span>
                </div>
                <p className="text-lg font-black text-amber-950 leading-relaxed">
                  {topic.step8SelfInquiryUrdu}
                </p>
              </div>

              {/* Step 9: عملی مشق */}
              <div className="bg-teal-50 rounded-2xl p-5 border border-teal-200 space-y-2">
                <div className="flex items-center gap-2 text-teal-950 font-bold text-base sm:text-lg">
                  <Layers className="w-5 h-5 text-teal-700" />
                  <span>عملی مشق (Practical Exercise):</span>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
                  {topic.step9PracticalExerciseUrdu}
                </p>
              </div>

              {/* Step 10: آج کا ایک فوری عمل */}
              <div className="bg-emerald-100/90 rounded-2xl p-6 border border-emerald-300 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-950 font-black text-lg">
                  <Award className="w-6 h-6 text-emerald-700" />
                  <span>آج کا ایک فوری عمل:</span>
                </div>
                <p className="text-lg sm:text-xl font-black text-emerald-950 leading-relaxed">
                  {topic.step10TodayActionUrdu}
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Footer Action Bar */}
        <div className="p-4 sm:p-5 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleConsultAIMentor}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 text-sm font-bold font-arabic transition-all"
          >
            <MessageCircle className="w-4 h-4 text-indigo-700" />
            <span>{language === 'ur' ? 'سیکھو رہنما سے مشورہ لیں' : 'Ask AI Mentor on This'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleMarkCompleted}
              disabled={isCompleted}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-black font-arabic transition-all shadow-sm ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-emerald-800 hover:bg-emerald-900 text-white'
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>{isCompleted ? 'سبق مکمل محفوظ ہے ✓' : 'سبق مکمل کریں (+30 XP)'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
