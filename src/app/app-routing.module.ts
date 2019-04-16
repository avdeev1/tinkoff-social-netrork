import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowPostsComponent} from "./show-posts/show-posts.component";
import {ProfileHeaderComponent} from "./profile-header/profile-header.component";
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShowPostsComponent,
  },
  {
    path: 'profile',
    component: ProfileHeaderComponent
  },
  {
    path: 'profile/:id',
    component: ProfileHeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
