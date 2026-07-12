const pessoa = {
  nome: 'Kleyton',
  idade: 23
}

let indent = pessoa.nome + ", " + pessoa.idade + " Anos";

let indent1 = "";
for (let x in pessoa) {
  indent1 += pessoa[x] + " ";
}

let myArray = Object.values(pessoa);
let indent2 = myArray.toString();

let indent3 = JSON.stringify(pessoa);
document.write(indent3);