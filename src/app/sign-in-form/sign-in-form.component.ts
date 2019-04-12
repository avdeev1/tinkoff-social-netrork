import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.less']
})
export class SignInFormComponent implements OnInit {
  private signInForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      login: [''],
      pass: ['']
    });
  }

  ngOnInit() {
  }

}
