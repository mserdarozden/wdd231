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

const displayTrainings = (trainings) => {
    const productSelect = document.getElementById('training-select');

    trainings.forEach(training => {
        const option = document.createElement('option');
        option.value = training.name;
        option.textContent = training.name;
        productSelect.appendChild(option);
    });
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