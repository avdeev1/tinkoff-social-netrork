import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment, IUser} from '../models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  @Input() user: IUser;
  @Output() onPublishComment: EventEmitter<IComment> = new EventEmitter();
  newComment: IComment;
  constructor() { }

  ngOnInit() {
  }

  submitted() {
    const input = document.getElementById('input_text');
    this.newComment = {
      user: this.user,
      date: '9 апреля 2019 в 00:00',
      text: input.value
    };
    input.value = null;
    this.onPublishComment.emit(this.newComment);
  }
}
