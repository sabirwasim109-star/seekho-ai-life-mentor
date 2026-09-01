import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Award, 
  Check, 
  Flame, 
  ShieldCheck, 
  HelpCircle, 
  Briefcase, 
  Layers, 
  Bot, 
  Laptop, 
  Smartphone, 
  Wrench, 
  Share2, 
  HeartHandshake, 
  AlertTriangle, 
  BookOpen, 
  TrendingUp, 
  FileText,
  Volume2,
  Square,
  Play,
  Home,
  Globe,
  Tag,
  Store,
  Compass,
  CheckSquare,
  CheckCircle,
  GraduationCap,
  Calculator,
  Send,
  Zap,
  Target,
  Users
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { SkillUniverseItem, getCategoryById } from '../data/skillsUniverseData';
import { speakText, stopSpeaking } from '../utils/speech';
import { SkillLearningJourneyView } from './SkillLearningJourneyView';

interface SkillUniverseDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: SkillUniverseItem | null;
  language: Language;
  userProfile: UserProfile;
  onOpenAITeacherWithPrompt?: (prompt?: string) => void;
  onSelectNextSkill?: (nextSkillId: string) => void;
  onRewardPoints?: (points: number, msgUrdu: string, msgEn: string) => void;
}

// 10-Stage Universal Journey Definition
interface JourneyStage {
  number: number;
  id: string;
  nameUrdu: string;
  nameEn: string;
  badgeUrdu: string;
  badgeEn: string;
  icon: string;
  color: string;
  descriptionUrdu: string;
  descriptionEn: string;
  whatToDoNowUrdu: string;
  whatToDoNowEn: string;
  deliverableUrdu: string;
  deliverableEn: string;
  points: number;
}

