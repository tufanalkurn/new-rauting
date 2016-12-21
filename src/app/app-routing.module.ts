import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeRouteComponent } from './home-route/home-route.component';
import { ContactComponent } from './home-route/contact.component';
import { BundledModule } from './bundled/bundled.module';
import { ProjectModule } from './project/project.module';
import { ContentPageModule } from './content-page/content-page.module';
import { AboutModule } from './about/about.module';

export function loadBundledModule() { return BundledModule; }
export function loadProjectModule() { return ProjectModule; }
export function loadContentPageModule() { return ContentPageModule; }
export function loadAboutModule() { return AboutModule; }

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeRouteComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'services', loadChildren: loadBundledModule
  },
  { path: 'project', loadChildren: loadProjectModule },
  {
    path: 'about', loadChildren: loadAboutModule
  },
  {
    path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'
  },
  {path: 'content', loadChildren: loadContentPageModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
