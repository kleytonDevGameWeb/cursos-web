const cars = ['volvo', 'bmw', 'fiat'];
cars[3] = 'ferrari';

cars[1] = 'gol';
let txt1 = cars[cars.length - 1];//length;

console.log(txt1);

cars.push('camaro');

let txt = '<ul>';
for (let i = 0; i < cars.length; i++) {
  txt += '<li>' + cars[i] + '</li>';
  
}

txt += '</ul>';

document.write(txt);

console.log(Array.isArray(cars))