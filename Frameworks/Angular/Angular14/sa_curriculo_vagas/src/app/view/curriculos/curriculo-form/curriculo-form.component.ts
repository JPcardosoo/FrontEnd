import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurriculoService } from 'src/app/service/curriculo.service';
import { Curriculo } from 'src/app/models/curriculo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss'],
})
export class CurriculoFormComponent implements OnInit {
  curriculoForm!: FormGroup;
  isEdit = false;
  curriculoId?: number;

  constructor(
    private fb: FormBuilder,
    private curriculoService: CurriculoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.curriculoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      formacao: ['', Validators.required],
      experiencia: ['', Validators.required],
      habilidades: ['', Validators.required],
      linkedin: ['', Validators.required],
    });

    // Se estiver editando, carrega os dados do currículo
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.curriculoId = +id;
        this.curriculoService.getCurriculoById(this.curriculoId).subscribe({
          next: (curriculo) => this.curriculoForm.patchValue(curriculo),
          error: () => alert('Erro ao carregar currículo.'),
        });
      }
    });
  }

  onSubmit(): void {
    if (this.curriculoForm.invalid) return;

    const usuarioId = 1; // Simulação de ID do usuário
    const curriculo: Curriculo = {
      ...this.curriculoForm.value,
      usuarioId,
      id: this.curriculoId,
    };

    if (this.isEdit && this.curriculoId) {
      this.curriculoService.putCurriculo(curriculo).subscribe(() => {
        alert('Currículo atualizado com sucesso!');
        this.router.navigate(['/meu-curriculo']);
      });
    } else {
      this.curriculoService.postCurriculo(curriculo).subscribe(() => {
        alert('Currículo cadastrado com sucesso!');
        this.router.navigate(['/meu-curriculo']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/meu-curriculo']);
  }
}
