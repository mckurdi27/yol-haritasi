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
    noDays: "Henüz gün bulunamadı."
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
    noDays: "No days found yet."
  },

  de: {
    title: "Der Wegweiser eines Muslims",
    subtitle: "Den Islam Schritt für Schritt kennenlernen",
    days: "Tage",
    previousQuestion: "←",
    nextQuestion: "→",
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
    previousQuestion: "←",
    nextQuestion: "→",
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
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Çavkanî",
    openSource: "Çavkaniyê veke",
    questionCount: "Pirs",
    loading: "Roj tên barkirin...",
    noDays: "Hêj roj nehatine dîtin."
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
    noDays: "لَمْ يَتِمَّ الْعُثُورُ عَلَى أَيَّامٍ بَعْدُ."
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
    noDays: "Әлегә көннәр табылмады."
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
    noDays: "Aucun jour trouvé."
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
    noDays: "Todavía no se encontraron días."
  },

  nl: {
    title: "De routekaart van een moslim",
    subtitle: "Leer de islam stap voor stap",
    days: "Dagen",
    previousQuestion: "←",
    nextQuestion: "→",
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
    previousQuestion: "←",
    nextQuestion: "→",
    source: "📚 Fonti",
    openSource: "Apri fonte",
    questionCount: "Domande",
    loading: "Caricamento dei giorni...",
    noDays: "Nessun giorno trovato."
  }

};


/* =========================================
   GENEL AYARLAR
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
   TTS AYARLARI
========================================= */

let speechRate =
  Number(localStorage.getItem("ttsRate") || "1");

let speechPitch =
  Number(localStorage.getItem("ttsPitch") || "1");

let selectedVoiceName =
  localStorage.getItem("ttsVoice") || "";

let speechUtterance = null;

let selectedVoice = null;


/* =========================================
   TTS HIZ SEVİYELERİ
========================================= */

let slowLevel = 0;

let fastLevel = 0;

let veryFastLevel = 0;


/* =========================================
   TTS DURUMU

   ÖNEMLİ:

   Native pause/resume yerine kontrollü
   manuel pause/resume kullanıyoruz.

   Böylece Android Chrome'daki:

   pause()
   ↓
   speaking devam ediyor
   ↓
   cancel()
   ↓
   onend/onerror

   yarış problemi ortadan kalkıyor.
========================================= */

let speechPaused = false;

let speechIsSpeaking = false;

let speechManualPaused = false;

let speechCurrentText = "";

let speechCurrentCharIndex = 0;

let speechLastBoundaryIndex = 0;

let speechSessionId = 0;

let speechStarting = false;


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

  loadSavedVoice();

  renderHome();

}


/* =========================================
   TTS SESLERİNİ YÜKLE
========================================= */

function loadSavedVoice() {

  if (
    !("speechSynthesis" in window)
  ) {
    return;
  }

  const voices =
    window.speechSynthesis.getVoices();

  if (!voices.length) {
    return;
  }

  selectedVoice = null;

  if (selectedVoiceName) {

    selectedVoice =
      voices.find(
        voice =>
          voice.name === selectedVoiceName
      ) || null;

  }

  if (!selectedVoice) {

    const speechLang =
      getSpeechLanguage(
        selectedLang
      );

    selectedVoice =
      voices.find(
        voice =>
          voice.lang === speechLang
      ) ||
      voices.find(
        voice =>
          voice.lang &&
          voice.lang
            .toLowerCase()
            .startsWith(
              speechLang
                .split("-")[0]
                .toLowerCase()
            )
      ) ||
      null;

  }

}


