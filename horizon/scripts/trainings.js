// Fetch training information

async function getTrainingData() {
    try {
        const response = await fetch("data/trainings.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        displayTrainings(data);
    } catch (error) {
        console.error("Error fetching training data:", error);
    }
}

getTrainingData();

// Display Training information

const displayTrainings = (trainings) => {
    const cards = document.getElementById("cards");
    trainings.forEach(training => {
        const card = document.createElement("section");
        const image = document.createElement("img");
        const name = document.createElement("h2");
        const description = document.createElement("p");
        const duration = document.createElement("p");
        const requirements = document.createElement("p");

        image.setAttribute("src", training.image_url);        
        image.setAttribute("alt", training.name);
        image.setAttribute("loading", "lazy");

        name.textContent = training.name;
        description.textContent = training.description;
        duration.textContent = `Duration: ${training.duration}`;
        requirements.textContent = `Requirements: ${training.requirements}`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(duration);
        card.appendChild(requirements);
        
        description.classList.add("description");
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

