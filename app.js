const LANGS = [
  { key: "tr", flag: "🇹🇷", name: "Türkçe" },
  { key: "en", flag: "🇬🇧", name: "English" },
  { key: "de", flag: "🇩🇪", name: "Deutsch" },
  { key: "ru", flag: "🇷🇺", name: "Русский" },
  { key: "ku", flag: "🟩", name: "Kurmancî" },
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
    questionCount: "Soru",
    errorTitle: "Bir hata oluştu",
    errorText: "Veriler yüklenirken bir sorun oluştu."
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
    questionCount: "Questions",
    errorTitle: "An error occurred",
    errorText: "There was a problem loading the data."
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
    questionCount: "Fragen",
    errorTitle: "Ein Fehler ist aufgetreten",
    errorText: "Beim Laden der Daten ist ein Problem aufgetreten."
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
    questionCount: "Вопросов",
    errorTitle: "Произошла ошибка",
    errorText: "Возникла проблема при загрузке данных."
  },

  ku: {
    title: "Rêbernameya Misilmanekî",
    subtitle: "Îslamê gav bi gav fêr bibe",
    days: "Roj",
    questions: "Pirs",
    previousQuestion: "← Pirsê berê",
    nextQuestion: "Pirsê paş",
    home: "🏠 Malpera sereke",
    previousDay: "← Roja berê",
    nextDay: "Roja paş →",
    source: "📚 Çavkanî",
    openSource: "Çavkaniyê veke",
    questionCount: "Pirs",
    errorTitle: "Çewtiyek çêbû",
    errorText: "Di barkirina daneyan de pirsgirêkek çêbû."
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
    questionCount: "Сорау",
    errorTitle: "Хата килеп чыкты",
    errorText: "Мәгълүматларны йөкләгәндә проблема килеп чыкты."
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
    questionCount: "Questions",
    errorTitle: "Une erreur est survenue",
    errorText: "Un problème est survenu lors du chargement des données."
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
    questionCount: "Preguntas",
    errorTitle: "Ha ocurrido un error",
    errorText: "Hubo un problema al cargar los datos."
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
    questionCount: "أَسْئِلَة",
    errorTitle: "حَدَثَ خَطَأ",
    errorText: "حَدَثَتْ مُشْكِلَةٌ أَثْنَاءَ تَحْمِيلِ الْبَيَانَاتِ."
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

  document.documentElement.lang =
    selectedLang;

  try {

    await loadDays();

    renderHome();

  } catch (error) {

    console.error(
      "Initialization error:",
      error
    );

    showError();

  }
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

    /*
      Dosya formatı:

      day-01.json
      day-02.json
      day-03.json
      ...
    */

    const file =
      `data/day-${String(number).padStart(2, "0")}.json`;

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


      /*
        Yeni doğru yapı:

        {
          "day": 1,
          "dayTitle": {...},
          "daySubtitle": {...},
          "questions": [...]
        }
      */

      let questions = [];


      if (
        data &&
        Array.isArray(data.questions)
      ) {

        questions =
          data.questions;

      }

      /*
        Eski yapı desteği
      */

      else if (
        Array.isArray(data)
      ) {

        questions =
          data;

      }


      if (
        questions.length > 0
      ) {

        days.push({

          number: number,

          questions: questions,

          info: data

        });

      }

    } catch (error) {

      console.warn(
        `Day ${number} could not be loaded:`,
        error
      );

    }

  }


  console.log(
    "Loaded days:",
    days
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

    console.error(
      "Required HTML elements not found."
    );

    return;

  }


  home.style.display =
    "block";

  questionPage.style.display =
    "none";


  /*
    HEADER
  */

  const header =
    home.querySelector(
      ".home-header"
    );


  if (header) {

    header.innerHTML = "";


    const title =
      document.createElement(
        "h1"
      );

    title.textContent =
      `🕌 ${UI[selectedLang].title}`;


    const subtitle =
      document.createElement(
        "p"
      );

    subtitle.textContent =
      UI[selectedLang].subtitle;


    header.appendChild(
      title
    );

    header.appendChild(
      subtitle
    );

  }


  /*
    GÜNLER BAŞLIĞI
  */

  const sectionTitle =
    home.querySelector(
      ".days-section h2"
    );


  if (sectionTitle) {

    sectionTitle.textContent =
      UI[selectedLang].days;

  }


  /*
    GÜN LİSTESİ
  */

  const list =
    document.querySelector(
      "#days-list"
    );


  if (!list) {

    return;

  }


  list.innerHTML =
    "";


  /*
    Hiç gün yoksa
  */

  if (
    days.length === 0
  ) {

    const empty =
      document.createElement(
        "p"
      );

    empty.textContent =
      "Henüz yüklenmiş gün bulunamadı.";

    list.appendChild(
      empty
    );

    return;

  }


  /*
    GÜN KARTLARI
  */

  days.forEach(
    (
      dayData,
      index
    ) => {

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


      /*
        Başlık
      */

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


      /*
        Alt başlık
      */

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


      /*
        Tıklama
      */

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

  if (!dayData) {

    return "";

  }


  /*
    Öncelik:
    data.dayTitle
  */

  if (
    dayData.info &&
    dayData.info.dayTitle &&
    typeof dayData.info.dayTitle === "object"
  ) {

    return (
      dayData.info.dayTitle[selectedLang] ||
      dayData.info.dayTitle.tr ||
      `${dayData.number}. Gün`
    );

  }


  /*
    Bazı eski JSONlarda
    title kullanılabilir.
  */

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
    Soru içinde bulunuyorsa
  */

  const first =
    dayData.questions[0];


  if (
    first &&
    first.dayTitle &&
    typeof first.dayTitle === "object"
  ) {

    return (
      first.dayTitle[selectedLang] ||
      first.dayTitle.tr ||
      `${dayData.number}. Gün`
    );

  }


  /*
    String yapı
  */

  if (
    first &&
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

  if (!dayData) {

    return "";

  }


  /*
    Doğru yapı:

    daySubtitle
  */

  if (
    dayData.info &&
    dayData.info.daySubtitle &&
    typeof dayData.info.daySubtitle === "object"
  ) {

    return (
      dayData.info.daySubtitle[selectedLang] ||
      dayData.info.daySubtitle.tr ||
      ""
    );

  }


  /*
    Eski subtitle yapısı
  */

  if (
    dayData.info &&
    dayData.info.subtitle &&
    typeof dayData.info.subtitle === "object"
  ) {

    return (
      dayData.info.subtitle[selectedLang] ||
      dayData.info.subtitle.tr ||
      ""
    );

  }


  /*
    Soru içindeki yapı
  */

  const first =
    dayData.questions[0];


  if (
    first &&
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
    first &&
    typeof first.daySubtitle === "string"
  ) {

    return first.daySubtitle;

  }


  return "";

}


/* =========================================
   SORU SAYFASI
========================================= */

function renderQuestion() {

  if (
    !days.length
  ) {

    return;

  }


  const dayData =
    days[currentDayIndex];


  if (!dayData) {

    return;

  }


  const question =
    dayData.questions[
      currentQuestionIndex
    ];


  if (!question) {

    return;

  }


  const home =
    document.querySelector(
      "#home-page"
    );


  const page =
    document.querySelector(
      "#question-page"
    );


  if (!home || !page) {

    return;

  }


  home.style.display =
    "none";


  page.style.display =
    "block";


  /*
    İçeriği temizle
  */

  const content =
    document.querySelector(
      "#question-content"
    );


  if (!content) {

    return;

  }


  content.innerHTML =
    "";


  /*
    GÜN BAŞLIĞI
  */

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


  /*
    GÜN ALT BAŞLIĞI
  */

  const subtitle =
    getDaySubtitle(
      dayData
    );


  if (subtitle) {

    const subtitleElement =
      document.createElement(
        "p"
      );


    subtitleElement.className =
      "question-day-subtitle";


    subtitleElement.textContent =
      subtitle;


    content.appendChild(
      subtitleElement
    );

  }


  /*
    SORU KARTI
  */

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "question-card";


  /*
    Seçilen dil en üstte.
    Diğer diller arkasından gelir.
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
          language =>
            language.key === languageKey
        );


      if (!language) {

        return;

      }


      const data =
        question[
          languageKey
        ];


      /*
        Dil verisi eksikse
        o dili gösterme.
      */

      if (
        !data ||
        typeof data !== "object"
      ) {

        return;

      }


      const block =
        document.createElement(
          "div"
        );


      block.className =
        "language-block";


      /*
        Seçilen dil
      */

      if (
        languageKey === selectedLang
      ) {

        block.classList.add(
          "selected-language"
        );

      }


      /*
        SORU
      */

      if (
        data.q
      ) {

        const q =
          document.createElement(
            "div"
          );


        q.className =
          "question-line";


        q.textContent =
          `${language.flag} ${question.id}. ${data.q}`;


        block.appendChild(
          q
        );

      }


      /*
        CEVAP
      */

      if (
        data.a
      ) {

        const a =
          document.createElement(
            "div"
          );


        a.className =
          "answer-line";


        a.textContent =
          `${language.flag} ${question.id}. ${data.a}`;


        block.appendChild(
          a
        );

      }


      card.appendChild(
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
    question.sources.length > 0
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
    NAVİGASYONLARI TEMİZLE
  */

  const topNavigation =
    document.querySelector(
      "#top-navigation"
    );


  const bottomNavigation =
    document.querySelector(
      "#bottom-navigation"
    );


  if (topNavigation) {

    topNavigation.innerHTML =
      "";

  }


  if (bottomNavigation) {

    bottomNavigation.innerHTML =
      "";

  }


  /*
    ÜST NAVİGASYON
  */

  if (topNavigation) {

    topNavigation.appendChild(
      createNavigation()
    );

  }


  /*
    ALT NAVİGASYON
  */

  if (bottomNavigation) {

    bottomNavigation.appendChild(
      createNavigation()
    );

  }


  /*
    DİL SEÇİCİ
  */

  addLanguageSelector();


  /*
    Arapça sağdan sola
  */

  if (
    selectedLang === "ar"
  ) {

    content.dir =
      "rtl";

  } else {

    content.dir =
      "ltr";

  }


  /*
    Sayfanın başına dön
  */

  window.scrollTo(
    {
      top: 0,
      behavior: "smooth"
    }
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


  /*
    ÖNCEKİ SORU
  */

  const previousQuestion =
    makeButton(
      UI[selectedLang].previousQuestion
    );


  previousQuestion.disabled =
    currentQuestionIndex === 0;


  previousQuestion.addEventListener(
    "click",
    () => {

      if (
        currentQuestionIndex > 0
      ) {

        currentQuestionIndex--;

        renderQuestion();

      }

    }
  );


  /*
    SONRAKİ SORU
  */

  const nextQuestion =
    makeButton(
      UI[selectedLang].nextQuestion
    );


  const questions =
    days[currentDayIndex]
      ?.questions || [];


  nextQuestion.disabled =
    currentQuestionIndex >=
    questions.length - 1;


  nextQuestion.addEventListener(
    "click",
    () => {

      if (
        currentQuestionIndex <
        questions.length - 1
      ) {

        currentQuestionIndex++;

        renderQuestion();

      }

    }
  );


  /*
    ANA SAYFA
  */

  const home =
    makeButton(
      UI[selectedLang].home
    );


  home.addEventListener(
    "click",
    () => {

      renderHome();

      window.scrollTo(
        {
          top: 0,
          behavior: "smooth"
        }
      );

    }
  );


  /*
    ÖNCEKİ GÜN
  */

  const previousDay =
    makeButton(
      UI[selectedLang].previousDay
    );


  previousDay.disabled =
    currentDayIndex === 0;


  previousDay.addEventListener(
    "click",
    () => {

      if (
        currentDayIndex > 0
      ) {

        currentDayIndex--;

        currentQuestionIndex =
          0;

        renderQuestion();

      }

    }
  );


  /*
    SONRAKİ GÜN
  */

  const nextDay =
    makeButton(
      UI[selectedLang].nextDay
    );


  nextDay.disabled =
    currentDayIndex >=
    days.length - 1;


  nextDay.addEventListener(
    "click",
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

    }
  );


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


/* =========================================
   BUTON
========================================= */

function makeButton(
  text
) {

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

  let selector =
    document.querySelector(
      "#language-selector"
    );


  /*
    Yoksa oluştur
  */

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


    if (
      page &&
      nav
    ) {

      page.insertBefore(
        selector,
        nav
      );

    }

  }


  if (!selector) {

    return;

  }


  selector.innerHTML =
    "";


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


          renderQuestion();

        }
      );


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


      /*
        Yeni kaynak yapısı:

        {
          "title": "...",
          "url": "..."
        }
      */

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


        if (
          source.url
        ) {

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

      }

      /*
        Eski kaynak yapısı:

        "📖 Kur'an — ..."
      */

      else {

        const text =
          String(
            source
          );


        /*
          URL varsa otomatik algıla
        */

        const match =
          text.match(
            /https?:\/\/[^\s|]+/i
          );


        if (match) {

          const url =
            match[0];


          const before =
            text
              .replace(
                url,
                ""
              )
              .trim();


          li.appendChild(
            document.createTextNode(
              before
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

        }

        else {

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


/* =========================================
   KAYNAK LİNKİ
========================================= */

function sourceLink(
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
    `🔗 ${UI[selectedLang].openSource}`;


  return link;

}


/* =========================================
   HATA EKRANI
========================================= */

function showError() {

  const home =
    document.querySelector(
      "#home-page"
    );


  const page =
    document.querySelector(
      "#question-page"
    );


  if (home) {

    home.style.display =
      "block";

  }


  if (page) {

    page.style.display =
      "none";

  }


  const list =
    document.querySelector(
      "#days-list"
    );


  if (!list) {

    return;

  }


  list.innerHTML =
    "";


  const error =
    document.createElement(
      "div"
    );


  error.className =
    "error-message";


  const title =
    document.createElement(
      "h3"
    );


  title.textContent =
    `⚠️ ${UI[selectedLang].errorTitle}`;


  const text =
    document.createElement(
      "p"
    );


  text.textContent =
    UI[selectedLang].errorText;


  error.appendChild(
    title
  );


  error.appendChild(
    text
  );


  list.appendChild(
    error
  );

}


/* =========================================
   GERİ / İLERİ TUŞLARI
========================================= */

window.addEventListener(
  "keydown",
  event => {

    /*
      Sadece soru sayfasında çalışsın
    */

    const page =
      document.querySelector(
        "#question-page"
      );


    if (
      !page ||
      page.style.display === "none"
    ) {

      return;

    }


    /*
      Sol ok
    */

    if (
      event.key === "ArrowLeft"
    ) {

      if (
        currentQuestionIndex > 0
      ) {

        currentQuestionIndex--;

        renderQuestion();

      }

    }


    /*
      Sağ ok
    */

    if (
      event.key === "ArrowRight"
    ) {

      const questions =
        days[currentDayIndex]
          ?.questions || [];


      if (
        currentQuestionIndex <
        questions.length - 1
      ) {

        currentQuestionIndex++;

        renderQuestion();

      }

    }

  }
);
