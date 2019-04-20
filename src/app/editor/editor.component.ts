import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as SimpleMDE from 'simplemde';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  file: File;
  editorForm: FormGroup;
  tags = [
    {name: 'Фантастика', id: 1},
    {name: 'Драма', id: 2},
    {name: 'Романтика', id: 3},
    {name: 'Историческое', id: 4}
  ];
  @ViewChild('textarea')
  textarea: ElementRef;
  simplemde: SimpleMDE;

  constructor(private fb: FormBuilder, private postService: PostsService) {
  }

  ngOnInit() {
    this.editorForm = this.fb.group({
      headline: ['', Validators.required],
      text: ['', Validators.required],
      tags: ['']
    });
    this.simplemde = new SimpleMDE({
      element: this.textarea.nativeElement,
      spellChecker: false
    });
  }

  get isFile() {
    return !!this.file;
  }

  onFileSelect(file: File) {
    this.file = file;
  }

  onSubmit() {
    const {headline, text, tags} = this.editorForm.value;
    console.log(tags);
    this.postService.createPost(headline, text, this.file, tags);
  }
}
