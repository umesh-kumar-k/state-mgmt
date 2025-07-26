import { Component, EventEmitter, input, Output } from '@angular/core';
import { Product } from '../../../types/product.type';

import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';


@Component({
  selector: 'product-detail',
  imports: [
        TuiAppearance,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiLink,
        TuiPlatform,
        TuiTitle,
        TuiCarousel, 
        TuiPagination
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {

  product = input.required<Product>();

  @Output() addToCart = new EventEmitter<Product>();

  addProductToCartBtnHandler() {
    console.log('Product added to cart:', this.product());
    this.addToCart.emit(this.product());
  }


}
