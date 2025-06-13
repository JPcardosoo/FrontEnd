import { Component, OnInit } from '@angular/core';
import { CurriculoService } from 'src/app/service/curriculo.service';
import { Curriculo } from 'src/app/models/curriculo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.scss'],
})
export class CurriculoListComponent implements OnInit {
  curriculos: Curriculo[] = [];
  isLoading = true;

  constructor(
    private curriculoService: CurriculoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.curriculoService.getAllCurriculos().subscribe((curriculos) => {
      this.curriculos = curriculos;
      this.isLoading = false;
    });
  }

  visualizarDetalhes(id: number) {
    this.router.navigate(['/curriculos/detalhe', id]);
  }

  editarCurriculo(id: number) {
    this.router.navigate(['/curriculos/editar', id]);
  }

  excluirCurriculo(id: number) {
    if (confirm('Tem certeza que deseja excluir este currículo?')) {
      this.curriculoService.deleteCurriculo(id).subscribe(() => {
        this.curriculos = this.curriculos.filter((c) => c.id !== id);
        alert('Currículo excluído com sucesso!');
      });
    }
  }
}
