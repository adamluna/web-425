/*
============================================
; Title:  composer.service.ts
; Author: Adam Luna
; Date: 20 June 2021
; Description: Composer service file for di composer app
;===========================================
*/

// import modules
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root',
})

// Export ComposerService class
export class ComposerService {
  composers: Array<IComposer>;

  // Create composer objects
  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Wolfgang Amadeus Mozart',
        genre: 'Classical',
      },
      {
        composerId: 101,
        fullName: 'Ludwig van Beethoven',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Johann Sebastian Bach',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Johannes Brahms',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Joseph Haydn',
        genre: 'Classical',
      },
    ];
  }

  // Return all composers
  getComposers() {
    return this.composers;
  }

  // Return one composer with a matching ID
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
