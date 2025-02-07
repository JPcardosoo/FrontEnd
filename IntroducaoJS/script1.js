//Tipos de dados
var nome = "Cardoso"; //Tipo texto (String)
var idade = 17; //Tipo inteiro (Number)
var nota = 9.5; // Tipo decimal (Number)
var data = null; //Tipo indefinido
var aprovado = true; //Tipo boleana
var reprovado = false; //Tipo nula

//Variáveis e Constantes (Var, Let e Const)
var nota1 = 5; //Declarar
nota1 = 7; //Redefini
var nota1 = 10 //Redeclarar

let nota2 = 8; //Declarar
nota2 = 9; //Redefinido
//var nota2 = 10; //Erro ao redeclarar

const media = 7.5; //Declarar
//media = 8; //Erro ao redefinir
//const media = 8; //Erro ao redeclarar

//Operadores Aritméticos
let a = 10;
let b = 3;
console.log("Soma: " +a+b); //13
console.log("Subtração: " +a-b); //7
console.log("Multipliçaõ: " +a*b); //30
console.log("Divisão: " +a/b); //3.33
console.log("Resto: " +a%b); //1

//Operadores Relacionais (boolean)
console.log(5<10); //True
console.log("10"==10); //True
console.log("10"===10);

//Operadores Lógicos (E, Ou, Não)
var notaB = 5;
var notaA = 7;

console.log(notaA > 7 || notaB >=7); //True
console.log(notaA > 7 && notaB >=7); //False

//Condicionais (if/else , switch(case))
var idade = 25;

if (idade>18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

var mes = 2;

switch (key) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    default:
        console.log("Outro Mês")
        break;
}

//Loops (for, while, doWhile)
for(let i = 0; i < 5; i++) {
    console.log("iteração: " +i); //0, 1, 2, 3, 4
}

var condition = true;
var numero = 3;
while (condition) {
    let sorteio = Math.random(5)
    contador++
    if (numero == sorteio) {
        console.log("Acertou com " +contador +"tentativas");
        condition = false;
    }
}

function saudacao(name){
    return "Olá "+nome
}

console.log(saudacao("Diogo"));