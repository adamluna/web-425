/*
============================================
; Title:  Assignment 1.4
; Author: Adam Luna
; Date: 30 May 2021
; Description: TypeScript
;===========================================
*/

import { IPerson } from "./person.interface";

// Implement the IPerson interface
class Person implements IPerson {
  firstName: string;
  lastName: string;

  // Constructor
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Create a new Person object passing in my first and last name
let myName = new Person("Adam", "Luna");

// Use the console.log function to output the Person objects first and last name values
console.log(`My name is ${myName.firstName} ${myName.lastName}`);