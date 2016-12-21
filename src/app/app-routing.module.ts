import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeRouteComponent} from './home-route/home-route.component';
import { ContactComponent } from './home-route/contact.component';
import {BundledModule} from './bundled/bundled.module';
import {AboutModule} from './about/about.module';

export function loadBundledModule() { return BundledModule; }
export function loadAboutModule() { return AboutModule; }

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeRouteComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'bundled', loadChildren: loadBundledModule
  },
  {
    path: 'about', loadChildren: loadAboutModule
  },
  {
    path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
