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