import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Target, 
  Briefcase, 
  Heart, 
  Wrench, 
  User, 
  MapPin, 
  Bot, 
  Palette, 
  Store, 
  Sprout, 
  ShieldCheck, 
  GraduationCap, 
  MessageSquare, 
  Users, 
  Coins, 
  Building2, 
  Laptop,
  Check,
  ChevronRight,
  Flame,
  Award,
  Play
} from 'lucide-react';
import { 
  AgeGroup, 
  AssessmentData, 
  Language, 
  SkillCategory, 
  UserProfile, 
  RecommendedSkill 
} from '../types';
import { 
  EXISTING_SKILL_CATEGORIES, 
  INTERESTS_OPTIONS, 
  generatePersonalizedRecommendations 
} from '../data/assessmentData';
import { UI_TRANSLATIONS } from '../data/mockData';

interface AssessmentModalProps {
  language: Language;
  initialProfile: UserProfile;
  onSaveAndSelectSkill: (profile: UserProfile, selectedSkill?: RecommendedSkill) => void;
  onClose: () => void;
  onOpenAITeacherWithPrompt?: (prompt: string) => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  language,
  initialProfile,
  onSaveAndSelectSkill,
  onClose,
  onOpenAITeacherWithPrompt,
}) => {
  const t = UI_TRANSLATIONS[language];
  const isUrdu = language === 'ur';

  // 7 Core Assessment Steps
  const TOTAL_QUESTIONS = 7;
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showResultsView, setShowResultsView] = useState<boolean>(false);
  const [generatedSkills, setGeneratedSkills] = useState<RecommendedSkill[]>([]);
  const [selectedSkillForDetails, setSelectedSkillForDetails] = useState<RecommendedSkill | null>(null);

  // Community Purpose Selection (3 choices)
  const [selectedCommunityChoice, setSelectedCommunityChoice] = useState<'family' | 'village' | 'society'>('family');

  // Form states based strictly on requirements:
  // 1. Age group: 10–15, 16–25, 26–45, 46–60, 61–70, 70+
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(initialProfile.ageGroup || '16-25');

  // 2. Education: Primary, Middle, Matric, Intermediate, Higher Education, Self-taught
  const [educationLevel, setEducationLevel] = useState<string>(
    initialProfile.educationLevel || 'Matric'
  );

  // 3. Current occupation: Student, Worker, Farmer, Shopkeeper, Homemaker, Freelancer, Business owner, Retired, Other
  const [currentOccupation, setCurrentOccupation] = useState<string>('Student');

  // 4. Existing skills: Multiple selections from existing Skill categories
  const [existingSkills, setExistingSkills] = useState<string[]>(
    initialProfile.currentSkills && initialProfile.currentSkills.length > 0
      ? initialProfile.currentSkills
      : ['کمپیوٹر اور ڈیجیٹل بنیادی مہارتیں']
  );

  // 5. Interests: Multiple selections from specified list
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    initialProfile.interests && initialProfile.interests.length > 0
      ? (initialProfile.interests as string[])
      : ['AI', 'Technology', 'Business']
  );

  // 6. Daily learning time: 15 minutes, 30 minutes, 1 hour, 2+ hours
  const [dailyTime, setDailyTime] = useState<string>(
    initialProfile.timePerDay || '30 minutes'
  );

  // 7. Main goal: Learn a new skill, Find better work, Start a small business, Improve current work, Help my family, Help my community, Personal development
  const [primaryGoal, setPrimaryGoal] = useState<string>(
    initialProfile.goals || 'Learn a new skill'
  );

  // Optional Learner info to personalize name and certificates
  const [learnerName, setLearnerName] = useState<string>(initialProfile.name || '');
  const [learnerVillage, setLearnerVillage] = useState<string>(initialProfile.village || 'برنالہ، آزاد کشمیر');

  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;
  const BackArrowIcon = isUrdu ? ArrowRight : ArrowLeft;

  // Toggle Existing Skills (multi-select)
  const toggleExistingSkill = (skillName: string) => {
    if (existingSkills.includes(skillName)) {
      setExistingSkills(existingSkills.filter((s) => s !== skillName));
    } else {
      setExistingSkills([...existingSkills, skillName]);
    }
  };

  // Toggle Interests (multi-select)
  const toggleInterest = (interestId: string) => {
    if (selectedInterests.includes(interestId)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter((i) => i !== interestId));
      }
    } else {
      setSelectedInterests([...selectedInterests, interestId]);
    }
  };

  // Process assessment & generate top 3 recommendations
  const handleCalculateRecommendations = () => {
    const assessmentData: AssessmentData = {
      ageGroup,
      educationLevel,
      currentOccupation,
      currentSkills: existingSkills,
      interests: selectedInterests as SkillCategory[],
      dailyTime,
      device: 'Smartphone',
      primaryGoal,
      learningStyle: 'Practical',
      sixMonthGoal: primaryGoal,
      villageOrCity: learnerVillage,
      submittedAt: new Date().toISOString(),
    };

    const recommendations = generatePersonalizedRecommendations(
      assessmentData,
      learnerName.trim() || (isUrdu ? 'معزز ساتھی' : 'Learner')
    );

    setGeneratedSkills(recommendations);
    setSelectedSkillForDetails(recommendations[0] || null);
    setShowResultsView(true);
  };

  // Start learning selected skill
  const handleStartLearning = (skill: RecommendedSkill) => {
    const updatedProfile: UserProfile = {
      ...initialProfile,
      name: learnerName.trim() || initialProfile.name,
      village: learnerVillage.trim() || initialProfile.village,
      ageGroup,
      educationLevel,
      currentSkills: existingSkills,
      interests: selectedInterests,
      timePerDay: dailyTime,
      goals: primaryGoal,
      activeSkillPathId: skill.id,
      selectedSkill: skill,
      hasCompletedAssessment: true,
      lastAssessmentDate: new Date().toISOString(),
      enrolledCourseIds: initialProfile.enrolledCourseIds.includes(skill.courseId)
        ? initialProfile.enrolledCourseIds
        : [...initialProfile.enrolledCourseIds, skill.courseId],
    };

    onSaveAndSelectSkill(updatedProfile, skill);
  };

  // Render Icon dynamically
  const renderSkillIcon = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'Bot':
      case 'Sparkles':
        return <Bot className={className} />;
      case 'Laptop':
        return <Laptop className={className} />;
      case 'Palette':
        return <Palette className={className} />;
      case 'Store':
      case 'Briefcase':
        return <Store className={className} />;
      case 'Wrench':
        return <Wrench className={className} />;
      case 'Sprout':
        return <Sprout className={className} />;
      case 'Heart':
        return <Heart className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Users':
      case 'Building2':
        return <Users className={className} />;
      case 'Coins':
        return <Coins className={className} />;
      case 'MessageSquare':
      case 'Languages':
        return <MessageSquare className={className} />;
      default:
        return <GraduationCap className={className} />;
    }
  };

  return (
    <div id="assessment-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        id="assessment-modal-container" 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Top Header Bar */}
        <div id="assessment-header" className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-slate-100 bg-gradient-to-r from-emerald-800 via-emerald-900 to-teal-950 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-inner">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                {isUrdu ? 'سیکھو اسکل اسیسمنٹ اور روڈ میپ' : 'Seekho Skill Assessment & Roadmap'}
              </h2>
              <p className="text-xs text-emerald-200/90 font-medium">
                {showResultsView
                  ? isUrdu
                    ? 'آپ کی ضروریات کے مطابق تجویز کردہ ٹاپ ۳ ہنر'
                    : 'Your Top 3 Personalized Recommended Skills'
                  : isUrdu
                    ? `سوال ${currentStep} از ${TOTAL_QUESTIONS} — اپنی ترجیحات بتائیں`
                    : `Step ${currentStep} of ${TOTAL_QUESTIONS} — Tell us your goals`}
              </p>
            </div>
          </div>
          <button
            id="close-assessment-modal-btn"
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            title={isUrdu ? 'بند کریں' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (Only during questionnaire) */}
        {!showResultsView && (
          <div id="assessment-progress-bar" className="w-full bg-slate-100 h-2 shrink-0">
            <div
              className="bg-gradient-to-r from-emerald-600 to-teal-500 h-2 transition-all duration-300"
              style={{ width: `${(currentStep / TOTAL_QUESTIONS) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Scrollable Content Area */}
        <div id="assessment-content-area" className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          
          {/* ========================================================================= */}
          {/* 1. QUESTIONNAIRE VIEW (7 STEPS) */}
          {/* ========================================================================= */}
          {!showResultsView ? (
            <div id="assessment-question-wrapper" className="space-y-6">
              
              {/* Step 1: Age Group */}
              {currentStep === 1 && (
                <div id="step-age-group" className="space-y-5 animate-fade-in">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {isUrdu ? 'سوال نمبر ۱' : 'Question 1'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {isUrdu ? 'آپ کا عمر کا گروپ کیا ہے؟' : 'What is your age group?'}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {isUrdu 
                        ? 'سیکھو پر ۱۰ سال سے لے کر ۷۰+ سال تک ہر عمر کے لیے آسانی سے سمجھ آنے والے کورسز موجود ہیں۔'
                        : 'Seekho offers accessible, practical courses designed for learners of all ages.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { id: '10-15', ur: '۱۰–۱۵ سال', en: '10–15' },
                      { id: '16-25', ur: '۱۶–۲۵ سال', en: '16–25' },
                      { id: '26-45', ur: '۲۶–۴۵ سال', en: '26–45' },
                      { id: '46-60', ur: '۴۶–۶۰ سال', en: '46–60' },
                      { id: '61-70', ur: '۶۱–۷۰ سال', en: '61–70' },
                      { id: '70+', ur: '۷۰+ سال', en: '70+' },
                    ].map((opt) => {
                      const isSelected = ageGroup === opt.id;
                      return (
                        <button
                          key={opt.id}
                          id={`age-opt-${opt.id}`}
                          type="button"
                          onClick={() => setAgeGroup(opt.id as AgeGroup)}
                          className={`p-4 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 shadow-md font-bold'
                              : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700 font-medium'
                          }`}
                        >
                          <span className="text-base sm:text-lg">{isUrdu ? opt.ur : opt.en}</span>
                          {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Education Level */}
              {currentStep === 2 && (
                <div id="step-education" className="space-y-5 animate-fade-in">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {isUrdu ? 'سوال نمبر ۲' : 'Question 2'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {isUrdu ? 'آپ کی تعلیمی سطح کیا ہے؟' : 'What is your education level?'}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {isUrdu 
                        ? 'کورسز کو آپ کی تعلیمی سطح کے مطابق آسان اور قابل فہم بنایا جائے گا۔'
                        : 'We customize explanations to match your educational comfort.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'Primary', ur: 'پرائمری (Primary)', en: 'Primary' },
                      { id: 'Middle', ur: 'مڈل (Middle)', en: 'Middle' },
                      { id: 'Matric', ur: 'میٹرک (Matric)', en: 'Matric' },
                      { id: 'Intermediate', ur: 'انٹرمیڈیٹ (Intermediate)', en: 'Intermediate' },
                      { id: 'Higher Education', ur: 'اعلیٰ تعلیم (Higher Education)', en: 'Higher Education' },
                      { id: 'Self-taught', ur: 'خود سیکھا ہوا / عملی تجربہ (Self-taught)', en: 'Self-taught' },
                    ].map((opt) => {
                      const isSelected = educationLevel === opt.id;
                      return (
                        <button
                          key={opt.id}
                          id={`edu-opt-${opt.id}`}
                          type="button"
                          onClick={() => setEducationLevel(opt.id)}
                          className={`p-4 rounded-2xl border-2 text-start transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 shadow-md font-bold'
                              : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700 font-medium'
                          }`}
                        >
                          <span className="text-base">{isUrdu ? opt.ur : opt.en}</span>
                          {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Current Occupation */}
              {currentStep === 3 && (
                <div id="step-occupation" className="space-y-5 animate-fade-in">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {isUrdu ? 'سوال نمبر ۳' : 'Question 3'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {isUrdu ? 'آپ کا موجودہ پیشہ یا مصروفیت کیا ہے؟' : 'What is your current occupation?'}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {isUrdu 
                        ? 'آپ کے کام سے مطابقت رکھنے والے عملی ہنر تجویز کیے جائیں گے۔'
                        : 'We will recommend skills directly relevant to your daily routine.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'Student', ur: 'طالب علم (Student)', en: 'Student', icon: GraduationCap },
                      { id: 'Worker', ur: 'ورکر / ملازم (Worker)', en: 'Worker', icon: Briefcase },
                      { id: 'Farmer', ur: 'کسان / زمیندار (Farmer)', en: 'Farmer', icon: Sprout },
                      { id: 'Shopkeeper', ur: 'دکاندار (Shopkeeper)', en: 'Shopkeeper', icon: Store },
                      { id: 'Homemaker', ur: 'گھریلو خاتون (Homemaker)', en: 'Homemaker', icon: Heart },
                      { id: 'Freelancer', ur: 'فری لانسنگ (Freelancer)', en: 'Freelancer', icon: Laptop },
                      { id: 'Business owner', ur: 'کاروباری مالک (Business owner)', en: 'Business owner', icon: Coins },
                      { id: 'Retired', ur: 'ریٹائرڈ (Retired)', en: 'Retired', icon: ShieldCheck },
                      { id: 'Other', ur: 'دیگر (Other)', en: 'Other', icon: Target },
                    ].map((opt) => {
                      const isSelected = currentOccupation === opt.id;
                      const IconComp = opt.icon;
                      return (
                        <button
                          key={opt.id}
                          id={`occ-opt-${opt.id}`}
                          type="button"
                          onClick={() => setCurrentOccupation(opt.id)}
                          className={`p-3.5 rounded-2xl border-2 text-start transition-all flex flex-col justify-between gap-2 ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 shadow-md font-bold'
                              : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700 font-medium'
                          }`}
                        >
                          <IconComp className={`w-5 h-5 ${isSelected ? 'text-emerald-600' : 'text-slate-500'}`} />
                          <span className="text-sm">{isUrdu ? opt.ur : opt.en}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Existing Skills (Multi-select from existing categories) */}
              {currentStep === 4 && (
                <div id="step-existing-skills" className="space-y-5 animate-fade-in">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {isUrdu ? 'سوال نمبر ۴' : 'Question 4'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {isUrdu ? 'آپ کے پاس پہلے سے کون سے ہنر موجود ہیں؟' : 'What existing skills do you already have?'}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {isUrdu 
                        ? 'ایک سے زیادہ منتخب کر سکتے ہیں (تاکہ ہم اس پر اگلا اگلا مرحلہ تجویز کریں)۔'
                        : 'Select multiple categories that you are already familiar with.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto p-1">
                    {EXISTING_SKILL_CATEGORIES.map((cat) => {
                      const isSelected = existingSkills.includes(cat.nameUrdu) || existingSkills.includes(cat.nameEn) || existingSkills.includes(cat.id);
                      return (
                        <button
                          key={cat.id}
                          id={`existing-skill-${cat.id}`}
                          type="button"
                          onClick={() => toggleExistingSkill(cat.nameUrdu)}
                          className={`p-3.5 rounded-2xl border-2 text-start transition-all flex items-center gap-3 ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-sm'
                              : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${cat.badgeColor}`}>
                            {renderSkillIcon(cat.iconName, 'w-4 h-4')}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold truncate">{isUrdu ? cat.nameUrdu : cat.nameEn}</p>
                            <p className="text-xs text-slate-500 truncate">{isUrdu ? cat.descUrdu : cat.descEn}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${isSelected ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300'}`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 5: Interests (Multi-select from exact requested list) */}
              {currentStep === 5 && (
                <div id="step-interests" className="space-y-5 animate-fade-in">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {isUrdu ? 'سوال نمبر ۵' : 'Question 5'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {isUrdu ? 'آپ کو کن موضوعات میں دلچسپی ہے؟' : 'What are your learning interests?'}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {isUrdu 
                        ? 'ایک یا ایک سے زیادہ موضوعات منتخب کریں۔ اگر آپ کی عمر زیادہ ہے تو بھی آپ ٹیکنالوجی یا AI بلا جھجھک چن سکتے ہیں۔'
                        : 'Select multiple topics that interest you. All ages are welcome to explore AI, Tech, or Trades.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-72 overflow-y-auto p-1">
                    {INTERESTS_OPTIONS.map((opt) => {
                      const isSelected = selectedInterests.includes(opt.id);
                      return (
                        <button
                          key={opt.id}
                          id={`interest-opt-${opt.id}`}
                          type="button"
                          onClick={() => toggleInterest(opt.id)}
                          className={`p-3.5 rounded-2xl border-2 text-start transition-all flex items-center justify-between gap-2 ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-sm'
                              : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            {renderSkillIcon(opt.icon, 'w-4 h-4 text-emerald-700')}
                            <span className="text-xs sm:text-sm font-semibold truncate">
                              {isUrdu ? opt.nameUrdu : opt.nameEn}
                            </span>
                          </div>
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${isSelected ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300'}`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 6: Daily Learning Time */}
              {currentStep === 6 && (
                <div id="step-daily-time" className="space-y-5 animate-fade-in">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {isUrdu ? 'سوال نمبر ۶' : 'Question 6'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {isUrdu ? 'آپ روزانہ سیکھنے کے لیے کتنا وقت دے سکتے ہیں؟' : 'How much daily learning time do you have?'}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {isUrdu 
                        ? 'روزانہ صرف ۱۵ سے ۳۰ منٹ کی مسلسل مشق سے زبردست نتائج حاصل کیے جا سکتے ہیں۔'
                        : 'Even 15 to 30 minutes daily creates significant real-world results.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    {[
                      { id: '15 minutes', ur: '۱۵ منٹ (15 minutes)', en: '15 minutes' },
                      { id: '30 minutes', ur: '۳۰ منٹ (30 minutes)', en: '30 minutes' },
                      { id: '1 hour', ur: '۱ گھنٹہ (1 hour)', en: '1 hour' },
                      { id: '2+ hours', ur: '۲+ گھنٹے (2+ hours)', en: '2+ hours' },
                    ].map((opt) => {
                      const isSelected = dailyTime === opt.id;
                      return (
                        <button
                          key={opt.id}
                          id={`time-opt-${opt.id.replace(/\s+/g, '-')}`}
                          type="button"
                          onClick={() => setDailyTime(opt.id)}
                          className={`p-4 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center gap-1 ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 shadow-md font-bold'
                              : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700 font-medium'
                          }`}
                        >
                          <Clock className={`w-5 h-5 ${isSelected ? 'text-emerald-600' : 'text-slate-400'}`} />
                          <span className="text-sm sm:text-base">{isUrdu ? opt.ur : opt.en}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 7: Main Goal & Profile Confirmation */}
              {currentStep === 7 && (
                <div id="step-main-goal" className="space-y-5 animate-fade-in">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {isUrdu ? 'سوال نمبر ۷' : 'Question 7'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {isUrdu ? 'آپ کا بنیادی مقصد کیا ہے؟' : 'What is your primary goal?'}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {isUrdu 
                        ? 'آپ کا مقصد منتخب کریں تاکہ اس کے مطابق ذاتی روڈ میپ بنایا جا سکے۔'
                        : 'Select your main motivation to customize your personal roadmap.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto p-1">
                    {[
                      { id: 'Learn a new skill', ur: 'نیا ہنر سیکھنا (Learn a new skill)', en: 'Learn a new skill' },
                      { id: 'Find better work', ur: 'بہتر روزگار یا کام تلاش کرنا (Find better work)', en: 'Find better work' },
                      { id: 'Start a small business', ur: 'چھوٹا کاروبار شروع کرنا (Start a small business)', en: 'Start a small business' },
                      { id: 'Improve current work', ur: 'موجودہ کام کو بہتر کرنا (Improve current work)', en: 'Improve current work' },
                      { id: 'Help my family', ur: 'اپنے خاندان کی مدد کرنا (Help my family)', en: 'Help my family' },
                      { id: 'Help my community', ur: 'اپنے گاؤں یا برادری کی مدد کرنا (Help my community)', en: 'Help my community' },
                      { id: 'Personal development', ur: 'ذاتی ترقی اور خود اعتمادی (Personal development)', en: 'Personal development' },
                    ].map((opt) => {
                      const isSelected = primaryGoal === opt.id;
                      return (
                        <button
                          key={opt.id}
                          id={`goal-opt-${opt.id.replace(/\s+/g, '-')}`}
                          type="button"
                          onClick={() => setPrimaryGoal(opt.id)}
                          className={`p-3.5 rounded-2xl border-2 text-start transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-sm'
                              : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <span className="text-sm">{isUrdu ? opt.ur : opt.en}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Compact Name & Village Confirmation */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isUrdu ? 'آپ کا نام (سرٹیفکیٹ کے لیے)' : 'Your Name (for certificates)'}
                      </label>
                      <input
                        type="text"
                        value={learnerName}
                        onChange={(e) => setLearnerName(e.target.value)}
                        placeholder={isUrdu ? 'مثال: محمد علی' : 'e.g. Ali Khan'}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isUrdu ? 'آپ کا علاقہ / گاؤں' : 'Your Village / Area'}
                      </label>
                      <input
                        type="text"
                        value={learnerVillage}
                        onChange={(e) => setLearnerVillage(e.target.value)}
                        placeholder={isUrdu ? 'مثال: ڈوبے، برنالہ' : 'e.g. Barnala, AJK'}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Navigation Buttons */}
              <div id="assessment-nav-actions" className="flex items-center justify-between pt-4 border-t border-slate-100">
                {currentStep > 1 ? (
                  <button
                    id="prev-step-btn"
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-bold flex items-center gap-2 transition-all"
                  >
                    <BackArrowIcon className="w-4 h-4" />
                    <span>{isUrdu ? 'پیچھے' : 'Back'}</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < TOTAL_QUESTIONS ? (
                  <button
                    id="next-step-btn"
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.min(TOTAL_QUESTIONS, prev + 1))}
                    className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-emerald-900/10 transition-all"
                  >
                    <span>{isUrdu ? 'اگلا سوال' : 'Next'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    id="generate-recommendations-btn"
                    type="button"
                    onClick={handleCalculateRecommendations}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-emerald-900/20 transition-all"
                  >
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span>{isUrdu ? 'نتائج اور روڈ میپ دیکھیں' : 'See Recommendations & Roadmap'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (

            /* ========================================================================= */
            /* 2. RESULTS VIEW: TOP 3 RECOMMENDATIONS + ROADMAP + COMMUNITY PURPOSE */
            /* ========================================================================= */
            <div id="assessment-results-view" className="space-y-8 animate-fade-in">
              
              {/* Personalized Greeting Header */}
              <div id="results-welcome-card" className="p-5 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white">
                      {isUrdu ? 'تجویز کردہ ٹاپ ۳ ہنر' : 'Top 3 Recommended Skills'}
                    </span>
                    <span className="text-xs font-semibold text-emerald-900">
                      {ageGroup} {isUrdu ? 'سال' : 'years'} • {dailyTime}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {learnerName ? `${learnerName}! ` : ''}
                    {isUrdu 
                      ? 'آپ کی دلچسپی، وقت اور مقصد کے مطابق بہترین ہنر تیار ہیں'
                      : 'Tailored recommendations based on your goals and schedule'}
                  </h3>
                </div>
                <button
                  id="retake-assessment-btn"
                  onClick={() => {
                    setShowResultsView(false);
                    setCurrentStep(1);
                  }}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline shrink-0"
                >
                  {isUrdu ? 'دوبارہ اسیسمنٹ کریں' : 'Retake Assessment'}
                </button>
              </div>

              {/* ========================================================================= */}
              {/* SECTION A: TOP 3 RECOMMENDED SKILLS */}
              {/* ========================================================================= */}
              <div id="top-3-recommendations-section" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span>{isUrdu ? 'آپ کے لیے منتخب کردہ ۳ بہترین ہنر' : 'Top 3 Recommended Skills for You'}</span>
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">
                    {isUrdu ? 'کسی بھی ہنر پر کلک کر کے فوری شروع کریں' : 'Click any skill to start learning'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {generatedSkills.map((skill, index) => {
                    const isSelected = selectedSkillForDetails?.id === skill.id;
                    return (
                      <div
                        key={skill.id}
                        id={`rec-skill-card-${skill.id}`}
                        onClick={() => setSelectedSkillForDetails(skill)}
                        className={`cursor-pointer rounded-3xl border-2 p-4 sm:p-5 flex flex-col justify-between transition-all relative ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/40 shadow-lg ring-2 ring-emerald-500/20'
                            : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50/70 bg-white'
                        }`}
                      >
                        {/* Rank & Level Badge (Beginner / Intermediate / Advanced) */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="w-7 h-7 rounded-xl bg-emerald-700 text-white text-xs font-bold flex items-center justify-center shadow-sm">
                            #{index + 1}
                          </span>
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">
                            {isUrdu 
                              ? (skill.difficulty === 'Beginner' ? 'ابتدائی (Beginner)' : skill.difficulty === 'Intermediate' ? 'درمیانی (Intermediate)' : 'اعلیٰ (Advanced)') 
                              : `${skill.difficulty} Level`}
                          </span>
                        </div>

                        {/* 1. Skill Title & Category */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                              {renderSkillIcon(skill.icon, 'w-5 h-5')}
                            </div>
                            <h5 className="text-base font-bold text-slate-900 leading-snug">
                              {isUrdu ? skill.titleUrdu : skill.titleEn}
                            </h5>
                          </div>

                          {/* 3. Why Suitable Description with specific prompt phrase */}
                          <div className="p-3 rounded-2xl bg-white/95 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                            <p className="font-bold text-emerald-950 mb-1 flex items-center gap-1.5 font-arabic">
                              <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{isUrdu ? 'یہ Skill آپ کے لیے اس لیے مناسب ہے کہ...' : 'Why this skill is recommended for you:'}</span>
                            </p>
                            <p className="text-slate-800 leading-relaxed font-arabic">
                              {isUrdu ? skill.whySuitableUrdu : skill.whySuitableEn}
                            </p>
                          </div>

                          {/* Estimated Time */}
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold pt-1">
                            <Clock className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{isUrdu ? 'تخمینی وقت:' : 'Est. time:'} {isUrdu ? skill.estimatedTimeUrdu : skill.estimatedTimeEn}</span>
                          </div>
                        </div>

                        {/* 4. Start Learning Button */}
                        <button
                          id={`start-learning-btn-${skill.id}`}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStartLearning(skill);
                          }}
                          className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-900/10 transition-all mt-2 font-arabic"
                        >
                          <Play className="w-4 h-4 fill-white" />
                          <span>{isUrdu ? 'سیکھنا شروع کریں' : 'Start Learning'}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION B: PERSONAL ROADMAP (5 STEPS) */}
              {/* ========================================================================= */}
              <div id="personal-roadmap-section" className="space-y-4 pt-4 border-t border-slate-200">
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    <span>{isUrdu ? 'آپ کا ذاتی Learning Roadmap' : 'Your Personal Learning Roadmap'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {isUrdu
                      ? 'مرحلہ وار رہنمائی: بنیاد سے لے کر عملی پروجیکٹ اور دوسروں کی مدد تک'
                      : 'Step-by-step path: From fundamentals to hands-on project and helping others.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {[
                    {
                      step: 'Step 1',
                      nameUrdu: 'سیکھیں (Learn)',
                      nameEn: 'Learn',
                      descUrdu: 'بنیادی تصور سمجھیں، ویڈیو/آڈیو دیکھیں اور پہلا سبق پڑھیں۔',
                      descEn: 'Understand core concepts & complete the foundational lesson.',
                      color: 'bg-emerald-50 border-emerald-300 text-emerald-950',
                    },
                    {
                      step: 'Step 2',
                      nameUrdu: 'مشق کریں (Practice)',
                      nameEn: 'Practice',
                      descUrdu: 'روزمرہ عملی مشق، کوئز اور شارٹ ٹاسکس حل کریں۔',
                      descEn: 'Daily hands-on practice, quizzes and exercises.',
                      color: 'bg-teal-50 border-teal-300 text-teal-950',
                    },
                    {
                      step: 'Step 3',
                      nameUrdu: 'چھوٹا پروجیکٹ (Small Project)',
                      nameEn: 'Small Project',
                      descUrdu: 'اپنے ہاتھوں سے ایک حقیقی دستاویز، ڈیزائن یا منی پروجیکٹ بنائیں۔',
                      descEn: 'Create a tangible document, flyer, or mini artifact.',
                      color: 'bg-cyan-50 border-cyan-300 text-cyan-950',
                    },
                    {
                      step: 'Step 4',
                      nameUrdu: 'حقیقی زندگی میں استعمال (Use in Real Life)',
                      nameEn: 'Use the skill in real life',
                      descUrdu: 'دکان، کام، پڑھائی یا گھر کے کاموں میں اسکل استعمال کریں۔',
                      descEn: 'Integrate skill into work, home, or daily routine.',
                      color: 'bg-indigo-50 border-indigo-300 text-indigo-950',
                    },
                    {
                      step: 'Step 5',
                      nameUrdu: 'دوسروں کی مدد (Help Someone Else)',
                      nameEn: 'Help someone else',
                      descUrdu: 'کسی دوست، بچے یا بزرگ کو سکھائیں یا ان کا کام کریں۔',
                      descEn: 'Teach a peer or help a neighbor with their tasks.',
                      color: 'bg-amber-50 border-amber-300 text-amber-950',
                    },
                  ].map((s, idx) => (
                    <div
                      key={s.step}
                      id={`roadmap-step-card-${idx + 1}`}
                      className={`p-3.5 rounded-2xl border-2 flex flex-col justify-between gap-2 transition-all ${s.color}`}
                    >
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/80 border border-current">
                          {s.step}
                        </span>
                        <h6 className="text-sm font-bold mt-2 leading-tight">
                          {isUrdu ? s.nameUrdu : s.nameEn}
                        </h6>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {isUrdu ? s.descUrdu : s.descEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SECTION C: COMMUNITY PURPOSE */}
              {/* ========================================================================= */}
              <div id="community-purpose-section" className="space-y-4 pt-4 border-t border-slate-200">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-900">
                    {isUrdu ? 'خدمتِ خلق اور برکت' : 'Social Purpose & Impact'}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {isUrdu
                      ? 'اپنی Skill کو صرف اپنے لیے نہیں، دوسروں کے فائدے کے لیے بھی استعمال کریں۔'
                      : 'Use your skill not just for yourself, but for the benefit of others as well.'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {isUrdu
                      ? 'منتخب کریں کہ آپ اس ہنر سے کس دائرے میں سب سے پہلے مدد کرنا چاہتے ہیں:'
                      : 'Choose how you plan to utilize your newly learned skill for community impact:'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {/* Choice 1: Family */}
                  <div
                    id="purpose-choice-family"
                    onClick={() => setSelectedCommunityChoice('family')}
                    className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-2 ${
                      selectedCommunityChoice === 'family'
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-md ring-2 ring-emerald-400/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-rose-600" />
                        <h6 className="text-sm font-bold text-slate-900">
                          {isUrdu ? 'اپنے خاندان کی مدد' : 'Help my family'}
                        </h6>
                      </div>
                      {selectedCommunityChoice === 'family' && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isUrdu
                        ? 'گھر کے اخراجات کا انتظام، بچوں کی پڑھائی میں مدد اور خاندانی ضروریات میں خود انحصاری۔'
                        : 'Manage household budget, support children with studies, and foster family stability.'}
                    </p>
                  </div>

                  {/* Choice 2: Village / Area */}
                  <div
                    id="purpose-choice-village"
                    onClick={() => setSelectedCommunityChoice('village')}
                    className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-2 ${
                      selectedCommunityChoice === 'village'
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-md ring-2 ring-emerald-400/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-teal-600" />
                        <h6 className="text-sm font-bold text-slate-900">
                          {isUrdu ? 'اپنے گاؤں/علاقے کی مدد' : 'Help my village/area'}
                        </h6>
                      </div>
                      {selectedCommunityChoice === 'village' && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isUrdu
                        ? 'پڑوسیوں کے مسائل حل کرنا، سرکاری درخواستیں لکھنا اور مقامی دکانوں کا ہاتھ بٹانا۔'
                        : 'Draft community petitions, assist local shops, and solve neighborhood challenges.'}
                    </p>
                  </div>

                  {/* Choice 3: Society */}
                  <div
                    id="purpose-choice-society"
                    onClick={() => setSelectedCommunityChoice('society')}
                    className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col justify-between gap-2 ${
                      selectedCommunityChoice === 'society'
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-md ring-2 ring-emerald-400/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-indigo-600" />
                        <h6 className="text-sm font-bold text-slate-900">
                          {isUrdu ? 'معاشرے کی خدمت' : 'Serve society'}
                        </h6>
                      </div>
                      {selectedCommunityChoice === 'society' && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isUrdu
                        ? 'ضرورت مندوں کو مفت ہنر سکھانا، دیانت دار اخلاق پھیلانا اور مثبت تبدیلی کا حصہ بننا۔'
                        : 'Mentor underprivileged learners, spread ethical values, and foster social progress.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action: Start Selected Top Skill */}
              {selectedSkillForDetails && (
                <div id="results-bottom-action-bar" className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {isUrdu 
                        ? `منتخب شدہ: "${selectedSkillForDetails.titleUrdu}"` 
                        : `Selected: "${selectedSkillForDetails.titleEn}"`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {onOpenAITeacherWithPrompt && (
                      <button
                        id="ask-ai-teacher-about-skill-btn"
                        type="button"
                        onClick={() => {
                          onClose();
                          onOpenAITeacherWithPrompt(
                            isUrdu
                              ? `میں "${selectedSkillForDetails.titleUrdu}" سیکھنا چاہتا ہوں۔ مجھے روزمرہ زندگی میں اس کے ۵ سب سے آسان عملی فوائد بتائیں۔`
                              : `I want to learn "${selectedSkillForDetails.titleEn}". What are the top 5 practical daily uses?`
                          );
                        }}
                        className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-emerald-300 text-emerald-900 hover:bg-emerald-100 text-xs font-bold transition-all"
                      >
                        {isUrdu ? 'AI استاد سے رہنمائی لیں' : 'Ask AI Teacher'}
                      </button>
                    )}
                    <button
                      id="confirm-start-learning-btn"
                      type="button"
                      onClick={() => handleStartLearning(selectedSkillForDetails)}
                      className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-900/10 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>{isUrdu ? 'سیکھنا شروع کریں' : 'Start Learning'}</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};
