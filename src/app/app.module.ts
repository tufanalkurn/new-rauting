import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { ProjectModule } from './project/project.module';
import { HeroesModule } from './heroes/heroes.module'; 
import { ContentPageModule } from './content-page/content-page.module';
import { ServicesModule } from './services/services.module';
import { ContactModule } from './contact/contact.module';

import { AppComponent } from './app.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { CarouselComponent } from './home-route/carousel.component';
import { TestimonialComponent } from './home-route/testimonial.component';


@NgModule({
  declarations: [
    AppComponent, HomeRouteComponent, CarouselComponent, TestimonialComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, NgbModule.forRoot(), AppRoutingModule, ProjectModule, AboutModule, HeroesModule, ContentPageModule, ServicesModule, ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
