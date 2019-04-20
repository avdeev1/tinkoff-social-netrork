import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-uploading-button',
  templateUrl: './uploading-button.component.html',
  styleUrls: ['./uploading-button.component.less']
})
export class UploadingButtonComponent {
  @Input() accept: string;
  @Output() onFileSelect: EventEmitter<File> = new EventEmitter();

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  onNativeInputFileSelect($event) {
    this.onFileSelect.emit($event.target.files[0]);
  }

  selectFile() {
    this.nativeInputFile.nativeElement.click();
  }
}


