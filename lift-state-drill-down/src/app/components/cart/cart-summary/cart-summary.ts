import { Component, computed, input } from '@angular/core';
import { Product } from '../../../types/product.type';
import { TuiButton, TuiFormatNumberPipe } from '@taiga-ui/core';


@Component({
  selector: 'cart-summary',
  imports: [ TuiButton, TuiFormatNumberPipe ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummary {

  itemsInCart = input.required<Product[]>();

  // computed signal to get the total price of products in the cart

  totalPrice = computed(() => { 
    return (this.itemsInCart().reduce((acc, product) => acc + product.price * 1, 0)).toFixed(2);
  });

  // computed signal to get the total quantity of products in the cart
  totalItemsInCart = computed(() => {
    return this.itemsInCart().reduce((acc, product) => acc + 1, 0);
  });

}
