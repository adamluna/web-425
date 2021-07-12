/*
============================================
; Title:  Assignment 6.4
; Author: Adam Luna
; Date: 11 July 2021
; Description: app routing file
;===========================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// routing
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [{ path: 'not-found', component: NotFoundComponent }],
  },
  { path: '**', redirectTo: 'session/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
