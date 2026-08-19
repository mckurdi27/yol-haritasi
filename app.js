/* ========================================
   BİR MÜSLÜMANIN YOL HARİTASI
   16 DİL
   APP.JS

   TTS:
   - Parçalı konuşma
   - Pause / Devam / Durdur
   - Yavaşlat / Hızlandır / Çok hızlandır
   - TTS ayarları

   SÖZLÜK (day-00 + online):
   - Seçili dil üstte
   - 16 dil çeviri
   - Yerel day-00.json
   - İnternet (MyMemory) + önbellek
   - İsteğe bağlı Wikipedia özeti
   - Sadece sözlükte 🎤 konuşarak yazma
========================================= */


/* =========================================
   DİLLER (sabit sıra)
========================================= */

const LANGS = [
  { key: "tr", flag: "🇹🇷", name: "Türkçe" },
  { key: "en", flag: "🇬🇧", name: "English" },
  { key: "de", flag: "🇩🇪", name: "Deutsch" },
  { key: "nl", flag: "🇳🇱", name: "Nederlands" },
  { key: "fr", flag: "🇫🇷", name: "Français" },
  { key: "ru", flag: "🇷🇺", name: "Русский" },
  { key: "ku", flag: "🇹🇯", name: "Kurmancî" },
  { key: "tt", flag: "🇧🇬", name: "Tatarca" },
  { key: "ar", flag: "🇸🇦", name: "العربية" },
  { key: "es", flag: "🇪🇸", name: "Español" },
  { key: "it", flag: "🇮🇹", name: "Italiano" },
  { key: "pt", flag: "🇵🇹", name: "Português" },
  { key: "ko", flag: "🇰🇷", name: "한국어" },
  { key: "vi", flag: "🇻🇳", name: "Tiếng Việt" },
  { key: "ja", flag: "🇯🇵", name: "日本語" },
  { key: "zh", flag: "🇨🇳", name: "中文" }
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
    noDays: "Henüz gün bulunamadı.",
    dictionary: "Sözlük",
    entriesCount: "madde",
    onlineLoading: "🌐 İnternetten çeviriler alınıyor...",
    onlineReady: "🌐 İnternet çevirisi hazır.",
    onlineCache: "📦 Önbellekten gösteriliyor.",
    onlineFail: "İnternetten sonuç alınamadı.",
    onlineError: "İnternet bağlantısı / çeviri hatası.",
    localOnly: "Yerel sözlükten gösteriliyor.",
    loadingShort: "Yükleniyor..."
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
    noDays: "No days found yet.",
    dictionary: "Dictionary",
    entriesCount: "entries",
    onlineLoading: "🌐 Fetching translations online...",
    onlineReady: "🌐 Online translation ready.",
    onlineCache: "📦 Showing cached online result.",
    onlineFail: "No online result.",
    onlineError: "Online lookup failed.",
    localOnly: "Showing local dictionary results.",
    loadingShort: "Loading..."
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
    noDays: "Noch keine Tage gefunden.",
    dictionary: "Wörterbuch",
    entriesCount: "Einträge",
    onlineLoading: "🌐 Übersetzungen werden geladen...",
    onlineReady: "🌐 Online-Übersetzung bereit.",
    onlineCache: "📦 Aus dem Cache.",
    onlineFail: "Kein Online-Ergebnis.",
    onlineError: "Online-Abfrage fehlgeschlagen.",
    localOnly: "Lokales Wörterbuch.",
    loadingShort: "Laden..."
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
    noDays: "Nog geen dagen gevonden.",
    dictionary: "Woordenboek",
    entriesCount: "items",
    onlineLoading: "🌐 Online vertalingen ophalen...",
    onlineReady: "🌐 Online vertaling klaar.",
    onlineCache: "📦 Uit cache.",
    onlineFail: "Geen online resultaat.",
    onlineError: "Online opzoeken mislukt.",
    localOnly: "Lokale woordenboekresultaten.",
    loadingShort: "Laden..."
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
    noDays: "Aucun jour trouvé.",
    dictionary: "Dictionnaire",
    entriesCount: "entrées",
    onlineLoading: "🌐 Traductions en ligne...",
    onlineReady: "🌐 Traduction en ligne prête.",
    onlineCache: "📦 Depuis le cache.",
    onlineFail: "Aucun résultat en ligne.",
    onlineError: "Échec de la recherche en ligne.",
    localOnly: "Résultats du dictionnaire local.",
    loadingShort: "Chargement..."
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
    noDays: "Дни пока не найдены.",
    dictionary: "Словарь",
    entriesCount: "статей",
    onlineLoading: "🌐 Загрузка переводов...",
    onlineReady: "🌐 Онлайн-перевод готов.",
    onlineCache: "📦 Из кэша.",
    onlineFail: "Нет онлайн-результата.",
    onlineError: "Ошибка онлайн-поиска.",
    localOnly: "Локальный словарь.",
    loadingShort: "Загрузка..."
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
    noDays: "Hêj roj nehatine dîtin.",
    dictionary: "Ferheng",
    entriesCount: "madde",
    onlineLoading: "🌐 Wergerên înternetê têne stendin...",
    onlineReady: "🌐 Wergera online amade ye.",
    onlineCache: "📦 Ji cacheê.",
    onlineFail: "Encama online tune.",
    onlineError: "Lêgerîna online têk çû.",
    localOnly: "Ferhenga herêmî.",
    loadingShort: "Tê barkirin..."
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
    noDays: "Әлегә көннәр табылмады.",
    dictionary: "Сүзлек",
    entriesCount: "мәкалә",
    onlineLoading: "🌐 Интернет тәрҗемәләре алына...",
    onlineReady: "🌐 Онлайн тәрҗемә әзер.",
    onlineCache: "📦 Кэштан.",
    onlineFail: "Онлайн нәтиҗә юк.",
    onlineError: "Онлайн эзләү хатасы.",
    localOnly: "Җирле сүзлек.",
    loadingShort: "Йөкләнә..."
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
    noDays: "لَمْ يَتِمَّ الْعُثُورُ عَلَى أَيَّامٍ بَعْدُ.",
    dictionary: "الْقَامُوسُ",
    entriesCount: "مَادَّة",
    onlineLoading: "🌐 جَارٍ جَلْبُ التَّرْجَمَاتِ...",
    onlineReady: "🌐 التَّرْجَمَةُ جَاهِزَةٌ.",
    onlineCache: "📦 مِنَ الذَّاكِرَةِ الْمُؤَقَّتَةِ.",
    onlineFail: "لَا نَتِيجَةَ عَبْرَ الْإِنْتَرْنِتِ.",
    onlineError: "فَشِلَ الْبَحْثُ عَبْرَ الْإِنْتَرْنِتِ.",
    localOnly: "مِنَ الْقَامُوسِ الْمَحَلِّيِّ.",
    loadingShort: "جَارٍ التَّحْمِيلُ..."
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
    noDays: "Todavía no se encontraron días.",
    dictionary: "Diccionario",
    entriesCount: "entradas",
    onlineLoading: "🌐 Obteniendo traducciones...",
    onlineReady: "🌐 Traducción en línea lista.",
    onlineCache: "📦 Desde caché.",
    onlineFail: "Sin resultado en línea.",
    onlineError: "Error de búsqueda en línea.",
    localOnly: "Diccionario local.",
    loadingShort: "Cargando..."
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
    noDays: "Nessun giorno trovato.",
    dictionary: "Dizionario",
    entriesCount: "voci",
    onlineLoading: "🌐 Scarico traduzioni...",
    onlineReady: "🌐 Traduzione online pronta.",
    onlineCache: "📦 Dalla cache.",
    onlineFail: "Nessun risultato online.",
    onlineError: "Ricerca online non riuscita.",
    localOnly: "Dizionario locale.",
    loadingShort: "Caricamento..."
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
    noDays: "Ainda não foram encontrados dias.",
    dictionary: "Dicionário",
    entriesCount: "entradas",
    onlineLoading: "🌐 A obter traduções...",
    onlineReady: "🌐 Tradução online pronta.",
    onlineCache: "📦 Da cache.",
    onlineFail: "Sem resultado online.",
    onlineError: "Falha na pesquisa online.",
    localOnly: "Dicionário local.",
    loadingShort: "A carregar..."
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
    noDays: "아직 일차가 없습니다.",
    dictionary: "사전",
    entriesCount: "항목",
    onlineLoading: "🌐 온라인 번역 가져오는 중...",
    onlineReady: "🌐 온라인 번역 준비됨.",
    onlineCache: "📦 캐시에서 표시.",
    onlineFail: "온라인 결과 없음.",
    onlineError: "온라인 검색 실패.",
    localOnly: "로컬 사전 결과.",
    loadingShort: "로딩 중..."
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
    noDays: "Chưa tìm thấy ngày nào.",
    dictionary: "Từ điển",
    entriesCount: "mục",
    onlineLoading: "🌐 Đang lấy bản dịch online...",
    onlineReady: "🌐 Bản dịch online sẵn sàng.",
    onlineCache: "📦 Từ bộ nhớ đệm.",
    onlineFail: "Không có kết quả online.",
    onlineError: "Lỗi tra cứu online.",
    localOnly: "Từ điển cục bộ.",
    loadingShort: "Đang tải..."
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
    noDays: "まだ日がありません。",
    dictionary: "辞典",
    entriesCount: "項目",
    onlineLoading: "🌐 オンライン翻訳を取得中...",
    onlineReady: "🌐 オンライン翻訳の準備完了。",
    onlineCache: "📦 キャッシュから表示。",
    onlineFail: "オンライン結果なし。",
    onlineError: "オンライン検索に失敗。",
    localOnly: "ローカル辞典の結果。",
    loadingShort: "読み込み中..."
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
    noDays: "尚未找到任何天数。",
    dictionary: "词典",
    entriesCount: "词条",
    onlineLoading: "🌐 正在获取在线翻译...",
    onlineReady: "🌐 在线翻译已就绪。",
    onlineCache: "📦 来自缓存。",
    onlineFail: "无在线结果。",
    onlineError: "在线查询失败。",
    localOnly: "本地词典结果。",
    loadingShort: "加载中..."
  }
};


