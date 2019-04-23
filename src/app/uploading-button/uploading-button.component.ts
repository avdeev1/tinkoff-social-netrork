import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-uploading-button',
  templateUrl: './uploading-button.component.html',
  styleUrls: ['./uploading-button.component.less']
})
export class UploadingButtonComponent {
  @Input() accept: string;
  @Output() fileSelect: EventEmitter<File> = new EventEmitter();

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  onNativeInputFileSelect($event) {
    this.fileSelect.emit($event.target.files[0]);
    $event.target.value = '';
  }

  selectFile() {
    this.nativeInputFile.nativeElement.click();
  }
}


