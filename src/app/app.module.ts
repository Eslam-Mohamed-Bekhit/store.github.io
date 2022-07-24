import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item/product-item.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail/product-item-detail.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemDetailComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
