import { Course, CommunityPost, AreaTopic, ElderWisdom, Opportunity, AgeGroup } from '../types';

export const SKILL_CATEGORIES_DATA = [
  { id: 'AI & Technology', ur: 'مصنوعی ذہانت و ٹیکنالوجی', en: 'AI & Technology', icon: 'Cpu', count: 2 },
  { id: 'Computer & Digital Skills', ur: 'کمپیوٹر اور ڈیجیٹل بنیادی مہارتیں', en: 'Computer & Digital Skills', icon: 'Laptop', count: 2 },
  { id: 'Communication & Languages', ur: 'مواصلات اور زبانیں', en: 'Communication & Languages', icon: 'MessageSquare', count: 2 },
  { id: 'Business & Freelancing', ur: 'کاروبار اور فری لانسنگ', en: 'Business & Freelancing', icon: 'Briefcase', count: 2 },
  { id: 'Creative Skills', ur: 'تخلیقی مہارتیں اور ڈیزائن', en: 'Creative Skills', icon: 'Palette', count: 2 },
  { id: 'Agriculture & Local Skills', ur: 'جدید زراعت اور مقامی ہنر', en: 'Agriculture & Local Skills', icon: 'Sprout', count: 2 },
  { id: 'Technical Trades', ur: 'تکنیکی و عملی دستکاری', en: 'Technical Trades', icon: 'Wrench', count: 2 },
  { id: 'Life Skills', ur: 'روزمرہ زندگی کی مہارتیں اور صحت', en: 'Life Skills', icon: 'HeartHandshake', count: 2 },
  { id: 'Character & Leadership', ur: 'کردار، اخلاقیات اور قیادت', en: 'Character & Leadership', icon: 'ShieldCheck', count: 2 },
  { id: 'Community Development', ur: 'برادری اور علاقائی ترقی', en: 'Community Development', icon: 'Building', count: 2 },
];

export const COURSES_DATA: Course[] = [
  // 1. AI & Technology - Featured Sample Course
  {
    id: 'ai-fundamentals-all-ages',
    titleUrdu: 'AI کی بنیادی سمجھ — ہر عمر کے لیے',
    titleEn: 'AI Fundamentals for All Ages',
    descriptionUrdu: 'مصنوعی ذہانت (AI) کی بنیادی سمجھ، روزمرہ زندگی، اچھے سوالات، پڑھائی اور کام میں محفوظ اور ذمہ دارانہ استعمال کا 5 اسباق پر مشتمل مکمل کورس۔',
    descriptionEn: 'A 5-lesson comprehensive foundational guide to understanding AI, daily life applications, effective prompting, learning & work, and safe usage.',
    category: 'AI & Technology',
    categoryUrdu: 'مصنوعی ذہانت و ٹیکنالوجی',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 1.5,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'Sparkles',
    coverGradient: 'from-emerald-600 via-teal-700 to-emerald-900',
    lessons: [
      {
        id: 'ai-f-l1',
        titleUrdu: '1. AI کیا ہے؟',
        titleEn: '1. What is AI?',
        durationMinutes: 10,
        contentUrdu: `مصنوعی ذہانت (Artificial Intelligence یا AI) کمپیوٹر سائنس کا ایسا جدید شعبہ ہے جس میں کمپیوٹرز اور موبائل فونز کو انسانوں کی طرح سوچنے، سیکھنے، زبان سمجھنے اور مسائل حل کرنے کی صلاحیت دی جاتی ہے۔

یہ کوئی جادو یا طلسم نہیں ہے، بلکہ انسانوں کے بنائے ہوئے ایسے ذہین کمپیوٹر پروگرامز ہیں جنہیں اربوں کتابوں، مضامین اور معلومات (ڈیٹا) سے تربیت دی گئی ہے۔

جس طرح ایک بچہ دیکھ کر، سن کر اور تجربے سے نئی باتیں سیکھتا ہے، بالکل اسی طرح AI بھی اپنے اندر موجود ڈیٹا سے سیکھ کر انسانوں کے پوچھے گئے سوالات کے فوری اور درست جوابات تیار کرتی ہے۔ یہ انسان کا متبادل نہیں بلکہ انسان کی مدد کرنے والا ایک طاقتور اوزار ہے۔`,
        contentEn: `Artificial Intelligence (AI) is a technology enabling computers and smartphones to understand human language, learn from information, and solve everyday problems.

It is not magic; rather, it is a smart helper trained on vast libraries of knowledge and data. Just as a human learns from reading and observation, AI learns patterns to assist us in daily tasks.`,
        keyTakeawaysUrdu: [
          'AI انسانوں کی طرح زبان سمجھنے اور مسائل حل کرنے والا جدید کمپیوٹر سافٹ ویئر ہے۔',
          'یہ جادو نہیں بلکہ وسیع ڈیٹا اور معلومات سے سیکھ کر انسان کی مدد کرتا ہے۔',
          'یہ انسان کے کام کو آسان اور تیز بنانے والا ایک ڈیجیٹل معاون ہے۔'
        ],
        keyTakeawaysEn: [
          'AI is smart software designed to understand human language and solve problems.',
          'It learns from vast datasets to assist human creativity and efficiency.',
          'It is a helper tool meant to enhance human capabilities.'
        ],
        quiz: [
          {
            id: 'ai-f-l1-q1',
            questionUrdu: 'AI (مصنوعی ذہانت) کا بنیادی مطلب کیا ہے؟',
            questionEn: 'What does AI primarily stand for and mean?',
            optionsUrdu: [
              'کمپیوٹر کا انسان کی طرح سوچنے، سمجھنے اور مسائل حل کرنے کا نظام',
              'ایک عام برقی بلب جو خود بخود بند ہوتا ہے',
              'پرانا کاغذی رجسٹر جس میں حساب لکھا جائے',
              'صرف انٹرنیٹ کی تار'
            ],
            optionsEn: [
              'A system enabling computers to think, understand language, and solve problems',
              'A regular light bulb with a timer',
              'An old paper ledger for accounts',
              'Just an internet cable'
            ],
            correctIndex: 0,
            explanationUrdu: 'مصنوعی ذہانت انسانوں کی طرح زبان سمجھنے اور مدد فراہم کرنے والی جدید کمپیوٹر ٹیکنالوجی ہے۔',
            explanationEn: 'AI is modern computing technology that comprehends natural language and assists humans.'
          },
          {
            id: 'ai-f-l1-q2',
            questionUrdu: 'AI سوالات کے جوابات کیسے تیار کرتی ہے؟',
            questionEn: 'How does AI generate its answers?',
            optionsUrdu: [
              'جادو کے ذریعے',
              'بڑے پیمانے پر موجود کتابوں اور معلوماتی ڈیٹا سے سیکھ کر',
              'بغیر سوچے سمجھے تکے لگا کر',
              'صرف رات کے وقت خود بخود'
            ],
            optionsEn: [
              'Through magic',
              'By learning patterns from vast text and datasets',
              'By pure random guessing',
              'Only automatically during nighttime'
            ],
            correctIndex: 1,
            explanationUrdu: 'AI کو انسانوں کے لکھے ہوئے علمی ذخیرے اور ڈیٹا سے تربیت دی جاتی ہے جس کی بنیاد پر وہ جواب بناتی ہے۔',
            explanationEn: 'AI is trained on extensive knowledge and data to generate relevant answers.'
          },
          {
            id: 'ai-f-l1-q3',
            questionUrdu: 'ہمیں AI کو کس نظر سے دیکھنا چاہیے؟',
            questionEn: 'How should we view AI in our lives?',
            optionsUrdu: [
              'انسانوں کا متبادل جو سب کچھ چھین لے گا',
              'انسان کی آسانی، رفتار اور صلاحیت بڑھانے والا ایک مفید معاون اوزار',
              'ایک خطرناک کھلونا جس سے دور رہنا چاہیے',
              'صرف انگریزی بولنے والے سائنسدانوں کی چیز'
            ],
            optionsEn: [
              'A replacement that takes over everything',
              'A helpful tool that boosts human productivity and ease',
              'A dangerous toy to avoid completely',
              'Something only for English-speaking scientists'
            ],
            correctIndex: 1,
            explanationUrdu: 'AI انسان کی مدد اور رہنمائی کے لیے ایک اوزار ہے، جس کا درست استعمال ہماری زندگی آسان بناتا ہے۔',
            explanationEn: 'AI is a powerful assistant that enhances human productivity and learning.'
          }
        ],
        practicalTask: {
          id: 'ai-f-l1-task',
          titleUrdu: 'عملی مشق: اپنے الفاظ میں AI کی تعریف',
          titleEn: 'Practical Task: Define AI in your own words',
          instructionsUrdu: 'سوچیں کہ اگر آپ کو اپنے گھر کے کسی بزرگ یا چھوٹے بچے کو بتانا ہو کہ AI کیا ہے، تو آپ کیا کہیں گے؟ ایک آسان جملہ لکھیں۔',
          instructionsEn: 'Think how you would explain AI to an elder or child in simple terms. Write one clear sentence.',
          deliverableUrdu: 'اپنے سادہ الفاظ میں AI کا تعارف درج کریں۔',
          deliverableEn: 'Write your 1-sentence definition of AI.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'ai-f-l2',
        titleUrdu: '2. AI ہماری روزمرہ زندگی میں کیسے مدد کرتا ہے؟',
        titleEn: '2. How AI Helps in Daily Life',
        durationMinutes: 10,
        contentUrdu: `ہم روزانہ اپنے اسمارٹ فون میں جانے یا انجانے میں AI کا استعمال کرتے ہیں۔

جب آپ گوگل میپس (Google Maps) پر کہیں جانے کا راستہ تلاش کرتے ہیں تو AI ٹریفک کا اندازہ لگا کر سب سے مختصر راستہ بتاتی ہے۔ جب آپ یوٹیوب پر اپنی پسندیدہ تلاوت یا ویڈیو دیکھتے ہیں تو AI آپ کی پسند کے مطابق مزید ویڈیوز تجویز کرتی ہے۔

اس کے علاوہ AI:
• آواز کے ذریعے بول کر میسج ٹائپ کرنے میں مدد دیتی ہے۔
• تصاویر کے بیک گراؤنڈ صاف کرنے اور کوالٹی بڑھانے میں کام آتی ہے۔
• کسانوں کو فصل کی بیماریوں اور موسم کی پیشن گوئی بتاتی ہے۔
• گھریلو بجٹ اور حساب کتاب کے خلاصے فوری تیار کرتی ہے۔`,
        contentEn: `AI is already part of our daily smartphone experience. Navigation maps use AI to predict traffic, voice assistants convert Urdu/English speech into text, and translation tools bridge language barriers instantly.`,
        keyTakeawaysUrdu: [
          'گوگل میپس، وائس ٹائپنگ اور یوٹیوب تجاویز روزمرہ AI کی عام مثالیں ہیں۔',
          'AI گھنٹوں کا حساب کتاب اور دستاویزات کا خلاصہ سیکنڈوں میں کر دیتی ہے۔',
          'یہ زراعت، صحت اور گھریلو منصوبہ بندی میں مفید مشورے فراہم کرتی ہے۔'
        ],
        keyTakeawaysEn: [
          'Google Maps, voice typing, and video recommendations use AI daily.',
          'AI can summarize long documents and calculations in seconds.',
          'It assists in farming, health tips, and household planning.'
        ],
        quiz: [
          {
            id: 'ai-f-l2-q1',
            questionUrdu: 'درج ذیل میں سے روزمرہ زندگی میں AI کے استعمال کی سب سے عام مثال کون سی ہے؟',
            questionEn: 'Which is a common example of AI in daily life?',
            optionsUrdu: [
              'گوگل میپس کا ٹریفک دیکھ کر آسان اور چھوٹا راستہ بتانا',
              'دیوار پر لگی عام پرانی گھڑی دیکھنا',
              'کاغذ پر بال پین سے لکھنا',
              'عام تالے کی چابی گھمانا'
            ],
            optionsEn: [
              'Google Maps optimizing traffic routes',
              'Looking at a standard wall clock',
              'Writing on paper with a pen',
              'Turning a traditional mechanical key'
            ],
            correctIndex: 0,
            explanationUrdu: 'گوگل میپس پس پردہ AI کا استعمال کر کے ٹریفک اور راستے کا درست تعین کرتا ہے۔',
            explanationEn: 'Google Maps uses machine learning and AI to optimize navigation routes.'
          },
          {
            id: 'ai-f-l2-q2',
            questionUrdu: 'AI موبائل استعمال کرنے والوں کو کیا سہولت فراہم کرتی ہے؟',
            questionEn: 'How does AI help smartphone users?',
            optionsUrdu: [
              'آواز کو سن کر فوری اردو یا انگلش میں لکھنا (Voice Typing)',
              'موبائل کا کیمرہ ہمیشہ کے لیے بند کر دینا',
              'تمام فون نمبرز خود بخود ڈیلیٹ کرنا',
              'انٹرنیٹ کو ہمیشہ کے لیے سست کرنا'
            ],
            optionsEn: [
              'Accurate voice-to-text typing in Urdu/English',
              'Disabling phone camera permanently',
              'Deleting all contacts randomly',
              'Slowing down internet speed'
            ],
            correctIndex: 0,
            explanationUrdu: 'وائس ٹائپنگ اور زبان کا ترجمہ AI کی روزمرہ شاندار سہولیات میں شامل ہے۔',
            explanationEn: 'Voice recognition and translation are everyday AI conveniences.'
          },
          {
            id: 'ai-f-l2-q3',
            questionUrdu: 'کیا ایک کسان یا دکاندار AI سے فائدہ اٹھا سکتا ہے؟',
            questionEn: 'Can a local farmer or shopkeeper benefit from AI?',
            optionsUrdu: [
              'جی ہاں! فصل کی بیماریوں کے علاج اور دکان کے حساب کتاب میں رہنمائی لے کر',
              'نہیں، AI صرف بڑے سائنسدانوں کے لیے ہے',
              'نہیں، دکان کا کام کمپیوٹر سے نہیں ہو سکتا',
              'صرف اگر وہ انگلینڈ میں رہتا ہو'
            ],
            optionsEn: [
              'Yes, for crop disease advice and bookkeeping assistance',
              'No, AI is strictly for laboratory scientists',
              'No, shopkeeping cannot use technology',
              'Only if they live overseas'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI کسانوں اور چھوٹے دکانداروں کو آسان اردو میں عملی رہنمائی فراہم کر سکتی ہے۔',
            explanationEn: 'AI can assist farmers with crop guidance and shopkeepers with customer notes.'
          }
        ],
        practicalTask: {
          id: 'ai-f-l2-task',
          titleUrdu: 'عملی مشق: روزمرہ کا ایک کام منتخب کریں',
          titleEn: 'Practical Task: Identify a daily task for AI',
          instructionsUrdu: 'اپنے روزمرہ کا کوئی ایک ایسا کام سوچیں جس میں وقت زیادہ لگتا ہو (جیسے خط لکھنا، حساب جوڑنا، یا کوئی ترکیب تلاش کرنا) اور لکھیں کہ اس میں AI آپ کا وقت کیسے بچا سکتی ہے۔',
          instructionsEn: 'Identify one task in your routine where AI could save you time, and write a quick summary.',
          deliverableUrdu: 'اپنے روزمرہ کام کا نام اور AI کا مجوزہ فائدہ لکھیں۔',
          deliverableEn: 'Name the daily task and describe the AI benefit.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'ai-f-l3',
        titleUrdu: '3. AI سے اچھا سوال کیسے پوچھیں؟',
        titleEn: '3. How to Ask Effective Questions (Prompting)',
        durationMinutes: 12,
        contentUrdu: `AI کو جو سوال، ہدایت یا میسج آپ لکھتے ہیں اسے 'پرامپٹ' (Prompt) کہتے ہیں۔

AI سے بہترین اور کارآمد جواب لینے کا دارومدار اس بات پر ہے کہ آپ نے سوال کتنا واضح پوچھا ہے۔ اگر آپ صرف لکھیں گے 'پانی'، تو AI کچھ بھی عام سی معلومات دے دے گی۔ لیکن اگر آپ لکھیں گے: 'آپ ایک ماہر کسان ہیں، مجھے گندم کی فصل کو پہلا پانی دینے کا بہترین وقت آسان اردو میں بتائیں'، تو AI کمال کا جواب دے گی۔

🎯 **کامیاب سوال پوچھنے کے 3 سنہری اصول:**
1. **کردار بتائیں:** AI کو بتائیں وہ کیا بن کر جواب دے (جیسے: آپ ایک تجربہ کار استاد ہیں)۔
2. **مسئلہ تفصیل سے بتائیں:** بتائیں کہ آپ کا کیا مسئلہ ہے اور آپ کو کیا چاہیے۔
3. **انداز اور زبان واضح کریں:** لکھیں کہ 'جواب آسان اردو میں 3 نکات میں دیں'۔`,
        contentEn: `The instruction or question you give to an AI is called a 'Prompt'. Clear, context-rich prompts yield exceptional results.

🎯 **3 Golden Rules for Great Prompts:**
1. **Assign a Role:** 'Act as a patient teacher...'
2. **Provide Details:** Clearly state the specific problem.
3. **Specify Format & Tone:** 'Provide the answer in 3 simple Urdu bullet points.'`,
        keyTakeawaysUrdu: [
          'AI کو دی جانے والی ہدایت یا سوال کو \'پرامپٹ\' (Prompt) کہتے ہیں۔',
          'اچھے پرامپٹ میں 3 چیزیں ضروری ہیں: کردار (Role)، تفصیل (Details) اور مطلوبہ انداز (Format)۔',
          'جتنا واضح اور تفصیلی سوال ہوگا، جواب اتنا ہی زیادہ معیاری اور مددگار ہوگا۔'
        ],
        keyTakeawaysEn: [
          'An instruction or question given to AI is called a prompt.',
          'Great prompts include: Role, Context/Details, and Output Format.',
          'Clarity in input directly ensures quality in AI output.'
        ],
        quiz: [
          {
            id: 'ai-f-l3-q1',
            questionUrdu: 'AI کو دی جانے والی ہدایت، میسج یا سوال کو تکنیکی زبان میں کیا کہا جاتا ہے؟',
            questionEn: 'What is the message or instruction given to AI called?',
            optionsUrdu: [
              'پرامپٹ (Prompt)',
              'پاس ورڈ (Password)',
              'سرچ کارڈ (Search Card)',
              'وائرس (Virus)'
            ],
            optionsEn: [
              'Prompt',
              'Password',
              'Search Card',
              'Virus'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI کو دی جانے والی ہدایت کو پرامپٹ کہا جاتا ہے۔',
            explanationEn: 'The text prompt guides the AI in generating context-aware answers.'
          },
          {
            id: 'ai-f-l3-q2',
            questionUrdu: 'ان میں سے کون سا پرامپٹ AI سے سب سے بہترین جواب حاصل کرے گا؟',
            questionEn: 'Which of the following prompts will get the best AI answer?',
            optionsUrdu: [
              'صرف ایک لفظ: \'پڑھائی\'',
              '\'آپ ایک ہمدرد استاد ہیں، میٹرک کے طالب علم کے لیے ریاضی کی تیاری کا 3 روزہ آسان شیڈول بنائیں\'',
              '\'کچھ بھی لکھ دو جلدی سے\'',
              'ایک مبہم اور ادھورا جملہ'
            ],
            optionsEn: [
              'Just one word: "Study"',
              '"Act as a supportive mentor and create a 3-day simple math revision plan for a 10th-grade student"',
              '"Write anything quickly"',
              'A vague, incomplete phrase'
            ],
            correctIndex: 1,
            explanationUrdu: 'واضح کردار، ہدف اور زبان بتانے سے AI بہترین اور پریکٹیکل جواب فراہم کرتی ہے۔',
            explanationEn: 'Specifying the role, target audience, and clear goal gives the highest quality result.'
          },
          {
            id: 'ai-f-l3-q3',
            questionUrdu: 'اگر AI آپ کی مرضی کا جواب نہ دے تو آپ کو کیا کرنا چاہیے؟',
            questionEn: 'What should you do if AI does not give the desired answer on the first try?',
            optionsUrdu: [
              'مایوس ہو کر فون بند کر دینا',
              'اپنے سوال میں مزید تفصیل اور مطلوبہ انداز واضح کر کے دوبارہ پوچھنا (Refining)',
              'کمپیوٹر کو زور سے ہلانا',
              'پاس ورڈ بدلنا'
            ],
            optionsEn: [
              'Give up and shut down the phone',
              'Refine the prompt with additional details and desired format',
              'Shake the computer',
              'Change your password'
            ],
            correctIndex: 1,
            explanationUrdu: 'پرامپٹ کو درست اور تفصیلی بنا کر دوبارہ پوچھنے سے AI فوری طور پر مطلوبہ انداز میں جواب دیتی ہے۔',
            explanationEn: 'Refining and clarifying instructions leads to the exact required outcome.'
          }
        ],
        practicalTask: {
          id: 'ai-f-l3-task',
          titleUrdu: 'عملی مشق: اپنا ایک مکمل پرامپٹ تحریر کریں',
          titleEn: 'Practical Task: Write your own complete prompt',
          instructionsUrdu: 'ایک 3 سطری پرامپٹ بنائیں جس میں: (۱) کردار، (۲) آپ کا سوال، اور (۳) مطلوبہ انداز درج ہو۔ مثلاً: \'آپ ایک ڈاکٹر ہیں، نزلہ زکام کے گھریلو ٹوٹکے 3 نکات میں بتائیں۔\'',
          instructionsEn: 'Draft a 3-part prompt including a role, specific question, and desired output format.',
          deliverableUrdu: 'اپنا مکمل پرامپٹ نیچے لکھیں۔',
          deliverableEn: 'Write down your structured prompt.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'ai-f-l4',
        titleUrdu: '4. AI کو تعلیم اور کام میں کیسے استعمال کریں؟',
        titleEn: '4. Using AI for Learning & Work',
        durationMinutes: 12,
        contentUrdu: `AI ہر عمر کے طالب علم اور محنت کش کے لیے 24 گھنٹے دستیاب ذاتی استاد اور معاون ہے۔

📚 **تعلیم میں AI کا فائدہ:**
• مشکل سائنسی یا ریاضی کے اسباق کو عام فہم کہانی اور مثال سے سمجھنا۔
• انگلش یا دوسری زبانوں میں بول چال اور گرائمر کی مفت پریکٹس کرنا۔
• امتحان کی تیاری کے لیے خود اپنے لیے فرضی ٹیسٹ اور کوئز تیار کروانا۔

💼 **کام اور کاروبار میں AI کا فائدہ:**
• گاہکوں کے لیے دکان کا تشہیری میسج یا واٹس ایپ پوسٹ تیار کرنا۔
• نوکری کی درخواست (CV / Resume) اور رسمی خطوط لکھوانا۔
• نئے کاروبار یا دکان کی سیل بڑھانے کے آئیڈیاز حاصل کرنا۔`,
        contentEn: `AI serves as a 24/7 personal tutor and workplace assistant. Students can clarify complex concepts, practice languages, and generate practice quizzes. Professionals and business owners can draft client communications and marketing ideas effortlessly.`,
        keyTakeawaysUrdu: [
          'AI مشکل اسباق کو آسان مثالوں میں سمجھانے والا ذاتی استاد ہے۔',
          'یہ کاروباری خطوط، اشتہارات اور کسٹمر میسجز منٹوں میں تیار کرتا ہے۔',
          'اس کا مقصد رٹا لگانا نہیں بلکہ سیکھنے کی رفتار اور سمجھ کو تیز کرنا ہے۔'
        ],
        keyTakeawaysEn: [
          'AI acts as a 24/7 patient tutor for clarifying difficult topics.',
          'It helps draft business letters, job applications, and marketing posts.',
          'Its purpose is to deepen understanding and accelerate productivity.'
        ],
        quiz: [
          {
            id: 'ai-f-l4-q1',
            questionUrdu: 'طالب علم کے لیے AI کا سب سے مثبت اور اخلاقی استعمال کیا ہے؟',
            questionEn: 'What is the most positive and ethical way for a student to use AI?',
            optionsUrdu: [
              'مشکل موضوعات کو آسان مثالوں سے سمجھنا اور پریکٹس سوالات حل کرنا',
              'بغیر سمجھے ہوم ورک کاپی پیسٹ کر کے جمع کروانا',
              'امتحان کے دوران نقل کرنے کی کوشش کرنا',
              'پڑھائی چھوڑ کر سارا دن صرف گیم کھیلنا'
            ],
            optionsEn: [
              'Understanding difficult concepts with simple examples and practice quizzes',
              'Blindly copying homework without understanding',
              'Attempting exam cheating',
              'Abandoning studies altogether'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI کو سمجھنے، سیکھنے اور اپنی مہارت بڑھانے کے لیے استعمال کرنا سب سے بہترین طریقہ ہے۔',
            explanationEn: 'Using AI to build comprehension and test understanding is the ideal educational approach.'
          },
          {
            id: 'ai-f-l4-q2',
            questionUrdu: 'ایک دکاندار یا ہنر مند AI سے کاروبار میں کیسے مدد لے سکتا ہے؟',
            questionEn: 'How can a local craftsman or business owner benefit from AI?',
            optionsUrdu: [
              'واٹس ایپ کے لیے خوبصورت کاروباری اشتہار اور گاہکوں کے پیغامات لکھوا کر',
              'گاہکوں کے میسجز کو نظر انداز کر کے',
              'دکان کی بجلی بند کر کے',
              'کاروبار کا حساب کتاب ضائع کر کے'
            ],
            optionsEn: [
              'Drafting engaging customer notices, flyers, and WhatsApp promotions',
              'Ignoring all customer inquiries',
              'Shutting down shop power',
              'Discarding sales ledger'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI دکانداروں کو گاہکوں سے اچھے انداز میں رابطے اور تشہیر کے لیے زبردست الفاظ فراہم کرتی ہے۔',
            explanationEn: 'AI helps draft polite, compelling messages for customer outreach and sales promotion.'
          },
          {
            id: 'ai-f-l4-q3',
            questionUrdu: 'اگر آپ نئی زبان (جیسے انگلش) بولنا سیکھنا چاہتے ہیں تو AI کیا کر سکتی ہے؟',
            questionEn: 'If you want to practice speaking English, how can AI help?',
            optionsUrdu: [
              'آپ کے ساتھ دوستانہ گفتگو کر کے آپ کی غلطیوں کی نشاندہی اور رہنمائی کر سکتی ہے',
              'وہ دوسری زبانیں بالکل نہیں بول سکتی',
              'وہ موبائل کی آواز بند کر دیتی ہے',
              'وہ صرف حساب کے سوال حل کرتی ہے'
            ],
            optionsEn: [
              'Engage in friendly conversational practice and correct mistakes patiently',
              'It cannot speak languages',
              'It mutes phone audio',
              'It only does math calculations'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI ایک صبر و تحمل والے استاد کی طرح زبان کی بول چال اور گرائمر کی مشق کرواتی ہے۔',
            explanationEn: 'AI provides conversational dialogue practice with patient, real-time corrections.'
          }
        ],
        practicalTask: {
          id: 'ai-f-l4-task',
          titleUrdu: 'عملی مشق: پڑھائی یا کام کا ایک منصوبہ بنائیں',
          titleEn: 'Practical Task: Draft a learning or work prompt',
          instructionsUrdu: 'سوچیں کہ آپ نے اس ماہ کون سی نئی مہارت سیکھنی ہے یا کاروبار میں کون سا کام کرنا ہے۔ AI سے اس کا 5 دن کا عملی پلان مانگنے کے لیے ایک پرامپٹ لکھیں۔',
          instructionsEn: 'Think of a new skill or work goal for this month, and write a prompt asking AI for a 5-day action plan.',
          deliverableUrdu: 'اپنا تعلیمی یا کاروباری پرامپٹ درج کریں۔',
          deliverableEn: 'Write your educational/business prompt.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'ai-f-l5',
        titleUrdu: '5. AI کا ذمہ دارانہ اور محفوظ استعمال',
        titleEn: '5. Responsible & Safe Use of AI',
        durationMinutes: 12,
        contentUrdu: `AI جتنا زبردست اور مفید اوزار ہے، اس کا محفوظ اور ذمہ دارانہ استعمال بھی اتنا ہی ضروری ہے۔

🔒 **حفاظت کے 3 بنیادی اصول:**
1. **ذاتی اور خفیہ معلومات مت دیں:** کبھی بھی اپنا بینک پن، پاس ورڈ، نجی شناختی کارڈ نمبر یا گھریلو حساس معلومات AI میں درج نہ کریں۔
2. **ہر بات پر آنکھیں بند کر کے یقین نہ کریں:** AI کبھی کبھار غلط یا فرضی معلومات بھی اعتماد کے ساتھ بتا سکتی ہے (جسے 'ہیلوسینیشن' کہتے ہیں)۔ اس لیے اہم قانونی، طبی یا مذہبی معاملات میں مستند ماہرین سے تصدیق لازمی کریں۔
3. **مثبت اور تعمیری مقصد:** AI کو ہمیشہ اچھے کاموں، سیکھنے، سچائی اور برادری کی بہتری کے لیے استعمال کریں، نہ کہ دھوکہ دہی، نقل یا غلط معلومات پھیلانے کے لیے۔`,
        contentEn: `While AI is a powerful assistant, safe and ethical usage is vital.

🔒 **3 Essential Safety Rules:**
1. **Never Share Sensitive Data:** Keep bank PINs, passwords, and private IDs safe.
2. **Verify Critical Information:** AI can occasionally generate inaccuracies. Always cross-check crucial medical, legal, or religious facts with human experts.
3. **Use for Good:** Harness AI for education, honesty, and community upliftment.`,
        keyTakeawaysUrdu: [
          'کبھی بھی بینک پاس ورڈ، پن اور ذاتی شناختی معلومات AI میں درج نہ کریں۔',
          'اہم طبی، قانونی یا حساس معلومات کی مستند ماہرین سے تصدیق ضروری ہے۔',
          'AI کو ہمیشہ سچائی، اخلاقیات اور تعمیری کاموں کے لیے استعمال کریں۔'
        ],
        keyTakeawaysEn: [
          'Never enter passwords, PINs, or private identification into AI tools.',
          'Always verify critical medical or legal advice with certified human experts.',
          'Commit to using AI ethically for truth and positive community impact.'
        ],
        quiz: [
          {
            id: 'ai-f-l5-q1',
            questionUrdu: 'AI استعمال کرتے ہوئے درج ذیل میں سے کون سی معلومات کبھی بھی نہیں لکھنی چاہیے؟',
            questionEn: 'Which information should you NEVER enter into an AI assistant?',
            optionsUrdu: [
              'بینک اے ٹی ایم کا پن کوڈ، پرائیویٹ پاس ورڈ اور ذاتی خفیہ ڈیٹا',
              'پڑھائی کا کوئی عام سوال',
              'بچوں کے لیے کہانی کا موضوع',
              'موسم کا حال'
            ],
            optionsEn: [
              'Bank ATM PIN, private passwords, and confidential personal data',
              'A general study question',
              'A bedtime story theme for children',
              'Weather query'
            ],
            correctIndex: 0,
            explanationUrdu: 'اپنی ذاتی سیکیورٹی کے لیے مالی اور خفیہ پاس ورڈز کسی بھی آن لائن ٹول میں شیئر نہیں کرنے چاہئیں۔',
            explanationEn: 'Never enter private financial passwords or credentials into AI tools.'
          },
          {
            id: 'ai-f-l5-q2',
            questionUrdu: 'اگر AI کسی سنگین بیماری یا دوائی کے بارے میں مشورہ دے تو کیا کرنا چاہیے؟',
            questionEn: 'What must you do if AI provides advice regarding serious illness or medication?',
            optionsUrdu: [
              'حتمی علاج سے قبل مستند ڈاکٹر یا طبیب سے لازمی تصدیق کرنی چاہیے',
              'بغیر کسی ڈاکٹر کے خود ہی دوائی خرید کر کھا لینی چاہیے',
              'تمام ڈاکٹروں کے پاس جانا بند کر دینا چاہیے',
              'دوسروں کو بھی بغیر تصدیق وہی دوائی دینی چاہیے'
            ],
            optionsEn: [
              'Always consult and verify with a certified human medical doctor before acting',
              'Immediately self-medicate without consulting a physician',
              'Stop visiting doctors completely',
              'Prescribe it to others blindly'
            ],
            correctIndex: 0,
            explanationUrdu: 'طبی اور جان بچانے والے معاملات میں مستند ڈاکٹر کا معائنہ اور تصدیق لازمی ہے۔',
            explanationEn: 'Critical medical decisions must always be verified by licensed healthcare professionals.'
          },
          {
            id: 'ai-f-l5-q3',
            questionUrdu: 'AI کا ذمہ دارانہ اور اخلاقی استعمال کیا کہلاتا ہے؟',
            questionEn: 'What defines responsible and ethical use of AI?',
            optionsUrdu: [
              'سچائی، دیانت داری اور معاشرے کی بھلائی کے لیے علم حاصل کرنا',
              'جھوٹی خبریں اور جعلی تصاویر بنا کر پھیلانا',
              'دوسروں کا حق مارنا اور دھوکہ دینا',
              'دوسروں کی پڑھائی میں رکاوٹ ڈالنا'
            ],
            optionsEn: [
              'Pursuing knowledge with honesty, truth, and community benefit',
              'Generating fake news and deceptive images',
              'Deceiving others and infringing rights',
              'Disrupting others education'
            ],
            correctIndex: 0,
            explanationUrdu: 'ٹیکنالوجی کی اصل خوبصورتی یہ ہے کہ اسے انسانیت کی خدمت اور سچائی کے لیے استعمال کیا جائے۔',
            explanationEn: 'Using technology to uplift people with integrity and truth is true responsible mastery.'
          }
        ],
        practicalTask: {
          id: 'ai-f-l5-task',
          titleUrdu: 'عملی مشق: ذاتی حفاظت اور ذمہ داری کا عہد',
          titleEn: 'Practical Task: Personal safety pledge',
          instructionsUrdu: 'حفاظتی اصولوں کو مدنظر رکھتے ہوئے وہ 2 اہم باتیں لکھیں جن کا آپ AI استعمال کرتے ہوئے ہمیشہ خیال رکھیں گے (مثلاً: پرائیویسی کا تحفظ اور معلومات کی تصدیق)۔',
          instructionsEn: 'Write 2 personal safety rules you will always observe when using AI (e.g., safeguarding privacy and verifying critical facts).',
          deliverableUrdu: 'حفاظت اور ذمہ داری کے 2 اصول درج کریں۔',
          deliverableEn: 'Write your 2 golden safety rules.',
          estimatedMinutes: 5
        }
      }
    ],
    quiz: [
      {
        id: 'ai-f-course-q1',
        questionUrdu: 'AI کی بنیادی سمجھ کا سب سے اہم نکتہ کیا ہے؟',
        questionEn: 'What is the core takeaway of understanding AI?',
        optionsUrdu: [
          'یہ انسان کا مددگار اوزار ہے جس سے واضح سوال پوچھ کر مثبت مقاصد کے لیے فائدہ لیا جا سکتا ہے',
          'یہ ایک جادوئی شے ہے جو سب کچھ خود بخود کر دیتی ہے',
          'یہ صرف بڑے کمپیوٹرز پر چلتی ہے',
          'اس کا کوئی فائدہ نہیں'
        ],
        optionsEn: [
          'It is a powerful assistant that delivers value when guided with clear prompts and ethical care',
          'It is pure magic that requires no human guidance',
          'It only runs on supercomputers',
          'It has no practical value'
        ],
        correctIndex: 0,
        explanationUrdu: 'AI انسان کی صلاحیت کو کئی گنا بڑھانے والا معاون اوزار ہے۔',
        explanationEn: 'AI multiplies human potential when paired with clarity and ethics.'
      }
    ],
    practicalTask: {
      id: 'ai-f-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: اپنی برادری کے لیے AI کا رہنما خاکہ',
      titleEn: 'Capstone: Community AI Action Guide',
      instructionsUrdu: 'اپنے خاندان یا برادری کے کسی ایک مسئلے پر AI سے 3 عملی تجاویز طلب کریں اور ایک صفحے پر نوٹ کریں۔',
      instructionsEn: 'Use AI to generate 3 actionable solutions for a real household or neighborhood need.',
      deliverableUrdu: 'تیار کردہ رہنمائی کا خلاصہ درج کریں۔',
      deliverableEn: 'Enter your summary guide.',
      estimatedMinutes: 10
    },
    projectDescriptionUrdu: 'AI کی مدد سے اپنی برادری کے لیے ایک صفحے کی عملی رہنمائی تیار کریں۔',
    projectDescriptionEn: 'Create a 1-page practical community guide using AI.',
    realLifePurpose: {
      personalBenefitUrdu: 'کسی بھی نئی چیز یا معلومات کو اپنی مادری زبان میں چند لمحوں میں سیکھ سکیں گے اور روزمرہ کام تیزی سے مکمل کر سکیں گے۔',
      personalBenefitEn: 'Learn any new concept in seconds in your native language and save hours on daily tasks.',
      familyHelpUrdu: 'بچوں کے اسکول کے سوالات سمجھانے، بزرگوں کی رہنمائی اور گھریلو منصوبہ بندی میں فوری معاونت ملے گی۔',
      familyHelpEn: 'Help children with homework, assist elders with simple explanations, and streamline household planning.',
      communityHelpUrdu: 'گاؤں یا محلے کے افراد کو درخواست نویسی، سرکاری اسکیموں کی معلومات اور صحت و زراعت کے بنیادی مشورے تلاش کر کے دے سکیں گے۔',
      communityHelpEn: 'Assist neighbors in drafting petitions, researching government aid schemes, and finding practical agriculture or health tips.',
      societalBenefitUrdu: 'ڈیجیٹل فاصلہ مٹے گا اور ہمارا معاشرہ جدید ٹیکنالوجی سے بااختیار، باشعور اور خود کفیل بنے گا۔',
      societalBenefitEn: 'Closes the digital divide, empowering our community to be technologically capable and self-reliant.'
    }
  },

  // ==================================================
  // COURSE 1 — COMPUTER & DIGITAL SKILLS
  // ==================================================
  {
    id: 'computer-digital-world-basics',
    titleUrdu: 'کمپیوٹر اور ڈیجیٹل دنیا کی بنیادی سمجھ',
    titleEn: 'Basics of Computers & the Digital World',
    descriptionUrdu: 'ہر عمر کے لیے کمپیوٹر، ماؤس، کی بورڈ، فائل اور فولڈر بنانے، انٹرنیٹ، ای میل اور محفوظ ڈیجیٹل زندگی کی مکمل بنیادی تربیت۔',
    descriptionEn: 'A zero-barrier beginner guide covering hardware, file systems, web navigation, email communication, and digital safety for ages 10 to 70+.',
    category: 'Computer & Digital Skills',
    categoryUrdu: 'کمپیوٹر اور ڈیجیٹل بنیادی مہارتیں',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.0,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'Laptop',
    coverGradient: 'from-blue-600 via-indigo-700 to-blue-900',
    realLifePurpose: {
      personalBenefitUrdu: 'روزمرہ کے دفتری، تعلیمی اور گھریلو کام موبائل اور کمپیوٹر پر خود مختاری کے ساتھ تیزی سے انجام دے سکیں گے۔',
      personalBenefitEn: 'Perform daily office, study, and household tasks independently on a computer or phone.',
      familyHelpUrdu: 'بچوں کی آن لائن پڑھائی، بجلی و گیس کے بلوں کی ادائیگی اور خاندانی ریکارڈ محفوظ رکھنے میں مدد ملے گی۔',
      familyHelpEn: 'Help children with digital studies, pay utility bills online, and safeguard family documents.',
      communityHelpUrdu: 'محلے یا گاؤں کے افراد کو آن لائن فارم بھرنے، نادرا سروسز اور سرکاری معلومات حاصل کرنے میں رہنمائی فراہم کر سکیں گے۔',
      communityHelpEn: 'Assist neighbors with online forms, citizen registration services, and finding public information.',
      societalBenefitUrdu: 'معاشرے سے ڈیجیٹل تفریق کم ہوگی اور عام شہری بھی جدید دنیا کے فوائد سے مستفید ہو سکیں گے۔',
      societalBenefitEn: 'Reduces digital divide so all citizens participate confidently in the modern knowledge economy.'
    },
    lessons: [
      {
        id: 'cd-b-l1',
        titleUrdu: '1. کمپیوٹر اور ڈیجیٹل دنیا کیا ہے؟',
        titleEn: '1. What is a Computer & the Digital World?',
        durationMinutes: 10,
        contentUrdu: `کمپیوٹر ایک برقی مشین (Electronic Device) ہے جو ہمارے دیے ہوئے احکامات کو انتہائی تیزی اور درستگی سے پورا کرتی ہے۔ آج کا اسمارٹ فون بھی دراصل ہماری جیب میں موجود ایک چھوٹا اور طاقتور کمپیوٹر ہے۔

🖥️ **کمپیوٹر کے بنیادی حصے:**
1. **اسکرین (Monitor/Display):** جہاں ہمیں تحریر، تصاویر اور ویڈیوز نظر آتی ہیں۔
2. **کی بورڈ (Keyboard):** جس کے ذریعے ہم حروف اور نمبر لکھتے ہیں۔
3. **ماؤس / ٹچ اسکرین:** جس سے ہم اسکرین پر کسی بھی چیز کی طرف اشارہ کر کے اسے کھولتے ہیں۔
4. **سی پی یو (CPU):** کمپیوٹر کا دماغ جو تمام حساب کتاب اور کام چلاتا ہے۔

ڈیجیٹل دنیا کا مطلب ہے ایسی دنیا جہاں معلومات کاغذ کے بجائے اسکرین پر لکھی اور محفوظ کی جاتی ہیں۔ اس کے لیے کسی خاص سائنسی علم کی ضرورت نہیں، صرف بنیادی باتوں کو سمجھنا کافی ہے۔`,
        contentEn: `A computer is an electronic device that processes information and performs tasks with incredible speed and accuracy. Your smartphone is also a pocket computer.

🖥️ **Core Parts:**
1. **Screen / Monitor:** Displays text, images, and videos.
2. **Keyboard:** Used to type letters and numbers.
3. **Mouse / Touchscreen:** Points and clicks to open apps.
4. **CPU (Brain):** Processes calculations and actions.

The digital world means information is recorded and managed electronically rather than just on physical paper.`,
        keyTakeawaysUrdu: [
          'کمپیوٹر اور اسمارٹ فون ہمارے کاموں کو آسان اور تیز بنانے والی برقی مشینیں ہیں۔',
          'اسکرین، کی بورڈ، ماؤس اور سی پی یو اس کے اہم بنیادی حصے ہیں۔',
          'ڈیجیٹل دنیا میں کاغذ کے بغیر تمام معلومات باآسانی محفوظ اور شیئر ہوتی ہیں۔'
        ],
        keyTakeawaysEn: [
          'Computers and phones are helper devices designed to make life easier.',
          'Screen, keyboard, mouse, and processor form the core hardware.',
          'Digital data allows paperless storage and instant access.'
        ],
        quiz: [
          {
            id: 'cd-b-l1-q1',
            questionUrdu: 'کمپیوٹر کا وہ کون سا حصہ ہے جو اس کا "دماغ" کہلاتا ہے اور تمام کام چلاتا ہے؟',
            questionEn: 'Which part is known as the "brain" of the computer?',
            optionsUrdu: [
              'سی پی یو (CPU)',
              'ماؤس کی تار',
              'کمپیوٹر کی میز',
              'بجلی کا بٹن'
            ],
            optionsEn: [
              'CPU (Central Processing Unit)',
              'Mouse cable',
              'Computer desk',
              'Power switch'
            ],
            correctIndex: 0,
            explanationUrdu: 'سی پی یو کمپیوٹر کا دماغ ہے جو تمام معلومات کا حساب اور احکامات چلاتا ہے۔',
            explanationEn: 'The CPU processes all instructions and calculations.'
          },
          {
            id: 'cd-b-l1-q2',
            questionUrdu: 'کمپیوٹر اسکرین پر کسی تصویر یا فائل کو کھولنے کے لیے عام طور پر کیا استعمال ہوتا ہے؟',
            questionEn: 'What is commonly used to point and click items on a screen?',
            optionsUrdu: [
              'ماؤس یا انگلی کا ٹچ',
              'صرف لاؤڈ اسپیکر',
              'پرنٹر کی سیاہی',
              'کاغذ کی پنسل'
            ],
            optionsEn: [
              'Mouse or finger touch',
              'Loudspeaker only',
              'Printer ink',
              'Paper pencil'
            ],
            correctIndex: 0,
            explanationUrdu: 'ماؤس یا ٹچ اسکرین سے ہم اشارہ کر کے کسی بھی چیز کو منتخب یا اوپن کرتے ہیں۔',
            explanationEn: 'A mouse or touchscreen pointer allows selecting and opening items.'
          },
          {
            id: 'cd-b-l1-q3',
            questionUrdu: 'کیا اسمارٹ موبائل فون بھی ایک قسم کا کمپیوٹر ہے؟',
            questionEn: 'Is a modern smartphone also a type of computer?',
            optionsUrdu: [
              'جی ہاں، یہ ایک چھوٹا اور جدید کمپیوٹر ہے',
              'نہیں، یہ صرف گھنٹی بجانے والی مشین ہے',
              'نہیں، یہ صرف کیمرہ ہے',
              'اس کا کمپیوٹر سے کوئی تعلق نہیں'
            ],
            optionsEn: [
              'Yes, it is a compact, modern pocket computer',
              'No, it is only a bell',
              'No, only a camera',
              'Has no relation to computing'
            ],
            correctIndex: 0,
            explanationUrdu: 'اسمارٹ فون کے اندر بھی پروسیسر، میموری اور اسکرین ہوتی ہے، اس لیے یہ مکمل کمپیوٹر ہے۔',
            explanationEn: 'Smartphones contain processors, memory, and displays, functioning as portable computers.'
          }
        ],
        practicalTask: {
          id: 'cd-b-l1-task',
          titleUrdu: 'عملی مشق: کمپیوٹر یا فون کے 3 بنیادی حصوں کی شناخت',
          titleEn: 'Practical Task: Identify 3 Core Device Parts',
          instructionsUrdu: 'اپنے پاس موجود کمپیوٹر یا اسمارٹ فون کو دیکھیں اور اس کے 3 حصوں (اسکرین، کی بورڈ/ٹچ، اسپیکر/مائیک) کا نام اور ایک ایک فائدہ لکھیں۔',
          instructionsEn: 'Look at your phone or computer and list 3 parts (Screen, Keyboard/Touch, Speaker) and their function.',
          deliverableUrdu: 'اپنے آلے کے ۳ اہم حصوں کے نام اور کام درج کریں۔',
          deliverableEn: 'Enter 3 device parts and their uses.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'cd-b-l2',
        titleUrdu: '2. فائل، فولڈر اور بنیادی کمپیوٹر استعمال',
        titleEn: '2. Files, Folders & Basic Computer Use',
        durationMinutes: 12,
        contentUrdu: `جس طرح ہم گھر کی الماری میں الگ الگ درازوں میں کپڑے، برتن یا کاغذات رکھتے ہیں، بالکل اسی طرح کمپیوٹر میں معلومات کو منظم رکھنے کے لیے "فولڈرز" استعمال ہوتے ہیں۔

📁 **فائل اور فولڈر میں فرق:**
1. **فائل (File):** کوئی بھی ایک تصویر، گانا، ویڈیو یا تحریری دستاویز (جیسے شادی کا کارڈ، یا بجلی کا بل) ایک فائل کہلاتی ہے۔
2. **فولڈر (Folder):** ایک ڈیجیٹل بستہ یا لفافہ جس میں ہم ملتی جلتی کئی فائلیں ایک جگہ اکٹھی رکھتے ہیں (جیسے "گھریلو اخراجات" کا فولڈر)۔

💡 **بہترین ترتیب کا اصول:**
ہمیشہ فائل کو واضح نام دیں جیسے "Bijli_Bill_March_2026" تاکہ ڈھونڈنے میں آسانی ہو۔`,
        contentEn: `Just like organizing physical papers into folders inside an almirah, computers use files and folders to keep information structured.

📁 **Files vs Folders:**
1. **File:** A single document, photo, song, or video.
2. **Folder:** A digital container that holds multiple related files.

💡 **Best Practice:**
Always name files clearly (e.g. 'House_Rent_2026') for effortless retrieval.`,
        keyTakeawaysUrdu: [
          'فائل کسی ایک دستاویز، تصویر یا ویڈیو کو کہتے ہیں۔',
          'فولڈر ایک ڈیجیٹل بستہ ہے جس میں متعلقہ فائلیں اکٹھی رکھی جاتی ہیں۔',
          'فائلوں کو بامقصد نام دینے سے وہ فوری تلاش کی جا سکتی ہیں۔'
        ],
        keyTakeawaysEn: [
          'A file is a single document, image, or media item.',
          'A folder is a digital container holding multiple files.',
          'Meaningful naming makes searching instant and stress-free.'
        ],
        quiz: [
          {
            id: 'cd-b-l2-q1',
            questionUrdu: 'کمپیوٹر میں "فولڈر" (Folder) کا اصل مقصد کیا ہے؟',
            questionEn: 'What is the primary purpose of a folder in a computer?',
            optionsUrdu: [
              'متعلقہ فائلوں کو ایک منظم جگہ پر سنبھال کر رکھنا',
              'کمپیوٹر کو بند کرنا',
              'اسکرین کا رنگ تبدیل کرنا',
              'کمپیوٹر کی اواز تیز کرنا'
            ],
            optionsEn: [
              'Organize and group related files cleanly in one place',
              'Turn off the computer',
              'Change screen colors',
              'Increase audio volume'
            ],
            correctIndex: 0,
            explanationUrdu: 'فولڈر فائلوں کو منظم رکھنے کے لیے ایک ڈیجیٹل لفافے کا کام دیتا ہے۔',
            explanationEn: 'Folders organize files systematically.'
          },
          {
            id: 'cd-b-l2-q2',
            questionUrdu: 'اگر آپ کے پاس سال 2026 کے بجلی کے 12 بل ہوں تو بہتر طریقہ کیا ہوگا؟',
            questionEn: 'How should you best store 12 monthly electricity bills?',
            optionsUrdu: [
              '"بجلی بل 2026" کے نام سے فولڈر بنا کر تمام بل اس میں رکھنا',
              'سب فائلوں کو بغیر نام کے ادھر ادھر بکھیر دینا',
              'تمام بلوں کو فورا ڈیلیٹ کر دینا',
              'فون کو پانی میں دھو لینا'
            ],
            optionsEn: [
              'Create a dedicated folder named "Electricity_Bills_2026" and save them inside',
              'Scatter them randomly without names',
              'Delete all of them immediately',
              'Wash the phone in water'
            ],
            correctIndex: 0,
            explanationUrdu: 'مخصوص فولڈر میں رکھنے سے بعد میں کسی بھی وقت بل فوری مل جاتا ہے۔',
            explanationEn: 'A dedicated folder makes future search effortless.'
          },
          {
            id: 'cd-b-l2-q3',
            questionUrdu: 'کمپیوٹر میں کسی فائل کو مستقل رکھنے کے لیے کیا عمل کیا جاتا ہے؟',
            questionEn: 'What action preserves a document permanently on storage?',
            optionsUrdu: [
              'سیو (Save) کرنا',
              'اسکرین بند کر کے چلے جانا',
              'کی بورڈ پر ہاتھ مارنا',
              'تار نکال دینا'
            ],
            optionsEn: [
              'Save the file',
              'Close screen without saving',
              'Bang on keyboard',
              'Unplug power cord'
            ],
            correctIndex: 0,
            explanationUrdu: 'سیو (Save) کرنے سے فائل کمپیوٹر کی میموری میں محفوظ ہو جاتی ہے۔',
            explanationEn: 'Saving commits the file into permanent storage.'
          }
        ],
        practicalTask: {
          id: 'cd-b-l2-task',
          titleUrdu: 'عملی مشق: ایک نیا فولڈر بنانا اور نام دینا',
          titleEn: 'Practical Task: Create & Name a New Folder',
          instructionsUrdu: 'اپنے فون یا کمپیوٹر پر "میری_معلومات" یا "Seekho_Notes" کے نام سے ۱ نیا فولڈر بنائیں اور اس کا نام نیچے لکھیں۔',
          instructionsEn: 'Create a new folder named "My_Documents" or "Seekho_Notes" and note its name below.',
          deliverableUrdu: 'اپنے بنائے گئے فولڈر کا نام درج کریں۔',
          deliverableEn: 'Enter the name of your created folder.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'cd-b-l3',
        titleUrdu: '3. انٹرنیٹ اور ویب سائٹ کیسے استعمال کریں؟',
        titleEn: '3. How to Use the Internet & Websites',
        durationMinutes: 15,
        contentUrdu: `انٹرنیٹ دنیا بھر کے کروڑوں کمپیوٹرز اور موبائل فونز کا ایک عالمی جال (Network) ہے۔ اس کے ذریعے ہم دنیا کے کسی بھی کونے میں موجود معلومات کو سیکنڈوں میں حاصل کر سکتے ہیں۔

🌐 **انٹرنیٹ استعمال کرنے کے 3 آسان قدم:**
1. **ویب براؤزر (Web Browser):** یہ وہ ایپ ہے جس سے ہم انٹرنیٹ کی دنیا میں داخل ہوتے ہیں (جیسے Google Chrome یا Safari)۔
2. **ایڈریس بار (Search Bar):** اوپر موجود وہ پٹی جہاں ہم کسی ویب سائٹ کا نام لکھتے ہیں (جیسے www.google.com)۔
3. **سرچ انجن (Search Engine):** اگر ویب سائٹ کا نام نہ معلوم ہو تو گوگل پر سادہ اردو یا انگریزی میں لکھیں، جیسے "آج کا موسم" یا "گندم کی فصل کی دیکھ بھال"۔

انٹرنیٹ ایک وسیع ڈیجیٹل لائبریری ہے، جہاں ہر سوال کا جواب موجود ہے۔`,
        contentEn: `The Internet is a global web connecting millions of devices worldwide, providing instant access to knowledge.

🌐 **3 Simple Steps:**
1. **Web Browser:** The app you open to browse (e.g. Google Chrome).
2. **Address Bar:** Where you type web addresses (e.g. www.google.com).
3. **Search:** If you do not know the exact link, type your question into Google.`,
        keyTakeawaysUrdu: [
          'انٹرنیٹ دنیا بھر کی معلومات کو باہم جوڑنے والا عالمی جال ہے۔',
          'ویب براؤزر (جیسے کروم) انٹرنیٹ پر صفحہ کھولنے کا ذریعہ ہے۔',
          'سرچ بار میں کوئی بھی سوال لکھ کر فوری معتبر معلومات مل جاتی ہیں۔'
        ],
        keyTakeawaysEn: [
          'The Internet is a vast worldwide network of knowledge.',
          'Web browsers are the gateway windows to the internet.',
          'Searching simple keywords instantly yields useful answers.'
        ],
        quiz: [
          {
            id: 'cd-b-l3-q1',
            questionUrdu: 'انٹرنیٹ پر معلومات دیکھنے کے لیے کون سا سافٹ ویئر یا ایپ استعمال ہوتی ہے؟',
            questionEn: 'Which software app is used to explore web pages on the internet?',
            optionsUrdu: [
              'ویب براؤزر (جیسے Google Chrome)',
              'صرف کیلکولیٹر',
              'کیمرے کا لینس',
              'گھڑی کا الارم'
            ],
            optionsEn: [
              'Web Browser (e.g., Google Chrome)',
              'Calculator only',
              'Camera lens',
              'Clock alarm'
            ],
            correctIndex: 0,
            explanationUrdu: 'ویب براؤزر انٹرنیٹ کی ویب سائٹس کھولنے کا بنیادی ٹول ہے۔',
            explanationEn: 'Web browsers render web pages from internet servers.'
          },
          {
            id: 'cd-b-l3-q2',
            questionUrdu: 'اگر آپ کو کسی شہر کا موسم معلوم کرنا ہو تو انٹرنیٹ پر کیا کرنا چاہیے؟',
            questionEn: 'How can you find the weather forecast of a city online?',
            optionsUrdu: [
              'گوگل سرچ بار میں شہر کا نام اور "موسم" لکھ کر تلاش کرنا',
              'فون کو آسمان کی طرف گھمانا',
              'فون کو فریج میں رکھ دینا',
              'کوئی بھی بٹن نہ دبانا'
            ],
            optionsEn: [
              'Type city name and "weather" in the search bar',
              'Wave phone at the sky',
              'Put phone in the fridge',
              'Do nothing'
            ],
            correctIndex: 0,
            explanationUrdu: 'گوگل سرچ میں سادہ الفاظ لکھنے سے سیکنڈوں میں موسم کی تفصیلی رپورٹ مل جاتی ہے۔',
            explanationEn: 'Typing keywords into search delivers instant weather reports.'
          },
          {
            id: 'cd-b-l3-q3',
            questionUrdu: 'ویب سائٹ کے پتے کے شروع میں "www" کا کیا مطلب ہوتا ہے؟',
            questionEn: 'What does "www" stand for in website addresses?',
            optionsUrdu: [
              'ورلڈ وائیڈ ویب (World Wide Web)',
              'واٹر واٹر واٹر',
              'ورلڈ ونڈو واچ',
              'ون ون ون'
            ],
            optionsEn: [
              'World Wide Web',
              'Water Water Water',
              'World Window Watch',
              'One One One'
            ],
            correctIndex: 0,
            explanationUrdu: 'ورلڈ وائیڈ ویب (WWW) انٹرنیٹ پر موجود تمام صفحات کا مجموعہ ہے۔',
            explanationEn: 'WWW stands for World Wide Web.'
          }
        ],
        practicalTask: {
          id: 'cd-b-l3-task',
          titleUrdu: 'عملی مشق: انٹرنیٹ پر مفید معلومات تلاش کرنا',
          titleEn: 'Practical Task: Search Useful Information Online',
          instructionsUrdu: 'براؤزر کھولیں اور اپنی پسند کے کسی ایک تاریخی مقام یا اپنے شہر کے بارے میں معلومات سرچ کر کے ۲ دلچسپ باتیں نوٹ کریں۔',
          instructionsEn: 'Open a browser, search for your hometown or a historical place, and note 2 interesting facts.',
          deliverableUrdu: 'تلاش کی گئی معلومات کا خلاصہ درج کریں۔',
          deliverableEn: 'Write a brief summary of what you searched.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'cd-b-l4',
        titleUrdu: '4. Email اور Online Communication',
        titleEn: '4. Email & Online Communication',
        durationMinutes: 14,
        contentUrdu: `ای میل (Email - Electronic Mail) ڈیجیٹل دور کا ڈاک کا خط ہے۔ اس کے ذریعے ہم دنیا بھر میں کہیں بھی بیٹھے شخص کو بغیر کسی خرچ کے فوری تحریر، تصاویر اور دستاویزات بھیج سکتے ہیں۔

✉️ **ای میل کا پتہ کیسا ہوتا ہے؟**
مثلاً: \`ahmed.khan@gmail.com\`
اس میں کوئی اسپیس (خالی جگہ) نہیں ہوتی اور \`@\` کا نشان لازمی ہوتا ہے۔

📝 **ایک اچھی ای میل کے 3 اہم حصے:**
1. **To (کس کو بھیجنا ہے):** وصول کنندہ کا درست ای میل ایڈریس۔
2. **Subject (موضوع):** ای میل کا خلاصہ (جیسے "چھٹی کی درخواست")۔
3. **Body (اصل پیغام):** شائستہ انداز میں سلام اور اصل بات، اور آخر میں اپنا نام۔`,
        contentEn: `Email is the modern electronic letter, enabling instantaneous, free messaging with attachments worldwide.

✉️ **Email Address Structure:**
e.g., \`name@example.com\` (no spaces, contains @ symbol).

📝 **3 Key Sections:**
1. **To:** Receiver's email address.
2. **Subject:** Short summary of the topic.
3. **Body:** Polite greeting, message, and your name.`,
        keyTakeawaysUrdu: [
          'ای میل سرکاری اور باضابطہ پیغامات بھیجنے کا سب سے معتبر ڈیجیٹل طریقہ ہے۔',
          'ای میل ایڈریس میں کوئی خالی جگہ نہیں ہوتی اور @ کا نشان آتا ہے۔',
          'ہمیشہ واضح عنوان اور شائستہ سلام و کلام کے ساتھ پیغام لکھیں۔'
        ],
        keyTakeawaysEn: [
          'Email is the standard medium for formal communication.',
          'Email addresses have no spaces and require the @ symbol.',
          'Always use clear subject lines and polite greetings.'
        ],
        quiz: [
          {
            id: 'cd-b-l4-q1',
            questionUrdu: 'درج ذیل میں سے کون سا ای میل ایڈریس درست انداز میں لکھا گیا ہے؟',
            questionEn: 'Which of the following is formatted as a valid email address?',
            optionsUrdu: [
              'ali.ahmed@gmail.com',
              'ali ahmed gmail com (درمیان میں خالی جگہیں)',
              'ali@@@gmail...com',
              'صرف علی کا نام'
            ],
            optionsEn: [
              'ali.ahmed@gmail.com',
              'ali ahmed gmail com (with spaces)',
              'ali@@@gmail...com',
              'Only the name Ali'
            ],
            correctIndex: 0,
            explanationUrdu: 'ای میل ایڈریس میں خالی جگہ کے بغیر نام، @ کا نشان اور سروس فراہم کنندہ (جیسے gmail.com) ہوتا ہے۔',
            explanationEn: 'Valid emails contain a username, @ symbol, and domain without spaces.'
          },
          {
            id: 'cd-b-l4-q2',
            questionUrdu: 'ای میل میں "Subject" (موضوع) لکھنے کا کیا فائدہ ہوتا ہے؟',
            questionEn: 'Why is the Subject line crucial in an email?',
            optionsUrdu: [
              'پڑھنے والے کو فورا معلوم ہو جاتا ہے کہ ای میل کس مقصد کے لیے ہے',
              'کمپیوٹر کی رفتار تیز ہو جاتی ہے',
              'ای میل کا رنگ تبدیل ہو جاتا ہے',
              'اس کا کوئی فائدہ نہیں ہوتا'
            ],
            optionsEn: [
              'The recipient immediately knows the core purpose of the message',
              'Makes computer run faster',
              'Changes email color',
              'Has no benefit'
            ],
            correctIndex: 0,
            explanationUrdu: 'سبجیکٹ لائن سے ای میل کی اہمیت اور موضوع ایک نظر میں واضح ہو جاتا ہے۔',
            explanationEn: 'The subject line provides an immediate summary.'
          },
          {
            id: 'cd-b-l4-q3',
            questionUrdu: 'ای میل کے ساتھ کوئی دستاویز یا تصویر منسلک کرنے کو کیا کہتے ہیں؟',
            questionEn: 'What is attaching a document or image to an email called?',
            optionsUrdu: [
              'اٹیچمنٹ (Attachment / پن کا نشان)',
              'ڈیلیٹ کرنا',
              'شارٹ کٹ',
              'سائن آؤٹ'
            ],
            optionsEn: [
              'Attachment (paperclip icon)',
              'Delete',
              'Shortcut',
              'Sign out'
            ],
            correctIndex: 0,
            explanationUrdu: 'اٹیچمنٹ (Attachment) کے ذریعے ہم خط کے ساتھ کوئی بھی فائل یا تصویر بھیجتے ہیں۔',
            explanationEn: 'Attachments append files or photos to an email.'
          }
        ],
        practicalTask: {
          id: 'cd-b-l4-task',
          titleUrdu: 'عملی مشق: ۱ باادب مختصر ای میل کا مسودہ تیار کرنا',
          titleEn: 'Practical Task: Draft a Short Polite Email',
          instructionsUrdu: 'کسی استاد یا افسر کو ۲ دن کی رخصت یا معلومات کے لیے ۱ مختصر ای میل (موضوع، سلام، پیغام، اپنا نام) لکھیں۔',
          instructionsEn: 'Draft a short polite email with Subject, Salutation, Body, and Sign-off.',
          deliverableUrdu: 'اپنا تیار کردہ ای میل ڈرافٹ درج کریں۔',
          deliverableEn: 'Write your email draft.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'cd-b-l5',
        titleUrdu: '5. Digital Safety اور محفوظ Internet استعمال',
        titleEn: '5. Digital Safety & Secure Internet Habits',
        durationMinutes: 12,
        contentUrdu: `انٹرنیٹ ایک شاندار دنیا ہے مگر جس طرح ہم اپنے گھر کے دروازے کو تالا لگاتے ہیں، بالکل اسی طرح ڈیجیٹل دنیا میں بھی حفاظت کے بنیادی اصول اپنانا ضروری ہے۔

🔒 **حفاظت کے 4 سنہری اصول:**
1. **مضبوط پاس ورڈ (Strong Password):** پاس ورڈ میں اپنا فون نمبر یا سادہ 123456 کبھی نہ رکھیں، بلکہ حروف، نمبر اور علامات ملا کر بنائیں (جیسے \`Pak#2026!k\`)۔
2. **او ٹی پی اور پن کوڈ کا تحفظ:** بینک کا پن، اے ٹی ایم کوڈ، یا موبائل پر آنے والا او ٹی پی (OTP) کبھی کسی کو فون یا میسج پر نہ بتائیں۔
3. **مشکوک لنکس سے پرہیز:** "آپ کا انعام نکلا ہے" جیسے لالچ والے میسجز پر کبھی کلک نہ کریں۔
4. **ذاتی معلومات کا پردہ:** اپنا شناختی کارڈ نمبر یا گھر کا مکمل پتہ کسی انجان ویب سائٹ پر نہ لکھیں۔`,
        contentEn: `Just as we lock our front doors, adopting basic digital safety habits protects us online.

🔒 **4 Golden Rules:**
1. **Strong Passwords:** Combine letters, numbers, and symbols. Never use simple 123456 or phone numbers.
2. **Never Share OTP/PIN:** Banks never ask for your PIN or OTP over call or SMS.
3. **Avoid Suspicious Links:** Beware of lottery and prize scam links.
4. **Protect Identity:** Keep national IDs and home addresses private.`,
        keyTakeawaysUrdu: [
          'اپنا پاس ورڈ اور بینک او ٹی پی کبھی کسی اجنبی کو نہ بتائیں۔',
          'مفت انعام اور لالچ والے مشکوک پیغامات اور لنکس کو نظرانداز کریں۔',
          'ذاتی اور خاندانی معلومات صرف معتبر اور تصدیق شدہ ویب سائٹس پر درج کریں۔'
        ],
        keyTakeawaysEn: [
          'Never reveal your passwords, PINs, or SMS OTPs.',
          'Ignore prize scam messages and suspicious links.',
          'Only enter sensitive data on authentic, secure platforms.'
        ],
        quiz: [
          {
            id: 'cd-b-l5-q1',
            questionUrdu: 'اگر کوئی نامعلوم شخص فون کر کے کہے کہ "آپ کے بینک سے بول رہا ہوں، اپنا OTP کوڈ بتائیں"، تو کیا کرنا چاہیے؟',
            questionEn: 'If a caller claims to be from a bank requesting your OTP code, what should you do?',
            optionsUrdu: [
              'ہرگز کوڈ نہ بتائیں اور فورا کال کاٹ دیں کیونکہ بینک کبھی او ٹی پی نہیں مانگتا',
              'فورا اپنا کوڈ بتا دینا چاہیے',
              'اسے اپنے پیسے بھیج دینے چاہئیں',
              'اس کا شکریہ ادا کرنا چاہیے'
            ],
            optionsEn: [
              'Never share the code and hang up immediately; banks never ask for OTPs',
              'Share code immediately',
              'Send money to caller',
              'Thank the caller'
            ],
            correctIndex: 0,
            explanationUrdu: 'او ٹی پی ایک خفیہ چابی ہے جو صرف آپ کے پاس ہونی چاہیے، بینک کبھی او ٹی پی نہیں مانگتا۔',
            explanationEn: 'Never disclose OTPs to anyone under any circumstances.'
          },
          {
            id: 'cd-b-l5-q2',
            questionUrdu: 'درج ذیل میں سے کون سا پاس ورڈ زیادہ مضبوط اور محفوظ ہے؟',
            questionEn: 'Which of the following is a strong and secure password?',
            optionsUrdu: [
              'Darakht@987#Z',
              '123456',
              'password',
              '0000'
            ],
            optionsEn: [
              'Darakht@987#Z',
              '123456',
              'password',
              '0000'
            ],
            correctIndex: 0,
            explanationUrdu: 'مضبوط پاس ورڈ میں بڑے چھوٹے حروف، نمبر اور علامات کا ملاپ ہوتا ہے۔',
            explanationEn: 'Strong passwords blend uppercase, lowercase, numbers, and symbols.'
          },
          {
            id: 'cd-b-l5-q3',
            questionUrdu: 'اگر واٹس ایپ پر پیغام آئے کہ "اس لنک پر کلک کریں اور 50 ہزار روپے انعام پائیں"، تو یہ کیا ہے؟',
            questionEn: 'If a message promises money upon clicking a link, what is it likely to be?',
            optionsUrdu: [
              'دھوکہ دہی (Scam) اور ہیکنگ کی کوشش جس سے بچنا لازمی ہے',
              'حقیقی سرکاری انعام',
              'مفت بجلی کا بل',
              'اسکول کا نتیجہ'
            ],
            optionsEn: [
              'A fraudulent phishing scam to steal data',
              'Genuine lottery prize',
              'Free electricity bill',
              'School report card'
            ],
            correctIndex: 0,
            explanationUrdu: 'انعام کے لالچ والے لنکس دھوکہ ہوتے ہیں جن پر کلک کرنے سے فون کا ڈیٹا خطرے میں پڑ سکتا ہے۔',
            explanationEn: 'Reward links are deceptive scams meant to compromise devices.'
          }
        ],
        practicalTask: {
          id: 'cd-b-l5-task',
          titleUrdu: 'عملی مشق: اپنی ڈیجیٹل حفاظت کے ۳ اصول طے کرنا',
          titleEn: 'Practical Task: Set 3 Digital Safety Commitments',
          instructionsUrdu: 'اپنے خاندان کی حفاظت کے لیے وہ ۳ باتیں لکھیں جن پر آپ انٹرنیٹ استعمال کرتے ہوئے سختی سے عمل کریں گے۔',
          instructionsEn: 'Write 3 personal digital safety rules you and your family will follow.',
          deliverableUrdu: 'ڈیجیٹل حفاظت کے ۳ اصول درج کریں۔',
          deliverableEn: 'Enter your 3 digital safety rules.',
          estimatedMinutes: 5
        }
      }
    ],
    quiz: [
      {
        id: 'cd-b-course-q1',
        questionUrdu: 'کمپیوٹر اور ڈیجیٹل دنیا کی بنیادی سمجھ کا اصل مقصد کیا ہے؟',
        questionEn: 'What is the primary outcome of understanding digital basics?',
        optionsUrdu: [
          'روزمرہ زندگی، تعلیم اور کام کے معاملات کو آسانی، خود اعتمادی اور حفاظت سے انجام دینا',
          'ہر وقت گیمز کھیلنا',
          'کمپیوٹر کو بند رکھنا',
          'صرف کاغذ پر لکھتے رہنا'
        ],
        optionsEn: [
          'Performing daily work, study, and life tasks independently, confidently, and securely',
          'Playing games 24/7',
          'Keeping computers shut',
          'Only relying on paper'
        ],
        correctIndex: 0,
        explanationUrdu: 'ڈیجیٹل مہارتیں انسان کو خود مختار اور بااختیار بناتی ہیں۔',
        explanationEn: 'Digital literacy empowers independence and security.'
      }
    ],
    practicalTask: {
      id: 'cd-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: خاندانی ڈیجیٹل تنظیم اور سیکیورٹی چیک لسٹ',
      titleEn: 'Capstone: Family Digital Safety & Organization Checklist',
      instructionsUrdu: 'اپنے گھر کے تمام موبائلز اور کمپیوٹرز کے لیے ایک آسان چیک لسٹ بنائیں جس میں محفوظ پاس ورڈز، فولڈرز کی تنظیم اور بلز محفوظ رکھنے کی ترتیب درج ہو۔',
      instructionsEn: 'Create a household digital checklist for safe passwords, organized files, and bill storage.',
      deliverableUrdu: 'تیار کردہ خاندانی چیک لسٹ درج کریں۔',
      deliverableEn: 'Enter your completed digital organization checklist.',
      estimatedMinutes: 10
    },
    projectDescriptionUrdu: 'اپنے خاندان کے لیے ایک مکمل ڈیجیٹل فائل اور سیکیورٹی گائیڈ تیار کریں۔',
    projectDescriptionEn: 'Create a complete digital file and safety guide for your family.'
  },

  // ==================================================
  // COURSE 2 — AI & TECHNOLOGY
  // ==================================================
  {
    id: 'ai-modern-tech-beginner',
    titleUrdu: 'AI اور جدید ٹیکنالوجی کی بنیادی سمجھ',
    titleEn: 'Understanding AI & Modern Technology',
    descriptionUrdu: 'مصنوعی ذہانت (AI) کیا ہے؟ روزمرہ زندگی، اچھے سوالات پوچھنے، تعلیم اور کام میں استعمال اور محفوظ و اخلاقی رہنمائی کا آسان کورس۔',
    descriptionEn: 'A beginner-friendly exploration of artificial intelligence, everyday applications, effective prompting, academic & career usage, and ethical safety for ages 10 to 70+.',
    category: 'AI & Technology',
    categoryUrdu: 'مصنوعی ذہانت و ٹیکنالوجی',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.0,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'Sparkles',
    coverGradient: 'from-emerald-700 via-teal-800 to-slate-900',
    realLifePurpose: {
      personalBenefitUrdu: 'کسی بھی نئے موضوع کو چند منٹوں میں اپنی مادری زبان میں سیکھ سکیں گے اور روزمرہ کاموں میں وقت بچائیں گے۔',
      personalBenefitEn: 'Learn any topic in minutes in simple Urdu and save valuable time on daily tasks.',
      familyHelpUrdu: 'خاندان کے بچوں کو ہوم ورک سمجھانے، بزرگوں کو صحت و خوراک کی عمومی معلومات فراہم کرنے میں معاونت ملے گی۔',
      familyHelpEn: 'Help children grasp homework, give elders clear dietary guidance, and organize family schedules.',
      communityHelpUrdu: 'علاقائی مسائل، درخواست نویسی اور زراعت یا کاروبار کے لیے جدید آئیڈیاز بنا کر لوگوں کی رہنمائی کر سکیں گے۔',
      communityHelpEn: 'Assist the community with petition drafting, local business plans, and farming techniques.',
      societalBenefitUrdu: 'معاشرے میں جدید ٹیکنالوجی کا ذمہ دارانہ، محفوظ اور تعمیری استعمال عام ہوگا۔',
      societalBenefitEn: 'Cultivates ethical, constructive, and productive adoption of modern AI across society.'
    },
    lessons: [
      {
        id: 'aim-b-l1',
        titleUrdu: '1. AI کیا ہے؟',
        titleEn: '1. What is AI?',
        durationMinutes: 10,
        contentUrdu: `مصنوعی ذہانت (AI) کمپیوٹر پروگرامز کی ایسی قسم ہے جس میں مشینوں کو انسانوں کی طرح زبان سمجھنے، سیکھنے اور مسائل حل کرنے کے قابل بنایا جاتا ہے۔

🤖 **آسان فہم مثال:**
جس طرح ایک بچہ اسکول میں کتابیں پڑھ کر اور استاد کی باتیں سن کر سیکھتا ہے، بالکل اسی طرح AI کمپیوٹر کو لاکھوں کتابوں، لغات اور معلومات سے سکھایا جاتا ہے۔ جب ہم اس سے کوئی بات پوچھتے ہیں تو وہ اپنے اسی علم کی بنیاد پر ہمیں بہترین جواب بنا کر دیتی ہے۔

یہ کوئی جادو یا روبوٹ کا خوفناک راج نہیں، بلکہ انسان کا بنایا ہوا ایک انتہائی مفید اور حاضر دماغ ڈیجیٹل معاون (Assistant) ہے۔`,
        contentEn: `Artificial Intelligence (AI) refers to software programmed to understand language, recognize patterns, and assist humans in problem-solving.

🤖 **Simple Analogy:**
Just as a learner reads books and studies under teachers, an AI system is trained on vast libraries of text and examples to generate helpful, instant answers.

It is not magic or a threat; it is a smart helper in your pocket.`,
        keyTakeawaysUrdu: [
          'AI انسان کی طرح زبان سمجھنے اور معلومات سے سیکھنے والا جدید کمپیوٹر نظام ہے۔',
          'یہ جادو نہیں بلکہ وسیع معلوماتی ڈیٹا سے تربیت یافتہ مددگار اوزار ہے۔',
          'اس کا مقصد انسان کی جگہ لینا نہیں بلکہ انسانی صلاحیت اور رفتار کو بڑھانا ہے۔'
        ],
        keyTakeawaysEn: [
          'AI is smart software designed to understand natural language and patterns.',
          'It is trained on extensive knowledge bases to provide context-aware help.',
          'Its goal is augmenting human intellect rather than replacing it.'
        ],
        quiz: [
          {
            id: 'aim-b-l1-q1',
            questionUrdu: 'AI (مصنوعی ذہانت) کا سب سے سادہ اور بنیادی مفہوم کیا ہے؟',
            questionEn: 'What is the most accurate definition of AI?',
            optionsUrdu: [
              'کمپیوٹر پروگرام کا زبان سمجھنا اور انسان کی مدد کے لیے مسائل حل کرنا',
              'بجلی کے پنکھے کی رفتار تیز کرنا',
              'صرف پرانی ٹی وی اسکرین',
              'ایک خالی ڈائری'
            ],
            optionsEn: [
              'Software that understands natural language and solves problems to assist humans',
              'Increasing ceiling fan speed',
              'An old TV screen',
              'A blank diary'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI کمپیوٹر کے ذریعے زبان سمجھنے اور رہنمائی فراہم کرنے کا جدید نظام ہے۔',
            explanationEn: 'AI enables machines to process human communication.'
          },
          {
            id: 'aim-b-l1-q2',
            questionUrdu: 'AI کس چیز سے سیکھ کر سوالات کے جوابات دیتی ہے؟',
            questionEn: 'How does AI acquire its ability to answer queries?',
            optionsUrdu: [
              'کتابوں، مضامین اور وسیع ڈیٹا کی تربیت سے',
              'خود بخود ہوا میں سے',
              'صرف رات کے وقت بغیر معلومات کے',
              'جادو کے منتر سے'
            ],
            optionsEn: [
              'By training on vast datasets of books, articles, and human knowledge',
              'Out of thin air',
              'At night without data',
              'Magical spells'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI کو انسانوں کے علمی ذخیرے اور ڈیٹا سے منظم انداز میں تربیت دی جاتی ہے۔',
            explanationEn: 'AI is trained on vast corpora of structured knowledge.'
          },
          {
            id: 'aim-b-l1-q3',
            questionUrdu: 'ہمیں AI کو اپنی زندگی میں کس حیثیت سے دیکھنا چاہیے؟',
            questionEn: 'How should we approach AI in our daily lives?',
            optionsUrdu: [
              'ایک مفید اور قابل اعتماد معاون اوزار کے طور پر جو کام آسان بناتا ہے',
              'ایک خوفناک شے جس سے بھاگ جانا چاہیے',
              'ایک ایسی چیز جو انسان کو سوچنے سے روک دے',
              'صرف گیم کھیلنے کی چیز'
            ],
            optionsEn: [
              'As a helpful, productive digital assistant that simplifies tasks',
              'As a terrifying monster to flee from',
              'Something to replace human thought',
              'Just a video game'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI انسان کی معاونت اور روزمرہ پیداواری صلاحیت کو بڑھانے کا بہترین اوزار ہے۔',
            explanationEn: 'AI serves as a powerful partner for human creativity and productivity.'
          }
        ],
        practicalTask: {
          id: 'aim-b-l1-task',
          titleUrdu: 'عملی مشق: اپنے الفاظ میں AI کی تعریف',
          titleEn: 'Practical Task: Define AI in Your Own Words',
          instructionsUrdu: 'اپنے کسی دوست یا چھوٹے بچے کو سمجھانے کے لیے AI کی ۱ آسان تعریف ۲ جملوں میں لکھیں۔',
          instructionsEn: 'Write a 2-sentence simple definition of AI as if explaining to a 10-year-old or elder.',
          deliverableUrdu: 'اپنی تعریف درج کریں۔',
          deliverableEn: 'Enter your definition.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'aim-b-l2',
        titleUrdu: '2. روزمرہ زندگی میں AI کا استعمال',
        titleEn: '2. AI in Daily Life & Practical Uses',
        durationMinutes: 12,
        contentUrdu: `بہت سے لوگ سمجھتے ہیں کہ AI صرف بڑی لیبارٹریوں میں ہے، لیکن سچ یہ ہے کہ ہم روزانہ جانے انجانے میں AI استعمال کر رہے ہیں۔

📱 **ہمارے فون میں AI کی 4 عام مثالیں:**
1. **اردو وائس ٹائپنگ (Voice Typing):** جب آپ مائیک کا بٹن دبا کر بولتے ہیں اور فون خود بخود اردو لکھ دیتا ہے تو یہ AI کا کمال ہے۔
2. **گوگل میپس (Google Maps):** راستہ تلاش کرنا اور ٹریفک کے مطابق سب سے چھوٹا راستہ بتانا۔
3. **زبان کا ترجمہ (Google Translate):** انگریزی یا عربی تحریر کی تصویر کھینچ کر فوری اردو ترجمہ حاصل کرنا۔
4. **کیمرے کی صفائی:** چہرے کو پہچاننا اور تصویر کو خود بخود خوبصورت بنانا۔`,
        contentEn: `AI is already part of our everyday routine through common mobile tools.

📱 **4 Everyday Examples:**
1. **Urdu Voice Typing:** Speaking into the mic and seeing speech converted to text.
2. **Google Maps:** Detecting traffic jams and computing fastest routes.
3. **Translation:** Instant photo translation of foreign signs and documents into Urdu.
4. **Camera Enhancements:** Face detection and auto image clarity.`,
        keyTakeawaysUrdu: [
          'ہم آواز کے ذریعے ٹائپنگ، راستے کی تلاش اور ترجمے میں روزانہ AI استعمال کرتے ہیں۔',
          'AI مختلف زبانوں کے درمیان فاصلے ختم کر کے بات چیت آسان بناتی ہے۔',
          'یہ ہر اسمارٹ فون میں بغیر کسی فیس کے دستیاب ہے۔'
        ],
        keyTakeawaysEn: [
          'Voice typing, map navigation, and translation are powered by AI.',
          'AI bridges language barriers effortlessly.',
          'These assistive capabilities are freely available on everyday smartphones.'
        ],
        quiz: [
          {
            id: 'aim-b-l2-q1',
            questionUrdu: 'جب آپ موبائل میں بول کر اردو لکھواتے ہیں تو کون سی ٹیکنالوجی کام کرتی ہے؟',
            questionEn: 'Which technology converts your spoken voice into Urdu text on a smartphone?',
            optionsUrdu: [
              'AI کی اسپیچ ریکوگنیشن (Speech-to-Text)',
              'صرف فون کی بیٹری',
              'سم کارڈ کا بیلنس',
              'فون کا کور'
            ],
            optionsEn: [
              'AI Speech Recognition (Speech-to-Text)',
              'Phone battery only',
              'SIM card balance',
              'Phone cover'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI آواز کے لہجے اور الفاظ کو پہچان کر فوری متن میں تبدیل کرتی ہے۔',
            explanationEn: 'AI voice recognition models transcribe spoken sound into written text.'
          },
          {
            id: 'aim-b-l2-q2',
            questionUrdu: 'گوگل میپس پر رش اور ٹریفک کا درست راستہ بتانے میں کس چیز کا عمل دخل ہے؟',
            questionEn: 'How does Google Maps determine fast routes and live traffic congestion?',
            optionsUrdu: [
              'AI اور ڈیٹا کے تجزیے کا نظام',
              'سڑک پر کھڑے پولیس اہلکار کی دستی ڈائری',
              'صرف گاڑی کا ٹائر',
              'سڑک کے کنارے لگے درخت'
            ],
            optionsEn: [
              'AI data analytics and routing algorithms',
              'A handwritten paper diary',
              'Car tires only',
              'Trees beside the road'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI ہزاروں گاڑیوں کی رفتار اور مقام دیکھ کر بہترین راستہ تجویز کرتی ہے۔',
            explanationEn: 'AI processes real-time GPS signals to optimize navigation.'
          },
          {
            id: 'aim-b-l2-q3',
            questionUrdu: 'اگر کسی انگریزی دوائی کے ڈبے پر لکھی ہدایات سمجھ نہ آئیں تو AI سے کیا مدد لی جا سکتی ہے؟',
            questionEn: 'How can AI help understand foreign language medication instructions?',
            optionsUrdu: [
              'کیمرے سے تصویر کھینچ کر اردو میں آسان مفہوم سمجھنا اور پھر ڈاکٹر سے تصدیق کرنا',
              'ڈبے کو پھینک دینا',
              'بغیر پڑھے ساری گولیاں کھا لینا',
              'کوئی عمل نہ کرنا'
            ],
            optionsEn: [
              'Translate using camera translation to understand context, then verify with a doctor',
              'Throw medicine away',
              'Ingest all pills blindly',
              'Ignore completely'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI کیمرے سے ترجمہ کر کے زبان کی مشکل فوری حل کر دیتی ہے۔',
            explanationEn: 'Visual translation translates text immediately into Urdu.'
          }
        ],
        practicalTask: {
          id: 'aim-b-l2-task',
          titleUrdu: 'عملی مشق: موبائل پر وائس ٹائپنگ کا تجربہ',
          titleEn: 'Practical Task: Test Voice Typing on Phone',
          instructionsUrdu: 'اپنے موبائل میں واٹس ایپ یا میسج ایپ کھولیں، مائیک دبائیں اور اردو میں ۱ جملہ بول کر ٹائپ کروائیں اور نیچے لکھیں۔',
          instructionsEn: 'Open voice typing on your phone, speak a short sentence in Urdu, and paste what was typed.',
          deliverableUrdu: 'وائس ٹائپنگ سے لکھا گیا جملہ درج کریں۔',
          deliverableEn: 'Enter your voice-typed sentence.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'aim-b-l3',
        titleUrdu: '3. AI سے اچھا سوال کیسے پوچھیں؟',
        titleEn: '3. How to Ask Effective Questions (Prompting)',
        durationMinutes: 14,
        contentUrdu: `AI سے بہترین جواب حاصل کرنے کا راز یہ ہے کہ آپ اپنا سوال کس انداز میں پوچھتے ہیں۔ کمپیوٹر کی زبان میں اس سوال کو "پرامپٹ" (Prompt) کہتے ہیں۔

🎯 **شاندار سوال کے 3 سنہری اصول:**
1. **پس منظر (Context):** AI کو بتائیں کہ آپ کون ہیں (مثلاً: "میں دسویں جماعت کا طالب علم ہوں" یا "میں کسان ہوں")۔
2. **واضح مقصد (Specific Goal):** گول مول بات کے بجائے ٹھوس سوال پوچھیں (جیسے "گندم میں زنگ کی بیماری کا حل بتائیں")۔
3. **جواب کا انداز (Format):** بتائیں کہ جواب کیسا چاہیے (مثلاً: "3 آسان نکات میں"، "سادہ اردو میں"، یا "مرحلہ وار فہرست بنائیں")۔

جتنا واضح اور تفصیلی سوال ہوگا، AI اتنا ہی بہترین اور کارآمد جواب دے گی۔`,
        contentEn: `The quality of AI answers depends on the quality of your prompt.

🎯 **3 Golden Prompting Principles:**
1. **Context:** Tell AI your perspective (e.g. "I am a 9th grade student" or "I run a grocery store").
2. **Specific Goal:** Be clear and concrete about what you need.
3. **Format:** Specify desired format (e.g. "in 3 bullet points", "simple Urdu", "step-by-step").`,
        keyTakeawaysUrdu: [
          'AI سے پوچھے جانے والے سوال کو پرامپٹ (Prompt) کہتے ہیں۔',
          'اپنا پس منظر اور مقصد واضح بیان کرنے سے درست ترین جواب ملتا ہے۔',
          'جواب کی ساخت (جیسے ۳ نکات، سادہ زبان) بتانا مفید ہوتا ہے۔'
        ],
        keyTakeawaysEn: [
          'The question you give to AI is called a prompt.',
          'Providing context and specificity yields the most accurate answers.',
          'Requesting bullet points or simple language makes output easy to read.'
        ],
        quiz: [
          {
            id: 'aim-b-l3-q1',
            questionUrdu: 'درج ذیل میں سے کون سا سوال AI کے لیے سب سے زیادہ واضح اور بہترین ہے؟',
            questionEn: 'Which of the following is the most effective and clear AI prompt?',
            optionsUrdu: [
              '"میں چھٹی جماعت کا طالب علم ہوں، مجھے شمسی نظام کے بارے میں ۳ آسان نکات میں اردو میں سمجھائیں"',
              '"مجھے کچھ بتاؤ"',
              '"سائنس"',
              '"کیا حال ہے"'
            ],
            optionsEn: [
              '"I am a 6th grade student; explain the Solar System in 3 simple Urdu bullet points"',
              '"Tell me something"',
              '"Science"',
              '"How are you"'
            ],
            correctIndex: 0,
            explanationUrdu: 'اس سوال میں طالب علم کا درجہ، موضوع اور جواب کا فارمیٹ (۳ نکات) سب کچھ واضح ہے۔',
            explanationEn: 'It provides target persona, exact subject, and structural format.'
          },
          {
            id: 'aim-b-l3-q2',
            questionUrdu: 'اگر AI آپ کو لمبا اور مشکل انگریزی جواب دے دے تو آپ کیا کہہ سکتے ہیں؟',
            questionEn: 'If AI outputs a long and complex response, how can you refine it?',
            optionsUrdu: [
              '"اسے بالکل سادہ اردو میں اور ۳ چھوٹے نکات میں دوبارہ لکھیں"',
              'کمپیوٹر بند کر کے پھینک دیں',
              'غصہ ہو جائیں',
              'کچھ نہ کہیں'
            ],
            optionsEn: [
              '"Please rewrite this in simple Urdu in 3 short bullet points"',
              'Smash the computer',
              'Get angry',
              'Stay silent'
            ],
            correctIndex: 0,
            explanationUrdu: 'آپ AI کو دوبارہ آسان اور اپنی پسندیدہ زبان میں لکھنے کی ہدایت دے سکتے ہیں۔',
            explanationEn: 'You can guide AI to simplify its response iteratively.'
          },
          {
            id: 'aim-b-l3-q3',
            questionUrdu: 'AI سے اچھا نتیجہ حاصل کرنے کے لیے سوال میں کیا شامل کرنا چاہیے؟',
            questionEn: 'What essential elements improve an AI prompt?',
            optionsUrdu: [
              'اپنا پس منظر، واضح مسئلہ اور جواب کا مطلوبہ انداز (Format)',
              'صرف ایک مبہم لفظ',
              'فضول شور',
              'کوئی تفصیل نہ دینا'
            ],
            optionsEn: [
              'Context, clear objective, and desired output format',
              'A single vague word',
              'Random noise',
              'No details'
            ],
            correctIndex: 0,
            explanationUrdu: 'پس منظر، مقصد اور فارمیٹ سے AI ٹھیک وہی تیار کرتی ہے جو آپ کو چاہیے۔',
            explanationEn: 'Context, objective, and format guarantee relevant results.'
          }
        ],
        practicalTask: {
          id: 'aim-b-l3-task',
          titleUrdu: 'عملی مشق: ۱ جامع اور بہترین پرامپٹ لکھنا',
          titleEn: 'Practical Task: Draft a High-Quality Prompt',
          instructionsUrdu: 'اپنی پسند کے کسی ایک کام (مثلاً پودوں کی بیماری کا علاج یا امتحان کی تیاری کا ٹائم ٹیبل) پر ۳ حصوں (پس منظر + مسئلہ + فارمیٹ) والا پرامپٹ لکھیں۔',
          instructionsEn: 'Draft a 3-part prompt (Context + Problem + Desired Format) for a topic of your choice.',
          deliverableUrdu: 'اپنا تیار کردہ سوال (Prompt) درج کریں۔',
          deliverableEn: 'Enter your crafted prompt.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'aim-b-l4',
        titleUrdu: '4. AI کو تعلیم اور کام میں استعمال کرنا',
        titleEn: '4. Using AI for Education, Study & Work',
        durationMinutes: 15,
        contentUrdu: `AI ہر عمر کے سیکھنے والے کے لیے ایک 24 گھنٹے دستیاب ذاتی استاد (Private Tutor) اور دفتری معاون کا کردار ادا کر سکتی ہے۔

📚 **تعلیم اور پڑھائی میں 3 فائدے:**
1. **مشکل اسباق کی آسان تفہیم:** کسی بھی سائنس یا حساب کے فارمولے کو سادہ اردو تشبیہ کے ساتھ سمجھنا۔
2. **امتحانی کوئز اور تیاری:** اپنے سبق کا متن دے کر خود سے پریکٹس ٹیسٹ اور سوالات بنوانا۔
3. **زبان کی درستگی:** اردو یا انگریزی مضمون کے ہجے (Spelling) اور گرامر درست کروانا۔

💼 **کاروبار اور روزمرہ کام میں 3 فائدے:**
1. دکان یا چھوٹے کاروبار کے لیے اشتہار، سوشل میڈیا پوسٹ یا پمفلٹ کا مواد لکھوانا۔
2. آفیشل درخواست، نوٹس یا ای میل کا معیاری ڈرافٹ تیار کروانا۔
3. حساب کتاب کے فارمولے اور بجٹ کی تجاویز حاصل کرنا۔`,
        contentEn: `AI serves as a round-the-clock private tutor and office helper for learners of all ages.

📚 **Education Benefits:**
1. Simplifying difficult academic concepts into plain language.
2. Generating practice questions and self-assessments.
3. Proofreading and correcting grammar.

💼 **Work & Business Benefits:**
1. Writing promotional flyers and business posts.
2. Drafting official letters and notices.
3. Brainstorming budget plans and workflows.`,
        keyTakeawaysUrdu: [
          'AI ذاتی استاد کی طرح ہر موضوع کو آپ کی رفتار کے مطابق سمجھاتی ہے۔',
          'دفتری درخواستیں، ای میلز اور اشتہاری مواد سیکنڈوں میں تیار ہو سکتے ہیں۔',
          'تیار شدہ مواد پر اپنی انسانی نظر اور فہم سے نظرثانی لازمی ہے۔'
        ],
        keyTakeawaysEn: [
          'AI behaves as an on-demand personal tutor pacing to your needs.',
          'Business notices, emails, and flyers can be drafted rapidly.',
          'Always review and tailor AI drafts with human judgment.'
        ],
        quiz: [
          {
            id: 'aim-b-l4-q1',
            questionUrdu: 'پڑھائی میں AI کا سب سے فائدہ مند اور اخلاقی استعمال کیا ہے؟',
            questionEn: 'What is the most productive and ethical way to use AI for study?',
            optionsUrdu: [
              'مشکل تصورات کو آسان مثالوں سے سمجھنا اور اپنی پریکٹس کے لیے سوالات بنوانا',
              'بغیر سمجھے نقل کر کے ہوم ورک جمع کروا دینا',
              'کتابیں پڑھنا چھوڑ دینا',
              'امتحان میں بے ایمانی کرنا'
            ],
            optionsEn: [
              'Understanding difficult concepts with simple examples and creating self-test quizzes',
              'Blindly copying homework without understanding',
              'Abandoning books completely',
              'Cheating on exams'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI فہم بڑھانے اور خود سیکھنے کا ذریعہ ہے، نقل کا نہیں۔',
            explanationEn: 'AI should be used to deepen comprehension, not for mindless copying.'
          },
          {
            id: 'aim-b-l4-q2',
            questionUrdu: 'اگر کسی دکاندار کو اپنے گاہکوں کے لیے عید سیل کا اشتہار بنانا ہو تو AI کیسے مدد کرے گی؟',
            questionEn: 'How can a shopkeeper utilize AI for an Eid promotional sale flyer?',
            optionsUrdu: [
              'پرکشش اور شائستہ اردو الفاظ میں اشتہاری تحریر اور آفرز کا متن تجویز کر کے',
              'دکان کا شٹر گرا کر',
              'سامان مفت بانٹ کر',
              'کوئی کام نہ کر کے'
            ],
            optionsEn: [
              'Drafting catchy, polite promotional text and special discount announcements',
              'Pulling down store shutters',
              'Giving goods away for free',
              'Doing nothing'
            ],
            correctIndex: 0,
            explanationUrdu: 'AI کاروبار کے لیے بہترین اور پرکشش تشہیری تحریریں چند لمحوں میں بنا دیتی ہے۔',
            explanationEn: 'AI crafts polished marketing copy in seconds.'
          },
          {
            id: 'aim-b-l4-q3',
            questionUrdu: 'AI سے تیار کردہ کسی بھی دفتری یا کاروباری خط کے بارے میں اہم اصول کیا ہے؟',
            questionEn: 'What is the golden rule after generating an official letter using AI?',
            optionsUrdu: [
              'اسے خود پڑھ کر اپنے نام، تاریخ اور ضروری تفصیلات کی تسلی اور تصدیق کرنا',
              'بغیر دیکھے فورا آگے بھیج دینا',
              'اسے جلا دینا',
              'اس میں غلطیاں تلاش نہ کرنا'
            ],
            optionsEn: [
              'Carefully review, personalize details, and verify before sending',
              'Forward blindly without reading',
              'Burn it',
              'Never check for errors'
            ],
            correctIndex: 0,
            explanationUrdu: 'انسانی نظرثانی سے خط میں غلطی کا امکان ختم ہو جاتا ہے۔',
            explanationEn: 'Human review ensures factual accuracy and personal context.'
          }
        ],
        practicalTask: {
          id: 'aim-b-l4-task',
          titleUrdu: 'عملی مشق: ۱ ہفتہ وار پڑھائی یا کام کا پلان بنوانا',
          titleEn: 'Practical Task: Build a Weekly Study / Work Schedule',
          instructionsUrdu: 'اپنے یا اپنے گھر کے کسی فرد کے روزمرہ معمول کے لیے AI کی مدد سے ۳ بنیادی اہداف پر مبنی ٹائم ٹیبل کا خاکہ لکھیں۔',
          instructionsEn: 'Outline a simple 3-goal weekly routine using AI guidance.',
          deliverableUrdu: 'اپنا تیار کردہ ہفتہ وار منصوبہ درج کریں۔',
          deliverableEn: 'Enter your weekly plan.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'aim-b-l5',
        titleUrdu: '5. AI کا ذمہ دارانہ اور محفوظ استعمال',
        titleEn: '5. Responsible, Safe & Ethical AI Usage',
        durationMinutes: 12,
        contentUrdu: `ٹیکنالوجی جتنی زیادہ طاقتور ہو، اس کے استعمال میں اتنی ہی زیادہ ذمہ داری اور احتیاط کی ضرورت ہوتی ہے۔

🛡️ **محفوظ اور ذمہ دارانہ AI کے 4 بنیادی اصول:**
1. **رازداری کا تحفظ (Privacy):** اپنے بینک پاس ورڈز، اے ٹی ایم پن، فون کے او ٹی پی، یا ذاتی دستاویزات AI چیٹ میں کبھی نہ لکھیں۔
2. **حقائق کی تصدیق (Fact Checking):** AI بعض اوقات غلط معلومات (Hallucination) بھی دے سکتی ہے۔ اہم طبی، قانونی یا مذہبی معاملات میں مستند ماہرین اور کتابوں سے تصدیق ضرور کریں۔
3. **دیانت داری اور اخلاق:** AI کو جھوٹی خبریں، جعلی تصاویر (Deepfakes) یا دوسروں کو دھوکہ دینے کے لیے کبھی استعمال نہ کریں۔
4. **سیکھنے کا جذبہ:** AI کو اپنا غلام نہ سمجھیں اور نہ ہی اس کے محتاج بنیں، بلکہ اسے اپنے علم میں اضافے کا ساتھی بنائیں۔`,
        contentEn: `Power demands responsibility. Using AI ethically keeps you and your family safe.

🛡️ **4 Core Ethical & Safety Pillars:**
1. **Privacy First:** Never input bank PINs, OTPs, or sensitive credentials into AI tools.
2. **Fact Checking:** AI can sometimes make mistakes. Always verify medical, legal, or religious facts with human experts.
3. **Honesty & Integrity:** Never create fake news, misleading media, or deceitful content.
4. **Active Thinking:** Use AI to enhance your intellect, not to shut down critical thinking.`,
        keyTakeawaysUrdu: [
          'ذاتی اور مالی پاس ورڈز کبھی بھی AI ٹولز میں درج نہ کریں۔',
          'طبی، قانونی اور اہم معاملات میں مستند ماہرین اور ڈاکٹرز سے تصدیق لازمی ہے۔',
          'ٹیکنالوجی کا استعمال سچائی، بھلائی اور مثبت تعمیری کاموں کے لیے کریں۔'
        ],
        keyTakeawaysEn: [
          'Never enter passwords, PINs, or private identity data into AI tools.',
          'Always verify critical medical or legal advice with certified human experts.',
          'Commit to using AI ethically for truth and positive community impact.'
        ],
        quiz: [
          {
            id: 'aim-b-l5-q1',
            questionUrdu: 'AI استعمال کرتے ہوئے درج ذیل میں سے کون سی معلومات کبھی بھی نہیں لکھنی چاہیے؟',
            questionEn: 'Which information should you NEVER enter into an AI assistant?',
            optionsUrdu: [
              'بینک اے ٹی ایم کا پن کوڈ، پرائیویٹ پاس ورڈ اور ذاتی خفیہ ڈیٹا',
              'پڑھائی کا کوئی عام سوال',
              'بچوں کے لیے کہانی کا موضوع',
              'موسم کا حال'
            ],
            optionsEn: [
              'Bank ATM PIN, private passwords, and confidential personal data',
              'A general study question',
              'A bedtime story theme for children',
              'Weather query'
            ],
            correctIndex: 0,
            explanationUrdu: 'اپنی ذاتی سیکیورٹی کے لیے مالی اور خفیہ پاس ورڈز کسی بھی آن لائن ٹول میں شیئر نہیں کرنے چاہئیں۔',
            explanationEn: 'Never enter private financial passwords or credentials into AI tools.'
          },
          {
            id: 'aim-b-l5-q2',
            questionUrdu: 'اگر AI کسی سنگین بیماری یا دوائی کے بارے میں مشورہ دے تو کیا کرنا چاہیے؟',
            questionEn: 'What must you do if AI provides advice regarding serious illness or medication?',
            optionsUrdu: [
              'حتمی علاج سے قبل مستند ڈاکٹر یا طبیب سے لازمی معائنہ اور تصدیق کرنی چاہیے',
              'بغیر کسی ڈاکٹر کے خود ہی دوائی خرید کر کھا لینی چاہیے',
              'تمام ڈاکٹروں کے پاس جانا بند کر دینا چاہیے',
              'دوسروں کو بھی بغیر تصدیق وہی دوائی دینی چاہیے'
            ],
            optionsEn: [
              'Always consult and verify with a certified human medical doctor before acting',
              'Immediately self-medicate without consulting a physician',
              'Stop visiting doctors completely',
              'Prescribe it to others blindly'
            ],
            correctIndex: 0,
            explanationUrdu: 'طبی اور جان بچانے والے معاملات میں مستند ڈاکٹر کا معائنہ اور تصدیق لازمی ہے۔',
            explanationEn: 'Critical medical decisions must always be verified by licensed healthcare professionals.'
          },
          {
            id: 'aim-b-l5-q3',
            questionUrdu: 'AI کا ذمہ دارانہ اور اخلاقی استعمال کیا کہلاتا ہے؟',
            questionEn: 'What defines responsible and ethical use of AI?',
            optionsUrdu: [
              'سچائی، دیانت داری اور معاشرے کی بھلائی کے لیے علم حاصل کرنا',
              'جھوٹی خبریں اور جعلی تصاویر بنا کر پھیلانا',
              'دوسروں کا حق مارنا اور دھوکہ دینا',
              'دوسروں کی پڑھائی میں رکاوٹ ڈالنا'
            ],
            optionsEn: [
              'Pursuing knowledge with honesty, truth, and community benefit',
              'Generating fake news and deceptive images',
              'Deceiving others and infringing rights',
              'Disrupting others education'
            ],
            correctIndex: 0,
            explanationUrdu: 'ٹیکنالوجی کی اصل خوبصورتی یہ ہے کہ اسے انسانیت کی خدمت اور سچائی کے لیے استعمال کیا جائے۔',
            explanationEn: 'Using technology to uplift people with integrity and truth is true responsible mastery.'
          }
        ],
        practicalTask: {
          id: 'aim-b-l5-task',
          titleUrdu: 'عملی مشق: ذاتی حفاظت اور ذمہ داری کا عہد',
          titleEn: 'Practical Task: Personal Safety Pledge',
          instructionsUrdu: 'حفاظتی اصولوں کو مدنظر رکھتے ہوئے وہ ۲ اہم باتیں لکھیں جن کا آپ AI استعمال کرتے ہوئے ہمیشہ خیال رکھیں گے (مثلاً: پرائیویسی کا تحفظ اور معلومات کی تصدیق)۔',
          instructionsEn: 'Write 2 personal safety rules you will always observe when using AI.',
          deliverableUrdu: 'حفاظت اور ذمہ داری کے ۲ اصول درج کریں۔',
          deliverableEn: 'Write your 2 golden safety rules.',
          estimatedMinutes: 5
        }
      }
    ],
    quiz: [
      {
        id: 'aim-b-course-q1',
        questionUrdu: 'AI اور جدید ٹیکنالوجی کی بنیادی سمجھ کا سب سے بڑا فائدہ کیا ہے؟',
        questionEn: 'What is the primary benefit of basic AI understanding?',
        optionsUrdu: [
          'معاشرے میں خود اعتمادی کے ساتھ جدید اوزاروں سے فائدہ اٹھانا اور وقت بچانا',
          'کمپیوٹر سے خوفزدہ رہنا',
          'صرف دوسروں کی نقل کرنا',
          'کوئی فائدہ نہیں'
        ],
        optionsEn: [
          'Empowering self-confidence to leverage modern assistive tools responsibly and save time',
          'Living in fear of machines',
          'Mindless imitation',
          'No advantage'
        ],
        correctIndex: 0,
        explanationUrdu: 'ٹیکنالوجی کی سمجھ خوف ختم کر کے ترقی کے دروازے کھولتی ہے۔',
        explanationEn: 'AI literacy removes apprehension and unlocks practical growth.'
      }
    ],
    practicalTask: {
      id: 'aim-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: اپنی برادری کے لیے AI کا عملی رہنما خاکہ',
      titleEn: 'Capstone: Community AI Action Guide',
      instructionsUrdu: 'اپنے خاندان یا محلے کے کسی ایک مسئلے پر AI سے ۳ عملی تجاویز طلب کریں اور ایک صفحے کا رہنما خاکہ نوٹ کریں۔',
      instructionsEn: 'Use AI to draft 3 actionable solutions for a real household or community need.',
      deliverableUrdu: 'تیار کردہ رہنمائی کا خلاصہ درج کریں۔',
      deliverableEn: 'Enter your summary guide.',
      estimatedMinutes: 10
    },
    projectDescriptionUrdu: 'AI کی مدد سے اپنی برادری کے لیے ایک صفحے کی عملی رہنمائی تیار کریں۔',
    projectDescriptionEn: 'Create a 1-page practical community guide using AI.'
  },

  // ==================================================
  // COURSE 3 — COMMUNICATION SKILLS
  // ==================================================
  {
    id: 'communication-skills-basics',
    titleUrdu: 'بہتر گفتگو اور Communication Skills',
    titleEn: 'Effective Communication & Interpersonal Skills',
    descriptionUrdu: 'روزمرہ گفتگو، توجہ سے سننا، باادب و واضح بات چیت، اختلافِ رائے میں احترام اور اعتماد کے ساتھ بات کرنے کی عملی تربیت۔',
    descriptionEn: 'Master essential everyday communication, active listening, polite & clear speech, respectful disagreement, and confident self-expression for ages 10 to 70+.',
    category: 'Communication & Languages',
    categoryUrdu: 'مواصلات اور زبانیں',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.0,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'MessageSquare',
    coverGradient: 'from-emerald-700 via-teal-700 to-cyan-900',
    realLifePurpose: {
      personalBenefitUrdu: 'جھجھک ختم ہوگی، ہر محفل، انٹرویو یا ملاقات میں اپنی بات پُراعتماد اور باوقار انداز میں پیش کر سکیں گے۔',
      personalBenefitEn: 'Overcome hesitation and express ideas with dignity, confidence, and clarity in any meeting or interview.',
      familyHelpUrdu: 'گھر میں غلط فہمیاں دور ہوں گی، آپس کے تعلقات میں محبت، صبر اور باہمی احترام بڑھے گا۔',
      familyHelpEn: 'Resolves misunderstandings at home, nurturing love, patience, and mutual respect among family members.',
      communityHelpUrdu: 'پنچایت، محلہ کمیٹی یا عوامی میٹنگز میں مسائل کو پُرامن اور مؤثر انداز میں پیش کر کے حل نکال سکیں گے۔',
      communityHelpEn: 'Present neighborhood issues constructively in community meetings and broker peaceful solutions.',
      societalBenefitUrdu: 'معاشرے میں رواداری، باہمی برداشت اور مہذب مکالمے کے کلچر کو فروغ ملے گا۔',
      societalBenefitEn: 'Promotes empathy, tolerance, and civil discourse across society.'
    },
    lessons: [
      {
        id: 'comm-b-l1',
        titleUrdu: '1. اچھی گفتگو کیوں ضروری ہے؟',
        titleEn: '1. Why is Effective Communication Essential?',
        durationMinutes: 10,
        contentUrdu: `گفتگو انسانوں کے دلوں اور ذہنوں کو ملانے والا پُل ہے۔ ہم جو کچھ بھی سوچتے ہیں، محسوس کرتے ہیں یا حاصل کرنا چاہتے ہیں، اس کا انحصار اس بات پر ہے کہ ہم اپنی بات دوسروں تک کیسے پہنچاتے ہیں۔

🗣️ **اچھی گفتگو کے 3 بڑے فوائد:**
1. **تعلقات میں مضبوطی:** میٹھی اور واضح بات سے گھر اور محلے میں پیار اور اعتماد بڑھتا ہے۔
2. **غلط فہمیوں کا خاتمہ:** بہت سے جھگڑے صرف ادھوری یا کڑوی بات کی وجہ سے جنم لیتے ہیں۔
3. **کامیابی کے دروازے:** چاہے اسکول ہو، دکان ہو یا دفتر، اچھے بولنے والے کو ہر جگہ عزت اور ترجیح ملتی ہے۔

شائستہ الفاظ (جیسے "شکریہ"، "برائے مہربانی"، "معذرت") گفتگو کا زیور ہیں۔`,
        contentEn: `Communication is the bridge connecting hearts and minds.

🗣️ **3 Core Benefits:**
1. **Stronger Relationships:** Polite words build warmth and enduring trust.
2. **Preventing Misunderstandings:** Most disputes arise from unclear or harsh wording.
3. **Unlocking Opportunities:** In studies, commerce, and work, polite communicators are respected and preferred.`,
        keyTakeawaysUrdu: [
          'گفتگو انسان کے اخلاق اور شخصیت کا آئینہ دار ہے۔',
          'شائستہ اور واضح الفاظ غلط فہمیوں اور جھگڑوں کو روکتے ہیں۔',
          'شکریہ اور معذرت جیسے الفاظ تعلقات کو مضبوط بناتے ہیں۔'
        ],
        keyTakeawaysEn: [
          'Speech reflects personality, empathy, and character.',
          'Clarity and courtesy prevent unnecessary conflicts.',
          'Courteous words like "thank you" and "sorry" solidify bonds.'
        ],
        quiz: [
          {
            id: 'comm-b-l1-q1',
            questionUrdu: 'اچھی اور شائستہ گفتگو کا سب سے بڑا فائدہ کیا ہوتا ہے؟',
            questionEn: 'What is the primary benefit of polite communication?',
            optionsUrdu: [
              'لوگوں کے درمیان اعتماد، محبت اور تعاون پیدا ہوتا ہے',
              'لوگ آپ سے دور بھاگنے لگتے ہیں',
              'جھگڑے بڑھتے ہیں',
              'کوئی فائدہ نہیں ہوتا'
            ],
            optionsEn: [
              'Builds trust, mutual affection, and cooperation',
              'Drives people away',
              'Increases hostility',
              'Has zero value'
            ],
            correctIndex: 0,
            explanationUrdu: 'شائستہ کلام دلوں کو جوڑتا ہے اور اعتماد کی فضا بناتا ہے۔',
            explanationEn: 'Polite words foster trust and understanding.'
          },
          {
            id: 'comm-b-l1-q2',
            questionUrdu: 'اگر کسی سے کوئی کام کروانا ہو تو کون سا جملہ سب سے بہتر ہے؟',
            questionEn: 'Which request phrasing is most courteous and effective?',
            optionsUrdu: [
              '"برائے مہربانی کیا آپ میری یہ مدد کر سکتے ہیں؟"',
              '"اے سنو، جلدی سے یہ کام کرو!"',
              '"تمہیں کچھ نہیں آتا"',
              '"چپ چاپ یہاں آؤ"'
            ],
            optionsEn: [
              '"Could you please help me with this?"',
              '"Hey you, do this right now!"',
              '"You know nothing"',
              '"Shut up and come here"'
            ],
            correctIndex: 0,
            explanationUrdu: '"برائے مہربانی" اور احترام کے الفاظ سے دوسرا شخص خوشی سے مدد کرتا ہے۔',
            explanationEn: 'Polite requests make others eager to help.'
          },
          {
            id: 'comm-b-l1-q3',
            questionUrdu: 'معاشرے میں زیادہ تر لڑائیاں اور رنجشیں کس وجہ سے پیدا ہوتی ہیں؟',
            questionEn: 'What is the root cause of most interpersonal disputes?',
            optionsUrdu: [
              'غلط لہجے، کڑوی زبان اور ادھوری بات چیت کی وجہ سے',
              'بہت زیادہ محبت کی وجہ سے',
              'شائستگی کی وجہ سے',
              'خاموشی کی وجہ سے'
            ],
            optionsEn: [
              'Harsh tone, biting words, and ambiguous communication',
              'Excessive love',
              'Too much politeness',
              'Peaceful silence'
            ],
            correctIndex: 0,
            explanationUrdu: 'سخت لہجہ اور بے صبری تعلقات میں دوری کا سب سے بڑا سبب ہے۔',
            explanationEn: 'Harsh tone and lack of patience fracture relationships.'
          }
        ],
        practicalTask: {
          id: 'comm-b-l1-task',
          titleUrdu: 'عملی مشق: شائستہ الفاظ کا روزمرہ مشاہدہ',
          titleEn: 'Practical Task: Everyday Polite Words Observation',
          instructionsUrdu: 'آج کے دن اپنے گھر والوں یا دوستوں کے ساتھ کم از کم ۳ مرتبہ شائستہ الفاظ ("شکریہ"، "برائے مہربانی"، "آپ کیسے ہیں") استعمال کریں اور ان کا مثبت ردعمل نوٹ کریں۔',
          instructionsEn: 'Use 3 courteous phrases ("Thank you", "Please", "How are you?") today and note the positive reaction.',
          deliverableUrdu: 'اپنا تجربہ درج کریں۔',
          deliverableEn: 'Write your observation.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'comm-b-l2',
        titleUrdu: '2. دوسروں کو توجہ سے سننا (Active Listening)',
        titleEn: '2. Listening with Attention (Active Listening)',
        durationMinutes: 12,
        contentUrdu: `ایک اچھا مقرر بننے سے پہلے ایک اچھا "سننے والا" بننا ضروری ہے۔ سننے کا مطلب صرف کانوں سے آواز سننا نہیں، بلکہ دل اور توجہ سے دوسرے کے جذبات اور بات کو سمجھنا ہے۔

👂 **توجہ سے سننے کے 3 سنہری اصول:**
1. **لقمہ نہ دیں:** جب دوسرا بات کر رہا ہو تو اس کی بات کو کاٹے بغیر مکمل ہونے دیں۔
2. **نظریں اور توجہ (Eye Contact):** موبائل فون کو سائیڈ پر رکھ کر بات کرنے والے کی طرف توجہ دیں اور سر ہلا کر اشارہ کریں کہ آپ سن رہے ہیں۔
3. **جواب دینے میں جلدی نہ کریں:** صرف جواب دینے کے لیے نہ سنیں، بلکہ بات کی گہرائی کو سمجھنے کے لیے سنیں۔

جب آپ کسی کو پوری توجہ سے سنتے ہیں تو وہ دل سے آپ کی عزت کرتا ہے۔`,
        contentEn: `Being a great speaker begins with being a great listener. Listening means understanding emotions and perspective rather than merely waiting to reply.

👂 **3 Golden Listening Rules:**
1. **Do not interrupt:** Let the speaker finish their thought completely.
2. **Give full attention:** Put away screens, maintain eye contact, and nod.
3. **Listen to understand:** Do not rush to respond; digest the message first.`,
        keyTakeawaysUrdu: [
          'اچھا سننے والا ہمیشہ عزت اور محبت پاتا ہے۔',
          'دوسرے کی بات کے دوران موبائل دیکھنا یا بات کاٹنا بے ادبی ہے۔',
          'پہلے پوری بات سمجھیں، پھر سکون سے اپنا جواب دیں۔'
        ],
        keyTakeawaysEn: [
          'Attentive listeners win respect and genuine affection.',
          'Looking at screens or interrupting someone is disrespectful.',
          'Comprehend fully before framing your calm reply.'
        ],
        quiz: [
          {
            id: 'comm-b-l2-q1',
            questionUrdu: 'جب کوئی خاندانی بزرگ یا دوست آپ سے کوئی اہم بات کر رہا ہو تو آپ کا رویہ کیسا ہونا چاہیے؟',
            questionEn: 'How should you behave when an elder or friend shares something important?',
            optionsUrdu: [
              'موبائل ایک طرف رکھ کر پوری توجہ سے ان کی بات سننا اور سر ہلا کر سمجھنے کی تائید کرنا',
              'موبائل پر گیم کھیلتے رہنا',
              'ان کی بات کے درمیان بار بار شور مچانا',
              'اٹھ کر بھاگ جانا'
            ],
            optionsEn: [
              'Put your phone aside, give full eye contact, and listen attentively',
              'Keep playing mobile games',
              'Repeatedly interrupt with loud noise',
              'Run away'
            ],
            correctIndex: 0,
            explanationUrdu: 'پوری توجہ سے سننا دوسرے انسان کے لیے سب سے بڑا احترام ہے۔',
            explanationEn: 'Undivided attention shows the highest form of respect.'
          },
          {
            id: 'comm-b-l2-q2',
            questionUrdu: '"صرف جواب دینے کے لیے سننا" بمقابلہ "سمجھنے کے لیے سننا" میں کیا فرق ہے؟',
            questionEn: 'What is the key difference between listening to reply vs listening to understand?',
            optionsUrdu: [
              'سمجھنے کے لیے سننے سے انسان دوسرے کا دکھ درد اور نقطہ نظر صحیح طرح جان پاتا ہے',
              'کوئی فرق نہیں ہوتا',
              'صرف جواب دینے سے تعلقات بہتر ہوتے ہیں',
              'سننا فضول ہوتا ہے'
            ],
            optionsEn: [
              'Listening to understand allows grasping the other person’s emotions and viewpoint',
              'There is no difference',
              'Replying rapidly improves bonds',
              'Listening is useless'
            ],
            correctIndex: 0,
            explanationUrdu: 'سمجھنے کے لیے سننا انسان کو دانشمند اور ہمدرد بناتا ہے۔',
            explanationEn: 'Empathetic listening creates deep connection.'
          },
          {
            id: 'comm-b-l2-q3',
            questionUrdu: 'اگر آپ کو دوسرے کی بات کے درمیان کوئی خیال آئے تو کیا کرنا چاہیے؟',
            questionEn: 'What should you do if an idea pops into your head while someone is speaking?',
            optionsUrdu: [
              'صبر سے انتظار کریں کہ وہ اپنی بات مکمل کر لیں، پھر اپنا نقطہ نظر پیش کریں',
              'فورا چیخ کر ان کی بات کاٹ دیں',
              'شور مچا دیں',
              'ہنسنا شروع کر دیں'
            ],
            optionsEn: [
              'Wait patiently until they finish, then share your view calmly',
              'Shout and cut them off mid-sentence',
              'Make a scene',
              'Start laughing loudly'
            ],
            correctIndex: 0,
            explanationUrdu: 'دوسرے کی بات مکمل ہونے دینا گفتگو کا بنیادی آداب ہے۔',
            explanationEn: 'Allowing the speaker to conclude is basic conversational etiquette.'
          }
        ],
        practicalTask: {
          id: 'comm-b-l2-task',
          titleUrdu: 'عملی مشق: ۲ منٹ بغیر لقمہ دیے سننے کا تجربہ',
          titleEn: 'Practical Task: 2 Minutes Active Listening Exercise',
          instructionsUrdu: 'آج کسی دوست، بزرگ یا بچے کی بات بغیر ٹوکے مسلسل ۲ منٹ توجہ سے سنیں اور پھر ان کی بات کا خلاصہ انہیں بتا کر پوچھیں کہ "کیا میں نے درست سمجھا؟"۔',
          instructionsEn: 'Listen to someone for 2 full minutes without interrupting, then summarize back to confirm understanding.',
          deliverableUrdu: 'اپنے سننے کے تجربے کا مختصر خلاصہ لکھیں۔',
          deliverableEn: 'Enter your listening experience summary.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'comm-b-l3',
        titleUrdu: '3. واضح اور باادب گفتگو',
        titleEn: '3. Clear, Concise & Respectful Speaking',
        durationMinutes: 14,
        contentUrdu: `بولتے وقت الفاظ کا انتخاب اور آواز کا لہجہ (Tone of Voice) بہت اہمیت رکھتا ہے۔ ایک ہی جملہ اگر نرم لہجے میں بولا جائے تو دعا بن جاتا ہے اور سخت لہجے میں بولا جائے تو تیر بن جاتا ہے۔

💬 **واضح اور باادب بات کرنے کے 3 رہنما اصول:**
1. **آواز کا اعتدال:** نہ اتنی دھیمی آواز ہو کہ سنائی نہ دے، اور نہ اتنی اونچی کہ چیخ معلوم ہو۔
2. **سادہ اور آسان الفاظ:** لمبی لمبی غیر ضروری کہانیاں سنانے کے بجائے اصل بات مختصر اور آسان فہم انداز میں کہیں۔
3. **چہرے کے تاثرات (Body Language):** مسکراہٹ اور نرمی کے ساتھ بات کریں تاکہ سننے والا خود کو محفوظ اور پُرسکون محسوس کرے۔

سچ اور کھری بات بھی ہمیشہ ادب کے دائرے میں رہ کر کہی جاتی ہے۔`,
        contentEn: `Word choice and vocal tone define the impact of speech.

💬 **3 Guidelines for Respectful Speaking:**
1. **Balanced Tone:** Neither too quiet to hear nor excessively loud.
2. **Clarity & Brevity:** Be concise and direct without confusing tangents.
3. **Warm Body Language:** A gentle smile and welcoming posture make the listener comfortable.`,
        keyTakeawaysUrdu: [
          'لہجے کی مٹھاس سخت بات کو بھی قابل قبول بنا دیتی ہے۔',
          'اپنی بات کو غیر ضروری لمبا کرنے کے بجائے مختصر اور واضح رکھیں۔',
          'چہرے کی مسکراہٹ اور نرم نگاہ بات چیت کو پُرکشش بناتی ہے۔'
        ],
        keyTakeawaysEn: [
          'A calm tone makes even difficult messages receptive.',
          'Keep statements concise and focused.',
          'Warm facial expressions create an inviting atmosphere.'
        ],
        quiz: [
          {
            id: 'comm-b-l3-q1',
            questionUrdu: 'گفتگو کے دوران آواز کا لہجہ کیسا ہونا چاہیے؟',
            questionEn: 'What vocal tone is ideal during conversation?',
            optionsUrdu: [
              'معتدل، نرم اور پُرسکون جس میں چیخ و پکار نہ ہو',
              'انتہائی غصے اور اونچی چیخ والا',
              'اتنا دھیما کہ کوئی سن ہی نہ سکے',
              'طنز اور مذاق اڑانے والا'
            ],
            optionsEn: [
              'Moderate, soft, and composed without shouting',
              'Angry and yelling',
              'Inaudible whisper',
              'Sarcastic and mocking'
            ],
            correctIndex: 0,
            explanationUrdu: 'معتدل اور نرم لہجہ سننے والے کے دل میں گھر کرتا ہے۔',
            explanationEn: 'A moderate and calm tone resonates best.'
          },
          {
            id: 'comm-b-l3-q2',
            questionUrdu: 'اگر آپ کو اپنی کوئی ضرورت یا مسئلہ کسی کے سامنے رکھنا ہو تو بہترین طریقہ کیا ہے؟',
            questionEn: 'What is the best way to present a personal need or issue?',
            optionsUrdu: [
              'واضح، آسان الفاظ میں براہِ راست اور باادب طریقے سے بات رکھنا',
              'گول مول اور الجھی ہوئی باتیں کرنا',
              'دوسرے پر الزام تراشی کرنا',
              'بغیر بتائے غصے میں بیٹھ جانا'
            ],
            optionsEn: [
              'Present the need clearly, politely, and directly in plain words',
              'Speak in confusing riddles',
              'Blame the listener',
              'Sulk in anger without communicating'
            ],
            correctIndex: 0,
            explanationUrdu: 'سیدھی اور شائستہ بات سے مسئلہ فوری حل ہوتا ہے۔',
            explanationEn: 'Direct and courteous phrasing resolves issues fastest.'
          },
          {
            id: 'comm-b-l3-q3',
            questionUrdu: 'گفتگو کے دوران مسکراہٹ اور آنکھوں کا رابطہ کیا ظاہر کرتا ہے؟',
            questionEn: 'What do a warm smile and eye contact convey?',
            optionsUrdu: [
              'سچائی، خلوص اور خود اعتمادی',
              'کمزوری',
              'بے وقوفی',
              'لاپرواہی'
            ],
            optionsEn: [
              'Sincerity, warmth, and self-confidence',
              'Weakness',
              'Foolishness',
              'Carelessness'
            ],
            correctIndex: 0,
            explanationUrdu: 'مسکراہٹ اور نظر کا رابطہ خلوص اور اعتماد کی نشانی ہے۔',
            explanationEn: 'Eye contact and smiles reflect genuine confidence and warmth.'
          }
        ],
        practicalTask: {
          id: 'comm-b-l3-task',
          titleUrdu: 'عملی مشق: اپنی بات کو ۳ مختصر جملوں میں بیان کرنا',
          titleEn: 'Practical Task: Express an Idea in 3 Clear Sentences',
          instructionsUrdu: 'اپنے کسی اہم مقصد یا پسندیدہ مشغلے کو ۳ آسان اور واضح جملوں میں لکھیں تاکہ کوئی بھی اسے آسانی سے سمجھ سکے۔',
          instructionsEn: 'Write down a personal goal or hobby in exactly 3 concise, clear sentences.',
          deliverableUrdu: 'اپنے ۳ واضح جملے درج کریں۔',
          deliverableEn: 'Enter your 3 concise sentences.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'comm-b-l4',
        titleUrdu: '4. اختلاف رائے میں احترام کیسے برقرار رکھیں؟',
        titleEn: '4. Respectful Disagreement & Conflict Resolution',
        durationMinutes: 12,
        contentUrdu: `ہر انسان کی سوچ، تجربہ اور رائے مختلف ہو سکتی ہے۔ دو لوگوں کا آپس میں مختلف رائے رکھنا کوئی برائی نہیں، بلکہ اصل کمال یہ ہے کہ اختلاف کے باوجود باہمی احترام اور محبت قائم رہے۔

🤝 **اختلافِ رائے کے 3 سنہری اصول:**
1. **رائے پر بات کریں، ذات پر نہیں:** کبھی کسی کی ذات، خاندان یا شکل و صورت پر طعنہ نہ کسیں، بلکہ صرف مسئلے پر بات کریں۔
2. **احترام والے الفاظ کا انتخاب:** کہیں کہ "میں آپ کے نقطہ نظر کی قدر کرتا ہوں، لیکن میرا تجربہ اس سے ذرا مختلف ہے"۔
3. **غصے کے وقت خاموشی:** اگر محسوس ہو کہ بحث گرما گرمی کی طرف جا رہی ہے تو گہرا سانس لیں اور گفتگو کو پُرسکون ہونے تک روک دیں۔

جیتنا مقصد نہیں ہونا چاہیے، بلکہ سچائی اور امن تک پہنچنا اصل مقصد ہے۔`,
        contentEn: `People naturally have differing perspectives. Disagreement is normal; preserving dignity and respect is the true mark of character.

🤝 **3 Disagreement Principles:**
1. **Focus on the issue, not the person:** Never attack personal background or character.
2. **Use validating phrases:** E.g. "I understand your perspective, though my experience differs slightly."
3. **Pause during anger:** Take a deep breath and pause the debate if emotions run high.`,
        keyTakeawaysUrdu: [
          'اختلاف رائے کا مطلب دشمنی نہیں بلکہ سوچ کا فرق ہے۔',
          'کبھی کسی کی ذات پر طنز یا ذاتی حملہ نہ کریں۔',
          'شائستہ انداز میں اپنی بات رکھیں اور بحث جیتنے کی ضد چھوڑ دیں۔'
        ],
        keyTakeawaysEn: [
          'Disagreement does not mean hostility; it is simply diversity of thought.',
          'Never make personal attacks or sarcastic remarks.',
          'Prioritize mutual understanding over "winning" an argument.'
        ],
        quiz: [
          {
            id: 'comm-b-l4-q1',
            questionUrdu: 'جب کسی معاملے میں آپ کا اور دوسرے کا خیال الگ ہو تو کیا کہنا سب سے مناسب ہے؟',
            questionEn: 'What is the most respectful way to express disagreement?',
            optionsUrdu: [
              '"میں آپ کی بات سمجھتا ہوں، البتہ میری رائے اس سے تھوڑی مختلف ہے"',
              '"تم بالکل غلط ہو اور کچھ نہیں جانتے"',
              '"تمہاری بات فضول ہے"',
              '"مجھ سے کبھی بات مت کرنا"'
            ],
            optionsEn: [
              '"I understand your point, though my perspective differs slightly"',
              '"You are totally wrong and ignorant"',
              '"Your idea is trash"',
              '"Never speak to me again"'
            ],
            correctIndex: 0,
            explanationUrdu: 'دوسرے کے احترام کا اعتراف کرتے ہوئے اپنی رائے دینا اعلیٰ ظرفی ہے۔',
            explanationEn: 'Acknowledging the other perspective preserves harmony.'
          },
          {
            id: 'comm-b-l4-q2',
            questionUrdu: 'اگر گفتگو کے دوران بحث گرما گرم ہو جائے اور غصہ آنے لگے تو کیا کرنا چاہیے؟',
            questionEn: 'What should you do when a debate heats up and anger rises?',
            optionsUrdu: [
              'تھوڑی دیر کے لیے خاموش ہو جانا اور پانی پی کر ماحول پُرسکون بنانا',
              'چیخنا چلانا اور گالیاں دینا',
              'ہاتھا پائی شروع کر دینا',
              'میز پر چیزیں پھینکنا'
            ],
            optionsEn: [
              'Pause, take a breath, drink water, and allow emotions to settle',
              'Shout and use insults',
              'Get physical',
              'Throw objects'
            ],
            correctIndex: 0,
            explanationUrdu: 'غصے کے وقت خاموشی سب سے بڑی حکمت اور دانائی ہے۔',
            explanationEn: 'Pausing during heated moments prevents irreparable regret.'
          },
          {
            id: 'comm-b-l4-q3',
            questionUrdu: 'صحت مند مکالمے کا اصل مقصد کیا ہوتا ہے؟',
            questionEn: 'What is the true goal of healthy civil dialogue?',
            optionsUrdu: [
              'ایک دوسرے کی بات کو سمجھنا اور بہتر حل تک پہنچنا',
              'دوسرے کو نیچا دکھانا اور ذلیل کرنا',
              'اپنی انا کی تسکین کرنا',
              'جھگڑا جیتنا'
            ],
            optionsEn: [
              'Mutual understanding and reaching a constructive solution together',
              'Humiliating the other person',
              'Satisfying personal ego',
              'Winning an argument at all costs'
            ],
            correctIndex: 0,
            explanationUrdu: 'مکالمے کا مقصد سچائی اور مل جل کر حل تلاش کرنا ہے۔',
            explanationEn: 'Civil dialogue seeks shared understanding and solutions.'
          }
        ],
        practicalTask: {
          id: 'comm-b-l4-task',
          titleUrdu: 'عملی مشق: اختلافِ رائے میں شائستہ جملہ بنانا',
          titleEn: 'Practical Task: Frame a Respectful Disagreement Statement',
          instructionsUrdu: 'کسی فرضی اختلافی مسئلے پر ایک ایسا باادب جملہ لکھیں جس میں دوسرے کی عزت بھی رہے اور آپ کا موقف بھی واضح ہو۔',
          instructionsEn: 'Write a respectful phrase you can use to disagree gracefully without offending.',
          deliverableUrdu: 'اپنا شائستہ اختلافی جملہ درج کریں۔',
          deliverableEn: 'Enter your respectful disagreement statement.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'comm-b-l5',
        titleUrdu: '5. اعتماد کے ساتھ بات کرنا (Speaking with Confidence)',
        titleEn: '5. Speaking with Confidence & Presence',
        durationMinutes: 12,
        contentUrdu: `بہت سے لوگ دل میں اچھے خیالات رکھنے کے باوجود جھجھک، خوف یا شرم کی وجہ سے بول نہیں پاتے۔ یاد رکھیں: آپ کی بات اور آواز قیمتی ہے، اور اعتماد مشق سے پیدا ہوتا ہے۔

✨ **پُراعتماد گفتگو کے 4 عملی طریقے:**
1. **گہرا سانس اور پُرسکون آغاز:** بولنے سے پہلے ایک گہرا سانس لیں تاکہ دل کی دھڑکن معمول پر رہے۔
2. **سیدھے کھڑے ہوں:** جھک کر یا منہ چھپا کر بولنے کے بجائے باوقار انداز میں کھڑے ہوں یا بیٹھیں۔
3. **نظریں ملائیں (Eye Contact):** سامنے موجود افراد کی آنکھوں میں نرمی سے دیکھ کر بات کریں۔
4. **غلطی سے نہ ڈریں:** کوئی بھی انسان مکمل نہیں ہوتا۔ اگر کوئی لفظ اٹک بھی جائے تو مسکرا کر بات جاری رکھیں۔

جب آپ سچائی اور خلوص سے بات کرتے ہیں تو اللہ تعالیٰ آپ کے کلام میں اثر پیدا فرما دیتا ہے۔`,
        contentEn: `Many hold wonderful ideas but hesitate out of fear or shyness. Confidence is a muscle developed through practice.

✨ **4 Steps to Confident Speaking:**
1. **Breathe Deeply:** Inhale calmly to steady your heartbeat before speaking.
2. **Upright Posture:** Sit or stand tall with open, dignified body language.
3. **Gentle Eye Contact:** Look at listeners warmly.
4. **Release Fear of Mistakes:** Imperfection is human; smile and continue seamlessly.`,
        keyTakeawaysUrdu: [
          'خود اعتمادی مسلسل مشق اور خلوصِ نیت سے پیدا ہوتی ہے۔',
          'بولنے سے قبل گہرا سانس لینا گھبراہٹ کو دور کرتا ہے۔',
          'غلطی کے ڈر کے بغیر اعتماد سے اپنی سچی بات کا اظہار کریں۔'
        ],
        keyTakeawaysEn: [
          'Confidence grows with consistent practice and sincere intent.',
          'Deep breathing relieves public speaking nervousness.',
          'Express truthful ideas without fearing minor verbal slips.'
        ],
        quiz: [
          {
            id: 'comm-b-l5-q1',
            questionUrdu: 'اگر کسی محفل یا کلاس میں بولتے وقت گھبراہٹ یا دل کی دھڑکن تیز ہو تو سب سے پہلا قدم کیا ہونا چاہیے؟',
            questionEn: 'If nervousness arises before speaking, what immediate step helps?',
            optionsUrdu: [
              'ایک دو گہرے سانس لینا، مسکرانا اور پرسکون ہو کر بات شروع کرنا',
              'وہاں سے بھاگ جانا',
              'رونا شروع کر دینا',
              'ہر وقت خاموش رہنا'
            ],
            optionsEn: [
              'Take a couple of deep breaths, smile, and begin calmly',
              'Run away from the venue',
              'Start crying',
              'Remain forever mute'
            ],
            correctIndex: 0,
            explanationUrdu: 'گہرا سانس لینے سے ذہن پُرسکون اور اعصاب قابو میں آ جاتے ہیں۔',
            explanationEn: 'Deep rhythmic breathing steadies nerves immediately.'
          },
          {
            id: 'comm-b-l5-q2',
            questionUrdu: 'پُراعتماد انسان کی باڈی لینگویج (جسمانی انداز) کیسی ہوتی ہے؟',
            questionEn: 'What characterizes the body language of a confident speaker?',
            optionsUrdu: [
              'سیدھی اور باوقار حالت، چہرے پر نرم مسکراہٹ اور باہمی نظر کا رابطہ',
              'گردن جھکا کر نیچے فرش کو دیکھنا',
              'ہاتھ پاؤں کپکپانا',
              'ہاتھوں سے چہرہ چھپا لینا'
            ],
            optionsEn: [
              'Upright dignified posture, gentle smile, and attentive eye contact',
              'Looking down at the floor',
              'Shivering and slouching',
              'Covering face with hands'
            ],
            correctIndex: 0,
            explanationUrdu: 'باوقار انداز اور مسکراہٹ سامنے والے کو متاثر کرتی ہے۔',
            explanationEn: 'Upright posture and warm gaze project genuine presence.'
          },
          {
            id: 'comm-b-l5-q3',
            questionUrdu: 'اگر بولتے وقت زبان سے کوئی غلط لفظ نکل جائے تو کیا کرنا چاہیے؟',
            questionEn: 'What should you do if you make a verbal slip or stutter?',
            optionsUrdu: [
              'مسکرا کر "معذرت" کہیں اور اعتماد کے ساتھ اپنی بات آگے بڑھائیں',
              'شرم کے مارے ہمیشہ کے لیے بولنا چھوڑ دیں',
              'دوسروں پر غصہ کریں',
              'جھوٹ بولنے لگیں'
            ],
            optionsEn: [
              'Smile, apologize gracefully, and continue speaking confidently',
              'Quit speaking forever out of embarrassment',
              'Get angry at listeners',
              'Start lying'
            ],
            correctIndex: 0,
            explanationUrdu: 'غلطی تسلیم کر کے مسکرانا خود اعتمادی کی اعلیٰ ترین مثال ہے۔',
            explanationEn: 'Gracefully smiling through a slip demonstrates supreme self-assurance.'
          }
        ],
        practicalTask: {
          id: 'comm-b-l5-task',
          titleUrdu: 'عملی مشق: آئینے یا موبائل کیمرے کے سامنے ۱ منٹ کی گفتگو',
          titleEn: 'Practical Task: 1-Minute Mirror Speaking Practice',
          instructionsUrdu: 'آئینے کے سامنے یا اپنے فون کا کیمرہ آن کر کے ۱ منٹ تک پُراعتماد انداز میں اپنے پسندیدہ موضوع پر بولیں اور اپنی باڈی لینگویج کا جائزہ لیں۔',
          instructionsEn: 'Speak for 1 minute in front of a mirror or camera with confidence and observe your posture.',
          deliverableUrdu: 'اپنے بولنے کے تجربے کا احساس درج کریں۔',
          deliverableEn: 'Write your 1-minute speaking reflection.',
          estimatedMinutes: 5
        }
      }
    ],
    quiz: [
      {
        id: 'comm-b-course-q1',
        questionUrdu: 'بہتر گفتگو اور Communication Skills کا ہماری زندگی پر سب سے گہرا اثر کیا ہوتا ہے؟',
        questionEn: 'What is the greatest long-term impact of communication skills on our life?',
        optionsUrdu: [
          'عزت، خلوص، خاندانی سکون اور معاشرتی ترقی میں قائدانہ کردار ادا کرنے کی صلاحیت',
          'صرف زیادہ بولتے رہنا',
          'دوسروں پر رعب جمانا',
          'کوئی اثر نہیں'
        ],
        optionsEn: [
          'Earning respect, nurturing family peace, and stepping up with leadership in community progress',
          'Speaking continuously without thought',
          'Intimidating others',
          'No impact'
        ],
        correctIndex: 0,
        explanationUrdu: 'بہترین گفتگو انسان کی دنیا اور آخرت کے تعلقات کو سنوارتی ہے۔',
        explanationEn: 'Mastering communication unlocks personal harmony and leadership.'
      }
    ],
    practicalTask: {
      id: 'comm-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: خاندانی یا برادری کے مکالمے کا رہنما چارٹر',
      titleEn: 'Capstone: Family & Community Civil Dialogue Charter',
      instructionsUrdu: 'اپنے گھر یا محلے میں پُرامن اور باادب گفتگو کے لیے ۳ سنہری اصولوں کا چارٹر تیار کریں (مثلاً: توجہ سے سننا، غصے میں خاموشی، شائستہ الفاظ کا استعمال)۔',
      instructionsEn: 'Draft a 3-rule Family & Community Civil Dialogue Charter for harmonious communication.',
      deliverableUrdu: 'تیار کردہ چارٹر کے ۳ اصول درج کریں۔',
      deliverableEn: 'Enter your 3 dialogue charter principles.',
      estimatedMinutes: 10
    },
    projectDescriptionUrdu: 'اپنے گھر اور محلے کے لیے باادب اور پُرامن گفتگو کا ایک رہنما چارٹر تیار کریں۔',
    projectDescriptionEn: 'Create a guiding charter for respectful and peaceful conversation at home and community.'
  },

  // 2. Computer & Digital Skills
  {
    id: 'computer-basics-office',
    titleUrdu: 'کمپیوٹر کی بنیادی مہارتیں، ٹائپنگ اور انٹرنیٹ',
    titleEn: 'Computer & Office Digital Basics',
    descriptionUrdu: 'کمپیوٹر چلانا، فائل مینجمنٹ، اردو/انگریزی ٹائپنگ اور ای میل بھیجنے کی مکمل عملی رہنمائی۔',
    descriptionEn: 'Master essential desktop computing, file organization, fast typing, and professional email writing.',
    category: 'Computer & Digital Skills',
    categoryUrdu: 'کمپیوٹر اور ڈیجیٹل بنیادی مہارتیں',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 3,
    ageGroups: ['10-15', '16-25', '26-45', '46-60'],
    icon: 'Laptop',
    coverGradient: 'from-blue-600 to-indigo-800',
    lessons: [
      {
        id: 'comp-l1',
        titleUrdu: 'سبق ۱: ونڈوز اور فولڈرز کی تنظیم',
        titleEn: 'Lesson 1: Windows Navigation & File Organization',
        durationMinutes: 15,
        contentUrdu: `کمپیوٹر میں اپنی اہم دستاویزات اور تصاویر کو محفوظ اور منظم رکھنا بہت آسان ہے۔

📁 **فائل مینجمنٹ کے 3 اصول:**
1. ہر کام کا الگ فولڈر بنائیں (مثلاً "گھریلو بل"، "تعلیمی اسناد")۔
2. فائل کو بامقصد نام دیں جیسے "Bijli_Bill_Jan_2026.pdf"۔
3. گوگل ڈرائیو یا یو ایس بی میں بیک اپ ضرور رکھیں۔`,
        contentEn: `Learn how to organize your documents, spreadsheets, and files cleanly.

📁 **3 Golden File Rules:**
1. Create dedicated folders (e.g., 'Invoices', 'Education', 'Photos').
2. Use clear file names like 'Electricity_Bill_Jan_2026.pdf'.
3. Always keep a backup on Google Drive or USB.`,
        keyTakeawaysUrdu: ['فولڈرز بنائیں', 'فائلوں کو واضح نام دیں', 'بیک اپ لازمی رکھیں'],
        keyTakeawaysEn: ['Create folders', 'Use clear naming', 'Maintain backups'],
      },
      {
        id: 'comp-l2',
        titleUrdu: 'سبق ۲: پروفیشنل ای میل اور ڈاکومنٹس لکھنا',
        titleEn: 'Lesson 2: Professional Email & Document Writing',
        durationMinutes: 18,
        contentUrdu: `ای میل سرکاری اور نجی رابطے کا سب سے معتبر ذریعہ ہے۔

✉️ **ایک اچھی ای میل کے اجزاء:**
1. **واضح Subject:** ای میل کا مقصد 4-5 الفاظ میں لکھیں۔
2. **شائستہ سلام:** 'محترم جناب' یا 'Dear Sir/Madam'۔
3. **مختصر متن:** بات کو پیراگراف میں واضح کریں۔`,
        contentEn: `Learn standard email etiquette for work and personal communication.

✉️ **Key Email Components:**
1. **Clear Subject:** State purpose in 4-5 words.
2. **Polite Salutation:** Respectful greetings.
3. **Structured Body:** Bullet points and clear asks.`,
        keyTakeawaysUrdu: ['سبجیکٹ واضح ہو', 'شائستہ لہجہ اپنائیں', 'اٹیچمنٹ چیک کریں'],
        keyTakeawaysEn: ['Clear subject line', 'Polite tone', 'Check attachments'],
      },
    ],
    quiz: [
      {
        id: 'comp-q1',
        questionUrdu: 'کسی بھی ای میل کا سب سے اہم حصہ جو سب سے پہلے دیکھا جاتا ہے کیا ہے؟',
        questionEn: 'What is the first thing a recipient sees in an email?',
        optionsUrdu: [
          'ای میل کا عنوان (Subject Line)',
          'فائل کا سائز',
          'کمپیوٹر کا ماڈل',
          'پاس ورڈ',
        ],
        optionsEn: [
          'Subject Line',
          'File size',
          'Computer brand',
          'Password',
        ],
        correctIndex: 0,
        explanationUrdu: 'سبجیکٹ لائن پڑھ کر ہی پڑھنے والا فیصلہ کرتا ہے کہ ای میل کتنی اہم ہے۔',
        explanationEn: 'The subject line provides immediate context about the email purpose.',
      },
    ],
    practicalTask: {
      id: 'comp-t1',
      titleUrdu: 'عملی مشق: کمپیوٹر یا فون پر نیا فولڈر بنا کر 2 فائلیں منظم کریں',
      titleEn: 'Practical Task: Create Folders & Organize 2 Files',
      instructionsUrdu: 'اپنے کمپیوٹر یا فون میں "سیکھو_تعلیم" نام کا فولڈر بنائیں اور اس میں اپنی دستاویز محفوظ کریں۔',
      instructionsEn: 'Create a dedicated "Seekho_Learning" folder and place 2 organized study files inside.',
      deliverableUrdu: 'فولڈر کا نام اور محفوظ کی گئی فائلوں کی فہرست درج کریں۔',
      deliverableEn: 'List the folder structure and files you organized.',
      estimatedMinutes: 20,
    },
    projectDescriptionUrdu: 'اپنے دفتری یا گھریلو کاغذی ریکارڈ کو ڈیجیٹل فولڈرز میں تبدیل کریں۔',
    projectDescriptionEn: 'Organize personal or shop financial records into structured digital folders.',
  },

  // 3. Communication & Languages
  {
    id: 'english-speaking-basics',
    titleUrdu: 'روزمرہ گفتگو کی عملی انگریزی',
    titleEn: 'Spoken English & Communication for Beginners',
    descriptionUrdu: 'عام بول چال، سلام دعا، خریداری اور تعارف کے لیے آسان اور پر اعتماد انگریزی جملے۔',
    descriptionEn: 'Build daily English conversation fluency, correct greetings, and confident spoken expression.',
    category: 'Communication & Languages',
    categoryUrdu: 'مواصلات اور زبانیں',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 3.5,
    ageGroups: ['10-15', '16-25', '26-45', '46-60'],
    icon: 'MessageSquare',
    coverGradient: 'from-sky-600 to-indigo-900',
    lessons: [
      {
        id: 'eng-l1',
        titleUrdu: 'سبق ۱: اپنا تعارف اور سلام دعا (Greetings & Self Introduction)',
        titleEn: 'Lesson 1: Greetings & Confident Self-Introduction',
        durationMinutes: 15,
        contentUrdu: `کسی سے بھی پہلی بار ملاقات پر پر اعتماد انداز میں تعارف کروانا کامیابی کی چابی ہے۔

🗣️ **ضروری جملے:**
- "Hello! My name is Ali, nice to meet you." (سلام! میرا نام علی ہے، آپ سے مل کر خوشی ہوئی۔)
- "I am from Barnala, Azad Kashmir." (میرا تعلق برنالہ، آزاد کشمیر سے ہے۔)
- "I am learning digital skills on Seekho." (میں سیکھو پر ڈیجیٹل ہنر سیکھ رہا ہوں۔)`,
        contentEn: `Learn natural, confident greetings and clear self-introductions for daily encounters.

🗣️ **Essential Phrases:**
- "Hello, nice to meet you."
- "I am pleased to introduce myself."
- "How can I help you today?"`,
        keyTakeawaysUrdu: ['مسکراہٹ کے ساتھ بات کریں', 'آواز واضح رکھیں', 'چھوٹے آسان جملے بولیں'],
        keyTakeawaysEn: ['Smile and maintain eye contact', 'Speak clearly', 'Keep sentences concise'],
      },
    ],
    quiz: [
      {
        id: 'eng-q1',
        questionUrdu: 'کسی سے ملنے پر شائستہ آغاز کیا ہونا چاہیے؟',
        questionEn: 'What is a polite way to greet someone in English?',
        optionsUrdu: [
          'Nice to meet you / Good day',
          'Go away',
          'Silent stare',
          'Who are you strictly',
        ],
        optionsEn: [
          'Nice to meet you / Good day',
          'Go away',
          'Silent stare',
          'Who are you strictly',
        ],
        correctIndex: 0,
        explanationUrdu: 'Nice to meet you یا Good morning انتہائی شائستہ اور بین الاقوامی طور پر مقبول ہے۔',
        explanationEn: 'Warm greetings build immediate rapport and trust.',
      },
    ],
    practicalTask: {
      id: 'eng-t1',
      titleUrdu: 'عملی مشق: 30 سیکنڈ کا صوتی تعارف انگریزی میں ریکارڈ کریں',
      titleEn: 'Practical Task: Record a 30-second Spoken Intro',
      instructionsUrdu: 'اپنا نام، علاقہ اور شوق انگریزی میں بول کر مشق کریں اور چیک کریں۔',
      instructionsEn: 'Practice saying your name, location, and key ambition in 3 smooth English sentences.',
      deliverableUrdu: 'اپنے بولے گئے 3 جملے یہاں درج کریں۔',
      deliverableEn: 'Type out the 3 sentences you practiced aloud.',
      estimatedMinutes: 20,
    },
    projectDescriptionUrdu: 'کسی ساتھی یا دوست کے ساتھ 2 منٹ کا مکالمہ انگریزی میں کریں۔',
    projectDescriptionEn: 'Have a 2-minute simulated friendly conversation with a peer or AI teacher.',
  },

  // 4. Business & Freelancing
  {
    id: 'village-micro-business',
    titleUrdu: 'چھوٹے پیمانے کا مقامی کاروبار اور بجٹ',
    titleEn: 'Small-Scale Local Business & Budgeting',
    descriptionUrdu: 'کم سرمائے سے گاؤں اور محلے میں منافع بخش کاروبار شروع کرنے کے عملی اصول اور حساب کتاب۔',
    descriptionEn: 'Practical strategies to start and run a sustainable micro-business in local towns and rural communities.',
    category: 'Business & Freelancing',
    categoryUrdu: 'کاروبار اور فری لانسنگ',
    difficulty: 'Intermediate',
    difficultyUrdu: 'درمیانہ',
    estimatedHours: 3.5,
    ageGroups: ['16-25', '26-45', '46-60'],
    icon: 'Briefcase',
    coverGradient: 'from-amber-700 to-stone-900',
    lessons: [
      {
        id: 'biz-l1',
        titleUrdu: 'سبق ۱: گاؤں کی ضروریات تلاش کرنا اور کم خرچ آغاز',
        titleEn: 'Lesson 1: Finding unfulfilled local needs and lean start',
        durationMinutes: 16,
        contentUrdu: `ایک کامیاب کاروبار ہمیشہ لوگوں کے کسی حقیقی مسئلے کو حل کرتا ہے۔

💼 **کاروباری منصوبہ بندی کے 4 ستون:**
1. **ضرورت کی پہچان:** لوگ کس چیز کے لیے دور کے شہر جاتے ہیں؟
2. **سرمایہ کی بچت:** بڑی دکان کرائے پر لینے کے بجائے ہوم ڈیلیوری یا واٹس ایپ آرڈرز سے شروع کریں۔
3. **دیانت داری و کوالٹی:** معیار پر کبھی سمجھوتہ نہ کریں۔
4. **روزانہ کا کھاتہ:** ایک الگ کاپی میں آمدن اور خرچ روزانہ درج کریں۔`,
        contentEn: `A great local enterprise solves a tangible daily friction in the village or town.

💼 **4 Pillars of Micro-Enterprise:**
1. **Identify Local Need:** What goods/services require travel to distant towns?
2. **Low Overhead:** Start lean via WhatsApp catalog or direct delivery.
3. **Integrity & Quality:** Consistency builds lifelong local trust.
4. **Daily Bookkeeping:** Always record inflows and outflows daily.`,
        keyTakeawaysUrdu: ['مسئلے کا حل ہی کاروبار ہے', 'دیانت داری سے گاہک بنتے ہیں', 'حساب کتاب روزانہ لکھیں'],
        keyTakeawaysEn: ['Solve real problems', 'Trust drives recurring business', 'Maintain daily accounting'],
      },
    ],
    quiz: [
      {
        id: 'biz-q1',
        questionUrdu: 'کاروبار کے منافع اور نقصان کا درست اندازہ لگانے کے لیے کیا ضروری ہے؟',
        questionEn: 'What is vital to accurately track business profit and loss?',
        optionsUrdu: [
          'صرف زبانی یاد رکھنا',
          'ہر ایک روپے کی آمدن اور خرچ کو روزانہ ڈائری یا ایپ میں لکھنا',
          'گاہکوں سے بغیر بتائے زیادہ پیسے لینا',
          'کوئی ریکارڈ نہ رکھنا',
        ],
        optionsEn: [
          'Relying purely on memory',
          'Recording every single expense and revenue in a daily ledger',
          'Overcharging customers secretly',
          'Keeping zero financial notes',
        ],
        correctIndex: 1,
        explanationUrdu: 'تحریری حساب کتاب کاروبار کی شفافیت اور ترقی کی پہلی شرط ہے۔',
        explanationEn: 'Written bookkeeping ensures clarity, prevents cash leakage, and guarantees sustainable growth.',
      },
    ],
    practicalTask: {
      id: 'biz-t1',
      titleUrdu: 'عملی مشق: اپنے علاقے کے لیے 1 صفحے کا منی بزنس پلان بنائیں',
      titleEn: 'Practical Task: Draft a 1-Page Micro Business Plan',
      instructionsUrdu: 'کاروبار کا نام، مصنوعات، گاہک، متوقع لاگت اور ممکنہ منافع 5 نکات میں لکھیں۔',
      instructionsEn: 'Outline your proposed business idea, target neighbors, startup cost, and revenue model.',
      deliverableUrdu: 'اپنے پلان کے اہم نکات درج کریں۔',
      deliverableEn: 'Submit your 5-point plan summary.',
      estimatedMinutes: 30,
    },
    projectDescriptionUrdu: 'مقامی پراڈکٹ کی تشہیر کے لیے 1 ویڈیو اور 1 تصویری اشتہار بنائیں اور پہلے 3 گاہک تلاش کریں۔',
    projectDescriptionEn: 'Create a local catalog sheet and secure initial customer feedback.',
  },

  // 5. Creative Skills
  {
    id: 'graphic-design-canva',
    titleUrdu: 'کینوا سے موبائل پر گرافک ڈیزائننگ',
    titleEn: 'Mobile Graphic Design with Canva',
    descriptionUrdu: 'اپنے موبائل سے پوسٹرز، سوشل میڈیا کارڈز، کاروباری بینرز اور تعلیمی تصاویر بنانا سیکھیں۔',
    descriptionEn: 'Learn to design stunning banners, social media posts, business flyers, and educational charts on your mobile.',
    category: 'Creative Skills',
    categoryUrdu: 'تخلیقی مہارتیں اور ڈیزائن',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 3,
    ageGroups: ['10-15', '16-25', '26-45', '46-60'],
    icon: 'Palette',
    coverGradient: 'from-amber-600 to-orange-800',
    lessons: [
      {
        id: 'canva-l1',
        titleUrdu: 'سبق ۱: کینوا ایپ کا تعارف اور لے آؤٹ کا انتخاب',
        titleEn: 'Lesson 1: Introduction to Canva and choosing templates',
        durationMinutes: 15,
        contentUrdu: `کینوا کے ذریعے آپ بغیر کسی مہنگے کمپیوٹر کے صرف اپنے موبائل فون سے خوبصورت پوسٹرز اور اشتہارات بنا سکتے ہیں۔

🎨 **بنیادی اصول:**
- رنگوں کا توازن: بیک گراؤنڈ ہلکا ہو تو تحریر گہری رکھیں۔
- فونٹس کی سادگی: پڑھنے میں آسان فونٹ استعمال کریں۔
- خالی جگہ (White Space): ڈیزائن کو زیادہ بھریں مت۔`,
        contentEn: `Canva allows anyone to create professional designs from a smartphone.

🎨 **Core Design Principles:**
- High Contrast: Dark text on light background.
- Clean Typography: Easy-to-read font styles.
- Generous White Space: Let elements breathe.`,
        keyTakeawaysUrdu: ['موبائل سے ڈیزائن ممکن ہے', 'رنگوں کا تضاد اہم ہے', 'سادگی خوبصورتی لاتی ہے'],
        keyTakeawaysEn: ['Mobile design is accessible', 'Contrast matters', 'Simplicity creates clarity'],
      },
    ],
    quiz: [
      {
        id: 'canva-q1',
        questionUrdu: 'ایک اچھے پوسٹر کا سب سے اہم مقصد کیا ہوتا ہے؟',
        questionEn: 'What is the primary goal of an effective design/poster?',
        optionsUrdu: [
          'بہت زیادہ چمکدار رنگ بھر دینا',
          'پیغام کو واضح اور آسانی سے پڑھنے کے قابل بنانا',
          'جتنی زیادہ تحریر ہو سکے لکھنا',
          'سب کچھ الٹا سیدھا رکھنا',
        ],
        optionsEn: [
          'Cluttering with maximum neon colors',
          'Delivering the message clearly and legibly',
          'Adding tiny cramped text everywhere',
          'Hiding the main contact info',
        ],
        correctIndex: 1,
        explanationUrdu: 'ڈیزائن کا اصل مقصد پیغام کو نظر کے سامنے واضح اور پرکشش بنانا ہے۔',
        explanationEn: 'Design is visual communication — clarity and legibility are paramount.',
      },
    ],
    practicalTask: {
      id: 'canva-t1',
      titleUrdu: 'عملی مشق: اپنے محلے یا اسکول کے لیے ایک معلوماتی پوسٹر بنائیں',
      titleEn: 'Practical Task: Create a Community Awareness Poster',
      instructionsUrdu: 'شجرکاری مہم، صفائی مہم یا اپنے چھوٹے کاروبار کے لیے ایک خوبصورت پوسٹر ڈیزائن کریں۔',
      instructionsEn: 'Design a clean poster for a local tree plantation drive, clean-up campaign, or small shop.',
      deliverableUrdu: 'پوسٹر کا عنوان اور تصویر/ڈیزائن کا لنک شیئر کریں۔',
      deliverableEn: 'Submit your poster title and brief description.',
      estimatedMinutes: 30,
    },
    projectDescriptionUrdu: 'اپنے گاؤں یا چھوٹے کاروبار کے لیے 3 سوشل میڈیا پوسٹس کا سیٹ تیار کریں۔',
    projectDescriptionEn: 'Create a bundle of 3 promotional/awareness flyers for a local initiative.',
  },

  // 6. Agriculture & Local Skills
  {
    id: 'organic-agriculture-kitchen',
    titleUrdu: 'جدید زراعت، باغبانی اور کچن گارڈننگ',
    titleEn: 'Organic Farming & Kitchen Gardening',
    descriptionUrdu: 'گھر کے صحن، چھت یا چھوٹے رقبے پر خالص سبزیاں اگانے اور نامیاتی کھاد بنانے کا طریقہ۔',
    descriptionEn: 'Learn modern water-saving techniques, rooftop kitchen gardening, and homemade organic composting.',
    category: 'Agriculture & Local Skills',
    categoryUrdu: 'جدید زراعت اور مقامی ہنر',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 4,
    ageGroups: ['16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'Sprout',
    coverGradient: 'from-green-700 to-emerald-900',
    lessons: [
      {
        id: 'agri-l1',
        titleUrdu: 'سبق ۱: مٹی کی تیاری اور قدرتی کمپوسٹ کھاد بنانا',
        titleEn: 'Lesson 1: Soil preparation & natural composting',
        durationMinutes: 18,
        contentUrdu: `قدرتی نامیاتی کھاد آپ کے باورچی خانے کے کچرے، سوکھے پتوں اور گوبر سے تیار ہوتی ہے جس پر کوئی خرچ نہیں آتا۔

🌱 **کمپوسٹ بنانے کا آسان طریقہ:**
1. گڑھا یا پرانی بالٹی لیں جس کے نیچے سوراخ ہوں۔
2. سبزیوں کے چھلکے اور سوکھے پتے تہہ در تہہ رکھیں۔
3. ہلکی نمی رکھیں اور ہر ہفتے الٹ پلٹ کریں۔
4. 40 سے 60 دنوں میں کالی، زرخیز مٹی نما کھاد تیار ہوگی۔`,
        contentEn: `Natural organic compost can be made right at home with kitchen scraps and dry leaves for zero cost.

🌱 **4 Simple Composting Steps:**
1. Take a ventilated bin or bucket.
2. Layer green scraps (vegetable peels) with brown materials (dry leaves).
3. Keep slightly moist and aerate weekly.
4. In 6-8 weeks, rich dark organic soil is ready.`,
        keyTakeawaysUrdu: ['باورچی خانے کا کچرا قیمتی کھاد ہے', 'کیمیکل سے پاک سبزیاں صحت بخش ہیں', 'کم لاگت اور ماحول دوست'],
        keyTakeawaysEn: ['Kitchen waste is nutrient-rich', 'Chemical-free food promotes health', 'Low-cost eco solution'],
      },
    ],
    quiz: [
      {
        id: 'agri-q1',
        questionUrdu: 'گھریلو کمپوسٹ کھاد بنانے کے لیے کن چیزوں کی ضرورت ہوتی ہے؟',
        questionEn: 'What are the main components for home organic compost?',
        optionsUrdu: [
          'پلاسٹک اور شیشہ',
          'سبزیوں کے چھلکے، سوکھے پتے اور قدرتی نمی',
          'کیمیائی زہر اور تیزاب',
          'صرف سیمنٹ اور ریت',
        ],
        optionsEn: [
          'Plastic and broken glass',
          'Vegetable peels, dry leaves, and light moisture',
          'Chemical pesticides',
          'Cement and sand',
        ],
        correctIndex: 1,
        explanationUrdu: 'سبزیوں کے چھلکے نائٹروجن اور سوکھے پتے کاربن فراہم کرتے ہیں جو قدرتی طور پر گل کر بہترین کھاد بنتے ہیں۔',
        explanationEn: 'Organic scraps and dry foliage decompose naturally to nourish the soil.',
      },
    ],
    practicalTask: {
      id: 'agri-t1',
      titleUrdu: 'عملی مشق: گملے یا پرانی پلاسٹک کی بوتل میں دھنیا/پودینہ لگائیں',
      titleEn: 'Practical Task: Plant fresh mint or coriander in a recycled container',
      instructionsUrdu: 'کسی خالی ڈبے یا گملے میں زرخیز مٹی ڈالیں اور بیج یا پودینے کی شاخ لگا کر پانی دیں۔',
      instructionsEn: 'Plant a fresh herb cutting in a recycled tub or flower pot and track its growth.',
      deliverableUrdu: 'اپنے پودے کی دیکھ بھال کی تفصیل درج کریں۔',
      deliverableEn: 'Log your container setup and watering schedule.',
      estimatedMinutes: 25,
    },
    projectDescriptionUrdu: 'اپنے گھر میں 3 مختلف سبزیوں پر مشتمل چھوٹا کچن گارڈن کارنر قائم کریں۔',
    projectDescriptionEn: 'Establish a 3-herb mini kitchen garden corner in your home or courtyard.',
  },

  // 7. Technical Trades
  {
    id: 'solar-and-electrical-basics',
    titleUrdu: 'شمسی توانائی (سولر پینلز) اور بنیادی الیکٹریکل ہنر',
    titleEn: 'Solar Energy & Basic Electrical Skills',
    descriptionUrdu: 'سولر پینل، بیٹری کے کنکشن، انورٹر کی سیٹنگ اور گھریلو بجلی کی بنیادی حفاظت۔',
    descriptionEn: 'Hands-on fundamentals of solar panels, battery care, inverter optimization, and electrical safety.',
    category: 'Technical Trades',
    categoryUrdu: 'تکنیکی و عملی دستکاری',
    difficulty: 'Intermediate',
    difficultyUrdu: 'درمیانہ',
    estimatedHours: 4,
    ageGroups: ['16-25', '26-45', '46-60'],
    icon: 'Wrench',
    coverGradient: 'from-yellow-600 to-amber-900',
    lessons: [
      {
        id: 'solar-l1',
        titleUrdu: 'سبق ۱: سولر پینل کی صفائی، اینگل اور زیادہ بجلی حاصل کرنے کا طریقہ',
        titleEn: 'Lesson 1: Solar panel cleaning, tilt angle & efficiency',
        durationMinutes: 20,
        contentUrdu: `سولر پینل پر مٹی جمنے سے اس کی بجلی بنانے کی صلاحیت 20 سے 30 فیصد تک کم ہو جاتی ہے۔

☀️ **اہم نکات:**
- صبح یا شام کے وقت ٹھنڈے پینلز پر نرم کپڑے اور صاف پانی سے صفائی کریں۔
- پینل کا رخ جنوب (South) کی طرف رکھیں تاکہ دن بھر زیادہ سے زیادہ دھوپ ملے۔
- بیٹری کا تیزاب اور پانی باقاعدگی سے چیک کریں۔`,
        contentEn: `Dust and bird droppings on solar panels can reduce efficiency by up to 30%.

☀️ **Key Practices:**
- Clean panels in early morning or evening when glass is cool using soft cloth and clean water.
- Orient panels facing South in the northern hemisphere for maximum daily sun harvesting.
- Check tubular battery distilled water levels monthly.`,
        keyTakeawaysUrdu: ['باقاعدہ صفائی سے زیادہ بجلی ملتی ہے', 'رخ جنوب کی طرف رکھیں', 'حفاظتی دستانے لازمی استعمال کریں'],
        keyTakeawaysEn: ['Regular washing restores full power', 'South facing tilt is optimal', 'Always observe safety precautions'],
      },
    ],
    quiz: [
      {
        id: 'solar-q1',
        questionUrdu: 'سولر پینل کی صفائی کا سب سے محفوظ وقت کون سا ہوتا ہے؟',
        questionEn: 'What is the safest time to clean solar panels?',
        optionsUrdu: [
          'دوپہر کی سخت دھوپ میں جب پینل تپ رہے ہوں',
          'صبح سویرے یا شام کے وقت جب پینل ٹھنڈے ہوں',
          'تیز بارش اور بجلی چمکنے کے دوران',
          'کبھی بھی نہیں دھونا چاہیے',
        ],
        optionsEn: [
          'Blazing midday sun when glass is scalding hot',
          'Early morning or dusk when panels are cool',
          'During lightning storms',
          'Never clean them',
        ],
        correctIndex: 1,
        explanationUrdu: 'تپتے ہوئے شیشے پر ٹھنڈا پانی ڈالنے سے شیشہ چٹخ سکتا ہے، اس لیے صبح یا شام کا وقت بہترین ہے۔',
        explanationEn: 'Thermal shock from cold water on blazing hot glass can crack solar panels; dawn or dusk is safest.',
      },
    ],
    practicalTask: {
      id: 'solar-t1',
      titleUrdu: 'عملی مشق: اپنے گھر کے سولر پینلز کا معائنہ اور صفائی',
      titleEn: 'Practical Task: Inspect and safely wipe solar panels / test batteries',
      instructionsUrdu: 'پینل کی صفائی کریں اور بیٹری کے ٹرمینلز پر لگی کاربن یا زنگ کو گرم پانی سے صاف کریں۔',
      instructionsEn: 'Perform a clean wipe of solar glass and check battery terminals for corrosion.',
      deliverableUrdu: 'پینلز کی موجودہ حالت اور کارکردگی کی رپورٹ درج کریں۔',
      deliverableEn: 'Note down panel condition and before/after voltage if available.',
      estimatedMinutes: 35,
    },
    projectDescriptionUrdu: 'اپنے محلے کے 2 گھروں کے سولر سسٹم کا معائنہ کر کے ان کی کارکردگی بہتر بنانے میں مدد کریں۔',
    projectDescriptionEn: 'Help 2 neighbors inspect their solar connections and improve power output.',
  },

  // 8. Life Skills
  {
    id: 'smartphone-safety-elders',
    titleUrdu: 'اسمارٹ فون، واٹس ایپ اور انٹرنیٹ پر محفوظ رہنے کا طریقہ',
    titleEn: 'Smartphone Safety, WhatsApp & Digital Security',
    descriptionUrdu: 'بزرگوں اور خاندان کے لیے فون کا آسان استعمال، فراڈ سے بچاؤ اور محفوظ ویڈیو کالنگ۔',
    descriptionEn: 'Gentle smartphone education, scam awareness, secure WhatsApp messaging, and bill payments.',
    category: 'Life Skills',
    categoryUrdu: 'روزمرہ زندگی کی مہارتیں اور صحت',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2,
    ageGroups: ['46-60', '61-70', '70+'],
    icon: 'ShieldCheck',
    coverGradient: 'from-blue-700 to-indigo-900',
    lessons: [
      {
        id: 'phone-l1',
        titleUrdu: 'سبق ۱: نامعلوم کالز، جعلی پیغامات اور انعامی فراڈ سے بچاؤ',
        titleEn: 'Lesson 1: Avoiding fake lottery calls and unknown links',
        durationMinutes: 14,
        contentUrdu: `آج کل واٹس ایپ یا ایس ایم ایس پر 'آپ کا انعام نکلا ہے' یا 'بینک سے آپ کی معلومات درکار ہیں' کے جعلی پیغامات آتے ہیں۔

🛡️ **سنہری حفاظتی اصول:**
1. کبھی بھی اپنا پاس ورڈ، OTP کوڈ یا شناختی کارڈ نمبر فون پر کسی کو نہ بتائیں۔
2. کسی بھی انجان لنک پر کلک نہ کریں۔
3. جب شک ہو، اپنے گھر کے کسی فرد سے پوچھیں یا متعلقہ دفتر خود جائیں۔`,
        contentEn: `Learn how to recognize online scams, fraudulent lottery messages, and fake bank calls.

🛡️ **Golden Safety Rules:**
1. Never share your OTP, password, or ID number on phone calls.
2. Avoid clicking random links sent via unknown numbers.
3. Consult a trusted family member before taking unfamiliar actions.`,
        keyTakeawaysUrdu: ['OTP کبھی کسی کو نہ دیں', 'انعام کے جھوٹے پیغامات سے ہوشیار رہیں', 'گھر والوں سے مشورہ کریں'],
        keyTakeawaysEn: ['Keep OTP private', 'Beware of fake rewards', 'Consult family when unsure'],
      },
    ],
    quiz: [
      {
        id: 'phone-q1',
        questionUrdu: 'اگر کوئی فون پر کہے کہ میں بینک سے بول رہا ہوں اپنا پن (PIN) کوڈ بتائیں تو آپ کیا کریں گے؟',
        questionEn: 'If a caller claims to be from your bank and asks for your PIN/OTP, what should you do?',
        optionsUrdu: [
          'فوری طور پر کوڈ بتا دیں گے',
          'ہرگز نہیں بتائیں گے اور کال کاٹ کر بینک برانچ سے تصدیق کریں گے',
          'اپنے تمام دوستوں کو بھی وہ کوڈ بھیج دیں گے',
          'فون دوسرے شخص کو دے دیں گے',
        ],
        optionsEn: [
          'Read out the PIN immediately',
          'Never reveal it, hang up and verify directly with the bank',
          'Forward it to all contacts',
          'Ignore the danger',
        ],
        correctIndex: 1,
        explanationUrdu: 'کوئی بھی اصلی بینک کبھی آپ سے خفیہ پاس ورڈ یا OTP فون پر نہیں مانگتا۔',
        explanationEn: 'Legitimate banks never ask for your confidential PIN or one-time passwords.',
      },
    ],
    practicalTask: {
      id: 'phone-t1',
      titleUrdu: 'عملی مشق: واٹس ایپ میں ٹو اسٹیپ ویری فکیشن (2-Step Verification) آن کریں',
      titleEn: 'Practical Task: Enable WhatsApp Two-Step Verification',
      instructionsUrdu: 'سیٹنگز > اکاؤنٹ > 2-Step Verification میں جا کر 6 ہندسوں کا پن کوڈ سیٹ کریں۔',
      instructionsEn: 'Open WhatsApp Settings > Account > Two-step verification and set your secure 6-digit PIN.',
      deliverableUrdu: 'تصدیق کریں کہ آپ نے پن کوڈ محفوظ جگہ یاد رکھ لیا ہے۔',
      deliverableEn: 'Confirm completion of your 2-step verification setup.',
      estimatedMinutes: 10,
    },
    projectDescriptionUrdu: 'اپنے خاندان کے 2 بزرگوں یا دوستوں کو یہ حفاظتی طریقہ سکھائیں۔',
    projectDescriptionEn: 'Teach this essential safety habit to 2 family elders or neighbors.',
  },

  // 9. Character & Leadership
  {
    id: 'character-community-service',
    titleUrdu: 'کردار سازی، اخلاقیات اور خدمتِ خلق',
    titleEn: 'Character Building, Ethics & Community Service',
    descriptionUrdu: 'سچائی، دیانت داری، بزرگوں کا احترام، صفائی اور اپنے محلے کو بہتر بنانے کی عملی تربیت۔',
    descriptionEn: 'Cultivating deep honesty, mutual respect, civic responsibility, and active community improvement.',
    category: 'Character & Leadership',
    categoryUrdu: 'کردار، اخلاقیات اور قیادت',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'HeartHandshake',
    coverGradient: 'from-rose-700 to-purple-950',
    lessons: [
      {
        id: 'char-l1',
        titleUrdu: 'سبق ۱: خود کو سنواریں اور دوسروں کے کام آئیں',
        titleEn: 'Lesson 1: Self-improvement and helping others',
        durationMinutes: 15,
        contentUrdu: `سیکھو کا مشن ہے کہ انسان نہ صرف خود سیکھے بلکہ اپنے خاندان اور معاشرے کے لیے نفع بخش بنے۔

🤝 **روزانہ کے 3 اچھے کام:**
1. راستے سے تکلیف دہ چیز (پتھر، کانٹا، پلاسٹک) ہٹانا۔
2. بزرگوں کی بات کو توجہ اور مسکراہٹ سے سننا۔
3. اپنے محلے کے کسی ضرورت مند کو کوئی مفید ہنر بلا معاوضہ سکھانا۔`,
        contentEn: `The core soul of Seekho is not just personal success, but transforming self-improvement into societal uplift.

🤝 **3 Daily Acts of Noble Character:**
1. Removing obstacles or litter from community paths.
2. Listening deeply and patiently to community elders.
3. Sharing a useful skill with a neighbor without expectation.`,
        keyTakeawaysUrdu: ['بہترین انسان وہ ہے جو دوسروں کے کام آئے', 'اخلاق سے دل جیتے جاتے ہیں', 'چھوٹا نیک عمل بھی بڑا اثر رکھتا ہے'],
        keyTakeawaysEn: ['The best people are those who benefit others', 'Character wins hearts', 'Small deeds trigger big change'],
      },
    ],
    quiz: [
      {
        id: 'char-q1',
        questionUrdu: 'معاشرے میں عزت اور اعتماد حاصل کرنے کا اصل راستہ کیا ہے؟',
        questionEn: 'What is the true foundation for earning lasting societal respect?',
        optionsUrdu: [
          'دھونس اور دکھاوا کرنا',
          'سچائی، دیانت داری، نرمی اور بے لوث خدمت',
          'صرف اپنی ذات کا فائدہ سوچنا',
          'بزرگوں کی باتوں کو نظر انداز کرنا',
        ],
        optionsEn: [
          'Boasting and flashy display',
          'Truthfulness, integrity, empathy, and selfless service',
          'Selfish indifference',
          'Disrespecting community heritage',
        ],
        correctIndex: 1,
        explanationUrdu: 'دیانت داری اور خدمت ہی وہ خصوصیات ہیں جن سے انسان کا وقار اور برادری میں محبت بڑھتی ہے۔',
        explanationEn: 'Uncompromising integrity and heartfelt compassion build unbreakable community trust.',
      },
    ],
    practicalTask: {
      id: 'char-t1',
      titleUrdu: 'عملی کام: آج اپنے محلے میں کوئی ایک بھلائی کا کام کریں',
      titleEn: 'Practical Task: Perform One Act of Community Good Today',
      instructionsUrdu: 'کسی گلی سے کوڑا اٹھائیں، پودے کو پانی دیں، یا کسی بزرگ کے گھر کا چھوٹا سودا سلف لا دیں۔',
      instructionsEn: 'Help an elderly neighbor with errands, water a public tree, or clear a public pathway.',
      deliverableUrdu: 'آپ نے کیا کام کیا اور آپ کو کیسا محسوس ہوا، 2 جملوں میں لکھیں۔',
      deliverableEn: 'Write a 2-line reflection on what action you took and how it felt.',
      estimatedMinutes: 20,
    },
    projectDescriptionUrdu: 'اپنے محلے کے نوجوانوں کے ساتھ مل کر ہفتہ وار صفائی یا شجرکاری کی ایک چھوٹی مہم چلائیں۔',
    projectDescriptionEn: 'Organize a neighborhood mini-cleanup or tree plantation day with local youth.',
  },

  // 10. Community Development
  {
    id: 'community-action-planning',
    titleUrdu: 'گاؤں اور محلے کی ترقیاتی منصوبہ بندی',
    titleEn: 'Village & Community Action Planning',
    descriptionUrdu: 'محلے کی کمیٹی بنانا، نالیوں/سڑکوں اور اسکولوں کے مسائل کی ترجیح بندی اور فنڈز کا انتظام۔',
    descriptionEn: 'Mobilize local village councils, prioritize public infrastructure needs, and track neighborhood projects.',
    category: 'Community Development',
    categoryUrdu: 'برادری اور علاقائی ترقی',
    difficulty: 'Advanced',
    difficultyUrdu: 'اعلیٰ',
    estimatedHours: 4,
    ageGroups: ['16-25', '26-45', '46-60', '61-70'],
    icon: 'Building',
    coverGradient: 'from-teal-700 to-slate-900',
    lessons: [
      {
        id: 'comm-l1',
        titleUrdu: 'سبق ۱: محلے کے مشترکہ مسائل کی نشاندہی اور ترجیحات',
        titleEn: 'Lesson 1: Identifying & Prioritizing Neighborhood Needs',
        durationMinutes: 18,
        contentUrdu: `جب برادری کے لوگ مل بیٹھتے ہیں تو بڑے سے بڑا مسئلہ بھی باآسانی حل ہو جاتا ہے۔

🏛️ **کمیونٹی ایکشن کے 4 اقدامات:**
1. **مسائل کی فہرست:** گلی میں لائٹ، پینے کا پانی، یا اسکول کی مرمت۔
2. **بزرگوں کی رہنمائی:** پنچایت اور تجربہ کار افراد کو شامل کریں۔
3. **رضاکار نوجوان:** عملی کام کے لیے نوجوانوں کی ٹیم تشکیل دیں۔
4. **شفافیت:** فنڈز اور اخراجات کا حساب سب کے سامنے رکھیں۔`,
        contentEn: `When communities unite with transparency and elder guidance, infrastructural challenges are solved rapidly.

🏛️ **4 Steps of Village Action:**
1. **List Critical Needs:** Clean water, road lighting, or school maintenance.
2. **Involve Elders:** Form an advisory council for wisdom and trust.
3. **Youth Volunteer Force:** Mobilize energetic youth for ground execution.
4. **100% Financial Transparency:** Publicize every penny spent.`,
        keyTakeawaysUrdu: ['اتحاد میں برکت ہے', 'بزرگوں کی سرپرستی ضروری ہے', 'شفاف حساب رکھیں'],
        keyTakeawaysEn: ['Unity creates progress', 'Elder guidance brings wisdom', 'Transparent accounting builds trust'],
      },
    ],
    quiz: [
      {
        id: 'comm-q1',
        questionUrdu: 'کمیونٹی پراجیکٹ کی کامیابی کا سب سے بڑا ستون کیا ہے؟',
        questionEn: 'What is the core foundation for a successful village project?',
        optionsUrdu: [
          'لوگوں کا باہمی اتحاد، مشاورت اور شفاف حساب کتاب',
          'ایک دوسرے سے لڑائی جھگڑا',
          'بغیر بتائے خفیہ فیصلے کرنا',
          'کوئی کام نہ کرنا',
        ],
        optionsEn: [
          'Mutual unity, broad consultation, and open financial records',
          'Internal division',
          'Secret unilateral actions',
          'Inaction',
        ],
        correctIndex: 0,
        explanationUrdu: 'باہمی مشاورت اور مالی شفافیت سے ہر فرد کا اعتماد اور تعاون حاصل ہوتا ہے۔',
        explanationEn: 'Open consultation and financial clarity create unbreakable community ownership.',
      },
    ],
    practicalTask: {
      id: 'comm-t1',
      titleUrdu: 'عملی مشق: اپنے محلے کے 3 اہم مسائل کی فہرست بنائیں',
      titleEn: 'Practical Task: List Top 3 Issues in Your Local Area',
      instructionsUrdu: 'اپنے محلے یا گاؤں کے 3 ایسے مسائل لکھیں جنہیں لوگ مل کر حل کر سکتے ہیں۔',
      instructionsEn: 'Write down 3 solvable local issues in your neighborhood and proposed collaborative steps.',
      deliverableUrdu: 'اپنے محلے کے 3 مسائل اور ممکنہ حل درج کریں۔',
      deliverableEn: 'Submit your 3 neighborhood issues with brief action ideas.',
      estimatedMinutes: 25,
    },
    projectDescriptionUrdu: 'اپنے محلے میں پینے کے پانی یا صفائی پر 1 عملی کمیٹی کا خاکہ تیار کریں۔',
    projectDescriptionEn: 'Draft an organizational roadmap for a neighborhood water or sanitation committee.',
  },

  // 11. AI & Technology - Professional Project Level Course
  {
    id: 'ai-freelance-pro-capstone',
    titleUrdu: 'پروفیشنل پروجیکٹ: AI ٹولز اور ڈیجیٹل سروسز پورٹ فولیو',
    titleEn: 'Professional Project: AI & Digital Services Portfolio',
    descriptionUrdu: 'مارکیٹ کے لیے تیار حقیقی پروجیکٹ: کلائنٹ ریسرچ، کنٹینٹ جنریشن، اور مکمل ڈیجیٹل سروس پورٹ فولیو کی تیاری۔',
    descriptionEn: 'A hands-on professional capstone project building a full digital service client deliverable and portfolio.',
    category: 'AI & Technology',
    categoryUrdu: 'مصنوعی ذہانت و ٹیکنالوجی',
    difficulty: 'Professional',
    difficultyUrdu: 'پروفیشنل پروجیکٹ',
    estimatedHours: 6,
    ageGroups: ['16-25', '26-45', '46-60'],
    icon: 'Sparkles',
    coverGradient: 'from-purple-800 via-indigo-900 to-slate-900',
    lessons: [
      {
        id: 'ai-pro-l1',
        titleUrdu: 'سبق ۱: کلائنٹ پروجیکٹ اور سروس اسکوپ کی منصوبہ بندی',
        titleEn: 'Lesson 1: Scoping Client Deliverables & AI Workflow',
        durationMinutes: 20,
        contentUrdu: `پروفیشنل سطح پر AI کا استعمال صرف عام سوال پوچھنا نہیں بلکہ کلائنٹ کے لیے حتمی، معیاری اور تیار حل بنانا ہے۔

🎯 **پروفیشنل پروجیکٹ کے 3 مراحل:**
1. کلائنٹ کی ضرورت کی تفصیلی سمجھ اور پروجیکٹ بریف۔
2. AI کی مدد سے جامع ڈرافٹ تیار کرنا اور انسانی نظر سے کوالٹی چیک کرنا۔
3. حتمی پروڈکٹ (پوسٹر، بزنس پلان، یا ویب کاپی) کو پروفیشنل انداز میں پیش کرنا۔`,
        contentEn: `At the professional level, AI is leveraged to create end-to-end client-ready solutions with human-in-the-loop quality assurance.

🎯 **3 Capstone Phases:**
1. Thorough requirements scoping and brief documentation.
2. AI-assisted drafting followed by rigorous human verification.
3. Polished, high-standard client presentation.`,
        keyTakeawaysUrdu: ['حقیقی مسئلہ حل کریں', 'کوالٹی چیک لازمی ہے', 'پروفیشنل فارمیٹ اپنائیں'],
        keyTakeawaysEn: ['Solve real client needs', 'Enforce strict quality checks', 'Use professional formatting'],
      },
    ],
    quiz: [
      {
        id: 'ai-pro-q1',
        questionUrdu: 'پروفیشنل پروجیکٹ میں AI سے حاصل کردہ مواد کے بارے میں کیا اصول ہونا چاہیے؟',
        questionEn: 'What is the standard rule for AI generated content in professional client deliverables?',
        optionsUrdu: [
          'بغیر دیکھے کلائنٹ کو بھیج دینا',
          'مکمل انسانی جائزہ، حقائق کی تصدیق اور برانڈ کے مطابق ایڈیٹنگ کرنا',
          'صرف تصاویر کاپی کرنا',
          'کوئی کام نہ کرنا',
        ],
        optionsEn: [
          'Forward directly to client without review',
          'Perform meticulous human review, fact-checking, and brand tailoring',
          'Copy only images',
          'Deliver nothing',
        ],
        correctIndex: 1,
        explanationUrdu: 'پروفیشنل کام میں انسانی معیار، تصدیق اور کلائنٹ کے تقاضوں کے مطابق ترمیم لازمی ہے۔',
        explanationEn: 'Professional excellence demands thorough human review and contextual refinement.',
      },
    ],
    practicalTask: {
      id: 'ai-pro-t1',
      titleUrdu: 'عملی پروجیکٹ: کسی مقامی کاروبار کے لیے مکمل ڈیجیٹل پیکیج تیار کریں',
      titleEn: 'Practical Capstone: Complete Digital Marketing Package for a Local Client',
      instructionsUrdu: 'AI اور ڈیزائن ٹولز کی مدد سے کسی دکان یا اسکول کے لیے 3 سوشل میڈیا پوسٹس، 1 تشہیری تحریر اور 1 رابطہ فارم تیار کریں۔',
      instructionsEn: 'Create 3 marketing posts, a promotional pitch, and an inquiry guide for a local business using AI.',
      deliverableUrdu: 'مکمل پورٹ فولیو کا لنک یا تفصیلات درج کریں۔',
      deliverableEn: 'Submit your completed client deliverables summary.',
      estimatedMinutes: 45,
    },
    projectDescriptionUrdu: 'ایک مقامی کلائنٹ کے لیے مکمل AI ڈیجیٹل سروس پیکج تیار کر کے پورٹ فولیو میں شامل کریں۔',
    projectDescriptionEn: 'Build and publish a comprehensive client deliverable for your professional portfolio.',
  },

  // ==================================================
  // COURSE 1 — BUSINESS & ENTREPRENEURSHIP (BEGINNER)
  // ==================================================
  {
    id: 'business-entrepreneurship-basics',
    titleUrdu: 'کاروبار اور Entrepreneurship کی بنیادی سمجھ',
    titleEn: 'Basics of Business & Entrepreneurship',
    descriptionUrdu: 'کاروبار کی بنیادی فہم، مارکیٹ میں لوگوں کی ضرورت کی نشاندہی، چھوٹا کاروباری منصوبہ، گاہک سے ایماندارانہ رویہ اور بتدریج ترقی کا آسان اور عملی کورس۔',
    descriptionEn: 'A zero-barrier beginner guide covering business foundations, identifying local customer needs, crafting simple business plans, maintaining honest conduct, and sustainable growth.',
    category: 'Business',
    categoryUrdu: 'کاروبار اور انٹرپرینیورشپ',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.5,
    ageGroups: ['16-25', '26-45', '46-60', '61-70'],
    icon: 'Briefcase',
    coverGradient: 'from-amber-600 via-orange-700 to-stone-900',
    realLifePurpose: {
      personalBenefitUrdu: 'ذاتی خود اعتمادی پیدا ہوگی، حلال روزگار کے نئے ذرائع تلاش کرنے کی عملی صلاحیت ملے گی اور معاشی فیصلے سوچ سمجھ کر کر سکیں گے۔',
      personalBenefitEn: 'Build personal confidence, discover practical income generation methods, and make informed economic decisions.',
      familyHelpUrdu: 'خاندان کی آمدنی میں اضافہ کرنے، گھریلو اخراجات کو سہارا دینے اور چھوٹے گھریلو کاروبار کو منظم چلانے میں مدد ملے گی۔',
      familyHelpEn: 'Supplement household income, support family expenses, and effectively manage micro home-based enterprises.',
      communityHelpUrdu: 'گاؤں یا محلے میں لوگوں کی روزمرہ ضروریات مقامی سطح پر مناسب قیمت پر پوری ہوں گی اور نوجوانوں کے لیے روزگار کے مواقع پیدا ہوں گے۔',
      communityHelpEn: 'Fulfill local community needs affordably on-site and create employment or trade opportunities for neighborhood youth.',
      societalBenefitUrdu: 'معاشرے میں ایماندار تجارت، باہمی اعتماد اور خود انحصاری کو فروغ ملے گا اور بے روزگاری میں کمی واقع ہوگی۔',
      societalBenefitEn: 'Promotes ethical commerce, mutual trust, and economic self-reliance across society while decreasing unemployment.'
    },
    lessons: [
      {
        id: 'be-b-l1',
        titleUrdu: '1. کاروبار کیا ہے اور اچھا کاروبار کیسے سوچا جاتا ہے؟',
        titleEn: '1. What is Business & How to Brainstorm a Great Idea',
        durationMinutes: 12,
        contentUrdu: `کاروبار کا بنیادی مطلب ہے کسی دوسرے انسان کی ضرورت کو پورا کرنا یا اس کے کسی مسئلے کو آسان بنانا اور اس کے بدلے جائز نفع کمانا۔

💡 **کاروبار کا اچھا آئیڈیا کیسے آتا ہے؟**
بہت سے لوگ سمجھتے ہیں کہ کاروبار کے لیے لاکھوں روپے یا کوئی انوکھی ایجاد چاہیے۔ سچ یہ ہے کہ اچھا کاروبار اپنے اردگرد کی روزمرہ زندگی کو غور سے دیکھنے سے ملتا ہے:
1. **روزمرہ مسائل کا مشاہدہ:** کیا آپ کے محلے میں خالص دودھ، بروقت سلائی، استری یا پلمبر کی کمی ہے؟
2. **سہولت کی فراہمی:** جو چیز دور شہر جا کر لانی پڑتی ہے، کیا وہ مقامی طور پر فراہم کی جا سکتی ہے؟
3. **اپنی دلچسپی اور ہنر:** وہ کام جس میں آپ کو مزہ آتا ہو اور لوگ اس کی قدر کریں۔

کاروبار ہوا میں محل بنانے کا نام نہیں، بلکہ حقیقی دنیا میں لوگوں کا بوجھ ہلکا کرنے کی کوشش ہے۔`,
        contentEn: `Business fundamentally means solving a real problem for others or fulfilling a tangible need in exchange for fair profit.

💡 **How to Find Great Business Ideas:**
1. **Observe Local Needs:** Is there a shortage of pure milk, quick tailoring, or repair services?
2. **Provide Convenience:** Can you source items locally that people travel far to buy?
3. **Leverage Your Skills:** Combine personal interest with what people are willing to pay for.`,
        keyTakeawaysUrdu: [
          'کاروبار لوگوں کے مسائل حل کرنے اور ضرورت پوری کرنے کا نام ہے۔',
          'اچھا آئیڈیا اپنے محلے اور اردگرد کے ماحول کا مشاہدہ کرنے سے ملتا ہے۔',
          'بڑے سرمائے سے زیادہ اہم حقیقی ضرورت اور مسلسل محنت ہے۔'
        ],
        keyTakeawaysEn: [
          'Business is about solving practical problems and meeting real needs.',
          'Great ideas come from observing neighborhood gaps and daily frustrations.',
          'Execution and understanding customer needs matter more than large initial capital.'
        ],
        quiz: [
          {
            id: 'be-b-l1-q1',
            questionUrdu: 'کاروبار (Business) کا سب سے بنیادی اور پائیدار مقصد کیا ہوتا ہے؟',
            questionEn: 'What is the most fundamental and sustainable purpose of a business?',
            optionsUrdu: [
              'لوگوں کے مسائل حل کر کے جائز نفع کمانا',
              'لوگوں کو دھوکہ دے کر جلدی امیر بننا',
              'بغیر کسی وجہ کے پیسے جمع کرنا',
              'صرف دکان کا بورڈ لگانا'
            ],
            optionsEn: [
              'Solving people’s problems and earning fair, honest profit',
              'Deceiving customers for quick cash',
              'Hoarding money aimlessly',
              'Just putting up a shop signboard'
            ],
            correctIndex: 0,
            explanationUrdu: 'کاروبار وہی کامیاب رہتا ہے جو لوگوں کو حقیقی فائدہ اور سہولت پہنچائے۔',
            explanationEn: 'Businesses thrive when they deliver genuine value and solve real problems.'
          },
          {
            id: 'be-b-l1-q2',
            questionUrdu: 'اپنے گاؤں یا محلے میں نیا کاروبار سوچنے کا بہترین طریقہ کیا ہے؟',
            questionEn: 'What is the best way to brainstorm a new business idea locally?',
            optionsUrdu: [
              'یہ دیکھنا کہ لوگوں کو کن چیزوں کی کمی یا پریشانی کا سامنا ہے',
              'آنکھیں بند کر کے کوئی بھی غیر ضروری چیز بیچنا',
              'کسی دوسرے شہر کے مہنگے ترین برانڈ کی بلا سوچے سمجھے نقل کرنا',
              'کسی سے بات نہ کرنا'
            ],
            optionsEn: [
              'Observing what goods or services locals struggle to find',
              'Selling random unnecessary items without research',
              'Blindly copying an expensive urban brand',
              'Refusing to speak with locals'
            ],
            correctIndex: 0,
            explanationUrdu: 'مقامی ضرورت اور لوگوں کی پریشانی کو سمجھنا ہی کامیاب کاروبار کی بنیاد ہے۔',
            explanationEn: 'Identifying local shortages and pain points creates the foundation of viable businesses.'
          },
          {
            id: 'be-b-l1-q3',
            questionUrdu: 'کیا چھوٹا کاروبار شروع کرنے کے لیے فوری طور پر کروڑوں روپے ضروری ہیں؟',
            questionEn: 'Do you need millions of rupees immediately to start a small business?',
            optionsUrdu: [
              'نہیں، چھوٹے سرمائے اور سادہ پیمانے سے بھی شروعات ہو سکتی ہے',
              'جی ہاں، بغیر کروڑوں کے کاروبار ناممکن ہے',
              'پیسے کے بغیر سوچنا بھی منع ہے',
              'صرف لاٹری جیتنا ضروری ہے'
            ],
            optionsEn: [
              'No, you can start with modest capital and simple steps',
              'Yes, business is impossible without millions',
              'It is forbidden to even think without huge funds',
              'Only lottery winners can start'
            ],
            correctIndex: 0,
            explanationUrdu: 'دنیا کے بیشتر بڑے کاروبار چھوٹے سرمائے اور ایک سادہ خدمت سے شروع ہوئے تھے۔',
            explanationEn: 'Most successful businesses start small with modest capital and strong determination.'
          }
        ],
        practicalTask: {
          id: 'be-b-l1-task',
          titleUrdu: 'عملی مشق: اپنے محلے کے 3 مسائل یا ضرورتوں کی فہرست بنائیں',
          titleEn: 'Practical Task: Identify 3 Local Needs in Your Neighborhood',
          instructionsUrdu: 'اپنے علاقے میں 3 ایسی چیزیں یا خدمات نوٹ کریں جن کے لیے لوگوں کو دور جانا پڑتا ہے یا جن کا معیار خراب ہے۔',
          instructionsEn: 'List 3 goods or services in your area that people struggle to access or travel far to obtain.',
          deliverableUrdu: 'اپنے محلے کے 3 مسائل اور ممکنہ کاروباری آئیڈیا درج کریں۔',
          deliverableEn: 'Enter 3 local needs and potential business solutions.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'be-b-l2',
        titleUrdu: '2. لوگوں کی ضرورت کو کاروباری موقع میں کیسے تبدیل کریں؟',
        titleEn: '2. Turning People\'s Needs into Business Opportunities',
        durationMinutes: 14,
        contentUrdu: `جب آپ کو کسی ضرورت کا علم ہو جائے، تو اگلا قدم اسے ایک قابلِ عمل "پیشکش" (Product یا Service) میں بدلنا ہے۔

🔍 **ضرورت کو پرکھنے کے 3 سنہری سوالات:**
1. **کس کے لیے؟ (Who):** یہ چیز کون خریدے گا؟ (مثلاً اسکول کے بچے، گھریلو خواتین، یا دکاندار)
2. **وہ کیوں خریدیں گے؟ (Why):** کیا آپ کی چیز سستی ہے، زیادہ معیاری ہے، یا گھر کی دہلیز پر دستیاب ہے؟
3. **کیا وہ قیمت ادا کر سکتے ہیں؟ (Price):** کیا قیمت ان کی جیب کے موافق ہے؟

اگر لوگوں کو آپ کی چیز سے وقت، پیسہ یا آرام مل رہا ہو تو وہ ضرور آپ کے پاس آئیں گے۔`,
        contentEn: `Once you identify a local need, the next step is transforming it into a viable product or service offering.

🔍 **3 Validation Questions:**
1. **Who is the customer?** (e.g. students, homemakers, shopkeepers)
2. **Why will they buy from you?** (Better quality, fair price, doorstep convenience)
3. **Can they afford it?** (Fair pricing aligned with their purchasing power).`,
        keyTakeawaysUrdu: [
          'کسٹمر کی ضرورت اور خریداری کی استطاعت کو سمجھنا ضروری ہے۔',
          'اپنی چیز میں کوئی واضح خوبی (سہولت، معیار یا مناسب قیمت) رکھیں۔',
          'گاہک کے وقت یا پیسوں کی بچت ہی آپ کی اصل کامیابی ہے۔'
        ],
        keyTakeawaysEn: [
          'Understand your target customer and their spending capacity.',
          'Offer a clear advantage: superior quality, convenience, or fair price.',
          'Saving the customer time or effort guarantees repeat business.'
        ],
        quiz: [
          {
            id: 'be-b-l2-q1',
            questionUrdu: 'کسی کاروباری موقع کو پرکھنے کے لیے گاہک سے متعلق سب سے اہم بات کیا ہے؟',
            questionEn: 'What is the most critical question to validate a customer opportunity?',
            optionsUrdu: [
              'کیا گاہک کو اس چیز کی ضرورت ہے اور کیا وہ اس کی قیمت خوشی سے ادا کر سکتا ہے؟',
              'کیا گاہک کو آپ کی پسند ناپسند معلوم ہے؟',
              'کیا گاہک کے پاس کمپیوٹر ہے؟',
              'کوئی بات اہم نہیں ہوتی'
            ],
            optionsEn: [
              'Does the customer truly need this and can they comfortably pay for it?',
              'Does the customer know your personal preferences?',
              'Does the customer own a computer?',
              'Nothing matters'
            ],
            correctIndex: 0,
            explanationUrdu: 'گاہک کی حقیقی ضرورت اور قوتِ خرید ہی طے کرتی ہے کہ پروڈکٹ بکے گی یا نہیں۔',
            explanationEn: 'Real customer demand paired with purchasing power determines product viability.'
          },
          {
            id: 'be-b-l2-q2',
            questionUrdu: 'اگر محلے کے لوگ سبزی خریدنے کے لیے 3 کلومیٹر دور جاتے ہوں تو کاروباری موقع کیا ہو سکتا ہے؟',
            questionEn: 'If villagers travel 3 km for fresh produce, what is the business opportunity?',
            optionsUrdu: [
              'محلے میں تازہ سبزی مناسب دام پر فراہم کرنا یا ہوم ڈلیوری دینا',
              'سبزی کھانا بند کر دینا',
              'لوگوں کو دور جانے پر مجبور کرنا',
              'سبزیوں کے نقصانات بتانا'
            ],
            optionsEn: [
              'Providing fresh vegetables locally or offering neighborhood home delivery',
              'Stop eating vegetables',
              'Force people to walk further',
              'Tell people vegetables are bad'
            ],
            correctIndex: 0,
            explanationUrdu: 'مقامی سطح پر تازہ سبزی مہیا کر کے لوگوں کا وقت اور کرایہ بچایا جا سکتا ہے۔',
            explanationEn: 'Local fresh delivery saves residents travel time and transportation costs.'
          },
          {
            id: 'be-b-l2-q3',
            questionUrdu: 'گاہک عام طور پر کسی نئی دکان یا سروس کو کیوں ترجیح دیتے ہیں؟',
            questionEn: 'Why do customers prefer trying a new shop or service?',
            optionsUrdu: [
              'بہتر معیار، خوش اخلاقی اور آسان رسائی کی وجہ سے',
              'بدتمیزی کی وجہ سے',
              'خراب مال کی وجہ سے',
              'مہنگی قیمت کی وجہ سے'
            ],
            optionsEn: [
              'Because of better quality, courteous behavior, and easy access',
              'Rude attitude',
              'Defective goods',
              'Unreasonably high prices'
            ],
            correctIndex: 0,
            explanationUrdu: 'اچھا رویہ اور معیاری چیز ہر گاہک کو اپنی طرف کھینچتی ہے۔',
            explanationEn: 'Quality products and welcoming customer care attract repeat clients.'
          }
        ],
        practicalTask: {
          id: 'be-b-l2-task',
          titleUrdu: 'عملی مشق: 1 پروڈکٹ یا سروس کی مختصر پیشکش تیار کریں',
          titleEn: 'Practical Task: Draft a 1-Product Value Proposition',
          instructionsUrdu: 'کسی ایک پروڈکٹ کا نام، اس کے خریدار اور اس کی 2 اہم خوبیاں (مثلاً خالص، سستی، یا بروقت) تحریر کریں۔',
          instructionsEn: 'Write down a product name, who will buy it, and 2 standout benefits (e.g. pure, fast, affordable).',
          deliverableUrdu: 'پروڈکٹ کا نام اور 2 اہم خوبیاں درج کریں۔',
          deliverableEn: 'Enter product name and 2 key advantages.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'be-b-l3',
        titleUrdu: '3. چھوٹے کاروبار کے لیے بنیادی منصوبہ کیسے بنائیں؟',
        titleEn: '3. Creating a Basic Plan for Small Business',
        durationMinutes: 15,
        contentUrdu: `بغیر نقشے کے مکان نہیں بنتا، اسی طرح بغیر منصوبے کے کاروبار میں نقصان کا خطرہ ہوتا ہے۔ ایک صفحے کا سادہ منصوبہ بنانا انتہائی آسان ہے۔

📝 **ایک صفحے کے بزنس پلان کے 4 ستون:**
1. **پروڈکٹ / سروس کیا ہے؟** (مثلاً گھریلو اچار و مصالحہ جات یا موٹر سائیکل ٹیوننگ)۔
2. **کل لاگت (خرچ):** سامان، پیکنگ اور کرایہ کتنے کا آئے گا؟ (مثلاً کل 10,000 روپے)۔
3. **فروخت اور منافع:** ایک آئٹم کتنے کا بکے گا اور فی آئٹم کتنا منافع متوقع ہے؟
4. **کسٹمر تک رسائی:** لوگوں کو کیسے پتہ چلے گا؟ (واٹس ایپ گروپ، زبانی تشہیر، یا نمونہ دکھا کر)۔

حساب کتاب پہلے دن سے صاف رکھنے سے کاروبار میں برکت اور استحکام رہتا ہے۔`,
        contentEn: `Just as you do not build a house without a blueprint, a business requires a simple 1-page roadmap.

📝 **4 Pillars of a 1-Page Plan:**
1. **What is the product/service?**
2. **Total Startup Cost:** Raw materials, packing, transport.
3. **Pricing & Profit:** Selling price per unit and margin.
4. **Marketing:** How will customers find out? (Word of mouth, WhatsApp).`,
        keyTakeawaysUrdu: [
          'ایک صفحے کا تحریری منصوبہ نقصان کے خطرے کو کم کرتا ہے۔',
          'سامان کی لاگت اور منافع کا حساب پہلے سے لگانا ضروری ہے۔',
          'تشہیر کا آسان اور مفت طریقہ واٹس ایپ اور زبانی رابطہ ہے۔'
        ],
        keyTakeawaysEn: [
          'A simple written 1-page plan prevents costly mistakes.',
          'Calculate costs and profit margins before purchasing stock.',
          'Leverage word-of-mouth and WhatsApp for zero-cost early marketing.'
        ],
        quiz: [
          {
            id: 'be-b-l3-q1',
            questionUrdu: 'چھوٹے کاروبار کے لیے بزنس پلان بنانے کا اصل فائدہ کیا ہے؟',
            questionEn: 'What is the primary benefit of creating a business plan?',
            optionsUrdu: [
              'اخراجات، منافع اور طریقہ کار واضح ہو جاتا ہے اور نقصان کا خطرہ کم ہوتا ہے',
              'اس سے کاغذ ضائع ہوتا ہے',
              'اس کا کوئی فائدہ نہیں',
              'کاروبار فورا بند ہو جاتا ہے'
            ],
            optionsEn: [
              'Clarifies costs, profit margins, and minimizes financial risks',
              'Wastes paper',
              'Has zero benefit',
              'Causes instant shutdown'
            ],
            correctIndex: 0,
            explanationUrdu: 'منصوبہ بندی سے معلوم ہوتا ہے کہ کتنا خرچ ہوگا اور منافع کیسے آئے گا۔',
            explanationEn: 'Planning provides a clear financial roadmap and risk assessment.'
          },
          {
            id: 'be-b-l3-q2',
            questionUrdu: 'اگر کسی چیز کو بنانے پر 80 روپے لاگت آئے اور وہ 100 روپے میں بکے، تو فی آئٹم کتنا منافع ہوگا؟',
            questionEn: 'If an item costs Rs. 80 to make and sells for Rs. 100, what is the profit per unit?',
            optionsUrdu: [
              '20 روپے',
              '100 روپے',
              '80 روپے',
              '0 روپے'
            ],
            optionsEn: [
              'Rs. 20',
              'Rs. 100',
              'Rs. 80',
              'Rs. 0'
            ],
            correctIndex: 0,
            explanationUrdu: 'فروخت کی قیمت (100) میں سے لاگت (80) نکالنے پر منافع 20 روپے بچتا ہے۔',
            explanationEn: 'Selling price (100) minus cost (80) equals Rs. 20 profit.'
          },
          {
            id: 'be-b-l3-q3',
            questionUrdu: 'نئے کاروبار کی تشہیر کے لیے سب سے سستا اور مؤثر طریقہ کیا ہے؟',
            questionEn: 'What is the most cost-effective way to market a new local venture?',
            optionsUrdu: [
              'خوش اخلاقی سے کام، زبانی تشہیر اور واٹس ایپ کا استعمال',
              'ٹی وی پر کروڑوں کے اشتہار دینا',
              'خاموش رہنا اور کسی کو نہ بتانا',
              'دکان بند رکھنا'
            ],
            optionsEn: [
              'Courteous service, word-of-mouth recommendations, and WhatsApp outreach',
              'Millions on TV ads',
              'Keeping completely silent',
              'Keeping shop closed'
            ],
            correctIndex: 0,
            explanationUrdu: 'مطمئن گاہک کی زبانی تعریف اور واٹس ایپ گروپس بغیر خرچ کے بہترین تشہیر ہیں۔',
            explanationEn: 'Word of mouth from satisfied customers and WhatsApp groups are highly effective and free.'
          }
        ],
        practicalTask: {
          id: 'be-b-l3-task',
          titleUrdu: 'عملی مشق: 1 صفحے کا فرضی بجٹ اور لاگت کا تخمینہ بنائیں',
          titleEn: 'Practical Task: Draft a Simple Cost & Profit Estimate',
          instructionsUrdu: 'کسی چھوٹے کام (مثلاً 5000 یا 10000 روپے کے سرمائے) کے لیے خام مال، متوقع فروخت اور منافع لکھیں۔',
          instructionsEn: 'Outline an estimated budget for a small Rs. 5,000–10,000 project (materials, sale price, profit).',
          deliverableUrdu: 'لاگت، فروخت کی قیمت اور متوقع منافع درج کریں۔',
          deliverableEn: 'Enter estimated cost, sale price, and profit.',
          estimatedMinutes: 10
        }
      },
      {
        id: 'be-b-l4',
        titleUrdu: '4. گاہک، معیار اور ایماندار کاروباری رویہ',
        titleEn: '4. Customers, Quality & Honest Business Conduct',
        durationMinutes: 12,
        contentUrdu: `کاروبار کا سب سے قیمتی اثاثہ "اعتماد" ہے۔ روپیہ پیسہ ختم ہو جائے تو دوبارہ کمایا جا سکتا ہے، لیکن اگر اعتماد ختم ہو جائے تو کاروبار ہمیشہ کے لیے ختم ہو جاتا ہے۔

🤝 **ایماندار اور کامیاب تاجر کے 4 اصول:**
1. **سچائی اور شفافیت:** مال میں اگر کوئی نقص ہو تو گاہک کو پہلے خود بتائیں، چھپائیں نہیں۔
2. **وعدے کی پاسداری:** جو وقت یا تاریخ دیں، اس کی پابندی کریں۔
3. **خوش اخلاقی:** مسکرا کر بات کرنا اور گاہک کی بات کو دھیان سے سننا نصف کامیابی ہے۔
4. **شکایت کا ازالہ:** اگر گاہک کو کوئی شکایت ہو تو لڑنے کے بجائے خوش دلی سے اس کا مسئلہ حل کریں یا چیز تبدیل کر دیں۔

ایمانداری سے برکت اور مستقل گاہک پیدا ہوتے ہیں۔`,
        contentEn: `Trust is a business's most valuable asset. Capital can be recovered, but lost trust destroys a business permanently.

🤝 **4 Core Principles of Ethical Trade:**
1. **Honesty:** Never conceal defects in your products or services.
2. **Reliability:** Honor delivery deadlines and promises.
3. **Courteous Service:** A welcoming smile and attentive listening win loyal clients.
4. **Graceful Complaint Handling:** Resolve issues promptly rather than arguing.`,
        keyTakeawaysUrdu: [
          'دیانت داری اور سچائی طویل مدتی کامیابی کی ضمانت ہے۔',
          'عیب چھپانے سے وقتی فائدہ تو ہو سکتا ہے مگر مستقل گاہک ٹوٹ جاتا ہے۔',
          'گاہک کی شکایت کو خندہ پیشانی سے سن کر حل کرنا چاہیے۔'
        ],
        keyTakeawaysEn: [
          'Integrity and truthfulness ensure long-term business survival.',
          'Concealing flaws loses lifetime customers for short-term gain.',
          'Handle customer complaints with patience and swift resolutions.'
        ],
        quiz: [
          {
            id: 'be-b-l4-q1',
            questionUrdu: 'اگر بیچنے والے سامان میں کوئی چھوٹا نقص یا خرابی ہو تو ایماندار تاجر کو کیا کرنا چاہیے؟',
            questionEn: 'What should an honest merchant do if an item has a minor defect?',
            optionsUrdu: [
              'گاہک کو خود بتا کر قیمت کم کرنا یا متبادل دینا',
              'عیب کو چھپا کر جلدی سے بیچ دینا',
              'گاہک سے جھوٹ بولنا کہ یہ بالکل نیا ہے',
              'سامان کو کچرے میں پھینک دینا'
            ],
            optionsEn: [
              'Inform the customer transparently and offer a discount or replacement',
              'Conceal the flaw and rush the sale',
              'Lie that it is brand new',
              'Throw it in the trash'
            ],
            correctIndex: 0,
            explanationUrdu: 'سچ بول کر مال بیچنے سے گاہک کا اعتماد بڑھتا ہے اور کاروبار میں برکت ہوتی ہے۔',
            explanationEn: 'Disclosing defects builds enduring trust and customer loyalty.'
          },
          {
            id: 'be-b-l4-q2',
            questionUrdu: 'اگر کوئی گاہک شکایت لے کر آئے تو سب سے بہترین رویہ کیا ہے؟',
            questionEn: 'How should you respond when a customer approaches with a complaint?',
            optionsUrdu: [
              'توجہ اور نرمی سے بات سن کر مسئلہ فوری حل کرنا',
              'گاہک پر چیخنا اور دکان سے نکال دینا',
              'بات سننے سے صاف انکار کر دینا',
              'گاہک کا مذاق اڑانا'
            ],
            optionsEn: [
              'Listen patiently with empathy and resolve the issue quickly',
              'Yell at the customer and kick them out',
              'Flatly refuse to listen',
              'Mock the customer'
            ],
            correctIndex: 0,
            explanationUrdu: 'شکایت کو اچھے طریقے سے حل کرنے سے ناراض گاہک سب سے وفادار گاہک بن جاتا ہے۔',
            explanationEn: 'Polite problem resolution often converts frustrated customers into loyal advocates.'
          },
          {
            id: 'be-b-l4-q3',
            questionUrdu: 'کسی دکان یا سروس کے لیے مستقل گاہک بنانے کا سب سے بڑا راز کیا ہے؟',
            questionEn: 'What is the key secret to building repeat, loyal customers?',
            optionsUrdu: [
              'مسلسل معیاری چیز دینا اور خوش اخلاقی قائم رکھنا',
              'ہر روز قیمت ڈبل کر دینا',
              'گاہک کا نام بھول جانا',
              'کبھی دکان وقت پر نہ کھولنا'
            ],
            optionsEn: [
              'Consistently delivering quality and warm, respectful service',
              'Doubling prices daily',
              'Forgetting customer names',
              'Never opening on time'
            ],
            correctIndex: 0,
            explanationUrdu: 'معیار اور احترام ہی وہ دو چیزیں ہیں جو گاہک کو بار بار واپس لاتی ہیں۔',
            explanationEn: 'Reliable quality and respectful interactions keep customers returning.'
          }
        ],
        practicalTask: {
          id: 'be-b-l4-task',
          titleUrdu: 'عملی مشق: گاہک سے پیش آنے کے 3 اخلاقی اصول طے کریں',
          titleEn: 'Practical Task: Set 3 Golden Rules for Customer Care',
          instructionsUrdu: 'اپنے کاروبار یا کام میں گاہک سے پیش آنے کے لیے وہ 3 اصول لکھیں جن پر آپ ہمیشہ قائم رہیں گے۔',
          instructionsEn: 'Write 3 core service commitments you will always uphold when dealing with customers.',
          deliverableUrdu: 'گاہک کی خدمت کے ۳ اخلاقی اصول درج کریں۔',
          deliverableEn: 'Enter your 3 customer service ethics.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'be-b-l5',
        titleUrdu: '5. اپنے کاروبار کو آہستہ آہستہ کیسے بہتر کریں؟',
        titleEn: '5. Gradual Business Improvement & Growth',
        durationMinutes: 12,
        contentUrdu: `کاروبار درخت کی مانند ہوتا ہے جو ایک ہی دن میں پھل نہیں دیتا بلکہ باقاعدہ دیکھ بھال سے پروان چڑھتا ہے۔

🌱 **پائیدار ترقی کے 3 سنہری اصول:**
1. **منافع کی ری انویسٹمنٹ (Reinvestment):** پہلے چند مہینوں کا منافع اڑانے کے بجائے اس کا ایک حصہ دوبارہ مال، اوزار یا سہولت بڑھانے پر لگائیں۔
2. **گاہکوں سے فیڈ بیک:** وقتاً فوقتاً گاہکوں سے پوچھیں: "ہمیں اپنی سروس میں کیا بہتری لانی چاہیے؟"
3. **نئے ہنر اور طریقے سیکھنا:** وقت کے ساتھ نئی چیزیں اور ڈیجیٹل طریقے (جیسے آن لائن ادائیگیاں یا سوشل میڈیا) اپناتے رہیں۔

جلد بازی میں قرض لے کر پھیلانے کے بجائے مضبوط بنیادوں پر آہستہ آہستہ آگے بڑھنا ہی عقل مندی ہے۔`,
        contentEn: `A business is like a tree; it doesn’t bear fruit overnight but flourishes through steady nourishment.

🌱 **3 Rules of Sustainable Growth:**
1. **Reinvest Profits:** Put a portion of early earnings back into better tools, materials, and stock.
2. **Customer Feedback:** Regularly ask clients how you can improve.
3. **Continuous Learning:** Adopt modern tools like digital payments and social promotion.`,
        keyTakeawaysUrdu: [
          'کاروبار میں جلد بازی کے بجائے بتدریج پائیدار ترقی کو ترجیح دیں۔',
          'منافع کا ایک حصہ دوبارہ کاروبار کو وسعت دینے میں لگائیں۔',
          'گاہکوں کے مشوروں اور فیڈ بیک سے اپنی کمزوریوں کو دور کریں۔'
        ],
        keyTakeawaysEn: [
          'Prioritize steady, sustainable progress over reckless expansion.',
          'Reinvest a portion of profits into equipment and inventory.',
          'Use customer feedback to constantly refine and improve.'
        ],
        quiz: [
          {
            id: 'be-b-l5-q1',
            questionUrdu: 'کاروبار شروع ہونے کے بعد ابتدائی چند مہینوں کے منافع کا کیا کرنا چاہیے؟',
            questionEn: 'What should be done with early business profits in the first few months?',
            optionsUrdu: [
              'منافع کا مناسب حصہ کاروبار کی بہتری اور مال بڑھانے میں دوبارہ لگانا (Reinvest کرنا)',
              'تمام پیسے فورا فضول خرچی میں اڑا دینا',
              'کاروبار کو بند کر دینا',
              'پیسوں کو زمین میں دبا دینا'
            ],
            optionsEn: [
              'Reinvest a sensible portion to improve inventory, tools, and quality',
              'Spend all profits immediately on luxuries',
              'Shut down the business',
              'Bury money in the dirt'
            ],
            correctIndex: 0,
            explanationUrdu: 'ری انویسٹمنٹ سے کاروبار کا حجم اور آمدنی دونوں مضبوط ہوتے ہیں۔',
            explanationEn: 'Reinvestment expands business capacity and ensures resilience.'
          },
          {
            id: 'be-b-l5-q2',
            questionUrdu: 'گاہکوں سے فیڈ بیک (رائے) لینے کا کیا فائدہ ہوتا ہے؟',
            questionEn: 'What is the value of seeking customer feedback?',
            optionsUrdu: [
              'خامیاں اور کمزوریاں معلوم ہو جاتی ہیں جنہیں درست کر کے سروس بہتر بنائی جا سکتی ہے',
              'اس سے گاہک ناراض ہو جاتا ہے',
              'وقت ضائع ہوتا ہے',
              'اس کا کوئی فائدہ نہیں'
            ],
            optionsEn: [
              'Identifies areas of improvement to elevate service quality',
              'Angers customers',
              'Wastes time',
              'Has no benefit'
            ],
            correctIndex: 0,
            explanationUrdu: 'فیڈ بیک سے پتہ چلتا ہے کہ گاہک کیا چاہتا ہے اور کیا کمی دور کرنی ہے۔',
            explanationEn: 'Feedback highlights customer desires and operational bottlenecks.'
          },
          {
            id: 'be-b-l5-q3',
            questionUrdu: 'پائیدار کاروبار کی نشوونما کے لیے کون سا رویہ سب سے مفید ہے؟',
            questionEn: 'Which mindset is most beneficial for sustainable business growth?',
            optionsUrdu: [
              'صبر، مستقل مزاجی اور روزانہ کچھ نیا سیکھ کر بہتر بنانا',
              'راتوں رات امیر ہونے کے خواب دیکھنا اور محنت چھوڑ دینا',
              'قرضے لے کر دکھاوے کا دفتر بنانا',
              'کسی سے نہ سیکھنا'
            ],
            optionsEn: [
              'Patience, consistency, and daily learning for gradual improvement',
              'Daydreaming about get-rich-quick schemes without effort',
              'Taking massive debt for flashy show-off setups',
              'Refusing to learn'
            ],
            correctIndex: 0,
            explanationUrdu: 'مستقل مزاجی اور آہستہ آہستہ سیکھتے رہنے سے کاروبار مضبوط بنتا ہے۔',
            explanationEn: 'Patience and consistent iteration build an enduring foundation.'
          }
        ],
        practicalTask: {
          id: 'be-b-l5-task',
          titleUrdu: 'عملی مشق: اگلے 6 ماہ کے لیے 2 کاروباری اہداف طے کریں',
          titleEn: 'Practical Task: Set 2 Business Milestones for 6 Months',
          instructionsUrdu: 'اپنے کسی کام یا کاروبار کو 6 ماہ میں بہتر بنانے کے لیے 2 ٹھوس اہداف (مثلاً گاہک بڑھانا، نئی چیز شامل کرنا) لکھیں۔',
          instructionsEn: 'Write down 2 concrete goals to improve your venture over the next 6 months.',
          deliverableUrdu: 'اگلے ۶ ماہ کے ۲ اہداف درج کریں۔',
          deliverableEn: 'Enter your 2 six-month milestones.',
          estimatedMinutes: 8
        }
      }
    ],
    quiz: [
      {
        id: 'be-b-course-q1',
        questionUrdu: 'کاروبار اور انٹرپرینیورشپ کی بنیادی روح کیا ہے؟',
        questionEn: 'What is the core spirit of entrepreneurship?',
        optionsUrdu: [
          'لوگوں کی حقیقی ضرورت کو ایمانداری اور معیار سے پورا کر کے باوقار حلال روزی کمانا',
          'صرف لالچ اور منافع خوری',
          'بغیر محنت کے امیر بننا',
          'لوگوں کے ساتھ دھوکہ کرنا'
        ],
        optionsEn: [
          'Serving genuine human needs with honesty and quality to earn an honorable livelihood',
          'Greed and price gouging',
          'Getting rich without effort',
          'Deceiving customers'
        ],
        correctIndex: 0,
        explanationUrdu: 'خدمت، معیار اور دیانت داری ہی حقیقی انٹرپرینیورشپ کا جوہر ہے۔',
        explanationEn: 'Serving real needs with uncompromising integrity is the true essence of entrepreneurship.'
      }
    ],
    practicalTask: {
      id: 'be-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: 1 صفحے کا مکمل کاروباری منصوبہ',
      titleEn: 'Capstone: 1-Page Complete Local Business Blueprint',
      instructionsUrdu: 'اپنے محلے کے لیے ایک چھوٹے کاروبار کا 1 صفحے کا منصوبہ بنائیں جس میں پروڈکٹ، ابتدائی لاگت، منافع، گاہک اور ایماندار سروس کے اصول درج ہوں۔',
      instructionsEn: 'Create a 1-page business plan covering product, startup cost, margin, target clients, and service commitments.',
      deliverableUrdu: 'اپنا تیار کردہ ۱ صفحے کا بزنس پلان درج کریں۔',
      deliverableEn: 'Enter your 1-page business plan summary.',
      estimatedMinutes: 15
    },
    projectDescriptionUrdu: 'اپنے علاقے کے لیے 1 صفحے کا عملی، کم لاگت والا کاروباری منصوبہ اور گاہک کی خدمت کی گائیڈ تیار کریں۔',
    projectDescriptionEn: 'Draft a 1-page practical low-cost local business plan and customer service guide for your community.'
  },

  // ==================================================
  // COURSE 2 — FREELANCING & DIGITAL WORK (BEGINNER)
  // ==================================================
  {
    id: 'freelancing-digital-work-basics',
    titleUrdu: 'Freelancing اور Digital Work کی بنیادی سمجھ',
    titleEn: 'Understanding Freelancing & Digital Work',
    descriptionUrdu: 'فری لانسنگ کیا ہے؟ ہنر کو ڈیجیٹل سروس میں بدلنا، کلائنٹ سے گفتگو، پورٹ فولیو بنانا اور مستقل مزاجی و پیشہ ورانہ اخلاقیات کی حقیقت پسندانہ بنیادی تربیت۔',
    descriptionEn: 'A realistic, zero-hype beginner guide to freelancing, converting skills into digital services, client communication, portfolio creation, and professional ethics.',
    category: 'Business & Freelancing',
    categoryUrdu: 'فری لانسنگ اور ڈیجیٹل سروسز',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.5,
    ageGroups: ['16-25', '26-45', '46-60'],
    icon: 'Laptop',
    coverGradient: 'from-sky-600 via-cyan-700 to-slate-900',
    realLifePurpose: {
      personalBenefitUrdu: 'اپنے وقت اور ہنر کو گھر بیٹھے باوقار طریقے سے استعمال کرنے کی سمجھ حاصل ہوگی، اور آزادانہ کام کرنے کی صلاحیت پیدا ہوگی۔',
      personalBenefitEn: 'Gain understanding of leveraging skills and time from home, building independence through digital services.',
      familyHelpUrdu: 'گھر کے افراد پر بوجھ بنے بغیر تعلیم یا فارغ اوقات کے ساتھ آمدنی میں ہاتھ بٹا سکیں گے اور خاندانی کفالت میں مددگار بنیں گے۔',
      familyHelpEn: 'Help support household expenses alongside studies or spare hours without imposing a burden on family.',
      communityHelpUrdu: 'علاقے کے دیگر نوجوانوں اور طلبہ کو ڈیجیٹل ہنر سیکھنے، کمپیوٹر کا مثبت استعمال کرنے اور محنت کے درست طریقوں کی ترغیب دے سکیں گے۔',
      communityHelpEn: 'Guide local students and youth toward productive computer usage, digital skills, and disciplined work habits.',
      societalBenefitUrdu: 'معاشرے میں نوجوانوں کا رجحان صرف نوکری کے انتظار کے بجائے خود مختار ہنر مندی اور عالمی سطح پر خدمات فراہم کرنے کی طرف بڑھے گا۔',
      societalBenefitEn: 'Encourages a generation of skilled, proactive individuals offering valuable services globally rather than awaiting jobs.'
    },
    lessons: [
      {
        id: 'fdw-b-l1',
        titleUrdu: '1. Freelancing کیا ہے؟',
        titleEn: '1. What is Freelancing?',
        durationMinutes: 12,
        contentUrdu: `فری لانسنگ (Freelancing) کا مطلب ہے کسی ایک مستقل ادارے یا باس کے ماتحت ملازمت کیے بغیر، آزادانہ طور پر اپنے ہنر اور صلاحیت کی بنیاد پر مختلف کلائنٹس (گاہکوں) کو پروجیکٹ کے حساب سے کام کر کے دینا۔

⚠️ **اہم حقیقت پسندی اور شفافیت:**
1. **کوئی جادو یا گارنٹی نہیں:** فری لانسنگ کوئی خودکار مشین نہیں ہے جو بٹن دبانے سے پیسے اگلتی ہے۔
2. **کمائی کا انحصار:** آمدنی کا دارومدار آپ کی حقیقی مہارت کے معیار، مارکیٹ کے مقابلے، کلائنٹ سے گفتگو کے انداز اور مستقل مزاجی پر ہوتا ہے۔
3. **صبر اور مسلسل محنت:** شروعات میں پہلا کام ملنے میں وقت اور محنت درکار ہوتی ہے۔

فری لانسنگ دراصل اپنی مہارت کی آزاد تجارت (Self-Employment) ہے۔`,
        contentEn: `Freelancing means offering your skills and services on a project-by-project basis to various clients independently, without being tied to a single employer.

⚠️ **Realistic Truths:**
1. **No Guaranteed Income:** Freelancing does not automatically generate money.
2. **Earning Factors:** Your income depends strictly on skill depth, quality, clear communication, market competition, and consistency.
3. **Patience Required:** Landing initial projects requires time, dedicated effort, and skill demonstration.`,
        keyTakeawaysUrdu: [
          'فری لانسنگ کسی ادارے کی مستقل نوکری کے بجائے پروجیکٹ کی بنیاد پر آزادانہ کام ہے۔',
          'اس میں خودکار یا فوری آمدنی کی کوئی گارنٹی نہیں ہوتی۔',
          'کامیابی کا انحصار ہنر کی پختگی، کوالٹی، رابطے اور مستقل محنت پر ہے۔'
        ],
        keyTakeawaysEn: [
          'Freelancing is project-based independent work rather than salaried employment.',
          'There are zero guarantees of automated or instant wealth.',
          'Earnings depend entirely on genuine skill quality, communication, and persistence.'
        ],
        quiz: [
          {
            id: 'fdw-b-l1-q1',
            questionUrdu: 'فری لانسنگ (Freelancing) کا سب سے درست اور حقیقت پسندانہ مفہوم کیا ہے؟',
            questionEn: 'What is the most accurate definition of freelancing?',
            optionsUrdu: [
              'مستقل نوکری کے بغیر مختلف کلائنٹس کو پروجیکٹ کی بنیاد پر اپنی مہارت کی خدمات فراہم کرنا',
              'بغیر کچھ سیکھے گھر بیٹھے راتوں رات لکھ پتی بننا',
              'کمپیوٹر پر صرف گیمز کھیلنا',
              'ایک سرکاری دفتر میں پکی نوکری'
            ],
            optionsEn: [
              'Providing skill-based services to various clients independently on a project basis',
              'Getting rich overnight with zero skills',
              'Just playing video games',
              'A permanent government job'
            ],
            correctIndex: 0,
            explanationUrdu: 'فری لانسنگ اپنے ہنر کی آزادانہ اور پروجیکٹ کے حساب سے خدمات دینے کا نام ہے۔',
            explanationEn: 'Freelancing is offering independent professional services per contract or deliverable.'
          },
          {
            id: 'fdw-b-l1-q2',
            questionUrdu: 'فری لانسنگ میں کمائی اور کامیابی کا دارومدار کن باتوں پر ہوتا ہے؟',
            questionEn: 'What does freelancing success and income depend on?',
            optionsUrdu: [
              'مہارت کے معیار، اچھے رابطے، مقابلے اور مسلسل محنت پر',
              'صرف قسمت اور بغیر محنت کے دعووں پر',
              'صرف مہنگا لیپ ٹاپ خریدنے پر',
              'انٹرنیٹ پر بلاوجہ وقت ضائع کرنے پر'
            ],
            optionsEn: [
              'Skill quality, effective communication, market competition, and consistency',
              'Pure luck and baseless get-rich-quick claims',
              'Merely buying an expensive laptop',
              'Aimlessly wasting time on the internet'
            ],
            correctIndex: 0,
            explanationUrdu: 'اصل ہنر، بروقت اور شائستہ رابطہ اور لگاتار محنت ہی کلائنٹ کا اعتماد جیتتے ہیں۔',
            explanationEn: 'True capability, clear communication, and persistent discipline determine outcomes.'
          },
          {
            id: 'fdw-b-l1-q3',
            questionUrdu: 'اگر کوئی کہے کہ "فری لانسنگ میں پہلے دن سے بغیر محنت کے لاکھوں روپے ملتے ہیں"، تو یہ کیا ہے؟',
            questionEn: 'If someone claims freelancing guarantees millions on day one with zero effort, what is it?',
            optionsUrdu: [
              'ایک گمراہ کن اور جھوٹا دعویٰ جس سے بچنا چاہیے',
              '100 فیصد سچ',
              'حکومتی قانون',
              'ہر ایک کے ساتھ ایسا ہی ہوتا ہے'
            ],
            optionsEn: [
              'A misleading, false claim that must be avoided',
              '100% true fact',
              'A government law',
              'Happens to everyone automatically'
            ],
            correctIndex: 0,
            explanationUrdu: 'فری لانسنگ میں کوئی گارنٹی شدہ آمدنی نہیں ہوتی، بلکہ ہر پروجیکٹ کے لیے محنت اور معیار درکار ہوتا ہے۔',
            explanationEn: 'No platform guarantees income; all sustainable digital earnings require genuine capability and effort.'
          }
        ],
        practicalTask: {
          id: 'fdw-b-l1-task',
          titleUrdu: 'عملی مشق: اپنی 1 یا 2 صلاحیتوں کی نشاندہی کریں',
          titleEn: 'Practical Task: Identify 1–2 Transferable Skills',
          instructionsUrdu: 'اپنی ایسی کوئی بھی 1 یا 2 صلاحیتیں لکھیں (مثلاً اردو/انگریزی ٹائپنگ، گرافک بینر بنانا، ویڈیو جوڑنا، یا ریسرچ) جن کی خدمات دی جا سکتی ہیں۔',
          instructionsEn: 'List 1–2 skills you have or wish to develop (e.g. typing, graphic banners, translation, data entry).',
          deliverableUrdu: 'اپنی منتخب مہارت اور اس کے ممکنہ فوائد درج کریں۔',
          deliverableEn: 'Enter your chosen skill and how it helps clients.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'fdw-b-l2',
        titleUrdu: '2. اپنی Skill کو Freelance Service میں کیسے تبدیل کریں؟',
        titleEn: '2. Converting Your Skill into a Freelance Service',
        durationMinutes: 14,
        contentUrdu: `اکثر لوگ کہتے ہیں "مجھے کمپیوٹر آتا ہے"۔ یہ ایک عمومی بات ہے، کوئی سروس نہیں۔ کلائنٹ اس شخص کو کام دیتا ہے جو اس کا مخصوص مسئلہ حل کرے۔

🎯 **ہنر کو سروس بنانے کے 3 اصول:**
1. **واضح وضاحت:** مثلاً "میں آپ کے کاروبار کے لیے کینوا (Canva) پر 3 خوبصورت اردو سوشل میڈیا بینرز بناؤں گا"۔
2. **ڈیلیوری کا وقت:** "یہ کام 24 گھنٹے میں مکمل ہوگا"۔
3. **ریویژن کی سہولت:** "اگر آپ کو کوئی تبدیلی درکار ہوئی تو میں 1 بار خوشی سے درست کروں گا"۔

جب آپ کلائنٹ کو بتاتے ہیں کہ اسے بالکل کیا ملے گا، کب ملے گا اور کتنے میں ملے گا، تو وہ آپ پر اعتماد کرتا ہے۔`,
        contentEn: `Saying "I know computers" is vague. Clients hire freelancers who solve specific, clearly defined problems.

🎯 **3 Rules of Defining a Service:**
1. **Clarity:** e.g. "I will design 3 custom Urdu social media banners for your bakery".
2. **Delivery Timeline:** e.g. "Delivered within 24 hours".
3. **Revisions:** e.g. "Includes 1 complimentary adjustment".`,
        keyTakeawaysUrdu: [
          'عام ہنر کے بجائے مخصوص اور واضح سروس کی پیشکش کریں۔',
          'کلائنٹ کو بتائیں کہ کام کب تک اور کس معیار کا ملے گا۔',
          'سروس کی تفصیل سادہ اور سمجھ میں آنے والی ہونی چاہیے۔'
        ],
        keyTakeawaysEn: [
          'Package generic skills into distinct, benefit-driven service offerings.',
          'State exact delivery timelines and deliverable specifications.',
          'Keep your service description simple, clear, and focused on client needs.'
        ],
        quiz: [
          {
            id: 'fdw-b-l2-q1',
            questionUrdu: 'درج ذیل میں سے کون سا جملہ ایک واضح اور پروفیشنل سروس پیش کرتا ہے؟',
            questionEn: 'Which statement represents a clear, professional service offer?',
            optionsUrdu: [
              '"میں آپ کے یوٹیوب چینل کے لیے 24 گھنٹے میں 1 معیاری اردو تھمب نیل ڈیزائن کروں گا"',
              '"مجھے سب کچھ آتا ہے، کوئی بھی کام دے دیں"',
              '"میں انٹرنیٹ چلاتا ہوں"',
              '"مجھے پیسے چاہیے ہیں"'
            ],
            optionsEn: [
              '"I will design 1 high-quality YouTube thumbnail in Urdu within 24 hours"',
              '"I know everything, give me any random task"',
              '"I browse the internet"',
              '"I need money"'
            ],
            correctIndex: 0,
            explanationUrdu: 'مخصوص کام اور وقت کا تعین کلائنٹ کو فوری فیصلہ کرنے میں مدد دیتا ہے۔',
            explanationEn: 'Specific deliverables with defined turnaround times inspire client confidence.'
          },
          {
            id: 'fdw-b-l2-q2',
            questionUrdu: 'سروس پیش کرتے وقت ڈیلیوری کا وقت (Delivery Time) بتانا کیوں ضروری ہے؟',
            questionEn: 'Why is specifying delivery turnaround time essential?',
            optionsUrdu: [
              'تاکہ کلائنٹ کو معلوم ہو کہ اس کا کام کب تیار ہوگا اور منصوبہ بندی آسان رہے',
              'تاکہ کلائنٹ کو پریشان کیا جا سکے',
              'اس کا کوئی مقصد نہیں ہوتا',
              'کمپیوٹر بند رکھنے کے لیے'
            ],
            optionsEn: [
              'So the client knows precisely when the project will be ready for their schedule',
              'To confuse the client',
              'Has zero purpose',
              'To turn off the computer'
            ],
            correctIndex: 0,
            explanationUrdu: 'وقت کا تعین پروفیشنلزم کی علامت ہے اور باہمی توقعات واضح کرتا ہے۔',
            explanationEn: 'Clear timelines establish professionalism and align delivery expectations.'
          },
          {
            id: 'fdw-b-l2-q3',
            questionUrdu: 'سروس پیکج میں "ریویژن" (Revision) کا کیا مطلب ہوتا ہے؟',
            questionEn: 'What does "Revision" mean in freelance service terms?',
            optionsUrdu: [
              'کلائنٹ کی ضرورت کے مطابق کام میں چھوٹی موٹی تبدیلی یا تصحیح کرنا',
              'پورا کام ضائع کر دینا',
              'کلائنٹ کا فون بلاک کرنا',
              'نیا کمپیوٹر خریدنا'
            ],
            optionsEn: [
              'Making minor modifications or corrections based on client feedback',
              'Destroying all work',
              'Blocking the client',
              'Buying a new computer'
            ],
            correctIndex: 0,
            explanationUrdu: 'ریویژن کا مطلب ہے گاہک کی تسلی کے لیے کام میں ضروری بہتری لانا۔',
            explanationEn: 'Revisions allow fine-tuning the delivered work to ensure complete client satisfaction.'
          }
        ],
        practicalTask: {
          id: 'fdw-b-l2-task',
          titleUrdu: 'عملی مشق: 1 سروس کی مختصر اور پرکشش پیشکش لکھیں',
          titleEn: 'Practical Task: Draft a 1-Paragraph Service Offer',
          instructionsUrdu: 'اپنے ہنر کی بنیاد پر 1 سروس کارڈ لکھیں جس میں کام کی تفصیل، ڈیلیوری وقت اور خصوصیت شامل ہو۔',
          instructionsEn: 'Write a 3-sentence service offer detailing deliverable, delivery time, and key benefit.',
          deliverableUrdu: 'اپنی سروس کی پیشکش درج کریں۔',
          deliverableEn: 'Enter your service offer description.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'fdw-b-l3',
        titleUrdu: '3. Client اور Professional Communication',
        titleEn: '3. Client Interaction & Professional Communication',
        durationMinutes: 15,
        contentUrdu: `ڈیجیٹل کام میں آپ اور کلائنٹ آمنے سامنے نہیں ہوتے، اس لیے آپ کے الفاظ، لہجہ اور میسج کا انداز ہی آپ کی پوری شخصیت کا عکاس ہوتا ہے۔

💬 **پروفیشنل رابطے کے 4 بنیادی اصول:**
1. **شائستہ سلام اور واضح بات:** بات کا آغاز ادب سے کریں (جیسے "ہیلو، امید ہے آپ خیریت سے ہوں گے")۔
2. **کلائنٹ کی ضرورت پر توجہ:** صرف اپنی تعریفیں کرنے کے بجائے یہ بتائیں کہ آپ ان کا مسئلہ کیسے حل کریں گے۔
3. **وقت پر جواب:** کلائنٹ کے سوال کا جلد اور تسلی بخش جواب دیں۔
4. **ایماندارانہ بات چیت:** جو کام آپ کو نہ آتا ہو اس پر کبھی ہاں نہ کہیں؛ سچائی بعد کی شرمندگی اور نقصان سے بچاتی ہے۔`,
        contentEn: `In digital freelancing, you rarely meet in person. Your written words, tone, and punctuality define your entire professional reputation.

💬 **4 Core Rules of Client Communication:**
1. **Courteous Greetings:** Always begin with a warm, respectful greeting.
2. **Focus on Client Needs:** Discuss how you will solve their problem rather than boasting.
3. **Timely Responses:** Reply promptly and attentively to client inquiries.
4. **Honesty About Capabilities:** Never accept tasks you cannot deliver; transparency prevents broken commitments.`,
        keyTakeawaysUrdu: [
          'تحریری گفتگو میں شائستگی اور وضاحت کامیابی کی بنیاد ہے۔',
          'کلائنٹ کے مسئلے کے حل پر بات کریں، نہ کہ غیر متعلقہ باتوں پر۔',
          'جس کام کی صلاحیت نہ ہو اس کا جھوٹا وعدہ کبھی نہ کریں۔'
        ],
        keyTakeawaysEn: [
          'Clear, courteous written communication builds immediate credibility.',
          'Focus conversations on solving the client’s practical bottleneck.',
          'Never over-promise or accept tasks beyond your current expertise.'
        ],
        quiz: [
          {
            id: 'fdw-b-l3-q1',
            questionUrdu: 'کلائنٹ کے پہلے میسج کا جواب دیتے وقت سب سے بہترین طریقہ کیا ہے؟',
            questionEn: 'What is the best way to respond to a prospective client’s first message?',
            optionsUrdu: [
              'شائستہ سلام کے ساتھ پروجیکٹ کے بارے میں سمجھ بوجھ اور مدد کی پیشکش ظاہر کرنا',
              'صرف یہ لکھنا کہ "مجھے فورا پیسے بھیجیں"',
              'تین دن تک کوئی جواب نہ دینا',
              'سیدھا فون نمبر مانگنا'
            ],
            optionsEn: [
              'Warm greeting, demonstrating understanding of the task, and offering clear assistance',
              'Demand money immediately',
              'Remain silent for 3 days',
              'Demand personal phone numbers immediately'
            ],
            correctIndex: 0,
            explanationUrdu: 'شائستہ کلام اور پروجیکٹ میں دلچسپی ظاہر کرنے سے کلائنٹ مطمئن ہوتا ہے۔',
            explanationEn: 'Polite responsiveness and attentiveness to project requirements build trust.'
          },
          {
            id: 'fdw-b-l3-q2',
            questionUrdu: 'اگر کلائنٹ ایسا کام مانگے جو آپ کو بالکل نہیں آتا، تو کیا کرنا چاہیے؟',
            questionEn: 'If a client asks for a task you cannot do, what is the right approach?',
            optionsUrdu: [
              'شائستگی سے معذرت کر کے سچ بتانا کہ یہ میرا شعبہ نہیں ہے',
              'جھوٹ بول کر کام پکڑ لینا اور بعد میں غائب ہو جانا',
              'کلائنٹ سے بدتمیزی کرنا',
              'پیسے لے کر کام خراب کر دینا'
            ],
            optionsEn: [
              'Politely clarify that this is outside your expertise and decline gracefully',
              'Lie, take the contract, and disappear',
              'Be rude to the client',
              'Take the funds and submit broken work'
            ],
            correctIndex: 0,
            explanationUrdu: 'سچائی انسان کی عزت اور ساکھ کو بچاتی ہے، غلط وعدہ نقصان دہ ہوتا ہے۔',
            explanationEn: 'Honesty preserves reputation and saves both parties from wasted time.'
          },
          {
            id: 'fdw-b-l3-q3',
            questionUrdu: 'کلائنٹ کے ساتھ گفتگو میں کون سی چیز غیر پروفیشنل سمجھی جاتی ہے؟',
            questionEn: 'What is considered highly unprofessional in client communications?',
            optionsUrdu: [
              'بدتمیزی، تاخیر سے جواب دینا، اور وعدہ خلافی کرنا',
              'شائستہ الفاظ استعمال کرنا',
              'کام وقت پر مکمل کر کے دینا',
              'سلام دعا کرنا'
            ],
            optionsEn: [
              'Rudeness, unexplained delayed replies, and breaking commitments',
              'Using polite language',
              'Delivering work on time',
              'Friendly greetings'
            ],
            correctIndex: 0,
            explanationUrdu: 'بدتمیزی اور وعدہ خلافی فری لانسنگ میں سب سے بڑی ناکامی کی وجہ ہے۔',
            explanationEn: 'Rudeness and unreliability instantly destroy client trust.'
          }
        ],
        practicalTask: {
          id: 'fdw-b-l3-task',
          titleUrdu: 'عملی مشق: کلائنٹ کے لیے ۱ مختصر اور باادب پروجیکٹ پروپوزل لکھیں',
          titleEn: 'Practical Task: Draft a Polite Client Outreach Message',
          instructionsUrdu: 'کسی فرضی کلائنٹ کو سلام، ان کے پروجیکٹ کی سمجھ اور اپنی سروس کی فراہمی کے بارے میں 4 جملوں کا پیغام لکھیں۔',
          instructionsEn: 'Write a 4-sentence introductory proposal: greeting, understanding of the project, and solution.',
          deliverableUrdu: 'اپنا پروپوزل میسج درج کریں۔',
          deliverableEn: 'Enter your proposal message.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'fdw-b-l4',
        titleUrdu: '4. Portfolio اور کام کی مثالیں کیسے تیار کریں؟',
        titleEn: '4. Building a Portfolio & Sample Work',
        durationMinutes: 14,
        contentUrdu: `پورٹ فولیو (Portfolio) کا مطلب ہے آپ کے پچھلے کام کے نمونے۔ نیا کلائنٹ آپ کی زبانی باتوں سے زیادہ آپ کا کیا ہوا عملی کام دیکھنا چاہتا ہے۔

📁 **شروعات میں پورٹ فولیو کیسے بنائیں؟**
1. **فرضی پروجیکٹس:** اگر آپ کے پاس اصل کلائنٹ نہیں ہے، تو خود سے 2 یا 3 فرضی کمپنیوں (جیسے کوئی مقامی بیکری یا کپڑے کی دکان) کے لیے پوسٹر، بینر یا تحریر بنائیں۔
2. **مقامی لوگوں کی مدد:** اپنے محلے کی مسجد، اسکول یا کسی جاننے والے کے کاروبار کے لیے مفت میں کام کر کے نمونہ حاصل کریں۔
3. **صرف بہترین کام دکھائیں:** 20 خراب چیزوں کے بجائے 3 بہترین، خوبصورت اور صاف ستھرے نمونے دکھائیں۔

ایک اچھا پورٹ فولیو آپ کے لیے ایک خاموش سیلز مین کی طرح کام کرتا ہے۔`,
        contentEn: `A portfolio is proof of your past work. Clients believe what they can see rather than just promises.

📁 **How to Build an Early Portfolio:**
1. **Practice Projects:** Create sample banners, translations, or mockups for fictional or local brands.
2. **Help Local Entities:** Offer to design a flyer for a neighborhood school, clinic, or shop to earn real samples.
3. **Showcase Quality Over Quantity:** 3 polished, pristine samples are far more effective than 20 mediocre ones.`,
        keyTakeawaysUrdu: [
          'پورٹ فولیو آپ کی عملی قابلیت کا سب سے بڑا دستاویزی ثبوت ہے۔',
          'شروع میں فرضی یا مقامی کام کر کے بہترین نمونے تیار کریں۔',
          'ہمیشہ تعداد کے بجائے کام کے اعلیٰ معیار کو ترجیح دیں۔'
        ],
        keyTakeawaysEn: [
          'A portfolio is tangible evidence of your practical skill.',
          'Start with practice samples or pro-bono work for local businesses.',
          'Quality always trumps quantity when showcasing your best work.'
        ],
        quiz: [
          {
            id: 'fdw-b-l4-q1',
            questionUrdu: 'فری لانسنگ میں "پورٹ فولیو" (Portfolio) کی کیا اہمیت ہوتی ہے؟',
            questionEn: 'What is the significance of a portfolio in freelancing?',
            optionsUrdu: [
              'یہ کلائنٹ کو آپ کے کام کا عملی معیار اور ثبوت دکھاتا ہے',
              'اس کا کوئی فائدہ نہیں ہوتا',
              'یہ صرف انٹرنیٹ کا پاس ورڈ ہوتا ہے',
              'اس سے کمپیوٹر تیز چلتا ہے'
            ],
            optionsEn: [
              'It provides tangible proof of your work quality and craftsmanship to clients',
              'Has zero utility',
              'It is just an internet password',
              'Makes the computer faster'
            ],
            correctIndex: 0,
            explanationUrdu: 'پورٹ فولیو دیکھ کر کلائنٹ کو اندازہ ہوتا ہے کہ آپ کیسا کام کر کے دیں گے۔',
            explanationEn: 'A portfolio helps clients evaluate your skill level and aesthetic style.'
          },
          {
            id: 'fdw-b-l4-q2',
            questionUrdu: 'اگر آپ بالکل نئے ہوں اور کوئی پرانا کلائنٹ نہ ہو تو پورٹ فولیو کیسے بنائیں؟',
            questionEn: 'How can a complete beginner create portfolio samples without past clients?',
            optionsUrdu: [
              'فرضی پروجیکٹس بنا کر یا مقامی دکانوں اور اداروں کے لیے عملی نمونے تیار کر کے',
              'دوسروں کا کام چوری کر کے اپنا نام لکھنا',
              'جھوٹ بولنا کہ میں نے 10 سال کام کیا ہے',
              'کام سیکھنا چھوڑ دینا'
            ],
            optionsEn: [
              'Creating mock projects or designing sample deliverables for local entities',
              'Stealing other people’s work and claiming credit',
              'Lying about having 10 years of experience',
              'Quitting learning'
            ],
            correctIndex: 0,
            explanationUrdu: 'فرضی یا پریکٹس پروجیکٹس بنا کر ایمانداری سے اپنی صلاحیت دکھائی جا سکتی ہے۔',
            explanationEn: 'Creating self-initiated practice projects ethically demonstrates your talent.'
          },
          {
            id: 'fdw-b-l4-q3',
            questionUrdu: 'اپنے پورٹ فولیو میں کام شامل کرتے وقت کس بات کا خیال رکھنا چاہیے؟',
            questionEn: 'What rule should you follow when curating portfolio samples?',
            optionsUrdu: [
              'صرف اپنا سب سے بہترین، صاف ستھرا اور معیاری کام منتخب کرنا',
              'ہر الٹی سیدھی ناقص فائل اپلوڈ کر دینا',
              'غیر متعلقہ تصاویر ڈالنا',
              'صرف خالی فائلیں لگانا'
            ],
            optionsEn: [
              'Select only your cleanest, highest-quality, and most relevant work',
              'Upload broken, half-finished files randomly',
              'Include unrelated personal photos',
              'Upload blank files'
            ],
            correctIndex: 0,
            explanationUrdu: 'تھوڑا مگر معیاری کام کلائنٹ کو زیادہ متاثر کرتا ہے۔',
            explanationEn: 'A curated selection of standout work makes a memorable impression.'
          }
        ],
        practicalTask: {
          id: 'fdw-b-l4-task',
          titleUrdu: 'عملی مشق: اپنے شعبے میں 2 فرضی پروجیکٹس کا خاکہ بنائیں',
          titleEn: 'Practical Task: Outline 2 Sample Portfolio Projects',
          instructionsUrdu: 'اپنے ہنر کے مطابق 2 نمونہ کام (مثلاً 1 پوسٹر کا عنوان یا 1 تحریر کا موضوع) طے کریں جو آپ پورٹ فولیو میں رکھ سکتے ہیں۔',
          instructionsEn: 'Outline 2 mock sample projects you can produce for your portfolio.',
          deliverableUrdu: 'اپنے ۲ نمونہ پروجیکٹس کی تفصیل درج کریں۔',
          deliverableEn: 'Enter descriptions for your 2 sample projects.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'fdw-b-l5',
        titleUrdu: '5. Freelancing میں مستقل مزاجی، وقت کی پابندی اور Professional Ethics',
        titleEn: '5. Consistency, Punctuality & Ethics in Freelancing',
        durationMinutes: 12,
        contentUrdu: `فری لانسنگ میں سب سے بڑا چیلنج یہ ہے کہ آپ کا کوئی باس نہیں ہوتا جو آپ کو وقت پر اٹھائے یا ڈانٹے۔ آپ کو خود اپنا باس بننا پڑتا ہے۔

⏰ **کامیاب فری لانسر کی 3 عادات:**
1. **وقت کی پابندی (Punctuality):** اگر کام شام 5 بجے کا وعدہ کیا ہے تو 4:30 پر جمع کروائیں۔ ڈیڈلائن توڑنا کلائنٹ کا بھروسہ توڑنا ہے۔
2. **مستقل مزاجی:** روزانہ چاہے کام ملے یا نہ ملے، 1 گھنٹہ نیا ہنر سیکھنے اور اپنے پورٹ فولیو کو بہتر بنانے میں لگائیں۔
3. **امانت داری اور رازداری:** کلائنٹ کا ڈیٹا، پاس ورڈ یا معلومات کبھی کسی دوسرے کو نہ دکھائیں۔

محنت، اخلاق اور ایمانداری ہی ڈیجیٹل دنیا میں مستقل روزگار کی ضامن ہیں۔`,
        contentEn: `In freelancing, the greatest challenge is that you have no boss to push you. You must cultivate rigorous self-discipline.

⏰ **3 Habits of Resilient Freelancers:**
1. **Punctuality & Deadlines:** If promised for 5 PM, aim for 4:30 PM. Missed deadlines destroy credibility.
2. **Daily Consistency:** Spend 1 hour daily upgrading skills and refining your portfolio, even when between contracts.
3. **Confidentiality & Data Integrity:** Treat client files, data, and communications as a sacred trust.`,
        keyTakeawaysUrdu: [
          'وقت کی پابندی اور ڈیڈلائن کی پاسداری سب سے اہم خوبی ہے۔',
          'روزانہ نیا ہنر سیکھنا اور مستقل مزاجی سے پریکٹس کرنا لازمی ہے۔',
          'کلائنٹ کی معلومات اور ڈیٹا کی مکمل رازداری برقرار رکھیں۔'
        ],
        keyTakeawaysEn: [
          'Honoring deadlines and punctuality is fundamental to long-term trust.',
          'Daily skill improvement and consistent practice sustain market relevance.',
          'Maintain absolute confidentiality regarding client information and data.'
        ],
        quiz: [
          {
            id: 'fdw-b-l5-q1',
            questionUrdu: 'فری لانسنگ میں وقت کی پابندی (Punctuality) کیوں سب سے بنیادی ضرورت ہے؟',
            questionEn: 'Why is punctuality and honoring deadlines paramount in freelancing?',
            optionsUrdu: [
              'کیونکہ وقت پر کام جمع کروانے سے کلائنٹ کا اعتماد بنتا ہے اور اگلا کام ملنے کے امکانات بڑھتے ہیں',
              'اس کا کوئی فائدہ نہیں',
              'کلائنٹ کو تاخیر پسند ہوتی ہے',
              'صرف وقت ضائع کرنے کے لیے'
            ],
            optionsEn: [
              'Because timely delivery builds trust and drives repeat contracts and referrals',
              'Has zero value',
              'Clients love delayed work',
              'Just to waste time'
            ],
            correctIndex: 0,
            explanationUrdu: 'وقت کی پابندی ہی اچھے اور برے پروفیشنل کے درمیان سب سے بڑا فرق ہے۔',
            explanationEn: 'Punctual delivery distinguishes dependable professionals from amateurs.'
          },
          {
            id: 'fdw-b-l5-q2',
            questionUrdu: 'اگر کسی دن یا ہفتے کلائنٹ کا کوئی نیا کام نہ ملے تو ایک اچھے فری لانسر کو کیا کرنا چاہیے؟',
            questionEn: 'What should a disciplined freelancer do during dry periods when no active orders exist?',
            optionsUrdu: [
              'مایوس ہونے کے بجائے نیا ہنر سیکھنا اور اپنے پورٹ فولیو کو بہتر بنانا',
              'کمپیوٹر توڑ دینا اور ہمت ہار جانا',
              'سوشل میڈیا پر دوسروں کو کوسنا',
              'کچھ بھی نہ کرنا'
            ],
            optionsEn: [
              'Use the time productively to learn new techniques and upgrade portfolio samples',
              'Smash the computer and give up entirely',
              'Complain bitterly on social media',
              'Do nothing'
            ],
            correctIndex: 0,
            explanationUrdu: 'فارغ اوقات کو اپنی صلاحیت اور پورٹ فولیو بہتر بنانے میں لگانا چاہیے۔',
            explanationEn: 'Downtime is best utilized for upskilling and improving portfolio assets.'
          },
          {
            id: 'fdw-b-l5-q3',
            questionUrdu: 'کلائنٹ کی دی گئی فائلوں، تصاویر اور ذاتی معلومات کے بارے میں کیا اخلاقی اصول ہے؟',
            questionEn: 'What is the ethical rule regarding client files, images, and confidential data?',
            optionsUrdu: [
              'مکمل امانت داری اور رازداری برقرار رکھنا اور کسی کو افشا نہ کرنا',
              'سب کے ساتھ پبلک کر دینا',
              'انٹرنیٹ پر بیچ دینا',
              'ان کا مذاق اڑانا'
            ],
            optionsEn: [
              'Maintain strict confidentiality and treat client data as a protected trust',
              'Publish it publicly for all to see',
              'Sell it to random third parties',
              'Make fun of it publicly'
            ],
            correctIndex: 0,
            explanationUrdu: 'کلائنٹ کے ڈیٹا کی حفاظت امانت داری اور پیشہ ورانہ اخلاقیات کا لازمی حصہ ہے۔',
            explanationEn: 'Safeguarding client assets and private information is a non-negotiable ethical obligation.'
          }
        ],
        practicalTask: {
          id: 'fdw-b-l5-task',
          titleUrdu: 'عملی مشق: روزانہ 1 گھنٹہ سیکھنے اور پریکٹس کا شیڈول بنائیں',
          titleEn: 'Practical Task: Create a Daily 1-Hour Upskilling Routine',
          instructionsUrdu: 'اپنے پورے دن میں سے 1 مخصوص وقت طے کریں جس میں آپ بغیر کسی رکاوٹ کے ڈیجیٹل ہنر کی مشق کریں گے۔',
          instructionsEn: 'Define a dedicated 1-hour time slot each day dedicated solely to deliberate skill practice.',
          deliverableUrdu: 'اپنا روزانہ کا پریکٹس ٹائم اور ۳ اخلاقی وعدے درج کریں۔',
          deliverableEn: 'Enter your dedicated practice time and 3 ethical commitments.',
          estimatedMinutes: 8
        }
      }
    ],
    quiz: [
      {
        id: 'fdw-b-course-q1',
        questionUrdu: 'فری لانسنگ اور ڈیجیٹل ورک میں مستقل کامیابی کا اصل فارمولا کیا ہے؟',
        questionEn: 'What is the true formula for sustainable success in freelancing?',
        optionsUrdu: [
          'پختہ مہارت، شفاف اور شائستہ رابطہ، وقت کی پابندی اور دیانت دارانہ محنت',
          'شارٹ کٹس اور فوری پیسے کی لالچ',
          'بغیر محنت کے دعوے کرنا',
          'صرف قسمت کا انتظار کرنا'
        ],
        optionsEn: [
          'Solid skill mastery, transparent communication, punctual delivery, and integrity',
          'Shortcuts and get-rich-quick greed',
          'Boastful claims without substance',
          'Passively waiting for luck'
        ],
        correctIndex: 0,
        explanationUrdu: 'حقیقی مہارت، سچائی اور محنت ہی ڈیجیٹل دنیا میں مستقل ساکھ بناتی ہے۔',
        explanationEn: 'Genuine competency, honesty, and consistent delivery build enduring digital careers.'
      }
    ],
    practicalTask: {
      id: 'fdw-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: مکمل فری لانس سروس اور پورٹ فولیو پروفائل',
      titleEn: 'Capstone: Complete Freelance Service Profile & Starter Portfolio',
      instructionsUrdu: 'اپنی کسی ایک منتخب مہارت کے لیے 1 پرکشش سروس کارڈ، کلائنٹ میسج ٹیمپلیٹ اور 2 فرضی نمونوں کا پورٹ فولیو پیکج تیار کریں۔',
      instructionsEn: 'Create a complete service profile card, client proposal template, and 2 sample portfolio deliverables.',
      deliverableUrdu: 'اپنا مکمل سروس اور پورٹ فولیو خاکہ درج کریں۔',
      deliverableEn: 'Enter your complete service and portfolio blueprint.',
      estimatedMinutes: 15
    },
    projectDescriptionUrdu: 'اپنی کسی ایک مہارت کے لیے 1 پروفیشنل سروس پروفائل اور 3 نمونہ کام کا پورٹ فولیو خاکہ تیار کریں۔',
    projectDescriptionEn: 'Create a professional service profile card and a 3-item sample work outline for your chosen digital skill.'
  },

  // ==================================================
  // COURSE 3 — FINANCIAL LITERACY (BEGINNER)
  // ==================================================
  {
    id: 'financial-literacy-budgeting-basics',
    titleUrdu: 'مالی شعور اور ذاتی بجٹ کی بنیادی سمجھ',
    titleEn: 'Basics of Financial Literacy & Personal Budgeting',
    descriptionUrdu: 'آمدنی و خرچ کا توازن، ضروریات اور خواہشات میں تفریق، روزانہ حساب کتاب لکھنا، بچت، ایمرجنسی فنڈ اور قرض سے بچاؤ کی آسان تعلیمی رہنمائی۔',
    descriptionEn: 'An educational guide covering income-expense balance, distinguishing needs from wants, daily tracking, savings, emergency funds, and responsible debt choices.',
    category: 'Financial Literacy',
    categoryUrdu: 'مالیاتی شعور اور بجٹ',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.0,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'Coins',
    coverGradient: 'from-emerald-600 via-green-700 to-teal-900',
    realLifePurpose: {
      personalBenefitUrdu: 'پیسوں کے ضیاع اور فضول خرچی سے بچاؤ ہوگا، مالی دباؤ کم ہوگا اور اپنے محدود وسائل میں پرسکون زندگی گزارنے کا سلیقہ آئے گا۔',
      personalBenefitEn: 'Avoid wasteful spending, reduce financial anxiety, and live peacefully within available resources.',
      familyHelpUrdu: 'گھریلو بجٹ متوازن رہے گا، بچوں کی تعلیم اور ناگہانی ضروریات کے لیے پیشگی رقم موجود رہے گی اور خاندان قرض کے بوجھ سے محفوظ رہے گا۔',
      familyHelpEn: 'Maintains balanced household budgets, keeps contingency funds for health/education, and shields families from bad debt.',
      communityHelpUrdu: 'گاؤں یا محلے میں سادگی، اسراف کی روک تھام اور ہنگامی حالات میں باہمی مالی مدد اور کمیٹی کے نظام کو شفاف بنانے میں رہنمائی ہوگی۔',
      communityHelpEn: 'Encourages local simplicity, reduces wasteful customs, and promotes transparent, collaborative savings groups.',
      societalBenefitUrdu: 'معاشرہ غیر ضروری قرضوں، مالی بے راہ روی اور دکھاوے کی دوڑ سے نکل کر معاشی استحکام اور اطمینان کی طرف گامزن ہوگا۔',
      societalBenefitEn: 'Transforms communities away from ostentation and consumer debt toward financial resilience and stability.'
    },
    lessons: [
      {
        id: 'fl-b-l1',
        titleUrdu: '1. آمدنی، خرچ اور بجٹ کیا ہے؟',
        titleEn: '1. Income, Expenses & What is a Budget?',
        durationMinutes: 10,
        contentUrdu: `مالی شعور (Financial Literacy) کا مطلب ہے اپنے پیسے کی قدر کو سمجھنا اور اسے اس طرح استعمال کرنا کہ زندگی پرسکون رہے اور مستقبل محفوظ ہو۔

📊 **3 بنیادی مالی ستون:**
1. **آمدنی (Income):** وہ تمام رقم جو آپ یا آپ کے گھر والے محنت، مزدوری، تنخواہ، کھیتی باڑی یا کاروبار سے کماتے ہیں۔
2. **اخراجات (Expenses):** وہ رقم جو کھانے پینے، بلوں، کرائے اور دیگر کاموں پر خرچ ہوتی ہے۔
3. **بجٹ (Budget):** ایک تحریری نقشہ جو پہلے سے طے کرتا ہے کہ آنے والے مہینے کے پیسے کن کاموں پر کتنے خرچ ہوں گے تاکہ مہینے کے آخری دنوں میں ادھار نہ مانگنا پڑے۔

بجٹ قید نہیں بلکہ آپ کے پیسوں کو صحیح سمت دینے کا ایک آزاد راستہ ہے۔`,
        contentEn: `Financial literacy means understanding the value of money and managing cash flow to live peacefully and secure the future.

📊 **3 Core Pillars:**
1. **Income:** Total money earned through labor, salary, farming, or business.
2. **Expenses:** Total money spent on food, utilities, rent, and daily necessities.
3. **Budget:** A proactive plan allocating income before the month begins to prevent mid-month shortages.`,
        keyTakeawaysUrdu: [
          'بجٹ آمدنی اور اخراجات کو متوازن رکھنے کا پیشگی تحریری منصوبہ ہے۔',
          'آمدنی سے زیادہ خرچ انسان کو ہمیشہ مالی پریشانی میں مبتلا رکھتا ہے۔',
          'بجٹ بنانے سے پیسوں کے ضیاع کا راستہ بند ہوتا ہے۔'
        ],
        keyTakeawaysEn: [
          'A budget is a proactive written blueprint balancing income and spending.',
          'Spending beyond income creates persistent financial anxiety and debt traps.',
          'Budgeting stops unintentional financial leakage.'
        ],
        quiz: [
          {
            id: 'fl-b-l1-q1',
            questionUrdu: 'بجٹ (Budget) بنانے کا سب سے بنیادی مقصد کیا ہے؟',
            questionEn: 'What is the primary purpose of making a personal budget?',
            optionsUrdu: [
              'آمدنی اور اخراجات کا حساب رکھ کر پیسے کو دانشمندی سے سنبھالنا',
              'پیسے خرچ کرنا مکمل طور پر بند کر دینا',
              'صرف بینک میں کھاتہ کھولنا',
              'کاغذ پر لکیریں لگانا'
            ],
            optionsEn: [
              'Managing money prudently by balancing income and expenditures',
              'Stopping all essential spending',
              'Merely opening a bank account',
              'Drawing lines on paper'
            ],
            correctIndex: 0,
            explanationUrdu: 'بجٹ بنانے سے انسان کو معلوم رہتا ہے کہ اس کا پیسہ کہاں جا رہا ہے۔',
            explanationEn: 'Budgeting gives visibility and control over financial inflows and outflows.'
          },
          {
            id: 'fl-b-l1-q2',
            questionUrdu: 'اگر کسی شخص کی ماہانہ آمدنی 30 ہزار روپے ہو اور اس کا خرچ 35 ہزار روپے ہو تو کیا نتیجہ ہوگا؟',
            questionEn: 'If a person earns Rs. 30,000 monthly but spends Rs. 35,000, what happens?',
            optionsUrdu: [
              'وہ ہر ماہ 5 ہزار روپے کے قرض اور مالی پریشانی میں مبتلا ہوتا جائے گا',
              'وہ بہت جلد امیر ہو جائے گا',
              'اس کے پیسے بڑھ جائیں گے',
              'کوئی فرق نہیں پڑے گا'
            ],
            optionsEn: [
              'They accumulate Rs. 5,000 monthly debt and enter a stressful debt cycle',
              'They become wealthy quickly',
              'Their money multiplies automatically',
              'Nothing happens'
            ],
            correctIndex: 0,
            explanationUrdu: 'آمدنی سے زیادہ خرچ ہمیشہ مقروض بنا دیتا ہے، اس لیے اخراجات کو آمدنی کے اندر رکھنا لازمی ہے۔',
            explanationEn: 'Outspending income inevitably leads to compounding debt.'
          },
          {
            id: 'fl-b-l1-q3',
            questionUrdu: 'مالی طور پر کامیاب اور پرسکون انسان کی سب سے بڑی عادت کیا ہوتی ہے؟',
            questionEn: 'What is the foremost habit of financially peaceful individuals?',
            optionsUrdu: [
              'اپنی چادر دیکھ کر پاؤں پھیلانا اور آمدنی سے کم خرچ کرنا',
              'دکھاوے کے لیے ہر مہنگی چیز ادھار پر خریدنا',
              'کبھی حساب کتاب نہ لکھنا',
              'سارا پیسہ ایک ہی دن اڑا دینا'
            ],
            optionsEn: [
              'Living within one’s means and consistently spending less than earned',
              'Borrowing for showy luxury items',
              'Never recording financial accounts',
              'Blowing all savings in one day'
            ],
            correctIndex: 0,
            explanationUrdu: 'آمدنی کی حد میں رہنا اور قناعت پسندی ہی معاشی اطمینان کی کلید ہے۔',
            explanationEn: 'Living below one’s means guarantees financial sanity and stability.'
          }
        ],
        practicalTask: {
          id: 'fl-b-l1-task',
          titleUrdu: 'عملی مشق: اپنی متوقع ماہانہ آمدنی اور اہم ترین اخراجات لکھیں',
          titleEn: 'Practical Task: Draft Estimated Monthly Inflows & Core Outflows',
          instructionsUrdu: 'ایک صفحے پر اپنے گھر کی کل متوقع آمدنی اور 4 بڑے اخراجات (راشن، بل، کرایہ، تعلیم) لکھ کر موازنہ کریں۔',
          instructionsEn: 'Write down your household estimated monthly income and 4 essential expense categories.',
          deliverableUrdu: 'آمدنی اور 4 بنیادی اخراجات درج کریں۔',
          deliverableEn: 'Enter monthly income and 4 primary expense buckets.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'fl-b-l2',
        titleUrdu: '2. ضروریات اور خواہشات میں فرق',
        titleEn: '2. Needs vs. Wants: Prioritizing Expenses',
        durationMinutes: 12,
        contentUrdu: `مالی پریشانیوں کی سب سے بڑی وجہ "ضرورت" اور "خواہش" میں فرق نہ کرنا ہے۔

⚖️ **دونوں میں بنیادی فرق:**
1. **ضروریات (Needs):** وہ ناگزیر چیزیں جن کے بغیر انسان زندہ نہیں رہ سکتا یا روزمرہ زندگی رک جاتی ہے (جیسے آٹا، راشن، پینے کا صاف پانی، دوائی، بجلی کا بل، اسکول کی فیس اور سادہ لباس)۔
2. **خواہشات (Wants):** وہ چیزیں جو دل چاہتا ہے مگر ان کے بغیر بھی انسان آرام سے زندہ رہ سکتا ہے (جیسے نیا مہنگا اسمارٹ فون، ہوٹلنگ، برانڈڈ جوتے، یا غیر ضروری فیشن)۔

💡 **سنہری اصول:** ہمیشہ پہلے اپنی 100 فیصد ضروریات پوری کریں؛ اگر پیسے بچیں تو کچھ جائز خواہشات پوری کی جا سکتی ہیں، ورنہ نہیں۔`,
        contentEn: `Most financial struggles stem from confusing 'needs' with 'wants'.

⚖️ **The Distinction:**
1. **Needs (Essential):** Food, clean water, healthcare, shelter, utility bills, school fees, and basic clothing.
2. **Wants (Optional):** Upgraded luxury smartphones, frequent restaurant dining, designer shoes, and decorative impulses.

💡 **Golden Rule:** Satisfy 100% of essential needs first. Only entertain discretionary wants if genuine surplus exists.`,
        keyTakeawaysUrdu: [
          'ضروریات زندگی کے لیے لازمی ہیں جبکہ خواہشات اختیاری ہیں۔',
          'پہلے تمام ضروریات کو ترجیح دیں پھر بچ جانے والی رقم کا فیصلہ کریں۔',
          'خواہشات کو مؤخر کرنا مالی ضبط اور پختگی کی علامت ہے۔'
        ],
        keyTakeawaysEn: [
          'Needs are essential for survival and health; wants are discretionary preferences.',
          'Prioritize fulfilling all essential needs before considering optional wants.',
          'Delaying gratification for non-essential wants is a sign of financial maturity.'
        ],
        quiz: [
          {
            id: 'fl-b-l2-q1',
            questionUrdu: 'درج ذیل میں سے کون سی چیز ایک حقیقی "ضرورت" (Need) ہے؟',
            questionEn: 'Which of the following represents a true essential "Need"?',
            optionsUrdu: [
              'بیمار فرد کے لیے بنیادی ادویات اور علاج',
              'ہر سال نیا ماڈل موبائل فون خریدنا',
              'ہفتے میں چار بار ہوٹل سے پیزا منگوانا',
              'مہنگے برانڈ کے چشمے'
            ],
            optionsEn: [
              'Basic medication and healthcare for an ailing family member',
              'Upgrading to a new phone model every year',
              'Ordering restaurant fast food 4 times a week',
              'Designer sunglasses'
            ],
            correctIndex: 0,
            explanationUrdu: 'صحت اور دوائی زندگی کے لیے لازمی ہے، اس لیے یہ سب سے پہلی ضرورت ہے۔',
            explanationEn: 'Healthcare and necessary medicines directly affect human life and well-being.'
          },
          {
            id: 'fl-b-l2-q2',
            questionUrdu: 'اگر بجٹ محدود ہو اور ہاتھ میں پیسے کم ہوں تو سب سے پہلے کس چیز پر خرچ کرنا چاہیے؟',
            questionEn: 'When cash is tight, which expense must take precedence?',
            optionsUrdu: [
              'گھر کے راشن، بچوں کے کھانے اور لازمی بلوں پر',
              'دوستوں کی دعوت اور پارٹی پر',
              'نئے فینسی پردوں پر',
              'سنیما کے ٹکٹ پر'
            ],
            optionsEn: [
              'Household groceries, staple food, and essential utility bills',
              'Throwing a lavish party for friends',
              'Buying decorative fancy curtains',
              'Cinema tickets'
            ],
            correctIndex: 0,
            explanationUrdu: 'بنیادی خوراک اور سر کی چھت سب سے پہلی ترجیح ہوتی ہے۔',
            explanationEn: 'Nutritional sustenance and shelter utilities are non-negotiable fundamentals.'
          },
          {
            id: 'fl-b-l2-q3',
            questionUrdu: 'خواہشات (Wants) کو قابو میں رکھنے کا سب سے بڑا فائدہ کیا ہوتا ہے؟',
            questionEn: 'What is the biggest benefit of curbing impulse wants?',
            optionsUrdu: [
              'پیسے کی بچت ہوتی ہے اور ہنگامی وقت کے لیے پریشانی نہیں ہوتی',
              'انسان تنہا ہو جاتا ہے',
              'زندگی مشکل ہو جاتی ہے',
              'کوئی فائدہ نہیں ہوتا'
            ],
            optionsEn: [
              'Saves money and prevents financial panic during unexpected emergencies',
              'Causes isolation',
              'Makes life unbearable',
              'Has zero benefit'
            ],
            correctIndex: 0,
            explanationUrdu: 'خواہشات پر قابو پانے سے غیر ضروری اخراجات رکتے ہیں اور بچت ممکن ہوتی ہے۔',
            explanationEn: 'Discipline around discretionary spending builds a reliable safety cushion.'
          }
        ],
        practicalTask: {
          id: 'fl-b-l2-task',
          titleUrdu: 'عملی مشق: پچھلے ہفتے کے 5 اخراجات کو ضرورت اور خواہش میں تقسیم کریں',
          titleEn: 'Practical Task: Categorize 5 Recent Expenses into Needs vs Wants',
          instructionsUrdu: 'اپنے گزشتہ چند دنوں کے 5 اخراجات لکھیں اور ہر ایک کے آگے "ضرورت" یا "خواہش" لکھیں۔',
          instructionsEn: 'List 5 items you purchased recently and label each as either a "Need" or a "Want".',
          deliverableUrdu: '۵ اخراجات اور ان کی درجہ بندی درج کریں۔',
          deliverableEn: 'Enter 5 expenses and their classification.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'fl-b-l3',
        titleUrdu: '3. روزانہ اور ماہانہ اخراجات لکھنا',
        titleEn: '3. Tracking Daily & Monthly Expenses',
        durationMinutes: 12,
        contentUrdu: `اکثر لوگ مہینے کے آخر میں کہتے ہیں: "پیسے کہاں چلے گئے، پتہ ہی نہیں چلا!"۔ اس کی واحد وجہ یہ ہے کہ وہ روزانہ ہونے والے چھوٹے چھوٹے اخراجات کو نہیں لکھتے۔

📖 **اخراجات لکھنے کا آسان طریقہ:**
1. **ایک چھوٹی پاکٹ ڈائری یا موبائل نوٹ پیڈ:** جب بھی 50 روپے بھی خرچ ہوں، فوراً لکھ لیں (مثلاً چائے، بس کرایہ، سبزی)۔
2. **روزانہ کا 2 منٹ جائزہ:** رات کو سونے سے پہلے کل خرچ کا ٹوٹل کریں۔
3. **ماہانہ خلاصہ:** مہینے کے آخر میں دیکھیں کہ کس مد میں ضرورت سے زیادہ خرچ ہوا۔

جب آپ لکھتے ہیں تو آپ کے اندر خود بخود فضول خرچی سے رکنے کا شعور پیدا ہو جاتا ہے۔`,
        contentEn: `People often wonder: "Where did all my money go?" This occurs when small, daily micro-expenses go unrecorded.

📖 **Simple Tracking Habits:**
1. **Pocket Diary or Mobile Notes:** Jot down every small expense immediately (tea, transport fare, snacks).
2. **Daily 2-Minute Total:** Tally expenses each evening before sleeping.
3. **Monthly Review:** Review expense categories at the end of the month to spot wastage.`,
        keyTakeawaysUrdu: [
          'ہر چھوٹا بڑا خرچ روزانہ نوٹ کرنے سے پیسے کے ضیاع کا پتہ چلتا ہے۔',
          'چھوٹی پاکٹ ڈائری یا فون کا نوٹ پیڈ بہترین اوزار ہے۔',
          'ماہانہ جائزے سے اگلے مہینے کے بجٹ کو بہتر بنانے میں مدد ملتی ہے۔'
        ],
        keyTakeawaysEn: [
          'Tracking daily micro-spending unmasks invisible financial leaks.',
          'A simple pocket notebook or mobile notes app is completely sufficient.',
          'Monthly reviews help refine the upcoming month’s budget allocation.'
        ],
        quiz: [
          {
            id: 'fl-b-l3-q1',
            questionUrdu: 'روزانہ کے اخراجات لکھنے (Expense Tracking) کا سب سے بڑا فائدہ کیا ہے؟',
            questionEn: 'What is the primary benefit of tracking daily expenses?',
            optionsUrdu: [
              'معلوم ہوتا ہے کہ پیسہ کہاں خرچ ہو رہا ہے اور فضول خرچی پر قابو پایا جا سکتا ہے',
              'اس سے انگلیاں تھک جاتی ہیں',
              'پیسے خود بخود ڈبل ہو جاتے ہیں',
              'اس کا کوئی فائدہ نہیں'
            ],
            optionsEn: [
              'Reveals exactly where funds flow, allowing you to curb unnecessary leakage',
              'Tires your fingers',
              'Automatically doubles money',
              'Has zero benefit'
            ],
            correctIndex: 0,
            explanationUrdu: 'لکھنے سے فضول خرچی کی نشاندہی ہوتی ہے اور اگلے مہینے بچت آسان ہو جاتی ہے۔',
            explanationEn: 'Tracking creates financial awareness and highlights avoidable expenditures.'
          },
          {
            id: 'fl-b-l3-q2',
            questionUrdu: 'روزانہ اخراجات نوٹ کرنے کے لیے کون سا طریقہ سب سے آسان اور قابل عمل ہے؟',
            questionEn: 'What is the most practical way to record daily expenditures?',
            optionsUrdu: [
              'ایک چھوٹی کاپی، ڈائری یا موبائل کا سادہ نوٹ پیڈ استعمال کرنا',
              'مہنگا ترین کمپیوٹر خریدنا',
              'ساری رسیدیں جلا دینا',
              'صرف یادداشت پر بھروسہ کر کے کچھ نہ لکھنا'
            ],
            optionsEn: [
              'Using a small pocket notepad, notebook, or smartphone notes app',
              'Buying an ultra-expensive computer',
              'Burning all receipts',
              'Relying purely on memory without recording anything'
            ],
            correctIndex: 0,
            explanationUrdu: 'ایک سادہ کاپی یا موبائل نوٹ پیڈ روزانہ کے حساب کے لیے بالکل کافی ہے۔',
            explanationEn: 'A simple pocket notepad or phone notes app is accessible and effective.'
          },
          {
            id: 'fl-b-l3-q3',
            questionUrdu: 'چھوٹے اخراجات (جیسے روزانہ کی اضافی چائے، کولڈ ڈرنک یا اسنیکس) پر دھیان نہ دینے سے کیا ہوتا ہے؟',
            questionEn: 'What happens when you ignore small repeated daily micro-spending?',
            optionsUrdu: [
              'مہینے کے آخر میں یہ چھوٹے اخراجات مل کر ایک بڑی رقم کا نقصان بن جاتے ہیں',
              'کچھ بھی نہیں ہوتا',
              'پیسے بچ جاتے ہیں',
              'بینک انعام دیتا ہے'
            ],
            optionsEn: [
              'By month-end, these small leaks compound into a substantial financial drain',
              'Nothing happens',
              'Money is saved automatically',
              'The bank gives you a bonus'
            ],
            correctIndex: 0,
            explanationUrdu: 'روزانہ کے 100 روپے کا غیر ضروری خرچ مہینے میں 3000 روپے کا بڑا نقصان بنتا ہے۔',
            explanationEn: 'A daily Rs. 100 leak accumulates to Rs. 3,000 in monthly loss.'
          }
        ],
        practicalTask: {
          id: 'fl-b-l3-task',
          titleUrdu: 'عملی مشق: آج کے دن کے تمام اخراجات کا اندراج کریں',
          titleEn: 'Practical Task: Log All Expenses for a Single Day',
          instructionsUrdu: 'آج صبح سے شام تک جو بھی پیسے خرچ ہوئے ہیں ان کی مکمل فہرست بنا کر کل رقم کا حساب لگائیں۔',
          instructionsEn: 'Log every single expense incurred throughout today and calculate the grand total.',
          deliverableUrdu: 'آج کے تمام اخراجات کی فہرست اور ٹوٹل درج کریں۔',
          deliverableEn: 'Enter today’s expense log and final total.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'fl-b-l4',
        titleUrdu: '4. Saving اور Emergency Fund کی بنیادی سمجھ',
        titleEn: '4. Understanding Savings & Emergency Funds',
        durationMinutes: 14,
        contentUrdu: `بہت سے لوگ سمجھتے ہیں کہ "بچت" وہ پیسے ہیں جو سب کچھ اڑانے کے بعد اگر اتفاق سے بچ جائیں۔ یہ غلط سوچ ہے۔

💰 **بچت کا درست اصول (Pay Yourself First):**
جیسے ہی تنخواہ یا کمائی ہاتھ میں آئے، سب سے پہلے اس کا ایک چھوٹا حصہ (مثلاً 5% یا 10%) فوراً الگ محفوظ جگہ رکھ دیں، اور باقی رقم سے مہینہ چلائیں۔

🛡️ **ہنگامی فنڈ (Emergency Fund) کیا ہے؟**
یہ وہ رقم ہے جو کسی اچانک مصیبت (جیسے بیماری، گھر کی ہنگامی مرمت، یا روزگار کا عارضی تعطل) کے لیے سنبھال کر رکھی جاتی ہے۔
- **ہدف:** کم از کم 1 سے 3 ماہ کے لازمی راشن اور بلوں کے برابر رقم۔
- **فائدہ:** یہ فنڈ آپ کو مشکل وقت میں سود خوروں یا رشتہ داروں سے ہاتھ پھیلانے اور قرض لینے سے بچاتا ہے۔`,
        contentEn: `Many believe savings is whatever happens to remain after spending everything. The opposite is true.

💰 **Pay Yourself First:**
As soon as you receive income, set aside a modest portion (e.g. 5%–10%) into savings first, then budget the rest.

🛡️ **What is an Emergency Fund?**
A dedicated cash reserve strictly for unforeseen emergencies (illness, urgent repairs, sudden job transition).
- **Target:** 1 to 3 months of core food and utility expenses.
- **Benefit:** Protects you from predatory debt or begging during crises.`,
        keyTakeawaysUrdu: [
          'آمدنی آتے ہی سب سے پہلے بچت کا حصہ الگ کر کے رکھنا عقلمندی ہے۔',
          'ہنگامی فنڈ ناگہانی پریشانیوں میں قرض لینے کے خلاف ڈھال بنتا ہے۔',
          'قطرہ قطرہ جمع کرنے سے وقت کے ساتھ ایک مضبوط سہارا تیار ہو جاتا ہے۔'
        ],
        keyTakeawaysEn: [
          'Save a portion of earnings immediately upon receiving income.',
          'An emergency fund shields you from taking emergency debt during crises.',
          'Small, consistent contributions compound into substantial financial safety.'
        ],
        quiz: [
          {
            id: 'fl-b-l4-q1',
            questionUrdu: 'بچت (Saving) کرنے کا سب سے مؤثر اور درست طریقہ کیا ہے؟',
            questionEn: 'What is the most effective approach to building savings?',
            optionsUrdu: [
              'آمدنی ملتے ہی سب سے پہلے 5 سے 10 فیصد رقم الگ بچت میں رکھنا',
              'مہینے کے آخر تک سارا پیسہ خرچ کرنے کے بعد دیکھنا کہ کیا بچا',
              'کبھی بچت نہ کرنا',
              'تمام پیسے دوستوں کو دے دینا'
            ],
            optionsEn: [
              'Setting aside 5%–10% into savings immediately upon receiving income',
              'Waiting until the month ends to see if anything accidentally remains',
              'Never saving anything',
              'Giving all money away to friends'
            ],
            correctIndex: 0,
            explanationUrdu: 'پہلے بچت الگ کرنے سے فضول خرچی کا موقع نہیں ملتا اور بچت یقینی بنتی ہے۔',
            explanationEn: 'Saving first guarantees that spending automatically adjusts to the remaining amount.'
          },
          {
            id: 'fl-b-l4-q2',
            questionUrdu: 'ہنگامی فنڈ (Emergency Fund) کا اصل مقصد کیا ہے؟',
            questionEn: 'What is the primary purpose of an Emergency Fund?',
            optionsUrdu: [
              'اچانک بیماری، حادثے یا عارضی بے روزگاری کے وقت قرض سے بچاؤ اور حفاظت',
              'شادیوں میں دکھاوے کے کپڑے خریدنا',
              'ہوٹلنگ اور پکنک پر جانا',
              'نئی گاڑی کی سجاوٹ کرنا'
            ],
            optionsEn: [
              'Shielding against debt during unexpected medical emergencies or job disruption',
              'Buying flashy wedding outfits',
              'Vacations and luxury picnics',
              'Car accessories'
            ],
            correctIndex: 0,
            explanationUrdu: 'ایمرجنسی فنڈ برے وقت میں انسان کی عزت اور خودداری کی حفاظت کرتا ہے۔',
            explanationEn: 'An emergency fund safeguards family dignity and solvency during unforeseen crises.'
          },
          {
            id: 'fl-b-l4-q3',
            questionUrdu: 'ایک عام خاندان کے لیے ابتدائی ہنگامی فنڈ کا کتنا ہدف مناسب سمجھا جاتا ہے؟',
            questionEn: 'What is a sensible baseline target for a family emergency fund?',
            optionsUrdu: [
              'کم از کم 1 سے 3 ماہ کے بنیادی گھریلو راشن اور لازمی بلوں کے برابر رقم',
              '100 سال کے تمام اخراجات',
              'صرف 10 روپے',
              'کوئی رقم ضروری نہیں'
            ],
            optionsEn: [
              'Approximately 1 to 3 months of basic grocery and essential utility costs',
              '100 years of all possible expenses',
              'Just Rs. 10',
              'Zero amount needed'
            ],
            correctIndex: 0,
            explanationUrdu: '1 سے 3 ماہ کے اخراجات ناگہانی حالات میں سنبھلنے کے لیے مناسب وقت دیتے ہیں۔',
            explanationEn: 'A 1–3 month reserve provides vital breathing room to navigate emergencies.'
          }
        ],
        practicalTask: {
          id: 'fl-b-l4-task',
          titleUrdu: 'عملی مشق: اپنا پہلا ایمرجنسی فنڈ کا ہدف مقرر کریں',
          titleEn: 'Practical Task: Calculate Your 1-Month Emergency Reserve Target',
          instructionsUrdu: 'اپنے گھر کے 1 ماہ کے لازمی راشن اور بلوں کا حساب لگا کر ہنگامی فنڈ کا ابتدائی ہدف طے کریں۔',
          instructionsEn: 'Calculate the total cost of 1 month of essential groceries and bills to define your target emergency reserve.',
          deliverableUrdu: 'اپنے ایمرجنسی فنڈ کا ہدف اور ماہانہ بچت کی رقم درج کریں۔',
          deliverableEn: 'Enter your emergency fund target amount and monthly savings commitment.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'fl-b-l5',
        titleUrdu: '5. قرض، مالی ذمہ داری اور محفوظ مالی فیصلے',
        titleEn: '5. Debt, Financial Responsibility & Safe Choices',
        durationMinutes: 12,
        contentUrdu: `قرض ایک ایسی زنجیر ہے جو انسان کے سکون اور آزادی کو چھین لیتی ہے۔ مالی شعور کا بنیادی سبق یہ ہے کہ قرض سے ہر ممکن حد تک بچا جائے۔

🚫 **قرض کے بارے میں اہم ہدایات:**
1. **دکھاوے کے لیے قرض کبھی نہ لیں:** شادیوں کے فضول رسم و رواج، مہنگے موبائل، یا دوسروں کو دکھانے کے لیے لیا گیا قرض بربادی لاتا ہے۔
2. **سود اور غیر قانونی قرضوں سے پرہیز:** منافع خور قرض دہندگان کے چکر میں نہ پھنسیں، یہ انسان کی پوری کمائی نگل جاتے ہیں۔
3. **قرض کی جلد ادائیگی:** اگر مجبوری میں کوئی جائز قرض لیا ہو تو عیاشی بند کر کے سب سے پہلے قرض اتارنے کو اولین ترجیح بنائیں۔

سادگی، قناعت اور دیانت داری ہی مالی خود مختاری کا سب سے محفوظ قلعہ ہے۔`,
        contentEn: `Debt is a heavy shackle that strips away personal peace and freedom.

🚫 **Guiding Rules on Debt:**
1. **Never Borrow for Status:** Borrowing for lavish weddings, consumer gadgets, or social prestige is financially reckless.
2. **Avoid Predatory Lenders:** Stay far away from high-interest loan sharks and exploitative lending apps.
3. **Prioritize Repayment:** If you carry legitimate debt, trim discretionary spending to repay it immediately.

Simplicity and contentment are the ultimate safeguards of long-term financial freedom.`,
        keyTakeawaysUrdu: [
          'دکھاوے اور پرتعیش اشیاء کے لیے قرض لینا مالی خودکشی کے مترادف ہے۔',
          'سودی اور غیر رجسٹرڈ قرض ایپس کے جھانسے سے سختی سے بچیں۔',
          'سادگی اور قناعت پسندی میں ہی حقیقی معاشی سکون ہے۔'
        ],
        keyTakeawaysEn: [
          'Borrowing for social status or luxuries creates deep financial distress.',
          'Strictly avoid predatory lenders and unauthorized loan apps.',
          'Simplicity, contentment, and living within means bring genuine economic peace.'
        ],
        quiz: [
          {
            id: 'fl-b-l5-q1',
            questionUrdu: 'درج ذیل میں سے کس مقصد کے لیے قرض لینا سب سے زیادہ نقصان دہ اور غلط ہے؟',
            questionEn: 'For which purpose is taking debt most dangerous and harmful?',
            optionsUrdu: [
              'شادی بیاہ کے دکھاوے، فضول رسموں یا مہنگے برانڈز کے لیے قرض لینا',
              'شدید بیماری میں جان بچانے کے لیے ناگزیر علاج',
              'بنیادی خوراک کی اشد مجبوری',
              'کوئی بھی نہیں'
            ],
            optionsEn: [
              'Borrowing for lavish wedding ceremonies, status symbols, or luxury goods',
              'Urgent life-saving medical care',
              'Critical emergency food sustenance',
              'None of these'
            ],
            correctIndex: 0,
            explanationUrdu: 'دکھاوے کے لیے قرض لینا مستقبل کو گروی رکھ دیتا ہے اور انسان کو ہمیشہ مقروض رکھتا ہے۔',
            explanationEn: 'Borrowing for social prestige ruins long-term financial health and breeds perpetual stress.'
          },
          {
            id: 'fl-b-l5-q2',
            questionUrdu: 'انٹرنیٹ پر موجود مشکوک "فوری لون" ایپس اور سودی قرض دہندگان سے کیوں بچنا چاہیے؟',
            questionEn: 'Why should you strictly avoid predatory fast-loan apps and loan sharks?',
            optionsUrdu: [
              'کیونکہ وہ بھاری سود اور بلیک میلنگ کے ذریعے انسان اور خاندان کو تباہ کر دیتے ہیں',
              'کیونکہ وہ مفت پیسے دیتے ہیں',
              'کیونکہ وہ حکومت کی اجازت سے کام کرتے ہیں',
              'ان سے کوئی نقصان نہیں ہوتا'
            ],
            optionsEn: [
              'Because extortionate hidden rates and harassment tactics devastate families',
              'Because they give free money',
              'Because they are government charity',
              'They cause zero harm'
            ],
            correctIndex: 0,
            explanationUrdu: 'غیر قانونی لون ایپس دھوکہ اور ہراسانی کا جال ہوتی ہیں جن سے ہمیشہ دور رہنا چاہیے۔',
            explanationEn: 'Predatory lending apps use deceptive practices and extortionate fees that ruin borrowers.'
          },
          {
            id: 'fl-b-l5-q3',
            questionUrdu: 'اگر کسی شخص کے سر پر کوئی پرانا قرض ہو تو اس کی سب سے پہلی ترجیح کیا ہونی چاہیے؟',
            questionEn: 'If a person carries an existing debt, what should be their top financial priority?',
            optionsUrdu: [
              'غیر ضروری اخراجات بند کر کے سب سے پہلے قرض کی رقم واپس ادا کرنا',
              'مزید نیا قرض لے کر چھٹیاں منانا',
              'قرض بھول جانا اور دینے والے سے چھپ جانا',
              'پیسے جوئے میں لگا دینا'
            ],
            optionsEn: [
              'Cutting non-essential expenses to clear the debt balance as swiftly as possible',
              'Borrowing more money for vacations',
              'Hiding from creditors and evading repayment',
              'Gambling the remaining cash'
            ],
            correctIndex: 0,
            explanationUrdu: 'قرض کی جلد ادائیگی انسان کو ذہنی سکون دیتی ہے اور معاشرے میں ساکھ بحال رکھتی ہے۔',
            explanationEn: 'Expediting debt repayment restores personal peace of mind and creditworthiness.'
          }
        ],
        practicalTask: {
          id: 'fl-b-l5-task',
          titleUrdu: 'عملی مشق: اخراجات کم کرنے کے 3 عملی طریقے تجویز کریں',
          titleEn: 'Practical Task: Identify 3 Non-Essential Household Expenses to Cut',
          instructionsUrdu: 'اپنے گھریلو یا ذاتی معمولات میں سے 3 ایسی چیزیں تلاش کریں جنہیں کم کر کے پیسے بچائے جا سکتے ہیں۔',
          instructionsEn: 'List 3 discretionary spending habits you can reduce to save money for your emergency fund.',
          deliverableUrdu: 'اخراجات میں کٹوتی کے ۳ طریقے درج کریں۔',
          deliverableEn: 'Enter 3 expense reduction commitments.',
          estimatedMinutes: 8
        }
      }
    ],
    quiz: [
      {
        id: 'fl-b-course-q1',
        questionUrdu: 'مالی شعور اور ذاتی بجٹ کا اصل نچوڑ کیا ہے؟',
        questionEn: 'What is the ultimate essence of financial literacy and personal budgeting?',
        optionsUrdu: [
          'آمدنی کے اندر رہ کر سادگی سے جینا، اخراجات پر قابو رکھنا اور ہنگامی حالات کے لیے بچت کرنا',
          'ہر وقت پیسے کی ہوس میں رہنا',
          'تمام ضروریات پر خرچ کرنا بند کر دینا',
          'صرف قرضے پر زندگی گزارنا'
        ],
        optionsEn: [
          'Living simply within one’s means, managing cash flow, and maintaining reserves for emergencies',
          'Greedily hoarding money without enjoying life',
          'Cutting off all basic survival needs',
          'Relying perpetually on debt'
        ],
        correctIndex: 0,
        explanationUrdu: 'قناعت، نظم و ضبط اور پیشگی بچت ہی حقیقی مالی آزادی اور ذہنی سکون کی ضمانت ہے۔',
        explanationEn: 'Disciplined budgeting, living within means, and emergency preparedness ensure lasting stability.'
      }
    ],
    practicalTask: {
      id: 'fl-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: 1 ماہ کا مکمل گھریلو بجٹ اور سیونگ پلان',
      titleEn: 'Capstone: 1-Month Household Budget & Savings Blueprint',
      instructionsUrdu: 'اپنے یا گھر کے لیے 1 ماہ کا متوازن بجٹ تیار کریں جس میں آمدنی، ضروریات، خواہشات کی حد اور ایمرجنسی بچت واضح درج ہو۔',
      instructionsEn: 'Draft a balanced 1-month household budget detailing income, essential needs, discretionary limits, and savings.',
      deliverableUrdu: 'اپنا مکمل ۱ ماہ کا بجٹ پلان درج کریں۔',
      deliverableEn: 'Enter your 1-month household budget blueprint.',
      estimatedMinutes: 15
    },
    projectDescriptionUrdu: 'اپنے یا اپنے گھر کے لیے 1 ماہ کا سادہ بجٹ پلان اور ہنگامی فنڈ کا منصوبہ تیار کریں۔',
    projectDescriptionEn: 'Draft a 1-month personal/household budget template and emergency savings target plan.'
  },

  // ==================================================
  // COURSE 1 — TECHNICAL & REPAIR SKILLS (BEGINNER)
  // ==================================================
  {
    id: 'technical-repair-basics',
    titleUrdu: 'بنیادی Technical اور Repair Skills',
    titleEn: 'Basic Technical & Repair Skills',
    descriptionUrdu: 'گھریلو ٹولز کی درست پہچان، آلات و فٹنگز کی بنیادی دیکھ بھال، برقی و پلمبنگ سیفٹی اور یہ جاننا کہ کب خود احتیاط سے دیکھنا ہے اور کب سند یافتہ ماہر کو بلانا ہے۔',
    descriptionEn: 'A safe, foundational guide to understanding common hand tools, basic home maintenance awareness, utility safety (water/power), and recognizing when to call a certified professional.',
    category: 'Technical Trades',
    categoryUrdu: 'تکنیکی ہنر اور مرمت',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.5,
    ageGroups: ['16-25', '26-45', '46-60', '61-70'],
    icon: 'Wrench',
    coverGradient: 'from-amber-700 via-orange-800 to-stone-900',
    realLifePurpose: {
      personalBenefitUrdu: 'گھر کے بنیادی اوزاروں کا محفوظ استعمال سیکھ کر خود اعتمادی ملے گی، حادثات سے بچاؤ ہوگا اور بلاوجہ کے اخراجات میں کمی آئے گی۔',
      personalBenefitEn: 'Gain confidence in safely handling basic hand tools, preventing accidents, and avoiding unnecessary household expenses.',
      familyHelpUrdu: 'گھر میں نلکے کے ٹپکنے یا ڈھیلے پیچ وغیرہ کی بروقت نشاندہی اور دیکھ بھال کر کے گھریلو سامان اور بجٹ کی حفاظت کر سکیں گے۔',
      familyHelpEn: 'Timely identify leaks or loose fixtures to preserve household appliances, infrastructure, and family budget.',
      communityHelpUrdu: 'گاؤں یا محلے کے بزرگوں اور پڑوسیوں کی چھوٹی موٹی رہنمائی اور آلات کے محفوظ استعمال میں بلا معاوضہ ہاتھ بٹا سکیں گے۔',
      communityHelpEn: 'Assist elderly neighbors with simple tool handling, safety checks, and identifying when professional repairs are needed.',
      societalBenefitUrdu: 'معاشرے میں سیفٹی کلچر، وسائل کی قدر، اور تکنیکی ہنر مندی کا شعور اجاگر ہوگا جس سے حادثات میں کمی آئے گی۔',
      societalBenefitEn: 'Promotes safety awareness, proper tool stewardship, and reduces utility hazards and accidents across the community.'
    },
    lessons: [
      {
        id: 'tr-b-l1',
        titleUrdu: '1. Technical Skills کیا ہیں اور ان کی اہمیت',
        titleEn: '1. What are Technical Skills & Their Importance',
        durationMinutes: 12,
        contentUrdu: `ٹیکنیکل اسکلز (تکنیکی ہنر) سے مراد وہ عملی صلاحیت ہے جس سے انسان مادی اشیاء، مشینوں، اوزاروں اور گھریلو ڈھانچے کی ساخت اور کام کرنے کے طریقے کو سمجھتا ہے۔

🔧 **تکنیکی سمجھ بوجھ کی روزمرہ اہمیت:**
1. **خود انحصاری:** چھوٹی چھوٹی باتوں (جیسے سائیکل کی زنجیر چڑھانا یا کرسی کا ڈھیلا پیچ کسنا) کے لیے گھنٹوں انتظار کرنے کے بجائے خود سمجھنا۔
2. **وسائل اور وقت کی بچت:** چیزوں کی باقاعدہ صفائی اور دیکھ بھال سے وہ طویل عرصے تک چلتی ہیں اور خراب نہیں ہوتیں۔
3. **حفاظتی شعور:** بنیادی فہم ہونے سے انسان خطرات (جیسے ننگی تار یا گیس کی بو) کو فوراً بھانپ لیتا ہے۔

یاد رکھیں: تکنیکی ہنر کا پہلا اصول "حفاظت اور سمجھداری" ہے، بغیر سوچے سمجھے کسی چیز کو کھولنا نہیں۔`,
        contentEn: `Technical skills represent the practical capability to understand how tools, everyday mechanical objects, and household fixtures function.

🔧 **Everyday Importance:**
1. **Self-Reliance:** Handling simple tasks (tightening a loose bolt, oiling hinges) without delay.
2. **Cost & Time Savings:** Regular maintenance extends the lifespan of everyday appliances.
3. **Safety Awareness:** Recognizing warning signs like fraying wires or gas smells immediately.`,
        keyTakeawaysUrdu: [
          'تکنیکی ہنر انسان کو عملی خود انحصاری اور خود اعتمادی عطا کرتا ہے۔',
          'چیزوں کی بروقت دیکھ بھال سے ان کی زندگی بڑھتی ہے اور پیسے بچتے ہیں۔',
          'سب سے پہلی ترجیح ہمیشہ ذاتی اور خاندانی حفاظت ہے۔'
        ],
        keyTakeawaysEn: [
          'Technical awareness fosters practical independence and confidence.',
          'Preventive maintenance lengthens appliance life and saves money.',
          'Safety is always the primary rule in technical maintenance.'
        ],
        quiz: [
          {
            id: 'tr-b-l1-q1',
            questionUrdu: 'بنیادی تکنیکی فہم (Technical Skills) کا اصل مقصد کیا ہے؟',
            questionEn: 'What is the primary purpose of basic technical skills?',
            optionsUrdu: [
              'روزمرہ آلات اور اوزاروں کی محفوظ دیکھ بھال اور خود انحصاری',
              'بغیر تربیت کے خطرناک برقی لائنوں میں ہاتھ ڈالنا',
              'گھر کے تمام آلات کو توڑ کر کھولنا',
              'اوزاروں کو کباڑ میں بیچنا'
            ],
            optionsEn: [
              'Safe maintenance of everyday tools and practical self-reliance',
              'Touching high voltage lines without training',
              'Smashing all home appliances open',
              'Selling tools to scrap'
            ],
            correctIndex: 0,
            explanationUrdu: 'بنیادی تکنیکی ہنر روزمرہ اشیاء کی محفوظ دیکھ بھال اور خود انحصاری سکھاتا ہے۔',
            explanationEn: 'Basic technical skills provide safe daily upkeep knowledge and practical self-reliance.'
          },
          {
            id: 'tr-b-l1-q2',
            questionUrdu: 'گھریلو اشیاء کی باقاعدہ دیکھ بھال اور صفائی کا کیا فائدہ ہوتا ہے؟',
            questionEn: 'What is the benefit of regular cleaning and preventive maintenance of appliances?',
            optionsUrdu: [
              'اشیاء دیرپا چلتی ہیں، خرابی کم ہوتی ہے اور مرمت کے اخراجات بچتے ہیں',
              'چیزیں فوراً خراب ہو جاتی ہیں',
              'بجلی کا بل بڑھ جاتا ہے',
              'کوئی فائدہ نہیں ہوتا'
            ],
            optionsEn: [
              'Items last longer, breakdowns decrease, and repair costs are saved',
              'Items break down immediately',
              'Electricity bill spikes',
              'Zero benefit'
            ],
            correctIndex: 0,
            explanationUrdu: 'دیکھ بھال اور بروقت احتیاط سے چیزوں کی کارکردگی اور عمر دونوں بڑھتی ہیں۔',
            explanationEn: 'Routine care keeps equipment operating safely and prevents costly damages.'
          },
          {
            id: 'tr-b-l1-q3',
            questionUrdu: 'تکنیکی کام کا سب سے پہلا اور اہم ترین سنہری اصول کیا ہے؟',
            questionEn: 'What is the most important golden rule of technical work?',
            optionsUrdu: [
              'اپنی اور دوسروں کی جان و حفاظت کو اولین ترجیح دینا',
              'جلد بازی میں خطرناک کام شروع کرنا',
              'حفاظتی دستانے یا احتیاط کو نظرانداز کرنا',
              'اندھیرے میں کام کرنا'
            ],
            optionsEn: [
              'Prioritizing personal and family safety above all else',
              'Rushing into dangerous tasks recklessly',
              'Ignoring protective gloves and precautions',
              'Working in complete darkness'
            ],
            correctIndex: 0,
            explanationUrdu: 'حفاظت سب سے مقدم ہے۔ جان سے بڑھ کر کوئی کام یا مرمت نہیں ہوتی۔',
            explanationEn: 'Safety is paramount. Life and physical well-being always come first.'
          }
        ],
        practicalTask: {
          id: 'tr-b-l1-task',
          titleUrdu: 'محفوظ مشاہدہ: گھر کے 3 ایسے آلات یا فٹنگز کی فہرست بنائیں جن کی دیکھ بھال ضروری ہے',
          titleEn: 'Safe Observation: List 3 Household Fixtures Requiring Care',
          instructionsUrdu: 'اپنے گھر میں صرف آنکھوں سے دیکھ کر نوٹ کریں (ہاتھ نہ لگائیں): کیا کوئی نلکا ٹپک رہا ہے، دروازے کا قبضہ آواز کر رہا ہے، یا فلٹر گندا ہے؟',
          instructionsEn: 'Safely observe (without touching hazards): Note 3 items like squeaky hinges, dripping taps, or dust filters needing attention.',
          deliverableUrdu: '۳ مشاہدہ شدہ اشیاء اور ان کی مطلوبہ دیکھ بھال درج کریں۔',
          deliverableEn: 'Enter 3 observed items and their general care needs.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'tr-b-l2',
        titleUrdu: '2. Tools کی پہچان اور محفوظ استعمال',
        titleEn: '2. Tool Identification & Safe Handling',
        durationMinutes: 14,
        contentUrdu: `ہر کام کے لیے ایک مخصوص اوزار (Tool) ہوتا ہے۔ غلط اوزار کا استعمال نہ صرف چیز کو خراب کرتا ہے بلکہ چوٹ کا باعث بھی بن سکتا ہے۔

🛠️ **بنیادی گھریلو ٹولز اور ان کا محفوظ استعمال:**
1. **اسکرو ڈرائیور (پیکچ کس - Screwdriver):** چار منہ والا (Phillips) یا سیدھا (Flathead)۔ پیچ کے سائز کے مطابق استعمال کریں تاکہ پیچ کا سر سلپ نہ ہو۔
2. **پلاس (Pliers):** تار یا نٹ کو مضبوطی سے پکڑنے کے لیے۔ کبھی بھی برقی کرنٹ والی تار پر ننگے ہاتھوں یا بغیر انسولیشن والے پلاس سے کام نہ کریں۔
3. **ہتھوڑی (Hammer):** کیل ٹھونکتے وقت ہتھوڑی کے دستے کو پیچھے سے پکڑیں، دھیان کیل پر رکھیں اور اردگرد بچوں کا خیال رکھیں۔
4. **رنچ / پانا (Wrench):** نٹ اور بولٹ کھولنے کے لیے صحیح سائز کا پانا استعمال کریں۔

🧰 **ٹولز کی حفاظت:** اوزاروں کو زنگ سے بچانے کے لیے خشک جگہ پر اور بچوں کی پہنچ سے دور ایک تھیلے یا باکس میں رکھیں۔`,
        contentEn: `Every task requires the appropriate tool. Using the wrong tool damages the hardware and poses injury risks.

🛠️ **Common Hand Tools & Safe Use:**
1. **Screwdrivers:** Match flathead or Phillips precisely to the screw head.
2. **Pliers:** For gripping wire/nuts. Always verify insulated handles.
3. **Hammer:** Grip handle near the base, keep eyes on target, maintain safe distance from others.
4. **Wrench / Spanner:** Select the exact size matching bolts to avoid slipping.
5. **Storage:** Keep tools dry, lightly oiled against rust, and safely out of children's reach.`,
        keyTakeawaysUrdu: [
          'ہمیشہ کام اور پیچ کے سائز کے مطابق درست اوزار کا انتخاب کریں۔',
          'اوزار کے دستے اور گرپ کا درست اور محفوظ ہونا لازمی ہے۔',
          'کام کے بعد تمام ٹولز کو بچوں کی پہنچ سے دور محفوظ باکس میں رکھیں۔'
        ],
        keyTakeawaysEn: [
          'Always choose the correct tool size for the specific fastener.',
          'Ensure tool grips and insulation are intact before use.',
          'Store hand tools in a secure, dry toolbox out of reach of children.'
        ],
        quiz: [
          {
            id: 'tr-b-l2-q1',
            questionUrdu: 'پیچ (Screw) کو کستے وقت کس بات کا خیال رکھنا ضروری ہے؟',
            questionEn: 'What is essential when tightening a screw with a screwdriver?',
            optionsUrdu: [
              'پیچ کے سر کے عین مطابق سائز کا اسکرو ڈرائیور استعمال کرنا تاکہ سلپ نہ ہو',
              'چھوٹے پیچ پر ہتھوڑی سے زور لگانا',
              'چھری یا چمچ سے پیچ کسنا',
              'آنکھیں بند کر کے گھمانا'
            ],
            optionsEn: [
              'Using a screwdriver that matches the screw head size exactly',
              'Smashing small screws with a sledgehammer',
              'Using kitchen knives or spoons as screwdrivers',
              'Turning with closed eyes'
            ],
            correctIndex: 0,
            explanationUrdu: 'صحیح سائز کا اسکرو ڈرائیور پیچ کو خراب ہونے اور ہاتھ پر پھسلنے سے بچاتا ہے۔',
            explanationEn: 'Matching the screwdriver size prevents stripped screws and slipping injuries.'
          },
          {
            id: 'tr-b-l2-q2',
            questionUrdu: 'اوزاروں (Tools) کو زنگ لگنے اور خراب ہونے سے کیسے بچایا جائے؟',
            questionEn: 'How should hand tools be protected from rust and deterioration?',
            optionsUrdu: [
              'انہیں صاف و خشک کر کے ایک مخصوص ٹول باکس میں رکھنا',
              'کھلے آسمان تلے بارش میں چھوڑ دینا',
              'پانی کی بالٹی میں ڈبو کر رکھنا',
              'کیچڑ میں دفن کر دینا'
            ],
            optionsEn: [
              'Cleaning, drying, and storing them in a dedicated dry toolbox',
              'Leaving them outside in the rain',
              'Soaking in water buckets',
              'Burying in mud'
            ],
            correctIndex: 0,
            explanationUrdu: 'خشک اور محفوظ جگہ پر رکھنے سے اوزار برسوں تک نئے اور کارآمد رہتے ہیں۔',
            explanationEn: 'Clean, dry storage in a toolbox prevents rust and extends tool longevity.'
          },
          {
            id: 'tr-b-l2-q3',
            questionUrdu: 'گھر میں ہتھوڑی یا پلاس استعمال کرتے وقت سب سے بڑی احتیاط کیا ہے؟',
            questionEn: 'What is the top safety precaution when using hand tools at home?',
            optionsUrdu: [
              'چھوٹے بچوں کو کام کی جگہ سے دور رکھنا اور محفوظ فاصلہ برقرار رکھنا',
              'بچوں کے ہاتھ میں اوزار تھما دینا',
              'ٹول کو ہوا میں اچھالنا',
              'بغیر دیکھے چلانا'
            ],
            optionsEn: [
              'Keeping young children at a safe distance from the work area',
              'Giving heavy tools to unsupervised toddlers',
              'Tossing tools in the air',
              'Swinging blindly'
            ],
            correctIndex: 0,
            explanationUrdu: 'اوزار چلاتے وقت بچوں اور دیگر افراد کو دور رکھنا چوٹ لگنے سے بچاتا ہے۔',
            explanationEn: 'Clearing bystanders and children prevents accidental impact injuries.'
          }
        ],
        practicalTask: {
          id: 'tr-b-l2-task',
          titleUrdu: 'محفوظ مشق: گھر میں موجود بنیادی اوزاروں کا جائزہ لیں',
          titleEn: 'Safe Task: Audit Your Household Tool Inventory',
          instructionsUrdu: 'گھر میں موجود اوزار (جیسے پلاس، پیچ کس، ٹیپ) دیکھیں اور نوٹ کریں کہ کیا وہ صاف ستھرے ایک جگہ محفوظ رکھے ہوئے ہیں؟',
          instructionsEn: 'Safely check your home tools (pliers, screwdrivers, tape) and confirm if they are neatly organized in a dry container.',
          deliverableUrdu: 'گھر میں موجود ۳ بنیادی اوزار اور ان کی محفوظ حالت کا اندراج کریں۔',
          deliverableEn: 'List 3 home tools and their safe storage state.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'tr-b-l3',
        titleUrdu: '3. گھر کی چھوٹی موٹی مرمت کو سمجھنا',
        titleEn: '3. Understanding Minor Home Upkeep',
        durationMinutes: 12,
        contentUrdu: `گھر میں کئی چھوٹی موٹی چیزیں ہوتی ہیں جنہیں معمولی دیکھ بھال سے ٹھیک رکھا جا سکتا ہے۔

🏡 **آسان اور محفوظ دیکھ بھال کی مثالیں:**
1. **دروازے یا کھڑکی کے قبضوں کی آواز:** اگر قبضہ چڑ چڑ کرے تو اس پر مشین کا تیل یا سرسوں کا ایک قطرہ ڈالنے سے آواز ختم ہو جاتی ہے۔
2. **ڈھیلے ہینڈل یا پیچ:** الماری یا دراز کا ہینڈل ہل رہا ہو تو اسکرو ڈرائیور سے ہلکے ہاتھ سے ٹائٹ کر دیں۔
3. **پنکھے یا جالی کی دھول:** صفائی سے پہلے پنکھے کا سوئچ مکمل بند کریں اور سوتی کپڑے سے جالی صاف کریں۔
4. **نلکے کا واشر:** نلکے سے پانی رس رہا ہو تو عام طور پر اندر کا ربڑ واشر گھس چکا ہوتا ہے۔

🚨 **اہم بات:** اگر کوئی کام سخت زور طلب ہو یا اس میں ٹوٹنے کا خطرہ ہو تو زبردستی نہ کریں۔`,
        contentEn: `Many minor household issues can be safely addressed with gentle, routine upkeep.

🏡 **Safe Routine Upkeep Examples:**
1. **Squeaky Door Hinges:** A drop of machine or mineral oil on the pin silences friction.
2. **Loose Handles:** Gently tighten cabinet knob screws with the matching screwdriver.
3. **Mesh / Vent Dusting:** Ensure appliance switches are OFF before wiping dust off grilles.
4. **Leaky Tap Washers:** Continuous dripping is typically due to a worn internal rubber washer.

🚨 **Safety Note:** Never force rusted or fragile fittings with excessive pressure.`,
        keyTakeawaysUrdu: [
          'قبضوں پر معمولی تیل ڈالنے سے رگڑ اور آواز ختم ہو جاتی ہے۔',
          'الماری یا دراز کے ہینڈل ہلکے ہاتھ سے کسنے سے وہ ٹوٹنے سے بچ جاتے ہیں۔',
          'کسی بھی چیز پر حد سے زیادہ طاقت یا زبردستی نہ آزمائیں۔'
        ],
        keyTakeawaysEn: [
          'A single drop of oil lubricates squeaking hinges and prevents wear.',
          'Gently tightening loose knobs prevents stripped threads and breakages.',
          'Never apply excessive brute force to delicate household fittings.'
        ],
        quiz: [
          {
            id: 'tr-b-l3-q1',
            questionUrdu: 'اگر کمرے کا دروازہ کھلتے یا بند ہوتے وقت چڑ چڑ کی آواز کرے تو سب سے آسان حل کیا ہے؟',
            questionEn: 'If a room door squeaks when opening or closing, what is the simple solution?',
            optionsUrdu: [
              'دروازے کے قبضے پر تیل کے چند قطرے ڈالنا',
              'دروازے کو توڑ دینا',
              'دروازہ ہمیشہ کے لیے بند کر دینا',
              'دروازے پر پانی بہانا'
            ],
            optionsEn: [
              'Applying a few drops of lubricating oil to the door hinges',
              'Smashing the door down',
              'Sealing the door permanently',
              'Pouring buckets of water on it'
            ],
            correctIndex: 0,
            explanationUrdu: 'تیل لگانے سے قبضے کی رگڑ ختم ہوتی ہے اور دروازہ خاموشی اور روانی سے کام کرتا ہے۔',
            explanationEn: 'Lubrication eliminates metal friction, ensuring smooth and quiet movement.'
          },
          {
            id: 'tr-b-l3-q2',
            questionUrdu: 'الماری کے ہلتے ہوئے ہینڈل کو ٹھیک کرتے وقت کیا احتیاط کرنی چاہیے؟',
            questionEn: 'What care should be taken when tightening a loose cupboard handle?',
            optionsUrdu: [
              'مناسب پیچ کس سے ہلکے ہاتھ سے پیچ کسنا اور حد سے زیادہ زبردستی نہ کرنا',
              'ہتھوڑی مار کر لکڑی توڑ دینا',
              'پیچ کو ڈھیلا چھوڑ دینا',
              'گوند ڈال کر چپکا دینا'
            ],
            optionsEn: [
              'Tightening gently with the proper screwdriver without over-torquing',
              'Smashing the wood with a hammer',
              'Leaving it hanging loose',
              'Pouring sticky glue all over it'
            ],
            correctIndex: 0,
            explanationUrdu: 'ہلکے ہاتھ سے مناسب ٹائٹ کرنے سے لکڑی اور پیچ کی چوڑی خراب نہیں ہوتی۔',
            explanationEn: 'Gentle tightening preserves the screw thread and wood integrity.'
          },
          {
            id: 'tr-b-l3-q3',
            questionUrdu: 'پنکھے یا کھڑکی کی جالی صاف کرنے سے پہلے لازمی حفاظتی قدم کیا ہے؟',
            questionEn: 'What is the mandatory safety step before wiping a fan or window vent?',
            optionsUrdu: [
              'سوئچ اور بجلی کا کنکشن مکمل بند (OFF) کی تصدیق کرنا',
              'چلتے پنکھے میں ہاتھ ڈالنا',
              'گیلے کپڑے سے سوئچ کو چھونا',
              'کوئی احتیاط نہ کرنا'
            ],
            optionsEn: [
              'Confirming the main power switch is completely turned OFF',
              'Reaching hands into a spinning fan',
              'Touching live electric switches with wet cloth',
              'Taking no precautions'
            ],
            correctIndex: 0,
            explanationUrdu: 'صفائی سے پہلے سوئچ بند کرنا برقی جھٹکے اور چوٹ سے تحفظ فراہم کرتا ہے۔',
            explanationEn: 'Ensuring power is switched off completely prevents electric shocks and blade injuries.'
          }
        ],
        practicalTask: {
          id: 'tr-b-l3-task',
          titleUrdu: 'محفوظ مشق: کسی ایک دروازے کے قبضے پر محفوظ طریقے سے تیل لگائیں',
          titleEn: 'Safe Task: Lubricate One Squeaky Door Hinge Safely',
          instructionsUrdu: 'گھر کے کسی ایسے دروازے کے قبضے پر ڈراپر یا کاٹن بڈ کی مدد سے مشین یا سرسوں کے تیل کا 1 قطرہ لگائیں اور فالتو تیل کپڑے سے صاف کریں۔',
          instructionsEn: 'Use a dropper or cotton bud to place 1 drop of oil onto a door hinge pin, wiping away excess with a dry cloth.',
          deliverableUrdu: 'مشق مکمل ہونے اور دروازے کی روانی کا اندراج کریں۔',
          deliverableEn: 'Note task completion and smooth door movement.',
          estimatedMinutes: 6
        }
      },
      {
        id: 'tr-b-l4',
        titleUrdu: '4. بجلی، پانی اور آلات کے بنیادی Safety اصول',
        titleEn: '4. Foundational Safety with Electricity, Water & Utilities',
        durationMinutes: 14,
        contentUrdu: `بجلی، گیس اور پانی انسانی سہولت کے لیے ہیں، لیکن لاپرواہی کی صورت میں یہ خطرناک ثابت ہو سکتے ہیں۔ بنیادی سیفٹی کا علم ہر فرد کے لیے زندگی بچانے والا ہے۔

⚡ **برقی و گھریلو سیفٹی کے 4 لازمی اصول:**
1. **گیلے ہاتھ اور پانی:** گیلے ہاتھوں یا ننگے پاؤں گیلی زمین پر کھڑے ہو کر کبھی کسی سوئچ، پلگ یا برقی موٹر کو ہاتھ نہ لگائیں۔
2. **ننگی تاروں سے دوری:** اگر کوئی تار چھلی ہوئی یا ٹوٹی نظر آئے تو اسے فوراً دور سے دیکھ کر گھر کے بڑوں کو بتائیں اور مین سوئچ بند کروائیں۔
3. **گیس کی بو:** اگر گیس کی بو آئے تو **کبھی بھی ماچس نہ جلائیں اور نہ ہی کوئی برقی سوئچ آن یا آف کریں** (کیونکہ چنگاری سے آگ لگ سکتی ہے)۔ فوری طور پر تمام کھڑکیاں دروازے کھولیں اور سلنڈر/والو بند کریں۔
4. **پانی کا مین والو:** ہر فرد کو معلوم ہونا چاہیے کہ گھر کا پانی کا مین والو (Main Valve) کہاں ہے تاکہ پائپ پھٹنے کی صورت میں فوری بند کیا جا سکے۔`,
        contentEn: `Electricity, gas, and pressurized water provide immense convenience but demand strict respect for safety.

⚡ **4 Crucial Utility Safety Rules:**
1. **Wet Hands & Electricity:** Never touch switches, plugs, or motor casings with wet hands or barefoot on damp ground.
2. **Damaged Wires:** Never touch exposed or frayed wires; turn off the main breaker and alert an elder/professional.
3. **Gas Leak Smell:** If you smell gas, **NEVER strike matches or flip electrical switches ON/OFF** (sparks trigger explosions). Open all windows/doors immediately and shut the gas valve.
4. **Main Water Shutoff:** Everyone in the house should know where the main water stopcock is located in case of a burst pipe.`,
        keyTakeawaysUrdu: [
          'گیلے ہاتھوں یا گیلی زمین پر کبھی برقی آلات کو ہاتھ نہ لگائیں۔',
          'گیس کی بو آنے پر کوئی برقی سوئچ نہ چھوئیں، کھڑکیاں کھولیں اور گیس بند کریں۔',
          'گھر کے مین بریکر اور پانی کے مین والو کی جگہ سب کو معلوم ہونی چاہیے۔'
        ],
        keyTakeawaysEn: [
          'Never touch electrical switches or cords with wet hands or barefoot on wet floors.',
          'In case of gas smell: Do NOT flip switches, open all windows immediately and close the valve.',
          'Everyone in the family should know where the main breaker and water valve are.'
        ],
        quiz: [
          {
            id: 'tr-b-l4-q1',
            questionUrdu: 'اگر گھر کے باورچی خانے یا کمرے میں گیس کی تیز بو آ رہی ہو تو فوری طور پر کیا کرنا چاہیے؟',
            questionEn: 'What should you do immediately if you smell strong gas in the kitchen or room?',
            optionsUrdu: [
              'تمام کھڑکیاں دروازے کھولنا، گیس والو بند کرنا اور کوئی برقی سوئچ یا ماچس نہ جلانا',
              'ماچس جلا کر چیک کرنا کہ گیس کہاں ہے',
              'لائٹ کا سوئچ آن آف کرنا',
              'کمرے کے سارے دروازے مضبوطی سے بند کرنا'
            ],
            optionsEn: [
              'Open all windows/doors, shut gas valve, and NEVER strike a match or flip electrical switches',
              'Light a match to inspect where the leak is',
              'Flipping light switches on and off',
              'Sealing all doors tightly'
            ],
            correctIndex: 0,
            explanationUrdu: 'سوئچ کی چنگاری یا ماچس گیس کے دھماکے کا سبب بن سکتی ہے۔ تازہ ہوا آنے دینا اور والو بند کرنا واحد محفوظ طریقہ ہے۔',
            explanationEn: 'Electric sparks or flames cause instant explosions. Ventilating fresh air and closing the valve is the only safe procedure.'
          },
          {
            id: 'tr-b-l4-q2',
            questionUrdu: 'گیلے ہاتھوں سے استری، واٹر موٹر یا سوئچ بورڈ کو چھونا کیوں خطرناک ہے؟',
            questionEn: 'Why is touching irons, water pumps, or switches with wet hands dangerous?',
            optionsUrdu: [
              'پانی بجلی کا بہترین موصل (کنڈکٹر) ہے جس سے جان لیوا برقی جھٹکا (Current) لگ سکتا ہے',
              'اس سے ہاتھ گندے ہو جاتے ہیں',
              'بجلی چلی جاتی ہے',
              'کوئی خطرہ نہیں ہوتا'
            ],
            optionsEn: [
              'Water conducts electricity easily, creating high risk of fatal electric shocks',
              'It makes hands dirty',
              'It causes a power outage',
              'There is zero danger'
            ],
            correctIndex: 0,
            explanationUrdu: 'پانی کی موجودگی میں بجلی فوری طور پر جسم میں سرایت کر کے شدید نقصان پہنچا سکتی ہے۔',
            explanationEn: 'Moisture significantly lowers electrical resistance, allowing lethal current to flow through the human body.'
          },
          {
            id: 'tr-b-l4-q3',
            questionUrdu: 'اگر گھر میں پانی کا پائپ اچانک پھٹ جائے اور پانی بہہ رہا ہو تو فوری کیا کرنا چاہیے؟',
            questionEn: 'If a water pipe bursts at home, what is the immediate first action?',
            optionsUrdu: [
              'گھر کے مین واٹر والو (Main Valve) کو فوراً بند کرنا',
              'پائپ پر بیٹھ جانا',
              'پانی کو دیکھنے کے لیے سب کو جمع کرنا',
              'گھر چھوڑ کر بھاگ جانا'
            ],
            optionsEn: [
              'Immediately shut off the house main water valve (stopcock)',
              'Sit on top of the spraying pipe',
              'Gather a crowd to watch the water spray',
              'Run away permanently'
            ],
            correctIndex: 0,
            explanationUrdu: 'مین والو بند کرنے سے پانی کا پریشر بند ہو جاتا ہے اور گھر میں نقصان رک جاتا ہے۔',
            explanationEn: 'Closing the main valve halts incoming water pressure and prevents household flooding.'
          }
        ],
        practicalTask: {
          id: 'tr-b-l4-task',
          titleUrdu: 'محفوظ خاندانی مشق: مین الیکٹرک بریکر اور مین واٹر والو کی جگہ نوٹ کریں',
          titleEn: 'Safe Family Task: Locate Main Electric Breaker & Water Stopcock',
          instructionsUrdu: 'گھر کے بڑوں سے پوچھ کر معلوم کریں کہ ایمرجنسی میں بجلی بند کرنے والا مین بریکر اور پانی بند کرنے والا مین والو کہاں واقع ہے۔',
          instructionsEn: 'Locate with your family where the main emergency electric breaker and main water shut-off valve are situated.',
          deliverableUrdu: 'مین بریکر اور مین واٹر والو کی محفوظ جگہ کی تصدیق درج کریں۔',
          deliverableEn: 'Confirm locations of the main electric breaker and main water valve.',
          estimatedMinutes: 6
        }
      },
      {
        id: 'tr-b-l5',
        titleUrdu: '5. کب خود کام کریں اور کب ماہر Technician کو بلائیں؟',
        titleEn: '5. When to Do It Yourself vs. Call a Professional',
        durationMinutes: 12,
        contentUrdu: `ایک سمجھدار انسان وہ ہے جو اپنی حد کو جانتا ہو اور غیر ضروری خطرات مول نہ لے۔

👨‍🔧 **خود کام کرنے بمقابلہ ماہر کو بلانے کا واضح فرق:**

✅ **آپ خود کیا کر سکتے ہیں (محفوظ کام):**
- ڈھیلے پیچ کسنا، قبضے میں تیل ڈالنا۔
- سوئچ بند کر کے فلٹر یا جالی صاف کرنا۔
- پانی کا نلکا بند کرنا یا واشر تبدیل کرنا (اگر مین والو بند ہو)۔

⛔ **کب لازمی سند یافتہ ماہر الیکٹریشن/ٹیکنیشن کو بلائیں؟**
- **ہائی وولٹیج بجلی:** مین بریکر پینل، 220V وائرنگ، خراب انورٹر یا یو پی ایس کی اندرونی مرمت۔
- **گیس کی پائپ لائن:** گیس کا پائپ جوڑنا، گیزر یا ہیٹر کی اندرونی مرمت۔
- **اونچائی پر کام:** چھت پر خطرناک اونچائی یا کھمبے پر چڑھنا۔
- **بھاری موٹریں و کمپریسر:** فریج، اے سی یا واشنگ مشین کی موٹر۔

اپنی جان، بچوں اور خاندان کی حفاظت پر کبھی سمجھوتہ نہ کریں۔`,
        contentEn: `True wisdom lies in knowing one's boundaries and never taking reckless safety risks.

👨‍🔧 **Clear Boundaries:**

✅ **Safe For Beginners (With Precautions):**
- Tightening loose exterior screws, oiling hinges.
- Cleaning exterior dust vents with power OFF.
- Changing simple tap washers after shutting the main supply.

⛔ **ALWAYS Call a Certified Professional For:**
- **High-Voltage Electricals:** Main DB breaker boxes, concealed wall wiring, UPS/inverter repairs.
- **Gas Lines & Heaters:** Gas pipe joints, internal geyser/heater servicing.
- **High Elevations:** Working near roof edges or utility poles.
- **Heavy Machinery:** Refrigerator compressors, AC internals, or large industrial motors.`,
        keyTakeawaysUrdu: [
          'چھوٹی دیکھ بھال خود احتیاط سے کریں، لیکن خطرناک کاموں سے دور رہیں۔',
          'بجلی کی مین وائرنگ اور گیس پائپ کے لیے ہمیشہ سند یافتہ ٹیکنیشن کو بلائیں۔',
          'حفاظتی حدود کو سمجھنا ہی حقیقی مہارت اور دانشمندی ہے۔'
        ],
        keyTakeawaysEn: [
          'Perform gentle routine upkeep with care, but steer clear of hazards.',
          'Always call licensed electricians and plumbers for high-voltage and gas lines.',
          'Knowing safety limits is the mark of mature responsibility.'
        ],
        quiz: [
          {
            id: 'tr-b-l5-q1',
            questionUrdu: 'اگر گھر کے مین بجلی کے پینل یا یو پی ایس (UPS) میں خرابی ہو تو سب سے درست عمل کیا ہے؟',
            questionEn: 'If the main electrical panel or UPS malfunctions, what is the correct action?',
            optionsUrdu: [
              'مین سوئچ آف کر کے فوراً کسی تجربہ کار سند یافتہ الیکٹریشن کو بلانا',
              'بغیر دستانے کے اندر ہاتھ ڈال کر تاریں چھیڑنا',
              'پانی ڈال کر چیک کرنا',
              'چھوٹے بچوں کو کام پر لگانا'
            ],
            optionsEn: [
              'Turn main switch OFF and call a qualified, experienced electrician immediately',
              'Poking bare hands into live terminals',
              'Pouring water on the board',
              'Asking toddlers to fix it'
            ],
            correctIndex: 0,
            explanationUrdu: 'ہائی وولٹیج بجلی اور یو پی ایس کی بیٹری انتہائی خطرناک ہوتی ہے، اس کے لیے ماہر کی ضرورت ہوتی ہے۔',
            explanationEn: 'High voltage electrical lines and UPS inverters can be lethal and require licensed technicians.'
          },
          {
            id: 'tr-b-l5-q2',
            questionUrdu: 'کون سا کام ایک عام فرد گھر میں خود احتیاط سے کر سکتا ہے؟',
            questionEn: 'Which task is safe for a non-professional to perform at home with basic care?',
            optionsUrdu: [
              'دروازے کے ڈھیلے ہینڈل کا پیچ کسنا یا قبضے پر تیل لگانا',
              'گیس کے پائپ کو آگ کے پاس کاٹنا',
              'ہائی ٹینشن تار پر چڑھنا',
              'فریج کے کمپریسر کو کلہاڑی سے کھولنا'
            ],
            optionsEn: [
              'Tightening a loose door handle screw or lubricating a hinge',
              'Cutting gas pipes near an open flame',
              'Climbing high-tension electric poles',
              'Smashing a fridge compressor with an axe'
            ],
            correctIndex: 0,
            explanationUrdu: 'ڈھیلے پیچ کسنا اور تیل لگانا مکمل محفوظ اور سادہ کام ہیں۔',
            explanationEn: 'Tightening exterior screws and lubricating hinges are safe, low-risk maintenance tasks.'
          },
          {
            id: 'tr-b-l5-q3',
            questionUrdu: 'کسی تکنیکی کام میں خطرے سے بچنے کے لیے سب سے سنہری اصول کیا ہے؟',
            questionEn: 'What is the golden rule to prevent accidents during any technical work?',
            optionsUrdu: [
              'اگر کسی کام کی مکمل سمجھ یا سیفٹی نہ ہو تو اسے زبردستی نہ کریں بلکہ ماہر سے مدد لیں',
              'ہر کام میں بلا سوچے سمجھے رسک لینا',
              'حفاظتی ہدایات کا مذاق اڑانا',
              'آنکھیں بند کر کے اوزار چلانا'
            ],
            optionsEn: [
              'If you lack complete safety knowledge or training, pause and consult a professional',
              'Taking reckless risks on every task',
              'Mocking safety guidelines',
              'Operating tools with eyes closed'
            ],
            correctIndex: 0,
            explanationUrdu: 'اپنی حدود کا ادراک اور ماہر کی بروقت مدد لینا ہی عقلمندی اور تحفظ ہے۔',
            explanationEn: 'Recognizing personal limits and consulting professionals ensures family safety.'
          }
        ],
        practicalTask: {
          id: 'tr-b-l5-task',
          titleUrdu: 'محفوظ مشق: ایمرجنسی ٹیکنیشن یا پلمبر/الیکٹریشن کے رابطے نوٹ کریں',
          titleEn: 'Safe Task: Save Emergency Contacts for Local Qualified Technicians',
          instructionsUrdu: 'اپنے علاقے کے ایک قابلِ اعتماد اور سند یافتہ الیکٹریشن اور پلمبر کا نام اور فون نمبر ایک ڈائری یا فون میں محفوظ کریں۔',
          instructionsEn: 'Write down and save the phone number of a trusted local certified electrician and plumber for household emergencies.',
          deliverableUrdu: 'محفوظ ایمرجنسی رابطوں کی تصدیق درج کریں۔',
          deliverableEn: 'Enter confirmation of saved emergency technician contacts.',
          estimatedMinutes: 6
        }
      }
    ],
    quiz: [
      {
        id: 'tr-b-course-q1',
        questionUrdu: 'بنیادی تکنیکی مہارت اور گھریلو دیکھ بھال کا بنیادی فلسفہ کیا ہے؟',
        questionEn: 'What is the core philosophy of foundational technical skills and home upkeep?',
        optionsUrdu: [
          'حفاظت کو اولین ترجیح دیتے ہوئے روزمرہ اشیاء کی دیکھ بھال کرنا اور خطرناک کاموں کے لیے ماہرین سے مدد لینا',
          'بغیر سوچے سمجھے خطرناک آلات کھولنا',
          'حفاظتی اصولوں کو نظر انداز کرنا',
          'گھر کے تمام آلات ضائع کر دینا'
        ],
        optionsEn: [
          'Caring for everyday items with safety first, while consulting certified experts for high-risk work',
          'Recklessly opening dangerous appliances',
          'Ignoring safety precautions',
          'Discarding all household items'
        ],
        correctIndex: 0,
        explanationUrdu: 'حفاظت کا احترام اور سادہ دیکھ بھال کا شعور ہی پائیدار گھرانے کی بنیاد ہے۔',
        explanationEn: 'Prioritizing safety, respectful tool handling, and professional delegation ensure security.'
      }
    ],
    practicalTask: {
      id: 'tr-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: گھریلو سیفٹی اور ٹول مینجمنٹ چیک لسٹ',
      titleEn: 'Capstone: Household Safety & Tool Management Checklist',
      instructionsUrdu: 'اپنے گھر کے لیے ایک جامع چیک لسٹ بنائیں جس میں محفوظ ٹول باکس، مین بریکر کی جگہ، گیس سیفٹی اصول اور ایمرجنسی نمبرز درج ہوں۔',
      instructionsEn: 'Create a household safety checklist covering tool storage, breaker locations, gas safety rules, and emergency technician contacts.',
      deliverableUrdu: 'اپنی گھریلو سیفٹی اور ٹول مینجمنٹ چیک لسٹ درج کریں۔',
      deliverableEn: 'Enter your household safety checklist summary.',
      estimatedMinutes: 15
    },
    projectDescriptionUrdu: 'اپنے گھر اور برادری کے لیے بنیادی تکنیکی سیفٹی، اوزاروں کے محفوظ استعمال اور ہنگامی احتیاط کی گائیڈ تیار کریں۔',
    projectDescriptionEn: 'Develop a foundational household safety, tool stewardship, and emergency protocol guide.'
  },

  // ==================================================
  // COURSE 2 — AGRICULTURE & GARDENING (BEGINNER)
  // ==================================================
  {
    id: 'agriculture-gardening-basics',
    titleUrdu: 'زراعت اور باغبانی کی بنیادی سمجھ',
    titleEn: 'Basics of Agriculture & Gardening',
    descriptionUrdu: 'مٹی، بیج اور پانی کے قدرتی تعلق کی سمجھ، پودے لگانے اور دیکھ بھال کے بنیادی اصول، قدرتی وسائل کا ذمہ دارانہ استعمال اور چھوٹے پیمانے پر گھریلو و دیہی باغبانی۔',
    descriptionEn: 'A practical, nature-friendly introduction to soil, seeds, water conservation, caring for plants organically, and small-scale household and rural kitchen gardening.',
    category: 'Agriculture & Local Skills',
    categoryUrdu: 'زراعت اور باغبانی',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.5,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70'],
    icon: 'Sprout',
    coverGradient: 'from-emerald-700 via-green-800 to-stone-900',
    realLifePurpose: {
      personalBenefitUrdu: 'مٹی اور پودوں کے ساتھ قدرتی تعلق قائم ہوگا، ذہنی سکون اور صبر ملے گا اور اپنے ہاتھ سے تازہ سبزیاں و پھل اگانے کی خوشی حاصل ہوگی۔',
      personalBenefitEn: 'Connect with nature, foster patience and mental peace, and experience the joy of harvesting homegrown organic produce.',
      familyHelpUrdu: 'گھر کے صحن یا چھت پر تازہ پودینہ، دھنیا، مرچیں وغیرہ اگا کر کچن کے اخراجات میں کمی اور خالص قدرتی خوراک فراہم کر سکیں گے۔',
      familyHelpEn: 'Grow fresh kitchen herbs and seasonal vegetables in yards or pots, lowering grocery bills and providing pure nutrition.',
      communityHelpUrdu: 'گاؤں میں پانی اور قدرتی کھاد کے دانشمندانہ استعمال کی ترغیب دے سکیں گے اور شجرکاری سے علاقے کو سرسبز و شاداب بنا سکیں گے۔',
      communityHelpEn: 'Encourage water conservation, organic composting, and tree planting drives to green and enrich the village.',
      societalBenefitUrdu: 'ماحولیاتی آلودگی میں کمی آئے گی، خوراک کی خود کفالت کو فروغ ملے گا اور آنے والی نسلوں کے لیے زرخیز زمین کا تحفظ ہوگا۔',
      societalBenefitEn: 'Combats pollution, champions food security, and protects fertile topsoil for future generations.'
    },
    lessons: [
      {
        id: 'ag-b-l1',
        titleUrdu: '1. زراعت اور باغبانی کی اہمیت',
        titleEn: '1. The Importance of Agriculture & Gardening',
        durationMinutes: 12,
        contentUrdu: `زمین انسان کی ماں کی مانند ہے جو ہمیں اناج، پھل، سبزیاں اور آکسیجن فراہم کرتی ہے۔ زراعت صرف ایک پیشہ نہیں بلکہ زندگی کی بقا کی بنیاد ہے۔

🌾 **باغبانی اور زراعت کی اہمیت کے 3 پہلو:**
1. **خوراک کی فراہمی:** ہر لقمہ جو ہم کھاتے ہیں وہ زمین اور مٹی کی محنت کا نتیجہ ہے۔
2. **صحت اور ماحول:** پودے ہوا سے کاربن ڈائی آکسائیڈ جذب کر کے ہمیں تازہ آکسیجن دیتے ہیں اور موسم کو خوشگوار بناتے ہیں۔
3. **ذہنی سکون اور برکت:** مٹی میں بیج بونا اور اسے روزانہ اگتے دیکھنا انسان کو سکون، شکرگزاری اور صبر سکھاتا ہے۔

چاہے آپ کے پاس بڑا کھیت ہو یا گھر میں مٹی کا ایک چھوٹا گملہ، پودا لگانا ایک صدقہ جاریہ اور خوبصورت عمل ہے۔`,
        contentEn: `The earth sustains life by providing grain, vegetables, fruits, and clean oxygen. Agriculture is the foundational pillar of human civilization.

🌾 **3 Facets of Its Importance:**
1. **Food Security:** Every meal traces back to the soil, sunlight, and careful cultivation.
2. **Health & Climate:** Plants filter air, absorb carbon dioxide, and cool our local climate.
3. **Well-Being & Gratitude:** Nurturing a seed into a flourishing plant builds patience and gratitude.`,
        keyTakeawaysUrdu: [
          'زراعت انسانی بقا، خوراک اور صحت مند ماحول کی بنیاد ہے۔',
          'پودے لگانا ماحول کو ٹھنڈا اور ہوا کو صاف ستھرا بناتا ہے۔',
          'چھوٹے پیمانے پر گملوں میں بھی پودے اگانا انتہائی مفید اور بابرکت ہے۔'
        ],
        keyTakeawaysEn: [
          'Agriculture is the bedrock of nutrition, survival, and a healthy planet.',
          'Plants purify our atmosphere and regulate local temperature.',
          'Even small-scale pot gardening brings immense joy and utility.'
        ],
        quiz: [
          {
            id: 'ag-b-l1-q1',
            questionUrdu: 'زراعت اور پودے لگانے کا سب سے بڑا ماحولیاتی فائدہ کیا ہے؟',
            questionEn: 'What is the primary environmental benefit of planting trees and crops?',
            optionsUrdu: [
              'ہوا کو صاف کرنا، آکسیجن پیدا کرنا اور درجہ حرارت کو معتدل رکھنا',
              'زمین کو بنجر بنانا',
              'ہوا کو آلودہ کرنا',
              'پانی کو ختم کر دینا'
            ],
            optionsEn: [
              'Purifying air, generating oxygen, and moderating local temperature',
              'Turning land barren',
              'Polluting the atmosphere',
              'Drying up all water'
            ],
            correctIndex: 0,
            explanationUrdu: 'پودے آکسیجن بناتے ہیں اور فضائی آلودگی کو کم کر کے ماحول کو پرسکون رکھتے ہیں۔',
            explanationEn: 'Plants produce oxygen and filter out atmospheric pollutants, sustaining life.'
          },
          {
            id: 'ag-b-l1-q2',
            questionUrdu: 'اگر کسی کے پاس بڑا کھیت نہ ہو تو وہ باغبانی کیسے شروع کر سکتا ہے؟',
            questionEn: 'How can someone start gardening without owning large farmland?',
            optionsUrdu: [
              'گھر کے صحن، بالکونی یا مٹی کے گملوں / پرانے برتنوں میں',
              'باغبانی کا خیال ہی چھوڑ دے',
              'دوسروں کے پودے توڑ دے',
              'گھر میں کنکریٹ بھر دے'
            ],
            optionsEn: [
              'In home yards, balconies, or clay pots and recycled containers',
              'Abandoning gardening entirely',
              'Uprooting other people\'s plants',
              'Filling the house with concrete'
            ],
            correctIndex: 0,
            explanationUrdu: 'چھوٹے گملوں یا پلاسٹک کی بوتلوں میں بھی دھنیا، پودینہ اور پھول باآسانی اگائے جا سکتے ہیں۔',
            explanationEn: 'Herbs, flowers, and vegetables thrive easily in pots, recycled crates, and window boxes.'
          },
          {
            id: 'ag-b-l1-q3',
            questionUrdu: 'پودے لگانے اور ان کی نگہداشت سے انسان میں کون سی مثبت صفت پیدا ہوتی ہے؟',
            questionEn: 'Which positive character trait is nurtured through tending plants?',
            optionsUrdu: [
              'صبر، شکرگزاری اور فطرت کا احترام',
              'جلد بازی اور غصہ',
              'غرور اور لالچ',
              'سستی اور کاہلی'
            ],
            optionsEn: [
              'Patience, gratitude, and reverence for nature',
              'Impatience and anger',
              'Arrogance and greed',
              'Laziness'
            ],
            correctIndex: 0,
            explanationUrdu: 'پودے کی بتدریج نشوونما دیکھ کر انسان میں صبر اور محنت کا جذبہ پیدا ہوتا ہے۔',
            explanationEn: 'Watching plants grow day by day instills patience, care, and gratitude.'
          }
        ],
        practicalTask: {
          id: 'ag-b-l1-task',
          titleUrdu: 'عملی مشق: اپنے گھر یا محلے میں پودوں اور درختوں کا مشاہدہ کریں',
          titleEn: 'Practical Task: Observe Trees & Plants Around Your Home',
          instructionsUrdu: 'اپنے گھر یا محلے میں موجود 3 مختلف پودوں یا درختوں کو دیکھیں اور ان کے نام نوٹ کریں۔',
          instructionsEn: 'Observe 3 different plants or trees near your home or neighborhood and note their names.',
          deliverableUrdu: 'اپنے اردگرد موجود ۳ پودوں کے نام درج کریں۔',
          deliverableEn: 'Enter names of 3 observed local plants or trees.',
          estimatedMinutes: 6
        }
      },
      {
        id: 'ag-b-l2',
        titleUrdu: '2. مٹی، بیج اور پانی کی بنیادی سمجھ',
        titleEn: '2. Understanding Soil, Seeds & Water',
        durationMinutes: 14,
        contentUrdu: `ایک صحت مند پودا تین بنیادی چیزوں کے توازن سے بنتا ہے: زرخیز مٹی، معیاری بیج، اور ضرورت کے مطابق پانی۔

🌱 **بنیادی عناصر کی فہم:**
1. **زرخیز مٹی (Soil):** مٹی نہ تو بہت سخت پتھریلی ہو اور نہ ہی صرف چکنی مٹی ہو۔ پودوں کے لیے نرم، بھربھری مٹی بہترین ہوتی ہے جس میں ہوا اور جڑیں آسانی سے پھیل سکیں۔
2. **قدرتی کھاد (Compost / Manure):** گوبر کی پرانی سڑی ہوئی کھاد یا سوکھے پتوں کی کھاد مٹی کو قدرتی غذائیت دیتی ہے۔ کیمیکلز کے بجائے قدرتی طریقے اپنائیں۔
3. **صحت مند بیج (Seeds):** بیج تازہ، صاف اور کیڑے سے پاک ہونے چاہئیں۔
4. **پانی کا توازن:** پودے کو نہ تو سوکھا رکھیں اور نہ ہی جڑوں میں پانی کھڑا ہونے دیں۔ گیلی مٹی میں نمی ہونی چاہیے، کیچڑ نہیں۔`,
        contentEn: `A thriving plant relies on the delicate balance of three elements: fertile soil, viable seeds, and measured water.

🌱 **Understanding the Fundamentals:**
1. **Fertile Soil:** Loamy, well-aerated soil that allows root penetration and drainage.
2. **Natural Compost:** Well-rotted manure and leaf mulch enrich soil microorganisms safely.
3. **Quality Seeds:** Clean, uninfected, mature seeds suitable for the current season.
4. **Water Balance:** Soil needs steady moisture, never drought or waterlogged stagnant mud.`,
        keyTakeawaysUrdu: [
          'پودے کے لیے بھربھری اور ہوا دار مٹی سب سے بہترین ہوتی ہے۔',
          'قدرتی گوبر اور پتوں کی کھاد زمین کی زرخیزی کو قدرتی طور پر بڑھاتی ہے۔',
          'پودے کو ضرورت کے مطابق پانی دیں، جڑوں میں پانی کھڑا نہ ہونے دیں۔'
        ],
        keyTakeawaysEn: [
          'Loamy, well-draining soil provides optimal space for healthy root expansion.',
          'Natural organic compost restores long-term soil health safely.',
          'Water according to moisture needs; avoid waterlogging root zones.'
        ],
        quiz: [
          {
            id: 'ag-b-l2-q1',
            questionUrdu: 'پودے اگانے کے لیے سب سے بہترین مٹی کون سی سمجھی جاتی ہے؟',
            questionEn: 'Which type of soil is considered best for growing plants and vegetables?',
            optionsUrdu: [
              'نرم، بھربھری اور قدرتی کھاد ملی مٹی جس میں پانی کا اچھا نکاس ہو',
              'سخت پتھریلی سیمنٹ جیسی مٹی',
              'پلاسٹک اور کچرے والی مٹی',
              'خشک ریت جس میں کوئی نمی نہ رکے'
            ],
            optionsEn: [
              'Soft, loamy, compost-enriched soil with good water drainage',
              'Hard rock-like compacted ground',
              'Garbage and plastic-filled soil',
              'Pure dry desert sand'
            ],
            correctIndex: 0,
            explanationUrdu: 'بھربھری مٹی میں جڑوں کو پھیلنے اور سانس لینے کی جگہ ملتی ہے۔',
            explanationEn: 'Loamy composted soil allows oxygen exchange and smooth root penetration.'
          },
          {
            id: 'ag-b-l2-q2',
            questionUrdu: 'گملے یا کیاری میں حد سے زیادہ پانی ہر وقت کھڑا رہنے کا کیا نقصان ہوتا ہے؟',
            questionEn: 'What happens if excessive stagnant water stands continuously around plant roots?',
            optionsUrdu: [
              'پودے کی جڑیں گل سڑ جاتی ہیں اور پودا مرجھا جاتا ہے',
              'پودا درخت بن جاتا ہے',
              'پودے سے سونا نکلتا ہے',
              'کوئی اثر نہیں ہوتا'
            ],
            optionsEn: [
              'Roots suffocate, rot from lack of oxygen, and the plant wilts',
              'The plant instantly becomes a giant tree',
              'Gold grows on branches',
              'Zero effect'
            ],
            correctIndex: 0,
            explanationUrdu: 'ضرورت سے زیادہ پانی جڑوں کو آکسیجن نہیں لینے دیتا جس سے جڑیں سڑ جاتی ہیں۔',
            explanationEn: 'Standing water deprives roots of oxygen, leading to root rot.'
          },
          {
            id: 'ag-b-l2-q3',
            questionUrdu: 'گھر میں مٹی کو زرخیز بنانے کا سب سے سستا اور محفوظ قدرتی طریقہ کیا ہے؟',
            questionEn: 'What is the most affordable and safe natural way to enrich garden soil?',
            optionsUrdu: [
              'سوکھے پتوں، کچن کے سبزیوں کے چھلکوں اور پرانے گوبر کی قدرتی کھاد ملانا',
              'تیزاب ڈالنا',
              'پلاسٹک جلانا',
              'صابن کا پانی ڈالنا'
            ],
            optionsEn: [
              'Mixing natural compost made of dried leaves, vegetable scraps, and aged manure',
              'Pouring harsh acids',
              'Burning plastic bags',
              'Pouring detergent water'
            ],
            correctIndex: 0,
            explanationUrdu: 'نامیاتی کھاد (Compost) مٹی کو زہر آلود کیے بغیر طاقتور غذائیت دیتی ہے۔',
            explanationEn: 'Organic compost nourishes the soil naturally without toxic synthetic residues.'
          }
        ],
        practicalTask: {
          id: 'ag-b-l2-task',
          titleUrdu: 'عملی مشق: مٹی کی نمی اور ساخت کو ہاتھ سے چیک کریں',
          titleEn: 'Practical Task: Test Soil Texture & Moisture by Hand',
          instructionsUrdu: 'اپنے گملے یا باغ کی مٹی کو ہاتھ میں لے کر دیکھیں: کیا یہ بھربھری ہے یا سخت؟ کیا اس میں نمی موجود ہے؟',
          instructionsEn: 'Take a small handful of soil: Check whether it feels soft and crumbly with gentle moisture, or hard and compacted.',
          deliverableUrdu: 'مٹی کی حالت (خشک، مناسب نمی، یا سخت) کا اندراج کریں۔',
          deliverableEn: 'Record the soil texture and moisture condition.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'ag-b-l3',
        titleUrdu: '3. پودے لگانے اور دیکھ بھال کے بنیادی اصول',
        titleEn: '3. Planting & Basic Plant Care',
        durationMinutes: 14,
        contentUrdu: `پودا لگانا ایک زندہ مخلوق کی دیکھ بھال کی طرح ہے۔ اسے زندہ رہنے کے لیے محبت، وقت اور توجہ درکار ہوتی ہے۔

🌿 **پودا لگانے اور دیکھ بھال کے 4 سنہری اصول:**
1. **دھوپ کی ضرورت:** زیادہ تر سبزیوں اور پھولوں کو روزانہ 4 سے 6 گھنٹے سورج کی روشنی کی ضرورت ہوتی ہے۔ پودا ایسی جگہ رکھیں جہاں دھوپ آتی ہو۔
2. **پودا لگانے کا وقت:** پودا لگانے یا ٹرانسپلانٹ کرنے کا بہترین وقت صبح سویرے یا شام کے وقت ہوتا ہے تاکہ تیز دھوپ سے پودا مرجھائے نہیں۔
3. **گوڈی کرنا (Hoeing / Aeration):** مہینے میں ایک دو بار پودے کے اردگرد کی مٹی کو کھُرپی سے ہلکا ہلکا نرم کریں تاکہ جڑوں کو ہوا ملے۔
4. **جڑی بوٹیوں کی صفائی:** پودے کے اردگرد فالتو گھاس پھوس کو ہاتھ سے اکھاڑ دیں تاکہ وہ پودے کی خوراک نہ چھینے۔`,
        contentEn: `Tending a plant is like nurturing a living being; it flourishes with attention, sunlight, and proper timing.

🌿 **4 Core Plant Care Rules:**
1. **Sunlight:** Most vegetables and flowering plants require 4 to 6 hours of direct sunlight daily.
2. **Planting Hours:** Transplant seedlings during early morning or late afternoon to avoid heat stress.
3. **Soil Aeration (Godi):** Gently loosen topsoil once or twice a month to promote airflow to the roots.
4. **Weeding:** Hand-pull unwanted weeds that compete with the main plant for water and nutrients.`,
        keyTakeawaysUrdu: [
          'پودوں کے لیے مناسب دھوپ اور تازہ ہوا لازمی ہے۔',
          'پودا لگانے کا بہترین وقت صبح یا شام کی ٹھنڈک ہے۔',
          'مٹی کی باقاعدہ ہلکی گوڈی کرنے سے جڑوں کو آکسیجن ملتی ہے۔'
        ],
        keyTakeawaysEn: [
          'Proper sunlight and airflow are essential for photosynthesis and growth.',
          'Transplant in the cool morning or late afternoon to prevent thermal shock.',
          'Gentle topsoil aeration allows roots to absorb moisture and oxygen.'
        ],
        quiz: [
          {
            id: 'ag-b-l3-q1',
            questionUrdu: 'نئے پودے کو گملے یا زمین میں لگانے کا سب سے بہترین اور محفوظ وقت کون سا ہے؟',
            questionEn: 'When is the best and safest time to plant or transplant seedlings?',
            optionsUrdu: [
              'صبح سویرے یا شام کے وقت جب دھوپ کی شدت کم ہو',
              'دوپہر کی سخت جلتی دھوپ میں',
              'رات کو گھپ اندھیرے میں طوفان کے دوران',
              'کبھی بھی نہیں'
            ],
            optionsEn: [
              'Early morning or late afternoon when sun intensity is mild',
              'Scorching peak noon heat',
              'During midnight thunderstorms',
              'Never'
            ],
            correctIndex: 0,
            explanationUrdu: 'ٹھنڈے اوقات میں پودا لگانے سے اس کی جڑیں آسانی سے نئی مٹی میں سیٹ ہو جاتی ہیں۔',
            explanationEn: 'Transplanting during cool hours prevents wilting and shock to sensitive roots.'
          },
          {
            id: 'ag-b-l3-q2',
            questionUrdu: 'پودے کے اردگرد اگنے والی فالتو جڑی بوٹیاں (Weeds) نکالنا کیوں ضروری ہے؟',
            questionEn: 'Why is it important to pull out unwanted weeds around plants?',
            optionsUrdu: [
              'کیونکہ وہ مٹی کا پانی اور غذائیت چرا لیتی ہیں جس سے اصل پودا کمزور ہو جاتا ہے',
              'کیونکہ جڑی بوٹیاں خوبصورت ہوتی ہیں',
              'ان کا کوئی اثر نہیں ہوتا',
              'پودا جڑی بوٹیوں سے بات کرتا ہے'
            ],
            optionsEn: [
              'Weeds steal moisture and nutrients, weakening the main crop',
              'Weeds look nice',
              'They have zero effect',
              'Plants chat with weeds'
            ],
            correctIndex: 0,
            explanationUrdu: 'جڑی بوٹیاں ختم کرنے سے تمام تر کھاد اور پانی پودے کو ملتا ہے۔',
            explanationEn: 'Removing weeds ensures full nutrients and water reach the intended plant.'
          },
          {
            id: 'ag-b-l3-q3',
            questionUrdu: 'پودوں کے پتوں کو سبز اور خوراک بنانے کے لیے کون سی قدرتی چیز لازمی ہے؟',
            questionEn: 'What natural element is essential for plant leaves to synthesize food?',
            optionsUrdu: [
              'سورج کی مناسب روشنی (Sunlight)',
              'بجلی کا بلب',
              'مکمل اندھیری الماری',
              'ریفریجریٹر کی ٹھنڈک'
            ],
            optionsEn: [
              'Adequate sunlight for photosynthesis',
              'A small electric torch',
              'A dark locked closet',
              'Refrigerator cooling'
            ],
            correctIndex: 0,
            explanationUrdu: 'سورج کی روشنی پودوں کی خوراک بنانے کے عمل (Photosynthesis) کے لیے ناگزیر ہے۔',
            explanationEn: 'Sunlight powers photosynthesis, enabling healthy green vegetative growth.'
          }
        ],
        practicalTask: {
          id: 'ag-b-l3-task',
          titleUrdu: 'عملی مشق: کسی ایک پودے کی سوکھی پتیاں اور فالتو گھاس ہٹائیں',
          titleEn: 'Practical Task: Clean Dead Leaves & Weeds Around One Plant',
          instructionsUrdu: 'کسی گملے یا کیاری کے پودے کے نچلے حصے سے زرد/سوکھی پتیاں احتیاط سے الگ کریں اور اردگرد کی مٹی صاف کریں۔',
          instructionsEn: 'Gently remove yellowed or dead leaves and pull small weeds around a pot or garden plant.',
          deliverableUrdu: 'پودے کی صفائی مکمل کرنے کا اندراج کریں۔',
          deliverableEn: 'Confirm completion of plant pruning and cleanup.',
          estimatedMinutes: 6
        }
      },
      {
        id: 'ag-b-l4',
        titleUrdu: '4. قدرتی وسائل اور پانی کا ذمہ دارانہ استعمال',
        titleEn: '4. Conservation of Water & Natural Resources',
        durationMinutes: 12,
        contentUrdu: `پانی اللہ تعالیٰ کی عظیم نعمت ہے اور زراعت میں اس کا ایک ایک قطرہ قیمتی ہے۔ پانی ضائع کرنا گناہ بھی ہے اور زمین کے لیے نقصان دہ بھی۔

💧 **پانی کی بچت کے 4 عملی اور سادہ طریقے:**
1. **صبح یا شام پانی دینا:** دوپہر کو پانی دینے سے زیادہ تر پانی بھاپ بن کر اڑ جاتا ہے۔ صبح سویرے یا غروبِ آفتاب کے وقت پانی دیں تاکہ مٹی میں جذب ہو۔
2. **ملچنگ (Mulching - مٹی کو ڈھانپنا):** پودے کے تنے کے گرد سوکھے پتے، گھاس یا بھوسا بچھا دیں، اس سے مٹی میں نمی کئی دن تک برقرار رہتی ہے۔
3. **پائپ کے بجائے فوارہ یا بالٹی:** کھلے پائپ سے پانی بہانے کے بجائے بالٹی یا شاور کا استعمال کریں تاکہ ضرورت کے مطابق پانی ملے۔
4. **بارش کے پانی کی حفاظت:** بارش کے پانی کو چھوٹے ٹینکوں یا ڈرموں میں محفوظ کریں، یہ پودوں کے لیے قدرتی آبِ حیات ہے۔`,
        contentEn: `Freshwater is a sacred and finite natural resource. Conservation is vital for sustainable farming and gardening.

💧 **4 Practical Water-Saving Methods:**
1. **Water During Cool Hours:** Early morning or late evening watering reduces evaporative loss.
2. **Mulching:** Covering exposed soil with dried leaves or straw locks in moisture for days.
3. **Watering Cans over Hoses:** Using a watering can or bucket prevents excess runoff.
4. **Rainwater Harvesting:** Collecting clean rainwater in drums provides mineral-rich hydration for plants.`,
        keyTakeawaysUrdu: [
          'پانی دینے کا بہترین وقت صبح سویرے یا شام ہے تاکہ بخارات بن کر ضائع نہ ہو۔',
          'سوکھے گھاس پھوس کی ملچنگ (Mulching) مٹی میں نمی کو محفوظ رکھتی ہے۔',
          'بارش کا پانی پودوں کے لیے سب سے بہترین اور مفت قدرتی تحفہ ہے۔'
        ],
        keyTakeawaysEn: [
          'Watering in cool hours minimizes evaporation and maximizes absorption.',
          'Organic mulching with dried leaves retains soil moisture and suppresses weeds.',
          'Harvesting rainwater offers pristine, mineral-balanced hydration for gardens.'
        ],
        quiz: [
          {
            id: 'ag-b-l4-q1',
            questionUrdu: 'دوپہر کی کڑکتی دھوپ میں پودوں کو زیادہ پانی دینے کا کیا نقصان ہوتا ہے؟',
            questionEn: 'What is the main drawback of watering plants in harsh midday sunshine?',
            optionsUrdu: [
              'زیادہ تر پانی بھاپ بن کر اڑ جاتا ہے اور پتوں پر جلنے کا نشان بن سکتا ہے',
              'پودا چاندی بن جاتا ہے',
              'پانی ٹھنڈا ہو جاتا ہے',
              'کوئی نقصان نہیں ہوتا'
            ],
            optionsEn: [
              'Most water evaporates immediately and water droplets can scorch leaves',
              'The plant turns into silver',
              'Water gets cold',
              'Zero drawback'
            ],
            correctIndex: 0,
            explanationUrdu: 'دوپہر کی دھوپ پانی کو بخارات بنا دیتی ہے، اس لیے صبح یا شام کا وقت بہترین ہے۔',
            explanationEn: 'Midday heat causes rapid evaporation; watering early morning allows deep penetration.'
          },
          {
            id: 'ag-b-l4-q2',
            questionUrdu: 'مٹی کے اوپر سوکھے پتوں یا بھوسے کی تہہ (Mulching) بچھانے کا کیا فائدہ ہے؟',
            questionEn: 'What is the benefit of placing a layer of dry leaves or straw (mulch) over soil?',
            optionsUrdu: [
              'مٹی کی نمی دیر تک قائم رہتی ہے، پانی کی بچت ہوتی ہے اور فالتو گھاس نہیں اگتی',
              'مٹی زہریلی ہو جاتی ہے',
              'پودا سوکھ جاتا ہے',
              'گملہ ٹوٹ جاتا ہے'
            ],
            optionsEn: [
              'Soil retains moisture longer, saves water, and suppresses weed growth',
              'Soil turns poisonous',
              'Plant withers',
              'Pot breaks'
            ],
            correctIndex: 0,
            explanationUrdu: 'ملچنگ مٹی کو دھوپ سے بچاتی ہے اور نمی کو اڑنے نہیں دیتی۔',
            explanationEn: 'Mulch acts as a protective shield against evaporation and maintains soil coolness.'
          },
          {
            id: 'ag-b-l4-q3',
            questionUrdu: 'بارش کے پانی کو برتنوں یا ٹینک میں جمع کر کے پودوں کے لیے استعمال کرنا کیسا عمل ہے؟',
            questionEn: 'How beneficial is harvesting rainwater for garden plants?',
            optionsUrdu: [
              'انتہائی مفید، قدرتی اور مفت طریقہ جو پودوں کی صحت کے لیے بہترین ہے',
              'ایک نقصان دہ طریقہ',
              'اس سے پودے جل جاتے ہیں',
              'بارش کا پانی خطرناک ہوتا ہے'
            ],
            optionsEn: [
              'Highly beneficial, chemical-free, and optimal for plant vitality',
              'A harmful method',
              'It burns crops',
              'Rainwater is dangerous'
            ],
            correctIndex: 0,
            explanationUrdu: 'بارش کا پانی کلورین سے پاک اور قدرتی نائٹروجن سے بھرپور ہوتا ہے جو پودوں کو نکھار دیتا ہے۔',
            explanationEn: 'Rainwater is naturally soft, free of tap chemicals, and packed with vital minerals.'
          }
        ],
        practicalTask: {
          id: 'ag-b-l4-task',
          titleUrdu: 'عملی مشق: پودے کی جڑوں کے پاس سوکھے پتوں کی ملچنگ (Mulching) کریں',
          titleEn: 'Practical Task: Mulch One Pot or Plant with Dry Leaves',
          instructionsUrdu: 'چند سوکھے پتے یا گھاس لے کر گملے یا کیاری کی مٹی پر 1 انچ موٹی تہہ بچھائیں تاکہ نمی محفوظ رہے۔',
          instructionsEn: 'Gather some dried leaves or straw and spread a light 1-inch layer over the soil around a plant stem.',
          deliverableUrdu: 'ملچنگ کا تجربہ مکمل کرنے کا اندراج کریں۔',
          deliverableEn: 'Record completion of organic mulching.',
          estimatedMinutes: 6
        }
      },
      {
        id: 'ag-b-l5',
        titleUrdu: '5. گھر، گاؤں اور چھوٹے پیمانے پر باغبانی',
        titleEn: '5. Household & Small-Scale Rural Kitchen Gardening',
        durationMinutes: 14,
        contentUrdu: `کچن گارڈننگ (Kitchen Gardening) کا مطلب ہے اپنے گھر کے صحن، چھت یا چھوٹے ٹکڑے پر روزمرہ استعمال کی سبزیاں اگانا۔

🥕 **آسان اور تیزی سے اگنے والی گھریلو سبزیاں:**
1. **پودینہ (Mint):** پودینے کی چند ڈنڈیاں مٹی میں لگا دیں، یہ چند ہفتوں میں پھیل جاتا ہے اور سال بھر خوشبودار چٹنی فراہم کرتا ہے۔
2. **دھنیا (Coriander):** کچن کے ثابت دھنیے کے بیجوں کو ہلکا سا رگڑ کر مٹی میں بو دیں، 15-20 دن میں تازہ ہرا دھنیا تیار ہو جاتا ہے۔
3. **سبز مرچ اور ٹماٹر:** بیج بوئیں، جب پودے 4 انچ کے ہو جائیں تو الگ الگ گملوں میں لگا دیں، یہ کثرت سے پھل دیتے ہیں۔
4. **لہسن اور پیاز:** کچن کی لہسن کی جویں مٹی میں دبائیں، ان سے بہترین ہرا لہسن اگتا ہے۔

🏠 **فائدہ:** بازار کی ادویات زدہ سبزیوں کے بجائے گھر کی خالص اور تازہ خوراک جو بجٹ بھی بچاتی ہے اور صحت بھی بناتی ہے۔`,
        contentEn: `Kitchen gardening empowers families to grow daily culinary herbs and vegetables right at home.

🥕 **Easy-to-Grow Beginner Produce:**
1. **Mint:** Cuttings root quickly in moist soil, yielding fresh leaves year-round.
2. **Coriander:** Crush dry coriander seeds gently and sow; fresh green leaves sprout in 2–3 weeks.
3. **Chilies & Tomatoes:** High yielding, compact plants perfect for sunny yards or pots.
4. **Garlic Greens:** Plant individual garlic cloves to harvest nutritious green shoots.

🏠 **Benefits:** Organic, chemical-free nutrition, zero transport costs, and significant grocery savings.`,
        keyTakeawaysUrdu: [
          'گھر کے چھوٹے صحن یا گملوں میں دھنیا، پودینہ اور سبز مرچ آسانی سے اگ سکتی ہیں۔',
          'گھریلو باغبانی سے تازہ، خالص اور سستی خوراک گھر پر میسر آتی ہے۔',
          'باقاعدہ دیکھ بھال اور لگن سے پورا خاندان اس مفید مشغلے سے فائدہ اٹھا سکتا ہے۔'
        ],
        keyTakeawaysEn: [
          'Herbs like mint, coriander, and chilies flourish easily in small containers.',
          'Kitchen gardening yields fresh, chemical-free, nutrient-rich food at zero cost.',
          'Tending a family kitchen garden unites household members in a productive pursuit.'
        ],
        quiz: [
          {
            id: 'ag-b-l5-q1',
            questionUrdu: 'گھر میں کچن گارڈننگ (Kitchen Gardening) کا سب سے بڑا فائدہ کیا ہے؟',
            questionEn: 'What is the greatest advantage of household kitchen gardening?',
            optionsUrdu: [
              'گھر پر ہی خالص، تازہ، کیمیکل سے پاک سبزیاں حاصل ہونا اور کچن بجٹ کی بچت',
              'سبزیاں مہنگی خریدنا',
              'گھر میں مٹی کا ڈھیر لگانا',
              'بیمار ہونا'
            ],
            optionsEn: [
              'Harvesting pure, fresh, organic vegetables while saving on grocery bills',
              'Paying inflated market prices',
              'Piling garbage at home',
              'Falling ill'
            ],
            correctIndex: 0,
            explanationUrdu: 'گھر کی اگی سبزیاں تازی اور صحت بخش ہوتی ہیں اور بازار پر انحصار کم کرتی ہیں۔',
            explanationEn: 'Homegrown crops provide crisp, pesticide-free nutrition right at the doorstep.'
          },
          {
            id: 'ag-b-l5-q2',
            questionUrdu: 'کون سی خوشبودار چیز پودینے کی طرح کٹنگ (ڈنڈی) سے باآسانی اگائی جا سکتی ہے؟',
            questionEn: 'Which aromatic herb can be propagated very easily from fresh stem cuttings?',
            optionsUrdu: [
              'پودینہ (Mint)',
              'سیب کا بڑا درخت',
              'ناریل کا پیڑ',
              'آم کا باغ'
            ],
            optionsEn: [
              'Fresh Mint',
              'Mature Apple Tree',
              'Coconut Palm',
              'Mango Orchard'
            ],
            correctIndex: 0,
            explanationUrdu: 'پودینہ ڈنڈی سے چند دنوں میں جڑیں پکڑ لیتا ہے اور تیزی سے پھیلتا ہے۔',
            explanationEn: 'Mint stem cuttings root in soil within days and spread vigorously.'
          },
          {
            id: 'ag-b-l5-q3',
            questionUrdu: 'گھر میں کچن گارڈننگ شروع کرنے کے لیے کیا چیز ضروری ہے؟',
            questionEn: 'What is truly needed to start a simple home kitchen garden?',
            optionsUrdu: [
              'تھوڑی سی مٹی، گملے یا خالی ڈبے، بیج اور روزانہ چند منٹ کی باقاعدہ دیکھ بھال',
              'کروڑوں روپے کی فیکٹری',
              'بڑے ٹریکٹر اور جہاز',
              'غیر ملکی مشینری'
            ],
            optionsEn: [
              'A little soil, pots or recycled crates, seeds, and a few minutes of daily care',
              'A multi-million dollar factory',
              'Heavy tractors and airplanes',
              'Imported heavy machinery'
            ],
            correctIndex: 0,
            explanationUrdu: 'چھوٹے برتنوں اور چند بیجوں سے ہر کوئی اپنے گھر میں باغبانی شروع کر سکتا ہے۔',
            explanationEn: 'Simple containers, seeds, and consistent care are all you need to start.'
          }
        ],
        practicalTask: {
          id: 'ag-b-l5-task',
          titleUrdu: 'عملی مشق: کسی گملے یا کٹورے میں دھنیا، پودینہ یا لہسن لگائیں',
          titleEn: 'Practical Task: Plant Mint Cuttings, Coriander or Garlic Clove',
          instructionsUrdu: 'ایک چھوٹے گملے یا پلاسٹک کے ڈبے میں مٹی ڈال کر پودینے کی 2 ڈنڈیاں یا لہسن کی 2 جویں بوئیں اور ہلکا سا پانی دیں۔',
          instructionsEn: 'Fill a small pot or recycled container with soil, plant 2 mint cuttings or garlic cloves, and water gently.',
          deliverableUrdu: 'بوائی کا نام اور آغاز درج کریں۔',
          deliverableEn: 'Record the planted herb name and date.',
          estimatedMinutes: 10
        }
      }
    ],
    quiz: [
      {
        id: 'ag-b-course-q1',
        questionUrdu: 'قدرتی زراعت اور باغبانی کی بنیادی روح کیا ہے؟',
        questionEn: 'What is the core spirit of natural agriculture and gardening?',
        optionsUrdu: [
          'مٹی، پانی اور قدرتی وسائل کا احترام کرتے ہوئے خالص خوراک اگانا اور زمین کی زرخیزی کی حفاظت کرنا',
          'زمین پر کیمیکل اور زہر بہانا',
          'پانی کا بے تحاشا ضیاع',
          'تمام پودوں کو کاٹ دینا'
        ],
        optionsEn: [
          'Honoring soil, water, and ecosystems to grow pure nourishment while safeguarding the earth',
          'Flooding soil with toxic chemicals',
          'Reckless water wastage',
          'Chopping down all trees'
        ],
        correctIndex: 0,
        explanationUrdu: 'قدرت کا احترام اور پائیدار دیکھ بھال ہی باغبانی کی اصل خوبصورتی ہے۔',
        explanationEn: 'Reverence for living soil and responsible stewardship are the essence of true agriculture.'
      }
    ],
    practicalTask: {
      id: 'ag-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: گھریلو کچن گارڈن اور واٹر سیونگ پلان',
      titleEn: 'Capstone: Household Kitchen Garden & Water Conservation Blueprint',
      instructionsUrdu: 'اپنے گھر کے لیے 3 سبزیوں یا جڑی بوٹیوں کی کیاری/گملوں کا منصوبہ بنائیں جس میں مٹی کی تیاری، دھوپ کی جگہ اور پانی کی بچت کے طریقے درج ہوں۔',
      instructionsEn: 'Design a 3-herb/vegetable container garden plan covering soil prep, sun exposure, and water conservation methods.',
      deliverableUrdu: 'اپنا گھریلو کچن گارڈن پلان درج کریں۔',
      deliverableEn: 'Enter your kitchen garden blueprint.',
      estimatedMinutes: 15
    },
    projectDescriptionUrdu: 'اپنے گھر یا گاؤں کے لیے کم لاگت کچن گارڈننگ گائیڈ، مٹی کی قدرتی دیکھ بھال اور پانی کی بچت کا منصوبہ تیار کریں۔',
    projectDescriptionEn: 'Develop a low-cost kitchen gardening guide, soil enrichment method, and water conservation strategy.'
  },

  // ==================================================
  // COURSE 3 — HOME & DAILY LIFE SKILLS (BEGINNER)
  // ==================================================
  {
    id: 'home-daily-life-skills-basics',
    titleUrdu: 'روزمرہ زندگی کی مفید Skills',
    titleEn: 'Useful Everyday Life Skills',
    descriptionUrdu: 'وقت کی دانشمندانہ منصوبہ بندی، گھریلو کاموں کی باہمی تقسیم، صفائی و نظم و ضبط، روزمرہ مسائل کو پرسکون طریقے سے حل کرنا اور مشکل حالات میں ذمہ دار فیصلے لینا۔',
    descriptionEn: 'A practical, uplifting life skills guide covering time management, household chore sharing, cleanliness and organization, rational problem solving, and calm decision-making.',
    category: 'Life Skills',
    categoryUrdu: 'روزمرہ زندگی کی مہارتیں',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.5,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70'],
    icon: 'Compass',
    coverGradient: 'from-indigo-700 via-teal-800 to-slate-900',
    realLifePurpose: {
      personalBenefitUrdu: 'روزمرہ کے معمولات منظم ہوں گے، ذہنی دباؤ اور بے ترتیبی ختم ہوگی اور وقت کی قدر کر کے اپنے مقاصد حاصل کر سکیں گے۔',
      personalBenefitEn: 'Organize daily routines, eliminate mental stress and clutter, and accomplish goals through disciplined time stewardship.',
      familyHelpUrdu: 'گھر کے کاموں میں ہاتھ بٹا کر والدین اور گھر والوں کا بوجھ ہلکا کریں گے اور گھر کا ماحول پرسکون و خوشگوار بنے گا۔',
      familyHelpEn: 'Lighten parents’ and family burdens by sharing chores, creating a peaceful, organized, and loving home environment.',
      communityHelpUrdu: 'محلے میں صفائی کے کلچر، نظم و ضبط اور آپس کے تنازعات کو ٹھنڈے دماغ سے بات چیت کے ذریعے حل کرنے میں رہنمائی کر سکیں گے۔',
      communityHelpEn: 'Foster neighborhood cleanliness, mutual discipline, and resolve local disputes through calm dialogue.',
      societalBenefitUrdu: 'معاشرے میں ذمہ دار، مہذب اور منظم شہریوں کی تعداد بڑھے گی جو وقت کی پابندی اور باہمی تعاون پر یقین رکھتے ہوں۔',
      societalBenefitEn: 'Cultivates responsible, civilized citizens who value punctuality, mutual respect, and collaborative civic duty.'
    },
    lessons: [
      {
        id: 'ls-b-l1',
        titleUrdu: '1. وقت کی منصوبہ بندی',
        titleEn: '1. Time Management & Daily Planning',
        durationMinutes: 12,
        contentUrdu: `وقت انسان کی زندگی کا سب سے قیمتی سرمایہ ہے جو گزر جائے تو دوبارہ کبھی واپس نہیں آتا۔ جو انسان اپنے وقت کا نظام بنا لیتا ہے وہ زندگی کے ہر میدان میں کامیاب رہتا ہے۔

⏳ **روزانہ وقت کی منصوبہ بندی کے 3 سنہری اصول:**
1. **صبح کی ترجیحی لسٹ (Top 3 Tasks):** صبح اٹھ کر یا رات کو سونے سے پہلے دن کے 3 سب سے اہم کام لکھ لیں جنہیں مکمل کرنا ضروری ہے۔
2. **فضول مصروفیات پر قابو:** موبائل اسکرین پر بغیر مقصد ویڈیوز دیکھنا یا لایعنی گفتگو وقت کے سب سے بڑے چور ہیں۔ ان کا وقت مقرر کریں۔
3. **وقت کی پابندی (Punctuality):** جو وقت کسی کو دیں یا جو کام جس وقت طے ہو، اسے بغیر تاخیر کے پورا کریں۔

وقت کی قدر کرنے والے کو معاشرے میں عزت اور اعتماد حاصل ہوتا ہے۔`,
        contentEn: `Time is our most non-renewable asset. Those who master their daily routine achieve enduring success and peace of mind.

⏳ **3 Golden Rules of Time Management:**
1. **Daily Top 3 Priorities:** Identify the 3 most crucial tasks to accomplish each day.
2. **Eliminate Time Traps:** Limit aimless social media scrolling and unproductive distractions.
3. **Punctuality & Reliability:** Honor scheduled appointments and work deadlines diligently.`,
        keyTakeawaysUrdu: [
          'روزانہ کے 3 سب سے اہم کاموں کی فہرست بنا کر دن کا آغاز کریں۔',
          'موبائل اور لایعنی سرگرمیوں میں وقت ضائع ہونے سے بچائیں۔',
          'وقت کی پابندی عزت اور اعتماد میں اضافے کا باعث بنتی ہے۔'
        ],
        keyTakeawaysEn: [
          'Start each day by prioritizing the 3 most important goals.',
          'Guard your focus against aimless digital distractions and idle scrolling.',
          'Punctuality is the cornerstone of trust and professional dignity.'
        ],
        quiz: [
          {
            id: 'ls-b-l1-q1',
            questionUrdu: 'دن کو نتیجہ خیز اور منظم بنانے کا سب سے آسان طریقہ کیا ہے؟',
            questionEn: 'What is the simplest way to make your day productive and organized?',
            optionsUrdu: [
              'دن کے آغاز میں 3 اہم کاموں کو ترجیح بنا کر وقت کا تعین کرنا',
              'بغیر کسی منصوبے کے سارا دن موبائل پر گزار دینا',
              'ہر کام کل پر ٹالنا',
              'کوئی کام نہ کرنا'
            ],
            optionsEn: [
              'Identifying top 3 priority tasks early and scheduling your time',
              'Spending the whole day aimlessly on social media without a plan',
              'Procrastinating everything to tomorrow',
              'Doing nothing'
            ],
            correctIndex: 0,
            explanationUrdu: 'ترجیحات کا تعین انسان کو سستی اور بے ترتیبی سے بچاتا ہے۔',
            explanationEn: 'Clear prioritization prevents procrastination and wasted hours.'
          },
          {
            id: 'ls-b-l1-q2',
            questionUrdu: 'وقت کی پابندی (Punctuality) کا انسان کے کردار اور تعلقات پر کیا اثر ہوتا ہے؟',
            questionEn: 'How does punctuality impact personal reputation and relationships?',
            optionsUrdu: [
              'لوگوں کا اعتماد اور عزت بڑھتی ہے اور کام بروقت مکمل ہوتے ہیں',
              'لوگ ناراض ہوتے ہیں',
              'کوئی عزت نہیں کرتا',
              'وقت ضائع ہوتا ہے'
            ],
            optionsEn: [
              'Builds high credibility, trust, and ensures timely task completion',
              'Annoys everyone',
              'Destroys reputation',
              'Wastes time'
            ],
            correctIndex: 0,
            explanationUrdu: 'جو شخص وقت کی قدر کرتا ہے لوگ اس کے قول و فعل پر مکمل بھروسہ کرتے ہیں۔',
            explanationEn: 'People who respect time earn deep trust and respect from peers and clients.'
          },
          {
            id: 'ls-b-l1-q3',
            questionUrdu: 'موبائل فون کے غیر ضروری استعمال سے وقت کو کیسے بچایا جائے؟',
            questionEn: 'How can you protect your time from unnecessary smartphone usage?',
            optionsUrdu: [
              'موبائل استعمال کرنے کے لیے مخصوص وقت مقرر کرنا اور پڑھائی/کام کے وقت اسے سائیڈ پر رکھنا',
              'ہر 2 منٹ بعد نوٹیفکیشن چیک کرنا',
              'ساری رات اسکرین دیکھنا',
              'موبائل دریا میں پھینک دینا'
            ],
            optionsEn: [
              'Setting designated phone times and putting it away during work/study hours',
              'Checking notifications every 2 minutes',
              'Staring at screens all night',
              'Throwing the phone in a river'
            ],
            correctIndex: 0,
            explanationUrdu: 'فون کے استعمال کا وقت محدود کرنے سے ضروری کاموں کے لیے وقت نکل آتا ہے۔',
            explanationEn: 'Disciplined screen boundaries free up precious hours for meaningful achievements.'
          }
        ],
        practicalTask: {
          id: 'ls-b-l1-task',
          titleUrdu: 'عملی مشق: کل کے دن کے 3 اہم ترین کاموں کی فہرست بنائیں',
          titleEn: 'Practical Task: Write Tomorrow’s Top 3 Priority Tasks',
          instructionsUrdu: 'ایک کاغذ یا فون پر کل کے وہ ۳ ضروری کام لکھیں جنہیں آپ نے ہر حال میں وقت پر مکمل کرنا ہے۔',
          instructionsEn: 'List the 3 most essential goals you commit to finishing on time tomorrow.',
          deliverableUrdu: 'اپنے کل کے ۳ اہم کام درج کریں۔',
          deliverableEn: 'Enter tomorrow’s 3 priority tasks.',
          estimatedMinutes: 6
        }
      },
      {
        id: 'ls-b-l2',
        titleUrdu: '2. گھر کے کام اور ذمہ داریوں کی تقسیم',
        titleEn: '2. Sharing Household Chores & Responsibilities',
        durationMinutes: 12,
        contentUrdu: `گھر ایک ٹیم کی طرح ہوتا ہے جہاں ہر فرد کا کردار اہم ہے۔ گھر کے تمام کاموں کا بوجھ صرف ایک فرد (جیسے والدہ یا بہن) پر ڈالنا سراسر ناانصافی ہے۔

🤝 **گھریلو تعاون کے 3 سنہری طریقے:**
1. **اپنی چیزیں خود سنبھالنا:** اپنے بستر کی چادر ٹھیک کرنا، جوتے جگہ پر رکھنا اور گندے برتن کچن میں رکھنا بنیادی اخلاقیات ہے۔
2. **کاموں کی منصفانہ تقسیم:** صفائی، سودا سلف لانا، کوڑا باہر رکھنا اور پودوں کو پانی دینا سب مل کر کریں۔
3. **شکریہ اور حوصلہ افزائی:** کھانا پکانے یا گھر سنبھالنے والے کے کام کی دل سے تعریف کریں اور احسان مانیں۔

جس گھر میں مل جل کر کام کیا جائے وہاں محبت، برکت اور سکون رہتا ہے۔`,
        contentEn: `A family functions like a team where every member contributes. Dumping all household labor on a single individual is unfair.

🤝 **3 Core Principles of Shared Living:**
1. **Self-Stewardship:** Make your own bed, store footwear properly, and return dishes to the sink.
2. **Shared Chores:** Divide trash disposal, grocery runs, sweeping, and plant watering fairly.
3. **Gratitude & Appreciation:** Express genuine thanks to family members who prepare meals and clean.`,
        keyTakeawaysUrdu: [
          'اپنا بستر اور ذاتی سامان خود سمیٹنا بنیادی ذاتی ذمہ داری ہے۔',
          'گھریلو کاموں میں ہاتھ بٹانے سے والدہ اور گھر والوں کا بوجھ ہلکا ہوتا ہے۔',
          'گھر کے کام میں شرم نہیں بلکہ عزت اور محبت ہے۔'
        ],
        keyTakeawaysEn: [
          'Tidying your personal space and belongings is foundational personal responsibility.',
          'Sharing daily chores lightens household burdens and fosters mutual affection.',
          'Contributing to domestic upkeep is an honorable act of love and respect.'
        ],
        quiz: [
          {
            id: 'ls-b-l2-q1',
            questionUrdu: 'کھانا کھانے کے بعد اپنی پلیٹ اور گلاس کچن میں سنک تک لے جانا کیسا عمل ہے؟',
            questionEn: 'How should you view taking your plate and glass to the kitchen sink after a meal?',
            optionsUrdu: [
              'ایک بہترین، مہذب اور ذمہ دارانہ عادت جس سے دوسروں کا بوجھ کم ہوتا ہے',
              'ایک برا کام',
              'اس سے انسان کی توہین ہوتی ہے',
              'پلیٹ فرش پر پھینک دینی چاہیے'
            ],
            optionsEn: [
              'A cultured, responsible habit that demonstrates care and lightens others’ load',
              'A terrible deed',
              'An insult to one\'s dignity',
              'Plates should be dumped on the floor'
            ],
            correctIndex: 0,
            explanationUrdu: 'اپنا برتن خود رکھنا اور جگہ صاف کرنا بااخلاق اور ذمہ دار انسان کی نشانی ہے۔',
            explanationEn: 'Clearing your own dishes is a basic mark of maturity and domestic courtesy.'
          },
          {
            id: 'ls-b-l2-q2',
            questionUrdu: 'گھر کے تمام کام صرف ایک فرد پر ڈالنے کا کیا نقصان ہوتا ہے؟',
            questionEn: 'What is the negative consequence of leaving all domestic chores to one person?',
            optionsUrdu: [
              'وہ فرد شدید تھکن اور بیماری کا شکار ہو جاتا ہے اور گھر میں بے سکونی پھیلتی ہے',
              'گھر جنت بن جاتا ہے',
              'سب خوش رہتے ہیں',
              'کوئی نقصان نہیں ہوتا'
            ],
            optionsEn: [
              'That person experiences severe exhaustion and stress, creating household tension',
              'Home becomes heaven',
              'Everyone is cheerful',
              'No negative impact'
            ],
            correctIndex: 0,
            explanationUrdu: 'باہمی تعاون نہ ہو تو کام کرنے والا تھک کر بیمار ہو جاتا ہے، اس لیے ہاتھ بٹانا ضروری ہے۔',
            explanationEn: 'Unequal burden causes physical burnout and emotional strain across the family.'
          },
          {
            id: 'ls-b-l2-q3',
            questionUrdu: 'گھر میں خوشگوار اور پرسکون ماحول قائم رکھنے کا بہترین نسخہ کیا ہے؟',
            questionEn: 'What is the best recipe for maintaining harmony and peace at home?',
            optionsUrdu: [
              'کاموں میں ایک دوسرے کا ہاتھ بٹانا اور شکریہ کے اچھے الفاظ بولنا',
              'ہر بات پر غصہ اور چیخ و پکار کرنا',
              'گھر کے کاموں سے بھاگ جانا',
              'صرف حکم چلانا'
            ],
            optionsEn: [
              'Helping one another with daily chores and speaking words of warm gratitude',
              'Yelling and complaining over every minor issue',
              'Running away from responsibility',
              'Just barking orders'
            ],
            correctIndex: 0,
            explanationUrdu: 'مدد اور میٹھے بول سے گھر امن اور محبت کا گہوارہ بن جاتا ہے۔',
            explanationEn: 'Active collaboration paired with heartfelt gratitude creates a warm, loving home.'
          }
        ],
        practicalTask: {
          id: 'ls-b-l2-task',
          titleUrdu: 'عملی مشق: آج گھر کے کسی ایک کام میں بغیر کہے ہاتھ بٹائیں',
          titleEn: 'Practical Task: Proactively Assist with One Household Chore Today',
          instructionsUrdu: 'آج اپنے گھر میں کوئی ایک کام (مثلاً برتن سمیٹنا، کمرے کی صفائی یا بازار سے سودا لانا) خوش دلی سے خود انجام دیں۔',
          instructionsEn: 'Proactively do one chore today without being asked (clearing the table, sweeping, or organizing a room).',
          deliverableUrdu: 'انجام دیئے گئے کام کا اندراج کریں۔',
          deliverableEn: 'Record the chore completed to help at home.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'ls-b-l3',
        titleUrdu: '3. بنیادی صفائی اور نظم و ضبط',
        titleEn: '3. Cleanliness, Hygiene & Personal Order',
        durationMinutes: 12,
        contentUrdu: `صفائی نصف ایمان ہے اور منظم زندگی انسان کو پرسکون رکھتی ہے۔ بے ترتیبی اور گندگی نہ صرف بیماریاں لاتی ہے بلکہ ذہن کو بھی الجھا دیتی ہے۔

🧹 **نظم و ضبط کے 3 بنیادی اصول:**
1. **ہر چیز کی ایک مخصوص جگہ:** چابیاں، اوزار، کتابیں اور کپڑے استعمال کے بعد ہمیشہ ان کی طے شدہ جگہ پر رکھیں۔
2. **کوڑا کوڑے دان میں:** گھر ہو یا گلی، کبھی بھی ریپر یا چھلکے زمین پر نہ پھینکیں۔ کوڑا دان استعمال کریں تاکہ بیماریاں نہ پھیلیں۔
3. **ذاتی حفظانِ صحت:** کھانے سے پہلے اور بیت الخلاء کے بعد صابن سے ہاتھ دھونا، ناخن تراشنا اور صاف کپڑے پہننا صحت کی بنیادی ڈھال ہے۔

ایک صاف ستھرا اور منظم کمرہ انسان کے اندر مثبت سوچ اور توانائی پیدا کرتا ہے۔`,
        contentEn: `Cleanliness is half of faith, and order brings serenity. Clutter and dirt invite illness and cloud mental clarity.

🧹 **3 Core Rules of Hygiene & Order:**
1. **A Place for Everything:** Return keys, tools, books, and footwear to their assigned spots.
2. **Trash in the Bin:** Never litter streets or rooms with wrappers or peels; keep surroundings clean.
3. **Personal Hygiene:** Wash hands thoroughly with soap before meals and after restrooms; maintain neat nails and fresh attire.`,
        keyTakeawaysUrdu: [
          'چیزوں کو استعمال کے بعد ان کی مخصوص جگہ پر رکھنا وقت اور الجھن بچاتا ہے۔',
          'گھر اور گلی محلے کو کچرے سے پاک رکھنا ہر شہری کا اخلاقی فرض ہے۔',
          'صابن سے باقاعدہ ہاتھ دھونا بیماریوں سے بچاؤ کا سب سے مؤثر طریقہ ہے۔'
        ],
        keyTakeawaysEn: [
          'Returning items to their assigned place saves searching time and clears clutter.',
          'Keeping streets and homes trash-free is a fundamental civic duty.',
          'Regular handwashing with soap prevents the spread of infectious illnesses.'
        ],
        quiz: [
          {
            id: 'ls-b-l3-q1',
            questionUrdu: 'کسی چیز (مثلاً چابی یا جوتے) کو استعمال کے بعد ادھر ادھر پھینکنے کے بجائے مخصوص جگہ پر رکھنے کا کیا فائدہ ہے؟',
            questionEn: 'What is the benefit of always returning items to their designated spot?',
            optionsUrdu: [
              'اگلی بار ضرورت کے وقت چیز فوری مل جاتی ہے اور وقت و غصہ ضائع نہیں ہوتا',
              'چیز غائب ہو جاتی ہے',
              'کمرہ گندا لگتا ہے',
              'کوئی فائدہ نہیں ہوتا'
            ],
            optionsEn: [
              'Items are instantly accessible when needed, saving time and frustration',
              'Items vanish',
              'Rooms look dirtier',
              'Zero benefit'
            ],
            correctIndex: 0,
            explanationUrdu: 'نظم و ضبط سے زندگی آسان ہو جاتی ہے اور قیمتی وقت تلاش میں برباد نہیں ہوتا۔',
            explanationEn: 'Designated storage eliminates frantic searching and preserves mental peace.'
          },
          {
            id: 'ls-b-l3-q2',
            questionUrdu: 'بیماریوں اور جراثیم سے محفوظ رہنے کے لیے سب سے بنیادی اور آسان ترین عمل کیا ہے؟',
            questionEn: 'What is the most fundamental and effective habit to guard against infectious germs?',
            optionsUrdu: [
              'کھانے سے پہلے اور بیت الخلاء کے بعد صابن اور پانی سے ہاتھ دھونا',
              'کبھی ہاتھ نہ دھونا',
              'گندے ہاتھوں سے کھانا کھانا',
              'کچرے میں کھیلنا'
            ],
            optionsEn: [
              'Washing hands thoroughly with soap and water before eating and after restrooms',
              'Never washing hands',
              'Eating with muddy hands',
              'Playing in garbage'
            ],
            correctIndex: 0,
            explanationUrdu: 'صابن سے ہاتھ دھونے سے جراثیم پیٹ میں جانے سے رکتے ہیں اور صحت برقرار رہتی ہے۔',
            explanationEn: 'Handwashing with soap removes harmful pathogens, preventing severe infections.'
          },
          {
            id: 'ls-b-l3-q3',
            questionUrdu: 'گلی یا راستے پر کچرا اور شاپر پھینکنے سے معاشرے پر کیا اثر پڑتا ہے؟',
            questionEn: 'What is the impact of throwing trash and plastic bags in streets and alleys?',
            optionsUrdu: [
              'نالیاں بند ہوتی ہیں، تعفن پھیلتا ہے اور مچھر و بیماریاں جنم لیتی ہیں',
              'محلہ خوبصورت بن جاتا ہے',
              'خوشبو آتی ہے',
              'راستہ کشادہ ہوتا ہے'
            ],
            optionsEn: [
              'Drains clog, foul odors spread, and mosquito-borne illnesses thrive',
              'Streets look gorgeous',
              'Fragrances spread',
              'Paths get wider'
            ],
            correctIndex: 0,
            explanationUrdu: 'راستے کو صاف رکھنا اور کوڑا ڈسٹ بن میں ڈالنا ہر مہذب انسان کا فرض ہے۔',
            explanationEn: 'Proper waste disposal prevents clogged sewage and neighborhood epidemics.'
          }
        ],
        practicalTask: {
          id: 'ls-b-l3-task',
          titleUrdu: 'عملی مشق: اپنے کمرے کا کوئی ایک دراز، شیلف یا کونا مکمل ترتیب دیں',
          titleEn: 'Practical Task: Organize One Drawer, Shelf or Study Corner',
          instructionsUrdu: 'اپنی کتابوں، کپڑوں یا اوزاروں کا ایک شیلف یا کونہ ترتیب سے لگائیں اور فالتو کچرا باہر کوڑے دان میں ڈالیں۔',
          instructionsEn: 'Neatly arrange one cluttered shelf, drawer, or corner and dispose of any trash in the bin.',
          deliverableUrdu: 'ترتیب دیئے گئے حصے کی تفصیل درج کریں۔',
          deliverableEn: 'Record the organized space details.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'ls-b-l4',
        titleUrdu: '4. روزمرہ مسئلہ حل کرنے کی صلاحیت',
        titleEn: '4. Everyday Problem Solving & Resourcefulness',
        durationMinutes: 12,
        contentUrdu: `زندگی مسائل اور چیلنجز کا دوسرا نام ہے۔ گھبرا جانا یا دوسروں کو الزام دینا مسئلے کا حل نہیں ہے، بلکہ سمجھداری اور تدبیر سے راستہ نکالنا اصل ہنر ہے۔

💡 **مسئلہ حل کرنے کے 4 مراحل:**
1. **مسئلے کو سمجھیں:** دراصل مسئلہ کیا ہے؟ (مثلاً وقت کی کمی، پیسے کا مسئلہ، یا معلومات کی کمی)۔
2. **ممکنہ حل سوچیں:** کاغذ پر 2 یا 3 ممکنہ راستے لکھیں (حل A، حل B)۔
3. **بہترین حل کا انتخاب:** جو راستہ سب سے آسان، محفوظ اور سستا ہو اسے منتخب کریں۔
4. **بزرگوں اور اہل علم سے مشورہ:** اگر بات سمجھ نہ آئے تو اپنے بڑوں یا تجربہ کار لوگوں سے مشورہ لیں۔ مشورے میں خیر اور برکت ہوتی ہے۔`,
        contentEn: `Life naturally presents unexpected challenges. Panicking or blaming others solves nothing; resourceful thinking finds constructive paths forward.

💡 **4 Steps to Problem Solving:**
1. **Define the Issue:** What is the actual bottleneck? (Lack of time, budget, or knowledge).
2. **Brainstorm Options:** Outline 2–3 feasible solutions (Option A, Option B).
3. **Select the Safest Course:** Pick the most practical, ethical, and low-risk approach.
4. **Seek Wise Counsel:** Consult trusted elders and knowledgeable mentors for guidance.`,
        keyTakeawaysUrdu: [
          'مسئلہ آنے پر گھبرانے کے بجائے پرسکون رہ کر اصل وجہ تلاش کریں۔',
          'ایک سے زائد ممکنہ حل سوچیں اور محفوظ ترین راستہ اختیار کریں۔',
          'بزرگوں اور تجربہ کار لوگوں سے مشورہ کرنے سے راستے کھلتے ہیں۔'
        ],
        keyTakeawaysEn: [
          'Stay calm during unexpected challenges and identify root causes.',
          'Brainstorm multiple realistic options before deciding.',
          'Consult experienced mentors and elders for clarity and wisdom.'
        ],
        quiz: [
          {
            id: 'ls-b-l4-q1',
            questionUrdu: 'جب کوئی اچانک غیر متوقع مسئلہ پیش آئے تو سب سے پہلا درست ردعمل کیا ہونا چاہیے؟',
            questionEn: 'What should be your first reaction when facing an unexpected problem?',
            optionsUrdu: [
              'پرسکون رہنا، گہرے سانس لینا اور مسئلے کی اصل وجہ کو ٹھنڈے دماغ سے سمجھنا',
              'شور مچانا اور چیخنا چلانا',
              'دوسروں پر الزام لگا کر جھگڑنا',
              'گھر چھوڑ کر بھاگ جانا'
            ],
            optionsEn: [
              'Staying calm, taking a breath, and assessing the root cause rationally',
              'Screaming and causing panic',
              'Blaming others and starting fights',
              'Running away permanently'
            ],
            correctIndex: 0,
            explanationUrdu: 'پرسکون رہنے سے انسان کی عقل درست کام کرتی ہے اور بہتر حل سوجھتا ہے۔',
            explanationEn: 'Composure allows clear thinking and rational decision-making.'
          },
          {
            id: 'ls-b-l4-q2',
            questionUrdu: 'مشکل مسائل کے حل کے لیے اپنے تجربہ کار بڑوں سے مشورہ لینے کا کیا فائدہ ہوتا ہے؟',
            questionEn: 'What is the benefit of consulting experienced elders on tough issues?',
            optionsUrdu: [
              'ان کے سالوں کے تجربے سے بہتر رہنمائی ملتی ہے اور غلطیوں سے بچاؤ ہوتا ہے',
              'وقت ضائع ہوتا ہے',
              'مسئلہ مزید بگڑ جاتا ہے',
              'کوئی فائدہ نہیں ہوتا'
            ],
            optionsEn: [
              'Their years of practical wisdom provide guidance and prevent costly mistakes',
              'Wastes time',
              'Worsens the issue',
              'Zero benefit'
            ],
            correctIndex: 0,
            explanationUrdu: 'مشورے سے انسان کو وہ زاویے نظر آتے ہیں جو تنہا سوچنے پر دکھائی نہیں دیتے۔',
            explanationEn: 'Consulting elders unlocks practical perspectives gained through decades of life experience.'
          },
          {
            id: 'ls-b-l4-q3',
            questionUrdu: 'مسئلہ حل کرتے وقت ایک سے زائد راستے (حل A اور حل B) سوچنے کی کیا اہمیت ہے؟',
            questionEn: 'Why is it important to brainstorm multiple options (Plan A, Plan B)?',
            optionsUrdu: [
              'اگر پہلا طریقہ کام نہ کرے تو دوسرا متبادل راستہ تیار رہتا ہے',
              'اس سے کنفیوژن بڑھتی ہے',
              'کوئی کام نہیں ہوتا',
              'صرف وقت ضائع ہوتا ہے'
            ],
            optionsEn: [
              'If the first approach stalls, an alternative backup plan is already ready',
              'It increases confusion',
              'Nothing gets done',
              'It wastes time'
            ],
            correctIndex: 0,
            explanationUrdu: 'متبادل پلان رکھنے سے انسان کسی ایک رکاوٹ پر اٹک کر مایوس نہیں ہوتا۔',
            explanationEn: 'Having fallback alternatives ensures resilience and continuous progress.'
          }
        ],
        practicalTask: {
          id: 'ls-b-l4-task',
          titleUrdu: 'عملی مشق: کسی موجودہ مسئلے کے 2 ممکنہ عملی حل سوچیں',
          titleEn: 'Practical Task: Brainstorm 2 Practical Solutions for a Daily Issue',
          instructionsUrdu: 'روزمرہ کا کوئی ایک چھوٹا مسئلہ (مثلاً صبح دیر سے اٹھنا یا کتابیں گم ہونا) منتخب کریں اور اس کے ۲ ممکنہ حل لکھیں۔',
          instructionsEn: 'Select one small routine issue (e.g. waking up late, misplacing items) and write down 2 actionable solutions.',
          deliverableUrdu: 'مسئلہ اور اس کے ۲ عملی حل درج کریں۔',
          deliverableEn: 'Enter the selected problem and 2 practical solutions.',
          estimatedMinutes: 6
        }
      },
      {
        id: 'ls-b-l5',
        titleUrdu: '5. مشکل حالات میں پرسکون اور ذمہ دار فیصلہ کرنا',
        titleEn: '5. Calm & Responsible Decision-Making Under Pressure',
        durationMinutes: 12,
        contentUrdu: `غصے، گھبراہٹ یا شدید جذبات میں کیے گئے فیصلے اکثر بعد میں پچھتاوے کا باعث بنتے ہیں۔ سمجھدار انسان وہ ہے جو مشکل وقت میں جذبات کے بجائے عقل اور اخلاق سے فیصلہ کرے۔

🧭 **ذمہ دار فیصلہ سازی کے 4 اصول:**
1. **غصے میں فیصلہ نہ کریں:** جب غصہ آئے تو خاموش ہو جائیں، بیٹھ جائیں، اور پانی پی لیں۔ غصے میں کبھی کوئی وعدہ یا فیصلہ نہ کریں۔
2. **نتائج پر غور کریں:** اپنے فیصلے سے پہلے سوچیں: "اس کا کل کیا نتیجہ نکلے گا؟ کیا اس سے کسی کا نقصان تو نہیں ہوگا؟"
3. **سچائی اور انصاف پر قائم رہیں:** فیصلہ ہمیشہ سچ اور حق پر کریں چاہے وہ وقتی طور پر کڑوا کیوں نہ ہو۔
4. **ذمہ داری قبول کریں:** اگر غلطی ہو جائے تو ضد کرنے کے بجائے دل سے تسلیم کریں اور اسے درست کریں۔

جو انسان پرسکون رہ کر ذمہ دار فیصلے کرتا ہے وہ معاشرے میں رہنما اور قابلِ فخر بنتا ہے۔`,
        contentEn: `Decisions made in fits of anger or panic almost invariably lead to regret. True maturity is choosing calm reason over emotional impulse.

🧭 **4 Principles of Sound Decisions:**
1. **Never Decide in Anger:** Pause, sit down, drink water, and let adrenaline dissipate before responding.
2. **Evaluate Consequences:** Ask: "What will be the impact tomorrow? Will this harm anyone?"
3. **Stand for Truth & Fairness:** Ground decisions in honesty and justice, even when challenging.
4. **Own Mistakes Gracefully:** If an error occurs, acknowledge it with dignity and rectify it promptly.`,
        keyTakeawaysUrdu: [
          'شدید غصے یا جذباتی حالت میں کبھی فوری فیصلہ نہ کریں۔',
          'ہر عمل اور فیصلے کے دور رس نتائج پر پہلے سے غور کریں۔',
          'اپنی غلطی کو کھلے دل سے تسلیم کر کے سدھارنا بہادری اور دانشمندی ہے۔'
        ],
        keyTakeawaysEn: [
          'Never make irreversible commitments or decisions while angry or agitated.',
          'Consider the long-term ripple effects and consequences of your choices.',
          'Acknowledging and fixing mistakes gracefully is the hallmark of true character.'
        ],
        quiz: [
          {
            id: 'ls-b-l5-q1',
            questionUrdu: 'شدید غصے کی حالت میں فیصلہ کرنے سے بچنے کا بہترین طریقہ کیا ہے؟',
            questionEn: 'What is the best way to prevent making poor decisions while furious?',
            optionsUrdu: [
              'خاموش ہو جانا، پانی پینا، اور غصہ ٹھنڈا ہونے کے بعد سوچ سمجھ کر فیصلہ کرنا',
              'فوراً لڑائی اور بدزبانی شروع کر دینا',
              'سامان توڑنا',
              'بغیر سوچے سمجھے بدلہ لینا'
            ],
            optionsEn: [
              'Staying quiet, drinking water, and waiting for calm before deciding',
              'Immediately screaming and fighting',
              'Smashing household items',
              'Acting on impulse for instant revenge'
            ],
            correctIndex: 0,
            explanationUrdu: 'غصہ عقل پر پردہ ڈال دیتا ہے۔ خاموشی اور وقفہ انسان کو ندامت سے بچاتا ہے۔',
            explanationEn: 'Anger clouds judgment; pausing allows rationality to return and prevents regret.'
          },
          {
            id: 'ls-b-l5-q2',
            questionUrdu: 'اگر کسی فیصلے میں آپ سے غلطی ہو جائے تو سب سے بہترین اور باوقار رویہ کیا ہے؟',
            questionEn: 'What is the most dignified response if a decision of yours turns out to be mistaken?',
            optionsUrdu: [
              'غلطی کو کشادہ دلی سے تسلیم کرنا، معذرت کرنا اور اسے درست کرنے کی کوشش کرنا',
              'ضد پر اڑ جانا اور دوسروں پر الزام ڈالنا',
              'جھوٹ بول کر چھپانا',
              'جھگڑا کرنا'
            ],
            optionsEn: [
              'Gracefully acknowledging the error, apologizing, and taking steps to correct it',
              'Stubbornly defending the mistake and blaming others',
              'Covering it up with lies',
              'Starting an argument'
            ],
            correctIndex: 0,
            explanationUrdu: 'غلطی کا اعتراف کر کے اسے سدھارنا بہادری اور اعلیٰ اخلاق کی نشانی ہے۔',
            explanationEn: 'Admitting mistakes and making amends builds character and earns enduring respect.'
          },
          {
            id: 'ls-b-l5-q3',
            questionUrdu: 'کوئی بھی اہم فیصلہ کرتے وقت اپنے آپ سے کون سا سوال پوچھنا ضروری ہے؟',
            questionEn: 'Which question is essential to ask yourself before making an important decision?',
            optionsUrdu: [
              '"کیا اس فیصلے سے کسی کو ناحق نقصان پہنچے گا اور آنے والے کل میں اس کا کیا نتیجہ ہوگا؟"',
              '"کیا اس سے میرا وقتی غصہ نکل جائے گا؟"',
              '"لوگ کیا کہیں گے؟"',
              'کوئی سوال نہ پوچھنا'
            ],
            optionsEn: [
              '"Will this decision cause unfair harm, and what will be its long-term consequence?"',
              '"Will this vent my momentary temper?"',
              '"What will random people say?"',
              'Asking zero questions'
            ],
            correctIndex: 0,
            explanationUrdu: 'نتائج پر پہلے سے غور کرنا دانشمندانہ اور ذمہ دار زندگی کی بنیاد ہے۔',
            explanationEn: 'Forethought regarding consequences is the cornerstone of responsible living.'
          }
        ],
        practicalTask: {
          id: 'ls-b-l5-task',
          titleUrdu: 'عملی مشق: غصے اور دباؤ کو قابو کرنے کا ایک پرامن طریقہ لکھیں',
          titleEn: 'Practical Task: Write Your Personal Strategy for Calming Down',
          instructionsUrdu: 'غصے یا اضطراب کے وقت اپنے آپ کو پرسکون رکھنے کے لیے وہ طریقہ لکھیں جو آپ آزمائیں گے (مثلاً پانی پینا، گہرے سانس لینا، یا خاموش رہنا)۔',
          instructionsEn: 'Write down the personal strategy you commit to using when upset (deep breathing, drinking water, staying silent).',
          deliverableUrdu: 'اپنا پرامن طریقہ درج کریں۔',
          deliverableEn: 'Enter your personal calming strategy.',
          estimatedMinutes: 6
        }
      }
    ],
    quiz: [
      {
        id: 'ls-b-course-q1',
        questionUrdu: 'روزمرہ زندگی کی مہارتوں کا بنیادی مقصد کیا ہے؟',
        questionEn: 'What is the primary purpose of everyday life skills?',
        optionsUrdu: [
          'وقت، گھر، صفائی اور جذباتی فیصلوں کو منظم کر کے ایک پرسکون، بامقصد اور باوقار زندگی گزارنا',
          'صرف دوسروں پر رعب جمانا',
          'بغیر کسی اصول کے زندگی گزارنا',
          'اپنی ذمہ داریاں دوسروں پر ڈالنا'
        ],
        optionsEn: [
          'Organizing time, domestic harmony, cleanliness, and calm decisions to lead a peaceful, dignified life',
          'Dominating and showing off to others',
          'Living without any principles or rules',
          'Shifting all personal burdens onto others'
        ],
        correctIndex: 0,
        explanationUrdu: 'نظم و ضبط، صفائی اور پرسکون فیصلہ سازی ہی ایک کامیاب اور خوشحال انسان کی بنیاد ہے۔',
        explanationEn: 'Discipline, shared responsibility, cleanliness, and sound judgment create a fulfilling life.'
      }
    ],
    practicalTask: {
      id: 'ls-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: روزمرہ نظم و ضبط اور خاندانی تعاون کا چارٹر',
      titleEn: 'Capstone: Personal Routine & Family Cooperation Charter',
      instructionsUrdu: 'اپنے روزانہ کے معمول کا ایک جامع چارٹر بنائیں جس میں صبح کے اوقات، گھر کے کاموں میں حصہ، صفائی کے اصول اور پرامن فیصلے کے اصول درج ہوں۔',
      instructionsEn: 'Create a personal daily routine charter detailing morning priorities, shared domestic chores, cleanliness rules, and calm decision principles.',
      deliverableUrdu: 'اپنا روزمرہ نظم و ضبط کا چارٹر درج کریں۔',
      deliverableEn: 'Enter your personal daily routine charter.',
      estimatedMinutes: 15
    },
    projectDescriptionUrdu: 'اپنے اور اپنے گھر کے لیے روزمرہ وقت کی منصوبہ بندی، باہمی گھریلو ذمہ داریوں اور پرسکون فیصلہ سازی کا رہنما چارٹر تیار کریں۔',
    projectDescriptionEn: 'Draft a personal daily schedule, family cooperation agreement, and calm problem-solving charter.'
  }
];

export const COMMUNITY_POSTS_DATA: CommunityPost[] = [
  {
    id: 'post-1',
    authorName: 'چوہدری بشیر احمد',
    authorAgeGroup: '61-70',
    authorLocation: 'ڈوبے، برنالہ، آزاد کشمیر (Dobay, Barnala)',
    isElder: true,
    titleUrdu: 'گندم اور سرسوں کی روایتی پیداوار بڑھانے کا 40 سالہ تجربہ',
    titleEn: '40 Years of Traditional Mustard & Wheat Crop Wisdom',
    contentUrdu: 'ہمارے علاقے برنالہ کی مٹی میں اگر ہم قدرتی گوبر کی کھاد اور سرسوں کی کھل ملا کر بوائی کریں تو زمین کی زرخیزی کئی سال تک قائم رہتی ہے اور بیماری بھی کم لگتی ہے۔ نوجوان ساتھی کیمیکلز کے بجائے قدرتی طریقے اپنائیں۔',
    contentEn: 'Sharing 40 years of local farming insight in Barnala: Combining organic manure with mustard seed-cake naturally enriches soil and wards off root pests without costly chemical fertilizers.',
    category: 'Agriculture',
    categoryUrdu: 'زراعت و باغبانی',
    likes: 48,
    commentsCount: 12,
    timestamp: '2 گھنٹے پہلے',
    practicalOutcomeUrdu: '3 کسانوں نے اپنے کھیت میں نامیاتی کھاد کا تجربہ شروع کیا۔',
    practicalOutcomeEn: '3 local farmers started testing natural mustard compost.',
  },
  {
    id: 'post-2',
    authorName: 'زینب فاطمہ',
    authorAgeGroup: '16-25',
    authorLocation: 'برنالہ، بھمبر (Barnala, Bhimber)',
    isElder: false,
    titleUrdu: 'کینوا پر گاؤں کے چھوٹے دکانداروں کے لیے بینرز ڈیزائن کیے',
    titleEn: 'Designed Free Banners for 3 Village Grocery Stores on Canva',
    contentUrdu: 'میں نے سیکھو سے کینوا کا کورس مکمل کرنے کے بعد اپنے محلے کی سبزی کی دکان اور کلاتھ اسٹور کے لیے خوبصورت اردو بینرز بنائے۔ ان کے کاروبار میں گاہکوں کا اچھا ردعمل آیا۔',
    contentEn: 'After completing the Canva mobile design module on Seekho, I created customized Urdu advertising banners for local tailors and grocers in our village.',
    category: 'Graphic Design',
    categoryUrdu: 'گرافک ڈیزائننگ',
    likes: 62,
    commentsCount: 19,
    timestamp: '5 گھنٹے پہلے',
    practicalOutcomeUrdu: 'مقامی دکانوں کی تشہیر بہتر ہوئی۔',
    practicalOutcomeEn: 'Local shops received vibrant digital banners.',
  },
  {
    id: 'post-3',
    authorName: 'طارق محمود ایڈووکیٹ',
    authorAgeGroup: '46-60',
    authorLocation: 'ڈوبے روڈ، برنالہ (Dobay Road, Barnala)',
    isElder: false,
    titleUrdu: 'گاؤں کے پرائمری اسکول میں شمسی لائٹس اور پینے کا صاف پانی',
    titleEn: 'Community Solar Lights & Clean Water at Dobay Primary School',
    contentUrdu: 'ہم نے نوجوانوں کے ساتھ مل کر فنڈ جمع کیا اور اسکول کے واٹر فلٹر کی مرمت کروائی اور 2 سولر پلیٹیں لگائیں تاکہ گرمیوں میں بچوں کے پنکھے چلتے رہیں۔',
    contentEn: 'A volunteer team of youth and elders came together to repair the community primary school water filter and installed 2 solar panels for student classroom fans.',
    category: 'Community Development',
    categoryUrdu: 'برادری کی خدمت',
    likes: 85,
    commentsCount: 24,
    timestamp: '1 دن پہلے',
    practicalOutcomeUrdu: '120 طلباء کو صاف پانی اور پنکھوں کی سہولت میسر ہوئی۔',
    practicalOutcomeEn: '120 children gained uninterrupted clean drinking water and cooling.',
  },
];

export const AREA_TOPICS_DATA: AreaTopic[] = [
  {
    id: 'area-water-dobay',
    titleUrdu: 'پینے کے صاف پانی اور فلٹریشن پلانٹ کی بحالی',
    titleEn: 'Clean Drinking Water & Filtration Plant Maintenance',
    category: 'Water',
    categoryUrdu: 'پانی',
    icon: 'Droplets',
    status: 'In Progress',
    statusUrdu: 'کام جاری ہے',
    descriptionUrdu: 'ڈوبے اور ملحقہ ڈھانڈری کے علاقوں میں زیرِ زمین میٹھے پانی کے ذرائع اور باقاعدہ کلورین ٹیسٹنگ کا پروگرام۔',
    descriptionEn: 'Restoring community filtration filters and ensuring regular microbial testing for households across Dobay and surrounding hamlets.',
    volunteersCount: 18,
    actionPlanUrdu: [
      'فلٹر کارٹریجز کی ماہانہ تبدیلی',
      'پانی کے نمونوں کا لیبارٹری ٹیسٹ',
      'گھریلو پانی کی بچت پر آگاہی واک',
    ],
    actionPlanEn: [
      'Monthly filter cartridge swap',
      'Periodic water quality testing',
      'Household water conservation campaign',
    ],
  },
  {
    id: 'area-youth-skills',
    titleUrdu: 'برنالہ یوتھ ڈیجیٹل و ٹیکنیکل اسکلز سینٹر',
    titleEn: 'Barnala Youth Digital & Technical Skills Hub',
    category: 'Youth skills',
    categoryUrdu: 'نوجوانوں کی مہارتیں',
    icon: 'Laptop',
    status: 'Proposed',
    statusUrdu: 'تجویز کردہ',
    descriptionUrdu: 'گاؤں کی کمیونٹی بلڈنگ میں مفت وائی فائی اور 5 لیپ ٹاپس کا انتظام تاکہ نوجوان آن لائن فری لانسنگ اور اے آئی سیکھ سکیں۔',
    descriptionEn: 'Setting up a community room with shared broadband and 5 workstations for youth vocational training and remote freelancing.',
    volunteersCount: 24,
    actionPlanUrdu: [
      'پرانے کام کے لیپ ٹاپس اور مانیٹرز کا عطیہ اکٹھا کرنا',
      'ہفتہ وار 2 دن کینوا، ایکسل اور اے آئی کی کلاسز',
      'بزرگوں کی رہنمائی میں اخلاقی تربیت کے سیشنز',
    ],
    actionPlanEn: [
      'Collecting donated workstations',
      'Bi-weekly digital literacy workshops',
      'Elder mentoring sessions on professional ethics',
    ],
  },
  {
    id: 'area-tree-plantation',
    titleUrdu: 'سرسبز ڈوبے: 5000 پھل دار و سایہ دار درختوں کی شجرکاری',
    titleEn: 'Green Dobay: 5,000 Fruit & Shade Tree Plantation',
    category: 'Environment',
    categoryUrdu: 'ماحولیات و شجرکاری',
    icon: 'TreePine',
    status: 'In Progress',
    statusUrdu: 'کام جاری ہے',
    descriptionUrdu: 'نہر کے کناروں، قبرستان اور سڑک کے دونوں اطراف زیتون، نیم، امرود اور شہتوت کے پودے لگانے کی مشترکہ مہم۔',
    descriptionEn: 'Planting native olive, neem, guava, and mulberry saplings along canal banks and roadsides to curb erosion and improve air.',
    volunteersCount: 36,
    actionPlanUrdu: [
      'محکمہ جنگلات اور مقامی نرسری سے پودے حاصل کرنا',
      'ہر گھر کو 2 پھل دار پودے تقسیم کرنا',
      'بچوں کو پودوں کی گود لینے (Adoption) کا ٹاسک دینا',
    ],
    actionPlanEn: [
      'Procuring saplings from local nurseries',
      'Distributing 2 fruit trees per home',
      'Involving school kids in plant adoption and watering',
    ],
  },
  {
    id: 'area-health-education',
    titleUrdu: 'بنیادی طبی امداد اور شوگر/بلڈ پریشر آگاہی کیمپ',
    titleEn: 'First Aid & Diabetes/Hypertension Mobile Screening Camp',
    category: 'Health',
    categoryUrdu: 'صحت',
    icon: 'HeartPulse',
    status: 'Proposed',
    statusUrdu: 'تجویز کردہ',
    descriptionUrdu: 'ماہانہ بنیادوں پر مقامی ڈاکٹرز اور پیرامیڈیکس کی مدد سے بزرگوں کے مفت چیک اپ اور ادویات کا انتظام۔',
    descriptionEn: 'Monthly volunteer clinics with local doctors for senior checkups, blood pressure monitoring, and health education.',
    volunteersCount: 14,
    actionPlanUrdu: [
      'مقامی ڈسپنسری میں مفت چیک اپ کا انتظام',
      'شوگر اور بلڈ پریشر چیک کرنے کی بنیادی ٹریننگ',
      'ہنگامی ایمبولینس ہیلپ لائن کا قیام',
    ],
    actionPlanEn: [
      'Hosting weekend free screening camps',
      'Training 10 youth in basic CPR & vitals check',
      'Maintaining an emergency blood donors registry',
    ],
  },
];

export const ELDER_WISDOM_DATA: ElderWisdom[] = [
  {
    id: 'elder-1',
    elderName: 'بابا محمد اسماعیل',
    age: 78,
    locationUrdu: 'ڈوبے، تحصیل برنالہ',
    locationEn: 'Dobay, Tehsil Barnala',
    fieldUrdu: 'روایتی جڑی بوٹیاں اور موسمی کاشتکاری',
    fieldEn: 'Herbal Remedies & Weather Observation',
    titleUrdu: 'برسات کے موسم میں فصلوں کی حفاظت اور پہاڑی ندی نالوں کا پانی ذخیرہ کرنا',
    titleEn: 'Rainwater Harvesting & Protecting Monsoon Crops',
    storyUrdu: 'ہمارے زمانے میں نہ ٹیوب ویل تھے نہ پکی نہریں۔ ہم بارش کے پانی کو کچے بند بنا کر روکتے تھے اور وہی پانی سردیوں تک کنوؤں کو زندہ رکھتا تھا۔ نوجوانوں سے التماس ہے کہ سیمنٹ کی تعمیرات کے ساتھ ساتھ پانی کو زمین میں جذب ہونے کا راستہ دیں۔',
    storyEn: 'Decades ago before electric tube wells, we created stepped earthen bunds to trap monsoon runoffs. That simple practice kept groundwater wells replenished throughout winter. Modern development must respect natural percolation.',
    practicalAdviceUrdu: 'اپنے کھیت کے کنارے پر چھوٹا سا تالاب یا ریچارج پٹ بنائیں تاکہ بارش کا پانی ضائع ہونے کے بجائے زمین کے نیچے جائے۔',
    practicalAdviceEn: 'Build small retention swales or soakage pits on the lower edge of your plot to recharge aquifers naturally.',
  },
  {
    id: 'elder-2',
    elderName: 'محترمہ زبیدہ بیگم',
    age: 72,
    locationUrdu: 'برنالہ خاص، آزاد کشمیر',
    locationEn: 'Barnala Khas, Azad Kashmir',
    fieldUrdu: 'دستکاری، کشیدہ کاری اور گھریلو معیشت',
    fieldEn: 'Traditional Hand Embroidery & Household Economics',
    titleUrdu: 'گھر کے بجٹ میں برکت اور پرانے کپڑوں کی روایتی رلی (Quilts) بنانا',
    titleEn: 'Blessings in Simple Budgeting & Crafting Patchwork Quilts',
    storyUrdu: 'ہمارے گھروں میں کوئی چیز ضائع نہیں جاتی تھی۔ پرانے کپڑوں کو ملا کر اتنی خوبصورت رضائیاں اور دسترخوان بنتے تھے جو برسوں چلتے تھے۔ سادگی میں ہی اصل خوشحالی اور سکون ہے۔',
    storyEn: 'In our households, no piece of fabric was wasted. We stitched intricate, durable patchwork quilts and runners that lasted for decades. Genuine financial freedom lies in mindful contentment and craft.',
    practicalAdviceUrdu: 'فضول خرچی سے بچیں اور ہاتھ کے ہنر کو عزت دیں؛ یہ انسان کو کبھی کسی کا محتاج نہیں ہونے دیتا۔',
    practicalAdviceEn: 'Value manual craftsmanship; possessing a practical physical skill ensures you will never be helpless.',
  },
];

export const OPPORTUNITIES_DATA: Opportunity[] = [
  {
    id: 'opp-1',
    titleUrdu: 'کینوا اور سوشل میڈیا اسسٹنٹ (ریموٹ / گھر بیٹھے)',
    titleEn: 'Canva & Social Media Assistant (Remote / Demo)',
    type: 'Freelancing',
    typeUrdu: 'فری لانسنگ (نمونہ)',
    organizationUrdu: 'کشمیر ہینڈی کرافٹس ڈیجیٹل اسٹور',
    organizationEn: 'Kashmir Crafts Digital Store',
    locationUrdu: 'ریموٹ / گھر سے کام',
    locationEn: 'Remote / Work from Home',
    remoteAvailable: true,
    stipendOrSalary: 'PKR 15,000 - 25,000 / ماہانہ',
    deadline: '2026-09-15',
    descriptionUrdu: 'روزانہ 1 سے 2 گھنٹے فیس بک اور واٹس ایپ کے لیے اردو اور انگریزی پروڈکٹ کارڈز ڈیزائن کرنے کے لیے محنتی نوجوان درکار ہیں۔',
    descriptionEn: 'Looking for a part-time creator to design 2 social banners daily on Canva for a local artisanal online shop.',
    requirementsUrdu: ['بنیادی کینوا یا فوٹوشاپ کا استعمال', 'اردو ٹائپنگ میں مہارت', 'روزانہ 1 گھنٹہ وقت'],
    requirementsEn: ['Basic Canva proficiency', 'Urdu & English text layout', '1 hour daily commitment'],
  },
  {
    id: 'opp-2',
    titleUrdu: 'سولر پینل تنصیب و دیکھ بھال اپرنٹس شپ',
    titleEn: 'Solar Installation & Maintenance Apprenticeship',
    type: 'Apprenticeship',
    typeUrdu: 'شاگردی / ہنر مندی (نمونہ)',
    organizationUrdu: 'برنالہ گرین انرجی سروسز',
    organizationEn: 'Barnala Green Energy Solutions',
    locationUrdu: 'برنالہ، بھمبر روڈ',
    locationEn: 'Barnala, Bhimber Road',
    remoteAvailable: false,
    stipendOrSalary: 'PKR 12,000 / وظیفہ + ٹریننگ سرٹیفکیٹ',
    deadline: '2026-09-30',
    descriptionUrdu: '3 ماہ کی عملی فیلڈ ٹریننگ جس میں انورٹرز کی وائرنگ، بیٹری کی دیکھ بھال اور چھت پر پینل فٹنگ سکھائی جائے گی۔',
    descriptionEn: 'Hands-on 3-month field apprentice training covering solar mounting, inverter wiring, and battery safety.',
    requirementsUrdu: ['میٹرک یا بنیادی دلچسپی', 'محنتی اور وقت کا پابند', 'عمر 18 تا 30 سال'],
    requirementsEn: ['Basic matric education', 'Punctual and eager to learn technical trade', 'Age 18-30'],
  },
  {
    id: 'opp-3',
    titleUrdu: 'کچن گارڈننگ و نامیاتی سبزیاں سپلائر مائیکرو گرانٹ',
    titleEn: 'Micro-Grant for Organic Kitchen Gardening Stall',
    type: 'Business Opportunity',
    typeUrdu: 'کاروباری موقع (نمونہ)',
    organizationUrdu: 'سیکھو برادری فنڈ',
    organizationEn: 'Seekho Community Micro-Grant',
    locationUrdu: 'ڈوبے / برنالہ',
    locationEn: 'Dobay / Barnala',
    remoteAvailable: false,
    stipendOrSalary: 'PKR 30,000 تک کا بلا سود کاروباری سامان',
    deadline: '2026-10-10',
    descriptionUrdu: 'خواتین اور بزرگوں کے لیے گھریلو نامیاتی سبزیوں، پودینہ، لیموں یا بیجوں کا چھوٹا اسٹال لگانے کے لیے مفت بیج اور کھاد کی فراہمی۔',
    descriptionEn: 'Seed-funding and equipment kit to help local families start a micro organic herb stand in the local market.',
    requirementsUrdu: ['کچن گارڈننگ کورس کی تکمیل', 'گھر میں گملوں یا کھلی مٹی کی جگہ', 'خدمت کا جذبہ'],
    requirementsEn: ['Completion of Kitchen Gardening course on Seekho', 'Courtyard/rooftop space', 'Dedication to organic quality'],
  },
];

export const AGE_GROUP_RECOMMENDATIONS: Record<AgeGroup, { titleUrdu: string; titleEn: string; skillsUrdu: string[]; skillsEn: string[]; icon: string }> = {
  '10-15': {
    titleUrdu: '۱۰ تا ۱۵ سال: تخلیق، بنیادی کمپیوٹر اور اخلاقی تربیت',
    titleEn: 'Ages 10–15: Creativity, Digital Literacy & Character',
    skillsUrdu: [
      'ڈیجیٹل لٹریسی و انٹرنیٹ کی حفاظت',
      'کینوا پر ڈرائنگ و ڈیزائننگ',
      'مسائل کا حل اور تخلیقی سوچ',
      'بنیادی مصنوعی ذہانت (AI) کا تعارف',
      'اخلاق، سچائی اور بزرگوں کا احترام',
      'ٹیم ورک اور کھیلوں کی روح',
    ],
    skillsEn: [
      'Digital Literacy & Internet Safety',
      'Canva & Creative Drawing',
      'Problem Solving & Logic',
      'Basic AI Literacy',
      'Character, Honesty & Ethics',
      'Teamwork & Communication',
    ],
    icon: 'Baby',
  },
  '16-25': {
    titleUrdu: '۱۶ تا ۲۵ سال: کیریئر، ٹیکنالوجی اور خود مختاری',
    titleEn: 'Ages 16–25: Career, Tech Skills & Freelancing',
    skillsUrdu: [
      'مصنوعی ذہانت و پرامپٹ انجینئرنگ',
      'گرافک ڈیزائننگ و ویڈیو ایڈیٹنگ',
      'آن لائن فری لانسنگ اور ریموٹ جابز',
      'سولر توانائی اور جدید الیکٹریکل ہنر',
      'انگریزی بول چال اور دفتری خط و کتابت',
      'لیڈرشپ اور کیریئر کی منصوبہ بندی',
    ],
    skillsEn: [
      'AI & Practical Prompting',
      'Graphic Design & Video Editing',
      'Freelancing & Global Remote Gigs',
      'Solar Energy & Technical Trades',
      'Professional English & Public Speaking',
      'Leadership & Career Strategy',
    ],
    icon: 'GraduationCap',
  },
  '26-45': {
    titleUrdu: '۲۶ تا ۴۵ سال: کاروبار، مالیاتی شعور اور خاندان کی خوشحالی',
    titleEn: 'Ages 26–45: Business, Financial Mastery & Family Welfare',
    skillsUrdu: [
      'مقامی کاروبار اور آمدن میں اضافہ',
      'مالیاتی بجٹ اور محفوظ سرمایہ کاری',
      'جدید نامیاتی زراعت و ہائیڈروپونکس',
      'کام میں AI ٹولز کے ذریعے وقت کی بچت',
      'بچوں کی مثبت پرورش اور خاندانی سکون',
      'برادری کی فلاح و قیادت',
    ],
    skillsEn: [
      'Micro-Business Growth & Marketing',
      'Financial Budgeting & Smart Savings',
      'Modern High-Yield Agriculture',
      'AI Productivity for Professionals',
      'Positive Parenting & Life Harmony',
      'Community Organizing & Civic Impact',
    ],
    icon: 'Briefcase',
  },
  '46-60': {
    titleUrdu: '۴۶ تا ۶۰ سال: ڈیجیٹل سہولت، صحت مند طرزِ زندگی اور مشورہ',
    titleEn: 'Ages 46–60: Digital Comfort, Healthy Lifestyle & Mentorship',
    skillsUrdu: [
      'اسمارٹ فون پر بلوں اور بینکنگ کا محفوظ طریقہ',
      'گھریلو باغبانی اور صحت بخش غذا',
      'نوجوان نسل کی رہنمائی اور تربیت',
      'آن لائن فراڈ سے بچاؤ اور پرائیویسی',
      'گاؤں اور محلے کے تنازعات کا حل',
      'ذاتی تجربات کو محفوظ کرنا',
    ],
    skillsEn: [
      'Safe Smartphone Banking & WhatsApp Use',
      'Kitchen Gardening & Wellness Lifestyle',
      'Youth Mentoring & Guidance',
      'Scam Prevention & Online Privacy',
      'Community Mediation & Conflict Resolution',
      'Documenting Professional Life Lessons',
    ],
    icon: 'Users',
  },
  '61-70': {
    titleUrdu: '۶۱ تا ۷۰ سال: آسان ٹیکنالوجی، روایتی علم اور باوقار زندگی',
    titleEn: 'Ages 61–70: Easy Tech, Traditional Wisdom & Active Aging',
    skillsUrdu: [
      'بڑے حروف کے ساتھ اسمارٹ فون کا آسان استعمال',
      'یوٹیوب و واٹس ایپ پر دینی و معلوماتی مواد دیکھنا',
      'روایتی دیسی حکمت اور جڑی بوٹیوں کا علم بانٹنا',
      'خاندانی شجرہ اور مقامی تاریخ ریکارڈ کرنا',
      'نرم ورزشیں اور ذہنی شادابی',
      'محلے کے بچوں کو اخلاقی کہانیاں سنانا',
    ],
    skillsEn: [
      'Large-Text Simple Smartphone Setup',
      'Safe Video Calling with Grandchildren & Family',
      'Sharing Traditional Agro & Herbal Wisdom',
      'Preserving Oral History & Family Trees',
      'Gentle Mobility & Mental Vitality',
      'Moral Storytelling for Grandchildren',
    ],
    icon: 'Heart',
  },
  '70+': {
    titleUrdu: '۷۰ سال سے زائد: ہمارے بزرگ، ہمارا سرمایہ اور استاد',
    titleEn: 'Ages 70+: Our Respected Elders, Master Teachers & Storytellers',
    skillsUrdu: [
      'صوتی پیغامات (Voice Messages) بھیجنا اور سننا',
      'اپنی زندگی کی داستان کو وائس ریکارڈنگ میں محفوظ کرنا',
      'پوتوں، پوتیوں اور نئی نسل کو دعا و مشورہ دینا',
      'روحانی سکون اور یادِ الٰہی کے طریقے',
      'برادری کے معتبر پنچائتی فیصلے اور مصالحت',
    ],
    skillsEn: [
      'Voice-Only Messaging & Listening',
      'Oral Memoir & History Recording',
      'Blessing & Guiding the Next Generations',
      'Spiritual Well-being & Inner Peace',
      'Respected Elder Mediation in Village Affairs',
    ],
    icon: 'Sparkles',
  },
};

export const UI_TRANSLATIONS = {
  ur: {
    appName: 'سیکھو — Seekho',
    tagline: 'زندگی سیکھیں، بہتر بنائیں، عمل کریں',
    visionStep1: 'سیکھیں',
    visionStep2: 'مشق کریں',
    visionStep3: 'خود کو سنواریں',
    visionStep4: 'خاندان کی مدد',
    visionStep5: 'برادری کی خدمت',
    visionStep6: 'ملک کی ترقی',
    visionStep7: 'دنیا کے کام آئیں',
    navHome: 'ہوم',
    navMyLearning: 'میری تعلیم',
    navSkills: 'مہارتیں',
    navAITeacher: 'AI استاد',
    navCommunity: 'برادری',
    navMyArea: 'میرا علاقہ',
    navProfile: 'پروفائل',
    greetingMorning: 'صبح بخیر',
    greetingAfternoon: 'دوپہر بخیر',
    greetingEvening: 'شام بخیر',
    searchPlaceholder: 'آج آپ کیا نیا سیکھنا چاہتے ہیں؟',
    todaysLesson: 'آج کا سبق',
    todaysPracticalTask: 'آج کا عملی کام',
    myLearningProgress: 'میری تعلیمی پیش رفت',
    recommendedSkillsForYou: 'میرے لیے بہترین Skills',
    askAITeacher: 'AI استاد سے پوچھیں',
    communityHighlight: 'برادری کا نمایاں کارنامہ',
    elderKnowledgeTitle: 'ہمارے بزرگ، ہمارا علم',
    pilotAreaLabel: 'پائلٹ ایریا: ڈوبے، برنالہ، آزاد کشمیر',
    startLearning: 'سیکھنا شروع کریں',
    continueLesson: 'سبق جاری رکھیں',
    submitTask: 'عملی کام جمع کروائیں',
    takeQuiz: 'کوئز حل کریں',
    completed: 'مکمل شدہ',
    inProgress: 'جاری',
    streakDays: 'دنوں کا سلسلہ (Streak)',
    learningPoints: 'پوائنٹس',
    enrolledCourses: 'زیرِ تعلیم کورسز',
    completedProjects: 'عملی پروجیکٹس',
    allCategories: 'تمام شعبہ جات',
    filterByAge: 'عمر کے لحاظ سے فلٹر',
    elderTeacherRole: 'بزرگ ہمارے استاد اور رہنما ہیں',
    fontSizeToggle: 'تحریر کا سائز',
    switchLanguage: 'English',
    onboardingTitle: 'سیکھو میں خوش آمدید',
    onboardingSubtitle: 'آئیے آپ کے لیے بہترین تعلیمی راستہ منتخب کریں',
    nameLabel: 'آپ کا مبارک نام',
    ageGroupLabel: 'عمر کا گروپ',
    locationLabel: 'شہر / گاؤں / علاقہ',
    timeLabel: 'روزانہ کتنا وقت دے سکتے ہیں؟',
    goalsLabel: 'آپ کا بنیادی مقصد کیا ہے؟',
    saveProfile: 'پروفائل محفوظ کریں اور شروع کریں',
    opportunitiesTitle: 'روزگار اور عملی مواقع',
    opportunitiesNote: 'نوٹ: یہ تمام مواقع نمونے (Demo) کے طور پر فراہم کیے گئے ہیں۔',
    safetyDisclaimer: 'سیکھو میں آپ کی رازداری اور بچوں کی حفاظت ہماری اولین ترجیح ہے۔',
  },
  en: {
    appName: 'Seekho',
    tagline: 'Lifelong Learning, Practical Skills & Personal Growth',
    visionStep1: 'Learn',
    visionStep2: 'Practice',
    visionStep3: 'Improve Self',
    visionStep4: 'Help Family',
    visionStep5: 'Help Community',
    visionStep6: 'Help Country',
    visionStep7: 'Help the World',
    navHome: 'Home',
    navMyLearning: 'My Learning',
    navSkills: 'Skills',
    navAITeacher: 'AI Teacher',
    navCommunity: 'Community',
    navMyArea: 'My Area',
    navProfile: 'Profile',
    greetingMorning: 'Good Morning',
    greetingAfternoon: 'Good Afternoon',
    greetingEvening: 'Good Evening',
    searchPlaceholder: 'What do you want to learn today?',
    todaysLesson: "Today's Lesson",
    todaysPracticalTask: "Today's Practical Task",
    myLearningProgress: 'My Learning Progress',
    recommendedSkillsForYou: 'Recommended Skills for You',
    askAITeacher: 'Ask AI Teacher',
    communityHighlight: 'Community Highlight',
    elderKnowledgeTitle: 'Our Elders, Our Knowledge',
    pilotAreaLabel: 'Pilot Area: Dobay, Barnala, Azad Kashmir',
    startLearning: 'Start Learning',
    continueLesson: 'Continue Lesson',
    submitTask: 'Submit Practical Task',
    takeQuiz: 'Take Interactive Quiz',
    completed: 'Completed',
    inProgress: 'In Progress',
    streakDays: 'Day Streak',
    learningPoints: 'Skill Points',
    enrolledCourses: 'Enrolled Courses',
    completedProjects: 'Completed Projects',
    allCategories: 'All Categories',
    filterByAge: 'Filter by Age',
    elderTeacherRole: 'Our Elders are Both Cherished Learners & Master Mentors',
    fontSizeToggle: 'Font Size',
    switchLanguage: 'اردو',
    onboardingTitle: 'Welcome to Seekho',
    onboardingSubtitle: "Let's craft your personalized lifelong learning journey",
    nameLabel: 'Your Full Name',
    ageGroupLabel: 'Age Group',
    locationLabel: 'City / Village / Local Area',
    timeLabel: 'Available Learning Time Daily',
    goalsLabel: 'What is your primary learning goal?',
    saveProfile: 'Save Profile & Begin',
    opportunitiesTitle: 'Opportunities & Apprenticeships',
    opportunitiesNote: 'Note: These listings are realistic sample opportunities for demonstration.',
    safetyDisclaimer: 'User privacy, data safety, and child protection are foundational to Seekho.',
  },
};

export const DEFAULT_USER_PROFILE: import('../types').UserProfile = {
  name: 'علی احمد',
  ageGroup: '16-25',
  educationLevel: 'Intermediate / Matric',
  country: 'Pakistan',
  region: 'Azad Kashmir',
  city: 'Barnala / Bhimber',
  village: 'ڈوبے (Dobay)',
  role: 'طالب علم و محنتی نوجوان',
  currentSkills: ['موبائل استعمال', 'بنیادی انگریزی'],
  interests: ['مصنوعی ذہانت', 'گرافک ڈیزائننگ', 'زراعت', 'برادری کی خدمت'],
  goals: 'نئے ہنر سیکھ کر اپنے خاندان اور برادری کا ہاتھ بٹانا',
  timePerDay: '30 منٹ',
  preferredLanguage: 'ur',
  device: 'Smartphone',
  completedAssessment: true,
  streakDays: 7,
  points: 175,
  enrolledCourseIds: ['ai-basics-mobile', 'canva-designing'],
  completedLessonIds: ['ai-l1', 'canva-l1'],
  completedProjectIds: ['ai-basics-mobile'],
  completedDailyPlanDayIds: [],
  completedIslamicLessonIds: ['islamic-day-1'],
};

