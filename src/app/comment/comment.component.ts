import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment} from '../models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  @Input() submit: boolean;
  @Input() comment: IComment;
  @Output() onPublishComment: EventEmitter<IComment> = new EventEmitter();
  newComment: IComment;
  constructor() { }

  ngOnInit() {
  }

  submitted() {
    const INPUT = document.getElementById('input_text');
    this.newComment = {
      user: this.comment.user,
      date: '9 апреля 2019 в 00:00',
      text: INPUT.value
    };
    INPUT.value = null;
    this.onPublishComment.emit(this.newComment);
  }

  isSubmit() {
    return this.submit;
  }

}
