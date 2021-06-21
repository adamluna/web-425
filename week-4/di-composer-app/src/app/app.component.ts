/*
===============================================
; Title:  Assignment 3.2
; Author: Adam Luna
; Date: 13 June 2021
; Description: App component file for enhanced composer app
;==============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 3.2 - Passing Data to Routes, Part I';
}