const LANGS = [
  { key: "tr", flag: "🇹🇷", name: "Türkçe" },
  { key: "en", flag: "🇬🇧", name: "English" },
  { key: "de", flag: "🇩🇪", name: "Deutsch" },
  { key: "ru", flag: "🇷🇺", name: "Русский" },
  { key: "ku", flag: "🇹🇯", name: "Kurmancî" },
  { key: "tt", flag: "🇹🇹", name: "Tatarca" },
  { key: "fr", flag: "🇫🇷", name: "Français" },
  { key: "es", flag: "🇪🇸", name: "Español" },
  { key: "ar", flag: "🇸🇦", name: "العربية" }
];

const UI = {
  tr: {
    title: "Bir Müslümanın Yol Haritası",
    subtitle: "İslâm'ı adım adım öğren",
    days: "Günler",
    questions: "Soru",
    previousQuestion: "← Önceki Soru",
    nextQuestion: "Sonraki Soru →",
    home: "🏠 Ana Sayfa",
    previousDay: "← Önceki Gün",
    nextDay: "Sonraki Gün →",
    source: "📚 Kaynaklar",
    openSource: "Kaynağı aç",
    questionCount: "Soru"
  },

  en: {
    title: "A Muslim's Roadmap",
    subtitle: "Learn Islam step by step",
    days: "Days",
    questions: "Question",
    previousQuestion: "← Previous Question",
    nextQuestion: "Next Question →",
    home: "🏠 Home",
    previousDay: "← Previous Day",
    nextDay: "Next Day →",
    source: "📚 Sources",
    openSource: "Open source",
    questionCount: "Questions"
  },

  de: {
    title: "Der Wegweiser eines Muslims",
    subtitle: "Den Islam Schritt für Schritt kennenlernen",
    days: "Tage",
    questions: "Frage",
    previousQuestion: "← Vorherige Frage",
    nextQuestion: "Nächste Frage →",
    home: "🏠 Startseite",
    previousDay: "← Vorheriger Tag",
    nextDay: "Nächster Tag →",
    source: "📚 Quellen",
    openSource: "Quelle öffnen",
    questionCount: "Fragen"
  },

  ru: {
    title: "Путеводитель мусульманина",
    subtitle: "Изучайте ислам шаг за шагом",
    days: "Дни",
    questions: "Вопрос",
    previousQuestion: "← Предыдущий вопрос",
    nextQuestion: "Следующий вопрос →",
    home: "🏠 Главная",
    previousDay: "← Предыдущий день",
    nextDay: "Следующий день →",
    source: "📚 Источники",
    openSource: "Открыть источник",
    questionCount: "Вопросов"
  },

  ku: {
    title: "Rêbernameya Misilmanekî",
    subtitle: "Îslamê gav bi gav fêr bibe",
    days: "Roj",
    questions: "Pirs",
    previousQuestion: "← Pirseke berê",
    nextQuestion: "Pirseke paş",
    home: "🏠 Malpera sereke",
    previousDay: "← Roja berê",
    nextDay: "Roja paş →",
    source: "📚 Çavkanî",
    openSource: "Çavkaniyê veke",
    questionCount: "Pirs"
  },

  tt: {
    title: "Мөселманның юл картасы",
    subtitle: "Исламны адымлап өйрәнегез",
    days: "Көннәр",
    questions: "Сорау",
    previousQuestion: "← Алдагы сорау",
    nextQuestion: "Киләсе сорау →",
    home: "🏠 Төп бит",
    previousDay: "← Алдагы көн",
    nextDay: "Киләсе көн →",
    source: "📚 Чыганаклар",
    openSource: "Чыганакны ачу",
    questionCount: "Сорау"
  },

  fr: {
    title: "La feuille de route du musulman",
    subtitle: "Apprendre l’islam étape par étape",
    days: "Jours",
    questions: "Question",
    previousQuestion: "← Question précédente",
    nextQuestion: "Question suivante →",
    home: "🏠 Accueil",
    previousDay: "← Jour précédent",
    nextDay: "Jour suivant →",
    source: "📚 Sources",
    openSource: "Ouvrir la source",
    questionCount: "Questions"
  },

  es: {
    title: "La hoja de ruta del musulmán",
    subtitle: "Aprender el Islam paso a paso",
    days: "Días",
    questions: "Pregunta",
    previousQuestion: "← Pregunta anterior",
    nextQuestion: "Siguiente pregunta →",
    home: "🏠 Inicio",
    previousDay: "← Día anterior",
    nextDay: "Día siguiente →",
    source: "📚 Fuentes",
    openSource: "Abrir fuente",
    questionCount: "Preguntas"
  },

  ar: {
    title: "خُطَّةُ طَرِيقِ الْمُسْلِمِ",
    subtitle: "تَعَلَّمِ الْإِسْلَامَ خُطْوَةً خُطْوَةً",
    days: "الأَيَّامُ",
    questions: "سُؤَال",
    previousQuestion: "← السُّؤَالُ السَّابِقُ",
    nextQuestion: "السُّؤَالُ التَّالِي →",
    home: "🏠 الصَّفْحَةُ الرَّئِيسِيَّةُ",
    previousDay: "← الْيَوْمُ السَّابِقُ",
    nextDay: "الْيَوْمُ التَّالِي →",
    source: "📚 الْمَصَادِرُ",
    openSource: "فَتْحُ الْمَصْدَرِ",
    questionCount: "أَسْئِلَة"
  }
};


