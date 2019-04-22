import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as SimpleMDE from 'simplemde';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  file: File;
  editorForm: FormGroup;
  tags = [
    { name: 'Фантастика', id: 1 },
    { name: 'Драма', id: 2 },
    { name: 'Романтика', id: 3 },
    { name: 'Историческое', id: 4 }
  ];
  @ViewChild('textarea')
  textarea: ElementRef;
  simplemde: SimpleMDE;

  constructor(private fb: FormBuilder,
              private postService: PostsService,
              private changeDetectorRef: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit() {
    this.editorForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      tags: [''],
      url: ['']
    });
    this.simplemde = new SimpleMDE({
      element: this.textarea.nativeElement,
      spellChecker: false,
      forceSync: true
    });

    // subscribe to simpleMDE data changes
    this.simplemde.codemirror.on('change', () => {
      this.editorForm.patchValue({ text: this.simplemde.value() });
      this.editorForm.updateValueAndValidity();
    });
  }

  onFileSelect(file: File) {
    this.postService.uploadImage(file).subscribe(url => {
      this.editorForm.patchValue({ url });
      this.file = file;
      this.changeDetectorRef.markForCheck();
    });
  }

  onSubmit() {
    let { title, text, tags, url } = this.editorForm.value;
    if (tags === '') {
      tags = [];
    }
    this.postService.createPost({title, text, image: url, tags}).subscribe(() => this.router.navigateByUrl('/'));
  }
}
