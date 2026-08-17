/* =========================================
   DİLLER
========================================= */

const LANGS = [
  { key: "tr", flag: "🇹🇷", name: "Türkçe" },
  { key: "en", flag: "🇬🇧", name: "English" },
  { key: "de", flag: "🇩🇪", name: "Deutsch" },
  { key: "ru", flag: "🇷🇺", name: "Русский" },
  { key: "ku", flag: "🇬🇭", name: "Kurmancî" },
  { key: "ar", flag: "🇸🇦", name: "العربية" },
  { key: "tt", flag: "🇭🇺", name: "Tatarca" },
  { key: "fr", flag: "🇫🇷", name: "Français" },
  { key: "es", flag: "🇪🇸", name: "Español" },
  { key: "nl", flag: "🇳🇱", name: "Nederlands" },
  { key: "it", flag: "🇮🇹", name: "Italiano" }
];

/* =========================================
   ARAYÜZ METİNLERİ
========================================= */

const UI = { /* senin mevcut UI objen burada aynı kalacak */ };

/* =========================================
   AYARLAR
========================================= */

let selectedLang = localStorage.getItem("selectedLang") || "tr";
if (!UI[selectedLang]) selectedLang = "tr";

let days = [];
let currentDayIndex = 0;
let currentQuestionIndex = 0;

/* =========================================
   BAŞLAT
========================================= */

document.addEventListener("DOMContentLoaded", init);

async function init() {
  document.documentElement.lang = selectedLang;

  renderHome();
  await loadDaysFromIndex();
  renderHome();
}

/* =========================================
   INDEX.JSON → GÜNLERİ YÜKLE
========================================= */

async function loadDaysFromIndex() {
  console.log("📚 index.json yükleniyor...");

  let indexData;

  try {
    indexData = await fetch("index.json?v=" + Date.now()).then(r => r.json());
  } catch (e) {
    console.error("❌ index.json yüklenemedi:", e);
    return;
  }

  if (!indexData.days || !Array.isArray(indexData.days)) {
    console.error("❌ index.json içinde 'days' listesi yok.");
    return;
  }

  days = [];

  for (const item of indexData.days) {
    try {
      const response = await fetch(item.file + "?v=" + Date.now());
      if (!response.ok) {
        console.warn("⚠️ Gün dosyası bulunamadı:", item.file);
        continue;
      }

      const text = await response.text();
      if (!text.trim()) {
        console.warn("⚠️ Gün dosyası boş:", item.file);
        continue;
      }

      const json = JSON.parse(text);

      const questions = Array.isArray(json) ? json : json.questions;

      if (!questions || !questions.length) {
        console.warn("⚠️ Gün içinde soru yok:", item.file);
        continue;
      }

      days.push({
        number: days.length + 1,
        file: item.file,
        title: item.title,
        range: item.range,
        questions,
        info: json
      });

      console.log(`✅ ${item.file} yüklendi (${questions.length} soru)`);

    } catch (e) {
      console.error("❌ Gün yüklenemedi:", item.file, e);
    }
  }

  console.log("📚 Toplam yüklenen gün:", days.length);
}

/* =========================================
   GÜN BAŞLIĞI (index.json’dan)
========================================= */

function getDayTitle(dayData) {
  return dayData.title || `${dayData.number}. Gün`;
}

/* =========================================
   GÜN ALT BAŞLIĞI (JSON’dan)
========================================= */

function getDaySubtitle(dayData) {
  const info = dayData.info || {};
  if (info.daySubtitle && typeof info.daySubtitle === "object") {
    return info.daySubtitle[selectedLang] || info.daySubtitle.tr || "";
  }
  return "";
}

/* =========================================
   ANA SAYFA
========================================= */

