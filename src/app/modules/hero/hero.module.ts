import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { RouterModule } from '@angular/router';
import HeroRoutes from './hero.routing';
import { CommonModule } from '@angular/common';
import { HeroService } from './services/hero.service';
import { HeroPageComponent } from './pages/heroes-page.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule.forChild(HeroRoutes) // forChild used for lazy loaded routes
],
  declarations: [HeroPageComponent, HeroDetailComponent, HeroListComponent],
  exports: [HeroDetailComponent],
  providers: [
    HeroService
  ]
})
export class HeroModule {}
