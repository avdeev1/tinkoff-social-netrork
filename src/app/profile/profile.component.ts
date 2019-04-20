import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
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
  isUserLoaded = false;
  isPostsLoaded = false;


  constructor(
    private router: ActivatedRoute,
    private postService: PostsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getPostsForUserPage(id).subscribe(res => {
        this.posts = res;
        this.isPostsLoaded = true;
      });
      this.userService.getUserById(id).subscribe(res => {
        this.user = res;
        this.isUserLoaded = true;
      });
    } else {
      this.postService.getPostsForProfilePage().subscribe(res => {
        this.posts = res;
        this.isPostsLoaded = true;
      });
      this.userService.getProfile().subscribe(res => {
        this.user = res;
        this.isUserLoaded = true;
      });
    }
  }

}
