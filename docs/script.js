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
];

const quizItems = [
  ["気をつけて。", "Be careful."],
  ["それを置いて。", "Put it down."],
  ["私に教えてください。", "Please tell me."],
  ["手伝ってくれますか。", "Can you help me?"],
  ["もう一度言ってください。", "Please say it again."],
  ["何をすればいいですか。", "What should I do?"],
];

const phraseList = document.querySelector("#phraseList");
const quizCard = document.querySelector("#quizCard");
const quizPrompt = document.querySelector("#quizPrompt");
const quizAnswer = document.querySelector("#quizAnswer");
const speakQuiz = document.querySelector("#speakQuiz");
const prevQuiz = document.querySelector("#prevQuiz");
const nextQuiz = document.querySelector("#nextQuiz");

let quizIndex = 0;

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
prevQuiz.addEventListener("click", () => moveQuiz(-1));
nextQuiz.addEventListener("click", () => moveQuiz(1));

renderPhrases();
renderQuiz();
