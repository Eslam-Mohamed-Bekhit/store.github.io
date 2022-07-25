import { Injectable } from '@angular/core';
import { Items } from '../interfaces/items';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  /* Assign URL to use it to get the data  */
  url :string = "assets/data.json";
  /* Initialize Item array and Item& BehaviorSubject ,make them private For encapsulation */
  private Items: Items[] = [];
  private Items$ = new BehaviorSubject<Items[]>([]);

  /* Inject HttpClient */
  constructor(private HttpClient:HttpClient) { }


  /* Make Observable Items */
  observItems():Observable<Items[]>{
  return this.Items$.asObservable();
}

/* get the data from the file using HttpClien and assign it in the Items array and in Items$ ovserable  */
getItemsInService() {
  this.HttpClient.get<Items[]>(this.url).subscribe((Items) => {
    this.Items = Items;
    this.Items$.next(this.Items);
  });
}


/* to get Item by id , we use pipe to can use chain multiple operators togetherand , we use map
 then we use find to loop and get the Item that match the Id  */
getItemById(itemId: number): Observable<Items> {
  return this.Items$.pipe(map((item) => item.find(item => item.id == itemId)));
}


}