// JSON YÜKLEME
async function loadDays() {
  const response = await fetch("./days.json"); // ÖNEMLİ: index.json değil days.json
  const data = await response.json();
  return data.days;
}

// SAYFA ELEMENTLERİ
const homePage = document.getElementById("home-page");
const questionPage = document.getElementById("question-page");
const daysList = document.getElementById("days-list");
const roadmapTitle = document.querySelector(".roadmap-title");
const homeSubtitle = document.querySelector(".home-subtitle");

// DİL VERİLERİ
const languages = {
  tr: "🇹🇷",
  ar: "🇸🇦",
  en: "🇬🇧"
};

let selectedLanguage = "tr";
let selectedDay = null;

// ANA SAYFA METİNLERİ
const titles = {
  tr: {
    title: "İslâm'ı Öğrenme Yol Haritası",
    subtitle: "30 Günde Temel Bilgiler"
  },
  en: {
    title: "Islam Learning Roadmap",
    subtitle: "Essential Knowledge in 30 Days"
  },
  ar: {
    title: "خارطة طريق تعلم الإسلام",
    subtitle: "أساسيات خلال 30 يومًا"
  }
};

// DİL BUTONLARI
function renderLanguageSelector(targetId) {
  const container = document.getElementById(targetId);
  container.innerHTML = "";

  Object.keys(languages).forEach(lang => {
    const btn = document.createElement("button");
    btn.className = "language-button";
    btn.textContent = languages[lang];

    if (lang === selectedLanguage) btn.classList.add("active");

    btn.onclick = () => {
      selectedLanguage = lang;
      renderHomeTexts();
      renderDays();
      renderLanguageSelector(targetId);
    };

    container.appendChild(btn);
  });
}

// ANA SAYFA METİNLERİ YÜKLEME
function renderHomeTexts() {
  roadmapTitle.textContent = titles[selectedLanguage].title;
  homeSubtitle.textContent = titles[selectedLanguage].subtitle;
}

// GÜNLERİ LİSTELEME
async function renderDays() {
  const days = await loadDays();
  daysList.innerHTML = "";

  days.forEach(day => {
    const card = document.createElement("div");
    card.className = "day-card";

    card.innerHTML = `
      <div class="day-card-title">${day.title}</div>
      <div class="day-card-subtitle">Aralık: ${day.range}</div>
    `;

    card.onclick = () => openDay(day);
    daysList.appendChild(card);
  });
}

// GÜN SAYFASINI AÇMA
function openDay(day) {
  selectedDay = day;

  homePage.style.display = "none";
  questionPage.style.display = "block";

  document.getElementById("question-content").innerHTML = `
    <div class="question-card">
      <h2>${day.title}</h2>
      <p>Bu bölümde ${day.range} arasındaki içerik gösterilecek.</p>
    </div>
  `;
}

// GERİ DÖNÜŞ
function goBack() {
  questionPage.style.display = "none";
  homePage.style.display = "block";
}

// BAŞLAT
renderHomeTexts();
renderDays();
renderLanguageSelector("home-language-selector");
renderLanguageSelector("question-language-selector");