/* =========================================
   GENEL AYARLAR
========================================= */

let selectedLang = localStorage.getItem("selectedLang") || "tr";
if (!UI[selectedLang]) selectedLang = "tr";

let days = [];
let currentDayIndex = 0;
let currentQuestionIndex = 0;

/* Sözlük */
let dictionaryQuery = "";
let dictionarySearchTimer = null;
let onlineLookupToken = 0;
let lastOnlineEntry = null;
let speechRecognition = null;
let isDictListening = false;


/* =========================================
   ONLINE SÖZLÜK AYARLARI
========================================= */

const ONLINE_DICT = {
  enabled: true,
  // true: yerelde bulsa bile internetten de sor
  alwaysOnline: false,
  // MyMemory limit artırmak için e-posta (opsiyonel)
  email: "",
  timeout: 12000,
  cachePrefix: "dict_cache_v1_",
  cacheDays: 7,
  // Wikipedia kısa özet
  wikiSummary: true
};

const API_LANG = {
  tr: "tr",
  en: "en",
  de: "de",
  nl: "nl",
  fr: "fr",
  ru: "ru",
  ku: "ku",
  tt: "tt",
  ar: "ar",
  es: "es",
  it: "it",
  pt: "pt",
  ko: "ko",
  vi: "vi",
  ja: "ja",
  zh: "zh-CN"
};


/* =========================================
   TTS AYARLARI
========================================= */

let speechRate = Number(localStorage.getItem("ttsRate") || "1");
let speechPitch = Number(localStorage.getItem("ttsPitch") || "1");
let selectedVoiceName = localStorage.getItem("ttsVoice") || "";
let speechUtterance = null;
let selectedVoice = null;

let slowLevel = 0;
let fastLevel = 0;
let veryFastLevel = 0;

let speechPaused = false;
let speechIsSpeaking = false;
let speechManualPaused = false;
let speechCurrentText = "";

let speechChunks = [];
let speechChunkIndex = 0;
let speechChunkSession = 0;
let speechChunkWordCount = 7;
let speechStarting = false;


/* =========================================
   BAŞLAT
========================================= */

document.addEventListener("DOMContentLoaded", init);

async function init() {
  document.documentElement.lang = selectedLang;
  renderHome();
  await loadDays();
  ensureDictionaryDay();
  loadSavedVoice();
  updateSpeedLevelsFromRate();
  renderHome();
}


/* =========================================
   TTS SESLERİ
========================================= */

function loadSavedVoice() {
  if (!("speechSynthesis" in window)) return;

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return;

  selectedVoice = null;

  if (selectedVoiceName) {
    selectedVoice =
      voices.find(v => v.name === selectedVoiceName) || null;
  }

  if (!selectedVoice) {
    const speechLang = getSpeechLanguage(selectedLang);
    selectedVoice =
      voices.find(v => v.lang === speechLang) ||
      voices.find(
        v =>
          v.lang &&
          v.lang
            .toLowerCase()
            .startsWith(speechLang.split("-")[0].toLowerCase())
      ) ||
      null;
  }
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    loadSavedVoice();
    const select = document.querySelector(".tts-voice-select");
    if (select) populateVoiceSelect(select);
  };
}


/* =========================================
   GÜNLERİ YÜKLE (0 = sözlük)
========================================= */

async function loadDays() {
  days = [];
  console.log("📚 Günler yükleniyor...");

  const requests = [];

  for (let number = 0; number <= 30; number++) {
    const fileName = `day-${String(number).padStart(2, "0")}.json`;
    const primaryFile = `data/${fileName}`;
    const fallbackFile = fileName;
    const primaryUrl = `${primaryFile}?v=${Date.now()}`;
    const fallbackUrl = `${fallbackFile}?v=${Date.now()}`;

    requests.push(
      fetch(primaryUrl, { method: "GET", cache: "no-store" })
        .then(async response => {
          if (!response.ok) {
            // Eski/yerel paket yapısı için geri dönüş yolu.
            return fetch(fallbackUrl, { method: "GET", cache: "no-store" });
          }
          return response;
        })
        .then(async response => {
          if (!response.ok) {
            console.warn(`Gün ${number} mevcut değil:`, response.status);
            return null;
          }

          const text = await response.text();
          if (!text.trim()) {
            console.warn(`Gün ${number} boş:`, primaryFile);
            return null;
          }

          let data;
          try {
            data = JSON.parse(text);
          } catch (error) {
            console.error(`❌ Gün ${number} JSON hatası:`, error);
            return null;
          }

          const type =
            data.type === "dictionary" ||
            (number === 0 && Array.isArray(data.entries))
              ? "dictionary"
              : "day";

          if (type === "dictionary") {
            const entries = Array.isArray(data.entries) ? data.entries : [];
            console.log(`✅ Sözlük yüklendi: ${entries.length} madde`);
            return {
              number: 0,
              type: "dictionary",
              questions: [],
              entries,
              info: data
            };
          }

          const questions = Array.isArray(data) ? data : data.questions;
          if (!Array.isArray(questions) || !questions.length) {
            console.warn(`⚠️ Gün ${number}: soru yok.`, primaryFile);
            return null;
          }

          console.log(`✅ Gün ${number} yüklendi: ${questions.length} soru`);
          return {
            number,
            type: "day",
            questions,
            entries: [],
            info: Array.isArray(data) ? {} : data
          };
        })
        .catch(error => {
          console.error(`❌ Gün ${number} yüklenemedi:`, error);
          return null;
        })
    );
  }

  const results = await Promise.all(requests);
  days = results
    .filter(item => item !== null)
    .sort((a, b) => a.number - b.number);
}

/* day-00 yoksa sanal online sözlük günü ekle */
function ensureDictionaryDay() {
  const hasDict = days.some(d => d.type === "dictionary");
  if (hasDict) return;

  days.unshift({
    number: 0,
    type: "dictionary",
    questions: [],
    entries: [],
    info: {
      day: 0,
      type: "dictionary",
      dayTitle: Object.fromEntries(
        LANGS.map(l => [l.key, UI[l.key]?.dictionary || "Dictionary"])
      ),
      daySubtitle: {
        tr: "Seçili dilde yaz — internetten 16 dile çevir",
        en: "Type in the selected language — translate to 16 languages online",
        de: "In der gewählten Sprache tippen — online in 16 Sprachen",
        nl: "Typ in de geselecteerde taal — online naar 16 talen",
        fr: "Écrivez dans la langue choisie — traduisez en 16 langues",
        ru: "Пишите на выбранном языке — перевод на 16 языков",
        ku: "Bi zimanê hilbijartî binivîse — 16 ziman online",
        tt: "Сайланган телдә яз — 16 телгә онлайн",
        ar: "اُكْتُبْ بِاللُّغَةِ الْمُخْتَارَةِ — تَرْجَمَةٌ إِلَى ١٦ لُغَةً",
        es: "Escribe en el idioma seleccionado — 16 idiomas en línea",
        it: "Scrivi nella lingua selezionata — 16 lingue online",
        pt: "Escreva no idioma selecionado — 16 idiomas online",
        ko: "선택한 언어로 입력 — 16개 언어 온라인 번역",
        vi: "Gõ bằng ngôn ngữ đã chọn — dịch 16 ngôn ngữ online",
        ja: "選択言語で入力 — 16言語オンライン翻訳",
        zh: "用所选语言输入 — 在线翻译成16种语言"
      }
    }
  });

  console.log("ℹ️ day-00 yok: sanal online sözlük eklendi.");
}


/* =========================================
   YARDIMCILAR
========================================= */

function getCurrentDayData() {
  return days[currentDayIndex] || null;
}

function isDictionaryPage() {
  const d = getCurrentDayData();
  return !!(d && d.type === "dictionary");
}

function t(key, fallback = "") {
  return (UI[selectedLang] && UI[selectedLang][key]) || fallback;
}


/* =========================================
   ANA SAYFA
========================================= */

