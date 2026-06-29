const phrases = [
  ["Be careful.", "気をつけて。", "safety"],
  ["Put it down.", "それを置いて。", "action"],
  ["Pick it up.", "それを拾って。", "action"],
  ["Bring it here.", "それをここに持ってきて。", "action"],
  ["Leave it there.", "そこに置いたままにして。", "action"],
  ["Wait a second.", "少し待って。", "timing"],
  ["Come with me.", "私と一緒に来て。", "team"],
  ["Follow me.", "ついてきて。", "team"],
  ["Can you help me?", "手伝ってくれますか。", "help"],
  ["I need help.", "助けが必要です。", "help"],
  ["Where is it?", "それはどこですか。", "question"],
  ["What should I do?", "何をすればいいですか。", "question"],
  ["I understand.", "わかりました。", "reply"],
  ["I don't understand.", "わかりません。", "reply"],
  ["Please say it again.", "もう一度言ってください。", "reply"],
  ["Is this okay?", "これは大丈夫ですか。", "check"],
  ["Check this, please.", "これを確認してください。", "check"],
  ["It's finished.", "終わりました。", "status"],
  ["Not yet.", "まだです。", "status"],
  ["I'm on it.", "今やっています。", "status"],
  ["Watch your step.", "足元に気をつけて。", "safety"],
  ["It's too heavy.", "重すぎます。", "safety"],
  ["Use both hands.", "両手を使って。", "safety"],
  ["Take a break.", "休憩してください。", "care"],
  ["I'm working in the Vacuum Automation Sales Division.", "私はVA オートメーション営業部で働いています。", "department"],
  ["I'm working in the Handling Systems Sales Division.", "私はHS 手動搬送システム営業部で働いています。", "department"],
  ["I'm working in the Operations Division.", "私はオペレーション部で働いています。", "department"],
  ["I'm working in the Marketing Division.", "私はマーケティング部で働いています。", "department"],
  ["I'm working on the morning shift.", "私は朝番で働いています。", "shift"],
  ["I'm working with the Field Service team.", "私はフィールドサービスチームと働いています。", "team"],
  ["I work in QA.", "私は品質保証で働いています。", "department"],
  ["I work in Material Logistics.", "私は在庫管理で働いています。", "department"],
  ["I'm new here.", "ここは初めてです。", "intro"],
  ["This is my first day.", "今日は初日です。", "intro"],
  ["Who should I ask?", "誰に聞けばいいですか。", "question"],
  ["Who is in charge?", "担当者は誰ですか。", "question"],
  ["Where should I go?", "どこへ行けばいいですか。", "question"],
  ["Where should I put this?", "これはどこに置けばいいですか。", "question"],
  ["Can I start now?", "今始めてもいいですか。", "question"],
  ["Can I take this?", "これを取ってもいいですか。", "question"],
  ["Do I need gloves?", "手袋は必要ですか。", "safety"],
  ["Do I need a helmet?", "ヘルメットは必要ですか。", "safety"],
  ["Is it safe?", "安全ですか。", "safety"],
  ["Is this urgent?", "これは急ぎですか。", "priority"],
  ["Should I do this first?", "これを先にやるべきですか。", "priority"],
  ["What is the deadline?", "締め切りはいつですか。", "time"],
  ["I made a mistake.", "間違えました。", "problem"],
  ["There is a problem.", "問題があります。", "problem"],
  ["The machine stopped.", "機械が止まりました。", "problem"],
  ["I need more time.", "もう少し時間が必要です。", "status"],
  ["I'll check it now.", "今確認します。", "reply"],
  ["I'll ask my supervisor.", "上司に聞きます。", "reply"],
  ["Thank you for your help.", "手伝ってくれてありがとうございます。", "polite"],
  ["Sorry, I didn't hear you.", "すみません、聞こえませんでした。", "reply"],
  ["I'm working by the entrance.", "私は入口のそばで働いています。", "place"],
  ["I'm working by the register.", "私はレジのそばで働いています。", "place"],
  ["I'm working by the loading area.", "私は荷物搬入口のそばで働いています。", "place"],
  ["I'm working near the stockroom.", "私は在庫室の近くで働いています。", "place"],
  ["I'm working at station three.", "私は3番ステーションで働いています。", "place"],
  ["I'm working on the packing line.", "私は梱包ラインで働いています。", "place"],
  ["I'm working under my supervisor.", "私は上司の指示で働いています。", "team"],
  ["I'm working with a trainer today.", "今日はトレーナーと働いています。", "team"],
  ["Please show me where to stand.", "どこに立てばいいか見せてください。", "question"],
  ["Where is my station?", "私の作業場所はどこですか。", "question"],
  ["Where do I clock in?", "どこで出勤打刻しますか。", "question"],
  ["Where do I clock out?", "どこで退勤打刻しますか。", "question"],
  ["Who do I report to?", "誰に報告すればいいですか。", "question"],
  ["Can you show me an example?", "例を見せてくれますか。", "question"],
  ["Can you speak more slowly?", "もう少しゆっくり話してくれますか。", "question"],
  ["Should I wear a mask?", "マスクをつけるべきですか。", "safety"],
  ["Should I wash my hands first?", "先に手を洗うべきですか。", "safety"],
  ["This area is slippery.", "この場所は滑りやすいです。", "safety"],
  ["The box is damaged.", "箱が壊れています。", "problem"],
  ["The label is missing.", "ラベルがありません。", "problem"],
  ["The order is wrong.", "注文が違います。", "problem"],
  ["I need a new one.", "新しいものが必要です。", "request"],
  ["I need more supplies.", "備品がもっと必要です。", "request"],
  ["I'm going to break.", "休憩に行きます。", "status"],
  ["I'm back from break.", "休憩から戻りました。", "status"],
];

const workAreas = [
  { department: "Vacuum Automation Sales Division", place: "the Vacuum Automation Sales Division", jp: "VA オートメーション営業部", short: "VA Sales" },
  { department: "Handling Systems Sales Division", place: "the Handling Systems Sales Division", jp: "HS 手動搬送システム営業部", short: "HS Sales" },
  { department: "Operations Division", place: "the Operations Division", jp: "オペレーション部", short: "Operations" },
  { department: "Marketing Division", place: "the Marketing Division", jp: "マーケティング部", short: "Marketing" },
  { department: "Finance Division", place: "the Finance Division", jp: "経理部", short: "Finance" },
  { department: "GA/HR", place: "GA/HR", jp: "総務人事", short: "GA/HR" },
  { department: "Marketing and Communications", place: "Marketing and Communications", jp: "マーケティング＆コミュニケーション", short: "M&C" },
  { department: "Business Development", place: "Business Development", jp: "ビジネスディベロップメント", short: "Biz Dev" },
  { department: "Web Shop and Marketing Data Analysis", place: "Web Shop and Marketing Data Analysis", jp: "ウェブショップ＆マーケティングデータアナリシス", short: "Web/Data" },
  { department: "QA", place: "QA", jp: "品質保証", short: "QA" },
  { department: "Material Logistics", place: "Material Logistics", jp: "在庫管理", short: "Logistics" },
  { department: "IT", place: "IT", jp: "情報技術管理", short: "IT" },
  { department: "Field Service", place: "Field Service", jp: "フィールドサービス", short: "Field Service" },
  { department: "Order Processing", place: "Order Processing", jp: "受注管理", short: "Orders" },
  { department: "PROC and QC", place: "PROC and QC", jp: "調達＆品質管理", short: "PROC/QC" },
  { department: "HS Inside Sales", place: "HS Inside Sales", jp: "HS インサイドセールス", short: "HS Inside" },
  { department: "HS Outside Sales", place: "HS Outside Sales", jp: "HS アウトサイドセールス", short: "HS Outside" },
  { department: "VA Inside Sales", place: "VA Inside Sales", jp: "VA インサイドセールス", short: "VA Inside" },
  { department: "VA Outside Sales, West Japan Area", place: "VA Outside Sales, West Japan Area", jp: "VA アウトサイドセールス 西日本エリア", short: "VA West" },
  { department: "VA Outside Sales, Central Japan Area", place: "VA Outside Sales, Central Japan Area", jp: "VA アウトサイドセールス 中日本エリア", short: "VA Central" },
  { department: "VA Outside Sales, East Japan Area", place: "VA Outside Sales, East Japan Area", jp: "VA アウトサイドセールス 東日本エリア", short: "VA East" },
];

