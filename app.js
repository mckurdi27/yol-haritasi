async function loadDay(dayFile) {
    const response = await fetch(dayFile);
    const data = await response.json();
    renderDay(data);
}

function renderDay(dayData) {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = dayData.dayTitle.tr;
    content.appendChild(title);

    dayData.questions.forEach(q => {
        const div = document.createElement("div");
        div.className = "question";

        div.innerHTML = `
            <h3>${q.tr.q}</h3>
            <p>${q.tr.a}</p>
        `;

        content.appendChild(div);
    });
}

loadDay("data/day-01.json");
