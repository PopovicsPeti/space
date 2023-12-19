import { Component } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  isMenuOpen: boolean = true;

  NgonInit(){
  }

  menuToggle(){
    console.log(this.isMenuOpen)
    this.isMenuOpen =! this.isMenuOpen
    const nav = document.querySelector(".primary-navigation");
    const button = document.querySelector(".mobile-nav-toggle");
    
    if (!this.isMenuOpen){
      nav?.classList.add('open');
      button?.classList.add('mobile-nav-toggle-open');
    } 
    
    if (this.isMenuOpen) {
      nav?.classList.remove('open');
      button?.classList.remove('mobile-nav-toggle-open');
    }
  }
  

}
