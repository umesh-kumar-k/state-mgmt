import { provideEventPlugins } from "@taiga-ui/event-plugins";
import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import { provideStore } from "@ngrx/store";
import { cartReducer } from "./ngrx/cart.reducers";
import { provideStoreDevtools } from "@ngrx/store-devtools";


export const appConfig: ApplicationConfig = {
  providers: [
        provideAnimations(),
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideEventPlugins(),
        provideHttpClient(),
        provideStore( {cart: cartReducer}),
        provideStoreDevtools({maxAge: 25, logOnly: !isDevMode}),  
    ]
};
