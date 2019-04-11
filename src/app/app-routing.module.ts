import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import {ShowPostsComponent} from "./show-posts/show-posts.component";
import {ProfileHeaderComponent} from "./profile-header/profile-header.component";
import {PostWCommentsComponent} from './post-w-comments/post-w-comments.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShowPostsComponent,
  },
  {
    path: 'profile/1',
    component: ProfileHeaderComponent
  },
  {
    path: 'post',
    component: PostWCommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
