// heroes no está en la llaves porque es la exportación por defecto del módulo heroes
// owners es una exportación individual

//import heroes, { owners } from "../data/herores";

// En este caso misPersonaje contiene el valor del elemento exportado por defecto en el archivo heroes
///import misPersonaje from '../data/heroes';

// Cuando importo una interface o un type se debe poner la palabra type antes del elemento que se va a importar
import heroes, { type Owner } from "../data/heroes";

export const getHeroById = ( id: number ) => {
  return heroes.find( heroe => heroe.id == id );
}

// owner: 'DC' | 'Marvel'  el operador | indica a la función que sólo permite recibir los elementos DC o Marvel

export const getHeroesByOwner = (owner: Owner) => {
  return heroes.filter( heroe => heroe.owner == owner );
}

// console.log( getHeroesByOwner('Marvel') );