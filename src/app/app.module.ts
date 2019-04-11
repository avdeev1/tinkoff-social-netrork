import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbLayoutModule,
  NbThemeModule,
  NbButtonModule,
  NbInputModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { RouterModule } from '@angular/router';
import { ResolversModule } from './resolvers/resolvers.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { InfoPostLinksComponent } from './info-post-links/info-post-links.component';
import { TagsComponent } from './tags/tags.component';
import { TextPostComponent } from './text-post/text-post.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    LoadingButtonComponent,
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
    NbInputModule,
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbSelectModule
  ],
  providers: [AuthService, ResolversModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
