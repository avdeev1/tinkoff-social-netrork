import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info-post-links',
  templateUrl: './info-post-links.component.html',
  styleUrls: ['./info-post-links.component.less']
})
export class InfoPostLinksComponent implements OnInit {

  @Output() event = new EventEmitter<MouseEvent>();

  @Input() text: string;
  @Input() image: string;
  @Input() icon: string;
  // @Input() iconColor = '#878a8c';

  isProfile: boolean;
  isIcon: boolean;
  like = 'heart';
  notLike = 'heart-o';
  isLike = false;

  constructor() { }

  ngOnInit() {
    if (this.like === this.icon) {
      this.isLike = true;
    }
    this.isProfile = !!(this.image);
    this.isIcon = !this.isProfile;
    if (this.image && this.icon) {
      throw new Error('Либо иконка, либо картинка');
    }
  }

  onPostPage($event: MouseEvent) {
    event.stopPropagation();
    $event.preventDefault();
    this.event.emit($event);
  }

  changeHeart() {
    if (this.icon === this.like || this.icon === this.notLike) {
      if (this.isLike) {
        this.icon = this.notLike;
        this.text = (parseInt(this.text, 10) - 1).toString();
      } else {
        this.icon = this.like;
        this.text = (parseInt(this.text, 10) + 1).toString();
      }
      this.isLike = !this.isLike;
    }
  }
}
