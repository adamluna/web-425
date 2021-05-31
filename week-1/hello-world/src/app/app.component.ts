/*
============================================
; Title:  Assignment 1.3
; Author: Adam Luna
; Date: 30 May 2021
; Description: Angular CLI
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myWorld = "You are now in Adam's world!!";
}