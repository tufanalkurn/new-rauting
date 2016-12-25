import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';

export const servicesRouter: Routes =[
	{ path: 'services', component: ServicesComponent }
]

@NgModule({
	imports: [RouterModule.forChild(servicesRouter)],
	exports: [RouterModule],
	providers: []
})

export class ServicesRoutingModule { }