if (
  "speechSynthesis" in window
) {

  window.speechSynthesis.onvoiceschanged =
    () => {

      loadSavedVoice();

      const select =
        document.querySelector(
          ".tts-voice-select"
        );

      if (select) {

        populateVoiceSelect(
          select
        );

      }

    };

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

          stopSpeech();

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

          stopSpeech();

          closeTTSSettings();

          selectedLang =
            language.key;

          localStorage.setItem(
            "selectedLang",
            selectedLang
          );

          document.documentElement.lang =
            selectedLang;

          selectedVoiceName =
            localStorage.getItem(
              "ttsVoice"
            ) || "";

          loadSavedVoice();

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

  closeTTSSettings();

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

  addQuestionLanguageSelector();

  renderTTSControls();


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
   TTS KONTROLLERİ
========================================= */

function renderTTSControls() {

  closeTTSSettings();

  const oldControls =
    document.querySelector(
      "#tts-controls"
    );

  if (oldControls) {
    oldControls.remove();
  }

  const selector =
    document.querySelector(
      "#language-selector"
    );

  if (!selector) {
    return;
  }

  const controls =
    document.createElement(
      "div"
    );

  controls.id =
    "tts-controls";

  controls.className =
    "tts-controls";


  /* YAVAŞLAT */

  const slowButton =
    document.createElement(
      "button"
    );

  slowButton.type =
    "button";

  slowButton.className =
    "tts-button tts-slow";

  slowButton.setAttribute(
    "aria-label",
    "Yavaşlat"
  );

  slowButton.title =
    "Yavaşlat";

  updateSlowButton(
    slowButton
  );

  slowButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      stopSpeech();

      slowLevel++;

      if (
        slowLevel > 3
      ) {
        slowLevel = 0;
      }

      const rates = [
        1,
        0.75,
        0.50,
        0.25
      ];

      speechRate =
        rates[slowLevel];

      fastLevel = 0;
      veryFastLevel = 0;

      saveTTSSettings();

      updateSlowButton(
        slowButton
      );

      updateFastButtons();

    }
  );


  /* OYNAT */

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
    "Oynat"
  );

  playButton.title =
    "Oynat";

  playButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      playSelectedText();

    }
  );


  /* PAUSE */

  const pauseButton =
    document.createElement(
      "button"
    );

  pauseButton.type =
    "button";

  pauseButton.className =
    "tts-button tts-pause";

  pauseButton.textContent =
    "⏸";

  pauseButton.setAttribute(
    "aria-label",
    "Duraklat"
  );

  pauseButton.title =
    "Duraklat";

  pauseButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      toggleSpeechPause();

    }
  );


  /* DURDUR */

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
    "Durdur"
  );

  stopButton.title =
    "Durdur";

  stopButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      stopSpeech();

    }
  );


  /* HIZLANDIR */

  const fastButton =
    document.createElement(
      "button"
    );

  fastButton.type =
    "button";

  fastButton.className =
    "tts-button tts-fast";

  fastButton.setAttribute(
    "aria-label",
    "Hızlandır"
  );

  fastButton.title =
    "Hızlandır";

  updateFastButton(
    fastButton
  );

  fastButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      stopSpeech();

      fastLevel++;

      if (
        fastLevel > 3
      ) {
        fastLevel = 0;
      }

      const rates = [
        1,
        1.25,
        1.50,
        1.75
      ];

      speechRate =
        rates[fastLevel];

      slowLevel = 0;
      veryFastLevel = 0;

      saveTTSSettings();

      updateFastButton(
        fastButton
      );

      updateSlowButton(
        slowButton
      );

      updateVeryFastButton(
        document.querySelector(
          ".tts-very-fast"
        )
      );

    }
  );


  /* ÇOK HIZLANDIR */

  const veryFastButton =
    document.createElement(
      "button"
    );

  veryFastButton.type =
    "button";

  veryFastButton.className =
    "tts-button tts-very-fast";

  veryFastButton.setAttribute(
    "aria-label",
    "Çok hızlandır"
  );

  veryFastButton.title =
    "Çok hızlandır";

  updateVeryFastButton(
    veryFastButton
  );

  veryFastButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      stopSpeech();

      veryFastLevel++;

      if (
        veryFastLevel > 3
      ) {
        veryFastLevel = 0;
      }

      const rates = [
        1,
        2,
        2.5,
        3
      ];

      speechRate =
        rates[veryFastLevel];

      slowLevel = 0;
      fastLevel = 0;

      saveTTSSettings();

      updateVeryFastButton(
        veryFastButton
      );

      updateSlowButton(
        slowButton
      );

      updateFastButton(
        document.querySelector(
          ".tts-fast"
        )
      );

    }
  );


  /* TTS AYARLARI */

  const settingsButton =
    document.createElement(
      "button"
    );

  settingsButton.type =
    "button";

  settingsButton.className =
    "tts-button tts-settings";

  settingsButton.textContent =
    "⚙️";

  settingsButton.setAttribute(
    "aria-label",
    "TTS ayarları"
  );

  settingsButton.title =
    "TTS ayarları";

  settingsButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      toggleTTSSettings();

    }
  );


  controls.appendChild(
    slowButton
  );

  controls.appendChild(
    playButton
  );

  controls.appendChild(
    pauseButton
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

  controls.appendChild(
    settingsButton
  );


  selector.insertAdjacentElement(
    "afterend",
    controls
  );

  updatePauseButton();

}


