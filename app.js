/* ========================================
   BİR MÜSLÜMANIN YOL HARİTASI
   11 DİL
   APP.JS

   TTS:
   - Parçalı konuşma sistemi
   - Pause / Devam
   - Durdur
   - Yavaşlat
   - Hızlandır
   - Çok hızlandır
   - TTS ayarları

   NOT:
   Sitenin diğer sistemlerine dokunulmamıştır.
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
    key: "nl",
    flag: "🇳🇱",
    name: "Nederlands"
  },

  {
    key: "fr",
    flag: "🇫🇷",
    name: "Français"
  },

  {
    key: "ru",
    flag: "🇷🇺",
    name: "Русский"
  },

  {
    key: "tt",
    flag: "🇭🇺",
    name: "Tatarca"
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
    key: "es",
    flag: "🇪🇸",
    name: "Español"
  },

  {
    key: "it",
    flag: "🇮🇹",
    name: "Italiano"
  },

  {
    key: "pt",
    flag: "🇵🇹",
    name: "Português"
  },

  {
    key: "ko",
    flag: "🇰🇷",
    name: "한국어"
  },

  {
    key: "vi",
    flag: "🇻🇳",
    name: "Tiếng Việt"
  },

  {
    key: "ja",
    flag: "🇯🇵",
    name: "日本語"
  },

  {
    key: "zh",
    flag: "🇨🇳",
    name: "中文"
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
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
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
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
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
    title: "خُطَّةُ طَرِيقِ الْمُسْلِمِ",
    subtitle: "تَعَلَّمِ الْإِسْلَامَ خُطْوَةً خُطْوَةً",
    days: "الأَيَّامُ",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 الْمَصَادِرُ",
    openSource: "فَتْحُ الْمَصْدَرِ",
    questionCount: "أَسْئِلَة",
    loading: "جَارٍ تَحْمِيلُ الأَيَّامِ...",
    noDays: "لَمْ يَتِمَّ الْعُثُورُ عَلَى أَيَّامٍ بَعْدُ."
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
    subtitle: "Apprendre l'islam étape par étape",
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
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
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
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Fonti",
    openSource: "Apri fonte",
    questionCount: "Domande",
    loading: "Caricamento dei giorni...",
    noDays: "Nessun giorno trovato."
  },

  pt: {
    title: "O Roteiro de um Muçulmano",
    subtitle: "Aprenda o Islão passo a passo",
    days: "Dias",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Fontes",
    openSource: "Abrir fonte",
    questionCount: "Perguntas",
    loading: "A carregar os dias...",
    noDays: "Ainda não foram encontrados dias."
  },

  ko: {
    title: "무슬림의 길잡이",
    subtitle: "이슬람을 한 걸음씩 배우다",
    days: "일차",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 출처",
    openSource: "출처 열기",
    questionCount: "질문",
    loading: "일차를 불러오는 중...",
    noDays: "아직 일차가 없습니다."
  },

  vi: {
    title: "Lộ Trình Của Người Muslim",
    subtitle: "Học Islam từng bước một",
    days: "Ngày",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 Nguồn",
    openSource: "Mở nguồn",
    questionCount: "Câu hỏi",
    loading: "Đang tải các ngày...",
    noDays: "Chưa tìm thấy ngày nào."
  },

  ja: {
    title: "ムスリムの道しるべ",
    subtitle: "イスラームを一歩ずつ学ぶ",
    days: "日",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 出典",
    openSource: "出典を開く",
    questionCount: "質問",
    loading: "読み込み中...",
    noDays: "まだ日がありません。"
  },

  zh: {
    title: "穆斯林的路线图",
    subtitle: "循序渐进学习伊斯兰教",
    days: "天数",
    previousQuestion: "←",
    nextQuestion: "→",
    home: "🕋",
    previousDay: "←",
    nextDay: "→",
    source: "📚 来源",
    openSource: "打开来源",
    questionCount: "问题",
    loading: "正在加载天数...",
    noDays: "尚未找到任何天数。"
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
========================================= */

