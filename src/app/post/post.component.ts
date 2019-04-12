import {ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {IPost} from '../models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;


  ngOnInit() {
  }

  goToPostPage() {
  }
}
