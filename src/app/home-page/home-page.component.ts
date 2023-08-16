import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  foods!: Food[];

  constructor(private foodService: FoodService) {
    this.foods = this.foodService.getAll();
  }
}
