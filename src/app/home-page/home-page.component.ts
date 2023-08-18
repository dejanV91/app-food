import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  foods!: Food[];

  constructor(
    private foodService: FoodService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getFoodBySearchTerm(params['searchTerm']);
      } else if (params['tag']) {
        this.foods = this.foodService.getFoodsByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }

  changeFavorite(food: Food, event: Event) {
    this.foodService.changeFavorite(food);
    event.stopPropagation();
  }
}
