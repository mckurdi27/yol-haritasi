/* =========================================
   BİR MÜSLÜMANIN YOL HARİTASI
   11 DİL
   APP.JS
========================================= */


/* =========================================
   DİLLER
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
    flag: "🇬🇭",
    name: "Kurmancî"
  },

  {
    key: "ar",
    flag: "🇸🇦",
    name: "العربية"
  },

  {
    key: "tt",
    flag: "🇭🇺",
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
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Kaynaklar",
    openSource: "Kaynağı aç",
    questionCount: "Soru",
    loading: "Günler yükleniyor...",
    noDays: "Henüz gün bulunamadı.",
    play: "Oynat",
    stop: "Durdur",
    slow: "Yavaşlat",
    fast: "Hızlandır",
    veryFast: "Çok hızlandır",
    settings: "⚙️ Ayarlar",
    speechSpeed: "Konuşma hızı",
    selectedLanguage: "Seçili dil",
    close: "Kapat"
  },

  en: {
    title: "A Muslim's Roadmap",
    subtitle: "Learn Islam step by step",
    days: "Days",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Sources",
    openSource: "Open source",
    questionCount: "Questions",
    loading: "Loading days...",
    noDays: "No days found yet.",
    play: "Play",
    stop: "Stop",
    slow: "Slow down",
    fast: "Speed up",
    veryFast: "Very fast",
    settings: "⚙️ Settings",
    speechSpeed: "Speech speed",
    selectedLanguage: "Selected language",
    close: "Close"
  },

  de: {
    title: "Der Wegweiser eines Muslims",
    subtitle: "Den Islam Schritt für Schritt kennenlernen",
    days: "Tage",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Quellen",
    openSource: "Quelle öffnen",
    questionCount: "Fragen",
    loading: "Tage werden geladen...",
    noDays: "Noch keine Tage gefunden.",
    play: "Abspielen",
    stop: "Stopp",
    slow: "Verlangsamen",
    fast: "Beschleunigen",
    veryFast: "Sehr schnell",
    settings: "⚙️ Einstellungen",
    speechSpeed: "Sprechgeschwindigkeit",
    selectedLanguage: "Ausgewählte Sprache",
    close: "Schließen"
  },

  ru: {
    title: "Путеводитель мусульманина",
    subtitle: "Изучайте ислам шаг за шагом",
    days: "Дни",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Источники",
    openSource: "Открыть источник",
    questionCount: "Вопросов",
    loading: "Загрузка дней...",
    noDays: "Дни пока не найдены.",
    play: "Воспроизвести",
    stop: "Стоп",
    slow: "Медленнее",
    fast: "Быстрее",
    veryFast: "Очень быстро",
    settings: "⚙️ Настройки",
    speechSpeed: "Скорость речи",
    selectedLanguage: "Выбранный язык",
    close: "Закрыть"
  },

  ku: {
    title: "Rêbernameya Misilmanekî",
    subtitle: "Îslamê gav bi gav fêr bibe",
    days: "Roj",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Çavkanî",
    openSource: "Çavkaniyê veke",
    questionCount: "Pirs",
    loading: "Roj tên barkirin...",
    noDays: "Hêj roj nehatine dîtin.",
    play: "Bide lîstin",
    stop: "Rawestîne",
    slow: "Hêdî bike",
    fast: "Bileztir bike",
    veryFast: "Pir bilez",
    settings: "⚙️ Mîheng",
    speechSpeed: "Leza axaftinê",
    selectedLanguage: "Zimanê hilbijartî",
    close: "Bigire"
  },

  ar: {
    title: "خُطَّةُ طَرِيقِ الْمُسْلِمِ",
    subtitle: "تَعَلَّمِ الْإِسْلَامَ خُطْوَةً خُطْوَةً",
    days: "الأَيَّامُ",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 الْمَصَادِرُ",
    openSource: "فَتْحُ الْمَصْدَرِ",
    questionCount: "أَسْئِلَة",
    loading: "جَارٍ تَحْمِيلُ الأَيَّامِ...",
    noDays: "لَمْ يَتِمَّ الْعُثُورُ عَلَى أَيَّامٍ بَعْدُ.",
    play: "تشغيل",
    stop: "إيقاف",
    slow: "إبطاء",
    fast: "تسريع",
    veryFast: "سريع جداً",
    settings: "⚙️ الإعدادات",
    speechSpeed: "سرعة الكلام",
    selectedLanguage: "اللغة المختارة",
    close: "إغلاق"
  },

  tt: {
    title: "Мөселманның юл картасы",
    subtitle: "Исламны адымлап өйрәнегез",
    days: "Көннәр",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Чыганаклар",
    openSource: "Чыганакны ачу",
    questionCount: "Сорау",
    loading: "Көннәр йөкләнә...",
    noDays: "Әлегә көннәр табылмады.",
    play: "Уйнату",
    stop: "Тукта",
    slow: "Акрынлату",
    fast: "Тизләтү",
    veryFast: "Бик тиз",
    settings: "⚙️ Көйләүләр",
    speechSpeed: "Сөйләм тизлеге",
    selectedLanguage: "Сайланган тел",
    close: "Ябу"
  },

  fr: {
    title: "La feuille de route du musulman",
    subtitle: "Apprendre l’islam étape par étape",
    days: "Jours",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Sources",
    openSource: "Ouvrir la source",
    questionCount: "Questions",
    loading: "Chargement des jours...",
    noDays: "Aucun jour trouvé.",
    play: "Lire",
    stop: "Arrêter",
    slow: "Ralentir",
    fast: "Accélérer",
    veryFast: "Très rapide",
    settings: "⚙️ Paramètres",
    speechSpeed: "Vitesse de parole",
    selectedLanguage: "Langue sélectionnée",
    close: "Fermer"
  },

  es: {
    title: "La hoja de ruta del musulmán",
    subtitle: "Aprender el Islam paso a paso",
    days: "Días",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Fuentes",
    openSource: "Abrir fuente",
    questionCount: "Preguntas",
    loading: "Cargando días...",
    noDays: "Todavía no se encontraron días.",
    play: "Reproducir",
    stop: "Detener",
    slow: "Más lento",
    fast: "Más rápido",
    veryFast: "Muy rápido",
    settings: "⚙️ Ajustes",
    speechSpeed: "Velocidad de voz",
    selectedLanguage: "Idioma seleccionado",
    close: "Cerrar"
  },

  nl: {
    title: "De routekaart van een moslim",
    subtitle: "Leer de islam stap voor stap",
    days: "Dagen",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Bronnen",
    openSource: "Bron openen",
    questionCount: "Vragen",
    loading: "Dagen worden geladen...",
    noDays: "Nog geen dagen gevonden.",
    play: "Afspelen",
    stop: "Stoppen",
    slow: "Vertragen",
    fast: "Versnellen",
    veryFast: "Zeer snel",
    settings: "⚙️ Instellingen",
    speechSpeed: "Spreeksnelheid",
    selectedLanguage: "Geselecteerde taal",
    close: "Sluiten"
  },

  it: {
    title: "La guida del musulmano",
    subtitle: "Imparare l'Islam passo dopo passo",
    days: "Giorni",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Fonti",
    openSource: "Apri fonte",
    questionCount: "Domande",
    loading: "Caricamento dei giorni...",
    noDays: "Nessun giorno trovato.",
    play: "Riproduci",
    stop: "Ferma",
    slow: "Rallenta",
    fast: "Accelera",
    veryFast: "Molto veloce",
    settings: "⚙️ Impostazioni",
    speechSpeed: "Velocità della voce",
    selectedLanguage: "Lingua selezionata",
    close: "Chiudi"
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

let speechRate =
  Number(
    localStorage.getItem("speechRate")
  ) || 1;

let speechUtterance = null;


/* =========================================
   TTS SEVİYELERİ
========================================= */

