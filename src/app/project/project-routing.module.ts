import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';

export const projectRoutes: Routes =[
	{ path: 'project', component: ProjectComponent }
]

@NgModule({
	imports: [RouterModule.forChild(projectRoutes)],
	exports: [RouterModule],
	providers: []
})

export class ProjectRoutingModule { }