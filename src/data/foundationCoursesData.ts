import { Course } from '../types';

export const FOUNDATION_COURSES_DATA: Course[] = [
  // ==================================================
  // 1. COMMUNITY SERVICE & SOCIAL UPLIFT
  // ==================================================
  {
    id: 'community-service-uplift-basics',
    titleUrdu: 'کمیونٹی سروس اور برادری کی فلاح',
    titleEn: 'Community Service & Social Uplift',
    descriptionUrdu: 'گاؤں اور محلے کے حقیقی مسائل کو سمجھنے، خدمتِ خلق کا جذبہ پیدا کرنے، باہمی ٹیم بنانے اور صفائی، تعلیم و فلاح کے عملی منصوبے بنانے کا 5 اسباق پر مشتمل بنیادی کورس۔',
    descriptionEn: 'A 5-lesson foundational guide to understanding community needs, fostering service spirit, building volunteer teams, and executing impactful local welfare projects.',
    category: 'Community Development',
    categoryUrdu: 'برادری اور علاقائی ترقی',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.0,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'HeartHandshake',
    coverGradient: 'from-teal-700 via-emerald-800 to-slate-900',
    realLifePurpose: {
      personalBenefitUrdu: 'دل میں سکون، لوگوں کا حقیقی پیار و دعا اور معاشرے میں ایک بااعتماد اور بااثر شخصیت بننے کا موقع۔',
      personalBenefitEn: 'Inner peace, community trust and prayers, and developing an impactful, respected personality.',
      familyHelpUrdu: 'خاندان میں خدمت اور احترام کا کلچر فروغ پاتا ہے اور آنے والی نسلیں باکردار بنتی ہیں۔',
      familyHelpEn: 'Fosters a culture of service and empathy at home for future generations.',
      communityHelpUrdu: 'محلے کے پانی، صفائی، راستوں اور مستحق افراد کی مدد باہمی اتحاد سے خود بخود ممکن ہو جاتی ہے۔',
      communityHelpEn: 'Solves neighborhood water, sanitation, path, and relief challenges through collective unity.',
      societalBenefitUrdu: 'معاشرہ غیروں کا محتاج رہنے کے بجائے اپنی مدد آپ کے تحت خود کفیل، پرامن اور خوشحال بنتا ہے۔',
      societalBenefitEn: 'Creates a self-reliant, empathetic, and united society built on voluntary civic responsibility.'
    },
    lessons: [
      {
        id: 'cs-b-l1',
        titleUrdu: '1. کمیونٹی کے مسئلے کو سمجھنا اور خدمتِ خلق کا جذبہ',
        titleEn: '1. Understanding Community Needs & Spirit of Service',
        durationMinutes: 12,
        contentUrdu: `خدمتِ خلق کا مطلب ہے کہ انسان صرف اپنی ذات اور ذاتی مفاد تک محدود نہ رہے بلکہ اپنے محلے، گاؤں اور ارد گرد کے انسانوں کے دکھ سکھ کو اپنا سمجھے۔\n\nکسی بھی برادری میں تبدیلی لانے کا پہلا قدم یہ ہوتا ہے کہ ہم تنقید یا شکوہ کرنے کے بجائے یہ سمجھیں کہ اصل مسئلہ کیا ہے؟ کیا محلے میں گلیوں کی صفائی کا مسئلہ ہے؟ کیا پینے کا صاف پانی میسر نہیں؟ یا اسکول جانے والے غریب بچوں کے پاس کاپیاں کتابیں نہیں ہیں؟\n\nجب ہم مسئلے کو اس کی جڑ سے سمجھتے ہیں اور خالص نیت سے حل تلاش کرتے ہیں، تو اللہ تعالیٰ اس کام میں برکت اور لوگوں کے دلوں میں مدد کا جذبہ پیدا فرما دیتا ہے۔`,
        contentEn: `Community service means expanding your circle of care beyond personal interests to empathize with the needs and struggles of your neighbors and village.\n\nThe first step to social impact is not complaining, but diagnosing the root challenge: Is there a lack of clean water? Are neighborhood streets uncleaned? Or do underprivileged children lack study materials?\n\nWhen we understand the underlying problem with sincerity, collective solutions emerge naturally and people readily join the cause.`,
        keyTakeawaysUrdu: [
          'خدمتِ خلق کی بنیاد خالص نیت اور بغیر کسی دکھاوے کے لوگوں کے کام آنا ہے۔',
          'تبدیلی کا آغاز شکوہ کرنے کے بجائے مسئلے کی صحیح نشاندہی اور چھوٹی پہل سے ہوتا ہے۔',
          'ایک چھوٹا سا مثبت قدم بھی پورے محلے میں ہمدردی اور امید کا چراغ جلا سکتا ہے۔'
        ],
        keyTakeawaysEn: [
          'The essence of community service is sincere contribution without ostentation.',
          'Transformation starts with diagnosing root issues rather than complaining.',
          'Even a modest positive initiative can inspire hope across a neighborhood.'
        ],
        quiz: [
          {
            id: 'cs-b-l1-q1',
            questionUrdu: 'کمیونٹی سروس اور خدمتِ خلق کا اصل مقصد کیا ہے؟',
            questionEn: 'What is the primary purpose of community service?',
            optionsUrdu: [
              'خلوصِ نیت کے ساتھ لوگوں کے مسائل حل کرنا اور انسانیت کی بھلائی کے لیے کام کرنا',
              'صرف اپنی تصویریں بنوانا اور شہرت حاصل کرنا',
              'دوسروں پر احسان جتلانا',
              'صرف پیسے کمانا'
            ],
            optionsEn: [
              'Solving real problems sincerely and uplifting the wellbeing of fellow humans',
              'Seeking fame and taking promotional photos',
              'Reminding others of personal favors',
              'Purely generating monetary profit'
            ],
            correctIndex: 0,
            explanationUrdu: 'خدمتِ خلق کی روح اخلاص اور انسانیت کے لیے حقیقی درد ہے۔',
            explanationEn: 'The spirit of community service lies in sincerity and compassion for human upliftment.'
          },
          {
            id: 'cs-b-l1-q2',
            questionUrdu: 'محلے کے کسی مسئلے کو حل کرنے کا پہلا دانشمندانہ قدم کیا ہے؟',
            questionEn: 'What is the first sensible step to resolve a community issue?',
            optionsUrdu: [
              'مسئلے کو گہرائی سے سمجھنا اور متعلقہ افراد سے بات چیت کرنا',
              'بغیر سمجھے شور مچانا اور غصہ کرنا',
              'دوسروں کو برا بھلا کہنا',
              'لاتعلق ہو کر بیٹھ جانا'
            ],
            optionsEn: [
              'Understanding the problem deeply and speaking directly with affected people',
              'Making loud complaints without understanding facts',
              'Blaming others angrily',
              'Staying completely indifferent'
            ],
            correctIndex: 0,
            explanationUrdu: 'مسئلے کی درست تشخیص ہی پائیدار حل کی طرف لے جاتی ہے۔',
            explanationEn: 'Accurate problem diagnosis is the bedrock of lasting community solutions.'
          },
          {
            id: 'cs-b-l1-q3',
            questionUrdu: 'کیا خدمتِ خلق کے لیے بہت زیادہ دولت کا ہونا ضروری ہے؟',
            questionEn: 'Is immense personal wealth necessary to perform community service?',
            optionsUrdu: [
              'نہیں، وقت دینا، علم بانٹنا، مسکرا کر ملنا اور ہمت بندھانا بھی عظیم خدمت ہے',
              'ہاں، کروڑوں روپے کے بغیر کچھ نہیں ہو سکتا',
              'صرف حکومت ہی خدمت کر سکتی ہے',
              'عام انسان کبھی کسی کے کام نہیں آ سکتا'
            ],
            optionsEn: [
              'No, volunteering time, sharing knowledge, encouraging others, and offering kindness are great service',
              'Yes, nothing is possible without millions of rupees',
              'Only the government can serve',
              'An ordinary person can never assist anyone'
            ],
            correctIndex: 0,
            explanationUrdu: 'وقت، محنت، اچھی سوچ اور اخلاق ہر انسان کے پاس خدمت کے قیمتی وسائل ہیں۔',
            explanationEn: 'Time, effort, constructive ideas, and empathy are precious assets anyone can contribute.'
          }
        ],
        practicalTask: {
          id: 'cs-b-l1-task',
          titleUrdu: 'عملی مشق: اپنے محلے یا گاؤں کے 2 بنیادی مسائل اور ایک آسان حل لکھیں',
          titleEn: 'Practical Task: Identify 2 Neighborhood Challenges and One Simple Solution',
          instructionsUrdu: 'اپنے ارد گرد غور کریں اور کوئی سے 2 ایسے مسائل لکھیں جو آپ کے محلے میں موجود ہیں، اور ساتھ یہ بتائیں کہ عام لوگ مل کر اسے کیسے حل کر سکتے ہیں۔',
          instructionsEn: 'Observe your neighborhood and write 2 prominent challenges along with a simple community-driven solution.',
          deliverableUrdu: 'محلے کے 2 مسائل اور ممکنہ حل درج کریں۔',
          deliverableEn: 'Write 2 community challenges and proposed remedy.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'cs-b-l2',
        titleUrdu: '2. محلے کی ضروریات اور بنیادی مسائل کی نشاندہی',
        titleEn: '2. Identifying Neighborhood Needs',
        durationMinutes: 15,
        contentUrdu: `کسی بھی بستی میں سب سے اہم کام یہ ہوتا ہے کہ ترجیحات کا تعین کیا جائے۔ تمام مسائل ایک ساتھ حل نہیں ہو سکتے۔\n\nضروریات کی تین بڑی اقسام ہوتی ہیں:\n۱. بنیادی ضرورتیں (پینے کا پانی، نکاسی آب، بنیادی طبی امداد)\n۲. تعلیمی و سماجی ضرورتیں (اسکول، لائبریری، نوجوانوں کے ہنر)\n۳. ماحول و خوبصورتی (درخت، راستوں کی صفائی، اسٹریٹ لائٹس)\n\nجب ہم بزرگوں، نوجوانوں اور دکانداروں سے مل کر بات کرتے ہیں، تو سب سے بڑی ترجیح خود بخود واضح ہو جاتی ہے۔`,
        contentEn: `In every village and neighborhood, setting priorities is vital because not all challenges can be tackled at once.\n\nCommunity needs usually fall into three tiers: essential survival (clean drinking water, drainage, first aid), educational/developmental (schools, libraries, youth skills), and environmental (tree plantation, street cleanliness, safety).\n\nConversations with elders, shopkeepers, and youth reveal the most urgent shared priority.`,
        keyTakeawaysUrdu: [
          'مسائل کی ترجیح بندی کرنا وسائل کا بہترین استعمال یقینی بناتا ہے۔',
          'بزرگوں اور اہل محلہ کے مشورے سے کام کرنے میں برکت اور اتفاق پیدا ہوتا ہے۔',
          'سب سے زیادہ متاثر ہونے والے افراد کی آواز کو سب سے پہلے سننا چاہیے۔'
        ],
        keyTakeawaysEn: [
          'Prioritizing challenges ensures the most efficient use of volunteer resources.',
          'Consulting local elders and residents creates unity and shared ownership.',
          'Always listen first to the most vulnerable members of the community.'
        ],
        quiz: [
          {
            id: 'cs-b-l2-q1',
            questionUrdu: 'کمیونٹی پراجیکٹ شروع کرنے سے پہلے سب سے اہم چیز کیا ہے؟',
            questionEn: 'What is essential before launching a community project?',
            optionsUrdu: [
              'اہل محلہ کے ساتھ مل کر سب سے زیادہ ضروری مسئلے کی ترجیح طے کرنا',
              'بغیر کسی سے پوچھے اکیلے کام شروع کر دینا',
              'غیر ضروری چیزوں پر وقت ضائع کرنا',
              'کوئی منصوبہ بندی نہ کرنا'
            ],
            optionsEn: [
              'Collaborating with residents to agree on the highest-priority urgent need',
              'Starting blindly alone without consulting anyone',
              'Wasting time on low-priority items',
              'Zero planning'
            ],
            correctIndex: 0,
            explanationUrdu: 'مشاورت اور ترجیح بندی ہی فلاحی کام کو کامیاب بناتی ہے۔',
            explanationEn: 'Consultation and prioritization make social projects sustainable.'
          }
        ],
        practicalTask: {
          id: 'cs-b-l2-task',
          titleUrdu: 'عملی مشق: محلے کے کسی بزرگ یا پڑوسی سے 5 منٹ بات چیت',
          titleEn: 'Practical Task: 5-Minute Consultation with a Local Elder/Neighbor',
          instructionsUrdu: 'اپنے محلے کے کسی پڑوسی سے دریافت کریں کہ ان کے خیال میں محلے کا سب سے اہم مسئلہ کیا ہے اور ان کا اہم نقطہ ایک جملے میں نوٹ کریں۔',
          instructionsEn: 'Ask a neighbor or elder what they feel is the top neighborhood priority and note down their insight.',
          deliverableUrdu: 'پڑوسی کی رائے اور اہم نکتہ درج کریں۔',
          deliverableEn: 'Note down neighbor insight.',
          estimatedMinutes: 7
        }
      },
      {
        id: 'cs-b-l3',
        titleUrdu: '3. باہمی تعاون اور کمیونٹی ٹیم بنانا',
        titleEn: '3. Building Collaborative Community Teams',
        durationMinutes: 15,
        contentUrdu: `ایک اکیلا انسان جتنا بھی مخلص ہو، بڑا کام اکیلے نہیں کر سکتا۔ اصل طاقت "ہم" میں ہوتی ہے، "میں" میں نہیں۔\n\nایک چھوٹی فلاحی ٹیم بنانے کے لیے ۳ قسم کے ساتھی درکار ہوتے ہیں:\n۱. سوچنے اور منصوبہ بنانے والے (Plan Makers)\n۲. محنت اور عملی دوڑ دھوپ کرنے والے (Action Takers)\n۳. وسائل اور لوگوں کو جوڑنے والے (Connectors)\n\nجب ہر شخص کو اس کی دلچسپی اور صلاحیت کے مطابق ذمہ داری دی جاتی ہے تو کام بوجھ نہیں بلکہ خوشی بن جاتا ہے۔`,
        contentEn: `No single individual, no matter how sincere, can uplift an entire community alone. Real strength is built in collective unity.\n\nA great volunteer group unites three strengths: planners who map strategy, doers who execute on the ground, and connectors who unite people and mobilize resources.\n\nAssigning roles matching personal strengths turns social work into joyful fulfillment.`,
        keyTakeawaysUrdu: [
          'کامیاب کمیونٹی کام کی جان ٹیم ورک اور باہمی احترام ہے۔',
          'ہر انسان میں کوئی نہ کوئی خاص خوبی ہوتی ہے جس سے فائدہ اٹھایا جا سکتا ہے۔',
          'شفافیت اور کھلی بات چیت سے ٹیم کا اعتماد کبھی نہیں ٹوٹتا۔'
        ],
        keyTakeawaysEn: [
          'Teamwork and mutual respect are the heartbeat of effective community action.',
          'Every volunteer brings unique strengths and value to the cause.',
          'Transparency and open dialogue maintain unbroken team trust.'
        ],
        quiz: [
          {
            id: 'cs-b-l3-q1',
            questionUrdu: 'ایک فلاحی ٹیم میں سب سے زیادہ ضروری اخلاقی خوبی کیا ہے؟',
            questionEn: 'What is the most critical quality inside a volunteer team?',
            optionsUrdu: [
              'باہمی اعتماد، دیانت داری، اور ایک دوسرے کی رائے کا احترام',
              'ایک دوسرے پر حکم چلانا',
              'اپنے آپ کو سب سے برتر سمجھنا',
              'تنقید کر کے دوسروں کی ہمت توڑنا'
            ],
            optionsEn: [
              'Mutual trust, integrity, and deep respect for each other’s contributions',
              'Bossing others around',
              'Acting superior to teammates',
              'Demoralizing volunteers through harsh criticism'
            ],
            correctIndex: 0,
            explanationUrdu: 'باہمی احترام اور دیانت ہی ٹیم کو مضبوط اور کامیاب بناتی ہے۔',
            explanationEn: 'Respect and integrity keep community teams bonded and resilient.'
          }
        ],
        practicalTask: {
          id: 'cs-b-l3-task',
          titleUrdu: 'عملی مشق: اپنے ۲ دوستوں یا ساتھیوں کا نام لکھیں جنہیں آپ خدمتِ خلق میں شامل کر سکتے ہیں',
          titleEn: 'Practical Task: Identify 2 Friends or Companions for Community Action',
          instructionsUrdu: 'وہ ۲ مخلص ساتھی سوچیں جو آپ کے ساتھ مل کر کوئی نیک اور فلاحی کام کرنے کے لیے تیار ہوں۔',
          instructionsEn: 'Write the names of 2 dependable friends who share a heart for community service.',
          deliverableUrdu: 'دوستوں کے نام اور ان کی ایک خوبی درج کریں۔',
          deliverableEn: 'List 2 potential team companions and their strengths.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'cs-b-l4',
        titleUrdu: '4. صفائی، شجرکاری اور فلاحی کاموں کا عملی منصوبہ',
        titleEn: '4. Action Planning for Cleanliness, Greening & Welfare',
        durationMinutes: 15,
        contentUrdu: `اچھی نیت کے ساتھ ساتھ ایک صاف ستھرا اور قابلِ عمل پلان بنانا ضروری ہوتا ہے۔\n\nایک اچھے ایکشن پلان میں ۴ بنیادی چیزیں واضح ہونی چاہئیں:\n۱. کیا کام کرنا ہے؟ (مثلاً: گلی سے کچرا صاف کرنا یا ۱۰ پودے لگانا)\n۲. کون کرے گا؟ (ٹیم ممبرز کی ذمہ داری)\n۳. کب ہوگا؟ (دن اور وقت کا تعین)\n۴. کن چیزوں کی ضرورت ہے؟ (جھاڑو، کوڑے دان، پودے یا پانی کا انتظام)\n\nجب چھوٹا سا منصوبہ بھی منظم ہو، تو نتیجہ حیران کن اور دیرپا ہوتا ہے۔`,
        contentEn: `Sincerity must be paired with structured execution to turn vision into reality.\n\nA practical action plan specifies 4 key aspects: What is the task (e.g. cleaning a street or planting 10 saplings), Who is responsible (team roles), When will it happen (date and time), and What tools are required (brooms, bins, water, saplings).\n\nEven modest organized plans yield lasting community impact.`,
        keyTakeawaysUrdu: [
          'منصوبہ بندی وقت اور محنت کے ضیاع سے بچاتی ہے۔',
          'صفائی اور شجرکاری صدقہ جاریہ اور ماحول کے لیے شفا ہیں۔',
          'کام مکمل ہونے کے بعد شکریہ ادا کرنا اور حوصلہ افزائی کرنا لازمی ہے۔'
        ],
        keyTakeawaysEn: [
          'Clear planning prevents wasted volunteer hours and fatigue.',
          'Cleanliness and tree plantation are enduring charity and health for society.',
          'Always celebrate milestones and thank team members sincerely.'
        ],
        quiz: [
          {
            id: 'cs-b-l4-q1',
            questionUrdu: 'ایک کامیاب صفائی مہم کا لازمی حصہ کیا ہے؟',
            questionEn: 'What is essential for a successful street cleanliness drive?',
            optionsUrdu: [
              'کوڑا ٹھکانے لگانے اور مستقل کوڑے دان رکھنے کا باقاعدہ بندوبست ہونا',
              'صرف کچرا ایک جگہ سے اٹھا کر دوسرے پڑوسی کے آگے پھینک دینا',
              'بغیر اوزاروں کے کام کرنا',
              'کوئی تاریخ مقرر نہ کرنا'
            ],
            optionsEn: [
              'Arranging proper waste disposal and permanent dustbins for sustainability',
              'Just dumping waste in front of another neighbor',
              'Working without proper tools',
              'Not setting a schedule'
            ],
            correctIndex: 0,
            explanationUrdu: 'پائیدار انتظام ہی محلے کو ہمیشہ کے لیے صاف ستھرا رکھتا ہے۔',
            explanationEn: 'Sustainable waste disposal infrastructure ensures enduring cleanliness.'
          }
        ],
        practicalTask: {
          id: 'cs-b-l4-task',
          titleUrdu: 'عملی مشق: ایک چھوٹے فلاحی کام کا ۳ نکاتی خاکہ تیار کریں',
          titleEn: 'Practical Task: Draft a 3-Point Action Plan for a Welfare Task',
          instructionsUrdu: 'اپنے گھر کے باہر کی صفائی، شجرکاری یا کسی ضرورت مند کی مدد کے لیے ایک مختصر ۳ نکاتی منصوبہ تحریر کریں۔',
          instructionsEn: 'Write a concise 3-point plan for a neighborhood clean-up, tree plantation, or relief task.',
          deliverableUrdu: 'اپنا مختصر ایکشن پلان درج کریں۔',
          deliverableEn: 'Write your 3-step action plan.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'cs-b-l5',
        titleUrdu: '5. مستقل اثر، شفافیت اور خدمت میں اخلاص',
        titleEn: '5. Sustainable Impact, Transparency & Sincerity',
        durationMinutes: 15,
        contentUrdu: `فلاحی کام میں سب سے بڑا امتحان "تسلسل اور اخلاص" ہے۔ ایک دن جوش میں آ کر کام کرنا آسان ہے، لیکن مہینوں اور سالوں تک بغیر ستائش کے خدمت جاری رکھنا اصل کمال ہے۔\n\nخدمت کو ہمیشہ زندہ رکھنے کے لیے ۲ سنہری اصول یاد رکھیں:\n۱. مالی اور انتظامی شفافیت: اگر کوئی چندہ یا سامان جمع ہو تو پائی پائی کا حساب سب کے سامنے رکھیں۔\n۲. احسان جتانے سے پرہیز: مدد لینے والے کی عزتِ نفس کا اس قدر خیال رکھیں کہ اس کا سر نہ جھکے۔\n\nیہی وہ خدمت ہے جو دنیا میں امن اور آخرت میں درجات کا سبب بنتی ہے۔`,
        contentEn: `The ultimate test of community service is consistency and sincerity. A one-off day of enthusiasm is easy; enduring service across months without seeking praise is true leadership.\n\nTwo golden rules ensure longevity: absolute financial transparency (account for every penny openly) and protecting the dignity of those receiving aid without ostentation or reminder.\n\nThis pure service earns lasting respect in society and divine reward.`,
        keyTakeawaysUrdu: [
          'پائی پائی کی مالی شفافیت لوگوں کا اعتماد ہمیشہ قائم رکھتی ہے۔',
          'مدد لینے والے کی عزتِ نفس کی حفاظت کرنا فرض ہے۔',
          'مستقل اور چھوٹا نیک عمل وقتی بڑے مظاہرے سے کہیں افضل ہے۔'
        ],
        keyTakeawaysEn: [
          'Complete financial transparency preserves unbreakable public trust.',
          'Protecting the dignity and privacy of those assisted is paramount.',
          'Consistent modest good deeds far surpass sporadic grand displays.'
        ],
        quiz: [
          {
            id: 'cs-b-l5-q1',
            questionUrdu: 'فلاحی کام میں مالی شفافیت کیوں اتنی اہم ہے؟',
            questionEn: 'Why is financial transparency so crucial in community service?',
            optionsUrdu: [
              'تاکہ لوگوں کا اعتماد برقرار رہے اور ہر پائی کا صحیح استعمال یقینی ہو',
              'تاکہ لوگ خوفزدہ ہو جائیں',
              'اس کی کوئی ضرورت نہیں ہوتی',
              'صرف اپنے پاس حساب چھپانا چاہیے'
            ],
            optionsEn: [
              'To sustain community trust and guarantee every single rupee reaches those in need',
              'To intimidate people',
              'It has no relevance',
              'Records should be kept hidden'
            ],
            correctIndex: 0,
            explanationUrdu: 'دیانت اور شفافیت ہی سماجی اعتماد کا ستون ہیں۔',
            explanationEn: 'Integrity and transparency are the pillars of community trust.'
          }
        ],
        practicalTask: {
          id: 'cs-b-l5-task',
          titleUrdu: 'عملی مشق: خدمتِ خلق کا ذاتی منشور (My Service Commitment)',
          titleEn: 'Practical Task: My Personal Service Commitment',
          instructionsUrdu: 'ایک جملے میں لکھیں کہ آپ اپنی زندگی میں کس فلاحی یا سماجی مقصد کے لیے مستقل کچھ وقت وقف کرنے کا ارادہ رکھتے ہیں۔',
          instructionsEn: 'Write a single sentence declaring what social cause you commit to volunteering for regularly.',
          deliverableUrdu: 'اپنا ذاتی منشور درج کریں۔',
          deliverableEn: 'Enter your personal service commitment.',
          estimatedMinutes: 5
        }
      }
    ],
    quiz: [
      {
        id: 'cs-b-course-q1',
        questionUrdu: 'کمیونٹی سروس کا سب سے اہم فلسفہ کیا ہے؟',
        questionEn: 'What is the core philosophy of community service?',
        optionsUrdu: [
          'باہمی اتحاد، اخلاص اور باوقار انداز میں اپنی بستی کے مسائل خود حل کرنا',
          'صرف دوسروں پر تنقید کرنا',
          'صرف اپنے فائدے کے لیے کام کرنا',
          'لوگوں کو احسان جتلانا'
        ],
        optionsEn: [
          'Collective unity, sincerity, and dignified problem-solving to uplift our own community',
          'Merely criticizing others',
          'Working solely for self-gain',
          'Belittling others by reminding them of favors'
        ],
        correctIndex: 0,
        explanationUrdu: 'اپنی مدد آپ، اخلاص اور باہمی محبت ہی کمیونٹی کی روح ہے۔',
        explanationEn: 'Self-reliance, sincerity, and mutual empathy are the soul of community uplift.'
      }
    ],
    practicalTask: {
      id: 'cs-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: اپنے محلے کے لیے ایک عملی فلاحی مہم کا مکمل خاکہ',
      titleEn: 'Capstone: Comprehensive Community Action Blueprint',
      instructionsUrdu: 'اپنے محلے کے لیے صفائی، شجرکاری، یا ضرورت مندوں کی مدد کا ایک جامع خاکہ بنائیں جس میں ترجیحی مسئلہ، رضاکار ٹیم، وقت اور ضروری اوزار درج ہوں۔',
      instructionsEn: 'Create a complete community action plan covering priority issue, volunteer roles, timeline, and tools.',
      deliverableUrdu: 'اپنا مکمل کمیونٹی ایکشن پلان درج کریں۔',
      deliverableEn: 'Submit your community action blueprint.',
      estimatedMinutes: 15
    },
    projectDescriptionUrdu: 'اپنے محلے کے لیے صفائی، شجرکاری یا تعلیمی و فلاحی خدمت کا باقاعدہ عملی منصوبہ تیار کریں۔',
    projectDescriptionEn: 'Draft an actionable neighborhood welfare and development blueprint.'
  },

  // ==================================================
  // 2. QURAN, ETHICS & CHARACTER BUILDING
  // ==================================================
  {
    id: 'quran-character-ethics-basics',
    titleUrdu: 'قرآن، اخلاقیات اور کردار سازی',
    titleEn: 'Quran, Ethics & Character Building',
    descriptionUrdu: 'قرآن و سنت کی روشنی میں اعلیٰ اخلاق، سچائی، امانت داری، غصے پر قابو، والدین و پڑوسیوں کے حقوق اور پاکیزہ زندگی کی بنیادی رہنمائی۔',
    descriptionEn: 'A 5-lesson Quranic ethics guide cultivating truthfulness, trustworthiness, patience, anger control, family rights, and noble moral character in everyday life.',
    category: 'Character & Leadership',
    categoryUrdu: 'کردار سازی و اخلاقیات',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.0,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'Sparkles',
    coverGradient: 'from-amber-700 via-amber-800 to-slate-900',
    realLifePurpose: {
      personalBenefitUrdu: 'باطنی سکون، دل کا اطمینان اور ہر شخص کی نظر میں غیر متزلزل عزت و وقار۔',
      personalBenefitEn: 'Inner tranquility, conscience clarity, and unwavering respect in the community.',
      familyHelpUrdu: 'گھر میں امن، محبت، احترام اور بچوں کے لیے بہترین اخلاقی نمونہ۔',
      familyHelpEn: 'Peace, harmony, deep mutual respect, and a role model for children at home.',
      communityHelpUrdu: 'معاملات میں انصاف اور سچائی سے محلے میں جھگڑے ختم اور محبتیں پروان چڑھتی ہیں۔',
      communityHelpEn: 'Eliminates disputes, building neighborhood trust and social harmony through justice and honesty.',
      societalBenefitUrdu: 'ایک دیانت دار، ہمدرد اور بااخلاق معاشرہ تشکیل پاتا ہے جہاں ہر فرد محفوظ محسوس کرتا ہے۔',
      societalBenefitEn: 'Constructs an honest, compassionate, and ethical society where every soul feels valued and safe.'
    },
    lessons: [
      {
        id: 'qc-b-l1',
        titleUrdu: '1. کردار اور اخلاق کی اہمیت — قرآن و سنت کی روشنی میں',
        titleEn: '1. Importance of Character in Quran & Sunnah',
        durationMinutes: 12,
        contentUrdu: `دینِ اسلام میں حسنِ اخلاق اور پاکیزہ کردار کو سب سے بڑا درجہ دیا گیا ہے۔ نبی کریم ﷺ نے فرمایا: "تم میں سے بہترین وہ ہے جس کے اخلاق سب سے اچھے ہوں۔"\n\nکردار وہ خوشبو ہے جو انسان کے جانے کے بعد بھی باقی رہتی ہے۔ اس کا تعلق صرف بڑی باتوں سے نہیں، بلکہ ہماری روزمرہ گفتگو، بولنے کے انداز، غصے پر قابو اور دوسروں کے ساتھ پیش آنے سے ہے۔\n\nجب انسان اپنے دل کو کینہ، حسد اور تکبر سے پاک کر کے اخلاص اور عاجزی اپناتا ہے تو اللہ تعالیٰ دنیا اور آخرت دونوں میں اس کا مقام بلند فرماتا ہے۔`,
        contentEn: `In Islamic teachings, good character and moral excellence hold the supreme rank. The Prophet ﷺ said: "The best among you are those who have the best manners and character."\n\nCharacter is an enduring fragrance. It is not defined by big speeches, but by our daily speech, gentle demeanor, self-restraint, and benevolence.\n\nPurifying the heart from envy and arrogance elevates a person in this world and the hereafter.`,
        keyTakeawaysUrdu: [
          'حسنِ اخلاق میزان میں سب سے وزنی نیکی ہے۔',
          'سچی کامیابی دوسروں کے دل جیتنے اور ان کے ساتھ نرمی برتنے میں ہے۔',
          'چھوٹی چھوٹی باتوں میں عاجزی اور مسکراہٹ اپنانا سنت ہے۔'
        ],
        keyTakeawaysEn: [
          'Noble character is among the heaviest deeds on the divine scale.',
          'True success is winning hearts through kindness and humility.',
          'A smiling face and gentle words in daily life are blessed practices.'
        ],
        quiz: [
          {
            id: 'qc-b-l1-q1',
            questionUrdu: 'اسلام میں سب سے بہترین انسان کون ہے؟',
            questionEn: 'Who is the best among people according to the Hadith?',
            optionsUrdu: [
              'جس کے اخلاق اور معاملات سب سے اچھے اور پاکیزہ ہوں',
              'جس کے پاس سب سے زیادہ دولت ہو',
              'جو صرف دوسروں پر تنقید کرے',
              'جو دوسروں کو حقیر سمجھے'
            ],
            optionsEn: [
              'The one with the best moral conduct, sincerity, and fair dealings',
              'The one possessing the most wealth',
              'The one who solely criticizes others',
              'The one looking down upon people'
            ],
            correctIndex: 0,
            explanationUrdu: 'حسنِ اخلاق ہی ایمان کا اصل جوہر اور نچوڑ ہے۔',
            explanationEn: 'Noble character is the core essence and fruit of sincere faith.'
          }
        ],
        practicalTask: {
          id: 'qc-b-l1-task',
          titleUrdu: 'عملی مشق: آج کے دن نرمی اور مسکراہٹ کے ساتھ ۳ افراد سے بات کریں',
          titleEn: 'Practical Task: Speak with Warmth and a Gentle Smile to 3 People',
          instructionsUrdu: 'آج کے دن اپنے گھر والوں، دکاندار یا پڑوسی سے خاص طور پر مسکرا کر اور ادب کے ساتھ پیش آئیں اور اس کا احساس ایک جملے میں لکھیں۔',
          instructionsEn: 'Consciously speak with genuine warmth and respect to 3 people today and record your experience in one sentence.',
          deliverableUrdu: 'اپنا مشاہدہ درج کریں۔',
          deliverableEn: 'Write your observation.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'qc-b-l2',
        titleUrdu: '2. سچائی، دیانت داری اور امانت داری',
        titleEn: '2. Truthfulness, Honesty & Trustworthiness',
        durationMinutes: 15,
        contentUrdu: `سچائی دل کو اطمینان اور زندگی کو روشنی بخشتی ہے۔ دیانت داری کا مطلب ہے کہ انسان تنہائی میں بھی ویسا ہی باکردار رہے جیسا وہ محفل میں نظر آتا ہے۔\n\nامانت صرف پیسے رکھنے کا نام نہیں، بلکہ وقت کی پابندی، کسی کے راز کی حفاظت اور کام کو پوری محنت سے انجام دینا بھی امانت ہے۔`,
        contentEn: `Truthfulness brings peace to the heart and light to life. Integrity means being the same upright person in private as you appear in public.\n\nTrust is not limited to money; keeping promises, guarding confidences, and doing honest work are vital trusts.`,
        keyTakeawaysUrdu: [
          'سچائی انسان کو نجات دلاتی ہے اور جھوٹ برباد کرتا ہے۔',
          'کسی کے اعتماد اور راز کو کبھی ٹھیس نہ پہنچائیں۔'
        ],
        keyTakeawaysEn: [
          'Truthfulness delivers salvation; falsehood brings destruction.',
          'Never betray a confidence or trust placed in you.'
        ],
        quiz: [
          {
            id: 'qc-b-l2-q1',
            questionUrdu: 'دیانت داری کی اصل پہچان کیا ہے؟',
            questionEn: 'What is the true test of integrity?',
            optionsUrdu: [
              'تنہائی میں بھی گناہ اور بے ایمانی سے بچنا جب کوئی دیکھنے والا نہ ہو',
              'صرف کیمرے کے سامنے اچھا بننا',
              'لوگوں کے سامنے دکھاوا کرنا',
              'بات بات پر جھوٹی قسمیں کھانا'
            ],
            optionsEn: [
              'Staying honest in private when no human eye is watching',
              'Acting good only in front of cameras',
              'Showing off to gain praise',
              'Swearing falsely'
            ],
            correctIndex: 0,
            explanationUrdu: 'تنہائی کی پاکیزگی اور تقویٰ ہی اصل ایمان اور کردار ہے۔',
            explanationEn: 'Uprightness in solitude is the true mark of character and God-consciousness.'
          }
        ],
        practicalTask: {
          id: 'qc-b-l2-task',
          titleUrdu: 'عملی مشق: سچائی اور امانت داری کا عہد',
          titleEn: 'Practical Task: Pledge of Truth & Integrity',
          instructionsUrdu: 'اپنے دل میں نیت کریں کہ آج کسی بھی مشکل صورتحال میں جھوٹ کا سہارا نہیں لیں گے اور اپنا عہد درج کریں۔',
          instructionsEn: 'Make a firm intention to remain truthful in every encounter today and write your pledge.',
          deliverableUrdu: 'اپنا سچائی کا عہد درج کریں۔',
          deliverableEn: 'Enter your truthfulness pledge.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'qc-b-l3',
        titleUrdu: '3. غصے پر قابو، معاف کرنا اور حسنِ سلوک',
        titleEn: '3. Controlling Anger, Forgiveness & Good Demeanor',
        durationMinutes: 15,
        contentUrdu: `طاقتور وہ نہیں جو کشتی میں دوسرے کو پچھاڑ دے، بلکہ طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔\n\nجب کوئی تلخ بات کہے تو جواب میں بدزبانی کرنے کے بجائے خاموشی اور درگزر کا راستہ اختیار کریں۔ معاف کرنے والے کی عزت اللہ بڑھا دیتا ہے۔`,
        contentEn: `The strong is not the one who overpowers opponents in wrestling, but the one who controls himself during anger.\n\nWhen provoked, choosing silence and forgiveness rather than bitter retaliation earns immense dignity and divine reward.`,
        keyTakeawaysUrdu: [
          'غصے میں خاموش رہنا اور پانی پینا حکمت ہے۔',
          'درگزر کرنا کمزوری نہیں بلکہ بلند حوصلگی ہے۔'
        ],
        keyTakeawaysEn: [
          'Silence and calm during anger are supreme wisdom.',
          'Forgiveness is not weakness; it is the courage of the noble.'
        ],
        quiz: [
          {
            id: 'qc-b-l3-q1',
            questionUrdu: 'غصہ آنے کی صورت میں نبوی رہنمائی کیا ہے؟',
            questionEn: 'What is the prophetic advice when anger arises?',
            optionsUrdu: [
              'تعوذ پڑھنا، خاموش ہو جانا، بیٹھ جانا یا وضو کر لینا',
              'فوراً سامان توڑنا',
              'گالیاں دینا',
              'جھگڑا بڑھانا'
            ],
            optionsEn: [
              'Seek refuge in God, remain silent, sit down, or perform ablution',
              'Break household items',
              'Use abusive language',
              'Escalate fighting'
            ],
            correctIndex: 0,
            explanationUrdu: 'خاموشی اور وضو غصے کی آگ کو بجھا دیتے ہیں۔',
            explanationEn: 'Silence and ablution cool down the heat of anger.'
          }
        ],
        practicalTask: {
          id: 'qc-b-l3-task',
          titleUrdu: 'عملی مشق: کسی زیادتی کرنے والے کو دل سے معاف کرنے کی نیت',
          titleEn: 'Practical Task: Sincere Intention to Forgive Someone',
          instructionsUrdu: 'کسی ایسے شخص کو یاد کر کے دل سے معاف کر دیں جس نے آپ کا دل دکھایا ہو، اور اللہ کی رضا طلب کریں۔',
          instructionsEn: 'Consciously forgive someone who hurt you in the past purely for the sake of peace and divine pleasure.',
          deliverableUrdu: 'معافی اور درگزر کا احساس درج کریں۔',
          deliverableEn: 'Write your reflection on forgiveness.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'qc-b-l4',
        titleUrdu: '4. والدین، بزرگوں اور پڑوسیوں کے حقوق',
        titleEn: '4. Rights of Parents, Elders & Neighbors',
        durationMinutes: 15,
        contentUrdu: `والدین کی خدمت اور ان کے آگے عاجزی سے پیش آنا اللہ کی رضا کا سب سے بڑا ذریعہ ہے۔ قرآن میں والدین کے آگے "اُف" تک کہنے سے منع فرمایا گیا ہے۔\n\nاسی طرح پڑوسیوں کے حقوق اتنے اہم ہیں کہ ان کا خیال رکھنا، ان کی خیریت پوچھنا اور تکلیف نہ دینا ایمان کا تقاضا ہے۔`,
        contentEn: `Serving parents and lowering wings of humility before them is the greatest path to divine pleasure.\n\nLikewise, neighbors have solemn rights—inquiry after their wellbeing, sharing meals, and preventing harm are fundamental requisites of faith.`,
        keyTakeawaysUrdu: [
          'والدین کے سامنے نرمی اور ادب اختیار کرنا فرض ہے۔',
          'پڑوسی کو تکلیف سے بچانا اور ان کی مدد کرنا ایمان کی نشانی ہے۔'
        ],
        keyTakeawaysEn: [
          'Gentleness and deep reverence towards parents are paramount duties.',
          'Protecting neighbors from harm and assisting them is a hallmark of true faith.'
        ],
        quiz: [
          {
            id: 'qc-b-l4-q1',
            questionUrdu: 'والدین کے ساتھ گفتگو کا کون سا انداز قرآن نے سکھایا ہے؟',
            questionEn: 'What manner of conversation with parents does the Quran instruct?',
            optionsUrdu: [
              'انتہائی ادب، احترام اور نرم لہجے میں بات کرنا',
              'چیخ کر بولنا',
              'جھنجھلا کر انکار کرنا',
              'ان کی بات کاٹنا'
            ],
            optionsEn: [
              'Speaking with utmost reverence, respect, and a gentle, honoring tone',
              'Shouting loudly',
              'Rejecting angrily with irritation',
              'Interrupting disrespectfully'
            ],
            correctIndex: 0,
            explanationUrdu: 'والدین کا ادب اور خدمت دونوں جہانوں کی کامیابی ہے۔',
            explanationEn: 'Honoring and serving parents is the key to eternal and worldly bliss.'
          }
        ],
        practicalTask: {
          id: 'qc-b-l4-task',
          titleUrdu: 'عملی مشق: والدین کے ہاتھ چومنا یا پڑوسی کا حال دریافت کرنا',
          titleEn: 'Practical Task: Honor Parents or Inquire on a Neighbor',
          instructionsUrdu: 'آج والدین کے ہاتھ یا پیشانی چومیں یا کسی قریبی پڑوسی کا حال پوچھ کر دعا دیں۔',
          instructionsEn: 'Honor your parents today or visit/call a neighbor to inquire about their wellbeing.',
          deliverableUrdu: 'اپنا نیک عمل درج کریں۔',
          deliverableEn: 'Write about your action.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'qc-b-l5',
        titleUrdu: '5. اخلاص، خدمت اور روزمرہ زندگی میں مثبت کردار',
        titleEn: '5. Sincerity, Service & Positive Daily Living',
        durationMinutes: 15,
        contentUrdu: `اعمال کا دارومدار نیتوں پر ہے۔ جب ہر کام اللہ کی خوشنودی اور بندوں کے فائدے کے لیے کیا جائے تو عام دنیاوی کام بھی عبادت بن جاتے ہیں۔\n\nاپنے کردار کو ایسا بنائیں کہ لوگ آپ سے مل کر محفوظ اور پرسکون محسوس کریں، اور آپ کے وجود سے نیکی کی خوشبو پھیلے۔`,
        contentEn: `All deeds are judged by intentions. When daily actions are performed with pure sincerity for divine pleasure and human benefit, regular life transforms into continuous worship.\n\nCultivate a character so noble that people feel safe, uplifted, and comforted in your presence.`,
        keyTakeawaysUrdu: [
          'خلوصِ نیت چھوٹے عمل کو پہاڑ جتنا وزنی بنا دیتا ہے۔',
          'مثبت کردار ہی دنیا کا سب سے بڑا اور پائیدار سرمایہ ہے۔'
        ],
        keyTakeawaysEn: [
          'Pure sincerity magnifies modest good deeds into mountainous reward.',
          'Positive moral character is the greatest and most enduring asset.'
        ],
        quiz: [
          {
            id: 'qc-b-l5-q1',
            questionUrdu: 'نیکی کا عمل اللہ کے ہاں کب قبول ہوتا ہے؟',
            questionEn: 'When is a good deed accepted by God?',
            optionsUrdu: [
              'جب وہ خالص نیت اور سنت کے مطابق کیا جائے بغیر کسی ریاکاری کے',
              'جب سوشل میڈیا پر لائکس لینے کے لیے کیا جائے',
              'جب دوسروں پر رعب جمانے کے لیے ہو',
              'بغیر کسی نیت کے'
            ],
            optionsEn: [
              'When performed with sincere intention for God without ostentation',
              'When done solely to gather social media likes',
              'When performed to show dominance',
              'Without any intention'
            ],
            correctIndex: 0,
            explanationUrdu: 'اخلاص ہی ہر نیکی کی روح اور قبولیت کی شرط ہے۔',
            explanationEn: 'Sincerity is the soul of all virtue and the condition of acceptance.'
          }
        ],
        practicalTask: {
          id: 'qc-b-l5-task',
          titleUrdu: 'عملی مشق: خاموش نیکی کا ایک عمل انجام دیں',
          titleEn: 'Practical Task: Perform One Hidden Good Deed',
          instructionsUrdu: 'ایک ایسی نیکی کریں جس کی خبر صرف آپ کو اور اللہ کو ہو (مثلاً راستے سے پتھر ہٹانا یا کسی کا کام کر دینا)۔',
          instructionsEn: 'Perform a single good deed in complete secrecy known only to you and God.',
          deliverableUrdu: 'نیکی کی نوعیت (بغیر نام کے) درج کریں۔',
          deliverableEn: 'Write your private reflection.',
          estimatedMinutes: 5
        }
      }
    ],
    quiz: [
      {
        id: 'qc-b-course-q1',
        questionUrdu: 'قرآنی اخلاقیات کا اصل ثمر کیا ہے؟',
        questionEn: 'What is the primary fruit of Quranic ethics?',
        optionsUrdu: [
          'دل کا سکون، دیانت دارانہ معاملات اور بندوں کے ساتھ حسنِ سلوک',
          'صرف زبانی دعوے کرنا',
          'تکبر اور غرور',
          'دوسروں کو حقیر جاننا'
        ],
        optionsEn: [
          'Inner tranquility, fair dealings, and gracious conduct toward humanity',
          'Empty verbal claims',
          'Arrogance and pride',
          'Despising others'
        ],
        correctIndex: 0,
        explanationUrdu: 'حسنِ اخلاق ہی انسان کو دونوں جہانوں میں سرخرو کرتا ہے۔',
        explanationEn: 'Noble character ensures dignity and peace in both worlds.'
      }
    ],
    practicalTask: {
      id: 'qc-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: ذاتی اخلاقی منشور اور روزمرہ محاسبہ چارٹ',
      titleEn: 'Capstone: Personal Ethics Charter & Daily Reflection Log',
      instructionsUrdu: 'اپنے لیے روزانہ کے ۵ اخلاقی اصول طے کریں: سچائی، نرم لہجہ، والدین کی خدمت، غصے پر قابو اور نیت کا اخلاص۔',
      instructionsEn: 'Define 5 personal daily moral rules: truthfulness, soft tone, honoring parents, patience, and sincerity.',
      deliverableUrdu: 'اپنا اخلاقی منشور درج کریں۔',
      deliverableEn: 'Submit your personal ethics charter.',
      estimatedMinutes: 15
    },
    projectDescriptionUrdu: 'قرآن و سنت کی روشنی میں اپنا ۵ نکاتی ذاتی اخلاقی منشور اور روزانہ کا محاسبہ فارم تیار کریں۔',
    projectDescriptionEn: 'Draft your 5-point Quranic ethics pledge and daily self-accountability plan.'
  },

  // ==================================================
  // 3. LEADERSHIP & COMMUNITY IMPACT
  // ==================================================
  {
    id: 'leadership-community-impact-basics',
    titleUrdu: 'قیادت اور بااثر رہنمائی کی بنیادی سمجھ',
    titleEn: 'Basics of Leadership & Community Impact',
    descriptionUrdu: 'قیادت، دیانت دارانہ فیصلہ سازی، ٹیم کی حوصلہ افزائی، تنازعات کے حل اور خادم بن کر رہنمائی کرنے کا 5 اسباق پر مشتمل مکمل کورس۔',
    descriptionEn: 'A 5-lesson guide to servant leadership, sound decision making, motivating volunteer teams, conflict resolution, and leading positive change.',
    category: 'Character & Leadership',
    categoryUrdu: 'قیادت و رہنمائی',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.0,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'Target',
    coverGradient: 'from-indigo-800 via-purple-900 to-slate-950',
    realLifePurpose: {
      personalBenefitUrdu: 'اعتماد، دانشمندانہ سوچ اور زندگی کے ہر شعبے میں مسائل کا جرات سے سامنا کرنے کی صلاحیت۔',
      personalBenefitEn: 'Confidence, strategic clarity, and courage to solve complex life challenges.',
      familyHelpUrdu: 'گھریلو فیصلوں میں دانشمندی اور بچوں کے لیے ایک متوازن، مثبت سربراہ بننے کا موقع۔',
      familyHelpEn: 'Wise household decisions and serving as an inspiring leader for family members.',
      communityHelpUrdu: 'لوگوں کو باہمی لڑائی کے بجائے مشترکہ ترقیاتی کاموں پر یکجا کرنے کی صلاحیت۔',
      communityHelpEn: 'Unites neighbors toward constructive community goals instead of petty division.',
      societalBenefitUrdu: 'معاشرے کو مخلص، باصلاحیت اور بے لوث رہنما ملتے ہیں جو قوم کی تقدیر بدلتے ہیں۔',
      societalBenefitEn: 'Produces sincere, competent servant leaders who transform communities.'
    },
    lessons: [
      {
        id: 'lead-b-l1',
        titleUrdu: '1. قیادت (Leadership) کیا ہے اور اچھا قائد کیسا ہوتا ہے؟',
        titleEn: '1. What is Leadership & Attributes of a Good Leader',
        durationMinutes: 12,
        contentUrdu: `قیادت کا مطلب لوگوں پر حکومت کرنا یا رعب جمانا نہیں ہے، بلکہ قیادت دراصل "خدمت، رہنمائی اور ذمہ داری" کا نام ہے۔ نبی کریم ﷺ نے فرمایا: "قوم کا سردار درحقیقت ان کا خادم ہوتا ہے۔"\n\nایک اچھا قائد وہ ہوتا ہے جو:\n۱. سنتا زیادہ ہے اور بولتا سوچ سمجھ کر ہے (Active Listening)\n۲. الزام دوسروں پر ڈالنے کے بجائے خود ذمہ داری قبول کرتا ہے\n۳. لوگوں کو خوفزدہ کرنے کے بجائے ان کی حوصلہ افزائی کرتا ہے\n\nقیادت کا آغاز انسان کی اپنی ذات سے ہوتا ہے، جب آپ اپنے وقت اور عادتوں پر قابو پاتے ہیں تو لوگ آپ کے پیچھے خود چلنے لگتے ہیں۔`,
        contentEn: `Leadership is not about dominating others; it is about service, responsibility, and guidance. The Prophet ﷺ said: "The leader of a people is their servant."\n\nA true leader listens actively, takes responsibility without blaming others, and empowers people through inspiration rather than fear.\n\nAll leadership begins with self-discipline—mastering your own habits inspires others to follow naturally.`,
        keyTakeawaysUrdu: [
          'حقیقی رہنما خادم بن کر لوگوں کے دلوں پر راج کرتا ہے۔',
          'قیادت کا پہلا قدم اپنی ذات، وقت اور اخلاق پر قابو پانا ہے۔',
          'دوسروں کو سننا اور ان کی رائے کا احترام کرنا قائد کی اولین صفت ہے۔'
        ],
        keyTakeawaysEn: [
          'True leadership is servant leadership that wins human hearts.',
          'The first test of leadership is self-mastery over habits and character.',
          'Active listening and honoring others opinions define great leaders.'
        ],
        quiz: [
          {
            id: 'lead-b-l1-q1',
            questionUrdu: 'اسلامی اور اخلاقی نقطہ نظر سے قائد کون ہوتا ہے؟',
            questionEn: 'Who is a leader from an ethical and Islamic perspective?',
            optionsUrdu: [
              'قوم کا سب سے بڑا خادم جو بے غرضی سے لوگوں کی بھلائی کے لیے کام کرے',
              'جو صرف دوسروں پر رعب جمائے اور ڈانٹے',
              'جو سارا کام خود کرے اور دوسروں کو کچھ نہ سکھائے',
              'جو تعریفوں کا بھوکا ہو'
            ],
            optionsEn: [
              'The foremost servant of the people working selflessly for community uplift',
              'One who scolds and dominates arrogantly',
              'One who hoards tasks without mentoring others',
              'One hungry for constant applause'
            ],
            correctIndex: 0,
            explanationUrdu: 'خدمت اور عاجزی ہی قیادت کا اصل جوہر ہے۔',
            explanationEn: 'Servant leadership and humility are the true hallmarks of leadership.'
          }
        ],
        practicalTask: {
          id: 'lead-b-l1-task',
          titleUrdu: 'عملی مشق: کسی شخص کی بات کو بغیر ٹوکے مکمل توجہ سے سنیں',
          titleEn: 'Practical Task: Active Listening Without Interruption',
          instructionsUrdu: 'آج کسی دوست یا ساتھی کی بات کو مکمل توجہ اور ہمدردی سے سنیں بغیر اپنی رائے تھوپے۔',
          instructionsEn: 'Listen to a colleague or family member today with full focus without interrupting.',
          deliverableUrdu: 'اپنا تجربہ ایک جملے میں درج کریں۔',
          deliverableEn: 'Note your active listening experience.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'lead-b-l2',
        titleUrdu: '2. فیصلہ سازی، دیانت اور ذمہ داری کا احساس',
        titleEn: '2. Decision Making, Integrity & Responsibility',
        durationMinutes: 15,
        contentUrdu: `قائد کا سب سے اہم کام مشکل لمحات میں درست اور دانشمندانہ فیصلے کرنا ہوتا ہے۔ فیصلہ ہمیشہ معلومات، مشاورت اور انصاف کی بنیاد پر ہونا چاہیے۔`,
        contentEn: `A leader's paramount skill is making just, sound decisions based on verified facts, consultation, and moral integrity.`,
        keyTakeawaysUrdu: [
          'مشورہ کرنا سنت ہے اور اچھے فیصلے کی ضمانت ہے۔',
          'فیصلے کے نتائج کی ذمہ داری خود اٹھانا قائدانہ صفت ہے۔'
        ],
        keyTakeawaysEn: [
          'Consultation (Shura) is blessed and guarantees balanced outcomes.',
          'Owning decision outcomes courageously defines character.'
        ],
        quiz: [
          {
            id: 'lead-b-l2-q1',
            questionUrdu: 'ایک متوازن فیصلے کے لیے سب سے ضروری قدم کیا ہے؟',
            questionEn: 'What is essential for balanced decision making?',
            optionsUrdu: [
              'حقائق کا جائزہ لینا اور باصلاحیت لوگوں سے مشورہ کرنا',
              'جذبات اور غصے میں جلد بازی کرنا',
              'بغیر سوچے فیصلہ کرنا',
              'دوسروں پر دباؤ ڈالنا'
            ],
            optionsEn: [
              'Evaluating facts and consulting experienced people',
              'Hastening out of temper and emotion',
              'Deciding blindly',
              'Pressuring others'
            ],
            correctIndex: 0,
            explanationUrdu: 'مشاورت اور سنجیدگی فیصلے کو درست سمت دیتی ہے۔',
            explanationEn: 'Consultation and objective analysis provide wise direction.'
          }
        ],
        practicalTask: {
          id: 'lead-b-l2-task',
          titleUrdu: 'عملی مشق: کسی فیصلے کے فائدے اور نقصانات کی فہرست بنائیں',
          titleEn: 'Practical Task: Make a Pros and Cons List for a Decision',
          instructionsUrdu: 'اپنے کسی حالیہ فیصلے کے ۲ فائدے اور ۲ خطرات لکھ کر اس کا تجزیہ کریں۔',
          instructionsEn: 'Analyze a current decision by listing 2 pros and 2 potential risks.',
          deliverableUrdu: 'اپنا مختصر تجزیہ درج کریں۔',
          deliverableEn: 'Write your decision analysis.',
          estimatedMinutes: 6
        }
      },
      {
        id: 'lead-b-l3',
        titleUrdu: '3. لوگوں کو جوڑنا، سننا اور ٹیم کی حوصلہ افزائی',
        titleEn: '3. Uniting People, Active Listening & Team Motivation',
        durationMinutes: 15,
        contentUrdu: `لوگ اس وقت دل سے کام کرتے ہیں جب انہیں محسوس ہو کہ ان کی قدر کی جا رہی ہے۔ شکریہ ادا کرنا اور چھوٹی کامیابیوں پر تعریف کرنا ٹیم میں نئی جان ڈال دیتا ہے۔`,
        contentEn: `People dedicate their best efforts when they feel valued. Expressing sincere gratitude and celebrating milestones energizes the entire team.`,
        keyTakeawaysUrdu: [
          'تعریف اور حوصلہ افزائی انسان کی پوشیدہ صلاحیتوں کو بیدار کرتی ہے۔',
          'کریڈٹ خود لینے کے بجائے اپنی ٹیم کو دیں۔'
        ],
        keyTakeawaysEn: [
          'Appreciation unlocks hidden human potential.',
          'Great leaders share credit generously with their teams.'
        ],
        quiz: [
          {
            id: 'lead-b-l3-q1',
            questionUrdu: 'ٹیم کی حوصلہ افزائی کا سب سے بہترین طریقہ کیا ہے؟',
            questionEn: 'What is the best way to motivate a team?',
            optionsUrdu: [
              'ان کی محنت کی دل سے تعریف کرنا اور ان کا شکریہ ادا کرنا',
              'ہمیشہ ان کی غلطیاں نکالنا',
              'ان پر چیخنا',
              'سارا کریڈٹ خود لے لینا'
            ],
            optionsEn: [
              'Sincerely acknowledging their effort and thanking them warmly',
              'Constantly nitpicking flaws',
              'Shouting at members',
              'Hoarding all accolades'
            ],
            correctIndex: 0,
            explanationUrdu: 'حوصلہ افزائی اور قدردانی ہی تعاون کی روح ہے۔',
            explanationEn: 'Appreciation and gratitude sustain enthusiastic collaboration.'
          }
        ],
        practicalTask: {
          id: 'lead-b-l3-task',
          titleUrdu: 'عملی مشق: کسی ساتھی یا دوست کی محنت کی دل سے تعریف کریں',
          titleEn: 'Practical Task: Sincerely Appreciate a Colleague or Friend',
          instructionsUrdu: 'آج کسی ایسے شخص کا شکریہ ادا کریں جس نے کوئی اچھا کام کیا ہو اور ان کی ہمت بڑھائیں۔',
          instructionsEn: 'Thank and encourage someone today who put in honest effort.',
          deliverableUrdu: 'اپنا تعریفی جملہ درج کریں۔',
          deliverableEn: 'Record your appreciation note.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'lead-b-l4',
        titleUrdu: '4. باہمی اختلافات کا پُرامن اور دانشمندانہ حل',
        titleEn: '4. Peaceful & Wise Conflict Resolution',
        durationMinutes: 15,
        contentUrdu: `جہاں لوگ مل کر کام کرتے ہیں وہاں رائے کا اختلاف ہونا فطری ہے۔ اہم بات یہ ہے کہ اختلاف کو دشمنی نہ بننے دیا جائے اور بات چیت سے حل تلاش کیا جائے۔`,
        contentEn: `Differences of opinion are natural in any group. Great leaders prevent disagreement from devolving into animosity through empathetic mediation.`,
        keyTakeawaysUrdu: [
          'اختلاف کو پرسکون سن کر مسئلے کی اصل جڑ کو سمجھیں۔',
          'ضد کے بجائے انصاف اور باہمی مفاد کو ترجیح دیں۔'
        ],
        keyTakeawaysEn: [
          'Listen patiently during conflicts to address root issues.',
          'Prioritize justice and shared benefit over personal ego.'
        ],
        quiz: [
          {
            id: 'lead-b-l4-q1',
            questionUrdu: 'تنازع حل کرتے وقت رہنما کا رویہ کیسا ہونا چاہیے؟',
            questionEn: 'What demeanor should a leader adopt during disputes?',
            optionsUrdu: [
              'غیر جانبدار، پرسکون اور دونوں فریقین کی بات انصاف سے سننے والا',
              'ایک فریق کی طرف داری کرنے والا',
              'خود غصہ کرنے والا',
              'معاملے کو نظر انداز کرنے والا'
            ],
            optionsEn: [
              'Neutral, calm, and listening to both parties with fairness',
              'Biased toward one party',
              'Becoming furious oneself',
              'Ignoring the situation'
            ],
            correctIndex: 0,
            explanationUrdu: 'عدل اور غیر جانبداری ہی تنازعات کو ہمیشہ کے لیے ختم کرتی ہے۔',
            explanationEn: 'Fairness and impartiality resolve disputes permanently.'
          }
        ],
        practicalTask: {
          id: 'lead-b-l4-task',
          titleUrdu: 'عملی مشق: صلح اور افہام و تفہیم کا ایک اصول لکھیں',
          titleEn: 'Practical Task: Write One Rule for Peacemaking',
          instructionsUrdu: 'لڑائی یا تلخی کو ختم کرنے کے لیے آپ کا سب سے پسندیدہ طریقہ کیا ہے؟ تحریر کریں۔',
          instructionsEn: 'Write your preferred method for resolving a tense disagreement constructively.',
          deliverableUrdu: 'اپنا صلح کا طریقہ درج کریں۔',
          deliverableEn: 'Enter your peacemaking rule.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'lead-b-l5',
        titleUrdu: '5. خادمِ قوم بن کر عملی تبدیلی لانا',
        titleEn: '5. Leading as a Servant of the Community',
        durationMinutes: 15,
        contentUrdu: `حقیقی قیادت کا اختتام اس بات پر ہوتا ہے کہ آپ اپنے پیچھے کتنے نئے رہنما تیار کر کے گئے۔ ایک سچا قائد اپنے ساتھ دوسروں کو بھی آگے بڑھاتا ہے۔`,
        contentEn: `The crowning achievement of leadership is developing future leaders. A true servant leader uplifts and empowers everyone along the journey.`,
        keyTakeawaysUrdu: [
          'نئے رہنما تیار کرنا ہی سب سے بڑی کامیابی ہے۔',
          'مسلسل سیکھنا اور عاجزی برقرار رکھنا قائد کا زیور ہے۔'
        ],
        keyTakeawaysEn: [
          'Mentoring new leaders is the highest mark of success.',
          'Continuous learning and humble service are the jewel of leadership.'
        ],
        quiz: [
          {
            id: 'lead-b-l5-q1',
            questionUrdu: 'ایک عظیم رہنما کی سب سے بڑی میراث کیا ہوتی ہے؟',
            questionEn: 'What is the greatest legacy of a great leader?',
            optionsUrdu: [
              'ایسے خود مختار اور باکردار افراد تیار کرنا جو ان کے بعد بھی کام جاری رکھیں',
              'لوگوں کو ہمیشہ اپنا محتاج رکھنا',
              'بڑے بڑے محلات بنانا',
              'صرف اپنے نام کی تختیاں لگانا'
            ],
            optionsEn: [
              'Empowering capable leaders who continue positive work indefinitely',
              'Keeping people permanently dependent on oneself',
              'Building grand palaces',
              'Placing plaques with one’s own name'
            ],
            correctIndex: 0,
            explanationUrdu: 'اگلی نسل کو بااختیار بنانا ہی دائمی قیادت ہے۔',
            explanationEn: 'Empowering future generations creates enduring positive change.'
          }
        ],
        practicalTask: {
          id: 'lead-b-l5-task',
          titleUrdu: 'عملی مشق: اپنی قیادت کا ۵ سالہ وژن بیان کریں',
          titleEn: 'Practical Task: State Your 5-Year Leadership Vision',
          instructionsUrdu: 'لکھیں کہ آپ اگلے ۵ سال میں اپنے خاندان یا برادری میں کون سا مثبت اثر دیکھنا چاہتے ہیں۔',
          instructionsEn: 'Write the positive community or family impact you want to lead over the next 5 years.',
          deliverableUrdu: 'اپنا لیڈرشپ وژن درج کریں۔',
          deliverableEn: 'Submit your leadership vision.',
          estimatedMinutes: 6
        }
      }
    ],
    quiz: [
      {
        id: 'lead-b-course-q1',
        questionUrdu: 'قیادت کا بنیادی مقصد کیا ہے؟',
        questionEn: 'What is the core purpose of leadership?',
        optionsUrdu: [
          'خدمت اور دیانت سے لوگوں کو مثبت مقصد پر یکجا کرنا',
          'طاقت اور رعب قائم کرنا',
          'اپنی تعریفیں سننا',
          'دوسروں کو نیچا دکھانا'
        ],
        optionsEn: [
          'Uniting people toward noble purposes through service and integrity',
          'Exerting raw power and fear',
          'Seeking self-praise',
          'Belittling others'
        ],
        correctIndex: 0,
        explanationUrdu: 'بے لوث رہنمائی ہی حقیقی قیادت ہے۔',
        explanationEn: 'Selfless guidance is true leadership.'
      }
    ],
    practicalTask: {
      id: 'lead-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: ایک فلاحی پروجیکٹ کا لیڈرشپ روڈ میپ',
      titleEn: 'Capstone: Welfare Project Leadership Blueprint',
      instructionsUrdu: 'ایک ایسا فلاحی پروجیکٹ منتخب کریں جس کی آپ رہنمائی کرنا چاہتے ہیں اور اس کی ٹیم، اہداف اور فیصلے کا خاکہ تیار کریں۔',
      instructionsEn: 'Select a local community project you wish to lead and outline its team structure, milestones, and governance.',
      deliverableUrdu: 'اپنا مکمل لیڈرشپ روڈ میپ درج کریں۔',
      deliverableEn: 'Submit your leadership blueprint.',
      estimatedMinutes: 15
    },
    projectDescriptionUrdu: 'کسی محلے یا اسکول کے فلاحی کام کے لیے مکمل لیڈرشپ و ایکشن پلان تیار کریں۔',
    projectDescriptionEn: 'Draft an actionable servant leadership blueprint for a local community initiative.'
  },

  // ==================================================
  // 4. FAMILY HARMONY & SOCIAL BONDS
  // ==================================================
  {
    id: 'family-social-harmony-basics',
    titleUrdu: 'خاندانی خوشحالی اور سماجی ہم آہنگی',
    titleEn: 'Family Harmony & Social Bonds',
    descriptionUrdu: 'گھریلو سکون، باہمی عزت، مثبت گفتگو، بچوں کی تربیت، بزرگوں کی خدمت اور رشتہ داروں سے حسنِ سلوک کا 5 اسباق پر مشتمل بنیادی کورس۔',
    descriptionEn: 'A 5-lesson guide to domestic peace, mutual respect, constructive communication, mindful parenting, honoring elders, and strengthening kinship.',
    category: 'Life Skills',
    categoryUrdu: 'خاندانی و سماجی زندگی',
    difficulty: 'Beginner',
    difficultyUrdu: 'ابتدائی',
    estimatedHours: 2.0,
    ageGroups: ['10-15', '16-25', '26-45', '46-60', '61-70', '70+'],
    icon: 'Users',
    coverGradient: 'from-rose-800 via-pink-900 to-slate-950',
    realLifePurpose: {
      personalBenefitUrdu: 'گھر میں داخل ہوتے ہی ذہنی سکون، باہمی محبت اور خوشگوار گھریلو فضا۔',
      personalBenefitEn: 'Mental tranquility at home, loving family relationships, and joyful atmosphere.',
      familyHelpUrdu: 'غلط فہمیاں ختم، بچوں کے اندر مثبت اعتماد اور بزرگوں کو سچا احترام۔',
      familyHelpEn: 'Clears misunderstandings, nurtures confident children, and honors household elders.',
      communityHelpUrdu: 'جب گھر پرامن ہوتے ہیں تو پورا محلہ جھگڑوں اور نفرت سے پاک رہتا ہے۔',
      communityHelpEn: 'Peaceful households build peaceful, conflict-free neighborhoods.',
      societalBenefitUrdu: 'ایک مضبوط اور مستحکم معاشرہ جس کی بنیاد محبت، قربانی اور رشتوں کے تقدس پر ہے۔',
      societalBenefitEn: 'A resilient society anchored on affection, mutual sacrifice, and sanctified bonds.'
    },
    lessons: [
      {
        id: 'fam-b-l1',
        titleUrdu: '1. خاندانی تعلقات اور باہمی عزت کی بنیاد',
        titleEn: '1. Foundation of Family Bonds & Mutual Respect',
        durationMinutes: 12,
        contentUrdu: `خاندان انسان کے لیے دنیا کی سب سے بڑی نعمت اور پرامن پناہ گاہ ہے۔ جب خاندان میں باہمی عزت اور محبت ہوتی ہے تو انسان باہر کی ہر مشکل کا آسانی سے مقابلہ کر لیتا ہے۔\n\nخاندانی خوشحالی کے ۳ سنہری ستون ہیں:\n۱. عزت اور قدردانی: ایک دوسرے کے کام اور محنت کی قدر کرنا\n۲. نرمی سے بات کرنا: گھر والوں سے شائستہ اور مسکرا کر مخاطب ہونا\n۳. معاف کرنا اور چشم پوشی: چھوٹی غلطیوں کو نظر انداز کرنا\n\nجب ہم گھر میں نرمی کا کلچر لاتے ہیں تو برکت اور خوشحالی کے دروازے کھل جاتے ہیں۔`,
        contentEn: `Family is a person's greatest sanctuary. When mutual respect and sincere love thrive within the household, life's external trials become easy to navigate.\n\nThree pillars of family harmony: mutual appreciation of each other’s effort, gentle and kind communication, and overlooking minor flaws with forgiveness.\n\nFostering gentleness at home unlocks peace and lasting blessings.`,
        keyTakeawaysUrdu: [
          'گھر کے اندر نرمی اور احترام ہی اصل خوشحالی کی کنجی ہے۔',
          'باہمی غلطیوں پر طعنے دینے کے بجائے درگزر کرنا چاہیے۔',
          'ہر رشتے کی اپنی قدر اور احترام ہے۔'
        ],
        keyTakeawaysEn: [
          'Gentleness and mutual respect at home are the true key to happiness.',
          'Overlook minor faults with patience instead of criticism.',
          'Every family member deserves dignity and recognition.'
        ],
        quiz: [
          {
            id: 'fam-b-l1-q1',
            questionUrdu: 'خاندانی سکون کے لیے سب سے ضروری رویہ کیا ہے؟',
            questionEn: 'What is essential for domestic harmony?',
            optionsUrdu: [
              'باہمی احترام، نرم گفتگو اور ایک دوسرے کے کام کی قدر کرنا',
              'گھر میں ہر وقت غصہ کرنا اور رعب جمانا',
              'ایک دوسرے کو طعنے دینا',
              'گھر والوں سے لاتعلق رہنا'
            ],
            optionsEn: [
              'Mutual respect, gentle words, and valuing each other’s contributions',
              'Staying constantly angry and demanding',
              'Criticizing family members with sarcastic taunts',
              'Remaining emotionally detached'
            ],
            correctIndex: 0,
            explanationUrdu: 'نرمی اور قدردانی ہی گھر کو جنت بناتی ہے۔',
            explanationEn: 'Kindness and appreciation turn a house into a peaceful haven.'
          }
        ],
        practicalTask: {
          id: 'fam-b-l1-task',
          titleUrdu: 'عملی مشق: گھر کے کسی فرد کی محنت پر ان کا شکریہ ادا کریں',
          titleEn: 'Practical Task: Thank a Family Member for Their Everyday Effort',
          instructionsUrdu: 'کھانا پکانے، صفائی یا کمانے پر اپنے والدین، شریکِ حیات یا بہن بھائی کا دل سے شکریہ ادا کریں۔',
          instructionsEn: 'Express heartfelt thanks to a family member today for their domestic or vocational contributions.',
          deliverableUrdu: 'اپنا تشکرانہ کلمہ درج کریں۔',
          deliverableEn: 'Write your note of appreciation.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'fam-b-l2',
        titleUrdu: '2. گھریلو گفتگو، صبر اور غلط فہمیوں کا ازالہ',
        titleEn: '2. Family Communication, Patience & Resolving Misunderstandings',
        durationMinutes: 15,
        contentUrdu: `زیادہ تر گھریلو جھگڑے غلط فہمی یا تلخ لہجے کی وجہ سے جنم لیتے ہیں۔ بات چیت کا انداز ٹھنڈا اور واضح ہونا چاہیے تاکہ کوئی غلط بات نہ پھیلے۔`,
        contentEn: `Most household friction arises from poor tone or misunderstandings. Calm, transparent communication resolves tension before it grows.`,
        keyTakeawaysUrdu: [
          'غصے کی حالت میں جواب نہ دیں بلکہ ماحول ٹھنڈا ہونے کا انتظار کریں۔',
          'الزام لگانے کے بجائے اپنے جذبات کا شائستہ اظہار کریں۔'
        ],
        keyTakeawaysEn: [
          'Pause and do not respond while agitated.',
          'Express feelings respectfully instead of hurling accusations.'
        ],
        quiz: [
          {
            id: 'fam-b-l2-q1',
            questionUrdu: 'گھریلو غلط فہمی کو دور کرنے کا صحیح طریقہ کیا ہے؟',
            questionEn: 'What is the healthy way to resolve a household misunderstanding?',
            optionsUrdu: [
              'پرسکون بیٹھ کر آمنے سامنے کھل کر اور نرمی سے بات کرنا',
              'باہر والوں کے سامنے تماشا بنانا',
              'بول چال بند کر کے دشمنی پالنا',
              'چیخنا چلانا'
            ],
            optionsEn: [
              'Sitting down face-to-face for a calm, open, and gentle conversation',
              'Creating public scenes in front of outsiders',
              'Cutting off communication in bitterness',
              'Shouting and screaming'
            ],
            correctIndex: 0,
            explanationUrdu: 'آمنے سامنے نرم گفتگو سے بڑی سے بڑی غلط فہمی دور ہو جاتی ہے۔',
            explanationEn: 'Direct, gentle dialogue clears even the deepest misunderstandings.'
          }
        ],
        practicalTask: {
          id: 'fam-b-l2-task',
          titleUrdu: 'عملی مشق: کسی پرانی بات پر صلح اور شائستگی کا پیغام',
          titleEn: 'Practical Task: Send a Peace Note or Word to Clear Tension',
          instructionsUrdu: 'اگر کسی خاندانی رکن سے کوئی ملال ہو تو ایک پیار بھرا جملہ بول کر معاملہ رفع دفع کریں۔',
          instructionsEn: 'Speak a warm, conciliatory word to clear any lingering tension with a family member.',
          deliverableUrdu: 'اپنا صلح جو قدم درج کریں۔',
          deliverableEn: 'Write your conciliatory step.',
          estimatedMinutes: 5
        }
      },
      {
        id: 'fam-b-l3',
        titleUrdu: '3. بچوں کی مثبت تربیت اور بزرگوں کی خدمت',
        titleEn: '3. Positive Child Upbringing & Honoring Elders',
        durationMinutes: 15,
        contentUrdu: `بچے نصیحت سے کم اور بڑوں کے عمل کو دیکھ کر زیادہ سیکھتے ہیں۔ بزرگ گھر کی برکت اور چھاؤں ہوتے ہیں۔ ان کے پاس بیٹھنا اور ان کے مشوروں کو سننا گھر میں سکون لاتا ہے۔`,
        contentEn: `Children learn far more from watching parents' actions than from lectures. Elders are the sheltering shade and blessings of a household.`,
        keyTakeawaysUrdu: [
          'بچوں کے سامنے خود اچھا عمل کر کے دکھائیں۔',
          'بزرگوں کی خدمت اور ان کی صحبت برکت کا ذریعہ ہے۔'
        ],
        keyTakeawaysEn: [
          'Lead children by exemplary personal conduct.',
          'Serving elders and spending time with them brings immense blessing.'
        ],
        quiz: [
          {
            id: 'fam-b-l3-q1',
            questionUrdu: 'بچوں کی بہترین تربیت کا بنیادی اصول کیا ہے؟',
            questionEn: 'What is the golden rule of positive parenting?',
            optionsUrdu: [
              'بچوں کے سامنے خود سچ بولنا، حسنِ اخلاق دکھانا اور پیار سے سمجھانا',
              'ہر وقت مارنا پیٹنا اور ڈرانا',
              'ان کی جائز ضروریات بھی پوری نہ کرنا',
              'ان سے جھوٹ بولنا'
            ],
            optionsEn: [
              'Role modeling truthfulness and good manners while guiding with love',
              'Using physical punishment and intimidation',
              'Neglecting basic emotional needs',
              'Lying to them'
            ],
            correctIndex: 0,
            explanationUrdu: 'عملی نمونہ اور شفقت ہی بچوں کے کردار کو سنوارتی ہے۔',
            explanationEn: 'Personal example and compassion mold exemplary child character.'
          }
        ],
        practicalTask: {
          id: 'fam-b-l3-task',
          titleUrdu: 'عملی مشق: بزرگ کے پاس ۱۰ منٹ بیٹھ کر ان کے پرانے تجربات سنیں',
          titleEn: 'Practical Task: Spend 10 Quality Minutes with an Elder',
          instructionsUrdu: 'گھر یا خاندان کے کسی بزرگ کے پاس بیٹھ کر ان کی پرانی یادیں یا کوئی قصہ سنیں اور ان کے چہرے پر خوشی دیکھیں۔',
          instructionsEn: 'Sit with a family elder for 10 minutes, asking about their life stories and listening attentively.',
          deliverableUrdu: 'بزرگ کی ایک اہم نصیحت درج کریں۔',
          deliverableEn: 'Write the elder’s advice.',
          estimatedMinutes: 8
        }
      },
      {
        id: 'fam-b-l4',
        titleUrdu: '4. گھریلو معیشت اور ذمہ داریوں میں باہمی شراکت',
        titleEn: '4. Household Economics & Shared Responsibility',
        durationMinutes: 15,
        contentUrdu: `گھر کا انتظام صرف ایک فرد کی ذمہ داری نہیں بلکہ تمام افراد کا مشترکہ فرض ہے۔ خرچ کی منصوبہ بندی اور گھریلو کاموں میں ہاتھ بٹانا باہمی محبت کو بڑھاتا ہے۔`,
        contentEn: `Home management is not the burden of one individual alone. Planning budgets together and sharing domestic chores fosters deep affection.`,
        keyTakeawaysUrdu: [
          'گھریلو کاموں میں ہاتھ بٹانا سنتِ نبوی ہے۔',
          'باہمی مشاورت سے بجٹ بنانے سے برکت ہوتی ہے۔'
        ],
        keyTakeawaysEn: [
          'Assisting with household chores is a noble prophetic tradition.',
          'Consultative household budgeting brings financial peace.'
        ],
        quiz: [
          {
            id: 'fam-b-l4-q1',
            questionUrdu: 'گھریلو کام کاج میں مردوں کا حصہ لینا کیسا ہے؟',
            questionEn: 'How is participating in domestic chores viewed?',
            optionsUrdu: [
              'نبی کریم ﷺ کی پیاری سنت ہے اور گھر میں محبت بڑھاتی ہے',
              'عیب کی بات ہے',
              'اس کی اجازت نہیں',
              'اس سے وقت ضائع ہوتا ہے'
            ],
            optionsEn: [
              'A blessed prophetic sunnah that multiplies household affection',
              'A matter of shame',
              'Not permissible',
              'A waste of time'
            ],
            correctIndex: 0,
            explanationUrdu: 'نبی کریم ﷺ گھر کے کاموں میں اہل خانہ کا ہاتھ بٹاتے تھے۔',
            explanationEn: 'The Prophet ﷺ regularly helped with domestic chores at home.'
          }
        ],
        practicalTask: {
          id: 'fam-b-l4-task',
          titleUrdu: 'عملی مشق: گھر کے کسی کام میں خود بڑھ کر مدد کریں',
          titleEn: 'Practical Task: Proactively Help with a Household Chore',
          instructionsUrdu: 'برتن دھونے، صفائی، یا سامان لانے میں گھر والوں کی بغیر کہے مدد کریں۔',
          instructionsEn: 'Proactively assist with cleaning, dishwashing, or groceries today.',
          deliverableUrdu: 'اپنا مدد کا عمل درج کریں۔',
          deliverableEn: 'Write your helpful action.',
          estimatedMinutes: 6
        }
      },
      {
        id: 'fam-b-l5',
        titleUrdu: '5. رشتہ داروں، ہمسائیوں اور سماج سے حسنِ سلوک',
        titleEn: '5. Good Relations with Kin, Neighbors & Society',
        durationMinutes: 15,
        contentUrdu: `صلہ رحمی (رشتوں کو جوڑنا) ایمان کا اہم تقاضا اور عمر و رزق میں برکت کا سبب ہے۔ حتیٰ کہ جو رشتہ توڑیں ان کے ساتھ بھی بھلائی کرنا اعلیٰ ظرفی ہے۔`,
        contentEn: `Upholding kinship ties (Silah-e-Rahmi) is a fundamental duty that blesses life and sustenance. Reaching out even to those who cut ties reflects supreme character.`,
        keyTakeawaysUrdu: [
          'صلہ رحمی سے رزق میں کشادگی اور عمر میں برکت ہوتی ہے۔',
          'پڑوسیوں اور رشتہ داروں کے دکھ سکھ میں شریک ہوں۔'
        ],
        keyTakeawaysEn: [
          'Maintaining kinship ties expands sustenance and blesses life.',
          'Share in the joys and hardships of neighbors and relatives.'
        ],
        quiz: [
          {
            id: 'fam-b-l5-q1',
            questionUrdu: 'صلہ رحمی کی سب سے اعلیٰ صورت کیا ہے؟',
            questionEn: 'What is the highest form of upholding kinship?',
            optionsUrdu: [
              'اس رشتہ دار سے بھی جڑنا اور بھلائی کرنا جو تعلق توڑنے کی کوشش کرے',
              'صرف اس سے ملنا جو آپ کو تحفہ دے',
              'امیر رشتہ داروں سے ملنا اور غریبوں کو چھوڑ دینا',
              'رشتہ داری ختم کر دینا'
            ],
            optionsEn: [
              'Reaching out with kindness even to relatives who try to sever ties',
              'Visiting only those who give gifts',
              'Visiting wealthy relatives while ignoring poor ones',
              'Severing family ties'
            ],
            correctIndex: 0,
            explanationUrdu: 'کٹے ہوئے رشتوں کو جوڑنا ہی اصل صلہ رحمی اور نیکی ہے۔',
            explanationEn: 'Mending severed relations is the highest form of virtue and kinship.'
          }
        ],
        practicalTask: {
          id: 'fam-b-l5-task',
          titleUrdu: 'عملی مشق: کسی دور کے رشتہ دار کو فون کر کے خیریت دریافت کریں',
          titleEn: 'Practical Task: Call an Extended Relative to Inquire on Their Wellbeing',
          instructionsUrdu: 'کسی ایسے رشتہ دار کو کال یا میسج کریں جس سے کافی عرصے سے بات نہ ہوئی ہو اور ان کی خیریت پوچھیں۔',
          instructionsEn: 'Call or message a relative you have not spoken with recently just to check on their health and life.',
          deliverableUrdu: 'رشتہ دار کی خیریت اور ردعمل درج کریں۔',
          deliverableEn: 'Write your kinship check-in reflection.',
          estimatedMinutes: 5
        }
      }
    ],
    quiz: [
      {
        id: 'fam-b-course-q1',
        questionUrdu: 'خاندانی و سماجی خوشحالی کی سب سے بنیادی شرط کیا ہے؟',
        questionEn: 'What is the bedrock condition for family and social happiness?',
        optionsUrdu: [
          'باہمی صبر، معاف کرنا، اور رشتوں کے حقوق خوش دلی سے ادا کرنا',
          'صرف اپنے مطالبات منوانا',
          'دوسروں پر حکم چلانا',
          'رشتہ داروں سے کٹ کر رہنا'
        ],
        optionsEn: [
          'Patience, forgiveness, and joyfully fulfilling the rights of relations',
          'Enforcing personal demands forcefully',
          'Bossing others around',
          'Isolating from all relatives'
        ],
        correctIndex: 0,
        explanationUrdu: 'صبر اور ایثار ہی گھر اور معاشرے کو پرسکون بناتے ہیں۔',
        explanationEn: 'Patience, empathy, and sacrifice create domestic and social harmony.'
      }
    ],
    practicalTask: {
      id: 'fam-b-capstone-task',
      titleUrdu: 'کورس کا فائنل پروجیکٹ: خاندانی امن و اتفاق کا باہمی چارٹر',
      titleEn: 'Capstone: Family Peace & Harmony Charter',
      instructionsUrdu: 'اپنے گھر کے تمام افراد کے لیے باہمی محبت، نرم گفتگو اور صلح کا ایک مشترکہ خاندانی چارٹر تیار کریں۔',
      instructionsEn: 'Draft a family peace and harmony agreement for daily gentle communication and mutual respect.',
      deliverableUrdu: 'اپنا فیملی چارٹر درج کریں۔',
      deliverableEn: 'Submit your family charter.',
      estimatedMinutes: 15
    },
    projectDescriptionUrdu: 'گھریلو سکون، باہمی احترام اور صلہ رحمی کا ایک جامع عملی فیملی چارٹر تیار کریں۔',
    projectDescriptionEn: 'Create an actionable household agreement fostering peace, kinship, and mutual respect.'
  }
];
