/*
============================================
; Title: Exercise 7.2
; Author: Adam Luna
; Date: 11 July 2021
; Description: Sign in service TS file
;===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  // Iterate over the studentIds array and return true if there is a match. Return false if no matches.
  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}
