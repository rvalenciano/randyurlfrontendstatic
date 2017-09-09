import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { BotFormResponse } from './bot-form-response';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class BotService {
    private botUrl = 'https://mysterious-brook-25123.herokuapp.com/v1/bot';  // URL to web api
    constructor(
        private http: Http,
    ) { }

    getNewUrls(numberOfUrls: number): Promise<BotFormResponse> {
        const url = this.botUrl;



        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const stringifiedParams = JSON.stringify({
            number: numberOfUrls,
        });
        return this.http
            .post(url, stringifiedParams, options)
            .toPromise()
            .then((response) => {
                return { urls: response.json() } as BotFormResponse;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}