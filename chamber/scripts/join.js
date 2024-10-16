

const npMembershipButton = document.querySelector("#npMembership");
const bronzeMembershipButton = document.querySelector("#bronzeMembership");
const silverMembershipButton = document.querySelector("#silverMembership");
const goldMembershipButton = document.querySelector("#goldMembership");

npMembershipButton.addEventListener("click", () => {
    displayDialog(0);
});

bronzeMembershipButton.addEventListener("click", () => {
    displayDialog(1);
});

silverMembershipButton.addEventListener("click", () => {
    displayDialog(2);
});

goldMembershipButton.addEventListener("click", () => {
    displayDialog(3);
});

const dialogBox = document.querySelector("#dialogBox");
const heading = document.querySelector("#heading");
const benefit1 = document.querySelector("#item1");
const benefit2 = document.querySelector("#item2");
const benefit3 = document.querySelector("#item3");
const cost = document.querySelector("#cost");
const closeButton = document.querySelector("#closeButton");

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

function displayDialog(level) {

    const data = getMembershipData().then(data => {
        dialogBox.showModal();
        heading.textContent = data[level].level;
        benefit1.textContent = data[level].benefits[0];
        benefit2.textContent = data[level].benefits[1];
        benefit3.textContent = data[level].benefits[2];
        cost.textContent = `Cost: ${data[level].cost}`;
    });
}

// Fetch membership data

async function getMembershipData() {

    const response = await fetch("data/membership.json");

    const data = await response.json();
    console.log(data);

    return data;
}



// Filling the timestamp

// Function to set the timestamp field to the current date and time
function setTimestamp() {
    const currentDate = new Date();
    const timestamp = currentDate.toLocaleString(); // ISO format: YYYY-MM-DDTHH:MM:SSZ
    document.getElementById('timestamp').value = timestamp;
    console.log(timestamp);
}

// Ensure the timestamp is set when the page loads
window.onload = setTimestamp;




