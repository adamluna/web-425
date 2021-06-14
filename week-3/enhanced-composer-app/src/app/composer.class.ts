/*
===============================================
; Title:  Assignment 3.2
; Author: Adam Luna
; Date: 13 June 2021
; Description: Composer class Typescript file for enhanced composer app.
;==============================================
*/

// Import IComposer class from composer interface file
import { IComposer } from './composer.interface';

// Export Composer class
export class Composer {
  composers: Array<IComposer>;

  // Create five composer objects in the composers constructor
  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Johann Sebastian Bach',
        genre: 'Classical',
      },
      {
        composerId: 101,
        fullName: 'Ludwig van Beethoven',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Wolfgang Amadeus Mozart',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Frederic Chopin',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Claude Debussy',
        genre: 'Classical',
      },
    ];
  }

  // Create getComposers function and return composers array
  getComposers() {
    return this.composers;
  }

  // Create getComposer function and return one composer with matching ID
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
