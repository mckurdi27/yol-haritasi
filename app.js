/* =========================================
   BİR MÜSLÜMANIN YOL HARİTASI
   9 DİL
   APP.JS
========================================= */


/* =========================================
   DİLLER
========================================= */

const LANGS = [
  { key: "tr", flag: "🇹🇷", name: "Türkçe" },
  { key: "en", flag: "🇬🇧", name: "English" },
  { key: "de", flag: "🇩🇪", name: "Deutsch" },
  { key: "ru", flag: "🇷🇺", name: "Русский" },

  // Kurmancî → Gana bayrağı
  { key: "ku", flag: "🇬🇭", name: "Kurmancî" },

  // Tatarca → Macaristan bayrağı
  { key: "tt", flag: "🇭🇺", name: "Tatarca" },

  { key: "fr", flag: "🇫🇷", name: "Français" },
  { key: "es", flag: "🇪🇸", name: "Español" },
  { key: "ar", flag: "🇸🇦", name: "العربية" }
];


/* =========================================
   ARAYÜZ METİNLERİ
========================================= */

const UI = {

  tr: {
    title: "Bir Müslümanın Yol Haritası",
    subtitle: "İslâm'ı adım adım öğren",
    days: "Günler",
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


/* =========================================
   AYARLAR
========================================= */

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

  document.documentElement.lang =
    selectedLang;

  /*
    Ana sayfayı hemen göster.
    JSON beklenmez.
  */

  renderHome();

  /*
    Günleri arka planda yükle.
  */

  await loadDays();

  /*
    Günler geldikten sonra
    listeyi güncelle.
  */

  renderHome();
}


/* =========================================
   GÜNLERİ YÜKLE
========================================= */

async function loadDays() {

  days = [];

  const requests = [];

  /*
    Şimdilik 30 günlük proje.
    365 dosya aramak yerine sadece
    30 dosya kontrol edilir.
  */

  for (
    let number = 1;
    number <= 30;
    number++
  ) {

    const file =
      `data/day-${String(number).padStart(2, "0")}.json`;

    requests.push(

      fetch(
        file,
        {
          cache: "default"
        }
      )

        .then(
          async response => {

            if (!response.ok) {
              return null;
            }

            const data =
              await response.json();

            const questions =
              Array.isArray(data)
                ? data
                : data.questions;

            if (
              !Array.isArray(questions) ||
              questions.length === 0
            ) {
              return null;
            }

            return {
              number,
              questions,
              info: data
            };
          }
        )

        .catch(
          () => null
        )
    );
  }


  const results =
    await Promise.all(requests);


  days =
    results
      .filter(
        item => item !== null
      )
      .sort(
        (a, b) =>
          a.number - b.number
      );
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


  if (!home || !questionPage) {
    return;
  }


  home.style.display =
    "block";

  questionPage.style.display =
    "none";


  /*
    DİKKAT:

    home-header içeriğini SİLMİYORUZ.

    Böylece index.html içindeki:

    Kabe
    Mescid-i Aksa
    Mescid-i Nebevi
    üçgen tasarımı korunur.
  */


  /* =====================================
     ANA SAYFA DİL SEÇİCİ
  ===================================== */

  let homeLanguageSelector =
    document.querySelector(
      "#home-language-selector"
    );


  if (!homeLanguageSelector) {

    homeLanguageSelector =
      document.createElement(
        "div"
      );

    homeLanguageSelector.id =
      "home-language-selector";

    homeLanguageSelector.className =
      "language-selector home-language-selector";


    const header =
      home.querySelector(
        ".home-header"
      );


    if (header) {

      header.insertBefore(
        homeLanguageSelector,
        header.firstChild
      );
    }
  }


  renderLanguageButtons(
    homeLanguageSelector
  );


  /* =====================================
     ANA BAŞLIK
  ===================================== */

  const roadmapTitle =
    home.querySelector(
      ".roadmap-title"
    );


  if (roadmapTitle) {

    roadmapTitle.innerHTML = "";


    const title =
      UI[selectedLang].title;


    /*
      Türkçe:

      Bir Müslümanın
      Yol Haritası

      Diğer dillerde de iki satır
      oluşturulur.
    */

    const words =
      title
        .trim()
        .split(/\s+/);


    const middle =
      Math.ceil(
        words.length / 2
      );


    const firstLine =
      document.createElement(
        "div"
      );


    firstLine.textContent =
      words
        .slice(0, middle)
        .join(" ");


    const secondLine =
      document.createElement(
        "div"
      );


    secondLine.textContent =
      words
        .slice(middle)
        .join(" ");


    roadmapTitle.appendChild(
      firstLine
    );


    roadmapTitle.appendChild(
      secondLine
    );
  }


  /* =====================================
     ALT AÇIKLAMA
  ===================================== */

  const subtitle =
    home.querySelector(
      ".home-subtitle"
    );


  if (subtitle) {

    subtitle.textContent =
      UI[selectedLang].subtitle;
  }


  /* =====================================
     GÜNLER
  ===================================== */

  const sectionTitle =
    home.querySelector(
      ".days-section h2"
    );


  if (sectionTitle) {

    sectionTitle.textContent =
      UI[selectedLang].days;
  }


  const list =
    document.querySelector(
      "#days-list"
    );


  if (!list) {
    return;
  }


  list.innerHTML = "";


  /*
    JSON'lar henüz gelmediyse
    yükleniyor göster.
  */

  if (!days.length) {

    const loading =
      document.createElement(
        "p"
      );


    loading.className =
      "loading-days";


    loading.textContent =
      "Günler yükleniyor...";


    list.appendChild(
      loading
    );


    return;
  }


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
          dayData
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


      card.addEventListener(
        "click",
        () => {

          currentDayIndex =
            index;


          currentQuestionIndex =
            0;


          renderQuestion();
        }
      );


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
  dayData
) {

  const info =
    dayData.info || {};


  if (
    info.dayTitle &&
    typeof info.dayTitle === "object"
  ) {

    return (
      info.dayTitle[selectedLang] ||
      info.dayTitle.tr ||
      `${dayData.number}. Gün`
    );
  }


  if (
    info.title &&
    typeof info.title === "object"
  ) {

    return (
      info.title[selectedLang] ||
      info.title.tr ||
      `${dayData.number}. Gün`
    );
  }


  const first =
    dayData.questions[0] || {};


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

  const info =
    dayData.info || {};


  if (
    info.daySubtitle &&
    typeof info.daySubtitle === "object"
  ) {

    return (
      info.daySubtitle[selectedLang] ||
      info.daySubtitle.tr ||
      ""
    );
  }


  if (
    info.subtitle &&
    typeof info.subtitle === "object"
  ) {

    return (
      info.subtitle[selectedLang] ||
      info.subtitle.tr ||
      ""
    );
  }


  const first =
    dayData.questions[0] || {};


  if (
    first.daySubtitle &&
    typeof first.daySubtitle === "object"
  ) {

    return (
      first.daySubtitle[selectedLang] ||
      first.daySubtitle.tr ||
      ""
    );
  }


  if (
    typeof first.daySubtitle === "string"
  ) {

    return first.daySubtitle;
  }


  return "";
}


/* =========================================
   DİL BUTONLARI
   SADECE BAYRAK
========================================= */

function renderLanguageButtons(
  container
) {

  if (!container) {
    return;
  }


  container.innerHTML = "";


  LANGS.forEach(
    language => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "language-button";


      /*
        SADECE BAYRAK
      */

      button.textContent =
        language.flag;


      /*
        İsim görünmez.
        Sadece erişilebilirlik
        ve fare üzerine gelince
        bilgi için kullanılır.
      */

      button.title =
        language.name;


      button.setAttribute(
        "aria-label",
        language.name
      );


      if (
        language.key === selectedLang
      ) {

        button.classList.add(
          "active"
        );
      }


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


          /*
            Ana sayfadaysak ana sayfayı,
            soru sayfasındaysak soru
            sayfasını yeniden oluştur.
          */

          const questionPage =
            document.querySelector(
              "#question-page"
            );


          if (
            questionPage &&
            questionPage.style.display !== "none"
          ) {

            renderQuestion();

          } else {

            renderHome();
          }
        }
      );


      container.appendChild(
        button
      );
    }
  );
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


  if (
    !days.length ||
    !days[currentDayIndex]
  ) {

    renderHome();

    return;
  }


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


  if (!question) {
    return;
  }


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
      dayData
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
    Seçilen dil ilk sırada.
  */

  const languages = [
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


  languages.forEach(
    languageKey => {

      const language =
        LANGS.find(
          item =>
            item.key === languageKey
        );


      const data =
        question[languageKey];


      if (
        !data ||
        !language
      ) {
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


      block.appendChild(
        q
      );


      block.appendChild(
        a
      );


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


  /* =====================================
     NAVİGASYON
  ===================================== */

  const top =
    document.querySelector(
      "#top-navigation"
    );


  const bottom =
    document.querySelector(
      "#bottom-navigation"
    );


  top.innerHTML = "";

  bottom.innerHTML = "";


  top.appendChild(
    createNavigation()
  );


  bottom.appendChild(
    createNavigation()
  );


  /* =====================================
     SORU SAYFASI DİL SEÇİCİ
  ===================================== */

  addQuestionLanguageSelector();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================
   SORU SAYFASI DİL SEÇİCİ
========================================= */

function addQuestionLanguageSelector() {

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


  renderLanguageButtons(
    selector
  );
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
        days.length - 
