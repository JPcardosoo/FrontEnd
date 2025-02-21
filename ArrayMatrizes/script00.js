// Array e Matrizes

// Array
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros[8]);

let texto = ["cachorro", "bola", "sapato", "prédio"]; // Texto
let mista = ["gato", 2, true];
console.log(texto[1]);
console.log(mista[2]);

// Tamanho do array (Length)
console.log(texto.length); // 4

// Adicionar elementos em um array ou alterar

// Adicionar

// Começo (Unshift)
texto.unshift("Pão");
console.log(texto);

// Fim (Push)
texto.push("Jogo");
console.log(texto);

// Remover (Shift)
texto.shift();
console.log(texto);

// Remover do final (Pop)
texto.pop(); // Agora remove o último elemento
console.log(texto);

// Alteração de valor
texto[2] = "Tênis";
console.log(texto);

// Percorrer um array (for // foreach)
for (let i = 0; i < numeros.length; i++) {
  console.log("numeros[" + i + "]=" + numeros[i]);
}

// Foreach
texto.forEach((t) => {
  console.log(t);
});

let lista = [];
for (let i = 1; i <= 100; i++) {
  lista.push(i); 
}
console.log(lista);

// Retorna o índice
console.log(texto.indexOf("Tênis")); 

// Operações Avançadas de Arrays
let valores = [10, 20, 30, 40, 50];

// Map
let valoresDobro = valores.map(x=>x*2);
console.log(valoresDobro);

// Filter
let parteValores = valores.filter(x=>x>20);
console.log(parteValores);

// Filtro e map x<35 x*2
let valoresDobro1 = valores.filter(x=>x<35).map(x=>x*2); 
console.log(valoresDobro1);

// Reduce,
// X = acumulador, y = valor atual
let soma = valores.reduce((x,valorAtual)=>(x+valorAtual),0);

// Sort
let z = [2,6,3,8,1,7,4,9,5];
z.short();
console.log(z);