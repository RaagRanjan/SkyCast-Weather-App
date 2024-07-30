// JavaScript Code to include and use OpenWeather API that gives weather info by city name 
// API key for OpenWeatherMap API
const apiKey = "0e395d7bb49e9e6460e95fd6a2b125dc";

// API URL for fetching weather data by city name
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Selecting DOM elements using querySelector
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to fetch and display weather data
//async means Asynchronous
async function checkWeather(city) {
try {
// Fetch weather data from OpenWeatherMap API
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

// Handle error if city not found
//Then the error message will be displayed
//and weather info will hide 
if (response.status == 404) {
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";
return;
}

// Clear error message if previous search was unsuccessful
document.querySelector(".error").style.display = "none";

// Parse JSON response
// json() is a function available with response object
const data = await response.json();

// Update DOM with weather information
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

// Set weather icon based on weather condition
if (data.weather[0].main == "Clouds") {
weatherIcon.src = "images/clouds.png";
}
else if (data.weather[0].main == "Clear") {
weatherIcon.src = "images/clear.png";
} 
else if (data.weather[0].main == "Rain") {
weatherIcon.src = "images/rain.png";
}
else if (data.weather[0].main == "Drizzle") {
weatherIcon.src = "images/drizzle.png";
}
else if (data.weather[0].main == "Mist") {
weatherIcon.src = "images/mist.png";
}

// Display weather information container
document.querySelector(".weather").style.display = "block";
}

catch (error) {
console.error("Error fetching weather data:", error);
// Handle any unexpected errors
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";
}
}

// Event listener for search button click
//call the function when the search button is clicked
searchBtn.addEventListener("click", () => {
checkWeather(searchBox.value);
});
