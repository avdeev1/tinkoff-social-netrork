import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {SignFormComponent} from '../sign-form/sign-form.component';
import {NbDialogRef, NbDialogService} from '@nebular/theme';

interface User {
  login: string;
  token: string;
}
@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private dialogService: NbDialogService) {
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
    return this.http.post<User>('/auth/register', {login, password, confirmPassword}).pipe(tap(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuth', 'true');
      localStorage.setItem('userName', login);
      this.isAuth.next(true);
    }), shareReplay());
  }

  login(login: string, password: string ) {
    return this.http.post<User>('/auth/', {login, password})
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
  logout(): Observable<boolean> {
    return of(true)
      .pipe(tap(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('userName');
        this.isAuth.next(false);
        this.closeForm();
      }));
  }
}
