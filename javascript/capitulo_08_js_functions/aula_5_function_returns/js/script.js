function msg() {
  return "Hello World";
}

console.log(msg());

function ccl(a, b) {
  return "Sem Calculo";
  
  return a * b;//Não sera executado
}

console.log(ccl(3, 5));

function undf(a, b) {
  let x = a + b;
}

console.log(undf(5, 7));

function checkAge(age) {
  if (age < 18) {
    return "Vc tem " + age + " Anos. Vc é de Menor";
  }
  return "Vc tem " + age + " Anos. Vc é de Maior";
}

console.log(checkAge(17));