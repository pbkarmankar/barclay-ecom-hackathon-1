import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, @Inject(LOCAL_STORAGE) private storage: StorageService,
  private shoppingCartService: ShoppingCartService) { }

  paymentId?: string;
  paymentStatus?: string;
  transactionId?: string;

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.queryParams);
    this.paymentId = this.activatedRoute.snapshot.queryParams['payment_id'];
    this.paymentStatus = this.activatedRoute.snapshot.queryParams['payment_status'];
    this.transactionId = this.activatedRoute.snapshot.queryParams['transaction_id'];
    if (this.paymentStatus === 'Failed') {
      this.router.navigateByUrl('/error');
    } else {
      this.storage.set('cart', []);
      this.shoppingCartService.cartItems = [];
    }
  }

}
