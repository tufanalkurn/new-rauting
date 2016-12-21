import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  template: `
    <ngb-carousel class="home-slider">
      <template ngbSlide>
        <img src="assets/images/slider-bg5.jpg" class="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms" alt="Random first slide">
        <div class="carousel-caption">
          <h3 class="wow zoomInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">10 seconds between slides...</h3>
          <p class="wow zoomInRight" data-wow-duration="1000ms" data-wow-delay="700ms">This carousel uses customized default values.</p>
        </div>
      </template>
      <template ngbSlide>
        <img src="assets/images/slider-bg5.jpg" class="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms" alt="Random second slide">
        <div class="carousel-caption">
          <h3 class="wow zoomInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">No keyboard...</h3>
          <p class="wow zoomInRight" data-wow-duration="1000ms" data-wow-delay="700ms">This carousel uses customized default values.</p>
        </div>
      </template>
      <template ngbSlide>
        <img src="assets/images/slider-bg5.jpg" class="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms" alt="Random third slide">
        <div class="carousel-caption">
          <h3 class="wow zoomInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">And no wrap after last slide.</h3>
          <p class="wow zoomInRight" data-wow-duration="1000ms" data-wow-delay="700ms">This carousel uses customized default values.</p>
        </div>
      </template>
    </ngb-carousel>
  `,
  providers: [NgbCarouselConfig]
})
export class CarouselComponent {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

}
 