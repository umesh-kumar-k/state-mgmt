import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../types/product.type';
import { TuiButton, TuiFormatNumberPipe } from '@taiga-ui/core';
import { CartStateService } from '../cart-state-service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';


@Component({
  selector: 'cart-summary',
  imports: [ TuiButton, TuiFormatNumberPipe, AsyncPipe ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummary {

  cartStore = inject(Store<{cart: Product[]}>);
  
  itemsInCart$ = this.cartStore.select(state => state.cart);


  // computed signal to get the total price of products in the cart
  totalPrice$ = this.itemsInCart$.pipe(
    map(products => products.reduce((acc: number, product: Product) => acc + product.price * 1, 0)),
    map(total => total.toFixed(2))
  );

  // computed signal to get the total quantity of products in the cart
  totalItemsInCart$ = this.itemsInCart$.pipe(
    map(products => products.length)
  );

  
  

}
