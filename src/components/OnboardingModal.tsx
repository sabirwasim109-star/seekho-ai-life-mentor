import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Check,
  ArrowRight, 
  ArrowLeft,
  Award,
  Target,
  BookOpen,
  Zap,
  ShieldCheck,
  Heart,
  Laptop,
  Smartphone,
  Languages,
  User,
  MapPin,
  Briefcase
} from 'lucide-react';
import { AgeGroup, Language, UserProfile } from '../types';
import { AudioReaderButton, FieldAudioSpeaker, useActiveSpeech, VoiceInputButton } from './AudioSpeechControls';
import { stopSpeaking } from '../utils/speech';

interface OnboardingModalProps {
  language: Language;
  initialProfile: UserProfile;
  onSaveProfile: (profile: UserProfile) => void;
  onClose: () => void;
  onLanguageChange?: (lang: Language) => void;
}

export const ONBOARDING_GOALS = [
  { 
    id: 'quran_character', 
    ur: 'قرآن و کردار', 
    en: 'Quran & Character', 
    descUr: 'قرآن، اخلاقیات اور اچھی عادات',
    descEn: 'Quran, ethics and noble habits',
    icon: '📖', 
    category: 'ethics' 
  },
  { 
    id: 'skills', 
    ur: 'عملی مہارتیں', 
    en: 'Practical Skills', 
    descUr: 'موبائل، کمپیوٹر اور مفید روزمرہ مہارتیں',
    descEn: 'Mobile, computer and useful daily skills',
    icon: '🛠️', 
    category: 'tech' 
  },
  { 
    id: 'career', 
    ur: 'کیریئر و روزگار', 
    en: 'Career & Employment', 
    descUr: 'ملازمت اور کیریئر کے لیے ضروری مہارتیں',
    descEn: 'Essential skills for jobs and career',
    icon: '💼', 
    category: 'career' 
  },
  { 
    id: 'business', 
    ur: 'کاروبار و حلال آمدن', 
    en: 'Business & Earning', 
    descUr: 'کاروبار، فری لانسنگ اور آمدنی کے ذرائع',
    descEn: 'Business, freelancing and earning pathways',
    icon: '🏪', 
    category: 'business' 
  },
  { 
    id: 'leadership', 
    ur: 'قیادت و رہنمائی', 
    en: 'Leadership', 
    descUr: 'ٹیم ورک، قیادت اور ذمہ داری اٹھانا',
    descEn: 'Teamwork, leadership and taking responsibility',
    icon: '🎯', 
    category: 'leadership' 
  },
  { 
    id: 'financial_knowledge', 
    ur: 'مالیاتی شعور', 
    en: 'Financial Literacy', 
    descUr: 'آمدنی، اخراجات، بچت اور مالیاتی منصوبہ بندی',
    descEn: 'Income, spending, savings and financial planning',
    icon: '💰', 
    category: 'finance' 
  },
  { 
    id: 'communication', 
    ur: 'بات چیت کی مہارت', 
    en: 'Communication', 
    descUr: 'بہتر انداز گفتگو، توجہ سے سننا اور سمجھنا',
    descEn: 'Better speaking, active listening and understanding',
    icon: '🗣️', 
    category: 'comm' 
  },
  { 
    id: 'personal_growth', 
    ur: 'ذاتی نمو و ڈسپلن', 
    en: 'Personal Growth', 
    descUr: 'وقت، عادات، ڈسپلن اور خود کو سنوارنا',
    descEn: 'Time, habits, discipline and self-improvement',
    icon: '🌱', 
    category: 'growth' 
  },
  { 
    id: 'family_social', 
    ur: 'خاندان و معاشرہ', 
    en: 'Family & Society', 
    descUr: 'خاندان، تعلقات اور سماجی ذمہ داریاں',
    descEn: 'Family, relationships and social responsibilities',
    icon: '🏡', 
    category: 'social' 
  },
  { 
    id: 'community_service', 
    ur: 'سماجی و برادری کی خدمت', 
    en: 'Community Service', 
    descUr: 'مقامی مسائل کو سمجھنا اور برادری کی خدمت',
    descEn: 'Understanding local issues and serving the community',
    icon: '🤝', 
    category: 'community' 
  },
];

export interface DiagnosticQuestion {
  id: string;
  questionUrdu: string;
  questionEn: string;
  categoryUrdu: string;
  categoryEn: string;
  options: {
    points: number;
    textUrdu: string;
    textEn: string;
  }[];
}

