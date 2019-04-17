import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowPostsComponent} from './show-posts/show-posts.component';
import {ProfileHeaderComponent} from './profile-header/profile-header.component';
import {SettingComponent} from './setting/setting.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShowPostsComponent,
  },
  {
    path: 'profile/:name',
    component: ProfileHeaderComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile/:name/setting',
    component: SettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
