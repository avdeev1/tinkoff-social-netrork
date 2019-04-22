import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbDialogModule,
  NbDialogService,
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
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { InfoPostLinksComponent } from './info-post-links/info-post-links.component';
import { TagsComponent } from './tags/tags.component';
import { TextPostComponent } from './text-post/text-post.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HeaderComponent } from './header/header.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { SettingComponent } from './setting/setting.component';
import { UserInterceptor } from "./services/user.interceptor";
import { ProfileComponent } from './profile/profile.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { SwitcherForFormComponent } from './switcher-for-form/switcher-for-form.component';
import { CommentsService } from './services/comments.service';
import { PostsService } from "./services/posts.service";
import { UserService } from "./services/user.service";
import { FormatDatePipe } from './format-date.pipe';
import { GetDiffDateFromNowPipe } from './get-diff-date-from-now.pipe';
import { UploadingButtonComponent } from './uploading-button/uploading-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInFormComponent,
    SignUpFormComponent,
    PostComponent,
    InfoPostLinksComponent,
    TagsComponent,
    TextPostComponent,
    ProfileHeaderComponent,
    ShowPostsComponent,
    SignFormComponent,
    SwitcherForFormComponent,
    SettingComponent,
    ProfileComponent,
    HeaderComponent,
    ShowPostsComponent,
    CreateCommentComponent,
    PostDetailComponent,
    FormatDatePipe,
    GetDiffDateFromNowPipe,
    UploadingButtonComponent,
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
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbSidebarModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    NbDialogService,
    AuthService,
    ResolversModule,
    NbDialogService,
    AuthService,
    ResolversModule,
    CommentsService,
    PostsService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [
    SignInFormComponent,
    SignUpFormComponent,
    SignFormComponent
  ]
})
export class AppModule { }
