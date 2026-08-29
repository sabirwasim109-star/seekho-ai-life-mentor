import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Trophy, 
  User, 
  Home, 
  Users, 
  Building2, 
  Globe, 
  CheckCircle2,
  BookOpen,
  Compass,
  Briefcase,
  ShieldCheck,
  Zap,
  Target,
  Lock,
  HeartHandshake,
  AlertTriangle,
  Info,
  Mail,
  Scale,
  Award,
  Layers,
  ArrowDown
} from 'lucide-react';
import { Language } from '../types';
import { PlayStoreFeatureGraphic } from './PlayStoreFeatureGraphic';
import { SeekhoLogo } from './SeekhoLogo';

interface VisionModalProps {
  language: Language;
  onClose: () => void;
  initialTab?: 'about' | 'purpose' | 'playstore' | 'privacy' | 'trust' | 'contact';
}

export const VisionModal: React.FC<VisionModalProps> = ({ language, onClose, initialTab = 'about' }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'purpose' | 'playstore' | 'privacy' | 'trust' | 'contact'>(initialTab);

  const isUrdu = language === 'ur';

  const aimsUrdu = [
    {
      title: 'عملی زندگی کے ہنر',
      desc: 'بجٹ، گھریلو انتظامات، تکنیکی مہارتیں اور ہنگامی صلاحیتیں سیکھنا۔',
      icon: Zap,
    },
    {
      title: 'صائب سوچ اور فیصلے',
      desc: 'مسائل کا پرسکون تجزیہ، غصہ و دباؤ کا انتظام اور دانشمندانہ فیصلے لینا۔',
      icon: Compass,
    },
    {
      title: 'کیریئر اور حلال روزگار',
      desc: 'ڈیجیٹل مہارتیں، جدید زراعت، فنی ہنر اور ایمانداری پر مبنی روزگار۔',
      icon: Briefcase,
    },
    {
      title: 'کردار اور نظم و ضبط',
      desc: 'سچائی، امانت، ایفائے عہد، وقت کی پابندی اور ذاتی محاسبہ۔',
      icon: ShieldCheck,
    },
    {
      title: 'قرآن و سنت سے رہنمائی',
      desc: 'روزمرہ معاملات اور اخلاقیات میں قرآن و مستند احادیث کی رہنمائی۔',
      icon: BookOpen,
    },
    {
      title: 'علم کو روزمرہ عمل میں بدلنا',
      desc: 'صرف پڑھنا نہیں بلکہ روزانہ چھوٹے عملی مشنز کے ذریعے سیکھنا۔',
      icon: Target,
    },
  ];

  const aimsEn = [
    {
      title: 'Practical Life Skills',
      desc: 'Master budgeting, household safety, technical basics, and essential emergency readiness.',
      icon: Zap,
    },
    {
      title: 'Wise Thinking & Decisions',
      desc: 'Calm problem analysis, stress management, and objective decision-making.',
      icon: Compass,
    },
    {
      title: 'Career & Earning Skills',
      desc: 'Digital literacy, modern farming, hands-on trades, and ethical halal livelihoods.',
      icon: Briefcase,
    },
    {
      title: 'Character & Discipline',
      desc: 'Honesty, integrity, punctuality, fulfilling promises, and daily self-assessment.',
      icon: ShieldCheck,
    },
    {
      title: 'Quran & Authentic Hadith',
      desc: 'Anchoring daily ethics and interpersonal dealings in verified Islamic teachings.',
      icon: BookOpen,
    },
    {
      title: 'Knowledge into Daily Action',
      desc: 'Moving beyond passive reading into structured, daily actionable missions.',
      icon: Target,
    },
  ];

  const stepsUrdu = [
    {
      num: '۱',
      stage: 'مرحلہ ۱',
      title: 'سیکھیں (Learn)',
      icon: Sparkles,
      color: 'from-cyan-500 to-blue-600',
      badge: 'bg-cyan-100 text-cyan-900 border-cyan-300',
      desc: 'صرف ڈگریاں نہیں، بلکہ وہ حقیقی اور مفید علم حاصل کریں جس سے زندگی میں روشنی اور صلاحیت پیدا ہو۔',
      action: 'روزانہ 15-30 منٹ موبائل یا کمپیوٹر سے مفید اسباق پڑھیں یا سنیں۔',
    },
    {
      num: '۲',
      stage: 'مرحلہ ۲',
      title: 'مشق کریں (Practice)',
      icon: Trophy,
      color: 'from-amber-500 to-orange-600',
      badge: 'bg-amber-100 text-amber-900 border-amber-300',
      desc: 'علم بغیر عمل کے نامکمل ہے۔ جو سیکھیں، فوراً اپنے ہاتھ سے اس کا پریکٹیکل کریں۔',
      action: 'ہر سبق کے بعد دیا گیا عملی ٹاسک اور کوئز حل کریں۔',
    },
    {
      num: '۳',
      stage: 'مرحلہ ۳',
      title: 'خود کو سنواریں (Improve Yourself)',
      icon: User,
      color: 'from-emerald-500 to-teal-600',
      badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      desc: 'دیانت، سچائی، حسنِ اخلاق، وقت کی قدر اور مثبت سوچ کے ذریعے اپنے کردار کو مضبوط بنائیں۔',
      action: 'اپنی عادات کا روزانہ محاسبہ کریں اور ایک نئی اچھی عادت اپنائیں۔',
    },
    {
      num: '۴',
      stage: 'مرحلہ ۴',
      title: 'خاندان کی مدد کریں (Help Your Family)',
      icon: Home,
      color: 'from-indigo-500 to-purple-600',
      badge: 'bg-indigo-100 text-indigo-900 border-indigo-300',
      desc: 'اپنے علم اور ہنر سے اپنے گھر کے خرچ، بچت، بچوں کی تربیت اور گھریلو مسائل میں مثبت کردار ادا کریں۔',
      action: 'اپنے گھر والوں کو کوئی نیا ہنر سکھائیں یا ان کا ہاتھ بٹائیں۔',
    },
    {
      num: '۵',
      stage: 'مرحلہ ۵',
      title: 'برادری کی خدمت کریں (Help Your Community)',
      icon: Users,
      color: 'from-rose-500 to-pink-600',
      badge: 'bg-rose-100 text-rose-900 border-rose-300',
      desc: 'اپنے محلے اور گاؤں کے مسائل (جیسے پانی، صفائی، تعلیم، درخت لگانا) میں عملی حصہ لیں۔',
      action: 'سیکھو پر کمیونٹی پروجیکٹ شروع کریں یا کسی مقامی مہم میں رضاکار بنیں۔',
    },
    {
      num: '۶',
      stage: 'مرحلہ ۶',
      title: 'ملک کی ترقی میں حصہ ڈالیں (Help Your Country)',
      icon: Building2,
      color: 'from-teal-600 to-emerald-700',
      badge: 'bg-teal-100 text-teal-900 border-teal-300',
      desc: 'ایک ذمہ دار، باوقار اور قانون پسند شہری کے طور پر ملکی معیشت اور وقار کو بلند کریں۔',
      action: 'مقامی پیداوار کو فروغ دیں اور مثبت سماجی خدمات انجام دیں۔',
    },
    {
      num: '۷',
      stage: 'مرحلہ ۷',
      title: 'پوری دنیا کے کام آئیں (Help the World)',
      icon: Globe,
      color: 'from-blue-600 to-indigo-800',
      badge: 'bg-blue-100 text-blue-900 border-blue-300',
      desc: 'انسانیت کے لیے نفع بخش بنیں۔ امن، ماحولیات کے تحفظ اور عالمی بھلائی میں اپنا حصہ ڈالیں۔',
      action: 'اپنا تیار کردہ علم اور حل انٹرنیٹ پر دنیا بھر کے انسانوں کے ساتھ بانٹیں۔',
    },
  ];

  const stepsEn = [
    {
      num: '1',
      stage: 'Stage 1',
      title: 'Learn',
      icon: Sparkles,
      color: 'from-cyan-500 to-blue-600',
      badge: 'bg-cyan-100 text-cyan-900 border-cyan-300',
      desc: 'Acquire practical, empowering knowledge that directly enriches life and builds true capability.',
      action: 'Spend 15-30 focused minutes daily exploring engaging micro-lessons.',
    },
    {
      num: '2',
      stage: 'Stage 2',
      title: 'Practice',
      icon: Trophy,
      color: 'from-amber-500 to-orange-600',
      badge: 'bg-amber-100 text-amber-900 border-amber-300',
      desc: 'Knowledge without execution is dormant. Immediately apply every concept with hands-on practice.',
      action: 'Complete daily tasks, interactive quizzes, and micro-deliverables.',
    },
    {
      num: '3',
      stage: 'Stage 3',
      title: 'Improve Yourself',
      icon: User,
      color: 'from-emerald-500 to-teal-600',
      badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      desc: 'Refine your character, integrity, discipline, emotional resilience, and personal work ethic.',
      action: 'Adopt positive daily habits and self-assess progress continuously.',
    },
    {
      num: '4',
      stage: 'Stage 4',
      title: 'Help Your Family',
      icon: Home,
      color: 'from-indigo-500 to-purple-600',
      badge: 'bg-indigo-100 text-indigo-900 border-indigo-300',
      desc: 'Uplift your household through financial wisdom, digital literacy, and shared mentorship.',
      action: 'Help a family member learn a useful tool or solve a household challenge.',
    },
    {
      num: '5',
      stage: 'Stage 5',
      title: 'Help Your Community',
      icon: Users,
      color: 'from-rose-500 to-pink-600',
      badge: 'bg-rose-100 text-rose-900 border-rose-300',
      desc: 'Address local challenges—clean water, plantation, youth mentoring, roads, and village welfare.',
      action: 'Join or initiate local volunteer projects in your area.',
    },
    {
      num: '6',
      stage: 'Stage 6',
      title: 'Help Your Country',
      icon: Building2,
      color: 'from-teal-600 to-emerald-700',
      badge: 'bg-teal-100 text-teal-900 border-teal-300',
      desc: 'Act as a dignified, constructive citizen fostering local innovation and economic vitality.',
      action: 'Support local enterprises and digital exports that build national self-reliance.',
    },
    {
      num: '7',
      stage: 'Stage 7',
      title: 'Help the World',
      icon: Globe,
      color: 'from-blue-600 to-indigo-800',
      badge: 'bg-blue-100 text-blue-900 border-blue-300',
      desc: 'Contribute positively to humanity, planetary environmental conservation, and global knowledge.',
      action: 'Publish useful projects and open-source local solutions for global learners.',
    },
  ];

  const aims = isUrdu ? aimsUrdu : aimsEn;
  const steps = isUrdu ? stepsUrdu : stepsEn;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-[#0B132B] text-white flex items-start justify-between gap-4 border-b border-cyan-500/20">
          <div className="flex items-center gap-3.5">
            <SeekhoLogo className="w-12 h-12 shadow-md shadow-cyan-500/20" />
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/30 font-arabic">
                  {isUrdu ? 'سیکھو — تعارف، وژن و برانڈ' : 'Seekho Vision & Brand'}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30 font-arabic">
                  {isUrdu ? 'علم • سوچ • عمل • ارتقاء' : 'Learn • Think • Act • Transform'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-arabic">
                {isUrdu ? 'سیکھو — Seekho' : 'Seekho — Lifelong AI Life Mentor'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-arabic leading-relaxed">
                {isUrdu
                  ? 'علم سے عمل اور اثر تک — مستقبل کا ہنر مند اور باکردار انسان بنیں۔'
                  : 'From Knowledge to Action & Impact — Lifelong Practical Learning & Character.'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 p-2 bg-slate-100 border-b border-slate-200 overflow-x-auto scrollbar-none font-arabic">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'about'
                ? 'bg-white text-emerald-900 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>{isUrdu ? 'تعارف و وژن' : 'About & Vision'}</span>
          </button>

          <button
            onClick={() => setActiveTab('playstore')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'playstore'
                ? 'bg-white text-cyan-950 shadow-xs border border-cyan-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Award className="w-4 h-4 text-cyan-600" />
            <span>{isUrdu ? 'Play Store برانڈنگ و تھیم' : 'Play Store Branding'}</span>
          </button>

          <button
            onClick={() => setActiveTab('purpose')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'purpose'
                ? 'bg-white text-emerald-900 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-teal-700" />
            <span>{isUrdu ? 'ہمارا مقصد' : 'Our Purpose'}</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'privacy'
                ? 'bg-white text-emerald-900 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Lock className="w-4 h-4 text-emerald-700" />
            <span>{isUrdu ? 'رازداری و ڈیٹا' : 'Privacy & Data'}</span>
          </button>

          <button
            onClick={() => setActiveTab('trust')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'trust'
                ? 'bg-white text-emerald-900 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>{isUrdu ? 'اعتماد و احتیاط' : 'Trust & Safety'}</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'contact'
                ? 'bg-white text-emerald-900 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Mail className="w-4 h-4 text-slate-700" />
            <span>{isUrdu ? 'بانی و رابطہ' : 'Founder & Contact'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* TAB 1: ABOUT & VISION */}
          {activeTab === 'about' && (
            <div className="space-y-6 font-arabic">
              {/* Core Philosophy Banner */}
              <div className="bg-emerald-50/70 p-4 sm:p-5 rounded-2xl border border-emerald-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-700 shrink-0" />
                  <h3 className="text-base sm:text-lg font-black text-emerald-950">
                    {isUrdu ? 'سیکھو کیا ہے؟' : 'What is Seekho?'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  {isUrdu
                    ? 'سیکھو ہر عمر (10 سے 70+ سال) کے فرد کے لیے ایک جامع اور دوستانہ AI Life Mentor ہے۔ اس کا مقصد محض کتابی باتیں بتانا نہیں، بلکہ عملی مہارتوں، اخلاقی شعور، دانشمندانہ فیصلوں، حلال روزگار اور روزمرہ اچھے کاموں کو آسان بنانا ہے۔'
                    : 'Seekho is a friendly, lifelong AI Life Mentor designed for individuals of all age groups (10–70+). Rather than passive theoretical lectures, it empowers learners with practical skills, ethical character, wise decisions, halal earning pathways, and daily actionable deeds.'}
                </p>
              </div>

              {/* Seekho 6 Core Aims */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-sm sm:text-base font-black text-slate-900">
                    {isUrdu ? 'سیکھو کے ۶ بنیادی مقاصد' : '6 Core Aims of Seekho'}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {aims.map((aim, idx) => {
                    const Icon = aim.icon;
                    return (
                      <div key={idx} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                            {aim.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                            {aim.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 7-Step Lifelong Learning Roadmap */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-teal-700" />
                    <span>{isUrdu ? '۷ رکنی تعلیمی و سماجی روڈ میپ (Impact Circle)' : 'The 7-Stage Impact Circle Roadmap'}</span>
                  </h3>
                  <span className="text-[11px] text-slate-500 hidden sm:inline">
                    {isUrdu ? 'فرد سے انسانیت تک کا سفر' : 'From Self to Global Humanity'}
                  </span>
                </div>

                <div className="space-y-3 relative">
                  {steps.map((st, idx) => {
                    const Icon = st.icon;
                    const isLast = idx === steps.length - 1;

                    return (
                      <div key={idx} className="relative">
                        <div
                          className="bg-white hover:bg-slate-50/80 p-4 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition flex flex-col sm:flex-row sm:items-start gap-3.5"
                        >
                          <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${st.color} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md`}>
                            <Icon className="w-5 h-5" />
                          </div>

                          <div className="flex-1 space-y-1.5">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <div className="flex items-center gap-2">
                                <span className={`text-[11px] font-black px-2 py-0.5 rounded-lg border ${st.badge}`}>
                                  {st.stage}
                                </span>
                                <h4 className="text-sm sm:text-base font-black text-slate-900">
                                  {st.title}
                                </h4>
                              </div>
                              <span className="text-xs font-bold text-slate-400">
                                #{st.num}
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {st.desc}
                            </p>

                            <div className="text-xs font-medium text-emerald-950 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/70 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span><strong>{isUrdu ? 'عملی طریقہ (Action):' : 'Action:'}</strong> {st.action}</span>
                            </div>
                          </div>
                        </div>

                        {!isLast && (
                          <div className="flex items-center justify-center my-1 text-slate-300">
                            <ArrowDown className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB: PLAY STORE BRANDING & CYBER-LAB SHOWCASE */}
          {activeTab === 'playstore' && (
            <div className="space-y-6 font-arabic">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-600" />
                  <span>{isUrdu ? 'Google Play Store فیچر گرافک و بصری شناخت' : 'Play Store Visual Identity & Feature Graphic'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isUrdu
                    ? 'جدید سائبر-لیب تھیم (3D Glassmorphism, Microchip Circuits, Neon Cyan & Warm Gold) کے ساتھ پلے اسٹور ریڈی ڈیزائن۔'
                    : 'Modern Cyber-Lab Theme with 3D Glassmorphism, microchip AI circuits, neon cyan, and warm gold lighting accents.'}
                </p>
              </div>

              {/* 1024x500 Feature Graphic Display */}
              <PlayStoreFeatureGraphic language={language} />

              {/* Icon & Design Anatomy */}
              <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-4">
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {isUrdu ? 'ایپ آئیکون کے کلیدی عناصر (Symbol Anatomy):' : 'App Icon Key Elements:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-cyan-800 block">
                      {isUrdu ? '۱. ڈیجیٹل اسکرین / کھلی کتاب' : '1. Open Digital Book/Screen'}
                    </span>
                    <p className="text-slate-600">
                      {isUrdu ? 'ڈیجیٹل لٹریسی، علم اور جدید لیب کی بنیاد۔' : 'Digital literacy, practical wisdom, and educational foundation.'}
                    </p>
                  </div>
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-emerald-800 block">
                      {isUrdu ? '۲. مائیکرو چپ اور AI سرکٹ' : '2. Microchip & AI Traces'}
                    </span>
                    <p className="text-slate-600">
                      {isUrdu ? 'مستقبل کی ٹیکنالوجی، مصنوعی ذہانت اور عملی ہنر۔' : 'Future tech, AI mentor intelligence, and computer literacy.'}
                    </p>
                  </div>
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-amber-800 block">
                      {isUrdu ? '۳. اوپر اٹھتا تیر اور امپیکٹ دائرے' : '3. Upward Arrow & Impact Circle'}
                    </span>
                    <p className="text-slate-600">
                      {isUrdu ? 'فرد سے خاندان، برادری اور دنیا تک ترقی کا سفر۔' : 'Expanding growth from individual to family, society, and the world.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: OUR PURPOSE */}
          {activeTab === 'purpose' && (
            <div className="space-y-5 font-arabic">
              <div className="bg-gradient-to-r from-teal-800 to-emerald-900 text-white p-5 rounded-3xl space-y-2 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider font-black px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {isUrdu ? 'بنیادی منشور' : 'Core Manifesto'}
                </span>
                <h3 className="text-lg sm:text-xl font-black">
                  {isUrdu
                    ? '”سیکھو — علم کو عمل، کردار اور بہتر زندگی سے جوڑنے کی کوشش ہے۔“'
                    : '“Seekho is a dedicated effort to connect knowledge with action, character, and a better life.”'}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                  {isUrdu
                    ? 'ہمارا ایمان ہے کہ علم صرف امتحانات پاس کرنے یا سندیں جمع کرنے کا نام نہیں، بلکہ وہ روشنی ہے جو انسان کے طرزِ عمل کو سلجھاتی ہے، گھروں کو پرامن بناتی ہے اور معاشرے میں خیر پیدا کرتی ہے۔'
                    : 'We believe genuine knowledge is not merely about passing examinations or accumulating credentials; it is the practical light that refines human behavior, brings peace to homes, and spreads goodness in society.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-700" />
                    <span>{isUrdu ? 'ہر عمر کے لیے موزوں' : 'Inclusive for All Ages'}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isUrdu
                      ? 'چاہے آپ اسکول کا طالب علم ہوں، گھر کا انتظام سنبھالنے والے ہوں، کاشتکار ہوں، بزرگ ہوں یا ہنر مند؛ سیکھو آپ کی رفتار اور ترجیح کے مطابق آسان زبان میں رہنمائی کرتا ہے۔'
                      : 'Whether you are a student, homemaker, farmer, craftsman, or elder, Seekho provides clear, step-by-step guidance tailored to your pace and stage of life.'}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-teal-700" />
                    <span>{isUrdu ? 'حقیقی اور قابلِ عمل حل' : 'Honest & Realistic Scope'}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isUrdu
                      ? 'ہم کسی فوری دولت یا ناممکن کامیابی کے مبالغہ آمیز دعوے نہیں کرتے۔ ہم صرف محنت، دیانت، مثبت کردار اور مسلسل سیکھنے کا قابلِ پیمائش راستہ دکھاتے ہیں۔'
                      : 'We make no exaggerated claims of overnight wealth or effortless success. We focus purely on diligence, integrity, moral character, and continuous incremental learning.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRIVACY, DATA & PERSONALIZATION */}
          {activeTab === 'privacy' && (
            <div className="space-y-4 font-arabic">
              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200/80 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-sm sm:text-base font-black text-emerald-950">
                    {isUrdu ? 'رازداری اور ڈیٹا کا اخلاقی اصول' : 'Our Privacy & Data Principles'}
                  </h3>
                </div>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  {isUrdu
                    ? 'سیکھو میں آپ کی رازداری کا احترام ہماری پہلی ترجیح ہے۔ آپ کی ذاتی ترقی، عکاسی اور سیکھنے کا سفر خالصتاً آپ کا اپنا ہے۔'
                    : 'At Seekho, respecting your privacy is our foundational principle. Your personal learning journey, reflections, and progress belong entirely to you.'}
                </p>
              </div>

              {/* 1. What info is used */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Info className="w-4 h-4 text-indigo-700" />
                  <span>{isUrdu ? 'ذاتی رہنمائی کے لیے کون سی معلومات استعمال ہوتی ہیں؟' : 'What Information is Used for Personalization?'}</span>
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                  <li><strong>{isUrdu ? 'عمر کا مرحلہ:' : 'Age Group:'}</strong> {isUrdu ? 'اسباق کی زبان اور مثالوں کو موزوں بنانے کے لیے (مثلاً 10-18 سال، 19-35 سال وغیرہ)۔' : 'To adapt lesson language and relatable examples (e.g. youth, working adults, elders).'}</li>
                  <li><strong>{isUrdu ? 'منتخب زبان:' : 'Preferred Language:'}</strong> {isUrdu ? 'اردو یا انگریزی میں مکمل متن اور انٹرفیس فراہم کرنا۔' : 'Urdu or English interface and educational content.'}</li>
                  <li><strong>{isUrdu ? 'فعال ہنر و مضامین:' : 'Active Skill & Tracks:'}</strong> {isUrdu ? 'آپ کے جاری کورس کی پیش رفت اور اگلے اسباق دکھانا۔' : 'Your current course progress to suggest the next lesson.'}</li>
                  <li><strong>{isUrdu ? 'روزمرہ مشن اور عکاسی:' : 'Daily Missions & Reflections:'}</strong> {isUrdu ? 'آپ کی ذاتی عادات اور پوائنٹس کا تسلسل برقرار رکھنا۔' : 'Tracking your self-improvement streak and completed tasks.'}</li>
                </ul>
              </div>

              {/* 2. Why learning progress is stored */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>{isUrdu ? 'سیکھنے کی پیش رفت کیوں محفوظ کی جاتی ہے؟' : 'Why is Learning Progress Stored?'}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isUrdu
                    ? 'پیش رفت اس لیے محفوظ کی جاتی ہے تاکہ اگلی بار جب آپ ایپ کھولیں تو آپ کو وہیں سے سبق ملے جہاں آپ نے چھوڑا تھا، آپ کے حل شدہ ٹاسکس یاد رہیں اور AI Mentor آپ کی سابقہ مشق کے مطابق اگلا بہترین قدم تجویز کر سکے۔'
                    : 'Progress is stored so that you can resume lessons seamlessly across sessions, retain your streak points and completed milestones, and receive tailored next-best-step recommendations from the AI Mentor.'}
                </p>
              </div>

              {/* 3. How AI recommendations work */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>{isUrdu ? 'AI Mentor کی تجاویز کیسے کام کرتی ہیں؟' : 'How Do AI Mentor Recommendations Work?'}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isUrdu
                    ? 'جب آپ "مجھے آگے کیا کرنا چاہیے؟" پوچھتے ہیں، AI ماڈل آپ کے منتخب کردہ کورس، فعال مشن اور عمر کی سطح کو بطور سیاق و سباق استعمال کر کے عملی مشورہ تیار کرتا ہے۔ آپ کا کوئی حساس ذاتی ڈیٹا یا پاس ورڈ شیئر نہیں کیا جاتا۔'
                    : 'When you ask "What should I do next?", the AI Mentor considers your current course, active mission, and age group to generate a structured 6-point plan. No sensitive personal credentials are ever exposed.'}
                </p>
              </div>

              {/* 4. Local first & Cloud sync */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-slate-700" />
                  <span>{isUrdu ? 'لوکل اسٹوریج اور کلاؤڈ سنک' : 'Local Storage & Optional Cloud Sync'}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isUrdu
                    ? 'سیکھو بنیادی طور پر آپ کی ڈیوائس پر آف لائن کام کرتا ہے۔ اگر آپ گوگل سائن ان کا انتخاب کرتے ہیں، تو آپ کا تعلیمی ریکارڈ محفوظ طور پر کلاؤڈ سے ہم آہنگ ہو جاتا ہے تاکہ دوسری ڈیوائس پر بھی دستیاب رہے۔'
                    : 'Seekho operates locally on your device by default. If you choose to sign in with Google, your educational progress syncs securely to allow seamless multi-device access.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: TRUST, SAFETY & ETHICAL BOUNDARIES */}
          {activeTab === 'trust' && (
            <div className="space-y-4 font-arabic">
              {/* Critical warning banner */}
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-300 space-y-2">
                <div className="flex items-center gap-2 text-amber-950 font-bold text-xs sm:text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{isUrdu ? 'اہم حفاظتی ہدایات: چیٹ میں حساس ڈیٹا درج نہ کریں' : 'Safety Warning: Never Enter Sensitive Information'}</span>
                </div>
                <p className="text-xs text-amber-900 leading-relaxed">
                  {isUrdu
                    ? 'براہِ کرم AI چیٹ یا کسی بھی فارم میں اپنے پاس ورڈ، بینک اکاؤنٹ کی تفصیلات، کریڈٹ/ڈیبٹ کارڈ نمبر، شناختی کارڈ (CNIC) نمبر یا حساس قانونی دستاویزات کبھی درج نہ کریں۔ سیکھو کبھی آپ سے ایسے کوائف کا تقاضا نہیں کرتا۔'
                    : 'Please never enter passwords, bank account numbers, credit/debit cards, national identity card (CNIC) numbers, or sensitive confidential documents into AI chats. Seekho will never ask for such information.'}
                </p>
              </div>

              {/* AI Mistakes & Independent Verification */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  <span>{isUrdu ? 'اے آئی رہنمائی کی حدود اور آزادانہ تصدیق' : 'AI Limitations & Independent Verification'}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isUrdu
                    ? 'مصنوعی ذہانت ایک مددگار مشیر ہے، لیکن اس کے جوابات میں کمی یا غلطی ہو سکتی ہے۔ اہم طبی، قانونی، مالیاتی یا زندگی کے بڑے فیصلوں میں صرف AI کے جواب پر انحصار نہ کریں بلکہ متعلقہ مستند ماہرین سے آزادانہ تصدیق کریں۔'
                    : 'AI is a supportive assistant, but its generated responses may occasionally contain errors. For critical medical, legal, financial, or major life choices, always verify independently with qualified human professionals.'}
                </p>
              </div>

              {/* Verified Quran & Hadith */}
              <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200 space-y-1.5">
                <h4 className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-800" />
                  <span>{isUrdu ? 'مستند قرآنی و نبوی حوالہ جات' : 'Verified Quran & Hadith References'}</span>
                </h4>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  {isUrdu
                    ? 'سیکھو میں موجود اخلاقی رہنمائی اور احادیث کے اسباق مستند کتب (جیسے صحیح بخاری، صحیح مسلم وغیرہ) اور قرآنی سورتوں کے اصل حوالوں سے ماخوذ ہیں تاکہ خالصتاً اصلاحِ نفس اور اخلاقی تربیت کی جا سکے۔'
                    : 'Ethical and spiritual reflections within Seekho are intended to reference authentic sources (such as Sahih al-Bukhari, Sahih Muslim, and direct Quranic chapters) strictly for character building and moral education.'}
                </p>
              </div>

              {/* Sincerity over public show */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-rose-700" />
                  <span>{isUrdu ? 'نیک اعمال اخلاص کے لیے ہیں، عوامی مقابلے کے لیے نہیں' : 'Good Deeds are for Sincerity, Not Public Competition'}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isUrdu
                    ? 'سیکھو میں پوائنٹس اور اسٹریک صرف آپ کی اپنی ذاتی حوصلہ افزائی اور یاد دہانی کے لیے ہیں۔ اچھے کام اور اخلاقی تربیت انسان اور اس کے رب کے درمیان اخلاص پر مبنی ہوتے ہیں، دکھاوے یا دنیاوی دوڑ کے لیے نہیں۔'
                    : 'Points and streaks in Seekho exist solely for your personal motivation. Good deeds and moral growth are matters of sincere devotion between you and your Creator—never for public showing off or vanity.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: CREATOR & CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-4 font-arabic">
              <div className="bg-emerald-50/70 p-5 rounded-3xl border border-emerald-200/80 space-y-3">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  {isUrdu ? 'بانی و تخلیق کار' : 'Founder & Creator'}
                </div>
                <div className="text-xl sm:text-2xl font-black text-emerald-950 flex items-center gap-3">
                  <span>{isUrdu ? 'بانی: وسیم صابر' : 'Founder: Waseem Sabir'}</span>
                  <span className="text-sm font-normal text-emerald-700">
                    {isUrdu ? '(Waseem Sabir)' : '(بانی: وسیم صابر)'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  {isUrdu
                    ? 'سیکھو کی بنیاد اس سوچ کے ساتھ رکھی گئی کہ پاکستان اور دنیا بھر میں ہر فرد—شہر سے لے کر دیہات تک—کو بغیر کسی مشکل رکاوٹ کے مفید عملی ہنر، صائب سوچ اور باوقار کردار سیکھنے کی سہولت میسر آ سکے۔'
                    : 'Seekho was conceived and built with the vision of making practical life skills, dignified character, and wise decision-making accessible to every individual and household—from bustling cities to remote villages.'}
                </p>
              </div>

              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-700" />
                  <span>{isUrdu ? 'رابطہ اور مخلصانہ آراء (Feedback & Suggestions)' : 'Contact & Sincere Feedback'}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isUrdu
                    ? 'اگر آپ کے پاس سیکھو کو مزید بہتر، آسان یا مفید بنانے کے لیے کوئی تجویز، تصحیح یا مشورہ ہو، تو ہم آپ کے تعاون کا دل سے خیر مقدم کرتے ہیں۔'
                    : 'If you have ideas, corrections, or suggestions to make Seekho more effective, clear, or accessible for learners, we warmly welcome your feedback.'}
                </p>
                <div className="pt-2 flex items-center gap-2 flex-wrap text-xs">
                  <span className="font-bold text-slate-700">{isUrdu ? 'ای میل رابطہ:' : 'Direct Email:'}</span>
                  <a
                    href="mailto:sabirwasim550@gmail.com"
                    className="font-bold text-emerald-800 hover:text-emerald-950 bg-white px-3 py-1 rounded-xl border border-slate-200 hover:border-emerald-400 transition"
                  >
                    sabirwasim550@gmail.com
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer with Creator Attribution & Action */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600 font-arabic text-center sm:text-start">
            <span className="font-semibold text-slate-700">
              {isUrdu ? 'بانی و تخلیق کار:' : 'Founder & Creator:'}
            </span>{' '}
            <span className="text-emerald-900 font-bold">
              {isUrdu ? 'بانی: وسیم صابر (Waseem Sabir)' : 'Waseem Sabir (بانی: وسیم صابر)'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs w-full sm:w-auto font-arabic transition"
          >
            {isUrdu ? 'سمجھ گیا / جاری رکھیں' : 'Got it / Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};



