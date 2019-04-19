import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @ViewChild('search')
  search: ElementRef;

  get isSignedIn() {
    return this.service.isAuth;
  }

  constructor(private service: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  handleSearch() {
    this.router.navigate( ['search', this.search.nativeElement.value]);
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
