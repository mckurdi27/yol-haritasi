/* =====================================================
   BİR MÜSLÜMANIN YOL HARİTASI
   Ana JavaScript
===================================================== */


/* =====================================================
   DİLLER
===================================================== */

const LANGUAGES = [

    {
        code: "tr",
        flag: "🇹🇷",
        name: "Türkçe",
        question: "Soru",
        answer: "Cevap"
    },

    {
        code: "en",
        flag: "🇬🇧",
        name: "English",
        question: "Question",
        answer: "Answer"
    },

    {
        code: "de",
        flag: "🇩🇪",
        name: "Deutsch",
        question: "Frage",
        answer: "Antwort"
    },

    {
        code: "ru",
        flag: "🇷🇺",
        name: "Русский",
        question: "Вопрос",
        answer: "Ответ"
    },

    {
        code: "ku",
        flag: "🇹🇯",
        name: "Kurmancî",
        question: "Pirs",
        answer: "Bersiv"
    },

    {
        code: "tt",
        flag: "🇹🇹",
        name: "Tatarca",
        question: "Сорау",
        answer: "Җавап"
    },

    {
        code: "fr",
        flag: "🇫🇷",
        name: "Français",
        question: "Question",
        answer: "Réponse"
    },

    {
        code: "es",
        flag: "🇪🇸",
        name: "Español",
        question: "Pregunta",
        answer: "Respuesta"
    },

    {
        code: "ar",
        flag: "🇸🇦",
        name: "العربية",
        question: "السؤال",
        answer: "الجواب"
    }

];


/* =====================================================
   GLOBAL DATA
===================================================== */

let DAYS = [];

let QUESTIONS = [];

let selectedLanguage = "all";

let selectedDay = "all";

let searchTerm = "";


/* =====================================================
   HTML GÜVENLİĞİ
===================================================== */

