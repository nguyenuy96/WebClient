import { Component } from "@angular/core";
import { ProductService } from "../../../../../services/product/product.service";
import { Warehouse, Product } from "../../../../interface/interface";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'product-store',
    templateUrl: './product-store.html',
    styleUrls: ['./product-store.css']
})
export class ProductStore {
    constructor(private productService: ProductService) { }
    warehouses: Warehouse[];
    products: Product[];
    ngOnInit(){
        this.getProduct();
        this.getWarehouse()
    }

    getWarehouse(){
        this.productService.getWarehouse().subscribe(
            resp => {
                this.warehouses = resp.body;
            },
            (errMsg: HttpErrorResponse) => {

            }
        )
    }

    getProduct(){
        this.productService.listProduct().subscribe(
            resp => {
                this.products = resp.body;
            },
            (errMsg: HttpErrorResponse) => {

            }
        )
    }


}