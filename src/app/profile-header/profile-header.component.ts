import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {PostsService} from '../services/posts.service';
import {IPost, IUser} from '../models';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.less']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() posts: IPost[];
  @Input() user: IUser;
  @Input() comments: number;

  constructor() {}

  ngOnInit() {}
}
