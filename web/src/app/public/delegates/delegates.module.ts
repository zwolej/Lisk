import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelegatesComponent } from './delegates.component';
import { DelegatesResolve } from './delegates.resolve';
import { DelegatesService } from '../../services/DelegatesService';

@NgModule({
  declarations: [
    DelegatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [
    DelegatesService,
    DelegatesResolve
  ]
})
export class DelegatesModule {
}
