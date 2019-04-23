import {Component, OnInit} from '@angular/core';
import {IComment, IPost} from '../models';
import {CommentsService} from '../services/comments.service';
import {PostsService} from "../services/posts.service";
import {ActivatedRoute} from "@angular/router";
import {forkJoin} from "rxjs";
import {finalize} from "rxjs/operators";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {

  comments: IComment[];
  post: IPost;
  isDataLoaded: boolean = false;
  isCommentsLoaded: boolean = false;
  private id = this.router.snapshot.paramMap.get('id');

  constructor(private postService: PostsService, private commentService: CommentsService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.getData()
      .pipe(
        finalize(() => {
          this.isDataLoaded = true;
        })
      )
      .subscribe(([post, comments]) => {
        this.post = post;
        this.comments = comments;
      })
  }

  refresh(comment: IComment) {
    this.comments.push(comment);
  }

  getData() {
    return forkJoin(this.postService.getPostById(this.id), this.commentService.getCommentsForPost(this.id));
  }
}
