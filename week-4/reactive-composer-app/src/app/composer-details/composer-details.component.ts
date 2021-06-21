/*
===============================================
; Title:  Exercise 4.2
; Author: Adam Luna
; Date: 20 June 2021
; Description: Composer details file for di composer app.
;==============================================
*/

// Import modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css'],
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;

  constructor(
    private route: ActivatedRoute,
    private composerService: ComposerService
  ) {
    this.composerId = parseInt(
      this.route.snapshot.paramMap.get('composerId'),
      10
    );

    if (this.composerId) {
      // dependency injection
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {}
}
