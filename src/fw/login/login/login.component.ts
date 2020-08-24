import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'fw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 100, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 100, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LoginComponent implements OnInit {

  showImage:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.showImage = !this.showImage;
  }

}
