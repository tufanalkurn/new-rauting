import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeRouteComponent } from './home-route/home-route.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeRouteComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