const TTS_LEVELS = {

  slow: [
    1,
    0.75,
    0.50,
    0.25
  ],

  fast: [
    1,
    1.25,
    1.50,
    1.75
  ],

  veryFast: [
    1,
    2,
    2.5,
    3
  ]

};


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

  stopSpeech();

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

  stopSpeech();

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


  /* =========================================
     DİL SEÇİCİ
  ========================================= */

  addQuestionLanguageSelector();


  /* =========================================
     TTS KONTROLLERİ
     
     DİL SEÇİCİNİN HEMEN ALTINDA
  ========================================= */

  addTTSControls();


  /* =========================================
     AYARLAR
  ========================================= */

  addSettingsButton();


  /* =========================================
     NAVİGASYON
  ========================================= */

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
   TTS KONTROLLERİNİ OLUŞTUR
========================================= */

function addTTSControls() {

  const page =
    document.querySelector(
      "#question-page"
    );

  const selector =
    document.querySelector(
      "#language-selector"
    );

  if (
    !page ||
    !selector
  ) {
    return;
  }

  const old =
    document.querySelector(
      "#tts-controls"
    );

  if (old) {
    old.remove();
  }

  const controls =
    document.createElement(
      "div"
    );

  controls.id =
    "tts-controls";

  controls.className =
    "tts-controls";


  /* =====================================
     YAVAŞLAT
  ===================================== */

  const slowButton =
    createSpeedButton(
      "slow",
      "▸",
      UI[selectedLang].slow
    );

  let slowLevel = 0;

  slowButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      slowLevel++;

      if (
        slowLevel > 3
      ) {

        slowLevel = 0;

      }

      speechRate =
        TTS_LEVELS.slow[
          slowLevel
        ];

      saveSpeechRate();

      updateSpeedButton(
        slowButton,
        slowLevel,
        "▸"
      );

      resetOtherSpeedButtons(
        "slow"
      );

    }
  );


  /* =====================================
     OYNAT
  ===================================== */

  const playButton =
    document.createElement(
      "button"
    );

  playButton.type =
    "button";

  playButton.className =
    "tts-button tts-play";

  playButton.textContent =
    "▶";

  playButton.setAttribute(
    "aria-label",
    UI[selectedLang].play
  );

  playButton.title =
    UI[selectedLang].play;

  playButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      playSelectedText();

    }
  );


  /* =====================================
     DURDUR
  ===================================== */

  const stopButton =
    document.createElement(
      "button"
    );

  stopButton.type =
    "button";

  stopButton.className =
    "tts-button tts-stop";

  stopButton.textContent =
    "■";

  stopButton.setAttribute(
    "aria-label",
    UI[selectedLang].stop
  );

  stopButton.title =
    UI[selectedLang].stop;

  stopButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      stopSpeech();

    }
  );


  /* =====================================
     HIZLANDIR 1
     
     1 → 1.25 → 1.50 → 1.75
  ===================================== */

  const fastButton =
    createSpeedButton(
      "fast",
      "▸",
      UI[selectedLang].fast
    );

  let fastLevel = 0;

  fastButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      fastLevel++;

      if (
        fastLevel > 3
      ) {

        fastLevel = 0;

      }

      speechRate =
        TTS_LEVELS.fast[
          fastLevel
        ];

      saveSpeechRate();

      updateSpeedButton(
        fastButton,
        fastLevel,
        "▸"
      );

      resetOtherSpeedButtons(
        "fast"
      );

    }
  );


  /* =====================================
     HIZLANDIR 2
     
     1 → 2 → 2.5 → 3
  ===================================== */

  const veryFastButton =
    createSpeedButton(
      "very-fast",
      "▸",
      UI[selectedLang].veryFast
    );

  let veryFastLevel = 0;

  veryFastButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      veryFastLevel++;

      if (
        veryFastLevel > 3
      ) {

        veryFastLevel = 0;

      }

      speechRate =
        TTS_LEVELS.veryFast[
          veryFastLevel
        ];

      saveSpeechRate();

      updateSpeedButton(
        veryFastButton,
        veryFastLevel,
        "▸"
      );

      resetOtherSpeedButtons(
        "very-fast"
      );

    }
  );


  /* =====================================
     SATIRA EKLE
  ===================================== */

  controls.appendChild(
    slowButton
  );

  controls.appendChild(
    playButton
  );

  controls.appendChild(
    stopButton
  );

  controls.appendChild(
    fastButton
  );

  controls.appendChild(
    veryFastButton
  );


  /* =====================================
     DİL SEÇİCİNİN HEMEN ALTINA EKLE
  ===================================== */

  selector.insertAdjacentElement(
    "afterend",
    controls
  );

}


