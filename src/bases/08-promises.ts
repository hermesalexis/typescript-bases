import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// console.log("Inicio");
// Concepto yo te prometo que .... puede que cumpla, puede que no. ejemplo: Te prometo que si me prestas dinero, te lo devuelvo en x tiempo
// Ejecutan trabajos asincronos, pero también podría hacersen sincrono.

// 1. resolve Función callback que se ejecuta cuando la promesa se resuelve con éxito
// 2. reject Función callback que se ejecuta cuandola promesa falla
// la promesa y sus callbacks se ejecutan cuando ya no hay nada en el hilo principal
// Sólo se puede llamar un resolve o un reject una sola vez

// * then: se ejecuta cuando la promesa se resuelve con éxito
// * catch: se ejecuta cuando la promesa falla
// * finally: siempre se ejecuta independiente si la promesa falla o no.
// new Promise((resolve, reject) => {
//   //console.log('Cuerpo de la promesa');

//   setTimeout(() => {
//     //resolve('Mi amigo cumplió');

//     reject("Mi amigo no cumplió");
//   }, 1000);
// })
//   .then((message) => console.log(message))
//   .catch((errorMessage) => console.log(errorMessage))
//   .finally(() => console.log("Fin de la promesa"));

// console.log("Final");

// Promise<Hero> indica que la función va a retornar un tipo Hero que es una interface, es muy util para saber las propiedades y el tipo del objeto
const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      hero ? resolve(hero) : reject(`Héroe no encontrado #${id}`);

      reject(`Héroe no encontrado #${id}`);
    }, 1500);
  });
};

getHeroByIdAsync(3)
  .then((hero) => console.log("El nombre es", hero.name))
  .catch(alert);

// este código message => .catch( message => alert(message) ) es igual a .catch( alert )