/* =========================================
   HIZ BUTONLARI
========================================= */

function updateSlowButton(
  button
) {

  if (!button) {
    return;
  }

  const icons = [
    "◀",
    "◀",
    "◀◀",
    "◀◀◀"
  ];

  button.textContent =
    icons[slowLevel];

}


function updateFastButton(
  button
) {

  if (!button) {
    return;
  }

  const icons = [
    "▶",
    "▶",
    "▶▶",
    "▶▶▶"
  ];

  button.textContent =
    icons[fastLevel];

}


function updateVeryFastButton(
  button
) {

  if (!button) {
    return;
  }

  const icons = [
    "▶",
    "▶",
    "▶▶",
    "▶▶▶"
  ];

  button.textContent =
    icons[veryFastLevel];

}


function updateFastButtons() {

  const fast =
    document.querySelector(
      ".tts-fast"
    );

  const veryFast =
    document.querySelector(
      ".tts-very-fast"
    );

  updateFastButton(
    fast
  );

  updateVeryFastButton(
    veryFast
  );

}


/* =========================================
   TTS AYARLARINI KAYDET
========================================= */

function saveTTSSettings() {

  localStorage.setItem(
    "ttsRate",
    String(speechRate)
  );

  localStorage.setItem(
    "ttsPitch",
    String(speechPitch)
  );

  if (selectedVoice) {

    localStorage.setItem(
      "ttsVoice",
      selectedVoice.name
    );

  }

}


/* =========================================
   TTS PANELİ
========================================= */

function closeTTSSettings() {

  const panel =
    document.querySelector(
      "#tts-settings-panel"
    );

  if (panel) {
    panel.remove();
  }

}