/* =========================================
   HIZ BUTONU
========================================= */

function createSpeedButton(
  type,
  icon,
  label
) {

  const button =
    document.createElement(
      "button"
    );

  button.type =
    "button";

  button.className =
    `tts-button tts-${type}`;

  button.textContent =
    icon;

  button.setAttribute(
    "aria-label",
    label
  );

  button.title =
    label;

  return button;

}


/* =========================================
   HIZ İKONUNU GÜNCELLE
========================================= */

function updateSpeedButton(
  button,
  level,
  icon
) {

  if (!button) {
    return;
  }

  if (
    level === 0
  ) {

    button.textContent =
      icon;

    return;

  }

  button.textContent =
    icon.repeat(level);

}


/* =========================================
   DİĞER HIZ BUTONLARINI SIFIRLA
========================================= */

function resetOtherSpeedButtons(
  activeType
) {

  const buttons =
    document.querySelectorAll(
      "#tts-controls .tts-button"
    );

  buttons.forEach(
    button => {

      if (
        button.classList.contains(
          `tts-${activeType}`
        )
      ) {
        return;
      }

      if (
        button.classList.contains(
          "tts-play"
        ) ||
        button.classList.contains(
          "tts-stop"
        )
      ) {
        return;
      }

      button.textContent =
        "▸";

    }
  );

}


