import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./modules/hero/hero.module').then((m) => m.HeroModule),
  },
];


@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
