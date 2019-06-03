import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ShoppingCart, Order } from 'src/app/components/interface/interface';
import { MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { ProductService } from 'src/app/services/product/product.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-approved-order-dialog',
  templateUrl: './approved-order-dialog.component.html',
  styleUrls: ['./approved-order-dialog.component.css']
})
export class ApprovedOrderDialogComponent implements OnInit {

  constructor(private productService: ProductService,public dialogRef: MatDialogRef<ApprovedOrderDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Order) { }
  displayedColumns: string[] = ['id', 'productName', 'amount']
  order: Order;
  cartDetail: ShoppingCart[];
  selection: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.getCartDetail();
  }
  getCartDetail() {
    this.order = this.data;
    console.log(this.order)
    let cartId = this.order.cart.cartId;
    this.productService.getCart(cartId).subscribe(
        resp => {
            this.cartDetail = resp.body;
            console.log(this.cartDetail)
            this.dataSource = new MatTableDataSource<ShoppingCart>(this.cartDetail);
            this.selection = new SelectionModel<ShoppingCart>(true, []);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    )
}
}
