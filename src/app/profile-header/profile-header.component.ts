import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.less']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() user: IUser;
  defaultAvatar = 'https://faucethub.io/assets/img/avatars/3523614_1531331166.jpg';
  isProfile: boolean;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.isProfile = this.activatedRoute.snapshot.data.profile;
  }
}
