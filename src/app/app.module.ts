import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { FormPageComponent } from './form-page/form-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LibElementComponent } from './lib-element/lib-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    FormPageComponent,
    SidebarComponent,
    LibElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
