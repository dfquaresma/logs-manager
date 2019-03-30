import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogListComponent } from './log/log-list.component';
import { LogShowComponent } from './log/log-show.component';
import { LogNewComponent } from './log/log-new.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home',            component: HomeComponent },
  { path: 'logs',           component: LogListComponent },
  { path: 'log/new',        component: LogNewComponent },
  { path: 'logs/:id',       component: LogShowComponent }
] 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
