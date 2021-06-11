import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  @Input() postagem: Postagem;
  valor: number;

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
  }

  doar(){

    if(this.valor > 0){
      this.postagemService.doarPostagem(this.postagem.id, this.valor).subscribe((resp: Postagem) => {
        this.alertas.showAlertSucess("Doação realizada com sucesso!");
        this.router.navigate(["/inicial"])
        setTimeout(()=>{
          this.router.navigate(["/timeline"])
        },100)
      }, erro => {
        if(erro.status == 400){
          this.alertas.showAlertDanger('O valor ultrapassa a meta');
        }
      })
    }else{
      this.alertas.showAlertDanger('O valor não pode ser negativo ou zero')
    }

  }

  cancelar(){
    this.router.navigate(["/inicial"])
    setTimeout(()=>{
      this.router.navigate(["/timeline"])
    },100)
  }

}
