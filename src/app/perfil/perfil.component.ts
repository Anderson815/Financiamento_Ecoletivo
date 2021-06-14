import { UserLogin } from './../model/UserLogin';
import { AlertasService } from 'src/app/service/alertas.service';
import { User } from 'src/app/model/User';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user: User = new User;
  confirmarSenha: string;
  tipoUsuario: string;
  idUser: number
  usuario: string
 
  nome = environment.nome
  foto = environment.foto
  token = environment.token

  constructor(

    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService

  ) {}

  ngOnInit() {

    window.scroll(0,0)
    this.idUser = environment.id
  }
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value;
  }
}
