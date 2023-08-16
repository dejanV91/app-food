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
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
