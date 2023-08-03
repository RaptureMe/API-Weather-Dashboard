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
    document.querySelector(".userinput").textContent = data.name
    document.querySelector(".current").textContent = data.main.temp + " degrees today!"
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=imperial`, {
        method: 'GET',
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          for ( var i = 1; i<=5; i++) {
          console.log(data);
          document.querySelector(".day"+i).innerHTML = data.list[i*8-4].main.temp + "<br>" + data.list[i*8-4].dt_txt.split(' ')[0];
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

  });
};











searchBtn.addEventListener("click", searchWeather)