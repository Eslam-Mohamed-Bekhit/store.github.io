import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/interfaces/cart';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /* Initialize our variables */
  data: Cart[];
  total: number = 0;

  /* Inject Cart Service and Router Module */
  constructor(
    private CartService: CartService,
    private Router: Router
  ) { }

  /* Assign Data to our Variables and Calc the Total*/
  ngOnInit(): void {
    this.data = this.CartService.cart
    this.total = this.CartService.getTotal()
  }

  /* Update our Service Data when Customer change amount value will use it   */
  editCart(index: number, amount: number) {
    this.CartService.editCart(index, amount)
  }
 
  onSubmit(ngForm: NgForm): void {
    this.Router.navigate(['/success'])
  }

  /* Update our Service Data when Customer change amount,edit amount in Cart service then calc total to update Total  */
  TotalCalc(index: number, amount: number): void {
    this.CartService.editCart(index, amount)
    this.total = 0;
    this.total = this.CartService.getTotal()
  }

  /* Delete Item in Cart by idand Update Cart Service to Update the Total */
  deleteItemFromCart(index: number): void {
    this.CartService.deletOne(index)
    this.total = 0;
    this.total = this.CartService.getTotal()
  }
  deleteAll(){
    this.CartService.clearCart()
    this.total = 0;
    this.total = this.CartService.getTotal()
  }

}
