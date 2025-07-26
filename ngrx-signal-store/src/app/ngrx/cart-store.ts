import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";

import { Product } from "../types/product.type";
import { computed } from "@angular/core";

type CartStoreState = {
    itemsInCart: Product[];
}

export const initialCartStoreState: CartStoreState = {
    itemsInCart: []
};

export const CartStore = signalStore(
    {
        providedIn: 'root',
    },
    withState(initialCartStoreState),
    withMethods((store) => ({
        addToCart: (product: Product) => {
            patchState(store, (state) => ({
                itemsInCart: [...state.itemsInCart, product]
            }));
        }
    })),
    withComputed(({itemsInCart}) => ({
        totalItemsInCart: computed(() => itemsInCart().length),
        totalPrice: computed(() => {
            return itemsInCart().reduce((acc, product) => acc + product.price * 1, 0).toFixed(2);
        })
    }))
);