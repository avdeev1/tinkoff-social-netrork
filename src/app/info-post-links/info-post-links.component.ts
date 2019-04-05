import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info-post-links',
  templateUrl: './info-post-links.component.html',
  styleUrls: ['./info-post-links.component.less']
})
export class InfoPostLinksComponent implements OnInit {

  @Input() text: string;
  @Input() image: string;
  @Input() icon: string;

  isProfile: boolean;

  constructor() {
  }

  get giveMeIcon() {
    return `fa fa-${this.icon}`;
  }

  ngOnInit() {
    this.isProfile = !!(this.image);
    if (this.image && this.icon) {
      throw new Error('Либо иконка, либо картинка');
    }
  }
}
