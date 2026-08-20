import { LearnRememberPracticeItem, UserProfile, KnowledgeLibraryItem } from '../types';

export const INITIAL_RETENTION_ITEMS: LearnRememberPracticeItem[] = [
  {
    id: 'ret-islamic-anger',
    category: 'islamic',
    titleUrdu: 'غصے پر قابو اور خاموشی کا اصول',
    titleEn: 'Anger Restraint & The Power of Silence',
    keyLessonSummaryUrdu: 'پہلوان وہ نہیں جو پچھاڑ دے، بلکہ بہادر وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔',
    keyLessonSummaryEn: 'True strength is not overpowering others, but controlling oneself in moments of anger.',
    isIslamic: true,
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    verifiedSourceUrdu: 'صحیح بخاری: 6114 | صحیح مسلم: 2609',
    verifiedSourceEn: 'Sahih al-Bukhari: 6114 | Sahih Muslim: 2609',
    stage: 'remember',
    difficultyLevel: 1,
    reviewQuestionUrdu: 'رسول اللہ ﷺ کی تعلیم کے مطابق غصہ آنے پر فوری طور پر کیا کرنا چاہیے؟',
    reviewQuestionEn: 'According to prophetic guidance, what should one do immediately when angry?',
    options: [
      { id: 'a', textUrdu: 'خاموش ہو جائیں اور اعوذ باللہ پڑھیں / بیٹھ جائیں', textEn: 'Stay silent, seek refuge in Allah, or sit down', isCorrect: true },
      { id: 'b', textUrdu: 'فوری طور پر سخت جواب دیں تاکہ بات واضح ہو', textEn: 'Retaliate immediately to make your point', isCorrect: false },
      { id: 'c', textUrdu: 'غصہ دلانے والے پر الزام لگائیں', textEn: 'Blame the instigator loudly', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: غصے کے وقت ردعمل دینے سے جھگڑا بڑھتا ہے۔ نبوی طریقہ یہ ہے کہ خاموش ہو جائیں، کھڑے ہوں تو بیٹھ جائیں اور وضو کریں۔',
    gentleRevisionEn: 'Gentle Revision: When anger surges, pause and stay silent, change posture, or make ablution (Wudu).',
    practicalActionUrdu: 'آج جب بھی کسی بات پر جھنجھلاہٹ یا غصہ آئے، جواب دینے سے پہلے پورے ۳۰ سیکنڈ خاموش رہیں۔',
    practicalActionEn: 'Today, whenever provoked, take a full 30-second silent pause before saying anything.',
    advancedActionUrdu: 'جس شخص سے تلخی یا اختلاف ہوا ہو، اس کے حق میں دل سے خیر کی دعا کریں اور مسکرا کر سلام کریں۔',
    advancedActionEn: 'Make sincere prayer for the person you disagreed with and greet them warmly.',
    aiMentorPromptUrdu: 'السلام علیکم! مجھے غصے پر قابو پانے اور فوری ردعمل روکنے کے لیے لائف مینٹور کے طور پر عملی طریقہ بتائیں۔',
    aiMentorPromptEn: 'Guide me on controlling immediate anger reactions with practical psychological and spiritual techniques.',
    nextReviewTimingUrdu: 'اگلی دہرائی: کل شام',
    nextReviewTimingEn: 'Next review: Tomorrow evening'
  },
  {
    id: 'ret-skill-canva-prompt',
    category: 'skill',
    titleUrdu: 'ڈیجیٹل ڈیزائن اور AI پرامپٹ کی بنیاد',
    titleEn: 'Digital Design & AI Prompting Basics',
    keyLessonSummaryUrdu: 'اچھے ڈیزائن کا بنیادی اصول: سادہ رنگ، کم سے کم تحریر، اور واضح پیغام۔',
    keyLessonSummaryEn: 'The golden rule of digital craft: high contrast, concise text, and clear message hierarchy.',
    isIslamic: false,
    stage: 'learn',
    difficultyLevel: 1,
    reviewQuestionUrdu: 'سوشل میڈیا یا کاروباری پوسٹر بناتے وقت سب سے اہم پہلا اصول کیا ہے؟',
    reviewQuestionEn: 'What is the most crucial rule when designing a social post or flyer?',
    options: [
      { id: 'a', textUrdu: 'عنوان کو واضح اور فونٹ کو آسانی سے پڑھنے کے قابل رکھنا', textEn: 'Keep the headline prominent and typography readable', isCorrect: true },
      { id: 'b', textUrdu: 'صفحے کے ہر کونے میں زیادہ سے زیادہ ڈیزائن بھرنا', textEn: 'Fill every corner with maximum elements and glitter', isCorrect: false },
      { id: 'c', textUrdu: 'پانچ سے زیادہ مختلف فونٹس استعمال کرنا', textEn: 'Use 5+ distinct random fonts', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: اچھے ڈیزائن میں خالی جگہ (Whitespace) اتنی ہی اہم ہے جتنا کہ متن۔ صرف ۲ رنگ اور ۲ فونٹس استعمال کریں۔',
    gentleRevisionEn: 'Gentle Revision: Negative space makes design professional. Limit yourself to 2 complementary fonts.',
    practicalActionUrdu: 'کینوا یا موبائل پر اپنے نام یا کسی کاروبار کے لیے ایک سادہ، واضح ۳ سطری پوسٹر بنائیں۔',
    practicalActionEn: 'Create a clean 3-line flyer in Canva using clear typography and minimal colors.',
    advancedActionUrdu: 'اپنے بنائے ہوئے ڈیزائن کو کسی دوست کو دکھا کر پوچھیں کہ کیا ۳ سیکنڈ میں پیغام سمجھ آتا ہے؟',
    advancedActionEn: 'Conduct a 3-second clarity test with a peer on your generated flyer.',
    aiMentorPromptUrdu: 'مجھے بتائیں کہ میں کینوا یا اے آئی سے روزمرہ کا پہلا بامقصد ڈیزائن ۱۰ منٹ میں کیسے بناؤں؟',
    aiMentorPromptEn: 'How can I create my first clean practical Canva graphic in 10 minutes?',
    nextReviewTimingUrdu: 'اگلی مشق: ۲ دن بعد',
    nextReviewTimingEn: 'Next practice: In 2 days'
  },
  {
    id: 'ret-money-budget',
    category: 'money',
    titleUrdu: '۱۰ فیصد بچت اور غیر ضروری خرچ سے بچاؤ',
    titleEn: 'The 10% Savings Rule & Mindful Spending',
    keyLessonSummaryUrdu: 'مالی آزادی کا آغاز زیادہ کمانے سے نہیں، بلکہ خرچ پر قابو اور مسلسل ۱۰ فیصد بچت سے ہوتا ہے۔',
    keyLessonSummaryEn: 'Financial stability starts not with high income, but with spending control and consistent 10% savings.',
    isIslamic: true,
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    verifiedSourceUrdu: 'قرآن کریم: سورۃ الاسراء: 29 ("اور نہ تو اپنا ہاتھ گردن سے باندھ رکھ اور نہ اسے بالکل ہی کھول دے")',
    verifiedSourceEn: 'Quran: Surah Al-Isra 17:29 ("Do not keep your hand chained to your neck, nor open it out completely")',
    stage: 'practice',
    difficultyLevel: 1,
    reviewQuestionUrdu: 'جب بھی کوئی رقم ہاتھ آئے تو سب سے پہلا قدم کیا ہونا چاہیے؟',
    reviewQuestionEn: 'When you receive any money or earnings, what is the best first step?',
    options: [
      { id: 'a', textUrdu: 'خرچ کرنے سے پہلے کم از کم ۱۰ فیصد الگ محفوظ کر لینا', textEn: 'Set aside at least 10% for savings before any spending', isCorrect: true },
      { id: 'b', textUrdu: 'پہلے ساری خواہشات پوری کرنا اور بچ جانے پر سوچنا', textEn: 'Spend on all desires first and save whatever is left', isCorrect: false },
      { id: 'c', textUrdu: 'کسی جلدی امیر بنانے والی نامعلوم اسکیم میں لگا دینا', textEn: 'Invest it into an unverified quick-money scheme', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: "پہلے بچت، پھر خرچ" (Pay Yourself First)۔ جو شخص خرچ کے بعد بچانے کا سوچتا ہے اس کے پاس کبھی بچت نہیں ہوتی۔',
    gentleRevisionEn: 'Gentle Revision: Save first, spend the rest. If you wait until after spending, nothing remains.',
    practicalActionUrdu: 'آج اپنی جیب میں موجود رقم میں سے ۱۰ فیصد الگ رکھ کر ایک لفافے یا پاکٹ میں محفوظ کریں۔',
    practicalActionEn: 'Put aside 10% of today’s pocket money into a dedicated savings envelope.',
    advancedActionUrdu: 'پورے ایک ہفتے کے تمام اخراجات ایک ڈائری میں لکھیں اور ۳ غیر ضروری چیزیں ختم کریں۔',
    advancedActionEn: 'Log every expense for 7 days and identify 3 leaks to permanently eliminate.',
    aiMentorPromptUrdu: 'مجھے اپنی محدود آمدنی یا پاکٹ منی سے بچت شروع کرنے کا آسان لائف پلان بتائیں۔',
    aiMentorPromptEn: 'Guide me on building a 10% savings habit on a modest student/entry budget.',
    nextReviewTimingUrdu: 'اگلی دہرائی: ۳ دن بعد',
    nextReviewTimingEn: 'Next review: In 3 days'
  },
  {
    id: 'ret-character-parents',
    category: 'character',
    titleUrdu: 'والدین کے ساتھ نرمی اور ادب کا رویہ',
    titleEn: 'Gentleness & Respect with Parents',
    keyLessonSummaryUrdu: 'اختلافِ رائے کے وقت بھی والدین کے سامنے آواز نیچی اور لہجہ باادب رکھنا شریعت اور شرافت کا تقاضا ہے۔',
    keyLessonSummaryEn: 'Even in disagreements, lowering your voice and speaking with gentle respect is non-negotiable.',
    isIslamic: true,
    bismillahHeader: 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ',
    verifiedSourceUrdu: 'قرآن کریم: سورۃ الاسراء: 23 ("اور ان سے نرمی اور احترام سے بات کرو")',
    verifiedSourceEn: 'Quran: Surah Al-Isra 17:23 ("And speak to them a noble, respectful word")',
    stage: 'apply',
    difficultyLevel: 2,
    reviewQuestionUrdu: 'اگر والدین کی کسی بات سے اختلاف ہو تو بہترین باوقار ردعمل کیا ہے؟',
    reviewQuestionEn: 'When having a disagreement with parents, what is the most honorable approach?',
    options: [
      { id: 'a', textUrdu: 'خاموشی اور احترام سے سنیں، اور مناسب وقت پر نرمی سے اپنی بات رکھیں', textEn: 'Listen quietly with respect, and explain gently at a suitable later time', isCorrect: true },
      { id: 'b', textUrdu: 'فوراً اونچی آواز میں بحث کریں تاکہ وہ غلطی سمجھیں', textEn: 'Argue loudly immediately to prove your point', isCorrect: false },
      { id: 'c', textUrdu: 'ناراض ہو کر دروازہ بند کر لیں', textEn: 'Slam the door and stop talking', isCorrect: false }
    ],
    gentleRevisionUrdu: 'یاد دہانی: والدین کے سامنے دلیل جیتنے سے زیادہ ان کے دل کی حفاظت اہم ہے۔ ادب اور نرمی سے سخت بات بھی مانی جاتی ہے۔',
    gentleRevisionEn: 'Gentle Revision: Preserving parents’ dignity outweighs winning an argument. Gentleness softens hearts.',
    practicalActionUrdu: 'آج گھر جا کر بغیر کسی فرمائش کے امی یا ابو کے ہاتھ چومیں یا ان کا کوئی ایک کام خود کر دیں۔',
    practicalActionEn: 'Perform one unrequested chore for your parents today or ask how you can help.',
    advancedActionUrdu: 'والدین کے ساتھ روزانہ ۱۰ منٹ فون کے بغیر بیٹھ کر ان کی باتیں توجہ سے سنیں۔',
    advancedActionEn: 'Spend 10 screen-free minutes daily listening attentively to your parents.',
    aiMentorPromptUrdu: 'والدین سے اختلاف کے وقت ادب و حکمت سے بات کرنے کی عملی رہنمائی فرمائیں۔',
    aiMentorPromptEn: 'How can I communicate my career aspirations to parents while maintaining highest respect?',
    nextReviewTimingUrdu: 'عملی نفاذ جاری ہے',
    nextReviewTimingEn: 'Applied in daily life'
  }
];

export function getRetentionCycleItems(userProfile?: UserProfile): LearnRememberPracticeItem[] {
  try {
    const saved = localStorage.getItem('seekho_learn_remember_practice_records');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // Fallback to initial items
  }
  return INITIAL_RETENTION_ITEMS;
}

export function saveRetentionCycleItems(items: LearnRememberPracticeItem[]): void {
  try {
    localStorage.setItem('seekho_learn_remember_practice_records', JSON.stringify(items));
  } catch {
    // ignore
  }
}

export function updateRetentionItemProgress(
  items: LearnRememberPracticeItem[],
  itemId: string,
  wasCorrect: boolean
): { updatedItems: LearnRememberPracticeItem[]; currentItem: LearnRememberPracticeItem } {
  const STAGE_ORDER: LearnRememberPracticeItem['stage'][] = ['learn', 'remember', 'review', 'practice', 'apply'];

  const updatedItems = items.map((item) => {
    if (item.id !== itemId) return item;

    if (wasCorrect) {
      // Advance stage forward
      const currentIdx = STAGE_ORDER.indexOf(item.stage);
      const nextStage = currentIdx < STAGE_ORDER.length - 1 ? STAGE_ORDER[currentIdx + 1] : 'apply';
      const newDifficulty = Math.min(3, item.difficultyLevel + 1) as 1 | 2 | 3;

      return {
        ...item,
        stage: nextStage,
        difficultyLevel: newDifficulty,
        lastReviewedAt: new Date().toISOString(),
        nextReviewTimingUrdu: nextStage === 'apply' ? 'عملی نفاذ جاری ہے' : 'اگلی دہرائی: ۳ دن بعد',
        nextReviewTimingEn: nextStage === 'apply' ? 'Applied in daily life' : 'Next review: In 3 days'
      };
    } else {
      // Keep stage or return to review gently
      return {
        ...item,
        lastReviewedAt: new Date().toISOString(),
        nextReviewTimingUrdu: 'دوبارہ دہرائی: کل',
        nextReviewTimingEn: 'Review again: Tomorrow'
      };
    }
  });

  saveRetentionCycleItems(updatedItems);
  const currentItem = updatedItems.find(i => i.id === itemId) || updatedItems[0];
  return { updatedItems, currentItem };
}

export function convertKnowledgeItemToRetentionItem(item: KnowledgeLibraryItem): LearnRememberPracticeItem {
  const isIslamic =
    !!item.bismillahHeader ||
    item.categoryId === 'quran_guidance' ||
    item.categoryId === 'hadith' ||
    item.categoryId === 'seerah' ||
    item.categoryId === 'sahaba';

  return {
    id: `ret-know-${item.id}`,
    category: isIslamic
      ? 'islamic'
      : item.categoryId === 'financial_literacy'
      ? 'money'
      : item.categoryId === 'character_ethics' || item.categoryId === 'personal_development'
      ? 'character'
      : 'skill',
    titleUrdu: item.titleUrdu,
    titleEn: item.titleEn,
    keyLessonSummaryUrdu: item.shortExplanationUrdu,
    keyLessonSummaryEn: item.shortExplanationEn,
    isIslamic,
    bismillahHeader: isIslamic ? (item.bismillahHeader || 'بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ') : undefined,
    verifiedSourceUrdu: item.sourceReferenceUrdu || item.sourceReference,
    verifiedSourceEn: item.sourceReference,
    stage: 'remember',
    difficultyLevel: item.difficulty === 'easy' ? 1 : item.difficulty === 'medium' ? 2 : 3,
    reviewQuestionUrdu: item.reviewQuestionUrdu || `اس اہم سبق "${item.titleUrdu}" سے سب سے بنیادی عملی اصول کیا ہے؟`,
    reviewQuestionEn: item.reviewQuestionEn || `What is the core practical principle of "${item.titleEn}"?`,
    options: item.reviewOptions && item.reviewOptions.length > 0 ? item.reviewOptions : [
      {
        id: 'a',
        textUrdu: item.oneSmallActionUrdu || (item.practicalActionStepsUrdu && item.practicalActionStepsUrdu[0]) || item.practicalBenefitUrdu,
        textEn: item.oneSmallActionEn || (item.practicalActionStepsEn && item.practicalActionStepsEn[0]) || item.practicalBenefitEn,
        isCorrect: true,
      },
      {
        id: 'b',
        textUrdu: 'صرف پڑھنا اور روزمرہ زندگی میں کوئی عملی تبدیلی نہ لانا',
        textEn: 'Just reading without making any daily practical change',
        isCorrect: false,
      },
      {
        id: 'c',
        textUrdu: 'بغیر غور و فکر کے جذباتی ردعمل کا مظاہرہ کرنا',
        textEn: 'Reacting emotionally without thoughtful reflection',
        isCorrect: false,
      },
    ],
    gentleRevisionUrdu: item.gentleRevisionUrdu || `یاد دہانی: ${item.shortExplanationUrdu}`,
    gentleRevisionEn: item.gentleRevisionEn || `Gentle Revision: ${item.shortExplanationEn}`,
    practicalActionUrdu: item.oneSmallActionUrdu || (item.practicalActionStepsUrdu && item.practicalActionStepsUrdu[0]) || item.practicalBenefitUrdu,
    practicalActionEn: item.oneSmallActionEn || (item.practicalActionStepsEn && item.practicalActionStepsEn[0]) || item.practicalBenefitEn,
    advancedActionUrdu: (item.practicalActionStepsUrdu && item.practicalActionStepsUrdu[1]) || 'اس مفید علم پر خود بھی قائم رہیں اور دوسروں تک بھی آسان زبان میں پہنچائیں۔',
    advancedActionEn: (item.practicalActionStepsEn && item.practicalActionStepsEn[1]) || 'Apply this knowledge consistently and share it with someone who needs it.',
    aiMentorPromptUrdu: `السلام علیکم! میں نے علم کے خزانے سے "${item.titleUrdu}" کا مطالعہ کیا ہے۔ براہ کرم میری زندگی کے لیے مزید رہنمائی فرمائیں۔`,
    aiMentorPromptEn: `Guide me on practically embedding the principle of "${item.titleEn}" into my daily habits.`,
    nextReviewTimingUrdu: 'اگلی دہرائی: کل شام',
    nextReviewTimingEn: 'Next review: Tomorrow evening',
  };
}

export function scheduleKnowledgeItemInRetentionCycle(item: KnowledgeLibraryItem): boolean {
  try {
    const existing = getRetentionCycleItems();
    const retentionItem = convertKnowledgeItemToRetentionItem(item);
    const index = existing.findIndex((i) => i.id === retentionItem.id);

    let updated: LearnRememberPracticeItem[];
    if (index >= 0) {
      updated = [...existing];
      updated[index] = { ...updated[index], ...retentionItem, lastReviewedAt: new Date().toISOString() };
    } else {
      updated = [retentionItem, ...existing];
    }
    saveRetentionCycleItems(updated);
    return true;
  } catch {
    return false;
  }
}

export function isKnowledgeItemScheduledInRetention(itemId: string): boolean {
  try {
    const existing = getRetentionCycleItems();
    return existing.some((i) => i.id === `ret-know-${itemId}` || i.id === itemId);
  } catch {
    return false;
  }
}

