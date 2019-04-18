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

  user: Observable<IUser>;
  posts: Observable<IPost[]>;
  id: number;
  comments: number;

  constructor(
    private router: ActivatedRoute,
    private postService: PostsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserForProfilePage(this.id);
    this.posts = this.postService.getPostsForProfilePage(this.id);
    this.comments = this.postService.getCountOfComments(this.id);
  }

}
