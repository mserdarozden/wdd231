// Fetch member information

async function getMemberData() {

    const response = await fetch("data/members.json");

    const data = await response.json();

    displayMembers(data);
}
getMemberData();

// Display Member information

const displayMembers = (members) => {
    const cards = document.getElementById("cards");
    members.forEach(member => {
        const card = document.createElement("section");
        const logo = document.createElement("img");
        const name = document.createElement("h2");
        const adress = document.createElement("p");
        const phone = document.createElement("p");
        const link = document.createElement("a");

        logo.setAttribute("src", `images/${member.iconFile}`);        
        logo.setAttribute("alt", member.name);
        logo.setAttribute("loading", "lazy");

        name.textContent = member.name;
        adress.textContent = member.address;
        phone.textContent = member.phone;
       
        link.setAttribute("href", member.website);
        link.textContent = member.website;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(adress);
        card.appendChild(phone);
        card.appendChild(link);
        
        card.classList.add("card");

        cards.appendChild(card);
    });
}

// Toggle between grid and list view

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});

