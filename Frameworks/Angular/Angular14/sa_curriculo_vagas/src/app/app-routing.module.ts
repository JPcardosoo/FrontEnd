import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculoComponent } from './view/curriculo/curriculo.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';

// Corrija todos os imports para o mesmo caminho
import { CurriculoFormComponent } from './view/curriculos/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './view/curriculos/curriculo-list/curriculo-list.component';
import { CurriculoDetailComponent } from './view/curriculos/curriculo-detail/curriculo-detail.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'curriculo', component: CurriculoComponent },
  { path: 'vagas', component: VagasComponent },
  { path: 'painel-vagas', component: PainelVagasComponent },
  { path: 'painel-curriculos', component: PainelCurriculosComponent },

  // Rotas do módulo de currículos
  { path: 'curriculos', component: CurriculoListComponent },
  { path: 'curriculos/novo', component: CurriculoFormComponent },
  { path: 'curriculos/editar/:id', component: CurriculoFormComponent },
  { path: 'curriculos/detalhe/:id', component: CurriculoDetailComponent },
  { path: 'meu-curriculo', component: CurriculoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
