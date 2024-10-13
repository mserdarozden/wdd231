// Fetch member information

async function getMemberData() {

    const response = await fetch("data/members.json");

    const data = await response.json();

    displayMembers(data);
}
getMemberData();

// Create and display member cards

// Display Member information

const displayMembers = (members) => {
    const cards = document.getElementById("cards");
    let selectedMembers = [];
    members.forEach(member => {
        if (member.membershipLevel === 2 || member.membershipLevel === 3) {
            selectedMembers.push(member);
        }
    });
    const shuffledMembers = shuffleArray(selectedMembers);

    let counter = 0;

    for (let i = 0; i < 3; i++) {
        counter++;

        const card = document.createElement("section");
        const logo = document.createElement("img");
        const name = document.createElement("h2");
        const level = document.createElement("p");
        const adress = document.createElement("p");
        const phone = document.createElement("p");
        const link = document.createElement("a");

        const upperContainer = document.createElement("div"); 
        upperContainer.classList.add("upper-card");

        const lowerContainer = document.createElement("div"); 
        lowerContainer.classList.add("lower-card");

        const lowerContainerDetail = document.createElement("div"); 
        lowerContainerDetail.classList.add("lower-card-detail");

        const member = shuffledMembers[i];
        logo.setAttribute("src", `images/${member.iconFile}`);        
        logo.setAttribute("alt", member.name);
        logo.setAttribute("loading", "lazy");

        name.textContent = member.name;
        adress.textContent = `ADRESS: ${member.address}`;
        phone.textContent = `PHONE: ${member.phone}`;

        link.setAttribute("href", member.website);
        link.textContent = `URL: ${member.website}`;

        level.textContent = member.membershipLevel === 2 ? "Silver Member" : "Gold Member";

        upperContainer.appendChild(name);
        upperContainer.appendChild(level);
        card.appendChild(upperContainer);

        lowerContainerDetail.appendChild(adress);
        lowerContainerDetail.appendChild(phone);
        lowerContainerDetail.appendChild(link);

        lowerContainer.appendChild(logo);
        lowerContainer.appendChild(lowerContainerDetail);
        card.appendChild(lowerContainer);
        
        card.classList.add("card");

        cards.appendChild(card);
    }


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