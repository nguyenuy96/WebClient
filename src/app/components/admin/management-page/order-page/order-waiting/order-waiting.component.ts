import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Order } from 'src/app/components/interface/interface';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { WaitingingOrderDialog } from '../order-dialog/waiting-order-dialog/waiting-order-dialog.component';
@Component({
  selector: 'app-order-waiting',
  templateUrl: './order-waiting.component.html',
  styleUrls: ['./order-waiting.component.css']
})
export class OrderWaitingComponent implements OnInit {

  constructor(private productService: ProductService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'name', 'phone', 'address', 'payment', 'state']
  selection: any;
  dataSource: any;
  orders: Order[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.getWatingOrders();
  }

  getWatingOrders() {
    this.productService.getOrderByState('Waiting').subscribe(
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
    const dialogRef = this.dialog.open(WaitingingOrderDialog, {
      width: '80%',
      data: order
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}
