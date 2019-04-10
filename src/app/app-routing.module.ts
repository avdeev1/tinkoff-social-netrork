import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
