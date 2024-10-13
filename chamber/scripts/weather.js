document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '5a0c36a07a68cb639509c5d212b97a77';
    const city = 'Ankara';
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    async function weatherApiFetch(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                displayCurrentResults(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
        }

    }
    weatherApiFetch(weatherApiUrl);

    async function forecastApiFetch(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                displayForecastResults(data)

            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }
    forecastApiFetch(forecastApiUrl)


    function displayCurrentResults(data) {
        const temp = document.getElementById('temp');
        const desc = document.getElementById('desc');
        const mint = document.getElementById('min-temp');
        const maxt = document.getElementById('max-temp');
        if (data.cod === 200) {
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const minTemp = Math.round(data.main.temp_min);
            const maxTemp = Math.round(data.main.temp_max);
            temp.textContent = `${temperature}°C`;
            desc.textContent = `${description}`;
            mint.textContent = `${minTemp}°C`;
            maxt.textContent = `${maxTemp}°C`;
        } else {
            temperature.textContent = `Error: ${data.message}`;
        }
    }

    function displayForecastResults(data) {
        // Divide data into three days (8 intervals per day, 3-hour data points)
        const next3DaysData = data.list.slice(0, 24);  // First 24 intervals = 3 days
        // Group data by day (8 intervals per day)
        const day1 = next3DaysData.slice(0, 8);
        const day2 = next3DaysData.slice(8, 16);
        const day3 = next3DaysData.slice(16, 24);


        // Function to calculate average temperature for a day
        function calculateAverage(dayData) {
            const temperatures = dayData.map(item => item.main.temp);
            const averageTemp = (temperatures.reduce((acc, temp) => acc + temp, 0) / temperatures.length).toFixed(2);
            const roundedAverageTemp = Math.round(averageTemp);
            return roundedAverageTemp;
        }

        // Calculate average temperatures for each of the next 3 days
        const avgTempDay1 = calculateAverage(day1);
        const avgTempDay2 = calculateAverage(day2);
        const avgTempDay3 = calculateAverage(day3);

        const rday1 = document.getElementById('day1');
        const rday2 = document.getElementById('day2');
        const rday3 = document.getElementById('day3');
        rday1.textContent = `${avgTempDay1}°C`;
        rday2.textContent = `${avgTempDay2}°C`;
        rday3.textContent = `${avgTempDay3}°C`;

    }

    function getWeekDay() {
        const hday2 = document.getElementById("hday2");
        const hday3 = document.getElementById("hday3");

        const date = new Date();
        const dayOfWeek = date.getDay();
        
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        hday2.textContent = weekDays[(dayOfWeek + 1) % 7];
        hday3.textContent = weekDays[(dayOfWeek + 2) % 7];
    }

    getWeekDay();
});