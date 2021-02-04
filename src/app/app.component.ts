import { Component } from '@angular/core';
import {routerTransition} from './animations';

@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'ng-blog';
  getOutlet(o) {
    return o.activatedRouteData.routeState;
  }
}
