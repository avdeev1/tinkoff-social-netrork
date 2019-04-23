import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {IPost} from '../models';
import {ForShowPostComponent} from "../models/for-show-post-component.enum";
import {finalize, takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {of} from "rxjs/internal/observable/of";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.less']
})
export class ShowPostsComponent implements OnDestroy, OnInit {

  posts: IPost[];
  isDataLoaded: boolean;
  private destroy$ = new Subject<undefined>();
  isSubscribersPosts = true;
  isMainPage: boolean = this.activatedRoute.snapshot.data.content === ForShowPostComponent.MAIN;

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute, private authService: AuthService) {
  }

  get isAuth() {
    return this.authService.isAuth.value;
  }

  get isSubscribers() {
    return this.isSubscribersPosts;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.activatedRoute.url.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.update();
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

  getPosts(): Observable<IPost[]> {
    const content: ForShowPostComponent = this.activatedRoute.snapshot.data.content;

    switch (content) {
      case ForShowPostComponent.MAIN:
        return this.postService.getPostsForMainPage();

      case ForShowPostComponent.FAVOURITES:
        return this.postService.getPostsForFavPage();

      case ForShowPostComponent.DRAFTS:
        return of([]);

      case ForShowPostComponent.TAG:
        const id = this.activatedRoute.snapshot.paramMap.get('id');

        return this.postService.getPostsByTag(id);

      case ForShowPostComponent.SEARCH:
        return of([]);

      default:
        return of([]);
    }
  }

  showPopularPosts() {
    this.postService.getPopularPostForMainPage()
      .pipe(finalize(() => {
        this.isSubscribersPosts = !this.isSubscribersPosts;
      }))
      .subscribe(res => {
        this.posts = res;
      });
  }

  showSubscribersPosts() {
    return this.postService.getPostsForMainPage()
      .pipe(finalize(() => {
        this.isSubscribersPosts = !this.isSubscribersPosts;
      }))
      .subscribe(res => {
        this.posts = res;
      });
  }
}
