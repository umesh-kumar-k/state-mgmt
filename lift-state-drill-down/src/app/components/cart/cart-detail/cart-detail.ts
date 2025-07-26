import { Component, input, OnInit } from '@angular/core';

import { TuiTable } from '@taiga-ui/addon-table';
import { Product } from '../../../types/product.type';
import { TuiFormatNumberPipe } from '@taiga-ui/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'cart-detail',
  imports: [ TuiTable, TuiFormatNumberPipe, NgFor ],
  templateUrl: './cart-detail.html',
  styleUrl: './cart-detail.css'
})
export class CartDetail implements OnInit {
  

  itemsInCart = input<Product[]>([]);

  columns = input<string[]>(['title', 'price']);

  ngOnInit(): void {
    console.log('Items in cart = ' + this.itemsInCart());
  }
  

}
