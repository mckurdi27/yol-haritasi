/* =========================================
   BİR MÜSLÜMANIN YOL HARİTASI
   APP.JS
   11 DİL
========================================= */

"use strict";

/* =========================================
   SABİT AYARLAR
========================================= */

const TOTAL_DAYS = 30;
const QUESTIONS_PER_DAY = 19;
const TOTAL_QUESTIONS = 570;

/*
  DİL SIRASI KESİNDİR.
  BURAYI DEĞİŞTİRME.
*/
const LANGUAGES = [
  {
    code: "tr",
    name: "Türkçe",
    flag: "🇹🇷"
  },
  {
    code: "en",
    name: "English",
    flag: "🇬🇧"
  },
  {
    code: "de",
    name: "Deutsch",
    flag: "🇩🇪"
  },
  {
    code: "ru",
    name: "Русский",
    flag: "🇷🇺"
  },
  {
    code: "ku",
    name: "Kurmancî",
    flag: "🇬🇭"
  },
  {
    code: "ar",
    name: "العربية",
    flag: "🇸🇦"
  },
  {
    code: "tt",
    name: "Tatarca",
    flag: "🇭🇺"
  },
  {
    code: "fr",
    name: "Français",
    flag: "🇫🇷"
  },
  {
    code: "es",
    name: "Español",
    flag: "🇪🇸"
  },
  {
    code: "nl",
    name: "Nederlands / Flemenkçe",
    flag: "🇳🇱"
  },
  {
    code: "it",
    name: "Italiano",
    flag: "🇮🇹"
  }
];


/* =========================================
   UYGULAMA DURUMU
========================================= */

let daysData = [];

let currentDay = 1;

let currentQuestion = 1;

let selectedLanguage = "tr";


/* =========================================
   DOM
========================================= */

const homePage =
  document.getElementById("home-page");

const questionPage =
  document.getElementById("question-page");

const homeLanguageSelector =
  document.getElementById("home-language-selector");

const daysList =
  document.getElementById("days-list");

const topNavigation =
  document.getElementById("top-navigation");

const bottomNavigation =
  document.getElementById("bottom-navigation");

const questionContent =
  document.getElementById("question-content");


/* =========================================
   BAŞLAT
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);


async function init() {

  createLanguageSelector();

  await loadDays();

  handleInitialUrl();

}


/* =========================================
   DİL SEÇİCİ
========================================= */

function createLanguageSelector() {

  if (!homeLanguageSelector) {
    return;
  }

  homeLanguageSelector.innerHTML = "";

  LANGUAGES.forEach(
    language => {

      const button =
        document.createElement("button");

      button.type = "button";

      button.className =
        "language-button";

      button.dataset.language =
        language.code;

      button.textContent =
        language.flag;

      button.title =
        language.name;

      button.setAttribute(
        "aria-label",
        language.name
      );

      if (
        language.code ===
        selectedLanguage
      ) {

        button.classList.add(
          "active"
        );

      }

      button.addEventListener(
        "click",
        () => {

          selectedLanguage =
            language.code;

          updateLanguageButtons();

          /*
            Ana sayfada dil seçimi yapıldığında
            sayfa yeniden yüklenmez.
          */

          if (
            !questionPage ||
            questionPage.style.display ===
            "none"
          ) {

            renderDays();

          } else {

            renderQuestionPage();

          }

        }
      );

      homeLanguageSelector.appendChild(
        button
      );

    }
  );

}


/* =========================================
   DİL BUTONLARINI GÜNCELLE
========================================= */

function updateLanguageButtons() {

  if (!homeLanguageSelector) {
    return;
  }

  const buttons =
    homeLanguageSelector.querySelectorAll(
      ".language-button"
    );

  buttons.forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.language ===
      selectedLanguage
    );

  });

}


/* =========================================
   GÜNLERİ YÜKLE
========================================= */

async function loadDays() {

  try {

    /*
      Önce master days.json denenir.
    */

    let response =
      await fetch(
        "data/days.json",
        {
          cache: "no-cache"
        }
      );

    if (response.ok) {

      const masterData =
        await response.json();

      if (
        Array.isArray(masterData.days)
      ) {

        daysData =
          masterData.days;

      } else if (
        Array.isArray(masterData)
      ) {

        daysData =
          masterData;

      }

    }

    /*
      Master dosya yoksa
      30 günlük yapı oluşturulur.
    */

    if (
      daysData.length === 0
    ) {

      daysData =
        createDefaultDays();

    }

    renderDays();

  } catch (error) {

    console.error(
      "Günler yüklenemedi:",
      error
    );

    /*
      days.json bulunamazsa
      varsayılan 30 gün oluşturulur.
    */

    daysData =
      createDefaultDays();

    renderDays();

  }

}