const patterns = [
  {
    label: "I'm working in ...",
    help: "私は...で働いています。",
    build: (area) => [
      `I'm working in ${area.place}.`,
      `私は${area.jp}で働いています。`,
    ],
  },
  {
    label: "I work in ...",
    help: "私は...で働いています。",
    build: (area) => [`I work in ${area.department}.`, `私は${area.jp}で働いています。`],
  },
  {
    label: "I'm working by ...",
    help: "私は...のそばで働いています。",
    build: (area) => [`I'm working by ${area.place}.`, `私は${area.jp}のそばで働いています。`],
  },
  {
    label: "I'm working near ...",
    help: "私は...の近くで働いています。",
    build: (area) => [`I'm working near ${area.place}.`, `私は${area.jp}の近くで働いています。`],
  },
  {
    label: "I'm working at ...",
    help: "私は...で働いています。",
    build: (area) => [`I'm working at ${area.place}.`, `私は${area.jp}で働いています。`],
  },
  {
    label: "I'm helping in ... today.",
    help: "今日は...を手伝っています。",
    build: (area) => [
      `I'm helping in ${area.department} today.`,
      `今日は${area.jp}を手伝っています。`,
    ],
  },
  {
    label: "Please take me to ...",
    help: "...へ連れて行ってください。",
    build: (area) => [`Please take me to ${area.place}.`, `${area.jp}へ連れて行ってください。`],
  },
  {
    label: "Who is in charge of ...?",
    help: "...の担当者は誰ですか。",
    build: (area) => [
      `Who is in charge of ${area.department}?`,
      `${area.jp}の担当者は誰ですか。`,
    ],
  },
  {
    label: "Do I report to ...?",
    help: "...に報告しますか。",
    build: (area) => [`Do I report to ${area.department}?`, `${area.jp}に報告しますか。`],
  },
];

const quizItems = [
  ["気をつけて。", "Be careful."],
  ["それを置いて。", "Put it down."],
  ["私に教えてください。", "Please tell me."],
  ["手伝ってくれますか。", "Can you help me?"],
  ["もう一度言ってください。", "Please say it again."],
  ["何をすればいいですか。", "What should I do?"],
  ["私はキッチン部門で働いています。", "I'm working in the kitchen department."],
  ["担当者は誰ですか。", "Who is in charge?"],
  ["これは急ぎですか。", "Is this urgent?"],
  ["上司に聞きます。", "I'll ask my supervisor."],
  ["私は入口のそばで働いています。", "I'm working by the entrance."],
  ["私の作業場所はどこですか。", "Where is my station?"],
  ["もう少しゆっくり話してくれますか。", "Can you speak more slowly?"],
  ["箱が壊れています。", "The box is damaged."],
];

const reviewIntervals = [1, 2, 4, 8, 16];
const calendarCards = phrases.slice(0, 56).map(([english, japanese, tag], index) => ({
  id: index,
  english,
  japanese,
  tag,
}));

const phraseList = document.querySelector("#phraseList");
const departmentOptions = document.querySelector("#departmentOptions");
const patternOptions = document.querySelector("#patternOptions");
const builtSentence = document.querySelector("#builtSentence");
const builtJapanese = document.querySelector("#builtJapanese");
const speakBuiltSentence = document.querySelector("#speakBuiltSentence");
const calendarMonths = document.querySelector("#calendarMonths");
const selectedDayLabel = document.querySelector("#selectedDayLabel");
const selectedDayTitle = document.querySelector("#selectedDayTitle");
const dayMixBadge = document.querySelector("#dayMixBadge");
const studyCard = document.querySelector("#studyCard");
const studyCardType = document.querySelector("#studyCardType");
const studyPrompt = document.querySelector("#studyPrompt");
const studyAnswer = document.querySelector("#studyAnswer");
const wordMap = document.querySelector("#wordMap");
const speakStudyCard = document.querySelector("#speakStudyCard");
const prevStudyCard = document.querySelector("#prevStudyCard");
const nextStudyCard = document.querySelector("#nextStudyCard");
const dailyCardList = document.querySelector("#dailyCardList");
const quizCard = document.querySelector("#quizCard");
const quizPrompt = document.querySelector("#quizPrompt");
const quizAnswer = document.querySelector("#quizAnswer");
const quizWordMap = document.querySelector("#quizWordMap");
const speakQuiz = document.querySelector("#speakQuiz");
const prevQuiz = document.querySelector("#prevQuiz");
const nextQuiz = document.querySelector("#nextQuiz");
const pageLinks = document.querySelectorAll("[data-page-link]");
const pages = document.querySelectorAll("[data-page]");
const exerciseList = document.querySelector("#exerciseList");
const exerciseScore = document.querySelector("#exerciseScore");
const exerciseMeta = document.querySelector("#exerciseMeta");
const resetExercises = document.querySelector("#resetExercises");
const shuffleExercises = document.querySelector("#shuffleExercises");
const emailPhraseList = document.querySelector("#emailPhraseList");
const emailTaskList = document.querySelector("#emailTaskList");
const emailScore = document.querySelector("#emailScore");
const emailMeta = document.querySelector("#emailMeta");
const shuffleEmailTasks = document.querySelector("#shuffleEmailTasks");
const resetEmailTasks = document.querySelector("#resetEmailTasks");

let quizIndex = 0;
let selectedArea = 0;
let selectedPattern = 0;
let selectedDayIndex = 1;
let selectedStudyIndex = 0;
let selectedDayCards = [];
let studyFrontLang = "en";
let quizDirection = "ja-en";
let exerciseResults = {};
let activeExerciseItems = [];
let exerciseSessionNumber = 1;
let emailResults = {};
let activeEmailTasks = [];
let emailSessionNumber = 1;

