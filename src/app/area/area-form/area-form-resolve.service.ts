import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';

import {Area} from '../area';
import {AreaService} from '../area.service';

@Injectable()
export class AreaFormResolve implements Resolve<Area> {
  constructor(private service: AreaService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    if (!route.params['id']) {
      return Promise.resolve(new Area());
    }
    let id = route.params['id'];
    return this.service.find(id).then(area => {
      if (area) {
        return area;
      } else {
        this.router.navigate(['/area']);
        return false;
      }
    });
  }
}
