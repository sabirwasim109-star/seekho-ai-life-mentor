import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  HelpCircle, 
  Trophy, 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  ArrowLeft, 
  Award,
  Clock,
  Send,
  UploadCloud,
  FileCheck,
  Play,
  ListChecks,
  Info,
  RefreshCw,
  TrendingUp
} from 'lucide-react';
import { Course, Language, UserProfile, QuizQuestion } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';

interface CourseModalProps {
  course: Course;
  language: Language;
  userProfile: UserProfile;
  onClose: () => void;
  onCompleteCourse: (courseId: string, points: number) => void;
  initialStep?: 'detail' | 'lesson' | 'quiz' | 'practice';
  onOpenSkillPathway?: (skillId?: string, categoryKey?: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  language,
  userProfile,
  onClose,
  onCompleteCourse,
  initialStep = 'detail',
  onOpenSkillPathway,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [activeStep, setActiveStep] = useState<'detail' | 'lesson' | 'quiz' | 'practice' | 'project' | 'completion'>(initialStep);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(userProfile.completedLessonIds || []);

  // Quiz state: keyed by question ID or index for instant interactivity
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedQuizIds, setSubmittedQuizIds] = useState<Record<string, boolean>>({});

  // Practical Task State
  const [taskReflection, setTaskReflection] = useState('');
  const [taskFileUploaded, setTaskFileUploaded] = useState(false);
  const [taskSubmitted, setTaskSubmitted] = useState(false);

  const currentLesson = course.lessons[currentLessonIndex] || course.lessons[0];
  const activeQuiz = (currentLesson && currentLesson.quiz && currentLesson.quiz.length > 0) ? currentLesson.quiz : course.quiz;
  const activeTask = (currentLesson && currentLesson.practicalTask) ? currentLesson.practicalTask : course.practicalTask;
  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  // Course progress calculation
  const totalLessons = course.lessons.length;
  const completedLessonsCount = course.lessons.filter(l => completedLessonIds.includes(l.id)).length;
  const isCourseComplete = completedLessonsCount === totalLessons && totalLessons > 0;

