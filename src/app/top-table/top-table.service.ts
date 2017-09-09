import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {TopTable} from './top-table';

@Injectable()
export class TopTableService {
  private tableURL = 'https://mysterious-brook-25123.herokuapp.com/v1/top';  // URL to web api
  constructor(
    private http: Http,
  ) { }

  getTableData(): Promise<TopTable> {
    return this.http.get(this.tableURL)
      .toPromise()
      .then((response) => { return { data: response.json() } as TopTable; })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}