import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculoService } from 'src/app/service/curriculo.service';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-curriculo-detail',
  templateUrl: './curriculo-detail.component.html',
  styleUrls: ['./curriculo-detail.component.scss'],
})
export class CurriculoDetailComponent implements OnInit {
  curriculo?: Curriculo;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private curriculoService: CurriculoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id && !isNaN(id)) {
      this.curriculoService.getCurriculoById(id).subscribe({
        next: (curriculo: Curriculo) => {
          this.curriculo = curriculo;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
          alert('Currículo não encontrado!');
          this.router.navigate(['/curriculos']);
        },
      });
    } else {
      this.router.navigate(['/curriculos']);
    }
  }

  voltarParaLista() {
    this.router.navigate(['/curriculos']);
  }
}
