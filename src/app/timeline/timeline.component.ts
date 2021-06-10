import { PostagemService } from './../service/postagem.service';
import { AuthService } from './../service/auth.service';
import { Component, Input, OnInit} from '@angular/core';
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

  @Input() deleteOk: boolean = false
  postagem: Postagem = new Postagem()
  postagemEdit: Postagem = new Postagem();
  listaPostagens: Postagem[]

  user: User = new User()
  idUser = environment.id

  nome = environment.nome
  foto = environment.foto
  token = environment.token

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

    this.findByUser()

    this.getAllPostagem()
    if(this.deleteOk){
      this.getAllPostagem()
    }
  }

  editarPostagem(postagem: Postagem){
    // environment.idPostagem = id;
    this.postagemEdit = postagem;
    console.log(this.postagemEdit)
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

  imagemOk(imagem: string): boolean{
    let imgOk = false;
    if(imagem !== ""){
      imgOk = true;
    }
    return imgOk;
  }

  animacaoMenuTimeline(){
    if(window.location.href.indexOf('timeline') != -1){
      window.addEventListener('scroll', function() {
        let section = document.querySelector('section');
        let windowPosition = window.scrollY > 100;
        section.classList.toggle('scrolling-active', windowPosition);
      })
    }
  }

}
