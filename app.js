let isCelsius = true;
let apiKey = "2da1e54d97209acb6696623d0a65fa9e";

// Function to get weather for current location
function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");
  let img = document.getElementById("random");
  let humidity = document.getElementById("humidity");
  let windSpeed = document.getElementById("wind-speed");

  location.innerHTML = "Locating...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let units = isCelsius ? "metric" : "imperial";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    fetchWeather(url);
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location.";
  }
}

// Function to fetch weather data and display it
function fetchWeather(url) {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");
  let img = document.getElementById("random");
  let humidity = document.getElementById("humidity");
  let windSpeed = document.getElementById("wind-speed");

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let temp = data.main.temp;
      temperature.innerHTML = isCelsius ? `${temp}° C` : `${temp}° F`;

      location.innerHTML = `${data.name}`;
      description.innerHTML = data.weather[0].main; // This will show "Clear", "Clouds", "Rain", etc.
      humidity.innerHTML = data.main.humidity;
      windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(1); // Convert m/s to km/h

      // Get the current hour to determine if it's day or night
      const currentHour = new Date().getHours();
      const isNight = currentHour < 6 || currentHour >= 18; // Consider night time between 6 PM and 6 AM

      // Get the weather condition and update the icon and background based on it
      let weatherMain = data.weather[0].main;
      img.src = getWeatherConditionIcon(weatherMain, isNight);
      document.body.style.backgroundImage = getWeatherConditionBackground(weatherMain, isNight);
    })
    .catch(() => {
      location.innerHTML = "Unable to fetch weather data.";
    });
}

// Function to get weather icon based on weather condition
function getWeatherConditionIcon(weather, isNight) {
  weather = weather.toLowerCase();
  if (weather.includes("clear")) {
    return isNight ? "img/moon.png" : "img/sun.png";
  } else if (weather.includes("cloud")) {
    return isNight ? "img/cloudy-night.png" : "img/clouds.png";
  } else if (weather.includes("rain")) {
    return "img/rainy.png";
  } else if (weather.includes("thunderstorm")) {
    return "img/thunderstorm.png";
  } else if (weather.includes("snow")) {
    return "img/snow.png";
  } else if (weather.includes("haze") || weather.includes("mist")) {
    return isNight ? "img/haze-night.png" : "img/haze.png";
  } else {
    return isNight ? "img/night.png" : "img/default.png";
  }
}

// Function to get background based on weather condition
function getWeatherConditionBackground(weather, isNight) {
  weather = weather.toLowerCase();
  if (weather.includes("clear")) {
    return isNight ? "url('img/clear-night-bg.png')" : "url('img/clear-bg.jpg')";
  } else if (weather.includes("clouds")) {
    return isNight ? "url('img/cloudy-night-bg.png')" : "url('img/cloudy-bg.jpg')";
  } else if (weather.includes("rain")) {
    return isNight ? "url('img/rainy-night-bg.png')" : "url('img/rainy-bg.jpg')";
  } else if (weather.includes("thunderstorm")) {
    return "url('img/thunderstorm-bg.jpg')";
  } else if (weather.includes("snow")) {
    return isNight ? "url('img/snow-night-bg.png')" : "url('img/snow-bg.jpg')";
  } else if (weather.includes("haze") || weather.includes("mist")) {
    return isNight ? "url('img/haze-night-bg.png')" : "url('img/haze-bg.jpg')";
  } else {
    return isNight ? "url('img/night-bg.png')" : "url('img/default-bg.jpg')";
  }
}

// Search weather by city name
function searchCityWeather() {
  let city = document.getElementById("city-input").value;
  if (city.trim() === "") {
    alert("Please enter a city name.");
    return;
  }

  let units = isCelsius ? "metric" : "imperial";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  fetchWeather(url);
}

// Event listener for search button
document.getElementById("city-search-btn").addEventListener("click", searchCityWeather);

// Toggle between Celsius and Fahrenheit
document.getElementById("unit-toggle").addEventListener("click", () => {
  isCelsius = !isCelsius;
  document.getElementById("unit-toggle").innerHTML = isCelsius ? "Switch to °F" : "Switch to °C";
  getWeather(); // Refresh weather with the new unit
});

// Refresh weather data
document.getElementById("refresh-btn").addEventListener("click", getWeather);

// Initial call to get weather for current location
getWeather();
