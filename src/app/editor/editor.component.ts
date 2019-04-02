import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  file: File;
  constructor() { }

  ngOnInit() {
  }

  isFile() { return !!this.file; }

  handlerEditor(file: File) {
    this.file = file;
  }
}
