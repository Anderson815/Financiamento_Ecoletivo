import { PostagemService } from './../service/postagem.service';
import { AuthService } from './../service/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { EMPTY } from 'rxjs';

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
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  titulo: string
  usuario: string


  user: User = new User()
  idUser = environment.id

  key = 'data'
  reverse = true

  nome = environment.nome
  foto = environment.foto
  token = environment.token

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == "") {
      this.router.navigate(['/inicial'])
    }

    this.findByUser()

    this.getAllPostagem()
    if (this.deleteOk) {
      this.getAllPostagem()
    }

    this.getAllTema()
  }

  editarPostagem(postagem: Postagem) {
    // environment.idPostagem = id;
    this.postagemEdit = postagem;
    console.log(this.postagemEdit)
  }

  getAllPostagem() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  minhaPostagem(id: number): boolean {
    let meuPost: boolean;
    if (id == this.idUser) {
      meuPost = true;
    }
    return meuPost;
  }

  outraPostagem(id: number): boolean {
    let outroPost: boolean;
    if (id != this.idUser) {
      outroPost = true;
    }
    return outroPost;
  }

  imagemOk(imagem: string): boolean {
    let imgOk = false;
    if(imagem != null){
      imgOk = true;
    }
    return imgOk;
  }

  changeTema() {
    if(this.idTema != 0){
      setTimeout(() => {
        this.getAllPostagem()
      }, 50);

      this.findByIdTema()
    }
    this.findByIdTema()

  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.listaPostagens = this.listaPostagens.filter(filter => filter.tema.id === resp.id)
    })
  }

  getAllTema() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByTitulo() {
    if (this.titulo !== '') {
      this.listaPostagens = this.listaPostagens.filter(filter => filter.titulo === this.titulo);
    }
  }

  findByUsuario() {
    if (this.usuario !== '') {
      this.listaPostagens = this.listaPostagens.filter(filter => filter.usuario.nome === this.usuario);
    }
  }

  resetarFiltro() {
    this.ngOnInit()
  }

  findByMinhasPostagens() {
    this.listaPostagens = this.listaPostagens.filter(filter => filter.usuario.id === this.idUser);
  }

  nenhumaEncontrada(){
    if(this.listaPostagens === []){
      
    }
  }
}

