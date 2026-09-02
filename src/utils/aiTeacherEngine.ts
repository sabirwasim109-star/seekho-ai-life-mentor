import { ChatMessage, Course, Language, Lesson, UserProfile, MentorChallenge, DecisionScenario, DecisionOption } from '../types';
import { getSmartRecommendations, calculateGrowthScores, GROWTH_AREAS_META } from './growthEngine';
import { ISLAMIC_LESSONS_DATA } from '../data/islamicGuidanceData';
import { MENTOR_CHALLENGES, getRecommendedChallengesForUser } from '../data/mentorChallengesData';
import { COURSES_DATA } from '../data/mockData';
import { DECISION_SCENARIOS_DATA, getScenarioByCategory } from '../data/decisionScenariosData';
import { GOOD_DEEDS_DATA, getRecommendedGoodDeed } from '../data/goodDeedsData';
import { generateAdaptiveMentorInsight } from './adaptiveMentorEngine';
import { getPersonalizedMission, getSimplerMissionAlternative } from './realLifeMissionEngine';
import { generateDailySmartJourney } from './dailySmartJourneyEngine';
import { getPersonalizedDiscoverRecommendations } from './discoverEngine';
import { KNOWLEDGE_LIBRARY_ITEMS, searchKnowledgeLibraryWithIntents } from '../data/knowledgeLibraryData';
import { RealLifeMissionType } from '../types';

export interface AITeacherContext {
  message: string;
  userProfile?: UserProfile;
  language?: Language;
  currentCourse?: Course | null;
  currentLesson?: Lesson | null;
  chatHistory?: ChatMessage[];
}

/**
 * Highly personalized, authentic AI Life-and-Learning Mentor for Seekho (استاد سیکھو).
 * Intelligently connects:
 * 1. Learning progress & courses
 * 2. Skills and difficulty levels
 * 3. Character development & Islamic virtue levels
 * 4. Authentic Quran & Hadith guidance (with explicit references)
 * 5. Practical life & livelihood challenges
 * 6. Career and work goals
 * 7. Family and community contribution
 * 8. Daily available learning time (15m, 30m, 1h, 2h+)
 * 9. Quiz & practical-task performance
 * 10. Previous conversations & completed activities
 */
