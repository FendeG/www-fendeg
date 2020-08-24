import { Component, OnInit, Input } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'fw-linkedin-icon',
  templateUrl: './linkedin-icon.component.html',
  styleUrls: ['./linkedin-icon.component.scss']
})
export class LinkedinIconComponent implements OnInit {
  @Input() height: number;
  @Input() href:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
