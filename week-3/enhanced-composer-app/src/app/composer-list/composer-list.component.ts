/*
===============================================
; Title:  Assignment 3.2
; Author: Adam Luna
; Date: 13 June 2021
; Description: Composer list Typescript file for enhanced composer app.
;==============================================
*/

/// Import modules
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

//This is the default component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// Export ComposerList Component
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}
