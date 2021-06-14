import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`${environment.server}/postagem`, this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`${environment.server}/postagem/${id}`, this.token)
  }
  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`${environment.server}/postagem/titulo/${titulo}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>(`${environment.server}/postagem`, postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>(`${environment.server}/postagem`, postagem, this.token)
  }

  //Pode dar problema
  doarPostagem(id: number, valor: number){
    return this.http.put<Postagem>(`${environment.server}/postagem/doacao/id/${id}/valor/${valor}`, null, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`${environment.server}/postagem/${id}`, this.token)
  }

  getIdPostagem(){
    let id = environment.idPostagem
    return id
  }


}