/* =========================================
   AYARLAR BUTONU
========================================= */

function addSettingsButton() {

  const page =
    document.querySelector(
      "#question-page"
    );

  const selector =
    document.querySelector(
      "#language-selector"
    );

  if (
    !page ||
    !selector
  ) {
    return;
  }

  let settings =
    document.querySelector(
      "#tts-settings"
    );

  if (settings) {
    settings.remove();
  }

  settings =
    document.createElement(
      "div"
    );

  settings.id =
    "tts-settings";

  settings.className =
    "tts-settings";


  const button =
    document.createElement(
      "button"
    );

  button.type =
    "button";

  button.className =
    "settings-button";

  button.textContent =
    UI[selectedLang].settings;

  button.setAttribute(
    "aria-label",
    UI[selectedLang].settings
  );


  const panel =
    document.createElement(
      "div"
    );

  panel.className =
    "settings-panel";

  panel.style.display =
    "none";


  const speedText =
    document.createElement(
      "div"
    );

  speedText.className =
    "settings-row";

  speedText.innerHTML =
    `<strong>${UI[selectedLang].speechSpeed}:</strong> ${speechRate}×`;


  const languageText =
    document.createElement(
      "div"
    );

  languageText.className =
    "settings-row";

  const language =
    LANGS.find(
      item =>
        item.key === selectedLang
    );

  languageText.innerHTML =
    `<strong>${UI[selectedLang].selectedLanguage}:</strong> ${language ? language.name : selectedLang}`;


  const closeButton =
    document.createElement(
      "button"
    );

  closeButton.type =
    "button";

  closeButton.className =
    "settings-close";

  closeButton.textContent =
    UI[selectedLang].close;


  panel.appendChild(
    speedText
  );

  panel.appendChild(
    languageText
  );

  panel.appendChild(
    closeButton
  );


  button.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      panel.style.display =
        panel.style.display === "none"
          ? "block"
          : "none";

    }
  );


  closeButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      panel.style.display =
        "none";

    }
  );


  settings.appendChild(
    button
  );

  settings.appendChild(
    panel
  );


  selector.insertAdjacentElement(
    "afterend",
    settings
  );

}


/* =========================================
   KONUŞMA HIZINI KAYDET
========================================= */

function saveSpeechRate() {

  localStorage.setItem(
    "speechRate",
    String(speechRate)
  );

}