function renderHome() {
  const home = document.querySelector("#home-page");
  const questionPage = document.querySelector("#question-page");

  if (!home || !questionPage) return;

  home.style.display = "block";
  questionPage.style.display = "none";

  const selector = document.querySelector("#home-language-selector");
  if (selector) renderLanguageButtons(selector);

  const roadmapTitle = home.querySelector(".roadmap-title");
  if (roadmapTitle) {
    roadmapTitle.innerHTML = "";
    const title = UI[selectedLang].title;
    const words = title.trim().split(/\s+/);
    const middle = Math.ceil(words.length / 2);

    const firstLine = document.createElement("div");
    firstLine.textContent = words.slice(0, middle).join(" ");

    const secondLine = document.createElement("div");
    secondLine.textContent = words.slice(middle).join(" ");

    roadmapTitle.appendChild(firstLine);
    roadmapTitle.appendChild(secondLine);
  }

  const subtitle = home.querySelector(".home-subtitle");
  if (subtitle) subtitle.textContent = UI[selectedLang].subtitle;

  const sectionTitle = home.querySelector(".days-section h2");
  if (sectionTitle) sectionTitle.textContent = UI[selectedLang].days;

  const list = document.querySelector("#days-list");
  if (!list) return;

  list.innerHTML = "";

  if (!days.length) {
    const message = document.createElement("p");
    message.className = "loading-days";
    message.textContent = UI[selectedLang].noDays;
    list.appendChild(message);
    return;
  }

  days.forEach((dayData, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "day-card";

    const titleLine = document.createElement("div");
    titleLine.className = "day-card-title";
    titleLine.textContent = `${dayData.title} · ${dayData.questions.length} ${UI[selectedLang].questionCount}`;
    card.appendChild(titleLine);

    const subtitleLine = document.createElement("div");
    subtitleLine.className = "day-card-subtitle";
    subtitleLine.textContent = getDaySubtitle(dayData);
    card.appendChild(subtitleLine);

    card.addEventListener("click", () => {
      currentDayIndex = index;
      currentQuestionIndex = 0;
      renderQuestion();
    });

    list.appendChild(card);
  });
}

/* =========================================
   SORU SAYFASI
========================================= */

function renderQuestion() {
  const home = document.querySelector("#home-page");
  const page = document.querySelector("#question-page");

  if (!home || !page) return;

  if (!days.length || !days[currentDayIndex]) {
    renderHome();
    return;
  }

  home.style.display = "none";
  page.style.display = "block";

  const dayData = days[currentDayIndex];
  const question = dayData.questions[currentQuestionIndex];

  const content = document.querySelector("#question-content");
  if (!content) return;

  content.innerHTML = "";

  const dayTitle = document.createElement("h2");
  dayTitle.className = "question-day-title";
  dayTitle.textContent = getDayTitle(dayData);
  content.appendChild(dayTitle);

  const card = document.createElement("article");
  card.className = "question-card";

  const languageOrder = [
    selectedLang,
    ...LANGS.map(l => l.key).filter(k => k !== selectedLang)
  ];

  languageOrder.forEach(languageKey => {
    const language = LANGS.find(l => l.key === languageKey);
    const data = question[languageKey];

    if (!language || !data) return;

    const block = document.createElement("div");
    block.className = "language-block";

    if (languageKey === "ar") {
      block.classList.add("arabic-language");
      block.setAttribute("dir", "rtl");
    }

    if (languageKey === selectedLang) {
      block.classList.add("selected-language");
    }

    const q = document.createElement("div");
    q.className = "question-line";
    q.textContent = `${language.flag} ${question.id}. ${data.q}`;

    const a = document.createElement("div");
    a.className = "answer-line";
    a.textContent = `${language.flag} ${question.id}. ${data.a}`;

    block.appendChild(q);
    block.appendChild(a);
    card.appendChild(block);
  });

  if (Array.isArray(question.sources) && question.sources.length) {
    card.appendChild(renderSources(question.sources));
  }

  content.appendChild(card);

  const top = document.querySelector("#top-navigation");
  const bottom = document.querySelector("#bottom-navigation");

  if (top) {
    top.innerHTML = "";
    top.appendChild(createNavigation());
  }

  if (bottom) {
    bottom.innerHTML = "";
    bottom.appendChild(createNavigation());
  }

  addQuestionLanguageSelector();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================
   DİL BUTONLARI
========================================= */

function renderLanguageButtons(container) {
  if (!container) return;

  container.innerHTML = "";

  LANGS.forEach(language => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "language-button";
    button.textContent = language.flag;
    button.title = language.name;
    button.setAttribute("aria-label", language.name);

    if (language.key === selectedLang) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      selectedLang = language.key;
      localStorage.setItem("selectedLang", selectedLang);
      document.documentElement.lang = selectedLang;

      const questionPage = document.querySelector("#question-page");
      if (questionPage && questionPage.style.display !== "none") {
        renderQuestion();
      } else {
        renderHome();
      }
    });

    container.appendChild(button);
  });
}

