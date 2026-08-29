import React from 'react';
import { Bot, Sparkles, ArrowLeft, ArrowRight, Lightbulb, Target, Compass, Award } from 'lucide-react';
import { Language, UserProfile } from '../types';

interface AIPersonalMentorBannerProps {
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacherWithPrompt: (prompt?: string) => void;
}

export const AIPersonalMentorBanner: React.FC<AIPersonalMentorBannerProps> = ({
  language,
  userProfile,
  onOpenAITeacherWithPrompt,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  const completedLessons = userProfile.completedLessonIds?.length || 0;
  const streak = userProfile.streakDays || 1;

  // Contextual Mentor message generator
  const mentorGuidance = React.useMemo(() => {
    if (completedLessons === 0) {
      return {
        greetingUrdu: `خوش آمدید ${userProfile.name}! میں آپ کا ذاتی تعلیمی رہنما ہوں۔`,
        greetingEn: `Welcome ${userProfile.name}! I am your personal learning mentor.`,
        adviceUrdu: 'سب سے پہلے اپنی پسند کا ایک کورس منتخب کر کے 10 منٹ کا پہلا سبق پڑھیں، یہ آپ کے سفر کا پہلا اہم قدم ہوگا۔',
        adviceEn: 'Select a course you love and complete the first 10-minute lesson to start your journey.',
        actionUrdu: 'آج 10 منٹ کا پہلا سبق مکمل کریں',
        actionEn: 'Complete your first 10-minute lesson today',
        reflectionPromptUrdu: 'آپ آنے والے 6 ماہ میں اپنے آپ میں کیا سب سے بڑی تبدیلی دیکھنا چاہتے ہیں؟',
        reflectionPromptEn: 'What is the single biggest change you want to see in yourself in 6 months?',
      };
    }

    return {
      greetingUrdu: `ماشاءاللہ ${userProfile.name}! آپ نے مسلسل ${streak} دن میں سیکھنے کا شاندار تسلسل قائم رکھا ہے۔`,
      greetingEn: `Well done ${userProfile.name}! You have maintained a ${streak}-day active learning streak.`,
      adviceUrdu: 'آپ نے جو علم حاصل کیا ہے، اب وقت ہے کہ اسے کسی ایک عملی کام میں لگائیں اور اپنے گھر والوں یا محلے میں کسی کو فائدہ پہنچائیں۔',
      adviceEn: 'Now is the time to apply what you learned in a practical task and benefit someone around you.',
      actionUrdu: 'آج اپنی اسکل کا ایک عملی پروجیکٹ بنائیں',
      actionEn: 'Create one hands-on project with your skill today',
      reflectionPromptUrdu: 'آج جو آپ نے سیکھا، کیا اس نے آپ کو پہلے سے زیادہ مفید اور ذمہ دار انسان بنایا؟',
      reflectionPromptEn: 'Did what you learned today make you a more useful and responsible person?',
    };
  }, [userProfile, completedLessons, streak]);

  return (
    <div 
      id="ai-personal-mentor-banner"
      className="bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-emerald-500/30 relative overflow-hidden space-y-4"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between gap-3 flex-wrap border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-sm shrink-0">
            <Bot className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-base sm:text-lg font-black text-white font-arabic">
              {isUrdu ? 'ذاتی تعلیمی رہنما (AI Mentor)' : 'AI Personal Learning Mentor'}
            </h3>
            <span className="text-xs text-amber-300 font-bold font-arabic block">
              {isUrdu ? mentorGuidance.greetingUrdu : mentorGuidance.greetingEn}
            </span>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-200 border border-emerald-500/30 text-xs font-bold font-arabic">
          ✨ {isUrdu ? 'ذاتی رہنمائی' : 'Personalized Advice'}
        </span>
      </div>

      <div className="relative z-10 space-y-3 text-xs sm:text-sm font-arabic">
        <div className="bg-white/10 rounded-2xl p-3.5 border border-white/10 space-y-1 backdrop-blur-xs">
          <div className="flex items-center gap-1.5 text-amber-300 font-bold">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{isUrdu ? '💡 آج کا مخلصانہ مشورہ:' : "Today's Mentor Advice:"}</span>
          </div>
          <p className="text-emerald-50 leading-relaxed font-medium">
            {isUrdu ? mentorGuidance.adviceUrdu : mentorGuidance.adviceEn}
          </p>
        </div>

        {/* Reflection question */}
        <div className="flex items-start gap-2 text-emerald-200/90 italic pt-0.5">
          <Compass className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span><strong>{isUrdu ? 'خود احتسابی کا سوال:' : 'Reflection Prompt:'}</strong> {isUrdu ? mentorGuidance.reflectionPromptUrdu : mentorGuidance.reflectionPromptEn}</span>
        </div>

        {/* Quick Ask CTA */}
        <div className="pt-2 flex items-center justify-between gap-3 flex-wrap">
          <button
            id="ai-mentor-discuss-btn"
            onClick={() => onOpenAITeacherWithPrompt(isUrdu ? 'السلام علیکم! مجھے آج کے میرے تعلیمی سفر اور عملی اقدامات کے متعلق ذاتی مشورہ دیں۔' : 'Give me personalized advice on my learning and practical growth.')}
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm font-arabic shadow-md hover:scale-[1.01] active:scale-[0.98] transition flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>{isUrdu ? 'AI استاد سے مزید رہنمائی لیں' : 'Chat with AI Mentor'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
