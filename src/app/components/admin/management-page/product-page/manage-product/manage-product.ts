import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { Product } from "../../../../interface/interface";
import { ProductService } from "../../../../../services/product/product.service";
import { EditProductDialog } from "../product-dialog/edit-product-dialog/edit-product";

@Component({
    templateUrl: './manage-product.html',
    styleUrls: ['./manage-product.css']
})
export class ManageProductComponent {
    constructor(private productService: ProductService, public dialog: MatDialog) { }
    displayedColumns: string[] = ['productId', 'productName', 'productType', 'unitPrice', 'edit'];
    dataSource: any;
    selection: any;
    products: Product[];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    ngOnInit() {
        this.getProduct();
    }
    getProduct() {
        this.productService.listProduct().subscribe(
            resp => {
                this.products = resp.body;
                this.dataSource = new MatTableDataSource<Product>(this.products);
                this.selection = new SelectionModel<Product>(true, []);
                this.dataSource.paginator = this.paginator;
                this.paginator._intl.itemsPerPageLabel = "Sản phẩm/trang";
                this.dataSource.sort = this.sort;
                console.log(resp.body)
            }
        )
    }
    selectProduct(product) {
        console.log(product);
    }

    editProduct(product: Product): void {
        const dialogRef = this.dialog.open(EditProductDialog, {
            width: '35%',
            data: product
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }

    storeProduct(): void {
        const dialogRef = this.dialog.open(EditProductDialog, {
            width: '250px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}