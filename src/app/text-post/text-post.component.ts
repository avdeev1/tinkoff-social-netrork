import {Component, Input, OnInit} from '@angular/core';
const MAX_LENGTH_POST = 560;

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
    this.isLong = this.text.length > MAX_LENGTH_POST;
    if (this.isLong) {
      this.short = this.text.slice(0, MAX_LENGTH_POST) + '...';
    } else {
      this.short = this.text;
    }
  }

  showFull() {
    event.stopPropagation();
    this.short = this.text;
    this.isLong = false;
  }
}
