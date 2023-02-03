import { Routes } from '@angular/router';
import { HelloComponent } from './hello.component';

export const appRoutes: Routes = [
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