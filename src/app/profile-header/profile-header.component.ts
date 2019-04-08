import { Component, OnInit } from '@angular/core';
import {IPost, IUser} from '../models';
import {UserService} from '../user.service';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.less']
})
export class ProfileHeaderComponent implements OnInit {

  constructor() { }

  user: IUser = new UserService().user;
  posts: IPost[] = new PostsService().posts.filter( post => this.user.postsId.includes(post.postId));
  comments: number = this.posts.reduce((sum, post) => sum + post.comments, 0);

  ngOnInit() {
  }

}
