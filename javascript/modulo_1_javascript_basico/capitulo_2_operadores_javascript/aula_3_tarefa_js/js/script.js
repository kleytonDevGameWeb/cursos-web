// operador +=
let x = 7;
x += 5;

// operador -=
let x1 = 17;
x1 -= 5;

// operador *=
let x2 = 4;
x2 *= 3;

// operador **=
let x3 = 6;
x3 ** 2;

// operador /=
let x4 = 24;
x4 /= 2;

// operador %=
let x5 = 40;
x5 /= 3;

// operador &&=
let x6 = true;
let y6 = x6 &&= 12;

// operador ||=
let x7 = false;
let y7 = x7 ||= 12;

// operador ??=
let x8;
x ??= 12;

// operador Spread (...)
let txt9 = "12345";
let min = Math.min(...txt9);
let max = Math.max(...txt9);
console.log(max);