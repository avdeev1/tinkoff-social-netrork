import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from './editor/editor.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingComponent} from './setting/setting.component';

import {ShowPostsComponent} from './show-posts/show-posts.component';

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
    component: EditorComponent
  },
  {
    path: 'search/:searchWord',
    component: ShowPostsComponent,
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
