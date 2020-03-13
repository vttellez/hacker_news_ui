import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AppSettingsService } from './app-settings.service';
import { Observable , from as fromPromise} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private appSettings: AppSettingsService) {
  }
  private getOrigin(origin: string) {
    if (origin.endsWith('/')) {
      origin = origin.slice(0, -1);
    }
    return origin;
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return fromPromise(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
   // const accessToken = await this.oktaAuth.getAccessToken();
    const origin = this.getOrigin(this.appSettings.origin);
    request = request.clone({
      setHeaders: {
       // Authorization: 'Bearer ' + accessToken,
        'Access-Control-Allow-Origin': origin
      }
    });

    return next.handle(request).toPromise();
  }
}
