import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  User, 
  Smartphone, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Award
} from 'lucide-react';
import { AgeGroup, Language, UserProfile } from '../types';
import { AGE_GROUP_RECOMMENDATIONS, UI_TRANSLATIONS } from '../data/mockData';

interface OnboardingModalProps {
  language: Language;
  initialProfile: UserProfile;
  onSaveProfile: (profile: UserProfile) => void;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  language,
  initialProfile,
  onSaveProfile,
  onClose,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form states
  const [name, setName] = useState(initialProfile.name || '');
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(initialProfile.ageGroup || '16-25');
  const [village, setVillage] = useState(initialProfile.village || 'ڈوبے، برنالہ، آزاد کشمیر');
  const [role, setRole] = useState(initialProfile.role || 'سیکھنے والے');

  // Assessment question responses
  const [primaryGoal, setPrimaryGoal] = useState('skills'); // 'skills', 'business', 'agriculture', 'character', 'mentor'
  const [device, setDevice] = useState('smartphone'); // 'smartphone', 'laptop', 'shared'
  const [dailyMinutes, setDailyMinutes] = useState(30); // 15, 30, 60
  const [communityInterest, setCommunityInterest] = useState('water_education');

  const ageGroups: { id: AgeGroup; labelUrdu: string; labelEn: string; descUrdu: string; descEn: string }[] = [
    { id: '10-15', labelUrdu: '۱۰ تا ۱۵ سال', labelEn: '10–15 yrs', descUrdu: 'اسکول اور بنیادی ڈیجیٹل ہنر', descEn: 'School, logic & creativity' },
    { id: '16-25', labelUrdu: '۱۶ تا ۲۵ سال', labelEn: '16–25 yrs', descUrdu: 'کالج، روزگار اور جدید ٹیکنالوجی', descEn: 'Career, AI, Canva & freelancing' },
    { id: '26-45', labelUrdu: '۲۶ تا ۴۵ سال', labelEn: '26–45 yrs', descUrdu: 'کاروبار، زراعت اور گھریلو معیشت', descEn: 'Enterprise, farming & management' },
    { id: '46-60', labelUrdu: '۴۶ تا ۶۰ سال', labelEn: '46–60 yrs', descUrdu: 'بزرگوں کی قیادت اور مالی منصوبہ بندی', descEn: 'Community leadership & planning' },
    { id: '61-70', labelUrdu: '۶۱ تا ۷۰ سال', labelEn: '61–70 yrs', descUrdu: 'بزرگ استاد اور لائف لانگ لرنر', descEn: 'Lifelong learner & mentor' },
    { id: '70+', labelUrdu: '۷۰ سال سے زائد', labelEn: '70+ yrs', descUrdu: 'دانائی کا خزانہ اور روایتی تجربات', descEn: 'Wisdom keeper & elder guide' },
  ];

  const handleFinish = () => {
    const updatedProfile: UserProfile = {
      ...initialProfile,
      name: name.trim() || (language === 'ur' ? 'معزز ساتھی' : 'Learner'),
      ageGroup,
      village,
      role,
      preferredLanguage: language,
    };
    onSaveProfile(updatedProfile);
  };

  const currentRec = AGE_GROUP_RECOMMENDATIONS[ageGroup] || AGE_GROUP_RECOMMENDATIONS['16-25'];
  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-bold border border-emerald-400/30">
                {language === 'ur' ? `مرحلہ ${step} از ۳` : `Step ${step} of 3`}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {step === 1 && (language === 'ur' ? 'سیکھو میں خوش آمدید (پروفائل)' : 'Welcome to Seekho (Profile)')}
              {step === 2 && (language === 'ur' ? 'ذاتی اسکل اسیسمنٹ' : 'Personal Skill Assessment')}
              {step === 3 && (language === 'ur' ? 'آپ کا ذاتی تعلیمی روڈ میپ' : 'Your Customized Roadmap')}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1">
              {step === 1 && (language === 'ur' ? 'اپنا نام، عمر اور علاقہ منتخب کریں۔' : 'Select your name, age group and area.')}
              {step === 2 && (language === 'ur' ? 'ہم آپ کے لیے بہترین اسباق تجویز کریں گے۔' : 'Tell us your goal and daily time.')}
              {step === 3 && (language === 'ur' ? 'آپ کی ضروریات کے مطابق تجویز کردہ مہارتیں تیار ہیں۔' : 'Here are your tailored recommendations.')}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* STEP 1: Basic Info & Age Cohort */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                  {language === 'ur' ? 'آپ کا مبارک نام:' : 'Your Name:'}
                </label>
                <input
                  id="onboarding-name-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'ur' ? 'مثال: علی احمد / فاطمہ بی بی / حاجی محمد' : 'e.g., Ali Ahmed / Fatima Bibi'}
                  className="w-full bg-slate-50 p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  {language === 'ur' ? 'اپنی عمر کا گروپ منتخب کریں:' : 'Select your age group:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ageGroups.map((ag) => {
                    const isSelected = ageGroup === ag.id;

