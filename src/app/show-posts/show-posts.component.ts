import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {IPost} from '../models';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.less']
})
export class ShowPostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.posts = this.postService.posts;
  }

}
