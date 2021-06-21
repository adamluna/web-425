/*
===============================================
; Title:  Exercise 4.2
; Author: Adam Luna
; Date: 13 June 2021
; Description: Composer list file for di composer app.
;==============================================
*/

/// Import modules
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

//This is the default component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// Export ComposerList Component
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    // dependency injection
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {}
}