const emailPhrases = [
  ["Thank you for your email.", "メールありがとうございます。", "メールの最初で使いやすい丁寧表現。"],
  ["Could you please confirm this?", "これを確認していただけますか。", "相手に確認をお願いする時。"],
  ["Please find the attached file.", "添付ファイルをご確認ください。", "添付資料を送る時。"],
  ["I will check and get back to you.", "確認して返信します。", "すぐ答えられない時の安全な返信。"],
  ["Could you send me the details?", "詳細を送っていただけますか。", "情報が足りない時。"],
  ["I have a question about this order.", "この注文について質問があります。", "注文や案件について聞く時。"],
  ["The deadline is Friday.", "締め切りは金曜日です。", "期限を伝える時。"],
  ["Thank you for your support.", "ご対応ありがとうございます。", "メールの締めで使いやすい表現。"],
  ["I apologize for the delay.", "遅れて申し訳ありません。", "返信や作業が遅れた時。"],
  ["Please let me know if you have any questions.", "質問があれば教えてください。", "最後に添える丁寧な一文。"],
  ["I hope you are doing well.", "お世話になっております。", "英語メールの自然な書き出し。"],
  ["Thank you for your quick response.", "早速のご返信ありがとうございます。", "相手が早く返信してくれた時。"],
  ["Thank you for the update.", "進捗共有ありがとうございます。", "状況共有への返信で使います。"],
  ["I am writing about the order.", "注文についてご連絡しています。", "メールの目的を伝える時。"],
  ["I am writing to follow up.", "フォローアップでご連絡しています。", "前の件を確認したい時。"],
  ["Could you please check the attachment?", "添付ファイルを確認していただけますか。", "資料確認をお願いする時。"],
  ["Could you please send the latest version?", "最新版を送っていただけますか。", "資料やデータの最新版が必要な時。"],
  ["Could you clarify this point?", "この点を明確にしていただけますか。", "内容が曖昧な時の丁寧な質問。"],
  ["Could you confirm the delivery date?", "納期を確認していただけますか。", "納期確認で使います。"],
  ["Could you confirm the quantity?", "数量を確認していただけますか。", "数量確認で使います。"],
  ["Could you confirm the price?", "価格を確認していただけますか。", "価格確認で使います。"],
  ["Could you share the schedule?", "スケジュールを共有していただけますか。", "予定を知りたい時。"],
  ["Please see my comments below.", "下記にコメントを記載します。", "返信メール内でコメントする時。"],
  ["Please see the details below.", "詳細は下記をご確認ください。", "本文下に詳細を書く時。"],
  ["Please check the highlighted part.", "ハイライト部分をご確認ください。", "修正箇所を見てほしい時。"],
  ["Please reply by Friday.", "金曜日までに返信してください。", "返信期限を伝える時。"],
  ["Please keep me updated.", "進捗を共有してください。", "継続的に状況を知りたい時。"],
  ["I have attached the file.", "ファイルを添付しました。", "添付したことを伝える時。"],
  ["I attached the revised file.", "修正版のファイルを添付しました。", "修正済み資料を送る時。"],
  ["The file is too large to attach.", "ファイルが大きすぎて添付できません。", "添付できない時の説明。"],
  ["I will send it separately.", "別途送ります。", "別メールや別方法で送る時。"],
  ["I will update you tomorrow.", "明日、進捗を共有します。", "次の連絡タイミングを伝える時。"],
  ["I will check with my team.", "チームに確認します。", "自分だけでは判断できない時。"],
  ["I will ask the person in charge.", "担当者に確認します。", "担当者へ確認する時。"],
  ["I will arrange a meeting.", "会議を設定します。", "打ち合わせを作る時。"],
  ["Can we have a short meeting?", "短い打ち合わせはできますか。", "少し話したい時。"],
  ["Are you available tomorrow?", "明日はご都合いかがですか。", "予定確認で使います。"],
  ["Does this time work for you?", "この時間でご都合よろしいですか。", "会議時間の確認。"],
  ["Let's discuss this in the meeting.", "会議でこの件を話しましょう。", "メールで決めず会議に回す時。"],
  ["I agree with your suggestion.", "ご提案に賛成です。", "相手の案に同意する時。"],
  ["That works for me.", "それで大丈夫です。", "提案された内容を受け入れる時。"],
  ["That should be fine.", "それで問題ないと思います。", "やわらかくOKする時。"],
  ["I am not sure yet.", "まだ確定ではありません。", "まだ断言できない時。"],
  ["There may be a delay.", "遅れが発生する可能性があります。", "遅延リスクを伝える時。"],
  ["We are checking the issue.", "問題を確認中です。", "調査中であることを伝える時。"],
  ["The issue has been resolved.", "問題は解決しました。", "問題解決を報告する時。"],
  ["Please ignore my previous email.", "前のメールは無視してください。", "誤送信や訂正時に使います。"],
  ["Sorry for the confusion.", "混乱させてしまい申し訳ありません。", "説明が分かりにくかった時。"],
  ["Thank you for your understanding.", "ご理解ありがとうございます。", "相手に配慮してもらった時。"],
  ["Thank you in advance.", "よろしくお願いいたします。", "依頼メールの締めに使います。"],
  ["Best regards,", "よろしくお願いいたします。", "一般的なメールの締め。"],
  ["Kind regards,", "よろしくお願いいたします。", "少し丁寧なメールの締め。"],
];

