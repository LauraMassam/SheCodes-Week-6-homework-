//show current time
let currentTime = new Date();
let hours = currentTime.getHours();
let mins = currentTime.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
//end current time

//show current day
function showDay(){
  let day = days[currentTime.getDay()];
  let today = document.querySelector("#current-day")
  today.innerHTML = `${day}`;
}
function showTime(){
  let theCurrentTime = document.querySelector("#current-time")
  theCurrentTime.innerHTML = `${hours} : ${mins}`;  
}
showDay()
showTime()
//end current day

//convert celsius / fahrenheit
function changeToFahrenheit() {
  let temperatureToday = document.querySelector("#current-temp");
  temperatureToday.innerHTML = "18";
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", changeToFahrenheit);

function changeToCelsius() {
  let temperatureToday = document.querySelector("#current-temp");
  temperatureToday.innerHTML = "64";
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", changeToCelsius);
// end convert celsius / fahrenheit

function displayWeatherCondition (response){
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#weather-overview-today").innerHTML = response.data.weather.description;
}

function searchCity(city){
  let apiKey = "9aaa9a2a183bbe9e6cb58bc031908f93";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  }

function handleSubmit(event){
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position){
let apiKey = "9aaa9a2a183bbe9e6cb58bc031908f93";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#user-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");