/* =========================================
   NAVİGASYON
========================================= */

function createNavigation() {
  const row = document.createElement("div");
  row.className = "navigation-row";

  const previousQuestion = makeButton(UI[selectedLang].previousQuestion);
  previousQuestion.disabled = currentQuestionIndex === 0;
  previousQuestion.onclick = () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  };

  const nextQuestion = makeButton(UI[selectedLang].nextQuestion);
  nextQuestion.disabled =
    currentQuestionIndex >= days[currentDayIndex].questions.length - 1;
  nextQuestion.onclick = () => {
    if (currentQuestionIndex < days[currentDayIndex].questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    }
  };

  const home = makeButton(UI[selectedLang].home);
  home.onclick = () => {
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousDay = makeButton(UI[selectedLang].previousDay);
  previousDay.disabled = currentDayIndex === 0;
  previousDay.onclick = () => {
    if (currentDayIndex > 0) {
      currentDayIndex--;
      currentQuestionIndex = 0;
      renderQuestion();
    }
  };

  const nextDay = makeButton(UI[selectedLang].nextDay);
  nextDay.disabled = currentDayIndex >= days.length - 1;
  nextDay.onclick = () => {
    if (currentDayIndex < days.length - 1) {
      currentDayIndex++;
      currentQuestionIndex = 0;
      renderQuestion();
    }
  };

  row.appendChild(previousQuestion);
  row.appendChild(nextQuestion);
  row.appendChild(home);
  row.appendChild(previousDay);
  row.appendChild(nextDay);

  return row;
}

/* =========================================
   BUTON OLUŞTUR
========================================= */

function makeButton(text) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  return button;
}

/* =========================================
   KAYNAKLAR
========================================= */

function renderSources(sources) {
  const box = document.createElement("div");
  box.className = "sources";

  const title = document.createElement("h3");
  title.textContent = UI[selectedLang].source;
  box.appendChild(title);

  const list = document.createElement("ul");

  sources.forEach(source => {
    const li = document.createElement("li");

    let text = "";
    let url = "";

    if (typeof source === "object" && source !== null) {
      text = source.title || source.name || "Kaynak";
      url = source.url || "";
    } else {
      text = String(source);
      const match = text.match(/https?:\/\/[^\s|]+/i);
      if (match) {
        url = match[0];
        text = text.replace(url, "").trim();
      }
    }

    if (!url) url = getSourceUrl(text);

    if (url) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = text;
      link.title = UI[selectedLang].openSource;
      li.appendChild(link);
    } else {
      li.textContent = text;
    }

    list.appendChild(li);
  });

  box.appendChild(list);
  return box;
}

/* =========================================
   KAYNAK URL'LERİ
========================================= */

function getSourceUrl(source) {
  const text = String(source).toLowerCase();

  const quranMatch = text.match(
    /(?:kur['’]an|qur['’]?an|coran|коран)[^0-9]*(\d+)[\s:.-]+(\d+)/i
  );

  if (quranMatch) {
    const surah = quranMatch[1];
    const verse = quranMatch[2];
    return `https://quran.com/${surah}?startingVerse=${verse}`;
  }

  return "";
}
