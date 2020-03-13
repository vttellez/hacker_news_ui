import { HttpErrorResponse, HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppSettingsService } from './app-settings.service';


@Injectable({ providedIn: 'root' })

export class HttpHelper {
    constructor(
        private http: HttpClient,
        private appSettings: AppSettingsService,
    ) { }

    get = <T>(uriEndPoint: string): Observable<T> => {
        return this.http.get<T>(`${this.appSettings.baseApiAddress}${uriEndPoint}`, ).pipe(catchError(this.handleError));
    }

    post = <T>(uriEndPoint: string, data: any): Observable<T> => {
        return this.http.post<T>(`${this.appSettings.baseApiAddress}${uriEndPoint}`, data).pipe(catchError(this.handleError));
    }

    put = <T>(uriEndPoint: string, data: any): Observable<T> => {
        return this.http.put<T>(`${this.appSettings.baseApiAddress}${uriEndPoint}`, data).pipe(catchError(this.handleError));
    }

    delete = <T>(uriEndPoint: string): Observable<T> => {
        return this.http.delete<T>(`${this.appSettings.baseApiAddress}${uriEndPoint}`).pipe(catchError(this.handleError));
    }

    private handleError = (err: HttpErrorResponse) => {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        const errorMessage = {
            message: '',
            status: null
        };

        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage.message = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,

            errorMessage.message = `Server returned code: ${err.status}, error message is: ${err.message}`;
            errorMessage.status = err.status;
        }

        return throwError(errorMessage);
    }
}
