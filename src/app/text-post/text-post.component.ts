import {Component, Input, OnInit} from '@angular/core';
import {previewTag} from "../slice-text.pipe";

const MAX_POST_LENGTH = 600;

@Component({
  selector: 'app-text-post',
  templateUrl: './text-post.component.html',
  styleUrls: ['./text-post.component.less']
})

export class TextPostComponent implements OnInit {

  @Input() text: string;

  isLong: boolean;
  short: string;

  constructor() { }

  ngOnInit() {
    this.isLong = this.text.indexOf(previewTag) >= 0;
  }

  showFull() {
    event.stopPropagation();
    this.isLong = false;
  }
}
