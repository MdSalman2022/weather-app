let weather = {
  apiKey: "4ee09db27012dec506672d4fe88697f7",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

//weather search

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Dhaka");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novermber",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
const currentDate = document.querySelector(".date");
const currentDay1 = document.querySelector(".day1");
const currentDay2 = document.querySelector(".day2");
const currentDay3 = document.querySelector(".day3");
const currentDay4 = document.querySelector(".day4");
const currentDay5 = document.querySelector(".day5");
currentDate.innerHTML =
  "<h4>" + days[day] + " " + date + " " + months[month] + " " + year;

currentDay1.innerHTML = "<h1>" + days[day + 1] + "</h1>";
currentDay2.innerHTML = "<h1>" + days[day + 2] + "</h1>";
currentDay3.innerHTML = "<h1>" + days[day + 3] + "</h1>";
currentDay4.innerHTML = "<h1>" + days[day + 4] + "</h1>";
currentDay5.innerHTML = "<h1>" + days[day + 5] + "</h1>";
