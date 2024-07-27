// Desestructurar me permite acceder de una forma más fácil a los valores de las propiedades de un objeto

interface Hero {
  // La interfaz me define la estructura de como es un objeto
  name: string;
  age: number;
  codeName: string;
  power?: string; // el ? indica que esta propiedad la pueden tener unos objetos y otros no
}

export const person: Hero = { // Indica que el objeto person es de tipo Hero
  name: "Tony",
  age: 45,
  codeName: "Iroman",
  //power: 'money',
};

// const { age, name, power = "No tiene poder" } = person; // puede ser un Obj o array
// console.log({ age, name, power });


// La inteface me permite definir la estructura que debe tener el objeto, así como sus
// propiedades y tipos.

interface CreateHeroArgs {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

// En este caso se utiliza la desestructuración de los argumentos de una función, en
// donde se le pasa un objeto y por medio de la interface se respecta la estructura con
// sus tipos esperados. 
const createHero = ({ name, age, codeName, power }: CreateHeroArgs) => ({
  id: 123456,
  name: name,
  age: age,
  codeName: codeName,
  power: power ?? 'No tiene poder', // ?? evalua valores nulos
})


console.log(createHero( person ));