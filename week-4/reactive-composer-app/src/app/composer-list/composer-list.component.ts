/*
============================================
; Title:  Exercise 4.3
; Author: Adam Luna
; Date: 20 June 2021
; Description: Composer list component ts file for reactive composer app
;===========================================
*/

/// Import modules
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

//This is the default component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})

// Export ComposerList Component
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    // subscribe to changes in the search box with a wait time of 500ms
    this.txtSearchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => this.filterComposers(val));
  }

  ngOnInit(): void {}

  filterComposers(name: string) {
    alert(name);
  }
}
