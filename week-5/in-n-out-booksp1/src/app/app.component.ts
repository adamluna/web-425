/*
============================================
; Title:  Exercise 5.2
; Author: Adam Luna
; Date: 27 June 2021
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
  title = 'in-n-out-booksp1';
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.2 - Navigation and Layout';
  }
}