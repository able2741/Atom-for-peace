// ===========================
// 🧠 MAIN QUIZ QUESTIONS
// ===========================
const questions = [
  { text: "Nuclear technology is only used to build weapons.", answer: false },
  { text: "Radiation therapy can help treat cancer.", answer: true },
  { text: "Nuclear power plants produce zero carbon emissions while running.", answer: true },
  { text: "Food irradiation makes food radioactive and unsafe to eat.", answer: false },
  { text: "Nuclear medicine is used to diagnose heart and bone problems.", answer: true },
  { text: "Tc-99m is one of the most commonly used isotopes in medical imaging.", answer: true },
  { text: "Anyone near a nuclear power plant gets dangerous radiation exposure daily.", answer: false },
  { text: "ALARA stands for 'As Low As Reasonably Achievable.'", answer: true },
  { text: "Nuclear gauges are used in industry to measure thickness or density.", answer: true },
  { text: "All countries with nuclear reactors are building nuclear weapons.", answer: false }
];

// ===========================
// 😂 FUN ZONE QUESTIONS
// ===========================
const funQuestions = [
  { question: "If I stand near a nuclear power plant for one minute, I will glow like a light bulb.", answer: false, fact: "😂 Nope! Nuclear power plants are designed with strong safety systems." },
  { question: "A banana contains a tiny amount of natural radiation.", answer: true, fact: "🍌 Correct! Bananas naturally contain a tiny amount of potassium-40." },
  { question: "Nuclear technology can turn people into superheroes.", answer: false, fact: "🦸 Sorry! That's only in movies." },
  { question: "Food treated with radiation becomes radioactive.", answer: false, fact: "🍕 Wrong myth! Food irradiation makes food safer without making it radioactive." },
  { question: "Some doctors use nuclear technology every day to help patients.", answer: true, fact: "🏥 Yes! It helps diagnose and treat diseases." },
  { question: "Aliens invented nuclear technology.", answer: false, fact: "👽 Nope! Scientists developed it." },
  { question: "Nuclear power can produce electricity even at night.", answer: true, fact: "⚡ Correct! It works day and night." },
  { question: "Nuclear technology can help protect wildlife.", answer: true, fact: "🐘 Yes! Scientists use it to study and protect animals." },
  { question: "If you hear the word 'nuclear', you should immediately run away.", answer: false, fact: "😊 Not always! Nuclear technology has many peaceful uses." },
  { question: "Learning about nuclear technology helps you avoid believing myths.", answer: true, fact: "🧠 Exactly! Knowledge beats fear." }
];

// ===========================
// 🎉 RANDOM MESSAGES
// ===========================
const correctMessages = [
  "🎉 Boom! Correct!",
  "😎 You're smart!",
  "🚀 Amazing!",
  "🌟 Excellent!",
  "👏 Keep going!",
  "⚛️ Peaceful Atom approves!"
];

const wrongMessages = [
  "😂 Oops!",
  "🤔 Nice try!",
  "😊 Don't give up!",
  "💡 Learn and continue!",
  "📚 Almost!"
];

