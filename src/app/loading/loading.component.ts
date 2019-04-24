import {Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {
  @Input() size: string;
  @ViewChild('loading') loadingElement: ElementRef<HTMLElement>;


  constructor() { }

  ngOnInit() {
    if (this.size === 'l') {
      this.loadingElement.nativeElement.classList.add('lds-eclipse__center');
    }
  }

}
