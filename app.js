/* =========================================
   BİR MÜSLÜMANIN YOL HARİTASI
   11 DİL
   APP.JS
========================================= */


/* =========================================
   DİLLER

   SIRALAMA:

   1  🇹🇷 Türkçe
   2  🇬🇧 English
   3  🇩🇪 Deutsch
   4  🇷🇺 Русский
   5  Kurmancî
   6  🇸🇦 العربية
   7  Tatarca
   8  🇫🇷 Français
   9  🇪🇸 Español
   10 🇳🇱 Nederlands
   11 🇮🇹 Italiano
========================================= */

const LANGS = [

  {
    key: "tr",
    flag: "🇹🇷",
    name: "Türkçe"
  },

  {
    key: "en",
    flag: "🇬🇧",
    name: "English"
  },

  {
    key: "de",
    flag: "🇩🇪",
    name: "Deutsch"
  },

  {
    key: "ru",
    flag: "🇷🇺",
    name: "Русский"
  },

  {
    key: "ku",
    flag: "☀️",
    name: "Kurmancî"
  },

  {
    key: "ar",
    flag: "🇸🇦",
    name: "العربية"
  },

  {
    key: "tt",
    flag: "🌿",
    name: "Tatarca"
  },

  {
    key: "fr",
    flag: "🇫🇷",
    name: "Français"
  },

  {
    key: "es",
    flag: "🇪🇸",
    name: "Español"
  },

  {
    key: "nl",
    flag: "🇳🇱",
    name: "Nederlands"
  },

  {
    key: "it",
    flag: "🇮🇹",
    name: "Italiano"
  }

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
    questionCount: "Soru",
    loading: "Günler yükleniyor...",
    noDays: "Henüz gün bulunamadı."
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
    questionCount: "Questions",
    loading: "Loading days...",
    noDays: "No days found yet."
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
    questionCount: "Fragen",
    loading: "Tage werden geladen...",
    noDays: "Noch keine Tage gefunden."
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
    questionCount: "Вопросов",
    loading: "Загрузка дней...",
    noDays: "Дни пока не найдены."
  },

  ku: {
    title: "Rêbernameya Misilmanekî",
    subtitle: "Îslamê gav bi gav fêr bibe",
    days: "Roj",
    previousQuestion: "← Pirsê berê",
    nextQuestion: "Pirsê paş",
    home: "🏠 Malpera sereke",
    previousDay: "← Roja berê",
    nextDay: "Roja paş",
    source: "📚 Çavkanî",
    openSource: "Çavkaniyê veke",
    questionCount: "Pirs",
    loading: "Roj tên barkirin...",
    noDays: "Hêj roj nehatine dîtin."
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
    questionCount: "Сорау",
    loading: "Көннәр йөкләнә...",
    noDays: "Әлегә көннәр табылмады."
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
    questionCount: "Questions",
    loading: "Chargement des jours...",
    noDays: "Aucun jour trouvé."
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
    questionCount: "Preguntas",
    loading: "Cargando días...",
    noDays: "Todavía no se encontraron días."
  },

  nl: {
    title: "De routekaart van een moslim",
    subtitle: "Leer de islam stap voor stap",
    days: "Dagen",
    previousQuestion: "← Vorige vraag",
    nextQuestion: "Volgende vraag →",
    home: "🏠 Home",
    previousDay: "← Vorige dag",
    nextDay: "Volgende dag →",
    source: "📚 Bronnen",
    openSource: "Bron openen",
    questionCount: "Vragen",
    loading: "Dagen worden geladen...",
    noDays: "Nog geen dagen gevonden."
  },

  it: {
    title: "La guida del musulmano",
    subtitle: "Imparare l'Islam passo dopo passo",
    days: "Giorni",
    previousQuestion: "← Domanda precedente",
    nextQuestion: "Domanda successiva →",
    home: "🏠 Home",
    previousDay: "← Giorno precedente",
    nextDay: "Giorno successivo →",
    source: "📚 Fonti",
    openSource: "Apri fonte",
    questionCount: "Domande",
    loading: "Caricamento dei giorni...",
    noDays: "Nessun giorno trovato."
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
    questionCount: "أَسْئِلَة",
    loading: "جَارٍ تَحْمِيلُ الأَيَّامِ...",
    noDays: "لَمْ يَتِمَّ الْعُثُورُ عَلَى أَيَّامٍ بَعْدُ."
  }

};


/* =========================================
   AYARLAR
========================================= */

