import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {PostsService} from '../services/posts.service';
import {IPost, IUser} from '../models';
import {ActivatedRoute} from "@angular/router";
import {delay, map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.less']
})
export class ProfileHeaderComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private postService: PostsService,
    private userService: UserService
  ) {
  }

  user: Observable<IUser>;
  posts: Observable<IPost[]>;
  id: number;
  comments: number;

  ngOnInit() {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserForProfilePage(this.id);
    this.posts = this.postService.getPostsForProfilePage(this.id);
    this.comments = this.postService.getCountOfComments(this.id);
  }
}
