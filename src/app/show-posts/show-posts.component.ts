import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {IPost} from '../models';
import {ForShowPostComponent} from "../models/for-show-post-component.enum";
import {finalize, takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {of} from "rxjs/internal/observable/of";

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.less']
})
export class ShowPostsComponent implements OnDestroy, OnInit {

  posts: IPost[];
  isDataLoaded: boolean;
  private destroy$ = new Subject<undefined>();

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute) {
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
        const query = this.activatedRoute.snapshot.queryParams.q;
        return this.postService.getPostsForSearch(query);

      default:
        return of([]);
    }
  }
}
