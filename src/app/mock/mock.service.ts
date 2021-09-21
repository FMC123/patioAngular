import { Mock } from './mock';
import { Endpoints } from '../endpoints';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import { AuthService } from '../auth/auth.service';
import { Page } from '../shared/page/page';
import {toPromise} from 'rxjs/operator/toPromise';

@Injectable()
export class MockService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,
              private auth: AuthService) {}

  // list(): Promise<Array<Mock>> {
  //   return this.http.get(Endpoints.integracaoMockURL)
  //                       .toPromise()
  //                       .then(response => {
  //                         return Mock.fromListData(response.json());
  //                       });
  // }


  // listPaged(filter: any, page: Page<Mock>) {
  //   let params = new URLSearchParams();
  //   params.appendAll(page.toURLSearchParams());
  //   params.append('filter', filter ? filter : '');
  //   return this.http.get(`${Endpoints.integracaoMockURL}/paged`,
  //                       {
  //                         search: params,
  //                       })
  //                       .toPromise()
  //                       .then(response => {
  //                         page.setResultFromServer(response.json());
  //                         page.data = Mock.fromListData(page.data);
  //                         return page;
  //                       });
  // }

  // find(id: number | string) {
  //   let url = `${Endpoints.integracaoMockURL}/${id}`;
  //   return this.http.get(url)
  //              .toPromise()
  //              .then(response => {
  //                let mock = Mock.fromData(response.json());

  //                return mock;
  //              });
  // }

  findPlaca(p_ds_placa: string) {
    let url = `${Endpoints.integracaoMockURL}/${p_ds_placa}`;
    return this.http.get(url, JSON.stringify(p_ds_placa))
      .toPromise()
      .then(response => {
        // let mock = Mock.fromData(response.json());
        // let mock = Mock.fromData(response.json());

        // return mock;
        return response.text()?JSON.parse(response.text()):{}
      });
  }

  // save(mock: Mock): Promise<Mock> {
  //   if (mock.id) {
  //     return this.update(mock);
  //   }else {
  //     return this.create(mock);
  //   }
  // }

  // delete(id: number | string): Promise<void> {
  //   let url = `${Endpoints.integracaoMockURL}/${id}`;
  //   return this.http.delete(url,
  //                           {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
  //     .toPromise()
  //     .then(() => null);
  // }

  // private create(mock: Mock): Promise<Mock> {
  //   const url = `${Endpoints.integracaoMockURL}`
  //   return this.http
  //     .post(url, JSON.stringify(mock),
  //       {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
  //     .toPromise()
  //     .then(res => res.json());
  // }

  // private update(mock: Mock): Promise<Mock> {
  //   const url = `${Endpoints.integracaoMockURL}/${mock.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(mock), {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
  //     .toPromise()
  //     .then(res => res.json());
  // }
}
