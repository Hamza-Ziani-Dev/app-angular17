import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideRouter(routes),
    provideHttpClient(), provideAnimationsAsync(),

  ]

  
};
function withFetch(): import("@angular/common/http").HttpFeature<import("@angular/common/http").HttpFeatureKind> {
  throw new Error('Function not implemented.');
}

