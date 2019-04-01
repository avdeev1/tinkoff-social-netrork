import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbSelectModule, NbThemeModule} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    LoadingButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