function toggleTTSSettings() {

  const existing =
    document.querySelector(
      "#tts-settings-panel"
    );

  if (existing) {

    existing.remove();

    return;

  }

  loadSavedVoice();

  const controls =
    document.querySelector(
      "#tts-controls"
    );

  if (!controls) {
    return;
  }

  const panel =
    document.createElement(
      "div"
    );

  panel.id =
    "tts-settings-panel";

  panel.className =
    "tts-settings-panel";


  const title =
    document.createElement(
      "strong"
    );

  title.textContent =
    "TTS Ayarları";

  title.className =
    "tts-settings-title";

  panel.appendChild(
    title
  );


  const voiceLabel =
    document.createElement(
      "label"
    );

  voiceLabel.textContent =
    "Ses";

  voiceLabel.className =
    "tts-setting-label";

  panel.appendChild(
    voiceLabel
  );


  const voiceSelect =
    document.createElement(
      "select"
    );

  voiceSelect.className =
    "tts-voice-select";

  voiceSelect.setAttribute(
    "aria-label",
    "TTS sesi seç"
  );

  populateVoiceSelect(
    voiceSelect
  );

  voiceSelect.addEventListener(
    "change",
    () => {

      const voices =
        window.speechSynthesis
          .getVoices();

      selectedVoice =
        voices.find(
          voice =>
            voice.name ===
            voiceSelect.value
        ) || null;

      selectedVoiceName =
        selectedVoice
          ? selectedVoice.name
          : "";

      saveTTSSettings();

    }
  );

  panel.appendChild(
    voiceSelect
  );


  const rateLabel =
    document.createElement(
      "label"
    );

  rateLabel.className =
    "tts-setting-label";

  rateLabel.textContent =
    `Hız: ${speechRate.toFixed(2)}x`;

  panel.appendChild(
    rateLabel
  );


  const rateSlider =
    document.createElement(
      "input"
    );

  rateSlider.type =
    "range";

  rateSlider.min =
    "0.25";

  rateSlider.max =
    "3";

  rateSlider.step =
    "0.05";

  rateSlider.value =
    String(speechRate);

  rateSlider.className =
    "tts-rate-slider";

  rateSlider.addEventListener(
    "input",
    () => {

      speechRate =
        Number(
          rateSlider.value
        );

      rateLabel.textContent =
        `Hız: ${speechRate.toFixed(2)}x`;

      updateSpeedLevelsFromRate();

      updateSpeedButtonsFromState();

      saveTTSSettings();

    }
  );

  panel.appendChild(
    rateSlider
  );


  const pitchLabel =
    document.createElement(
      "label"
    );

  pitchLabel.className =
    "tts-setting-label";

  pitchLabel.textContent =
    `Perde: ${speechPitch.toFixed(2)}`;

  panel.appendChild(
    pitchLabel
  );


  const pitchSlider =
    document.createElement(
      "input"
    );

  pitchSlider.type =
    "range";

  pitchSlider.min =
    "0.5";

  pitchSlider.max =
    "2";

  pitchSlider.step =
    "0.05";

  pitchSlider.value =
    String(speechPitch);

  pitchSlider.className =
    "tts-pitch-slider";

  pitchSlider.addEventListener(
    "input",
    () => {

      speechPitch =
        Number(
          pitchSlider.value
        );

      pitchLabel.textContent =
        `Perde: ${speechPitch.toFixed(2)}`;

      saveTTSSettings();

    }
  );

  panel.appendChild(
    pitchSlider
  );


  const testButton =
    document.createElement(
      "button"
    );

  testButton.type =
    "button";

  testButton.className =
    "tts-test-button";

  testButton.textContent =
    "🔊 Sesi test et";

  testButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      stopSpeech();

      speakText(
        getTTSTestText()
      );

    }
  );

  panel.appendChild(
    testButton
  );


  const reset =
    document.createElement(
      "button"
    );

  reset.type =
    "button";

  reset.className =
    "tts-reset-button";

  reset.textContent =
    "Ayarları sıfırla";

  reset.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      stopSpeech();

      speechRate = 1;

      speechPitch = 1;

      slowLevel = 0;

      fastLevel = 0;

      veryFastLevel = 0;

      selectedVoice = null;

      selectedVoiceName = "";

      localStorage.removeItem(
        "ttsRate"
      );

      localStorage.removeItem(
        "ttsPitch"
      );

      localStorage.removeItem(
        "ttsVoice"
      );

      loadSavedVoice();

      closeTTSSettings();

      renderTTSControls();

    }
  );

  panel.appendChild(
    reset
  );


  controls.insertAdjacentElement(
    "afterend",
    panel
  );

}


/* =========================================
   SES SEÇENEKLERİ
========================================= */

