import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { User } from 'src/app/components/users/user.services';
import { Account } from 'src/app/components/interface/interface';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getCustomerWaitingOrders();
  }

  getCustomerWaitingOrders() {
    let account: Account = JSON.parse(sessionStorage.user);
    let customerId = account.customer.customerId;
    this.productService.getOrderByCustomer(customerId, "Waiting").subscribe(resp => {
      console.log(resp.body);
    })
  }

  getCustomerApprovedOrders() {
    let account: Account = JSON.parse(sessionStorage.user);
    let customerId = account.customer.customerId;
    this.productService.getOrderByCustomer(customerId, "Approved").subscribe(resp => {
      console.log(resp.body);
    })
  }

}
