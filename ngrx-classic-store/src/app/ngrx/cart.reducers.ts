import { createReducer, on } from "@ngrx/store";
import { addToCart } from './cart.actions';
import { Product } from '../types/product.type';

const initialCartState: Product[] = [];

// Reducer function to handle cart actions
export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => [...state, product])
);

