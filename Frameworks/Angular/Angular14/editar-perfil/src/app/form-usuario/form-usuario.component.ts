import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
})
export class FormUsuarioComponent {
  // Atributos
  nome: string = '';
  email: string = '';
  telefone: string = '';
  genero: string = '';
  idade: number | null = null;
  profissao: string = '';

  // Método para limpar os dados do formulário
  limparDados() {
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.genero = '';
    this.idade = null;
    this.profissao = '';
  }

  // Método para validar os campos do formulário
  validarFormulario(): string[] {
    const erros: string[] = [];

    // Validação do nome
    if (!this.nome.trim()) {
      erros.push('O campo Nome é obrigatório.');
    }
    if (!this.email.trim()) {
      erros.push('O campo Email é obrigatório.');
    } else if (!this.email.includes('@')) {
      erros.push('O Email informado é inválido.');
    }
    if (!this.telefone.trim()) {
      erros.push('O campo Telefone é obrigatório.');
    }
    if (!this.genero.trim()) {
      erros.push('O campo Gênero é obrigatório.');
    }
    if (this.idade === null || this.idade <= 0) {
      erros.push('O campo Idade é obrigatório e deve ser maior que 0.');
    }
    if (!this.profissao.trim()) {
      erros.push('O campo Profissão é obrigatório.');
    }
    return erros;
  }

  // Método para enviar o formulário
  enviarFormulario() {
    const erros = this.validarFormulario();

    if (erros.length > 0) {
      alert('Erros no Formulário:\n' + erros.join('\n'));
      return;
    }

    this.limparDados();
    alert('Formulário enviado com sucesso!');
  }
}
