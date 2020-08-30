import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Template1Component} from './templates/template1/template1.component';
import {Template2Component} from './templates/template2/template2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoekenComponent } from './components/boeken/boeken.component';
import { AboutComponent } from './components/about/about.component';
import { BackgroundFullComponent } from './components/background-full/background-full.component';

import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [

  { path: 'home', component: BackgroundFullComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'boeken', component: BoekenComponent },
  { path: 'about', component: AboutComponent },
  { path: 'photos', component: PhotosComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
 { path: '**', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
