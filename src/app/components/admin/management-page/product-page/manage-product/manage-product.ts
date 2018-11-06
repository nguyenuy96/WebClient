import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { Product } from "../../../../interface/interface";
import { ProductService } from "../../../../../services/product/product.service";

@Component({
    templateUrl: './manage-product.html',
    styleUrls: ['./manage-product.css']
})
export class ManageProductComponent {
    constructor(private productService: ProductService){}
    displayedColumns: string[] = ['productId', 'productName', 'productType', 'unitPrice'];
    dataSource:any;
    selection: any;
    products: Product[];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    ngOnInit() {
        this.getProduct();
    }
    getProduct(){
        this.productService.listProduct().subscribe(
            resp => {
                this.products = resp.body;
                this.dataSource = new MatTableDataSource<Product>(this.products);
                this.selection = new SelectionModel<Product>(true, []);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        )
    }
    selectProduct(product){
        console.log(product);
    }
}