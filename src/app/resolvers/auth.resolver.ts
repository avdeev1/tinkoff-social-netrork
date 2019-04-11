import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthResolver implements Resolve<boolean> {

  constructor(private authService: AuthService) { }

  resolve(): Observable<boolean> {
    return this.authService.isAuth;
  }
}
