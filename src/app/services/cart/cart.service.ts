import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  constructor() {}

  addToCart(cartItem: CartItem) {
    let item = this.cart.items.find((item) => item.food.id == cartItem.food.id);
    if (item) {
      this.changeQuantity(item, item.quantity + 1);
      return;
    }
    this.cart.items.push(cartItem);
  }

  removeCartItem(foodId: number) {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
  }

  changeQuantity(cartItem: CartItem, quantity: number): void {
    cartItem.quantity = quantity;
  }

  getCart() {
    return this.cart;
  }
}
