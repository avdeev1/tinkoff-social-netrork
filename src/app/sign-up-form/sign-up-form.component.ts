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
        pass: [''],
        doublePass: ['']
      }, {validator: this.confirmPass})
    });
  }

  confirmPass(group: FormGroup) {
    if ((!group.touched || !group.dirty) ||
      group.get('pass').value === group.get('doublePass').value) {
      return null;
    }
    return {confirmPass: 'Passwords are different'};
  }

  isError() {
    return this.signUpForm.get('passwords').hasError('confirmPass');
  }

  onSubmit() {
    this.authService.register(this.signUpForm.get('login').value, this.signUpForm.get('passwords').get('pass').value,
      this.signUpForm.get('passwords').get('doublePass').value);
  }

}
