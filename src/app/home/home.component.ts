import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  /* userLogin: UserLogin = new UserLogin(); */


  constructor(
    /* private auth: AuthService,
    private router: Router */
  ) { }

  ngOnInit(){
    window.scroll(0, 0);
    this.animacaoMenu();
  }

  /* entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp;

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id

      this.router.navigate(['/tema'])
    }, erro => {
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretas');
      }
    })
  } */

  animacaoMenu(){
    if(window.location.href.indexOf('inicial') != -1){
      window.addEventListener('scroll', function() {
        let header = document.querySelector('header');
        let windowPosition = window.scrollY > 500;
        header.classList.toggle('scrolling-active', windowPosition);
      })
    }
  }
}
