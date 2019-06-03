import { Component, Inject, ViewChild } from "@angular/core";
import { EditProductDialog } from "../../../product-page/product-dialog/edit-product-dialog/edit-product";
import { MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Order, CartDetailId, ShoppingCart, Employee, Warehouse, ExportRec } from "src/app/components/interface/interface";
import { ProductService } from "src/app/services/product/product.service";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
    templateUrl: './waiting-order-dialog.component.html',
    styleUrls: ['./waiting-order-dialog.component.css']
})

export class WaitingingOrderDialog {
    constructor(private productService: ProductService, public dialogRef: MatDialogRef<WaitingingOrderDialog>, @Inject(MAT_DIALOG_DATA) public data: Order) { }
    displayedColumns: string[] = ['id', 'productName', 'amount']
    order: Order;
    cartDetail: ShoppingCart[];
    selection: any;
    dataSource: any;
    warehouse: Warehouse[];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    ngOnInit() {
        console.log(this.data);
        this.getCartDetail();
    }

    getCartDetail() {
        this.order = this.data;
        let cartId = this.order.cart.cartId;
        this.productService.getCart(cartId).subscribe(
            resp => {
                this.cartDetail = resp.body;
                this.dataSource = new MatTableDataSource<ShoppingCart>(this.cartDetail);
                this.selection = new SelectionModel<ShoppingCart>(true, []);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        )
    }

    approveOrder() {
        let user = JSON.parse(sessionStorage.user);
        let employee: Employee = user.employee;
        console.log(employee)
        let warehouse: Warehouse = {warehouseId: 1, warehouseName: "Chi Nhánh 1"}
        let exportRec: ExportRec = {warehouse: warehouse, employee: employee};
        this.productService.saveExportRec(this.order.orderId, exportRec).subscribe(
            resp => {
                console.log("Successfully!")
            }
        )
    }
}