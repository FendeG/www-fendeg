import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowscrollyService } from './services/windowscrolly.service';
import { Template1Component } from './templates/template1/template1.component';
import { TestComponent } from './templates/test/test.component';
import { ScreenService } from './services/screen.service';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { MenuBarComponent } from './menu/menu-bar/menu-bar.component';
import { MenuStandaardComponent } from './menu/menus/menu-standaard/menu-standaard.component';
import { HamburgerButtonComponent } from './components/hamburger-button/hamburger-button.component';
import { MobileStandaardComponent } from './menu/menus/mobile-standaard/mobile-standaard.component';
import { Hamburger1ButtonComponent } from './components/hamburger1-button/hamburger1-button.component';
import { IconsBase64Service } from './services/icons-base64.service';
import { LoginComponent } from './login/login/login.component';
import { LinkedinIconComponent } from './components/linkedin-icon/linkedin-icon.component';
import { PanelComponent } from './panels/panel/panel.component';



@NgModule({
  declarations: [
    Template1Component,
    TestComponent,
    ScreenLarge,
    ScreenBelowLarge,
    FrameworkBodyComponent,
    MenuBarComponent,
    MenuStandaardComponent,
    HamburgerButtonComponent,
    MobileStandaardComponent,
    Hamburger1ButtonComponent,
    LoginComponent,
    LinkedinIconComponent,
    PanelComponent

 
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    TestComponent,
    FrameworkBodyComponent,
    ScreenLarge,
    ScreenBelowLarge,
    MenuStandaardComponent,
    HamburgerButtonComponent,
    MobileStandaardComponent,
    Hamburger1ButtonComponent,
    LoginComponent,
    LinkedinIconComponent,
    PanelComponent


  ],
  providers: [
    //   WindowscrollyService
    ScreenService,
    IconsBase64Service
  ]
})
export class FwModule { }
