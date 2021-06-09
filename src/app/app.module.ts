import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EquipeComponent } from './equipe/equipe.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PgInicialComponent } from './pg-inicial/pg-inicial.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemPublicarComponent } from './postagem-publicar/postagem-publicar.component';
import { PublicarComponent } from './postagem/publicar/publicar.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    RodapeComponent,
    MenuComponent,
    EquipeComponent,
    HomeComponent,
    CadastroComponent,
    PgInicialComponent,
    LoginComponent,
    TimelineComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemPublicarComponent,
    PublicarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
