import { createAction, props } from '@ngrx/store';
import { Product } from '../types/product.type';

export const addToCart = createAction('[Cart] Add to Cart', props<{ product: Product }>());