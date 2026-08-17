// GÜNLERİ YÜKLE
async function loadDays() {
  const response = await fetch("days.json?cache=" + Date.now());
  const data = await response.json();
  return data.days;
}

// HTML ELEMANLARI
const homePage = document.getElementById("home-page");
const questionPage = document.getElementById("question-page");
const daysList = document.getElementById("days-list");
const roadmapTitle = document.querySelector(".roadmap-title");
const homeSubtitle = document.querySelector(".home-subtitle");

// DİLLER
const languages = {
  tr: "🇹🇷",
  en: "🇬🇧",
  de: "🇩🇪",
  ru: "🇷🇺",
  ku: "🇬🇭",
  tt: "🇭🇺",
  fr: "🇫🇷",
  es: "🇪🇸",
  nl: "🇳🇱",
  it: "🇮🇹",
  ar: "🇸🇦"
};

let selectedLanguage = "tr";

// ANA SAYFA METİNLERİ
const titles = {
  tr: { title: "Bir Müslümanın Yol Haritası", subtitle: "11 Dilli Günlük Dinî Bilgi Rehberi" },
  en: { title: "Muslim's Roadmap", subtitle: "Daily Islamic Knowledge in 11 Languages" },
  de: { title: "Der Weg des Muslims", subtitle: "Tägliches islamisches Wissen in 11 Sprachen" },
  ru: { title: "Путь мусульманина", subtitle: "Ежедневные исламские знания на 11 языках" },
  ku: { title: "Rêbera Mislîmanê", subtitle: "Zanîna rojane ya Îslamî bi 11 ziman" },
  tt: { title: "Мөселман юлы", subtitle: "11 телдә көндәлек ислам белеме" },
  fr: { title: "La voie du musulman", subtitle: "Connaissance islamique quotidienne en 11 langues" },
  es: { title: "La guía del musulmán", subtitle: "Conocimiento islámico diario en 11 idiomas" },
  nl: { title: "De weg van de moslim", subtitle: "Dagelijkse islamitische kennis in 11 talen" },
  it: { title: "Il percorso del musulmano", subtitle: "Conoscenza islamica quotidiana in 11 lingue" },
  ar: { title: "خارطة طريق المسلم", subtitle: "دليل المعرفة اليومية بـ 11 لغة" }
};

// DİL SEÇİCİYİ OLUŞTUR
function renderLanguageSelector() {
  const selector = document.getElementById("home-language-selector");
  selector.innerHTML = "";

  Object.keys(languages).forEach(lang => {
    const btn = document.createElement("button");
    btn.className = "language-button" + (lang === selectedLanguage ? " active" : "");
    btn.textContent = languages[lang];
    btn.onclick = () => {
      selectedLanguage = lang;
      renderHomePage();
    };
    selector.appendChild(btn);
  });
}

// ANA SAYFAYI YÜKLE
async function renderHomePage() {
  roadmapTitle.textContent = titles[selectedLanguage].title;
  homeSubtitle.textContent = titles[selectedLanguage].subtitle;

  renderLanguageSelector();

  const days = await loadDays();
  daysList.innerHTML = "";

  days.forEach(day => {
    const card = document.createElement("div");
    card.className = "day-card";
    card.onclick = () => openDay(day.file);

    card.innerHTML = `
      <div class="day-card-title">${day.title}</div>
      <div class="day-card-subtitle">${day.range}</div>
    `;

    daysList.appendChild(card);
  });
}

// GÜNÜ AÇ
async function openDay(file) {
  homePage.style.display = "none";
  questionPage.style.display = "block";

  const response = await fetch(file + "?cache=" + Date.now());
  const data = await response.json();

  const content = document.getElementById("question-content");
  content.innerHTML = "";

  // Gün başlığı
  const dayTitle = document.createElement("h2");
  dayTitle.textContent = data.dayTitle[selectedLanguage] || data.dayTitle["tr"];
  content.appendChild(dayTitle);

  // Gün alt başlığı
  const daySubtitle = document.createElement("p");
  daySubtitle.textContent = data.daySubtitle[selectedLanguage] || data.daySubtitle["tr"];
  content.appendChild(daySubtitle);

  // Sorular
  data.questions.forEach(q => {
    const card = document.createElement("div");
    card.className = "question-card";

    const langBlock = document.createElement("div");
    langBlock.className = "language-block";

    const selectedBlock = document.createElement("div");
    selectedBlock.className = "selected-language";
    selectedBlock.textContent = q[selectedLanguage] || q["tr"];

    langBlock.appendChild(selectedBlock);
    card.appendChild(langBlock);

    content.appendChild(card);
  });

  // Dil seçici (soru sayfası)
  const selector = document.getElementById("question-language-selector");
  selector.innerHTML = "";

  Object.keys(languages).forEach(lang => {
    const btn = document.createElement("button");
    btn.className = "language-button" + (lang === selectedLanguage ? " active" : "");
    btn.textContent = languages[lang];
    btn.onclick = () => openDay(file);
    selector.appendChild(btn);
  });
}

// BAŞLAT
renderHomePage();
