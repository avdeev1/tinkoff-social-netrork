import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.less']
})
export class LoadingButtonComponent implements OnInit {
  @Output() onFileSelect: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    document.getElementById('loading_buttton')
      .addEventListener('click', () => this.onFileSelect.emit('EMIT')
      );
  }
}
