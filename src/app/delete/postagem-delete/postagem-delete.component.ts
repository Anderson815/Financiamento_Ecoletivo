import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  @Input() postagem: Postagem
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,

  ) { }

  ngOnInit() {
    if(environment.token == ""){
      this.router.navigate(['/entrar'])
    }
    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
  }

  findByIdPostagem(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
    })
  }


  apagar(){
    this.postagemService.deletePostagem(this.postagem.id).subscribe(()=>{
      alert("Projeto excluído com sucesso!")
    
    })
  }

}
