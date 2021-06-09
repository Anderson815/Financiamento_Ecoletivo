import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PgInicialComponent } from './pg-inicial/pg-inicial.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TemaComponent } from './tema/tema.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicial', pathMatch: 'full'},
  {path: 'cadastrar', component: CadastroComponent},
  {path: 'inicial', component: PgInicialComponent},
  {path: 'login', component: LoginComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: "tema-delete/:id", component: TemaDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