function populateVoiceSelect(
  select
) {

  if (!select) {
    return;
  }

  select.innerHTML =
    "";

  if (
    !("speechSynthesis" in window)
  ) {

    const option =
      document.createElement(
        "option"
      );

    option.textContent =
      "Ses desteği bulunamadı";

    option.value =
      "";

    select.appendChild(
      option
    );

    return;

  }

  const voices =
    window.speechSynthesis
      .getVoices();

  if (!voices.length) {

    const option =
      document.createElement(
        "option"
      );

    option.textContent =
      "Sesler yükleniyor...";

    option.value =
      "";

    select.appendChild(
      option
    );

    return;

  }

  const speechLang =
    getSpeechLanguage(
      selectedLang
    );

  const languageCode =
    speechLang
      .split("-")[0]
      .toLowerCase();

  const matchingVoices =
    voices.filter(
      voice =>
        voice.lang &&
        voice.lang
          .toLowerCase()
          .startsWith(
            languageCode
          )
    );

  const otherVoices =
    voices.filter(
      voice =>
        !matchingVoices.includes(
          voice
        )
    );

  [
    ...matchingVoices,
    ...otherVoices
  ].forEach(
    voice => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        voice.name;

      option.textContent =
        `${voice.name} (${voice.lang})`;

      if (
        selectedVoice &&
        selectedVoice.name ===
          voice.name
      ) {

        option.selected =
          true;

      }

      select.appendChild(
        option
      );

    }
  );

}


/* =========================================
   TEST METİNLERİ
========================================= */

function getTTSTestText() {

  const texts = {

    tr:
      "Bu, TTS ses ayarlarının testidir.",

    en:
      "This is a test of the text to speech voice settings.",

    de:
      "Dies ist ein Test der Text-to-Speech-Einstellungen.",

    ru:
      "Это проверка настроек синтеза речи.",

    ku:
      "Ev testekî ji bo mîhengên dengê ye.",

    ar:
      "هٰذَا اخْتِبَارٌ لِإِعْدَادَاتِ الصَّوْتِ.",

    tt:
      "Бу тавыш көйләүләрен тикшерү өчен тест.",

    fr:
      "Ceci est un test des paramètres de synthèse vocale.",

    es:
      "Esta es una prueba de los ajustes de voz.",

    nl:
      "Dit is een test van de steminstellingen.",

    it:
      "Questo è un test delle impostazioni vocali."

  };

  return (
    texts[selectedLang] ||
    texts.tr
  );

}


/* =========================================
   HIZ SEVİYELERİ
========================================= */

function updateSpeedLevelsFromRate() {

  slowLevel = 0;

  fastLevel = 0;

  veryFastLevel = 0;

  if (speechRate === 0.75) {

    slowLevel = 1;

  } else if (speechRate === 0.50) {

    slowLevel = 2;

  } else if (speechRate === 0.25) {

    slowLevel = 3;

  } else if (speechRate === 1.25) {

    fastLevel = 1;

  } else if (speechRate === 1.50) {

    fastLevel = 2;

  } else if (speechRate === 1.75) {

    fastLevel = 3;

  } else if (speechRate === 2) {

    veryFastLevel = 1;

  } else if (speechRate === 2.5) {

    veryFastLevel = 2;

  } else if (speechRate === 3) {

    veryFastLevel = 3;

  }

}


function updateSpeedButtonsFromState() {

  updateSlowButton(
    document.querySelector(
      ".tts-slow"
    )
  );

  updateFastButton(
    document.querySelector(
      ".tts-fast"
    )
  );

  updateVeryFastButton(
    document.querySelector(
      ".tts-very-fast"
    )
  );

}


/* =========================================
   TEXT TO SPEECH
   YENİ VE STABİL SİSTEM

   Pause:

   1. Son boundary konumu korunur.
   2. speechSynthesis.cancel() yapılır.
   3. Manuel pause aktif edilir.

   Resume:

   1. Aynı text alınır.
   2. Son bilinen karakter konumundan
      yeniden SpeechSynthesis başlatılır.

   Native pause/resume kullanılmaz.
========================================= */

