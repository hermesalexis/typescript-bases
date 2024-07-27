// const person = {
//   lastName: 'Stark',
//   age: 45,
//   address: {
//     city: 'New York',
//     zip: 51234,
//     lat: 14.5623,
//     lng: 34.5623
//   }
// } as const; // Objeto de solo lectura

export const person = {
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 51234,
    lat: 14.5623,
    lng: 34.5623
  }
};

//const person2 = {...person}; // se hace una copia de person para que no quede la misma referencia del objeto en person2, es una copia de person, pero no copia los objetos anidados, en este caso address
const person2 = structuredClone(person); // se clona person

person2.lastName = 'Parker';
person2.address.city = 'LA';
console.log({person});
console.log({person2});