/* =========================================
   VARSAYILAN GÜNLER
========================================= */

function createDefaultDays() {

  const result = [];

  for (
    let day = 1;
    day <= TOTAL_DAYS;
    day++
  ) {

    const start =
      ((day - 1) *
        QUESTIONS_PER_DAY) + 1;

    const end =
      day *
      QUESTIONS_PER_DAY;

    result.push({

      day: day,

      file:
        `data/day-${String(day).padStart(2, "0")}.json`,

      dayTitle:
        `${day}. Gün`,

      daySubtitle:
        `${start}–${end}`,

      questionStart:
        start,

      questionEnd:
        end,

      questionRange:
        `${start}–${end}`

    });

  }

  return result;

}


/* =========================================
   GÜNLERİ GÖSTER
========================================= */

function renderDays() {

  if (!daysList) {
    return;
  }

  daysList.innerHTML = "";

  daysData.forEach(
    day => {

      const card =
        document.createElement("button");

      card.type = "button";

      card.className =
        "day-card";

      card.dataset.day =
        day.day;

      const title =
        document.createElement("div");

      title.className =
        "day-card-title";

      title.textContent =
        getDayTitle(day);

      const subtitle =
        document.createElement("div");

      subtitle.className =
        "day-card-subtitle";

      subtitle.textContent =
        getDaySubtitle(day);

      card.appendChild(title);

      card.appendChild(subtitle);

      card.addEventListener(
        "click",
        () => {

          openDay(
            Number(day.day)
          );

        }
      );

      daysList.appendChild(card);

    }
  );

}


/* =========================================
   GÜN BAŞLIĞI
========================================= */

function getDayTitle(day) {

  if (
    day.dayTitle &&
    typeof day.dayTitle === "string"
  ) {

    return day.dayTitle;

  }

  return `${day.day}. Gün`;

}


/* =========================================
   GÜN ALT BAŞLIĞI
========================================= */

function getDaySubtitle(day) {

  if (
    day.daySubtitle &&
    typeof day.daySubtitle === "string"
  ) {

    return day.daySubtitle;

  }

  if (
    day.questionRange
  ) {

    return `Sorular: ${day.questionRange}`;

  }

  return "";

}


/* =========================================
   GÜN AÇ
========================================= */

async function openDay(dayNumber) {

  if (
    dayNumber < 1 ||
    dayNumber > TOTAL_DAYS
  ) {

    return;

  }

  currentDay =
    dayNumber;

  const dayInfo =
    getDayInfo(currentDay);

  currentQuestion =
    dayInfo &&
    Number.isFinite(
      Number(dayInfo.questionStart)
    )
      ? Number(dayInfo.questionStart)
      : ((currentDay - 1) *
          QUESTIONS_PER_DAY) + 1;

  showQuestionPage();

  await renderQuestionPage();

}


/* =========================================
   SORU SAYFASINI GÖSTER
========================================= */

