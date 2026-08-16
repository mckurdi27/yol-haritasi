/* =========================================
   BİR MÜSLÜMANIN YOL HARİTASI
   app.js
========================================= */


/* =========================================
   DİLLER
========================================= */

const LANGS = [
  { key: "tr", flag: "🇹🇷", name: "Türkçe" },
  { key: "en", flag: "🇬🇧", name: "English" },
  { key: "de", flag: "🇩🇪", name: "Deutsch" },
  { key: "ru", flag: "🇷🇺", name: "Русский" },

  /*
    Unicode'da Kürdistan bayrağı olmadığı için
    renkleri bakımından yakın olan Gana bayrağı
    kullanılıyor.
  */
  { key: "ku", flag: "🇬🇭", name: "Kurmancî" },

  /*
    Unicode'da Tataristan bayrağı olmadığı için
    renkleri bakımından yakın olan Macaristan bayrağı
    kullanılıyor.
  */
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
    questions: "Soru",
    previousQuestion: "← Önceki Soru",
    nextQuestion: "Sonraki Soru →",
    home: "🏠 Ana Sayfa",
    previousDay: "← Önceki Gün",
    nextDay: "Sonraki Gün →",
    source: "📚 Kaynaklar",
    openSource: "Kaynağı aç",
    questionCount: "Soru",
    loading: "Günler yükleniyor..."
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
    loading: "Loading days..."
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
    loading: "Tage werden geladen..."
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
    loading: "Загрузка дней..."
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
    questionCount: "Pirs",
    loading: "Roj tên barkirin..."
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
    loading: "Көннәр йөкләнә..."
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
    loading: "Chargement des jours..."
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
    loading: "Cargando días..."
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
    loading: "جَارِي تَحْمِيلُ الأَيَّامِ..."
  }
};


/* =========================================
   DEĞİŞKENLER
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

  showLoading();

  await loadDays();

  renderHome();
}


/* =========================================
   YÜKLENİYOR
========================================= */

function showLoading() {

  const list =
    document.querySelector("#days-list");

  if (!list) {
    return;
  }

  list.innerHTML = "";

  const loading =
    document.createElement("div");

  loading.className = "loading";

  loading.textContent =
    UI[selectedLang].loading;

  list.appendChild(loading);
}


/* =========================================
   GÜNLERİ YÜKLE
=========================================

   Eski sistem:
   01 → bekle
   02 → bekle
   03 → bekle
   ...

   Yeni sistem:
   Bütün dosyaları aynı anda ister.
   Böylece mevcut gün sayısı arttığında
   site gereksiz yere yavaşlamaz.
========================================= */

async function loadDays() {

  days = [];

  const requests = [];

  for (let number = 1; number <= 365; number++) {

    const file =
      `data/day-${String(number).padStart(2, "0")}.json`;

    requests.push(
      loadSingleDay(
        number,
        file
      )
    );
  }

  const results =
    await Promise.all(requests);

  results
    .filter(Boolean)
    .sort(
      (a, b) =>
        a.number - b.number
    )
    .forEach(
      dayData => {
        days.push(dayData);
      }
    );
}


/* =========================================
   TEK GÜN YÜKLE
========================================= */

