import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Template1Component} from './templates/template1/template1.component';
import {Template2Component} from './templates/template2/template2.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
 { path: '**', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
