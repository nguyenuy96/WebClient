import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Order } from 'src/app/components/interface/interface';

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrls: ['./order-completed.component.css']
})
export class OrderCompletedComponent implements OnInit {

  constructor(private productService: ProductService) { }

  orders: Order[];
  ngOnInit() {
    this.getCompletedOrders();
  }

  getCompletedOrders() {
    console.log("ád")
    this.productService.getOrderByState('Completed').subscribe(
      resp => {
        this.orders = resp.body;
        console.log(this.orders);
      }
    )
  }
}
