async function loadDay() {
    const response = await fetch("data/day-01.json");
    const data = await response.json();

    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = data.dayTitle.tr;
    content.appendChild(title);

    data.questions.forEach(q => {
        const div = document.createElement("div");
        div.className = "question";

        div.innerHTML = `
            <h3>${q.tr.q}</h3>
            <p>${q.tr.a}</p>
        `;

        content.appendChild(div);
    });
}

loadDay();