/* =========================================
   NAVİGASYON
   SOL  = SORU
   ORTA = KÂBE
   SAĞ  = GÜN
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


  const mainRow =
    document.createElement(
      "div"
    );

  mainRow.className =
    "navigation-main-row";


  /* =====================================
     SOL — SORU NAVİGASYONU
  ===================================== */

  const questionGroup =
    document.createElement(
      "div"
    );

  questionGroup.className =
    "navigation-group question-navigation-group";


  const previousQuestion =
    makeButton(
      UI[selectedLang].previousQuestion
    );

  previousQuestion.className =
    "navigation-arrow-button";

  previousQuestion.setAttribute(
    "aria-label",
    "Önceki soru"
  );

  previousQuestion.title =
    "Önceki soru";

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


  const nextQuestion =
    makeButton(
      UI[selectedLang].nextQuestion
    );

  nextQuestion.className =
    "navigation-arrow-button";

  nextQuestion.setAttribute(
    "aria-label",
    "Sonraki soru"
  );

  nextQuestion.title =
    "Sonraki soru";

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


  questionGroup.appendChild(
    previousQuestion
  );

  questionGroup.appendChild(
    questionInput
  );

  questionGroup.appendChild(
    nextQuestion
  );


  /* =====================================
     ORTA — ANA SAYFA
  ===================================== */

  const homeGroup =
    document.createElement(
      "div"
    );

  homeGroup.className =
    "navigation-home-group";

  const home =
    makeButton(
      "🕋"
    );

  home.className =
    "navigation-home-button";

  home.setAttribute(
    "aria-label",
    "Ana Sayfa"
  );

  home.title =
    "Ana Sayfa";

  home.onclick =
    () => {

      renderHome();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    };

  homeGroup.appendChild(
    home
  );


  /* =====================================
     SAĞ — GÜN NAVİGASYONU
  ===================================== */

  const dayGroup =
    document.createElement(
      "div"
    );

  dayGroup.className =
    "navigation-group day-navigation-group";


  const previousDay =
    makeButton(
      UI[selectedLang].previousDay
    );

  previousDay.className =
    "navigation-arrow-button";

  previousDay.setAttribute(
    "aria-label",
    "Önceki gün"
  );

  previousDay.title =
    "Önceki gün";

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


  const nextDay =
    makeButton(
      UI[selectedLang].nextDay
    );

  nextDay.className =
    "navigation-arrow-button";

  nextDay.setAttribute(
    "aria-label",
    "Sonraki gün"
  );

  nextDay.title =
    "Sonraki gün";

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


  dayGroup.appendChild(
    previousDay
  );

  dayGroup.appendChild(
    dayInput
  );

  dayGroup.appendChild(
    nextDay
  );


  mainRow.appendChild(
    questionGroup
  );

  mainRow.appendChild(
    homeGroup
  );

  mainRow.appendChild(
    dayGroup
  );

  wrapper.appendChild(
    mainRow
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

  if (
    text.includes("sahih müslim") ||
    text.includes("sahih muslim")
  ) {

    return (
      "https://sunnah.com/muslim"
    );

  }

  if (
    text.includes("sahih buhari") ||
    text.includes("sahih buhârî") ||
    text.includes("sahih bukhari")
  ) {

    return (
      "https://sunnah.com/bukhari"
    );

  }

  if (
    text.includes(
      "ömer nasuhi bilmen"
    )
  ) {

    return (
      "https://archive.org/search?query=%C3%96mer+Nasuhi+Bilmen+B%C3%BCy%C3%BCk+%C4%B0slam+%C4%B0lmihali"
    );

  }

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
   TEXT TO SPEECH
========================================= */

function speakText(
  text
) {

  if (
    !("speechSynthesis" in window)
  ) {

    console.warn(
      "Tarayıcı Speech Synthesis desteklemiyor."
    );

    return;

  }

  window.speechSynthesis.cancel();

  speechUtterance =
    new SpeechSynthesisUtterance(
      text
    );

  speechUtterance.rate =
    speechRate;

  speechUtterance.pitch =
    1;

  speechUtterance.volume =
    1;

  speechUtterance.lang =
    getSpeechLanguage(
      selectedLang
    );

  window.speechSynthesis.speak(
    speechUtterance
  );

}


/* =========================================
   DİL → SES DİLİ
========================================= */

function getSpeechLanguage(
  lang
) {

  const languages = {

    tr: "tr-TR",

    en: "en-US",

    de: "de-DE",

    ru: "ru-RU",

    ku: "ku",

    ar: "ar-SA",

    tt: "tt-RU",

    fr: "fr-FR",

    es: "es-ES",

    nl: "nl-NL",

    it: "it-IT"

  };

  return (
    languages[lang] ||
    "tr-TR"
  );

}


/* =========================================
   OYNAT
========================================= */

function playSelectedText() {

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

  const data =
    question[selectedLang];

  if (!data) {
    return;
  }

  const text =
    `${data.q}. ${data.a}`;

  speakText(
    text
  );

}


/* =========================================
   DURDUR
========================================= */

function stopSpeech() {

  if (
    "speechSynthesis" in window
  ) {

    window.speechSynthesis.cancel();

  }

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

