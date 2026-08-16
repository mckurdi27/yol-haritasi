/* =========================================
   BİR MÜSLÜMANIN YOL HARİTASI
   9 DİL
========================================= */


/* =========================================
   DİLLER
========================================= */

const LANGS = [
  { key: "tr", flag: "🇹🇷", name: "Türkçe" },
  { key: "en", flag: "🇬🇧", name: "English" },
  { key: "de", flag: "🇩🇪", name: "Deutsch" },
  { key: "ru", flag: "🇷🇺", name: "Русский" },

  /* Kürtçe → Gana bayrağı */
  { key: "ku", flag: "🇬🇭", name: "Kurmancî" },

  /* Tatarca → Macaristan bayrağı */
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

  await loadDays();

  renderHome();

}


/* =========================================
   GÜNLERİ HIZLI YÜKLE
=========================================

   Eski sistem:
   1 → bekle
   2 → bekle
   3 → bekle
   ...

   Yeni sistem:
   1–365 aynı anda kontrol edilir.

========================================= */

async function loadDays() {

  days = [];

  const requests = [];

  for (
    let number = 1;
    number <= 365;
    number++
  ) {

    const file =
      `data/day-${String(number).padStart(2, "0")}.json`;

    requests.push(
      fetch(
        file,
        {
          cache: "no-store"
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
              !questions.length
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


  if (!days.length) {

    const empty =
      document.createElement("p");

    empty.textContent =
      "Henüz gün verisi bulunamadı.";

    list.appendChild(empty);

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
    SEÇİLEN DİL İLK SIRADA
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
    NAVİGASYONLAR
  */

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


  /*
    DİL SEÇİCİ
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


  /*
    SADECE BAYRAK
    DİL İSMİ GÖSTERİLMEZ
  */

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


      let text = "";
      let url = "";


      /*
        Yeni JSON biçimi:
        {
          "title": "...",
          "url": "..."
        }
      */

      if (
        typeof source === "object" &&
        source !== null
      ) {

        text =
          source.title ||
          source.name ||
          "Kaynak";


        url =
          source.url ||
          "";

      } else {

        text =
          String(source);


        const match =
          text.match(
            /https?:\/\/[^\s|]+/i
          );


        if (match) {

          url =
            match[0];


          text =
            text
              .replace(
                url,
                ""
              )
              .trim();

        }

      }


      /*
        JSON'da URL yoksa bilinen
        kaynaklar için otomatik bağlantı
      */

      if (!url) {

        url =
          getSourceUrl(text);

      }


      if (url) {

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
          text;


        li.appendChild(
          link
        );

      } else {

        li.textContent =
          text;

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
   KAYNAK URL'LERİ
========================================= */

function getSourceUrl(
  source
) {

  const text =
    source.toLowerCase();


  /*
    KUR'AN
  */

  const quranMatch =
    text.match(
      /(?:kur['’]an|qur'an|coran|corán|коран|коръән)[^0-9]*(\d+)[\s:.-]+(\d+)(?:[-–](\d+))?/i
    );


  if (quranMatch) {

    const surah =
      quranMatch[1];


    const start =
      quranMatch[2];


    const end =
      quranMatch[3];


    const verse =
      end
        ? `${start}-${end}`
        : start;


    return (
      `https://quran.com/${surah}?startingVerse=${start}`
    );
  }


  /*
    SAHİH MÜSLİM
  */

  if (
    text.includes("sahih müslim") ||
    text.includes("sahih muslim")
  ) {

    return "https://sunnah.com/muslim";

  }


  /*
    BİLİNEN HADİS KAYNAKLARI
  */

  if (
    text.includes("sahih buhari") ||
    text.includes("sahih buhârî")
  ) {

    return "https://sunnah.com/bukhari";

  }


  /*
    ÖMER NASUHİ BİLMEN
  */

  if (
    text.includes("ömer nasuhi bilmen")
  ) {

    return "https://archive.org/search?query=%C3%96mer+Nasuhi+Bilmen+B%C3%BCy%C3%BCk+%C4%B0slam+%C4%B0lmihali";

  }


  /*
    AKADEMİ
  */

  if (
    text.includes("bir müslümanın yol haritası") ||
    text.includes("akademi")
  ) {

    return "https://mckurdi27.github.io/yol-haritasi/";

  }


  return "";
}


/* =========================================
   PERFORMANS
========================================= */

/*
   Tarayıcı önbelleğini kullanmaya izin veriyoruz.
   Sayfa her açıldığında 365 JSON'u yeniden
   indirmek yerine HTTP cache kullanılabilir.
*/

if (
  "serviceWorker" in navigator
) {

  window.addEventListener(
    "load",
    () => {

      /*
        Service worker dosyası henüz
        oluşturulmadıysa hiçbir şey yapmaz.
      */

    }
  );
     }
