import { Component, OnInit, HostListener } from '@angular/core';
import {ScreenService} from '../services/screen.service';

@Component({
  selector: 'fw-framework-body',
  templateUrl: './framework-body.component.html',
  styleUrls: ['./framework-body.component.scss']
})
export class FrameworkBodyComponent implements OnInit {


  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    if (scrollPosition > 50){
      
    }
    
   
  }
  
  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    console.log('scroll');
    el.scrollIntoView({behavior: 'smooth'});
  }

}
