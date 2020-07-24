import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  selected:string;
  constructor() { }

  ngOnInit(): void {
  }

  scrollToDiv(divName){
    document.getElementById(divName).scrollIntoView({behavior:"smooth"});
    document.getElementById("header_a").classList.remove('active');
    if(this.selected == null){
      this.selected = divName+"_a";
      document.getElementById(divName+"_a").classList.add('active');
    }else{
      document.getElementById(this.selected).classList.remove('active');
      document.getElementById(divName+"_a").classList.add('active');
      this.selected = divName+"_a";
    }
    //document.getElementById(divName+"_a").classList.add('active');
  }

}
