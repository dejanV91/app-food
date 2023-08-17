import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  changeQuanity(cartItem: CartItem, quantity: string) {
    let quantityToString = parseInt(quantity);
    this.cartService.changeQuantity(cartItem, quantityToString);
  }

  remove(foodId: number) {
    this.cartService.removeCartItem(foodId);
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
}
