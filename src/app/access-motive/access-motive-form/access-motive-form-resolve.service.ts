import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';

import {AccessMotive} from '../access-motive';
import {AccessMotiveService} from '../access-motive.service';

@Injectable()
export class AccessMotiveFormResolve implements Resolve<AccessMotive> {
  constructor(private service: AccessMotiveService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    if (!route.params['id']) {
      return Promise.resolve(new AccessMotive());
    }
    let id = route.params['id'];
    return this.service.find(id).then(accessMotive => {
      if (accessMotive) {
        return accessMotive;
      } else {
        this.router.navigate(['/access-motive']);
        return false;
      }
    });
  }
}
