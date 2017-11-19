import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";

export const AppRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const routes: Routes = [

  ...HomeRoutes, //why not working?

  // Must be last
  ...AppRoutes
];