let speechPaused = false;

let speechIsSpeaking = false;

let speechManualPaused = false;

let speechCurrentText = "";


/*
 * PARÇALI TTS SİSTEMİ
 */

let speechChunks = [];

let speechChunkIndex = 0;

let speechChunkSession = 0;


/*
 * Pause sırasında mevcut parçanın
 * SpeechSynthesis tarafından gerçekten
 * pause/resume edilmesi hedeflenir.
 */

let speechChunkWordCount = 7;

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

      changeSpeechRate(
        rates[slowLevel]
      );

      fastLevel = 0;
      veryFastLevel = 0;

      saveTTSSettings();

      updateSlowButton(
        slowButton
      );

      updateFastButtons();

      updatePlayRateDisplay();

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

  const playIcon =
    document.createElement(
      "span"
    );

  playIcon.className =
    "tts-play-icon";

  playIcon.textContent =
    "▶";

  const playRate =
    document.createElement(
      "span"
    );

  playRate.className =
    "tts-play-rate hidden";

  playRate.textContent =
    "1.00x";

  playButton.appendChild(
    playIcon
  );

  playButton.appendChild(
    playRate
  );

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

      fastLevel++;

      if (
        fastLevel > 7
      ) {
        fastLevel = 0;
      }

      const rates = [
        1,
        1.25,
        1.50,
        1.75,
        2.00,
        2.50,
        2.75,
        3.00
      ];

      changeSpeechRate(
        rates[fastLevel]
      );

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

      updatePlayRateDisplay();

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

      changeSpeechRate(
        rates[veryFastLevel]
      );

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

      updatePlayRateDisplay();

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
    fastButton
  );

  controls.appendChild(
    pauseButton
  );

  controls.appendChild(
    stopButton
  );

  controls.appendChild(
    settingsButton
  );


  selector.insertAdjacentElement(
    "afterend",
    controls
  );

  updatePauseButton();

  updatePlayRateDisplay();

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
      "هٰذَا اخْتِبَارٌ لِإِعْدَادَاتِ الصَّوْتِ.",

    tt:
      "Бу тавыш көйләүләрен тикшерү өчен тест.",

    fr:
      "Ceci est un test des paramètres de synthèse vocale.",

    es:
      "Esta es una prueba de los ajustes de voz.",

    nl:
      "Dit is een test van de steminstellingen.",

    it:
      "Questo è un test delle impostazioni vocali.",

    pt:
      "Este é um teste das definições de voz.",

    ko:
      "이것은 음성 설정 테스트입니다.",

    vi:
      "Đây là bài kiểm tra cài đặt giọng nói.",

    ja:
      "これは音声設定のテストです。",

    zh:
      "这是语音设置的测试。"

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

  } else if (speechRate === 2.00) {

    fastLevel = 4;

  } else if (speechRate === 2.50) {

    fastLevel = 5;

  } else if (speechRate === 2.75) {

    fastLevel = 6;

  } else if (speechRate === 3.00) {

    fastLevel = 7;

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

  updatePlayRateDisplay();

}


/* =========================================
   OYNAT BUTONUNDAKİ HIZ ETİKETİ
========================================= */

function updatePlayRateDisplay() {

  const rateLabel =
    document.querySelector(
      ".tts-play-rate"
    );

  if (!rateLabel) {
    return;
  }

  if (speechRate === 1) {

    rateLabel.classList.add(
      "hidden"
    );

    rateLabel.textContent =
      "1.00x";

  } else {

    rateLabel.classList.remove(
      "hidden"
    );

    rateLabel.textContent =
      `${speechRate.toFixed(2)}x`;

  }

}


/* =========================================
   TTS METNİ PARÇALAMA
========================================= */

