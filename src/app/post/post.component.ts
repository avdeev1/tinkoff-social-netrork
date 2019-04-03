import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPosts} from '../models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Output() clickPost = new EventEmitter<MouseEvent>();

  @Input() post: IPosts;

  constructor() { }

  ngOnInit() {
  }

  goToPostPage($event: MouseEvent) {
    this.clickPost.emit($event);
  }
}
