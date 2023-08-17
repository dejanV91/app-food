import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    private activeRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    this.activeRoute.params.subscribe((params) => {
      if (params['foodId']) {
        this.food = this.foodService.getFoodById(params['foodId']);
      }
    });
  }
  addToCart() {
    this.cartService.addToCart(new CartItem(this.food));
    this.router.navigate(['cart-page']);
  }
}
