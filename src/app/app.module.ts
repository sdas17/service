import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Demo4Component } from './demo4/demo4.component';
import { YService } from './y.service';
import { HttpClientModule } from '@angular/common/http';
import { Demo5Component } from './demo5/demo5.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo4Component,
    Demo5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    RouterModule,
    HttpClientModule,

    BrowserAnimationsModule,


  ],
  providers: [YService],
  bootstrap: [AppComponent]
})
export class AppModule { }