function renderHome() {
  stopSpeech();
  stopDictionaryMic();

  const home = document.querySelector("#home-page");
  const questionPage = document.querySelector("#question-page");
  if (!home || !questionPage) return;

  home.style.display = "block";
  questionPage.style.display = "none";

  const selector = document.querySelector("#home-language-selector");
  if (selector) renderLanguageButtons(selector);

  const roadmapTitle = home.querySelector(".roadmap-title");
  if (roadmapTitle) {
    roadmapTitle.innerHTML = "";
    const title = UI[selectedLang].title;
    const words = title.trim().split(/\s+/);
    const middle = Math.ceil(words.length / 2);
    const firstLine = document.createElement("div");
    firstLine.textContent = words.slice(0, middle).join(" ");
    const secondLine = document.createElement("div");
    secondLine.textContent = words.slice(middle).join(" ");
    roadmapTitle.appendChild(firstLine);
    roadmapTitle.appendChild(secondLine);
  }

  const subtitle = home.querySelector(".home-subtitle");
  if (subtitle) subtitle.textContent = UI[selectedLang].subtitle;

  const sectionTitle = home.querySelector(".days-section h2");
  if (sectionTitle) sectionTitle.textContent = UI[selectedLang].days;

  const list = document.querySelector("#days-list");
  if (!list) return;
  list.innerHTML = "";

  if (!days.length) {
    const message = document.createElement("p");
    message.className = "loading-days";
    message.textContent = UI[selectedLang].noDays;
    list.appendChild(message);
    return;
  }

  days.forEach((dayData, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "day-card";
    if (dayData.type === "dictionary") card.classList.add("dictionary-card-home");

    const title = getDayTitle(dayData);
    const subtitleText = getDaySubtitle(dayData);

    const titleLine = document.createElement("div");
    titleLine.className = "day-card-title";

    if (dayData.type === "dictionary") {
      const count = dayData.entries.length;
      titleLine.textContent = count
        ? `${title} · ${count} ${t("entriesCount", "madde")} · 🌐`
        : `${title} · 🌐 online`;
    } else {
      titleLine.textContent =
        `${title} · ${dayData.questions.length} ${UI[selectedLang].questionCount}`;
    }

    card.appendChild(titleLine);

    if (subtitleText) {
      const subtitleLine = document.createElement("div");
      subtitleLine.className = "day-card-subtitle";
      subtitleLine.textContent = subtitleText;
      card.appendChild(subtitleLine);
    }

    card.addEventListener("click", () => {
      stopSpeech();
      stopDictionaryMic();
      currentDayIndex = index;
      currentQuestionIndex = 0;
      dictionaryQuery = "";
      lastOnlineEntry = null;

      if (dayData.type === "dictionary") renderDictionary();
      else renderQuestion();
    });

    list.appendChild(card);
  });
}


/* =========================================
   BAŞLIKLAR
========================================= */

function getDayTitle(dayData) {
  const info = dayData.info || {};

  if (info.dayTitle && typeof info.dayTitle === "object") {
    return (
      info.dayTitle[selectedLang] ||
      info.dayTitle.tr ||
      (dayData.type === "dictionary"
        ? t("dictionary", "Sözlük")
        : `${dayData.number}. Gün`)
    );
  }

  if (info.title && typeof info.title === "object") {
    return (
      info.title[selectedLang] ||
      info.title.tr ||
      `${dayData.number}. Gün`
    );
  }

  if (dayData.type === "dictionary") return t("dictionary", "Sözlük");

  const first = (dayData.questions && dayData.questions[0]) || {};
  if (first.dayTitle && typeof first.dayTitle === "object") {
    return (
      first.dayTitle[selectedLang] ||
      first.dayTitle.tr ||
      `${dayData.number}. Gün`
    );
  }
  if (typeof first.dayTitle === "string") return first.dayTitle;
  return `${dayData.number}. Gün`;
}

function getDaySubtitle(dayData) {
  const info = dayData.info || {};
  if (info.daySubtitle && typeof info.daySubtitle === "object") {
    return info.daySubtitle[selectedLang] || info.daySubtitle.tr || "";
  }
  if (info.subtitle && typeof info.subtitle === "object") {
    return info.subtitle[selectedLang] || info.subtitle.tr || "";
  }
  const first = (dayData.questions && dayData.questions[0]) || {};
  if (first.daySubtitle && typeof first.daySubtitle === "object") {
    return first.daySubtitle[selectedLang] || first.daySubtitle.tr || "";
  }
  if (typeof first.daySubtitle === "string") return first.daySubtitle;
  return "";
}


/* =========================================
   DİL BUTONLARI
========================================= */

function renderLanguageButtons(container) {
  if (!container) return;
  container.innerHTML = "";

  LANGS.forEach(language => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "language-button";
    button.textContent = language.flag;
    button.title = language.name;
    button.setAttribute("aria-label", language.name);
    if (language.key === selectedLang) button.classList.add("active");

    button.addEventListener("click", () => {
      stopSpeech();
      stopDictionaryMic();
      closeTTSSettings();

      selectedLang = language.key;
      localStorage.setItem("selectedLang", selectedLang);
      document.documentElement.lang = selectedLang;

      selectedVoiceName = localStorage.getItem("ttsVoice") || "";
      loadSavedVoice();

      const questionPage = document.querySelector("#question-page");
      const dayData = getCurrentDayData();

      if (
        questionPage &&
        questionPage.style.display !== "none" &&
        dayData &&
        dayData.type === "dictionary"
      ) {
        renderDictionary();
      } else if (questionPage && questionPage.style.display !== "none") {
        renderQuestion();
      } else {
        renderHome();
      }
    });

    container.appendChild(button);
  });
}


/* =========================================
   SORU SAYFASI
========================================= */

