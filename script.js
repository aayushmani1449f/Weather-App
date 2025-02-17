async function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiKey = 'cffd2c799dd2c54b401402543980710f'; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather').innerHTML = `
                <h2>${data.name}, India</h2>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>🌥 Condition: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById('weather').innerHTML = `<p>⚠ ${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>❌ Error fetching data. Try again!</p>`;
    }
}
