import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.less']
})
export class CreateCommentComponent implements OnInit {

  isAuth() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

  submitted() {}
}