function renderQuestion() {
  stopSpeech();
  stopDictionaryMic();
  closeTTSSettings();

  const home = document.querySelector("#home-page");
  const page = document.querySelector("#question-page");
  if (!home || !page) return;

  if (!days.length || !days[currentDayIndex]) {
    renderHome();
    return;
  }

  const dayData = days[currentDayIndex];
  if (dayData.type === "dictionary") {
    renderDictionary();
    return;
  }

  home.style.display = "none";
  page.style.display = "block";

  const question = dayData.questions[currentQuestionIndex];
  if (!question) return;

  const content = document.querySelector("#question-content");
  if (!content) return;
  content.innerHTML = "";

  const dayTitle = document.createElement("h2");
  dayTitle.className = "question-day-title";
  dayTitle.textContent = getDayTitle(dayData);
  content.appendChild(dayTitle);

  addQuestionLanguageSelector();
  renderTTSControls({ showMicrophone: false });

  const card = document.createElement("article");
  card.className = "question-card";

  // Seçili dil her zaman ilk sırada; diğer diller sabit sırayı korur.
  const languageOrder = [
    selectedLang,
    ...LANGS.map(l => l.key).filter(key => key !== selectedLang)
  ];

  let sourcesRendered = false;

  languageOrder.forEach(languageKey => {
    const language = LANGS.find(item => item.key === languageKey);
    if (!language) return;
    const data = question[languageKey];
    if (!data) return;

    const block = document.createElement("div");
    block.className = "language-block";
    if (languageKey === "ar") {
      block.classList.add("arabic-language");
      block.setAttribute("dir", "rtl");
    }
    if (languageKey === selectedLang) block.classList.add("selected-language");

    const q = document.createElement("div");
    q.className = "question-line";
    q.textContent = `${language.flag} ${question.id}. ${data.q}`;

    const a = document.createElement("div");
    a.className = "answer-line";
    a.textContent = `${language.flag} ${question.id}. ${data.a}`;

    block.appendChild(q);
    block.appendChild(a);
    card.appendChild(block);

    // Kaynaklar seçili dil bloğunun hemen altında, yani her zaman 2. sırada.
    if (languageKey === selectedLang && !sourcesRendered) {
      if (Array.isArray(question.sources) && question.sources.length) {
        card.appendChild(renderSources(question.sources));
      }
      sourcesRendered = true;
    }
  });

  // Seçili dil veri içinde yoksa kaynakları yine en üstteki mevcut dilin altına koy.
  if (!sourcesRendered && Array.isArray(question.sources) && question.sources.length) {
    const firstLanguageBlock = card.querySelector('.language-block');
    const sourcesBox = renderSources(question.sources);
    if (firstLanguageBlock) {
      firstLanguageBlock.insertAdjacentElement('afterend', sourcesBox);
    } else {
      card.appendChild(sourcesBox);
    }
  }

  content.appendChild(card);

  const top = document.querySelector("#top-navigation");
  const bottom = document.querySelector("#bottom-navigation");
  if (top) {
    top.innerHTML = "";
    top.appendChild(createNavigation(question));
  }
  if (bottom) {
    bottom.innerHTML = "";
    bottom.appendChild(createNavigation(question));
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}


/* =========================================
   SÖZLÜK UI
========================================= */

function getDictUI(key) {
  const info = (getCurrentDayData() && getCurrentDayData().info) || {};
  const fromJson = info.ui && info.ui[key];
  if (fromJson && typeof fromJson === "object") {
    return fromJson[selectedLang] || fromJson.tr || "";
  }

  const fallback = {
    searchPlaceholder: {
      tr: "Seçili dilde kelime yaz (yerel + internet)...",
      en: "Type a word in the selected language (local + online)...",
      de: "Wort eingeben (lokal + online)...",
      nl: "Typ een woord (lokaal + online)...",
      fr: "Tapez un mot (local + en ligne)...",
      ru: "Введите слово (локально + онлайн)...",
      ku: "Pelekê binivîse (herêmî + online)...",
      tt: "Сүз яз (җирле + онлайн)...",
      ar: "اُكْتُبْ كَلِمَةً (مَحَلِّيّ + إِنْتَرْنِت)...",
      es: "Escribe una palabra (local + online)...",
      it: "Scrivi una parola (locale + online)...",
      pt: "Escreva uma palavra (local + online)...",
      ko: "단어 입력 (로컬 + 온라인)...",
      vi: "Gõ một từ (cục bộ + online)...",
      ja: "単語を入力（ローカル＋オンライン）...",
      zh: "输入词语（本地 + 在线）..."
    },
    noResult: {
      tr: "Sonuç bulunamadı.",
      en: "No results found.",
      de: "Keine Ergebnisse gefunden.",
      nl: "Geen resultaten gevonden.",
      fr: "Aucun résultat trouvé.",
      ru: "Результаты не найдены.",
      ku: "Encamek nehat dîtin.",
      tt: "Нәтиҗә табылмады.",
      ar: "لَمْ يُعْثَرْ عَلَى نَتَائِجَ.",
      es: "No se encontraron resultados.",
      it: "Nessun risultato trovato.",
      pt: "Nenhum resultado encontrado.",
      ko: "결과가 없습니다.",
      vi: "Không tìm thấy kết quả.",
      ja: "結果が見つかりません。",
      zh: "未找到结果。"
    },
    listening: {
      tr: "Dinleniyor...",
      en: "Listening...",
      de: "Hört zu...",
      nl: "Luisteren...",
      fr: "Écoute...",
      ru: "Слушаю...",
      ku: "Guhdarî dike...",
      tt: "Тыңлый...",
      ar: "جَارٍ الِاسْتِمَاعُ...",
      es: "Escuchando...",
      it: "In ascolto...",
      pt: "A ouvir...",
      ko: "듣는 중...",
      vi: "Đang nghe...",
      ja: "聞き取り中...",
      zh: "正在听..."
    },
    micTitle: {
      tr: "Konuşarak yaz",
      en: "Write by speaking",
      de: "Per Sprache schreiben",
      nl: "Schrijven door te spreken",
      fr: "Écrire en parlant",
      ru: "Писать голосом",
      ku: "Bi axaftinê binivîse",
      tt: "Сөйләп яз",
      ar: "اُكْتُبْ بِالتَّحَدُّثِ",
      es: "Escribir hablando",
      it: "Scrivi parlando",
      pt: "Escrever falando",
      ko: "말해서 쓰기",
      vi: "Nói để viết",
      ja: "話して入力",
      zh: "语音输入"
    }
  };

  if (fallback[key]) {
    return fallback[key][selectedLang] || fallback[key].tr || "";
  }
  return "";
}

function normalizeDictText(text) {
  return String(text || "")
    .toLocaleLowerCase(selectedLang)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s'-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}


/* =========================================
   ONLINE: CACHE / FETCH / TRANSLATE
========================================= */

function dictCacheKey(sourceLang, text) {
  return ONLINE_DICT.cachePrefix + sourceLang + "_" + normalizeDictText(text);
}

function readDictCache(sourceLang, text) {
  try {
    const raw = localStorage.getItem(dictCacheKey(sourceLang, text));
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !data.expire || Date.now() > data.expire) {
      localStorage.removeItem(dictCacheKey(sourceLang, text));
      return null;
    }
    return data.entry || null;
  } catch (e) {
    return null;
  }
}

function writeDictCache(sourceLang, text, entry) {
  try {
    const expire =
      Date.now() + ONLINE_DICT.cacheDays * 24 * 60 * 60 * 1000;
    localStorage.setItem(
      dictCacheKey(sourceLang, text),
      JSON.stringify({ expire, entry })
    );
  } catch (e) {}
}

async function fetchWithTimeout(url, ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function translateMyMemory(text, fromLang, toLang) {
  if (!text) return "";
  if (fromLang === toLang) return text;

  const from = API_LANG[fromLang] || fromLang;
  const to = API_LANG[toLang] || toLang;

  let url =
    "https://api.mymemory.translated.net/get?q=" +
    encodeURIComponent(text) +
    "&langpair=" +
    encodeURIComponent(from + "|" + to);

  if (ONLINE_DICT.email) {
    url += "&de=" + encodeURIComponent(ONLINE_DICT.email);
  }

  const res = await fetchWithTimeout(url, ONLINE_DICT.timeout);
  if (!res.ok) throw new Error("HTTP " + res.status);

  const data = await res.json();
  const translated =
    data && data.responseData && data.responseData.translatedText
      ? String(data.responseData.translatedText).trim()
      : "";

  if (
    !translated ||
    /INVALID|QUERY LENGTH|MYMEMORY WARNING|PLEASE SELECT/i.test(translated)
  ) {
    return "";
  }

  return translated;
}

async function fetchWikiSummary(text, lang) {
  if (!ONLINE_DICT.wikiSummary) return "";

  const wikiLang =
    {
      tr: "tr",
      en: "en",
      de: "de",
      nl: "nl",
      fr: "fr",
      ru: "ru",
      ar: "ar",
      es: "es",
      it: "it",
      pt: "pt",
      ko: "ko",
      vi: "vi",
      ja: "ja",
      zh: "zh",
      ku: "ckb",
      tt: "tt"
    }[lang] || "en";

  const title = encodeURIComponent(String(text).trim().replace(/\s+/g, "_"));
  const url =
    `https://${wikiLang}.wikipedia.org/api/rest_v1/page/summary/` + title;

  try {
    const res = await fetchWithTimeout(url, ONLINE_DICT.timeout);
    if (!res.ok) return "";
    const data = await res.json();
    if (data.type === "disambiguation") return "";
    return (data.extract || "").trim();
  } catch (e) {
    return "";
  }
}

async function buildOnlineDictionaryEntry(text, sourceLang) {
  const q = String(text || "").trim();
  if (!q) return null;

  const cached = readDictCache(sourceLang, q);
  if (cached) return { ...cached, _source: "cache" };

  const entry = {
    id: "online-" + Date.now(),
    _source: "online",
    _query: q,
    _from: sourceLang
  };

  entry[sourceLang] = q;

  const tasks = LANGS.map(async lang => {
    if (lang.key === sourceLang) return;
    try {
      entry[lang.key] = await translateMyMemory(q, sourceLang, lang.key);
    } catch (e) {
      entry[lang.key] = "";
    }
  });

  await Promise.all(tasks);

  const hasAny = LANGS.some(l => l.key !== sourceLang && entry[l.key]);
  if (!hasAny) return null;

  writeDictCache(sourceLang, q, entry);
  return entry;
}

async function runOnlineDictionaryLookup(query, force = false) {
  if (!ONLINE_DICT.enabled) return;

  const q = String(query || "").trim();
  const status = document.querySelector("#dictionary-status");

  if (q.length < 2) {
    lastOnlineEntry = null;
    if (status) status.textContent = "";
    renderDictionaryResults({ loading: false });
    return;
  }

  const dayData = getCurrentDayData();
  const localEntries = (dayData && dayData.entries) || [];
  const nq = normalizeDictText(q);

  const strongLocal = localEntries.some(
    e => normalizeDictText(e[selectedLang]) === nq
  );

  if (!force && strongLocal && !ONLINE_DICT.alwaysOnline) {
    lastOnlineEntry = null;
    if (status) status.textContent = t("localOnly");
    renderDictionaryResults({ loading: false });
    return;
  }

  const token = ++onlineLookupToken;
  if (status) status.textContent = t("onlineLoading");
  renderDictionaryResults({ loading: true });

  try {
    const entry = await buildOnlineDictionaryEntry(q, selectedLang);
    if (token !== onlineLookupToken) return;

    if (entry && ONLINE_DICT.wikiSummary) {
      try {
        const wiki = await fetchWikiSummary(q, selectedLang);
        if (token !== onlineLookupToken) return;
        if (wiki) entry._wiki = wiki;
      } catch (e) {}
    }

    if (token !== onlineLookupToken) return;

    lastOnlineEntry = entry;

    if (status) {
      if (entry && entry._source === "cache") status.textContent = t("onlineCache");
      else if (entry) status.textContent = t("onlineReady");
      else status.textContent = t("onlineFail");
    }

    renderDictionaryResults({ loading: false });
  } catch (error) {
    if (token !== onlineLookupToken) return;
    console.warn("Online sözlük hatası:", error);
    lastOnlineEntry = null;
    if (status) status.textContent = t("onlineError");
    renderDictionaryResults({ loading: false });
  }
}


/* =========================================
   SÖZLÜK SAYFASI
========================================= */

function renderDictionary() {
  stopSpeech();
  stopDictionaryMic();
  closeTTSSettings();

  const home = document.querySelector("#home-page");
  const page = document.querySelector("#question-page");
  if (!home || !page) return;

  const dayData = getCurrentDayData();
  if (!dayData || dayData.type !== "dictionary") {
    renderHome();
    return;
  }

  home.style.display = "none";
  page.style.display = "block";

  const content = document.querySelector("#question-content");
  if (!content) return;
  content.innerHTML = "";

  const dayTitle = document.createElement("h2");
  dayTitle.className = "question-day-title";
  dayTitle.textContent = getDayTitle(dayData);
  content.appendChild(dayTitle);

  const subtitleText = getDaySubtitle(dayData);
  if (subtitleText) {
    const sub = document.createElement("p");
    sub.className = "dictionary-subtitle";
    sub.textContent = subtitleText;
    content.appendChild(sub);
  }

  addQuestionLanguageSelector();
  renderTTSControls({ showMicrophone: true });

  const searchWrap = document.createElement("div");
  searchWrap.className = "dictionary-search-wrap";

  const input = document.createElement("input");
  input.type = "search";
  input.id = "dictionary-search-input";
  input.className = "dictionary-search-input";
  input.placeholder = getDictUI("searchPlaceholder");
  input.value = dictionaryQuery;
  input.autocomplete = "off";
  input.setAttribute("aria-label", getDictUI("searchPlaceholder"));
  if (selectedLang === "ar") input.dir = "rtl";

  input.addEventListener("input", () => {
    dictionaryQuery = input.value;
    renderDictionaryResults({ loading: false });

    if (dictionarySearchTimer) clearTimeout(dictionarySearchTimer);
    dictionarySearchTimer = setTimeout(() => {
      runOnlineDictionaryLookup(dictionaryQuery);
    }, 400);
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      if (dictionarySearchTimer) clearTimeout(dictionarySearchTimer);
      runOnlineDictionaryLookup(dictionaryQuery, true);
    }
  });

  searchWrap.appendChild(input);
  content.appendChild(searchWrap);

  const status = document.createElement("div");
  status.id = "dictionary-status";
  status.className = "dictionary-status";
  content.appendChild(status);

  const results = document.createElement("div");
  results.id = "dictionary-results";
  results.className = "dictionary-results";
  content.appendChild(results);

  const top = document.querySelector("#top-navigation");
  const bottom = document.querySelector("#bottom-navigation");
  if (top) {
    top.innerHTML = "";
    top.appendChild(createDictionaryNavigation());
  }
  if (bottom) {
    bottom.innerHTML = "";
    bottom.appendChild(createDictionaryNavigation());
  }

  renderDictionaryResults({ loading: false });

  if (dictionaryQuery.trim().length >= 2) {
    runOnlineDictionaryLookup(dictionaryQuery);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDictionaryResults(options = {}) {
  const box = document.querySelector("#dictionary-results");
  const dayData = getCurrentDayData();
  if (!box || !dayData) return;

  const loading = options.loading === true;
  box.innerHTML = "";

  const entries = dayData.entries || [];
  const q = normalizeDictText(dictionaryQuery);

  let filtered = !q
    ? entries.slice(0, 50)
    : entries.filter(entry => {
        if (normalizeDictText(entry[selectedLang]).includes(q)) return true;
        return LANGS.some(lang =>
          normalizeDictText(entry[lang.key]).includes(q)
        );
      });

  filtered.sort((a, b) => {
    if (!q) return (a.id || 0) - (b.id || 0);
    const aSel = normalizeDictText(a[selectedLang]).includes(q) ? 0 : 1;
    const bSel = normalizeDictText(b[selectedLang]).includes(q) ? 0 : 1;
    if (aSel !== bSel) return aSel - bSel;
    return (a.id || 0) - (b.id || 0);
  });

  const listToShow = [];
  if (lastOnlineEntry) listToShow.push(lastOnlineEntry);
  listToShow.push(...filtered);

  if (loading) {
    const load = document.createElement("p");
    load.className = "dictionary-loading";
    load.textContent = t("loadingShort", "Yükleniyor...");
    box.appendChild(load);
  }

  if (!listToShow.length && !loading) {
    const empty = document.createElement("p");
    empty.className = "dictionary-empty";
    empty.textContent = getDictUI("noResult");
    box.appendChild(empty);
    return;
  }

  listToShow.forEach(entry => {
    box.appendChild(createDictionaryCard(entry));
  });
}

function createDictionaryCard(entry) {
  const card = document.createElement("article");
  card.className = "dictionary-card question-card";

  if (entry._source === "online" || entry._source === "cache") {
    card.classList.add("dictionary-online");
  }

  const main = document.createElement("div");
  main.className = "dictionary-main selected-language";
  if (selectedLang === "ar") {
    main.dir = "rtl";
    main.classList.add("arabic-language");
  }

  const mainLang = LANGS.find(l => l.key === selectedLang);
  const mainWord = document.createElement("div");
  mainWord.className = "dictionary-main-word";
  mainWord.textContent =
    `${mainLang ? mainLang.flag + " " : ""}${entry[selectedLang] || entry._query || ""}`;

  mainWord.addEventListener("click", () => {
    const text = entry[selectedLang] || entry._query || "";
    if (text) speakText(text);
  });

  main.appendChild(mainWord);

  if (entry._source === "online" || entry._source === "cache") {
    const badge = document.createElement("div");
    badge.className = "dictionary-badge";
    badge.textContent = entry._source === "cache" ? "📦 cache" : "🌐 online";
    main.appendChild(badge);
  }

  if (entry._wiki) {
    const wiki = document.createElement("p");
    wiki.className = "dictionary-wiki";
    wiki.textContent = entry._wiki;
    main.appendChild(wiki);
  }

  card.appendChild(main);

  const list = document.createElement("div");
  list.className = "dictionary-translations";

  LANGS.forEach(language => {
    if (language.key === selectedLang) return;
    const value = entry[language.key];
    if (!value) return;

    const row = document.createElement("div");
    row.className = "dictionary-row language-block";
    if (language.key === "ar") {
      row.dir = "rtl";
      row.classList.add("arabic-language");
    }

    const flag = document.createElement("span");
    flag.className = "dictionary-flag";
    flag.textContent = language.flag;

    const langName = document.createElement("span");
    langName.className = "dictionary-lang";
    langName.textContent = language.name;

    const val = document.createElement("span");
    val.className = "dictionary-value";
    val.textContent = value;

    row.appendChild(flag);
    row.appendChild(langName);
    row.appendChild(val);
    row.addEventListener("click", () => speakText(value));
    list.appendChild(row);
  });

  card.appendChild(list);
  return card;
}

function createDictionaryNavigation() {
  const wrapper = document.createElement("div");
  wrapper.className = "navigation-wrapper";

  const homeGroup = document.createElement("div");
  homeGroup.className = "navigation-home-group";

  const home = makeButton(UI[selectedLang].home || "🕋");
  home.className = "navigation-home-button";
  home.setAttribute("aria-label", "Ana Sayfa");
  home.title = "Ana Sayfa";
  home.onclick = () => {
    stopSpeech();
    stopDictionaryMic();
    dictionaryQuery = "";
    lastOnlineEntry = null;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  homeGroup.appendChild(home);
  wrapper.appendChild(homeGroup);
  return wrapper;
}


/* =========================================
   DİL SEÇİCİ (soru/sözlük)
========================================= */

function addQuestionLanguageSelector() {
  let selector = document.querySelector("#language-selector");
  if (!selector) {
    selector = document.createElement("div");
    selector.id = "language-selector";
    selector.className = "language-selector";
    const page = document.querySelector("#question-page");
    const nav = document.querySelector("#top-navigation");
    if (page && nav) page.insertBefore(selector, nav);
  }
  renderLanguageButtons(selector);
}


/* =========================================
   TTS KONTROLLERİ
========================================= */

function renderTTSControls(options = {}) {
  const showMicrophone = options.showMicrophone === true;
  closeTTSSettings();

  const oldControls = document.querySelector("#tts-controls");
  if (oldControls) oldControls.remove();

  const selector = document.querySelector("#language-selector");
  if (!selector) return;

  const controls = document.createElement("div");
  controls.id = "tts-controls";
  controls.className = "tts-controls";

  if (showMicrophone) {
    const micButton = document.createElement("button");
    micButton.type = "button";
    micButton.className = "tts-button tts-mic";
    micButton.id = "tts-mic-button";
    micButton.textContent = "🎤";
    micButton.setAttribute("aria-label", getDictUI("micTitle"));
    micButton.title = getDictUI("micTitle");
    micButton.addEventListener("click", event => {
      event.stopPropagation();
      toggleDictionaryMic();
    });
    controls.appendChild(micButton);
  }

  const slowButton = document.createElement("button");
  slowButton.type = "button";
  slowButton.className = "tts-button tts-slow";
  slowButton.setAttribute("aria-label", "Yavaşlat");
  slowButton.title = "Yavaşlat";
  updateSlowButton(slowButton);
  slowButton.addEventListener("click", event => {
    event.stopPropagation();
    slowLevel++;
    if (slowLevel > 3) slowLevel = 0;
    changeSpeechRate([1, 0.75, 0.5, 0.25][slowLevel]);
    fastLevel = 0;
    
    saveTTSSettings();
    updateSlowButton(slowButton);
    updateFastButtons();
    updatePlayRateDisplay();
  });

  const playButton = document.createElement("button");
  playButton.type = "button";
  playButton.className = "tts-button tts-play";
  const playIcon = document.createElement("span");
  playIcon.className = "tts-play-icon";
  playIcon.textContent = "▶";
  const playRate = document.createElement("span");
  playRate.className = "tts-play-rate hidden";
  playRate.textContent = "1.00x";
  playButton.appendChild(playIcon);
  playButton.appendChild(playRate);
  playButton.setAttribute("aria-label", "Oynat");
  playButton.title = "Oynat";
  playButton.addEventListener("click", event => {
    event.stopPropagation();
    playSelectedText();
  });

  const pauseButton = document.createElement("button");
  pauseButton.type = "button";
  pauseButton.className = "tts-button tts-pause";
  pauseButton.textContent = "⏸";
  pauseButton.setAttribute("aria-label", "Duraklat");
  pauseButton.title = "Duraklat";
  pauseButton.addEventListener("click", event => {
    event.stopPropagation();
    toggleSpeechPause();
  });

  const stopButton = document.createElement("button");
  stopButton.type = "button";
  stopButton.className = "tts-button tts-stop";
  stopButton.textContent = "■";
  stopButton.setAttribute("aria-label", "Durdur");
  stopButton.title = "Durdur";
  stopButton.addEventListener("click", event => {
    event.stopPropagation();
    stopSpeech();
  });

  const fastButton = document.createElement("button");
  fastButton.type = "button";
  fastButton.className = "tts-button tts-fast";
  fastButton.setAttribute("aria-label", "Hızlandır");
  fastButton.title = "Hızlandır";
  updateFastButton(fastButton);
  fastButton.addEventListener("click", event => {
    event.stopPropagation();
    fastLevel++;
    if (fastLevel > 7) fastLevel = 0;
    changeSpeechRate([1, 1.25, 1.5, 1.75, 2, 2.5, 2.75, 3][fastLevel]);
    slowLevel = 0;
    veryFastLevel = 0;
    saveTTSSettings();
    updateFastButton(fastButton);
    updateSlowButton(slowButton);
    
    updatePlayRateDisplay();
  });


  const settingsButton = document.createElement("button");
  settingsButton.type = "button";
  settingsButton.className = "tts-button tts-settings";
  settingsButton.textContent = "⚙️";
  settingsButton.setAttribute("aria-label", "TTS ayarları");
  settingsButton.title = "TTS ayarları";
  settingsButton.addEventListener("click", event => {
    event.stopPropagation();
    toggleTTSSettings();
  });

  controls.appendChild(slowButton);
  controls.appendChild(playButton);
  controls.appendChild(fastButton);
  controls.appendChild(pauseButton);
  controls.appendChild(stopButton);
  controls.appendChild(settingsButton);

  selector.insertAdjacentElement("afterend", controls);
  updatePauseButton();
  updatePlayRateDisplay();
  updateMicButton();
}

function updateSlowButton(button) {
  if (!button) return;
  button.textContent = ["◀", "◀", "◀◀", "◀◀◀"][slowLevel] || "◀";
}

function updateFastButton(button) {
  if (!button) return;
  const icons = ["▶", "▶▶", "▶▶", "▶▶", "▶▶▶", "▶▶▶", "▶▶▶", "▶▶▶"];
  button.textContent = icons[Math.min(fastLevel, icons.length - 1)] || "▶";
}
function updateFastButtons() {
  updateFastButton(document.querySelector(".tts-fast"));
}

function saveTTSSettings() {
  localStorage.setItem("ttsRate", String(speechRate));
  localStorage.setItem("ttsPitch", String(speechPitch));
  if (selectedVoice) localStorage.setItem("ttsVoice", selectedVoice.name);
}

function closeTTSSettings() {
  const panel = document.querySelector("#tts-settings-panel");
  if (panel) panel.remove();
}

function toggleTTSSettings() {
  const existing = document.querySelector("#tts-settings-panel");
  if (existing) {
    existing.remove();
    return;
  }

  loadSavedVoice();
  const controls = document.querySelector("#tts-controls");
  if (!controls) return;

  const panel = document.createElement("div");
  panel.id = "tts-settings-panel";
  panel.className = "tts-settings-panel";

  const title = document.createElement("strong");
  title.textContent = "TTS Ayarları";
  title.className = "tts-settings-title";
  panel.appendChild(title);

  const voiceLabel = document.createElement("label");
  voiceLabel.textContent = "Ses";
  voiceLabel.className = "tts-setting-label";
  panel.appendChild(voiceLabel);

  const voiceSelect = document.createElement("select");
  voiceSelect.className = "tts-voice-select";
  populateVoiceSelect(voiceSelect);
  voiceSelect.addEventListener("change", () => {
    const voices = window.speechSynthesis.getVoices();
    selectedVoice =
      voices.find(v => v.name === voiceSelect.value) || null;
    selectedVoiceName = selectedVoice ? selectedVoice.name : "";
    saveTTSSettings();
  });
  panel.appendChild(voiceSelect);

  const rateLabel = document.createElement("label");
  rateLabel.className = "tts-setting-label";
  rateLabel.textContent = `Hız: ${speechRate.toFixed(2)}x`;
  panel.appendChild(rateLabel);

  const rateSlider = document.createElement("input");
  rateSlider.type = "range";
  rateSlider.min = "0.25";
  rateSlider.max = "3";
  rateSlider.step = "0.05";
  rateSlider.value = String(speechRate);
  rateSlider.className = "tts-rate-slider";
  rateSlider.addEventListener("input", () => {
    speechRate = Number(rateSlider.value);
    rateLabel.textContent = `Hız: ${speechRate.toFixed(2)}x`;
    updateSpeedLevelsFromRate();
    updateSpeedButtonsFromState();
    saveTTSSettings();
  });
  panel.appendChild(rateSlider);

  const pitchLabel = document.createElement("label");
  pitchLabel.className = "tts-setting-label";
  pitchLabel.textContent = `Perde: ${speechPitch.toFixed(2)}`;
  panel.appendChild(pitchLabel);

  const pitchSlider = document.createElement("input");
  pitchSlider.type = "range";
  pitchSlider.min = "0.5";
  pitchSlider.max = "2";
  pitchSlider.step = "0.05";
  pitchSlider.value = String(speechPitch);
  pitchSlider.className = "tts-pitch-slider";
  pitchSlider.addEventListener("input", () => {
    speechPitch = Number(pitchSlider.value);
    pitchLabel.textContent = `Perde: ${speechPitch.toFixed(2)}`;
    saveTTSSettings();
  });
  panel.appendChild(pitchSlider);

  const testButton = document.createElement("button");
  testButton.type = "button";
  testButton.className = "tts-test-button";
  testButton.textContent = "🔊 Sesi test et";
  testButton.addEventListener("click", event => {
    event.stopPropagation();
    stopSpeech();
    speakText(getTTSTestText());
  });
  panel.appendChild(testButton);

  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "tts-reset-button";
  reset.textContent = "Ayarları sıfırla";
  reset.addEventListener("click", event => {
    event.stopPropagation();
    stopSpeech();
    speechRate = 1;
    speechPitch = 1;
    slowLevel = 0;
    fastLevel = 0;
    selectedVoice = null;
    selectedVoiceName = "";
    localStorage.removeItem("ttsRate");
    localStorage.removeItem("ttsPitch");
    localStorage.removeItem("ttsVoice");
    loadSavedVoice();
    closeTTSSettings();
    renderTTSControls({ showMicrophone: isDictionaryPage() });
  });
  panel.appendChild(reset);

  controls.insertAdjacentElement("afterend", panel);
}

function populateVoiceSelect(select) {
  if (!select) return;
  select.innerHTML = "";

  if (!("speechSynthesis" in window)) {
    const option = document.createElement("option");
    option.textContent = "Ses desteği bulunamadı";
    option.value = "";
    select.appendChild(option);
    return;
  }

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) {
    const option = document.createElement("option");
    option.textContent = "Sesler yükleniyor...";
    option.value = "";
    select.appendChild(option);
    return;
  }

  const speechLang = getSpeechLanguage(selectedLang);
  const languageCode = speechLang.split("-")[0].toLowerCase();
  const matching = voices.filter(
    v => v.lang && v.lang.toLowerCase().startsWith(languageCode)
  );
  const others = voices.filter(v => !matching.includes(v));

  [...matching, ...others].forEach(voice => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    if (selectedVoice && selectedVoice.name === voice.name) {
      option.selected = true;
    }
    select.appendChild(option);
  });
}

function getTTSTestText() {
  const texts = {
    tr: "Bu, TTS ses ayarlarının testidir.",
    en: "This is a test of the text to speech voice settings.",
    de: "Dies ist ein Test der Text-to-Speech-Einstellungen.",
    ru: "Это проверка настроек синтеза речи.",
    ku: "Ev testekî ji bo mîhengên dengê ye.",
    ar: "هٰذَا اخْتِبَارٌ لِإِعْدَادَاتِ الصَّوْتِ.",
    tt: "Бу тавыш көйләүләрен тикшерү өчен тест.",
    fr: "Ceci est un test des paramètres de synthèse vocale.",
    es: "Esta es una prueba de los ajustes de voz.",
    nl: "Dit is een test van de steminstellingen.",
    it: "Questo è un test delle impostazioni vocali.",
    pt: "Este é um teste das definições de voz.",
    ko: "이것은 음성 설정 테스트입니다.",
    vi: "Đây là bài kiểm tra cài đặt giọng nói.",
    ja: "これは音声設定のテストです。",
    zh: "这是语音设置的测试。"
  };
  return texts[selectedLang] || texts.tr;
}

function updateSpeedLevelsFromRate() {
  slowLevel = 0;
  fastLevel = 0;
  if (speechRate === 0.75) slowLevel = 1;
  else if (speechRate === 0.5) slowLevel = 2;
  else if (speechRate === 0.25) slowLevel = 3;
  else if (speechRate === 1.25) fastLevel = 1;
  else if (speechRate === 1.5) fastLevel = 2;
  else if (speechRate === 1.75) fastLevel = 3;
  else if (speechRate === 2) fastLevel = 4;
  else if (speechRate === 2.5) fastLevel = 5;
  else if (speechRate === 2.75) fastLevel = 6;
  else if (speechRate === 3) fastLevel = 7;
}

function updateSpeedButtonsFromState() {
  updateSlowButton(document.querySelector(".tts-slow"));
  updateFastButton(document.querySelector(".tts-fast"));
  updatePlayRateDisplay();
}

function updatePlayRateDisplay() {
  const rateLabel = document.querySelector(".tts-play-rate");
  if (!rateLabel) return;
  if (speechRate === 1) {
    rateLabel.classList.add("hidden");
    rateLabel.textContent = "1.00x";
  } else {
    rateLabel.classList.remove("hidden");
    rateLabel.textContent = `${speechRate.toFixed(2)}x`;
  }
}

/* =========================================
   TTS KONUŞMA
========================================= */

function splitSpeechText(text) {
  if (!text) return [];
  const words = text.trim().split(/\s+/).filter(Boolean);
  const chunks = [];
  let cur = [];
  words.forEach(word => {
    cur.push(word);
    if (cur.length >= speechChunkWordCount) {
      chunks.push(cur.join(" "));
      cur = [];
    }
  });
  if (cur.length) chunks.push(cur.join(" "));
  return chunks;
}

function speakText(text, resumeFromChunk = 0) {
  if (!("speechSynthesis" in window)) {
    console.warn("Tarayıcı TTS desteği bulunmuyor.");
    return;
  }
  if (!text) return;

  speechChunkSession++;
  const sessionId = speechChunkSession;
  window.speechSynthesis.cancel();

  if (speechCurrentText !== text || !speechChunks.length) {
    speechCurrentText = text;
    speechChunks = splitSpeechText(text);
  }
  if (!speechChunks.length) return;

  speechChunkIndex = Math.max(
    0,
    Math.min(Math.floor(resumeFromChunk), speechChunks.length)
  );
  if (speechChunkIndex >= speechChunks.length) {
    speechChunkIndex = speechChunks.length - 1;
  }

  speechPaused = false;
  speechManualPaused = false;
  speechIsSpeaking = false;
  speechStarting = true;
  loadSavedVoice();
  speakCurrentChunk(sessionId);
}

function speakCurrentChunk(sessionId = speechChunkSession) {
  if (!("speechSynthesis" in window)) return;
  if (sessionId !== speechChunkSession) return;
  if (speechPaused || speechManualPaused) return;

  if (!speechChunks.length) {
    speechIsSpeaking = false;
    speechStarting = false;
    updatePauseButton();
    return;
  }

  if (speechChunkIndex >= speechChunks.length) {
    speechIsSpeaking = false;
    speechStarting = false;
    speechPaused = false;
    speechManualPaused = false;
    speechUtterance = null;
    updatePauseButton();
    return;
  }

  const chunk = speechChunks[speechChunkIndex];
  if (!chunk) {
    speechChunkIndex++;
    speakCurrentChunk(sessionId);
    return;
  }

  speechStarting = true;
  speechIsSpeaking = false;

  const utterance = new SpeechSynthesisUtterance(chunk);
  speechUtterance = utterance;
  utterance.rate = speechRate;
  utterance.pitch = speechPitch;
  utterance.volume = 1;
  utterance.lang = getSpeechLanguage(selectedLang);
  if (selectedVoice) utterance.voice = selectedVoice;

  utterance.onstart = () => {
    if (sessionId !== speechChunkSession) return;
    speechStarting = false;
    speechIsSpeaking = true;
    if (!window.speechSynthesis.paused) {
      speechPaused = false;
      speechManualPaused = false;
    }
    updatePauseButton();
  };

  utterance.onend = () => {
    if (sessionId !== speechChunkSession) return;
    if (speechManualPaused || speechPaused || window.speechSynthesis.paused) {
      speechIsSpeaking = false;
      speechStarting = false;
      updatePauseButton();
      return;
    }
    speechIsSpeaking = false;
    speechStarting = false;
    speechChunkIndex++;
    if (speechChunkIndex >= speechChunks.length) {
      speechPaused = false;
      speechManualPaused = false;
      speechUtterance = null;
      updatePauseButton();
      return;
    }
    setTimeout(() => {
      if (sessionId !== speechChunkSession) return;
      if (speechPaused || speechManualPaused) return;
      speakCurrentChunk(sessionId);
    }, 20);
  };

  utterance.onerror = event => {
    if (sessionId !== speechChunkSession) return;
    if (speechManualPaused || speechPaused || window.speechSynthesis.paused) {
      speechIsSpeaking = false;
      speechStarting = false;
      updatePauseButton();
      return;
    }
    if (event.error !== "canceled" && event.error !== "interrupted") {
      console.warn("TTS hatası:", event.error);
    }
    speechIsSpeaking = false;
    speechStarting = false;
    speechUtterance = null;
    updatePauseButton();
  };

  window.speechSynthesis.speak(utterance);
}

function getSpeechLanguage(lang) {
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
  return languages[lang] || "tr-TR";
}

function playSelectedText() {
  if (!("speechSynthesis" in window)) return;

  if (speechPaused || speechManualPaused) {
    toggleSpeechPause();
    return;
  }

  if (window.speechSynthesis.speaking || speechIsSpeaking || speechStarting) {
    return;
  }

  const dayData = getCurrentDayData();
  if (!dayData) return;

  if (dayData.type === "dictionary") {
    const input = document.querySelector("#dictionary-search-input");
    let text = (input && input.value.trim()) || dictionaryQuery.trim();

    if (lastOnlineEntry && lastOnlineEntry[selectedLang]) {
      text = lastOnlineEntry[selectedLang];
    } else if (text) {
      const nq = normalizeDictText(text);
      const match = (dayData.entries || []).find(e =>
        normalizeDictText(e[selectedLang]).includes(nq)
      );
      if (match && match[selectedLang]) text = match[selectedLang];
    } else {
      const first = (dayData.entries || [])[0];
      text = first ? first[selectedLang] || "" : "";
    }

    if (!text) return;

    speechRate = 1;
    slowLevel = 0;
    fastLevel = 0;
    saveTTSSettings();
    updateSpeedButtonsFromState();
    speechCurrentText = text;
    speechChunks = splitSpeechText(text);
    speechChunkIndex = 0;
    speakText(text, 0);
    return;
  }

  const question = dayData.questions[currentQuestionIndex];
  if (!question) return;
  const data = question[selectedLang];
  if (!data) return;
  const text = `${data.q}. ${data.a}`;

  speechRate = 1;
  slowLevel = 0;
  fastLevel = 0;
  saveTTSSettings();
  updateSpeedButtonsFromState();
  speechCurrentText = text;
  speechChunks = splitSpeechText(text);
  speechChunkIndex = 0;
  speakText(text, 0);
}

function toggleSpeechPause() {
  if (!("speechSynthesis" in window)) return;

  if (speechPaused || speechManualPaused) {
    if (
      !speechCurrentText ||
      !speechChunks.length ||
      speechChunkIndex >= speechChunks.length
    ) {
      return;
    }
    speechPaused = false;
    speechManualPaused = false;
    speechIsSpeaking = true;
    speechStarting = false;
    updatePauseButton();
    speakCurrentChunk(speechChunkSession);
    return;
  }

  if (!speechIsSpeaking && !speechStarting && !window.speechSynthesis.speaking) {
    return;
  }

  speechPaused = true;
  speechManualPaused = true;
  try {
    window.speechSynthesis.cancel();
  } catch (error) {
    console.warn("TTS durdurma hatası:", error);
  }
  speechIsSpeaking = false;
  speechStarting = false;
  updatePauseButton();
}

function updatePauseButton() {
  document.querySelectorAll(".tts-pause").forEach(button => {
    if (speechPaused || speechManualPaused) {
      button.textContent = "▶";
      button.setAttribute("aria-label", "Devam et");
      button.title = "Devam et";
    } else {
      button.textContent = "⏸";
      button.setAttribute("aria-label", "Duraklat");
      button.title = "Duraklat";
    }
  });
}

function stopSpeech() {
  speechChunkSession++;
  speechManualPaused = false;
  speechPaused = false;
  speechIsSpeaking = false;
  speechStarting = false;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  speechUtterance = null;
  speechCurrentText = "";
  speechChunks = [];
  speechChunkIndex = 0;
  updatePauseButton();
}

function changeSpeechRate(rate) {
  const wasSpeaking =
    speechIsSpeaking || speechStarting || window.speechSynthesis.speaking;
  const wasPaused = speechPaused || speechManualPaused;

  speechRate = rate;
  saveTTSSettings();

  if (wasPaused) {
    updatePauseButton();
    return;
  }
  if (!wasSpeaking || !speechCurrentText || !speechChunks.length) return;

  const currentChunk = speechChunkIndex;
  speechChunkSession++;
  const sessionId = speechChunkSession;
  window.speechSynthesis.cancel();
  speechUtterance = null;
  speechIsSpeaking = false;
  speechStarting = false;
  speechPaused = false;
  speechManualPaused = false;

  setTimeout(() => {
    if (sessionId !== speechChunkSession) return;
    if (!speechChunks.length) return;
    if (currentChunk >= speechChunks.length) return;
    speechChunkIndex = currentChunk;
    speakCurrentChunk(sessionId);
  }, 30);
}


/* =========================================
   MİKROFON (sadece sözlük)
========================================= */

function getSpeechRecognition() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function stopDictionaryMic() {
  isDictListening = false;
  if (speechRecognition) {
    try {
      speechRecognition.onresult = null;
      speechRecognition.onerror = null;
      speechRecognition.onend = null;
      speechRecognition.stop();
    } catch (e) {}
    speechRecognition = null;
  }
  updateMicButton();
}

function updateMicButton() {
  const btn = document.querySelector("#tts-mic-button");
  if (!btn) return;
  if (isDictListening) {
    btn.classList.add("listening");
    btn.textContent = "🎙️";
    btn.title = getDictUI("listening");
    btn.setAttribute("aria-label", getDictUI("listening"));
  } else {
    btn.classList.remove("listening");
    btn.textContent = "🎤";
    btn.title = getDictUI("micTitle");
    btn.setAttribute("aria-label", getDictUI("micTitle"));
  }
}

function toggleDictionaryMic() {
  if (!isDictionaryPage()) return;

  const Recognition = getSpeechRecognition();
  if (!Recognition) {
    alert("Bu tarayıcı konuşarak yazmayı desteklemiyor.");
    return;
  }

  if (isDictListening) {
    stopDictionaryMic();
    return;
  }

  stopSpeech();
  speechRecognition = new Recognition();
  speechRecognition.lang = getSpeechLanguage(selectedLang);
  speechRecognition.interimResults = true;
  speechRecognition.continuous = false;
  speechRecognition.maxAlternatives = 1;

  const input = document.querySelector("#dictionary-search-input");

  speechRecognition.onstart = () => {
    isDictListening = true;
    updateMicButton();
  };

  speechRecognition.onresult = event => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    const text = transcript.trim();
    if (!input) return;
    input.value = text;
    dictionaryQuery = text;
    renderDictionaryResults({ loading: false });
  };

  speechRecognition.onerror = event => {
    console.warn("Mikrofon / STT hatası:", event.error);
    stopDictionaryMic();
  };

  speechRecognition.onend = () => {
    isDictListening = false;
    updateMicButton();
    speechRecognition = null;
    if (dictionaryQuery.trim().length >= 2) {
      runOnlineDictionaryLookup(dictionaryQuery, true);
    }
  };

  try {
    speechRecognition.start();
  } catch (error) {
    console.warn("STT başlatılamadı:", error);
    stopDictionaryMic();
  }
}


/* =========================================
   NAVİGASYON
========================================= */

function createNavigation(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "navigation-wrapper";

  const mainRow = document.createElement("div");
  mainRow.className = "navigation-main-row";

  const questionGroup = document.createElement("div");
  questionGroup.className = "navigation-group question-navigation-group";

  const previousQuestion = makeButton(UI[selectedLang].previousQuestion);
  previousQuestion.className = "navigation-arrow-button";
  previousQuestion.setAttribute("aria-label", "Önceki soru");
  previousQuestion.title = "Önceki soru";
  previousQuestion.disabled =
    currentDayIndex === 0 && currentQuestionIndex === 0;
  previousQuestion.onclick = () => {
    stopSpeech();
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
      return;
    }
    if (currentDayIndex > 0) {
      currentDayIndex--;
      const prev = days[currentDayIndex];
      if (prev.type === "dictionary") {
        dictionaryQuery = "";
        lastOnlineEntry = null;
        renderDictionary();
        return;
      }
      currentQuestionIndex = prev.questions.length - 1;
      renderQuestion();
    }
  };

  const questionInput = document.createElement("input");
  questionInput.type = "number";
  questionInput.className = "navigation-number-input";
  questionInput.min = "1";
  questionInput.placeholder = String(question.id);
  questionInput.value = String(question.id);
  questionInput.title = "Soru numarasına git";
  questionInput.addEventListener("keydown", e => {
    if (e.key === "Enter") goToQuestionNumber(questionInput.value);
  });
  questionInput.addEventListener("change", () => {
    goToQuestionNumber(questionInput.value);
  });

  const nextQuestion = makeButton(UI[selectedLang].nextQuestion);
  nextQuestion.className = "navigation-arrow-button";
  nextQuestion.setAttribute("aria-label", "Sonraki soru");
  nextQuestion.title = "Sonraki soru";
  nextQuestion.disabled =
    currentDayIndex >= days.length - 1 &&
    currentQuestionIndex >= days[currentDayIndex].questions.length - 1;
  nextQuestion.onclick = () => {
    stopSpeech();
    const currentQuestions = days[currentDayIndex].questions;
    if (currentQuestionIndex < currentQuestions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
      return;
    }
    if (currentDayIndex < days.length - 1) {
      currentDayIndex++;
      currentQuestionIndex = 0;
      const next = days[currentDayIndex];
      if (next.type === "dictionary") {
        dictionaryQuery = "";
        lastOnlineEntry = null;
        renderDictionary();
        return;
      }
      renderQuestion();
    }
  };

  questionGroup.appendChild(previousQuestion);
  questionGroup.appendChild(questionInput);
  questionGroup.appendChild(nextQuestion);

  const homeGroup = document.createElement("div");
  homeGroup.className = "navigation-home-group";
  const home = makeButton(UI[selectedLang].home || "🕋");
  home.className = "navigation-home-button";
  home.setAttribute("aria-label", "Ana Sayfa");
  home.title = "Ana Sayfa";
  home.onclick = () => {
    stopSpeech();
    stopDictionaryMic();
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  homeGroup.appendChild(home);

  const dayGroup = document.createElement("div");
  dayGroup.className = "navigation-group day-navigation-group";

  const previousDay = makeButton(UI[selectedLang].previousDay);
  previousDay.className = "navigation-arrow-button";
  previousDay.setAttribute("aria-label", "Önceki gün");
  previousDay.title = "Önceki gün";
  previousDay.disabled = currentDayIndex === 0;
  previousDay.onclick = () => {
    stopSpeech();
    if (currentDayIndex > 0) {
      currentDayIndex--;
      currentQuestionIndex = 0;
      dictionaryQuery = "";
      lastOnlineEntry = null;
      const prev = days[currentDayIndex];
      if (prev.type === "dictionary") renderDictionary();
      else renderQuestion();
    }
  };

  const dayInput = document.createElement("input");
  dayInput.type = "number";
  dayInput.className = "navigation-number-input";
  dayInput.min = "0";
  dayInput.max = "30";
  dayInput.placeholder = String(days[currentDayIndex].number);
  dayInput.value = String(days[currentDayIndex].number);
  dayInput.title = "Gün numarasına git";
  dayInput.addEventListener("keydown", e => {
    if (e.key === "Enter") goToDayNumber(dayInput.value);
  });
  dayInput.addEventListener("change", () => goToDayNumber(dayInput.value));

  const nextDay = makeButton(UI[selectedLang].nextDay);
  nextDay.className = "navigation-arrow-button";
  nextDay.setAttribute("aria-label", "Sonraki gün");
  nextDay.title = "Sonraki gün";
  nextDay.disabled = currentDayIndex >= days.length - 1;
  nextDay.onclick = () => {
    stopSpeech();
    if (currentDayIndex < days.length - 1) {
      currentDayIndex++;
      currentQuestionIndex = 0;
      dictionaryQuery = "";
      lastOnlineEntry = null;
      const next = days[currentDayIndex];
      if (next.type === "dictionary") renderDictionary();
      else renderQuestion();
    }
  };

  dayGroup.appendChild(previousDay);
  dayGroup.appendChild(dayInput);
  dayGroup.appendChild(nextDay);

  mainRow.appendChild(questionGroup);
  mainRow.appendChild(homeGroup);
  mainRow.appendChild(dayGroup);
  wrapper.appendChild(mainRow);
  return wrapper;
}

function goToQuestionNumber(value) {
  const questionNumber = Number(value);
  if (!Number.isInteger(questionNumber)) return;

  for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
    const day = days[dayIndex];
    if (day.type === "dictionary") continue;
    const questionIndex = day.questions.findIndex(
      q => Number(q.id) === questionNumber
    );
    if (questionIndex !== -1) {
      stopSpeech();
      stopDictionaryMic();
      currentDayIndex = dayIndex;
      currentQuestionIndex = questionIndex;
      renderQuestion();
      return;
    }
  }
  console.warn(`Soru bulunamadı: ${questionNumber}`);
}

