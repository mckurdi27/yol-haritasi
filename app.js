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

let selectedLang = localStorage.getItem("selectedLang") || "tr";
let days = [];


/* =========================
   BAŞLAT
========================= */

document.addEventListener("DOMContentLoaded", init);

async function init() {
  document.documentElement.lang = selectedLang;

  buildLanguageSelector();
  bindSearch();

  await loadDays();

  render();
}


/* =========================
   DİL SEÇİMİ
========================= */

function buildLanguageSelector() {

  const container =
    document.querySelector("#language-selector") ||
    document.querySelector(".language-selector") ||
    document.querySelector("#languages");

  if (!container) return;

  container.innerHTML = "";

  LANGS.forEach(lang => {

    const button = document.createElement("button");

    button.type = "button";
    button.textContent = lang.label;
    button.dataset.lang = lang.key;

    if (lang.key === selectedLang) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {

      selectedLang = lang.key;

      localStorage.setItem(
        "selectedLang",
        selectedLang
      );

      document.documentElement.lang = selectedLang;

      buildLanguageSelector();

      render();
    });

    container.appendChild(button);
  });
}


/* =========================
   GÜNLERİ OTOMATİK YÜKLE
========================= */

async function loadDays() {

  const loadedDays = [];

  /*
    Manifest / days.json kullanmıyoruz.

    Sistem otomatik olarak:

    data/day-01.json
    data/day-02.json
    data/day-03.json
    ...

    dosyalarını kontrol eder.
  */

  for (let day = 1; day <= 365; day++) {

    const fileName =
      `data/day-${String(day).padStart(2, "0")}.json`;

    try {

      const response = await fetch(
        fileName,
        {
          cache: "no-store"
        }
      );

      if (!response.ok) {
        continue;
      }

      const data = await response.json();

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

      /*
        Henüz eklenmemiş günler için
        hata göstermiyoruz.
      */

    }
  }

  days = loadedDays;
}


/* =========================
   ARAMA
========================= */

function bindSearch() {

  const input =
    document.querySelector("#search") ||
    document.querySelector("#searchInput") ||
    document.querySelector("input[type='search']");

  if (!input) return;

  input.addEventListener(
    "input",
    () => {
      render();
    }
  );
}


function getSearchValue() {

  const input =
    document.querySelector("#search") ||
    document.querySelector("#searchInput") ||
    document.querySelector("input[type='search']");

  if (!input) {
    return "";
  }

  return input.value
    .trim()
    .toLocaleLowerCase("tr-TR");
}


/*
  Arama 9 dilin tamamında yapılır.
*/

function questionMatchesSearch(question, search) {

  if (!search) {
    return true;
  }

  /*
    Soru numarası ile arama
  */

  if (
    String(question.id)
      .includes(search)
  ) {
    return true;
  }


  /*
    Bütün dillerde soru + cevap
  */

  for (const lang of LANGS) {

    const data = question[lang.key];

    if (!data) continue;

    const text =
      `${data.q || ""} ${data.a || ""}`
      .toLocaleLowerCase("tr-TR");

    if (text.includes(search)) {
      return true;
    }
  }

  return false;
}


/* =========================
   ANA EKRANI OLUŞTUR
========================= */

function render() {

  const root =
    document.querySelector("#app") ||
    document.querySelector("#questions") ||
    document.querySelector("main") ||
    document.querySelector(".content");

  if (!root) {
    console.warn(
      "Ana içerik alanı bulunamadı."
    );

    return;
  }

  const search = getSearchValue();

  root.innerHTML = "";

  let totalShown = 0;


  /* =========================
     GÜNLER
  ========================= */

  days.forEach(dayData => {

    const matchingQuestions =
      dayData.questions.filter(
        question =>
          questionMatchesSearch(
            question,
            search
          )
      );


    if (
      matchingQuestions.length === 0
    ) {
      return;
    }


    /*
      GÜN BAŞLIĞI
    */

    const daySection =
      document.createElement("section");

    daySection.className =
      "day-section";


    const dayTitle =
      document.createElement("h2");

    const title =
      matchingQuestions[0].dayTitle ||
      `${dayData.day}. Gün`;

    dayTitle.textContent = title;

    daySection.appendChild(
      dayTitle
    );


    /*
      SORULAR
    */

    matchingQuestions.forEach(
      question => {

        const questionElement =
          renderQuestion(question);

        daySection.appendChild(
          questionElement
        );

        totalShown++;
      }
    );


    root.appendChild(
      daySection
    );
  });


  /*
    SONUÇ YOKSA
  */

  if (totalShown === 0) {

    const empty =
      document.createElement("p");

    empty.className =
      "no-results";

    if (search) {

      empty.textContent =
        "Sonuç bulunamadı.";

    } else {

      empty.textContent =
        "Henüz günlük veri eklenmemiş.";
    }

    root.appendChild(
      empty
    );
  }
}


