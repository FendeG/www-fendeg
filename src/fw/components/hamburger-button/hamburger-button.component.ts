import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'fw-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss']
})
export class HamburgerButtonComponent implements OnInit {

 isMenuOpen:boolean=false;

  @ViewChild('ham') elementID:ElementRef;
  
  menuOpen:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onHamburgerClick(){
    this.isMenuOpen = !this.isMenuOpen;
  }

 
}
