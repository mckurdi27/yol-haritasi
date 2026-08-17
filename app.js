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
  ar: { title: "خارطة طريق المسلم", subtitle: "دليل المعرفة اليومية بـ 11 لغة" }
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

// ANA SAYFA METİNLERİ
function renderHomeTexts() {
  roadmapTitle.textContent = titles[selectedLanguage].title;
  homeSubtitle.textContent = titles[selectedLanguage].subtitle;
}

// GÜNLERİ LİSTELE
async function renderDays() {
  const days = await loadDays();
  daysList.innerHTML = "";

  days.forEach(day => {
    const card = document.createElement("div");
    card.className = "day-card";

    card.innerHTML = `
      <div class="day-card-title">${day.title}</div>
      <div class="day-card-subtitle">${day.range}. sorular</div>
    `;

    card.onclick = () => openDay(day);
    daysList.appendChild(card);
  });
}

// GÜNÜ AÇ
async function openDay(day) {
  homePage.style.display = "none";
  questionPage.style.display = "block";

  const response = await fetch(day.file + "?cache=" + Date.now());
  const data = await response.json();

  let html = `
    <div class="question-card">
      <h2>${data.dayTitle[selectedLanguage]}</h2>
      <p>${data.daySubtitle[selectedLanguage]}</p>
    </div>
  `;

  data.questions.forEach(q => {
    html += `
      <div class="question-card">
        <h3>${q[selectedLanguage].q}</h3>
        <p>${q[selectedLanguage].a}</p>
      </div>
    `;
  });

  document.getElementById("question-content").innerHTML = html;
}

// BAŞLAT
renderHomeTexts();
renderDays();
renderLanguageSelector("home-language-selector");
renderLanguageSelector("question-language-selector");
