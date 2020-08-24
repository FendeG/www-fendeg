import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.scss']
})
export class BookPanelComponent implements OnInit {

  @Input() book:any;
  @Input() index:number;

  constructor() { }

  ngOnInit(): void {
  }

}
