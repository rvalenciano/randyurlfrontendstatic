import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopTableComponent } from './top-table/top-table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {TopTableService} from './top-table/top-table.service';
import { BotComponent } from './bot/bot.component';
import { BotService } from './bot/bot.service';
import { ShortUrlComponent } from './short-url/short-url.component';
import { ShortUrlService } from './short-url/short-url.service';

@NgModule({
  declarations: [
    AppComponent,
    TopTableComponent,
    TabsComponent,
    BotComponent,
    ShortUrlComponent
  ],
  imports: [
    BrowserModule, TabsModule.forRoot(), HttpModule, FormsModule
  ],
  providers: [TopTableService, BotService, ShortUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
