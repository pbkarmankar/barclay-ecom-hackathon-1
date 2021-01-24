import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  apiBaseUrl: string = environment.apiBaseUrl;
  constructor(public shoppingCarService: ShoppingCartService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

}
