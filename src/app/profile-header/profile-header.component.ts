import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../models';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.less']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() user: IUser;
  avatar: string = 'https://faucethub.io/assets/img/avatars/3523614_1531331166.jpg';
  isProfile: boolean;
  days: number;

  constructor(private authService: AuthService, private router: Router) {
  }


  ngOnInit() {
    this.isProfile = this.router.url === '/profile';
    this.days = moment().diff(moment(this.user.registrationDate * 1000), 'days');
  }

}