function splitSpeechText(
  text
) {

  if (!text) {
    return [];
  }

  const words =
    text
      .trim()
      .split(/\s+/)
      .filter(
        word =>
          word.length > 0
      );

  const chunks = [];

  let currentChunk = [];

  words.forEach(
    word => {

      currentChunk.push(
        word
      );

      if (
        currentChunk.length >=
        speechChunkWordCount
      ) {

        chunks.push(
          currentChunk.join(" ")
        );

        currentChunk = [];

      }

    }
  );


  if (
    currentChunk.length
  ) {

    chunks.push(
      currentChunk.join(" ")
    );

  }


  return chunks;

}


/* =========================================
   PARÇALI TTS BAŞLAT
========================================= */

function speakText(
  text,
  resumeFromChunk = 0
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


  /*
   * Yeni TTS oturumu.
   */

  speechChunkSession++;

  const sessionId =
    speechChunkSession;


  /*
   * Buradaki cancel() sadece yeni bir
   * konuşma başlatılırken eski konuşmayı
   * temizlemek içindir.
   *
   * PAUSE için kullanılmaz.
   */

  window.speechSynthesis.cancel();


  /*
   * Metin değiştiyse parçaları yeniden
   * oluştur.
   */

  if (
    speechCurrentText !== text ||
    !speechChunks.length
  ) {

    speechCurrentText =
      text;

    speechChunks =
      splitSpeechText(
        text
      );

  }


  if (
    !speechChunks.length
  ) {
    return;
  }


  speechChunkIndex =
    Math.max(
      0,
      Math.min(
        Math.floor(
          resumeFromChunk
        ),
        speechChunks.length
      )
    );


  if (
    speechChunkIndex >=
    speechChunks.length
  ) {

    speechChunkIndex =
      speechChunks.length - 1;

  }


  speechPaused =
    false;

  speechManualPaused =
    false;

  speechIsSpeaking =
    false;

  speechStarting =
    true;


  loadSavedVoice();


  speakCurrentChunk(
    sessionId
  );

}


/* =========================================
   MEVCUT PARÇAYI OKU
========================================= */

