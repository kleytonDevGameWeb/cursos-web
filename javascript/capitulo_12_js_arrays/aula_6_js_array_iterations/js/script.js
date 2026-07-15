const cors = ['white', 'orange', 'blue', 'yellow', 'black', 'red', 'purple', 'green'];
const numbers = [2, 5, 10, 30, 50, 76, 88];

let txt = '';

for (let x of cors) {
  txt += x + ' ';
}

let num = "";

numbers.forEach(myFunc);

function myFunc(value) {
  num += value + " ";
}

//let keys = cors.keys();
let ent = cors.entries();
let entt = cors.with(2, 'lightblue');
let txt1 = '';

for (let x of entt) {
  txt1 += x + ' ';
}

const unir = [...cors, ...numbers];

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log(max);