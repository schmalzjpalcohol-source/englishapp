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
  ["I'm working in the kitchen department.", "私はキッチン部門で働いています。", "department"],
  ["I'm working in the warehouse department.", "私は倉庫部門で働いています。", "department"],
  ["I'm working in the service department.", "私はサービス部門で働いています。", "department"],
  ["I'm working at the front desk.", "私はフロントで働いています。", "place"],
  ["I'm working on the morning shift.", "私は朝番で働いています。", "shift"],
  ["I'm working with the cleaning team.", "私は清掃チームと働いています。", "team"],
  ["I work in quality control.", "私は品質管理で働いています。", "department"],
  ["I work in customer service.", "私はカスタマーサービスで働いています。", "department"],
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
];

const departments = [
  ["kitchen", "キッチン"],
  ["warehouse", "倉庫"],
  ["cleaning", "清掃"],
  ["service", "サービス"],
  ["front desk", "フロント"],
  ["quality control", "品質管理"],
  ["customer service", "カスタマーサービス"],
  ["packing", "梱包"],
];

const patterns = [
  {
    label: "I'm working in the ... department.",
    help: "私は...部門で働いています。",
    build: (department, jp) => [
      `I'm working in the ${department} department.`,
      `私は${jp}部門で働いています。`,
    ],
  },
  {
    label: "I work in ...",
    help: "私は...で働いています。",
    build: (department, jp) => [`I work in ${department}.`, `私は${jp}で働いています。`],
  },
  {
    label: "I'm helping in ... today.",
    help: "今日は...を手伝っています。",
    build: (department, jp) => [
      `I'm helping in ${department} today.`,
      `今日は${jp}を手伝っています。`,
    ],
  },
  {
    label: "Please take me to ...",
    help: "...へ連れて行ってください。",
    build: (department, jp) => [`Please take me to ${department}.`, `${jp}へ連れて行ってください。`],
  },
  {
    label: "Who is in charge of ...?",
    help: "...の担当者は誰ですか。",
    build: (department, jp) => [
      `Who is in charge of ${department}?`,
      `${jp}の担当者は誰ですか。`,
    ],
  },
  {
    label: "Do I report to ...?",
    help: "...に報告しますか。",
    build: (department, jp) => [`Do I report to ${department}?`, `${jp}に報告しますか。`],
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
];

const phraseList = document.querySelector("#phraseList");
const departmentOptions = document.querySelector("#departmentOptions");
const patternOptions = document.querySelector("#patternOptions");
const builtSentence = document.querySelector("#builtSentence");
const builtJapanese = document.querySelector("#builtJapanese");
const speakBuiltSentence = document.querySelector("#speakBuiltSentence");
const quizCard = document.querySelector("#quizCard");
const quizPrompt = document.querySelector("#quizPrompt");
const quizAnswer = document.querySelector("#quizAnswer");
const speakQuiz = document.querySelector("#speakQuiz");
const prevQuiz = document.querySelector("#prevQuiz");
const nextQuiz = document.querySelector("#nextQuiz");

let quizIndex = 0;
let selectedDepartment = 0;
let selectedPattern = 0;

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
  departmentOptions.innerHTML = departments
    .map(
      ([department, jp], index) => `
        <button class="choice-button ${index === selectedDepartment ? "is-selected" : ""}" data-department="${index}">
          ${department}<br />
          <span>${jp}</span>
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
  const [department, jp] = departments[selectedDepartment];
  const [english, japanese] = patterns[selectedPattern].build(department, jp);
  builtSentence.textContent = english;
  builtJapanese.textContent = japanese;
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
    selectedDepartment = Number(departmentButton.dataset.department);
    renderBuilderOptions();
    renderBuiltSentence();
  }

  const patternButton = event.target.closest("[data-pattern]");
  if (patternButton) {
    selectedPattern = Number(patternButton.dataset.pattern);
    renderBuilderOptions();
    renderBuiltSentence();
  }
});

quizCard.addEventListener("click", () => {
  quizCard.classList.toggle("is-flipped");
});

quizCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    quizCard.classList.toggle("is-flipped");
  }
});

speakQuiz.addEventListener("click", () => speak(quizItems[quizIndex][1]));
speakBuiltSentence.addEventListener("click", () => speak(builtSentence.textContent));
prevQuiz.addEventListener("click", () => moveQuiz(-1));
nextQuiz.addEventListener("click", () => moveQuiz(1));

renderPhrases();
renderBuilderOptions();
renderBuiltSentence();
renderQuiz();
