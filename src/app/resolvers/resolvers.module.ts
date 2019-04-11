import { NgModule } from '@angular/core';
import { AuthResolver } from './auth.resolver';

@NgModule({
  providers: [
    AuthResolver
  ]
})
export class ResolversModule { }
