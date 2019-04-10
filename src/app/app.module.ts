import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbLayoutModule,
  NbThemeModule,
  NbButtonModule,
  NbInputModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ResolversModule } from './resolvers/resolvers.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';


import { NbThemeModule, NbMenuModule, NbLayoutModule, NbCardModule, NbSidebarModule, } from '@nebular/theme';
import { PostComponent } from './post/post.component';
import { InfoPostLinksComponent } from './info-post-links/info-post-links.component';
import { TagsComponent } from './tags/tags.component';
import { TextPostComponent } from './text-post/text-post.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    InfoPostLinksComponent,
    TagsComponent,
    TextPostComponent,
    AppComponent,
    HeaderComponent
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
    NbInputModule
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
  ],
  providers: [AuthService, ResolversModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
