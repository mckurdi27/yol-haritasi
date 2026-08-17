/* =========================================
   BİR MÜSLÜMANIN YOL HARİTASI
   11 DİL
   APP.JS

   ÖNEMLİ SABİT KURALLAR:

   1. ARAPÇA 6. SIRADA
   2. KURMANCÎ BAYRAĞI 🇬🇭
   3. TATARCА BAYRAĞI 🇭🇺
   4. 11 DİLİN SIRASI DEĞİŞMEYECEK
   5. SORULAR KESİNTİSİZ DEVAM EDECEK
   6. 19 → 20 OTOMATİK GEÇİŞ YAPACAK
   7. SORU SAYI KUTUSU DOĞRUDAN SORUYA GÖTÜRECEK
   8. GÜN SAYI KUTUSU DOĞRUDAN GÜNE GÖTÜRECEK
========================================= */


/* =========================================
   DİLLER

   SABİT SIRA:

   1  🇹🇷 Türkçe
   2  🇬🇧 English
   3  🇩🇪 Deutsch
   4  🇷🇺 Русский
   5  🇬🇭 Kurmancî
   6  🇸🇦 العربية
   7  🇭🇺 Tatarca
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
    flag: "🇬🇭",
    name: "Kurmancî"
  },

  /* =====================================
     ARAPÇA KESİN OLARAK 6. SIRADA
  ====================================== */

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

    previousQuestion: "← Önceki Soru",
    nextQuestion: "Sonraki Soru →",

    home: "🏠 Ana Sayfa",

    previousDay: "← Önceki Gün",
    nextDay: "Sonraki Gün →",

    source: "📚 Kaynaklar",
    openSource: "Kaynağı aç",

    questionCount: "Soru",

    loading: "Günler yükleniyor...",
    noDays: "Henüz gün bulunamadı.",

    questionPlaceholder: "Soru",
    dayPlaceholder: "Gün"
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
    noDays: "No days found yet.",

    questionPlaceholder: "Question",
    dayPlaceholder: "Day"
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
    noDays: "Noch keine Tage gefunden.",

    questionPlaceholder: "Frage",
    dayPlaceholder: "Tag"
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
    noDays: "Дни пока не найдены.",

    questionPlaceholder: "Вопрос",
    dayPlaceholder: "День"
  },


  ku: {
    title: "Rêbernameya Misilmanekî",
    subtitle: "Îslamê gav bi gav fêr bibe",
    days: "Roj",

    previousQuestion: "← Pirsê berê",
    nextQuestion: "Pirsê paş →",

    home: "🏠 Malpera sereke",

    previousDay: "← Roja berê",
    nextDay: "Roja paş →",

    source: "📚 Çavkanî",
    openSource: "Çavkaniyê veke",

    questionCount: "Pirs",

    loading: "Roj tên barkirin...",
    noDays: "Hêj roj nehatine dîtin.",

    questionPlaceholder: "Pirs",
    dayPlaceholder: "Roj"
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
    noDays: "Әлегә көннәр табылмады.",

    questionPlaceholder: "Сорау",
    dayPlaceholder: "Көн"
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
    noDays: "Aucun jour trouvé.",

    questionPlaceholder: "Question",
    dayPlaceholder: "Jour"
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
    noDays: "Todavía no se encontraron días.",

    questionPlaceholder: "Pregunta",
    dayPlaceholder: "Día"
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
    noDays: "Nog geen dagen gevonden.",

    questionPlaceholder: "Vraag",
    dayPlaceholder: "Dag"
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
    noDays: "Nessun giorno trovato.",

    questionPlaceholder: "Domanda",
    dayPlaceholder: "Giorno"
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
    noDays: "لَمْ يَتِمَّ الْعُثُورُ عَلَى أَيَّامٍ بَعْدُ.",

    questionPlaceholder: "السؤال",
    dayPlaceholder: "اليوم"
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


  /*
    Günlük dosyalar:

    data/day-01.json
    data/day-02.json
    data/day-03.json
    ...
    data/day-30.json
  */

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
              `⚠️ Gün ${number} bulunamadı:`,
              response.status,
              file
            );

            return null;
          }


          const text =
            await response.text();


          if (!text.trim()) {

            console.warn(
              `⚠️ Gün ${number} boş:`,
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
              `❌ Gün ${number} JSON HATASI:`,
              error
            );

            console.error(
              `❌ Kontrol edilmesi gereken dosya: ${file}`
            );

            return null;
          }


          /*
            JSON şu iki yapıdan biri olabilir:

            1. Direkt array

            [
              {...},
              {...}
            ]

            2. Gün nesnesi

            {
              "day": 1,
              "dayTitle": {...},
              "daySubtitle": {...},
              "questions": [...]
            }
          */

          const questions =
            Array.isArray(data)
              ? data
              : data.questions;


          if (
            !Array.isArray(questions)
          ) {

            console.error(
              `❌ Gün ${number}: questions dizisi bulunamadı.`,
              file
            );

            return null;
          }


          if (
            questions.length === 0
          ) {

            console.warn(
              `⚠️ Gün ${number}: hiç soru yok.`,
              file
            );

            return null;
          }


          /*
            Soru ID kontrolü
          */

          const validQuestions =
            questions.filter(
              question =>
                question &&
                typeof question === "object" &&
                Number.isFinite(
                  Number(question.id)
                )
            );


          if (
            validQuestions.length === 0
          ) {

            console.error(
              `❌ Gün ${number}: geçerli soru ID'si bulunamadı.`,
              file
            );

            return null;
          }


          console.log(
            `✅ Gün ${number} yüklendi: ${validQuestions.length} soru`
          );


          return {

            number,

            questions: validQuestions,

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
            `❌ Gün ${number} yüklenirken hata oluştu:`,
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
        `Gün ${day.number} (${day.questions.length} soru)`
    )
  );


  /*
    Eksik günleri açıkça göster
  */

  const loadedNumbers =
    new Set(
      days.map(
        day =>
          day.number
      )
    );


  const missingDays = [];


  for (
    let number = 1;
    number <= 30;
    number++
  ) {

    if (
      !loadedNumbers.has(number)
    ) {

      missingDays.push(number);

    }

  }


  if (
    missingDays.length
  ) {

    console.warn(
      "⚠️ Yüklenmeyen günler:",
      missingDays
    );

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

    console.error(
      "Soru bulunamadı:",
      currentDayIndex,
      currentQuestionIndex
    );

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


  /* =====================================
     GÜN BAŞLIĞI
  ====================================== */

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


  /* =====================================
     SORU KARTI
  ====================================== */

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "question-card";


  /*
    Seçilen dil ilk sırada.

    Diğer 10 dil,
    sabit LANGS sırasına göre devam eder.
  */

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


  /* =====================================
     KAYNAKLAR
  ====================================== */

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


  /* =====================================
     NAVİGASYON
  ====================================== */

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
      createNavigation()
    );

  }


  if (bottom) {

    bottom.innerHTML =
      "";


    bottom.appendChild(
      createNavigation()
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

function createNavigation() {

  const row =
    document.createElement(
      "div"
    );


  row.className =
    "navigation-row";


  /* =====================================
     ÖNCEKİ SORU
  ====================================== */

  const previousQuestion =
    makeButton(
      UI[selectedLang].previousQuestion
    );


  /*
    İlk soruda devre dışı.
    Gün sınırında devre dışı DEĞİL.
    Böylece 20 → 19 çalışır.
  */

  const globalQuestionNumber =
    Number(
      days[currentDayIndex]
        .questions[currentQuestionIndex]
        .id
    );


  previousQuestion.disabled =
    globalQuestionNumber <= 1;


  previousQuestion.onclick =
    () => {

      goToQuestionById(
        globalQuestionNumber - 1
      );

    };


  /* =====================================
     SORU SAYI KUTUSU
  ====================================== */

  const questionInput =
    createJumpInput(
      UI[selectedLang].questionPlaceholder,
      globalQuestionNumber,
      "question"
    );


  /* =====================================
     SONRAKİ SORU
  ====================================== */

  const nextQuestion =
    makeButton(
      UI[selectedLang].nextQuestion
    );


  nextQuestion.disabled =
    !getQuestionByGlobalId(
      globalQuestionNumber + 1
    );


  nextQuestion.onclick =
    () => {

      goToQuestionById(
        globalQuestionNumber + 1
      );

    };


  /* =====================================
     ANA SAYFA
  ====================================== */

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
     GÜN SAYI KUTUSU
  ====================================== */

  const dayInput =
    createJumpInput(
      UI[selectedLang].dayPlaceholder,
      days[currentDayIndex].number,
      "day"
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


  /* =====================================
     SORU NAVİGASYONU

     ← Önceki Soru
     [ 9 ]
     Sonraki Soru →

     ANA SAYFA

     ← Önceki Gün
     [ 10 ]
     Sonraki Gün →
  ====================================== */

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
    home
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


  return row;

}


/* =========================================
   SAYI / ATLAMA KUTUSU
========================================= */

function createJumpInput(
  placeholder,
  value,
  type
) {

  const input =
    document.createElement(
      "input"
    );


  input.type =
    "number";


  input.className =
    "jump-input";


  input.placeholder =
    placeholder;


  input.value =
    value;


  input.min =
    type === "question"
      ? "1"
      : "1";


  input.setAttribute(
    "inputmode",
    "numeric"
  );


  input.setAttribute(
    "aria-label",
    placeholder
  );


  /*
    Enter'a basınca git
  */

  input.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        event.preventDefault();


        const value =
          Number(
            input.value
          );


        if (
          !Number.isFinite(value)
        ) {

          return;

        }


        if (
          type === "question"
        ) {

          goToQuestionById(
            value
          );

        } else {

          goToDayByNumber(
            value
          );

        }

      }

    }
  );


  /*
    Kutudan çıkınca da git
  */

  input.addEventListener(
    "change",
    () => {

      const value =
        Number(
          input.value
        );


      if (
        !Number.isFinite(value)
      ) {

        return;

      }


      if (
        type === "question"
      ) {

        goToQuestionById(
          value
        );

      } else {

        goToDayByNumber(
          value
        );

      }

    }
  );


  return input;

}


