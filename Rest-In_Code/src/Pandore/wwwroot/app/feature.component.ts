import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';
import {Http, HTTP_PROVIDERS} from 'angular2/http';


@Component({
    selector: 'my-feature', providers: [HTTP_PROVIDERS],
    templateUrl: 'app/feature.component.html'
})

export class FeatureComponent {
    image: string;

    constructor(
        private _router: Router) { }

    ngOnInit() {
        this.image = "acc1.jpg";
        Observable.interval(30000)
            .take(100).map((x) => x + 1)
            .subscribe((x) => {
                var y = Math.floor(Math.random() * 5) + 1
                this.image = "acc" + y + ".jpg";
            });
    }

    goHome() {
        this._router.navigate(['Home']);
    }
    gotoCo() {
        this._router.navigate(['Co']);
    }
}
