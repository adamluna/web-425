/*
============================================
; Title:  Exercise 6.2
; Author: Adam Luna
; Date: 11 July 2021
; Description: GPA component TS file
;===========================================
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css'],
})
export class GpaComponent implements OnInit {
  //@ts-ignore
  @Input() gpaTotal: number;
  constructor() {}

  ngOnInit(): void {}
}