  // Text to speech helper (Web Speech API)
  const toggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      try {
        window.speechSynthesis.cancel();
        const textToRead = language === 'ur' ? currentLesson.contentUrdu : currentLesson.contentEn;
        const utterance = new SpeechSynthesisUtterance(textToRead.replace(/[#*`_]/g, ''));
        utterance.lang = language === 'ur' ? 'ur-PK' : 'en-US';
        utterance.rate = 0.9;
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      } catch (e) {
        setIsSpeaking(false);
      }
    }
  };

  const handleSelectQuizOption = (qId: string, optionIndex: number) => {
    if (submittedQuizIds[qId]) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const handleQuizSubmit = (quizList: QuizQuestion[]) => {
    const newSubmitted = { ...submittedQuizIds };
    quizList.forEach(q => {
      newSubmitted[q.id] = true;
    });
    setSubmittedQuizIds(newSubmitted);
  };

  const handleMarkLessonComplete = () => {
    let updatedCompleted = completedLessonIds;
    if (!completedLessonIds.includes(currentLesson.id)) {
      updatedCompleted = [...completedLessonIds, currentLesson.id];
      setCompletedLessonIds(updatedCompleted);
    }

    const newCompletedCount = course.lessons.filter(l => updatedCompleted.includes(l.id)).length;

    if (currentLessonIndex < course.lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    } else {
      // All lessons completed
      setActiveStep('completion');
      onCompleteCourse(course.id, 50);
    }
  };

  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskReflection.trim()) return;
    setTaskSubmitted(true);
    setTimeout(() => {
      handleMarkLessonComplete();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header with Course Progress */}
        <div className={`p-4 sm:p-6 bg-gradient-to-r ${course.coverGradient} text-white relative flex flex-col gap-3`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center flex-wrap gap-2 mb-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md font-medium">
                  {language === 'ur' ? course.categoryUrdu : course.category}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md font-medium">
                  {language === 'ur' ? course.difficultyUrdu : course.difficulty}
                </span>
                <span className="text-xs flex items-center gap-1 text-white/90">
                  <Clock className="w-3.5 h-3.5" />
                  {course.estimatedHours} {language === 'ur' ? 'گھنٹے' : 'hrs'}
                </span>
                <span className="text-xs flex items-center gap-1 text-white/90">
                  <BookOpen className="w-3.5 h-3.5" />
                  {course.lessons.length} {language === 'ur' ? 'اسباق' : 'Lessons'}
                </span>
                {onOpenSkillPathway && (
                  <button
                    id="course-modal-pathway-btn"
                    type="button"
                    onClick={() => onOpenSkillPathway(course.id, course.category)}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition flex items-center gap-1 shadow-xs"
                  >
                    <Sparkles className="w-3 h-3 text-slate-950" />
                    <span>{language === 'ur' ? 'ہنر سے موقع کا راستہ' : 'Opportunity Path'}</span>
                  </button>
                )}
              </div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-white">
                {language === 'ur' ? course.titleUrdu : course.titleEn}
              </h2>
            </div>

            <button
              id="close-course-modal-btn"
              onClick={() => {
                if (isSpeaking && 'speechSynthesis' in window) window.speechSynthesis.cancel();
                onClose();
              }}
              className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar 0/5 -> 1/5 -> 2/5 -> 3/5 -> 4/5 -> 5/5 */}
          <div className="bg-black/25 rounded-2xl p-2.5 sm:p-3 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white/95">
                {language === 'ur' ? 'کورس کی پیشرفت:' : 'Course Progress:'}
              </span>
              <span className="text-xs font-black bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                {completedLessonsCount} / {totalLessons}
              </span>
              {isCourseComplete && (
                <span className="text-xs font-bold bg-emerald-400 text-emerald-950 px-2 py-0.5 rounded-full">
                  ✓ {language === 'ur' ? 'مکمل شدہ' : 'Completed'}
                </span>
              )}
            </div>

            {/* Stepper Dots / Bars */}
            <div className="flex items-center gap-1.5 flex-1 max-w-xs">
              {course.lessons.map((les, lIdx) => {
                const isDone = completedLessonIds.includes(les.id);
                const isCurrent = lIdx === currentLessonIndex;
                return (
                  <button
                    key={les.id}
                    onClick={() => {
                      setCurrentLessonIndex(lIdx);
                      setActiveStep('lesson');
                    }}
                    title={language === 'ur' ? les.titleUrdu : les.titleEn}
                    className={`h-2 flex-1 rounded-full transition-all ${
                      isDone
                        ? 'bg-emerald-300'
                        : isCurrent
                        ? 'bg-amber-300 ring-2 ring-white/60'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Step Indicator Tabs */}
        <div className="bg-slate-50 border-b border-slate-200 px-3 sm:px-6 py-2 flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-max text-xs sm:text-sm font-bold">
            <button
              onClick={() => setActiveStep('detail')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition ${
                activeStep === 'detail'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>{language === 'ur' ? 'کورس خلاصہ' : 'Overview'}</span>
            </button>

            <button
              onClick={() => setActiveStep('lesson')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition ${
                activeStep === 'lesson'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{language === 'ur' ? `سبق ${currentLessonIndex + 1} از ${totalLessons}` : `Lesson ${currentLessonIndex + 1}/${totalLessons}`}</span>
            </button>

            <button
              onClick={() => setActiveStep('quiz')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition ${
                activeStep === 'quiz'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>{language === 'ur' ? 'کوئز' : 'Quiz'}</span>
            </button>

            <button
              onClick={() => setActiveStep('practice')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition ${
                activeStep === 'practice'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{language === 'ur' ? 'عملی مشق' : 'Practice'}</span>
            </button>
          </div>

          <div className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg shrink-0">
            {language === 'ur' ? `پیشرفت: ${completedLessonsCount}/${totalLessons}` : `Progress: ${completedLessonsCount}/${totalLessons}`}
          </div>
        </div>

        {/* Modal Body Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* STEP 0: COURSE DETAIL PAGE */}
          {activeStep === 'detail' && (
            <div className="space-y-6">
              {/* Overview Box */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {language === 'ur' ? 'کورس کا تعارف اور خلاصہ' : 'Course Overview & Summary'}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {language === 'ur' ? course.descriptionUrdu : course.descriptionEn}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                    <span className="text-slate-400 block">{language === 'ur' ? 'درجہ / لیول' : 'Level'}</span>
                    <span className="font-bold text-slate-800">{language === 'ur' ? course.difficultyUrdu : course.difficulty}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                    <span className="text-slate-400 block">{language === 'ur' ? 'سیکھنے کا وقت' : 'Estimated Time'}</span>
                    <span className="font-bold text-slate-800">{course.estimatedHours} {language === 'ur' ? 'گھنٹے' : 'hours'}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs col-span-2 sm:col-span-1">
                    <span className="text-slate-400 block">{language === 'ur' ? 'کل اسباق' : 'Lessons'}</span>
                    <span className="font-bold text-slate-800">{course.lessons.length} {language === 'ur' ? 'اسباق + کوئز' : 'Lessons + Quiz'}</span>
                  </div>
                </div>
              </div>

              {/* REAL-LIFE PURPOSE SECTION */}
              {course.realLifePurpose && (
                <div className="bg-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-200/90 space-y-3.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-700" />
                    <h4 className="text-sm sm:text-base font-bold text-amber-950 font-arabic">
                      {language === 'ur' ? 'اس Skill کا حقیقی زندگی اور معاشرے میں عملی فائدہ:' : 'Real-Life Purpose & Practical Value:'}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Personal Benefit */}
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200/80 space-y-1">
                      <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5 font-arabic">
                        <span>👤</span>
                        <span>{language === 'ur' ? 'یہ Skill میری زندگی میں کیسے فائدہ دے گی؟' : 'How does this skill help my life?'}</span>
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-arabic">
                        {language === 'ur' ? course.realLifePurpose.personalBenefitUrdu : course.realLifePurpose.personalBenefitEn}
                      </p>
                    </div>

                    {/* Family Benefit */}
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200/80 space-y-1">
                      <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5 font-arabic">
                        <span>🏡</span>
                        <span>{language === 'ur' ? 'میں اس Skill سے اپنے خاندان کی کیسے مدد کر سکتا ہوں؟' : 'How can I help my family?'}</span>
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-arabic">
                        {language === 'ur' ? course.realLifePurpose.familyHelpUrdu : course.realLifePurpose.familyHelpEn}
                      </p>
                    </div>

                    {/* Community / Village Benefit */}
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200/80 space-y-1">
                      <span className="text-xs font-bold text-sky-900 flex items-center gap-1.5 font-arabic">
                        <span>🏘️</span>
                        <span>{language === 'ur' ? 'میں اپنے گاؤں یا علاقے کے لیے اس Skill کو کیسے استعمال کر سکتا ہوں؟' : 'How can I use this for my village/area?'}</span>
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-arabic">
                        {language === 'ur' ? course.realLifePurpose.communityHelpUrdu : course.realLifePurpose.communityHelpEn}
                      </p>
                    </div>

                    {/* Societal Benefit */}
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200/80 space-y-1">
                      <span className="text-xs font-bold text-purple-900 flex items-center gap-1.5 font-arabic">
                        <span>🌍</span>
                        <span>{language === 'ur' ? 'میں اس Skill کے ذریعے معاشرے کے لیے کیا فائدہ پیدا کر سکتا ہوں؟' : 'What societal value can I create?'}</span>
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-arabic">
                        {language === 'ur' ? course.realLifePurpose.societalBenefitUrdu : course.realLifePurpose.societalBenefitEn}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Start Course CTA Button */}
              <div className="p-4 sm:p-5 bg-emerald-50 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
                    {language === 'ur' ? 'کیا آپ اس کورس کو شروع کرنے کے لیے تیار ہیں؟' : 'Ready to start this practical course?'}
                  </h4>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    {language === 'ur' ? 'پہلا سبق پڑھیں، کوئز حل کریں اور عملی مشق مکمل کر کے پوائنٹس حاصل کریں۔' : 'Read lesson 1, take the quiz, submit the practical task and earn points.'}
                  </p>
                </div>
                <button
                  id="start-course-primary-btn"
                  onClick={() => {
                    setCurrentLessonIndex(0);
                    setActiveStep('lesson');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{language === 'ur' ? 'کورس شروع کریں' : 'Start Course'}</span>
                </button>
              </div>

              {/* Syllabus Outline */}
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'ur' ? 'اسباق اور عملی نصاب کی فہرست' : 'Curriculum & Lessons Outline'}</span>
                </h4>
                <div className="space-y-2">
                  {course.lessons.map((les, idx) => (
                    <div
                      key={les.id}
                      onClick={() => {
                        setCurrentLessonIndex(idx);
                        setActiveStep('lesson');
                      }}
                      className="p-3.5 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 transition cursor-pointer flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700">
                            {language === 'ur' ? les.titleUrdu : les.titleEn}
                          </h5>
                          <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3" />
                            {les.durationMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {completedLessonIds.includes(les.id) && (
                          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                            ✓ {language === 'ur' ? 'مکمل' : 'Done'}
                          </span>
                        )}
                        <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
                      </div>
                    </div>
                  ))}

                  {/* Practical Task & Quiz items in syllabus */}
                  <div
                    onClick={() => setActiveStep('quiz')}
                    className="p-3.5 bg-amber-50/60 hover:bg-amber-50 rounded-xl border border-amber-200 transition cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0">
                        ?
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-amber-950">
                          {language === 'ur' ? 'جامع کوئز (فہم کی جانچ)' : 'Comprehension Quiz'}
                        </h5>
                        <span className="text-xs text-amber-700">
                          {course.quiz.length} {language === 'ur' ? 'سوالات' : 'questions'}
                        </span>
                      </div>
                    </div>
                    <ArrowIcon className="w-4 h-4 text-amber-800" />
                  </div>

                  <div
                    onClick={() => setActiveStep('practice')}
                    className="p-3.5 bg-sky-50/60 hover:bg-sky-50 rounded-xl border border-sky-200 transition cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-200 text-sky-900 font-bold text-xs flex items-center justify-center shrink-0">
                        ⚡
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-sky-950">
                          {language === 'ur' ? course.practicalTask.titleUrdu : course.practicalTask.titleEn}
                        </h5>
                        <span className="text-xs text-sky-700">
                          {course.practicalTask.estimatedMinutes} {language === 'ur' ? 'منٹ کا عملی کام' : 'min practical task'}
                        </span>
                      </div>
                    </div>
                    <ArrowIcon className="w-4 h-4 text-sky-800" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 1: LESSON PAGE */}
          {activeStep === 'lesson' && (
            <div className="space-y-5">
              {/* Lesson Header with Audio */}
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {language === 'ur' ? currentLesson.titleUrdu : currentLesson.titleEn}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {language === 'ur' ? `سبق ${currentLessonIndex + 1} از ${totalLessons}` : `Lesson ${currentLessonIndex + 1} of ${totalLessons}`}
                  </span>
                </div>

                <button
                  id="listen-audio-btn"
                  onClick={toggleSpeech}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    isSpeaking 
                      ? 'bg-amber-100 text-amber-900 border border-amber-300 animate-pulse'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                  }`}
                  title="Listen Lesson Audio"
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
                  <span>{isSpeaking ? (language === 'ur' ? 'آواز روکیں' : 'Stop Audio') : (language === 'ur' ? 'سبق سنیں' : 'Listen')}</span>
                </button>
              </div>

              {/* 1. Simple Urdu Explanation */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/90 text-sm sm:text-base leading-relaxed text-slate-800 whitespace-pre-line font-arabic">
                {language === 'ur' ? currentLesson.contentUrdu : currentLesson.contentEn}
              </div>

              {/* 2. 3 Key Points */}
              <div className="bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200">
                <h4 className="text-xs sm:text-sm font-bold text-emerald-950 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>{language === 'ur' ? 'سبق کے ۳ اہم نکات:' : '3 Key Learning Points:'}</span>
                </h4>
                <ul className="space-y-1.5">
                  {(language === 'ur' ? currentLesson.keyTakeawaysUrdu : currentLesson.keyTakeawaysEn).map((takeaway, i) => (
                    <li key={i} className="text-xs sm:text-sm text-emerald-900 flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. 3-Question Quiz for this lesson */}
              {activeQuiz && activeQuiz.length > 0 && (
                <div className="bg-amber-50/70 rounded-2xl p-4 sm:p-5 border border-amber-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-amber-700" />
                      <span>{language === 'ur' ? `اس سبق کا کوئز (${activeQuiz.length} سوالات)` : `Lesson Quiz (${activeQuiz.length} Questions)`}</span>
                    </h4>
                    <span className="text-[11px] text-amber-800 font-medium">
                      {language === 'ur' ? 'فہم کی فوری جانچ' : 'Quick Check'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {activeQuiz.map((q, qIdx) => {
                      const isAnswered = selectedAnswers[q.id] !== undefined;
                      const isSubmitted = submittedQuizIds[q.id];
                      const isCorrect = selectedAnswers[q.id] === q.correctIndex;
                      const options = language === 'ur' ? q.optionsUrdu : q.optionsEn;

                      return (
                        <div key={q.id} className="bg-white rounded-xl p-3.5 border border-amber-200/90 space-y-2">
                          <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-start gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-[11px] flex items-center justify-center font-bold shrink-0">
                              {qIdx + 1}
                            </span>
                            <span>{language === 'ur' ? q.questionUrdu : q.questionEn}</span>
                          </p>

                          <div className="space-y-1.5 pt-1">
                            {options.map((opt, optIdx) => {
                              const isOptionSelected = selectedAnswers[q.id] === optIdx;
                              let btnCls = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';
                              if (isOptionSelected) {
                                if (isSubmitted) {
                                  btnCls = isCorrect ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold' : 'bg-rose-100 border-rose-500 text-rose-950 font-bold';
                                } else {
                                  btnCls = 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold';
                                }
                              } else if (isSubmitted && optIdx === q.correctIndex) {
                                btnCls = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectQuizOption(q.id, optIdx)}
                                  className={`w-full text-start p-2.5 rounded-lg border text-xs transition flex items-center justify-between gap-2 ${btnCls}`}
                                >
                                  <span>{opt}</span>
                                  {isOptionSelected && (
                                    <span className="text-[11px] font-bold text-emerald-700">✓</span>
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {isSubmitted && (
                            <div className={`p-2 rounded-lg text-xs ${isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'}`}>
                              <p className="font-bold">{isCorrect ? (language === 'ur' ? 'درست جواب! ✓' : 'Correct! ✓') : (language === 'ur' ? 'جواب درست نہیں ہے' : 'Incorrect')}</p>
                              <p className="mt-0.5">{language === 'ur' ? q.explanationUrdu : q.explanationEn}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {!activeQuiz.every(q => submittedQuizIds[q.id]) && (
                    <button
                      onClick={() => handleQuizSubmit(activeQuiz)}
                      disabled={!activeQuiz.some(q => selectedAnswers[q.id] !== undefined)}
                      className="w-full py-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-xs transition"
                    >
                      {language === 'ur' ? 'کوئز کے جوابات چیک کریں' : 'Check Answers'}
                    </button>
                  )}
                </div>
              )}

              {/* 4. One Practical Task for this lesson */}
              {activeTask && (
                <div className="bg-sky-50/70 rounded-2xl p-4 sm:p-5 border border-sky-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-sky-950 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-sky-700" />
                      <span>{language === 'ur' ? activeTask.titleUrdu : activeTask.titleEn}</span>
                    </h4>
                    <span className="text-[11px] text-sky-800 font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activeTask.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {language === 'ur' ? activeTask.instructionsUrdu : activeTask.instructionsEn}
                  </p>

                  <div className="p-2.5 bg-white rounded-xl border border-sky-200 text-xs text-sky-950">
                    <strong>{language === 'ur' ? 'مطلوبہ نتیجہ:' : 'Deliverable:'}</strong>{' '}
                    {language === 'ur' ? activeTask.deliverableUrdu : activeTask.deliverableEn}
                  </div>
                </div>
              )}

              {/* Lesson Completion and Navigation Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveStep('detail')}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                  >
                    {language === 'ur' ? 'کورس فہرست' : 'Overview'}
                  </button>

                  {currentLessonIndex > 0 && (
                    <button
                      onClick={() => setCurrentLessonIndex(prev => prev - 1)}
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
                    >
                      {language === 'ur' ? 'پچھلا سبق' : 'Prev'}
                    </button>
                  )}
                </div>

                {/* Direct "سبق مکمل کریں" Button */}
                <button
                  id="mark-lesson-complete-btn"
                  onClick={handleMarkLessonComplete}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {currentLessonIndex < course.lessons.length - 1
                      ? (language === 'ur' ? 'سبق مکمل کریں (اگلا سبق)' : 'Complete Lesson & Next')
                      : (language === 'ur' ? 'سبق مکمل کریں (کورس مکمل)' : 'Complete Lesson (Finish Course)')}
                  </span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: QUIZ TAB */}
          {activeStep === 'quiz' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {language === 'ur' ? 'اسباق کا جامع کوئز' : 'Course Comprehension Quiz'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'ur' ? 'صحیح جواب منتخب کریں تاکہ تصدیق ہو سکے کہ آپ نے تمام نکات کو سمجھ لیا ہے۔' : 'Select the correct option to verify your understanding.'}
                </p>
              </div>

              {activeQuiz.map((q, qIdx) => {
                const isSubmitted = submittedQuizIds[q.id];
                const isCorrect = selectedAnswers[q.id] === q.correctIndex;
                const options = language === 'ur' ? q.optionsUrdu : q.optionsEn;

                return (
                  <div key={q.id} className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-3">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold shrink-0">
                        {qIdx + 1}
                      </span>
                      <span>{language === 'ur' ? q.questionUrdu : q.questionEn}</span>
                    </h4>

                    <div className="space-y-2">
                      {options.map((opt, optIdx) => {
                        let btnStyle = 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800';

                        if (selectedAnswers[q.id] === optIdx) {
                          if (isSubmitted) {
                            btnStyle = optIdx === q.correctIndex
                              ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold'
                              : 'bg-rose-100 border-rose-500 text-rose-950 font-bold';
                          } else {
                            btnStyle = 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold';
                          }
                        } else if (isSubmitted && optIdx === q.correctIndex) {
                          btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectQuizOption(q.id, optIdx)}
                            className={`w-full text-start p-3 rounded-xl border text-xs sm:text-sm transition flex items-center justify-between gap-2 ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {selectedAnswers[q.id] === optIdx && (
                              <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                                ✓
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {isSubmitted && (
                      <div className={`p-3 rounded-xl text-xs ${isCorrect ? 'bg-emerald-100 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'}`}>
                        <p className="font-bold mb-0.5">
                          {isCorrect 
                            ? (language === 'ur' ? 'ماشاءاللہ! بالکل درست جواب ہے۔' : 'Correct!') 
                            : (language === 'ur' ? 'یہ جواب درست نہیں ہے۔' : 'Not quite right.')}
                        </p>
                        <p>{language === 'ur' ? q.explanationUrdu : q.explanationEn}</p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Smart Quiz Performance Recommendation */}
              {activeQuiz.every(q => submittedQuizIds[q.id]) && (() => {
                const totalQuestions = activeQuiz.length;
                const correctCount = activeQuiz.filter(q => selectedAnswers[q.id] === q.correctIndex).length;
                const isPassing = totalQuestions > 0 && (correctCount / totalQuestions) >= 0.67;

                if (!isPassing) {
                  return (
                    <div id="quiz-revision-recommendation" className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border-2 border-amber-300 space-y-2.5 animate-fade-in">
                      <div className="flex items-center gap-2 text-amber-950 font-bold text-sm sm:text-base">
                        <RefreshCw className="w-5 h-5 text-amber-700 animate-spin-slow" />
                        <span>{language === 'ur' ? 'دہرائی کی سفارش (Revision Recommended)' : 'Revision Recommended'}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-arabic">
                        {language === 'ur'
                          ? `آپ کا کوئز نتیجہ ${correctCount}/${totalQuestions} درست رہا۔ مضبوط مہارت کے لیے ہم تجویز کرتے ہیں کہ سبق کو ایک بار پھر دہرائیں تاکہ بنیادی نکات اچھی طرح ذہن نشین ہو جائیں۔`
                          : `You scored ${correctCount}/${totalQuestions}. We recommend revising this lesson to reinforce key concepts before moving on.`}
                      </p>
                      <div className="flex flex-wrap items-center gap-2.5 pt-1">
                        <button
                          id="revise-lesson-btn"
                          type="button"
                          onClick={() => setActiveStep('lesson')}
                          className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>{language === 'ur' ? 'سبق کی دہرائی کریں (Revise Lesson)' : 'Revise Lesson'}</span>
                        </button>
                        <button
                          id="retake-quiz-btn"
                          type="button"
                          onClick={() => {
                            const newSubmitted = { ...submittedQuizIds };
                            activeQuiz.forEach(q => delete newSubmitted[q.id]);
                            setSubmittedQuizIds(newSubmitted);
                          }}
                          className="px-4 py-2 rounded-xl bg-white hover:bg-amber-100/50 text-amber-950 border border-amber-300 font-bold text-xs sm:text-sm transition"
                        >
                          {language === 'ur' ? 'دوبارہ کوئز دیں (Retake Quiz)' : 'Retake Quiz'}
                        </button>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div id="quiz-next-level-recommendation" className="p-4 sm:p-5 rounded-2xl bg-emerald-50/90 border-2 border-emerald-400 space-y-2.5 animate-fade-in">
                      <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm sm:text-base">
                        <Sparkles className="w-5 h-5 text-emerald-700" />
                        <span>{language === 'ur' ? 'شاندار فہم! اگلے درجے کے لیے تیار ہیں (Next Level Recommended)' : 'Great Job! Ready for the Next Level'}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-arabic">
                        {language === 'ur'
                          ? `ماشاءاللہ! آپ نے کوئز میں ${correctCount}/${totalQuestions} درست جوابات دیے۔ آپ کی فہم پختہ ہے، اب اگلے درجے اور عملی مشق کے لیے تیار ہیں۔`
                          : `Great job! You scored ${correctCount}/${totalQuestions}. You demonstrated solid understanding and are ready for the practical task.`}
                      </p>
                    </div>
                  );
                }
              })()}

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setActiveStep('lesson')}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold"
                >
                  {language === 'ur' ? 'سبق پر واپس جائیں' : 'Back to Lesson'}
                </button>

                {!activeQuiz.every(q => submittedQuizIds[q.id]) ? (
                  <button
                    id="submit-quiz-btn"
                    onClick={() => handleQuizSubmit(activeQuiz)}
                    disabled={!activeQuiz.some(q => selectedAnswers[q.id] !== undefined)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-xs transition"
                  >
                    {language === 'ur' ? 'کوئز کے جوابات چیک کریں' : 'Check Answers'}
                  </button>
                ) : (
                  <button
                    id="go-to-practice-btn"
                    onClick={() => setActiveStep('practice')}
                    className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-xs transition flex items-center gap-1.5"
                  >
                    <span>{language === 'ur' ? 'اگلے درجے پر جائیں (عملی مشق)' : 'Proceed to Next Level (Practical Task)'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: PRACTICAL TASK TAB */}
          {activeStep === 'practice' && (
            <div className="space-y-5">
              <div className="bg-amber-50/80 rounded-2xl p-4 sm:p-5 border border-amber-200">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-amber-900 bg-amber-200/90 px-2.5 py-0.5 rounded-full">
                    {language === 'ur' ? 'عملی کام کی ہدایات' : 'Practical Task Brief'}
                  </span>
                  <span className="text-xs text-amber-800 font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activeTask.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  {language === 'ur' ? activeTask.titleUrdu : activeTask.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mb-3 leading-relaxed">
                  {language === 'ur' ? activeTask.instructionsUrdu : activeTask.instructionsEn}
                </p>

                <div className="p-3 bg-white rounded-xl border border-amber-200/80 text-xs text-amber-950 font-medium">
                  <strong>{language === 'ur' ? 'مطلوبہ نتیجہ:' : 'Deliverable:'}</strong>{' '}
                  {language === 'ur' ? activeTask.deliverableUrdu : activeTask.deliverableEn}
                </div>
              </div>

              {/* Task Submission Form */}
              <form onSubmit={handleTaskSubmit} className="space-y-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                    {language === 'ur' ? 'آپ نے عملی کام میں کیا کیا اور کیا سیکھا؟ (خلاصہ درج کریں)' : 'Your Practical Reflection / Summary'}
                  </label>
                  <textarea
                    id="task-reflection-input"
                    rows={4}
                    value={taskReflection}
                    onChange={(e) => setTaskReflection(e.target.value)}
                    required
                    placeholder={language === 'ur' ? 'مثال کے طور پر: میں نے AI سے اپنے گھریلو اور تعلیمی کاموں کے لیے سوالات پوچھے اور عملی پلان بنایا...' : 'e.g., I asked AI to help me organize daily household and learning tasks...'}
                    className="w-full bg-white p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                {/* Simulated File Attachment */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'ur' ? 'کام کی تصویر یا ثبوت (اختیاری):' : 'Attach Photo or Work Proof (Optional):'}
                  </label>
                  <div
                    onClick={() => setTaskFileUploaded(!taskFileUploaded)}
                    className={`border-2 border-dashed rounded-xl p-3 text-center cursor-pointer transition flex items-center justify-center gap-2 text-xs font-medium ${
                      taskFileUploaded
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold'
                        : 'border-slate-300 hover:border-emerald-400 text-slate-600 bg-white'
                    }`}
                  >
                    {taskFileUploaded ? (
                      <>
                        <FileCheck className="w-4 h-4 text-emerald-600" />
                        <span>{language === 'ur' ? 'فائل منسلک ہو گئی (work_sample.jpg) ✓' : 'File attached (work_sample.jpg) ✓'}</span>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-4 h-4 text-slate-400" />
                        <span>{language === 'ur' ? 'تصویر اپلوڈ کرنے کے لیے کلک کریں' : 'Click to simulate image upload'}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveStep('lesson')}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold"
                  >
                    {language === 'ur' ? 'سبق پر واپس جائیں' : 'Back to Lesson'}
                  </button>

                  <button
                    id="submit-practical-task-btn"
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center gap-1.5 transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'ur' ? 'عملی کام جمع کروائیں (+50 پوائنٹس)' : 'Submit Practical Task (+50 pts)'}</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 4: COMPLETION / CERTIFICATE */}
          {activeStep === 'completion' && (
            <div className="text-center py-6 sm:py-8 space-y-5">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center shadow-inner">
                <Award className="w-12 h-12 text-emerald-600 animate-bounce" />
              </div>

              {/* Exact Completion Heading Required */}
              <div className="space-y-2 bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 max-w-lg mx-auto">
                <h3 className="text-xl sm:text-2xl font-black text-emerald-950 font-arabic">
                  {language === 'ur' ? 'مبارک ہو! آپ نے یہ کورس مکمل کر لیا ہے۔' : 'Congratulations! You have completed this course.'}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900 font-medium">
                  {language === 'ur'
                    ? `آپ نے "${course.titleUrdu}" کے تمام 5 اسباق، کوئز اور عملی مشقیں کامیابی سے مکمل کر لی ہیں (5/5)۔`
                    : `You have successfully finished all 5 lessons, quizzes, and practical tasks (5/5).`}
                </p>
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-emerald-300 text-xs font-bold text-emerald-900 shadow-xs mt-1">
                  <span>پیشرفت: 5/5 اسباق مکمل</span>
                  <span>🏆 +50 پوائنٹس شامل</span>
                </div>
              </div>

              {/* Certificate Snapshot Card */}
              <div className="max-w-md mx-auto bg-gradient-to-br from-amber-50 via-white to-emerald-50 border-4 border-amber-300/80 rounded-2xl p-5 shadow-lg relative text-slate-900 text-center">
                <div className="flex items-center justify-between border-b border-amber-200 pb-2 mb-3">
                  <span className="text-xs font-black text-emerald-900 tracking-wide">
                    {language === 'ur' ? 'سیکھو — کورس مکمل کرنے کا سرٹیفکیٹ' : 'Seekho — Course Completion Certificate'}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    ID: SKH-{course.id.toUpperCase().slice(0, 6)}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-1">
                  {language === 'ur' ? 'یہ سند دی جاتی ہے:' : 'This certificate is proudly presented to:'}
                </p>
                <h4 className="text-lg font-black text-emerald-900 mb-2">
                  {userProfile.name || (language === 'ur' ? 'معزز سیکھنے والے ساتھی' : 'Learner')}
                </h4>

                <p className="text-xs text-slate-700 mb-3 leading-relaxed">
                  {language === 'ur'
                    ? `جس نے کامیابی سے "${course.titleUrdu}" کے تمام اسباق اور عملی مراحل مکمل کیے۔`
                    : `For successfully completing all practical lessons and milestones in "${course.titleEn}".`}
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-amber-200">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="font-semibold text-slate-600">Seekho Platform</span>
                </div>

                {/* Important Disclaimer Note */}
                <p className="text-[10px] text-slate-500 mt-3 pt-2 border-t border-amber-200/60 leading-normal font-arabic text-center">
                  {language === 'ur'
                    ? 'یہ سرٹیفکیٹ صرف Seekho platform پر اس کورس کی تکمیل کی تصدیق کرتا ہے۔ یہ کسی سرکاری یا accredited ادارے کی سند نہیں ہے۔'
                    : 'This certificate verifies course completion exclusively on the Seekho platform. It is not an accredited or governmental credential.'}
                </p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                {onOpenSkillPathway && (
                  <button
                    id="finish-course-pathway-btn"
                    type="button"
                    onClick={() => {
                      onOpenSkillPathway(course.id, course.category);
                    }}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>{language === 'ur' ? 'ہنر سے موقع کا راستہ دیکھیں (Learn → Build → Apply → Earn)' : 'View Skill to Opportunity Path'}</span>
                  </button>
                )}
                <button
                  id="finish-course-close-btn"
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition"
                >
                  {language === 'ur' ? 'ڈیش بورڈ پر واپس جائیں' : 'Return to Dashboard'}
                </button>
              </div>
            </div>
          )}

          {/* Educational Reminder at bottom */}
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 font-arabic font-semibold">
              {language === 'ur' 
                ? '”علم وہی فائدہ مند ہے جو انسان کے کردار اور عمل کو بہتر بنائے۔“' 
                : '"Knowledge is only truly beneficial when it elevates one’s character and righteous actions."'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
