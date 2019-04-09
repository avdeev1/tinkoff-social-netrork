import {Component, OnInit} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {SignInFormComponent} from '../sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from '../sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isSignedIn = false;

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit() {
  }

  handleClickExit() {
    this.isSignedIn = false;
  }

  onSignInClick() {
    this.dialogService.open(SignInFormComponent);
  }

  onSignUpClick() {
    this.dialogService.open(SignUpFormComponent);
  }

}