export const SkillUniverseDetailModal: React.FC<SkillUniverseDetailModalProps> = ({
  isOpen,
  onClose,
  skill,
  language,
  userProfile,
  onOpenAITeacherWithPrompt,
  onSelectNextSkill,
  onRewardPoints,
}) => {
  const isUrdu = language === 'ur';
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  // Tabs: learning_journey | journey | levels | suitability | practice | details | teach
  const [activeTab, setActiveTab] = useState<'learning_journey' | 'journey' | 'levels' | 'suitability' | 'practice' | 'details' | 'teach'>('learning_journey');
  const [selectedJourneyStage, setSelectedJourneyStage] = useState<number>(1);
  const [selectedLevelTab, setSelectedLevelTab] = useState<number>(0);

  // Completed progress
  const [completedStages, setCompletedStages] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('seekho_completed_universe_stages');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });

  const [completedLevels, setCompletedLevels] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('seekho_completed_universe_levels');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });

  // Practice Playground State
  const [practiceSubmission, setPracticeSubmission] = useState('');
  const [practiceChecklist, setPracticeChecklist] = useState<boolean[]>([false, false, false]);
  const [practiceSubmitted, setPracticeSubmitted] = useState(false);

  // Suitability Diagnostic State
  const [suitabilityAnswers, setSuitabilityAnswers] = useState({
    education: 'matric',
    dailyTime: '1h',
    device: 'mobile',
    budget: 'free',
    goal: 'home_income'
  });
  const [suitabilityEvaluated, setSuitabilityEvaluated] = useState(false);

  // Teaching Log State
  const [taughtName, setTaughtName] = useState('');
  const [taughtSubmitted, setTaughtSubmitted] = useState(false);

  // Voice State
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  if (!isOpen || !skill) return null;

  const category = getCategoryById(skill.categoryId);

  // 10-Stage Journey Generation tailored to this skill
  const journeyStages: JourneyStage[] = [
    {
      number: 1,
      id: 'discover',
      nameUrdu: '۱. دریافت (Discover)',
      nameEn: '1. Discover',
      badgeUrdu: 'پہلا تعارف',
      badgeEn: 'First Glance',
      icon: '🧭',
      color: 'emerald',
      descriptionUrdu: `یہ سمجھیں کہ ${skill.titleUrdu} کیا ہے، مارکیٹ میں اس کی کیا ضرورت ہے اور یہ آپ کی زندگی کو کیسے بدل سکتا ہے۔`,
      descriptionEn: `Understand what ${skill.titleEn} is and how it unlocks high-value opportunities.`,
      whatToDoNowUrdu: 'اس ہنر کا آڈیو تعارف سنیں اور بنیادی حقائق دیکھیں۔',
      whatToDoNowEn: 'Listen to voice intro and review core facts.',
      deliverableUrdu: 'ہنر کا تعارف اور دائرہ کار مکمل سمجھ لیا گیا۔',
      deliverableEn: 'Completed skill orientation.',
      points: 15
    },
    {
      number: 2,
      id: 'understand',
      nameUrdu: '۲. فہم و بصیرت (Understand)',
      nameEn: '2. Understand',
      badgeUrdu: 'بنیادی منطق',
      badgeEn: 'Core Logic',
      icon: '💡',
      color: 'teal',
      descriptionUrdu: 'اس ہنر کی بنیادی اصطلاحات، کام کرنے کے اصول اور عام غلطیوں سے آگاہی حاصل کریں۔',
      descriptionEn: 'Grasp fundamental workflows, terminologies, and safety rules.',
      whatToDoNowUrdu: 'درکار اوزار اور ضروری احتیاطیں پڑھیں۔',
      whatToDoNowEn: 'Review prerequisite tools and safety precautions.',
      deliverableUrdu: 'بنیادی اصولوں اور ٹولز کا فہم۔',
      deliverableEn: 'Understood core tooling and precautions.',
      points: 20
    },
    {
      number: 3,
      id: 'learn',
      nameUrdu: '۳. بنیادی سیکھنا (Learn)',
      nameEn: '3. Learn Fundamentals',
      badgeUrdu: 'بنیادی اسباق',
      badgeEn: 'Foundations',
      icon: '📚',
      color: 'blue',
      descriptionUrdu: 'قدم بہ قدم بنیادی اسباق دیکھیں اور ہر تصور کو آسانی سے ذہن نشین کریں۔',
      descriptionEn: 'Follow step-by-step foundation lessons in simple language.',
      whatToDoNowUrdu: 'لیول ۱ کے ۳ بنیادی اسباق مکمل کریں۔',
      whatToDoNowEn: 'Complete 3 foundational lessons.',
      deliverableUrdu: 'بنیادی کورس مکمل۔',
      deliverableEn: 'Completed foundation tier.',
      points: 25
    },
    {
      number: 4,
      id: 'practice',
      nameUrdu: '۴. عملی مشق (Practice)',
      nameEn: '4. Active Practice',
      badgeUrdu: 'ہاتھ سے کام',
      badgeEn: 'Hands-on',
      icon: '⚡',
      color: 'amber',
      descriptionUrdu: 'صرف پڑھنے یا دیکھنے کے بجائے اپنے ہاتھ سے اوزار یا ایپ استعمال کر کے عملی مشق کریں۔',
      descriptionEn: 'Apply the concepts actively with real software or physical tools.',
      whatToDoNowUrdu: 'پریکٹس ورک بینچ پر جا کر آج کا عملی ٹاسک مکمل کریں۔',
      whatToDoNowEn: 'Execute today active task on the practice workbench.',
      deliverableUrdu: 'پہلی عملی مشق فائل یا آؤٹ پٹ تیار۔',
      deliverableEn: 'First practical test deliverable created.',
      points: 35
    },
    {
      number: 5,
      id: 'mini_project',
      nameUrdu: '۵. چھوٹا پروجیکٹ (Mini Project)',
      nameEn: '5. Mini Project',
      badgeUrdu: 'سادہ تخلیق',
      badgeEn: 'First Asset',
      icon: '🛠️',
      color: 'indigo',
      descriptionUrdu: 'ایک مکمل مگر مختصر پروجیکٹ تیار کریں جیسے ایک سوشل میڈیا پوسٹر، چھوٹا کھاتہ یا سادہ وائرنگ۔',
      descriptionEn: 'Create a standalone mini asset (e.g. single poster, basic budget, sample cut).',
      whatToDoNowUrdu: '۲۰ سے ۳۰ منٹ میں ایک مکمل نمونہ پروجیکٹ بنائیں۔',
      whatToDoNowEn: 'Build one complete standalone mini-asset.',
      deliverableUrdu: 'مکمل فنکشنل چھوٹا پروجیکٹ۔',
      deliverableEn: 'Functional standalone mini-project.',
      points: 40
    },
    {
      number: 6,
      id: 'real_project',
      nameUrdu: '۶. حقیقی پروجیکٹ (Real Project)',
      nameEn: '6. Real World Project',
      badgeUrdu: 'مارکیٹ کا معیار',
      badgeEn: 'Client Ready',
      icon: '🚀',
      color: 'purple',
      descriptionUrdu: 'کسی حقیقی انسان، دکان دار، رشتہ دار یا ادارے کے اصل مسئلے کو حل کرنے والا معیاری پروجیکٹ۔',
      descriptionEn: 'Solve a real problem for a real shop, neighbor, or small business.',
      whatToDoNowUrdu: 'اپنے محلے کی دکان یا آن لائن دوست کے لیے ایک مفت معیاری کام کریں۔',
      whatToDoNowEn: 'Deliver one high-quality piece of work for a real case study.',
      deliverableUrdu: 'حقیقی کیس اسٹڈی اور ریفرنس۔',
      deliverableEn: 'Real client case study with testimonial.',
      points: 50
    },
    {
      number: 7,
      id: 'portfolio',
      nameUrdu: '۷. پورٹ فولیو (Portfolio)',
      nameEn: '7. Portfolio Building',
      badgeUrdu: 'پیش کش کارڈ',
      badgeEn: 'Showcase',
      icon: '📂',
      color: 'rose',
      descriptionUrdu: 'اپنے بہترین ۳ سے ۵ کاموں کو ایک جگہ منظم کریں تاکہ کلائنٹ یا آجر کو دکھایا جا سکے۔',
      descriptionEn: 'Organize your top 3-5 works into a clean shareable showcase link or PDF.',
      whatToDoNowUrdu: 'اپنے کام کی تصاویر اور لنک واٹس ایپ یا پورٹ فولیو کارڈ میں شامل کریں۔',
      whatToDoNowEn: 'Add your best work links to your profile showcase.',
      deliverableUrdu: 'پیشہ ورانہ پورٹ فولیو لنک یا فائل۔',
      deliverableEn: 'Polished portfolio showcase.',
      points: 45
    },
    {
      number: 8,
      id: 'opportunity',
      nameUrdu: '۸. مارکیٹ مواقع (Opportunity)',
      nameEn: '8. Market Opportunities',
      badgeUrdu: 'طلب کی تلاش',
      badgeEn: 'Demand Hunt',
      icon: '🎯',
      color: 'sky',
      descriptionUrdu: 'معلوم کریں کہ اس کام کی ضرورت کہاں ہے: لوکل مارکیٹ، فیس بک گروپس، رشتہ دار، یا آن لائن پلیٹ فارمز۔',
      descriptionEn: 'Locate where demand exists: local markets, online groups, and client networks.',
      whatToDoNowUrdu: 'روزگار اور مواقع کے ٹیب میں جا کر اپنے لیے مناسب مارکیٹ چنیں۔',
      whatToDoNowEn: 'Identify 3 targeted places to pitch your craft.',
      deliverableUrdu: '۳ ٹارگٹڈ کلائنٹ چینلز کی فہرست۔',
      deliverableEn: 'List of 3 verified outreach channels.',
      points: 30
    },
    {
      number: 9,
      id: 'earning',
      nameUrdu: '۹. حلال روزگار (Halal Earning)',
      nameEn: '9. Halal Earning',
      badgeUrdu: 'پہلی کمائی',
      badgeEn: 'First Income',
      icon: '💼',
      color: 'emerald',
      descriptionUrdu: 'ایمانداری، دیانت اور اچھے اخلاق کے ساتھ اپنی پہلی حلال اجرت یا پروجیکٹ فیس وصول کریں۔',
      descriptionEn: 'Earn your first ethical income through dignified service and trust.',
      whatToDoNowUrdu: 'پہلے ۳ کلائنٹس کے ساتھ دیانت دارانہ ڈیل فائنل کریں۔',
      whatToDoNowEn: 'Deliver and invoice your first paid work ethically.',
      deliverableUrdu: 'پہلا پیڈ پروجیکٹ مکمل۔',
      deliverableEn: 'Completed first paid project.',
      points: 60
    },
    {
      number: 10,
      id: 'advanced_mentor',
      nameUrdu: '۱۰. اعلیٰ مہارت و تدریس (Mastery & Teach)',
      nameEn: '10. Mastery & Teaching',
      badgeUrdu: 'استاد و رہنما',
      badgeEn: 'Mentor',
      icon: '👑',
      color: 'amber',
      descriptionUrdu: 'اس ہنر میں مہارت حاصل کریں اور دوسرے ضرورت مند بہن بھائیوں کو سکھا کر صدقہ جاریہ کا حصہ بنیں۔',
      descriptionEn: 'Reach mastery, build your venture, and teach others as ongoing charity (Sadaqah Jariyah).',
      whatToDoNowUrdu: 'کم از کم ایک دوست یا چھوٹے بہن بھائی کو یہ ہنر سکھائیں۔',
      whatToDoNowEn: 'Teach this craft to at least one eager beginner.',
      deliverableUrdu: 'کسی دوسرے انسان کی رہنمائی لاگ ہو گئی۔',
      deliverableEn: 'Mentored someone in this craft.',
      points: 100
    }
  ];

  // 5 Universal Levels (Level 0 to Level 4)
  const universalLevels = [
    {
      level: 0,
      nameUrdu: 'لیول ۰: بالکل نیا / کم تعلیم یافتہ (Visual & Voice)',
      nameEn: 'Level 0: Absolute Beginner (Audio & Visual First)',
      badgeUrdu: '🟢 آسان ترین آغاز',
      badgeEn: '🟢 Simplest Start',
      suitableForUrdu: 'وہ تمام بھائی بہن جو پڑھے لکھے نہیں یا جنہیں صرف سادہ موبائل استعمال کرنا آتا ہے',
      suitableForEn: 'For zero-tech or low-literacy learners needing audio and visual explanation',
      languageStyleUrdu: 'نہایت سادہ بول چال کی اردو، بغیر کسی مشکل انگریزی اصطلاح کے، صوتی آواز کے ساتھ',
      languageStyleEn: 'Ultra simple colloquial Urdu, zero tech jargon, full voice narration',
      coreMilestoneUrdu: `بنیادی اوزاروں یا موبائل ایپ کو کھولنا، دیکھنا اور پہلا بٹن دبانا۔`,
      coreMilestoneEn: 'Open the basic app or tool, recognize the parts, take first step.',
      sampleTasksUrdu: [
        'ہنر کا آڈیو سبق سنیں',
        'موبائل یا اوزار کے ۳ بنیادی حصے پہچانیں',
        'پہلا سادہ تجربہ کریں'
      ]
    },
    {
      level: 1,
      nameUrdu: 'لیول ۱: ابتدائی سطح (Beginner Foundations)',
      nameEn: 'Level 1: Beginner Foundations',
      badgeUrdu: '🔵 بنیادی تصورات',
      badgeEn: '🔵 Foundations',
      suitableForUrdu: 'جنہوں نے ابھی نیا سیکھنا شروع کیا ہے اور بنیادی ٹولز کو سمجھ رہے ہیں',
      suitableForEn: 'Learners grasping basic tools and concepts',
      languageStyleUrdu: 'آسان تکنیکی فہم، سادہ مثالیں اور مرحلہ وار ہدایات',
      languageStyleEn: 'Clear technical concepts with guided steps',
      coreMilestoneUrdu: 'بنیادی ٹولز اور سافٹ ویئر کے تمام فیچرز کا عملی استعمال۔',
      coreMilestoneEn: 'Hands-on usage of core tools and settings.',
      sampleTasksUrdu: [
        'بنیادی سیٹنگز درست کرنا',
        'پہلا ٹیسٹ ڈرافٹ تیار کرنا',
        'کوالٹی کی بنیادی چیک لسٹ دیکھنا'
      ]
    },
    {
      level: 2,
      nameUrdu: 'لیول ۲: درمیانی عملی مہارت (Intermediate Practical)',
      nameEn: 'Level 2: Intermediate Practical',
      badgeUrdu: '🟡 عملی مسائل کا حل',
      badgeEn: '🟡 Practical Execution',
      suitableForUrdu: 'وہ افراد جو بنیادی کام جانتے ہیں اور اب عملی پروجیکٹ بنانا چاہتے ہیں',
      suitableForEn: 'Learners executing real workflows and troubleshooting',
      languageStyleUrdu: 'پیشہ ورانہ کام، مسائل کی درستگی (Troubleshooting) اور بہتر رفتار',
      languageStyleEn: 'Workflow speed, error fixing, and execution discipline',
      coreMilestoneUrdu: 'کسی بھی مسئلے کو بغیر مدد کے آزادانہ طور پر حل کرنا۔',
      coreMilestoneEn: 'Solve standard practical tasks independently.',
      sampleTasksUrdu: [
        'مکمل پروجیکٹ وقت کی پابندی کے ساتھ بنانا',
        'خرابی یا غلطی خود درست کرنا',
        'فائل اور ڈیٹا کو منظم رکھنا'
      ]
    },
    {
      level: 3,
      nameUrdu: 'لیول ۳: پیشہ ورانہ و مارکیٹ معیار (Advanced Professional)',
      nameEn: 'Level 3: Advanced Professional',
      badgeUrdu: '🟠 کلائنٹ ورک و پورٹ فولیو',
      badgeEn: '🟠 Client-Grade',
      suitableForUrdu: 'وہ لوگ جو کلائنٹ سے آرڈر لے کر پیسے کمانے کے لیے تیار ہیں',
      suitableForEn: 'Professional standard work ready for paying clients and jobs',
      languageStyleUrdu: 'کلائنٹ ڈیلنگ، معیار کا کنٹرول، ڈیڈ لائن اور حلال منافع',
      languageStyleEn: 'Client communication, quality control, deadlines, and fair pricing',
      coreMilestoneUrdu: 'مارکیٹ کے معیار کا پورٹ فولیو اور مطمئن کسٹمرز بنانا۔',
      coreMilestoneEn: 'Build market-ready portfolio and retain paying clients.',
      sampleTasksUrdu: [
        'مکمل پورٹ فولیو لائیو کرنا',
        'کسٹمر سے پروفیشنل گفتگو اور آرڈر کنفرم کرنا',
        'معیار اور وقت کی مکمل پابندی'
      ]
    },
    {
      level: 4,
      nameUrdu: 'لیول ۴: استاد و کاروبار ساز (Expert / Mentor / Creator)',
      nameEn: 'Level 4: Expert, Mentor & Creator',
      badgeUrdu: '🔴 قیادت و تدریس',
      badgeEn: '🔴 Master & Mentor',
      suitableForUrdu: 'وہ تجربہ کار افراد جو دوسروں کو سکھانا یا اپنی ایجنسی / دکان قائم کرنا چاہتے ہیں',
      suitableForEn: 'Experts scaling teams, mentoring others, and creating opportunities',
      languageStyleUrdu: 'لیڈرشپ، ٹیم مینجمنٹ، صدقہ جاریہ اور طویل مدتی کاروباری وژن',
      languageStyleEn: 'Leadership, team scaling, mentoring, and sustainable ecosystem building',
      coreMilestoneUrdu: 'اپنے نیچے ۲ سے ۵ لوگوں کو ہنر مند بنا کر روزگار فراہم کرنا۔',
      coreMilestoneEn: 'Train 2-5 other individuals and generate livelihoods for the community.',
      sampleTasksUrdu: [
        'نئے طلباء کو مینٹورشپ دینا',
        'اپنا چھوٹا کاروبار یا سروس ایجنسی شروع کرنا',
        'معاشرے میں ہنر کی مہم چلانا'
      ]
    }
  ];

  // Suitability Calculation Engine
  const calculateSuitability = () => {
    let score = 75; // base score
    if (suitabilityAnswers.device === 'mobile' && skill.isMobileFriendly) score += 15;
    if (suitabilityAnswers.device === 'computer' && skill.isComputerRequired) score += 15;
    if (suitabilityAnswers.dailyTime === '1h' || suitabilityAnswers.dailyTime === '2h') score += 10;
    if (suitabilityAnswers.budget === 'free' && skill.isLowCost) score += 10;
    if (suitabilityAnswers.goal === 'home_income' && skill.isHomeBased) score += 10;
    if (score > 98) score = 98;
    return score;
  };

  const handlePlayVoice = (text: string, speed = 0.86) => {
    stopSpeaking();
    setIsSpeaking(true);
    speakText(text, {
      language: 'ur',
      rate: speed,
      pitch: 0.84,
    });
  };

  const handleStopVoice = () => {
    stopSpeaking();
    setIsSpeaking(false);
  };

  const handleToggleStage = (stageNum: number, points: number) => {
    const key = `${skill.id}_stage_${stageNum}`;
    const next = !completedStages[key];
    const updated = { ...completedStages, [key]: next };
    setCompletedStages(updated);
    try {
      localStorage.setItem('seekho_completed_universe_stages', JSON.stringify(updated));
    } catch {
      // ignore
    }
    if (next && onRewardPoints) {
      onRewardPoints(points, `ماشاءاللہ! مرحلہ ${stageNum} مکمل کرنے پر ${points} پوائنٹس شامل ہو گئے!`, `Stage ${stageNum} complete! +${points} XP!`);
    }
  };

  const handleToggleLevel = (lvlNum: number) => {
    const key = `${skill.id}_lvl_${lvlNum}`;
    const next = !completedLevels[key];
    const updated = { ...completedLevels, [key]: next };
    setCompletedLevels(updated);
    try {
      localStorage.setItem('seekho_completed_universe_levels', JSON.stringify(updated));
    } catch {
      // ignore
    }
    if (next && onRewardPoints) {
      onRewardPoints(30, `ماشاءاللہ! لیول ${lvlNum} مکمل! +۳۰ پوائنٹس!`, `Level ${lvlNum} achieved! +30 XP!`);
    }
  };

  const handlePracticeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!practiceSubmission.trim()) return;
    setPracticeSubmitted(true);
    if (onRewardPoints) {
      onRewardPoints(50, 'شاندار! پریکٹس ورک بینچ ٹاسک جمع کرانے پر ۵۰ پوائنٹس شامل ہو گئے!', 'Practical task completed! +50 XP!');
    }
  };

  const handleLogTeaching = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taughtName.trim()) return;
    setTaughtSubmitted(true);
    if (onRewardPoints) {
      onRewardPoints(100, `ماشاءاللہ! آپ نے "${taughtName}" کو سکھا کر صدقہ جاریہ کا کام کیا! +۱۰۰ پوائنٹس!`, `You taught ${taughtName}! +100 XP!`);
    }
  };

  const currentStage = journeyStages.find(s => s.number === selectedJourneyStage) || journeyStages[0];
  const currentLvl = universalLevels.find(l => l.level === selectedLevelTab) || universalLevels[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in" dir={isUrdu ? 'rtl' : 'ltr'}>
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[94vh] flex flex-col overflow-hidden relative">
        
        {/* ========================================================================= */}
        {/* 1. TOP HEADER (Visual Identity + Breadcrumbs + Voice Guidance) */}
        {/* ========================================================================= */}
        <div className={`p-5 sm:p-7 bg-gradient-to-r ${skill.coverGradient || 'from-emerald-800 to-slate-900'} text-white relative shrink-0`}>
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="absolute top-4 left-4 rtl:left-auto rtl:right-4 p-2.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition z-10"
            title="بند کریں"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap">
              {category && (
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold font-arabic backdrop-blur-xs">
                  {isUrdu ? category.titleUrdu : category.titleEn}
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black font-arabic shadow-xs">
                {isUrdu ? skill.badgeUrdu : skill.badgeEn}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/30 text-slate-200 text-xs font-bold font-arabic">
                ⏱️ {isUrdu ? skill.timeDisplayUrdu : skill.timeDisplayEn}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-arabic">
                {skill.isMobileFriendly ? (isUrdu ? '📱 صرف موبائل پر ممکن' : 'Mobile Friendly') : (isUrdu ? '💻 کمپیوٹر / اوزار درکار' : 'PC/Tools Required')}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white font-arabic leading-snug tracking-tight">
              {isUrdu ? skill.titleUrdu : skill.titleEn}
            </h1>

            <p className="text-sm sm:text-base text-slate-100 font-arabic leading-relaxed opacity-95">
              {isUrdu ? skill.taglineUrdu : skill.taglineEn}
            </p>

            {/* Voice Audio Guidance Bar */}
            <div className="pt-2 flex items-center gap-2.5 flex-wrap border-t border-white/15">
              {!isSpeaking ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePlayVoice(`${skill.titleUrdu}۔ ${skill.taglineUrdu}۔ ${skill.whatIsThisUrdu}`, 0.86)}
                    className="py-1.5 px-3.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black font-arabic transition flex items-center gap-2 backdrop-blur-xs"
                  >
                    <Volume2 className="w-4 h-4 text-amber-300" />
                    <span>{isUrdu ? 'تفصیل سنیں (Normal)' : 'Listen (Normal)'}</span>
                  </button>
                  <button
                    onClick={() => handlePlayVoice(`${skill.titleUrdu}۔ ${skill.taglineUrdu}۔ ${skill.whatIsThisUrdu}`, 0.72)}
                    className="py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold font-arabic transition"
                  >
                    <span>🐢 {isUrdu ? 'آہستہ سنیں' : 'Slow Voice'}</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleStopVoice}
                  className="py-1.5 px-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black font-arabic transition flex items-center gap-2"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>{isUrdu ? 'آواز بند کریں' : 'Stop Audio'}</span>
                </button>
              )}

              <button
                onClick={() => {
                  if (onOpenAITeacherWithPrompt) {
                    onOpenAITeacherWithPrompt(`السلام علیکم! میں ہنر "${skill.titleUrdu}" سیکھنا چاہتا ہوں۔ مجھے بتائیں کہ میں آج سے ہی اس کا پہلا مرحلہ کیسے شروع کروں؟`);
                    onClose();
                  }
                }}
                className="py-1.5 px-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black font-arabic transition flex items-center gap-1.5 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                <span>{isUrdu ? 'AI استاد سے سوال پوچھیں' : 'Ask AI Mentor'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. NAVIGATION TABS (Core Pillars) */}
        {/* ========================================================================= */}
        <div className="bg-slate-100 p-2 flex items-center gap-1.5 overflow-x-auto border-b border-slate-200 shrink-0 text-xs sm:text-sm font-arabic font-bold text-slate-700">
          {[
            { id: 'learning_journey', labelUrdu: '🎯 عملی اسباق و روڈ میپ (Learning Journey)', labelEn: 'Learning Journey', icon: Sparkles },
            { id: 'journey', labelUrdu: '🗺️ ۱۰ مراحل کا نقشہ (10-Stage Milestone)', labelEn: '10-Stage Milestone', icon: Compass },
            { id: 'levels', labelUrdu: '📊 ۵ درجات (Levels 0 to 4)', labelEn: 'Levels 0 to 4', icon: Award },
            { id: 'suitability', labelUrdu: '🎯 کیا یہ میرے لیے مناسب ہے؟', labelEn: 'Suitability Check', icon: Target },
            { id: 'practice', labelUrdu: '⚡ پریکٹس ورک بینچ (Practice First)', labelEn: 'Practice Workbench', icon: Flame },
            { id: 'details', labelUrdu: '📋 ۲۰ حقائق و روزگار کے راستے', labelEn: '20 Facts & Earning', icon: BookOpen },
            { id: 'teach', labelUrdu: '🤝 سکھائیں (صدقہ جاریہ)', labelEn: 'Teach & Share', icon: HeartHandshake },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2.5 rounded-xl flex items-center gap-2 whitespace-nowrap transition-all ${
                  isActive 
                    ? 'bg-emerald-800 text-white shadow-xs font-black' 
                    : 'hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                <span>{isUrdu ? tab.labelUrdu : tab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. MAIN BODY CONTAINER */}
        {/* ========================================================================= */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 font-arabic">

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 0: INTERACTIVE LEARNING JOURNEY (Micro-Lessons, Learn-Practice-Prove, Capstone, AI) */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'learning_journey' && (
            <SkillLearningJourneyView
              skill={skill}
              language={language}
              userProfile={userProfile}
              onOpenAITeacherWithPrompt={onOpenAITeacherWithPrompt}
              onSelectNextSkill={onSelectNextSkill}
              onRewardPoints={onRewardPoints}
            />
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 1: 10-STAGE SKILL JOURNEY WITH "اب مجھے کیا کرنا ہے؟" */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'journey' && (
            <div className="space-y-6 animate-in fade-in">
              {/* Journey Top Header */}
              <div className="bg-emerald-50 border border-emerald-200 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-xs font-black text-emerald-900 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-emerald-700" />
                    {isUrdu ? 'ہنر کو سیکھنے سے حلال کمائی تک کا ۱۰ مراحل کا نقشہ' : '10-Stage Roadmap from Discovery to Halal Earning'}
                  </span>
                  <p className="text-xs text-slate-600">
                    {isUrdu ? 'صرف تھیوری نہیں—ہر مرحلے پر عملی کام کر کے آگے بڑھیں اور ہر مرحلے پر پوائنٹس حاصل کریں۔' : 'Take real action on each stage and unlock rewards.'}
                  </p>
                </div>

                <div className="text-xs font-bold text-emerald-800 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shrink-0">
                  {Object.keys(completedStages).filter(k => k.startsWith(`${skill.id}_stage_`)).length} / 10 {isUrdu ? 'مراحل مکمل' : 'Stages Done'}
                </div>
              </div>

              {/* 10 Stages Stepper Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {journeyStages.map((stg) => {
                  const isSelected = selectedJourneyStage === stg.number;
                  const isDone = !!completedStages[`${skill.id}_stage_${stg.number}`];
                  return (
                    <button
                      key={stg.id}
                      onClick={() => setSelectedJourneyStage(stg.number)}
                      className={`p-3 rounded-2xl border text-right transition-all flex flex-col justify-between space-y-2 relative overflow-hidden ${
                        isSelected 
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-emerald-500' 
                          : isDone 
                            ? 'bg-emerald-50 border-emerald-300 text-slate-900' 
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-lg">{stg.icon}</span>
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                        ) : (
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                            #{stg.number}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className={`text-xs font-black line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                          {isUrdu ? stg.nameUrdu : stg.nameEn}
                        </p>
                        <p className={`text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          +{stg.points} XP
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Detailed Action Card ("اب مجھے کیا کرنا ہے؟") */}
              <div className="bg-white border-2 border-slate-200 p-6 rounded-3xl shadow-sm space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{currentStage.icon}</span>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 text-xs font-black">
                        {isUrdu ? currentStage.badgeUrdu : currentStage.badgeEn}
                      </span>
                      <h3 className="text-xl font-black text-slate-900">
                        {isUrdu ? currentStage.nameUrdu : currentStage.nameEn}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => handleToggleStage(currentStage.number, currentStage.points)}
                    className={`px-4 py-2 rounded-2xl text-xs font-black transition flex items-center gap-2 shadow-xs ${
                      completedStages[`${skill.id}_stage_${currentStage.number}`]
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'bg-slate-100 hover:bg-emerald-100 text-slate-800 border border-slate-300'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {completedStages[`${skill.id}_stage_${currentStage.number}`]
                        ? (isUrdu ? 'مرحلہ مکمل ہو گیا ✓' : 'Stage Completed ✓')
                        : (isUrdu ? 'مرحلہ مکمل نشان لگائیں (+XP)' : 'Mark Stage Complete (+XP)')}
                    </span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-xs font-black text-slate-700">📖 {isUrdu ? 'اس مرحلے کی وضاحت:' : 'Stage Description:'}</span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {isUrdu ? currentStage.descriptionUrdu : currentStage.descriptionEn}
                    </p>
                  </div>

                  {/* The Golden Box: "اب مجھے کیا کرنا ہے؟" */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent border-2 border-amber-400 space-y-3">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-600" />
                      <h4 className="text-sm sm:text-base font-black text-slate-950">
                        👉 {isUrdu ? 'اب مجھے کیا کرنا ہے؟ (Action Right Now):' : 'What Should I Do Right Now?'}
                      </h4>
                    </div>

                    <p className="text-sm text-slate-900 font-bold leading-relaxed">
                      {isUrdu ? currentStage.whatToDoNowUrdu : currentStage.whatToDoNowEn}
                    </p>

                    <div className="pt-2 border-t border-amber-300/50 flex items-center justify-between flex-wrap gap-2 text-xs">
                      <span className="text-slate-700">
                        📦 {isUrdu ? 'توقع آؤٹ پٹ:' : 'Deliverable:'} <strong className="text-slate-950">{isUrdu ? currentStage.deliverableUrdu : currentStage.deliverableEn}</strong>
                      </span>
                      <button
                        onClick={() => {
                          if (currentStage.number === 4) {
                            setActiveTab('practice');
                          } else if (currentStage.number === 3) {
                            setActiveTab('levels');
                          } else {
                            handlePlayVoice(currentStage.whatToDoNowUrdu, 0.86);
                          }
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black shadow-xs flex items-center gap-1.5"
                      >
                        <span>{isUrdu ? 'عملی عمل پر جائیں' : 'Execute Action'}</span>
                        <ArrowIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 2: UNIVERSAL 5 LEVELS (0 TO 4) */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'levels' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-sky-50 border border-sky-200 p-4 rounded-2xl space-y-1">
                <span className="text-xs font-black text-sky-950 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sky-700" />
                  {isUrdu ? 'ہر قسم کے انسان کے لیے ۵ آسان درجات (Levels 0 to 4)' : '5 Mastery Levels For Every Human Background'}
                </span>
                <p className="text-xs text-slate-600">
                  {isUrdu ? 'چاہے آپ بالکل ان پڑھ ہوں، طالب علم ہوں یا تجربہ کار—ہر سطح کے لیے مخصوص انداز اور رہنمائی موجود ہے۔' : 'From zero-literacy audio visual mode to expert mentoring level.'}
                </p>
              </div>

              {/* Level Selector Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
                {universalLevels.map((lvl) => (
                  <button
                    key={lvl.level}
                    onClick={() => setSelectedLevelTab(lvl.level)}
                    className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                      selectedLevelTab === lvl.level
                        ? 'bg-slate-900 text-white font-black shadow-sm ring-2 ring-emerald-500'
                        : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-700'
                    }`}
                  >
                    {lvl.badgeUrdu}
                  </button>
                ))}
              </div>

              {/* Active Level Content Card */}
              <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-5 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-xs font-black text-emerald-800">{currentLvl.badgeUrdu}</span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      {isUrdu ? currentLvl.nameUrdu : currentLvl.nameEn}
                    </h3>
                  </div>

                  <button
                    onClick={() => handleToggleLevel(currentLvl.level)}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                      completedLevels[`${skill.id}_lvl_${currentLvl.level}`]
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 hover:bg-emerald-50 text-slate-800 border border-slate-300'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>{completedLevels[`${skill.id}_lvl_${currentLvl.level}`] ? (isUrdu ? 'لیول پاس ✓' : 'Level Passed ✓') : (isUrdu ? 'لیول پاس مارک کریں' : 'Mark Level Passed')}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-1">
                    <span className="font-black text-emerald-950">👥 {isUrdu ? 'کس کے لیے مناسب ہے؟' : 'Who is this for?'}</span>
                    <p className="text-slate-700">{isUrdu ? currentLvl.suitableForUrdu : currentLvl.suitableForEn}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-1">
                    <span className="font-black text-amber-950">🗣️ {isUrdu ? 'زبان اور سکھانے کا انداز:' : 'Language & Teaching Style:'}</span>
                    <p className="text-slate-700">{isUrdu ? currentLvl.languageStyleUrdu : currentLvl.languageStyleEn}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-black text-slate-800">
                    🎯 {isUrdu ? 'اس سطح کا بنیادی سنگِ میل (Milestone):' : 'Core Milestone:'}
                  </h4>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
                    {isUrdu ? currentLvl.coreMilestoneUrdu : currentLvl.coreMilestoneEn}
                  </div>

                  <h4 className="text-xs font-black text-slate-800 pt-2">
                    📋 {isUrdu ? '۳ عملی کام جو اس لیول پر کرنے ہیں:' : '3 Practical Tasks at This Level:'}
                  </h4>
                  <div className="space-y-2">
                    {currentLvl.sampleTasksUrdu.map((tsk, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[10px] shrink-0">
                          {i + 1}
                        </span>
                        <span>{tsk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 3: "کیا یہ میرے لیے مناسب ہے؟" (INTERACTIVE SUITABILITY ASSESSMENT) */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'suitability' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-amber-50 border border-amber-200 p-4 sm:p-5 rounded-2xl space-y-1">
                <span className="text-xs font-black text-amber-950 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-amber-700" />
                  {isUrdu ? 'صرف ۱ منٹ میں معلوم کریں کہ کیا یہ ہنر آپ کے حالات کے لیے صحیح ہے؟' : '1-Minute Personalized Suitability Check'}
                </span>
                <p className="text-xs text-slate-600">
                  {isUrdu ? 'اپنے حالات منتخب کریں، سسٹم آپ کو بتائے گا کہ اس ہنر میں آپ کی کامیابی کے کتنے امکانات ہیں۔' : 'Answer 5 quick preferences to calculate your match score.'}
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-5 shadow-xs">
                {/* 5 Criteria selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-arabic">
                  {/* Q1: Education */}
                  <div className="space-y-1.5">
                    <label className="font-black text-slate-800">۱. آپ کی تعلیمی سطح کیا ہے؟</label>
                    <select
                      value={suitabilityAnswers.education}
                      onChange={(e) => setSuitabilityAnswers({ ...suitabilityAnswers, education: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="none">کم تعلیم یافتہ / پرائمری</option>
                      <option value="matric">مڈل تا میٹرک</option>
                      <option value="inter">انٹرمیڈیٹ / ایف اے</option>
                      <option value="grad">گریجویٹ / یونیورسٹی</option>
                    </select>
                  </div>

                  {/* Q2: Daily Time */}
                  <div className="space-y-1.5">
                    <label className="font-black text-slate-800">۲. روزانہ کتنا وقت دے سکتے ہیں؟</label>
                    <select
                      value={suitabilityAnswers.dailyTime}
                      onChange={(e) => setSuitabilityAnswers({ ...suitabilityAnswers, dailyTime: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="30m">۳۰ منٹ روزانہ</option>
                      <option value="1h">۱ گھنٹہ روزانہ</option>
                      <option value="2h">۲ گھنٹے روزانہ</option>
                      <option value="4h">۴+ گھنٹے روزانہ</option>
                    </select>
                  </div>

                  {/* Q3: Device */}
                  <div className="space-y-1.5">
                    <label className="font-black text-slate-800">۳. آپ کے پاس کون سا آلہ موجود ہے؟</label>
                    <select
                      value={suitabilityAnswers.device}
                      onChange={(e) => setSuitabilityAnswers({ ...suitabilityAnswers, device: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="mobile">صرف سمارٹ فون (موبائل)</option>
                      <option value="computer">لیپ ٹاپ یا کمپیوٹر</option>
                      <option value="tools">ہاتھ کے اوزار / دکان</option>
                    </select>
                  </div>

                  {/* Q4: Goal */}
                  <div className="space-y-1.5">
                    <label className="font-black text-slate-800">۴. آپ کا بنیادی مقصد کیا ہے؟</label>
                    <select
                      value={suitabilityAnswers.goal}
                      onChange={(e) => setSuitabilityAnswers({ ...suitabilityAnswers, goal: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="home_income">گھر بیٹھے باوقار کمائی</option>
                      <option value="job">اچھی نوکری / جاب</option>
                      <option value="freelance">آن لائن فری لانسنگ</option>
                      <option value="business">ذاتی دکان / کاروبار</option>
                      <option value="personal">ذاتی شوق و ترقی</option>
                    </select>
                  </div>
                </div>

                {/* Submit button & Result card */}
                <div className="pt-2">
                  <button
                    onClick={() => setSuitabilityEvaluated(true)}
                    className="w-full py-3 px-4 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-sm transition shadow-md flex items-center justify-center gap-2"
                  >
                    <Calculator className="w-4 h-4 text-amber-300" />
                    <span>{isUrdu ? 'میری مطابقت کا اسکور چیک کریں' : 'Calculate My Suitability Score'}</span>
                  </button>
                </div>

                {suitabilityEvaluated && (
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white space-y-3 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-emerald-300 font-bold">🎯 تجزیہ کا نتیجہ:</span>
                      <span className="text-lg font-black text-amber-400">{calculateSuitability()}٪ میچ (Match)</span>
                    </div>

                    <p className="text-sm font-bold text-white leading-relaxed">
                      {calculateSuitability() >= 80 
                        ? `ماشاءاللہ! "${skill.titleUrdu}" آپ کے موجودہ حالات اور ڈیوائس کے ساتھ بہترین مطابقت رکھتا ہے۔ آپ آج ہی بغیر کسی تاخیر کے اس کا آغاز کر سکتے ہیں۔`
                        : `یہ ہنر آپ کے لیے مفید ہے، مگر روزانہ تھوڑا اضافی وقت اور مسلسل پریکٹس درکار ہو گی۔`}
                    </p>

                    <div className="text-xs text-slate-300 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span>📱 ڈیوائس کی ضروریات پوری ہیں</span>
                      <span>⏱️ تجویز کردہ وقت: {skill.timeDisplayUrdu}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 4: "PRACTICE FIRST" INTERACTIVE WORKBENCH */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'practice' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-rose-50 border border-rose-200 p-4 sm:p-5 rounded-2xl space-y-1">
                <span className="text-xs font-black text-rose-950 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-rose-700" />
                  {isUrdu ? 'Learn → Practice → Check → Improve (صرف پڑھیں نہیں، خود کر کے دکھائیں)' : 'Practice First Workbench'}
                </span>
                <p className="text-xs text-slate-600">
                  {isUrdu ? 'اپنے ہاتھ سے پریکٹس ٹاسک مکمل کریں، چیک لسٹ دیکھیں اور جمع کرا کر ۵۰ پوائنٹس حاصل کریں۔' : 'Complete active task, self-evaluate with checklist, and submit for XP points.'}
                </p>
              </div>

              {/* Interactive Task Card */}
              <div className="bg-white border-2 border-slate-200 p-6 rounded-3xl space-y-5 shadow-xs">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-black">
                    ⚡ آج کا عملی پریکٹس چیلنج
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {skill.firstPracticalActionUrdu}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isUrdu 
                      ? 'اس ٹاسک کا مقصد یہ ہے کہ آپ فوری طور پر پہلا قدم اٹھائیں اور کسی بھی ہچکچاہٹ کے بغیر عملی آؤٹ پٹ تیار کریں۔' 
                      : 'Take immediate action and create your first practical output.'}
                  </p>
                </div>

                {/* Self Verification Checklist */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-xs font-black text-slate-800">✅ خود احتسابی چیک لسٹ (Self-Checklist):</span>
                  {[
                    isUrdu ? 'میں نے متعلقہ ایپ یا اوزار کھول کر بنیادی سیٹ اپ مکمل کر لیا۔' : 'I opened the tool and set up workspace.',
                    isUrdu ? 'میں نے نمونہ ٹاسک بنا لیا اور اس میں کوئی واضح خرابی نہیں چھوڑی۔' : 'I finished sample draft with no glaring errors.',
                    isUrdu ? 'میں نے اس کام کو حلال اور ایمانداری کے معیار پر چیک کر لیا ہے۔' : 'I verified ethical quality and honesty of this work.'
                  ].map((chk, i) => (
                    <label key={i} className="flex items-center gap-3 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={practiceChecklist[i]}
                        onChange={(e) => {
                          const updated = [...practiceChecklist];
                          updated[i] = e.target.checked;
                          setPracticeChecklist(updated);
                        }}
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>{chk}</span>
                    </label>
                  ))}
                </div>

                {/* Submission Box */}
                <form onSubmit={handlePracticeSubmit} className="space-y-3">
                  <label className="text-xs font-black text-slate-800">
                    📝 {isUrdu ? 'اپنے کیے گئے کام کی تفصیل یا لنک یہاں درج کریں:' : 'Submit your work summary or link:'}
                  </label>
                  <textarea
                    rows={3}
                    value={practiceSubmission}
                    onChange={(e) => setPracticeSubmission(e.target.value)}
                    placeholder={isUrdu ? 'مثلاً: میں نے کینوا پر اسکول کا پہلا پوسٹر بنا لیا ہے اور واٹس ایپ پر محفوظ کر لیا ہے...' : 'Write what you built or paste your work link...'}
                    className="w-full p-3 rounded-2xl border border-slate-300 bg-slate-50 text-xs font-medium focus:border-emerald-500 focus:outline-none"
                  />

                  <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                    <span className="text-xs text-slate-500">
                      🎁 {isUrdu ? 'جمع کرانے پر ۵۰ پوائنٹس ملیں گے' : 'Earn +50 XP upon submission'}
                    </span>
                    <button
                      type="submit"
                      disabled={!practiceSubmission.trim() || practiceSubmitted}
                      className="px-6 py-2.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-black text-xs transition shadow-xs flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{practiceSubmitted ? (isUrdu ? 'جمع ہو گیا ✓' : 'Submitted ✓') : (isUrdu ? 'پریکٹس ٹاسک جمع کریں' : 'Submit Practice Task')}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 5: 20 COMPREHENSIVE FACTS & INCOME PATHWAYS */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'details' && (
            <div className="space-y-6 animate-in fade-in">
              {/* Quick Readiness Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                  <span className="text-xl">📱</span>
                  <p className="text-xs font-black text-emerald-950">
                    {skill.isMobileFriendly ? (isUrdu ? 'موبائل پر ممکن ہے' : 'Mobile Friendly') : (isUrdu ? 'کمپیوٹر/اوزار درکار' : 'Tools/PC Needed')}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {isUrdu ? skill.canLearnFromMobileUrdu : skill.canLearnFromMobileEn}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-center space-y-1">
                  <span className="text-xl">🏠</span>
                  <p className="text-xs font-black text-sky-950">
                    {skill.isHomeBased ? (isUrdu ? 'گھر سے کام ممکن' : 'Home-Based') : (isUrdu ? 'فیلڈ / دکان پر کام' : 'Field / On-Site')}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {skill.isHomeBased ? (isUrdu ? 'بغیر کہیں جائے' : 'Zero commute') : (isUrdu ? 'مارکیٹ یا کلائنٹ کا مقام' : 'Client location')}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-1">
                  <span className="text-xl">💰</span>
                  <p className="text-xs font-black text-amber-950">
                    {skill.isLowCost ? (isUrdu ? 'بغیر کسی خرچے کے' : 'Zero/Low Cost') : (isUrdu ? 'معمولی سامان درکار' : 'Basic equipment')}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {isUrdu ? 'مفت ٹولز سے آغاز' : 'Free tools to start'}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-1">
                  <span className="text-xl">⚡</span>
                  <p className="text-xs font-black text-purple-950">
                    {isUrdu ? skill.timeDisplayUrdu : skill.timeDisplayEn}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {isUrdu ? 'بنیادی سطح کا وقت' : 'Time to basic level'}
                  </p>
                </div>
              </div>

              {/* ⚠️ CRITICAL SCAM & FRAUD WARNING CARD */}
              <div className="p-5 rounded-3xl bg-rose-50 border-2 border-rose-300 space-y-2.5">
                <div className="flex items-center gap-2 text-rose-900 font-black text-sm">
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>⚠️ {isUrdu ? 'دھوکے اور فراڈ سے بچاؤ کی ضروری ہدایات (Scam Warning)' : 'Scam Prevention & Red Flags'}</span>
                </div>
                <p className="text-xs text-rose-950 font-bold leading-relaxed">
                  {isUrdu
                    ? 'سنہری اصول: کوئی بھی کمپنی، ویب سائٹ یا شخص جو آپ کو نوکری دینے یا ٹاسک مکمل کروانے کے لیے پہلے رجسٹریشن فیس مانگے وہ ۱۰۰٪ فراڈ ہے۔ کبھی کسی کو پیسے نہ دیں۔ صرف حقیقی سروس دیں اور مکمل کام کا معاوضہ لیں۔'
                    : 'Golden Rule: Anyone asking for upfront registration fees or promising money for clicking ads is 100% scam. Offer real skills and earn ethically.'}
                </p>
              </div>

              {/* 14 Universal Core Dimensions */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                  <span className="text-xs font-black text-slate-900">۱. یہ ہنر اصل میں کیا ہے؟ (What is this?)</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{isUrdu ? skill.whatIsThisUrdu : skill.whatIsThisEn}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                  <span className="text-xs font-black text-slate-900">۲. یہ ہنر کس کے لیے سب سے زیادہ موزوں ہے؟ (Who is it for?)</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{isUrdu ? skill.whoIsItForUrdu : skill.whoIsItForEn}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                  <span className="text-xs font-black text-slate-900">۳. شروع کرنے کے لیے کیا سامان چاہیے؟ (Required Tools)</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {skill.whatItemsNeededUrdu.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 6 Real-World Earning Pathways */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-700" />
                    <span>{isUrdu ? 'اس ہنر سے باوقار حلال روزگار کے ۶ ممکنہ راستے:' : '6 Halal Earning Pathways:'}</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                      <span className="font-black text-emerald-950">💼 ۱. نوکری / جاب (Job Pathway):</span>
                      <p className="text-slate-700">{isUrdu ? skill.jobPathwayUrdu : skill.jobPathwayEn}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-1">
                      <span className="font-black text-sky-950">🌐 ۲. فری لانسنگ (Freelancing):</span>
                      <p className="text-slate-700">{isUrdu ? skill.freelancePathwayUrdu : skill.freelancePathwayEn}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-1">
                      <span className="font-black text-purple-950">🏪 ۳. ذاتی دکان / کاروبار (Business):</span>
                      <p className="text-slate-700">{isUrdu ? skill.businessPathwayUrdu : skill.businessPathwayEn}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-pink-50/70 border border-pink-200 space-y-1">
                      <span className="font-black text-pink-950">🏠 ۴. گھر بیٹھے کام (Home Work):</span>
                      <p className="text-slate-700">{isUrdu ? skill.homeWorkPathwayUrdu : skill.homeWorkPathwayEn}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                      <span className="font-black text-amber-950">📦 ۵. آن لائن سیلنگ (Online Selling):</span>
                      <p className="text-slate-700">{isUrdu ? skill.onlinePathwayUrdu : skill.onlinePathwayEn}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-1">
                      <span className="font-black text-teal-950">🛠️ ۶. محلے میں لوکل سروس (Local Service):</span>
                      <p className="text-slate-700">{isUrdu ? skill.localPathwayUrdu : skill.localPathwayEn}</p>
                    </div>
                  </div>
                </div>

                {/* Next Skill Graph Recommendation */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between flex-wrap gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[11px] text-amber-400 font-bold">🔄 {isUrdu ? 'اس ہنر کے بعد اگلا قدم:' : 'Next Step After This:'}</span>
                    <p className="text-xs sm:text-sm font-black">{isUrdu ? skill.nextSkillUrdu : skill.nextSkillEn}</p>
                  </div>
                  {skill.nextSkillId && (
                    <button
                      onClick={() => {
                        if (onSelectNextSkill && skill.nextSkillId) {
                          onSelectNextSkill(skill.nextSkillId);
                        }
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition shadow-xs flex items-center gap-1.5"
                    >
                      <span>{isUrdu ? 'اگلا ہنر کھولیں' : 'Open Next Skill'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------------------------------------- */}
          {/* TAB 6: "سکھائیں (صدقہ جاریہ)" - TEACH & SHARE */}
          {/* ----------------------------------------------------------------------- */}
          {activeTab === 'teach' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-emerald-900 text-white p-6 rounded-3xl space-y-3">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
                  🌟 علم کا صدقہ جاریہ
                </span>
                <h3 className="text-xl font-black">
                  ”تم میں سے بہترین وہ ہے جو قرآن اور ہنر سیکھے اور دوسروں کو سکھائے“
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  جب آپ نے کسی چیز کا بنیادی فہم حاصل کر لیا، تو اپنے چھوٹے بہن بھائی، دوست یا پڑوسی کو اس کا ایک مرحلہ سکھائیں۔ علم بانٹنے سے بڑھتا ہے اور برکت پیدا ہوتی ہے۔
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-4 shadow-xs">
                <form onSubmit={handleLogTeaching} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-800">
                      🤝 آپ نے کس کو یہ ہنر سکھایا یا رہنمائی دی؟ (نام یا رشتہ لکھیں):
                    </label>
                    <input
                      type="text"
                      value={taughtName}
                      onChange={(e) => setTaughtName(e.target.value)}
                      placeholder={isUrdu ? 'مثلاً: چھوٹے بھائی عثمان کو کینوا کا پہلا کارڈ بنانا سکھایا...' : 'e.g. Taught my friend Ali basic Canva flyer...'}
                      className="w-full p-3 rounded-2xl border border-slate-300 bg-slate-50 text-xs focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs text-emerald-800 font-bold">
                      🎁 سکھانے پر ۱۰۰ پوائنٹس اور بیج شامل ہو گا
                    </span>
                    <button
                      type="submit"
                      disabled={!taughtName.trim() || taughtSubmitted}
                      className="px-6 py-2.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white font-black text-xs transition shadow-xs flex items-center gap-1.5"
                    >
                      <HeartHandshake className="w-4 h-4 text-amber-300" />
                      <span>{taughtSubmitted ? (isUrdu ? 'لاگ ہو گیا ✓' : 'Logged ✓') : (isUrdu ? 'تدریس کا اندراج کریں (+100 XP)' : 'Log Teaching (+100 XP)')}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
