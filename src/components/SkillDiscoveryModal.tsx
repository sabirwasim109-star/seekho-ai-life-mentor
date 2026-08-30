import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Award, 
  Wrench, 
  Laptop, 
  Cpu, 
  Palette, 
  Scissors, 
  Store, 
  Smartphone,
  Check,
  Flame,
  Bot
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { SKILL_DISCOVERY_QUESTIONS, SKILLS_MASTER_DATA, SkillMasterItem } from '../data/skillsMasterData';
import { speakText, stopSpeaking } from '../utils/speech';

interface SkillDiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  userProfile: UserProfile;
  onSelectSkill: (skill: SkillMasterItem) => void;
}

export const SkillDiscoveryModal: React.FC<SkillDiscoveryModalProps> = ({
  isOpen,
  onClose,
  language,
  userProfile,
  onSelectSkill,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [recommendedSkills, setRecommendedSkills] = useState<{ skill: SkillMasterItem; matchScore: number; reasonUrdu: string; reasonEn: string }[]>([]);

  if (!isOpen) return null;

  const currentQ = SKILL_DISCOVERY_QUESTIONS[currentStep];

  const handleSelectOption = (questionId: string, optionId: string) => {
    const updatedAnswers = { ...answers, [questionId]: optionId };
    setAnswers(updatedAnswers);

    // Read question answer out loud briefly for accessibility if desired
    if (currentStep < SKILL_DISCOVERY_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate Recommendations
      calculateRecommendations(updatedAnswers);
    }
  };

  const calculateRecommendations = (userAnswers: Record<string, string>) => {
    const interest = userAnswers['q1-interest'];
    const workstyle = userAnswers['q2-workstyle'];
    const location = userAnswers['q3-location'];
    const device = userAnswers['q4-phone'];
    const computer = userAnswers['q5-computer'];
    const time = userAnswers['q7-daily-time'];
    const priorSkill = userAnswers['q9-prior-skill'];

    const scored = SKILLS_MASTER_DATA.map((skill) => {
      let score = 70;
      let reasonUrdu = 'آپ کے منتخب کردہ مشاغل اور وقت کے مطابق یہ ہنر انتہائی موزوں ہے۔';
      let reasonEn = 'This skill directly matches your schedule, device, and interest.';

      if (interest === 'tech' && skill.categoryKey === 'digital') {
        score += 25;
        reasonUrdu = 'چونکہ آپ ٹیکنالوجی اور کمپیوٹر میں دلچسپی رکھتے ہیں، اس لیے یہ آپ کے لیے بہترین ہے۔';
      } else if (interest === 'craft' && skill.categoryKey === 'traditional') {
        score += 25;
        reasonUrdu = 'چونکہ آپ ہاتھ کے کام اور دستکاری کو ترجیح دیتے ہیں، یہ آپ کی قدرتی صلاحیت سے مطابقت رکھتا ہے۔';
      } else if (interest === 'business' && (skill.categoryKey === 'business' || skill.slug.includes('business'))) {
        score += 25;
        reasonUrdu = 'چونکہ آپ تجارت اور آزاد کاروبار چاہتے ہیں، یہ ہنر آپ کو فوری کسٹمرز فراہم کرے گا۔';
      }

      if (computer === 'no-pc' && skill.requiredDevice === 'mobile') {
        score += 15;
        reasonUrdu += ' آپ کے پاس صرف موبائل فون ہے اور یہ ہنر ۱۰۰٪ فون سے سیکھا اور کیا جا سکتا ہے۔';
      }

      if (location === 'home' && (skill.slug.includes('sewing') || skill.slug.includes('canva') || skill.slug.includes('ai'))) {
        score += 10;
      }

      if (priorSkill === 'sewing-food' && skill.slug.includes('sewing')) {
        score += 30;
        reasonUrdu = 'چونکہ آپ کو پہلے سے بنیادی سلائی/دستکاری کا شوق ہے، آپ اس سے بہت جلد باقاعدہ آمدنی شروع کر سکتے ہیں۔';
      }

      return {
        skill,
        matchScore: Math.min(score, 99),
        reasonUrdu,
        reasonEn,
      };
    });

    scored.sort((a, b) => b.matchScore - a.matchScore);
    setRecommendedSkills(scored.slice(0, 3));
    setIsCompleted(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const handleVoiceRead = (text: string) => {
    speakText(text, { language: 'ur', rate: 0.86, pitch: 0.84 });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden"
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shadow-xs">
              <Sparkles className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 font-arabic">
                {isUrdu ? 'میرا ہنر کون سا ہے؟ (ذاتی تشخیصی ٹیسٹ)' : 'Personal Skill Discovery Diagnostic'}
              </h2>
              <p className="text-xs text-slate-500 font-arabic">
                {isUrdu 
                  ? '۱۰ آسان سوالات کے ذریعے اپنی صلاحیت اور وسائل کے مطابق بہترین ہنر جانیں' 
                  : '10 simple questions to discover your optimal practical livelihood path'}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {!isCompleted ? (
            <div className="space-y-6">
              {/* Progress Tracker */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 font-arabic">
                  <span>{isUrdu ? `سوال ${currentStep + 1} از ${SKILL_DISCOVERY_QUESTIONS.length}` : `Question ${currentStep + 1} of ${SKILL_DISCOVERY_QUESTIONS.length}`}</span>
                  <span>{Math.round(((currentStep + 1) / SKILL_DISCOVERY_QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / SKILL_DISCOVERY_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Current Question */}
              <div className="bg-emerald-50/50 p-4 sm:p-5 rounded-2xl border border-emerald-200/70 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 font-arabic leading-snug">
                    {isUrdu ? currentQ.questionUrdu : currentQ.questionEn}
                  </h3>
                  <button
                    onClick={() => handleVoiceRead(isUrdu ? currentQ.questionUrdu : currentQ.questionEn)}
                    className="p-2 rounded-xl bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100 shadow-xs shrink-0 transition"
                    title={isUrdu ? 'آواز سنیں' : 'Listen voice'}
                  >
                    🎙️
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt) => {
                  const isSelected = answers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(currentQ.id, opt.id)}
                      className={`w-full text-right p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 font-arabic text-base sm:text-lg group ${
                        isSelected 
                          ? 'bg-emerald-800 text-white border-emerald-900 shadow-md font-bold' 
                          : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-emerald-300 shadow-xs'
                      }`}
                    >
                      <span className="leading-relaxed">
                        {isUrdu ? opt.labelUrdu : opt.labelEn}
                      </span>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-white bg-white/20 text-white' : 'border-slate-300 text-transparent group-hover:border-emerald-400'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Back button if past question 0 */}
              {currentStep > 0 && (
                <div className="pt-2 flex justify-start">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-sm font-bold text-slate-500 hover:text-slate-800 font-arabic flex items-center gap-1.5 p-2 rounded-xl hover:bg-slate-100"
                  >
                    {isUrdu ? '← پچھلا سوال' : '← Previous Question'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 animate-in fade-in">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-3xl bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center font-black text-2xl shadow-sm">
                  🎯
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-arabic">
                  {isUrdu ? 'ماشاءاللہ! آپ کے لیے تجویز کردہ ہنر' : 'Your Personalized Skill Matches'}
                </h3>
                <p className="text-sm text-slate-600 font-arabic max-w-md mx-auto">
                  {isUrdu 
                    ? 'آپ کے وقت، موبائل، تعلیمی پس منظر اور دلچسپی کا مکمل جائزہ لے کر یہ ہنر چنے گئے ہیں:' 
                    : 'Based on your available time, devices, education, and preferences:'}
                </p>
              </div>

              <div className="space-y-4">
                {recommendedSkills.map(({ skill, matchScore, reasonUrdu, reasonEn }, idx) => (
                  <div 
                    key={skill.id}
                    className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black font-arabic">
                            {matchScore}% {isUrdu ? 'مطابقت' : 'Match'}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-arabic">
                            {isUrdu ? skill.categoryTitleUrdu : skill.categoryTitleEn}
                          </span>
                        </div>
                        <h4 className="text-xl font-black text-slate-900 font-arabic pt-1">
                          {isUrdu ? skill.titleUrdu : skill.titleEn}
                        </h4>
                      </div>
                      <span className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center font-bold text-lg shrink-0">
                        {idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 font-arabic leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      💡 <strong>{isUrdu ? 'یہ کیوں مناسب ہے؟ ' : 'Why suitable: '}</strong>
                      {isUrdu ? reasonUrdu : reasonEn}
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                      <div className="text-xs text-slate-500 font-arabic flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span>{isUrdu ? `سیکھنے کا تخمینہ: ${skill.timeToLearnDays} دن` : `Learn in: ${skill.timeToLearnDays} days`}</span>
                      </div>
                      <button
                        onClick={() => {
                          stopSpeaking();
                          onClose();
                          onSelectSkill(skill);
                        }}
                        className="py-2.5 px-5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-sm font-arabic shadow-xs transition flex items-center justify-center gap-2"
                      >
                        <span>{isUrdu ? 'یہ ہنر کھولیں اور شروع کریں' : 'Start this Skill'}</span>
                        <ArrowIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center pt-2">
                <button
                  onClick={handleRestart}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 font-arabic underline"
                >
                  {isUrdu ? '🔄 دوبارہ ٹیسٹ دیں' : '🔄 Retake Assessment'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
