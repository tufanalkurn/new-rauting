import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { CarouselComponent } from './home-route/carousel.component';
import { ContactComponent } from './home-route/contact.component';
import { TestimonialComponent } from './home-route/testimonial.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    CarouselComponent,
    ContactComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
