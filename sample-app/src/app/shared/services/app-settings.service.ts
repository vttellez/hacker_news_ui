import { Injectable, Inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {
    origin: string;
    baseApiAddress: string;
    constructor(
        @Inject('BASE_API_URL') baseApiUrl,
        @Inject('BASE_URL') baseUrl,
      ) {
          this.baseApiAddress = baseApiUrl;
          this.origin = baseUrl;
      }

    public setStaticUrl(baseUrl: string) {
        this.baseApiAddress = baseUrl;
    }
}