const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'q1_digital',
    categoryUrdu: 'ڈیجیٹل مہارت',
    categoryEn: 'Digital Skills',
    questionUrdu: '۱. موبائل اور کمپیوٹر کے استعمال میں آپ کا موجودہ تجربہ کتنا ہے؟',
    questionEn: '1. What is your current comfort level with phones & computers?',
    options: [
      { points: 1, textUrdu: 'صرف بنیادی فون کالز، واٹس ایپ اور ویڈیوز دیکھتا ہوں (ابتدائی)', textEn: 'Basic phone calls, WhatsApp & video viewing (Beginner)' },
      { points: 2, textUrdu: 'ایپس انسٹال کرنا، سرچ کرنا، اور فارم پُر کرنا جانتا ہوں (درمیانہ)', textEn: 'Can install apps, search web, and fill forms (Intermediate)' },
      { points: 3, textUrdu: 'کمپیوٹر، ایڈیٹنگ، ٹائپنگ اور مختلف ڈیجیٹل ٹولز روانی سے استعمال کرتا ہوں (ماہر)', textEn: 'Fluent in PC tools, editing, typing & software (Advanced)' }
    ]
  },
  {
    id: 'q2_career_skills',
    categoryUrdu: 'عملی ہنر',
    categoryEn: 'Practical Skills',
    questionUrdu: '۲. عملی ہنر، ٹیکنالوجی یا روزگار کے لیے نئی مہارتیں سیکھنے کا سابقہ تجربہ:',
    questionEn: '2. Your past experience learning practical skills or career tools:',
    options: [
      { points: 1, textUrdu: 'پہلی بار باقاعدہ منظم ہنر یا کورس شروع کر رہا ہوں', textEn: 'Starting structured skill learning for the first time' },
      { points: 2, textUrdu: 'کچھ بنیادی معلومات یوٹیوب یا دوستوں سے سیکھی ہیں', textEn: 'Learned some fundamentals through YouTube or peers' },
      { points: 3, textUrdu: 'پہلے بھی کورسز کیے ہیں یا عملی طور پر کام کر چکا ہوں', textEn: 'Completed courses or have active work experience' }
    ]
  },
  {
    id: 'q3_ethics_quran',
    categoryUrdu: 'اخلاق و کردار',
    categoryEn: 'Character & Values',
    questionUrdu: '۳. اسلامی تعلیمات، اخلاقِ حسنہ اور روزمرہ زندگی میں ان کے نفاذ کی فہم:',
    questionEn: '3. Understanding and practice of Islamic values & high moral character:',
    options: [
      { points: 1, textUrdu: 'بنیادی معلومات ہیں، مزید تفصیل سے سمجھنا چاہتا ہوں', textEn: 'Basic knowledge, eager to learn practical depth' },
      { points: 2, textUrdu: 'بنیادی فرائض اور اچھے اخلاق کو اپنانے کی روزانہ کوشش کرتا ہوں', textEn: 'Practicing duties and striving daily for noble manners' },
      { points: 3, textUrdu: 'مستند حکمتوں کے ساتھ معاشرے اور خاندان کی رہنمائی کا جذبہ رکھتا ہوں', textEn: 'Deep understanding with desire to guide and inspire others' }
    ]
  },
  {
    id: 'q4_problem_solving',
    categoryUrdu: 'منصوبہ بندی',
    categoryEn: 'Planning & Problem Solving',
    questionUrdu: '۴. اپنے کاموں کی منصوبہ بندی اور نئے چیلنجز حل کرنے کی خود اعتمادی:',
    questionEn: '4. Confidence in planning your goals and solving new challenges:',
    options: [
      { points: 1, textUrdu: 'ہر مرحلے پر قدم بہ قدم رہنمائی اور رہبر کی ضرورت ہوتی ہے', textEn: 'Need step-by-step guidance at each stage' },
      { points: 2, textUrdu: 'واضح ہدایات مل جائیں تو خود کام مکمل کر لیتا ہوں', textEn: 'Can complete tasks independently once guided' },
      { points: 3, textUrdu: 'نئے مسائل کا خود حل سوچتا ہوں اور ذاتی اہداف سیٹ کرتا ہوں', textEn: 'Can brainstorm solutions independently and set targets' }
    ]
  },
  {
    id: 'q5_community',
    categoryUrdu: 'خدمتِ خلق',
    categoryEn: 'Community Contribution',
    questionUrdu: '۵. اپنے علاقے، خاندان اور برادری کی مدد کرنے میں آپ کی دلچسپی:',
    questionEn: '5. Interest in helping and uplifting family & local community:',
    options: [
      { points: 1, textUrdu: 'ابھی اپنی ذات اور تعلیمی بنیادوں کو سنوارنا چاہتا ہوں', textEn: 'Currently focusing on personal foundation first' },
      { points: 2, textUrdu: 'گھر والوں اور قریبی ساتھیوں کے کام آنے کی کوشش کرتا ہوں', textEn: 'Regularly assist family and close friends' },
      { points: 3, textUrdu: 'مقامی فلاحی پروجیکٹس اور برادری کی خدمت میں فعال حصہ لینا چاہتا ہوں', textEn: 'Active in community service and local leadership' }
    ]
  }
];

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  language,
  initialProfile,
  onSaveProfile,
  onClose,
  onLanguageChange,
}) => {
  const [currentLang, setCurrentLang] = useState<Language>(language || 'dual');

  useEffect(() => {
    if (language) {
      setCurrentLang(language);
    }
  }, [language]);

  const handleSwitchLanguage = (newLang: Language) => {
    setCurrentLang(newLang);
    try {
      localStorage.setItem('seekho_language', newLang);
    } catch (e) {
      console.warn('Failed to save language to localStorage:', e);
    }
    if (onLanguageChange) {
      onLanguageChange(newLang);
    }
  };

  const isUrduOnly = currentLang === 'ur';
  const isDual = currentLang === 'dual' || !currentLang;
  const isEnOnly = currentLang === 'en';

  const speechState = useActiveSpeech();

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Step 1: Basic Profile Info
  const [name, setName] = useState(initialProfile.name && initialProfile.name !== 'علی احمد' ? initialProfile.name : '');
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(initialProfile.ageGroup || '16-25');
  const [village, setVillage] = useState(initialProfile.village || 'ڈوبے، برنالہ، آزاد کشمیر');
  const [role, setRole] = useState(initialProfile.role || 'سیکھنے والے');

  // Step 2: 10 Goals (Multi-select)
  const [selectedGoals, setSelectedGoals] = useState<string[]>(() => {
    if (initialProfile.interests && initialProfile.interests.length > 0) {
      return initialProfile.interests;
    }
    return ['skills', 'quran_character'];
  });

  // Step 3: Daily Time & Device
  const [dailyMinutes, setDailyMinutes] = useState<number>(20);
  const [device, setDevice] = useState<'smartphone' | 'laptop' | 'shared'>('smartphone');

  // Step 4: Diagnostic Assessment Answers
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, number>>({
    q1_digital: 1,
    q2_career_skills: 1,
    q3_ethics_quran: 2,
    q4_problem_solving: 1,
    q5_community: 2,
  });

  // Toggle Goal selection
  const toggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      if (selectedGoals.length > 1) {
        setSelectedGoals(selectedGoals.filter(g => g !== goalId));
      }
    } else {
      setSelectedGoals([...selectedGoals, goalId]);
    }
  };

  // Calculate Level from Assessment
  const scoresArray = Object.values(assessmentAnswers) as number[];
  const totalScore = scoresArray.reduce((acc, val) => acc + (Number(val) || 0), 0);
  const calculatedLevel: 'Beginner' | 'Intermediate' | 'Advanced' = 
    totalScore <= 7 ? 'Beginner' : totalScore <= 11 ? 'Intermediate' : 'Advanced';

  const levelLabels = {
    Beginner: { ur: 'ابتدائی (Beginner)', en: 'Beginner', badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
    Intermediate: { ur: 'درمیانہ (Intermediate)', en: 'Intermediate', badgeColor: 'bg-teal-100 text-teal-900 border-teal-300' },
    Advanced: { ur: 'ایڈوانسڈ (Advanced)', en: 'Advanced', badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300' },
  };

  const ageGroups: { id: AgeGroup; labelUrdu: string; labelEn: string; descUrdu: string; descEn: string }[] = [
    { id: '10-15', labelUrdu: '۱۰ تا ۱۵ سال', labelEn: '10–15 yrs', descUrdu: 'اسکول، بنیادی ڈیجیٹل ہنر اور اخلاق', descEn: 'School, logic, basic digital skills & ethics' },
    { id: '16-25', labelUrdu: '۱۶ تا ۲۵ سال', labelEn: '16–25 yrs', descUrdu: 'کالج، روزگار، AI، کینوا اور فری لانسنگ', descEn: 'Career, AI, Canva & freelancing' },
    { id: '26-35', labelUrdu: '۲۶ تا ۳۵ سال', labelEn: '26–35 yrs', descUrdu: 'کاروبار، زراعت اور گھریلو معیشت', descEn: 'Enterprise, farming & household growth' },
    { id: '36-60', labelUrdu: '۳۶ تا ۶۰ سال', labelEn: '36–60 yrs', descUrdu: 'ڈیجیٹل آسانی، مالی نظم اور برادری رہنمائی', descEn: 'Digital ease, financial planning & guidance' },
    { id: '61-70', labelUrdu: '۶۱ تا ۷۰ سال', labelEn: '61–70 yrs', descUrdu: 'بزرگ استاد، لائف لانگ لرنر اور روایتی حکمت', descEn: 'Lifelong learner, mentor & traditional wisdom' },
    { id: '70+', labelUrdu: '۷۰ سال سے زائد', labelEn: '70+ yrs', descUrdu: 'دانائی کا خزانہ اور نسلوں کی رہنمائی', descEn: 'Wisdom keeper, elder guide & storyteller' },
  ];

  // Primary Goal text from selected goals
  const primaryGoalLabelUrdu = ONBOARDING_GOALS
    .filter(g => selectedGoals.includes(g.id))
    .map(g => g.ur)
    .slice(0, 3)
    .join('، ');

  const primaryGoalLabelEn = ONBOARDING_GOALS
    .filter(g => selectedGoals.includes(g.id))
    .map(g => g.en)
    .slice(0, 3)
    .join(', ');

  // Handle Save & Finish Onboarding
  const handleFinishOnboarding = () => {
    const finalName = name.trim() || (!isEnOnly ? 'علی احمد' : 'Learner');
    const updatedProfile: UserProfile = {
      ...initialProfile,
      name: finalName,
      ageGroup,
      village: village.trim() || initialProfile.village,
      role: role.trim() || initialProfile.role,
      goals: primaryGoalLabelUrdu,
      learningGoals: selectedGoals,
      interests: selectedGoals,
      timePerDay: `${dailyMinutes} منٹ`,
      preferredLanguage: currentLang,
      device: device === 'smartphone' ? 'Smartphone' : device === 'laptop' ? 'Laptop' : 'Shared Phone',
      hasCompletedAssessment: true,
      completedAssessment: true,
      currentLevel: calculatedLevel,
      assessmentScore: totalScore,
      assessmentAnswers,
      activeSkillPathId: selectedGoals.includes('skills') ? 'ai-fundamentals-all-ages' : 'canva-for-everyone',
      streakDays: Math.max(initialProfile.streakDays || 0, 1),
      points: Math.max(initialProfile.points || 0, 25),
      dailyJourneyProgress: {
        lastCompletedDate: undefined,
        consecutiveJourneyDays: 0,
        completedJourneyCount: 0,
        timePreference: dailyMinutes <= 15 ? '10m' : dailyMinutes <= 25 ? '20m' : dailyMinutes <= 45 ? '30m' : '60m+',
        history: initialProfile.dailyJourneyProgress?.history || {},
      }
    };

    // Save to local storage for persistence across reloads
    try {
      localStorage.setItem('seekho_onboarding_completed', 'true');
      localStorage.setItem('seekho_user_profile', JSON.stringify(updatedProfile));
    } catch (e) {
      console.warn('LocalStorage save error in onboarding:', e);
    }

    onSaveProfile(updatedProfile);
  };

  const ArrowIcon = isEnOnly ? ArrowRight : ArrowLeft;
  const BackArrowIcon = isEnOnly ? ArrowLeft : ArrowRight;

  return (
    <div id="onboarding-modal-overlay" className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fade-in">
      <div 
        id="onboarding-modal-container"
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh] my-auto"
      >
        {/* Top Header */}
        <header className="px-5 sm:px-8 py-4 bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-inner shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              {/* Step indicator */}
              <div className="flex items-center gap-2 mb-0.5">
                <span className="urdu-badge px-3 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 text-[13px] sm:text-[14px] font-bold font-arabic">
                  {isDual
                    ? `مرحلہ ${step} از ۵ / Step ${step} of 5`
                    : isUrduOnly
                    ? `مرحلہ ${step} از ۵`
                    : `Step ${step} of 5`}
                </span>
                <span className="text-[13px] sm:text-[14px] text-emerald-200/90 font-medium hidden sm:inline font-arabic">
                  {step === 1 && (isDual ? 'بنیادی تعارف (Profile Basics)' : isUrduOnly ? 'بنیادی تعارف' : 'Profile Basics')}
                  {step === 2 && (isDual ? 'سیکھنے کے مقاصد (Learning Goals)' : isUrduOnly ? 'سیکھنے کے مقاصد' : 'Learning Goals')}
                  {step === 3 && (isDual ? 'روزانہ وقت و ترجیح (Daily Time & Device)' : isUrduOnly ? 'روزانہ وقت و ترجیح' : 'Daily Time & Device')}
                  {step === 4 && (isDual ? 'تشخیصی سوالات (Diagnostic Assessment)' : isUrduOnly ? 'مختصر تشخیصی سوالات' : 'Diagnostic Assessment')}
                  {step === 5 && (isDual ? 'ذاتی روڈ میپ (Personal Roadmap)' : isUrduOnly ? 'ذاتی لرننگ پلان و روڈ میپ' : 'Personal Learning Roadmap')}
                </span>
              </div>

              {/* Main Step Heading */}
              <h2 className="text-lg sm:text-2xl font-black text-white tracking-normal font-arabic leading-snug">
                {step === 1 && (
                  isDual ? (
                    <span>سیکھو میں خوش آمدید — اپنا تعارف کروائیں <span className="text-sm sm:text-base font-sans font-medium text-emerald-200/90 block sm:inline">(Welcome to Seekho)</span></span>
                  ) : isUrduOnly ? 'سیکھو میں خوش آمدید — اپنا تعارف کروائیں' : 'Welcome to Seekho — Let’s Get Started'
                )}
                {step === 2 && (
                  isDual ? (
                    <span>آپ کیا سیکھنا اور حاصل کرنا چاہتے ہیں؟ <span className="text-sm sm:text-base font-sans font-medium text-emerald-200/90 block sm:inline">(What do you want to learn & achieve?)</span></span>
                  ) : isUrduOnly ? 'آپ کیا سیکھنا چاہتے ہیں؟' : 'What do you want to learn & achieve?'
                )}
                {step === 3 && (
                  isDual ? (
                    <span>روزانہ وقت اور ڈیوائس کا انتخاب <span className="text-sm sm:text-base font-sans font-medium text-emerald-200/90 block sm:inline">(Daily Time & Device Selection)</span></span>
                  ) : isUrduOnly ? 'روزانہ وقت اور ڈیوائس کا انتخاب' : 'Daily Time & Device Selection'
                )}
                {step === 4 && (
                  isDual ? (
                    <span>مختصر تشخیصی سوالات <span className="text-sm sm:text-base font-sans font-medium text-emerald-200/90 block sm:inline">(Diagnostic Assessment)</span></span>
                  ) : isUrduOnly ? 'مختصر تشخیصی سوالات (لیول تعین)' : 'Diagnostic Assessment (Level Check)'
                )}
                {step === 5 && (
                  isDual ? (
                    <span>آپ کا ذاتی لرننگ پلان اور روڈ میپ تیار ہے! <span className="text-sm sm:text-base font-sans font-medium text-emerald-200/90 block sm:inline">(Your Learning Path is Ready!)</span></span>
                  ) : isUrduOnly ? 'آپ کا ذاتی لرننگ پلان اور روڈ میپ تیار ہے!' : 'Your Seekho Learning Path is Ready!'
                )}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <AudioReaderButton
              id={`onboarding-step-tts-${step}`}
              text={
                step === 1
                  ? isEnOnly
                    ? 'Step 1 of 5. Welcome to Seekho. Introduce yourself. Please provide your name, select your age group, village or city, and current role or occupation.'
                    : 'مرحلہ ۱ از ۵۔ سیکھو میں خوش آمدید۔ اپنا تعارف کروائیں۔ برائے مہربانی اپنا مبارک نام، عمر کا گروپ، گاؤں یا شہر، اور موجودہ پیشہ یا شعبہ منتخب کریں۔'
                  : step === 2
                  ? isEnOnly
                    ? 'Step 2 of 5. What do you want to learn and achieve? Select one or more goals that matter to you, such as Quran and character, practical skills, career, or personal growth.'
                    : 'مرحلہ ۲ از ۵۔ آپ کیا سیکھنا اور حاصل کرنا چاہتے ہیں؟ ان اہداف کو منتخب کریں جو آپ کے لیے اہم ہیں، جیسے قرآن و کردار، عملی مہارتیں، کیریئر، کاروبار یا ذاتی نمو۔'
                  : step === 3
                  ? isEnOnly
                    ? 'Step 3 of 5. Daily Time and Device Selection. Choose your daily committed minutes and primary learning device.'
                    : 'مرحلہ ۳ از ۵۔ روزانہ وقت اور ڈیوائس کا انتخاب۔ روزانہ سیکھنے کا وقت اور اپنی بنیادی ڈیوائس کا انتخاب کریں۔'
                  : step === 4
                  ? isEnOnly
                    ? 'Step 4 of 5. Diagnostic assessment to personalize your starting level and skill recommendation.'
                    : 'مرحلہ ۴ از ۵۔ مختصر تشخیصی سوالات۔ آپ کی موجودہ صلاحیت کے مطابق مناسب سطح اور کورسز کے انتخاب کے لیے جواب دیں۔'
                  : isEnOnly
                  ? 'Step 5 of 5. Your personalized Seekho learning path and roadmap is ready!'
                  : 'مرحلہ ۵ از ۵۔ آپ کا ذاتی لرننگ پلان اور روڈ میپ تیار ہے!'
              }
              language={currentLang}
              variant="header"
              size="md"
              showLabel={true}
              labelUr="پڑھ کے سنائیں"
              labelEn="Listen"
            />

            <button
              id="onboarding-close-btn"
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition shrink-0"
              title={isEnOnly ? 'Close' : 'بند کریں / Close'}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Top Sticky Language Switcher Bar */}
        <div className="bg-slate-900 text-white px-5 sm:px-8 py-2.5 border-b border-emerald-500/30 flex items-center justify-between gap-3 flex-wrap shadow-xs">
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-emerald-400" />
            <span className="text-xs sm:text-sm font-bold font-arabic text-emerald-100">
              {isDual ? '🌐 زبان منتخب کریں (Select Language):' : isUrduOnly ? '🌐 زبان منتخب کریں:' : '🌐 Select Language:'}
            </span>
          </div>

          <div className="inline-flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700/80 shadow-inner">
            <button
              id="onboarding-lang-ur"
              type="button"
              onClick={() => handleSwitchLanguage('ur')}
              className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-bold font-arabic transition-all ${
                currentLang === 'ur'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/70'
              }`}
            >
              اردو
            </button>
            <button
              id="onboarding-lang-en"
              type="button"
              onClick={() => handleSwitchLanguage('en')}
              className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-bold font-sans transition-all ${
                currentLang === 'en'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/70'
              }`}
            >
              English
            </button>
            <button
              id="onboarding-lang-dual"
              type="button"
              onClick={() => handleSwitchLanguage('dual')}
              className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-bold font-arabic transition-all ${
                currentLang === 'dual'
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/70'
              }`}
            >
              Dual (دونوں)
            </button>
          </div>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-slate-100 h-2 shrink-0">
          <div 
            className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 h-2 transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>

        {/* Modal Scrollable Body */}
        <main className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6">

          {/* ========================================================================= */}
          {/* STEP 1: Basic Info & Age Cohort */}
          {/* ========================================================================= */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              {/* Screen Title Card with Inline Audio Speaker */}
              <div 
                id="onboarding-step1-title-card"
                className={`p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                  speechState.isActive && speechState.currentId === 'onboarding-title-speaker'
                    ? 'ring-2 ring-emerald-500 bg-emerald-50/90 border-emerald-400 shadow-md'
                    : 'bg-slate-50/90 border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold font-arabic text-lg shrink-0">
                    ۱
                  </div>
                  <div>
                    <h3 className="text-[17px] sm:text-[19px] font-black text-slate-900 font-arabic leading-snug">
                      {isDual ? (
                        <span>سیکھو میں خوش آمدید — اپنا تعارف کروائیں <span className="text-xs sm:text-sm font-sans font-medium text-slate-500 block sm:inline">(Welcome to Seekho — Introduce Yourself)</span></span>
                      ) : isUrduOnly ? (
                        'سیکھو میں خوش آمدید — اپنا تعارف کروائیں'
                      ) : (
                        'Welcome to Seekho — Introduce Yourself'
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-arabic">
                      {isDual ? 'مرحلہ ۱ از ۵: بنیادی معلومات' : isUrduOnly ? 'مرحلہ ۱ از ۵: بنیادی معلومات' : 'Step 1 of 5: Basic Profile Information'}
                    </p>
                  </div>
                </div>

                <FieldAudioSpeaker
                  id="onboarding-title-speaker"
                  text={
                    isEnOnly
                      ? 'Welcome to Seekho. Introduce yourself. Step 1 of 5.'
                      : 'سیکھو میں خوش آمدید — اپنا تعارف کروائیں۔ مرحلہ ۱ از ۵۔'
                  }
                  language={currentLang}
                  size="md"
                  titleUr="عنوان سنیں"
                  titleEn="Listen to Title"
                />
              </div>

              {/* Sub-banner with Inline Audio Speaker */}
              <div 
                id="onboarding-step1-banner"
                className={`p-4 sm:p-5 rounded-2xl border flex items-start justify-between gap-3.5 transition-all duration-300 shadow-2xs ${
                  speechState.isActive && speechState.currentId === 'onboarding-subbanner-speaker'
                    ? 'ring-2 ring-emerald-500 bg-emerald-100 border-emerald-400 shadow-md'
                    : 'bg-emerald-50/90 border-emerald-200'
                }`}
              >
                <div className="flex items-start gap-3.5 flex-1">
                  <Sparkles className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="urdu-body text-[16px] sm:text-[17.5px] text-emerald-950 font-bold leading-[1.8] font-arabic">
                      {isEnOnly
                        ? 'Seekho will create a personalized practical learning path tailored to your age, interest, and background.'
                        : 'سیکھو آپ کی عمر، دلچسپی اور پس منظر کے مطابق ذاتی ہنر اور عملی ترقی کا راستہ بنائے گا۔'}
                    </p>
                    {isDual && (
                      <p className="text-[13px] sm:text-[14px] text-emerald-800 font-sans font-medium">
                        (Seekho will create a personalized practical learning path tailored to your age, interest, and background.)
                      </p>
                    )}
                  </div>
                </div>

                <FieldAudioSpeaker
                  id="onboarding-subbanner-speaker"
                  text={
                    isEnOnly
                      ? 'Seekho will create a personalized practical learning path tailored to your age, interest, and background.'
                      : 'سیکھو آپ کی عمر، دلچسپی اور پس منظر کے مطابق ذاتی ہنر اور عملی ترقی کا راستہ بنائے گا۔'
                  }
                  language={currentLang}
                  size="md"
                  titleUr="ہدایت سنیں"
                  titleEn="Listen to Banner Guidance"
                />
              </div>

              {/* Field 1: Name */}
              <div 
                id="onboarding-step1-name-field"
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 space-y-2 ${
                  speechState.isActive && speechState.currentId === 'onboarding-label-name-speaker'
                    ? 'ring-2 ring-emerald-500 bg-emerald-50/60 border-emerald-300 shadow-sm'
                    : 'border-slate-100 bg-white/60'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <label className="urdu-label text-[16px] sm:text-[17px] font-bold text-slate-900 font-arabic flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-700" />
                    <span>
                      {isDual ? (
                        <span>آپ کا مبارک نام: <span className="text-[14px] text-slate-500 font-sans font-normal">(Your Full Name)</span></span>
                      ) : isUrduOnly ? (
                        'آپ کا مبارک نام:'
                      ) : (
                        'Your Full Name:'
                      )}
                    </span>
                  </label>

                  <FieldAudioSpeaker
                    id="onboarding-label-name-speaker"
                    text={isEnOnly ? 'Your Full Name:' : 'آپ کا مبارک نام:'}
                    language={currentLang}
                    size="sm"
                    titleUr="نام کا لیبل سنیں"
                    titleEn="Listen to Name Label"
                  />
                </div>

                <div className="relative flex items-center gap-2">
                  <input
                    id="onboarding-name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isEnOnly ? 'e.g., Ali Ahmed / Fatima Bibi' : 'مثال: علی احمد / فاطمہ بی بی (e.g. Ali Ahmed)'}
                    className="urdu-input flex-1 bg-slate-50 min-h-[52px] px-4 py-3 rounded-2xl border border-slate-300 text-[17px] sm:text-[18px] font-medium font-arabic focus:border-emerald-600 focus:bg-white focus:outline-none transition shadow-2xs"
                  />
                  <VoiceInputButton
                    language={currentLang}
                    size="md"
                    tooltipUr="بول کر اپنا نام درج کریں"
                    tooltipEn="Speak your name"
                    onTranscript={(text) => setName(text)}
                  />
                </div>
              </div>

              {/* Field 2: Age Group Selection */}
              <div 
                id="onboarding-step1-age-field"
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 space-y-3 ${
                  speechState.isActive && speechState.currentId === 'onboarding-label-age-speaker'
                    ? 'ring-2 ring-emerald-500 bg-emerald-50/60 border-emerald-300 shadow-sm'
                    : 'border-slate-100 bg-white/60'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <label className="urdu-label text-[16px] sm:text-[17px] font-bold text-slate-900 font-arabic flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-700" />
                    <span>
                      {isDual ? (
                        <span>اپنی عمر کا گروپ منتخب کریں: <span className="text-[14px] text-slate-500 font-sans font-normal">(Select Your Age Group)</span></span>
                      ) : isUrduOnly ? (
                        'اپنی عمر کا گروپ منتخب کریں:'
                      ) : (
                        'Select Your Age Group:'
                      )}
                    </span>
                  </label>

                  <FieldAudioSpeaker
                    id="onboarding-label-age-speaker"
                    text={isEnOnly ? 'Select your age group:' : 'اپنی عمر کا گروپ منتخب کریں:'}
                    language={currentLang}
                    size="sm"
                    titleUr="عمر کا لیبل سنیں"
                    titleEn="Listen to Age Group Label"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ageGroups.map((ag) => {
                    const isSelected = ageGroup === ag.id;
                    const speakerId = `onboarding-age-${ag.id}-speaker`;
                    const isAgeSpeaking = speechState.isActive && speechState.currentId === speakerId;
                    return (
                      <div
                        key={ag.id}
                        id={`onboarding-age-card-${ag.id}`}
                        className={`min-h-[72px] p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-start justify-between gap-2.5 ${
                          isAgeSpeaking
                            ? 'ring-2 ring-emerald-500 bg-emerald-100/95 border-emerald-500 shadow-md'
                            : isSelected
                            ? 'bg-emerald-50/90 border-emerald-600 text-emerald-950 font-bold shadow-xs'
                            : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setAgeGroup(ag.id)}
                          className="flex-1 flex items-start gap-3 text-start"
                        >
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <span className="text-xs font-black">✓</span>}
                          </div>
                          <div>
                            <div className="text-[18px] sm:text-[19px] font-black font-arabic text-slate-900 flex items-baseline gap-2">
                              <span>{isEnOnly ? ag.labelEn : ag.labelUrdu}</span>
                              {isDual && <span className="text-xs font-sans text-slate-500 font-medium">({ag.labelEn})</span>}
                            </div>
                            <div className="text-[14px] sm:text-[15px] text-slate-600 font-medium mt-1 leading-[1.6] font-arabic">
                              {isEnOnly ? ag.descEn : ag.descUrdu}
                              {isDual && <span className="block text-xs font-sans text-slate-400 font-normal mt-0.5">({ag.descEn})</span>}
                            </div>
                          </div>
                        </button>

                        <FieldAudioSpeaker
                          id={speakerId}
                          text={
                            isEnOnly
                              ? `${ag.labelEn}: ${ag.descEn}`
                              : `${ag.labelUrdu}: ${ag.descUrdu}`
                          }
                          language={currentLang}
                          size="xs"
                          titleUr={`${ag.labelUrdu} کی تفصیل سنیں`}
                          titleEn={`Listen to ${ag.labelEn}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Fields 3 & 4: Village & Role with Speech Input & Audio Speakers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field 3: Village / City */}
                <div 
                  id="onboarding-step1-village-field"
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 space-y-2 ${
                    speechState.isActive && speechState.currentId === 'onboarding-label-village-speaker'
                      ? 'ring-2 ring-emerald-500 bg-emerald-50/60 border-emerald-300 shadow-sm'
                      : 'border-slate-100 bg-white/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <label className="urdu-label text-[15px] sm:text-[16px] font-bold text-slate-800 font-arabic flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-700" />
                      <span>
                        {isDual ? (
                          <span>گاؤں یا شہر کا نام: <span className="text-xs text-slate-500 font-sans font-normal">(Village / City)</span></span>
                        ) : isUrduOnly ? (
                          'گاؤں یا شہر کا نام:'
                        ) : (
                          'Village / City:'
                        )}
                      </span>
                    </label>

                    <FieldAudioSpeaker
                      id="onboarding-label-village-speaker"
                      text={isEnOnly ? 'Village or City Name:' : 'گاؤں یا شہر کا نام:'}
                      language={currentLang}
                      size="sm"
                      titleUr="شہر یا گاؤں کا لیبل سنیں"
                      titleEn="Listen to Village Label"
                    />
                  </div>

                  <div className="relative flex items-center gap-2">
                    <input
                      id="onboarding-village-input"
                      type="text"
                      value={village}
                      onChange={(e) => setVillage(e.target.value)}
                      placeholder={isEnOnly ? 'e.g., Barnala, Azad Kashmir / Lahore' : 'ڈوبے، برنالہ، آزاد کشمیر (e.g. Barnala)'}
                      className="urdu-input flex-1 bg-slate-50 min-h-[52px] px-4 py-3 rounded-2xl border border-slate-300 text-[17px] sm:text-[18px] font-medium font-arabic focus:border-emerald-600 focus:bg-white focus:outline-none transition shadow-2xs"
                    />
                    <VoiceInputButton
                      language={currentLang}
                      size="md"
                      tooltipUr="بول کر گاؤں یا شہر لکھیں"
                      tooltipEn="Speak village or city"
                      onTranscript={(text) => setVillage(text)}
                    />
                  </div>
                </div>

                {/* Field 4: Role / Occupation */}
                <div 
                  id="onboarding-step1-role-field"
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 space-y-2 ${
                    speechState.isActive && speechState.currentId === 'onboarding-label-role-speaker'
                      ? 'ring-2 ring-emerald-500 bg-emerald-50/60 border-emerald-300 shadow-sm'
                      : 'border-slate-100 bg-white/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <label className="urdu-label text-[15px] sm:text-[16px] font-bold text-slate-800 font-arabic flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-emerald-700" />
                      <span>
                        {isDual ? (
                          <span>پیشہ یا شعبہ: <span className="text-xs text-slate-500 font-sans font-normal">(Current Role / Occupation)</span></span>
                        ) : isUrduOnly ? (
                          'پیشہ یا شعبہ:'
                        ) : (
                          'Current Role / Occupation:'
                        )}
                      </span>
                    </label>

                    <FieldAudioSpeaker
                      id="onboarding-label-role-speaker"
                      text={isEnOnly ? 'Current Role or Occupation:' : 'پیشہ یا شعبہ:'}
                      language={currentLang}
                      size="sm"
                      titleUr="پیشہ یا شعبہ کا لیبل سنیں"
                      titleEn="Listen to Role Label"
                    />
                  </div>

                  <div className="relative flex items-center gap-2">
                    <input
                      id="onboarding-role-input"
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder={isEnOnly ? 'Student / Farmer / Shopkeeper' : 'طالب علم / کسان / دکاندار / بزرگ (e.g. Student)'}
                      className="urdu-input flex-1 bg-slate-50 min-h-[52px] px-4 py-3 rounded-2xl border border-slate-300 text-[17px] sm:text-[18px] font-medium font-arabic focus:border-emerald-600 focus:bg-white focus:outline-none transition shadow-2xs"
                    />
                    <VoiceInputButton
                      language={currentLang}
                      size="md"
                      tooltipUr="بول کر اپنا پیشہ یا تعلیم لکھیں"
                      tooltipEn="Speak role or occupation"
                      onTranscript={(text) => setRole(text)}
                    />
                  </div>
                </div>
              </div>

              {/* Step 1 Next Action Button with Audio Speaker */}
              <div 
                id="onboarding-step1-action-bar"
                className={`flex items-center justify-end gap-3 pt-3 p-2 rounded-2xl transition-all duration-300 ${
                  speechState.isActive && speechState.currentId === 'onboarding-next-btn-speaker'
                    ? 'ring-2 ring-emerald-500 bg-emerald-50/70 shadow-sm'
                    : ''
                }`}
              >
                <FieldAudioSpeaker
                  id="onboarding-next-btn-speaker"
                  text={
                    isEnOnly
                      ? 'Next: Select your learning goals'
                      : 'اگلا: اپنے مقاصد منتخب کریں'
                  }
                  language={currentLang}
                  size="md"
                  titleUr="بٹن کی ہدایت سنیں"
                  titleEn="Listen to Next Button Action"
                />

                <button
                  id="onboarding-step1-next-btn"
                  type="button"
                  onClick={() => setStep(2)}
                  className="urdu-btn min-h-[52px] px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-black text-[17px] sm:text-[18px] shadow-md hover:shadow-lg flex items-center gap-2.5 transition active:scale-98 font-arabic"
                >
                  <span>
                    {isDual
                      ? 'اگلا: اپنے مقاصد منتخب کریں / Next: Learning Goals'
                      : isUrduOnly
                      ? 'اگلا: اپنے مقاصد منتخب کریں'
                      : 'Next: Learning Goals'}
                  </span>
                  <ArrowIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: Learning Goals (10 Options with clear practical Urdu + English) */}
          {/* ========================================================================= */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between gap-3 flex-wrap bg-emerald-50/70 p-4 sm:p-5 rounded-2xl border border-emerald-200">
                <div>
                  <h3 className="urdu-question text-[20px] sm:text-[23px] font-black text-slate-900 font-arabic leading-[1.5]">
                    {isDual ? (
                      <span>آپ کیا سیکھنا اور حاصل کرنا چاہتے ہیں؟ <span className="text-[16px] font-sans font-medium text-slate-600 block sm:inline">(What do you want to learn & achieve?)</span></span>
                    ) : isUrduOnly ? (
                      'آپ کیا سیکھنا اور حاصل کرنا چاہتے ہیں؟'
                    ) : (
                      'What do you want to learn & achieve?'
                    )}
                  </h3>
                  <p className="urdu-secondary text-[15px] sm:text-[16px] text-slate-700 font-arabic leading-[1.7] mt-1">
                    {isDual ? (
                      <span>ان اہداف کو منتخب کریں جو آپ کے لیے اہم ہیں <span className="text-[13.5px] font-sans font-normal text-slate-500">(Select one or more goals that matter to you)</span></span>
                    ) : isUrduOnly ? (
                      'ان اہداف کو منتخب کریں جو آپ کے لیے اہم ہیں (ایک یا زیادہ):'
                    ) : (
                      'Select one or more goals that matter to you:'
                    )}
                  </p>
                </div>
                <span className="text-[14px] sm:text-[15px] font-black text-emerald-950 bg-emerald-200/80 px-4 py-1.5 rounded-full border border-emerald-300 font-arabic shrink-0">
                  {isDual
                    ? `${selectedGoals.length} منتخب شدہ (${selectedGoals.length} Selected)`
                    : isUrduOnly
                    ? `آپ نے ${selectedGoals.length} مقاصد منتخب کیے ہیں`
                    : `${selectedGoals.length} goals selected`}
                </span>
              </div>

              {/* 10 Goal Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ONBOARDING_GOALS.map((g) => {
                  const isSelected = selectedGoals.includes(g.id);
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => toggleGoal(g.id)}
                      className={`min-h-[82px] p-4 rounded-2xl border-2 text-start transition flex items-start justify-between gap-3.5 ${
                        isSelected
                          ? 'bg-emerald-50/90 border-emerald-600 text-emerald-950 shadow-xs ring-1 ring-emerald-500/20'
                          : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="flex items-start gap-3.5 flex-1 min-w-0">
                        <span className="text-3xl shrink-0 mt-0.5 leading-none">{g.icon}</span>
                        <div className="flex-1 min-w-0 space-y-1">
                          {/* Urdu Title Primary (18px-20px), English Subdued (14px-15px) */}
                          <div className="flex flex-col">
                            <h4 className="text-[18px] sm:text-[20px] font-black text-slate-900 font-arabic leading-snug">
                              {isEnOnly ? g.en : g.ur}
                            </h4>
                            {(isDual || isUrduOnly) && (
                              <span className="text-[14px] sm:text-[15px] font-sans font-semibold text-slate-600/90 tracking-normal">
                                {g.en}
                              </span>
                            )}
                          </div>
                          
                          {/* Descriptions */}
                          <div className="pt-0.5">
                            {!isEnOnly && (
                              <p className="text-[14.5px] sm:text-[15.5px] text-slate-700 font-medium font-arabic leading-[1.6]">
                                {g.descUr}
                              </p>
                            )}
                            {isDual ? (
                              <p className="text-[13px] sm:text-[14px] text-slate-500 font-sans font-normal leading-normal">
                                ({g.descEn})
                              </p>
                            ) : isEnOnly ? (
                              <p className="text-[14px] sm:text-[15px] text-slate-600 font-medium">
                                {g.descEn}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 ${
                        isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Bar */}
              <div className="flex items-center justify-between pt-3 gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="urdu-btn min-h-[50px] px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl text-[16px] sm:text-[17px] font-bold flex items-center gap-2 transition font-arabic"
                >
                  <BackArrowIcon className="w-5 h-5" />
                  <span>{isDual ? 'واپس / Back' : isUrduOnly ? 'واپس' : 'Back'}</span>
                </button>

                <button
                  id="onboarding-step2-next-btn"
                  type="button"
                  onClick={() => setStep(3)}
                  className="urdu-btn min-h-[52px] px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-black text-[17px] sm:text-[18px] shadow-md flex items-center gap-2.5 transition font-arabic"
                >
                  <span>
                    {isDual
                      ? 'اگلا: روزانہ کا وقت / Next: Daily Time'
                      : isUrduOnly
                      ? 'اگلا: روزانہ کا وقت'
                      : 'Next: Daily Time'}
                  </span>
                  <ArrowIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: Daily Time & Device */}
          {/* ========================================================================= */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3.5">
                <label className="urdu-question text-[20px] sm:text-[23px] font-black text-slate-900 font-arabic leading-[1.5] block">
                  {isDual ? (
                    <span>۱. آپ روزانہ سیکھنے کے لیے کتنا وقت دینا چاہتے ہیں؟ <span className="text-[16px] font-sans font-medium text-slate-600 block sm:inline">(How much daily time can you commit?)</span></span>
                  ) : isUrduOnly ? (
                    '۱. آپ روزانہ سیکھنے کے لیے کتنا وقت دینا چاہتے ہیں؟'
                  ) : (
                    '1. How much time can you comfortably commit daily?'
                  )}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { mins: 15, labelUr: '۱۵ منٹ', labelEn: '15 Mins', badgeUr: 'تیز اور آسان', badgeEn: 'Quick & Light' },
                    { mins: 20, labelUr: '۲۰ منٹ', labelEn: '20 Mins', badgeUr: 'تجویز کردہ ⭐', badgeEn: 'Recommended ⭐' },
                    { mins: 30, labelUr: '۳۰ منٹ', labelEn: '30 Mins', badgeUr: 'گہری پیش رفت', badgeEn: 'Steady Depth' },
                    { mins: 60, labelUr: '۱ گھنٹہ+', labelEn: '1 Hour+', badgeUr: 'باقاعدہ لگن', badgeEn: 'Mastery' },
                  ].map((t) => (
                    <button
                      key={t.mins}
                      type="button"
                      onClick={() => setDailyMinutes(t.mins)}
                      className={`min-h-[96px] p-4 rounded-2xl border-2 text-center transition flex flex-col items-center justify-center gap-1.5 ${
                        dailyMinutes === t.mins
                          ? 'bg-emerald-700 text-white border-emerald-800 shadow-md ring-2 ring-emerald-500/30'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-slate-50'
                      }`}
                    >
                      <Clock className={`w-5 h-5 ${dailyMinutes === t.mins ? 'text-emerald-200' : 'text-slate-400'}`} />
                      <div className="flex flex-col items-center leading-tight">
                        <span className="text-[18px] sm:text-[19px] font-black font-arabic">
                          {isEnOnly ? t.labelEn : t.labelUr}
                        </span>
                        {isDual && (
                          <span className={`text-[12px] font-sans font-medium ${dailyMinutes === t.mins ? 'text-emerald-200' : 'text-slate-500'}`}>
                            ({t.labelEn})
                          </span>
                        )}
                      </div>
                      <span className={`text-[12px] sm:text-[13px] font-bold px-2.5 py-0.5 rounded-full font-arabic ${
                        dailyMinutes === t.mins ? 'bg-white/20 text-emerald-100' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {isEnOnly ? t.badgeEn : t.badgeUr}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3.5">
                <label className="urdu-question text-[20px] sm:text-[23px] font-black text-slate-900 font-arabic leading-[1.5] block">
                  {isDual ? (
                    <span>۲. آپ کے پاس کون سی ڈیوائس دستیاب ہے؟ <span className="text-[16px] font-sans font-medium text-slate-600 block sm:inline">(Which device do you have access to?)</span></span>
                  ) : isUrduOnly ? (
                    '۲. آپ کے پاس کون سی ڈیوائس دستیاب ہے؟'
                  ) : (
                    '2. Which device do you have access to?'
                  )}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'smartphone', ur: 'صرف اسمارٹ فون', en: 'Smartphone only', icon: Smartphone },
                    { id: 'laptop', ur: 'لیپ ٹاپ / کمپیوٹر', en: 'Laptop / PC', icon: Laptop },
                    { id: 'shared', ur: 'گھر کا مشترکہ فون', en: 'Shared family phone', icon: Heart },
                  ].map((d) => {
                    const IconComponent = d.icon;
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setDevice(d.id as any)}
                        className={`min-h-[72px] p-4 rounded-2xl border-2 text-center transition flex items-center justify-center gap-3 ${
                          device === d.id
                            ? 'bg-emerald-50/90 border-emerald-600 text-emerald-950 font-black shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-slate-50 font-semibold'
                        }`}
                      >
                        <IconComponent className="w-5 h-5 text-emerald-700 shrink-0" />
                        <div className="flex flex-col text-start">
                          <span className="text-[17px] sm:text-[18px] font-black font-arabic leading-snug">
                            {isEnOnly ? d.en : d.ur}
                          </span>
                          {isDual && (
                            <span className="text-xs font-sans text-slate-500 font-medium">
                              ({d.en})
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="urdu-btn min-h-[50px] px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl text-[16px] sm:text-[17px] font-bold flex items-center gap-2 transition font-arabic"
                >
                  <BackArrowIcon className="w-5 h-5" />
                  <span>{isDual ? 'واپس / Back' : isUrduOnly ? 'واپس' : 'Back'}</span>
                </button>

                <button
                  id="onboarding-step3-next-btn"
                  type="button"
                  onClick={() => setStep(4)}
                  className="urdu-btn min-h-[52px] px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-black text-[17px] sm:text-[18px] shadow-md flex items-center gap-2.5 transition font-arabic"
                >
                  <span>
                    {isDual
                      ? 'اگلا: مختصر سوالات / Next: Diagnostic Assessment'
                      : isUrduOnly
                      ? 'اگلا: مختصر سوالات'
                      : 'Next: Diagnostic Assessment'}
                  </span>
                  <ArrowIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: Diagnostic Assessment (5 Questions) */}
          {/* ========================================================================= */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-5 rounded-2xl border border-emerald-500/20 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-300" />
                  <h3 className="text-[19px] sm:text-[21px] font-black text-emerald-300 font-arabic">
                    {isDual
                      ? 'مختصر تشخیصی سوالات (Diagnostic Assessment)'
                      : isUrduOnly
                      ? 'مختصر تشخیصی سوالات (۵ سوالات)'
                      : 'Diagnostic Skill Assessment (5 Questions)'}
                  </h3>
                </div>
                <p className="urdu-secondary text-[15px] sm:text-[16px] text-emerald-100 font-arabic leading-[1.7]">
                  {isEnOnly
                    ? 'These questions help calculate your initial learning tier accurately.'
                    : 'یہ مختصر سوالات آپ کی موجودہ سمجھ کی جانچ کر کے آپ کا ابتدائی لیول طے کریں گے۔'}
                </p>
                {isDual && (
                  <p className="text-[13px] text-emerald-200/80 font-sans">
                    (Quickly answer these 5 questions to calibrate your personalized learning journey.)
                  </p>
                )}
              </div>

              <div className="space-y-6">
                {DIAGNOSTIC_QUESTIONS.map((q) => (
                  <div key={q.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3.5 shadow-2xs">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="urdu-question text-[19px] sm:text-[21px] font-black text-slate-900 font-arabic leading-[1.6]">
                          {isEnOnly ? q.questionEn : q.questionUrdu}
                        </h4>
                        {isDual && (
                          <p className="text-[14px] text-slate-600 font-sans font-medium mt-0.5">
                            ({q.questionEn})
                          </p>
                        )}
                      </div>
                      <span className="text-[13px] sm:text-[14px] font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full shrink-0 font-arabic">
                        {isDual ? `${q.categoryUrdu} (${q.categoryEn})` : isUrduOnly ? q.categoryUrdu : q.categoryEn}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {q.options.map((opt) => {
                        const isChosen = assessmentAnswers[q.id] === opt.points;
                        return (
                          <button
                            key={opt.points}
                            type="button"
                            onClick={() => setAssessmentAnswers(prev => ({ ...prev, [q.id]: opt.points }))}
                            className={`w-full min-h-[58px] p-4 rounded-2xl border-2 text-start transition flex items-center justify-between gap-3.5 ${
                              isChosen
                                ? 'bg-emerald-50/90 border-emerald-600 text-emerald-950 font-black shadow-xs ring-1 ring-emerald-500/30'
                                : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-100/90 text-slate-800 font-medium'
                            }`}
                          >
                            <div className="flex flex-col flex-1">
                              <span className="text-[16px] sm:text-[17.5px] leading-[1.7] font-arabic">
                                {isEnOnly ? opt.textEn : opt.textUrdu}
                              </span>
                              {isDual && (
                                <span className="text-[13px] text-slate-500 font-sans font-normal mt-0.5">
                                  ({opt.textEn})
                                </span>
                              )}
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              isChosen ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                            }`}>
                              {isChosen && <span className="text-[11px] font-black">✓</span>}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="urdu-btn min-h-[50px] px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl text-[16px] sm:text-[17px] font-bold flex items-center gap-2 transition font-arabic"
                >
                  <BackArrowIcon className="w-5 h-5" />
                  <span>{isDual ? 'واپس / Back' : isUrduOnly ? 'واپس' : 'Back'}</span>
                </button>

                <button
                  id="onboarding-step4-next-btn"
                  type="button"
                  onClick={() => setStep(5)}
                  className="urdu-btn min-h-[52px] px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-black text-[17px] sm:text-[18px] shadow-md flex items-center gap-2.5 transition font-arabic"
                >
                  <span>
                    {isDual
                      ? 'اگلا: ذاتی روڈ میپ دیکھیں / Next: View Roadmap'
                      : isUrduOnly
                      ? 'اگلا: ذاتی روڈ میپ دیکھیں'
                      : 'Generate Roadmap'}
                  </span>
                  <ArrowIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 5: Personalized Learning Path & 5-Stage Roadmap */}
          {/* ========================================================================= */}
          {step === 5 && (
            <div className="space-y-6 animate-fade-in">
              {/* Target Plan Header Card */}
              <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-5 sm:p-7 border border-emerald-500/30 shadow-xl space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-6 h-6 text-emerald-400 animate-spin" />
                    <span className="text-[16px] sm:text-[17px] font-black text-emerald-300 font-arabic">
                      {isDual
                        ? 'آپ کا سیکھو لرننگ پلان تیار ہے (Your Seekho Learning Path is Ready)'
                        : isUrduOnly
                        ? 'آپ کا Seekho Learning Path تیار ہے'
                        : 'Your Seekho Learning Path is Ready'}
                    </span>
                  </div>
                  <span className={`text-[14px] sm:text-[15px] font-black px-3.5 py-1 rounded-full border ${levelLabels[calculatedLevel].badgeColor} font-arabic`}>
                    {isEnOnly ? levelLabels[calculatedLevel].en : levelLabels[calculatedLevel].ur}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10">
                    <div className="text-[13px] sm:text-[14px] text-emerald-200 font-bold font-arabic">
                      {isDual ? 'بنیادی مقاصد (Goals):' : isUrduOnly ? 'بنیادی مقاصد:' : 'Primary Goals:'}
                    </div>
                    <div className="text-[16px] sm:text-[17.5px] font-black text-white font-arabic mt-1 leading-snug">
                      {isEnOnly ? primaryGoalLabelEn : primaryGoalLabelUrdu}
                    </div>
                  </div>

                  <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10">
                    <div className="text-[13px] sm:text-[14px] text-emerald-200 font-bold font-arabic">
                      {isDual ? 'موجودہ لیول (Level):' : isUrduOnly ? 'موجودہ لیول:' : 'Current Level:'}
                    </div>
                    <div className="text-[16px] sm:text-[17.5px] font-black text-white font-arabic mt-1">
                      {isEnOnly ? calculatedLevel : levelLabels[calculatedLevel].ur.split(' ')[0]}
                    </div>
                  </div>

                  <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10">
                    <div className="text-[13px] sm:text-[14px] text-emerald-200 font-bold font-arabic">
                      {isDual ? 'ہفتہ وار ہدف (Weekly):' : isUrduOnly ? 'ہفتہ وار ہدف:' : 'Weekly Target:'}
                    </div>
                    <div className="text-[16px] sm:text-[17.5px] font-black text-emerald-300 font-arabic mt-1">
                      {isEnOnly ? '5 Lessons' : '۵ اسباق (5 Lessons)'}
                    </div>
                  </div>

                  <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10">
                    <div className="text-[13px] sm:text-[14px] text-emerald-200 font-bold font-arabic">
                      {isDual ? 'روزانہ وقت (Daily):' : isUrduOnly ? 'روزانہ کا وقت:' : 'Daily Target:'}
                    </div>
                    <div className="text-[16px] sm:text-[17.5px] font-black text-amber-300 font-arabic mt-1">
                      {dailyMinutes} {isEnOnly ? 'Mins' : 'منٹ (Mins)'}
                    </div>
                  </div>
                </div>
              </div>

              {/* 5-Stage Personal Roadmap */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <h4 className="urdu-section-title text-[19px] sm:text-[22px] font-black text-slate-900 font-arabic">
                    {isDual
                      ? 'آپ کا ۵ مراحل پر مشتمل روڈ میپ (Your 5-Stage Personal Roadmap):'
                      : isUrduOnly
                      ? 'آپ کا ۵ مراحل پر مشتمل روڈ میپ:'
                      : 'Your 5-Stage Personal Roadmap:'}
                  </h4>
                  <span className="text-[13px] sm:text-[14px] text-emerald-900 font-bold bg-emerald-100 px-3 py-1 rounded-full font-arabic">
                    {isDual ? 'قدم بہ قدم ترقی (Step-by-Step)' : isUrduOnly ? 'قدم بہ قدم ترقی' : 'Step-by-Step Progress'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {[
                    { stage: '1', titleUr: 'بنیاد (Foundations)', titleEn: 'Foundations', descUr: 'بنیادی تصورات، اخلاقیات اور ڈیجیٹل آغاز', descEn: 'Core foundations, ethics & digital basics', icon: BookOpen, color: 'bg-emerald-50 border-emerald-300 text-emerald-950', badge: 'شروع (Start)' },
                    { stage: '2', titleUr: 'مہارت (Skill)', titleEn: 'Skill Acquisition', descUr: 'عملی اوزار، کینوا، AI اور تکنیک', descEn: 'Practical tools, Canva, AI & techniques', icon: Zap, color: 'bg-teal-50 border-teal-300 text-teal-950', badge: 'ہنر (Skill)' },
                    { stage: '3', titleUr: 'مشق (Practice)', titleEn: 'Active Practice', descUr: 'حقیقی روزمرہ مشق اور خود جانچ', descEn: 'Real daily practice & self-test', icon: Target, color: 'bg-blue-50 border-blue-300 text-blue-950', badge: 'مشق (Practice)' },
                    { stage: '4', titleUr: 'پروجیکٹ (Project)', titleEn: 'Applied Project', descUr: 'عملی پروجیکٹ اور پورٹ فولیو', descEn: 'Real projects & portfolio work', icon: Award, color: 'bg-purple-50 border-purple-300 text-purple-950', badge: 'پروجیکٹ (Project)' },
                    { stage: '5', titleUr: 'عملی دنیا (Real World)', titleEn: 'Real World Impact', descUr: 'خاندان، برادری اور روزگار میں اثر', descEn: 'Impact in family, community & livelihood', icon: Heart, color: 'bg-amber-50 border-amber-300 text-amber-950', badge: 'خدمت (Impact)' },
                  ].map((s) => {
                    return (
                      <div key={s.stage} className={`p-4 rounded-2xl border-2 ${s.color} flex flex-col justify-between space-y-2`}>
                        <div className="flex items-center justify-between">
                          <span className="w-7 h-7 rounded-xl bg-emerald-700 text-white text-[13px] font-black flex items-center justify-center">
                            {s.stage}
                          </span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white/80 border border-slate-200">
                            {s.badge}
                          </span>
                        </div>
                        <div>
                          <div className="text-[16px] sm:text-[17px] font-black font-arabic leading-snug">
                            {isEnOnly ? s.titleEn : s.titleUr}
                          </div>
                          <div className="text-[13px] sm:text-[14px] text-slate-600 font-arabic mt-1 leading-[1.6]">
                            {isEnOnly ? s.descEn : s.descUr}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Seekho Methodology Note */}
              <div className="p-4 bg-emerald-50/90 rounded-2xl border border-emerald-200 text-[15px] sm:text-[16px] text-emerald-950 font-arabic flex items-center gap-3 leading-[1.7]">
                <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
                <div>
                  <strong>{isDual ? 'سیکھو کا روزانہ فارمولا (Daily Formula):' : isUrduOnly ? 'سیکھو کا روزانہ فارمولا:' : 'Daily Seekho Formula:'}</strong>{' '}
                  {isDual
                    ? 'سبق (Learn) ← مشق (Practice) ← عمل (Act) ← خود احتسابی (Reflect)'
                    : isUrduOnly
                    ? 'سبق (Learn) ← مشق (Practice) ← عمل (Act) ← خود احتسابی (Reflect)'
                    : 'Learn (Lesson) → Practice (Activity) → Act (Mission) → Reflect (Values)'}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="urdu-btn min-h-[50px] px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl text-[16px] sm:text-[17px] font-bold flex items-center gap-2 transition font-arabic"
                >
                  <BackArrowIcon className="w-5 h-5" />
                  <span>{isDual ? 'واپس / Back' : isUrduOnly ? 'واپس' : 'Back'}</span>
                </button>

                <button
                  id="onboarding-save-finish-btn"
                  type="button"
                  onClick={handleFinishOnboarding}
                  className="urdu-btn min-h-[54px] px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-700 text-white rounded-2xl font-black text-[18px] sm:text-[19px] shadow-lg shadow-emerald-600/30 flex items-center gap-3 transition transform active:scale-98 font-arabic"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-200 shrink-0" />
                  <span>
                    {isDual
                      ? 'میرا سیکھنے کا سفر شروع کریں! / Start My Learning Journey!'
                      : isUrduOnly
                      ? 'میرا سیکھنے کا سفر شروع کریں!'
                      : 'Start My Learning Journey!'}
                  </span>
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default OnboardingModal;

