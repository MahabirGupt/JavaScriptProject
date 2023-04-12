"use strict:";

searchButton.addEventListener("click", searchWeather); //calling the function searchWeather

function searchWeather() {
  // to display the loading icon
  loadingText.style.display = "block";
  // hide the data while loading
  weatherBox.style.display = "none";
  var cityName = searchCity.value;
  // check if user has not entered anything
  if (cityName.trim().length == 0) {
    loadingText.style.display = "none";
    return alert("Please enter a city name");
  }
  // set-up a new HTTP request
  var http = new XMLHttpRequest();
  var apiKey = "8d1264f8ebbff5dd371e4f90e86225c9";
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=metric&appid=" +
    apiKey;

  var method = "GET";

  http.open(method, url);
  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      var data = JSON.parse(http.responseText); // parse my JSON which is a string into a JS object
      var weatherData = new Weather(
        cityName,
        data.weather[0].description.toUpperCase()
      ); //weather is an array
      weatherData.temperature = data.main.temp;
      updateWeather(weatherData);
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
      alert("Something went wrong! Please enter city name in full!");
      loadingText.style.display = "none";
    }
  };
  http.send();
}

function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;

  // to hide the loading icon when the data is there
  loadingText.style.display = "none";
  // to display the data
  weatherBox.style.display = "block";
}
