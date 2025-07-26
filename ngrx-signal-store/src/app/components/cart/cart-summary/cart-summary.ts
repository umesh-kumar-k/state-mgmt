import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../../types/product.type';
import { TuiButton, TuiFormatNumberPipe } from '@taiga-ui/core';
import { CartStateService } from '../cart-state-service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CartStore } from '../../../ngrx/cart-store';


@Component({
  selector: 'cart-summary',
  imports: [ TuiButton, TuiFormatNumberPipe, AsyncPipe ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css'
})
export class CartSummary {

    cartStore  = inject(CartStore);
  
  

}
