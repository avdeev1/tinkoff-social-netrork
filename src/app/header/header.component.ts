import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  search = new FormControl();

  get isSignedIn() {
    return this.service.isAuth;
  }

  constructor(private service: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  handleSearch() {
    this.router.navigate(['search'], {queryParams: {q: this.search.value}});
  }

  logout() {
    this.service.logout().subscribe();
  }

  onSignInClick() {
    this.service.openSignInDialog();
  }

  onSignUpClick() {
    this.service.openSignUpDialog();
  }

}
