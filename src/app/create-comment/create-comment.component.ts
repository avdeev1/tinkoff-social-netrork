import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment, IPost} from "../models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentsService} from "../services/comments.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.less']
})
export class CreateCommentComponent implements OnInit {

  @Input() post: IPost;
  constructor(private fb: FormBuilder, private authService: AuthService, private commentService: CommentsService) { }

  private commentForm: FormGroup;
  @Output() refresh: EventEmitter<IComment> = new EventEmitter();

  get isAuth(): boolean {
    return !!(this.authService.getToken());
  }

  ngOnInit() {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required]]
    });
  }

  leaveComment() {
    const comment = { text: this.commentForm.value.comment };
    this.commentService.leaveComment(this.post, comment).subscribe( res => {
      this.refresh.emit(res);
    });
    this.commentForm.reset();
  }
}
