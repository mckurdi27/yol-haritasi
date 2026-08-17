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
  ku: { title: "Rêbera
