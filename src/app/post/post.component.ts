import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Output() atPostPage = new EventEmitter<MouseEvent>();

  @Input() post: object;

  constructor() { }

  ngOnInit() {
  }

  onPostPage($event: MouseEvent) {
    console.log('click');
    this.atPostPage.emit($event);
  }
}
