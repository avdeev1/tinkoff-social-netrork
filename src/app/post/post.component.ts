import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {IPost} from '../models';
import {AuthService} from '../services/auth.service';
import {LikeService} from '../services/like.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  @Input() extendable = true;

  quantityLike = 0;
  isLike = false;

  constructor(private router: Router, private likeService: LikeService, private authService: AuthService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.quantityLike = this.post.likes.length;
    const userName = this.authService.getUserName();
    if (this.post.likes.find(el => el.login === userName)) {
      this.isLike = true;
    }
  }

  likePost(event) {
    event.stopPropagation();
    if (this.authService.isAuth.value) {
      if (this.isLike) {
        this.likeService.deleteLikePost(this.post.id).pipe(
          finalize(() => {
            this.isLike = false;
            this.quantityLike--;
            this.cd.markForCheck();
          })
        ).subscribe();
      } else {
        this.likeService.likePost(this.post.id)
          .pipe(
            finalize(() => {
              this.isLike = true;
              this.quantityLike++;
              this.cd.markForCheck();
            }))
          .subscribe();
      }
    } else {
      this.authService.openSignInDialog();
    }
  }

  goToPostPage() {
    this.router.navigateByUrl(`post/${this.post.id}`);
  }

  findTag() {
    event.stopPropagation();
  }
}
