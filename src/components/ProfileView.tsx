import React, { useState } from 'react';
import { 
  User as UserIcon, 
  Settings, 
  Flame, 
  Award, 
  BookOpen, 
  Trophy, 
  MapPin, 
  Languages, 
  Check, 
  RotateCcw,
  Shield,
  HeartHandshake,
  FolderKanban,
  Briefcase,
  LogIn,
  LogOut,
  Cloud,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { AgeGroup, Language, UserProfile } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';
import { useAuth } from '../lib/AuthContext';
import { SeekhoLogo } from './SeekhoLogo';

interface ProfileViewProps {
  language: Language;
  userProfile: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  onOpenAssessment: () => void;
  onOpenVisionModal: () => void;
  onOpenPortfolio?: () => void;
  onOpenOpportunities?: () => void;
  onOpenWelcome?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  language,
  userProfile,
  onUpdateProfile,
  onOpenAssessment,
  onOpenVisionModal,
  onOpenPortfolio,
  onOpenOpportunities,
  onOpenWelcome,
}) => {
  const t = UI_TRANSLATIONS[language];
  const { user, signInWithGoogle, signOut, isSyncing } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userProfile.name);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(userProfile.ageGroup);
  const [village, setVillage] = useState(userProfile.village);
  const [role, setRole] = useState(userProfile.role);

  const handleGoogleSignIn = async () => {
    try {
      setAuthError(null);
      setIsAuthLoading(true);
      await signInWithGoogle();
    } catch (err: any) {
      setAuthError(err?.message || (language === 'ur' ? 'لاگ ان نہیں ہو سکا۔ دوبارہ کوشش کریں۔' : 'Failed to sign in with Google.'));
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsAuthLoading(true);
      await signOut();
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({ name, ageGroup, village, role });
    setIsEditing(false);
  };

  const ageGroups: { id: AgeGroup; label: string }[] = [
    { id: '10-15', label: '10–15 (School / Early Youth)' },
    { id: '16-25', label: '16–25 (College / Skills / Career)' },
    { id: '26-45', label: '26–45 (Work / Family / Enterprise)' },
    { id: '46-60', label: '46–60 (Experienced / Leadership)' },
    { id: '61-70', label: '61–70 (Lifelong Learner & Elder Mentor)' },
    { id: '70+', label: '70+ (Senior Elder & Master of Wisdom)' },
  ];

  return (
    <div className="space-y-6 pb-24 max-w-4xl mx-auto px-3 sm:px-6 pt-2">
      {/* Profile Header Card */}
      <div className="bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-emerald-500/30 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl font-black shadow-inner border border-white/20">
              {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : 'س'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-white">
                  {userProfile.name || (language === 'ur' ? 'معزز ساتھی' : 'Learner')}
                </h1>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-400/30 text-emerald-300 font-bold border border-emerald-400/30">
                  {userProfile.ageGroup} {language === 'ur' ? 'سال' : 'yrs'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{userProfile.village || 'ڈوبے، برنالہ، آزاد کشمیر'}</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/20 transition self-start sm:self-auto"
          >
            {isEditing ? (language === 'ur' ? 'منسوخ' : 'Cancel') : (language === 'ur' ? 'پروفائل تبدیل کریں' : 'Edit Profile')}
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 pt-6 border-t border-white/15">
          <div className="bg-white/10 p-3 rounded-2xl border border-white/10 text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-lg">
              <Flame className="w-4 h-4 fill-amber-400" />
              <span>{userProfile.streakDays}</span>
            </div>
            <div className="text-[11px] text-emerald-200 mt-0.5">{language === 'ur' ? 'دن کا تسلسل' : 'Day Streak'}</div>
          </div>

          <div className="bg-white/10 p-3 rounded-2xl border border-white/10 text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-300 font-black text-lg">
              <Award className="w-4 h-4" />
              <span>{userProfile.points}</span>
            </div>
            <div className="text-[11px] text-emerald-200 mt-0.5">{language === 'ur' ? 'پوائنٹس' : 'Skill Points'}</div>
          </div>

          <div className="bg-white/10 p-3 rounded-2xl border border-white/10 text-center">
            <div className="flex items-center justify-center gap-1 text-blue-300 font-black text-lg">
              <BookOpen className="w-4 h-4" />
              <span>{userProfile.enrolledCourseIds.length}</span>
            </div>
            <div className="text-[11px] text-emerald-200 mt-0.5">{language === 'ur' ? 'کورسز' : 'Enrolled'}</div>
          </div>

          <div className="bg-white/10 p-3 rounded-2xl border border-white/10 text-center">
            <div className="flex items-center justify-center gap-1 text-purple-300 font-black text-lg">
              <Trophy className="w-4 h-4" />
              <span>{userProfile.completedProjectIds.length}</span>
            </div>
            <div className="text-[11px] text-emerald-200 mt-0.5">{language === 'ur' ? 'پروجیکٹس' : 'Projects'}</div>
          </div>
        </div>
      </div>

      {/* Edit Profile Form */}
      {isEditing && (
        <form onSubmit={handleSave} className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-900">
            {language === 'ur' ? 'ذاتی معلومات اپ ڈیٹ کریں' : 'Update Personal Information'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {language === 'ur' ? 'پورا نام' : 'Full Name'}
              </label>
              <input
                id="edit-profile-name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {language === 'ur' ? 'عمر کا گروپ' : 'Age Group'}
              </label>
              <select
                id="edit-profile-age-select"
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value as AgeGroup)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
              >
                {ageGroups.map(ag => (
                  <option key={ag.id} value={ag.id}>{ag.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {language === 'ur' ? 'گاؤں یا شہر' : 'Village or City'}
              </label>
              <input
                id="edit-profile-village-input"
                type="text"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                placeholder="ڈوبے، برنالہ، آزاد کشمیر"
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {language === 'ur' ? 'پیشہ یا شعبہ' : 'Occupation / Role'}
              </label>
              <input
                id="edit-profile-role-input"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="طالب علم / کسان / بزرگ استاد"
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
            >
              {language === 'ur' ? 'منسوخ' : 'Cancel'}
            </button>
            <button
              id="save-profile-btn"
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs"
            >
              {language === 'ur' ? 'محفوظ کریں' : 'Save Changes'}
            </button>
          </div>
        </form>
      )}

      {/* Firebase Account & Cloud Sync Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold ${
              user ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
            }`}>
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                  {language === 'ur' ? 'کلاؤڈ اکاؤنٹ اور ڈیٹا محفوظ کرنا' : 'Cloud Account & Data Persistence'}
                </h3>
                {user ? (
                  <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1 font-arabic border border-emerald-300">
                    <CheckCircle2 className="w-3 h-3" />
                    {language === 'ur' ? 'آن لائن محفوظ' : 'Synced'}
                  </span>
                ) : (
                  <span className="text-[11px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full font-arabic border border-amber-300">
                    {language === 'ur' ? 'لوکل موڈ (غیر محفوظ)' : 'Local Mode'}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 font-arabic mt-0.5">
                {user 
                  ? (language === 'ur' 
                      ? `گوگل اکاؤنٹ منسلک ہے: ${user.email || user.displayName}` 
                      : `Connected Google account: ${user.email || user.displayName}`)
                  : (language === 'ur' 
                      ? 'اپنے کورسز کی پیش رفت اور سرٹیفکیٹس ہمیشہ محفوظ رکھنے کے لیے گوگل سے سائن ان کریں۔' 
                      : 'Sign in with Google to persistently store your progress, certificates, and portfolio across devices.')}
              </p>
            </div>
          </div>

          <div>
            {user ? (
              <button
                id="btn-profile-signout"
                onClick={handleSignOut}
                disabled={isAuthLoading}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition flex items-center gap-1.5 font-arabic disabled:opacity-50"
              >
                <LogOut className="w-4 h-4" />
                <span>{language === 'ur' ? 'لاگ آؤٹ کریں' : 'Sign Out'}</span>
              </button>
            ) : (
              <button
                id="btn-profile-google-signin"
                onClick={handleGoogleSignIn}
                disabled={isAuthLoading}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs sm:text-sm shadow-sm transition flex items-center gap-2 font-arabic disabled:opacity-50"
              >
                {isAuthLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <LogIn className="w-4 h-4" />
                )}
                <span>{language === 'ur' ? 'گوگل سے سائن ان کریں' : 'Sign in with Google'}</span>
              </button>
            )}
          </div>
        </div>

        {authError && (
          <div className="p-3 bg-red-50 text-red-800 text-xs rounded-xl border border-red-200 font-arabic">
            {authError}
          </div>
        )}
      </div>

      {/* Quick Action Shortcuts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {onOpenOpportunities && (
          <div 
            id="btn-profile-to-opportunities"
            onClick={onOpenOpportunities}
            className="bg-indigo-50/90 p-5 rounded-2xl border-2 border-indigo-300 shadow-xs hover:border-indigo-500 cursor-pointer transition flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black text-indigo-950 font-arabic">
                  {language === 'ur' ? 'مواقع (Opportunities)' : 'Opportunities'}
                </h3>
                <p className="text-xs text-indigo-800 font-arabic">
                  {language === 'ur' ? 'نوکریاں، فری لانسنگ، مقامی کام و پروجیکٹس' : 'Jobs, freelancing, local work & projects.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {onOpenPortfolio && (
          <div 
            id="btn-profile-to-portfolio"
            onClick={onOpenPortfolio}
            className="bg-teal-50/80 p-5 rounded-2xl border-2 border-teal-300 shadow-xs hover:border-teal-500 cursor-pointer transition flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                <FolderKanban className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black text-teal-950 font-arabic">
                  {language === 'ur' ? 'میری Skills اور Portfolio' : 'My Skills & Portfolio'}
                </h3>
                <p className="text-xs text-teal-800 font-arabic">
                  {language === 'ur' ? 'مہارتیں، مکمل پروجیکٹس اور برادری کی خدمات' : 'Skills progress, practical projects & contributions.'}
                </p>
              </div>
            </div>
          </div>
        )}

        <div 
          onClick={onOpenAssessment}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-400 cursor-pointer transition flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {language === 'ur' ? 'اسکل اسیسمنٹ دوبارہ حل کریں' : 'Retake Skill Assessment'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'ur' ? 'اپنی دلچسپیوں اور وقت کے مطابق نئی تجاویز حاصل کریں' : 'Re-customize your roadmap and recommended skills.'}
              </p>
            </div>
          </div>
        </div>

        <div 
          onClick={onOpenVisionModal}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-400 cursor-pointer transition flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {language === 'ur' ? 'سیکھو کا 7 رکنی وژن دیکھیں' : 'View Seekho 7-Step Vision'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'ur' ? 'سیکھیں → مشق کریں → خود کو سنواریں → دنیا کی خدمت' : 'Learn → Practice → Self → Family → Community → World'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* App Information & Creator / Founder Card */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <SeekhoLogo className="w-11 h-11 shadow-xs" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-arabic">
                  {language === 'ur' ? 'سیکھو (Seekho) — تعارف و وژن' : 'About Seekho & Vision'}
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  v2.0
                </span>
              </div>
              <p className="text-xs text-emerald-800 font-bold font-arabic mt-0.5">
                {language === 'ur' ? 'زندگی سیکھیں، بہتر بنائیں، عمل کریں' : 'Learn Life, Improve, Act'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {onOpenWelcome && (
              <button
                onClick={onOpenWelcome}
                className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs border border-emerald-200 transition font-arabic"
              >
                {language === 'ur' ? 'خوش آمدید اسکرین' : 'Welcome Screen'}
              </button>
            )}
            <button
              onClick={onOpenVisionModal}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 font-bold text-xs border border-slate-200 transition font-arabic self-start sm:self-auto"
            >
              {language === 'ur' ? 'مکمل روڈ میپ و رازداری' : 'Full Roadmap & Privacy'}
            </button>
          </div>
        </div>

        {/* Short Description & Core Purpose */}
        <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/80 space-y-1.5 font-arabic">
          <div className="text-[11px] font-bold text-emerald-800">
            {language === 'ur' ? 'بنیادی منشور (Core Message):' : 'Core Message:'}
          </div>
          <p className="text-xs sm:text-sm font-bold text-emerald-950 leading-relaxed">
            {language === 'ur'
              ? '”سیکھو — علم کو عمل، کردار اور بہتر زندگی سے جوڑنے کی کوشش ہے۔“'
              : '“Seekho is a dedicated effort to connect knowledge with action, character, and a better life.”'}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
            {language === 'ur'
              ? 'سیکھو ایک AI Life Mentor ہے جو علم کو عملی زندگی، مہارت، کردار اور روزمرہ عمل سے جوڑتا ہے۔'
              : 'Seekho is an AI Life Mentor connecting knowledge with practical life, skills, character, and daily action.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200/80 space-y-1.5">
            <div className="text-[11px] font-bold text-emerald-800 font-arabic">
              {language === 'ur' ? 'بانی و تخلیق کار (Founder & Creator):' : 'Founder & Creator:'}
            </div>
            <div className="text-base font-black text-emerald-950 font-arabic flex items-center gap-2">
              <span>{language === 'ur' ? 'بانی: وسیم صابر' : 'Founder: Waseem Sabir'}</span>
              <span className="text-xs text-emerald-700 font-normal">
                {language === 'ur' ? '(Waseem Sabir)' : '(بانی: وسیم صابر)'}
              </span>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
            <div className="text-[11px] font-bold text-slate-600 font-arabic">
              {language === 'ur' ? 'بنیادی مقاصد (Core Aims):' : 'Core Aims:'}
            </div>
            <div className="text-xs text-slate-700 font-arabic leading-relaxed">
              {language === 'ur' 
                ? 'عملی ہنر، صائب سوچ و فیصلے، کیریئر و حلال روزگار، اخلاق و کردار، قرآن و سنت کی رہنمائی اور روزانہ عملی مشنز۔'
                : 'Practical life skills, wise decisions, career & halal earnings, character discipline, Quran & authentic Hadith guidance, and daily action.'}
            </div>
          </div>
        </div>
      </div>

      {/* Platform, Data Privacy & Trust Note */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3 font-arabic">
        <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-700" />
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              {language === 'ur' ? 'رازداری، ڈیٹا اور اعتماد' : 'Privacy, Data & User Trust'}
            </h4>
          </div>
          <button
            onClick={onOpenVisionModal}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 transition"
          >
            {language === 'ur' ? 'مکمل پالیسی و تفصیلات' : 'Full Policy & Details'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-1">
            <span className="font-bold text-slate-800 block">
              {language === 'ur' ? '🔒 محفوظ لوکل ڈیٹا' : '🔒 Local-First Storage'}
            </span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              {language === 'ur'
                ? 'آپ کی تعلیمی پیش رفت آپ کی ڈیوائس پر محفوظ رہتی ہے۔ گوگل سائن ان سے کلاؤڈ سنک اختیاری ہے۔'
                : 'Your learning progress is stored on your device. Cloud sync with Google is optional.'}
            </p>
          </div>

          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-1">
            <span className="font-bold text-slate-800 block">
              {language === 'ur' ? '🛡️ حساس کوائف نہ دیں' : '🛡️ No Sensitive Info in AI'}
            </span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              {language === 'ur'
                ? 'AI چیٹ میں پاس ورڈ یا بینک و شناختی کارڈ کی تفصیلات درج نہ کریں۔'
                : 'Never share passwords, banking details, or national IDs in AI chats.'}
            </p>
          </div>

          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-1">
            <span className="font-bold text-slate-800 block">
              {language === 'ur' ? '📖 مستند حوالے اور اخلاص' : '📖 Verified References'}
            </span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              {language === 'ur'
                ? 'قرآنی و نبوی رہنمائی مستند ذرائع سے ہے اور اچھے کام دکھاوے کے لیے نہیں بلکہ اخلاص پر مبنی ہیں۔'
                : 'Islamic guidance references verified sources; good deeds are for personal sincerity.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
