import { PostagemService } from './../service/postagem.service';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {


  postagemEdit: Postagem = new Postagem();


  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ""){
      this.router.navigate(['/entrar'])
    }

    this.getAllPostagem()
  }

  editarPostagem(postagem: Postagem){
    this.postagemEdit = postagem
    console.log(this.postagemEdit)
  }

  /* atualizar(){
    this.postagemService.putPostagem(this.postagemEdit).subscribe((resp: Postagem) => {
      alert('Projeto atualizado com sucesso!')
    })
  } */

  apagar(){
    this.postagemService.deletePostagem(this.postagemEdit.id).subscribe(() => {
      alert('Projeto deletado com sucesso!')
    })
  }

  getAllPostagem(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) =>{
      this.user = resp
    })
  }

  minhaPostagem(id: number): boolean{
    let meuPost: boolean;
    if(id == this.idUser){
      meuPost = true;
    }
    return meuPost;
  }

  outraPostagem(id: number): boolean{
    let outroPost: boolean;
    if(id != this.idUser){
      outroPost = true;
    }
    return outroPost;
  }

}
