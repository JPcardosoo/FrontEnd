let texto = "Aula de JavaScript";

// Contagem dos caracteres (length)
console.log(texto.length); // 18

// Maiúsculas e Minúscolas
console.log(texto.toUpperCase()); // Maiúscola
console.log(texto.toLowerCase()); // Minúscola

// Partes da String
console.log(texto.substring(0,4));
console.log(texto.slice(-10));

// Substituição  de texto
let novoTexto = texto.replace("Java","Type");
console.log(novoTexto);

//trim (tesoura)
let espaco = "  JavaScript  ";
let textoCortado = textoEspaco.trim();
console.log(textoEspaco);
console.log(textoCortado);

// Split (Separação)

let linguagens = "JavaScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(",");
console.log(linguagens);