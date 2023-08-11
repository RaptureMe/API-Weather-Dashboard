var apiKey = "70498a7525a378189dcd476cd02c3e10";
var searchBtn = document.querySelector(".btn");
var userInput = document.querySelector(".me-2");
var searchHistory = [];

// function on page load to input values on button click, moves data to other functions
function searchButtonClk(event) {
  event.preventDefault(); // Was having issues with page reloading, added Prevent
  searchWeather(userInput.value);
  saveLocal(userInput.value) // Current day weather API, Adds user Input and API key on search
}

function forecastWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`,
    {
      method: "GET",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 1; i <= 5; i++) {
        console.log(data);
        document.querySelector(".day" + i).innerHTML =
          data.list[i * 8 - 4].main.temp +
          "<br>" +
          data.list[i * 8 - 4].dt_txt.split(" ")[0];
      }
      //   /* document.querySelector(".day2").innerHTML = data.list[12].main.temp + "<br>" + data.list[4].dt_txt.split(' ')[0];
      //   document.querySelector(".day3").innerHTML = data.list[20].main.temp + "<br>" + data.list[4].dt_txt.split(' ')[0];
      //   document.querySelector(".day4").innerHTML = data.list[28].main.temp + "<br>" + data.list[4].dt_txt.split(' ')[0];
      //   document.querySelector(".day5").innerHTML = data.list[36].main.temp + "<br>" + data.list[4].dt_txt.split(' ')[0]; */
      // }

      // var count = 1;
      // for ( var i = 4; i<=36; i=i+8) {
      //   console.log(data);
      //   document.querySelector(".day"+count).innerHTML = data.list[i].main.temp + "<br>" + data.list[i].dt_txt.split(' ')[0];
      //   count++;
      // }
    });
}

function searchWeather(city) {
  var currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  fetch(currentWeatherAPI, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".userinput").textContent = data.name;
      document.querySelector(".current").textContent =
        data.main.temp + " degrees today!";
      forecastWeather(data.coord.lat, data.coord.lon);
    });
}

function saveLocal(city) {
  // save user input to local storage
  searchHistory.push(city);
  localStorage.setItem("searchHistory",JSON.stringify(searchHistory));
}

function getLocal() {
  // get local storage
  var parsedHistory = JSON.parse(localStorage.getItem("searchHistory"));
  searchHistory = parsedHistory;
}

// function displayHistory() {
//   for () //loop over search history
//   create buttons from search history

// }

searchWeather("Orange");
getLocal();
searchBtn.addEventListener("click", searchButtonClk);
