import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';

import {CheckpointStatus} from '../checkpoint-status';
import {CheckpointStatusService} from '../checkpoint-status.service';

@Injectable()
export class CheckpointStatusFormResolve implements Resolve<CheckpointStatus> {
  constructor(private service: CheckpointStatusService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    if (!route.params['id']) {
      return Promise.resolve(new CheckpointStatus());
    }
    let id = route.params['id'];
    return this.service.find(id).then(checkpointStatus => {
      if (checkpointStatus) {
        return checkpointStatus;
      } else {
        this.router.navigate(['/checkpoint-status']);
        return false;
      }
    });
  }
}
