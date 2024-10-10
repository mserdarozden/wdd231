const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(url) {

    const response = await fetch(url);

    const data = await response.json();

    //console.table(data.prophets);

    displayProphets(data.prophets);
}
getProphetData(url);

const displayProphets = (prophets) => {
    const cards = document.getElementById("cards");
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        birthDate.textContent = prophet.birthdate;
        birthPlace.textContent = prophet.birthplace;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophets.name} ${prophets.lastName}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "200");
        portrait.setAttribute("height", "250");

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        card.classList.add("card");

        cards.appendChild(card);
    });
}

