const prompt = require("prompt-sync")();

//1. Configuração do Ambiente
console.log("Ambiente configurado com sucesso!");

//2. Trabalhando com Variáveis e Tipos de Dados

//2.1 - Criando Variáveis
let nome = "Cardoso";
let idade = 17;
let altura = 1.65;
let programador = true;

//2.2 - Conversão de Tipos
let anoNascimento = 2008;
let anoNascimento1 = Number(anoNascimento);
console.log(anoNascimento1, typeof anoNascimento1);

let peso = "75";
let peso1 = Number(peso);
console.log(peso1, typeof peso1);

//2.3 - Operações Matemáticas
let numero3 = Number(prompt("Informe o numero:"));
let numero4 = Number(prompt("Informe o numero:"));

console.log(numero3 + numero4);
console.log(numero3 - numero4);
console.log(numero3 * numero4);
console.log(numero3 / numero4);

//3. Estruturas Condicionais

//3.1 - Verificando Par ou Ímpar
let Numero = Number(prompt("Informe o numero:"));
if (Numero % 2 === 0) {
  console.log("Par");
} else {
  console.log("Impar");
}

//3.2 - Idade e Permissão
let numero7 = Number(prompt("Informe a sua idade:"));
console.log(idade > 18 && idade < 30);
console.log(idade < 18 || idade > 65);
console.log(!false);

//4. Estruturas de Repetição

//4.1 - Contador de 1 a 10
let contador = 1;
while (contador <= 10) {
  console.log("Contador:", contador);
  contador++;
}

//4.2 - Tabuada
let numero1 = Number(prompt("Informe o numero:"));
let numero2 = 0;
for (let i = 1; i <= 10; i++) {
  numero2 += numero1;
  console.log(`${numero1} x ${i} = ${numero2}`);
}

//4.3 - Contagem Regressiva
let contador1 = 10;
while (contador1 >= 1) {
  console.log("Contador:", contador1);
  contador1--;
}
console.log("Feliz Ano Novo!");

//5. Funções

//5.1 - Criando uma Função Simples
function boasVindas(nome) {
  return console.log("Olá,", nome, "Sejá bem-vindo(a)");
}
let nome1 = prompt("Digite seu nome: ");
console.log(boasVindas(nome1));

//5.2 - Calculadora
let numero5 = Number(prompt("Informe o numero:"));
let numero6 = Number(prompt("Informe o numero:"));
let operacoes = prompt("Digite a operação (+, -, *, /)");

console.log(calculadora(numero5, numero6, operacoes))

function calculadora(numeroA, numeroB, operacao) {
  switch (operacao) {
    case "+":
      return numeroA + numeroB;
    case "-":
      return nuemroA - numeroB;
    case "*":
      return numeroA * numeroB;
    case "/":
      return numeroA / numeroB
  }
}

//5.3 - Média de Notas
function calcularMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

calcularMedia(8, 7, 6);  
calcularMedia(5, 4, 6);  

//6. Desafios Extras

//6.1 - Jogo de Adivinhação
function adivinharNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

  const numeroUsuario = parseInt(prompt("Adivinhe um número entre 1 e 10:"));

  if (numeroUsuario === numeroAleatorio) {
    console.log("Parabéns! Você acertou o número.");
  } else {
    console.log("Você errou. O número era " + numeroAleatorio);
  }
}

adivinharNumero();

//6.2 - Calculadora de IMC
function calcularIMC() {
  const peso = parseFloat(prompt("Informe seu peso (em kg):"));
  const altura = parseFloat(prompt("Informe sua altura (em metros):"));

  const imc = peso / (altura * altura);

  let categoria;
  if (imc < 18.5) {
    categoria = "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    categoria = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidade";
  }

  console.log(`Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}`);
}

calcularIMC();
