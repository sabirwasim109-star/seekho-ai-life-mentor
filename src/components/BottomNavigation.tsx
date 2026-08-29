import React from 'react';
import { 
  Home, 
  Compass,
  GraduationCap, 
  Wrench,
  UserCircle,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';

export type NavTab = 'home' | 'journey' | 'mylearning' | 'skills' | 'aiteacher' | 'community' | 'myarea' | 'profile' | 'opportunities' | 'elders' | 'portfolio' | 'library';

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

  // 5 Primary Essential Tabs as requested
  const primaryNavItems = [
    { 
      id: 'home' as NavTab, 
      labelUrdu: 'آج', 
      labelEn: 'Today', 
      icon: Home,
      symbol: '🏠'
    },
    { 
      id: 'journey' as NavTab, 
      labelUrdu: 'میرا سفر', 
      labelEn: 'Journey', 
      icon: Compass,
      symbol: '🧭'
    },
    { 
      id: 'mylearning' as NavTab, 
      labelUrdu: 'میری تعلیم', 
      labelEn: 'Learning', 
      icon: GraduationCap,
      symbol: '📚'
    },
    { 
      id: 'skills' as NavTab, 
      labelUrdu: 'ہنر', 
      labelEn: 'Skills', 
      icon: Wrench,
      symbol: '🛠️'
    },
    { 
      id: 'profile' as NavTab, 
      labelUrdu: 'پروفائل', 
      labelEn: 'Profile', 
      icon: UserCircle,
      symbol: '👤'
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-lg py-1 px-2 sm:px-4">
      <div className="max-w-xl mx-auto flex items-center justify-between">
        {primaryNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id || (item.id === 'journey' && (activeTab as any) === 'roadmap');

          return (
            <button
              key={item.id}
              id={`nav-tab-${item.id}`}
              onClick={() => onSelectTab(item.id)}
              className={`flex-1 flex flex-col items-center justify-center min-w-[56px] py-1 px-0.5 rounded-2xl transition-all relative ${
                isActive
                  ? 'text-emerald-800 font-black'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-100/90 scale-105 text-emerald-800 shadow-xs'
                    : 'hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-5 h-5 sm:w-5.5 sm:h-5.5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              </div>

              {language === 'dual' ? (
                <div className="flex flex-col items-center mt-0.5 leading-none">
                  <span className={`text-[12px] sm:text-[13px] whitespace-nowrap text-center font-arabic ${isActive ? 'font-black text-emerald-900' : 'font-bold'}`}>
                    {item.labelUrdu}
                  </span>
                  <span className={`text-[9px] sm:text-[10px] font-sans tracking-tight font-medium ${isActive ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}>
                    {item.labelEn}
                  </span>
                </div>
              ) : (
                <span className={`text-[12px] sm:text-[13px] mt-0.5 whitespace-nowrap text-center leading-tight ${language === 'ur' ? 'font-arabic' : 'font-sans'} ${isActive ? 'font-black text-emerald-900' : 'font-bold'}`}>
                  {language === 'ur' ? item.labelUrdu : item.labelEn}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

