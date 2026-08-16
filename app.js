const LANGS = [
  { key: "tr", label: "🇹🇷 Türkçe" },
  { key: "en", label: "🇬🇧 English" },
  { key: "de", label: "🇩🇪 Deutsch" },
  { key: "ru", label: "🇷🇺 Русский" },
  { key: "ku", label: "🇹🇯 Kurmancî" },
  { key: "tt", label: "🇹🇹 Tatarca" },
  { key: "fr", label: "🇫🇷 Français" },
  { key: "es", label: "🇪🇸 Español" },
  { key: "ar", label: "🇸🇦 العربية" }
];

const SOURCE_TITLE = {
  tr: "📚 Kaynaklar",
  en: "📚 Sources",
  de: "📚 Quellen",
  ru: "📚 Источники",
  ku: "📚 Çavkanî",
  tt: "📚 Чыганаклар",
  fr: "📚 Sources",
  es: "📚 Fuentes",
  ar: "📚 الْمَصَادِرُ"
};

const OPEN_TEXT = {
  tr: "Kaynağı aç",
  en: "Open source",
  de: "Quelle öffnen",
  ru: "Открыть источник",
  ku: "Çavkaniyê veke",
  tt: "Чыганакны ач",
  fr: "Ouvrir la source",
  es: "Abrir fuente",
  ar: "فَتْحُ الْمَصْدَرِ"
};

let selectedLang =
  localStorage.getItem("selectedLang") || "tr";

let days = [];

let currentDayIndex =
  Number(localStorage.getItem("currentDayIndex") || 0);

let currentQuestionIndex =
  Number(localStorage.getItem("currentQuestionIndex") || 0);


/* =========================
   BAŞLAT
========================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);

async function init() {

  document.documentElement.lang =
    selectedLang;

  await loadDays();

  buildLanguageSelector();

  render();
}


/* =========================
   DİLLER
========================= */

function buildLanguageSelector() {

  const container =
    document.querySelector("#language-selector") ||
    document.querySelector(".language-selector") ||
    document.querySelector("#languages");

  if (!container) return;

  container.innerHTML = "";

  LANGS.forEach(language => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.textContent =
      language.label;

    button.className =
      language.key === selectedLang
        ? "active"
        : "";

    button.addEventListener(
      "click",
      () => {

        selectedLang =
          language.key;

        localStorage.setItem(
          "selectedLang",
          selectedLang
        );

        document.documentElement.lang =
          selectedLang;

        buildLanguageSelector();

        render();
      }
    );

    container.appendChild(button);
  });
}


/* =========================
   GÜNLERİ YÜKLE
========================= */

async function loadDays() {

  const loaded = [];

  for (
    let day = 1;
    day <= 365;
    day++
  ) {

    const file =
      `data/day-${String(day).padStart(2, "0")}.json`;

    try {

      const response =
        await fetch(
          file,
          {
            cache: "no-store"
          }
        );

      if (!response.ok) {
        continue;
      }

      const data =
        await response.json();

      let questions = [];

      if (Array.isArray(data)) {

        questions = data;

      } else if (
        data &&
        Array.isArray(data.questions)
      ) {

        questions =
          data.questions;
      }

      if (questions.length) {

        loaded.push({
          day,
          questions
        });
      }

    } catch (error) {

      // Henüz eklenmemiş günleri geç.
    }
  }

  days = loaded;

  if (
    currentDayIndex >= days.length
  ) {

    currentDayIndex = 0;
  }

  if (
    days.length &&
    currentQuestionIndex >=
      days[currentDayIndex].questions.length
  ) {

    currentQuestionIndex = 0;
  }
}


/* =========================
   ANA EKRAN
========================= */

