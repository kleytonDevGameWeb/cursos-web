const car = {
  nome: 'fiat',
  modelo: '500',
  hello: function () {
    // pode usar this = car
    return alert('Hello');
  }
}

car.color = 'white';

console.log(car.hello());