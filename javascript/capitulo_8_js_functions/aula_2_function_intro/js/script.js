function hello() {
  return "Hello";
}

let sayHello = hello();
console.log(sayHello);

function somar(p1, p2) {
  return p1 * p2;
}

let soma = somar(3, 5);
let soma1 = somar(3, 4);
console.log(soma);
console.log(soma1);

function somar1(p1, p2) {
  let x = 9;
  return x + p1 * p2;
}

let soma2 = somar1(3, 5);
console.log(soma2);
//console.log(x);