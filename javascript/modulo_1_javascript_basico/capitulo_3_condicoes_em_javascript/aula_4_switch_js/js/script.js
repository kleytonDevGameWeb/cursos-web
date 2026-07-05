let day;
switch (new Date().getDay()) {
  case 0:
    day = "Domindo";
    break;
  case 1:
    day = "Segunda";
    break;
  case 2:
    day = "Terça";
    break;
  case 3:
    day = "Quarta";
    break;
  case 4:
    day = "Quinta";
    break;
  case 5:
    day = "sexta";
    break;
  case 6:
    day = "Sábado";
    break;
  default:
    day = "Dia da Semana Ivalido Atualiza a Pagina";
}

console.log(day);

let x = 7;
let txt;
switch (x) {
  case 0:
    txt = "off";
    break;
  case 1:
    txt = "on";
    break;
  default:
    txt = "Invalido";
}
console.log(txt);