const emailTasks = [
  {
    id: "mail1",
    category: "Confirm",
    title: "Confirm something",
    prompt: "Hello,\n_____\nThank you.",
    answer: "Could you please confirm this?",
    options: ["Could you please confirm this?", "Please ignore my previous email.", "That works for me."],
  },
  {
    id: "mail2",
    category: "Attachment",
    title: "Send an attachment",
    prompt: "Hello,\n_____\nBest regards,",
    answer: "Please find the attached file.",
    options: ["Please find the attached file.", "Could you confirm the price?", "There may be a delay."],
  },
  {
    id: "mail3",
    category: "Reply",
    title: "Need time to answer",
    prompt: "Thank you for your email.\n_____\nBest regards,",
    answer: "I will check and get back to you.",
    options: ["I will check and get back to you.", "Please reply by Friday.", "Best regards,"],
  },
  {
    id: "mail4",
    category: "Request",
    title: "Ask for details",
    prompt: "Hello,\n_____\nThank you.",
    answer: "Could you send me the details?",
    options: ["Could you send me the details?", "Thank you for the update.", "That should be fine."],
  },
  {
    id: "mail5",
    category: "Delay",
    title: "Apologize for a delay",
    prompt: "Hello,\n_____\nI will send it today.",
    answer: "I apologize for the delay.",
    options: ["I apologize for the delay.", "Could you share the schedule?", "I agree with your suggestion."],
  },
  {
    id: "mail6",
    category: "Closing",
    title: "Close with a helpful line",
    prompt: "Best regards,\n_____\n",
    answer: "Please let me know if you have any questions.",
    options: ["Please let me know if you have any questions.", "Please check the highlighted part.", "I will arrange a meeting."],
  },
  {
    id: "mail7",
    category: "Greeting",
    title: "Start politely",
    prompt: "Hello,\n_____\nI am writing about the order.",
    answer: "I hope you are doing well.",
    options: ["I hope you are doing well.", "The issue has been resolved.", "Please reply by Friday."],
  },
  {
    id: "mail8",
    category: "Follow-up",
    title: "Follow up on an old topic",
    prompt: "Hello,\n_____\nCould you check this again?",
    answer: "I am writing to follow up.",
    options: ["I am writing to follow up.", "I attached the revised file.", "Kind regards,"],
  },
  {
    id: "mail9",
    category: "Deadline",
    title: "Ask for a reply by Friday",
    prompt: "Hello,\nCould you confirm the delivery date?\n_____",
    answer: "Please reply by Friday.",
    options: ["Please reply by Friday.", "Sorry for the confusion.", "I will ask the person in charge."],
  },
  {
    id: "mail10",
    category: "Attachment",
    title: "Send a revised file",
    prompt: "Hello,\n_____\nPlease check the highlighted part.",
    answer: "I attached the revised file.",
    options: ["I attached the revised file.", "That should be fine.", "Can we have a short meeting?"],
  },
  {
    id: "mail11",
    category: "Clarify",
    title: "Ask for clarification",
    prompt: "Hello,\n_____\nThank you in advance.",
    answer: "Could you clarify this point?",
    options: ["Could you clarify this point?", "I will update you tomorrow.", "Thank you for your quick response."],
  },
  {
    id: "mail12",
    category: "Delivery",
    title: "Confirm a delivery date",
    prompt: "Hello,\n_____\nBest regards,",
    answer: "Could you confirm the delivery date?",
    options: ["Could you confirm the delivery date?", "Please see my comments below.", "Thank you for your support."],
  },
  {
    id: "mail13",
    category: "Quantity",
    title: "Confirm quantity",
    prompt: "Hello,\n_____\nThank you.",
    answer: "Could you confirm the quantity?",
    options: ["Could you confirm the quantity?", "I will arrange a meeting.", "The issue has been resolved."],
  },
  {
    id: "mail14",
    category: "Price",
    title: "Confirm price",
    prompt: "Hello,\n_____\nBest regards,",
    answer: "Could you confirm the price?",
    options: ["Could you confirm the price?", "Please ignore my previous email.", "Thank you for your understanding."],
  },
  {
    id: "mail15",
    category: "Schedule",
    title: "Ask for the schedule",
    prompt: "Hello,\n_____\nThank you.",
    answer: "Could you share the schedule?",
    options: ["Could you share the schedule?", "The file is too large to attach.", "That works for me."],
  },
  {
    id: "mail16",
    category: "Comment",
    title: "Point to comments below",
    prompt: "Hello,\n_____\nBest regards,",
    answer: "Please see my comments below.",
    options: ["Please see my comments below.", "Are you available tomorrow?", "I am not sure yet."],
  },
  {
    id: "mail17",
    category: "Details",
    title: "Point to details below",
    prompt: "Hello,\n_____\nThank you.",
    answer: "Please see the details below.",
    options: ["Please see the details below.", "I will send it separately.", "Kind regards,"],
  },
  {
    id: "mail18",
    category: "Progress",
    title: "Ask for updates",
    prompt: "Hello,\n_____\nBest regards,",
    answer: "Please keep me updated.",
    options: ["Please keep me updated.", "Could you please check the attachment?", "Sorry for the confusion."],
  },
  {
    id: "mail19",
    category: "Team",
    title: "Check with your team",
    prompt: "Thank you for the update.\n_____\nBest regards,",
    answer: "I will check with my team.",
    options: ["I will check with my team.", "The deadline is Friday.", "I agree with your suggestion."],
  },
  {
    id: "mail20",
    category: "Person",
    title: "Ask the person in charge",
    prompt: "Hello,\n_____\nI will update you tomorrow.",
    answer: "I will ask the person in charge.",
    options: ["I will ask the person in charge.", "Please check the highlighted part.", "Thank you in advance."],
  },
  {
    id: "mail21",
    category: "Meeting",
    title: "Arrange a meeting",
    prompt: "Hello,\n_____\nDoes this time work for you?",
    answer: "I will arrange a meeting.",
    options: ["I will arrange a meeting.", "Could you confirm the quantity?", "Please find the attached file."],
  },
  {
    id: "mail22",
    category: "Meeting",
    title: "Ask for a short meeting",
    prompt: "Hello,\n_____\nThank you.",
    answer: "Can we have a short meeting?",
    options: ["Can we have a short meeting?", "I have attached the file.", "There may be a delay."],
  },
  {
    id: "mail23",
    category: "Meeting",
    title: "Ask about tomorrow",
    prompt: "Hello,\n_____\nBest regards,",
    answer: "Are you available tomorrow?",
    options: ["Are you available tomorrow?", "Please see the details below.", "I will send it separately."],
  },
  {
    id: "mail24",
    category: "Meeting",
    title: "Confirm the time",
    prompt: "Hello,\n_____\nThank you.",
    answer: "Does this time work for you?",
    options: ["Does this time work for you?", "Could you please send the latest version?", "The issue has been resolved."],
  },
  {
    id: "mail25",
    category: "Agreement",
    title: "Agree with a suggestion",
    prompt: "Thank you for your idea.\n_____\nBest regards,",
    answer: "I agree with your suggestion.",
    options: ["I agree with your suggestion.", "I apologize for the delay.", "Could you confirm the price?"],
  },
  {
    id: "mail26",
    category: "Agreement",
    title: "Accept a plan",
    prompt: "Hello,\n_____\nThank you.",
    answer: "That works for me.",
    options: ["That works for me.", "Please keep me updated.", "I am writing to follow up."],
  },
  {
    id: "mail27",
    category: "Unclear",
    title: "Say it is not confirmed",
    prompt: "Hello,\n_____\nI will update you tomorrow.",
    answer: "I am not sure yet.",
    options: ["I am not sure yet.", "Best regards,", "Could you send me the details?"],
  },
  {
    id: "mail28",
    category: "Delay",
    title: "Warn about a delay",
    prompt: "Hello,\n_____\nWe are checking the issue.",
    answer: "There may be a delay.",
    options: ["There may be a delay.", "Please reply by Friday.", "Thank you for your quick response."],
  },
  {
    id: "mail29",
    category: "Issue",
    title: "Say the issue is being checked",
    prompt: "Hello,\n_____\nI will update you tomorrow.",
    answer: "We are checking the issue.",
    options: ["We are checking the issue.", "Could you please confirm this?", "That should be fine."],
  },
  {
    id: "mail30",
    category: "Issue",
    title: "Say the issue is resolved",
    prompt: "Hello,\n_____\nThank you for your patience.",
    answer: "The issue has been resolved.",
    options: ["The issue has been resolved.", "Please see my comments below.", "Can we have a short meeting?"],
  },
  {
    id: "mail31",
    category: "Correction",
    title: "Correct a previous email",
    prompt: "Hello,\n_____\nSorry for the confusion.",
    answer: "Please ignore my previous email.",
    options: ["Please ignore my previous email.", "Could you share the schedule?", "I will check with my team."],
  },
  {
    id: "mail32",
    category: "Closing",
    title: "End with thanks in advance",
    prompt: "Could you please check the attachment?\n_____\nBest regards,",
    answer: "Thank you in advance.",
    options: ["Thank you in advance.", "I will arrange a meeting.", "There may be a delay."],
  },
];

