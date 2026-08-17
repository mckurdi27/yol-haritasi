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


/* =========================================
   DİLLER
   SIRALAMA KESİNDİR — DEĞİŞTİRME
========================================= */

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
  document.getElementById(
    "home-language-selector"
  );

const daysList =
  document.getElementById("days-list");

const topNavigation =
  document.getElementById(
    "top-navigation"
  );

const bottomNavigation =
  document.getElementById(
    "bottom-navigation"
  );

const questionContent =
  document.getElementById(
    "question-content"
  );


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

  buttons.forEach(
    button => {

      button.classList.toggle(
        "active",
        button.dataset.language ===
          selectedLanguage
      );

    }
  );

}


/* =========================================
   GÜNLERİ YÜKLE
========================================= */

async function loadDays() {

  try {

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
        Array.isArray(
          masterData.days
        )
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
      (
        (day - 1) *
        QUESTIONS_PER_DAY
      ) + 1;

    const end =
      day *
      QUESTIONS_PER_DAY;

    result.push({

      day: day,

      file:
        `data/day-${String(day).padStart(
          2,
          "0"
        )}.json`,

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
    day &&
    day.dayTitle &&
    typeof day.dayTitle ===
      "string"
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
    day &&
    day.daySubtitle &&
    typeof day.daySubtitle ===
      "string"
  ) {

    return day.daySubtitle;

  }

  if (
    day &&
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
    getDayInfo(
      currentDay
    );

  currentQuestion =
    dayInfo &&
    Number.isFinite(
      Number(
        dayInfo.questionStart
      )
    )

      ? Number(
          dayInfo.questionStart
        )

      : (
          (
            currentDay - 1
          ) *
          QUESTIONS_PER_DAY
        ) + 1;

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
   SORU SAYFASI
========================================= */

async function renderQuestionPage() {

  if (!questionContent) {
    return;
  }

  const dayInfo =
    getDayInfo(
      currentDay
    );

  questionContent.innerHTML =
    `
      <div class="loading">
        Yükleniyor...
      </div>
    `;

  renderNavigation();

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

async function loadDayFile(
  dayInfo
) {

  if (!dayInfo) {
    return null;
  }

  const possibleFiles = [];

  if (dayInfo.file) {

    possibleFiles.push(
      dayInfo.file
    );

  }

  const standardFile =
    `data/day-${String(
      currentDay
    ).padStart(
      2,
      "0"
    )}.json`;

  if (
    !possibleFiles.includes(
      standardFile
    )
  ) {

    possibleFiles.push(
      standardFile
    );

  }

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

  const title =
    document.createElement("h1");

  title.className =
    "question-day-title";

  title.textContent =
    getDayTitle(dayInfo);

  const card =
    document.createElement("div");

  card.className =
    "question-card";

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


  /* =====================================
     KAYNAKLAR
  ===================================== */

  const sources =
    getSources(
      question
    );

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
    Array.isArray(
      data.questions
    )
  ) {

    questions =
      data.questions;

  } else if (
    data &&
    Array.isArray(
      data.items
    )
  ) {

    questions =
      data.items;

  }

  if (
    questions.length === 0
  ) {

    return null;

  }


  /* =====================================
     GLOBAL SORU NUMARASI
  ===================================== */

  const question =
    questions.find(
      item => {

        return Number(
          item.questionNumber ??
          item.number ??
          item.id
        ) ===
          Number(
            questionNumber
          );

      }
    );

  if (question) {
    return question;
  }


  /* =====================================
     GÜNLÜK 1–19 YAPISI
  ===================================== */

  const start =
    dayInfo &&
    Number.isFinite(
      Number(
        dayInfo.questionStart
      )
    )

      ? Number(
          dayInfo.questionStart
        )

      : (
          (
            currentDay - 1
          ) *
          QUESTIONS_PER_DAY
        ) + 1;

  const index =
    Number(
      questionNumber
    ) - start;

  if (
    index >= 0 &&
    index < questions.length
  ) {

    return questions[index];

  }


  /* =====================================
     SON ÇARE
  ===================================== */

  return (
    questions[
      Number(
        questionNumber
      ) - 1
    ] ||
    null
  );

}


/* =========================================
   DİL BLOĞU
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


  /* =====================================
     SEÇİLEN DİL
  ===================================== */

  if (
    language.code ===
    selectedLanguage
  ) {

    block.classList.add(
      "selected-language"
    );

  }


  /* =====================================
     ARAPÇA RTL
  ===================================== */

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


  const answerText =
    getAnswerText(
      content
    );

  if (answerText) {

    const answerLine =
      document.createElement("div");

    answerLine.className =
      "answer-line";

    answerLine.textContent =
      answerText;

    block.appendChild(
      questionLine
    );

    block.appendChild(
      answerLine
    );

  } else {

    block.appendChild(
      questionLine
    );

  }

  return block;

}


/* =========================================
   DİL İÇERİĞİ
========================================= */

function getLanguageContent(
  question,
  languageCode
) {

  if (!question) {
    return null;
  }

  if (
    question[
      languageCode
    ]
  ) {

    return question[
      languageCode
    ];

  }

  if (
    question.languages &&
    question.languages[
      languageCode
    ]
  ) {

    return question.languages[
      languageCode
    ];

  }

  if (
    question.content &&
    question.content[
      languageCode
    ]
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
    typeof content ===
    "string"
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
    typeof content ===
    "string"
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
    Array.isArray(
      question.sources
    )
  ) {

    return question.sources;

  }

  if (
    Array.isArray(
      question.source
    )
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
        typeof source ===
        "string"
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
     SOL — ÖNCEKİ SORU
  ===================================== */

  const previousQuestion =
    document.createElement("button");

  previousQuestion.type =
    "button";

  previousQuestion.textContent =
    "←";

  previousQuestion.title =
    "Önceki soru";

  previousQuestion.setAttribute(
    "aria-label",
    "Önceki soru"
  );

  previousQuestion.className =
    "navigation-arrow-button";

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
     SOL ETİKET — SORU
  ===================================== */

  const questionLabel =
    document.createElement("span");

  questionLabel.className =
    "navigation-label";

  questionLabel.textContent =
    "Soru";


  /* =====================================
     KÂBE UNICODE
     ORTADA
  ===================================== */

  const kaabaButton =
    document.createElement("button");

  kaabaButton.type =
    "button";

  kaabaButton.textContent =
    "🕋";

  kaabaButton.title =
    "Ana sayfa";

  kaabaButton.setAttribute(
    "aria-label",
    "Ana sayfa"
  );

  kaabaButton.className =
    "kaaba-navigation-button";

  kaabaButton.addEventListener(
    "click",
    () => {

      goHome();

    }
  );


  /* =====================================
     SAĞ ETİKET — GÜNLER
  ===================================== */

  const dayLabel =
    document.createElement("span");

  dayLabel.className =
    "navigation-label";

  dayLabel.textContent =
    "Günler";


  /* =====================================
     SAĞ — SONRAKİ SORU
  ===================================== */

  const nextQuestion =
    document.createElement("button");

  nextQuestion.type =
    "button";

  nextQuestion.textContent =
    "→";

  nextQuestion.title =
    "Sonraki soru";

  nextQuestion.setAttribute(
    "aria-label",
    "Sonraki soru"
  );

  nextQuestion.className =
    "navigation-arrow-button";

  nextQuestion.disabled =
    currentQuestion >= TOTAL_QUESTIONS;

  nextQuestion.addEventListener(
    "click",
    () => {

      if (
        currentQuestion <
        TOTAL_QUESTIONS
      ) {

        goToQuestion(
          currentQuestion + 1
        );

      }

    }
  );


  /*
    Sıralama:

    ←
    Soru
    🕋
    Günler
    →
  */

  row.appendChild(
    previousQuestion
  );

  row.appendChild(
    questionLabel
  );

  row.appendChild(
    kaabaButton
  );

  row.appendChild(
    dayLabel
  );

  row.appendChild(
    nextQuestion
  );


  topNavigation.appendChild(
    row
  );

}


/* =========================================
   ALT NAVİGASYON
========================================= */

function renderBottomNavigation() {

  if (!bottomNavigation) {
    return;
  }

  bottomNavigation.innerHTML = "";

  const row =
    document.createElement("div");

  row.className =
    "navigation-row";


  /* =====================================
     SORU GERİ
  ===================================== */

  const previousQuestion =
    document.createElement("button");

  previousQuestion.type =
    "button";

  previousQuestion.textContent =
    "←";

  previousQuestion.title =
    "Önceki soru";

  previousQuestion.disabled =
    currentQuestion <= 1;

  previousQuestion.className =
    "navigation-arrow-button";

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
     SORU NUMARASI
  ===================================== */

  const questionInput =
    document.createElement("input");

  questionInput.type =
    "number";

  questionInput.className =
    "navigation-number-input";

  questionInput.min =
    "1";

  questionInput.max =
    String(
      TOTAL_QUESTIONS
    );

  questionInput.value =
    String(
      currentQuestion
    );

  questionInput.placeholder =
    "Soru";


  questionInput.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "Enter"
      ) {

        const value =
          Number(
            questionInput.value
          );

        if (
          Number.isFinite(value) &&
          value >= 1 &&
          value <= TOTAL_QUESTIONS
        ) {

          goToQuestion(
            value
          );

        }

      }

    }
  );


  /* =====================================
     SORU İLERİ
  ===================================== */

  const nextQuestion =
    document.createElement("button");

  nextQuestion.type =
    "button";

  nextQuestion.textContent =
    "→";

  nextQuestion.title =
    "Sonraki soru";

  nextQuestion.disabled =
    currentQuestion >=
    TOTAL_QUESTIONS;

  nextQuestion.className =
    "navigation-arrow-button";

  nextQuestion.addEventListener(
    "click",
    () => {

      if (
        currentQuestion <
        TOTAL_QUESTIONS
      ) {

        goToQuestion(
          currentQuestion + 1
        );

      }

    }
  );


  /* =====================================
     GÜN GERİ
  ===================================== */

  const previousDay =
    document.createElement("button");

  previousDay.type =
    "button";

  previousDay.textContent =
    "← Gün";

  previousDay.title =
    "Önceki gün";

  previousDay.disabled =
    currentDay <= 1;

  previousDay.addEventListener(
    "click",
    () => {

      if (
        currentDay > 1
      ) {

        openDay(
          currentDay - 1
        );

      }

    }
  );


  /* =====================================
     GÜN NUMARASI
  ===================================== */

  const dayInput =
    document.createElement("input");

  dayInput.type =
    "number";

  dayInput.className =
    "navigation-number-input";

  dayInput.min =
    "1";

  dayInput.max =
    String(
      TOTAL_DAYS
    );

  dayInput.value =
    String(
      currentDay
    );

  dayInput.placeholder =
    "Gün";


  dayInput.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "Enter"
      ) {

        const value =
          Number(
            dayInput.value
          );

        if (
          Number.isFinite(value) &&
          value >= 1 &&
          value <= TOTAL_DAYS
        ) {

          openDay(
            value
          );

        }

      }

    }
  );


  /* =====================================
     GÜN İLERİ
  ===================================== */

  const nextDay =
    document.createElement("button");

  nextDay.type =
    "button";

  nextDay.textContent =
    "Gün →";

  nextDay.title =
    "Sonraki gün";

  nextDay.disabled =
    currentDay >=
    TOTAL_DAYS;

  nextDay.addEventListener(
    "click",
    () => {

      if (
        currentDay <
        TOTAL_DAYS
      ) {

        openDay(
          currentDay + 1
        );

      }

    }
  );


  /* =====================================
     ALT NAVİGASYON SIRASI
  ===================================== */

  row.appendChild(
    previousQuestion
  );

  row.appendChild(
    questionInput
  );

  row.appendChild(
    nextQuestion
  );

  row.appendChild(
    previousDay
  );

  row.appendChild(
    dayInput
  );

  row.appendChild(
    nextDay
  );


  bottomNavigation.appendChild(
    row
  );

}


