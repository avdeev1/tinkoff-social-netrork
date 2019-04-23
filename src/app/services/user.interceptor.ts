import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuth.value) {
      req = req.clone({
        headers: req.headers.set(
          'Authorization',
          `Bearer ${this.authService.getToken()}`
        )
      });
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status == 401) {
          console.log('401');
          localStorage.clear();
          this.router.navigate(['/'], {queryParams: {time: Date.now()}});
        }

        return throwError(err);
      })
    );
  }
}
