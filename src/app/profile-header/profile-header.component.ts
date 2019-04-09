import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {PostsService} from '../posts.service';
import {IPost, IUser} from '../models';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.less']
})
export class ProfileHeaderComponent implements OnInit {

  constructor(
    private postService: PostsService,
    private userService: UserService
  ) {
  }

  user: IUser;
  posts: IPost[];
  comments: number;

  ngOnInit() {
    this.user = this.userService.user;
    this.posts = this.postService.posts.filter( post => this.user.postsId.includes(post.postId));
    this.comments = this.posts.reduce((sum, post) => sum + post.comments, 0);
  }

}
