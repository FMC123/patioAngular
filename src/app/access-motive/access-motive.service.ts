import { AccessMotive } from './access-motive';
import { Endpoints } from '../endpoints';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import { AuthService } from '../auth/auth.service';
import { Page } from '../shared/page/page';
import {toPromise} from 'rxjs/operator/toPromise';

@Injectable()
export class AccessMotiveService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,
              private auth: AuthService) {}

  list(): Promise<Array<AccessMotive>> {
    return this.http.get(Endpoints.accessMotiveURL)
                        .toPromise()
                        .then(response => {
                          return AccessMotive.fromListData(response.json());
                        });
  }


  listPaged(filter: any, page: Page<AccessMotive>) {
    let params = new URLSearchParams();
    params.appendAll(page.toURLSearchParams());
    params.append('filter', filter ? filter : '');
    return this.http.get(`${Endpoints.accessMotiveURL}/paged`,
                        {
                          search: params,
                        })
                        .toPromise()
                        .then(response => {
                          page.setResultFromServer(response.json());
                          page.data = AccessMotive.fromListData(page.data);
                          return page;
                        });
  }

  find(id: number | string) {
    let url = `${Endpoints.accessMotiveURL}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => {
                 let accessMotive = AccessMotive.fromData(response.json());

                 return accessMotive;
               });
  }

  save(accessMotive: AccessMotive): Promise<AccessMotive> {
    if (accessMotive.id) {
      return this.update(accessMotive);
    }else {
      return this.create(accessMotive);
    }
  }

  delete(id: number | string): Promise<void> {
    let url = `${Endpoints.accessMotiveURL}/${id}`;
    return this.http.delete(url,
                            {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(() => null);
  }

  private create(accessMotive: AccessMotive): Promise<AccessMotive> {
    const url = `${Endpoints.accessMotiveURL}`
    return this.http
      .post(url, JSON.stringify(accessMotive),
        {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(res => res.json());
  }

  private update(accessMotive: AccessMotive): Promise<AccessMotive> {
    const url = `${Endpoints.accessMotiveURL}/${accessMotive.id}`;
    return this.http
      .put(url, JSON.stringify(accessMotive), {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(res => res.json());
  }
}
