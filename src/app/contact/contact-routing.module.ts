import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

export const contactRoutes: Routes =[
	{ path: 'contact', component: ContactComponent }
]

@NgModule({
	imports: [RouterModule.forChild(contactRoutes)],
	exports: [RouterModule],
	providers: []
})

export class ContactRoutingModule { }