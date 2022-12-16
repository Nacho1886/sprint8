import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { StarshipsModule } from './starships/starships.module';
import { ErrorPageModule } from './error-page/error-page.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ErrorPageModule,
    HomeModule,
    StarshipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
