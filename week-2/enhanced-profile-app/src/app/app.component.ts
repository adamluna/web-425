/*
============================================
; Title:  Assignment 2.3
; Author: Adam Luna
; Date: 6 June 2021
; Description: Data Binding - App components
;===========================================
*/

// import modules
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export App Component
export class AppComponent {
  isLoggedIn: Boolean = false;

  assignment: string = 'Exercise 2.3 - Data Binding';
}
