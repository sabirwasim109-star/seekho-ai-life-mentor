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
  TrendingUp,
  Lightbulb,
  Zap,
  Check,
  MessageSquare
} from 'lucide-react';
import { Course, Language, UserProfile, QuizQuestion } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';
import { AudioReaderButton, VoiceInputButton } from './AudioSpeechControls';
import { stopSpeaking } from '../utils/speech';

interface CourseModalProps {
  course: Course;
  language: Language;
  userProfile: UserProfile;
  onClose: () => void;
  onCompleteCourse: (courseId: string, points: number) => void;
  onCompleteLesson?: (lessonId: string, courseId: string) => void;
  initialStep?: 'detail' | 'lesson' | 'quiz' | 'practice';
  initialLessonId?: string;
  onOpenSkillPathway?: (skillId?: string, categoryKey?: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  language,
  userProfile,
  onClose,
  onCompleteCourse,
  onCompleteLesson,
  initialStep = 'detail',
  initialLessonId,
  onOpenSkillPathway,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [activeStep, setActiveStep] = useState<'detail' | 'lesson' | 'quiz' | 'practice' | 'project' | 'completion'>(initialStep);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(() => {
    if (initialLessonId) {
      const idx = course.lessons.findIndex((l) => l.id === initialLessonId);
      if (idx !== -1) return idx;
    }
    const firstIncompleteIdx = course.lessons.findIndex(
      (l) => !(userProfile.completedLessonIds || []).includes(l.id)
    );
    return firstIncompleteIdx !== -1 ? firstIncompleteIdx : 0;
  });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(userProfile.completedLessonIds || []);

  // Quiz state: keyed by question ID or index for instant interactivity
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedQuizIds, setSubmittedQuizIds] = useState<Record<string, boolean>>({});

  // Practical Task State
  const [taskReflection, setTaskReflection] = useState('');
  const [taskFileUploaded, setTaskFileUploaded] = useState(false);
  const [taskSubmitted, setTaskSubmitted] = useState(false);

