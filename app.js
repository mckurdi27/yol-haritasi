const languageNames = {
    tr: "🇹🇷 Türkçe",
    en: "🇬🇧 English",
    de: "🇩🇪 Deutsch",
    ru: "🇷🇺 Русский",
    ku: "🇹🇯 Kurmancî",
    tt: "🇹🇹 Tatarca",
    fr: "🇫🇷 Français",
    es: "🇪🇸 Español",
    ar: "🇸🇦 العربية"
};

function renderContent() {
    const selectedLang = document.getElementById('languageSelect').value;
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '';

    const allLangs = Object.keys(languageNames);
    const sortedLangs = [selectedLang, ...allLangs.filter(l => l !== selectedLang)];

    courseData.forEach(dayGroup => {
        let daySection = document.createElement('div');
        daySection.className = 'day-section';

        let dayTitle = document.createElement('h2');
        dayTitle.className = 'day-title';
        dayTitle.textContent = dayGroup.day;
        daySection.appendChild(dayTitle);

        dayGroup.questions.forEach(qItem => {
            let card = document.createElement('div');
            card.className = 'question-card';

            let langListDiv = document.createElement('div');
            langListDiv.className = 'lang-list';

            sortedLangs.forEach(langKey => {
                let translation = qItem.translations[langKey];
                if (!translation) return;

                let langItem = document.createElement('div');
                langItem.className = `lang-item ${langKey === selectedLang ? 'active-lang' : ''}`;

                let langLabel = document.createElement('span');
                langLabel.className = 'lang-label';
                langLabel.textContent = languageNames[langKey];

                let langText = document.createElement('div');
                langText.className = 'lang-text';
                langText.innerHTML = `<strong>${qItem.id}. Soru:</strong> ${translation.q}<br><strong>Cevap:</strong> ${translation.a}`;

                langItem.appendChild(langLabel);
                langItem.appendChild(langText);
                langListDiv.appendChild(langItem);
            });

            card.appendChild(langListDiv);

            if (qItem.sources && qItem.sources.length > 0) {
                let sourcesBox = document.createElement('div');
                sourcesBox.className = 'sources-box';

                let sourcesTitle = document.createElement('div');
                sourcesTitle.className = 'sources-title';
                sourcesTitle.textContent = `📚 Önemli Kaynaklar — ${qItem.id}. Soru`;
                sourcesBox.appendChild(sourcesTitle);

                qItem.sources.forEach(src => {
                    let sourceItem = document.createElement('div');
                    sourceItem.className = 'source-item';
                    sourceItem.innerHTML = `
                        <span>📖 ${src.name}</span>
                        <a href="${src.url}" class="source-link" target="_blank">Aç ↗</a>
                    `;
                    sourcesBox.appendChild(sourceItem);
                });

                card.appendChild(sourcesBox);
            }

            daySection.appendChild(card);
        });

        contentArea.appendChild(daySection);
    });
}

function changeLanguage() {
    renderContent();
}

window.onload = function() {
    renderContent();
};
 
