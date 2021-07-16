/*
============================================
; Title:  Exercise 8.2
; Author: Adam Luna
; Date: 16 July 2021
; Description: App component file
;===========================================
*/

// import modules
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'in-n-out-booksp3';
  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}