import { Routes } from "@angular/router";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { HeroPageComponent } from "./pages/heroes-page.component";

const HeroRoutes: Routes = [
  { path: '', component: HeroPageComponent },
  { path: ':id', component: HeroDetailComponent },
];

export default HeroRoutes;
