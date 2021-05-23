//OBS.: Nunca declare variáveis com o mesmo nome!
//var é uma variável do tipo global - funciona dentro e fora do bloco

{
  var nome;
  nome = "Luís";
  console.log(nome);
}

// {
//   var nome = "Luís";
//   console.log(nome);
// }

//let é uma variável do tipo local - funciona apenas dentro do bloco

{
  let nome;
  nome = "Paulo";
  console.log(nome);
}

// {
//   let nome = "Paulo";
//   console.log(nome);
// }

let n = 2;
n = 3;
console.log(n);

//const é uma constante, o valor nunca é alterado depois de ser definido

const PI = 3.14159;
PI = 3;
console.log(PI);
