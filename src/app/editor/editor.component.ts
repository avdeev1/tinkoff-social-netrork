import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../posts.service';
import * as SimpleMDE from 'simplemde';

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

  isFile() {
    return !!this.file;
  }

  handlerEditor(file: File) {
    this.file = file;
  }

  makeStringFromTags(): string[] {
    const tagsM: string[] = [];
    for (const tag of this.tags) {
      tagsM.push(tag.name);
    }
    return tagsM;
  }

  onSubmit() {
    const {headline, text} = this.editorForm.value;
    const tags = this.makeStringFromTags();
    this.postService.createPost(headline, text, this.file, tags);
    console.log(text);
  }
}
