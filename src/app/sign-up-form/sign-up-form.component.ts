import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.less']
})
export class SignUpFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) {}
  signUpForm: FormGroup;

  static confirmPass(group: FormGroup) {
    if (group.value.pass === group.value.doublePass) {
      return null;
    }
    return {confirmPass: 'Passwords are different'};
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      login: ['', [Validators.required]],
      passwords: this.fb.group({
        pass: ['', Validators.required],
        doublePass: ['', Validators.required]
      }, {validator: SignUpFormComponent.confirmPass})
    });
  }

  hasConfirmPassError() {
    const isDirty = this.signUpForm.controls.passwords.dirty;
    const hasError = this.signUpForm.controls.passwords.hasError('confirmPass');

    return  isDirty && hasError;
  }

  onSubmit() {
    const {login, passwords: {pass, doublePass}} = this.signUpForm.value;

    this.authService.register(login, pass, doublePass).subscribe();
  }
}