                    return (
                      <button
                        key={ag.id}
                        type="button"
                        onClick={() => setAgeGroup(ag.id)}
                        className={`p-3 rounded-2xl border text-start transition flex items-start gap-2.5 ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-xs'
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                        }`}>
                          {isSelected && <span className="text-[10px]">✓</span>}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold">
                            {language === 'ur' ? ag.labelUrdu : ag.labelEn}
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                            {language === 'ur' ? ag.descUrdu : ag.descEn}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                  {language === 'ur' ? 'گاؤں یا شہر کا نام:' : 'Village / City:'}
                </label>
                <input
                  id="onboarding-village-input"
                  type="text"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  placeholder="ڈوبے، برنالہ، آزاد کشمیر"
                  className="w-full bg-slate-50 p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-end pt-3">
                <button
                  id="onboarding-next-to-step-2"
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs sm:text-sm shadow-xs flex items-center gap-1.5"
                >
                  <span>{language === 'ur' ? 'اگلا مرحلہ (اسیسمنٹ)' : 'Next Step (Assessment)'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Assessment Questionnaire */}
          {step === 2 && (
            <div className="space-y-4">
              {/* Question 1: Goal */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-800">
                  {language === 'ur' ? '۱. آپ کا بنیادی مقصد کیا ہے؟' : '1. What is your primary learning goal?'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'skills', ur: 'موبائل سے روزگار / ڈیجیٹل ہنر', en: 'Digital skills & Smartphone work' },
                    { id: 'business', ur: 'گھریلو / مقامی کاروبار شروع کرنا', en: 'Starting a small local business' },
                    { id: 'agriculture', ur: 'جدید زراعت، باغبانی اور لائیو اسٹاک', en: 'Modern farming & livestock' },
                    { id: 'character', ur: 'اخلاق، بچوں کی تربیت اور برادری کی خدمت', en: 'Character, family & community' },
                  ].map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setPrimaryGoal(g.id)}
                      className={`p-2.5 rounded-xl border text-start text-xs font-semibold transition ${
                        primaryGoal === g.id
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {language === 'ur' ? g.ur : g.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Daily time */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-800">
                  {language === 'ur' ? '۲. آپ روزانہ کتنا وقت دے سکتے ہیں؟' : '2. How much time can you commit daily?'}
                </label>
                <div className="flex gap-2">
                  {[
                    { mins: 15, labelUr: '۱۵ منٹ', labelEn: '15 Mins' },
                    { mins: 30, labelUr: '۳۰ منٹ', labelEn: '30 Mins' },
                    { mins: 60, labelUr: '۱ گھنٹہ+', labelEn: '1 Hour+' },
                  ].map((t) => (
                    <button
                      key={t.mins}
                      type="button"
                      onClick={() => setDailyMinutes(t.mins)}
                      className={`flex-1 p-2.5 rounded-xl border text-center text-xs font-bold transition ${
                        dailyMinutes === t.mins
                          ? 'bg-emerald-700 text-white border-emerald-800 shadow-2xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {language === 'ur' ? t.labelUr : t.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Device */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-bold text-slate-800">
                  {language === 'ur' ? '۳. آپ کون سی ڈیوائس استعمال کرتے ہیں؟' : '3. What device do you have?'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'smartphone', ur: 'صرف موبائل', en: 'Smartphone only' },
                    { id: 'laptop', ur: 'کمپیوٹر / لیپ ٹاپ', en: 'Laptop / PC' },
                    { id: 'shared', ur: 'گھر کا مشترکہ فون', en: 'Shared Phone' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDevice(d.id)}
                      className={`p-2 rounded-xl border text-center text-xs font-semibold transition ${
                        device === d.id
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {language === 'ur' ? d.ur : d.en}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold"
                >
                  {language === 'ur' ? 'پچھلا' : 'Back'}
                </button>

                <button
                  id="onboarding-next-to-step-3"
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs sm:text-sm shadow-xs flex items-center gap-1.5"
                >
                  <span>{language === 'ur' ? 'روڈ میپ دیکھیں' : 'Generate Roadmap'}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Tailored Roadmap */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-5 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-bold text-emerald-300">
                    {language === 'ur' ? 'آپ کے لیے تجویز کردہ تعلیمی پیکج' : 'Your Personalized Learning Path'}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {language === 'ur' ? currentRec.titleUrdu : currentRec.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-arabic">
                  {language === 'ur' ? currentRec.descriptionUrdu : currentRec.descriptionEn}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {language === 'ur' ? 'تجویز کردہ اولین 4 عملی مہارتیں:' : 'Top 4 Recommended Practical Skills:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(language === 'ur' ? currentRec.skillsUrdu : currentRec.skillsEn).map((sk, idx) => (
                    <div
                      key={idx}
                      className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200 flex items-center gap-2.5"
                    >
                      <div className="w-6 h-6 rounded-lg bg-emerald-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-emerald-950">
                        {sk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                <strong>{language === 'ur' ? 'یاد رکھیں:' : 'Seekho Model:'}</strong>{' '}
                {language === 'ur'
                  ? 'سبق → مختصر کوئز → روزانہ کا عملی کام → برادری کا پروجیکٹ'
                  : 'Lesson → Comprehension Quiz → Daily Practice Task → Community Capstone'}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold"
                >
                  {language === 'ur' ? 'اسیسمنٹ تبدیل کریں' : 'Change Assessment'}
                </button>

                <button
                  id="onboarding-save-finish-btn"
                  type="button"
                  onClick={handleFinish}
                  className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-black text-xs sm:text-sm shadow-md flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{language === 'ur' ? 'سیکھنا شروع کریں!' : 'Start Learning Now!'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
