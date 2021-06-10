import { AlertasService } from './../../service/alertas.service';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service'

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: Tema = new Tema();
  idTema: number;

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0, 0)

    if(environment.token == ""){
      this.alertas.showAlertDanger("Sua sessão expirou, faça o login novamente");
      this.router.navigate(['/inicial'])
    }

    this.idTema = this.route.snapshot.params['id'];
    this.findByIdTema(this.idTema);
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  deletar(){
    this.temaService.deleteTema(this.idTema).subscribe(() => {
      this.alertas.showAlertSucess('Tema apagado com sucesso!');
      this.router.navigate(['/tema'])
    })
  }
}
