import { ContactComponent } from './contact.component';
import { Routes } from '@angular/router';
import { ContactResolve } from './contact.resolve';

export const ContactRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    resolve: {
      info: ContactResolve
    },
  }
];
