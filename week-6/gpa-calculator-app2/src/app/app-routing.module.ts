/*
============================================
; Title:  Exercise 6.3
; Author: Adam Luna
; Date: 11 July 2021
; Description: app routing file
;===========================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
  {
    path: '**',
    redirectTo: 'session/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}