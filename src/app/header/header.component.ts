import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  get isSignedIn() {
    return this.service.isAuth;
  }

  constructor(private service: AuthService) {
  }

  ngOnInit() {
  }

  handleClickExit() {
    this.service.logout().subscribe();
  }

  onSignInClick() {
    this.service.openSignInDialog();
  }

  onSignUpClick() {
    this.service.openSignUpDialog();
  }

}
