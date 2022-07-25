import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  data : Cart[] ;
  total: number = 0;
  
  constructor( 
    private CartService:CartService,
    private Router:Router
    ) { }
 
  /* Get the Total from the Service */
  ngOnInit(): void {
    this.data = this.CartService.cart
    this.total = this.CartService.getTotal()
  }
 /* Navigate List Products Page */
  navigate(){
    this.Router.navigate(['/'])
  }
}
