import { CheckpointService } from '../checkpoint.service';
import { Checkpoint } from '../checkpoint';
import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';
import { ErrorHandler } from 'src/app/shared/errors/error-handler';


@Injectable()
export class CheckpointDetailsResolve implements Resolve<Checkpoint> {
  constructor(private service: CheckpointService, private router: Router, private errorHandler: ErrorHandler) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    if (!route.params['id']) {
      this.router.navigate(['/checkpoint']);
      return false;
    }
    let id = route.params['id'];
    return this.service.find(id).then(serviceGroup => {
      if (serviceGroup) {
        return serviceGroup;
      } else {
        this.router.navigate(['/checkpoint']);
        return false;
      }
    }).catch((error) => this.errorHandler.fromServer(error));
  }
}
