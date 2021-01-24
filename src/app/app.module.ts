import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { SearchComponent } from './search/search.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ErrorComponent } from './error/error.component';
import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OrderSuccessComponent,
    SearchComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'order-success', component: OrderSuccessComponent},
      {path: 'checkout-page', component: CheckoutComponent},
      {path: 'search', component: SearchComponent}
    ])
  ],
  providers: [
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
