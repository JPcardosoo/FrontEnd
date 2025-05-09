import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Produto } from '../models/produto.model';
import { Pedido } from '../models/pedidos.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService { // Controller - Model => View
  // Atributos
  private clientes: Cliente[] = [];
  private produtos: Produto[] = [];
  private pedidos: Pedido[] = [];

  constructor() { }

  getClientes(): Cliente[]{
    return this.clientes;
  }

  getProdutos(): Produto[]{
    return this.produtos;
  }

  getPedidos(): Pedido[]{
    return this.pedidos;
  }

  // Métodos para adicinar infomações no vetor

  adicionarCliente(cliente: Cliente) : void {
    this.clientes.push(cliente);
  }
  adicionarProduto(produto: Produto) : void {
    this.produtos.push(produto);
  }
  adicionarPedido(pedidos: Pedido) : void {
    this.pedidos.push(pedidos);
  }
}
