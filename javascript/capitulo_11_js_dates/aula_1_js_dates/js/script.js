const d = new Date();
const d1 = new Date('2002-08-11');
const d2 = new Date(2002, 8, 11);
let d2ex = d2.toUTCString();//d2.toDateString();


document.write(`<h2>${d2ex}</h2>`);