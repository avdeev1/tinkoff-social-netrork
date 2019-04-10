import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ResolversModule } from './resolvers/resolvers.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';


import { NbThemeModule, NbMenuModule, NbLayoutModule, NbCardModule, NbSidebarModule, } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    ResolversModule,
    HttpClientModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
  ],
  providers: [AuthService, ResolversModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
