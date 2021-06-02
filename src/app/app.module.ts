import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EquipeComponent } from './equipe/equipe.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PgInicialComponent } from './pg-inicial/pg-inicial.component';
import { LoginComponent } from './login/login.component';

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
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
