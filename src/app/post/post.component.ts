import {ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {IPost} from '../models';
import {Router} from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToPostPage() {
    this.router.navigateByUrl(`post/${this.post.id}`);
  }
}
