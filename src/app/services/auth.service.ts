import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
interface User {
  login: string;
  token: string;
}
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }


isAuth = new BehaviorSubject(!!localStorage.getItem('isAuth'));

  register(login: string, password: string, confirmPassword: string) {
    return this.http.post<User>('/auth/register', {login, password, confirmPassword}).pipe(tap(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuth', 'true');
      this.isAuth.next(true);
    }), shareReplay());
  }

  login(login: string, password: string ) {
    return this.http.post<User>('/auth/', {login, password})
      .pipe(
        tap( data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('isAuth', 'true');
          this.isAuth.next(true);
        }),
        shareReplay());

  }
  getToken(): string {
      return localStorage.getItem('token');
  }
  logout(): Observable<boolean> {
    return of(true)
      .pipe(tap(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        this.isAuth.next(false);
      }));
  }

}
