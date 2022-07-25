import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /* initialize our Cart to empty array */
  cart: Cart[] = []

  constructor() { }

  /* add item to the cart */

  addToCart(item: Cart) {
    /* check if the user choose this item alreacy in his cart */
    let index = this.cart.findIndex((carts) => carts.id == item.id)
    /* if the user alread has this item ,just increase the amount  */
    if (index >= 0) { this.cart[index].amount += item.amount }
    /* else add the item with it amount to the cart as new one */
    else { this.cart.push(item) }
    /* in all cases alret the user that his item is add to the cart */
    alert('Added to Cart!')
  }

  /* remove item with id */

  removeFromCart(id: number) {
    this.cart.splice(id, 1)
  }

  /* update the item's amount in the cart by index */
  editCart(index: number, amount: number) {
    this.cart[index].amount = amount
    alert(' your edit the amount ')
  }

  /* clear all Items */
  clearCart() {
    if(confirm('Are you sure to delete all items in the cart ?!')){
      this.cart.splice(0,this.cart.length)
      alert(' you confiremd to  deleted all items in the cart!')
    }
  }

  /* clear one Item by index */
  deletOne(index: number) {
    if(confirm('Are you sure to delete item in the cart ?!')){
    this.cart.splice(index, 1)
    alert(' you confiremd to  deleted item in the cart!')
  }
  }

  /* get the total prices of all items in the cart */
  getTotal() {
    let total = 0;
    this.cart.forEach(item => total += item.price * item.amount)
    return total
  }
} 
