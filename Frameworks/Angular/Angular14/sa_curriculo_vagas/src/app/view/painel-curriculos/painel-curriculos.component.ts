import { Component } from '@angular/core';

interface Vaga {
  id: number | null;
  nome: string;
  foto: string;
  descricao: string;
  salario: string;
}

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss'],
})
export class PainelCurriculosComponent {
  vaga: Vaga = this.criarVagaVazia();
  vagas: Vaga[] = [];

  cadastrar() {
    if (this.vaga.id !== null && this.vaga.nome.trim() !== '') {
      this.vagas.push({ ...this.vaga });
      this.vaga = this.criarVagaVazia();
    }
  }

  atualizar(id: number | null) {

  }

  excluir(id: number | null) {
    this.vagas = this.vagas.filter((v) => v.id !== id);
  }

  listarVagaUnica(vaga: Vaga) {

  }

  private criarVagaVazia(): Vaga {
    return {
      id: null,
      nome: '',
      foto: '',
      descricao: '',
      salario: '',
    };
  }
}
