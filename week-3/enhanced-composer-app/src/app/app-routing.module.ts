/*
============================================
; Title:  app-routing.module.ts
; Author: Adam Luna
; Date: 13 June 2021
; Description: Routing Typescript file for enhanced composer app.
;===========================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/composer-list', pathMatch: 'full'},
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
