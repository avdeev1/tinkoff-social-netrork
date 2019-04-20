import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {IPost} from '../models';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.less']
})
export class ShowPostsComponent implements OnInit {

  posts: IPost[];
  isDataLoaded = false;

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.postService.getPostsForMainPage()
      .pipe(finalize(() => {
        this.isDataLoaded = true;
      }))
      .subscribe(res => {
        this.posts = res;
      });
  }
}
