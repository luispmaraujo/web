//Vetor de Strings

let frutas = ["Laranja", "Maçã", "Banana"];
console.log(frutas);
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

//Vetor de números

let numeros = [1, 5, 3, 8, 0, 6, 9];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
console.log(numeros[5]);
console.log(numeros[6]);

//Vetor misto

let misto = ["José", 35, true];
console.log(misto);
console.log(misto[0]);
console.log(misto[1]);
console.log(misto[2]);

// Inserções em vetores

frutas[2] = "Limão";
console.log(frutas[2]);
console.log(frutas);

frutas[3] = "Pêra";
console.log(frutas[3]);
console.log(frutas);
console.log(frutas.length);

frutas[6] = "Abacaxi";
console.log(`O item presente na posição "6" do vetor "frutas" é: ${frutas[6]}`);
console.log(`Os itens que compõem o vetor são: ${frutas}`);
console.log(`O tamanho total do vetor é de: ${frutas.length} posições`);

frutas[frutas.length] = "Melão";
console.log(frutas);
frutas[frutas.length] = "Melancia";
console.log(frutas);

let frutas2 = [];
frutas2[frutas2.length] = "Melão";
console.log(frutas2);
frutas2[frutas2.length] = "Melancia";
console.log(frutas2);

let frutas3 = new Array();
frutas3[frutas3.length] = "Morango";
console.log(frutas3);
frutas3[frutas3.length] = "Caju";
console.log(frutas3);

// Percorrer todo o vetor

for (let index = 0; index < frutas.length; index++) {
  console.log(index, frutas[index]);
}

for (let index = 0; index < frutas.length; index++) {
  console.log(`Posição ${index}: ${frutas[index]};`);
}

frutas.sort(); //Método para ordenar os itens do vetor em ordem alfabética
console.log(frutas);

frutas.push("Morango"); //Insere um novo valor no final do vetor
console.log(frutas);

frutas.pop(); //Remove um novo valor no final do vetor
console.log(frutas);

let remove = frutas.pop(); //Remove um novo valor no final do vetor
console.log(remove);
console.log(frutas);

frutas.unshift("Uva"); //Inclui um novo valor no início do vetor
console.log(frutas);

frutas.shift(); //Remove um novo valor no início do vetor
console.log(frutas);

frutas.forEach((f) => console.log(f)); // Retorna todos os itens do vetor "Frutas"

let frutas4 = frutas.map((f) => f.toLocaleUpperCase()); // Cria um novo vetor e converte todas as letras para caixa alta
console.log(frutas4);
