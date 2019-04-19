import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {IPost} from '../models';
import {forkJoin} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.less']
})
export class ShowPostsComponent implements OnInit {

  posts: IPost[];
  isLoad: boolean = false;

  constructor(private postService: PostsService) {
  }


  ngOnInit() {
    this.postService.getPostsForMainPage().subscribe(res => {
      this.posts = res;
      this.isLoad = true;
    });
  }
}
