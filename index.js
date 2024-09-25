const apiKey = "217e26573c9b10c273a63d1cc645d80d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const cityCng = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");
const weatherClass = document.querySelector(".weather");

async function checkWeather(city) {
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        error.style.display = "block";
        weatherClass.style.display = "none";
    } else {
        var data = await response.json();
    
    console.log(data);
    
    cityCng.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } 
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }

    weatherClass.style.display = "block";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
