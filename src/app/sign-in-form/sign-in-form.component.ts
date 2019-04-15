import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.less']
})
export class SignInFormComponent implements OnInit {
  private signInForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      login: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.authService.login(this.signInForm.value.login, this.signInForm.value.pass);
  }
}
