import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbLayoutModule,
  NbThemeModule,
  NbButtonModule,
  NbInputModule,
  NbMenuModule,
  NbSidebarModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ResolversModule } from './resolvers/resolvers.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { InfoPostLinksComponent } from './info-post-links/info-post-links.component';
import { TagsComponent } from './tags/tags.component';
import { TextPostComponent } from './text-post/text-post.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { CommentComponent } from './comment/comment.component';
import { PostWCommentsComponent } from './post-w-comments/post-w-comments.component';
import { HeaderComponent } from './header/header.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import {CommentsService} from './comments.service';
import {PostsService} from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    InfoPostLinksComponent,
    TagsComponent,
    TextPostComponent,
    ProfileHeaderComponent,
    HeaderComponent,
    ShowPostsComponent,
    CommentComponent,
    PostWCommentsComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    ResolversModule,
    HttpClientModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbSidebarModule.forRoot(),
  ],
  providers: [AuthService, ResolversModule, CommentsService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
