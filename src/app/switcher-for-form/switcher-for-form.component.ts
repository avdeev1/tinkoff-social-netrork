import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-switcher-for-form',
  templateUrl: './switcher-for-form.component.html',
  styleUrls: ['./switcher-for-form.component.less']
})
export class SwitcherForFormComponent implements OnInit {
  isSignIn = false;

  constructor(private autoService: AuthService) {
    this.isSignIn = this.autoService.getIsSignIn();
  }

  ngOnInit() {
  }

  toggleForm() {
    this.autoService.toggle();
    this.isSignIn = this.autoService.getIsSignIn();
  }

}
