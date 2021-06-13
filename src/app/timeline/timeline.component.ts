import { PostagemService } from './../service/postagem.service';
import { AuthService } from './../service/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

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

  filtroBloqueado: string = 'rgb(172, 224, 203)'

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

    this.temaFiltro()

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
    let titulo = <HTMLInputElement>document.querySelector('#tituloPostagem')
    let usuario = <HTMLInputElement>document.querySelector('#buscaUsuario')

    this.idTema = 0
    titulo.value = ""
    usuario.value = ""

/*     titulo.setAttribute("class", "collapse")
    usuario.setAttribute("class", "collapse") */

  this.ngOnInit()

  }

  temaFiltro(){
    let tema = <HTMLSelectElement>document.querySelector('#tema')
    let titulo = <HTMLInputElement>document.querySelector('#tituloPostagem')
    let usuario = <HTMLInputElement>document.querySelector('#buscaUsuario')

    titulo.value = ""
    usuario.value = ""

    tema.style.backgroundColor = "white"
    titulo.style.backgroundColor = this.filtroBloqueado
    usuario.style.backgroundColor = this.filtroBloqueado
  }

  tituloFiltro(){
    let tema = <HTMLSelectElement>document.querySelector('#tema')
    let titulo = <HTMLInputElement>document.querySelector('#tituloPostagem')
    let usuario = <HTMLInputElement>document.querySelector('#buscaUsuario')

/*     titulo.disabled = false
    tema.disabled = true
    usuario.disabled = true */
    this.getAllPostagem()

    this.idTema = 0
    usuario.value = ""

    titulo.style.backgroundColor = "white"
    usuario.style.backgroundColor = this.filtroBloqueado
    tema.style.backgroundColor = this.filtroBloqueado
  }

  usuarioFiltro(){
    let tema = <HTMLSelectElement>document.querySelector('#tema')
    let titulo = <HTMLInputElement>document.querySelector('#tituloPostagem')
    let usuario = <HTMLInputElement>document.querySelector('#buscaUsuario')

    this.getAllPostagem()

    this.idTema = 0
    titulo.value = ""

    usuario.style.backgroundColor = "white"
    titulo.style.backgroundColor = this.filtroBloqueado
    tema.style.backgroundColor = this.filtroBloqueado
  }


  findByMinhasPostagens() {
    this.listaPostagens = this.listaPostagens.filter(filter => filter.usuario.id === this.idUser);
  }
}

