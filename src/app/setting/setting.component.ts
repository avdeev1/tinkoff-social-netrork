import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {PostsService} from '../services/posts.service';
import {IUser} from '../models';
import {FormBuilder, FormGroup} from '@angular/forms';
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
  default = {
    avatar: null,
    desc: null
  }
  constructor(
    private postService: PostsService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
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
          this.default.desc = res.description;
        }
        if (res.avatar) {
          this.default.avatar = res.avatar;
        }
      });
  }
  createForm() {
    this.form = this.fb.group({
      desc: this.default.desc,
      img:  this.default.avatar
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
    const {desc, img } = this.form.value;
    this.userService.editProfile(img, desc).subscribe(() => {
      this.loading = false;
      this.router.navigateByUrl('/profile');
    });

  }


  }
