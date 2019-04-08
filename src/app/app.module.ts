import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule, NbInputModule,
  NbLayoutModule,
  NbThemeModule,
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { InfoPostLinksComponent } from './info-post-links/info-post-links.component';
import { TagsComponent } from './tags/tags.component';
import { TextPostComponent } from './text-post/text-post.component';
import { CommentComponent } from './comment/comment.component';
import { PostWCommentsComponent } from './post-w-comments/post-w-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    InfoPostLinksComponent,
    TagsComponent,
    TextPostComponent,
    CommentComponent,
    PostWCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    NbInputModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