const exerciseItems = [
  {
    id: "ex1",
    category: "Meaning",
    type: "choice",
    title: "意味を選ぶ",
    prompt: "Can you speak more slowly?",
    answer: "もう少しゆっくり話してくれますか。",
    options: ["もう少しゆっくり話してくれますか。", "今始めてもいいですか。", "どこへ行けばいいですか。"],
  },
  {
    id: "ex2",
    category: "Phrase",
    type: "choice",
    title: "英語を選ぶ",
    prompt: "私はオペレーション部で働いています。",
    answer: "I'm working in the Operations Division.",
    options: ["I'm working in the Operations Division.", "I need more supplies.", "Where is my station?"],
  },
  {
    id: "ex3",
    category: "Grammar",
    type: "blank",
    title: "空欄を埋める",
    prompt: "I'm working ___ the entrance.",
    answer: "by",
    options: ["by", "need", "who"],
  },
  {
    id: "ex4",
    category: "Grammar",
    type: "blank",
    title: "空欄を埋める",
    prompt: "Who is in ___?",
    answer: "charge",
    options: ["charge", "careful", "deadline"],
  },
  {
    id: "ex5",
    category: "Reply",
    type: "choice",
    title: "仕事で自然な返事",
    prompt: "上司に確認して返信したい時",
    answer: "I'll check and get back to you.",
    options: ["I'll check and get back to you.", "Watch your step.", "Put it down."],
  },
  {
    id: "ex6",
    category: "Safety",
    type: "choice",
    title: "安全確認",
    prompt: "手袋は必要ですか。",
    answer: "Do I need gloves?",
    options: ["Do I need gloves?", "Is this urgent?", "The label is missing."],
  },
  {
    id: "ex7",
    category: "Meaning",
    type: "choice",
    title: "意味を選ぶ",
    prompt: "Where should I put this?",
    answer: "これはどこに置けばいいですか。",
    options: ["これはどこに置けばいいですか。", "締め切りはいつですか。", "誰に報告すればいいですか。"],
  },
  {
    id: "ex8",
    category: "Meaning",
    type: "choice",
    title: "意味を選ぶ",
    prompt: "The label is missing.",
    answer: "ラベルがありません。",
    options: ["ラベルがありません。", "箱が壊れています。", "注文が違います。"],
  },
  {
    id: "ex9",
    category: "Phrase",
    type: "choice",
    title: "英語を選ぶ",
    prompt: "担当者は誰ですか。",
    answer: "Who is in charge?",
    options: ["Who is in charge?", "Where is my station?", "What is the deadline?"],
  },
  {
    id: "ex10",
    category: "Phrase",
    type: "choice",
    title: "英語を選ぶ",
    prompt: "備品がもっと必要です。",
    answer: "I need more supplies.",
    options: ["I need more supplies.", "I made a mistake.", "I'm back from break."],
  },
  {
    id: "ex11",
    category: "Grammar",
    type: "blank",
    title: "空欄を埋める",
    prompt: "I'm working ___ the stockroom.",
    answer: "near",
    options: ["near", "who", "need"],
  },
  {
    id: "ex12",
    category: "Grammar",
    type: "blank",
    title: "空欄を埋める",
    prompt: "Do I need ___?",
    answer: "gloves",
    options: ["gloves", "urgent", "slowly"],
  },
  {
    id: "ex13",
    category: "Grammar",
    type: "blank",
    title: "空欄を埋める",
    prompt: "Can you speak more ___?",
    answer: "slowly",
    options: ["slowly", "safe", "wrong"],
  },
  {
    id: "ex14",
    category: "Grammar",
    type: "blank",
    title: "空欄を埋める",
    prompt: "Please say it ___.",
    answer: "again",
    options: ["again", "by", "out"],
  },
  {
    id: "ex15",
    category: "Email",
    type: "choice",
    title: "メール表現",
    prompt: "添付ファイルをご確認ください。",
    answer: "Please find the attached file.",
    options: ["Please find the attached file.", "Use both hands.", "Where do I clock in?"],
  },
  {
    id: "ex16",
    category: "Email",
    type: "choice",
    title: "メール表現",
    prompt: "確認して返信します。",
    answer: "I will check and get back to you.",
    options: ["I will check and get back to you.", "I'm going to break.", "The machine stopped."],
  },
  {
    id: "ex17",
    category: "Email",
    type: "choice",
    title: "メール表現",
    prompt: "詳細を送っていただけますか。",
    answer: "Could you send me the details?",
    options: ["Could you send me the details?", "Could you wear a mask?", "Could you clock out?"],
  },
  {
    id: "ex18",
    category: "Email",
    type: "choice",
    title: "メール表現",
    prompt: "遅れて申し訳ありません。",
    answer: "I apologize for the delay.",
    options: ["I apologize for the delay.", "I understand.", "I need help."],
  },
  {
    id: "ex19",
    category: "Safety",
    type: "choice",
    title: "安全確認",
    prompt: "足元に気をつけて。",
    answer: "Watch your step.",
    options: ["Watch your step.", "Check this, please.", "Not yet."],
  },
  {
    id: "ex20",
    category: "Safety",
    type: "choice",
    title: "安全確認",
    prompt: "両手を使って。",
    answer: "Use both hands.",
    options: ["Use both hands.", "Bring it here.", "Take a break."],
  },
  {
    id: "ex21",
    category: "Problem",
    type: "choice",
    title: "問題を伝える",
    prompt: "機械が止まりました。",
    answer: "The machine stopped.",
    options: ["The machine stopped.", "The deadline is Friday.", "The register is here."],
  },
  {
    id: "ex22",
    category: "Problem",
    type: "choice",
    title: "問題を伝える",
    prompt: "注文が違います。",
    answer: "The order is wrong.",
    options: ["The order is wrong.", "The box is heavy.", "The label is new."],
  },
  {
    id: "ex23",
    category: "Department",
    type: "choice",
    title: "部署名",
    prompt: "VA オートメーション営業部",
    answer: "Vacuum Automation Sales Division",
    options: ["Vacuum Automation Sales Division", "Handling Systems Sales Division", "Operations Division"],
  },
  {
    id: "ex24",
    category: "Department",
    type: "choice",
    title: "部署名",
    prompt: "受注管理",
    answer: "Order Processing",
    options: ["Order Processing", "Field Service", "Material Logistics"],
  },
  {
    id: "ex25",
    category: "Department",
    type: "choice",
    title: "部署名",
    prompt: "品質保証",
    answer: "QA",
    options: ["QA", "GA/HR", "IT"],
  },
  {
    id: "ex26",
    category: "Reply",
    type: "choice",
    title: "自然な返事",
    prompt: "まだ終わっていない時",
    answer: "Not yet.",
    options: ["Not yet.", "It's finished.", "I understand."],
  },
  {
    id: "ex27",
    category: "Reply",
    type: "choice",
    title: "自然な返事",
    prompt: "今やっています。",
    answer: "I'm on it.",
    options: ["I'm on it.", "I'm new here.", "I'm back from break."],
  },
  {
    id: "ex28",
    category: "Question",
    type: "choice",
    title: "質問を作る",
    prompt: "どこで出勤打刻しますか。",
    answer: "Where do I clock in?",
    options: ["Where do I clock in?", "Where do I clock out?", "Where is the label?"],
  },
  {
    id: "ex29",
    category: "Question",
    type: "choice",
    title: "質問を作る",
    prompt: "誰に報告すればいいですか。",
    answer: "Who do I report to?",
    options: ["Who do I report to?", "Who can I help?", "Who is waiting?"],
  },
  {
    id: "ex30",
    category: "Priority",
    type: "choice",
    title: "優先度",
    prompt: "これは急ぎですか。",
    answer: "Is this urgent?",
    options: ["Is this urgent?", "Is this safe?", "Is this okay?"],
  },
];

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function showPage(pageName) {
  const selectedPage = pageName || "home";
  pages.forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === selectedPage);
  });
  pageLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.pageLink === selectedPage);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getPageFromHash() {
  const page = window.location.hash.replace("#", "");
  return document.querySelector(`[data-page="${page}"]`) ? page : "home";
}

function renderPhrases() {
  phraseList.innerHTML = phrases
    .map(
      ([english, japanese, tag]) => `
        <article class="phrase-card">
          <button class="phrase-sound" data-speak="${english}" aria-label="${english} を聞く">▶</button>
          <div>
            <strong>${english}</strong>
            <span>${japanese}</span>
            <small class="tag">${tag}</small>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderEmailPhrases() {
  emailPhraseList.innerHTML = emailPhrases
    .map(
      ([english, japanese, note]) => `
        <article class="email-card">
          <button class="phrase-sound" data-speak="${english}" aria-label="${english} を聞く">▶</button>
          <div>
            <strong>${english}</strong>
            <span>${japanese}</span>
            <small>${note}</small>
          </div>
        </article>
      `,
    )
    .join("");
}

function updateEmailScore() {
  const activeIds = new Set(activeEmailTasks.map((task) => task.id));
  const answered = Object.entries(emailResults)
    .filter(([id]) => activeIds.has(id))
    .map(([, result]) => result);
  const correct = answered.filter(Boolean).length;
  emailScore.textContent = `${correct} / ${activeEmailTasks.length}`;
  emailMeta.textContent = `Mix ${emailSessionNumber} · ${activeEmailTasks.length} of ${emailTasks.length} tasks`;
}

function buildEmailSession() {
  const byCategory = emailTasks.reduce((groups, task) => {
    groups[task.category] = groups[task.category] || [];
    groups[task.category].push(task);
    return groups;
  }, {});
  const categoryStarters = shuffleArray(Object.values(byCategory))
    .slice(0, 5)
    .map((group) => shuffleArray(group)[0])
    .filter(Boolean);
  const remaining = shuffleArray(emailTasks.filter((task) => !categoryStarters.some((starter) => starter.id === task.id)));
  activeEmailTasks = shuffleArray([...categoryStarters, ...remaining.slice(0, 3)]);
}

function renderEmailTasks() {
  if (!activeEmailTasks.length) buildEmailSession();
  emailTaskList.innerHTML = activeEmailTasks
    .map(
      (task, index) => `
        <article class="email-task" data-email-task="${task.id}">
          <div class="exercise-topline">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${task.title}</strong>
            <small>${task.category}</small>
          </div>
          <p class="mail-preview">${task.prompt.replace(/\n/g, "<br />").replace("_____", "<mark>_____</mark>")}</p>
          <div class="email-options">
            ${task.options
              .map((option) => `<button type="button" data-email-answer="${task.id}" data-value="${option}">${option}</button>`)
              .join("")}
          </div>
          <p class="exercise-feedback" id="email-feedback-${task.id}"></p>
        </article>
      `,
    )
    .join("");
  updateEmailScore();
}

function answerEmailTask(id, value) {
  const task = activeEmailTasks.find((item) => item.id === id);
  if (!task) return;
  const card = document.querySelector(`[data-email-task="${task.id}"]`);
  const feedback = document.querySelector(`#email-feedback-${task.id}`);
  const isCorrect = value === task.answer;
  emailResults[id] = isCorrect;

  card.classList.toggle("is-correct", isCorrect);
  card.classList.toggle("is-wrong", !isCorrect);
  feedback.textContent = isCorrect ? "正解です。メールの流れに合っています。" : `もう一度。正解は: ${task.answer}`;
  card.querySelector("mark").textContent = value;
  card.querySelectorAll("[data-email-answer]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.value === value);
    button.classList.toggle("is-answer", button.dataset.value === task.answer);
  });
  updateEmailScore();
}

