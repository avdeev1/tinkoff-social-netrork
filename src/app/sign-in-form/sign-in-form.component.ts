import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {catchError} from "rxjs/operators";
import {error} from "util";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.less']
})
export class SignInFormComponent implements OnInit {
  private signInForm: FormGroup;
  errorAuth = false;
  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      login: ['', [Validators.required]],
      pass: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  isControlInvalid(): boolean {
    const isDirty = this.signInForm.controls.pass.dirty;
    const control = this.signInForm.controls.pass;
    const result = control.invalid && isDirty;

    return result;
  }

  onSubmit() {
    const {login, pass} = this.signInForm.value;

    this.authService.login(login, pass).pipe(
      catchError((err) => {
        if (err) {
          this.errorAuth = true;
          return err;
        }
        console.log(err);
        return err;
      })
    ).subscribe();
  }
}
