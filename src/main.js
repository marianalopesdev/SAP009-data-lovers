import data from "./data/ghibli/ghibli.js";
import { films } from "./data.js";

const allAnimations = data.films;

const an = document.querySelector(".animation-cards");
document.querySelector(".animation-cards").innerHTML = showAnimations(allAnimations);
const filterButton = document.getElementById("filter-button");
filterButton.addEventListener("click", showAlphabeticalOrder);

function showAnimations(allAnimations) {
  return allAnimations
    .map(
      (animation) =>
        `
  <div class="cards">
  <img class="posters" src="${animation.poster}" alt="Pôster do filme">
  <p class="film-info">${animation.title} </p>
  <p class="film-info"> ${animation.release_date}</p>
  </div>
  `
    )
    .join("");
}

function showAlphabeticalOrder() {
  //alert("showAlphabeticalOrder");
  const teste = films.alphabeticOrderFilter(allAnimations);
 

  an.innerHTML = teste
    .map(
      (animation) =>
        `
  <div class="cards">
  <img class="posters" src="${animation.poster}" alt="Pôster do filme">
  <p class="film-info">${animation.title} </p>
  <p class="film-info"> ${animation.release_date}</p>
  </div>
  `
    )
    .join("");
  filterButton.value = "Show films from Z - A";
  //
  list.appendChild(newDiv2);
  
 
}



//CREATE ELEMENT E APPENDCHILD DE EXEMPLO
const list = document.getElementById("list-container");
function createElement(data) {
  // Cria um novo elemento div
  const newDiv = document.createElement("div");
  // Adiciona conteúdo ao novo elemento div
  newDiv.innerHTML =
    "Total number of animations produced by Studio Ghibli: " + data.length;
  // Adiciona o novo elemento div ao documento HTML
  list.appendChild(newDiv);
}

createElement(allAnimations);
