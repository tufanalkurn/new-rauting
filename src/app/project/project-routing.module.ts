import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';

export const routes: Routes =[
	{ path: '', component: ProjectComponent }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})

export class ProjectRoutingModule { }