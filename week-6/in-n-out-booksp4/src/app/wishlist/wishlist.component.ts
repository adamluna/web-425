/*
===============================================
; Title:  Exercise 6.2
; Author: Adam Luna
; Date: 11 July 2021
; Description: wishlist component file
;==============================================
*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  // items list
  items: Array<IWishlistItem> = [];

  constructor() {}

  ngOnInit(): void {}

  // push items to wishlist
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}