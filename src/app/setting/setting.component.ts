import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {PostsService} from '../services/posts.service';
import {IPost, IUser} from '../models';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit {

  constructor(
    private postService: PostsService,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.http.get<IUser>('api/user/profile').subscribe(res => {
      this.user = res;
      this.isLoad = true;
    });
  }

  user: IUser;
  isLoad: boolean = false;
  avatar: string = 'https://faucethub.io/assets/img/avatars/3523614_1531331166.jpg';


  ngOnInit() {
  }

  getLoad() {
    return this.isLoad;
  }
}
