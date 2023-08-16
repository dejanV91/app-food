import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FoodPageComponent } from './food-page/food-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'food-page/:foodId', component: FoodPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
