let pessoa = {
  nome: "Luís",
  idade: 28,
  casado: false,
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.casado);

console.log(pessoa["nome"]);
console.log(pessoa["idade"]);
console.log(pessoa["casado"]);

let nome = "nome";
console.log(pessoa[nome]);

let idade = "idade";
console.log(pessoa[idade]);

let casado = "casado";
console.log(pessoa[casado]);

pessoa.numeroDeFilhos = 0;
console.log(pessoa);

let pessoa2 = {};
let pessoa3 = new Object();
console.log(pessoa3);

pessoa2.nome = "Paulo";
pessoa2.idade = 29;
pessoa2.casado = true;
pessoa2.numeroDeFilhos = 3;

console.log(pessoa2);

function criaPessoa(n, i, c, f) {
  let p = {};
  p.nome = n;
  p.idade = i;
  p.casado = c;
  p.numeroDeFilhos = f;
  return p;
}

let pessoa4 = criaPessoa("Maria", 18, false, 0);
let pessoa5 = criaPessoa("José", 50, true, 1);

console.log(pessoa4);
console.log(pessoa5);

function criaPessoa(n, i, c, f) {
  return {
    nome: n,
    idade: i,
    casado: c,
    numeroDeFilhos: f,
    maiorDeIdade: function () {
      return this.idade >= 18;
    },
  };
}

let pessoa6 = criaPessoa("Diva", 40, false, 0);
let pessoa7 = criaPessoa("Pedro", 10, true, 1);

console.log(pessoa6);
console.log(pessoa6.maiorDeIdade());
console.log(pessoa7);
console.log(pessoa7.maiorDeIdade());

function Pessoa(n, i, c, f) {
  this.nome = n;
  this.idade = i;
  this.casado = c;
  this.numeroDeFilhos = f;
  this.maiorDeIdade = function () {
    return this.idade >= 18;
  }; // this.maiorDeIdade = () => this.idade >= 18;
}

let pessoa8 = new Pessoa("Juca", 90, true, 5);
console.log(pessoa8);
console.log(pessoa8.maiorDeIdade());

for (let chave in pessoa8) {
  if (typeof pessoa8[chave] != "function")
    console.log(`O valor de "${chave}" é "${pessoa8[chave]}"`);
}

let pessoa9 = pessoa8; // Cópia da referência para o objeto
console.log(pessoa9);

pessoa8.nome = "Marcos Paulo";
console.log(pessoa9);

let pessoa10 = {};
for (let chave in pessoa8) {
  pessoa10[chave] = pessoa8[chave];
}
console.log(pessoa10);

pessoa8.nome = "Sandra";
console.log(pessoa8);
console.log(pessoa10);
