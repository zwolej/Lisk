import { Routes } from '@angular/router';
import { InternalErrorComponent } from './500/500.error.component';
import { NotFoundComponent } from './404/404.error.component';

export const ErrorRoutes: Routes = [
  {
    path: 'error',
    component: InternalErrorComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
