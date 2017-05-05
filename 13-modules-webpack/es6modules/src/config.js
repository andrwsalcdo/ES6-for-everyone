//named export
//you have to import as whatever it was exported as.
export const apiKey = 'abc123';

export const url = 'http//wesbos.com';


export function sayHi(name) {
  console.log(`hello there ${name}`);
}

const age = 100;
const dog = 'snickers';

//imagine age is already a variable in another file,
//so you can export 'age' as 'old' so then u can use it. 
export { age as old, dog };
