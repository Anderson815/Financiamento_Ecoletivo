import { environment } from 'src/environments/environment.prod';
import { PostagemService } from './../../service/postagem.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  @Input() postagem: Postagem;
  //postagem: Postagem;
  idPostagem: number = this.postagemService.getIdPostagem();

  constructor(
    private postagemService: PostagemService
  ) { }

  ngOnInit(){
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    })
  }

  atualizar(){
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      alert("Projeto atualizado com sucesso!");
    })
  }

}
