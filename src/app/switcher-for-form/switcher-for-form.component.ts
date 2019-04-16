import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-switcher-for-form',
  templateUrl: './switcher-for-form.component.html',
  styleUrls: ['./switcher-for-form.component.less']
})
export class SwitcherForFormComponent implements OnInit {
  isSignInForm = this.autoService.isSignInForm;

  constructor(private autoService: AuthService) {
  }

  ngOnInit() {
    this.isSignInForm = this.autoService.getIsSignIn();
  }

  toggleForm() {
    this.autoService.toggle();
    this.isSignInForm = this.autoService.getIsSignIn();
  }

}
