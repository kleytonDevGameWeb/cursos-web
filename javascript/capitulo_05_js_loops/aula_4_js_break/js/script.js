for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log("Ok: " + i);
}

loop1: for (let i = 0; i < 5; i++) {
  loop2: for (let j = 0; j < 5; j++) {
    if (i === 3) break loop2;
    console.log("N: " + i);
  }
}

let txt = "";
const cars = ['volvo', 'bmw', 'gol', 'fiat', 'Ferrari'];
list: {
  txt += cars[0] + " ";
  txt += cars[1] + " ";
  txt += cars[3] + " ";
  break list;
  txt += cars[4];
}
console.log(txt);