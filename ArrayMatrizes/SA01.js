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
    
}