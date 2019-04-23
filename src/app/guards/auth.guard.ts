import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CanActivate, Router} from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router/src/router_state';
import {map, switchMap, tap} from 'rxjs/internal/operators';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.isAuth
      .pipe(
        tap((authResult: boolean) => {
          if (!authResult) {
            this.authService.openSignInDialog();
            this.router.navigate(['/'], {queryParams: {time: Date.now()}});
            // this.router.navigateByUrl('/');
          }
        })
      );
  }

}
