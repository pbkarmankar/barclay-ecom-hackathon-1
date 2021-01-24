import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem, ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: ShoppingCartItem[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartItems = this.shoppingCartService.getItems();
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce((acc, cv) => acc + cv.item.price * cv.quantity, 0);
  }

}
