/*
============================================
; Title:  Exercise 5.2
; Author: Adam Luna
; Date: 27 June 2021
; Description: Book interface file
;===========================================
*/

// Create interface named IBook
export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
} 