const mult = (a, b) => a + b;

const mult1 = (x, y) => {
  return x * y;
}

const mult2 = (x1, y1) => x1 * y1;

const hello = () => "Hello";

const mult3 = x2 => x2 * 60;

//OÓTIMO PRATICA
const myFunction = (x, y) => {
  return x * y;
}

console.log(myFunction(3, 5));

console.log(somar(3, 7));

function somar(a, b) {
  return a * b;
}

const pessoa = {
  name: 'kley',
  greet: function() {
    return this.name;
  }
}

console.log(pessoa.greet());

const pessoa1 = {
  name: 'kley',
  greet: () => {
    return this.name;
  }
}

console.log(pessoa1.greet());