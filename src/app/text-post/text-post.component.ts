import {Component, Input, OnInit} from '@angular/core';

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
    this.isLong = this.text.split('').length > 1000;
    if (this.isLong) {
      this.short = this.text.split('').slice(0, 1000).join('') + '...';
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
