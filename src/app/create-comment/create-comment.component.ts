import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IComment} from '../models';
import {AuthService} from '../services/auth.service';
import {CommentsService} from '../services/comments.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.less']
})
export class CreateCommentComponent implements OnInit {

  private id: string = this.activateRouter.snapshot.paramMap.get('id');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private commentService: CommentsService,
    private activateRouter: ActivatedRoute) {
  }

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

  createComment() {
    this.commentService.createComment(parseInt(this.id, 10), this.commentForm.value.comment).subscribe(res => {
      this.refresh.emit(res);
    });
    this.commentForm.reset();
  }

  authorization() {
    this.authService.openSignInDialog();
  }
}
