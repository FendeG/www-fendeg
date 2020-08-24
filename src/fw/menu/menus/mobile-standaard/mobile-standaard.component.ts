import { Component, OnInit } from '@angular/core';
import { IconsBase64Service } from '../../../services/icons-base64.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fw-mobile-standaard',
  templateUrl: './mobile-standaard.component.html',
  styleUrls: ['./mobile-standaard.component.scss']
})
export class MobileStandaardComponent implements OnInit {
  isMenuOpen:boolean=false;

  constructor( private router: Router,public iconService:IconsBase64Service) { }

  ngOnInit(): void {
    // this.router.navigate(['mobile-home']);

  }

  onMenuOpen(){
    console.log('onMenuOpen')
    this.isMenuOpen=!this.isMenuOpen;
  }

 

}
