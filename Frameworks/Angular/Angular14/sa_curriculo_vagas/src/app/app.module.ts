import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Módulos Angular
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Módulos de terceiros
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Módulos de rotas
import { AppRoutingModule } from './app-routing.module';

// Componentes do projeto
import { AppComponent } from './app.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VagasComponent,
    HeaderComponent,
    FooterComponent,
    PainelVagasComponent,
    PainelCurriculosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
