import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.less']
})
export class SignUpFormComponent implements OnInit {

  private signUpForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      login: [''],
      pass: [''],
      doublePass: ['']
    });
  }

  ngOnInit() {
  }

}
