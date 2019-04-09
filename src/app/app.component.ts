import {Component} from '@angular/core';
import { PostsService } from './posts.service';
import {IPost} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  posts: IPost[] = new PostsService().posts;

}
