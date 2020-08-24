import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'fw-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(
    private screenService: ScreenService
  ) { }

  ngOnInit(): void {
  }

}
