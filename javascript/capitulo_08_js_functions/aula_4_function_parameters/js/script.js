function mult(x, y) {
  return x * y;
}

let ress = mult(3, 5);
console.log(ress);

function hello(name) {
  return "Hello " + name;
}

let ola = hello("Kleyton");
console.log(ola);

function pessoa(name, sobrenome, idade) {
  return `Nome: ${name}. SobreNome: ${sobrenome}. Idade: ${idade}.`;
}

let eu = pessoa("Kleyton", "Honório", 23);
console.log(eu);

function somar(x = 20) {
  return x - 6;
}

let soma = somar(10);
console.log(soma);