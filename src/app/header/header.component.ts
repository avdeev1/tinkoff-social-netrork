import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isSignedIn = false;

  constructor(private service: AuthService) {
  }

  ngOnInit() {
  }

  handleClickExit() {
    this.isSignedIn = false;
  }

  onSignInClick() {
    this.service.openSignInDialog();
  }

  onSignUpClick() {
    this.service.openSignUpDialog();
  }

}
