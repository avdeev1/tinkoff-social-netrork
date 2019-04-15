import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.less']
})
export class SignUpFormComponent implements OnInit {

  private signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      login: ['', [Validators.required]],
      passwords: this.fb.group({
        pass: ['', Validators.required],
        doublePass: ['', Validators.required]
      }, {validator: this.confirmPass})
    });
  }

  confirmPass(group: FormGroup) {
    if (group.value.pass === group.value.doublePass) {
      return null;
    }
    return {confirmPass: 'Passwords are different'};
  }

  isError() {
    return this.signUpForm.get('passwords').hasError('confirmPass');
  }

  onSubmit() {
    this.authService.register(this.signUpForm.value.login, this.signUpForm.value.passwords.pass,
      this.signUpForm.value.passwords.doublePass);
  }
}
