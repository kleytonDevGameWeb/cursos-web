let myFunc = function (a, b) {
  return a * b;
};

console.log(myFunc(3, 5));

function run(fn) {
  return fn();
}

let hello = function () {
  return "Hello";
}

console.log(run(hello));