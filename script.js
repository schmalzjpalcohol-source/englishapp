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
const speakStudyCard = document.querySelector("#speakStudyCard");
const prevStudyCard = document.querySelector("#prevStudyCard");
const nextStudyCard = document.querySelector("#nextStudyCard");
const dailyCardList = document.querySelector("#dailyCardList");
const quizCard = document.querySelector("#quizCard");
const quizPrompt = document.querySelector("#quizPrompt");
const quizAnswer = document.querySelector("#quizAnswer");
const speakQuiz = document.querySelector("#speakQuiz");
const prevQuiz = document.querySelector("#prevQuiz");
const nextQuiz = document.querySelector("#nextQuiz");

let quizIndex = 0;
let selectedArea = 0;
let selectedPattern = 0;
let selectedDayIndex = 1;
let selectedStudyIndex = 0;
let selectedDayCards = [];
let studyFrontLang = "en";

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
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

function renderBuilderOptions() {
  departmentOptions.innerHTML = workAreas
    .map(
      (area, index) => `
        <button class="choice-button ${index === selectedArea ? "is-selected" : ""}" data-department="${index}">
          ${area.short}<br />
          <span>${area.jp}</span>
        </button>
      `,
    )
    .join("");

  patternOptions.innerHTML = patterns
    .map(
      (pattern, index) => `
        <button class="pattern-button ${index === selectedPattern ? "is-selected" : ""}" data-pattern="${index}">
          ${pattern.label}
          <span>${pattern.help}</span>
        </button>
      `,
    )
    .join("");
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

function renderStudyCard() {
  const card = selectedDayCards[selectedStudyIndex];
  if (!card) return;
  const sides = getStudySides(card);
  studyCardType.textContent = `${card.kind === "new" ? "New card" : `Review after ${card.interval}d`} / ${sides.promptLang}`;
  studyPrompt.textContent = sides.prompt;
  studyAnswer.textContent = sides.answer;
  studyCard.classList.remove("is-flipped");

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
  quizPrompt.textContent = prompt;
  quizAnswer.textContent = answer;
  quizCard.classList.remove("is-flipped");
}

function moveQuiz(direction) {
  quizIndex = (quizIndex + direction + quizItems.length) % quizItems.length;
  renderQuiz();
}

document.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) {
    speak(speakButton.dataset.speak);
  }

  const departmentButton = event.target.closest("[data-department]");
  if (departmentButton) {
    selectedArea = Number(departmentButton.dataset.department);
    renderBuilderOptions();
    renderBuiltSentence();
  }

  const patternButton = event.target.closest("[data-pattern]");
  if (patternButton) {
    selectedPattern = Number(patternButton.dataset.pattern);
    renderBuilderOptions();
    renderBuiltSentence();
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

  const frontButton = event.target.closest("[data-front-lang]");
  if (frontButton) {
    studyFrontLang = frontButton.dataset.frontLang;
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

renderPhrases();
renderBuilderOptions();
renderBuiltSentence();
renderSelectedDay();
renderQuiz();
