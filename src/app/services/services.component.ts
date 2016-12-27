import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  viewProviders: [HTTP_PROVIDERS],
})
export class ServicesComponent implements OnInit {

  constructor(http: Http) {
    http.get('people.json')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(people => this.people = people);
  }



}