function escapeHTML(value) {

    if (value === undefined || value === null) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =====================================================
   VERİ YÜKLEME
===================================================== */

async function loadDays() {

    try {

        const response = await fetch("data/days.json");

        if (!response.ok) {
            throw new Error("days.json yüklenemedi.");
        }

        DAYS = await response.json();

        await loadAllDays();

        createDaySelector();

        render();

    }

    catch (error) {

        console.error(error);

        showError(
            "Günlük veri dosyaları yüklenemedi. " +
            "Lütfen data/days.json dosyasını kontrol edin."
        );

    }

}


/* =====================================================
   TÜM GÜNLERİ YÜKLE
===================================================== */

async function loadAllDays() {

    QUESTIONS = [];

    for (const day of DAYS) {

        try {

            const response = await fetch(day.file);

            if (!response.ok) {
                console.warn(
                    "Dosya yüklenemedi:",
                    day.file
                );

                continue;
            }

            const data = await response.json();

            /*
                Günlük dosya şu iki yapıdan biri olabilir:

                1.
                [
                    {...},
                    {...}
                ]

                veya

                2.
                {
                    "day": 1,
                    "questions": [...]
                }
            */

            let questions = [];

            if (Array.isArray(data)) {

                questions = data;

            }

            else if (
                data &&
                Array.isArray(data.questions)
            ) {

                questions = data.questions;

            }


            questions.forEach(question => {

                question.day =
                    question.day || day.day;

                question.dayTitle =
                    day.title ||
                    `${day.day}. Gün`;

                QUESTIONS.push(question);

            });

        }

        catch (error) {

            console.error(
                "Gün yüklenirken hata:",
                day.file,
                error
            );

        }

    }

}


/* =====================================================
   GÜN SEÇİMİ
===================================================== */

function createDaySelector() {

    const select =
        document.getElementById("day");

    if (!select) {
        return;
    }

    select.innerHTML = `
        <option value="all">
            📅 Tüm Günler
        </option>
    `;

    DAYS.forEach(day => {

        const option =
            document.createElement("option");

        option.value = day.day;

        option.textContent =
            `📖 ${day.day}. Gün`;

        select.appendChild(option);

    });

}


/* =====================================================
   DİL SIRALAMASI
===================================================== */

/*
   Kullanıcı bir dil seçerse:

   Seçilen dil
        ↓
   1. sıraya gelir

   Diğer 8 dil
        ↓
   hemen altında kalır.

   Hiçbir dil gizlenmez.
*/

function getLanguageOrder() {

    if (
        selectedLanguage === "all"
    ) {

        return [...LANGUAGES];

    }


    const selected =
        LANGUAGES.find(
            language =>
                language.code === selectedLanguage
        );

    if (!selected) {

        return [...LANGUAGES];

    }


    const others =
        LANGUAGES.filter(
            language =>
                language.code !== selectedLanguage
        );


    return [
        selected,
        ...others
    ];

}


/* =====================================================
   DİL BLOĞU
===================================================== */

function createLanguageBlock(
    question,
    language
) {

    const code =
        language.code;

    const content =
        question[code];


    if (!content) {

        return "";

    }


    const isArabic =
        code === "ar";

    const isSelected =
        selectedLanguage === code;


    return `

        <div class="
            language-block
            ${isSelected
                ? "selected-language"
                : ""}
            ${isArabic
                ? "language-ar"
                : ""}
        ">

            <p class="question-text">

                ${language.flag}

                ${question.id}.
                ${language.question}:

                ${escapeHTML(content.q)}

            </p>


            <p class="answer-text">

                ${language.flag}

                ${question.id}.
                ${language.answer}:

                ${escapeHTML(content.a)}

            </p>

        </div>

    `;

}


/* =====================================================
   KAYNAKLAR
===================================================== */

function createSources(question) {

    if (
        !question.sources ||
        !Array.isArray(question.sources) ||
        question.sources.length === 0
    ) {

        return "";

    }


    const items =
        question.sources
            .map(source => {

                /*
                   Kaynak basit metin olabilir:

                   "📖 Kur'an — Bakara 2:21"

                   veya obje olabilir:

                   {
                       "title": "...",
                       "url": "..."
                   }
                */

                if (
                    typeof source === "string"
                ) {

                    return `
                        <div class="source-item">
                            ${escapeHTML(source)}
                        </div>
                    `;

                }


                if (
                    typeof source === "object"
                ) {

                    const title =
                        escapeHTML(
                            source.title || ""
                        );

                    const url =
                        source.url || "";


                    if (url) {

                        return `
                            <div class="source-item">

                                ${title}

                                <a
                                    class="source-link"
                                    href="${escapeHTML(url)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Aç ↗
                                </a>

                            </div>
                        `;

                    }


                    return `
                        <div class="source-item">
                            ${title}
                        </div>
                    `;

                }


                return "";

            })
            .join("");


    return `

        <div class="sources">

            <p class="sources-title">

                📚 Önemli Kaynaklar —
                ${question.id}. Soru

            </p>

            ${items}

        </div>

    `;

}


/* =====================================================
   SORU KARTI
===================================================== */

function createQuestionCard(question) {

    const languageOrder =
        getLanguageOrder();


    const languagesHTML =
        languageOrder
            .map(language =>
                createLanguageBlock(
                    question,
                    language
                )
            )
            .join("");


    const sourcesHTML =
        createSources(question);


    return `

        <article
            class="question-card"
            data-question-id="${question.id}"
        >

            ${languagesHTML}

            ${sourcesHTML}

        </article>

    `;

}


/* =====================================================
   ARAMA
===================================================== */

function questionMatchesSearch(question) {

    if (!searchTerm) {

        return true;

    }


    const search =
        searchTerm
            .toLocaleLowerCase("tr-TR")
            .trim();


    if (!search) {

        return true;

    }


    /*
       Soru numarasıyla arama
    */

    if (
        String(question.id)
            .includes(search)
    ) {

        return true;

    }


    /*
       Gün numarasıyla arama
    */

    if (
        String(question.day)
            .includes(search)
    ) {

        return true;

    }


    /*
       9 dilde soru + cevap arama
    */

    for (const language of LANGUAGES) {

        const content =
            question[language.code];


        if (!content) {
            continue;
        }


        const text =

            `${content.q} ${content.a}`
                .toLocaleLowerCase("tr-TR");


        if (
            text.includes(search)
        ) {

            return true;

        }

    }


    /*
       Kaynaklarda arama
    */

    if (
        question.sources &&
        Array.isArray(question.sources)
    ) {

        const sourceText =
            question.sources
                .map(source => {

                    if (
                        typeof source === "string"
                    ) {

                        return source;

                    }

                    return source.title || "";

                })
                .join(" ")
                .toLocaleLowerCase("tr-TR");


        if (
            sourceText.includes(search)
        ) {

            return true;

        }

    }


    return false;

}


/* =====================================================
   FİLTRELEME
===================================================== */

function getFilteredQuestions() {

    return QUESTIONS.filter(question => {

        /*
           Gün filtresi
        */

        if (
            selectedDay !== "all" &&
            String(question.day) !==
            String(selectedDay)
        ) {

            return false;

        }


        /*
           Arama filtresi
        */

        if (
            !questionMatchesSearch(question)
        ) {

            return false;

        }


        return true;

    });

}


/* =====================================================
   GÜNLERE AYIR
===================================================== */

function groupQuestionsByDay(
    questions
) {

    const groups = {};


    questions.forEach(question => {

        const day =
            question.day || 1;


        if (!groups[day]) {

            groups[day] = [];

        }


        groups[day].push(question);

    });


    return groups;

}


/* =====================================================
   SAYFA GÖRÜNTÜLE
===================================================== */

function render() {

    const app =
        document.getElementById("app");


    if (!app) {
        return;
    }


    const filtered =
        getFilteredQuestions();


    if (filtered.length === 0) {

        app.innerHTML = `

            <div class="empty-state">

                <div class="empty-state-icon">
                    🔎
                </div>

                <p>
                    Aradığınız kriterlere uygun
                    soru bulunamadı.
                </p>

            </div>

        `;

        return;

    }


    const groups =
        groupQuestionsByDay(filtered);


    const sortedDays =
        Object.keys(groups)
            .sort(
                (a, b) =>
                    Number(a) - Number(b)
            );


    /*
       Arama sonucu bilgisi
    */

    let html = `

        <div class="search-info">

            📚
            ${filtered.length}
            soru gösteriliyor.

        </div>

    `;


    /*
       Günleri oluştur
    */

    sortedDays.forEach(day => {

        const questions =
            groups[day];


        const dayInfo =
            DAYS.find(
                item =>
                    String(item.day) ===
                    String(day)
            );


        const dayTitle =
            dayInfo &&
            dayInfo.title
                ? dayInfo.title
                : `${day}. Gün`;


        html += `

            <section
                class="day-section"
                data-day="${day}"
            >

                <h2 class="day-title">

                    📖 ${escapeHTML(dayTitle)}

                </h2>

        `;


        /*
           Soruların numarasını
           küçükten büyüğe sırala
        */

        questions.sort(
            (a, b) =>
                Number(a.id) -
                Number(b.id)
        );


        questions.forEach(question => {

            html +=
                createQuestionCard(
                    question
                );

        });


        html += `

            </section>

        `;

    });


    app.innerHTML = html;

}


/* =====================================================
   HATA MESAJI
===================================================== */

function showError(message) {

    const app =
        document.getElementById("app");


    if (!app) {
        return;
    }


    app.innerHTML = `

        <div class="empty-state">

            <div class="empty-state-icon">
                ⚠️
            </div>

            <p>
                ${escapeHTML(message)}
            </p>

        </div>

    `;

}


/* =====================================================
   EVENT LISTENERS
===================================================== */

function setupEvents() {

    const search =
        document.getElementById("search");


    const day =
        document.getElementById("day");


    const language =
        document.getElementById("language");


    if (search) {

        search.addEventListener(
            "input",
            event => {

                searchTerm =
                    event.target.value;

                render();

            }
        );

    }


    if (day) {

        day.addEventListener(
            "change",
            event => {

                selectedDay =
                    event.target.value;

                render();

            }
        );

    }


    if (language) {

        language.addEventListener(
            "change",
            event => {

                selectedLanguage =
                    event.target.value;

                render();

                /*
                   Kullanıcı dil seçince
                   sayfanın başına dön.
                */

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }

}


/* =====================================================
   BAŞLAT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupEvents();

        loadDays();

    }
);
