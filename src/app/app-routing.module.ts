import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppComponent} from './app.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: AppLoginComponent,
    canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
