function getCurrentWeather(response) {
  const tempElement = document.querySelector("#current-temperature");
  const tempResponse = response.data.temperature.current;
  const cityNameElement = document.querySelector("#current-city");
  const dateElement = document.querySelector("#current-date");
  const conditionElement = document.querySelector("#current-condition");
  const humidityElement = document.querySelector("#current-humidity");
  const windElement = document.querySelector("#current-wind");
  const date = new Date(response.data.time * 1000);

  tempElement.innerHTML = Math.round(tempResponse);
  cityNameElement.innerHTML = response.data.city;
  dateElement.innerHTML = formatDate(date);
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
}

function formatDate(date) {
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  /* Api call: recibe el nombre de una ciudad construye la url con el nombre y mi apikey y llama a la sig funcion */

  const apiKey = "381070c4bbet21eec6f3do8eb01a4a37";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getCurrentWeather);
}

function searchEngine(event) {
  /* searchEngine: recibe el nombre de una ciudad al clickar el boton "search" y cambia el contenido de la etiqueta h1 con el valor introducido */

  event.preventDefault(); // Prevenir la accion por defecto que es recargar la pagina.

  const searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

const searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchEngine);

searchCity("Asunción");
