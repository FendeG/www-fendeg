import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-hamburger1-button',
  templateUrl: './hamburger1-button.component.html',
  styleUrls: ['./hamburger1-button.component.scss']
})
export class Hamburger1ButtonComponent implements OnInit {
 isMenuOpen:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  

  onHamburgerClick(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
