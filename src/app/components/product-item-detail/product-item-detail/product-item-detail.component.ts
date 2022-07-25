import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items } from 'src/app/interfaces/items';
import { CartService } from 'src/app/services/cart.service';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  /* initialize MyData as Observale and the amount as number with init value 1 */
  amount:number = 1;
  myData$ :Observable<Items>;

  /* Inject Router, ActivatedRote, ItemsService and CartService  */
  constructor(
    private Router:Router , 
    private ActivatedRoute:ActivatedRoute , 
    private ItemsService:ItemsService,
    private CartService:CartService ) { 
    this.ItemsService.getItemsInService();
    }

  /* In OnInit LifeCycleHook we get Our Item Id from Params and Convert it Number ,
   and Assign MyData$ to the observable with this Item data to Display it  */
  ngOnInit(): void {
    let id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id') ?? '');
    this.myData$ = this.ItemsService.getItemById(id)
  }

  /* add new Item with amount to the CartService */
  addToCart(item:Items,NgForm:NgForm){
    if(NgForm.valid){
    this.CartService.addToCart({...item , amount:this.amount})}else{
      return;
    }
  }

  /* Navigate to List Product Page */
  navigate(){
    this.Router.navigate(['/'])
  }

  alertChange(){
    alert('you edit the amount')
  }

  
}