function goToDayNumber(value) {
  const dayNumber = Number(value);
  if (!Number.isInteger(dayNumber)) return;
  const dayIndex = days.findIndex(d => Number(d.number) === dayNumber);
  if (dayIndex === -1) {
    console.warn(`Gün bulunamadı: ${dayNumber}`);
    return;
  }
  stopSpeech();
  stopDictionaryMic();
  currentDayIndex = dayIndex;
  currentQuestionIndex = 0;
  dictionaryQuery = "";
  lastOnlineEntry = null;
  if (days[dayIndex].type === "dictionary") renderDictionary();
  else renderQuestion();
}

function makeButton(text) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  return button;
}


/* =========================================
   KAYNAKLAR
========================================= */

function renderSources(sources) {
  const box = document.createElement("div");
  box.className = "sources";
  const title = document.createElement("h3");
  title.textContent = UI[selectedLang].source;
  box.appendChild(title);
  const list = document.createElement("ul");

  sources.forEach(source => {
    const li = document.createElement("li");
    let text = "";
    let url = "";

    if (typeof source === "object" && source !== null) {
      text = source.title || source.name || "Kaynak";
      url = source.url || "";
    } else {
      text = String(source);
      const match = text.match(/https?:\/\/[^\s|]+/i);
      if (match) {
        url = match[0];
        text = text.replace(url, "").trim();
      }
    }

    if (!url) url = getSourceUrl(text);

    if (url) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = text;
      link.title = UI[selectedLang].openSource;
      li.appendChild(link);
    } else {
      li.textContent = text;
    }
    list.appendChild(li);
  });

  box.appendChild(list);
  return box;
}

