/* =====================================================
   BİR MÜSLÜMANIN YOL HARİTASI
   OTOMATİK GÜN SİSTEMİ

   Günlük dosyalar:
   data/day-01.json
   data/day-02.json
   data/day-03.json
   ...
   
   Yeni gün eklemek için yalnızca yeni JSON dosyası eklenir.
   days.json gerekmez.
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
   AYARLAR
===================================================== */

const MAX_DAYS = 365;


/* =====================================================
   GLOBAL
===================================================== */

let QUESTIONS = [];

let selectedLanguage = "all";

let selectedDay = "all";

let searchTerm = "";


/* =====================================================
   HTML GÜVENLİĞİ
===================================================== */

function escapeHTML(value) {

    if (
        value === undefined ||
        value === null
    ) {
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
   GÜN DOSYASI ADI
===================================================== */

function getDayFile(dayNumber) {

    return `data/day-${String(dayNumber).padStart(2, "0")}.json`;

}


/* =====================================================
   GÜN DOSYASI YÜKLE
===================================================== */

async function loadDay(dayNumber) {

    const file =
        getDayFile(dayNumber);

    try {

        const response =
            await fetch(file);

        /*
           Dosya yoksa hata verme.
           Sadece bu günü atla.
        */

        if (!response.ok) {

            return [];

        }


        const data =
            await response.json();


        /*
           JSON şu şekilde olabilir:

           [
             {...},
             {...}
           ]

           veya:

           {
             "day": 1,
             "title": "...",
             "questions": [...]
           }
        */

        let questions = [];

        let dayTitle =
            `${dayNumber}. Gün`;


        if (Array.isArray(data)) {

            questions = data;

        }

        else if (
            data &&
            Array.isArray(data.questions)
        ) {

            questions =
                data.questions;

            if (data.title) {

                dayTitle =
                    data.title;

            }

        }


        /*
           Sorulara gün bilgisi ekle
        */

        questions.forEach(question => {

            if (!question.day) {

                question.day =
                    dayNumber;

            }

            if (!question.dayTitle) {

                question.dayTitle =
                    dayTitle;

            }

        });


        return questions;

    }

    catch (error) {

        console.warn(
            `Gün ${dayNumber} yüklenemedi:`,
            error
        );

        return [];

    }

}


/* =====================================================
   TÜM GÜNLERİ OTOMATİK BUL
===================================================== */

async function loadAllDays() {

    QUESTIONS = [];


    /*
       Bütün günleri paralel kontrol ediyoruz.

       Örneğin:

       day-01.json
       day-02.json
       day-03.json
       ...

       Dosya varsa yüklenir.
       Yoksa atlanır.
    */

    const promises = [];


    for (
        let day = 1;
        day <= MAX_DAYS;
        day++
    ) {

        promises.push(
            loadDay(day)
        );

    }


    const results =
        await Promise.all(promises);


    results.forEach(dayQuestions => {

        QUESTIONS.push(
            ...dayQuestions
        );

    });


    /*
       Soru numarasına göre sırala
    */

    QUESTIONS.sort(
        (a, b) =>
            Number(a.id) -
            Number(b.id)
    );

}


/* =====================================================
   GÜN SEÇİM MENÜSÜ
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


    /*
       Sadece gerçekten yüklenmiş
       günleri göster.
    */

    const days =
        [
            ...new Set(
                QUESTIONS.map(
                    question =>
                        Number(question.day)
                )
            )
        ]
        .sort(
            (a, b) =>
                a - b
        );


    days.forEach(dayNumber => {

        const question =
            QUESTIONS.find(
                q =>
                    Number(q.day) ===
                    dayNumber
            );


        const option =
            document.createElement(
                "option"
            );


        option.value =
            dayNumber;


        option.textContent =
            question &&
            question.dayTitle
                ? `📖 ${question.dayTitle}`
                : `📖 ${dayNumber}. Gün`;


        select.appendChild(option);

    });

}


/* =====================================================
   DİL SIRALAMASI
===================================================== */

/*
   Örneğin kullanıcı Almanca seçerse:

   🇩🇪 Deutsch
   🇹🇷 Türkçe
   🇬🇧 English
   🇷🇺 Русский
   ...

   Yani seçilen dil en üstte olur.

   Diğer bütün diller görünmeye devam eder.
*/

function getLanguageOrder() {

    if (
        selectedLanguage === "all"
    ) {

        return [
            ...LANGUAGES
        ];

    }


    const selected =
        LANGUAGES.find(
            language =>
                language.code ===
                selectedLanguage
        );


    if (!selected) {

        return [
            ...LANGUAGES
        ];

    }


    const others =
        LANGUAGES.filter(
            language =>
                language.code !==
                selectedLanguage
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

    const content =
        question[
            language.code
        ];


    /*
       O dilin verisi yoksa
       hiçbir şey gösterme.
    */

    if (!content) {

        return "";

    }


    const isArabic =
        language.code === "ar";


    const isSelected =
        selectedLanguage ===
        language.code;


    return `

        <div
            class="
                language-block
                ${isSelected
                    ? "selected-language"
                    : ""}
                ${isArabic
                    ? "language-ar"
                    : ""}
            "
        >

            <p class="question-text">

                ${language.flag}

                ${question.id}.

                ${language.question}:

                ${escapeHTML(
                    content.q
                )}

            </p>


            <p class="answer-text">

                ${language.flag}

                ${question.id}.

                ${language.answer}:

                ${escapeHTML(
                    content.a
                )}

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
        !Array.isArray(
            question.sources
        ) ||
        question.sources.length === 0
    ) {

        return "";

    }


    const items =
        question.sources
            .map(source => {

                /*
                   Basit kaynak:

                   "📖 Kur'an — Bakara 2:21"
                */

                if (
                    typeof source ===
                    "string"
                ) {

                    return `

                        <div class="source-item">

                            ${escapeHTML(
                                source
                            )}

                        </div>

                    `;

                }


                /*
                   Gelişmiş kaynak:

                   {
                     "title": "...",
                     "url": "..."
                   }
                */

                if (
                    typeof source ===
                    "object"
                ) {

                    const title =
                        escapeHTML(
                            source.title ||
                            ""
                        );


                    const url =
                        source.url ||
                        "";


                    if (url) {

                        return `

                            <div
                                class="source-item"
                            >

                                ${title}

                                <a
                                    class="source-link"
                                    href="${escapeHTML(
                                        url
                                    )}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Aç ↗
                                </a>

                            </div>

                        `;

                    }


                    return `

                        <div
                            class="source-item"
                        >

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

function createQuestionCard(
    question
) {

    const languages =
        getLanguageOrder();


    const languageHTML =
        languages
            .map(
                language =>
                    createLanguageBlock(
                        question,
                        language
                    )
            )
            .join("");


    const sourcesHTML =
        createSources(
            question
        );


    return `

        <article
            class="question-card"
            data-question-id="${escapeHTML(
                question.id
            )}"
        >

            ${languageHTML}

            ${sourcesHTML}

        </article>

    `;

}


/* =====================================================
   ARAMA
===================================================== */

function questionMatchesSearch(
    question
) {

    if (!searchTerm) {

        return true;

    }


    const search =
        searchTerm
            .toLocaleLowerCase(
                "tr-TR"
            )
            .trim();


    if (!search) {

        return true;

    }


    /*
       SORU NUMARASI
    */

    if (
        String(question.id)
            .includes(search)
    ) {

        return true;

    }


    /*
       GÜN NUMARASI
    */

    if (
        String(question.day)
            .includes(search)
    ) {

        return true;

    }


    /*
       9 DİLDE SORU + CEVAP
    */

    for (
        const language
        of LANGUAGES
    ) {

        const content =
            question[
                language.code
            ];


        if (!content) {

            continue;

        }


        const text =

            `${content.q} ${content.a}`
                .toLocaleLowerCase(
                    "tr-TR"
                );


        if (
            text.includes(search)
        ) {

            return true;

        }

    }


    /*
       KAYNAKLAR
    */

    if (
        question.sources &&
        Array.isArray(
            question.sources
        )
    ) {

        const sourceText =
            question.sources
                .map(source => {

                    if (
                        typeof source ===
                        "string"
                    ) {

                        return source;

                    }


                    if (
                        typeof source ===
                        "object"
                    ) {

                        return (
                            source.title ||
                            ""
                        );

                    }


                    return "";

                })
                .join(" ")
                .toLocaleLowerCase(
                    "tr-TR"
                );


        if (
            sourceText.includes(
                search
            )
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

    return QUESTIONS.filter(
        question => {

            /*
               Gün
            */

            if (
                selectedDay !==
                "all" &&
                String(
                    question.day
                ) !== String(
                    selectedDay
                )
            ) {

                return false;

            }


            /*
               Arama
            */

            if (
                !questionMatchesSearch(
                    question
                )
            ) {

                return false;

            }


            return true;

        }
    );

}


/* =====================================================
   GÜNLERE AYIR
===================================================== */

function groupByDay(
    questions
) {

    const groups = {};


    questions.forEach(
        question => {

            const day =
                Number(
                    question.day
                ) || 1;


            if (
                !groups[day]
            ) {

                groups[day] = [];

            }


            groups[day].push(
                question
            );

        }
    );


    return groups;

}


/* =====================================================
   SAYFAYI ÇİZ
===================================================== */

function render() {

    const app =
        document.getElementById(
            "app"
        );


    if (!app) {

        return;

    }


    const filtered =
        getFilteredQuestions();


    /*
       Hiç soru yok
    */

    if (
        filtered.length === 0
    ) {

        app.innerHTML = `

            <div class="empty-state">

                <div
                    class="empty-state-icon"
                >
                    🔎
                </div>

                <p>
                    Henüz yüklenmiş soru
                    bulunamadı.
                </p>

            </div>

        `;

        return;

    }


    /*
       Günlere ayır
    */

    const groups =
        groupByDay(
            filtered
        );


    const days =
        Object.keys(groups)
            .sort(
                (a, b) =>
                    Number(a) -
                    Number(b)
            );


    /*
       Üst bilgi
    */

    let html = `

        <div class="search-info">

            📚
            ${filtered.length}
            soru gösteriliyor.

        </div>

    `;


    /*
       Her günü oluştur
    */

    days.forEach(
        day => {

            const questions =
                groups[day];


            questions.sort(
                (a, b) =>
                    Number(a.id) -
                    Number(b.id)
            );


            const firstQuestion =
                questions[0];


            const title =
                firstQuestion &&
                firstQuestion.dayTitle
                    ? firstQuestion.dayTitle
                    : `${day}. Gün`;


            html += `

                <section
                    class="day-section"
                    data-day="${day}"
                >

                    <h2
                        class="day-title"
                    >

                        📖
                        ${escapeHTML(
                            title
                        )}

                    </h2>

            `;


            /*
               Soruları alt alta göster
            */

            questions.forEach(
                question => {

                    html +=
                        createQuestionCard(
                            question
                        );

                }
            );


            html += `

                </section>

            `;

        }
    );


    app.innerHTML = html;

}


/* =====================================================
   HATA
===================================================== */

function showError(
    message
) {

    const app =
        document.getElementById(
            "app"
        );


    if (!app) {

        return;

    }


    app.innerHTML = `

        <div class="empty-state">

            <div
                class="empty-state-icon"
            >
                ⚠️
            </div>

            <p>
                ${escapeHTML(
                    message
                )}
            </p>

        </div>

    `;

}


/* =====================================================
   EVENTLER
===================================================== */

function setupEvents() {

    const search =
        document.getElementById(
            "search"
        );


    const day =
        document.getElementById(
            "day"
        );


    const language =
        document.getElementById(
            "language"
        );


    /*
       ARAMA
    */

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


    /*
       GÜN
    */

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


    /*
       DİL
    */

    if (language) {

        language.addEventListener(
            "change",
            event => {

                selectedLanguage =
                    event.target.value;

                render();


                /*
                   Dil seçildiğinde
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
    async () => {

        setupEvents();


        /*
           Yükleniyor mesajı
        */

        const app =
            document.getElementById(
                "app"
            );


        if (app) {

            app.innerHTML = `

                <div class="loading">

                    <div
                        class="loading-icon"
                    >
                        📖
                    </div>

                    <p>
                        Günlük içerikler
                        yükleniyor...
                    </p>

                </div>

            `;

        }


        /*
           Günlük JSON dosyalarını
           otomatik bul.
        */

        await loadAllDays();


        /*
           Gün menüsünü oluştur.
        */

        createDaySelector();


        /*
           Sayfayı göster.
        */

        render();

    }
);
