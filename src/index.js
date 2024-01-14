function searchEngine(event) {
  /* searchEngine: recibe el nombre de una ciudad al clickar el boton "search"
    y cambia el contenido de la etiqueta h1 con el valor introducido
     */

  event.preventDefault(); // Prevenir la accion por defecto que es recargar la pagina.

  const searchInput = document.querySelector("#search-input");
  const cityName = document.querySelector("#current-city");
  cityName.innerHTML = searchInput.value;
}

const searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchEngine);
