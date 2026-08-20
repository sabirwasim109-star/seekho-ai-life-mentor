import React from 'react';
import { 
  Home, 
  GraduationCap, 
  Sparkles, 
  Bot, 
  Users, 
  MapPin, 
  UserCircle,
  Briefcase,
  HeartHandshake
} from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';

export type NavTab = 'home' | 'mylearning' | 'skills' | 'aiteacher' | 'community' | 'myarea' | 'profile' | 'opportunities' | 'elders' | 'portfolio' | 'library';

interface BottomNavigationProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  language: Language;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onSelectTab,
  language,
}) => {
  const t = UI_TRANSLATIONS[language];

  const navItems = [
    { id: 'home' as NavTab, labelUrdu: 'ہوم', labelEn: 'Home', icon: Home },
    { id: 'mylearning' as NavTab, labelUrdu: 'میری تعلیم', labelEn: 'Learning', icon: GraduationCap },
    { id: 'skills' as NavTab, labelUrdu: 'مہارتیں', labelEn: 'Skills', icon: Sparkles },
    { id: 'aiteacher' as NavTab, labelUrdu: 'AI استاد', labelEn: 'AI Teacher', icon: Bot, isHighlight: true },
    { id: 'community' as NavTab, labelUrdu: 'برادری', labelEn: 'Community', icon: Users },
    { id: 'myarea' as NavTab, labelUrdu: 'میرا علاقہ', labelEn: 'My Area', icon: MapPin },
    { id: 'profile' as NavTab, labelUrdu: 'پروفائل', labelEn: 'Profile', icon: UserCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-lg py-1 px-1 sm:px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const label = language === 'ur' ? item.labelUrdu : item.labelEn;

          return (
            <button
              key={item.id}
              id={`nav-tab-${item.id}`}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center min-w-[48px] sm:min-w-[60px] py-1.5 px-1 rounded-xl transition-all relative ${
                isActive
                  ? 'text-emerald-700 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {/* Highlight background pill for active or AI Teacher */}
              {item.isHighlight && !isActive && (
                <span className="absolute -top-1.5 right-1/2 translate-x-1/2 px-1 py-0.2 text-[9px] font-bold bg-amber-500 text-white rounded-full leading-tight">
                  AI
                </span>
              )}

              <div
                className={`p-1.5 rounded-lg transition-transform ${
                  isActive
                    ? 'bg-emerald-100/80 scale-110 text-emerald-800'
                    : item.isHighlight
                    ? 'bg-emerald-50 text-emerald-700'
                    : ''
                }`}
              >
                <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>

              <span className="text-[10.5px] sm:text-xs mt-0.5 whitespace-nowrap text-center leading-tight tracking-tight">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
