let x = 10;
let y = 20;

x += x == 20 ? x / y : y / x;

y -= y == 10 ? y / x : x / y;

console.log(x, y)
