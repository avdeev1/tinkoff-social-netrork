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
  posts: Observable<IPost[]>;
  isLoad = false;

  constructor(
    private router: ActivatedRoute,
    private postService: PostsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.posts = this.postService.getPostsForUserPage(id);
      this.userService.getUserById(id).subscribe(res => {
        this.user = res;
        this.isLoad = true;
      });
    } else {
      this.posts = this.postService.getPostsForProfilePage();
      this.userService.getProfile().subscribe(res => {
        this.user = res;
        this.isLoad = true;
      });
    }
  }

}
