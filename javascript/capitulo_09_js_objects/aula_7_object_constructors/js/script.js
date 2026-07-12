function pessoa(nome, idade, cor) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.regiao = 'Brasil';
  this.apresentar = function() {
    return "Ola Sou " + this.nome + ". e Tenho " + this.idade + " Anos e Sou " + (this.regiao === 'Brasil' ? 'Brasileiro' : 'false');
  }
}

const myBrother = new pessoa('vitor', 20, 'moreno');
myBrother.regiao = 'Japan';

const mySister = new pessoa('ingridy', 19, 'morena');

const I = new pessoa('Kleyton', 23, 'moreno');
I.tchau = function () {
  return "tchau!";
}

console.log(I.apresentar());
console.log(I.tchau());