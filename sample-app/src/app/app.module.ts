import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSettingsService } from './shared/services/app-settings.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/auth-intercepor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function( appSettings: AppSettingsService) {
        return new AuthInterceptor(appSettings);
      },
      deps: [AppSettingsService],
      multi: true
    },
    AppSettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
