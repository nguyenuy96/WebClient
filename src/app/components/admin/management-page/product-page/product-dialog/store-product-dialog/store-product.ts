import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Product, Warehouse } from "../../../../../interface/interface";
import { ProductService } from "../../../../../../services/product/product.service";
import { RestAPI } from "../../../../../../services/rest-api";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'store-product',
    templateUrl: './store-product.html',
    styleUrls: ['./store-product.css']
})

export class StoreProductDialog {
    constructor(public dialogRef: MatDialogRef<StoreProductDialog>, @Inject(MAT_DIALOG_DATA) public data: Product, private productService: ProductService, private restAPI: RestAPI) { }

    warehouses: Warehouse[];
    ngOnInit() {
        this.getWarehouse();
    }

    getWarehouse() {
        this.productService.getWarehouse().subscribe(
            resp => {
                this.warehouses = resp.body;
            },
            (errMesg: HttpErrorResponse) => {

            }
        )
    }

    saveStorageReceipt() {

    }

    onNoClick() {
        this.dialogRef.close();
    }

}