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

let currentDayIndex = 0;

let currentQuestionIndex = 0;


/* =====================================
   BAŞLAT
===================================== */

document.addEventListener(
  "DOMContentLoaded",
  init
);


async function init() {

  await loadDays();

  showHome();

}


/* =====================================
   GÜNLERİ OTOMATİK YÜKLE
===================================== */

async function loadDays() {

  const loadedDays = [];

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

        questions = data.questions;
      }

      if (questions.length > 0) {

        loadedDays.push({
          day: day,
          questions: questions
        });

      }

    } catch (error) {

      // Dosya yoksa devam et.
    }
  }

  days = loadedDays;
}


/* =====================================
   ANA SAYFA
===================================== */

function showHome() {

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


  const list =
    document.querySelector(
      "#days-list"
    );

  list.innerHTML = "";


  if (!days.length) {

    list.innerHTML =
      "<p>Henüz gün eklenmemiş.</p>";

    return;
  }


  days.forEach(
    (dayData, index) => {

      const questions =
        dayData.questions;


      const firstQuestion =
        questions[0] || {};


      /*
        Gün başlığını mümkünse
        ilk sorudaki dayTitle'dan al.
      */

      let dayTitle =
        firstQuestion.dayTitle ||
        firstQuestion.day ||
        "";


      /*
        Eğer başlık yoksa
        sadece gün numarası.
      */

      if (
        typeof dayTitle !== "string"
      ) {

        dayTitle = "";
      }


      /*
        "1. Gün — İslâm'a İlk Adım · 19 Soru"
      */

      const card =
        document.createElement(
          "button"
        );

      card.type =
        "button";

      card.className =
        "day-card";


      const title =
        document.createElement(
          "span"
        );

      title.className =
        "day-card-title";


      if (dayTitle) {

        /*
          Eğer JSON'da zaten
          "1. Gün — ..." yazıyorsa
          tekrar gün ekleme.
        */

        if (
          dayTitle
            .toLocaleLowerCase(
              "tr-TR"
            )
            .startsWith(
              `${dayData.day}. gün`
            )
        ) {

          title.textContent =
            `${dayTitle} · ${questions.length} Soru`;

        } else {

          title.textContent =
            `${dayData.day}. Gün — ${dayTitle} · ${questions.length} Soru`;
        }

      } else {

        title.textContent =
          `${dayData.day}. Gün · ${questions.length} Soru`;
      }


      card.appendChild(
        title
      );


      card.addEventListener(
        "click",
        () => {

          currentDayIndex =
            index;

          currentQuestionIndex =
            0;

          showQuestion();

        }
      );


      list.appendChild(
        card
      );
    }
  );
}


/* =====================================
   SORU SAYFASI
===================================== */

