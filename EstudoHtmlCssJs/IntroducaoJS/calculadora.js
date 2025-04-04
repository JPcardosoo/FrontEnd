//Criar uma calculadora simples em JavaScript
var prompt = require("prompt-sync")();
var numero1, numero2, resultado;
var operacao;
var continuar = true;

//Funções de operação
function soma(a,b) {
    return a+b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}

while (continuar) {
    console.log("Calculadora Simples");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Sair");
    operacao = Number(prompt("Informe a Operação Desejada:"));
    //Pedir os números
    numero1 = Number(prompt("Informe o 1° nº"));
    numero2 = Number(prompt("Informe o 2° nº"));
    //Condição de escolha
    switch (operacao) {
      case 1:
        resultado = soma (numero1, numero2);
        console.log("O resultado é "+ resultado);
        break;
      case 2:
        resultado = subtracao (numero1, numero2);
        console.log("O resultado é "+ resultado);
        break;
      case 3:
        resultado = multiplicacao (numero1, numero2);
        console.log("O resultado é "+ resultado);
        break;
      case 4:
        resultado = divisao (numero1, numero2);
        console.log("O resultado é "+ resultado);
        break;

    default:
       break;
    } 
}