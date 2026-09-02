import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, 
  X, 
  Globe, 
  ZoomIn, 
  Sun, 
  Moon, 
  Volume2, 
  Eye, 
  Shield, 
  User, 
  Bell, 
  Info, 
  HelpCircle, 
  LogOut, 
  LogIn, 
  CheckCircle2,
  Sliders,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { useAuth } from '../lib/AuthContext';

export interface SettingsModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
  onChangeLanguage: (lang: Language) => void;
  textScale: number;
  onSetTextScale: (scale: number) => void;
  onOpenVision: () => void;
  onOpenProfile: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  language,
  onClose,
  onChangeLanguage,
  textScale,
  onSetTextScale,
  onOpenVision,
  onOpenProfile
}) => {
  const { user, signInWithGoogle, logout } = useAuth();
  const [activeSection, setActiveSection] = useState<'general' | 'accessibility' | 'account' | 'experience' | 'about'>('general');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="bg-white text-slate-900 rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shadow-md">
              <Settings className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-arabic">
                {language === 'ur' ? 'ایپ سیٹنگز اور ترجیحات' : 'Seekho Settings & Preferences'}
              </h2>
              <p className="text-xs text-slate-300 font-arabic">
                {language === 'ur' ? 'اپنی ضرورت کے مطابق ایپ کو حسب ضرورت بنائیں' : 'Customize your learning and accessibility experience'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Toast */}
        {successMessage && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2.5 text-emerald-800 text-xs font-bold text-center font-arabic flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto px-4 py-2 gap-2 shrink-0">
          {[
            { id: 'general', labelUr: 'جنرل (General)', icon: Globe },
            { id: 'accessibility', labelUr: 'رسائی (Accessibility)', icon: ZoomIn },
            { id: 'account', labelUr: 'اکاؤنٹ (Account)', icon: User },
            { id: 'experience', labelUr: 'تجربہ (Experience)', icon: Sliders },
            { id: 'about', labelUr: 'تعارف (About)', icon: Info },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition font-arabic whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.labelUr}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 font-arabic">
          {activeSection === 'general' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  {language === 'ur' ? 'زبان کی ترجیح (Language Preference)' : 'Language Preference'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'dual', title: '🌐 دونوں (Dual Language)', desc: 'Urdu + English side by side' },
                    { id: 'ur', title: 'اردو (Urdu Only)', desc: 'مستند اور مخلص اردو' },
                    { id: 'en', title: 'English Only', desc: 'Professional English' },
                  ].map((langOpt) => (
                    <button
                      key={langOpt.id}
                      onClick={() => {
                        onChangeLanguage(langOpt.id as Language);
                        showToast(language === 'ur' ? 'زبان کامیابی سے تبدیل ہو گئی' : 'Language updated successfully');
                      }}
                      className={`p-4 rounded-2xl border text-start transition flex flex-col justify-between ${
                        language === langOpt.id
                          ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 shadow-xs'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className="font-black text-sm">{langOpt.title}</span>
                      <span className="text-xs text-slate-500 mt-1">{langOpt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  {language === 'ur' ? 'آواز اور صوتی ترتیبات (Audio & Voice)' : 'Audio & Voice Settings'}
                </h3>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-emerald-700" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        {language === 'ur' ? 'آڈیو رہنما گائیڈ (Audio Guide)' : 'Seekho Audio Guide'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {language === 'ur' ? 'پرسکون، واضح اور باوقار تلفظ' : 'Calm, clear and dignified audio narration'}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    {language === 'ur' ? 'فعال (Active)' : 'Active'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'accessibility' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  {language === 'ur' ? 'ٹیکسٹ سائز اور ڈسپلے اسکیل (Text Size & Scale)' : 'Text Size & Scale'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'ur' ? 'بزرگ صارفین یا بہتر بصارت کے لیے فونٹ سائز بڑا کریں' : 'Adjust font scaling for enhanced reading comfort'}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { scale: 1.0, label: language === 'ur' ? 'معیاری (Standard)' : 'Standard (100%)' },
                    { scale: 1.15, label: language === 'ur' ? 'بڑا (Large 115%)' : 'Large (115%)' },
                    { scale: 1.3, label: language === 'ur' ? 'بہت بڑا (Extra Large 130%)' : 'Extra Large (130%)' },
                  ].map((sz) => (
                    <button
                      key={sz.scale}
                      onClick={() => {
                        onSetTextScale(sz.scale);
                        showToast(language === 'ur' ? 'فন্ট سائز اپ ڈیٹ ہو گیا' : 'Text size scale updated');
                      }}
                      className={`p-4 rounded-2xl border text-center transition font-bold text-xs sm:text-sm ${
                        textScale === sz.scale
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-xs'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {sz.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  {language === 'ur' ? 'بصری امداد (Visual Accessibility)' : 'Visual Assistance'}
                </h3>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-indigo-600" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        {language === 'ur' ? 'زیادہ کنٹراسٹ موڈ (High Contrast)' : 'High Contrast Mode'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {language === 'ur' ? 'تحریر اور پس منظر میں واضح فرق' : 'Sharper color contrast for clearer visibility'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setHighContrast(!highContrast);
                      showToast(highContrast ? 'کنٹراسٹ عام کر دیا گیا' : 'High contrast enabled');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      highContrast ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                    }`}
                  >
                    {highContrast ? (language === 'ur' ? 'آن (On)' : 'Enabled') : (language === 'ur' ? 'آف (Off)' : 'Disabled')}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'account' && (
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt="User" className="w-12 h-12 rounded-2xl object-cover" />
                    ) : (
                      <User className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      {user?.displayName || user?.email || (language === 'ur' ? 'مہمان صارف (Guest User)' : 'Guest Learner')}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {user?.email ? user.email : (language === 'ur' ? 'کلاؤڈ سنک کے لیے گوگل سے سائن ان کریں' : 'Sign in with Google to sync progress across devices')}
                    </p>
                  </div>
                </div>

                {user ? (
                  <button
                    onClick={() => logout().then(() => showToast('Successfully signed out'))}
                    className="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs flex items-center gap-1.5 transition"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{language === 'ur' ? 'سائن آؤٹ' : 'Sign Out'}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => signInWithGoogle().catch((e) => console.warn('Sign-in note:', e))}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>{language === 'ur' ? 'سائن ان' : 'Sign In'}</span>
                  </button>
                )}
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-900 text-xs sm:text-sm space-y-2">
                <div className="font-black flex items-center gap-1.5 text-emerald-950">
                  <Shield className="w-4 h-4 text-emerald-700" />
                  <span>{language === 'ur' ? 'ڈیٹا کی حفاظت اور رازداری' : 'Data Privacy & Cloud Sync'}</span>
                </div>
                <p className="leading-relaxed text-emerald-900/90">
                  {language === 'ur'
                    ? 'آپ کا تمام تعلیمی ڈیٹا اور پوائنٹس محفوظ طریقے سے مطابقت پذیر ہوتے ہیں تاکہ آپ کسی بھی ڈیوائس سے سیکھنا جاری رکھ سکیں۔'
                    : 'All your learning progress and milestones are securely synced so you can resume learning seamlessly across devices.'}
                </p>
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      {language === 'ur' ? 'روزانہ یاد دہانی اور اطلاعات' : 'Daily Notifications & Reminders'}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {language === 'ur' ? 'صبح و شام نیکی اور علم کے پیغامات' : 'Receive gentle reminders for daily reflections and lessons'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setNotificationsEnabled(!notificationsEnabled);
                      showToast(notificationsEnabled ? 'نوٹیفیکیشن بند کر دیے گئے' : 'Notifications enabled');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      notificationsEnabled ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-800'
                    }`}
                  >
                    {notificationsEnabled ? (language === 'ur' ? 'آن (On)' : 'Active') : (language === 'ur' ? 'آف (Off)' : 'Muted')}
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      {language === 'ur' ? 'صوتی اثرات اور تلاوت' : 'Sound Effects & Audio Playback'}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {language === 'ur' ? 'بٹن کلک اور مکمل ہونے پر خوشگوار آواز' : 'Gentle audio cues upon completing tasks and lessons'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSoundEnabled(!soundEnabled);
                      showToast(soundEnabled ? 'صوتی اثرات آف ہو گئے' : 'Sound enabled');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      soundEnabled ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-800'
                    }`}
                  >
                    {soundEnabled ? (language === 'ur' ? 'آن (On)' : 'Active') : (language === 'ur' ? 'آف (Off)' : 'Muted')}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'about' && (
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-6 rounded-2xl space-y-3 shadow-md">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    {language === 'ur' ? 'سیکھو ویژن' : 'Seekho Vision'}
                  </span>
                </div>
                <h4 className="text-lg font-black font-arabic leading-snug">
                  {language === 'ur'
                    ? 'اپنے لیے، خاندان کے لیے، معاشرے اور پوری انسانیت کے لیے فائدہ مند بنیں'
                    : 'Become beneficial to yourself, your family, society, and all of humanity'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-arabic">
                  {language === 'ur'
                    ? 'سیکھو کا مقصد علم کو عمل میں بدلنا، فکری بیداری پیدا کرنا اور ایک ذمہ دار اور باعزت نسل تیار کرنا ہے۔'
                    : 'Seekho is dedicated to turning knowledge into action, sparking critical reflection, and fostering a responsible, capable generation.'}
                </p>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenVision();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-xs sm:text-sm transition font-arabic flex items-center gap-2"
                >
                  <span>{language === 'ur' ? 'ہمارا 7 نکاتی مشن دیکھیں' : 'View 7-Step Mission'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-arabic">
            {language === 'ur' ? 'سیکھو پلیٹ فارم — ورژن 2.5' : 'Seekho Platform — v2.5 Production'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm shadow-sm transition font-arabic"
          >
            {language === 'ur' ? 'محفوظ کریں اور بند کریں' : 'Save & Close'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
