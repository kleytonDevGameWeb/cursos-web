// Sequencia de Codigo
let x = 5; // 1
let y = 7; // 2
let z = x + y; // 3
console.log(z); // 4

let idade = 7;
let inf = "Sem Informação";
if (idade >= 18) {
  inf = idade + " Anos" + " Voce é de Maior";
} else {
  inf = idade + " Anos" + " Voce é de Menor";
}
console.log("Sua Idade: " + inf);

loop: for (let i = 0; i < 5; i++) {
  if (i === 2) break loop;
  console.log("N: " + i);
}

function myBuy(p1, p2) {
  return p1 * p2;
}

let x2 = myBuy(5, 2);
console.log(x2);