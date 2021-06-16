import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User;
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService

    ) { }

  ngOnInit(){
    window.scroll(0, 0);
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value;
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario;

    if(this.user.senha != this.confirmarSenha){
      this.alertas.showAlertDanger('As senhas estão diferentes!');
    }
    else{

      if(this.user.foto == null){
        this.user.foto = "../../assets/img/perfil.png"
      }

      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp;
        this.router.navigate(['/inicial']);
        this.alertas.showAlertSucess('Usuário cadastrado com sucesso!')

      }, erro => {
        this.alertas.showAlertDanger('O cadastro não está completo!');
      })
    }
  }
}
