import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import {ShowPostsComponent} from "./show-posts/show-posts.component";
import {ProfileHeaderComponent} from "./profile-header/profile-header.component";
import {EditorComponent} from './editor/editor.component';

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
    path: 'editor',
    component: EditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
