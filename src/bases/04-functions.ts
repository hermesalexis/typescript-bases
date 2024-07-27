// function greetPerson( name: string) {
//   return `Hola, ${ name }`;
// }

const greetPerson = (name: string) => `Hola, ${name}`; // función flecha de una sola línea

const getUser = (uid: string) => ({
  // función flecha que retorna un objeto
  uid: uid,
  username: "Tony01",
});

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
    power: "Super Fuerza",
  },
];

const hero = heroes.find((h) => h.id == 1);

console.log(hero?.power?.toUpperCase()); // null check