function speakCurrentChunk(
  sessionId = speechChunkSession
) {

  if (
    !("speechSynthesis" in window)
  ) {
    return;
  }

  if (
    sessionId !== speechChunkSession
  ) {
    return;
  }

  if (
    speechPaused ||
    speechManualPaused
  ) {

    return;

  }


  if (
    !speechChunks.length
  ) {

    speechIsSpeaking =
      false;

    speechStarting =
      false;

    updatePauseButton();

    return;

  }


  if (
    speechChunkIndex >=
    speechChunks.length
  ) {

    speechIsSpeaking =
      false;

    speechStarting =
      false;

    speechPaused =
      false;

    speechManualPaused =
      false;

    speechUtterance =
      null;

    updatePauseButton();

    return;

  }


  const chunk =
    speechChunks[
      speechChunkIndex
    ];


  if (!chunk) {

    speechChunkIndex++;

    speakCurrentChunk(
      sessionId
    );

    return;

  }


  speechStarting =
    true;

  speechIsSpeaking =
    false;


  const utterance =
    new SpeechSynthesisUtterance(
      chunk
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
        sessionId !==
        speechChunkSession
      ) {
        return;
      }

      speechStarting =
        false;

      speechIsSpeaking =
        true;

      /*
       * Burada browser gerçekten paused
       * durumda ise durumu bozma.
       */

      if (
        !window.speechSynthesis.paused
      ) {

        speechPaused =
          false;

        speechManualPaused =
          false;

      }

      updatePauseButton();

    };


  utterance.onend =
    () => {

      if (
        sessionId !==
        speechChunkSession
      ) {
        return;
      }


      /*
       * Pause sırasında onend normalde
       * çağrılmamalıdır.
       *
       * Yine de bazı Android sürümlerinde
       * event gelebilir.
       */

      if (
        speechManualPaused ||
        speechPaused ||
        window.speechSynthesis.paused
      ) {

        speechIsSpeaking =
          false;

        speechStarting =
          false;

        updatePauseButton();

        return;

      }


      speechIsSpeaking =
        false;

      speechStarting =
        false;


      /*
       * Bir sonraki küçük parçaya geç.
       */

      speechChunkIndex++;


      if (
        speechChunkIndex >=
        speechChunks.length
      ) {

        speechPaused =
          false;

        speechManualPaused =
          false;

        speechUtterance =
          null;

        updatePauseButton();

        return;

      }


      /*
       * Android Chrome'da arka arkaya
       * speak() çağrısında sorun oluşmaması
       * için küçük gecikme.
       */

      setTimeout(
        () => {

          if (
            sessionId !==
            speechChunkSession
          ) {
            return;
          }

          if (
            speechPaused ||
            speechManualPaused
          ) {
            return;
          }

          speakCurrentChunk(
            sessionId
          );

        },
        20
      );

    };


  utterance.onerror =
    event => {

      if (
        sessionId !==
        speechChunkSession
      ) {
        return;
      }


      /*
       * Pause sırasında Android bazen
       * canceled/interrupted gönderebilir.
       *
       * Bu durumda konuşmayı bitmiş
       * kabul etmiyoruz.
       */

      if (
        speechManualPaused ||
        speechPaused ||
        window.speechSynthesis.paused
      ) {

        speechIsSpeaking =
          false;

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

      speechStarting =
        false;

      speechUtterance =
        null;

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
    it: "it-IT",
    pt: "pt-PT",
    ko: "ko-KR",
    vi: "vi-VN",
    ja: "ja-JP",
    zh: "zh-CN"

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
   * Eğer tarayıcı gerçekten pause
   * durumundaysa PLAY de devam ettirebilir.
   *
   * Ancak asıl devam işlemi PAUSE
   * butonundaki ▶ ile yapılır.
   */

  if (
    speechPaused ||
    speechManualPaused
  ) {

    toggleSpeechPause();

    return;

  }


  /*
   * Aktif konuşma varsa tekrar başlatma.
   */

  if (
    window.speechSynthesis.speaking ||
    speechIsSpeaking ||
    speechStarting
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


  /*
   * Yeni Play başlangıcı:
   *
   * Normal hız = 1.0x
   */

  speechRate =
    1;

  slowLevel =
    0;

  fastLevel =
    0;

  veryFastLevel =
    0;

  saveTTSSettings();

  updateSpeedButtonsFromState();


  speechCurrentText =
    text;

  speechChunks =
    splitSpeechText(
      text
    );

  speechChunkIndex =
    0;


  speakText(
    text,
    0
  );

}


/* =========================================
   PAUSE / DEVAM
   GERÇEK SPEECH SYNTHESIS PAUSE / RESUME
========================================= */

function toggleSpeechPause() {

  if (
    !("speechSynthesis" in window)
  ) {
    return;
  }


  /* =========================================
     DURAKLATILMIŞSA → DEVAM
  ========================================= */

  if (
    speechPaused ||
    speechManualPaused
  ) {

    if (
      !speechCurrentText ||
      !speechChunks.length ||
      speechChunkIndex >=
        speechChunks.length
    ) {

      return;

    }


    /*
     * Pause durumunu kaldır.
     */

    speechPaused =
      false;

    speechManualPaused =
      false;

    speechIsSpeaking =
      true;

    speechStarting =
      false;

    updatePauseButton();


    /*
     * ÖNEMLİ - ANDROID CHROME HATASI:
     *
     * window.speechSynthesis.resume()
     * Android Chrome'da güvenilir
     * değil: bazen hiçbir ses
     * üretmeden sessizce başarısız
     * oluyor. Bu yüzden native
     * resume() KULLANILMIYOR.
     *
     * Bunun yerine mevcut parçayı
     * (speechChunkIndex zaten
     * korunuyor) temiz bir speak()
     * çağrısıyla yeniden başlatıyoruz.
     * Native pause() de aynı sebeple
     * aşağıda kullanılmıyor, bu
     * yüzden burada temizlenecek
     * askıda bir şey yok.
     */

    speakCurrentChunk(
      speechChunkSession
    );

    return;

  }


  /* =========================================
     KONUŞMA YOKSA
  ========================================= */

  if (
    !speechIsSpeaking &&
    !speechStarting &&
    !window.speechSynthesis.speaking
  ) {

    return;

  }


  /* =========================================
     PAUSE
  ========================================= */

  speechPaused =
    true;

  speechManualPaused =
    true;


  /*
   * ÖNEMLİ - ANDROID CHROME HATASI:
   *
   * window.speechSynthesis.pause()
   * Android Chrome'da bir kez
   * çağrıldığında motoru kalıcı
   * olarak bozabiliyor: bundan sonra
   * resume() hatta cancel() + yeni
   * speak() bile ses üretmiyor,
   * sayfa yenilenene kadar.
   *
   * Bu yüzden native pause()
   * HİÇ KULLANILMIYOR. Bunun yerine
   * mevcut konuşma cancel() ile
   * durduruluyor; hangi parçada
   * kaldığımız (speechChunkIndex)
   * zaten korunuyor, devam ederken
   * o parçadan yeniden başlıyoruz.
   */

  try {

    window.speechSynthesis.cancel();

  } catch (error) {

    console.warn(
      "TTS durdurma hatası:",
      error
    );

  }


  speechIsSpeaking =
    false;

  speechStarting =
    false;


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
   * STOP:
   * - konuşmayı keser
   * - metni siler
   * - parçaları siler
   * - konumu sıfırlar
   * - pause durumunu kaldırır
   */

  speechChunkSession++;


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

  speechChunks =
    [];

  speechChunkIndex =
    0;


  updatePauseButton();

}


/* =========================================
   HIZ DEĞİŞTİR
   PARÇALI TTS İLE UYUMLU
========================================= */

function changeSpeechRate(
  rate
) {

  const wasSpeaking =
    speechIsSpeaking ||
    speechStarting ||
    window.speechSynthesis.speaking;

  const wasPaused =
    speechPaused ||
    speechManualPaused;


  /*
   * Yeni hız kaydedilir.
   */

  speechRate =
    rate;

  saveTTSSettings();


  /*
   * Pause durumundaysa:
   *
   * Konuşmayı başlatmıyoruz.
   * Yeni hız kaydedilir.
   */

  if (wasPaused) {

    updatePauseButton();

    return;

  }


  /*
   * Konuşma aktif değilse sadece hız değişir.
   */

  if (
    !wasSpeaking ||
    !speechCurrentText ||
    !speechChunks.length
  ) {

    return;

  }


  /*
   * Aktif konuşmada:
   *
   * Mevcut küçük parça yeniden başlatılır.
   */

  const currentChunk =
    speechChunkIndex;


  speechChunkSession++;

  const sessionId =
    speechChunkSession;


  window.speechSynthesis.cancel();


  speechUtterance =
    null;

  speechIsSpeaking =
    false;

  speechStarting =
    false;

  speechPaused =
    false;

  speechManualPaused =
    false;


  setTimeout(
    () => {

      if (
        sessionId !==
        speechChunkSession
      ) {
        return;
      }

      if (
        !speechChunks.length
      ) {
        return;
      }

      if (
        currentChunk >=
        speechChunks.length
      ) {
        return;
      }

      speechChunkIndex =
        currentChunk;

      speakCurrentChunk(
        sessionId
      );

    },
    30
  );

}


/* =========================================
   TTS AYARLARINDAN HIZ DEĞİŞTİRME
========================================= */

function setSpeechRate(
  rate
) {

  changeSpeechRate(
    rate
  );

  updateSpeedLevelsFromRate();

  updateSpeedButtonsFromState();

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
      /(?:kur['']an|qur['']?an|coran|corán|коран|коръән)[^0-9]*(\d+)[\s:.-]+(\d+)(?:[-–](\d+))?/i
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
