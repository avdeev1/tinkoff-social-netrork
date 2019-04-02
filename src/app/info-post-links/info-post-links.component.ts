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

  isProfile: boolean;
  isIcon: boolean;

  constructor() {
  }

  get giveMeIcon() {
    return `fa fa-${this.icon}`;
  }

  ngOnInit() {
    this.isProfile = !!(this.image);
    this.isIcon = !this.isProfile;
    if (this.image && this.icon) {
      throw new Error('Либо иконка, либо картинка');
    }
  }
}
