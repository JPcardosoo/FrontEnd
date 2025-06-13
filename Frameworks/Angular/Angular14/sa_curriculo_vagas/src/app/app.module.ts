import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

// Componentes principais
import { AppComponent } from './app.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculoComponent } from './view/curriculo/curriculo.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';

// Componentes do módulo de currículos
import { CurriculoFormComponent } from './view/curriculos/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './view/curriculos/curriculo-list/curriculo-list.component';
import { CurriculoDetailComponent } from './view/curriculos/curriculo-detail/curriculo-detail.component';

// Componentes de template (caso existam)
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CurriculoComponent,
    VagasComponent,
    PainelVagasComponent,
    PainelCurriculosComponent,
    CurriculoFormComponent,
    CurriculoListComponent,
    CurriculoDetailComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
