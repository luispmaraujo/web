let a = "5";
let b = 5;
let c = 2;

console.log("Teste 1", a > c);
console.log("Teste 2", b > c);
console.log("Teste 3", b >= c);
console.log("Teste 4", b < c);
console.log("Teste 5", b <= c);
console.log("Teste 6", b != c);
console.log("Teste 7", a != c);
console.log("Teste 8", a != b);
console.log("Teste 9", a == b);
console.log("Teste 10", a === b);

console.log("Teste 11", "Z" > "A");
console.log("Teste 12", "Z" > "a");
console.log("Teste 13", "Pato" > "Pata");
console.log("Teste 14", "Dezena" > "Dez");

let x;

console.log("Teste 15", x == undefined);
console.log("Teste 16", x == null);
console.log("Teste 17", x === undefined);
console.log("Teste 18", x === null);

console.log("Teste 19", a == b && b > c); // V && V => V
console.log("Teste 20", a === b && b > c); // V && F => F
console.log("Teste 21", a == b && b < c); // F && V => F
console.log("Teste 22", a === b && b < c); // F && F => F

console.log("Teste 23", a == b || b > c); // V || V => V
console.log("Teste 24", a === b || b > c); // V || F => V
console.log("Teste 25", a == b || b < c); // F || V => V
console.log("Teste 26", a === b || b < c); // F || F => F

console.log("Teste 27", !(b > c)); // !V => F, !F => V
