import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowscrollyService } from './services/windowscrolly.service';
import { Template1Component } from './templates/template1/template1.component';
import { TestComponent } from './templates/test/test.component';
import { ScreenService } from './services/screen.service';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    Template1Component,
    TestComponent,
    ScreenLarge,
    ScreenBelowLarge,
    FrameworkBodyComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    TestComponent,
    FrameworkBodyComponent,
    ScreenLarge,
    ScreenBelowLarge

  ],
  providers: [
    //   WindowscrollyService
    ScreenService
  ]
})
export class FwModule { }
