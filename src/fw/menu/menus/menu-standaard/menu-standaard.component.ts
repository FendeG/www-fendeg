import { Component, OnInit } from '@angular/core';
import { IconsBase64Service } from '../../../services/icons-base64.service';

@Component({
  selector: 'fw-menu-standaard',
  templateUrl: './menu-standaard.component.html',
  styleUrls: ['./menu-standaard.component.scss']
})
export class MenuStandaardComponent implements OnInit {

  constructor(public iconService:IconsBase64Service) { }

  ngOnInit(): void {
  }

}