function getSourceUrl(source) {
  const text = String(source).toLowerCase();
  const quranMatch = text.match(
    /(?:kur['’]an|qur['’]?an|coran|corán|коран|коръән)[^0-9]*(\d+)[\s:.-]+(\d+)(?:[-–](\d+))?/i
  );
  if (quranMatch) {
    return `https://quran.com/${quranMatch[1]}?startingVerse=${quranMatch[2]}`;
  }
  if (text.includes("sahih müslim") || text.includes("sahih muslim")) {
    return "https://sunnah.com/muslim";
  }
  if (
    text.includes("sahih buhari") ||
    text.includes("sahih buhârî") ||
    text.includes("sahih bukhari")
  ) {
    return "https://sunnah.com/bukhari";
  }
  if (text.includes("ömer nasuhi bilmen")) {
    return "https://archive.org/search?query=%C3%96mer+Nasuhi+Bilmen+B%C3%BCy%C3%BCk+%C4%B0slam+%C4%B0lmihali";
  }
  if (
    text.includes("bir müslümanın yol haritası") ||
    text.includes("akademi")
  ) {
    return "https://mckurdi27.github.io/yol-haritasi/";
  }
  return "";
}


/* =========================================
   HATA YAKALAMA
========================================= */

window.addEventListener("error", event => {
  console.error("Yol Haritası JavaScript hatası:", event.error || event.message);
});

window.addEventListener("unhandledrejection", event => {
  console.error("Yol Haritası Promise hatası:", event.reason);
});

/* =========================================
   APP.JS SONU
========================================= */
