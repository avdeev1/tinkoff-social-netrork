import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../models';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.less']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() user: IUser;
  defaultAvatar: string = 'https://faucethub.io/assets/img/avatars/3523614_1531331166.jpg';
  isProfile: boolean;
  isFollower: boolean = false;
  private id = this.activatedRoute.snapshot.paramMap.get('id');

  get isAuth() {
    return this.authService.isAuth.value;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService) {
  }

  ngOnInit() {
    this.isProfile = this.activatedRoute.snapshot.data.profile || this.user.login === this.authService.getUserName();
    if (this.authService.isAuth.value && !this.isProfile) {
      this.loadDataAboutSubscription();
    }
  }

  loadDataAboutSubscription() {
    this.userService.getInfoAboutSubscribes(this.id).subscribe(res => {
      if (res) {
        this.isFollower = true;
      }
    });
  }

  unsubscribe() {
    this.userService.unsubscribe(this.user.id).subscribe(res => {
      this.updateUser();
    });
  }

  subscribe() {
    this.userService.subscribe(this.user.id).subscribe(res => {
      this.updateUser();
    });
  }

  updateUser() {
    this.userService.getUserById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(res => {
      this.isFollower = !this.isFollower;
      this.user = res;
    });
  }

}