let selectedLang =
  localStorage.getItem("selectedLang") || "tr";


if (!UI[selectedLang]) {
  selectedLang = "tr";
}


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

  renderHome();

  await loadDays();

  renderHome();

}


/* =========================================
   GÜNLERİ YÜKLE
========================================= */

async function loadDays() {

  days = [];

  console.log(
    "📚 Günler yükleniyor..."
  );

  const requests = [];

  for (
    let number = 1;
    number <= 30;
    number++
  ) {

    const file =
      `data/day-${String(number).padStart(2, "0")}.json`;

    const url =
      `${file}?v=${Date.now()}`;

    requests.push(

      fetch(
        url,
        {
          method: "GET",
          cache: "no-store"
        }
      )

        .then(
          async response => {

            if (!response.ok) {

              console.warn(
                `Gün ${number} mevcut değil:`,
                response.status
              );

              return null;
            }

            const text =
              await response.text();

            if (!text.trim()) {

              console.warn(
                `Gün ${number} boş:`,
                file
              );

              return null;
            }

            let data;

            try {

              data =
                JSON.parse(text);

            } catch (error) {

              console.error(
                `❌ Gün ${number} JSON hatası:`,
                error
              );

              console.error(
                "Dosya:",
                file
              );

              return null;
            }

            const questions =
              Array.isArray(data)
                ? data
                : data.questions;

            if (
              !Array.isArray(questions)
            ) {

              console.warn(
                `⚠️ Gün ${number}: questions dizisi bulunamadı.`,
                file
              );

              return null;
            }

            if (
              questions.length === 0
            ) {

              console.warn(
                `⚠️ Gün ${number}: soru bulunamadı.`,
                file
              );

              return null;
            }

            console.log(
              `✅ Gün ${number} yüklendi: ${questions.length} soru`
            );

            return {

              number,

              questions,

              info:
                Array.isArray(data)
                  ? {}
                  : data

            };

          }
        )

        .catch(
          error => {

            console.error(
              `❌ Gün ${number} yüklenemedi:`,
              error
            );

            return null;

          }
        )

    );

  }

  const results =
    await Promise.all(
      requests
    );

  days =
    results
      .filter(
        item =>
          item !== null
      )
      .sort(
        (a, b) =>
          a.number - b.number
      );

  console.log(
    "📚 Başarıyla yüklenen günler:",
    days.map(
      day =>
        day.number
    )
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

  if (
    !home ||
    !questionPage
  ) {
    return;
  }

  home.style.display =
    "block";

  questionPage.style.display =
    "none";

  const selector =
    document.querySelector(
      "#home-language-selector"
    );

  if (selector) {

    renderLanguageButtons(
      selector
    );

  }

  const roadmapTitle =
    home.querySelector(
      ".roadmap-title"
    );

  if (roadmapTitle) {

    roadmapTitle.innerHTML =
      "";

    const title =
      UI[selectedLang].title;

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
        .slice(
          0,
          middle
        )
        .join(" ");

    const secondLine =
      document.createElement(
        "div"
      );

    secondLine.textContent =
      words
        .slice(
          middle
        )
        .join(" ");

    roadmapTitle.appendChild(
      firstLine
    );

    roadmapTitle.appendChild(
      secondLine
    );

  }

  const subtitle =
    home.querySelector(
      ".home-subtitle"
    );

  if (subtitle) {

    subtitle.textContent =
      UI[selectedLang].subtitle;

  }

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

  list.innerHTML =
    "";

  if (!days.length) {

    const message =
      document.createElement(
        "p"
      );

    message.className =
      "loading-days";

    message.textContent =
      UI[selectedLang].noDays;

    list.appendChild(
      message
    );

    return;
  }

  days.forEach(
    (dayData, index) => {

      const card =
        document.createElement(
          "button"
        );

      card.type =
        "button";

      card.className =
        "day-card";

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
========================================= */

function renderLanguageButtons(
  container
) {

  if (!container) {
    return;
  }

  container.innerHTML =
    "";

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
    !home ||
    !page
  ) {
    return;
  }

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

  if (!content) {
    return;
  }

  content.innerHTML =
    "";

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

  const languageOrder = [

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

  languageOrder.forEach(
    languageKey => {

      const language =
        LANGS.find(
          item =>
            item.key === languageKey
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
        document.createElement(
          "div"
        );

      block.className =
        "language-block";

      if (
        languageKey === "ar"
      ) {

        block.classList.add(
          "arabic-language"
        );

        block.setAttribute(
          "dir",
          "rtl"
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

  if (
    Array.isArray(
      question.sources
    ) &&
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

  const top =
    document.querySelector(
      "#top-navigation"
    );

  const bottom =
    document.querySelector(
      "#bottom-navigation"
    );

  if (top) {

    top.innerHTML =
      "";

    top.appendChild(
      createNavigation(
        question
      )
    );

  }

  if (bottom) {

    bottom.innerHTML =
      "";

    bottom.appendChild(
      createNavigation(
        question
      )
    );

  }

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

  renderLanguageButtons(
    selector
  );

}


/* =========================================
   NAVİGASYON
========================================= */

function createNavigation(
  question
) {

  const wrapper =
    document.createElement(
      "div"
    );

  wrapper.className =
    "navigation-wrapper";


  /* =====================================
     SORU NAVİGASYONU
  ====================================== */

  const questionRow =
    document.createElement(
      "div"
    );

  questionRow.className =
    "navigation-row";


  /* =====================================
     ÖNCEKİ SORU
  ====================================== */

  const previousQuestion =
    makeButton(
      UI[selectedLang].previousQuestion
    );

  previousQuestion.disabled =
    currentDayIndex === 0 &&
    currentQuestionIndex === 0;

  previousQuestion.onclick =
    () => {

      if (
        currentQuestionIndex > 0
      ) {

        currentQuestionIndex--;

        renderQuestion();

        return;
      }

      if (
        currentDayIndex > 0
      ) {

        currentDayIndex--;

        currentQuestionIndex =
          days[currentDayIndex]
            .questions.length - 1;

        renderQuestion();

      }

    };


  /* =====================================
     SORU NUMARASI
  ====================================== */

  const questionInput =
    document.createElement(
      "input"
    );

  questionInput.type =
    "number";

  questionInput.className =
    "navigation-number-input";

  questionInput.min =
    "1";

  questionInput.placeholder =
    String(
      question.id
    );

  questionInput.value =
    String(
      question.id
    );

  questionInput.title =
    "Soru numarasına git";

  questionInput.setAttribute(
    "aria-label",
    "Soru numarasına git"
  );

  questionInput.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        goToQuestionNumber(
          questionInput.value
        );

      }

    }
  );

  questionInput.addEventListener(
    "change",
    () => {

      goToQuestionNumber(
        questionInput.value
      );

    }
  );


  /* =====================================
     SONRAKİ SORU
  ====================================== */

  const nextQuestion =
    makeButton(
      UI[selectedLang].nextQuestion
    );

  nextQuestion.disabled =
    currentDayIndex >= days.length - 1 &&
    currentQuestionIndex >=
      days[currentDayIndex]
        .questions.length - 1;

  nextQuestion.onclick =
    () => {

      const currentQuestions =
        days[currentDayIndex]
          .questions;

      if (
        currentQuestionIndex <
        currentQuestions.length - 1
      ) {

        currentQuestionIndex++;

        renderQuestion();

        return;
      }

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


  questionRow.appendChild(
    previousQuestion
  );

  questionRow.appendChild(
    questionInput
  );

  questionRow.appendChild(
    nextQuestion
  );


  /* =====================================
     GÜN NAVİGASYONU
  ====================================== */

  const dayRow =
    document.createElement(
      "div"
    );

  dayRow.className =
    "navigation-row";


  /* =====================================
     ÖNCEKİ GÜN
  ====================================== */

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


  /* =====================================
     GÜN NUMARASI
  ====================================== */

  const dayInput =
    document.createElement(
      "input"
    );

  dayInput.type =
    "number";

  dayInput.className =
    "navigation-number-input";

  dayInput.min =
    "1";

  dayInput.max =
    "30";

  dayInput.placeholder =
    String(
      days[currentDayIndex].number
    );

  dayInput.value =
    String(
      days[currentDayIndex].number
    );

  dayInput.title =
    "Gün numarasına git";

  dayInput.setAttribute(
    "aria-label",
    "Gün numarasına git"
  );

  dayInput.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        goToDayNumber(
          dayInput.value
        );

      }

    }
  );

  dayInput.addEventListener(
    "change",
    () => {

      goToDayNumber(
        dayInput.value
      );

    }
  );


  /* =====================================
     SONRAKİ GÜN
  ====================================== */

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


  dayRow.appendChild(
    previousDay
  );

  dayRow.appendChild(
    dayInput
  );

  dayRow.appendChild(
    nextDay
  );


  /* =====================================
     ANA SAYFA
  ====================================== */

  const homeRow =
    document.createElement(
      "div"
    );

  homeRow.className =
    "navigation-home-row";

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

  homeRow.appendChild(
    home
  );


  /* =====================================
     HEPSİNİ BİRLEŞTİR
  ====================================== */

  wrapper.appendChild(
    questionRow
  );

  wrapper.appendChild(
    dayRow
  );

  wrapper.appendChild(
    homeRow
  );

  return wrapper;

}


/* =========================================
   SORU NUMARASINA GİT
========================================= */

function goToQuestionNumber(
  value
) {

  const questionNumber =
    Number(value);

  if (
    !Number.isInteger(questionNumber)
  ) {

    return;

  }

  for (
    let dayIndex = 0;
    dayIndex < days.length;
    dayIndex++
  ) {

    const questions =
      days[dayIndex].questions;

    const questionIndex =
      questions.findIndex(
        question =>
          Number(question.id) ===
          questionNumber
      );

    if (
      questionIndex !== -1
    ) {

      currentDayIndex =
        dayIndex;

      currentQuestionIndex =
        questionIndex;

      renderQuestion();

      return;

    }

  }

  console.warn(
    `Soru bulunamadı: ${questionNumber}`
  );

}


/* =========================================
   GÜN NUMARASINA GİT
========================================= */

function goToDayNumber(
  value
) {

  const dayNumber =
    Number(value);

  if (
    !Number.isInteger(dayNumber)
  ) {

    return;

  }

  const dayIndex =
    days.findIndex(
      day =>
        Number(day.number) ===
        dayNumber
    );

  if (
    dayIndex === -1
  ) {

    console.warn(
      `Gün bulunamadı: ${dayNumber}`
    );

    return;

  }

  currentDayIndex =
    dayIndex;

  currentQuestionIndex =
    0;

  renderQuestion();

}


/* =========================================
   BUTON OLUŞTUR
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

      let text =
        "";

      let url =
        "";

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

      if (!url) {

        url =
          getSourceUrl(
            text
          );

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

        link.title =
          UI[selectedLang].openSource;

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
    String(
      source
    ).toLowerCase();


  /* =====================================
     KUR'AN
  ====================================== */

  const quranMatch =
    text.match(
      /(?:kur['’]an|qur['’]?an|coran|corán|коран|коръән)[^0-9]*(\d+)[\s:.-]+(\d+)(?:[-–](\d+))?/i
    );

  if (quranMatch) {

    const surah =
      quranMatch[1];

    const start =
      quranMatch[2];

    return (
      `https://quran.com/${surah}?startingVerse=${start}`
    );

  }


  /* =====================================
     SAHİH MÜSLİM
  ====================================== */

  if (
    text.includes("sahih müslim") ||
    text.includes("sahih muslim")
  ) {

    return (
      "https://sunnah.com/muslim"
    );

  }


  /* =====================================
     SAHİH BUHARİ
  ====================================== */

  if (
    text.includes("sahih buhari") ||
    text.includes("sahih buhârî") ||
    text.includes("sahih bukhari")
  ) {

    return (
      "https://sunnah.com/bukhari"
    );

  }


  /* =====================================
     ÖMER NASUHİ BİLMEN
  ====================================== */

  if (
    text.includes(
      "ömer nasuhi bilmen"
    )
  ) {

    return (
      "https://archive.org/search?query=%C3%96mer+Nasuhi+Bilmen+B%C3%BCy%C3%BCk+%C4%B0slam+%C4%B0lmihali"
    );

  }


  /* =====================================
     PROJE SİTESİ
  ====================================== */

  if (
    text.includes(
      "bir müslümanın yol haritası"
    ) ||
    text.includes(
      "akademi"
    )
  ) {

    return (
      "https://mckurdi27.github.io/yol-haritasi/"
    );

  }


  return "";

}


/* =========================================
   GENEL HATA YAKALAMA
========================================= */

window.addEventListener(
  "error",
  event => {

    console.error(
      "Yol Haritası JavaScript hatası:",
      event.error ||
      event.message
    );

  }
);


/* =========================================
   PROMISE HATALARI
========================================= */

window.addEventListener(
  "unhandledrejection",
  event => {

    console.error(
      "Yol Haritası Promise hatası:",
      event.reason
    );

  }
);


/* =========================================
   APP.JS SONU
========================================= */
