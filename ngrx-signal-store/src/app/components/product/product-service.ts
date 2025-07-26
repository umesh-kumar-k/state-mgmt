import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductResponse } from '../../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_LISTING_URL = 'https://dummyjson.com/products';

  http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(this.PRODUCT_LISTING_URL).pipe(
      map((response: ProductResponse) => response.products)
    );
  }

}
