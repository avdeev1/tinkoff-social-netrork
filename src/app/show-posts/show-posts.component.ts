import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {IPost} from '../models';
import {finalize, takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.less']
})
export class ShowPostsComponent implements OnDestroy, OnInit {

  posts: IPost[];
  isDataLoaded: boolean = false;
  private destroy$ = new Subject<undefined>();

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.update();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.getPosts()
      .pipe(finalize(() => {
        this.isDataLoaded = true;
      }))
      .subscribe(res => {
        this.posts = res;
      });
  }

  update() {
    this.isDataLoaded = false;
    this.getPosts().pipe(finalize(() => {
      this.isDataLoaded = true;
    })).subscribe(res => {
      this.posts = res;
    });
  }

  getPosts() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      return this.postService.getPostsByTag(id);
    }
    return this.postService.getPostsForMainPage();
  }
}
