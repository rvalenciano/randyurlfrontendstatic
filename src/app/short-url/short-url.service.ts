import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { UrlFormResponse } from './url-form-response';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShortUrlService {
    private shortUrlEndpoint = 'https://mysterious-brook-25123.herokuapp.com/v1/urls';  // URL to web api
    constructor(
        private http: Http,
    ) { }

    getShortUrl(Url: string): Promise<UrlFormResponse> {
        const url = this.shortUrlEndpoint;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const stringifiedParams = JSON.stringify({
            url: Url,
        });
        return this.http
            .post(url, stringifiedParams, options)
            .toPromise()
            .then((response) => {
                return { url: response.json() } as UrlFormResponse;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}