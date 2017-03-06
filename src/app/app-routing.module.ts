import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./herodetail/hero-detail.component";
import {HeroesComponent} from "./hero/heroes.component";
import {WebSocketComponent} from "./websocket/websocket.component";
import {SwiperComponent} from "./swiper/swiper.component";


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'websocket',     component: WebSocketComponent },
  { path: 'swiper',     component: SwiperComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
