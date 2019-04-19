import {Component, OnInit} from '@angular/core';
import {IComment, IPost} from '../models';
import {CommentsService} from '../services/comments.service';
import {PostsService} from "../services/posts.service";
import {ActivatedRoute} from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {

  comments: IComment[];
  post: IPost;
  dates: string[] = [];
  id = this.router.snapshot.paramMap.get('id');

  constructor(private postService: PostsService, private commentService: CommentsService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.getPost();
    this.getComments();
  }

  refresh(comment: IComment) {
    this.comments.push(comment);
  }

  private getComments() {
    this.commentService.getCommentsForPost(this.id).subscribe(res => {
      this.comments = res;
      this.comments.forEach((comment, index) => {
        this.dates[index] = moment(comment.createdAt * 1000).locale('ru').format('DD MMMM YYYY г. в HH:mm');
      })
    });
  }

  private getPost() {
    this.postService.getPostById(this.id).subscribe(res => {
      this.post = res;
    });
  }
}
