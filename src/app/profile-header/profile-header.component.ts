import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../models';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.less']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() user: IUser;
  avatar: string = 'https://faucethub.io/assets/img/avatars/3523614_1531331166.jpg';
  isProfile: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }


  ngOnInit() {
    this.isProfile = this.router.url === '/profile';
  }

}
