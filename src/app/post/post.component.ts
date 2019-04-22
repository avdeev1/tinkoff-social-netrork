import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IPost, IUser} from '../models';
import {Router} from '@angular/router';
import {LikeService} from '../services/like.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  @Input() extendable = true;
  quantityLike = 0;
  isLike = false;

  constructor(private router: Router, private likeService: LikeService, private authService: AuthService) {}

  ngOnInit() {
    this.quantityLike = this.post.likes.length;
    const userName = this.authService.getUserName();
    if (this.post.likes.find(el => el.login === userName)) {
      this.isLike = true;
    }
  }

  likePost(event) {
    event.stopPropagation();
    if( this.isLike) {
      this.likeService.deletePost(this.post.id).subscribe();
      this.isLike = false;
      this.quantityLike--;
    } else {
      this.likeService.likePost(this.post.id).subscribe();
      this.isLike = true;
      this.quantityLike++;
    }
  }
  goToPostPage() {
    this.router.navigateByUrl(`post/${this.post.id}`);
  }

  findTag() {
    event.stopPropagation();
  }
}
