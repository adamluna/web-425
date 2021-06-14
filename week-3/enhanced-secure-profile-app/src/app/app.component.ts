/*
============================================
; Title:  Assignment 3.3
; Author: Adam Luna
; Date: 13 June 2021
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
  assignment: string = 'Secure Profile App';
}
