// Funções de data e Hora
let agora = new Date(); // Instanciando um obj da classe Data
console.log(agora);
console.log(agora.toLocaleDateString);

// Funções GET (Pegar informações)
console.log(agora.getFullYear);

// Funções SET (Informações)
agora.setFullYear(2050);

// Funções TO (Imprimir) - Formato de Texto
console.log(agora.getFullYear());

// Manipulação de Datas
let data1 = new Date();
let data2 = new Date("2025-12-31");

let diferenca = data2-data1; // Miliseconds

console.log(diferenca/(1000*60*60*24));
