import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostWCommentsComponent} from './post-w-comments/post-w-comments.component';

const routes: Routes = [
  { path: 'post', component: PostWCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
