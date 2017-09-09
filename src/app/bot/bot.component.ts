import { Component, OnInit } from '@angular/core';
import {BotService} from './bot.service';
import {BotFormResponse} from './bot-form-response';
@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  successfullUpdate: number;
  errorMessage: String;
  dataExtracted: Object[];
  numberOfUrls: number;

  constructor(private bt:BotService) {
    this.dataExtracted = [];
   }

  ngOnInit() {
    this.successfullUpdate = 0;
    this.numberOfUrls = 5; // Default value
  }

  getNewUrls(numberOfUrls: any): Promise<any> {
    this.successfullUpdate = 0;
    return this.bt.getNewUrls(numberOfUrls.number)
    .then((botFormRespose: BotFormResponse)=> {
      this.dataExtracted = botFormRespose.urls;
      this.successfullUpdate = 1;
    }).catch((error) => {
      this.errorMessage = error.message;
      this.successfullUpdate = -1;
    });
  }

}
