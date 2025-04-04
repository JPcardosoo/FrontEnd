class Carro {
    // Atributos diretos
    // Construtor -> Define os atributos da classe
    constructor(marca, modelo, ano, cor, preco) {
        this.marca/*Atributo*/ = marca; // Parametro da função/Método;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }
    // Método
    exibirInfo() {
        console.log(`Carro: ${this.marca}, ${this.modelo}, ${this.ano}, ${this.cor}, R$${this.preco}`);
    }

}

// Criar Objetos da Classe Carro
let carro1 = new Carro("FIAT", "Uno", 1994, "Cinza", 8000.00);
let carro2 = new Carro("GM", "Corsa", 2011, "Preto", 20000.00);

carro1.exibirInfo();
carro1.exibirInfo();

// Atributos Privados(#) e publicos

class Usuario{
    #nome; // Declaração de atributos privados
    #senha; // Declaração de atributos privados

    constructor(nome,senha){
        this.#nome = nome;
        this.#senha = senha;
    }

    // Método Privado
    #trocarSenha(novaSenha){
        this.#senha = novaSenha;
    }
}