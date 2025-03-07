// Parte 1 - Exibir no console

let titulo = document.getElementById("titulo");
let paragrafo = document.querySelector(".paragrafo");

console.log(titulo);
console.log(paragrafo);

// Parte 2 - 

function mudarTexto() {
    titulo.innerText = "Novo Título";
    paragrafo.innerText = "Novo Parágrafo"
}

// Parte 3 - Modificar Estilo

function mudarFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue"
}

// Parte 4 - Adicionar uma classe ao elemento

function adicionarClasse() {
    titulo.classList.add("descricao");
    document.querySelector("descricao").style.color = "red";
}

