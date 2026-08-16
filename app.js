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


/* =========================================
   BAŞLAT
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);

async function init() {

  document.documentElement.lang =
    selectedLang;

  await loadDays();

  buildInterface();

  render();
}


/* =========================================
   GÜNLERİ OTOMATİK YÜKLE
========================================= */

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
          day: day,
          questions: questions
        });
      }

    } catch (error) {

      // Dosya yoksa devam et.
    }
  }

  days = loaded;

  if (!days.length) {
    return;
  }

  if (
    currentDayIndex < 0 ||
    currentDayIndex >= days.length
  ) {

    currentDayIndex = 0;
  }

  const total =
    days[currentDayIndex]
      .questions.length;

  if (
    currentQuestionIndex < 0 ||
    currentQuestionIndex >= total
  ) {

    currentQuestionIndex = 0;
  }

  savePosition();
}


/* =========================================
   ARAYÜZ
========================================= */

function buildInterface() {

  const root =
    document.querySelector("#app") ||
    document.querySelector("#questions") ||
    document.querySelector("main") ||
    document.querySelector(".content");

  if (!root) return;

  /*
    Eski içerik temizlenir.
  */

  root.innerHTML = "";

  /*
    KONTROL PANELİ
  */

  const controls =
    document.createElement("div");

  controls.id =
    "compact-controls";

  controls.className =
    "compact-controls";


  /* ARAMA */

  const search =
    document.createElement("input");

  search.type =
    "search";

  search.id =
    "question-search";

  search.placeholder =
    "🔎 Ara...";

  search.autocomplete =
    "off";

  search.addEventListener(
    "input",
    handleSearch
  );


  /* GÜN */

  const daySelect =
    document.createElement("select");

  daySelect.id =
    "day-select";

  daySelect.title =
    "Gün seç";


  /* SORU */

  const questionSelect =
    document.createElement("select");

  questionSelect.id =
    "question-select";

  questionSelect.title =
    "Soru seç";


  controls.appendChild(
    search
  );

  controls.appendChild(
    daySelect
  );

  controls.appendChild(
    questionSelect
  );


  /*
    DİL SEÇİMİ
  */

  const languageContainer =
    document.createElement("div");

  languageContainer.id =
    "language-selector";

  languageContainer.className =
    "language-selector";


  controls.appendChild(
    languageContainer
  );


  root.appendChild(
    controls
  );


  buildDaySelect();

  buildQuestionSelect();

  buildLanguageSelector();

  addMobileStyles();
}


/* =========================================
   GÜN SEÇİMİ
========================================= */

function buildDaySelect() {

  const select =
    document.querySelector(
      "#day-select"
    );

  if (!select) return;

  select.innerHTML = "";

  days.forEach(
    (dayData, index) => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        index;

      option.textContent =
        `${dayData.day}. Gün`;

      if (
        index === currentDayIndex
      ) {

        option.selected =
          true;
      }

      select.appendChild(
        option
      );
    }
  );

  select.onchange =
    function () {

      currentDayIndex =
        Number(this.value);

      currentQuestionIndex =
        0;

      savePosition();

      buildQuestionSelect();

      render();

      scrollTop();
    };
}


/* =========================================
   SORU SEÇİMİ
========================================= */

function buildQuestionSelect() {

  const select =
    document.querySelector(
      "#question-select"
    );

  if (!select || !days.length) {
    return;
  }

  select.innerHTML = "";

  const questions =
    days[currentDayIndex]
      .questions;


  questions.forEach(
    (question, index) => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        index;

      option.textContent =
        `${question.id || index + 1}. Soru`;

      if (
        index === currentQuestionIndex
      ) {

        option.selected =
          true;
      }

      select.appendChild(
        option
      );
    }
  );


  select.onchange =
    function () {

      currentQuestionIndex =
        Number(this.value);

      savePosition();

      render();

      scrollTop();
    };
}


/* =========================================
   DİL SEÇİMİ
========================================= */

function buildLanguageSelector() {

  const container =
    document.querySelector(
      "#language-selector"
    );

  if (!container) return;

  container.innerHTML = "";

  LANGS.forEach(
    language => {

      const button =
        document.createElement(
          "button"
        );

      button.type =
        "button";

      button.textContent =
        language.label;

      if (
        language.key ===
        selectedLang
      ) {

        button.classList.add(
          "active"
        );
      }

      button.onclick =
        function () {

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
        };

      container.appendChild(
        button
      );
    }
  );
}


/* =========================================
   GÖSTER
========================================= */

