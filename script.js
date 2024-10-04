const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-btn");
const frontImage = document.querySelector(".front-image");
const temperature = document.querySelector(".tempr");
const description = document.querySelector(".desc");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");


const checkWeather = async (city) => {
    const apiKey = "c14d8b9df847a8f558db33bf34173ea3";
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    const weatherData = await fetch(`${API}`).then(response => response.json());

    if (weatherData.cod === '404') {
        frontImage.src = "/assests/404-page-not-found.png";
        return;
    }

    temperature.innerHTML = `Temperature ${Math.round(weatherData.main.temp - 273.15)} °C`;
    description.innerHTML = `${weatherData.weather[0].description}`;

    humidity.innerHTML = `Humidity ${Math.round(weatherData.main.humidity)} %`;
    wind.innerHTML = `Wind ${weatherData.wind.speed} km/h`;

    switch (weatherData.weather[0].main) {
        case 'Clouds':
            frontImage.src = "/assests/cloud.png";
            break;

        case 'Clear':
            frontImage.src = "/assests/clear.png";
            break;

        case 'Rain':
            frontImage.src = "/assests/rain.png";
            break;

        case 'Mist':
            frontImage.src = "/assests/mist.png";
            break;

        case 'Snow':
            frontImage.src = "/assests/snow.png";
            break;

        default:
            break;
    }
};

searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value);
});