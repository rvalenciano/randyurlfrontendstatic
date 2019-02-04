import { Component, OnInit } from '@angular/core';
import {ShortUrlService} from './short-url.service';
import {UrlFormResponse} from './url-form-response';
@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

 
  successfullUpdate: number;
  errorMessage: String;
  dataExtracted: Object;
  url: string;

  constructor(private shortUrlService:ShortUrlService) {
    this.dataExtracted = {};
   }

  ngOnInit() {
    this.successfullUpdate = 0;
    this.url = ''; // Default value
  }

  getShortUrls(urlObj: any): Promise<any> {
    this.successfullUpdate = 0;
    return this.shortUrlService.getShortUrl(urlObj.url)
    .then((shortUrlFormRespose: any)=> {
      this.dataExtracted = shortUrlFormRespose.url.minified_url;
      this.successfullUpdate = 1;
    }).catch((error) => {
      this.errorMessage = error.message;
      this.successfullUpdate = -1;
    });
  }
}