function showQuestionPage() {

  if (homePage) {

    homePage.style.display =
      "none";

  }

  if (questionPage) {

    questionPage.style.display =
      "block";

  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================
   ANA SAYFAYA DÖN
========================================= */

function goHome() {

  if (questionPage) {

    questionPage.style.display =
      "none";

  }

  if (homePage) {

    homePage.style.display =
      "block";

  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================
   SORU SAYFASINI RENDER
========================================= */

async function renderQuestionPage() {

  if (!questionContent) {
    return;
  }

  const dayInfo =
    getDayInfo(currentDay);

  renderNavigation();

  questionContent.innerHTML =
    `<div class="loading">
       Yükleniyor...
     </div>`;

  let data = null;

  try {

    data =
      await loadDayFile(
        dayInfo
      );

  } catch (error) {

    console.error(
      "Gün dosyası yüklenemedi:",
      error
    );

  }

  if (!data) {

    questionContent.innerHTML =
      `
      <div class="question-card">

        <div class="loading">
          Bu günün içerik dosyası yüklenemedi.
        </div>

      </div>
      `;

    renderNavigation();

    return;

  }

  renderQuestion(
    data,
    dayInfo
  );

  renderNavigation();

}


/* =========================================
   GÜN DOSYASI YÜKLE
========================================= */

async function loadDayFile(dayInfo) {

  if (!dayInfo) {
    return null;
  }

  const possibleFiles = [];

  if (dayInfo.file) {

    possibleFiles.push(
      dayInfo.file
    );

  }

  possibleFiles.push(
    `data/day-${String(currentDay).padStart(2, "0")}.json`
  );

  for (
    const file of possibleFiles
  ) {

    try {

      const response =
        await fetch(
          file,
          {
            cache: "no-cache"
          }
        );

      if (
        !response.ok
      ) {

        continue;

      }

      return await response.json();

    } catch (error) {

      console.warn(
        `Dosya okunamadı: ${file}`,
        error
      );

    }

  }

  return null;

}


/* =========================================
   SORU RENDER
========================================= */

function renderQuestion(
  data,
  dayInfo
) {

  if (!questionContent) {
    return;
  }

  const question =
    findQuestion(
      data,
      currentQuestion,
      dayInfo
    );

  if (!question) {

    questionContent.innerHTML =
      `
      <div class="question-card">

        <div class="loading">
          Soru bulunamadı.
        </div>

      </div>
      `;

    return;

  }

  const dayTitle =
    getDayTitle(dayInfo);

  const questionCard =
    document.createElement("article");

  questionCard.className =
    "question-card";

  const title =
    document.createElement("h1");

  title.className =
    "question-day-title";

  title.textContent =
    `${dayTitle}`;

  questionContent.appendChild(
    title
  );

  const card =
    document.createElement("div");

  card.className =
    "question-card";

  /*
    Sabit 11 dil sırası.
  */

  LANGUAGES.forEach(
    language => {

      const block =
        createLanguageBlock(
          question,
          language
        );

      if (block) {

        card.appendChild(
          block
        );

      }

    }
  );

  /*
    Kaynaklar
  */

  const sources =
    getSources(question);

  if (
    sources.length > 0
  ) {

    card.appendChild(
      createSources(
        sources
      )
    );

  }

  questionContent.innerHTML = "";

  questionContent.appendChild(
    title
  );

  questionContent.appendChild(
    card
  );

}


/* =========================================
   SORUYU BUL
========================================= */

function findQuestion(
  data,
  questionNumber,
  dayInfo
) {

  let questions = [];

  if (
    Array.isArray(data)
  ) {

    questions = data;

  } else if (
    data &&
    Array.isArray(data.questions)
  ) {

    questions =
      data.questions;

  } else if (
    data &&
    Array.isArray(data.items)
  ) {

    questions =
      data.items;

  }

  if (
    questions.length === 0
  ) {

    return null;

  }

  /*
    Önce global soru numarasına göre ara.
  */

  let question =
    questions.find(
      item =>
        Number(
          item.questionNumber ??
          item.number ??
          item.id
        ) ===
        Number(questionNumber)
    );

  if (question) {
    return question;
  }

  /*
    Günlük dosyada 1–19 tutuluyorsa
    global numaradan günlük index hesaplanır.
  */

  const start =
    dayInfo &&
    Number.isFinite(
      Number(dayInfo.questionStart)
    )
      ? Number(dayInfo.questionStart)
      : ((currentDay - 1) *
          QUESTIONS_PER_DAY) + 1;

  const index =
    Number(questionNumber) -
    start;

  if (
    index >= 0 &&
    index < questions.length
  ) {

    return questions[index];

  }

  /*
    Son çare:
    soru numarasını doğrudan index olarak kullan.
  */

  return questions[
    Number(questionNumber) - 1
  ] || null;

}


/* =========================================
   DİL BLOĞU OLUŞTUR
========================================= */

function createLanguageBlock(
  question,
  language
) {

  const content =
    getLanguageContent(
      question,
      language.code
    );

  if (!content) {
    return null;
  }

  const block =
    document.createElement("div");

  block.className =
    "language-block";

  /*
    Seçilen dil vurgulanır.
  */

  if (
    language.code ===
    selectedLanguage
  ) {

    block.classList.add(
      "selected-language"
    );

  }

  /*
    Arapça RTL.
  */

  if (
    language.code === "ar"
  ) {

    block.classList.add(
      "arabic-language"
    );

    block.setAttribute(
      "dir",
      "rtl"
    );

  }

  const questionLine =
    document.createElement("div");

  questionLine.className =
    "question-line";

  questionLine.textContent =
    getQuestionText(
      content
    );

  const answerLine =
    document.createElement("div");

  answerLine.className =
    "answer-line";

  answerLine.textContent =
    getAnswerText(
      content
    );

  block.appendChild(
    questionLine
  );

  if (
    getAnswerText(content)
  ) {

    block.appendChild(
      answerLine
    );

  }

  return block;

}


/* =========================================
   DİL İÇERİĞİNİ BUL
========================================= */

function getLanguageContent(
  question,
  languageCode
) {

  if (!question) {
    return null;
  }

  /*
    Örnek yapı:
    {
      tr: {
        question: "...",
        answer: "..."
      }
    }
  */

  if (
    question[languageCode]
  ) {

    return question[
      languageCode
    ];

  }

  /*
    languages yapısı.
  */

  if (
    question.languages &&
    question.languages[languageCode]
  ) {

    return question.languages[
      languageCode
    ];

  }

  /*
    content yapısı.
  */

  if (
    question.content &&
    question.content[languageCode]
  ) {

    return question.content[
      languageCode
    ];

  }

  return null;

}


/* =========================================
   SORU METNİ
========================================= */

function getQuestionText(
  content
) {

  if (
    typeof content === "string"
  ) {

    return content;

  }

  return (
    content.question ??
    content.q ??
    content.title ??
    ""
  );

}


/* =========================================
   CEVAP METNİ
========================================= */

function getAnswerText(
  content
) {

  if (
    typeof content === "string"
  ) {

    return "";

  }

  return (
    content.answer ??
    content.a ??
    content.text ??
    ""
  );

}


/* =========================================
   KAYNAKLAR
========================================= */

function getSources(
  question
) {

  if (!question) {
    return [];
  }

  if (
    Array.isArray(question.sources)
  ) {

    return question.sources;

  }

  if (
    Array.isArray(question.source)
  ) {

    return question.source;

  }

  return [];

}


/* =========================================
   KAYNAK BLOĞU
========================================= */

function createSources(
  sources
) {

  const wrapper =
    document.createElement("div");

  wrapper.className =
    "sources";

  const title =
    document.createElement("h3");

  title.textContent =
    "Kaynaklar";

  wrapper.appendChild(
    title
  );

  const list =
    document.createElement("ul");

  sources.forEach(
    source => {

      const li =
        document.createElement("li");

      if (
        typeof source === "string"
      ) {

        li.textContent =
          source;

      } else {

        const text =
          source.title ??
          source.name ??
          source.text ??
          source.url ??
          "";

        if (
          source.url
        ) {

          const link =
            document.createElement("a");

          link.href =
            source.url;

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

      }

      list.appendChild(
        li
      );

    }
  );

  wrapper.appendChild(
    list
  );

  return wrapper;

}


/* =========================================
   NAVİGASYON
========================================= */

function renderNavigation() {

  renderTopNavigation();

  renderBottomNavigation();

}


/* =========================================
   ÜST NAVİGASYON
========================================= */

function renderTopNavigation() {

  if (!topNavigation) {
    return;
  }

  topNavigation.innerHTML = "";

  const row =
    document.createElement("div");

  row.className =
    "navigation-row";


  /* =====================================
     SORU ←
  ===================================== */

  const previousQuestion =
    document.createElement("button");

  previousQuestion.type =
    "button";

  previousQuestion.textContent =
    "← Soru";

  previousQuestion.title =
    "Önceki soru";

  previousQuestion.disabled =
    currentQuestion <= 1;

  previousQuestion.addEventListener(
    "click",
    () => {

      if (
        currentQuestion > 1
      ) {

        goToQuestion(
          currentQuestion - 1
        );

      }

    }
  );


  /* =====================================
     KÂBE UNICODE
  ===================================== */

  const kaabaButton =
    document.createElement("button");

  kaabaButton.type =
    "button";

  /*
    Kâbe artık RESİM DEĞİL.
    Unicode olarak sabit:
  */

  kaabaButton.textContent =
    "🕋";

  kaabaButton.title =
    "Ana sayfa";

  kaabaButton.setAttribute(
    "aria-label",
    "Ana sayfa"
  );

  kaabaButton.className =
    "navigation
