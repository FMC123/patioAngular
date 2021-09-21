import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';
import {Mock} from '../mock';
import {MockService} from '../mock.service';


@Injectable()
export class MockDetailsResolve implements Resolve<Mock> {
  constructor(private service: MockService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    console.log(route);
    if (!route.params['id']) {
      this.router.navigate(['/mock']);
      return false;
    }
    let id = route.params['id'];
    return this.service.findPlaca(id).then(mock => {
      if (mock) {
        return mock;
      } else {
        this.router.navigate(['/mock']);
        return false;
      }
    });
  }
}
