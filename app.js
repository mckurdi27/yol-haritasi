/* =========================================
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
