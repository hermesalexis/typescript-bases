const numberArray = [1,2,3,4,5];
numberArray.push(10);

const numberArray2 = [...numberArray]; // copio array en array2 para evitar que el código mute.
numberArray2.push(7);

console.log({ numberArray, numberArray2 });

export {};