import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowPostsComponent} from "./show-posts/show-posts.component";
import {SettingComponent} from './setting/setting.component';
import {ProfileComponent} from "./profile/profile.component";
import {PostDetailComponent} from './post-detail/post-detail.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShowPostsComponent,
    data: {}
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      profile: true
    }
  },
  {
    path: 'profile/draft',
    component: ShowPostsComponent,
  },
  {
    path: 'profile/setting',
    component: SettingComponent,
  },
  {
    path: 'user/:id',
    component: ProfileComponent,
  },
  {
    path: 'favourites',
    component: ShowPostsComponent,
    data: {}
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
  },
  {
    path: 'create',
    component: ShowPostsComponent,
  },
  {
    path: 'search',
    component: ShowPostsComponent,
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
