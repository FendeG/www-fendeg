import { Component, OnInit, HostListener, ChangeDetectionStrategy, Renderer2 } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Template1Component implements OnInit {

  // @HostListener('window:scroll') onScroll(e: Event): void {
  //   console.log('window:scroll : ' + JSON.stringify(e));
  // }

  // @HostListener('document:scroll', ['$event'])
  // doSomething(event) {
  //   console.debug("document:scroll : ", window.pageYOffset);
  // }


  // @HostListener('scroll') onScrollHost(e: Event): void {ks
  //   console.log('scroll : ' + JSON.stringify(e));

  // }

  // @HostListener('document:mousewheel', ['$event'])
  // onDocumentMousewheelEvent(event) {
  //   console.log('mousewheel : ' + (event.target as Element).scrollTop);

  // }

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    if (scrollPosition > 50){
      
    }
    
   
  }

  listener;

  constructor(private renderer2: Renderer2) {

  }

  ngOnInit(): void {
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  onWindowScroll(e: Event) {
    // console.log('onWindowScroll : ' + JSON.stringify(e));
    console.log('a : ' + this.getYPosition(e));
  }

  ngOnDestroy(): void {
  }



}
