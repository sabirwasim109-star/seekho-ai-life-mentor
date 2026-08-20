import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  BookOpen, 
  Wrench, 
  Heart, 
  Users, 
  Compass, 
  Check, 
  Award,
  ArrowRight,
  ArrowLeft,
  Flame,
  Globe,
  Home,
  UserCheck
} from 'lucide-react';
import { Language, UserProfile, RecommendedSkill, Course } from '../types';
import { generatePersonalizedRecommendations } from '../data/assessmentData';
import { COURSES_DATA } from '../data/mockData';

interface MyActionPlanSectionProps {
  language: Language;
  userProfile: UserProfile;
  onSelectCourse?: (course: Course) => void;
  onStepCompleted?: (stepNumber: number) => void;
}

interface ActionStep {
  stepNumber: number;
  titleUrdu: string;
  titleEn: string;
  taskUrdu: string;
  taskEn: string;
  icon: any;
  points: number;
}

export const MyActionPlanSection: React.FC<MyActionPlanSectionProps> = ({
  language,
  userProfile,
  onSelectCourse,
  onStepCompleted,
}) => {
  const isUrdu = language === 'ur';

  // 1. Resolve currently active or recommended skill
  const activeSkill: RecommendedSkill = React.useMemo(() => {
    if (userProfile.assessmentData) {
      const recs = generatePersonalizedRecommendations(
        userProfile.assessmentData,
        userProfile.name
      );
      const found = recs.find((r) => r.id === userProfile.activeSkillPathId);
      if (found) return found;
      if (recs.length > 0) return recs[0];
    }
    // Fallback recommendation
    const defaultRecs = generatePersonalizedRecommendations({
      ageGroup: userProfile.ageGroup || '16-25',
      educationLevel: userProfile.educationLevel || 'Matric',
      currentOccupation: userProfile.role || 'طالب علم',
      currentSkills: userProfile.currentSkills || ['موبائل استعمال'],
      interests: ['AI & Technology', 'Graphic Design', 'Business'],
      dailyTime: userProfile.timePerDay || '30 منٹ',
      device: userProfile.device || 'اسمارٹ فون',
      primaryGoal: userProfile.goals || 'Skill سیکھنا',
      learningStyle: 'مرحلہ وار آسان اسباق',
      sixMonthGoal: 'ایک نئی ڈیجیٹل اسکل پر عبور',
    }, userProfile.name);
    return defaultRecs[0];
  }, [userProfile]);

  const skillTitle = isUrdu ? activeSkill.titleUrdu : activeSkill.titleEn;
  const skillCategory = activeSkill.category;

  // 2. Generate customized practical tasks for each of the 5 requested steps
  const actionSteps: ActionStep[] = React.useMemo(() => {
    let task1Urdu = `"${activeSkill.titleUrdu}" کا بنیادی تعارفی سبق دیکھیں اور 3 اہم باتیں کاپی میں نوٹ کریں۔`;
    let task1En = `Watch the foundational lesson for "${activeSkill.titleEn}" and note 3 key takeaways.`;

    let task2Urdu = `موبائل یا کمپیوٹر پر 10 سے 15 منٹ خود مشق کریں اور بنیادی ٹولز آزما کر دیکھیں۔`;
    let task2En = `Practice hands-on for 10-15 minutes on your mobile or computer to test the basic tools.`;

    let task3Urdu = `ایک چھوٹا مکمل پروجیکٹ بنائیں (مثلاً ایک مکمل ڈیزائن، کھاتہ، دستاویز یا عملی نمونہ)۔`;
    let task3En = `Build a small complete project (e.g. one full flyer, ledger, document, or sample setup).`;

    let task4Urdu = `اس تیار کردہ کام کو اپنے گھر، دکان، ملازمت یا روزمرہ زندگی کے کسی کام میں استعمال کریں۔`;
    let task4En = `Apply this completed work to a real-life situation at your home, shop, job, or daily routine.`;

    let task5Urdu = `اپنے خاندان، محلے یا کسی دوست کو یہ طریقہ سکھائیں یا ان کا کوئی کام اس مہارت سے حل کریں۔`;
    let task5En = `Teach this method to a family member, neighbor, or friend and help them solve a real task.`;

    // Skill-category specific refinement
    if (skillCategory === 'Creative Skills') {
      task1Urdu = 'کینوا (Canva) پر مفت اکاؤنٹ بنائیں اور پوسٹرز و بینرز کے بنیادی ٹولز کا سبق دیکھیں۔';
      task1En = 'Create a free Canva account and learn how to use basic templates and text tools.';
      task2Urdu = 'اپنے فون میں 15 منٹ مختلف فونٹس، رنگ اور بیک گراؤنڈ بدلنے کی مشق کریں۔';
      task2En = 'Spend 15 minutes trying out different fonts, colors, and backgrounds on your phone.';
      task3Urdu = 'کسی دکان، تقریب یا اعلان کے لیے ایک شاندار اور واضح پوسٹر خود تیار کریں۔';
      task3En = 'Create one complete, eye-catching flyer or banner for a local shop or announcement.';
      task4Urdu = 'اس پوسٹر کو واٹس ایپ اسٹیٹس پر لگائیں یا پرنٹ کر کے اصل جگہ استعمال کریں۔';
      task4En = 'Share the completed poster on WhatsApp status or print it for real use.';
      task5Urdu = 'محلے کے کسی دکاندار یا رشتہ دار کو فری پوسٹر بنا کر دیں اور انہیں کینوا کا بنیادی طریقہ بتائیں۔';
      task5En = 'Design a free flyer for a local shopkeeper or relative and guide them on Canva basics.';
    } else if (skillCategory === 'AI & Technology') {
      task1Urdu = 'چیٹ جی پی ٹی / جیمنائی کو اردو میں استعمال کرنے کا بنیادی طریقہ سیکھیں۔';
      task1En = 'Learn how to ask questions and prompt ChatGPT/Gemini in clear Urdu or English.';
      task2Urdu = 'AI سے روزمرہ زندگی کے 3 مختلف سوالات (درخواست، حساب یا معلومات) پوچھ کر مشق کریں۔';
      task2En = 'Practice by asking the AI 3 practical daily queries (drafting an email, math, or research).';
      task3Urdu = 'ایک مکمل باقاعدہ درخواست، سی وی (CV) یا کاروباری منصوبہ AI کی مدد سے لکھیں۔';
      task3En = 'Draft a complete formal application, resume/CV, or business idea with AI assistance.';
      task4Urdu = 'اس درخواست کو اپنے اصل سرکاری یا نجی کام کے لیے استعمال میں لائیں۔';
      task4En = 'Use this drafted document for an actual official or personal requirement.';
      task5Urdu = 'اپنے کسی بھائی یا دوست کو AI سے درخواست لکھنا اور ہوم ورک سمجھنا سکھائیں۔';
      task5En = 'Show a family member or friend how to use AI to write letters or clarify doubts.';
    } else if (skillCategory === 'Business & Freelancing') {
      task1Urdu = 'ڈیجیٹل کھاتہ بک اور منافع و نقصان کا حساب رکھنے کا بنیادی طریقہ سیکھیں۔';
      task1En = 'Learn the fundamentals of digital bookkeeping, cash flow, and profit tracking.';
      task2Urdu = 'ڈیجی کھاتہ یا کاپی پر 5 فرضی اندراجات (آمدنی اور خرچ) کی مشق کریں۔';
      task2En = 'Practice entering 5 sample debit/credit entries in a digital ledger or notebook.';
      task3Urdu = 'اپنے گھر کے ماہانہ بجٹ یا دکان کی روزانہ کی آمدن کا ایک مکمل کھاتہ تیار کریں۔';
      task3En = 'Build a complete weekly or monthly budget tracker for your home or store.';
      task4Urdu = 'آج کے دن کے تمام اصل اخراجات اور بچت کو اس کھاتے میں حقیقی طور پر درج کریں۔';
      task4En = 'Track your actual daily expenditures and income using this system today.';
      task5Urdu = 'محلے کے کسی ساتھی یا دکاندار کو ادھار اور آمدنی لکھنے کا آسان طریقہ سکھائیں۔';
      task5En = 'Teach a nearby vendor or relative how to record accounts digitally.';
    } else if (skillCategory === 'Agriculture & Local Skills') {
      task1Urdu = 'کچن گارڈننگ یا پودوں کی قدرتی نگہداشت اور پانی کی بچت کا سبق دیکھیں۔';
      task1En = 'Learn basic kitchen gardening, organic fertilizing, and water conservation.';
      task2Urdu = '10 منٹ مٹی تیار کرنے، کھاد ملانے یا پرانے گملوں کو صاف کرنے کی مشق کریں۔';
      task2En = 'Spend 10 minutes preparing soil, mixing organic compost, or cleaning planters.';
      task3Urdu = 'چھت یا کیاری میں کم از کم 2 گملوں یا ڈبوں میں سبزیاں یا جڑی بوٹیاں اگائیں۔';
      task3En = 'Plant seeds in at least 2 pots or recycled containers on your rooftop or yard.';
      task4Urdu = 'روزانہ صبح اور شام پودوں کو باقاعدگی سے پانی دیں اور تروتازہ سبزی حاصل کریں۔';
      task4En = 'Care for the plants daily and harvest fresh home-grown produce for your kitchen.';
      task5Urdu = 'اپنے پڑوسی کو نامیاتی پودا یا بیج تحفے میں دیں اور انہیں اگانے کا طریقہ بتائیں۔';
      task5En = 'Gift an organic sapling or seeds to a neighbor and share your gardening tips.';
    }

    return [
      {
        stepNumber: 1,
        titleUrdu: '۱. سیکھیں',
        titleEn: '1. Learn',
        taskUrdu: task1Urdu,
        taskEn: task1En,
        icon: BookOpen,
        points: 20,
      },
      {
        stepNumber: 2,
        titleUrdu: '۲. مشق کریں',
        titleEn: '2. Practice',
        taskUrdu: task2Urdu,
        taskEn: task2En,
        icon: Wrench,
        points: 25,
      },
      {
        stepNumber: 3,
        titleUrdu: '۳. ایک چھوٹا Project بنائیں',
        titleEn: '3. Build a Small Project',
        taskUrdu: task3Urdu,
        taskEn: task3En,
        icon: Sparkles,
        points: 35,
      },
      {
        stepNumber: 4,
        titleUrdu: '۴. اپنی حقیقی زندگی میں استعمال کریں',
        titleEn: '4. Use in Real Life',
        taskUrdu: task4Urdu,
        taskEn: task4En,
        icon: Compass,
        points: 40,
      },
      {
        stepNumber: 5,
        titleUrdu: '۵. کسی دوسرے شخص کی مدد کریں',
        titleEn: '5. Help Someone Else',
        taskUrdu: task5Urdu,
        taskEn: task5En,
        icon: Heart,
        points: 50,
      },
    ];
  }, [activeSkill, skillCategory]);

  // 3. Local persistence of completed action plan steps
  const storageKey = `seekho_action_plan_steps_${activeSkill.id}`;
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return [1]; // Step 1 completed by default as initial progress
  });

  const [selectedPurpose, setSelectedPurpose] = useState<string>('self');

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(completedSteps));
    } catch (e) {
      // ignore
    }
  }, [completedSteps, storageKey]);

  const handleToggleStep = (stepNumber: number) => {
    setCompletedSteps((prev) => {
      let updated: number[];
      if (prev.includes(stepNumber)) {
        updated = prev.filter((s) => s !== stepNumber);
      } else {
        updated = [...prev, stepNumber];
        if (onStepCompleted) onStepCompleted(stepNumber);
      }
      return updated;
    });
  };

  const totalSteps = 5;
  const completedCount = completedSteps.length;
  const progressPercent = Math.round((completedCount / totalSteps) * 100);

  const matchingCourse = COURSES_DATA.find((c) => c.id === activeSkill.courseId) || COURSES_DATA[0];

  // 4 Purpose options
  const purposeOptions = [
    {
      id: 'self',
      titleUrdu: 'اپنے لیے فائدہ',
      titleEn: 'Benefit for Myself',
      icon: UserCheck,
      color: 'from-amber-500/20 to-orange-500/20 border-amber-400 text-amber-900',
      badgeColor: 'bg-amber-500 text-white',
      descUrdu: isUrdu ? activeSkill.realLifePurpose.forSelfUrdu : activeSkill.realLifePurpose.forSelfEn,
      bulletUrdu: 'ذاتی خود اعتمادی، ڈیجیٹل آزادی اور باعزت آمدنی میں اضافہ۔',
      bulletEn: 'Personal growth, digital independence, and new earning potential.',
    },
    {
      id: 'family',
      titleUrdu: 'اپنے خاندان کے لیے فائدہ',
      titleEn: 'Benefit for My Family',
      icon: Home,
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-400 text-emerald-900',
      badgeColor: 'bg-emerald-600 text-white',
      descUrdu: isUrdu ? activeSkill.realLifePurpose.forFamilyUrdu : activeSkill.realLifePurpose.forFamilyEn,
      bulletUrdu: 'گھریلو اخراجات کی بچت، بچوں کی تعلیم اور والدین کی ڈیجیٹل مدد۔',
      bulletEn: 'Saving household expenses, educating children, and helping elders.',
    },
    {
      id: 'community',
      titleUrdu: 'اپنے گاؤں/علاقے کے لیے فائدہ',
      titleEn: 'Benefit for My Village / Area',
      icon: Users,
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-400 text-cyan-900',
      badgeColor: 'bg-cyan-600 text-white',
      descUrdu: isUrdu ? activeSkill.realLifePurpose.forCommunityUrdu : activeSkill.realLifePurpose.forCommunityEn,
      bulletUrdu: 'علاقائی مسائل کا مقامی حل، نوجوانوں کو ہنر سکھانا اور برادری کی خدمت۔',
      bulletEn: 'Solving village problems locally, training youth, and community service.',
    },
    {
      id: 'society',
      titleUrdu: 'معاشرے کے لیے فائدہ',
      titleEn: 'Benefit for Society',
      icon: Globe,
      color: 'from-rose-500/20 to-pink-500/20 border-rose-400 text-rose-900',
      badgeColor: 'bg-rose-600 text-white',
      descUrdu: isUrdu ? activeSkill.realLifePurpose.forWorldUrdu : activeSkill.realLifePurpose.forWorldEn,
      bulletUrdu: 'مثبت اور دیانتدارانہ علم کو عام کرنا اور ایک خوددار معاشرہ تشکیل دینا۔',
      bulletEn: 'Spreading constructive, ethical knowledge to build a self-reliant society.',
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-md space-y-6">
      {/* 1. Header with Active Skill Badge & Progress Indicator */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black flex items-center gap-1.5 font-arabic">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              {isUrdu ? 'عملی رہنمائی' : 'Practical Action Plan'}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
              {isUrdu ? activeSkill.difficultyUrdu : activeSkill.difficulty}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-arabic">
            {isUrdu ? 'میرا عملی منصوبہ' : 'My Action Plan'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-arabic mt-0.5">
            {isUrdu 
              ? `منتخب ہنر: ${skillTitle} کے ۵ آسان اور ٹھوس مراحل`
              : `Selected Skill: 5 simple & concrete steps for "${skillTitle}"`}
          </p>
        </div>

        {/* Progress Pill */}
        <div className="bg-slate-50 p-3 sm:p-3.5 rounded-2xl border border-slate-200 w-full sm:w-auto shrink-0 flex flex-col sm:items-end">
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full">
            <span className="text-xs font-black text-slate-700 font-arabic">
              {isUrdu ? `${completedCount} از ۵ مراحل مکمل` : `${completedCount} of 5 Steps Done`}
            </span>
            <span className="text-sm font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-lg">
              {progressPercent}%
            </span>
          </div>

          <div className="w-full sm:w-36 bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
            <div 
              className="bg-emerald-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 2. The 5 Steps Cards List */}
      <div className="space-y-3.5">
        {actionSteps.map((step) => {
          const isDone = completedSteps.includes(step.stepNumber);
          const StepIcon = step.icon;

          return (
            <div
              key={step.stepNumber}
              id={`action-plan-step-${step.stepNumber}`}
              className={`p-4 sm:p-5 rounded-2xl border-2 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                isDone
                  ? 'bg-emerald-50/50 border-emerald-500/80 shadow-2xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Step info & practical task */}
              <div className="flex items-start gap-3.5 flex-1">
                {/* Step badge / icon */}
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 transition ${
                    isDone
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {isDone ? <Check className="w-5 h-5 stroke-[3]" /> : <StepIcon className="w-5 h-5" />}
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 font-arabic">
                      {isUrdu ? step.titleUrdu : step.titleEn}
                    </h3>
                    {isDone && (
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-emerald-200 text-emerald-950 font-arabic">
                        {isUrdu ? 'مکمل شدہ ✓' : 'Completed ✓'}
                      </span>
                    )}
                  </div>

                  {/* One short practical task */}
                  <p className="text-xs sm:text-sm text-slate-700 font-arabic leading-relaxed">
                    <strong className="text-emerald-900 font-bold">
                      {isUrdu ? 'عملی کام: ' : 'Practical Task: '}
                    </strong>
                    {isUrdu ? step.taskUrdu : step.taskEn}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                {step.stepNumber === 1 && onSelectCourse && (
                  <button
                    type="button"
                    onClick={() => onSelectCourse(matchingCourse)}
                    className="flex-1 md:flex-initial px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition font-arabic"
                  >
                    {isUrdu ? 'سبق دیکھیں' : 'View Lesson'}
                  </button>
                )}

                {/* "مکمل ہوگیا" (Completed) Toggle Button */}
                <button
                  type="button"
                  id={`action-plan-btn-step-${step.stepNumber}`}
                  onClick={() => handleToggleStep(step.stepNumber)}
                  className={`flex-1 md:flex-initial px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-xs font-arabic ${
                    isDone
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                      : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300'
                  }`}
                >
                  {isDone ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                      <span>{isUrdu ? 'مکمل ہوگیا' : 'Completed'}</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 text-emerald-700" />
                      <span>{isUrdu ? 'مکمل ہوگیا' : 'Mark as Done'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. "میری Skill کا اصل مقصد" Section with 4 Clear Choices */}
      <div className="pt-6 mt-4 border-t-2 border-slate-100 space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-rose-500" />
          <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
            {isUrdu ? 'میری Skill کا اصل مقصد' : 'The True Purpose of My Skill'}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 font-arabic">
          {isUrdu
            ? 'سیکھو کا بنیادی فلسفہ علم کو عمل میں بدل کر خود اور دوسروں کی زندگی میں بہتری لانا ہے۔ ذیل میں دیکھیں کہ یہ ہنر آپ کے ۴ بڑے مقاصد کیسے پورے کرتا ہے:'
            : 'Explore the 4 key impact dimensions of your chosen skill:'}
        </p>

        {/* 4 Choices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {purposeOptions.map((opt) => {
            const isSelected = selectedPurpose === opt.id;
            const OptIcon = opt.icon;

            return (
              <div
                key={opt.id}
                id={`purpose-option-${opt.id}`}
                onClick={() => setSelectedPurpose(opt.id)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer select-none space-y-2 ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/60 shadow-xs'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs`}>
                      <OptIcon className="w-4 h-4 text-emerald-700" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 font-arabic">
                      {isUrdu ? opt.titleUrdu : opt.titleEn}
                    </h4>
                  </div>

                  <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-emerald-600 bg-emerald-600' : 'border-slate-300'
                  }`}>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </span>
                </div>

                <p className="text-xs text-slate-700 font-arabic leading-relaxed">
                  {opt.descUrdu}
                </p>

                <div className="text-[11px] font-bold text-emerald-900 bg-white/90 p-2 rounded-xl border border-emerald-200 font-arabic">
                  {isUrdu ? opt.bulletUrdu : opt.bulletEn}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
