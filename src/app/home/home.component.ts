import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(){
    window.scroll(0, 0);
    this.animacaoMenu();
  }

  animacaoMenu(){
    if(window.location.href.indexOf('inicial') != -1){
      window.addEventListener('scroll', function() {
        let header = document.querySelector('header');
        let windowPosition = window.scrollY > 560;
        header.classList.toggle('scrolling-active', windowPosition);
      })
    }
  }
}
