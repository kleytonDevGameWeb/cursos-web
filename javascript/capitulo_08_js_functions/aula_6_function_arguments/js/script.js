function mult(a, b) {
  return a * b;
}

console.log(mult(3, 5));

let x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax(4, 5, 6, 7));

let x1 = 5;
let y1 = 3;
function somar(x, y = 2) {
  if (y === undefined) {
    y = 3;
  }
  return y * x;
}

console.log(somar(x1));

function sum(...args) {
  let sum = 0;
  for (let ags of args) sum += ags;
  return sum;
}

let x2 = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x2);