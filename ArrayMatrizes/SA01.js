// Situação de Aprendizagem
const prompt = require("prompt-sync")();
// Entrada de dados

// Array notas
let notas = []; // Array de notas

function inserirnotas(){
    let nota = prompt("Digite a nota:")
    notas.push(nota);
}

function calcularmedia(){
    let media = notas.reduce((media,nota)=>soma+nota, 0)/notas.length
}

function menu(){
    let continuar = true;
    while (continuar){
        console.log("===Calculadora Media===");
        console.log("|1. Inserir Nota       ");
        console.log("|2. Calcular Media     ");
        console.log("|3. Sair               ");
        console.log("=======================");
        let operacao = prompt("Escolha a Opção Desejada: ");
        switch (operacao) {
          case "1":
            inserirNotas();
            break;
          case "2":
            calcularMedia();
            break;
          case "3":
            continuar = false;
            console.log("Saindo...");
            break;
          default:
            console.log("Digite uma operação válida!");
            break;
        }
    }
}

menu();