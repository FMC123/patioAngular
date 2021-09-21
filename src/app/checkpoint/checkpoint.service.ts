import { Checkpoint } from './checkpoint';
import { Page } from '../shared/page/page';

import { AuthService } from '../auth/auth.service';
import { Endpoints } from '../endpoints';
import { Injectable } from '@angular/core';
import { Headers, Http , URLSearchParams} from '@angular/http';
import * as assert from 'assert';

@Injectable()
export class CheckpointService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,
              private auth: AuthService) {}

  find(id: number | string) {
    let url = `${Endpoints.checkpointURL}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => Checkpoint.fromData(response.json()));
  }

    list() {
        return this.http.get(`${Endpoints.checkpointURL}`)
                            .toPromise()
                            .then(response => {
                            return Checkpoint.fromListData(response.json());
                            });
    }

    listPaged(filter: any, page: Page<Checkpoint>) {
        let params = new URLSearchParams();
        params.appendAll(page.toURLSearchParams());
        params.append('filter', filter ? filter : '');
        return this.http.get(`${Endpoints.checkpointURL}/paged`,
                        {
                          search: params,
                        })
                        .toPromise()
                        .then(response => {
                          page.setResultFromServer(response.json());
                          page.data = Checkpoint.fromListData(page.data);
                          return page;
                        });
    }

    save(serviceGroup: Checkpoint): Promise<Checkpoint> {
        if (serviceGroup.id) {
            return this.update(serviceGroup);
        }else {
            return this.create(serviceGroup);
        }
  }

  delete(id: number | string): Promise<void> {
    let url = `${Endpoints.checkpointURL}/${id}`;
    return this.http.delete(url,
                            {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(() => null);
  }

  private create(serviceGroup: Checkpoint): Promise<Checkpoint> {
    return this.http
      .post(Endpoints.checkpointURL, 
          JSON.stringify(serviceGroup),
          {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(res => res.json().data);
  }

  private update(serviceGroup: Checkpoint): Promise<Checkpoint> {
      const url = `${Endpoints.checkpointURL}/${serviceGroup.id}`;
      return this.http
        .put(url, JSON.stringify(serviceGroup),
            {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
        .toPromise()
        .then(res => Checkpoint.fromData(res.json()));
    }
}
