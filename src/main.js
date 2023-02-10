import data from "./data/ghibli/ghibli.js";
import { films } from "./data.js";

const allAnimations = data.films;

document.querySelector(".animation_cards").innerHTML = showAnimations(allAnimations);
const filterButton = document.getElementById("filter-button");
filterButton.addEventListener("click", teste1);

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

function teste1() {
  //alert("teste1");
  const teste = films.alphabeticOrderFilter(allAnimations);
  const newDiv2 = document.createElement("div");

  newDiv2.innerHTML = teste
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
