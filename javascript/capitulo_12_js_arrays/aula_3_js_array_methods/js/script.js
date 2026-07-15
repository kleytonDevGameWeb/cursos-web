const cars = ['volvo', 'bmw', 'fiat', 'ferrari'];
const name = ['nome:', 'nome1'];

// Comprimento do array em JavaScript
let x = cars.length;

// JavaScript Array toString()
let x1 = cars.toString();

// Matriz JavaScript at()
let x2 = cars.at(1);

// Junção de array em JavaScript()
let x3 = cars.join(' * ');

// JavaScript Array pop()
let x4 = cars.pop();

// Array em JavaScript push()
let x5 = cars.push('camaro');

cars[cars.length] = 'kiwi';

console.log(Array.isArray(cars));

// Concat() de array em JavaScript
let conc = name.concat(cars, 'Kleyton');

console.log(conc);