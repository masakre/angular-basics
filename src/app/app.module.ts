import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { HelloComponent } from './hello.component';


@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
