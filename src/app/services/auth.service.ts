import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/internal/operators';
import {SignFormComponent} from '../sign-form/sign-form.component';
import {NbDialogRef, NbDialogService} from '@nebular/theme';

@Injectable()
export class AuthService {
  userName = new BehaviorSubject(!!localStorage.getItem('userName'));
  isAuth = new BehaviorSubject(!!localStorage.getItem('isAuth'));
  private isSignInForm: boolean;
  dialogRef: NbDialogRef<SignFormComponent>;

  constructor(private dialogService: NbDialogService) { }

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

  login(login: string, password: string): Observable<boolean> {
    return of(login === '123' && password === '123')
      .pipe(
        delay(1000),
        tap(isCorrect => {
          if (isCorrect) {
            localStorage.setItem('isAuth', 'true');
            localStorage.setItem('userName', login);
            this.isAuth.next(true);
            this.closeForm();
          }
        })
      );
  }

  register(login: string, password: string, repeatPassword: string): boolean {
    this.closeForm();
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
