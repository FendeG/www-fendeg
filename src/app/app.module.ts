import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FwModule } from '../fw/menu/fw.module';
import {Template1Component} from './templates/template1/template1.component';
import { Template2Component } from './templates/template2/template2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoekenComponent } from './components/boeken/boeken.component';
import { AboutComponent } from './components/about/about.component';
import { BackgroundFullComponent } from './components/background-full/background-full.component';

@NgModule({
  declarations: [
    AppComponent,
    Template1Component,
    Template2Component,
    DashboardComponent,
    BoekenComponent,
    AboutComponent,
    BackgroundFullComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FwModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
