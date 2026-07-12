const pessoa = {
  nome: 'Kleyton',
  sobreNome: 'Honorio',
  idade: 23,
  upText: function () {
    return this.nome.toUpperCase();
  },
  apresentar: function () {
    return "Olá Meu nome é " + this.nome + " " + this.sobreNome + " e tenho " + this.idade + " Anos";
  }
}

pessoa.tchau = function () {
  return "tchau tchau";
}
console.log(pessoa.apresentar());
console.log(pessoa.tchau());
console.log(pessoa.upText());