async function loadSingleDay(
  number,
  file
) {

  try {

    const response =
      await fetch(
        file,
        {
          cache: "no-store"
        }
      );

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

      console.warn(
        `Day ${number}: questions bulunamadı.`
      );

      return null;
    }


    return {
      number,
      questions,
      info:
        Array.isArray(data)
          ? {}
          : data
    };

  } catch (error) {

    /*
      Dosya yoksa sessizce devam ediyoruz.
      JSON bozuksa konsolda gösteriyoruz.
    */

    if (
      error instanceof SyntaxError
    ) {

      console.error(
        `Day ${number}: JSON hatası`,
        error
      );

    }

    return null;
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


  if (days.length === 0) {

    const error =
      document.createElement("div");

    error.className =
      "error-message";

    error.textContent =
      "Henüz yüklenmiş bir gün bulunamadı.";

    list.appendChild(error);

    return;
  }


  days.forEach(
    (dayData, index) => {

      const card =
        document.createElement("button");

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
        document.createElement("div");

      titleLine.className =
        "day-card-title";

      titleLine.textContent =
        `${title} · ${dayData.questions.length} ${UI[selectedLang].questionCount}`;


      card.appendChild(
        titleLine
      );


      if (subtitle) {

        const subtitleLine =
          document.createElement("div");

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
  dayData
) {

  const info =
    dayData.info || {};

  const first =
    dayData.questions[0] || {};


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
    typeof info.dayTitle === "string"
  ) {

    return info.dayTitle;
  }


  if (
    typeof first.dayTitle === "string"
  ) {

    return first.dayTitle;
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

  const first =
    dayData.questions[0] || {};


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
    typeof info.daySubtitle === "string"
  ) {

    return info.daySubtitle;
  }


  if (
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

  const home =
    document.querySelector(
      "#home-page"
    );

  const page =
    document.querySelector(
      "#question-page"
    );


  if (
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

    renderHome();

    return;
  }


  const content =
    document.querySelector(
      "#question-content"
    );


  content.innerHTML = "";


  const dayTitle =
    document.createElement("h2");

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
    document.createElement("article");

  card.className =
    "question-card";


  /*
    Seçilen dil her zaman ilk sırada.
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
            language.key ===
            languageKey
        );


      if (!language) {
        return;
      }


      const data =
        question[languageKey];


      if (!data) {
        return;
      }


      const block =
        document.createElement("div");


      block.className =
        "language-block";


      block.dataset.language =
        languageKey;


      /*
        Arapça RTL.
      */

      if (
        languageKey === "ar"
      ) {

        block.dir =
          "rtl";

        block.classList.add(
          "arabic"
        );
      }


      if (
        languageKey === selectedLang
      ) {

        block.classList.add(
          "selected-language"
        );
      }


      const q =
        document.createElement("div");


      q.className =
        "question-line";


      q.textContent =
        `${language.flag} ${question.id}. ${data.q}`;


      const a =
        document.createElement("div");


      a.className =
        "answer-line";


      a.textContent =
        `${language.flag} ${question.id}. ${data.a}`;


      block.appendChild(q);
      block.appendChild(a);


      card.appendChild(block);
    }
  );


  /*
    KAYNAKLAR
  */

  if (
    Array.isArray(question.sources) &&
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
    NAVİGASYON
  */

  const topNavigation =
    document.querySelector(
      "#top-navigation"
    );

  const bottomNavigation =
    document.querySelector(
      "#bottom-navigation"
    );


  topNavigation.innerHTML = "";

  bottomNavigation.innerHTML = "";


  topNavigation.appendChild(
    createNavigation()
  );


  bottomNavigation.appendChild(
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
    document.createElement("div");


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
    days[currentDayIndex].questions.length - 1;


  nextQuestion.onclick =
    () => {

      if (
        currentQuestionIndex <
        days[currentDayIndex].questions.length - 1
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


/* =========================================
   BUTON
========================================= */

function makeButton(
  text
) {

  const button =
    document.createElement("button");


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


  if (!selector) {

    selector =
      document.createElement("div");


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
        document.createElement("button");


      button.type =
        "button";


      /*
        SADECE BAYRAK.
        Dil adı artık gösterilmiyor.
      */

      button.textContent =
        language.flag;


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
    document.createElement("div");


  box.className =
    "sources";


  const title =
    document.createElement("h3");


  title.textContent =
    UI[selectedLang].source;


  box.appendChild(
    title
  );


  const list =
    document.createElement("ul");


  sources.forEach(
    source => {

      const li =
        document.createElement("li");


      /*
        Yeni JSON formatı:

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
          document.createElement("span");


        name.textContent =
          source.title ||
          source.name ||
          "Kaynak";


        li.appendChild(
          name
        );


        if (source.url) {

          li.appendChild(
            document.createTextNode(" ")
          );


          li.appendChild(
            sourceLink(
              source.url
            )
          );

        } else {

          const automaticUrl =
            getSourceUrl(
              source.title ||
              source.name ||
              ""
            );


          if (automaticUrl) {

            li.appendChild(
              document.createTextNode(" ")
            );


            li.appendChild(
              sourceLink(
                automaticUrl
              )
            );
          }
        }


      } else {

        /*
          Eski JSON formatı:

          "📖 Kur'an — Âl-i İmrân 3:19"
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


          const cleanText =
            text
              .replace(
                url,
                ""
              )
              .trim();


          li.appendChild(
            document.createTextNode(
              cleanText
            )
          );


          li.appendChild(
            document.createTextNode(" ")
          );


          li.appendChild(
            sourceLink(
              url
            )
          );


        } else {

          li.appendChild(
            document.createTextNode(
              text
            )
          );


          const automaticUrl =
            getSourceUrl(
              text
            );


          if (automaticUrl) {

            li.appendChild(
              document.createTextNode(" ")
            );


            li.appendChild(
              sourceLink(
                automaticUrl
              )
            );
          }
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
   KAYNAK URL'Sİ OLUŞTUR
========================================= */

function getSourceUrl(
  text
) {

  if (!text) {
    return null;
  }


  /*
    Kur'an kaynakları
    örnek:

    Kur'an — Âl-i İmrân 3:19
    Kur'an — Bakara 2:255
    Kur'an — İhlâs 112:1-4
  */

  const quranMap = {

    "Âl-i İmrân": 3,
    "Ali İmran": 3,
    "Al-i İmran": 3,

    "Bakara": 2,

    "İhlâs": 112,
    "İhlas": 112,

    "Zâriyât": 51,
    "Zariyat": 51,

    "Hucurât": 49,
    "Hucurat": 49,

    "Hicr": 15,

    "Ahzâb": 33,
    "Ahzab": 33,

    "Fetih": 48,

    "Şûrâ": 42,
    "Şura": 42,

    "Nahl": 16,

    "Enbiyâ": 21,
    "Enbiya": 21,

    "Zilzâl": 99,
    "Zilzal": 99,

    "Tevbe": 9
  };


  for (
    const name in quranMap
  ) {

    if (
      text.includes(name)
    ) {

      const match =
        text.match(
          /(\d+):(\d+(?:-\d+)?)/
        );


      if (!match) {
        return null;
      }


      const surah =
        quranMap[name];


      const verses =
        match[2];


      /*
        Quran.com URL formatı:
        https://quran.com/3/19
      */

      return (
        `https://quran.com/${surah}/${verses}`
      );
    }
  }


  /*
    Sahih Müslim
    Tam numara farklı baskılarda değişebildiği için
    doğrudan arama sayfasına yönlendiriyoruz.
  */

  if (
    text.includes("Sahih Müslim")
  ) {

    return (
      "https://sunnah.com/search?q=" +
      encodeURIComponent(text)
    );
  }


  /*
    Büyük İslâm İlmihali
  */

  if (
    text.includes(
      "Büyük İslâm İlmihali"
    )
  ) {

    return (
      "https://www.google.com/search?q=" +
      encodeURIComponent(text)
    );
  }


  /*
    Akademi / Bir Müslümanın Yol Haritası
  */

  if (
    text.includes(
      "Bir Müslümanın Yol Haritası"
    )
  ) {

    return (
      "https://www.google.com/search?q=" +
      encodeURIComponent(text)
    );
  }


  return null;
}


/* =========================================
   KAYNAK LINKİ
========================================= */

function sourceLink(
  url
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
    `🔗 ${UI[selectedLang].openSource}`;


  return link;
}


/* =========================================
   HATA YAKALAMA
========================================= */

window.addEventListener(
  "error",
  event => {

    console.error(
      "Site JavaScript hatası:",
      event.error || event.message
    );
  }
);


/* =========================================
   UNHANDLED PROMISE
========================================= */

window.addEventListener(
  "unhandledrejection",
  event => {

    console.error(
      "Beklenmeyen Promise hatası:",
      event.reason
    );
  }
);
