import { Routes } from '@angular/router';
import { DelegatesComponent } from "./delegates.component";
import {DelegatesResolve} from "./delegates.resolve";

export const DelegatesRoutes: Routes = [
  {
    path: 'delegates',
    component: DelegatesComponent,
    resolve: {
      info: DelegatesResolve
    },
  }
];
