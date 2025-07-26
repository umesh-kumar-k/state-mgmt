import { Component, EventEmitter, inject, input, OnInit, Output } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../../../types/product.type';
import { ProductList } from '../product-list/product-list';
import { CartDetail } from '../../cart/cart-detail/cart-detail';

import { TuiScrollbar } from '@taiga-ui/core';


@Component({
  selector: 'product-home',
  imports: [ ProductList, CartDetail , TuiScrollbar],
  templateUrl: './product-home.html',
  styleUrl: './product-home.css'
})
export class ProductHome implements OnInit {

  productService = inject(ProductService);

  products: Product[] = [];

  itemsInCart = input<Product[]>([]);

  @Output() addToCart = new EventEmitter<Product>();

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log('Products fetched:', this.products);
    });
  }

  addToCartEventHandler(product: Product) {
      this.addToCart.emit(product);
  }
}