let selectedLang =
  localStorage.getItem("selectedLang") || "tr";

let days = [];

let currentDayIndex = 0;

let currentQuestionIndex = 0;


/* =========================================
   BAŞLAT
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);


async function init() {

  await loadDays();

  renderHome();

}


/* =========================================
   GÜNLERİ YÜKLE
========================================= */

async function loadDays() {

  days = [];

  for (
    let number = 1;
    number <= 365;
    number++
  ) {

    const file =
      `data/day-${String(number).padStart(2, "0")}.json`;

    try {

      const response =
        await fetch(
          file,
          { cache: "no-store" }
        );

      if (!response.ok) {
        continue;
      }

      const data =
        await response.json();

      const questions =
        Array.isArray(data)
          ? data
          : data.questions;

      if (
        Array.isArray(questions) &&
        questions.length
      ) {

        days.push({
          number,
          questions,
          info: data
        });

      }

    } catch (error) {

      console.log(
        `Day ${number} not found`
      );

    }
  }
}


/* =========================================
   ANA SAYFA
========================================= */

function renderHome() {

  const home =
    document.querySelector(
      "#home-page"
    );

  const questionPage =
    document.querySelector(
      "#question-page"
    );


  home.style.display =
    "block";

  questionPage.style.display =
    "none";


  const header =
    home.querySelector(
      ".home-header"
    );


  header.innerHTML = "";


  const title =
    document.createElement("h1");

  title.textContent =
    `🕌 ${UI[selectedLang].title}`;


  const subtitle =
    document.createElement("p");

  subtitle.textContent =
    UI[selectedLang].subtitle;


  header.appendChild(title);
  header.appendChild(subtitle);


  const sectionTitle =
    home.querySelector(
      ".days-section h2"
    );

  sectionTitle.textContent =
    UI[selectedLang].days;


  const list =
    document.querySelector(
      "#days-list"
    );

  list.innerHTML = "";


  days.forEach(
    (dayData, index) => {

      const card =
        document.createElement(
          "button"
        );

      card.className =
        "day-card";

      card.type =
        "button";


      const title =
        getDayTitle(
          dayData,
          index
        );


      const subtitle =
        getDaySubtitle(
          dayData
        );


      const titleLine =
        document.createElement(
          "div"
        );

      titleLine.className =
        "day-card-title";

      titleLine.textContent =
        `${title} · ${dayData.questions.length} ${UI[selectedLang].questionCount}`;


      card.appendChild(
        titleLine
      );


      if (subtitle) {

        const subtitleLine =
          document.createElement(
            "div"
          );

        subtitleLine.className =
          "day-card-subtitle";

        subtitleLine.textContent =
          subtitle;

        card.appendChild(
          subtitleLine
        );
      }


      card.onclick =
        () => {

          currentDayIndex =
            index;

          currentQuestionIndex =
            0;

          renderQuestion();

        };


      list.appendChild(
        card
      );

    }
  );
}


/* =========================================
   GÜN BAŞLIĞI
========================================= */