/* =========================================
   GLOBAL SORU BUL
========================================= */

function getQuestionByGlobalId(
  id
) {

  const wantedId =
    Number(id);


  if (
    !Number.isFinite(wantedId)
  ) {

    return null;

  }


  for (
    let dayIndex = 0;
    dayIndex < days.length;
    dayIndex++
  ) {

    const day =
      days[dayIndex];


    for (
      let questionIndex = 0;
      questionIndex < day.questions.length;
      questionIndex++
    ) {

      const question =
        day.questions[questionIndex];


      if (
        Number(question.id) ===
        wantedId
      ) {

        return {

          dayIndex,

          questionIndex,

          question,

          day

        };

      }

    }

  }


  return null;

}


/* =========================================
   SORU NUMARASINA GİT
========================================= */

function goToQuestionById(
  id
) {

  const result =
    getQuestionByGlobalId(
      id
    );


  if (!result) {

    console.warn(
      `❌ ${id}. soru bulunamadı.`
    );

    return;

  }


  currentDayIndex =
    result.dayIndex;


  currentQuestionIndex =
    result.questionIndex;


  renderQuestion();

}


/* =========================================
   GÜN NUMARASINA GİT
========================================= */

function goToDayByNumber(
  number
) {

  const wantedDay =
    Number(number);


  if (
    !Number.isFinite(wantedDay)
  ) {

    return;

  }


  const index =
    days.findIndex(
      day =>
        Number(day.number) ===
        wantedDay
    );


  if (
    index === -1
  ) {

    console.warn(
      `❌ ${wantedDay}. gün bulunamadı.`
    );

    return;

  }


  currentDayIndex =
    index;


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
