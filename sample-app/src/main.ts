import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const providers = [
  {
    provide: 'BASE_URL',
    useFactory: getBaseUrl, deps: []
  },
  {
    provide: 'BASE_API_URL',
    useValue:  environment.apiEndpoint,
    deps: []
  }
];

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
