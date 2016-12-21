import { Component, ElementRef, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(public elRef: ElementRef) {}

	ngOnInit():any {
    jQuery('.back-to-top').click(function(){ 
        jQuery("html, body").animate({ scrollTop: 0 }, 1600); 
        return false; 
    }); 

	}

}
 