/* =========================
   TEK SORU
========================= */

function renderQuestion(question) {

  const article =
    document.createElement("article");

  article.className =
    "question-card";


  /*
    SEÇİLEN DİL EN ÜSTTE

    Daha sonra diğer 8 dil.
  */

  const orderedLanguages = [

    selectedLang,

    ...LANGS
      .map(language => language.key)
      .filter(
        key =>
          key !== selectedLang
      )
  ];


  /*
    9 DİL
  */

  orderedLanguages.forEach(
    languageKey => {

      const language =
        LANGS.find(
          item =>
            item.key === languageKey
        );

      const data =
        question[languageKey];

      if (!data) {
        return;
      }


      const block =
        document.createElement("div");

      block.className =
        `language-block lang-${languageKey}`;


      /*
        Seçilen dil
        görsel olarak öne çıkar.
      */

      if (
        languageKey === selectedLang
      ) {

        block.classList.add(
          "selected-language"
        );
      }


      /*
        SORU
      */

      const questionLine =
        document.createElement("div");

      questionLine.className =
        "question-line";

      questionLine.textContent =
        `${language.label} ${question.id}. ${data.q}`;


      /*
        CEVAP
      */

      const answerLine =
        document.createElement("div");

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


      article.appendChild(
        block
      );
    }
  );


  /*
    KAYNAKLAR
    9 dilin hemen arkasından gelir.
  */

  if (
    Array.isArray(question.sources) &&
    question.sources.length > 0
  ) {

    const sourceElement =
      renderSources(
        question.sources,
        selectedLang
      );

    article.appendChild(
      sourceElement
    );
  }


  return article;
}


/* =========================
   KAYNAKLAR
========================= */

function renderSources(
  sources,
  language
) {

  const container =
    document.createElement("div");

  container.className =
    "sources";


  /*
    Kaynak başlığı
  */

  const title =
    document.createElement("h4");

  title.textContent =
    SOURCE_TITLE[language] ||
    SOURCE_TITLE.tr;

  container.appendChild(
    title
  );


  /*
    Kaynak listesi
  */

  const list =
    document.createElement("ul");


  sources.forEach(source => {

    const item =
      document.createElement("li");


    /*
      YENİ FORMAT:

      {
        "title": "...",
        "url": "https://..."
      }
    */

    if (
      typeof source === "object" &&
      source !== null
    ) {

      const sourceTitle =
        document.createElement("span");

      sourceTitle.textContent =
        source.title ||
        source.name ||
        "Kaynak";

      item.appendChild(
        sourceTitle
      );


      if (source.url) {

        item.appendChild(
          document.createTextNode(" ")
        );

        const link =
          createSourceLink(
            source.url,
            source.linkText ||
            OPEN_TEXT[language] ||
            OPEN_TEXT.tr
          );

        item.appendChild(
          link
        );
      }

    }

    /*
      ESKİ FORMAT:

      "📖 Kur'an — İhlâs 112:1-4"
    */

    else {

      const text =
        String(source);


      /*
        Eğer kaynak metninin içinde
        https:// varsa otomatik yakalar.
      */

      const urlMatch =
        text.match(
          /https?:\/\/[^\s|]+/i
        );


      if (urlMatch) {

        const url =
          urlMatch[0];

        const label =
          text
            .replace(url, "")
            .replace(
              /\s*[|—-]\s*$/,
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


        const link =
          createSourceLink(
            url,
            OPEN_TEXT[language] ||
            OPEN_TEXT.tr
          );


        item.appendChild(
          link
        );

      }

      /*
        URL yoksa düz metin
        olarak göster.
      */

      else {

        item.appendChild(
          document.createTextNode(
            text
          )
        );
      }
    }


    list.appendChild(
      item
    );
  });


  container.appendChild(
    list
  );


  return container;
}


/* =========================
   KAYNAK LİNKİ
========================= */

function createSourceLink(
  url,
  text
) {

  const link =
    document.createElement("a");


  link.href = url;

  link.target = "_blank";

  link.rel =
    "noopener noreferrer";


  link.textContent =
    `🔗 ${text}`;


  return link;
}
