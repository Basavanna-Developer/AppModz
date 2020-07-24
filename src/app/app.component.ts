import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
  )]
})
export class AppComponent implements OnInit{
  title = 'Petrolink';
  selected:string;
  ngOnInit() {
    $(document).ready(function(){
      $("#typed").typing({
        strings: ['Integrity', 'Reliability', 'Ownership', 'Teamwork', 'Credibility'],
        speed : 100,
        cursorSpeed : 1000,
        nextStringDelay: 750,
        lifeLike : true,
        html : true,
        cursor : true,
        breakLines : true,
        startDelay : 250,
        loopDelay : 750,
        typeSpeed : 50,
        loop : true,
        loopCount: 5000,
        color : '#337c8e',
        typingColor : '#337c8e'
      });
    });
  }

  constructor(@Inject(DOCUMENT) document){

  }

  scrollToTop(){
    $("header").scrollIntoView({behavior:"smooth"});
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     /*if (window.pageYOffset > 50) {
       let element = document.getElementById('header');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('header');
        element.classList.remove('sticky'); 
     }*/
  }


}
