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
  idUser: number;

  constructor(private userService: UserService) { }

  isSub(us) {
    return us.subscriptions.some(el => {
      return el.follower.id === this.idUser;
    })
  }

  ngOnInit() {
    this.getSubscriptionList();
  }

  getSubscriptionList() {
    this.userService.getUserSubscriptionList().pipe(
      finalize(() => {
        this.isDataLoad = true;
      })
    ).subscribe(res => {
      this.idUser = res.id;
      this.subscriptionList = res.subscriptions;
      this.followerList = res.followers;
    })
  }

  unsubscribe(id: number) {
    this.userService.unsubscribe(id).subscribe(res => {
      this.getSubscriptionList();
    });
  }

  subscribe(id: number) {
    this.userService.subscribe(id).subscribe(res => {
      this.getSubscriptionList();
    });
  }

  toggle() {
    this.isFollower = !this.isFollower;
  }
}
