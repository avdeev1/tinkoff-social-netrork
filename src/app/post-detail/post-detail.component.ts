import {Component, Input, OnInit} from '@angular/core';
import {IComment, IPost, IUser} from '../models';
import {CommentsService} from '../comments.service';
import {PostsService} from '../posts.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {

  comments: IComment[];
  post: IPost;
  user: IUser;

  constructor(private postService: PostsService, private commentService: CommentsService, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.users[0];
    this.post = this.postService.getPostsForProfilePage()[0];
    this.comments = this.commentService.getCommentsForPost();
  }
}
