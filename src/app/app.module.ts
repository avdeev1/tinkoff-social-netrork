import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbDialogService,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateCommentComponent} from './create-comment/create-comment.component';
import {EditorComponent} from './editor/editor.component';
import {FormatDatePipe} from './format-date.pipe';
import {GetDiffDateFromNowPipe} from './get-diff-date-from-now.pipe';
import {HeaderComponent} from './header/header.component';
import {InfoPostLinksComponent} from './info-post-links/info-post-links.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostComponent} from './post/post.component';
import {ProfileHeaderComponent} from './profile-header/profile-header.component';
import {ProfileComponent} from './profile/profile.component';
import {ResolversModule} from './resolvers/resolvers.module';
import {AuthService} from './services/auth.service';
import {CommentsService} from './services/comments.service';
import {PostsService} from './services/posts.service';
import {UserInterceptor} from './services/user.interceptor';
import {UserService} from './services/user.service';
import {SettingComponent} from './setting/setting.component';
import {ShowPostsComponent} from './show-posts/show-posts.component';
import {SignFormComponent} from './sign-form/sign-form.component';
import {SignInFormComponent} from './sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import {SwitcherForFormComponent} from './switcher-for-form/switcher-for-form.component';
import {TagsComponent} from './tags/tags.component';
import {TextPostComponent} from './text-post/text-post.component';
import {UploadingButtonComponent} from './uploading-button/uploading-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInFormComponent,
    SignUpFormComponent,
    EditorComponent,
    UploadingButtonComponent,
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
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbSelectModule,
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
export class AppModule {
}
