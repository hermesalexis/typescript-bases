const firstName = 'Tonny'; //constantes se definen como const, si la variable nunca cambia es un const
const lastName = 'Stark';
export const fullName = `${ firstName } ${ lastName }`; // interpolación de strings

//console.log({firstName, lastName}); // console log con {} imprime la variable como un objeto. también se puede con console table

// if (true) {
//   const firstName = 'pepe'; // cuando se sale del scope la variable firstName se elimina
// }

// console.log(firstName); // no se imprime pepe porque la variable inicial tiene un scope más alto

// console.log(fullName);