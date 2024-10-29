
// Fetch fleet information

async function getFleetData() {
    try {
        const response = await fetch("data/fleet.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        displayFleet(data);
    } catch (error) {
        console.error("Error fetching fleet data:", error);
    }
}

window.addEventListener('load', () => {
    getFleetData();
});

// Display Fleet information

const displayFleet = (fleet) => {
    const cards = document.getElementById("cards");
    fleet.forEach(aircraft => {
        const card = document.createElement("section");
        const figure = document.createElement("figure");
        const imageContainer = document.createElement("div");
        const image = document.createElement("img");
        const caption = document.createElement("figcaption");

        card.addEventListener("click", () => {
            displayDialog(aircraft);
        });

        image.setAttribute("loading", "lazy");
        image.setAttribute("src", aircraft.image_url);        
        image.setAttribute("alt", aircraft.name);
        

        caption.textContent = aircraft.name;
 
        card.appendChild(figure);
        figure.appendChild(imageContainer);
        imageContainer.appendChild(image);
        figure.appendChild(caption);
     
        card.classList.add("card");
        cards.appendChild(card);
    });
}

// Display diologbox
const dialogBox = document.querySelector("#dialogBox");


function displayDialog(aircraft) {
    const cards = document.getElementById("diolog-cards");
    const card = document.createElement("section");
    const buttonContainer = document.createElement("section");
    const closeButton = document.createElement("button");
    

    const name = document.createElement("h2");
    const description = document.createElement("p");
    const capacity = document.createElement("p");
    const range = document.createElement("p");
    const cruise_speed = document.createElement("p");
    const engine_type = document.createElement("p");
    const max_takeoff_weight = document.createElement("p");
    const avionics = document.createElement("p");
    const fuel_capacity = document.createElement("p");

        closeButton.textContent = "x";
    closeButton.addEventListener("click", () => {
        dialogBox.close();
        cards.removeChild(card);
    });

    name.textContent = aircraft.name;
    description.textContent = aircraft.description;
    capacity.textContent = `Capacity: ${aircraft.capacity}`;
    range.textContent =`Range: ${aircraft.range}`;
    cruise_speed.textContent = `Cruise Speed: ${aircraft.cruise_speed}`;
    engine_type.textContent = `Engine Type: ${aircraft.engine_type}`;
    max_takeoff_weight.textContent = `Maximum Take-off Weight: ${aircraft.max_takeoff_weight}`;
    avionics.textContent = `Avionics-: ${aircraft.avionics}`;
    fuel_capacity.textContent = `Fuel Capacity: ${aircraft.fuel_capacity}`;


    card.appendChild(buttonContainer);
    buttonContainer.appendChild(closeButton);

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(capacity);
    card.appendChild(range);
    card.appendChild(cruise_speed);
    card.appendChild(engine_type);
    card.appendChild(max_takeoff_weight);
    card.appendChild(avionics);
    card.appendChild(fuel_capacity);

    buttonContainer.classList.add("button-container");
    card.classList.add("diolog-card");

    cards.appendChild(card);

    dialogBox.showModal();
    

}