function updateExerciseScore() {
  const activeIds = new Set(activeExerciseItems.map((item) => item.id));
  const answered = Object.entries(exerciseResults)
    .filter(([id]) => activeIds.has(id))
    .map(([, result]) => result);
  const correct = answered.filter(Boolean).length;
  exerciseScore.textContent = `${correct} / ${activeExerciseItems.length}`;
  exerciseMeta.textContent = `Mix ${exerciseSessionNumber} · ${activeExerciseItems.length} of ${exerciseItems.length} tasks`;
}

function shuffleArray(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function buildExerciseSession() {
  const byCategory = exerciseItems.reduce((groups, item) => {
    groups[item.category] = groups[item.category] || [];
    groups[item.category].push(item);
    return groups;
  }, {});
  const categoryStarters = shuffleArray(Object.values(byCategory))
    .slice(0, 6)
    .map((group) => shuffleArray(group)[0])
    .filter(Boolean);
  const remaining = shuffleArray(exerciseItems.filter((item) => !categoryStarters.some((starter) => starter.id === item.id)));
  activeExerciseItems = shuffleArray([...categoryStarters, ...remaining.slice(0, 6)]);
}

function renderExercises() {
  if (!activeExerciseItems.length) buildExerciseSession();
  exerciseList.innerHTML = activeExerciseItems
    .map(
      (item, index) => `
        <article class="exercise-card" data-exercise="${item.id}">
          <div class="exercise-topline">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${item.title}</strong>
            <small>${item.category}</small>
          </div>
          <h3>${item.prompt}</h3>
          <div class="exercise-options">
            ${item.options
              .map((option) => `<button type="button" data-exercise-option="${item.id}" data-value="${option}">${option}</button>`)
              .join("")}
          </div>
          <p class="exercise-feedback" id="feedback-${item.id}"></p>
        </article>
      `,
    )
    .join("");
  updateExerciseScore();
}

function answerExercise(id, value) {
  const item = activeExerciseItems.find((exercise) => exercise.id === id);
  if (!item) return;
  const card = document.querySelector(`[data-exercise="${id}"]`);
  const feedback = document.querySelector(`#feedback-${id}`);
  const isCorrect = value === item.answer;
  exerciseResults[id] = isCorrect;

  card.classList.toggle("is-correct", isCorrect);
  card.classList.toggle("is-wrong", !isCorrect);
  feedback.textContent = isCorrect ? "正解です。よくできました。" : `もう一度。正解は: ${item.answer}`;
  card.querySelectorAll("[data-exercise-option]").forEach((button) => {
    const isSelected = button.dataset.value === value;
    button.classList.toggle("is-selected", isSelected);
    button.classList.toggle("is-answer", button.dataset.value === item.answer);
  });
  updateExerciseScore();
}

function renderBuilderOptions() {
  departmentOptions.innerHTML = workAreas
    .map(
      (area, index) => `<option value="${index}">${area.short} - ${area.jp}</option>`,
    )
    .join("");
  departmentOptions.value = String(selectedArea);

  patternOptions.innerHTML = patterns
    .map(
      (pattern, index) => `<option value="${index}">${pattern.label} / ${pattern.help}</option>`,
    )
    .join("");
  patternOptions.value = String(selectedPattern);
}

function renderBuiltSentence() {
  const [english, japanese] = patterns[selectedPattern].build(workAreas[selectedArea]);
  builtSentence.textContent = english;
  builtJapanese.textContent = japanese;
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function formatDayTitle(dayIndex) {
  return dayIndex <= 30 ? `Block 1 - Day ${dayIndex}` : `Block 2 - Day ${dayIndex - 30}`;
}

function getNewCardIdsForDay(dayIndex) {
  if (dayIndex === 1) return [0, 1];
  const cardId = dayIndex;
  return cardId < calendarCards.length ? [cardId] : [];
}

function getCardsLearnedOnDay(dayIndex) {
  if (dayIndex < 1) return [];
  return getNewCardIdsForDay(dayIndex)
    .map((id) => calendarCards[id])
    .filter(Boolean);
}

function getDayPlan(dayIndex) {
  const newCards = getCardsLearnedOnDay(dayIndex).map((card) => ({ ...card, kind: "new" }));
  const reviewCards = reviewIntervals
    .flatMap((interval) =>
      getCardsLearnedOnDay(dayIndex - interval).map((card) => ({
        ...card,
        kind: "review",
        interval,
      })),
    )
    .filter((card, position, all) => all.findIndex((item) => item.id === card.id) === position);

  return [...newCards, ...reviewCards];
}

function renderCalendar() {
  calendarMonths.innerHTML = [
    { title: "Days 1-30", start: 1 },
    { title: "Days 31-60", start: 31 },
  ]
    .map((block) => {
      const days = Array.from({ length: 30 }, (_, day) => {
        const dayIndex = block.start + day;
        const plan = getDayPlan(dayIndex);
        const isSelected = dayIndex === selectedDayIndex;

        return `
          <button
            class="day-button ${isSelected ? "is-selected" : ""}"
            data-calendar-day="${dayIndex}"
            aria-label="${formatDayTitle(dayIndex)}: ${plan.length} cards"
          >
            ${dayIndex}
          </button>
        `;
      }).join("");

      return `
        <section class="month">
          <p class="month-title">${block.title}</p>
          <div class="day-grid fixed-days">${days}</div>
        </section>
      `;
    })
    .join("");
}

function getStudySides(card) {
  if (studyFrontLang === "ja") {
    return {
      prompt: card.japanese,
      answer: card.english,
      promptLang: "Japanese front",
    };
  }

  return {
    prompt: card.english,
    answer: card.japanese,
    promptLang: "English front",
  };
}

function findPhrasePart(english) {
  const normalized = english.replace(/[?.]/g, "").toLowerCase();
  const sortedAreas = [...workAreas].sort((a, b) => b.place.length - a.place.length);
  const area = sortedAreas.find((item) => {
    const place = item.place.replace(/^the /, "").toLowerCase();
    const department = item.department.toLowerCase();
    return normalized.includes(place) || normalized.includes(department);
  });

  if (area) {
    return {
      english: area.place,
      japanese: area.jp,
    };
  }

  const fallbackParts = [
    ["the entrance", "入口"],
    ["the register", "レジ"],
    ["the loading area", "荷物搬入口"],
    ["the stockroom", "在庫室"],
    ["station three", "3番ステーション"],
    ["the packing line", "梱包ライン"],
    ["my supervisor", "上司"],
    ["a trainer", "トレーナー"],
    ["both hands", "両手"],
    ["your step", "足元"],
    ["more time", "もう少し時間"],
    ["more supplies", "もっと備品"],
    ["a new one", "新しいもの"],
    ["the deadline", "締め切り"],
    ["the box", "箱"],
    ["the label", "ラベル"],
    ["the order", "注文"],
    ["an example", "例"],
    ["my station", "私の作業場所"],
    ["break", "休憩"],
    ["gloves", "手袋"],
    ["a helmet", "ヘルメット"],
    ["a mask", "マスク"],
    ["it", "それ"],
    ["this", "これ"],
    ["me", "私に / 私を"],
    ["us", "私たちを"],
  ];
  const match = fallbackParts.find(([part]) => normalized.includes(part));
  return match ? { english: match[0], japanese: match[1] } : null;
}

const wordNotes = {
  a: ["1つの", "数えられる名詞の前に置きます。"],
  again: ["もう一度", "同じことを繰り返してほしい時に使います。"],
  am: ["〜です / 〜しています", "Iと一緒に使うbe動詞です。"],
  an: ["1つの", "母音で始まる名詞の前に置きます。"],
  are: ["〜です", "you / they などと一緒に使うbe動詞です。"],
  ask: ["聞く / 頼む", "人に質問する時に使います。"],
  at: ["〜で", "場所やポイントを指す時に使います。"],
  back: ["戻って", "戻った状態を表します。"],
  be: ["〜である", "状態を表す基本動詞です。"],
  both: ["両方の", "2つをまとめて言う時に使います。"],
  break: ["休憩", "仕事の休憩を言う時に使います。"],
  bring: ["持ってくる", "相手の場所へ物を持って行く時に使います。"],
  by: ["〜のそばで", "近い場所を言う時に使います。"],
  can: ["〜できますか", "お願いや可能か確認する時に使います。"],
  careful: ["気をつけて", "危ない時の注意でよく使います。"],
  charge: ["担当", "in charge で担当者という意味になります。"],
  check: ["確認する", "見て確かめる時に使います。"],
  clock: ["打刻する", "clock in / out で出退勤打刻です。"],
  come: ["来る", "こちらへ来てほしい時に使います。"],
  damaged: ["壊れている", "物に問題がある時に使います。"],
  deadline: ["締め切り", "いつまでか確認する時に使います。"],
  do: ["する", "疑問文を作る助動詞としても使います。"],
  down: ["下へ / 置いて", "put down で置くという意味になります。"],
  example: ["例", "やり方を見せてほしい時に使います。"],
  finished: ["終わった", "作業完了を伝える時に使います。"],
  first: ["最初の", "順番や初日を言う時に使います。"],
  follow: ["ついて行く", "人の後について行く時に使います。"],
  from: ["〜から", "出発点や戻った場所を表します。"],
  gloves: ["手袋", "安全確認でよく出ます。"],
  go: ["行く", "どこへ行くか聞く時に使います。"],
  going: ["行くところ", "be going to でこれからする行動を表します。"],
  hand: ["手", "hands は両手や複数の手です。"],
  hands: ["手", "both hands で両手です。"],
  helmet: ["ヘルメット", "安全装備を確認する時に使います。"],
  help: ["助ける / 手伝う", "困った時や依頼で使います。"],
  here: ["ここ", "近い場所を指します。"],
  heavy: ["重い", "持つ時に危ない場合に使います。"],
  i: ["私は", "自分がすることを言う時の主語です。"],
  in: ["〜で / 〜の中で", "部署・場所・期間を言う時に使います。"],
  is: ["〜です", "単数のものや状態に使うbe動詞です。"],
  it: ["それ", "前に出た物や状況を指します。"],
  label: ["ラベル", "荷物や商品表示を言う時に使います。"],
  leave: ["置いたままにする", "動かさないでと言う時に使います。"],
  made: ["作った / してしまった", "made a mistake で間違えたです。"],
  mask: ["マスク", "着用確認で使います。"],
  me: ["私に / 私を", "相手の動作が自分に向く時に使います。"],
  mistake: ["間違い", "ミスを伝える時に使います。"],
  more: ["もっと / もう少し", "量や時間を追加したい時に使います。"],
  my: ["私の", "自分の物や担当を言う時に使います。"],
  near: ["〜の近くで", "少し近い場所を言う時に使います。"],
  need: ["必要です", "必要な物や助けを言う時に使います。"],
  new: ["新しい", "新しい物や初めてを言う時に使います。"],
  not: ["〜ではない", "否定を作る時に使います。"],
  now: ["今", "すぐ現在のことを言う時に使います。"],
  on: ["〜の上 / 〜中", "on break で休憩中です。"],
  one: ["もの / 1つ", "同じ種類の物を指す時に使います。"],
  order: ["注文", "注文内容を言う時に使います。"],
  out: ["外へ / 退勤", "clock out で退勤打刻です。"],
  pick: ["拾う / 取る", "pick up で拾う・持ち上げるです。"],
  please: ["お願いします", "依頼を丁寧にします。"],
  problem: ["問題", "異常や困ったことを伝える時に使います。"],
  put: ["置く", "物の場所を変える時に使います。"],
  ready: ["準備できた", "始められるか確認する時に使います。"],
  report: ["報告する", "誰に伝えるか確認する時に使います。"],
  safe: ["安全な", "危なくないか確認する時に使います。"],
  say: ["言う", "もう一度言ってほしい時に使います。"],
  should: ["〜すべきですか", "正しい行動を確認する時に使います。"],
  show: ["見せる", "例や場所を見せてほしい時に使います。"],
  slowly: ["ゆっくり", "話すスピードを下げてほしい時に使います。"],
  speak: ["話す", "話し方をお願いする時に使います。"],
  step: ["足元 / 一歩", "Watch your step で足元注意です。"],
  supplies: ["備品", "仕事で使う物をまとめて言います。"],
  supervisor: ["上司", "報告先や確認先として使います。"],
  take: ["取る / 連れて行く", "文によって意味が変わります。"],
  tell: ["伝える / 教える", "情報を言ってもらう時に使います。"],
  the: ["その", "特定の物や場所の前に置きます。"],
  there: ["そこ", "少し離れた場所を指します。"],
  this: ["これ / この", "近くの物や状況を指します。"],
  time: ["時間", "必要な時間や期限で使います。"],
  to: ["〜へ / 〜に", "方向や相手を表します。"],
  too: ["〜すぎる", "too heavy で重すぎるです。"],
  understand: ["理解する", "わかったかどうかを言う時に使います。"],
  up: ["上へ", "pick up で拾う・持ち上げるです。"],
  urgent: ["急ぎ", "優先度を確認する時に使います。"],
  us: ["私たちを", "自分たちに向かう動作で使います。"],
  use: ["使う", "道具や体の部分を使う時に使います。"],
  wait: ["待つ", "少し止まってほしい時に使います。"],
  watch: ["注意して見る", "危険に気をつけてと言う時に使います。"],
  what: ["何", "内容や行動を聞く時に使います。"],
  where: ["どこ", "場所を聞く時に使います。"],
  who: ["誰", "人や担当者を聞く時に使います。"],
  with: ["〜と一緒に", "人やチームと一緒にする時に使います。"],
  work: ["働く", "所属や仕事を言う時に使います。"],
  working: ["働いている", "今している仕事を表します。"],
  wrong: ["違う", "内容が正しくない時に使います。"],
  you: ["あなた / あなたが", "相手に質問や依頼をする時に使います。"],
  your: ["あなたの", "相手の物や体の部分を指します。"],
};

function normalizeWord(word) {
  return word.toLowerCase().replace(/[.,?!]/g, "");
}

function splitContraction(word) {
  const normalized = normalizeWord(word);
  if (normalized === "i'm") return ["I", "am"];
  if (normalized === "it's") return ["It", "is"];
  if (normalized === "i'll") return ["I", "will"];
  if (normalized === "don't") return ["do", "not"];
  return [word.replace(/[.,?!]/g, "")];
}

function buildWordMap(card) {
  const english = card.english;
  const part = findPhrasePart(english);
  const words = english.split(/\s+/).flatMap(splitContraction);
  const rows = words
    .map((word) => {
      const key = normalizeWord(word);
      const note = wordNotes[key];
      if (!note) return null;
      return {
        chunk: word,
        meaning: note[0],
        note: note[1],
      };
    })
    .filter(Boolean);

  if (part) {
    rows.push({
      chunk: part.english,
      meaning: part.japanese,
      note: "部署名・場所名はそのまま固まりで覚えると使いやすいです。",
    });
  }

  const seen = new Set();
  return rows.filter((row) => {
    const key = row.chunk.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function renderWordMap(card, target = wordMap) {
  const rows = buildWordMap(card);
  target.innerHTML = `
    <p>単語マップ</p>
    <div>
      ${rows
        .map(
          (row) => `
            <span class="word-chip">
              <strong>${row.chunk}</strong>
              <small>${row.meaning}</small>
              <em>${row.note}</em>
            </span>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderStudyCard() {
  const card = selectedDayCards[selectedStudyIndex];
  if (!card) return;
  const sides = getStudySides(card);
  studyCardType.textContent = `${card.kind === "new" ? "New card" : `Review after ${card.interval}d`} / ${sides.promptLang}`;
  studyPrompt.textContent = sides.prompt;
  studyAnswer.textContent = sides.answer;
  studyCard.classList.remove("is-flipped");
  renderWordMap(card);

  document.querySelectorAll("[data-front-lang]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.frontLang === studyFrontLang);
  });

  dailyCardList.innerHTML = selectedDayCards
    .map(
      (item, index) => `
        <button class="${index === selectedStudyIndex ? "is-selected" : ""}" data-study-card="${index}">
          <span class="card-kind">${item.kind === "new" ? "new" : "review"}</span>
          <span>${studyFrontLang === "ja" ? item.japanese : item.english}</span>
        </button>
      `,
    )
    .join("");
}

function renderSelectedDay() {
  selectedDayCards = getDayPlan(selectedDayIndex);
  selectedStudyIndex = 0;

  const newCount = selectedDayCards.filter((card) => card.kind === "new").length;
  const reviewCount = selectedDayCards.length - newCount;
  selectedDayLabel.textContent = `Day ${selectedDayIndex}`;
  selectedDayTitle.textContent = formatDayTitle(selectedDayIndex);
  dayMixBadge.textContent = `${newCount} new / ${reviewCount} review`;
  renderStudyCard();
  renderCalendar();
}

function moveStudyCard(direction) {
  selectedStudyIndex = (selectedStudyIndex + direction + selectedDayCards.length) % selectedDayCards.length;
  renderStudyCard();
}

function renderQuiz() {
  const [prompt, answer] = quizItems[quizIndex];
  const isJapaneseFirst = quizDirection === "ja-en";
  quizPrompt.textContent = isJapaneseFirst ? prompt : answer;
  quizAnswer.textContent = isJapaneseFirst ? answer : prompt;
  renderWordMap({ english: answer, japanese: prompt }, quizWordMap);
  quizCard.classList.remove("is-flipped");

  document.querySelectorAll("[data-quiz-dir]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.quizDir === quizDirection);
  });
}

function moveQuiz(direction) {
  quizIndex = (quizIndex + direction + quizItems.length) % quizItems.length;
  renderQuiz();
}

document.addEventListener("click", (event) => {
  const pageLink = event.target.closest("[data-page-link]");
  if (pageLink) {
    event.preventDefault();
    const pageName = pageLink.dataset.pageLink;
    history.pushState(null, "", `#${pageName}`);
    showPage(pageName);
    return;
  }

  const exerciseOption = event.target.closest("[data-exercise-option]");
  if (exerciseOption) {
    answerExercise(exerciseOption.dataset.exerciseOption, exerciseOption.dataset.value);
    return;
  }

  const emailAnswer = event.target.closest("[data-email-answer]");
  if (emailAnswer) {
    answerEmailTask(emailAnswer.dataset.emailAnswer, emailAnswer.dataset.value);
    return;
  }

  const frontButton = event.target.closest("[data-front-lang]");
  if (frontButton) {
    studyFrontLang = frontButton.dataset.frontLang;
    renderStudyCard();
    return;
  }

  const quizDirectionButton = event.target.closest("[data-quiz-dir]");
  if (quizDirectionButton) {
    quizDirection = quizDirectionButton.dataset.quizDir;
    renderQuiz();
    return;
  }

  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) {
    speak(speakButton.dataset.speak);
    return;
  }

  const calendarDayButton = event.target.closest("[data-calendar-day]");
  if (calendarDayButton) {
    selectedDayIndex = Number(calendarDayButton.dataset.calendarDay);
    renderSelectedDay();
  }

  const listedStudyCard = event.target.closest("[data-study-card]");
  if (listedStudyCard) {
    selectedStudyIndex = Number(listedStudyCard.dataset.studyCard);
    renderStudyCard();
  }

});

quizCard.addEventListener("click", () => {
  quizCard.classList.toggle("is-flipped");
});

studyCard.addEventListener("click", () => {
  studyCard.classList.toggle("is-flipped");
});

studyCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    studyCard.classList.toggle("is-flipped");
  }
});

quizCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    quizCard.classList.toggle("is-flipped");
  }
});

speakQuiz.addEventListener("click", () => speak(quizItems[quizIndex][1]));
speakBuiltSentence.addEventListener("click", () => speak(builtSentence.textContent));
speakStudyCard.addEventListener("click", () => speak(selectedDayCards[selectedStudyIndex].english));
prevStudyCard.addEventListener("click", () => moveStudyCard(-1));
nextStudyCard.addEventListener("click", () => moveStudyCard(1));
prevQuiz.addEventListener("click", () => moveQuiz(-1));
nextQuiz.addEventListener("click", () => moveQuiz(1));
departmentOptions.addEventListener("change", () => {
  selectedArea = Number(departmentOptions.value);
  renderBuiltSentence();
});
patternOptions.addEventListener("change", () => {
  selectedPattern = Number(patternOptions.value);
  renderBuiltSentence();
});
resetExercises.addEventListener("click", () => {
  exerciseResults = {};
  renderExercises();
});
shuffleExercises.addEventListener("click", () => {
  exerciseResults = {};
  exerciseSessionNumber += 1;
  buildExerciseSession();
  renderExercises();
});
resetEmailTasks.addEventListener("click", () => {
  emailResults = {};
  renderEmailTasks();
});
shuffleEmailTasks.addEventListener("click", () => {
  emailResults = {};
  emailSessionNumber += 1;
  buildEmailSession();
  renderEmailTasks();
});
window.addEventListener("hashchange", () => showPage(getPageFromHash()));

renderPhrases();
renderEmailPhrases();
renderEmailTasks();
renderExercises();
renderBuilderOptions();
renderBuiltSentence();
renderSelectedDay();
renderQuiz();
showPage(getPageFromHash());
