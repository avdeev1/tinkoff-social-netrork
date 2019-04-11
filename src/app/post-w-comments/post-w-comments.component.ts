import {Component, Input, OnInit} from '@angular/core';
import {IComment, IPost} from '../models';
import {CommentsService} from '../comments.service';
import {PostsService} from '../posts.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-post-w-comments',
  templateUrl: './post-w-comments.component.html',
  styleUrls: ['./post-w-comments.component.less']
})
export class PostWCommentsComponent implements OnInit {

  commServ: CommentsService = new CommentsService();
  comments: IComment[] = this.commServ.comments;
  emptyComm: IComment = this.commServ.emptyComment;
  post: IPost = new PostsService(new UserService()).posts[0];
  constructor() {

  }

  ngOnInit() {
  }


  addComment(comm: IComment) {
    this.commServ.comments.push(comm);
  }
}
