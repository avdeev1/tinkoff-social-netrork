import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.less']
})
export class LoadingButtonComponent {
  @Input() accept: string;
  @Output() onFileSelect: EventEmitter<File> = new EventEmitter();

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  onNativeInputFileSelect($event) {
    this.onFileSelect.emit($event.srcElement.files);
  }

  selectFile() {
    this.nativeInputFile.nativeElement.click();
  }
}


