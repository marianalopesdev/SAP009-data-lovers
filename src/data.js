import data from "./data/ghibli/ghibli.js";
// estas funciones son de ejemplo

// export const example = () => {
//   return "example";
// };

// export const anotherExample = () => {
//   return "OMG";
// };


const dataFilms = data.films;
// export const films = {


//   alphabeticOrderFilter: function alphabeticOrderFilter(dataFilms) {

// export function searchFilm() {
//   //Chamar área do filter e retornar em uppercase para facilitar na digitação
//   const input = document.getElementById("filter").value.toUpperCase();
//   //Chamar cards do HTML
//   const cards = document.getElementsByClassName("cards");

//   //Iterar por todos os cards e selecionar os títulos pelo index de cada um
//   for (let i = 0; i < cards.length; i++) {
//     const titles = cards[i].querySelector("#film-title");
//     //console.log(titles);

//     //Checar o texto do título em uppercase e o index de input no array 
//     if(titles.innerText.toUpperCase().indexOf(input) > -1){
//       //Retornar o card do array se o index for válido, ou seja, existir no array (igual ou maior que 0)
//       cards[i].style.display = "";
//     } else {
//       //Se o index for inválido, o display será nulo, e nada aparecerá
//       cards[i].style.display = "none";
//     }

//     //console.log(cards);
//   }
// }


export const films = {
  alphabeticOrderFilter: function alphabeticOrderFilter() {

    
    return dataFilms.sort(function(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;

      
    });
    
  },
  

  inverseAlphabeticOrderFilter: function inverseAlphabeticOrderFilter(dataFilms) {

//alert('inverse');
return dataFilms.sort((a, b) => b.title.localeCompare(a.title));

      
    
  } ,

  searchFilm: function searchFilm() {
    //Chamar área do filter e retornar em uppercase para facilitar na digitação
    const input = document.getElementById("filter").value.toUpperCase();
    //Chamar cards do HTML
    const cards = document.getElementsByClassName("cards");
  
    //Iterar por todos os cards e selecionar os títulos pelo index de cada um
    for (let i = 0; i < cards.length; i++) {
      const titles = cards[i].querySelector("#film-title");
      //console.log(titles);
  
      //Checar o texto do título em uppercase e o index de input no array 
      if(titles.innerText.toUpperCase().indexOf(input) > -1){
        //Retornar o card do array se o index for válido, ou seja, existir no array (igual ou maior que 0)
        cards[i].style.display = "";
      } else {
        //Se o index for inválido, o display será nulo, e nada aparecerá
        cards[i].style.display = "none";
      }
  
      //console.log(cards);
    }
  }
};

