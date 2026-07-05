// JavaScript E lógico
let x = 5;
let y = 7;
let z = (x < 10 && y > 3);

// OU lógico em JavaScript
let x1 = 10;
let y1 = 7;
let z1 = (x1 == 10 || y1 > 17);

// JavaScript Negação lógica
let x2 = 5;
let y2 = 6;
let z2 = !((x2 < 6) && (y2 > 4));

// Operador de Coalescência Nula (??)
let nome = null;
let txt = "Klebery";
let res = nome ?? txt;

console.log(res);