const pessoa1 = {
  nome: 'joe',
  hello: function () {
    return "hello " + this.nome;
  }
}

const pessoa2 = {
  nome: 'anna',
  hello: function () {
    return "Hello " + this.nome;
  }
}

document.write(pessoa1.hello());

let x = this;
document.write(x);

function myFunc() {
  return this;
}

console.log(myFunc());