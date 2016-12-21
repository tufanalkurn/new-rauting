import { Component, ElementRef, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html'
})
export class HomeRouteComponent implements OnInit {

	constructor(public elRef: ElementRef) {}

	ngOnInit():any {
		jQuery('.timer').countTo();
		/*jQuery(this. elRef.nativeElement).find('button').appear(function() {
		  alert('Hello Word');
		}); */
		jQuery('.lightbox').magnificPopup({
	    type: 'image'
	  });
	  jQuery(function(){
      jQuery.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
      });
    });

	}

}
