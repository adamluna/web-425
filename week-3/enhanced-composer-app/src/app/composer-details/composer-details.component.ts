/*
===============================================
; Title:  Assignment 3.2
; Author: Adam Luna
; Date: 13 June 2021
; Description: Composer details Typescript file for enhanced composer app.
;==============================================
*/

// Import modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css'],
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(
      this.route.snapshot.paramMap.get('composerId'),
      10
    );

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {}
}
