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
      title: 'Title Frank',
      writer: 'Writer Frankie',
      description: 'ddfdfdfd',
      image: 'image1'
    }
    );

    this.books.push({
      title: 'Title Gertrud',
      writer: 'Writer Gertrud',
      description: 'bla bla bal',
      image: 'image2'
    }
    );

    this.books.push({
      title: 'Title Djensly',
      writer: 'Djensly Writer',
      description: 'bla bla bal',
      image: 'image2'
    }
    );

    
    this.books.push({
      title: 'Title Rosa',
      writer: 'Rosa Writer',
      description: 'bla bla bal',
      image: 'image2'
    }
    );
    


    
  }

}
