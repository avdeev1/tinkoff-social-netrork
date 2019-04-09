import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbButtonModule, NbCardModule,
  NbDialogModule,
  NbDialogService,
  NbInputModule,
  NbLayoutModule,
  NbThemeModule
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInFormComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbDialogModule.forRoot(),
    NbCardModule
  ],
  providers: [NbDialogService],
  bootstrap: [AppComponent],
  entryComponents: [
    SignInFormComponent,
    SignUpFormComponent
  ]
})
export class AppModule { }