function speakText(
  text,
  resumeFromIndex = 0
) {

  if (
    !("speechSynthesis" in window)
  ) {

    console.warn(
      "Tarayıcı TTS desteği bulunmuyor."
    );

    return;

  }

  if (!text) {
    return;
  }


  speechSessionId++;

  const sessionId =
    speechSessionId;


  window.speechSynthesis.cancel();


  speechCurrentText =
    text;

  speechCurrentCharIndex =
    Math.max(
      0,
      Math.min(
        Math.floor(
          resumeFromIndex
        ),
        text.length
      )
    );

  speechLastBoundaryIndex =
    speechCurrentCharIndex;

  speechPaused =
    false;

  speechManualPaused =
    false;

  speechIsSpeaking =
    false;

  speechStarting =
    true;


  loadSavedVoice();


  const remainingText =
    text.substring(
      speechCurrentCharIndex
    );


  if (!remainingText.trim()) {

    speechCurrentCharIndex =
      text.length;

    speechStarting =
      false;

    speechIsSpeaking =
      false;

    speechPaused =
      false;

    updatePauseButton();

    return;

  }


  const utterance =
    new SpeechSynthesisUtterance(
      remainingText
    );

  speechUtterance =
    utterance;


  utterance.rate =
    speechRate;

  utterance.pitch =
    speechPitch;

  utterance.volume =
    1;

  utterance.lang =
    getSpeechLanguage(
      selectedLang
    );


  if (selectedVoice) {

    utterance.voice =
      selectedVoice;

  }


  utterance.onstart =
    () => {

      if (
        sessionId !== speechSessionId
      ) {
        return;
      }

      speechStarting =
        false;

      speechIsSpeaking =
        true;

      speechPaused =
        false;

      speechManualPaused =
        false;

      updatePauseButton();

    };


  utterance.onboundary =
    event => {

      if (
        sessionId !== speechSessionId
      ) {
        return;
      }

      if (
        typeof event.charIndex !==
        "number"
      ) {
        return;
      }


      /*
       * event.charIndex, utterance'a verilen
       * remainingText içindeki konumdur.

       * Global text konumuna çeviriyoruz.
       */

      const globalIndex =
        speechCurrentCharIndex -
        remainingText.length +
        event.charIndex +
        remainingText.length;

      /*
       * Daha temiz hesap:
       *
       * başlangıç = speakText'e verilen
       * resumeFromIndex
       */

      const calculated =
        resumeFromIndex +
        event.charIndex;


      if (
        calculated >= 0 &&
        calculated <= text.length
      ) {

        speechCurrentCharIndex =
          calculated;

        speechLastBoundaryIndex =
          calculated;

      }

    };


  utterance.onend =
    () => {

      if (
        sessionId !== speechSessionId
      ) {
        return;
      }


      /*
       * Manuel pause sırasında cancel()
       * onend oluşturabilir.
       *
       * Bu durumda gerçek bitiş değildir.
       */

      if (
        speechManualPaused
      ) {

        return;

      }


      speechIsSpeaking =
        false;

      speechPaused =
        false;

      speechManualPaused =
        false;

      speechStarting =
        false;

      speechCurrentCharIndex =
        text.length;

      speechLastBoundaryIndex =
        text.length;

      speechUtterance =
        null;

      updatePauseButton();

    };


  utterance.onerror =
    event => {

      if (
        sessionId !== speechSessionId
      ) {
        return;
      }


      /*
       * Manuel pause sırasında
       * Chrome "canceled" veya "interrupted"
       * gönderebilir.
       */

      if (
        speechManualPaused
      ) {

        speechIsSpeaking =
          true;

        speechPaused =
          true;

        speechStarting =
          false;

        updatePauseButton();

        return;

      }


      if (
        event.error !== "canceled" &&
        event.error !== "interrupted"
      ) {

        console.warn(
          "TTS hatası:",
          event.error
        );

      }

      speechIsSpeaking =
        false;

      speechPaused =
        false;

      speechStarting =
        false;

      updatePauseButton();

    };


  window.speechSynthesis.speak(
    utterance
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

  if (
    !("speechSynthesis" in window)
  ) {
    return;
  }


  /*
   * Manuel pause durumundan devam.
   */

  if (
    speechManualPaused ||
    speechPaused
  ) {

    const text =
      speechCurrentText;

    const position =
      speechLastBoundaryIndex;


    if (
      text &&
      position < text.length
    ) {

      speechManualPaused =
        false;

      speechPaused =
        false;

      speakText(
        text,
        position
      );

      return;

    }

  }


  /*
   * Aktif konuşma varsa tekrar başlatmak
   * yerine mevcut konuşmayı bırakıyoruz.
   */

  if (
    window.speechSynthesis.speaking ||
    speechIsSpeaking
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
   PAUSE / DEVAM
   YENİ SİSTEM
========================================= */

function toggleSpeechPause() {

  if (
    !("speechSynthesis" in window)
  ) {
    return;
  }


  /*
   * PAUSE → RESUME
   */

  if (
    speechPaused ||
    speechManualPaused
  ) {

    const text =
      speechCurrentText;

    const position =
      speechLastBoundaryIndex;


    if (
      text &&
      position < text.length
    ) {

      speechPaused =
        false;

      speechManualPaused =
        false;

      speakText(
        text,
        position
      );

    }

    return;

  }


  /*
   * Konuşma yoksa hiçbir şey yapma.
   */

  if (
    !speechIsSpeaking &&
    !window.speechSynthesis.speaking
  ) {

    return;

  }


  /*
   * KRİTİK NOKTA:
   *
   * native pause() KULLANMIYORUZ.
   *
   * Android Chrome'daki en büyük problem
   * burada oluşuyordu.
   *
   * Bunun yerine:
   *
   * 1. Konumu kaydet
   * 2. Manuel pause işaretle
   * 3. cancel()
   *
   * onend/onerror artık bunu gerçek bitiş
   * olarak kabul etmiyor.
   */

  speechManualPaused =
    true;

  speechPaused =
    true;

  speechIsSpeaking =
    true;


  speechSessionId++;


  window.speechSynthesis.cancel();


  speechUtterance =
    null;


  updatePauseButton();

}


/* =========================================
   PAUSE BUTONUNU GÜNCELLE
========================================= */

function updatePauseButton() {

  const buttons =
    document.querySelectorAll(
      ".tts-pause"
    );

  buttons.forEach(
    button => {

      if (
        speechPaused ||
        speechManualPaused
      ) {

        button.textContent =
          "▶";

        button.setAttribute(
          "aria-label",
          "Devam et"
        );

        button.title =
          "Devam et";

      } else {

        button.textContent =
          "⏸";

        button.setAttribute(
          "aria-label",
          "Duraklat"
        );

        button.title =
          "Duraklat";

      }

    }
  );

}


/* =========================================
   DURDUR
========================================= */

function stopSpeech() {

  /*
   * Session invalidasyonu.
   *
   * Eski utterance eventleri artık
   * yeni konuşmaya dokunamaz.
   */

  speechSessionId++;


  speechManualPaused =
    false;

  speechPaused =
    false;

  speechIsSpeaking =
    false;

  speechStarting =
    false;


  if (
    "speechSynthesis" in window
  ) {

    window.speechSynthesis.cancel();

  }


  speechUtterance =
    null;

  speechCurrentText =
    "";

  speechCurrentCharIndex =
    0;

  speechLastBoundaryIndex =
    0;


  updatePauseButton();

}


/* =========================================
   HIZ DEĞİŞTİR
========================================= */

function setSpeechRate(
  rate
) {

  speechRate =
    rate;

  saveTTSSettings();


  if (
    speechIsSpeaking
  ) {

    const text =
      speechCurrentText;

    const position =
      speechLastBoundaryIndex;


    stopSpeech();


    if (text) {

      speakText(
        text,
        position
      );

    }

  }

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


  const mainRow =
    document.createElement(
      "div"
    );

  mainRow.className =
    "navigation-main-row";


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

      stopSpeech();

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
    currentDayIndex >=
      days.length - 1 &&
    currentQuestionIndex >=
      days[currentDayIndex]
        .questions.length - 1;


  nextQuestion.onclick =
    () => {

      stopSpeech();

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

      stopSpeech();

      renderHome();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    };


  homeGroup.appendChild(
    home
  );


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

      stopSpeech();

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

      stopSpeech();

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
    !Number.isInteger(
      questionNumber
    )
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

      stopSpeech();

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
    !Number.isInteger(
      dayNumber
    )
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


  stopSpeech();

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
