import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    private activeRoute: ActivatedRoute,
    private foodService: FoodService
  ) {
    this.activeRoute.params.subscribe((params) => {
      if (params['foodId']) {
        this.food = this.foodService.getFoodById(params['foodId']);
      }
    });
  }
}