function render() {

  const root =
    document.querySelector("#app") ||
    document.querySelector("#questions") ||
    document.querySelector("main") ||
    document.querySelector(".content");

  if (!root) return;

  root.innerHTML = "";

  if (!days.length) {

    const message =
      document.createElement("p");

    message.textContent =
      "Henüz günlük soru dosyası bulunamadı.";

    root.appendChild(message);

    return;
  }

  const dayData =
    days[currentDayIndex];

  const question =
    dayData.questions[
      currentQuestionIndex
    ];

  /* =========================
     GÜN KONTROLÜ
  ========================= */

  const dayNavigation =
    createDayNavigation();

  root.appendChild(
    dayNavigation
  );


  /* =========================
     GÜN BAŞLIĞI
  ========================= */

  const dayTitle =
    document.createElement("h2");

  dayTitle.className =
    "day-title";

  dayTitle.textContent =
    question.dayTitle ||
    `${dayData.day}. Gün`;

  root.appendChild(
    dayTitle
  );


  /* =========================
     SORU NAVİGASYONU
  ========================= */

  const questionNavigation =
    createQuestionNavigation();

  root.appendChild(
    questionNavigation
  );


  /* =========================
     TEK SORU
  ========================= */

  const questionCard =
    renderQuestion(question);

  root.appendChild(
    questionCard
  );


  /* =========================
     ALT NAVİGASYON
  ========================= */

  const bottomNavigation =
    createQuestionNavigation();

  root.appendChild(
    bottomNavigation
  );


  /*
    Her soru değiştiğinde
    sayfanın başına dön.
  */

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   GÜN BUTONLARI
========================= */

function createDayNavigation() {

  const container =
    document.createElement("div");

  container.className =
    "day-navigation";


  const previous =
    document.createElement("button");

  previous.type = "button";

  previous.textContent =
    "← Önceki Gün";

  previous.disabled =
    currentDayIndex === 0;

  previous.addEventListener(
    "click",
    previousDay
  );


  const indicator =
    document.createElement("span");

  indicator.className =
    "day-indicator";

  indicator.textContent =
    `${days[currentDayIndex].day}. Gün`;


  const next =
    document.createElement("button");

  next.type = "button";

  next.textContent =
    "Sonraki Gün →";

  next.disabled =
    currentDayIndex ===
    days.length - 1;

  next.addEventListener(
    "click",
    nextDay
  );


  container.appendChild(
    previous
  );

  container.appendChild(
    indicator
  );

  container.appendChild(
    next
  );

  return container;
}


/* =========================
   SORU BUTONLARI
========================= */

function createQuestionNavigation() {

  const container =
    document.createElement("div");

  container.className =
    "question-navigation";


  const previous =
    document.createElement("button");

  previous.type = "button";

  previous.textContent =
    "← Önceki Soru";

  previous.disabled =
    currentQuestionIndex === 0;

  previous.addEventListener(
    "click",
    previousQuestion
  );


  const indicator =
    document.createElement("span");

  indicator.className =
    "question-indicator";

  const total =
    days[currentDayIndex]
      .questions.length;

  indicator.textContent =
    `${currentQuestionIndex + 1} / ${total}`;


  const next =
    document.createElement("button");

  next.type = "button";

  next.textContent =
    "Sonraki Soru →";

  next.disabled =
    currentQuestionIndex >=
    total - 1;

  next.addEventListener(
    "click",
    nextQuestion
  );


  container.appendChild(
    previous
  );

  container.appendChild(
    indicator
  );

  container.appendChild(
    next
  );

  return container;
}


/* =========================
   ÖNCEKİ SORU
========================= */

function previousQuestion() {

  if (
    currentQuestionIndex > 0
  ) {

    currentQuestionIndex--;

    savePosition();

    render();
  }
}


/* =========================
   SONRAKİ SORU
========================= */

function nextQuestion() {

  const total =
    days[currentDayIndex]
      .questions.length;

  if (
    currentQuestionIndex <
    total - 1
  ) {

    currentQuestionIndex++;

    savePosition();

    render();
  }
}


/* =========================
   ÖNCEKİ GÜN
========================= */

function previousDay() {

  if (
    currentDayIndex > 0
  ) {

    currentDayIndex--;

    currentQuestionIndex = 0;

    savePosition();

    render();
  }
}


/* =========================
   SONRAKİ GÜN
========================= */

function nextDay() {

  if (
    currentDayIndex <
    days.length - 1
  ) {

    currentDayIndex++;

    currentQuestionIndex = 0;

    savePosition();

    render();
  }
}


/* =========================
   POZİSYONU KAYDET
========================= */

function savePosition() {

  localStorage.setItem(
    "currentDayIndex",
    currentDayIndex
  );

  localStorage.setItem(
    "currentQuestionIndex",
    currentQuestionIndex
  );
}


/* =========================
   TEK SORUYU OLUŞTUR
========================= */

function renderQuestion(question) {

  const article =
    document.createElement("article");

  article.className =
    "question-card";


  /*
    Seçilen dil HER ZAMAN İLK.
  */

  const orderedLanguages = [

    selectedLang,

    ...LANGS
      .map(
        language =>
          language.key
      )
      .filter(
        key =>
          key !== selectedLang
      )
  ];


  /*
    9 DİL
  */

  orderedLanguages.forEach(
    languageKey => {

      const language =
        LANGS.find(
          item =>
            item.key ===
            languageKey
        );

      const data =
        question[languageKey];

      if (!data) return;


      const block =
        document.createElement("div");

      block.className =
        `language-block lang-${languageKey}`;


      if (
        languageKey ===
        selectedLang
      ) {

        block.classList.add(
          "selected-language"
        );
      }


      /*
        SORU
      */

      const questionLine =
        document.createElement("div");

      questionLine.className =
        "question-line";

      questionLine.textContent =
        `${language.label} ${question.id}. ${data.q}`;


      /*
        CEVAP
      */

      const answerLine =
        document.createElement("div");

      answerLine.className =
        "answer-line";

      answerLine.textContent =
        `${language.label} ${question.id}. ${data.a}`;


      block.appendChild(
        questionLine
      );

      block.appendChild(
        answerLine
      );

      article.appendChild(
        block
      );
    }
  );


  /* =========================
     KAYNAKLAR
  ========================= */

  if (
    Array.isArray(question.sources) &&
    question.sources.length > 0
  ) {

    article.appendChild(
      renderSources(
        question.sources,
        selectedLang
      )
    );
  }


  return article;
}


/* =========================
   KAYNAKLAR
========================= */

function renderSources(
  sources,
  language
) {

  const container =
    document.createElement("div");

  container.className =
    "sources";


  const title =
    document.createElement("h4");

  title.textContent =
    SOURCE_TITLE[language] ||
    SOURCE_TITLE.tr;

  container.appendChild(
    title
  );


  const list =
    document.createElement("ul");


  sources.forEach(source => {

    const item =
      document.createElement("li");


    /*
      YENİ KAYNAK FORMATI

      {
        "title": "...",
        "url": "https://..."
      }
    */

    if (
      typeof source === "object" &&
      source !== null
    ) {

      const sourceTitle =
        document.createElement("span");

      sourceTitle.textContent =
        source.title ||
        source.name ||
        "Kaynak";

      item.appendChild(
        sourceTitle
      );


      if (source.url) {

        item.appendChild(
          document.createTextNode(" ")
        );

        item.appendChild(
          createSourceLink(
            source.url,
            source.linkText ||
            OPEN_TEXT[language] ||
            OPEN_TEXT.tr
          )
        );
      }
    }


    /*
      ESKİ FORMAT

      "📖 Kur'an — ... https://..."
    */

    else {

      const text =
        String(source);

      const urlMatch =
        text.match(
          /https?:\/\/[^\s|]+/i
        );


      if (urlMatch) {

        const url =
          urlMatch[0];

        const label =
          text
            .replace(url, "")
            .replace(
              /\s*[|—-]\s*$/,
              ""
            )
            .trim();


        item.appendChild(
          document.createTextNode(
            label
          )
        );


        item.appendChild(
          document.createTextNode(
            " "
          )
        );


        item.appendChild(
          createSourceLink(
            url,
            OPEN_TEXT[language] ||
            OPEN_TEXT.tr
          )
        );

      } else {

        item.appendChild(
          document.createTextNode(
            text
          )
        );
      }
    }


    list.appendChild(
      item
    );
  });


  container.appendChild(
    list
  );

  return container;
}


/* =========================
   KAYNAK LİNKİ
========================= */

function createSourceLink(
  url,
  text
) {

  const link =
    document.createElement("a");

  link.href =
    url;

  link.target =
    "_blank";

  link.rel =
    "noopener noreferrer";

  link.textContent =
    `🔗 ${text}`;

  return link;
                }