export function generateAITeacherResponse(context: AITeacherContext): {
  reply: string;
  suggestions: string[];
} {
  const {
    message,
    userProfile,
    language = 'ur',
    currentCourse,
    currentLesson,
    chatHistory = [],
  } = context;

  const q = (message || '').trim().toLowerCase();
  const isUrdu = language === 'ur';

  // ---------------------------------------------------------------------------
  // Learner Context Extraction
  // ---------------------------------------------------------------------------
  const name = userProfile?.name || (isUrdu ? 'پیارے ساتھی' : 'Learner');
  const ageGroup = userProfile?.ageGroup || '16-25';
  const occupation = userProfile?.assessmentData?.currentOccupation || userProfile?.role || userProfile?.currentOccupation || (isUrdu ? 'طالب علم / ملازم' : 'Learner');
  const education = userProfile?.assessmentData?.educationLevel || userProfile?.educationLevel || (isUrdu ? 'بنیادی تعلیم' : 'General');
  const timePerDay = userProfile?.growthDailyTimePreference || userProfile?.timePerDay || '15m';

  // Time estimate text
  let timeLabelUrdu = '۱۵ منٹ';
  let timeLabelEn = '15 minutes';
  if (timePerDay === '30m') {
    timeLabelUrdu = '۳۰ منٹ';
    timeLabelEn = '30 minutes';
  } else if (timePerDay === '1h') {
    timeLabelUrdu = '۱ گھنٹہ';
    timeLabelEn = '1 hour';
  } else if (timePerDay === '2h+') {
    timeLabelUrdu = '۱ سے ۲ گھنٹے';
    timeLabelEn = '1 to 2 hours';
  }

  // Active Islamic Lesson context
  const completedIslamicCount = userProfile?.completedIslamicLessonIds?.length || 0;
  const currentIslamicIndex = Math.min(completedIslamicCount, ISLAMIC_LESSONS_DATA.length - 1);
  const activeIslamicLesson = ISLAMIC_LESSONS_DATA[currentIslamicIndex] || ISLAMIC_LESSONS_DATA[0];

  // Active Course context
  const activeCourse = currentCourse || (userProfile?.enrolledCourseIds && userProfile.enrolledCourseIds.length > 0 
    ? COURSES_DATA.find(c => c.id === userProfile.enrolledCourseIds[0]) || COURSES_DATA[0]
    : COURSES_DATA[0]);

  const courseTitle = isUrdu ? activeCourse.titleUrdu : activeCourse.titleEn;
  const skillDifficulty = isUrdu ? activeCourse.difficultyUrdu : activeCourse.difficulty;

  // Age-specific salutation and tone modifier
  const isElder = ageGroup === '61-70' || ageGroup === '70+' || ageGroup === '46-60';
  const isYouth = ageGroup === '10-15';
  const isYoungAdult = ageGroup === '16-25';

  const elderHonorific = isUrdu ? `محترم بزرگوار ${name}` : `Respected Elder ${name}`;
  const youthHonorific = isUrdu ? `پیارے بچے ${name}` : `Dear Student ${name}`;
  const standardHonorific = isUrdu ? `محترم ${name}` : `Dear ${name}`;

  const salutation = isElder
    ? elderHonorific
    : isYouth
    ? youthHonorific
    : standardHonorific;

  // ---------------------------------------------------------------------------
  // 0. CRITICAL SAFETY & EMERGENCY SUPPORT
  // ---------------------------------------------------------------------------
  const criticalSafetyPatterns = [
    'خودکشی',
    'جان لینا',
    'مار دینا',
    'مر جانا چاہتا ہوں',
    'زندگی ختم',
    'suicide',
    'kill myself',
    'end my life',
    'harm someone'
  ];

  if (criticalSafetyPatterns.some(p => q.includes(p))) {
    if (isUrdu) {
      return {
        reply: `🛑 **محترم ${salutation}! آپ کی زندگی اور ہر انسانی جان بے حد قیمتی ہے۔**

پہلے ایک گہرا سانس لیں اور بالکل پرسکون ہو جائیں۔ آپ اکیلے نہیں ہیں۔ مشکلات کتنی ہی بڑی کیوں نہ ہوں، وہ مستقل نہیں ہوتیں اور ہر رات کے بعد صبح ضرور طلوع ہوتی ہے۔

🤝 **فوری حفاظتی قدم:**
1. **پہلے محفوظ جگہ پر آئیں:** اس وقت کسی بھی نقصان دہ چیز سے دور ہٹیں اور ایک گلاس ٹھنڈا پانی پئیں۔
2. **کسی اپنے سے بات کریں:** ابھی اپنے والدین، کسی قابلِ اعتماد بزرگ، قریبی دوست یا استاد سے اپنے دل کا بوجھ بانٹیں۔
3. **ہنگامی مدد حاصل کریں:** اگر فوری خطرہ محسوس ہو تو قریبی طبی مرکز یا ہنگامی مدد سے رابطہ کریں۔

📖 **قرآن مجید [ماخذ: قرآن]:**
"اور اپنے آپ کو قتل نہ کرو، بے شک اللہ تم پر نہایت مہربان ہے۔" (سورۃ النساء: آیت ۲۹)

🎯 **آج کا ایک عمل:**
ابھی کسی مخلص شخص یا والدین کے پاس جائیں اور ان کے ساتھ چند منٹ خاموشی سے بیٹھیں۔ گفتگو کرنے سے انسان ہلکا ہو جاتا ہے۔`,
        suggestions: [
          'میں پرسکون ہوں، مجھے اچھا مشورہ دیں',
          'والدین سے بات کیسے کروں؟',
          'میرا اگلا قدم کیا ہے؟'
        ]
      };
    } else {
      return {
        reply: `🛑 **Dear ${salutation}, your life and well-being are profoundly precious.**

Please take a deep breath. You are not alone. No matter how heavy a hardship feels right now, hardships are temporary, and relief follows difficulty.

🤝 **Immediate Safe Actions:**
1. **Separate from danger:** Step away from any harmful situation, drink a glass of water, and sit down.
2. **Reach out to a trusted person:** Speak with a parent, trusted family elder, close friend, or mentor right away.
3. **Seek emergency support:** If you feel immediate danger, please reach out to trusted local emergency services or health professionals.

📖 **Holy Quran [Source: Quran]:**
"And do not kill yourselves. Indeed, Allah is to you ever Merciful." (Surah An-Nisa: 29)

🎯 **One Practical Action:**
Go right now to your parents or a trusted loved one and spend a few quiet moments with them. Sharing your burden brings immediate ease.`,
        suggestions: [
          'I am feeling calmer now, guide me',
          'How to talk to my parents?',
          'What is my next step?'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // 0.1 OPTION EVALUATION WITH DETAILED CONSEQUENCE MAP ("اگر میں یہ کروں تو...")
  // ---------------------------------------------------------------------------
  // Check if the user is choosing Option A / Option B or clicking a decision option
  for (const scenario of DECISION_SCENARIOS_DATA) {
    for (const opt of scenario.options) {
      const matchUrdu = q.includes(opt.labelUrdu.toLowerCase()) || (q.includes(opt.id.toLowerCase())) || (q.includes(opt.textUrdu.slice(0, 15).toLowerCase()));
      const matchEn = q.includes(opt.labelEn.toLowerCase()) || (q.includes(opt.textEn.slice(0, 15).toLowerCase()));

      if (matchUrdu || matchEn) {
        const cMap = opt.consequenceMap;
        if (isUrdu) {
          return {
            reply: `🧠 **آپ کا جائزہ شدہ راستہ:** "${opt.labelUrdu}"

⚖️ **نتائج کا نقشہ (Consequence Map) — "اگر میں یہ کروں تو...":**

• ⚡ **فوری اثر:** ${cMap.immediateEffectUrdu}
• ⏳ **قلیل مدتی اثر:** ${cMap.shortTermEffectUrdu}
• 🔮 **طویل مدتی اثر:** ${cMap.longTermEffectUrdu}
• 👨‍👩‍👧 **خاندان پر اثر:** ${cMap.familyEffectUrdu}
• 🏘️ **معاشرے پر اثر:** ${cMap.societyEffectUrdu}
• 💎 **میرے کردار پر اثر:** ${cMap.characterEffectUrdu}
• 📖 **اسلامی و اخلاقی پہلو:** ${cMap.islamicEthicalConsiderationUrdu}

---
💡 **اخلاقی سبق (کیوں؟):**
${opt.moralLessonUrdu}

🎯 **آج کا ایک عملی قدم:**
${opt.practicalActionUrdu}

📜 **مستند رہنمائی [ماخذ: ${opt.sourceLabelUrdu}]:**
${opt.islamicReferenceUrdu}

⭐ **اگلا قدم:**
کیا آپ اس فیصلے کی روشنی میں اپنے لیے ایک ۵ منٹ کا مثبت چیلنج منتخب کرنا چاہتے ہیں؟`,
            suggestions: [
              opt.isConstructive ? 'ماشاءاللہ! میں یہی مثبت راستہ چنتا ہوں' : 'مجھے دوسرا بہتر متبادل راستہ دکھائیں',
              'آج کا کردار سازی کا چیلنج',
              'میرا اگلا قدم کیا ہے؟'
            ]
          };
        } else {
          return {
            reply: `🧠 **Evaluated Choice:** "${opt.labelEn}"

⚖️ **Consequence Map — "If I choose this path...":**

• ⚡ **Immediate Effect:** ${cMap.immediateEffectEn}
• ⏳ **Short-term Effect:** ${cMap.shortTermEffectEn}
• 🔮 **Long-term Effect:** ${cMap.longTermEffectEn}
• 👨‍👩‍👧 **Effect on Family:** ${cMap.familyEffectEn}
• 🏘️ **Effect on Society:** ${cMap.societyEffectEn}
• 💎 **Effect on My Character:** ${cMap.characterEffectEn}
• 📖 **Ethical / Islamic Consideration:** ${cMap.islamicEthicalConsiderationEn}

---
💡 **Moral Lesson (The "Why"):**
${opt.moralLessonEn}

🎯 **One Practical Action Right Now:**
${opt.practicalActionEn}

📜 **Verified Reference [Source: ${opt.sourceLabelEn}]:**
${opt.islamicReferenceEn}

⭐ **Next Step:**
Would you like to adopt this positive choice and undertake today’s 5-minute character challenge?`,
            suggestions: [
              opt.isConstructive ? 'I choose this constructive path' : 'Show me the better constructive alternative',
              'Show Character Challenge',
              'What should I do next?'
            ]
          };
        }
      }
    }
  }

  // ---------------------------------------------------------------------------
  // 0.14 DAILY SMART JOURNEY (میرا آج کا سفر)
  // ---------------------------------------------------------------------------
  const isJourneyQuery = 
    q.includes('آج کا سفر') ||
    q.includes('میرا آج کا سفر') ||
    q.includes('daily journey') ||
    q.includes('smart journey') ||
    q.includes('روزانہ سفر') ||
    q.includes('کتنا وقت');

  if (isJourneyQuery && userProfile) {
    const journey = generateDailySmartJourney(userProfile, '20m');

    if (isUrdu) {
      return {
        reply: `🌟 **میرا آج کا سفر (Daily Smart Journey)**
⏱️ متوقع وقت: ${journey.totalEstimatedMinutes} منٹ | ⭐ انعام: +${journey.totalPoints} پوائنٹس

آج کا سفر آپ کے لیے ۵ متوازن مراحل پر ترتیب دیا گیا ہے:

۱. 📖 **سیکھیں:** ${journey.learnStep.lessonTitleUrdu} (${journey.learnStep.courseTitleUrdu})
💡 *بنیادی نکتہ:* ${journey.learnStep.keyConceptUrdu}

۲. 🛠️ **مشق کریں:** ${journey.practiceStep.titleUrdu}
⚡ *عملی مشق:* ${journey.practiceStep.instructionUrdu}

۳. 🎯 **عمل کریں (حقیقی مشن):** ${journey.actStep.missionTitleUrdu}
💡 *اہمیت:* ${journey.actStep.whyItMattersUrdu}
⚡ *اقدام:* ${journey.actStep.actionUrdu}

۴. 🤲 **غور کریں (رہنمائی):** ${journey.reflectStep.themeUrdu}
${journey.reflectStep.hadithUrdu ? `📜 *حدیث نبوی ﷺ:* "${journey.reflectStep.hadithUrdu}" [${journey.reflectStep.hadithRef}]` : ''}
${journey.reflectStep.quranUrdu ? `📖 *قرآن مجید:* "${journey.reflectStep.quranUrdu}" [${journey.reflectStep.quranRef}]` : ''}

۵. ✨ **مکمل کریں:** جب آپ یہ مراحل طے کر لیں گے تو:
*"آج آپ نے اپنے آپ میں ایک قدم بہتری پیدا کی۔"*

---
کیا آپ ہوم اسکرین پر جا کر یہ سفر شروع کرنا چاہتے ہیں یا کسی مخصوص مرحلے کے بارے میں رہنمائی لینا چاہتے ہیں؟`,
        suggestions: [
          'ہوم اسکرین پر سفر شروع کریں',
          'مجھے 10 منٹ کا تیز سفر چاہیے',
          'آج کا مشن دکھائیں',
          'میرا روڈ میپ دکھائیں'
        ]
      };
    } else {
      return {
        reply: `🌟 **My Daily Journey (Daily Smart Journey)**
⏱️ Estimated Time: ${journey.totalEstimatedMinutes} mins | ⭐ Reward: +${journey.totalPoints} pts

Your daily journey is organized into 5 balanced steps:

1. 📖 **Learn:** ${journey.learnStep.lessonTitleEn} (${journey.learnStep.courseTitleEn})
💡 *Key takeaway:* ${journey.learnStep.keyConceptEn}

2. 🛠️ **Practice:** ${journey.practiceStep.titleEn}
⚡ *Activity:* ${journey.practiceStep.instructionEn}

3. 🎯 **Act (Real-Life Mission):** ${journey.actStep.missionTitleEn}
💡 *Purpose:* ${journey.actStep.whyItMattersEn}
⚡ *Action:* ${journey.actStep.actionEn}

4. 🤲 **Reflect (Moral Guidance):** ${journey.reflectStep.themeEn}
${journey.reflectStep.hadithEn ? `📜 *Hadith:* "${journey.reflectStep.hadithEn}" [${journey.reflectStep.hadithRef}]` : ''}
${journey.reflectStep.quranEn ? `📖 *Quran:* "${journey.reflectStep.quranEn}" [${journey.reflectStep.quranRef}]` : ''}

5. ✨ **Complete:** Upon completion:
*"Today you took one step towards improving yourself."*

---
Would you like to begin this journey on the Home screen or receive specific guidance on any step?`,
        suggestions: [
          'Start journey on Home screen',
          'I want a quick 10-minute journey',
          'Show today\'s mission',
          'View my life roadmap'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // 0.14b SMART DISCOVER RECOMMENDATIONS ("میرے لیے کیا نیا ہے؟")
  // ---------------------------------------------------------------------------
  const isDiscoverQuery = 
    q.includes('کیا نیا ہے') ||
    q.includes('نیا کیا ہے') ||
    q.includes('میرے لیے کیا نیا') ||
    q.includes('نئے مواقع') ||
    q.includes('نیا سیکھیں') ||
    q.includes('نیا راستہ') ||
    q.includes('what is new') ||
    q.includes('discover') ||
    q.includes('recommendation');

  if (isDiscoverQuery && userProfile) {
    const top3 = getPersonalizedDiscoverRecommendations(userProfile, 'all', 3);

    if (isUrdu) {
      const itemsList = top3.map((scored, i) => {
        const item = scored.item;
        return `${i + 1}. 🌟 **${item.titleUrdu}** (${item.difficultyUrdu} • وقت: ${item.estimatedTimeUrdu})
   • **تعارف:** ${item.shortDescriptionUrdu}
   • 💡 **آپ کے لیے کیوں مفید ہے:** ${scored.personalizedReasonUrdu}
   • 🎯 **اگلا قدم:** ${item.actionLabelUrdu}`;
      }).join('\n\n');

      return {
        reply: `سلام **${name}**! آپ کی عمر (${userProfile.ageGroup || '16-25'} سال)، تعلیم (${userProfile.educationLevel || userProfile.education || 'بنیادی'}) اور دستیاب وقت کے تجزیے کے بعد آپ کے لیے سب سے موزوں ۳ نئے مواقع اور راستے درج ذیل ہیں:

${itemsList}

---
💡 **اہم اصول:** یہ تمام تجاویز حقیقت پسندانہ اور کم خرچ ہیں، جن میں کوئی غیر حقیقی یا شارٹ کٹ دعویٰ شامل نہیں۔ آپ ہوم اسکرین پر موجود **"میرے لیے کیا نیا ہے؟"** سیکشن سے ۹ مختلف شعبہ جات میں مزید مواقع بھی دیکھ سکتے ہیں۔`,
        suggestions: [
          'مجھے پہلی تجویز کا طریقہ کار سمجھائیں',
          'کم سرمائے کے کاروباری آئیڈیاز دکھائیں',
          'فری لانسنگ کے حقیقی مواقع کیا ہیں؟',
          'ہوم اسکرین پر واپس جائیں'
        ]
      };
    } else {
      const itemsList = top3.map((scored, i) => {
        const item = scored.item;
        return `${i + 1}. 🌟 **${item.titleEn}** (${item.difficultyEn} • Time: ${item.estimatedTimeEn})
   • **Summary:** ${item.shortDescriptionEn}
   • 💡 **Why useful for you:** ${scored.personalizedReasonEn}
   • 🎯 **Action:** ${item.actionLabelEn}`;
      }).join('\n\n');

      return {
        reply: `Peace and greetings, **${name}**! Based on your profile (Age Group: ${userProfile.ageGroup || '16-25'}, Education: ${userProfile.educationLevel || userProfile.education || 'General'}, Available Time: ${timePerDay}), here are your top 3 curated recommendations:

${itemsList}

---
💡 **Realistic & Grounded:** All discovery topics are designed for step-by-step practical progress without unrealistic income hype. You can also explore all 9 categories inside the **"What's New For Me?"** section on the Home screen.`,
        suggestions: [
          'Explain the first recommendation in detail',
          'Show low-capital business ideas',
          'Realistic freelancing opportunities',
          'Go to Home Screen'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // 0.15 REAL LIFE MISSION SYSTEM (آج کا مشن اور حقیقی زندگی کی رہنمائی)
  // ---------------------------------------------------------------------------
  const isMissionQuery = 
    q.includes('مشن') || 
    q.includes('mission') || 
    q.includes('آج کا مشن') || 
    q.includes('7 دن کا مشن') || 
    q.includes('ہفتہ وار مشن') ||
    q.includes('خاندانی مشن') || 
    q.includes('معاشرتی مشن') || 
    q.includes('ضبط نفس کا مشن') ||
    q.includes('کردار کا مشن') ||
    q.includes('real life mission');

  if (isMissionQuery && userProfile) {
    let missionType: RealLifeMissionType = 'daily';
    if (q.includes('7 دن') || q.includes('weekly') || q.includes('ہفتہ وار')) missionType = 'weekly';
    else if (q.includes('skill') || q.includes('ہنر')) missionType = 'skill';
    else if (q.includes('character') || q.includes('کردار')) missionType = 'character';
    else if (q.includes('family') || q.includes('خاندان') || q.includes('والدین')) missionType = 'family';
    else if (q.includes('community') || q.includes('معاشرہ') || q.includes('محلہ')) missionType = 'community';
    else if (q.includes('self_control') || q.includes('ضبط') || q.includes('غصہ')) missionType = 'self_control';

    const mission = getPersonalizedMission(userProfile, missionType);

    if (isUrdu) {
      return {
        reply: `🎯 **آج کا مشن: ${mission.titleUrdu}**
🔖 نوعیت: ${mission.typeLabelUrdu} | ⏱️ تخمینہ وقت: ${mission.estimatedMinutes} منٹ | ⭐ انعام: +${mission.points} پوائنٹس

💡 **یہ عمل کیوں ضروری ہے؟ (The 'Why'):**
${mission.whyItMattersUrdu}

⚡ **آج کا عملی اقدام (Measurable Action):**
${mission.actionUrdu}

${mission.verifiedGuidance ? `📖 **مستند رہنمائی:**
${mission.verifiedGuidance.hadithUrdu ? `📜 *حدیث نبوی ﷺ:* "${mission.verifiedGuidance.hadithUrdu}" [${mission.verifiedGuidance.hadithRef}]` : ''}
${mission.verifiedGuidance.quranUrdu ? `📖 *قرآن مجید:* "${mission.verifiedGuidance.quranUrdu}" [${mission.verifiedGuidance.quranRef}]` : ''}` : ''}

✍️ **مکمل کرنے کے بعد کا سوال (Self-Reflection):**
"${mission.reflectionPromptUrdu}"

---
کیا آپ یہ مشن ابھی شروع کرنے کے لیے تیار ہیں یا آپ کو اس کا آسان متبادل چاہیے؟`,
        suggestions: [
          'جی ہاں، میں یہ مشن کروں گا!',
          'یہ تھوڑا مشکل ہے، آسان مشن دیں',
          'مجھے خاندانی مشن دکھائیں',
          'میرا اگلا بہترین قدم بتائیں'
        ]
      };
    } else {
      return {
        reply: `🎯 **Today's Mission: ${mission.titleEn}**
🔖 Type: ${mission.typeLabelEn} | ⏱️ Estimated Time: ${mission.estimatedMinutes} mins | ⭐ Reward: +${mission.points} pts

💡 **Why It Matters (The Purpose):**
${mission.whyItMattersEn}

⚡ **Measurable Action for Today:**
${mission.actionEn}

${mission.verifiedGuidance ? `📖 **Verified Guidance:**
${mission.verifiedGuidance.hadithEn ? `📜 *Hadith:* "${mission.verifiedGuidance.hadithEn}" [${mission.verifiedGuidance.hadithRef}]` : ''}
${mission.verifiedGuidance.quranEn ? `📖 *Quran:* "${mission.verifiedGuidance.quranEn}" [${mission.verifiedGuidance.quranRef}]` : ''}` : ''}

✍️ **Short Reflection Upon Completion:**
"${mission.reflectionPromptEn}"

---
Are you ready to undertake this real-world mission, or would you like a simpler alternative?`,
        suggestions: [
          'Yes, I will do this mission!',
          'Make it simpler for me',
          'Show me a Family Mission',
          'What is my next best step?'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // 0.16 KNOWLEDGE LIBRARY / علم کا خزانہ (Authentic Knowledge Hub Referral)
  // Connects: Quran, Hadith, Seerah, Sahaba, Ethics, Finance, Business, AI, Time, Environment
  // ---------------------------------------------------------------------------
  const isKnowledgeLibraryQuery =
    q.includes('علم کا خزانہ') ||
    q.includes('خزانہ') ||
    q.includes('knowledge library') ||
    q.includes('پیسے بچانے') ||
    q.includes('غصہ کم') ||
    q.includes('کاروبار شروع') ||
    q.includes('فری لانسنگ کا آغاز') ||
    q.includes('حدیث سے رہنمائی') ||
    q.includes('سیرت سے رہنمائی') ||
    q.includes('صحابہ کرام') ||
    q.includes('وقت کا انتظام');

  if (isKnowledgeLibraryQuery) {
    const matchedItems = searchKnowledgeLibraryWithIntents(q, KNOWLEDGE_LIBRARY_ITEMS, 'all');
    const topItem = matchedItems[0] || KNOWLEDGE_LIBRARY_ITEMS[0];

    if (isUrdu) {
      return {
        reply: `📚 **علم کا خزانہ سے منتخب رہنمائی: "${topItem.titleUrdu}"**
🏷️ شعبہ: **${topItem.categoryTitleUrdu}** | ⏱️ وقت: ${topItem.estimatedTimeUrdu} | 🎯 درجہ: ${topItem.difficultyUrdu}

💡 **خلاصۂ سبق:**
${topItem.shortExplanationUrdu}

✨ **آپ کے لیے عملی فائدہ:**
${topItem.practicalBenefitUrdu}

${topItem.practicalExampleUrdu ? `🔍 **ایک حقیقی مثال:**
${topItem.practicalExampleUrdu}` : ''}

🎯 **آج کا ایک چھوٹا قدم (One Small Action):**
${topItem.oneSmallActionUrdu || (topItem.practicalActionStepsUrdu && topItem.practicalActionStepsUrdu[0]) || topItem.practicalBenefitUrdu}

${topItem.sourceReferenceUrdu ? `📜 **مستند حوالہ [تصدیق شدہ]:**
${topItem.sourceReferenceUrdu}` : ''}

⭐ **اب آپ یہ کریں (Next Step):**
${topItem.nextRecommendedStepUrdu || 'اس سبق کو اپنی روزمرہ عادات میں شامل کریں اور دہرائی کا شیڈول بنائیں۔'}`,
        suggestions: [
          'علم کا خزانہ کھولیں',
          'مجھے دوسرا سبق دکھائیں',
          'اس سبق کی دہرائی شیڈول کریں',
          'اب مجھے کیا کرنا چاہیے؟'
        ]
      };
    } else {
      return {
        reply: `📚 **Curated from Knowledge Library: "${topItem.titleEn}"**
🏷️ Category: **${topItem.categoryTitleEn}** | ⏱️ Time: ${topItem.estimatedTimeEn} | 🎯 Level: ${topItem.difficultyEn}

💡 **Core Insight:**
${topItem.shortExplanationEn}

✨ **Practical Benefit:**
${topItem.practicalBenefitEn}

${topItem.practicalExampleEn ? `🔍 **Real-Life Example:**
${topItem.practicalExampleEn}` : ''}

🎯 **Today’s One Small Action:**
${topItem.oneSmallActionEn || (topItem.practicalActionStepsEn && topItem.practicalActionStepsEn[0]) || topItem.practicalBenefitEn}

${topItem.sourceReference ? `📜 **Verified Reference:**
${topItem.sourceReference}` : ''}

⭐ **Now Do This (Next Recommended Step):**
${topItem.nextRecommendedStepEn || 'Incorporate this habit today and schedule it in Learn → Remember → Practice.'}`,
        suggestions: [
          'Open Knowledge Library',
          'Show another lesson',
          'Schedule this review',
          'What should I do now?'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // 0.15 SPECIFIC INTENT RECOGNITION (CANVA, MOBILE SKILLS, CRITICAL THINKING, PARENTING)
  // ---------------------------------------------------------------------------
  
  // A. CANVA OVERVIEW ("Canva کیا ہے؟")
  if (
    (q.includes('canva') || q.includes('کینوا')) &&
    (q.includes('کیا ہے') || q.includes('what is') || q.includes('تعارف') || q.includes('intro') || q.includes('کس کام آتا ہے'))
  ) {
    if (isUrdu) {
      return {
        reply: `کینوا (Canva) موبائل اور کمپیوٹر کا ایک بے حد آسان اور مفت گرافک ڈیزائننگ ٹول ہے، جس سے ہر شخص بغیر کسی پیچیدہ سافٹ ویئر یا ڈگری کے خوبصورت ڈیزائن بنا سکتا ہے۔

📌 **کینوا کی ۴ اہم خصوصیات:**
1. **بنے بنائے سانچے (Templates):** کینوا پر لاکھوں تیار شدہ ٹیمپلیٹس موجود ہیں—جیسے دکان کا اشتہار، واٹس ایپ اسٹیٹس، سوشل میڈیا پوسٹ، بینر اور شادی کارڈ۔
2. **موبائل پر آسانی:** آپ کو کمپیوٹر کی ضرورت نہیں؛ عام سمارٹ فون پر صرف انگلی کے اشارے سے متن، رنگ اور تصاویر تبدیل کی جا سکتی ہیں۔
3. **اردو اور مقامی فونٹس:** کینوا میں خوبصورت اردو فونٹس (مثلاً جمیل نوری نستعلیق) اور کسٹم تحریر آسانی سے شامل کی جا سکتی ہے۔
4. **مفت اور فوری:** ڈیزائن مکمل ہونے پر ایک کلک سے ہائی کوالٹی تصویر (PNG/JPG) محفوظ ہو جاتی ہے۔

🎯 **آج کا فوری عملی کام (10 منٹ):**
اپنے موبائل میں Canva ایپ کھولیں (یا canva.com پر جائیں)، سرچ میں *"Sale Banner"* یا *"Quote"* لکھیں اور اپنا نام لکھ کر پہلی تصویر ڈاؤنلوڈ کریں۔

🔍 **آپ سے فالو اپ سوال:**
کیا آپ کینوا کو ذاتی استعمال کے لیے سیکھنا چاہتے ہیں، سوشل میڈیا کے لیے، یا اس سے فری لانسنگ کر کے پیسے کمانے کے لیے؟`,
        suggestions: [
          'Canva سے گھر بیٹھے کام کیسے حاصل کیا جا سکتا ہے؟',
          'کینوا سے پہلا پورٹ فولیو کیسے بنائیں؟',
          'میرے پاس صرف موبائل ہے، کیا کینوا چل جائے گا؟',
          'میرا اگلا قدم کیا ہونا چاہیے؟'
        ]
      };
    } else {
      return {
        reply: `Canva is an easy-to-use, free graphic design platform available on smartphones and computers, enabling anyone to create professional visuals without complex software.

📌 **4 Key Features of Canva:**
1. **Ready-Made Templates:** Thousands of layouts for social media, flyers, sale posters, and cards.
2. **100% Mobile Friendly:** Customize colors, fonts, and photos directly from your phone.
3. **Urdu & Multilingual Fonts:** Full support for beautiful typography and custom text.
4. **Fast & Free:** Download crisp, high-resolution PNG or PDF files with one tap.

🎯 **Today's Action (10 mins):**
Open Canva on your phone, choose a free template, insert your name or greeting, and export it.

🔍 **Follow-up Question:**
Are you exploring Canva for personal creative projects, social media, or to offer design services to clients?`,
        suggestions: [
          'How to get freelance work using Canva?',
          'How to create your first Canva portfolio?',
          'Can I run Canva smoothly on mobile only?',
          'What should be my next step?'
        ]
      };
    }
  }

  // B. CANVA EARNING / FREELANCING ("Canva سے گھر بیٹھے کام کیسے حاصل کیا جا سکتا ہے؟")
  if (
    (q.includes('canva') || q.includes('کینوا')) &&
    (q.includes('کام') || q.includes('پیسے') || q.includes('کمائی') || q.includes('کلائنٹ') || q.includes('گھر بیٹھے') || q.includes('earning') || q.includes('freelanc') || q.includes('آرڈر'))
  ) {
    if (isUrdu) {
      return {
        reply: `ماشاءاللہ ${salutation}! کینوا (Canva) سے گھر بیٹھے باعزت اور حلال آمدنی حاصل کرنے کا راستہ انتہائی عملی اور تیز ہے۔

📌 **کینوا سے کلائنٹس اور کام حاصل کرنے کا ۴ نکاتی لائحہ عمل:**
1. **پہلے ۳ سے ۵ نمونے (Portfolio) بنائیں:** مختلف موضوعات پر معیاری پوسٹرز بنائیں—مثلاً کریانہ اسٹور کی سیل، اسکول کا داخلہ اشتہار، ریسٹورنٹ کا مینو اور یوٹیوب تھمب نیل۔
2. **مقامی دکانوں اور کاروباروں سے آغاز کریں:** اپنے محلے کی بیکری، کپڑوں کی دکان، اکیڈمی یا ڈاکٹر کلینک سے رابطہ کریں اور انہیں اپنے بنے ہوئے پروموشنل ڈیزائن دکھائیں۔
3. **سوشل میڈیا مینجمنٹ:** فیس بک اور انسٹاگرام پیجز چلانے والوں کو ہفتہ وار ۳ سے ۵ پوسٹس بنا کر دینے کی سروس پیش کریں۔
4. **آن لائن مارکیٹس (Fiverr/Upwork):** جب ہاتھ میں صفائی آ جائے تو آن لائن پلیٹ فارمز پر "Social Media Poster Designer" کے طور پر گگ بنائیں۔

📜 **حدیث مبارکہ:** "سچا اور امانت دار تاجر (اور ہنر مند) قیامت کے دن انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔" (سنن ترمذی: ۱۲۰۹)

🎯 **آج کا فوری عملی کام (15 منٹ):**
اپنے علاقے کی کسی دکان یا اسکول کا فرضی اشتہار کینوا پر ڈیزائن کریں اور اسے بطور نمونہ محفوظ کریں۔

🔍 **آپ سے فالو اپ سوال:**
آپ کو مقامی دکانوں کے لیے پوسٹرز بنانے میں زیادہ دلچسپی ہے یا آن لائن انٹرنیشنل کلائنٹس تلاش کرنے میں؟`,
        suggestions: [
          'مقامی دکانوں کو سوشل میڈیا ڈیزائن کیسے پیش کریں؟',
          'کینوا سے فائیور اور اپ ورک پر آرڈر کیسے لیں؟',
          'آن لائن کمائی میں حلال روزگار کے سنہری اصول',
          'میرا اگلا قدم کیا ہونا چاہیے؟'
        ]
      };
    } else {
      return {
        reply: `Masha’Allah ${salutation}! Generating dignified, halal income using Canva from home is one of the fastest and most practical freelancing pathways.

📌 **4-Step Roadmap to Get Paid Work with Canva:**
1. **Build a 3-5 Piece Portfolio:** Create realistic sample flyers for a local grocery store, tuition academy, restaurant menu, and YouTube thumbnail.
2. **Pitch to Local Neighborhood Businesses:** Show your ready-made flyers to local bakeries, tailors, and private schools who need promotion.
3. **Monthly Social Media Retainers:** Offer to design 3-5 promotional posts per week for local Facebook/Instagram shop pages.
4. **Freelance Gig Platforms:** Once your craft is polished, offer flyer and banner services on Fiverr and Upwork.

📜 **Prophetic Guidance:** "The truthful, trustworthy merchant will be with the prophets and martyrs." (Tirmidhi: 1209)

🎯 **Today's Action (15 mins):**
Design a sample promotional flyer for a local bakery or school in Canva and save it to your phone.

🔍 **Follow-up Question:**
Would you prefer starting with local businesses in your area or exploring online freelance platforms?`,
        suggestions: [
          'Offering social media designs to local shops',
          'Getting freelance gigs on Fiverr/Upwork with Canva',
          'Principles of Halal online income',
          'What should be my next step?'
        ]
      };
    }
  }

  // C. MOBILE-ONLY SKILLS ("میرے پاس صرف موبائل ہے، میرے لیے کون سا ہنر بہتر ہے؟")
  if (
    q.includes('صرف موبائل') ||
    q.includes('موبائل ہے') ||
    q.includes('only mobile') ||
    q.includes('phone only') ||
    q.includes('کمپیوٹر نہیں') ||
    q.includes('لیپ ٹاپ نہیں') ||
    q.includes('اسمارٹ فون سے کیا')
  ) {
    if (isUrdu) {
      return {
        reply: `بہت زبردست سوال، ${salutation}! یہ ایک غلط فہمی ہے کہ ہنر سیکھنے کے لیے مہنگا کمپیوٹر لازمی ہے۔ آج کا سمارٹ فون ایک مکمل ڈیجیٹل ورک اسٹیشن ہے۔

📌 **صرف موبائل سے سیکھے جانے والے ۵ بہترین اور باوقار ہنر:**
1. **کینوا گرافک ڈیزائننگ (Canva):** سوشل میڈیا پوسٹس، بینرز، شادی کارڈز اور اشتہارات صرف موبائل سے پروفیشنل انداز میں بنتے ہیں۔
2. **شارٹ ویڈیو ایڈیٹنگ (CapCut / VN Editor):** موبائل سے ٹک ٹاک، یوٹیوب شارٹس اور انسٹاگرام ریلز ایڈٹ کریں جس کی مارکیٹ میں زبردست مانگ ہے۔
3. **اردو و انگریزی وائس اوور اور آڈیو ریکارڈنگ:** صاف آواز میں کہانیاں، اشتہاری پیغامات یا تعلیمی نوٹس ریکارڈ کریں۔
4. **ڈیجیٹل مارکیٹنگ و واٹس ایپ کیٹلاگ مینجمنٹ:** مقامی دکانوں کی مصنوعات کو واٹس ایپ بزنس پر لسٹ کرنا اور سوشل میڈیا پر پروموٹ کرنا۔
5. **ڈیٹا انٹری اور اردو ٹرانسلیشن:** گوگل ڈرائیو، گوگل شیٹس اور گوگل ڈاکس پر موبائل سے کام کرنا۔

🎯 **آج کا فوری عملی کام (15 منٹ):**
کینوا (Canva) یا کیپ کٹ (CapCut) موبائل ایپ انسٹال کریں اور پہلی بار اس کے ٹولز کو کھول کر ۵ منٹ مشق کریں۔

🔍 **آپ سے فالو اپ سوال:**
آپ کی زیادہ ترجیح گرافک ڈیزائن (پوسٹرز) کی طرف ہے، ویڈیو ایڈیٹنگ کی طرف، یا سوشل میڈیا مارکیٹنگ کی طرف؟`,
        suggestions: [
          'موبائل سے ویڈیو ایڈیٹنگ (CapCut) کیسے سیکھیں؟',
          'کینوا سے موبائل پر پہلا بینر ڈیزائن کریں',
          'موبائل پر اردو/انگریزی ڈیٹا انٹری کے مواقع',
          'آج میں صرف 15 منٹ میں کیا سیکھ سکتا ہوں؟'
        ]
      };
    } else {
      return {
        reply: `Excellent question, ${salutation}! It is a common misconception that you need an expensive laptop to learn valuable skills. A smartphone is a complete digital workstation.

📌 **Top 5 High-Demand Skills You Can Master 100% on Mobile:**
1. **Canva Graphic Design:** Create professional posters, flyers, and announcements directly on your phone.
2. **Mobile Video Editing (CapCut / VN):** Edit YouTube Shorts, TikToks, and reels for businesses and creators.
3. **Voiceover & Audio Narration:** Record clean voice clips for promotional messages and educational content.
4. **WhatsApp Business Catalog Management:** Set up online inventories and customer management for local shops.
5. **Content Writing & Data Entry:** Type and organize documents via Google Docs and Sheets mobile apps.

🎯 **Today's Action (15 mins):**
Install either Canva or CapCut on your smartphone and spend 5 minutes exploring its core editing interface.

🔍 **Follow-up Question:**
Are you more interested in visual poster design, video editing, or business management on your phone?`,
        suggestions: [
          'Learn mobile video editing with CapCut',
          'Design your first poster on Canva mobile',
          'Mobile data entry & translation opportunities',
          'What can I learn in 15 minutes today?'
        ]
      };
    }
  }

  // D. CRITICAL THINKING ("تنقیدی سوچ کیا ہوتی ہے؟")
  if (
    q.includes('تنقیدی سوچ') ||
    q.includes('critical thinking') ||
    q.includes('سوچ سمجھ') ||
    q.includes('تحقیق کرنا') ||
    q.includes('غور و فکر')
  ) {
    if (isUrdu) {
      return {
        reply: `تنقیدی سوچ (Critical Thinking) کا مطلب ہے کسی بھی سنی سنائی بات، خبر یا دعوے پر آنکھ بند کر کے یقین کرنے کے بجائے، عقل، تحقیق اور ثبوت کی بنیاد پر حقیقت اور رائے کا فرق جانچنا۔

📌 **تنقیدی سوچ کے ۳ بنیادی ستون:**
1. **سوال پوچھنے کی ہمت:** *"کیا یہ بات واقعی سچ ہے؟ اس کا ثبوت کیا ہے؟ اور کہنے والے کا مقصد کیا ہو سکتا ہے؟"*
2. **حقیقت اور رائے میں فرق:** ہر انسان کی ذاتی پسند یا غصہ ایک "رائے" ہو سکتا ہے، مگر "ٹھوس حقیقت" ہمیشہ غیر جانبدار ثبوت مانگتی ہے۔
3. **جذبات کے بجائے دلیل کو ترجیح:** غصے یا تعصب میں آ کر فیصلہ کرنے کے بجائے پرسکون ہو کر دونوں رخ دیکھنا۔

📖 **قرآنی رہنمائی [سورۃ الحجرات: آیت ۶]:**
*"اے ایمان والو! اگر کوئی فاسق تمہارے پاس کوئی خبر لائے تو خوب تحقیق کر لیا کرو، کہیں ایسا نہ ہو کہ تم نادانی میں کسی قوم کو نقصان پہنچا بیٹھو۔"*

🎯 **آج کی عملی مشق (5 منٹ):**
آج سوشل میڈیا یا محلے میں سنی جانے والی کسی بھی سنسنی خیز خبر پر فوراً تبصرہ یا آگے فارورڈ نہ کریں، بلکہ پہلے سوچیں: *"کیا میرے پاس اس کی مصدقہ تصدیق ہے؟"*

🔍 **آپ سے فالو اپ سوال:**
کیا آپ روزمرہ زندگی میں کسی مخصوص فیصلے یا خبر کے حوالے سے تنقیدی سوچ کا جائزہ لینا چاہتے ہیں؟`,
        suggestions: [
          'روزمرہ زندگی میں تنقیدی سوچ کی عملی مثال',
          'سوشل میڈیا کی خبروں کی تصدیق کا اسلامی طریقہ',
          'غصے یا دباؤ میں صحیح فیصلہ کیسے کریں؟',
          'میرا اگلا قدم کیا ہونا چاہیے؟'
        ]
      };
    } else {
      return {
        reply: `Critical Thinking is the ability to evaluate information objectively—analyzing facts and evidence rather than blindly accepting rumors, assumptions, or emotional biases.

📌 **3 Core Pillars of Critical Thinking:**
1. **Inquiring Mindset:** Asking: *"Is this verified? What is the concrete evidence? What is the source?"*
2. **Distinguishing Fact from Opinion:** Recognizing subjective personal viewpoints versus objective verified reality.
3. **Reason Over Impulse:** Pausing before reacting emotionally to social media posts or rumors.

📖 **Quranic Injunction [Surah Al-Hujurat: 6]:**
*"O you who have believed, if there comes to you a disobedient one with information, investigate, lest you harm a people out of ignorance."*

🎯 **Today's Action (5 mins):**
Whenever you encounter sensational news or forward messages today, pause and verify the source before believing or sharing.

🔍 **Follow-up Question:**
Would you like an everyday practical scenario to practice applying critical thinking right now?`,
        suggestions: [
          'Everyday practical example of critical thinking',
          'Islamic guidelines on verifying news & rumors',
          'Making sound decisions under pressure',
          'What should be my next step?'
        ]
      };
    }
  }

  // E. CHILDREN SCREEN TIME & DIGITAL PARENTING ("گھر میں بچوں کو موبائل کے غلط استعمال سے کیسے بچائیں؟")
  if (
    q.includes('بچے') ||
    q.includes('بچوں') ||
    (q.includes('والدین') && (q.includes('موبائل') || q.includes('اسکرین') || q.includes('بچ'))) ||
    q.includes('موبائل کے غلط استعمال') ||
    q.includes('موبائل کی لت') ||
    q.includes('screen time') ||
    (q.includes('parenting') && q.includes('mobile'))
  ) {
    if (isUrdu) {
      return {
        reply: `محترم ${salutation}! بچوں کو موبائل کے غلط استعمال یا لت سے بچانا آج کے دور کا اہم ترین خاندانی چیلنج ہے، اور اس کا حل سختی یا مار پیٹ کے بجائے حکمت، نظم و ضبط اور محبت میں ہے۔

📌 **بچوں کی مثبت ڈیجیٹل تربیت کے ۴ عملی اصول:**
1. **گھر میں سکرین کا وقت (Screen Time) طے کریں:** دن میں زیادہ سے زیادہ ۳۰ سے ۴۵ منٹ مقرر کریں، اور کھانا کھاتے وقت یا سونے سے ۱ گھنٹہ پہلے موبائل کا استعمال سختی سے ممنوع رکھیں۔
2. **متبادل دلچسپ سرگرمیاں فراہم کریں:** اگر آپ بچے سے موبائل لیں گے تو اس کی جگہ رنگ بھرنے والی کتابیں، بلاکس، چھت پر کھیل یا کہانی سنانے کا وقت دیں۔
3. **والدین خود عملی نمونہ بنیں:** اگر والدین خود ہر وقت موبائل پر رہیں گے تو بچے کبھی نہیں مانیں گے۔ بچوں کے سامنے بامقصد اور محدود موبائل استعمال کریں۔
4. **مفید تعلیمی ایپس کا استعمال:** اگر موبائل دینا بھی پڑے تو کارٹونز کے بجائے سیکھنے اور ذہنی نشوونما والی ایپس (مثلاً اردو قاری، Seekho کے اسباق، یا قرآنی کہانیاں) کھول کر دیں۔

📜 **حدیث نبوی ﷺ:** "تم میں سے ہر شخص نگہبان ہے اور ہر ایک سے اس کی رعیت (اہل و عیال) کے بارے میں پوچھا جائے گا۔" (صحیح بخاری: ۸۹۳)

🎯 **آج کا عملی اقدام:**
آج شام کھانے کی میز پر تمام گھر والے موبائل ایک طرف رکھ کر آپس میں ۱۰ منٹ دن بھر کے احوال پر گفتگو کریں۔

🔍 **آپ سے فالو اپ سوال:**
کیا آپ کے گھر میں بچوں کی عمریں ۱۰ سال سے کم ہیں یا ٹین ایج (نو عمر) ہیں؟`,
        suggestions: [
          'بچوں کو موبائل کی لت سے چھڑانے کا ۳ نکاتی فارمولا',
          'بچوں کے لیے مفید اسلامی و تعلیمی موبائل ایپس',
          'گھر میں پرسکون اور محبت بھرا ماحول کیسے بنائیں؟',
          'میرا اگلا قدم کیا ہونا چاہیے؟'
        ]
      };
    } else {
      return {
        reply: `Dear ${salutation}, guiding children toward healthy digital habits requires patience, clear household boundaries, and compassionate leadership rather than harsh scolding.

📌 **4 Practical Steps to Manage Screen Time:**
1. **Set Clear Daily Limits:** Restrict recreational screen time to 30-45 minutes daily. Keep meal times and bedrooms screen-free.
2. **Provide Engaging Physical Alternatives:** Offer drawing books, constructive puzzles, board games, or outdoor play to fill their natural energy.
3. **Lead by Example:** Children mirror adult habits. Minimize unnecessary phone scrolling in their presence.
4. **Curate Educational Content:** Replace mindless short-form entertainment with constructive learning and storytelling apps.

📜 **Prophetic Wisdom:** "Every one of you is a shepherd and is responsible for his flock." (Sahih Bukhari: 893)

🎯 **Today's Action:**
Implement a "Device-Free Family Dinner" tonight and spend 10 uninterrupted minutes talking with your children.

🔍 **Follow-up Question:**
What age group are your children so we can tailor age-appropriate activities?`,
        suggestions: [
          '3-step formula to reduce child screen time',
          'Safe educational and Islamic apps for kids',
          'Creating a peaceful home environment',
          'What should be my next step?'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // 0.2 SMART DECISION & 5-STEP DECISION METHOD
  // Situations: Anger, Revenge, Peer Pressure, Social Media, Parents, Cheating,
  // Scams, Hopelessness, Big decisions
  // ---------------------------------------------------------------------------
  const decisionCategories = [
    {
      cat: 'anger_fighting',
      keywords: ['غصہ', 'غصے', 'لڑائی', 'جھگڑا', 'مار پیٹ', 'برا کہا', 'گالی', 'غصے میں ہوں', 'angry', 'fight', 'shouted', 'insulted']
    },
    {
      cat: 'revenge',
      keywords: ['بدلہ', 'بدلہ لینا', 'انتقام', 'نیچا دکھاؤں', 'حق مارا', 'revenge', 'retaliate', 'get even']
    },
    {
      cat: 'bad_friendship_peer_pressure',
      keywords: ['دباؤ', 'منفی دباؤ', 'دوست غلط', 'اکسا رہے', 'بزدل کہتے', 'بری صحبت', 'peer pressure', 'pressured', 'mocking']
    },
    {
      cat: 'social_media_wasting_time',
      keywords: ['وقت ضائع', 'اسکرولنگ', 'ریلز', 'ٹک ٹاک', 'گیمز', 'وقت گنوا', 'wasting time', 'scrolling', 'reels', 'screen time']
    },
    {
      cat: 'parents_disrespect',
      keywords: ['والدین', 'ماں باپ', 'امی', 'ابو', 'بڑوں سے تلخ', 'نافرمانی', 'parents', 'arguing with parents', 'disrespect']
    },
    {
      cat: 'cheating_fraud',
      keywords: ['نقل', 'امتحان میں نقل', 'دھوکہ', 'جھوٹ', 'شارٹ کٹ', 'cheat', 'cheating', 'exam cheat', 'lying']
    },
    {
      cat: 'money_misuse_scams',
      keywords: ['امیر بنیں', 'لالچ', 'جوئے', 'آن لائن پیسے', 'اسکیم', 'فراڈ', 'quick money', 'scam', 'gambling', 'betting']
    },
    {
      cat: 'giving_up_education',
      keywords: ['تعلیم چھوڑنا', 'پڑھائی چھوڑ', 'مایوس', 'ہمت ہار', 'فیل ہونے', 'give up', 'drop out', 'hopeless', 'despair']
    },
    {
      cat: 'general_decision',
      keywords: ['فیصلہ کرنے سے پہلے', 'فیصلہ', 'کوئی بڑا فیصلہ', 'سمجھ نہیں آ رہی کیا کروں', 'کیا فیصلہ کروں', 'think before', 'decision']
    }
  ];

  const matchedDecision = decisionCategories.find(dc => dc.keywords.some(k => q.includes(k)));

  if (matchedDecision) {
    let scenario = getScenarioByCategory(matchedDecision.cat === 'general_decision' ? 'anger_fighting' : matchedDecision.cat);
    if (!scenario) {
      scenario = DECISION_SCENARIOS_DATA[0];
    }

    const optA = scenario.options[0];
    const optB = scenario.options[1];

    if (isUrdu) {
      return {
        reply: `🧠 **مسئلہ (صورتِ حال کو سمجھنا):**
${scenario.situationUrdu}

⏸️ **پہلے رکیں (Emotional Pause):**
${scenario.stopPauseStepUrdu}

⚖️ **دو راستے (Two Paths):**
🔴 **راستہ ۱ (جذباتی ردعمل):**
"${optA.labelUrdu}"
👉 *فوری اثر:* ${optA.consequenceMap.immediateEffectUrdu}
👉 *طویل مدتی نقصان:* ${optA.consequenceMap.longTermEffectUrdu}

🟢 **راستہ ۲ (باوقار اور تعمیری عمل):**
"${optB.labelUrdu}"
👉 *فوری اثر:* ${optB.consequenceMap.immediateEffectUrdu}
👉 *طویل مدتی فائدہ:* ${optB.consequenceMap.longTermEffectUrdu}

📖 **رہنمائی [ماخذ: ${optB.sourceLabelUrdu}]:**
${optB.islamicReferenceUrdu}

🎯 **آج کا عمل (ONE Practical Action):**
${optB.practicalActionUrdu}

⭐ **اگلا قدم:**
آپ کون سا راستہ چننا چاہتے ہیں؟ نیچے دیئے گئے آپشنز میں سے کلک کر کے مکمل نتائج کا جائزہ لیں:`,
        suggestions: [
          optB.labelUrdu,
          optA.labelUrdu,
          'آج کا کردار سازی کا چیلنج',
          'میرا اگلا قدم بتائیں'
        ]
      };
    } else {
      return {
        reply: `🧠 **Problem (Understanding the situation):**
${scenario.situationEn}

⏸️ **Stop & Pause (Emotional Check):**
${scenario.stopPauseStepEn}

⚖️ **Two Paths:**
🔴 **Path 1 (Impulsive Action):**
"${optA.labelEn}"
👉 *Immediate Impact:* ${optA.consequenceMap.immediateEffectEn}
👉 *Long-term Risk:* ${optA.consequenceMap.longTermEffectEn}

🟢 **Path 2 (Dignified & Wise Response):**
"${optB.labelEn}"
👉 *Immediate Impact:* ${optB.consequenceMap.immediateEffectEn}
👉 *Long-term Benefit:* ${optB.consequenceMap.longTermEffectEn}

📖 **Guidance [Source: ${optB.sourceLabelEn}]:**
${optB.islamicReferenceEn}

🎯 **ONE Practical Action Today:**
${optB.practicalActionEn}

⭐ **Next Step:**
Which path will you choose? Click the options below to reflect:`,
        suggestions: [
          optB.labelEn,
          optA.labelEn,
          'Character challenge today',
          'What should I do next?'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // 6. LIFE MENTOR: "اب مجھے کیا کرنا چاہیے؟" (What should I do now? / 6-Point Personalized Action Plan)
  // Connects: Skills, Daily Mission, Personal Growth, Quran & Hadith, Character, Career/Earning, Decision Making, Practical Life
  // ---------------------------------------------------------------------------
  const lifeMentorPatterns = [
    'مجھے آگے کیا کرنا چاہیے',
    'اب مجھے کیا کرنا چاہیے',
    'کیا کرنا چاہیے',
    'اب کیا کروں',
    'میرا اگلا قدم',
    'اگلا قدم',
    'اگلا بہترین قدم',
    'next step',
    'what should i do next',
    'what should i do',
    'what to do now',
    'آج کا کام',
    'today step',
    'priority',
    'آگے کیا',
    'رهنمائی',
    'رہنمائی',
    'road map',
    'roadmap',
    'مشورہ',
    'advice',
    'personal mentor',
    'life mentor',
    'مشیر'
  ];

  if (lifeMentorPatterns.some(p => q.includes(p))) {
    // Detect learner struggle or mastery signals from query & history
    const isExplicitStruggle = q.includes('مشکل') || q.includes('سمجھ نہیں') || q.includes('پھنس') || q.includes('مایوس') || q.includes('hard') || q.includes('stuck') || q.includes('difficult');
    const isExplicitMastery = q.includes('آسان') || q.includes('سمجھ آ گیا') || q.includes('کر لیا') || q.includes('اگلا چیلنج') || q.includes('easy') || q.includes('done') || q.includes('completed');

    const mentorInsight = userProfile 
      ? generateAdaptiveMentorInsight(userProfile, language)
      : null;

    let difficultyState: 'revision_simplified' | 'advanced_challenge' | 'balanced' = 
      mentorInsight ? mentorInsight.teachingStyle.difficultyState : 'balanced';

    if (isExplicitStruggle) {
      difficultyState = 'revision_simplified';
    } else if (isExplicitMastery) {
      difficultyState = 'advanced_challenge';
    }

    const streak = userProfile?.streakDays || 0;
    const completedCount = userProfile?.completedLessonIds?.length || 0;
    const pointsCount = userProfile?.points || 0;
    const missionCount = userProfile?.completedGrowthTaskIds?.length || 0;

    if (isUrdu) {
      // 1. میری موجودہ حالت (Current State)
      let currentStateUrdu = '';
      if (difficultyState === 'revision_simplified') {
        currentStateUrdu = `آپ **"${courseTitle}"** سیکھ رہے ہیں (تسلسل: ${streak} دن، مکمل اسباق: ${completedCount})۔ آپ کو پچھلے تصور میں تھوڑی دشواری پیش آئی ہے—یہ سیکھنے کا فطری اور مثبت حصہ ہے!`;
      } else if (difficultyState === 'advanced_challenge') {
        currentStateUrdu = `ماشاءاللہ آپ کا تسلسل **${streak} دن** اور پوائنٹس **${pointsCount}** ہیں۔ آپ نے "${courseTitle}" کے بنیادی اسباق میں شاندار مہارت حاصل کی ہے اور اب آپ کا ذہن اگلے بڑے عملی پروجیکٹ کے لیے بالکل تیار ہے۔`;
      } else {
        currentStateUrdu = `آپ فعال طور پر **"${courseTitle}"** کے اسباق جاری رکھے ہوئے ہیں (تسلسل: ${streak} دن، کل پوائنٹس: ${pointsCount})۔ آپ کی پیش رفت متوازن اور مثبت ہے۔`;
      }

      // 2. میری سب سے اہم ضرورت (Most Important Need)
      let importantNeedUrdu = '';
      if (difficultyState === 'revision_simplified') {
        importantNeedUrdu = `جلد بازی اور پریشانی سے بچتے ہوئے بنیادی تصور کی **۵ منٹ کی آسان نظر ثانی** اور ایک سادہ گھریلو مثال سے تصور کو ذہن نشین کرنا۔`;
      } else if (difficultyState === 'advanced_challenge') {
        importantNeedUrdu = `سیکھے گئے ہنر کو **ایک حقیقی پورٹ فولیو پروجیکٹ یا حلال روزگار کے عملی نمونے** میں تبدیل کرنا تاکہ آپ کا اعتماد اور مہارت دوچند ہو۔`;
      } else {
        importantNeedUrdu = `آج کے سبق سے **صرف ۱ ٹھوس مہارت** حاصل کر کے اسے اپنے موبائل پر عملاً مشق کرنا اور روزمرہ زندگی یا گھر کے کام میں استعمال کرنا۔`;
      }

      // 3. آج کا ایک بہترین قدم (Today's Single Best Step)
      let bestStepTitleUrdu = '';
      let bestStepDescUrdu = '';
      let estimatedTimeUrdu = '';
      let stepsToCompleteUrdu = '';
      let nextMilestoneUrdu = '';

      if (difficultyState === 'revision_simplified') {
        bestStepTitleUrdu = `سبق "${currentLesson?.titleUrdu || courseTitle}" کا آسان خلاصہ اور ۵ منٹ مشق`;
        bestStepDescUrdu = `سبق کے مشکل الفاظ چھوڑ کر صرف بنیادی ۳ نکات پڑھیں اور ذہن پر کوئی بوجھ نہ لیں۔`;
        estimatedTimeUrdu = `صرف ۵ سے ۸ منٹ`;
        stepsToCompleteUrdu = `۱. گہرا سانس لیں اور موبائل کے دیگر تمام نوٹیفکیشن ۵ منٹ کے لیے بند کریں۔
۲. سبق کا آسان خلاصہ پڑھیں یا استاد سے کہیں کہ *"مجھے اور آسان مثال دیں"*۔
۳. کاپی پر صرف ایک لائن لکھیں کہ یہ ٹول کس کام آتا ہے۔`;
        nextMilestoneUrdu = `اس آسان مشق کے بعد آپ کا اعتماد بحال ہو جائے گا اور اگلا کوئز آپ ۱۰۰٪ آسانی سے حل کر سکیں گے۔`;
      } else if (difficultyState === 'advanced_challenge') {
        bestStepTitleUrdu = `اعلیٰ عملی پروجیکٹ: "${courseTitle}" کا حقیقی نمونہ تیار کریں`;
        bestStepDescUrdu = `اپنے ہنر سے ایک مکمل قابلِ استعمال چیز (مثلاً دکان کا اشتہار، گھریلو بجٹ فائل یا AI پرامپٹ ٹیمپلیٹ) بنائیں۔`;
        estimatedTimeUrdu = `۱۵ سے ۲۰ منٹ`;
        stepsToCompleteUrdu = `۱. اپنے موبائل پر ایپ یا ٹول کھولیں اور ایک نیا پروجیکٹ شروع کریں۔
۲. دیانتداری اور عمدگی (احسان) کے ساتھ مکمل ڈیزائن یا فائل فائنل کریں۔
۳. اسے اپنے فون میں محفوظ کریں اور کسی ساتھی یا گھر والے کو دکھا کر فیڈ بیک لیں۔`;
        nextMilestoneUrdu = `اس شاہکار کو اپنے "Skill to Opportunity Path" میں شامل کر کے پہلے حلال آرڈر یا خدمتِ خلق کا راستہ کھولنا۔`;
      } else {
        const lessonName = currentLesson?.titleUrdu || `کورس "${courseTitle}" کا اگلا سبق`;
        bestStepTitleUrdu = `${lessonName}`;
        bestStepDescUrdu = `اس سبق کی مختصر ویڈیو/خلاصہ دیکھیں اور تجویز کردہ عملی ٹاسک موبائل پر کر کے دیکھیں۔`;
        estimatedTimeUrdu = `${currentLesson?.durationMinutes || 12} منٹ`;
        stepsToCompleteUrdu = `۱. سبق کھولیں اور اہم نکات کو توجہ سے سنیں۔
۲. دی گئی ۵ منٹ کی عملی مشق اپنے ہاتھ سے موبائل پر مکمل کریں۔
۳. مختصر کوئز حل کر کے +۲۵ پوائنٹس حاصل کریں۔`;
        nextMilestoneUrdu = `سبق مکمل ہوتے ہی آج کا روزانہ مشن اور اخلاقی چیلنج خودکار طور پر ان لاک ہو جائے گا۔`;
      }

      // Verified Quran & Hadith Guidance
      const activeIslamic = activeIslamicLesson;
      const quranVerse = activeIslamic.quranGuidance.translationUrdu;
      const quranSource = activeIslamic.quranGuidance.surahAndAyahUrdu;
      const hadithText = activeIslamic.hadithGuidance.textUrdu;
      const hadithSource = activeIslamic.hadithGuidance.sourceReferenceUrdu;

      return {
        reply: `بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِیْمِ

وعلیکم السلام ${salutation}! استاد سیکھو (Life Mentor) کے مطابق آپ کا **۶ نکاتی ذاتی لائحہ عمل**:

🧭 **۱. میری موجودہ حالت:**
${currentStateUrdu}

🎯 **۲. میری سب سے اہم ضرورت:**
${importantNeedUrdu}

⚡ **۳. آج کا ایک بہترین قدم:**
**"${bestStepTitleUrdu}"**
${bestStepDescUrdu}

⏱️ **۴. اس قدم کے لیے اندازاً وقت:**
**${estimatedTimeUrdu}** • 🌟 انعام: +۲۵ پوائنٹس

🛠️ **۵. مکمل کرنے کا آسان طریقہ:**
${stepsToCompleteUrdu}

🚀 **۶. مکمل ہونے کے بعد اگلا قدم:**
${nextMilestoneUrdu}

---
📖 **مستند قرآنی رہنمائی:** "${quranVerse}" [${quranSource}]
📜 **حدیث نبوی ﷺ:** "${hadithText}" [${hadithSource}]

💡 **مشیر کا اصول:** مستقل مزاجی، حلال محنت اور اخلاق ہی حقیقی کامیابی کی کنجی ہیں۔ کیا آپ ابھی یہ قدم شروع کرنے کے لیے تیار ہیں؟`,
        suggestions: [
          'الف: جی ہاں، میں ابھی شروع کر رہا ہوں!',
          'یہ تھوڑا مشکل ہے، مزید آسان کریں',
          'آج کا مشن اور اچھا کام دکھائیں',
          'حلال روزگار کا طریقہ بتائیں'
        ]
      };
    } else {
      // English 6-Point Mentor Response
      let currentStateEn = '';
      if (difficultyState === 'revision_simplified') {
        currentStateEn = `You are focusing on **"${courseTitle}"** (Streak: ${streak} days, Completed: ${completedCount} lessons). You recently faced some friction—this is a completely natural stepping stone in mastery!`;
      } else if (difficultyState === 'advanced_challenge') {
        currentStateEn = `Masha’Allah, your streak is **${streak} days** with **${pointsCount} pts**. You have demonstrated consistent mastery and are ready to create a real-world deliverable.`;
      } else {
        currentStateEn = `You are making steady progress in **"${courseTitle}"** (Streak: ${streak} days, Points: ${pointsCount}). Your learning pace is well-balanced.`;
      }

      let importantNeedEn = '';
      if (difficultyState === 'revision_simplified') {
        importantNeedEn = `A calm, pressure-free **5-minute gentle review** using a relatable everyday analogy to solidify understanding.`;
      } else if (difficultyState === 'advanced_challenge') {
        importantNeedEn = `Transforming your learned skill into a **tangible portfolio artifact or halal livelihood sample** to build real confidence.`;
      } else {
        importantNeedEn = `Extracting **1 concrete practical skill** today and testing it directly hands-on on your mobile device.`;
      }

      let bestStepTitleEn = '';
      let bestStepDescEn = '';
      let estimatedTimeEn = '';
      let stepsToCompleteEn = '';
      let nextMilestoneEn = '';

      if (difficultyState === 'revision_simplified') {
        bestStepTitleEn = `Gentle Review: "${currentLesson?.titleEn || courseTitle}" (5-Minute Walkthrough)`;
        bestStepDescEn = `Set aside technical jargon and focus purely on the 3 core takeaways without pressure.`;
        estimatedTimeEn = `Only 5 to 8 minutes`;
        stepsToCompleteEn = `1. Take a relaxing breath and mute phone notifications for 5 minutes.
2. Read the simple bullet summary or ask: "Explain with a simpler analogy".
3. Write down 1 sentence in your notebook on how this helps daily life.`;
        nextMilestoneEn = `Re-taking the quick quiz with full clarity and confidence.`;
      } else if (difficultyState === 'advanced_challenge') {
        bestStepTitleEn = `Applied Project: Build a real deliverable in "${courseTitle}"`;
        bestStepDescEn = `Create a functional artifact (e.g. shop banner, family budget ledger, or custom prompt template).`;
        estimatedTimeEn = `15 to 20 minutes`;
        stepsToCompleteEn = `1. Open your design or productivity tool and launch a clean canvas.
2. Craft a complete, honest, and high-quality deliverable.
3. Save it to your phone and show it to a family member or peer for constructive feedback.`;
        nextMilestoneEn = `Attaching this artifact to your "Skill to Opportunity Path" for ethical service and earning opportunities.`;
      } else {
        const lessonName = currentLesson?.titleEn || `Next lesson in "${courseTitle}"`;
        bestStepTitleEn = `${lessonName}`;
        bestStepDescEn = `Review the core takeaway and test the 5-minute hands-on practice directly.`;
        estimatedTimeEn = `${currentLesson?.durationMinutes || 12} minutes`;
        stepsToCompleteEn = `1. Open the lesson and absorb the key principles.
2. Spend 5 minutes applying the concept directly on your phone.
3. Complete the quick quiz to lock in +25 points.`;
        nextMilestoneEn = `Unlocking today's practical mission and character reflection.`;
      }

      const activeIslamic = activeIslamicLesson;
      const quranVerse = activeIslamic.quranGuidance.translationEn;
      const quranSource = activeIslamic.quranGuidance.surahAndAyahEn;
      const hadithText = activeIslamic.hadithGuidance.textEn;
      const hadithSource = activeIslamic.hadithGuidance.sourceReferenceEn;

      return {
        reply: `In the name of Allah, the Most Gracious, the Most Merciful.

Welcome, ${salutation}! Here is your **6-Point Personalized Life Mentor Roadmap**:

🧭 **1. My Current State:**
${currentStateEn}

🎯 **2. My Most Important Need:**
${importantNeedEn}

⚡ **3. Today's Single Best Step:**
**"${bestStepTitleEn}"**
${bestStepDescEn}

⏱️ **4. Estimated Time Needed:**
**${estimatedTimeEn}** • 🌟 Reward: +25 points

🛠️ **5. Simple Way to Complete:**
${stepsToCompleteEn}

🚀 **6. Next Step Upon Completion:**
${nextMilestoneEn}

---
📖 **Verified Quranic Guidance:** "${quranVerse}" [${quranSource}]
📜 **Authentic Hadith:** "${hadithText}" [${hadithSource}]

💡 **Mentor Principle:** Consistency, honest diligence, and moral excellence are the foundations of true success. Are you ready to begin this step now?`,
        suggestions: [
          'A: Yes, I am starting right now!',
          'This is a bit difficult, make it simpler',
          'Show me today’s mission and good deed',
          'Guide me on halal earning'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 1.5: "میں آج کیا اچھا کام کر سکتا ہوں؟" / GOOD DEEDS & POSITIVE IMPACT
  // ---------------------------------------------------------------------------
  const goodDeedPatterns = [
    'کیا اچھا کام',
    'اچھا کام',
    'آج کا اچھا کام',
    'کوئی اچھا کام',
    'نیکی',
    'صدقہ',
    'مثبت کام',
    'خدمت',
    'what good deed',
    'good deed',
    'positive impact',
    'how can i help today',
    'what good can i do'
  ];

  if (goodDeedPatterns.some(p => q.includes(p))) {
    const deed = userProfile ? getRecommendedGoodDeed(userProfile) : GOOD_DEEDS_DATA[0];

    if (isUrdu) {
      return {
        reply: `ماشاءاللہ ${salutation}! "میں آج کیا اچھا کام کر سکتا ہوں؟" یہ سوچ ایک باشعور اور باکردار انسان کی پہچان ہے۔

🌱 **آج کا تجویز کردہ اچھا کام:**
${deed.categoryEmoji} **${deed.titleUrdu}**
⏱️ **درکار وقت:** تقریباً ${deed.estimatedMinutes} منٹ • 🏷️ **زمرہ:** ${deed.categoryUrdu} • 🌟 **انعام:** +${deed.points} پوائنٹس

📝 **تفصیل:**
${deed.descriptionUrdu}

🎯 **آج کا ایک عملی قدم:**
${deed.actionStepUrdu}

💡 **صلاحیت سے تعلق (Personal Growth Link):**
یہ کام انجام دے کر آپ اپنی **"${deed.targetSkillUrdu}"** کی صلاحیت کو نکھار رہے ہیں۔

${deed.quranOrHadithRefUrdu ? `📖 **مستند رہنمائی:**\n${deed.quranOrHadithRefUrdu}\n` : ''}
---
✨ آپ یہ عمل مکمل کر کے ہوم اسکرین پر "🌱 آج کا اچھا کام" کارڈ سے مکمل کر سکتے ہیں۔`,
        suggestions: [
          'کوئی اور اچھا کام بتائیں',
          'خاندان کے لیے اچھا کام بتائیں',
          'محلے اور صفائی کا اچھا کام بتائیں',
          'میرا اگلا تعلیمی قدم کیا ہے؟'
        ]
      };
    } else {
      return {
        reply: `Masha’Allah, ${salutation}! Asking "What good deed can I do today?" is the hallmark of a mindful and purposeful life.

🌱 **Today’s Recommended Good Deed:**
${deed.categoryEmoji} **${deed.titleEn}**
⏱️ **Estimated Time:** ~${deed.estimatedMinutes} mins • 🏷️ **Category:** ${deed.categoryEn} • 🌟 **Reward:** +${deed.points} pts

📝 **Overview:**
${deed.descriptionEn}

🎯 **One Practical Action Step:**
${deed.actionStepEn}

💡 **Personal Growth Connection:**
By doing this action, you are strengthening your **"${deed.targetSkillEn}"** competence.

${deed.quranOrHadithRefEn ? `📖 **Guidance Reference:**\n${deed.quranOrHadithRefEn}\n` : ''}
---
✨ You can mark this action completed on your Home Screen under "🌱 Today’s Good Deed".`,
        suggestions: [
          'Show another good deed',
          'Suggest a deed for Family',
          'Suggest a deed for Community',
          'What is my next learning step?'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 2: CHALLENGE INQUIRIES ("چیلنج", "آج کا چیلنج", "۷ روزہ", "کردار چیلنج")
  // ---------------------------------------------------------------------------
  const challengePatterns = [
    'چیلنج',
    'آج کا چیلنج',
    'سات روزہ',
    '۷ روزہ',
    'کردار سازی',
    'ہنر کا چیلنج',
    'خدمت خلق',
    'خدمتِ خلق',
    'کوئی چیلنج دیں',
    'challenge',
    'daily challenge',
    '7-day challenge',
    'character challenge',
    'skill challenge',
    'community challenge'
  ];

  if (challengePatterns.some(p => q.includes(p))) {
    const recommendedChallenges = getRecommendedChallengesForUser(userProfile, language);
    let chosenChallenge = recommendedChallenges[0];

    if (q.includes('۷') || q.includes('سات') || q.includes('7-day') || q.includes('seven')) {
      chosenChallenge = recommendedChallenges.find(c => c.type === 'seven_day') || chosenChallenge;
    } else if (q.includes('کردار') || q.includes('اخلاق') || q.includes('character')) {
      chosenChallenge = recommendedChallenges.find(c => c.type === 'character') || chosenChallenge;
    } else if (q.includes('ہنر') || q.includes('skill') || q.includes('ڈیزائن')) {
      chosenChallenge = recommendedChallenges.find(c => c.type === 'skill') || chosenChallenge;
    } else if (q.includes('خدمت') || q.includes('community') || q.includes('معاشرہ')) {
      chosenChallenge = recommendedChallenges.find(c => c.type === 'community') || chosenChallenge;
    }

    if (isUrdu) {
      return {
        reply: `ماشاءاللہ ${salutation}! چیلنج قبول کرنا بلند ہمت اور باعمل انسان کی پہچان ہے۔

🏆 **${chosenChallenge.typeUrdu}: "${chosenChallenge.titleUrdu}"**
🏷️ **زمرہ:** ${chosenChallenge.categoryUrdu} • ⏱️ **وقت:** ${chosenChallenge.estimatedMinutes} منٹ • 🌟 **انعام:** +${chosenChallenge.points} پوائنٹس

📝 **چیلنج کی تفصیل:**
${chosenChallenge.descriptionUrdu}

🎯 **آج کا عملی اقدام:**
${chosenChallenge.actionUrdu}

${chosenChallenge.quranOrHadithRefUrdu ? `📜 **ہدایت و برکت:**\n${chosenChallenge.quranOrHadithRefUrdu}\n` : ''}
🏅 **کامیابی کا اعزاز:** "${chosenChallenge.badgeNameUrdu}"

---
🔍 **آپ کا ارادہ:**
کیا آپ یہ چیلنج مکمل کر کے اپنے پوائنٹس اور تسلسل (Streak) میں اضافہ کرنا چاہتے ہیں؟
(الف: جی ہاں، چیلنج قبول ہے! / ب: مجھے کوئی اور چیلنج دکھائیں)`,
        suggestions: [
          'الف: جی ہاں، چیلنج قبول ہے!',
          'کردار سازی کا چیلنج بتائیں',
          'خدمتِ خلق کا چیلنج بتائیں',
          'میرا اگلا قدم کیا ہے؟'
        ]
      };
    } else {
      return {
        reply: `Masha’Allah, ${salutation}! Taking on practical challenges builds genuine character and mastery.

🏆 **${chosenChallenge.typeEn}: "${chosenChallenge.titleEn}"**
🏷️ **Category:** ${chosenChallenge.categoryEn} • ⏱️ **Time:** ${chosenChallenge.estimatedMinutes} mins • 🌟 **Reward:** +${chosenChallenge.points} pts

📝 **Challenge Overview:**
${chosenChallenge.descriptionEn}

🎯 **Practical Action:**
${chosenChallenge.actionEn}

${chosenChallenge.quranOrHadithRefEn ? `📜 **Inspiration:**\n${chosenChallenge.quranOrHadithRefEn}\n` : ''}
🏅 **Milestone Badge:** "${chosenChallenge.badgeNameEn}"

---
🔍 **Your Commitment:**
Are you ready to undertake this challenge today?
(A: Yes, challenge accepted! / B: Show another challenge)`,
        suggestions: [
          'A: Yes, challenge accepted!',
          'Show Character Challenge',
          'Show Community Service Challenge',
          'What should I do next?'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 3: "WHERE AM I WEAK?" / "میں کہاں کمزور ہوں؟" / QUIZ MISTAKES
  // Strictly constructive, encouraging, non-diagnostic!
  // ---------------------------------------------------------------------------
  const weaknessPatterns = [
    'کہاں کمزور ہوں',
    'میری کمزوری',
    'کمزور',
    'کمزوری کیا ہے',
    'میری غلطی',
    'غلطیاں',
    'سیکھنے میں دشواری',
    'where am i weak',
    'my weakness',
    'weak area',
    'my mistakes',
    'struggling'
  ];

  if (weaknessPatterns.some(p => q.includes(p))) {
    const scores = userProfile ? calculateGrowthScores(userProfile) : null;
    let focusAreaTitleUrdu = 'عملی مشق اور کوئز کے اہم نکات';
    let focusAreaTitleEn = 'Hands-on Practice & Key Takeaways';
    let focusAreaAppUrdu = 'سبق کو دوبارہ دیکھ کر ۵ منٹ ہاتھ سے موبائل پر مشق کرنا';
    let focusAreaAppEn = 'Reviewing key concepts and testing them hands-on for 5 minutes';

    if (scores) {
      const sorted = Object.values(scores).sort((a, b) => a.score - b.score);
      if (sorted.length > 0) {
        focusAreaTitleUrdu = sorted[0].titleUrdu;
        focusAreaTitleEn = sorted[0].titleEn;
        focusAreaAppUrdu = sorted[0].realLifeApplicationUrdu;
        focusAreaAppEn = sorted[0].realLifeApplicationEn;
      }
    }

    if (isUrdu) {
      return {
        reply: `پیارے ${salutation}! سب سے پہلے تو یہ جان لیں کہ سیکھنے کے سفر میں کوئی انسان "کمزور" نہیں ہوتا، بلکہ ہر شخص کے کچھ شعبے **مزید نکھار اور ۵ منٹ مشق کے منتظر** ہوتے ہیں۔ 🌟

آپ کے حالیہ سیکھنے اور کوئز کے جائزے کے مطابق، آپ **"${focusAreaTitleUrdu}"** میں تھوڑی سی مشق کر کے شاندار ترقی کر سکتے ہیں۔

💡 **استاد کا حوصلہ افزا مشورہ:**
1. **ایک بار پھر کوشش کریں:** غلطی ہونا اس بات کا ثبوت ہے کہ آپ سنجیدگی سے کوشش کر رہے ہیں۔
2. **آپ کامیابی کے بہت قریب ہیں:** چھوٹے قدموں کا تسلسل ہی کاریگری سکھاتا ہے۔
3. **گھریلو مثال:** جب ہم سائیکل چلانا یا روٹی پکانا سیکھتے ہیں تو پہلی بار تھوڑی بے ترتیبی ہوتی ہے، لیکن بار بار کرنے سے ہاتھ پکا ہو جاتا ہے۔

🎯 **آج کی ۵ منٹ کی آسان مشق:**
${focusAreaAppUrdu}

📜 **حدیث نبوی ﷺ:** "بے شک اللہ پسند فرماتا ہے کہ جب تم میں سے کوئی شخص کوئی کام کرے تو اسے مہارت اور اچھے طریقے سے کرے۔" (شعب الایمان: ۴۹۲۹)

🔍 **آپ کی فہم کی جانچ:**
کیا آپ اس شعبے میں صرف ۵ منٹ کی دوستانہ مشق کے لیے تیار ہیں؟
(الف: جی ہاں، بالکل تیار ہوں! / ب: مجھے کوئی اور آسان مثال دیں)`,
        suggestions: [
          'الف: جی ہاں، بالکل تیار ہوں!',
          'میرا اگلا قدم کیا ہے؟',
          'مجھے سمجھ نہیں آئی، آسان الفاظ میں بتائیں۔',
          'میرے مضبوط ترین شعبے کون سے ہیں؟'
        ]
      };
    } else {
      return {
        reply: `Dear ${salutation}! Please know that in true lifelong learning, no one is "weak" — rather, certain areas simply welcome **a friendly 5 minutes of hands-on practice**. 🌟

Based on your recent progress and activities, you have a wonderful opportunity to polish **"${focusAreaTitleEn}"**.

💡 **Encouraging Mentorship:**
1. **Try once again gently:** A mistake is merely the first doorway to mastery.
2. **You are very close:** Steady effort always triumphs over passive hesitation.
3. **Everyday Analogy:** Just like learning to ride a bike or cooking, early wobbles naturally give way to effortless confidence.

🎯 **Today's 5-Minute Practice:**
${focusAreaAppEn}

📜 **Hadith:** "Indeed, Allah loves that when one of you does a job, they perform it with excellence and care." (Shu’ab al-Iman: 4929)

🔍 **Quick Check Question:**
Would you like to spend 5 friendly minutes practicing this concept?
(A: Yes, let’s do it! / B: Explain with another simple analogy)`,
        suggestions: [
          'A: Yes, let’s do it!',
          'What should I do next?',
          'I did not understand, explain simpler.',
          'What are my strongest areas?'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 4: "I DIDN'T UNDERSTAND" (مجھے سمجھ نہیں آئی / دوبارہ بتائیں)
  // Deep empathy, ultra-simplified everyday household analogy, 1 concrete example,
  // 1 check question, 1 small 5-min step.
  // ---------------------------------------------------------------------------
  const didNotUnderstandPatterns = [
    'سمجھ نہیں آئی',
    'سمجھ نہیں آیا',
    'نہیں سمجھی',
    'نہیں سمجھا',
    'دوبارہ بتائیں',
    'دوبارہ سمجھائیں',
    'آسان الفاظ میں',
    'آسان کریں',
    'مشکل ہے',
    'پتہ نہیں چلا',
    'not understand',
    'did not understand',
    'didnt understand',
    'too difficult',
    'explain again',
    'simpler',
    'confused',
  ];

  if (didNotUnderstandPatterns.some((pat) => q.includes(pat))) {
    const lastAssistantMsg = [...chatHistory]
      .reverse()
      .find((m) => m.role === 'assistant')?.text || '';

    let topic = 'اس تصور';
    let topicEn = 'this concept';

    if (currentLesson) {
      topic = currentLesson.titleUrdu;
      topicEn = currentLesson.titleEn;
    } else if (currentCourse) {
      topic = currentCourse.titleUrdu;
      topicEn = currentCourse.titleEn;
    } else if (lastAssistantMsg.includes('AI') || lastAssistantMsg.includes('مصنوعی')) {
      topic = 'مصنوعی ذہانت (AI)';
      topicEn = 'Artificial Intelligence (AI)';
    } else if (lastAssistantMsg.includes('کینوا') || lastAssistantMsg.includes('Canva')) {
      topic = 'کینوا گرافک ڈیزائننگ';
      topicEn = 'Canva Graphic Design';
    } else if (lastAssistantMsg.includes('سولر') || lastAssistantMsg.includes('Solar')) {
      topic = 'سولر و الیکٹریکل سیفٹی';
      topicEn = 'Solar & Electrical Safety';
    } else if (lastAssistantMsg.includes('کاروبار') || lastAssistantMsg.includes('business')) {
      topic = 'چھوٹا کاروبار اور نفع نقصان';
      topicEn = 'Small Business & Profit';
    }

    if (isUrdu) {
      return {
        reply: `کوئی بات نہیں ${salutation}! بالکل پریشان نہ ہوں۔

سیکھنے کے عمل میں کسی بات کا پہلی بار سمجھ نہ آنا **بہت ہی عام اور قدرتی بات ہے**۔ اصل دانائی یہ ہے کہ آپ نے بلا جھجھک سوال پوچھا—یہ آپ کے سچے جذبے کی علامت ہے! شاباش! 🌱

آئیے **"${topic}"** کو ایک بالکل سیدھی گھریلو مثال سے سمجھتے ہیں:

📌 **آسان روزمرہ مثال:**
فرض کریں آپ کے محلے میں ایک بزرگ یا تجربہ کار کاریگر ہیں جن کے پاس زندگی اور کام کے تمام سوالات کے حل موجود ہیں۔ جب بھی آپ کو کوئی مسئلہ ہوتا ہے، آپ ان کے پاس جاتے ہیں، وہ مسکرا کر آپ کی بات سنتے ہیں اور بغیر کسی مشکل انگریزی کے آپ کی مادری زبان میں سیدھا حل بتا دیتے ہیں۔
کمپیوٹر یا موبائل کا یہ اوزار بھی بالکل ایسے ہی کام کرتا ہے۔ آپ کو کسی مشکل کوڈنگ کی ضرورت نہیں، بس عام بول چال میں بات کرنی ہے۔

🎯 **آج کا چھوٹا عملی قدم (۲ منٹ):**
ایک کاپی اور قلم لیں، اور صرف **۱ جملہ** لکھیں کہ آپ اس ہنر کی مدد سے اپنے گھر، دکان یا خاندان کا کون سا کام آسان بنانا چاہتے ہیں۔

🔍 **آپ کی فہم کی جانچ (ایک آسان سوال):**
کیا سیکھنے کے دوران سوال پوچھنا اور دوبارہ سمجھنا اچھی عادت ہے؟
(الف: جی ہاں، بالکل! / ب: نہیں)`,
        suggestions: [
          'الف: جی ہاں، سوال پوچھنا بہترین عادت ہے!',
          'مجھے اس کا اگلا عملی کام بتائیں۔',
          'میرا اگلا قدم کیا ہے؟',
        ],
      };
    } else {
      return {
        reply: `No worries at all, ${salutation}! Please do not worry.

It is **completely normal and healthy** if something is not clear immediately. Asking questions is the hallmark of every great learner! 🌟

Let's break down **"${topicEn}"** using a simple everyday analogy:

📌 **Simple Everyday Analogy:**
Think of having a wise, experienced friend or village artisan right next to you. Whenever you face a puzzle, you just speak to them in your own natural language, and they guide your hands step-by-step without using complicated technical terms. That is exactly how this tool works!

🎯 **Today's 2-Minute Step:**
Write down just **1 sentence** on a piece of paper about what real chore or task you wish to simplify using this skill.

🔍 **Quick Check Question:**
Is asking for clarification the right way to master a skill?
(A: Yes, absolutely! / B: No)`,
        suggestions: [
          'A: Yes, absolutely!',
          'Show me today’s practical task.',
          'What is my next step?',
        ],
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 5: ISLAMIC GUIDANCE, CHARACTER & ETHICS
  // Strict authenticity: Quran with Surah/Ayah, Hadith with Bukhari/Muslim,
  // Sahaba stories, clear distinction.
  // ---------------------------------------------------------------------------
  const islamicPatterns = [
    'اخلاق',
    'کردار',
    'سچائی',
    'امانت',
    'صبر',
    'غصہ',
    'غصے',
    'والدین',
    'خدمت',
    'رزق',
    'نیت',
    'وعدہ',
    'تقوی',
    'اسلامی',
    'حدیث',
    'قرآن',
    'شکر',
    'character',
    'ethics',
    'patience',
    'anger',
    'parents',
    'truth',
    'trust',
    'islamic',
    'quran',
    'hadith',
    'gratitude'
  ];

  if (islamicPatterns.some(p => q.includes(p))) {
    const quran = activeIslamicLesson.quranGuidance;
    const hadith = activeIslamicLesson.hadithGuidance;
    const sahaba = activeIslamicLesson.sahabaLesson;
    const practical = activeIslamicLesson.practicalAction;

    if (isUrdu) {
      return {
        reply: `بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِیْمِ

وعلیکم السلام و رحمتہ اللہ، ${salutation}! کردار اور اخلاقیات ہی انسانی شخصیت کا اصل حسن اور روزگار میں برکت کا ذریعہ ہیں۔

📖 **قرآن مجید کی رہنمائی:**
"${quran.translationUrdu}"
📌 **حوالہ:** ${quran.surahAndAyahUrdu}
💡 **عملی مفہوم:** ${quran.practicalMoralExplanationUrdu}

📜 **حدیث نبوی ﷺ:**
"${hadith.textUrdu}"
📌 **مستند حوالہ:** ${hadith.sourceReferenceUrdu}
💡 **تعلیمی نکتہ:** ${hadith.explanationUrdu}

🏛️ **صحابہ کرامؓ سے سبق (${sahaba.sahabiNameUrdu}):**
${sahaba.storyUrdu}
🌱 **نوجوانوں کے لیے سبق:** ${sahaba.lessonForYouthUrdu}

🎯 **آج کا عملی اخلاقی چیلنج (${practical.estimatedMinutes} منٹ):**
**"${practical.titleUrdu}"**
${practical.actionUrdu}

🔍 **آپ کی فہم کی جانچ:**
اسلام میں حقیقی طاقتور اور کامیاب انسان کون ہے؟
(الف: جو غصے پر قابو رکھے اور سچائی پر قائم رہے / ب: جو تکبر کرے)`,
        suggestions: [
          'الف: جو غصے پر قابو رکھے اور سچ بولے',
          'والدین کی خدمت اور اطاعت کیسے کریں؟',
          'سچائی سے روزگار میں برکت کیسے ہوتی ہے؟',
          'میرا اگلا قدم کیا ہے؟'
        ]
      };
    } else {
      return {
        reply: `In the name of Allah, the Most Gracious, the Most Merciful.

Warm greetings, ${salutation}! Cultivating righteous character is the true foundation of professional excellence and spiritual peace.

📖 **Holy Quran Guidance:**
"${quran.translationEn}"
📌 **Reference:** ${quran.surahAndAyahEn}
💡 **Moral Explanation:** ${quran.practicalMoralExplanationEn}

📜 **Prophetic Hadith:**
"${hadith.textEn}"
📌 **Authentic Source:** ${hadith.sourceReferenceEn}
💡 **Takeaway:** ${hadith.explanationEn}

🏛️ **Lesson from the Sahaba (${sahaba.sahabiNameEn}):**
${sahaba.storyEn}
🌱 **Youth Takeaway:** ${sahaba.lessonForYouthEn}

🎯 **Today's Practical Character Action (${practical.estimatedMinutes} mins):**
**"${practical.titleEn}"**
${practical.actionEn}

🔍 **Quick Check Question:**
Who is truly strong according to authentic Islamic teachings?
(A: One who exercises self-control and upholds truth / B: One who acts with arrogance)`,
        suggestions: [
          'A: One who controls anger and speaks truth',
          'How do honesty and truth bring blessing to work?',
          'What are practical ways to serve parents?',
          'What should I do next?'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 5.8: 15-MINUTE MICRO-LEARNING ("میں آج صرف 15 منٹ میں کیا سیکھ سکتا ہوں؟")
  // ---------------------------------------------------------------------------
  if (
    q.includes('15 منٹ') ||
    q.includes('مختصر وقت') ||
    q.includes('تھوڑا وقت') ||
    q.includes('15 min') ||
    q.includes('15 minutes') ||
    q.includes('quick learning')
  ) {
    if (isUrdu) {
      return {
        reply: `بہت خوب ${salutation}! روزانہ کے صرف ۱۵ منٹ تسلسل کے ساتھ دینا مہینے کے ساڑھے سات گھنٹے بنتے ہیں جو انسان کو کسی بھی ہنر میں ماہر بنا دیتے ہیں۔

📌 **۱۵ منٹ کا سنہری مائیکرو لرننگ فارمولا:**
1. **پہلے ۵ منٹ (سیکھیں):** اپنے فعال کورس **"${courseTitle}"** کا صرف ایک بنیادی نکتہ یا سبق دھیان سے پڑھیں۔
2. **درمیانی ۷ منٹ (ہاتھ سے مشق):** موبائل ایپ کھولیں اور اس فیچر کو خود آزما کر دیکھیں۔
3. **آخری ۳ منٹ (جائزہ و سوال):** جو سیکھا، اسے کاپی پر ایک جملے میں لکھیں اور فوری کوئز حل کریں۔

📌 **آسان مثال:**
جیسے روزانہ کا ایک قطرہ پانی مٹکے کو بھر دیتا ہے، ویسے ہی روزانہ کے ۱۵ منٹ کی مشق آپ کو ہنر مند اور خود کفیل بناتی ہے۔

🎯 **آج کا فوری عملی کام (15 منٹ):**
ابھی Seekho کے ہوم پیج پر جا کر آج کا ۵ منٹ کا سبق اور ۷ منٹ کی مشق مکمل کریں۔

🔍 **آپ کی فہم کی جانچ:**
کیا آپ ابھی ۱۵ منٹ کی مشق شروع کرنے کے لیے تیار ہیں؟
(الف: جی ہاں، بالکل! / ب: مجھے کوئی اور ہنر دکھائیں)`,
        suggestions: [
          'الف: جی ہاں، بالکل!',
          'آج کا ۵ منٹ کا کوئز حل کریں',
          'میرا اگلا ہدف کیا ہونا چاہیے؟',
          'روزانہ تسلسل برقرار رکھنے کا راز'
        ]
      };
    } else {
      return {
        reply: `Terrific, ${salutation}! Spending 15 focused minutes every day equates to 7.5 hours a month—enough to gain real mastery in any skill.

📌 **The 15-Minute Micro-Learning Formula:**
1. **First 5 Mins (Learn):** Read 1 key concept in **"${courseTitle}"**.
2. **Middle 7 Mins (Hands-On):** Open the tool on your phone and practice it directly.
3. **Final 3 Mins (Review & Quiz):** Jot down 1 key takeaway and complete the quick quiz.

📌 **Simple Analogy:**
Small daily drops fill the vessel; 15 minutes of disciplined daily practice builds lifelong self-reliance.

🎯 **Today's Immediate Action (15 mins):**
Head to your Seekho course dashboard right now and complete today's micro-lesson.

🔍 **Quick Check Question:**
Are you ready to dive into today's 15-minute hands-on practice right now?
(A: Yes, absolutely! / B: Show another skill)`,
        suggestions: [
          'A: Yes, absolutely!',
          'Take today’s 5-minute quiz',
          'What should be my next goal?',
          'Secret to daily consistency'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 5.9: FREELANCING & SKILL ACQUISITION ("فری لانسنگ شروع کرنے کے لیے مجھے کیا سیکھنا چاہیے؟")
  // ---------------------------------------------------------------------------
  if (
    q.includes('فری لانسنگ') ||
    q.includes('freelanc') ||
    q.includes('آن لائن کام') ||
    q.includes('upwork') ||
    q.includes('fiverr')
  ) {
    if (isUrdu) {
      return {
        reply: `بہت شاندار سوال، ${salutation}! فری لانسنگ کا مطلب ہے اپنے ہنر کو باوقار اور حلال طریقے سے دوسروں کی خدمت کے لیے پیش کرنا۔

📌 **فری لانسنگ کے لیے مرحلہ وار ۴ لازمی قدم:**
1. **ایک ٹھوس ہنر منتخب کریں:** ابتدائی سطح پر سب سے تیز ہنر **کینوا (Canva) پر سوشل میڈیا ڈیزائننگ**، **موبائل پر شارٹ ویڈیوز/ریلز ایڈیٹنگ**، یا **اردو/انگریزی ٹرانسلیشن و ڈیٹا انٹری** ہے۔
2. **اپنا پورٹ فولیو (نمونہ کام) بنائیں:** کلائنٹ ڈھونڈنے سے پہلے خود ۳ سے ۵ بہترین ڈیزائن یا نمونے بنا کر اپنے پاس محفوظ کریں۔
3. **مقامی مارکیٹ سے آغاز کریں:** انٹرنیشنل ویب سائٹس پر جانے سے پہلے اپنے محلے کی دکانوں، اسکولوں، فیس بک گروپس اور دوستوں کو بتائیں کہ آپ ان کے لیے پوسٹر یا سوشل میڈیا کام کر سکتے ہیں۔
4. **ایمانداری اور حلال روزگار:** وقت کی پابندی، ایمانداری اور معیاری کام ہی فری لانسنگ میں برکت اور مستقل کلائنٹس کا راز ہے۔

🎯 **آج کا فوری عملی کام (15 منٹ):**
کینوا ایپ کھولیں اور کسی فرضی دکان (مثلاً "المدینہ کریانہ اسٹور" یا "نیو بیکرز") کے لیے ایک خوبصورت پروموشنل پوسٹر تیار کریں۔

🔍 **آپ کی فہم کی جانچ:**
فری لانسنگ میں مستقل کلائنٹ کس بنیاد پر ملتے ہیں؟
(الف: ایمانداری، معیاری کام اور وقت کی پابندی سے / ب: بغیر ہنر کے دعوے کرنے سے)`,
        suggestions: [
          'الف: ایمانداری اور معیاری کام سے',
          'کینوا سے پہلا پورٹ فولیو کیسے بنائیں؟',
          'مقامی دکانوں کو سوشل میڈیا ڈیزائن کیسے پیش کریں؟',
          'میرا اگلا قدم کیا ہے؟'
        ]
      };
    } else {
      return {
        reply: `Excellent question, ${salutation}! Freelancing means offering your valuable skills directly to clients with honesty and dignity.

📌 **4 Crucial Steps to Start Freelancing:**
1. **Master 1 High-Demand Skill:** Start with **Canva Social Media Design**, **Mobile Video/Reel Editing**, or **Translation & Data Entry**.
2. **Build a 3-5 Piece Portfolio:** Before approaching clients, create realistic sample banners or edited videos to show your capability.
3. **Start with Local Clients:** Approach local shops, schools, neighborhood businesses, and community groups first.
4. **Honesty & Halal Principles:** Timely delivery, transparent pricing, and quality work build long-term repeat clients.

🎯 **Today's Immediate Action (15 mins):**
Open Canva and design a flyer/poster for a local grocery store or bakery.

🔍 **Quick Check Question:**
What earns lasting freelance clients?
(A: Honesty, high quality, and punctuality / B: Empty claims without skills)`,
        suggestions: [
          'A: Honesty, high quality, and punctuality',
          'How to build first Canva portfolio?',
          'Offering social media design to local stores',
          'What is my next step?'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 6: SMALL BUSINESS / HOME BUSINESS ("گھر بیٹھ کر چھوٹا کاروبار کیسے شروع کروں؟")
  // ---------------------------------------------------------------------------
  const livelihoodPatterns = [
    'کاروبار',
    'دکان',
    'ملازمت',
    'نوکری',
    'پیسے',
    'آمدنی',
    'رزق',
    'حلال',
    'گھر کا خرچ',
    'business',
    'job',
    'income',
    'livelihood',
    'career',
    'shop',
    'money'
  ];

  if (livelihoodPatterns.some(p => q.includes(p))) {
    if (isUrdu) {
      return {
        reply: `ماشاءاللہ ${salutation}! حلال روزگار اور باوقار محنت کی اسلام میں بہت بڑی فضیلت ہے۔

💡 **کامیاب کاروبار اور ہنر کے ۳ سنہری اصول:**
1. **مسئلہ حل کریں:** گاہک اس کام کے پیسے دیتا ہے جو اس کا وقت یا پریشانی بچائے (مثلاً کینوا سے بینر بنا کر دینا، سولر ٹھیک کرنا یا آن لائن بل بھرنا)۔
2. **سچائی اور دیانت:** رسول اللہ ﷺ نے فرمایا: *"سچا اور امانت دار تاجر قیامت کے دن انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔"* (جامع ترمذی: ۱۲۰۹)
3. **روزانہ کا اندراج:** اپنے روزمرہ کے حسابات (آمدن و خرچ) کو ایک کاپی یا موبائل پر لازماً لکھیں۔

🎯 **آج کا چھوٹا عملی کام (۱۰ منٹ):**
ایک کاغذ پر لکھیں کہ آپ کے علاقے یا خاندان کے لوگوں کو کون سی ایسی ۳ سہولیات چاہیے جو آپ اپنے سیکھے ہوئے ہنر سے فراہم کر سکتے ہیں۔

🔍 **آپ کی فہم کی جانچ:**
کاروبار میں مستقل گاہک کس چیز سے بنتے ہیں؟
(الف: سچائی، وعدے کی پابندی اور خوش اخلاقی سے / ب: جھوٹ اور بحث سے)`,
        suggestions: [
          'الف: سچائی، وعدے کی پابندی اور خوش اخلاقی سے',
          'فری لانسنگ یا دکان کا بینر کیسے بنائیں؟',
          'میرا اگلا قدم کیا ہے؟',
          'مجھے سمجھ نہیں آئی، آسان الفاظ میں بتائیں۔'
        ]
      };
    } else {
      return {
        reply: `Masha’Allah, ${salutation}! Seeking honest, lawful livelihood (Halal Rizq) with personal effort is a deeply noble endeavor.

💡 **3 Golden Principles for Work & Business:**
1. **Solve a Real Problem:** Clients pay for work that saves them time or eliminates hassle (e.g. mobile graphic design, solar maintenance, or digital billing).
2. **Truthfulness & Integrity:** The Prophet Muhammad ﷺ said: *"The truthful and trustworthy merchant will be with the prophets, the truthful, and the martyrs."* (Jami at-Tirmidhi: 1209).
3. **Daily Record Keeping:** Keep a transparent written or digital log of income and expenses.

🎯 **Today's Practical Task (10 mins):**
Write down 3 specific digital or technical services you can offer to help local neighbors or clients.

🔍 **Quick Check Question:**
What builds lasting customer loyalty?
(A: Honesty, punctuality, and politeness / B: Deception and delay)`,
        suggestions: [
          'A: Honesty, punctuality, and politeness',
          'How can I design a shop poster on Canva?',
          'What should I do next?',
          'I did not understand, explain simpler.'
        ]
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 7: CANVA / GRAPHIC DESIGN
  // ---------------------------------------------------------------------------
  if (
    q.includes('کینوا') ||
    q.includes('canva') ||
    q.includes('ڈیزائن') ||
    q.includes('پوسٹر') ||
    q.includes('تصویر') ||
    q.includes('graphic') ||
    q.includes('design')
  ) {
    if (isUrdu) {
      return {
        reply: `بہت خوب ${salutation}! کینوا (Canva) موبائل کا ایسا مفت ٹول ہے جس سے ہر شخص چند منٹ میں پیشہ ورانہ ڈیزائنر بن سکتا ہے۔

📌 **آسان مثال:**
جیسے کسی تیار شدہ فریم میں تصویر لگا کر نیچے خوبصورت لکھائی سے نام لکھ دیا جائے، ویسے ہی کینوا میں بنے بنائے سانچوں پر دکان کا اشتہار، شادی کارڈ یا بینر تیار ہو جاتا ہے۔

🎯 **آج کا چھوٹا عملی کام (۱۰ منٹ):**
کینوا ایپ کھولیں، سرچ میں *"Sale Banner"* یا *"Card"* لکھیں، اردو متن ڈالیں اور تصویر محفوظ کریں۔

🔍 **آپ کی فہم کی جانچ:**
کیا کینوا میں موجود بنے بنائے ٹیمپلیٹس میں تبدیلی ممکن ہے؟
(الف: جی ہاں، بالکل آسان ہے / ب: نہیں، ترمیم نہیں ہوتی)`,
        suggestions: [
          'الف: جی ہاں، بالکل آسان ہے',
          'دکان کا بینر موبائل پر کیسے بنائیں؟',
          'میرا اگلا قدم کیا ہے؟',
        ],
      };
    } else {
      return {
        reply: `Great topic, ${salutation}! Canva is a free mobile design app with thousands of ready-made layouts for announcements, shop banners, and cards.

📌 **Everyday Analogy:**
Just like placing your photo inside a ready-made picture frame and adding your name, you simply replace the placeholder text with your own.

🎯 **Today's Practical Task (10 mins):**
Open Canva, pick a template, customize it with your own name or announcement, and export it.

🔍 **Quick Check Question:**
Can you edit templates in Canva?
(A: Yes, easily with a few taps / B: No)`,
        suggestions: [
          'A: Yes, easily with a few taps',
          'How to design a flyer for a local store?',
          'What should I do next?',
        ],
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 8: AI & PROMPTING
  // ---------------------------------------------------------------------------
  if (
    q.includes('ai') ||
    q.includes('مصنوعی ذہانت') ||
    q.includes('chatgpt') ||
    q.includes('پرامپٹ') ||
    q.includes('prompt') ||
    q.includes('gemini')
  ) {
    if (isUrdu) {
      return {
        reply: `ماشاءاللہ ${salutation}! مصنوعی ذہانت (AI) ایک ایسا ہوشیار ڈیجیٹل معاون ہے جو عام اردو میں آپ کی بات سمجھ کر فوری مدد کرتا ہے۔

📌 **آسان گھریلو مثال:**
جیسے ایک سمجھدار دوست سے آپ کہیں کہ *"مجھے درخواست لکھ کر دیں"* اور وہ چند سیکنڈ میں لکھ دے، ویسے ہی AI سے آپ پڑھائی، نوٹس، حساب اور کاروبار میں مدد لے سکتے ہیں۔

🎯 **آج کا چھوٹا عملی کام (۵ منٹ):**
کسی بھی AI ٹول سے پوچھیں: *"مجھے اردو میں خوش خطی اور مطالعہ بہتر کرنے کے ۳ آسان طریقے بتائیں۔"*

🔍 **آپ کی فہم کی جانچ:**
کیا AI استعمال کرنے کے لیے کمپیوٹر پروگرامنگ آنا ضروری ہے؟
(الف: نہیں، عام اردو میں بھی بات کر سکتے ہیں / ب: ہاں، کوڈنگ لازمی ہے)`,
        suggestions: [
          'الف: نہیں، عام اردو میں بھی بات کر سکتے ہیں',
          'AI سے روزمرہ گھریلو کام کیسے آسان بنائیں؟',
          'میرا اگلا قدم کیا ہے؟',
        ],
      };
    } else {
      return {
        reply: `Great question, ${salutation}! AI is a digital assistant that understands everyday language to help you brainstorm, draft letters, and solve problems.

📌 **Simple Analogy:**
Think of asking a helpful librarian a question in plain English or Urdu, and having them instantly hand you a tailored guide.

🎯 **Today's Practical Task (5 mins):**
Ask an AI tool: *"Give me 3 simple tips for organizing daily study time at home."*

🔍 **Quick Check Question:**
Do you need coding skills to use AI?
(A: No, normal everyday language is enough / B: Yes, coding is mandatory)`,
        suggestions: [
          'A: No, everyday language is enough',
          'How can AI help with small business?',
          'What should I do next?',
        ],
      };
    }
  }

  // ---------------------------------------------------------------------------
  // SCENARIO 9: DEFAULT CONTEXTUAL RESPONSE
  // ---------------------------------------------------------------------------
  if (isUrdu) {
    return {
      reply: `وعلیکم السلام و رحمتہ اللہ، ${salutation}! میں استاد سیکھو ہوں۔

آپ کی عمر (${ageGroup} سال)، پس منظر (${occupation}) اور فعال کورس (**${courseTitle}**) کے مطابق ہم سیکھنے کے سفر کو آسان، باوقار اور نتیجہ خیز بناتے ہیں۔

📌 **استاد سیکھو کی مستقل رہنمائی:**
1. **روزانہ صرف ${timeLabelUrdu}:** تسلسل کے ساتھ تھوڑا سا وقت نکالیں۔
2. **ہاتھ سے مشق کریں:** جو بھی نیا تصور دیکھیں، اسے موبائل یا کاپی پر عملی طور پر کر کے دیکھیں۔
3. **اگر کبھی سمجھ نہ آئے:** تو بغیر کسی جھجھک کے کہیں **"مجھے سمجھ نہیں آئی"**، میں اور آسان مثال سے سمجھاؤں گا۔

🎯 **آج کا چھوٹا عملی قدم:**
اپنے دن کا ایک مخصوص وقت چنیں اور ایک سبق کا مطالعہ کریں۔

📜 **حدیث نبوی ﷺ:** "علم حاصل کرنا ہر مسلمان پر فرض ہے۔" (سنن ابن ماجہ: ۲۲۴)

🔍 **آپ کی فہم کی جانچ:**
ہنر مندی میں پختگی کیسے حاصل ہوتی ہے؟
(الف: روزانہ کی چھوٹی عملی مشق سے / ب: صرف سوچنے سے)`,
      suggestions: [
        'الف: روزانہ کی چھوٹی عملی مشق سے',
        'میرا اگلا قدم کیا ہے؟',
        'آج کا چیلنج بتائیں',
        'مجھے سمجھ نہیں آئی، آسان الفاظ میں بتائیں۔',
      ],
    };
  } else {
    return {
      reply: `Hello and warm welcome, ${salutation}! I am Teacher Seekho.

Tailored for your age (${ageGroup}), role (${occupation}), and focus course (**${courseTitle}**), we make every step simple, dignified, and practical.

📌 **Lifelong Learning Formula:**
1. **Dedicate ${timeLabelEn} Daily:** Consistency is the true key to lifelong mastery.
2. **Practice Hands-On:** Apply what you learn immediately on your phone or in daily chores.
3. **Never Hesitate:** If anything is ever unclear, simply say **"I didn't understand"** and I will explain with an even simpler example.

🎯 **Today's Practical Task:**
Choose a dedicated time slot today for your daily learning session.

📜 **Hadith:** "Seeking knowledge is an obligation upon every Muslim." (Sunan Ibn Majah: 224)

🔍 **Quick Check Question:**
How is true skill mastery achieved?
(A: Daily consistent practice / B: Daydreaming)`,
      suggestions: [
        'A: Daily consistent practice',
        'What should I do next?',
        'Show me today’s challenge',
        'I did not understand, explain simpler.',
      ],
    };
  }
}