function getDayTitle(
  dayData,
  index
) {

  const first =
    dayData.questions[0] || {};


  /*
    JSON'da çok dilli dayTitle varsa
    onu kullan.
  */

  if (
    first.dayTitle &&
    typeof first.dayTitle === "object"
  ) {

    return (
      first.dayTitle[selectedLang] ||
      first.dayTitle.tr ||
      `${dayData.number}. Gün`
    );

  }


  if (
    dayData.info &&
    dayData.info.title &&
    typeof dayData.info.title === "object"
  ) {

    return (
      dayData.info.title[selectedLang] ||
      dayData.info.title.tr ||
      `${dayData.number}. Gün`
    );

  }


  /*
    Şimdilik Türkçe eski verilerle
    de çalışsın.
  */

  if (
    typeof first.dayTitle === "string"
  ) {

    return first.dayTitle;

  }


  return `${dayData.number}. Gün`;
}


/* =========================================
   GÜN ALT BAŞLIĞI
========================================= */

function getDaySubtitle(
  dayData
) {

  const first =
    dayData.questions[0] || {};


  let subtitle =
    null;


  if (
    first.daySubtitle &&
    typeof first.daySubtitle === "object"
  ) {

    subtitle =
      first.daySubtitle[selectedLang] ||
      first.daySubtitle.tr;

  }


  if (
    !subtitle &&
    dayData.info &&
    dayData.info.subtitle &&
    typeof dayData.info.subtitle === "object"
  ) {

    subtitle =
      dayData.info.subtitle[selectedLang] ||
      dayData.info.subtitle.tr;

  }


  if (
    !subtitle &&
    typeof first.daySubtitle === "string"
  ) {

    subtitle =
      first.daySubtitle;

  }


  return subtitle || "";
}


/* =========================================
   SORU SAYFASI
========================================= */

