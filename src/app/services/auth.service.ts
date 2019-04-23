import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {SignFormComponent} from '../sign-form/sign-form.component';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {Router} from '@angular/router';

interface User {
  login: string;
  token: string;
}
@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private dialogService: NbDialogService, private router: Router) {
  }

  userName = new BehaviorSubject(!!localStorage.getItem('userName'));
  isAuth = new BehaviorSubject(!!localStorage.getItem('isAuth'));
  private isSignInForm: boolean;
  dialogRef: NbDialogRef<SignFormComponent>;

  toggle() {
    this.isSignInForm = !this.isSignInForm;
  }

  openSignInDialog() {
    this.isSignInForm = true;
    this.openForm();
  }

  openSignUpDialog() {
    this.isSignInForm = false;
    this.openForm();
  }

  openForm() {
    this.dialogRef = this.dialogService.open(SignFormComponent);
  }

  getIsSignInForm() {
    return this.isSignInForm;
  }

  closeForm() {
    this.dialogRef.close();
  }

  register(login: string, password: string, confirmPassword: string) {
    return this.http.post<User>('/api/auth/register', {login, password, confirmPassword}).pipe(tap(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuth', 'true');
      localStorage.setItem('userName', login);
      this.isAuth.next(true);
      this.closeForm();
    }), shareReplay());
  }

  login(login: string, password: string ) {
    return this.http.post<User>('/api/auth/', {login, password})
      .pipe(
        tap( data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('isAuth', 'true');
          localStorage.setItem('userName', login);
          this.isAuth.next(true);
          this.closeForm();
        }),
        shareReplay());
  }

  getToken(): string {
      return localStorage.getItem('token');
  }

  getUserName(): string {
    return localStorage.getItem('userName');
  }

  logout(): Observable<boolean> {
    return of(true)
      .pipe(tap(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('userName');
        this.isAuth.next(false);
        this.router.navigateByUrl('/');
      }));
  }
}
