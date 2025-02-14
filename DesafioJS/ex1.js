var prompt = require('prompt-sync')();

//1. Verificação de Idade
let idade = Number(prompt("Informe a sua idade:"));
if (idade < 18) {
    console.log("Menor de idade");
} else if (idade >= 18 && idade <= 65) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

//2. Tabuada
let tabuada = Number(prompt("Informe o numero de vezes para multiplicar o 5? "));
for (let i = 1; i <= tabuada; i++) {
    console.log("Número:", i*5);
}

//3. Verificação de Números Pares
let numerosPares = [];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);