function render() {

  const root =
    document.querySelector("#app") ||
    document.querySelector("#questions") ||
    document.querySelector("main") ||
    document.querySelector(".content");

  if (!root) return;

  if (!days.length) {

    root.innerHTML =
      "<p>Henüz soru bulunamadı.</p>";

    return;
  }


  /*
    Kontrol panelini koru.
  */

  const controls =
    document.querySelector(
      "#compact-controls"
    );


  /*
    Eski soru alanlarını temizle.
  */

  Array.from(
    root.children
  ).forEach(
    child => {

      if (
        child !== controls
      ) {

        child.remove();
      }
    }
  );


  /*
    GÜN BAŞLIĞI
  */

  const dayData =
    days[currentDayIndex];

  const question =
    dayData.questions[
      currentQuestionIndex
    ];


  const dayTitle =
    document.createElement(
      "h2"
    );

  dayTitle.className =
    "day-title";

  dayTitle.textContent =
    question.dayTitle ||
    `${dayData.day}. Gün`;

  root.appendChild(
    dayTitle
  );


  /*
    TEK SORU
  */

  const card =
    renderQuestion(
      question
    );

  root.appendChild(
    card
  );


  /*
    ALT BUTONLAR
  */

  const navigation =
    createNavigation();

  root.appendChild(
    navigation
  );
}


/* =========================================
   TEK SORU
========================================= */

function renderQuestion(
  question
) {

  const article =
    document.createElement(
      "article"
    );

  article.className =
    "question-card";


  /*
    SEÇİLEN DİL İLK,
    DİĞER 8 DİL ARKASINDA.
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
        document.createElement(
          "div"
        );

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
        document.createElement(
          "div"
        );

      questionLine.className =
        "question-line";

      questionLine.textContent =
        `${language.label} ${question.id}. ${data.q}`;


      /*
        CEVAP
      */

      const answerLine =
        document.createElement(
          "div"
        );

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


  /*
    KAYNAKLAR
  */

  if (
    Array.isArray(
      question.sources
    ) &&
    question.sources.length
  ) {

    article.appendChild(
      renderSources(
        question.sources
      )
    );
  }


  return article;
}


/* =========================================
   KAYNAKLAR
========================================= */

function renderSources(
  sources
) {

  const container =
    document.createElement(
      "div"
    );

  container.className =
    "sources";


  const title =
    document.createElement(
      "h3"
    );

  title.textContent =
    SOURCE_TITLE[
      selectedLang
    ] || "📚 Kaynaklar";

  container.appendChild(
    title
  );


  const list =
    document.createElement(
      "ul"
    );


  sources.forEach(
    source => {

      const item =
        document.createElement(
          "li"
        );


      /*
        Yeni format:

        {
          title: "...",
          url: "..."
        }
      */

      if (
        typeof source ===
        "object" &&
        source !== null
      ) {

        const label =
          document.createElement(
            "span"
          );

        label.textContent =
          source.title ||
          source.name ||
          "Kaynak";

        item.appendChild(
          label
        );


        if (source.url) {

          item.appendChild(
            document.createTextNode(
              " "
            )
          );

          item.appendChild(
            createLink(
              source.url
            )
          );
        }

      } else {

        /*
          Eski düz metin kaynak formatı
        */

        const text =
          String(source);

        const match =
          text.match(
            /https?:\/\/[^\s|]+/i
          );


        if (match) {

          const url =
            match[0];

          const label =
            text
              .replace(
                url,
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
            createLink(
              url
            )
          );

        } else {

          item.textContent =
            text;
        }
      }


      list.appendChild(
        item
      );
    }
  );


  container.appendChild(
    list
  );

  return container;
}


/* =========================================
   KAYNAK LİNKİ
========================================= */

function createLink(
  url
) {

  const link =
    document.createElement(
      "a"
    );

  link.href =
    url;

  link.target =
    "_blank";

  link.rel =
    "noopener noreferrer";

  link.textContent =
    `🔗 ${
      OPEN_TEXT[selectedLang] ||
      "Kaynağı aç"
    }`;

  return link;
}


/* =========================================
   ALT NAVİGASYON
========================================= */

