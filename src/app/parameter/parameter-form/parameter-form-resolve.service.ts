import { Injectable }             from '@angular/core';
import { Router, Resolve,
  ActivatedRouteSnapshot } from '@angular/router';
  import { Observable }             from 'rxjs';
  import { ErrorHandler } from './../../shared/errors/error-handler';

import {Parameter} from '../parameter';
import {ParameterService} from "../parameter.service";

@Injectable()
export class ParameterFormResolve implements Resolve<Parameter> {
  constructor(private service: ParameterService, private router: Router, private errorHandler: ErrorHandler) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {

    if (!route.params['id']) {
      return Promise.resolve(new Parameter);
    }
    let id = route.params['id'];
    return this.service.find(id).then(parameter => {
      if (parameter) {
        return parameter;
      } else {
        this.router.navigate(['/parameter']);
        return false;
      }
    }).catch((error) => this.errorHandler.fromServer(error));
  }
}
