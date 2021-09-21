import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {Company} from '../company';
import {CompanyService} from "../company.service";

@Injectable()
export class CompanyFormResolve implements Resolve<Company> {
  constructor(private service: CompanyService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    if (!route.params['id']) {
      return Promise.resolve(new Company());
    }

    let id = route.params['id'];
    return this.service.find(id).then(company => {
      if (company) {
        return company;
      } else {
        this.router.navigate(['/company']);
        return false;
      }
    });
  }
}
