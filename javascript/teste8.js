// function mensagem() {
//   console.log("Olá mundo!");
// }

// mensagem();
// mensagem();
// mensagem();

// function mensagem() {
//   return "Olá mundo!";
// }

// console.log(mensagem());

// function mensagem(nome) {
//   return `Olá ${nome}!`;
// }

// console.log(mensagem("Ana"));
// console.log(mensagem("José"));
// console.log(mensagem("Pedro"));

// function soma(a = 0, b = 0) {
//   return a + b;
// }

// console.log(soma(2, 3));
// console.log(soma(5, 1));
// console.log(soma(5));

//Expressão de função

// console.log(function (a, b) {
//   return a + b;
// });

// console.log(
//   (function (a, b) {
//     return a + b;
//   })(4, 5) // IIFE - Immediatly Invoked Function Expressions
// );

// let soma = function (a, b) {
//   return a + b;
// };

// console.log(4, 3);
// console.log(soma(4, 3));
// console.log(soma);

// let sum = function (a, b) {
//   return a + b;
// };

// let sub = function (a, b) {
//   return a - b;
// };

// let mul = function (a, b) {
//   return a * b;
// };

// let div = function (a, b) {
//   return a / b;
// };

// function executa(fn, a, b) {
//   return fn(a, b);
// }

// console.log(executa(sum, 12, 3));
// console.log(executa(sub, 12, 3));
// console.log(executa(mul, 12, 3));
// console.log(executa(div, 12, 3));

// Função recursiva (Precisa ser nomeada)

// let fat = function fatorial(n) {
//   if (n <= 1) return 1;
//   return n * fatorial(n - 1);
// };

// console.log(fat(5));
// console.log(fat(3));

//Função Tradicional

let adicao1 = function (a, b) {
  return a + b;
};

// ou

// Função seta (Mais atual elegante)

let adicao2 = (a, b) => a + b;

// Função seta (detalhada - Não é usual)

let adicao3 = (a, b) => {
  let resultado = a + b;
  return resultado;
};

console.log(adicao1(3, 4));
console.log(adicao2(3, 4));
console.log(adicao3(3, 4));
