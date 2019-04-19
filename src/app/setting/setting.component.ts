import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {PostsService} from '../services/posts.service';
import {IUser} from '../models';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit {


  user: IUser;
  isLoad: boolean = false;
  avatar: string = 'https://faucethub.io/assets/img/avatars/3523614_1531331166.jpg';

  constructor(
    private postService: PostsService,
    private userService: UserService,
  ) {}


  ngOnInit() {
    this.userService.getProfile().subscribe(res => {
      this.user = res;
      this.isLoad = true;
    });
  }
}
