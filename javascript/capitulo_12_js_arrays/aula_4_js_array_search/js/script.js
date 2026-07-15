const colors = ['white', 'yellow', 'black', 'red', 'blue', 'orange', 'purple'];
const numbers = [2, 5, 9, 14, 20, 18, 50, 90];

let cor = colors.indexOf('yellow') + 1;
let cor1 = colors.lastIndexOf('orange') + 1;
let cor2 = colors.includes('black');

let num = numbers.find(myFunc);
function myFunc(value, index, numbers) {
  return value === 18;
}
console.log(num);