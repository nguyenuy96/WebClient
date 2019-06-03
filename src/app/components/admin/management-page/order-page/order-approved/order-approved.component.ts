import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Order } from 'src/app/components/interface/interface';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ApprovedOrderDialogComponent } from '../order-dialog/approved-order-dialog/approved-order-dialog.component';

@Component({
  selector: 'app-order-approved',
  templateUrl: './order-approved.component.html',
  styleUrls: ['./order-approved.component.css']
})
export class OrderApprovedComponent{

  constructor(private productService: ProductService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'name', 'phone', 'address', 'payment', 'state']
  orders: Order[];
  selection: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.getApprovedOrders();
  }

  getApprovedOrders() {
    this.productService.getOrderByState('Approved').subscribe(
      resp => {
        this.orders = resp.body;
        this.dataSource = new MatTableDataSource<Order>(this.orders);
        this.selection = new SelectionModel<Order>(true, []);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  openDialog(order: Order): void {
    const dialogRef = this.dialog.open(ApprovedOrderDialogComponent, {
      width: '80%',
      data: order
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}
