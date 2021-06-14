/*
===============================================
; Title:  Assignment 3.3
; Author: Adam Luna
; Date: 13 June 2021
; Description: App routing file for secure profile app
;==============================================
*/

// import modules
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'home', component: HomeComponent },
];
