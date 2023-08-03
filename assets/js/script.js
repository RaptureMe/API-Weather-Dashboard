var apiKey = "70498a7525a378189dcd476cd02c3e10";
var searchBtn = document.querySelector(".btn");
var userInput = document.querySelector(".me-2");


function searchWeather(event) {
    event.preventDefault()
    var currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=${apiKey}&units=imperial`;
    fetch(currentWeatherAPI, {
  method: 'GET',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".userinput").textContent = userInput.value
    document.querySelector(".current").textContent = data.main.temp
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=70498a7525a378189dcd476cd02c3e10`, {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          document.querySelector("")
        });
  });
};











searchBtn.addEventListener("click", searchWeather)