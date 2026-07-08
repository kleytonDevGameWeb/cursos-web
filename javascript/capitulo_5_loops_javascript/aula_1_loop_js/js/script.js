// laço For

const cars = ['volvo', 'fiat', 'bmw', 'ferari'];

/*
let txt = cars[0] + " ";
txt += cars[1] + " ";
txt += cars[2];
*/

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (let i = 0; i < 5; i++) {
  console.log("Isso é: " + i);
}

let i = 5;
for (i = 0; i < 10; i++) {
  
}
console.log(i);

let i2 = 5;
for (let i2 = 0; i2 < 10; i2++) {
  
}
console.log(i2);

// Loop While
let i3 = 0;
while (i3 < 10) {
  console.log("N: " + i3);
  i3++
}

// Loop Do While
let i4 = 0;
do {
  console.log("Do N: " + i4);
  i4++;
} while (i4 < 7);