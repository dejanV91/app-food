import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StarRatingModule } from 'angular-star-rating';
import { FoodPageComponent } from './food-page/food-page.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomePageComponent, FoodPageComponent],
  imports: [BrowserModule, AppRoutingModule, StarRatingModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
