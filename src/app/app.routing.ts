import { Routes } from '@angular/router';
import { AngularVSReactComponent } from './angularvsreact-page.component';
import { HelloComponent } from './hello.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'ng-vs-react',
    component: AngularVSReactComponent
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./modules/hero/hero.module').then((m) => m.HeroModule),  
    },

];