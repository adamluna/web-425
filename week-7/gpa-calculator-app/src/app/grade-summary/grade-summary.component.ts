/*
============================================
; Title:  Assignment 6.4
; Author: Adam Luna
; Date: 11 July 2021
; Description: Grade summary component file
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css'],
})
export class GradeSummaryComponent implements OnInit {
  //@ts-ignore
  @Input() grade: string;
  //@ts-ignore
  @Input() course: string;

  constructor() {}

  ngOnInit(): void {}
}
