

// Fetch training information

async function getTrainingData() {
    try {
        const response = await fetch("data/trainings.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const randomTraining = selectRandom(data, -4);

        displayTrainings(randomTraining);
    } catch (error) {
        console.error("Error fetching training data:", error);
    }
}

getTrainingData();


const displayTrainings = (trainings) => {
    const cards = document.getElementById("training-cards");
    trainings.forEach(training => {
        const card = document.createElement("section");
        const image = document.createElement("img");
        const name = document.createElement("h2");
        const description = document.createElement("p");


        image.setAttribute("src", training.image_url);        
        image.setAttribute("alt", training.name);
        image.setAttribute("loading", "lazy");

        name.textContent = training.name;
        description.textContent = training.description;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        
        card.classList.add("card");
      
        cards.appendChild(card);

    });
}

// Fetch testimonial information

async function getTestimonialData() {
    try {
        const response = await fetch("data/testimonials.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const randomTestimonial = selectRandom(data, -2);

        displayTestimonials(randomTestimonial);
    } catch (error) {
        console.error("Error fetching testimonial data:", error);
    }
}

getTestimonialData();

const displayTestimonials = (testimonials) => {
    const cards = document.getElementById("testimonal-cards");
    testimonials.forEach(testimony => {
        const card = document.createElement("section");
        const image = document.createElement("img");
        
        const textContainer = document.createElement("div");
        const author = document.createElement("h2");
        const text = document.createElement("p");

        image.setAttribute("src", testimony.image_url);        
        image.setAttribute("alt", testimony.name);
        image.setAttribute("loading", "lazy");

        author.textContent = testimony.author;
        text.textContent = testimony.text;

        textContainer.appendChild(author);
        textContainer.appendChild(text);
        
        card.appendChild(image);
        card.appendChild(textContainer);

        card.classList.add("testimonial-card");
      
        cards.appendChild(card);
    });
}


// Fetch fleet information

async function getFleetData() {
    try {
        const response = await fetch("data/fleet.json");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const randomAircraft = selectRandom(data, -11);

        displayFleet(randomAircraft);
    } catch (error) {
        console.error("Error fetching fleet data:", error);
    }
}

getFleetData();

// Display Fleet information

const displayFleet = (fleet) => {
    const cards = document.getElementById("fleet-cards");
    fleet.forEach(aircraft => {
        const card = document.createElement("section");
        const figure = document.createElement("figure");
        const imageContainer = document.createElement("div");
        const image = document.createElement("img");
        const caption = document.createElement("figcaption");

        image.setAttribute("src", aircraft.image_url);        
        image.setAttribute("alt", aircraft.name);
        image.setAttribute("loading", "lazy");

        caption.textContent = aircraft.name;
 
        card.appendChild(figure);
        figure.appendChild(imageContainer);
        imageContainer.appendChild(image);
        figure.appendChild(caption);
     
        card.classList.add("fleet-card");
        cards.appendChild(card);
    });
}


// Auxilary functions

function shuffleArray(array) {
    // Loop over the array from the last element to the first
    for (let i = array.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
  }

  function selectRandom(data, length) {

    const shuffledData = shuffleArray(data);

    const displayedData = shuffledData.slice(0, length);
    
    return displayedData;
}

// Creates last visit message
const now = new Date(); 
// Last visit date from localStorage 
const lastVisit = localStorage.getItem("lastVisit"); 

// If lastVisit is not found - this is the first visit 
if (!lastVisit) { 
    document.querySelector("#lastVisit").textContent = 
    "Welcome! Let us know if you have any questions."; 
} else { 
    // If there lastVisit found - calculate the difference between the current date and the last visit
    const lastVisitDate = new Date(lastVisit); 
    const timeDifference = now - lastVisitDate; // difference in milliseconds 
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // convert into days
    
    if (daysDifference < 1) { 
        document.querySelector("#lastVisit").textContent = "Back so soon! Awesome!"; 
    } else { 
        const dayWord = daysDifference === 1 ? "day" : "days"; 
        document.querySelector("#lastVisit").textContent = `You last visited ${daysDifference} ${dayWord} ago.`; 
    } 
}

// Save the current time as the date of the last visit to localStorage 
localStorage.setItem("lastVisit", now);