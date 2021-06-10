import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-geral',
  templateUrl: './menu-geral.component.html',
  styleUrls: ['./menu-geral.component.css']
})
export class MenuGeralComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sair(){
    environment.token = '',
    environment.nome = '',
    environment.id = 0,
    environment.foto = '',

    this.router.navigate(['/inicial'])
  }

}