  // Reflection and exercise persistence with localStorage
  const [lessonReflections, setLessonReflections] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(`seekho_reflections_${course.id}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [savedReflections, setSavedReflections] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`seekho_saved_reflections_${course.id}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [tryItCompleted, setTryItCompleted] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`seekho_tryit_${course.id}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const currentLesson = course.lessons[currentLessonIndex] || course.lessons[0];
  const activeQuiz = (currentLesson && currentLesson.quiz && currentLesson.quiz.length > 0) ? currentLesson.quiz : course.quiz;
  const activeTask = (currentLesson && currentLesson.practicalTask) ? currentLesson.practicalTask : course.practicalTask;
  const ArrowIcon = language === 'ur' ? ArrowLeft : ArrowRight;

  const currentReflectionText = lessonReflections[currentLesson.id] || '';
  const isCurrentReflectionSaved = savedReflections[currentLesson.id] || false;
  const isTryItDone = tryItCompleted[currentLesson.id] || false;

  const handleSaveReflection = () => {
    if (!currentReflectionText.trim()) return;
    const updated = { ...savedReflections, [currentLesson.id]: true };
    setSavedReflections(updated);
    try {
      localStorage.setItem(`seekho_saved_reflections_${course.id}`, JSON.stringify(updated));
      localStorage.setItem(`seekho_reflections_${course.id}`, JSON.stringify(lessonReflections));
    } catch (e) {
      console.warn('Failed to save reflection to localStorage', e);
    }
  };

  const handleUpdateReflectionText = (text: string) => {
    const updated = { ...lessonReflections, [currentLesson.id]: text };
    setLessonReflections(updated);
    try {
      localStorage.setItem(`seekho_reflections_${course.id}`, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to update reflection text in localStorage', e);
    }
  };

  const handleToggleTryIt = () => {
    const updated = { ...tryItCompleted, [currentLesson.id]: !tryItCompleted[currentLesson.id] };
    setTryItCompleted(updated);
    try {
      localStorage.setItem(`seekho_tryit_${course.id}`, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save tryIt to localStorage', e);
    }
  };

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
      if (onCompleteLesson) {
        onCompleteLesson(currentLesson.id, course.id);
      }
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
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 pt-10 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
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

            <div className="flex items-center gap-2">
              <AudioReaderButton
                id={`course-header-tts-${course.id}-${activeStep}-${currentLessonIndex}`}
                text={
                  activeStep === 'lesson'
                    ? `${language === 'ur' ? currentLesson.titleUrdu : currentLesson.titleEn}. ${language === 'ur' ? currentLesson.contentUrdu : currentLesson.contentEn}. ${language === 'ur' ? 'اہم نکات:' : 'Key takeaways:'} ${(language === 'ur' ? currentLesson.keyTakeawaysUrdu || [] : currentLesson.keyTakeawaysEn || []).join('. ')}`
                    : activeStep === 'quiz'
                    ? `${language === 'ur' ? 'جامع کوئز:' : 'Comprehension Quiz:'} ${(activeQuiz || []).map((q, idx) => `${idx + 1}. ${language === 'ur' ? q.questionUrdu : q.questionEn}`).join('. ')}`
                    : activeStep === 'practice'
                    ? `${language === 'ur' ? activeTask.titleUrdu : activeTask.titleEn}. ${language === 'ur' ? activeTask.instructionsUrdu : activeTask.instructionsEn}. ${language === 'ur' ? 'مطلوبہ نتیجہ:' : 'Deliverable:'} ${language === 'ur' ? activeTask.deliverableUrdu : activeTask.deliverableEn}`
                    : `${language === 'ur' ? course.titleUrdu : course.titleEn}. ${language === 'ur' ? course.descriptionUrdu : course.descriptionEn}. ${(language === 'ur' ? course.whatYouWillLearnUrdu || [] : course.whatYouWillLearnEn || []).join('. ')}`
                }
                language={language}
                variant="header"
                size="md"
                showLabel={true}
                labelUr="پڑھ کے سنائیں"
                labelEn="Listen"
              />

              <button
                id="close-course-modal-btn"
                onClick={() => {
                  stopSpeaking();
                  onClose();
                }}
                className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
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

          {/* STEP 1: LESSON PAGE — 8-STEP PRACTICAL LEARNING EXPERIENCE */}
          {activeStep === 'lesson' && (
            <div className="space-y-6 font-arabic">
              
              {/* 1. LESSON HEADER (Goal, Skill, Stage, Time, Audio) */}
              <div className="bg-slate-50/90 rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Goal / Category */}
                    <span className="px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-950 font-bold text-xs">
                      🎯 {language === 'ur' ? course.categoryUrdu : course.category}
                    </span>
                    {/* Stage / Level */}
                    <span className="px-3 py-1 rounded-full bg-indigo-100/90 text-indigo-950 font-bold text-xs">
                      {language === 'ur' ? `مرحلہ: ${course.difficultyUrdu || 'ابتدائی'}` : `Stage: ${course.difficulty}`}
                    </span>
                    {/* Lesson Counter */}
                    <span className="px-3 py-1 rounded-full bg-slate-200/90 text-slate-800 font-bold text-xs">
                      {language === 'ur' ? `سبق ${currentLessonIndex + 1} از ${totalLessons}` : `Lesson ${currentLessonIndex + 1} of ${totalLessons}`}
                    </span>
                    {/* Estimated Time */}
                    <span className="px-3 py-1 rounded-full bg-amber-100/90 text-amber-950 font-bold text-xs flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {currentLesson.durationMinutes || 10} {language === 'ur' ? 'منٹ' : 'mins'}
                    </span>
                  </div>

                  {/* Audio Reciter Button */}
                  <AudioReaderButton
                    id={`course-lesson-tts-${currentLesson.id}`}
                    text={`${language === 'ur' ? currentLesson.titleUrdu : currentLesson.titleEn}. ${language === 'ur' ? currentLesson.contentUrdu : currentLesson.contentEn}. ${language === 'ur' ? 'سبق کے ۳ اہم نکات:' : '3 Key Takeaways:'} ${(language === 'ur' ? currentLesson.keyTakeawaysUrdu || [] : currentLesson.keyTakeawaysEn || []).join('. ')}`}
                    language={language}
                    variant="pill"
                    size="sm"
                    labelUr="سبق سنیں (Audio)"
                    labelEn="Listen Lesson"
                  />
                </div>

                {/* Lesson Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-snug">
                    {language === 'ur' ? currentLesson.titleUrdu : currentLesson.titleEn}
                  </h3>
                </div>
              </div>

              {/* 2. LEARN (سمجھیں — آسان اور واضح الفاظ میں) */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    ۱
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900">
                    {language === 'ur' ? 'سمجھیں (بنیادی تصور):' : 'Understand (Core Concept):'}
                  </h4>
                </div>

                <div className="text-[17.5px] sm:text-[18.5px] leading-[1.85] text-slate-800 whitespace-pre-line">
                  {language === 'ur' ? currentLesson.contentUrdu : currentLesson.contentEn}
                </div>

                {/* 3 Key Takeaways */}
                <div className="bg-emerald-50/80 rounded-2xl p-4 sm:p-5 border border-emerald-200 space-y-2 mt-4">
                  <h5 className="text-base sm:text-lg font-black text-emerald-950 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span>{language === 'ur' ? 'سبق کے ۳ اہم نکات:' : '3 Key Learning Takeaways:'}</span>
                  </h5>
                  <ul className="space-y-2 pt-1">
                    {(language === 'ur' ? currentLesson.keyTakeawaysUrdu : currentLesson.keyTakeawaysEn).map((takeaway, i) => (
                      <li key={i} className="text-[16px] sm:text-[17px] leading-relaxed text-emerald-950 flex items-start gap-2.5">
                        <span className="text-emerald-700 font-bold mt-1 text-base">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. EXAMPLE (عملی مثال — روزمرہ زندگی سے) */}
              <div className="bg-amber-50/70 rounded-3xl p-5 sm:p-6 border border-amber-200/90 shadow-xs space-y-3">
                <div className="flex items-center gap-2 border-b border-amber-200/60 pb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-bold text-sm">
                    ۲
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-amber-950 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-700 shrink-0" />
                    <span>{language === 'ur' ? 'روزمرہ زندگی سے عملی مثال:' : 'Real-life Relatable Example:'}</span>
                  </h4>
                </div>

                <div className="text-[16.5px] sm:text-[17.5px] leading-[1.8] text-amber-950">
                  {language === 'ur' ? (
                    <p>
                      مثال کے طور پر: جب کوئی دکاندار، طالب علم یا ملازم اپنے کام میں منظم طریقہ کار یا نئی ٹیکنالوجی کو اپناتا ہے تو اس کا آدھا وقت بچ جاتا ہے اور کام میں غلطی کا امکان کم ہو جاتا ہے۔ جب آپ اس ہنر کو روزانہ 10 منٹ دیتے ہیں تو ایک ماہ میں آپ خود کو دوسروں سے کہیں آگے پائیں گے۔
                    </p>
                  ) : (
                    <p>
                      For instance: When a shopkeeper, student, or professional adopts a structured method or helpful tool, they save half their time and prevent errors. Practicing 10 minutes daily creates compound mastery in one month.
                    </p>
                  )}
                </div>
              </div>

              {/* 4. TRY IT (ابھی خود آزمائیں — چھوٹی سرگرمی) */}
              <div className="bg-indigo-50/80 rounded-3xl p-5 sm:p-6 border border-indigo-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 border-b border-indigo-200/60 pb-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-200 text-indigo-900 flex items-center justify-center font-bold text-sm">
                    ۳
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-indigo-950 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-indigo-700 shrink-0" />
                    <span>{language === 'ur' ? 'ابھی خود آزمائیں (Quick Activity):' : 'Try It Right Now (Quick Activity):'}</span>
                  </h4>
                </div>

                <p className="text-[16.5px] sm:text-[17.5px] text-indigo-950 leading-relaxed">
                  {language === 'ur' 
                    ? 'اس تصور کو اپنے ذہن میں ایک سیکنڈ کے لیے دہرائیں یا اپنے فون/کاپی پر ایک مختصر جملہ لکھیں کہ آپ اسے آج کہاں استعمال کریں گے:'
                    : 'Pause for a moment and identify one place in your routine where you can apply this concept today:'}
                </p>

                <div className="pt-2">
                  <button
                    id="btn-toggle-try-it"
                    type="button"
                    onClick={handleToggleTryIt}
                    className={`min-h-[48px] px-5 py-2.5 rounded-2xl border text-sm sm:text-base font-bold transition flex items-center gap-2.5 ${
                      isTryItDone
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                        : 'bg-white hover:bg-indigo-100/60 border-indigo-300 text-indigo-950'
                    }`}
                  >
                    <CheckCircle2 className={`w-5 h-5 ${isTryItDone ? 'text-white' : 'text-indigo-600'}`} />
                    <span>
                      {isTryItDone
                        ? (language === 'ur' ? 'شاباش! آپ نے یہ سرگرمی کامیابی سے آزما لی ✓' : 'Completed! You tried this activity ✓')
                        : (language === 'ur' ? 'میں نے یہ خود سوچ / آزما لیا ہے (Done)' : 'I have tried / practiced this')}
                    </span>
                  </button>
                </div>
              </div>

              {/* 5. QUICK CHECK (فہم کی فوری جانچ — ۲ سے ۵ سوالات) */}
              {activeQuiz && activeQuiz.length > 0 && (
                <div className="bg-amber-50/80 rounded-3xl p-5 sm:p-6 border border-amber-200 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-bold text-sm">
                        ۴
                      </div>
                      <h4 className="text-lg sm:text-xl font-black text-amber-950 flex items-center gap-2">
                        <HelpCircle className="w-5 h-5 text-amber-700 shrink-0" />
                        <span>{language === 'ur' ? `فہم کی فوری جانچ (${activeQuiz.length} سوالات)` : `Quick Check (${activeQuiz.length} Questions)`}</span>
                      </h4>
                    </div>
                    <span className="text-xs sm:text-sm text-amber-900 font-bold">
                      {language === 'ur' ? 'صحیح آپشن منتخب کریں' : 'Choose the best option'}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {activeQuiz.map((q, qIdx) => {
                      const isAnswered = selectedAnswers[q.id] !== undefined;
                      const isSubmitted = submittedQuizIds[q.id];
                      const isCorrect = selectedAnswers[q.id] === q.correctIndex;
                      const options = language === 'ur' ? q.optionsUrdu : q.optionsEn;

                      return (
                        <div key={q.id} className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200 space-y-3 shadow-xs">
                          <p className="text-[17px] sm:text-[18px] font-black text-slate-950 flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center font-black shrink-0 mt-0.5">
                              {qIdx + 1}
                            </span>
                            <span className="leading-snug">{language === 'ur' ? q.questionUrdu : q.questionEn}</span>
                          </p>

                          <div className="space-y-2 pt-1">
                            {options.map((opt, optIdx) => {
                              const isOptionSelected = selectedAnswers[q.id] === optIdx;
                              let btnCls = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';
                              if (isOptionSelected) {
                                if (isSubmitted) {
                                  btnCls = isCorrect ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20' : 'bg-rose-100 border-rose-500 text-rose-950 font-bold ring-2 ring-rose-500/20';
                                } else {
                                  btnCls = 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold ring-2 ring-emerald-500/20';
                                }
                              } else if (isSubmitted && optIdx === q.correctIndex) {
                                btnCls = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectQuizOption(q.id, optIdx)}
                                  className={`w-full text-start p-3.5 min-h-[48px] rounded-xl border text-[16px] sm:text-[17px] transition flex items-center justify-between gap-3 font-arabic ${btnCls}`}
                                >
                                  <span className="leading-relaxed">{opt}</span>
                                  {isOptionSelected && (
                                    <span className="text-sm font-bold text-emerald-700 shrink-0">✓</span>
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {isSubmitted && (
                            <div className={`p-3.5 rounded-xl text-[15px] sm:text-[16px] font-arabic ${isCorrect ? 'bg-emerald-50 text-emerald-950 border border-emerald-200' : 'bg-rose-50 text-rose-950 border border-rose-200'}`}>
                              <p className="font-bold">{isCorrect ? (language === 'ur' ? 'ماشاءاللہ، درست جواب! ✓' : 'Correct! ✓') : (language === 'ur' ? 'جواب درست نہیں ہے — صحیح جواب دیکھیں' : 'Incorrect — Review the correct answer')}</p>
                              <p className="mt-1 leading-relaxed">{language === 'ur' ? q.explanationUrdu : q.explanationEn}</p>
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
                      className="urdu-btn w-full min-h-[48px] py-3 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold text-[17px] rounded-2xl shadow-xs transition font-arabic"
                    >
                      {language === 'ur' ? 'کوئز کے جوابات چیک کریں' : 'Check Answers'}
                    </button>
                  )}
                </div>
              )}

              {/* 6. PRACTICAL ACTION (عملی کام — روزمرہ دنیا میں ایک ٹاسک) */}
              {activeTask && (
                <div className="bg-sky-50/80 rounded-3xl p-5 sm:p-6 border border-sky-200 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between border-b border-sky-200/60 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-sky-200 text-sky-900 flex items-center justify-center font-bold text-sm">
                        ۵
                      </div>
                      <h4 className="text-lg sm:text-xl font-black text-sky-950 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-sky-700 shrink-0" />
                        <span>{language === 'ur' ? 'آج کا عملی کام (Practical Real-world Action):' : 'Today\'s Practical Action:'}</span>
                      </h4>
                    </div>
                    <span className="text-xs sm:text-sm text-sky-900 font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {activeTask.estimatedMinutes} {language === 'ur' ? 'منٹ' : 'mins'}
                    </span>
                  </div>

                  <div className="space-y-3 text-[16.5px] sm:text-[17.5px] leading-relaxed text-slate-800">
                    <div className="bg-white p-4 rounded-2xl border border-sky-200 space-y-2">
                      <p className="font-black text-sky-950">
                        {language === 'ur' ? activeTask.titleUrdu : activeTask.titleEn}
                      </p>
                      <p className="text-slate-700">
                        {language === 'ur' ? activeTask.instructionsUrdu : activeTask.instructionsEn}
                      </p>
                    </div>

                    <div className="p-3.5 bg-sky-100/70 rounded-xl border border-sky-300/80 text-[15px] sm:text-[16px] text-sky-950">
                      <strong>{language === 'ur' ? 'مطلوبہ نتیجہ (Deliverable):' : 'Deliverable:'}</strong>{' '}
                      {language === 'ur' ? activeTask.deliverableUrdu : activeTask.deliverableEn}
                    </div>
                  </div>
                </div>
              )}

              {/* 7. REFLECTION (غور و فکر اور ذاتی تاثر) */}
              <div className="bg-teal-50/80 rounded-3xl p-5 sm:p-6 border border-teal-200 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 border-b border-teal-200/60 pb-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-200 text-teal-900 flex items-center justify-center font-bold text-sm">
                    ۶
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-teal-950 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-teal-700 shrink-0" />
                    <span>{language === 'ur' ? 'غور و فکر اور ذاتی تاثر (Reflection):' : 'Personal Reflection:'}</span>
                  </h4>
                </div>

                <p className="text-[16.5px] sm:text-[17.5px] text-teal-950 leading-relaxed">
                  {language === 'ur'
                    ? 'اس سبق سے آپ نے سب سے اہم بات کیا سیکھی؟ آپ اسے اپنی زندگی یا کام میں کیسے لاگو کریں گے؟'
                    : 'What is the most meaningful insight you learned from this lesson, and how will you apply it?'}
                </p>

                <div className="space-y-2">
                  <div className="relative">
                    <textarea
                      id="lesson-reflection-input"
                      value={currentReflectionText}
                      onChange={(e) => {
                        const val = e.target.value;
                        handleUpdateReflectionText(val);
                        if (savedReflections[currentLesson.id]) {
                          setSavedReflections(prev => ({ ...prev, [currentLesson.id]: false }));
                        }
                      }}
                      placeholder={language === 'ur' ? 'اپنا جواب یا اہم تاثر یہاں لکھیں یا مائیک سے بولیں (اختیاری)...' : 'Write your takeaway here or speak via mic (optional)...'}
                      rows={2}
                      className="w-full p-3.5 pe-12 rounded-2xl border border-teal-300 bg-white text-[16px] text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                    <div className="absolute top-2.5 end-2.5">
                      <VoiceInputButton
                        language={language}
                        size="sm"
                        tooltipUr="بول کر تاثر لکھیں"
                        tooltipEn="Speak reflection"
                        onTranscript={(text) => {
                          const newText = currentReflectionText ? `${currentReflectionText} ${text}` : text;
                          handleUpdateReflectionText(newText);
                          if (savedReflections[currentLesson.id]) {
                            setSavedReflections(prev => ({ ...prev, [currentLesson.id]: false }));
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      id="save-reflection-btn"
                      type="button"
                      onClick={handleSaveReflection}
                      disabled={!currentReflectionText.trim()}
                      className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-1.5 ${
                        isCurrentReflectionSaved
                          ? 'bg-emerald-700 text-white'
                          : 'bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      <span>{isCurrentReflectionSaved ? (language === 'ur' ? 'تاثر محفوظ ہو گیا ✓' : 'Saved ✓') : (language === 'ur' ? 'تاثر محفوظ کریں' : 'Save Reflection')}</span>
                    </button>
                    <span className="text-xs text-teal-800">
                      {language === 'ur' ? '+10 بونس پوائنٹس' : '+10 bonus pts'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 8. COMPLETE (سبق مکمل کریں اور اگلا مرحلہ) */}
              <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 space-y-4 shadow-lg">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-white">
                      {language === 'ur' ? '۷. سبق کی تکمیل اور پیشرفت' : '7. Lesson Completion'}
                    </h4>
                    <p className="text-sm text-emerald-300 font-bold">
                      {language === 'ur' ? 'سبق مکمل کر کے +20 پوائنٹس حاصل کریں' : 'Complete lesson & earn +20 points'}
                    </p>
                  </div>

                  <div className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full font-bold">
                    {completedLessonsCount} / {totalLessons} {language === 'ur' ? 'مکمل' : 'Done'}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setActiveStep('detail')}
                      className="min-h-[48px] px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[15px] font-bold"
                    >
                      {language === 'ur' ? 'کورس فہرست' : 'Overview'}
                    </button>

                    {currentLessonIndex > 0 && (
                      <button
                        onClick={() => setCurrentLessonIndex(prev => prev - 1)}
                        className="min-h-[48px] px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[15px] font-bold"
                      >
                        {language === 'ur' ? 'پچھلا سبق' : 'Prev'}
                      </button>
                    )}
                  </div>

                  {/* Direct "سبق مکمل کریں" Button */}
                  <button
                    id="mark-lesson-complete-btn"
                    onClick={handleMarkLessonComplete}
                    className="urdu-btn w-full sm:w-auto min-h-[52px] px-7 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-[17px] font-black flex items-center justify-center gap-2 shadow-lg transition"
                  >
                    <CheckCircle2 className="w-5 h-5 text-slate-950" />
                    <span>
                      {currentLessonIndex < course.lessons.length - 1
                        ? (language === 'ur' ? 'سبق مکمل کریں (اگلا سبق)' : 'Complete Lesson & Next')
                        : (language === 'ur' ? 'سبق مکمل کریں (کورس مکمل)' : 'Complete Lesson (Finish Course)')}
                    </span>
                    <ArrowIcon className="w-5 h-5 text-slate-950" />
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: QUIZ TAB */}
          {activeStep === 'quiz' && (
            <div className="space-y-5 font-arabic">
              <div>
                <h3 className="text-lg sm:text-2xl font-black text-slate-900">
                  {language === 'ur' ? 'اسباق کا جامع کوئز' : 'Course Comprehension Quiz'}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-slate-600 mt-1">
                  {language === 'ur' ? 'صحیح جواب منتخب کریں تاکہ تصدیق ہو سکے کہ آپ نے تمام نکات کو سمجھ لیا ہے۔' : 'Select the correct option to verify your understanding.'}
                </p>
              </div>

              {activeQuiz.map((q, qIdx) => {
                const isSubmitted = submittedQuizIds[q.id];
                const isCorrect = selectedAnswers[q.id] === q.correctIndex;
                const options = language === 'ur' ? q.optionsUrdu : q.optionsEn;

                return (
                  <div key={q.id} className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 space-y-4">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                        {qIdx + 1}
                      </span>
                      <span className="leading-snug">{language === 'ur' ? q.questionUrdu : q.questionEn}</span>
                    </h4>

                    <div className="space-y-2.5">
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
                            className={`w-full text-start p-3.5 min-h-[48px] rounded-xl border text-[15px] sm:text-[16px] transition flex items-center justify-between gap-3 ${btnStyle}`}
                          >
                            <span className="leading-relaxed">{opt}</span>
                            {selectedAnswers[q.id] === optIdx && (
                              <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0">
                                ✓
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {isSubmitted && (
                      <div className={`p-4 rounded-xl text-[14px] sm:text-[15px] ${isCorrect ? 'bg-emerald-100 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'}`}>
                        <p className="font-bold mb-1">
                          {isCorrect 
                            ? (language === 'ur' ? 'ماشاءاللہ! بالکل درست جواب ہے۔' : 'Correct!') 
                            : (language === 'ur' ? 'یہ جواب درست نہیں ہے۔' : 'Not quite right.')}
                        </p>
                        <p className="leading-relaxed">{language === 'ur' ? q.explanationUrdu : q.explanationEn}</p>
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
                  <div className="relative">
                    <textarea
                      id="task-reflection-input"
                      rows={4}
                      value={taskReflection}
                      onChange={(e) => setTaskReflection(e.target.value)}
                      required
                      placeholder={language === 'ur' ? 'مثال کے طور پر: میں نے AI سے اپنے کام کے لیے سوالات پوچھے... (یہاں لکھیں یا مائیک سے بولیں)' : 'e.g., I used the skill in daily routine... (type or speak via mic)'}
                      className="w-full bg-white p-3 pe-12 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                    />
                    <div className="absolute top-2.5 end-2.5">
                      <VoiceInputButton
                        language={language}
                        size="sm"
                        tooltipUr="بول کر عملی خلاصہ لکھیں"
                        tooltipEn="Speak practical summary"
                        onTranscript={(text) => {
                          setTaskReflection((prev) => (prev ? `${prev} ${text}` : text));
                        }}
                      />
                    </div>
                  </div>
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
