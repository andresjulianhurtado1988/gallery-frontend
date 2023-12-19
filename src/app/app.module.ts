import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { PagesModule } from './components/pages/pages.module';
import { HeaderComponent } from './components/navegation/header/header.component';
import { SideNavComponent } from './components/navegation/side-nav/side-nav.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SideNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
