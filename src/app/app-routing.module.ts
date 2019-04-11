import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { AuthGuard } from './guards/auth.guard';
import {PostWCommentsComponent} from './post-w-comments/post-w-comments.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
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
