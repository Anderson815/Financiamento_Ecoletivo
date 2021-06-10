import { AlertasService } from './../../service/alertas.service';
import { environment } from 'src/environments/environment.prod';
import { PostagemService } from './../../service/postagem.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  listaPostagens: Postagem[]
  @Input() postagem: Postagem;
  idPostagem: number = this.postagemService.getIdPostagem();

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
  }

/*   findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    })
  } */

  atualizar(){
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.alertas.showAlertSucess("Projeto atualizado com sucesso!");
      this.router.navigate(["/inicial"])
      setTimeout(()=>{
        this.router.navigate(["/timeline"])
      },100)  
    })
  }

  getAllPostagem(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  cancelar(){
    this.router.navigate(["/inicial"])
    setTimeout(()=>{
      this.router.navigate(["/timeline"])
    },100)  
  }
}
