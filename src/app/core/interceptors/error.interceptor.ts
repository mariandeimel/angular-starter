import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthFacade } from '@features/auth/auth.facade';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthFacade, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // handle 401 errors (unauthorized)
          this.auth.removeCurrentUser()
          // implement this method in AuthService
          this.router.navigate(['/auth/login'])
        } else if (error.status === 403) {
          // handle 403 errors (forbidden)
          this.router.navigate(['/access-denied'])
        }
        // If it's not a 401 or 403 error, just throw it again
        return throwError(() => error)
      })
    )
  }
}
