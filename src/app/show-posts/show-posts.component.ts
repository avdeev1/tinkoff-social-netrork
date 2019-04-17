import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {IPost} from '../models';
import {Observable} from "rxjs";

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.less']
})
export class ShowPostsComponent implements OnInit {

  posts: Observable<IPost[]>;
  postsDB: Observable<IPost[]>;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.posts = this.postService.getPostsForMainPage();
    this.postsDB = this.postService.getPostsFromDB();
  }

}