function createNavigation() {

  const container =
    document.createElement(
      "div"
    );

  container.className =
    "question-navigation";


  const previous =
    document.createElement(
      "button"
    );

  previous.textContent =
    "← Önceki";


  previous.disabled =
    currentQuestionIndex === 0;


  previous.onclick =
    function () {

      if (
        currentQuestionIndex > 0
      ) {

        currentQuestionIndex--;

        savePosition();

        buildQuestionSelect();

        render();

        scrollTop();
      }
    };


  const indicator =
    document.createElement(
      "span"
    );

  const total =
    days[currentDayIndex]
      .questions.length;

  indicator.textContent =
    `${currentQuestionIndex + 1} / ${total}`;


  const next =
    document.createElement(
      "button"
    );

  next.textContent =
    "Sonraki →";


  next.disabled =
    currentQuestionIndex >=
    total - 1;


  next.onclick =
    function () {

      if (
        currentQuestionIndex <
        total - 1
      ) {

        currentQuestionIndex++;

        savePosition();

        buildQuestionSelect();

        render();

        scrollTop();
      }
    };


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


/* =========================================
   ARAMA
========================================= */

function handleSearch(event) {

  const value =
    event.target.value
      .trim()
      .toLocaleLowerCase(
        "tr-TR"
      );

  if (!value) {
    return;
  }


  /*
    Bütün günlerde,
    bütün dillerde ara.
  */

  for (
    let d = 0;
    d < days.length;
    d++
  ) {

    const questions =
      days[d].questions;


    for (
      let q = 0;
      q < questions.length;
      q++
    ) {

      const question =
        questions[q];


      /*
        Soru numarası
      */

      if (
        String(
          question.id
        ).includes(value)
      ) {

        currentDayIndex = d;

        currentQuestionIndex = q;

        savePosition();

        buildQuestionSelect();

        render();

        return;
      }


      /*
        9 dilde ara
      */

      for (
        const language
        of LANGS
      ) {

        const data =
          question[
            language.key
          ];

        if (!data) continue;

        const text =
          `${data.q || ""} ${
            data.a || ""
          }`
          .toLocaleLowerCase(
            "tr-TR"
          );


        if (
          text.includes(value)
        ) {

          currentDayIndex = d;

          currentQuestionIndex = q;

          savePosition();

          buildQuestionSelect();

          render();

          return;
        }
      }
    }
  }
}


/* =========================================
   POZİSYON
========================================= */

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


/* =========================================
   SAYFANIN BAŞINA
========================================= */

function scrollTop() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================
   TELEFON İÇİN KÜÇÜK TASARIM
========================================= */

function addMobileStyles() {

  if (
    document.getElementById(
      "mobile-yol-haritasi-style"
    )
  ) {
    return;
  }


  const style =
    document.createElement(
      "style"
    );

  style.id =
    "mobile-yol-haritasi-style";

  style.textContent = `

    #compact-controls {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      align-items: center;
      margin-bottom: 10px;
      padding: 5px;
      position: sticky;
      top: 0;
      z-index: 100;
      background: inherit;
    }

    #question-search {
      flex: 1 1 110px;
      min-width: 90px;
      height: 32px;
      padding: 4px 7px;
      font-size: 13px;
      box-sizing: border-box;
    }

    #day-select,
    #question-select {
      height: 32px;
      max-width: 105px;
      padding: 2px 5px;
      font-size: 12px;
      box-sizing: border-box;
    }

    .language-selector {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 3px;
      margin-top: 3px;
    }

    .language-selector button {
      font-size: 11px;
      padding: 3px 5px;
      border-radius: 5px;
    }

    .day-title {
      margin: 8px 0;
      font-size: 20px;
    }

    .question-card {
      width: 100%;
      box-sizing: border-box;
    }

    .language-block {
      padding: 9px 7px;
      margin-bottom: 5px;
      border-bottom: 1px solid #ddd;
    }

    .selected-language {
      border-left: 4px solid currentColor;
      padding-left: 9px;
    }

    .question-line {
      font-weight: 700;
      line-height: 1.45;
      margin-bottom: 4px;
    }

    .answer-line {
      line-height: 1.5;
    }

    .sources {
      margin-top: 10px;
      padding: 10px;
      border-radius: 7px;
      border: 1px solid #ddd;
    }

    .sources h3 {
      margin: 0 0 7px 0;
      font-size: 16px;
    }

    .sources li {
      margin-bottom: 6px;
      line-height: 1.4;
    }

    .sources a {
      white-space: nowrap;
    }

    .question-navigation,
    .day-navigation {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin: 12px 0;
    }

    .question-navigation button,
    .day-navigation button {
      font-size: 13px;
      padding: 7px 10px;
      border-radius: 6px;
    }

    .question-navigation span,
    .day-navigation span {
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
    }

    @media (max-width: 600px) {

      #compact-controls {
        gap: 4px;
      }

      #question-search {
        flex: 1 1 100%;
        height: 30px;
      }

      #day-select,
      #question-select {
        flex: 1;
        max-width: none;
        height: 30px;
      }

      .language-selector button {
        font-size: 10px;
        padding: 3px 4px;
      }

      .question-line,
      .answer-line {
        font-size: 14px;
      }
    }

  `;

  document.head.appendChild(
    style
  );
            }
