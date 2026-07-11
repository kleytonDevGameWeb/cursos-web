function hello() {
  return "Hello";
}

let ola = hello();
console.log(ola);
document.write("<h1>ola</h1>");
document.getElementById('ola').innerText = ola;

function cell(x) {
  return (5 / 9) * (x-33);
}

//let c = cell(77);
let c1 = cell;
console.log(c1);

function hello3() {
  return "Hello";
}

function btnH() {
  document.getElementById('ola').innerHTML = "<h2>Hello Kleyton</h2>";
}