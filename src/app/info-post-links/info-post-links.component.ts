import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-post-links',
  templateUrl: './info-post-links.component.html',
  styleUrls: ['./info-post-links.component.less']
})
export class InfoPostLinksComponent implements OnInit {

  @Input() text: string;
  @Input() image: string;
  @Input() icon: string;

  constructor() {
  }

  get giveMeIcon() {
    return `fa fa-${this.icon}`;
  }

  ngOnInit() {
    if (!this.image && !this.icon) {
      this.image = 'https://faucethub.io/assets/img/avatars/3523614_1531331166.jpg';
    }
    if (this.image && this.icon) {
      throw new Error('Либо иконка, либо картинка');
    }
  }
}
