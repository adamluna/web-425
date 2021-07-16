/*
============================================
; Title:  Exercise 5.3
; Author: Adam Luna
; Date: 27 June 2021
; Description: Books service file
;===========================================
*/

// import modules
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780765365279',
        title: 'The Way of Kings',
        description:
          'The Way of Kings is an epic fantasy novel by Brandon Sanderson. It is the first volume in a planned ten volume series called The Stormlight Archive.',
        numOfPages: 1280,
        authors: ['Brandon Sanderson'],
      },
      {
        isbn: '9780765326362',
        title: 'Words of Radiance',
        description:
          'Words of Radiance is the second volume in The Stormlight Archive, an epic fantasy series by Brandon Sanderson.',
        numOfPages: 1088,
        authors: ['Brandon Sanderson'],
      },
      {
        isbn: '9780765326379',
        title: 'Oathbringer',
        description:
          'Oathbringer is the title of the third novel in The Stormlight Archive, an epic fantasy series by Brandon Sanderson.',
        numOfPages: 1248,
        authors: ['Brandon Sanderson'],
      },
      {
        isbn: '9780760741771',
        title: 'Magician',
        description:
          'Magician is the name of the bestselling fantasy novel by author Raymond E. Feist.',
        numOfPages: 681,
        authors: ['Raymond E. Feist'],
      },
      {
        isbn: '9780756404741',
        title: 'The Name of the Wind',
        description:
          'The Name of the Wind is a heroic fantasy novel written by American author Patrick Rothfuss.',
        numOfPages: 722,
        authors: ['Patrick Rothfuss'],
      },
    ];
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // gets one book matching isbn
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
