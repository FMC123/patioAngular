import { CheckpointStatus } from './checkpoint-status';
import { Endpoints } from '../endpoints';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import { AuthService } from '../auth/auth.service';
import { Page } from '../shared/page/page';
import {toPromise} from 'rxjs/operator/toPromise';

@Injectable()
export class CheckpointStatusService {
  private headers = new Headers({'Content-Type': 'application/json'});
  allStatus = new EventEmitter<any>();
  constructor(private http: Http,
              private auth: AuthService) {}

  list(): Promise<Array<CheckpointStatus>> {
    return this.http.get(Endpoints.checkpointStatusURL)
                        .toPromise()
                        .then(response => {
                          return CheckpointStatus.fromListData(response.json());
                        });
  }


  listPaged(filter: any, page: Page<CheckpointStatus>) {
    let params = new URLSearchParams();
    params.appendAll(page.toURLSearchParams());
    params.append('filter', filter ? filter : '');
    return this.http.get(`${Endpoints.checkpointStatusURL}/paged`,
                        {
                          search: params,
                        })
                        .toPromise()
                        .then(response => {
                          page.setResultFromServer(response.json());
                          page.data = CheckpointStatus.fromListData(page.data);
                          return page;
                        });
  }

  find(id: number | string) {
    let url = `${Endpoints.checkpointStatusURL}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => {
                 let checkpointStatus = CheckpointStatus.fromData(response.json());

                 return checkpointStatus;
               });
  }

  save(checkpointStatus: CheckpointStatus): Promise<CheckpointStatus> {
    this.allStatus.emit(checkpointStatus);
    if (checkpointStatus.id) {
      return this.update(checkpointStatus);
    }else {
      return this.create(checkpointStatus);
    }
  }

  delete(id: number | string): Promise<void> {
    let url = `${Endpoints.checkpointStatusURL}/${id}`;
    return this.http.delete(url,
                            {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(() => null);
  }

  private create(checkpointStatus: CheckpointStatus): Promise<CheckpointStatus> {
    const url = `${Endpoints.checkpointStatusURL}`
    return this.http
      .post(url, JSON.stringify(checkpointStatus),
        {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(res => res.json());
  }

  private update(checkpointStatus: CheckpointStatus): Promise<CheckpointStatus> {
    const url = `${Endpoints.checkpointStatusURL}/${checkpointStatus.id}`;
    return this.http
      .put(url, JSON.stringify(checkpointStatus), {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(res => res.json());
  }
}
