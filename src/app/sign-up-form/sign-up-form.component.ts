import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.less']
})
export class SignUpFormComponent implements OnInit {

  private signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

  }

}