/* =========================================
   SORUYA GİT
========================================= */

async function goToQuestion(
  questionNumber
) {

  const number =
    Number(
      questionNumber
    );

  if (
    !Number.isFinite(number)
  ) {

    return;

  }

  if (
    number < 1 ||
    number > TOTAL_QUESTIONS
  ) {

    return;

  }

  currentQuestion =
    number;


  /*
    Soru numarasından günü hesapla.
  */

  const calculatedDay =
    Math.floor(
      (
        currentQuestion - 1
      ) /
      QUESTIONS_PER_DAY
    ) + 1;

  if (
    calculatedDay !==
    currentDay
  ) {

    currentDay =
      calculatedDay;

  }

  showQuestionPage();

  await renderQuestionPage();

}


/* =========================================
   GÜN BİLGİSİ
========================================= */

function getDayInfo(
  dayNumber
) {

  return (
    daysData.find(
      day =>
        Number(day.day) ===
        Number(dayNumber)
    ) ||
    null
  );

}


/* =========================================
   URL
========================================= */

function handleInitialUrl() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const dayParam =
    Number(
      params.get("day")
    );

  const questionParam =
    Number(
      params.get("question")
    );

  if (
    Number.isFinite(
      questionParam
    ) &&
    questionParam >= 1 &&
    questionParam <= TOTAL_QUESTIONS
  ) {

    currentQuestion =
      questionParam;

    currentDay =
      Math.floor(
        (
          currentQuestion - 1
        ) /
        QUESTIONS_PER_DAY
      ) + 1;

    showQuestionPage();

    renderQuestionPage();

    return;

  }

  if (
    Number.isFinite(dayParam) &&
    dayParam >= 1 &&
    dayParam <= TOTAL_DAYS
  ) {

    currentDay =
      dayParam;

    const info =
      getDayInfo(
        currentDay
      );

    currentQuestion =
      info &&
      info.questionStart
        ? Number(
            info.questionStart
          )
        : (
            (
              currentDay - 1
            ) *
            QUESTIONS_PER_DAY
          ) + 1;

    showQuestionPage();

    renderQuestionPage();

  }

}


/* =========================================
   TARAYICI GERİ / İLERİ
========================================= */

window.addEventListener(
  "popstate",
  () => {

    handleInitialUrl();

  }
);


/* =========================================
   SON
========================================= */
