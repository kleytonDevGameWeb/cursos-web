let txt = `I'am kleb, "Hello World"`;

let txt1 = `ohhhuhjbh
vjbjjkbj
vjhj
hihjhkjkjjnkn
hjhhbkb`;

let name = 'kley';
let sname = "honr";
let txt2 = `Welcome: ${name} ${sname}`;

let price = 10;
let vat = 0.25;
let total = `total: ${(price * (1 + vat)).toFixed(2)}`;

let h = "cursos web";
let tags = ["html-canvas", "javascript", "typescript"];

let html = `<h2>${h}</h2><br><ul>`;
for (let x7 of tags) {
  html += `<li>${x7}</li>`;
}
html += `</ul>`;

document.write(html);
console.log(total);