import { Component, OnInit } from '@angular/core';
import {forkJoin} from "rxjs";
import {IPost, IUser} from "../models";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../services/posts.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  user: IUser;
  posts: IPost[];
  isDataLoad = false;


  constructor(
    private router: ActivatedRoute,
    private postService: PostsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getData().subscribe(([posts, user]) => {
      this.posts = posts;
      this.user = user;
      this.isDataLoad = true;
    })
  }

  getData() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      return forkJoin(this.postService.getPostsForUserPage(id), this.userService.getUserById(id));
    }
    return forkJoin(this.postService.getPostsForProfilePage(), this.userService.getProfile());
  }

}