function showQuestion() {

  if (!days.length) {
    showHome();
    return;
  }


  const home =
    document.querySelector(
      "#home-page"
    );

  const questionPage =
    document.querySelector(
      "#question-page"
    );


  home.style.display =
    "none";

  questionPage.style.display =
    "block";


  renderQuestionPage();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================
   SORU SAYFASINI OLUŞTUR
===================================== */

function renderQuestionPage() {

  const dayData =
    days[currentDayIndex];

  const questions =
    dayData.questions;

  const question =
    questions[
      currentQuestionIndex
    ];


  const content =
    document.querySelector(
      "#question-content"
    );


  content.innerHTML = "";


  /*
    GÜN BAŞLIĞI
  */

  const dayTitle =
    document.createElement(
      "h2"
    );

  dayTitle.className =
    "question-day-title";


  const firstQuestion =
    questions[0] || {};


  let dayName =
    firstQuestion.dayTitle ||
    "";


  if (
    dayName &&
    !dayName
      .toLocaleLowerCase(
        "tr-TR"
      )
      .startsWith(
        `${dayData.day}. gün`
      )
  ) {

    dayName =
      `${dayData.day}. Gün — ${dayName}`;

  } else if (!dayName) {

    dayName =
      `${dayData.day}. Gün`;
  }


  dayTitle.textContent =
    dayName;


  content.appendChild(
    dayTitle
  );


  /*
    SORU
  */

  const card =
    document.createElement(
      "article"
    );

  card.className =
    "question-card";


  /*
    SEÇİLEN DİL EN ÜSTTE
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
    ÜST VE ALT NAVİGASYON
  */

  const topNavigation =
    document.querySelector(
      "#top-navigation"
    );

  const bottomNavigation =
    document.querySelector(
      "#bottom-navigation"
    );


  topNavigation.innerHTML =
    "";

  bottomNavigation.innerHTML =
    "";


  topNavigation.appendChild(
    createNavigation()
  );

  bottomNavigation.appendChild(
    createNavigation()
  );
}


/* =====================================
   NAVİGASYON
===================================== */

function createNavigation() {

  const nav =
    document.createElement(
      "div"
    );

  nav.className =
    "navigation-row";


  /*
    ÖNCEKİ SORU
  */

  const previousQuestion =
    document.createElement(
      "button"
    );

  previousQuestion.type =
    "button";

  previousQuestion.textContent =
    "← Önceki Soru";


  previousQuestion.disabled =
    currentQuestionIndex === 0;


  previousQuestion.onclick =
    () => {

      if (
        currentQuestionIndex > 0
      ) {

        currentQuestionIndex--;

        showQuestion();
      }
    };


  /*
    SONRAKİ SORU
  */

  const nextQuestion =
    document.createElement(
      "button"
    );

  nextQuestion.type =
    "button";

  nextQuestion.textContent =
    "Sonraki Soru →";


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

        showQuestion();
      }
    };


  /*
    ANA SAYFA
  */

  const homeButton =
    document.createElement(
      "button"
    );

  homeButton.type =
    "button";

  homeButton.textContent =
    "🏠 Ana Sayfa";


  homeButton.onclick =
    () => {

      showHome();
    };


  /*
    ÖNCEKİ GÜN
  */

  const previousDay =
    document.createElement(
      "button"
    );

  previousDay.type =
    "button";

  previousDay.textContent =
    "← Önceki Gün";


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

        showQuestion();
      }
    };


  /*
    SONRAKİ GÜN
  */

  const nextDay =
    document.createElement(
      "button"
    );

  nextDay.type =
    "button";

  nextDay.textContent =
    "Sonraki Gün →";


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

        showQuestion();
      }
    };


  nav.appendChild(
    previousQuestion
  );

  nav.appendChild(
    nextQuestion
  );

  nav.appendChild(
    homeButton
  );

  nav.appendChild(
    previousDay
  );

  nav.appendChild(
    nextDay
  );


  return nav;
}


/* =====================================
   KAYNAKLAR
===================================== */

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
    ] ||
    "📚 Kaynaklar";


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

        const title =
          document.createElement(
            "span"
          );

        title.textContent =
          source.title ||
          source.name ||
          "Kaynak";


        item.appendChild(
          title
        );


        if (source.url) {

          item.appendChild(
            document.createTextNode(
              " "
            )
          );


          item.appendChild(
            createSourceLink(
              source.url
            )
          );
        }

      } else {

        /*
          Eski formatı da destekle.
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
            createSourceLink(
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


/* =====================================
   KAYNAK LİNKİ
===================================== */

function createSourceLink(
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


/* =====================================
   DİL SEÇİMİ
===================================== */

/*
  Soru sayfasında dil seçimi.
*/

function addLanguageSelector() {

  /*
    Eski sistemle uyum için
    mevcut bir language-selector
    varsa kullanılır.
  */

  const existing =
    document.querySelector(
      "#language-selector"
    );


  if (!existing) {
    return;
  }


  existing.innerHTML =
    "";


  LANGS.forEach(
    language => {

      const button =
        document.createElement(
          "button"
        );

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
        () => {

          selectedLang =
            language.key;

          localStorage.setItem(
            "selectedLang",
            selectedLang
          );

          renderQuestionPage();
        };


      existing.appendChild(
        button
      );
    }
  );
      }
