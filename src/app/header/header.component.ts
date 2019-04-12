import {Component, OnInit} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {SignInFormComponent} from '../sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from '../sign-up-form/sign-up-form.component';
import {SignFormComponent} from '../sign-form/sign-form.component';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isSignedIn = false;

  constructor(private dialogService: NbDialogService, private service: AuthService) {
  }

  ngOnInit() {
  }

  handleClickExit() {
    this.isSignedIn = false;
  }

  onSignInClick() {
    this.service.openSignInDialog();
    this.openForm();
  }

  onSignUpClick() {
    this.service.openSignUpDialog();
    this.openForm();
  }

  openForm() {
    this.dialogService.open(SignFormComponent);
  }

}
