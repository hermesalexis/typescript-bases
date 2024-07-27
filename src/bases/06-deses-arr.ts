// desestructurar un arreglo es tomar un valor de este y llevarlo directamente a una variable

const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

// la desestructuración de un array es posicional
const [ g, v, t, gt, g3 = 'Broli'] = character;

// console.log({ g, v, t, gt, g3 });

const returnArray = () => {
  // as const es para asegurarnos que el primer elemento siempre es un número y el segundo un string
  return [123, 'ABC'] as const;
}

const [ numbers, letters ] = returnArray();

console.log(numbers * 2, letters.toLowerCase());

const persons = [
  {
    id: 123,
    firstName: 'Maria',
    lastName: 'Galvis',
  },
  {
    id: 152,
    firstName: 'Pepe',
    lastName: 'Gonzales',
  },
]

const [ p1, p2 ] = persons;
const { id, firstName, lastName } = p1;

console.log({ id, firstName, lastName });