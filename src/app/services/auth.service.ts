import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/internal/operators';

@Injectable()
export class AuthService {
  public isSignIn = false;
  toggle() {
    this.isSignIn = !this.isSignIn;
  }
  openSignInDialog() {
    this.isSignIn = true;
  }

  openSignUpDialog() {
    this.isSignIn = false;
  }

  getIsSignIn() {
    return this.isSignIn;
  }

  constructor() { }
  userName = new BehaviorSubject(!!localStorage.getItem('userName'));
  isAuth = new BehaviorSubject(!!localStorage.getItem('isAuth'));

  login(login: string, password: string): Observable<boolean> {
    return of(login === '123' && password === '123')
      .pipe(
        delay(1000),
        tap(isCorrect => {
          if (isCorrect) {
            localStorage.setItem('isAuth', 'true');
            localStorage.setItem('userName', login);
            this.isAuth.next(true);
          }
        })
      );
  }

  register(login: string, password: string, repeatPassword: string): boolean {
    return true;
  }
  logout(): Observable<boolean> {
    return of(true)
      .pipe(tap(() => {
        localStorage.removeItem('isAuth');
        localStorage.removeItem('userName');
        this.isAuth.next(false);
      }));
  }
}
