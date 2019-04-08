import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment, IUser} from '../models';
import {UserService} from '../user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  @Input() submit: boolean;
  @Input() comment: IComment;
  @Output() onPublishComment: EventEmitter<IComment> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitted() {
    const INPUT = document.getElementById('input_text');
    this.comment.text = INPUT.value;
    INPUT.value = null;
    this.comment.date = '9 апреля 2019 в 00:00';
    this.onPublishComment.emit(this.comment);
  }

  isSubmit() {
    return this.submit;
  }

}
