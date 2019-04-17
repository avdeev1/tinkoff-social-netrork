import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbDialogService,
  NbInputModule,
  NbLayoutModule,
  NbThemeModule,
  NbMenuModule,
  NbSidebarModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ResolversModule } from './resolvers/resolvers.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { InfoPostLinksComponent } from './info-post-links/info-post-links.component';
import { TagsComponent } from './tags/tags.component';
import { TextPostComponent } from './text-post/text-post.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { HeaderComponent } from './header/header.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { SettingComponent } from './setting/setting.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { SwitcherForFormComponent } from './switcher-for-form/switcher-for-form.component';

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
    SettingComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    ResolversModule,
    HttpClientModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbSidebarModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    SignInFormComponent,
    SignUpFormComponent,
    SignFormComponent
  ]
})
export class AppModule { }
