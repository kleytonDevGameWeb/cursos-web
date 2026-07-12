const pessoa = {
  nome: 'kleybony',
  idade: 400,
  tamanho: 170,
  cor: 'morena',
  myCars: {
    car1: 'fiat',
    car2: 'ferari'
  }
}

delete pessoa.cor;
console.log(pessoa);
console.log("nome" in pessoa);
console.log(pessoa.myCars.car1);