let n = +"12";
console.log(typeof n);

let a, b;

a = 2;
b = --a * 2;
console.log(`a = ${a} e b = ${b}`);

a = 2;
b = a-- * 2;
console.log(`a = ${a} e b = ${b}`);

a = 2;
b = ++a * 2;
console.log(`a = ${a} e b = ${b}`);

a = 2;
b = a++ * 2;
console.log(`a = ${a} e b = ${b}`);

let nome = "Luís";
let sobrenome = "Paulo";
console.log(nome + " " + sobrenome);

a = "5" + 2;
console.log(`O resultado de a = "5" + 2 é: ${a} do tipo ${typeof a}`);

b = +"5" + 2;
console.log(`O resultado de b = +"5" + 2 é: ${b} do tipo ${typeof b}`);

let c = "5" - 2;
console.log(`O resultado de c = "5" - 2 é ${c} do tipo ${typeof c}`);

let d = 5 + "2";
console.log(`O resultado de d = 5 + "2" é ${d} do tipo ${typeof d}`);

let e = 5 - "2";
console.log(`O resultado de e = 5 - "2" é ${e} do tipo ${typeof e}`);

let f = 5 + 2 + "2";
console.log(`O resultado de f = 5 + 2 + "2" é ${f} do tipo ${typeof f}`);

let g = 5 + "2" + 2;
console.log(`O resultado de g = 5 + "2" + 2 é ${g} do tipo ${typeof g}`);

let h = +(5 + "2") + 2;
console.log(`O resultado de h = +(5 + "2") + 2 é ${h} do tipo ${typeof h}`);

let i = "5" / "2";
console.log(`O resultado de i = "5" / "2" é ${i} do tipo ${typeof i}`);
