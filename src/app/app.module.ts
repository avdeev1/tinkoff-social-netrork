import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NbCardModule, NbLayoutModule, NbThemeModule} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { InfoPostComponent } from './info-post/info-post.component';
import { InfoPostLinksComponent } from './info-post-links/info-post-links.component';
import { TagsComponent } from './tags/tags.component';
import { TextPostComponent } from './text-post/text-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    InfoPostComponent,
    InfoPostLinksComponent,
    TagsComponent,
    TextPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
