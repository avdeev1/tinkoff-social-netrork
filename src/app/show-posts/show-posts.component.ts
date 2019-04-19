import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {IPost} from '../models';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.less']
})
export class ShowPostsComponent implements OnInit {

  posts: IPost[];
  isLoadData: boolean = false;

  constructor(private postService: PostsService) {
  }

  get isLoad(): boolean {
    return this.isLoadData;
  }


  ngOnInit() {
    this.postService.getPostsForMainPage()
      .subscribe(res => {
      this.posts = res;
      this.isLoadData = true;
    });
  }
}
