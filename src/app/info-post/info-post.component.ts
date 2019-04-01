import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-post',
  templateUrl: './info-post.component.html',
  styleUrls: ['./info-post.component.less']
})
export class InfoPostComponent implements OnInit {

  @Input() post: object;

  constructor() { }

  ngOnInit() {
  }
}
