/*
============================================
; Title:  Exercise 2.3
; Author: Adam Luna
; Date: 6 June 2021
; Description: Data Binding
;===========================================
*/

import { Component, OnInit } from '@angular/core';

// Expert Person class
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ["#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"];
  
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Adam Luna", "Pizza", "Blue");
  }

  ngOnInit(): void {
  }

}
