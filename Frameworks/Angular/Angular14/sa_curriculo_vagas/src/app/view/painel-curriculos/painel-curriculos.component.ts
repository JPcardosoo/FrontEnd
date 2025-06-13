import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss'],
})
export class PainelCurriculosComponent implements OnInit {
  curriculo: Curriculo = this.criarCurriculoVazio();
  curriculos: Curriculo[] = [];
  private apiUrl = 'http://localhost:3000/curriculos';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos() {
    this.http.get<Curriculo[]>(this.apiUrl).subscribe(data => {
      this.curriculos = data;
    });
  }

  cadastrar() {
    if (this.curriculo.nome.trim() !== '' && this.curriculo.email.trim() !== '') {
      this.http.post<Curriculo>(this.apiUrl, this.curriculo).subscribe(() => {
        this.listarTodos();
        this.curriculo = this.criarCurriculoVazio();
      });
    }
  }

  atualizar(id: number | undefined) {
    if (!id) return;
    this.http.put<Curriculo>(`${this.apiUrl}/${id}`, this.curriculo).subscribe(() => {
      this.listarTodos();
      this.curriculo = this.criarCurriculoVazio();
    });
  }

  excluir(id: number | undefined) {
    if (!id) return;
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.listarTodos();
      this.curriculo = this.criarCurriculoVazio();
    });
  }

  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = { ...curriculo };
  }

  private criarCurriculoVazio(): Curriculo {
    return {
      id: undefined,
      usuarioId: 0,
      nome: '',
      email: '',
      formacao: '',
      experiencia: '',
      habilidades: '',
      linkedin: ''
    };
  }
}