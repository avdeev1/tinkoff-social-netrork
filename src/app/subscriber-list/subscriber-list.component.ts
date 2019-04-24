import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {IUser} from "../models";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.less']
})
export class SubscriberListComponent implements OnInit {

  subscriptionList: IUser[];
  followerList: IUser[];
  isFollower: boolean = true;
  isDataLoad: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserSubscriptionList().pipe(
      finalize(() => {
        this.isDataLoad = true;
      })
    ).subscribe(res => {
      this.subscriptionList = res.subscriptions;
      this.followerList = res.followers;
    })
  }

  toggle() {
    this.isFollower = !this.isFollower;
  }
}
