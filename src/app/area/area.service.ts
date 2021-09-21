import { Area } from './area';
import { Endpoints } from '../endpoints';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import { AuthService } from '../auth/auth.service';
import { Page } from '../shared/page/page';
import {toPromise} from 'rxjs/operator/toPromise';

@Injectable()
export class AreaService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,
              private auth: AuthService) {}

  list(): Promise<Array<Area>> {
    return this.http.get(Endpoints.areaURL)
                        .toPromise()
                        .then(response => {
                          return Area.fromListData(response.json());
                        });
  }


  listPaged(filter: any, page: Page<Area>) {
    let params = new URLSearchParams();
    params.appendAll(page.toURLSearchParams());
    params.append('filter', filter ? filter : '');
    return this.http.get(`${Endpoints.areaURL}/paged`,
                        {
                          search: params,
                        })
                        .toPromise()
                        .then(response => {
                          page.setResultFromServer(response.json());
                          page.data = Area.fromListData(page.data);
                          return page;
                        });
  }

  find(id: number | string) {
    let url = `${Endpoints.areaURL}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => {
                 let area = Area.fromData(response.json());

                 return area;
               });
  }

  save(area: Area): Promise<Area> {
    if (area.id) {
      return this.update(area);
    }else {
      return this.create(area);
    }
  }

  delete(id: number | string): Promise<void> {
    let url = `${Endpoints.areaURL}/${id}`;
    return this.http.delete(url,
                            {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(() => null);
  }

  private create(area: Area): Promise<Area> {
    const url = `${Endpoints.areaURL}`
    return this.http
      .post(url, JSON.stringify(area),
        {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(res => res.json());
  }

  private update(area: Area): Promise<Area> {
    const url = `${Endpoints.areaURL}/${area.id}`;
    return this.http
      .put(url, JSON.stringify(area), {headers: this.auth.appendOrCreateAuthHeader(this.headers)})
      .toPromise()
      .then(res => res.json());
  }
}