function renderQuestion() {

  const home =
    document.querySelector(
      "#home-page"
    );

  const page =
    document.querySelector(
      "#question-page"
    );


  home.style.display =
    "none";

  page.style.display =
    "block";


  const dayData =
    days[currentDayIndex];

  const question =
    dayData.questions[
      currentQuestionIndex
    ];


  const content =
    document.querySelector(
      "#question-content"
    );


  content.innerHTML = "";


  const dayTitle =
    document.createElement(
      "h2"
    );

  dayTitle.className =
    "question-day-title";

  dayTitle.textContent =
    getDayTitle(
      dayData,
      currentDayIndex
    );


  content.appendChild(
    dayTitle
  );


  const card =
    document.createElement(
      "article"
    );

  card.className =
    "question-card";


  /*
    SEÇİLEN DİL EN ÜSTTE
  */

  const languages = [
    selectedLang,
    ...LANGS
      .map(
        l => l.key
      )
      .filter(
        key =>
          key !== selectedLang
      )
  ];


  languages.forEach(
    languageKey => {

      const language =
        LANGS.find(
          l =>
            l.key === languageKey
        );


      const data =
        question[languageKey];


      if (!data) {
        return;
      }


      const block =
        document.createElement(
          "div"
        );

      block.className =
        "language-block";


      if (
        languageKey === selectedLang
      ) {

        block.classList.add(
          "selected-language"
        );

      }


      const q =
        document.createElement(
          "div"
        );

      q.className =
        "question-line";

      q.textContent =
        `${language.flag} ${question.id}. ${data.q}`;


      const a =
        document.createElement(
          "div"
        );

      a.className =
        "answer-line";

      a.textContent =
        `${language.flag} ${question.id}. ${data.a}`;


      block.appendChild(q);
      block.appendChild(a);


      card.appendChild(
        block
      );

    }
  );


  /*
    KAYNAKLAR
  */

  if (
    Array.isArray(question.sources) &&
    question.sources.length
  ) {

    card.appendChild(
      renderSources(
        question.sources
      )
    );

  }


  content.appendChild(
    card
  );


  /*
    ÜST VE ALT NAVİGASYON
  */

  document.querySelector(
    "#top-navigation"
  ).innerHTML =
    "";

  document.querySelector(
    "#bottom-navigation"
  ).innerHTML =
    "";


  document.querySelector(
    "#top-navigation"
  ).appendChild(
    createNavigation()
  );


  document.querySelector(
    "#bottom-navigation"
  ).appendChild(
    createNavigation()
  );


  /*
    Dil seçici
  */

  addLanguageSelector();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================
   NAVİGASYON
========================================= */

function createNavigation() {

  const row =
    document.createElement(
      "div"
    );

  row.className =
    "navigation-row";


  const previousQuestion =
    makeButton(
      UI[selectedLang].previousQuestion
    );


  previousQuestion.disabled =
    currentQuestionIndex === 0;


  previousQuestion.onclick =
    () => {

      if (
        currentQuestionIndex > 0
      ) {

        currentQuestionIndex--;

        renderQuestion();

      }
    };


  const nextQuestion =
    makeButton(
      UI[selectedLang].nextQuestion
    );


  nextQuestion.disabled =
    currentQuestionIndex >=
    days[currentDayIndex]
      .questions.length - 1;


  nextQuestion.onclick =
    () => {

      if (
        currentQuestionIndex <
        days[currentDayIndex]
          .questions.length - 1
      ) {

        currentQuestionIndex++;

        renderQuestion();

      }
    };


  const home =
    makeButton(
      UI[selectedLang].home
    );


  home.onclick =
    () => {

      renderHome();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    };


  const previousDay =
    makeButton(
      UI[selectedLang].previousDay
    );


  previousDay.disabled =
    currentDayIndex === 0;


  previousDay.onclick =
    () => {

      if (
        currentDayIndex > 0
      ) {

        currentDayIndex--;

        currentQuestionIndex =
          0;

        renderQuestion();

      }
    };


  const nextDay =
    makeButton(
      UI[selectedLang].nextDay
    );


  nextDay.disabled =
    currentDayIndex >=
    days.length - 1;


  nextDay.onclick =
    () => {

      if (
        currentDayIndex <
        days.length - 1
      ) {

        currentDayIndex++;

        currentQuestionIndex =
          0;

        renderQuestion();

      }
    };


  row.appendChild(
    previousQuestion
  );

  row.appendChild(
    nextQuestion
  );

  row.appendChild(
    home
  );

  row.appendChild(
    previousDay
  );

  row.appendChild(
    nextDay
  );


  return row;
}


function makeButton(text) {

  const button =
    document.createElement(
      "button"
    );

  button.type =
    "button";

  button.textContent =
    text;

  return button;
}


/* =========================================
   DİL SEÇİCİ
========================================= */

function addLanguageSelector() {

  /*
    Yoksa oluştur.
  */

  let selector =
    document.querySelector(
      "#language-selector"
    );


  if (!selector) {

    selector =
      document.createElement(
        "div"
      );

    selector.id =
      "language-selector";

    selector.className =
      "language-selector";


    const page =
      document.querySelector(
        "#question-page"
      );


    const nav =
      document.querySelector(
        "#top-navigation"
      );


    page.insertBefore(
      selector,
      nav
    );

  }


  selector.innerHTML = "";


  LANGS.forEach(
    language => {

      const button =
        document.createElement(
          "button"
        );

      button.type =
        "button";

      button.textContent =
        `${language.flag} ${language.name}`;


      if (
        language.key === selectedLang
      ) {

        button.classList.add(
          "active"
        );

      }


      button.onclick =
        () => {

          selectedLang =
            language.key;


          localStorage.setItem(
            "selectedLang",
            selectedLang
          );


          document.documentElement.lang =
            selectedLang;


          renderQuestion();

        };


      selector.appendChild(
        button
      );

    }
  );
}


/* =========================================
   KAYNAKLAR
========================================= */

function renderSources(
  sources
) {

  const box =
    document.createElement(
      "div"
    );

  box.className =
    "sources";


  const title =
    document.createElement(
      "h3"
    );

  title.textContent =
    UI[selectedLang].source;


  box.appendChild(
    title
  );


  const list =
    document.createElement(
      "ul"
    );


  sources.forEach(
    source => {

      const li =
        document.createElement(
          "li"
        );


      if (
        typeof source === "object" &&
        source !== null
      ) {

        const name =
          document.createElement(
            "span"
          );

        name.textContent =
          source.title ||
          source.name ||
          "Kaynak";


        li.appendChild(
          name
        );


        if (source.url) {

          li.appendChild(
            document.createTextNode(
              " "
            )
          );


          li.appendChild(
            sourceLink(
              source.url
            )
          );

        }

      } else {

        const text =
          String(source);


        const match =
          text.match(
            /https?:\/\/[^\s|]+/i
          );


        if (match) {

          const url =
            match[0];


          li.appendChild(
            document.createTextNode(
              text
                .replace(
                  url,
                  ""
                )
                .trim()
            )
          );


          li.appendChild(
            document.createTextNode(
              " "
            )
          );


          li.appendChild(
            sourceLink(
              url
            )
          );

        } else {

          li.textContent =
            text;

        }

      }


      list.appendChild(
        li
      );

    }
  );


  box.appendChild(
    list
  );


  return box;
}


function sourceLink(url) {

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
    `🔗 ${UI[selectedLang].openSource}`;


  return link;
    }
