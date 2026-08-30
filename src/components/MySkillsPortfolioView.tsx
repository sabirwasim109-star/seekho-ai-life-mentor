import React, { useState, useEffect, useMemo } from 'react';
import { 
  Briefcase, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Clock, 
  PlusCircle, 
  Calendar, 
  Users, 
  BookOpen, 
  Layers, 
  HeartHandshake, 
  Info, 
  ShieldCheck, 
  X, 
  Compass, 
  Flame, 
  Laptop, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  HelpCircle,
  FolderKanban,
  Edit3,
  Lightbulb
} from 'lucide-react';
import { Language, UserProfile } from '../types';
import { 
  INITIAL_LEARNER_SKILLS, 
  INITIAL_PORTFOLIO_PROJECTS, 
  INITIAL_COMMUNITY_CONTRIBUTIONS, 
  DEFAULT_PROFILE_SUMMARY,
  LearnerSkillItem,
  PortfolioProjectItem,
  CommunityContributionItem,
  ProfileSummaryData
} from '../data/portfolioData';

interface MySkillsPortfolioViewProps {
  language: Language;
  userProfile: UserProfile;
  onNavigateToCourses?: () => void;
}

export const MySkillsPortfolioView: React.FC<MySkillsPortfolioViewProps> = ({
  language,
  userProfile,
  onNavigateToCourses,
}) => {
  const isUrdu = language === 'ur';

  // 1. Skills State
  const [skills, setSkills] = useState<LearnerSkillItem[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_portfolio_skills');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_LEARNER_SKILLS;
  });

  // 2. Projects State
  const [projects, setProjects] = useState<PortfolioProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_portfolio_projects');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_PORTFOLIO_PROJECTS;
  });

  // 3. Community Contributions State
  const [contributions, setContributions] = useState<CommunityContributionItem[]>(() => {
    try {
      const saved = localStorage.getItem('seekho_portfolio_contributions');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_COMMUNITY_CONTRIBUTIONS;
  });

  // 4. Profile Summary State
  const [profileSummary, setProfileSummary] = useState<ProfileSummaryData>(() => {
    try {
      const saved = localStorage.getItem('seekho_portfolio_summary');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return DEFAULT_PROFILE_SUMMARY;
  });

  // Add Project Modal State
  const [showAddProjectModal, setShowAddProjectModal] = useState<boolean>(false);
  const [showSuccessToast, setShowSuccessToast] = useState<string | null>(null);

  const [newProjectForm, setNewProjectForm] = useState({
    titleUrdu: '',
    titleEn: '',
    skillUrdu: 'مصنوعی ذہانت (AI)',
    descriptionUrdu: '',
    descriptionEn: '',
    whatILearnedUrdu: '',
    whatILearnedEn: '',
    howHelpsOthersUrdu: '',
    howHelpsOthersEn: '',
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('seekho_portfolio_skills', JSON.stringify(skills));
    } catch (e) {
      // ignore
    }
  }, [skills]);

  useEffect(() => {
    try {
      localStorage.setItem('seekho_portfolio_projects', JSON.stringify(projects));
    } catch (e) {
      // ignore
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('seekho_portfolio_contributions', JSON.stringify(contributions));
    } catch (e) {
      // ignore
    }
  }, [contributions]);

  useEffect(() => {
    try {
      localStorage.setItem('seekho_portfolio_summary', JSON.stringify(profileSummary));
    } catch (e) {
      // ignore
    }
  }, [profileSummary]);

  // Sync modal dismissal with Android system back button & Escape key
  useEffect(() => {
    if (!showAddProjectModal) return;

    const handlePopState = () => {
      setShowAddProjectModal(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowAddProjectModal(false);
      }
    };

    window.history.pushState({ modal: 'portfolio-add-project' }, '');
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showAddProjectModal]);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectForm.titleUrdu && !newProjectForm.titleEn) return;

    const newProject: PortfolioProjectItem = {
      id: `proj-${Date.now()}`,
      titleUrdu: newProjectForm.titleUrdu || newProjectForm.titleEn,
      titleEn: newProjectForm.titleEn || newProjectForm.titleUrdu,
      skillUrdu: newProjectForm.skillUrdu || 'عملی مہارت',
      skillEn: newProjectForm.skillUrdu || 'Practical Skill',
      descriptionUrdu: newProjectForm.descriptionUrdu || newProjectForm.descriptionEn || 'عملی پروجیکٹ مکمل کیا گیا۔',
      descriptionEn: newProjectForm.descriptionEn || newProjectForm.descriptionUrdu || 'Completed practical project.',
      whatILearnedUrdu: newProjectForm.whatILearnedUrdu || newProjectForm.whatILearnedEn || 'عملی مشق اور فہم حاصل کی۔',
      whatILearnedEn: newProjectForm.whatILearnedEn || newProjectForm.whatILearnedUrdu || 'Hands-on practice.',
      howHelpsOthersUrdu: newProjectForm.howHelpsOthersUrdu || newProjectForm.howHelpsOthersEn || 'برادری کی بہتری میں کردار ادا کیا۔',
      howHelpsOthersEn: newProjectForm.howHelpsOthersEn || newProjectForm.howHelpsOthersUrdu || 'Helps local community.',
      completionDate: isUrdu ? 'آج' : 'Today',
      status: 'Completed',
      statusUrdu: 'مکمل شدہ ✓',
    };

    setProjects([newProject, ...projects]);
    setShowAddProjectModal(false);
    setShowSuccessToast(isUrdu ? '🎉 ماشاءاللہ! نیا پروجیکٹ پورٹ فولیو میں شامل کر دیا گیا۔' : '🎉 New project added to your portfolio!');
    setTimeout(() => setShowSuccessToast(null), 3500);

    // Reset Form
    setNewProjectForm({
      titleUrdu: '',
      titleEn: '',
      skillUrdu: 'مصنوعی ذہانت (AI)',
      descriptionUrdu: '',
      descriptionEn: '',
      whatILearnedUrdu: '',
      whatILearnedEn: '',
      howHelpsOthersUrdu: '',
      howHelpsOthersEn: '',
    });
  };

  // Metrics calculation
  const totalCoursesCompleted = userProfile.enrolledCourseIds.length > 0 ? Math.max(userProfile.enrolledCourseIds.length, 5) : 5;
  const skillsStartedCount = skills.length;
  const skillsCompletedCount = skills.filter((s) => s.status === 'Completed').length;
  const projectsCompletedCount = projects.length;
  const learningDaysCount = userProfile.streakDays > 0 ? userProfile.streakDays : 14;
  const practicalTasksCompletedCount = projects.length + contributions.length + 3;

  return (
    <div className="space-y-6 pb-28 max-w-5xl mx-auto px-3 sm:px-6 pt-2">
      {/* Toast Notification */}
      {showSuccessToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-900 text-white px-5 py-2.5 rounded-2xl shadow-xl border border-emerald-500/40 text-xs sm:text-sm font-bold animate-fade-in flex items-center gap-2 font-arabic">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{showSuccessToast}</span>
        </div>
      )}

      {/* 1. Header Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl border border-teal-500/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-teal-400 text-slate-950 font-black flex items-center gap-1.5 font-arabic">
              <FolderKanban className="w-3.5 h-3.5" />
              {isUrdu ? 'میری Skills اور Portfolio' : 'My Skills & Portfolio'}
            </span>
            <span className="text-xs text-teal-300 font-bold font-arabic">
              {isUrdu ? 'تعلیمی و عملی پورٹ فولیو' : 'Learning & Practical Portfolio'}
            </span>
          </div>

          <span className="text-[11px] text-slate-300 bg-white/10 px-3 py-0.5 rounded-full font-medium">
            {userProfile.village || 'ڈوبے، برنالہ، آزاد کشمیر'}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <h1 className="text-xl sm:text-3xl font-black text-white font-arabic tracking-tight">
              {userProfile.name || (isUrdu ? 'طالب علم' : 'Learner')} {isUrdu ? 'کا عملی ریکارڈ اور مہارتیں' : '— Practical Record & Skills'}
            </h1>
            <p className="text-xs sm:text-sm text-teal-100/90 font-arabic leading-relaxed">
              {isUrdu
                ? 'یہ پورٹ فولیو آپ کے سیکھے ہوئے اسباق، مکمل کیے گئے حقیقی پروجیکٹس اور برادری کے لیے کی گئی عملی خدمات کا عکاس ہے۔'
                : 'This portfolio documents your completed learning milestones, real-world practical projects, and community contributions.'}
            </p>
          </div>

          {/* "+ نیا Project" Button */}
          <button
            type="button"
            id="btn-add-portfolio-project"
            onClick={() => setShowAddProjectModal(true)}
            className="w-full md:w-auto px-5 py-3 rounded-2xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-md font-arabic shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-slate-950" />
            <span>{isUrdu ? '+ نیا Project شامل کریں' : '+ Add Project'}</span>
          </button>
        </div>

        {/* Clear Disclaimer: Learning portfolio only */}
        <div className="bg-white/10 rounded-2xl p-3 border border-white/10 text-[11px] text-teal-200/90 font-arabic flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-bold">
              {isUrdu ? 'وضاحت و شفافیت: ' : 'Learning Portfolio Notice: '}
            </strong>
            {isUrdu
              ? 'یہ سیکھو پلیٹ فارم پر ذاتی تعلیمی پیش رفت اور عملی مشقوں کا ریکارڈ ہے، یہ کوئی پیشہ ورانہ ڈگری یا روزگار کی قانونی سند کا دعویٰ نہیں ہے۔'
              : 'This is a personal self-paced learning and practical task portfolio documenting individual skill acquisition and community activities.'}
          </div>
        </div>
      </div>

      {/* 2. Profile Summary (میں کیا جانتا ہوں؟ / میں کیا سیکھ رہا ہوں؟ / میں کیا بنا چکا ہوں؟ / میں دوسروں کے لیے کیا کر سکتا ہوں؟) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Lightbulb className="w-5 h-5 text-teal-700" />
          <h2 className="text-base sm:text-xl font-black text-slate-900 font-arabic">
            {isUrdu ? 'میرا تعلیمی و عملی خلاصہ (Profile Summary)' : 'Profile Summary'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: میں کیا جانتا ہوں؟ */}
          <div className="bg-teal-50/70 rounded-2xl p-4 border border-teal-200/80 space-y-1.5 font-arabic">
            <div className="flex items-center gap-2 text-teal-950 font-black text-xs sm:text-sm">
              <span className="w-6 h-6 rounded-lg bg-teal-200 text-teal-950 flex items-center justify-center text-xs font-bold">۱</span>
              <h3>{isUrdu ? 'میں کیا جانتا ہوں؟' : 'What do I know?'}</h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {isUrdu ? profileSummary.whatIKnowUrdu : profileSummary.whatIKnowEn}
            </p>
          </div>

          {/* Card 2: میں کیا سیکھ رہا ہوں؟ */}
          <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200/80 space-y-1.5 font-arabic">
            <div className="flex items-center gap-2 text-amber-950 font-black text-xs sm:text-sm">
              <span className="w-6 h-6 rounded-lg bg-amber-200 text-amber-950 flex items-center justify-center text-xs font-bold">۲</span>
              <h3>{isUrdu ? 'میں کیا سیکھ رہا ہوں؟' : 'What am I learning?'}</h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {isUrdu ? profileSummary.whatILearningUrdu : profileSummary.whatILearningEn}
            </p>
          </div>

          {/* Card 3: میں کیا بنا چکا ہوں؟ */}
          <div className="bg-sky-50/70 rounded-2xl p-4 border border-sky-200/80 space-y-1.5 font-arabic">
            <div className="flex items-center gap-2 text-sky-950 font-black text-xs sm:text-sm">
              <span className="w-6 h-6 rounded-lg bg-sky-200 text-sky-950 flex items-center justify-center text-xs font-bold">۳</span>
              <h3>{isUrdu ? 'میں کیا بنا چکا ہوں؟' : 'What have I built?'}</h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {isUrdu ? profileSummary.whatIBuiltUrdu : profileSummary.whatIBuiltEn}
            </p>
          </div>

          {/* Card 4: میں دوسروں کے لیے کیا کر سکتا ہوں؟ */}
          <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/80 space-y-1.5 font-arabic">
            <div className="flex items-center gap-2 text-emerald-950 font-black text-xs sm:text-sm">
              <span className="w-6 h-6 rounded-lg bg-emerald-200 text-emerald-950 flex items-center justify-center text-xs font-bold">۴</span>
              <h3>{isUrdu ? 'میں دوسروں کے لیے کیا کر سکتا ہوں؟' : 'What can I do for others?'}</h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {isUrdu ? profileSummary.whatICanDoForOthersUrdu : profileSummary.whatICanDoForOthersEn}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Learning Achievements Section (۶ کلیدی سنگِ میل) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Award className="w-5 h-5 text-amber-600" />
          <h2 className="text-base sm:text-xl font-black text-slate-900 font-arabic">
            {isUrdu ? 'تعلیمی سنگِ میل (Learning Achievements)' : 'Learning Achievements'}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* Metric 1: Courses completed */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center space-y-1">
            <div className="flex items-center justify-center text-teal-700">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
              {totalCoursesCompleted}
            </div>
            <div className="text-[11px] font-bold text-slate-600 font-arabic leading-tight">
              {isUrdu ? 'کورسز مکمل' : 'Courses Done'}
            </div>
          </div>

          {/* Metric 2: Skills started */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center space-y-1">
            <div className="flex items-center justify-center text-blue-700">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
              {skillsStartedCount}
            </div>
            <div className="text-[11px] font-bold text-slate-600 font-arabic leading-tight">
              {isUrdu ? 'شروع کی گئی مہارتیں' : 'Skills Started'}
            </div>
          </div>

          {/* Metric 3: Skills completed */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center space-y-1">
            <div className="flex items-center justify-center text-emerald-700">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
              {skillsCompletedCount}
            </div>
            <div className="text-[11px] font-bold text-slate-600 font-arabic leading-tight">
              {isUrdu ? 'مکمل مہارتیں' : 'Skills Mastered'}
            </div>
          </div>

          {/* Metric 4: Projects completed */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center space-y-1">
            <div className="flex items-center justify-center text-purple-700">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
              {projectsCompletedCount}
            </div>
            <div className="text-[11px] font-bold text-slate-600 font-arabic leading-tight">
              {isUrdu ? 'مکمل پروجیکٹس' : 'Projects Done'}
            </div>
          </div>

          {/* Metric 5: Learning days */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center space-y-1">
            <div className="flex items-center justify-center text-amber-500">
              <Flame className="w-5 h-5 fill-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
              {learningDaysCount}
            </div>
            <div className="text-[11px] font-bold text-slate-600 font-arabic leading-tight">
              {isUrdu ? 'تسلسل کے دن' : 'Learning Days'}
            </div>
          </div>

          {/* Metric 6: Practical tasks completed */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center space-y-1">
            <div className="flex items-center justify-center text-rose-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
              {practicalTasksCompletedCount}
            </div>
            <div className="text-[11px] font-bold text-slate-600 font-arabic leading-tight">
              {isUrdu ? 'عملی ٹاسکس' : 'Practical Tasks'}
            </div>
          </div>
        </div>
      </div>

      {/* 4. MY SKILLS Section (Active & Completed Skills) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 font-arabic">
              {isUrdu ? 'میری Skills (مہارتیں اور پیش رفت)' : 'My Skills'}
            </h2>
            <p className="text-xs text-slate-600 font-arabic">
              {isUrdu ? 'سیکھنے کی سطح، کورسز اور پیش رفت کا گراف:' : 'Current levels, course counts, and progress status:'}
            </p>
          </div>

          <span className="text-xs font-black text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-xl font-arabic">
            {isUrdu ? `${skills.length} مہارتیں فعال` : `${skills.length} Active Skills`}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => {
            const isCompleted = skill.status === 'Completed' || skill.progressPercent === 100;

            return (
              <div
                key={skill.id}
                id={`skill-card-${skill.id}`}
                className="bg-white rounded-3xl p-5 border-2 border-slate-200 hover:border-teal-400 transition shadow-xs space-y-3.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 font-arabic">
                      {isUrdu ? skill.nameUrdu : skill.nameEn}
                    </h3>
                    <p className="text-xs text-slate-500 font-arabic mt-0.5">
                      {skill.category}
                    </p>
                  </div>

                  <span
                    className={`text-[11px] font-black px-2.5 py-1 rounded-xl font-arabic shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                        : 'bg-amber-100 text-amber-950 border border-amber-300'
                    }`}
                  >
                    {isUrdu ? skill.statusUrdu : skill.status}
                  </span>
                </div>

                {/* Level & Completed Courses Info */}
                <div className="flex items-center justify-between text-xs text-slate-700 font-arabic pt-1">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-lg font-bold">
                    {isUrdu ? `سطح: ${skill.levelUrdu}` : `Level: ${skill.level}`}
                  </span>
                  <span className="text-slate-600 font-bold">
                    {isUrdu 
                      ? `${skill.completedCoursesCount} از ${skill.totalCoursesCount} کورسز مکمل`
                      : `${skill.completedCoursesCount} of ${skill.totalCoursesCount} Courses`}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold text-slate-500 font-arabic">
                      {isUrdu ? 'مہارت کا تسلسل' : 'Skill Progress'}
                    </span>
                    <span className="text-xs font-black text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md">
                      {skill.progressPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCompleted ? 'bg-emerald-600' : 'bg-teal-600'
                      }`}
                      style={{ width: `${skill.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. MY PROJECTS & PORTFOLIO Section */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 font-arabic">
              {isUrdu ? 'میرے پروجیکٹس (My Projects)' : 'My Projects Portfolio'}
            </h2>
            <p className="text-xs text-slate-600 font-arabic">
              {isUrdu ? 'سیکھے ہوئے علم کا عملی اطلاق اور نتائج:' : 'Practical implementations of acquired skills:'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddProjectModal(true)}
            className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-xs font-arabic"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{isUrdu ? '+ نیا Project' : '+ Add Project'}</span>
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-white rounded-3xl p-5 border-2 border-slate-200 hover:border-teal-400 transition shadow-sm space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Top: Skill Badge & Status */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-black px-2.5 py-1 rounded-xl bg-teal-50 text-teal-950 border border-teal-200 font-arabic">
                      {isUrdu ? `Skill: ${project.skillUrdu}` : `Skill: ${project.skillEn}`}
                    </span>

                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-950 font-arabic">
                      {isUrdu ? project.statusUrdu : project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-black text-slate-900 font-arabic leading-snug">
                    {isUrdu ? project.titleUrdu : project.titleEn}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-700 font-arabic leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    {isUrdu ? project.descriptionUrdu : project.descriptionEn}
                  </p>

                  {/* What I Learned & How it Helps Others */}
                  <div className="space-y-2 text-xs font-arabic pt-1">
                    <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-100 text-slate-800">
                      <strong className="text-amber-950 font-bold block mb-0.5">
                        💡 {isUrdu ? 'میں نے کیا سیکھا؟' : 'What I Learned:'}
                      </strong>
                      <p>{isUrdu ? project.whatILearnedUrdu : project.whatILearnedEn}</p>
                    </div>

                    <div className="bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100 text-slate-800">
                      <strong className="text-emerald-950 font-bold block mb-0.5">
                        🤝 {isUrdu ? 'یہ دوسروں کے لیے کیوں مفید ہے؟' : 'How it helps others:'}
                      </strong>
                      <p>{isUrdu ? project.howHelpsOthersUrdu : project.howHelpsOthersEn}</p>
                    </div>
                  </div>
                </div>

                {/* Date Footer */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-arabic">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{isUrdu ? `مکمل تاریخ: ${project.completionDate}` : `Completed: ${project.completionDate}`}</span>
                  </span>
                  <span className="font-bold text-teal-800">
                    {isUrdu ? 'عملی پورٹ فولیو پروجیکٹ ✓' : 'Portfolio Project ✓'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. COMMUNITY CONTRIBUTION Section (میری Community Contribution) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-rose-600" />
            <h2 className="text-base sm:text-xl font-black text-slate-900 font-arabic">
              {isUrdu ? 'میری Community Contribution (برادری کی خدمت)' : 'My Community Contribution'}
            </h2>
          </div>

          <span className="text-xs font-black text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-xl font-arabic">
            {isUrdu ? `${contributions.length} عملی خدمات` : `${contributions.length} Contributions`}
          </span>
        </div>

        <p className="text-xs text-slate-600 font-arabic">
          {isUrdu
            ? 'سیکھے ہوئے ہنر کو دوسرے لوگوں کی بہتری اور محلے کے مسائل حل کرنے کے لیے استعمال کرنے کا عملی ریکارڈ:'
            : 'Record of applying learned skills to benefit neighbors and solve local community issues:'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {contributions.map((contrib) => (
            <div
              key={contrib.id}
              className="bg-rose-50/40 rounded-2xl p-4 border border-rose-200/70 space-y-2.5 flex flex-col justify-between font-arabic"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-rose-100 text-rose-950">
                    {isUrdu ? contrib.categoryUrdu : contrib.categoryEn}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold">{contrib.date}</span>
                </div>

                <h3 className="text-sm font-black text-slate-900 leading-snug">
                  {isUrdu ? contrib.titleUrdu : contrib.titleEn}
                </h3>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {isUrdu ? contrib.descriptionUrdu : contrib.descriptionEn}
                </p>
              </div>

              <div className="bg-white p-2.5 rounded-xl border border-rose-100 text-[11px] text-slate-800 space-y-0.5">
                <strong className="text-rose-900 font-bold block">
                  🌟 {isUrdu ? 'حقیقی فائدہ / اثر:' : 'Impact:'}
                </strong>
                <p>{isUrdu ? contrib.impactUrdu : contrib.impactEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Add Project Modal */}
      {showAddProjectModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 max-w-xl w-full p-5 sm:p-7 border border-slate-200 shadow-2xl space-y-4 my-8 font-arabic">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-teal-700" />
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {isUrdu ? 'نیا پروجیکٹ شامل کریں (Add Project)' : 'Add Practical Project'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAddProjectModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-3.5 text-xs sm:text-sm">
              {/* Project Title */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isUrdu ? 'پروجیکٹ کا عنوان (Project Title)' : 'Project Title'} *
                </label>
                <input
                  type="text"
                  value={newProjectForm.titleUrdu}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, titleUrdu: e.target.value })}
                  required
                  placeholder={isUrdu ? 'مثلاً: AI سے CV تیار کرنا یا دکان کا کیٹلاگ' : 'e.g., Creating a CV with AI'}
                  className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Skill Used */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isUrdu ? 'استعمال شدہ Skill (Skill Used)' : 'Skill Used'} *
                </label>
                <select
                  value={newProjectForm.skillUrdu}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, skillUrdu: e.target.value })}
                  className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-teal-500"
                >
                  <option value="مصنوعی ذہانت (AI)">مصنوعی ذہانت (AI & Tech)</option>
                  <option value="کمپیوٹر اور ڈیجیٹل مہارت">کمپیوٹر اور ڈیجیٹل مہارت</option>
                  <option value="کمیونٹی ڈویلپمنٹ">کمیونٹی ڈویلپمنٹ</option>
                  <option value="گرافک ڈیزائن اور موبائل">گرافک ڈیزائن اور موبائل</option>
                  <option value="جدید زراعت اور مقامی علم">جدید زراعت اور مقامی علم</option>
                  <option value="گفتگو اور زبانیں">گفتگو اور زبانیں</option>
                </select>
              </div>

              {/* Short Description */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isUrdu ? 'مختصر تفصیل (Description)' : 'Short Description'} *
                </label>
                <textarea
                  rows={2}
                  value={newProjectForm.descriptionUrdu}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, descriptionUrdu: e.target.value })}
                  required
                  placeholder={isUrdu ? 'آپ نے اس پروجیکٹ میں کیا کیا؟' : 'Briefly describe your project...'}
                  className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* What I Learned */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isUrdu ? 'میں نے کیا سیکھا؟ (What I Learned)' : 'What I Learned'} *
                </label>
                <textarea
                  rows={2}
                  value={newProjectForm.whatILearnedUrdu}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, whatILearnedUrdu: e.target.value })}
                  required
                  placeholder={isUrdu ? 'اس پروجیکٹ کے دوران آپ کو کیا نئی فہم یا پریکٹس ملی؟' : 'What lessons or techniques did you learn?'}
                  className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* How this project can help others */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  {isUrdu ? 'یہ دوسروں کے لیے کیوں مفید ہے؟ (How it helps others)' : 'How this project can help others'} *
                </label>
                <textarea
                  rows={2}
                  value={newProjectForm.howHelpsOthersUrdu}
                  onChange={(e) => setNewProjectForm({ ...newProjectForm, howHelpsOthersUrdu: e.target.value })}
                  required
                  placeholder={isUrdu ? 'آپ اس ہنر سے دوستوں، گھر والوں یا برادری کی کیا مدد کر سکتے ہیں؟' : 'How can this work benefit family or community?'}
                  className="w-full bg-slate-50 text-slate-900 rounded-xl p-2.5 border border-slate-200 focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Modal Buttons */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddProjectModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  {isUrdu ? 'منسوخ کریں' : 'Cancel'}
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs sm:text-sm shadow-md"
                >
                  {isUrdu ? 'پروجیکٹ محفوظ کریں ✓' : 'Save Project ✓'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
