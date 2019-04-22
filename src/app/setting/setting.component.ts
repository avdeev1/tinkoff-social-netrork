import {Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild} from '@angular/core';
import {UserService} from '../services/user.service';
import {PostsService} from '../services/posts.service';
import {IUser} from '../models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {Router} from "@angular/router";
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit {

  form: FormGroup;
  loading = false;
  user: IUser;
  fileName: string;
  isLoad = false;
  avatar = 'https://faucethub.io/assets/img/avatars/3523614_1531331166.jpg';
  av = null;
  desc = null;
  editorForm: FormGroup;
  constructor(
    private postService: PostsService,
    private userService: UserService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
  // private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.userService.getProfile()
      .pipe(finalize(() => {
        this.isLoad = true;
      }))
      .subscribe(res => {
        this.user = res;
        if (res.description) {
          this.desc = res.description;
        }
        if (res.avatar) {
          this.av = res.avatar;
        }
      });
  }
  createForm() {
    this.form = this.fb.group({
      desc: this.desc,
      img: this.av
    });
  }

  onFileSelect(file) {
    this.fileName = file.name;
    this.userService.uploadImage(file).subscribe(url => {
      this.form.get('img').setValue(url);
    });
  }

  onSubmit() {
    this.loading = true;
    const {desc, url } = this.form.value;
    this.userService.editProfile(url, desc).subscribe(() => {
      this.loading = false;
    });

  }


  }
