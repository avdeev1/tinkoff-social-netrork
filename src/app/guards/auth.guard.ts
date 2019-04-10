import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { map, tap } from 'rxjs/internal/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.isAuth
      .pipe(
        tap(authResult => {
          if (authResult == route.data.shouldBeAuthenticated) {
            this.router.navigateByUrl(route.data.redirectTo);
          }
        }),
        map(authResult => authResult !== route.data.shouldBeAuthenticated)
      );
  }

}
