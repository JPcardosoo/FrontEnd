// Atividade 1: Criar uma classe representando um produto

class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender(quantidade) {
        if (quantidade > this.estoque) {
            console.log(
                `Estoque Insuficiente! Quantidade em Estoque é = ${this.estoque}`
            );
            return;
        }
        this.estoque -= quantidade;
        console.log(
            `${quantidade} ${quantidade === 1 ? "Unidade" : "Unidades"
            } vendida(s). Estoque restane: ${this.estoque}`
        );
    }
    repor(quantidade) {
        this.estoque += quantidade;
        console.log(`Estoque atual: ${this.estoque}`);
    }

    exibirInfo() {
        console.log(`Produto: ${this.nome}, ${this.preco} R$, ${this.estoque}`);
    }
}

let Produto1 = new Produto("Livro", "Preço 50.00", "32 unidades");

Produto1.exibirInfo();
Produto1.vender(2);
Produto1.repor(5);
Produto1.exibirInfo();