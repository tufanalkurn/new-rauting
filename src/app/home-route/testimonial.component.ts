import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testimonial',
  template: `
    <ngb-carousel class="home-clients">
      <template ngbSlide>
        <div class="carousel-caption">
          <h3>Masta guy Nzanza.</h3>
          <p>Ratz Technology, you have done a very good job for me and I am very happy with it. I will recommend you to the people I know and will definitely ask for you again in the future. Thank you very much for your hard work and everything you have done for me Ratz technology.</p>
          <p class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-o"></i>
          </p>
        </div>
      </template>
      <template ngbSlide>
        <div class="carousel-caption">
          <h3>Masta guy Nzanza.</h3>
          <p>Ratz Technology, you have done a very good job for me and I am very happy with it. I will recommend you to the people I know and will definitely ask for you again in the future. Thank you very much for your hard work and everything you have done for me Ratz technology.</p>
          <p class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-o"></i>
          </p>
        </div>
      </template>
      <template ngbSlide>
        <div class="carousel-caption">
          <h3>Masta guy Nzanza.</h3>
          <p>Ratz Technology, you have done a very good job for me and I am very happy with it. I will recommend you to the people I know and will definitely ask for you again in the future. Thank you very much for your hard work and everything you have done for me Ratz technology.</p>
          <p class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-o"></i>
          </p>
        </div>
      </template>
    </ngb-carousel>
  `,
  styles: []
})
export class TestimonialComponent {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component  tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false; 
  }

}
