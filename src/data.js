import data from "./data/ghibli/ghibli.js";
// estas funciones son de ejemplo

// export const example = () => {
//   return "example";
// };

// export const anotherExample = () => {
//   return "OMG";
// };

//const dataFilms = data.films;
export const films = {


  alphabeticOrderFilter: function alphabeticOrderFilter(dataFilms) {
    //Variável para encontrar os films em data
    
    //Variável que retorna os títulos dos filmes como array
  //   const teste = dataFilms.map(
  //     (animation) => animation.title);
  //   //Variável para colocar em ordem os títulos
  //   const sorted = teste.sort();
  // //  return alert(((sorted).join(" ")));
  //   console.log(sorted);
  
    
    return dataFilms.sort(function(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;

      
    });
    
  },
  

  inverseAlphabeticOrderFilter: function inverseAlphabeticOrderFilter(dataFilms) {

//alert('inverse');
return dataFilms.sort((a, b) => b.title.localeCompare(a.title));

      
    
  } 
};