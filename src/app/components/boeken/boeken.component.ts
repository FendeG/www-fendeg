import { Component, OnInit } from '@angular/core';

export interface Books {
  title: string;
  writer: string;
  description: string;
  image: string;
}
@Component({
  selector: 'app-boeken',
  templateUrl: './boeken.component.html',
  styleUrls: ['./boeken.component.scss']
})
export class BoekenComponent implements OnInit {

  books: Array<Books> = [];

  constructor() { }

  ngOnInit(): void {

    this.books.push({
      title: 'Frank',
      writer: 'Frankie',
      description: 'ddfdfdfd',
      image: ''
    }
    );
    this.books.push({
      title: 'Gertrud',
      writer: 'Gertrud',
      description: 'bla bla bal',
      image: ''
    }
    );


    
  }

}
