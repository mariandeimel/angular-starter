import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ErrorInterceptor } from '@core/interceptors/error.interceptor';
import { APP_ROUTES } from './app.routes';
import { GlobalHttpInterceptor } from '@core/interceptors/global.interceptor';
import { XsrfHttpInterceptor } from '@core/interceptors/xsrf.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: XsrfHttpInterceptor, multi: true },
  ]
}
