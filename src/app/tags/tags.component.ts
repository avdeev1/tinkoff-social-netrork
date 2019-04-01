import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.less']
})
export class TagsComponent implements OnInit {

  @Output() tagEvent = new EventEmitter<MouseEvent>();

  @Input() tags: string[];

  constructor() { }

  ngOnInit() {
  }

  tagClick($event: MouseEvent) {
    event.stopPropagation();
    $event.preventDefault();
    this.tagEvent.emit($event);
  }
}