function getRandomMessage(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ===========================
// 🧠 MAIN QUIZ LOGIC
// ===========================
let current = 0;
let score = 0;
let answered = 0;
let correctlyAnswered = new Set();

function loadQuestion() {
  document.getElementById("quiz-question").textContent = questions[current].text;
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";
  updateScore();
}

function answerQuiz(userAnswer) {
  const correct = questions[current].answer;
  const feedback = document.getElementById("quiz-feedback");

  answered++;
  if (userAnswer === correct) {
    feedback.textContent = getRandomMessage(correctMessages);
    feedback.style.color = "green";
    score++;
    correctlyAnswered.add(current);
  } else {
    feedback.textContent = getRandomMessage(wrongMessages) + " That's a " + (correct ? "Fact" : "Myth") + ".";
    feedback.style.color = "red";
  }

  document.getElementById("next-btn").style.display = "inline-block";
  updateScore();
  checkQuizComplete();
  checkCertificateUnlock();
}

function updateScore() {
  document.getElementById("quiz-score").textContent =
    answered > 0 ? "Score: " + score + "/" + answered : "";
}

function nextQuestion() {
  current = (current + 1) % questions.length;
  loadQuestion();
}

function checkQuizComplete() {
  if (correctlyAnswered.size === questions.length) {
    if (typeof confetti === "function") {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
  }
}

// ===========================
// 😂 FUN ZONE LOGIC
// ===========================
let funCurrent = 0;
let funScore = 0;
let funAnswered = 0;
let funCorrectlyAnswered = new Set();

function loadFunQuestion() {
  document.getElementById("fun-question").textContent = funQuestions[funCurrent].question;
  document.getElementById("fun-feedback").textContent = "";
  document.getElementById("fun-next-btn").style.display = "none";
  updateFunScore();
}

function answerFun(userAnswer) {
  const q = funQuestions[funCurrent];
  const feedback = document.getElementById("fun-feedback");

  funAnswered++;
  if (userAnswer === q.answer) {
    feedback.textContent = getRandomMessage(correctMessages) + " " + q.fact;
    feedback.style.color = "green";
    funScore++;
    funCorrectlyAnswered.add(funCurrent);
  } else {
    feedback.textContent = getRandomMessage(wrongMessages) + " " + q.fact;
    feedback.style.color = "red";
  }

  document.getElementById("fun-next-btn").style.display = "inline-block";
  updateFunScore();
  checkCertificateUnlock();
}

function updateFunScore() {
  document.getElementById("fun-score").textContent =
    funAnswered > 0 ? "Score: " + funScore + "/" + funAnswered : "";
}

function nextFunQuestion() {
  funCurrent = (funCurrent + 1) % funQuestions.length;
  loadFunQuestion();
}

// ===========================
// 🏅 CERTIFICATE
// ===========================
function checkCertificateUnlock() {
  const mainDone = correctlyAnswered.size === questions.length;
  const funDone = funCorrectlyAnswered.size === funQuestions.length;
  if (mainDone && funDone) {
    document.getElementById("certificate").style.display = "block";
  }
}

// ===========================
// 🌙 DARK MODE
// ===========================
function setupThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
}

// ===========================
// 💡 DID YOU KNOW FACTS
// ===========================
const funFacts = [
  "A single uranium pellet the size of a fingertip holds as much energy as a tonne of coal.",
  "Nuclear medicine scans are used millions of times every year worldwide to save lives.",
  "Some smoke detectors use a tiny safe radioactive source to detect smoke particles.",
  "The sun itself runs on nuclear fusion — nature's own nuclear reactor.",
  "Nuclear-powered spacecraft have explored as far as Pluto and beyond."
];

function rotateFacts() {
  const factText = document.getElementById("fact-text");
  let i = 0;
  factText.textContent = funFacts[i];
  setInterval(() => {
    i = (i + 1) % funFacts.length;
    factText.style.opacity = 0;
    setTimeout(() => {
      factText.textContent = funFacts[i];
      factText.style.opacity = 1;
    }, 400);
  }, 5000);
}

// ===========================
// 📊 SCROLL PROGRESS BAR
// ===========================
function setupProgressBar() {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
  });
}

// ===========================
// 👁️ FADE IN SECTIONS
// ===========================
function setupFadeIn() {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.05 });
  sections.forEach(section => observer.observe(section));
}

// ===========================
// 📊 STAT COUNTERS
// ===========================
function animateStats() {
  const stats = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"));
        let count = 0;
        const increment = Math.ceil(target / 100);
        const update = () => {
          count += increment;
          if (count >= target) {
            el.textContent = target.toLocaleString();
          } else {
            el.textContent = count.toLocaleString();
            requestAnimationFrame(update);
          }
        };
        update();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });
  stats.forEach(stat => observer.observe(stat));
}

function forceStatsFallback() {
  setTimeout(() => {
    document.querySelectorAll(".stat-number").forEach(el => {
      if (el.textContent === "0") {
        const target = parseInt(el.getAttribute("data-target"));
        el.textContent = target.toLocaleString();
      }
    });
  }, 3000);
}

// ===========================
// ⬆️ BACK TO TOP
// ===========================
function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===========================
// ⏱️ READING TIME
// ===========================
function calculateReadTime() {
  const text = document.querySelector("main").innerText;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  document.getElementById("read-time").textContent = "⏱️ Estimated read time: " + minutes + " min";
}

// ===========================
// 🔍 SEARCH BOX
// ===========================
function setupSearch() {
  const input = document.getElementById("search-input");
  const resultsBox = document.getElementById("search-results");
  const sections = document.querySelectorAll("main section");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    resultsBox.innerHTML = "";
    if (!query) return;
    sections.forEach(section => {
      const heading = section.querySelector("h2");
      if (heading && heading.textContent.toLowerCase().includes(query)) {
        const link = document.createElement("a");
        link.href = "#" + section.id;
        link.textContent = heading.textContent;
        link.onclick = () => { resultsBox.innerHTML = ""; input.value = ""; };
        resultsBox.appendChild(link);
      }
    });
  });
}

// ===========================
// ⌨️ TYPING TITLE
// ===========================
function typeTitle() {
  const el = document.getElementById("typed-title");
  const text = "Peaceful Atom";
  let i = 0;
  function typeChar() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(typeChar, 100);
    }
  }
  typeChar();
}

// ===========================
// ⏱️ READING TIME
// ===========================
function calculateReadTime() {
  const text = document.querySelector("main").innerText;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  document.getElementById("read-time").textContent = "⏱️ Estimated read time: " + minutes + " min";
}

// ===========================
// 🚀 START EVERYTHING
// ===========================
window.onload = () => {
  loadQuestion();
  setupThemeToggle();
  loadFunQuestion();
  rotateFacts();
  setupProgressBar();
  setupFadeIn();
  animateStats();
  forceStatsFallback();
  setupBackToTop();
  calculateReadTime();
  setupSearch();
  typeTitle();
};