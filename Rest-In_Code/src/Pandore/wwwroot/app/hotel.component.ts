import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import {Http, HTTP_PROVIDERS} from 'angular2/http';


@Component({
    selector: 'my-hotel', providers: [HTTP_PROVIDERS],
    templateUrl: 'app/hotel.component.html'
})

export class HotelComponent {

    constructor(
        private _router: Router) { }

    ngOnInit() {
        
    }

    goHome() {
        this._router.navigate(['Home']);
    }
}
