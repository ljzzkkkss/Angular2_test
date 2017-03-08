import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';
import { SwiperModule } from 'angular2-swiper-wrapper';
import { SwiperConfigInterface } from 'angular2-swiper-wrapper';

import './rxjs-extensions';

import {AppComponent} from "./navbar/app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {WebSocketComponent} from "./websocket/websocket.component";
import {HeroDetailComponent} from "./herodetail/hero-detail.component";
import {HeroesComponent} from "./hero/heroes.component";
import {HeroSearchComponent} from "./herosearch/hero-search.component";
import {HeroService} from "./service/hero.service";
import {SwiperComponent} from "./swiper/swiper.component";
import {AppRoutingModule} from "./app-routing.module";



const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    WebSocketComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    SwiperModule.forRoot(SWIPER_CONFIG),
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]

})

export class AppModule { }
