import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogListComponent } from './log/log-list.component';
import { LogNewComponent } from './log/log-new.component';
import { LogShowComponent } from './log/log-show.component';
import { LogService } from './log/log.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    LogNewComponent,
    LogShowComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
