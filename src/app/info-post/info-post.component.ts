import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from '../models';

@Component({
  selector: 'app-info-post',
  templateUrl: './info-post.component.html',
  styleUrls: ['./info-post.component.less']
})
export class InfoPostComponent implements OnInit {

  @Input() post: IPosts;

  constructor() { }

  ngOnInit() {
  }
}
