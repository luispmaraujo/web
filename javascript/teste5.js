// let acessoPermitido = false;
// let idade = 21;

// if (idade >= 18) acessoPermitido = true;
// console.log(acessoPermitido);

// if (idade >= 18) {
//   acessoPermitido = true;
//   console.log(acessoPermitido);
// }

// let acessoPermitido;
// let idade = 21;

// if (idade >= 18) acessoPermitido = true;
// else acessoPermitido = false;

// console.log(acessoPermitido);

// let numero = 13;
// let ehPar = numero % 2 == 0 ? true : false;
// console.log(ehPar);

// let dividendo = 12;
// let divisor = 3;
// let quociente = divisor != 0 ? dividendo / divisor : Infinity;
// console.log(quociente);

// let nota = 75;
// let frequencia = 0.8;
// let aprovação = false;

// if (nota >= 60 && frequencia >= 0.75)
//   console.log(`Sua nota foi: ${nota}
//     Sua frequencia foi: ${frequencia}
//     Parabéns! Você foi aprovado!`);
// else if (nota < 60 && frequencia < 0.75)
//   console.log(`Sua nota foi: ${nota}
//     Sua frequencia foi: ${frequencia}
//     Você está de reprovado!`);
// else
//   console.log(`Sua nota foi: ${nota}
//   Sua frequencia foi: ${frequencia}
//   Você está de recuperação!`);

// let nota = 75;
// let frequencia = 0.8;
// let aprovação = false;

// if (nota >= 60) {
//   if (frequencia >= 0.75) resultado = "aprovado";
//   else resultado = "reprovado por frequencia";
// } else {
//   if (frequencia >= 0.75) resultado = "aprovado por nota";
//   else resultado = "reprovado por nota e frequencia";
// }
// console.log(resultado);

let a = 5,
  b = 3,
  operador = "",
  resultado;

switch (operador) {
  case "+":
    resultado = a + b;
    break;

  case "-":
    resultado = a - b;
    break;

  case "*":
    resultado = a * b;
    break;

  case "/":
    resultado = a / b;
    break;

  default:
    console.log("Operador inválido");
    resultado = null;
    break;
}
console.log(`O resuldtado é: ${resultado}`);
