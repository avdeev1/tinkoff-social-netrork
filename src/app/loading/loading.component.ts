import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {
  @Input() size: string;

  @HostBinding('class.lds-eclipse') spinnerStyle = true;

  constructor() { }

  ngOnInit() {
    if (this.size === 's') {
      this.spinnerStyle = true;
    }
  }

}
