import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/interfaces/items';
import { ItemsService } from 'src/app/services/items.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/interfaces/cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  /* initialize our Data observable */
  data$: Observable<Items[]>

  
  
  /* Inject our ItemsService and CartService */
  constructor(
    private ItemsService: ItemsService,
    private CartService: CartService) {
    /* Assign Data to the Observable */
    this.ItemsService.getItemsInService();
    this.data$ = this.ItemsService.observItems();
  }

  ngOnInit() { }

  /* add the Item to CartService data */
  addToCart(Item: Cart) {
    this.CartService.addToCart(Item)
  }


}
