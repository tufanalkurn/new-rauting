import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutinModule } from './content-page-routing.module';
import { ContentPageComponent } from './content-page.component';

@NgModule({
  imports: [
    CommonModule, ContentRoutinModule
  ],
  declarations: [ContentPageComponent]
})
export class ContentPageModule { }
